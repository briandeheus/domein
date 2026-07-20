"""dnsmasq lifecycle management and config compilation.

All dnsmasq state lives as generated files in the data dir, rebuilt from the
database on every change:

- blocked.hosts   compiled blocklists (addn-hosts, reloadable via SIGHUP)
- records.hosts   custom A/AAAA records (addn-hosts, reloadable via SIGHUP)
- records.conf    CNAME/TXT/wildcard records (conf-file, needs a restart)
- dnsmasq.conf    base config, written at every start
"""

import asyncio
import signal
import time
from collections import deque
from pathlib import Path

from . import config, db

BLOCK_TARGETS = ("0.0.0.0", "::")


def _write_if_changed(path: Path, content: str) -> bool:
    if path.exists() and path.read_text() == content:
        return False
    path.write_text(content)
    return True


def compile_blocked_hosts() -> tuple[bool, int]:
    allow = {r["domain"] for r in db.query("SELECT domain FROM allowlist")}
    domains: set[str] = set()
    for row in db.query("SELECT id FROM blocklists WHERE enabled = 1"):
        cache = config.LISTS_DIR / f"{row['id']}.txt"
        if cache.exists():
            domains.update(cache.read_text().split())
    domains -= allow
    lines = [f"{target} {d}" for d in sorted(domains) for target in BLOCK_TARGETS]
    content = ("\n".join(lines) + "\n") if lines else ""
    changed = _write_if_changed(config.DATA_DIR / "blocked.hosts", content)
    return changed, len(domains)


def compile_records() -> tuple[bool, bool]:
    hosts: list[str] = []
    conf: list[str] = []
    for r in db.query("SELECT * FROM records WHERE enabled = 1 ORDER BY name, type"):
        if r["type"] in ("A", "AAAA"):
            if r["name"].startswith("*."):
                conf.append(f"address=/{r['name'][2:]}/{r['value']}")
            else:
                hosts.append(f"{r['value']} {r['name']}")
        elif r["type"] == "CNAME":
            conf.append(f"cname={r['name']},{r['value']}")
        elif r["type"] == "TXT":
            conf.append(f'txt-record={r["name"]},"{r["value"]}"')
    hosts_content = ("\n".join(hosts) + "\n") if hosts else ""
    conf_content = ("\n".join(conf) + "\n") if conf else ""
    hosts_changed = _write_if_changed(config.DATA_DIR / "records.hosts", hosts_content)
    conf_changed = _write_if_changed(config.DATA_DIR / "records.conf", conf_content)
    return hosts_changed, conf_changed


class DnsmasqManager:
    def __init__(self) -> None:
        self.proc: asyncio.subprocess.Process | None = None
        self.started_at: float | None = None
        self.last_error: str | None = None
        self.blocked_count = 0
        self._stderr_tail: deque[str] = deque(maxlen=20)
        self._lock = asyncio.Lock()

    @property
    def running(self) -> bool:
        return self.proc is not None and self.proc.returncode is None

    def status(self) -> dict:
        return {
            "running": self.running,
            "pid": self.proc.pid if self.running and self.proc else None,
            "started_at": self.started_at if self.running else None,
            "port": config.DNS_PORT,
            "error": self.last_error,
        }

    def _write_base_conf(self) -> Path:
        lines = [
            f"port={config.DNS_PORT}",
            "no-resolv",
            "no-poll",
            "no-hosts",
            "domain-needed",
            "bogus-priv",
            "cache-size=10000",
            *(f"server={u}" for u in config.UPSTREAMS),
            f"addn-hosts={config.DATA_DIR / 'blocked.hosts'}",
            f"addn-hosts={config.DATA_DIR / 'records.hosts'}",
            f"conf-file={config.DATA_DIR / 'records.conf'}",
        ]
        if config.DNS_LISTEN:
            lines += [f"listen-address={config.DNS_LISTEN}", "bind-interfaces"]
        path = config.DATA_DIR / "dnsmasq.conf"
        path.write_text("\n".join(lines) + "\n")
        return path

    async def _start(self) -> None:
        conf = self._write_base_conf()
        for name in ("blocked.hosts", "records.hosts", "records.conf"):
            path = config.DATA_DIR / name
            if not path.exists():
                path.write_text("")
        try:
            self.proc = await asyncio.create_subprocess_exec(
                config.DNSMASQ_BIN,
                "--keep-in-foreground",
                "--log-facility=-",
                f"--conf-file={conf}",
                stdout=asyncio.subprocess.DEVNULL,
                stderr=asyncio.subprocess.PIPE,
            )
        except FileNotFoundError:
            self.proc = None
            self.last_error = f"dnsmasq binary not found ({config.DNSMASQ_BIN})"
            return
        self._stderr_tail.clear()
        asyncio.get_running_loop().create_task(self._watch(self.proc))
        await asyncio.sleep(0.5)
        if self.running:
            self.started_at = time.time()
            self.last_error = None
        else:
            self.last_error = (
                " / ".join(self._stderr_tail) or "dnsmasq exited immediately"
            )
            self.proc = None

    async def _watch(self, proc: asyncio.subprocess.Process) -> None:
        assert proc.stderr is not None
        while True:
            line = await proc.stderr.readline()
            if not line:
                break
            text = line.decode(errors="replace").rstrip()
            self._stderr_tail.append(text)
            print(f"[dnsmasq] {text}", flush=True)
        await proc.wait()
        if proc is self.proc and proc.returncode not in (0, -signal.SIGTERM):
            tail = self._stderr_tail[-1] if self._stderr_tail else ""
            self.last_error = f"dnsmasq exited (code {proc.returncode}) {tail}".strip()

    async def _stop(self) -> None:
        if self.running and self.proc:
            self.proc.terminate()
            try:
                await asyncio.wait_for(self.proc.wait(), timeout=5)
            except asyncio.TimeoutError:
                self.proc.kill()
                await self.proc.wait()
        self.proc = None

    async def stop(self) -> None:
        async with self._lock:
            await self._stop()

    async def apply(self) -> None:
        """Recompile all generated files and reload/restart dnsmasq as needed."""
        async with self._lock:
            blocked_changed, self.blocked_count = compile_blocked_hosts()
            rec_hosts_changed, rec_conf_changed = compile_records()
            if not self.running or rec_conf_changed:
                await self._stop()
                await self._start()
            elif blocked_changed or rec_hosts_changed:
                assert self.proc is not None
                self.proc.send_signal(signal.SIGHUP)

import asyncio
import logging
import re
import time

import httpx

from domein import config, db

log = logging.getLogger(__name__)

DOMAIN_RE = re.compile(
    r"^(?:[a-z0-9_](?:[a-z0-9_-]{0,61}[a-z0-9_])?\.)+[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$"
)

HOST_IPS = {
    "0.0.0.0",
    "127.0.0.1",
    "255.255.255.255",
    "::",
    "::1",
    "ff00::0",
    "ff02::1",
    "ff02::2",
    "ff02::3",
}

SKIP_NAMES = {
    "localhost",
    "localhost.localdomain",
    "local",
    "broadcasthost",
    "ip6-localhost",
    "ip6-loopback",
    "ip6-localnet",
    "ip6-mcastprefix",
    "ip6-allnodes",
    "ip6-allrouters",
    "ip6-allhosts",
}


def parse(text: str) -> set[str]:
    """Parse hosts-format or plain domain-list blocklists."""
    domains: set[str] = set()
    for line in text.splitlines():
        # Strip inline "#" comments; "!" lines are Adblock-style comments.
        line = line.split("#", 1)[0].strip().lower()
        if not line or line.startswith("!"):
            continue

        # Hosts format: drop the leading IP column ("0.0.0.0 ads.example.com").
        # One line may map several names to the same IP, so keep every field.
        parts = line.split()
        if parts and parts[0] in HOST_IPS:
            parts = parts[1:]

        for part in parts:
            part = part.strip(".")
            # Skip hosts-file boilerplate (localhost and friends) and bare
            # IPv4 addresses, which pass DOMAIN_RE but are not domains.
            if part in SKIP_NAMES or part.replace(".", "").isdigit():
                continue
            # Keep only syntactically valid names; anything else (URLs, junk)
            # would otherwise end up in dnsmasq's addn-hosts file.
            if DOMAIN_RE.match(part):
                domains.add(part)

    return domains


async def fetch(blocklist: dict, client: httpx.AsyncClient) -> None:
    headers = {"User-Agent": f"domein/{config.VERSION}"}

    if blocklist["etag"]:
        headers["If-None-Match"] = blocklist["etag"]

    if blocklist["last_modified"]:
        headers["If-Modified-Since"] = blocklist["last_modified"]

    now = time.time()

    try:
        resp = await client.get(
            blocklist["url"], headers=headers, follow_redirects=True, timeout=60.0
        )

        if resp.status_code == 304:
            db.execute(
                "UPDATE blocklists SET last_fetched_at = ?, last_status = 'ok' WHERE id = ?",
                (now, blocklist["id"]),
            )
            return

        resp.raise_for_status()
        domains = parse(resp.text)

        if not domains:
            raise ValueError("no domains found in list")

        config.LISTS_DIR.mkdir(parents=True, exist_ok=True)
        cache = config.LISTS_DIR / f"{blocklist['id']}.txt"
        cache.write_text("\n".join(sorted(domains)) + "\n")

        db.execute(
            "UPDATE blocklists SET last_fetched_at = ?, last_status = 'ok',"
            " etag = ?, last_modified = ?, entry_count = ? WHERE id = ?",
            (
                now,
                resp.headers.get("etag"),
                resp.headers.get("last-modified"),
                len(domains),
                blocklist["id"],
            ),
        )

    except Exception as exc:
        db.execute(
            "UPDATE blocklists SET last_fetched_at = ?, last_status = ? WHERE id = ?",
            (now, f"error: {exc}", blocklist["id"]),
        )


async def fetch_by_id(blocklist_id: int) -> None:
    rows = db.query("SELECT * FROM blocklists WHERE id = ?", (blocklist_id,))

    if not rows:
        return
    async with httpx.AsyncClient() as client:
        await fetch(rows[0], client)


async def _updater_loop(manager) -> None:
    now = time.time()
    due = [
        b
        for b in db.query("SELECT * FROM blocklists WHERE enabled = 1")
        if b["last_fetched_at"] is None
        or now - b["last_fetched_at"] >= b["refresh_hours"] * 3600
    ]
    if due:
        async with httpx.AsyncClient() as client:
            for blocklist in due:
                await fetch(blocklist, client)
        await manager.apply()


async def updater_loop(manager) -> None:
    while True:
        try:
            await _updater_loop(manager)
        except asyncio.CancelledError:
            raise
        except Exception:
            log.exception("updater failed")
        await asyncio.sleep(60)

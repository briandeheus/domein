# domein

Self-hosted DNS blocker for people who hate Pi-hole. FastAPI manages a dnsmasq
child process; you manage blocklists, custom records and an allowlist from a
single-page web UI. SQLite is the source of truth — dnsmasq config files are
generated artifacts, rebuilt on every change.

- **Blocklists** — add by URL (hosts-format or plain domain lists), per-list
  refresh interval, conditional fetches (ETag/Last-Modified). Updates reload
  dnsmasq via SIGHUP: zero downtime.
- **Records** — custom A/AAAA/CNAME/TXT. Prefix a name with `*.` for wildcard
  A/AAAA. Note: dnsmasq only resolves CNAMEs whose target it itself answers for.
- **Allowlist** — exact-match domains punched out of every blocklist.
- **Auth** — one password (`DOMEIN_PASSWORD`), signed session cookie.

## Layout

```
domein/     FastAPI backend (uv-managed)
frontend/   Vite + React + TS single page, built assets served by FastAPI
deploy/     systemd unit + env example
data/       runtime state (SQLite, compiled dnsmasq files) — created on start
```

## Development

```sh
uv sync
DOMEIN_PASSWORD=dev DOMEIN_DNS_PORT=5343 \
  uv run uvicorn domein.main:app --reload --port 8080

cd frontend
npm install
npm run dev   # http://localhost:5173, proxies /api to :8080
```

Without dnsmasq installed the app still runs; the status board shows the
resolver as DOWN with the reason.

## Deployment (Debian/Ubuntu)

1. **Install dnsmasq, keep its service off** (domein runs its own):

   ```sh
   apt install dnsmasq
   systemctl disable --now dnsmasq
   ```

2. **Free up port 53.** On systems with systemd-resolved the stub listener
   holds `127.0.0.53:53`, which blocks binding the wildcard address:

   ```sh
   mkdir -p /etc/systemd/resolved.conf.d
   printf '[Resolve]\nDNS=1.1.1.1\nDNSStubListener=no\n' \
     > /etc/systemd/resolved.conf.d/domein.conf
   ln -sf /run/systemd/resolve/resolv.conf /etc/resolv.conf
   systemctl restart systemd-resolved
   ```

3. **Install the app:**

   ```sh
   useradd -r -s /usr/sbin/nologin domein
   git clone <repo> /opt/domein
   cd /opt/domein
   uv sync
   ./bin/build.sh   # or build elsewhere and rsync frontend/dist
   chown -R domein:domein /opt/domein
   ```

4. **Configure and start:**

   ```sh
   cp deploy/domein.env.example /etc/domein.env
   chmod 600 /etc/domein.env   # set a real password in here
   cp deploy/domein.service /etc/systemd/system/
   systemctl daemon-reload
   systemctl enable --now domein
   ```

5. Point your router's DHCP DNS at the server. UI is on port 8080 — put a
   reverse proxy with TLS in front if it's reachable beyond your LAN.

Run a single uvicorn worker only (the default): the process owns the dnsmasq
child and the SQLite handle.

## Good starter blocklists

- https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts
- https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/pro.txt

## Environment variables

| Variable               | Default             | Purpose                          |
| ---------------------- | ------------------- | -------------------------------- |
| `DOMEIN_PASSWORD`    | _(required)_        | UI/API password                  |
| `DOMEIN_DATA_DIR`    | `./data`            | SQLite + generated dnsmasq files |
| `DOMEIN_DNS_PORT`    | `53`                | dnsmasq listen port              |
| `DOMEIN_DNS_LISTEN`  | _(all interfaces)_  | dnsmasq listen address           |
| `DOMEIN_UPSTREAMS`   | `1.1.1.1,9.9.9.9`   | upstream resolvers               |
| `DOMEIN_DNSMASQ_BIN` | `dnsmasq`           | dnsmasq binary                   |
| `DOMEIN_STATIC_DIR`  | `frontend/dist`     | built frontend location          |

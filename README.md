# domein

A self-hosted DNS blocker because I hate Pihole. Less configuring. Less views. Same functionality.

Run it on a box in your LAN and point your router's DNS at it: every device
on the network gets ad and tracker blocking, with nothing to install on any
of them. Subscribe to blocklists, add DNS records for your local services,
and rescue the occasional false positive, all from a single web page behind
a single password.

- **Blocklists**: add by URL (hosts-format or plain domain lists), per-list
  refresh interval, conditional fetches (ETag/Last-Modified). Updates reload
  dnsmasq via SIGHUP: zero downtime.
- **Records**: custom A/AAAA/CNAME/TXT. Prefix a name with `*.` for wildcard
  A/AAAA. Note: dnsmasq only resolves CNAMEs whose target it itself answers for.
- **Allowlist**: exact-match domains punched out of every blocklist.
- **Auth**: one password (`DOMEIN_PASSWORD`), signed session cookie.

## Layout

FastAPI manages a dnsmasq child process; the web UI edits SQLite, and the
dnsmasq config files are generated artifacts, rebuilt on every change.

```
main.py     FastAPI app entrypoint
domein/     backend package (uv-managed), api/v1 routers + dnsmasq management
frontend/   Vite + React + TS single page, built assets served by FastAPI
bin/        build.sh (frontend) + setup.sh (server install)
.files/     systemd unit, env example, optional nginx conf
data/       runtime state (SQLite, compiled dnsmasq files), created on start
```

## Development

```sh
uv sync
DOMEIN_PASSWORD=dev DOMEIN_DNS_PORT=5343 \
  uv run uvicorn main:app --reload --port 8080

cd frontend
npm install
npm run dev   # http://localhost:5173, proxies /api to :8080
```

Without dnsmasq installed the app still runs; the status board shows the
resolver as DOWN with the reason.

## Deployment (Debian/Ubuntu)

Get the code onto the server and run the setup script as root:

```sh
git clone <repo> /opt/domein   # or rsync a checkout there
cd /opt/domein
./bin/setup.sh
```

The script covers the whole install: dnsmasq (with its bundled service kept
off; domein runs its own), freeing port 53 from systemd-resolved's stub
listener, the `domein` system user, python dependencies, the frontend build
(skipped if `frontend/dist` already exists), `/etc/domein.env` and the
systemd unit. It is idempotent: re-run it after pulling updates, and it
never overwrites an existing `/etc/domein.env`.

Afterwards:

1. Set a real password in `/etc/domein.env`, then `systemctl restart domein`.
2. Point your router's DHCP DNS at the server. UI is on port 8080. Put a
   reverse proxy with TLS in front if it's reachable beyond your LAN
   (`.files/domein.nginx.conf` is a starting point).

Run a single uvicorn worker only (the default): the process owns the dnsmasq
child and the SQLite handle.

## Environment variables

| Variable             | Default            | Purpose                          |
|----------------------|--------------------|----------------------------------|
| `DOMEIN_PASSWORD`    | _(required)_       | UI/API password                  |
| `DOMEIN_DATA_DIR`    | `./data`           | SQLite + generated dnsmasq files |
| `DOMEIN_DNS_PORT`    | `53`               | dnsmasq listen port              |
| `DOMEIN_DNS_LISTEN`  | _(all interfaces)_ | dnsmasq listen address           |
| `DOMEIN_UPSTREAMS`   | `1.1.1.1,9.9.9.9`  | upstream resolvers               |
| `DOMEIN_DNSMASQ_BIN` | `dnsmasq`          | dnsmasq binary                   |
| `DOMEIN_STATIC_DIR`  | `frontend/dist`    | built frontend location          |

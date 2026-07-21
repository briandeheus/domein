#!/usr/bin/env bash
# Set up domein on a Debian/Ubuntu server (README "Deployment" steps 1-4).
# Run as root from the project root. Idempotent: safe to re-run after updates.
set -euo pipefail

cd "$(dirname "$0")/.."

if [ "$(id -u)" -ne 0 ]; then
    echo "error: run as root" >&2
    exit 1
fi
if ! command -v apt-get >/dev/null; then
    echo "error: this script targets Debian/Ubuntu (apt-get not found)" >&2
    exit 1
fi
if ! command -v uv >/dev/null; then
    echo "error: uv not found. Install it first:" >&2
    echo "  curl -LsSf https://astral.sh/uv/install.sh | sh" >&2
    exit 1
fi
if [ "$PWD" != /opt/domein ]; then
    echo "warning: project is at $PWD but the systemd unit expects /opt/domein" >&2
fi

# 1. dnsmasq installed, its own service off (domein runs its own child).
if ! command -v dnsmasq >/dev/null; then
    apt-get update
    apt-get install -y dnsmasq
fi
systemctl disable --now dnsmasq

# 2. Free port 53: turn off systemd-resolved's stub listener on 127.0.0.53.
if systemctl is-active --quiet systemd-resolved \
        && [ ! -f /etc/systemd/resolved.conf.d/domein.conf ]; then
    mkdir -p /etc/systemd/resolved.conf.d
    printf '[Resolve]\nDNS=1.1.1.1\nDNSStubListener=no\n' \
        > /etc/systemd/resolved.conf.d/domein.conf
    ln -sf /run/systemd/resolve/resolv.conf /etc/resolv.conf
    systemctl restart systemd-resolved
fi

# 3. App: service user, python deps, frontend build.
id domein >/dev/null 2>&1 || useradd -r -s /usr/sbin/nologin domein
uv sync
[ -d frontend/dist ] || ./bin/build.sh
chown -R domein:domein .

# 4. Env file (never break an existing one) + systemd unit.
fresh_env=0
if [ ! -f /etc/domein.env ]; then
    cp .files/domein.env.example /etc/domein.env
    chmod 600 /etc/domein.env
    fresh_env=1
fi
cp .files/domein.service /etc/systemd/system/
systemctl daemon-reload
systemctl enable --now domein

echo
if [ "$fresh_env" -eq 1 ]; then
    echo "NOTE: /etc/domein.env was created with the default password."
    echo "Set a real DOMEIN_PASSWORD in it, then: systemctl restart domein"
fi
echo "domein is up. UI on port 8080. Point your router's DHCP DNS here."

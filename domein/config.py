import os
import secrets
from pathlib import Path

DATA_DIR = Path(os.environ.get("DOMEIN_DATA_DIR", "data")).resolve()
LISTS_DIR = DATA_DIR / "lists"

PASSWORD = os.environ.get("DOMEIN_PASSWORD", "")

DNS_PORT = int(os.environ.get("DOMEIN_DNS_PORT", "53"))
# Empty string = listen on all interfaces.
DNS_LISTEN = os.environ.get("DOMEIN_DNS_LISTEN", "")
UPSTREAMS = [
    s.strip()
    for s in os.environ.get("DOMEIN_UPSTREAMS", "1.1.1.1,9.9.9.9").split(",")
    if s.strip()
]
DNSMASQ_BIN = os.environ.get("DOMEIN_DNSMASQ_BIN", "dnsmasq")

STATIC_DIR = Path(
    os.environ.get(
        "DOMEIN_STATIC_DIR",
        Path(__file__).resolve().parent.parent / "frontend" / "dist",
    )
)

SESSION_MAX_AGE = 60 * 60 * 24 * 30

_secret: bytes | None = None


def get_secret() -> bytes:
    global _secret
    if _secret is None:
        path = DATA_DIR / "secret"
        if path.exists():
            _secret = path.read_bytes()
        else:
            DATA_DIR.mkdir(parents=True, exist_ok=True)
            _secret = secrets.token_bytes(32)
            path.write_bytes(_secret)
            path.chmod(0o600)
    return _secret

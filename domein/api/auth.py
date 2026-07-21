from fastapi import HTTPException, Request
from itsdangerous import BadSignature, SignatureExpired, URLSafeTimedSerializer

from domein import config

COOKIE = "domein_session"


def _serializer() -> URLSafeTimedSerializer:
    return URLSafeTimedSerializer(config.get_secret(), salt="domein-session")


def make_token() -> str:
    return _serializer().dumps({"ok": True})


def require_auth(request: Request) -> None:
    token = request.cookies.get(COOKIE)
    if not token:
        raise HTTPException(status_code=401, detail="Not authenticated")
    try:
        _serializer().loads(token, max_age=config.SESSION_MAX_AGE)
    except (BadSignature, SignatureExpired):
        raise HTTPException(status_code=401, detail="Not authenticated")

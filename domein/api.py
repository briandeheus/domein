import ipaddress
import re
import secrets
import sqlite3

from fastapi import APIRouter, Depends, HTTPException, Request, Response
from pydantic import BaseModel

from . import auth, blocklists, config, db

router = APIRouter()
protected = APIRouter(dependencies=[Depends(auth.require_auth)])

NAME_RE = re.compile(
    r"^(?!-)[a-z0-9_-]{1,63}(?<!-)(\.(?!-)[a-z0-9_-]{1,63}(?<!-))*$"
)


def _bool_row(row: dict) -> dict:
    if "enabled" in row:
        row["enabled"] = bool(row["enabled"])
    return row


# --- auth ---


class LoginBody(BaseModel):
    password: str


@router.post("/login")
def login(body: LoginBody, response: Response):
    if not config.PASSWORD:
        raise HTTPException(500, "DOMEIN_PASSWORD is not set on the server")
    if not secrets.compare_digest(body.password.encode(), config.PASSWORD.encode()):
        raise HTTPException(403, "Wrong password")
    response.set_cookie(
        auth.COOKIE,
        auth.make_token(),
        max_age=config.SESSION_MAX_AGE,
        httponly=True,
        samesite="lax",
    )
    return {"ok": True}


@router.post("/logout")
def logout(response: Response):
    response.delete_cookie(auth.COOKIE)
    return {"ok": True}


# --- status ---


@protected.get("/status")
def status(request: Request):
    manager = request.app.state.manager
    return {
        "dnsmasq": manager.status(),
        "blocked_domains": manager.blocked_count,
        "blocklists": db.query("SELECT COUNT(*) AS c FROM blocklists")[0]["c"],
        "records": db.query("SELECT COUNT(*) AS c FROM records")[0]["c"],
    }


# --- blocklists ---


class BlocklistIn(BaseModel):
    url: str
    name: str = ""
    refresh_hours: int = 24


class BlocklistPatch(BaseModel):
    enabled: bool | None = None
    name: str | None = None
    refresh_hours: int | None = None


def _get_blocklist(blocklist_id: int) -> dict:
    rows = db.query("SELECT * FROM blocklists WHERE id = ?", (blocklist_id,))
    if not rows:
        raise HTTPException(404, "No such blocklist")
    return _bool_row(rows[0])


@protected.get("/blocklists")
def list_blocklists():
    return [_bool_row(r) for r in db.query("SELECT * FROM blocklists ORDER BY id")]


@protected.post("/blocklists", status_code=201)
async def add_blocklist(body: BlocklistIn, request: Request):
    url = body.url.strip()
    if not url.startswith(("http://", "https://")):
        raise HTTPException(422, "URL must start with http:// or https://")
    if body.refresh_hours < 1:
        raise HTTPException(422, "Refresh interval must be at least 1 hour")
    name = body.name.strip() or url.rstrip("/").rsplit("/", 1)[-1] or url
    try:
        blocklist_id = db.execute(
            "INSERT INTO blocklists (name, url, refresh_hours) VALUES (?, ?, ?)",
            (name, url, body.refresh_hours),
        )
    except sqlite3.IntegrityError:
        raise HTTPException(409, "That URL is already added")
    await blocklists.fetch_by_id(blocklist_id)
    await request.app.state.manager.apply()
    return _get_blocklist(blocklist_id)


@protected.patch("/blocklists/{blocklist_id}")
async def patch_blocklist(blocklist_id: int, body: BlocklistPatch, request: Request):
    current = _get_blocklist(blocklist_id)
    name = body.name.strip() if body.name is not None else current["name"]
    if not name:
        raise HTTPException(422, "Name cannot be empty")
    refresh_hours = (
        body.refresh_hours if body.refresh_hours is not None else current["refresh_hours"]
    )
    if refresh_hours < 1:
        raise HTTPException(422, "Refresh interval must be at least 1 hour")
    enabled = body.enabled if body.enabled is not None else current["enabled"]
    db.execute(
        "UPDATE blocklists SET name = ?, refresh_hours = ?, enabled = ? WHERE id = ?",
        (name, refresh_hours, int(enabled), blocklist_id),
    )
    if enabled != current["enabled"]:
        await request.app.state.manager.apply()
    return _get_blocklist(blocklist_id)


@protected.post("/blocklists/{blocklist_id}/refresh")
async def refresh_blocklist(blocklist_id: int, request: Request):
    _get_blocklist(blocklist_id)
    await blocklists.fetch_by_id(blocklist_id)
    await request.app.state.manager.apply()
    return _get_blocklist(blocklist_id)


@protected.delete("/blocklists/{blocklist_id}")
async def delete_blocklist(blocklist_id: int, request: Request):
    _get_blocklist(blocklist_id)
    db.execute("DELETE FROM blocklists WHERE id = ?", (blocklist_id,))
    cache = config.LISTS_DIR / f"{blocklist_id}.txt"
    cache.unlink(missing_ok=True)
    await request.app.state.manager.apply()
    return {"ok": True}


# --- records ---


class RecordIn(BaseModel):
    type: str
    name: str
    value: str


class RecordPatch(BaseModel):
    enabled: bool


def _validate_record(type_: str, name: str, value: str) -> tuple[str, str, str]:
    type_ = type_.strip().upper()
    name = name.strip().lower().rstrip(".")
    value = value.strip()
    if type_ not in ("A", "AAAA", "CNAME", "TXT"):
        raise HTTPException(422, "Type must be A, AAAA, CNAME or TXT")
    bare = name.removeprefix("*.")
    if not NAME_RE.match(bare):
        raise HTTPException(422, f"Invalid name: {name!r}")
    if name.startswith("*.") and type_ not in ("A", "AAAA"):
        raise HTTPException(422, "Wildcard names are only supported for A/AAAA")
    if type_ == "A":
        try:
            ipaddress.IPv4Address(value)
        except ValueError:
            raise HTTPException(422, f"Invalid IPv4 address: {value!r}")
    elif type_ == "AAAA":
        try:
            ipaddress.IPv6Address(value)
        except ValueError:
            raise HTTPException(422, f"Invalid IPv6 address: {value!r}")
    elif type_ == "CNAME":
        value = value.lower().rstrip(".")
        if not NAME_RE.match(value):
            raise HTTPException(422, f"Invalid CNAME target: {value!r}")
    elif type_ == "TXT":
        if len(value) > 500 or '"' in value or "\n" in value or "\r" in value:
            raise HTTPException(422, "TXT value must be under 500 chars, no quotes or newlines")
    return type_, name, value


@protected.get("/records")
def list_records():
    return [
        _bool_row(r) for r in db.query("SELECT * FROM records ORDER BY name, type")
    ]


@protected.post("/records", status_code=201)
async def add_record(body: RecordIn, request: Request):
    type_, name, value = _validate_record(body.type, body.name, body.value)
    record_id = db.execute(
        "INSERT INTO records (type, name, value) VALUES (?, ?, ?)",
        (type_, name, value),
    )
    await request.app.state.manager.apply()
    return _bool_row(db.query("SELECT * FROM records WHERE id = ?", (record_id,))[0])


@protected.patch("/records/{record_id}")
async def patch_record(record_id: int, body: RecordPatch, request: Request):
    rows = db.query("SELECT * FROM records WHERE id = ?", (record_id,))
    if not rows:
        raise HTTPException(404, "No such record")
    db.execute(
        "UPDATE records SET enabled = ? WHERE id = ?", (int(body.enabled), record_id)
    )
    await request.app.state.manager.apply()
    return _bool_row(db.query("SELECT * FROM records WHERE id = ?", (record_id,))[0])


@protected.delete("/records/{record_id}")
async def delete_record(record_id: int, request: Request):
    if not db.query("SELECT id FROM records WHERE id = ?", (record_id,)):
        raise HTTPException(404, "No such record")
    db.execute("DELETE FROM records WHERE id = ?", (record_id,))
    await request.app.state.manager.apply()
    return {"ok": True}


# --- allowlist ---


class AllowIn(BaseModel):
    domain: str


@protected.get("/allowlist")
def list_allowlist():
    return db.query("SELECT * FROM allowlist ORDER BY domain")


@protected.post("/allowlist", status_code=201)
async def add_allow(body: AllowIn, request: Request):
    domain = body.domain.strip().lower().rstrip(".")
    if not NAME_RE.match(domain):
        raise HTTPException(422, f"Invalid domain: {domain!r}")
    try:
        allow_id = db.execute("INSERT INTO allowlist (domain) VALUES (?)", (domain,))
    except sqlite3.IntegrityError:
        raise HTTPException(409, "Domain is already on the allowlist")
    await request.app.state.manager.apply()
    return db.query("SELECT * FROM allowlist WHERE id = ?", (allow_id,))[0]


@protected.delete("/allowlist/{allow_id}")
async def delete_allow(allow_id: int, request: Request):
    if not db.query("SELECT id FROM allowlist WHERE id = ?", (allow_id,)):
        raise HTTPException(404, "No such allowlist entry")
    db.execute("DELETE FROM allowlist WHERE id = ?", (allow_id,))
    await request.app.state.manager.apply()
    return {"ok": True}


router.include_router(protected)

import ipaddress

from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel

from domein import db
from domein.api.common import NAME_RE, _bool_row

router = APIRouter()


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
            raise HTTPException(
                422, "TXT value must be under 500 chars, no quotes or newlines"
            )
    return type_, name, value


@router.get("/records")
def list_records():
    return [_bool_row(r) for r in db.query("SELECT * FROM records ORDER BY name, type")]


@router.post("/records", status_code=201)
async def add_record(body: RecordIn, request: Request):
    type_, name, value = _validate_record(body.type, body.name, body.value)
    record_id = db.execute(
        "INSERT INTO records (type, name, value) VALUES (?, ?, ?)",
        (type_, name, value),
    )
    await request.app.state.manager.apply()
    return _bool_row(db.query("SELECT * FROM records WHERE id = ?", (record_id,))[0])


@router.patch("/records/{record_id}")
async def patch_record(record_id: int, body: RecordPatch, request: Request):
    rows = db.query("SELECT * FROM records WHERE id = ?", (record_id,))
    if not rows:
        raise HTTPException(404, "No such record")
    db.execute(
        "UPDATE records SET enabled = ? WHERE id = ?", (int(body.enabled), record_id)
    )
    await request.app.state.manager.apply()
    return _bool_row(db.query("SELECT * FROM records WHERE id = ?", (record_id,))[0])


@router.delete("/records/{record_id}")
async def delete_record(record_id: int, request: Request):
    if not db.query("SELECT id FROM records WHERE id = ?", (record_id,)):
        raise HTTPException(404, "No such record")
    db.execute("DELETE FROM records WHERE id = ?", (record_id,))
    await request.app.state.manager.apply()
    return {"ok": True}

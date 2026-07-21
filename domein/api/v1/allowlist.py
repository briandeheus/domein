import sqlite3

from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel

from domein import db
from domein.api.common import NAME_RE

router = APIRouter()


class AllowIn(BaseModel):
    domain: str


@router.get("/allowlist")
def list_allowlist():
    return db.query("SELECT * FROM allowlist ORDER BY domain")


@router.post("/allowlist", status_code=201)
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


@router.delete("/allowlist/{allow_id}")
async def delete_allow(allow_id: int, request: Request):
    if not db.query("SELECT id FROM allowlist WHERE id = ?", (allow_id,)):
        raise HTTPException(404, "No such allowlist entry")
    db.execute("DELETE FROM allowlist WHERE id = ?", (allow_id,))
    await request.app.state.manager.apply()
    return {"ok": True}

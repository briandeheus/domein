import sqlite3

from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel

from domein import blocklists, config, db
from domein.api.common import _bool_row

router = APIRouter()


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


@router.get("/blocklists")
def list_blocklists():
    return [_bool_row(r) for r in db.query("SELECT * FROM blocklists ORDER BY id")]


@router.post("/blocklists", status_code=201)
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


@router.patch("/blocklists/{blocklist_id}")
async def patch_blocklist(blocklist_id: int, body: BlocklistPatch, request: Request):
    current = _get_blocklist(blocklist_id)
    name = body.name.strip() if body.name is not None else current["name"]
    if not name:
        raise HTTPException(422, "Name cannot be empty")
    refresh_hours = (
        body.refresh_hours
        if body.refresh_hours is not None
        else current["refresh_hours"]
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


@router.post("/blocklists/{blocklist_id}/refresh")
async def refresh_blocklist(blocklist_id: int, request: Request):
    _get_blocklist(blocklist_id)
    await blocklists.fetch_by_id(blocklist_id)
    await request.app.state.manager.apply()
    return _get_blocklist(blocklist_id)


@router.delete("/blocklists/{blocklist_id}")
async def delete_blocklist(blocklist_id: int, request: Request):
    _get_blocklist(blocklist_id)
    db.execute("DELETE FROM blocklists WHERE id = ?", (blocklist_id,))
    cache = config.LISTS_DIR / f"{blocklist_id}.txt"
    cache.unlink(missing_ok=True)
    await request.app.state.manager.apply()
    return {"ok": True}

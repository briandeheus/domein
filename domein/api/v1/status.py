from fastapi import APIRouter, Request

from domein import db

router = APIRouter()


@router.get("/status")
def status(request: Request):
    manager = request.app.state.manager
    return {
        "dnsmasq": manager.status(),
        "blocked_domains": manager.blocked_count,
        "blocklists": db.query("SELECT COUNT(*) AS c FROM blocklists")[0]["c"],
        "records": db.query("SELECT COUNT(*) AS c FROM records")[0]["c"],
    }

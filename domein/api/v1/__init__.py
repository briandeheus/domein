"""v1 resource routers, combined. Mounted under /v1 by the parent package."""

from fastapi import APIRouter

from . import allowlist, blocklists, records, status

router = APIRouter()
router.include_router(status.router)
router.include_router(blocklists.router)
router.include_router(records.router)
router.include_router(allowlist.router)

import asyncio
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from . import config, db
from .api import router
from .blocklists import updater_loop
from .dnsmasq import DnsmasqManager


@asynccontextmanager
async def lifespan(app: FastAPI):
    config.DATA_DIR.mkdir(parents=True, exist_ok=True)
    config.LISTS_DIR.mkdir(parents=True, exist_ok=True)
    db.connect()
    if not config.PASSWORD:
        print(
            "[domein] WARNING: DOMEIN_PASSWORD is not set — login is impossible",
            flush=True,
        )
    manager = DnsmasqManager()
    app.state.manager = manager
    await manager.apply()
    if manager.last_error:
        print(f"[domein] dnsmasq not running: {manager.last_error}", flush=True)
    updater = asyncio.create_task(updater_loop(manager))
    yield
    updater.cancel()
    await manager.stop()


app = FastAPI(title="domein", lifespan=lifespan)
app.include_router(router, prefix="/api")

if config.STATIC_DIR.is_dir():
    app.mount("/", StaticFiles(directory=config.STATIC_DIR, html=True), name="static")

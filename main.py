import asyncio
import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI, Request
from fastapi.exception_handlers import (
    http_exception_handler,
    request_validation_exception_handler,
)
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from starlette.exceptions import HTTPException as StarletteHTTPException

from domein import config, db
from domein.api import router
from domein.blocklists import updater_loop
from domein.dnsmasq import DnsmasqManager

logging.basicConfig(level=logging.INFO, format="%(levelname)s %(name)s: %(message)s")
log = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    config.DATA_DIR.mkdir(parents=True, exist_ok=True)
    config.LISTS_DIR.mkdir(parents=True, exist_ok=True)
    db.connect()

    if not config.PASSWORD:
        log.warning("DOMEIN_PASSWORD is not set, login is impossible")

    manager = DnsmasqManager()
    app.state.manager = manager

    await manager.apply()

    if manager.last_error:
        log.error("dnsmasq not running: %s", manager.last_error)

    updater = asyncio.create_task(updater_loop(manager))

    yield
    updater.cancel()
    await manager.stop()


app = FastAPI(title="domein", lifespan=lifespan)
app.include_router(router, prefix="/api")


@app.exception_handler(StarletteHTTPException)
async def log_http_error(request: Request, exc: StarletteHTTPException):
    # 401s are routine (expired cookie, UI poll before login), keep them quiet.
    level = logging.INFO if exc.status_code == 401 else logging.WARNING
    log.log(
        level,
        "%s %s -> %d: %s",
        request.method,
        request.url.path,
        exc.status_code,
        exc.detail,
    )
    return await http_exception_handler(request, exc)


@app.exception_handler(RequestValidationError)
async def log_validation_error(request: Request, exc: RequestValidationError):
    log.warning("%s %s -> 422: %s", request.method, request.url.path, exc.errors())
    return await request_validation_exception_handler(request, exc)


@app.exception_handler(Exception)
async def log_unhandled_error(request: Request, exc: Exception):
    log.error("%s %s crashed", request.method, request.url.path, exc_info=exc)
    return JSONResponse({"detail": "Internal server error"}, status_code=500)


if config.STATIC_DIR.is_dir():
    app.mount("/", StaticFiles(directory=config.STATIC_DIR, html=True), name="static")

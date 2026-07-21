"""Router assembly: public login/logout plus the auth-guarded resource routers."""

import secrets

from fastapi import APIRouter, Depends, HTTPException, Response
from pydantic import BaseModel

from domein import config
from domein.api import auth, v1

router = APIRouter()


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


protected = APIRouter(dependencies=[Depends(auth.require_auth)])
protected.include_router(v1.router, prefix="/v1")
router.include_router(protected)

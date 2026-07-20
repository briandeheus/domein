import sqlite3
import threading

from . import config

_lock = threading.Lock()
_conn: sqlite3.Connection | None = None

SCHEMA = """
CREATE TABLE IF NOT EXISTS blocklists (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    url TEXT NOT NULL UNIQUE,
    enabled INTEGER NOT NULL DEFAULT 1,
    refresh_hours INTEGER NOT NULL DEFAULT 24,
    last_fetched_at REAL,
    last_status TEXT,
    etag TEXT,
    last_modified TEXT,
    entry_count INTEGER NOT NULL DEFAULT 0
);
CREATE TABLE IF NOT EXISTS records (
    id INTEGER PRIMARY KEY,
    type TEXT NOT NULL CHECK (type IN ('A', 'AAAA', 'CNAME', 'TXT')),
    name TEXT NOT NULL,
    value TEXT NOT NULL,
    enabled INTEGER NOT NULL DEFAULT 1
);
CREATE TABLE IF NOT EXISTS allowlist (
    id INTEGER PRIMARY KEY,
    domain TEXT NOT NULL UNIQUE
);
"""


def connect() -> None:
    global _conn
    config.DATA_DIR.mkdir(parents=True, exist_ok=True)
    _conn = sqlite3.connect(config.DATA_DIR / "domein.db", check_same_thread=False)
    _conn.row_factory = sqlite3.Row
    _conn.executescript(SCHEMA)
    _conn.commit()


def query(sql: str, params: tuple = ()) -> list[dict]:
    assert _conn is not None
    with _lock:
        rows = [dict(r) for r in _conn.execute(sql, params).fetchall()]
    return rows


def execute(sql: str, params: tuple = ()) -> int:
    assert _conn is not None
    with _lock:
        cur = _conn.execute(sql, params)
        _conn.commit()
        return cur.lastrowid or 0

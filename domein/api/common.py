"""Helpers shared by the API resource modules."""

import re

NAME_RE = re.compile(r"^(?!-)[a-z0-9_-]{1,63}(?<!-)(\.(?!-)[a-z0-9_-]{1,63}(?<!-))*$")


def _bool_row(row: dict) -> dict:
    """
    Lil' frontend helper to return booleans properly as booleans.
    :param row:
    :return:
    """
    if "enabled" in row:
        row["enabled"] = bool(row["enabled"])
    return row

import { FormEvent, useEffect, useState } from "react";
import { api, Blocklist, errorMessage } from "./api";
import { fmtAgo, fmtNum } from "./format";

export default function Blocklists({ onChanged }: { onChanged: () => void }) {
  const [lists, setLists] = useState<Blocklist[] | null>(null);
  const [error, setError] = useState("");
  const [busyId, setBusyId] = useState<number | "add" | null>(null);

  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [hours, setHours] = useState("24");

  async function load() {
    setLists(await api.blocklists());
  }

  useEffect(() => {
    load().catch((err) => setError(errorMessage(err)));
  }, []);

  async function run(id: number | "add", fn: () => Promise<unknown>) {
    setError("");
    setBusyId(id);
    try {
      await fn();
      await load();
      onChanged();
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setBusyId(null);
    }
  }

  function add(e: FormEvent) {
    e.preventDefault();
    run("add", async () => {
      await api.addBlocklist({
        url: url.trim(),
        name: name.trim() || undefined,
        refresh_hours: parseInt(hours, 10) || 24,
      });
      setUrl("");
      setName("");
      setHours("24");
    });
  }

  function stateOf(list: Blocklist) {
    if (!list.enabled) return <span className="flag flag--off">OFF</span>;
    if (list.last_status && list.last_status !== "ok")
      return (
        <span className="flag flag--err" title={list.last_status}>
          ERROR
        </span>
      );
    return <span className="flag flag--ok">OK</span>;
  }

  return (
    <section className="section">
      <table>
        <thead>
          <tr>
            <th>List</th>
            <th className="num">Entries</th>
            <th>Updated</th>
            <th>Every</th>
            <th>State</th>
            <th className="num" aria-label="actions"></th>
          </tr>
        </thead>
        <tbody>
          {lists?.map((list) => (
            <tr key={list.id} className={list.enabled ? "" : "row--off"}>
              <td>
                <div className="cell-main">{list.name}</div>
                <div className="cell-sub" title={list.url}>
                  {list.url}
                </div>
              </td>
              <td className="num">{fmtNum(list.entry_count)}</td>
              <td>{fmtAgo(list.last_fetched_at)}</td>
              <td>{list.refresh_hours} H</td>
              <td>{stateOf(list)}</td>
              <td className="actions">
                <button
                  className="btn"
                  disabled={busyId !== null}
                  onClick={() =>
                    run(list.id, () =>
                      api.patchBlocklist(list.id, { enabled: !list.enabled }),
                    )
                  }
                >
                  {list.enabled ? "Disable" : "Enable"}
                </button>
                <button
                  className="btn"
                  disabled={busyId !== null}
                  onClick={() =>
                    run(list.id, () => api.refreshBlocklist(list.id))
                  }
                >
                  {busyId === list.id ? "Working…" : "Refresh"}
                </button>
                <button
                  className="btn btn--red"
                  disabled={busyId !== null}
                  onClick={() => {
                    if (window.confirm(`Delete blocklist "${list.name}"?`))
                      run(list.id, () => api.deleteBlocklist(list.id));
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {lists && lists.length === 0 && (
            <tr>
              <td colSpan={6} className="empty">
                NO BLOCKLISTS. ADD ONE BELOW.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <form className="addbar" onSubmit={add}>
        <div className="addbar-grow">
          <input
            className="field"
            placeholder="HTTPS://… BLOCKLIST URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="addbar-mid">
          <input
            className="field"
            placeholder="NAME (OPTIONAL)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="addbar-small">
          <input
            className="field"
            type="number"
            min="1"
            placeholder="EVERY (H)"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />
        </div>
        <button
          className="btn btn--solid"
          type="submit"
          disabled={busyId !== null || !url.trim()}
        >
          {busyId === "add" ? "Fetching…" : "Add list"}
        </button>
      </form>

      {error && <p className="error">{error}</p>}
      <p className="footnote">
        Hosts-format and plain domain lists are supported. Lists are re-fetched
        automatically on their interval; changes reload dnsmasq without
        downtime.
      </p>
    </section>
  );
}

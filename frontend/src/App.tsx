import { useCallback, useEffect, useState } from "react";
import Allowlist from "./Allowlist";
import { api, ApiError, Status } from "./api";
import Blocklists from "./Blocklists";
import { fmtNum, fmtUptime } from "./format";
import Login from "./Login";
import Records from "./Records";

type View = "blocklists" | "records" | "allowlist";

const TABS: { key: View; label: string }[] = [
  { key: "blocklists", label: "Blocklists" },
  { key: "records", label: "Records" },
  { key: "allowlist", label: "Allowlist" },
];

export default function App() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [status, setStatus] = useState<Status | null>(null);
  const [view, setView] = useState<View>("blocklists");

  const loadStatus = useCallback(async () => {
    try {
      setStatus(await api.status());
      setAuthed(true);
    } catch (err) {
      if (err instanceof ApiError && err.status === 401) setAuthed(false);
    }
  }, []);

  useEffect(() => {
    loadStatus();
  }, [loadStatus]);

  useEffect(() => {
    if (!authed) return;
    const timer = setInterval(loadStatus, 10_000);
    return () => clearInterval(timer);
  }, [authed, loadStatus]);

  async function logout() {
    await api.logout();
    setAuthed(false);
    setStatus(null);
  }

  if (authed === null) return null;
  if (!authed) return <Login onSuccess={loadStatus} />;

  const dns = status?.dnsmasq;

  return (
    <div className="wrap">
      <header className="masthead">
        <h1 className="wordmark">
          DOMEIN<span className="dot">.</span>
        </h1>
        <div className="masthead-meta">
          <p className="kicker">DNS CONTROL BOARD</p>
          <p className="kicker kicker--gray">
            {new Date()
              .toLocaleDateString("en-GB", {
                weekday: "long",
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })
              .toUpperCase()}
          </p>
          <button className="btn btn--red" onClick={logout} style={{ margin: 0 }}>
            Log out
          </button>
        </div>
      </header>

      <dl className="board">
        <div>
          <dt className="kicker kicker--gray">Resolver</dt>
          <dd className={dns?.running ? "" : "bad"} title={dns?.error ?? undefined}>
            {dns?.running ? "RUNNING" : "DOWN"}
          </dd>
        </div>
        <div>
          <dt className="kicker kicker--gray">Uptime</dt>
          <dd>{fmtUptime(dns?.started_at ?? null)}</dd>
        </div>
        <div>
          <dt className="kicker kicker--gray">Blocked domains</dt>
          <dd>{status ? fmtNum(status.blocked_domains) : "—"}</dd>
        </div>
        <div>
          <dt className="kicker kicker--gray">Lists</dt>
          <dd>{status ? fmtNum(status.blocklists) : "—"}</dd>
        </div>
        <div>
          <dt className="kicker kicker--gray">Records</dt>
          <dd>{status ? fmtNum(status.records) : "—"}</dd>
        </div>
        <div>
          <dt className="kicker kicker--gray">Port</dt>
          <dd>{dns?.port ?? "—"}</dd>
        </div>
      </dl>

      {dns && !dns.running && dns.error && (
        <p className="error">RESOLVER DOWN — {dns.error}</p>
      )}

      <nav className="tabs">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={`tab${view === tab.key ? " active" : ""}`}
            onClick={() => setView(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {view === "blocklists" && <Blocklists onChanged={loadStatus} />}
      {view === "records" && <Records onChanged={loadStatus} />}
      {view === "allowlist" && <Allowlist onChanged={loadStatus} />}
    </div>
  );
}

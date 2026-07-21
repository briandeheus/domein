import { FormEvent, useEffect, useState } from "react";
import { AllowEntry, api, errorMessage } from "./api";

export default function Allowlist({ onChanged }: { onChanged: () => void }) {
  const [entries, setEntries] = useState<AllowEntry[] | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [domain, setDomain] = useState("");

  async function load() {
    setEntries(await api.allowlist());
  }

  useEffect(() => {
    load().catch((err) => setError(errorMessage(err)));
  }, []);

  async function run(fn: () => Promise<unknown>) {
    setError("");
    setBusy(true);
    try {
      await fn();
      await load();
      onChanged();
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setBusy(false);
    }
  }

  function add(e: FormEvent) {
    e.preventDefault();
    run(async () => {
      await api.addAllow(domain.trim());
      setDomain("");
    });
  }

  return (
    <section className="section">
      <table>
        <thead>
          <tr>
            <th>Domain</th>
            <th className="num" aria-label="actions"></th>
          </tr>
        </thead>
        <tbody>
          {entries?.map((entry) => (
            <tr key={entry.id}>
              <td className="cell-main">{entry.domain}</td>
              <td className="actions">
                <button
                  className="btn btn--red"
                  disabled={busy}
                  onClick={() => run(() => api.deleteAllow(entry.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {entries && entries.length === 0 && (
            <tr>
              <td colSpan={2} className="empty">
                NO ALLOWLIST ENTRIES.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <form className="addbar" onSubmit={add}>
        <div className="addbar-grow">
          <input
            className="field"
            placeholder="DOMAIN.TLD"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
        </div>
        <button
          className="btn btn--solid"
          type="submit"
          disabled={busy || !domain.trim()}
        >
          Allow
        </button>
      </form>

      {error && <p className="error">{error}</p>}
      <p className="footnote">
        Allowlisted domains are removed from every blocklist at compile time
        (exact match).
      </p>
    </section>
  );
}

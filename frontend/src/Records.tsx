import { FormEvent, useEffect, useState } from "react";
import { api, DnsRecord, errorMessage, RecordType } from "./api";

const TYPES: RecordType[] = ["A", "AAAA", "CNAME", "TXT"];

export default function Records({ onChanged }: { onChanged: () => void }) {
  const [records, setRecords] = useState<DnsRecord[] | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const [type, setType] = useState<RecordType>("A");
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  async function load() {
    setRecords(await api.records());
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
      await api.addRecord({ type, name: name.trim(), value: value.trim() });
      setName("");
      setValue("");
    });
  }

  const valuePlaceholder =
    type === "A"
      ? "192.168.1.10"
      : type === "AAAA"
        ? "FD00::10"
        : type === "CNAME"
          ? "TARGET.HOME.ARPA"
          : "TEXT VALUE";

  return (
    <section className="section">
      <table>
        <thead>
          <tr>
            <th className="col-type">Type</th>
            <th>Name</th>
            <th>Value</th>
            <th>State</th>
            <th className="num" aria-label="actions"></th>
          </tr>
        </thead>
        <tbody>
          {records?.map((record) => (
            <tr key={record.id} className={record.enabled ? "" : "row--off"}>
              <td>
                <span className="flag">{record.type}</span>
              </td>
              <td className="cell-main">{record.name}</td>
              <td>{record.value}</td>
              <td>
                {record.enabled ? (
                  <span className="flag flag--ok">ON</span>
                ) : (
                  <span className="flag flag--off">OFF</span>
                )}
              </td>
              <td className="actions">
                <button
                  className="btn"
                  disabled={busy}
                  onClick={() =>
                    run(() =>
                      api.patchRecord(record.id, { enabled: !record.enabled }),
                    )
                  }
                >
                  {record.enabled ? "Disable" : "Enable"}
                </button>
                <button
                  className="btn btn--red"
                  disabled={busy}
                  onClick={() => {
                    if (window.confirm(`Delete record ${record.name}?`))
                      run(() => api.deleteRecord(record.id));
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {records && records.length === 0 && (
            <tr>
              <td colSpan={5} className="empty">
                NO CUSTOM RECORDS.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <form className="addbar" onSubmit={add}>
        <div className="addbar-small">
          <select
            className="field"
            value={type}
            onChange={(e) => setType(e.target.value as RecordType)}
          >
            {TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="addbar-mid">
          <input
            className="field"
            placeholder="NAS.HOME.ARPA"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="addbar-grow">
          <input
            className="field"
            placeholder={valuePlaceholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button
          className="btn btn--solid"
          type="submit"
          disabled={busy || !name.trim() || !value.trim()}
        >
          Add record
        </button>
      </form>

      {error && <p className="error">{error}</p>}
      <p className="footnote">
        Prefix a name with *. for wildcard A/AAAA (covers the domain and all
        subdomains). CNAME targets must be names this resolver itself answers
        for (a dnsmasq limitation).
      </p>
    </section>
  );
}

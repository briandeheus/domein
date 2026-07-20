import { FormEvent, useState } from "react";
import { api, errorMessage } from "./api";

export default function Login({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      await api.login(password);
      onSuccess();
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="login">
      <div className="login-box">
        <h1 className="wordmark">
          DOMEIN<span className="dot">.</span>
        </h1>
        <p className="kicker kicker--gray">PRIVATE DNS — AUTHORIZED PERSONNEL ONLY</p>
        <div className="login-rule" />
        <form onSubmit={submit}>
          <input
            className="field"
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          <button className="btn btn--solid" type="submit" disabled={busy || !password}>
            ENTER
          </button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

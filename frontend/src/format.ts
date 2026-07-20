/** Swiss-style thousands separator: 312’421 */
export function fmtNum(n: number): string {
  return n.toLocaleString("de-CH");
}

export function fmtAgo(ts: number | null): string {
  if (ts === null) return "NEVER";
  const s = Math.max(0, Date.now() / 1000 - ts);
  if (s < 60) return "JUST NOW";
  if (s < 3600) return `${Math.floor(s / 60)} MIN AGO`;
  if (s < 86400) return `${Math.floor(s / 3600)} H AGO`;
  return `${Math.floor(s / 86400)} D AGO`;
}

export function fmtUptime(startedAt: number | null): string {
  if (startedAt === null) return "—";
  const s = Math.max(0, Date.now() / 1000 - startedAt);
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  if (d > 0) return `${d} D ${h} H`;
  if (h > 0) return `${h} H ${m} MIN`;
  return `${m} MIN`;
}

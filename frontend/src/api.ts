export type Blocklist = {
  id: number;
  name: string;
  url: string;
  enabled: boolean;
  refresh_hours: number;
  last_fetched_at: number | null;
  last_status: string | null;
  entry_count: number;
};

export type RecordType = "A" | "AAAA" | "CNAME" | "TXT";

export type DnsRecord = {
  id: number;
  type: RecordType;
  name: string;
  value: string;
  enabled: boolean;
};

export type AllowEntry = {
  id: number;
  domain: string;
};

export type Status = {
  dnsmasq: {
    running: boolean;
    pid: number | null;
    started_at: number | null;
    port: number;
    error: string | null;
  };
  blocked_domains: number;
  blocklists: number;
  records: number;
};

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}

async function req<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...init,
  });
  if (!res.ok) {
    let detail = res.statusText;
    try {
      const body = await res.json();
      if (typeof body.detail === "string") detail = body.detail;
    } catch {
      /* not json */
    }
    throw new ApiError(res.status, detail);
  }
  return res.json() as Promise<T>;
}

const get = <T,>(path: string) => req<T>(path);
const post = <T,>(path: string, body?: unknown) =>
  req<T>(path, {
    method: "POST",
    body: body === undefined ? undefined : JSON.stringify(body),
  });
const patch = <T,>(path: string, body: unknown) =>
  req<T>(path, { method: "PATCH", body: JSON.stringify(body) });
const del = (path: string) => req<{ ok: boolean }>(path, { method: "DELETE" });

export const api = {
  login: (password: string) => post<{ ok: boolean }>("/api/login", { password }),
  logout: () => post<{ ok: boolean }>("/api/logout"),
  status: () => get<Status>("/api/status"),

  blocklists: () => get<Blocklist[]>("/api/blocklists"),
  addBlocklist: (body: { url: string; name?: string; refresh_hours?: number }) =>
    post<Blocklist>("/api/blocklists", body),
  patchBlocklist: (
    id: number,
    body: Partial<Pick<Blocklist, "enabled" | "name" | "refresh_hours">>,
  ) => patch<Blocklist>(`/api/blocklists/${id}`, body),
  refreshBlocklist: (id: number) => post<Blocklist>(`/api/blocklists/${id}/refresh`),
  deleteBlocklist: (id: number) => del(`/api/blocklists/${id}`),

  records: () => get<DnsRecord[]>("/api/records"),
  addRecord: (body: { type: string; name: string; value: string }) =>
    post<DnsRecord>("/api/records", body),
  patchRecord: (id: number, body: { enabled: boolean }) =>
    patch<DnsRecord>(`/api/records/${id}`, body),
  deleteRecord: (id: number) => del(`/api/records/${id}`),

  allowlist: () => get<AllowEntry[]>("/api/allowlist"),
  addAllow: (domain: string) => post<AllowEntry>("/api/allowlist", { domain }),
  deleteAllow: (id: number) => del(`/api/allowlist/${id}`),
};

export function errorMessage(err: unknown): string {
  if (err instanceof ApiError) return err.message;
  if (err instanceof Error) return err.message;
  return String(err);
}

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

const get = <T>(path: string) => req<T>(path);
const post = <T>(path: string, body?: unknown) =>
  req<T>(path, {
    method: "POST",
    body: body === undefined ? undefined : JSON.stringify(body),
  });
const patch = <T>(path: string, body: unknown) =>
  req<T>(path, { method: "PATCH", body: JSON.stringify(body) });
const del = (path: string) => req<{ ok: boolean }>(path, { method: "DELETE" });

// Session endpoints are version-agnostic; resource endpoints live under /api/v1.
const V1 = "/api/v1";

export const api = {
  login: (password: string) =>
    post<{ ok: boolean }>("/api/login", { password }),
  logout: () => post<{ ok: boolean }>("/api/logout"),
  status: () => get<Status>(`${V1}/status`),

  blocklists: () => get<Blocklist[]>(`${V1}/blocklists`),
  addBlocklist: (body: {
    url: string;
    name?: string;
    refresh_hours?: number;
  }) => post<Blocklist>(`${V1}/blocklists`, body),
  patchBlocklist: (
    id: number,
    body: Partial<Pick<Blocklist, "enabled" | "name" | "refresh_hours">>,
  ) => patch<Blocklist>(`${V1}/blocklists/${id}`, body),
  refreshBlocklist: (id: number) =>
    post<Blocklist>(`${V1}/blocklists/${id}/refresh`),
  deleteBlocklist: (id: number) => del(`${V1}/blocklists/${id}`),

  records: () => get<DnsRecord[]>(`${V1}/records`),
  addRecord: (body: { type: string; name: string; value: string }) =>
    post<DnsRecord>(`${V1}/records`, body),
  patchRecord: (id: number, body: { enabled: boolean }) =>
    patch<DnsRecord>(`${V1}/records/${id}`, body),
  deleteRecord: (id: number) => del(`${V1}/records/${id}`),

  allowlist: () => get<AllowEntry[]>(`${V1}/allowlist`),
  addAllow: (domain: string) => post<AllowEntry>(`${V1}/allowlist`, { domain }),
  deleteAllow: (id: number) => del(`${V1}/allowlist/${id}`),
};

export function errorMessage(err: unknown): string {
  if (err instanceof ApiError) return err.message;
  if (err instanceof Error) return err.message;
  return String(err);
}

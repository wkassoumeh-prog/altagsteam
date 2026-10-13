import { getRedis } from "./redis";

const OFFLINE_KEY = "site:offline";
const VISITS_KEY = "visits";
const MAX_VISITS = 10_000;

export type VisitRecord = {
  ip: string;
  at: string;
  path: string;
  city?: string;
  country?: string;
  /** True when the site was in offline (404) mode at request time. */
  offlineAttempt?: boolean;
};

export type RedisConnectionStatus = "ok" | "missing" | "error";

function isOfflineFlag(value: unknown): boolean {
  return value === true || value === "true";
}

function parseVisitEntry(item: unknown): VisitRecord | null {
  let record: unknown = item;

  if (typeof item === "string") {
    try {
      record = JSON.parse(item) as unknown;
    } catch {
      return null;
    }
  }

  if (!record || typeof record !== "object") return null;

  const { ip, at, path, city, country, offlineAttempt } = record as VisitRecord;

  if (typeof ip !== "string" || typeof at !== "string" || typeof path !== "string") {
    return null;
  }

  return {
    ip,
    at,
    path,
    city: typeof city === "string" && city.trim() ? city.trim() : undefined,
    country:
      typeof country === "string" && country.trim() ? country.trim() : undefined,
    offlineAttempt: offlineAttempt === true,
  };
}

async function withRedis<T>(
  fallback: T,
  run: (redis: NonNullable<ReturnType<typeof getRedis>>) => Promise<T>,
): Promise<T> {
  const redis = getRedis();
  if (!redis) return fallback;

  try {
    return await run(redis);
  } catch {
    return fallback;
  }
}

export async function checkRedisConnection(): Promise<RedisConnectionStatus> {
  const redis = getRedis();
  if (!redis) return "missing";

  try {
    const pong = await redis.ping();
    return pong === "PONG" ? "ok" : "error";
  } catch {
    return "error";
  }
}

export async function getOffline(): Promise<boolean> {
  return withRedis(false, async (redis) => {
    const value = await redis.get(OFFLINE_KEY);
    return isOfflineFlag(value);
  });
}

export async function setOffline(offline: boolean): Promise<void> {
  const redis = getRedis();
  if (!redis) {
    throw new Error("Redis ist nicht konfiguriert (Umgebungsvariablen fehlen).");
  }

  try {
    await redis.set(OFFLINE_KEY, offline);
  } catch {
    throw new Error(
      "Verbindung zu Redis fehlgeschlagen. Unter Windows: Dev-Server mit npm run dev neu starten (nutzt System-Zertifikate).",
    );
  }
}

export async function recordVisit(entry: VisitRecord): Promise<void> {
  await withRedis(undefined, async (redis) => {
    await redis.lpush(VISITS_KEY, entry);
    await redis.ltrim(VISITS_KEY, 0, MAX_VISITS - 1);
  });
}

export async function listVisits(limit = 200): Promise<VisitRecord[]> {
  return withRedis([], async (redis) => {
    const raw = await redis.lrange(VISITS_KEY, 0, limit - 1);
    const visits: VisitRecord[] = [];

    for (const item of raw) {
      const parsed = parseVisitEntry(item);
      if (parsed) visits.push(parsed);
    }

    return visits;
  });
}

export async function getVisitCount(): Promise<number> {
  return withRedis(0, async (redis) => redis.llen(VISITS_KEY));
}

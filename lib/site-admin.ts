import { getRedis } from "./redis";

const OFFLINE_KEY = "site:offline";
const VISITS_KEY = "visits";
const MAX_VISITS = 10_000;

export type VisitRecord = {
  ip: string;
  at: string;
  path: string;
};

export type RedisConnectionStatus = "ok" | "missing" | "error";

function isOfflineFlag(value: unknown): boolean {
  return value === true || value === "true";
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
    await redis.lpush(VISITS_KEY, JSON.stringify(entry));
    await redis.ltrim(VISITS_KEY, 0, MAX_VISITS - 1);
  });
}

export async function listVisits(limit = 200): Promise<VisitRecord[]> {
  return withRedis([], async (redis) => {
    const raw = await redis.lrange<string>(VISITS_KEY, 0, limit - 1);
    const visits: VisitRecord[] = [];

    for (const item of raw) {
      try {
        const parsed = JSON.parse(item) as VisitRecord;
        if (
          typeof parsed.ip === "string" &&
          typeof parsed.at === "string" &&
          typeof parsed.path === "string"
        ) {
          visits.push(parsed);
        }
      } catch {
        // Skip malformed entries.
      }
    }

    return visits;
  });
}

export async function getVisitCount(): Promise<number> {
  return withRedis(0, async (redis) => redis.llen(VISITS_KEY));
}

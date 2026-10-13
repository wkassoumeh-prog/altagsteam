import { Redis } from "@upstash/redis";

let client: Redis | null | undefined;

function readEnv(name: string): string | undefined {
  const raw = process.env[name]?.trim();
  if (!raw) return undefined;

  if (
    (raw.startsWith('"') && raw.endsWith('"')) ||
    (raw.startsWith("'") && raw.endsWith("'"))
  ) {
    return raw.slice(1, -1).trim() || undefined;
  }

  return raw;
}

export function getRedisCredentials(): { url: string; token: string } | null {
  const url =
    readEnv("UPSTASH_REDIS_REST_URL") ?? readEnv("KV_REST_API_URL");
  const token =
    readEnv("UPSTASH_REDIS_REST_TOKEN") ?? readEnv("KV_REST_API_TOKEN");

  if (!url || !token) return null;
  return { url, token };
}

export function getRedis(): Redis | null {
  if (client !== undefined) return client;

  const credentials = getRedisCredentials();
  if (!credentials) {
    client = null;
    return client;
  }

  client = new Redis(credentials);
  return client;
}

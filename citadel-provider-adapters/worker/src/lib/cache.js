const CACHE = new Map();

export async function getOrSetCache(key, ttlMs, factory) {
  const now = Date.now();
  const cached = CACHE.get(key);
  if (cached && cached.expiresAt > now) {
    return cached.value;
  }

  const value = await factory();
  CACHE.set(key, {
    expiresAt: now + ttlMs,
    value
  });
  return value;
}

export function peekCache(key) {
  const cached = CACHE.get(key);
  if (!cached) return null;
  if (cached.expiresAt <= Date.now()) return null;
  return cached.value;
}

export function setCache(key, value, ttlMs) {
  CACHE.set(key, { value, expiresAt: Date.now() + ttlMs });
}

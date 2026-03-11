const CACHE_PREFIX = "showcase:source-cache:";

export function getCacheKey(key) {
  return `${CACHE_PREFIX}${key}`;
}

export function readSourceCache(storage, key) {
  try {
    const raw = storage.getItem(getCacheKey(key));
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function writeSourceCache(storage, key, payload) {
  try {
    storage.setItem(getCacheKey(key), JSON.stringify(payload));
  } catch {
    // Ignore quota errors, this is best-effort caching.
  }
}

export function clearSourceCache(storage, key) {
  try {
    storage.removeItem(getCacheKey(key));
  } catch {
    // Ignore storage failures.
  }
}

export function classifyCacheSnapshot(snapshot, adapter, now = Date.now()) {
  if (!snapshot?.fetchedAt) return "missing";
  const age = now - snapshot.fetchedAt;
  if (age > adapter.expireAfterMs) return "expired";
  if (age > adapter.staleAfterMs) return "stale";
  return "fresh";
}

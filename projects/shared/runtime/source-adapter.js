import { classifyCacheSnapshot, readSourceCache, writeSourceCache } from "./cache.js";

export function createSourceAdapter(options) {
  return {
    retries: 1,
    timeoutMs: 10_000,
    staleAfterMs: 5 * 60 * 1000,
    expireAfterMs: 24 * 60 * 60 * 1000,
    fallbackMode: "last-good",
    ...options,
  };
}

export function loadAdapterSnapshot(adapter, storage = globalThis.localStorage) {
  if (!storage || !adapter?.key) return null;
  const snapshot = readSourceCache(storage, adapter.key);
  if (!snapshot) return null;
  return {
    snapshot,
    status: classifyCacheSnapshot(snapshot, adapter),
  };
}

export function persistAdapterSnapshot(adapter, payload, storage = globalThis.localStorage) {
  if (!storage || !adapter?.key) return null;
  const snapshot = {
    fetchedAt: Date.now(),
    payload,
  };
  writeSourceCache(storage, adapter.key, snapshot);
  return snapshot;
}

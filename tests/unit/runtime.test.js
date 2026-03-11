import test from "node:test";
import assert from "node:assert/strict";

import { classifyCacheSnapshot, getCacheKey } from "../../projects/shared/runtime/cache.js";
import { fetchWithPolicy } from "../../projects/shared/runtime/fetch-policy.js";
import {
  createSourceAdapter,
  loadAdapterSnapshot,
  persistAdapterSnapshot,
} from "../../projects/shared/runtime/source-adapter.js";

test("fetchWithPolicy retries once before succeeding", async () => {
  const originalFetch = global.fetch;
  let attempts = 0;

  global.fetch = async () => {
    attempts += 1;
    if (attempts === 1) {
      return new Response("nope", { status: 502 });
    }
    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  };

  try {
    const payload = await fetchWithPolicy("https://example.test/data", {
      retries: 1,
      retryDelayMs: 1,
    });
    assert.deepEqual(payload, { ok: true });
    assert.equal(attempts, 2);
  } finally {
    global.fetch = originalFetch;
  }
});

test("source adapter snapshots persist and load with freshness classification", () => {
  const storage = {
    map: new Map(),
    getItem(key) {
      return this.map.get(key) ?? null;
    },
    removeItem(key) {
      this.map.delete(key);
    },
    setItem(key, value) {
      this.map.set(key, value);
    },
  };

  const adapter = createSourceAdapter({
    key: "liveearth:test",
    staleAfterMs: 5_000,
    expireAfterMs: 10_000,
  });

  const originalNow = Date.now;
  Date.now = () => 10_000;
  try {
    persistAdapterSnapshot(adapter, { answer: 42 }, storage);
    assert.ok(storage.getItem(getCacheKey(adapter.key)));

    const loaded = loadAdapterSnapshot(adapter, storage);
    assert.equal(loaded.status, "fresh");
    assert.deepEqual(loaded.snapshot.payload, { answer: 42 });

    assert.equal(
      classifyCacheSnapshot({ fetchedAt: 3_000 }, adapter, 10_000),
      "stale"
    );
    assert.equal(
      classifyCacheSnapshot({ fetchedAt: 0 }, adapter, 20_001),
      "missing"
    );
    assert.equal(
      classifyCacheSnapshot({ fetchedAt: 1 }, adapter, 20_001),
      "expired"
    );
  } finally {
    Date.now = originalNow;
  }
});

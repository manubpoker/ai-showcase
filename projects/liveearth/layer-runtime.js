import { fetchWithPolicy } from "../shared/runtime/fetch-policy.js";
import { loadAdapterSnapshot, persistAdapterSnapshot } from "../shared/runtime/source-adapter.js";

function createDefaultState(meta) {
  return {
    enabled: false,
    error: null,
    initialized: false,
    lastFetchedAt: 0,
    lastGoodData: null,
    module: meta.module || null,
    status: "idle",
    timer: null,
  };
}

export function createLayerRuntime({ layers, context, onStatusChange }) {
  const states = new Map(layers.map((meta) => [meta.id, createDefaultState(meta)]));
  let paused = document.hidden || !navigator.onLine;

  function emit(layerId) {
    const state = states.get(layerId);
    onStatusChange?.(layerId, state);
  }

  async function ensureModule(meta) {
    const state = states.get(meta.id);
    if (state.module) return state.module;
    state.module = meta.loader ? await meta.loader() : meta.module;
    return state.module;
  }

  function setStatus(layerId, status, error = null) {
    const state = states.get(layerId);
    state.status = status;
    state.error = error ? String(error.message || error) : null;
    emit(layerId);
  }

  function clearTimer(layerId) {
    const state = states.get(layerId);
    if (state.timer) {
      clearTimeout(state.timer);
      state.timer = null;
    }
  }

  async function runLoader(meta, definition, state, signal) {
    if (definition.load) {
      return definition.load({ context, meta, signal, state });
    }

    if (!definition.source) {
      throw new Error(`Layer "${meta.id}" is missing a load/source handler.`);
    }

    const source = definition.source;
    return source.fetch({
      config: context.config,
      fetchJson: (url, options) => fetchWithPolicy(url, options),
      signal,
      state,
    });
  }

  async function applyPayload(meta, definition, state, payload, freshness = "ready") {
    state.lastGoodData = payload;
    if (definition.source?.key) {
      persistAdapterSnapshot(definition.source, payload);
    }
    state.lastFetchedAt = Date.now();
    await definition.applyData?.({ context, freshness, meta, payload, runtime: api, state });
  }

  async function refreshLayer(layerId, reason = "poll") {
    const meta = layers.find((entry) => entry.id === layerId);
    const state = states.get(layerId);
    if (!meta || !state.enabled) return;

    const module = await ensureModule(meta);
    const definition = module.layerDefinition;
    const controller = new AbortController();

    state.abortController?.abort();
    state.abortController = controller;
    if (reason !== "resume") setStatus(layerId, state.lastGoodData ? "stale" : "loading");

    try {
      const rawPayload = await runLoader(meta, definition, state, controller.signal);
      const payload = definition.source?.normalize ? definition.source.normalize(rawPayload) : rawPayload;
      await applyPayload(meta, definition, state, payload);
      setStatus(layerId, "ready");
    } catch (error) {
      if (controller.signal.aborted) return;

      if (state.lastGoodData) {
        await definition.applyData?.({
          context,
          freshness: "degraded",
          meta,
          payload: state.lastGoodData,
          runtime: api,
          state,
        });
        setStatus(layerId, "degraded", error);
      } else {
        setStatus(layerId, "error", error);
      }
    } finally {
      schedule(meta);
    }
  }

  function schedule(meta) {
    const state = states.get(meta.id);
    clearTimer(meta.id);
    const module = state.module;
    const definition = module?.layerDefinition;
    if (!state.enabled || paused || !definition?.pollMs) return;

    state.timer = setTimeout(() => {
      refreshLayer(meta.id, "poll");
    }, definition.pollMs);
  }

  async function hydrateFromCache(meta, definition, state) {
    if (!definition.source?.key) return;
    const snapshot = loadAdapterSnapshot(definition.source);
    if (!snapshot || snapshot.status === "expired") return;
    state.lastGoodData = snapshot.snapshot.payload;
    state.lastFetchedAt = snapshot.snapshot.fetchedAt;
    await definition.applyData?.({
      context,
      freshness: snapshot.status === "fresh" ? "ready" : "stale",
      meta,
      payload: snapshot.snapshot.payload,
      runtime: api,
      state,
    });
    setStatus(meta.id, snapshot.status === "fresh" ? "ready" : "stale");
  }

  async function enable(layerId) {
    const meta = layers.find((entry) => entry.id === layerId);
    const state = states.get(layerId);
    if (!meta || state.enabled) return;
    state.enabled = true;
    setStatus(layerId, state.lastGoodData ? "ready" : "loading");

    const module = await ensureModule(meta);
    const definition = module.layerDefinition;

    if (!state.initialized) {
      await hydrateFromCache(meta, definition, state);
      await definition.onEnable?.({ context, meta, state, runtime: api });
      state.initialized = true;
    } else {
      await definition.onResume?.({ context, meta, state, runtime: api });
    }

    const ttlMs = definition.ttlMs ?? 0;
    const isWarm = state.lastFetchedAt && ttlMs && (Date.now() - state.lastFetchedAt) < ttlMs;
    if (!isWarm) {
      await refreshLayer(layerId, "enable");
    } else {
      if (state.lastGoodData) {
        await definition.applyData?.({
          context,
          freshness: "ready",
          meta,
          payload: state.lastGoodData,
          runtime: api,
          state,
        });
      }
      schedule(meta);
      emit(layerId);
    }
  }

  async function disable(layerId) {
    const meta = layers.find((entry) => entry.id === layerId);
    const state = states.get(layerId);
    if (!meta || !state.enabled) return;

    state.enabled = false;
    clearTimer(layerId);
    state.abortController?.abort();
    const definition = state.module?.layerDefinition;
    await definition?.onDisable?.({ context, meta, state, runtime: api });
    context.renderRegistry.clearLayer(layerId);
    setStatus(layerId, "idle");
  }

  function pauseAll() {
    paused = true;
    layers.forEach((meta) => clearTimer(meta.id));
  }

  function resumeAll() {
    paused = false;
    layers.forEach((meta) => {
      const state = states.get(meta.id);
      if (!state.enabled) return;
      schedule(meta);
      refreshLayer(meta.id, "resume");
    });
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) pauseAll();
    else resumeAll();
  });
  window.addEventListener("offline", pauseAll);
  window.addEventListener("online", resumeAll);

  const api = {
    async disable(layerId) {
      await disable(layerId);
    },
    async enable(layerId) {
      await enable(layerId);
    },
    getState(layerId) {
      return states.get(layerId);
    },
    getStates() {
      return states;
    },
    async initDefaults() {
      for (const meta of layers) {
        if (meta.defaultEnabled) {
          await enable(meta.id);
        } else {
          emit(meta.id);
        }
      }
    },
    async refresh(layerId) {
      await refreshLayer(layerId, "manual");
    },
    async redraw(layerId, freshness = "ready") {
      const meta = layers.find((entry) => entry.id === layerId);
      const state = states.get(layerId);
      const definition = state?.module?.layerDefinition;
      if (!meta || !state?.lastGoodData || !definition?.applyData) return;
      await definition.applyData({
        context,
        freshness,
        meta,
        payload: state.lastGoodData,
        runtime: api,
        state,
      });
    },
    setStatus,
  };

  return api;
}

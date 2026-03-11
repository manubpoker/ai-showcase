import { escHtml } from "../../shared/atlas/format.js";
import { createSourceAdapter } from "../../shared/runtime/source-adapter.js";

function stationKey(station) {
  return `${station.name}:${station.url}`;
}

function getVisibleStations(context, stations) {
  const filter = context.sharedState.radioCountryFilter;
  if (!filter) return [];
  return stations.filter((station) => station.countryCode?.toUpperCase() === filter.toUpperCase());
}

function getCurrentStation(state) {
  if (!state.currentStationKey) return null;
  return (state.allStations || []).find((station) => stationKey(station) === state.currentStationKey) || null;
}

function syncMarkerStyles(context, state) {
  for (const [key, element] of state.elements ?? []) {
    const icon = element.querySelector(".radio-icon");
    const label = element.querySelector(".radio-label");
    const isPlaying = state.currentStationKey === key && state.audio && !state.audio.paused;
    element.classList.toggle("playing", isPlaying);
    if (icon) icon.textContent = isPlaying ? "🔊" : "📡";
    label?.classList.toggle("visible", context.sharedState.labelsVisible);
  }
}

function emitPlayerState(context, state) {
  const station = getCurrentStation(state);
  context.updateRadioPlayer({
    canAdvance: (state.visibleStations?.length || 0) > 1,
    muted: Boolean(state.audio?.muted),
    playing: Boolean(station && state.audio && !state.audio.paused),
    station,
    visible: Boolean(station),
  });
}

function ensureAudio(context, state) {
  if (state.audioReady) return;
  state.audio ??= new Audio();
  state.audio.preload = "none";
  state.audio.volume = 0.95;

  const sync = () => {
    syncMarkerStyles(context, state);
    emitPlayerState(context, state);
  };

  state.audio.addEventListener("pause", sync);
  state.audio.addEventListener("play", sync);
  state.audio.addEventListener("volumechange", sync);
  state.audio.addEventListener("ended", () => {
    state.currentStationKey = null;
    sync();
  });
  state.audioReady = true;
}

function buildController(context, state) {
  return {
    async close() {
      if (state.audio) state.audio.pause();
      state.currentStationKey = null;
      syncMarkerStyles(context, state);
      emitPlayerState(context, state);
    },
    async next() {
      const visibleStations = state.visibleStations || [];
      if (!visibleStations.length) return;
      const currentIndex = visibleStations.findIndex((station) => stationKey(station) === state.currentStationKey);
      const nextStation = visibleStations[(currentIndex + 1 + visibleStations.length) % visibleStations.length] || visibleStations[0];
      await startStationPlayback(context, state, nextStation, { restart: true });
    },
    async toggleCurrent() {
      const station = getCurrentStation(state);
      if (!station) return;
      if (state.audio && !state.audio.paused) {
        state.audio.pause();
        syncMarkerStyles(context, state);
        emitPlayerState(context, state);
        return;
      }
      await startStationPlayback(context, state, station, { restart: false });
    },
    async toggleMute() {
      ensureAudio(context, state);
      state.audio.muted = !state.audio.muted;
      emitPlayerState(context, state);
    },
    async playStation(station, queue = null) {
      if (!station?.url) return;

      if (Array.isArray(queue) && queue.length) {
        state.visibleStations = queue;
      }

      state.allStations ??= [];
      const key = stationKey(station);
      const existingIndex = state.allStations.findIndex((entry) => stationKey(entry) === key);
      if (existingIndex === -1) {
        state.allStations.push(station);
      } else {
        state.allStations[existingIndex] = station;
      }

      await startStationPlayback(context, state, station, { restart: true });
    },
  };
}

async function startStationPlayback(context, state, station, { restart = true } = {}) {
  ensureAudio(context, state);
  const key = stationKey(station);
  const shouldReload = restart || state.currentStationKey !== key || !state.audio.currentSrc;

  state.currentStationKey = key;
  if (shouldReload) {
    state.audio.pause();
    state.audio.src = station.url;
    state.audio.load();
  }

  try {
    await state.audio.play();
  } catch {
    if (shouldReload) {
      state.audio.removeAttribute("src");
      state.audio.load();
    }
    state.currentStationKey = null;
  }

  syncMarkerStyles(context, state);
  emitPlayerState(context, state);
}

function syncMarkers(context, state, stations) {
  state.elements ??= new Map();
  state.allStations = stations;
  state.visibleStations = getVisibleStations(context, stations);

  const markers = state.visibleStations.map((station) => {
    const key = stationKey(station);
    let element = state.elements.get(key);

    if (!element) {
      element = document.createElement("div");
      element.className = "radio-marker";
      const label = station.name.length > 18 ? `${station.name.slice(0, 16)}…` : station.name;
      element.innerHTML = `<span class="radio-icon">📡</span><span class="radio-label${context.sharedState.labelsVisible ? " visible" : ""}">${escHtml(label)}</span>`;
      element.addEventListener("click", async (event) => {
        event.stopPropagation();
        if (state.currentStationKey === key && state.audio && !state.audio.paused) {
          state.audio.pause();
          syncMarkerStyles(context, state);
          emitPlayerState(context, state);
          return;
        }
        await startStationPlayback(context, state, station, { restart: true });
      });
      element.addEventListener("mouseenter", () => {
        context.globe.controls().autoRotate = false;
        const tags = station.tags ? (station.tags.length > 60 ? `${station.tags.slice(0, 57)}...` : station.tags) : "";
        const meta = [tags, station.bitrate ? `${station.bitrate} kbps` : "", "Click to play"].filter(Boolean).join(" · ");
        context.showHover(station.name, station.country, meta);
      });
      element.addEventListener("mouseleave", () => {
        context.globe.controls().autoRotate = !context.sharedState.selectedCountryIso;
        context.hideHover();
      });
      state.elements.set(key, element);
    }

    return {
      ...station,
      getElement: () => element,
      htmlAltitude: 0.07,
    };
  });

  syncMarkerStyles(context, state);
  context.renderRegistry.setHtml("radio", markers);
  emitPlayerState(context, state);
}

export const layerDefinition = {
  id: "radio",
  kind: "html+audio",
  pollMs: 0,
  ttlMs: 60 * 60 * 1000,
  source: createSourceAdapter({
    key: "liveearth:radio",
    staleAfterMs: 6 * 60 * 60 * 1000,
    expireAfterMs: 48 * 60 * 60 * 1000,
    async fetch({ fetchJson, signal, config }) {
      return fetchJson(config.getApiUrl("radio"), {
        retries: 1,
        signal,
        timeoutMs: 10_000,
      });
    },
    normalize(json) {
      return (json.stations || []).map((station) => ({
        bitrate: station.bitrate,
        country: station.country,
        countryCode: station.countryCode,
        lat: Number(station.lat),
        lng: Number(station.lng),
        name: station.name,
        tags: station.tags,
        url: station.url,
      }));
    },
  }),
  onEnable({ context, state }) {
    ensureAudio(context, state);
    context.setRadioPlayerController(buildController(context, state));
  },
  async applyData({ context, payload, state }) {
    ensureAudio(context, state);
    context.setRadioPlayerController(buildController(context, state));
    syncMarkers(context, state, payload);
  },
  onDisable({ context, state }) {
    if (state.audio) state.audio.pause();
    state.currentStationKey = null;
    context.setRadioPlayerController(null);
    context.updateRadioPlayer({ visible: false });
    context.sharedState.radioCountryFilter = null;
    context.hideHover();
  },
};

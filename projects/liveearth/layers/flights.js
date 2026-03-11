import { fmtNum, timeAgo } from "../../shared/atlas/format.js";
import { createSourceAdapter } from "../../shared/runtime/source-adapter.js";

const ALTITUDE_BANDS = [
  { id: "all", label: "All airborne", minFt: -1, maxFt: Infinity },
  { id: "high", label: "Cruise (30k+ ft)", minFt: 30000, maxFt: Infinity },
  { id: "mid", label: "Mid (10k-30k ft)", minFt: 10000, maxFt: 30000 },
  { id: "low", label: "Low (0-10k ft)", minFt: 0, maxFt: 10000 },
];

const altitudeScale = d3.scaleLinear()
  .domain([0, 3, 7, 11, 14])
  .range(["#38bdf8", "#22c55e", "#eab308", "#f97316", "#ef4444"])
  .clamp(true);

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function metersToFeet(value) {
  if (!Number.isFinite(value)) return null;
  return value * 3.28084;
}

function metersToKm(value) {
  if (!Number.isFinite(value)) return null;
  return value / 1000;
}

function metersPerSecondToKnots(value) {
  if (!Number.isFinite(value)) return null;
  return value * 1.94384;
}

function withinBand(flight, bandId) {
  const band = ALTITUDE_BANDS.find((entry) => entry.id === bandId) || ALTITUDE_BANDS[0];
  if (band.id === "all") return true;
  const altitudeFt = metersToFeet(flight.altitudeM);
  if (!Number.isFinite(altitudeFt)) return false;
  return altitudeFt >= band.minFt && altitudeFt < band.maxFt;
}

function altitudeColor(altitudeM) {
  const altitudeKm = metersToKm(altitudeM) ?? 0;
  return altitudeScale(altitudeKm);
}

function callsignText(flight) {
  return flight.callsign || flight.icao24 || "Unknown flight";
}

function flightKey(flight) {
  return flight.icao24 || flight.callsign || `${flight.lat}:${flight.lng}`;
}

function buildTrafficControls(state, payload, visibleCount, onChange) {
  const node = document.createElement("div");
  node.className = "layer-mini-card";
  node.innerHTML = `
    <div class="layer-mini-title">Live traffic controls</div>
    <label class="layer-mini-row">
      <span>Altitude</span>
      <select class="overlay-dropdown" data-action="band">
        ${ALTITUDE_BANDS.map((band) => (
          `<option value="${band.id}" ${band.id === state.band ? "selected" : ""}>${band.label}</option>`
        )).join("")}
      </select>
    </label>
    <label class="layer-mini-row layer-mini-row--toggle">
      <span>Trails</span>
      <input type="checkbox" data-action="trails" ${state.showTrails ? "checked" : ""} />
    </label>
    <div class="layer-mini-meta">
      ${fmtNum(visibleCount, 0)} visible / ${fmtNum(payload.flights.length, 0)} tracked · Updated ${timeAgo(payload.fetchedAt)}
    </div>
  `;

  node.addEventListener("input", (event) => {
    const target = event.target;
    const action = target?.dataset?.action;
    if (!action) return;
    if (action === "band") onChange({ band: target.value });
    if (action === "trails") onChange({ showTrails: Boolean(target.checked) });
  });

  return node;
}

function buildTrailPath(flight) {
  if (!Number.isFinite(flight.track) || !Number.isFinite(flight.velocity)) return null;
  const previewSeconds = 180;
  const distanceKm = (flight.velocity * previewSeconds) / 1000;
  const heading = (flight.track * Math.PI) / 180;
  const latDelta = (Math.cos(heading) * distanceKm) / 111;
  const lngScale = Math.max(0.15, Math.cos((flight.lat * Math.PI) / 180));
  const lngDelta = (Math.sin(heading) * distanceKm) / (111 * lngScale);
  return {
    coords: [
      [flight.lat, flight.lng],
      [flight.lat + latDelta, flight.lng + lngDelta],
    ],
    pathColor: altitudeColor(flight.altitudeM),
    pathDashAnimateTime: 1_600,
    pathDashGap: 0.06,
    pathDashLength: 0.25,
    pathStroke: 0.8,
  };
}

function ensureMarker(context, state, flight) {
  state.elements ??= new Map();
  const key = flightKey(flight);
  const existing = state.elements.get(key);
  if (existing) return existing;

  const element = document.createElement("div");
  element.className = "flight-marker";
  element.innerHTML = `
    <span class="flight-plane">✈</span>
    <span class="flight-label"></span>
  `;
  element.addEventListener("mouseenter", () => {
    const current = element.__flight;
    if (!current) return;
    context.globe.controls().autoRotate = false;
    const altitudeFt = metersToFeet(current.altitudeM);
    const speedKt = metersPerSecondToKnots(current.velocity);
    const climb = Number.isFinite(current.verticalRate) ? `${current.verticalRate.toFixed(1)} m/s` : "N/A";
    context.showHover(
      callsignText(current),
      altitudeFt != null ? `${fmtNum(altitudeFt, 0)} ft` : "Altitude unavailable",
      `${current.originCountry || "Unknown"} · ${speedKt != null ? `${fmtNum(speedKt, 0)} kt` : "speed n/a"} · climb ${climb}`
    );
  });
  element.addEventListener("mouseleave", () => {
    context.globe.controls().autoRotate = true;
    context.hideHover();
  });
  state.elements.set(key, element);
  return element;
}

function updateMarker(context, state, flight) {
  const element = ensureMarker(context, state, flight);
  const altitudeFt = metersToFeet(flight.altitudeM) || 0;
  const speedKt = metersPerSecondToKnots(flight.velocity) || 0;
  const label = element.querySelector(".flight-label");
  const color = altitudeColor(flight.altitudeM);
  const scale = 0.78 + Math.min(0.52, speedKt / 520);
  const altitudeRatio = clamp(altitudeFt / 45000, 0, 1);

  element.__flight = flight;
  element.style.setProperty("--flight-color", color);
  element.style.setProperty("--flight-glow", `${(0.32 + altitudeRatio * 0.46).toFixed(2)}`);
  element.style.setProperty("--flight-rotation", `${(Number.isFinite(flight.track) ? flight.track : 90).toFixed(1)}deg`);
  element.style.setProperty("--flight-scale", `${scale.toFixed(3)}`);
  element.classList.toggle("climbing", (flight.verticalRate || 0) > 1.2);
  element.classList.toggle("descending", (flight.verticalRate || 0) < -1.2);
  if (label) {
    label.textContent = callsignText(flight);
    label.classList.toggle("visible", context.sharedState.labelsVisible);
  }

  return {
    ...flight,
    getElement: () => element,
    htmlAltitude: 0.09 + (altitudeRatio * 0.08),
  };
}

export const layerDefinition = {
  id: "flights",
  kind: "html+paths",
  pollMs: 90_000,
  ttlMs: 20_000,
  source: createSourceAdapter({
    key: "liveearth:flights",
    staleAfterMs: 8 * 60 * 1000,
    expireAfterMs: 3 * 60 * 60 * 1000,
    async fetch({ config, fetchJson, signal }) {
      return fetchJson(config.getApiUrl("flights"), {
        retries: 1,
        signal,
        timeoutMs: 14_000,
      });
    },
    normalize(json) {
      const flights = (Array.isArray(json?.flights) ? json.flights : [])
        .map((flight) => ({
          ...flight,
          altitudeM: Number.isFinite(Number(flight.geoAltitude))
            ? Number(flight.geoAltitude)
            : Number.isFinite(Number(flight.baroAltitude))
              ? Number(flight.baroAltitude)
              : null,
          lat: Number(flight.lat),
          lng: Number(flight.lng),
          track: Number.isFinite(Number(flight.track)) ? Number(flight.track) : null,
          velocity: Number.isFinite(Number(flight.velocity)) ? Number(flight.velocity) : null,
          verticalRate: Number.isFinite(Number(flight.verticalRate)) ? Number(flight.verticalRate) : null,
        }))
        .filter((flight) => Number.isFinite(flight.lat) && Number.isFinite(flight.lng));

      return {
        fetchedAt: Number.isFinite(Number(json?.fetchedAt)) ? Number(json.fetchedAt) : Date.now(),
        flights,
        sourceTime: Number.isFinite(Number(json?.sourceTime)) ? Number(json.sourceTime) : null,
      };
    },
  }),
  onEnable({ state }) {
    state.band ??= "all";
    state.elements ??= new Map();
    state.showTrails ??= true;
  },
  async applyData({ context, payload, runtime, state }) {
    const profile = context.getRenderProfile();
    const visibleFlights = payload.flights
      .filter((flight) => withinBand(flight, state.band))
      .slice(0, profile.limits.flights);
    const trails = state.showTrails
      ? visibleFlights
        .slice(0, profile.limits.flightTrails)
        .map((flight) => buildTrailPath(flight))
        .filter(Boolean)
      : [];

    context.renderRegistry.setPoints("flights", []);
    context.renderRegistry.setHtml("flights", visibleFlights.map((flight) => updateMarker(context, state, flight)));
    context.renderRegistry.setPaths("flights", trails);
    context.setLayerExtra(
      "flights",
      buildTrafficControls(state, payload, visibleFlights.length, async (changeSet) => {
        Object.assign(state, changeSet);
        await runtime.redraw("flights");
      })
    );
  },
  onDisable({ context }) {
    context.renderRegistry.setHtml("flights", []);
    context.setLayerExtra("flights", null);
    context.hideHover();
  },
};

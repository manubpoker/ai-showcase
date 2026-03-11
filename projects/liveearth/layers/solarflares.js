import { fmtNum, timeAgo } from "../../shared/atlas/format.js";
import { createSourceAdapter } from "../../shared/runtime/source-adapter.js";

const flareScale = d3.scaleLog()
  .domain([1e-8, 5e-4])
  .range(["#22d3ee", "#facc15", "#fb923c", "#ef4444"])
  .clamp(true);

function toJulianDay(date) {
  return (date.getTime() / 86400000) + 2440587.5;
}

function normalizeLongitude(value) {
  let result = value;
  while (result > 180) result -= 360;
  while (result < -180) result += 360;
  return result;
}

function getSubsolarPoint(timestamp) {
  const date = new Date(timestamp);
  const jd = toJulianDay(date);
  const n = jd - 2451545.0;
  const g = ((357.528 + 0.9856003 * n) * Math.PI) / 180;
  const q = (280.46 + 0.9856474 * n) % 360;
  const l = q + 1.915 * Math.sin(g) + 0.02 * Math.sin(2 * g);
  const lRad = (l * Math.PI) / 180;
  const e = ((23.439 - 0.0000004 * n) * Math.PI) / 180;
  const declination = Math.asin(Math.sin(e) * Math.sin(lRad));
  const rightAscension = Math.atan2(Math.cos(e) * Math.sin(lRad), Math.cos(lRad));
  const rightAscensionHours = ((((rightAscension * 180) / Math.PI) / 15) + 24) % 24;
  const gmst = (18.697374558 + 24.06570982441908 * n) % 24;
  return {
    lat: (declination * 180) / Math.PI,
    lng: normalizeLongitude((rightAscensionHours - gmst) * 15),
  };
}

function flareBand(flux) {
  if (!Number.isFinite(flux) || flux <= 0) return "Unknown";
  if (flux < 1e-7) return "A-class";
  if (flux < 1e-6) return "B-class";
  if (flux < 1e-5) return "C-class";
  if (flux < 1e-4) return "M-class";
  return "X-class";
}

function fluxStrength(flux) {
  if (!Number.isFinite(flux) || flux <= 0) return 0;
  const logMin = Math.log10(1e-8);
  const logMax = Math.log10(5e-4);
  const scaled = (Math.log10(flux) - logMin) / (logMax - logMin);
  return Math.max(0, Math.min(1, scaled));
}

function buildTrack(samples) {
  return samples
    .slice(-16)
    .map((sample) => {
      const subsolar = getSubsolarPoint(sample.observedAt);
      return [subsolar.lat, subsolar.lng];
    });
}

function buildControls(state, payload, onChange) {
  const node = document.createElement("div");
  node.className = "layer-mini-card";
  node.innerHTML = `
    <div class="layer-mini-title">Solar flux controls</div>
    <label class="layer-mini-row">
      <span>Anchor</span>
      <select class="overlay-dropdown" data-action="anchor">
        <option value="latest" ${state.anchorMode === "latest" ? "selected" : ""}>Latest burst</option>
        <option value="peak24h" ${state.anchorMode === "peak24h" ? "selected" : ""}>24h peak</option>
      </select>
    </label>
    <label class="layer-mini-row layer-mini-row--toggle">
      <span>Solar track</span>
      <input type="checkbox" data-action="track" ${state.showTrack ? "checked" : ""} />
    </label>
    <div class="layer-mini-meta">
      ${payload.latestClass} now · ${payload.peakClass24h} 24h max · Trend ${payload.trend}
    </div>
  `;
  node.addEventListener("input", (event) => {
    const target = event.target;
    const action = target?.dataset?.action;
    if (!action) return;
    if (action === "anchor") onChange({ anchorMode: target.value });
    if (action === "track") onChange({ showTrack: Boolean(target.checked) });
  });
  return node;
}

export const layerDefinition = {
  id: "solarflares",
  kind: "points+rings+paths",
  pollMs: 90_000,
  ttlMs: 25_000,
  source: createSourceAdapter({
    key: "liveearth:solarflares",
    staleAfterMs: 7 * 60 * 1000,
    expireAfterMs: 10 * 60 * 60 * 1000,
    async fetch({ config, fetchJson, signal }) {
      return fetchJson(config.getApiUrl("solar-flares"), {
        retries: 1,
        signal,
        timeoutMs: 12_000,
      });
    },
    normalize(json) {
      const samples = (Array.isArray(json?.samples) ? json.samples : [])
        .map((sample) => ({
          flux: Number(sample?.flux),
          observedAt: Number(sample?.observedAt),
        }))
        .filter((sample) => Number.isFinite(sample.flux) && Number.isFinite(sample.observedAt))
        .sort((left, right) => left.observedAt - right.observedAt);

      return {
        latestClass: json?.latestClass || "Unknown",
        latestFlux: Number(json?.latestFlux) || 0,
        latestObservedAt: Number(json?.latestObservedAt) || Date.now(),
        peakClass24h: json?.peakClass24h || "Unknown",
        peakFlux24h: Number(json?.peakFlux24h) || 0,
        peakObservedAt24h: Number(json?.peakObservedAt24h) || Date.now(),
        trend: json?.trend || "steady",
        samples,
      };
    },
  }),
  onEnable({ state }) {
    state.anchorMode ??= "latest";
    state.showTrack ??= true;
  },
  async applyData({ context, payload, runtime, state }) {
    const isPeak = state.anchorMode === "peak24h";
    const anchorObservedAt = isPeak ? payload.peakObservedAt24h : payload.latestObservedAt;
    const anchorFlux = isPeak ? payload.peakFlux24h : payload.latestFlux;
    const anchorClass = isPeak ? payload.peakClass24h : payload.latestClass;
    const subsolar = getSubsolarPoint(anchorObservedAt);
    const strength = fluxStrength(anchorFlux);
    const ringColor = flareScale(Math.max(anchorFlux, 1e-8));
    const track = state.showTrack ? buildTrack(payload.samples) : [];

    context.renderRegistry.setPoints("solarflares", [{
      lat: subsolar.lat,
      lng: subsolar.lng,
      pointAltitude: 0.14 + (strength * 0.06),
      pointColor: ringColor,
      pointRadius: 0.16 + (strength * 0.2),
      onPointHover() {
        context.globe.controls().autoRotate = false;
        context.showHover(
          "Solar X-ray Front",
          `${anchorClass} · ${fmtNum(anchorFlux, 6)} W/m²`,
          `${flareBand(anchorFlux)} · ${isPeak ? "24h peak anchor" : "Live anchor"} · Updated ${timeAgo(payload.latestObservedAt)}`
        );
      },
      onPointLeave() {
        context.globe.controls().autoRotate = true;
        context.hideHover();
      },
    }]);

    context.renderRegistry.setRings("solarflares", [{
      lat: subsolar.lat,
      lng: subsolar.lng,
      ringColor: [ringColor, "transparent"],
      ringMaxRadius: 1.8 + (strength * 2.7),
      ringPropagationSpeed: 0.45 + (strength * 0.45),
      ringRepeatPeriod: Math.max(1_400, 2_800 - Math.round(strength * 1_100)),
    }]);

    context.renderRegistry.setPaths("solarflares", track.length > 1 ? [{
      coords: track,
      pathColor: "rgba(251, 191, 36, 0.85)",
      pathStroke: 1.3,
      pathDashLength: 0.24,
      pathDashGap: 0.08,
      pathDashAnimateTime: 2_400,
    }] : []);

    context.setLayerExtra(
      "solarflares",
      buildControls(state, payload, async (changeSet) => {
        Object.assign(state, changeSet);
        await runtime.redraw("solarflares");
      })
    );
  },
  onDisable({ context }) {
    context.setLayerExtra("solarflares", null);
    context.hideHover();
  },
};

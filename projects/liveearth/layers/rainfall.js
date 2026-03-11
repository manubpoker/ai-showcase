import { fmtNum, timeAgo } from "../../shared/atlas/format.js";
import { WORLD_CITIES, WMO_CODES } from "../constants.js";
import { createSourceAdapter } from "../../shared/runtime/source-adapter.js";

const rainScale = d3.scaleLinear()
  .domain([0, 0.4, 2, 8, 25, 60])
  .range(["#67e8f9", "#38bdf8", "#22d3ee", "#22c55e", "#f59e0b", "#ef4444"])
  .clamp(true);

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function precipitationRate(reading) {
  const rain = Number(reading?.rainMmPerHour);
  const snow = Number(reading?.snowMmPerHour);
  const total = Number(reading?.precipitationMmPerHour);
  if (Number.isFinite(total) && total > 0) return total;
  return Math.max(Number.isFinite(rain) ? rain : 0, Number.isFinite(snow) ? snow : 0);
}

function toIntensity(rateMmPerHour) {
  if (!Number.isFinite(rateMmPerHour) || rateMmPerHour <= 0) return 0;
  return clamp(rateMmPerHour / 45, 0, 1);
}

function projectStormDrift(lat, lng, directionDeg, windKmh, trailScale = 1) {
  const direction = Number.isFinite(directionDeg) ? directionDeg : 0;
  const speed = Number.isFinite(windKmh) ? windKmh : 0;
  const flowDirection = ((direction + 180) % 360) * (Math.PI / 180);
  const distanceDeg = clamp((speed / 35) * trailScale, 0.6, 5.8);
  const latAdjust = Math.cos(flowDirection) * distanceDeg;
  const lngAdjust = Math.sin(flowDirection) * distanceDeg / Math.max(0.3, Math.cos(lat * (Math.PI / 180)));

  let targetLng = lng + lngAdjust;
  while (targetLng > 180) targetLng -= 360;
  while (targetLng < -180) targetLng += 360;

  return [
    [lat, lng],
    [clamp(lat + latAdjust, -85, 85), targetLng],
  ];
}

function convectiveSignal(reading) {
  const code = Number(reading?.weatherCode);
  if (code === 95) return 0.75;
  if (code === 96) return 0.86;
  if (code === 99) return 1;
  if (code === 82 || code === 86) return 0.62;
  return 0;
}

function buildControls(state, payload, onChange) {
  const wetCount = payload.filter((station) => precipitationRate(station) >= 1).length;
  const strongest = payload.reduce((max, station) => {
    const intensity = state.mode === "convective"
      ? Math.max(precipitationRate(station), convectiveSignal(station) * 30)
      : precipitationRate(station);
    return intensity > max.value ? { station, value: intensity } : max;
  }, { station: null, value: 0 });

  const node = document.createElement("div");
  node.className = "layer-mini-card";
  node.innerHTML = `
    <div class="layer-mini-title">Rain radar controls</div>
    <label class="layer-mini-row">
      <span>Mode</span>
      <select class="overlay-dropdown" data-action="mode">
        <option value="intensity" ${state.mode === "intensity" ? "selected" : ""}>Intensity map</option>
        <option value="convective" ${state.mode === "convective" ? "selected" : ""}>Convective cores</option>
      </select>
    </label>
    <label class="layer-mini-row">
      <span>Focus</span>
      <select class="overlay-dropdown" data-action="focus">
        <option value="all" ${state.focusMode === "all" ? "selected" : ""}>All precip cities</option>
        <option value="heavy" ${state.focusMode === "heavy" ? "selected" : ""}>Heavy bursts</option>
      </select>
    </label>
    <label class="layer-mini-row">
      <span>Storm drift</span>
      <select class="overlay-dropdown" data-action="trail">
        <option value="short" ${state.trailMode === "short" ? "selected" : ""}>Short</option>
        <option value="balanced" ${state.trailMode === "balanced" ? "selected" : ""}>Balanced</option>
        <option value="cinematic" ${state.trailMode === "cinematic" ? "selected" : ""}>Cinematic</option>
      </select>
    </label>
    <div class="layer-mini-meta">
      ${fmtNum(wetCount, 0)} wet cities · ${strongest.station ? `${strongest.station.name} ${fmtNum(strongest.value, 1)} mm/h` : "No precipitation"}
    </div>
  `;

  node.addEventListener("input", (event) => {
    const target = event.target;
    const action = target?.dataset?.action;
    if (!action) return;
    if (action === "mode") onChange({ mode: target.value === "convective" ? "convective" : "intensity" });
    if (action === "focus") onChange({ focusMode: target.value === "heavy" ? "heavy" : "all" });
    if (action === "trail") {
      const next = target.value === "short" || target.value === "cinematic" ? target.value : "balanced";
      onChange({ trailMode: next });
    }
  });

  return node;
}

export const layerDefinition = {
  id: "rainfall",
  kind: "points+paths+rings",
  pollMs: 8 * 60 * 1000,
  ttlMs: 3 * 60 * 1000,
  source: createSourceAdapter({
    key: "liveearth:rainfall",
    staleAfterMs: 25 * 60 * 1000,
    expireAfterMs: 12 * 60 * 60 * 1000,
    async fetch({ config, fetchJson, signal }) {
      return fetchJson(`${config.getApiUrl("meteo")}?dataset=rainfall`, {
        retries: 1,
        signal,
        timeoutMs: 12_000,
      });
    },
    normalize(json) {
      return WORLD_CITIES.map((city, index) => {
        const source = Array.isArray(json) ? json[index] : json;
        const current = source?.current || {};
        const observedAt = Number.isFinite(Date.parse(current.time)) ? Date.parse(current.time) : Date.now();
        return {
          ...city,
          cloudCover: Number(current.cloud_cover),
          observedAt,
          precipitationMmPerHour: Number(current.precipitation),
          rainMmPerHour: Number(current.rain),
          snowMmPerHour: Number(current.snowfall),
          weatherCode: Number(current.weather_code),
          windDirDeg: Number(current.wind_direction_10m),
          windKmh: Number(current.wind_speed_10m),
        };
      }).filter((reading) => {
        const rate = precipitationRate(reading);
        return rate > 0 || convectiveSignal(reading) > 0;
      });
    },
  }),
  onEnable({ state }) {
    state.mode ??= "intensity";
    state.focusMode ??= "all";
    state.trailMode ??= "balanced";
  },
  async applyData({ context, payload, runtime, state }) {
    const profile = context.getRenderProfile();
    const heavyThreshold = state.mode === "convective" ? 2.5 : 1.2;
    const focusThreshold = state.focusMode === "heavy" ? heavyThreshold : 0.1;
    const trailScale = state.trailMode === "short" ? 0.78 : state.trailMode === "cinematic" ? 1.42 : 1.05;

    const filtered = payload
      .map((reading) => {
        const baseRate = precipitationRate(reading);
        const convective = convectiveSignal(reading);
        const effectiveRate = state.mode === "convective"
          ? Math.max(baseRate, convective * 32)
          : baseRate;
        return {
          ...reading,
          baseRate,
          convective,
          effectiveRate,
          intensity: toIntensity(effectiveRate),
        };
      })
      .filter((reading) => reading.effectiveRate >= focusThreshold)
      .sort((left, right) => right.effectiveRate - left.effectiveRate);
    const visiblePoints = filtered.slice(0, profile.limits.rainfallPoints);
    const visiblePaths = filtered
      .filter((reading) => Number.isFinite(reading.windKmh) && reading.windKmh > 6)
      .slice(0, profile.limits.rainfallPaths);
    const visibleRings = filtered
      .filter((reading) => reading.effectiveRate >= heavyThreshold)
      .slice(0, profile.limits.rainfallRings);

    context.renderRegistry.setPoints("rainfall", visiblePoints.map((reading) => {
      const color = rainScale(reading.effectiveRate);
      return {
        ...reading,
        pointAltitude: 0.08 + (reading.intensity * 0.11),
        pointColor: color,
        pointRadius: 0.11 + (reading.intensity * 0.32),
        onPointHover() {
          context.globe.controls().autoRotate = false;
          const condition = WMO_CODES[reading.weatherCode] || "Unknown";
          context.showHover(
            `${reading.name}, ${reading.country}`,
            `${fmtNum(reading.effectiveRate, 1)} mm/h`,
            `${condition} · Rain ${fmtNum(reading.rainMmPerHour || 0, 1)} mm/h · Snow ${fmtNum(reading.snowMmPerHour || 0, 1)} mm/h · Wind ${fmtNum(reading.windKmh || 0, 0)} km/h · Updated ${timeAgo(reading.observedAt)}`
          );
        },
        onPointLeave() {
          context.globe.controls().autoRotate = true;
          context.hideHover();
        },
      };
    }));

    context.renderRegistry.setPaths("rainfall", visiblePaths.map((reading) => {
        const color = rainScale(reading.effectiveRate);
        return {
          coords: projectStormDrift(reading.lat, reading.lng, reading.windDirDeg, reading.windKmh, trailScale),
          pathColor: color,
          pathStroke: 0.7 + (reading.intensity * 1.8),
          pathDashLength: 0.2,
          pathDashGap: 0.1,
          pathDashAnimateTime: Math.max(520, 1_950 - Math.round(reading.intensity * 1_200)),
        };
      }));

    context.renderRegistry.setRings("rainfall", visibleRings.map((reading) => {
        const color = rainScale(reading.effectiveRate);
        return {
          lat: reading.lat,
          lng: reading.lng,
          ringColor: [color, "transparent"],
          ringMaxRadius: 0.75 + (reading.intensity * 1.9),
          ringPropagationSpeed: 0.44 + (reading.intensity * 0.95),
          ringRepeatPeriod: Math.max(900, 1_800 - Math.round(reading.intensity * 650)),
        };
      }));

    context.setLayerExtra("rainfall", buildControls(state, payload, async (changes) => {
      Object.assign(state, changes);
      await runtime.redraw("rainfall");
    }));
  },
  onDisable({ context }) {
    context.setLayerExtra("rainfall", null);
    context.hideHover();
  },
};

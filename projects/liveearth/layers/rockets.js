import { escHtml } from "../../shared/atlas/format.js";
import { createSourceAdapter } from "../../shared/runtime/source-adapter.js";

const ORBIT_PARAMS = {
  LEO: { apoAlt: 420, periAlt: 400, incl: 51.6 },
  ISS: { apoAlt: 425, periAlt: 415, incl: 51.6 },
  SSO: { apoAlt: 560, periAlt: 540, incl: 97.5 },
  MEO: { apoAlt: 20200, periAlt: 20000, incl: 55 },
  GEO: { apoAlt: 35786, periAlt: 35770, incl: 0 },
  GTO: { apoAlt: 35786, periAlt: 250, incl: 28.5 },
  HEO: { apoAlt: 39000, periAlt: 500, incl: 63.4 },
  PO: { apoAlt: 820, periAlt: 780, incl: 90 },
};

const PHASES = [
  { t: 0.0, name: "Liftoff", emoji: "🚀" },
  { t: 0.06, name: "Max-Q", emoji: "💨" },
  { t: 0.14, name: "MECO", emoji: "✨" },
  { t: 0.18, name: "Stage Sep", emoji: "🔧" },
  { t: 0.22, name: "SES-1", emoji: "🔥" },
  { t: 0.3, name: "Fairing Sep", emoji: "🛡️" },
  { t: 0.55, name: "Coast", emoji: "🌌" },
  { t: 0.78, name: "SECO", emoji: "⭐" },
  { t: 0.9, name: "Orbit", emoji: "🌍" },
];

function formatCountdown(net) {
  const diff = new Date(net) - Date.now();
  if (diff < 0) return "Launched";
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  if (days > 0) return `T-${days}d ${hours}h ${minutes}m`;
  if (hours > 0) return `T-${hours}h ${minutes}m`;
  return `T-${minutes}m`;
}

function markerLabelVisible(context) {
  return context.sharedState.labelsVisible ? " visible" : "";
}

function updateRocketMarkers(context, state, launches) {
  state.elements ??= new Map();
  const markers = launches.map((launch) => {
    const key = launch.name;
    let element = state.elements.get(key);

    if (!element) {
      element = document.createElement("div");
      element.className = "rocket-marker";
      element.innerHTML = `<span class="rocket-icon">🚀</span><span class="rocket-label"></span>`;
      element.addEventListener("pointerdown", (event) => {
        event.stopPropagation();
      });
      element.addEventListener("click", (event) => {
        event.stopPropagation();
        if (!element.__launch) return;
        simulateTrajectory(context, state, element.__launch);
      });
      element.addEventListener("mouseenter", () => {
        const current = element.__launch;
        if (!current) return;
        context.globe.controls().autoRotate = false;
        const name = current.name.length > 40 ? `${current.name.slice(0, 37)}...` : current.name;
        context.showHover(name, formatCountdown(current.net), `${current.provider} · ${current.padName} · Click to simulate`);
      });
      element.addEventListener("mouseleave", () => {
        context.globe.controls().autoRotate = true;
        context.hideHover();
      });
      state.elements.set(key, element);
    }

    const label = launch.rocketName
      ? (launch.rocketName.length > 20 ? `${launch.rocketName.slice(0, 18)}…` : launch.rocketName)
      : launch.name.split("|")[0].trim();
    element.__launch = launch;
    element.dataset.status = launch.status;
    element.querySelector(".rocket-label")?.classList.toggle("visible", context.sharedState.labelsVisible);
    if (element.querySelector(".rocket-label")) {
      element.querySelector(".rocket-label").textContent = label;
    }
    return {
      ...launch,
      getElement: () => element,
      htmlAltitude: 0.07,
    };
  });

  const extras = [];
  if (state.trajectoryMarker) extras.push(state.trajectoryMarker);
  context.renderRegistry.setHtml("rockets", [...markers, ...extras]);
  context.renderRegistry.setPaths("rockets", state.trajectoryPath ? [state.trajectoryPath] : []);
}

function stopTrajectory(context, state) {
  if (state.trajectoryTimer) {
    clearInterval(state.trajectoryTimer);
    state.trajectoryTimer = null;
  }
  state.trajectoryMarker = null;
  state.trajectoryPath = null;
  state.trajectoryPanel?.remove();
  state.trajectoryPanel = null;
  updateRocketMarkers(context, state, state.lastGoodData || []);
}

function simulateTrajectory(context, state, launch) {
  stopTrajectory(context, state);

  const orbit = ORBIT_PARAMS[launch.orbitAbbrev] || ORBIT_PARAMS.LEO;
  const earthRadius = 6371;
  const degrees = Math.PI / 180;
  const launchLat = launch.lat * degrees;
  const launchLng = launch.lng * degrees;
  const inclination = orbit.incl * degrees;
  const azimuth = Math.abs(Math.cos(inclination) / Math.cos(launchLat)) <= 1
    ? Math.asin(Math.cos(inclination) / Math.cos(launchLat))
    : Math.PI / 4;
  const launchAzimuth = launch.lat >= 0 ? (Math.PI - azimuth) : azimuth;
  const totalArc = 0.6;
  const points = [];

  for (let index = 0; index <= 40; index += 1) {
    const t = index / 40;
    const arc = totalArc * t;
    const lat = Math.asin(
      Math.sin(launchLat) * Math.cos(arc) +
      Math.cos(launchLat) * Math.sin(arc) * Math.cos(launchAzimuth)
    );
    const lng = launchLng + Math.atan2(
      Math.sin(launchAzimuth) * Math.sin(arc) * Math.cos(launchLat),
      Math.cos(arc) - Math.sin(launchLat) * Math.sin(lat)
    );

    const alt = t < 0.12
      ? orbit.periAlt * Math.pow(t / 0.12, 1.8)
      : orbit.periAlt + (orbit.apoAlt - orbit.periAlt) * Math.min(1, (t - 0.12) / 0.88);
    const velocity = Math.sqrt(398600 / (earthRadius + alt)) * (t < 0.12 ? Math.pow(t / 0.12, 0.8) : (0.85 + 0.15 * Math.min(1, (t - 0.12) / 0.66)));
    const downrange = arc * earthRadius;
    const phase = [...PHASES].reverse().find((entry) => t >= entry.t) || PHASES[0];

    points.push({
      alt,
      downrange,
      globeAlt: Math.max(0.07, Math.min(0.5, (alt / earthRadius) * 3)),
      lat: lat / degrees,
      lng: ((lng / degrees) + 540) % 360 - 180,
      phase,
      t,
      velocity,
    });
  }

  const panel = document.createElement("div");
  panel.className = "traj-panel";
  panel.innerHTML = `
    <button class="traj-close" title="Close">✕</button>
    <h3>🚀 ${escHtml(launch.rocketName || launch.name)}</h3>
    <div class="traj-meta">${escHtml(launch.provider)} · ${escHtml(launch.padName)} → ${escHtml(launch.orbitName || "LEO")}</div>
    <div class="traj-stats">
      <div><span class="traj-stat-label">Phase</span><br><span class="traj-stat-value" id="traj-phase">🚀 Liftoff</span></div>
      <div><span class="traj-stat-label">Altitude</span><br><span class="traj-stat-value" id="traj-alt">0 km</span></div>
      <div><span class="traj-stat-label">Velocity</span><br><span class="traj-stat-value" id="traj-vel">0.00 km/s</span></div>
      <div><span class="traj-stat-label">Downrange</span><br><span class="traj-stat-value" id="traj-range">0 km</span></div>
    </div>
    <div class="traj-progress"><div class="traj-progress-bar"><div class="traj-progress-fill" id="traj-fill" style="width:0%"></div></div></div>
  `;
  panel.querySelector(".traj-close").addEventListener("click", () => stopTrajectory(context, state));
  document.body.appendChild(panel);
  state.trajectoryPanel = panel;

  const phaseEl = panel.querySelector("#traj-phase");
  const altEl = panel.querySelector("#traj-alt");
  const velEl = panel.querySelector("#traj-vel");
  const rangeEl = panel.querySelector("#traj-range");
  const fillEl = panel.querySelector("#traj-fill");

  let revealed = 0;
  context.globe.pointOfView({ lat: launch.lat, lng: launch.lng, altitude: 1.8 }, 1_000);

  const tick = () => {
    const current = points[Math.min(revealed, points.length - 1)];
    const revealedPoints = points.slice(0, revealed + 1);

    state.trajectoryPath = {
      coords: revealedPoints.map((point) => [point.lat, point.lng]),
      pathColor: "rgba(248, 113, 113, 0.95)",
      pathStroke: 1.8,
      pathDashLength: 0.22,
      pathDashGap: 0.05,
      pathDashAnimateTime: 900,
    };
    state.trajectoryMarker = {
      lat: current.lat,
      lng: current.lng,
      htmlAltitude: current.globeAlt,
      getElement: () => {
        const marker = document.createElement("div");
        marker.className = "traj-rocket";
        marker.innerHTML = '<span class="traj-rocket-icon">🚀</span>';
        return marker;
      },
    };
    updateRocketMarkers(context, state, state.lastGoodData || []);

    phaseEl.textContent = `${current.phase.emoji} ${current.phase.name}`;
    altEl.textContent = current.alt < 1000 ? `${current.alt.toFixed(0)} km` : `${(current.alt / 1000).toFixed(1)}k km`;
    velEl.textContent = `${current.velocity.toFixed(2)} km/s`;
    rangeEl.textContent = current.downrange < 1000 ? `${current.downrange.toFixed(0)} km` : `${(current.downrange / 1000).toFixed(1)}k km`;
    fillEl.style.width = `${(current.t * 100).toFixed(1)}%`;

    revealed += 1;
    if (revealed >= points.length) {
      clearInterval(state.trajectoryTimer);
      state.trajectoryTimer = null;
      return;
    }
  };

  tick();
  state.trajectoryTimer = setInterval(tick, 300);
}

export const layerDefinition = {
  id: "rockets",
  kind: "html+trajectory",
  pollMs: 1_800_000,
  ttlMs: 300_000,
  source: createSourceAdapter({
    key: "liveearth:rockets",
    staleAfterMs: 60 * 60 * 1000,
    expireAfterMs: 24 * 60 * 60 * 1000,
    async fetch({ fetchJson, signal, config }) {
      return fetchJson(config.getApiUrl("launches"), {
        retries: 1,
        signal,
        timeoutMs: 10_000,
      });
    },
    normalize(json) {
      return (json.launches || []).map((launch) => ({ ...launch, lat: Number(launch.lat), lng: Number(launch.lng) }));
    },
  }),
  async applyData({ context, payload, state }) {
    updateRocketMarkers(context, state, payload);
  },
  onDisable({ context, state }) {
    stopTrajectory(context, state);
    context.hideHover();
  },
};

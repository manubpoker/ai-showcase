import { fmtNum, timeAgo } from "../../shared/atlas/format.js";

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
  const rightAscensionDeg = (rightAscension * 180) / Math.PI;
  const rightAscensionHours = ((rightAscensionDeg / 15) + 24) % 24;
  const gmst = (18.697374558 + 24.06570982441908 * n) % 24;

  return {
    lat: (declination * 180) / Math.PI,
    lng: normalizeLongitude((rightAscensionHours - gmst) * 15),
  };
}

function buildTerminator(subsolar) {
  const declinationRad = (subsolar.lat * Math.PI) / 180;
  const tanDeclination = Math.tan(declinationRad);
  const epsilon = Math.max(1e-5, Math.abs(tanDeclination));
  const sign = tanDeclination < 0 ? -1 : 1;
  const points = [];

  for (let lng = -180; lng <= 180; lng += 4) {
    const hourAngle = ((lng - subsolar.lng) * Math.PI) / 180;
    const latRad = Math.atan((-Math.cos(hourAngle)) / (epsilon * sign));
    points.push([(latRad * 180) / Math.PI, lng]);
  }

  return points;
}

function buildDaylightCard(payload) {
  const localTime = new Date(payload.observedAt);
  const utcText = localTime.toISOString().replace("T", " ").replace(".000Z", " UTC");
  const node = document.createElement("div");
  node.className = "layer-mini-card";
  node.innerHTML = `
    <div class="layer-mini-title">Solar terminator</div>
    <div class="layer-mini-meta">Subsolar: ${fmtNum(payload.subsolar.lat, 1)}°, ${fmtNum(payload.subsolar.lng, 1)}°</div>
    <div class="layer-mini-list">
      <div>Daylight coverage: 50% of Earth</div>
      <div>Updated ${timeAgo(payload.observedAt)}</div>
      <div>${utcText}</div>
    </div>
  `;
  return node;
}

export const layerDefinition = {
  id: "daylight",
  kind: "paths+rings+points",
  pollMs: 60_000,
  ttlMs: 20_000,
  async load() {
    return { observedAt: Date.now() };
  },
  async applyData({ context, payload }) {
    const observedAt = Number.isFinite(payload?.observedAt) ? payload.observedAt : Date.now();
    const subsolar = getSubsolarPoint(observedAt);
    const antiSolar = {
      lat: -subsolar.lat,
      lng: normalizeLongitude(subsolar.lng + 180),
    };

    context.setDaylightEffect({ antiSolar, observedAt, subsolar });

    context.renderRegistry.setPaths("daylight", [{
      coords: buildTerminator(subsolar),
      pathColor: "#facc15",
      pathStroke: 1.6,
      pathDashLength: 0.2,
      pathDashGap: 0.08,
      pathDashAnimateTime: 2_400,
    }]);
    context.renderRegistry.setRings("daylight", [{
      lat: subsolar.lat,
      lng: subsolar.lng,
      ringColor: ["rgba(250, 204, 21, 0.55)", "transparent"],
      ringMaxRadius: 2.8,
      ringPropagationSpeed: 0.45,
      ringRepeatPeriod: 3_000,
    }]);
    context.renderRegistry.setPoints("daylight", [
      {
        lat: subsolar.lat,
        lng: subsolar.lng,
        pointAltitude: 0.13,
        pointColor: "#fde047",
        pointRadius: 0.24,
        onPointHover() {
          context.globe.controls().autoRotate = false;
          context.showHover("Subsolar Point", "Local noon", `Updated ${timeAgo(observedAt)}`);
        },
        onPointLeave() {
          context.globe.controls().autoRotate = true;
          context.hideHover();
        },
      },
      {
        lat: antiSolar.lat,
        lng: antiSolar.lng,
        pointAltitude: 0.11,
        pointColor: "#1d4ed8",
        pointRadius: 0.2,
        onPointHover() {
          context.globe.controls().autoRotate = false;
          context.showHover("Antisolar Point", "Local midnight", `Updated ${timeAgo(observedAt)}`);
        },
        onPointLeave() {
          context.globe.controls().autoRotate = true;
          context.hideHover();
        },
      },
    ]);
    context.setLayerExtra("daylight", buildDaylightCard({ observedAt, subsolar }));
  },
  onDisable({ context }) {
    context.clearDaylightEffect();
    context.setLayerExtra("daylight", null);
    context.hideHover();
  },
};

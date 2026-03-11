import { fmtNum, timeAgo } from "../../shared/atlas/format.js";
import { createSourceAdapter } from "../../shared/runtime/source-adapter.js";

const kpScale = d3.scaleLinear()
  .domain([0, 2, 4, 6, 9])
  .range(["#22c55e", "#a3e635", "#eab308", "#f97316", "#ef4444"])
  .clamp(true);

function kpLabel(kp) {
  if (kp < 2) return "Quiet";
  if (kp < 4) return "Unsettled";
  if (kp < 5) return "Active";
  if (kp < 7) return "Minor storm";
  if (kp < 8) return "Strong storm";
  return "Severe storm";
}

function buildAuroraControls(state, payload, onChange) {
  const node = document.createElement("div");
  node.className = "layer-mini-card";
  node.innerHTML = `
    <div class="layer-mini-title">Aurora controls</div>
    <label class="layer-mini-row">
      <span>Hemisphere</span>
      <select class="overlay-dropdown" data-action="hemisphere">
        <option value="both" ${state.hemisphere === "both" ? "selected" : ""}>Both</option>
        <option value="north" ${state.hemisphere === "north" ? "selected" : ""}>North</option>
        <option value="south" ${state.hemisphere === "south" ? "selected" : ""}>South</option>
      </select>
    </label>
    <label class="layer-mini-row">
      <span>Intensity</span>
      <select class="overlay-dropdown" data-action="intensity">
        <option value="true-scale" ${state.intensityMode === "true-scale" ? "selected" : ""}>True scale</option>
        <option value="cinematic" ${state.intensityMode === "cinematic" ? "selected" : ""}>Cinematic</option>
      </select>
    </label>
    <div class="layer-mini-meta">Kp ${fmtNum(payload.latestKp, 1)} · ${kpLabel(payload.latestKp)} · Updated ${timeAgo(payload.observedAt)}</div>
  `;

  node.addEventListener("change", (event) => {
    const select = event.target.closest("[data-action]");
    if (!select) return;
    if (select.dataset.action === "hemisphere") {
      onChange({ hemisphere: select.value });
      return;
    }
    if (select.dataset.action === "intensity") {
      onChange({ intensityMode: select.value });
    }
  });
  return node;
}

function buildOval(kp, hemisphere) {
  const hemisphereSign = hemisphere === "north" ? 1 : -1;
  const auroraLat = (73 - Math.min(9, Math.max(0, kp)) * 3.4) * hemisphereSign;
  const points = [];
  for (let lng = -180; lng <= 180; lng += 12) {
    points.push([auroraLat, lng]);
  }
  return points;
}

function createRingPoints(kp, hemisphere) {
  const hemisphereSign = hemisphere === "north" ? 1 : -1;
  const auroraLat = (73 - Math.min(9, Math.max(0, kp)) * 3.4) * hemisphereSign;
  const points = [];
  for (let lng = -180; lng < 180; lng += 20) {
    points.push({
      lat: auroraLat + (Math.sin((lng / 180) * Math.PI) * 1.2 * hemisphereSign),
      lng,
      pointAltitude: 0.1,
      pointColor: kpScale(kp),
      pointRadius: 0.16 + (kp / 20),
    });
  }
  return points;
}

export const layerDefinition = {
  id: "spaceweather",
  kind: "aurora",
  pollMs: 120_000,
  ttlMs: 30_000,
  source: createSourceAdapter({
    key: "liveearth:spaceweather",
    staleAfterMs: 8 * 60 * 1000,
    expireAfterMs: 12 * 60 * 60 * 1000,
    async fetch({ config, fetchJson, signal }) {
      return fetchJson(`${config.getApiUrl("external-feed")}?type=spaceweather`, {
        retries: 1,
        signal,
        timeoutMs: 10_000,
      });
    },
    normalize(json) {
      const samples = (Array.isArray(json) ? json : [])
        .map((entry) => {
          const observedAt = entry.time_tag ? new Date(entry.time_tag).getTime() : NaN;
          const kp = Number(entry.kp_index ?? entry.kp);
          if (!Number.isFinite(observedAt) || !Number.isFinite(kp)) return null;
          return { kp, observedAt };
        })
        .filter(Boolean)
        .sort((left, right) => left.observedAt - right.observedAt);

      const latest = samples.at(-1) || { kp: 0, observedAt: Date.now() };
      const recent = samples.slice(-30);
      const averageKp = recent.length
        ? recent.reduce((sum, sample) => sum + sample.kp, 0) / recent.length
        : latest.kp;

      return {
        averageKp,
        latestKp: latest.kp,
        observedAt: latest.observedAt,
      };
    },
  }),
  onEnable({ state, context, runtime }) {
    state.hemisphere ??= "both";
    state.intensityMode ??= "true-scale";
    if (state.lastGoodData) {
      context.setLayerExtra(
        "spaceweather",
        buildAuroraControls(state, state.lastGoodData, async (changeSet) => {
          Object.assign(state, changeSet);
          await runtime.redraw("spaceweather");
        })
      );
    }
  },
  async applyData({ context, payload, runtime, state }) {
    const cinematicBoost = state.intensityMode === "cinematic" ? 1.4 : 1;
    const boostedKp = Math.min(9, payload.latestKp * cinematicBoost);
    const hemispheres = state.hemisphere === "both" ? ["north", "south"] : [state.hemisphere];
    const points = hemispheres.flatMap((hemisphere) => createRingPoints(boostedKp, hemisphere));
    const paths = hemispheres.map((hemisphere) => ({
      coords: buildOval(boostedKp, hemisphere),
      pathColor: kpScale(boostedKp),
      pathStroke: state.intensityMode === "cinematic" ? 2.2 : 1.6,
      pathDashLength: state.intensityMode === "cinematic" ? 0.26 : 0.15,
      pathDashGap: 0.05,
      pathDashAnimateTime: state.intensityMode === "cinematic" ? 1_800 : 2_600,
    }));

    context.renderRegistry.setPoints("spaceweather", points.map((point) => ({
      ...point,
      onPointHover() {
        context.globe.controls().autoRotate = false;
        context.showHover(
          "Auroral Oval",
          `Kp ${fmtNum(payload.latestKp, 1)} (${kpLabel(payload.latestKp)})`,
          `30m avg ${fmtNum(payload.averageKp, 1)} · ${state.intensityMode === "cinematic" ? "Cinematic mode" : "True scale"} · Updated ${timeAgo(payload.observedAt)}`
        );
      },
      onPointLeave() {
        context.globe.controls().autoRotate = true;
        context.hideHover();
      },
    })));
    context.renderRegistry.setPaths("spaceweather", paths);
    context.renderRegistry.setRings("spaceweather", hemispheres.map((hemisphere) => ({
      lat: hemisphere === "north" ? 90 : -90,
      lng: 0,
      ringColor: [kpScale(boostedKp), "transparent"],
      ringMaxRadius: (3 + boostedKp * 0.5) * (state.intensityMode === "cinematic" ? 1.2 : 1),
      ringPropagationSpeed: state.intensityMode === "cinematic" ? 0.72 : 0.55,
      ringRepeatPeriod: state.intensityMode === "cinematic" ? 3_200 : 4_200,
    })));
    context.setLayerExtra(
      "spaceweather",
      buildAuroraControls(state, payload, async (changeSet) => {
        Object.assign(state, changeSet);
        await runtime.redraw("spaceweather");
      })
    );
  },
  onDisable({ context }) {
    context.setLayerExtra("spaceweather", null);
    context.hideHover();
  },
};

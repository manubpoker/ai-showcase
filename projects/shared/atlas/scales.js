export const PALETTES = {
  viridis: d3.interpolateViridis,
  plasma: d3.interpolatePlasma,
  inferno: d3.interpolateInferno,
  magma: d3.interpolateMagma,
  cividis: d3.interpolateCividis,
  turbo: d3.interpolateTurbo,
  ylgnbu: d3.interpolateYlGnBu,
  bugn: d3.interpolateBuGn,
  ylorrd: d3.interpolateYlOrRd,
};

const scaleCache = new WeakMap();
const preparedOverlayCache = new WeakMap();

export function getInterpolator(name) {
  return PALETTES[name] || d3.interpolateViridis;
}

export function buildScale(overlay) {
  const cached = scaleCache.get(overlay);
  if (cached) return cached;

  const { min, max } = overlay.range;
  let scale;
  if (overlay.scaleTransform === "log") {
    scale = d3.scaleLog().domain([Math.max(min, 1), max]).range([0, 1]).clamp(true);
  } else if (overlay.scaleTransform === "sqrt") {
    scale = d3.scalePow().exponent(0.5).domain([min, max]).range([0, 1]).clamp(true);
  } else {
    scale = d3.scaleLinear().domain([min, max]).range([0, 1]).clamp(true);
  }

  scaleCache.set(overlay, scale);
  return scale;
}

export function colorFor(overlay, value) {
  if (value == null) return "rgba(40,60,70,0.35)";
  return getInterpolator(overlay.palette)(buildScale(overlay)(value));
}

export function elevationFor(overlay, value) {
  if (value == null) return 0.005;
  return 0.005 + buildScale(overlay)(value) * 0.06;
}

export function buildLegendGradient(overlay, stopCount = 12) {
  const interpolator = getInterpolator(overlay.palette);
  const stops = Array.from({ length: stopCount }, (_, index) => {
    const t = index / (stopCount - 1);
    return `${interpolator(t)} ${(t * 100).toFixed(0)}%`;
  });
  return `linear-gradient(90deg, ${stops.join(", ")})`;
}

export function prepareCountryOverlay(overlay) {
  const cached = preparedOverlayCache.get(overlay);
  if (cached) return cached;

  const prepared = {
    colorByIso: new Map(),
    elevationByIso: new Map(),
    valueByIso: new Map(),
  };

  const entries = Object.entries(overlay.data || {});
  for (const [iso3, entry] of entries) {
    prepared.valueByIso.set(iso3, entry);
    prepared.colorByIso.set(iso3, colorFor(overlay, entry?.value));
    prepared.elevationByIso.set(iso3, elevationFor(overlay, entry?.value));
  }

  preparedOverlayCache.set(overlay, prepared);
  return prepared;
}

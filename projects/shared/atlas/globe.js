export function createAtlasGlobe(container, options = {}) {
  const {
    globeImageUrl,
    bumpImageUrl,
    backgroundImageUrl,
    atmosphereColor = "#3fc9ff",
    atmosphereAltitude = 0.22,
    polygonStrokeColor = "rgba(180,230,240,0.22)",
    polygonSideColor = "rgba(20,50,60,0.4)",
  } = options;

  const globe = Globe()(container)
    .globeImageUrl(globeImageUrl)
    .bumpImageUrl(bumpImageUrl)
    .backgroundImageUrl(backgroundImageUrl)
    .showAtmosphere(true)
    .atmosphereColor(atmosphereColor)
    .atmosphereAltitude(atmosphereAltitude)
    .showGraticules(true)
    .polygonStrokeColor(() => polygonStrokeColor)
    .polygonSideColor(() => polygonSideColor)
    .polygonLabel(() => "")
    .width(container.clientWidth)
    .height(container.clientHeight);

  globe.controls().autoRotate = true;
  globe.controls().autoRotateSpeed = 0.4;
  globe.controls().enableDamping = true;
  globe.controls().dampingFactor = 0.15;

  return globe;
}

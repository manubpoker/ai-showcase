const atlasJsonCache = new Map();

function cleanBasePath(basePath) {
  return basePath.replace(/\/+$/, "");
}

async function fetchJsonCached(url) {
  if (atlasJsonCache.has(url)) return atlasJsonCache.get(url);

  const pending = fetch(url).then(async (response) => {
    if (!response.ok) {
      throw new Error(`Failed to load ${url}: HTTP ${response.status}`);
    }
    return response.json();
  });

  atlasJsonCache.set(url, pending);
  try {
    return await pending;
  } catch (error) {
    atlasJsonCache.delete(url);
    throw error;
  }
}

export async function loadCountryGeometry(basePath = "./data", variant = "low") {
  const cleanBase = cleanBasePath(basePath);
  const suffix = variant === "default" ? "" : `-${variant}`;
  const primaryUrl = `${cleanBase}/countries${suffix}.geojson`;

  try {
    return await fetchJsonCached(primaryUrl);
  } catch (error) {
    if (variant === "default" || variant === "low") {
      return fetchJsonCached(`${cleanBase}/countries.geojson`);
    }
    throw error;
  }
}

export async function loadAtlasData(basePath = "./data") {
  const cleanBase = cleanBasePath(basePath);
  const [geojson, overlayData, countryDetails] = await Promise.all([
    loadCountryGeometry(cleanBase, "low"),
    fetchJsonCached(`${cleanBase}/overlays.json`),
    fetchJsonCached(`${cleanBase}/country-details.json`).catch(() => ({})),
  ]);

  return {
    countryDetails,
    geojson,
    overlayData,
  };
}

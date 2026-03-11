function trimTrailingSlash(value) {
  return value.replace(/\/+$/, "");
}

export function getRuntimeConfig() {
  return {
    apiBase: trimTrailingSlash(
      globalThis.__SHOWCASE_CONFIG?.apiBase ||
      globalThis.__LIVEEARTH_CONFIG?.apiBase ||
      "/api"
    ),
    faviconPath:
      globalThis.__SHOWCASE_CONFIG?.faviconPath ||
      "../shared/favicon.svg",
  };
}

export function getNamespacedApiBase(namespace = "liveearth") {
  return `${getRuntimeConfig().apiBase}/${namespace}`;
}

export function getApiUrl(pathname, namespace = "liveearth") {
  const cleanPath = pathname.replace(/^\/+/, "");
  return `${getNamespacedApiBase(namespace)}/${cleanPath}`;
}

function mergeSignals(...signals) {
  const activeSignals = signals.filter(Boolean);
  if (!activeSignals.length) return undefined;
  if (activeSignals.length === 1) return activeSignals[0];

  const controller = new AbortController();
  const abort = () => controller.abort();
  activeSignals.forEach((signal) => {
    if (signal.aborted) abort();
    else signal.addEventListener("abort", abort, { once: true });
  });
  return controller.signal;
}

function waitWithSignal(delayMs, signal) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(resolve, delayMs);
    if (!signal) return;
    signal.addEventListener("abort", () => {
      clearTimeout(timeout);
      reject(signal.reason || new DOMException("Aborted", "AbortError"));
    }, { once: true });
  });
}

export async function fetchWithPolicy(url, options = {}) {
  const {
    method = "GET",
    headers,
    body,
    signal,
    timeoutMs = 10_000,
    retries = 1,
    retryDelayMs = 400,
    retryBackoff = 2,
    parse = "json",
  } = options;

  let attempt = 0;
  let currentDelay = retryDelayMs;
  let lastError;

  while (attempt <= retries) {
    const timeoutController = new AbortController();
    const timeout = setTimeout(() => timeoutController.abort(), timeoutMs);

    try {
      const response = await fetch(url, {
        method,
        headers,
        body,
        signal: mergeSignals(signal, timeoutController.signal),
      });
      clearTimeout(timeout);

      if (!response.ok) {
        const error = new Error(`HTTP ${response.status}`);
        error.status = response.status;
        throw error;
      }

      if (parse === "text") return response.text();
      if (parse === "response") return response;
      return response.json();
    } catch (error) {
      clearTimeout(timeout);
      lastError = error;
      if (attempt >= retries || (error?.name === "AbortError" && signal?.aborted)) {
        throw error;
      }
      await waitWithSignal(currentDelay, signal);
      currentDelay *= retryBackoff;
      attempt += 1;
    }
  }

  throw lastError;
}

const DEFAULT_TIMEOUT_MS = 20000;

export async function fetchJson(url, init = {}, options = {}) {
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const label = options.label ?? url;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(`${label} timed out after ${timeoutMs}ms`), timeoutMs);

  try {
    const response = await fetch(url, {
      ...init,
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
        ...(init.headers || {})
      }
    });

    const text = await response.text();
    let payload = null;
    if (text) {
      try {
        payload = JSON.parse(text);
      } catch {
        payload = text;
      }
    }

    if (!response.ok) {
      const body = typeof payload === 'string' ? payload : JSON.stringify(payload);
      throw new Error(`${label} failed with ${response.status}: ${body?.slice(0, 500) || response.statusText}`);
    }

    return payload;
  } finally {
    clearTimeout(timeout);
  }
}

export function chunk(list, size) {
  if (!Array.isArray(list) || size <= 0) return [];
  const output = [];
  for (let i = 0; i < list.length; i += size) {
    output.push(list.slice(i, i + size));
  }
  return output;
}

export function queryString(params) {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null || value === '') continue;
    search.set(key, String(value));
  }
  return search.toString();
}

export function todayUtc() {
  return new Date().toISOString().slice(0, 10);
}

export function parseJsonEnv(value, fallback = {}) {
  if (!value) return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

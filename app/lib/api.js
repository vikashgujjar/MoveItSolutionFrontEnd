const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://admin.moveitsolution.com/api/v1";
const CACHE_TTL_MS = 30_000;

const successCache = new Map(); // path -> { value, expiresAt }
const inFlight = new Map(); // path -> Promise, cleared once settled

async function fetchOnce(path, fetchOptions) {
  const res = await fetch(`${API_BASE_URL}${path}`, fetchOptions);
  if (!res.ok) return null;
  const json = await res.json();
  return json.data ?? null;
}

async function fetchWithRetry(path, cache, fetchOptions) {
  const cached = cache.get(path);
  if (cached && cached.expiresAt > Date.now()) return cached.value;

  if (inFlight.has(path)) return inFlight.get(path);

  const promise = (async () => {
    let result = await fetchOnce(path, fetchOptions).catch(() => null);
    if (result === null) {
      // one retry on failure
      result = await fetchOnce(path, fetchOptions).catch(() => null);
    }
    if (result !== null) {
      cache.set(path, { value: result, expiresAt: Date.now() + CACHE_TTL_MS });
    }
    return result;
  })();

  inFlight.set(path, promise);
  try {
    return await promise;
  } finally {
    inFlight.delete(path);
  }
}

/**
 * Fetches a public API path from the BROWSER. Never throws — callers get
 * `null` on any failure so they can fall back to their hardcoded defaults.
 * Successful responses are cached briefly so several components requesting
 * the same path at once (or in quick succession) only hit the network once;
 * failures are never cached, so a temporarily-down API is retried on the next
 * call instead of getting stuck for the rest of the browsing session.
 *
 * Uses `cache: "no-store"` since this always runs client-side post-hydration
 * — always wants the freshest data, never Next's build-time fetch cache.
 */
export async function apiFetch(path) {
  return fetchWithRetry(path, successCache, { cache: "no-store" });
}

const staticCache = new Map();

/**
 * Fetches a public API path at BUILD TIME (inside `generateStaticParams`,
 * `generateMetadata`, or a Server Component's own body during `next build`
 * under `output: "export"`). Deliberately omits `cache: "no-store"` — that
 * option marks a fetch as "dynamic" to Next.js, which is incompatible with
 * static export and causes the page to be silently dropped from the export
 * with no visible error. Letting `fetch` use its default (static-friendly)
 * caching here is required, not optional.
 */
export async function apiFetchStatic(path) {
  return fetchWithRetry(path, staticCache, undefined);
}

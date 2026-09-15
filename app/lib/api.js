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

async function fetchWithRetry(path, fetchOptions) {
  let result = await fetchOnce(path, fetchOptions).catch(() => null);
  if (result === null) {
    // one retry on failure
    result = await fetchOnce(path, fetchOptions).catch(() => null);
  }
  return result;
}

/**
 * Fetches a public API path from the BROWSER. Never throws — callers get
 * `null` on any failure so they can fall back to their hardcoded defaults.
 * Successful responses are cached briefly in memory so several components
 * requesting the same path at once (or in quick succession) only hit the
 * network once; failures are never cached, so a temporarily-down API is
 * retried on the next call instead of getting stuck for the rest of the
 * browsing session.
 *
 * This cache lives in the browser tab's own JS heap — it has no bearing on
 * what any other visitor sees, and a full page reload clears it. A 30s TTL
 * is short enough that CMS edits are visible on the next natural reload
 * without meaningfully increasing network traffic.
 */
export async function apiFetch(path) {
  const cached = successCache.get(path);
  if (cached && cached.expiresAt > Date.now()) return cached.value;

  if (inFlight.has(path)) return inFlight.get(path);

  const promise = (async () => {
    const result = await fetchWithRetry(path, { cache: "no-store" });
    if (result !== null) {
      successCache.set(path, { value: result, expiresAt: Date.now() + CACHE_TTL_MS });
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
 * Fetches a public API path from a SERVER COMPONENT (or `generateMetadata`)
 * during actual request handling on the running Next.js server — NOT at
 * `next build` time. Deliberately uncached at every level:
 *
 *   - No in-memory cache/dedupe here (unlike apiFetch above) — this module
 *     is loaded once per server process and shared across every visitor's
 *     request, so any cache here would leak stale CMS content to everyone,
 *     for as long as the TTL, until the process restarts.
 *   - `cache: "no-store"` on the underlying fetch also tells Next.js this
 *     route performs dynamic data access, which is what makes Next.js
 *     render the page fresh on every request (SSR) instead of trying to
 *     optimize it into a static shell at build time.
 *
 * Use this for any CMS-driven Server Component — e.g. the blog detail page
 * — so new/edited content is live immediately with no rebuild required.
 */
export async function apiFetchServer(path) {
  return fetchWithRetry(path, { cache: "no-store" });
}

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
 * Fetches a public API path at BUILD TIME (inside `generateStaticParams`,
 * `generateMetadata`, or a Server Component's own body during `next build`
 * under `output: "export"`). Deliberately omits `cache: "no-store"` — that
 * option marks a fetch as "dynamic" to Next.js, which is incompatible with
 * static export and causes the page to be dropped from the export (or, with
 * `dynamic = "force-dynamic"` also set, fails the whole build outright with
 * "couldn't be exported... requires all pages be renderable statically").
 * Letting `fetch` use its default (static-friendly) caching here is
 * required, not optional, under this output mode.
 */
export async function apiFetchStatic(path) {
  return fetchWithRetry(path, undefined);
}

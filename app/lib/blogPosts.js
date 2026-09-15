import { apiFetch, apiFetchServer } from "./api";

// Client-side (browser) use — e.g. the /blog listing and sidebar widgets
// that fetch after hydration. Benefits from apiFetch's short in-memory cache.
export function getBlogPosts() {
  return apiFetch("/blog-posts");
}

export function getBlogPost(slug) {
  return apiFetch(`/blog-posts/${slug}`);
}

// Server-side use — the blog detail page's Server Component body and
// generateMetadata, evaluated on the live Next.js server per request, never
// at build time. Always fetches fresh so new/edited posts need no rebuild.
export function getBlogPostServer(slug) {
  return apiFetchServer(`/blog-posts/${slug}`);
}

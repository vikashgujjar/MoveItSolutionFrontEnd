import { apiFetch, apiFetchStatic } from "./api";

// Client-side (browser) use — e.g. the /blog listing and sidebar widgets
// that fetch after hydration. Benefits from apiFetch's short in-memory cache.
export function getBlogPosts() {
  return apiFetch("/blog-posts");
}

export function getBlogPost(slug) {
  return apiFetch(`/blog-posts/${slug}`);
}

// Build-time variants for generateStaticParams/generateMetadata/Server
// Component bodies — see apiFetchStatic for why these can't use apiFetch.
export function getBlogPostsStatic() {
  return apiFetchStatic("/blog-posts");
}

export function getBlogPostStatic(slug) {
  return apiFetchStatic(`/blog-posts/${slug}`);
}

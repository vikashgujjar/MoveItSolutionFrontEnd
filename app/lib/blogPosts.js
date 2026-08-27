import { apiFetch, apiFetchStatic } from "./api";

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

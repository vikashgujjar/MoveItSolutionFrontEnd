import { apiFetch } from "./api";

export function getLocation(slug) {
  return apiFetch(`/locations/${slug}`);
}

export function getLocations() {
  return apiFetch("/locations");
}

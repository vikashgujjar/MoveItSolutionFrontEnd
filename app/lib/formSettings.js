import { apiFetch } from "./api";

export function getFormSettings(slug) {
  return apiFetch(`/form-settings/${slug}`);
}

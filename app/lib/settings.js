import { apiFetch } from "./api";

export function getSettings() {
  return apiFetch("/settings");
}

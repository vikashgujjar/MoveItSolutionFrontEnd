import { apiFetch } from "./api";

export function getTeamMembers() {
  return apiFetch("/team-members");
}

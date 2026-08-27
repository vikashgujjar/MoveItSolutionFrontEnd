import { apiFetch } from "./api";

export function getPageContact(slug) {
  return apiFetch(`/page-contact-settings/${slug}`);
}

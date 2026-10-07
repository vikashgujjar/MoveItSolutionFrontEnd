const STORAGE_KEY = "mis_ec_lead";

/**
 * Google Enhanced Conversions hand-off between the lead form and /thank-you.
 *
 * The site is a static export and the form redirects with a full page load
 * (window.location.href), so in-memory state doesn't survive the trip. The
 * submitted email/phone are parked in sessionStorage (tab-scoped, never sent
 * anywhere, never put in the URL) and consumed exactly once by the Thank You
 * page — a refresh finds nothing, so the conversion event can't double-fire.
 */
export function stashConversionData({ email, phone }) {
  try {
    const data = {};
    if (email && email.trim()) data.email = email.trim();
    // "+91" alone is the PhoneInput default, not a real number.
    if (phone && phone.replace(/\D/g, "").length > 4) data.phone = phone.trim();
    if (!data.email && !data.phone) return;
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Storage unavailable (private mode, blocked) — skip tracking, never block the lead.
  }
}

export function consumeConversionData() {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    window.sessionStorage.removeItem(STORAGE_KEY);
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

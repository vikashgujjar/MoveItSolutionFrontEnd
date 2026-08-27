const LOCATION_PREFIX = "packers-and-movers-in-";

/**
 * Maps a Next.js pathname to the page_slug used by the admin CMS
 * (page_contact_settings / form_settings / locations all key off this).
 */
export function pathnameToSlug(pathname) {
  const clean = (pathname || "/").replace(/^\/+|\/+$/g, "");
  if (!clean) return "home";

  const firstSegment = clean.split("/")[0];
  if (firstSegment.startsWith(LOCATION_PREFIX)) {
    return firstSegment.slice(LOCATION_PREFIX.length);
  }
  return firstSegment;
}

/**
 * aria-current value for a nav link: "page" on an exact match, "true" when
 * the current page sits inside the link's section (e.g. /services/imaging
 * under /services). Links with a query or hash never mark a section.
 */
export function navCurrent(href: string | null, currentPath?: string): 'page' | 'true' | undefined {
  if (href === null || currentPath === undefined) return undefined
  if (href === currentPath) return 'page'
  if (href !== '/' && !/[?#]/.test(href) && currentPath.startsWith(`${href}/`)) return 'true'
  return undefined
}

/** True when any of the hrefs is the page or section being viewed. */
export function navGroupCurrent(hrefs: (string | null)[], currentPath?: string): boolean {
  return hrefs.some((href) => navCurrent(href, currentPath) !== undefined)
}

/**
 * aria-current for a top-level main-nav link. When a dropdown group holds the
 * current page (e.g. /services/pharmacy), a section match on another link
 * (/services) yields to it, so only one top-level item is marked.
 */
export function topNavCurrent(
  href: string | null,
  currentPath: string | undefined,
  groupHoldsPage: boolean,
): 'page' | 'true' | undefined {
  const value = navCurrent(href, currentPath)
  return groupHoldsPage && value === 'true' ? undefined : value
}

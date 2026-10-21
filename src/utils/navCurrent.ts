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

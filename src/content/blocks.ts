import type { LinkTarget } from './links'
import type { HoursRow } from './site'

/**
 * Structured body copy for interior pages. Keeping copy as data (rather
 * than JSX) keeps every page's wording in src/content for review.
 */
export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | {
      type: 'list'
      items: string[]
      /** Short label above the list, e.g. "Subacute services include:". */
      label?: string
      /** Two columns on wide screens; use for long lists of short items. */
      columns?: 1 | 2
    }
  /** A paragraph that ends in an inline link, e.g. "...find one here." */
  | { type: 'linkParagraph'; text: string; linkLabel: string; link: LinkTarget }
  /** Label and value rows (phones, emails, hours), rendered with HoursList. */
  | { type: 'details'; rows: HoursRow[] }

/** One numbered step in a StepList. */
export interface Step {
  title: string
  text: string
}

/** One row in a ruled list of links (LinkRowList). */
export interface LinkRowItem {
  title: string
  description?: string
  link: LinkTarget
}

export interface ContentSectionData {
  /** Used for the heading id and in-page anchors. */
  id: string
  heading: string
  blocks: ContentBlock[]
}

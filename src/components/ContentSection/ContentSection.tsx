import type { ReactNode } from 'react'
import type { ContentSectionData } from '../../content/blocks'
import { cx } from '../../utils/cx'
import shared from '../Editorial/editorial.module.css'
import { RichText } from '../RichText/RichText'
import styles from './ContentSection.module.css'

interface ContentSectionProps {
  id: string
  heading: string
  /** Small tabular index above the heading, e.g. "01". */
  number?: string
  children: ReactNode
}

/**
 * One ruled row: heading in columns 1–4, body in 5–12. Follows the
 * mission and vision rows on the About page. Place inside a Container.
 */
export function ContentSection({ id, heading, number, children }: ContentSectionProps) {
  const headingId = `${id}-heading`

  return (
    <section id={id} className={cx(shared.grid, styles.row)} aria-labelledby={headingId}>
      <div className={styles.head}>
        {number && (
          <span className={cx(shared.number, styles.number)} aria-hidden="true">
            {number}
          </span>
        )}
        <h2 id={headingId} className={styles.heading}>
          {heading}
        </h2>
      </div>
      <div className={styles.body}>{children}</div>
    </section>
  )
}

interface ContentStackProps {
  children: ReactNode
  className?: string
}

/** Groups ContentSection rows: navy rule on top, light rule below the last. */
export function ContentStack({ children, className }: ContentStackProps) {
  return <div className={cx(styles.stack, className)}>{children}</div>
}

interface ContentSectionsProps {
  sections: ContentSectionData[]
  /** Number the rows 01, 02, … */
  numbered?: boolean
  /** Extra ContentSection rows appended to the same stack. */
  children?: ReactNode
  className?: string
}

/** A stack of ContentSection rows rendered from content data. */
export function ContentSections({ sections, numbered = true, children, className }: ContentSectionsProps) {
  return (
    <ContentStack className={className}>
      {sections.map((section, index) => (
        <ContentSection
          key={section.id}
          id={section.id}
          heading={section.heading}
          number={numbered ? String(index + 1).padStart(2, '0') : undefined}
        >
          <RichText blocks={section.blocks} />
        </ContentSection>
      ))}
      {children}
    </ContentStack>
  )
}

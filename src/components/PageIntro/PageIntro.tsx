import type { ReactNode } from 'react'
import { cx } from '../../utils/cx'
import { Container } from '../Container/Container'
import shared from '../Editorial/editorial.module.css'
import styles from './PageIntro.module.css'

interface PageIntroProps {
  headingId: string
  eyebrow: string
  heading: string
  /** "lg" for section landing pages, "md" for detail pages. */
  size?: 'lg' | 'md'
  /** Ruled fact lines in columns 1–5, as on the About hero. */
  facts?: string[]
  lead?: ReactNode
  /** Actions or notes under the lead. */
  children?: ReactNode
}

/** Interior page header: eyebrow, H1, then facts and lead on the 12-column grid. */
export function PageIntro({
  headingId,
  eyebrow,
  heading,
  size = 'lg',
  facts,
  lead,
  children,
}: PageIntroProps) {
  const hasFacts = facts !== undefined && facts.length > 0

  return (
    <header className={styles.intro}>
      <Container>
        <p className={shared.eyebrow}>{eyebrow}</p>
        <h1 id={headingId} className={cx(styles.heading, styles[size])}>
          {heading}
        </h1>
        {(hasFacts || lead || children) && (
          <div className={cx(shared.grid, styles.row)}>
            {hasFacts && (
              <ul className={styles.facts}>
                {facts.map((fact) => (
                  <li key={fact} className={styles.fact}>
                    {fact}
                  </li>
                ))}
              </ul>
            )}
            <div className={cx(styles.main, !hasFacts && styles.mainSolo)}>
              {lead && <div className={styles.lead}>{lead}</div>}
              {children}
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}

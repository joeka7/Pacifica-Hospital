import type { SectionRail as SectionRailData } from '../../content/site'
import { cx } from '../../utils/cx'
import shared from './editorial.module.css'
import styles from './SectionRail.module.css'

interface SectionRailProps {
  rail: SectionRailData
  className?: string
}

/** Label rail in columns 1–3. Decorative: the section's visible H2 carries the meaning. */
export function SectionRail({ rail, className }: SectionRailProps) {
  return (
    <div className={cx(styles.rail, className)} aria-hidden="true">
      <p className={shared.eyebrow}>{rail.label}</p>
      <p className={shared.number}>{rail.number}</p>
    </div>
  )
}

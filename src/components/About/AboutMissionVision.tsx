import { missionVision } from '../../content/about'
import { cx } from '../../utils/cx'
import { Container } from '../Container/Container'
import { SectionRail } from '../Editorial/SectionRail'
import shared from '../Editorial/editorial.module.css'
import styles from './AboutMissionVision.module.css'

export function AboutMissionVision() {
  return (
    <section className={shared.section} aria-labelledby="about-mission-heading">
      <Container>
        <div className={shared.grid}>
          <SectionRail rail={missionVision.rail} />
          <h2 id="about-mission-heading" className={cx(shared.headingXl, styles.heading)}>
            {missionVision.heading}
          </h2>
        </div>
        <div className={styles.statements}>
          {missionVision.items.map((item) => (
            <div key={item.label} className={cx(shared.grid, styles.row)}>
              <div className={styles.rowHead}>
                <span className={cx(shared.number, styles.number)} aria-hidden="true">
                  {item.number}
                </span>
                <h3 className={styles.label}>{item.label}</h3>
              </div>
              <div className={styles.rowBody}>
                <p className={styles.statement}>{item.statement}</p>
                <p className={cx(shared.body, styles.support)}>{item.support}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

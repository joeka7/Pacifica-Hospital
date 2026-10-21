import { aboutApproach } from '../../content/about'
import { cx } from '../../utils/cx'
import { Container } from '../Container/Container'
import shared from '../Editorial/editorial.module.css'
import styles from './AboutApproach.module.css'

export function AboutApproach() {
  return (
    <section className={shared.section} aria-labelledby="about-approach-heading">
      <Container className={shared.grid}>
        <div className={styles.intro}>
          <p className={shared.eyebrow}>{aboutApproach.eyebrow}</p>
          <h2 id="about-approach-heading" className={shared.headingLg}>
            {aboutApproach.heading}
          </h2>
          <p className={cx(shared.body, styles.body)}>{aboutApproach.intro}</p>
        </div>
        <ol className={styles.list}>
          {aboutApproach.items.map((item) => (
            <li key={item.title} className={styles.item}>
              <span className={cx(shared.number, styles.number)} aria-hidden="true">
                {item.number}
              </span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={cx(shared.body, styles.text)}>{item.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

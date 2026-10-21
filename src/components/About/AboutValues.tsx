import { aboutValues } from '../../content/about'
import { cx } from '../../utils/cx'
import { Container } from '../Container/Container'
import shared from '../Editorial/editorial.module.css'
import styles from './AboutValues.module.css'

export function AboutValues() {
  return (
    <section className={shared.section} aria-labelledby="about-values-heading">
      <Container>
        <div className={cx(shared.grid, styles.header)}>
          <h2 id="about-values-heading" className={cx(shared.headingLg, styles.heading)}>
            {aboutValues.heading}
          </h2>
          <p className={cx(shared.body, styles.intro)}>{aboutValues.intro}</p>
        </div>
        <ul className={styles.list}>
          {aboutValues.items.map((value) => (
            <li key={value.title} className={cx(shared.grid, styles.item)}>
              <span className={cx(shared.number, styles.number)} aria-hidden="true">
                {value.number}
              </span>
              <h3 className={styles.title}>{value.title}</h3>
              <p className={cx(shared.body, styles.text)}>{value.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

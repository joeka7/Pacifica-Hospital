import { aboutHero } from '../../content/about'
import { images } from '../../content/images'
import { cx } from '../../utils/cx'
import { Container } from '../Container/Container'
import { ResponsiveImage } from '../ResponsiveImage/ResponsiveImage'
import shared from '../Editorial/editorial.module.css'
import styles from './AboutHero.module.css'

export function AboutHero() {
  return (
    <section className={styles.hero} aria-labelledby="about-heading">
      <Container>
        <p className={shared.eyebrow}>{aboutHero.eyebrow}</p>
        <h1 id="about-heading" className={styles.heading}>
          {aboutHero.heading}
        </h1>
        <div className={cx(shared.grid, styles.row)}>
          <ul className={styles.facts}>
            {aboutHero.facts.map((fact) => (
              <li key={fact} className={styles.fact}>
                {fact}
              </li>
            ))}
          </ul>
          <p className={styles.lead}>{aboutHero.lead}</p>
        </div>
      </Container>
      <figure className={styles.figure}>
        <ResponsiveImage image={images.aboutCampusWide} priority className={styles.image} />
        <figcaption>
          <Container className={styles.caption}>
            <span>{aboutHero.caption.name}</span>
            <span>{aboutHero.caption.address}</span>
          </Container>
        </figcaption>
      </figure>
    </section>
  )
}
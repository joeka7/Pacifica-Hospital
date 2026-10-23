import { aboutPeople } from '../../content/about'
import { images } from '../../content/images'
import { cx } from '../../utils/cx'
import { Container } from '../Container/Container'
import { ResponsiveImage } from '../ResponsiveImage/ResponsiveImage'
import { imageSizes } from '../ResponsiveImage/sizes'
import shared from '../Editorial/editorial.module.css'
import styles from './AboutPeople.module.css'

export function AboutPeople() {
  const [first, second] = aboutPeople.paragraphs

  return (
    <section className={shared.section} aria-labelledby="about-people-heading">
      <Container>
        <div className={cx(shared.grid, styles.top)}>
          <div className={styles.media}>
            <ResponsiveImage image={images.aboutCareTeam} sizes={imageSizes.aboutPeople} className={styles.image} />
          </div>
          <div className={styles.text}>
            <p className={shared.eyebrow}>{aboutPeople.eyebrow}</p>
            <h2 id="about-people-heading" className={styles.heading}>
              {aboutPeople.heading}
            </h2>
          </div>
        </div>
        <div className={cx(shared.grid, shared.body, styles.paragraphs)}>
          <p className={styles.first}>{first}</p>
          <p className={styles.second}>{second}</p>
        </div>
        <dl className={styles.details}>
          {aboutPeople.details.map((detail) => (
            <div key={detail.term} className={styles.detail}>
              <dt className={styles.term}>{detail.term}</dt>
              <dd className={styles.description}>{detail.description}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}

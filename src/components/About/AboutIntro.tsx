import { aboutIntro } from '../../content/about'
import { images } from '../../content/images'
import { cx } from '../../utils/cx'
import { Container } from '../Container/Container'
import { ResponsiveImage } from '../ResponsiveImage/ResponsiveImage'
import { SectionRail } from '../Editorial/SectionRail'
import shared from '../Editorial/editorial.module.css'
import styles from './AboutIntro.module.css'

export function AboutIntro() {
  return (
    <section className={shared.section} aria-labelledby="about-intro-heading">
      <Container>
        <div className={shared.grid}>
          <SectionRail rail={aboutIntro.rail} />
          <div className={styles.body}>
            <h2 id="about-intro-heading" className={shared.headingXl}>
              {aboutIntro.heading}
            </h2>
            <div className={cx(shared.body, styles.paragraphs)}>
              {aboutIntro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
        <div className={cx(shared.grid, styles.split)}>
          <div className={styles.media}>
            <ResponsiveImage image={images.aboutCorridor} className={styles.image} />
          </div>
          <p className={styles.statement}>{aboutIntro.statement}</p>
        </div>
      </Container>
    </section>
  )
}

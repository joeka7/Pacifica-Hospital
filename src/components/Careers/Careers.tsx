import { careers } from '../../content/careers'
import { images } from '../../content/images'
import { Button } from '../Button/Button'
import { ResponsiveImage } from '../ResponsiveImage/ResponsiveImage'
import { imageSizes } from '../ResponsiveImage/sizes'
import styles from './Careers.module.css'

export function Careers() {
  return (
    <section className={styles.section} aria-labelledby="careers-heading">
      <div className={styles.media}>
        <ResponsiveImage image={images.careers} sizes={imageSizes.careersBand} className={styles.image} />
      </div>
      <div className={styles.panel}>
        <p className={styles.eyebrow}>{careers.eyebrow}</p>
        <h2 id="careers-heading" className={styles.heading}>
          {careers.heading}
        </h2>
        <p className={styles.body}>{careers.body}</p>
        <p className={styles.benefits}>{careers.benefits}</p>
        <Button
          href={careers.action.link.href}
          variant="inverse"
          arrow
          className={styles.button}
        >
          {careers.action.label}
        </Button>
      </div>
    </section>
  )
}

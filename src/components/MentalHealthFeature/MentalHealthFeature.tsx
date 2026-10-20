import { images } from '../../content/images'
import { mentalHealthFeature } from '../../content/services'
import { Button } from '../Button/Button'
import { Container } from '../Container/Container'
import { ResponsiveImage } from '../ResponsiveImage/ResponsiveImage'
import styles from './MentalHealthFeature.module.css'

export function MentalHealthFeature() {
  return (
    <section className={styles.band} aria-labelledby="mental-health-heading">
      <Container className={styles.inner}>
        <ResponsiveImage image={images.mentalHealth} className={styles.image} />
        <div className={styles.text}>
          <p className={styles.eyebrow}>{mentalHealthFeature.eyebrow}</p>
          <h2 id="mental-health-heading" className={styles.heading}>
            {mentalHealthFeature.heading}
          </h2>
          <p className={styles.body}>{mentalHealthFeature.body}</p>
          <ul className={styles.list}>
            {mentalHealthFeature.points.map((point) => (
              <li key={point} className={styles.item}>
                {point}
              </li>
            ))}
          </ul>
          <Button
            href={mentalHealthFeature.action.link.href}
            variant="primary"
            className={styles.button}
          >
            {mentalHealthFeature.action.label}
          </Button>
        </div>
      </Container>
    </section>
  )
}

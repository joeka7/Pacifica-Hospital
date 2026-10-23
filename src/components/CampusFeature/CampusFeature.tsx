import { images } from '../../content/images'
import { campus } from '../../content/site'
import { Container } from '../Container/Container'
import { ResponsiveImage } from '../ResponsiveImage/ResponsiveImage'
import { imageSizes } from '../ResponsiveImage/sizes'
import { TextLink } from '../TextLink/TextLink'
import styles from './CampusFeature.module.css'

export function CampusFeature() {
  return (
    <section className={styles.section} aria-label={campus.label}>
      <ResponsiveImage image={images.campus} sizes={imageSizes.campus} className={styles.image} />
      <Container className={styles.overlay}>
        <div className={styles.panel}>
          <p className={styles.title}>{campus.title}</p>
          <p className={styles.text}>
            {campus.text}{' '}
            <TextLink href={campus.directions.link.href}>{campus.directions.label}</TextLink>
          </p>
        </div>
      </Container>
    </section>
  )
}

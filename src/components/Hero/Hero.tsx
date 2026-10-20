import { images } from '../../content/images'
import { hero } from '../../content/site'
import { Button } from '../Button/Button'
import { Container } from '../Container/Container'
import { ResponsiveImage } from '../ResponsiveImage/ResponsiveImage'
import { EmergencySign } from './EmergencySign'
import { FactsLine } from './FactsLine'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <Container>
        <FactsLine items={hero.facts} />
        <h1 id="hero-heading" className={styles.heading}>
          {hero.heading}
        </h1>
        <div className={styles.row}>
          <div className={styles.media}>
            <ResponsiveImage image={images.hero} priority className={styles.image} />
          </div>
          <div className={styles.text}>
            <p className={styles.lead}>{hero.lead}</p>
            <div className={styles.buttons}>
              <Button href={hero.primaryAction.link.href} variant="primary">
                {hero.primaryAction.label}
              </Button>
              <Button href={hero.secondaryAction.link.href} variant="secondary">
                {hero.secondaryAction.label}
              </Button>
            </div>
            <EmergencySign />
          </div>
        </div>
      </Container>
    </section>
  )
}

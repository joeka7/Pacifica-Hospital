import { statement } from '../../content/site'
import { ArrowLink } from '../ArrowLink/ArrowLink'
import { Container } from '../Container/Container'
import { HeartValues } from './HeartValues'
import styles from './Statement.module.css'

export function Statement() {
  return (
    <section className={styles.section} aria-labelledby="statement-heading">
      <Container className={styles.inner}>
        <div className={styles.main}>
          <h2 id="statement-heading" className={styles.heading}>
            {statement.heading}
          </h2>
          <p className={styles.body}>{statement.body}</p>
          <ArrowLink href={statement.link.link.href} className={styles.link}>
            {statement.link.label}
          </ArrowLink>
        </div>
        <HeartValues className={styles.values} />
      </Container>
    </section>
  )
}

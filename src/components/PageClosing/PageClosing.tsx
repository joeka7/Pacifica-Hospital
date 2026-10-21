import type { ContactItem, LabeledLink } from '../../content/site'
import { cx } from '../../utils/cx'
import { Button } from '../Button/Button'
import { Container } from '../Container/Container'
import shared from '../Editorial/editorial.module.css'
import { PhoneLink } from '../PhoneLink/PhoneLink'
import styles from './PageClosing.module.css'

export interface PageClosingProps {
  /** Unique id for the heading, used by aria-labelledby. */
  headingId: string
  heading: string
  body: string
  primaryAction: LabeledLink
  secondaryAction?: LabeledLink
  contacts: ContactItem[]
}

/** Closing statement with actions and a contact grid; the About page set the pattern. */
export function PageClosing({
  headingId,
  heading,
  body,
  primaryAction,
  secondaryAction,
  contacts,
}: PageClosingProps) {
  return (
    <section className={styles.section} aria-labelledby={headingId}>
      <Container>
        <h2 id={headingId} className={styles.heading}>
          {heading}
        </h2>
        <div className={cx(shared.grid, styles.row)}>
          <div className={styles.main}>
            <p className={styles.body}>{body}</p>
            <div className={styles.buttons}>
              <Button href={primaryAction.link.href} variant="primary">
                {primaryAction.label}
              </Button>
              {secondaryAction && (
                <Button href={secondaryAction.link.href} variant="secondary">
                  {secondaryAction.label}
                </Button>
              )}
            </div>
          </div>
          <dl className={styles.contacts}>
            {contacts.map((item) => (
              <div
                key={item.label}
                className={cx(styles.contact, item.tone === 'emergency' && styles.emergency)}
              >
                <dt className={styles.label}>{item.label}</dt>
                <dd className={styles.value}>
                  {'phone' in item ? (
                    <PhoneLink phone={item.phone} className={styles.phone} />
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}

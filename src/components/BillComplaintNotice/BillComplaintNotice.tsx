import { billComplaintProgram } from '../../content/patients'
import { cx } from '../../utils/cx'
import { Container } from '../Container/Container'
import shared from '../Editorial/editorial.module.css'
import { TextLink } from '../TextLink/TextLink'
import styles from './BillComplaintNotice.module.css'

/** California Hospital Bill Complaint Program notice; required on billing pages. */
export function BillComplaintNotice() {
  const notice = billComplaintProgram

  return (
    <section className={styles.band} aria-labelledby="bill-complaint-heading">
      <Container>
        <div className={cx(shared.grid, styles.inner)}>
          <h2 id="bill-complaint-heading" className={styles.heading}>
            {notice.heading}
          </h2>
          <div className={styles.body}>
            <p>{notice.body}</p>
            <p>
              {notice.linkBefore} <TextLink href={notice.link.href}>{notice.linkLabel}</TextLink>{' '}
              {notice.linkAfter}
            </p>
            <p className={styles.citation}>{notice.citation}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

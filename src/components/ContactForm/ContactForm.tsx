import { contactForm } from '../../content/contact'
import { cx } from '../../utils/cx'
import buttonStyles from '../Button/Button.module.css'
import { PhoneLink } from '../PhoneLink/PhoneLink'
import styles from './ContactForm.module.css'

interface FieldProps {
  id: string
  label: string
  type?: 'text' | 'email' | 'tel'
  autoComplete: string
  required?: boolean
  hint?: string
}

function Field({ id, label, type = 'text', autoComplete, required = false, hint }: FieldProps) {
  const hintId = hint ? `${id}-hint` : undefined
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {required && <span className={styles.required}> ({contactForm.required})</span>}
        {hint && (
          <span id={hintId} className={styles.hint}>
            {' '}
            ({hint})
          </span>
        )}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required={required}
        aria-describedby={hintId}
        className={styles.input}
      />
    </div>
  )
}

/**
 * Message form with the same fields as the official contact form. It posts
 * to `contactForm.endpoint`; while that is null, the fields are disabled and
 * a note points to email and phone instead. No submission is simulated.
 */
export function ContactForm() {
  const { endpoint, fields } = contactForm
  const isAvailable = endpoint !== null

  return (
    <form
      action={endpoint ?? undefined}
      method="post"
      className={styles.form}
      aria-describedby={isAvailable ? undefined : 'contact-form-status'}
    >
      {!isAvailable && (
        <p id="contact-form-status" className={styles.status}>
          {contactForm.unavailableBefore}
          <a href={`mailto:${contactForm.unavailableEmail}`}>{contactForm.unavailableEmail}</a>
          {contactForm.unavailableMiddle}
          <PhoneLink phone={contactForm.unavailablePhone} />
          {contactForm.unavailableAfter}
        </p>
      )}
      <fieldset disabled={!isAvailable} className={styles.fieldset}>
        <legend className="visually-hidden">{contactForm.heading}</legend>
        <div className={styles.pair}>
          <Field id="first-name" label={fields.firstName} autoComplete="given-name" required />
          <Field id="last-name" label={fields.lastName} autoComplete="family-name" required />
        </div>
        <div className={styles.pair}>
          <Field id="email" label={fields.email} type="email" autoComplete="email" required />
          <Field id="phone" label={fields.phone} type="tel" autoComplete="tel" hint={fields.phoneHint} />
        </div>
        <div className={styles.field}>
          <label htmlFor="message" className={styles.label}>
            {fields.message}
            <span className={styles.required}> ({contactForm.required})</span>
          </label>
          <textarea id="message" name="message" rows={6} required className={styles.textarea} />
        </div>
        <div className={styles.actions}>
          <button
            type="submit"
            className={cx(buttonStyles.button, buttonStyles.lg, buttonStyles.primary, styles.submit)}
          >
            {contactForm.submit}
          </button>
        </div>
      </fieldset>
    </form>
  )
}

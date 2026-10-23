import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { contactForm } from '../../content/contact'
import { cx } from '../../utils/cx'
import buttonStyles from '../Button/Button.module.css'
import { PhoneLink } from '../PhoneLink/PhoneLink'
import styles from './ContactForm.module.css'

type FieldName = 'name' | 'email' | 'phone' | 'subject' | 'message'
type Values = Record<FieldName, string>
type Errors = Partial<Record<FieldName, string>>

const FIELD_ORDER: FieldName[] = ['name', 'email', 'phone', 'subject', 'message']
const EMPTY: Values = { name: '', email: '', phone: '', subject: '', message: '' }
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const UNAVAILABLE_ID = 'contact-form-unavailable'

function validate(values: Values): Errors {
  const { errors: text } = contactForm
  const errors: Errors = {}
  const email = values.email.trim()
  const phone = values.phone.trim()
  const phoneDigits = phone.replace(/\D/g, '').length

  if (!values.name.trim()) errors.name = text.name
  if (!email) errors.email = text.email
  else if (!EMAIL_PATTERN.test(email)) errors.email = text.emailFormat
  if (phone && (!/^[\d\s()+.-]+$/.test(phone) || phoneDigits < 10 || phoneDigits > 15)) {
    errors.phone = text.phoneFormat
  }
  if (!values.subject.trim()) errors.subject = text.subject
  if (!values.message.trim()) errors.message = text.message
  return errors
}

/** Email address and main line, shared by the unavailable note and the not-sent status. */
function ContactRoutes({ before, middle, after }: { before: string; middle: string; after: string }) {
  return (
    <>
      {before}
      <a href={`mailto:${contactForm.email}`}>{contactForm.email}</a>
      {middle}
      <PhoneLink phone={contactForm.phone} />
      {after}
    </>
  )
}

interface FieldShellProps {
  id: FieldName
  label: string
  optional?: boolean
  hint?: string
  error?: string
  children: (describedBy: string | undefined) => ReactNode
}

function FieldShell({ id, label, optional = false, hint, error, children }: FieldShellProps) {
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

  return (
    <div className={styles.field}>
      <div className={styles.labelRow}>
        <label htmlFor={id} className={styles.label}>
          {label}
          {optional && <span className={styles.optional}> ({contactForm.optional})</span>}
        </label>
        {hint && (
          <span id={hintId} className={styles.hint}>
            {hint}
          </span>
        )}
      </div>
      {error && (
        <p id={errorId} className={styles.error}>
          <span className="visually-hidden">{contactForm.errorPrefix} </span>
          {error}
        </p>
      )}
      {children(describedBy)}
    </div>
  )
}

interface FieldProps {
  id: FieldName
  label: string
  type?: 'text' | 'email' | 'tel'
  autoComplete: string
  optional?: boolean
  value: string
  error?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

function Field({ id, label, type = 'text', autoComplete, optional = false, value, error, onChange }: FieldProps) {
  return (
    <FieldShell id={id} label={label} optional={optional} error={error}>
      {(describedBy) => (
        <input
          id={id}
          name={id}
          type={type}
          autoComplete={autoComplete}
          required={!optional}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cx(styles.input, error && styles.invalid)}
          value={value}
          onChange={onChange}
        />
      )}
    </FieldShell>
  )
}

/**
 * Message form. With an approved `contactForm.endpoint` it posts there; while
 * that is null, a valid message is kept in the form and the visitor is told
 * plainly that it was not sent. No submission is simulated.
 */
export function ContactForm() {
  const { endpoint, fields } = contactForm
  const hasEndpoint = endpoint !== null
  const [values, setValues] = useState<Values>(EMPTY)
  const [attempted, setAttempted] = useState(false)
  const [notSent, setNotSent] = useState(false)
  // Errors appear after the first submit attempt, then update as fields change.
  const errors = attempted ? validate(values) : {}

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const found = validate(values)
    const firstInvalid = FIELD_ORDER.find((name) => found[name])
    setAttempted(true)

    if (firstInvalid) {
      event.preventDefault()
      setNotSent(false)
      document.getElementById(firstInvalid)?.focus()
      return
    }
    if (hasEndpoint) return

    event.preventDefault()
    setNotSent(true)
  }

  return (
    <form action={endpoint ?? undefined} method="post" noValidate className={styles.form} onSubmit={handleSubmit}>
      <fieldset className={styles.fieldset}>
        <legend className="visually-hidden">{contactForm.heading}</legend>
        <p className={styles.requiredNote}>{contactForm.requiredNote}</p>
        <div className={styles.pair}>
          <Field
            id="name"
            label={fields.name}
            autoComplete="name"
            value={values.name}
            error={errors.name}
            onChange={handleChange}
          />
          <Field
            id="email"
            label={fields.email}
            type="email"
            autoComplete="email"
            value={values.email}
            error={errors.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.pair}>
          <Field
            id="phone"
            label={fields.phone}
            type="tel"
            autoComplete="tel"
            optional
            value={values.phone}
            error={errors.phone}
            onChange={handleChange}
          />
          <Field
            id="subject"
            label={fields.subject}
            autoComplete="off"
            value={values.subject}
            error={errors.subject}
            onChange={handleChange}
          />
        </div>
        <FieldShell id="message" label={fields.message} hint={fields.messageHint} error={errors.message}>
          {(describedBy) => (
            <textarea
              id="message"
              name="message"
              rows={7}
              maxLength={contactForm.messageMaxLength}
              required
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={describedBy}
              className={cx(styles.textarea, errors.message && styles.invalid)}
              value={values.message}
              onChange={handleChange}
            />
          )}
        </FieldShell>
      </fieldset>
      <div className={styles.actions}>
        <button
          type="submit"
          aria-describedby={hasEndpoint ? undefined : UNAVAILABLE_ID}
          className={cx(buttonStyles.button, buttonStyles.lg, buttonStyles.primary, styles.submit)}
        >
          {contactForm.submit}
        </button>
        {!hasEndpoint && (
          <p id={UNAVAILABLE_ID} className={styles.unavailable}>
            <ContactRoutes
              before={contactForm.unavailableBefore}
              middle={contactForm.unavailableMiddle}
              after={contactForm.unavailableAfter}
            />
          </p>
        )}
      </div>
      {/* Always rendered so screen readers announce the text when it appears. */}
      <div role="status" className={notSent ? styles.status : 'visually-hidden'}>
        {notSent && (
          <>
            <p className={styles.statusHeading}>{contactForm.notSentHeading}</p>
            <p>
              <ContactRoutes
                before={contactForm.notSentBefore}
                middle={contactForm.notSentMiddle}
                after={contactForm.notSentAfter}
              />
            </p>
          </>
        )}
      </div>
    </form>
  )
}

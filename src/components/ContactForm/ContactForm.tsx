import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { contactForm } from '../../content/contact'
import { cx } from '../../utils/cx'
import buttonStyles from '../Button/Button.module.css'
import { PhoneLink } from '../PhoneLink/PhoneLink'
import styles from './ContactForm.module.css'

type FieldName = 'first-name' | 'last-name' | 'email' | 'phone' | 'message'
type Values = Record<FieldName, string>
type Errors = Partial<Record<FieldName, string>>

const FIELD_ORDER: FieldName[] = ['first-name', 'last-name', 'email', 'phone', 'message']
const EMPTY: Values = { 'first-name': '', 'last-name': '', email: '', phone: '', message: '' }
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values: Values): Errors {
  const { errors: text } = contactForm
  const errors: Errors = {}
  const email = values.email.trim()
  const phone = values.phone.trim()
  const phoneDigits = phone.replace(/\D/g, '').length

  if (!values['first-name'].trim()) errors['first-name'] = text.firstName
  if (!values['last-name'].trim()) errors['last-name'] = text.lastName
  if (!email) errors.email = text.email
  else if (!EMAIL_PATTERN.test(email)) errors.email = text.emailFormat
  if (phone && (!/^[\d\s()+.-]+$/.test(phone) || phoneDigits < 10 || phoneDigits > 15)) {
    errors.phone = text.phoneFormat
  }
  if (!values.message.trim()) errors.message = text.message
  return errors
}

/** Builds a mailto: link carrying the message for the visitor's email app. */
function mailtoHref(values: Values): string {
  const { fields } = contactForm
  const name = `${values['first-name'].trim()} ${values['last-name'].trim()}`
  const body = [
    `${fields.firstName}: ${values['first-name'].trim()}`,
    `${fields.lastName}: ${values['last-name'].trim()}`,
    `${fields.email}: ${values.email.trim()}`,
    `${fields.phone}: ${values.phone.trim()}`,
    '',
    `${fields.message}:`,
    values.message.trim(),
  ].join('\r\n')
  const subject = `${contactForm.emailSubject} ${name}`
  return `mailto:${contactForm.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

interface FieldShellProps {
  id: FieldName
  label: string
  required?: boolean
  hint?: string
  error?: string
  children: (describedBy: string | undefined) => ReactNode
}

function FieldShell({ id, label, required = false, hint, error, children }: FieldShellProps) {
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

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
  required?: boolean
  hint?: string
  value: string
  error?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

function Field({ id, label, type = 'text', autoComplete, required = false, hint, value, error, onChange }: FieldProps) {
  return (
    <FieldShell id={id} label={label} required={required} hint={hint} error={error}>
      {(describedBy) => (
        <input
          id={id}
          name={id}
          type={type}
          autoComplete={autoComplete}
          required={required}
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
 * Message form with the same fields as the official contact form. With an
 * approved `contactForm.endpoint` it posts there; while that is null, a valid
 * message opens in the visitor's email app instead. No submission is simulated.
 */
export function ContactForm() {
  const { endpoint, fields } = contactForm
  const hasEndpoint = endpoint !== null
  const [values, setValues] = useState<Values>(EMPTY)
  const [attempted, setAttempted] = useState(false)
  const [handedOff, setHandedOff] = useState(false)
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
      setHandedOff(false)
      document.getElementById(firstInvalid)?.focus()
      return
    }
    if (hasEndpoint) return

    event.preventDefault()
    window.location.href = mailtoHref(values)
    setHandedOff(true)
  }

  return (
    <form
      action={endpoint ?? undefined}
      method="post"
      noValidate
      className={styles.form}
      aria-describedby={hasEndpoint ? undefined : 'contact-form-handoff'}
      onSubmit={handleSubmit}
    >
      {!hasEndpoint && (
        <p id="contact-form-handoff" className={styles.status}>
          {contactForm.handoffBefore}
          <a href={`mailto:${contactForm.email}`}>{contactForm.email}</a>
          {contactForm.handoffMiddle}
          <PhoneLink phone={contactForm.phone} />
          {contactForm.handoffAfter}
        </p>
      )}
      <fieldset className={styles.fieldset}>
        <legend className="visually-hidden">{contactForm.heading}</legend>
        <div className={styles.pair}>
          <Field
            id="first-name"
            label={fields.firstName}
            autoComplete="given-name"
            required
            value={values['first-name']}
            error={errors['first-name']}
            onChange={handleChange}
          />
          <Field
            id="last-name"
            label={fields.lastName}
            autoComplete="family-name"
            required
            value={values['last-name']}
            error={errors['last-name']}
            onChange={handleChange}
          />
        </div>
        <div className={styles.pair}>
          <Field
            id="email"
            label={fields.email}
            type="email"
            autoComplete="email"
            required
            value={values.email}
            error={errors.email}
            onChange={handleChange}
          />
          <Field
            id="phone"
            label={fields.phone}
            type="tel"
            autoComplete="tel"
            hint={fields.phoneHint}
            value={values.phone}
            error={errors.phone}
            onChange={handleChange}
          />
        </div>
        <FieldShell id="message" label={fields.message} required hint={fields.messageHint} error={errors.message}>
          {(describedBy) => (
            <textarea
              id="message"
              name="message"
              rows={6}
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
        <div className={styles.actions}>
          <button
            type="submit"
            className={cx(buttonStyles.button, buttonStyles.lg, buttonStyles.primary, styles.submit)}
          >
            {hasEndpoint ? contactForm.submit : contactForm.emailSubmit}
          </button>
        </div>
      </fieldset>
      {/* Always rendered so screen readers announce the text when it appears. */}
      <p role="status" className={handedOff ? styles.status : 'visually-hidden'}>
        {handedOff && (
          <>
            {contactForm.openedBefore}
            <a href={`mailto:${contactForm.email}`}>{contactForm.email}</a>
            {contactForm.openedMiddle}
            <PhoneLink phone={contactForm.phone} />
            {contactForm.openedAfter}
          </>
        )}
      </p>
    </form>
  )
}

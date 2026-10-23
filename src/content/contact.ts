import type { LinkRowItem } from './blocks'
import { images } from './images'
import { links } from './links'
import { clinicContact } from './mentalHealthClinic'
import { contact, hours, type BreadcrumbItem, type HoursRow, type PageMeta } from './site'

/*
 * Contact page. Source: pacificahospital.com/contact-2/.
 *
 * The source form posts to a WordPress (WPForms) handler that this site
 * does not have. Until an approved endpoint is set in `contactForm.endpoint`,
 * the form validates the message and then says plainly that it was not sent,
 * pointing to the inquiries address and main line. Nothing is sent by the site.
 */

export const contactPage = {
  meta: {
    title: 'Contact Us | Pacifica Hospital of the Valley',
    description:
      'Phone numbers, email and directions for Pacifica Hospital of the Valley, 9449 San Fernando Rd, Sun Valley, CA 91352.',
  } satisfies PageMeta,
  breadcrumb: [{ label: 'Home', link: links.home }, { label: 'Contact us' }] satisfies BreadcrumbItem[],
  eyebrow: 'Contact',
  heading: 'Contact us.',
  lead: 'Thank you for your interest in Pacifica Hospital of the Valley. We welcome your comments and questions.',
  notice: {
    heading: 'If you are experiencing a medical emergency, call your physician or 911 immediately.',
    body: 'Please do not send an email in the event of an emergency.',
  },
  image: images.contactReception,
  phones: {
    id: 'phone-numbers',
    heading: 'Phone numbers',
    rows: [
      { label: 'Main line', phone: contact.mainPhone },
      { label: 'Emergency Department, 24 hours', phone: contact.emergencyPhone },
      { label: 'Medical records', phone: contact.medicalRecordsPhone },
      { label: 'Billing records', phone: contact.billingRecordsPhone },
      { label: 'Business office and financial assistance', phone: contact.businessOfficePhone },
      { label: 'Mental Health Urgent Care Clinic', phone: clinicContact.phone },
    ] satisfies HoursRow[],
    note: 'You may also reach any hospital department by calling the main line and asking for assistance.',
  },
  visit: {
    id: 'visit',
    heading: 'Visit',
    address: contact.address,
    directions: { label: 'Get directions', link: links.directions },
    rows: [
      { label: 'Visiting hours', value: hours.visiting },
      { label: 'Business hours', value: hours.business },
      { label: 'Emergency Department', value: hours.emergency },
      { label: 'Inquiries', email: contact.email },
    ] satisfies HoursRow[],
  },
  records: {
    id: 'records',
    heading: 'Patient records request forms',
    items: [
      { title: 'Release of health information', description: 'PDF, English', link: links.recordsRequestEnglish },
      {
        title: 'Release of health information (Spanish)',
        description: 'PDF, Español',
        link: links.recordsRequestSpanish,
      },
    ] satisfies LinkRowItem[],
  },
}

export const contactForm = {
  /**
   * Approved submission endpoint. Null until one exists; the form then
   * validates the message and reports that it was not sent.
   */
  endpoint: null as string | null,
  id: 'message',
  heading: 'Send us a message',
  intro: [
    'Complete the form and a PHV representative will reply if a response is requested. Messages are checked Monday through Friday.',
    'Please be advised that we are not able to offer health information or medical advice through this service.',
  ],
  requiredNote: 'All fields are required unless marked optional.',
  fields: {
    name: 'Full name',
    email: 'Email address',
    phone: 'Phone number',
    subject: 'Subject',
    message: 'Message',
    messageHint: 'Up to 1,500 characters',
  },
  optional: 'Optional',
  messageMaxLength: 1500,
  submit: 'Send message',
  errorPrefix: 'Error:',
  errors: {
    name: 'Enter your full name.',
    email: 'Enter your email address.',
    emailFormat: 'Enter an email address in the format name@example.com.',
    phoneFormat: 'Enter a phone number with 10 to 15 digits, or leave it blank.',
    subject: 'Enter a subject.',
    message: 'Enter your message.',
  },
  email: contact.email,
  phone: contact.mainPhone,
  // Beside the button while there is no endpoint, so no one writes a message expecting it to be sent.
  unavailableBefore: 'Online messages are not yet connected. Until they are, email ',
  unavailableMiddle: ' or call ',
  unavailableAfter: '.',
  // Announced after a valid submit while there is no endpoint.
  notSentHeading: 'Your message has not been sent.',
  notSentBefore: 'This form is not yet connected. Please email ',
  notSentMiddle: ' or call ',
  notSentAfter: '. Your message is still in the form, so you can copy it.',
}

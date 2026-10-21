import type { LinkRowItem } from './blocks'
import { links } from './links'
import { clinicContact } from './mentalHealthClinic'
import { contact, hours, type BreadcrumbItem, type HoursRow, type PageMeta } from './site'

/*
 * Contact page. Source: pacificahospital.com/contact-2/.
 *
 * The source form posts to a WordPress (WPForms) handler that this site
 * does not have. Until an approved endpoint is set in `contactForm.endpoint`,
 * the form renders disabled with a note pointing to email and phone.
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
  /** Approved submission endpoint. Null until one exists; the form then renders disabled. */
  endpoint: null as string | null,
  id: 'message',
  heading: 'Send us a message',
  intro: [
    'Complete the form below and a PHV representative will reply if a response is requested. Email messages are checked Monday through Friday.',
    'Please be advised that we are not able to offer health information or medical advice through this service.',
  ],
  fields: {
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    phone: 'Phone',
    phoneHint: 'Optional',
    message: 'Reason for appointment or inquiry',
  },
  submit: 'Send message',
  required: 'Required',
  unavailableBefore: 'Online messages are not yet available. Please email ',
  unavailableEmail: contact.email,
  unavailableMiddle: ' or call ',
  unavailablePhone: contact.mainPhone,
  unavailableAfter: '.',
}

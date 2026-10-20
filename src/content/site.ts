import { links, type LinkTarget } from './links'

export interface PhoneNumber {
  display: string
  /** E.164 number used for the tel: link */
  tel: string
}

export interface LabeledLink {
  label: string
  link: LinkTarget
}

export const site = {
  name: 'Pacifica Hospital of the Valley',
  shortName: 'Pacifica Hospital',
  nameSuffix: 'of the Valley',
}

export const contact = {
  mainPhone: { display: '(818) 767-3310', tel: '+18187673310' } satisfies PhoneNumber,
  emergencyPhone: { display: '(818) 252-2184', tel: '+18182522184' } satisfies PhoneNumber,
  email: 'info@pacificahospital.com',
  address: {
    street: '9449 San Fernando Rd',
    city: 'Sun Valley',
    state: 'CA',
    zip: '91352',
  },
}

export const hours = {
  emergency: 'Open 24 hours',
  visiting: '11:00 AM – 7:00 PM',
  business: '9:30 AM – 6:30 PM',
}

export const facts = {
  beds: '231-bed acute care hospital',
  accreditation: 'Accredited by The Joint Commission',
  tenure: 'Serving the San Fernando Valley for more than three decades',
}

export const utilityBar = {
  emergencyNotice: 'Medical emergency? Call 911. Emergency Department:',
}

export const hero = {
  facts: [facts.beds, facts.accreditation, facts.tenure],
  heading: 'Hospital care for the San Fernando Valley, close to home.',
  lead: 'Inpatient, outpatient, and 24-hour emergency care for adults across the Valley, from a full-service hospital in Sun Valley.',
  primaryAction: { label: 'Explore services', link: links.allServices } satisfies LabeledLink,
  secondaryAction: { label: 'Plan your visit', link: links.contact } satisfies LabeledLink,
  emergency: {
    label: 'Emergency Department, open 24 hours',
    note: 'In a life-threatening emergency, call 911.',
  },
}

export const statement = {
  heading:
    'A people-centered hospital. You are at the center of everything we do and every decision we make.',
  body: 'Pacifica Hospital is a full-service diagnostic center and medical care facility in the San Fernando region of Los Angeles. Our mission is to enrich health and vitality in our communities and the lives we serve.',
  link: { label: 'About Pacifica Hospital', link: links.about } satisfies LabeledLink,
}

export const careValues = {
  label: 'Our H.E.A.R.T. care values',
  listLabel: 'H.E.A.R.T. care values',
  items: [
    { letter: 'H', word: 'Honesty' },
    { letter: 'E', word: 'Excellence' },
    { letter: 'A', word: 'Accountability' },
    { letter: 'R', word: 'Respect' },
    { letter: 'T', word: 'Trust' },
  ],
}

export const campus = {
  label: 'Our campus',
  title: '9449 San Fernando Road, Sun Valley',
  text: 'A community hospital at the heart of the Valley.',
  directions: { label: 'Get directions', link: links.directions } satisfies LabeledLink,
}

export type HoursRow =
  | { label: string; value: string }
  | { label: string; phone: PhoneNumber }

export const emergencySection = {
  heading: 'In an emergency, call 911.',
  body: 'Our Emergency Department is staffed for 24-hour emergencies and serves our local and extended communities.',
  directLineLabel: 'Emergency Department direct line',
  addressLine: `${contact.address.street}, ${contact.address.city}, ${contact.address.state} ${contact.address.zip}`,
  directions: { label: 'Get directions', link: links.directions } satisfies LabeledLink,
  hours: [
    { label: 'Emergency Department', value: hours.emergency },
    { label: 'Visiting hours', value: hours.visiting },
    { label: 'Business hours', value: hours.business },
    { label: 'Main line', phone: contact.mainPhone },
  ] satisfies HoursRow[],
}

export const footer = {
  visitHeading: 'Visit',
  callHeading: 'Call',
  careHeading: 'Care',
  aboutHeading: 'About',
  mainLabel: 'Main',
  emergencyLabel: 'Emergency',
  copyright: '© 2026 Pacifica Hospital of the Valley',
  accreditation: facts.accreditation,
}

/**
 * Every outbound destination on the homepage.
 *
 * `verified: true` means the URL was confirmed as the official destination.
 * `verified: false` entries are interim and need a decision before launch.
 * `href: null` means no destination exists yet; components render the item
 * as non-interactive text in the same visual style.
 */
export interface LinkTarget {
  href: string | null
  verified: boolean
  note?: string
}

const INTERIM_NOTE = 'destination needs decision'

const ALL_SERVICES = 'https://pacificahospital.com/all-services/'
const PATIENT_BILLING = 'https://pacificahospital.com/patient-billing/'

export const links = {
  home: { href: '/', verified: true },

  emergencyDepartment: {
    href: 'https://pacificahospital.com/emergency-department-menu-main/',
    verified: true,
  },
  inpatient: {
    href: 'https://pacificahospital.com/featured-inpatient-treatments/',
    verified: true,
  },
  outpatient: {
    href: 'https://pacificahospital.com/featured-outpatient-treatments/',
    verified: true,
  },
  mentalHealthClinic: {
    href: 'https://pacificahospital.com/pacific-hospital-of-the-valley-urgent-care-clinic/',
    verified: true,
  },
  imaging: {
    href: 'https://pacificahospital.com/services/medical-imaging-nuclear-medicine/',
    verified: true,
  },
  laboratory: {
    // The misspelling "servives" is the real official URL.
    href: 'https://pacificahospital.com/services/laboratory-servives/',
    verified: true,
  },
  pharmacy: {
    href: 'https://pacificahospital.com/services/pharmacy-department/',
    verified: true,
  },
  patientBilling: { href: PATIENT_BILLING, verified: true },
  helpPaying: {
    href: 'https://pacificahospital.com/help-paying-your-bill/',
    verified: true,
  },
  priceTransparency: {
    href: 'https://secure.claraprice.net/price-transparency/pacifica-hospital-of-the-valley-ca',
    verified: true,
  },
  physicians: { href: 'https://pacificahospital.com/specialists/', verified: true },
  about: {
    href: 'https://pacificahospital.com/about-pacifica-hospital-sun-valley/',
    verified: true,
  },
  careers: {
    href: 'https://pacificahospital.com/services/hospital-careers/',
    verified: true,
  },
  contact: { href: 'https://pacificahospital.com/contact-2/', verified: true },
  allServices: { href: ALL_SERVICES, verified: true },
  hipaa: { href: 'https://pacificahospital.com/hipaa-privacy-policy/', verified: true },
  legal: { href: 'https://pacificahospital.com/legal/', verified: true },
  directions: {
    href: 'https://www.google.com/maps/place/Pacifica+Hospital+of+the+Valley/@34.2400815,-118.3985531,17z',
    verified: true,
  },

  // Interim destinations
  additionalCare: { href: ALL_SERVICES, verified: false, note: INTERIM_NOTE },
  patientResourcesNav: { href: PATIENT_BILLING, verified: false, note: INTERIM_NOTE },
  acuteCare: { href: ALL_SERVICES, verified: false, note: INTERIM_NOTE },
  surgery: { href: ALL_SERVICES, verified: false, note: INTERIM_NOTE },
  subacuteCare: { href: ALL_SERVICES, verified: false, note: INTERIM_NOTE },
  rehabilitation: { href: ALL_SERVICES, verified: false, note: INTERIM_NOTE },
  behavioralHealth: { href: ALL_SERVICES, verified: false, note: INTERIM_NOTE },

  // Unresolved
  spanish: {
    href: null,
    verified: false,
    note: 'No Spanish-language destination identified; renders as text',
  },
} satisfies Record<string, LinkTarget>

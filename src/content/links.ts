/**
 * Every destination on the site.
 *
 * Internal pages use local paths. External entries point to official
 * resources (documents, the job portal, price transparency) that remain
 * hosted by PHV or its vendors.
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

const INTERNAL = 'internal page'
const UPLOADS = 'https://pacificahospital.com/wp-content/uploads'

/** Path of an individual service page. */
export function servicePath(slug: string): string {
  return `/services/${slug}`
}

/** Path of an individual physician profile. */
export function physicianPath(slug: string): string {
  return `/physicians/${slug}`
}

/** Internal pages always resolve, so href stays a plain string. */
function internal(href: string) {
  return { href, verified: true, note: INTERNAL }
}

export const links = {
  home: { href: '/', verified: true },
  aboutPage: internal('/about'),

  // Care
  allServices: internal('/services'),
  inpatient: internal('/services?setting=inpatient'),
  outpatient: internal('/services?setting=outpatient'),
  emergencyDepartment: internal('/emergency'),
  mentalHealthClinic: internal('/mental-health-clinic'),
  acuteCare: internal(servicePath('acute-care')),
  intensiveCare: internal(servicePath('intensive-care')),
  surgery: internal(servicePath('medical-surgical')),
  behavioralHealth: internal(servicePath('mental-health-unit')),
  subacuteCare: internal(servicePath('subacute')),
  skilledNursing: internal(servicePath('skilled-nursing')),
  rehabilitation: internal(servicePath('rehabilitation')),
  respiratoryTherapy: internal(servicePath('respiratory-therapy')),
  imaging: internal(servicePath('imaging')),
  laboratory: internal(servicePath('laboratory')),
  pharmacy: internal(servicePath('pharmacy')),
  /** The "Additional care" group (imaging, lab, pharmacy) on the services page. */
  additionalCare: internal('/services#tests-and-pharmacy'),

  // Physicians
  physicians: internal('/physicians'),
  hospitalists: internal('/physicians?group=hospitalists'),
  specialists: internal('/physicians?group=specialists'),
  medicalLeadership: internal('/physicians/leadership'),

  // Patients and visitors
  patientResourcesNav: internal('/patients'),
  patientBilling: internal('/patients/billing'),
  helpPaying: internal('/patients/financial-assistance'),
  contact: internal('/contact'),
  careers: internal('/careers'),
  hipaa: internal('/privacy'),
  legal: internal('/legal'),

  // External resources
  priceTransparency: {
    href: 'https://secure.claraprice.net/price-transparency/pacifica-hospital-of-the-valley-ca',
    verified: true,
  },
  directions: {
    href: 'https://www.google.com/maps/place/Pacifica+Hospital+of+the+Valley/@34.2400815,-118.3985531,17z',
    verified: true,
  },
  mentalHealthClinicDirections: {
    href: 'https://maps.app.goo.gl/AMto9xtsvLXWDRFm8',
    verified: true,
  },
  crisisLifeline: {
    href: 'https://www.samhsa.gov/newsroom/press-announcements/20220715/us-transition-988-suicide-crisis-lifeline-begins-saturday',
    verified: true,
  },
  laCountyMentalHealth: { href: 'https://dmh.lacounty.gov/', verified: true },
  // As printed in the Notice of Privacy Practices.
  hhsPrivacyComplaint: { href: 'https://www.hhs.gov/hipaa/filing-a-complaint/index.html', verified: true },
  // State-mandated address as published by PHV; redirects to the HCAI program page.
  hospitalBillComplaint: { href: 'http://HospitalBillComplaint.hcai.ca.gov', verified: true },

  // Job portal (HealthcareSource)
  jobSearch: { href: 'https://pm.healthcaresource.com/cs/pacificahospital#/search', verified: true },
  jobCreateAccount: {
    href: 'https://pm.healthcaresource.com/CS/pacificahospital/#/createAccount',
    verified: true,
  },
  jobSignIn: { href: 'https://pm.healthcaresource.com/CS/pacificahospital/#/signIn', verified: true },

  // Documents (PDF)
  recordsRequestEnglish: {
    href: `${UPLOADS}/2020/06/PHV_release-of-health-info-english.pdf`,
    verified: true,
  },
  recordsRequestSpanish: {
    href: `${UPLOADS}/2020/06/PHV_release-of-health-info-spanish.pdf`,
    verified: true,
  },
  surpriseBillingProtections: {
    href: `${UPLOADS}/2021/12/PHV_NSA_Patient-Protections-Against-Surprise-Billing_CHA_State_Specific.pdf`,
    verified: true,
  },
  charityCarePolicy: {
    href: `${UPLOADS}/2024/07/PHV-Financial-Support_Charity-Policy-.pdf`,
    verified: true,
  },
  financialAssistanceEnglish: {
    href: `${UPLOADS}/2026/02/PHV-Medical-and-Financial-Assistance-Application_ENG_01_26.pdf`,
    verified: true,
  },
  financialAssistanceSpanish: {
    href: `${UPLOADS}/2026/02/PHV-Medical-and-Financial-Assistance-Application_spa_01_26.pdf`,
    verified: true,
  },
  mindfulMomentsChecklist: {
    href: `${UPLOADS}/2025/05/MENTAL_HEALTH_MINDFUL_MOMENTS_-CHECKLIST.pdf`,
    verified: true,
  },
  websitePrivacyPolicy: {
    href: `${UPLOADS}/2026/09/1-Pacifica-Hospital-website-privacy-policy.pdf`,
    verified: true,
  },
  termsOfUse: { href: `${UPLOADS}/2026/09/2-pacifica-Hospital-terms-of-use.pdf`, verified: true },
  accessibilityPolicy: {
    href: `${UPLOADS}/2026/09/3-pacifica-Hospital-accessibility-resources.pdf`,
    verified: true,
  },
  privacyPracticesNotice: {
    href: `${UPLOADS}/2026/09/4-Pacifica-Hospital-privacy-practice.pdf`,
    verified: true,
  },
  privacyPracticesNoticeSpanish: {
    href: `${UPLOADS}/2026/09/5-pacifica-Hospital-privacy-practice-SPA.pdf`,
    verified: true,
  },
  nondiscriminationNotice: {
    href: `${UPLOADS}/2026/09/6-Pacifica-Hospital-notice-of-nondiscrimination-los-angeles.pdf`,
    verified: true,
  },
  nondiscriminationTaglines: {
    href: `${UPLOADS}/2026/09/7-Pacifica-Hospital-notice-of-nondiscrimination-universal-taglines.pdf`,
    verified: true,
  },

  // Unresolved
  spanish: {
    href: null,
    verified: false,
    note: 'No Spanish-language destination identified; renders as text',
  },
} satisfies Record<string, LinkTarget>

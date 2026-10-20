import { links, type LinkTarget } from './links'
import { hours, type LabeledLink } from './site'

export interface UtilityLink extends LabeledLink {
  lang?: string
}

export interface QuickLink {
  title: string
  description: string
  link: LinkTarget
}

export const utilityLinks: UtilityLink[] = [
  { label: 'Pay a bill', link: links.patientBilling },
  { label: 'Careers', link: links.careers },
  { label: 'Español', link: links.spanish, lang: 'es' },
]

export const mainNav: LabeledLink[] = [
  { label: 'Get care', link: links.allServices },
  { label: 'Additional care', link: links.additionalCare },
  { label: 'Mental health', link: links.mentalHealthClinic },
  { label: 'Patient resources', link: links.patientResourcesNav },
  { label: 'About', link: links.about },
]

export const headerCta: LabeledLink = { label: 'Find a physician', link: links.physicians }

export const quickLinks: QuickLink[] = [
  { title: 'Find a physician', description: 'Hospitalists, specialists', link: links.physicians },
  { title: 'Visiting hours', description: hours.visiting, link: links.contact },
  { title: 'Pay a bill', description: 'Billing and financial help', link: links.patientBilling },
  { title: 'Price transparency', description: 'Standard charges', link: links.priceTransparency },
  { title: 'Directions', description: '9449 San Fernando Rd', link: links.directions },
]

export const footerNav: { care: LabeledLink[]; about: LabeledLink[] } = {
  care: [
    { label: 'Emergency Department', link: links.emergencyDepartment },
    { label: 'Inpatient treatments', link: links.inpatient },
    { label: 'Outpatient treatments', link: links.outpatient },
    { label: 'Mental health clinic', link: links.mentalHealthClinic },
  ],
  about: [
    { label: 'About Pacifica Hospital', link: links.about },
    { label: 'Careers', link: links.careers },
    { label: 'HIPAA privacy', link: links.hipaa },
    { label: 'Legal terms', link: links.legal },
  ],
}

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
]

/** A main-nav item that opens a list of links instead of going to a page of its own. */
export interface NavGroup {
  label: string
  items: LabeledLink[]
}

export type MainNavItem = LabeledLink | NavGroup

export function isNavGroup(item: MainNavItem): item is NavGroup {
  return 'items' in item
}

/** Hrefs of every link inside a main-nav group. */
export function navGroupHrefs(group: NavGroup): (string | null)[] {
  return group.items.map((item) => item.link.href)
}

export const mainNav: MainNavItem[] = [
  { label: 'Home', link: links.home },
  { label: 'Get care', link: links.allServices },
  {
    label: 'Additional care',
    items: [
      { label: 'Emergency Services', link: links.emergencyDepartment },
      { label: 'Laboratory Services', link: links.laboratory },
      { label: 'Pharmacy Department', link: links.pharmacy },
    ],
  },
  { label: 'Mental health', link: links.mentalHealthClinic },
  { label: 'Patient resources', link: links.patientResourcesNav },
  { label: 'About us', link: links.aboutPage },
]

/** Header action after the main nav; Contact lives here rather than in the list. */
export const headerCta: LabeledLink = { label: 'Contact', link: links.contact }

export const quickLinks: QuickLink[] = [
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
    { label: 'About Pacifica Hospital', link: links.aboutPage },
    { label: 'Contact us', link: links.contact },
    { label: 'Careers', link: links.careers },
    { label: 'HIPAA privacy', link: links.hipaa },
    { label: 'Legal terms', link: links.legal },
  ],
}

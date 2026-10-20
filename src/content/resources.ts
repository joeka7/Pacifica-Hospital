import { links } from './links'
import type { QuickLink } from './navigation'
import { contact } from './site'

export const patientResources = {
  heading: 'Patient resources',
  introBeforePhone: 'Billing, costs, physicians, and privacy. Questions? Call ',
  introPhone: contact.mainPhone,
  introAfterPhone: '.',
  items: [
    { title: 'Patient billing', description: 'Understand your statement', link: links.patientBilling },
    { title: 'Help paying your bill', description: 'Financial assistance options', link: links.helpPaying },
    { title: 'Price transparency', description: 'Standard charges', link: links.priceTransparency },
    { title: 'Hospitalists and specialists', description: 'Our physicians', link: links.physicians },
    { title: 'Send us a message', description: 'In English or Spanish', link: links.contact },
    { title: 'HIPAA privacy policy', description: 'How we protect your information', link: links.hipaa },
  ] satisfies QuickLink[],
}

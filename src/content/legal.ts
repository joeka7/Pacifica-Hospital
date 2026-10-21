import type { LinkRowItem } from './blocks'
import { links } from './links'
import type { BreadcrumbItem, PageMeta } from './site'

/*
 * Legal page. Source: pacificahospital.com/legal/ (document list only).
 * The testimonials on the source page are not attributed to verifiable
 * patients and are omitted; see NOTES.md.
 */
export const legalPage = {
  meta: {
    title: 'Legal | Pacifica Hospital of the Valley',
    description:
      'Website privacy policy, terms of use, accessibility policy, notices of privacy practices and nondiscrimination for Pacifica Hospital of the Valley.',
  } satisfies PageMeta,
  breadcrumb: [{ label: 'Home', link: links.home }, { label: 'Legal' }] satisfies BreadcrumbItem[],
  eyebrow: 'Legal',
  heading: 'Policies and notices.',
  lead: 'Policies for this website, and notices for patients of Pacifica Hospital of the Valley. Documents open as PDF files.',
  groups: [
    {
      id: 'website',
      heading: 'Website',
      items: [
        { title: 'Website Privacy Policy', description: 'PDF', link: links.websitePrivacyPolicy },
        { title: 'Terms of Use', description: 'PDF', link: links.termsOfUse },
        { title: 'Accessibility Policy', description: 'PDF', link: links.accessibilityPolicy },
      ],
    },
    {
      id: 'patient-notices',
      heading: 'Patient notices',
      items: [
        { title: 'HIPAA Notice of Privacy Practices', description: 'Read online', link: links.hipaa },
        { title: 'Notice of Privacy Practices', description: 'PDF, English', link: links.privacyPracticesNotice },
        {
          title: 'Notice of Privacy Practices (Spanish)',
          description: 'PDF, Español',
          link: links.privacyPracticesNoticeSpanish,
        },
        { title: 'Notice of Nondiscrimination', description: 'PDF', link: links.nondiscriminationNotice },
        {
          title: 'Nondiscrimination universal taglines',
          description: 'Language assistance, PDF',
          link: links.nondiscriminationTaglines,
        },
      ],
    },
  ] satisfies { id: string; heading: string; items: LinkRowItem[] }[],
}

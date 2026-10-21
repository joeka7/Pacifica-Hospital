import type { ContentSectionData, LinkRowItem } from './blocks'
import { links } from './links'
import { contact, type BreadcrumbItem, type LabeledLink, type PageMeta } from './site'

// Current nursing openings and the benefits list need confirmation with HR before launch.
export const careers = {
  eyebrow: 'Careers at PHV',
  heading: 'Care for your community. Immediate openings in nursing.',
  body: 'From nurses to lab technicians, receptionists to food service and pharmacy staff, there is a place for your career at Pacifica.',
  benefits:
    'Competitive salaries, 401(k) program, comprehensive health benefits, and paid vacation, holidays, and sick leave. Full-time, part-time, and per diem.',
  action: { label: 'Search careers', link: links.careers } satisfies LabeledLink,
}

/*
 * Careers page. Source: pacificahospital.com/services/hospital-careers/.
 * Applications go through the external HealthcareSource portal. The staff
 * video testimonials on the source page are not reproduced; see NOTES.md.
 */
export const careersPage = {
  meta: {
    title: 'Careers | Pacifica Hospital of the Valley',
    description:
      'Pacifica Hospital of the Valley is hiring full-time, part-time and per diem staff in all areas. Search openings and apply online.',
  } satisfies PageMeta,
  breadcrumb: [{ label: 'Home', link: links.home }, { label: 'Careers' }] satisfies BreadcrumbItem[],
  eyebrow: 'PHV careers',
  heading: 'Where you make a difference.',
  facts: ['Hiring in all areas', 'Full-time, part-time and per diem', 'Sun Valley, CA'],
  lead: 'We are currently hiring full-time, part-time and per diem staff in all areas.',
  primaryAction: { label: 'Search job openings', link: links.jobSearch } satisfies LabeledLink,
  intro: {
    id: 'working-at-phv',
    heading: 'A place for your career.',
    paragraphs: [
      'Pacifica Hospital of the Valley is transforming health care in the Valley and beyond. When you work with physicians who provide life-saving treatment, or support medical staff members to help find cures and treatments, you become part of an exciting organization. Working together, we are making the Valley a destination for health care.',
      'From nurses to lab technicians, receptionists to assistants, and food service workers to pharmacy employees, Pacifica Hospital is the place for you and your career ambitions, with careers throughout our hospital.',
    ],
  },
  benefits: {
    id: 'benefits',
    heading: 'Pacifica Hospital of the Valley offers',
    items: [
      'Competitive salaries',
      'Paid vacation, holidays and sick leave',
      '401(k) program',
      'Full-time, part-time and per diem positions',
      'Work/life balance',
      'Comprehensive medical, dental and vision insurance',
    ],
  },
  apply: {
    id: 'apply',
    heading: 'Join our team',
    items: [
      { title: 'Search job openings', description: 'Current openings on our job portal', link: links.jobSearch },
      { title: 'First-time applicants', description: 'Create an account to apply', link: links.jobCreateAccount },
      { title: 'Returning applicants', description: 'Sign in to check your application status', link: links.jobSignIn },
    ] satisfies LinkRowItem[],
  },
  beforeYouApply: {
    id: 'before-you-apply',
    heading: 'Please read before you apply',
    blocks: [
      {
        type: 'paragraph',
        text: 'If you applied before September 25, 2018, your previous application and profile are no longer valid in our database. First-time applicants, and anyone who applied before that date, will need to register and complete an application.',
      },
      {
        type: 'paragraph',
        text: 'Registration requires a valid email address. Please make sure you can access this email account, as we communicate with you primarily by email throughout the application and onboarding process.',
      },
      {
        type: 'paragraph',
        text: 'Once you have registered, you can apply for multiple positions by copying your most up-to-date application. Please make sure all the information on your application is current, including your availability, contact information and work history.',
      },
      {
        type: 'paragraph',
        text: 'Thank you for your interest in Pacifica Hospital of the Valley. — Human Resources',
      },
    ],
  } satisfies ContentSectionData,
  questions: {
    heading: 'Questions?',
    before: 'Call ',
    phone: contact.mainPhone,
    after: '.',
  },
}

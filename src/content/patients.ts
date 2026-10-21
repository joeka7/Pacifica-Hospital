import type { ContentSectionData, LinkRowItem, Step } from './blocks'
import { links } from './links'
import { contact, hours, type BreadcrumbItem, type HoursRow, type PageMeta } from './site'

/*
 * Patients and visitors. Sources: pacificahospital.com/patient-info/,
 * /patients-and-visitors_/, /patient-billing/, /help-paying-your-bill/,
 * /contact-2/ and /legal/. The source /patient-info/ page holds only a
 * Spanish satisfaction survey and the shared contact block; its resources
 * are gathered into the index below.
 */

const home = { label: 'Home', link: links.home }
const patientsCrumb = { label: 'Patients and visitors', link: links.patientResourcesNav }

const addressLine = `${contact.address.street}, ${contact.address.city}, ${contact.address.state} ${contact.address.zip}`

export const patientsPage = {
  meta: {
    title: 'Patients and Visitors | Pacifica Hospital of the Valley',
    description:
      'Visiting hours, billing and financial help, medical records and privacy information for patients and visitors at Pacifica Hospital of the Valley.',
  } satisfies PageMeta,
  breadcrumb: [home, { label: 'Patients and visitors' }] satisfies BreadcrumbItem[],
  eyebrow: 'Patient resources',
  heading: 'Patients and visitors.',
  facts: [`Visiting hours ${hours.visiting}`, `Business hours ${hours.business}`, `Emergency Department ${hours.emergency.toLowerCase()}`],
  lead: 'Plan your visit, understand your bill, request your records and learn about your privacy rights.',
  notice: {
    heading: 'If you are experiencing a medical emergency, call your physician or 911 immediately.',
  },
  visit: {
    id: 'visit',
    heading: 'Plan your visit',
    rows: [
      { label: 'Visiting hours', value: hours.visiting },
      { label: 'Business hours', value: hours.business },
      { label: 'Emergency Department', value: hours.emergency },
      { label: 'Main line', phone: contact.mainPhone },
    ] satisfies HoursRow[],
    address: addressLine,
    directions: { label: 'Get directions', link: links.directions },
  },
  indexes: [
    {
      id: 'billing',
      heading: 'Billing and financial help',
      items: [
        { title: 'Patient billing', description: 'Charges, insurance and billing questions', link: links.patientBilling },
        { title: 'Help paying your bill', description: 'Financial assistance programs', link: links.helpPaying },
        { title: 'Price transparency', description: 'Standard charges', link: links.priceTransparency },
        {
          title: 'Your rights and protections against surprise medical bills',
          description: 'PDF',
          link: links.surpriseBillingProtections,
        },
      ],
    },
    {
      id: 'records',
      heading: 'Medical and billing records',
      items: [
        {
          title: 'Patient records request form',
          description: 'Release of health information, PDF, English',
          link: links.recordsRequestEnglish,
        },
        {
          title: 'Patient records request form (Spanish)',
          description: 'Release of health information, PDF, Español',
          link: links.recordsRequestSpanish,
        },
      ],
      rows: [
        { label: 'Medical records', phone: contact.medicalRecordsPhone },
        { label: 'Billing records', phone: contact.billingRecordsPhone },
        { label: 'Billing records email', email: contact.billingRecordsEmail },
      ] satisfies HoursRow[],
    },
    {
      id: 'privacy',
      heading: 'Privacy and your rights',
      items: [
        { title: 'HIPAA Notice of Privacy Practices', description: 'How we use and protect your information', link: links.hipaa },
        { title: 'Notice of Nondiscrimination', description: 'PDF', link: links.nondiscriminationNotice },
        { title: 'Legal and privacy documents', description: 'Policies, notices and terms of use', link: links.legal },
      ],
    },
    {
      id: 'physicians',
      heading: 'Physicians',
      items: [
        { title: 'Find a physician', description: 'Search by name or specialty', link: links.physicians },
        { title: 'Medical staff leadership', description: 'Officers, department heads and committees', link: links.medicalLeadership },
      ],
    },
    {
      id: 'questions',
      heading: 'Questions',
      items: [
        { title: 'Contact us', description: 'Department phone numbers and messages', link: links.contact },
        { title: 'Services', description: 'Inpatient, outpatient and emergency care', link: links.allServices },
      ],
    },
  ] satisfies { id: string; heading: string; items: LinkRowItem[]; rows?: HoursRow[] }[],
}

/** State-mandated notice, shown on both billing pages. Wording must not change. */
export const billComplaintProgram = {
  heading: 'Hospital Bill Complaint Program',
  body: 'The Hospital Bill Complaint Program is a state program, which reviews hospital decisions about whether you qualify for help paying your hospital bill. If you believe you were wrongly denied financial assistance, you may file a complaint with the Hospital Bill Complaint Program.',
  linkBefore: 'Go to',
  linkLabel: 'HospitalBillComplaint.hcai.ca.gov',
  link: links.hospitalBillComplaint,
  linkAfter: 'for more information and to file a complaint.',
  citation:
    'Cal. Code Regs. Tit. 22, § 96051.11 Authority cited: Section 127010, Health and Safety Code. Reference: Section 127410, Health and Safety Code.',
}

export const billingPage = {
  meta: {
    title: 'Patient Billing | Pacifica Hospital of the Valley',
    description:
      'How billing works at Pacifica Hospital of the Valley, how to ensure accurate billing, and who to call with billing and insurance questions.',
  } satisfies PageMeta,
  breadcrumb: [home, patientsCrumb, { label: 'Patient billing' }] satisfies BreadcrumbItem[],
  eyebrow: 'Patient billing',
  heading: 'Billing for hospital services.',
  lead: 'Billing for hospital services begins with charges for the services, supplies and pharmaceuticals provided during a patient’s hospital visit.',
  sections: [
    {
      id: 'charges',
      heading: 'Understanding hospital charges',
      blocks: [
        {
          type: 'paragraph',
          text: 'Pricing for medical services can be complex, and charges do not necessarily reflect what a patient may pay. For insured patients, the amount owed depends on the coverage benefits of their health insurance plan. Please contact your health insurance company to find out your coverage benefits and to get an estimate of what you may owe for your visit.',
        },
        {
          type: 'linkParagraph',
          text: 'Our standard charges, including average charges by Diagnosis Related Group (DRG) for inpatient visits, are published on our price transparency site.',
          linkLabel: 'View standard charges',
          link: links.priceTransparency,
        },
      ],
    },
    {
      id: 'before-your-visit',
      heading: 'Before your visit',
      blocks: [
        {
          type: 'paragraph',
          text: 'Please bring all insurance information, including insurance cards, to your appointment.',
        },
        {
          type: 'paragraph',
          text: 'Many medical insurance companies, as well as HMOs, require pre-authorization for medical services. Please check with your insurance company or primary care physician to obtain pre-authorization, if required, before the date of your appointment.',
        },
      ],
    },
    {
      id: 'accurate-billing',
      heading: 'How to ensure accurate billing',
      blocks: [
        {
          type: 'list',
          label: 'Before your visit, you can:',
          items: [
            'Stay well informed by asking staff members for detailed answers',
            'Ask for contact information for any financial questions you may have after your visit',
          ],
        },
        {
          type: 'paragraph',
          text: 'Pacifica Hospital may ask for your patient responsibility (for example, co-payments) before services are provided. If you are unable to pay, this does not prevent you from receiving services.',
        },
        {
          type: 'paragraph',
          text: 'After services are provided, we will submit the bill to your insurance provider. Once your insurance has settled, you will be billed for any balance remaining on your account. If your insurance provider does not pay the claim, you will be responsible for the costs of your care.',
        },
      ],
    },
    {
      id: 'inquiries',
      heading: 'Billing inquiries',
      blocks: [
        {
          type: 'paragraph',
          text: 'For questions about insurance, or to find out whether your health plan covers treatment at Pacifica Hospital, call our business office. You may also contact your health plan to find out whether Pacifica physicians are on its provider list.',
        },
        {
          type: 'details',
          rows: [
            { label: 'Business office', phone: contact.businessOfficePhone },
            { label: 'Billing records', phone: contact.billingRecordsPhone },
            { label: 'Billing records email', email: contact.billingRecordsEmail },
          ],
        },
      ],
    },
  ] satisfies ContentSectionData[],
  documentsHeading: 'Policies and protections',
  documents: [
    {
      title: 'Your rights and protections against surprise medical bills',
      description: 'PDF, effective January 1, 2023',
      link: links.surpriseBillingProtections,
    },
    {
      title: 'Charity care and partial charity care discount policy',
      description: 'For financially qualified and self-pay patients, PDF',
      link: links.charityCarePolicy,
    },
    { title: 'Help paying your bill', description: 'Financial assistance programs', link: links.helpPaying },
  ] satisfies LinkRowItem[],
}

export const financialAssistancePage = {
  meta: {
    title: 'Help Paying Your Bill | Pacifica Hospital of the Valley',
    description:
      'Financial assistance at Pacifica Hospital of the Valley: help applying for government programs and a needs-based financial assistance program.',
  } satisfies PageMeta,
  breadcrumb: [home, patientsCrumb, { label: 'Help paying your bill' }] satisfies BreadcrumbItem[],
  eyebrow: 'Help paying your bill',
  heading: 'Need help paying your bill?',
  lead: 'We aim to provide compassionate, high-quality care to the communities we serve. If you don’t have medical insurance, our financial counseling staff will search for government and private programs that may help you pay for health care.',
  contacts: [
    { label: 'Patient Financial Services', phone: contact.businessOfficePhone },
    { label: 'Hours', value: hours.financialAssistance },
  ] satisfies HoursRow[],
  sections: [
    {
      id: 'government-programs',
      heading: 'Government health programs',
      blocks: [
        {
          type: 'paragraph',
          text: 'The first step is to find out whether you qualify for a government-sponsored health program, such as Medi-Cal/Medicaid, Medicare or disability. Our Patient Financial Services (PFS) staff can help you complete the application process.',
        },
        {
          type: 'paragraph',
          text: 'If you meet the eligibility criteria, these programs can give you and your family access to health care and other essential social services.',
        },
      ],
    },
    {
      id: 'financial-assistance',
      heading: 'Pacifica’s financial assistance program',
      blocks: [
        {
          type: 'paragraph',
          text: 'If you are not eligible for a government program, you may qualify for Pacifica’s needs-based Financial Assistance Program.',
        },
        {
          type: 'paragraph',
          text: 'Pacifica Hospital is committed to helping eligible patients who cannot afford all or part of their treatment. If you are eligible as a low-income, uninsured or under-insured patient, Pacifica Hospital can provide financial support up to a complete discount.',
        },
        {
          type: 'linkParagraph',
          text: 'Eligibility is described in our charity care and financial support policy.',
          linkLabel: 'Read the policy (PDF)',
          link: links.charityCarePolicy,
        },
      ],
    },
  ] satisfies ContentSectionData[],
  apply: {
    id: 'how-to-apply',
    heading: 'How to apply',
    steps: [
      { title: 'Fill out the application', text: 'Complete the Pacifica Hospital Financial Assistance Application.' },
      { title: 'Collect your documents', text: 'Gather the additional documents listed in the application.' },
      { title: 'Mail your application', text: 'Mail your application and documents to the address shown on the application.' },
    ] satisfies Step[],
    documents: [
      { title: 'Financial Assistance Application', description: 'PDF, English', link: links.financialAssistanceEnglish },
      {
        title: 'Financial Assistance Application (Spanish)',
        description: 'PDF, Español',
        link: links.financialAssistanceSpanish,
      },
    ] satisfies LinkRowItem[],
    help: `Questions about financial assistance or how to apply? Call Patient Financial Services, ${hours.financialAssistance}.`,
  },
}

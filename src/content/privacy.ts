import type { ContentBlock } from './blocks'
import { links } from './links'
import { contact, type BreadcrumbItem, type PageMeta } from './site'

/*
 * Notice of Privacy Practices (effective 1/1/2023, updated 9/5/2026).
 *
 * Source: the current notice PDF linked from pacificahospital.com/legal/
 * (links.privacyPracticesNotice). The older text at /hipaa-privacy-policy/
 * (effective April 14, 2003) is superseded and is not reproduced.
 *
 * Wording follows the PDF; only PDF extraction artifacts (split words,
 * stray spaces) are repaired and capitalized headings set in sentence case.
 * The Chief Privacy Officer must approve this text against the PDF before
 * launch. See NOTES.md.
 */

export interface PrivacySubsection {
  id: string
  heading: string
  blocks: ContentBlock[]
}

export interface PrivacySection {
  id: string
  heading: string
  blocks: ContentBlock[]
  subsections: PrivacySubsection[]
}

export const privacyPage = {
  meta: {
    title: 'Notice of Privacy Practices | Pacifica Hospital of the Valley',
    description:
      'How Pacifica Hospital of the Valley may use and share your health information, your rights, and how to file a complaint.',
  } satisfies PageMeta,
  breadcrumb: [
    { label: 'Home', link: links.home },
    { label: 'Patients and visitors', link: links.patientResourcesNav },
    { label: 'HIPAA privacy' },
  ] satisfies BreadcrumbItem[],
  eyebrow: 'HIPAA privacy',
  heading: 'Notice of Privacy Practices.',
  lead: 'Your information. Your rights. Our responsibilities.',
  facts: [
    'Effective January 1, 2023',
    'Updated September 5, 2026',
    `Chief Privacy Officer ${contact.mainPhone.display}`,
  ],
  contentsLabel: 'On this page',
  documentsHeading: 'Printable notice',
  documents: [
    { title: 'Notice of Privacy Practices', description: 'PDF, English', link: links.privacyPracticesNotice },
    {
      title: 'Notice of Privacy Practices (Spanish)',
      description: 'PDF, Español',
      link: links.privacyPracticesNoticeSpanish,
    },
  ],
}

const p = (text: string): ContentBlock => ({ type: 'paragraph', text })

export const privacySections: PrivacySection[] = [
  {
    id: 'about-this-notice',
    heading: 'About this notice',
    blocks: [
      p('Pacifica Hospital of the Valley is committed to safeguarding your health information. This Notice of Privacy Practices (“Notice”) describes the privacy practices of Pacifica Hospital of the Valley and the entities that participate jointly in an Organized Health Care Arrangement (“OHCA”) in compliance with the Health Insurance Portability and Accountability Act (“HIPAA”).'),
      p('The Pacifica Hospital of the Valley OHCA members may share your health information with each other for the treatment, payment and health care operations as permitted by HIPAA and this Notice. Pacifica Hospital of the Valley may add or remove entities as part of the Pacifica Hospital of the Valley OHCA from time to time. For a complete current list of the members of the Pacifica Hospital of the Valley OHCA participants, this list will also be made available upon request either at our facilities or by contacting us at 818.767.3310.'),
      p('Your health information also includes any substance use disorder (“SUD”) treatment records governed by 42 USC § 290dd-2 and 42 CFR Part 2 (“Part 2 Program”) maintained or created by Pacifica Hospital of the Valley OHCA participants.'),
      p('This Notice will tell you about the ways in which we may use and disclose medical information about you and how you can get access to this information. We also describe your rights and certain obligations we have regarding the use and disclosure of health information as well as how to file a complaint concerning a violation of the privacy or security of your health information, or of your rights concerning your information. Please review it carefully.'),
    ],
    subsections: [],
  },
  {
    id: 'your-rights',
    heading: 'Your rights',
    blocks: [
      p('When it comes to your health information, you have certain rights. This section explains your rights and some of our responsibilities to help you.'),
    ],
    subsections: [
      {
        id: 'copy-of-record',
        heading: 'Get an electronic or paper copy of your medical record',
        blocks: [
          {
            type: 'list',
            items: [
              'You can ask to see or get an electronic or paper copy of your medical record and other health information we have about you. Contact our Chief Privacy Officer at 818.767.3310 or info@pacificahospital.com.',
              'We will provide a copy or a summary of your health information, usually within 30 days of your request. We may charge a reasonable, cost-based fee.',
            ],
          },
        ],
      },
      {
        id: 'correct-record',
        heading: 'Ask us to correct your medical record',
        blocks: [
          {
            type: 'list',
            items: [
              'You can ask us to correct health information about you that you think is incorrect or incomplete. Contact our Chief Privacy Officer at 818.767.3310 or info@pacificahospital.com.',
              'We may say “no” to your request, but we’ll tell you why in writing within 60 days.',
            ],
          },
        ],
      },
      {
        id: 'confidential-communications',
        heading: 'Request confidential communications',
        blocks: [
          {
            type: 'list',
            items: [
              'You can ask us to contact you in a specific way (for example, home or office phone) or to send mail to a different address.',
              'We will agree to reasonable requests.',
            ],
          },
        ],
      },
      {
        id: 'limit-use',
        heading: 'Ask us to limit what we use or share',
        blocks: [
          {
            type: 'list',
            items: [
              'You can ask us not to use or share certain health information for treatment, payment, or our operations. We are not required to agree to your request, and we may say “no” if it would affect your care, for example.',
              'If you pay for a service or healthcare item out-of-pocket in full, you can ask us not to share that information for the purpose of payment or our operations with your health insurer. We will agree, unless a law requires us to share that information.',
            ],
          },
        ],
      },
      {
        id: 'accounting',
        heading: 'Get a list of those with whom we’ve shared information',
        blocks: [
          {
            type: 'list',
            items: [
              'You can ask for a list (accounting) of the times we’ve shared your health information for six years prior to the date you ask, who we shared it with, including any intermediaries we’ve shared SUD records with in the last three years, and why.',
              'We will include all the disclosures except for those about treatment, payment, and healthcare operations, and certain other disclosures (such as, any you asked us to make). We’ll provide one accounting a year for free but will charge a reasonable, cost-based fee if you ask for another one within 12 months.',
            ],
          },
        ],
      },
      {
        id: 'copy-of-notice',
        heading: 'Get a copy of this notice',
        blocks: [
          p('You can ask for a paper copy of this notice at any time, even if you have agreed to receive the notice electronically. We will provide you with a paper copy promptly.'),
        ],
      },
      {
        id: 'someone-to-act',
        heading: 'Choose someone to act for you',
        blocks: [
          {
            type: 'list',
            items: [
              'If you have given someone medical power of attorney or if someone is your legal guardian, that person can exercise your rights and make choices about your health information.',
              'We will make sure the person has this authority and can act for you before we take any action.',
            ],
          },
        ],
      },
      {
        id: 'file-a-complaint',
        heading: 'File a complaint if you feel your rights are violated',
        blocks: [
          p('You can complain if you feel we have violated your rights by contacting the Pacifica Hospital of the Valley Privacy Officer at 818.767.3310 or info@pacificahospital.com.'),
          {
            type: 'linkParagraph',
            text: 'You can file a complaint with the U.S. Department of Health and Human Services Office for Civil Rights by sending a letter to 200 Independence Avenue, S.W., Washington, D.C. 20201, calling 1.877.696.6775, or visiting',
            linkLabel: 'www.hhs.gov/hipaa/filing-a-complaint/index.html',
            link: links.hhsPrivacyComplaint,
          },
          p('We will not retaliate against you for filing a complaint.'),
        ],
      },
    ],
  },
  {
    id: 'your-choices',
    heading: 'Your choices',
    blocks: [
      p('For certain health information, you can tell us your choices about what we share. If you have a clear preference for how we share your information in the situations described below, talk to us. Tell us what you want us to do, and we will follow your instructions. If you do not tell us otherwise, we will reasonably share your information for purposes of treatment, payment and healthcare operations.'),
      {
        type: 'list',
        label: 'In these cases, you have both the right and choice to tell us to:',
        items: [
          'Share information with your family, close friends, or others involved in your care',
          'Share information in a disaster relief situation',
          'Include your information in a hospital directory',
        ],
      },
      p('If you are not able to tell us your preference, for example if you are unconscious, we may go ahead and share your information if we believe it is in your best interest. We may also share your information when needed to lessen a serious and imminent threat to health or safety.'),
      {
        type: 'list',
        label: 'In these cases, we will not share your information unless you give us written permission:',
        items: [
          'Marketing purposes',
          'Sale of your information',
          'Most sharing of psychotherapy notes and SUD counseling notes',
        ],
      },
      {
        type: 'list',
        label: 'In the case of fundraising:',
        items: [
          'We may contact you for fundraising efforts, but you can tell us not to contact you again or elect not to receive fundraising communications.',
        ],
      },
    ],
    subsections: [],
  },
  {
    id: 'typical-uses',
    heading: 'How do we typically use or share your health information?',
    blocks: [p('We typically use or share your health information in the following ways.')],
    subsections: [
      {
        id: 'care-and-treatment',
        heading: 'Care and treatment',
        blocks: [
          p('We can use your health information and share it with other professionals who are treating you.'),
          p('Example: A doctor treating you for an injury asks another doctor about your overall health condition.'),
        ],
      },
      {
        id: 'healthcare-operations',
        heading: 'Healthcare operations of our organizations',
        blocks: [
          p('We can use and share your health information to run our facilities and practices, improve care, and contact you when necessary.'),
          p('Example: We use health information about you to manage your treatment and services.'),
        ],
      },
      {
        id: 'bill-for-services',
        heading: 'Bill for services',
        blocks: [
          p('We can use and share your health information to bill and get payment from health insurers or other entities for the services we provide.'),
          p('Example: We give information about you to your health insurance plan so it will pay for your services.'),
        ],
      },
      {
        id: 'single-consent',
        heading: 'Single consent',
        blocks: [
          p('Except in an emergency or other special situations, you may provide a single consent for all future uses or disclosures of SUD records for treatment, payment and/or health care operations described above.'),
        ],
      },
    ],
  },
  {
    id: 'other-uses',
    heading: 'How else can we use or share your health information?',
    blocks: [
      p('We are allowed or required to share your information in other ways – usually in ways that contribute to the public good, such as public health and research. We have to meet many conditions in the law before we can share your information for these purposes.'),
    ],
    subsections: [
      {
        id: 'public-health',
        heading: 'Help with public health and safety issues',
        blocks: [
          {
            type: 'list',
            label: 'We can share health information about you for certain situations such as:',
            items: [
              'Preventing disease',
              'Helping with product recalls',
              'Reporting adverse reactions to medications',
              'Reporting suspected abuse, neglect, or domestic violence',
              'Preventing or reducing a serious threat to anyone’s health or safety',
            ],
          },
        ],
      },
      {
        id: 'research',
        heading: 'Do research',
        blocks: [p('We can use or share your information for health research.')],
      },
      {
        id: 'comply-with-law',
        heading: 'Comply with the law',
        blocks: [
          p('We will share information about you if state or federal laws require it, including with the Department of Health and Human Services, if it wants to see that we’re complying with federal privacy law.'),
        ],
      },
      {
        id: 'organ-donation',
        heading: 'Respond to organ and tissue donation requests',
        blocks: [p('We can share health information about you with organ procurement organizations.')],
      },
      {
        id: 'medical-examiner',
        heading: 'Work with a medical examiner or funeral director',
        blocks: [
          p('We can share health information with a coroner, medical examiner, or funeral director when an individual dies.'),
        ],
      },
      {
        id: 'government-requests',
        heading: 'Address workers’ compensation, law enforcement, and other government requests',
        blocks: [
          {
            type: 'list',
            label: 'We can use or share health information about you:',
            items: [
              'For workers’ compensation claims',
              'For law enforcement purposes or with a law enforcement official',
              'With health oversight agencies for activities authorized by law',
              'For special government functions such as military, national security, and presidential protective services',
            ],
          },
        ],
      },
      {
        id: 'lawsuits',
        heading: 'Respond to lawsuits and legal actions',
        blocks: [
          p('We can share health information about you in response to a court or administrative order, or in response to a subpoena.'),
          p('Without a court order, your SUD records can only be shared or used in a legal action against you if you give written permission or a judge orders it after you’ve had a chance to respond.'),
        ],
      },
      {
        id: 'health-information-exchange',
        heading: 'Health information exchange (“HIE”)',
        blocks: [
          p('We may participate in certain HIEs in which your health information is electronically shared in a secure and confidential manner with other healthcare providers involved in your care.'),
          p('Participation in the HIE is voluntary and you may elect to opt out. If you choose not to participate in an HIE, your health information will not be available for access through such HIE; however, it may remain available for access through other mechanisms if permitted or required by applicable law.'),
        ],
      },
      {
        id: 'appointment-reminders',
        heading: 'Appointment reminders',
        blocks: [
          p('We may use and disclose your health information and the contact information you have provided to contact you with appointment reminders.'),
        ],
      },
      {
        id: 'business-associates',
        heading: 'Business associates',
        blocks: [
          p('Some services are provided to or on behalf of Pacifica Hospital of the Valley by third parties are known as “business associates.” We may disclose your health information to our business associates so that they can perform the job we have asked them to do, but we require our business associates to appropriately safeguard your health information.'),
        ],
      },
    ],
  },
  {
    id: 'our-responsibilities',
    heading: 'Our responsibilities',
    blocks: [
      {
        type: 'list',
        items: [
          'We are required by law to maintain the privacy and security of your protected health information.',
          'We will let you know promptly if a breach occurs that may have compromised the privacy or security of your information.',
          'Email and text messaging may not be a secure method of transmitting information. By providing us with your email address or mobile phone number, you understand these risks and agree to us communicating with you via e-mail or text message about your treatment or payment for your care.',
          'Certain state health information laws and regulations, such as those dealing with mental health, HIV/AIDS or drug and alcohol records, may be more stringent than the federal privacy laws and further limit the uses and disclosures of your health information described in this Notice. We will follow these more stringent state law requirements.',
          'We must follow the duties and privacy practices described in this Notice and give you a copy of it.',
          'We will not use or share your information other than as described here unless you tell us we can in writing. If you tell us we can, you may change your mind at any time. Let us know in writing if you change your mind.',
        ],
      },
      p('For further information: Requests for further information about topics covered in this Notice may be directed toward the Pacifica Hospital of the Valley provider who gave you the notice or to our Privacy Officer.'),
      {
        type: 'details',
        rows: [
          { label: 'Chief Privacy Officer', phone: contact.mainPhone },
          { label: 'Email', email: contact.email },
          { label: 'Location', value: 'Sun Valley, CA 91352' },
        ],
      },
    ],
    subsections: [],
  },
  {
    id: 'changes',
    heading: 'Changes to the terms of this notice',
    blocks: [
      p('We can change the terms of this Notice, and the changes will apply to all information we have about you. The new notice will be available on request, at our locations, and on our website.'),
    ],
    subsections: [],
  },
]

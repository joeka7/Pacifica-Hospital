import type { ContentSectionData, LinkRowItem } from './blocks'
import { links } from './links'
import type { BreadcrumbItem, ContactItem, LabeledLink, PageMeta, PhoneNumber } from './site'

/*
 * PHV Mental Health Urgent Care Clinic (PHVUCC), a separate site in Sylmar.
 * Source: pacificahospital.com/pacific-hospital-of-the-valley-urgent-care-clinic/.
 * Third-party statistics and decorative quotes on the source are omitted.
 */

export const clinicContact = {
  phone: { display: '(747) 315-6100', tel: '+17473156100' } satisfies PhoneNumber,
  address: { street: '14228 Saranac Lane', city: 'Sylmar', state: 'CA', zip: '91342' },
}

const crisisLine: PhoneNumber = { display: '988', tel: '988' }
const emergencyLine: PhoneNumber = { display: '911', tel: '911' }
const clinicAddress = `${clinicContact.address.street}, ${clinicContact.address.city}, ${clinicContact.address.state} ${clinicContact.address.zip}`

export const mentalHealthClinicPage = {
  meta: {
    title: 'Mental Health Urgent Care Clinic | Pacifica Hospital of the Valley',
    description:
      'The PHV Mental Health Urgent Care Clinic in Sylmar provides crisis intervention and urgent mental health care around the clock for adults and adolescents aged 13 to 17.',
  } satisfies PageMeta,
  breadcrumb: [
    { label: 'Home', link: links.home },
    { label: 'Mental Health Urgent Care Clinic' },
  ] satisfies BreadcrumbItem[],
  eyebrow: 'PHV Mental Health Urgent Care Clinic',
  heading: 'A hospital alternative in times of crisis.',
  facts: ['Open around the clock', clinicAddress, 'Adults, older adults and adolescents aged 13 to 17'],
  lead: [
    'You don’t have to face your struggles alone. We’re here to listen, support you, and help you through every step of the way.',
    'The PHV Urgent Care Clinic provides crisis intervention and urgent mental health care to individuals and families throughout Los Angeles and the San Fernando Valley.',
  ],
  call: { label: 'Call the clinic', phone: clinicContact.phone },
  directions: { label: 'Get directions', link: links.mentalHealthClinicDirections } satisfies LabeledLink,

  notice: {
    heading: 'In a medical emergency, dial 911.',
    lifelineBefore: 'The 988 Suicide and Crisis Lifeline is available 24/7. Dial ',
    lifelinePhone: crisisLine,
    lifelineAfter: '.',
  },

  approach: {
    id: 'approach',
    heading: 'Welcoming, safe and inclusive support.',
    items: [
      {
        title: 'Care built around you',
        text: 'Throughout each person’s stay at the center, we collaborate closely to decrease stress, understand their urgent needs, and develop a care plan to support their daily life and future.',
      },
      {
        title: 'A recovery-based method',
        text: 'We focus on what works to support people in a mental health crisis, and match our support to each person’s needs.',
      },
      {
        title: 'Here around the clock',
        text: 'We are here around the clock to help you through a crisis, with non-judgmental, compassionate and helpful mental health support in a peaceful, comfortable environment.',
      },
    ],
  },

  sections: [
    {
      id: 'services',
      heading: 'Our services',
      blocks: [
        {
          type: 'list',
          items: [
            'Crisis intervention and stabilization of mental health conditions and co-occurring substance use disorders',
            'Case management focused on community linkages and recovery-oriented, community-based services',
            'Care for people with intellectual and developmental disabilities',
          ],
        },
        {
          type: 'paragraph',
          text: 'Medication support services are available 24 hours a day, 7 days a week.',
        },
      ],
    },
    {
      id: 'who-we-serve',
      heading: 'Who we serve',
      blocks: [
        {
          type: 'paragraph',
          text: 'PHVUCC serves adults, older adults, and adolescents from 13 to 17 years of age. We support people experiencing a mental health crisis who can be safely stabilized within 24 hours, and whose needs do not require inpatient hospitalization.',
        },
        {
          type: 'list',
          label: 'We provide care for:',
          items: [
            'Behavioral health',
            'Non-acute traumatic brain injuries',
            'Aggressive behavior',
            'Other care as appropriate to the presenting crisis',
          ],
          columns: 2,
        },
        {
          type: 'paragraph',
          text: 'Our goal is to deliver high-quality mental health services, promote stabilization and recovery, and create meaningful value for every person we serve.',
        },
      ],
    },
    {
      id: 'crisis-stabilization',
      heading: 'Crisis stabilization services',
      blocks: [
        {
          type: 'paragraph',
          text: 'PHVUCC provides Medi-Cal-certified crisis stabilization services for people experiencing a mental health condition that requires urgent intervention and cannot safely wait for routinely scheduled services.',
        },
        {
          type: 'paragraph',
          text: 'PHVUCC is also designated to provide treatment services under California’s Lanterman-Petris-Short (LPS) Act, supporting individuals who meet the criteria for services in accordance with applicable state requirements.',
        },
      ],
    },
    {
      id: 'signs-of-crisis',
      heading: 'Identifying a mental health crisis',
      blocks: [
        {
          type: 'list',
          label: 'Signs that someone may be experiencing a mental health crisis include:',
          items: [
            'Difficulty functioning or being unable to function, such as finding it hard to get out of bed, go to work or do daily tasks',
            'Challenges with, or an inability to manage, personal hygiene such as brushing teeth, changing clothes and bathing',
            'Intense or sudden changes in mood',
            'Psychosis, such as hallucinations or delusions',
            'Paranoia',
            'Feeling increasingly agitated, angry or violent',
            'Suicidal thoughts or making plans',
            'Self-harm or self-medicating',
            'Isolating or withdrawing from others',
          ],
        },
      ],
    },
    {
      id: 'alternative',
      heading: 'A supportive alternative',
      blocks: [
        {
          type: 'paragraph',
          text: 'If you’re experiencing a mental health crisis and are concerned about hospitalization, PHVUCC may be an option for support and stabilization. Hospitalization can be an important and necessary resource during certain emergencies, but we understand that some people have concerns about the experience, stigma, or potential financial impact.',
        },
        {
          type: 'paragraph',
          text: 'When a person is in crisis but does not need inpatient hospitalization, PHVUCC can provide timely outpatient crisis stabilization and mental health support in a safe, compassionate environment.',
        },
        {
          type: 'paragraph',
          text: 'You don’t have to wait for a crisis to become overwhelming. We’re here to help you find the appropriate level of care and support.',
        },
      ],
    },
  ] satisfies ContentSectionData[],

  resources: {
    id: 'resources',
    heading: 'Resources',
    items: [
      {
        title: 'Mental Health Mindful Moments Checklist',
        description: 'PDF checklist',
        link: links.mindfulMomentsChecklist,
      },
      {
        title: '988 Suicide and Crisis Lifeline',
        description: 'About the transition to 988 (SAMHSA)',
        link: links.crisisLifeline,
      },
      {
        title: 'Los Angeles County Department of Mental Health',
        description: 'County mental health information',
        link: links.laCountyMentalHealth,
      },
      {
        title: 'Inpatient Mental Health Unit',
        description: 'Treatment for acute psychiatric illness at the hospital',
        link: links.behavioralHealth,
      },
    ] satisfies LinkRowItem[],
  },

  closing: {
    heading: 'We’re here to help you improve along your healing journey.',
    body: `Visit us at ${clinicAddress}, or call the clinic.`,
    primaryAction: { label: 'Get directions', link: links.mentalHealthClinicDirections } satisfies LabeledLink,
    contacts: [
      { label: 'Medical emergency', phone: emergencyLine, tone: 'emergency' },
      { label: 'Suicide and Crisis Lifeline, 24/7', phone: crisisLine, tone: 'standard' },
      { label: 'PHV Mental Health Urgent Care Clinic', phone: clinicContact.phone, tone: 'standard' },
      { label: 'Address', value: `${clinicContact.address.street}, ${clinicContact.address.city}`, tone: 'standard' },
    ] satisfies ContactItem[],
  },
}

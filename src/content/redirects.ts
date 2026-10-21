import { links, physicianPath } from './links'
import { physicians } from './physicians'

/*
 * Old pacificahospital.com paths and their pages on this site. App applies
 * these in the browser; production hosting should also serve them as 301
 * redirects (see NOTES.md).
 */
export const legacyRedirects: Record<string, string> = {
  '/about-pacifica-hospital-sun-valley': links.aboutPage.href,
  '/all-services': links.allServices.href,
  '/featured-inpatient-treatments': links.inpatient.href,
  '/featured-outpatient-treatments': links.outpatient.href,
  '/emergency-department-menu-main': links.emergencyDepartment.href,
  '/services/emergency-servives': links.emergencyDepartment.href,
  '/pacific-hospital-of-the-valley-urgent-care-clinic': links.mentalHealthClinic.href,
  '/services/medical-imaging-nuclear-medicine': links.imaging.href,
  '/services/laboratory-servives': links.laboratory.href,
  '/services/pharmacy-department': links.pharmacy.href,
  '/services/hospital-careers': links.careers.href,
  '/specialists': links.specialists.href,
  '/hospitalists': links.hospitalists.href,
  '/staff-officers': links.medicalLeadership.href,
  '/hospital-committee': links.medicalLeadership.href,
  '/patient-info': links.patientResourcesNav.href,
  '/patients-and-visitors_': links.patientResourcesNav.href,
  '/patient-billing': links.patientBilling.href,
  '/help-paying-your-bill': links.helpPaying.href,
  '/contact-2': links.contact.href,
  '/hipaa-privacy-policy': links.hipaa.href,
  ...Object.fromEntries(
    physicians.map((physician) => [`/doctors/${physician.sourceSlug}`, physicianPath(physician.slug)]),
  ),
}

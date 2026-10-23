import { links } from './links'

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
  '/patient-info': links.patientResourcesNav.href,
  '/patients-and-visitors_': links.patientResourcesNav.href,
  '/patient-billing': links.patientBilling.href,
  '/help-paying-your-bill': links.helpPaying.href,
  '/contact-2': links.contact.href,
  '/hipaa-privacy-policy': links.hipaa.href,
}

/*
 * The site has no physician directory. Its former paths, and the old site's
 * physician pages, go to Contact, where the main line can help.
 */
const retiredPaths = ['/physicians', '/doctors', '/specialists', '/hospitalists', '/staff-officers', '/hospital-committee']

/** Destination for a retired path or any path beneath one; undefined otherwise. */
export function retiredRedirect(path: string): string | undefined {
  const retired = retiredPaths.some((prefix) => path === prefix || path.startsWith(`${prefix}/`))
  return retired ? links.contact.href : undefined
}

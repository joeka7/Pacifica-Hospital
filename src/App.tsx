import { CampusFeature } from './components/CampusFeature/CampusFeature'
import { Careers } from './components/Careers/Careers'
import { EmergencyInfo } from './components/EmergencyInfo/EmergencyInfo'
import { Hero } from './components/Hero/Hero'
import { MentalHealthFeature } from './components/MentalHealthFeature/MentalHealthFeature'
import { PatientResources } from './components/PatientResources/PatientResources'
import { QuickLinks } from './components/QuickLinks/QuickLinks'
import { ServicesDirectory } from './components/ServicesDirectory/ServicesDirectory'
import { SiteFooter } from './components/SiteFooter/SiteFooter'
import { SiteHeader } from './components/SiteHeader/SiteHeader'
import { SkipLink } from './components/SkipLink/SkipLink'
import { Statement } from './components/Statement/Statement'
import { Testimonials } from './components/Testimonials/Testimonials'

export default function App() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Hero />
        <QuickLinks />
        <Statement />
        <CampusFeature />
        <ServicesDirectory />
        <MentalHealthFeature />
        <Testimonials />
        <EmergencyInfo />
        <Careers />
        <PatientResources />
      </main>
      <SiteFooter />
    </>
  )
}

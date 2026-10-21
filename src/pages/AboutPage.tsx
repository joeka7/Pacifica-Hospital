import { AboutApproach } from '../components/About/AboutApproach'
import { AboutClosing } from '../components/About/AboutClosing'
import { AboutHero } from '../components/About/AboutHero'
import { AboutIntro } from '../components/About/AboutIntro'
import { AboutMissionVision } from '../components/About/AboutMissionVision'
import { AboutPeople } from '../components/About/AboutPeople'
import { AboutValues } from '../components/About/AboutValues'
import { Breadcrumb } from '../components/Breadcrumb/Breadcrumb'
import { SiteFooter } from '../components/SiteFooter/SiteFooter'
import { SiteHeader } from '../components/SiteHeader/SiteHeader'
import { SkipLink } from '../components/SkipLink/SkipLink'
import { aboutMeta, breadcrumb } from '../content/about'
import { links } from '../content/links'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import styles from './AboutPage.module.css'

export function AboutPage() {
  useDocumentMeta(aboutMeta)

  return (
    <div className={styles.page}>
      <SkipLink />
      <SiteHeader currentPath={links.aboutPage.href} />
      <main id="main" tabIndex={-1}>
        <Breadcrumb items={breadcrumb} />
        <AboutHero />
        <AboutIntro />
        <AboutMissionVision />
        <AboutValues />
        <AboutPeople />
        <AboutApproach />
        <AboutClosing />
      </main>
      <SiteFooter />
    </div>
  )
}

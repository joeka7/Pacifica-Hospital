import { aboutClosing } from '../../content/about'
import { PageClosing } from '../PageClosing/PageClosing'

export function AboutClosing() {
  return (
    <PageClosing
      headingId="about-closing-heading"
      heading={aboutClosing.heading}
      body={aboutClosing.body}
      primaryAction={aboutClosing.primaryAction}
      secondaryAction={aboutClosing.secondaryAction}
      contacts={aboutClosing.contacts}
    />
  )
}

import { HiCheckCircle } from 'react-icons/hi'
import Container from '../layouts/Container.jsx'
import SectionTitle from './SectionTitle.jsx'
import { siteConfig } from '../data/siteConfig.js'

export default function About() {
  const { about } = siteConfig

  return (
    <section id="about" className="py-24 bg-bone">
      <Container>
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="order-2 md:order-1">
            <SectionTitle eyebrow={about.eyebrow} heading={about.heading} />
            <p className="mt-6 text-slate leading-relaxed">{about.body}</p>
            <ul className="mt-8 space-y-4">
              {about.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <HiCheckCircle className="text-pine text-xl shrink-0 mt-0.5" />
                  <span className="text-ink/80">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-pine to-ink shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center text-white/40 font-mono text-sm">
                {about.imageAlt}
              </div>
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
                <p className="text-white text-sm font-medium">
                  Replace this block with a real photo of your team or workspace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

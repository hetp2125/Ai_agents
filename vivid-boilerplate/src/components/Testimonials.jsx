import { HiStar } from 'react-icons/hi'
import Container from '../layouts/Container.jsx'
import SectionTitle from './SectionTitle.jsx'
import { siteConfig } from '../data/siteConfig.js'

export default function Testimonials() {
  const { testimonials } = siteConfig

  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle eyebrow={testimonials.eyebrow} heading={testimonials.heading} align="center" />

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.items.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-bone p-7 shadow-sm transition duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex gap-1 text-ember">
                {Array.from({ length: 5 }).map((_, i) => (
                  <HiStar key={i} />
                ))}
              </div>
              <p className="mt-4 text-ink/80 text-sm leading-relaxed">“{t.quote}”</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pine/20 flex items-center justify-center text-pine font-semibold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-slate">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

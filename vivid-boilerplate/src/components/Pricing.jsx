import { HiCheck } from 'react-icons/hi'
import Container from '../layouts/Container.jsx'
import SectionTitle from './SectionTitle.jsx'
import Button from './Button.jsx'
import { siteConfig } from '../data/siteConfig.js'

export default function Pricing() {
  const { pricing } = siteConfig

  return (
    <section id="pricing" className="py-24 bg-bone">
      <Container>
        <SectionTitle eyebrow={pricing.eyebrow} heading={pricing.heading} align="center" />

        <div className="mt-14 grid md:grid-cols-3 gap-6 items-stretch">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-3xl p-8 transition duration-300 hover:-translate-y-2 ${
                tier.highlighted
                  ? 'bg-ink text-white shadow-2xl scale-100 md:scale-105'
                  : 'bg-white text-ink border border-ink/10 shadow-sm'
              }`}
            >
              {tier.highlighted && (
                <span className="self-start mb-4 rounded-full bg-ember px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{tier.name}</h3>
              <p className={`mt-2 text-sm ${tier.highlighted ? 'text-white/60' : 'text-slate'}`}>
                {tier.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                {tier.price !== 'Custom' && <span className="text-lg">₹</span>}
                <span className="text-4xl font-bold font-display">{tier.price}</span>
                <span className={`text-sm ${tier.highlighted ? 'text-white/50' : 'text-slate'}`}>
                  /{tier.period}
                </span>
              </div>

              <ul className="mt-8 space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <HiCheck className={`mt-0.5 shrink-0 ${tier.highlighted ? 'text-ember' : 'text-pine'}`} />
                    <span className={tier.highlighted ? 'text-white/80' : 'text-ink/80'}>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="#contact"
                variant={tier.highlighted ? 'primary' : 'secondary'}
                className="mt-8 w-full"
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

import { HiLightningBolt, HiDeviceMobile, HiShieldCheck, HiSearchCircle, HiSparkles } from 'react-icons/hi'
import Container from '../layouts/Container.jsx'
import SectionTitle from './SectionTitle.jsx'
import { siteConfig } from '../data/siteConfig.js'

const ICONS = {
  zap: HiLightningBolt,
  devices: HiDeviceMobile,
  shield: HiShieldCheck,
  search: HiSearchCircle,
  sparkle: HiSparkles
}

export default function Features() {
  const { features } = siteConfig

  return (
    <section className="py-24 bg-ink">
      <Container>
        <SectionTitle
          eyebrow={features.eyebrow}
          heading={features.heading}
          align="center"
          light
        />

        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-5 gap-5">
          {features.items.map((item) => {
            const Icon = ICONS[item.icon] ?? HiSparkles
            return (
              <div
                key={item.title}
                className="rounded-2xl glass p-6 text-center transition duration-300 hover:bg-white/15"
              >
                <Icon className="mx-auto text-3xl text-ember transition duration-300 hover:rotate-6" />
                <h3 className="mt-4 text-white font-semibold text-sm">{item.title}</h3>
                <p className="mt-2 text-white/60 text-xs leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

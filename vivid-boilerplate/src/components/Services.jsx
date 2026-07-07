import {
  HiCode, HiColorSwatch, HiSearch, HiChatAlt2, HiCloud, HiSupport
} from 'react-icons/hi'
import Container from '../layouts/Container.jsx'
import SectionTitle from './SectionTitle.jsx'
import { siteConfig } from '../data/siteConfig.js'

const ICONS = {
  code: HiCode,
  design: HiColorSwatch,
  seo: HiSearch,
  chat: HiChatAlt2,
  cloud: HiCloud,
  support: HiSupport
}

export default function Services() {
  const { services } = siteConfig

  return (
    <section id="services" className="py-24 bg-white">
      <Container>
        <SectionTitle eyebrow={services.eyebrow} heading={services.heading} align="center" />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.items.map((item) => {
            const Icon = ICONS[item.icon] ?? HiCode
            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-ink/5 bg-bone p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-ember/10 flex items-center justify-center text-ember text-2xl transition duration-300 group-hover:bg-ember group-hover:text-white">
                  <Icon />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

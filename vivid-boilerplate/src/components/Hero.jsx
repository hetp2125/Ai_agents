import { useEffect, useState } from 'react'
import { HiArrowRight } from 'react-icons/hi'
import Container from '../layouts/Container.jsx'
import Button from './Button.jsx'
import { siteConfig } from '../data/siteConfig.js'

// Signature element: this chip literally cycles through different
// brand names on the same layout — proving the template's whole
// premise (one build, any business) instead of a decorative visual.
function BrandSwapChip() {
  const names = siteConfig.brandSwapDemo
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % names.length), 2200)
    return () => clearInterval(id)
  }, [names.length])

  return (
    <div className="inline-flex items-center gap-3 rounded-full glass px-4 py-2">
      <span className="w-2 h-2 rounded-full bg-ember animate-pulse" />
      <span className="font-mono text-xs text-white/70">this template becomes</span>
      <span className="relative h-5 overflow-hidden min-w-[9.5rem]">
        {names.map((name, i) => (
          <span
            key={name}
            className={`absolute inset-0 font-mono text-xs text-white transition-opacity duration-500 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {name}
          </span>
        ))}
      </span>
    </div>
  )
}

export default function Hero() {
  const { hero } = siteConfig

  return (
    <section
      id="home"
      className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-ink overflow-hidden"
    >
      {/* gradient layer */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-ink via-ink to-pine/40"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 -right-40 w-[32rem] h-[32rem] rounded-full bg-ember/20 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8">
            <div className="animate-fadeUp">
              <span className="font-mono text-xs tracking-widest uppercase text-ember">
                {hero.eyebrow}
              </span>
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] max-w-3xl animate-fadeUp">
              {hero.headline}
            </h1>

            <p className="mt-6 text-lg text-white/70 max-w-xl animate-fadeUp">
              {hero.subhead}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4 animate-fadeUp">
              <Button href={hero.primaryCta.href} variant="primary">
                {hero.primaryCta.label}
                <HiArrowRight />
              </Button>
              <Button href={hero.secondaryCta.href} variant="ghost">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          <div className="md:col-span-4 flex md:justify-end">
            <BrandSwapChip />
          </div>
        </div>
      </Container>
    </section>
  )
}

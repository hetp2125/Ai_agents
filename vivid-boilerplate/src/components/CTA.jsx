import Container from '../layouts/Container.jsx'
import Button from './Button.jsx'
import { siteConfig } from '../data/siteConfig.js'

export default function CTA() {
  const { cta } = siteConfig

  return (
    <section className="relative py-24 bg-gradient-to-br from-ember to-ember-dark overflow-hidden">
      <div
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-xl mx-auto">
          {cta.heading}
        </h2>
        <p className="mt-4 text-white/85 max-w-md mx-auto">{cta.subhead}</p>
        <Button href={cta.button.href} variant="secondary" className="mt-8">
          {cta.button.label}
        </Button>
      </Container>
    </section>
  )
}

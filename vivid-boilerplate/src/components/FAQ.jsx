import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import Container from '../layouts/Container.jsx'
import SectionTitle from './SectionTitle.jsx'
import { siteConfig } from '../data/siteConfig.js'

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-ink/10 py-5">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-left"
        aria-expanded={open}
      >
        <span className="font-medium text-ink">{q}</span>
        <HiChevronDown
          className={`text-slate shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? 'grid-rows-[1fr] mt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <p className="overflow-hidden text-sm text-slate leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const { faq } = siteConfig

  return (
    <section className="py-24 bg-bone">
      <Container className="max-w-3xl">
        <SectionTitle eyebrow={faq.eyebrow} heading={faq.heading} align="center" />
        <div className="mt-10">
          {faq.items.map((item) => (
            <FAQItem key={item.q} {...item} />
          ))}
        </div>
      </Container>
    </section>
  )
}

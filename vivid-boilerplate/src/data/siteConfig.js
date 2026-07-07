// ─────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH.
// To turn this into a new client site, edit ONLY this file.
// No component below should ever need to change.
// ─────────────────────────────────────────────────────────────

export const siteConfig = {
  brand: {
    name: 'Acme Digital',
    tagline: 'Agency',
    logoInitial: 'A'
  },

  nav: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' }
  ],

  brandSwapDemo: ['Acme Digital Agency', 'Royal Cafe', 'ABC Dental Clinic', 'Nova Fitness Studio'],

  hero: {
    eyebrow: 'Now booking Q3 projects',
    headline: 'Build a digital presence people actually remember.',
    subhead:
      'We design and ship fast, modern one-page sites for restaurants, clinics, studios, and startups — built once, tailored to you.',
    primaryCta: { label: 'Book a Free Consultation', href: '#contact' },
    secondaryCta: { label: 'See our work', href: '#services' }
  },

  about: {
    eyebrow: 'About us',
    heading: 'A small team that ships fast, opinionated work.',
    body: "We've spent the last decade building web presences for local businesses and growing startups. No bloated agency process — just a focused team, a proven system, and a template built for speed without looking templated.",
    points: [
      'Dedicated project lead from kickoff to launch',
      'Average turnaround of 5 business days',
      'Built on modern, maintainable code — no lock-in'
    ],
    imageAlt: 'Team collaborating around a laptop'
  },

  services: {
    eyebrow: 'What we do',
    heading: 'Services built around your growth',
    items: [
      { icon: 'code', title: 'Web Development', desc: 'Fast, responsive websites built on modern frameworks.' },
      { icon: 'design', title: 'UI Design', desc: 'Interfaces that feel premium and are easy to navigate.' },
      { icon: 'seo', title: 'SEO', desc: 'Get found on Google with technical and content SEO.' },
      { icon: 'chat', title: 'AI Chatbot', desc: 'A 24/7 assistant that captures and qualifies leads.' },
      { icon: 'cloud', title: 'Hosting', desc: 'Reliable, secure hosting with zero-downtime deploys.' },
      { icon: 'support', title: 'Maintenance', desc: 'Ongoing updates so your site stays fast and secure.' }
    ]
  },

  features: {
    eyebrow: 'Why choose us',
    heading: 'Everything you need, nothing you don\u2019t',
    items: [
      { icon: 'zap', title: 'Fast', desc: 'Optimized for sub-second load times.' },
      { icon: 'devices', title: 'Responsive', desc: 'Looks great on every screen size.' },
      { icon: 'shield', title: 'Secure', desc: 'Best-practice security baked in from day one.' },
      { icon: 'search', title: 'SEO Friendly', desc: 'Structured for search engines from the start.' },
      { icon: 'sparkle', title: 'Modern Design', desc: 'Premium visuals that feel current, not templated.' }
    ]
  },

  stats: [
    { value: 250, suffix: '+', label: 'Projects shipped' },
    { value: 98, suffix: '%', label: 'Client satisfaction' },
    { value: 10, suffix: '+', label: 'Years in business' },
    { value: 24, suffix: '/7', label: 'Support available' }
  ],

  pricing: {
    eyebrow: 'Pricing',
    heading: 'Simple plans, no surprises',
    tiers: [
      {
        name: 'Starter',
        price: '2,999',
        period: 'one-time',
        description: 'A single, polished page to get you online fast.',
        features: ['1-page responsive site', 'Basic SEO setup', 'Contact form', '5-day delivery'],
        highlighted: false,
        cta: 'Get started'
      },
      {
        name: 'Professional',
        price: '5,999',
        period: 'one-time',
        description: 'The full digital machine — site, content, and chat.',
        features: ['Everything in Starter', 'Social content pack', 'AI chat assistant', 'Priority support'],
        highlighted: true,
        cta: 'Most popular'
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: 'contact us',
        description: 'Multi-page builds and ongoing dedicated support.',
        features: ['Everything in Professional', 'Multi-page architecture', 'Dedicated account lead', 'Custom integrations'],
        highlighted: false,
        cta: 'Talk to us'
      }
    ]
  },

  testimonials: {
    eyebrow: 'Testimonials',
    heading: 'What clients say',
    items: [
      { quote: 'Our new site paid for itself in the first two weeks. Bookings are up and it finally looks the part.', name: 'Priya Nair', role: 'Owner, Royal Cafe' },
      { quote: 'They handled everything end to end. Fast, clear communication, and the design still gets compliments.', name: 'Arjun Mehta', role: 'Founder, ABC Dental Clinic' },
      { quote: 'The chat assistant alone has captured leads we used to miss overnight. Easy decision to upgrade.', name: 'Sara Iqbal', role: 'Director, Nova Fitness Studio' }
    ]
  },

  faq: {
    eyebrow: 'FAQ',
    heading: 'Common questions',
    items: [
      { q: 'How long does a project take?', a: 'Most one-page builds ship within 5 business days from content handoff.' },
      { q: 'Can I update the site myself later?', a: 'Yes — content lives in a single configuration file, so text and images can be swapped without touching code.' },
      { q: 'Do you offer ongoing support?', a: 'Yes, our maintenance plan covers updates, security patches, and uptime monitoring.' },
      { q: 'What if I need more than one page?', a: 'The Enterprise tier extends this same system into a full multi-page site.' }
    ]
  },

  cta: {
    heading: 'Ready to grow?',
    subhead: 'Book a free consultation and we\u2019ll map out your new site in 20 minutes.',
    button: { label: 'Book a Free Consultation', href: '#contact' }
  },

  contact: {
    eyebrow: 'Contact',
    heading: 'Let\u2019s talk about your project',
    email: 'hello@acmedigital.com',
    phone: '+91 98765 43210',
    address: 'Ahmedabad, Gujarat, India'
  },

  footer: {
    description: 'Premium one-page websites for growing businesses.',
    columns: [
      { title: 'Company', links: [{ label: 'About', href: '#about' }, { label: 'Services', href: '#services' }, { label: 'Pricing', href: '#pricing' }] },
      { title: 'Legal', links: [{ label: 'Privacy Policy', href: '#' }, { label: 'Terms of Service', href: '#' }] }
    ],
    social: ['twitter', 'instagram', 'linkedin'],
    copyright: `\u00A9 ${new Date().getFullYear()} Acme Digital. All rights reserved.`
  }
}

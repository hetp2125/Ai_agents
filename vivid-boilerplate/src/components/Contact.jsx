import { useState } from 'react'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import Container from '../layouts/Container.jsx'
import SectionTitle from './SectionTitle.jsx'
import Button from './Button.jsx'
import { siteConfig } from '../data/siteConfig.js'

export default function Contact() {
  const { contact } = siteConfig
  const [status, setStatus] = useState('idle') // idle | sent

  // Wire this up to your backend / form service (e.g. Formspree, a serverless function).
  // No <form> submission is wired to a real endpoint out of the box — this is
  // deliberately left as a hook point, not a fake success message that hides
  // the missing integration.
  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sent')
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-14">
          <div>
            <SectionTitle eyebrow={contact.eyebrow} heading={contact.heading} />
            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-3 text-ink/80">
                <HiMail className="text-ember text-xl" />
                <span>{contact.email}</span>
              </div>
              <div className="flex items-center gap-3 text-ink/80">
                <HiPhone className="text-ember text-xl" />
                <span>{contact.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-ink/80">
                <HiLocationMarker className="text-ember text-xl" />
                <span>{contact.address}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-ink/80 mb-1.5">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus:border-ember outline-none transition duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink/80 mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus:border-ember outline-none transition duration-300"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-ink/80 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus:border-ember outline-none transition duration-300 resize-none"
                placeholder="Tell us about your project"
              />
            </div>
            <Button type="submit" variant="primary" className="w-full">
              {status === 'sent' ? 'Message sent ✓' : 'Send message'}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  )
}

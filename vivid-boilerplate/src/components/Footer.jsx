import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Container from '../layouts/Container.jsx'
import { siteConfig } from '../data/siteConfig.js'

const SOCIAL_ICONS = { twitter: FaTwitter, instagram: FaInstagram, linkedin: FaLinkedin }

export default function Footer() {
  const { brand, footer } = siteConfig

  return (
    <footer className="bg-ink pt-16 pb-8">
      <Container>
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-xl bg-ember flex items-center justify-center text-white font-display font-bold">
                {brand.logoInitial}
              </span>
              <span className="text-white font-display font-semibold text-lg">{brand.name}</span>
            </div>
            <p className="mt-4 text-white/60 text-sm max-w-xs">{footer.description}</p>
            <div className="mt-5 flex gap-4">
              {footer.social.map((key) => {
                const Icon = SOCIAL_ICONS[key]
                if (!Icon) return null
                return (
                  <a
                    key={key}
                    href="#"
                    aria-label={key}
                    className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition duration-300"
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-sm">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 text-sm hover:text-white transition duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 text-center text-white/40 text-xs">
          {footer.copyright}
        </div>
      </Container>
    </footer>
  )
}

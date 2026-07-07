import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import Container from '../layouts/Container.jsx'
import Button from './Button.jsx'
import { siteConfig } from '../data/siteConfig.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { brand, nav } = siteConfig

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md shadow-lg shadow-black/10' : 'bg-transparent'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <span className="w-9 h-9 rounded-xl bg-ember flex items-center justify-center text-white font-display font-bold">
              {brand.logoInitial}
            </span>
            <span className="text-white font-display font-semibold text-lg">
              {brand.name}
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-white/80 hover:text-white transition duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button href="#contact" variant="primary" className="!px-5 !py-2.5 text-sm">
              Get a Quote
            </Button>
          </div>

          <button
            className="md:hidden text-white text-2xl"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <Container>
          <div className="flex flex-col gap-1 pb-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-white/90 border-b border-white/10 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button href="#contact" variant="primary" className="mt-4 w-full">
              Get a Quote
            </Button>
          </div>
        </Container>
      </div>
    </header>
  )
}

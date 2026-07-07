import { useEffect, useRef, useState } from 'react'
import Container from '../layouts/Container.jsx'
import { siteConfig } from '../data/siteConfig.js'

function StatItem({ value, suffix, label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1200
          const start = performance.now()
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            setCount(Math.floor(progress * value))
            if (progress < 1) requestAnimationFrame(step)
            else setCount(value)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-center">
      <div className="font-mono text-4xl sm:text-5xl font-semibold text-white">
        {count}
        <span className="text-ember">{suffix}</span>
      </div>
      <p className="mt-2 text-sm text-white/60">{label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-20 bg-pine">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {siteConfig.stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  )
}

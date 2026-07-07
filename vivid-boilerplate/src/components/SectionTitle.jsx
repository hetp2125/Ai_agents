export default function SectionTitle({ eyebrow, heading, align = 'left', light = false }) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <span className="font-mono text-xs tracking-widest uppercase text-ember">
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 text-3xl sm:text-4xl font-bold leading-tight ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {heading}
      </h2>
    </div>
  )
}

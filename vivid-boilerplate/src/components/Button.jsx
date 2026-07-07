export default function Button({
  children,
  href,
  variant = 'primary', // 'primary' | 'secondary' | 'ghost'
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-none'

  const variants = {
    primary:
      'bg-ember text-white hover:bg-ember-dark hover:scale-105 shadow-lg shadow-ember/20',
    secondary:
      'bg-white text-ink border border-ink/10 hover:-translate-y-0.5 hover:shadow-md',
    ghost:
      'text-white/90 hover:text-white border border-white/20 hover:border-white/40'
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

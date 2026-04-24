 interface SectionHeaderProps {
  eyebrow?: string
  title: string
  intro?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({ eyebrow, title, intro, align = 'left' }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">{eyebrow}</p>
      )}
      <h2 className="text-foreground">{title}</h2>
      {intro && <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">{intro}</p>}
    </div>
  )
}
import { Check } from 'lucide-react'

interface TechFeatureBlockProps {
  eyebrow?: string
  title: string
  body: string
  image: string
  reverse?: boolean
  bullets?: string[]
}

export default function TechFeatureBlock({ eyebrow, title, body, image, reverse, bullets }: TechFeatureBlockProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container-wide">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted">
            <img
              src={image}
              alt={`${title} — technologie illustratie`}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">{eyebrow}</p>
            )}
            <h2 className="text-foreground">{title}</h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">{body}</p>
            {bullets && bullets.length > 0 && (
              <ul className="mt-6 space-y-3">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface HeroSectionProps {
  title: string
  subtitle?: string
  image: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  align?: 'left' | 'center'
}

export default function HeroSection({
  title,
  subtitle,
  image,
  primaryCta,
  secondaryCta,
  align = 'left',
}: HeroSectionProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  return (
    <section id="section-hero" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Elektrische sloep varend op zonne-energie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/50 to-secondary/20" />
      </div>

      <div className="relative container-wide py-24 md:py-40 lg:py-48">
        <div className={`flex flex-col max-w-2xl ${alignClass}`}>
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground bg-accent/95 px-3 py-1.5 rounded-full inline-block mb-6">
            Elektrisch varen
          </p>
          <h1 className="text-primary-foreground">{title}</h1>
          {subtitle && (
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-xl">
              {subtitle}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  id="btn-hero-primary"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground text-base font-medium hover:bg-background hover:text-primary transition-colors duration-200"
                >
                  {primaryCta.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  id="btn-hero-secondary"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg border border-primary-foreground/40 text-primary-foreground text-base font-medium hover:bg-primary-foreground hover:text-secondary transition-colors duration-200"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
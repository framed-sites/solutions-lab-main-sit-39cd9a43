import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
  title: string
  subtitle?: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  background?: string
}

export default function CTASection({ title, subtitle, primaryCta, secondaryCta, background }: CTASectionProps) {
  return (
    <section id="section-cta" className="relative overflow-hidden my-20 md:my-32">
      <div className="container-wide">
        <div className="relative rounded-lg overflow-hidden">
          {background ? (
            <>
              <img src={background} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-secondary/85" />
            </>
          ) : (
            <div className="absolute inset-0 bg-secondary" />
          )}

          <div className="relative px-6 py-16 md:px-16 md:py-24 text-center max-w-3xl mx-auto">
            <h2 className="text-primary-foreground">{title}</h2>
            {subtitle && <p className="mt-5 text-lg text-primary-foreground/90 leading-relaxed">{subtitle}</p>}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-background hover:text-primary transition-colors duration-200"
              >
                {primaryCta.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg border border-primary-foreground/40 text-primary-foreground font-medium hover:bg-primary-foreground hover:text-secondary transition-colors duration-200"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

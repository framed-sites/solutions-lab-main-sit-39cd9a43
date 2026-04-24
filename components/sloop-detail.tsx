import Link from 'next/link'
import { ArrowLeft, Check } from 'lucide-react'
import SpecCard from './spec-card'
import Gallery from './gallery'
import CTASection from './cta-section'

interface SloopDetailProps {
  sloop: {
    slug: string
    name: string
    tagline: string
    heroImage: string
    gallery: string[]
    description: string[]
    specs: { label: string; value: string; icon?: string }[]
    features: string[]
    priceFrom?: string
  }
}

export default function SloopDetail({ sloop }: SloopDetailProps) {
  return (
    <>
      {/* Hero */}
      <section id="section-sloop-hero" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={sloop.heroImage} alt={`${sloop.name} elektrische sloep op zonne-energie`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/50 to-secondary/10" />
        </div>
        <div className="relative container-wide py-24 md:py-40">
          <Link
            href="/beschikbare-sloepen"
            className="inline-flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground text-sm font-medium transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Terug naar overzicht
          </Link>
          <h1 className="text-primary-foreground max-w-2xl">{sloop.name}</h1>
          <p className="mt-5 text-lg md:text-xl text-primary-foreground/90 max-w-2xl leading-relaxed">{sloop.tagline}</p>
        </div>
      </section>

      {/* Specs + Description */}
      <section id="section-sloop-content" className="py-20 md:py-32">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Specificaties</p>
              <h2 className="text-foreground mb-8">In één oogopslag</h2>
              <SpecCard specs={sloop.specs} />
              {sloop.priceFrom && (
                <p className="mt-6 text-sm text-muted-foreground">
                  Prijs vanaf <span className="font-semibold text-foreground">{sloop.priceFrom}</span>
                </p>
              )}
            </div>

            <div className="lg:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Beschrijving</p>
              <h2 className="text-foreground mb-8">Over de {sloop.name}</h2>
              <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                {sloop.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {sloop.features.length > 0 && (
                <div className="mt-10">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-5">Inbegrepen</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {sloop.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {sloop.gallery.length > 0 && (
        <section id="section-sloop-gallery" className="py-20 md:py-32 bg-muted">
          <div className="container-wide">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Impressie</p>
            <h2 className="text-foreground mb-10">{sloop.name} in beeld</h2>
            <Gallery images={sloop.gallery} alt={`${sloop.name} impressie`} />
          </div>
        </section>
      )}

      <CTASection
        title="Kom de sloep zelf ervaren"
        subtitle="Plan een vrijblijvende afspraak en ontdek hoe het is om geruisloos te varen op zonne-energie."
        primaryCta={{ label: 'Neem contact op', href: '/contact' }}
        secondaryCta={{ label: 'Bekijk alle modellen', href: '/beschikbare-sloepen' }}
      />
    </>
  )
}
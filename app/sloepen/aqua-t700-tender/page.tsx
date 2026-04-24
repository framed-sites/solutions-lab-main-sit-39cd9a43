 import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Ruler, Users, Battery, Sun, Zap, Palette } from 'lucide-react'
import CtaSection from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Aqua T700 Tender — Elektrisch Varen Zonder Laden',
  description: 'Het topmodel: luxe 6,90 meter tender met royale ruimte, stijlvol design en zonnedek dat zelfvoorzienend varen mogelijk maakt.',
  openGraph: {
    title: 'Aqua T700 Tender — Elektrisch Varen Zonder Laden',
    description: 'Topmodel 7 meter tender, royale ruimte, zonnedak voor zelfvoorzienend varen.',
    type: 'article',
  },
}

const specs = [
  { icon: Ruler, label: 'Lengte', value: '6,90 m' },
  { icon: Users, label: 'Capaciteit', value: '8 personen' },
  { icon: Sun, label: 'Zonnepaneel vermogen', value: '450 Wp' },
  { icon: Battery, label: 'Accucapaciteit', value: '20 / 40 / 60 kWh' },
  { icon: Zap, label: 'Aandrijving', value: 'Elektra 6 – 15 kW' },
  { icon: Palette, label: 'Kleur', value: 'Naar keuze' },
]

const features = [
  'Luxe 8-persoons tendersloep met unieke uitstraling',
  'Ontworpen door de gerenommeerde ontwerpers van Jeanneau',
  'Ruim zwemplateau met ge&iuml;ntegreerde zwemtrap',
  'Gezellige rondzit en zonnedekken voor- en achterop',
  'Doorvoer voor tafelpoot in zonnedek voor drinken binnen handbereik',
  'Standaard ladekastje, mogelijkheid tot koelkast aan boord',
  'Inclusief 2 kW walstroom lader voor langere tochten',
]

const gallery = [
  '/images/sloepen/aqua-t700-tender/gallery-1.jpg',
  '/images/sloepen/aqua-t700-tender/gallery-2.jpg',
  '/images/sloepen/aqua-t700-tender/gallery-3.jpg',
  '/images/sloepen/aqua-t700-tender/gallery-4.jpg',
  '/images/sloepen/aqua-t700-tender/gallery-5.jpg',
]

export default function AquaT700TenderPage() {
  return (
    <main>
      <section id="hero" className="relative">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          <Image
            src="/images/sloepen/aqua-t700-tender/hero.jpg"
            alt="Aqua T700 Tender elektrische sloep op rustig water"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
        </div>
        <div className="container-wide -mt-32 relative z-10">
          <div className="bg-card border border-border rounded-lg shadow-sm p-8 md:p-12">
            <Link href="/beschikbare-sloepen" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 mb-6">
              <ArrowLeft className="h-4 w-4" />
              Terug naar overzicht
            </Link>
            <h1 className="mb-4">Aqua T700 Tender</h1>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Het topmodel van 6,90 meter: ruim, stijlvol, comfortabel en strak gelijnd. Ontworpen voor zelfvoorzienend varen met een royaal zonnedek en krachtig accupakket.
            </p>
          </div>
        </div>
      </section>

      <section id="specificaties" className="py-20 md:py-32">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <h2 className="mb-4">Specificaties</h2>
            <p className="text-muted-foreground">
              Compleet uitgerust met walstroom lader, ruim accupakket en een royaal zonnedek.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((spec) => {
              const Icon = spec.icon
              return (
                <div key={spec.label} className="border border-border rounded-lg p-6 bg-card shadow-sm transition-shadow duration-200 hover:shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-md bg-accent text-accent-foreground flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm text-muted-foreground">{spec.label}</span>
                  </div>
                  <p className="text-xl font-semibold text-foreground">{spec.value}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="beschrijving" className="py-20 md:py-32 bg-muted">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <h2 className="mb-6">Beschrijving</h2>
            <div className="space-y-5 text-foreground leading-relaxed">
              <p>
                De Aqua24 T700 is een luxe, zeer ruime 8-persoons tendersloep met uitstraling. Ruim, stijlvol, comfortabel en strak gelijnd. De tender is zeer stabiel en makkelijk handelbaar. Ontworpen door de gerenommeerde ontwerpers van Jeanneau, biedt deze boot het perfecte evenwicht tussen stijl, comfort en prestaties.
              </p>
              <p>
                Met een handig en ruim zwemplateau, een ge&iuml;ntegreerde zwemtrap en aan beide zijdes van de bun ruime traptredes is aan boord komen kinderspel.
              </p>
              <p>
                Eenmaal aan boord is de T700 erg ruim en comfortabel ingedeeld. Met de luxe console en comfortabele zit voelt u zich als de koning op het water, terwijl uw gasten genieten van de gezellige rondzit, of van een zonnedek voorin en achterop de boot. In het zonnedek is een doorvoer gemaakt voor de tabelpoot, zodat u uw drinken binnen handbereik kan houden.
              </p>
              <p className="text-muted-foreground">
                Standaard heeft de tender al een ladekastje en er is mogelijkheid tot een koelkast aan boord. Vanwege het grote formaat van de sloep leveren we deze standaard met een 2 kW walstroom lader, zodat u ook tijdens langere meerdaagse vaartochten zeker kunt zijn van voldoende stroom aan boord. De boot is in meerdere kleuren leverbaar; dit geldt ook voor de kussenset en vloerdelen. Met veel opbergruimte en zitmogelijkheden is dit de ultieme familieboot.
              </p>
            </div>
          </div>
          <div>
            <h3 className="mb-6">Kenmerken</h3>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: feature }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="impressie" className="py-20 md:py-32">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <h2 className="mb-4">Impressie</h2>
            <p className="text-muted-foreground">Beelden van de Aqua T700 Tender op het water.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="col-span-2 row-span-2 relative aspect-square rounded-lg overflow-hidden">
              <Image src={gallery[0]} alt="Aqua T700 Tender zijaanzicht" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            {gallery.slice(1).map((src, i) => (
              <div key={src} className="relative aspect-square rounded-lg overflow-hidden">
                <Image src={src} alt={`Aqua T700 Tender impressie ${i + 2}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Interesse in de Aqua T700 Tender?"
        description="Plan een proefvaart en ontdek zelf hoe zelfvoorzienend varen op zonne-energie voelt."
        primaryCta={{ label: 'Neem contact op', href: '/contact' }}
        secondaryCta={{ label: 'Bekijk alle sloepen', href: '/beschikbare-sloepen' }}
      />
    </main>
  )
}
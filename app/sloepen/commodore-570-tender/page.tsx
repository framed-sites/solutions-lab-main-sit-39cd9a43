import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, Ruler, Users, Sun, Battery, Zap, Palette, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commodore 570 Tender — Elektrische sloep op zonne-energie',
  description: 'Luxe tender met goede vaareigenschappen en ruim vaarbereik. Uitgerust met 525 Wp zonnepanelen, 20 kWh accu en elektrische aandrijving van 6-15 kW.',
}

const specs = [
  { icon: Ruler, label: 'Lengte', value: '5,70 m' },
  { icon: Users, label: 'Capaciteit', value: '6 personen' },
  { icon: Sun, label: 'Zonnepaneel vermogen', value: '525 Wp' },
  { icon: Battery, label: 'Accucapaciteit', value: '20 kWh' },
  { icon: Zap, label: 'Aandrijving', value: 'Elektra 6 - 15 kW' },
  { icon: Palette, label: 'Kleur', value: 'Blauw / keuze' },
]

const features = [
  'Zonnedek standaard',
  'Volledige luxe kussen-set',
  'HPL teak vloer',
  'Nette houten tafel',
  'Groot RVS stuurwiel',
  'Stijlvol zwemplateau',
  'Handige app voor accu-status',
  'Ruime opbergmogelijkheden',
]

const gallery = [
  '/images/sloepen/commodore-570-tender/gallery-1.jpg',
  '/images/sloepen/commodore-570-tender/gallery-2.jpg',
  '/images/sloepen/commodore-570-tender/gallery-3.jpg',
  '/images/sloepen/commodore-570-tender/gallery-4.jpg',
  '/images/sloepen/commodore-570-tender/gallery-5.jpg',
  '/images/sloepen/commodore-570-tender/gallery-6.jpg',
]

export default function CommodorePage() {
  return (
    <main>
      {/* Hero */}
      <section id="hero" className="pt-28 md:pt-36">
        <div className="container-wide">
          <Link href="/beschikbare-sloepen" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 mb-8">
            <ChevronLeft className="w-4 h-4" /> Terug naar overzicht
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-sm tracking-wide uppercase text-primary mb-4">Commodore</p>
              <h1 className="mb-6">Commodore 570 Tender</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Een luxe uitgevoerde sloep met goede vaareigenschappen en een zeer grote range qua vaarbereik.
                Door de strakke en scherpe lijnen beweegt de boot soepel door het water.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-medium hover:bg-secondary transition-colors duration-200"
              >
                Neem contact op
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/sloepen/commodore-570-tender/hero.jpg"
                alt="Commodore 570 Tender elektrische sloep op kalm water"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section id="specificaties" className="py-20 md:py-28">
        <div className="container-wide">
          <h2 className="mb-12">Specificaties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((spec) => {
              const Icon = spec.icon
              return (
                <div key={spec.label} className="bg-card border border-border rounded-lg p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-accent-foreground shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{spec.label}</p>
                    <p className="font-semibold">{spec.value}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="impressie" className="py-20 md:py-28 bg-muted">
        <div className="container-wide">
          <h2 className="mb-12">Impressie</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((src, i) => (
              <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                <Image src={src} alt={`Commodore 570 Tender impressie ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description + Features */}
      <section id="beschrijving" className="py-20 md:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="mb-8">Beschrijving</h2>
              <div className="flex flex-col gap-6 text-muted-foreground leading-relaxed">
                <p>
                  Met een vol accupakket in combinatie met de zonnepanelen is het vaarbereik tientallen uren.
                  Standaard is de sloep uitgerust met een keur aan extra's, zoals een zonnedek, een volledige
                  luxe kussen-set, een HPL teak vloer, een nette houten tafel, en groot uitgevoerd RVS stuurwiel.
                </p>
                <p>
                  De sloep is efficiënt ingedeeld met mooie rondzit en ruime opbergmogelijkheden. Via het
                  stijlvolle zwemplateau en de handige opstap bent u in een oogwenk in en uit het water. Een
                  ideale boot om met vrienden of met het gezin een dagje onbezorgd eropuit te kunnen gaan en
                  te ontspannen op het water.
                </p>
                <p>
                  De sloep is standaard voorzien van een set beloopbare en krachtige zonnepanelen welke het
                  ingebouwde accupakket met maar liefst 525W (Pmax) aan vermogen kan volladen. Met het grote
                  accupakket en de handige app met inzicht in de accu-status heeft u geen enkele zorg meer
                  over gebrek aan vaarbereik.
                </p>
              </div>
            </div>
            <div>
              <h3 className="mb-6">Standaard uitrusting</h3>
              <ul className="flex flex-col gap-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20 md:py-32 bg-secondary text-secondary-foreground">
        <div className="container-narrow text-center">
          <h2 className="text-secondary-foreground mb-6">Interesse in de Commodore 570 Tender?</h2>
          <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
            Kom de sloep bekijken en ervaar zelf het stille vaarplezier op zonne-energie.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-background text-foreground px-7 py-3.5 rounded-lg font-medium hover:bg-accent transition-colors duration-200"
          >
            Neem contact op
          </Link>
        </div>
      </section>
    </main>
  )
}
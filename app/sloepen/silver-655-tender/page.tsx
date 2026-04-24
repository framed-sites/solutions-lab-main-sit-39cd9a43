import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Ruler, Users, Battery, Sun, Zap, Palette } from 'lucide-react'
import CtaSection from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Silver 655 Tender — Elektrisch Varen Zonder Laden',
  description: 'Premium 6,50 meter tender met hoogwaardige afwerking, ruimte voor 7 à 8 personen en krachtige elektromotor. Stil en duurzaam vaargenot op zonne-energie.',
  openGraph: {
    title: 'Silver 655 Tender — Elektrisch Varen Zonder Laden',
    description: 'Premium tender met hoogwaardige afwerking, ruim vaarcomfort en krachtige elektromotor.',
    type: 'article',
  },
}

const specs = [
  { icon: Ruler, label: 'Lengte', value: '6,50 m' },
  { icon: Users, label: 'Capaciteit', value: '7 – 8 personen' },
  { icon: Sun, label: 'Zonnepaneel vermogen', value: '450 Wp' },
  { icon: Battery, label: 'Accucapaciteit', value: '20 / 40 kWh' },
  { icon: Zap, label: 'Aandrijving', value: 'Elektra 6 – 15 kW' },
  { icon: Palette, label: 'Kleur', value: 'Naar keuze' },
]

const features = [
  'Ruime sloep van 6,50 m lang en 2,30 m breed',
  'Hoogwaardige afwerking en sportief karakter',
  'Moderne romplijn zorgt voor uitstekende stabiliteit',
  'Standaard geleverd met zonnedek, tafel en luxe RVS stuurwiel',
  'Leverbaar in diverse kleuren en afwerkingen',
  'Inclusief 2 kW walstroom lader voor meerdaagse tochten',
]

const gallery = [
  '/images/sloepen/silver-655-tender/gallery-1.jpg',
  '/images/sloepen/silver-655-tender/gallery-2.jpg',
  '/images/sloepen/silver-655-tender/gallery-3.jpg',
  '/images/sloepen/silver-655-tender/gallery-4.jpg',
  '/images/sloepen/silver-655-tender/gallery-5.jpg',
]

export default function Silver655TenderPage() {
  return (
    <main>
      <section id="hero" className="relative">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          <Image
            src="/images/sloepen/silver-655-tender/hero.jpg"
            alt="Silver 655 Tender elektrische sloep op stil water"
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
            <h1 className="mb-4">Silver 655 Tender</h1>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Een ware blikvanger. Premium tender met zilverglans afwerking, riante kuip en elegante lijnen. Pure luxe op het water, stil aangedreven door zonne-energie.
            </p>
          </div>
        </div>
      </section>

      <section id="specificaties" className="py-20 md:py-32">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <h2 className="mb-4">Specificaties</h2>
            <p className="text-muted-foreground">
              Compleet uitgerust met ge&iuml;ntegreerde zonnepanelen, een ruim accupakket en extra walstroom lader.
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
                Een ware blikvanger, zo kunnen we dit model wel omschrijven, de Silver 655 Tender. Een zeer ruime sloep van het merk Silver Yacht. De boot is maar liefst 6,50 meter lang en ruim 2,30 meter breed.
              </p>
              <p>
                De SilverYacht 655 Tender is een sloep met hoogwaardige afwerking en sportief karakter mede door de moderne romplijn. De kuip van deze boot is groot genoeg om met 7 &agrave; 8 mensen te vertoeven. De SilverYacht 655 Tender is ook een zeer stabiele sloep.
              </p>
              <p>
                Deze boot straalt pure luxe uit als het gaat over de afwerking, de extra&apos;s en de erg mooie achterzijde. Leverbaar in verschillende kleuren met legio mogelijkheden qua afwerking en opties. Standaard geleverd met zonnedek, tafel en luxe RVS stuurwiel.
              </p>
              <p className="text-muted-foreground">
                Vanwege het grote formaat van deze boot en het hogere gewicht, leveren we de sloep inclusief een 2 kW walstroom lader. Zo kunt u ook tijdens de langere meerdaagse vaartochten zeker zijn van voldoende stroom aan boord.
              </p>
            </div>
          </div>
          <div>
            <h3 className="mb-6">Kenmerken</h3>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground leading-relaxed">{feature}</span>
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
            <p className="text-muted-foreground">Beelden van de Silver 655 Tender in haar element.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="col-span-2 row-span-2 relative aspect-square rounded-lg overflow-hidden">
              <Image src={gallery[0]} alt="Silver 655 Tender zijaanzicht" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            {gallery.slice(1).map((src, i) => (
              <div key={src} className="relative aspect-square rounded-lg overflow-hidden">
                <Image src={src} alt={`Silver 655 Tender impressie ${i + 2}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Interesse in de Silver 655 Tender?"
        description="Kom langs voor een proefvaart of bespreek uw wensen rond afwerking, kleur en extra&apos;s."
        primaryCta={{ label: 'Neem contact op', href: '/contact' }}
        secondaryCta={{ label: 'Bekijk alle sloepen', href: '/beschikbare-sloepen' }}
      />
    </main>
  )
}
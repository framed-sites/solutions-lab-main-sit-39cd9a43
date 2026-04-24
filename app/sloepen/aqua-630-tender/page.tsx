import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Ruler, Users, Battery, Sun, Zap, Palette } from 'lucide-react'
import CtaSection from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Aqua 630 Tender — Elektrisch Varen Zonder Laden',
  description: 'Elegante 6,20 meter tender met luxe afwerking, ruime kuip voor 8 personen en uitgebreid zonnepaneel-dek. Stil en duurzaam varen op zonne-energie.',
  openGraph: {
    title: 'Aqua 630 Tender — Elektrisch Varen Zonder Laden',
    description: 'Elegante 6,20 meter tender met luxe afwerking en uitgebreid zonnepaneel-dek.',
    type: 'article',
  },
}

const specs = [
  { icon: Ruler, label: 'Lengte', value: '6,20 m' },
  { icon: Users, label: 'Capaciteit', value: '8 personen' },
  { icon: Sun, label: 'Zonnepaneel vermogen', value: '600 Wp' },
  { icon: Battery, label: 'Accucapaciteit', value: '20 / 40 kWh' },
  { icon: Zap, label: 'Aandrijving', value: 'Elektrisch 6 – 15 kW' },
  { icon: Palette, label: 'Kleur', value: 'Blauw / naar keuze' },
]

const features = [
  'Modern, sportief design met ruime en diepe kuip',
  'Standaard voorzien van tafel, bekerhouders en groot stuurwiel',
  'Voorbereiding voor koelkast en optioneel toilet aanwezig',
  'Brede romp zorgt voor uitstekende stabiliteit en koersvastheid',
  'Comfortabele hoge zit met goede beschutting',
  'Ideale gezinstender met luxe uitstraling',
]

const gallery = [
  '/images/sloepen/aqua-630-tender/zijaanzicht.jpg',
  '/images/sloepen/aqua-630-tender/interieur.jpg',
  '/images/sloepen/aqua-630-tender/achterdek.jpg',
  '/images/sloepen/aqua-630-tender/detail.jpg',
  '/images/sloepen/aqua-630-tender/varend.jpg',
]

export default function Aqua630TenderPage() {
  return (
    <main>
      <section id="hero" className="relative">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          <Image
            src="/images/sloepen/aqua-630-tender/hero.jpg"
            alt="Aqua 630 Tender elektrische sloep op kalm water"
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
            <h1 className="mb-4">Aqua 630 Tender</h1>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Een stijlvolle 6,20 meter tender met moderne lijnen, ruime kuip voor acht personen en een krachtig zonnedek. Ontworpen voor stil en duurzaam vaargenot.
            </p>
          </div>
        </div>
      </section>

      <section id="specificaties" className="py-20 md:py-32">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <h2 className="mb-4">Specificaties</h2>
            <p className="text-muted-foreground">
              Een compleet pakket: ge&iuml;ntegreerde zonnepanelen, robuust accupakket en fluisterstille elektromotor.
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
                De Aqua 630 Tender is het aanzien meer dan waard. Het heeft een modern, sportief design met een ruime en diepe kuip waardoor u met 8 personen goed beschut kan zitten. Een stabiele boot met comfortabele hoge zit.
              </p>
              <p>
                Naast de standaard bijgeleverde zaken zoals een tafel, bekerhouders en een groot stuurwiel zijn verschillende luxe opties mogelijk zoals het laten plaatsen van een koelkast en tevens is er een voorbereiding voor een eventueel toilet aanwezig.
              </p>
              <p>
                Met haar uitmuntende vaareigenschappen, uniek design en goede afwerking is het de ideale tender om met het gezin mee te varen. Door het brede formaat en goede gewichtsverdeling ligt de boot lekker stabiel in het water.
              </p>
              <p className="text-muted-foreground">
                Vraag naar de mogelijkheden voor wat betreft opties en persoonlijke wensen.
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
            <p className="text-muted-foreground">Een indruk van de Aqua 630 Tender op het water.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="col-span-2 row-span-2 relative aspect-square rounded-lg overflow-hidden">
              <Image src={gallery[0]} alt="Aqua 630 Tender zijaanzicht" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            {gallery.slice(1).map((src, i) => (
              <div key={src} className="relative aspect-square rounded-lg overflow-hidden">
                <Image src={src} alt={`Aqua 630 Tender impressie ${i + 2}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Interesse in de Aqua 630 Tender?"
        description="Neem contact met ons op voor een vrijblijvend gesprek over opties, persoonlijke wensen en een proefvaart."
        primaryCta={{ label: 'Neem contact op', href: '/contact' }}
        secondaryCta={{ label: 'Bekijk alle sloepen', href: '/beschikbare-sloepen' }}
      />
    </main>
  )
}
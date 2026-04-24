import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, Ruler, Users, Sun, Battery, Zap, Palette, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'QWEST S580 — Aluminium elektrische sloep op zonne-energie',
  description: 'Moderne aluminium sloep met uitstekende prijs-kwaliteitverhouding. 580 Wp zonnepanelen, 20 of 40 kWh accu, onderhoudsvrij en koersvast.',
}

const specs = [
  { icon: Ruler, label: 'Lengte', value: '5,80 m' },
  { icon: Users, label: 'Capaciteit', value: '6 personen' },
  { icon: Sun, label: 'Zonnepaneel vermogen', value: '580 Wp' },
  { icon: Battery, label: 'Accucapaciteit', value: '20 / 40 kWh' },
  { icon: Zap, label: 'Aandrijving', value: 'Elektra 6 - 15 kW' },
  { icon: Palette, label: 'Kleur', value: 'Aluminium / keuze' },
]

const features = [
  'Zo goed als onderhoudsvrij',
  'Weersbestendige materialen',
  'Zelflozend systeem',
  'Strak en koersvast',
  'Geïntegreerde zonnepanelen',
  'Optioneel Flexiteak vloer',
  'Optioneel navigatieverlichting',
  'Optioneel bimini zonnescherm',
]

const gallery = [
  '/images/sloepen/qwest-s580/gallery-1.jpg',
  '/images/sloepen/qwest-s580/gallery-2.jpg',
  '/images/sloepen/qwest-s580/gallery-3.jpg',
  '/images/sloepen/qwest-s580/gallery-4.jpg',
  '/images/sloepen/qwest-s580/gallery-5.jpg',
  '/images/sloepen/qwest-s580/gallery-6.jpg',
]

export default function QwestPage() {
  return (
    <main>
      <section id="hero" className="pt-28 md:pt-36">
        <div className="container-wide">
          <Link href="/beschikbare-sloepen" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 mb-8">
            <ChevronLeft className="w-4 h-4" /> Terug naar overzicht
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-sm tracking-wide uppercase text-primary mb-4">QWEST</p>
              <h1 className="mb-6">QWEST S580</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Het vlaggenschip van QWEST: een moderne aluminium sloep speciaal ontworpen om elektrisch mee
                te varen. Een uitstekende prijs-kwaliteitverhouding en een sloep die tegen een stootje kan.
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
                src="/images/sloepen/qwest-s580/hero.jpg"
                alt="QWEST S580 aluminium elektrische sloep"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

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

      <section id="impressie" className="py-20 md:py-28 bg-muted">
        <div className="container-wide">
          <h2 className="mb-12">Impressie</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((src, i) => (
              <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                <Image src={src} alt={`QWEST S580 impressie ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="beschrijving" className="py-20 md:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="mb-8">Beschrijving</h2>
              <div className="flex flex-col gap-6 text-muted-foreground leading-relaxed">
                <p>
                  De aluminium sloepen van QWEST kenmerken zich door een uitstekende prijs-kwaliteit verhouding.
                  De boten zijn bij uitstek geschikt om aan de kade te laten liggen zonder zorgen over slecht
                  weer of andere onverwachte voorvallen. De boten kunnen prima tegen een stootje en varen onder
                  alle omstandigheden stabiel, strak en koersvast.
                </p>
                <p>
                  De QWEST S580 is het vlaggenschip van dit merk, speciaal ontworpen om elektrisch mee te varen.
                  Het vlakke onderwaterschip zorgt voor minder weerstand dan bij traditionele modellen. Er kan
                  dan ook met relatief weinig vermogen al een vaarsnelheid van 7 à 8 km per uur worden behaald.
                  Dit betekent met de zonnepanelen en het ingebouwde accupakket van wel 20 kWh vele uren
                  vaarplezier.
                </p>
                <p>
                  Uiteraard is deze boot zo goed als onderhoudsvrij in alle opzichten. Een dekzeil of buiskap
                  kan zelfs achterwege blijven door de weersbestendige materialen en het zelflozende systeem.
                  Optioneel kan worden gekozen voor extra luxe zoals een Flexiteak vloer, navigatieverlichting
                  of bimini zonnescherm.
                </p>
              </div>
            </div>
            <div>
              <h3 className="mb-6">Kenmerken</h3>
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

      <section id="cta" className="py-20 md:py-32 bg-secondary text-secondary-foreground">
        <div className="container-narrow text-center">
          <h2 className="text-secondary-foreground mb-6">Interesse in de QWEST S580?</h2>
          <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
            Neem contact met ons op voor een proefvaart of persoonlijk advies.
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
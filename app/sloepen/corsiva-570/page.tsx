import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, Ruler, Users, Sun, Battery, Zap, Palette, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Corsiva 570 — Klassieke elektrische sloep op zonne-energie',
  description: 'Modern vormgegeven overnaadse sloep met klassieke uitstraling. 460 Wp zonnepanelen, 20 kWh accu, plaats voor 6 personen.',
}

const specs = [
  { icon: Ruler, label: 'Lengte', value: '5,60 m' },
  { icon: Users, label: 'Capaciteit', value: '6 personen' },
  { icon: Sun, label: 'Zonnepaneel vermogen', value: '460 Wp' },
  { icon: Battery, label: 'Accucapaciteit', value: '20 kWh' },
  { icon: Zap, label: 'Aandrijving', value: 'Elektra 6 - 12 kW' },
  { icon: Palette, label: 'Kleur', value: 'Blauw / keuze' },
]

const features = [
  'Overnaadse bouw, klassieke uitstraling',
  'Riante doorlopende rondzit',
  'Plaats voor 6 volwassenen',
  'Diverse ruime bergruimtes',
  'Verlaagde vloer met goede rugsteun',
  'Zelflozende kuip',
  'Heerlijk zonnedek',
  'Handige tafel + kussen-set',
]

const gallery = [
  '/images/sloepen/corsiva-570-1.jpg',
  '/images/sloepen/corsiva-570-2.jpg',
  '/images/sloepen/corsiva-570-3.jpg',
  '/images/sloepen/corsiva-570-4.jpg',
  '/images/sloepen/corsiva-570-5.jpg',
  '/images/sloepen/corsiva-570-6.jpg',
]

export default function CorsivaPage() {
  return (
    <main>
      <section id="hero" className="pt-28 md:pt-36">
        <div className="container-wide">
          <Link href="/beschikbare-sloepen" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 mb-8">
            <ChevronLeft className="w-4 h-4" /> Terug naar overzicht
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-sm tracking-wide uppercase text-primary mb-4">Corsiva</p>
              <h1 className="mb-6">Corsiva 570</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Ontdek de Corsiva 570 New Age: een modern vormgegeven overnaadse sloep waardoor de Corsiva
                een klassieke uitstraling heeft. Tijdloos ontwerp, perfect voor stadsgrachten en binnenwateren.
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
                src="/images/sloepen/corsiva-570-hero.jpg"
                alt="Corsiva 570 klassieke elektrische sloep"
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
                <Image src={src} alt={`Foto ${i + 1} van de Corsiva 570`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
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
                  Ontdek de Corsiva 570 New Age: een modern vormgegeven overnaadse sloep waardoor de Corsiva
                  570 een klassieke uitstraling heeft. De riante doorlopende rondzit biedt voldoende ruimte
                  aan 6 volwassenen. In de boot bevinden zich diverse ruime bergruimtes, waardoor spullen
                  niet snel in de weg liggen.
                </p>
                <p>
                  Fijn is dat de 570 een verlaagde vloer heeft. De verlaagde vloer zorgt voor een diepe zit
                  met goede rugsteun. Uiteraard heeft de boot wel een zelflozende kuip zodat eventueel water
                  binnenboord gemakkelijk weer naar buiten loopt.
                </p>
                <p>
                  Standaard leveren wij de boot met een heerlijk zonnedek, een handige tafel en een
                  comfortabele kussen-set. De Corsiva 570 is een sloep die al jarenlang een populaire keuze
                  is als het gaat om uiterlijk, comfort en een deugdelijk merk.
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

      <section id="cta" className="py-20 md:py-32 bg-secondary text-secondary-foreground">
        <div className="container-narrow text-center">
          <h2 className="text-secondary-foreground mb-6">Interesse in de Corsiva 570?</h2>
          <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
            Neem contact met ons op om de sloep te bekijken of een proefvaart in te plannen.
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
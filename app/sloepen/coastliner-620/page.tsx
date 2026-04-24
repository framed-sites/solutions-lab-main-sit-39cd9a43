import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, Ruler, Users, Sun, Battery, Zap, Palette, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Coastliner 620 — Ruime elektrische kustvaarder op zonne-energie',
  description: 'Ruime kustvaarder van 6,22 meter voor tot 8 personen. Elektrisch varen next level, met 600 Wp zonnepanelen en tot 60 kWh accupakket.',
}

const specs = [
  { icon: Ruler, label: 'Lengte', value: '6,22 m' },
  { icon: Users, label: 'Capaciteit', value: '8 personen' },
  { icon: Sun, label: 'Zonnepaneel vermogen', value: '600 Wp' },
  { icon: Battery, label: 'Accucapaciteit', value: '20 / 40 / 60 kWh' },
  { icon: Zap, label: 'Aandrijving', value: 'Elektra 6 - 15 kW' },
  { icon: Palette, label: 'Kleur', value: 'Naar keuze' },
]

const features = [
  'Ruime cabine voor 8 personen',
  'Groot zwemplateau',
  'Geïntegreerde traptreden',
  'Stijlvolle afwerking',
  'Oer-Hollands fabricaat',
  'Mooi zonnedek standaard',
  'Luxe kussen-set inbegrepen',
  'Houten tafel standaard',
]

const gallery = [
  'https://picsum.photos/seed/coastliner-1/800/600',
  'https://picsum.photos/seed/coastliner-2/800/600',
  'https://picsum.photos/seed/coastliner-3/800/600',
  'https://picsum.photos/seed/coastliner-4/800/600',
  'https://picsum.photos/seed/coastliner-5/800/600',
  'https://picsum.photos/seed/coastliner-6/800/600',
]

export default function CoastlinerPage() {
  return (
    <main>
      <section id="hero" className="pt-28 md:pt-36">
        <div className="container-wide">
          <Link href="/beschikbare-sloepen" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 mb-8">
            <ChevronLeft className="w-4 h-4" /> Terug naar overzicht
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-sm tracking-wide uppercase text-primary mb-4">Coastliner</p>
              <h1 className="mb-6">Coastliner 620</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Elektrisch varen op het volgende niveau, en dat nu ook nog eens op zonne-energie. Een sloep die gezien
                mag worden, met zeer ruime afmetingen en plaats voor maar liefst 8 personen.
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
                src="https://picsum.photos/seed/coastliner-hero/1000/750"
                alt="Coastliner 620 elektrische kustvaarder"
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
                <Image src={src} alt={`Coastliner 620 impressie ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
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
                  Met de Coastliner 620 heeft u een sloep die gezien mag worden. De zeer ruime afmetingen, de
                  grote cabine met plaats voor maar liefst 8 personen, het ruime zwemplateau met mooi ontworpen
                  geïntegreerde traptreden — dit alles samen met de stijlvolle afwerking maken deze sloep tot
                  een prachtig schip.
                </p>
                <p>
                  De boot is van oer-Hollands fabricaat. Dat betekent een solide en kwalitatief sterke boot
                  waarmee jarenlang vaarplezier is gegarandeerd. De perfecte combinatie van gemak en luxe.
                  Standaard komt de boot met een mooi zonnedek, een luxe kussen-set en een mooie houten tafel.
                  De romp en het dek kunnen op kleur naar wens worden geleverd.
                </p>
                <p>
                  Nu dus volledig elektrisch en super-de-luxe het water op met deze prachtige ruime sloep, die
                  uiteraard inclusief het grote accupakket, elektrische aandrijving en een krachtige set
                  beloopbare zonnepanelen wordt geleverd. We nodigen u graag uit om eens te komen kijken.
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
          <h2 className="text-secondary-foreground mb-6">Kom de Coastliner 620 bekijken</h2>
          <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
            We nodigen u graag uit voor een bezichtiging en bespreken samen de uitgebreide mogelijkheden.
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
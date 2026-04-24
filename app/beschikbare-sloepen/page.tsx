import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Ruler, Users, Sun, Battery } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Beschikbare sloepen — Elektrisch Varen Zonder Laden',
  description: 'Ontdek onze collectie elektrische sloepen op zonne-energie. Compleet uitgerust geleverd met zonnepanelen, accupakket en elektrische motor.',
  openGraph: {
    title: 'Beschikbare sloepen — elektrisch varen op zonne-energie',
    description: 'Tien modellen duurzame sloepen, compleet uitgerust en klaar voor duurzaam vaarplezier.',
  },
}

const sloepen = [
  {
    name: 'Commodore 570 Tender',
    slug: 'commodore-570-tender',
    length: '5,70 m',
    capacity: '6 personen',
    solar: '525 Wp',
    battery: '20 kWh',
    image: 'https://picsum.photos/seed/commodore570/800/600',
    tagline: 'Luxe tender met klassieke lijnen',
  },
  {
    name: 'Coastliner 620',
    slug: 'coastliner-620',
    length: '6,22 m',
    capacity: '8 personen',
    solar: '600 Wp',
    battery: '20 / 40 / 60 kWh',
    image: 'https://picsum.photos/seed/coastliner620/800/600',
    tagline: 'Elektrisch varen, next level',
  },
  {
    name: 'Aqua 630 Tender',
    slug: 'aqua-630-tender',
    length: '6,20 m',
    capacity: '8 personen',
    solar: '600 Wp',
    battery: '20 / 40 kWh',
    image: 'https://picsum.photos/seed/aqua630/800/600',
    tagline: 'Sportief design, diepe kuip',
  },
  {
    name: 'Silver 655 Tender',
    slug: 'silver-655-tender',
    length: '6,50 m',
    capacity: '7-8 personen',
    solar: '450 Wp',
    battery: '20 / 40 kWh',
    image: 'https://picsum.photos/seed/silver655/800/600',
    tagline: 'Ware blikvanger met luxe afwerking',
  },
  {
    name: 'DOCK 650 Steel',
    slug: 'dock-650-steel',
    length: '6,50 m',
    capacity: '8 personen',
    solar: '1000 Wp',
    battery: '20 / 40 / 60 kWh',
    image: 'https://picsum.photos/seed/dock650/800/600',
    tagline: 'Slagschip van zeewaterbestendig aluminium',
  },
  {
    name: 'QWEST S580',
    slug: 'qwest-s580',
    length: '5,80 m',
    capacity: '6 personen',
    solar: '580 Wp',
    battery: '20 / 40 kWh',
    image: 'https://picsum.photos/seed/qwest580/800/600',
    tagline: 'Moderne aluminium sloep',
  },
  {
    name: 'Corsiva 570',
    slug: 'corsiva-570',
    length: '5,60 m',
    capacity: '6 personen',
    solar: '460 Wp',
    battery: '20 kWh',
    image: 'https://picsum.photos/seed/corsiva570/800/600',
    tagline: 'Klassieke overnaadse sloep',
  },
  {
    name: 'Solara 450',
    slug: 'solara-450',
    length: '4,50 m',
    capacity: '6-7 personen',
    solar: '380 Wp',
    battery: '2,5 / 5 / 7,5 kWh',
    image: 'https://picsum.photos/seed/solara450/800/600',
    tagline: 'Compact, onzinkbaar en onderhoudsvrij',
  },
  {
    name: 'Aqua T700 Tender',
    slug: 'aqua-t700-tender',
    length: '6,90 m',
    capacity: '8 personen',
    solar: '450 Wp',
    battery: '20 / 40 / 60 kWh',
    image: 'https://picsum.photos/seed/aquat700/800/600',
    tagline: 'Ontworpen door Jeanneau-designers',
  },
  {
    name: 'Rinovatio 570',
    slug: 'rinovatio-570',
    length: '5,70 m',
    capacity: '6 personen',
    solar: '500 Wp',
    battery: '20 kWh',
    image: 'https://picsum.photos/seed/rinovatio570/800/600',
    tagline: 'Robuuste aluminium sloep',
  },
]

export default function BeschikbareSloepenPage() {
  return (
    <main>
      {/* Hero */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-muted">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-sm tracking-wide uppercase text-primary mb-4">Onze collectie</p>
            <h1 className="mb-6">Beschikbare sloepen</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Sloepen compleet uitgerust leverbaar, inclusief zonnepanelen, accupakket en elektrische motor.
              Voor elke vaarder en elke vaarstijl een passend model.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section id="intro" className="py-16 md:py-20">
        <div className="container-narrow text-center">
          <h2 className="mb-6">Duurzaam en onbezorgd uitstootvrij varen</h2>
          <p className="text-lg text-muted-foreground">
            Zonder walstroom of stopcontact, maar met volle accu. Elke sloep wordt afgestemd op jouw vaarwensen:
            van frequentie en vaartijd tot snelheid en comfort.
          </p>
        </div>
      </section>

      {/* Sloep Grid */}
      <section id="sloep-grid" className="pb-20 md:pb-32">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sloepen.map((sloep) => (
              <Link
                key={sloep.slug}
                href={`/sloepen/${sloep.slug}`}
                className="group bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-200 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={sloep.image}
                    alt={`${sloep.name} — elektrische sloep op zonne-energie`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div>
                    <h3 className="text-xl mb-1">{sloep.name}</h3>
                    <p className="text-sm text-muted-foreground">{sloep.tagline}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 py-4 border-y border-border">
                    <div className="flex items-center gap-2">
                      <Ruler className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm">{sloep.length}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm">{sloep.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sun className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm">{sloep.solar}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Battery className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm">{sloep.battery}</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium mt-auto">
                    Lees meer <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20 md:py-32 bg-secondary text-secondary-foreground">
        <div className="container-narrow text-center">
          <h2 className="text-secondary-foreground mb-6">Welke sloep past bij jou?</h2>
          <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
            Neem contact met ons op voor persoonlijk advies. Samen kijken we welk model, welk accupakket en
            welke zonnepanelen het beste aansluiten bij jouw vaarwensen.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-background text-foreground px-7 py-3.5 rounded-lg font-medium hover:bg-accent transition-colors duration-200"
          >
            Vraag vrijblijvend advies
          </Link>
        </div>
      </section>
    </main>
  )
}

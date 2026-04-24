import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Sun, Battery, Waves, Leaf, Volume2, Anchor, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Elektrisch Varen Zonder Laden — Sloepen op zonne-energie',
  description: 'Ervaar emissievrij en geluidloos varen op zonne-energie. Duurzame sloepen met geïntegreerde zonnepanelen, volledig uitgerust en klaar voor de toekomst.',
  openGraph: {
    title: 'Elektrisch Varen Zonder Laden',
    description: 'Sloepen op zonne-energie. Ontspannen, ongecompliceerd en zorgeloos het water op.',
    type: 'website',
  },
}

const featuredSloepen = [
  {
    name: 'Commodore 570 Tender',
    slug: 'commodore-570-tender',
    length: '5,70 m',
    image: 'https://picsum.photos/seed/commodore570/800/600',
    description: 'Luxe tender met klassieke lijnen en stille elektrische aandrijving.',
  },
  {
    name: 'Coastliner 620',
    slug: 'coastliner-620',
    length: '6,22 m',
    image: 'https://picsum.photos/seed/coastliner620/800/600',
    description: 'Ruime kustvaarder voor tot 8 personen. Next level elektrisch varen.',
  },
  {
    name: 'QWEST S580',
    slug: 'qwest-s580',
    length: '5,80 m',
    image: 'https://picsum.photos/seed/qwest580/800/600',
    description: 'Moderne aluminium sloep, onderhoudsvrij en koersvast.',
  },
  {
    name: 'Corsiva 570',
    slug: 'corsiva-570',
    length: '5,60 m',
    image: 'https://picsum.photos/seed/corsiva570/800/600',
    description: 'Tijdloze overnaadse sloep met klassieke uitstraling.',
  },
]

const valueProps = [
  {
    icon: Leaf,
    title: '100% uitstootvrij',
    description: 'Vaar in harmonie met de natuur, zonder emissies of brandstofgeur.',
  },
  {
    icon: Volume2,
    title: 'Geluidloos varen',
    description: 'Alleen het geluid van water en wind. De stilte van een elektromotor.',
  },
  {
    icon: Sun,
    title: 'Zelfvoorzienend',
    description: 'Geïntegreerde zonnepanelen laden de accu dag-in dag-uit bij.',
  },
  {
    icon: Anchor,
    title: 'Zorgeloos vaarplezier',
    description: 'Geen walstroom, geen gedoe. Instappen en wegvaren.',
  },
]

const newsItems = [
  {
    title: 'Elektrisch Varen Zonder Laden op Salto CULT TV',
    excerpt: 'Een kijkje in de wereld van emissievrij varen op zonne-energie.',
    image: 'https://picsum.photos/seed/news1/600/400',
    date: 'Najaar 2024',
  },
  {
    title: 'SAIL: Duurzame Varen Dagen',
    excerpt: 'We waren aanwezig tijdens de Duurzame Varen Dagen op SAIL Amsterdam.',
    image: 'https://picsum.photos/seed/news2/600/400',
    date: 'Zomer 2024',
  },
  {
    title: 'Duurzame Varen Dagen in Leiden',
    excerpt: 'Onze sloepen te bewonderen tijdens het evenement in Leiden.',
    image: 'https://picsum.photos/seed/news3/600/400',
    date: 'Voorjaar 2024',
  },
]

const faqs = [
  {
    q: 'Hartstikke leuk, die zonnepanelen, maar kun je ook varen als de zon niet schijnt?',
    a: 'Absoluut. De accu wordt dag-in dag-uit bijgeladen, ook bij half bewolkt weer. Daarnaast beschikken onze sloepen over een ruim accupakket, zodat u altijd voldoende bereik heeft.',
  },
  {
    q: 'Hoe ver kan ik varen met een elektrische sloep op één acculading?',
    a: 'Afhankelijk van model en snelheid varieert het vaarbereik van 15 tot 30+ uur continu varen. Met de zonnepanelen wordt dit nog eens aangevuld tijdens het varen.',
  },
  {
    q: 'Hoe lang duurt het opladen met de zonnepanelen?',
    a: 'De zonnepanelen leveren tot 1000Wp en laden continu bij. Na elke vaartocht is de boot in rap tempo weer klaar voor de volgende trip.',
  },
  {
    q: 'Waar zitten de zonnepanelen op de boot, en kan ik hier op lopen of zitten?',
    a: 'De zonnepanelen zijn robuust en beloopbaar, geïntegreerd in het dek. U kunt er gewoon op lopen en zitten, met desgewenst een bijpassende kussen-set.',
  },
  {
    q: 'Hoe snel kan ik varen met een elektrische sloep?',
    a: 'Afhankelijk van het model en motorvermogen kunt u 7 tot 10 km/u varen. Ideaal voor ontspannen vaartochten op binnenwateren.',
  },
  {
    q: 'Wat zijn de onderhoudskosten van een elektrische sloep vergeleken met een brandstofsloep?',
    a: 'De onderhoudskosten zijn aanzienlijk lager. Geen brandstof, geen olieverversing, minder bewegende delen. Vrijwel onderhoudsvrij.',
  },
  {
    q: 'Heb ik een vaarbewijs nodig om een elektrische sloep te besturen?',
    a: 'Voor sloepen tot 15 meter en onder de 20 km/u is geen vaarbewijs verplicht. Onze sloepen vallen binnen deze categorie.',
  },
  {
    q: 'Mag ik met een elektrische sloep overal varen in Nederland, ook in natuurgebieden of stille zones?',
    a: 'Ja. Juist in natuurgebieden en stille zones is een elektrische sloep ideaal, omdat u geluidloos en emissievrij vaart.',
  },
]

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section id="hero" className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://picsum.photos/seed/sloep-hero/1920/1200"
            alt="Elektrische sloep glijdt geruisloos over kalm water bij zonsondergang"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
        </div>
        <div className="container-wide py-24 md:py-40">
          <div className="max-w-2xl text-background">
            <p className="text-sm md:text-base tracking-wide uppercase mb-6 opacity-90">Varen op zonne-energie</p>
            <h1 className="text-background mb-8">Elektrisch varen zonder laden</h1>
            <p className="text-lg md:text-xl leading-relaxed mb-10 opacity-95">
              Ervaar nu hoe het is om geheel elektrisch te varen op zonne-energie. Sloepen met zonnepanelen,
              samengesteld voor een duurzame toekomst. Ontspannen, ongecompliceerd en zorgeloos het water op.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/beschikbare-sloepen"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-medium hover:bg-secondary transition-colors duration-200"
              >
                Bekijk beschikbare sloepen
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-background/40 text-background px-7 py-3.5 rounded-lg font-medium hover:bg-background/10 transition-colors duration-200"
              >
                Neem contact op
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section id="waarden" className="py-20 md:py-32">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="text-sm tracking-wide uppercase text-primary mb-4">Duurzaam vaarplezier</p>
            <h2 className="mb-6">Welkom bij Elektrisch Varen Zonder Laden</h2>
            <p className="text-lg text-muted-foreground">
              Ontdek de nieuwe manier van elektrisch varen met onze door zonne-energie aangedreven boten.
              Voor elke sloep worden de zonnepanelen op maat ontworpen en geïnstalleerd — een perfecte
              combinatie van boot, aandrijving en energie-opwekking.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((vp) => {
              const Icon = vp.icon
              return (
                <div key={vp.title} className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-accent-foreground">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl">{vp.title}</h3>
                  <p className="text-muted-foreground">{vp.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Sloepen */}
      <section id="sloepen" className="py-20 md:py-32 bg-muted">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <p className="text-sm tracking-wide uppercase text-primary mb-4">Nu leverbaar</p>
              <h2 className="mb-6">Compleet uitgerust op zonne-energie</h2>
              <p className="text-lg text-muted-foreground">
                Onze sloepen worden geleverd inclusief zonnepanelen, accupakket en elektrische motor.
                Een selectie uit onze collectie:
              </p>
            </div>
            <Link
              href="/beschikbare-sloepen"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200"
            >
              Bekijk alle sloepen <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredSloepen.map((sloep) => (
              <Link
                key={sloep.slug}
                href={`/sloepen/${sloep.slug}`}
                className="group bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={sloep.image}
                    alt={`${sloep.name} elektrische sloep op het water`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-lg">{sloep.name}</h3>
                    <span className="text-sm text-muted-foreground">{sloep.length}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{sloep.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium mt-2">
                    Meer info <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Teaser */}
      <section id="technologie" className="py-20 md:py-32">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="https://picsum.photos/seed/solar-tech/800/1000"
                alt="Detail van geïntegreerde zonnepanelen op dek van elektrische sloep"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm tracking-wide uppercase text-primary mb-4">Innovatieve technologie</p>
              <h2 className="mb-6">De perfecte driehoek: zon, accu en motor</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Door installatie van een complete elektrische aandrijving met geïntegreerde zonnepanelen
                leveren wij een compleet pakket waarmee laden of tanken overbodig wordt. Stil en onbezorgd
                het water op — helemaal op zonne-energie.
              </p>
              <div className="flex flex-col gap-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-accent-foreground shrink-0">
                    <Sun className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base mb-1">Beloopbare zonnepanelen</h3>
                    <p className="text-muted-foreground">Robuust geïntegreerd in het dek, tot 1000Wp vermogen.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-accent-foreground shrink-0">
                    <Battery className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base mb-1">Ruim accupakket</h3>
                    <p className="text-muted-foreground">Van 2,5 tot 60 kWh capaciteit, afgestemd op jouw vaargedrag.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-accent-foreground shrink-0">
                    <Waves className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base mb-1">Stille elektromotor</h3>
                    <p className="text-muted-foreground">Van 1,2 tot 15 kW — zacht, krachtig en onderhoudsvrij.</p>
                  </div>
                </div>
              </div>
              <Link
                href="/technologie"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200"
              >
                Lees meer over onze technologie <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* News Preview */}
      <section id="nieuws" className="py-20 md:py-32 bg-muted">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <p className="text-sm tracking-wide uppercase text-primary mb-4">Actueel</p>
              <h2>Duurzaam en onbezorgd genieten op het water</h2>
            </div>
            <Link
              href="/nieuws"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200"
            >
              Alle nieuwsberichten <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <article key={item.title} className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
                <div className="relative aspect-video">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="text-muted-foreground">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-32">
        <div className="container-narrow">
          <div className="mb-14 text-center">
            <p className="text-sm tracking-wide uppercase text-primary mb-4">Veelgestelde vragen</p>
            <h2>Alles wat je wilt weten</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors duration-200">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <h3 className="text-base md:text-lg font-semibold">{faq.q}</h3>
                  <ChevronRight className="w-5 h-5 text-primary shrink-0 transition-transform duration-200 group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20 md:py-32 bg-secondary text-secondary-foreground">
        <div className="container-narrow text-center">
          <h2 className="text-secondary-foreground mb-6">Klaar voor een proefvaart?</h2>
          <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
            Kom onze sloepen bekijken en ervaar zelf hoe het is om stil en emissievrij te varen op zonne-energie.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-background text-foreground px-7 py-3.5 rounded-lg font-medium hover:bg-accent transition-colors duration-200"
            >
              Plan een proefvaart
            </Link>
            <Link
              href="/beschikbare-sloepen"
              className="inline-flex items-center gap-2 border border-secondary-foreground/40 px-7 py-3.5 rounded-lg font-medium hover:bg-secondary-foreground/10 transition-colors duration-200"
            >
              Bekijk sloepen
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

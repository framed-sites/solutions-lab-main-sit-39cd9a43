import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Sun, Battery, Zap, Waves, Leaf, Volume2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
 title: 'Elektrisch Varen Zonder Laden — Sloepen op zonne-energie',
 description: 'Ervaar elektrisch varen op zonne-energie. Duurzame premium sloepen, geluidloos en emissievrij genieten van het Nederlandse vaarwater.',
 openGraph: {
 title: 'Elektrisch Varen Zonder Laden',
 description: 'Sloepen op zonne-energie voor duurzaam vaargenot.',
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
 name: 'QWEST S580',
 slug: 'qwest-s580',
 length: '5,80 m',
 image: 'https://picsum.photos/seed/qwests580/800/600',
 description: 'Modern aluminium vlaggenschip, ontworpen voor elektrisch varen.',
 },
 {
 name: 'Coastliner 620',
 slug: 'coastliner-620',
 length: '6,22 m',
 image: 'https://picsum.photos/seed/coastliner620/800/600',
 description: 'Ruime sloep voor acht personen, stijlvol afgewerkt.',
 },
 {
 name: 'Aqua 630 Tender',
 slug: 'aqua-630-tender',
 length: '6,20 m',
 image: 'https://picsum.photos/seed/aqua630/800/600',
 description: 'Sportief design met ruime diepe kuip en hoge zit.',
 },
]

const faqs = [
 {
 q: 'Hartstikke leuk, die zonnepanelen, maar kun je ook varen als de zon niet schijnt?',
 a: 'Zeker. De zonnepanelen laden het accupakket continu bij, ook bij bewolkt weer. Is het accupakket eenmaal vol, dan kunt u zonder zon vele uren doorvaren.',
 },
 {
 q: 'Hoe ver kan ik varen met een elektrische sloep op één acculading?',
 a: 'Afhankelijk van het model en het accupakket varieert de vaartijd van 10 tot meer dan 30 uur continu vaarplezier op één volle lading.',
 },
 {
 q: 'Hoe lang duurt het opladen met de zonnepanelen?',
 a: 'Bij goed weer laden de beloopbare zonnepanelen het accupakket binnen enkele zonnige dagen volledig op. De sloep is daardoor vrijwel altijd vaarklaar.',
 },
 {
 q: 'Waar zitten de zonnepanelen op de boot, en kan ik hier op lopen of zitten?',
 a: 'De panelen zijn volledig geïntegreerd in het dek en zijn beloopbaar. U kunt er zonder zorgen op lopen, zitten of een kussen-set op plaatsen.',
 },
 {
 q: 'Hoe snel kan ik varen met een elektrische sloep?',
 a: 'Onze sloepen varen comfortabel tussen de 6 en 9 km per uur — de ideale snelheid voor het Nederlandse vaarwater.',
 },
 {
 q: 'Wat zijn de onderhoudskosten van een elektrische sloep vergeleken met een brandstofsloep?',
 a: 'Door het ontbreken van brandstof, filters en complexe verbrandingsmotoren liggen de onderhoudskosten aanzienlijk lager. De sloep is vrijwel onderhoudsvrij.',
 },
 {
 q: 'Heb ik een vaarbewijs nodig om een elektrische sloep te besturen?',
 a: 'Voor onze sloepen is geen vaarbewijs verplicht, mits u onder de wettelijke snelheids- en lengtegrenzen blijft. Wij adviseren u graag over uw specifieke situatie.',
 },
 {
 q: 'Mag ik met een elektrische sloep overal varen in Nederland, ook in natuurgebieden of stille zones?',
 a: 'Ja, juist in stille zones en natuurgebieden is een elektrische sloep de perfecte keuze. Emissievrij en geluidloos varen is overal welkom.',
 },
]

export default function HomePage() {
 return (
 <main>
 {/* Hero */}
 <section id="hero" className="relative">
 <div className="absolute inset-0">
 <Image
 src="https://picsum.photos/seed/sloep-hero/1920/1080"
 alt="Elektrische sloep vaart over stil water bij zonsondergang"
 fill
 priority
 className="object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background" />
 </div>
 <div className="relative container-wide py-24 md:py-40">
 <div className="max-w-2xl">
 <span className="inline-block text-sm tracking-wide uppercase text-primary-foreground/90 bg-primary/90 px-3 py-1 rounded-full">
 Varen op zonne-energie
 </span>
 <h1 className="mt-6 text-primary-foreground">
 Welkom bij Elektrisch Varen Zonder Laden
 </h1>
 <p className="mt-6 text-lg md:text-xl text-primary-foreground/95 leading-relaxed">
 Ervaar nu hoe het is om geheel elektrisch te varen op zonne-energie.
 Sloepen met zonnepanelen samengesteld voor een duurzame toekomst.
 Ontspannen, ongecompliceerd en zorgeloos het water op.
 </p>
 <div className="mt-10 flex flex-wrap gap-4">
 <Link
 href="/beschikbare-sloepen"
 className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors duration-200"
 >
 Bekijk beschikbare sloepen
 <ArrowRight className="w-4 h-4" />
 </Link>
 <Link
 href="/technologie"
 className="inline-flex items-center gap-2 bg-background/95 text-foreground px-6 py-3 rounded-lg font-medium hover:bg-background transition-colors duration-200 border border-border"
 >
 Ontdek de technologie
 </Link>
 </div>
 </div>
 </div>
 </section>

 {/* Value Props */}
 <section id="waarden" className="py-20 md:py-32 bg-background">
 <div className="container-wide">
 <div className="max-w-2xl mb-16">
 <span className="text-sm tracking-wide uppercase text-primary font-medium">Innovatief · 100% uitstootvrij</span>
 <h2 className="mt-4">Duurzaam en onbezorgd genieten op het water</h2>
 <p className="mt-6 text-lg text-muted-foreground">
 De unieke combinatie van elektrisch varen en zonne-energie zorgt ervoor
 dat er 100% uitstootvrij kan worden gevaren. Een ongekende luxe van
 ontspanning, rust en duurzaam vaarplezier.
 </p>
 </div>
 <div className="grid md:grid-cols-3 gap-8">
 <div className="p-8 rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition-shadow duration-200">
 <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-accent-foreground">
 <Leaf className="w-6 h-6" />
 </div>
 <h3 className="mt-6">Duurzaam</h3>
 <p className="mt-3 text-muted-foreground">
 Emissievrij genieten van Nederlands vaarwater, volledig op zonne-energie.
 </p>
 </div>
 <div className="p-8 rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition-shadow duration-200">
 <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-accent-foreground">
 <Volume2 className="w-6 h-6" />
 </div>
 <h3 className="mt-6">Stilte</h3>
 <p className="mt-3 text-muted-foreground">
 Geluidloos varen in harmonie met de natuur — alleen het geluid van het water.
 </p>
 </div>
 <div className="p-8 rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition-shadow duration-200">
 <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-accent-foreground">
 <Waves className="w-6 h-6" />
 </div>
 <h3 className="mt-6">Vaargenot</h3>
 <p className="mt-3 text-muted-foreground">
 Zelfvoorzienend door geïntegreerde zonnepanelen. Instappen en wegvaren, zonder zorgen.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Featured Sloepen */}
 <section id="sloepen" className="py-20 md:py-32 bg-muted">
 <div className="container-wide">
 <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
 <div className="max-w-2xl">
 <span className="text-sm tracking-wide uppercase text-primary font-medium">Onze vloot</span>
 <h2 className="mt-4">Nu leverbaar op zonne-energie, compleet uitgerust</h2>
 <p className="mt-6 text-lg text-muted-foreground">
 Voor elke boot of sloep worden de zonnepanelen customized ontworpen en
 geïnstalleerd, zodat er een perfecte combinatie ontstaat tussen boot,
 aandrijving en energie-opwekking.
 </p>
 </div>
 <Link
 href="/beschikbare-sloepen"
 className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors duration-200"
 >
 Alle sloepen bekijken <ArrowRight className="w-4 h-4" />
 </Link>
 </div>
 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
 {featuredSloepen.map((sloep) => (
 <Link
 key={sloep.slug}
 href={`/sloepen/${sloep.slug}`}
 className="group block bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
 >
 <div className="relative aspect-[4/3] overflow-hidden">
 <Image
 src={sloep.image}
 alt={`${sloep.name} elektrische sloep op zonne-energie`}
 fill
 className="object-cover group-hover:scale-105 transition-transform duration-500"
 />
 </div>
 <div className="p-6">
 <div className="flex items-start justify-between gap-2">
 <h3 className="text-lg">{sloep.name}</h3>
 <span className="text-sm text-muted-foreground whitespace-nowrap">{sloep.length}</span>
 </div>
 <p className="mt-3 text-sm text-muted-foreground">{sloep.description}</p>
 <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary font-medium">
 Meer info <ArrowRight className="w-3 h-3" />
 </span>
 </div>
 </Link>
 ))}
 </div>
 </div>
 </section>

 {/* Technology Teaser */}
 <section id="technologie" className="py-20 md:py-32 bg-background">
 <div className="container-wide">
 <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
 <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
 <Image
 src="https://picsum.photos/seed/solar-tech/1000/800"
 alt="Zonnepanelen geïntegreerd op het dek van een elektrische sloep"
 fill
 className="object-cover"
 />
 </div>
 <div>
 <span className="text-sm tracking-wide uppercase text-primary font-medium">Technologie</span>
 <h2 className="mt-4">Zonne-energie, accu en elektromotor in perfecte harmonie</h2>
 <p className="mt-6 text-lg text-muted-foreground">
 Door installatie van een complete elektrische aandrijving met geïntegreerde
 zonnepanelen leveren wij een compleet pakket waarmee laden of tanken
 overbodig wordt. Stil en onbezorgd het water op.
 </p>
 <div className="mt-10 grid sm:grid-cols-3 gap-6">
 <div className="flex flex-col gap-3">
 <Sun className="w-8 h-8 text-primary" />
 <h3 className="text-base font-semibold">Zonnepanelen</h3>
 <p className="text-sm text-muted-foreground">Beloopbaar en hoog-efficiënt.</p>
 </div>
 <div className="flex flex-col gap-3">
 <Battery className="w-8 h-8 text-primary" />
 <h3 className="text-base font-semibold">Accupakket</h3>
 <p className="text-sm text-muted-foreground">Tot 60 kWh capaciteit.</p>
 </div>
 <div className="flex flex-col gap-3">
 <Zap className="w-8 h-8 text-primary" />
 <h3 className="text-base font-semibold">Elektromotor</h3>
 <p className="text-sm text-muted-foreground">6 tot 15 kW vermogen.</p>
 </div>
 </div>
 <Link
 href="/technologie"
 className="mt-10 inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors duration-200"
 >
 Lees meer over onze technologie <ArrowRight className="w-4 h-4" />
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
 <span className="text-sm tracking-wide uppercase text-primary font-medium">Nieuws</span>
 <h2 className="mt-4">Recente verhalen en media</h2>
 </div>
 <Link href="/nieuws" className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors duration-200">
 Alle nieuwsberichten <ArrowRight className="w-4 h-4" />
 </Link>
 </div>
 <div className="grid md:grid-cols-3 gap-6">
 <article className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
 <div className="relative aspect-[16/10]">
 <Image src="https://picsum.photos/seed/news-cult/800/500" alt="Salto CULT TV opname" fill className="object-cover" />
 </div>
 <div className="p-6">
 <span className="text-sm text-muted-foreground">Televisie</span>
 <h3 className="mt-2 text-lg">Elektrisch Varen Zonder Laden was op Salto CULT TV</h3>
 </div>
 </article>
 <article className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
 <div className="relative aspect-[16/10]">
 <Image src="https://picsum.photos/seed/news-sail/800/500" alt="SAIL Duurzaam Varen Dagen" fill className="object-cover" />
 </div>
 <div className="p-6">
 <span className="text-sm text-muted-foreground">Evenement</span>
 <h3 className="mt-2 text-lg">Elektrisch Varen Zonder Laden op SAIL: Duurzaam Varen Dagen</h3>
 </div>
 </article>
 <article className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
 <div className="relative aspect-[16/10]">
 <Image src="https://picsum.photos/seed/news-leiden/800/500" alt="Duurzaam Varen Dagen Leiden" fill className="object-cover" />
 </div>
 <div className="p-6">
 <span className="text-sm text-muted-foreground">Evenement</span>
 <h3 className="mt-2 text-lg">Duurzaam Varen Dagen in Leiden met Elektrisch Varen Zonder Laden</h3>
 </div>
 </article>
 </div>
 </div>
 </section>

 {/* FAQ */}
 <section id="faq" className="py-20 md:py-32 bg-background">
 <div className="container-narrow">
 <div className="max-w-2xl mb-16">
 <span className="text-sm tracking-wide uppercase text-primary font-medium">Veelgestelde vragen</span>
 <h2 className="mt-4">Antwoorden op uw vragen over varen op zonne-energie</h2>
 </div>
 <div className="flex flex-col gap-4">
 {faqs.map((faq, i) => (
 <details
 key={i}
 className="group bg-card rounded-lg border border-border p-6 transition-shadow duration-200 hover:shadow-sm"
 >
 <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
 <h3 className="text-base md:text-lg font-semibold">{faq.q}</h3>
 <span className="flex-shrink-0 w-6 h-6 rounded-full border border-border flex items-center justify-center text-muted-foreground group-open:rotate-45 transition-transform duration-200">
 +
 </span>
 </summary>
 <p className="mt-4 text-muted-foreground">{faq.a}</p>
 </details>
 ))}
 </div>
 </div>
 </section>

 {/* CTA */}
 <section id="cta" className="relative py-20 md:py-32">
 <div className="absolute inset-0">
 <Image
 src="https://picsum.photos/seed/cta-water/1920/800"
 alt="Kalm vaarwater bij zonsondergang"
 fill
 className="object-cover"
 />
 <div className="absolute inset-0 bg-secondary/85" />
 </div>
 <div className="relative container-narrow text-center">
 <h2 className="text-secondary-foreground">Klaar om emissievrij het water op te gaan?</h2>
 <p className="mt-6 text-lg text-secondary-foreground/90 max-w-2xl mx-auto">
 Plan een proefvaart of vraag vrijblijvend advies over de sloep die past bij uw vaarwensen.
 </p>
 <div className="mt-10 flex flex-wrap justify-content-center gap-4 justify-center">
 <Link
 href="/contact"
 className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors duration-200"
 >
 Neem contact op <ArrowRight className="w-4 h-4" />
 </Link>
 <Link
 href="/beschikbare-sloepen"
 className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 border border-primary-foreground/20"
 >
 Bekijk alle sloepen
 </Link>
 </div>
 </div>
 </section>
 </main>
 )
}

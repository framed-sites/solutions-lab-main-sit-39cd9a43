import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Ruler, Users, Battery, Sun, Zap, Anchor, Check } from 'lucide-react'
import CTASection from '@/components/cta-section'

export const metadata: Metadata = {
 title: 'Coastliner 620 — Elektrisch Varen Zonder Laden',
 description: 'De Coastliner 620 is een ruime kustvaarder voor tot 8 personen. Elektrisch varen op zonne-energie met stijlvolle afwerking en uitgebreide vaarbereik.',
 openGraph: {
 title: 'Coastliner 620 — Elektrisch Varen Zonder Laden',
 description: 'Ruime elektrische sloep voor dagtochten langs kust en meren, volledig op zonne-energie.',
 type: 'article',
 },
}

const specs = [
 { icon: Sun, label: 'Zonnepaneel vermogen', value: '600 Wp' },
 { icon: Battery, label: 'Accucapaciteit', value: '20 / 40 / 60 kWh' },
 { icon: Zap, label: 'Aandrijving', value: 'Elektra 6 – 15 kW' },
 { icon: Ruler, label: 'Lengte', value: '6,22 m' },
 { icon: Users, label: 'Capaciteit', value: 'Tot 8 personen' },
 { icon: Anchor, label: 'Kleur', value: 'Romp & dek naar keuze' },
]

const features = [
 'Ruime cabine met plaats voor maar liefst 8 personen',
 'Stijlvol zwemplateau met geïntegreerde traptreden',
 'Standaard geleverd met zonnedek, luxe kussen-set en houten tafel',
 'Romp en dek op kleur naar wens leverbaar',
 'Inclusief groot accupakket en krachtige beloopbare zonnepanelen',
 'Oer-Hollands fabricaat: solide en kwalitatief sterk',
]

const gallery = [
 'https://picsum.photos/seed/coastliner620-1/1200/800',
 'https://picsum.photos/seed/coastliner620-2/800/800',
 'https://picsum.photos/seed/coastliner620-3/800/800',
 'https://picsum.photos/seed/coastliner620-4/1200/800',
 'https://picsum.photos/seed/coastliner620-5/800/800',
 'https://picsum.photos/seed/coastliner620-6/800/800',
]

export default function Coastliner620Page() {
 return (
 <main id="coastliner-620-page">
 {/* Hero */}
 <section id="hero" className="relative">
 <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
 <Image
 src="https://picsum.photos/seed/coastliner620-hero/1920/1080"
 alt="Coastliner 620 elektrische sloep op stil water"
 fill
 priority
 className="object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-foreground/30 to-foreground/70" />
 <div className="absolute inset-0 flex items-end">
 <div className="container-wide pb-16 md:pb-24">
 <Link
 href="/beschikbare-sloepen"
 className="inline-flex items-center gap-2 text-sm text-background/90 hover:text-background transition-colors duration-200 mb-6"
 >
 <ArrowLeft className="h-4 w-4" />
 Terug naar overzicht
 </Link>
 <h1 className="text-background max-w-3xl">Coastliner 620</h1>
 <p className="mt-4 text-lg text-background/90 max-w-2xl leading-relaxed">
 Elektrisch varen next level — een ruime kustvaarder voor tot 8 personen, ideaal voor dagtochten langs kust en meren.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Specs */}
 <section id="specificaties" className="py-20 md:py-32 bg-background">
 <div className="container-wide">
 <div className="max-w-2xl mb-12">
 <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Specificaties</p>
 <h2>Alles wat je nodig hebt aan boord</h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {specs.map((spec) => {
 const Icon = spec.icon
 return (
 <div
 key={spec.label}
 className="flex items-start gap-4 p-6 rounded-lg border border-border bg-card shadow-sm transition-shadow duration-200 hover:shadow-md"
 >
 <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground shrink-0">
 <Icon className="h-6 w-6" />
 </div>
 <div>
 <p className="text-sm text-muted-foreground">{spec.label}</p>
 <p className="text-lg font-semibold text-foreground mt-1">{spec.value}</p>
 </div>
 </div>
 )
 })}
 </div>
 </div>
 </section>

 {/* Description */}
 <section id="beschrijving" className="py-20 md:py-32 bg-muted">
 <div className="container-narrow">
 <div className="max-w-2xl mb-12">
 <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Beschrijving</p>
 <h2>Een sloep die gezien mag worden</h2>
 </div>
 <div className="prose-invert space-y-6 text-lg text-foreground leading-relaxed">
 <p>
 Elektrisch varen &ldquo;next level&rdquo;. En dat nu ook nog eens op zonne-energie. Met de Coastliner 620 heeft u een sloep die gezien mag worden. De zeer ruime afmetingen, de grote cabine met plaats voor maar liefst 8 personen, het ruime zwemplateau met mooi ontworpen geïntegreerde traptreden, dit alles samen met de stijlvolle afwerking maken deze sloep tot een prachtig schip.
 </p>
 <p>
 De boot is van oer-Hollands fabricaat. Dat betekent een solide en kwalitatief sterke boot waarmee jarenlang vaarplezier is gegarandeerd. De perfecte combinatie van gemak en luxe.
 </p>
 <p>
 Standaard komt de boot met een mooi zonnedek, een luxe kussen-set en mooie houten tafel erbij. De romp van de boot en het dek kunnen op kleur naar wens worden geleverd.
 </p>
 <p>
 Nu dus volledig elektrisch en super-de-luxe het water op met deze prachtige ruime sloep, welke uiteraard inclusief het grote accupakket, elektrische aandrijving en een krachtige set beloopbare zonnepanelen wordt geleverd. We nodigen u graag uit om eens te komen kijken naar deze sloep en samen te bespreken wat de uitgebreide mogelijkheden allemaal zijn.
 </p>
 </div>

 <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
 {features.map((feature) => (
 <div key={feature} className="flex items-start gap-3">
 <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground shrink-0">
 <Check className="h-3 w-3" />
 </div>
 <p className="text-base text-foreground">{feature}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Gallery */}
 <section id="impressie" className="py-20 md:py-32 bg-background">
 <div className="container-wide">
 <div className="max-w-2xl mb-12">
 <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Impressie</p>
 <h2>Een blik aan boord</h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
 {gallery.map((src, i) => (
 <div
 key={src}
 className={`relative overflow-hidden rounded-lg bg-muted ${
 i === 0 ? 'md:col-span-2 md:row-span-2 aspect-[4/3]' : 'aspect-square'
 }`}
 >
 <Image
 src={src}
 alt={`Coastliner 620 impressie ${i + 1}`}
 fill
 className="object-cover transition-transform duration-500 hover:scale-105"
 />
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* CTA */}
 <CTASection
 id="contact-cta"
 title="Interesse in de Coastliner 620?"
 description="Neem vrijblijvend contact met ons op voor een afspraak, proefvaart of voor meer informatie over de uitgebreide mogelijkheden."
 primaryCta={{ label: 'Neem contact op', href: '/contact' }}
 secondaryCta={{ label: 'Bekijk alle sloepen', href: '/beschikbare-sloepen' }}
 image="https://picsum.photos/seed/coastliner620-cta/1600/900"
 />
 </main>
 )
}

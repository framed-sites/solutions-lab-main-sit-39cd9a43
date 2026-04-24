import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Ruler, Users, Battery, Sun, Zap, Anchor, Check } from 'lucide-react'
import CTASection from '@/components/cta-section'

export const metadata: Metadata = {
 title: 'Rinovatio 570 — Elektrisch Varen Zonder Laden',
 description: 'Solide en ruime aluminium sloep met no-nonsense design. Innovatief duurzaam model met gerecyclede materialen en hoogrendements-zonnepanelen.',
 openGraph: {
 title: 'Rinovatio 570 — Elektrisch Varen Zonder Laden',
 description: 'Robuuste aluminium sloep, volledig elektrisch op zonne-energie.',
 type: 'article',
 },
}

const specs = [
 { icon: Sun, label: 'Zonnepaneel vermogen', value: '500 Wp' },
 { icon: Battery, label: 'Accucapaciteit', value: '20 kWh' },
 { icon: Zap, label: 'Aandrijving', value: 'Elektra 6 – 15 kW' },
 { icon: Ruler, label: 'Lengte', value: '5,70 m' },
 { icon: Users, label: 'Capaciteit', value: 'Tot 7 personen' },
 { icon: Anchor, label: 'Materiaal', value: 'Aluminium' },
]

const features = [
 'Solide en ruime aluminium sloep met no-nonsense design',
 'Extra breed formaat — ideaal voor zwemmen en vissen',
 'Gemakkelijke open achterzijde',
 'Krachtige elektrische motor met enorm accupakket',
 'Beloopbare en hoog-efficiënte zonnepanelen',
 'Onderhoudsvrij, robuust en stabiel',
]

const gallery = [
 'https://picsum.photos/seed/rinovatio570-1/1200/800',
 'https://picsum.photos/seed/rinovatio570-2/800/800',
 'https://picsum.photos/seed/rinovatio570-3/800/800',
 'https://picsum.photos/seed/rinovatio570-4/1200/800',
 'https://picsum.photos/seed/rinovatio570-5/800/800',
 'https://picsum.photos/seed/rinovatio570-6/800/800',
]

export default function Rinovatio570Page() {
 return (
 <main id="rinovatio-570-page">
 <section id="hero" className="relative">
 <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
 <Image
 src="https://picsum.photos/seed/rinovatio570-hero/1920/1080"
 alt="Rinovatio 570 aluminium elektrische sloep op het water"
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
 <h1 className="text-background max-w-3xl">Rinovatio 570</h1>
 <p className="mt-4 text-lg text-background/90 max-w-2xl leading-relaxed">
 Innovatief duurzaam model met robuuste aluminium romp en hoogrendements-zonnepanelen.
 </p>
 </div>
 </div>
 </div>
 </section>

 <section id="specificaties" className="py-20 md:py-32 bg-background">
 <div className="container-wide">
 <div className="max-w-2xl mb-12">
 <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Specificaties</p>
 <h2>Robuust en onderhoudsvrij</h2>
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

 <section id="beschrijving" className="py-20 md:py-32 bg-muted">
 <div className="container-narrow">
 <div className="max-w-2xl mb-12">
 <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Beschrijving</p>
 <h2>Stoer, stabiel en stil</h2>
 </div>
 <div className="space-y-6 text-lg text-foreground leading-relaxed">
 <p>
 Solide en ruime aluminium sloep met no-nonsense design. Met het extra brede formaat en de gemakkelijke open achterzijde kan de boot ideaal worden gebruikt voor activiteiten op het water zoals zwemmen, vissen of gewoon lekker met de voeten in het water hangen om af te koelen tijdens de warme dagen.
 </p>
 <p>
 Zoals bij al onze sloepen is ook de Rinovatio 570 voorzien van een krachtige elektrische motor, een enorm accupakket en een flink aantal solide, beloopbare en hoog-efficiënte zonnepanelen. Dat alles maakt het een onderhoudsvrije en robuuste, stabiele boot.
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
 alt={`Rinovatio 570 impressie ${i + 1}`}
 fill
 className="object-cover transition-transform duration-500 hover:scale-105"
 />
 </div>
 ))}
 </div>
 </div>
 </section>

 <CTASection
 id="contact-cta"
 title="Interesse in de Rinovatio 570?"
 description="Neem vrijblijvend contact met ons op voor een afspraak, proefvaart of voor meer informatie over de mogelijkheden."
 primaryCta={{ label: 'Neem contact op', href: '/contact' }}
 secondaryCta={{ label: 'Bekijk alle sloepen', href: '/beschikbare-sloepen' }}
 image="https://picsum.photos/seed/rinovatio570-cta/1600/900"
 />
 </main>
 )
}

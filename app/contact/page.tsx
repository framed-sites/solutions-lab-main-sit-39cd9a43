'use client'

import HeroSection from '@/components/hero-section'
import SectionHeader from '@/components/section-header'
import ContactForm from '@/components/contact-form'
import CtaSection from '@/components/cta-section'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <main>
      <HeroSection
        eyebrow="Contact"
        title="We varen graag met u mee"
        subtitle="Stel uw vraag, plan een proefvaart of vraag een offerte aan. We reageren doorgaans binnen één werkdag."
        image="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Jachthaven met elektrische sloepen"
        compact
      />

      <section id="contactgegevens" className="py-20 md:py-32">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Contactgegevens"
            title="Zo bereikt u ons"
            intro="Kom langs in onze showroom, bel ons of stuur een bericht. We helpen u graag verder met vrijblijvend advies."
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-lg border border-border bg-card p-8 flex flex-col gap-4 transition-shadow duration-200 hover:shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-accent-foreground">
                <Phone className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Telefoon</h3>
                <a
                  href="tel:+31622199699"
                  className="mt-2 block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  +31 6 22 19 96 99
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-8 flex flex-col gap-4 transition-shadow duration-200 hover:shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-accent-foreground">
                <Mail className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">E-mail</h3>
                <a
                  href="mailto:info@bossboating.nl"
                  className="mt-2 block text-muted-foreground hover:text-primary transition-colors duration-200 break-all"
                >
                  info@bossboating.nl
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-8 flex flex-col gap-4 transition-shadow duration-200 hover:shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-accent-foreground">
                <MapPin className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Showroom</h3>
                <p className="mt-2 text-muted-foreground">
                  Westerwijzend 57
                  <br />
                  1616 LB Hoogkarspel
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-8 flex flex-col gap-4 transition-shadow duration-200 hover:shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-accent-foreground">
                <Clock className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Openingstijden</h3>
                <p className="mt-2 text-muted-foreground">
                  Ma–vr: 09:00 – 17:30
                  <br />
                  Za: 10:00 – 16:00
                  <br />
                  Zo: op afspraak
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contactformulier" className="py-20 md:py-32 bg-muted">
        <div className="container-narrow">
          <SectionHeader
            eyebrow="Stuur een bericht"
            title="Neem contact met ons op"
            intro="Vul het formulier in en we nemen zo snel mogelijk contact met u op. Liever een proefvaart plannen? Geef het aan bij het onderwerp."
          />
          <div className="mt-12">
            <ContactForm />
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Proefvaart"
        title="Ervaar het zelf op het water"
        description="Niets maakt meer indruk dan zelf aan het roer staan. Plan een vrijblijvende proefvaart en ervaar de stilte van varen op zonne-energie."
        primaryCta={{ label: 'Bekijk onze sloepen', href: '/beschikbare-sloepen' }}
        secondaryCta={{ label: 'Meer over de techniek', href: '/technologie' }}
        image="https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&w=2000&q=80"
      />
    </main>
  )
}

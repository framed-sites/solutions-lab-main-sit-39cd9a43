import type { Metadata } from 'next'
import HeroSection from '@/components/hero-section'
import ValueProps from '@/components/value-props'
import TechFeatureBlock from '@/components/tech-feature-block'
import FeatureList from '@/components/feature-list'
import CtaSection from '@/components/cta-section'
import SectionHeader from '@/components/section-header'
import { Sun, Battery, Zap, Gauge, Leaf, Waves, Wind, Cpu } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Technologie — Elektrisch Varen Zonder Laden',
  description:
    'Ontdek de technologie achter onze sloepen: hoogrendements zonnepanelen, lithium-accupakketten, stille elektromotoren en slim energiemanagement voor onbezorgd elektrisch varen.',
  openGraph: {
    title: 'Technologie — Elektrisch Varen Zonder Laden',
    description:
      'Zonnepanelen, accupakketten en elektrische aandrijving in perfecte harmonie. Varen op zonne-energie, zonder laden.',
    type: 'website',
  },
}

export default function TechnologiePage() {
  return (
    <main>
      <HeroSection
        eyebrow="Technologie"
        title="Varen op zonne-energie, zonder laden"
        subtitle="Een compleet pakket van zonnepanelen, accu's en elektrische aandrijving — op maat afgestemd op uw boot en vaargedrag."
        image="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Elektrische sloep op stil water bij zonsondergang"
        primaryCta={{ label: 'Neem contact op', href: '/contact' }}
        secondaryCta={{ label: 'Bekijk onze sloepen', href: '/beschikbare-sloepen' }}
      />

      <section id="voordelen" className="py-20 md:py-32">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Waarom deze technologie"
            title="Zelfvoorzienend vaargenot"
            intro="Door de integratie van hoogwaardige componenten ontstaat een systeem dat stil, schoon en eindeloos beschikbaar is — helemaal op zonne-energie."
            align="center"
          />
          <div className="mt-16">
            <ValueProps
              items={[
                {
                  icon: Leaf,
                  title: '100% Uitstootvrij',
                  description:
                    'Geen fossiele brandstoffen, geen emissies. Varen in harmonie met de natuur op Nederlands vaarwater.',
                },
                {
                  icon: Waves,
                  title: 'Stil en rustgevend',
                  description:
                    'Geluidloze voortstuwing laat u genieten van het water, de vogels en het gezelschap aan boord.',
                },
                {
                  icon: Sun,
                  title: 'Zelfvoorzienend',
                  description:
                    'Geïntegreerde zonnepanelen laden de accu continu bij — zonder walstroom of stopcontact.',
                },
                {
                  icon: Gauge,
                  title: 'Zorgeloos vaarplezier',
                  description:
                    'Slimme energiemanagement geeft u via een app altijd inzicht in de status van uw accu.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section id="uitleg" className="py-20 md:py-32 bg-muted">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Hoe het werkt"
            title="De drie pijlers van onze aandrijving"
            intro="Zonnepanelen, accupakket en elektromotor werken samen als één geheel. Elk onderdeel is afgestemd op uw vaargedrag, beschikbare ruimte en budget."
          />

          <div className="mt-16 flex flex-col gap-16">
            <TechFeatureBlock
              eyebrow="Zonnepanelen"
              title="Beloopbaar, robuust en hoog-efficiënt"
              description="Onze sloepen zijn voorzien van krachtige, beloopbare zonnepanelen die naadloos in het zonnedek zijn geïntegreerd. Met vermogens tot 1000Wp laden de accu's dag-in dag-uit continu bij — zelfs bij half bewolkt weer. U kunt er gewoon op lopen en zitten."
              image="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80"
              imageAlt="Zonnepanelen geïntegreerd in sloepdek"
              bullets={[
                'Hoogrendements modules tot 1000Wp',
                'Beloopbaar en weersbestendig',
                'Naadloze integratie in het ontwerp',
              ]}
            />
            <TechFeatureBlock
              eyebrow="Accupakket"
              title="Lithium-accu's met inzicht via app"
              description="Afhankelijk van uw vaarwensen leveren wij accupakketten van 20, 40 of 60 kWh. De pakketten zijn compact, licht en onderhoudsarm. Via een handige app heeft u altijd realtime inzicht in de accu-status, laadsnelheid en resterend vaarbereik."
              image="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1400&q=80"
              imageAlt="Modern lithium-accupakket in sloep"
              reverse
              bullets={[
                'Capaciteit van 2,5 tot 60 kWh',
                'Compacte en veilige lithium-technologie',
                'Realtime monitoring via smartphone',
              ]}
            />
            <TechFeatureBlock
              eyebrow="Elektromotor"
              title="Stille, krachtige voortstuwing"
              description="Elektrische aandrijvingen van 1,2 tot 15 kW zorgen voor een soepele, stille vaarbeleving. Permanent-magneetmotoren zijn vrijwel onderhoudsvrij en leveren direct koppel — ideaal voor manoeuvreren in de haven of rustig doorvaren op open water."
              image="https://images.unsplash.com/photo-1542338347-4fff3276af78?auto=format&fit=crop&w=1400&q=80"
              imageAlt="Elektrische buitenboordmotor op sloep"
              bullets={[
                'Vermogen van 1,2 tot 15 kW',
                'Nagenoeg onderhoudsvrij',
                'Direct koppel, soepele acceleratie',
              ]}
            />
          </div>
        </div>
      </section>

      <section id="kenmerken" className="py-20 md:py-32">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Kenmerken"
            title="Op maat gemaakt voor uw vaargedrag"
            intro="Elk pakket wordt samengesteld op basis van frequentie van gebruik, vaartijd, snelheid en de beschikbare ruimte aan boord. Zo krijgt u precies wat u nodig heeft — niet meer, niet minder."
            align="center"
          />
          <div className="mt-16">
            <FeatureList
              items={[
                {
                  icon: Sun,
                  title: 'Zonne-energie opwekken',
                  description:
                    'Hoogrendements zonnepanelen laden de accu continu bij, ook tijdens het varen of aan de kade.',
                },
                {
                  icon: Battery,
                  title: 'Grote accucapaciteit',
                  description:
                    'Meerdere accuconfiguraties beschikbaar voor zowel korte tochten als meerdaagse reizen.',
                },
                {
                  icon: Zap,
                  title: 'Elektrische aandrijving',
                  description:
                    'Stille, krachtige elektromotoren met direct koppel en nagenoeg geen onderhoud.',
                },
                {
                  icon: Cpu,
                  title: 'Slim energiemanagement',
                  description:
                    'Centrale regelaar verdeelt energie optimaal tussen opwekking, opslag en verbruik.',
                },
                {
                  icon: Wind,
                  title: 'Onafhankelijk van walstroom',
                  description:
                    'Geen stopcontact nodig — instappen en wegvaren, dag na dag, helemaal op zonne-energie.',
                },
                {
                  icon: Gauge,
                  title: 'App-gestuurd inzicht',
                  description:
                    'Realtime monitoring van accu-status, laadstroom en verwacht vaarbereik via uw telefoon.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Persoonlijk advies"
        title="Benieuwd wat bij uw boot past?"
        description="Heeft u vragen over de mogelijkheden en wat bij u en uw boot past? Stuur ons een bericht — we adviseren u vrijblijvend en op maat."
        primaryCta={{ label: 'Neem contact op', href: '/contact' }}
        secondaryCta={{ label: 'Bekijk sloepen', href: '/beschikbare-sloepen' }}
        image="https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=2000&q=80"
      />
    </main>
  )
}

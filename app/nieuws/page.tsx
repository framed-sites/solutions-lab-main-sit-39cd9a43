import type { Metadata } from 'next'
import HeroSection from '@/components/hero-section'
import SectionHeader from '@/components/section-header'
import NewsCard from '@/components/news-card'

export const metadata: Metadata = {
  title: 'Nieuws — Elektrisch Varen Zonder Laden',
  description:
    'Het laatste nieuws over elektrisch varen op zonne-energie: productlanceringen, evenementen, duurzaamheid en verhalen van onze vaarders.',
  openGraph: {
    title: 'Nieuws — Elektrisch Varen Zonder Laden',
    description: 'Blijf op de hoogte van ontwikkelingen in duurzaam varen.',
    type: 'website',
  },
}

const articles = [
  {
    title: 'Elektrisch Varen Zonder Laden was op Salto CULT TV',
    excerpt:
      'Onze oprichter vertelde bij Salto CULT TV over de nieuwe generatie sloepen die volledig op zonne-energie varen en hoe duurzaam varen toegankelijk wordt voor iedereen.',
    image: 'https://images.unsplash.com/photo-1527484229881-f4b30d1a2b1d?auto=format&fit=crop&w=1200&q=80',
    date: '14 mei 2025',
    category: 'Media',
    href: '/nieuws',
  },
  {
    title: 'Elektrisch Varen Zonder Laden op SAIL: Duurzaam Varen Dagen',
    excerpt:
      'Tijdens de Duurzaam Varen Dagen op SAIL Amsterdam presenteerden wij onze nieuwste modellen en demonstreerden hoe zonnepanelen en lithium-accu’s samenwerken.',
    image: 'https://images.unsplash.com/photo-1502085671122-2d218cd434e6?auto=format&fit=crop&w=1200&q=80',
    date: '28 april 2025',
    category: 'Evenement',
    href: '/nieuws',
  },
  {
    title: 'Duurzaam Varen Dagen in Leiden',
    excerpt:
      'In de Leidse grachten konden bezoekers meevaren met onze QWEST S580 en Coastliner 620 en zelf ervaren hoe stil en soepel elektrisch varen werkelijk is.',
    image: 'https://images.unsplash.com/photo-1523592121529-f6dde35f079e?auto=format&fit=crop&w=1200&q=80',
    date: '12 april 2025',
    category: 'Evenement',
    href: '/nieuws',
  },
  {
    title: 'Nieuw in de vloot: de Coastliner 620',
    excerpt:
      'Een ruime sloep met een zonnedek, plaats voor acht personen en een vaarbereik dat zelfs de meest ambitieuze vaardagen comfortabel laat verlopen.',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=1200&q=80',
    date: '2 april 2025',
    category: 'Productlancering',
    href: '/sloepen/coastliner-620',
  },
  {
    title: 'Klantverhaal: een zomer lang varen op de Kagerplassen',
    excerpt:
      'Familie De Vries vertelt hoe hun Solara 450 een hele zomer lang onvermoeibaar het water opging — zonder één keer aan de lader te hoeven.',
    image: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=1200&q=80',
    date: '18 maart 2025',
    category: 'Klantverhaal',
    href: '/nieuws',
  },
  {
    title: 'Hoe beloopbare zonnepanelen de sloepenwereld veranderen',
    excerpt:
      'Een technisch diepte-artikel over de nieuwe generatie robuuste zonnepanelen die we toepassen op dekken — beloopbaar, efficiënt en weersbestendig.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    date: '4 maart 2025',
    category: 'Technologie',
    href: '/technologie',
  },
  {
    title: 'Onze visie op circulair bootbouwen',
    excerpt:
      'Bij de Solara 450 maken we gebruik van bestaande casco’s en geven ze een tweede leven met een volledig elektrische aandrijving. Een bijdrage aan de circulaire economie.',
    image: 'https://images.unsplash.com/photo-1500627964684-141351970a7f?auto=format&fit=crop&w=1200&q=80',
    date: '15 februari 2025',
    category: 'Duurzaamheid',
    href: '/sloepen/solara-450',
  },
  {
    title: 'Boot ombouwen naar elektrisch: waar begin je?',
    excerpt:
      'Van analyse van uw vaargedrag tot de uiteindelijke installatie: we leggen stap voor stap uit hoe een ombouw naar zonne-aandrijving in zijn werk gaat.',
    image: 'https://images.unsplash.com/photo-1520450202524-87afbf9c2d62?auto=format&fit=crop&w=1200&q=80',
    date: '30 januari 2025',
    category: 'Gids',
    href: '/technologie',
  },
]

export default function NieuwsPage() {
  return (
    <main>
      <HeroSection
        eyebrow="Nieuws"
        title="Verhalen van het water"
        subtitle="Nieuws, events en achtergronden over elektrisch varen op zonne-energie. Van productlanceringen tot klantervaringen."
        image="https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Elektrische sloep op rustig water"
        compact
      />

      <section id="artikelen" className="py-20 md:py-32">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Laatste berichten"
            title="Wat er speelt in onze vloot"
            intro="Een overzicht van recente artikelen, evenementen en verhalen van onze vaarders."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <NewsCard key={article.title} {...article} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

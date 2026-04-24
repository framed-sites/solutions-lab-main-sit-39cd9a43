 import { Sun, Battery, Zap, Leaf, Waves, Anchor, Gauge, Shield, Sparkles, Wrench, Users } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  sun: Sun,
  battery: Battery,
  zap: Zap,
  leaf: Leaf,
  waves: Waves,
  anchor: Anchor,
  gauge: Gauge,
  shield: Shield,
  sparkles: Sparkles,
  wrench: Wrench,
  users: Users,
}

interface FeatureItem {
  icon?: string
  title: string
  description: string
}

interface FeatureListProps {
  title?: string
  intro?: string
  items?: FeatureItem[]
  columns?: 2 | 3 | 4
}

const defaultFeatures: FeatureItem[] = [
  {
    icon: 'users',
    title: 'Ruim en comfortabel',
    description: 'Onze sloepen bieden comfortabel plaats aan 6 tot 8 personen met ruime zitkuipen en luxe kussens voor een ontspannen dag op het water.',
  },
  {
    icon: 'battery',
    title: 'Elektrisch varen',
    description: 'Stille en milieuvriendelijke elektrische aandrijving voor een ontspannen vaartocht zonder uitstoot en geluidsoverlast.',
  },
  {
    icon: 'shield',
    title: 'Veiligheid voorop',
    description: 'Alle sloepen zijn volledig uitgerust met reddingsvesten, navigatieverlichting en bieden stabiele, veilige vaareigenschappen.',
  },
  {
    icon: 'waves',
    title: 'Stabiele vaareigenschappen',
    description: 'Perfecte balans en stabiliteit, geschikt voor zowel het smalle grachtenwater als ruimere meren en rivieren.',
  },
  {
    icon: 'anchor',
    title: 'Eenvoudig aanmeren',
    description: 'Complete aanmeeruitrusting inclusief fenders en landvasten, zodat u gemakkelijk kunt aanleggen bij verschillende aanlegplaatsen.',
  },
  {
    icon: 'sun',
    title: 'Genieten van het weer',
    description: 'Ruime zonnedekken met comfortabele ligkussens om optimaal te genieten van het Nederlandse zomerweer op het water.',
  },
]

export default function FeatureList({ title, intro, items = defaultFeatures, columns = 3 }: FeatureListProps) {
  const colClass = columns === 2 ? 'md:grid-cols-2' : columns === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3'

  return (
    <div>
      {(title || intro) && (
        <div className="max-w-3xl mb-12">
          {title && <h2 className="text-foreground">{title}</h2>}
          {intro && <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">{intro}</p>}
        </div>
      )}
      <div className={`grid grid-cols-1 ${colClass} gap-6 md:gap-8`}>
        {items.map((item, idx) => {
          const IconComponent = item.icon && iconMap[item.icon] ? iconMap[item.icon] : Sparkles
          return (
            <div key={idx} className="p-6 md:p-8 bg-card border border-border rounded-lg hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                <IconComponent className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
 import { Sun, Leaf, Waves, Battery, Sparkles, Shield } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  sun: Sun,
  leaf: Leaf,
  waves: Waves,
  battery: Battery,
  sparkles: Sparkles,
  shield: Shield,
}

type ValuePropItem = {
  title: string
  description: string
  icon?: string
}

interface ValuePropsProps {
  items: ValuePropItem[]
}

const defaultValueProps: ValuePropItem[] = [
  {
    title: 'Duurzaam Varen',
    description: 'Onze elektrische sloepen bieden een milieuvriendelijke manier om te genieten van het water, zonder uitstoot en met minimaal geluid.',
    icon: 'leaf'
  },
  {
    title: 'Luxe en Comfort',
    description: 'Ervaar ultiem comfort met onze zorgvuldig geselecteerde sloepen, uitgerust met hoogwaardige materialen en doordachte details.',
    icon: 'sparkles'
  },
  {
    title: 'Betrouwbaar en Veilig',
    description: 'Veiligheid staat voorop. Onze vloot wordt regelmatig onderhouden en is voorzien van alle benodigde veiligheidsvoorzieningen.',
    icon: 'shield'
  }
]

export default function ValueProps({ items = defaultValueProps }: ValuePropsProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${Math.min(items.length, 3)} gap-8 md:gap-12`}>
      {items.map((item, i) => {
        let Icon = Sparkles
        if (item.icon && iconMap[item.icon]) {
          Icon = iconMap[item.icon]
        }
        
        return (
          <div key={i} className="flex flex-col items-start">
            <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{item.title}</h3>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        )
      })}
    </div>
  )
}
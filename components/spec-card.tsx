import { Ruler, Users, Battery, Sun, Zap, Palette, Gauge, Anchor } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ruler: Ruler,
  users: Users,
  battery: Battery,
  sun: Sun,
  zap: Zap,
  palette: Palette,
  gauge: Gauge,
  anchor: Anchor,
}

interface Specificatie {
  label: string
  value: string
  icon?: string
}

interface SpecCardProps {
  specs: Specificatie[]
}

export default function SpecCard({ specs }: SpecCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 md:p-8">
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {specs.map((spec, i) => {
          const Icon = spec.icon ? iconMap[spec.icon] ?? Anchor : Anchor
          return (
            <div key={i} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{spec.label}</dt>
                <dd className="mt-1 text-base font-semibold text-foreground">{spec.value}</dd>
              </div>
            </div>
          )
        })}
      </dl>
    </div>
  )
}
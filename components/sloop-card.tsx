import Link from 'next/link'
import { ArrowUpRight, Ruler, Users, Battery, Sun } from 'lucide-react'

interface SloopCardProps {
  slug: string
  name: string
  image: string
  length: string
  capacity: string
  range: string
  solarOutput: string
  priceFrom?: string
  tagline?: string
}

export default function SloopCard({
  slug,
  name,
  image,
  length,
  capacity,
  range,
  solarOutput,
  priceFrom,
  tagline,
}: SloopCardProps) {
  return (
    <article className="group bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={`${name} elektrische sloep op zonne-energie`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground">{name}</h3>
            {tagline && <p className="text-sm text-muted-foreground mt-1">{tagline}</p>}
          </div>
          {priceFrom && (
            <span className="text-xs font-medium text-primary whitespace-nowrap">vanaf {priceFrom}</span>
          )}
        </div>

        <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <Ruler className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">{length}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">{capacity}</span>
          </div>
          <div className="flex items-center gap-2">
            <Battery className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">{range}</span>
          </div>
          <div className="flex items-center gap-2">
            <Sun className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">{solarOutput}</span>
          </div>
        </dl>

        <Link
          href={`/sloepen/${slug}`}
          className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-secondary transition-colors duration-200"
        >
          Meer info
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  )
}

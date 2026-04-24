import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface NewsCardProps {
  slug: string
  title: string
  excerpt: string
  date: string
  image: string
  category?: string
}

export default function NewsCard({ slug, title, excerpt, date, image, category }: NewsCardProps) {
  return (
    <article className="group bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={image}
          alt={`${title} — nieuwsartikel over elektrisch varen`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 text-xs text-muted-foreground uppercase tracking-wider">
          {category && <span className="text-primary font-medium">{category}</span>}
          {category && <span aria-hidden>•</span>}
          <time>{date}</time>
        </div>
        <h3 className="mt-3 font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">{excerpt}</p>
        <Link
          href={`/nieuws#${slug}`}
          className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-secondary transition-colors duration-200"
        >
          Lees meer
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  )
}

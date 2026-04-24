'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryProps {
  images: string[]
  alt?: string
}

export default function Gallery({ images, alt = 'Sloep impressie' }: GalleryProps) {
  const [active, setActive] = useState<number | null>(null)

  const close = () => setActive(null)
  const next = () => setActive((a) => (a === null ? null : (a + 1) % images.length))
  const prev = () => setActive((a) => (a === null ? null : (a - 1 + images.length) % images.length))

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className="group aspect-square overflow-hidden rounded-lg bg-muted border border-border hover:shadow-md transition-shadow duration-200"
            aria-label={`Bekijk afbeelding ${i + 1}`}
          >
            <img
              src={src}
              alt={`${alt} ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 bg-secondary/95 flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 p-2 text-primary-foreground hover:text-accent-foreground transition-colors duration-200"
            aria-label="Sluiten"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 p-2 text-primary-foreground hover:text-accent-foreground transition-colors duration-200"
            aria-label="Vorige"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <img
            src={images[active]}
            alt={`${alt} ${active + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 p-2 text-primary-foreground hover:text-accent-foreground transition-colors duration-200"
            aria-label="Volgende"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </>
  )
}

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  value: string
  className?: string
}

export function AnimatedCounter({ value, className = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [displayValue, setDisplayValue] = useState(value)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          observer.unobserve(el)

          // Extract numeric part and suffix
          const match = value.match(/^([\d,.]+)(.*)$/)
          if (!match) {
            setDisplayValue(value)
            return
          }

          const target = parseFloat(match[1].replace(/,/g, ''))
          const suffix = match[2] || ''
          const hasComma = match[1].includes(',')
          const duration = 2000
          const startTime = performance.now()

          function animate(now: number) {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = Math.round(eased * target)
            const formatted = hasComma ? current.toLocaleString() : String(current)
            setDisplayValue(formatted + suffix)
            if (progress < 1) requestAnimationFrame(animate)
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return <span ref={ref} className={className}>{displayValue}</span>
}

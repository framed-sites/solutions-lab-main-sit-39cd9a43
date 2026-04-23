import { useEffect } from 'react'
import { Button } from '../components/ui/button'
import { ScrollReveal } from '../components/ui/scroll-reveal'

function HeroSection0() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Solutions Lab
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Welcome to Solutions Lab
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
            We help you achieve your goals with professional solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <a href="#">Get Started</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#">Learn More</a>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl" />
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&auto=format"
              alt="Solutions Lab"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}


function FeaturesSection1() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What We Offer
          </h2>

        </div>
        <div className="space-y-20">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="flex-1 space-y-4">
              <div className="w-10 h-1 bg-primary rounded-full" />
              <h3 className="text-2xl font-semibold text-foreground">Technology Acceleration</h3>
              <p className="text-muted-foreground leading-relaxed">Future-ready infrastructure design with cloud optimization, IoT integration, and cybersecurity hardening.</p>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl" />
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format" alt="Technology Acceleration" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
            <div className="flex-1 space-y-4">
              <div className="w-10 h-1 bg-primary rounded-full" />
              <h3 className="text-2xl font-semibold text-foreground">Customer Experience Reimagining</h3>
              <p className="text-muted-foreground leading-relaxed">Journey mapping and omnichannel strategy to create emotionally resonant brand interactions.</p>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl" />
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80&auto=format" alt="Customer Experience Reimagining" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="flex-1 space-y-4">
              <div className="w-10 h-1 bg-primary rounded-full" />
              <h3 className="text-2xl font-semibold text-foreground">Operational Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">End-to-end process redesign using Six Sigma methodologies and real-time performance analytics.</p>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl" />
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format" alt="Operational Excellence" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
            <div className="flex-1 space-y-4">
              <div className="w-10 h-1 bg-primary rounded-full" />
              <h3 className="text-2xl font-semibold text-foreground">Leadership Development</h3>
              <p className="text-muted-foreground leading-relaxed">Custom executive programs building agile leadership capabilities for digital-era challenges.</p>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl" />
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80&auto=format" alt="Leadership Development" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="flex-1 space-y-4">
              <div className="w-10 h-1 bg-primary rounded-full" />
              <h3 className="text-2xl font-semibold text-foreground">Data Monetization</h3>
              <p className="text-muted-foreground leading-relaxed">Unlock new revenue streams through strategic data productization and insight-as-a-service models.</p>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl" />
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80&auto=format" alt="Data Monetization" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
            <div className="flex-1 space-y-4">
              <div className="w-10 h-1 bg-primary rounded-full" />
              <h3 className="text-2xl font-semibold text-foreground">Mergers &amp; Acquisitions Strategy</h3>
              <p className="text-muted-foreground leading-relaxed">Integration frameworks and synergy realization plans for seamless corporate transitions.</p>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl" />
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format" alt="Mergers &amp; Acquisitions Strategy" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CtaSection2() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="relative rounded-2xl bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-[length:200%_200%] animate-gradient-shift p-8 md:p-16 text-center space-y-6 shadow-xl shadow-primary/20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Ready to Get Started?</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">Contact us today to learn how we can help.</p>
            <Button size="lg" variant="secondary" className="shadow-lg" asChild>
              <a href="#">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Services | Solutions Lab'
  }, [])

  return (
    <main>
      <HeroSection0 />
      <ScrollReveal>
        <FeaturesSection1 />
      </ScrollReveal>
      <ScrollReveal>
        <CtaSection2 />
      </ScrollReveal>
    </main>
  )
}

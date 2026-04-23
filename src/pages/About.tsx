import { useEffect } from 'react'
import { AnimatedCounter } from '../components/ui/animated-counter'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
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


function ContentSection1() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center max-w-6xl">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Content</h2>
          <div className="prose prose-gray max-w-none text-muted-foreground space-y-4">
            <p>While others offer quick fixes, we engineer lasting change through our proprietary DIVE Methodology—Diagnose, Innovate, Validate, Elevate. This evidence-based framework ensures every solution is rigorously tested against real-world variables before implementation.</p>
            <p>Our team includes former NASA engineers, behavioral economists, and industry specialists who speak your language fluently. This multidisciplinary approach allows us to see connections others miss and develop solutions that work across departments and systems.</p>
            <p>Transparency is non-negotiable. You&#39;ll receive continuous progress tracking with quantifiable milestones, not just vague promises. We measure success by your business outcomes, not billable hours.</p>
          </div>

        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80&auto=format"
            alt="Content"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}

function TeamSection2() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center overflow-hidden bg-card shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <CardContent className="pt-8 pb-6 space-y-4">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all duration-300">
                <span className="text-2xl font-bold text-primary-foreground">DAT</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Dr. Aris Thorne</h3>
                <p className="text-sm text-muted-foreground">Chief Innovation Officer</p>
              </div>
            </CardContent>
          </Card>
          <Card className="text-center overflow-hidden bg-card shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <CardContent className="pt-8 pb-6 space-y-4">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all duration-300">
                <span className="text-2xl font-bold text-primary-foreground">PS</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Priya Sharma</h3>
                <p className="text-sm text-muted-foreground">Director of Behavioral Strategy</p>
              </div>
            </CardContent>
          </Card>
          <Card className="text-center overflow-hidden bg-card shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <CardContent className="pt-8 pb-6 space-y-4">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all duration-300">
                <span className="text-2xl font-bold text-primary-foreground">DC</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">David Chen</h3>
                <p className="text-sm text-muted-foreground">Lead Systems Architect</p>
              </div>
            </CardContent>
          </Card>
          <Card className="text-center overflow-hidden bg-card shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <CardContent className="pt-8 pb-6 space-y-4">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all duration-300">
                <span className="text-2xl font-bold text-primary-foreground">ER</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Elena Rodriguez</h3>
                <p className="text-sm text-muted-foreground">Head of Impact Measurement</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


function StatsSection3() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-br from-primary via-primary/90 to-primary/70">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-2 md:border-r md:border-primary-foreground/20 px-4">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground">
              <AnimatedCounter value="92%" />
            </div>
            <div className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">Client Retention Rate</div>
          </div>
          <div className="text-center space-y-2 md:border-r md:border-primary-foreground/20 px-4">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground">
              <AnimatedCounter value="14.8x" />
            </div>
            <div className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">Average ROI Delivered</div>
          </div>
          <div className="text-center space-y-2 md:border-r md:border-primary-foreground/20 px-4">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground">
              <AnimatedCounter value="42" />
            </div>
            <div className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">Patented Methodologies</div>
          </div>
          <div className="text-center space-y-2  px-4">
            <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground">
              <AnimatedCounter value="27" />
            </div>
            <div className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">Industries Transformed</div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default function AboutPage() {
  useEffect(() => {
    document.title = 'About | Solutions Lab'
  }, [])

  return (
    <main>
      <HeroSection0 />
      <ScrollReveal>
        <ContentSection1 />
      </ScrollReveal>
      <ScrollReveal>
        <TeamSection2 />
      </ScrollReveal>
      <ScrollReveal>
        <StatsSection3 />
      </ScrollReveal>
    </main>
  )
}

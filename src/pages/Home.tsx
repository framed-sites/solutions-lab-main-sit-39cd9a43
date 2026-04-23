import { useEffect } from 'react'
import { Globe, Heart, Rocket, Shield, Sparkles, Star, Zap } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { ScrollReveal } from '../components/ui/scroll-reveal'

function HeroSection0() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 md:px-6">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&auto=format"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>
      <div className="relative z-10 container mx-auto text-center max-w-4xl space-y-8">
        <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-sm font-medium text-white">
          Solutions Lab
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance">
          Welcome to Solutions Lab
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto backdrop-blur-[2px]">
          We help you achieve your goals with professional solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#">Get Started</a>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
            <a href="#">Learn More</a>
          </Button>
        </div>
      </div>
    </section>
  )
}


function FeaturesSection1() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What We Offer
          </h2>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="group bg-card border shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-t-2 hover:border-t-primary transition-all duration-300">
            <CardHeader>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-2 group-hover:from-primary/25 group-hover:to-primary/10 transition-colors duration-300">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <CardTitle className="text-lg">Strategic Consulting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">Data-driven roadmaps tailored to your unique business objectives and market position.</p>
            </CardContent>
          </Card>
          <Card className="group bg-card border shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-t-2 hover:border-t-primary transition-all duration-300">
            <CardHeader>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-2 group-hover:from-primary/25 group-hover:to-primary/10 transition-colors duration-300">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <CardTitle className="text-lg">Digital Transformation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">Seamless integration of emerging technologies to modernize operations and customer experiences.</p>
            </CardContent>
          </Card>
          <Card className="group bg-card border shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-t-2 hover:border-t-primary transition-all duration-300">
            <CardHeader>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-2 group-hover:from-primary/25 group-hover:to-primary/10 transition-colors duration-300">
                <Globe className="w-7 h-7 text-primary" />
              </div>
              <CardTitle className="text-lg">Process Optimization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">Streamline workflows and eliminate inefficiencies with our lean methodology framework.</p>
            </CardContent>
          </Card>
          <Card className="group bg-card border shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-t-2 hover:border-t-primary transition-all duration-300">
            <CardHeader>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-2 group-hover:from-primary/25 group-hover:to-primary/10 transition-colors duration-300">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <CardTitle className="text-lg">Innovation Labs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">Co-create disruptive solutions through rapid prototyping and user-centered design sprints.</p>
            </CardContent>
          </Card>
          <Card className="group bg-card border shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-t-2 hover:border-t-primary transition-all duration-300">
            <CardHeader>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-2 group-hover:from-primary/25 group-hover:to-primary/10 transition-colors duration-300">
                <Rocket className="w-7 h-7 text-primary" />
              </div>
              <CardTitle className="text-lg">AI Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">Implement intelligent automation to enhance decision-making and predictive capabilities.</p>
            </CardContent>
          </Card>
          <Card className="group bg-card border shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-t-2 hover:border-t-primary transition-all duration-300">
            <CardHeader>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-2 group-hover:from-primary/25 group-hover:to-primary/10 transition-colors duration-300">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <CardTitle className="text-lg">Sustainability Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">Develop environmentally conscious business models that drive long-term value creation.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

// Icon imports for FeaturesSection1

function AboutSection2() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center max-w-6xl">
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/5 rounded-3xl -rotate-3" />
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg ring-1 ring-border">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format"
              alt="About Us"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="space-y-6">
          <div className="w-12 h-1 bg-primary rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Us</h2>
          <div className="text-muted-foreground space-y-4 leading-relaxed">
            <p>We are a dedicated team committed to delivering exceptional results for our clients.</p>
          </div>

        </div>
      </div>
    </section>
  )
}

function TestimonialsSection3() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card border border-primary/10 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="pt-6 space-y-4">
              <div className="text-5xl text-primary/15 font-serif leading-none select-none">&ldquo;</div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground italic -mt-1 leading-relaxed">Within six months, their AI implementation reduced operational costs by 37% while improving service quality. A game-changer for our retail chain.</p>
              <div className="flex items-center gap-3 pt-3 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm ring-2 ring-primary/20">
                  M
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Marcus Reynolds</p>
                  <p className="text-xs text-muted-foreground">COO, Global Retail Partners</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border border-primary/10 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="pt-6 space-y-4">
              <div className="text-5xl text-primary/15 font-serif leading-none select-none">&ldquo;</div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground italic -mt-1 leading-relaxed">The innovation sprint redefined our product development process. We&#39;ve launched three new revenue streams from their recommendations.</p>
              <div className="flex items-center gap-3 pt-3 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm ring-2 ring-primary/20">
                  E
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">Elena Rodriguez</p>
                  <p className="text-xs text-muted-foreground">VP Product Innovation, TechFusion Inc.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border border-primary/10 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="pt-6 space-y-4">
              <div className="text-5xl text-primary/15 font-serif leading-none select-none">&ldquo;</div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground italic -mt-1 leading-relaxed">Their sustainability framework didn&#39;t just cut our carbon footprint—it attracted eco-conscious consumers and boosted brand value by 22%.</p>
              <div className="flex items-center gap-3 pt-3 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm ring-2 ring-primary/20">
                  D
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">David Chen</p>
                  <p className="text-xs text-muted-foreground">CEO, Verde Manufacturing</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


function CtaSection4() {
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


export default function HomePage() {
  useEffect(() => {
    document.title = 'Home | Solutions Lab'
  }, [])

  return (
    <main>
      <HeroSection0 />
      <ScrollReveal>
        <FeaturesSection1 />
      </ScrollReveal>
      <ScrollReveal>
        <AboutSection2 />
      </ScrollReveal>
      <ScrollReveal>
        <TestimonialsSection3 />
      </ScrollReveal>
      <ScrollReveal>
        <CtaSection4 />
      </ScrollReveal>
    </main>
  )
}

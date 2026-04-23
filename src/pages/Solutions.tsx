import { useEffect } from 'react'
import { Button } from '../components/ui/button'
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


function ContentSection1() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 ">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center max-w-6xl">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Content</h2>
          <div className="prose prose-gray max-w-none text-muted-foreground space-y-4">
            <p>We specialize in the unsolvable - challenges where conventional consulting fails. Our process begins with &#39;problem deconstruction,&#39; breaking down complex issues into manageable components using systems mapping and constraint analysis.</p>
            <p>In healthcare, we&#39;ve redesigned patient flow systems that reduced wait times by 65% while improving outcomes. For financial institutions, we&#39;ve built anti-fraud algorithms that detect sophisticated threats traditional systems miss. Retail clients leverage our customer journey analytics to increase lifetime value by up to 200%.</p>
            <p>Each solution includes implementation support with your team, comprehensive training, and success metrics tailored to your KPIs. We don&#39;t deliver reports—we deliver results embedded in your operations.</p>
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

function CtaSection2() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-2xl text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready to Get Started?</h2>
        <p className="text-lg text-muted-foreground">Contact us today to learn how we can help.</p>
        <Button size="lg" asChild>
          <a href="#">Contact Us</a>
        </Button>
      </div>
    </section>
  )
}


export default function SolutionsPage() {
  useEffect(() => {
    document.title = 'Solutions | Solutions Lab'
  }, [])

  return (
    <main>
      <HeroSection0 />
      <ScrollReveal>
        <ContentSection1 />
      </ScrollReveal>
      <ScrollReveal>
        <CtaSection2 />
      </ScrollReveal>
    </main>
  )
}

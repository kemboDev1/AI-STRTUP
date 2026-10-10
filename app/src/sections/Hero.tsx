import { ArrowRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const brands = ['Vercel', 'Stripe', 'Linear', 'Notion', 'Figma', 'Slack', 'Github', 'Shopify']

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20">
      <div className="bg-grid bg-grid-fade pointer-events-none absolute inset-0" />
      <div className="animate-pulse-slow pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/30 blur-[120px]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
          <Zap className="h-3.5 w-3.5" /> The next generation AI assistant
        </span>
        <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
          Build faster with <span className="text-gradient">NEXA AI</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Write, code, analyze and automate. NEXA AI turns your ideas into finished work in seconds.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href="#demo">
              Start for free <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#features">See features</a>
          </Button>
        </div>
      </div>
      <div className="relative mt-20 overflow-hidden">
        <p className="mb-6 text-center text-xs uppercase tracking-widest text-muted-foreground">
          Trusted by fast-moving teams
        </p>
        <div className="flex w-max gap-16 marquee-track">
          {[...brands, ...brands].map((b, i) => (
            <span key={i} className="font-display text-xl font-semibold text-muted-foreground/60">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

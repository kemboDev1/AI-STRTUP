import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const links = [
  { href: '#features', label: 'Features' },
  { href: '#demo', label: 'Demo' },
  { href: '#pricing', label: 'Pricing' },
]

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 font-display text-xl font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/20 text-primary">
            <Sparkles className="h-4 w-4" />
          </span>
          NEXA <span className="text-gradient">AI</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <Button asChild size="sm">
          <a href="#demo">Try it now</a>
        </Button>
      </div>
    </header>
  )
}

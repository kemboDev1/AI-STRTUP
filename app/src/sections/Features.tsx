import { Brain, Code2, Globe, Layers, ShieldCheck, Zap } from 'lucide-react'

const features = [
  { icon: Brain, title: 'Smart reasoning', text: 'Understands context and gives clear, accurate answers to complex questions.' },
  { icon: Code2, title: 'Code assistant', text: 'Generate, explain and debug code in any popular language.' },
  { icon: Zap, title: 'Lightning fast', text: 'Responses stream in real time so you never wait around.' },
  { icon: Globe, title: 'Multilingual', text: 'Chat naturally in dozens of languages, including Uzbek, Russian and English.' },
  { icon: Layers, title: 'Easy integration', text: 'Plug NEXA AI into your apps with a simple API.' },
  { icon: ShieldCheck, title: 'Private & secure', text: 'Your data stays yours. Encrypted in transit and never sold.' },
]

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-bold md:text-5xl">Everything you need</h2>
        <p className="mt-4 text-muted-foreground">Powerful tools, designed to stay out of your way.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, text }) => (
          <div key={title} className="glow-card rounded-xl bg-card p-6 transition-transform hover:-translate-y-1">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/15 text-primary">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

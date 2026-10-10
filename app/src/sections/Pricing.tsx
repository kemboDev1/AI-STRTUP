import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const plans = [
  { name: 'Free', price: '$0', items: ['50 messages / day', 'Basic model', 'Community support'], hot: false },
  { name: 'Pro', price: '$12', items: ['Unlimited messages', 'Advanced model', 'Priority speed', 'API access'], hot: true },
  { name: 'Team', price: '$39', items: ['Everything in Pro', 'Shared workspace', 'Admin controls', 'Priority support'], hot: false },
]

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-bold md:text-5xl">Simple pricing</h2>
        <p className="mt-4 text-muted-foreground">Start free, upgrade when you grow.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className={`rounded-2xl bg-card p-8 ${p.hot ? 'glow-card ring-1 ring-primary' : 'border border-border'}`}>
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="mt-3 font-display text-4xl font-bold">
              {p.price}
              <span className="text-sm font-normal text-muted-foreground"> /month</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {p.items.map((it) => (
                <li key={it} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" /> {it}
                </li>
              ))}
            </ul>
            <Button className="mt-8 w-full" variant={p.hot ? 'default' : 'outline'}>
              Choose {p.name}
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
import { Bot, Send, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type Msg = { role: 'user' | 'ai'; text: string }

// Demo only: replies are simulated in the browser.
// To connect a real model, call your own backend (e.g. a Vercel /api route) here.
// Never put API keys in frontend code.
function fakeReply(q: string): string {
  const s = q.toLowerCase()
  if (/(salom|hello|hi|привет)/.test(s)) return 'Hello! I am NEXA AI. How can I help you today?'
  if (/(code|kod|код)/.test(s)) return 'Sure, tell me the language and what the code should do, and I will write it.'
  if (/(price|narx|pricing|цена)/.test(s)) return 'You can start for free. See the Pricing section below for paid plans.'
  return 'This is a demo reply. Connect a real AI backend to get full answers to: "' + q + '"'
}

export default function Demo() {
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: 'ai', text: 'Hi! Ask me anything to try the NEXA AI chat.' },
  ])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = endRef.current?.parentElement
    if (el) el.scrollTop = el.scrollHeight
  }, [msgs, busy])

  function send() {
    const q = input.trim()
    if (!q || busy) return
    setMsgs((m) => [...m, { role: 'user', text: q }])
    setInput('')
    setBusy(true)
    setTimeout(() => {
      setMsgs((m) => [...m, { role: 'ai', text: fakeReply(q) }])
      setBusy(false)
    }, 800)
  }

  return (
    <section id="demo" className="mx-auto max-w-3xl px-6 py-24">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold md:text-5xl">Try NEXA AI</h2>
        <p className="mt-4 text-muted-foreground">A live preview of the chat experience.</p>
      </div>
      <div className="glow-card overflow-hidden rounded-2xl bg-card">
        <div className="h-80 space-y-4 overflow-y-auto p-5">
          {msgs.map((m, i) => (
            <div key={i} className={`flex items-start gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${m.role === 'user' ? 'bg-accent/20 text-accent' : 'bg-primary/20 text-primary'}`}>
                {m.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
              </span>
              <p className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${m.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                {m.text}
              </p>
            </div>
          ))}
          {busy && <p className="text-sm text-muted-foreground">NEXA is typing...</p>}
          <div ref={endRef} />
        </div>
        <div className="flex gap-2 border-t border-border p-4">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            placeholder="Type a message..."
          />
          <Button onClick={send} disabled={busy} aria-label="Send">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

import { useRef, useState, type RefObject } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Lock, LockOpen, ChatCircleDots, CheckCircle } from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger)

type StateKey = 'locked' | 'unlocked' | 'contacted' | 'hired'

const STATES: Record<
  StateKey,
  { label: string; badge: string; sub: string; Icon: typeof Lock }
> = {
  locked: {
    label: 'Reco locked',
    badge: 'Unlock, 5 credits',
    sub: '100% match. Domestic calling. English',
    Icon: Lock,
  },
  unlocked: {
    label: 'Reco unlocked',
    badge: '+91 9•••• ••210',
    sub: '100% match. Domestic calling. English',
    Icon: LockOpen,
  },
  contacted: {
    label: 'WhatsApp sent',
    badge: 'Contacted, 2h ago',
    sub: 'Awaiting response',
    Icon: ChatCircleDots,
  },
  hired: {
    label: 'Hired',
    badge: 'Moved to Hired tab',
    sub: 'Closed by recruiter',
    Icon: CheckCircle,
  },
}

const ORDER: StateKey[] = ['locked', 'unlocked', 'contacted', 'hired']

export default function StateCard({ triggerRef }: { triggerRef: RefObject<HTMLElement | null> }) {
  const [index, setIndex] = useState(0)
  const scope = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduce || !triggerRef.current) return

      const proxy = { progress: 0 }
      gsap.to(proxy, {
        progress: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.4,
        },
        onUpdate: () => {
          const i = Math.min(ORDER.length - 1, Math.floor(proxy.progress * ORDER.length))
          setIndex(i)
        },
      })
    },
    { scope, dependencies: [triggerRef] },
  )

  const key = ORDER[index]
  const s = STATES[key]
  const Icon = s.Icon

  return (
    <div
      ref={scope}
      className="w-full max-w-sm select-none rounded-2xl border border-line bg-surface p-6 shadow-[0_24px_60px_-24px_rgba(28,26,22,0.18)]"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft font-mono-tag text-xs text-accent">
            AP
          </div>
          <div>
            <p className="text-sm font-medium text-ink">Anantham P.</p>
            <p className="font-mono-tag text-[11px] text-muted">Sector 25, Noida</p>
          </div>
        </div>
        <span className="font-mono-tag inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-[10px] font-medium text-accent">
          <Icon size={12} weight="bold" />
          {s.label}
        </span>
      </div>

      <div className="mb-4 h-px w-full bg-line" />

      <p className="font-mono-tag mb-3 text-[11px] text-muted">{s.sub}</p>
      <div className="rounded-lg border border-accent/25 bg-accent-soft/60 px-3 py-2.5 font-mono-tag text-[13px] text-accent">
        {s.badge}
      </div>

      <div className="mt-5 flex gap-2">
        {ORDER.map((k, i) => (
          <div key={k} aria-hidden className="h-1 flex-1 overflow-hidden rounded-full bg-line">
            <span
              className="block h-full rounded-full transition-all duration-200"
              style={{
                width: i <= index ? '100%' : '0%',
                background: 'var(--color-accent)',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

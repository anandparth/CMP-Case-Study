import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type StateKey = 'locked' | 'unlocked' | 'contacted' | 'hired'

const STATES: Record<
  StateKey,
  { label: string; tone: string; badge: string; sub: string }
> = {
  locked: {
    label: 'Reco Locked',
    tone: 'var(--color-gold)',
    badge: 'Unlock · 5 credits',
    sub: '100% Match · Domestic Calling · English',
  },
  unlocked: {
    label: 'Reco Unlocked',
    tone: 'var(--color-green)',
    badge: '+91 9•••• ••210',
    sub: '100% Match · Domestic Calling · English',
  },
  contacted: {
    label: 'WhatsApp sent',
    tone: 'var(--color-green)',
    badge: 'Contacted · 2h ago',
    sub: 'Awaiting response',
  },
  hired: {
    label: 'Hired',
    tone: 'var(--color-gold)',
    badge: 'Moved to Hired tab',
    sub: 'Closed by recruiter',
  },
}

const ORDER: StateKey[] = ['locked', 'unlocked', 'contacted', 'hired']

export default function StateCard() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const id = setInterval(() => setIndex((i) => (i + 1) % ORDER.length), 2600)
    return () => clearInterval(id)
  }, [])

  const key = ORDER[index]
  const s = STATES[key]

  return (
    <div className="w-full max-w-sm select-none rounded-2xl border border-line bg-ink-2/80 p-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-3 font-mono-tag text-xs text-text-dim">
            AP
          </div>
          <div>
            <p className="font-body text-sm font-medium text-heading">Anantham P.</p>
            <p className="font-mono-tag text-[11px] text-text-dim">Sector 25, Noida</p>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.span
            key={key}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.3 }}
            className="font-mono-tag rounded-full px-2.5 py-1 text-[10px] font-medium"
            style={{ color: s.tone, background: `color-mix(in srgb, ${s.tone} 16%, transparent)` }}
          >
            {s.label}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="mb-4 h-px w-full bg-line-soft" />

      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <p className="font-mono-tag mb-3 text-[11px] text-text-dim">{s.sub}</p>
          <div
            className="rounded-lg border px-3 py-2.5 font-mono-tag text-[13px]"
            style={{
              borderColor: `color-mix(in srgb, ${s.tone} 40%, transparent)`,
              color: s.tone,
              background: `color-mix(in srgb, ${s.tone} 8%, transparent)`,
            }}
          >
            {s.badge}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-2 flex gap-2">
        {ORDER.map((k, i) => (
          <button
            key={k}
            aria-label={`Show ${STATES[k].label} state`}
            onClick={() => setIndex(i)}
            className="flex h-11 flex-1 items-center"
          >
            <span className="block h-1 w-full overflow-hidden rounded-full bg-line-soft">
              <span
                className="block h-full rounded-full transition-all duration-300"
                style={{
                  width: i === index ? '100%' : '0%',
                  background: 'var(--color-gold)',
                }}
              />
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

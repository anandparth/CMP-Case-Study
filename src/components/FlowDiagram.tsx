import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NODES = [
  {
    label: 'Applied candidate',
    body: 'A candidate applies or matches from the database and lands in the New tab, ready for the recruiter to review.',
  },
  {
    label: 'Screening & messaging',
    body: 'Pre-screening answers get reviewed, and the recruiter reaches out by WhatsApp or a direct message.',
  },
  {
    label: 'Interested or not',
    body: "The recruiter marks the outcome. Not interested moves the card aside; interested keeps it active in the flow.",
  },
  {
    label: 'Data & database',
    body: 'Recruiters can download candidate data or pull further matches from the wider database, outside the applied list.',
  },
  {
    label: 'Removed or hired',
    body: 'The candidate eventually exits the active list into Removed, with a reason captured, or into Hired.',
  },
]

export default function FlowDiagram() {
  const [active, setActive] = useState(0)

  return (
    <div className="rounded-2xl border border-line bg-surface p-6 sm:p-10">
      <div className="relative">
        <svg
          className="pointer-events-none absolute left-0 top-[27px] hidden w-full sm:block"
          height="6"
          preserveAspectRatio="none"
          viewBox="0 0 100 6"
        >
          <path
            d="M0,3 Q 12,0 25,3 T 50,3 T 75,3 T 100,3"
            fill="none"
            stroke="var(--color-line)"
            strokeWidth="1.6"
            strokeDasharray="1 6"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-5 sm:gap-4">
          {NODES.map((n, i) => (
            <button
              key={n.label}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={`min-h-11 rounded-full border px-4 py-2.5 text-left text-[13px] font-medium transition-colors sm:text-center ${
                active === i
                  ? 'border-accent bg-accent-soft text-accent'
                  : 'border-line bg-paper text-ink-soft hover:border-accent/40'
              }`}
            >
              {n.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 min-h-[64px]">
        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="max-w-xl text-[15px] leading-relaxed text-ink-soft"
          >
            <span className="font-hand mr-1.5 text-[22px] leading-none text-accent">
              {active + 1}.
            </span>
            {NODES[active].body}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  )
}

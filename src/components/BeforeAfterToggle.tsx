import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ScreenFigure from './ScreenFigure'

const VIEWS = [
  {
    key: 'shipped',
    label: 'Shipped',
    src: './screens/01-cmp-main.png',
    width: 1280,
    height: 690,
    alt: 'CMP candidate list with New/Viewed/Hired/Removed tabs, filters sidebar, match score badges, and a Bulk actions control in the header',
    caption: 'The shipped list: tabs for New, Viewed, Hired, and Removed, filters, match score badges, and Bulk actions in the header. No context switch required.',
  },
  {
    key: 'exploration',
    label: 'Traditional approach',
    src: './screens/02-traditional-approach-1.png',
    width: 1280,
    height: 690,
    alt: 'Checkbox multi-select pattern with a floating bulk-unlock action bar and a selection counter capped at 200 candidates',
    caption: 'An earlier exploration: checkbox multi-select with a floating action bar, capped at 200 selected candidates per bulk unlock.',
  },
]

export default function BeforeAfterToggle() {
  const [view, setView] = useState(0)
  const current = VIEWS[view]

  return (
    <div>
      <div
        role="tablist"
        aria-label="Compare the shipped list against an earlier exploration"
        className="mx-auto flex w-fit gap-2"
      >
        {VIEWS.map((v, i) => (
          <button
            key={v.key}
            role="tab"
            aria-selected={view === i}
            onClick={() => setView(i)}
            className={`sketch-pill min-h-11 px-4 text-[13px] font-medium ${
              view === i ? 'bg-ink text-paper' : 'bg-surface text-ink-soft hover:bg-accent-soft'
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ScreenFigure
                src={current.src}
                width={current.width}
                height={current.height}
                alt={current.alt}
                caption={current.caption}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

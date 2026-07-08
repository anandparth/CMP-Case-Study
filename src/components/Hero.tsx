import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import StateCard from './StateCard'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  return (
    <section ref={heroRef} className="relative overflow-hidden border-b border-line">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.6]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--color-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-line) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 70% 55% at 50% 0%, black 30%, transparent 100%)',
        }}
      />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 pt-20 pb-24 lg:grid-cols-[1.15fr_0.85fr] lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-mono-tag inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-[11px] uppercase tracking-widest text-muted">
            Candidate Management Page
          </span>
          <h1 className="mt-6 text-[38px] leading-[1.08] font-semibold sm:text-[46px] lg:text-[52px]">
            Every unlock is a bet.
            <br />
            <span className="text-accent">We redesigned the odds.</span>
          </h1>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-ink-soft">
            Recruiters on JobHai scroll long candidate lists deciding who's worth a credit to
            unlock. Here's how that list got rebuilt.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#problem"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-ink px-5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              Read the case study
              <ArrowRight size={16} weight="bold" />
            </a>
            <a
              href="#showcase"
              className="font-mono-tag inline-flex min-h-11 items-center rounded-lg border border-line bg-surface px-5 text-sm text-ink-soft transition-colors hover:border-accent/40 hover:text-ink"
            >
              Jump to the screens
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <div>
            <StateCard triggerRef={heroRef} />
            <p className="font-mono-tag mt-3 text-center text-[10px] text-muted">
              scroll to watch a card move through its real states
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

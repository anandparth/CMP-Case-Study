import { motion } from 'framer-motion'
import StateCard from './StateCard'

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--color-line-soft) 1px, transparent 1px), linear-gradient(to bottom, var(--color-line-soft) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-mono-tag inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-[11px] uppercase tracking-widest text-text-dim">
            Case study · Candidate Management Page
          </span>
          <h1 className="mt-6 text-[38px] leading-[1.08] font-semibold tracking-tight sm:text-[46px] lg:text-[54px]">
            Every unlock is a bet.
            <br />
            <span className="text-gold">We redesigned the odds.</span>
          </h1>
          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-text">
            On JobHai, recruiters spend their day scrolling a list of candidates, deciding — one card
            at a time — who's worth a credit to unlock. CMP Reimagined rebuilt that list: how it's
            filtered, how bulk decisions get made, and what a recruiter sees before they spend.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#problem"
              className="rounded-lg bg-gold px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Read the case study
            </a>
            <a
              href="#showcase"
              className="font-mono-tag rounded-lg border border-line px-5 py-2.5 text-sm text-text transition-colors hover:border-gold/40 hover:text-heading"
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
            <StateCard />
            <p className="font-mono-tag mt-3 text-center text-[10px] text-text-dim">
              the real state a candidate card moves through
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

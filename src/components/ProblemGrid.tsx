import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const PROBLEMS = [
  {
    tag: 'Bulk actions',
    title: 'Bulk decisions lived outside the CMP',
    body: 'To unlock or contact candidates in bulk, recruiters had to leave the candidate list entirely and work from a separate surface. Every bulk decision meant losing the context — filters, scroll position, what they\'d already reviewed — of the list they were just looking at.',
  },
  {
    tag: 'Screening answers',
    title: 'Pre-screening answers were buried',
    body: 'Recruiters ask screening questions for a reason — cold-calling experience, CRM familiarity, shift availability. But those answers sat behind a click, on every single card, in a list where recruiters were triaging hundreds of candidates a day.',
  },
  {
    tag: 'Unlock conversion',
    title: 'Recruiters weren\'t unlocking enough',
    body: 'Unlocking a candidate costs credits. If the card in front of a recruiter doesn\'t make the case for why this candidate is worth that spend — match strength, requirements met, source — the safe move is to skip. That hesitation was showing up in how the list got used.',
  },
  {
    tag: 'Job tiers',
    title: 'Basic, Premium, and Boosted didn\'t agree',
    body: 'A Basic job listing, a Premium listing, and a Premium+Boosted listing each rendered their own version of the candidate list — different card densities, different actions, different filter sets. Recruiters managing multiple job tiers were relearning the interface every time they switched.',
  },
]

export default function ProblemGrid() {
  return (
    <section id="problem" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="The brief"
        tone="clay"
        title="Four things were quietly broken"
        lede="None of these were catastrophic on their own. Together, they meant recruiters were working harder than the product needed them to, on the single screen they spend most of their day in."
      />
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {PROBLEMS.map((p, i) => (
          <Reveal key={p.tag} delay={i * 0.08}>
            <div className="h-full rounded-xl border border-line bg-ink-2 p-6 transition-colors hover:border-clay/30">
              <span className="font-mono-tag text-[11px] uppercase tracking-widest text-clay">
                {p.tag}
              </span>
              <h3 className="mt-3 text-[19px] font-semibold text-heading">{p.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-text">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

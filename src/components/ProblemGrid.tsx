import Reveal from './Reveal'

const PROBLEMS = [
  {
    tag: 'Bulk actions',
    body: "To unlock or contact candidates in bulk, recruiters had to leave the candidate list and work from a separate surface, losing their filters and scroll position every time.",
  },
  {
    tag: 'Screening answers',
    body: 'Recruiters ask screening questions for a reason: cold calling experience, CRM familiarity, shift availability. The answers sat behind a click, on every card, in a list of hundreds.',
  },
  {
    tag: 'Unlock conversion',
    body: "Unlocking a candidate costs credits. If a card doesn't make the case for why this candidate is worth that spend, the safe move is to skip it.",
  },
  {
    tag: 'Job tiers',
    body: 'Basic, Premium, and Premium+Boosted listings each rendered their own version of the candidate list. Recruiters managing several job tiers relearned the interface every time they switched.',
  },
]

export default function ProblemGrid() {
  return (
    <section id="problem" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <h2 className="text-[28px] leading-tight font-semibold sm:text-[32px]">
            Four things were quietly broken
          </h2>
          <p className="mt-4 max-w-sm text-[16px] leading-relaxed text-ink-soft">
            None of these were catastrophic alone. Together, they meant recruiters worked harder
            than the product needed them to, on the one screen they live in all day.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.tag} delay={i * 0.06}>
              <div className={`sketch-card h-full p-6 ${i % 2 ? 'sketch-card--alt' : ''}`}>
                <div className="mb-3 flex items-baseline gap-2.5">
                  <span className="font-hand text-[26px] leading-none text-[var(--d-red)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono-tag text-[12px] uppercase tracking-widest text-accent">
                    {p.tag}
                  </span>
                </div>
                <p className="text-[15px] leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

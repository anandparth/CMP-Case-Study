import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const METHODS = [
  {
    n: 'Shadowing',
    title: 'Recruiter interviews and shadowing',
    body: 'Sat with recruiters working live job listings and watched how they actually moved through the candidate list: where they hesitated before unlocking, what made them skip a card, when they gave up on a filter and just scrolled instead.',
  },
  {
    n: 'Analytics',
    title: 'Product analytics and funnel data',
    body: 'Traced the funnel from list view to unlock to contact to outcome across job tiers, looking for the steps where recruiters dropped off, and where usage diverged between Basic, Premium, and Boosted listings.',
  },
  {
    n: 'Support signal',
    title: 'Support tickets and recruiter feedback',
    body: "Pulled recurring themes out of support tickets and NPS comments. The same friction, described independently by recruiters who'd never talked to each other, is a stronger signal than any single interview.",
  },
  {
    n: 'Competitive and stakeholder',
    title: 'Competitive audit and internal input',
    body: 'Benchmarked how other ATS and recruiter tools handled bulk actions, match scoring, and candidate cards, then checked those patterns against what PM, sales, and support stakeholders inside JobHai were already hearing.',
  },
]

export default function ResearchLog() {
  return (
    <section className="border-t border-line bg-surface/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="How we found out"
          title="Four sources, one shortlist of problems"
          lede="No single method here is exotic. What mattered was triangulating: watching behavior, reading the data, listening to complaints, and checking the market, until the same handful of issues kept showing up from every direction."
        />
        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {METHODS.map((m, i) => (
            <Reveal key={m.n} delay={i * 0.06}>
              <div className="border-t border-line pt-5">
                <span className="font-mono-tag text-[11px] uppercase tracking-widest text-muted">
                  {m.n}
                </span>
                <h3 className="mt-2 text-[17px] font-semibold text-ink">{m.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">{m.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const METHODS = [
  {
    n: 'Shadowing',
    title: 'Recruiter interviews & shadowing',
    body: 'Sat with recruiters working live job listings and watched how they actually moved through the candidate list — where they hesitated before unlocking, what made them skip a card, when they gave up on a filter and just scrolled instead.',
  },
  {
    n: 'Analytics',
    title: 'Product analytics & funnel data',
    body: 'Traced the funnel from list view → unlock → contact → outcome across job tiers, looking for the steps where recruiters were dropping off or where usage diverged between Basic, Premium, and Boosted listings.',
  },
  {
    n: 'Support signal',
    title: 'Support tickets & recruiter feedback',
    body: 'Pulled recurring themes out of support tickets and NPS comments — the same friction, described independently by recruiters who\'d never talked to each other, is a stronger signal than any single interview.',
  },
  {
    n: 'Competitive + stakeholder',
    title: 'Competitive audit & internal stakeholder input',
    body: 'Benchmarked how other ATS and recruiter tools handled bulk actions, match scoring, and candidate cards — then checked those patterns against what PM, sales, and support stakeholders inside JobHai were already hearing.',
  },
]

export default function ResearchLog() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="How we found out"
        tone="green"
        title="Four sources, one shortlist of problems"
        lede="No single method here is exotic. What mattered was triangulating — watching behavior, reading the data, listening to complaints, and checking the market — until the same handful of issues kept showing up from every direction."
      />
      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
        {METHODS.map((m, i) => (
          <Reveal key={m.n} delay={i * 0.06} className="h-full">
            <div className="h-full bg-ink-2 p-6">
              <span className="font-mono-tag text-[11px] text-green">{m.n}</span>
              <h3 className="mt-3 text-[16px] font-semibold text-heading leading-snug">{m.title}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-text">{m.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const POINTS = [
  {
    tag: 'Shipped',
    body: 'CMP Reimagined went to production across all three job tiers — Basic, Premium, and Premium+Boosted — replacing three inconsistent implementations with one shared system.',
  },
  {
    tag: 'Structural',
    body: 'Bulk actions, screening answers, and the lock/unlock/tracking state taxonomy all moved inline, into the card and the list header, out of separate flows and hidden clicks.',
  },
  {
    tag: 'The honest gap',
    body: 'No formal A/B instrumentation was in place at launch, so I don\'t have a clean before/after number to put here — and I\'d rather say that plainly than dress up a hunch as data.',
  },
]

export default function Outcomes() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="What actually shipped"
        tone="clay"
        title="Real outcomes, honestly scoped"
        lede="This is where a lot of case studies reach for a number that was never measured. Here's what I can actually stand behind."
      />
      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
        {POINTS.map((p, i) => (
          <Reveal key={p.tag} delay={i * 0.08}>
            <div className="h-full rounded-xl border border-line bg-ink-2 p-6">
              <span className="font-mono-tag text-[11px] uppercase tracking-widest text-text-dim">
                {p.tag}
              </span>
              <p className="mt-3 text-[15px] leading-relaxed text-text">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

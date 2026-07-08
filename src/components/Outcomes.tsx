import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Outcomes() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="What shipped"
        title="Real outcomes, honestly scoped"
        lede="This is where a lot of case studies reach for a number that was never measured. Here's what I can actually stand behind."
      />
      <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1fr_1.2fr]">
        <Reveal>
          <div className="h-full border-t border-line pt-5">
            <span className="font-mono-tag text-[11px] uppercase tracking-widest text-muted">
              Shipped
            </span>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              CMP Reimagined went to production across all three job tiers, replacing three
              inconsistent implementations with one shared system.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="h-full border-t border-line pt-5">
            <span className="font-mono-tag text-[11px] uppercase tracking-widest text-muted">
              Structural
            </span>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              Bulk actions, screening answers, and the lock, unlock, and tracking taxonomy all
              moved inline, out of separate flows and hidden clicks.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="h-full rounded-xl border border-accent/25 bg-accent-soft p-6">
            <span className="font-mono-tag text-[11px] uppercase tracking-widest text-accent">
              The honest gap
            </span>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              No formal A/B instrumentation was in place at launch, so I don't have a clean
              before and after number to put here. I'd rather say that plainly than dress up a
              hunch as data.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

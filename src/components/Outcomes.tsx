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
              Measured post-launch
            </span>
            <div className="mt-4 flex gap-7">
              <div>
                <p className="font-display text-[34px] font-semibold leading-none text-accent">
                  +11%
                </p>
                <p className="mt-2 text-[12px] leading-snug text-ink-soft">
                  avg actions per recruiter
                </p>
              </div>
              <div>
                <p className="font-display text-[34px] font-semibold leading-none text-accent">
                  +8%
                </p>
                <p className="mt-2 text-[12px] leading-snug text-ink-soft">
                  overall platform actions
                </p>
              </div>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-ink-soft">
              Platform analytics comparing the weeks before and after rollout. Not a controlled
              A/B test, so I'm not overstating it, but a real, directional signal the redesign
              changed behavior, not just aesthetics.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

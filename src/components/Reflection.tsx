import Reveal from './Reveal'

export default function Reflection() {
  return (
    <section className="border-t border-line bg-surface/60">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <Reveal>
          <h2 className="text-[28px] leading-tight font-semibold sm:text-[32px]">
            What I'd change
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-8 space-y-5 text-[16px] leading-relaxed text-ink-soft">
          <p>
            I'd fight harder, earlier, for unlock and contact instrumentation before launch, not
            after. A redesign this structural deserves a real before and after number, and "we
            shipped it and it felt better" is a weaker sentence than I'd like to be writing.
          </p>
          <p>
            I'd also push to formalize the recruiter shadowing into a recurring cadence rather than
            a one off input to this project. The strongest signal in the whole process was watching
            recruiters hesitate in real time. That's worth doing continuously, not just when a
            redesign is already underway.
          </p>
          <p>
            What I'd keep: building the shared component library before touching the three job
            tier screens individually. Fixing the system once and letting Basic, Premium, and
            Boosted inherit it was slower to start and faster to finish.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

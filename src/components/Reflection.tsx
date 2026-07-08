import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Reflection() {
  return (
    <section className="border-t border-line bg-ink-2/40">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <SectionHeading eyebrow="If I did it again" title="What I'd change" />
        <Reveal delay={0.1} className="mt-10 space-y-5 text-[16px] leading-relaxed text-text">
          <p>
            I'd fight harder, earlier, for unlock/contact instrumentation before launch — not after.
            A redesign this structural deserves a real before/after number, and "we shipped it and it
            felt better" is a weaker sentence than I'd like to be writing.
          </p>
          <p>
            I'd also push to formalize the recruiter shadowing into a recurring cadence rather than a
            one-off input to this project. The single strongest signal in the whole process was
            watching recruiters hesitate in real time — that's worth doing continuously, not just
            when a redesign is already underway.
          </p>
          <p>
            What I'd keep: building the 42-component library before touching the three job-tier
            screens individually. Fixing the system once and letting Basic, Premium, and Boosted
            inherit it was slower to start and faster to finish.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

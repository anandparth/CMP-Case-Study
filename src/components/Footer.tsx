import Reveal from './Reveal'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-[26px] font-semibold text-ink">Parth Anand</h2>
          <p className="mt-2 text-[15px] text-ink-soft">Product Designer, Noida, India</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:parthanand1705@gmail.com"
              className="inline-flex min-h-11 items-center rounded-lg bg-ink px-5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              parthanand1705@gmail.com
            </a>
            <a
              href="https://parthanand.in"
              className="font-mono-tag inline-flex min-h-11 items-center rounded-lg border border-line bg-surface px-5 text-sm text-ink-soft transition-colors hover:border-accent/40 hover:text-ink"
            >
              parthanand.in
            </a>
          </div>
          <p className="font-mono-tag mx-auto mt-10 max-w-lg text-[11px] leading-relaxed text-muted">
            Screens are pulled from the working Figma file. Candidate names and details shown are
            placeholder data used for design work, not real users. This case study reflects my own
            process and perspective, not an official JobHai or InfoEdge publication.
          </p>
        </Reveal>
      </div>
    </footer>
  )
}

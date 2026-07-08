import Reveal from './Reveal'

export default function Context() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <Reveal>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <p className="font-mono-tag text-[11px] uppercase tracking-widest text-text-dim">
              The product
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-text">
              JobHai (by Naukri.com / InfoEdge) connects recruiters with blue- and grey-collar job
              seekers across India — roles like customer support executives, delivery riders, and
              domestic calling agents.
            </p>
          </div>
          <div>
            <p className="font-mono-tag text-[11px] uppercase tracking-widest text-text-dim">
              The recruiter's day
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-text">
              A recruiter posts a job, then works a list of applicants and database matches — often
              tens of thousands of candidates deep — deciding who to unlock, call, or WhatsApp,
              largely from a phone.
            </p>
          </div>
          <div>
            <p className="font-mono-tag text-[11px] uppercase tracking-widest text-text-dim">
              The CMP
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-text">
              The Candidate Management Page is that list. It's the single most-used screen in the
              recruiter product — every hiring decision on JobHai passes through it.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import ScreenFigure from './ScreenFigure'

const TRACKING_STATES = [
  'Contacted',
  'Number viewed',
  'Call not connected',
  'Candidate interested',
  'Invite for interview',
  'WhatsApp sent',
  'Profile Downloaded',
  'Request to callback',
  'Hired',
  'Remove',
]

export default function DesignDecisions() {
  return (
    <div id="showcase">
      {/* State system */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Design decision · 01"
          title="A card needs to earn the unlock"
          lede="Every candidate card carries a locked/unlocked state, a database-source state, and an independent tracking status. Getting this taxonomy right — not just the visuals — was most of the design work."
        />
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <ScreenFigure
            src="./screens/09-candidate-cards.png"
            alt="Grid of candidate card states: Reco Locked, Reco Unlocked, Database Locked, Database Unlocked, Removed, Hired, Requirements Met, Tracking Options, With No Requirements Matching, Selection Checkbox"
            caption="Fig. 1 — the card state matrix: recommendation vs. database source, locked vs. unlocked vs. previously-unlocked, plus edge states like Removed, Hired, and 'no requirements matching'."
          />
          <Reveal delay={0.1}>
            <div className="rounded-xl border border-line bg-ink-2 p-6">
              <p className="font-mono-tag text-[11px] uppercase tracking-widest text-gold">
                Tracking Options — one card, ten possible statuses
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-text">
                Underneath the lock state, every card independently tracks where the recruiter left
                off with that candidate — separate from whether it's unlocked:
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2">
                {TRACKING_STATES.map((t) => (
                  <li
                    key={t}
                    className="font-mono-tag rounded-md border border-line-soft bg-ink-3 px-2.5 py-1.5 text-[12px] text-text"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[13px] leading-relaxed text-text-dim">
                Separating "have I paid to see this candidate" from "where are we in the conversation"
                sounds obvious written down. In the old model the two were tangled — a card could only
                tell you one story at a time.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bulk actions */}
      <section className="border-t border-line bg-ink-2/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            eyebrow="Design decision · 02"
            tone="green"
            title="Bulk actions, brought inline"
            lede="The shipped list keeps every candidate action reachable without leaving the CMP — a Bulk actions control lives in the header, next to the tab counts and the unlock-credit balance."
          />
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            <ScreenFigure
              src="./screens/01-cmp-main.png"
              alt="CMP candidate list with New/Viewed/Hired/Removed tabs, filters sidebar, match score badges, and a Bulk actions control in the header"
              caption="Fig. 2 — the shipped list: tabs (New / Viewed / Hired / Removed), filters, match-score badges, and Bulk actions in the header — no context switch required."
            />
            <ScreenFigure
              src="./screens/02-traditional-approach-1.png"
              alt="Checkbox multi-select pattern with a floating bulk-unlock action bar and a selection counter capped at 200 candidates"
              caption="Fig. 3 — 'Traditional Approach': the checkbox multi-select exploration, with a floating action bar and a hard cap of 200 selected candidates per bulk unlock."
              delay={0.1}
            />
          </div>
        </div>
      </section>

      {/* Screening answers */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            eyebrow="Design decision · 03"
            title="Screening answers, at a glance"
            lede="Pre-screening answers — cold-calling experience, CRM familiarity — now surface directly on the card in the Viewed tab, with a 'View Answers' link for the full response instead of a dead end."
          />
          <div className="mt-14 flex justify-center">
            <ScreenFigure
              src="./screens/05-screening-cmp.png"
              alt="Candidate card in the Viewed tab showing pre-screening answers inline: has cold calling experience, CRM experience, with a View Answers link"
              caption="Fig. 4 — pre-screening answers ('Has cold calling experience', 'CRM experience') rendered inline on the card, not behind a click."
            />
          </div>
        </div>
      </section>

      {/* System consistency */}
      <section className="border-t border-line bg-ink-2/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            eyebrow="Design decision · 04"
            tone="green"
            title="One system, three job tiers, one small screen"
            lede="Basic, Premium, and Premium+Boosted listings now share the same card, filter, and action components — a 42-piece library — instead of three parallel implementations. The same system holds up on mobile."
          />
          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
            <ScreenFigure
              src="./screens/07-components.png"
              alt="Component library sheet showing the full set of reusable CMP components: cards, filters, tables, buttons, tags, toasts"
              caption="Fig. 5 — the 42-component library that Basic, Premium, and Premium+Boosted now draw from instead of maintaining separate builds."
            />
            <ScreenFigure
              src="./screens/04-mobile.png"
              alt="Mobile responsive version of the CMP showing the same candidate cards, match score, and Call/WhatsApp actions"
              caption="Fig. 6 — the same card language, recomposed for mobile: match score, requirements, Call and WhatsApp actions intact."
              delay={0.1}
            />
          </div>
        </div>
      </section>

      {/* Flow overview */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            eyebrow="The bigger picture"
            title="It's one screen, but a lot of paths through it"
            lede="This is the flow map from the working file — not meant to be read at this size, but it's the honest shape of the problem: dozens of states and edge cases behind what looks like a simple list."
          />
          <Reveal delay={0.1} className="mt-14">
            <div className="overflow-x-auto rounded-xl border border-line bg-ink-2 p-3">
              <img
                src="./screens/08-flow-overview.png"
                alt="Overview of the full CMP flow map showing dozens of connected screen states"
                className="min-w-[900px] rounded-lg"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

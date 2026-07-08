import { CheckCircle } from '@phosphor-icons/react'
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
  'Profile downloaded',
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
          title="A card needs to earn the unlock"
          lede="Every candidate card carries a locked or unlocked state, a database source state, and an independent tracking status. Getting this taxonomy right, not just the visuals, was most of the design work."
        />
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <ScreenFigure
            src="./screens/09-candidate-cards.png"
            width={2200}
            height={980}
            alt="Grid of candidate card states: Reco Locked, Reco Unlocked, Database Locked, Database Unlocked, Removed, Hired, Requirements Met, Tracking Options, With No Requirements Matching, Selection Checkbox"
            caption="The card state matrix: recommendation versus database source, locked versus unlocked versus previously unlocked, plus edge states like Removed, Hired, and no requirements matching."
          />
          <Reveal delay={0.1}>
            <div className="rounded-xl border border-line bg-surface p-6">
              <p className="font-mono-tag text-[11px] uppercase tracking-widest text-accent">
                Ten possible statuses, one card
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                Underneath the lock state, every card independently tracks where the recruiter left
                off with that candidate, separate from whether it's unlocked.
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2">
                {TRACKING_STATES.map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-1.5 rounded-md border border-line bg-paper px-2.5 py-1.5 text-[12px] text-ink-soft"
                  >
                    <CheckCircle size={13} weight="fill" className="shrink-0 text-accent" />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[13px] leading-relaxed text-muted">
                Separating "have I paid to see this candidate" from "where are we in the
                conversation" sounds obvious written down. In the old model the two were tangled: a
                card could only tell you one story at a time.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bulk actions */}
      <section className="border-t border-line bg-surface/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            title="Bulk actions, brought inline"
            lede="The shipped list keeps every candidate action reachable without leaving the CMP. A Bulk actions control lives in the header, next to the tab counts and the unlock credit balance."
          />
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            <ScreenFigure
              src="./screens/01-cmp-main.png"
              width={1280}
              height={690}
              alt="CMP candidate list with New/Viewed/Hired/Removed tabs, filters sidebar, match score badges, and a Bulk actions control in the header"
              caption="The shipped list: tabs for New, Viewed, Hired, and Removed, filters, match score badges, and Bulk actions in the header. No context switch required."
            />
            <ScreenFigure
              src="./screens/02-traditional-approach-1.png"
              width={1280}
              height={690}
              alt="Checkbox multi-select pattern with a floating bulk-unlock action bar and a selection counter capped at 200 candidates"
              caption="Traditional approach: the checkbox multi-select exploration, with a floating action bar and a hard cap of 200 selected candidates per bulk unlock."
              delay={0.1}
            />
          </div>
        </div>
      </section>

      {/* Screening answers */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            title="Screening answers, at a glance"
            lede="Pre-screening answers, cold calling experience, CRM familiarity, now surface directly on the card in the Viewed tab, with a View Answers link for the full response instead of a dead end."
          />
          <div className="mt-14 flex justify-center">
            <ScreenFigure
              src="./screens/05-screening-cmp.png"
              width={1280}
              height={690}
              alt="Candidate card in the Viewed tab showing pre-screening answers inline: has cold calling experience, CRM experience, with a View Answers link"
              caption="Pre-screening answers, has cold calling experience, CRM experience, rendered inline on the card, not behind a click."
            />
          </div>
        </div>
      </section>

      {/* System consistency, bento */}
      <section className="border-t border-line bg-surface/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            title="One system, three job tiers, one small screen"
            lede="Basic, Premium, and Premium+Boosted listings now share the same card, filter, and action components instead of three parallel builds. The same system holds up on mobile."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-[2fr_1fr] md:grid-rows-[auto_auto]">
            <ScreenFigure
              src="./screens/07-components.png"
              width={2000}
              height={1927}
              alt="Component library sheet showing the full set of reusable CMP components: cards, filters, tables, buttons, tags, toasts"
              caption="The component library that Basic, Premium, and Premium+Boosted now draw from."
            />
            <div className="md:row-span-2">
              <ScreenFigure
                src="./screens/04-mobile.png"
                width={360}
                height={800}
                alt="Mobile responsive version of the CMP showing the same candidate cards, match score, and Call/WhatsApp actions"
                caption="The same card language, recomposed for mobile."
              />
            </div>
            <Reveal delay={0.15}>
              <div className="flex h-full flex-col justify-center rounded-xl border border-accent/25 bg-accent-soft p-6">
                <p className="font-display text-[40px] font-semibold leading-none text-accent">
                  42
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                  reusable components, shared across every job tier, instead of three separate
                  implementations to maintain.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Flow overview */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            title="It's one screen, but a lot of paths through it"
            lede="This is the flow map from the working file. Not meant to be read at this size, but it's the honest shape of the problem: dozens of states and edge cases behind what looks like a simple list."
          />
          <Reveal delay={0.1} className="mt-14">
            <div className="overflow-x-auto rounded-xl border border-line bg-surface p-3">
              <img
                src="./screens/08-flow-overview.png"
                width={1946}
                height={2400}
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

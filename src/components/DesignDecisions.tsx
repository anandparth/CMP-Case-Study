import { CheckCircle } from '@phosphor-icons/react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import ScreenFigure from './ScreenFigure'
import BeforeAfterToggle from './BeforeAfterToggle'
import FlowDiagram from './FlowDiagram'

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
            caption="The card state matrix: recommendation versus database source, locked versus unlocked versus previously unlocked, plus edge states like Removed, Hired, and no requirements matching. Click to view full size."
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

      {/* Bulk actions, interactive toggle */}
      <section className="border-t border-line bg-surface/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            title="Bulk actions, brought inline"
            lede="The shipped list keeps every candidate action reachable without leaving the CMP. Switch the view below to compare it against an earlier exploration."
          />
          <Reveal delay={0.1} className="mt-14">
            <BeforeAfterToggle />
          </Reveal>
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
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-[1.3fr_1fr] md:grid-rows-[auto_auto]">
            <ScreenFigure
              src="./screens/crop-comp-status.png"
              width={830}
              height={150}
              alt="Status and tracking dropdown menus reused across the CMP: Contacted, Hired, Invite for interview"
              caption="Status dropdowns, one shared pattern for every tracking state on a card."
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
            <ScreenFigure
              src="./screens/crop-comp-filters.png"
              width={460}
              height={740}
              alt="Four variants of the candidate filters sidebar, showing sort, source, salary, skill, and document filter groups"
              caption="Four filter sidebar variants sharing one component set, from a lightweight sort panel to the full requirements filter."
              delay={0.08}
            />
          </div>
          <Reveal delay={0.18} className="mt-5">
            <div className="rounded-xl border border-accent/25 bg-accent-soft px-6 py-5 sm:flex sm:items-center sm:gap-5">
              <p className="font-display shrink-0 text-[40px] font-semibold leading-none text-accent">
                42
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft sm:mt-0">
                reusable components, shared across every job tier, instead of three separate
                implementations to maintain.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Flow, interactive diagram */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            title="It's one screen, but a lot of paths through it"
            lede="The working file maps dozens of states and edge cases behind what looks like a simple list. Tap a stage below to see what happens there."
          />
          <Reveal delay={0.1} className="mt-14">
            <FlowDiagram />
          </Reveal>
        </div>
      </section>
    </div>
  )
}

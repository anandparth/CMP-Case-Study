import ScreenFigure from './ScreenFigure'
import SectionHeading from './SectionHeading'

const shots = [
  {
    src: './mockups/cmp-final-candidate-cards.jpg',
    alt: 'The redesigned CMP candidate list on a phone, showing a candidate card with a 100% match tag, matched requirement lines, and Call and WhatsApp actions.',
    caption: 'Candidate cards — the match score and the reasons behind it sit on the card, so a recruiter can judge a candidate without opening anything.',
  },
  {
    src: './mockups/cmp-final-filters.jpg',
    alt: 'The CMP filter panel on a phone, with Sort by, Sources, and Candidate Status groups and Clear and Apply Filter actions.',
    caption: 'Filters — one shared panel across every job tier, with the counts shown against each status.',
  },
  {
    src: './mockups/cmp-final-bulk-actions.jpg',
    alt: 'The CMP candidate list in selection mode, with a selected-candidates bar and an Unlock action pinned to the bottom of the screen.',
    caption: 'Bulk actions — selection state and the unlock cost stay pinned in view instead of hiding behind a menu.',
  },
  {
    src: './mockups/cmp-final-call.jpg',
    alt: 'A post-call CMP sheet asking how the call went, with quick outcome options and a Submit action.',
    caption: 'Post-call feedback — the outcome is captured in one tap, right when the recruiter still remembers the call.',
  },
]

export default function FinalDesigns() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="The shipped thing"
          title="What actually shipped"
          lede="Everything above is the argument. These are the four screens that carry it, on the device recruiters actually work from."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {shots.map((s, i) => (
            <ScreenFigure
              key={s.src}
              src={s.src}
              alt={s.alt}
              caption={s.caption}
              width={1800}
              height={1350}
              delay={(i % 2) * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

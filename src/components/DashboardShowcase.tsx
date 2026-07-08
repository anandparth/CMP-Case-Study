import { useState } from 'react'
import ContainerScroll from './ContainerScroll'
import Lightbox from './Lightbox'

const ALT =
  'The shipped CMP dashboard: candidate list with New, Viewed, Hired, and Removed tabs, filters sidebar, match score badges, and Bulk actions in the header'

export default function DashboardShowcase() {
  const [open, setOpen] = useState(false)

  return (
    <section className="border-b border-line bg-paper">
      <ContainerScroll
        title={
          <>
            <span className="font-mono-tag inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 text-[11px] uppercase tracking-widest text-muted">
              What shipped
            </span>
            <h2 className="mt-5 text-[26px] leading-tight font-semibold sm:text-[32px]">
              This is the list, in production
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              Every decision below fed into this one screen.
            </p>
          </>
        }
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`View full size: ${ALT}`}
          className="block w-full cursor-zoom-in"
        >
          <img
            src="./screens/01-cmp-main.png"
            alt={ALT}
            width={1280}
            height={690}
            className="block w-full"
          />
        </button>
      </ContainerScroll>
      {open && (
        <Lightbox
          src="./screens/01-cmp-main.png"
          alt={ALT}
          width={1280}
          onClose={() => setOpen(false)}
        />
      )}
    </section>
  )
}

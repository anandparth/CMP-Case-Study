import { useState } from 'react'
import { MagnifyingGlassPlus } from '@phosphor-icons/react'
import GlowFrame from './GlowFrame'
import Reveal from './Reveal'
import Lightbox from './Lightbox'

export default function ScreenFigure({
  src,
  alt,
  caption,
  width,
  height,
  delay = 0,
}: {
  src: string
  alt: string
  caption: string
  width: number
  height: number
  delay?: number
}) {
  const [open, setOpen] = useState(false)

  return (
    <Reveal delay={delay}>
      <GlowFrame
        as="button"
        onClick={() => setOpen(true)}
        aria-label={`View full size: ${alt}`}
        className="group/fig w-full text-left"
      >
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="block w-full"
          loading="lazy"
        />
        <span className="pointer-events-none absolute right-3 top-3 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full bg-surface/90 text-ink opacity-0 shadow-md transition-opacity duration-200 group-hover/fig:opacity-100">
          <MagnifyingGlassPlus size={16} weight="bold" />
        </span>
      </GlowFrame>
      <p className="font-mono-tag mt-3 text-[12px] leading-relaxed text-muted">{caption}</p>
      {open && <Lightbox src={src} alt={alt} width={width} onClose={() => setOpen(false)} />}
    </Reveal>
  )
}

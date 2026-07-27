import GlowFrame from './GlowFrame'
import Reveal from './Reveal'

/**
 * A video in the same sketch-frame as every ScreenFigure, so motion reads as
 * a sibling of the stills. Native controls (sound design matters), poster so
 * nothing heavy loads until pressed, 16:9 box so no edge ever crops.
 */
export default function VideoFigure({
  src,
  poster,
  caption,
  ariaLabel,
  delay = 0,
  className = '',
}: {
  src: string
  poster: string
  caption: string
  ariaLabel: string
  delay?: number
  className?: string
}) {
  return (
    <Reveal delay={delay} className={className}>
      <GlowFrame className="w-full">
        <video
          src={src}
          poster={poster}
          controls
          controlsList="nodownload"
          onContextMenu={(e) => e.preventDefault()}
          playsInline
          preload="metadata"
          aria-label={ariaLabel}
          className="block aspect-video w-full"
        />
      </GlowFrame>
      <p className="font-mono-tag mt-3 text-[12px] leading-relaxed text-muted">{caption}</p>
    </Reveal>
  )
}

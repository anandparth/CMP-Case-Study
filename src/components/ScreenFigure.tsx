import GlowFrame from './GlowFrame'
import Reveal from './Reveal'

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
  return (
    <Reveal delay={delay}>
      <GlowFrame>
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="block w-full"
          loading="lazy"
        />
      </GlowFrame>
      <p className="font-mono-tag mt-3 text-[12px] leading-relaxed text-text-dim">{caption}</p>
    </Reveal>
  )
}

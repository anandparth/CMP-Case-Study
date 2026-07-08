import GlowFrame from './GlowFrame'
import Reveal from './Reveal'

export default function ScreenFigure({
  src,
  alt,
  caption,
  delay = 0,
}: {
  src: string
  alt: string
  caption: string
  delay?: number
}) {
  return (
    <Reveal delay={delay}>
      <GlowFrame>
        <img src={src} alt={alt} className="block w-full" loading="lazy" />
      </GlowFrame>
      <p className="font-mono-tag mt-3 text-[12px] leading-relaxed text-text-dim">{caption}</p>
    </Reveal>
  )
}

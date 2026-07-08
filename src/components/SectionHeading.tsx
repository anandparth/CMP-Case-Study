import Eyebrow from './Eyebrow'
import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  tone,
  title,
  lede,
}: {
  eyebrow: string
  tone?: 'gold' | 'green' | 'clay'
  title: string
  lede?: string
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-[28px] leading-tight font-semibold tracking-tight sm:text-[34px]">
        {title}
      </h2>
      {lede && <p className="mt-4 text-[16px] leading-relaxed text-text">{lede}</p>}
    </Reveal>
  )
}

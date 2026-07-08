import Eyebrow from './Eyebrow'
import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'center',
}: {
  eyebrow?: string
  title: string
  lede?: string
  align?: 'center' | 'left'
}) {
  const wrap = align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'
  return (
    <Reveal className={wrap}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={`text-[28px] leading-tight font-semibold sm:text-[32px] ${eyebrow ? 'mt-5' : ''}`}>
        {title}
      </h2>
      {lede && <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">{lede}</p>}
    </Reveal>
  )
}

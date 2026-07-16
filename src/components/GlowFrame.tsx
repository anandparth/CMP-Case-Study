import type { ReactNode, ButtonHTMLAttributes, HTMLAttributes } from 'react'

type GlowFrameProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'button'
  /** show the strip of masking tape at the top edge */
  tape?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement> &
  HTMLAttributes<HTMLDivElement>

/**
 * The frame every screenshot and diagram sits in: 2px ink outline, hard
 * offset shadow, optional masking tape — the same object as the figures in
 * the HMLC / Okto / Job Hai studies, so CMP reads as their sibling.
 *
 * Name kept as GlowFrame so the existing call sites don't churn.
 */
export default function GlowFrame({
  children,
  className = '',
  as = 'div',
  tape = true,
  ...rest
}: GlowFrameProps) {
  const Tag = as as 'div'

  return (
    <Tag
      className={`sketch-frame ${tape ? 'sketch-frame--tape' : ''} group relative p-2.5 sm:p-3 ${className}`}
      {...rest}
    >
      <div className="relative overflow-hidden rounded-[7px]">{children}</div>
    </Tag>
  )
}

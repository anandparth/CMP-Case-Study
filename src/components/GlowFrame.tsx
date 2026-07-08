import { useRef, type ReactNode, type MouseEvent } from 'react'

interface GlowFrameProps {
  children: ReactNode
  className?: string
}

export default function GlowFrame({ children, className = '' }: GlowFrameProps) {
  const ref = useRef<HTMLDivElement>(null)

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`glow-frame group relative overflow-hidden rounded-xl border border-line bg-surface shadow-[0_1px_2px_rgba(28,26,22,0.04)] transition-transform duration-300 ease-out hover:-translate-y-1 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(360px circle at var(--mx, 50%) var(--my, 50%), rgba(163,76,14,0.10), transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(163,76,14,0.3)',
        }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}

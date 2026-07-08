import { ArrowLeft } from '@phosphor-icons/react'

const CHIPS: { label: string; value: string }[] = [
  { label: 'Role', value: 'Product Designer' },
  { label: 'Team', value: 'Design, PM, Eng' },
  { label: 'Timeline', value: 'Sept to Dec 2025' },
]

export default function MetaBar() {
  return (
    <div className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6">
        <a
          href="https://parthanand.in"
          className="font-mono-tag inline-flex min-h-11 items-center gap-2 text-xs text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft size={14} weight="bold" aria-hidden />
          parthanand.in
        </a>
        <div className="hidden items-center gap-5 overflow-x-auto lg:flex">
          {CHIPS.map((c) => (
            <div key={c.label} className="font-mono-tag flex items-center gap-1.5 text-[11px] whitespace-nowrap">
              <span className="text-muted">{c.label}</span>
              <span className="text-ink-soft">{c.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

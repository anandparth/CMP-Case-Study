export default function Eyebrow({ children }: { children: string }) {
  return (
    <span className="font-mono-tag inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-soft px-3 py-1 text-[11px] uppercase tracking-widest text-accent">
      {children}
    </span>
  )
}

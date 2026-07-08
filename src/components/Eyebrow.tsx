export default function Eyebrow({
  children,
  tone = 'gold',
}: {
  children: string
  tone?: 'gold' | 'green' | 'clay'
}) {
  const colors: Record<string, string> = {
    gold: 'text-gold border-gold/30 bg-gold/10',
    green: 'text-green border-green/30 bg-green/10',
    clay: 'text-clay border-clay/30 bg-clay/10',
  }
  return (
    <span
      className={`font-mono-tag inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] uppercase tracking-widest ${colors[tone]}`}
    >
      {children}
    </span>
  )
}

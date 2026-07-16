export default function Eyebrow({ children }: { children: string }) {
  return (
    <span className="font-hand inline-flex items-center gap-2 text-[19px] leading-none text-accent">
      <svg aria-hidden="true" width="26" height="8" viewBox="0 0 26 8" className="shrink-0">
        <path
          d="M1 5 q6 -4 12 0 t12 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
      {children}
    </span>
  )
}

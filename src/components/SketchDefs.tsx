/**
 * Shared excalidraw-style SVG defs: the two roughen filters, and the hatch
 * patterns every doodle fills with. Rendered once, hidden, at the app root;
 * figures reference them by id (filter="url(#rough)", fill="url(#hb)").
 *
 * TRAP — do not remove this comment:
 * #rough / #rough2 use filterUnits="objectBoundingBox". A <g filter="...">
 * that wraps ONLY a straight line has a zero-width or zero-height bounding
 * box, so the filter region collapses to nothing and the line NEVER PAINTS.
 * This silently hid a bounce line and two dividers in the HMLC study and four
 * elements in Okto. Draw lone straight lines unfiltered.
 */

const HATCHES: [string, string][] = [
  ['hb', 'var(--f-blue)'],
  ['hg', 'var(--f-green)'],
  ['hr', 'var(--f-red)'],
  ['ho', 'var(--f-orange)'],
  ['hv', 'var(--f-violet)'],
  ['hy', 'var(--f-yellow)'],
  ['hk', 'var(--f-stone)'],
]

export default function SketchDefs() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="0"
      height="0"
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
    >
      <defs>
        <filter id="rough" x="-5%" y="-5%" width="110%" height="110%" filterUnits="objectBoundingBox">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.013 0.016"
            numOctaves={2}
            seed={7}
            result="n"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="n"
            scale="3.2"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <filter id="rough2" x="-5%" y="-5%" width="110%" height="110%" filterUnits="objectBoundingBox">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02 0.018"
            numOctaves={2}
            seed={21}
            result="n"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="n"
            scale="2.1"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        {HATCHES.map(([id, color]) => (
          <pattern
            key={id}
            id={id}
            patternUnits="userSpaceOnUse"
            width="7"
            height="7"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="7" stroke={color} strokeWidth="2.4" />
          </pattern>
        ))}
      </defs>
    </svg>
  )
}

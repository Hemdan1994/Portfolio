/** Full-bleed name. `textLength` stretches the glyphs, so nothing measures the DOM on load. */
export function FitName({ text, className, animate = true }: { text: string; className?: string; animate?: boolean }) {
  return (
    <h1 className={`overflow-hidden text-center ${className ?? ''}`}>
      <span className={`block ${animate ? 'slide-up' : ''}`}>
        <svg viewBox="0 0 1000 150" className="block h-auto w-full" role="img" aria-label={text}>
          <text
            x="500"
            y="132"
            textAnchor="middle"
            fill="currentColor"
            fontFamily="Saira Condensed, Arial Narrow, sans-serif"
            fontWeight="700"
            fontSize="148"
            textLength="980"
            lengthAdjust="spacingAndGlyphs"
          >
            {text.toUpperCase()}
          </text>
        </svg>
      </span>
    </h1>
  )
}

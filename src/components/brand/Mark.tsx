// Marchio "campo e cursore": il cursore al centro dell'anello di segni della hero.
// Disegnato in SVG con currentColor. La versione "small" (12 segni più spessi) resta
// leggibile sotto i 40px; quella piena ha 28 segni, più lunghi in alto e in basso.
// Stessa geometria delle icone in src/app (icon.png, apple-icon.png) e dell'anteprima social.
type MarkProps = { size?: number; small?: boolean; className?: string };

export function Mark({ size = 40, small = size < 40, className }: MarkProps) {
  const [ticks, ring, length, stroke, cursorW, cursorH] = small
    ? [12, 0.34, 0.15, 0.075, 0.1, 0.36]
    : [28, 0.36, 0.11, 0.028, 0.07, 0.3];
  const c = size / 2;
  const r = size * ring;
  const lines = Array.from({ length: ticks }, (_, i) => {
    const a = (2 * Math.PI * i) / ticks - Math.PI / 2;
    const k = small ? 1 : 0.55 + 0.45 * Math.cos(a + Math.PI / 2) ** 2;
    const half = (size * length * k) / 2;
    const round = (n: number) => Math.round(n * 100) / 100;
    return {
      x1: round(c + (r - half) * Math.cos(a)),
      y1: round(c + (r - half) * Math.sin(a)),
      x2: round(c + (r + half) * Math.cos(a)),
      y2: round(c + (r + half) * Math.sin(a)),
    };
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      aria-hidden
    >
      <g
        stroke="currentColor"
        strokeWidth={Math.max(1, size * stroke)}
        strokeLinecap="round"
      >
        {lines.map((line, i) => (
          <line key={i} {...line} />
        ))}
      </g>
      <rect
        x={c - (size * cursorW) / 2}
        y={c - (size * cursorH) / 2}
        width={size * cursorW}
        height={size * cursorH}
        fill="currentColor"
      />
    </svg>
  );
}

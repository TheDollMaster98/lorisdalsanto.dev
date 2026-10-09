import { Mark } from "@/components/brand/Mark";

// Raggio del cerchio su cui corre il testo. textLength stende il testo su tutto
// il giro, senza tagli né buchi, qualunque sia la larghezza reale del font;
// GAP lascia lo spazio tra l'ultimo asterisco e la L iniziale (SVG scarta lo
// spazio finale della stringa).
const R = 47;
const GAP = 7;
const RING_LENGTH = 2 * Math.PI * R - GAP;
const RING = "LORIS DAL SANTO * FRONT-END DEVELOPER * MILANO *";

// Timbro tondo con il marchio al centro, in alto a destra nella hero.
// Disegnato a 120px e ridotto con scale sotto lg; l'arrivo "schiaffato" è in
// Motion.tsx (data-hero-seal). Decorativo: il nome è già nella pagina.
export function Seal() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute right-4 top-2 size-[120px] origin-top-right scale-[0.6] select-none md:right-8 md:top-1.5 md:scale-[0.7] lg:top-7 lg:scale-100"
    >
      <div data-hero-seal className="relative size-full rotate-[-8deg]">
        {/* Onda d'urto dell'impatto: un anello che si allarga e svanisce. */}
        <span
          data-hero-seal-ring
          className="absolute inset-0 rounded-full border border-ink opacity-0"
        />
        <div
          data-hero-seal-body
          className="relative size-full rounded-full bg-paper text-ink"
        >
          <svg viewBox="0 0 128 128" className="size-full">
            <defs>
              <path
                id="seal-ring"
                d={`M64,64 m-${R},0 a${R},${R} 0 1,1 ${R * 2},0 a${R},${R} 0 1,1 -${R * 2},0`}
              />
            </defs>
            <circle
              cx="64"
              cy="64"
              r="61"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle
              cx="64"
              cy="64"
              r="34"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <text className="font-mono" fontSize="9.5" fill="currentColor">
              <textPath
                href="#seal-ring"
                textLength={RING_LENGTH}
                lengthAdjust="spacing"
              >
                {RING}
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <Mark size={28} />
          </div>
        </div>
      </div>
    </div>
  );
}

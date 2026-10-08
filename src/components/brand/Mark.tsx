// Marchio: "ld" (Loris Dal Santo) seguito dal cursore del titolo che si scrive da solo.
// Testo nel font del sito, quindi eredita colore e carattere; size è l'altezza del
// riquadro in pixel. Stesse proporzioni delle icone in src/app e dell'anteprima social.
type MarkProps = { size?: number; className?: string };

export function Mark({ size = 40, className = "" }: MarkProps) {
  return (
    <span
      aria-hidden
      className={`inline-flex items-center font-medium leading-none tracking-[-0.04em] ${className}`}
      style={{ height: size, fontSize: size * 0.8 }}
    >
      ld
      <span
        className="inline-block bg-current"
        style={{
          width: Math.max(1.5, size * 0.07),
          height: size * 0.66,
          marginLeft: size * 0.07,
        }}
      />
    </span>
  );
}

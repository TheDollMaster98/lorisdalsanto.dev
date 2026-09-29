"use client";

// Apre la finestra di stampa del browser, da cui si salva anche in PDF.
export function PrintButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="border-b border-ink pb-0.5 font-medium transition-colors hover:border-ink-muted hover:text-ink-muted print:hidden"
    >
      {label} ↓
    </button>
  );
}

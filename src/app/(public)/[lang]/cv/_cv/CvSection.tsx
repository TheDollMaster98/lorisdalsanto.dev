type CvSectionProps = {
  label: string;
  children: React.ReactNode;
};

// Sezione del CV: etichetta a sinistra, contenuto a destra, come nella landing.
export function CvSection({ label, children }: CvSectionProps) {
  return (
    <section className="grid grid-cols-12 gap-x-6 border-t border-line py-8 break-inside-avoid-page md:py-10 print:py-2.5">
      <h2 className="col-span-12 mb-4 font-mono text-xs uppercase tracking-[0.08em] text-ink-muted md:col-span-3 md:mb-0 print:col-span-3 print:mb-0">
        {label}
      </h2>
      <div className="col-span-12 md:col-span-9 print:col-span-9">
        {children}
      </div>
    </section>
  );
}

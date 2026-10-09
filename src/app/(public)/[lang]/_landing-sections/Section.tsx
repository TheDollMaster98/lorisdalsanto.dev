type SectionProps = {
  id: string;
  label: string;
  // Contenuto facoltativo sotto il titolo, nella colonna di sinistra (es. la foto).
  aside?: React.ReactNode;
  children: React.ReactNode;
};

export function Section({ id, label, aside, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`}>
      <div data-line className="h-px bg-line" />
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-x-6 px-4 py-20 md:px-8 md:py-32">
        <div className="col-span-12 mb-10 md:col-span-3 md:mb-0">
          <h2
            id={`${id}-title`}
            data-reveal
            className="text-base font-medium tracking-[-0.01em]"
          >
            {label}
          </h2>
          {aside}
        </div>
        <div className="col-span-12 md:col-span-9">{children}</div>
      </div>
    </section>
  );
}

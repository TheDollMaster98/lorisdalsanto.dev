type SectionProps = {
  id: string;
  label: string;
  children: React.ReactNode;
};

export function Section({ id, label, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`}>
      <div data-line className="h-px bg-line" />
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-x-6 px-4 py-20 md:px-8 md:py-32">
        <h2
          id={`${id}-title`}
          data-reveal
          className="col-span-12 mb-10 text-base font-medium tracking-[-0.01em] md:col-span-3 md:mb-0"
        >
          {label}
        </h2>
        <div className="col-span-12 md:col-span-9">{children}</div>
      </div>
    </section>
  );
}

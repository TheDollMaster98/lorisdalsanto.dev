import { Fragment } from "react";
import type { Content } from "@/models/content.model";

export function Hero({ hero }: { hero: Content["hero"] }) {
  return (
    <section
      id="top"
      className="mx-auto max-w-7xl px-4 pb-20 pt-24 md:px-8 md:pb-32 md:pt-40"
    >
      <div
        data-hero-meta
        className="mb-12 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.08em] text-ink-muted"
      >
        <span>
          {/* Su schermi stretti il ruolo va a capo dopo "&", mai a metà. */}
          {hero.role.split(" & ").map((part, i, parts) => (
            <Fragment key={part}>
              <span className="whitespace-nowrap">
                {part}
                {i < parts.length - 1 && " &"}
              </span>
              {i < parts.length - 1 && " "}
            </Fragment>
          ))}
        </span>
        <span>{hero.location}</span>
        <span className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-signal" aria-hidden />
          {hero.availability}
        </span>
      </div>
      <h1
        data-hero-title
        className="max-w-[20ch] text-[clamp(2.5rem,6.5vw,6rem)] font-medium leading-[0.98] tracking-[-0.035em]"
      >
        {hero.statement}
      </h1>
    </section>
  );
}

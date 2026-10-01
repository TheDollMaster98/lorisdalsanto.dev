import Link from "next/link";
import { Fragment } from "react";
import type { Locale } from "@/lib/i18n";
import { mailtoHref } from "@/lib/site/mailto";
import type { Content } from "@/models/content.model";
import { HeroField } from "./HeroField";

type HeroProps = {
  locale: Locale;
  hero: Content["hero"];
  mail: Content["contact"]["mail"];
};

export function Hero({ locale, hero, mail }: HeroProps) {
  return (
    // Contenitore a tutta larghezza: il campo di segni va da bordo a bordo,
    // il contenuto resta nella colonna di 1280px.
    <div className="relative isolate overflow-hidden">
      <HeroField />
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
        <div
          data-hero-cta
          className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 md:mt-16 md:text-lg"
        >
          <a
            href={mailtoHref(mail)}
            className="border-b border-ink pb-0.5 font-medium transition-colors hover:border-ink-muted hover:text-ink-muted"
          >
            {hero.cta.contact} →
          </a>
          <Link
            href={`/${locale}/cv/`}
            className="text-ink-muted transition-colors hover:text-ink"
          >
            {hero.cta.cv} →
          </Link>
        </div>
      </section>
    </div>
  );
}

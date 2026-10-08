import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Mark } from "@/components/brand/Mark";
import { Header } from "@/components/layout/Header";
import { profile } from "@/content/profile";
import { getContent, getCv, isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/site/metadata";
import { siteUrl } from "@/lib/site/site";
import { CvEntries } from "./_cv/CvEntries";
import { CvSection } from "./_cv/CvSection";
import { PrintButton } from "./_cv/PrintButton";

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = getCv(lang);
  return pageMetadata(lang, { ...meta, path: "cv/" });
}

// Nei contatti si mostra l'indirizzo senza "https://": su carta resta leggibile.
function bare(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

export default async function CvPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const { nav, footer } = getContent(lang);
  const cv = getCv(lang);
  const contacts = [
    { label: profile.email, href: `mailto:${profile.email}`, external: false },
    ...profile.links.map((link) => ({
      label: bare(link.href),
      href: link.href,
      external: true,
    })),
    { label: bare(siteUrl), href: `${siteUrl}/${lang}/`, external: true },
  ];

  return (
    <>
      <Header locale={lang} nav={nav} path="cv/" />
      <main
        id="top"
        className="mx-auto max-w-5xl px-4 pb-24 pt-16 md:px-8 md:pb-32 md:pt-24 print:max-w-none print:p-0"
      >
        <header className="pb-10 md:pb-14 print:pb-6">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.08em] text-ink-muted print:hidden">
            <span>
              {cv.labels.updated} {cv.updated}
            </span>
            <PrintButton label={cv.labels.print} />
          </div>
          <Mark size={44} className="mb-6 print:mb-4" />
          <h1 className="text-4xl font-medium tracking-[-0.03em] md:text-6xl print:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg md:text-xl print:text-base">
            {cv.headline}
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-ink-muted print:mt-4">
            <li>{cv.location}</li>
            {contacts.map((contact) => (
              <li key={contact.href}>
                <a
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={contact.external ? "noreferrer" : undefined}
                  className="border-b border-line pb-0.5 transition-colors hover:border-ink hover:text-ink print:border-0"
                >
                  {contact.label}
                  {contact.external && (
                    <span aria-hidden className="print:hidden">
                      {" "}
                      ↗
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </header>

        <CvSection label={cv.labels.profile}>
          <p className="leading-relaxed text-ink-muted print:text-sm">
            {cv.profile}
          </p>
        </CvSection>
        <CvSection label={cv.labels.experience}>
          <CvEntries entries={cv.experience} />
        </CvSection>
        <CvSection label={cv.labels.projects}>
          <CvEntries entries={cv.projects} />
        </CvSection>
        <CvSection label={cv.labels.education}>
          <CvEntries entries={cv.education} />
        </CvSection>
        <CvSection label={cv.labels.skills}>
          <dl className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-[11rem_1fr]">
            {cv.skills.map((skill) => (
              <div key={skill.area} className="contents">
                <dt className="font-mono text-xs leading-6 text-ink-muted">
                  {skill.area}
                </dt>
                <dd className="mb-2 sm:mb-0">{skill.items}</dd>
              </div>
            ))}
          </dl>
        </CvSection>
        <CvSection label={cv.labels.languages}>
          <ul className="flex flex-col gap-1 text-sm">
            {cv.languages.map((language) => (
              <li key={language.name}>
                <span className="font-medium">{language.name}</span>
                <span className="text-ink-muted">, {language.level}</span>
              </li>
            ))}
          </ul>
        </CvSection>
        <CvSection label={cv.labels.traits}>
          <dl className="flex flex-col gap-2 text-sm">
            {cv.traits.map((trait) => (
              <div key={trait.label}>
                <dt className="inline font-medium">{trait.label}: </dt>
                <dd className="inline text-ink-muted">{trait.text}</dd>
              </div>
            ))}
          </dl>
        </CvSection>

        <p className="border-t border-line pt-6 text-xs leading-relaxed text-ink-muted print:pt-4">
          {cv.consent}
        </p>
      </main>
      <Footer locale={lang} footer={footer} />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { profile } from "@/content/profile";
import { getContent, isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/site/metadata";

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { privacy } = getContent(lang);
  return pageMetadata(lang, {
    title: privacy.metaTitle,
    description: privacy.metaDescription,
    path: "privacy/",
  });
}

// Sostituisce "{email}" con un link all'indirizzo email.
function withEmail(text: string) {
  return text.split("{email}").map((part, i, parts) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && (
        <a
          href={`mailto:${profile.email}`}
          className="border-b border-ink transition-colors hover:text-ink-muted"
        >
          {profile.email}
        </a>
      )}
    </span>
  ));
}

export default async function PrivacyPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const { nav, footer, privacy } = getContent(lang);

  return (
    <>
      <Header locale={lang} nav={nav} path="privacy/" />
      <main
        id="top"
        className="mx-auto max-w-7xl px-4 pb-24 pt-24 md:px-8 md:pb-32 md:pt-32"
      >
        <div className="max-w-2xl">
          <h1 className="text-4xl font-medium tracking-[-0.03em] md:text-6xl">
            {privacy.title}
          </h1>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
            {privacy.updated}
          </p>
          <div className="mt-16">
            {privacy.sections.map((section) => (
              <section
                key={section.heading}
                className="border-t border-line py-8"
              >
                <h2 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
                  {section.heading}
                </h2>
                <p className="mt-4 leading-relaxed">
                  {withEmail(section.body)}
                </p>
                {section.link && (
                  <a
                    href={section.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {section.link.label} ↗
                  </a>
                )}
              </section>
            ))}
          </div>
          <Link
            href={`/${lang}/`}
            className="mt-8 inline-block border-b border-ink pb-0.5 transition-colors hover:text-ink-muted"
          >
            ← {privacy.back}
          </Link>
        </div>
      </main>
      <Footer locale={lang} footer={footer} />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent, isLocale, locales } from "@/lib/i18n";
import { mono, sans } from "@/lib/site/fonts";
import { pageMetadata } from "@/lib/site/metadata";
import "../../globals.css";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = getContent(lang);
  return pageMetadata(lang, meta);
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    // suppressHydrationWarning: lo script qui sotto aggiunge la classe "js" prima di React.
    <html lang={lang} className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="bg-paper font-sans text-ink">{children}</body>
    </html>
  );
}

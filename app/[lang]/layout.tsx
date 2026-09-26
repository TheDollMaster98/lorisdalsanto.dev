import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IBM_Plex_Mono, Schibsted_Grotesk } from "next/font/google";
import { getContent, isLocale, locales } from "@/lib/i18n";
import "../globals.css";

const sans = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

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

  return {
    metadataBase: new URL("https://lorisdalsanto.dev"),
    title: meta.title,
    description: meta.description,
    alternates: {
      languages: Object.fromEntries(locales.map((code) => [code, `/${code}/`])),
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang} className={`${sans.variable} ${mono.variable}`}>
      <body className="bg-paper font-sans text-ink">{children}</body>
    </html>
  );
}

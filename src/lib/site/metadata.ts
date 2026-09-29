import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n/locales";
import { absoluteUrl, siteUrl } from "./site";

const ogLocale: Record<Locale, string> = { it: "it_IT", en: "en_US" };

// Metadati condivisi da tutte le pagine di una lingua. `path` è la pagina, es. "privacy/".
export function pageMetadata(
  lang: Locale,
  {
    title,
    description,
    path = "",
  }: { title: string; description: string; path?: string },
): Metadata {
  const url = absoluteUrl(`${lang}/${path}`);
  return {
    metadataBase: new URL(`${siteUrl}/`),
    title,
    description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        locales.map((code) => [code, absoluteUrl(`${code}/${path}`)]),
      ),
    },
    openGraph: {
      type: "website",
      url,
      siteName: "Loris Dal Santo",
      title,
      description,
      locale: ogLocale[lang],
      alternateLocale: locales
        .filter((code) => code !== lang)
        .map((code) => ogLocale[code]),
      images: [
        {
          url: absoluteUrl("assets/img/og.png"),
          width: 1200,
          height: 630,
          alt: "Loris Dal Santo, Full-Stack JavaScript & Flutter Mobile Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("assets/img/og.png")],
    },
  };
}

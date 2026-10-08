import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent, isLocale, locales } from "@/lib/i18n";
import { mono, sans } from "@/lib/site/fonts";
import { motionBootScript } from "@/lib/motion/boot";
import { httpsRedirectScript } from "@/lib/site/https";
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

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = getContent(lang);
  return pageMetadata(lang, meta);
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    // suppressHydrationWarning: lo script qui sotto aggiunge le classi "js" e,
    // se le animazioni sono spente, "no-motion" prima di React.
    <html
      lang={lang}
      className={`${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `${httpsRedirectScript}document.documentElement.classList.add('js');${motionBootScript}`,
          }}
        />
      </head>
      <body className="bg-paper font-sans text-ink">
        {/* Per chi naviga da tastiera: compare al primo Tab e salta la navbar. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-20 focus:bg-paper focus:px-3 focus:py-2 focus:text-sm"
        >
          {getContent(lang).nav.skip}
        </a>
        {children}
      </body>
    </html>
  );
}

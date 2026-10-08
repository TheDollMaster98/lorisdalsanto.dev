import type { Metadata } from "next";
import Link from "next/link";
import { mono, sans } from "@/lib/site/fonts";
import "./globals.css";

// Pagina 404 unica per tutto il sito: non sa in che lingua è il visitatore, quindi è bilingue.
export const metadata: Metadata = {
  title: "404 | Loris Dal Santo",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="it" className={`${sans.variable} ${mono.variable}`}>
      <body className="bg-paper font-sans text-ink">
        <main className="mx-auto flex min-h-dvh max-w-7xl flex-col justify-center px-4 py-24 md:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
            404
          </p>
          <h1 className="mt-6 max-w-[16ch] text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[0.98] tracking-[-0.035em]">
            Pagina non trovata.
          </h1>
          <p lang="en" className="mt-4 text-xl text-ink-muted md:text-2xl">
            Page not found.
          </p>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 md:text-lg">
            <Link
              href="/it/"
              hrefLang="it"
              className="border-b border-ink pb-0.5 font-medium transition-colors hover:text-ink-muted"
            >
              Torna al sito →
            </Link>
            <Link
              href="/en/"
              hrefLang="en"
              lang="en"
              className="text-ink-muted transition-colors hover:text-ink"
            >
              Back to the site →
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}

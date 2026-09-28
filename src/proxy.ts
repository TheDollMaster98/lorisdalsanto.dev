import { NextResponse, type NextRequest } from "next/server";
import { fallbackLocale, isLocale, locales, type Locale } from "@/lib/locales";

// Redirect alla lingua del browser per gli URL senza lingua, come nella guida
// Internationalization di Next.js.
// Attivo solo con un hosting con server: con `output: "export"` (GitHub Pages)
// Next lo disattiva e la lingua la sceglie src/app/(root)/page.tsx nel browser.

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );
  if (pathnameHasLocale) return;

  request.nextUrl.pathname = `/${getLocale(request)}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

// Prima lingua supportata nell'header Accept-Language, in ordine di preferenza.
function getLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language") ?? "";
  const match = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.slice(0, 2).toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q)
    .find(({ lang }) => isLocale(lang));

  return match ? (match.lang as Locale) : fallbackLocale;
}

export const config = {
  // Salta gli asset interni di Next e i file statici (favicon, robots.txt…).
  matcher: ["/((?!_next|.*\\..*).*)"],
};

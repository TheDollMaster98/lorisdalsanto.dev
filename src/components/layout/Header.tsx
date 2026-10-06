import Link from "next/link";
import { profile } from "@/content/profile";
import { locales, type Locale } from "@/lib/i18n";
// Interruttore animazioni disattivato, vedi MOTION_TOGGLE in lib/motion/boot.ts.
// import { MotionToggle } from "./MotionToggle";
import type { Content } from "@/models/content.model";

type HeaderProps = {
  locale: Locale;
  nav: Content["nav"];
  // Pagina corrente dopo la lingua, es. "privacy/": il cambio lingua resta sulla stessa pagina.
  path?: string;
};

export function Header({ locale, nav, path = "" }: HeaderProps) {
  const home = `/${locale}/`;
  const items = [
    { label: nav.work, href: `${home}#work` },
    // Su mobile non c'è spazio per quattro voci: queste si raggiungono scorrendo.
    { label: nav.about, href: `${home}#about`, secondary: true },
    { label: nav.stack, href: `${home}#stack`, secondary: true },
    { label: nav.contact, href: `${home}#contact` },
    { label: nav.cv, href: `${home}cv/` },
  ];

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur-sm print:hidden">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        <Link href={home} className="truncate text-sm font-medium">
          {profile.name}
        </Link>
        <div className="flex items-center gap-4 text-sm text-ink-muted md:gap-8">
          <nav className="flex gap-4 md:gap-8">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-ink ${
                  item.secondary ? "hidden md:inline" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          {/* <MotionToggle label={nav.motion} /> */}
          <div className="flex gap-3 font-mono text-xs uppercase">
            {locales.map((code) => (
              <Link
                key={code}
                href={`/${code}/${path}`}
                hrefLang={code}
                aria-current={code === locale ? "page" : undefined}
                className={
                  code === locale
                    ? "text-ink"
                    : "transition-colors hover:text-ink"
                }
              >
                {code}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

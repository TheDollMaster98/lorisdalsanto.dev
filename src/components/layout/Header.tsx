import Link from "next/link";
import { profile } from "@/content/profile";
import { locales, type Locale } from "@/lib/i18n";
import type { Content } from "@/models/content.model";

type HeaderProps = {
  locale: Locale;
  nav: Content["nav"];
};

export function Header({ locale, nav }: HeaderProps) {
  const items = [
    { label: nav.work, href: "#work" },
    { label: nav.about, href: "#about" },
    { label: nav.contact, href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between gap-4 px-4 md:px-8">
        <a href="#top" className="truncate text-sm font-medium">
          {profile.name}
        </a>
        <div className="flex items-center gap-4 text-sm text-ink-muted md:gap-8">
          <nav className="flex gap-4 md:gap-8">
            {items.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-3 font-mono text-xs uppercase">
            {locales.map((code) => (
              <Link
                key={code}
                href={`/${code}/`}
                hrefLang={code}
                aria-current={code === locale ? "page" : undefined}
                className={
                  code === locale ? "text-ink" : "transition-colors hover:text-ink"
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

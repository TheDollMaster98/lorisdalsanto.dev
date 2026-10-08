import Link from "next/link";
import { profile } from "@/content/profile";
import type { Locale } from "@/lib/i18n";
import type { Content } from "@/models/content.model";

type FooterProps = {
  locale: Locale;
  footer: Content["footer"];
};

export function Footer({ locale, footer }: FooterProps) {
  return (
    <footer className="border-t border-line print:hidden">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-x-6 gap-y-2 px-4 py-6 font-mono text-xs text-ink-muted md:px-8">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <div className="flex gap-6">
          <Link
            href={`/${locale}/privacy/`}
            className="transition-colors hover:text-ink"
          >
            {footer.privacy}
          </Link>
          <a href="#top" className="transition-colors hover:text-ink">
            {footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}

import { profile } from "@/content/profile";
import type { Content } from "@/models/content";

export function Footer({ footer }: { footer: Content["footer"] }) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1280px] justify-between px-4 py-6 font-mono text-xs text-ink-muted md:px-8">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a href="#top" className="transition-colors hover:text-ink">
          {footer.backToTop}
        </a>
      </div>
    </footer>
  );
}

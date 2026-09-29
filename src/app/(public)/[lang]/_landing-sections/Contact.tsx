import { profile } from "@/content/profile";
import { mailtoHref } from "@/lib/site/mailto";
import type { Content } from "@/models/content.model";
import { Section } from "./Section";

export function Contact({ contact }: { contact: Content["contact"] }) {
  return (
    <Section id="contact" index="04" label={contact.label}>
      <p data-reveal className="mb-6 text-ink-muted">
        {contact.intro}
      </p>
      <a
        data-reveal
        href={mailtoHref(contact.mail)}
        className="relative inline-block break-all pb-1 text-[clamp(1.75rem,5vw,4.5rem)] font-medium leading-none tracking-[-0.03em] transition-colors hover:text-ink-muted"
      >
        {profile.email}
        <span
          data-line
          className="absolute inset-x-0 bottom-0 h-px bg-ink"
          aria-hidden
        />
      </a>
      <ul data-reveal className="mt-16 flex flex-wrap gap-x-8 gap-y-3 text-sm">
        {profile.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="text-ink-muted transition-colors hover:text-ink"
            >
              {link.label} ↗
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

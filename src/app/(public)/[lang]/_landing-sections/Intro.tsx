import type { Content } from "@/models/content.model";
import { Section } from "./Section";

export function Intro({ intro }: { intro: Content["intro"] }) {
  return (
    <Section id="intro" label={intro.label}>
      <p
        data-reveal
        className="max-w-[46ch] text-xl leading-snug tracking-[-0.015em] md:text-2xl"
      >
        {intro.text}
      </p>
      <p data-reveal className="mt-8 max-w-[60ch] text-sm text-ink-muted">
        {intro.ai}
      </p>
    </Section>
  );
}

import Image from "next/image";
import { profile } from "@/content/profile";
import { asset } from "@/lib/site/asset";
import type { Content } from "@/models/content.model";
import { Section } from "./Section";

export function Intro({ intro }: { intro: Content["intro"] }) {
  return (
    <Section
      id="intro"
      label={intro.label}
      aside={
        <Image
          data-reveal
          src={asset("assets/img/profile/loris-720.webp")}
          alt={profile.name}
          width={720}
          height={720}
          sizes="(min-width: 768px) 11rem, 8rem"
          className="mt-6 h-auto w-32 md:mt-8 md:w-full md:max-w-44"
        />
      }
    >
      <p
        data-reveal
        className="max-w-[46ch] text-pretty text-xl leading-snug tracking-[-0.015em] md:text-2xl"
      >
        {intro.text}
      </p>
      <p
        data-reveal
        className="mt-8 max-w-[60ch] text-pretty text-sm text-ink-muted"
      >
        {intro.ai}
      </p>
    </Section>
  );
}

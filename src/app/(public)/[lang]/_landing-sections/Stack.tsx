import type { Content } from "@/models/content.model";
import { Section } from "./Section";

export function Stack({ stack }: { stack: Content["stack"] }) {
  return (
    <Section id="stack" index="03" label={stack.label}>
      <dl data-reveal className="max-w-3xl text-sm md:text-base">
        {stack.skills.map((skill) => (
          <div
            key={skill.area}
            className="grid grid-cols-[5.5rem_1fr] gap-4 border-t border-line py-4 md:grid-cols-[8.5rem_1fr]"
          >
            <dt className="font-mono text-xs leading-5 text-ink-muted md:leading-6">
              {skill.area}
            </dt>
            <dd>{skill.items}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

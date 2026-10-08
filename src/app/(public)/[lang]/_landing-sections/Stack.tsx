import type { Content } from "@/models/content.model";
import { Section } from "./Section";

export function Stack({ stack }: { stack: Content["stack"] }) {
  return (
    <Section id="stack" label={stack.label}>
      <dl
        data-reveal
        className="grid max-w-4xl grid-cols-1 gap-x-12 gap-y-10 text-sm md:grid-cols-2 md:text-base"
      >
        {stack.skills.map((skill) => (
          <div key={skill.area}>
            <dt className="mb-2 font-mono text-xs text-ink-muted">
              {skill.area}
            </dt>
            <dd>{skill.items}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

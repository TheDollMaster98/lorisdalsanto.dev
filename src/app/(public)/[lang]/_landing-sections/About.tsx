import type { Content } from "@/models/content.model";
import type { Entry } from "@/models/entry.model";
import { Section } from "./Section";

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
      {children}
    </h3>
  );
}

function Timeline({ entries }: { entries: Entry[] }) {
  return (
    <dl>
      {entries.map((item) => (
        <div
          key={item.company + item.period}
          className="grid grid-cols-[8.5rem_1fr] gap-4 border-t border-line py-4 text-sm"
        >
          <dt className="font-mono text-xs leading-5 text-ink-muted">{item.period}</dt>
          <dd>
            {item.company}
            <span className="block text-ink-muted">{item.role}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function About({ about }: { about: Content["about"] }) {
  return (
    <Section id="about" index="02" label={about.label}>
      <p data-reveal className="max-w-[46ch] text-xl leading-snug tracking-[-0.015em] md:text-2xl">
        {about.text}
      </p>

      <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-6">
        <div className="space-y-16">
          <div data-reveal>
            <Heading>{about.experienceLabel}</Heading>
            <Timeline entries={about.experience} />
          </div>
          <div data-reveal>
            <Heading>{about.educationLabel}</Heading>
            <Timeline entries={about.education} />
          </div>
        </div>
        <div data-reveal>
          <Heading>{about.skillsLabel}</Heading>
          <dl className="text-sm">
            {about.skills.map((skill) => (
              <div
                key={skill.area}
                className="grid grid-cols-[5.5rem_1fr] gap-4 border-t border-line py-4"
              >
                <dt className="font-mono text-xs leading-5 text-ink-muted">{skill.area}</dt>
                <dd>{skill.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}

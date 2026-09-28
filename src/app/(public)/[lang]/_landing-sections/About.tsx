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
          className="grid grid-cols-1 gap-1 border-t border-line py-4 text-sm sm:grid-cols-[8.5rem_1fr] sm:gap-4"
        >
          <dt className="font-mono text-xs leading-5 text-ink-muted">
            {item.period}
          </dt>
          <dd>
            {item.company}
            <span className="block text-ink-muted">{item.role}</span>
            {item.summary && (
              <span className="mt-2 block text-ink-muted">{item.summary}</span>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function About({ about }: { about: Content["about"] }) {
  return (
    <Section id="about" index="02" label={about.label}>
      <div className="grid max-w-3xl grid-cols-1 gap-16">
        <div data-reveal>
          <Heading>{about.experienceLabel}</Heading>
          <Timeline entries={about.experience} />
        </div>
        <div data-reveal>
          <Heading>{about.educationLabel}</Heading>
          <Timeline entries={about.education} />
        </div>
      </div>
    </Section>
  );
}

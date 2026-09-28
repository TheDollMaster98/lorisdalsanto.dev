import type { Content } from "@/models/content.model";
import { Section } from "./Section";

export function Work({ work }: { work: Content["work"] }) {
  return (
    <Section id="work" index="01" label={work.label}>
      <ol className="border-b border-line">
        {work.projects.map((project) => {
          const content = (
            <div className="grid grid-cols-12 gap-x-6 gap-y-3 py-8 md:py-10">
              <div className="col-span-8 md:col-span-5">
                <h3 className="text-2xl font-medium tracking-[-0.02em] md:text-3xl">
                  {project.title}
                  {project.href && (
                    <span className="ml-2 text-ink-muted" aria-hidden>
                      ↗
                    </span>
                  )}
                </h3>
                <p className="mt-2 text-sm text-ink-muted">{project.context}</p>
              </div>
              <p className="col-span-4 whitespace-nowrap text-right font-mono text-xs leading-8 text-ink-muted md:order-last md:col-span-2 md:leading-9">
                {project.year}
              </p>
              <div className="col-span-12 md:col-span-5">
                <p className="text-ink-muted">{project.summary}</p>
                <p className="mt-4 font-mono text-xs text-ink-muted">
                  {project.role} — {project.stack.join(", ")}
                </p>
              </div>
            </div>
          );

          return (
            <li key={project.title} className="border-t border-line">
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-colors hover:bg-paper-raised"
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </li>
          );
        })}
      </ol>
    </Section>
  );
}

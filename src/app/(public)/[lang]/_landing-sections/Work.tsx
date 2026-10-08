import type { Content } from "@/models/content.model";
import type { Project } from "@/models/project.model";
import { Section } from "./Section";

export function Work({ work }: { work: Content["work"] }) {
  return (
    <Section id="work" label={work.label}>
      <ol>
        {work.projects.map((project) => {
          const content = (
            <div
              data-reveal
              className="grid grid-cols-12 gap-x-6 gap-y-3 py-8 md:py-10"
            >
              <div className="col-span-8 md:col-span-5">
                <h3 className="text-balance text-2xl font-medium tracking-[-0.02em] md:text-3xl">
                  {project.title}
                  {(project.href || hasGallery(project)) && (
                    <span
                      className="ml-2 inline-block text-ink-muted transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden
                    >
                      {hasGallery(project) ? "+" : "↗"}
                    </span>
                  )}
                </h3>
                <p className="mt-2 text-sm text-ink-muted">{project.context}</p>
                {hasGallery(project) && (
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.08em] underline decoration-line underline-offset-4 transition-colors group-hover:decoration-ink">
                    {work.gallery.open}
                  </p>
                )}
              </div>
              <p className="col-span-4 whitespace-nowrap text-right font-mono text-xs leading-8 text-ink-muted md:order-last md:col-span-2 md:leading-9">
                {project.year}
              </p>
              <div className="col-span-12 md:col-span-5">
                <p className="text-pretty text-ink-muted">{project.summary}</p>
                <p className="mt-4 font-mono text-xs text-ink-muted">
                  {project.role}
                  <span className="mt-1 block">{project.stack.join(", ")}</span>
                </p>
                {project.links && (
                  <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                    {project.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="border-b border-line pb-0.5 transition-colors hover:border-ink"
                        >
                          {link.label} ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );

          return (
            <li key={project.title}>
              <div data-line className="h-px bg-line" />
              {hasGallery(project) ? (
                <button
                  type="button"
                  data-gallery-open={project.slug}
                  aria-haspopup="dialog"
                  className="group block w-full cursor-pointer text-left transition-colors hover:bg-paper-raised"
                >
                  {content}
                </button>
              ) : project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block transition-colors hover:bg-paper-raised"
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
      <div data-line className="h-px bg-line" />
    </Section>
  );
}

// Con immagini la riga apre la galleria (il link al sito è dentro la galleria).
function hasGallery(project: Project) {
  return Boolean(project.slug && project.images?.length);
}

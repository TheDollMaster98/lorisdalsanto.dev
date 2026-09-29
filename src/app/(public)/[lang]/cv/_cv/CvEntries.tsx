import type { CvEntry } from "@/models/cv.model";

export function CvEntries({ entries }: { entries: CvEntry[] }) {
  return (
    <ol className="flex flex-col gap-8 print:gap-4">
      {entries.map((entry) => (
        <li key={`${entry.org}-${entry.title}`} className="break-inside-avoid">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="font-medium">{entry.title}</h3>
            <p className="font-mono text-xs text-ink-muted">{entry.period}</p>
          </div>
          <p className="text-sm text-ink-muted">{entry.org}</p>
          {entry.points && (
            <ul className="mt-3 flex list-disc flex-col gap-1 pl-5 text-sm leading-relaxed text-ink-muted marker:text-line print:mt-2">
              {entry.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
          {entry.stack && (
            <p className="mt-3 font-mono text-xs text-ink-muted print:mt-2">
              {entry.stack}
            </p>
          )}
          {entry.links && (
            <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm">
              {entry.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-line pb-0.5 transition-colors hover:border-ink print:border-0"
                  >
                    {link.label}
                    <span aria-hidden className="print:hidden">
                      {" "}
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}

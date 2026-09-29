"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { EASE } from "@/lib/motion/Motion";
import type { Content } from "@/models/content.model";

export type GalleryProject = {
  slug: string;
  title: string;
  context: string;
  year: string;
  href?: string;
  images: {
    src: string;
    alt: string;
    caption?: string;
    width: number;
    height: number;
  }[];
};

type ProjectGalleryProps = {
  projects: GalleryProject[];
  labels: Content["work"]["gallery"];
};

// Un solo <dialog> popup con tutti i progetti in colonna: si apre sul progetto
// cliccato e scorrendo si passa al successivo. Si chiude con il pulsante, con Esc
// o cliccando fuori. I pulsanti che lo aprono sono in Work
// (data-gallery-open="<slug>"), così le righe restano Server Component.
gsap.registerPlugin(ScrollTrigger);

export function ProjectGallery({ projects, labels }: ProjectGalleryProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    let pages: gsap.Context | undefined;

    function onClick(event: MouseEvent) {
      const trigger = (event.target as Element).closest<HTMLElement>(
        "[data-gallery-open]",
      );
      if (!trigger || !el) return;
      el.showModal();
      document.documentElement.style.overflow = "hidden";
      document
        .getElementById(`gallery-${trigger.dataset.galleryOpen}`)
        ?.scrollIntoView({ block: "start" });
      pages = turnPages(panel.current);
    }

    function onClose() {
      document.documentElement.style.overflow = "";
      pages?.revert();
    }

    document.addEventListener("click", onClick);
    el.addEventListener("close", onClose);
    return () => {
      document.removeEventListener("click", onClick);
      el.removeEventListener("close", onClose);
    };
  }, []);

  if (projects.length === 0) return null;

  return (
    <dialog
      ref={dialog}
      aria-labelledby="gallery-title"
      // Il <dialog> copre lo schermo ed è trasparente: il pannello sta dentro, con
      // un margine intorno. Un click sul margine arriva al <dialog> stesso e chiude.
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
      className="size-full max-h-none max-w-none bg-transparent p-4 text-ink opacity-0 transition-[opacity,display,overlay] transition-discrete duration-300 ease-out backdrop:bg-ink/40 open:opacity-100 motion-reduce:transition-none starting:open:opacity-0 md:p-10"
    >
      <div
        ref={panel}
        className="mx-auto h-full max-w-6xl scrollbar-quiet overflow-x-hidden overflow-y-auto overscroll-contain border border-line bg-paper"
      >
        <div className="sticky top-0 z-10 border-b border-line bg-paper">
          <div className="flex h-14 items-center justify-between px-5 md:px-10">
            <p
              id="gallery-title"
              className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted"
            >
              {labels.title}
            </p>
            <button
              type="button"
              autoFocus
              onClick={() => dialog.current?.close()}
              className="font-mono text-xs uppercase tracking-[0.08em] transition-colors hover:text-ink-muted"
            >
              {labels.close} ×
            </button>
          </div>
        </div>

        {projects.map((project, i) => (
          <section
            key={project.slug}
            id={`gallery-${project.slug}`}
            aria-labelledby={`gallery-${project.slug}-title`}
            className={`scroll-mt-14 ${i > 0 ? "overflow-hidden border-t border-line perspective-distant perspective-origin-top" : ""}`}
          >
            <div
              data-page={i > 0 || undefined}
              className="px-5 py-10 backface-hidden md:px-10 md:py-14"
            >
              <header className="mb-8 flex flex-wrap items-end justify-between gap-x-6 gap-y-3 md:mb-10">
                <div>
                  <h2
                    id={`gallery-${project.slug}-title`}
                    className="text-2xl font-medium tracking-[-0.02em] md:text-4xl"
                  >
                    {project.title}
                  </h2>
                  <p className="mt-2 font-mono text-xs text-ink-muted">
                    {project.context}, {project.year}
                  </p>
                </div>
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-ink pb-0.5 font-medium transition-colors hover:border-ink-muted hover:text-ink-muted"
                  >
                    {labels.visit} ↗
                  </a>
                )}
              </header>

              <div className="flex flex-col gap-10 md:gap-14">
                {project.images.map((image) => (
                  <figure key={image.src}>
                    <div className="bg-paper-raised">
                      {/* Altezza massima 75vh: anche gli screenshot verticali di un telefono
                      restano interi nel popup. La larghezza è calcolata dalle
                      proporzioni, così lo spazio è riservato prima del caricamento e
                      lo scroll al progetto cliccato non si sposta. */}
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        loading="lazy"
                        className="mx-auto h-auto"
                        style={{
                          width: `min(100%, calc(75vh * ${image.width} / ${image.height}))`,
                          aspectRatio: `${image.width} / ${image.height}`,
                        }}
                      />
                    </div>
                    {image.caption && (
                      <figcaption className="mt-3 max-w-2xl text-sm text-ink-muted">
                        {image.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </dialog>
  );
}

// Passata la riga che separa due progetti, il progetto successivo entra girando
// come la pagina di un libro, con il dorso a sinistra. Tornando su si richiude.
// Gli scroll trigger si creano a ogni apertura, perché con il <dialog> chiuso
// il pannello non ha dimensioni da misurare.
function turnPages(scroller: HTMLElement | null) {
  if (
    !scroller ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  return gsap.context(() => {
    gsap.utils.toArray<HTMLElement>("[data-page]").forEach((page) => {
      gsap.from(page, {
        rotationY: -70,
        autoAlpha: 0,
        transformOrigin: "left center",
        duration: 1,
        ease: EASE,
        scrollTrigger: {
          trigger: page.parentElement,
          scroller,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, scroller);
}

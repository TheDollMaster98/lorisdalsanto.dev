"use client";

import gsap from "gsap";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
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

// Quanto bisogna "spingere" oltre la fine (o l'inizio) di un progetto per
// passare al successivo (o al precedente): rotella e swipe, in pixel.
const WHEEL_THRESHOLD = 120;
const SWIPE_THRESHOLD = 60;
// Dopo uno scroll vero si aspetta un attimo: l'inerzia del trackpad che arriva
// in fondo non deve cambiare progetto da sola.
const SCROLL_SETTLE_MS = 300;

// Popup con un progetto alla volta. Arrivati in fondo a un progetto, continuando
// a scorrere il contenuto viene sostituito dal successivo con una tendina che
// scende dall'alto; in cima, scorrendo su, si torna al precedente (tendina dal
// basso). Si cambia anche con le frecce nell'intestazione, con il pulsante in
// fondo o con i tasti freccia/pagina. Si chiude con il pulsante, con Esc o
// cliccando fuori. I pulsanti che lo aprono sono in Work
// (data-gallery-open="<slug>"), così le righe restano Server Component.
export function ProjectGallery({ projects, labels }: ProjectGalleryProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const cover = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const busy = useRef(false);
  const direction = useRef<1 | -1 | 0>(0);

  const go = useCallback(
    (to: number) => {
      const from = activeRef.current;
      if (busy.current || to === from || to < 0 || to >= projects.length) {
        return;
      }
      const dir = to > from ? 1 : -1;
      busy.current = true;
      direction.current = dir;
      activeRef.current = to;

      if (reducedMotion() || !cover.current) {
        setActive(to);
        return;
      }
      // Prima metà: la tendina copre il progetto attuale.
      gsap.fromTo(
        cover.current,
        { scaleY: 0, transformOrigin: dir > 0 ? "top" : "bottom" },
        {
          scaleY: 1,
          duration: 0.35,
          ease: "power2.in",
          onComplete: () => setActive(to),
        },
      );
    },
    [projects.length],
  );

  // Seconda metà: nuovo progetto dall'inizio, la tendina si ritira nello stesso verso.
  useLayoutEffect(() => {
    const scroller = panel.current;
    if (!scroller) return;
    scroller.scrollTop = 0;
    const dir = direction.current;
    direction.current = 0;
    if (!dir || reducedMotion() || !cover.current) {
      busy.current = false;
      return;
    }
    const content = scroller.querySelector(`[data-project="${active}"]`);
    gsap.fromTo(
      cover.current,
      { scaleY: 1, transformOrigin: dir > 0 ? "bottom" : "top" },
      {
        scaleY: 0,
        duration: 0.8,
        ease: EASE,
        onComplete: () => {
          busy.current = false;
        },
      },
    );
    if (content) {
      gsap.fromTo(
        content,
        { y: -24 * dir },
        { y: 0, duration: 0.8, ease: EASE, clearProps: "transform" },
      );
    }
  }, [active]);

  // Apertura dai pulsanti in Work.
  useEffect(() => {
    const el = dialog.current;
    if (!el) return;

    function onClick(event: MouseEvent) {
      const trigger = (event.target as Element).closest<HTMLElement>(
        "[data-gallery-open]",
      );
      if (!trigger || !el) return;
      const index = Math.max(
        0,
        projects.findIndex((p) => p.slug === trigger.dataset.galleryOpen),
      );
      busy.current = false;
      direction.current = 0;
      activeRef.current = index;
      setActive(index);
      el.showModal();
      document.documentElement.style.overflow = "hidden";
      if (panel.current) panel.current.scrollTop = 0;
    }

    function onClose() {
      document.documentElement.style.overflow = "";
      if (cover.current) gsap.set(cover.current, { scaleY: 0 });
    }

    document.addEventListener("click", onClick);
    el.addEventListener("close", onClose);
    return () => {
      document.removeEventListener("click", onClick);
      el.removeEventListener("close", onClose);
    };
  }, [projects]);

  // Gesti oltre la fine o l'inizio del progetto: rotella, swipe, tastiera.
  useEffect(() => {
    const el = panel.current;
    if (!el) return;

    let push = 0;
    let lastScroll = 0;
    let touchY = 0;
    const atEnd = () => el.scrollTop + el.clientHeight >= el.scrollHeight - 2;
    const atStart = () => el.scrollTop <= 0;
    const settled = () => performance.now() - lastScroll > SCROLL_SETTLE_MS;

    function onScroll() {
      lastScroll = performance.now();
      push = 0;
    }

    function onWheel(event: WheelEvent) {
      if (busy.current || !settled()) return;
      if (event.deltaY > 0 && atEnd()) {
        push = Math.max(push, 0) + event.deltaY;
        if (push > WHEEL_THRESHOLD) {
          push = 0;
          go(activeRef.current + 1);
        }
      } else if (event.deltaY < 0 && atStart()) {
        push = Math.min(push, 0) + event.deltaY;
        if (push < -WHEEL_THRESHOLD) {
          push = 0;
          go(activeRef.current - 1);
        }
      }
    }

    function onTouchStart(event: TouchEvent) {
      touchY = event.touches[0].clientY;
    }

    function onTouchEnd(event: TouchEvent) {
      if (busy.current || !settled()) return;
      const dy = touchY - event.changedTouches[0].clientY;
      if (dy > SWIPE_THRESHOLD && atEnd()) go(activeRef.current + 1);
      else if (dy < -SWIPE_THRESHOLD && atStart()) go(activeRef.current - 1);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (["ArrowDown", "PageDown"].includes(event.key) && atEnd()) {
        go(activeRef.current + 1);
      } else if (["ArrowUp", "PageUp"].includes(event.key) && atStart()) {
        go(activeRef.current - 1);
      }
    }

    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("wheel", onWheel, { passive: true });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    el.addEventListener("keydown", onKeyDown);
    return () => {
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("keydown", onKeyDown);
    };
  }, [go]);

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
      <div className="relative mx-auto h-full max-w-6xl overflow-hidden border border-line bg-paper">
        <div
          ref={panel}
          className="h-full scrollbar-quiet overflow-y-auto overscroll-contain"
        >
          <div className="sticky top-0 z-10 flex h-14 items-center justify-between gap-6 border-b border-line bg-paper px-5 md:px-10">
            <p
              id="gallery-title"
              className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted"
            >
              {labels.title}
              <span className="ml-3 tabular-nums" aria-live="polite">
                {pad(active + 1)} / {pad(projects.length)}
              </span>
            </p>
            <div className="flex items-center gap-5 font-mono text-xs tracking-[0.08em]">
              <button
                type="button"
                aria-label={labels.previous}
                disabled={active === 0}
                onClick={() => go(active - 1)}
                className="transition-colors hover:text-ink-muted disabled:text-line"
              >
                ↑
              </button>
              <button
                type="button"
                aria-label={labels.next}
                disabled={active === projects.length - 1}
                onClick={() => go(active + 1)}
                className="transition-colors hover:text-ink-muted disabled:text-line"
              >
                ↓
              </button>
              <button
                type="button"
                autoFocus
                onClick={() => dialog.current?.close()}
                className="ml-2 uppercase transition-colors hover:text-ink-muted"
              >
                {labels.close} ×
              </button>
            </div>
          </div>

          {projects.map((project, i) => (
            <section
              key={project.slug}
              data-project={i}
              hidden={i !== active}
              aria-labelledby={`gallery-${project.slug}-title`}
            >
              <div className="px-5 py-10 md:px-10 md:py-14">
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
                        {/* Altezza massima 75vh: anche gli screenshot verticali di un
                          telefono restano interi nel popup. La larghezza è calcolata
                          dalle proporzioni, così lo spazio è riservato prima del
                          caricamento. */}
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

              {i < projects.length - 1 && (
                <button
                  type="button"
                  onClick={() => go(i + 1)}
                  className="group flex w-full items-center justify-between gap-6 border-t border-line px-5 py-8 text-left transition-colors hover:bg-paper-raised md:px-10 md:py-10"
                >
                  <span>
                    <span className="block font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
                      {labels.next}
                    </span>
                    <span className="mt-2 block text-xl font-medium tracking-[-0.02em] md:text-2xl">
                      {projects[i + 1].title}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="text-2xl text-ink-muted transition-transform duration-300 ease-out group-hover:translate-y-1"
                  >
                    ↓
                  </span>
                </button>
              )}
            </section>
          ))}
        </div>

        {/* Tendina del cambio progetto: copre il contenuto sotto l'intestazione. */}
        <div
          ref={cover}
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 top-14 bg-paper"
          // transform e non la classe scale-y-0: Tailwind 4 usa la proprietà `scale`,
          // che si sommerebbe allo scaleY animato da GSAP.
          style={{ transform: "scaleY(0)" }}
        />
      </div>
    </dialog>
  );
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

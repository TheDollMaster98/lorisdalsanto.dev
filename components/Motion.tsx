"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const EASE = "expo.out";

// Animazioni della pagina, guidate da attributi data-* nel markup:
// - data-hero-title: il titolo entra riga per riga da una maschera
// - data-hero-meta: la riga sopra il titolo compare dopo il titolo
// - data-line: le linee sottili si disegnano da sinistra entrando nel viewport
// - data-reveal: il contenuto sale di poco e compare entrando nel viewport
// Con "riduci animazioni" attivo nel sistema, tutto resta statico.
export function Motion({ children }: { children: React.ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const title = scope.current?.querySelector<HTMLElement>("[data-hero-title]");
        const meta = gsap.utils.toArray<HTMLElement>("[data-hero-meta] > *");

        if (title) {
          SplitText.create(title, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit(self) {
              gsap.set(title, { visibility: "visible" });
              return gsap.from(self.lines, {
                yPercent: 110,
                duration: 1.2,
                stagger: 0.09,
                ease: EASE,
              });
            },
          });
        }

        gsap.from(meta, {
          autoAlpha: 0,
          y: 8,
          duration: 0.8,
          stagger: 0.08,
          delay: 0.5,
          ease: EASE,
        });

        gsap.utils.toArray<HTMLElement>("[data-line]").forEach((line) => {
          gsap.from(line, {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1.4,
            ease: EASE,
            scrollTrigger: { trigger: line, start: "top 92%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, {
            autoAlpha: 0,
            y: 24,
            duration: 1,
            ease: EASE,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-hero-title]", { visibility: "visible" });
      });
    },
    { scope },
  );

  return <div ref={scope}>{children}</div>;
}

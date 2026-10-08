"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMotionEnabled } from "./preference";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Curva unica per tutte le animazioni del sito.
export const EASE = "expo.out";

// Elementi della hero nascosti dal CSS prima del primo paint (vedi globals.css).
const HERO = "[data-hero-title], [data-hero-meta] > *, [data-hero-cta] > *";

// Animazioni della pagina, guidate da attributi data-* nel markup:
// - data-hero-title: il titolo si scrive lettera per lettera, con un cursore che lampeggia
// - data-hero-meta: la riga sopra il titolo compare dopo il titolo
// - data-hero-cta: i link sotto il titolo compaiono per ultimi
// - data-line: le linee sottili si disegnano da sinistra entrando nel viewport
// - data-reveal: il contenuto sale di poco e compare entrando nel viewport
// Con "riduci animazioni" attivo nel sistema, o con l'interruttore dell'header
// spento, tutto resta statico. Spegnendo l'interruttore le animazioni in corso
// vengono annullate e la pagina torna al suo stato naturale.
export function Motion({ children }: { children: React.ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);
  const enabled = useMotionEnabled();

  useGSAP(
    () => {
      if (!enabled) {
        gsap.set(HERO, { visibility: "visible" });
        return;
      }
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const title =
          scope.current?.querySelector<HTMLElement>("[data-hero-title]");
        const meta = gsap.utils.toArray<HTMLElement>("[data-hero-meta] > *");

        // Il titolo si scrive da solo. La riga sopra e i link sotto compaiono subito,
        // senza aspettare la fine della scrittura: le azioni restano raggiungibili.
        const intro = gsap.timeline({ delay: 0.3 });
        const restore = title ? typeTitle(title, intro) : undefined;

        // fromTo: partono già nascosti dal CSS, quindi serve dichiarare l'arrivo.
        gsap.fromTo(
          meta,
          { autoAlpha: 0, y: 8 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.06,
            delay: 0.3,
            ease: EASE,
          },
        );

        gsap.fromTo(
          gsap.utils.toArray<HTMLElement>("[data-hero-cta] > *"),
          { autoAlpha: 0, y: 8 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.06,
            delay: 0.5,
            ease: EASE,
          },
        );

        gsap.utils.toArray<HTMLElement>("[data-line]").forEach((line) => {
          gsap.from(line, {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.8,
            ease: EASE,
            scrollTrigger: { trigger: line, start: "top 92%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, {
            autoAlpha: 0,
            y: 12,
            duration: 0.6,
            ease: EASE,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });

        return restore;
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(HERO, { visibility: "visible" });
      });
    },
    // Cambiando la preferenza si annulla tutto (anche il titolo spezzato in
    // lettere) e si riparte da capo.
    { scope, dependencies: [enabled], revertOnUpdate: true },
  );

  return <div ref={scope}>{children}</div>;
}

// Scrittura a macchina del titolo: ogni lettera diventa uno span invisibile che si
// accende in sequenza, con il cursore subito dopo. Lo spazio del titolo è già
// riservato (le lettere sono nel layout, solo invisibili): la pagina non salta.
// Le parole restano intere per andare a capo nel punto giusto. Ai lettori di
// schermo arriva il titolo intero, tramite aria-label.
const TYPE_SPEED = 0.026; // secondi per lettera, al massimo
const TYPE_TOTAL = 1.2; // durata massima della scrittura, in secondi
const TYPE_PAUSE = 0.12; // pausa dopo virgola e punto

function typeTitle(title: HTMLElement, timeline: gsap.core.Timeline) {
  const text = title.textContent ?? "";
  const original = [...title.childNodes];
  title.setAttribute("aria-label", text);

  const letters: HTMLElement[] = [];
  const fragment = document.createDocumentFragment();
  for (const part of text.split(/(\s+)/)) {
    if (!part) continue;
    if (/^\s+$/.test(part)) {
      fragment.append(" ");
      continue;
    }
    const word = document.createElement("span");
    word.className = "whitespace-nowrap";
    word.setAttribute("aria-hidden", "true");
    for (const char of part) {
      const letter = document.createElement("span");
      letter.textContent = char;
      letter.style.visibility = "hidden";
      word.append(letter);
      letters.push(letter);
    }
    fragment.append(word);
  }

  const cursor = document.createElement("span");
  cursor.className = "type-cursor is-typing";
  cursor.setAttribute("aria-hidden", "true");
  title.replaceChildren(fragment);
  letters[0]?.before(cursor);
  gsap.set(title, { visibility: "visible" });

  // Titoli lunghi scrivono più in fretta: la durata totale resta sotto TYPE_TOTAL.
  const speed = Math.min(TYPE_SPEED, TYPE_TOTAL / Math.max(letters.length, 1));
  letters.forEach((letter, i) => {
    const previous = letters[i - 1]?.textContent ?? "";
    const gap = i === 0 ? 0 : /[,.]/.test(previous) ? TYPE_PAUSE : speed;
    timeline.call(
      () => {
        letter.style.visibility = "visible";
        letter.after(cursor);
      },
      [],
      `+=${gap}`,
    );
  });
  // A fine scrittura il cursore lampeggia qualche volta, poi sparisce.
  timeline.addLabel("typed");
  timeline.call(() => cursor.classList.remove("is-typing"));
  timeline.to(cursor, { autoAlpha: 0, duration: 0.4, delay: 3 }, ">");

  return () => {
    title.replaceChildren(...original);
    title.removeAttribute("aria-label");
  };
}

"use client";

import { useEffect, useRef } from "react";

// Campo dietro la hero, ispirato alla struttura della hero di antigravity.google
// ma scritto da zero e nei colori del sito:
// - una griglia irregolare di puntini tenui su tutta la superficie;
// - dove la griglia attraversa un grande anello, i puntini diventano trattini
//   orientati verso il centro, più lunghi e più scuri al centro dell'anello;
// - il centro dell'anello segue il cursore con ritardo, l'anello respira piano.
// Monocromatico: colore delle linee per i puntini, testo secondario per i trattini.
//
// Costo: 2D su <canvas>, segni disegnati in poche passate raggruppate.
// Si ferma fuori schermo o con la scheda nascosta; con "riduci animazioni"
// viene disegnato una volta sola, fermo.

const SPACING = 26; // distanza media tra i segni, in pixel CSS
const SPACING_TOUCH = 34;
const RING = 0.42; // raggio dell'anello, in proporzione al lato corto
const RING_WIDTH = 0.16; // spessore dell'anello, stessa proporzione
const FOLLOW = 0.035; // quanto velocemente il centro insegue il cursore

type Mark = { x: number; y: number; phase: number };

export function HeroField() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = canvas.current;
    const ctx = el?.getContext("2d");
    if (!el || !ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const touch = window.matchMedia("(pointer: coarse)").matches;
    const styles = getComputedStyle(document.documentElement);
    const light = styles.getPropertyValue("--line").trim() || "#d9d5cd";
    const dark = styles.getPropertyValue("--ink-muted").trim() || "#5e5b55";

    let marks: Mark[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let running = false;
    // Centro dell'anello: dove vuole andare (cursore o centro) e dove si trova.
    const target = { x: 0, y: 0, pointer: false };
    const center = { x: 0, y: 0 };

    function home() {
      // Senza cursore l'anello sta un po' sotto il centro, dietro il titolo.
      return { x: width * 0.5, y: height * 0.55 };
    }

    function layout() {
      const rect = el!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      el!.width = Math.round(width * dpr);
      el!.height = Math.round(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const step = touch ? SPACING_TOUCH : SPACING;
      marks = [];
      for (let y = step / 2; y < height; y += step) {
        for (let x = step / 2; x < width; x += step) {
          marks.push({
            x: x + (Math.random() - 0.5) * step * 0.7,
            y: y + (Math.random() - 0.5) * step * 0.7,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
      if (!target.pointer) {
        const h = home();
        target.x = center.x = h.x;
        target.y = center.y = h.y;
      }
    }

    function draw(time: number) {
      const t = time / 1000;
      if (!target.pointer) {
        // Deriva lenta attorno alla posizione di riposo.
        const h = home();
        target.x = h.x + Math.sin(t * 0.21) * width * 0.04;
        target.y = h.y + Math.cos(t * 0.17) * height * 0.04;
      }
      center.x += (target.x - center.x) * FOLLOW;
      center.y += (target.y - center.y) * FOLLOW;

      const side = Math.min(width, height * 1.6);
      const radius = side * RING * (1 + Math.sin(t * 0.5) * 0.04);
      const band = side * RING_WIDTH;

      ctx!.clearRect(0, 0, width, height);
      // Gruppi per intensità: un solo stroke per gruppo invece che per segno.
      const dots = new Path2D();
      const strokes = [new Path2D(), new Path2D(), new Path2D()];

      for (const m of marks) {
        const wobble = Math.sin(t * 0.8 + m.phase);
        const dx = m.x - center.x;
        const dy = m.y - center.y;
        const dist = Math.hypot(dx, dy) || 1;
        // Quanto il segno sta dentro l'anello: 1 al centro della fascia, 0 fuori.
        const k = Math.exp(-(((dist - radius) / band) ** 2) * 2.2);

        if (k < 0.08) {
          dots.rect(m.x + wobble * 0.6, m.y, 1, 1);
          continue;
        }
        // Nell'anello i segni si allungano verso il centro e si spostano appena.
        const ux = dx / dist;
        const uy = dy / dist;
        const shift = (k * 6 + wobble * 2) * k;
        const x = m.x + ux * shift;
        const y = m.y + uy * shift;
        const half = (1.5 + k * 4.5) / 2;
        const group = k > 0.7 ? 2 : k > 0.35 ? 1 : 0;
        strokes[group].moveTo(x - ux * half, y - uy * half);
        strokes[group].lineTo(x + ux * half, y + uy * half);
      }

      ctx!.globalAlpha = 1;
      ctx!.fillStyle = light;
      ctx!.fill(dots);
      ctx!.lineCap = "round";
      ctx!.lineWidth = 1.6;
      const passes: [string, number][] = [
        [light, 1],
        [dark, 0.35],
        [dark, 0.6],
      ];
      passes.forEach(([color, alpha], i) => {
        ctx!.strokeStyle = color;
        ctx!.globalAlpha = alpha;
        ctx!.stroke(strokes[i]);
      });
      ctx!.globalAlpha = 1;

      if (running) frame = requestAnimationFrame(draw);
    }

    function start() {
      if (running || reduced) return;
      running = true;
      frame = requestAnimationFrame(draw);
    }

    function stop() {
      running = false;
      cancelAnimationFrame(frame);
    }

    function onPointerMove(event: PointerEvent) {
      if (event.pointerType === "touch") return;
      const rect = el!.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      target.pointer = y >= 0 && y <= rect.height;
      if (target.pointer) {
        target.x = x;
        target.y = y;
      }
    }

    function onLeave() {
      target.pointer = false;
    }

    layout();
    draw(performance.now());

    const resize = new ResizeObserver(() => {
      layout();
      if (!running) draw(performance.now());
    });
    resize.observe(el);

    const visible = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !document.hidden) start();
      else stop();
    });
    visible.observe(el);

    function onVisibility() {
      if (document.hidden) stop();
      else if (el!.getBoundingClientRect().bottom > 0) start();
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      resize.disconnect();
      visible.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvas}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 size-full"
    />
  );
}

"use client";

import { useEffect, useRef } from "react";

// Campo di trattini dietro la hero: una griglia leggermente irregolare di segni
// corti che oscillano piano, orientati da un flusso che cambia nel tempo. Vicino
// al cursore i segni si scostano, si scuriscono e ruotano attorno al puntatore.
// Monocromatico, nei colori delle linee e del testo secondario.
//
// Costo: 2D su <canvas>, poche centinaia di segni disegnati in tre passate.
// Si ferma quando la hero esce dallo schermo o la scheda è nascosta; con
// "riduci animazioni" viene disegnato una volta sola, fermo.

const SPACING = 34; // distanza media tra i segni, in pixel CSS
const SPACING_TOUCH = 46;
const RADIUS = 160; // raggio d'influenza del cursore
const PUSH = 18; // spostamento massimo vicino al cursore

type Mark = { x: number; y: number; phase: number; len: number };

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
    // Cursore: posizione inseguita con un ritardo, e quanto conta (0 = assente).
    const target = { x: 0, y: 0, on: 0 };
    const pointer = { x: 0, y: 0, on: 0 };

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
            x: x + (Math.random() - 0.5) * step * 0.6,
            y: y + (Math.random() - 0.5) * step * 0.6,
            phase: Math.random() * Math.PI * 2,
            len: 3 + Math.random() * 4,
          });
        }
      }
    }

    function draw(time: number) {
      const t = time / 1000;
      pointer.x += (target.x - pointer.x) * 0.08;
      pointer.y += (target.y - pointer.y) * 0.08;
      pointer.on += (target.on - pointer.on) * 0.05;

      ctx!.clearRect(0, 0, width, height);
      // Tre gruppi per intensità: un beginPath per gruppo invece che per segno.
      const groups: Path2D[] = [new Path2D(), new Path2D(), new Path2D()];

      for (const m of marks) {
        // Flusso lento: l'angolo dipende dalla posizione e dal tempo.
        let angle =
          Math.sin(m.x * 0.004 + t * 0.25) + Math.cos(m.y * 0.005 - t * 0.2);
        // Respiro: piccola oscillazione attorno alla posizione di partenza.
        let x = m.x + Math.sin(t * 0.6 + m.phase) * 1.5;
        let y = m.y + Math.cos(t * 0.5 + m.phase) * 1.5;
        let level = 0;

        if (pointer.on > 0.01) {
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (dist < RADIUS && dist > 0.001) {
            const f = (1 - dist / RADIUS) ** 2 * pointer.on;
            x += (dx / dist) * PUSH * f;
            y += (dy / dist) * PUSH * f;
            // Vicino al cursore i segni girano attorno al puntatore.
            const tangent = Math.atan2(dy, dx) + Math.PI / 2;
            angle = angle * (1 - f) + tangent * f;
            level = f > 0.45 ? 2 : f > 0.1 ? 1 : 0;
          }
        }

        const half = m.len / 2;
        const cx = Math.cos(angle) * half;
        const cy = Math.sin(angle) * half;
        groups[level].moveTo(x - cx, y - cy);
        groups[level].lineTo(x + cx, y + cy);
      }

      ctx!.lineCap = "round";
      ctx!.lineWidth = 1.25;
      const passes: [string, number][] = [
        [light, 1],
        [dark, 0.45],
        [dark, 0.9],
      ];
      passes.forEach(([color, alpha], i) => {
        ctx!.strokeStyle = color;
        ctx!.globalAlpha = alpha;
        ctx!.stroke(groups[i]);
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
      target.x = event.clientX - rect.left;
      target.y = event.clientY - rect.top;
      const inside = target.y >= 0 && target.y <= rect.height && target.x >= 0;
      if (inside && pointer.on < 0.01) {
        // Primo ingresso: parte dal punto giusto invece di scivolare da (0, 0).
        pointer.x = target.x;
        pointer.y = target.y;
      }
      target.on = inside ? 1 : 0;
    }

    function onLeave() {
      target.on = 0;
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

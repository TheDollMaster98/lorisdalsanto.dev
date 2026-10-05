"use client";

import { useSyncExternalStore } from "react";
import {
  setMotionEnabled,
  subscribeMotion,
  systemReducesMotion,
  useMotionEnabled,
} from "@/lib/motion/preference";

// Interruttore "animazioni sì/no" nell'header: mostra il sito con o senza GSAP,
// il campo di segni e le transizioni della galleria. Se il sistema chiede di
// ridurre le animazioni resta spento e non si può attivare.
export function MotionToggle({ label }: { label: string }) {
  const enabled = useMotionEnabled();
  const locked = useSyncExternalStore(
    subscribeMotion,
    systemReducesMotion,
    () => false,
  );

  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      aria-label={label}
      title={label}
      disabled={locked}
      onClick={() => setMotionEnabled(!enabled)}
      className="group flex items-center gap-2 font-mono text-xs uppercase transition-colors hover:text-ink disabled:opacity-40"
    >
      <span className="hidden lg:inline">{label}</span>
      {/* Lo stato visivo segue aria-checked; la classe no-motion su <html>
          (messa dallo script di avvio) lo corregge prima che React sia pronto. */}
      <span
        aria-hidden
        className="relative h-4 w-7 rounded-full border border-line bg-paper transition-colors group-aria-checked:border-ink group-aria-checked:bg-ink in-[.no-motion]:border-line! in-[.no-motion]:bg-paper!"
      >
        <span className="absolute top-0.5 left-0.5 size-2.5 rounded-full bg-ink-muted transition-[left,background-color] duration-200 group-aria-checked:left-3.5 group-aria-checked:bg-paper in-[.no-motion]:left-0.5! in-[.no-motion]:bg-ink-muted!" />
      </span>
    </button>
  );
}

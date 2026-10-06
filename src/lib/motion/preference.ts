import { useSyncExternalStore } from "react";
import { MOTION_KEY as KEY, MOTION_TOGGLE } from "./boot";

// Preferenza "animazioni sì/no", scelta dall'interruttore nell'header e ricordata
// nel browser (localStorage). Le animazioni sono spente anche quando il sistema
// chiede di ridurle: in quel caso l'interruttore non può riaccenderle.
//
// Lo script inline del layout (boot.ts) legge la stessa chiave prima di React.

const EVENT = "motionchange";
const REDUCED = "(prefers-reduced-motion: reduce)";

export function systemReducesMotion() {
  return window.matchMedia(REDUCED).matches;
}

function userDisabled() {
  if (!MOTION_TOGGLE) return false;
  try {
    return localStorage.getItem(KEY) === "off";
  } catch {
    return false;
  }
}

export function motionEnabled() {
  return !systemReducesMotion() && !userDisabled();
}

export function setMotionEnabled(enabled: boolean) {
  try {
    if (enabled) localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, "off");
  } catch {
    // Storage non disponibile (navigazione privata): vale solo per questa pagina.
  }
  document.documentElement.classList.toggle("no-motion", !enabled);
  window.dispatchEvent(new Event(EVENT));
}

export function subscribeMotion(onChange: () => void) {
  const media = window.matchMedia(REDUCED);
  window.addEventListener(EVENT, onChange);
  window.addEventListener("storage", onChange);
  media.addEventListener("change", onChange);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener("storage", onChange);
    media.removeEventListener("change", onChange);
  };
}

// Lato server (build statico) le animazioni risultano accese: il valore vero
// arriva al primo render nel browser.
export function useMotionEnabled() {
  return useSyncExternalStore(subscribeMotion, motionEnabled, () => true);
}

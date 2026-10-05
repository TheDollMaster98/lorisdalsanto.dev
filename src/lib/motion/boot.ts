// Chiave della preferenza "animazioni sì/no" e script che la legge prima di React.
// File separato da preference.ts: il layout (Server Component) importa solo questo.

export const MOTION_KEY = "motion";

// Gira in <head> prima di React: se le animazioni sono spente mette la classe
// "no-motion" su <html>, così al caricamento non si vede nemmeno un frame animato.
export const motionBootScript = `try{if(localStorage.getItem(${JSON.stringify(MOTION_KEY)})==="off")document.documentElement.classList.add("no-motion")}catch(e){}`;

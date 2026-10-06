// Indirizzo pubblico del sito, senza slash finale. Nel deploy su GitHub Pages lo imposta il
// workflow dal dominio configurato nelle impostazioni di Pages; questo è il valore di riserva.
// Sempre https: Pages restituisce http finché "Enforce HTTPS" non è attivo.
export const siteUrl = (process.env.SITE_URL ?? "https://lorisdalsanto.it")
  .replace(/\/$/, "")
  .replace(/^http:\/\//, "https://");

export function absoluteUrl(path: string): string {
  return `${siteUrl}/${path.replace(/^\//, "")}`;
}

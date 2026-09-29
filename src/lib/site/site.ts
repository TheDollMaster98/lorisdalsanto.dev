// Indirizzo pubblico del sito, senza slash finale. Nel deploy su GitHub Pages lo imposta il
// workflow (es. https://thedollmaster98.github.io/lorisdalsanto.dev); con un dominio proprio
// basta cambiare questo valore di default o la variabile SITE_URL.
export const siteUrl = (
  process.env.SITE_URL ?? "https://lorisdalsanto.dev"
).replace(/\/$/, "");

export function absoluteUrl(path: string): string {
  return `${siteUrl}/${path.replace(/^\//, "")}`;
}

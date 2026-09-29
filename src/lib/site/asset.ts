// Percorso di un file in public/ con la sottocartella di GitHub Pages davanti.
// Da usare solo in codice eseguito in build (server component): il valore viene letto lì.
export function asset(path: string): string {
  return `${process.env.PAGES_BASE_PATH ?? ""}/${path.replace(/^\//, "")}`;
}

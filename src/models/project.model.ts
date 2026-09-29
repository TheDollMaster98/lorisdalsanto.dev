export type ProjectImage = {
  // Nome del file dentro public/assets/img/projects/<slug>/, es. "01.jpg".
  file: string;
  alt: string;
  caption?: string;
  // Dimensioni reali: servono solo a riservare lo spazio prima del caricamento.
  width?: number;
  height?: number;
};

export type Project = {
  title: string;
  year: string;
  context: string;
  role: string;
  summary: string;
  stack: string[];
  href?: string;
  // Link esterni mostrati sotto la riga (articoli, post). Solo per progetti senza
  // href né galleria: dentro un link o un pulsante non si possono annidare link.
  links?: { label: string; href: string }[];
  // Con slug e immagini, cliccando il progetto si apre la galleria.
  slug?: string;
  images?: ProjectImage[];
};

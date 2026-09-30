import type { Link } from "./profile.model";

// Una voce del CV: esperienza, progetto, studio o corso.
export type CvEntry = {
  period: string;
  title: string;
  org: string;
  // Righe puntate: cosa hai fatto e con che risultato.
  points?: string[];
  stack?: string;
  links?: Link[];
};

// Tutti i testi del CV per una lingua. Solo dati serializzabili (niente JSX né funzioni):
// in futuro possono arrivare da un database o da un pannello con login, senza cambiare la pagina.
export type Cv = {
  meta: { title: string; description: string };
  labels: {
    profile: string;
    experience: string;
    projects: string;
    education: string;
    traits: string;
    skills: string;
    languages: string;
    print: string;
    updated: string;
  };
  headline: string;
  location: string;
  updated: string;
  profile: string;
  experience: CvEntry[];
  projects: CvEntry[];
  education: CvEntry[];
  // Caratteristiche personali (personalità, interessi).
  traits: { label: string; text: string }[];
  skills: { area: string; items: string }[];
  languages: { name: string; level: string }[];
  consent: string;
};

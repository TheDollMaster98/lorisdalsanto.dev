import type { Entry } from "./entry.model";
import type { Project } from "./project.model";
import type { Skill } from "./skill.model";

// Testi di una lingua: ogni file in content/ deve rispettare questa forma.
export type Content = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    work: string;
    about: string;
    stack: string;
    contact: string;
    cv: string;
    motion: string;
  };
  hero: {
    role: string;
    location: string;
    availability: string;
    statement: string;
    cta: {
      contact: string;
      cv: string;
    };
  };
  intro: {
    label: string;
    text: string;
    // Nota breve sull'uso di strumenti AI, mostrata sotto il paragrafo.
    ai: string;
  };
  work: {
    label: string;
    projects: Project[];
    gallery: {
      open: string;
      close: string;
      title: string;
      visit: string;
      next: string;
      previous: string;
    };
  };
  about: {
    label: string;
    experienceLabel: string;
    experience: Entry[];
    educationLabel: string;
    education: Entry[];
  };
  stack: {
    label: string;
    skills: Skill[];
  };
  contact: {
    label: string;
    intro: string;
    // Email precompilata aperta da "Scrivimi" e dall'indirizzo nei contatti.
    mail: {
      subject: string;
      body: string;
    };
  };
  footer: {
    backToTop: string;
    privacy: string;
  };
  privacy: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    updated: string;
    // "{email}" nel testo diventa un link all'indirizzo email.
    sections: {
      heading: string;
      body: string;
      link?: { label: string; href: string };
    }[];
    back: string;
  };
};

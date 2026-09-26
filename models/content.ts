import type { Entry } from "./entry";
import type { Project } from "./project";
import type { Skill } from "./skill";

// Testi di una lingua: ogni file in content/ deve rispettare questa forma.
export type Content = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    work: string;
    about: string;
    contact: string;
  };
  hero: {
    role: string;
    location: string;
    availability: string;
    statement: string;
  };
  work: {
    label: string;
    projects: Project[];
  };
  about: {
    label: string;
    text: string;
    experienceLabel: string;
    experience: Entry[];
    educationLabel: string;
    education: Entry[];
    skillsLabel: string;
    skills: Skill[];
  };
  contact: {
    label: string;
    intro: string;
  };
  footer: {
    backToTop: string;
  };
};

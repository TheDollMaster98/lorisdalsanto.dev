import type { Content } from "@/models/content";

export const en: Content = {
  meta: {
    title: "Loris Dal Santo — Front-End & Mobile Developer",
    description:
      "Front-end and mobile developer in Milan. Interfaces for enterprise products in Angular, Next.js and Flutter.",
  },
  nav: {
    work: "Work",
    about: "About",
    contact: "Contact",
  },
  hero: {
    role: "Front-End & Mobile Developer",
    location: "Milan, Italy",
    availability: "Open to new opportunities",
    statement:
      "I design and build interfaces for enterprise products, from the architecture down to the last component.",
  },
  work: {
    label: "Work",
    projects: [
      {
        title: "Internal AI portal",
        year: "2025",
        context: "EY · AI & Data",
        role: "Front-end technical owner",
        summary:
          "Internal portal for the AI & Data division. I defined the architecture and project setup, built the UX/UI and a reusable component library, handled authentication and back-end integration, and presented demos and architectural decisions directly to the Partners.",
        stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "shadcn/ui", "NestJS"],
      },
      {
        title: "Document editor",
        year: "2025",
        context: "EY · real estate",
        role: "Sole front-end developer",
        summary:
          "Rich text editor for filling in and generating structured .docx documents. I owned the architecture, the UX/UI design and the whole front-end technical backlog.",
        stack: ["Angular 16", "TinyMCE", "Material Design", "Bootstrap 5"],
      },
      {
        title: "UC Hedge",
        year: "2022 — 2024",
        context: "UniCredit · via Be | Shaping the Future",
        role: "Front-end developer",
        summary:
          "End-to-end platform for managing corporate FX risk, recognised at the Euromoney Awards 2023. Front-end components, UX/UI fixes and unit tests in a team spread across Italy, Germany and Romania.",
        stack: ["Angular", "RxJS", "Bootstrap 5", "Karma", "Jasmine"],
      },
      {
        title: "Findora",
        year: "2024 — 2025",
        context: "Fintech startup",
        role: "Flutter mobile & front-end developer",
        summary:
          "Cross-platform mobile app in FlutterFlow and Flutter with Firebase authentication and database, a React landing page and an Angular back-office portal. Open beta with over 100 testers, whose feedback drove the UI and UX iterations.",
        stack: ["Flutter 3.20", "FlutterFlow", "Riverpod", "Firebase", "React 18", "Angular 20"],
        href: "https://findora.it",
      },
      {
        title: "Fam Fanta",
        year: "2026",
        context: "Personal project",
        role: "Design & development",
        summary:
          "Fantasy league for competitive League of Legends: private leagues, auctions, roles and scores imported from Leaguepedia.",
        stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Firebase", "Leaguepedia API"],
        href: "https://fam-fanta-app-be--fam-fanta-app.europe-west4.hosted.app/",
      },
    ],
  },
  about: {
    label: "About",
    text: "For four years I have been building front-ends where mistakes are expensive: banking platforms for UniCredit, internal portals for EY AI & Data, a fintech app in Flutter. At EY I now own the front-end end to end: I choose the architecture, build the components, write the documentation and demo the work to the Partners. I work with Angular, Next.js and Flutter, with a focus on accessibility, testing and code that is still readable a year later.",
    experienceLabel: "Experience",
    experience: [
      {
        period: "2025 — now",
        company: "EY · AI & Data",
        role: "Senior I — Front-End Developer",
      },
      {
        period: "2024 — 2025",
        company: "Findora · startup",
        role: "Flutter Mobile & Front-End Developer",
      },
      {
        period: "2023 — 2025",
        company: "Be | Shaping the Future",
        role: "Junior Specialist · UniCredit consultant",
      },
      { period: "2022", company: "Be | Shaping the Future", role: "Junior Developer · internship" },
    ],
    educationLabel: "Education",
    education: [
      {
        period: "2020 — ongoing",
        company: "University of Milan",
        role: "Computer Science for Digital Communication",
      },
    ],
    skillsLabel: "Tools",
    skills: [
      { area: "Web", items: "Angular 13–20, Next.js, React, TypeScript, RxJS, NgRx, Signals" },
      { area: "Mobile", items: "Flutter 3, FlutterFlow, Riverpod, Firebase" },
      { area: "UI", items: "Tailwind CSS, Material Design, Bootstrap, shadcn/ui, WCAG" },
      { area: "Quality", items: "Karma, Jasmine, unit testing, code review" },
      { area: "Delivery", items: "Jenkins, Docker, Azure, NestJS, Jira, Agile/Scrum" },
    ],
  },
  contact: {
    label: "Contact",
    intro: "Have a project or an open role? Get in touch.",
  },
  footer: {
    backToTop: "Back to top ↑",
  },
};

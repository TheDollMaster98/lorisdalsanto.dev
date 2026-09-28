import type { Content } from "@/models/content.model";

export const en: Content = {
  meta: {
    title: "Loris Dal Santo — Front-End & Mobile Developer",
    description:
      "Front-end and mobile developer in Milan. Interfaces for enterprise products in Angular, Next.js and Flutter.",
  },
  nav: {
    work: "Work",
    about: "Background",
    stack: "Tech stack",
    contact: "Contact",
  },
  hero: {
    role: "Front-End & Mobile Developer",
    location: "Milan, Italy",
    availability: "Open to new opportunities",
    statement:
      "I design and build web and mobile interfaces for large companies and small businesses, from the architecture to going live.",
  },
  intro: {
    label: "Introduction",
    text: "Front-end and mobile developer with four years of experience, mostly in banking and enterprise: projects for UniCredit Europe as a consultant, internal portals for EY AI & Data Italy, a fintech mobile app in Flutter and full-stack work in startups. At EY I now own the front-end of two internal projects: architecture, components, documentation, release and demos to the Partners. I work with Angular, Next.js and Flutter, with a focus on accessibility, testing and code that is still readable a year later.",
    ai: "I use AI tools in my daily work, always under my direct supervision: ideas, code review, testing and debugging stay in my hands.",
  },
  work: {
    label: "Work",
    projects: [
      {
        title: "AI grants portal",
        year: "2025",
        context: "EY · AI & Data",
        role: "Front-end owner",
        summary:
          "AI analysis of regional grants for about 20 users: proposals, solutions and a graph of relations between grants, replacing a manual review, with KPI dashboards. Built from scratch, with a library of 20+ reusable components and a NestJS back-end integration.",
        stack: [
          "Next.js 15",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
          "NestJS",
        ],
      },
      {
        title: "Real estate platform",
        year: "2025",
        context: "EY · real estate",
        role: "Sole front-end developer",
        summary:
          "Real estate project management for about 15 users: tracking with KPI dashboards and a rich text editor that generates structured .docx documents. Forked from the company intranet, reusing 10+ components, it replaced a manual review.",
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
        stack: [
          "Flutter 3.20",
          "FlutterFlow",
          "Riverpod",
          "Firebase",
          "React 18",
          "Angular 20",
        ],
        href: "https://findora.it",
      },
      {
        title: "Fam Fanta",
        year: "2026",
        context: "Personal project",
        role: "Design & development",
        summary:
          "Fantasy league for competitive League of Legends: private leagues, auctions, roles and scores imported from Leaguepedia.",
        stack: [
          "Next.js 16",
          "TypeScript",
          "Tailwind CSS",
          "Firebase",
          "Leaguepedia API",
        ],
        href: "https://fam-fanta-app-be--fam-fanta-app.europe-west4.hosted.app/",
      },
    ],
  },
  about: {
    label: "Background",
    experienceLabel: "Experience",
    experience: [
      {
        period: "2025 — now",
        company: "EY · AI & Data",
        role: "Associate (Senior I) — Front-End Developer",
        summary:
          "Sole front-end owner of two internal enterprise products, end to end: architecture, development, documentation and demos to the Partners.",
      },
      {
        period: "2024 — 2025",
        company: "Findora · fintech startup",
        role: "Flutter Mobile & Front-End Developer",
        summary:
          "Cross-platform Flutter and Firebase app, React landing page and Angular 20 back office. Open beta with over 100 testers.",
      },
      {
        period: "2023 — 2024",
        company: "Yggdrasill Project · startup",
        role: "Full-Stack Developer",
        summary:
          "Full-stack blog: Angular 14 with Firebase (auth, database, hosting) and an Express + MongoDB back end, modular architecture.",
      },
      {
        period: "2022 — 2025",
        company: "Be | Shaping the Future",
        role: "Junior Front-End Developer · UniCredit client",
        summary:
          "Long-running Angular (13–19) banking projects: test coverage +15%, +10% and +5%, CI/CD releases on Jenkins, team across IT/DE/RO.",
      },
    ],
    educationLabel: "Education",
    education: [
      {
        period: "2020 — ongoing",
        company: "University of Milan",
        role: "Computer Science for Digital Communication",
        summary:
          "Focus on mobile computing, digital media and user interfaces.",
      },
    ],
  },
  stack: {
    label: "Tech stack",
    skills: [
      {
        area: "Web",
        items: "Angular 13–20, Next.js, React, TypeScript, RxJS, NgRx, Signals",
      },
      { area: "Mobile", items: "Flutter 3, FlutterFlow, Riverpod" },
      {
        area: "Back-end",
        items:
          "NestJS, Node.js and Express (in a support role), Firebase (Auth, Firestore, Hosting), MongoDB and NoSQL databases",
      },
      {
        area: "UI",
        items: "Tailwind CSS, Material Design, Bootstrap, shadcn/ui, WCAG",
      },
      { area: "Quality", items: "Karma, Jasmine, unit testing, code review" },
      { area: "Delivery", items: "Jenkins, Docker, Azure, Jira, Agile/Scrum" },
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

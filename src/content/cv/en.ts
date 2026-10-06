import type { Cv } from "@/models/cv.model";

// CV in English: page /en/cv/. Faithful translation of the Italian CV.
// Edit here and the page updates itself.
export const cvEn: Cv = {
  meta: {
    title: "CV | Loris Dal Santo",
    description:
      "CV of Loris Dal Santo, Front-End Developer and Flutter Developer based in Milan.",
  },
  labels: {
    profile: "Profile",
    experience: "Work experience",
    projects: "Projects and collaborations",
    education: "Education and training",
    skills: "IT skills",
    languages: "Languages",
    traits: "About me",
    print: "Print or save as PDF",
    updated: "Updated",
  },
  headline: "Front-End & Flutter Mobile Developer",
  location: "Milan (IT)",
  updated: "September 2026",
  profile:
    "Front-End Developer with 4 years of experience in enterprise contexts (banking and consulting), specialised in Angular, React and Next.js with TypeScript, and Mobile Developer with Flutter and Dart. Technical ownership of Front-End products end to end, from architectural decisions to release, working directly with senior stakeholders (EY Partners, Product Owners and UniCredit multinational teams).",
  experience: [
    {
      period: "07/2025 - present",
      title: "Senior Consultant, Front-End Developer",
      org: "EY, AI & Data (AI Plus), Milan",
      points: [
        "Front-End technical owner of the AI portal for managing grants, proposals and the client portfolio (~20 users, replaced a manual review): Next.js 15 + TypeScript + TailwindCSS architecture, Microsoft Entra ID authentication, integration of 7 families of Back-End APIs (NestJS), Word-Agent for DOCX editing with version history. Library of 42 shared components across 202 TypeScript/TSX files.",
        "Multi-entity dashboard with real-time KPIs (grants, clients, projects, solutions) and graph visualisation of relations. Direct alignment with EY Partners on architectural choices.",
        "Sole Front-End developer of the enterprise platform automating M&A due diligence reports (~15 users, 5 DOCX types including PMR, TDD and TEDD): AI-assisted workflow with distinct roles (Master, Supervisor, Collaborator), assisted compilation, section approval and final document generation. 33 Angular components, KPI dashboard with geographic distribution and fee analytics.",
        "TinyMCE integration with two configured editors (compact and full-page): custom toolbar, image handling, field protection and section locking for concurrent editing.",
        "Migration of a legacy enterprise portal from Bootstrap 3 to Bootstrap 5 in vanilla HTML, CSS and JavaScript: refactoring, WCAG accessibility and responsiveness.",
      ],
    },
    {
      period: "07/2022 - 07/2025",
      title: "Junior Front-End Developer",
      org: "Be | Shaping the Future (Digitech Solution), UniCredit Europe client, Milan",
      points: [
        "Development, maintenance and refactoring of Angular (13–19) components across several long-term enterprise banking projects. Responsive design system (Bootstrap 5, Tailwind, Material Design) and state management (RxJS, NgRx, Signals).",
        "Unit and automated tests (Karma, Jasmine): +15%, +5% and +10% coverage on three projects, CI/CD builds and releases on Jenkins, WCAG accessibility.",
        "Agile/Scrum on Jira in distributed teams (Italy, Germany, Romania).",
      ],
    },
  ],
  projects: [
    {
      period: "02/04/2024 - 16/09/2025",
      title: "Flutter Mobile Developer & Front-End Developer",
      org: "Findora, startup, Milan",
      points: [
        "Development of a cross-platform mobile app in FlutterFlow and Flutter 3.20, with Riverpod state management and full Firebase integration (auth, database).",
        "Landing page in ReactTSX 18 + Tailwind 3, and back-office portal in Angular 20 + Material Design + Tailwind 3.",
      ],
    },
    {
      period: "Ongoing",
      title: "Flutter 3 Guide, Learning App",
      org: "Personal project",
      points: [
        "Educational mini-app in Flutter 3 with BLoC, Cubit, go_router and Firebase.",
        "Personal project to explore Flutter components, navigation and architecture.",
      ],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/TheDollMaster98/flutter_tutorial",
        },
      ],
    },
    {
      period: "08/07/2023 - 01/12/2024",
      title: "Full-Stack Developer",
      org: "Yggdrasill Project, startup",
      points: [
        "Full-stack blog built in Angular 14 with Firebase (auth, db, hosting) and Express + MongoDB on the back end. Focus on modular architecture, deployed on Firebase.",
      ],
    },
  ],
  education: [
    {
      period: "Ongoing",
      title: "Computer Science for Digital Communication",
      org: "University of Milan",
      points: [
        "Focus: Social and Mobile Computing.",
        "Projects: cooking platform (ReactJSX 18, TailwindCSS).",
      ],
    },
    {
      period: "November 2023 - January 2025",
      title: "Flutter course",
      org: "Fudeo",
      points: [
        "Flutter 3.20, Riverpod, BloC, Clean Architecture.",
        "Certifications: Dart Begin, Flutter Start.",
      ],
      links: [
        {
          label: "Dart Begin",
          href: "https://www.formazione.fudeo.it/certificate/431-u6NzGr",
        },
        {
          label: "Flutter Start",
          href: "https://www.formazione.fudeo.it/certificate/433-y6HfQs",
        },
      ],
    },
    {
      period: "28/03/2022 - 06/06/2022",
      title: "Junior Front-End Developer course",
      org: "Academy Software Inside SRL, hybrid",
      points: [
        "Intensive course with a final full-stack project in ReactJSX + ExpressJS.",
      ],
    },
  ],
  skills: [
    { area: "Languages", items: "JavaScript, TypeScript, Dart" },
    {
      area: "Front-End",
      items: "Angular (v13-19), React (v17-18), NextJS 15",
    },
    { area: "Mobile (growing)", items: "Flutter (v3.20), FlutterFlow" },
    {
      area: "State Management",
      items: "RxJS, NgRx, Signals, React Context, Riverpod, BloC & Cubit",
    },
    { area: "UI", items: "Bootstrap 5, Tailwind (v3-4), Material Design" },
    { area: "Back-End (basic)", items: "NestJS, Express.js, Firebase" },
    { area: "Testing & CI", items: "Karma, Jasmine, Vitest, Jenkins" },
    { area: "Tools", items: "Git, Azure DevOps, Jira" },
  ],
  languages: [
    { name: "Italian", level: "native" },
    { name: "English", level: "B2 (intermediate, written and spoken)" },
  ],
  traits: [
    {
      label: "Personality",
      text: "reflective (INTP-T), inclined to logical problem solving and continuous learning.",
    },
    {
      label: "Interests",
      text: "technology, science, geek culture, gaming, role-playing games (D&D), team games.",
    },
  ],
  consent:
    "I authorise the processing of my personal data under Italian Legislative Decree 101/2018 and Article 13 of the GDPR (EU Regulation 2016/679) for recruitment purposes.",
};

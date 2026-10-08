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
    download: "Download PDF",
    updated: "Updated",
  },
  headline: "Front-End & Flutter Mobile Developer",
  location: "Milan (IT)",
  updated: "October 2026",
  profile:
    "Front-End Developer with 4 years of experience in enterprise contexts (banking and consulting), specialised in Angular, React and Next.js with TypeScript, and Mobile Developer with Flutter and Dart. Technical ownership of internal EY Front-End products end to end, from architectural decisions to release, working directly with senior stakeholders (EY Partners, Product Owners and UniCredit multinational teams).",
  experience: [
    {
      period: "07/2025 - present",
      title: "Senior Associate, Front-End Developer",
      org: "EY, AI & Data (AI Plus), Milan",
      points: [
        "Sole Front-End owner of two internal enterprise products, with end-to-end ownership: architectural choices, development, documentation and demos to EY Partners.",
        "AI portal for analysing regional funding calls (~20 users): built with Next.js 16 in TypeScript and TailwindCSS. Replaced a manual review process with AI-assisted generation of proposals, solutions and a graph of relations between sections, with a KPI dashboard. Built a library of 20+ reusable components (shadcn/ui). NestJS Back-End integration.",
        "Real estate project management platform (~15 users): tracking with a KPI dashboard and a rich-text document editor (TinyMCE in Angular 16) that generates structured .docx documents. Built as a fork of the internal intranet, reusing 30+ components of the existing platform, it replaced a manual review process.",
        "Migration of a legacy portal from Bootstrap 3 to Bootstrap 5 (WCAG accessibility, responsiveness).",
      ],
    },
    {
      period: "07/2022 - 07/2025",
      title: "Junior Front-End Developer",
      org: "Be | Shaping the Future (Digitech Solution), UniCredit Europe client, Milan",
      points: [
        "Development, maintenance and refactoring of Angular (13-19) components across several long-term enterprise banking projects. Responsive design system (Bootstrap 5, Tailwind, Material Design) and state management (RxJS, NgRx, Signals).",
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

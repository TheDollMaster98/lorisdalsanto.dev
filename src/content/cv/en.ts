import type { Cv } from "@/models/cv.model";

// CV in English: page /en/cv/. Edit here and the page updates itself.
export const cvEn: Cv = {
  meta: {
    title: "CV | Loris Dal Santo",
    description:
      "CV of Loris Dal Santo, full-stack JavaScript and Flutter mobile developer based in Milan.",
  },
  labels: {
    profile: "Profile",
    experience: "Experience",
    projects: "Personal projects",
    education: "Education",
    courses: "Courses and certifications",
    skills: "Skills",
    languages: "Languages",
    print: "Print or save as PDF",
    updated: "Updated",
  },
  headline: "Full-Stack JavaScript & Flutter Mobile Developer",
  location: "Milan, Italy",
  updated: "September 2026",
  profile:
    "Full-stack JavaScript and Flutter mobile developer with four years of experience on complex enterprise projects (banking, AI & Data) and in startups. At EY I own the front-end of strategic internal portals end to end, from architecture to demos. I work with Angular, Next.js, React and Flutter, with a focus on UX, accessibility (WCAG) and code quality. I use AI tools for code review, bug hunting and refactoring, always under my direct supervision.",
  experience: [
    {
      period: "07/2025 - now",
      title: "Associate (Senior I), Front-End Developer",
      org: "EY AI & Data, Milan",
      points: [
        "Front-end owner of an internal AI portal: architecture, setup and UI development in Next.js, TypeScript and Tailwind CSS, with reusable components built on shadcn/ui.",
        "Authentication and integration with the NestJS back-end services.",
        "Front-end technical documentation and demos to business and technical stakeholders.",
        "Migration of a legacy portal: UI refactoring from Bootstrap 3 to 5, accessibility and responsiveness.",
      ],
      stack:
        "Next.js, TypeScript, Tailwind CSS, shadcn/ui, NestJS, Bootstrap 5",
    },
    {
      period: "04/2024 - 09/2025",
      title: "Flutter Mobile & Front-End Developer",
      org: "Findora, fintech startup",
      points: [
        "Cross-platform mobile app in FlutterFlow and Flutter 3.20, with Riverpod state management and Firebase integration (authentication, database).",
        "Landing page in React 18 and Tailwind CSS, back-office portal in Angular 20 with Material Design.",
        "Open beta with over 100 testers, whose feedback drove the UI and UX iterations.",
      ],
      stack: "Flutter, FlutterFlow, Riverpod, Firebase, React, Angular 20",
    },
    {
      period: "07/2022 - 07/2025",
      title: "Front-End Developer",
      org: "Be | Shaping the Future, UniCredit Europe client, Milan",
      points: [
        "Development and maintenance of enterprise portals in Angular 13–19, with modular and accessible UIs (WCAG), across four UniCredit projects.",
        "UC Hedge, a platform for managing corporate FX risk, cited by Euromoney when naming UniCredit Best FX Bank for Service and Support 2023.",
        "Angular 19 and Signals screens inside the internal mobile app (WebView), the internal tools portal and features for the internal ticketing app.",
        "Front-end test coverage up by 15%, 10% and 5% on three projects; CI/CD on Jenkins; Agile team across Italy, Germany and Romania.",
      ],
      stack: "Angular, RxJS, NgRx, Signals, Karma, Jasmine, Jenkins",
    },
    {
      period: "07/2023 - 12/2024",
      title: "Full-Stack Developer",
      org: "Yggdrasill Project, startup",
      points: [
        "Full-stack blog in Angular 14 with Firebase (authentication, database, hosting) and an Express and MongoDB back end, with a modular architecture.",
      ],
      stack: "Angular, Firebase, Express, MongoDB",
    },
  ],
  projects: [
    {
      period: "2026",
      title: "Fam Fanta",
      org: "Personal project",
      points: [
        "Fantasy league for competitive League of Legends, built to play with my friends: private leagues, live auctions, roles and scores imported from Leaguepedia.",
      ],
      stack: "Next.js, TypeScript, Tailwind CSS, Firebase",
    },
    {
      period: "Ongoing",
      title: "Flutter guide",
      org: "Personal project",
      points: [
        "Learning app to explore components, navigation and architecture in Flutter.",
      ],
      stack: "Flutter 3, BLoC, Cubit, go_router, Firebase",
      links: [
        {
          label: "github.com/TheDollMaster98/flutter_tutorial",
          href: "https://github.com/TheDollMaster98/flutter_tutorial",
        },
      ],
    },
  ],
  education: [
    {
      period: "Ongoing",
      title: "Computer Science for Digital Communication",
      org: "University of Milan",
      points: ["Focus on social and mobile computing."],
    },
  ],
  courses: [
    {
      period: "11/2023 - 01/2025",
      title: "Flutter course",
      org: "Fudeo",
      points: [
        "Flutter 3.20, Riverpod, BLoC and Clean Architecture. Dart Begin and Flutter Start certifications.",
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
      period: "03/2022 - 06/2022",
      title: "Junior Front-End Developer",
      org: "Academy Software Inside",
      points: [
        "Intensive course with a final full-stack project in React and Express.",
      ],
      stack: "React 17, Express, Bootstrap 5, Git",
    },
  ],
  skills: [
    {
      area: "Front end",
      items: "Angular 13–20, Next.js, React, TypeScript",
    },
    {
      area: "State",
      items: "RxJS, NgRx, Signals, React Context, Riverpod, BLoC and Cubit",
    },
    { area: "Mobile", items: "Flutter 3, FlutterFlow" },
    {
      area: "UI",
      items: "Tailwind CSS, Material Design, Bootstrap 5, shadcn/ui, WCAG",
    },
    {
      area: "Back end",
      items: "NestJS, Node.js and Express, Firebase, MongoDB",
    },
    {
      area: "Tools",
      items: "Git, Azure DevOps, Jenkins, Jira, Karma and Jasmine",
    },
  ],
  languages: [
    { name: "Italian", level: "Native" },
    { name: "English", level: "B2, written and spoken" },
  ],
  consent:
    "I authorise the processing of my personal data under Italian Legislative Decree 101/2018 and Article 13 of the GDPR (EU Regulation 2016/679) for recruitment purposes.",
};

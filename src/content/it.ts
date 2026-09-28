import type { Content } from "@/models/content.model";

export const it: Content = {
  meta: {
    title: "Loris Dal Santo — Front-End & Mobile Developer",
    description:
      "Front-end e mobile developer a Milano. Interfacce per prodotti enterprise in Angular, Next.js e Flutter.",
  },
  nav: {
    work: "Lavori",
    about: "Percorso",
    stack: "Tecnologie",
    contact: "Contatti",
  },
  hero: {
    role: "Front-End & Mobile Developer",
    location: "Milano",
    availability: "Aperto a nuove opportunità",
    statement:
      "Progetto e sviluppo interfacce web e mobile per grandi aziende e piccole imprese, dall’architettura alla messa online.",
  },
  intro: {
    label: "Presentazione",
    text: "Da quattro anni sviluppo front-end su progetti dove un errore costa caro: piattaforme bancarie per UniCredit, portali interni per EY AI & Data, un’app fintech in Flutter. Oggi in EY seguo il front-end in autonomia: scelgo l’architettura, costruisco i componenti, scrivo la documentazione e presento le demo ai Partner. Lavoro con Angular, Next.js e Flutter, con attenzione ad accessibilità, test e a un codice che resti leggibile anche dopo un anno.",
  },
  work: {
    label: "Lavori",
    projects: [
      {
        title: "Portale IA interno",
        year: "2025",
        context: "EY · AI & Data",
        role: "Front-end technical owner",
        summary:
          "Portale interno della divisione AI & Data. Ho definito architettura e setup, sviluppato UX/UI e componenti riutilizzabili, gestito autenticazione e integrazione con il back-end, e presentato demo e scelte architetturali direttamente ai Partner.",
        stack: [
          "Next.js 15",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
          "NestJS",
        ],
      },
      {
        title: "Editor documentale",
        year: "2025",
        context: "EY · settore immobiliare",
        role: "Unico sviluppatore front-end",
        summary:
          "Editor rich text per compilare e generare documenti .docx strutturati. Architettura, design UX/UI e backlog tecnico front-end interamente a mio carico.",
        stack: ["Angular 16", "TinyMCE", "Material Design", "Bootstrap 5"],
      },
      {
        title: "UC Hedge",
        year: "2022 — 2024",
        context: "UniCredit · via Be | Shaping the Future",
        role: "Front-end developer",
        summary:
          "Piattaforma per la gestione end-to-end del rischio di cambio delle aziende, premiata agli Euromoney Awards 2023. Componenti front-end, fix UX/UI e test unitari in un team distribuito tra Italia, Germania e Romania.",
        stack: ["Angular", "RxJS", "Bootstrap 5", "Karma", "Jasmine"],
      },
      {
        title: "Findora",
        year: "2024 — 2025",
        context: "Startup fintech",
        role: "Flutter mobile & front-end developer",
        summary:
          "App mobile cross-platform in FlutterFlow e Flutter con autenticazione e database su Firebase, landing page in React e portale gestionale in Angular. Open beta con oltre 100 tester, i cui feedback hanno guidato le iterazioni su UI e UX.",
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
        context: "Progetto personale",
        role: "Design & sviluppo",
        summary:
          "Fantasy league per il competitivo di League of Legends: leghe private, aste, ruoli e punteggi importati da Leaguepedia.",
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
    label: "Percorso",
    experienceLabel: "Esperienza",
    experience: [
      {
        period: "2025 — oggi",
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
        role: "Junior Specialist · consulente UniCredit",
      },
      {
        period: "2022",
        company: "Be | Shaping the Future",
        role: "Junior Developer · stage",
      },
    ],
    educationLabel: "Formazione",
    education: [
      {
        period: "2020 — in corso",
        company: "Università degli Studi di Milano",
        role: "Informatica per la comunicazione digitale",
      },
    ],
  },
  stack: {
    label: "Tecnologie",
    skills: [
      {
        area: "Web",
        items: "Angular 13–20, Next.js, React, TypeScript, RxJS, NgRx, Signals",
      },
      { area: "Mobile", items: "Flutter 3, FlutterFlow, Riverpod" },
      {
        area: "Back-end",
        items:
          "NestJS e Node.js (come supporto), Firebase (Auth, Firestore), database NoSQL",
      },
      {
        area: "UI",
        items: "Tailwind CSS, Material Design, Bootstrap, shadcn/ui, WCAG",
      },
      { area: "Qualità", items: "Karma, Jasmine, unit test, code review" },
      { area: "Delivery", items: "Jenkins, Docker, Azure, Jira, Agile/Scrum" },
    ],
  },
  contact: {
    label: "Contatti",
    intro: "Hai un progetto o una posizione aperta? Scrivimi.",
  },
  footer: {
    backToTop: "Torna su ↑",
  },
};

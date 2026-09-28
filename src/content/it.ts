import type { Content } from "@/models/content.model";

export const it: Content = {
  meta: {
    title: "Loris Dal Santo — Full-Stack JavaScript & Flutter Mobile Developer",
    description:
      "Sviluppatore full-stack JavaScript e mobile Flutter a Milano. Angular, Next.js, Node.js e Flutter per banche, enterprise e startup.",
  },
  nav: {
    work: "Lavori",
    about: "Percorso",
    stack: "Tecnologie",
    contact: "Contatti",
  },
  hero: {
    role: "Full-Stack JavaScript & Flutter Mobile Developer",
    location: "Milano",
    availability: "Aperto a nuove opportunità",
    statement:
      "Progetto e sviluppo interfacce web e mobile per grandi aziende e piccole imprese, dall’architettura alla messa online.",
  },
  intro: {
    label: "Presentazione",
    text: "Sviluppatore full-stack JavaScript e mobile Flutter con quattro anni di esperienza, soprattutto in ambito bancario ed enterprise: progetti per UniCredit Europa come consulente, portali interni per EY AI & Data Italia, un’app mobile fintech in Flutter e progetti in startup. Oggi in EY seguo il front-end di due progetti interni: architettura, componenti, documentazione, rilascio e demo ai Partner. Lavoro con Angular, Next.js, Node.js e Flutter, con attenzione all’accessibilità, ai test e a un codice che resti leggibile anche dopo un anno.",
    ai: "Nello sviluppo uso strumenti di intelligenza artificiale, sempre sotto la mia supervisione diretta. Dove un cliente o un progetto non ne prevede l’uso, lavoro senza, in piena autonomia.",
  },
  work: {
    label: "Lavori",
    projects: [
      {
        title: "Portale AI per i bandi",
        year: "2025",
        context: "EY · AI & Data",
        role: "Front-end owner",
        summary:
          "Analisi AI dei bandi regionali per circa 20 utenti: proposte, soluzioni e grafo delle relazioni tra bandi al posto di un controllo manuale, con dashboard di KPI. Impostato da zero, con una libreria di 20+ componenti riutilizzabili e integrazione con il back-end NestJS.",
        stack: [
          "Next.js 15",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
          "NestJS",
        ],
      },
      {
        title: "Piattaforma real estate",
        year: "2025",
        context: "EY · settore immobiliare",
        role: "Unico sviluppatore front-end",
        summary:
          "Gestione dei progetti immobiliari per circa 15 utenti: tracking con dashboard di KPI ed editor rich text che genera documenti .docx strutturati. Nata come fork dell’intranet interna, riusando 10+ componenti, ha sostituito un controllo manuale.",
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
        role: "Associate (Senior I) — Front-End Developer",
        summary:
          "Unico front-end owner di due prodotti enterprise interni, end-to-end: architettura, sviluppo, documentazione e demo ai Partner.",
      },
      {
        period: "2024 — 2025",
        company: "Findora · startup fintech",
        role: "Flutter Mobile & Front-End Developer",
        summary:
          "App cross-platform in Flutter e Firebase, landing in React e gestionale in Angular 20. Open beta con oltre 100 tester.",
      },
      {
        period: "2023 — 2024",
        company: "Yggdrasill Project · startup",
        role: "Full-Stack Developer",
        summary:
          "Blog full-stack: Angular 14 con Firebase (auth, database, hosting) ed Express + MongoDB sul back-end, architettura modulare.",
      },
      {
        period: "2022 — 2025",
        company: "Be | Shaping the Future",
        role: "Junior Front-End Developer · cliente UniCredit",
        summary:
          "Progetti bancari Angular (13–19) a lungo termine: coverage dei test +15%, +10% e +5%, rilasci CI/CD su Jenkins, team IT/DE/RO.",
      },
    ],
    educationLabel: "Formazione",
    education: [
      {
        period: "2020 — in corso",
        company: "Università degli Studi di Milano",
        role: "Informatica per la comunicazione digitale",
        summary:
          "Focus su mobile computing, digital media e interfacce utente.",
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
          "NestJS, Node.js ed Express, Firebase (Auth, Firestore, Hosting), MongoDB e database NoSQL",
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

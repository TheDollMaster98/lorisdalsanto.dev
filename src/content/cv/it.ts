import type { Cv } from "@/models/cv.model";

// CV in italiano: pagina /it/cv/. Testi come nel CV PDF di Loris.
// Modifica qui, la pagina si aggiorna da sola.
export const cvIt: Cv = {
  meta: {
    title: "CV | Loris Dal Santo",
    description:
      "Curriculum di Loris Dal Santo, Front-End Developer e Flutter Developer a Milano.",
  },
  labels: {
    profile: "Profilo personale",
    experience: "Esperienze lavorative",
    projects: "Progetti e collaborazioni",
    education: "Istruzione e formazione",
    skills: "Competenze IT",
    languages: "Lingue",
    traits: "Caratteristiche",
    print: "Stampa o salva in PDF",
    updated: "Aggiornato a",
  },
  headline: "Front-End & Flutter Mobile Developer",
  location: "Milano (IT)",
  updated: "settembre 2026",
  profile:
    "Front-End Developer con 4 anni di esperienza in contesti enterprise (banking e consulenza), specializzato in Angular, React e Next.js con TypeScript, Mobile Developer con Flutter e Dart. Ownership tecnica di prodotti Front-End end-to-end, dalle decisioni architetturali al rilascio, con confronto diretto con i referenti di alto livello (Partner EY, Product Owner e team multinazionali UniCredit).",
  experience: [
    {
      period: "07/2025 - presente",
      title: "Senior Consultant, Front-End Developer",
      org: "EY, AI & Data (AI Plus), Milano",
      points: [
        "Unico Front-End owner di due prodotti enterprise interni, con ownership end-to-end: architettura, sviluppo, documentazione e demo ai Partner EY sulle scelte architetturali.",
        "Portale AI per l’analisi dei bandi regionali (~20 utenti): impostato da zero in Next.js 15 + TypeScript + TailwindCSS. Ha sostituito un processo di controllo manuale con generazione AI-assistita di proposte, soluzioni e grafo delle relazioni tra bandi, con dashboard di KPI. Costruita una libreria di 20+ componenti riutilizzabili (shadcn/ui). Integrazione Back-End NestJS.",
        "Piattaforma di gestione dei progetti real estate (~15 utenti): tracking con dashboard di KPI ed editor documentale rich-text (TinyMCE in Angular 16) per la generazione di documenti .docx strutturati. Sviluppata come fork dell’intranet interna, riutilizzando 10+ componenti della piattaforma esistente, ha sostituito un processo di controllo manuale.",
        "Migrazione di un portale legacy enterprise da Bootstrap 3 a Bootstrap 5 in HTML, CSS e JavaScript vanilla: refactoring, accessibilità WCAG e responsività.",
      ],
    },
    {
      period: "07/2022 - 07/2025",
      title: "Junior Front-End Developer",
      org: "Be | Shaping the Future (Digitech Solution), cliente UniCredit Europa, Milano",
      points: [
        "Sviluppo, manutenzione e refactoring di componenti Angular (13–19) su più progetti enterprise bancari a lungo termine. Design system responsive (Bootstrap 5, Tailwind, Material Design) e gestione dello stato (RxJS, NgRx, Signals).",
        "Test unitari/automatizzati (Karma, Jasmine): +15%, +5% e +10% di coverage su tre progetti, build e rilasci CI/CD su Jenkins, accessibilità WCAG.",
        "Agile/Scrum su Jira in team distribuiti (Italia, Germania, Romania).",
      ],
    },
  ],
  projects: [
    {
      period: "02/04/2024 - 16/09/2025",
      title: "Flutter Mobile Developer & Front-End Developer",
      org: "Findora, startup, Milano",
      points: [
        "Sviluppo di un’app mobile cross-platform in FlutterFlow e Flutter 3.20, con gestione stato via Riverpod e integrazione completa con Firebase (auth, database).",
        "Realizzazione della landing page in ReactTSX 18 + Tailwind 3, e portale gestionale in Angular 20 + Material Design + Tailwind 3.",
      ],
    },
    {
      period: "In corso",
      title: "Guida Flutter 3, Learning App",
      org: "Progetto personale",
      points: [
        "Mini-app didattica in Flutter 3 con BLoC, Cubit, go_router e Firebase.",
        "Progetto personale per approfondire componenti, navigazione e architettura Flutter.",
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
        "Blog full-stack sviluppato in Angular 14 con Firebase (auth, db, hosting) ed Express + MongoDB sul back-end. Focus su architettura modulare, deploy su Firebase.",
      ],
    },
  ],
  education: [
    {
      period: "In corso",
      title: "Informatica per la Comunicazione Digitale",
      org: "Università degli Studi di Milano",
      points: [
        "Focus: Social e Mobile Computing.",
        "Progetti: Piattaforma di cucina (ReactJSX 18, TailwindCSS).",
      ],
    },
    {
      period: "Novembre 2023 - Gennaio 2025",
      title: "Corso Flutter",
      org: "Fudeo",
      points: [
        "Flutter 3.20, Riverpod, BloC, Clean Architecture.",
        "Certificazioni: Dart Begin, Flutter Start.",
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
      title: "Corso di Junior Front-End Developer",
      org: "Academy Software Inside SRL, ibrido",
      points: [
        "Corso intensivo con progetto finale full-stack in ReactJSX + ExpressJS.",
      ],
    },
  ],
  skills: [
    { area: "Linguaggi", items: "JavaScript, TypeScript, Dart" },
    {
      area: "Front-End",
      items: "Angular (v13-19), React (v17-18), NextJS 15",
    },
    { area: "Mobile (in crescita)", items: "Flutter (v3.20), FlutterFlow" },
    {
      area: "State Management",
      items: "RxJS, NgRx, Signals, React Context, Riverpod, BloC & Cubit",
    },
    { area: "UI", items: "Bootstrap 5, Tailwind (v3-4), Material Design" },
    { area: "Back-End (base)", items: "NestJS, Express.js, Firebase" },
    { area: "Testing & CI", items: "Karma, Jasmine, Vitest, Jenkins" },
    { area: "Tools", items: "Git, Azure DevOps, Jira" },
  ],
  languages: [
    { name: "Italiano", level: "madre lingua" },
    { name: "Inglese", level: "B2 (intermedio, scritto e parlato)" },
  ],
  traits: [
    {
      label: "Personalità",
      text: "riflessiva (INTP-T), con attitudine al problem solving logico e all’apprendimento continuo.",
    },
    {
      label: "Interessi",
      text: "tecnologia, scienza, cultura nerd, gaming, giochi di ruolo (D&D), giochi di squadra.",
    },
  ],
  consent:
    "Autorizzo il trattamento dei miei dati personali ai sensi del Dlgs 101/2018 e dell’art 13 GDPR (Regolamento UE 2016/679) ai fini della ricerca e selezione del personale.",
};

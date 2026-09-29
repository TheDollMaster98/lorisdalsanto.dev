import type { Cv } from "@/models/cv.model";

// CV in italiano: pagina /it/cv/. Modifica qui, la pagina si aggiorna da sola.
export const cvIt: Cv = {
  meta: {
    title: "CV | Loris Dal Santo",
    description:
      "Curriculum di Loris Dal Santo, sviluppatore full-stack JavaScript e mobile Flutter a Milano.",
  },
  labels: {
    profile: "Profilo",
    experience: "Esperienza",
    projects: "Progetti personali",
    education: "Formazione",
    courses: "Corsi e certificazioni",
    skills: "Competenze",
    languages: "Lingue",
    print: "Stampa o salva in PDF",
    updated: "Aggiornato a",
  },
  headline: "Full-Stack JavaScript & Flutter Mobile Developer",
  location: "Milano",
  updated: "settembre 2026",
  profile:
    "Sviluppatore full-stack JavaScript e mobile Flutter con quattro anni di esperienza su progetti enterprise ad alta complessità (banking, AI & Data) e in startup. In EY seguo end-to-end il front-end di portali interni strategici, dall’architettura alle demo. Lavoro con Angular, Next.js, React e Flutter, con attenzione a UX, accessibilità (WCAG) e qualità del codice. Uso strumenti di intelligenza artificiale per code review, ricerca di bug e refactoring, sempre sotto la mia supervisione.",
  experience: [
    {
      period: "07/2025 - oggi",
      title: "Associate (Senior I), Front-End Developer",
      org: "EY AI & Data, Milano",
      points: [
        "Front-end owner di un portale IA interno: architettura, setup e sviluppo della UI in Next.js, TypeScript e Tailwind CSS, con componenti riutilizzabili su shadcn/ui.",
        "Autenticazione e integrazione con i servizi back-end in NestJS.",
        "Documentazione tecnica del front-end e demo a stakeholder business e tecnici.",
        "Migrazione di un portale legacy: refactoring della UI da Bootstrap 3 a 5, accessibilità e responsività.",
      ],
      stack:
        "Next.js, TypeScript, Tailwind CSS, shadcn/ui, NestJS, Bootstrap 5",
    },
    {
      period: "04/2024 - 09/2025",
      title: "Flutter Mobile & Front-End Developer",
      org: "Findora, startup fintech",
      points: [
        "App mobile cross-platform in FlutterFlow e Flutter 3.20, stato con Riverpod e integrazione con Firebase (autenticazione, database).",
        "Landing page in React 18 e Tailwind CSS, portale gestionale in Angular 20 con Material Design.",
        "Open beta con oltre 100 tester, i cui feedback hanno guidato le iterazioni su UI e UX.",
      ],
      stack: "Flutter, FlutterFlow, Riverpod, Firebase, React, Angular 20",
    },
    {
      period: "07/2022 - 07/2025",
      title: "Front-End Developer",
      org: "Be | Shaping the Future, cliente UniCredit Europa, Milano",
      points: [
        "Sviluppo e manutenzione di portali enterprise in Angular 13–19, con UI modulari e accessibili (WCAG), su quattro progetti UniCredit.",
        "UC Hedge, piattaforma per la gestione del rischio di cambio delle aziende, citata da Euromoney nel premio a UniCredit come Best FX Bank for Service and Support 2023.",
        "Schermate in Angular 19 e Signals nell’app mobile interna (WebView), portale interno dei tool e funzionalità per il ticketing interno.",
        "Test coverage del front-end aumentata del 15%, 10% e 5% su tre progetti; CI/CD su Jenkins; team Agile tra Italia, Germania e Romania.",
      ],
      stack: "Angular, RxJS, NgRx, Signals, Karma, Jasmine, Jenkins",
    },
    {
      period: "07/2023 - 12/2024",
      title: "Full-Stack Developer",
      org: "Yggdrasill Project, startup",
      points: [
        "Blog full-stack in Angular 14 con Firebase (autenticazione, database, hosting) ed Express con MongoDB sul back-end, con architettura modulare.",
      ],
      stack: "Angular, Firebase, Express, MongoDB",
    },
  ],
  projects: [
    {
      period: "2026",
      title: "Fam Fanta",
      org: "Progetto personale",
      points: [
        "Fantasy league per il competitivo di League of Legends, nata per giocare con gli amici: leghe private, aste live, ruoli e punteggi importati da Leaguepedia.",
      ],
      stack: "Next.js, TypeScript, Tailwind CSS, Firebase",
    },
    {
      period: "In corso",
      title: "Guida Flutter",
      org: "Progetto personale",
      points: [
        "App didattica per approfondire componenti, navigazione e architettura in Flutter.",
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
      period: "In corso",
      title: "Informatica per la comunicazione digitale",
      org: "Università degli Studi di Milano",
      points: ["Focus su social e mobile computing."],
    },
  ],
  courses: [
    {
      period: "11/2023 - 01/2025",
      title: "Corso Flutter",
      org: "Fudeo",
      points: [
        "Flutter 3.20, Riverpod, BLoC e Clean Architecture. Certificazioni Dart Begin e Flutter Start.",
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
        "Corso intensivo con progetto finale full-stack in React ed Express.",
      ],
      stack: "React 17, Express, Bootstrap 5, Git",
    },
  ],
  skills: [
    {
      area: "Front-end",
      items: "Angular 13–20, Next.js, React, TypeScript",
    },
    {
      area: "Stato",
      items: "RxJS, NgRx, Signals, React Context, Riverpod, BLoC e Cubit",
    },
    { area: "Mobile", items: "Flutter 3, FlutterFlow" },
    {
      area: "UI",
      items: "Tailwind CSS, Material Design, Bootstrap 5, shadcn/ui, WCAG",
    },
    {
      area: "Back-end",
      items: "NestJS, Node.js ed Express, Firebase, MongoDB",
    },
    {
      area: "Strumenti",
      items: "Git, Azure DevOps, Jenkins, Jira, Karma e Jasmine",
    },
  ],
  languages: [
    { name: "Italiano", level: "Madrelingua" },
    { name: "Inglese", level: "B2, scritto e parlato" },
  ],
  consent:
    "Autorizzo il trattamento dei miei dati personali ai sensi del D.Lgs. 101/2018 e dell’art. 13 del GDPR (Regolamento UE 2016/679) ai fini della ricerca e selezione del personale.",
};

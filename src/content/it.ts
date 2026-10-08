import type { Content } from "@/models/content.model";

export const it: Content = {
  meta: {
    title: "Loris Dal Santo | Front-End & Flutter Mobile Developer",
    description:
      "Sviluppatore front-end e mobile Flutter a Milano. Angular, React, Next.js e Flutter per banche, enterprise e startup.",
  },
  nav: {
    work: "Lavori",
    about: "Percorso",
    stack: "Tecnologie",
    contact: "Contatti",
    cv: "CV",
    motion: "Animazioni",
  },
  hero: {
    role: "Front-End & Flutter Mobile Developer",
    location: "Milano",
    availability: "Aperto a nuove opportunità",
    statement:
      "Progetto e sviluppo applicazioni web e mobile per grandi aziende e piccole imprese, dall’architettura alla messa online.",
    cta: { contact: "Scrivimi", cv: "Leggi il CV" },
  },
  intro: {
    label: "Presentazione",
    text: "Sviluppatore front-end e mobile Flutter con quattro anni di esperienza, soprattutto in ambito bancario ed enterprise. Ho lavorato come consulente per UniCredit Europa, su portali interni per EY AI & Data Italia, su un’app mobile fintech in Flutter e su progetti in startup. Oggi in EY seguo il front-end di due progetti interni, dall’architettura ai componenti, dalla documentazione al rilascio, fino alle demo per i Partner. Lavoro con Angular, React, Next.js e Flutter, con attenzione all’accessibilità, ai test e a un codice che resti leggibile anche dopo un anno.",
    ai: "Nello sviluppo uso strumenti di intelligenza artificiale, sempre sotto la mia supervisione diretta. Dove un cliente o un progetto non ne prevede l’uso, lavoro senza, in piena autonomia.",
  },
  work: {
    label: "Lavori",
    gallery: {
      open: "Vedi le immagini",
      close: "Chiudi",
      title: "Progetti",
      visit: "Apri il sito",
      next: "Progetto successivo",
      previous: "Progetto precedente",
    },
    projects: [
      {
        title: "Portale AI per i bandi",
        year: "2025",
        context: "EY AI & Data",
        role: "Front-end owner",
        summary:
          "Analizza i bandi regionali con l’AI per circa 20 utenti e ha sostituito un controllo fatto a mano. Genera proposte, soluzioni e il grafo delle relazioni tra bandi, con dashboard di KPI. L’ho impostato da zero, con una libreria di 20+ componenti riutilizzabili e l’integrazione con il back-end NestJS.",
        stack: [
          "Next.js 16",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
          "NestJS",
        ],
      },
      {
        title: "Piattaforma real estate",
        year: "2025",
        context: "EY, settore immobiliare",
        role: "Front-end owner",
        summary:
          "Gestisce i progetti immobiliari per circa 15 utenti, con tracking su dashboard di KPI e un editor rich text che genera documenti .docx strutturati. È nata come fork dell’intranet interna, riusando 30+ componenti, e ha sostituito un controllo fatto a mano.",
        stack: ["Angular 16", "TinyMCE", "Material Design", "Bootstrap 5"],
      },
      {
        title: "UC Hedge",
        year: "2022 - 2024",
        context: "UniCredit, tramite Be | Shaping the Future",
        role: "Front-end developer",
        summary:
          "Piattaforma per la gestione end-to-end del rischio di cambio delle aziende, citata da Euromoney nel premio a UniCredit come Best FX Bank for Service and Support 2023. Componenti front-end, fix UX/UI e test unitari in un team distribuito tra Italia, Germania e Romania.",
        stack: ["Angular", "RxJS", "Bootstrap 5", "Karma", "Jasmine"],
        links: [
          {
            label: "LinkedIn, maggio 2023",
            href: "https://www.linkedin.com/feed/update/urn:li:activity:7059081868662423553/",
          },
          {
            label: "Premio Euromoney 2023",
            href: "https://www.linkedin.com/feed/update/urn:li:activity:7115278129404743680/",
          },
        ],
      },
      {
        title: "Findora",
        year: "2024 - 2025",
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
        slug: "findora",
        images: [
          {
            file: "01.webp",
            alt: "Sezione iniziale della landing page di Findora",
            caption:
              "La sezione iniziale della landing page in React, con i tre passi per iniziare.",
            width: 1875,
            height: 925,
          },
          {
            file: "02.webp",
            alt: "Sezione Come funziona con tre schermate dell’app mobile",
            caption:
              "Come funziona Findora, con le schermate dell’app mobile in Flutter e i percorsi per clienti e venditori.",
            width: 1875,
            height: 925,
          },
          {
            file: "03.webp",
            alt: "Sezione Suite Enterprise con la schermata di ricerca dell’app",
            caption:
              "La sezione dedicata alle aziende, con la schermata di ricerca dell’app.",
            width: 1875,
            height: 925,
          },
          {
            file: "04.webp",
            alt: "Sezioni Ambassador e domande frequenti della landing page",
            caption: "Il programma Ambassador e le domande frequenti.",
            width: 1875,
            height: 925,
          },
        ],
      },
      {
        title: "Fam Fanta",
        year: "2026",
        context: "Progetto personale",
        role: "Design & sviluppo",
        summary:
          "Fantasy league per il competitivo di League of Legends, in uso da una lega privata. Aste live con countdown, budget e rose sincronizzati in tempo reale tra i partecipanti, con il budget aggiornato in transazione per restare coerente. Leghe private con richieste di adesione e ruoli, dati dei giocatori importati da Leaguepedia tramite una API route che fa da proxy e gestisce gli errori.",
        stack: [
          "Next.js 16",
          "TypeScript",
          "Tailwind CSS",
          "Firebase",
          "Leaguepedia API",
        ],
        href: "https://fam-fanta-app-be--fam-fanta-app.europe-west4.hosted.app/",
        slug: "fam-fanta",
        images: [
          {
            file: "01.webp",
            alt: "Elenco delle leghe dell’utente in Fam Fanta",
            caption:
              "Le leghe dell’utente, con modalità d’asta, budget e ruolo di creatore.",
            width: 1875,
            height: 925,
          },
          {
            file: "02.webp",
            alt: "Asta live in corso su un giocatore",
            caption:
              "Un’asta live in corso, con countdown, offerte rapide, crediti dei partecipanti e storico delle offerte.",
            width: 1865,
            height: 1126,
          },
        ],
      },
    ],
  },
  about: {
    label: "Percorso",
    experienceLabel: "Esperienza",
    experience: [
      {
        period: "2025 - oggi",
        company: "EY AI & Data",
        role: "Senior Associate, Front-End Developer",
        summary:
          "Unico front-end owner di due prodotti enterprise interni, end-to-end: architettura, sviluppo, documentazione e demo ai Partner. Migrazione di un portale legacy da Bootstrap 3 a 5, con accessibilità WCAG e layout responsive.",
      },
      {
        period: "2024 - 2025",
        company: "Findora, startup fintech",
        role: "Flutter Mobile & Front-End Developer",
        summary:
          "App cross-platform in Flutter e Firebase, landing in React e gestionale in Angular 20. Open beta con oltre 100 tester.",
      },
      {
        period: "2023 - 2024",
        company: "Yggdrasill Project, startup",
        role: "Full-Stack Developer",
        summary:
          "Blog full-stack: Angular 14 con Firebase (auth, database, hosting) ed Express + MongoDB sul back-end, architettura modulare.",
      },
      {
        period: "2022 - 2025",
        company: "Be | Shaping the Future",
        role: "Junior Front-End Developer, cliente UniCredit",
        summary:
          "Progetti bancari Angular (13–19) a lungo termine: UC Hedge, schermate nell’app mobile UniCredit (WebView), il portale interno dei tool e funzionalità per il ticketing interno. Coverage dei test +15%, +10% e +5%, rilasci CI/CD su Jenkins, team IT/DE/RO.",
      },
    ],
    educationLabel: "Formazione",
    education: [
      {
        period: "2020 - in corso",
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
        area: "Back-end (supporto)",
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
    mail: {
      subject: "Contatto dal tuo sito",
      body: "Ciao Loris,\n\nti ho trovato dal tuo sito.\n\n",
    },
  },
  footer: {
    localTime: "Ora a Milano",
    backToTop: "Torna su ↑",
    privacy: "Privacy",
  },
  privacy: {
    metaTitle: "Privacy | Loris Dal Santo",
    metaDescription:
      "Informativa privacy del sito di Loris Dal Santo: nessun cookie, nessun tracciamento.",
    title: "Privacy",
    updated: "Ultimo aggiornamento: settembre 2026",
    sections: [
      {
        heading: "Chi gestisce il sito",
        body: "Questo è il portfolio personale di Loris Dal Santo. Per qualsiasi domanda sui tuoi dati puoi scrivere a {email}.",
      },
      {
        heading: "Cosa raccoglie il sito",
        body: "Niente. Il sito non usa cookie, non ha moduli di contatto e non usa strumenti di analisi o di tracciamento. Anche i font sono serviti dal sito stesso, senza richieste a Google.",
      },
      {
        heading: "Hosting",
        body: "Il sito è ospitato su GitHub Pages. Come ogni server web, GitHub può registrare l’indirizzo IP dei visitatori per la sicurezza e il funzionamento del servizio, secondo la propria informativa.",
        link: {
          label: "GitHub General Privacy Statement",
          href: "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement",
        },
      },
      {
        heading: "Se mi scrivi",
        body: "Uso il tuo indirizzo email e il contenuto del messaggio solo per risponderti. Non li condivido con nessuno.",
      },
      {
        heading: "Link esterni",
        body: "I link a LinkedIn, GitHub, Google Drive e ai progetti portano a siti con le proprie informative privacy.",
      },
      {
        heading: "I tuoi diritti",
        body: "Puoi chiedere in qualsiasi momento di vedere, correggere o cancellare i dati che mi hai inviato, scrivendo a {email}.",
      },
    ],
    back: "Torna al sito",
  },
};

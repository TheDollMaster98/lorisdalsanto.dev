import type { Content } from "@/models/content.model";

export const en: Content = {
  meta: {
    title: "Loris Dal Santo | Front-End & Flutter Mobile Developer",
    description:
      "Front-end and Flutter mobile developer in Milan. Angular, React, Next.js and Flutter for banking, enterprise and startups.",
  },
  nav: {
    work: "Work",
    about: "Background",
    stack: "Tech stack",
    contact: "Contact",
    cv: "CV",
    motion: "Animations",
    skip: "Skip to content",
  },
  hero: {
    role: "Front-End & Flutter Mobile Developer",
    location: "Milan, Italy",
    availability: "Open to new opportunities",
    statement:
      "I design and build web and mobile applications for large companies and small businesses, from the architecture to going live.",
    cta: { contact: "Get in touch", cv: "View CV" },
  },
  intro: {
    label: "Introduction",
    text: "Front-end and Flutter mobile developer with four years of experience, mostly in banking and enterprise. I have worked as a consultant for UniCredit Europe, on internal portals for EY AI & Data Italy, on a fintech mobile app in Flutter and on startup projects. At EY I now own the front-end of two internal projects, from architecture and components to documentation, release and demos for the Partners. I work with Angular, React, Next.js and Flutter, with a focus on accessibility, testing and code that is still readable a year later.",
    ai: "I use AI tools in development, always under my direct supervision. Where a client or project rules them out, I work without them, fully independently.",
  },
  work: {
    label: "Work",
    gallery: {
      open: "View images",
      close: "Close",
      title: "Projects",
      visit: "Visit the site",
      next: "Next project",
      previous: "Previous project",
    },
    projects: [
      {
        title: "AI grants portal",
        year: "2025",
        context: "EY AI & Data",
        role: "Front-end owner",
        summary:
          "It analyses regional grants with AI for about 20 users and replaced a manual review. It generates proposals, solutions and a graph of relations between grants, with KPI dashboards. I built it from scratch, with a library of 20+ reusable components and a NestJS back-end integration.",
        stack: [
          "Next.js 16",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
          "NestJS",
        ],
      },
      {
        title: "Real estate platform",
        year: "2025",
        context: "EY, real estate",
        role: "Front-end owner",
        summary:
          "It manages real estate projects for about 15 users, with tracking on KPI dashboards and a rich text editor that generates structured .docx documents. It started as a fork of the company intranet, reusing 30+ components, and replaced a manual review.",
        stack: ["Angular 16", "TinyMCE", "Material Design", "Bootstrap 5"],
      },
      {
        title: "UC Hedge",
        year: "2022 - 2024",
        context: "UniCredit, via Be | Shaping the Future",
        role: "Front-end developer",
        summary:
          "End-to-end platform for managing corporate FX risk, cited by Euromoney when naming UniCredit Best FX Bank for Service and Support 2023. Front-end components, UX/UI fixes and unit tests in a team spread across Italy, Germany and Romania.",
        stack: ["Angular", "RxJS", "Bootstrap 5", "Karma", "Jasmine"],
        links: [
          {
            label: "LinkedIn, May 2023",
            href: "https://www.linkedin.com/feed/update/urn:li:activity:7059081868662423553/",
          },
          {
            label: "Euromoney award 2023",
            href: "https://www.linkedin.com/feed/update/urn:li:activity:7115278129404743680/",
          },
        ],
      },
      {
        title: "Findora",
        year: "2024 - 2025",
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
        slug: "findora",
        images: [
          {
            file: "01.webp",
            alt: "Hero section of the Findora landing page",
            caption:
              "The hero section of the React landing page, with the three steps to get started.",
            width: 1875,
            height: 925,
          },
          {
            file: "02.webp",
            alt: "How it works section with three screens of the mobile app",
            caption:
              "How Findora works, with screens of the Flutter mobile app and the paths for clients and sellers.",
            width: 1875,
            height: 925,
          },
          {
            file: "03.webp",
            alt: "Enterprise suite section with the app search screen",
            caption:
              "The section for companies, with the search screen of the app.",
            width: 1875,
            height: 925,
          },
          {
            file: "04.webp",
            alt: "Ambassador and FAQ sections of the landing page",
            caption: "The Ambassador programme and the FAQ.",
            width: 1875,
            height: 925,
          },
        ],
      },
      {
        title: "Fam Fanta",
        year: "2026",
        context: "Personal project",
        role: "Design & development",
        summary:
          "Fantasy league for competitive League of Legends, used by a private league. Live auctions with a countdown, budgets and rosters synced in real time across participants, with budget updates in a transaction to keep them consistent. Private leagues with join requests and roles, player data imported from Leaguepedia through an API route that proxies requests and handles errors.",
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
            alt: "List of the user’s leagues in Fam Fanta",
            caption:
              "The user’s leagues, with auction mode, budget and creator role.",
            width: 1875,
            height: 925,
          },
          {
            file: "02.webp",
            alt: "Live auction in progress on a player",
            caption:
              "A live auction in progress, with countdown, quick bids, everyone’s credits and bid history.",
            width: 1865,
            height: 1126,
          },
        ],
      },
    ],
  },
  about: {
    label: "Background",
    experienceLabel: "Experience",
    experience: [
      {
        period: "2025 - now",
        company: "EY AI & Data",
        role: "Senior Associate, Front-End Developer",
        summary:
          "Sole front-end owner of two internal enterprise products, end to end: architecture, development, documentation and demos to the Partners. Migration of a legacy portal from Bootstrap 3 to 5, with WCAG accessibility and a responsive layout.",
      },
      {
        period: "2024 - 2025",
        company: "Findora, fintech startup",
        role: "Flutter Mobile & Front-End Developer",
        summary:
          "Cross-platform Flutter and Firebase app, React landing page and Angular 20 back office. Open beta with over 100 testers.",
      },
      {
        period: "2023 - 2024",
        company: "Yggdrasill Project, startup",
        role: "Full-Stack Developer",
        summary:
          "Full-stack blog: Angular 14 with Firebase (auth, database, hosting) and an Express + MongoDB back end, modular architecture.",
      },
      {
        period: "2022 - 2025",
        company: "Be | Shaping the Future",
        role: "Junior Front-End Developer, UniCredit client",
        summary:
          "Long-running Angular (13-19) banking projects: UC Hedge, screens inside the UniCredit mobile app (WebView), the internal tools portal and features for the internal ticketing app. Test coverage +15%, +10% and +5%, CI/CD releases on Jenkins, team across IT/DE/RO.",
      },
    ],
    educationLabel: "Education",
    education: [
      {
        period: "2020 - ongoing",
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
        items: "Angular 13-20, Next.js, React, TypeScript, RxJS, NgRx, Signals",
      },
      { area: "Mobile", items: "Flutter 3, FlutterFlow, Riverpod" },
      {
        area: "Back-end (support)",
        items:
          "NestJS, Node.js and Express, Firebase (Auth, Firestore, Hosting), MongoDB and NoSQL databases",
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
    copy: "Copy address",
    copied: "Address copied",
    mail: {
      subject: "Hello from your website",
      body: "Hi Loris,\n\nI found you through your website.\n\n",
    },
  },
  footer: {
    backToTop: "Back to top ↑",
    privacy: "Privacy",
  },
  privacy: {
    metaTitle: "Privacy | Loris Dal Santo",
    metaDescription:
      "Privacy notice for Loris Dal Santo's website: no cookies, no tracking.",
    title: "Privacy",
    updated: "Last updated: September 2026",
    sections: [
      {
        heading: "Who runs this site",
        body: "This is the personal portfolio of Loris Dal Santo. For any question about your data you can write to {email}.",
      },
      {
        heading: "What the site collects",
        body: "Nothing. The site uses no cookies, has no contact forms and no analytics or tracking tools. Fonts are served by the site itself, with no requests to Google.",
      },
      {
        heading: "Hosting",
        body: "The site is hosted on GitHub Pages. Like any web server, GitHub may log visitors’ IP addresses for security and to run the service, under its own privacy statement.",
        link: {
          label: "GitHub General Privacy Statement",
          href: "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement",
        },
      },
      {
        heading: "If you email me",
        body: "I use your email address and the content of your message only to reply. I do not share them with anyone.",
      },
      {
        heading: "External links",
        body: "Links to LinkedIn, GitHub, Google Drive and the projects lead to sites with their own privacy notices.",
      },
      {
        heading: "Your rights",
        body: "You can ask at any time to see, correct or delete the data you sent me, by writing to {email}.",
      },
    ],
    back: "Back to the site",
  },
};

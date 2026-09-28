# lorisdalsanto.dev

Loris Dal Santo personal web site.

Sito statico one-page in italiano e inglese, pubblicato su GitHub Pages.

```bash
npm install
npm run dev     # sviluppo: http://localhost:3000/it/ e /en/
npm run build   # genera out/, deployabile su qualsiasi hosting statico
npm run lint
```

## Stack

| Cosa | Versione | Uso |
| --- | --- | --- |
| [Next.js](https://nextjs.org) | 16.1 | App Router, static export (`output: "export"`), route `[lang]` generate con `generateStaticParams`, `next/font`, `proxy.ts` |
| [React](https://react.dev) | 19.2 | Server Components per le sezioni, un solo Client Component (`Motion`) |
| [TypeScript](https://www.typescriptlang.org) | 5.9 | Tipi dei contenuti in `src/models/` |
| [Tailwind CSS](https://tailwindcss.com) | 4.3 | Stili; token di colore in `src/app/globals.css` via `@theme` |
| [GSAP](https://gsap.com) | 3.15 | Animazioni: SplitText (titolo riga per riga), ScrollTrigger (linee e contenuti allo scroll), `@gsap/react` (`useGSAP`) |
| [ESLint](https://eslint.org) | 9.39 | `eslint-config-next` (core-web-vitals + TypeScript) |
| [Prettier](https://prettier.io) | — | Formattazione con le impostazioni predefinite (dall'editor, non è in `package.json`) |
| Google Fonts | — | Schibsted Grotesk (testo), IBM Plex Mono (metadati), serviti da `next/font` |
| GitHub Actions + GitHub Pages | — | Build e deploy a ogni push su `main` |

Scelte principali:

- **Nessuna libreria i18n**: due lingue con testi statici, gestite con il segmento `[lang]` e i file in `src/content/`, come nella guida Internationalization di Next.js.
- **Accessibilità**: con "riduci animazioni" attivo nel sistema non si anima nulla; il titolo resta leggibile anche senza JavaScript.
- **Branch**: si lavora su `develop` (tramite branch di feature e pull request), `main` è solo per il deploy.

## Struttura

Tutto il codice sta in `src/`; nella root restano solo le configurazioni.

```
src/
  app/
    (public)/               pagine pubbliche (in futuro: (private) con login, api/)
      [lang]/               lingua nell'URL: /it/, /en/
        layout.tsx          <html>, font, metadati
        page.tsx            la landing
        _landing-sections/  sezioni della landing (Hero, Work, About, Contact, Section)
    globals.css
  components/layout/        componenti condivisi tra pagine (Header, Footer)
  content/                  testi per lingua (it.ts, en.ts) e dati comuni (profile.ts)
  lib/
    i18n/                   lingue supportate (locales.ts) e accesso ai testi (index.ts)
    motion/                 animazioni GSAP (Motion.tsx)
  models/                   tipi dei dati, un file *.model.ts per tipo
  proxy.ts                  redirect alla lingua (solo con hosting con server)
public/index.html           "/" → lingua del browser sull'export statico
```

- Ogni pagina è un `page.tsx` con accanto i suoi componenti in una cartella `_nome/` (es. `_landing-sections/`): il trattino basso dice a Next che non è una route.
- I gruppi tra parentesi, come `(public)`, non finiscono nell'URL.
- Non si usa `src/pages/`: in Next è riservata al Pages Router.

Per aggiungere una lingua: nuovo file in `src/content/`, poi aggiungila a `locales` in `src/lib/i18n/locales.ts`, a `contents` in `src/lib/i18n/index.ts` e a `supported` in `public/index.html`.

## Deploy

Ogni push su `main` pubblica il sito su GitHub Pages (`.github/workflows/deploy.yml`).
Prerequisito, una volta sola: Settings → Pages → Source: **GitHub Actions**.

Senza dominio il sito è su `https://thedollmaster98.github.io/lorisdalsanto.dev/`: il workflow
passa la sottocartella a Next tramite `PAGES_BASE_PATH`. Con un dominio personalizzato il percorso
diventa vuoto da solo.

## Design

- Palette: token in `src/app/globals.css`
  - `paper` #F4F2EE (bianco perla), `paper-raised` #EBE8E2, `ink` #151515, `ink-muted` #5E5B55, `line` #D9D5CD, `signal` #3F7A4A (solo il pallino "disponibile")
- Font: Schibsted Grotesk (testo), IBM Plex Mono (metadati)

## AI full disclosure

- This software is developed with strong assistance from AI coding agents and with humans leading the ideas, testing, and debugging. We say this openly because it shaped how the project was built. If you are not happy with AI-developed code, this software is not for you. The acknowledgement is equally important: this would not exist without the open-source projects it is built on, largely written by hand — Next.js, React, Tailwind CSS and GSAP.

# lorisdalsanto.dev

Loris Dal Santo personal web site.

Sito statico: Next.js (static export) + Tailwind CSS 4, in italiano e inglese. GSAP e @gsap/react installati, nessuna animazione cablata.

```bash
npm install
npm run dev     # sviluppo: http://localhost:3000/it/ e /en/
npm run build   # genera out/, deployabile su qualsiasi hosting statico
```

## Struttura

Tutto il codice sta in `src/`; nella root restano solo le configurazioni.

- `src/app/[lang]/` — pagina generata per ogni lingua (`/it/`, `/en/`): compone le sezioni
- `src/app/(root)/` — `/` rimanda alla lingua del browser (inglese se non supportata)
- `src/components/layout/` — elementi presenti su tutta la pagina (`Header`, `Footer`, `Motion`)
- `src/components/sections/` — le sezioni della pagina (`Hero`, `Work`, `About`, `Contact`) e il contenitore comune `Section`
- `src/content/` — testi per lingua (`it.ts`, `en.ts`) e dati comuni (`profile.ts`)
- `src/lib/i18n.ts` — lingue supportate e accesso ai testi
- `src/models/` — tipi dei dati, un file `*.model.ts` per tipo

Per aggiungere una lingua: nuovo file in `src/content/`, poi aggiungila a `locales` e `contents` in `src/lib/i18n.ts`.

## Deploy

Ogni push su `main` pubblica il sito su GitHub Pages (`.github/workflows/deploy.yml`).
Prerequisito, una volta sola: Settings → Pages → Source: **GitHub Actions**.

Senza dominio il sito è su `https://thedollmaster98.github.io/lorisdalsanto.dev/`: il workflow
passa la sottocartella a Next tramite `PAGES_BASE_PATH`. Con un dominio personalizzato il percorso
diventa vuoto da solo.

## Design

- Palette: token in `app/globals.css`
  - `paper` #F4F2EE (bianco perla), `paper-raised` #EBE8E2, `ink` #151515, `ink-muted` #5E5B55, `line` #D9D5CD, `signal` #3F7A4A (solo il pallino "disponibile")
- Font: Schibsted Grotesk (testo), IBM Plex Mono (metadati)

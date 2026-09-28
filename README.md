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

- `src/app/` — solo routing: ogni `page.tsx` carica i dati e restituisce una vista
  - `[lang]/layout.tsx` — layout radice per lingua (`<html>`, font, metadati)
  - `[lang]/(public)/page.tsx` — landing (`/it/`, `/en/`). I gruppi tra parentesi non finiscono nell'URL:
    pagine pubbliche in `(public)`, e in futuro quelle con login in un gruppo a parte con il proprio layout
  - `(root)/page.tsx` — `/` rimanda alla lingua del browser (inglese se non supportata)
- `src/views/` — una cartella per pagina, con i componenti usati solo lì
  - `landing/LandingPage.tsx` — compone la pagina
  - `landing/sections/` — `Hero`, `Work`, `About`, `Contact` e il contenitore `Section`
  - `landing/Motion.tsx` — animazioni GSAP della landing
- `src/components/` — componenti condivisi tra pagine (`layout/Header`, `layout/Footer`)
- `src/content/` — testi per lingua (`it.ts`, `en.ts`) e dati comuni (`profile.ts`)
- `src/lib/i18n.ts` — lingue supportate e accesso ai testi
- `src/models/` — tipi dei dati, un file `*.model.ts` per tipo

Non si usa `src/pages/`: in Next è riservata al Pages Router e ogni file lì dentro diventerebbe una route.

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

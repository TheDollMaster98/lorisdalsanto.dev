# lorisdalsanto.dev

Loris Dal Santo personal web site.

Sito statico: Next.js (static export) + Tailwind CSS 4, in italiano e inglese. GSAP e @gsap/react installati, nessuna animazione cablata.

```bash
npm install
npm run dev     # sviluppo: http://localhost:3000/it/ e /en/
npm run build   # genera out/, deployabile su qualsiasi hosting statico
```

## Struttura

- `models/` — tipi dei dati (`Content`, `Project`, `Entry`, `Skill`, `Profile`)
- `content/it.ts`, `content/en.ts` — testi per lingua, tipizzati con `Content`
- `content/profile.ts` — dati uguali in tutte le lingue (nome, email, link)
- `lib/i18n.ts` — lingue supportate e accesso ai testi
- `app/[lang]/` — pagina generata per ogni lingua (`/it/`, `/en/`)
- `app/(root)/` — `/` rimanda alla lingua del browser (inglese se non supportata)

Per aggiungere una lingua: nuovo file in `content/`, poi aggiungila a `locales` e `contents` in `lib/i18n.ts`.

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

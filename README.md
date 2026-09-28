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

```
src/
  app/
    (public)/               pagine pubbliche (in futuro: (private) con login, api/)
      [lang]/               lingua nell'URL: /it/, /en/
        layout.tsx          <html>, font, metadati
        page.tsx            la landing
        _sections/          sezioni della landing (Hero, Work, About, Contact, Section)
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

- Ogni pagina è un `page.tsx` con accanto i suoi componenti in una cartella `_nome/`: il trattino basso dice a Next che non è una route.
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

- Palette: token in `app/globals.css`
  - `paper` #F4F2EE (bianco perla), `paper-raised` #EBE8E2, `ink` #151515, `ink-muted` #5E5B55, `line` #D9D5CD, `signal` #3F7A4A (solo il pallino "disponibile")
- Font: Schibsted Grotesk (testo), IBM Plex Mono (metadati)

# Revisione completa del design, ottobre 2026

Branch: `design/brand-review`. Controllo dell'intero sito (home, galleria progetti, CV, privacy, 404) con i criteri di design di Apple: risposta, interrompibilità, coerenza spaziale, materiali, tipografia, orientamento, accessibilità. Nessuna modifica fatta: questo file raccoglie i risultati.

## Verdetto

Il design generale regge e non va rifatto. Palette, tipografia, griglia e ritmo sono coerenti e sobri, adatti a un portfolio da sviluppatore. I problemi veri sono due: **il marchio** (sotto) e alcuni **dettagli di interazione** nella galleria e nella navigazione. Il resto è rifinitura.

## 1. Marchio: perché non convince

Confronto completo: [`logo-alternative.png`](logo-alternative.png) (16, 24, 32, 64 px e nella scheda del browser).

**Problemi del marchio attuale ("campo e cursore")**
- **Sembra un'icona di caricamento.** Un anello di trattini radiali è il simbolo universale di "attendere": è letteralmente l'indicatore di attività di macOS e iOS. A 16 px nella scheda del browser chi lo vede pensa che la pagina stia ancora caricando. Viola il principio di familiarità: usa un simbolo noto con un significato diverso da quello che ha.
- **Non dice chi sei.** Nessun legame con il nome: senza la scritta accanto è anonimo.
- **Due versioni diverse.** 28 segni in grande, 12 in piccolo: un marchio che cambia forma a seconda della misura è più debole.
- **Il cursore al centro** si legge come una "I" o una barra di pausa.

**Alternative**

| | Pro | Contro |
| --- | --- | --- |
| **A. `ld` + cursore** | Iniziali, stesso font del sito, riprende il cursore del titolo | A 16 px diventa tre aste verticali (`l`, `d`, cursore): si confonde |
| **B. `L` + cursore** | Leggibile a 16 px, legato al nome e al titolo che si scrive da solo, una sola forma a tutte le misure | Una sola iniziale |
| **C. `LDS` in mono** | Tutte le iniziali | Illeggibile sotto i 32 px, sembra un'etichetta, non un marchio |

**Varianti dell'idea A** ([`logo-varianti-a.png`](logo-varianti-a.png)), per togliere la confusione a 16 px tra il cursore e le aste di `l` e `d`:

| | Lettura a 16 px | Note |
| --- | --- | --- |
| **A. `ld|`** | Debole: tre aste uguali | Originale |
| **A1. `ld|` con cursore verde** | Discreta: il colore separa il cursore | Usa l'accento verde, finora riservato alla disponibilità: ne diluisce il significato |
| **A2. `ld` + cursore a blocco** | Buona: il blocco pieno non si confonde con le lettere | Cursore da terminale, forte anche in piccolo |
| **A3. `ld_`** | Debole: il trattino sparisce sotto i 24 px | Elegante in grande |
| **A4. `ld_` in mono** | Pessima: in IBM Plex Mono la `l` sembra un `1` ("1d") | Scartata |
| **A5. `lds|` verde** | Pessima: tre lettere sono troppe a 16 px | Scartata |

Tra le varianti di A la più solida è **A2** (blocco), seguita da A1 se vuoi il colore.

**Consiglio: B, `L` seguita dal cursore.** È il segno più semplice che regge da 16 px al biglietto da visita, usa il tuo font e racconta la stessa cosa della hero: qualcuno che sta scrivendo. Se scelto: rifare favicon, icona iOS, anteprima social e marchio nel CV, aggiornare la board in `public/design/brand-kit/`.

## 2. Interazione e motion

| # | Priorità | Dove | Problema | Proposta |
| --- | --- | --- | --- | --- |
| 1 | Media | Galleria progetti | Durante il cambio progetto (0,45 s) gli input vengono scartati (`busy`). Principio Apple: mai bloccare l'input durante una transizione. | Se arriva un nuovo comando durante il cambio, chiudere subito l'animazione in corso e partire dalla posizione attuale verso il nuovo progetto. |
| 2 | Media | Galleria progetti | Per passare al progetto successivo si accumula scroll o swipe oltre la fine, ma niente lo mostra finché non scatta: per l'utente "non succede niente" e poi cambia di colpo. | Feedback continuo: la riga "Progetto successivo" in fondo si riempie in proporzione alla spinta, con resistenza crescente (effetto elastico). Spento con riduci animazioni. |
| 3 | Bassa | Link, righe dei progetti, pulsanti | Nessun feedback alla pressione: solo hover, che sul telefono non esiste. | Stato `:active` immediato (colore attenuato, nessuno schiacciamento: i CTA sono link sottolineati). |
| 4 | Ok | Hero | Campo di segni a tutta larghezza in movimento continuo: Apple sconsiglia sfondi in movimento su tutto lo schermo. | Già mitigato: lento, si ferma fuori schermo, rispetta riduci animazioni, assente su touch. Nessuna azione. |
| 5 | Ok | Galleria | Entrata e uscita sullo stesso percorso, tendina nel verso dello scorrimento, cambio istantaneo da tastiera. | Nessuna azione. |

## 3. Orientamento e navigazione

| # | Priorità | Dove | Problema | Proposta |
| --- | --- | --- | --- | --- |
| 6 | Bassa | Navbar nelle pagine CV e privacy | "Dove sono?" Sulla pagina CV la voce "CV" della navbar non è evidenziata (solo la lingua lo è). | Voce corrente in `text-ink` con `aria-current="page"`. |
| 7 | Ok | Tutto il sito | Etichette specifiche ("Lavori", "Percorso"), cambio lingua che resta sulla stessa pagina, 404 con ritorno al sito, link "Salta al contenuto". | Nessuna azione. |

## 4. Materiali e accessibilità

| # | Priorità | Dove | Problema | Proposta |
| --- | --- | --- | --- | --- |
| 8 | Bassa | Navbar | Fondo semitrasparente con sfocatura: con "riduci trasparenza" attivo nel sistema resta trasparente. | `prefers-reduced-transparency`: fondo pieno, senza sfocatura. |
| 9 | Bassa | Tutto il sito | Con "aumenta contrasto" attivo i grigi chiari (linee `#d9d5cd`, testo secondario) restano uguali. | `prefers-contrast: more`: linee e testo secondario più scuri. |
| 10 | Media | Tutto il sito | Nessun tema scuro: il sito resta chiaro anche con il sistema in modalità scura. Apple lo considera parte della cura del dettaglio. | Da valutare dopo le candidature: richiede una seconda palette e la verifica di tutte le immagini. |

## 5. Tipografia

| # | Priorità | Dove | Problema | Proposta |
| --- | --- | --- | --- | --- |
| 11 | Bassa | Hero su telefono | A 390 px il titolo va su 7 righe e occupa quasi tutta la prima schermata. | Corpo minimo da 36 a 32 px: 6 righe, bottoni più in alto. |
| 12 | Ok | Tutto il sito | Spaziatura delle lettere diversa per misura (negativa sui titoli, positiva sulle etichette mono), interlinea stretta sui titoli e comoda sul testo, gerarchia con peso 500 invece della sola dimensione, unità in `rem`. | Nessuna azione. |

## 6. Cosa va già bene

- **Palette**: un solo accento, usato solo per la disponibilità; grigi caldi coerenti; niente nero puro né gradienti.
- **Risposta**: niente ritardi artificiali, animazioni brevi, contenuto della hero visibile entro un secondo.
- **Riduci animazioni**: rispettato ovunque, dal primo frame.
- **Contenuti**: email copiabile, CV scaricabile in PDF, miniature dei progetti, nessun cookie.

## Ordine consigliato

1. Marchio: scegliere tra attuale, A, B, C (consiglio B) e applicarlo ovunque.
2. Punti 1 e 2 (galleria): sono quelli che si sentono di più usando il sito.
3. Punti 3, 6, 8, 9, 11: piccoli, si fanno in un solo commit.
4. Punto 10 (tema scuro): dopo le candidature.

## Attività aperte (dalle revisioni precedenti)

- **Enforce HTTPS su GitHub** (tu): Settings, Pages, spuntare "Enforce HTTPS"; se è grigio: Remove, Save, attendere. Il sito reindirizza già da codice dopo il prossimo deploy.
- **Statistiche GoatCounter** (rimandato, tu):
  1. Vai su **https://www.goatcounter.com** e premi **Sign up**.
  2. In **Code** scrivi `lorisdalsanto` (pannello su `https://lorisdalsanto.goatcounter.com`); se è preso, scegline un altro.
  3. In **Site domain** scrivi `lorisdalsanto.it`.
  4. Email e password, poi conferma l'account dal link via email.
  5. In **Settings** spunta "Don't track my own pageviews".
  6. Mandami il codice: aggiungo lo script (solo in produzione), una riga nella privacy IT/EN e verifico la prima visita.
- **Testi dei progetti con parole tue**: rimandato.

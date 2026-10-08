# Check del design, ottobre 2026

Branch: `design/brand-review`. Stato di partenza: sito su lorisdalsanto.it più le modifiche di questo branch (animazioni, pulizia, marchio).
Stack: Next.js 16 export statico, Tailwind 4, GSAP. Nessuna modifica fatta finché questo file non è approvato.

## Cosa è già a posto (non toccare)

- **Font con carattere.** Schibsted Grotesk e IBM Plex Mono, caricati con `next/font`. Pesi 400 e 500, tracking negativo sui titoli.
- **Palette.** Un solo accento (verde, solo per la disponibilità), grigi tutti caldi, niente nero puro, niente gradienti.
- **Contenitore.** `max-w-7xl` ovunque, griglia a 12 colonne, paragrafi entro 46-60 caratteri.
- **Pagine di servizio.** 404 personalizzata, privacy, metadati e anteprima social, favicon con il marchio, `lang` e alternative IT/EN.
- **Immagini.** Tutte con testo alternativo descrittivo.
- **Nessun cookie.** Quindi niente banner, corretto così.

## Cosa manca, in ordine di priorità

### A. Fatto (commit "Revisione gruppo A")

1. **Link "Salta al contenuto".** Manca: chi naviga da tastiera deve passare tutta la navbar a ogni pagina. Un link nascosto che compare al primo Tab.
2. **Focus visibile sui pulsanti.** Lo stile di focus c'è solo per i link (`a:focus-visible`). Le righe dei progetti con galleria, le frecce della galleria e il pulsante di stampa sono `<button>` e usano il contorno del browser, diverso dal resto. Stesso stile per tutti.
3. **Scorrimento morbido sui link interni.** "Lavori", "Percorso", "Contatti" nella navbar saltano di colpo. `scroll-behavior: smooth`, disattivato con "riduci animazioni".
4. **Titoli senza parole orfane.** Nessun `text-wrap: balance` sui titoli: su alcune larghezze l'ultima riga resta con una parola sola. `text-balance` su titolo della hero e titoli dei progetti, `text-pretty` sui paragrafi.
5. **Copia dell'email.** Il contatto è solo un link `mailto:`: su un computer senza client di posta configurato (frequente in azienda) il clic non fa niente. Un pulsante "Copia" accanto all'indirizzo, con conferma "Copiato".
6. **404 con `min-h-screen`.** Su iPhone l'altezza salta con la barra di Safari: `min-h-dvh`.

### B. Da fare, ma dipendono da te

7. **Email del sito ancora Hotmail.** Il cambio a `contatti@lorisdalsanto.it` è pronto sul branch `feat/custom-domain`. Serve la casella attiva e provata.
8. **HTTPS non forzato.** `http://lorisdalsanto.it` risponde ancora senza passare a https (verificato ora). Spuntare "Enforce HTTPS" in Settings, Pages; se è ancora grigio: Remove, Save, attendere.
9. **Testi dei progetti con parole tue.** Restano la cosa che pesa di più sulla percezione del sito.

### C. Da valutare (cambiano qualcosa di visibile)

10. **CV in PDF scaricabile.** Oggi c'è solo "Stampa o salva in PDF", che dipende dal browser. Un recruiter si aspetta un file da scaricare con un clic. Generarlo dalla pagina `/cv` a ogni deploy e linkarlo accanto. Il CV stampato è di 2 pagine: valutare di portarlo a 1.
11. **Anteprime nella lista dei progetti.** Le righe di Findora e Fam Fanta sono solo testo, eppure hanno screenshot veri. Una miniatura nella riga darebbe un appiglio visivo alla sezione più importante. Le righe EY e UniCredit restano testo (NDA).
12. **Statistiche senza cookie.** Senza, non saprai mai se i recruiter aprono il sito. GoatCounter o Cloudflare Web Analytics, nessun banner richiesto.

### D. Scartato apposta

- **Grana, texture, foto di sfondo, vetro.** La procedura le suggerisce contro i fondi "piatti". Qui il fondo piatto è un'identità (bianco perla, campo di segni nella hero): aggiungerle rovinerebbe il sito.
- **Cambio font.** Quelli attuali hanno già carattere.
- **Feedback alla pressione sui pulsanti** (`scale(0.98)`). I CTA sono link sottolineati, non pulsanti pieni: lo schiacciamento sembrerebbe un errore.
- **Evidenziare la sezione corrente nella navbar mentre si scorre.** Utile su pagine lunghe; qui le sezioni sono sei e la navbar ne ha quattro. Costa più di quanto rende.
- **Tema scuro.** Funzione nuova, non un difetto: dopo le candidature.
- **Codice dell'interruttore animazioni commentato.** La regola chiede di togliere il codice morto, ma l'hai voluto tenere tu per riattivarlo.

## Proposta

Approvato questo file: faccio il gruppo A in un commit, poi il punto 10 e l'11 se li vuoi. Il gruppo B è tuo.

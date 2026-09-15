# Ologenetica Zine

**Live**: https://ologenetica-zine.vercel.app · deploy automatico da `main` via Vercel.

Progetto gemello (ma separato) dello Zodiac Zine, dedicato al **Profilo Ologenetico** (ispirato alle Gene Keys di Richard Rudd: I Ching + astrologia + Human Design). **Senza animazioni**, multilingua **IT / EN / FR / ES / PT-BR**, testi interpretativi originali.

**Mondo visivo: "Lo Spettrometro"** — strumento di misura da laboratorio anni '60–'70: pannello smaltato verde-nero, fosforo ambra/menta, canali CH·1/2/3 (Attivazione/Venere/Perla), scale incise a tacche, rampa calibrata Ombra→Dono→Siddhi, stato = segno stampato. Stylesheet condiviso `holo/instrument.css`, font self-hosted in `fonts/` (`holo/fonts.css`: Saira Semi Condensed, Azeret Mono, Libre Franklin). Contratto di direzione nel commento in testa a ogni pagina (seed 84c75ad3).

Le pagine calcolatrici accettano **link condivisibili**: `Profilo Ologenetico.html?d=YYYY-MM-DD&t=HH:MM&city=Roma&n=Nome&view=report&run=1` e `Compatibilità.html?a_d=…&a_t=…&a_city=…&b_d=…&b_t=…&b_city=…&run=1`.

## Pagine

- `index.html` — hub
- `Profilo Ologenetico.html` — calcolatore: data/ora/luogo → 11 sfere nelle Sequenze di Attivazione, Venere e Perla. Due viste: **Sintesi** (card) e **Report completo** in stile dossier: lettura estesa per sfera (Chiave + Linea + contesto), croce d'incarnazione, linee profilo (es. 6/2), sintesi strutturale ("La struttura in breve": assi, Chiavi ripetute, canali specchio, Linea dominante, inizi/finali), tabella posizioni esatte e avviso di soglia oraria quando una sfera cade vicino a un confine di Linea (bisezione al minuto).
- `Come si Legge.html` — spiegazione di lettura e calcolo (rendered dal pacchetto `holo/guide.XX.js`)
- `Compatibilità.html` — confronto tra due profili: Chiavi gemelle, risonanze, specchi a 180°, ponti di Linea (1-4, 2-5, 3-6), punteggio, verdetto, commento per coppia di Linee

## Motore (`holo/`)

- `engine.js` (language-free) — `HOLO.compute / analyze / stability`
  - Personalità = nascita; Design = −88° di arco solare (~3 mesi), risolto per iterazione
  - Ruota: 64 settori da 5,625° (ancora: esagramma 41 a 302° = 2° Acquario), 6 linee da 0,9375°
  - Mappatura sfere→pianeti secondo lo schema ufficiale del profilo
  - `stability()` trova le sfere che cambiano Chiave.Linea entro ±30′ dall'ora di nascita (bisezione)
  - Validato contro un report professionale (Swiss Ephemeris): stesse 11 sfere, croce, linee, data design e soglia oraria al minuto
- `keys.XX.js` — pacchetti lingua (64 Chiavi con lettura estesa, 6 Linee, 11 Sfere, template struttura + compatibilità). `keys.it.js` è il master; EN/FR/ES/PT tradotti.
- `guide.XX.js` — contenuto della pagina guida per lingua
- `compat.js` (language-free) — geometrie di compatibilità; i testi vengono dai template del pacchetto lingua

## Librerie

- `lib/astronomy.browser.min.js` — effemeridi (astronomy-engine), da zodiac-zine
- `lib/cities.js` — database città + fuso, da zodiac-zine
- `lang/i18n.js` — selettore lingua (adattato da zodiac-zine, lingue it/en/fr/es/pt-BR)

## Avvio / Deploy

Sito statico: `npx serve -p 4322 .` — preview `holo-preview` in `.claude/launch.json`.
Online su Vercel (account mingo86), progetto separato non linkato da zodiac-zine; `robots.txt` + meta `noindex` per tenerlo fuori dai motori.

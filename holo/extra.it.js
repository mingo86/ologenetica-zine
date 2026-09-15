/* ============================================================
   OLOGENETICA · PACCHETTO EXTRA — ITALIANO (master)
   Contenuti delle sezioni avanzate:
   · LIS  — la Linea DENTRO la sfera (11 sfere × 6 Linee = 66 letture)
   · RINGS — i 21 Anelli di codoni (nome + essenza)
   · TL   — timeline dei cicli personali
   · WX   — meteo del profilo (transiti)
   · YR   — l'anno solare
   · RN   — sezione anelli
   · ALM  — almanacco delle 64 Chiavi
   · LIB  — biblioteca delle 64 Chiavi
   · PST  — poster del quadrante
   · DS   — modalità «ora sconosciuta»
   I template usano segnaposto {cosi}. Testi originali.
   ============================================================ */
(function () {

  // La Linea dentro la sfera: LIS[sfera][linea]
  const LIS = {
    lavoro: {
      1: "Il tuo genio si costruisce come una biblioteca: diventi maestro di ciò che hai studiato a fondo, e il mondo ti riconosce l'autorevolezza delle fondamenta.",
      2: "Il tuo genio è naturale: lavora meglio quando nessuno lo osserva. Le chiamate sincere lo tirano fuori; le pressioni lo spengono.",
      3: "Il tuo genio si forgia sbagliando: ogni mestiere lo impari smontandolo. Il curriculum vero sono i tentativi.",
      4: "Il tuo genio passa dalle persone: la carriera è la tua rete. Le occasioni migliori arrivano da chi ti conosce già.",
      5: "Il tuo genio è la soluzione pratica: il mondo ti chiama quando le cose bruciano — e proietta su di te più di quanto chiedi.",
      6: "Il tuo genio matura a fasi: prove fino ai ~30, osservazione fino ai ~50, poi autorevolezza. Non anticipare il calendario."
    },
    evoluzione: {
      1: "La sfida ti chiede fondamenta: la crescita passa dallo studio paziente di ciò che ti spaventa, non dal saltarlo.",
      2: "La sfida ti raggiunge da sola: non cercarla. Cresci quando rispondi solo alle chiamate che ti somigliano.",
      3: "La sfida è fatta di urti: ogni fallimento sul tema è un pezzo del percorso, non una condanna.",
      4: "La sfida si gioca nelle relazioni strette: il tema si presenta attraverso le persone a cui tieni.",
      5: "La sfida porta proiezioni: gli altri ti vedranno come causa o come salvezza. Impara a restituire ciò che non è tuo.",
      6: "La sfida ha tre stagioni: prima la vivi, poi la osservi, infine la insegni. La comprensione piena arriva nella terza."
    },
    radianza: {
      1: "La vitalità si accende nella profondità: ti ricarica capire. Un giorno passato a studiare ciò che ami vale una vacanza.",
      2: "La vitalità è spontanea ma riservata: si accende negli spazi protetti e si spegne sotto osservazione.",
      3: "La vitalità ama l'urto: il corpo si accende nel fare, provare, rifare. Il «giusto in teoria» ti spegne.",
      4: "La vitalità è relazionale: ti ricaricano le persone giuste. La rete non è svago — è salute.",
      5: "La vitalità si accende nel risolvere: quando la tua praticità serve davvero, il corpo risponde.",
      6: "La vitalità segue le stagioni lunghe: rispetta la fase in cui sei. Forzare la fase sbagliata costa salute."
    },
    scopo: {
      1: "Lo scopo si attiva servendo con la conoscenza: quando ciò che hai studiato regge qualcosa di più grande di te.",
      2: "Lo scopo ti trova: si attiva quando qualcosa di più grande chiama il tuo talento naturale per nome.",
      3: "Lo scopo si costruisce sui tentativi: metti a servizio gli errori che hai già pagato, e altri non li pagheranno.",
      4: "Lo scopo passa dalla comunità: si attiva dentro un tessuto di persone, mai in solitaria.",
      5: "Lo scopo è pratico: si attiva quando la tua soluzione serve a molti, non solo a te.",
      6: "Lo scopo fiorisce tardi e in grande: la terza fase della vita è il suo territorio naturale."
    },
    attrazione: {
      1: "Attiri chi cerca solidità: le tue relazioni cominciano lente e reggono a lungo. Fidati dei tempi di costruzione.",
      2: "Attiri senza cercare: le persone giuste ti trovano nella tua tana. Non farti vedere di più — fatti trovare da chi guarda davvero.",
      3: "Attiri per esperienza: le relazioni sono esperimenti, e la competenza si costruisce sui fallimenti — materiale, non incidenti.",
      4: "Attiri attraverso la rete: gli amori arrivano dalle amicizie. Il legame parte dal tessuto sociale già esistente.",
      5: "Attiri proiezioni: chi arriva vede in te ciò che gli serve. Le relazioni vere cominciano quando cade l'aureola.",
      6: "Attiri col tuo esempio: nelle relazioni cerchi il quadro intero — e le tre fasi della vita cambiano ciò che attiri."
    },
    iq: {
      1: "La tua mente si è difesa studiando: sapere era sicurezza. Il punto cieco: credere che capire basti a vivere.",
      2: "La tua mente adolescente funzionava da sé — e forse nessuno l'ha riconosciuta. Il punto cieco: aspettare ancora quel riconoscimento.",
      3: "La tua mente ha imparato sbagliando ad alta voce: il punto cieco è punirti per gli errori che sono il tuo metodo.",
      4: "La tua mente si è formata nel gruppo: pensare era appartenere. Il punto cieco: confondere il consenso con la verità.",
      5: "La tua mente ha imparato a risolvere per gli altri: il punto cieco è il bisogno che la soluzione venga applaudita.",
      6: "La tua mente guarda dall'alto da sempre: il punto cieco è osservare la vita al posto di viverla."
    },
    eq: {
      1: "Il tuo cuore si è protetto con le regole: sapere «come si fa» calmava. Oggi si apre dove trova chiarezza.",
      2: "Il tuo cuore si apriva solo nei posti sicuri: oggi ha ancora bisogno di tane. Rispettale, senza doverle giustificare.",
      3: "Il tuo cuore ha imparato dagli urti: le emozioni si capiscono attraversandole, non prevenendole.",
      4: "Il tuo cuore batte nel gruppo: l'esclusione è la ferita, l'appartenenza la medicina — e la trappola.",
      5: "Il tuo cuore ha imparato a farsi carico: da bambino risolvevi tu. Oggi può deporre il ruolo di pompiere.",
      6: "Il tuo cuore osserva prima di aprirsi: non è freddezza — è il calendario lungo della fiducia."
    },
    sq: {
      1: "Nei primi anni la fiducia aveva bisogno di terra solida: riti, ripetizioni, presenze certe. È ancora la tua radice.",
      2: "Nei primi anni bastava essere visti senza dover chiedere: la radice della fiducia è chi ti ha trovato senza che chiamassi.",
      3: "Nei primi anni il mondo si imparava toccandolo: cadere e rialzarsi è la tua prima lingua.",
      4: "Nei primi anni la casa erano le persone: la radice della fiducia è il calore del cerchio stretto.",
      5: "Nei primi anni sentivi le aspettative degli adulti: la radice è imparare che l'amore non si guadagna risolvendo.",
      6: "Nei primi anni guardavi tutto da un passo indietro: la radice è la fiducia di chi osserva prima di entrare."
    },
    nucleo: {
      1: "La ferita chiede di essere studiata: la vocazione nasce scavando la tua stessa profondità fino in fondo.",
      2: "La ferita è rimasta a lungo invisibile — anche a te. La vocazione nasce quando lasci che qualcuno la veda.",
      3: "La ferita si è ripresentata mille volte: la vocazione è l'arte distillata da tutti quei tentativi.",
      4: "La ferita riguarda l'appartenenza: la vocazione è creare per altri il posto che a te è mancato.",
      5: "La ferita è il peso delle proiezioni: la vocazione è servire senza farti carico di ciò che non è tuo.",
      6: "La ferita si comprende a distanza: la vocazione arriva quando smetti di combatterla e la racconti dall'alto."
    },
    cultura: {
      1: "Nella comunità sei le fondamenta: chi studia, verifica e custodisce il sapere del gruppo.",
      2: "Nella comunità sei la riserva naturale: il talento che il gruppo chiama quando serve — e che va protetto dal logorio.",
      3: "Nella comunità sei chi ha già provato: l'esploratore che torna con la mappa degli errori.",
      4: "Nella comunità sei il tessitore: tieni vivi i fili tra le persone. Senza di te il gruppo è una somma; con te, un corpo.",
      5: "Nella comunità sei il riferimento pratico: il gruppo prospera quando la tua soluzione circola — e tu quando poi ti ritiri.",
      6: "Nella comunità sei il tetto: la visione lunga che il gruppo consulta ai bivi."
    },
    perla: {
      1: "La prosperità arriva dalla profondità: vieni ripagato per ciò che sai davvero, quando smetti di svenderlo confusamente.",
      2: "La prosperità arriva se ti lasci trovare: il mercato giusto ti chiama — il marketing forzato ti svaluta.",
      3: "La prosperità arriva dai tentativi riciclati: ogni fallimento diventa know-how prezioso.",
      4: "La prosperità passa dalla rete: il lavoro arriva da chi si fida di te, non dagli sconosciuti.",
      5: "La prosperità arriva risolvendo: riduci l'offerta a una soluzione chiara e il valore diventa evidente.",
      6: "La prosperità matura tardi e bene: le semine lunghe rendono più di ogni scorciatoia."
    }
  };

  // I 21 Anelli di codoni: nome + essenza
  const RINGS = {
    fire:        { n: "Anello del Fuoco",                 t: "La scintilla creativa che feconda la materia." },
    water:       { n: "Anello dell'Acqua",                t: "La direzione e il contributo: sapere dove va la corrente." },
    lifedeath:   { n: "Anello della Vita e della Morte",  t: "I cicli del nascere, del nutrire e del lasciar andare." },
    union:       { n: "Anello dell'Unione",               t: "Il legame: come le persone si incontrano davvero." },
    light:       { n: "Anello della Luce",                t: "La mente luminosa: visioni, ritmi e idee." },
    alchemy:     { n: "Anello dell'Alchimia",             t: "Trasformare il piombo dei ricordi in oro." },
    humanity:    { n: "Anello dell'Umanità",              t: "L'amore che matura attraverso le prove umane." },
    trials:      { n: "Anello delle Prove",               t: "L'espressione che si affina negli esami della vita." },
    purification:{ n: "Anello della Purificazione",       t: "L'ascolto e il desiderio che si fanno limpidi." },
    seeking:     { n: "Anello della Ricerca",             t: "La spinta a cercare: salire, iniziare, migliorare." },
    prosperity:  { n: "Anello della Prosperità",          t: "Talento e risorse che si moltiplicano insieme." },
    matter:      { n: "Anello della Materia",             t: "La profondità incarnata: corpo, mestiere, radici." },
    gaia:        { n: "Anello di Gaia",                   t: "I bisogni della terra e delle sue creature." },
    origin:      { n: "Anello dell'Origine",              t: "Il seme di tutto: il codone d'avvio della ruota." },
    whirlwind:   { n: "Anello del Turbine",               t: "Le rivoluzioni emotive che cambiano era." },
    illuminati:  { n: "Anello degli Illuminati",          t: "Il fiuto e i valori che guidano le squadre." },
    illusion:    { n: "Anello dell'Illusione",            t: "Rischio e memoria: che cosa vale davvero la posta." },
    miracles:    { n: "Anello dei Miracoli",              t: "La curiosità e il dubbio che aprono il possibile." },
    noreturn:    { n: "Anello del Non Ritorno",           t: "La parola detta: influenza e precisione." },
    secrets:     { n: "Anello dei Segreti",               t: "La grazia nascosta nelle tempeste del cuore." },
    divinity:    { n: "Anello della Divinità",            t: "La potenza e l'intuizione allo stato puro." }
  };

  // Timeline dei cicli
  const TL = {
    title: "La tua timeline dei cicli",
    sub: "I cicli di sviluppo della Sequenza di Venere, il ritorno di Saturno e — per le Linee 6 — le tre fasi della vita, calcolati sulle tue date reali.",
    segs: { sq: "SQ · imprinting", eq: "EQ · cuore", iq: "IQ · mente" },
    marks: { saturn1: "1º ritorno di Saturno", saturn2: "2º ritorno di Saturno" },
    line6: { l6p1: "Fase 1 · esperienza", l6p2: "Fase 2 · osservazione", l6p3: "Fase 3 · riferimento" },
    now: "OGGI", years: "anni",
    nowTpl: "Oggi hai {age} anni: {phase}",
    phases: {
      sq: "sei ancora nel ciclo dell'imprinting (0–7).",
      eq: "sei nel ciclo emotivo (7–14).",
      iq: "sei nel ciclo mentale (14–21).",
      adult: "i tre cicli di formazione sono completi: ora la Sequenza di Venere si percorre a ritroso, per contemplazione.",
      l6p1: "per la tua Linea 6, sei nella fase dell'esperienza diretta (fino ai ~30).",
      l6p2: "per la tua Linea 6, sei nella fase del ritiro e dell'osservazione (~30–50): non è stallo, è digestione.",
      l6p3: "per la tua Linea 6, sei nella fase del riferimento: ciò che hai attraversato ora è esempio."
    }
  };

  // Meteo del profilo (transiti di oggi)
  const WX = {
    title: "Il meteo del profilo",
    sub: "Dove si trovano i pianeti adesso sulla ruota delle 64 Chiavi, e quali delle tue sfere stanno toccando.",
    inKey: "{body} è nella Chiave {key} ({gift})",
    hitSame: "attiva la tua {sphere}",
    hitMirror: "fa da specchio alla tua {sphere}",
    noHits: "nessun contatto diretto col tuo profilo oggi — clima neutro.",
    moonNote: "La Luna cambia Chiave ogni ~10 ore: il suo contatto è un'onda breve.",
    updated: "calcolato adesso"
  };

  // L'anno solare
  const YR = {
    title: "Il tuo anno",
    sub: "Al ritorno solare — l'istante in cui il Sole torna esattamente sul tuo Sole natale — leggiamo dove si trovano Venere, Marte e Giove: il clima dell'anno in corso.",
    returnAt: "Ritorno solare {year}: {date}",
    inKey: "{body} dell'anno nella Chiave {key} ({gift})",
    hitSame: "— attiva la tua {sphere}",
    hitMirror: "— specchio della tua {sphere}",
    quiet: "quest'anno non tocca direttamente il profilo: tema di fondo, senza urgenza."
  };

  // Sezione anelli
  const RN = {
    title: "I tuoi anelli di codoni",
    sub: "Le 64 Chiavi si raggruppano in 21 anelli (come i codoni del DNA in famiglie). Questi sono gli anelli che le tue 11 sfere toccano.",
    hitTpl: "Chiave {key} ({sphere})",
    ofRing: "dell'anello:",
    touched: "{n} anelli toccati su 21"
  };

  // Almanacco
  const ALM = {
    title: "ALMANACCO DELLE 64 CHIAVI",
    ksuper: "IL CALENDARIO SOLARE · UN ANNO DI CHIAVI",
    sub: "Il Sole attraversa una Chiave ogni ~5,7 giorni: questo è il calendario dei prossimi dodici mesi. Scarica il file ICS e le 64 «stagioni» compaiono nel tuo calendario.",
    today: "OGGI",
    todayTpl: "Oggi il Sole è nella Chiave {key} — {o} → {d} → {s}",
    until: "fino al {date}",
    ics: "Scarica il calendario (ICS)",
    icsName: "ologenetica-almanacco",
    icsEvt: "Sole nella Chiave {key} — {d}",
    icsDesc: "Ombra: {o} → Dono: {d} → Siddhi: {s}. {t}",
    tableFrom: "Dal", tableKey: "Chiave", tableSpectrum: "Spettro"
  };

  // Biblioteca
  const LIB = {
    title: "LE 64 CHIAVI",
    ksuper: "BIBLIOTECA · LO SPETTRO COMPLETO",
    sub: "Tutte le 64 Chiavi dell'I Ching con il loro spettro Ombra → Dono → Siddhi. Da leggere come si visita una biblioteca: una alla volta, senza fretta.",
    ringLbl: "Anello", partnerLbl: "Specchio", lineLbl: "Linee"
  };

  // Poster
  const PST = {
    btn: "Scarica il poster del quadrante (PNG)",
    subtitle: "PROFILO OLOGENETICO",
    linee: "LINEE", croce: "CROCE", making: "Genero il poster…"
  };

  // Ora sconosciuta
  const DS = {
    certain: "CERTA", variable: "VARIABILE",
    note: "Senza l'ora di nascita: {stable} sfere su 11 restano identiche a qualunque ora del giorno; le altre {variable} possono variare (mostrate col calcolo di mezzogiorno).",
    variants: "possibili: {list}"
  };

  window.HOLO_EXTRA = window.HOLO_EXTRA || {};
  window.HOLO_EXTRA.it = { LIS, RINGS, TL, WX, YR, RN, ALM, LIB, PST, DS };
})();

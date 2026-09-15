/* ============================================================
   OLOGENETICA · GUIDA — ITALIANO (master)
   Contenuto della pagina "Come si legge": array di pannelli
   { cls: classe colore del pannello, h: titolo, html: corpo }.
   Le classi cls e la struttura HTML interna vanno mantenute
   identiche nelle traduzioni.
   ============================================================ */
(function () {
  window.HOLO_GUIDE = window.HOLO_GUIDE || {};
  window.HOLO_GUIDE.it = {
    ksuper: "// il manuale, in versione pop",
    title: "COME SI LEGGE (E SI CALCOLA)",
    sub: "Da dove escono quei numeri tipo «26.4»? Cosa sono Ombra, Dono e Siddhi? E perché contano anche i tre mesi prima della nascita? Tutto qui sotto.",
    panels: [
      { cls: "yellow", h: "L'idea in 30 secondi", html: `
<p>Il Profilo Ologenetico è una mappa che unisce tre linguaggi antichi e uno moderno: i <b>64 esagrammi dell'I Ching</b>, la <b>ruota zodiacale</b> dell'astrologia, il calcolo «personalità + design» dello <b>Human Design</b>, e la corrispondenza simbolica con i <b>64 codoni del DNA</b>. Il risultato: 11 sfere della tua vita, ognuna abitata da una delle 64 Chiavi, ognuna con la sua Linea (da 1 a 6).</p>
<p>Non è una gabbia né una profezia: è un <b>invito alla contemplazione</b>. Ogni Chiave descrive uno spettro di frequenze — dal comportamento reattivo (Ombra) al talento (Dono) alla piena fioritura (Siddhi) — e tu decidi, giorno per giorno, a quale altezza suonarla.</p>` },
      { cls: "red", h: "Il calcolo, passo per passo", html: `
<ol class="steps">
<li><b>Momento della nascita → Personalità.</b> Con le effemeridi astronomiche calcoliamo la longitudine eclittica esatta (tropicale) di Sole, Terra, Venere, Marte e Giove nel momento in cui sei nato. Questa è la tua parte <b>conscia</b>: ciò che riconosci come «io».</li>
<li><b>~3 mesi prima → Design.</b> Torniamo indietro fino al momento in cui il Sole si trovava esattamente <b>88° di arco</b> prima della sua posizione di nascita (circa 88-89 giorni). Lì calcoliamo di nuovo Sole, Terra, Luna, Venere, Marte e Giove. Questa è la tua parte <b>inconscia</b>: l'impronta prenatale, ciò che il corpo sa prima che la mente arrivi.</li>
<li><b>Dalla ruota alle Chiavi.</b> I 360° dello zodiaco vengono divisi in <b>64 settori di 5,625°</b>, uno per esagramma. L'ancoraggio è quello standard: l'esagramma 41 inizia a 2°00' dell'Acquario. Ogni pianeta «cade» così dentro una Chiave.</li>
<li><b>Le Linee.</b> Ogni settore è a sua volta diviso in <b>6 Linee da 0,9375°</b>. Ecco perché una sfera si scrive «26.4»: Chiave 26, Linea 4 — il <i>cosa</i> e il <i>come</i>.</li>
<li><b>Dalle posizioni alle Sfere.</b> Ogni sfera del profilo corrisponde a un corpo celeste preciso (tabella qui sotto): il Sole di personalità diventa il Life's Work, la Terra di design il Purpose, la Luna di design l'Attraction, e così via.</li>
</ol>
<div class="mono">settore = 360° ÷ 64 = 5,625°&nbsp;&nbsp;·&nbsp;&nbsp;linea = 5,625° ÷ 6 = 0,9375°<br>design = istante in cui lon(Sole) = lon(Sole alla nascita) − 88°<br>Terra = Sole + 180°&nbsp;&nbsp;·&nbsp;&nbsp;ancora: esagramma 41 → 302° (2° Acquario)</div>` },
      { cls: "", h: "Le 11 Sfere e i loro pianeti", html: `
<table class="stable">
<tr><th>Sfera</th><th>Corpo celeste</th><th>Cosa racconta</th></tr>
<tr><td><span class="sq" style="background:var(--red)"></span>Life's Work</td><td>Sole · natale</td><td>Il tuo genio esteriore: ciò che sei venuto a fare. (Nella Sequenza della Perla si chiama anche «Brand».)</td></tr>
<tr><td><span class="sq" style="background:var(--red)"></span>Evolution</td><td>Terra · natale</td><td>Ciò che la vita ti insegna attraverso le sfide.</td></tr>
<tr><td><span class="sq" style="background:var(--red)"></span>Radiance</td><td>Sole · design</td><td>Ciò che accende vitalità e salute quando lo vivi.</td></tr>
<tr><td><span class="sq" style="background:var(--red)"></span>Purpose</td><td>Terra · design</td><td>Il fondamento profondo: si attiva servendo qualcosa di più grande.</td></tr>
<tr><td><span class="sq" style="background:var(--pink)"></span>Attraction</td><td>Luna · design</td><td>Chi e che cosa attiri nelle relazioni.</td></tr>
<tr><td><span class="sq" style="background:var(--pink)"></span>IQ</td><td>Venere · natale</td><td>Il ciclo mentale dei 14–21 anni: come la mente ha imparato a difendersi.</td></tr>
<tr><td><span class="sq" style="background:var(--pink)"></span>EQ</td><td>Marte · natale</td><td>Il ciclo emotivo dei 7–14 anni: come il cuore ha imparato a reagire.</td></tr>
<tr><td><span class="sq" style="background:var(--pink)"></span>SQ</td><td>Venere · design</td><td>L'imprinting dei primi 7 anni: la radice della fiducia.</td></tr>
<tr><td><span class="sq" style="background:var(--pink)"></span>Core / Vocation</td><td>Marte · design</td><td>La ferita più antica — che, trasformata, diventa vocazione.</td></tr>
<tr><td><span class="sq" style="background:var(--blue)"></span>Culture</td><td>Giove · design</td><td>Il tuo posto nella comunità.</td></tr>
<tr><td><span class="sq" style="background:var(--blue)"></span>Pearl</td><td>Giove · natale</td><td>La ricompensa: la prosperità che arriva quando semplifichi.</td></tr>
</table>` },
      { cls: "teal", h: "Lo spettro: Ombra → Dono → Siddhi", html: `
<p>Ogni Chiave non è un'etichetta ma una <b>banda di frequenze</b>. La stessa energia può essere vissuta a tre altezze:</p>
<div class="spectrum">
<div class="spec o"><div class="t">OMBRA</div><p>La frequenza della paura: il comportamento reattivo, ripetitivo, vittimista. Non è «cattiva» — è energia compressa che chiede attenzione.</p></div>
<div class="spec d"><div class="t">DONO</div><p>La frequenza del talento: quando accogli l'ombra senza reprimerla né sfogarla, la stessa energia si apre e diventa il tuo contributo.</p></div>
<div class="spec s"><div class="t">SIDDHI</div><p>La frequenza della piena fioritura: la promessa più alta della Chiave, rara come un'eclissi. Serve da stella polare, non da obiettivo.</p></div>
</div>
<p style="margin-top:12px">La lettura si fa così: <b>parti sempre dall'Ombra</b>. Chiediti dove quel comportamento ti riguarda (nessuno ne è escluso), osservalo con gentilezza per qualche settimana, e nota come — senza forzare niente — inizia ad affacciarsi il Dono.</p>` },
      { cls: "pink", h: "Le 6 Linee: il tuo stile", html: `
<p>Se la Chiave è il <i>cosa</i>, la Linea è il <i>come</i>. Sono sei archetipi che tornano in tutto il profilo:</p>
<div class="linegrid">
<div class="linecard"><b>Linea 1 — L'Investigatore</b><p>Studia, approfondisce, costruisce fondamenta. Sicurezza = conoscenza.</p></div>
<div class="linecard"><b>Linea 2 — L'Eremita</b><p>Talento naturale che non si vede da sé: fiorisce quando viene chiamato.</p></div>
<div class="linecard"><b>Linea 3 — Lo Sperimentatore</b><p>Impara per prova ed errore: ogni inciampo è materiale prezioso.</p></div>
<div class="linecard"><b>Linea 4 — L'Opportunista</b><p>Vive di relazioni: le occasioni arrivano attraverso le persone.</p></div>
<div class="linecard"><b>Linea 5 — L'Eretico</b><p>Soluzioni pratiche e carisma: attira le proiezioni degli altri.</p></div>
<div class="linecard"><b>Linea 6 — Il Modello</b><p>Tre vite in una: sperimenta, osserva dal tetto, diventa esempio.</p></div>
</div>
<p style="margin-top:12px">Il profilo si firma anche con due Linee, tipo <b>6/2</b>: la prima è la Linea del Sole natale (conscia), la seconda quella del Sole di design (inconscia). Sono lo stile che mostri e lo stile che agisce da solo.</p>` },
      { cls: "blue", h: "Il percorso di lettura consigliato", html: `
<ol>
<li><b>Sequenza di Attivazione</b> (Life's Work → Evolution → Radiance → Purpose): il tuo scopo di vita. Contempla una sfera alla volta, senza fretta.</li>
<li><b>Sequenza di Venere</b> (Attraction → IQ → EQ → SQ → Core): le relazioni come specchio. Si percorre a ritroso nei cicli di 7 anni, fino alla ferita originaria.</li>
<li><b>Sequenza della Perla</b> (Vocation → Culture → Pearl → Brand): la prosperità. Arriva per ultima: prima il chi, poi il come, infine il cosa.</li>
</ol>
<p>Regola d'oro: <b>meglio una Chiave contemplata per un mese che undici lette in una sera.</b> Il profilo non si «consuma»: si abita.</p>` }
    ],
    foot: "Sistema ispirato al Profilo Ologenetico (Gene Keys di Richard Rudd — sintesi di I Ching, astrologia e Human Design). È uno strumento contemplativo e simbolico: non ha rapporto con la genetica né validazione scientifica. Testi originali, per gioco e contemplazione."
  };
})();

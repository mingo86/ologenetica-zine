/* ============================================================
   OLOGENETICA · PACCHETTO LINGUA — ITALIANO (master)
   Ogni Chiave: o=Ombra, d=Dono, s=Siddhi, t=essenza breve,
   long=lettura estesa (2-4 frasi, stile report).
   LINES: n=nome, brevis=sintesi, t=frase, long=lettura estesa.
   SPHERES: per chiave-sfera { n=nome, d=descrizione, ctx=lettura
   della Chiave DENTRO quella sfera }.
   I template usano segnaposto {cosi}: riempiti da fill() nelle pagine.
   Testi originali. Sistema ispirato al Profilo Ologenetico
   (Gene Keys di Richard Rudd: I Ching + astrologia + Human Design).
   ============================================================ */
(function () {

  const KEYS = {
    1:  { o: "Entropia", d: "Freschezza", s: "Bellezza", t: "L'energia creativa allo stato puro: attraversa i momenti grigi e ne riemerge creando bellezza dal nulla.",
      long: "L'1 è la Chiave della creatività individuale: l'urgenza di esprimere qualcosa che prima non esisteva. L'ombra è l'entropia — i cicli grigi in cui l'energia ristagna e tutto sembra senza scopo; combatterli li allunga, attraversarli li trasforma. Il dono è la freschezza: chi accetta i propri inverni creativi riemerge con un'espressione che rinnova l'aria intorno." },
    2:  { o: "Disorientamento", d: "Orientamento", s: "Unità", t: "La bussola interiore: sa in che direzione sta andando la vita anche quando non c'è nessuna mappa.",
      long: "Il 2 è la bussola: conosce la direzione senza saperla spiegare. In ombra il contatto si perde: ci si disorienta e si chiede agli altri la rotta, adattandosi a mappe non proprie. Il dono è l'orientamento — fidarsi del proprio nord interno e lasciare che le decisioni si allineino da sole." },
    3:  { o: "Caos", d: "Innovazione", s: "Innocenza", t: "Vede l'ordine nascosto dentro il disordine e lo trasforma in qualcosa che prima non esisteva.",
      long: "Il 3 sta sulla soglia del nuovo: tutto ciò che nasce passa da qui, disordinato per natura. L'ombra è il caos subìto: la vita come emergenza continua. Il dono è l'innovazione — usare il disordine come materia prima e trovare la combinazione che nessuno aveva provato. Le routine perfette lo spengono: ha bisogno di mutazione." },
    4:  { o: "Intolleranza", d: "Comprensione", s: "Perdono", t: "La mente che cerca risposte: quando smette di giudicare, inizia a capire davvero.",
      long: "Il 4 è la mente che formula risposte: logica veloce, spiegazioni pronte. L'ombra è l'intolleranza: scambiare la propria risposta per l'unica e liquidare chi non la vede. Il dono è la comprensione — la stessa lucidità messa al servizio delle domande degli altri, con la pazienza di chi sa che ogni risposta è provvisoria." },
    5:  { o: "Impazienza", d: "Pazienza", s: "Atemporalità", t: "Il ritmo naturale delle cose: fidarsi dei tempi della vita invece di forzarli.",
      long: "Il 5 custodisce i ritmi naturali: sa che ogni cosa ha la sua stagione. L'ombra è l'impazienza — forzare i tempi, vivere in anticipo sul presente, logorarsi nell'attesa. Il dono è la pazienza vera: non rassegnazione ma fiducia attiva nei cicli. Agire quando è il momento, e non un minuto prima." },
    6:  { o: "Conflitto", d: "Diplomazia", s: "Pace", t: "L'arte di trasformare gli attriti in incontri: la pelle emotiva che sente l'atmosfera di ogni stanza.",
      long: "Il 6 è la pelle emotiva del profilo: sente l'atmosfera di ogni stanza e il punto esatto dove le persone si urtano. L'ombra è il conflitto: reattività a fior di pelle, muri alzati per difendersi. Il dono è la diplomazia — usare la stessa sensibilità per abbassare le difese altrui e trasformare gli attriti in incontri." },
    7:  { o: "Divisione", d: "Guida", s: "Virtù", t: "La leadership che indica la rotta senza imporla: gli altri la seguono perché si fidano.",
      long: "Il 7 è la guida che opera dal fianco: vede la rotta del gruppo prima del gruppo. L'ombra è la divisione — imporre la direzione, creare fazioni, comandare per insicurezza. Il dono è la guida autentica: indicare la strada e lasciare che gli altri scelgano di percorrerla. È l'autorità che non ha bisogno di gradi." },
    8:  { o: "Mediocrità", d: "Stile", s: "Squisitezza", t: "Il coraggio di fare le cose a modo proprio: il contributo che nessun altro può dare.",
      long: "L'8 è la Chiave del contributo individuale: portare al mondo qualcosa che sia inconfondibilmente proprio. L'ombra si chiama mediocrità e non significa scarsa qualità: significa conformità — smussare ciò che si ha di particolare per non perdere l'appartenenza. Il dono è lo stile: la firma riconoscibile che dà agli altri il permesso di essere particolari a loro volta." },
    9:  { o: "Inerzia", d: "Determinazione", s: "Invincibilità", t: "La forza dei piccoli passi: mettere l'energia sul dettaglio giusto finché il grande si compie da sé.",
      long: "Il 9 è la potenza del dettaglio: dedicarsi alle piccole cose che fanno riuscire le grandi. L'ombra è l'inerzia: disperdersi nel minuscolo sbagliato, o rimandare per sfinimento. Il dono è la determinazione — scegliere il dettaglio giusto e restarci finché il quadro intero non si compone da sé." },
    10: { o: "Ossessione di sé", d: "Naturalezza", s: "Essere", t: "Amarsi così come si è: quando smette di recitare un ruolo, tutto si semplifica.",
      long: "Il 10 è l'amore di sé: il comportamento che nasce dall'essere semplicemente ciò che si è. L'ombra è l'ossessione di sé — recitare un personaggio, correggersi di continuo, cercarsi negli occhi altrui. Il dono è la naturalezza: quando smette di interpretarsi, la vita intorno si semplifica in modo quasi sospetto." },
    11: { o: "Oscurità", d: "Idealismo", s: "Luce", t: "Un flusso continuo di immagini e sogni che chiedono di diventare storie e visioni condivise.",
      long: "L'11 è il produttore di immagini: idee, sogni e visioni in flusso continuo. L'ombra è l'oscurità: accumulare immagini senza mai sceglierne una, confondere il fantasticare con il vivere. Il dono è l'idealismo — dare forma alle immagini e offrirle come storie che accendono gli altri. Non tutte le visioni sono da realizzare: la maggior parte è da raccontare." },
    12: { o: "Vanità", d: "Selettività", s: "Purezza", t: "Parla solo quando conta: la voce che, nel momento giusto, tocca il cuore di chi ascolta.",
      long: "Il 12 è la voce rara: parla poco e tocca in profondità. L'ombra è la vanità — usare l'espressione per essere ammirati, o tacere per orgoglio ferito. Il dono è la selettività: il discernimento su quando parlare, con chi e con quali parole. La stessa frase, nel momento giusto, cambia una giornata; nel momento sbagliato, cade nel vuoto." },
    13: { o: "Discordia", d: "Discernimento", s: "Empatia", t: "L'ascoltatore nato: raccoglie le storie di tutti e ne custodisce la memoria.",
      long: "Il 13 è l'orecchio del mondo: le persone gli raccontano cose che non dicono a nessuno. L'ombra è la discordia — ascoltare filtrando col proprio metro, accumulare segreti come pesi o come armi. Il dono è il discernimento: distinguere nelle storie ciò che conta, custodirlo e restituirlo come memoria condivisa." },
    14: { o: "Compromesso", d: "Competenza", s: "Munificenza", t: "Il talento che prospera solo quando lavora per ciò che ama: allora le risorse arrivano.",
      long: "Il 14 è la ricchezza come conseguenza: energia che fruttifica quando lavora per ciò che ama. L'ombra è il compromesso — vendere le proprie ore a ciò che non scalda, e chiamarlo realismo. Il dono è la competenza: quando direzione interiore e lavoro coincidono, le risorse arrivano come sottoprodotto, non come obiettivo." },
    15: { o: "Aridità", d: "Magnetismo", s: "Fioritura", t: "L'amore per la varietà della vita: una calamita naturale per persone ed esperienze di ogni tipo.",
      long: "Il 15 è la Chiave dell'estremo: ritmi irregolari, periodi pieni e periodi vuoti, l'oscillazione come norma e non come guasto. L'ombra è l'aridità — vivere i periodi spenti come fallimento personale e forzarsi verso una regolarità che a questa Chiave non appartiene. Il dono è il magnetismo: accettato il ritmo, i picchi diventano irresistibili e i vuoti diventano preparazione. Il danno non lo fa l'oscillazione: lo fa la lotta contro l'oscillazione." },
    16: { o: "Indifferenza", d: "Versatilità", s: "Maestria", t: "L'entusiasmo che, ripetuto con dedizione ogni giorno, si trasforma in arte.",
      long: "Il 16 è l'entusiasmo che si fa mestiere: identifica un talento e ci si getta. L'ombra è l'indifferenza — saltare di entusiasmo in entusiasmo senza approfondirne nessuno. Il dono è la versatilità: la ripetizione quotidiana che trasforma lo slancio in maestria. Diecimila ore che non pesano, perché il gesto è amato." },
    17: { o: "Opinione", d: "Lungimiranza", s: "Onniscienza", t: "L'occhio che vede il quadro grande prima degli altri e sa dove porterà la strada.",
      long: "Il 17 è l'occhio che organizza il futuro: vede pattern e traiettorie prima degli altri. L'ombra è l'opinione — trincerarsi dietro il proprio punto di vista e difenderlo come un'identità. Il dono è la lungimiranza: offrire la propria visione come servizio, sapendo che una previsione è utile solo se qualcuno può usarla." },
    18: { o: "Giudizio", d: "Integrità", s: "Perfezione", t: "Lo sguardo che nota subito cosa non funziona: corregge per migliorare, non per ferire.",
      long: "Il 18 è il correttore: vede all'istante ciò che non funziona, in un sistema o in una persona. L'ombra è il giudizio — la critica che ferisce, rivolta agli altri o rivolta dentro come autocritica cronica. Il dono è l'integrità: la stessa precisione usata per riparare ciò che si ama, non per condannarlo." },
    19: { o: "Co-dipendenza", d: "Sensibilità", s: "Sacrificio", t: "Antenne finissime per i bisogni degli altri: sente ciò che serve prima che venga chiesto.",
      long: "Il 19 è il sensore dei bisogni: sente ciò che serve agli altri — cibo, contatto, riconoscimento — prima che venga chiesto. L'ombra è la co-dipendenza: rendersi indispensabili, comprare vicinanza con la cura. Il dono è la sensibilità: toccare i bisogni veri senza annegarci, restando una persona e non una funzione." },
    20: { o: "Superficialità", d: "Sicurezza di sé", s: "Presenza", t: "Il qui e ora: la capacità di agire nel momento esatto in cui serve, senza esitare.",
      long: "Il 20 è il presente puro: per questa Chiave esiste solo il qui e ora. L'ombra è la superficialità — attività continua senza consapevolezza, parole che escono prima del pensiero. Il dono è la sicurezza di sé: l'azione perfettamente sincronizzata col momento, senza prove generali. La presenza che non ha bisogno di prepararsi." },
    21: { o: "Controllo", d: "Autorità", s: "Valore", t: "Il coraggio di prendere in mano le situazioni: governa risorse e territori con cuore nobile.",
      long: "Il 21 è il guardiano: difende un perimetro — risorse, territorio, persone. L'ombra è il controllo esercitato sulle persone: microgestione, presa che soffoca. Il dono è l'autorità — prendersi responsabilità reale su qualcosa e risponderne. L'antidoto al controllo non è mollare tutto: è delegare autorità vera, l'unica cosa che il controllo non sa fare." },
    22: { o: "Disonore", d: "Gentilezza", s: "Grazia", t: "La gentilezza che resta gentile anche dentro le emozioni più forti: un'eleganza dell'anima.",
      long: "Il 22 è la grazia sotto pressione: la gentilezza che attraversa le emozioni più violente. L'ombra è il disonore — quando l'onda emotiva travolge, si dicono le parole che non si possono ritirare. Il dono è la gentilezza: sentire tutto, fino in fondo, e scegliere comunque il gesto che onora l'altro." },
    23: { o: "Complessità", d: "Semplicità", s: "Quintessenza", t: "Il dono di dire la cosa giusta con le parole più semplici: taglia il superfluo.",
      long: "Il 23 è la semplificazione: mettere in parole ciò che gli altri non riescono a formulare. L'ombra è la complessità — spiegare troppo, avvolgere il pensiero in strati e non essere capiti; oppure parlare fuori tempo, ottenendo rifiuto invece di comprensione. Il dono: dire la cosa in una frase, al momento giusto, e fermarsi. Ogni frase aggiuntiva sposta il 23 verso l'ombra." },
    24: { o: "Dipendenza", d: "Invenzione", s: "Silenzio", t: "La mente che ritorna sugli stessi pensieri finché, in una pausa di silenzio, trova la svolta.",
      long: "Il 24 è la mente che ritorna: rimugina sugli stessi pensieri in cerca di una via d'uscita. L'ombra è la dipendenza — il loop che gira a vuoto: pensieri, sostanze, persone, qualunque cosa prometta di chiudere il cerchio. Il dono è l'invenzione: nella pausa tra un giro e l'altro, quando la mente tace un istante, entra l'idea nuova." },
    25: { o: "Costrizione", d: "Accettazione", s: "Amore universale", t: "Il cuore che impara ad amare senza condizioni: ogni ferita diventa un'apertura.",
      long: "Il 25 è l'amore senza oggetto: la capacità di amare ciò che c'è, non ciò che si vorrebbe. L'ombra è la costrizione — il cuore che si chiude dopo le ferite e raziona l'affetto. Il dono è l'accettazione: ogni ferita attraversata allarga lo spazio interno, finché l'amore smette di scegliere i destinatari." },
    26: { o: "Orgoglio", d: "Ingegnosità", s: "Invisibilità", t: "Il venditore nato: sa arrivare dove vuole con astuzia, tempismo e un sorriso.",
      long: "Il 26 è l'arte del passaggio: sa vendere, convincere, abbreviare la strada. L'ombra è l'orgoglio — piegare la verità per gonfiare la propria immagine. Il dono è l'ingegnosità: la stessa astuzia messa al servizio di qualcosa che merita. Il messaggero perfetto: consegna, e scompare." },
    27: { o: "Egoismo", d: "Altruismo", s: "Dono di sé", t: "Prendersi cura: l'istinto di nutrire e proteggere tutto ciò che deve ancora crescere.",
      long: "Il 27 è il nutrimento: l'istinto di prendersi cura di ciò che deve crescere. L'ombra è l'egoismo — nutrire solo il proprio orto, o nutrire gli altri per fame di gratitudine. Il dono è l'altruismo: dare ciò che serve, a chi serve, quando serve. Senza tenere il conto." },
    28: { o: "Mancanza di scopo", d: "Totalità", s: "Immortalità", t: "Giocarsi tutto per ciò che dà senso alla vita: preferisce il rischio al rimpianto.",
      long: "Il 28 è il giocatore di dadi: preferisce il rischio al rimpianto. L'ombra è la mancanza di scopo — rincorrere brividi per non sentire il vuoto, o non rischiare mai nulla. Il dono è la totalità: scegliere ciò per cui vale la pena giocarsi tutto, e viverlo senza riserve. La vita come posta, non come attesa." },
    29: { o: "Tiepidezza", d: "Impegno", s: "Devozione", t: "Il sì detto con tutto il corpo: quando si impegna, va fino in fondo al ciclo.",
      long: "Il 29 è il sì che impegna: quando questa Chiave dice sì, ci va con tutto il corpo. L'ombra è la tiepidezza — sì detti a metà, impegni presi per compiacere e abbandonati a metà ciclo. Il dono è l'impegno: scegliere poco, ma andarci fino in fondo. La persistenza che attraversa anche i tratti bui del ciclo." },
    30: { o: "Bramosia", d: "Leggerezza", s: "Rapimento", t: "Il fuoco del desiderio che impara a scaldare senza bruciare: intensità che diventa gioia.",
      long: "Il 30 è il fuoco del desiderio: brama intensità, esperienze, sentire. L'ombra è la bramosia — il desiderio che consuma e non si sazia mai: un fuoco che brucia la casa. Il dono è la leggerezza: desiderare intensamente senza pretendere che l'oggetto del desiderio salvi la vita. Il fuoco nel camino, non nel tetto." },
    31: { o: "Arroganza", d: "Leadership", s: "Umiltà", t: "La voce che il gruppo sceglie di ascoltare: influenza chi la circonda, nel bene o nel male.",
      long: "Il 31 è la voce e l'influenza: guidare parlando. L'ombra è l'arroganza — parlare da una posizione, per il proprio interesse, usando l'influenza come leva personale. Il dono è la leadership specifica del 31: dire ciò che il gruppo già sente ma non ha ancora formulato. Non guida perché comanda: guida perché nomina." },
    32: { o: "Fallimento", d: "Conservazione", s: "Venerazione", t: "L'istinto per ciò che merita di durare: riconosce il valore e lo protegge nel tempo.",
      long: "Il 32 è l'istinto di conservazione: riconosce ciò che merita di durare. L'ombra è la paura del fallimento — trattenere tutto, non rischiare nulla, confondere prudenza e paralisi. Il dono è la conservazione attiva: distinguere ciò che va custodito da ciò che va lasciato andare. La memoria lunga che rende possibile l'evoluzione." },
    33: { o: "Dimenticanza", d: "Consapevolezza", s: "Rivelazione", t: "Il ritiro fertile: si apparta per trasformare le esperienze vissute in saggezza.",
      long: "Il 33 è il ritiro e la memoria: raccontare ciò che si è attraversato, così che altri non debbano attraversarlo alla cieca. L'ombra è la dimenticanza — passare attraverso le esperienze senza estrarne nulla, e quindi ripeterle. Il dono è la consapevolezza, e richiede il ritiro come condizione tecnica: senza una fase di silenzio, il materiale resta grezzo." },
    34: { o: "Prepotenza", d: "Vigore", s: "Maestà", t: "La pura energia vitale: una forza enorme, magnifica quando segue la propria strada.",
      long: "Il 34 è la pura potenza: energia vitale abbondante e indipendente. L'ombra è la prepotenza — forza applicata dove non serve, nel momento sbagliato, per dimostrare qualcosa. Il dono è il vigore: la stessa potenza che fluisce quando segue la propria strada senza chiedere spettatori. Magnifica proprio perché non deve dimostrare niente." },
    35: { o: "Fame", d: "Avventura", s: "Sconfinatezza", t: "La voglia di provare tutto almeno una volta: il progresso nasce dalla curiosità.",
      long: "Il 35 è la fame di esperienza: tutto va provato almeno una volta. L'ombra è la fame senza fondo — cambiare per noia, collezionare esperienze come figurine e restare affamati. Il dono è l'avventura: scegliere le esperienze per ciò che insegnano, non per riempire un vuoto. Il progresso come conseguenza della curiosità." },
    36: { o: "Turbolenza", d: "Umanità", s: "Compassione", t: "Le tempeste emotive attraversate diventano esperienza: nessuno capisce gli altri così a fondo.",
      long: "Il 36 è la tempesta emotiva: attraversa crisi che altri evitano. L'ombra è la turbolenza — cercare il dramma, o esserne travolti a ogni ciclo. Il dono è l'umanità: le tempeste attraversate diventano esperienza condivisa. Nessuno capisce una crisi come chi ne ha già attraversate, ed è tornato." },
    37: { o: "Debolezza", d: "Uguaglianza", s: "Tenerezza", t: "Il collante della famiglia e delle comunità: calore, lealtà e accordi che tengono.",
      long: "Il 37 è il patto familiare: il calore che tiene insieme le persone. L'ombra è la debolezza — accordi ingoiati per quieto vivere, ruoli subiti per paura di perdere il posto a tavola. Il dono è l'uguaglianza: patti chiari e affetto leale. La famiglia — di sangue o scelta — come luogo dove nessuno deve comprarsi il posto." },
    38: { o: "Lotta", d: "Perseveranza", s: "Onore", t: "Il guerriero che non molla: combatte soltanto per le cose che valgono davvero.",
      long: "Il 38 è il guerriero: nato per lottare, sta bene solo quando la lotta vale. L'ombra è la lotta cieca — combattere tutto, sempre, anche ciò che non merita; o combattere le battaglie altrui. Il dono è la perseveranza: scegliere le cause giuste e non mollarle mai, con l'onore di chi combatte pulito." },
    39: { o: "Provocazione", d: "Dinamismo", s: "Liberazione", t: "Il pungolo che sveglia l'energia bloccata: provoca per liberare, non per ferire.",
      long: "Il 39 è il provocatore: punge dove l'energia è bloccata. L'ombra è la provocazione fine a sé stessa — irritare per esistere, testare i limiti altrui per noia. Il dono è il dinamismo: la provocazione chirurgica che libera ciò che era fermo. Nelle persone, nei gruppi, nelle situazioni incagliate." },
    40: { o: "Esaurimento", d: "Risolutezza", s: "Volontà divina", t: "La forza del no: lavora sodo e sa quando fermarsi, difendendo il proprio spazio.",
      long: "Il 40 è la forza del no: lavora sodo e difende il proprio spazio di recupero. L'ombra è l'esaurimento — dire sì per senso del dovere fino a svuotarsi, e poi ritirarsi con rancore. Il dono è la risolutezza: dare molto, dentro confini chiari. Il no detto in tempo salva tutti i sì futuri." },
    41: { o: "Fantasia", d: "Anticipazione", s: "Emanazione", t: "Il punto di partenza di ogni ciclo: sente il nuovo arrivare prima che sia visibile.",
      long: "Il 41 è il seme di ogni nuova esperienza: la pressione a fare qualcosa mai fatto prima — la Chiave che apre l'intera ruota dei 64. In ombra è fantasia: immaginare la vita invece di viverla. È un'ombra insidiosa, perché ogni possibilità immaginata dà una piccola dose della soddisfazione che darebbe realizzarla. Il dono è l'anticipazione: sentire il futuro che preme, e fargli spazio nei fatti." },
    42: { o: "Aspettativa", d: "Distacco", s: "Celebrazione", t: "Portare a termine i cicli e chiuderli con gratitudine, senza trattenere niente.",
      long: "Il 42 è il compimento: la Chiave che porta i cicli alla loro fine naturale. L'ombra è l'aspettativa — restare aggrappati a come le cose sarebbero dovute andare, trascinando cicli già finiti. Il dono è il distacco: chiudere con gratitudine, raccogliere il frutto e lasciare l'albero. Ogni fine ben fatta finanzia l'inizio successivo." },
    43: { o: "Sordità", d: "Visione interiore", s: "Epifania", t: "L'intuizione anticonformista: idee che arrivano dal silenzio e spiazzano tutti.",
      long: "Il 43 è l'intuizione anticonformista: sa cose che non sa spiegare, in anticipo sui tempi. L'ombra è la sordità — chiudersi nella propria frequenza e non farsi capire, o non ascoltare più nessuno. Il dono è la visione interiore: tradurre l'intuizione in una forma che gli altri possano ricevere, accettando che il mondo arrivi con qualche anno di ritardo." },
    44: { o: "Interferenza", d: "Spirito di squadra", s: "Sinarchia", t: "Il fiuto per le persone: riconosce al volo chi è giusto per quale ruolo.",
      long: "Il 44 è il fiuto per le persone: riconosce al primo sguardo chi è adatto a cosa. L'ombra è l'interferenza — usare questo talento per manovrare, o restare intrappolati nei fantasmi dei tradimenti passati. Il dono è lo spirito di squadra: mettere ogni persona nel ruolo dove fiorisce. Il talent scout naturale di ogni gruppo." },
    45: { o: "Dominanza", d: "Sinergia", s: "Comunione", t: "Radunare le risorse e ridistribuirle perché l'intera comunità prosperi.",
      long: "Il 45 è il sovrano delle risorse: raduna e distribuisce. L'ombra è la dominanza — accumulare potere e risorse come un diritto di nascita, comandare dall'alto. Il dono è la sinergia: orchestrare le risorse perché l'intera comunità prosperi. La leadership che misura il proprio successo dalla prosperità degli altri." },
    46: { o: "Serietà", d: "Delizia", s: "Estasi", t: "La fortuna di chi abita il proprio corpo: si trova nel posto giusto al momento giusto.",
      long: "Il 46 è l'amore per il corpo: la fortuna di chi abita davvero la propria carne. L'ombra è la serietà — vivere nella testa, trattare il corpo come un mezzo di trasporto, arrivare sempre un attimo dopo il momento giusto. Il dono è la delizia: la presenza fisica piena che mette, apparentemente per caso, nel posto giusto al momento giusto." },
    47: { o: "Oppressione", d: "Trasmutazione", s: "Trasfigurazione", t: "L'alchimista della memoria: trasforma i ricordi pesanti in oro interiore.",
      long: "Il 47 è l'alchimista della memoria: lavora il passato finché non rende oro. L'ombra è l'oppressione — i ricordi pesanti che girano in loop e schiacciano il presente. Il dono è la trasmutazione: gli stessi ricordi, compostati col tempo, diventano la materia prima della propria profondità." },
    48: { o: "Inadeguatezza", d: "Ingegnosità", s: "Saggezza", t: "Il pozzo profondo: dentro ha una risorsa per ogni problema, anche se teme di non bastare.",
      long: "Il 48 è il pozzo: profondità che c'è già, ma di cui si dubita. L'ombra è la paura di non essere abbastanza, e produce due comportamenti opposti e ugualmente bloccanti: rimandare all'infinito perché mai abbastanza pronti, oppure accumulare formazione e titoli per riempire un vuoto che non è vuoto. Il dono è l'ingegnosità, con un meccanismo controintuitivo: la profondità si manifesta sotto pressione, non prima. Non si diventa adeguati e poi si agisce; si agisce, e si scopre di esserlo." },
    49: { o: "Reattività", d: "Rivoluzione", s: "Rinascita", t: "Cambia le regole quando non servono più le persone: principi prima delle abitudini.",
      long: "Il 49 è il rivoluzionario: cambia le regole quando non servono più le persone. L'ombra è la reattività — rompere i patti d'impulso, tagliare i ponti come prima risposta. Il dono è la rivoluzione vera: rinegoziare i principi al momento giusto, portando con sé chi ci sta. Le rotture che aprono ere, invece di lasciare macerie." },
    50: { o: "Corruzione", d: "Equilibrio", s: "Armonia", t: "Il custode dei valori: sente la responsabilità di ciò che protegge la comunità.",
      long: "Il 50 è il custode dei valori: sente sulla pelle la responsabilità di ciò che protegge la comunità. L'ombra è la corruzione — piegare i valori all'interesse, o caricarsi di responsabilità non proprie fino a schiacciarsi. Il dono è l'equilibrio: aggiornare le regole che proteggono davvero. L'etica come cosa viva, non come museo." },
    51: { o: "Agitazione", d: "Iniziativa", s: "Risveglio", t: "Lo scossone che apre strade nuove: il primo a osare dove nessuno è ancora andato.",
      long: "Il 51 è lo shock che risveglia: il primo a varcare la soglia che spaventa tutti. L'ombra è l'agitazione — cercare l'adrenalina per sentirsi vivi, scioccare per abitudine. Il dono è l'iniziativa: il coraggio di andare per primi dove nessuno è andato. E tornare a raccontare che si può." },
    52: { o: "Stress", d: "Moderazione", s: "Quiete", t: "La montagna immobile: la concentrazione ferma che riesce a vedere lontano.",
      long: "Il 52 è la montagna: fermo, concentrato, vede lontano proprio perché non si muove. L'ombra è lo stress — l'energia trattenuta che vibra sul posto: la tensione di chi vorrebbe agire ovunque e non agisce da nessuna parte. Il dono è la moderazione: scegliere il punto esatto dove concentrare l'energia, e lasciar perdere tutto il resto." },
    53: { o: "Immaturità", d: "Espansione", s: "Sovrabbondanza", t: "L'iniziatore: semina inizi ovunque, e non tutti i semi dovrà coltivarli da sé.",
      long: "Il 53 è la Chiave degli inizi e della crescita graduale: la spinta a cominciare qualcosa di nuovo, e la disciplina di lasciarlo crescere con i suoi tempi. L'ombra è l'immaturità, e ha una forma precisa: cominciare senza portare a termine — saltare a un nuovo inizio proprio quando il precedente entra nella fase noiosa, quella in cui però avviene la crescita vera. Il dono è l'espansione: sviluppo per gradi, senza forzare le fasi." },
    54: { o: "Avidità", d: "Aspirazione", s: "Ascensione", t: "L'ambizione che sale: la spinta materiale che, purificata, diventa elevazione.",
      long: "Il 54 è il motore dell'ascesa: la spinta a salire, materialmente e non solo. In ombra è avidità — accumulare come sostituto del salire davvero. Il dono è l'aspirazione: la stessa forza orientata verso l'alto invece che verso il più. La differenza non sta nell'intensità, che resta identica: sta nell'oggetto." },
    55: { o: "Vittimismo", d: "Libertà", s: "Libertà assoluta", t: "Lo spirito libero: impara a cavalcare le emozioni come onde invece di subirle come catene.",
      long: "Il 55 è lo spirito in cerca di libertà: la Chiave delle emozioni come onde. L'ombra è il vittimismo — credere che l'umore dipenda da fuori: da qualcuno, da qualcosa, dalla fortuna. Il dono è la libertà: cavalcare le onde emotive senza identificarsi né con la cresta né con il cavo. L'umore come meteo, non come identità." },
    56: { o: "Distrazione", d: "Arricchimento", s: "Ebbrezza", t: "Il narratore: trasforma il fiume degli stimoli in storie che nutrono chi ascolta.",
      long: "Il 56 è il narratore errante: raccoglie stimoli e li trasforma in storie. L'ombra è la distrazione — inseguire stimoli sempre nuovi senza digerirne nessuno. Il dono è l'arricchimento: le esperienze diventano racconto che nutre chi ascolta. Il viaggio vale per come viene raccontato, non per i chilometri." },
    57: { o: "Inquietudine", d: "Intuizione", s: "Chiarezza", t: "L'orecchio più fine: percepisce ciò che sta per accadere un attimo prima degli altri.",
      long: "Il 57 è l'orecchio più fine: percepisce ciò che sta per accadere un attimo prima degli altri. L'ombra è l'inquietudine — l'ansia di fondo di chi sente troppo e non si fida di ciò che sente. Il dono è l'intuizione: la chiarezza istantanea che non passa dal ragionamento. Da ascoltare subito, perché non si ripete." },
    58: { o: "Insoddisfazione", d: "Vitalità", s: "Beatitudine", t: "La gioia di vivere che vuole migliorare il mondo: energia che zampilla come una fonte.",
      long: "Il 58 è la fonte di gioia: vitalità che zampilla e vuole migliorare le cose. L'ombra è l'insoddisfazione — il critico interno che trova il difetto in tutto e non è mai contento. Il dono è la vitalità: la stessa energia che, invece di lamentare il difetto, si mette a ripararlo. Con una gioia contagiosa nel farlo." },
    59: { o: "Disonestà", d: "Intimità", s: "Trasparenza", t: "Abbatte le barriere tra le persone: il suo talento è creare legami veri.",
      long: "Il 59 è l'abbattitore di barriere: nato per l'intimità vera. L'ombra è la disonestà — le strategie usate per avvicinarsi: sedurre, compiacere, manovrare. Ottengono contatto, e impediscono l'incontro. Il dono è l'intimità: la trasparenza che disarma, l'avvicinarsi senza maschere che dà agli altri il coraggio di fare lo stesso." },
    60: { o: "Limitazione", d: "Realismo", s: "Giustizia", t: "I limiti come struttura: sa che la magia ha bisogno di una forma per manifestarsi.",
      long: "Il 60 è la struttura: sa che la magia ha bisogno di forma. L'ombra è la limitazione — vivere i vincoli come condanna, mormorare contro le regole restandone prigionieri. Il dono è il realismo: accettare i limiti come le sponde che danno forza al fiume. Dentro un vincolo accettato, l'energia si concentra e crea." },
    61: { o: "Psicosi", d: "Ispirazione", s: "Santità", t: "Il mistero: la mente innamorata delle domande a cui nessuno sa rispondere.",
      long: "Il 61 è il mistero: la mente innamorata delle domande senza risposta. L'ombra è la pressione psichica — il bisogno compulsivo di sapere, che ai suoi estremi diventa delirio di certezza. Il dono è l'ispirazione: sostare nell'ignoto senza pretendere risposte. E ricevere, ogni tanto, un lampo che non si era chiesto." },
    62: { o: "Intelletto", d: "Precisione", s: "Impeccabilità", t: "Il dettaglio esatto: dà il nome preciso alle cose e rende chiaro il complicato.",
      long: "Il 62 è la precisione: dà il nome esatto alle cose. L'ombra è l'intelletto — perdersi nei dettagli, sommergere di dati, scambiare l'accuratezza per la verità. Il dono è la precisione al servizio del senso: il dettaglio giusto che rende chiaro il complicato. L'arte di dire esattamente ciò che serve, e nient'altro." },
    63: { o: "Dubbio", d: "Indagine", s: "Verità", t: "Il dubbio fertile: la domanda che non si accontenta e spinge avanti la conoscenza.",
      long: "Il 63 è il dubbio fertile: la domanda che non si accontenta. L'ombra è il dubbio corrosivo — sospettare di tutto, di tutti e soprattutto di sé, senza mai concludere. Il dono è l'indagine: trasformare il sospetto in domande precise, e le domande in verifiche. Il motore di ogni conoscenza che avanza." },
    64: { o: "Confusione", d: "Immaginazione", s: "Illuminazione", t: "Il caleidoscopio: mille immagini in cerca di senso, finché la luce si accende da sola.",
      long: "Il 64 è il caleidoscopio: una pressione costante di immagini in cerca di senso. L'ombra è la confusione — cercare di ordinare il flusso con la forza, e affogarci. Il dono è l'immaginazione: lasciare che le immagini si compongano da sole. La comprensione arriva d'improvviso, intera, quando si smette di forzarla." }
  };

  const LINES = {
    1: { n: "L'Investigatore", brevis: "fondamenta", t: "Ha bisogno di capire a fondo prima di agire: studia, approfondisce, costruisce basi solide.",
      long: "La Linea 1 costruisce dal basso: prima di agire deve capire, studiare, toccare le fondamenta. La sua sicurezza nasce dalla conoscenza — quando le basi sono solide nulla la sposta; quando mancano, l'ansia la immobilizza. Il rischio è prepararsi per sempre e non partire mai." },
    2: { n: "L'Eremita", brevis: "talento naturale", t: "Il talento gli scorre addosso in modo naturale, ma tende a non vederlo: fiorisce quando viene chiamato.",
      long: "La Linea 2 significa naturale, non allenato: il talento funziona da sé quando il contesto lo lascia funzionare, e si guasta quando lo si forza o lo si mette sotto osservazione. Non si vede da sé: ha bisogno di essere riconosciuto e chiamato — e risponde solo alle chiamate sincere." },
    3: { n: "Lo Sperimentatore", brevis: "prova ed errore", t: "Impara sbattendoci contro: ogni tentativo «fallito» è materiale prezioso. Impossibile da fermare a lungo.",
      long: "La Linea 3 impara per prova ed errore: la competenza si costruisce sui tentativi falliti, che sono materiale e non incidenti. Ha una cattiva reputazione immeritata: produce la solidità più concreta che esista, perché è l'unica costruita per esperienza diretta invece che per teoria." },
    4: { n: "L'Opportunista", brevis: "rete e cuore", t: "Vive di relazioni: le occasioni gli arrivano attraverso le persone che conosce.",
      long: "La Linea 4 è relazionale: tutto — occasioni, lavoro, amore — passa dalla rete di persone che coltiva. Il suo dono è la fedeltà del suo tessuto sociale; il suo rischio è smussarsi per non perderlo. Le transizioni le riescono solo se il ramo nuovo è già pronto prima di lasciare il vecchio." },
    5: { n: "L'Eretico", brevis: "soluzioni pratiche", t: "Gli altri proiettano su di lui grandi aspettative: la sua soluzione pratica al momento giusto salva la situazione.",
      long: "La Linea 5 attira proiezioni: gli altri le attribuiscono poteri, colpe e aspettative che non ha chiesto. Il suo talento è la soluzione pratica offerta al momento giusto — salvare la situazione e poi ritirarsi, perché restare troppo sotto i riflettori trasforma l'aureola in bersaglio." },
    6: { n: "Il Modello", brevis: "visione d'insieme", t: "Tre vite in una: sperimenta, poi osserva dal tetto del mondo, infine diventa esempio.",
      long: "La Linea 6 non è un tratto: è un calendario in tre fasi. Fino ai ~30 anni, esperienza diretta, errori, cicatrici. Dai ~30 ai ~50, ritiro e osservazione — un periodo che quasi tutti i 6 vivono male perché somiglia a uno stallo, mentre è digestione. Poi la terza fase: si diventa riferimento. Chiede pazienza col proprio stesso calendario." }
  };

  // Nomi canonici delle sfere (inglesi, come nei report ufficiali) + testi
  const SPHERES = {
    lavoro:     { n: "Life's Work",   d: "Il tuo genio esteriore: ciò che sei venuto a fare, il ruolo che il mondo vede.",
      ctx: "Sul Life's Work questa energia è il mestiere dell'anima: il ruolo visibile, ciò per cui verrai riconosciuto. È la stessa sfera che, vista da fuori, la Sequenza della Perla chiama Brand." },
    evoluzione: { n: "Evolution",     d: "La sfida centrale: ciò che la vita ti insegna attraverso le difficoltà.",
      ctx: "Come Evolution, è la sfida centrale del profilo: il tema che la vita ripropone a spirale, ogni volta un giro più su. Non è un difetto da correggere — è il percorso." },
    radianza:   { n: "Radiance",      d: "Ciò che accende la tua vitalità: quando la vivi, salute e presenza si irradiano.",
      ctx: "Come Radiance è una sfera del Design, quindi inconscia: agisce prima di essere scelta, e si vede addosso. Vissuta in dono accende vitalità e salute; trattenuta in ombra, le spegne." },
    scopo:      { n: "Purpose",       d: "Il fondamento profondo: si attiva quando servi qualcosa di più grande di te.",
      ctx: "Come Purpose è il fondamento inconscio: si attiva quando ciò che fai serve qualcosa di più grande di te. Finché non accade, qualcosa continua sordamente a mancare." },
    attrazione: { n: "Attraction",    d: "Chi e che cosa attiri nelle relazioni: la porta d'ingresso dei tuoi legami.",
      ctx: "Come Attraction governa ciò che attiri: le persone che arrivano portano in scena esattamente questo tema, finché non lo riconosci come tuo." },
    iq:         { n: "IQ",            d: "Il ciclo mentale dei 14–21 anni: come la tua mente ha imparato a difendersi e a brillare.", age: "14–21 anni",
      ctx: "Come IQ è il punto cieco mentale, formato tra i 14 e i 21 anni: la difesa intellettuale costruita nell'adolescenza, che da adulti si scambia per «il mio modo di pensare»." },
    eq:         { n: "EQ",            d: "Il ciclo emotivo dei 7–14 anni: come il tuo cuore ha imparato a reagire e ad aprirsi.", age: "7–14 anni",
      ctx: "Come EQ è il ciclo emotivo dei 7–14 anni: il modo in cui il cuore ha imparato a reagire. La difesa emotiva che oggi scatta da sola, prima di ogni decisione." },
    sq:         { n: "SQ",            d: "L'imprinting dei primi 7 anni — il Punto d'Amore: la radice della fiducia.", age: "0–7 anni",
      ctx: "Come SQ è l'imprinting dei primi 7 anni — il Punto d'Amore: la memoria più profonda del corpo, dove si è deciso quanto ci si può fidare dell'amore." },
    nucleo:     { n: "Core / Vocation", d: "La ferita più antica — e, trasformata, la tua vocazione.",
      ctx: "Come Core è la ferita centrale, associata ai nove mesi di gestazione; come Vocation è la stessa Chiave rovesciata: la medicina che porti è fatta del materiale della tua ferita." },
    cultura:    { n: "Culture",       d: "Il tuo posto nella comunità: come prosperi dentro un gruppo e cosa gli porti.",
      ctx: "Come Culture è il contributo al collettivo: il posto naturale nella comunità, che si rivela quando la ferita del Core è già stata attraversata." },
    perla:      { n: "Pearl",         d: "La ricompensa: la prosperità che arriva quando semplifichi.",
      ctx: "Come Pearl è la ricompensa: la prosperità che arriva quando semplifichi. Non un premio da inseguire — un sottoprodotto della semplicità." }
  };

  const SEQ = {
    attivazione: { n: "Sequenza di Attivazione", sub: "I QUATTRO DONI PRIMARI",
      d: "Si calcola dal Sole ed è la base del profilo: va contemplata per prima, perché tutto il resto ci poggia sopra. L'asse conscio (Life's Work / Evolution) e quello inconscio (Radiance / Purpose) sono due motori distinti che spingono lo stesso veicolo — e la loro distanza è il motore del profilo." },
    venere: { n: "Sequenza di Venere", sub: "IL PIANO EMOTIVO",
      d: "Luna, Venere e Marte. Si legge a ritroso: dall'Attraction — il risultato adulto visibile — giù per i cicli di sette anni (IQ 14–21, EQ 7–14, SQ 0–7) fino al Core, la ferita più antica. È la mappa per aprire ciò che si era chiuso." },
    perla: { n: "Sequenza della Perla", sub: "IL PIANO MENTALE E LA PROSPERITÀ",
      d: "Costruita su Giove, la Chiave dell'espansione. Parte dal Core — dalla ferita già attraversata — e mostra come diventa servizio e prosperità: Vocation, Culture, Pearl, e il Brand che chiude il cerchio sul Life's Work. Non funziona se saltata: la Perla presuppone la Venere." }
  };

  const SIGNS = ["Ariete","Toro","Gemelli","Cancro","Leone","Vergine","Bilancia","Scorpione","Sagittario","Capricorno","Acquario","Pesci"];
  const BODIES = { sun: "Sole", earth: "Terra", moon: "Luna", venus: "Venere", mars: "Marte", jupiter: "Giove" };
  const LBL = {
    natale: "natale", design: "design",
    tSfera: "Sfera", tPianeta: "Pianeta", tChiave: "Chiave", tPosizione: "Posizione",
    nascita: "Nascita", designDate: "Design", linee: "Linee", croce: "Croce d'incarnazione",
    ombra: "Ombra", dono: "Dono", siddhi: "Siddhi", linea: "Linea",
    strutturaTitle: "La struttura in breve",
    sogliaTitle: "Un dato al limite: {from} o {to}",
    sogliaText: "La sfera {sphere} si calcola su un corpo veloce e cade vicino a un confine di Linea. Soglia calcolata: {time}. Nascita prima di quell'ora → {from}; a quell'ora o dopo → {to}. La Chiave resta la stessa: cambia il come, non il cosa.",
    sogliaStable: "Le altre sfere reggono a ±30 minuti senza spostarsi.",
    noTimeWarn: "Senza l'ora di nascita la sfera dell'Attraction (Luna) è approssimata e le Linee delle sfere veloci possono variare."
  };

  // Sintesi strutturale (template con segnaposto)
  const STRUCT = {
    croce: "Croce d'incarnazione {ps}/{pe} | {ds}/{de}. L'asse conscio ({ps}/{pe}) parla di {giftPS} e {giftPE}; quello inconscio ({ds}/{de}) di {giftDS} e {giftDE}. Due motori distinti che spingono lo stesso veicolo.",
    asse: "L'asse {a}/{b}. Life's Work ed Evolution sono sempre opposti sulla ruota, e la coppia va letta insieme: il genio della {giftA} e la sfida della {shadowB} sono i due poli dello stesso asse — sciogliere la seconda libera il primo.",
    double: "Chiave {key} ×{n}. La stessa Chiave compare su {spheres}: il tema della {gift} (e della sua ombra, {shadow}) non è un lato del profilo — è il tema. Viene rimesso in scena da ogni sfera che lo ospita.",
    mirror: "Il canale {keyA} ↔ {keyB}. Due Chiavi opposte sulla ruota occupano {sphereA} e {sphereB}: {giftA} e {giftB} sono due metà della stessa funzione, viste da due sfere diverse. Dove una si blocca, l'altra si irrigidisce; dove una fiorisce, l'altra si scioglie.",
    domLine: "{n} sfere in Linea {line}. L'indicazione si ripete {n} volte: {hint}",
    lineHints: {
      1: "le cose migliori qui nascono da fondamenta studiate — prima capire, poi agire.",
      2: "le cose migliori qui non si producono: si lasciano accadere in condizioni protette, senza forzarle né osservarle troppo.",
      3: "le cose migliori qui passano dal tentativo: l'errore è il metodo, non l'incidente.",
      4: "le cose migliori qui passano dalle persone: la rete non è un contorno, è il canale.",
      5: "le cose migliori qui sono soluzioni pratiche offerte al momento giusto — e poi il ritiro, prima che l'aureola diventi bersaglio.",
      6: "le cose migliori qui hanno un calendario lungo: fasi da rispettare, non tappe da bruciare."
    },
    starts: "Molti inizi, pochi finali. {keys} occupano {n} delle undici sfere: la spinta a partire è abbondante{unconscious}. Le Chiavi orientate al completamento sono {ends}: questo profilo non ha un problema di energia — ha un tema di durata.",
    startsNoEnds: "Molti inizi, pochi finali. {keys} occupano {n} delle undici sfere: la spinta a partire è abbondante{unconscious} — e nessuna Chiave del profilo è orientata al completamento. La struttura va costruita, deliberatamente, sul finire.",
    startsUnconscious: " e in gran parte inconscia",
    profLines: "Linee {a}/{b}"
  };

  // Testi della compatibilità (titoli/corpi con segnaposto + coppie di Linee)
  const MATCH = {
    types: { gemella: "chiave gemella", risonanza: "risonanza", specchio: "chiavi specchio", ponte: "ponte di linea", passo: "stesso passo" },
    gemellaTitle: "Chiave {key} gemella — entrambi in {sphere}",
    gemellaText: "Sulla sfera «{sphere}» avete la stessa identica Chiave: il dono della {gift} è un linguaggio che parlate tutti e due. Vi riconoscete — e vi specchiate anche nell'ombra della {shadow}: siate gentili con ciò che vi somiglia.",
    risonanzaTitle: "Chiave {key} condivisa — {sphereA} ↔ {sphereB}",
    risonanzaText: "La Chiave {key} è il «{sphereA}» di {nameA} e il «{sphereB}» di {nameB}: lo stesso dono ({gift}) vissuto da due angolazioni diverse. Ottimo terreno comune.",
    specchioTitle: "Specchio {keyA} ↔ {keyB} — {sphereA} / {sphereB}",
    specchioText: "Le Chiavi {keyA} e {keyB} sono partner di programmazione: due metà dello stesso asse della ruota. {nameA} porta la {giftA}, {nameB} la {giftB}: ognuno tiene in mano il pezzo che all'altro serve per completare il quadro.",
    ponteTitle: "Ponte di Linea {a}-{b} — armonia geometrica",
    ponteText: "Le Linee {a} e {b} sono in armonia naturale (come 1-4, 2-5, 3-6 nell'esagramma): stili diversi che si incastrano senza sforzo.",
    passoTitle: "Stesso passo — entrambi Linea {line} ({lineName})",
    passoText: "Affrontate la vita con lo stesso stile: {brevis}. Vi capite senza spiegazioni — il rovescio è che condividete anche gli stessi punti ciechi.",
    noConn: "Nessuna connessione geometrica diretta: siete una coppia «a ponti costruiti a mano». Guardate il confronto degli stili qui sotto — è lì che si gioca tutto.",
    verdicts: {
      alta:  { label: "RISONANZA RARA", t: "I vostri profili si intrecciano in più punti: una di quelle connessioni che sembrano scritte prima di nascere. Il lavoro è non addormentarsi sugli allori: ogni Chiave condivisa è anche un'ombra condivisa." },
      buona: { label: "GRANDE ALLEANZA", t: "Diversi fili collegano i vostri profili: c'è riconoscimento, e c'è anche abbastanza differenza da imparare l'uno dall'altra. Un legame che cresce nel tempo." },
      media: { label: "INCONTRO FERTILE", t: "Qualche punto di contatto e molto territorio nuovo: la relazione funziona se la curiosità resta più forte del bisogno di sentirsi uguali." },
      bassa: { label: "MONDI DIVERSI", t: "Pochi agganci diretti tra i profili: non è un no — è un invito. Le coppie senza risonanze automatiche costruiscono i loro ponti a mano, e quelli tengono più di tutti." }
    },
    lineIntro: "{nameA} è Linea {la} ({lineA}), {nameB} è Linea {lb} ({lineB}).",
    linepair: {
      "1-1": "Due Investigatori: casa piena di libri e di domande. Vi capite al volo, ma ricordatevi ogni tanto di uscire dalla tana e vivere le risposte.",
      "1-2": "L'Investigatore studia, l'Eremita sa senza sapere perché. Se il primo non interroga troppo il secondo, nasce una quiete molto fertile.",
      "1-3": "Teoria e pratica: uno legge il manuale, l'altro lo butta e prova. Insieme coprite l'intero ciclo dell'apprendimento.",
      "1-4": "Ponte naturale: le fondamenta dell'Investigatore trovano nella rete dell'Opportunista il pubblico che meritano. Coppia che costruisce.",
      "1-5": "Le basi solide di uno danno credibilità alle soluzioni dell'altro. Attenti solo alle aspettative che il mondo carica sull'Eretico.",
      "1-6": "Il Modello vede il panorama, l'Investigatore i mattoni. Se vi fidate a vicenda, costruite qualcosa che dura tre generazioni.",
      "2-2": "Due Eremiti: il rischio è che nessuno bussi alla porta dell'altro. Ma quando succede, è una delle intimità più naturali dello spettro.",
      "2-3": "Lo Sperimentatore trascina fuori l'Eremita, l'Eremita gli offre un porto tranquillo. Scambio silenzioso ma nutriente.",
      "2-4": "L'Opportunista è bravissimo a chiamare, l'Eremita aspetta solo la chiamata giusta. Se la chiamata è sincera, funziona a meraviglia.",
      "2-5": "Ponte naturale: il talento spontaneo dell'Eremita e il tempismo pratico dell'Eretico si completano senza sforzo.",
      "2-6": "Il Modello riconosce il talento dell'Eremita meglio di chiunque altro — e l'Eremita si lascia vedere solo da chi lo rispetta davvero.",
      "3-3": "Due Sperimentatori: vita movimentata, zero noia, molti lividi. Il segreto è ridere insieme degli esperimenti falliti.",
      "3-4": "Le scoperte di uno viaggiano sulla rete dell'altro. Coppia sociale e concreta, che impara in fretta e condivide volentieri.",
      "3-5": "Entrambi pratici e concreti: uno scopre cosa NON funziona, l'altro offre la soluzione. Squadra da situazioni difficili.",
      "3-6": "Ponte naturale: il Modello è uno Sperimentatore che ha già vissuto quella fase. Comprensione profonda dei tentativi dell'altro.",
      "4-4": "Due reti che si intrecciano: amicizie, contatti, comunità. La relazione fiorisce se restate anche l'uno il migliore amico dell'altra.",
      "4-5": "Il cuore dell'Opportunista e il carisma dell'Eretico: coppia influente, amata dal gruppo. Proteggete uno spazio solo vostro.",
      "4-6": "L'Opportunista tesse i legami, il Modello dà l'esempio: insieme siete il punto di riferimento della vostra cerchia.",
      "5-5": "Due Eretici: il mondo vi proietta addosso di tutto. In due, le proiezioni si dimezzano: siete il rifugio l'uno dell'altra.",
      "5-6": "Praticità e visione: l'Eretico risolve l'oggi, il Modello tiene la rotta sul domani. Leadership di coppia.",
      "6-6": "Due Modelli sul tetto del mondo: relazione che matura come il vino — e che intorno ai 50 anni diventa esempio per tutti gli altri."
    }
  };

  window.HOLO_LANGS = window.HOLO_LANGS || {};
  window.HOLO_LANGS.it = { KEYS, LINES, SPHERES, SEQ, SIGNS, BODIES, LBL, STRUCT, MATCH };
  if (!window.HOLO_DATA) window.HOLO_DATA = window.HOLO_LANGS.it;
})();

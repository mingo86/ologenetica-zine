/* ============================================================
   OLOGENETICA · PAQUETE EXTRA — ESPAÑOL
   Contenidos de las secciones avanzadas:
   · LIS  — la Línea DENTRO de la esfera (11 esferas × 6 Líneas = 66 lecturas)
   · RINGS — los 21 Anillos de codones (nombre + esencia)
   · TL   — línea de tiempo de los ciclos personales
   · WX   — el clima del perfil (tránsitos)
   · YR   — el año solar
   · RN   — sección de anillos
   · ALM  — almanaque de las 64 Llaves
   · LIB  — biblioteca de las 64 Llaves
   · PST  — póster del cuadrante
   · DS   — modo «hora desconocida»
   Las plantillas usan marcadores {asi}. Textos originales.
   ============================================================ */
(function () {

  // La Línea dentro de la esfera: LIS[esfera][linea]
  const LIS = {
    lavoro: {
      1: "Tu genio se construye como una biblioteca: te vuelves maestro de lo que has estudiado a fondo, y el mundo te reconoce la autoridad de los cimientos.",
      2: "Tu genio es natural: trabaja mejor cuando nadie lo observa. Las llamadas sinceras lo sacan a la luz; las presiones lo apagan.",
      3: "Tu genio se forja equivocándose: cada oficio lo aprendes desmontándolo. El currículum de verdad son los intentos.",
      4: "Tu genio pasa por las personas: la carrera es tu red. Las mejores oportunidades llegan de quien ya te conoce.",
      5: "Tu genio es la solución práctica: el mundo te llama cuando las cosas arden — y proyecta sobre ti más de lo que pides.",
      6: "Tu genio madura por fases: pruebas hasta los ~30, observación hasta los ~50, después autoridad. No adelantes el calendario."
    },
    evoluzione: {
      1: "El desafío te pide cimientos: el crecimiento pasa por el estudio paciente de lo que te asusta, no por saltártelo.",
      2: "El desafío te alcanza solo: no lo busques. Creces cuando respondes únicamente a las llamadas que se te parecen.",
      3: "El desafío está hecho de choques: cada fracaso en el tema es un tramo del camino, no una condena.",
      4: "El desafío se juega en las relaciones cercanas: el tema se presenta a través de las personas que te importan.",
      5: "El desafío trae proyecciones: los demás te verán como causa o como salvación. Aprende a devolver lo que no es tuyo.",
      6: "El desafío tiene tres estaciones: primero lo vives, luego lo observas, al final lo enseñas. La comprensión plena llega en la tercera."
    },
    radianza: {
      1: "La vitalidad se enciende en la profundidad: te recarga comprender. Un día entero estudiando lo que amas vale unas vacaciones.",
      2: "La vitalidad es espontánea pero reservada: se enciende en los espacios protegidos y se apaga bajo observación.",
      3: "La vitalidad ama el choque: el cuerpo se enciende haciendo, probando, rehaciendo. Lo «correcto en teoría» te apaga.",
      4: "La vitalidad es relacional: te recargan las personas adecuadas. La red no es ocio — es salud.",
      5: "La vitalidad se enciende resolviendo: cuando tu sentido práctico sirve de verdad, el cuerpo responde.",
      6: "La vitalidad sigue las estaciones largas: respeta la fase en la que estás. Forzar la fase equivocada cuesta salud."
    },
    scopo: {
      1: "El propósito se activa sirviendo con el conocimiento: cuando lo que has estudiado sostiene algo más grande que tú.",
      2: "El propósito te encuentra: se activa cuando algo más grande llama a tu talento natural por su nombre.",
      3: "El propósito se construye sobre los intentos: pon al servicio los errores que ya has pagado, y otros no los pagarán.",
      4: "El propósito pasa por la comunidad: se activa dentro de un tejido de personas, nunca en solitario.",
      5: "El propósito es práctico: se activa cuando tu solución sirve a muchos, no solo a ti.",
      6: "El propósito florece tarde y a lo grande: la tercera fase de la vida es su territorio natural."
    },
    attrazione: {
      1: "Atraes a quien busca solidez: tus relaciones empiezan despacio y duran mucho. Confía en los tiempos de construcción.",
      2: "Atraes sin buscar: las personas adecuadas te encuentran en tu guarida. No te muestres más — deja que te encuentre quien mira de verdad.",
      3: "Atraes por experiencia: las relaciones son experimentos, y la maestría se construye sobre los fracasos — material, no accidentes.",
      4: "Atraes a través de la red: los amores llegan de las amistades. El vínculo nace del tejido social que ya existe.",
      5: "Atraes proyecciones: quien llega ve en ti lo que necesita. Las relaciones de verdad empiezan cuando cae la aureola.",
      6: "Atraes con tu ejemplo: en las relaciones buscas el cuadro completo — y las tres fases de la vida cambian lo que atraes."
    },
    iq: {
      1: "Tu mente se defendió estudiando: saber era seguridad. El punto ciego: creer que comprender basta para vivir.",
      2: "Tu mente adolescente funcionaba sola — y quizá nadie la reconoció. El punto ciego: seguir esperando ese reconocimiento.",
      3: "Tu mente aprendió equivocándose en voz alta: el punto ciego es castigarte por los errores que son tu método.",
      4: "Tu mente se formó en el grupo: pensar era pertenecer. El punto ciego: confundir el consenso con la verdad.",
      5: "Tu mente aprendió a resolver para los demás: el punto ciego es la necesidad de que la solución sea aplaudida.",
      6: "Tu mente mira desde arriba desde siempre: el punto ciego es observar la vida en lugar de vivirla."
    },
    eq: {
      1: "Tu corazón se protegió con las reglas: saber «cómo se hace» calmaba. Hoy se abre donde encuentra claridad.",
      2: "Tu corazón solo se abría en los lugares seguros: hoy todavía necesita guaridas. Respétalas, sin tener que justificarlas.",
      3: "Tu corazón aprendió de los golpes: las emociones se entienden atravesándolas, no previniéndolas.",
      4: "Tu corazón late en el grupo: la exclusión es la herida, la pertenencia la medicina — y la trampa.",
      5: "Tu corazón aprendió a cargar con todo: de niño resolvías tú. Hoy puede dejar el papel de bombero.",
      6: "Tu corazón observa antes de abrirse: no es frialdad — es el calendario largo de la confianza."
    },
    sq: {
      1: "En los primeros años la confianza necesitaba tierra firme: ritos, repeticiones, presencias seguras. Sigue siendo tu raíz.",
      2: "En los primeros años bastaba ser visto sin tener que pedirlo: la raíz de la confianza es quien te encontró sin que llamaras.",
      3: "En los primeros años el mundo se aprendía tocándolo: caer y levantarse es tu primera lengua.",
      4: "En los primeros años la casa eran las personas: la raíz de la confianza es el calor del círculo cercano.",
      5: "En los primeros años sentías las expectativas de los adultos: la raíz es aprender que el amor no se gana resolviendo.",
      6: "En los primeros años lo mirabas todo desde un paso atrás: la raíz es la confianza de quien observa antes de entrar."
    },
    nucleo: {
      1: "La herida pide ser estudiada: la vocación nace excavando tu propia profundidad hasta el fondo.",
      2: "La herida permaneció mucho tiempo invisible — incluso para ti. La vocación nace cuando dejas que alguien la vea.",
      3: "La herida se ha repetido mil veces: la vocación es el arte destilado de todos esos intentos.",
      4: "La herida tiene que ver con la pertenencia: la vocación es crear para otros el lugar que a ti te faltó.",
      5: "La herida es el peso de las proyecciones: la vocación es servir sin cargar con lo que no es tuyo.",
      6: "La herida se comprende a distancia: la vocación llega cuando dejas de combatirla y la cuentas desde arriba."
    },
    cultura: {
      1: "En la comunidad eres los cimientos: quien estudia, verifica y custodia el saber del grupo.",
      2: "En la comunidad eres la reserva natural: el talento que el grupo llama cuando hace falta — y que hay que proteger del desgaste.",
      3: "En la comunidad eres quien ya lo ha probado: el explorador que vuelve con el mapa de los errores.",
      4: "En la comunidad eres el tejedor: mantienes vivos los hilos entre las personas. Sin ti el grupo es una suma; contigo, un cuerpo.",
      5: "En la comunidad eres la referencia práctica: el grupo prospera cuando tu solución circula — y tú cuando después te retiras.",
      6: "En la comunidad eres el tejado: la visión larga que el grupo consulta en las encrucijadas."
    },
    perla: {
      1: "La prosperidad llega desde la profundidad: se te paga por lo que sabes de verdad, cuando dejas de malvenderlo confusamente.",
      2: "La prosperidad llega si te dejas encontrar: el mercado adecuado te llama — el marketing forzado te devalúa.",
      3: "La prosperidad llega de los intentos reciclados: cada fracaso se convierte en know-how valioso.",
      4: "La prosperidad pasa por la red: el trabajo llega de quien confía en ti, no de los desconocidos.",
      5: "La prosperidad llega resolviendo: reduce tu oferta a una solución clara y el valor se vuelve evidente.",
      6: "La prosperidad madura tarde y bien: las siembras largas rinden más que cualquier atajo."
    }
  };

  // Los 21 Anillos de codones: nombre + esencia
  const RINGS = {
    fire:        { n: "Anillo del Fuego",                  t: "La chispa creativa que fecunda la materia." },
    water:       { n: "Anillo del Agua",                   t: "La dirección y la contribución: saber hacia dónde va la corriente." },
    lifedeath:   { n: "Anillo de la Vida y la Muerte",     t: "Los ciclos de nacer, nutrir y soltar." },
    union:       { n: "Anillo de la Unión",                t: "El vínculo: cómo las personas se encuentran de verdad." },
    light:       { n: "Anillo de la Luz",                  t: "La mente luminosa: visiones, ritmos e ideas." },
    alchemy:     { n: "Anillo de la Alquimia",             t: "Transformar el plomo de los recuerdos en oro." },
    humanity:    { n: "Anillo de la Humanidad",            t: "El amor que madura a través de las pruebas humanas." },
    trials:      { n: "Anillo de las Pruebas",             t: "La expresión que se afina en los exámenes de la vida." },
    purification:{ n: "Anillo de la Purificación",         t: "La escucha y el deseo que se vuelven límpidos." },
    seeking:     { n: "Anillo de la Búsqueda",             t: "El impulso de buscar: ascender, iniciar, mejorar." },
    prosperity:  { n: "Anillo de la Prosperidad",          t: "Talento y recursos que se multiplican juntos." },
    matter:      { n: "Anillo de la Materia",              t: "La profundidad encarnada: cuerpo, oficio, raíces." },
    gaia:        { n: "Anillo de Gaia",                    t: "Las necesidades de la tierra y de sus criaturas." },
    origin:      { n: "Anillo del Origen",                 t: "La semilla de todo: el codón inicial de la rueda." },
    whirlwind:   { n: "Anillo del Torbellino",             t: "Las revoluciones emocionales que cambian de era." },
    illuminati:  { n: "Anillo de los Iluminados",          t: "El instinto y los valores que guían a los equipos." },
    illusion:    { n: "Anillo de la Ilusión",              t: "Riesgo y memoria: qué merece de verdad la apuesta." },
    miracles:    { n: "Anillo de los Milagros",            t: "La curiosidad y la duda que abren lo posible." },
    noreturn:    { n: "Anillo del No Retorno",             t: "La palabra dicha: influencia y precisión." },
    secrets:     { n: "Anillo de los Secretos",            t: "La gracia escondida en las tormentas del corazón." },
    divinity:    { n: "Anillo de la Divinidad",            t: "La potencia y la intuición en estado puro." }
  };

  // Línea de tiempo de los ciclos
  const TL = {
    title: "Tu línea de tiempo de los ciclos",
    sub: "Los ciclos de desarrollo de la Secuencia de Venus, el retorno de Saturno y — para las Líneas 6 — las tres fases de la vida, calculados sobre tus fechas reales.",
    segs: { sq: "SQ · imprinting", eq: "EQ · corazón", iq: "IQ · mente" },
    marks: { saturn1: "1.º retorno de Saturno", saturn2: "2.º retorno de Saturno" },
    line6: { l6p1: "Fase 1 · experiencia", l6p2: "Fase 2 · observación", l6p3: "Fase 3 · referencia" },
    now: "HOY", years: "años",
    nowTpl: "Hoy tienes {age} años: {phase}",
    phases: {
      sq: "todavía estás en el ciclo del imprinting (0–7).",
      eq: "estás en el ciclo emocional (7–14).",
      iq: "estás en el ciclo mental (14–21).",
      adult: "los tres ciclos de formación están completos: ahora la Secuencia de Venus se recorre hacia atrás, en contemplación.",
      l6p1: "por tu Línea 6, estás en la fase de la experiencia directa (hasta los ~30).",
      l6p2: "por tu Línea 6, estás en la fase del retiro y la observación (~30–50): no es estancamiento, es digestión.",
      l6p3: "por tu Línea 6, estás en la fase de la referencia: lo que has atravesado ahora es ejemplo."
    }
  };

  // El clima del perfil (tránsitos de hoy)
  const WX = {
    title: "El clima del perfil",
    sub: "Dónde están los planetas ahora mismo sobre la rueda de las 64 Llaves, y cuáles de tus esferas están tocando.",
    inKey: "{body} está en la Llave {key} ({gift})",
    hitSame: "activa tu {sphere}",
    hitMirror: "hace de espejo a tu {sphere}",
    noHits: "ningún contacto directo con tu perfil hoy — clima neutro.",
    moonNote: "La Luna cambia de Llave cada ~10 horas: su contacto es una ola breve.",
    updated: "calculado ahora mismo"
  };

  // El año solar
  const YR = {
    title: "Tu año",
    sub: "En el retorno solar — el instante en que el Sol vuelve exactamente sobre tu Sol natal — leemos dónde están Venus, Marte y Júpiter: el clima del año en curso.",
    returnAt: "Retorno solar {year}: {date}",
    inKey: "{body} del año en la Llave {key} ({gift})",
    hitSame: "— activa tu {sphere}",
    hitMirror: "— espejo de tu {sphere}",
    quiet: "este año no toca directamente el perfil: tema de fondo, sin urgencia."
  };

  // Sección de anillos
  const RN = {
    title: "Tus anillos de codones",
    sub: "Las 64 Llaves se agrupan en 21 anillos (como los codones del ADN en familias). Estos son los anillos que tocan tus 11 esferas.",
    hitTpl: "Llave {key} ({sphere})",
    ofRing: "del anillo:",
    touched: "{n} anillos tocados de 21"
  };

  // Almanaque
  const ALM = {
    title: "ALMANAQUE DE LAS 64 LLAVES",
    ksuper: "EL CALENDARIO SOLAR · UN AÑO DE LLAVES",
    sub: "El Sol atraviesa una Llave cada ~5,7 días: este es el calendario de los próximos doce meses. Descarga el archivo ICS y las 64 «estaciones» aparecerán en tu calendario.",
    today: "HOY",
    todayTpl: "Hoy el Sol está en la Llave {key} — {o} → {d} → {s}",
    until: "hasta el {date}",
    ics: "Descargar el calendario (ICS)",
    icsName: "ologenetica-almanaque",
    icsEvt: "Sol en la Llave {key} — {d}",
    icsDesc: "Sombra: {o} → Don: {d} → Siddhi: {s}. {t}",
    tableFrom: "Desde", tableKey: "Llave", tableSpectrum: "Espectro"
  };

  // Biblioteca
  const LIB = {
    title: "LAS 64 LLAVES",
    ksuper: "BIBLIOTECA · EL ESPECTRO COMPLETO",
    sub: "Las 64 Llaves del I Ching con su espectro Sombra → Don → Siddhi. Para leer como se visita una biblioteca: de una en una, sin prisa.",
    ringLbl: "Anillo", partnerLbl: "Espejo", lineLbl: "Líneas"
  };

  // Póster
  const PST = {
    btn: "Descargar el póster del cuadrante (PNG)",
    subtitle: "PERFIL HOLOGENÉTICO",
    linee: "LÍNEAS", croce: "CRUZ", making: "Generando el póster…"
  };

  // Hora desconocida
  const DS = {
    certain: "SEGURA", variable: "VARIABLE",
    note: "Sin la hora de nacimiento: {stable} esferas de 11 permanecen idénticas a cualquier hora del día; las otras {variable} pueden variar (mostradas con el cálculo del mediodía).",
    variants: "posibles: {list}"
  };

  window.HOLO_EXTRA = window.HOLO_EXTRA || {};
  window.HOLO_EXTRA.es = { LIS, RINGS, TL, WX, YR, RN, ALM, LIB, PST, DS };
})();

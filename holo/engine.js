/* ============================================================
   OLOGENETICA · ENGINE (indipendente dalla lingua)
   Calcola il Profilo Ologenetico da data/ora/luogo di nascita.
   Dipende da: window.Astronomy (astronomy-engine, browser build)

   Come funziona il calcolo:
   1. PERSONALITÀ = posizioni eclittiche al momento della nascita.
   2. DESIGN = posizioni a 88° di arco solare PRIMA della nascita
      (~3 mesi prima: l'impronta prenatale).
   3. Ruota di 360° divisa in 64 settori di 5,625° (uno per
      esagramma). Ancoraggio standard: esagramma 41 a 302°
      (2°00' Acquario). Ogni settore ha 6 Linee di 0,9375°.
   4. Ogni Sfera = un corpo celeste (natale o design) → Chiave.Linea.

   API:
     HOLO.compute(input)   -> profilo
     HOLO.analyze(R)       -> struttura (doppie, specchi, linee...)
     HOLO.stability(input) -> sfere vicine a un confine di Linea (±30')
   input = {year,month,day,hour,minute,tz}
   ============================================================ */
(function () {
  const A = window.Astronomy;
  const norm360 = x => ((x % 360) + 360) % 360;
  const wrap180 = x => { x = norm360(x); return x > 180 ? x - 360 : x; };

  // Ordine zodiacale dei 64 esagrammi dall'ancora (41 @ 302°). Standard HD.
  const WHEEL = [
    41, 19, 13, 49, 30, 55, 37, 63, 22, 36,
    25, 17, 21, 51, 42, 3, 27, 24, 2, 23, 8, 20, 16, 35, 45, 12,
    15, 52, 39, 53, 62, 56, 31, 33, 7, 4, 29, 59, 40, 64, 47, 6,
    46, 18, 48, 57, 32, 50, 28, 44, 1, 43, 14, 34, 9, 5, 26, 11,
    10, 58, 38, 54, 61, 60
  ];
  const ANCHOR = 302, SECTOR = 360 / 64, LINE_W = SECTOR / 6;
  const KEY_AT = i => WHEEL[((i % 64) + 64) % 64];
  const IDX_OF = {}; WHEEL.forEach((k, i) => { IDX_OF[k] = i; });
  function partnerOf(key) { return KEY_AT(IDX_OF[key] + 32); }

  // Struttura delle 11 sfere: k, sequenza, corpo, calcolo (lingua a parte)
  const SPHERE_DEF = [
    { k: "lavoro",     seq: "attivazione", body: "sun",     glyph: "☉", calc: "personalita" },
    { k: "evoluzione", seq: "attivazione", body: "earth",   glyph: "⊕", calc: "personalita" },
    { k: "radianza",   seq: "attivazione", body: "sun",     glyph: "☉", calc: "design" },
    { k: "scopo",      seq: "attivazione", body: "earth",   glyph: "⊕", calc: "design" },
    { k: "attrazione", seq: "venere",      body: "moon",    glyph: "☽", calc: "design" },
    { k: "iq",         seq: "venere",      body: "venus",   glyph: "♀", calc: "personalita" },
    { k: "eq",         seq: "venere",      body: "mars",    glyph: "♂", calc: "personalita" },
    { k: "sq",         seq: "venere",      body: "venus",   glyph: "♀", calc: "design" },
    { k: "nucleo",     seq: "venere",      body: "mars",    glyph: "♂", calc: "design" },
    { k: "cultura",    seq: "perla",       body: "jupiter", glyph: "♃", calc: "design" },
    { k: "perla",      seq: "perla",       body: "jupiter", glyph: "♃", calc: "personalita" }
  ];

  // Chiavi "d'inizio" e "di completamento" (per la sintesi strutturale)
  const START_KEYS = [41, 53, 51, 3, 54];
  const END_KEYS = [21, 33, 42, 32, 52];

  function keyOf(lon) {
    const off = norm360(lon - ANCHOR);
    const idx = Math.floor(off / SECTOR);
    const inSector = off - idx * SECTOR;
    const line = Math.min(6, Math.floor(inSector / LINE_W) + 1);
    return { key: KEY_AT(idx), line, lon: norm360(lon), idx };
  }

  // --- fuso orario: ora locale (wall clock) -> UTC, con DST storico ---
  function tzOffsetMinutes(tz, date) {
    const dtf = new Intl.DateTimeFormat("en-US", {
      timeZone: tz, hour12: false,
      year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", second: "2-digit"
    });
    const p = {};
    for (const part of dtf.formatToParts(date)) p[part.type] = part.value;
    let h = +p.hour; if (h === 24) h = 0;
    const asUTC = Date.UTC(+p.year, +p.month - 1, +p.day, h, +p.minute, +p.second);
    return (asUTC - date.getTime()) / 60000;
  }
  function zonedToUTC(y, mo, d, h, mi, tz) {
    let guess = Date.UTC(y, mo - 1, d, h, mi, 0);
    let off = tzOffsetMinutes(tz, new Date(guess));
    let utc = guess - off * 60000;
    off = tzOffsetMinutes(tz, new Date(utc));
    utc = guess - off * 60000;
    return { date: new Date(utc), offsetMin: off };
  }

  function eclipticLon(bodyKey, date) {
    const gv = A.GeoVector(bodyKey, date, true);
    return norm360(A.Ecliptic(gv).elon);
  }

  // Design: Sole a −88° d'arco dalla posizione natale (Newton, ~10 iterazioni)
  function designDate(birthDate, birthSunLon) {
    const target = norm360(birthSunLon - 88);
    let t = new Date(birthDate.getTime() - 89 * 86400000);
    for (let i = 0; i < 12; i++) {
      const err = wrap180(target - eclipticLon("Sun", t));
      if (Math.abs(err) < 1e-6) break;
      t = new Date(t.getTime() + (err / 0.9856) * 86400000);
    }
    return t;
  }

  function fmtDeg(inSignDeg) {
    const d = Math.floor(inSignDeg);
    const m = Math.round((inSignDeg - d) * 60);
    return (m === 60) ? (d + 1) + "°00′" : d + "°" + String(m).padStart(2, "0") + "′";
  }
  function signOf(lon) {
    lon = norm360(lon);
    const idx = Math.floor(lon / 30);
    return { signIdx: idx, signDeg: lon - idx * 30 };
  }

  const BODY_KEY = { sun: "Sun", moon: "Moon", venus: "Venus", mars: "Mars", jupiter: "Jupiter" };

  function positions(input) {
    const hasTime = (input.hour != null && input.minute != null);
    const h = hasTime ? input.hour : 12;
    const mi = hasTime ? input.minute : 0;
    const tz = input.tz || "UTC";
    const z = zonedToUTC(input.year, input.month, input.day, h, mi, tz);
    const birth = z.date;
    const sunP = eclipticLon("Sun", birth);
    const design = designDate(birth, sunP);
    const sunD = eclipticLon("Sun", design);
    const lon = {
      lavoro: sunP, evoluzione: sunP + 180,
      radianza: sunD, scopo: sunD + 180,
      attrazione: eclipticLon("Moon", design),
      iq: eclipticLon("Venus", birth),
      eq: eclipticLon("Mars", birth),
      sq: eclipticLon("Venus", design),
      nucleo: eclipticLon("Mars", design),
      cultura: eclipticLon("Jupiter", design),
      perla: eclipticLon("Jupiter", birth)
    };
    return { birth, design, offsetMin: z.offsetMin, hasTime, lon };
  }

  function compute(input) {
    const P = positions(input);
    const spheres = SPHERE_DEF.map(def => {
      const p = keyOf(P.lon[def.k]);
      const s = signOf(p.lon);
      return {
        ...def,
        key: p.key, line: p.line, lonDeg: p.lon,
        signIdx: s.signIdx, signDeg: s.signDeg, degText: fmtDeg(s.signDeg),
        label: p.key + "." + p.line,
        partner: partnerOf(p.key)
      };
    });
    const byK = {}; spheres.forEach(s => { byK[s.k] = s; });
    return {
      input: { ...input },
      utc: P.birth.toISOString(),
      designUtc: P.design.toISOString(),
      offsetMin: P.offsetMin,
      hasTime: P.hasTime,
      spheres, byK,
      // Croce d'incarnazione: Sole/Terra natali | Sole/Terra design
      croce: { ps: byK.lavoro.key, pe: byK.evoluzione.key, ds: byK.radianza.key, de: byK.scopo.key },
      // Linee del profilo: Sole natale / Sole design (es. "6/2")
      profileLines: [byK.lavoro.line, byK.radianza.line],
      seq: {
        attivazione: ["lavoro", "evoluzione", "radianza", "scopo"].map(k => byK[k]),
        venere: ["attrazione", "iq", "eq", "sq", "nucleo"].map(k => byK[k]),
        perla: ["nucleo", "cultura", "perla", "lavoro"].map(k => byK[k])
      }
    };
  }

  /* Analisi strutturale del profilo:
     - doubles: stessa Chiave su più sfere
     - mirrors: coppie di Chiavi opposte sulla ruota tra sfere diverse
       (esclusi gli assi automatici Sole/Terra)
     - lineCount / domLine: Linea dominante (>= 3 sfere)
     - starts / ends: Chiavi d'inizio vs di completamento presenti */
  function analyze(R) {
    const S = R.spheres;
    // doppie
    const byKey = {};
    S.forEach(s => { (byKey[s.key] = byKey[s.key] || []).push(s.k); });
    const doubles = Object.entries(byKey)
      .filter(([, v]) => v.length > 1)
      .map(([key, v]) => ({ key: +key, spheres: v, n: v.length }));
    // specchi (senza assi automatici lavoro/evoluzione e radianza/scopo)
    const AUTO = [["lavoro", "evoluzione"], ["radianza", "scopo"]];
    const isAuto = (a, b) => AUTO.some(([x, y]) => (a === x && b === y) || (a === y && b === x));
    const mirrors = [], seen = new Set();
    S.forEach(a => S.forEach(b => {
      if (a.k === b.k || a.key === b.key) return;
      if (partnerOf(a.key) !== b.key) return;
      if (isAuto(a.k, b.k)) return;
      const id = Math.min(a.key, b.key) + "-" + Math.max(a.key, b.key);
      if (seen.has(id)) return; seen.add(id);
      mirrors.push({ a: a.k, b: b.k, keyA: a.key, keyB: b.key });
    }));
    // linee
    const lineCount = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    S.forEach(s => { lineCount[s.line]++; });
    let domLine = null;
    Object.entries(lineCount).forEach(([l, n]) => {
      if (n >= 3 && (!domLine || n > domLine.n)) domLine = { line: +l, n };
    });
    // inizi / fini (chiavi uniche presenti)
    const uniq = [...new Set(S.map(s => s.key))];
    const starts = uniq.filter(k => START_KEYS.includes(k));
    const ends = uniq.filter(k => END_KEYS.includes(k));
    const startSpheres = S.filter(s => START_KEYS.includes(s.key));
    const startsUnconscious = startSpheres.length > 0 &&
      startSpheres.filter(s => s.calc === "design").length >= Math.ceil(startSpheres.length / 2);
    return { doubles, mirrors, lineCount, domLine, starts, ends, startSpheresN: startSpheres.length, startsUnconscious };
  }

  /* Stabilità: quali sfere cambierebbero Chiave.Linea spostando l'ora
     di nascita di ±30 minuti? Per ciascuna, bisezione del confine.
     Ritorna [{k, from, to, threshold: Date (UTC), dir}] */
  function stability(input) {
    if (input.hour == null || input.minute == null) return [];
    const labelAt = (offMin) => {
      const mins = input.hour * 60 + input.minute + offMin;
      const shifted = {
        ...input,
        hour: Math.floor(((mins % 1440) + 1440) % 1440 / 60),
        minute: ((mins % 60) + 60) % 60
      };
      // giorno può cambiare ai bordi: gestiamo via Date
      const base = new Date(Date.UTC(input.year, input.month - 1, input.day, input.hour, input.minute));
      const d = new Date(base.getTime() + offMin * 60000);
      shifted.year = d.getUTCFullYear(); shifted.month = d.getUTCMonth() + 1; shifted.day = d.getUTCDate();
      shifted.hour = d.getUTCHours(); shifted.minute = d.getUTCMinutes();
      const R = compute(shifted);
      const out = {}; R.spheres.forEach(s => { out[s.k] = s.label; });
      return out;
    };
    const now = labelAt(0), before = labelAt(-30), after = labelAt(30);
    const results = [];
    SPHERE_DEF.forEach(def => {
      const k = def.k;
      [[-30, before], [30, after]].forEach(([edge, lab]) => {
        if (lab[k] === now[k]) return;
        // bisezione tra 0 ed edge sul confine di cambiamento
        let lo = 0, hi = edge;
        for (let i = 0; i < 14; i++) {
          const mid = (lo + hi) / 2;
          if (labelAt(mid)[k] === now[k]) lo = mid; else hi = mid;
        }
        const base = new Date(Date.UTC(input.year, input.month - 1, input.day, input.hour, input.minute));
        results.push({
          k, from: edge < 0 ? labelAt(hi)[k] : now[k], to: edge < 0 ? now[k] : labelAt(hi)[k],
          minutes: Math.abs((lo + hi) / 2),
          thresholdLocalMin: input.hour * 60 + input.minute + (lo + hi) / 2,
          dir: edge < 0 ? "before" : "after"
        });
      });
    });
    // una voce per sfera (la più vicina)
    const bestBy = {};
    results.forEach(r => { if (!bestBy[r.k] || r.minutes < bestBy[r.k].minutes) bestBy[r.k] = r; });
    return Object.values(bestBy).sort((a, b) => a.minutes - b.minutes);
  }

  /* ---- Anelli di codoni (21 gruppi canonici delle 64 Chiavi) ---- */
  const RINGS = [
    { id: "fire", keys: [1, 14] },
    { id: "water", keys: [2, 8] },
    { id: "lifedeath", keys: [3, 20, 23, 24, 27, 42] },
    { id: "union", keys: [4, 7, 29, 59] },
    { id: "light", keys: [5, 9, 11, 26] },
    { id: "alchemy", keys: [6, 40, 47, 64] },
    { id: "humanity", keys: [10, 17, 21, 25, 38, 51] },
    { id: "trials", keys: [12, 33, 56] },
    { id: "purification", keys: [13, 30] },
    { id: "seeking", keys: [15, 39, 52, 53, 54, 58] },
    { id: "prosperity", keys: [16, 45] },
    { id: "matter", keys: [18, 46, 48, 57] },
    { id: "gaia", keys: [19, 60, 61] },
    { id: "origin", keys: [41] },
    { id: "whirlwind", keys: [49, 55] },
    { id: "illuminati", keys: [44, 50] },
    { id: "illusion", keys: [28, 32] },
    { id: "miracles", keys: [35, 63] },
    { id: "noreturn", keys: [31, 62] },
    { id: "secrets", keys: [22, 36, 37] },
    { id: "divinity", keys: [34, 43] }
  ];
  const RING_OF = {}; RINGS.forEach(r => r.keys.forEach(k => { RING_OF[k] = r.id; }));

  // Anelli toccati dal profilo: [{id, keys dell'anello, hits:[{key, spheres:[k]}]}]
  function rings(R) {
    const bySphereKey = {};
    R.spheres.forEach(s => { (bySphereKey[s.key] = bySphereKey[s.key] || []).push(s.k); });
    const out = [];
    RINGS.forEach(r => {
      const hits = r.keys.filter(k => bySphereKey[k])
        .map(k => ({ key: k, spheres: bySphereKey[k] }));
      if (hits.length) out.push({ id: r.id, keys: r.keys, hits });
    });
    out.sort((a, b) => b.hits.length - a.hits.length);
    return out;
  }

  /* ---- Timeline dei cicli personali ---- */
  const SATURN_YEARS = 29.457;
  function timeline(R) {
    const birth = new Date(R.utc);
    const addY = y => new Date(birth.getTime() + y * 365.2422 * 86400000);
    const ageNow = (Date.now() - birth.getTime()) / (365.2422 * 86400000);
    const segs = [
      { k: "sq", from: 0, to: 7 },
      { k: "eq", from: 7, to: 14 },
      { k: "iq", from: 14, to: 21 }
    ];
    const marks = [
      { k: "saturn1", age: SATURN_YEARS },
      { k: "saturn2", age: SATURN_YEARS * 2 }
    ];
    const line6 = R.profileLines[0] === 6 ? [
      { k: "l6p1", from: 0, to: 30 },
      { k: "l6p2", from: 30, to: 50 },
      { k: "l6p3", from: 50, to: 84 }
    ] : null;
    const withDates = a => a.map(x => ({
      ...x,
      fromDate: x.from != null ? addY(x.from) : null,
      toDate: x.to != null ? addY(x.to) : null,
      date: x.age != null ? addY(x.age) : null
    }));
    return { birth, ageNow, segs: withDates(segs), marks: withDates(marks), line6: line6 ? withDates(line6) : null };
  }

  /* ---- Transiti: le Chiavi di adesso incrociate col profilo ---- */
  const TRANSIT_BODIES = ["sun", "moon", "venus", "mars", "jupiter"];
  function matchProfile(R, key) {
    const hits = [];
    R.spheres.forEach(s => {
      if (s.key === key) hits.push({ sphere: s.k, type: "same" });
      else if (s.partner === key) hits.push({ sphere: s.k, type: "mirror" });
    });
    return hits;
  }
  function transits(R, date) {
    const d = date || new Date();
    return TRANSIT_BODIES.map(b => {
      const p = keyOf(eclipticLon(BODY_KEY[b], d));
      return { body: b, key: p.key, line: p.line, hits: R ? matchProfile(R, p.key) : [] };
    });
  }

  /* ---- Ritorno solare: l'istante in cui il Sole torna sul Sole natale ---- */
  function solarReturn(R, year) {
    const birth = new Date(R.utc);
    const natal = eclipticLon("Sun", birth);
    const y = year || (new Date()).getFullYear();
    let t = new Date(birth.getTime());
    t.setUTCFullYear(y);
    for (let i = 0; i < 12; i++) {
      const err = wrap180(natal - eclipticLon("Sun", t));
      if (Math.abs(err) < 1e-6) break;
      t = new Date(t.getTime() + (err / 0.9856) * 86400000);
    }
    const bodies = ["venus", "mars", "jupiter"].map(b => {
      const p = keyOf(eclipticLon(BODY_KEY[b], t));
      return { body: b, key: p.key, line: p.line, hits: matchProfile(R, p.key) };
    });
    return { date: t, year: y, bodies };
  }

  /* ---- Almanacco: gli ingressi del Sole nelle 64 Chiavi (~13 mesi) ---- */
  function almanac(fromDate) {
    const start = fromDate || new Date();
    const lon0 = eclipticLon("Sun", start);
    const idx0 = Math.floor(norm360(lon0 - ANCHOR) / SECTOR);
    const list = [];
    // istante di ingresso nel settore corrente (indietro) e nei successivi
    let t = new Date(start.getTime());
    for (let i = 0; i <= 64; i++) {
      const idx = idx0 + i;
      const target = norm360(ANCHOR + idx * SECTOR);
      let ti = new Date(start.getTime() + ((i === 0 ? -3 : (i * 5.7 - 3))) * 86400000);
      for (let j = 0; j < 14; j++) {
        const err = wrap180(target - eclipticLon("Sun", ti));
        if (Math.abs(err) < 1e-5) break;
        ti = new Date(ti.getTime() + (err / 0.9856) * 86400000);
      }
      list.push({ key: KEY_AT(idx), start: ti });
    }
    for (let i = 0; i < list.length - 1; i++) list[i].end = list[i + 1].start;
    return list.slice(0, 64);
  }

  /* ---- Ora sconosciuta: quali sfere restano stabili sull'intera giornata ---- */
  function dayStability(input) {
    const variants = {};
    SPHERE_DEF.forEach(d => { variants[d.k] = new Set(); });
    for (let h = 0; h <= 24; h += 3) {
      const hh = Math.min(h, 23), mm = h >= 24 ? 59 : 0;
      const R = compute({ ...input, hour: hh, minute: mm });
      R.spheres.forEach(s => variants[s.k].add(s.label));
    }
    const out = {};
    Object.entries(variants).forEach(([k, set]) => {
      out[k] = { stable: set.size === 1, variants: [...set] };
    });
    return out;
  }

  window.HOLO = {
    compute, analyze, stability, keyOf, partnerOf, signOf, fmtDeg,
    WHEEL, ANCHOR, SECTOR, SPHERE_DEF, START_KEYS, END_KEYS, zonedToUTC,
    RINGS, RING_OF, rings, timeline, transits, solarReturn, almanac, dayStability,
    eclipticLon
  };
})();

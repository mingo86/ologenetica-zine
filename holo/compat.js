/* ============================================================
   OLOGENETICA · COMPATIBILITÀ (indipendente dalla lingua)
   Confronta due profili e restituisce connessioni geometriche
   con parametri; i testi vengono riempiti dalla pagina usando
   i template del pacchetto lingua (HOLO_DATA.MATCH).

   Tipi (dal più forte):
   · gemella   — stessa Chiave nella stessa Sfera
   · risonanza — stessa Chiave in Sfere diverse
   · specchio  — Chiavi opposte sulla ruota (partner a 180°)
   · ponte     — Linee in armonia geometrica (1-4, 2-5, 3-6)
   · passo     — stessa Linea sul Life's Work

   API: HOLOMATCH.compare(profA, profB) -> {score, band, conns, la, lb}
        HOLOMATCH.fill(tpl, params)     -> stringa con {segnaposto} riempiti
   ============================================================ */
(function () {
  const BRIDGE = { 1: 4, 2: 5, 3: 6, 4: 1, 5: 2, 6: 3 };

  function fill(tpl, params) {
    return String(tpl || "").replace(/\{(\w+)\}/g, (m, k) => (params[k] != null ? params[k] : m));
  }

  function compare(A, B) {
    const conns = [];
    const seen = new Set();

    // 1) stessa Chiave
    A.spheres.forEach(sa => {
      B.spheres.forEach(sb => {
        if (sa.key !== sb.key) return;
        const same = sa.k === sb.k;
        const id = "K" + sa.key + (same ? "!" + sa.k : "");
        if (seen.has(id)) return; seen.add(id);
        conns.push({
          type: same ? "gemella" : "risonanza",
          pts: same ? 14 : 8,
          key: sa.key, aK: sa.k, bK: sb.k
        });
      });
    });

    // 2) partner di programmazione (Chiavi opposte)
    A.spheres.forEach(sa => {
      B.spheres.forEach(sb => {
        if (sa.partner !== sb.key) return;
        const id = "P" + Math.min(sa.key, sb.key) + "-" + Math.max(sa.key, sb.key);
        if (seen.has(id)) return; seen.add(id);
        conns.push({
          type: "specchio", pts: sa.k === sb.k ? 10 : 6,
          keyA: sa.key, keyB: sb.key, aK: sa.k, bK: sb.k
        });
      });
    });

    // 3) Linee sul Life's Work
    const la = A.byK.lavoro.line, lb = B.byK.lavoro.line;
    if (la === lb) conns.push({ type: "passo", pts: 6, line: la });
    else if (BRIDGE[la] === lb) conns.push({ type: "ponte", pts: 8, a: Math.min(la, lb), b: Math.max(la, lb) });

    let score = 30 + conns.reduce((t, c) => t + c.pts, 0);
    score = Math.max(5, Math.min(98, score));
    const band = score >= 80 ? "alta" : score >= 60 ? "buona" : score >= 45 ? "media" : "bassa";

    conns.sort((x, y) => y.pts - x.pts);
    return { score, band, conns, la, lb };
  }

  window.HOLOMATCH = { compare, fill, BRIDGE };
})();

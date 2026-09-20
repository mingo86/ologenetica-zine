/* ============================================================
   OLOGENETICA · GLOSSARIO A FUMETTO (indipendente dalla lingua)
   Trova nei testi i termini definiti in HOLO_GLOSS[lingua].TERMS,
   li sottolinea a puntini e, al passaggio del mouse / tocco /
   focus tastiera, apre una targhetta con la spiegazione semplice.

   · marca solo la PRIMA occorrenza di ogni termine dentro ogni
     blocco di lettura (card, sezione, pannello) per non affollare
   · niente animazioni: la targhetta appare e scompare, punto
   · si auto-applica ai contenuti nuovi (MutationObserver), quindi
     le pagine non devono chiamare nulla: basta includere lo script
   ============================================================ */
(function () {
  const langOf = () => (window.ZI18N ? window.ZI18N.get() : "it");
  const packOf = () => (window.HOLO_GLOSS && (window.HOLO_GLOSS[langOf()] || window.HOLO_GLOSS.it)) || null;

  // dove NON marcare
  const SKIP_TAGS = new Set(["A","BUTTON","INPUT","SELECT","TEXTAREA","SCRIPT","STYLE","SVG","H1","H2","H3","TH","OPTION","CODE"]);
  const SKIP_CLOSEST = ".gl-term,.gl-pop,.skey,.rspec,.stag,.kspec,.birthdata,.band,.ch,.conntype,.htitle,.ksuper,.pill,.brand,.zlang-picker,.nav,.sdeg,.knum,.ak,.badge,.tk,.mono,.modetoggle,.sharebar,.legend";
  // il "blocco di lettura" entro cui ogni termine si marca una volta sola
  const BLOCK_SEL = ".rep,.scard,.kcard,.structrow,.connrow,.minicard,.seqintro,.spec,.linecard,.todaybox,.soglia,.strip,.hero,.panel";

  const rxCache = {};   // lingua -> {rx, byForm}
  function compiled() {
    const lang = langOf(), pack = packOf();
    if (!pack) return null;
    if (rxCache[lang]) return rxCache[lang];
    const byForm = {};
    const forms = [];
    Object.entries(pack.TERMS).forEach(([id, t]) => {
      (t.m || []).forEach(f => { byForm[f.toLowerCase()] = id; forms.push(f); });
    });
    forms.sort((a, b) => b.length - a.length);
    const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const rx = new RegExp("(?<![\\p{L}\\p{N}])(?:" + forms.map(esc).join("|") + ")(?![\\p{L}\\p{N}])", "giu");
    return (rxCache[lang] = { rx, byForm });
  }

  const seen = new WeakMap();   // blocco -> Set(id già marcati)
  function blockOf(el) {
    return (el.closest && el.closest(BLOCK_SEL)) || document.body;
  }

  function apply(root) {
    const pack = packOf(); if (!pack) return;
    const c = compiled(); if (!c) return;
    const walker = document.createTreeWalker((root || document.body), NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        const p = n.parentElement;
        if (!p) return NodeFilter.FILTER_REJECT;
        if (SKIP_TAGS.has(p.tagName)) return NodeFilter.FILTER_REJECT;
        if (p.closest(SKIP_CLOSEST)) return NodeFilter.FILTER_REJECT;
        if (!n.nodeValue || n.nodeValue.length < 3) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(node => {
      const text = node.nodeValue;
      c.rx.lastIndex = 0;
      let m, out = null, last = 0, changed = false;
      const blk = blockOf(node.parentElement);
      let ids = seen.get(blk); if (!ids) { ids = new Set(); seen.set(blk, ids); }
      while ((m = c.rx.exec(text)) !== null) {
        const id = c.byForm[m[0].toLowerCase()];
        if (!id || ids.has(id)) continue;
        ids.add(id); changed = true;
        if (!out) out = document.createDocumentFragment();
        if (m.index > last) out.appendChild(document.createTextNode(text.slice(last, m.index)));
        const span = document.createElement("span");
        span.className = "gl-term";
        span.tabIndex = 0;
        span.dataset.gl = id;
        span.textContent = m[0];
        out.appendChild(span);
        last = m.index + m[0].length;
      }
      if (changed) {
        if (last < text.length) out.appendChild(document.createTextNode(text.slice(last)));
        node.parentNode.replaceChild(out, node);
      }
    });
  }

  // --- la targhetta ---
  let pop = null, openFor = null;
  function ensurePop() {
    if (pop) return pop;
    pop = document.createElement("div");
    pop.className = "gl-pop";
    pop.id = "gl-pop";
    pop.setAttribute("role", "tooltip");
    pop.hidden = true;
    document.body.appendChild(pop);
    return pop;
  }
  function show(term) {
    const pack = packOf(); if (!pack) return;
    const def = pack.TERMS[term.dataset.gl]; if (!def) return;
    const p = ensurePop();
    p.innerHTML = `<div class="gt">${def.t}</div><div class="gd">${def.d}</div>`;
    p.hidden = false;
    openFor = term;
    term.setAttribute("aria-describedby", "gl-pop");
    // posizionamento: sotto il termine, dentro la finestra
    const r = term.getBoundingClientRect();
    const pw = Math.min(300, window.innerWidth - 24);
    p.style.maxWidth = pw + "px";
    p.style.left = "0px"; p.style.top = "0px";           // reset per misurare
    const ph = p.offsetHeight, pwReal = p.offsetWidth;
    let x = r.left + window.scrollX + r.width / 2 - pwReal / 2;
    x = Math.max(window.scrollX + 12, Math.min(x, window.scrollX + window.innerWidth - pwReal - 12));
    const below = r.bottom + 10 + ph < window.scrollY + window.innerHeight || r.top - ph - 10 < window.scrollY;
    const y = below ? r.bottom + window.scrollY + 9 : r.top + window.scrollY - ph - 9;
    p.style.left = x + "px";
    p.style.top = y + "px";
    p.classList.toggle("above", !below);
    const tail = r.left + window.scrollX + r.width / 2 - x - 5;
    p.style.setProperty("--tail", Math.max(10, Math.min(tail, pwReal - 20)) + "px");
  }
  function hide() {
    if (!pop || pop.hidden) return;
    pop.hidden = true;
    if (openFor) openFor.removeAttribute("aria-describedby");
    openFor = null;
  }

  document.addEventListener("mouseover", e => {
    const t = e.target.closest && e.target.closest(".gl-term");
    if (t) show(t);
    else if (openFor && !(e.target.closest && e.target.closest(".gl-pop"))) hide();
  });
  document.addEventListener("focusin", e => {
    const t = e.target.closest && e.target.closest(".gl-term");
    if (t) show(t); else hide();
  });
  document.addEventListener("click", e => {
    const t = e.target.closest && e.target.closest(".gl-term");
    if (t) { (openFor === t && !pop.hidden) ? hide() : show(t); }
    else if (!(e.target.closest && e.target.closest(".gl-pop"))) hide();
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") hide(); });
  window.addEventListener("scroll", hide, { passive: true });
  window.addEventListener("resize", hide);

  // --- auto-applicazione sui contenuti nuovi ---
  let timer = null;
  const schedule = () => { clearTimeout(timer); timer = setTimeout(() => apply(document.body), 80); };
  const boot = () => {
    apply(document.body);
    new MutationObserver(muts => {
      for (const m of muts) {
        if (m.target.closest && m.target.closest(".gl-pop")) continue;
        if (m.addedNodes && m.addedNodes.length) { schedule(); return; }
      }
    }).observe(document.body, { childList: true, subtree: true });
    window.addEventListener("zlangchange", schedule);
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();

  window.HOLOGLOSS = { apply };
})();

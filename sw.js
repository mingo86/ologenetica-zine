/* Ologenetica · service worker — lo strumento funziona anche offline.
   Documenti: network-first (mai HTML stantio dopo un deploy).
   Asset: cache-first con aggiornamento in background.
   Bumpare V a ogni deploy che tocca i file in CORE. */
const V = "holo-v4";
const CORE = [
  "index.html",
  "Profilo Ologenetico.html",
  "Compatibilità.html",
  "Come si Legge.html",
  "Chiavi.html",
  "Almanacco.html",
  "holo/instrument.css",
  "holo/fonts.css",
  "lang/i18n.js",
  "lib/astronomy.browser.min.js",
  "lib/cities.js",
  "holo/engine.js",
  "holo/compat.js",
  "holo/keys.it.js", "holo/keys.en.js", "holo/keys.fr.js", "holo/keys.es.js", "holo/keys.pt.js",
  "holo/guide.it.js", "holo/guide.en.js", "holo/guide.fr.js", "holo/guide.es.js", "holo/guide.pt.js",
  "holo/extra.it.js", "holo/extra.en.js", "holo/extra.fr.js", "holo/extra.es.js", "holo/extra.pt.js",
  "holo/gloss.it.js", "holo/gloss.en.js", "holo/gloss.fr.js", "holo/gloss.es.js", "holo/gloss.pt.js", "holo/gloss.js",
  "manifest.json"
].map(u => encodeURI(u));

self.addEventListener("install", e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== V).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  const isDoc = e.request.mode === "navigate" || (e.request.destination === "document");
  if (isDoc) {
    // network-first: l'HTML fresco vince, la cache è il paracadute offline
    e.respondWith(
      fetch(e.request).then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(V).then(c => c.put(e.request, copy));
        }
        return res;
      }).catch(() => caches.match(e.request, { ignoreSearch: true }))
    );
    return;
  }
  // asset: cache-first con aggiornamento in background
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit => {
      const net = fetch(e.request).then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(V).then(c => c.put(e.request, copy));
        }
        return res;
      }).catch(() => hit);
      return hit || net;
    })
  );
});

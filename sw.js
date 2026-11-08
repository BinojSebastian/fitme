/* Fit-Me · Service Worker: vollständiges Offline-Caching aller App-Dateien.
   Strategie: sofort aus dem Cache starten, im Hintergrund aktualisieren. */
const CACHE = 'fitme-2.0.0-c371abe5';
const ASSETS = ['./', './index.html', './manifest.json', './icon-180.png', './icon-512.png'];

self.addEventListener('install', (e) => {
  // cache: 'reload' umgeht den HTTP-Cache von GitHub Pages, damit wirklich die neue Version gespeichert wird
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS.map((u) => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('fitme-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // externe Links (z. B. Referenzvideos) normal laden
  const cached = caches.match(req, { ignoreSearch: true });
  const network = fetch(req).then((res) => {
    if (res && res.ok && res.type === 'basic') {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(req, copy));
    }
    return res;
  }).catch(() => null);
  e.waitUntil(network);
  e.respondWith(cached.then((hit) => hit || network.then((res) =>
    res || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error()))));
});

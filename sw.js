const CACHE_NAME = 'ssc-cgl-planner-v5';
const BASE = new URL('./', self.registration.scope);
const APP_SHELL = [
  new URL('./', BASE).href,
  new URL('./index.html', BASE).href,
  new URL('./manifest.json', BASE).href,
  new URL('./icon.svg', BASE).href,
  new URL('./icon-192.png', BASE).href,
  new URL('./icon-512.png', BASE).href,
  new URL('./icon-maskable-192.png', BASE).href,
  new URL('./icon-maskable-512.png', BASE).href
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const reqUrl = new URL(event.request.url);
  if (reqUrl.origin !== self.location.origin) return;
  if (!reqUrl.href.startsWith(BASE.href)) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).then(response => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(new URL('./index.html', BASE).href, copy));
        }
        return response;
      }).catch(() => caches.match(new URL('./index.html', BASE).href))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        }
        return response;
      });
    })
  );
});

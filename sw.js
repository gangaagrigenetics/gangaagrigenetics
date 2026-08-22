// Ganga Agri Genetics Service Worker - Offline Caching
const CACHE_NAME = 'ganga-agri-v9';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './404.html',
  './style.css',
  './i18n.js',
  './app.js',
  './manifest.json',
  './assets/images/logo.png',
  './assets/images/logo.svg',
  './assets/images/hero-art.svg',
  './assets/images/hero-farm.jpg',
  './assets/images/hero-harvest.jpg',
  './assets/images/research-lab.jpg',
  './assets/images/crop-paddy.jpg',
  './assets/images/crop-maize.jpg',
  './assets/images/gallery-paddy.jpg',
  './assets/images/gallery-lab.jpg',
  './assets/images/gallery-maize.jpg',
  './assets/images/gallery-warehouse.jpg',
  './assets/images/gallery-field-day.jpg',
  './assets/images/gallery-soybean.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
        console.warn('Some assets could not be cached on install:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // Network-first for HTML and scripts to ensure latest logic is always received
  const url = new URL(event.request.url);
  const isHtmlOrScript = url.pathname.endsWith('.html') || url.pathname.endsWith('.js') || url.pathname === '/';

  if (isHtmlOrScript) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Cache-first / Stale-while-revalidate for static media
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});


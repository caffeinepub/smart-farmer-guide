/**
 * Service Worker for Smart Farmer Guide PWA
 * 
 * This service worker enables offline functionality by caching all static assets
 * and data files. The app will work without internet connection after the first visit.
 */

const CACHE_NAME = 'smart-farmer-guide-v1';

// List of assets to cache for offline use
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/assets/generated/logo.dim_512x512.png',
  '/assets/generated/icon-crop-schedule.dim_128x128.png',
  '/assets/generated/icon-fertilizer.dim_128x128.png',
  '/assets/generated/icon-pest-disease.dim_128x128.png',
  '/assets/generated/icon-weather.dim_128x128.png',
  '/assets/generated/icon-market-prices.dim_128x128.png',
  '/assets/generated/icon-gov-schemes.dim_128x128.png',
  '/assets/generated/pest-cotton.dim_256x256.png',
  '/assets/generated/disease-soybean.dim_256x256.png',
  '/assets/generated/pest-wheat.dim_256x256.png',
  '/assets/generated/disease-rice.dim_256x256.png',
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
});

// Activate event - clean up old caches
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
  // Take control of all pages immediately
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached version or fetch from network
      return response || fetch(event.request).then((fetchResponse) => {
        // Cache new resources as they are fetched
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        });
      });
    }).catch(() => {
      // If both cache and network fail, return offline page
      return caches.match('/index.html');
    })
  );
});

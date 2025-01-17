importScripts('workbox-v4.3.1/workbox-sw.js');

workbox.routing.registerRoute(/.*cdn.*.com.*/, new workbox.strategies.StaleWhileRevalidate({ cacheName: 'cdns' }));
workbox.routing.registerRoute('https://fonts.googleapis.com/icon?family=Material+Icons', new workbox.strategies.StaleWhileRevalidate({ cacheName: 'fonts' }));
workbox.routing.registerRoute(/.*unpkg.com.*/, new workbox.strategies.StaleWhileRevalidate({ cacheName: 'unpkg' }));
workbox.routing.registerRoute(/.*api\/property.*/, new workbox.strategies.NetworkFirst({
    cacheName: 'api', 
    plugins: [
        new workbox.expiration.Plugin({
            maxAgeSeconds: 48 * 60 * 60,
        }),
    ],
}), 'GET');

self.workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "1b51961bd9b2456423094781f6ca969a"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-01c274c5.js"
  },
  {
    "url": "build/p-08cee778.js"
  },
  {
    "url": "build/p-0d4891c3.css"
  },
  {
    "url": "build/p-3743bade.js"
  },
  {
    "url": "build/p-77f6fff0.entry.js"
  },
  {
    "url": "build/p-82b94935.entry.js"
  },
  {
    "url": "build/p-8a5e5d61.js"
  },
  {
    "url": "build/p-a1dcaba2.js"
  },
  {
    "url": "build/p-f3712d3c.js"
  },
  {
    "url": "build/p-f7b89421.js"
  },
  {
    "url": "manifest.json",
    "revision": "61d848168ab83f34a149d31a169088b5"
  }
]);
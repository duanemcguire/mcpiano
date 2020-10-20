

// Files to cache
var cacheName = 'jazzflash-v1';
var appShellFiles = [
  '/jazzflash/',
  '/jazzflash/index.html',
  '/jazzflash/app.js',
  '/jazzflash/style.css',
  '/jazzflash/fonts/graduate.eot',
  '/jazzflash/fonts/graduate.ttf',
  '/jazzflash/fonts/graduate.woff',
  '/jazzflash/img/icons/icon-128x128.png',
  '/jazzflash/img/icons/icon-144x144.png',
  '/jazzflash/img/icons/icon-152x152.png',
  '/jazzflash/img/icons/icon-192x192.png',
  '/jazzflash/img/icons/icon-384x384.png',
  '/jazzflash/img/icons/icon-512x512.png',
  '/jazzflash/img/icons/icon-72x72.png',
  '/jazzflash/img/icons/icon-96x96.png',
  '/jazzflash/img/bg2.png'
];

var gamesImages = [];
/*
for(var i=0; i<games.length; i++) {
  gamesImages.push('data/img/'+games[i].slug+'.jpg');
}
*/
var contentToCache = appShellFiles.concat(gamesImages);

// Installing Service Worker
self.addEventListener('install', function(e) {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[Service Worker] Caching all: app shell and content');
      return cache.addAll(contentToCache);
    })
  );
});

// Fetching content using Service Worker
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
      console.log('[Service Worker] Fetching resource: '+e.request.url);
      return r || fetch(e.request).then(function(response) {
        return caches.open(cacheName).then(function(cache) {
          console.log('[Service Worker] Caching new resource: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});

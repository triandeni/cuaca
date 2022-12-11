this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      console.log('Opened Cache');

      return cache.addAll(['index.html', 'offline.html']);
    })
  );
});

this.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match('offline.html'));
    })
  );
});

this.addEventListener('activate', (event) => {
  var cacheWhitelist = [];
  cacheWhitelist.push('v1');

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

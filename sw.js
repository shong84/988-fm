const CACHE='988-fm-final-v2';
const ASSETS=['./','./index.html','./manifest.json','./988-logo-original.png','./favicon.png','./apple-touch-icon.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
  if (new URL(e.request.url).origin === location.origin) {
    e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
  }
});

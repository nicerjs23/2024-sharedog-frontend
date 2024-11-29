self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("pwa-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.webmanifest",
        "icons/maskable_icon_x128.png",
        "icons/maskable_icon_x192.png",
        "icons/maskable_icon_x512.png",
        "/icons/maskable_icon_x512_maskable.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

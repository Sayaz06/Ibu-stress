self.addEventListener("install", (e) => {
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener("fetch", (e) => {
  // 1. Tapis: Hanya layan url bermula dengan http atau https sahaja
  if (!(e.request.url.startsWith('http:') || e.request.url.startsWith('https:'))) {
    return; 
  }

  // 2. Tambah sistem 'catch' kalau fetch gagal
  e.respondWith(
    fetch(e.request).catch((error) => {
      console.log("Terlepas pandang/gagal fetch:", e.request.url);
      // Ralat takkan jadi merah lagi, ia cuma log biasa
    })
  );
});

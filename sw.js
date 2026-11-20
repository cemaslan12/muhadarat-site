/* Aşkın Bedeli: hizmet çalışanı (service worker).
   Ana ekrana eklenebilmek için gerekli. Önbelleğe yalnız sitenin kabuğunu alır; oyun dosyaları
   her zaman ağdan gelir (güncel sürüm). Ağ yoksa kabuk sayfaları önbellekten açılır. */
const ONBELLEK = 'askin-bedeli-v1';
const KABUK = ['./', 'index.html', 'giris.html', 'stil.css', 'site.js', 'veri.js', 'pwa.js', 'hesap.js',
  'firebase-ayar.js', 'favicon.svg', 'manifest.webmanifest', 'gorsel/arka/giris.webp'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(ONBELLEK).then((c) => c.addAll(KABUK)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys()
    .then((adlar) => Promise.all(adlar.filter((a) => a !== ONBELLEK).map((a) => caches.delete(a))))
    .then(() => self.clients.claim()));
});

// Ağ önce; olmazsa önbellek (yalnız aynı kaynaktan GET istekleri)
self.addEventListener('fetch', (e) => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  e.respondWith(
    fetch(r).then((cevap) => {
      if (cevap.ok && KABUK.some((k) => r.url.endsWith('/' + k) || (k === './' && r.url.endsWith('/')))) {
        const kopya = cevap.clone();
        caches.open(ONBELLEK).then((c) => c.put(r, kopya));
      }
      return cevap;
    }).catch(() => caches.match(r).then((c) => c || caches.match('index.html')))
  );
});

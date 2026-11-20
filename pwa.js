/* Aşkın Bedeli: "Ana ekrana ekle" (PWA).
   Android/Chrome: tarayıcının yükleme penceresini açar. iPhone/iPad Safari: adım adım yönerge gösterir.
   Uygulama zaten ana ekrandan açılmışsa düğme gizlenir. Sayfada id="ekle-dugme" olan düğmeyi kullanır;
   iOS yönergesi için id="ekle-ios" olan <dialog> beklenir. */
(function () {
  'use strict';
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register(new URL('sw.js', document.currentScript ? document.currentScript.src : location.href)).catch(() => {});
    });
  }

  const yuklu = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  const ios = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  let istem = null;

  function hazirla() {
    const d = document.getElementById('ekle-dugme');
    if (!d || yuklu) return;
    if (ios) d.hidden = false;
    d.addEventListener('click', async () => {
      if (istem) {
        istem.prompt();
        const s = await istem.userChoice;
        if (s.outcome === 'accepted') d.hidden = true;
        istem = null;
      } else if (ios) {
        const p = document.getElementById('ekle-ios');
        if (p && p.showModal) p.showModal();
      }
    });
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    istem = e;
    const d = document.getElementById('ekle-dugme');
    if (d && !yuklu) d.hidden = false;
  });
  window.addEventListener('appinstalled', () => {
    const d = document.getElementById('ekle-dugme');
    if (d) d.hidden = true;
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', hazirla);
  else hazirla();
})();

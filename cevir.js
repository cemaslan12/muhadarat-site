/* Aşkın Bedeli: dik tutulan telefonda oyunun karşılama ekranı.
   araclar/site_hazirla.py bu dosyayı site/oyun/index.html kopyasına ekler (web/ altındaki oyuna dokunmaz).
   Oyun yalnız yatay ekranda oynanır; web/ içindeki #dondur-uyarisi dik telefonda çıplak bir "yan çevirin"
   yazısı gösterir. Reklam doğrudan oyuna indiği için (24 Kasım 2026) gelen kişinin ilk gördüğü ekran budur.
   Ekranın tek işi telefonu yatay çevirtmektir (Cemil'in kararı): oyundan canlı bir sahne, tek cümle, dönen
   telefon simgesi. Okutacak uzun yazı yok.
   - Telefon çevrilince, kaydı olmayan (ilk kez gelen) oyuncu için oyun kendiliğinden başlar.
   - Android: "Oyna" düğmesi tam ekrana geçip ekranı yataya kilitler (döndürme kilidi açık olsa da çalışır).
     Kilitlenemezse düğme kalkar, çevirme cümlesi kalır.
   - iPhone: sayfa ekranı kendisi çeviremez; düğme yoktur. */
(function () {
  'use strict';
  function kur() {
    const kutu = document.getElementById('dondur-uyarisi');
    if (!kutu) return;
    const k = document.documentElement;
    const iste = k.requestFullscreen || k.webkitRequestFullscreen;
    const kilitlenir = !!(iste && screen.orientation && screen.orientation.lock);
    const say = (ad) => { if (typeof window.sayac === 'function') window.sayac(ad); };
    const dik = window.matchMedia('(orientation: portrait) and (max-width: 820px)');

    const s = document.createElement('style');
    s.textContent = [
      '@media (orientation: portrait) and (max-width: 820px){',
      '#dondur-uyarisi{display:block;padding:0;overflow:hidden;font-size:16px;background:#120d16}',
      '#dondur-uyarisi .cv-sahne{position:absolute;inset:0 0 auto 0;height:58%;background:url(gorsel/odul/g_odul_an_mehtap.webp) 46% 30%/cover}',
      '#dondur-uyarisi .cv-sahne::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(18,13,22,0) 55%,#120d16 100%)}',
      '#dondur-uyarisi .cv-ic{position:absolute;inset:auto 0 0 0;height:46%;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;',
      'padding:0 24px max(24px,env(safe-area-inset-bottom));text-align:center;color:#f3e9d6;font-family:"Cormorant Garamond",Georgia,serif}',
      '#dondur-uyarisi .cv-tel{width:38px;height:66px;border:3px solid #e8cf8a;border-radius:8px;animation:cv-don 2.4s ease-in-out infinite}',
      '#dondur-uyarisi .cv-soz{margin:0;font-weight:600;font-size:27px;line-height:1.2;color:#e8cf8a;max-width:11em}',
      '#dondur-uyarisi .cv-oyna{min-width:200px;min-height:56px;padding:12px 28px;border-radius:999px;border:1px solid #c9a45c;background:#7d2638;color:#f4ecdc;',
      'font:700 22px/1 "Cormorant Garamond",Georgia,serif;letter-spacing:.14em;text-transform:uppercase;cursor:pointer;box-shadow:0 8px 22px rgba(0,0,0,.5)}',
      '#dondur-uyarisi .cv-oyna:focus-visible{outline:3px solid #e8cf8a;outline-offset:3px}',
      '#dondur-uyarisi .cv-kucuk{margin:0;font:400 15px/1.3 "EB Garamond",Georgia,serif;opacity:.75}',
      '@keyframes cv-don{0%,20%{transform:rotate(0)}55%,85%{transform:rotate(-90deg)}100%{transform:rotate(0)}}',
      '@media (prefers-reduced-motion: reduce){#dondur-uyarisi .cv-tel{animation:none;transform:rotate(-90deg)}}',
      '}',
    ].join('');
    document.head.appendChild(s);

    kutu.innerHTML = '<div class="cv-sahne" role="img" aria-label="Feride ile Kenan mehtapta, çamlıkta"></div><div class="cv-ic">'
      + '<div class="cv-tel" aria-hidden="true"></div>'
      + '<p class="cv-soz">Telefonunu yatay çevir, oyun başlasın.</p>'
      + (kilitlenir ? '<button class="cv-oyna" id="cv-oyna" type="button">Oyna</button>' : '')
      + '<p class="cv-kucuk" id="cv-kucuk"' + (kilitlenir ? ' hidden' : '') + '>Dönmüyorsa döndürme kilidini kapat.</p></div>';

    const kayitYok = () => { try { return !localStorage.getItem('muhadarat_pilot_v1'); } catch (e) { return false; } };
    // İlk kez gelen oyuncu başlık ekranında bir daha "Yeni oyun"a basmak zorunda kalmasın
    const baslat = () => {
      const yeni = document.getElementById('pilot-oyna');
      if (kayitYok() && yeni && yeni.offsetParent !== null) yeni.click();
    };
    // Sayfa dik açıldıysa: telefon çevrildiği an oyun başlar (ekrandaki söz bunu vaat ediyor)
    if (dik.matches) {
      const cevrildi = () => { if (!dik.matches) { dik.removeEventListener('change', cevrildi); setTimeout(baslat, 250); } };
      dik.addEventListener('change', cevrildi);
    }

    const dugme = document.getElementById('cv-oyna');
    if (!dugme) return;
    const dugmesiz = () => { dugme.hidden = true; document.getElementById('cv-kucuk').hidden = false; };
    dugme.addEventListener('click', () => {
      say('cevir_oyna');
      // Tarayıcı ne kabul ne ret dönerse (uygulama içi tarayıcılar) oyuncu düğmeye bakakalmasın
      setTimeout(() => { if (dik.matches) dugmesiz(); }, 1500);
      try {
        const tam = (document.fullscreenElement || document.webkitFullscreenElement) ? Promise.resolve() : iste.call(k, { navigationUI: 'hide' });
        Promise.resolve(tam).then(() => screen.orientation.lock('landscape')).catch(dugmesiz);
      } catch (e) { dugmesiz(); }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', kur);
  else kur();
})();

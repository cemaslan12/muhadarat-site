/* Aşkın Bedeli: dik tutulan telefonda oyunun karşılama ekranı.
   araclar/site_hazirla.py bu dosyayı site/oyun/index.html kopyasına ekler (web/ altındaki oyuna dokunmaz).
   Oyun yalnız yatay ekranda oynanır; web/ içindeki #dondur-uyarisi dik telefonda çıplak bir "yan çevirin"
   yazısı gösterir. Reklam doğrudan oyuna indiği için (24 Kasım 2026) gelen kişinin ilk gördüğü ekran budur.
   Bu dosya o kutunun içini oyunun adı, bir resmi ve kısa bir davetle değiştirir.
   - Android: "Oyna" düğmesi tam ekrana geçip ekranı yataya kilitler (döndürme kilidi açık olsa da çalışır),
     kayıt yoksa oyunu da başlatır. Kilitlenemezse çevirme tarifi görünür.
   - iPhone: sayfa ekranı kendisi çeviremez; yalnız çevirme tarifi görünür. */
(function () {
  'use strict';
  function kur() {
    const kutu = document.getElementById('dondur-uyarisi');
    if (!kutu) return;
    const k = document.documentElement;
    const iste = k.requestFullscreen || k.webkitRequestFullscreen;
    const kilitlenir = !!(iste && screen.orientation && screen.orientation.lock);
    const say = (ad) => { if (typeof window.sayac === 'function') window.sayac(ad); };

    const s = document.createElement('style');
    s.textContent = [
      '@media (orientation: portrait) and (max-width: 820px){',
      '#dondur-uyarisi{display:block;padding:0;overflow:hidden;font-size:16px;background:#1b1420}',
      '#dondur-uyarisi .cv-arka{position:absolute;inset:0;background:url(../gorsel/arka/giris.webp) center/cover;opacity:.5}',
      '#dondur-uyarisi .cv-arka::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(27,20,32,.25),rgba(27,20,32,.92) 62%)}',
      '#dondur-uyarisi .cv-ic{position:relative;height:100%;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;',
      'padding:max(20px,env(safe-area-inset-top)) 26px max(24px,env(safe-area-inset-bottom));text-align:center;color:#f3e9d6;font-family:"EB Garamond",Georgia,serif}',
      '#dondur-uyarisi .cv-resim{width:min(52vw,30vh);aspect-ratio:3/4;object-fit:cover;object-position:top;border:3px solid #c9a45c;border-radius:4px;',
      'box-shadow:0 10px 30px rgba(0,0,0,.6),0 0 0 6px rgba(201,164,92,.18)}',
      '#dondur-uyarisi .cv-ust{margin:0;font-style:italic;font-size:14px;opacity:.8}',
      '#dondur-uyarisi h1{margin:0;font:600 40px/1.05 "Cormorant Garamond",Georgia,serif;letter-spacing:.03em;color:#e8cf8a}',
      '#dondur-uyarisi .cv-davet{margin:0;max-width:22em;font-size:18px;line-height:1.4}',
      '#dondur-uyarisi .cv-oyna{margin-top:6px;min-width:210px;min-height:56px;padding:12px 28px;border-radius:999px;border:1px solid #c9a45c;background:#7d2638;color:#f4ecdc;',
      'font:700 22px/1 "Cormorant Garamond",Georgia,serif;letter-spacing:.14em;text-transform:uppercase;cursor:pointer;box-shadow:0 8px 22px rgba(0,0,0,.5)}',
      '#dondur-uyarisi .cv-oyna:focus-visible{outline:3px solid #e8cf8a;outline-offset:3px}',
      '#dondur-uyarisi .cv-cevir{display:flex;flex-direction:column;align-items:center;gap:8px;margin-top:4px}',
      '#dondur-uyarisi .cv-cevir b{font:600 21px/1.25 "Cormorant Garamond",Georgia,serif;color:#e8cf8a}',
      '#dondur-uyarisi .cv-cevir span{font-size:15px;line-height:1.35;opacity:.85;max-width:20em}',
      '#dondur-uyarisi .cv-tel{width:34px;height:58px;border:2px solid #e8cf8a;border-radius:7px;animation:cv-don 2.6s ease-in-out infinite}',
      '#dondur-uyarisi .cv-kucuk{margin:0;font-size:14px;opacity:.7}',
      '@keyframes cv-don{0%,25%{transform:rotate(0)}55%,85%{transform:rotate(-90deg)}100%{transform:rotate(0)}}',
      '@media (prefers-reduced-motion: reduce){#dondur-uyarisi .cv-tel{animation:none;transform:rotate(-90deg)}}',
      '@media (max-height:560px){#dondur-uyarisi .cv-resim{display:none}#dondur-uyarisi h1{font-size:32px}}',
      '}',
    ].join('');
    document.head.appendChild(s);

    const cevir = '<div class="cv-cevir" id="cv-cevir"' + (kilitlenir ? ' hidden' : '') + '><div class="cv-tel" aria-hidden="true"></div>'
      + '<b>Telefonunu yan çevir, hikâye başlasın.</b><span>Ekran dönmüyorsa telefonun döndürme kilidini kapat.</span></div>';
    kutu.innerHTML = '<div class="cv-arka"></div><div class="cv-ic">'
      + '<img class="cv-resim" src="../gorsel/karakter/feride.webp" alt="Feride">'
      + '<p class="cv-ust">Fatma Aliye Hanım\'ın Muhadarat\'ından esinlenmiştir</p>'
      + '<h1>Aşkın Bedeli</h1>'
      + '<p class="cv-davet">Bir yıldır sözlüsün ama onu hiç görmedin. Bugün aynı düğündesiniz.</p>'
      + (kilitlenir ? '<button class="cv-oyna" id="cv-oyna" type="button">Oyna</button><p class="cv-kucuk" id="cv-kucuk">Ücretsiz · Oyun yatay ekranda açılır</p>' : '')
      + cevir + '</div>';

    const dugme = document.getElementById('cv-oyna');
    if (!dugme) return;
    const tarifeDon = () => {
      dugme.hidden = true;
      const kucuk = document.getElementById('cv-kucuk'); if (kucuk) kucuk.hidden = true;
      document.getElementById('cv-cevir').hidden = false;
    };
    dugme.addEventListener('click', () => {
      say('cevir_oyna');
      // Tarayıcı ne kabul ne ret dönerse (uygulama içi tarayıcılar) oyuncu düğmeye bakakalmasın
      setTimeout(() => { if (window.innerHeight > window.innerWidth) tarifeDon(); }, 1500);
      let kayitVar = true;
      try { kayitVar = !!localStorage.getItem('muhadarat_pilot_v1'); } catch (e) { /* yok */ }
      try {
        const tam = (document.fullscreenElement || document.webkitFullscreenElement) ? Promise.resolve() : iste.call(k, { navigationUI: 'hide' });
        Promise.resolve(tam).then(() => screen.orientation.lock('landscape')).then(() => {
          // Kaydı olmayan (ilk kez gelen) oyuncu başlık ekranında bir daha "Yeni oyun"a basmak zorunda kalmasın
          const yeni = document.getElementById('pilot-oyna');
          if (!kayitVar && yeni && yeni.offsetParent !== null) yeni.click();
        }).catch(tarifeDon);
      } catch (e) { tarifeDon(); }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', kur);
  else kur();
})();

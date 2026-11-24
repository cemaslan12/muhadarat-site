/* Aşkın Bedeli: ölçüm (Google Analytics 4) ve çerez izni.
   - window.GA_KIMLIK (firebase-ayar.js) boşsa hiçbir şey yüklenmez, kutu da çıkmaz.
   - Kimlik varsa: oyuncu izin verene kadar Google'a hiçbir şey gönderilmez (KVKK). İzin kutusu bir kez sorulur.
   - Sayfalar olay göndermek için window.olcum('olay_adi', { parametre }) çağırır; izin yoksa olay atılır.
   - Bundan bağımsız olarak, izin gerektirmeyen çerezsiz bir adım sayacı çalışır (aşağıda).
   Kendi stilini taşır; oyun sayfasında da (stil.css olmadan) çalışır. */
(function () {
  'use strict';
  const IZIN = 'muhadarat_cerez'; // 'evet' | 'hayir'
  const kimlik = window.GA_KIMLIK;
  let izin = null;
  try { izin = localStorage.getItem(IZIN); } catch (e) { /* yok */ }
  let yuklendi = false;

  /* ---- İzin gerektirmeyen sayaç ----
     Çerez, tarayıcı kaydı ya da kimlik kullanmaz; yalnız "bugün şu adım bir kez daha oldu" diye
     Firestore'daki sayac/{gün}_{adım} belgesinin n alanını 1 artırır (kural: site/firestore.rules).
     Reklamdan gelen ziyaret adresteki gclid/gbraid/wbraid ile tanınır ve iç bağlantılara ?r=1 eklenerek
     izlenir; o ziyaretin adımları ayrıca "_r" ekiyle sayılır. Bir adım sayfa yüklemesi başına bir kez sayılır. */
  const fb = window.FIREBASE_AYAR;
  /* k: reklam grubunun işareti (Ads'te grubun "Final URL suffix" alanı: k=h, k=m ...). O grubun adımları
     ayrıca "_r_<k>" ekiyle sayılır; işaret iç bağlantılarda r ile birlikte taşınır. */
  const grup = (/[?&]k=([a-z0-9]{1,6})(&|$)/.exec(location.search) || [])[1] || '';
  const reklam = !!grup || /[?&](gclid|gbraid|wbraid|r)=/.test(location.search);
  window.SAYAC_EK = reklam ? '?r=1' + (grup ? '&k=' + grup : '') : '';
  const sayilan = {};
  function artir(ad) {
    if (!fb || !fb.projectId || sayilan[ad]) return;
    sayilan[ad] = 1;
    try {
      const gun = new Date(Date.now() + 3 * 3600e3).toISOString().slice(0, 10).replace(/-/g, ''); // Türkiye günü
      const kok = 'projects/' + fb.projectId + '/databases/(default)/documents';
      fetch('https://firestore.googleapis.com/v1/' + kok + ':commit?key=' + encodeURIComponent(fb.apiKey), {
        method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ writes: [{ transform: {
          document: kok + '/sayac/' + gun + '_' + ad,
          fieldTransforms: [{ fieldPath: 'n', increment: { integerValue: '1' } }],
        } }] }),
      }).catch(function () { /* ölçüm oyunu engellemez */ });
    } catch (e) { /* yok */ }
  }
  window.sayac = function (ad) { artir(ad); if (reklam) artir(ad + '_r'); if (grup) artir(ad + '_r_' + grup); };

  const yol = location.pathname;
  if (/\/oyun\/(index\.html)?$/.test(yol)) {
    window.sayac('oyun');
    // oyun_gor: oyun sayfası gerçekten ekranda göründü (reklam doğrudan oyuna indiğinde huninin paydası)
    const oyunGor = function () {
      if (document.visibilityState === 'visible' && !document.prerendering) { window.sayac('oyun_gor'); document.removeEventListener('visibilitychange', oyunGor); return true; }
      return false;
    };
    if (!oyunGor()) document.addEventListener('visibilitychange', oyunGor);
    // oyun_yatay: ekran yatay, yani "telefonunuzu yan çevirin" uyarısı aşıldı ve oyun gerçekten görünüyor
    const yatayBak = setInterval(function () {
      if (document.visibilityState === 'visible' && window.innerWidth > window.innerHeight) { window.sayac('oyun_yatay'); clearInterval(yatayBak); }
    }, 1000);
    // 1. bölümün sonu ekranda: oyuncu "Sıradaki bölüm"e basmasa da sayılır (bolum1_bitti yalnız 2. bölüme geçince artar)
    const bak = setInterval(function () {
      const ad = document.getElementById('bolum-adi'), gorev = document.getElementById('gorev-satiri');
      if (ad && gorev && /(^|\D)1\. Bölüm/.test(ad.textContent) && /Bölüm tamamlandı/.test(gorev.textContent)) {
        window.sayac('bolum1_sonu'); clearInterval(bak);
      }
    }, 3000);
  }
  else if (/giris\.html$/.test(yol)) window.sayac('giris_sayfa');
  else if (/\/(index\.html)?$/.test(yol)) {
    window.sayac('site');
    /* Açılışın türü: reklam kapalıyken de reklam işaretli yüzlerce açılış görüldü (23 Kasım 2026), bu yüzden
       her açılış ayrıca türüyle sayılır. site_bot: otomatik tarayıcı; site_on: tarayıcının önden yüklemesi;
       site_yeni / site_geri: eski sekmenin yenilenmesi ya da geri gelinmesi; site_ilk: gerçek yeni geliş.
       site_gor: sayfa bir kez olsun gerçekten ekranda göründü. */
    try {
      const ua = navigator.userAgent || '';
      const gezinme = (performance.getEntriesByType && performance.getEntriesByType('navigation')[0]) || {};
      let tur = 'ilk';
      if (navigator.webdriver || /bot|crawl|spider|headless|lighthouse|google-(ads|inspection)|mediapartners/i.test(ua)) tur = 'bot';
      else if (document.prerendering) tur = 'on';
      else if (gezinme.type === 'reload') tur = 'yeni';
      else if (gezinme.type === 'back_forward') tur = 'geri';
      window.sayac('site_' + tur);
      const gor = function () {
        if (document.visibilityState === 'visible' && !document.prerendering) { window.sayac('site_gor'); document.removeEventListener('visibilitychange', gor); return true; }
        return false;
      };
      if (!gor()) document.addEventListener('visibilitychange', gor);
    } catch (e) { /* yok */ }
    // Yanlışlıkla dokunup çıkanı sayfaya bakandan ayırır: sayfa GÖRÜNÜR hâlde 5 ve 15 saniye kaldı mı, kaydırıldı mı
    let gorunur = 0;
    const sure = setInterval(function () {
      if (document.visibilityState !== 'visible') return;
      gorunur += 1;
      if (gorunur === 5) window.sayac('site5');
      if (gorunur === 15) { window.sayac('site15'); clearInterval(sure); }
    }, 1000);
    window.addEventListener('scroll', function kaydi() {
      if (window.scrollY > 200) { window.sayac('site_kaydir'); window.removeEventListener('scroll', kaydi); }
    }, { passive: true });
  }
  document.addEventListener('DOMContentLoaded', function () {
    if (!reklam) return;
    document.querySelectorAll('a[href="giris.html"]').forEach(function (a) { a.setAttribute('href', 'giris.html' + window.SAYAC_EK); });
  });
  document.addEventListener('click', function (e) {
    const h = e.target && e.target.closest ? e.target : null;
    if (!h) return;
    if (h.closest('a[href^="giris.html"]')) window.sayac('oyna');
    else if (h.closest('#pilot-oyna, #pilot-bastan, #devam-et')) window.sayac('basla');
    else if (h.closest('#secimler button')) window.sayac('secim');
  }, true);

  const SAYILAN_OLAY = { giris_yapti: 'giris' };
  window.olcum = function (olay, parametre) {
    if (SAYILAN_OLAY[olay]) window.sayac(SAYILAN_OLAY[olay]);
    else if (olay === 'bolum_bitti' && parametre && parametre.bolum === 1) window.sayac('bolum1_bitti');
    if (yuklendi && typeof window.gtag === 'function') window.gtag('event', olay, parametre || {});
  };

  function yukle() {
    if (yuklendi || !kimlik) return;
    yuklendi = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', kimlik, { anonymize_ip: true });
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(kimlik);
    document.head.appendChild(s);
  }

  function kutu() {
    const css = document.createElement('style');
    css.textContent = [
      '.cerez-kutu{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:9999;width:min(560px,calc(100% - 24px));',
      'background:#f4ecdc;color:#2b1f1a;border-radius:6px;padding:16px 18px;font:400 15px/1.5 "EB Garamond",Georgia,serif;',
      'box-shadow:0 12px 32px rgba(10,5,12,.5),inset 0 0 0 1px rgba(138,106,46,.45)}',
      '.cerez-kutu p{margin:0 0 12px}',
      '.cerez-dugmeler{display:flex;gap:10px;justify-content:flex-end;flex-wrap:wrap}',
      '.cerez-kutu button{font:600 15px/1 "Cormorant Garamond",Georgia,serif;letter-spacing:.04em;padding:10px 16px;min-height:44px;border-radius:999px;cursor:pointer}',
      '.cerez-evet{background:#7d2638;color:#f4ecdc;border:1px solid #c9a45c}',
      '.cerez-hayir{background:transparent;color:#6b5a4c;border:1px solid rgba(107,90,76,.5)}',
      '.cerez-kutu button:focus-visible{outline:3px solid #c9a45c;outline-offset:2px}',
      '@media (max-width:520px){.cerez-kutu{bottom:8px;padding:11px 14px;font-size:14px;line-height:1.35}.cerez-kutu p{margin-bottom:8px}.cerez-dugmeler{gap:8px}}',
    ].join('');
    document.head.appendChild(css);
    const k = document.createElement('div');
    k.className = 'cerez-kutu';
    k.setAttribute('role', 'dialog');
    k.setAttribute('aria-label', 'Çerez izni');
    k.innerHTML = '<p>Oyunu daha iyi yapabilmek için kaç kişinin hangi bölüme kadar oynadığını ölçmek istiyoruz. '
      + 'Bunun için Google Analytics çerezleri kullanılır; adınız ya da e-posta adresiniz gönderilmez.</p>'
      + '<div class="cerez-dugmeler"><button class="cerez-hayir" type="button">Hayır, teşekkürler</button>'
      + '<button class="cerez-evet" type="button">Kabul ediyorum</button></div>';
    const kapat = (cevap) => {
      try { localStorage.setItem(IZIN, cevap); } catch (e) { /* yok */ }
      k.remove();
      if (cevap === 'evet') yukle();
    };
    k.querySelector('.cerez-evet').addEventListener('click', () => kapat('evet'));
    k.querySelector('.cerez-hayir').addEventListener('click', () => kapat('hayir'));
    document.body.appendChild(k);
  }

  if (!kimlik) return;
  if (izin === 'evet') yukle();
  else if (izin !== 'hayir') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', kutu);
    else kutu();
  }

  /* Gizlilik penceresinden izni değiştirmek için */
  window.cerezIzniniSifirla = function () {
    try { localStorage.removeItem(IZIN); } catch (e) { /* yok */ }
    location.reload();
  };
})();

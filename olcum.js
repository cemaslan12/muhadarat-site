/* Aşkın Bedeli: ölçüm (Google Analytics 4) ve çerez izni.
   - window.GA_KIMLIK (firebase-ayar.js) boşsa hiçbir şey yüklenmez, kutu da çıkmaz.
   - Kimlik varsa: oyuncu izin verene kadar Google'a hiçbir şey gönderilmez (KVKK). İzin kutusu bir kez sorulur.
   - Sayfalar olay göndermek için window.olcum('olay_adi', { parametre }) çağırır; izin yoksa olay atılır.
   Kendi stilini taşır; oyun sayfasında da (stil.css olmadan) çalışır. */
(function () {
  'use strict';
  const IZIN = 'muhadarat_cerez'; // 'evet' | 'hayir'
  const kimlik = window.GA_KIMLIK;
  let izin = null;
  try { izin = localStorage.getItem(IZIN); } catch (e) { /* yok */ }
  let yuklendi = false;

  window.olcum = function (olay, parametre) {
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

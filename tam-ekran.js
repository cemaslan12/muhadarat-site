/* Aşkın Bedeli: oyunda tam ekran deneyimi.
   araclar/site_hazirla.py bu dosyayı site/oyun/index.html kopyasına ekler (web/ altındaki oyuna dokunmaz).
   - Ana ekrandan açıldıysa (standalone) hiçbir şey yapmaz: zaten tam ekran.
   - Android ve bilgisayar: "Yeni oyun / Devam Et / Baştan başla" dokunuşunda tarayıcıyı tam ekrana alır,
     telefonda yatay kilitlemeyi dener.
   - iPhone/iPad: Apple sayfaların kendini tam ekran yapmasına izin vermez. Başlık ekranında bir kez
     "ana ekrana ekleyin" kutusu gösterilir (en çok 3 açılışta; "Bir daha gösterme" ile hiç). */
(function () {
  'use strict';
  const yuklu = window.matchMedia('(display-mode: standalone)').matches ||
    window.matchMedia('(display-mode: fullscreen)').matches || navigator.standalone === true;
  if (yuklu) return;

  const ua = navigator.userAgent;
  const ios = /iphone|ipad|ipod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const uygulamaIci = /Instagram|FBAN|FBAV|FB_IAB|TikTok|musical_ly|Twitter|LinkedInApp|Snapchat/i.test(ua);
  const iosChrome = ios && /CriOS/i.test(ua);
  const olc = (olay, p) => { if (typeof window.olcum === 'function') window.olcum(olay, p); };
  const oku = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const yaz = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* yok */ } };

  /* ---- Android / bilgisayar: oyuna başlarken tam ekran ---- */
  function tamEkranaAl() {
    const k = document.documentElement;
    const iste = k.requestFullscreen || k.webkitRequestFullscreen;
    if (!iste || document.fullscreenElement || document.webkitFullscreenElement) return;
    try {
      const s = iste.call(k, { navigationUI: 'hide' });
      if (s && s.then) {
        s.then(() => {
          olc('tam_ekran', { yol: 'otomatik' });
          if (screen.orientation && screen.orientation.lock) screen.orientation.lock('landscape').catch(() => {});
        }).catch(() => {});
      }
    } catch (e) { /* desteklenmiyor */ }
  }

  /* ---- iPhone: ana ekran rehberi ---- */
  const PAYLAS = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M12 3v12M8 7l4-4 4 4M6 11H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-1"/></svg>';
  const EKLE = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 8v8M8 12h8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';

  function adimlar() {
    if (uygulamaIci) {
      return ['Sağ üstteki <b>⋯</b> düğmesine dokunun.', '<b>Safari\'de aç</b> seçeneğini seçin.',
        'Safari\'de <b>Paylaş</b> ' + PAYLAS + ' → <b>Ana Ekrana Ekle</b> ' + EKLE + '.'];
    }
    if (iosChrome) {
      return ['Adres çubuğunun sağındaki <b>Paylaş</b> ' + PAYLAS + ' düğmesine dokunun.',
        '<b>Ana Ekrana Ekle</b> ' + EKLE + '\'yi seçin, sonra <b>Ekle</b>.'];
    }
    return ['<b>Paylaş</b> ' + PAYLAS + ' düğmesine dokunun (adres çubuğunun yanında ya da altta; görünmüyorsa <b>⋯</b>).',
      'Listede <b>Ana Ekrana Ekle</b> ' + EKLE + '\'yi seçin, sonra <b>Ekle</b>.',
      'Oyunu ana ekrandaki <b>Aşkın Bedeli</b> simgesinden açın.'];
  }

  function stilEkle() {
    const s = document.createElement('style');
    s.textContent = [
      '#te-kutu{position:fixed;inset:0;z-index:200;display:grid;place-items:center;background:rgba(8,5,10,.78);',
      'padding:max(12px,env(safe-area-inset-top)) max(16px,env(safe-area-inset-right)) max(12px,env(safe-area-inset-bottom)) max(16px,env(safe-area-inset-left));}',
      '#te-kutu .te-ic{max-width:min(560px,100%);max-height:100%;overflow:auto;background:#f3e7cf;color:#2b1d24;border:1px solid #c9a24a;',
      'border-radius:14px;padding:18px 22px;font-family:"EB Garamond",Georgia,serif;font-size:16px;line-height:1.45;box-shadow:0 10px 40px rgba(0,0,0,.6);}',
      '#te-kutu h2{margin:0 0 6px;font-family:"Cormorant Garamond",Georgia,serif;font-size:24px;color:#5a2633;}',
      '#te-kutu p{margin:0 0 8px;}#te-kutu ol{margin:4px 0 12px;padding-left:22px;}#te-kutu li{margin:4px 0;}',
      '#te-kutu svg{width:18px;height:18px;vertical-align:-3px;color:#2f6fd6;}',
      '#te-kutu .te-dugmeler{display:flex;flex-wrap:wrap;gap:8px;justify-content:flex-end;}',
      '#te-kutu button{font:inherit;font-size:15px;min-height:44px;padding:8px 16px;border-radius:999px;cursor:pointer;',
      'border:1px solid #8a6a2a;background:transparent;color:#2b1d24;}',
      '#te-kutu button.te-ana{background:#6e2236;border-color:#6e2236;color:#f6e7c4;}',
      '@media (max-height:420px){#te-kutu .te-ic{padding:12px 18px;font-size:15px;}#te-kutu h2{font-size:20px;}#te-kutu ol{margin:2px 0 8px;}}'
    ].join('');
    document.head.appendChild(s);
  }

  function iosKutusu() {
    const ANAHTAR = 'muhadarat_tam_ekran_rehber';
    const sayi = +oku(ANAHTAR) || 0;
    if (sayi < 0 || sayi >= 3) return;
    yaz(ANAHTAR, String(sayi + 1));
    stilEkle();
    const kutu = document.createElement('div');
    kutu.id = 'te-kutu';
    kutu.setAttribute('role', 'dialog');
    kutu.setAttribute('aria-modal', 'true');
    kutu.setAttribute('aria-labelledby', 'te-baslik');
    kutu.innerHTML = '<div class="te-ic"><h2 id="te-baslik">Tam ekran için ana ekrana ekleyin</h2>' +
      '<p>iPhone\'da Safari çubukları oyunun üstünü kapatır. Ana ekrana eklerseniz oyun bir uygulama gibi bütün ekranı kaplar; ilerlemeniz de korunur.</p>' +
      '<ol>' + adimlar().map((a) => '<li>' + a + '</li>').join('') + '</ol>' +
      '<div class="te-dugmeler"><button type="button" data-te="hic">Bir daha gösterme</button>' +
      '<button type="button" class="te-ana" data-te="tamam">Şimdilik böyle oyna</button></div></div>';
    document.body.appendChild(kutu);
    olc('tam_ekran_rehberi', { cihaz: iosChrome ? 'ios_chrome' : uygulamaIci ? 'uygulama_ici' : 'ios_safari' });
    kutu.addEventListener('click', (e) => {
      const d = e.target.closest('[data-te]');
      if (!d && e.target !== kutu) return;
      if (d && d.dataset.te === 'hic') yaz(ANAHTAR, '-1');
      kutu.remove();
    });
    const ana = kutu.querySelector('.te-ana');
    if (ana) ana.focus();
  }

  // Çerez kutusu açıksa önce o kapansın: ilk kez gelen oyuncuya iki kutu üst üste çıkmasın
  function cerezBitinceAc(f, deneme) {
    const c = document.querySelector('.cerez-kutu');
    if (c && c.isConnected && !c.hidden && (deneme || 0) < 240) { setTimeout(() => cerezBitinceAc(f, (deneme || 0) + 1), 500); return; }
    setTimeout(f, c ? 400 : 0);
  }

  function hazirla() {
    if (ios) { cerezBitinceAc(iosKutusu); return; }
    ['pilot-oyna', 'pilot-bastan', 'devam-et', 'yeni-oyun'].forEach((id) => {
      const d = document.getElementById(id);
      if (d) d.addEventListener('click', tamEkranaAl, { capture: true });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', hazirla);
  else hazirla();
})();

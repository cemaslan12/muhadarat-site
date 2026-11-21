/* Aşkın Bedeli: "Ana ekrana ekle" (PWA).
   Sayfada data-ekle="ios" ve data-ekle="android" düğmeleri ile id="ekle-rehber" <dialog> beklenir.
   - Android + Chrome/Edge/Samsung: tarayıcının kendi "Yükle" penceresi açılır (tek dokunuş).
   - iPhone/iPad: Apple otomatik eklemeye izin vermez; tarayıcıya (Safari, Chrome, Instagram/Facebook
     içi tarayıcı) göre adım adım rehber gösterilir.
   Uygulama zaten ana ekrandan açılmışsa düğmeler gizlenir. */
(function () {
  'use strict';
  const betik = document.currentScript;
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register(new URL('sw.js', betik ? betik.src : location.href)).catch(() => {});
    });
  }

  const ua = navigator.userAgent;
  const yuklu = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  const ios = /iphone|ipad|ipod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const android = /android/i.test(ua);
  const uygulamaIci = /Instagram|FBAN|FBAV|FB_IAB|TikTok|musical_ly|Twitter|LinkedInApp|Snapchat/i.test(ua);
  const iosChrome = ios && /CriOS/i.test(ua);
  const iosDiger = ios && /FxiOS|EdgiOS|OPiOS/i.test(ua);
  let istem = null;

  const PAYLAS = '<svg class="ekle-simge" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M12 3v12M8 7l4-4 4 4M6 11H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-1"/></svg>';
  const EKLE = '<svg class="ekle-simge" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 8v8M8 12h8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
  const NOKTA = '<b class="ekle-isaret">⋯</b>';
  const DIKEY = '<b class="ekle-isaret">⋮</b>';

  const REHBER = {
    uygulamaIci: {
      baslik: 'Önce tarayıcıda açın',
      not: 'Instagram, Facebook gibi uygulamaların içindeki tarayıcıdan ana ekrana ekleme yapılamaz.',
      adimlar: [
        'Sağ üst (ya da sağ alt) köşedeki ' + NOKTA + ' düğmesine dokunun.',
        ios ? '<b>Safari\'de aç</b> (ya da <b>Tarayıcıda aç</b>) seçeneğini seçin.' : '<b>Chrome\'da aç</b> (ya da <b>Tarayıcıda aç</b>) seçeneğini seçin.',
        'Açılan sayfada yeniden <b>Ana ekrana ekle</b> düğmesine dokunun.',
      ],
    },
    safari: {
      baslik: 'iPhone\'da ana ekrana ekleyin',
      adimlar: [
        'Ekranın altındaki <b>Paylaş</b> düğmesine dokunun ' + PAYLAS + '. Görmüyorsanız önce sağ alttaki ' + NOKTA + ' düğmesine dokunun.',
        'Açılan listede aşağı kaydırıp <b>Ana Ekrana Ekle</b>\'yi seçin ' + EKLE + '.',
        'Sağ üstteki <b>Ekle</b>\'ye dokunun.',
      ],
      son: 'Aşkın Bedeli artık ana ekranınızda bir uygulama gibi duracak.',
    },
    iosChrome: {
      baslik: 'iPhone\'da (Chrome) ana ekrana ekleyin',
      adimlar: [
        'Adres çubuğunun sağındaki <b>Paylaş</b> düğmesine dokunun ' + PAYLAS + '.',
        'Listeden <b>Ana Ekrana Ekle</b>\'yi seçin ' + EKLE + '. Listede yoksa en alttaki <b>Düzenle</b>\'den ekleyebilirsiniz.',
        'Sağ üstteki <b>Ekle</b>\'ye dokunun.',
      ],
      son: 'Bu seçenek görünmezse sayfayı Safari\'de açıp oradan ekleyin.',
    },
    iosDiger: {
      baslik: 'iPhone\'da ana ekrana ekleyin',
      adimlar: [
        'Bu sayfayı <b>Safari</b>\'de açın (adresi kopyalayıp Safari\'ye yapıştırabilirsiniz).',
        'Safari\'de altta <b>Paylaş</b> ' + PAYLAS + ' → <b>Ana Ekrana Ekle</b> ' + EKLE + ' → <b>Ekle</b>.',
      ],
    },
    android: {
      baslik: 'Android\'de ana ekrana ekleyin',
      adimlar: [
        'Chrome\'da sağ üstteki ' + DIKEY + ' menüsüne dokunun.',
        '<b>Ana ekrana ekle</b> ya da <b>Uygulamayı yükle</b>\'yi seçin.',
        '<b>Yükle</b> (ya da <b>Ekle</b>) ile onaylayın.',
      ],
      son: 'Samsung Internet\'te: alttaki ☰ menüsü → <b>Sayfayı ekle</b> → <b>Ana ekran</b>.',
    },
  };

  function rehberGoster(ad) {
    const p = document.getElementById('ekle-rehber');
    if (!p) return;
    const r = REHBER[ad];
    p.querySelector('[data-rehber="baslik"]').textContent = r.baslik;
    const not = p.querySelector('[data-rehber="not"]');
    not.innerHTML = r.not || '';
    not.hidden = !r.not;
    p.querySelector('[data-rehber="adimlar"]').innerHTML = r.adimlar.map((a) => '<li>' + a + '</li>').join('');
    const son = p.querySelector('[data-rehber="son"]');
    son.innerHTML = r.son || '';
    son.hidden = !r.son;
    if (p.showModal) p.showModal();
  }

  async function iosTik() {
    window.olcum && window.olcum('ana_ekran_dugmesi', { cihaz: 'ios' });
    if (uygulamaIci) return rehberGoster('uygulamaIci');
    rehberGoster(iosChrome ? 'iosChrome' : iosDiger ? 'iosDiger' : 'safari');
  }
  async function androidTik() {
    window.olcum && window.olcum('ana_ekran_dugmesi', { cihaz: 'android' });
    if (istem) {
      istem.prompt();
      const s = await istem.userChoice;
      istem = null;
      if (s.outcome === 'accepted') dugmeler().forEach((d) => { d.hidden = true; });
      return;
    }
    if (uygulamaIci) return rehberGoster('uygulamaIci');
    rehberGoster('android');
  }

  const dugmeler = () => [...document.querySelectorAll('[data-ekle]')];

  function hazirla() {
    const kutu = document.querySelectorAll('.ekle-kutu');
    if (yuklu) { kutu.forEach((k) => { k.hidden = true; }); return; }
    kutu.forEach((k) => { k.hidden = false; });
    dugmeler().forEach((d) => {
      const tur = d.dataset.ekle;
      // Cihaz belliyse onun düğmesi öne çıkar
      if ((tur === 'ios' && ios) || (tur === 'android' && android)) d.classList.add('onerilen');
      d.addEventListener('click', tur === 'ios' ? iosTik : androidTik);
    });
    // Uygulama içi tarayıcı uyarısı
    const uyari = document.getElementById('uygulama-ici-uyari');
    if (uyari && uygulamaIci) uyari.hidden = false;
  }

  window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); istem = e; });
  window.addEventListener('appinstalled', () => {
    document.querySelectorAll('.ekle-kutu').forEach((k) => { k.hidden = true; });
  });

  window.anaEkranRehberi = rehberGoster;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', hazirla);
  else hazirla();
})();

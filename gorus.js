/* Aşkın Bedeli: oyuncudan görüş alma ve oturum izi (27 Kasım 2026, Cemil'in kararı).
   Amaç reklamdan gelen az sayıda oyuncudan olabildiğince çok şey öğrenmek. Çerez ya da kimlik kullanmaz.

   1. Oturum izi: her sayfa açılışı için Firestore'da iz/{gün}_{rastgele} belgesi. Oyuncunun nereye kadar geldiği,
      kaç saniye kaldığı, hangi seçimleri yaptığı ve çıktığı andaki satır yazılır. Kimse okuyamaz (konsoldan okunur).
   2. Çıkış sorusu: bilgisayarda fare sayfanın üstünden dışarı çıkınca (sekmeyi kapatmaya giderken) bir kez sorulur.
   3. Bölüm sonu sorusu: bölüm özeti panelinin içine, "Sırada" başlığının hemen üstüne yerleşir.
   4. Köşede "Görüş yaz" düğmesi: yalnız bilgisayarda.
   Görüşler gorus/{gün}_{rastgele}_{sıra} belgesine yazılır. Hazır seçenek yoktur; oyuncu kendi cümlesini yazar.
   Kurallar: site/firestore.rules (iz ve gorus). */
(function () {
  'use strict';
  const fb = window.FIREBASE_AYAR;
  if (!fb || !fb.projectId) return;
  const KOK = 'projects/' + fb.projectId + '/databases/(default)/documents';
  const ADRES = 'https://firestore.googleapis.com/v1/' + KOK + ':commit?key=' + encodeURIComponent(fb.apiKey);
  const grup = (/[?&]k=([a-z0-9]{1,6})(&|$)/.exec(location.search) || [])[1] || '';
  const cihaz = window.SAYAC_CIHAZ || 'b';
  const gun = new Date(Date.now() + 3 * 3600e3).toISOString().slice(0, 10).replace(/-/g, ''); // Türkiye günü
  let oturum = '';
  for (let i = 0; i < 16; i++) oturum += 'abcdefghijklmnopqrstuvwxyz0123456789'[Math.floor(Math.random() * 36)];

  const iz = { sn: 0, bas: -1, dok: 0, sec: [], bitti: 0, gorus: 0 };
  let kirli = true, sonGonderim = 0, kutuAcik = false, cikisSoruldu = false, gorusSira = 0;

  const el = function (id) { return document.getElementById(id); };
  const gorunur = function (id) { const e = el(id); return !!e && !e.hidden && e.offsetParent !== null; };
  const kisalt = function (m, n) { return String(m || '').replace(/\s+/g, ' ').trim().slice(0, n); };

  // Oyuncunun o an ekranında duran satır: konuşma kutusu, yoksa anlatı kartı
  function sonSatir() {
    const anlati = el('anlati');
    if (anlati && anlati.classList.contains('acik')) {
      const satirlar = anlati.querySelectorAll('.anlati-metin p');
      return 'ANLATI: ' + kisalt(satirlar.length ? satirlar[satirlar.length - 1].textContent : anlati.textContent, 150);
    }
    if (gorunur('secimler')) return 'SEÇİM: ' + kisalt(el('secimler').textContent, 150);
    if (gorunur('diyalog')) return kisalt((el('konusan').textContent ? el('konusan').textContent + ': ' : '') + el('metin').textContent, 160);
    if (gorunur('kart')) return 'KART: ' + kisalt(el('kart-ic').textContent, 150);
    if (gorunur('panel')) return 'PANEL: ' + kisalt(el('panel-icerik').textContent, 80);
    if (gorunur('baslik-ekrani')) return 'BAŞLIK EKRANI';
    return '';
  }
  const bolumAdi = function () { return kisalt(el('bolum-adi') && el('bolum-adi').textContent, 60); };

  const metinAlan = function (m) { return { stringValue: m }; };
  const sayiAlan = function (n) { return { integerValue: String(n) }; };
  function yaz(yol, alanlar) {
    try {
      fetch(ADRES, {
        method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ writes: [{
          update: { name: KOK + '/' + yol, fields: alanlar },
          updateTransforms: [{ fieldPath: 'z', setToServerValue: 'REQUEST_TIME' }],
        }] }),
      }).catch(function () { /* ölçüm oyunu engellemez */ });
    } catch (e) { /* yok */ }
  }

  function iziGonder(zorla) {
    if (!kirli && !zorla) return;
    kirli = false; sonGonderim = iz.sn;
    yaz('iz/' + gun + '_' + oturum, {
      k: metinAlan(grup), c: metinAlan(cihaz), en: metinAlan(window.innerWidth + 'x' + window.innerHeight),
      sn: sayiAlan(iz.sn), bas: sayiAlan(iz.bas), dok: sayiAlan(iz.dok),
      sec: metinAlan(iz.sec.join(' | ').slice(0, 900)), son: metinAlan(sonSatir()), bolum: metinAlan(bolumAdi()),
      bitti: sayiAlan(iz.bitti), gorus: sayiAlan(iz.gorus),
    });
  }

  // Saniye sayacı: yalnız sayfa görünürken ilerler. İz 20 saniyede bir ve sayfa gizlenirken gönderilir.
  setInterval(function () {
    if (document.visibilityState !== 'visible') return;
    iz.sn += 1; kirli = true;
    if (!iz.bitti && /Bölüm tamamlandı/.test((el('gorev-satiri') || {}).textContent || '')) iz.bitti = 1;
    if (iz.sn - sonGonderim >= 20) iziGonder();
    bolumSorusunuYerlestir();
  }, 1000);
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') iziGonder(true); });
  window.addEventListener('pagehide', function () { iziGonder(true); });

  document.addEventListener('click', function (e) {
    const h = e.target && e.target.closest ? e.target : null;
    if (!h || h.closest('.gorus-kutu, .gorus-dugme, .gorus-satir')) return;
    if (h.closest('#pilot-oyna, #pilot-bastan, #devam-et')) { if (iz.bas < 0) iz.bas = iz.sn; }
    else if (h.closest('#secimler button')) { if (iz.sec.length < 20) iz.sec.push(kisalt(h.closest('button').textContent, 50)); }
    else if (iz.bas >= 0 && h.closest('#sahne')) iz.dok += 1;
    kirli = true;
  }, true);

  /* ---- Görüş kutuları ---- */
  const METIN = {
    cikis: {
      baslik: 'Gitmeden önce bir şey sorabilir miyiz?',
      yazi: 'Bu oyunu gerçekten daha iyi yapmak istiyoruz, bunu da ancak oynayanlardan öğrenebiliriz. '
        + 'Seni ne durdurdu? Tek cümle bile yazsan çok mutlu oluruz.',
      yer: 'Aklından geçeni olduğu gibi yaz. Kırmaktan çekinme.',
      kapat: 'Oyuna dön',
    },
    serbest: {
      baslik: 'Bize bir şey söyle',
      yazi: 'Hoşuna giden, takıldığın, saçma bulduğun ne varsa yaz. Hepsini okuyoruz; oyun bunlarla değişecek.',
      yer: 'Aklından geçeni olduğu gibi yaz.',
      kapat: 'Vazgeç',
    },
    bolum: {
      baslik: 'Buraya kadar geldin, teşekkür ederiz.',
      yazi: 'Bu oyunu oynayanların söyledikleriyle geliştiriyoruz. Bu bölüm sana ne hissettirdi? '
        + 'Seni ne içine çekti, nerede sıkıldın? Yazarsan çok mutlu oluruz.',
      yer: 'Aklından geçeni olduğu gibi yaz.',
    },
    tesekkur: 'Teşekkür ederiz. Yazdığını okuyacağız.',
  };

  function gorusGonder(tur, metin) {
    gorusSira += 1; iz.gorus += 1; kirli = true;
    yaz('gorus/' + gun + '_' + oturum + '_' + gorusSira, {
      t: metinAlan(tur), m: metinAlan(metin.slice(0, 2000)), k: metinAlan(grup), c: metinAlan(cihaz),
      bolum: metinAlan(bolumAdi()), son: metinAlan(sonSatir()), sn: sayiAlan(iz.sn),
    });
    if (window.sayac) window.sayac('gorus_' + tur);
    iziGonder(true);
  }

  function stil() {
    if (el('gorus-stil')) return;
    const css = document.createElement('style');
    css.id = 'gorus-stil';
    css.textContent = [
      '.gorus-perde{position:fixed;inset:0;z-index:9998;background:rgba(10,5,12,.62);display:flex;align-items:center;justify-content:center;padding:16px}',
      '.gorus-kutu,.gorus-satir{background:#f4ecdc;color:#2b1f1a;border-radius:6px;font:400 17px/1.5 "EB Garamond",Georgia,serif;',
      'box-shadow:0 12px 32px rgba(10,5,12,.5),inset 0 0 0 1px rgba(138,106,46,.45)}',
      '.gorus-kutu{width:min(520px,100%);padding:22px 24px}',
      '.gorus-satir{margin:18px 0 6px;padding:16px 18px;text-align:left;background:#fbf5e8;box-shadow:inset 0 0 0 1px rgba(138,106,46,.45)}',
      '.gorus-kutu h2,.gorus-satir h3{margin:0 0 8px;font:600 22px/1.25 "Cormorant Garamond",Georgia,serif;color:#4f1322}',
      '.gorus-kutu p,.gorus-satir p{margin:0 0 12px}',
      '.gorus-kutu textarea,.gorus-satir textarea{display:block;width:100%;box-sizing:border-box;min-height:96px;resize:vertical;padding:10px 12px;',
      'font:400 16px/1.45 "EB Garamond",Georgia,serif;color:#2b1f1a;background:#fffaf0;border:1px solid rgba(107,90,76,.55);border-radius:4px}',
      '.gorus-dugmeler{display:flex;gap:10px;justify-content:flex-end;flex-wrap:wrap;margin-top:12px}',
      '.gorus-dugmeler button,.gorus-dugme{font:600 15px/1 "Cormorant Garamond",Georgia,serif;letter-spacing:.04em;cursor:pointer;border-radius:999px}',
      '.gorus-dugmeler button{padding:10px 18px;min-height:44px}',
      '.gorus-gonder{background:#7d2638;color:#f4ecdc;border:1px solid #c9a45c}',
      '.gorus-gonder:disabled{opacity:.45;cursor:default}',
      '.gorus-vazgec{background:transparent;color:#6b5a4c;border:1px solid rgba(107,90,76,.5)}',
      '.gorus-kutu button:focus-visible,.gorus-satir button:focus-visible,.gorus-dugme:focus-visible,.gorus-kutu textarea:focus-visible,.gorus-satir textarea:focus-visible{outline:3px solid #c9a45c;outline-offset:2px}',
      '.gorus-dugme{position:fixed;right:14px;bottom:14px;z-index:9000;padding:9px 15px;background:rgba(27,20,32,.82);color:#e8d9b5;border:1px solid rgba(201,164,92,.6)}',
      '.gorus-dugme:hover{background:#7d2638;color:#f4ecdc}',
      '.gorus-tesekkur{margin:0;font-style:italic}',
    ].join('');
    document.head.appendChild(css);
  }

  // Ortak gövde: yazı kutusu ve "Gönder". Boşken gönderilmez; gönderince yerini teşekkür alır.
  function govde(kap, tur, kapatMetni, kapat) {
    const m = METIN[tur];
    const alan = document.createElement('textarea');
    alan.maxLength = 2000; alan.placeholder = m.yer; alan.setAttribute('aria-label', m.baslik);
    const dugmeler = document.createElement('div'); dugmeler.className = 'gorus-dugmeler';
    const gonder = document.createElement('button'); gonder.type = 'button'; gonder.className = 'gorus-gonder'; gonder.textContent = 'Gönder'; gonder.disabled = true;
    if (kapatMetni) {
      const v = document.createElement('button'); v.type = 'button'; v.className = 'gorus-vazgec'; v.textContent = kapatMetni;
      v.addEventListener('click', kapat); dugmeler.appendChild(v);
    }
    dugmeler.appendChild(gonder);
    alan.addEventListener('input', function () { gonder.disabled = !alan.value.trim(); });
    // Yazarken oyunun kısayolları (boşluk, ok tuşları) devreye girmesin
    ['keydown', 'keyup', 'keypress'].forEach(function (o) { alan.addEventListener(o, function (e) { e.stopPropagation(); }); });
    gonder.addEventListener('click', function () {
      const yazi = alan.value.trim();
      if (!yazi) return;
      gorusGonder(tur, yazi);
      alan.remove(); dugmeler.remove();
      const p = kap.querySelector('p'); if (p) p.remove();
      const t = document.createElement('p'); t.className = 'gorus-tesekkur'; t.textContent = METIN.tesekkur; kap.appendChild(t);
      if (kapat) setTimeout(kapat, 1800);
    });
    kap.appendChild(alan); kap.appendChild(dugmeler);
    return alan;
  }

  function kutuAc(tur) {
    if (kutuAcik) return;
    kutuAcik = true; stil();
    if (window.sayac) window.sayac('gorus_' + tur + '_gor');
    const m = METIN[tur];
    const perde = document.createElement('div'); perde.className = 'gorus-perde';
    const kutu = document.createElement('div'); kutu.className = 'gorus-kutu';
    kutu.setAttribute('role', 'dialog'); kutu.setAttribute('aria-modal', 'true'); kutu.setAttribute('aria-label', m.baslik);
    const b = document.createElement('h2'); b.textContent = m.baslik;
    const p = document.createElement('p'); p.textContent = m.yazi;
    kutu.appendChild(b); kutu.appendChild(p);
    const kapat = function () { perde.remove(); kutuAcik = false; document.removeEventListener('keydown', tus, true); };
    const tus = function (e) { if (e.key === 'Escape') { e.stopPropagation(); kapat(); } };
    const alan = govde(kutu, tur, m.kapat, kapat);
    perde.addEventListener('click', function (e) { if (e.target === perde) kapat(); });
    document.addEventListener('keydown', tus, true);
    perde.appendChild(kutu); document.body.appendChild(perde);
    alan.focus();
  }

  // Bölüm sonu: özet panelinde "Sırada" başlığının üstüne. Panel her açılışta yeniden çizildiği için her saniye bakılır.
  const sorulanBolum = {};
  function bolumSorusunuYerlestir() {
    const ozet = document.querySelector('#panel-icerik .ozet-panel');
    if (!ozet || ozet.querySelector('.gorus-satir')) return;
    const ad = bolumAdi();
    if (sorulanBolum[ad] === 'gonderildi') return;
    stil();
    if (!sorulanBolum[ad] && window.sayac) window.sayac('gorus_bolum_gor');
    sorulanBolum[ad] = 'soruldu';
    const m = METIN.bolum;
    const satir = document.createElement('div'); satir.className = 'gorus-satir';
    const b = document.createElement('h3'); b.textContent = m.baslik;
    const p = document.createElement('p'); p.textContent = m.yazi;
    satir.appendChild(b); satir.appendChild(p);
    govde(satir, 'bolum', '', null);
    satir.querySelector('.gorus-gonder').addEventListener('click', function () { if (iz.gorus) sorulanBolum[ad] = 'gonderildi'; });
    const sirada = Array.prototype.filter.call(ozet.querySelectorAll('h3'), function (h) { return /^Sırada/.test(h.textContent); })[0];
    if (sirada) ozet.insertBefore(satir, sirada); else ozet.appendChild(satir);
  }

  if (cihaz !== 'b') return; // çıkış sorusu ve köşe düğmesi yalnız bilgisayarda

  // Çıkış sorusu: oyun başladıktan en az 8 saniye sonra, fare sayfanın üst kenarından çıkınca, oturumda bir kez.
  document.addEventListener('mouseout', function (e) {
    if (cikisSoruldu || kutuAcik || e.relatedTarget || e.clientY > 0) return;
    if (iz.bas < 0 || iz.sn - iz.bas < 8 || iz.gorus) return;
    cikisSoruldu = true;
    kutuAc('cikis');
  });

  function dugmeKoy() {
    stil();
    const d = document.createElement('button');
    d.type = 'button'; d.className = 'gorus-dugme'; d.textContent = 'Görüş yaz';
    d.addEventListener('click', function () { kutuAc('serbest'); });
    document.body.appendChild(d);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', dugmeKoy);
  else dugmeKoy();
})();

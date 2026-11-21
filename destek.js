/* Aşkın Bedeli: destek kartı ve bölüm kilidi (oyun sayfasında çalışır).
   araclar/site_hazirla.py bu dosyayı site/oyun/index.html kopyasına ekler; web/ altındaki oyuna dokunmaz.

   - Ayar: window.DESTEK (firebase-ayar.js).
   - Oyuncu sonUcretsizBolum'ü bitirip sıradaki bölüme geçince kart açılır:
       "Destek ol" → ödeme sayfası (odemeAdresi) → tesekkur.html destek kaydını yazar.
       "Beklemeyi tercih ederim" → her yeni bölüm beklemeSaati sonra açılır.
   - Kilit tarayıcıdadır; aşılması kabul edildi (Cemil, 20 Kasım 2026).
   - Destek kaydı: localStorage 'muhadarat_destek' = '1'. Ödeme hesaba da işlenir: ödeme adresine hesabın kimliği (uid)
     eklenir, ödeme katmanı bildirimi alınca kaydeder, hesap-oyun.js başka cihazda /durum'dan okur.
   - Misafir oyuncudan ödemeden önce giriş istenir (destek hesaba bağlansın diye). */
(function () {
  'use strict';
  const A = Object.assign({ sonUcretsizBolum: 8, enAz: 194, oneriler: [194, 250, 400], odemeAdresi: null, beklemeSaati: 48 }, window.DESTEK || {});
  const DESTEK = 'muhadarat_destek', BEKLE = 'muhadarat_bekle';
  const oku = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const yaz = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* yok */ } };
  const olc = (o, p) => { if (typeof window.olcum === 'function') window.olcum(o, p); };

  function bolumNo() {
    try {
      const k = JSON.parse(oku('muhadarat_pilot_v1') || 'null');
      return k && k.bolum >= 101 && k.bolum <= 116 ? k.bolum - 100 : 0;
    } catch (e) { return 0; }
  }
  const destekli = () => oku(DESTEK) === '1';
  const bekleme = () => { try { return JSON.parse(oku(BEKLE) || 'null'); } catch (e) { return null; } };

  /* ---- görünüm ---- */
  let kutu = null, sayacZaman = null, girisAcik = false;
  function stil() {
    if (document.getElementById('destek-stil')) return;
    const s = document.createElement('style');
    s.id = 'destek-stil';
    s.textContent = [
      '.destek-perde{position:fixed;inset:0;z-index:2147483000;display:grid;place-items:center;padding:16px;',
      'background:radial-gradient(ellipse at center,rgba(27,20,32,.82),rgba(10,5,12,.96));overflow:auto}',
      '.destek-mektup{width:min(560px,100%);max-height:calc(100vh - 32px);overflow:auto;background:#f4ecdc;color:#2b1f1a;',
      'border-radius:6px;padding:30px 34px 24px;font:400 17px/1.6 "EB Garamond",Georgia,serif;',
      'box-shadow:0 20px 50px rgba(0,0,0,.6),inset 0 0 0 1px rgba(138,106,46,.4),inset 0 0 0 8px #f4ecdc,inset 0 0 0 9px rgba(138,106,46,.55)}',
      '.destek-mektup h2{font:italic 600 26px/1.2 "Cormorant Garamond",Georgia,serif;color:#7d2638;margin:0 0 12px}',
      '.destek-mektup p{margin:0 0 12px}',
      '.destek-imza{font-style:italic;text-align:right;color:#6b5a4c;margin-top:4px}',
      '.destek-dugmeler{display:flex;flex-direction:column;align-items:center;gap:10px;margin-top:18px}',
      '.destek-ode{font:600 19px/1 "Cormorant Garamond",Georgia,serif;letter-spacing:.06em;text-transform:uppercase;color:#f4ecdc;',
      'background:#7d2638;border:1px solid #c9a45c;border-radius:999px;padding:14px 30px;cursor:pointer;',
      'box-shadow:inset 0 0 0 3px #7d2638,inset 0 0 0 4px rgba(236,217,164,.55)}',
      '.destek-ode:disabled{opacity:.55;cursor:not-allowed}',
      '.destek-bekle{background:none;border:0;color:#6b5a4c;font:400 16px "EB Garamond",Georgia,serif;text-decoration:underline;cursor:pointer;padding:4px}',
      '.destek-sayac{font:600 22px/1.2 "Cormorant Garamond",Georgia,serif;color:#2f5a4e;text-align:center;margin:6px 0 2px}',
      '.destek-kucuk{font-size:14px;color:#6b5a4c;text-align:center;margin:0}',
      '.destek-mektup button:focus-visible,.destek-mektup a:focus-visible{outline:3px solid #c9a45c;outline-offset:3px}',
      '.destek-mektup a{color:#7d2638}','.destek-mektup a.destek-ode{color:#f4ecdc}',
      '.destek-tutarlar{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:16px 0 6px}',
      '.destek-tutar{font:600 17px/1 "Cormorant Garamond",Georgia,serif;padding:10px 16px;border-radius:999px;border:1px solid #8a6a2e;background:#fffaf0;color:#2b1f1a;cursor:pointer}',
      '.destek-tutar.secili{background:#2f5a4e;border-color:#2f5a4e;color:#f4ecdc}',
      '.destek-diger{display:inline-flex;align-items:center;gap:6px;font-size:15px;color:#6b5a4c}',
      '.destek-diger input{width:90px;font:600 17px "Cormorant Garamond",Georgia,serif;padding:8px 10px;border:1px solid #8a6a2e;border-radius:999px;background:#fffaf0;color:#2b1f1a;text-align:center}',
    ].join('');
    document.head.appendChild(s);
  }

  function kapat() {
    if (sayacZaman) { clearInterval(sayacZaman); sayacZaman = null; }
    if (kutu) { kutu.remove(); kutu = null; }
  }

  function goster(icerik) {
    stil();
    kapat();
    kutu = document.createElement('div');
    kutu.className = 'destek-perde';
    kutu.lang = 'tr'; // büyük harfe çevirmede İ/ı doğru çıksın
    kutu.setAttribute('role', 'dialog');
    kutu.setAttribute('aria-modal', 'true');
    kutu.innerHTML = '<div class="destek-mektup">' + icerik + '</div>';
    document.body.appendChild(kutu);
    const ilk = kutu.querySelector('button, a');
    if (ilk) ilk.focus();
  }

  /* Tutar seçimi: hazır düğmeler (oneriler) + "istediğiniz kadar" kutusu; en az A.enAz TL */
  function tutarSecici() {
    const dugmeler = A.oneriler.map((t, i) =>
      '<button type="button" class="destek-tutar' + (i === 0 ? ' secili' : '') + '" data-tutar="' + t + '">' + t + ' TL</button>').join('');
    return '<div class="destek-tutarlar" role="group" aria-label="Destek tutarı">' + dugmeler
      + '<label class="destek-diger"><span>İstediğiniz kadar</span>'
      + '<input type="number" inputmode="numeric" min="' + A.enAz + '" step="1" placeholder="' + A.enAz + '+" data-is="diger"> TL</label></div>'
      + '<p class="destek-kucuk" data-is="tutar-not">En az ' + A.enAz + ' TL. Tek seferlik; abonelik yok.</p>';
  }

  function odeDugmesi() {
    return A.odemeAdresi
      ? '<button class="destek-ode" type="button" data-is="ode">Destek ol · ' + A.oneriler[0] + ' TL</button>'
      : '<button class="destek-ode" type="button" disabled>Destek ol (yakında)</button>';
  }

  function baglaOde() {
    if (!kutu) return;
    const d = kutu.querySelector('[data-is="ode"]');
    const diger = kutu.querySelector('[data-is="diger"]');
    const not = kutu.querySelector('[data-is="tutar-not"]');
    let tutar = A.oneriler[0];
    const guncelle = () => {
      const gecerli = tutar >= A.enAz;
      if (d) { d.textContent = 'Destek ol · ' + (gecerli ? tutar : A.enAz) + ' TL'; d.disabled = !gecerli; }
      if (not) not.textContent = gecerli ? 'En az ' + A.enAz + ' TL. Tek seferlik; abonelik yok.' : 'Destek tutarı en az ' + A.enAz + ' TL olabilir.';
    };
    kutu.querySelectorAll('[data-tutar]').forEach((b) => b.addEventListener('click', () => {
      kutu.querySelectorAll('[data-tutar]').forEach((x) => x.classList.toggle('secili', x === b));
      if (diger) diger.value = '';
      tutar = +b.dataset.tutar;
      guncelle();
    }));
    if (diger) diger.addEventListener('input', () => {
      kutu.querySelectorAll('[data-tutar]').forEach((x) => x.classList.remove('secili'));
      tutar = Math.floor(+diger.value || 0);
      guncelle();
    });
    if (!d) return;
    d.addEventListener('click', () => {
      if (tutar < A.enAz) return;
      const tur = oku('muhadarat_hesap_tur');
      // Misafir: destek bir hesaba bağlansın diye önce giriş istenir (hesap ayarı yoksa eski akış)
      if (window.FIREBASE_AYAR && (!tur || tur === 'misafir')) { olc('odeme_giris_istendi', { bolum: bolumNo() }); girisKarti(); return; }
      olc('odeme_tikladi', { bolum: bolumNo(), value: tutar, currency: 'TRY' });
      const uid = window.HESAP_UID ? '&uid=' + encodeURIComponent(window.HESAP_UID) : '';
      location.href = A.odemeAdresi + (A.odemeAdresi.includes('?') ? '&' : '?') + 'tutar=' + tutar + uid;
    });
  }

  function girisKarti() {
    girisAcik = true;
    goster(
      '<h2>Önce sizi tanıyalım</h2>'
      + '<p>Desteğiniz adınıza kaydedilsin diye sizden önce giriş yapmanızı rica ediyorum. '
      + 'Böylece telefonunuzu değiştirseniz de bölümleriniz sizinle birlikte gelir.</p>'
      + '<p>Buraya kadarki ilerlemeniz kaybolmaz; giriş yaptıktan sonra kaldığınız yerden, bu sayfaya dönersiniz.</p>'
      + '<div class="destek-dugmeler"><a class="destek-ode" href="../giris.html" style="text-decoration:none;display:inline-block">Giriş yap ya da hesap aç</a>'
      + '<button class="destek-bekle" type="button" data-is="geri">Geri dön</button></div>'
    );
    kutu.querySelector('[data-is="geri"]').addEventListener('click', () => { girisAcik = false; kapat(); denetle(); });
  }

  function mektup(bolum) {
    goster(
      '<h2>Sevgili okurum,</h2>'
      + '<p>Feride\'yle buraya kadar yürüdüğünüz için teşekkür ederim.</p>'
      + '<p>Bu hikâye, Fatma Aliye Hanım\'ın 1892\'de kaleme aldığı <i>Muhadarat</i>\'tan esinlendi. Her sahnesi bir yağlı boya tablo gibi '
      + 'görünsün diye aylarca çalıştım; bu tabloların, seslerin ve sizi bu sayfaya getiren her şeyin bir bedeli oldu. '
      + 'Arkamda büyük bir şirket yok; yalnızca bu hikâyeyi benimle birlikte seven sizler varsınız.</p>'
      + '<p>Kimse parası olmadığı için Feride\'yi yolun yarısında bırakmasın istedim. Bu yüzden destek olmasanız da oynamaya devam edebilirsiniz: '
      + 'her yeni bölüm, kırk sekiz saat sonra sizin için kendiliğinden açılır.</p>'
      + '<p>Beklemeden devam etmek ve bu oyunun yaşamasına yardım etmek isterseniz, sizden tek seferlik bir destek rica ediyorum. '
      + 'Tutarı siz seçin. Bir kez destek olursanız sezonun sonuna kadar Feride\'nin yanında kalırsınız; ikinci sezon da biraz sizin sayenizde yazılır.</p>'
      + '<p class="destek-imza">Sevgiyle,<br>Aşkın Bedeli\'ni hazırlayan el</p>'
      + (A.odemeAdresi ? tutarSecici() : '')
      + '<div class="destek-dugmeler">' + odeDugmesi()
      + '<button class="destek-bekle" type="button" data-is="bekle">Ücretsiz devam et (her bölüm 48 saatte bir)</button></div>'
    );
    olc('destek_karti_goruldu', { bolum: bolum });
    baglaOde();
    kutu.querySelector('[data-is="bekle"]').addEventListener('click', () => {
      yaz(BEKLE, JSON.stringify({ bolum: bolum, zaman: Date.now() + A.beklemeSaati * 3600e3 }));
      olc('bekleme_secti', { bolum: bolum });
      denetle();
    });
  }

  function kalanMetin(ms) {
    const dk = Math.max(0, Math.ceil(ms / 60000));
    const g = Math.floor(dk / 1440), s = Math.floor((dk % 1440) / 60), d = dk % 60;
    const parca = [];
    if (g) parca.push(g + ' gün');
    if (s) parca.push(s + ' saat');
    if (!g && d) parca.push(d + ' dakika');
    return parca.join(' ') || 'birkaç dakika';
  }

  function beklemeKarti(b) {
    goster(
      '<h2>' + b.bolum + '. bölüm hazırlanıyor</h2>'
      + '<p>Beklemeyi seçtiniz; teşekkür ederim. Sıradaki bölüm şu kadar sonra kendiliğinden açılacak:</p>'
      + '<div class="destek-sayac" data-is="sayac"></div>'
      + '<p class="destek-kucuk">Bu sayfayı kapatabilirsiniz; vakti gelince kaldığınız yerden devam edersiniz.</p>'
      + (A.odemeAdresi ? tutarSecici() : '')
      + '<div class="destek-dugmeler">' + odeDugmesi()
      + '<a class="destek-bekle" href="../">Tanıtım sayfasına dön</a></div>'
    );
    baglaOde();
    const sayac = kutu.querySelector('[data-is="sayac"]');
    const guncelle = () => {
      const kalan = b.zaman - Date.now();
      if (kalan <= 0) { kapat(); return; }
      sayac.textContent = kalanMetin(kalan);
    };
    guncelle();
    sayacZaman = setInterval(guncelle, 30000);
  }

  /* ---- karar ---- */
  function denetle() {
    const b0 = bolumNo();
    if (!b0 || b0 <= A.sonUcretsizBolum || destekli()) { girisAcik = false; kapat(); return; }
    if (girisAcik) return;
    let b = bekleme();
    if (!b) { if (!kutu || !kutu.querySelector('[data-is="bekle"]')) mektup(b0); return; }
    if (b0 > b.bolum) {
      // Bekleyen oyuncu bir bölümü daha bitirdi: sıradaki için yeni sayaç
      b = { bolum: b0, zaman: Date.now() + A.beklemeSaati * 3600e3 };
      yaz(BEKLE, JSON.stringify(b));
    }
    if (Date.now() < b.zaman) { if (!sayacZaman) beklemeKarti(b); }
    else kapat();
  }

  window.destekDenetle = denetle;
  function basla() { denetle(); setInterval(denetle, 4000); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', basla);
  else basla();
})();

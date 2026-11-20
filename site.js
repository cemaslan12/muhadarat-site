/* Muhadarat tanıtım sitesi: haberler, karakter seçici, bölüm listesi, gezinme. */
(function () {
  'use strict';
  const $ = (s) => document.querySelector(s);
  const AYLAR = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
  const el = (etiket, sinif, metin) => {
    const e = document.createElement(etiket);
    if (sinif) e.className = sinif;
    if (metin != null) e.textContent = metin;
    return e;
  };

  /* ---------- Oyun kaydı (oyun aynı adreste /oyun/ altında; kayıt anahtarı motor.js'teki PILOT_KAYIT) ---------- */
  let simdiki = null; // 101..116
  try {
    const k = JSON.parse(localStorage.getItem('muhadarat_pilot_v1') || 'null');
    if (k && k.bolum >= 101 && k.bolum <= 116) simdiki = k.bolum;
  } catch (e) { /* kayıt okunamadı */ }

  if (simdiki) {
    const b = BOLUMLER.find((x) => x.no === simdiki);
    const not = $('#devam-notu');
    not.hidden = false;
    not.textContent = 'Kaldığın yer: ' + (simdiki - 100) + '. Bölüm, ' + b.ad;
    $('#giris-oyna').textContent = 'Devam et';
  }

  /* ---------- Haberler ---------- */
  const liste = $('#haber-listesi');
  HABERLER.forEach((h) => {
    const [y, a, g] = h.tarih.split('-').map(Number);
    const kart = el('article', 'haber');
    const resim = el('div', 'haber-resim');
    resim.style.backgroundImage = 'url(' + h.resim + ')';
    const tarih = el('div', 'haber-tarih');
    tarih.append(el('b', '', String(g).padStart(2, '0')), el('span', '', AYLAR[a - 1] + ' ' + y));
    resim.append(tarih);
    const govde = el('div', 'haber-govde');
    govde.append(el('h3', '', h.baslik));
    const ayrinti = el('details');
    ayrinti.append(el('summary', '', 'Devamı ›'), el('p', '', h.metin));
    govde.append(ayrinti);
    kart.append(resim, govde);
    liste.append(kart);
  });

  /* ---------- Karakterler ---------- */
  const madalyonlar = $('#madalyonlar');
  const bolumKar = $('#karakterler');
  const resimKutu = $('.tablo-buyuk');
  let secili = 0;
  // portreleri önden yükle
  KARAKTERLER.forEach((k) => { const i = new Image(); i.src = 'gorsel/karakter/' + k.id + '.webp'; });

  KARAKTERLER.forEach((k, i) => {
    const d = el('button', 'madalyon');
    d.type = 'button';
    d.setAttribute('role', 'tab');
    d.setAttribute('aria-label', k.ad);
    d.title = k.ad;
    const img = el('img');
    img.src = 'gorsel/karakter/' + k.id + '_k.webp';
    img.alt = '';
    img.loading = 'lazy';
    d.append(img);
    d.addEventListener('click', () => karakterSec(i));
    madalyonlar.append(d);
  });

  function karakterSec(i, ilk) {
    secili = (i + KARAKTERLER.length) % KARAKTERLER.length;
    const k = KARAKTERLER[secili];
    bolumKar.style.setProperty('--kar-renk', k.renk);
    $('#kar-ad').textContent = k.ad;
    $('#kar-unvan').textContent = k.unvan;
    $('#kar-metin').textContent = k.metin;
    $('#kar-filigran').textContent = k.ad.split(' ')[0];
    const dl = $('#kar-kunye');
    dl.replaceChildren(...k.kunye.map(([b, d]) => { const s = el('div'); s.append(el('dt', '', b), el('dd', '', d)); return s; }));
    [...madalyonlar.children].forEach((m, j) => m.setAttribute('aria-selected', j === secili ? 'true' : 'false'));
    const img = $('#kar-resim');
    img.alt = k.ad + ' portresi';
    if (ilk) { img.src = 'gorsel/karakter/' + k.id + '.webp'; return; }
    resimKutu.classList.add('degisiyor');
    setTimeout(() => {
      img.src = 'gorsel/karakter/' + k.id + '.webp';
      resimKutu.classList.remove('degisiyor');
    }, 220);
  }
  $('#kar-geri').addEventListener('click', () => karakterSec(secili - 1));
  $('#kar-ileri').addEventListener('click', () => karakterSec(secili + 1));
  madalyonlar.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      karakterSec(secili + (e.key === 'ArrowRight' ? 1 : -1));
      madalyonlar.children[secili].focus();
      e.preventDefault();
    }
  });
  // dokunmatik kaydırma
  let dokunX = null;
  $('.kar-sahne').addEventListener('touchstart', (e) => { dokunX = e.touches[0].clientX; }, { passive: true });
  $('.kar-sahne').addEventListener('touchend', (e) => {
    if (dokunX == null) return;
    const fark = e.changedTouches[0].clientX - dokunX;
    if (Math.abs(fark) > 50) karakterSec(secili + (fark < 0 ? 1 : -1));
    dokunX = null;
  });
  karakterSec(0, true);

  /* ---------- Bölümler ---------- */
  const izgara = $('#bolum-izgara');
  const acik = simdiki || 101; // oynanabilen en ileri bölüm
  BOLUMLER.forEach((b, i) => {
    const sira = i + 1;
    let durum, sinif;
    if (b.no < acik) { durum = 'Oynandı'; sinif = 'bitti'; }
    else if (b.no === acik) { durum = simdiki ? 'Devam et' : 'Başla'; sinif = 'siradaki'; }
    else { durum = 'Kilitli'; sinif = 'kilitli'; }
    const kart = el(sinif === 'kilitli' ? 'div' : 'a', 'bolum-kart ' + sinif + (b.no === 116 ? ' final' : ''));
    if (kart.tagName === 'A') kart.href = 'oyun/';
    const img = el('img');
    img.src = 'gorsel/bolum/' + String(sira).padStart(2, '0') + '.webp';
    img.alt = '';
    img.loading = 'lazy';
    const govde = el('div', 'govde');
    govde.append(el('h3', '', b.ad), el('p', '', b.ozet));
    kart.append(img, el('span', 'no', String(sira)), el('span', 'durum', durum), govde);
    kart.setAttribute('aria-label', sira + '. Bölüm: ' + b.ad + ' (' + durum + ')');
    if (sinif === 'kilitli') kart.title = 'Önceki bölümü bitirince açılır';
    izgara.append(kart);
  });
  if (simdiki) $('#bolumler-alt').textContent = (simdiki - 101) + ' bölüm geride kaldı. Sıradaki: ' + (simdiki - 100) + '. Bölüm.';

  /* ---------- Sekmeler: görünen bölümü işaretle ---------- */
  const sekmeler = [...document.querySelectorAll('.sekmeler a')];
  const muhur = $('.muhur');
  const gozcu = new IntersectionObserver((girdiler) => {
    girdiler.forEach((g) => {
      if (!g.isIntersecting) return;
      const id = g.target.id;
      sekmeler.forEach((a) => a.classList.toggle('etkin', a.getAttribute('href') === '#' + id));
      // giriş ekranında zaten büyük bir Oyna düğmesi var
      muhur.classList.toggle('gizli', id === 'giris' && !window.matchMedia('(max-width: 980px)').matches);
      const etkin = sekmeler.find((a) => a.classList.contains('etkin'));
      if (etkin && window.matchMedia('(max-width: 980px)').matches) {
        const nav = etkin.parentElement;
        nav.scrollTo({ left: etkin.offsetLeft - (nav.clientWidth - etkin.offsetWidth) / 2, behavior: 'smooth' });
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });
  document.querySelectorAll('main > section').forEach((s) => gozcu.observe(s));

  /* ---------- Gizlilik penceresi ---------- */
  $('#gizlilik-ac').addEventListener('click', () => $('#gizlilik').showModal());
})();

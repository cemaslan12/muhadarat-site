/* Aşkın Bedeli: oyun sayfasında hesap eşleme ve ölçüm.
   araclar/site_hazirla.py bu dosyayı site/oyun/index.html kopyasına ekler (web/ altındaki oyuna dokunmaz).
   Giriş yöntemi seçilmemişse giriş sayfasına yollar; giriş yapılmışsa ilerlemeyi buluta yazar.
   Oyunun kaydını (muhadarat_pilot_v1) izleyip bölüm geçişlerini ölçüme bildirir. */
import * as H from '../hesap.js';

const t = H.tur();
if (!t) {
  location.replace('../giris.html');
} else {
  if (t !== 'misafir' && H.ayarVar()) {
    H.kullanici().then((u) => {
      if (!u) { H.turYaz(null); location.replace('../giris.html'); return; }
      H.esitlemeyiBaslat(u);
      // Ödeme sunucusu hesaba "sezon1" yazdıysa bu cihazda da kilidi aç
      H.sezonAcik(u).then((acik) => {
        if (acik) { try { localStorage.setItem('muhadarat_destek', '1'); } catch (e) { /* yok */ } if (window.destekDenetle) window.destekDenetle(); }
      }).catch(() => {});
    }).catch(() => { /* çevrimdışı: oyun yerel kayıtla sürer */ });
  }
  bolumleriIzle();
}

/* ---- ölçüm: bölüm geçişleri ---- */
function bolumNo() {
  try {
    const k = JSON.parse(localStorage.getItem('muhadarat_pilot_v1') || 'null');
    return k && k.bolum >= 101 && k.bolum <= 116 ? k.bolum - 100 : 0;
  } catch (e) { return 0; }
}

function bolumleriIzle() {
  const olc = (olay, p) => { if (typeof window.olcum === 'function') window.olcum(olay, p); };
  let onceki = bolumNo();
  olc('oyun_acildi', { bolum: onceki || 1, giris: t || 'yok' });
  // Daha önce bildirilen en ileri bölüm (aynı bölüm bitişi iki kez sayılmasın)
  const ANAHTAR = 'muhadarat_hesap_olculen';
  let olculen = 0;
  try { olculen = +localStorage.getItem(ANAHTAR) || 0; } catch (e) { /* yok */ }

  setInterval(() => {
    const simdi = bolumNo();
    if (!simdi || simdi === onceki) return;
    if (simdi === 1 && onceki > 1) {
      olc('bastan_basladi', { onceki_bolum: onceki });
    } else if (simdi > onceki) {
      for (let b = Math.max(onceki, 1); b < simdi; b++) {
        if (b > olculen) {
          olc('bolum_bitti', { bolum: b });
          olculen = b;
          try { localStorage.setItem(ANAHTAR, String(b)); } catch (e) { /* yok */ }
        }
      }
      olc('bolum_basladi', { bolum: simdi });
    }
    onceki = simdi;
  }, 4000);
}

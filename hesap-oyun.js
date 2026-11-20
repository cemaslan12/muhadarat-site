/* Aşkın Bedeli: oyun sayfasında hesap eşleme.
   araclar/site_hazirla.py bu dosyayı site/oyun/index.html kopyasına ekler (web/ altındaki oyuna dokunmaz).
   Giriş yöntemi seçilmemişse giriş sayfasına yollar; giriş yapılmışsa ilerlemeyi buluta yazar. */
import * as H from '../hesap.js';

const t = H.tur();
if (!t) {
  location.replace('../giris.html');
} else if (t !== 'misafir' && H.ayarVar()) {
  H.kullanici().then((u) => {
    if (!u) { H.turYaz(null); location.replace('../giris.html'); return; }
    H.esitlemeyiBaslat(u);
  }).catch(() => { /* çevrimdışı: oyun yerel kayıtla sürer */ });
}

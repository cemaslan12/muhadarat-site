/* Firebase proje ayarı (gizli değildir; her Firebase web uygulamasında sayfada görünür).
   Firebase konsolu → Proje ayarları → Uygulamalarınız → Web uygulaması → "firebaseConfig" nesnesini
   aşağıya yapıştırın. Boş (null) kaldıkça Google ve Apple düğmeleri "yakında" görünür; misafir girişi çalışır. */
window.FIREBASE_AYAR = null;

/* Apple ile giriş, Apple Developer üyeliği ve Firebase'de Apple sağlayıcısı açılınca true yapılır. */
window.APPLE_ACIK = false;

/* Google Analytics ölçüm kimliği ("G-" ile başlar). Boş kaldıkça ölçüm ve çerez izni kutusu görünmez.
   Kurulum: site/OLCUM_KURULUMU.md */
window.GA_KIMLIK = 'G-XHVGQX6RZ0';

/* Destek kartı (tek seferlik ödeme). Kart, bu bölüm bittikten sonra, sıradaki bölüme geçerken açılır. */
window.DESTEK = {
  sonUcretsizBolum: 8,      // 8. bölüm ücretsiz; 9. bölümden itibaren destek ya da bekleme
  enAz: 194,                // en düşük destek tutarı (TL); oyuncu bunun üstünde istediği tutarı yazabilir
  oneriler: [194, 250, 400],// kartta hazır tutar düğmeleri
  odemeAdresi: 'https://askin-bedeli-odeme.ibrahim-cemil1.workers.dev/odeme', // ödeme katmanının adresi (…workers.dev/odeme). null: ödeme düğmesi "yakında" görünür
  beklemeSaati: 48,         // ödemeyen oyuncu için her yeni bölüm arasındaki bekleme
};

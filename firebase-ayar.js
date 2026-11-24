/* Firebase proje ayarı (gizli değildir; her Firebase web uygulamasında sayfada görünür).
   Firebase konsolu → Proje ayarları → Uygulamalarınız → Web uygulaması → "firebaseConfig" nesnesini
   aşağıya yapıştırın. Boş (null) kaldıkça Google ve Apple düğmeleri "yakında" görünür; misafir girişi çalışır. */
window.FIREBASE_AYAR = {
  apiKey: 'AIzaSyCcwoaHSfAiBLWatz8DcOmedjEo_KxSyIM',
  authDomain: 'askin-bedeli.firebaseapp.com',
  projectId: 'askin-bedeli',
  storageBucket: 'askin-bedeli.firebasestorage.app',
  messagingSenderId: '1081044279332',
  appId: '1:1081044279332:web:a021a5630a9e177c11b8b1',
};

/* Apple ile giriş, Apple Developer üyeliği ve Firebase'de Apple sağlayıcısı açılınca true yapılır. */
window.APPLE_ACIK = false;

/* Google Analytics ölçüm kimliği ("G-" ile başlar). Boş kaldıkça ölçüm ve çerez izni kutusu görünmez.
   Kurulum: site/OLCUM_KURULUMU.md */
/* 22 Kasım 2026: geçici olarak kapalı (Cemil'in kararı). Çerez kutusu telefonda reklamdan gelenin önünü kesiyordu,
   Analytics de izin vermeyeni saymadığı için işe yaramıyordu. Adım sayımı olcum.js'teki çerezsiz sayaçla sürüyor.
   Yeniden açmak için kimliği geri yazın: 'G-XHVGQX6RZ0' */
window.GA_KIMLIK = '';

/* Google Ads dönüşüm etiketi (24 Kasım 2026, Cemil'in kararı): yalnız reklamdan gelen ziyaretçide ve yalnız çerez
   kutusunda "Kabul ediyorum" denirse yüklenir. Oyun başladığında (basla adımı) Ads'e "Aşkın Bedeli - oyun başladı"
   dönüşümünü bildirir; kampanya bu dönüşüme göre teklif verir. Boş bırakılırsa etiket de kutu da çıkmaz. */
window.ADS_KIMLIK = 'AW-16644062551';
window.ADS_DONUSUM = 'AW-16644062551/VsbICNOquL4dENf6wIA-';

/* Destek kartı (tek seferlik ödeme). Kart, bu bölüm bittikten sonra, sıradaki bölüme geçerken açılır. */
window.DESTEK = {
  sonUcretsizBolum: 8,      // 8. bölüm ücretsiz; 9. bölümden itibaren destek ya da bekleme
  enAz: 194,                // en düşük destek tutarı (TL); oyuncu bunun üstünde istediği tutarı yazabilir
  oneriler: [194, 250, 400],// kartta hazır tutar düğmeleri
  odemeAdresi: 'https://askin-bedeli-odeme.ibrahim-cemil1.workers.dev/odeme', // ödeme katmanının adresi (…workers.dev/odeme). null: ödeme düğmesi "yakında" görünür
  beklemeSaati: 48,         // ödemeyen oyuncu için her yeni bölüm arasındaki bekleme
};

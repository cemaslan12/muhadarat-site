/* Firebase proje ayarı (gizli değildir; her Firebase web uygulamasında sayfada görünür).
   Firebase konsolu → Proje ayarları → Uygulamalarınız → Web uygulaması → "firebaseConfig" nesnesini
   aşağıya yapıştırın. Boş (null) kaldıkça Google ve Apple düğmeleri "yakında" görünür; misafir girişi çalışır. */
window.FIREBASE_AYAR = null;

/* Apple ile giriş, Apple Developer üyeliği ve Firebase'de Apple sağlayıcısı açılınca true yapılır. */
window.APPLE_ACIK = false;

/* Google Analytics ölçüm kimliği ("G-" ile başlar). Boş kaldıkça ölçüm ve çerez izni kutusu görünmez.
   Kurulum: site/OLCUM_KURULUMU.md */
window.GA_KIMLIK = 'G-XHVGQX6RZ0';

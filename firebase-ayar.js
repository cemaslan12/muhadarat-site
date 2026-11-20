/* Firebase proje ayarı (gizli değildir; her Firebase web uygulamasında sayfada görünür).
   Firebase konsolu → Proje ayarları → Uygulamalarınız → Web uygulaması → "firebaseConfig" nesnesini
   aşağıya yapıştırın. Boş (null) kaldıkça Google ve Apple düğmeleri "yakında" görünür; misafir girişi çalışır. */
window.FIREBASE_AYAR = null;

/* Apple ile giriş, Apple Developer üyeliği ve Firebase'de Apple sağlayıcısı açılınca true yapılır. */
window.APPLE_ACIK = false;

/* Aşkın Bedeli: hesap katmanı (Firebase Auth + Firestore).
   Oyunun kendi kaydı tarayıcıda "muhadarat_*" anahtarlarındadır; bu dosya o anahtarları
   giriş yapmış oyuncunun Firestore belgesine (oyuncular/{uid}) eşler. Oyun koduna dokunmaz. */

const SURUM = '10.12.2';
const TUR_ANAHTARI = 'muhadarat_hesap_tur';     // 'google' | 'apple' | 'misafir'
const ZAMAN_ANAHTARI = 'muhadarat_hesap_zaman'; // son buluta yazma zamanı (ms)

let fb = null; // { auth, db, m: modüller }

export const ayarVar = () => !!window.FIREBASE_AYAR;
export const tur = () => { try { return localStorage.getItem(TUR_ANAHTARI); } catch (e) { return null; } };
export function turYaz(t) { try { t ? localStorage.setItem(TUR_ANAHTARI, t) : localStorage.removeItem(TUR_ANAHTARI); } catch (e) { /* yok */ } }

export async function baslat() {
  if (fb || !ayarVar()) return fb;
  const kok = 'https://www.gstatic.com/firebasejs/' + SURUM + '/';
  const [app, auth, store] = await Promise.all([
    import(kok + 'firebase-app.js'), import(kok + 'firebase-auth.js'), import(kok + 'firebase-firestore.js'),
  ]);
  const uyg = app.initializeApp(window.FIREBASE_AYAR);
  const a = auth.getAuth(uyg);
  a.languageCode = 'tr';
  fb = { auth: a, db: store.getFirestore(uyg), A: auth, F: store };
  return fb;
}

/* Oturum durumu ilk kez belli olunca kullanıcıyı (ya da null) döndürür. */
export async function kullanici() {
  const f = await baslat();
  if (!f) return null;
  await f.auth.authStateReady();
  return f.auth.currentUser;
}

export async function girisYap(saglayici) {
  const f = await baslat();
  const { A } = f;
  let p;
  if (saglayici === 'google') { p = new A.GoogleAuthProvider(); p.setCustomParameters({ prompt: 'select_account' }); }
  else { p = new A.OAuthProvider('apple.com'); p.addScope('email'); p.addScope('name'); p.setCustomParameters({ locale: 'tr_TR' }); }
  const sonuc = await A.signInWithPopup(f.auth, p);
  turYaz(saglayici);
  await buluttanCek(sonuc.user);
  await bulutaYaz(sonuc.user, true);
  return sonuc.user;
}

export async function cikisYap() {
  const f = await baslat();
  if (f) { await bulutaYaz(f.auth.currentUser, true).catch(() => {}); await f.A.signOut(f.auth); }
  turYaz(null);
}

export async function hesabiSil() {
  const f = await baslat();
  const u = f.auth.currentUser;
  if (!u) return;
  await f.F.deleteDoc(f.F.doc(f.db, 'oyuncular', u.uid));
  try { await f.A.deleteUser(u); }
  catch (e) {
    if (e.code !== 'auth/requires-recent-login') throw e;
    const s = tur() === 'apple' ? new f.A.OAuthProvider('apple.com') : new f.A.GoogleAuthProvider();
    await f.A.reauthenticateWithPopup(u, s);
    await f.A.deleteUser(u);
  }
  turYaz(null);
}

/* ---- kayıt eşleme ---- */
function yerelKayit() {
  const k = {};
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const ad = localStorage.key(i);
      if (ad.startsWith('muhadarat_') && !ad.startsWith('muhadarat_hesap_')) k[ad] = localStorage.getItem(ad);
    }
  } catch (e) { /* yok */ }
  return k;
}
const yerelZaman = () => { try { return +localStorage.getItem(ZAMAN_ANAHTARI) || 0; } catch (e) { return 0; } };

/* Buluttaki kayıt yereldekinden yeniyse (ya da yerelde kayıt yoksa) yerele yazar. */
export async function buluttanCek(u) {
  const f = await baslat();
  if (!f || !u) return false;
  const s = await f.F.getDoc(f.F.doc(f.db, 'oyuncular', u.uid));
  if (!s.exists()) return false;
  const d = s.data();
  const yerelBos = !localStorage.getItem('muhadarat_pilot_v1');
  if (!d.kayit || (!yerelBos && (d.zaman || 0) <= yerelZaman())) return false;
  Object.keys(yerelKayit()).forEach((ad) => localStorage.removeItem(ad));
  Object.entries(d.kayit).forEach(([ad, deger]) => localStorage.setItem(ad, deger));
  localStorage.setItem(ZAMAN_ANAHTARI, String(d.zaman || Date.now()));
  return true;
}

let sonGonderilen = '';
export async function bulutaYaz(u, zorla) {
  const f = await baslat();
  if (!f || !u) return;
  const kayit = yerelKayit();
  const metin = JSON.stringify(kayit);
  if (!zorla && metin === sonGonderilen) return;
  const zaman = Date.now();
  await f.F.setDoc(f.F.doc(f.db, 'oyuncular', u.uid), {
    kayit, zaman, ad: u.displayName || '', saglayici: tur() || '', guncelleme: f.F.serverTimestamp(),
  }, { merge: true });
  sonGonderilen = metin;
  try { localStorage.setItem(ZAMAN_ANAHTARI, String(zaman)); } catch (e) { /* yok */ }
}

/* Oyun sayfasında: düzenli aralıkla ve sayfa kapanırken buluta yaz. */
export function esitlemeyiBaslat(u) {
  const yaz = () => bulutaYaz(u).catch(() => {});
  setInterval(yaz, 30000);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') yaz(); });
  window.addEventListener('pagehide', yaz);
}

export const sezonAcik = async (u) => {
  const f = await baslat();
  if (!f || !u) return false;
  const s = await f.F.getDoc(f.F.doc(f.db, 'oyuncular', u.uid));
  return s.exists() && s.data().sezon1 === true;
};

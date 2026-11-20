/* =========================================================================
   PLAN — İSTANBUL: SAİT EFENDİ'NİN KONAĞI  (notlar/gezinme_tasarimi.md)
   Serbest vakitte (motor.js serbestVakit) vakit tanımında plan: 'konak' varsa oda düğmeleri
   yerine bulunulan mekânın resmi üstünde tıklanabilir noktalar çizilir.

   Biçim:
     PLANLAR.konak.mekanlar[id] = { bolge, kat: 0|1, x, y (o katın harita SVG'sinde merkez),
       kisa (haritadaki kısa ad), ad? (planda gösterilen ad), de (bulunma hâli: "sofada"),
       noktalar: [{ hedef, ad, x, y, w, h, tur: 'kapi'|'merdiven'|'dis' }] }
     bolge yalnız haritanın rengi ve gizli geçişin hangi tarafta bittiğidir; erişim izni değildir
     (izin vakit tanımındaki kapali / riskli / refakat kurallarıdır).
     Noktaların x, y, w, h değerleri RESİM YÜZDESİDİR (sol üst köşe, genişlik, yükseklik).
     Bütün koordinatlar aşağıdaki TEK NOKTA tablosunda durur: resimler plana göre yeniden
     çizilince yalnız bu tablo güncellenir. Bir mekânda en çok 5 nokta olur (geri yönü bunlardan
     biridir; motor onu alttaki "‹ Geri" düğmesine taşır, ayrıca saymaz).
     tur 'dis': planın dışına (sokağa) çıkış; şimdilik kapalıdır, nedeni disNeden.
     esdeger: { 'taslik_gunduz': 'taslik', … } fon çeşidini asıl düğüme bağlar (motor planEsle / planCesit).
   Kurallar (kapali / riskli / refakat) vakit tanımında durur; planda da tanımlanabilir
   (plan düzeyindekiler bütün bölümlerde geçerli olur, bu yüzden şimdilik boş).
   ========================================================================= */
window.PLANLAR = window.PLANLAR || {};

(function () {
  var V = window.OYUN_VERISI;

  // Görseli henüz çizilmemiş geçit mekânları: en yakın mevcut resim (plan_konak yeniden çizilince silinir).
  // Aday sırası önemli: selamlık sofasının yalnız gündüz resmi çizildi (gece çeşidi planlanmadı); kaydı
  // oyun_verisi.js'e eklenince gece de o resim (aynı kompozisyon, aynı noktalar) kullanılır, yoksa eski yedek.
  // Tur 27: konak_avlu kendi resmine kavuştu (düğün evinin kapısı yedeği kalktı). Babamın odası Leyla'ların
  // konağındaki hanımefendinin odasında görünmesin: resmi gelene kadar aynı evin selamlık sofası (kapısı solda).
  var YEDEK = { selamlik_sofa: ['selamlik_sofa_gunduz', 'dugun_sofa'], baba_oda: ['selamlik_sofa_gunduz', 'fevkiye_anne_oda'] };
  Object.keys(YEDEK).forEach(function (id) {
    var m = V.mekanlar[id];
    if (!m || m.arkaplan) return;
    var y = YEDEK[id].filter(function (a) { return V.mekanlar[a] && V.mekanlar[a].arkaplan; })[0];
    if (y) m.arkaplan = V.mekanlar[y].arkaplan;
  });

  /* ---- NOKTA tablosu: [hedef, x, y, w, h, tur, ad] (resim yüzdesi; şimdiki resimlere göre) ----
     Dokunma alanı üst %8 (üst çubuk) ile alt %20 (Geri / Burada / İşaret düğmeleri) arasında kalır:
     y ≥ 8, y + h ≤ 80. Gündüz çeşitleri (esdeger) aynı kompozisyonla çizildi; aynı noktaları kullanır.
     16 Kasım 2026 gecesi son resimlerden ölçüldü: mabeyn_kapisi (+gündüz), sari_oda, josephine_oda ve
     calibe_oda (gündüz resminden; gece çeşitleri aynı kompozisyonla çiziliyor), konak_bahce, cardak;
     yemek_salonu_gunduz gece resmiyle aynı kompozisyon (noktalar değişmedi). Eski resimde kalanlar:
     limonluk, suha_oda, baba_oda (yedek fon). Tur 27: konak_avlu yeni resminden; konak_bahce_gece (ve aynı resmi
     taşıyan bahce_gece) gündüz bahçesiyle aynı kompozisyon, aynı noktalar. */
  var NOKTA = {
    // Üst kat, harem. Sofa (yeniden çizildi): kamera merdiven başında; solda önde Feride'nin kapısı,
    // solda arkada kemerli geçit (sofanın ucuna), karşıda büyük salonun çift kapısı, sağda Perihan'ın
    // kapısı, sağ önde merdiven trabzanı (taşlığa iniş).
    konak_sofa: [
      ['fazila_oda',     3, 14, 12, 64, 'kapi',     'Odam'],
      ['mabeyn_kapisi', 28, 31,  6, 29, 'kapi',     'Sofanın ucu'],
      ['buyuk_salon',   39, 31, 21, 31, 'kapi',     'Büyük salon'],
      ['calibe_oda',    75, 26,  8, 44, 'kapi',     'Perihan Hanım\'ın odası'],
      ['taslik',        84, 55, 16, 25, 'merdiven', 'Merdiven · taşlık'],
    ],
    fazila_oda:    [['konak_sofa',     5, 13, 14, 66, 'kapi', 'Sofa']],
    // Perihan'ın odası (gündüz resmi; gece aynı kompozisyon): kapı sağ duvarda, önde
    calibe_oda:    [['konak_sofa',    86, 16, 11, 64, 'kapi', 'Sofa']],
    buyuk_salon:   [['konak_sofa',    72, 22, 24, 48, 'kapi', 'Sofa']],
    // Sofanın ucu (yeni düzen): sol duvarda önde sarı oda, arkada Madam'ın odası (bitişik); arka duvarda
    // ortada demir sürgülü çift kanat mabeyn kapısı, hemen sağında aralık misafir (Süha Bey) kapısı;
    // sağ önde sofaya dönen oymalı kemer. Sağ duvarda kafesli pencere ve sedir (geçit değil).
    mabeyn_kapisi: [
      ['sari_oda',         5, 12, 13, 68, 'kapi', 'Sarı oda'],
      ['josephine_oda',   20, 18,  9, 62, 'kapi', 'Madam\'ın odası'],
      ['mabeyn_merdiven', 38, 21, 24, 49, 'kapi', 'Mabeyn kapısı · selamlık'],
      ['suha_oda',        64, 30, 10, 42, 'kapi', 'Süha Bey\'in odası'],
      ['konak_sofa',      92, 10,  8, 70, 'kapi', 'Sofa'],
    ],
    // Sarı oda: kapı sol duvarda, önde (iç yüzünde pirinç sürgü)
    sari_oda:      [['mabeyn_kapisi',  5, 12, 13, 68, 'kapi', 'Sofanın ucu']],
    // Madam'ın odası (gündüz resmi; gece aynı kompozisyon): kapı sol duvarda, önde
    josephine_oda: [['mabeyn_kapisi',  3, 14, 13, 66, 'kapi', 'Sofanın ucu']],
    suha_oda:      [['mabeyn_kapisi', 66, 12, 10, 46, 'kapi', 'Sofanın ucu']],
    // Zemin kat ve bahçe. Taşlık (yeniden çizildi): solda yukarı çıkan ana merdiven ve çinili çeşme,
    // ortada aralık mutfak kapısı, onun sağında açık bahçe kapısı, sağda yemek salonunun çift kapısı,
    // sol kenarda dış kapının iç yüzü (avluya).
    taslik: [
      ['konak_sofa',   18, 15, 20, 60, 'merdiven', 'Merdiven · sofa'],
      ['mutfak',       42, 32, 12, 34, 'kapi',     'Mutfak'],
      ['konak_bahce',  60, 32, 12, 34, 'kapi',     'Bahçe'],
      ['yemek_salonu', 79, 22, 16, 56, 'kapi',     'Yemek salonu'],
      ['konak_avlu',    0, 12,  6, 66, 'kapi',     'Avlu kapısı'],
    ],
    // Mutfak (yeniden çizildi): solda aralık kapı taşlığa, ortada servis kapısı yemek salonuna,
    // sağda kiler aralığı (yalnız haritada, tıklanmaz), en sağda sürgülü arka kapı bahçeye.
    mutfak: [
      ['taslik',        2, 12, 20, 66, 'kapi', 'Taşlık'],
      ['yemek_salonu', 51, 24, 17, 34, 'kapi', 'Servis kapısı · yemek salonu'],
      ['konak_bahce',  89, 16, 10, 62, 'kapi', 'Arka kapı · bahçe'],
    ],
    // Yemek salonu (yeniden çizildi): ortada taşlığa açılan çift kapı, sağda servis kapısı (mutfağa),
    // solda bahçe pencereleri (geçit değil).
    yemek_salonu: [
      ['taslik', 35, 27, 28, 27, 'kapi', 'Taşlık'],
      ['mutfak', 70, 26, 12, 38, 'kapi', 'Servis kapısı · mutfak'],
    ],
    // Bahçe (gündüz): ortada konağın açık bahçe kapısı (taşlık), solunda alçak mutfak arka kapısı,
    // sol ortada asmalı çardağın ağzı, sol kenarda limonluğun cam duvarı ve kapısı; sağda çeşme (geçit değil).
    konak_bahce: [
      ['taslik',   49, 40, 15, 35, 'kapi', 'Konak · taşlık'],
      ['mutfak',   35, 45,  9, 27, 'kapi', 'Arka kapı · mutfak'],
      ['cardak',   17, 36, 14, 44, 'kapi', 'Çardak'],
      ['limonluk',  0, 20, 12, 60, 'kapi', 'Limonluk'],
    ],
    limonluk:   [['konak_bahce', 38, 36, 16, 22, 'kapi', 'Bahçe']],
    // Çardak: sağda asmaların arasındaki geniş aralık bahçeye açılır
    cardak:     [['konak_bahce', 68, 22, 26, 56, 'kapi', 'Bahçe']],
    // Avlu (Tur 27, yeni resim g_konak_avlu.webp'ten ölçüldü): solda konağın açık kapısı ve iki basamak (taşlık),
    // ortada-sağda kemerli sokak kapısının aralık çift kanadı (arkasında kaldırımlı sokak); sağda kuyu (geçit değil).
    konak_avlu: [
      ['taslik',  4, 12, 19, 68, 'kapi', 'Konağın kapısı · taşlık'],
      ['sokak',  49, 22, 28, 52, 'dis',  'Sokak'],
    ],
    // Mabeyn ve selamlık (16 Kasım 2026 akşamı yeniden çizildi; gece/gündüz çifti aynı kompozisyon).
    // Mabeyn merdiveni: kamera merdivenin dibinde; tepede yarı aralık selamlık kapısı, sol önde az önce
    // geçilen ağır mabeyn kapısının açık kanadı (demir çivili, sürgülü).
    mabeyn_merdiven: [
      ['selamlik_sofa', 48, 13, 18, 45, 'kapi', 'Selamlık sofası'],
      ['mabeyn_kapisi',  1, 10, 27, 68, 'kapi', 'Mabeyn kapısı · harem'],
    ],
    // Selamlık sofası (gündüz resmi; gece çeşidi yok, YEDEK yukarıda): solda babamın odasının kapısı,
    // sağda arkada mabeyne dönen yarı aralık kapı, sağ önde sokak kapısına inen ana merdivenin trabzanı.
    selamlik_sofa: [
      ['baba_oda',         4, 14, 14, 66, 'kapi',     'Babamın odası'],
      ['mabeyn_merdiven', 68, 22, 16, 47, 'kapi',     'Mabeyn · harem'],
      ['selamlik_kapisi', 87, 50, 13, 30, 'merdiven', 'Merdiven · selamlık kapısı'],
    ],
    baba_oda: [['selamlik_sofa', 0, 10, 8, 55, 'kapi', 'Selamlık sofası']],
    // Selamlık kapısı (gündüz resmi; içeriden çizildi): solda yukarı çıkan merdiven, ortada sokağa ardına
    // kadar açık çift kanat (dışarı çıkış, kapalı: disNeden).
    selamlik_kapisi: [
      ['selamlik_sofa',  0, 10, 24, 70, 'merdiven', 'Merdiven · selamlık'],
      ['sokak',         36, 18, 34, 60, 'dis',      'Sokak'],
    ],
  };

  /* ---- Mekânlar: bölge, kat, harita konumu (her kat ayrı SVG: 120 × 70; merkez) ---- */
  var M = {
    // Zemin kat: bahçe, hizmet hattı, avlu, selamlık girişi
    limonluk:      { bolge: 'harem', kat: 0, x: 10,  y: 12, kisa: 'Limonluk', de: 'limonlukta' },
    cardak:        { bolge: 'harem', kat: 0, x: 30,  y: 12, kisa: 'Çardak', de: 'çardakta' },
    konak_bahce:   { bolge: 'harem', kat: 0, x: 20,  y: 32, kisa: 'Bahçe', de: 'bahçede' },
    mutfak:        { bolge: 'zemin', kat: 0, x: 54,  y: 12, kisa: 'Mutfak', de: 'mutfakta' },
    taslik:        { bolge: 'zemin', kat: 0, x: 54,  y: 32, kisa: 'Taşlık', de: 'taşlıkta' },
    yemek_salonu:  { bolge: 'zemin', kat: 0, x: 80,  y: 32, kisa: 'Yemek salonu', de: 'yemek salonunda' },
    konak_avlu:    { bolge: 'dis',   kat: 0, x: 54,  y: 58, kisa: 'Avlu kapısı', de: 'avlu kapısında' },
    selamlik_kapisi: { bolge: 'selamlik', kat: 0, x: 107, y: 32, kisa: 'Selamlık kapısı', de: 'selamlık kapısında' },
    // Üst kat, harem
    buyuk_salon:   { bolge: 'harem', kat: 1, x: 38,  y: 10, kisa: 'Büyük salon', de: 'büyük salonda' },
    fazila_oda:    { bolge: 'harem', kat: 1, x: 14,  y: 26, kisa: 'Odam', de: 'odamda' },
    konak_sofa:    { bolge: 'harem', kat: 1, x: 38,  y: 26, kisa: 'Sofa', de: 'sofada' },
    calibe_oda:    { bolge: 'harem', kat: 1, x: 62,  y: 26, kisa: 'Perihan H. odası', de: 'Perihan Hanım\'ın odasında' },
    mabeyn_kapisi: { bolge: 'harem', kat: 1, x: 38,  y: 44, kisa: 'Sofanın ucu', ad: 'Sofanın ucu, mabeyn kapısı', de: 'sofanın ucunda' },
    sari_oda:      { bolge: 'harem', kat: 1, x: 14,  y: 44, kisa: 'Sarı oda', de: 'sarı odada' },
    josephine_oda: { bolge: 'harem', kat: 1, x: 14,  y: 60, kisa: 'Madam\'ın odası', de: 'Madam\'ın odasında' },
    suha_oda:      { bolge: 'harem', kat: 1, x: 62,  y: 58, kisa: 'Süha B. odası', ad: 'Süha Bey\'in odası', de: 'Süha Bey\'in odasında' },
    // Mabeyn ve selamlık (üst kat)
    mabeyn_merdiven: { bolge: 'mabeyn', kat: 1, x: 85, y: 44, kisa: 'Mabeyn merdiveni', ad: 'Mabeyn merdiveni', de: 'mabeyn merdiveninde' },
    selamlik_sofa:   { bolge: 'selamlik', kat: 1, x: 107, y: 44, kisa: 'Selamlık sofası', de: 'selamlık sofasında' },
    baba_oda:        { bolge: 'selamlik', kat: 1, x: 107, y: 26, kisa: 'Babamın odası', de: 'babamın odasında' },
  };

  // Fon çeşitleri (gündüz ışığı). İkinci gruptakiler yalnız oyun_verisi.js'te kaydı varsa bağlanır: resmi gelip
  // kaydı eklenince kendiliğinden devreye girer (3–6. bölümlerin fon() kancası da aynı adları ister).
  var ESDEGER = {
    konak_sofa_gunduz: 'konak_sofa', fazila_oda_gunduz: 'fazila_oda', buyuk_salon_gunduz: 'buyuk_salon',
    taslik_gunduz: 'taslik', mutfak_gunduz: 'mutfak',
  };
  ['mabeyn_kapisi', 'mabeyn_merdiven', 'selamlik_sofa', 'selamlik_kapisi', 'yemek_salonu', 'josephine_oda', 'calibe_oda', 'baba_oda']
    .forEach(function (id) { if (V.mekanlar[id + '_gunduz']) ESDEGER[id + '_gunduz'] = id; });
  // Gece çeşidi (Tur 27): bahçenin gece resmi. Vakit ya da sahne 'konak_bahce_gece' derse aynı düğüm; gece vaktinde
  // düz 'konak_bahce'ye girilince de motor (fonGorunumu) gündüz resmi yerine bunu gösterir. (bahce_gece aynı resmi
  // taşır ama 6. bölümün sahne kimliğidir; plan düğümüne çevrilmez, akışı değişmesin.)
  if (V.mekanlar.konak_bahce_gece) ESDEGER.konak_bahce_gece = 'konak_bahce';

  Object.keys(M).forEach(function (id) {
    M[id].noktalar = (NOKTA[id] || []).map(function (n) {
      return { hedef: n[0], x: n[1], y: n[2], w: n[3], h: n[4], tur: n[5] || 'kapi', ad: n[6] };
    });
  });

  window.PLANLAR.konak = {
    ad: 'Sait Efendi\'nin konağı',
    etkin: true,
    // Planın dışına açılan noktalar (tur 'dis') şimdilik kapalı: şehir haritası sonra
    disNeden: 'Konaktan dışarı çıkmak araba ya da refakat ister. Bu akşam sokak kapısı sürgülü.',
    harita: {
      genislik: 120, yukseklik: 70,
      katlar: { 0: 'Zemin kat · bahçe', 1: 'Üst kat' },
      // Bölge rengi yalnız evin düzenidir; o akşamki izin ⊘ / ⚠ işaretlerinde
      bolgeler: [
        { kat: 0, ad: 'Harem bahçesi', bolge: 'harem', x: 1, y: 1, w: 39, h: 68 },
        { kat: 0, ad: 'Zemin kat · hizmet', bolge: 'zemin', x: 41, y: 1, w: 52, h: 46 },
        { kat: 0, ad: 'Avlu', bolge: 'dis', x: 41, y: 48, w: 52, h: 21 },
        { kat: 0, ad: 'Selamlık girişi', bolge: 'selamlik', x: 94, y: 1, w: 25, h: 68 },
        { kat: 1, ad: 'Harem · üst kat', bolge: 'harem', x: 1, y: 1, w: 74, h: 68 },
        { kat: 1, ad: 'Mabeyn', bolge: 'mabeyn', x: 76, y: 1, w: 17, h: 68 },
        { kat: 1, ad: 'Selamlık', bolge: 'selamlik', x: 94, y: 1, w: 25, h: 68 },
      ],
      // Oynanmayan hizmet hacimleri: yalnız planda görünür, tıklanmaz
      hacimler: [
        { kat: 0, ad: 'kiler', x: 69, y: 7, w: 14, h: 10, bagli: 'mutfak' },
      ],
    },
    // Fon çeşitleri ayrı mekân değil, aynı yerin ışığıdır: aynı düğüm, aynı noktalar, aynı harita yeri.
    // Bölüm fon() kancasıyla seçer; vakit ya da sahne çeşit adını verirse motor asıl düğüme çevirir.
    esdeger: ESDEGER,
    kapali: {}, riskli: {},
    mekanlar: M,
  };
})();

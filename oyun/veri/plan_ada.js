/* =========================================================================
   PLAN — BÜYÜKADA KÖŞKÜ  (notlar/gezinme_tasarimi.md, notlar/yaygin_gorsel_istemleri.md "Ada köşkü düzeni")
   Biçim plan_konak.js ile aynı. 7–10. bölümlerin serbest vakitleri bu planda yürünür (plan: 'ada').

   Düzen (iki katlı, kiralık ahşap yazlık; haremlik/selamlık, mabeyn, kafes yok; duvarlar ince):
     Üst kat (kat 1): sofa ortada (kamera ana merdivenin başında, kuzeye bakar). Sol (batı) duvarda camlı
       çift kanat → veranda → dış merdiven → bahçe; arka duvar solda Feride'nin odası (Madam'ın odası
       bitişiği, planda tıklanmaz); sağ arka köşede sofanın kısa kolu: solunda babamın kapısı (tıklanmaz),
       ucunda Perihan Hanım'ın kapısı; sağ (doğu) duvarda arka (hizmet) merdiveni → mutfak; sağ önde ana
       merdiven → alt kattaki selamlık odası.
     Alt kat (kat 0): ana merdivenin dibinde, arada yalnız ağır bir perdeyle selamlık odası (pencereleri
       denize ve iskeleye bakar); doğusunda, yalnız selamlığa açılan misafir odası (penceresi çamlığa);
       arka merdivenin dibinde mutfak (bahçeye verandanın altından açılan alçak kapısı var).
     Bahçe (kat 0): köşk doğuda; çamlık patikası kuzeyde, asmalı bahçe duvarı batıda, iskeleye inen demir
       kapı güneybatıda.

   Ada'da bölgeler yalnız "bahçe" ve "köşk"tür; engeller ayrı kanat değil, vakit kurallarıdır:
     perde      → kapali ya da riskli (selamlığın perdesi: alt katın erkeklere ayrılmış yanı)
     işitilme   → riskli, gozcu = duyan kişi; duyan yoksa gözcüsüz (iz satırı, anlık ceza yok)
     ev sahibinin emri / Feride'nin kendi sınırı → kapali (neden: kimin emri, ne zamana kadar)
     refakat    → riskli + refakat(S) (iskele, çamlık, bahçe duvarı yalnız gidilmez)
   Kurallar vakit tanımlarında durur (pilot7–10); plan düzeyindekiler bütün bölümlere geçeceği için boş.

   NOKTA tablosu resim yüzdesidir ([hedef, x, y, w, h, tur, ad]); resimler "Ada köşkü düzeni"ne göre
   yeniden çizildikçe yalnız bu tablo doldurulur. Noktası olmayan mekânda yürüyüş geçici olarak "‹ Geri"
   ve Harita'dan "Git" ile yapılır (graf 'baglanti' listesinden kurulur).
   ========================================================================= */
window.PLANLAR = window.PLANLAR || {};

(function () {
  var V = window.OYUN_VERISI;

  // Kendi resmi olan Ada mekânları (gorseller.js'ten; bölümlerin YEDEK'leri bunu değiştirmez)
  var KENDI = {};
  Object.keys(V.mekanlar).forEach(function (id) {
    if (id.indexOf('ada_') === 0 && V.mekanlar[id].arkaplan) KENDI[id] = true;
  });

  // Görseli henüz çizilmemiş mekân: aynı kompozisyonun öbür ışığı (noktalar o resme göre ölçülecek).
  // Selamlığın yalnız gündüz resmi var; gece çeşidi gelene kadar gece de o resim kullanılır (konak
  // planındaki selamlık sofası gibi). Öteki yedekler bölüm dosyalarında (pilot7–10 YEDEK).
  var YEDEK = { ada_selamlik: ['ada_selamlik_gunduz'] };
  Object.keys(YEDEK).forEach(function (id) {
    var m = V.mekanlar[id];
    if (!m || m.arkaplan) return;
    var y = YEDEK[id].filter(function (a) { return V.mekanlar[a] && V.mekanlar[a].arkaplan; })[0];
    if (y) m.arkaplan = V.mekanlar[y].arkaplan;
  });

  /* ---- NOKTA tablosu: [hedef, x, y, w, h, tur, ad] (resim yüzdesi) ----
     Dokunma alanı üst %8 ile alt %20 arasında kalır: y ≥ 8, y + h ≤ 80.
     16 Kasım 2026 gecesi son ("eskitilmiş") resimlerden ölçüldü; gece/gündüz çiftleri aynı kompozisyon
     (sofa/_gunduz, misafir/_gunduz, oda/_gece, selamlik_gunduz/_gece, iskele/_aksam). Resimsiz: ada_mutfak,
     ada_duvar (bölümlerin YEDEK fonu; yürüyüş Geri ve Harita ile). */
  var NOKTA = {
    // İskele: solda kahvehane, sağda vapur iskelesi; köşke dönüş tepedeki köşklerin olduğu yamaçta (yokuş)
    ada_iskele: [
      ['ada_bahce', 30, 14, 18, 24, 'merdiven', 'Yokuş · köşkün bahçesi'],
    ],
    // Bahçe: solda iskeleye açılan demir kapı ve duvar boyunca asma çardağı, ortada çamlığa çıkan patika,
    // sağda köşk: verandanın altında mutfağın alçak kapısı, verandaya çıkan dış merdiven
    ada_bahce: [
      ['ada_iskele',  2, 38, 15, 42, 'kapi',     'Demir kapı · iskele'],
      ['ada_duvar',  18, 42, 24, 32, 'kapi',     'Asma altı · bahçe duvarı'],
      ['ada_camlik', 44, 38,  9, 28, 'merdiven', 'Patika · çamlık'],
      ['ada_mutfak', 63, 52,  7, 22, 'kapi',     'Mutfak'],
      ['ada_sofa',   73, 22, 15, 56, 'merdiven', 'Dış merdiven · sofa'],
    ],
    // Çamlık: sağda aşağı inen patika, ucunda köşkün yan cephesi ve bahçe duvarı
    ada_camlik: [
      ['ada_bahce', 66, 28, 30, 44, 'merdiven', 'Patika · bahçe'],
    ],
    // Sofa (gece; gündüz aynı): solda verandanın camlı çift kanadı, arka duvar solda odamın kapısı, sağ arkada
    // Perihan Hanım'ın koridoru, sağ duvarda arka merdivenin aralık kapısı, sağ önde ana merdiven
    ada_sofa: [
      ['ada_bahce',         5, 10, 15, 66, 'kapi',     'Veranda · bahçe'],
      ['ada_oda',          28, 18, 11, 50, 'kapi',     'Odam'],
      ['ada_kapi_perihan', 64, 16, 13, 44, 'kapi',     'Koridor · Perihan Hanım\'ın kapısı'],
      ['ada_mutfak',       81, 16,  9, 34, 'merdiven', 'Arka merdiven · mutfak'],
      ['ada_selamlik',     86, 52, 14, 28, 'merdiven', 'Merdiven · selamlık'],
    ],
    // Perihan Hanım'ın koridoru: sol ön kenarda sofaya açılan geniş açıklık (sol duvardaki kapı babamın, tıklanmaz;
    // koridorun ucundaki kapı geçit değil, "Burada" işi)
    ada_kapi_perihan: [
      ['ada_sofa', 0, 10, 9, 70, 'kapi', 'Sofa'],
    ],
    // Odam (gündüz; gece aynı): kapı sağ duvarda, önde (iç sürgü)
    ada_oda: [
      ['ada_sofa', 85, 15, 13, 65, 'kapi', 'Sofa'],
    ],
    // Selamlık (gündüz; gece aynı): arka duvarın sağ ucunda misafir odasının kapısı, en sağda perde ve merdiven
    ada_selamlik: [
      ['ada_misafir', 84, 11, 8, 49, 'kapi',     'Misafir odası'],
      ['ada_sofa',    93, 12, 7, 66, 'merdiven', 'Perde · merdiven · sofa'],
    ],
    // Misafir odası (gece; gündüz aynı): kapı sol duvarda, önde (kilitte anahtar)
    ada_misafir: [
      ['ada_selamlik', 2, 10, 19, 70, 'kapi', 'Selamlık'],
    ],
    // Asma altı (17 Kasım 2026, Chrome'dan çizildi): solda taş duvar ve kahve masası, sağ yarıda bahçeye açılan geçiş
    ada_duvar: [
      ['ada_bahce', 62, 14, 34, 62, 'kapi', 'Bahçe · köşk'],
    ],
    // Mutfak (17 Kasım 2026): solda bahçeye açılan yarım kapı, sağda üst kata çıkan arka merdiven
    ada_mutfak: [
      ['ada_bahce',  1, 14, 14, 64, 'kapi',     'Bahçe kapısı'],
      ['ada_sofa',  88, 14, 12, 64, 'merdiven', 'Arka merdiven · sofa'],
    ],
  };

  /* ---- Mekânlar: bölge, kat, harita konumu (her kat ayrı SVG: 120 × 70; merkez) ----
     Kat 0'da batıda bahçe, doğuda köşkün alt katı; kat 1'de köşkün üst katı aynı ayak izinde (x 52–119). */
  var M = {
    // Kat 0: bahçe ve iskele
    ada_camlik:       { bolge: 'bahce', kat: 0, x: 34,  y: 10, kisa: 'Çamlık', de: 'çamlıkta' },
    ada_duvar:        { bolge: 'bahce', kat: 0, x: 12,  y: 30, kisa: 'Bahçe duvarı', de: 'bahçe duvarında' },
    ada_bahce:        { bolge: 'bahce', kat: 0, x: 34,  y: 40, kisa: 'Bahçe', de: 'bahçede' },
    ada_iskele:       { bolge: 'bahce', kat: 0, x: 12,  y: 58, kisa: 'İskele', de: 'iskelede' },
    // Kat 0: köşkün alt katı
    ada_mutfak:       { bolge: 'kosk',  kat: 0, x: 66,  y: 22, kisa: 'Mutfak', de: 'mutfakta' },
    ada_selamlik:     { bolge: 'kosk',  kat: 0, x: 76,  y: 50, kisa: 'Selamlık odası', de: 'selamlık odasında' },
    ada_misafir:      { bolge: 'kosk',  kat: 0, x: 102, y: 50, kisa: 'Misafir odası', de: 'misafir odasında' },
    // Kat 1: köşkün üst katı
    ada_oda:          { bolge: 'kosk',  kat: 1, x: 64,  y: 16, kisa: 'Odam', ad: 'Odam', de: 'odamda' },
    ada_kapi_perihan: { bolge: 'kosk',  kat: 1, x: 104, y: 16, kisa: 'Perihan H. kapısı', ad: 'Perihan Hanım\'ın kapısı', de: 'Perihan Hanım\'ın kapısında' },
    ada_sofa:         { bolge: 'kosk',  kat: 1, x: 84,  y: 42, kisa: 'Sofa', de: 'sofada' },
  };
  Object.keys(M).forEach(function (id) {
    M[id].noktalar = (NOKTA[id] || []).map(function (n) {
      return { hedef: n[0], x: n[1], y: n[2], w: n[3], h: n[4], tur: n[5] || 'kapi', ad: n[6] };
    });
  });

  // Fon çeşitleri (aynı yerin ışığı). İkinci gruptakiler yalnız oyun_verisi.js'te kaydı varsa bağlanır:
  // resmi gelip kaydı eklenince kendiliğinden devreye girer (plan_konak.js ile aynı yol).
  var ESDEGER = {
    ada_sofa_gunduz: 'ada_sofa', ada_selamlik_gunduz: 'ada_selamlik',
    ada_camlik_gece: 'ada_camlik', ada_iskele_aksam: 'ada_iskele',
  };
  [['ada_oda_gece', 'ada_oda'], ['ada_misafir_gunduz', 'ada_misafir'], ['ada_selamlik_gece', 'ada_selamlik'],
   ['ada_bahce_gece', 'ada_bahce'], ['ada_mutfak_gece', 'ada_mutfak']]
    .forEach(function (e) { if (V.mekanlar[e[0]]) ESDEGER[e[0]] = e[1]; });

  /* Bölümlerin fon() kancası için ışık seçimi: fon(mekanId, 'gunduz' | 'gece') → çeşit adı ya da null.
     Çeşit yalnız kendi resmi varsa verilir (yoksa motor asıl fona düşer). Ana resimler: sofa, misafir
     odası, Perihan'ın kapısı gece; oda, bahçe, çamlık, iskele gündüz; selamlığın yalnız gündüz resmi var.
     GECICI: kendi resmi gelmemiş odanın gündüzü için 7–9. bölümlerin eskiden kullandığı konak resmi. */
  var CESIT = {
    gunduz: { ada_sofa: 'ada_sofa_gunduz', ada_misafir: 'ada_misafir_gunduz', ada_selamlik: 'ada_selamlik_gunduz' },
    gece: { ada_oda: 'ada_oda_gece', ada_selamlik: 'ada_selamlik_gece', ada_camlik: 'ada_camlik_gece', ada_iskele: 'ada_iskele_aksam',
      ada_bahce: 'ada_bahce_gece', ada_mutfak: 'ada_mutfak_gece' },
  };
  var GECICI = { gunduz: { ada_oda: 'fazila_oda_gunduz', ada_misafir: 'fazila_oda_gunduz' } };
  function fon(id, isik) {
    var c = (CESIT[isik] || {})[id];
    if (c && KENDI[c]) return c;
    // Kendi resmi olan mekân asıl fonunda kalır (bölümün eski konak yedeği devreye girmesin)
    if (KENDI[id]) return id;
    var g = (GECICI[isik] || {})[id];
    if (g && !KENDI[id] && V.mekanlar[g]) return g;
    return null;
  }

  window.PLANLAR.ada = {
    ad: 'Büyükada köşkü',
    etkin: true,
    disNeden: 'Ada\'da yalnız dolaşılmaz; refakat gerekir.',
    harita: {
      genislik: 120, yukseklik: 70,
      katlar: { 0: 'Alt kat · bahçe', 1: 'Üst kat' },
      bolgeler: [
        { kat: 0, ad: 'Bahçe · iskele · çamlık', bolge: 'bahce', x: 1, y: 1, w: 50, h: 68 },
        { kat: 0, ad: 'Köşk · alt kat', bolge: 'kosk', x: 52, y: 1, w: 67, h: 68 },
        { kat: 1, ad: 'Köşk · üst kat (ince duvarlar)', bolge: 'kosk', x: 52, y: 1, w: 67, h: 68 },
      ],
      // Oynanmayan hacimler: yalnız planda görünür, tıklanmaz
      hacimler: [
        { kat: 1, ad: 'veranda', x: 38, y: 36, w: 13, h: 12 },
        { kat: 1, ad: 'Madam\'ın odası', x: 54, y: 27, w: 20, h: 6 },
        { kat: 1, ad: 'babamın odası', x: 96, y: 27, w: 21, h: 6 },
      ],
    },
    // Geçitler: sofa ↔ bahçe (veranda ve dış merdiven), sofa ↔ mutfak (arka merdiven),
    // sofa ↔ selamlık (ana merdiven, dibinde perde), selamlık ↔ misafir odası, bahçe ↔ mutfak (alçak kapı)
    baglanti: [
      ['ada_iskele', 'ada_bahce'], ['ada_bahce', 'ada_duvar'], ['ada_bahce', 'ada_camlik'],
      ['ada_bahce', 'ada_sofa'], ['ada_bahce', 'ada_mutfak'], ['ada_mutfak', 'ada_sofa'],
      ['ada_sofa', 'ada_oda'], ['ada_sofa', 'ada_kapi_perihan'], ['ada_sofa', 'ada_selamlik'],
      ['ada_selamlik', 'ada_misafir'],
    ],
    esdeger: ESDEGER,
    fon: fon,
    kapali: {}, riskli: {},
    mekanlar: M,
  };

  /* Aynı köşk + asma (plan: 'ada_asma'): cepheye tırmanan asma Feride'nin penceresine uzanır ("penceremde asma
     var", "Asmadan indim", 9. bölüm). Yalnız ★ hedefi sofa olan ve odada • iş bulunan vakitlerde kullanılır
     (7. bölüm ikindi, 9. bölüm öğle): sofa merdivenin başı olduğu için oraya varmak vakti bitirir; odaya sofadan
     geçmeden ancak asmadan gidilir. Öteki vakitlerde bu geçit yok ("Git" kimseyi asmadan indirmesin). */
  // Tur 22 (GPT): asma yolu yalnız haritada değil resimde de görünür: odada pencere, bahçede cepheye
  // tırmanan asma (sağ üstteki pencere Feride'nin). Sofanın dış merdiveni 73–88'de kalır, asma 88'den sağda.
  var ASMA_NOKTA = {
    ada_oda: { hedef: 'ada_bahce', x: 44, y: 10, w: 22, h: 40, tur: 'merdiven', ad: 'Pencere · asma · bahçe' },
    ada_bahce: { hedef: 'ada_oda', x: 88, y: 8, w: 11, h: 40, tur: 'merdiven', ad: 'Asma · penceremden odam' },
  };
  // Beş yön sınırı: asma vakitlerinde (7. ikindi, 9. öğle) bahçe duvarında iş yok; onun yerine asma görünür
  // (duvar haritadan ve 'baglanti'dan yine gidilir).
  var MA = {};
  Object.keys(M).forEach(function (id) {
    var n = M[id].noktalar.filter(function (x) { return !(id === 'ada_bahce' && x.hedef === 'ada_duvar'); });
    MA[id] = Object.assign({}, M[id], { noktalar: n.concat(ASMA_NOKTA[id] ? [ASMA_NOKTA[id]] : []) });
  });
  window.PLANLAR.ada_asma = Object.assign({}, window.PLANLAR.ada, {
    ad: 'Büyükada köşkü',
    baglanti: window.PLANLAR.ada.baglanti.concat([['ada_bahce', 'ada_oda']]),
    mekanlar: MA,
  });
})();

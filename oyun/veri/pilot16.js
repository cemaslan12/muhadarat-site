/* =========================================================================
   PİLOT — YENİ BİÇİMDE 16. BÖLÜM: YÜZLEŞME VE SON  (bölüm no 116; 1. sezonun finali)
   Bağlayıcı plan: notlar/sezon1_son_plani.md ("Bölüm 16"). Ad, 15. bölümün siradaki.ad alanından
     ("Yüzleşme ve Son"). Sıradaki bölüm yok: siradaki.ad 'İkinci sezon', kanca sona göre 2. sezon sorusu.
   Tek soru: "Perihan'ın elindeki son ip hangisi; ben hangi kapıdan kendi adımla çıkacağım?"
   Romandan (§1, 30; §4 S20–S23; §8): Remzi ister, nikâh kıyılır, hekim şaşırır; misafirin pencere/silah
     bunalımı ("Ben bundan sonra neden yaşayayım?"); çarşıda Münevver ("Kızım sen yine benim evladımsın",
     "Sana yaptırdılar; sen yapmadın", "beni vefasız bilsin"); hekimin üvey anneden intikamı ve "Adieu";
     Beyrut, Muhterem Efendi'nin hanesi ve oğlu Şebib (2. sezon). Sarı odada beyaz elbise, mavi kurdele.
   Akış (doğrusal): sabah, oda (görev 0: Perihan'ın "yalnız gel" kâğıdı; kapıya göre öğlen haberi)
     → ikindi serbest vakti PLAN MODUNDA (plan 'konak'; ★ sarı oda) → ezan: sarı odada son yüzleşme
     (görev 1: kapıda Süha, ilk söz, iki hamle, babanın hükmü) → kapıya göre son (görev 2–4).
   Feride'nin planı: vakitte tanık/kanıt/baba hazırlar (Madam, Hatice, Perihan'ın dikiş kutusundaki yelek
     düğmesi ya da aynadaki nikâh günü, babayı kapıya çağırmak); sarı odada kozlarını kendi sırasıyla açar.
   Güç (guc): ilk söz kozsa +1 (sabah "yalnız değil" yazdıysa +2), iki hamlenin puanı (düğme 2; Madam,
     Hatice, sahte mektup kanıtı, 12. bölüm kaydı, konuşan Süha 1; kapı: baba geliyorsa 1), baba kapıda
     dinliyorsa +1, baba önce kıza soracaksa +1, p15_baba ikna +1 / karsi −1; Kenan yolunda p14_mektup
     'inandi' −1, p12_iftira 'tuttu' −1. Eşik 3 (guclu): babam döner (p16_baba 'dondu'), Perihan kızın
     kararından el çeker.
   Sonlar (p16_son) — kapi(S): p15_kapi; rotaya aykırı kapı ('kenan' Süha yolunda, 'suha' Kenan yolunda)
     ve eksik değer 'yok' sayılır:
     son_kavusma        kapı 'kenan' ve [babaRiza: (p15_hazir ≥ 1 ya da p14_mektup 'kanit') ve (guclu ya da
                        p15_baba 'ikna' ve guc ≥ 2)] ya da [gizliAcik: sabah arabayı hazır tuttu ve
                        (p15_kenan_yol 'gizli' ya da p15_hazir ≥ 2)], son seçimde nikâh/araba seçilirse.
     son_umutlu_ayrilik kapı 'kenan' ve son seçimde "bekle"/"yaz" (kavuşma kapalıysa yalnız bunlar) ya da
                        kapı 'yok' + guclu + Kenan yolu. Münevver'le Beyrut'a, Muhterem Efendi'nin hanesine.
     son_tehlikeli_evet kapı 'suha' ya da kapı 'yok' + guclu + Süha yolu. Şart uygulanır, Süha konaktan
                        çıkar, Perihan'ın bağı kopar; son karede sahte mektubun izi (sahteMektupIzi).
     son_remzi          kapı 'remzi' ya da kapı 'yok' + guclu değil. Nikâh, pencere haberi, çarşıda Münevver.
     son_hayir          (Cemil T27) kapı 'yok' + guclu + Süha yolu ve selamlıkta "Hayır" seçilirse: Feride Süha'ya da
                        hayır der, baba sözünü geri alır, Süha konaktan çıkar; son kare tehlikeli evetle ortak (Süha'nın
                        boş odası, sahteMektupIzi, an_iki_kagit). Bayrak p16_hayir (sart/hayir), p16_red (kapi/perihan).
                        T28b: ret her güç düzeyinde: Süha kapısında (şart menüsü ve el menüsü) güçsüz de "hayır" der (baba
                        sözünü geri almaz, rızasız nikâh da kıydırmaz; Süha yine çıkar); Remzi'ye giden gecede (güçsüz
                        kapısız ya da Remzi kapısı) p16_hayir 'gece' (HAYIR_GECE: nikâh kıyılmaz, baba desteklemez; p16_red
                        surgu/sus, p16_sebib sakla/baba). p16_iz 'sakla'|'ayir'|'birak' (kâğıtların fiziksel konumu).
     T27: sezon kartının Şebib satırı (SEBIB_SATIR) ve "Sırada" (SIRADA) sona göre; Sırada son kartı yinelemez.
   SAHTE MEKTUP İZİ: 14. bölümün izi (T28: alafranga saat; eski bitişik "herşey" dönem dışıydı); tek yerde (IZ sabiti +
     izKagit + sahteMektupIzi).
   Şebib: her sonda yalnız bir kâğıtta (Beyrut'tan mektup/cevap/zarf/bohça); sahneye çıkmaz.
   Okunanlar: p_rota, p15_yon; p15_kapi, p15_hazir, p15_baba, p15_kenan_yol; p14_mektup, p14_kagit, p14_yemin,
     p14_sefik, p14_dayak; p13_resim, p13_nimet, p13_madam, p13_ret; p12_iftira, p12_kayit, p12_diz;
     p10_hatice, p10_veda, p9_hatice, p8_prova, p8_ilk, p8_hatice; kozlar 'Bin liralık mektup',
     'Yelek düğmesi', 'Perihan ile Süha', 'Sarı odanın eşiği', 'İki fincan', 'Madam'ın tanıklığı',
     'Hatice'nin itirafı'; 14–15. bölümün kozları 'Sahte mektup', 'Sahte mektubun imzası', 'Süha Bey'in yazılı
     şartı', 15'te kutudan alınan 'Yelek düğmesi' (kaynağı "kutusundan aldım"); açılmış kozlar da bilinir
     (kozAcik). 12–15'in ara bayrakları (p1N_v_* vb.) okunmaz.
   Bayraklar: p16_not (yaz/sus/nimet), p16_sefik (golge/oda), p16_munevver (araba/riza), p16_pusula
     (sakla/yaz), p16_liste (yaz/baba), p16_yok (bekle/soz); vakit p16_v_madam (tanik/haber/koru),
     p16_v_hatice (tanik/sus), p16_hatice_soz, p16_v_dugme, p16_v_ayna, p16_v_baba (cagir/sor),
     p16_nazli, p16_nabi ('gordu': riskli geçit bedeli); keşif p16_k_fincan; p16_suha (soyle/karisma/el/
     once), p16_b1 (mektup/esik/fincan/ayna/blof/sus), p16_b2 ve p16_b3 (dugme/madam/hatice/kanit/kayit/
     suha/kapi/tehdit; b3 ayrıca yeter), p16_baba (dondu/perihan), p16_son_soz; sonlar: p16_ilk, p16_secim
     (nikah/gizli/bekle/mektup/git/haber), p16_duvak, p16_beyrut, p16_emanet, p16_sebib, p16_sart
     (cik/kenan/yuz), p16_evet, p16_kapim (acik/kapali), p16_iz, p16_istek (sefik/resim), p16_esya,
     p16_duello, p16_carsi; p16_son (dört son). T28: p16_kilit (isaret/mendil; gizli yolun sabahı). Aşama B ekleri: p16_b1 'bak'/'cesaret', p16_sart 'yazi',
     p16_duello 'beyoglu', p16_esya 'kagit', keşif p16_k_sandik (hepsi bu bölümde okunur). Okunan ek: p11_telgraf (Kenan'ın cebindeki cevap), p11_not (sahte imza kopya mı, tam ad mı),
     p10_teslim (mendil Kenan'da mı kaldı; Tur 2).
   Yeni koz: 'Süha Bey'in son pusulası' (Süha kapısında, sakla). Yelek düğmesi elde edilirse kaynağı "Elimde".
   GPT Tur 26 (Süha yolu oyuncusu) ekleri, hepsi bu bölümde okunur: p16_dugme (ver/sakla/baba: şarttan sonra
     düğmenin akıbeti oyuncunun seçimi; sonNotu okur), p16_sabah (baba/avlu: son karede sabah karşılaşmasının
     biçimi; sonNotu okur), p16_istek 'el' (bekle yolunda babadan güvenlik sınırı); yeni koz 'İki kâğıt, tek el'
     (son karede kâğıtları saklayana; Defter'de karşılaştırılabilir delil). Remzi listesinin −3'ü haberin Remzi'ye
     ulaştığı nikâh sahnesine taşındı (ilişki bildirimi öğrenme anında).
   OYNANIŞ T1 Aşama B (18 Kasım 2026, notlar/denetim/oynanis_t1_birlesik.md):
     B1 koz görünür ve harcanır: ilk söz (mektup, eşik, fincan), hamleler (düğme, sahte mektubun imzası, diz
       kaydı) kozGerek ile; kozsuz kız kilitli düğmeyi görür. Açılan koz kozHarca ile tükenir (Bin liralık
       mektup, eşik/Perihan ile Süha, İki fincan, Yelek düğmesi, Madam'ın tanıklığı, Hatice'nin itirafı,
       imza, diz kaydı; Süha sonunda 'Süha Bey'in yazılı şartı', Remzi sonunda 15. bölümün 'Beyoğlu'ndaki ev').
     B3 her adaya bir eksi: Kenan sitemi −3, Süha'yı bekletmek −3, Remzi listesini babaya vermek −3,
       Beyoğlu evini yüzüne vurmak −5.
     B4 giyinme anı (ikindi; annemin gök mavisi / akşam leylağı / fildişi) ve Perihan'ın tepkisi; kavuşmada
       annenin ipeklisi duvağın altında; Remzi sonunda madalyon takısı ({ taki: 'madalyon' }).
     B5 fincan keşfi ilk sözde 'bak' seçeneğini açar (p16_k_fincan okunur); Remzi gecesinde sandık keşfi
       (p16_k_sandik) sandık seçimine annenin kâğıdını ekler, nikâhta okunur.
     B6 gizli değişkenler: vakar ≥ 21 ilk sözde "cesaret" (ayakta kal; güç +1); itibar ≥ 55 güç +1 (komşu
       hanımlar); baba_guven ≥ 60 rızaya ikinci yol ve babanın satırı; calibe_suphe ≥ 4 Perihan'ın odasında
       gözcü, ≥ 8 refakat Nazlı'yı oyalamaz (sarı oda ara sayfasında "nöbet" satırı).
     Fon (gorsel_t1_fon.md madde 4): yatsıda selamlık → selamlik_kapisi (gece); sabah avlu kapısı → bu
       konağın taşlığı (taslik_gunduz). Çarşı, araba içi gece, Leyla'ların konağı gece resmi bekliyor.
   An resimleri (her sonun bir anı): an_kavusma, an_ayrilik, an_iki_kagit, an_carsi.
   Not: görünen metinde yalnız yeni adlar; konuşan kimlikleri (calibe, reftar, mukaddem, sai, f…) eski.
   ========================================================================= */
window.BOLUMLER = window.BOLUMLER || {};

(function () {
  var V = window.OYUN_VERISI;
  // Kendi görseli gelene kadar en yakın eski fon (çarşı: sokak kapısı)
  var YEDEK = { carsi: 'konak_kapi' };
  Object.keys(YEDEK).forEach(function (id) {
    var m = V.mekanlar[id];
    if (m && !m.arkaplan && V.mekanlar[YEDEK[id]]) m.arkaplan = V.mekanlar[YEDEK[id]].arkaplan;
  });
  // An resimleri: oyun_verisi.js'te kaydı yoksa burada görselsiz kaydedilir (motor yazılı kartla gösterir).
  // Resim gelince kayıt oyun_verisi.js'e eklenir; gorseller.js yalnız orada kaydı olanı bağlar.
  var ANLAR = {
    an_kavusma:   ['Duvak kalkınca, masal kitabı', 'Yüzleşme ve Son · Kenan'],
    an_ayrilik:   ['Kafesin aralığından, sokağın başı', 'Yüzleşme ve Son · Kenan'],
    an_iki_kagit: ['Lamba altında iki kâğıt, tek el', 'Yüzleşme ve Son · Süha'],
    an_carsi:     ['Çarşıda Münevver Hanım\'ın eli', 'Yüzleşme ve Son · Üçüncü kapı'],
    /* T28 (ORTAK: resimler bağlandı): duvağı Kenan kaldırır; gizli nikâh; bağımsız hayır */
    an_kavusma_o:     ['Duvağı onun eli kaldırdı', 'Yüzleşme ve Son · Kenan'],
    an_kavusma_gizli: ['Tek kandilin ışığında nikâh', 'Yüzleşme ve Son · Kenan'],
    an_hayir:         ['Selamlıkta kendi hayırı', 'Yüzleşme ve Son · Süha'],
    /* T28b (ORTAK: resim bağlandı): Remzi'ye giden gecenin hayırı (HAYIR_GECE); baba başı eğik, Perihan kapıda */
    an_hayir_gece:    ['Gece selamlıkta, kimsenin desteği olmadan', 'Yüzleşme ve Son · Üçüncü kapı'],
  };
  Object.keys(ANLAR).forEach(function (id) {
    ['', '_nisan_gosterisli', '_nisan_yadigar'].forEach(function (c) {
      if (!V.cizimler[id + c]) V.cizimler[id + c] = { ad: ANLAR[id][0], alt: ANLAR[id][1] };
    });
  });

  /* T29 (b13_16 B16 GÖRSEL-1): kâğıdı elinde olmayan kızın iki kâğıt anı (soldaki yarı yanmış, buruşuk müsvedde). Resmi
     üretimde (t29_uretim_b13_16 U9). Gelene dek temel an_iki_kagit resmini ve kıyafet çeşitlerini yedek gösterir; kendi
     resmi gorseller.js'e girince motor.js onu bağlar */
  (function () {
    var R = V.cizimResimleri || {};
    ['', '_nisan_sade', '_nisan_gosterisli', '_nisan_yadigar', '_aksam'].forEach(function (c) {
      var id = 'an_iki_kagit_musvedde' + c;
      if (V.cizimler[id]) return;
      if (c === '' || R['an_iki_kagit' + c]) V.cizimler[id] = { ad: 'Lamba altında müsvedde ve pusula', alt: 'Yüzleşme ve Son · Süha', gorsel: R['an_iki_kagit' + c] || (V.cizimler.an_iki_kagit || {}).gorsel };
    });
  })();

  var MEKTUP = 'Bin liralık mektup', DUGME = 'Yelek düğmesi', GECMIS = 'Perihan ile Süha', ESIK = 'Sarı odanın eşiği';
  var FINCAN = 'İki fincan', MADAM = 'Madam\'ın tanıklığı', ITIRAF = 'Hatice\'nin itirafı';
  var SON_PUSULA = 'Süha Bey\'in son pusulası';
  var b = function (S) { return S.bayrak; };
  var muk = function (S) { return S.bayrak.p_rota === 'mukaddem' && S.bayrak.p15_yon !== 'suha'; };
  var var_ = function (S, k) { return (S.kozlar || []).indexOf(k) >= 0; };
  // Açılan koz bilgiyi unutturmaz: elde olan ya da daha önce açığa çıkmış koz "bilinir"
  var bilir = function (S, k) { return var_(S, k) || !!(S.kozAcik && S.kozAcik[k] !== undefined); };
  /* T27b (GPT B16-O1/O2): 15. bölümde verilen şartın İÇERİĞİ (ara bayraklar). benzet16 SOZLESME bu iki bayrağı henüz
     listelemiyor (ortak istek O10); okuma tek yardımcıda toplandı, sözleşmeye eklenince doğrudan b(S).p15_… olur.
     Bayrak yoksa (eski kayıt) eski genel metin kalır */
  var sart15 = function (S) { return S.bayrak['p15_s_kanit']; };   // 'cik' | 'anlat' (Süha'nın yazılı şartı)
  var rsart15 = function (S) { return S.bayrak['p15_v_rsart']; };  // 'sartsiz' | 'ev' | 'sefik' | 'beyoglu' (Remzi'ye evet)
  /* Bu iki yardımcıya bağlı eger'ler 'yakKoruma' taşır: benzet16'nın sentetik sözleşmesi bayrakları üretmediği için
     tek dal görünür (gerçek oyunda dal 15. bölümden gelir). Dallar sözleşmesi genişletilmiş kopyayla sınandı (O10);
     sözleşmeye eklenince 'yakKoruma' kaldırılmalı */

  // 9–11. bölümlerle aynı kurallar: kilitli mutfak, konakta olmayan Hatice, Ada'da korunan Hatice
  var dinlendi = function (S) { return b(S).p8_prova === 'acik' || b(S).p8_prova === 'yalniz' || b(S).p8_ilk === 'ezber'; };
  var sozBozdu = function (S) { return b(S).p8_hatice === 'bozdu'; };
  var mutfakKapali = function (S) { return dinlendi(S) || sozBozdu(S); };
  var haticeYok = function (S) { return b(S).p9_hatice === 'git' || b(S).p10_hatice === 'gitti'; };
  var haticeKorundu = function (S) { return b(S).p10_hatice === 'kaldi'; };
  // 13. bölüm: kovulan Nimet konakta yok; açık müttefik ya da tanık olmuş Madam tanıklığa razı
  var nimetVar = function (S) { return b(S).p13_nimet !== 'kovuldu'; };
  var madamDost = function (S) { return b(S).p13_madam === true || bilir(S, MADAM); };
  var madamGitti = function (S) { return b(S).p16_not === 'yaz'; };
  // İki fincan: Perihan babanın önünde kabul ettiyse (11. bölüm kaynağı); değilse yalnız görülen/duyulan fincan (GPT T24b 16-6)
  var fincanKabul = function (S) { return /Perihan Hanım babamın önünde/.test((S.kozKaynak || {})[FINCAN] || ''); };
  // Oynanış T1 B1: açılan koz tükenir. Elde değilse (yalnız biliniyorsa) adım boş geçer; benzetim bu korumayı
  // tek dallı eger saymaz (yakKoruma)
  var kozHarca = function (k) { return { eger: function (S) { return var_(S, k); }, ise: [{ kozYak: k }], yakKoruma: true }; };
  // Oynanış T1 B6: gizli değişkenler okunur (motor S.v; eşikler plan ve ekonomi merceği)
  var deger = function (S, k, v) { return ((S.v || {})[k] !== undefined ? S.v[k] : v); };
  var itibarIyi = function (S) { return deger(S, 'itibar', 50) >= 55; };
  var babaGuvenir = function (S) { return deger(S, 'baba_guven', 50) >= 60; };
  var supheTetik = function (S) { return deger(S, 'calibe_suphe', 0) >= 4; };
  var supheNobet = function (S) { return deger(S, 'calibe_suphe', 0) >= 8; };
  var cesur = function (S) { return deger(S, 'vakar', 0) >= 21; };
  var BEYOGLU = 'Beyoğlu\'ndaki ev', DIZ = 'Süha Bey\'in diz çöktüğü sabah';

  /* ---- Kapı, güç ve sonlar ---- */
  var kapi = function (S) {
    var k = b(S).p15_kapi;
    if (k === 'kenan' && !muk(S)) return 'yok';
    if (k === 'suha' && muk(S)) return 'yok';
    return (k === 'kenan' || k === 'suha' || k === 'remzi') ? k : 'yok';
  };
  var hazir = function (S) { return +b(S).p15_hazir || 0; };
  var babaGelir = function (S) { return b(S).p16_v_baba === 'cagir' || b(S).p16_v_madam === 'haber' || b(S).p16_yok === 'bekle'; };
  var babaSorar = function (S) { return b(S).p16_v_baba === 'sor' || b(S).p16_yok === 'soz'; };
  // Süha konuşur mu: kendi yolunda evet; Kenan yolunda yalnız Perihan'ı açmaya yemin ettiyse (14. bölüm)
  var suhaKonusur = function (S) { return !muk(S) || b(S).p14_yemin === 'perihan'; };
  var kayitGuclu = function (S) { return b(S).p12_diz === 'duzelt' || b(S).p12_diz === 'adlandir'; };
  // Düğme elde mi: bu bölümün ikindisinde kutudan alındı ya da 15. bölümde alınmış (kozun kaynağı "kutusundan aldım")
  var dugmeOnce = function (S) { return var_(S, DUGME) && /kutusundan aldım/i.test((S.kozKaynak || {})[DUGME] || ''); };
  var dugmeVar = function (S) { return var_(S, DUGME) && (b(S).p16_v_dugme === true || dugmeOnce(S)); };
  // Sarı odada gösterilen düğme koz olarak tükenir ama eşya Feride'nin avucunda kalır (Süha sonu)
  var dugmeGosterdi = function (S) { return b(S).p16_b2 === 'dugme' || b(S).p16_b3 === 'dugme'; };
  var dugmeElde = function (S) { return dugmeVar(S) || dugmeGosterdi(S); };
  // 15. bölümün kozları (yalnız koz okunur; 15'in ara bayrakları okunmaz)
  var IMZA = 'Sahte mektubun imzası', SART = 'Süha Bey\'in yazılı şartı';
  /* T29c (GPT A16-1): Kenan'ın kendi el yazısı elde mi: 15'te babanın çekmecesinden alınan mektuplar (IMZA kaynağı
     "elimde") ya da 10'da saklanıp 11'de Nazlı'dan kurtarılan not. Yakılan / ezberlenen not ve telgraf sayılmaz */
  var kenanEliElde = function (S) { return /elimde/.test((S.kozKaynak || {})[IMZA] || '') || (b(S).p10_kenan_not === 'sakla' && b(S).p11_not === 'kurtardi'); };
  var hamlePuan = function (S, h) {
    if (h === 'dugme') return 2;
    if (h === 'madam' || h === 'hatice' || h === 'kanit') return 1;
    if (h === 'kayit') return kayitGuclu(S) ? 1 : 0;
    if (h === 'suha') return suhaKonusur(S) ? 1 : 0;
    if (h === 'kapi') return babaGelir(S) ? 1 : 0;
    /* T32: kozsuz söz hamlesi yalnız yüreği olan kızda (vakar ≥ 21) ağırlık sayar */
    if (h === 'yuz') return b(S).p16_yuz === 'guclu' ? 1 : 0;
    return 0;
  };
  var ilkKoz = function (S) { return ['mektup', 'esik', 'gecmis', 'fincan', 'ayna'].indexOf(b(S).p16_b1) >= 0; };
  // Doğrulama v65 (Remzi oyuncusu): sarı odada Feride hiç koz açmadan, yalnız oturup sözle yokladıysa oda sessiz geçti
  var sessizOda = function (S) {
    var f = b(S);
    return (f.p16_b1 === 'sus' || f.p16_b1 === 'blof') && f.p16_b2 === 'tehdit' && f.p16_b3 === 'yeter';
  };
  var guc = function (S) {
    var f = b(S), g = 0;
    if (ilkKoz(S)) g += f.p16_not === 'yaz' ? 2 : 1;
    // B5/B6: keşifle görülen fincan ve vakarla açılan "ayakta kal" ilk sözü birer ağırlık (sabah uyarısıyla katlanmaz)
    if (f.p16_b1 === 'bak' || f.p16_b1 === 'cesaret') g += 1;
    // B6: itibar ≥ 55: konağa gelen komşu hanımlar kızın adını temiz bilir
    if (itibarIyi(S)) g += 1;
    g += hamlePuan(S, f.p16_b2) + hamlePuan(S, f.p16_b3);
    if (babaGelir(S)) g += 1;
    if (babaSorar(S)) g += 1;
    if (f.p15_baba === 'ikna') g += 1; else if (f.p15_baba === 'karsi') g -= 1;
    if (muk(S) && f.p14_mektup === 'inandi') g -= 1;
    if (muk(S) && f.p12_iftira === 'tuttu') g -= 1;
    return g;
  };
  var ESIK_GUC = 3;
  var guclu = function (S) { return guc(S) >= ESIK_GUC; };
  // Sarı odadan sonra gidilen yol: 'kenan' | 'bekle' (kapısız Kenan yolu) | 'suha' | 'remzi'
  var yol = function (S) {
    var k = kapi(S);
    if (k === 'yok') return guclu(S) ? (muk(S) ? 'bekle' : 'suha') : 'remzi';
    return k;
  };
  var babaRiza = function (S) {
    var f = b(S);
    if (kapi(S) !== 'kenan') return false;
    var hazirlik = hazir(S) >= 1 || f.p14_mektup === 'kanit';
    // B6: babanın güveni ≥ 60 ise dünkü iknaya denk sayılır
    return hazirlik && (guclu(S) || ((f.p15_baba === 'ikna' || babaGuvenir(S)) && guc(S) >= ESIK_GUC - 1));
  };
  var gizliAcik = function (S) {
    var f = b(S);
    return kapi(S) === 'kenan' && f.p16_munevver === 'araba' && (f.p15_kenan_yol === 'gizli' || hazir(S) >= 2);
  };
  var madamKonustu = function (S) { return b(S).p16_b2 === 'madam' || b(S).p16_b3 === 'madam'; };
  /* Umutlu ayrılığa giden iki yolun (3a bekle/mektup, 3b) ortak avlu ara sayfası. Yol arkadaşları ve Süha'nın
     akıbeti burada, anlatıcıda (Tur 2: avlu sahnesi 13 satır sınırında; Madam'ın girişi de buradan yapılır) */
  /* T29c (GPT O16-1): bağımsız hayırda kalan kız (p16_secim 'kal') */
  var kalir = function (S) { return b(S).p16_secim === 'kal'; };
  var AVLU_ARA = [
    function (S) { if (kalir(S)) return 'Münevver Hanım\'ın sandıkları sabah ezanıyla avluya indi. Feride\'ninki odasında kaldı.';
      return madamKonustu(S)
      ? 'Kış Beyrut\'ta geçecekti. Sabah avluya inen sandıklar arasında Madam Josephine\'inki de vardı, Süha Bey\'in odası ise boştu.'
      : 'Kış Beyrut\'ta geçecekti. Sandıklar sabah ezanıyla avluya indi, Süha Bey\'in odası ise çoktan boştu.'; },
    /* Doğrulama v65: "bu evde/bu evden" bir yolda en çok iki kez (Sait'in hükmü ve Hatice'nin imza satırı) */
    function (S) { return kalir(S) ? 'Feride merdivenden kendi ayağıyla indi. Kimse onu göndermiyordu, o da gitmiyordu.'
      : 'Feride merdivenden kendi ayağıyla indi.'; },
    /* Kovulan Nimet: 13. bölümde Münevver'e, Leyla'ya ya da köyüne gitmiş, ya da pazarlık bozulunca kapısız kovulmuş
       olabilir (yeri ara bayrakta, okunmaz): arabaya döndürülmez, yalnız haber gider (GPT T24b 16-8). Hatice'ye verilen söz */
    function (S) {
      var nimet = !nimetVar(S), hatice = b(S).p16_hatice_soz === true;
      if (nimet && hatice) return 'Hatice bohçasıyla Münevver Hanım\'ın konağına önden gitmişti. Nimet\'e de, nerede olursa olsun, haber yollandı.';
      if (nimet) return 'Nimet\'e de haber yollandı. Kovulduğu evden Feride\'nin de çıktığını ilk o duyacaktı.';
      if (hatice) return 'Hatice bohçasıyla Münevver Hanım\'ın konağına önden gitmişti. Feride ona verdiği sözü tutmuştu.';
      return '';
    },
  ];

  /* ===== SAHTE MEKTUBUN İZİ — 14. bölüme bağlanan TEK yer =====
     T28 (b13_16 ana bulgu 1): eski iz (bitişik "herşey") Arap harfli Osmanlıcada görünmediği için dönem dışıydı.
     Yeni iz el değil ALIŞKANLIK: saat sayımı. Konak ve Kenan saati alaturka (ezandan) sayar; Fransızca okumuş hekim
     alafranga yazar. Sahte mektup (pilot14 MEKTUP_METNI) tanınmamak için cetvelle, kurşun kalemle yazıldı ama
     "Yarın gece saat on ikide" der (alaturkada on iki akşam ezanıdır). Süha'nın veda pusulası kendi eğik eliyle,
     mürekkeple yazılır ve o da saati alafranga sayar ("sabah saat sekizde"). Süha bildiğimi bilmez; tehlikeli kalır.
       izKagit(S) true → Feride'nin elindeki sahte kâğıt ('Sahte mektup' kozu), Süha'nın veda kâğıdıyla yan yana;
       değilse         → Süha'nın mangalında sahte mektubun yarım yanmış müsveddesi.
     İz değişirse yalnız IZ sabiti ve izKagit satırı değişir. Süha itiraf etmez. */
  var IZ = { hata: 'saat sekizde', cumle: 'Yarın gece saat on ikide araba bahçe kapısında bekleyecek', koz: 'Sahte mektup' };
  var izKagit = function (S) { return b(S).p14_kagit === true; };
  function sahteMektupIzi() {
    return [{ eger: izKagit, ise: [
      'Koynumdan sahte mektubu çıkardım. Mangalın külünde onun yarım yanmış müsveddesi vardı.',
      /* Doğrulama v65 (ritim): iki anlatı satırı birleşti (ifşada seçim arası satır sayısı) */
      /* T28b (GPT A16-1; kök bulgu 4): alışkanlık tek başına fail çıkarmaz; fiziksel eşleşme: aynı satırların müsveddesi
         hekimin odasının mangalında (kâğıtsız dalda zaten bulunan iz bu dalda da; ritim için tek satır) */
      '“…' + IZ.cumle + '.” İkisi de cetvelle, satır satır aynı.',
      { eger: (S) => var_(S, IZ.koz), ise: [
        { kozKaynak: [IZ.koz, 'Kâğıt elimde, müsveddesi Süha Bey\'in mangalında, veda pusulası da saati alafranga sayıyor'] },
      ] },
    ], degilse: [
      /* Kâğıtsız dal (GPT T24b 16-3): müsvedde masada hazır durmaz; gitmeden yakılan kâğıtlardan biri yarım kalmıştır.
         Kapı bilerek aralık (veda kâğıdı için), müsvedde aceleden kalan iz: Süha bildiğimi bilmez, tehlikeli kalır */
      'Mangalın külünde buruşturulmuş bir müsvedde. Gitmeden yaktığı kâğıtlardan biri yarım kalmış.',
      '“…' + IZ.cumle + '.” Üstü çizilmiş, satırları cetvel gibi.',
    ] },
    /* T28: teşhis alışkanlıktan; el başka (cetvel / eğik), sayım aynı. Çapa (benzet16): "alışkanlık aynı" */
    ['ic', 'Harfleri benzemiyor. Fakat bu müsveddede de veda pusulasında da saat alafranga yazılmış.', 'saskin'],
    /* T28b (GPT A16-1): görgü → çıkarım → doğrulanmış bilgi → hüküm. Alışkanlık şüpheyi güçlendirir; hükmü kilitli odadaki
       müsvedde (fiziksel eşleşme) kurar */
    /* T28b: ritim (13 satır) için "Adieu / bildiğimi bilmiyor" satırı çıktı; Süha'nın bilmediği sabah sahnesinde anlatıcıda */
    ['ic', 'Müsvedde onun mangalında. Babamın yüzüme tuttuğu kâğıdı o yazdı.', 'ofkeli']];
  }

  /* T28 (b13_16 ANLATI): Kenan sonlarında sezonun sırrı ödülsüz kalmaz; Feride çözmez, oyuncu öte yanda görür */
  var KENAN_OTE = { ara: { yer: 'Öte yanda · Süha Bey\'in odası', satirlar: [
    'Süha Bey konaktan çıkmadan önce mangalında cetvelle yazılmış bir müsvedde yaktı. Saati alafranga yazdığı satır en son karardı, kimse görmedi.',
  ] } };

  /* Son kartlar (kanca kartı = siradaki.kanca; benzetim ikisinin aynı olmasını ister): Feride'nin karar cümlesi +
     Şebib ve Behiye ipliği (Sürükleyicilik T1 S1/S8: "Şebib kim?" soru kalıbı çıkarıldı; Şebib'in dört kâğıdı da
     Feride'yi "Behiye Hanım'ın kızı" diye anar: 2. sezonun sorusu bir yabancıdan annesine bağlanır) */
  var KANCA = {
    /* T33 (b13_16 S6): beş son aynı "annemin adını bilen biri" kancasına akmaz; her biri kendi sorusuyla
       (benzet16: kanca soru ya da Şebib taşır, en çok 12 kelime) */
    son_kavusma: 'Evetimi bu gece kendim söyledim. Annem Beyrut\'a ne emanet etti?',
    son_umutlu_ayrilik: 'Kenan bekleyecek. Annem Beyrut\'ta bana ne bıraktı?',
    son_tehlikeli_evet: 'Evet dediğim adam o mektubu yazdı. Bildiğimi ne zaman anlayacak?',
    son_remzi: 'Annemi bu adam nereden tanıyor?',
    /* Cemil T27: Süha yolunun kapısız dalında bağımsız "Hayır" (beşinci son) */
    son_hayir: 'Hayır dediğim adam o mektubu yazdı. Beyrut\'ta onu kim bekliyordu?',
  };
  var SON_AD = { son_kavusma: 'Kavuşma', son_umutlu_ayrilik: 'Umutlu Ayrılık', son_tehlikeli_evet: 'Tehlikeli Evet', son_remzi: 'Üçüncü Kapı', son_hayir: 'Kendi Hayırı' };
  /* T27 (SÜRÜK-4): sezon kartının Şebib satırı sona göre ("vapur/saat" Kenan'ın kalıbıydı, dört sonda aynıydı) */
  var SEBIB_SATIR = {
    son_kavusma: 'O gece Beyrut\'ta Şebib adında bir adam, Behiye Hanım\'ın emanetini sandıktan çıkardı.',
    son_umutlu_ayrilik: 'O gece Beyrut\'ta Şebib adında bir adam, iskelede karşılayacağı kızın adını defterine yazdı.',
    son_tehlikeli_evet: 'O gece Beyrut\'ta Şebib adında bir adam, hekimin mektubunu ikinci kez okudu ve yaktı.',
    son_remzi: 'O gece Beyrut\'ta Şebib adında bir adam, Remzi Bey\'in senedinin altına bir ad ekledi: Behiye.',
    son_hayir: 'O gece Beyrut\'ta Şebib adında bir adam, hekimle gelecek hanımın odasını hazırlattı.',
  };
  /* T27 (SÜRÜK-5): "Sırada" son kartı yinelemez; ikinci sezonun gelen kişisini söyler (en çok 12 kelime, Şebib geçer) */
  var SIRADA = {
    /* T32 (b13_16 B16 ANLATI-3): beş kart aynı "İkinci sezon: Şebib … bekliyor" kalıbındaydı; her biri bir eylemle */
    son_kavusma: 'Beyrut\'ta Şebib, Behiye Hanım\'ın emanetini dokuz yıldır açmadan saklıyor.',
    son_umutlu_ayrilik: 'Beyrut iskelesinde Şebib, İstanbul vapurunun yolcularını tek tek soruyor.',
    son_tehlikeli_evet: 'Beyrut\'ta Şebib, hekimin mektubunu okudu ve cevabını yazmaya oturdu.',
    son_remzi: 'Şebib gelini soruyor.',
    son_hayir: 'Şebib\'in Beyrut\'ta hazırlattığı odaya, hekimle gelecek hanım gelmeyecek.',
  };
  // Sezon kartının ilk satırı anlatıcı sesiyle (3. kişi, geçmiş); her biri en çok 15 kelime
  var SON_SATIR = {
    /* T32 (b13_16 B16 DİYALOG-4): düz bilgi cümlesi yerine nesne */
    son_kavusma: 'Feride ile Kenan o gece ilk kez saklanmadan yan yana oturdu. Lamba sabaha dek yandı.',
    son_umutlu_ayrilik: 'Feride İstanbul\'dan kimsenin göndermediği bir kız olarak ayrıldı. Sözünü de yanında götürdü.',
    son_tehlikeli_evet: 'Feride evet dediği adamın sırrını evetten sonra öğrendi. Sabah kapısını çalan eli artık tanıyordu.',
    son_remzi: 'Feride Remzi Bey\'in evine gelin gitti. Babasının evinden çıkarken arkasına bakmadı.',
    /* T28 (b13_16 ANLATI): Tehlikeli Evet'in kopyası değil; olaya uyar (Süha o gece kovuldu) */
    son_hayir: 'Feride evet beklenen gece hayır dedi. Hayır dediği elin o mektubu yazdığını sabaha karşı öğrendi.',
  };
  // Gizli nikâhta "saklanmadan" denmez: nikâh babadan gizli kıyıldı (Tur 2 B16-17)
  var SON_SATIR_GIZLI = 'Feride ile Kenan o gece Leyla\'ların konağında nikâhlandı. Babasının kapısını sabah kendisi çalacaktı.';
  /* T28b (GPT O16-1): Remzi gecesindeki bağımsız hayırın (p16_hayir 'gece') kendi kart, sezon ve Sırada satırları */
  /* T32 (b13_16 B16 DİYALOG-2/3): telgraf kesikliği ve belirsiz "onu" düzeldi; Sırada kalıbı eylemle */
  var GECE_KANCA = 'Babam hayırımı kabul etmedi; ben de onun evetini. Sabah yine soracaklar, cevabım hazır.';
  var GECE_SON_SATIR = 'Feride babasının verdiği söze hayır dedi. O gece hayırını kabul eden tek kişi kendisiydi.';
  var GECE_SEBIB = 'O gece Beyrut\'ta Şebib adında bir adam, Behiye Hanım\'ın kızına ikinci mektubu yazdı.';
  var GECE_SIRADA = 'Beyrut\'ta Şebib, kapısı kapanan kız için bir oda açtırıyor.';
  var geceHayir = function (S) { return b(S).p16_son === 'son_hayir' && ['gece', 'nikah'].indexOf(b(S).p16_hayir) >= 0; };
  /* T29c (GPT O16-1/S16-1): güçlü kapısız Kenan yüzleşmesinden sonra kimseyle söz bağlamayan kızın bağımsız hayırı
     (p16_hayir 'bagimsiz'); gidiş (Beyrut, misafir) ya da kalış (p16_secim 'kal'). Kendi kart, sezon ve Sırada satırları */
  var bagimsiz = function (S) { return b(S).p16_son === 'son_hayir' && b(S).p16_hayir === 'bagimsiz'; };
  var BAGIMSIZ_KANCA = 'Kimseye söz vermedim. Beyrut\'ta beni bekleyen kim?';
  var BAGIMSIZ_KANCA_KAL = 'Kimseye söz vermedim, gitmedim de. Şebib denen adam kim?';
  var BAGIMSIZ_SON_SATIR = 'Feride kazandığı gece kimseye söz vermedi. İstanbul\'dan kendi işi için ayrıldı.';
  var BAGIMSIZ_SON_SATIR_KAL = 'Feride kazandığı gece kimseye söz vermedi. Babasının evinde kendi hesabını açtı.';
  var BAGIMSIZ_SEBIB = 'O gece Beyrut\'ta Şebib adında bir adam, kimsenin nişanlısı olmayan bir kızın adını defterine yazdı.';
  var BAGIMSIZ_SIRADA = 'Şebib, kimseye söz vermemiş bir kızın Beyrut\'a gelip gelmeyeceğini soruyor.';
  // T29: sona göre sezon kartı parçası (tek nesne; bütün sonların kapanışında aynı düğüm)
  /* T30 (O16-2): sabah yüzleşmesi (tehlikeli evet) */
  var SABAH_SOR = [
    ['suha', 'Saati herkes kendi bildiği gibi sayar Feride Hanım.', 'alayci'],
    { eger: function (S) { return b(S).p16_sabah === 'baba'; }, ise: [
      ['an', 'Sait Efendi kâğıda baktı ve sustu. Nikâh günü o sabah kimsenin ağzından çıkmadı.'],
    ], degilse: [
      ['an', 'Avludaki kafesler kıpırdadı. Süha Bey cevap vermeden eğildi ve gitti.'],
    ] },
  ];
  /* T30 (SE16-2): bağımsız hayır (Süha selamlığı ve Kenan yolu) kavuşmanın 'final' parçasını çalmaz; kendi parçası
     'final_hayir' (tek piyano, tek seferlik; dosya yoksa ses.js yedeği 'piyano') */
  var KAPANIS_MUZIK = { eger: function (S) { return b(S).p16_son === 'son_remzi' || b(S).p16_hayir === 'gece'; }, ise: [
    { muzik: 'vals_hazin' },
  ], degilse: [{ eger: function (S) { return b(S).p16_son === 'son_hayir'; }, ise: [
    { muzik: 'final_hayir' },
  ], degilse: [
    { muzik: 'final' },
  ] }] };
  // Her sonun ortak kapanışı: sezon kartı (anlatı) ve bölüm sonu
  function kapanis() {
    return [
      /* T27 (SES): doruk her sonun vurucu anında çaldı (tek seferlik); sezon kartı onun artçısında kalır
         (ayrı final parçası üretim listesinde: ses/final.mp3) */
      { temizle: true },
      /* Tur 28b (SES): sezon kartının kendi parçası (piyano + yaylı, açık uçlu; tek seferlik).
         T29 (b13_16 B16 SES-1): acı sonlar (rızasız gelin gidiş, desteksiz gece hayırı) mutlu sonla aynı parçayı çalmaz;
         ayrı final kesimleri üretimde (t29_uretim_b13_16 S2), şimdilik hazır vals_hazin */
      KAPANIS_MUZIK,
      /* Sezon kartı anlatıcı sesinde (3. kişi, geçmiş): 2. satır "öte yanda", yapımcı/menü dili yok (Tur 2) */
      { anlati: { gorsel: 'anlati_sezon1', baslik: 'Birinci sezonun sonu', satirlar: [
        function (S) {
          if (b(S).p16_son === 'son_kavusma' && b(S).p16_secim === 'gizli') return SON_SATIR_GIZLI;
          if (b(S).p16_hayir === 'nikah') return 'Feride imamın sorusuna hayır dedi. Nikâh kıyılmadı; babası onun yanında durmadı.';
          if (geceHayir(S)) return GECE_SON_SATIR;
          if (bagimsiz(S)) return kalir(S) ? BAGIMSIZ_SON_SATIR_KAL : BAGIMSIZ_SON_SATIR;
          return SON_SATIR[b(S).p16_son] || '';
        },
        /* Sezonun son satırı "gelen kişi" kesmesi (S8: dört sonda aynı genel özet satırı kaldırıldı); T27: sona göre */
        function (S) { if (geceHayir(S)) return GECE_SEBIB; if (bagimsiz(S)) return BAGIMSIZ_SEBIB; return SEBIB_SATIR[b(S).p16_son] ||'O gece Beyrut\'ta Şebib adında bir adam, İstanbul\'dan gelecek ilk vapurun saatini sordu.'; },
      ] } },
      { bolumSonu: true },
    ];
  }

  /* ---- Sarı odadaki hamleler (iki tur; ikinci turda ilk turun hamlesi yok, "Yeter" var) ---- */
  function hamleler(alan) {
    var ilkTur = alan === 'p16_b2';
    var acik = function (h, f) { return function (S) { return (!f || f(S)) && (ilkTur || b(S).p16_b2 !== h); }; };
    var bay = function (h) { var o = {}; o[alan] = h; return o; };
    // B1: kozlu hamle kozsuz kıza kilitli görünür; ikinci turda ilk turda kullanılan hamlenin kilidi de gizlenir
    var kilit = function (h, f) { return function (S) { return (!f || f(S)) && (ilkTur || b(S).p16_b2 !== h); }; };
    var liste = [
      /* GPT T26 (öncelik 2): harcanan koz ile elde kalan eşya ayrılır; iz gerekçeyi söyler */
      /* T28 (b13_16 DİYALOG): "pranga" imzası 14–16'da aşınıyordu; yalnız Süha'nın bir satırında kalır */
      { m: 'Düğmeyi avucunda göster: “Süha Bey\'in ipi artık bende.”', kosul: acik('dugme', dugmeVar), kozGerek: DUGME, kilitGoster: kilit('dugme'), etki: { calibe_suphe: 2 }, bayrak: bay('dugme'), iz: 'Düğme artık sır değil ama avucunda duruyor. Perihan\'ın ipi sende.', adimlar: [
        'Avucumu açtım. Çiçekli düğme lambada parladı.',
        { goster: ['calibe', 'ofkeli'] },
        ['calibe', 'Hırsız! Kutumu karıştırıp bir de yüzüme mi tutuyorsun?', 'ofkeli'],
        ['f', 'Hırsızı bu düğmeyle siz gösterecektiniz. Artık gösteremezsiniz.', 'kararli'],
        kozHarca(DUGME),
      ] },
      { m: 'Kapıyı aç: “Madam, duydunuz mu?”', kosul: acik('madam', function (S) { return b(S).p16_v_madam === 'tanik'; }), etki: { josephine: 1 }, bayrak: bay('madam'), iz: 'Madam Perihan\'ın karşısında şahitlik etti. Bedelini o ödeyecek.', adimlar: [
        { efekt: 'kapi' },
        ['an', 'Madam Josephine kapının ardındaydı. Konaktaki ekmeğini o akşam ortaya koyuyordu.'],
        { goster: ['josephine', 'kararli'] },
        ['josephine', 'Duydum. Her kelimesini.', 'kararli'],
        ['calibe', 'Madam, maaşınızı unuttunuz galiba.', 'soguk'],
        /* T32 (b13_16 B16 DİYALOG-5): klişe yerine Madam'ın kırık Türkçesi */
        ['josephine', 'Maaş ayda bir gelir hanım. Kulak her gün burada.', 'kararli'],
        { gizle: 'josephine' },
        kozHarca(MADAM),
      ] },
      { m: '“Hatice, içeri gel. Ada\'daki ezberini sana kim verdi?”', kosul: acik('hatice', function (S) { return b(S).p16_v_hatice === 'tanik'; }), bayrak: bay('hatice'), iz: 'Hatice Perihan\'ın yüzüne şahitlik etti.', adimlar: [
        { efekt: 'kapi' },
        ['an', 'Hatice önlüğünü çıkarmadan girdi. Bu odaya yıllardır yalnız tepsiyle girmişti.'],
        { goster: ['reftar', 'kararli'] },
        ['reftar', 'Siz verdiniz hanım. Karşılığında da yüzüğü.', 'kararli'],
        ['calibe', 'Nabi\'nin peşinde koşan kıza kim inanır?', 'ofkeli'],
        ['reftar', 'O da sizin bildiğiniz. Onu da söylerim.', 'kararli'],
        { gizle: 'reftar' },
        kozHarca(ITIRAF),
      ] },
      { m: 'Sahte mektubun yalanını Perihan Hanım\'ın önünde çürüt.', kosul: acik('kanit', function (S) { return muk(S) && (b(S).p14_mektup === 'kanit' || var_(S, IMZA)); }), kozGerek: IMZA, kilitGoster: kilit('kanit', muk), etki: { calibe_suphe: 1 }, bayrak: bay('kanit'), iz: 'Sahte mektubun yalanını Perihan\'ın önünde çürüttün.', adimlar: [
        /* Kanıt hangi yoldan edinildiyse o içerikle (GPT Tur 23 okur 02): kâğıt eldeyse sehpada, değilse ezberde */
        /* T29c (GPT A16-1; P1): masaya yalnız elde olan nesne konur. Kenan'ın kendi eli ancak 15'te babanın çekmecesinden
           alınan mektuplar ya da 10'da saklanıp 11'de kurtarılan not ise; yakılan/ezberlenen not ve memur eliyle telgraf ayrı */
        { eger: (S) => izKagit(S) && kenanEliElde(S), ise: [
          'Sahte mektubu sehpaya koydum, yanına da Kenan\'ın kendi elinden bir satır.',
        ], degilse: [{ eger: izKagit, ise: [
          'Sahte mektubu sehpaya koydum, yanına da Kenan\'ın telgrafını. Harfler memurun, tarih Selanik\'indi.',
        ], degilse: [
          /* Ezber 14. bölümde her yolda yok: yalnız gördüğünü söyler (Tur 2 B16-23) */
          'Sahte mektup elimde değil. Ama babam onu yüzüme tutarken her satırını gördüm.',
        ] }] },
        /* 14. bölüm: Perihan "—K"yi gördüyse (p11_not) imza kusursuz kopya; görmediyse tam ad */
        { eger: function (S) { return !!b(S).p11_not; }, ise: [
          /* T28 (b13_16 ana bulgu 1): iz alafranga saat */
          ['f', 'İmza kopya. Kenan saati ezandan sayar, “gece on iki” yazmaz, üstelik o gün Selanik\'teydi.', 'kararli'],
        ], degilse: [
          ['f', 'Kenan adını hiç uzun yazmaz. O gün de Selanik\'teydi.', 'kararli'],
        ] },
        { goster: ['calibe', 'endiseli'] },
        /* Diyalog T1 (b16 #16): cevap imzaya ve imlaya (kapıya değil) */
        ['calibe', 'Kenan\'ın imlasını ben mi bilirim? Yazanı bul, ona sor.', 'endiseli'],
        kozHarca(IMZA),
      ] },
      { m: '“Süha Bey\'in o sabahki sözü kendi yazısıyla duruyor.”', kosul: acik('kayit', function (S) { return b(S).p12_kayit === true && b(S).p12_v_sahit === 'yazi'; }), kozGerek: DIZ, kilitGoster: kilit('kayit', function (S) { return b(S).p12_v_sahit === 'yazi'; }), bayrak: bay('kayit'), iz: 'Süha\'nın kendi yazısını Perihan\'ın önünde okudun.', adimlar: [
        { eger: function (S) { return b(S).p12_diz === 'duzelt'; }, ise: [
          ['f', 'Kendi yazınızda: “Kenan Bey Ada\'da bir damla içmedi. Yalan söyledim.”', 'kararli'],
        ], degilse: [{ eger: function (S) { return b(S).p12_diz === 'adlandir'; }, ise: [
          ['f', 'Kendi yazınızda: “Yeleğimin düğmesi onda; ben hırsız olurum.” Onda, yani sizde.', 'tebessum'],
        ], degilse: [
          ['f', 'Kendi yazınızda: “Gerekirse yalan söylerim.” Sizin hekiminizin sözü.', 'kararli'],
        ] }] },
        ['calibe', 'Diz çöken adam her şeyi söyler. Kalkınca unutur.', 'soguk'],
        kozHarca(DIZ),
      ] },
      { m: '“Şefik o sabah Süha Bey\'in sözünü duydu.”', kosul: acik('kayit', function (S) { return b(S).p12_kayit === true && b(S).p12_v_sahit === 'sefik'; }), kozGerek: DIZ, kilitGoster: kilit('kayit', function (S) { return b(S).p12_v_sahit === 'sefik'; }), bayrak: bay('kayit'), iz: 'Şefik\'in duyduğu sözü Perihan\'ın önünde aktardın.', adimlar: [
        { eger: function (S) { return b(S).p12_diz === 'duzelt'; }, ise: [
          ['f', 'Şefik de duydu: “Kenan Bey Ada\'da bir damla içmedi. Yalan söyledim.”', 'kararli'],
        ], degilse: [{ eger: function (S) { return b(S).p12_diz === 'adlandir'; }, ise: [
          ['f', 'Şefik de duydu: “Yeleğimin düğmesi onda; ben hırsız olurum.” Onda, yani sizde.', 'tebessum'],
        ], degilse: [
          ['f', 'Şefik de duydu: “Gerekirse yalan söylerim.” Sizin hekiminizin sözü.', 'kararli'],
        ] }] },
        ['calibe', 'Diz çöken adam her şeyi söyler. Kalkınca unutur.', 'soguk'],
        kozHarca(DIZ),
      ] },
      { m: '“Madam o sabah Süha Bey\'in sözünü duydu.”', kosul: acik('kayit', function (S) { return b(S).p12_kayit === true && b(S).p12_v_sahit === 'madam'; }), kozGerek: DIZ, kilitGoster: kilit('kayit', function (S) { return b(S).p12_v_sahit === 'madam'; }), bayrak: bay('kayit'), iz: 'Madam\'ın duyduğu sözü Perihan\'ın önünde aktardın.', adimlar: [
        { eger: function (S) { return b(S).p12_diz === 'duzelt'; }, ise: [
          ['f', 'Madam da duydu: “Kenan Bey Ada\'da bir damla içmedi. Yalan söyledim.”', 'kararli'],
        ], degilse: [{ eger: function (S) { return b(S).p12_diz === 'adlandir'; }, ise: [
          ['f', 'Madam da duydu: “Yeleğimin düğmesi onda; ben hırsız olurum.” Onda, yani sizde.', 'tebessum'],
        ], degilse: [
          ['f', 'Madam da duydu: “Gerekirse yalan söylerim.” Sizin hekiminizin sözü.', 'kararli'],
        ] }] },
        ['calibe', 'Diz çöken adam her şeyi söyler. Kalkınca unutur.', 'soguk'],
        kozHarca(DIZ),
      ] },
      { m: '“Süha Bey, içeri girin. Anlatın.”', kosul: acik('suha', function (S) { return !!b(S).p16_suha && b(S).p16_suha !== 'karisma'; }), bayrak: bay('suha'), iz: 'Süha\'yı Perihan\'ın karşısına çağırdın.', adimlar: [
        { efekt: 'kapi' }, { goster: ['suha', 'notr'] },
        { eger: suhaKonusur, ise: [
          { eger: muk, ise: [
            /* T32 (b13_16 B16 ANLATI-1): dolaylı "imla dersi" ilk okuyuşta anlaşılmıyordu. Süha sahte mektubu itiraf etmez
               (sezon kuralı; benzet16 "Süha itiraf etti"); söylediği, Perihan'ın bin liralık mektubu kendisine yazdırdığı */
            ['suha', 'Bin liralık o mektubu bana siz yazdırdınız hanım, kelime kelime.', 'soguk'],
          ], degilse: [
            /* GPT T26 (öncelik 3): "anlatırım" ertelemesi yerine söz o anda, Perihan'ın yüzüne söylenir */
            ['suha', 'Bin liralık mektubu bana siz yazdırdınız hanım, düğmemi de siz sakladınız.', 'soguk'],
          ] },
          { goster: ['calibe', 'endiseli'] },
          ['calibe', 'Süha… Sen benim…', 'endiseli'],
          { eger: function (S) { return var_(S, MEKTUP); }, ise: [
            { kozKaynak: [MEKTUP, 'Süha Perihan Hanım\'ın yüzüne söyledi'] },
          ] },
        ], degilse: [
          ['suha', 'Ben hekimim, kimsenin sırrını taşımam.', 'soguk'],
          /* Bu dal yemini Perihan'ı açmak olmayan Süha içindir (Şefik ya da vazgeç yemini) */
          ['ic', 'Konuşmadı. Babamın onu dinlemesini isteyebilirim; bu susuş tek başına delil değil.', 'ofkeli'],
        ] },
        { gizle: 'suha' },
      ] },
      /* T29 (b13_16 B16 DİYALOG-2): hitabın kime olduğu belli */
      { m: 'Kapıyı ardına kadar aç: “Yüksek sesle söyleyin hanım, babam merdivende.”', kosul: acik('kapi'), bayrak: bay('kapi'), adimlar: [
        { efekt: 'kapi' },
        { eger: babaGelir, ise: [
          ['an', 'Sait Efendi eşikteydi. Kızının açtığı kapıdan ne kadar duyduysa, yüzüne yazılmıştı.'],
          { goster: ['sai', 'ciddi'] },
        ], degilse: [
          'Sofa boş. Merdivende kimse yok.',
          ['calibe', 'Kimi bekliyordun? Baban selamlıkta uyur.', 'soguk'],
        ] },
      ] },
      { m: '“Bu odada ne konuşulduysa babam sabah öğrenecek.”', kosul: acik('tehdit'), bayrak: bay('tehdit'), adimlar: [
        ['calibe', 'Sabaha çok var kızım. Geceler uzundur.', 'soguk'],
      ] },
      /* T32 (b13_16 B16 OYNANIŞ): elinde koz kalmayan kızın da sözle yapabileceği bir hamle (vakar ≥ 21 ağırlık sayar;
         hamlePuan 'yuz') */
      { m: '“Annemin sofrasına oturdunuz, kızına iftira kurdunuz. Babama bunu ben söyleyeceğim.”', kosul: acik('yuz'), etki: { calibe_suphe: 1 }, bayrak: bay('yuz'), iz: 'Perihan\'a elinde kâğıt olmadan, kendi sözünle karşı durdun.', adimlar: [
        ['calibe', 'Söyle bakalım. Baban kimin sofrasında yemek yiyor, sen mi bilirsin?', 'soguk'],
        /* Ağırlık o anki vakarla kilitlenir (sonradan değişen vakar sarı odanın hükmünü geriye dönük değiştirmez) */
        { eger: cesur, ise: [
          ['f', 'Annemin sofrasında. Tabakları siz değiştirdiniz, sofra değişmedi.', 'kararli'],
          { bayrak: { p16_yuz: 'guclu' } },
        ], degilse: [
          ['ic', 'Sesim titredi. Ama sözü geri almadım.', 'endiseli'],
        ] },
      ] },
    ];
    if (!ilkTur) liste.push({ m: 'Yeter. Gerisini babam görsün.', bayrak: bay('yeter'), adimlar: [
      'Sustum. Perihan Hanım da sustu; onu hiç böyle görmemiştim.',
    ] });
    return liste;
  }

  /* ---- İkindi serbest vakti: konak planında yürüyerek (plan modu, veri/plan_konak.js) ----
     Kim nerede (metinden): Perihan hamamda (odası boş; Nazlı sofada, görür), Madam odasında (sabah
     "yalnız değil" yazılırsa Beyoğlu'na yollanmış), Hatice mutfakta, babam selamlıkta (mabeynde Nabi Bey
     görür), Süha'nın kapısı kilitli (sandık kayışı sesi). ★ ezan: sarı oda. */
  var refakatVar = function (S) { return b(S).p16_sefik === 'golge' || b(S).p16_not === 'nimet'; };
  var VAKIT = {
    ad: 'İkindi', hak: 2, plan: 'konak',
    hedef: { mekan: 'sari_oda', metin: 'Ezan okununca sarı odaya git. Perihan Hanım bekliyor.' },
    mekanlar: ['josephine_oda', 'mutfak', 'calibe_oda', 'baba_oda', 'sari_oda'],
    refakat: refakatVar,
    kapali: {
      suha_oda: { etiket: 'kilitli', neden: 'Süha Bey\'in kapısı kilitli. İçeriden sandık kayışı sesi geliyor.' },
      josephine_oda: { kosul: madamGitti, etiket: 'kilitli', neden: 'Madam\'ın kapısı kilitli. Perihan Hanım onu ikindi Beyoğlu\'na yolladı.' },
      mutfak: { kosul: mutfakKapali,
        etiket: function (S) { return dinlendi(S) ? 'kilitli' : 'kapalı'; },
        neden: function (S) { return dinlendi(S) ? 'Perihan Hanım mutfağı hâlâ kilitli tutuyor. Hatice\'ye ulaşamıyorum.'
          : 'Hatice mutfağın kapısını bana kapadı. Bozduğum söz hâlâ arada.'; } },
    },
    riskli: {
      /* B6 (calibe_suphe 0–12): şüphe 4'ün altındaysa Nazlı oyunda, kapıyı gözetmez; 8 ve üstünde "nöbette":
         Şefik'in ya da Nimet'in oyalaması ona sökmez */
      calibe_oda: { gozcu: function (S) { return supheTetik(S) ? 'Nazlı' : null; }, gozcuYer: 'konak_sofa',
        uyari: function (S) { return !supheTetik(S) ? 'Nazlı oyunda, kapıya bakan yok' : supheNobet(S) ? 'Nazlı nöbette, oyalanmaz' : 'Nazlı görür'; },
        refakat: function (S) { return refakatVar(S) && !supheNobet(S); },
        sonuc: 'Nazlı annesine söyler: hamamdayken odasına girdim.',
        refakatMetin: function (S) { return b(S).p16_sefik === 'golge' ? 'Şefik Nazlı\'yı oyuna çekti, beni görmedi.' : 'Nimet Nazlı\'yı mutfağa çağırdı, beni görmedi.'; },
        bedel: { etki: { calibe_suphe: 1 }, bayrak: { p16_nazli: 'gordu' }, ic: 'Nazlı gördü. Hamam dönüşü annesine yetişir.' } },
      mabeyn_merdiven: { gozcu: 'Nabi Bey', gozcuYer: 'selamlik_sofa', uyari: 'Nabi Bey görür',
        sonuc: 'Nabi Bey ablasına söyler: selamlığa indim.',
        refakatMetin: function (S) { return b(S).p16_sefik === 'golge' ? 'Şefik önümden koştu: “Babama ben götürüyorum!” Nabi Bey bir şey sanmadı.' : 'Nimet önümde tepsiyle yürüdü. Tepsinin ardındaki kızı kimse sormaz.'; },
        bedel: { etki: { calibe_suphe: 1 }, bayrak: { p16_nabi: 'gordu' }, ic: 'Nabi Bey merdivenin başında. Ablasına koşacak.' } },
    },
    yerler: {
      josephine_oda: { kisi: 'josephine', kosul: function (S) { return !madamGitti(S); }, eylem: 'konuş', ipucu: 'Madam odasında. Ezanda bir şahit işe yarar (konuşma).',
        adimlar: [
          { eger: madamDost, ise: [
            ['josephine', 'Sarı oda mı? Bir kez gördüm, bir kez daha görürüm.', 'kararli'],
          ], degilse: [
            ['josephine', 'Perihan Hanım beni kovarsa Paris\'e dönecek param yok.', 'endiseli'],
          ] },
          /* T29c (GPT A16-2): mürebbiye önlük takmaz */
          { soru: 'Madam ellerini önünde birleştiriyor, başparmağı broşunun kenarına gidiyor.', secim: [
            { m: '“Ezanda sarı odanın kapısında durun. Duyduğunuzu söyleyin.”', kosul: madamDost, etki: { josephine: 1 }, bayrak: { p16_v_madam: 'tanik' }, iz: 'Madam ezanda sarı odanın kapısında olacak.', adimlar: [
              /* Diyalog T1 (b16 #6): kapıyı hamlede Feride açar; Madam'ın sözü susmamak */
              ['josephine', 'Dururum, ma chère. Bu kez susmam.', 'kararli'],
            ] },
            { m: '“Yalnız babama söyleyin: ezanda sarı odaya gelsin.”', bayrak: { p16_v_madam: 'haber' }, iz: 'Madam babana haber verecek: ezanda sarı odaya gelecek.', adimlar: [
              ['josephine', 'Bunu yaparım. Kapı aralığında bir cümle, o kadar.', 'notr'],
            ] },
            { m: '“Siz bu işe karışmayın Madam. Sizi korumak istiyorum.”', kosul: function (S) { return !madamDost(S); }, etki: { josephine: 1 }, bayrak: { p16_v_madam: 'koru' }, adimlar: [
              ['josephine', 'Merci. Siz de kendinizi koruyun.', 'endiseli'],
            ] },
          ] },
        ], bos: 'Madam piyanonun başında, başını kaldırmadı.' },
      mutfak: { kisi: 'reftar', ifade: 'notr', kosul: function (S) { return !mutfakKapali(S) && !haticeYok(S); }, eylem: 'konuş',
        ipucu: 'Hatice mutfakta. Ada\'daki ezberini kimin verdiğini biliyor (konuşma).',
        adimlar: [
          { eger: haticeKorundu, ise: [
            /* Diyalog T1 (ses F1, A10): minnet cümlesi sezonda beşinci kez tekrarlanmaz; "bu evde" 408'e saklanır */
            ['reftar', 'Ada\'yı unutmadım küçük hanım. Borcumu bilirim.', 'notr'],
          ], degilse: [
            ['reftar', 'Ne istiyorsunuz? Herkes benden bir şey istiyor.', 'somurtkan'],
          ] },
          { eger: function (S) { return bilir(S, ITIRAF); }, ise: [
            ['ic', 'Ada\'daki itirafını bu kulaklar duydu. İnkâr edemez.', 'kararli'],
          ] },
          { soru: 'Hatice kepçeyi bıraktı.', secim: [
            { m: '“Ada\'daki ezberini sana kim verdi? Akşam babamın önünde söyle.”', kosul: function (S) { return haticeKorundu(S) || bilir(S, ITIRAF); }, bayrak: { p16_v_hatice: 'tanik' }, iz: 'Hatice ezanda şahitlik edecek.', adimlar: [
              ['reftar', 'Hanım beni ezer, bilirim. Ama ezmeden önce ben söylerim.', 'kararli'],
            ] },
            /* Diyalog T1 (b16 #5): "çıkarırım" kovmak gibi okunuyordu; söz kurtarmaktır */
            { m: '“Söyle. Söz veriyorum, seni Münevver Hanım\'ın konağına aldırırım.”', bayrak: { p16_v_hatice: 'tanik', p16_hatice_soz: true }, iz: 'Hatice şahitlik edecek. Karşılığında onu Münevver Hanım\'ın konağına aldıracaksın.', adimlar: [
              /* GPT T24b 16-5: daha önce tutulmuş söz silinmez (10. bölüm Ada'da koruma, 8. bölüm sofrada susma) */
              { eger: haticeKorundu, ise: [
                ['reftar', 'Ada\'da bana verdiğiniz sözü tuttunuz. Bunu da tutarsınız.', 'duygulu'],
              ], degilse: [{ eger: function (S) { return b(S).p8_hatice === 'soz'; }, ise: [
                ['reftar', 'Sofrada sırrımı açmadınız. Bu sözünüze de güvenirim.', 'duygulu'],
              ], degilse: [
                ['reftar', 'Söz mü? Bunca yıldır bu mutfakta bana söz veren olmadı.', 'duygulu'],
              ] }] },
            ] },
            { m: '“Bir şey söyleme. Yalnız bu akşam mutfaktan çıkma.”', bayrak: { p16_v_hatice: 'sus' }, adimlar: [
              ['reftar', 'Çıkmam. Kepçemle beklerim.', 'kararli'],
            ] },
          ] },
        ], bos: 'Mutfakta tencereler kaynıyor, Hatice yok.' },
      /* GPT T26 (öncelik 1): düğmeyi yalnız duymuş kız, sarı odadaki hamlenin düğmenin kendisini istediğini burada öğrenir */
      calibe_oda: { eylem: 'ara', ipucu: function (S) {
          if (dugmeOnce(S)) return 'Perihan Hanım hamamda. Dikiş kutusundaki boşluk göze batabilir (eşya).';
          return bilir(S, DUGME) ? 'Perihan Hanım hamamda, Süha Bey\'in anlattığı düğme belki bu odada (eşya).'
            : 'Perihan Hanım hamamda, odası boş (eşya).';
        },
        adimlar: [
          'Oda boş, ayna örtülü. Sedirin ucunda sedef kakmalı bir dikiş kutusu.',
          { eger: dugmeOnce, ise: [
            ['ic', 'Düğme dünden beri koynumda. Kutudaki yeri boş.', 'kararli'],
          ] },
          { soru: 'Kutunun kapağı aralık, aynanın örtüsü de.', secim: [
            { m: 'Düğmenin boş yerine bir makara koy.', kosul: dugmeOnce, bayrak: { p16_v_dugme: true }, iz: 'Kutudaki boşluğu örttün. Kapağı açan eksiği ilk bakışta görmeyecek.', adimlar: [
              'Kadifenin çukuruna bir makara oturttum. Kapağı kapadım.',
              ['ic', 'Şimdi kapağı kim açarsa açsın.', 'tebessum'],
            ] },
            { m: 'Kutuyu aç, makaraların altına bak.', kosul: function (S) { return !dugmeOnce(S); }, bayrak: { p16_v_dugme: true }, iz: 'Perihan\'ın dikiş kutusundan bir yelek düğmesi aldın. Yokluğu fark edilebilir.', adimlar: [
              { efekt: 'anahtar' },
              'Makaraların altında kadife bir kese. İçinde çiçekli bir yelek düğmesi.',
              { eger: function (S) { return var_(S, DUGME); }, ise: [
                { kozKaynak: [DUGME, 'Elimde, Perihan Hanım\'ın dikiş kutusundan aldım'] },
                ['ic', 'Süha Bey\'in anlattığı düğme. Demek doğruymuş.', 'dusunceli'],
              ], degilse: [
                { koz: DUGME, kaynak: 'Elimde; Perihan Hanım\'ın dikiş kutusundan aldım', alt: 'Süha Bey\'in yeleğindeki çiçekli düğmelerden biri. Perihan Hanım neden saklıyor?' },
              ] },
            ] },
            { m: 'Kutuya dokunma. Aynanın örtüsünü kaldır.', bayrak: { p16_v_ayna: true }, iz: 'Perihan\'ın aynasında nikâh günün yazılı. Bunu biliyorsun.', adimlar: [
              'Aynanın köşesine bir kâğıt sıkıştırılmış. Bir tarih ve “Remzi” yazıyor.',
              ['ic', 'Benim nikâh günüm. Benden önce bu aynaya yazılmış.', 'ofkeli'],
            ] },
          ] },
        ], bos: 'Perihan Hanım\'ın odası boş, ayna örtülü.' },
      baba_oda: { kisi: 'sai', ifade: 'notr', kosul: function (S) { return !babaGelir(S) && !babaSorar(S); }, eylem: 'konuş',
        ipucu: 'Babam selamlıkta. Mabeyni geçmek gerek (konuşma).',
        adimlar: [
          ['sai', 'Haremden selamlığa ne işin var kızım?', 'ciddi'],
          { soru: 'Babam kitabını kapadı.', secim: [
            { m: '“Ezan okununca sarı odanın kapısına gelin. Girmeyin, dinleyin.”', bayrak: { p16_v_baba: 'cagir' }, iz: 'Babam ezanda sarı odanın kapısında dinleyecek.', adimlar: [
              /* T32 (b13_16 O4): Sait'in "notr"u gülen ana yüze düşüyordu */
              ['sai', 'Kapı dinlemek bana yakışmaz. …Gelirim.', 'ciddi'],
            ] },
            { m: '“Bu akşam ne duyarsanız duyun, önce bana sorun.”', bayrak: { p16_v_baba: 'sor' }, iz: 'Babam bu akşam karar vermeden önce sana soracak.', adimlar: [
              ['sai', 'Sorarım. Söz.', 'mahzun'],
            ] },
          ] },
        ], bos: 'Babam kitabına gömülmüş, başını kaldırmadı.' },
    },
    /* T32 (b13_16 B16 SÜRÜK): oyun mekaniği ("vaktim doldu, hazırladığım kadarıyla") konuşulmaz */
    bitis: ['Ezan okunuyor. Elimde ne varsa onunla sarı odaya çıkıyorum.'],
  };

  /* ---- Sonların sahne parçaları ---- */
  /* Kavuşma: duvak, Feride'nin "seviyorum"u ve öpücük, an resmi; ardından Beyrut'tan mektup (her iki nikâh yolunda ortak).
     T27b (GPT B16-S1): sezonun romantik borcu yeni sezon zarfından ÖNCE ödenir; zarf ve Beyrut kararı öpüşmeden sonra,
     en sonda kart. GPT B16-SE1: anlatılmayan kandil yakılışı çıktı (zarfın kâğıt sesi kalır).
     GPT B16-G1: an_kavusma (Feride duvağın ucunda, kalabalık kapıda) duvak seçiminden ÖNCE açılır; kimin kaldıracağını
     oyuncu resimden sonra seçer, öpüşme resmin üstüne yazılmaz */
  function kavusmaSonu(gizli) {
    return [
      /* 10. bölümün iskele vedası: Kenan'da kalan emanet kavuşmada döner (GPT Tur 23 kenan 10'a) */
      { eger: function (S) { return b(S).p10_veda === 'saat'; }, ise: [
        ['ic', 'Cebinden iskelede geri verdiğim saat çıktı, hâlâ durmuş. Bu gece ben kurdum.', 'tebessum'],
      ], degilse: [{ eger: function (S) { return b(S).p10_veda === 'kurdele'; }, ise: [
        ['ic', 'Bileğinde iskeledeki kurdelem. Düğümünü Selanik çözememiş, ben de çözmedim.', 'tebessum'],
      ], degilse: [{ eger: function (S) { return b(S).p10_veda === 'el'; }, ise: [
        ['ic', 'İskelede herkesin önünde tuttuğum el. Bu gece bırakmam için bir sebep yok.', 'tebessum'],
      ], degilse: [{ eger: function (S) { return b(S).p10_veda === 'kozalak'; }, ise: [
        /* 10. bölüm: "Şefik'e söyleyin: her birine bir mektup" */
        ['ic', 'Cebinden Şefik\'in on bir kozalağı çıktı. Her biri için bir mektup yazmış.', 'tebessum'],
      ], degilse: [{ eger: function (S) { return b(S).p10_veda === 'mendil' && b(S).p10_teslim !== 'vermem'; }, ise: [
        /* 10. bölüm: mendil Kenan'ın avucunda kaldıysa ("Kokusu geçmeden dönerim") */
        ['ic', 'Göğüs cebinde mendilim. Kokusu geçmeden dönmüş.', 'tebessum'],
      ] }] }] }] }] },
      /* 1–2. bölümün yasemini: kitabından çıkan çiçek kitabına döner (GPT Tur 23 kenan 10'a 1) */
      { eger: function (S) { return b(S).p2_yasemin_yer === 'madalyon'; }, ise: [
        ['ic', 'Madalyonumdaki yasemin düğün evinden beri orada, kurudu. Ona gösterdim, güldü.', 'tebessum'],
      ], degilse: [{ eger: function (S) { return b(S).p2_yasemin_yer === 'defter'; }, ise: [
        ['ic', 'Düğün evindeki yasemin defterimde kurudu. Yarın onu kitabının arasına geri koyacağım.', 'tebessum'],
      ] }] },
      /* T28b (GPT G16-3): gizli nikâh çizimi (duvak hâlâ yüzde) nikâh anında, duvak kararından ÖNCE; karar sonrası resim
         seçimi geri almaz. Rızalı nikâhta seçime göre çeşit kararın ardından (aşağıda) */
      gizli ? { cizim: 'an_kavusma_gizli' } : { bayrak: {} },
      ['mukaddem', 'Duvağını ben kaldırmayacağım. Sen istersen, sen kaldır.', 'gulumser'],
      /* T28 (b13_16 GÖRSEL): kavuşma resmi duvak seçiminden SONRA açılır ve seçimi yalanlamaz: gizli nikâhta
         Leyla'ların sofası (an_kavusma_gizli), duvağı Kenan kaldırdıysa an_kavusma_o, öbür dalda an_kavusma */
      { soru: 'Duvağın ucu parmaklarımda.', secim: [
        { m: 'Duvağı kendin kaldır.', etki: { mukaddem: 5 }, bayrak: { p16_duvak: 'ben' }, adimlar: [
          'Duvağı ben kaldırdım. Yüzümü bu kez kimseden saklamadım.',
        ] },
        { m: 'Elini tut, duvağı o kaldırsın.', etki: { mukaddem: 5 }, bayrak: { p16_duvak: 'o' }, adimlar: [
          'Elimi bırakmadan, titreyen öbür eliyle duvağı kaldırdı.',
        ] },
      ] },
      gizli ? { bayrak: {} } : { eger: function (S) { return b(S).p16_duvak === 'o'; }, ise: [
        { cizim: 'an_kavusma_o' },
      ], degilse: [
        { cizim: 'an_kavusma' },
      ] },
      /* B4: ikindi giyilen annenin ipeklisi nikâhta da üstünde (gelinlik portresi görsel listesinde) */
      { eger: function (S) { return S.giyili === 'nisan_yadigar'; }, ise: [
        ['ic', 'Annemin gök mavisi ipeklisi üstümde. Duvağın altında onun danteli.', 'utanmis'],
      ] },
      /* S8 + romantik mercek: sezon boyu ertelenen ödül; Feride sözü kendi ağzıyla kurar, öpücüğü o başlatır.
         8. bölümde "Kaşımın ucuna. Gerisi düğüne." diyen kızın sözü burada ödenir */
      { eger: function (S) { return b(S).p8_opus === 'kas'; }, ise: [
        ['f', 'Gerisi düğüne demiştim Kenan. Seni seviyorum.', 'gulumseyen'],
      ], degilse: [
        /* T29 (b13_16 B16 DİYALOG 10'a 1): iki "seviyorum" dalı ayrışır; bu dal nesneye (masal kitabının satırı) sığınır */
        ['f', 'Bu senindir Kenan, ben de. Seni seviyorum.', 'gulumseyen'],
      ] },
      /* Diyalog T1 (b16 #23, eksik 2): Kenan karşılık verir (nesneyle, yarım cümleyle); öpücük soğumaz.
         'utangac' portresi kitaplı görsel olduğundan (benzetim yasağı) T27b'de yeni mukaddem_gulumser (sıcak, utangaç) */
      /* T32 (ifade envanteri 2b-31): 'utangac' portresi kitaplı (benzet16 yasağı); T27b'nin sıcak-utangaç gulumser'i kalır */
      ['mukaddem', 'Ben de seni… Masal kitabının ilk sayfasından beri.', 'gulumser'],
      /* T27 (SES): doruk vurucu anda (sezon kartında değil) */
      { muzik: 'romantik' },
      /* T30 (O16-3): temas kavuşmada da oyuncunun seçimi */
      { soru: 'Kenan yanımda. Bu geceyi nasıl kapatacağım?', secim: [
        { m: 'Yan yana otur. Bu gece temas istemiyorum.', bayrak: { p16_opus: 'mesafe' }, adimlar: [
          ['f', 'Yanımda kal Kenan. Bu gece yalnız konuşalım.', 'tebessum'],
          ['mukaddem', 'Nasıl istersen. Buradayım.', 'gulumser'],
        ] },
        { m: 'Onu öp.', etki: { mukaddem: 2 }, bayrak: { p16_opus: 'opus' }, adimlar: [
          { muzik: 'doruk' },
          ['an', 'Feride onu öptü. Kenan gözlerini kapadı, elini bir daha bırakmadı.'],
        ] },
        { m: 'Alnını alnına daya. Gerisi sabaha.', bayrak: { p16_opus: 'alin' }, adimlar: [
          ['an', 'Feride alnını Kenan\'ın alnına dayadı. Kenan gözlerini kapadı, elini bir daha bırakmadı.'],
        ] },
      ] },
      /* §5b: annesinin sözünü Kenan kendisi söyler; anlatıcı yalnız eylemi verir.
         T33 (b13_16 B16 SÜRÜK): doruktan sonra adım azaldı; masal kitabının iç sesi anlatıcı satırına katıldı */
      ['an', 'Dizlerindeki masal kitabını birlikte kapadılar. Kenan ancak o zaman cebindeki mühürlü zarfı hatırladı.'],
      ['mukaddem', 'Annem “birlikte açın” dedi. Beyrut\'tan, ikimize.', 'ana'],
      { efekt: 'kagit' },
      /* Diyalog T1 (b16 #24): iki kişiye birden "babanızın" belirsizdi; emanet sezon ipliğine (Behiye) bağlanır */
      { kart: 'Beyrut\'tan bir mektup', alt: '“Kenan Bey\'e ve Feride Hanım\'a: Behiye Hanım\'ın kızına bıraktığı emanet bendedir. Beyrut\'a gelin. —Şebib”' },
      /* T28 (b13_16 SÜRÜK): sezonun romantik ödülünden sonra satır azaldı (zarf ve tek iç ses kaldı; Şebib'in kâğıdı
         benzet16 kuralı gereği her sonda var) */
      ['ic', 'Annemin bana bıraktığı bir emanet. Nikâh gecemde, bir yabancının elinde.', 'mahzun'],
      { soru: 'Kenan mektubu bana uzatıyor.', secim: [
        { m: '“Gideriz. İkimiz birden.”', etki: { mukaddem: 3 }, bayrak: { p16_beyrut: 'gidelim' }, adimlar: [
          ['mukaddem', 'İkimiz birden. Artık hep öyle.', 'gulumser'],
        ] },
        { m: '“Önce onun kim olduğunu öğreneceğim.”', etki: { vakar: 1 }, bayrak: { p16_beyrut: 'ogren' }, adimlar: [
          ['mukaddem', 'Sen öğren. Ben yanında dururum.', 'gulumser'],
        ] },
      ] },
      KENAN_OTE,
      { kart: KANCA.son_kavusma },
    ].concat(kapanis());
  }

  /* ---- Cemil T27: Süha yolunun kapısız dalında bağımsız "Hayır" (p16_son 'son_hayir', beşinci son) ----
     Yalnız kapı 'yok' + güçlü yüzleşme + Süha yolunda açılır (yol 'suha'): sarı odada baba dönmüştü. Feride Süha'ya da
     hayır der; baba sözünü geri alır; Süha (tehlikeli kalır) aynı gece konaktan çıkar. Gece Süha'nın boş odası
     (p16_suha_oda) iki sonun ortak son karesidir: sahte mektubun izi "hayır dediğim adam"e bağlanır. İkinci sezonda Feride
     babasının evinde, nikâhsız; Şebib'in hekime hazırladığı evde beklenen hanım gelmeyecek. */
  /* T28 (b13_16 ana bulgu 3): Süha kapısını 15'te seçen kız da (kapı 'suha', güçlü yüzleşme) şart yerine hayır diyebilir;
     dünkü evetten dönmenin bedeli görünür (itibar −1, babanın sorusu) */
  /* T28b: babanın desteği sarı odadaki gerçek hükmünden (p16_baba); güç sonradan (itibar) değişebilir */
  var babaDondu = function (S) { return b(S).p16_baba === 'dondu'; };
  var HAYIR_DALI = [
    { muzik: 'gerilim' },
    { eger: function (S) { return kapi(S) === 'suha'; }, ise: [
      ['f', 'Dün şartımla evet demiştim babacığım. Bu gece geri alıyorum: Süha Bey\'e varmam.', 'kararli'],
      ['sai', 'Dünkü evetini geri mi alıyorsun? Mahalle bunu duyar kızım.', 'ciddi'],
      /* Bedel babanın güveninde (itibar güç hesabına girer; sarı odadan sonra değişmemeli) */
      { etki: { baba_guven: -1 } },
    ], degilse: [
      ['f', 'Sarı odada sözümü dinlediniz babacığım. Bunu da dinleyin: Süha Bey\'e varmam.', 'kararli'],
    ] },
    /* T28 (b13_16 ANLATI): anlatıcı 1890'ların çağdaşı; "o yıllarda" demez */
    ['an', 'Sait Efendi uzun süre sustu. Verdiği sözü geri alırsa mahalle bunu konuşacaktı.'],
    /* T28b (GPT O16-1/A16-2; kök bulgu 1): ret sözü yüzleşme gücüne bağlı değil. Güç yalnız babanın desteğini belirler:
       güçlü yüzleşmede baba sözünü geri alır; güçsüzde sözünü geri almaz ama rızasız nikâh da kıydırmaz. Kaydedilen
       "hayır" silinmez; Süha her iki dalda reddedilen talip olarak konaktan çıkar (tehlikeli kalır) */
    { eger: babaDondu, ise: [
      ['sai', 'Sözümü geri alırım Süha. Kızımı istemediği bir eve vermem.', 'mahzun'],
      /* T28 (b13_16 DİYALOG): kurulmamış deyim düzeldi */
      ['an', 'Süha Bey kıpırdamadı. Yüzünde tek bir çizgi oynamadı.'],
      /* T27b (GPT B16-D1): 13. bölümde ya da 12. bölümün rıza itirazında hayırı zaten duymuş olabilir; "ilk" olan babanın kabulü */
      { eger: (S) => b(S).p12_v_on === 'ayril', ise: [
        ['suha', 'Hayırınızı bu gece babanız da kabul etti. Sizden bir söz daha istemem.', 'soguk'],
      ], degilse: [
        ['suha', 'Hayırınızı bu gece babanız da kabul etti. Önünüzde bir kez diz çöktüm, ikincisi olmaz.', 'soguk'],
      ] }, // T32 (O5): diz cümlesi yalnız bu dalda kaldı
    ], degilse: [
      ['sai', 'Sözüm sözdür kızım, bu gece geri almam. Ama rızan yoksa nikâh da kıydırmam.', 'mahzun'],
      ['an', 'Süha Bey kıpırdamadı. Yüzünde tek bir çizgi oynamadı.'],
      ['suha', 'Babanız sözünü geri almadı, ben alıyorum. Hayır diyen eli tutmam.', 'soguk'],
    ] },
    { soru: 'Süha Bey eşikte. Sandığı yukarıda bağlı.', secim: [
      { m: '“Sandığınız bağlıysa kapı açık Süha Bey. Bu gece.”', etki: { vakar: 1 }, bayrak: { p16_red: 'kapi' }, iz: 'Süha\'ya kapıyı kendin gösterdin. Bunu unutmayacak.', adimlar: [
        ['suha', 'Bu gece çıkarım. Kapıyı gösteren eli de unutmam.', 'soguk'],
      ] },
      { m: '“Perihan Hanım\'a da siz söyleyin: kızı size hayır dedi.”', etki: { calibe_suphe: 1 }, bayrak: { p16_red: 'perihan' }, iz: 'Süha hayırını Perihan\'a kendi ağzıyla taşıyacak.', adimlar: [
        ['suha', 'Ona ben taşırım. Sarı odada kaybetti, bu gece sevinecek.', 'soguk'],
      ] },
    ] },
    ['an', 'Süha Bey sandığıyla selamlık kapısından çıktı. O çatı altında bir gece daha kalmadı.'],
    { gizle: 'suha' },
    /* Vurucu son satır Feride'nin sesi; babanın cevabı kapıyı onun elinde bırakır. T28 (ORTAK): sonun kendi anı */
    { cizim: 'an_hayir' },
    /* T28b (GPT D16-2): kapı/anahtar mecazı iki ağızda birden açıklanmaz; söz ardından somut taahhüt (baba eylemle) */
    ['f', 'Hayır dedim babacığım. Bu cevabı yarın da değiştirmeyeceğim.', 'kararli'],
    { eger: babaDondu, ise: [
      ['sai', 'Değiştirmeni istemeyeceğim kızım. Süha\'yla sabah ben konuşurum.', 'mahzun'],
    ], degilse: [
      ['sai', 'Yarın da sorarım kızım. Perihan Hanım da soracak.', 'ciddi'],
      ['ic', 'Sorsunlar. Hayırım kimsenin defterinde evet diye yazılmayacak.', 'kararli'],
    ] },
    /* T28b (GPT SE16-2): ret kazanımından sonra kısa gerçek sessizlik; boş odada gerilim yeniden başlar */
    { muzik: 'sessiz' },
    { gizle: 'sai' },
    { gorev: 3 },
    { ara: { mekan: 'suha_oda', yer: 'Gece yarısı · Süha Bey\'in odası', satirlar: [
      'Feride o gece uyumadı. Selamlığın kapısı kapandıktan sonra konakta yalnız onun adımları dolaştı.',
      (S) => (b(S).p16_hatice_soz === true
        ? 'Mutfakta Hatice bohçasını bağlamıştı, sabah Münevver Hanım\'ın konağına gidecekti. Feride o sözünü tutmuştu.'
        : madamKonustu(S) ? 'Madam Josephine\'in odasında lamba geç vakte kadar yandı. Şahitliğin bedelini sabah ödeyecekti.'
          : b(S).p14_sefik === 'yanimda' ? 'Şefik\'in kapısının önünde durakladı. Çocuğu ateşten kurtaran el o gece konaktan çıkmıştı.'
            : ''),
      'Süha Bey\'in odasının kapısı aralık kalmıştı. Hekim hiçbir kapıyı kaza eseri aralık bırakmamıştı.',
    ] } },
  ];
  var hayir = function (S) { return b(S).p16_son === 'son_hayir'; };
  /* T28b (GPT O16-1/A16-2; kök bulgu 1): Remzi'ye giden gecede (güçsüz "hiçbiri" ya da Remzi kapısı) de açık ret.
     p16_son 'son_hayir', p16_hayir 'gece'. Baba desteklemez (güç yok) ama rızası sorulmadan nikâh kıyacak imam yoktur:
     nikâh kıyılmaz, kaydedilen hayır silinmez. Bedel: evde sözü geçmez, Perihan'ın tehdidi. Şebib'in kâğıdı kapının
     altından gelir. Dalın kendi anı an_hayir_gece (babanın "sözün geçmez"i ile Perihan'ın tehdidi arasında) */
  var gece = function (S) { return ['gece', 'nikah'].indexOf(b(S).p16_hayir) >= 0; };
  var HAYIR_GECE = [
    'Sandığı kapadım. Selamlığa kendi ayağımla indim.',
    { goster: ['sai', 'ciddi'] },
    { eger: function (S) { return kapi(S) === 'remzi'; }, ise: [
      ['f', 'Babacığım, dünkü evetimi geri alıyorum. Remzi Bey\'e varmam.', 'kararli'],
      ['sai', 'Dün evet dedin! Bütün selamlık duydu.', 'ofkeli'],
      ['f', 'Dün evet dedim, bu gece hayır diyorum. İkisi de benim sesim babacığım.', 'ofkeli'],
    ], degilse: [
      ['f', 'Babacığım, Remzi Bey\'e varmam. İmam sorduğunda da hayır derim.', 'kararli'],
      ['sai', 'Söz verdim kızım. Beni mahallenin önünde yalancı mı çıkaracaksın?', 'ciddi'],
      ['f', 'Rızam olmadan verilen söz benim yalanım olmaz babacığım.', 'ofkeli'],
    ] },
    ['an', 'Sait Efendi uzun süre sustu. Hayır diyen kıza imamın nikâh kıymayacağını o da biliyordu.'],
    ['sai', 'Yarın nikâh olmaz. Ama bundan sonra konakta sözün geçmez.', 'ciddi'],
    { muzik: 'sessiz' },
    ['an', 'Perihan Hanım merdivenin başındaydı, her kelimeyi duymuştu.'],
    { cizim: 'an_hayir_gece' },
    { gizle: 'sai' },
    { goster: ['calibe', 'ofkeli'] },
    ['calibe', 'Hayır diyen kızın kapısı bu konakta kapanır. Sabah görürsün.', 'ofkeli'],
    { soru: 'Perihan Hanım yolumu kesiyor.', secim: [
      { m: '“Kapayın. Sürgüsü yine içeriden bende.”', kosul: (S) => b(S).p6_karar === 'surgu' || b(S).p7_kapi === 'surgu', etki: { vakar: 1, calibe_suphe: 1 }, bayrak: { p16_red: 'surgu' }, iz: 'Perihan\'a sürgünün içeriden sende olduğunu söyledin.', adimlar: [
        ['calibe', 'Sürgü de benim evimin demiri kızım.', 'soguk'],
      ] },
      { m: '“Kapımı yine ben açacağım.”', kosul: (S) => b(S).p6_karar !== 'surgu' && b(S).p7_kapi !== 'surgu', etki: { vakar: 1 }, bayrak: { p16_red: 'kapi' }, adimlar: [
        ['calibe', 'Bu konakta kapıyı kimin açacağını görürüz kızım.', 'soguk'],
      ] },
      { m: 'Cevap verme. Yanından geçip odana çık.', etki: { vakar: 1 }, bayrak: { p16_red: 'sus' }, adimlar: [
        'Yanından geçtim. Eteğim eteğine değmedi.',
      ] },
    ] },
    { gizle: 'calibe' },
    { ara: { yer: 'Ertesi gün', satirlar: [
      'Remzi Bey\'in annesinin arabası kuşlukta kapıya geldi. Selamlıkta yarım saat kaldı, boş döndü.',
      'Nikâh kıyılmadı. Sait Efendi o gün kızının yüzüne bakmadı, Perihan Hanım ise gözünü ondan ayırmadı.',
      function (S) { return muk(S) ? 'Öğlen Leyla bir satır getirdi: Münevver Hanım\'ın kapısı Feride\'ye her saat açıktı.'
        : b(S).p16_hatice_soz === true ? 'Hatice bohçasıyla Münevver Hanım\'ın konağına geçti, Feride ona verdiği sözü tuttu.' : ''; },
    ] } },
    'Akşamüstü kapımın altından bir zarf itildi. Düğümü yabancı bir eldendi.',
    { efekt: 'kagit' },
    { kart: 'Kapımın altında bir zarf', alt: '“Behiye Hanım\'ın kızına: bir kapınız kapanırsa annenizin emaneti Beyrut\'ta bekliyor. —Şebib”' },
    { soru: 'Zarf elimde. Babam selamlıkta.', secim: [
      { m: 'Zarfı sakla. Bu adın sahibini önce kendin öğren.', bayrak: { p16_sebib: 'sakla' }, adimlar: [
        ['ic', 'Annemi bir yabancı tanıyor, babam tanımıyor.', 'endiseli'],
      ] },
      { m: 'Zarfı babamın önüne koy: “Bir yabancı annemin emanetini saklıyor.”', etki: { baba_guven: 1 }, bayrak: { p16_sebib: 'baba' }, iz: 'Şebib\'in zarfını babana gösterdin. Susan baban onu okudu.', adimlar: [
        ['an', 'Sait Efendi zarfı okudu, katlayıp kızına geri verdi. O gün ona uzattığı tek şeydi.'],
      ] },
    ] },
    ['ic', 'Hayır dedim. Beni razı gösteremediler.', 'kararli'],
  ];

  var HAYIR_NIKAH = [
    { muzik: 'sessiz', kes: true, durak: 800 },
    ['f', 'Hayır. Remzi Bey’e varmam.', 'kararli'],
    { goster: ['sai', 'ciddi'] },
    ['sai', 'Verdiğim sözü herkes duydu kızım.', 'ciddi'],
    ['f', 'Benim cevabımı da duysunlar babacığım.', 'kararli'],
    ['an', 'İmam nikâh defterini kapadı. Remzi Bey saatini cebine koydu.'],
    ['remzi', 'Bu masrafı unutmam hanım.', 'kararli'],
    { gizle: 'remzi' },
    ['sai', 'Rızan yoksa nikâh kıyılmaz. Ama bu konakta artık sözün geçmez.', 'ciddi'],
    { gizle: 'sai' },
    { goster: ['calibe', 'ofkeli'] },
    ['calibe', 'Herkesin önünde hayır dedin kızım. Konak yine benim.', 'ofkeli'],
    { gizle: 'calibe' },
    { ara: { mekan: 'fazila_oda', yer: 'Aynı gün · ikindi', satirlar: [
      'Misafirler dağılınca Feride odasına çıktı. Sait Efendi onunla konuşmadı.',
      (S) => b(S).p16_hatice_soz ? 'Hatice Münevver Hanım’ın konağına geçmişti. Feride’nin verdiği söz yerindeydi.' : '',
    ] } },
  ].concat(HAYIR_GECE.slice(HAYIR_GECE.findIndex(a => typeof a === 'string' && a.indexOf('Akşamüstü kapımın altından') === 0)));

  window.BOLUMLER[116] = {
    no: 116,
    baslik: 'Yeni 16. Bölüm',
    ad: 'Yüzleşme ve Son',
    dogrusal: true,
    // Motorun eski (doğrusal olmayan) bölüm sonu yolunda sezon sonu paneli için; doğrusal yolda okunmaz
    sezonSonu: true,
    sonAdi: function (S) { return SON_AD[S.bayrak.p16_son] || 'Sezon tamamlandı'; },
    adaylar: ['mukaddem', 'suha', 'remzi'],
    ilkFaz: 'A',
    baslangic: 'fazila_oda',
    fazlar: { A: { mekanlar: ['fazila_oda', 'konak_sofa', 'mabeyn_kapisi', 'sari_oda', 'josephine_oda', 'mutfak', 'calibe_oda',
      'suha_oda', 'buyuk_salon', 'mabeyn_merdiven', 'selamlik_sofa', 'baba_oda', 'selamlik_kapisi', 'taslik', 'yemek_salonu',
      'konak_bahce', 'limonluk', 'cardak', 'konak_avlu', 'araba_ici', 'fevkiye_konak', 'carsi'], baglanti: {} } },
    gorevler: [],
    // Sabah ve ikindi (görev 0) gündüz; ezan ve gece (görev 1–2) gece; ertesi gün (görev 3+) Remzi ve ayrılık yolunda gündüz
    fon: function (S, mekanId) {
      var f = S.bayrak.p16_son;
      var gunduz = S.gorev === 0 || (S.gorev >= 3 && (f === 'son_remzi' || f === 'son_umutlu_ayrilik' || (f === 'son_hayir' && S.bayrak.p16_hayir === 'bagimsiz')));
      /* Fon T1 madde 4 (YEDEK haritası): sabah avlu kapısı bu konağın taşlığında (konak_avlu kendi resmi gelene dek
         düğün evinin kapısını gösteriyordu); yatsıda selamlık sofasının gece resmi yok, selamlık kapısınınki var */
      /* T27 (ORTAK notu): konak_avlu'nun kendi resmi (g_konak_avlu, sabah ışığı) bağlandı; yönlendirme yalnız resim yoksa */
      var avlu = V.mekanlar.konak_avlu, avluKendi = !!(avlu && avlu.arkaplan && /konak_avlu/.test(avlu.arkaplan));
      if (mekanId === 'konak_avlu' && S.gorev >= 3 && !avluKendi && V.mekanlar.taslik_gunduz && V.mekanlar.taslik_gunduz.arkaplan) return 'taslik_gunduz';
      if (mekanId === 'selamlik_sofa' && S.gorev === 2 && V.mekanlar.selamlik_kapisi && V.mekanlar.selamlik_kapisi.arkaplan) return 'selamlik_kapisi';
      if (gunduz && V.mekanlar[mekanId + '_gunduz']) return mekanId + '_gunduz';
      return null;
    },
    // Hata ayıklama ve benzetim için (motor okumaz)
    _hesap: { kapi: kapi, guc: guc, guclu: guclu, yol: yol, babaRiza: babaRiza, gizliAcik: gizliAcik, izKagit: izKagit, ESIK: ESIK_GUC },

    acilis: [
      /* T33 (b13_16 B16 SES): finalin açılışı başlık müziğiyle değil, hüküm gününün temasıyla (ses.js acilis116 'baslik') */
      { muzik: 'perihan' },
      /* 15. bölümün son kararı (kapı) hemen karşılanır; anlatıcı sesi (3. kişi, geçmiş): dünkü kapı,
         mevsim (yaz sonu serinliği), Feride'nin iradesi. Sarı odanın çağrısı sahnede, kâğıtla gelir. */
      { anlati: { gorsel: 'fazila_oda_gunduz', baslik: 'Yüzleşme ve Son', satirlar: [
        function (S) {
          if (kapi(S) === 'kenan' && b(S).p15_kenan_yol === 'gizli') return 'Feride sabah namazından önce giyinmişti. Avlu kapısının ardında bir araba bekleyecekti.';
          /* T29 (b13_16 B16 ANLATI-1): 15'in Kenan kancası ("Bu kez onu ben çağıracağım") ilk satırda karşılanır */
          if (kapi(S) === 'kenan' && (b(S).p15_v_fener === 'in' || b(S).p15_v_fener === 'bir')) return 'Feride dün gece avlu kapısını Kenan\'a bir karış açmıştı. Bu akşam onu babasının önüne çağıracaktı.';
          return {
            kenan: 'Feride dün gece Kenan\'ın adını babasının önünde yüksek sesle söylemişti.',
            suha: 'Feride dün gece Süha Bey\'e evet demişti, ama kendi şartıyla.',
            remzi: 'Feride dün gece Remzi Bey\'e evet demişti. Fiyatını henüz kimse söylememişti.',
          /* Kapısız yol: oyuncu dün "hiçbir kapıya evet demem"i seçti; pasif "anahtar başkasında" yerine onun kararı (S3) */
          /* T32: 15'te şartlı evetini fısıltıdan sonra geri alan kız için de doğru (kapı açılmadı) */
          }[kapi(S)] || 'Feride dün gece hiçbir kapıyı açmamıştı. Sözünü sabaha kadar kendinde tutmuştu.';
        },
        /* Sürükleyicilik T1 S4: hava/uyanma satırı kaldırıldı (ilk seçim öne çekildi). Açılışın son satırı bölümün
           sorusunu kurar, Feride'nin iradesini önceden söylemez (Tur 2 doz 1); hazırlıksız (kapısız) yolda olmayan plan
           kesinleştirilmez (GPT Tur 23 remzi 16A). Mevsim serinliği sabah sahnesinin ilk satırına geçti (Tur 2 B16-26) */
        function (S) {
          /* T29 (b13_16 B16 ANLATI-2): 15'in nikâh kancası ("Delil babamın elinde") karşılanır: kâğıtların akıbeti */
          if (kapi(S) === 'kenan' && b(S).p15_kenan_yol === 'nikah') return 'Sait Efendi kâğıtları gece çekmecesine kilitlemişti. Anahtar sabahtan beri kendi cebindeydi.';
          return kapi(S) === 'yok' ? 'Babası sabah karar verecekti. Hükmün kimin ağzından çıkacağı ise belli değildi.'
            : 'Görücü günü geçmiş, hüküm günü gelmişti. Hükmü kimin vereceği ise belli değildi.';
        },
      ] } },
    ],

    olaylar: [
      /* ---------------- 1. Sabah, oda: "yalnız gel" kâğıdı, Şefik, kapıya göre öğlen haberi, ikindi vakti ---------------- */
      {
        id: 'p16_sabah', mekan: 'fazila_oda', tetik: 'giris', kosul: (S) => S.gorev === 0, sahne: [],
        adimlar: [
          /* 15. bölüm gizli yolu: kaçış sabah namazında, kahveden önce (Tur 2 B16-1, sıra). 14. bölümün dayağı
             B16 sabahında anılmaz (A11: hatırlatma B15 sabahında; B16'da yalnız sonlarda) */
          { eger: (S) => kapi(S) === 'kenan' && b(S).p15_kenan_yol === 'gizli', ise: [
            ['an', 'Sabah ezanı okunurken konak hâlâ karanlıktı. Feride harem merdiveninden sessizce avluya indi.'],
            /* Sürükleyicilik T1 (c7, S3): 15'in kancası ekran dışında sönmez; Feride sürgüde bir iz bulur ve alır */
            /* T28 (b13_16 OYNANIŞ, aktif kahraman): iç sürgü içeriden açılırdı (15. bölümde Feride kendi çekti); kaçışı
               durduran yeni bir asma kilit. Gizli yol Feride hamle yapmadan çökmez: tek seçim */
            'Avlu kapısında yeni bir asma kilit, anahtarı Perihan Hanım\'ın belinde. Mandalında bir mendil.',
            ['an', 'Sokağın başında Münevver Hanım\'ın arabası bekliyordu. Arabacı kafeslere bakıyordu.'],
            { soru: 'Kilit soğuk. Araba dönmek üzere.', secim: [
              { m: 'Kafesten arabacıya işaret et: “Akşam.”', etki: { vakar: 1 }, bayrak: { p16_kilit: 'isaret' }, iz: 'Arabacı akşamı biliyor. Perihan kilidin işe yaradığını sanıyor.', adimlar: [
                'Harem kafesinin aralığından mendilimi bir kez salladım. Arabacı başını eğdi, atları çevirdi.',
                /* T32 (ifade envanteri 2a-21): kapatılmaya karşı direnç */
                ['ic', 'Kilidini vursun. Akşam başka yoldan çıkarım.', 'kararli'],
              ] },
              { m: 'Mendili al, kilidi bırak.', bayrak: { p16_kilit: 'mendil' }, iz: 'Perihan\'ın mendili sende. Kilidi, senin uyandığını bilmeden vurdurdu.', adimlar: [
                'Araba bekledi, sonra döndü.',
                ['ic', 'Perihan Hanım benden önce uyanmış. Mendili ise artık bende.', 'kararli'],
              ] },
            ] },
          ], degilse: [
            /* S4: uyanma/gün ışığı satırı kesildi; mevsim serinliği bu satırda */
            ['an', 'Sabah serinliği sofadan çekilmemişti. Hizmetçiler sessiz yürüyor, kimse Perihan Hanım\'ın adını anmıyordu.'],
          ] },
          /* 13. bölüm: Nimet kovulduysa yeri boş. S4: kahve açılışı yok; kâğıt ilk eşya */
          { eger: nimetVar, ise: [
            ['an', 'Nimet kapıyı çalmadan girdi. Tepside kahve yoktu, yalnız katlanmış bir kâğıt.'],
            { goster: ['mehves', 'endiseli'] },
            ['mehves', 'Perihan Hanım\'dan hanımcığım. Cevabınızı bekliyorlar.', 'endiseli'],
          ], degilse: [
            /* 15. bölümün gecesinde Perihan kapıyı çalmadan açtı: "çalmadan açan kalmadı" denmez */
            ['an', 'Kâğıdı o sabah Nazlı\'nın dadısı getirdi. Kapıyı çaldı, cevap beklemeden açtı.'],
          ] },
          { efekt: 'kagit' },
          { kart: 'Perihan Hanım', alt: 'Ezanda sarı odaya gel. Yalnız gel.' },
          ['ic', '“Yalnız gel.” Beni o odada köşeye sıkıştırmak istiyor.', 'endiseli'],
          { soru: 'Kâğıdın altı boş.', secim: [
            { m: 'Altına yaz: “Gelirim. Yalnız değil.”', etki: { vakar: 1, calibe_suphe: 1 }, bayrak: { p16_not: 'yaz' }, iz: 'Perihan\'ı uyardın: tedirgin gelecek, ama Madam\'ı evden uzaklaştıracak.', adimlar: [
              ['ic', 'Korksun. Bir kez de o beklesin.', 'kararli'],
            ] },
            { m: 'Katla. Cevabını ezanda yüzüne ver.', bayrak: { p16_not: 'sus' }, adimlar: [
              ['ic', 'Sessizliğim de cevap. Ne düşündüğümü bilmesin.', 'kararli'],
            ] },
            { m: '“Nimet, cevabı sen götür: ‘Gelecek.’ Sonra Nazlı\'yı oyala.”', kosul: nimetVar, etki: { mehves: 1 }, bayrak: { p16_not: 'nimet' }, iz: 'Nimet ikindi Nazlı\'yı oyalayacak: gözcülü kapılardan refakatle geçersin.', adimlar: [
              ['mehves', 'Oyalarım. O kızın gözü benden kaçmaz.', 'kararli'],
            ] },
          ] },
          { gizle: 'mehves' },
          /* 14. bölüm: Şefik yanında kaldıysa gölgesi olur; mektebe verildiyse mektubu gelir */
          { eger: (S) => b(S).p14_sefik === 'yanimda', ise: [
            ['an', 'Şefik\'i mektebe göndertmeyen, babasının önünde dik duran ablasıydı. Çocuk o günden beri kapısından ayrılmıyordu.'],
            { goster: ['sefik', 'sevincli'] },
            ['sefik', 'Abla, bugün gölgen olurum. Gölgeyi kimse fark etmez.', 'sevincli'],
            { soru: 'Şefik kapımda bekliyor.', secim: [
              { m: '“Gölgem ol. Nazlı seni görünce oyuna koşar.”', etki: { sefik: 1 }, bayrak: { p16_sefik: 'golge' }, iz: 'Şefik yanında: gözcülü kapılardan refakatle geçersin.', adimlar: [
                ['sefik', 'Kimse görmez beni. Görse de bir şey sanmaz.', 'notr'],
              ] },
              { m: '“Odanda kal. Kendini bir daha kimseye siper etme.”', bayrak: { p16_sefik: 'oda' }, adimlar: [
                ['sefik', 'Peki. Ama ezanda kapının önündeyim.', 'kuskun'],
              ] },
            ] },
            { gizle: 'sefik' },
          ], degilse: [
            { kart: 'Şefik', alt: 'Abla, mektepte borazanla kalkıyoruz. Sen de kimseden korkma.' },
          ] },
          /* 15. bölümün kapısına göre öğlen haberi (birer karar) */
          { eger: (S) => kapi(S) === 'kenan', ise: [
            /* (Gizli yolun sürgülü avlu kapısı olayın başında, sabah namazında anlatıldı) */
            { ara: { yer: 'Öğleye doğru · Feride\'nin odası', satirlar: [
              'Öğle ezanı okunurken avluda Leyla\'ların arabası durdu. Leyla harem merdivenini her zamanki gibi ikişer ikişer çıktı.',
            ] } },
            /* Leyla'nın B1 tanıtımı birebir tekrarlanmaz (Tur 2 doz 2) */
            ['an', 'Leyla soluk soluğa girdi. Haberi bir dakika bile bekletmemişti.'],
            { goster: ['fevkiye', 'notr'] },
            /* Kenan'ın dönüşünü Feride 15. bölümde Leyla'dan duydu: yeni haber gibi söylenmez */
            ['fevkiye', 'Münevver Hanım yatsıda burada olacak. Kenan da yanında, dünden beri yerinde duramıyor.', 'gulumser'],
            { eger: (S) => b(S).p15_kenan_yol === 'gizli', ise: [
              ['fevkiye', 'Araba yine gelecek, imam bizde. Bu kez ağlamayacağım, yemin ederim!', 'gulumser'],
            ], degilse: [
              ['fevkiye', 'Babandan seni bir daha isteyecekler. Bu kez kapıda değil, içeride.', 'notr'],
            ] },
            { soru: 'Leyla eldivenlerini çıkarmadan sedire oturdu.', secim: [
              { m: '“Önce babamın rızasını isterim. Olmazsa araba hazır dursun.”', etki: { fevkiye: 1, calibe_suphe: 1 }, bayrak: { p16_munevver: 'araba' }, iz: 'Babanın rızası olmazsa araba hazır. Ama Leyla\'nın gelişi göze battı.', adimlar: [
                ['fevkiye', 'Dururuz. Ben de arabada olurum!', 'gulumser'],
              ] },
              { m: '“Babamın rızası olmadan hiçbir arabaya binmem.”', etki: { vakar: 1 }, bayrak: { p16_munevver: 'riza' }, iz: 'Yalnız babanın rızasıyla gideceksin.', adimlar: [
                ['fevkiye', 'Seni tanırım. Annem de “o kız kaçmaz” dedi.', 'notr'],
              ] },
              /* T29 (b13_16 B16 ANLATI-1): 15. bölümde avlu kapısında "Bu kez sizi ben çağıracağım" diyen kız çağrıyı kendisi yapar */
              { m: '“Kenan\'a söyle, yatsıda onu babamın önüne ben çağırıyorum.”', kosul: (S) => b(S).p15_v_fener === 'in' || b(S).p15_v_fener === 'bir', etki: { vakar: 1, calibe_suphe: 1 }, bayrak: { p16_munevver: 'araba', p16_cagir: true }, iz: 'Kenan\'ı yatsıda babanın önüne sen çağırdın. Münevver Hanım\'ın arabası yine de kapıda bekleyecek.', adimlar: [ /* T30 (O16-1): çağrı gizli yolu kapatmaz */
                ['fevkiye', 'Koşa koşa giderim! Bu kez onu sen çağırıyorsun.', 'gulumser'],
              ] },
            ] },
            { gizle: 'fevkiye' },
          ] },
          { eger: (S) => kapi(S) === 'suha', ise: [
            { efekt: 'kagit' },
            'Kapımın altından bir kâğıt girdi. Süha Bey\'in eğik yazısı.',
            /* 14. bölüm: Süha neye yemin etti */
            { eger: (S) => b(S).p14_yemin === 'vazgec', ise: [
              { kart: '—Süha', alt: 'Vazgeçmeye yemin ettim, ama dün kapımı siz çaldınız. Yeminimi siz çözün.' },
            ], degilse: [
              /* T29 (b13_16 B16 SÜRÜK-1): şart 15'te babanın önünde söylendi; pusula geri gitmez, fısıltının akıbetini bilir
                 (p15_v_fisilti 15'in ara bayrağı; benzet16 sözleşmesinde yok: yakKoruma) */
              { eger: (S) => b(S).p15_v_fisilti === 'kabul', yakKoruma: true, ise: [
                { kart: '—Süha', alt: '“Şartıma şartla karşılık verdiniz. Bu akşam sizinkini yerine getiririm, benimkini unutmadım.”' },
              ], degilse: [{ eger: (S) => b(S).p15_v_fisilti === 'sakla', yakKoruma: true, ise: [
                { kart: '—Süha', alt: '“Fısıltımı babanıza söylemediniz. Şartınızı bu akşam yerine getiririm, benimkini de unutmadım.”' },
              ], degilse: [
                { kart: '—Süha', alt: '“Fısıltımı babanıza taşıdınız. Şartınızı bu akşam yerine getiririm, benimkini de unutmadım.”' },
              ] }] },
            ] },
            { soru: 'Kâğıt avucumda. Mürekkebi taze.', secim: [
              { m: 'Sakla. Onun eli bende kalsın.', bayrak: { p16_pusula: 'sakla' }, adimlar: [
                { koz: SON_PUSULA, kaynak: 'Kendi eliyle yazdı', alt: 'Süha Bey\'in bu sabahki pusulası; eğik, aceleci bir el.' },
              ] },
              { m: 'Altına yaz: “Önce Perihan Hanım\'ın ipini koparın.” Geri it.', etki: { suha: 3 }, bayrak: { p16_pusula: 'yaz' }, iz: 'Şartının ilk yarısını Süha\'ya kendi elinle yazdın.', adimlar: [
                'Kâğıdı kapının altından geri ittim. Öbür yanda biri hemen aldı.',
              ] },
            ] },
          ] },
          { eger: (S) => kapi(S) === 'remzi', ise: [
            { ara: { yer: 'Öğleye doğru · Feride\'nin odası', satirlar: [
              'Öğleye doğru Remzi Bey\'in annesinden bir liste geldi: çeyiz, mehir, kına.',
              'Liste Remzi Bey\'in annesinin eliyle yazılmıştı. Mürekkep yer yer kazınıp düzeltilmişti.',
            ] } },
            ['ic', 'Her kalemin yanında fiyatı yazılı. Gönlün yanı boş.', 'mahzun'],
            { soru: 'Liste dizimde, kalem elimde.', secim: [
              { m: 'Listenin altına yaz: “Gönül: fiyatı yok.” Geri yolla.', etki: { remzi: 2, vakar: 1 }, bayrak: { p16_liste: 'yaz' }, iz: 'Remzi\'nin annesine listenin altından cevap yazdın.', adimlar: [
                ['ic', 'Okusun. Oğlu da okusun.', 'tebessum'],
              ] },
              /* B3: Remzi'nin evi listenin babaya gitmesini hakaret sayar (gönül −3). GPT T26 (öncelik 6): kırgınlık
                 haber Remzi'ye ulaşınca, nikâh sahnesinde onun kendi satırıyla gelir; burada yalnız olası bedel */
              { m: 'Listeyi katla, babama ver.', etki: { baba_guven: 1 }, bayrak: { p16_liste: 'baba' }, iz: 'Listeyi babana verdin. Remzi\'nin evi duyarsa bunu hakaret sayar.', adimlar: [
                ['ic', 'Fiyatları babam okusun. Kızını kaça verdiğini görsün.', 'ofkeli'],
              ] },
            ] },
          ] },
          { eger: (S) => kapi(S) === 'yok', ise: [
            ['an', 'Sait Efendi o sabah kızının kapısını kendisi çaldı. Konakta az görülen bir şeydi.'],
            { goster: ['sai', 'ciddi'] },
            /* T32 (b13_16 O4): Sait'in "notr"u gülen ana yüze düşüyordu */
            ['sai', 'Sabah karar verecektim. Perihan Hanım akşama bıraktı, sarı odada konuşacakmışsınız.', 'ciddi'],
            /* 13. bölüm: babaya açık ret */
            { eger: (S) => b(S).p13_ret === 'acik', ise: [
              ['sai', 'Bir kez hayır dedin. Hayırla ev kurulmaz.', 'ciddi'],
            ] },
            { soru: 'Babam kapının eşiğinde bekliyor.', secim: [
              { m: '“Ezanda sarı odanın kapısında olun babacığım. Kararınızı ondan sonra verin.”', etki: { baba_guven: 1 }, bayrak: { p16_yok: 'bekle' }, iz: 'Babam ezanda sarı odanın kapısına gelecek.', adimlar: [
                /* Diyalog T1 (b16 #4): sarı odayı iki satır önce kendisi söyledi; şaşırmaz */
                ['sai', 'Peki. Ezanda kapının önündeyim.', 'ciddi'],
              ] },
              { m: '“Benim de bir kararım var babacığım. Önce onu sorun.”', etki: { vakar: 1 }, bayrak: { p16_yok: 'soz' }, iz: 'Babam akşam karar vermeden önce sana soracak.', adimlar: [
                ['sai', 'Sorarım. Cevabın hazır olsun.', 'ciddi'],
              ] },
            ] },
            { gizle: 'sai' },
          ] },
          /* Feride'nin planı: Perihan hamamdayken tanık, kanıt ve baba */
          { ara: { yer: 'İkindi · konak', satirlar: [
            'Perihan Hanım ikindi hamama indi. Bir saat boyunca konakta kimse kimseyi saymayacaktı.',
            /* Dokuz yıllık âdet "yıllardır" bilinir; damga yerine saatin kendisi (Tur 2 B16-10, doz 1) */
            'Feride bu saati yıllardır biliyordu. Bugün o saat onundu.',
            /* T33 (b13_16 B16 ANLATI): umutlu ayrılık ve bağımsız hayır sonlarının dayandığı Beyrut planı önceden kurulur */
            (S) => (muk(S) ? 'Leyla\'nın öğlen yolladığı pusula bir haber daha getirmişti: Münevver Hanım kışı Beyrut\'ta, eski bir dostunun hanesinde geçirecekti.' : ''),
          ] } },
          /* Oynanış T1 B4: finalin giyinme anı (veride hazır üç portreli kıyafet); Perihan sarı odada ilk bakışta okur */
          { giyin: ['nisan_yadigar', 'aksam', 'nisan_sade'], soru: 'Ezanda Perihan Hanım\'ın karşısına ne giyip çıkacağım?' },
          /* İç ses ara sayfayı tekrar etmez (Tur 2 doz 3) */
          ['ic', 'Bir saatim var. Ezanda o odaya eli boş girmeyeceğim.', 'kararli'],
          { vakit: VAKIT },
          { gorev: 1 },
          /* Vakit nasıl biterse bitsin sarı odaya köprü (görevden sonra: gece fonu) */
          { ara: { mekan: 'sari_oda', yer: 'Sarı oda · akşam ezanı', satirlar: [
            'Sarı oda konağın pazarlık odasıydı.',
            /* Hazırlıksız oyuncuya olmayan plan yazılmaz (GPT Tur 23 remzi 16A) */
            (S) => {
              var f = b(S), hazirladi = f.p16_v_madam === 'tanik' || f.p16_v_madam === 'haber' || f.p16_v_hatice === 'tanik'
                || f.p16_v_dugme === true || f.p16_v_ayna === true || babaGelir(S) || babaSorar(S) || hazir(S) >= 1;
              return hazirladi ? 'Feride ezan bitmeden kapının önündeydi.'
                : 'Feride ezan bitmeden kapının önündeydi. Kimseyi hazırlamamıştı, elinde yalnız kendi sesi vardı.';
            },
            /* B6: itibar (komşu hanımlar; güç +1) ya da Perihan'ın şüphesi (Nazlı nöbette) sofada görünür; ikisi de yoksa satır yok */
            (S) => (itibarIyi(S) ? 'Sofada nikâh lafına gelen komşu hanımlar oturuyordu. Feride\'nin adı onların ağzında temizdi.'
              : supheNobet(S) ? 'Nazlı sofada nöbetteydi. Perihan Hanım günlerdir Feride\'nin her adımını saydırıyordu.' : ''),
          ] } },
        ],
      },

      /* ---------------- 2. Ezan, sarı oda: kapıda Süha, son yüzleşme, babanın hükmü (ana olay) ---------------- */
      {
        id: 'p16_sari_oda', mekan: 'sari_oda', tetik: 'giris', kosul: (S) => S.gorev === 1, sahne: [],
        adimlar: [
          { muzik: 'gerilim' },
          ['an', 'Kapının önünü Süha Bey tutmuştu. Kimse ona orada ne aradığını sormadı.'],
          { goster: ['suha', 'notr'] },
          { eger: muk, ise: [
            { eger: (S) => b(S).p14_yemin === 'perihan', ise: [
              ['suha', 'Şefik\'in başında yemin ettim: hanımı babanıza açacağım. Bu akşam mı?', 'notr'],
            ], degilse: [
              ['suha', 'İçeride benim adım da geçecek. Ben susarsam ne olur, düşündünüz mü?', 'soguk'],
            ] },
            { soru: 'Süha Bey kapının önünü kesiyor.', secim: [
              { m: '“Kapıda bekleyin. Çağırırsam girin ve söyleyin.”', bayrak: { p16_suha: 'soyle' }, iz: 'Süha kapıda bekleyecek. Ne söyleyeceği yeminine bağlı.', adimlar: [
                ['suha', 'Beklerim. Kapı beklemeyi iyi bilirim.', 'alayci'],
              ] },
              { m: '“Çekilin. Bu kapıyı ben açarım, siz karışmayın.”', etki: { vakar: 1 }, bayrak: { p16_suha: 'karisma' }, adimlar: [
                ['suha', 'Çekilirim. Sofada olurum, sesiniz yeter.', 'notr'],
              ] },
            ] },
          ], degilse: [
            /* Dünkü kapıya göre: şart yalnız Süha kapısında açık (Tur 2 B16-3) */
            { eger: (S) => kapi(S) === 'suha', ise: [
              ['suha', 'Şartınızı içeride mi söyleyeceksiniz, selamlıkta mı?', 'notr'],
            ], degilse: [{ eger: (S) => kapi(S) === 'remzi', ise: [
              /* Ret hafızası (GPT T24b kapanış 6): Remzi'yi seçen kıza geçmiş bir yakınlık yüklenmez */
              ['suha', 'Remzi\'ye evet dediniz. İçeride adım geçerse beni de pazarlığa koyar mısınız?', 'alayci'],
            ], degilse: [
              ['suha', 'Dün kimseye evet demediniz. Bu akşam içeride benim adım da geçecek.', 'notr'],
            ] }] },
            { soru: 'Süha Bey kapının önünde, bir adım yakın.', secim: [
              { m: 'Elini tut: “Kapıda bekleyin. Çağırırsam girin.”', etki: { suha: 4, itibar: -1 }, bayrak: { p16_suha: 'el' }, iz: 'Süha\'nın elini Perihan\'ın kapısının önünde tuttun. İçeriden görüldün.', adimlar: [
                'Parmakları soğuktu, nabzım onun avucunda hızlandı.',
              ] },
              /* B3: Süha bekletilmeyi sevmez (gönül −3) */
              /* T29 (b13_16 B16 OYNANIŞ-1): Remzi'ye evet demiş kızın ağzında "şartımı sonra söylerim" anlamsız */
              { m: '“Önce bu odadaki ipi koparacağım. Şartımı sonra söylerim.”', kosul: (S) => kapi(S) !== 'remzi', etki: { vakar: 1, suha: -3 }, bayrak: { p16_suha: 'once' }, iz: 'Süha\'yı kapıda beklettin. Beklemeyi sevmez, bunu unutmayacak.', adimlar: [
                /* Diyalog T1 (b16 #7): öbür dalın "kapı bekleme" cevabını tekrar etmez; tehlike ve yakınlık */
                ['suha', 'Koparın. Ucunu bana getirin.', 'alayci'],
              ] },
              /* T29 (b13_16 B16 OYNANIŞ-1; her temas teklifinde açık ret): Süha'ya evet vaat etmeyen kapı */
              { m: '“Çekilin Süha Bey. Bu kapıda size verecek cevabım yok.”', etki: { vakar: 1, suha: -3 }, bayrak: { p16_suha: 'karisma' }, iz: 'Süha\'yı kapıdan çektin. Ona bir evet vaat etmedin.', adimlar: [
                ['suha', 'Cevapsızlık da cevaptır. Sofadayım.', 'soguk'],
              ] },
            ] },
          ] },
          ['an', 'Süha Bey bir adım geri çekildi. Feride kapıyı itti.'],
          { gizle: 'suha' },
          { efekt: 'kapi' },
          ['an', 'Perihan Hanım oturuyordu ve kalkmadı. Gelene kendini denk saymazdı.'],
          { goster: ['calibe', 'soguk'] },
          'Beyaz elbise, mavi kurdele. Benim nikâhıma giyinmiş.',
          /* O günün bedelleri ilk cümlede */
          { eger: (S) => b(S).p16_suha === 'el', ise: [
            ['calibe', 'Hekimin elini benim kapımın önünde tuttun. Cesursun.', 'sinsi'],
          ], degilse: [{ eger: (S) => b(S).p16_nazli === 'gordu', ise: [
            ['calibe', 'Nazlı söyledi: hamamdayken odama girmişsin.', 'soguk'],
          ], degilse: [{ eger: (S) => b(S).p16_nabi === 'gordu', ise: [
            ['calibe', 'Nabi söyledi: selamlığa inmişsin. Babana masal mı taşıdın?', 'soguk'],
          ], degilse: [{ eger: madamGitti, ise: [
            ['calibe', 'Yalnız gelmeyecekmişsin. Madam\'ı Beyoğlu\'na yolladım.', 'soguk'],
          ], degilse: [
            ['calibe', 'Gel kızım. Otur.', 'sinsi'],
          ] }] }] }] },
          /* B4: ikindi seçilen kıyafet Perihan'ın ilk bakışında okunur */
          { eger: (S) => S.giyili === 'nisan_yadigar', ise: [
            ['calibe', 'Annenin ipeklisini giymişsin. Ölüyü de mi şahit getirdin?', 'soguk'],
          ], degilse: [{ eger: (S) => S.giyili === 'aksam', ise: [
            ['calibe', 'Leylak giymişsin. Yasa mı geldin, pazarlığa mı?', 'soguk'],
          ], degilse: [
            ['calibe', 'Fildişi, süssüz. Süsünü nikâha mı sakladın?', 'sinsi'],
          ] }] },
          /* 15'in gizli yolu: sürgülü avlu kapısı Perihan'ın zaferi olarak anılır, Feride mendille tersine çevirir (c7) */
          { eger: (S) => kapi(S) === 'kenan' && b(S).p15_kenan_yol === 'gizli', ise: [
            ['calibe', 'Avlu kapısına gece kilit vurdurdum. Araban döndü mü?', 'sinsi'],
            { eger: (S) => b(S).p16_kilit === 'isaret', ise: [
              ['f', 'Döndü. Nereye döneceğini ona ben söyledim.', 'tebessum'],
            ], degilse: [
              ['f', 'Döndü. Mendilinizi de mandalda unutmuşsunuz.', 'tebessum'],
            ] },
          ] },
          /* Remzi kapısında evet dün verildi: pazarlık evetin geri alınmaması üstünedir (Tur 2 B16-5) */
          { eger: (S) => kapi(S) === 'remzi', ise: [
            ['calibe', 'Üç talip, bir kız. Sen en akıllısını seçtin: Remzi.', 'sinsi'],
            ['calibe', 'Evetinden dönme. Kenan\'ın adı da, Süha\'nın sırrı da bu odada kalır.', 'soguk'],
          ], degilse: [
            ['calibe', 'Üç talip, bir kız. Hangisine evet diyeceğini bu akşam ben söyleyeceğim.', 'sinsi'],
            ['calibe', 'Remzi\'ye evet de. Kenan\'ın adı da, Süha\'nın sırrı da bu odada kalır.', 'soguk'],
          ] },
          /* Diyalog T1 (b16 #8, D4): yüksek sesle söylenecek cümle (babanın önünde) burada önden harcanmaz; "pazarlık" Süha'nın */
          ['ic', 'Evetim onun sırrına kilit olacakmış.', 'ofkeli'],
          /* Keşif (isteğe bağlı) */
          { kesif: { x: 62, y: 44, w: 14, h: 18, ad: 'Sehpadaki fincanlar', adimlar: [
            'Sehpada iki fincan, biri ters çevrilmiş.',
              { eger: (S) => bilir(S, FINCAN), ise: [
              ['ic', 'Yine iki fincan. Bu odada hep iki kişi var.', 'tebessum'],
            ] },
            { bayrak: { p16_k_fincan: true } },
          ] } },
          /* İlk söz: elde olan koz (Bin liralık mektup, eşik/Perihan ile Süha, iki fincan, aynadaki tarih).
             B1: kozlu söz kozsuz kıza kilitli görünür; söylenen koz tükenir. B5: fincan keşfi 'bak'ı açar.
             B6: vakar ≥ 21 "ayakta kal" cesaretini açar */
          { soru: 'Perihan Hanım yelpazesini açtı. İlk sözüm:', secim: [
            { m: '“İmla dersi verir misiniz? Bin lira, sekiz banka.”', kosul: (S) => bilir(S, MEKTUP), kozGerek: MEKTUP, etki: { calibe_suphe: 2 }, bayrak: { p16_b1: 'mektup' }, iz: 'Bin liralık mektubu Perihan\'ın yüzüne söyledin. Artık sır değil.', adimlar: [
              /* 1. bölümün işareti: Perihan'ın kızgınlığı yelpazede görünür */
              ['an', 'Perihan Hanım\'ın yelpazesi durdu. Feride bu işareti düğün gününden beri bilirdi.'],
              { goster: ['calibe', 'saskin'] },
              ['calibe', 'O kâğıt yandı. Yanan kâğıt konuşmaz.', 'ofkeli'],
              ['f', 'Kâğıt yandı hanım. Yazdıran el yanmadı.', 'kararli'],
              kozHarca(MEKTUP),
            ] },
            { m: '“Bu odanın eşiğinde Süha Bey\'in eli belinizdeydi.”', kosul: (S) => bilir(S, ESIK), kozGerek: ESIK, kilitGoster: () => false, etki: { calibe_suphe: 2 }, bayrak: { p16_b1: 'esik' }, iz: 'Perihan\'a eşikte gördüğünü söyledin. Bildiğini artık o da biliyor.', adimlar: [
              ['calibe', 'Süt kardeşime yaslandım. Bunu baban da bilir.', 'soguk'],
              /* Diyalog T1 (b16 #10): "süt kardeş" Perihan'ın örtüsüdür (A1); Feride onu kabul etmez */
              ['f', 'Süt kardeşiniz olduğunu ilk sizden duyuyorum. Babama gördüğümü söyleyeceğim.', 'kararli'], // T30 (D16-2)
              kozHarca(ESIK),
            ] },
            { m: '“Nabi Bey, Süha Bey’in eskiden size talip olduğunu söyledi.”', kosul: (S) => bilir(S, GECMIS), kozGerek: GECMIS, kilitGoster: () => false, etki: { calibe_suphe: 1 }, bayrak: { p16_b1: 'gecmis' }, iz: 'Nabi Bey’den duyduğun eski talipliği Perihan’a sordun.', adimlar: [
              ['calibe', 'Kardeşim kadehi doldurunca düğünümü benden iyi hatırlar, kızım.', 'soguk'],
              kozHarca(GECMIS),
            ] },
            { m: '“Başınız ağrıdığı akşam sehpanızda iki fincan vardı. İkincisi kimindi?”', kosul: (S) => bilir(S, FINCAN), kozGerek: FINCAN, etki: { calibe_suphe: 1 }, bayrak: { p16_b1: 'fincan' }, iz: 'İki fincanı Perihan\'ın önüne yeniden koydun.', adimlar: [
              ['calibe', 'Hekime kahve ikram etmek suç mu oldu?', 'soguk'],
              { eger: fincanKabul, ise: [
                ['f', 'Babamın önünde de böyle söylemiştiniz. Başınız ağrırken, kapı sürgülüyken.', 'kararli'],
              ], degilse: [
                ['f', 'Başınız ağrırken mi? Kapı sürgülüyken mi?', 'ofkeli'],
              ] },
              kozHarca(FINCAN),
            ] },
            /* B5: keşfe bakan, eski kozu olmasa da sehpadaki fincanı görür (güç +1) */
            { m: '“Sehpanızda iki fincan var, biri ters. Kimi beklediniz?”', kosul: (S) => !bilir(S, FINCAN) && b(S).p16_k_fincan === true, etki: { calibe_suphe: 1 }, bayrak: { p16_b1: 'bak' }, iz: 'Sehpaya bakmak işe yaradı: Perihan\'ı kendi fincanıyla yokladın.', adimlar: [
              ['calibe', 'Fincan saymayı hizmetçilerden mi öğrendin?', 'soguk'],
              ['f', 'Sizden. Bu odada her şey iki kişilik.', 'tebessum'],
            ] },
            /* B6: vakarla gelen cesaret; Perihan'ın "otur"una ayakta cevap */
            { m: 'Oturma. Ayakta kal: “Bu odada benim adıma pazarlık yok.”', kosul: cesur, etki: { vakar: 1, calibe_suphe: 1 }, bayrak: { p16_b1: 'cesaret' }, iz: 'Vakarın seni ayakta tuttu. Perihan başını kaldırıp sana denk baktı.', adimlar: [
              ['an', 'Feride oturmadı. Perihan Hanım başını kaldırdı; ona ancak şimdi denk bakıyordu.'],
              ['calibe', 'Ayakta durmayı annenden öğrenmişsin. O da çok durmadı.', 'soguk'],
            ] },
            { m: '“Nikâh günümü aynanıza yazmışsınız. Benden önce.”', kosul: (S) => b(S).p16_v_ayna === true, etki: { calibe_suphe: 1 }, bayrak: { p16_b1: 'ayna' }, iz: 'Perihan aynasına dokunduğunu öğrendi.', adimlar: [
              { goster: ['calibe', 'ofkeli'] },
              ['calibe', 'Aynama mı baktın? Önce kendi yüzüne bakmayı öğren.', 'ofkeli'],
            ] },
            { m: '“Babamın bilmediği bir şeyi biliyorum.”', bayrak: { p16_b1: 'blof' }, adimlar: [
              /* Diyalog T1 (b16 #11): belirsiz "saymak" çıktı; bölümün tek "X yapan kız" atasözü bu (D4) */
              ['calibe', 'Bilen kız söyler. Sen ancak yokluyorsun.', 'sinsi'],
            ] },
            { m: 'Otur. Önce o konuşsun, açığını sen bul.', bayrak: { p16_b1: 'sus' }, adimlar: [
              /* Ses A3: "susan kız" kalıbı yayılmaz; tatlı zehir görücüye bağlanır */
              ['calibe', 'Ne güzel oturuyorsun. Remzi\'nin annesi de seni böyle beğenmişti.', 'sinsi'],
            ] },
          ] },
          /* Sabah uyarılan kadının ilk cevabı yanlış olur */
          { eger: (S) => ilkKoz(S) && b(S).p16_not === 'yaz', ise: [
            ['ic', 'Yelpazesi hâlâ titriyor.', 'kararli'],
          ] },
          /* Perihan'ın elindeki ip: yola göre */
          { eger: muk, ise: [
            { eger: (S) => b(S).p14_mektup === 'inandi' || b(S).p12_iftira === 'tuttu', ise: [
              ['calibe', 'Baban Kenan\'ın kaçış mektubunu okudu. Yalancı kim, sence?', 'soguk'],
            ], degilse: [
              ['calibe', 'Kenan\'ın adı bir kez kirlendi. Temizlemeye ömrün yetmez.', 'soguk'],
            ] },
          ], degilse: [
            { eger: dugmeVar, ise: [
              /* Diyalog T1 (b16 #13): bu ikindi kutudan alındıysa ya da boşluğa makara konduysa Perihan eksiği bilmez
                 (makaranın amacı boşa düşmez; iç sesle ironi). Dünden beri boş duran kutuyu ise görmüş olabilir */
              { eger: (S) => b(S).p16_v_dugme === true, ise: [
                ['calibe', 'Süha\'nın ipi bende. Bir düğme, bir çekmece: hekimin yeri hapistir.', 'soguk'],
              ], degilse: [
                ['calibe', 'Düğmeyi aldın diye ip koptu mu sandın? Hekimin yeri hapistir.', 'soguk'],
              ] },
              ['ic', 'Düğme benim koynumda. O ip artık onun elinde değil.', 'kararli'],
            ], degilse: [
              ['calibe', 'Süha\'nın ipi bende. Bir düğme, bir çekmece: hekimin yeri hapistir.', 'soguk'],
            ] },
          ] },
          { eger: (S) => b(S).p16_munevver === 'araba', ise: [
            ['calibe', 'Leyla öğlen geldi. Ne düzen kuruyorsunuz?', 'soguk'],
          ] },
          { eger: (S) => kapi(S) === 'remzi', ise: [
            /* "Fiyatlar" esprisi Remzi'nin (nikâhta); Perihan'ınki kızın kendisini kaleme koyar */
            ['calibe', 'Remzi\'nin annesi listesini yolladı. Adın hangi kalemde, kızım?', 'soguk'],
          ] },
          /* Feride'nin iki hamlesi: hazırladığı tanık ve kanıt */
          { soru: 'Perihan Hanım gülümsüyor. Elimde ne var?', secim: hamleler('p16_b2') },
          /* T28b (GPT D16-1): ikinci tur sırayla koz basmak değil; Perihan'ın son cevabına karşılık (ara cevap, iç ses) */
          { eger: (S) => b(S).p16_b2 === 'dugme', ise: [
            ['ic', 'Bana hırsız dedi. Babam bunu duymalı.', 'ofkeli'],
          ], degilse: [{ eger: (S) => b(S).p16_b2 === 'madam', ise: [
            ['ic', 'Madam\'ı maaşıyla susturmaya kalktı. Şimdi sözü kim alacak?', 'ofkeli'],
          ], degilse: [{ eger: (S) => b(S).p16_b2 === 'hatice', ise: [
            ['ic', '“Kim inanır” diyor. İkinci bir tanık bulmazsam kimse inanmayacak.', 'endiseli'],
          ] }] }] },
          { soru: function (S) {
            return { hatice: 'Hatice’yi Nabi Bey’le suçladı. Sözüne hangi kanıtla destek vereceğim?', dugme: 'Düğmeyi aldığım için bana hırsız dedi. Ona nasıl cevap vereceğim?', madam: 'Madam’ı maaşıyla tehdit etti. Yanında nasıl duracağım?', kanit: 'Mektubu kimin yazdığını soruyor. Hangi tanığı göstereceğim?', kayit: 'Süha Bey’in sözünü de küçümsedi. Kime dinleteceğim?', suha: 'Süha Bey konuştu. Şimdi babama neyi göstereceğim?' }[b(S).p16_b2] || 'Sözümü geri çevirdi. Şimdi hangi kanıtla karşılık vereceğim?';
          }, secim: hamleler('p16_b3') },
          /* Babam: kapıya çağrıldıysa (kendisi, Madam'ın haberi ya da öğlen sözü) baştan dinlemiştir */
          /* T33 (b13_16 B16 SÜRÜK 10'a 2): babanın gelişi önce kulağa gelir */
          { efekt: 'adim' },
          { eger: (S) => b(S).p16_b2 !== 'kapi' && b(S).p16_b3 !== 'kapi', ise: [
            { eger: babaGelir, ise: [
              ['an', 'Kapı aralandı. Sait Efendi eşikteydi, ne kadar duyduysa yüzüne yazılmıştı.'],
            ], degilse: [{ eger: (S) => sessizOda(S) || b(S).p16_b2 === 'yeter' || b(S).p16_b3 === 'yeter', ise: [
              /* Sessiz odada ses taşmaz: baba kendi saatiyle gelir */
              ['an', 'Sarı odadan ses taşmadı. Sait Efendi her akşamki saatinde merdiveni çıktı ve kapıyı kendisi araladı.'],
            ], degilse: [{ eger: itibarIyi, ise: [
              /* B6: itibar ≥ 55: babayı komşu hanımlar çağırır (güç +1) */
              ['an', 'Sesler sofaya taştı. Komşu hanımlar Sait Efendi\'yi çağırttı, kızın adı onlarca temizdi.'],
            ], degilse: [
              ['an', 'Sesler sofaya taştı. Sait Efendi merdiveni yıllardır çıkmadığı bir hızla çıktı.'],
            ] }] }] },
          ], degilse: [
            /* Kapı açıldı ama baba çağrılmamıştı: "selamlıkta uyur" denen Sait anlatıcısız belirmesin (Tur 2 B16-6) */
            { eger: (S) => !babaGelir(S), ise: [
              ['an', 'Sesler açık kapıdan sofaya taştı. Selamlıkta uyuduğu sanılan Sait Efendi merdiveni bir solukta çıktı.'],
            ] },
          ] },
          { goster: ['sai', 'ciddi'] },
          { eger: babaSorar, ise: [
            ['sai', 'Önce sen söyle kızım. Söz vermiştim.', 'mahzun'],
            ['f', 'Bu odada dokuz yıldır benim yerime karar veriliyor babacığım. Bu akşam bitti.', 'kararli'],
          ] },
          /* 15. bölüm: babanın dünkü tavrı */
          { eger: (S) => b(S).p15_baba === 'karsi', ise: [
            ['ic', 'Babam dün bana karşıydı. Bu akşam yüzü okunmuyor.', 'endiseli'],
          ] },
          { eger: guclu, ise: [
            { bayrak: { p16_baba: 'dondu' } },
            /* T28 (b13_16 SES): sezonun hüküm anı kendi parçasıyla (hukum.mp3 üretimde; yedeği doruk) */
            { muzik: 'hukum' },
            ['calibe', 'Efendi! Bir kızın masalına mı inanacaksınız?', 'ofkeli'],
            /* S3 (c12): dönüşün tetiği Feride'nin sesli sözü; babanın hükmü ona cevap.
               Diyalog T1 (b16 #9): kapıda olmayan babaya "Duydunuz" denmez */
            { eger: babaGelir, ise: [
              ['sai', 'Masal değil hanım. “Süha\'nın sırrı bu odada kalır” dedin, kapıdaydım.', 'ciddi'],
              ['f', 'Duydunuz babacığım. Kendi sırrını benim nikâhımla örtecekti.', 'ofkeli'],
            ], degilse: [
              ['sai', 'Bu kadarı masal olmaz hanım.', 'ofkeli'],
              ['f', 'Ben duydum babacığım: kendi sırrını benim nikâhımla örtecekti.', 'ofkeli'],
            ] },
            ['sai', 'Kızımın kararını bu evde artık sen vermeyeceksin.', 'ciddi'],
            /* Ses (b) / 10'a: yenilgi satırı tatlı-zehirli bir son darbeyle biter */
            ['calibe', 'Dokuz yıl bu kıza analık ettim efendi. Benden iyi öğrenmiş.', 'soguk'],
          ], degilse: [
            { bayrak: { p16_baba: 'perihan' } },
            ['an', 'Perihan Hanım ağladı.'],
            { goster: ['calibe', 'incinmis'] },
            /* Doğrulama v65: susan kıza "sorguladı" denmez; şikâyet onun susuşuna döner */
            { eger: sessizOda, ise: [
              ['calibe', 'Efendi, kızın bir şey demedi, ama susuşu bile beni suçladı.', 'incinmis'],
            ], degilse: [
              ['calibe', 'Efendi, kızın beni bu odada hırsız gibi sorguladı.', 'incinmis'],
            ] },
            /* B6: babanın güveni ≥ 60: hüküm yine onun, ama kızına güvendiğini söyler (rızaya ikinci yol) */
            { eger: babaGuvenir, ise: [
              ['sai', 'Kızım, odana. Sana güvenirim ama kararı ben veririm.', 'mahzun'],
            ], degilse: [
              ['sai', 'Kızım, odana. Kararı ben veririm.', 'ciddi'],
            ] },
          ] },
          { soru: 'Perihan Hanım\'ın yüzü bana dönük. Son sözüm:', secim: [
            /* Sezon merceği: "hiçbir şeyim" çıkışı 13. bölümde kaldı; burada annenin yeri ve Süha–Behiye "ölüden af" yankısı (3. bölüm) */
            { m: '“Annemin yerini dokuz yılda alamadınız. Bundan sonra da alamazsınız.”', etki: { vakar: 1, calibe_suphe: 1 }, bayrak: { p16_son_soz: 'hicbir' }, adimlar: [
              ['calibe', 'Ölüyle yarışmam kızım. Ölüler affeder, ben etmem.', 'ofkeli'],
            ] },
            /* Diyalog T1 (b16 #17): güçlü dalda Perihan ağlamaz; alay iki dala da uyar (seçenek koşulu değişmedi) */
            { m: 'Dokuz yıldır sözünüz dinlendi Perihan Hanım. Bu akşam benimkini de duydular.', etki: { calibe_suphe: 2 }, bayrak: { p16_son_soz: 'alay' }, adimlar: [
              ['calibe', 'Dilin annenin dilinden sivri.', 'ofkeli'],
            ] },
            { m: 'Sus. Babanın elini öp, kimin yanında durduğunu Perihan Hanım görsün.', etki: { baba_guven: 1 }, bayrak: { p16_son_soz: 'el' }, adimlar: [
            ] },
          ] },
          { gizle: 'calibe' }, { gizle: 'sai' }, { muzik: null },
          /* "Onun gözünden" ara sayfada (rehber §2): sırrı çözmez, sonucu söylemez */
          { ara: { yer: 'Onun gözünden · Perihan Hanım', satirlar: [
            (S) => (guclu(S)
              ? 'Perihan Hanım aynanın örtüsünü kaldırdı. Dokuz yıldır konağın kararı ondaydı, kızı bunun için affetmeyecekti.'
              : 'Perihan Hanım gözyaşını sildi. Kız bu kez kazanmamıştı, ama artık ondan sakınmak gerekecekti.'),
            /* T29 (b13_16 B16 OYNANIŞ-2): gizli güç (guc) bir cümleyle görünür; Remzi gecesine "neden"siz düşülmez */
            (S) => (guclu(S)
              ? 'Sait Efendi o akşam kızını dinlemişti.'
              : 'Kızın getirdikleri Sait Efendi\'yi döndürmeye yetmemişti, gözyaşı yetmişti.'),
          ] } },
          { gorev: 2 },
          /* Sarı odadan sonra yola göre yeni yer: ara sayfa (çıplak mekân kesmesi yok) */
          { eger: (S) => yol(S) === 'suha', ise: [
            /* Sarı odanın beden artçısı her yolda (Tur 2 B16 b2) */
            { ara: { mekan: 'selamlik_sofa', yer: 'Selamlık · yatsı', satirlar: [
              'Sarı odadan çıkınca Feride avucunu açtı. Tırnaklarının izi hâlâ oradaydı.',
              'Sait Efendi, kızının talibiyle kapısı açık sofada konuşmasına izin verdi.',
              'Feride selamlığa inerken şartını içinden bir kez daha söyledi. Bu gece ya yerine gelecekti ya hiç.',
            ] } },
          ], degilse: [
            { eger: (S) => yol(S) === 'remzi', ise: [
              { ara: { mekan: 'fazila_oda', yer: 'Feride\'nin odası · yatsı', satirlar: [
                'Feride sarı odadan çıkıp kendi odasına çekildi.',
              ] } },
            ], degilse: [
              { ara: { mekan: 'buyuk_salon', yer: 'Aynı gece · büyük salon', satirlar: [
                'Sarı odanın kapısı arkasından kapandığında Feride bir süre sofada durdu. Elleri ancak merdivenin yarısında titredi.',
                /* "Bir yıl önce söz…" bilgisini Kenan sahnesinin ilk satırı verir; burada tekrarlanmaz */
                'O gece büyük salona çağrılmayı beklemeden indi.',
              ] } },
            ] },
          ] },
        ],
      },

      /* ---------------- 3a. Kenan kapısı: büyük salonda, kapısız ilk buluşma (ailelerin önünde, saklanmadan); kavuşma ya da umutlu ayrılık ---------------- */
      {
        id: 'p16_kenan', mekan: 'buyuk_salon', tetik: 'giris', kosul: (S) => S.gorev === 2 && yol(S) === 'kenan', sahne: [],
        adimlar: [
          { muzik: 'romantik' },
          /* Feride'nin dış olay satırı anlatıcıya çevrildi; kişi girişi goster'den önce */
          ['an', 'Sait Efendi salonun kapısını o gece kapattırmadı. Söz bir yıl önce kapalı kapılar ardında kesilmişti.'],
          ['an', 'Münevver Hanım oğlunu yanına almıştı. Kenan son adımını ağır attı.'],
          { goster: ['munevver', 'gulumser'] },
          { goster: ['mukaddem', 'ana'] },
          /* Sezon sıfırlanmaz (A5): son görüşme 10. bölümün iskelesiydi */
          'Kenan. Bu kez önünde ne kafes var ne kalkacak bir vapur.',
          /* 13. bölüm: nişan resmi */
          { eger: (S) => b(S).p13_resim === 'yak', ise: [
            ['ic', 'Resmini yakmıştım. Kenan daha solgun şimdi.', 'utanmis'],
          ], degilse: [{ eger: (S) => b(S).p13_resim === 'sakla', ise: [
            /* 13. bölümde sandığa ya da döşeme tahtasının altına girmiş olabilir: yeri söylenmez */
            ['ic', 'Resmi sakladığım yerde duruyor. Aslı ondan solgun.', 'utanmis'],
          ], degilse: [
            ['ic', 'Resmini emanete vermiştim. Aslı karşımda.', 'utanmis'],
          ] }] },
          /* 15. bölüm: seçilen kapı için tamamlanan hazırlık */
          { eger: (S) => hazir(S) >= 2, ise: [
            /* Diyalog T1 (b16 #19–21): hazır ≥ 2'de araç eksik olabilir; hazır 0'da "yarım" doğru değil */
            /* T32: iç seste oyun sözcüğü ("hazırlık") yerine elde tutulan */
            ['ic', 'Dün topladıklarım yanımda. Bu akşam eli boş değilim.', 'kararli'],
          ], degilse: [
            ['ic', 'Dün topladıklarım eksik kaldı. Açığı bu akşam sözümle kapatırım.', 'endiseli'],
          ] },
          /* T32 (b13_16 B16 DİYALOG-9): Kenan'ın "kapı ardına kadar açık" imgesiyle art arda gelmez */
          ['munevver', 'Şimdiye kadar sözünüzü hep başkaları taşıdı. Bu gece konuşun.', 'gulumser'],
          /* T28 (b13_16 ana bulgu 2): 15. bölümün avlu kapısındaki dönüşü (fenere "buradayım" ya da "kendin in") okunur;
             romantik basamak sıfırlanmaz. Hitap o gece "siz"di; "sen" ilk sözden sonra */
          { eger: (S) => b(S).p16_cagir === true, ise: [
            /* T29: Feride'nin çağrısı karşılanır */
            /* T32 (b13_16 B16 GÖRSEL): Kenan'ın kavuşmadaki satırları tek gülen yüzle akmasın (duygulu / utangaç) */
            ['mukaddem', 'Çağırdınız, geldim. Dün gece kapının aralığından baktım; bu gece kapı ardına kadar açık.', 'gulumser'],
          ], degilse: [{ eger: (S) => b(S).p15_v_fener === 'in' || b(S).p15_v_fener === 'bir', ise: [
            ['mukaddem', 'Dün gece sizi kapının aralığından gördüm. Bu gece kapı ardına kadar açık.', 'kararli'],
          ], degilse: [{ eger: (S) => b(S).p10_son === 'ayri', ise: [
            /* T29b (10'un sözsüz vedası, p10_son 'ayri'): iskelede söz ve bekleme istenmedi; Kenan beklediğini söylemez */
            ['mukaddem', 'İskelede söz istemediniz, ben de vermedim. İlk sözü bu gece size bırakıyorum.', 'kararli'],
          ], degilse: [
            /* T29 (b13_16 B16 DİYALOG-1): "sen"e geçiş kavuşmada (duvak); burada "siz" */
            ['mukaddem', 'İskeleden beri bu geceyi bekledim. İlk sözü yine de size bırakıyorum.', 'mahzun'],
          ] }] }] },
          { soru: 'Kenan bekliyor. İlk söz benim.', secim: [
            { m: '“Bu senindir.”', etki: { mukaddem: 5 }, bayrak: { p16_ilk: 'kitap' }, adimlar: [
              'Cebinden eski bir masal kitabı çıkardı. İlk sayfada dokuz yaşımın yazısı.',
              /* T29 (b13_16 B16 DİYALOG-1): hitap duvağa kadar "siz" */
              ['mukaddem', 'Hâlâ benim. Siz de hâlâ…', 'gulumser'],
            ] },
            /* B3: sitem yerini bulur ama Kenan'ı incitir (gönül −3) */
            { m: '“Geç kaldınız Kenan. Selanik uzakmış.”', etki: { mukaddem: -3, vakar: 1 }, bayrak: { p16_ilk: 'sitem' }, iz: 'Sitemin Kenan\'a dokundu. Özrünü yüzüne söyledi.', adimlar: [
              ['mukaddem', 'Geç kaldım. Bir daha kalmam, yemin etmem ama söz veririm.', 'mahzun'],
            ] },
            { m: 'Gülümse. İlk sözü gözlerinle söyle.', etki: { mukaddem: 4 }, bayrak: { p16_ilk: 'tebessum' }, adimlar: [
              /* T28 (b13_16 DİYALOG): klişe yerine Kenan'ın nesne dili (alaturka saat kurulur); 10. bölümde saati
                 Feride'ye kalan Kenan'da saat durmuştur, kavuşmada Feride kurar */
              { eger: (S) => b(S).p10_veda === 'saat', ise: [
                'Gülümsedi. Cebindeki durmuş saate dokundu, kurmadı.',
              ], degilse: [
                'Gülümsedi. Cebinden saatini çıkardı, kurdu, saat yeniden işledi.',
              ] },
            ] },
          ] },
          /* 11. bölüm: Selanik telgrafına verilen cevap */
          { eger: (S) => b(S).p11_telgraf === 'bekle', ise: [
            ['mukaddem', 'Telgrafınız cebimde, tek kelime: “Bekliyorum.” Ben de bekledim.', 'mahzun'],
            /* T32 (b13_16 B16 SÜRÜK 10'a): Kenan'ın bekleyiş satırları arasında Feride'nin bir hamlesi */
            ['f', 'O kelimeyi titreyen bir elle yazmıştım. Bu gece yüzünüze söylüyorum.', 'kararli'],
          ], degilse: [{ eger: (S) => b(S).p11_telgraf === 'sefik', ise: [
            ['mukaddem', 'Şefik\'in adıyla yazdınız: “Ablam ezberledi.” Ben de ezberledim.', 'notr'],
            ['f', 'Şefik ezberini size de okusun. Bu kez kapının içinde.', 'tebessum'],
          ] }] },
          /* GPT T24b 16-9: sahte mektubun akıbeti Kenan sonunda da belli olur. Perihan sarı odada Kenan'ın adını pazarlığa
             koydu (her Kenan kapısı yolunda); yazan el bu sonda adlandırılmaz, yazdıran adlandırılır */
          /* T28 (b13_16 ana bulgu 2): 14. bölümün şafak mektubu (Leyla'ya) Kenan'a ulaşmıştı (15:380 kartı) */
          { eger: (S) => b(S).p14_kenan === 'yaz', ise: [
            ['mukaddem', 'Adıma yazılan mektubu sizden duydum. Yazanı buldunuz mu?', 'mahzun'],
          ], degilse: [
            ['mukaddem', 'Adıma yazılmış bir kaçış mektubu varmış. Kim yazdı?', 'mahzun'],
          ] },
          { eger: (S) => b(S).p16_baba === 'dondu', ise: [
            /* T27 (DİYALOG): "pazarlık" Süha'nın kalıbı; satır iki cümle, kavuşma gecesinde öfkesiz */
            ['f', 'Yazdıranı biliyorum: Perihan Hanım. Babam artık ona inanmıyor.', 'kararli'],
          ], degilse: [
            ['f', 'Yazdıranı biliyorum: Perihan Hanım. Adınızı bu akşam sarı odada ortaya koydu.', 'mahzun'],
          ] },
          /* Nikâhtan önce ilişkinin şartını Feride koyar (GPT Tur 23 kenan 10'a 3) */
          ['f', 'Bir şartım var Kenan: beni korumak için yalan söyleme. Doğruyu birlikte söyleriz.', 'kararli'],
          ['mukaddem', 'Söz. Bundan sonra doğruyu yan yana söyleriz.', 'gulumser'],
          /* Kavuşmanın kapıları: babanın rızası ya da Münevver'in arabası */
          { eger: babaRiza, ise: [
            { goster: ['sai', 'mahzun'] },
            /* B6: babanın güveni ≥ 60 rızaya giden ikinci yol; baba bunu kendi ağzıyla söyler */
            { eger: babaGuvenir, ise: [
              ['sai', 'Seni dinlemeden hükmettim kızım. Bu gece kararını dinledim; rızam var.', 'mahzun'],
            ] },
            /* Diyalog T1 (D7, b16 #30): 12 ve 15'te nişan bozuldu; söz burada yeniden bağlanır */
            ['sai', 'Münevver Hanım, bozduğum sözü geri bağlıyorum. Kızımı oğlunuza bu kez kendi ağzımla veriyorum.', 'mahzun'],
            /* 14. bölümün eli: rıza, şiddetin affı sayılmaz (GPT Tur 23 kenan/okur) */
            { eger: (S) => b(S).p14_dayak === true, ise: [
              ['an', 'Sait Efendi eldivenini çıkardı. Feride kolunu saklamadı, babasının elini de aramadı.'],
            ] },
          ], degilse: [
            { goster: ['sai', 'ciddi'] },
            /* T29 (b13_16 B16 OYNANIŞ-3): gizli eşik görünür; baba eksik kalemi söyler (hazırlık yok / gözyaşı ağır bastı) */
            { eger: (S) => hazir(S) >= 1 || b(S).p14_mektup === 'kanit', ise: [
              ['sai', 'Delilini gördüm ama Perihan\'ın gözyaşını da. Sözü yeniden bağlarım, bu yıl nikâh olmaz.', 'mahzun'],
            ], degilse: [
              ['sai', 'Elinde delil yokken bu yıl nikâh olmaz. Sözü yeniden bağlarım, o kadar.', 'ciddi'],
            ] },
            { eger: gizliAcik, ise: [
              ['an', 'Münevver Hanım Feride\'nin kulağına eğildi. Arabası kapıdaydı, imam Leyla\'ların konağında bekliyordu.'],
            ] },
          ] },
          /* T27 (SÜRÜK-2): doruk seçiminde süre ve bedel */
          { soru: 'Babam sözünü bağladı, Kenan bekliyor. Son kararım ne?', secim: [
            { m: '“Evetimi geri alıyorum; kimseyle söz bağlamıyorum.”', bayrak: { p16_bag: 'yok', p16_son: 'son_hayir', p16_hayir: 'bagimsiz', p16_secim: 'yalniz' }, iz: 'Kenan’a verdiğin eveti geri aldın; nikâh kıyılmadı.', adimlar: [
              ['f', 'Kenan, evetimi geri alıyorum. Kimseyle söz bağlamayacağım.', 'kararli'],
              ['mukaddem', 'Duydum. Sizi bir söze bağlamayacağım.', 'mahzun'],
            ] },
            { m: '“Babamın rızasıyla. Yarın.”', kosul: babaRiza, bayrak: { p16_secim: 'nikah', p16_son: 'son_kavusma' }, iz: 'Babanın rızasıyla nikâh.', adimlar: [
              { gizle: 'sai' }, { gizle: 'munevver' },
              /* Zaman atlaması ara sayfada; ara kişileri temizler, Kenan yeniden gösterilir */
              { ara: { yer: 'Ertesi akşam · büyük salon', satirlar: [
                'Ertesi akşam nikâh için toplandılar.',
                (S) => (b(S).p14_sefik === 'yanimda'
                  ? 'Şefik selamlığın kapısında bekledi, o gece onu oradan kimse kaldıramadı.'
                  : 'Şefik\'e mektebine bir tezkere yollandı, ablasının nikâhını o da duymalıydı.'),
                /* Yenilenlerin akıbeti (Tur 2 yay a2, a4); T27 (ANLATI-2): sahnedeki dört 'an' azaldı */
                /* T29 (b13_16 B16 ANLATI-3): Süha'nın çıkışı söylenir */
                'Perihan Hanım nikâha inmedi.',
              ] } },
              /* T27 (ANLATI-1): sonun ana eylemi sahnede ve Feride'nin ağzından; ara sayfa yalnız takvim */
              /* T28 (b13_16 DİYALOG): vekâleti gelin verir, baba alır */
              ['an', 'İmam izni üçüncü kez sordu. Sait Efendi vekâleti almadan önce kızına döndü.'],
              { goster: ['sai', 'gulumser'] },
              ['sai', 'Sen söyle kızım.', 'gulumser'],
              { soru: 'İmam iznimi bekliyor.', secim: [
                { m: '“Evet, kendi isteğimle.”', adimlar: [
                  ['f', 'Evet babacığım, kendi isteğimle.', 'gulumseyen'],
                  ['an', 'Feride vekâletini verdi; imam nikâhı kıydı.'],
                ] },
                { m: '“Evetimi geri alıyorum; kimseyle söz bağlamıyorum.”', bayrak: { p16_bag: 'yok', p16_son: 'son_hayir', p16_hayir: 'bagimsiz', p16_secim: 'yalniz' }, iz: 'Kenan’a verdiğin eveti geri aldın; nikâh kıyılmadı.', adimlar: [
              ['f', 'Kenan, evetimi geri alıyorum. Kimseyle söz bağlamayacağım.', 'kararli'],
              ['mukaddem', 'Duydum. Sizi bir söze bağlamayacağım.', 'mahzun'],
            ] },
              ] },
              { eger: (S) => b(S).p16_hayir !== 'bagimsiz', ise: [
              { gizle: 'sai' },
              /* Destekçilere verilen sözler bu sonda da kapanır (GPT Tur 23 okur 13) */
              { eger: (S) => b(S).p16_hatice_soz === true, ise: [
                ['an', 'Hatice nikâh sabahı bohçasıyla Münevver Hanım\'ın konağına geçti. Feride sözünü nikâhından önce tutmuştu.'],
              ] },
              { eger: madamKonustu, ise: [
                ['an', 'Perihan Hanım sabah Madam Josephine\'i evden çıkarmıştı. Münevver Hanım onu nikâh sofrasına çağırdı.'],
              ] },
              { efekt: 'kapi_kapa' },
              /* T28 (b13_16 ANLATI): gerdek büyük salonda kurulmaz */
              ['an', 'Gece gelin odasının kapısı bu kez kapandı. Dışarıda bekleyen kimse kalmamıştı.'],
              { goster: ['mukaddem', 'ana'] },
            ].concat(kavusmaSonu()) }] },
            { m: 'Münevver Hanım\'ın arabasına bin.', kosul: (S) => !babaRiza(S) && gizliAcik(S), etki: { baba_guven: -2 }, bayrak: { p16_secim: 'gizli', p16_son: 'son_kavusma' }, iz: 'Babanın haberi olmadan gizli nikâh. Bedeli sabah gelecek.', adimlar: [
              { gizle: 'sai' }, { gizle: 'mukaddem' }, { gizle: 'munevver' },
              { ara: { mekan: 'araba_ici', yer: 'Gece · Münevver Hanım\'ın arabası', satirlar: [
                /* Kararı Münevver'e değil Feride'ye verir (Tur 2 B16-18) */
                'Münevver Hanım elini uzattı. Feride arabanın basamağına kimseye yaslanmadan çıktı.',
              ] } },
              'Perdeler kapalı. Münevver Hanım elimi bırakmadı, ben de çekmedim.',
              /* Gizli nikâhın bedelinin ilk adımı Feride'nin kendi cümlesi (GPT Tur 23 okur, son_kavusma). GPT T24b 16-7:
                 15'te iz bırakmamayı ya da yalnız Şefik'e yazmayı seçmiş olabilir; bu geceki satırın gerekçesi kendi ağzında */
              /* T33 (b13_16 B16 DİYALOG-4): uzun iç ses ikiye bölündü; bırakılan satır kâğıtta */
              ['ic', 'Arabaya kendi isteğimle bindim. Babamın kapısının altına da bir satır bıraktım.', 'kararli'],
              { kart: 'Babama', alt: '“Evet demeye gidiyorum. Sabah kapınızı ben çalarım.”' },
              { ara: { mekan: 'fevkiye_konak', yer: 'Leyla\'ların konağı · gece yarısı', satirlar: [
                /* Leyla'nın B1 tanıtımı tekrar edilmez; duvak burada kurulur (Tur 2 B16-19) */
                'İmam yatsıdan beri bekliyordu. Konağın lambaları söndürülmüş, sofada yalnız bir kandil bırakılmıştı.',
                'Leyla annesinin sandığından bir duvak çıkarmıştı. Tülü eskiydi, kenarı o akşam dikilmişti.',
                /* T30 (A16-1): öte yan sayfasındaki çıkış bu yolda da kurulur */
                'Aynı saatlerde Süha Bey\'in sandığı da konaktan çıkıyordu, kimse ona bakmadı.',
              ] } },
              /* T29 (b13_16 B16 SES 10'a 1): sofadaki tek kandil (anlatılan ışık; sezonda bu yolda tek ışık efekti) */
              { efekt: 'kandil' },
              { goster: ['fevkiye', 'ana'] },
              ['fevkiye', 'Ağlama! …Ben ağlıyorum ama.', 'mahzun'],
              /* Diyalog T1 (b16 #25): tek kadın şahit olmaz; benzetim çapası "Şahidim Leyla oldu" korunur, öbür şahitler eklenir */
              'Leyla yanımdaydı; imam öteki şahitleri de çağırmıştı. Sıram geldi.',
              { soru: 'İmam iznimi bekliyor. Son sözüm ne?', secim: [
                { m: '“Evet, kendi isteğimle.”', adimlar: [
                  ['f', 'Evet, kendi isteğimle.', 'kararli'],
                  ['an', 'İmam Feride’nin rızasını duydu, nikâh kıyıldı.'],
                ] },
                { m: '“Hayır, evetimi geri alıyorum.”', bayrak: { p16_bag: 'yok', p16_son: 'son_hayir', p16_hayir: 'bagimsiz', p16_secim: 'gizli_hayir' }, iz: 'Evetini geri aldın; nikâh kıyılmadı.', adimlar: [
                ['f', 'Kenan, evetimi geri alıyorum. Bu gece nikâh olmayacak.', 'kararli'],
                ['mukaddem', 'Peki. Sözünüzü duydum.', 'mahzun'],
              ] },
              ] },
              { eger: (S) => b(S).p16_hayir !== 'bagimsiz', ise: [
              { gizle: 'fevkiye' },
              { goster: ['mukaddem', 'ana'] },
            ].concat(kavusmaSonu(true)) }] },
            { m: '“Bir yıl bekleyin Kenan. Ben buradan uzakta beklerim.”', /* T30 (D16-1): hitap siz */ bayrak: { p16_secim: 'bekle', p16_son: 'son_umutlu_ayrilik' }, iz: 'Söz yeniden bağlandı. Yol uzadı.', adimlar: [
              ['mukaddem', 'Bir yıl beklerim. Babanızla da her ay konuşurum.', 'mahzun'],
            ] },
            /* T27 (DİYALOG): rıza zaten varken "rızayı sen al" denmez */
            { m: '“Babamın tam rızasını siz alın. Ben her pazartesi yazarım.”', kosul: (S) => !babaRiza(S), bayrak: { p16_secim: 'mektup', p16_son: 'son_umutlu_ayrilik' }, iz: 'Söz yeniden bağlandı. Mektup yolu açık.', adimlar: [
              /* T28 (b13_16 DİYALOG): Beyrut–İstanbul posta vapuru haftalık; vapuru bilen Kenan */
              ['mukaddem', 'Rızayı ben alırım. Siz pazartesi vapuruna verin, ben dönen ilk vapurla yazarım.', 'gulumser'],
            ] },
          ] },
          { eger: (S) => b(S).p16_secim === 'gizli_hayir', ise: [
            { gizle: 'fevkiye' }, { gizle: 'mukaddem' },
            { ara: { mekan: 'buyuk_salon', yer: 'Konağa dönüş · gece', satirlar: [
              'Nikâh kıyılmadı. Münevver Hanım Feride’yi kendi arabasıyla konağa geri götürdü.',
              'Sait Efendi kızını salonda karşıladı. Feride kararını onun yüzüne de söyledi.',
            ] } },
            { goster: ['sai', 'mahzun'] },
            ['f', 'Gizli nikâha da hayır dedim babacığım. Kimseyle söz bağlamayacağım.', 'kararli'],
          ] },
          /* Bekleme yolu: Münevver Hanım'ın Beyrut teklifi */
          { eger: (S) => b(S).p16_hayir === 'bagimsiz', ise: [
            ['an', 'Kenan itiraz etmeden çıktı. Nikâh hazırlığı durduruldu.'],
          ], degilse: [
            ['an', 'Kenan salondan önce çıktı. Beklemeyi kabul eden adam, bir gece daha kalmayı kendine yakıştırmadı.'],
          ] },
          { gizle: 'mukaddem' },
          /* Kenan'ın çıkışının artçısı; Beyrut kararını Feride kendi sözüyle verir (Tur 2 B16-20) */
          ['ic', 'Kapıda durdu; bir şey söyleyecek sandım. Dönmeden çıktı.', 'mahzun'],
          { goster: ['munevver', 'dolu'] },
          ['munevver', 'Öyleyse kışı benimle Beyrut\'ta geçir. Muhterem Efendi\'nin hanesi geniştir, sana da yer var.', 'dolu'],
          { eger: (S) => b(S).p16_hayir === 'bagimsiz', ise: [
            ['sai', 'Kimseye söz vermeyeceğim kızım. Münevver Hanım’ın yanında misafir olarak gidebilirsin.', 'mahzun'],
          ], degilse: [
            ['sai', 'Münevver Hanım\'ın yanında mı? Git kızım, sözüm yerinde.', 'mahzun'],
          ] },
          { eger: (S) => b(S).p16_hayir === 'bagimsiz', ise: [
            { soru: 'Kimseyle söz bağlamadım. Kışı nerede geçireceğim?', secim: [
              { m: 'Münevver Hanım’la Beyrut’a misafir olarak git.', bayrak: { p16_secim: 'yalniz' }, adimlar: [
                ['f', 'Giderim. Misafiriniz olarak; kimsenin gelini olarak değil.', 'kararli'],
              ] },
              { m: 'İstanbul’da kal; kendi işini burada kur.', bayrak: { p16_secim: 'kal' }, adimlar: [
                ['f', 'İstanbul’da kalacağım babacığım. Önce bu evin hesabını kapatacağım.', 'kararli'],
                ['sai', 'Kal kızım. Seni kimseye sözlemem.', 'mahzun'],
              ] },
            ] },
          ], degilse: [
            ['f', 'Giderim babacığım. Bu yolu ben seçiyorum.', 'kararli'],
          ] },
          { gizle: 'sai' }, { gizle: 'munevver' },
          { gorev: 3 },
          { ara: { mekan: 'konak_avlu', yer: 'Avlu kapısı · sabah', satirlar: AVLU_ARA } },
        ],
      },

      /* ---------------- 3b. Kapısız Kenan yolu, güçlü yüzleşme: babamın kararı, Münevver Hanım'ın teklifi ---------------- */
      {
        id: 'p16_bekle', mekan: 'buyuk_salon', tetik: 'giris', kosul: (S) => S.gorev === 2 && yol(S) === 'bekle', sahne: [],
        adimlar: [
          { muzik: 'veda' },
          /* Sahne açılışı anlatıcıda (dış olay Feride'nin ağzından değil) */
          ['an', 'Sait Efendi başköşedeydi. Bu kez Feride oturmadan konuşmadı.'],
          { goster: ['sai', 'mahzun'] },
          ['sai', 'Remzi Bey\'e vermem. Süha Bey\'e de vermem.', 'mahzun'],
          ['sai', 'Kenan\'a da bu yıl veremem. Önce kendi evimin içini temizlerim.', 'pisman'],
          /* 14. bölümün eli bu yolda da görülür; barış sayılmaz (GPT Tur 23 okur 13) */
          { eger: (S) => b(S).p14_dayak === true, ise: [
            ['an', 'Sait Efendi bunu söylerken kızının sargılı koluna baktı. Feride kolunu saklamadı.'],
          ] },
          ['an', 'Münevver Hanım o akşam haber beklemeden gelmişti. Bir yıllık sözün bozulmasına seyirci kalacak kadın değildi.'],
          { goster: ['munevver', 'dolu'] },
          ['munevver', 'Kışı Beyrut\'ta, dostum Muhterem Efendi\'nin hanesinde geçireceğim. Kızımı bana verin.', 'kararli'],
          /* T29c (GPT O16-1/S16-1; P1): kanıtla kazanmak ret hakkını azaltmaz. Yeniden nişan, gitme ve sevgi beyanı ayrı
             kararlar: söz babanın ağzından bağlanmadan önce kız kendisi söyler. "Kimseyle" diyen kız bağımsız hayıra gider
             (p16_son 'son_hayir', p16_hayir 'bagimsiz'); Beyrut'a kendi işi için, kimsenin gelini olmadan */
          { soru: 'Babam söz bağlamak üzere. Bu kez önce ben söyleyeceğim.', secim: [
            { m: '“Kenan\'la sözümü yeniden bağlamak isterim babacığım.”', etki: { mukaddem: 3 }, bayrak: { p16_bag: 'kenan' }, iz: 'Kenan\'la sözü yeniden bağlamayı sen istedin.', adimlar: [
              /* D7: bozulan söz yerinde değildir; baba onu yeniden bağlar */
              ['sai', 'Bozduğum sözü geri bağlarım. Bir yıl, sonra yine konuşuruz.', 'mahzun'],
            ] },
            { m: '“Kimseyle söz bağlamıyorum. Beyrut\'a yalnız kendi işim için giderim.”', etki: { vakar: 1 }, bayrak: { p16_bag: 'yok', p16_son: 'son_hayir', p16_hayir: 'bagimsiz' }, iz: 'Kimseyle söz bağlamadın, baban bu kez senin sözünü dinledi.', adimlar: [
              ['f', 'Perihan Hanım\'ın sözünü dinlemediniz babacığım. Benimkini de dinleyin: kimseyle yeniden söz bağlamıyorum.', 'kararli'],
              ['sai', 'Peki kızım. Bu akşam senin adına bir söz daha vermeyeceğim.', 'mahzun'],
            ] },
          ] },
          ['an', 'Sait Efendi sustu. Kızına soru sormayı bu yaşında öğreniyordu.'],
          ['sai', 'Gitmeden bir isteğin var mı kızım?', 'mahzun'],
          { soru: 'Babam benden bir istek bekliyor. Bunu hiç yapmamıştı.', secim: [
            { m: '“Şefik\'i Perihan Hanım\'ın eline bırakmayın.”', etki: { sefik: 1, baba_guven: 1 }, bayrak: { p16_istek: 'sefik' }, adimlar: [
              ['sai', 'Bırakmam. Oğlum benim elimde.', 'ciddi'],
            ] },
            { m: '“Annemin resmi odamda kalsın. Kimse dokunmasın.”', etki: { vakar: 1 }, bayrak: { p16_istek: 'resim' }, adimlar: [
              ['sai', 'Kalır. Ben de bazen bakarım.', 'mahzun'],
            ] },
            /* GPT T26 (öncelik 8): 14. bölümün eli yalnız geleceğe bırakılmaz; Feride bu gece bir sınır koyar */
            { m: '“Dönünce bu evde bana da Şefik\'e de kimse el kaldırmayacak. Siz de.”', kosul: (S) => b(S).p14_dayak === true, etki: { vakar: 1 }, bayrak: { p16_istek: 'el' }, iz: 'Babandan söz aldın: bu evde sana da Şefik\'e de el kalkmayacak.', adimlar: [
              ['sai', 'Kalkmayacak. Söz kızım, Münevver Hanım da şahit.', 'pisman'],
            ] },
          ] },
          { soru: 'Babam da Münevver Hanım da bana bakıyor.', secim: [
            { m: '“Giderim. Ama kendi kararımla, beni kimse göndermiyor.”', kosul: (S) => b(S).p16_bag !== 'yok', etki: { vakar: 1, munevver: 1 }, bayrak: { p16_secim: 'git', p16_son: 'son_umutlu_ayrilik' }, adimlar: [
              ['munevver', 'Kendi kararınla. Benim güzel kızım.', 'gulumser'],
            ] },
            { m: '“Giderim. Kenan\'a da söyleyin: bekliyorum.”', kosul: (S) => b(S).p16_bag !== 'yok', etki: { munevver: 1 }, bayrak: { p16_secim: 'haber', p16_son: 'son_umutlu_ayrilik' }, adimlar: [
              /* T32 (b13_16 O5): "Söylerim." açılışı */
              ['munevver', 'Haber benden. O zaten bekliyor, bilmiyor musun?', 'gulumser'],
            ] },
            /* T29c (O16-1): söz bağlamayan kız misafir olarak gider; Kenan'a "bekle" otomatik söylenmez */
            { m: '“Giderim. Misafiriniz olarak, kimsenin gelini olarak değil.”', kosul: (S) => b(S).p16_bag === 'yok', etki: { vakar: 1 }, bayrak: { p16_secim: 'yalniz' }, adimlar: [
              ['munevver', 'Misafirim olarak. Annenin dostunun kızı olarak.', 'gulumser'],
            ] },
            { m: '“Gitmem. Bu kışı İstanbul\'da geçireceğim, önce bu evin hesabı kapanacak.”', kosul: (S) => b(S).p16_bag === 'yok', etki: { vakar: 1, baba_guven: 1 }, bayrak: { p16_secim: 'kal' }, adimlar: [
              ['sai', 'Kal. Bu evin hesabını seninle ben kapatırım.', 'mahzun'],
            ] },
          ] },
          { gizle: 'sai' }, { gizle: 'munevver' },
          { gorev: 3 },
          { ara: { mekan: 'konak_avlu', yer: 'Avlu kapısı · sabah', satirlar: AVLU_ARA } },
        ],
      },

      /* ---------------- 4a. Umutlu ayrılık: avlu kapısı, kafesin aralığı, Beyrut'tan cevap ---------------- */
      {
        id: 'p16_ayrilik', mekan: 'konak_avlu', tetik: 'giris', kosul: (S) => S.gorev === 3, sahne: [],
        adimlar: [
          { muzik: 'veda' },
          /* T29c (GPT O16-1): bağımsız hayırda kalan kız arabaya binmez */
          { eger: kalir, ise: [
            'Avlu serin. Münevver Hanım\'ın arabası benim sandığım olmadan yükleniyor.',
          ], degilse: [
            'Avlu serin. Sandığım arabada.',
          ] },
          /* Yol arkadaşları: şahitliğin bedeli, Şefik (kovulan Nimet ve Hatice'nin sözü avlu ara sayfasında) */
          { eger: madamKonustu, ise: [
            { goster: ['josephine', 'mahzun'] },
            ['josephine', 'Perihan Hanım beni evden çıkardı. Ben de size geldim, ma chère.', 'mahzun'],
            { gizle: 'josephine' },
          ] },
          { eger: (S) => b(S).p14_sefik === 'yanimda', ise: [
            { goster: ['sefik', 'aglamakli'] },
            ['sefik', 'Abla, ben de mektebe giderim. Sen de dönersin.', 'aglamakli'],
            { gizle: 'sefik' },
          ], degilse: [
            ['ic', 'Şefik\'e mektebine bir mektup bıraktım. Her satırında “korkma”.', 'mahzun'],
          ] },
          ['an', 'Perihan Hanım pencereden baktı. Elinde mendil vardı, gözü kuruydu.'],
          /* Sürükleyicilik T1 S2/S8: Beyrut telgrafı doruktan ÖNCE, arabaya binmeden (takvim: gece çekilen telin sabah
             gelen cevabı, Tur 2 B16-11); vedadan sonra yalnız artçı ve kart */
          { efekt: 'kagit' },
          ['an', 'Münevver Hanım arabanın basamağında bir telgraf uzattı. Beyrut\'a gece çektiği telin cevabıydı.'],
          { kart: 'Beyrut\'tan bir telgraf', alt: '“Behiye Hanım\'ın kızına kapımız açık. Oğlum Şebib iskelede karşılar. —Muhterem”' },
          { soru: 'Telgraf elimde. İlk satırda annem var.', secim: [
            { m: '“Şebib kim?” diye sor.', bayrak: { p16_sebib: 'sor' }, adimlar: [
              { goster: ['munevver', 'notr'] },
              ['munevver', 'Muhterem Efendi\'nin oğlu. Annen o evi bilirdi; ben bundan fazlasını bilmiyorum.', 'notr'],
              { gizle: 'munevver' },
            ] },
            { m: 'Telgrafı katla. Kim olduğunu kendi gözünle gör.', bayrak: { p16_sebib: 'sorma' }, adimlar: [
              ['ic', 'Sormadım. Kim olduğunu kendi gözümle göreceğim.', 'kararli'],
            ] },
          ] },
          { eger: kalir, ise: [
            'Arabaya binmedim. Harem kafesinin aralığından sokağın başı göründü.',
          ], degilse: [
            'Arabaya bindim. Kafesin aralığından sokağın başı göründü.',
          ] },
          { eger: (S) => kapi(S) === 'kenan', ise: [
            'Kenan orada, fesi elinde. Yaklaşmadı, söz vermişti.',
          ], degilse: [{ eger: bagimsiz, ise: [
            /* T29c (GPT O16-1): söz bağlanmadı; Kenan bunu biliyor */
            'Kenan orada, fesi elinde. Kimseyle söz bağlamadığımı duymuş, yaklaşmadı.',
          ], degilse: [
            /* Dönüşünü Feride 15. bölümde duydu; burada yeni haber gibi söylenmez */
            'Kenan orada, fesi elinde. Sözün yeniden bağlandığını duymuş, yaklaşmadı.',
          ] }] },
          /* 10. bölümün vedası: Kenan'da kalan emanet */
          { eger: (S) => b(S).p10_veda === 'saat', ise: [
            ['ic', 'Elinde durmuş saat. Kurmamış, beni bekliyor.', 'mahzun'],
          ], degilse: [{ eger: (S) => b(S).p10_veda === 'kurdele', ise: [
            ['ic', 'Bileğinde kurdelem. Selanik çözememiş.', 'mahzun'],
          ], degilse: [{ eger: (S) => b(S).p10_veda === 'kozalak', ise: [
            /* 10. bölüm: Kenan'da kalan öbür emanetler de karşılanır (Tur 2 B16-22) */
            ['ic', 'Avucunda Şefik\'in kozalaklarından biri. Gerisi mektup olup gelecek.', 'mahzun'],
          ], degilse: [{ eger: (S) => b(S).p10_veda === 'mendil' && b(S).p10_teslim !== 'vermem', ise: [
            { eger: kalir, ise: [['ic', 'Göğüs cebinde mendilim.', 'mahzun']], degilse: [['ic', 'Göğüs cebinde mendilim. Bu kez kokusu geçmeden giden benim.', 'mahzun']] },
          ] }] }] }] },
          /* T27b (GPT B16-G2): an_ayrilik (madalyon Feride'nin açık avucunda, Kenan sokakta) seçimden ÖNCE açılır:
             madalyonu gönderen kızın nesnesi resimde geri gelmez, toza yazan kız seçmediği bir sunuşu yapmış görünmez */
          /* T29 (b13_16 B16 GÖRSEL-2): metin resme uyar. Resim madalyonu açık avuçta gösterir: seçimden önce Feride onu
             avucuna alır; toza yazan kız da madalyonu tartmıştır, resim seçmediği bir sunuşu yalanlamaz */
          'Annemin madalyonunu avucuma aldım. Kafesin aralığı bir avuç genişliğindeydi.',
          { cizim: 'an_ayrilik' },
          { soru: 'Kafesin aralığından ona bir şey bırakabilirim.', secim: [
            { m: 'Madalyonu uzat: “Annemi sana emanet ediyorum.”', etki: { mukaddem: 5 }, bayrak: { p16_emanet: 'madalyon' }, adimlar: [
              'Arabacı madalyonu ona götürdü. Kenan avucunu kapadı, bir daha açmadı.',
              /* Sözü bozulmayan ikinci kişinin de sesi (Tur 2 yay a7) */
              ['ic', 'Dudakları kıpırdadı; “Bu senindir” der gibi.', 'mahzun'],
            ] },
            { m: 'Kafesin tozuna parmağınla yaz: “Bekle.”', etki: { mukaddem: 4 }, bayrak: { p16_emanet: 'kafes' }, adimlar: [
              /* Sokak başından toz okunmaz (b15_16 eksik 8): parmağı görür */
              'Parmağımı gördü. Başını bir kez eğdi.',
              'Madalyonu yeniden boynuma taktım.',
            ] },
            /* T29c (GPT O16-1 b4): temas ve emanet son anda da reddedilebilir */
            { m: 'Hiçbir şey bırakma, yalnız başını bir kez eğ.', bayrak: { p16_emanet: 'yok' }, adimlar: [
              'Başımı bir kez eğdim. O da eğdi, yaklaşmadı.',
              'Madalyonu yeniden boynuma taktım.',
            ] },
          ] },
          /* S8: Feride'nin sesli aşk sözü; kafesin ardından, sokağa duyulacak kadar (2. bölümde Münevver: "Duyan duydu.")
             T29 (b13_16 B16 SES-2): ayrılığın doruğu veda; romantik parça (doruk değil).
             T29c (GPT O16-1/S16-1): sevgi beyanı otomatik değil: söz bağlamayan kız kendi işini, emanet bırakmayan kız vedayı söyler */
          { eger: bagimsiz, ise: [
            { eger: kalir, ise: [
              ['ic', 'Kimseyle söz bağlamadım, İstanbul\'da kaldım. Şebib denen adamı buradan araştıracağım.', 'kararli'],
            ], degilse: [
              ['ic', 'Kimseyle söz bağlamadım. Şebib denen adamın yüzüne kendim bakacağım.', 'kararli'],
            ] },
            KENAN_OTE,
            { eger: kalir, ise: [{ kart: BAGIMSIZ_KANCA_KAL }], degilse: [{ kart: BAGIMSIZ_KANCA }] },
          ], degilse: [
            /* T30 (S16-2/SE16-1): emanet bırakmayan kıza romantik parça yok */
            { eger: (S) => b(S).p16_emanet !== 'yok', ise: [{ muzik: 'romantik' }], degilse: [{ muzik: 'veda' }] },
            { eger: (S) => b(S).p16_emanet === 'yok', ise: [
              ['f', 'Hoşça kal Kenan. Söz babamın elinde, yol benim.', 'aglamakli'],
            ], degilse: [
              /* T33 (b13_16 B16 ANLATI): 15'te Kenan'ın adını korumak için onu içeri almayan kız sokağa bağırmaz */
              ['f', 'Seni seviyorum Kenan.', 'gulumseyen'],
              'Sesimi yalnız arabacı duydu. Kenan dudaklarımdan okudu.',
            ] },
            /* Benzetim çapası (benzet16 "Umutlu ayrılık cümlesi"): metin korunur. D7 ile uyumu önceki satırlar kurar:
               söz bu bölümde babanın ağzıyla yeniden bağlandı; burada "bu gidiş onu bozmadı" anlamında */
            ['ic', 'Söz bozulmadı. Yalnız yol uzadı.', 'mahzun'],
            KENAN_OTE,
            { kart: KANCA.son_umutlu_ayrilik },
          ] },
        ].concat(kapanis()),
      },

      /* ---------------- 3c. Süha kapısı: selamlıkta şart, kopan bağ, tehlikeli evet ---------------- */
      {
        id: 'p16_suha', mekan: 'selamlik_sofa', tetik: 'giris', kosul: (S) => S.gorev === 2 && yol(S) === 'suha', sahne: [],
        adimlar: [
          { muzik: 'suha' },
          'Kapı açık. Bu kez arkasında kimse dinlemiyor.',
          { goster: ['sai', 'ciddi'] },
          { eger: (S) => kapi(S) === 'yok', ise: [
            /* Diyalog T1 (ses B7; b15_16 eksik 7): "Süha Bey'e"; sarı odada dönen baba hükmünü verirken şartı kızına sorar */
            ['sai', 'Günlerdir söylüyorum: Süha Bey\'e varacaksın. Kararım bu, şartını sen söyle.', 'ciddi'],
            /* Cemil T27 kararı: Süha yolunun kapısız dalında Feride'nin bağımsız "Hayır"ı. Sarı odada baba dönmüştü
               (bu yol yalnız güçlü yüzleşmede açılır); Feride Süha'yı da reddedebilir: beşinci son (son_hayir) */
            ['an', 'Süha Bey selamlığın eşiğinde bekliyordu. Kızın sözünü kapıdan dinledi.'],
            { goster: ['suha', 'notr'] },
            { soru: 'Babam şartımı soruyor, Süha Bey eşikte. Bu söz bir kez söylenir.', secim: [
              /* GPT T24b 16-2: dün hiçbir kapıya evet demeyen kızın eveti rıza diye adlandırılmaz; hüküm babanın, şart onun (sesli) */
              { m: 'Şartını söyle: “Bu evet sizin kararınız babacığım, şartı benim.”', bayrak: { p16_hayir: 'sart' }, iz: 'Babanın kararına şartınla evet demeye yürüdün.', adimlar: [
                ['f', 'Dün kimseye evet demedim babacığım. Bu evet sizin kararınız, şartı benim.', 'kararli'],
              ] },
              { m: '“Hayır babacığım. Süha Bey\'e de hayır.”', etki: { vakar: 2, suha: -5 }, bayrak: { p16_hayir: 'hayir', p16_son: 'son_hayir' }, iz: 'Süha\'ya babanın önünde hayır dedin. Sarı odada dönen baban bu kez kızını dinledi.', adimlar: HAYIR_DALI },
            ] },
          ], degilse: [
            /* Babanın dünkü tavrı (p15_baba) ve sarı odadaki hükmü (p16_baba) açıklanır (Tur 2 B16-13) */
            { eger: (S) => b(S).p15_baba === 'karsi', ise: [
              /* Diyalog T1 (b16 #27): p16_baba 'perihan' iken sarı odada kızını değil Perihan'ı dinlemişti */
              ['sai', 'Dün bu adama kız verilmez demiştim. Kızımın şartını duyunca döndüm.', 'ciddi'],
            ], degilse: [{ eger: (S) => b(S).p16_baba === 'perihan', ise: [
              ['sai', 'Hanımın gözyaşını gördüm. Ama kızım dün şartını koydu, sözüm sözdür.', 'mahzun'],
            ], degilse: [
              ['sai', 'Kızım dün şartını koydu. Bu gece yerine gelecek.', 'ciddi'],
            ] }] },
          ] },
          /* T27: "Hayır" diyen kızın yolu HAYIR_DALI'nda biter; aşağısı şartlı evetin yolu */
          { eger: (S) => b(S).p16_hayir !== 'hayir', ise: [
          ['an', 'Süha Bey oturmadı. Buyur edilmeyi bekledi, kimse buyur etmedi.'],
          { goster: ['suha', 'notr'] },
          /* 15. bölüm: şart Süha'nın kendi eliyle yazıldıysa koz olarak elde */
          { eger: (S) => var_(S, SART), ise: [
            ['ic', 'Şartım onun yazısıyla koynumda.', 'kararli'],
          ] },
          /* GPT T26 (öncelik 10, B4): ikindi seçilen kıyafet bu sahnede de okunur; Süha–Behiye ipliği (2. sezon) açık kalır */
          { eger: (S) => S.giyili === 'nisan_yadigar', ise: [
            /* 3. bölümün af dalı her yolda yok: satır yalnız Süha'nın Behiye'yi tanıdığını söyler */
            /* T32 (b13_16 B16 DİYALOG-6): "onu" belirsizdi */
            ['suha', 'Annenizin ipeklisi. Behiye Hanım\'ı onunla son gördüğümde siz dokuz yaşındaydınız.', 'mahzun'],
          ] },
          /* 14. bölüm: Süha'nın yemini */
          { eger: (S) => b(S).p14_yemin === 'vazgec', ise: [
            ['suha', 'Vazgeçmeye yemin etmiştim. Yeminimi ancak siz bozarsınız.', 'notr'],
          ], degilse: [{ eger: (S) => b(S).p14_yemin === 'perihan', ise: [
            { eger: guclu, ise: [
              ['suha', 'Yeminim hanımı babanıza açmaktı. Bu akşam açıldı.', 'soguk'],
            ], degilse: [
              ['suha', 'Yeminim hanımı açmaktı. Babanız dinlemedi, ben yine buradayım.', 'notr'],
            ] },
          ], degilse: [
            /* T32 (ifade envanteri 2c-47): tehdit */
            ['suha', 'Şefik iyileşti, yeminim bitti. Şimdi sözüm başlıyor.', 'soguk'],
          ] }] },
          /* Şart yeniden istenmez, uygulanır (GPT Tur 23 okur 14); bedeli ödeyen adam tehlikeli kalır.
             GPT T26 (öncelik 7): borç/bedel sözlüğü yerine düz ve kişisel tehdit (12. bölümün dizi) */
          { eger: (S) => kapi(S) === 'suha', ise: [
            /* T32 (b13_16 O5, B16 DİYALOG-7): "diz çöktüm" cümlesi üç dalda geçiyordu; yalnız ret dalında kaldı */
            ['suha', 'Şartınızı yaparım. Bu kez diz çökmeden, ayakta.', 'soguk'],
          ], degilse: [
            ['suha', 'Şartınızı söyleyin, yaparım. Ama bu kez ayakta dinlerim.', 'soguk'],
          ] },
          { soru: 'Şartım ortada. Bu gece ona neyi yaptıracağım?', secim: [
            { m: '“Bu gece konaktan çıkın. Beni kendi kapınızdan isteyin.”', etki: { vakar: 1 }, bayrak: { p16_sart: 'cik' }, iz: 'Şartın: Süha bu gece konaktan çıkacak, seni kendi kapısından isteyecek.', adimlar: [
              ['suha', 'Sandığım zaten bağlı. Bu gece çıkarım.', 'notr'],
              ['sai', 'Bu gece mi? …Sabah kapımı çalarsın.', 'ciddi'],
            ] },
            { m: '“Kenan\'ın adını babamın önünde temizleyin. Ada\'yı da, Beyoğlu\'nu da.”', etki: { itibar: 1 }, bayrak: { p16_sart: 'kenan' }, iz: 'Şartın: Süha Kenan hakkındaki yalanlarını babanın önünde geri aldı.', adimlar: [
              /* Diyalog T1 (b16 #28): Ada yalanı Süha'nın, Beyoğlu masalı Nabi'nin; benzetim çapası "Beyoğlu'nda da kimseyi görmedim" korunur */
              ['suha', 'Kenan Bey Ada\'da içmedi, yalan benimdi. Beyoğlu\'nda da kimseyi görmedim, masal Nabi Bey\'in.', 'notr'],
              ['sai', 'Bir genç adamın adını neden kirlettin?', 'ofkeli'],
              /* GPT T26 (16 diyalog 10'a 2): itiraf Kenan'a yapılan zararı da adlandırır; "bedel/öderim" çıktı */
              ['suha', 'Kızınızı istiyordum. Kenan Bey Selanik\'e o kirli adla gitti, bu gece ben giderim.', 'mahzun'],
            ] },
            /* Diyalog T1 (b16 #29): seçim ile olan uyuşur: eveti Süha ilan eder */
            { m: '“Evetimi Perihan Hanım\'ın yüzüne siz söyleyeceksiniz.”', etki: { calibe_suphe: 2 }, bayrak: { p16_sart: 'yuz' }, iz: 'Şartın: Süha senin evetini Perihan\'ın yüzüne söyledi.', adimlar: [
              ['an', 'Sait Efendi karısını çağırttı. Perihan Hanım selamlık merdiveninin başında durdu, daha öteye inmedi.'],
              { goster: ['calibe', 'endiseli'] },
              ['suha', 'Hanım, kızınız bana evet diyor. Ben de çatınızdan çıkıyorum.', 'alayci'],
              /* Sarı odada "Süha… Sen benim…" söylenmiş olabilir: aynı yarım cümle iki kez gelmez (c13) */
              ['calibe', 'Süha… Bunu bana sen mi söylüyorsun?', 'endiseli'],
              /* T29 (b13_16 B16 DİYALOG 10'a 2): 13'teki "hiçbir şeyim"e geri dönüş yalnız onu söyleyen kızda */
              { eger: (S) => b(S).p13_ilk === 'hicbir', yakKoruma: true, ise: [
                ['suha', 'Sizin hiçbir şeyiniz değilim. Hocam bile değilsiniz artık.', 'soguk'],
              ], degilse: [
                ['suha', 'Size borcum kalmadı. Hocam bile değilsiniz artık.', 'soguk'],
              ] },
              { gizle: 'calibe' },
            ] },
            /* B1: 15. bölümde Süha'nın kendi eliyle yazdığı şart burada harcanır; kozsuz kız kilitli görür */
            /* GPT T26 (öncelik 2): koz (sır) harcanır, kâğıdın kendisi Feride'de kalır; satır gerekçeyi söyler */
            /* T27b (GPT B16-O1): kâğıdın varlığı kadar içeriği de taşınır (15. bölüm p15_s_kanit 'cik' | 'anlat').
               Okunan gerçek metin ve yerine getirilmesi ayrı; iki belgeye aynı hüküm basılmaz */
            { m: '“Yazdığınız şartı babamın önünde okuyun.”', kozGerek: SART, kilitGoster: (S) => !muk(S), etki: { vakar: 1, baba_guven: 1 }, bayrak: { p16_sart: 'yazi' }, iz: 'Süha yazdığı şartı babanın önünde okudu. Sır bitti, kâğıt yine sende.', adimlar: [
              'Kâğıdı koynumdan çıkarıp Süha Bey\'e uzattım.',
              { eger: (S) => sart15(S) === 'anlat', yakKoruma: true, ise: [
                ['suha', 'Yazım bu: “Sait Efendi\'ye her şeyi ben anlatacağım.” Anlatıyorum efendim.', 'notr'],
                ['suha', 'Kenan Bey Ada\'da içmedi, o söz benimdi. Hanım beni dokuz yıldır bir yelek düğmesiyle tutuyor.', 'mahzun'],
                ['sai', 'Bunca yıl çatımın altında… Yazdığın söz yerine geldi, bu gece konaktan çıkarsın.', 'ciddi'],
              ], degilse: [
                ['suha', 'Yazım bu: “Perihan Hanım\'ın evinden çıkacağım.” Bunu da unutmam.', 'notr'],
                ['sai', 'Yazılı söz sözdür. Bu gece konaktan çıkarsın.', 'ciddi'],
              ] },
              kozHarca(SART),
              'Okuyunca kâğıdı elinden geri aldım. Sırrı bitti, yazısı yine koynumda.',
            ] },
            /* T28 (b13_16 ana bulgu 3, Cemil T27): Süha kapısını seçen asıl Süha oyuncusu da bağımsız "Hayır"a ulaşır;
               yalnız sarı odada baba döndüyse (güçlü yüzleşme). Dalın geri kalanı (düğme, evet) HAYIR_DALI'nda atlanır */
            /* T28b (GPT O16-1): güçsüz yüzleşmede de açık (babanın desteği HAYIR_DALI'nda güce göre) */
            { m: '“Şartı bırakın. Hayır babacığım, evet diyen de bendim, geri alan da ben.”', kosul: (S) => kapi(S) === 'suha', etki: { vakar: 2, suha: -5 }, bayrak: { p16_hayir: 'hayir', p16_son: 'son_hayir' }, iz: 'Dünkü evetini babanın önünde geri aldın. Süha\'ya da hayır dedin.', adimlar: HAYIR_DALI },
          ] },
          { eger: (S) => b(S).p16_hayir !== 'hayir', ise: [
          /* Perihan'ın bağı kopar: düğme Feride'nin elindeyse onun eliyle, değilse Süha'nın kendi eliyle.
             B1: sarı odada gösterilen düğmenin kozu tükenmişti; eşya yine Feride'nin avucunda */
          /* GPT T26 (öncelik 4): düğmenin akıbeti otomatik değil, Feride'nin seçimi: güven göstermek ya da güvenceyi
             korumak (kendisinde ya da babasında rehin). Benzetim çapası "Prangamı siz çözdünüz" her dalda korunur */
          /* T27: kapısız dalda Feride kararını selamlıkta bir kez daha verdi ("şartımla evet"); karar sayısı 13–17
             içinde kalsın diye düğmenin akıbeti orada seçim değil, güvencesini elde tutan kızın sınırıdır */
          { eger: (S) => dugmeElde(S) && b(S).p16_hayir === 'sart', ise: [
            ['f', 'Düğmeniz nikâh gecesine kadar bende Süha Bey. Bu evet babamın, güvence benim.', 'kararli'],
            { bayrak: { p16_dugme: 'sakla' } },
            ['suha', 'Prangamı siz çözdünüz, kilidini de siz tuttunuz. Akıllısınız.', 'alayci'],
            { eger: (S) => var_(S, DUGME), ise: [
              { kozKaynak: [DUGME, 'Koynumda, nikâh gecesine kadar Süha Bey\'e vermiyorum'] },
            ] },
          ], degilse: [{ eger: dugmeElde, ise: [
            { soru: 'Düğme avucumda. Süha Bey ona bakıyor.', secim: [
              { m: 'Düğmeyi avucuna koy. Güvenini göster.', etki: { suha: 3 }, bayrak: { p16_dugme: 'ver' }, iz: 'Düğmeyi Süha\'ya verdin: güven gösterdin, güvenceni bıraktın.', adimlar: [
                'Düğmeyi Süha Bey\'in avucuna koydum.',
                ['suha', 'Düğmemi bana verdiniz. Bunu unutmam, iyiye de kötüye de.', 'notr'],
                kozHarca(DUGME),
              ] },
              { m: 'Göster, sonra koynuna geri koy: “Nikâh gecesi sizin olur.”', etki: { vakar: 1 }, bayrak: { p16_dugme: 'sakla' }, iz: 'Düğme nikâha kadar sende. Süha\'nın eski ipi artık senin elinde.', adimlar: [
                ['f', 'Düğme nikâh gecesine kadar bende kalır Süha Bey. Sonra sizindir.', 'kararli'],
                ['suha', 'Düğmemi de kilidini de siz tuttunuz. Akıllısınız.', 'alayci'],
                /* Sarı odada gösterilip sırrı harcanan düğme yeniden koz olmaz; eşyanın yeri kaynakta yazılı (öncelik 2) */
                { eger: (S) => var_(S, DUGME), ise: [
                  { kozKaynak: [DUGME, 'Koynumda, nikâh gecesine kadar Süha Bey\'e vermiyorum'] },
                ], degilse: [
                  ['ic', 'Sırrı sarı odada bitti. Düğmenin kendisi nikâha kadar koynumda.', 'kararli'],
                ] },
              ] },
              { m: 'Düğmeyi babana ver: “Süha Bey\'in sözüne rehin.”', etki: { baba_guven: 1 }, bayrak: { p16_dugme: 'baba' }, iz: 'Düğme babanın çekmecesinde rehin. Süha sözünü bozarsa baban bilir.', adimlar: [
                ['sai', 'Rehin mi? Peki, çekmecemde durur.', 'ciddi'],
                ['suha', 'Düğmemi babanıza verdiniz. Artık beni o tutar.', 'mahzun'],
                kozHarca(DUGME),
              ] },
            ] },
          ], degilse: [
            /* Tehdit bitmez; Süha riski bilerek gider, karşı kozunu söyler (GPT Tur 23 okur 11) */
            ['suha', 'Düğmem hanımda kalsın. Beni hırsız gösterdiği gün, ben de onun eşiğini anlatırım.', 'soguk'],
            ['ic', 'İpi kendisi kopardı. O el bundan sonra nereye uzanacak?', 'endiseli'],
          ] }] },
          /* T27 (SÜRÜK-3): doruk seçiminde süre ve bedel; iki seçenekte de iz */
          { soru: 'Babam cevap bekliyor. Süha Bey’in sandığı kapıda; son sözüm ne?', secim: [
            /* S8: Feride'nin seçtiği adama sesli karar sözü; Süha tehlikeli kalır */
            { m: 'Elini uzat: “Evet.”', etki: { suha: 5 }, bayrak: { p16_evet: 'el', p16_son: 'son_tehlikeli_evet' }, iz: 'Evet dedin. Şartın yerinde durdukça el onun.', adimlar: [
              ['f', 'Evet. Şartım yerinde durdukça bu el sizin.', 'utanmis'],
              { muzik: 'sessiz' },
              'Parmaklarımı tuttu. Bu kez nabzımı saymadı.',
            ] },
            /* Diyalog T1 (b16 #31): seçim metni söylenen satırla aynı sözü taşır; elini saklayan kızın yüzü meydan okur ama gülümser */
            { m: 'Elini verme: “Evet. Elimi nikâhta alırsınız.”', etki: { suha: 3, vakar: 1 }, bayrak: { p16_evet: 'soz', p16_son: 'son_tehlikeli_evet' }, iz: 'Evet dedin. Elin nikâh gecesine kadar sende.', adimlar: [
              ['f', 'Evet. Elimi nikâh gecesi alırsınız, o güne kadar bende.', 'kararli'],
              /* GPT T26 (16 diyalog 10'a 1): sınır oyuna çevrilmez; Süha ilk kez hemen cevap bulamaz */
              ['an', 'Süha Bey uzattığı eli havada tuttu. Cevap bulamadı, elini yavaşça indirdi.'],
            ] },
            /* T28b (GPT O16-1): nihai söz menüsünde yalnız iki çeşit evet kalmaz; şartı konmuş olsa da eveti geri alma
               her güç düzeyinde açık (babanın desteği HAYIR_DALI'nda) */
            { m: '“Hayır. Şartımı da evetimi de geri alıyorum.”', etki: { vakar: 2, suha: -5 }, bayrak: { p16_hayir: 'hayir', p16_son: 'son_hayir' }, iz: 'Elini vermeden önce eveti geri aldın. Süha\'ya babanın önünde hayır dedin.', adimlar: HAYIR_DALI },
          ] },
          { eger: (S) => b(S).p16_hayir !== 'hayir', ise: [
          ['sai', 'Hayırlı olsun. Nikâh bahara.', 'ciddi'],
          /* Babanın onayı 14. bölümün elinin hesabını kapatmaz. GPT T26 (öncelik 8): hesap açık kalır, ama Feride
             nikâha kadar bu evde kalacağı için bu gece uygulanabilir bir sınır koyar; Süha'nın önünde, şahitli */
          { eger: (S) => b(S).p14_dayak === true, ise: [
            ['f', 'Babacığım, kolumun hesabını sonra sorarım. Ama nikâha dek bana kimse el kaldırmayacak.', 'kararli'],
            ['sai', 'Kaldırılmayacak. Ben de kaldırmam kızım, Süha Bey şahit.', 'pisman'],
          ] },
          { gizle: 'sai' },
          /* T30 (S16-1): evetten (doruk) sonra yeni seçim yok; Süha'nın tehdidi tek satır (13 satır sınırı için babanın çıkışı
             ve ara sayfanın ilk satırı kısaldı) */
          /* GPT T24b 16 (10'a): kopan ipin dış dünyadaki karşılığı: Perihan'ın çatısı altındaki hekim artık misafir */
          ['an', 'Süha Bey sandığıyla selamlık kapısından çıktı. Perihan Hanım\'ın çatısı altında artık ancak misafir olabilirdi.'],
          { gizle: 'suha' },
          { gorev: 3 },
          { ara: { mekan: 'suha_oda', yer: 'Gece yarısı · Süha Bey\'in odası', satirlar: [
            /* Destekçiler ve Şefik bu sonda da karşılanır (GPT Tur 23 okur 13); boş dönen satır gösterilmez */
            (S) => (b(S).p16_hatice_soz === true
              ? 'Mutfakta Hatice bohçasını bağlamıştı, sabah Münevver Hanım\'ın konağına gidecekti. Feride o sözünü tutmuştu.'
              : madamKonustu(S) ? 'Madam Josephine\'in odasında lamba geç vakte kadar yandı. Şahitliğin bedelini sabah ödeyecekti.'
                : b(S).p14_sefik === 'yanimda' ? 'Şefik\'in kapısının önünde durakladı. Çocuğu ateşten kurtaran el o gece konaktan çıkmıştı.'
                  : ''),
            'Süha Bey\'in odasının kapısı aralık kalmıştı. Hekim hiçbir kapıyı kaza eseri aralık bırakmamıştı.',
          ] } },
          ] },
          ] },
          ] },
        ],
      },

      /* ---------------- 4b. Süha'nın boş odası: son kare, sahte mektubun izi ---------------- */
      {
        id: 'p16_suha_oda', mekan: 'suha_oda', tetik: 'giris', kosul: (S) => S.gorev === 3, sahne: [],
        adimlar: [
          { muzik: 'gerilim' },
          /* Sürükleyicilik T1 S2/S8 (c3): Şebib zarfı doruktan ÖNCE; son vuruş "Evet dediğim el."
             Doğrulama v65 (ritim): odanın iki satırı birleşti */
          { efekt: 'kagit' },
          /* GPT T26 (16 anlatı 10'a 3): damganın tarihi, Süha'nın planının Feride'nin şartından önce kurulduğunu gösterir */
          'Oda boş, lamba kısık. Çekmece aralık, içinde on gün önce damgalanmış bir Beyrut zarfı.',
          { kart: 'Beyrut\'tan bir zarf', alt: '“Hekim Süha Bey\'e: yeriniz hazır. Hanımınızla, Behiye Hanım\'ın kızıyla, ne zaman gelirsiniz? —Şebib”' },
          /* T27: iki son (şartlı evet / bağımsız hayır) bu odada birleşir */
          /* T28 (b13_16 OYNANIŞ): veda pusulası Süha'nın kendi eğik eliyle, mürekkeple; iz saatin sayımında.
             Hayır sonunda kovulan talibin sabahki gelişi açıklanır (son kez eğilmek) */
          { eger: hayir, ise: [
            { kart: 'Masada, bana —Süha', alt: '“Hayırınızı unutmam, sabah ' + IZ.hata + ' babanızın kapısında son kez eğilirim. Adieu.”' },
          ], degilse: [
            { kart: 'Masada, bana —Süha', alt: '“Yeni evimde her şey hazır, sabah ' + IZ.hata + ' babanızın kapısındayım. Adieu.”' },
          ] },
          /* T27b (ortak istek O4, artık serbest): iz karşılaştırması sessizlikte; doruk "… dediğim el"de girer */
          { muzik: 'sessiz' },
        ].concat(sahteMektupIzi(), [
          /* "Aynı el" iz satırında söylendi; doruk burada tek vuruş (Tur 2 B16-25); S6: resim vuruştan sonra.
             T27 (SES): doruk müziği vurucu anda */
          /* T28b (GPT SE16-1): tam doruk seçilen sonun en büyük kararında (selamlık / kavuşma) kalır; iz keşfinde koyu tek
             tuş ve sessizlik. T33 (b13_16 B16 SES): "sessizlik + tek nota" kalıbının beşinci tekrarı kalktı; yalnız sessizlik */
          /* T28 (ORTAK kararı): hayır sonunun kendi anı an_hayir (selamlık); iki kâğıt bu sonda ikinci an olarak kalır */
          /* T29 (b13_16 B16 GÖRSEL-1): kâğıt elde değilse soldaki müsvedde (yarı yanık) */
          { eger: izKagit, ise: [{ cizim: 'an_iki_kagit' }], degilse: [{ cizim: 'an_iki_kagit_musvedde' }] },
          { soru: 'Sahte mektubun müsveddesiyle veda pusulası lambanın altında. Hangisini alacağım?', secim: [
            /* GPT T26 (16 oynanış 10'a 2, sürük 10'a 2): saklanan iki kâğıt Defter'de karşılaştırılabilir delil olur;
               almanın küçük, hemen görülen bedeli: odada oyalanan kızı sofada biri duyar (Perihan kuşkulanır) */
            { m: 'Sahte mektubu ve veda pusulasını al; mektup sende yoksa müsveddesini al.', etki: { calibe_suphe: 1 }, bayrak: { p16_iz: 'sakla', p16_sabah: 'baba' }, iz: 'Delil koynunda. Ama odadan çıkarken biri seni duydu.', adimlar: [
              { eger: izKagit, ise: [
                { koz: 'İki kâğıt, tek el', kaynak: 'Biri zaten elimdeydi; pusulayı Süha Bey\'in masasından aldım', alt: 'Sahte kaçış mektubu (cetvelle) ve Süha Bey\'in veda pusulası (kendi eli): ikisi de saati alafranga sayıyor.' },
              ], degilse: [
                { koz: 'İki kâğıt, tek el', kaynak: 'Süha Bey\'in odasından aldım; koynumda', alt: 'Mangaldan kalan müsvedde (cetvelle) ve Süha Bey\'in veda pusulası (kendi eli): ikisi de saati alafranga sayıyor.' },
              ] },
              'Koynuma sokarken sofada bir kapı açıldı, sonra usulca kapandı.',
              ['ic', 'Delil bende. Kapıyı kim açtıysa, onu da sabah öğrenirim.', 'endiseli'],
            ] },
            /* T28b (GPT O16-2; kök bulgu 3): kâğıdı alma/bırakma fiziksel konuma göre. Sahte mektup zaten Feride'nindi:
               kendi kâğıdını alıp pusulayı bırakmak ya da ikisini de masada bırakmak ayrı; kozun kaynağı (konum) güncellenir,
               bilgi silinmez. Kâğıtsız dalda (müsvedde Süha'nın) bırakılan kâğıt elde delil bırakmaz, görülen bilgi kalır */
            { m: 'Sahte mektubunu al. Veda pusulasıyla müsveddeyi bırak.', kosul: izKagit, bayrak: { p16_iz: 'ayir', p16_sabah: 'baba' }, iz: 'Sahte mektup sende, pusula Süha\'nın masasında. Bildiğini bilmiyor.', adimlar: [
              { eger: (S) => var_(S, IZ.koz), ise: [
                { kozKaynak: [IZ.koz, 'Kâğıt elimde, pusula Süha Bey\'in masasında kaldı'] },
              ] },
              ['ic', 'Benim olanı aldım, onunkini bıraktım. Pusulanın yerini sabah da bilirim.', 'kararli'],
            ] },
            { m: 'Sahte mektubu, müsveddeyi ve veda pusulasını bırak.', kosul: izKagit, bayrak: { p16_iz: 'birak', p16_sabah: 'avlu' }, iz: 'Sahte mektup, müsvedde ve veda pusulası masada kaldı. Gördüklerim aklımda.', adimlar: [
              { eger: (S) => var_(S, IZ.koz), ise: [
                { kozKaynak: [IZ.koz, 'Süha Bey\'in masasında, pusulasının yanında bıraktım, gördüklerim aklımda'] },
              ] },
              ['ic', 'Kâğıtları yerinde bıraktım. Sabah ona ne bildiğimi söylemeyeceğim.', 'kararli'],
            ] },
            { m: 'Müsveddeyi ve veda pusulasını bırak. Bildiğimi bilmesin.', kosul: (S) => !izKagit(S), bayrak: { p16_iz: 'birak', p16_sabah: 'avlu' }, iz: 'Kâğıtlar yerinde, Süha bildiğini bilmiyor. Elinde kâğıt yok, gördüğün var.', adimlar: [
              ['ic', 'Kâğıtları yerinde bıraktım. Sabah ona ne bildiğimi söylemeyeceğim.', 'kararli'],
            ] },
          ] },
          /* T29 (b13_16 B16 SÜRÜK-2): doruktan (iki kâğıt) sonra ikinci seçim yok; sabahki karşılaşmanın yeri kâğıt kararından
             çıkar (p16_sabah iz seçeneğinde): kâğıdı alan kız babasının kapısında, tanıkla yüzleşir; bırakan avluda susar.
             T28b (GPT S16-1; kök bulgu 7): tek kısa sabah hesaplaşması; Süha itiraf etmez.
             T29 (SES 10'a 2): Süha'nın teması sabah bir kez daha */
          { muzik: 'suha' },
          { eger: (S) => b(S).p16_sabah === 'baba', ise: [
            ['an', 'Sabah saat sekizde selamlığın kapısı çalındı. Feride kapıyı kendisi açtı, babası arkasındaydı.'],
          ], degilse: [
            ['an', 'Sabah ilk ışıkta Süha Bey avluya girdi. Konağın bütün kafesleri ona dönüktü.'],
          ] },
          { goster: ['suha', 'notr'] },
          { eger: (S) => hayir(S) && b(S).p16_iz !== 'birak', ise: [
            ['f', 'Bu yazıyı tanıyor musunuz Süha Bey? Gece on iki, sabah sekiz.', 'ofkeli'],
            ['suha', 'Saati herkes kendi bildiği gibi sayar Feride Hanım.', 'alayci'],
            ['f', 'Müsveddesi sizin mangalınızdaydı.', 'kararli'],
            ['an', 'Süha Bey bu kez cevap bulamadı. Eğildi, döndü ve bu kez kimseden izin istemeden gitti.'],
          ], degilse: [
            ['suha', 'Uyumamışsınız Feride Hanım.', 'soguk'],
            /* T30 (O16-2): tehlikeli evet yolunda da gördüğü/aldığı iz bir karara bağlanır; Süha itiraf etmez */
            { eger: (S) => !hayir(S), ise: [
              { soru: 'Sabah ilk o geldi. Bildiğimi söyleyecek miyim?', secim: [
                { m: '“Bu yazıyı tanıyor musunuz Süha Bey? Gece on iki, sabah sekiz.”', kosul: (S) => b(S).p16_iz !== 'birak', bayrak: { p16_sabah_yuz: 'sor' }, iz: 'Bildiğini Süha\'nın yüzüne söyledin. Artık o da biliyor.', adimlar: SABAH_SOR },
                { m: '“Yazınızı tanıdım Süha Bey: gece on iki, sabah sekiz.”', kosul: (S) => b(S).p16_iz === 'birak', bayrak: { p16_sabah_yuz: 'sor' }, iz: 'Kâğıtlar onun masasında kaldı ama bildiğini yüzüne söyledin.', adimlar: SABAH_SOR },
                { m: '“Uyumadım Süha Bey. Sabahınız hayırlı olsun.”', bayrak: { p16_sabah_yuz: 'sus' }, adimlar: [
                  ['an', 'Süha Bey eğildi ve gitti. Feride\'nin bildiğini bilmiyordu, bilmediği kadar da tehlikeliydi.'],
                ] },
              ] },
            ], degilse: [
              ['f', 'Uyumadım Süha Bey. Sabahınız hayırlı olsun.', 'kararli'],
              ['an', 'Süha Bey eğildi ve gitti. Feride\'nin bildiğini bilmiyordu, bilmediği kadar da tehlikeliydi.'],
            ] },
          ] },
          { gizle: 'suha' },
          { eger: hayir, ise: [
            { kart: KANCA.son_hayir },
          ], degilse: [{ eger: (S) => b(S).p16_sabah_yuz === 'sor', ise: [
            { kart: 'Evet dediğim adam o mektubu yazdı. Bildiğimi artık o da biliyor.' },
          ], degilse: [
            { kart: KANCA.son_tehlikeli_evet },
          ] }] },
        ], kapanis()),
      },

      /* ---------------- 3d. Üçüncü kapı, gece: Remzi nikâhı yarın ---------------- */
      {
        id: 'p16_remzi_gece', mekan: 'fazila_oda', tetik: 'giris', kosul: (S) => S.gorev === 2 && yol(S) === 'remzi', sahne: [],
        adimlar: [
          { muzik: 'huzun' },
          { bayrak: { p16_son: 'son_remzi' } },
          /* B5: sandığın dibi (isteğe bağlı keşif). Sahnenin başında açılır, sandık seçimine dek dokunulabilir
             (ritim: seçim öncesi satırlar 12'ye varabildiği için keşif sonda değil); bayrak sandık seçiminde ve nikâhta okunur */
          { kesif: { x: 18, y: 50, w: 18, h: 18, ad: 'Sandığın dibi', adimlar: [
            ['ic', 'Sandığın dibinde annemin eğik yazısı: “Kızım, kapını kendin aç.”', 'mahzun'],
            { bayrak: { p16_k_sandik: true } },
          ] } },
          { eger: (S) => kapi(S) === 'remzi', ise: [
            ['ic', 'Remzi Bey\'e evet diyen bendim. Yarın nikâh.', 'mahzun'],
          ], degilse: [
            /* Diyalog T1 (b16 #34): ara sayfada kapı sürgüsüz kaldı; burada "sürgüsüz" tekrarı çelişki gibi okunuyordu */
            ['an', 'Sait Efendi kızının kapısını çalmadan açtı. Kararını ona ayakta söyleyecekti.'],
            { goster: ['sai', 'mahzun'] },
            /* Sarı odada önce kıza sorduysa: sordu ama duymadı (Tur 2 B16-14) */
            { eger: babaSorar, ise: [
              ['sai', 'Sordum, söyledin. Yine de Remzi Bey\'e veriyorum, yarın nikâh.', 'ciddi'],
            ], degilse: [
              ['sai', 'Kızım, Remzi Bey\'e veriyorum. Yarın nikâh.', 'ciddi'],
            ] },
            /* S3: babanın hükmüne Feride iç sesle değil, yüzüne cevap verir */
            /* T28b (GPT O16-1): babanın hükmüne cevap razılık değil; açık ret aşağıdaki seçimde her güç düzeyinde var */
            ['f', 'Rızamı sormadınız babacığım. Cevabımı yine de duyacaksınız.', 'ofkeli'],
            ['an', 'Sait Efendi kızının yüzüne bakmadan çıktı. Sofadaki kahkaha kesildi, sonra yeniden başladı.'],
            { gizle: 'sai' },
          ] },
          /* GPT T24b 16-9: sahte mektubun akıbeti bu sonda da belli: nikâh hesabı örter, Feride bunu bilir */
          { eger: guclu, ise: [
            ['ic', 'Perihan Hanım kazanmadı, ben de kurtulmadım. Sahte mektubun hesabını bu nikâh örttü.', 'mahzun'],
          ], degilse: [
            { goster: ['calibe', 'sinsi'] },
            ['calibe', 'Gördün mü kızım? O kaçış mektubunu kimin yazdığını artık kimse sormaz.', 'sinsi'],
            ['f', 'Ben sordum hanım. Cevabını almadan susmam.', 'ofkeli'],
            { gizle: 'calibe' },
          ] },
          { eger: muk, ise: [
            ['ic', 'Kenan\'a yazmadım. Bir satır yazsam o satırın peşinden giderdim.', 'mahzun'],
          ], degilse: [
            /* Remzi kapısında evet dün selamlığa iletildi: Süha bunu bu gece ilk kez duymaz (Tur 2 B16-4) */
            { eger: (S) => kapi(S) === 'remzi', ise: [
              ['an', 'Süha Bey merdivenin başında durdu. Dünkü evet bu gece de geri alınmamıştı.'],
              { goster: ['suha', 'notr'] },
              ['suha', 'Remzi. Bir gecelik inat sanmıştım.', 'soguk'],
            ], degilse: [
              ['an', 'Süha Bey merdivenin başında durdu. Konakta bir haberi herkesten sonra duymak ona yabancıydı.'],
              { goster: ['suha', 'notr'] },
              ['suha', 'Remzi mi? Bunu ben hesaplamadım.', 'notr'],
            ] },
            { gizle: 'suha' },
          ] },
          /* Şefik bu sonda da karşılanır (GPT Tur 23 okur 13) */
          { eger: (S) => b(S).p14_sefik === 'yanimda', ise: [
            ['ic', 'Şefik kapımın önünde uyuyakalmış. Babamdan duymasın, ona ben söylerim.', 'mahzun'],
          ], degilse: [
            ['ic', 'Şefik\'e mektebine yazacağım. Ablasına ne olduysa benden duysun.', 'mahzun'],
          ] },
          { soru: 'Sandığım açık. Yarın için bir şey götürebilirim.', secim: [
            /* B4: madalyon takı olarak takılır (Gardrop'ta görünür; madalyonlu portre görsel listesinde) */
            /* T29 (ORTAK madalyon kuralı 'elbise'): gök mavisi dışında madalyon yakanın içinde; metin buna uyar */
            { m: 'Annemin madalyonunu yakanın içine, kalbinin üstüne tak.', bayrak: { p16_esya: 'madalyon' }, iz: 'Annenin madalyonu yakanın içinde. O evden yanında çıkan tek şey.', adimlar: [
              { taki: 'madalyon', ad: 'Annemin madalyonu', alt: 'Yakamın içinde, kalbimin üstünde annemin madalyonu. Taşı soğuk.' },
              ['ic', 'Annem de bir evden bir eve böyle gitti. Taşı soğuk, ben ısıtırım.', 'mahzun'],
            ] },
            { m: 'Annemin kâğıdını koynuna koy.', kosul: (S) => b(S).p16_k_sandik === true, etki: { vakar: 1 }, bayrak: { p16_esya: 'kagit' }, iz: 'Annenin satırı koynunda: kapını kendin açacaksın.', adimlar: [
              /* T32 (ifade envanteri 2a-22): veda */
              ['ic', 'Madalyonu değil, yazısını götürüyorum. O evde de okurum.', 'mahzun'],
            ] },
            { m: 'Hiçbir şey götürme. O ev benden bir şey almasın.', etki: { vakar: 1 }, bayrak: { p16_esya: 'hic' }, adimlar: [
              ['ic', 'Sandığı kapadım. Boş gidiyorum, boş dönmem.', 'kararli'],
            ] },
            /* T28b (GPT O16-1, A16-2; kök bulgu 1): güçsüz "hiçbiri" de, Remzi kapısını seçen de açık ret söyleyebilir.
               Sonuç rızayı değiştirmez; yalnız korunmayı ve babanın desteğini (HAYIR_GECE) */
            { m: 'Sandığı kapa, babama in: “Dünkü evetimi geri alıyorum.”', kosul: (S) => kapi(S) === 'remzi', etki: { vakar: 2, remzi: -3 }, bayrak: { p16_son: 'son_hayir', p16_hayir: 'gece' }, iz: 'Remzi\'ye verdiğin eveti babanın önünde geri aldın. Nikâh kıyılmayacak ama baban yanında değil.', adimlar: HAYIR_GECE.concat([{ kart: GECE_KANCA }], kapanis()) },
            { m: 'Sandığı kapa, babama in: “Remzi Bey\'e varmam.”', kosul: (S) => kapi(S) !== 'remzi', etki: { vakar: 2, remzi: -3 }, bayrak: { p16_son: 'son_hayir', p16_hayir: 'gece' }, iz: 'Babanın verdiği söze hayır dedin. Nikâh kıyılmayacak ama baban yanında değil.', adimlar: HAYIR_GECE.concat([{ kart: GECE_KANCA }], kapanis()) },
          ] },
          { gorev: 3 },
          { ara: { mekan: 'buyuk_salon', yer: 'Ertesi gün · büyük salon', satirlar: [
            /* Şahitliğin bedeli (GPT Tur 23 okur 13) ve Hatice'ye verilen söz (çarşıda Münevver anar; Tur 2 B16-27);
               boş dönen satır gösterilmez */
            (S) => {
              var madam = madamKonustu(S), hatice = b(S).p16_hatice_soz === true;
              if (madam && hatice) return 'Sabah Madam Josephine\'in sandığı avluya indirildi. Hatice de bohçasıyla Münevver Hanım\'ın konağına geçti.';
              if (madam) return 'Sabah Madam Josephine\'in sandığı avluya indirildi. Şahitliğin bedelini Perihan Hanım ilk ondan almıştı.';
              if (hatice) return 'Hatice sabah bohçasıyla Münevver Hanım\'ın konağına geçti. Feride sözünü nikâhtan önce tuttu.';
              return '';
            },
            /* T28 (b13_16 ANLATI): muhafazakâr konakta istisna; aktiflik bir sonraki satırda */
            'Nikâhtan önce gelinle damada, kapı açıkken beş dakika konuşma izni verildi.',
            'Feride o beş dakikayı babasından kendisi istemişti.',
          ] } },
        ],
      },

      /* ---------------- 4c. Üçüncü kapı, ertesi gün: Remzi'yle söz düellosu, nikâh ---------------- */
      {
        id: 'p16_remzi_nikah', mekan: 'buyuk_salon', tetik: 'giris', kosul: (S) => S.gorev === 3, sahne: [],
        adimlar: [
          ['an', 'Remzi Bey salona damat gibi değil, pazarlığı bitmiş bir müşteri gibi girdi. Kapı açık kaldı.'],
          { goster: ['remzi', 'ana'] },
          { eger: (S) => b(S).p16_liste === 'yaz', ise: [
            ['remzi', 'Annem “Gönül: fiyatı yok” satırını okudu. Fiyatı olmayan bir şey… Hiç düşünmemiştim.', 'mahcup'],
            /* Doğrulama v65 (Remzi sırası): içten cümle ile "Of, aman!" arasına eylem; ton bir anda zıplamaz */
            ['an', 'Remzi Bey kendi sözünden ürkmüş gibi saatini çıkardı.'],
          ], degilse: [{ eger: (S) => b(S).p16_liste === 'baba', ise: [
            ['remzi', 'Listeyi babanıza vermişsiniz. Fiyatları beğendi mi?', 'notr'],
            /* Sabahki seçimin gönül bedeli Remzi öğrenince (GPT T26 öncelik 6) */
            { etki: { remzi: -3 } },
          ], degilse: [
            ['remzi', 'Annemin yelpazesi kırk liraydı. Size az mı geldi?', 'gulumser'],
          ] }] },
          /* T29 (b13_16 B16 DİYALOG-3): Remzi'nin ses kalıbı fiyat ve gösteriş */
          ['remzi', 'İmamı bekletmedim. Sofra da hazır; şimdi herkes bizi beklesin.', 'gulumser'],
          /* Romandaki dönüşe köprü: B1'den beri kurulan Remzi tutarlı biçimde kararır (Tur 2 yay a5) */
          /* T33 (b13_16 B16 DİYALOG 10'a 2): ahlak dersi yerine nesne */

          /* Ses (b): kabalık kalır ama Remzi'nin fiyat diline döner */
          /* T29c (GPT D16-1): fiyat şakası tek; gösteriş (başkasının bakışı) ve kontrol ayrı hareketler */
          /* T32 (ifade envanteri 2e-63): sahiplenme; gülüş tehdidi siliyordu */
          ['remzi', 'Salonda herkes size bakıyordu. Yanımdaki hanıma bakılmasını severim.', 'kararli'],
          { soru: 'Remzi Bey saatine bakıyor.', secim: [
            { m: '“Ben de kısa konuşurum: beni satın almadınız.”', etki: { remzi: 3, vakar: 1 }, bayrak: { p16_duello: 'satin' }, adimlar: [
              { goster: ['remzi', 'kararli'] },
              ['remzi', 'Satın almadım, peşin ödedim. Farkını evde görürsünüz.', 'kararli'],
            ] },
            { m: '“Sıkılırsanız söyleyin. Ben de sıkılmayı bilirim.”', etki: { remzi: 4 }, bayrak: { p16_duello: 'sikil' }, adimlar: [
              ['remzi', 'Bu laf iki yelpaze eder. Not ettim.', 'gulumser'],
            ] },
            /* Sessizlik bilerek yapılan bir hamle (anlatı A, B bölümü) */
            { m: 'Gülümse. Sözünü o eve sakla.', bayrak: { p16_duello: 'sus' }, adimlar: [
              /* T32 (ifade envanteri 2e-62) */
              ['remzi', 'Susan hanımı severim. Ucuza gelir.', 'kararli'],
            ] },
            /* B1 + B3: 15. bölümde Nabi'den öğrenilen Beyoğlu evi nikâh masasında harcanır; Remzi'nin gönlü −5 */
            /* T27b (GPT B16-O2): harcanmış sır unutulmuş bilgi değildir; Beyoğlu'nu bilen (bilir) ya da 15. bölümde evetini
               bu evin kapanmasına bağlayan kız nikâhtan önce sorabilir. Şartlı evette Remzi'nin cevabı şarta göre; Feride şartı
               nikâhtan önce uygulatır */
            { m: '“Beyoğlu\'ndaki evinizin perdeleri nikâhtan sonra da kapalı mı kalacak?”', kozGerek: BEYOGLU, kosul: (S) => bilir(S, BEYOGLU) || rsart15(S) === 'beyoglu', etki: { remzi: -5, vakar: 1 }, bayrak: { p16_duello: 'beyoglu' }, iz: 'Beyoğlu evini Remzi\'nin yüzüne vurdun. O sır artık pazarlıkta değil.', adimlar: [
              { goster: ['remzi', 'saskin'] },
              { eger: (S) => rsart15(S) === 'beyoglu', yakKoruma: true, ise: [
                ['remzi', 'Kapattım dedim ya hanım. Anahtarı kâhyamda.', 'mahcup'],
                ['f', 'Öyleyse anahtar nikâhtan önce babamın avucuna. Yoksa evetim yok.', 'kararli'],
                ['an', 'Remzi Bey anahtarı Sait Efendi\'nin önüne bıraktı. Pazarlık kaybetmeye alışık değildi.'],
              ], degilse: [
                ['remzi', 'O ev benim hesabım hanım. Sizin hesabınıza yazılmaz.', 'kararli'],
                ['f', 'Yazılır Remzi Bey. Benim de defterim var.', 'ofkeli'],
              ] },
              kozHarca(BEYOGLU),
            ] },
          ] },
          /* T27b (GPT B16-O2): 15. bölümde Remzi'ye verilen şartlı evet nikâhtan önce denetlenir (ayrı ev, Şefik'in mektebi;
             Beyoğlu şartı yukarıdaki düelloda ya da burada, sormayan kızın kendi bilgisinde) */
          { eger: (S) => kapi(S) === 'remzi' && rsart15(S) === 'ev', yakKoruma: true, ise: [
            ['remzi', 'Ayrı ev sözüm yerinde: Cihangir\'deki evi açtırdım. Annem oraya gelmez.', 'kararli'],
          ], degilse: [{ eger: (S) => kapi(S) === 'remzi' && rsart15(S) === 'sefik', yakKoruma: true, ise: [
            ['remzi', 'Kardeşinizin mektep parası bu sabah ödendi. Makbuzu babanıza verdim.', 'kararli'],
          ], degilse: [{ eger: (S) => kapi(S) === 'remzi' && rsart15(S) === 'beyoglu' && b(S).p16_duello !== 'beyoglu', yakKoruma: true, ise: [
            ['ic', 'Beyoğlu şartımı bu masada sormadım. Bardağın kırıldığı gece de cevap almamıştım.', 'mahzun'],
          ] }] }] },
          /* Sarı odadaki güç bu yolda da görünür (c9): baba evetin sahibine sorar */
          /* T29 (b13_16 B16 SÜRÜK-3): nikâh anlatıcıyla geçmez; imamın sorusu ekranda, evet (ya da susturulan ses) bedelli */
          ['an', 'İmam iznini Feride’ye sordu.'],
          { soru: 'İmam cevabımı bekliyor.', secim: [
            { m: '“Evet, kendi isteğimle.”', bayrak: { p16_remzi_riza: 'evet' }, adimlar: [
              ['f', 'Evet, kendi isteğimle.', 'kararli'],
              ['an', 'Nikâh kıyıldı.'],
            ] },
            { m: '“Hayır, Remzi Bey’e varmam.”', etki: { vakar: 2, remzi: -3 }, bayrak: { p16_remzi_riza: 'hayir', p16_son: 'son_hayir', p16_hayir: 'nikah', p16_red: 'imam' }, iz: 'İmamın sorusuna hayır dedin. Nikâh kıyılmadı.', adimlar: HAYIR_NIKAH.concat([{ kart: GECE_KANCA }], kapanis()) },
          ] },
          /* Kapıyı kendi seçen ile babasının verdiği Feride ayrı karşılanır (GPT Tur 23 okur 09);
             S3/S8: karar sözü iç seste kalmaz, kocasının yüzüne söylenir */
          { eger: (S) => kapi(S) === 'remzi', ise: [
            ['f', 'Bu evi ben seçtim Remzi Bey. İçeride susacağıma söz vermedim.', 'kararli'],
          ], degilse: [{ eger: babaSorar, ise: [
            /* Baba sarı odada sordu ve dinlemedi: asıl yara bu (Tur 2 B16-14) */
            ['f', 'Babam sordu, duymadı Remzi Bey. Sesimi evinize ben getiriyorum.', 'mahzun'],
          ], degilse: [
            ['f', 'Babamın sofrasında sesimi geç sordular Remzi Bey. Sizinkinde erken söyleyeceğim.', 'ofkeli'],
          ] }] },
          { gizle: 'remzi' },
          { eger: (S) => b(S).p16_esya === 'madalyon', ise: [
            ['ic', 'Madalyon yakamın içinde. Babamın evinden yanımda çıkan tek şey annem.', 'mahzun'],
          ] },
          /* B5: sandık keşfinin kâğıdı */
          { eger: (S) => b(S).p16_esya === 'kagit', ise: [
            ['ic', 'Annemin satırı koynumda: “Kapını kendin aç.” Gideceğim evde de açacağım.', 'tebessum'],
          ] },
          { gorev: 4 },
          /* T29 (b13_16 B16 ANLATI 10'a 2): Remzi yolunun "öte yanda" sayfası (Beyrut senedi; sırrı çözmez) */
          { ara: { yer: 'Öte yanda · Beyrut', satirlar: [
            'Aynı hafta Beyrut\'ta bir adam, Remzi Bey\'in senedini kasasından çıkarıp vadesine baktı.',
          ] } },
          { ara: { mekan: 'carsi', yer: 'Bir hafta sonra · çarşı', satirlar: [
            /* Remzi'nin değişimi davranışla: gelinin yerine karar verilmiş ev (GPT Tur 23 remzi 10'a) */
            /* T27b (GPT B16-O2): ayrı ev şartı kurulduysa ev de ayrıdır; seçilmiş eşyanın acısı yine sürer */
            (S) => (rsart15(S) === 'ev'
              ? 'Cihangir\'deki ayrı evde de odasını, perdesini, saatini ona sormadan seçmişlerdi. Feride ilk hafta hiçbirine dokunmadı.'
              : 'Remzi Bey\'in konağında odasını, perdesini, saatini ona sormadan seçmişlerdi. Feride ilk hafta hiçbirine dokunmadı.'),
            'İlk gece odasının kapısında sürgü aradı, bulamadı. Ertesi sabah bir tane taktırdı.',
            'Yedinci gün çarşıya inmek için kimseden izin istemedi, gelin hanımın arabası onun dediği yerde durdu.',
          ] } },
        ],
      },

      /* ---------------- 5. Çarşı: Münevver Hanım, pencere haberi, Beyrut'tan bohça ---------------- */
      {
        id: 'p16_carsi', mekan: 'carsi', tetik: 'giris', kosul: (S) => S.gorev === 4, sahne: [],
        adimlar: [
          { muzik: 'huzun' },
          ['an', 'Kumaşçının önündeki kalabalıktan bir yaşmak ayrıldı. Münevver Hanım çarşı ortasında koşmazdı, o gün koştu.'],
          { goster: ['munevver', 'dolu'] },
          ['munevver', 'Kızım!', 'dolu'],
          /* Pencere haberi yalnız Kenan yolunda (yazar kararı A7); Süha yolunda kısa, küskün köprü */
          { eger: muk, ise: [
            ['munevver', 'Kenan haberi aldı. Bu gece yanından ayrılmıyorum.', 'endiseli'],
            ['munevver', 'Sen bana kendi hâlini söyle.', 'dolu'],
          ], degilse: [
            /* Süha yolunda Kenan dönmedi (Selanik'te): haber mektupla, küskün tek satır (A7; Tur 2 B16-12) */
            ['munevver', 'Kenan\'a Selanik\'e yazdım. Cevabı tek satırdı, onu sana okumayacağım.', 'dolu'],
          ] },
          { eger: (S) => b(S).p15_kapi === 'remzi', ise: [
            /* T32 (b13_16 B16 DİYALOG-10): dağınık sözdizimi */
            ['munevver', 'Sen yine benim evladımsın. Kendin seçtin diyorlar; bir sebebin vardır, bilirim.', 'dolu'],
          ], degilse: [{ eger: muk, ise: [
            ['munevver', 'Sen yine benim evladımsın. Sana yaptırdılar, sen yapmadın.', 'dolu'],
          ], degilse: [
            /* Süha yolunda Münevver'in kapısını Feride kendisi kapattı: "yaptırdılar" o emeği siler */
            ['munevver', 'Sen yine benim evladımsın. Oğlumu seçmedin, bu evi de sen seçmedin.', 'dolu'],
          ] }] },
          /* Hatice'ye verilen söz bu sonda da kapanır */
          { eger: (S) => b(S).p16_hatice_soz === true, ise: [
            ['munevver', 'Hatice\'yi bana yolladın, mutfağımda. Sözünü tuttun kızım.', 'gulumser'],
          ] },
          { soru: 'Münevver Hanım\'ın eli elimde.', secim: [
            { m: 'Elini öp: “Beni vefasız bilsin.”', bayrak: { p16_carsi: 'vefasiz' }, adimlar: [
              ['munevver', 'Bilmez. Ben bildirmem.', 'kararli'],
            ] },
            /* T27b (GPT B16-G3): ortak an_carsi resmi el öpmeyi gösterir; iki cevap da aynı hareketle verilir, söz ayrışır */
            { m: 'Elini öp: “Ona söyleyin: inanmadım. Hiçbirine.”', bayrak: { p16_carsi: 'inanmadim' }, adimlar: [
              /* Diyalog T1 (b16 #36): Süha yolunda Kenan Selanik'te, Münevver İstanbul'da */
              { eger: muk, ise: [
                ['munevver', 'Duyacak. Benden duyacak.', 'kararli'],
              ], degilse: [
                ['munevver', 'Selanik\'e yazarım, duyacak. Onu yalnız bırakmam.', 'kararli'],
              ] },
            ] },
          ] },
          /* T27 (SES): doruk vurucu anda. T33 (b13_16 B16 SES): "tek nota" kalıbı çarşıda da kalktı; an kendi sesiyle */
          { cizim: 'an_carsi' },
          /* S3 (c10): doruğun ardından Feride acındırılmaz; ağlar ama dimdik yürür */
          ['an', 'Münevver Hanım kalabalığa karıştı. Feride gözünü silmedi, kumaşçının tezgâhına kendisi yürüdü.'],
          { gizle: 'munevver' },
          /* T27 (ANLATI): birazdan açılacak kartı önceden söylemez */
          ['an', 'Kumaşçı tezgâhın altından bir bohça çıkardı. Düğümü yabancı bir eldendi.'],
          { kart: 'Bohçada bir kâğıt', alt: '“Behiye Hanım\'ın kızına. Remzi Bey\'in borcu bu ipekle ödenmez. —Şebib”' },
          { soru: 'Bohçanın düğümü elimde.', secim: [
            { m: 'Bohçayı aç.', bayrak: { p16_sebib: 'ac' }, adimlar: [
              'Lacivert bir ipek, üstünde sarı yollar. Beyrut işi.',
            ] },
            { m: 'Bohçayı kumaşçıya geri ver.', etki: { vakar: 1 }, bayrak: { p16_sebib: 'geri' }, adimlar: [
              ['ic', 'Bohçayı geri verdim. Kocamın borcu için benden söz alamazlar.', 'ofkeli'],
            ] },
          ] },
          { kart: KANCA.son_remzi },
        ].concat(kapanis()),
      },
    ],

    // Defter üç kısa cümle (her biri en çok 20 kelime): ne yaptım / sonum / 2. sezonun sorusu
    sonNotu: function (S) {
      var f = S.bayrak, c = [];
      // Defter gerçek eylemi yazar: hiç koz açılmadıysa "açtım" denmez (GPT Tur 23 remzi 16C)
      var KOZ_HAMLE = ['dugme', 'madam', 'hatice', 'kanit', 'kayit', 'suha', 'yuz'];
      var actim = ilkKoz(S) || [f.p16_b2, f.p16_b3].some(function (h) {
        return KOZ_HAMLE.indexOf(h) >= 0 && (h !== 'suha' || suhaKonusur(S)) && (h !== 'kayit' || kayitGuclu(S));
      });
      // GPT T26 (16 oynanış 10'a 3): hazırlığın karşılığı açıkça bağlanır (babayı kapıya getiren kız)
      c.push(f.p16_baba === 'dondu' ? (babaGelir(S) ? 'Babamı sarı odanın kapısına ben getirttim, Perihan Hanım\'ın ipini onun kulağı önünde kopardım.'
          : 'Sarı odada Perihan Hanım\'ın ipini babamın önünde kopardım.')
        : actim ? 'Sarı odada bildiklerimi ortaya döktüm, babam yine Perihan Hanım\'ın gözyaşına baktı.'
          : 'Sarı odada bildiklerimi söylemedim, babam Perihan Hanım\'ın gözyaşına baktı.');
      c.push({
        son_kavusma: f.p16_secim === 'gizli' ? 'Münevver Hanım\'ın arabasıyla Leyla\'ların konağında Kenan\'la nikâhlandım, babama kapısının altından kendi satırımı bıraktım.'
          : 'Babamın rızasıyla Kenan\'la nikâhlandım, bu kez saklanmadan.',
        son_umutlu_ayrilik: 'Söz yeniden bağlandı, Kenan İstanbul’da beklerken ben Münevver Hanım’la Beyrut’a gidiyorum.',
        /* Kapısız yolda evet babanın hükmü (GPT T24b 16-2): defter onu Feride'nin rızası diye yazmaz */
        /* GPT T26 (öncelik 5): düğmenin akıbeti (bu bölümün seçimi) defterde kaybolmaz */
        son_tehlikeli_evet: (kapi(S) === 'yok' ? 'Babamın kararına şartımla evet dedim, Süha Bey konaktan çıktı, '
          : 'Süha Bey\'e şartımla evet dedim, konaktan çıktı, ') +
          ({ sakla: 'düğmesi nikâha dek koynumda.', baba: 'düğmesi babamın çekmecesinde rehin.' }[f.p16_dugme] || 'Perihan Hanım\'ın bağı koptu.'),
        /* Cemil T27: bağımsız hayır */
        /* T28b: güçsüz yüzleşmede baba sözünü geri almaz; Remzi gecesindeki hayırda nikâh kıyılmaz */
        son_hayir: ['gece', 'nikah'].indexOf(f.p16_hayir) >= 0 ? (f.p16_hayir === 'nikah' ? 'İmamın sorusuna hayır dedim; Remzi Bey’le nikâh kıyılmadı, babam yanımda durmadı.' : 'Babamın Remzi Bey\'e verdiği söze hayır dedim, nikâh kıyılmadı, babam yanımda durmadı.')
          /* T29c (O16-1): güçlü yüzleşmenin bağımsız hayırı; gecenin "babam yanımda durmadı"sı kopyalanmaz */
          : f.p16_hayir === 'bagimsiz' ? (f.p16_secim === 'kal' ? 'Babam bu kez sözümü dinledi, ben de kimseyle söz bağlamadan İstanbul’da kaldım.'
            : 'Babam sözümü dinleyince Beyrut’a kendi işim için gitmeyi seçtim.')
          : f.p16_baba === 'dondu' ? 'Babam hayırımı duyup sözünü geri alınca Süha Bey konaktan çıktı.'
            : 'Süha Bey\'e babamın önünde hayır dedim, babam sözünü geri almadı ama Süha Bey konaktan çıktı.',
        /* Doğrulama v65 (dal okuması): Remzi kapısını kendisi seçen kızın defteri ayrı başlar */
        son_remzi: (kapi(S) === 'remzi' ? 'Remzi Bey\'in kapısını kendim seçtim ve nikâhlandım, ' : 'Remzi Bey\'le nikâhlandım, ') +
          (muk(S) ? 'Kenan’ı çarşıda annesinden sordum.'
            : 'çarşıda Münevver Hanım bana yine “evladım” dedi.'),
      }[f.p16_son] || 'Bu evden kendi adımla çıktım.');
      // Defterin son cümlesi soru değil, son duygu ve 2. sezonun ipliği (Sürükleyicilik T1 S8; sezon merceği "16 defterin 16'sı soruyla bitiyor")
      c.push({
        son_kavusma: 'Beyrut\'tan ikimizi çağıran Şebib annemin adını biliyor.',
        son_umutlu_ayrilik: 'Beyrut iskelesinde beni annemin emanetini saklayan bir ev bekliyor.',
        son_tehlikeli_evet: { baba: 'Sahte mektubu yazan adamla evleneceğim, sabah onu babamın yanında karşıladım.',
          avlu: 'Sahte mektubu yazan adamla evleneceğim, sabah onu bütün konağın gözü önünde karşıladım.' }[f.p16_sabah]
          || 'Sahte mektubu yazan adamla evleneceğim, bildiğimi o bilmiyor.',
        son_hayir: ['gece', 'nikah'].indexOf(f.p16_hayir) >= 0 ? 'Kapımın altındaki zarfta annemin adını bilen biri var: Şebib.'
          : f.p16_hayir === 'bagimsiz' ? 'Telgraftaki o adamı kendi adıma araştıracağım: Şebib.'
          : ({ baba: 'Sahte mektubu yazan adama hayır dedim, sabah onu babamın yanında karşıladım.',
            avlu: 'Sahte mektubu yazan adama hayır dedim, sabah onu bütün konağın gözü önünde karşıladım.' }[f.p16_sabah]
          || 'Sahte mektubu yazan adama hayır dedim, bildiğimi o bilmiyor.'),
        son_remzi: 'Bohçadaki kâğıtta annemin adı vardı.',
      }[f.p16_son] || 'Beyrut\'tan gelen bir ad beni bekliyor: Şebib.');
      return c.join(' ');
    },
    anIpuclari: {
      an_kavusma: 'Kenan yolunda: babanın rızasıyla nikâh, duvağı kendin kaldırırsan.',
      an_kavusma_o: 'Kenan yolunda: rızalı nikâhta duvağı Kenan kaldırırsa.',
      an_kavusma_gizli: 'Kenan yolunda: Münevver Hanım\'ın arabasıyla Leyla\'ların konağında gizli nikâh.',
      an_hayir: 'Süha yolunda: selamlıkta Süha Bey\'e de hayır dersen.',
      an_hayir_gece: 'Remzi Bey\'e varılacak gece babana desteksiz hayır dersen.',
      an_ayrilik: 'Kenan yolunda: sabah avluda, kafesin aralığından sokağın başına bakan kız.',
      an_iki_kagit: 'Süha yolunda: sahte mektup elindeyken hekimin boş odasında iki kâğıt.',
      an_iki_kagit_musvedde: 'Süha yolunda: sahte mektup elinde değilken hekimin mangalındaki müsvedde.',
      an_carsi: 'Üçüncü kapıdan geçen gelin, çarşıda Münevver Hanım\'la.',
    },
    /* T29c (GPT özet P8): finalin anları sona özel; seçilen son dışındaki anlar (ret ya da başka rota) "kaçırdığın an" diye
       listelenmez (motor anUygun) */
    anUygun: {
      an_kavusma: function (S) { return S.bayrak.p16_son === 'son_kavusma'; },
      an_kavusma_o: function (S) { return S.bayrak.p16_son === 'son_kavusma' && S.bayrak.p16_secim !== 'gizli'; },
      an_kavusma_gizli: function (S) { return S.bayrak.p16_son === 'son_kavusma' && S.bayrak.p16_secim === 'gizli'; },
      an_ayrilik: function (S) { return S.bayrak.p16_son === 'son_umutlu_ayrilik' || bagimsiz(S); },
      an_hayir: function (S) { return S.bayrak.p16_son === 'son_hayir' && S.bayrak.p16_hayir === 'hayir'; },
      an_hayir_gece: function (S) { return geceHayir(S); },
      an_iki_kagit: function (S) { return S.bayrak.p16_son === 'son_tehlikeli_evet' || (S.bayrak.p16_son === 'son_hayir' && S.bayrak.p16_hayir === 'hayir'); },
      an_iki_kagit_musvedde: function (S) { return S.bayrak.p16_son === 'son_tehlikeli_evet' || (S.bayrak.p16_son === 'son_hayir' && S.bayrak.p16_hayir === 'hayir'); },
      an_carsi: function (S) { return S.bayrak.p16_son === 'son_remzi'; },
    },
    /* T29: iki kâğıt anının iki türü (sahte mektup elde / müsvedde) aynı an; biri açıldıysa öbürü "kaçırılan" sayılmaz */
    anRet: {
      an_iki_kagit: function (S) { return (S.cizimler || []).indexOf('an_iki_kagit_musvedde') >= 0 || S.bayrak.p14_kagit !== true; },
      an_iki_kagit_musvedde: function (S) { return (S.cizimler || []).indexOf('an_iki_kagit') >= 0 || S.bayrak.p14_kagit === true; },
    },
    /* Sıradaki bölüm yok: pilot sonu "Sırada" kısmında 2. sezon kancası (motor.js, kanca işlevse durumla çağırır).
       T27 (t27_b13_16 SÜRÜK-5): son kartı yinelemez; sona özel "gelen kişi" satırı (SIRADA), en çok 12 kelime, "Şebib"
       geçer. benzet16'nın "kart = sırada" çapası güncellenmeli (notlar/denetim/t27_ortak_istek_b13_16.md) */
    siradaki: { ad: 'İkinci sezon', kanca: function (S) {
      if (geceHayir(S)) return GECE_SIRADA;
      if (bagimsiz(S)) return BAGIMSIZ_SIRADA;
      return SIRADA[S.bayrak.p16_son] || 'İkinci sezon Beyrut\'tan gelen bir adla açılacak: Şebib.';
    } },
  };
})();

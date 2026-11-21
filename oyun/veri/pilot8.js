/* =========================================================================
   PİLOT — YENİ BİÇİMDE 8. BÖLÜM: ADA GECESİ  (bölüm no 108)  · sezonun ortası
   İskelet: notlar/bolum1_pilot_iskelet.md (8. bölüm: Ada gecesi, çamlık, mehtap; kanca: "Sabah iki
     yalan"). Ad, 7. bölümün siradaki.ad alanından ("Ada Gecesi").
   Tek soru (GPT Tur 16 önerisi): "Sabah anlatılacak hikâyeyi ben mi kuracağım, başkaları mı?"
   Romandan (s. 128–134): misafir gece alıkonur; "suçu bir başkasının üzerine atmak"; sabah üvey anne
     başını mendille sıkmış; misafir sekiz buçuk vapuruyla gider; hekimin "itirafı" (selamlık
     dolabından bir şişe konyak, hizmetçi getirmiş, iki saatte bitirmiş, sendeleyerek çıkmış, "kendini
     bitirir"); üvey annenin "kapı aralığından baktım, oradaydı"; hizmetçinin "Ben de şaşırmıştım!";
     babanın "O sarhoşmuş, ya sen neydin?". Misafirin "Yüzüne bile bakmadım"ı (s. 308) burada
     "Odamdaydım" susuşuna çevrildi. Kitaptaki "Bu senindir dediler" (s. 271–272) misafir odasında.
   Öbür kaynaklar: Aşk-ı Memnu (mehtapta çamlık, "bir küçük evet", kaşın ucuna öpücük); Zehra (mehtap
     âleminde havai fişek); Güzide Sabri (Büyükada, ayın değmediği kuytu).
   Oyun için ek: Remzi'nin yüz yirmi fişeği (çamlığı bir an gündüze çevirir: yakınlaşmanın bedeli),
     mühürlü şişe, saat ya da kurdele, selamlıkta sahne gibi dizilmiş boş şişe, eşiğe konmuş toka,
     Perihan'ın kapısında sabahın ezberi, iskelede telgraf, Remzi'nin Paris dürbünü.
   Vakitler plan modunda yürünür (plan: 'ada', veri/plan_ada.js; kurallar GEZINME_SAFAK / GEZINME_KAHVE).
     Köşk iki katlı (Cemil, 16 Kasım 2026): misafir odası alt katta, selamlığın yanında; Feride'nin odası
     üst katta (Kenan "tam altımda"; penceresi bahçeye alçak, çamlığa bakar).
   Doğrusal bölüm (dogrusal: true). Zaman: 7. bölüm gecesinin devamı (gece) → çamlık (gece) → merdiven
     ve gece serbest vakti (gece) → sabah odası ve sabah serbest vakti (gündüz) → bahçede kahve (gündüz).
     Her yolda 14 karar (kıyafet ekranı ve iki serbest vaktin mini seçimleri dahil; oda seçimi hariç).
   Önceki bölümlerden okunanlar (değiştirilmez): p_rota, p7_son, p7_kapi, p7_tavan, p7_davet, p7_soz,
     p7_yasmak, p7_borc, p7_gece, p7_sofra, p7_remzi, p7_itiraf, p7_hizmet (Tur 22 ek: sefik = Şefik Kenan'ın
     yanında; sus = Şefik benimle, misafire Hatice baktı; 'hasta' artık yazılmaz), p7_v_dolap ('centik': kahvede
     tanınan işaret), p7_v_goren ('suha': dolabın önünde gerçekten görüldüm), p7_v_hatice ('soz': anahtar için
     Hatice'ye sabah sözü), p6_son, p6_yakin, p6_ada,
     p6_topuk, p6_remzi (valsin "nişan bozulursa" koşulu), p4_pakt, p4_remzi; kozlar ('Hatice'nin
     itirafı', 'Perihan ile Süha', 'Nabi Bey'in senedi', 'İkinci şişe', 'Eczacının defteri'); giyili.
   Bayraklar: p8_cik (Kenan: sise/emanet/asma/tavan/bekci/pencere/hatice/lamba; Süha: once/saat/kol/hesap
     — GPT T26: 'hesap' = önce şişeyi sordu; yalnız bu bölümde anılır, 9. bölüm 'sise'/'emanet' dışını okumaz),
     7. bölümden ayrıca p7_gece 'bekci' (GPT T26: kapıdaki bekçi uyandırıldı; çamlıkta okunur),
     Kenan yolu: p8_masal (ad/kitap/kapi; Tur 30'a dek 'simit'), p8_dokun (sal/ceket/vals/el), p8_opus (sen/evet/kas),
       p8_hatira (saat/kurdele/yok), p8_plan (git/kal/anlat), p8_suha (sor/tehdit/gec);
     Süha yolu: p8_ad (ortak/is/hic; Tur 18: 'is' = "kendini bitirir" deme şartı, kahvede uygulanır),
       p8_dokun (igne/el/geri), p8_opus (sen/evet/hayir),
       p8_pencere (bak/kos/tut), p8_pazar (kabul/sart/ret), p8_kenan (kal/git);
     ikisi: gece vakti (Tur 27: hak 2) p8_dekor (al/birak), p8_toka (al/birak; kahvede acti/sakla), p8_kapi
       (dinle/tiklat), p8_ezber (true); Tur 27: Süha yolunda p8_son 'sise' boş şişeyle de seçilir ("gece selamlıktaydım");
       p8_kanit (itiraf/sise/defter/bardak/acima/yok; Tur 18: not = 5. bölüm etiket notu, prova = provayı
       dinleyen kız Hatice'yle yalnız konuşur → p8_hatice soz/ret, sözü kahvede bozarsa 'bozdu'),
       p8_kazanim (hatice/sise; Tur 18: surup/ayri/desteksiz), sabah vakti p8_telgraf (cek/yok), p8_kitap
       (yaz/kapa/al), p8_remzi (fiyat/sahit/sus/ret), p8_ilk (soru/sise/prova/goz/sus; eski kayıtta 'ezber'),
       p8_prova (Tur 18 ek: acik = Hatice'nin sözünden sonra provayı açtım, yalniz = korunan Hatice'yi yalnız
       dinlettim, sus; yalnız gece provayı dinleyen kızda sorulur — o yolda karar sayısı bir artar),
       p8_son (Kenan: dogru/koz/sus; Süha: sise/gecmis/savun/sus).
   Tur 29 (t29_b05_08 B8): yeni değerler p8_dokun 'kendi' (Kenan: şalı kendi düzeltir, el teması yok), p8_ad 'adsiz'
     (Süha: Kenan'ın adını hikâyeden çıkartır; kahvede adı Perihan koyar), p8_ilk 'bos' (Kenan yolunda boş şişe sofrada).
     Yeni bekleyen anlar: an_asma_kenan (resmi gelene kadar an_asma resmini taşır), an_mehtap_ayri (resimsiz, sessiz atlanır).
   Oynanış T1 Aşama B (18 Kasım 2026): keşif p8_k_mendil (kahvede Perihan'ın kuru mendili; deftere delil, kahvedeki
     'sus' seçeneklerinde okunur). Koz isteyen seçenekler kozGerek ile görünür (kanıt, tehdit, son karar); sabah açılan
     kanıt harcanmaz, son karardaki koz harcanır. Okunan grup içi eski bayrak: p7_v_camlik (kozalak çamlıkta, el sallama
     kahvede Remzi'de). Gizli değişkenler: baba_guven ≥ 60 ('dogru' ve 'savun' hükmünde), calibe_suphe ≥ 4 (şafakta
     Perihan'ın kapısı), ≥ 8 (sabah iskelesi) riskli geçitte gözcü ve bedel.
   Tur 27b (ortak/gpt_t27_ara_7_8.md): an_asma kaydı bu dosyada (kahve doruğunda Feride'nin sesli hamlesinden sonra);
     Süha yolunda çamlık davetini reddetme (p8_cik 'red': kısa kıyı sahnesi, RED_SAHNE; p8_opus 'hayir', p8_dokun 'geri');
     7. bölüm 'in' sonu merdivenden sonra sofada sürer; ikinci şişe adıyla; Kenan'ın kalması seçenekte açık; vals duyulur.
   Yeni kozlar: 'Mühürlü şişe' (Kenan yolu, tepsi bendeyse), 'Boş şişe' (gece selamlık), 'Hatice'nin
     tokası' (gece misafir kapısı), 'Remzi Bey'in dürbünü' (Kenan yolu, Remzi şahitse). Kanıtlardan
     yalnız biri bir kişiye açılır (sabah odası); son kararda açıkça kullanılan koz harcanır.
   Küçük soru (7. bölümden; bu bölümde kapanır): suç kimin üstüne atılacak? → misafirin; "bir başkası"
     Kenan, aracı Hatice. Yeni soru/bedel: babam hangi yalana inanacak; çamlıkta bizi kim gördü?
   Not: görünen metinde yalnız yeni adlar; konuşan kimlikleri (calibe, reftar, mukaddem, sai, f…) eski.
   ========================================================================= */
window.BOLUMLER = window.BOLUMLER || {};

(function () {
  var V = window.OYUN_VERISI;
  // Yeni mekânların kendi görseli gelene kadar en yakın eski fon (gece mekânları gece fonlarına)
  /* Görsel T1 (gorsel_t1_fon P0-1): mehtaplı çamlık köşkün iç sofasında görünüyordu; ada_camlik_gece çizilene kadar
     gündüz çamlığı (en azından yer doğru) */
  var YEDEK = { ada_camlik_gece: 'ada_camlik', ada_oda: 'fazila_oda', ada_selamlik: 'buyuk_salon',
    ada_misafir: 'suha_oda', ada_kapi_perihan: 'ada_sofa', ada_iskele: 'ada_bahce', ada_duvar: 'ada_bahce' };
  Object.keys(YEDEK).forEach(function (id) {
    var m = V.mekanlar[id];
    if (m && !m.arkaplan && V.mekanlar[YEDEK[id]]) m.arkaplan = V.mekanlar[YEDEK[id]].arkaplan;
  });
  // Tur 18 (öneri 6): çamlık anının adı ("Ayın değmediği yerde bir soru") artık oyun_verisi.js'te.
  /* Tur 27b: kahve doruğunun resmi (an_asma) geldi; oyun_verisi.js'e taşınana kadar kaydı burada (varsa dokunulmaz).
     gorseller.js bu dosyadan önce yüklendiği için temel resmin yolu burada bağlanır; çeşitler ORTAK kaydıyla. */
  var YENI_AN = { an_asma: { ad: 'Asmanın altında, fincan soğumadan', alt: 'Ada Gecesi' } };
  Object.keys(YENI_AN).forEach(function (id) {
    ['', '_nisan_gosterisli', '_nisan_yadigar'].forEach(function (c) {
      if (V.cizimler && !V.cizimler[id + c]) V.cizimler[id + c] = { ad: YENI_AN[id].ad, alt: YENI_AN[id].alt };
    });
    if (V.cizimler && V.cizimler[id] && !V.cizimler[id].gorsel) V.cizimler[id].gorsel = 'gorsel/odul/g_odul_' + id + '.webp';
  });
  /* Tur 28b (GPT 8-O1, 8-G2; kök 8): yerinden inmeyen ret yolunun anları. Resmi üretimde (t28b_uretim_b05_08.md); kayıt
     resimsiz, motor resmi olmayan anı sessizce atlar. Resim gelince ORTAK `gorsel` alanını bağlar. */
  var BEKLEYEN_AN = {
    an_pencere_ret: { ad: 'Pencerede kalan kız, aşağıda bir el', alt: 'Ada Gecesi · Süha' },
    an_merdiven_ret: { ad: 'Merdivenin başında, inmeyen adım', alt: 'Ada Gecesi · Süha' },
    /* Tur 29 (t29_b05_08 B8 görsel 1): Kenan sofradayken kahve doruğu (an_asma'da Kenan yok). Resmi üretimde
       (t29_uretim_b05_08.md); gelene kadar temel an_asma gösterilir */
    an_asma_kenan: { ad: 'Asmanın altında, fincan soğumadan', alt: 'Ada Gecesi · Kenan' },
    /* Tur 29 (B8 oynanış 1): şalını kendi düzeltip ellerini veren değil, "yalnız ay" diyen kızın anı (el teması yok) */
    an_mehtap_ayri: { ad: 'Aramızda bir karış ay ışığı', alt: 'Ada Gecesi · Kenan' },
  };
  /* Tur 30 (t30 B8 görsel 2): "Ben öptüm" ('sen') ile "Evet" aynı resmi görüyordu; inisiyatif resimde yoktu. Kendi resmi
     (an_opucuk_sen) üretimde (b8_t30_uretim). ORTAK gorseller.js'e bağlayınca (V.cizimResimleri.an_opucuk_sen) kayıt,
     adım, ipucu ve anRet kendiliğinden ona geçer; o zamana kadar 'sen' dalı an_opucuk'u gösterir (doruk resimsiz kalmaz). */
  var OPUCUK_SEN_HAZIR = !!(V.cizimResimleri && V.cizimResimleri.an_opucuk_sen);
  if (OPUCUK_SEN_HAZIR) BEKLEYEN_AN.an_opucuk_sen = { ad: 'Önce ben öptüm', alt: 'Ada Gecesi · Kenan' };
  var OPUCUK_SEN = OPUCUK_SEN_HAZIR ? { cizim: 'an_opucuk_sen' } : { cizim: 'an_opucuk' };
  Object.keys(BEKLEYEN_AN).forEach(function (id) {
    ['', '_nisan_gosterisli', '_nisan_yadigar'].forEach(function (c) {
      if (V.cizimler && !V.cizimler[id + c]) V.cizimler[id + c] = { ad: BEKLEYEN_AN[id].ad, alt: BEKLEYEN_AN[id].alt };
    });
  });
  /* Tur 27b (GPT sözleşme 5): yalnız temel (fildişi) resmi olan an pembe/mavi elbisede gösterilmez; çeşidi gelince açılır */
  var anUyar = function (S, id) {
    var k = { nisan_gosterisli: ['nisan_gosterisli'], nisan_yadigar: ['nisan_yadigar'], ziyaret: ['ziyaret', 'nisan_yadigar'] }[S.giyili];
    return !k || k.some(function (c) { var x = (V.cizimler || {})[id + '_' + c]; return !!(x && x.gorsel); });
  };
  // Kahve doruğu: Feride ayakta, babam fincanı dudağında, Perihan Hanım mendilinde (genel yüzleşme karesi; şişe yok)
  /* Tur 29 (B8 görsel 1): Kenan sofradaysa an_asma_kenan (Kenan masanın ucunda) */
  /* GPT T29 G8-2: Kenansız an_asma resmini an_asma_kenan kimliğine taşıyan yedek kaldırıldı (an_asma_kenan temel resmi bağlı;
     pembe/mavi türleri gelene kadar motor temel Kenanlı kareye düşer) */
  /* Tur 29: an_asma'nın üç kıyafet türü bağlı; anUyar koruması (hep doğru) kalktı. an_asma_kenan'ın pembe/mavi türleri
     üretimde (t29_uretim_5_8_ek.md); gelene kadar motor Kenanlı temel kareye düşer */
  var ASMA = { eger: function (S) { return kenanVar(S); }, ise: [{ cizim: 'an_asma_kenan' }], degilse: [{ cizim: 'an_asma' }] };
  // Tur 27b (GPT B8-O1, sözleşme 1): Süha yolunda çamlık davetini reddeden kız (p8_cik 'red')
  var red = function (S) { return S.bayrak.p8_cik === 'red'; };
  // Tur 28b (GPT 8-O1): ret yolunda konum. 'burada': Feride yerinden ayrılmaz; 'kiyi': çamlığın ilk ağacına kadar iner
  var burada = function (S) { return S.bayrak.p8_yer === 'burada'; };
  // GPT T29 O8-1: Kenan yolunda gece evden çıkmama (çamlık, öpücük, hatıra yok; kapılar tutulur)
  var evde = function (S) { return S.bayrak.p8_cik === 'evde'; };
  // 7. bölüm Feride'yi merdivende/aşağıda bıraktıysa ('in', 'uyar') gece sofanın eşiğinde sürer; öteki yollarda penceresinde
  var asagida7 = function (S) { return S.bayrak.p7_son === 'in' || S.bayrak.p7_son === 'uyar'; };

  var ITIRAF = 'Hatice\'nin itirafı', GECMIS = 'Perihan ile Süha', SENET = 'Nabi Bey\'in senedi';
  var BARDAK = 'İkinci şişe', DEFTER = 'Eczacının defteri';
  var SISE = 'Mühürlü şişe', BOS = 'Boş şişe', TOKA = 'Hatice\'nin tokası', DURBUN = 'Remzi Bey\'in dürbünü';
  var b = function (S) { return S.bayrak; };
  var muk = function (S) { return S.bayrak.p_rota === 'mukaddem'; };
  var var_ = function (S, k) { return (S.kozlar || []).indexOf(k) >= 0; };
  /* Oynanış T1 Aşama B (B1): koz isteyen seçenekler görünür (kozGerek, ◆); kosul yine yazılır (eski benzetimler
     yalnız kosul'a bakar). Kozu olmayan kız kilitli seçeneği görür. B6: gizli değişkenler okunur. */
  var kozVar = function (k) { return function (S) { return var_(S, k); }; };
  var suphe = function (S) { return (S.v && S.v.calibe_suphe) || 0; };
  var babaGuven = function (S) { return ((S.v && S.v.baba_guven) || 0) >= 60; };
  var nimetVar = function (S) { return S.bayrak.p6_ada === 'nimet'; };
  var son7 = function (S) { return S.bayrak.p7_son; };
  // Sabah kahvesinde Kenan sofrada mı?
  var kenanVar = function (S) { return muk(S) ? S.bayrak.p8_plan === 'kal' : S.bayrak.p8_kenan === 'kal'; };
  var giy = function (S) { return S.giyili === 'nisan_gosterisli' ? 'pembe' : (S.giyili === 'nisan_yadigar' ? 'mavi' : 'sade'); };
  // Kahvede kanıtın bıraktığı kalıcı küçük kazanım (Tur 17): önce sabah açılan kanıt, sonra kahvedeki ilk hamle
  //   'hatice' → babam Hatice'nin tek başına şahitliğini kabul etmez; 'sise' → iki şişenin hesabını ister.
  // Tur 18: 'surup' → kendi etiket notum: babam iki haşhaş şişesinin hesabını ister (konyak ayrı kalır);
  //   'desteksiz' → sabah Hatice'yi korudum, ezberini söylemedi: Perihan'ın "gördüm"ü tek başına kalır;
  //   'ayri' → kahvede provayı herkese açtım: babam şahitleri ayrı dinler (Perihan dinlendiğini anlar).
  // Tur 18 ek (öneri 1): prova Hatice'nin sözünden hemen sonra açılır (p8_prova acik/yalniz/sus). Sabah hakkını
  //   başka kanıta harcayan da açabilir; o zaman o kanıtın kazanımı kalır, ayrı dinleme p8_prova'da tutulur.
  var provaAcik = function (S) { return S.bayrak.p8_prova === 'acik' || S.bayrak.p8_prova === 'yalniz'; };
  var kazanim = function (S) {
    var f = S.bayrak;
    if (f.p8_kanit === 'defter' || f.p8_kanit === 'itiraf') return 'hatice';
    if (f.p8_kanit === 'sise') return 'sise';
    if (f.p8_kanit === 'not') return 'surup';
    if (f.p8_kanit === 'prova' && f.p8_hatice !== 'ret') return 'desteksiz';
    if (f.p8_ilk === 'sise') return 'sise';
    if (f.p8_prova === 'acik') return 'ayri';
    return null;
  };
  // Sabah Hatice'yle yalnız konuşup şartını kabul ettiysem kahvede ezberini söylemez
  var haticeKorur = function (S) { return S.bayrak.p8_kanit === 'prova' && S.bayrak.p8_hatice !== 'ret'; };
  // Hatice'nin gece gerçekten yaptığı (kahvede ezber yerine anlattığı)
  /* Tur 30 (t30 B8 diyalog 10'a 2): doğruyu söyleyen Hatice ezber dilinden ayrışır; kırık, kesik */
  var HATICE_DOGRU = {
    tepsi: 'Tepsiyi… merdivende bıraktım efendim. Girmedim; kimseyi görmedim.',
    bekci: 'Merdivende bekçi vardı efendim… Döndüm; odaya girmedim.',
    izle: 'Eşikte oturdum efendim. Kapı… açılmadı; girmedim.',
  };
  // Tur 18 (madde 7): 5. bölümde Kenan'a yazılan not ulaştıysa Kenan uyarılmış gelir
  var notUlasti = function (S) { return S.bayrak.p5_fev === 'kenan' && S.bayrak.p5_sise !== 'kendi'; };
  // Ada planının ışık seçimi (veri/plan_ada.js); plan yüklenmemişse null (eski fonlar geçerli)
  var adaFon = function (id, isik) { var P = window.PLANLAR && window.PLANLAR.ada; return (P && P.fon) ? P.fon(id, isik) : null; };
  /* Sürükleyicilik T1 (S1): yola özel kanca işlevdir (motor typeof 'function' ile çağırır). Eski benzetim kancayı
     metin sanıp kelime sayar; işleve varsayılan metnin replace'i eklenir, motor bunu kullanmaz. */
  /* Tur 30 (t30 B8 anlatı 1): "Sabah iki yalan söylendi" kalıbı varsayılan kancadan da kalktı */
  var KANCA_VARSAYILAN = 'İlk gerçeği babamın masasına ben koyacağım.';
  var kancaIslev = function (f, metin) { f.replace = function () { return String.prototype.replace.apply(metin, arguments); }; return f; };

  /* ---- Gezinme katmanı (plan modu, veri/plan_ada.js; notlar/gezinme_tasarimi.md). Yürümek bedava, • iş 1 vakit.
     Şafaktan önce (sofadan başlar; "Ev uyumuyor; ince duvarların ardında herkes birini dinliyor"): Perihan
     Hanım'la Hatice odada prova ediyor, babam odasında uyuyor (kapısı aynı koridorda), merdivenin başında
     Süha Bey ya da Kenan. Riskli, gözcüsüz: Perihan Hanım'ın kapısı (koridor babamın kapısının önünden geçer;
     işitilme), selamlığın perdesi (erkekler tarafı), iskele, çamlık, bahçe duvarı (yalnız gidilmez).
     Kahveden önce (odadan başlar; babam bahçede seslenir): ★ asmanın altı (ada_duvar: "Kahve bahçede, asmanın
     altında"); iskeleye bahçeden geçilir, ★ bahçe olsaydı iskeleye varılamazdı. Riskli, gözcüsüz: selamlığın
     perdesi (erkekler kahvede), iskele ve çamlık (yalnız gidilmez). Bedel uydurulmadı: yalnız iz satırı. */
  var yalniz = function (sonuc, iz) { return { gozcu: null, uyari: 'yalnız gidilmez', sonuc: sonuc, iz: iz }; };
  var GEZINME_SAFAK = {
    plan: 'ada',
    riskli: {
      /* Oynanış T1 B6: Perihan Hanım "tetikte"yse (calibe_suphe ≥ 4) kapısının ardında ayak sesi bekler; ezberi
         dinlemenin bedeli olur (geçişte görülmek: kuşku +1) */
      /* Tur 27 (B8 oynanış 1): gece vakti iki iş; kıtlık bedele döner. Perihan Hanım'ın kapısına uzanan koridor hep
         duyulur (gözcü her zaman Perihan Hanım, bedel kuşku +1); tetikteyse ayak sesini bekler. */
      /* Tur 29 (t29_b05_08 B8 oynanış 4): Perihan Hanım'ın kapısı az önce zorunlu sahne olarak oynandı (ezber); vakitte
         yeniden gidilip aynı iz yinelenmez, riskli listeden çıktı */
      ada_selamlik: { gozcu: (S) => (suphe(S) >= 4 ? 'Perihan Hanım' : null), uyari: (S) => (suphe(S) >= 4 ? 'Perihan Hanım tetikte' : 'erkekler tarafı, perde'),
        /* Tur 31 (t31_b05_08 B8 sürük 1): şafak vaktinde gözcü */
        bedel: { etki: { calibe_suphe: 1 }, ic: 'Merdivenin başında bir terlik durdu. Gördü mü, bilmiyorum.' },
        sonuc: 'Alt katın erkeklere ayrılmış yanı; arada yalnız bir perde. Ev uyuyor.',
        iz: 'Gece yarısı selamlığın perdesini araladım. Kimse görmedi.' },
      ada_iskele: yalniz('Ada\'da genç kız iskeleye yalnız inmez; gece hiç inmez.',
        'Karanlıkta iskele yokuşunu yalnız indim. İskele fenerleri yanıyordu; bekleyen tek yolcu yoktu.'),
      ada_camlik: yalniz('Gece çamlığa yalnız çıkılmaz.',
        'Çamlığa bir daha çıktım. Ay inmişti, kimse yoktu.'),
      ada_duvar: yalniz('Bahçe duvarının ardı yol; gece duvarın dibine yalnız gidilmez.',
        'Gece duvarın dibine kadar yürüdüm. Yol karanlıktı, kimse geçmedi.'),
    },
  };
  var GEZINME_KAHVE = {
    plan: 'ada',
    riskli: {
      ada_selamlik: { gozcu: null, uyari: 'erkekler tarafı, perde',
        sonuc: 'Alt katın erkeklere ayrılmış yanı; arada yalnız bir perde. Erkekler bahçede, kahvenin başında.',
        iz: 'Selamlığın perdesini araladım. Erkekler bahçedeydi, kimse görmedi.' },
      /* Oynanış T1 B6: Perihan Hanım "peşinde"yse (calibe_suphe ≥ 8) Hatice'yi bahçe kapısına koymuştur */
      ada_iskele: { gozcu: (S) => (suphe(S) >= 8 ? 'Hatice' : null),
        uyari: (S) => (suphe(S) >= 8 ? 'Hatice bahçe kapısında' : 'yalnız gidilmez'),
        sonuc: 'Ada\'da genç kız iskeleye yalnız inmez.',
        bedel: { etki: { calibe_suphe: 1, itibar: -1 }, ic: 'Hatice bahçe kapısından baktı. Perihan Hanım iskeleye indiğimi duyacak.' },
        iz: 'Sabah serinliğinde iskele yokuşunu yalnız indim. Yolda kimse yoktu.' },
      ada_camlik: yalniz('Ada\'da çamlığa yalnız çıkılmaz.',
        'Sabah çamlığa yalnız çıktım. Gece burada olanı ağaçlardan başka bilen yok.'),
    },
  };

  /* Oynanış T1 B5: kahvede "Sus. Perihan Hanım'ın yüzünü oku." seçeneği; mendil keşfine (p8_k_mendil) bakan kız
     baş ağrısının bahane olduğunu okur */
  var MENDIL_SUS = { eger: function (S) { return !!S.bayrak.p8_k_mendil; }, ise: [
    /* GPT T28 (8-O2): kuru mendil şüphedir, hüküm değil */
    'Perihan Hanım kuru mendilini indirdi. Ağrıyan baş böyle dik durmaz; bekliyor.',
  ], degilse: [
    'Perihan Hanım mendilini indirdi. Gözünde uykusuzluk değil, sabır var.',
  ] };

  // Remzi'nin fişekleri: 7. bölümdeki sofra davetine göre
  // Anlatı denetimi T1: dış olay anlatıcıya çevrildi (Remzi'nin huyu sahnenin gösteremediği şey)
  var FISEK = { eger: function (S) { return S.bayrak.p7_sofra === 'vals'; }, ise: [
    ['an', 'Orkestra sustu; karşı köşkten ilk fişek yükseldi. Remzi Bey\'in davetlileri alkışladı.'],
  ], degilse: [{ eger: function (S) { return S.bayrak.p7_sofra === 'perde'; }, ise: [
    ['an', 'Karşı köşkten bir ıslık yükseldi. Perdesi geri çevrilen Remzi Bey, Ada\'ya gökyüzünü yollamıştı.'],
  ], degilse: [
    ['an', 'Karanlık köşk birden aydınlandı. Remzi Bey küsmemişti; küsmek bir şeyi bırakmaktı, o hiçbir şeyi bırakmazdı.'],
  ] }] };

  /* Tur 27b (GPT B8-O1, sözleşme 1): Süha yolunda çamlık davetini reddeden kızın kısa sahnesi. Buluşma olmaz: Feride
     bahçe kapısından çıkıp çamlığın ilk ağacında durur, içeri girmez. Hekim bildiğini orada söyler; bilgi pazarlığı,
     fişekte görülme (Kenan pencerede) ve susma pazarlığı oynanır; dokunma ve öpücük kararları yoktur. p8_cik 'red',
     p8_opus 'hayir', p8_dokun 'geri' seçimde yazılır (9. bölüm hayırı ve 'is'/'hic' şartını okur; 'ortak' bu yolda yok). */
  /* Tur 28b (GPT 8-O1; kök 1, 6): "buradan söyleyin" ayrı ret: Feride yerinden (pencere ya da merdiven başı) ayrılmaz,
     hekim aşağıdan konuşur (p8_yer 'burada'). Çamlığın kıyısına inen ret p8_yer 'kiyi'. Kıyı resmi (an_camlik_ret)
     yalnız kıyıda; yukarıda kalan kızın kendi anı (an_pencere_ret / an_merdiven_ret, üretimde). */
  var RED_SAHNE = [
    { muzik: 'sessiz', kes: true, durak: 900 },
    { eger: burada, ise: [
      { eger: asagida7, ise: [
        ['an', 'Feride merdivenin başından inmedi. Süha Bey aşağıda kaldı, lambası basamakları birer birer aydınlatıyordu.'],
      ], degilse: [
        ['an', 'Süha Bey aşağıda, ay ışığında kaldı. Aralarında bir kat vardı.'],
      ] },
    ], degilse: [
      { mekan: 'ada_camlik_gece' },
      ['an', 'Feride bahçe kapısından çıktı, çamlığın ilk ağacında durdu. Ardındaki karanlığa bir adım bile atmadı.'],
    ] },
    { goster: ['suha', 'notr'] },
    ['suha', 'Buraya kadar demek. Sabah babanıza Perihan\'ın hikâyesini okuyacağım: misafir bir şişe konyak bitirdi.', 'soguk'],
    ['suha', 'Son cümlesi de onun: “Kendini bitirir.” Sizin adınız o hikâyeye girmeyecek.', 'soguk'],
    { soru: 'Bildiğini söyledi. Karşılığını bekliyor.', secim: [
      { m: '“Sabah ‘kendini bitirir’ demeyeceksiniz.”', etki: { suha: 3 }, bayrak: { p8_ad: 'is' }, adimlar: [
        ['f', 'Sabah “kendini bitirir” demeyeceksiniz. O cümle Perihan Hanım\'ın; sizin olmasın.', 'kararli'],
        ['suha', 'Demem. En sevdiği cümleyi sabah yutarım, siz de seyredin.', 'alayci'],
      ] },
      { m: '“Henüz hiçbir şeyi göze almadınız.”', bayrak: { p8_ad: 'hic' }, adimlar: [
        ['f', 'Henüz hiçbir şeyi göze almadınız.', 'kararli'],
        ['suha', '“Henüz.” Bu kelimeyi sabaha saklarım.', 'alayci'],
      ] },
    ] },
    /* Tur 28 (B8 oynanış 1): ret yolunda Feride'nin sınırı kendi kararı; iki cevap görünür biçimde ayrılır */
    { eger: burada, ise: [
      'Elini yukarıya, bana doğru uzattı: “İnin, bir adım.”',
    ], degilse: [
      'Elini çamlığa doğru uzattı: bir adım.',
    ] },
    { soru: 'Eli havada; bir adım istiyor.', secim: [
      { m: 'Elini kaldırma. Gözünü de indirme.', bayrak: { p8_sinir: 'goz' }, adimlar: [
        'Elimi kaldırmadım, gözümü de indirmedim.',
      ] },
      { m: '“Elinizi indirin Süha Bey. Sınır burası.”', etki: { vakar: 1 }, bayrak: { p8_sinir: 'soz' }, adimlar: [
        { eger: burada, ise: [
          ['f', 'Elinizi indirin Süha Bey. Sınır bu eşik, inmem.', 'kararli'],
        ], degilse: [
          ['f', 'Elinizi indirin Süha Bey. Sınır bu ağaç.', 'kararli'],
        ] },
        'Elini indirmedi ama bir adım da atmadı.',
      ] },
    ] },
    { eger: burada, ise: [
      { eger: asagida7, ise: [{ cizim: 'an_merdiven_ret' }], degilse: [{ cizim: 'an_pencere_ret' }] },
    ], degilse: [{ cizim: 'an_camlik_ret' }] },
    { eger: (S) => b(S).p8_sinir === 'soz', ise: [
      { eger: burada, ise: [
        ['suha', 'Sınırı söylediniz, eşiğini de. Aklımda tutarım.', 'soguk'],
      ], degilse: [
        ['suha', 'Sınırı söylediniz, ağacını da. Aklımda tutarım.', 'soguk'],
      ] },
    ], degilse: [
      ['suha', 'Sınırı siz çizdiniz. Aklımda tutarım.', 'soguk'],
    ] },
    /* Tur 29 (t29_b05_08 B8 ses 2): patlama sesi anlatıcının "patladı" satırıyla birlikte (önce); anlatı 6: patlamayı
       anlatıcı söyler, Feride yalnız ışığın gösterdiğini */
    { efekt: 'fisek' },
    FISEK,
    { eger: burada, ise: [
      { eger: asagida7, ise: [
        'Fişeğin ışığında sofa gündüz gibi oldu. Misafir odasının kapısı aralık; bir gölge.',
      ], degilse: [
        'Fişeğin ışığında bahçe gündüz gibi oldu. Misafir odasının penceresinde bir gölge.',
      ] },
      ['ic', 'Kenan Bey. Uyumamış, hekimi benimle konuşurken görmüş.', 'endiseli'],
    ], degilse: [
      'Fişek çamlığın kıyısını aydınlattı. Misafir odasının penceresinde bir gölge.',
      ['ic', 'Kenan Bey. Uyumamış, ikimizi kıyıda görmüş.', 'endiseli'],
    ] },
    { muzik: 'gerilim' },
    { soru: 'Kenan Bey gördü; karşımda bu.', secim: [
      { m: 'Başını kaldır. Kenan Bey\'e bak; kaçma.', etki: { mukaddem: 2 }, bayrak: { p8_pencere: 'bak' },
        iz: 'Kenan\'ın gözüne baktın. Ona bir yalan borçlu kalmadın.', adimlar: [
        'Ona baktım. Gölge geri çekilmedi, ben de çekilmedim.',
      ] },
      { m: 'Ondan ayrıl. Eve ondan önce koş.', kosul: (S) => !burada(S), bayrak: { p8_pencere: 'kos' }, adimlar: [
        'Geri dönüp bahçe kapısından eve ondan önce koştum.',
        ['suha', 'Koşun. Ben yürüyerek gelirim, acelem yok.', 'alayci'],
      ] },
      /* Tur 28b: yukarıda kalan kızın geri çekilmesi (koşacak bir yol yok) */
      { m: 'Geri çekil. İkisine de yüzünü gösterme.', kosul: burada, bayrak: { p8_pencere: 'cekil' }, adimlar: [
        'Geri çekildim. Ne birine ne öbürüne yüzümü gösterdim.',
        ['suha', 'Saklanın. Sesim sizi bulur, acelem yok.', 'alayci'],
      ] },
    ] },
    /* Tur 33 (B8 ses 4): ret yolunda Süha teması yok; gece */
    { muzik: 'gece' },
    /* Tur 30 (t30 B8 anlatı 10'a 2): ret yolunda da "Onun gözünden" sayfası; hesabı söylenmez, istediği görünür */
    { ara: { yer: 'Onun gözünden', satirlar: [
      (S) => (burada(S)
        ? 'Süha fişeğin ışığında yukarıdaki kızı gördü: inmemişti, inmeyecekti. Bu yüzden onu daha çok istedi.'
        : 'Süha fişeğin ışığında ilk ağacın dibindeki kızı gördü. Bir adım daha atmamıştı; bu yüzden onu daha çok istedi.'),
    ] } },
    { eger: (S) => b(S).p8_pencere === 'kos', ise: ['Bahçe kapısında yetişti, dediği gibi yürüyerek.'] },
    { goster: ['suha', 'notr'] },
    ['suha', 'Sabah susarsanız bu gece hiç konuşmadık. Pazarlığım bu.', 'notr'],
    { soru: 'Pazarlığı önüme koydu.', secim: [
      { m: '“Kabul. Susarım.”', etki: { suha: 3 }, bayrak: { p8_pazar: 'kabul' },
        iz: 'Susacağına söz verdin. Sabah bu gece hiç olmamış sayılacak.', adimlar: [
        ['suha', 'Sabah yüzünüz sizi ele vermesin.', 'alayci'],
      ] },
      { m: '“Şartım var: Hatice\'nin adını siz söylemeyeceksiniz.”', etki: { suha: 3 }, bayrak: { p8_pazar: 'sart' },
        iz: 'Pazarlığa şart koydun: sabah Hatice\'nin adı hekimin ağzından çıkmayacak.', adimlar: [
        ['suha', 'Söylemem. Perihan\'ın ağzına karışamam ama.', 'notr'],
      ] },
      { m: '“Pazarlık etmem. Ne yaparsam kendim yaparım.”', etki: { suha: -3 }, bayrak: { p8_pazar: 'ret' },
        iz: 'Pazarlığı reddettin. Hekim artık kendi oyununu oynayacak.', adimlar: [
        /* Tur 32 (B8 sürük 3): ret dalında Süha "hayırınızı severim" demiyor artık; imza satırı çamlığa kaldı */
        ['f', 'Bir kez hayır dedim, ikincisi de bu. Pazarlık etmem Süha Bey.', 'kararli'],
        { eger: burada, ise: [
          'Hemen cevap vermedi. Aşağıda lambası kıpırdamadan yandı.',
        ], degilse: [
          'Hemen cevap vermedi. Çam iğneleri ayağının altında çıtırdadı.',
        ] },
        ['suha', 'Yapın. Ben de yaparım; ikimiz de kaybederiz.', 'soguk'],
      ] },
    ] },
    { gizle: 'suha' },
    { gorev: 2 },
    { ara: { mekan: 'ada_sofa', yer: 'Ada evi · gece yarısını geçe', satirlar: [
      (S) => (burada(S)
        ? 'Fişeklerin dumanı bahçeden çekildi, Süha Bey\'in lambası da. Feride yerinden bir adım bile kıpırdamamıştı; o sınırı kendisi çizmişti.'
        : 'Fişeklerin dumanı çamlığın kıyısından çekilirken Feride eve döndü. Sınırı o gece kendisi çizmişti; bir adım bile geri almadı.'),
      /* Tur 29 (B8 anlatı 4): evden hiç çıkmayan kıza arka kapı satırı düşmez */
      (S) => (burada(S)
        ? 'Ev yeniden sustu; yalnız misafir odasının perdesi bir daha kapanmadı.'
        : 'Arka kapının sürgüsünü akşam Hatice çekecekti. O gece Hatice\'nin aklı başka bir kapıdaydı.'),
    ] } },
    /* Tur 28 (t28_b05_08 B8 oynanış 1): bağımsız "Hayır"ın yolu en kısa ve en edilgen yoldu. Çamlığa gitmeyen kıza
       gecenin kalanı kalır: Süha'nın bildiği sabah okunacak, Feride ilk hamleyi kendisi yapar. Şişe ve toka
       hamleleri gece vaktinin aynı uğrağını önceden tüketir (vakitte o yer kapanır). */
    /* Tur 29 (B8 diyalog 3): plan satırı öfke değil */
    /* Tur 33 (§0.6): "Sabah … okunacak" kalıbı bölümde bir kez */
    ['ic', 'Çamlığa gitmedim, gece benim kaldı. Süha Bey\'in bildiğini sabahtan önce ben bulacağım.', 'kararli'],
    { soru: 'Ev uyumuyor. İlk hamle benim.', secim: [
      { m: 'Kenan Bey\'in penceresine çakıl at: “Sabah kalın.”', etki: { mukaddem: 3 }, bayrak: { p8_rhamle: 'kenan' },
        iz: 'Kenan\'ın penceresine çakıl attın. Sabah kalmasını sen istedin.', adimlar: [
        { efekt: 'cakil' }, // Tur 28: cama tek çakıl
        'Bahçeden bir çakıl alıp misafir odasının penceresine attım. Perde aralandı.',
        ['f', 'Sabah kalın Kenan Bey. Kahvede size bir yalan hazırlıyorlar.', 'kararli'],
      ] },
      { m: 'Selamlıktaki boş şişeyi şimdi al.', bayrak: { p8_rhamle: 'sise', p8_dekor: 'al' }, adimlar: [
        { efekt: 'sise' },
        'Selamlıkta masada boş bir şişe, yanında tek bardak. Şişeyi şalıma sardım.',
        ['ic', 'Bardak kupkuru. Kim dizdiyse sabah ilk o konuşacak.', 'kararli'],
        { koz: BOS, kaynak: 'Şişe sandığımda', alt: 'Selamlıkta sahne gibi dizilmiş boş konyak şişesi. Bardak kuruydu; şimdi şişe sandığımda.' },
      ] },
      { m: 'Misafir odasının eşiğine bak; sabahın delilini önce sen bul.', bayrak: { p8_rhamle: 'toka', p8_toka: 'al' }, adimlar: [
        'Misafir odasının eşiğinde bir kadın tokası. Hatice\'nin, saçında görmüştüm.',
        'Tokayı avucuma aldım. Eşik boş kaldı.',
        { koz: TOKA, kaynak: 'Toka bende', alt: 'Misafir odasının eşiğinde buldum; düştü mü, kondu mu, bilinmez. Şimdi bende.' },
      ] },
    ] },
  ];
  /* GPT T29 O8-1: Kenan yolunda "bu gece çıkma" seçeneği (iki gece sorusunda da aynı şık). Sabahın kanıt zinciri
     sürer; çamlık, öpücük ve hatıra adımları çalışmaz; final ve defter "çamlıkta birlikteydik" demez. */
  var EVDE_SECENEK = { m: 'Bu gece çıkmayın. Ben de odama döneceğim.', bayrak: { p8_cik: 'evde' },
    iz: 'Geceyi evde geçirmeyi seçtin.', adimlar: [
    ['ic', 'Bu gece bahçeye inmeyeceğim. Sabah ne gördüysem onu söylerim.', 'kararli'],
  ] };
  var EVDE_SAHNE = [
    { eger: (S) => son7(S) === 'tepsi', ise: [
      ['an', 'Feride tepsiyi Kenan\'ın odasında bırakıp kendi kapısına döndü. O gece bahçeye inmedi.'],
    ], degilse: [
      ['an', 'Feride odasına döndü.'],
    ] },
    { soru: 'Merdivenden bir ses geldi.', secim: [
      { m: 'Kapını bir parmak arala; merdiveni dinle.', etki: { vakar: 1 }, bayrak: { p8_evde: 'dinle' },
        iz: 'Kapını aralık tuttun. Merdivende bir kadın terliği duydun, adını koymadın.', adimlar: [
        { efekt: 'adim' },
        'Kapımı bir parmak araladım. Merdivenden bir terlik indi, hafif bir kadın terliği.',
        ['ic', 'Hatice mi, Perihan Hanım mı? Saatini aklıma yazdım.', 'endiseli'],
      ] },
      { m: 'Lambanı söndür, uyuyor gibi yap.', bayrak: { p8_evde: 'uyku' }, iz: 'Lambanı söndürdün. Ev seni uyuyor sandı.', adimlar: [
        { efekt: 'kandil' },
        'Lambamı söndürdüm. Karanlıkta gözlerim açık yattım.',
      ] },
    ] },
    { eger: nimetVar, ise: [
      'Bir pusula yazdım. Nimet aşağı inip Kenan\'ın kapısının altından sürecekti.',
    ], degilse: [
      'Bir pusula yazdım. Madam aşağı inip Kenan\'ın kapısının altından sürecekti.',
    ] },
    { soru: 'Pusulaya sabahın planını yazacağım.', secim: [
      { m: '“İlk vapurla gidin. Adınızı burada yazamasınlar.”', bayrak: { p8_plan: 'git' },
        iz: 'Kenan sabah vapuruyla gidecek. Kahvede yanında olmayacak.', adimlar: [
        'Yazdım: “İlk vapurla gidin. Adınızı burada yazamasınlar.”',
      ] },
      { m: '“Kalın. Yalanın yüzüne sabah birlikte bakalım.”', bayrak: { p8_plan: 'kal' },
        iz: 'Kenan kalacak. Sabah kahvesinde yalanı birlikte karşılayacaksınız.', adimlar: [
        'Yazdım: “Kalın. Yalanın yüzüne sabah birlikte bakalım.”',
      ] },
      { m: '“Annenize gidin, her şeyi önce o duysun.”', kosul: (S) => var_(S, ITIRAF), bayrak: { p8_plan: 'anlat' },
        iz: 'Kenan annesine gidecek. Münevver Hanım yalanı önce oğlundan duyacak.', adimlar: [
        'Yazdım: “Annenize gidin, her şeyi önce o duysun.”',
      ] },
    ] },
    { efekt: 'fisek' },
    FISEK,
    'Fişeğin ışığı odayı doldurdu. Selamlığın penceresinde bir lamba kıpırdadı.',
    { soru: 'Selamlıkta biri var.', secim: [
      { m: 'Pencereden bak; kimin lambası, gör.', bayrak: { p8_gozcu: 'bak' },
        iz: 'Fişeğin ışığında selamlık camında bir gözlük parıltısı gördün. Kimin olduğunu sabah sınayacaksın.', adimlar: [
        'Fişeğin ışığında selamlığın camında bir gözlük parladı, sonra lamba söndü.',
        ['ic', 'Süha Bey\'in gözlüğü müydü?', 'endiseli'],
      ] },
      { m: 'Perdeyi kapat. Gücünü sabaha sakla.', bayrak: { p8_gozcu: 'kapat' }, adimlar: [
        'Perdeyi kapattım. Sabah konuşacak olan, gece uyumuş olmalı.',
      ] },
    ] },
    /* GPT T29 SE7-1/SE8-1: döşemenin altından gelen üç tık ayrı adım */
    { efekt: 'uc_tik_alt' },
    'Döşemenin altından üç tık geldi. Kenan odasındaydı, pusulayı okumuştu.',
    { soru: 'Üç tık. Cevap bekliyor.', secim: [
      { m: 'Saç fırçanla üç kez cevap ver.', etki: { mukaddem: 3 }, bayrak: { p8_evde_tik: 'cevap' }, adimlar: [
        { efekt: 'uc_tik' },
        'Üç kez vurdum. Aşağıda bir tık daha geldi, sonra sustu.',
      ] },
      { m: 'Cevap verme. Odasında kaldığını bilmek yeter.', bayrak: { p8_evde_tik: 'sus' }, adimlar: [
        'Cevap vermedim. Odasındaydı, sabah bunu bilen ilk kişi bendim.',
      ] },
    ] },
    { gorev: 2 },
    { ara: { mekan: 'ada_sofa', yer: 'Ada evi · gece yarısını geçe', satirlar: [
      'Fişeklerin dumanı çekildi. O gece ne Feride bahçeye inmişti ne Kenan. Sabah bunu kimin ağzı söyleyecekti?',
    ] } },
  ];

  window.BOLUMLER[108] = {
    no: 108,
    baslik: 'Yeni 8. Bölüm',
    ad: 'Ada Gecesi',
    dogrusal: true,
    adaylar: ['mukaddem', 'suha', 'remzi'],
    ilkFaz: 'A',
    baslangic: 'ada_oda',
    fazlar: { A: { mekanlar: ['ada_oda', 'ada_sofa', 'ada_camlik_gece', 'ada_selamlik', 'ada_misafir', 'ada_kapi_perihan', 'ada_iskele', 'ada_bahce', 'ada_duvar'], baglanti: {} } },
    gorevler: [],
    fon: function (S, mekanId) {
      // Plan modu (veri/plan_ada.js): görev 0–2 gece, 3'ten sonra gündüz ışığı; çeşidin kendi resmi yoksa
      // null döner ve aşağıdaki eski fon geçerli kalır
      /* Tur 27 (B8 anlatı 10'a 2): Kenan 'tepsi' yolunda gece sahnesi selamlıkta başlar; Feride'nin odası bir an
         görünüp hemen selamlığa kesilmez */
      var yer = (S.gorev === 0 && mekanId === 'ada_oda' && muk(S) && son7(S) === 'tepsi') ? 'ada_selamlik' : mekanId;
      var f = adaFon(yer, S.gorev >= 3 ? 'gunduz' : 'gece');
      if (f) return f;
      if (yer !== mekanId) return yer;
      // Görev 0–2 gece; görev 3'ten sonra sabah: odalar gündüz ışığında
      if (S.gorev >= 3 && mekanId === 'ada_misafir') return 'ada_misafir_gunduz'; // Tur 34 (B8 görsel): İstanbul odasına dönmez
      if (S.gorev < 3 && mekanId === 'ada_oda') return 'ada_oda_gece'; // Tur 34: ada_oda gündüz resmidir; gece kendi resmi
      return null;
    },

    acilis: [
      { anlati: { gorsel: 'ada_sofa', baslik: '8. Bölüm · Ada Gecesi', satirlar: [
        /* Anlatı denetimi T1 (17 Kasım 2026): açılış anlatıcı sesine çevrildi (3. kişi, geçmiş zaman).
           Sürükleyicilik T1 (S4, b7_8_9 8.1): ortam satırı ve "Bu gece konuşulan" kartı kalktı; ilk satır 7. bölümün
           son anını (p7_son) karşılar, açılış üç satır */
        (S) => ({
          tepsi: 'Kenan\'la Perihan Hanım\'ın arasında, elinde mühürlü bir şişeyle, Feride duruyordu.',
          /* Tur 30 (t30_b05_08 B7 sürük. 1, B8 sürük. 3): 7. bölümün kartını ve kancasını (konyak, hizmet merdiveni,
             selamlık lambası) yinelemez; kancanın açtığı yerden bir adım ileri gider */
          bekci: 'Kenan\'ın kapısına o gece tepsi hiç varmadı. Asıl iş alt katta, Feride\'nin göremediği yerde dönüyordu.',
          izle: 'Hatice tepsisiyle hâlâ Kenan\'ın eşiğindeydi.',
          /* Tur 30 (ORTAK, t30 B7 §5): Süha'nın son sözünü ("Sabah boş şişe konuşacak") yinelemez; yeni bilgi karşılıklı tanıklık */
          in: 'Sabah babası inmeden o boş şişeye yeniden ulaşması gerekecekti. Feride onu boşaltan eli görmüştü; elin sahibi de Feride\'yi.',
          /* Tur 30: 7. bölüm kancası "Kenan'ın kapısı kapalı" der; açılış onu yinelemez */
          uyar: 'Feride uyarısını fısıldayıp merdivene dönmüştü. Tutup tutmadığı birkaç dakikada belli olacaktı.',
        })[son7(S)] || 'Aşağıda açılan dolap kapağının sesi Feride\'nin kulağından gitmemişti.',
        /* Tur 18 (madde 15): 7. bölüm defterinin cümlelerini yinelemez; aynı gecenin şimdiki durumunu kurar.
           Anlatı T2 (8.3): "son vapuru kaçırın" diyen Feride'nin hamlesi Perihan'a mal edilmez; kat düzeni raporlanmaz */
        (S) => (muk(S)
          ? (b(S).p7_davet === 'kacir'
            ? 'Kenan son vapuru Feride\'nin bir sözüyle kaçırmıştı. Evin bir ucunda o, öbür ucunda Perihan Hanım uyumuyordu.'
            : 'Perihan Hanım misafiri son vapura bırakmamıştı. Evin bir ucunda Kenan, öbür ucunda Feride uyumuyordu.')
          : 'Bir yıldır sözlü olduğu adamla onu isteyen adam, o gece aynı çatının altında uyuyordu; ya da uyuyor görünüyordu.'),
        /* Tur 17: 7. bölümdeki hizmet kararını geri almaz. Anlatı T2 (8.9): 'sefik' dalında Şefik hizmete
           verilmedi, misafirin odasında yatıyor; tepsiyi yine Hatice taşıdı */
        (S) => {
          var once = var_(S, ITIRAF)
            ? 'Perihan Hanım suçu bir başkasının üstüne atacaktı; o başkası alt katta yatıyordu. '
            : 'Hatice\'nin gözleri hâlâ ağlamaktan şişkindi. ';
          /* GPT T25 Kenan (B8 sürük. 1): Kenan yolunda Şefik bilgisi açılışta değil gece sahnesinde (Kenan'ın
             sözünde ya da iç seste) verilir; ilk seçim bir adım öne gelir */
          if (b(S).p7_hizmet === 'sefik' && !muk(S)) return once + 'Misafirin odasında bu gece Şefik de yatıyordu.';
          if (b(S).p7_hizmet === 'sefik' && !var_(S, ITIRAF)) return once + 'Konyağı merdivene kadar yine o taşımıştı.';
          return var_(S, ITIRAF) ? once + 'Hatice şişeyi bıraktığı yere bir daha baktı.' : 'Misafire yine Hatice bakacaktı. Gözleri hâlâ ağlamaktan şişkindi.';
        },
      ] } },
    ],

    olaylar: [
      /* ---------------- 1. Gece yarısı: 7. bölümün eylemi ve küçük zaferi ---------------- */
      {
        id: 'p8_gece', mekan: 'ada_oda', tetik: 'giris', kosul: (S) => S.gorev === 0, sahne: [],
        adimlar: [
          { eger: muk, ise: [
            /* --- Kenan yolu --- */
            { eger: (S) => son7(S) === 'tepsi', ise: [
              /* Misafir odası alt katta, selamlığın yanında; Perihan Hanım'ın kapısı üst katta */
              { mekan: 'ada_selamlik' },
              /* Anlatı T2 (8.10): 7. bölümün son ara sayfasındaki kuralı yinelemez; o anın tehlikesini söyler */
              ['an', 'Selamlığın lambası sönüktü. Feride\'yi orada görebilecek tek göz Kenan\'ınkiydi, şimdilik.'],
              /* Tur 30: 7. bölüm kancası lambanın ne aradığını söyledi; burada yalnız yaklaşan tehlike */
              'Yukarıda bir basamak gıcırdadı. Lamba merdivenin başında durdu.',
              { goster: ['mukaddem', 'endiseli'] },
            { eger: (S) => b(S).p7_hizmet === 'sefik', ise: [
                /* Diyalog T1 (8.11): özne açık; inecek olan Perihan Hanım */
                ['mukaddem', 'Şefik içeride uyuyor. Perihan Hanım inerse ikimizi burada bulur.', 'endiseli'],
              ], degilse: [
                ['mukaddem', 'Perihan Hanım merdivenden inerse ikimizi de burada bulur.', 'endiseli'],
              ] },
            ], degilse: [{ eger: (S) => son7(S) === 'bekci', ise: [
              /* Anlatı T2 (8.4): ön merdiven bekçide; konyak öbür yoldan indi */
              /* Sürükleyicilik T1: 7. bölüm kartını (Tur 30: "Ön merdiven benim. Selamlıkta bir lamba yandı.") ve
                 kancasını yinelemez ("hizmet merdiveni", "lamba" burada üçüncü kez söylenmez).
                 Tur 30 (B7 sürük. 1): kartın "Ön merdiven benim"ini de yinelemez; yeni bilgi kat düzeninin tehlikesi */
              'Bekçim ön merdiveni tuttu, konyak arkadan indi. Kenan\'ın kapısıyla selamlık arasında bir duvar var.',
            ], degilse: [
              ['an', 'Gece yarısı geçmişti. Hatice, Kenan’ın kapısında uyukluyordu.'],
              'Aşağıda bir pencere açıldı. Kenan Bey fısıldadı: “Kapımda biri uyuyor.”',
            ] }] },
            /* Açılış Şefik'in orada yattığını söyledi; Feride aynısını yinelemez, kendi hesabını söyler */
            /* GPT T25 Kenan: tepsi yolunda Şefik Kenan'ın sözünde; öbür yollarda bilgi iç seste */
            { eger: (S) => b(S).p7_hizmet === 'sefik' && son7(S) !== 'tepsi', ise: [
              ['ic', 'Şefik aşağıda, Kenan\'ın odasında uyuyor. Perihan Hanım onu saymadı; ben saydım.', 'tebessum'],
            ] },
            /* Tur 33 (B8 diyalog 5) */
            ['ic', 'Sabah sofrada bir yalan okunacak. Ben ondan önce kalkmış olacağım.', 'kararli'],
            { eger: (S) => son7(S) === 'tepsi', ise: [
              { soru: 'Ayak sesi ilk basamakta.', secim: [
                /* GPT T29 O8-1: bahçeye çıkmamak da seçilebilir; tepsi Kenan'ın odasında kalır */
                { m: '“Bu gece çıkmayalım. Tepsi sizde, kapınız kapalı kalsın.”', bayrak: { p8_cik: 'evde' },
                  iz: 'Kenan\'ı evden çıkarmadın. Tepsi onun odasında, kapı kapalı.', adimlar: [
                  ['mukaddem', 'Kalırım. Kapımı da size söz.', 'kararli'],
                  'Merdiveni ben çıktım. Lamba başka yöne dönmüştü.',
                ] },
                { m: 'Tepsiyle pencereden bahçeye. Şişe benimle gelsin.', etki: { mukaddem: 4 }, bayrak: { p8_cik: 'sise' }, adimlar: [
                  'Alçak pencereden bahçeye indik.',
              { efekt: 'sise' }, 'Tepside mühürlü şişe tıkırdadı.',
                ] },
                { m: '“Tepsi sizde kalsın. Mührünü sabah babam görsün.”', etki: { mukaddem: 5 }, bayrak: { p8_cik: 'emanet' }, adimlar: [
                  ['mukaddem', 'Saklarım. Bana emanet ettiğiniz ilk şey bir şişe konyak.', 'gulumser'],
                  'Tepsiyi dolabına kilitledi, anahtarı avucuma bıraktı. Sonra alçak pencereden bahçeye indik.',
                ] },
                { m: '“Tepsi sizde kalsın. Ben arka kapıdan, siz pencereden; bahçede buluşalım.”', etki: { mukaddem: 5 }, bayrak: { p8_cik: 'asma' }, adimlar: [
              ['mukaddem', 'Pencereden atlayan damat… Annem duymasın.', 'gulumser'],
              'Tepsi mührü sağlam, onun odasında kaldı. Ben arka kapıdan çıktım, o pencereden atladı.',
                ] },
              ] },
              /* Tur 17 ek (madde 13): şişe tek yerde; kaynak nerede durduğunu söyler */
              { eger: (S) => b(S).p8_cik === 'sise', ise: [
                { koz: SISE, kaynak: 'Mührü sağlam; saklayan benim', alt: 'Hatice\'nin Kenan Bey\'e taşıdığı konyak; mührü açılmamış. Kimse içmedi.' },
              ], degilse: [{ eger: (S) => b(S).p8_cik === 'emanet', ise: [
                { koz: SISE, kaynak: 'Kenan\'ın dolabında; anahtarı bende', alt: 'Hatice\'nin Kenan Bey\'e taşıdığı konyak; mührü açılmamış. Kimse içmedi.' },
              ], degilse: [
                { koz: SISE, kaynak: 'Kenan\'ın odasında kaldı; mührü sağlam', alt: 'Hatice\'nin Kenan Bey\'e taşıdığı konyak; mührü açılmamış. Kimse içmedi.' },
              ] }] },
            ], degilse: [{ eger: (S) => son7(S) === 'bekci', ise: [
              { soru: 'Onu bu evden bir saatliğine çıkarabilirim. Ya da bu gece kapılar tutulur.', secim: [
                EVDE_SECENEK,
                { m: 'Saç fırçanla döşemeye üç kez vur.', etki: { mukaddem: 4 }, bayrak: { p8_cik: 'tavan' }, adimlar: [
                  /* GPT T29 SE8-1: vuruş eylemle başlar */
                  { efekt: 'uc_tik' },
                  { eger: (S) => b(S).p7_tavan === 'uc', ise: [
                    'Yine üç kez vurdum. Bu kez cevap döşemenin altından değil, merdivenden geldi.',
                  ], degilse: [
                    'Üç kez vurdum. Ayak sesi durdu, sonra merdivene yürüdü.',
                  ] },
                ] },
                { m: 'Nimet\'e: “Kenan Bey\'i bahçeye çağır.”', kosul: nimetVar, etki: { mukaddem: 3, mehves: 1 }, bayrak: { p8_cik: 'bekci' }, adimlar: [
                  { goster: ['mehves', 'kararli'] },
                  ['mehves', 'Çağırırım. Ama siz dönene kadar uyumam.', 'kararli'],
                  { gizle: 'mehves' },
                ] },
                { m: 'Madam\'a: “Kenan Bey\'i bahçeye çağırın.”', kosul: (S) => !nimetVar(S), etki: { mukaddem: 3, josephine: 1 }, bayrak: { p8_cik: 'bekci' }, adimlar: [
                  { goster: ['josephine', 'ana'] },
                  ['josephine', '{i}Une promenade?{/i} Ben merdivende otururum; kimse bir şey görmedi.'],
                  { gizle: 'josephine' },
                ] },
                { m: 'Pencereden aşağıya fısılda: “Bahçeye.”', etki: { mukaddem: 5 }, bayrak: { p8_cik: 'pencere' }, adimlar: [
                  { eger: (S) => b(S).p7_tavan === 'pencere', ise: [
                    ['mukaddem', 'Duydum. Bu kez “bir daha” demeyeceğim.', 'gulumser'],
                  ], degilse: [
                    'Aşağıda pencere açıldı. Bir fısıltı: “Geliyorum.”',
                  ] },
                ] },
              ] },
            ], degilse: [
              { soru: 'Onu bir saatliğine dışarı çıkarabilirim; kapısı tutsak, penceresi değil.', secim: [
                EVDE_SECENEK,
                { m: '“Pencereden atlayın. Ben dışarıda tutarım.”', etki: { mukaddem: 5 }, bayrak: { p8_cik: 'asma' }, adimlar: [
                  ['an', 'Feride hizmet merdiveninden indi. Misafir odasının penceresine vardığında Kenan çoktan pervaza çıkmıştı.'],
                  /* Tur 27 (B8 anlatı 4): Kenan dışarıda, pervazda; portresi Feride'nin odasının önünde belirmez (sesi
                     karanlıktan gelir). Tur 27b: ada_bahce_gece resmi geldi, ama benzet8 gece listesi ve plan_ada yüklemesi
                     onu tanımıyor ("Gece sahnesinde gündüz fonu"); { mekan } adımı ortak istekte (t27_ortak_istek_b05_08 #6). */
                  ['mukaddem', 'Pencereden atlayan damat… Annem duymasın.', 'gulumser'],
                  /* Diyalog T1 (8.10): olay sırası doğru; önce pervazda el, sonra atlayış */
                  'Pervazda elimi tuttu, tutunmak için değil, tutmak için. Sonra atladı.',
                ] },
                { m: 'Hatice\'yi uyandır: “Perihan Hanım seni çağırıyor.”', etki: { mukaddem: 3, vakar: 1 }, bayrak: { p8_cik: 'hatice' }, adimlar: [
                  'Hatice uykulu, tepsiyle yukarı çıktı. Kapı boşaldı.',
                  ['ic', 'Sabah “küçük hanım çağırdı” diyecek. Desin.', 'kararli'],
                ] },
                { m: 'Lambanı pencereye koy: “Bahçeye.”', etki: { mukaddem: 4 }, bayrak: { p8_cik: 'lamba' }, adimlar: [
                  'Lambamı pencereye koydum. Aşağıda, onun penceresinde bir gölge belirdi, anladı.',
                  /* Diyalog T1 (8.9): "adımlamak" ölçmek demek */
                  'Eşikte uyuyan Hatice\'nin üstünden usulca aştı. Uyanmadı, ya da öyle sandık.',
                ] },
              ] },
            ] }] },
          ], degilse: [
            /* --- Süha yolu --- */
            /* Tur 33 (B8 ses 4): Süha teması bölümde bir kez (çamlık); gece açılışı 'gece' */
            { muzik: 'gece' },
            { eger: (S) => son7(S) === 'in', ise: [
              /* Tur 27b (GPT B8-A1): 7. bölüm Feride'yi merdiveni çıkarken bırakır; gece sofanın eşiğinde sürer */
              { mekan: 'ada_sofa' },
              ['an', 'Feride merdivenden yeni çıkmıştı. Aşağıda, selamlığın kapısında Süha Bey lambasını kaldırdı.'],
              { goster: ['suha', 'notr'] },
              /* Diyalog T1 (6.13): 6. bölümdeki deyim yinelenmez */
              ['suha', 'Burada her perdenin ardında Perihan var. Çamlıkta yok.', 'notr'],
            ], degilse: [{ eger: (S) => son7(S) === 'uyar', ise: [
              /* Anlatı T2 (8.11): 7. bölüm Feride'yi aşağıda, Kenan'ın kapısında bırakmıştı; dönüş söylenir */
              'Az sonra Hatice onun kapısına vurdu. Kapı açılmadı; uyarım tutmuştu.',
              /* Tur 27 (B8 anlatı 3): Süha merdivenin dibinde; portresi sofada belirir, yatak odasında değil */
              'Sofaya çıkıp merdivenden aşağı baktım.',
              { mekan: 'ada_sofa' },
              ['an', 'Merdivenin dibinde bir lamba yanıyordu. Süha Bey o gece uyumayı hiç düşünmemişti.'],
              { goster: ['suha', 'alayci'] },
              ['suha', 'Nişanlınızı uyardınız. Perihan şimdi başka kapı arıyor; beni dinleyin.', 'alayci'],
            ], degilse: [
              /* Anlatı T2 (8.1): 7. bölümde Süha kapıyı çalıp konuştu; "kimse vurmadı" denmez */
              'Kapım bir daha çalınmadı. Bu gece aradıkları ben değilim.',
              { efekt: 'cakil' }, // Tur 28: pencereye çarpan çakıl, satırdan önce duyulur
              'Sonra pencereme bir çakıl çarptı.',
              ['an', 'Bahçede, ay ışığında Süha Bey bekliyordu. Bu kez kapıyı değil, pencereyi seçmişti.'],
              /* Tur 27 (B8 anlatı 2): Süha bahçede, Feride penceresinde; portresi gece odasının önünde belirmez, sesi
                 aşağıdan gelir. Tur 27b: ada_bahce_gece için benzet8 gece listesi bekleniyor (ortak istek #6). */
              ['suha', 'İnin. Sabahtan önce bilmeniz gereken bir şey var.', 'notr'],
            ] }] },
            { eger: (S) => b(S).p7_gece === 'alin', ise: [
              ['ic', '“Suç ortağınız” demişti. Ortaklık bu gece başlıyormuş.', 'utanmis'],
            /* Anlatı T2 (8.2): lambayı söndüren ('sondur') kapıyı hiç açmamıştı */
            ], degilse: [{ eger: (S) => b(S).p7_gece === 'sondur', ise: [
              /* Tur 28b (kök 2): cevap vermeyen kızın yüzü utanç değil öfke */
              ['ic', 'Az önce lambamı söndürmüş, cevap vermemiştim. Şimdi bütün bir çamlık istiyor.', 'kararli'],
            /* GPT T26 Süha (B7 sürük. 2): 7. bölümde bekçisini uyandıran kız (p7_gece 'bekci') */
            ], degilse: [{ eger: (S) => b(S).p7_gece === 'bekci', ise: [
              ['ic', 'Kapımda bekçimi uyandırmıştım, fısıldayamadı. Şimdi bütün bir çamlık istiyor.', 'tebessum'],
            ], degilse: [
              ['ic', 'Kapımı aralamıştım, girmemişti. Şimdi bütün bir çamlık istiyor.', 'mahzun'],
            ] }] }] },
            ['ic', 'Kim yazdıysa yazsın; ben o sofraya eli boş inmem.', 'kararli'],
            { soru: 'Çamlığa çağırıyor.', secim: [
              { m: 'Git. Önden yürü; o arkandan gelsin.', etki: { suha: 5 }, bayrak: { p8_cik: 'once' }, adimlar: [
                'Önden yürüdüm. Arkamda adımları benimkine uydu.',
              ] },
              { m: '“Bir saat. Ay o çamın ardına inene kadar.”', etki: { suha: 6 }, bayrak: { p8_cik: 'saat' }, adimlar: [
                ['f', 'Bir saat. Ay o çamın ardına inene kadar.', 'gulumseyen'],
                ['suha', 'Ayı da sizin saatinize kurdum.', 'alayci'],
              ] },
              { m: '“Kolunuzu verin. Kaçmadığımı bilin.”', etki: { suha: 7, itibar: -1 }, bayrak: { p8_cik: 'kol' }, adimlar: [
                'Koluna girdim. Kaçan biri gibi değil, götüren biri gibi.',
              ] },
              /* GPT T26 Süha (B8 oynanış 2, öncelik 3): Kenan'a kurulan oyunu gören kız önce hesap sorar; rota aynı
                 kalır, Süha da küçük, geri alınamaz bir şey verir (şişeyi kendisinin boşalttığını söyler) */
              { m: '“Önce selamlıktaki şişe. Sonra çamlık.”', etki: { suha: 4, vakar: 1 }, bayrak: { p8_cik: 'hesap' },
                iz: 'Önce hesabı sordun. Hekim şişeyi kendisinin boşalttığını söyledi.', adimlar: [
                ['f', 'Önce selamlıktaki şişe. Kimin yalanı için boşaldı?', 'kararli'],
                ['suha', 'Perihan\'ın hikâyesi için. Boşaltan benim; gerisini çamlıkta söylerim.', 'soguk'],
              ] },
              /* Tur 27b (GPT B8-O1, sözleşme 1): buluşmayı reddetmek de bir yol; bilgi pazarlığı çamlığın kıyısında,
                 dokunma ve öpücük kararları bu yolda yok (p8_opus 'hayir', p8_dokun 'geri'; 9. bölüm "hayırınızı" der) */
              /* GPT T28 (8-O1): seçenek, sahnenin konumunu (çamlığın ilk ağacı) açıkça söyler */
              { m: '“Çamlığın kıyısına kadar gelirim. İçeri girmem.”', etki: { suha: -3, vakar: 1 }, bayrak: { p8_cik: 'red', p8_yer: 'kiyi', p8_opus: 'hayir', p8_dokun: 'geri' },
                iz: 'Çamlığa gitmedin. Hekim bildiğini çamlığın kıyısında söyleyecek.', adimlar: [
                ['f', 'Bilginizi çamlığın kıyısında söyleyin Süha Bey. İçeri girmem.', 'kararli'],
                ['suha', 'Kıyıda kalın öyleyse. Ben de sesimi yükseltmem.', 'soguk'],
              ] },
              /* Tur 28b (GPT 8-O1; kök 1): yerinden hiç ayrılmayan ret; aynı bilgi pazarlığı aşağıdan konuşulur */
              { m: '“İnmem. Bildiğinizi buradan söyleyin.”', etki: { suha: -3, vakar: 1 }, bayrak: { p8_cik: 'red', p8_yer: 'burada', p8_opus: 'hayir', p8_dokun: 'geri' },
                iz: 'Yerinden kıpırdamadın. Hekim bildiğini aşağıdan söyleyecek.', adimlar: [
                ['f', 'İnmem Süha Bey. Bildiğinizi buradan söyleyin.', 'kararli'],
                ['suha', 'Aşağıda kalırım öyleyse. Sesim yeter; duyan olursa sizi de duyar.', 'soguk'],
              ] },
            ] },
            { gizle: 'suha' },
          ] },
          { gizle: 'mukaddem' },
          /* 7. bölümde seçilen kapı bekçisi: odadan çıkarken (ikinci geçiş: tepsi / in yolunda Feride zaten
             aşağıda olduğu için satırlar geçmiş zamana, odadan ilk çıkışa bağlandı) */
          /* Tur 28b (GPT 8-O1): yerinden ayrılmayan kız odadan çıkmadı; çıkan kızın açık kapısı seçilmiş karar diye
             sahiplenilmez (sürgü içeriden çekilir, dışarı çıkan çekemez) */
          { eger: (S) => burada(S) || (evde(S) && son7(S) !== 'tepsi'), ise: [
            'Tahta ayağımın altında serin.',
          ], degilse: [{ eger: (S) => b(S).p7_kapi === 'surgu', ise: [
            'Sürgüm kapıda, ama dışarıdan çekilmiyor. Odam ben dönene kadar açık.',
          ], degilse: [{ eger: (S) => b(S).p7_kapi === 'nimet', ise: [
            'Odamdan çıkarken Nimet\'in tespihi durmuştu. Görmemiş gibi yaptı.',
          ], degilse: [{ eger: (S) => b(S).p7_kapi === 'madam', ise: [
            'Odamdan çıkarken Madam\'ın kapısının önünden geçmiştim. Duvarın ardında dua kesilmişti.',
          ], degilse: [{ eger: (S) => b(S).p7_kapi === 'sefik', ise: [
            'Odamdan çıkarken Şefik uykusunda eteğimi aramıştı. Bulamayınca yastığıma sarıldı.',
          ], degilse: [
            'Kapımı bilerek açık bırakıp çıkmıştım.',
          ] }] }] }] }] },
          { eger: red, ise: RED_SAHNE, degilse: [{ eger: evde, ise: EVDE_SAHNE, degilse: [
          { gorev: 1 },
          { ara: { mekan: 'ada_camlik_gece', yer: 'Çamlık · gece yarısı', satirlar: [
            /* İkinci geçiş (GPT T23 Kenan): tepsi yolunda merdivendeki lambanın akıbeti; Perihan vazgeçmez, aradığını bulur */
            (S) => (muk(S) && son7(S) === 'tepsi'
              /* Tur 27b (GPT B8-A2): hangi şişe olduğu açık; Feride'nin koruduğu mühürlü şişeye dokunulmaz */
              ? (b(S).p8_cik === 'sise'
                ? 'Perihan Hanım\'ın lambası selamlığa indiğinde oda boştu. Selamlık dolabındaki ikinci şişeyi aldı; Feride\'nin yanında götürdüğünü bulamadı.'
                : 'Perihan Hanım\'ın lambası selamlığa indiğinde oda boştu. Selamlık dolabındaki ikinci şişeyi aldı; Kenan\'ın odasındaki tepsiye dokunamadı.')
              : 'Evin ayak sesleri ardında birer birer söndü. Ada\'nın çamlığı köşkün ardından denize inerdi; gece yarısı orada yalnız ay dolaşırdı.'),
            /* Anlatı T2 (mercek_doz §2b): "genç kız" kuralı yinelenmez */
            'Feride ay çamların ardına inmeden dönecekti, o saate kadar gece onundu.',
          ] } },
          ] }] },
        ],
      },

      /* ---------------- 2. Mehtapta çamlık: doruk ---------------- */
      {
        id: 'p8_camlik', mekan: 'ada_camlik_gece', tetik: 'giris', kosul: (S) => S.gorev === 1, sahne: [],
        adimlar: [
          /* Tur 17 ek (madde 18): gece kıyafeti köprüsü — gündüz elbisesi üstünde gece şalı (an resmi çeşitleri giyili elbiseye göre) */
          /* GPT T25 Kenan (B8 anlatı 1): şal sonradan alınmış gibi görünmez; odadan çıkarken omzundaydı */
          /* Tur 27 (B8 anlatı 1): doruk teknik kıyafet gerekçesiyle açılmaz; şal yine omuzda, imge çamlıktan */
          'Gece şalımı omzuma çektim. Çam kokusu elbiseme sindi.',
          { eger: muk, ise: [
            /* --- Kenan yolu --- */
            ['an', 'Çamların arasına geldiklerinde evin pencereleri artık görünmüyordu. İlk kez acele etmeden yan yana durdular.'],
            { goster: ['mukaddem', 'ana'] },
            /* 7. bölüm: Kenan'ın kalması */
            { eger: (S) => b(S).p7_davet === 'kacir', ise: [
              /* Diyalog T1 (8.3): sahnede üç kez geçen "pişman" azaltıldı; vapur Kenan'ın imgesi */
              /* Tur 30 (t30 B8 diyalog 3): vapuru kaçırdığı açılışta ve 7. bölümde söylendi; Kenan nesneyle konuşur */
              /* Tur 32 (B8 anlatı 1): 7. bölümün 'goz' dalında telgraf tek kelimeydi */
              { eger: (S) => b(S).p7_sofa === 'goz', ise: [
                ['mukaddem', 'Annem telgrafımı okumuştur; tek kelime: “Kaldım.”', 'gulumser'],
              ], degilse: [
                ['mukaddem', 'Annem telgrafımı okumuştur; iki kelime: “Kaldım, sağım.”', 'gulumser'],
              ] },
            ], degilse: [{ eger: (S) => b(S).p7_davet === 'uyar', ise: [
              ['mukaddem', 'Saatimi kurmuştum. Perihan Hanım saatten hızlıymış.', 'mahzun'],
            ], degilse: [
              /* Diyalog T1 (8.1): 7. bölümde "kafes yok" diyen Kenan'dı */
              ['mukaddem', 'Ada evinde kafes yok demiştim. Çamlıkta hiç yok.', 'gulumser'],
            ] }] },
            { eger: (S) => b(S).p6_yakin === 'ada', ise: [
              /* Diyalog T1 (8.2): vapurdaki "sayılır mı?" geri çağrısı baştan kurulmaz */
              /* Tur 27 (B8 diyalog 4): "vade" pazarlık sözlüğü; Kenan'ın sesi değil */
              /* Tur 33 (B8 görsel 1): çamlıkta üst üste gülümser serisi kırıldı (utangaç portre kitaplı; gece yasak) */
              ['mukaddem', 'Vapurda dokunuşumuz sayılmadı; herkes bakıyordu. Bu gece bakan yok.', 'kararli'],
            ], degilse: [{ eger: (S) => b(S).p7_soz === 'itiraf', ise: [
              ['mukaddem', 'Vapurda beni görmek için bindiniz. Ben de bu gece uyumadım.', 'mahzun'],
            /* Oynanış T1 (b5_8 7 (b)4): 7. bölümün ikindi uğrağı (p7_v_camlik 'kozalak') çamlıkta karşılık bulur */
            ], degilse: [{ eger: (S) => b(S).p7_v_camlik === 'kozalak', ise: [
              ['mukaddem', 'Kırk dördüncü kozalak cebimde. Bütün gün sayıyı unutmadım.', 'gulumser'],
            ], degilse: [
              /* GPT T25 Kenan (öneri 8): "ilk kez" kazanılmış yakınlığı sıfırlamaz */
              ['mukaddem', 'Bir yıldır sözlüyüz. Bu gece ardımızdan seslenen yok.', 'gulumser'],
            ] }] }] },
            /* Sessiz ortak iş: mühürlü şişe birlikte saklanır */
            { eger: (S) => b(S).p8_cik === 'sise', ise: [
              'Şişeyi bir çamın dibine gömdük. Konuşmadan: o kazdı, ben toprağı örttüm.',
              { kozKaynak: [SISE, 'Büyük çamın dibine gömdük; yerini ikimiz biliyoruz'] },
            ] },
            /* Kesintisiz karşılık: kişisel hatıra. Tur 27 (B8 sürük. 3): hatırayı Feride açar; Kenan üç replik art arda
               konuşmaz */
            ['f', 'Dokuz yaşımda bana masal anlatırdınız. Sonunu hep ben isterdim.', 'utanmis'],
            ['mukaddem', 'Bu gecenin sonunu da siz anlatın. Ben dinlemeyi bilirim.', 'gulumser'],
            { soru: 'Masalın sonu bende.', secim: [
              { m: 'Yalnız adını söyle: “Kenan.”', etki: { mukaddem: 6 }, bayrak: { p8_masal: 'ad' }, adimlar: [
                ['f', 'Kenan.', 'utanmis'],
                /* GPT T25 Kenan (B8 anlatı 3): beklenen "Bey"in düşmesiydi */
                /* GPT T29 D8-1: 3. bölümde adını söylemiş kız için ilk kez değil */
                { eger: (S) => b(S).p3_soz === 'ad', ise: [
                  ['mukaddem', 'O gün kapıda söylemiştiniz. Burada daha rahat duyuluyor.', 'notr'],
                ], degilse: [
                  ['mukaddem', 'Bir yıldır adımı böyle söylemenizi bekledim. Yeniden söylemeyin, toparlanamam.', 'gulumser'],
                ] },
              ] },
              /* Tur 30 (ORTAK, t30 B7 diyalog (b)): vapurdaki simit/martı anısı (pilot7 747–750) burada yinelenmez;
                 başka bir çocukluk nesnesi. Tur 29 (B8 diyalog 4): Kenan kendini açıklamaz; nesne ve hatıra.
                 Bayrak değeri 'simit' → 'kitap' (p8_masal yalnız pilot8'de; başka bölüm okumuyor) */
              { m: '“Masal kitabımı size vermiştim. Hâlâ sizde mi?”', etki: { mukaddem: 4 }, bayrak: { p8_masal: 'kitap' }, adimlar: [
                ['f', 'Masal kitabımı “sizin olsun” diye size vermiştim. Hâlâ sizde mi?', 'tebessum'],
              ['mukaddem', 'Yanımda; Ada\'ya da getirdim. Son sayfasını hiç okumadım, sonu sizindi.', 'gulumser'],
              ] },
              { m: '“Masalın sonunda prenses kendi kapısını açar.”', etki: { mukaddem: 5 }, bayrak: { p8_masal: 'kapi' }, adimlar: [
                ['f', 'Masalın sonunda prenses kendi kapısını kendisi açar.', 'gulumseyen'],
                /* Tur 27b (GPT B8-D2): vecize yerine yarım, insanî cevap */
                ['mukaddem', 'Açtınız. Ben… içeri çağırmanızı bekledim.', 'mahzun'],
                'Ellerine baktı, sonra bana.',
              ] },
            ] },
            /* 7. bölüm: yaşmağın ucu */
            { eger: (S) => b(S).p7_yasmak === 'birak', ise: [
              /* Diyalog T1 (8.8, ses A6): koku imgesi Süha'nın; Kenan'da "yıkamadım" yinelenmez */
              ['mukaddem', 'Vapurda tülünüzü bırakmadınız. Bütün gün parmaklarım ne yapacağını bilemedi.', 'gulumser'],
            ], degilse: [{ eger: (S) => b(S).p7_yasmak === 'el', ise: [
              ['mukaddem', 'Küpeştede serçe parmağınız değmişti. Bütün gün onu düşündüm.', 'gulumser'],
            ], degilse: [
              ['mukaddem', 'Vapurda gözünüzü çekmediniz. Ben de bu gece çekmeyeceğim.', 'kararli'],
            ] }] },
            'Denizden bir rüzgâr çıktı, şalım omzumdan kaydı.',
            /* Anlatı T2b (GPT 24b kapanış 7): soru bir önceki satırı yinelemez */
            { soru: 'Kenan şala uzanmadı; bekliyor.', secim: [
              { m: 'Şalını o bağlasın.', etki: { mukaddem: 5 }, bayrak: { p8_dokun: 'sal' }, adimlar: [
                'Şalımı bağladı. Düğümü çocukken annemin attığı gibi attı; hatırlamış.',
              ] },
              { m: '“Ceketiniz.” Elini uzat.', etki: { mukaddem: 5 }, bayrak: { p8_dokun: 'ceket' }, adimlar: [
                'Ceketini omzuma geçirdi. Mürekkep ve çam kokuyordu.',
              ] },
              { m: 'Karşı köşkten vals geliyor: “Dans edelim.”', kosul: (S) => b(S).p7_sofra === 'vals', etki: { mukaddem: 7 }, bayrak: { p8_dokun: 'vals' }, adimlar: [
                /* Tur 27b (GPT B8-SE1): seçilen vals gerçekten duyulur; dans bitince romantik tema döner.
                   Tur 30 (t30 B8 ses (b), ORTAK): karşı köşkten uzaktan (vals_uzak; dosya yoksa ses.js özgün valse düşer) */
                { muzik: 'vals_uzak' },
                'Remzi Bey\'in orkestrası bizim için çalmıyordu. Biz yine de döndük.',
                'Çam iğneleri ayağımızın altında, üç adım, üç adım.',
              ] },
              { m: 'Şalı bırak. Ellerini onun ellerine koy.', kosul: (S) => b(S).p7_sofra !== 'vals', etki: { mukaddem: 6 }, bayrak: { p8_dokun: 'el' }, adimlar: [
                'Ellerimi ellerine koydum. Onunkiler soğuktu; benimkiler değil.',
              ] },
              /* Tur 29 (t29_b05_08 B8 oynanış 1): şal/el temasının açık reddi; Kenan'ın ilgisi saygısıyla görünür */
              { m: 'Şalı kendin düzelt. Ellerin sende kalsın.', etki: { mukaddem: 2 }, bayrak: { p8_dokun: 'kendi' },
                iz: 'Şalını kendin düzelttin. Kenan elini uzatmadı, bekledi.', adimlar: [
              'Şalımı kendim düzelttim. Ellerimi kendime sakladım, o da uzatmadı.',
              ] },
            ] },
            /* Tur 17 ek (madde 18): kartın açıldığı an el teması açık — eller kenetli, şal kaymış */
            { eger: (S) => b(S).p8_dokun === 'sal', ise: [
              /* GPT T29 O8-2: şal yardımı el tutmayı seçmez; eller öpücük sorusunda ayrıca verilir */
              'Düğüm gevşedi, şalım yine omzumdan kaydı. Ellerime uzanmadı, bekledi.',
            ], degilse: [{ eger: (S) => b(S).p8_dokun === 'ceket', ise: [
              /* Tur 27b (GPT B8-G1): öpücük resminde ceket Kenan'ın üstünde; ceket öpücükten önce sahibine döner.
                 Tur 29 (B8 anlatı 9): geri verişin hikâye içi nedeni */
              'Rüzgâr dinince ceketini omzuna geri koydum, o üşümesin. Ellerime uzanmadı, bekledi.',
            ], degilse: [{ eger: (S) => b(S).p8_dokun === 'vals', ise: [
              'Durduk, ellerimiz vals tutuşunda kenetli kaldı. Şalım omzumdan kaymış.',
              { muzik: 'romantik' },
            ], degilse: [{ eger: (S) => b(S).p8_dokun === 'kendi', ise: [
              /* Tur 33 (§0.6): "bir karış" motifi seyreldi */
              'Ellerimiz ayrı; aramızda yalnız ay ışığı.',
            ], degilse: [
              'Ellerimiz kenetli kaldı. Şalım omzumdan kaymış, düzeltmedim.',
            ] }] }] }] },
            /* GPT T25 Kenan (B8 anlatı 2): yeni basamak mesafe değil kesintisizlik */
            'Ay tam tepemizde. Bu kez geri çekilmemizi isteyen bir eşik yok.',
            /* Tur 27 (B8 görsel 2): öpücüklerin kendi resmi geldi (an_opucuk, an_opucuk_kas). El ele mehtap resmi
               (an_mehtap) artık öpücükten önce gösterilmez; yalnız öpücüksüz 'hayir' dalının resmidir. Böylece her
               oyuncu çamlıkta tek ve kendi seçimine ait bir an görür, iki kart üst üste gelmez. */
            /* Diyalog T1 (8.22): 'an' kutuya sığar. (8.7 reddedildi: Kenan'ın 'utangac' portresi kitaplı; benzet8 gece
               sahnesinde yasaklar. Romantik doruk için kitapsız bir utangaç portre görsel turuna.) */
            ['an', 'Nişanlılar adına hep başkaları sormuştu. Birbirlerine sorduklarını gören olmamıştı.'],
            ['mukaddem', 'Size bir şey soracağım. Hayır derseniz de sorduğuma pişman olmam.', 'kararli'],
            ['mukaddem', 'Sizi öpebilir miyim?', 'mahzun'],
            { soru: 'Soruyu bana bıraktı.', secim: [
              { m: 'Cevap verme. Onu sen öp.', etki: { mukaddem: 8, itibar: -1 }, bayrak: { p8_opus: 'sen' },
                iz: 'İlk adımı sen attın. Kenan bunu ömrü boyunca hatırlayacak.', adimlar: [
                /* Tur 28 (B8 görsel 1): an_opucuk'ta Kenan'ın eli Feride'nin yüzünde; metin resme uyar */
                'Ben öptüm. Gözleri açık kaldı; eli havada, nereye konacağını bilemedi.',
              /* Tur 31 (t31_b05_08 B8 görsel 14): pembe/mavi türü gelene kadar elbiseye uyan resim */
              { eger: (S) => anUyar(S, 'an_opucuk_sen'), ise: [OPUCUK_SEN], degilse: [{ cizim: 'an_opucuk' }] },
              ] },
              { m: '“Evet.” Gözlerini kapa.', etki: { mukaddem: 7, itibar: -1 }, bayrak: { p8_opus: 'evet' }, adimlar: [
                'Gözlerimi kapadım. Öptü; ilk çekinen yine o oldu.',
                { cizim: 'an_opucuk' },
              ] },
              { m: '“Kaşımın ucuna. Gerisi düğüne.”', etki: { mukaddem: 5 }, bayrak: { p8_opus: 'kas' },
                iz: 'Sınırı sen çizdin: kaşının ucu bu gece, gerisi düğüne.', adimlar: [
                /* Tur 29 (B8 görsel 4): resimlerde öpücük kaşın ucuyla alnın kenarı arasında; metin ikisini de tutar */
                'Kaşımın ucunu öptü, sonra durdu. Sınırımda beklemesine gülümsedim.',
                { cizim: 'an_opucuk_kas' },
              ] },
              /* Tur 17 ek (madde 12): açık ret de seçilebilir; yüksek ilgi öpücüğü kendiliğinden getirmez */
              { m: '“Hayır. Bu gece yalnız ellerim.”', kosul: (S) => b(S).p8_dokun !== 'kendi', etki: { mukaddem: 3 }, bayrak: { p8_opus: 'hayir' },
                iz: 'Hayır dedin. Kenan ellerini bırakmadı.', adimlar: [
                /* GPT T29 O8-2: şal/ceket yolunda eller burada, Feride'nin kendi seçimiyle verilir */
                { eger: (S) => b(S).p8_dokun === 'sal' || b(S).p8_dokun === 'ceket', ise: [
                  'Ellerimi ellerine ben verdim.',
                ] },
                ['f', 'Hayır. Bu gece yalnız ellerim.', 'utanmis'],
                /* Diyalog T1 (8.3): üçüncü "pişman" açılışta kalktı; soru ile ret arasındaki kurma-karşılık kalır */
                ['mukaddem', 'Ellerinizi siz bırakana kadar tutarım.', 'gulumser'],
                { cizim: 'an_mehtap' },
              ] },
              /* Tur 29 (B8 oynanış 1): ellerini vermeyen kızın hayırı el istemez; resmi el ele değil (an_mehtap_ayri, üretimde) */
              { m: '“Hayır. Bu gece yalnız ay.”', etki: { mukaddem: 3 }, bayrak: { p8_opus: 'hayir', p8_el: 'ayri' },
                iz: 'Hayır dedin. Kenan aradaki ay ışığına dokunmadı.', adimlar: [
                ['f', 'Hayır. Bu gece yalnız ay.', 'utanmis'],
                ['mukaddem', 'Ay da yeter. Ben beklemeyi bilirim.', 'mahzun'],
                { cizim: 'an_mehtap_ayri' },
              ] },
            ] },
            /* Tur 27 (B8 ses 3): an resminden SONRA dramatik sessizlik (önce gelirse resim sessizlikte arpla açılır);
               romantik tema fişeklerden sonra döner */
            { muzik: 'sessiz' },
            /* Kesintisiz karşılık */
            ['mukaddem', 'Bu gece uyuyabileceğimi sanmıyorum.', 'mahzun'],
            /* Sürükleyicilik T1 (mercek_romantik B8 (b)1): Feride gönlünü kendi ağzıyla, dönemin diliyle söyler
               ("seviyorum" sözü 13. bölümde ilk kez yüksek sesle söylenir; burada kullanılmaz) */
            { eger: (S) => b(S).p8_opus === 'hayir', ise: [
              ['f', 'Bana sordunuz. Bu gece en çok onu hatırlayacağım.', 'kararli'],
            ], degilse: [
              /* Diyalog T1 (8.4): "gönlünüzüm" doğal değil */
              /* Tur 28 (B8 diyalog 1): uzun duygu açıklaması yerine nesne; 6. bölümde Kenan'ın "Bunu da bir yere yazın"ını
                 duyan kız onu geri verir (yalnız iskarpini ayağına uzatan yol duydu) */
              { eger: (S) => b(S).p6_iskarpin === 'ayak', ise: [
                ['f', 'Oldu. Bunu da bir yere yazın.', 'utanmis'],
              ], degilse: [
                ['f', 'Oldu. Bu geceyi bu kez ben yazacağım.', 'utanmis'],
              ] },
            ] },
            /* Bedel: Remzi'nin fişekleri çamlığı aydınlatır */
            /* Tur 29 (B8 ses 2, anlatı 6): patlama sesi anlatıcının satırıyla birlikte; "art arda" ikinci patlamayla duyulur,
               Feride patlamayı yinelemez, ışığın gösterdiğini söyler */
            { efekt: 'fisek' },
            FISEK,
            /* Tur 30 (t30 B8 ses (b), ORTAK): ikinci patlama uzaktan ve vadide yankılı (ışık parlaması yalnız ilkinde) */
            { efekt: 'fisek_uzak' },
            'Gökyüzü yeşile boyandı. Selamlığın penceresinde bir lamba kıpırdadı.',
            { eger: (S) => b(S).p8_el === 'ayri', ise: [
              ['ic', 'Biri gördü: yan yana, mehtapta. Ellerimiz bile ayrıydı, görene bu da yeter.', 'endiseli'],
            ], degilse: [{ eger: (S) => b(S).p8_opus === 'hayir', ise: [
              ['ic', 'Biri gördü: el ele, mehtapta. Öpüşmedik ama görene bu da yeter.', 'endiseli'],
            /* Anlatı T2 (8.12): "Evet. Gözlerini kapa" diyen kız onun gözlerini göremezdi */
            ], degilse: [{ eger: (S) => b(S).p8_opus === 'evet', ise: [
              ['ic', 'Biri gördü. Ben görmedim, gözlerim kapalıydı.', 'utanmis'],
            ], degilse: [
              ['ic', 'Biri gördü. Ama önce ben gördüm: öperken gözlerini kapamıştı.', 'utanmis'],
            ] }] }] },
            { muzik: 'romantik' },
            /* "Onun gözünden": anlatıcının ara sayfası (rehber §2); sayfa kişileri kaldırdığı için Kenan yeniden çıkar */
            { ara: { yer: 'Onun gözünden', satirlar: [
              (S) => (b(S).p8_opus === 'sen'
                ? 'Kenan bu anı bir yıl yazdı, sildi, yeniden yazdı. Hiçbirinde ilk adımı o atmıyordu.'
                : 'Kenan fişeğin ışığında onun yüzünü aklına yazdı. Sonra karanlık geldi; yüz kaldı.'),
            ] } },
            /* İkinci geçiş (GPT T23 Süha tablosu): "Onun gözünden"den Feride'nin bakışına dönüş satırı */
            { eger: (S) => b(S).p8_el === 'ayri', ise: [
              'Fişeğin dumanı çamlara çöktü. O aralığı ben bıraktım, yerinde duruyor.',
          ], degilse: [{ eger: (S) => b(S).p8_dokun === 'sal' || b(S).p8_dokun === 'ceket', ise: [
            'Fişeğin dumanı çamlara çöktü. Aramızda hiç boşluk kalmamıştı.',
            ], degilse: [
              'Fişeğin dumanı çamlara çöktü. Ellerim hâlâ onun ellerinde.',
            ] }] },
            { goster: ['mukaddem', 'ana'] },
            ['mukaddem', 'Saatimi size bırakayım. Vapuru kaçırmak artık sizin elinizde.', 'gulumser'],
            { soru: 'Saatini avucuma uzattı.', secim: [
              { m: 'Saati al. Kapağını kapa.', etki: { mukaddem: 4 }, bayrak: { p8_hatira: 'saat' }, adimlar: [
                'Saati aldım. Avucumda işliyor; kalbimle aynı acelede.',
              ] },
              { m: 'Örgündeki kurdeleyi çöz, bileğine bağla.', etki: { mukaddem: 5 }, bayrak: { p8_hatira: 'kurdele' }, adimlar: [
                'Kurdelemi çözüp bileğine bağladım. Örgüm omzuma döküldü.',
                ['mukaddem', 'Bunu görürlerse…', 'endiseli'],
                ['f', 'Görsünler. Sözlüyüm.', 'kararli'],
              ] },
              /* Oynanış T1 B3: hatırayı geri çeviren cevap Kenan'ın ilgisini azaltır (−3) */
              { m: '“Saatinizi kurun. Sabah vapurunu siz seçin.”', etki: { mukaddem: -3 }, bayrak: { p8_hatira: 'yok' },
                iz: 'Saatini geri çevirdin. Kenan bir süre sustu.', adimlar: [
                ['mukaddem', 'Seçerim. Sizden uzaklaşmayan bir vapur olsun.', 'mahzun'],
              ] },
            ] },
            /* Feride'nin hamlesi: sabahın planı. Sürükleyicilik T1 (mercek_romantik B8 (a)): hatıradan plana tek köprü */
            /* GPT T29 A8-1: seçilmemiş "en mutlu an" hükmü yok */
            ['an', 'Ay inmeden Feride sabahı düşünmek zorunda kaldı.'],
            { eger: (S) => var_(S, ITIRAF), ise: [
              ['f', 'Perihan Hanım suçu birinin üstüne atacak. O biri sizsiniz.', 'endiseli'],
            ], degilse: [
              /* Tur 30 (şüphe ≠ hüküm): itirafı duymamış kız kesin konuşmaz */
              ['f', 'Merdivende bir tepsi dolaştı. Sabah birinin adı yazılacaksa sizinki olur.', 'endiseli'],
            ] },
            /* İkinci geçiş (GPT T23 Kenan): sabahki koruyucu yalanın tohumu; sonucu söylemez */
            ['mukaddem', 'Benim adım anılsın, razıyım. Yeter ki sizinki o sofraya düşmesin.', 'kararli'],
            ['mukaddem', 'Söyleyin, ne yapayım. Bu gece sizin sözünüzü dinlerim.', 'kararli'],
            { soru: 'Kararı bana bıraktı.', secim: [
              { m: '“İlk vapurla gidin. Adınızı burada yazamasınlar.”', etki: { mukaddem: 3 }, bayrak: { p8_plan: 'git' },
                iz: 'Kenan sabah vapuruyla gidecek. Kahvede yanında olmayacak.', adimlar: [
                ['mukaddem', 'Sekiz buçuk vapuru. Sizi pencerede görürsem dönerim.', 'mahzun'],
                ['f', 'Görmeyeceksiniz. Gidin.', 'mahzun'],
              ] },
              { m: '“Kalın. Yalanın yüzüne sabah birlikte bakalım.”', etki: { mukaddem: 5 }, bayrak: { p8_plan: 'kal' },
                iz: 'Kenan kalacak. Sabah kahvesinde yalanı birlikte karşılayacaksınız.', adimlar: [
                ['mukaddem', 'Kalırım. Sabah kahvede… yanınızdaki sandalye benim.', 'gulumser'],
              ] },
              { m: '“Annenize gidin, her şeyi önce o duysun.”', kosul: (S) => var_(S, ITIRAF), etki: { mukaddem: 4 }, bayrak: { p8_plan: 'anlat' },
                iz: 'Kenan annesine gidecek. Münevver Hanım yalanı önce oğlundan duyacak.', adimlar: [
                ['mukaddem', 'Annem bu evi tanır. Yalan ondan önce varamaz.', 'kararli'],
              ] },
            ] },
            { gizle: 'mukaddem' },
          ], degilse: [
            /* --- Süha yolu --- */
            /* Tur 27 (B8 ses 1): OLAY p8_camlik 'romantik' iki yolda aynı; Süha'nın çamlığı tehlike temasında çalar
               (an resimleri de karanlık akorla açılır) */
            { muzik: 'suha' },
            /* Anlatı T2 (mercek_doz §2c): huy cümlesi yerine o anki eylem (Ada'dalar; "konakta" değil) */
            ['an', 'Süha Bey çamın gövdesine yaslandı, sesini alçaltmaya gerek görmedi.'],
            { goster: ['suha', 'notr'] },
            /* Tur 17: "neyimsiniz" sorusu vapurda cevap buldu ("Ben sizi isteyen adamım"). Çamlık tanımı
               yeniden kurmaz; Feride onun kendisi için neyi göze alacağını sorar. */
            ['f', 'Vapurda ne istediğinizi söylediniz. Bu gece neyi göze alacaksınız?', 'kararli'],
            /* 6. bölüm sonu: kapıdaki cevap */
            { eger: (S) => b(S).p6_son === 'sor', ise: [
              ['suha', 'Ada\'da söylerim demiştim, vapurda söyledim. Şimdi söz değil, iş istiyorsunuz.', 'notr'],
            ], degilse: [{ eger: (S) => b(S).p6_son === 'ac', ise: [
              ['suha', 'Konakta kapınızı açıp adımı söylediniz, bedelini siz göze aldınız. Bu gece sıra bende.', 'notr'],
            ], degilse: [
              ['suha', 'Kapınızı kapalı tutmuştunuz, “şimdilik” dedim. Şimdilik bu gece bitiyor.', 'soguk'],
            ] }] },
            /* 7. bölüm: vapurdaki borç ya da şart */
            { eger: (S) => b(S).p7_borc === 'borc', ise: [
              /* GPT T26 Süha (öncelik 7): 7. bölümdeki "karşılık" sözüne bağlanır; borç dili seyrelir */
              ['suha', 'Karşılığını konuşacaktık. Önce ben vereyim, sonra siz.', 'alayci'],
            ], degilse: [{ eger: (S) => b(S).p7_borc === 'sart', ise: [
              /* Anlatı T2b: 7. bölümdeki kelime oyunu yinelenmez; Feride'nin "adı da şartın içindeydi" sözüne cevap */
              /* Diyalog T1 (8.19, D4): "fiyat" Remzi'nin; Süha hekim diliyle */
              /* Tur 27b (GPT B8-D1): mecazsız; hekimin gerçek kaçamağı açık */
              ['suha', 'Kenan Bey’e el sürmedim. Adına karışmayacağıma söz vermedim.', 'soguk'],
            ], degilse: [
              { eger: (S) => b(S).p7_soz === 'bitti', ise: [
              ['suha', 'Vapurda konuşmayı bitirdiniz. Bu haber için bir söz vermediniz; yine de duyun.', 'soguk'],
            ], degilse: [
              ['suha', 'Kendiniz bulacaktınız. Buldunuz mu, yoksa ben mi söyleyeyim?', 'alayci'],
            ] },
            ] }] },
            /* İkinci geçiş (GPT T23 Süha): "kendini bitirir" cümlesi seçenekten önce Süha'nın ağzından duyulur */
            ['suha', 'Sabah babanıza Perihan\'ın hikâyesini okuyacağım: misafiriniz bir şişe konyak bitirdi.', 'soguk'],
            ['suha', 'Son cümlesi de onun: “Kendini bitirir.” Ama sizin adınız o hikâyeye girmeyecek.', 'soguk'],
            { soru: 'Göze aldığı bu kadar. Yeter mi?', secim: [
              { m: '“Yetmez. Suç ortağım olun, okurken bana bakın.”', etki: { suha: 6 }, bayrak: { p8_ad: 'ortak' }, adimlar: [
                ['f', 'Yetmez. Suç ortağım olun, okurken bana bakın.', 'gulumseyen'],
                { eger: (S) => b(S).p7_gece === 'alin', ise: [
                  ['suha', 'Kapıda ben söylemiştim. Sizden duymak başkaymış.', 'notr'],
                ], degilse: [
                  ['suha', 'Ortaklığı siz kurdunuz. Hesabı ben tutarım.', 'alayci'],
                ] },
              ] },
              /* Tur 18 (madde 11): eski "adını söyle" (6. bölüm kapısının tekrarı) yerine somut şart; sabah kahvede uygulanır */
              { m: '“Yetmez. Sabah ‘kendini bitirir’ demeyeceksiniz.”', etki: { suha: 6 }, bayrak: { p8_ad: 'is' }, adimlar: [
                ['f', 'Sabah “kendini bitirir” demeyeceksiniz. O cümle Perihan Hanım\'ın; sizin olmasın.', 'kararli'],
                ['suha', 'Demem. En sevdiği cümleyi sabah yutarım, siz de seyredin.', 'alayci'],
              ] },
              { m: '“Henüz hiçbir şeyi göze almadınız.”', etki: { suha: 4 }, bayrak: { p8_ad: 'hic' }, adimlar: [
                ['f', 'Henüz hiçbir şeyi göze almadınız.', 'kararli'],
                ['suha', '“Henüz.” Bütün geceyi bu kelimenin üstüne kurarım.', 'alayci'],
              ] },
              /* Tur 29 (t29_b05_08 B8 oynanış 2): yalanın kendisini reddetmek; kahvede Süha Kenan'ın adını söylemez,
                 adı Perihan Hanım kendi ağzıyla koyar (9. bölüm 'adsiz'ı okur: t29_ortak_istek_b05_08.md) */
              { m: '“Yetmez. Kenan Bey\'in adını o hikâyeden çıkarın.”', etki: { suha: 2, vakar: 1 }, bayrak: { p8_ad: 'adsiz' }, adimlar: [
                ['f', 'Yetmez. Kenan Bey\'in adını o yalandan çıkarın; yalanı Perihan Hanım kendi ağzıyla söylesin.', 'kararli'],
                ['suha', 'Çıkarırım. Onun ağzını kapatamam ama; sabah yalanı kimin ağzından duyacağınızı siz seçtiniz.', 'notr'],
              ] },
            ] },
            /* 7. bölüm: yaşmağın ucu */
            { eger: (S) => b(S).p7_yasmak === 'birak', ise: [
              /* Anlatı T2 (GPT 8.2): yaşmak devredilmedi; Süha'da kalan koku (7. bölüm öte yan satırıyla uyumlu) */
              ['suha', 'Yaşmağınızın kokusu limonu bastırdı, hâlâ parmaklarımda.', 'alayci'],
            ], degilse: [{ eger: (S) => b(S).p7_yasmak === 'al', ise: [
              /* Anlatı T2b (GPT 24b B8): 7. bölümde ucu bırakmadı, tülü birlikte katladılar */
              /* GPT T26 Süha (B7 oynanış 1): 7. bölümde tül katlanıp Feride'ye geri verildi */
              /* Tur 28 (B7 sürük 3): vapurda istenen tül geri verilmedi, Süha'nın cebinde; çamlıkta vaadi okunur */
              ['suha', 'Yaşmağınız hâlâ cebimde. “Ada\'da isteyin” demiştim; bu gece isteyin, veririm.', 'alayci'],
            ], degilse: [
              { eger: (S) => b(S).p7_soz === 'bitti', ise: [
              ['suha', 'Vapurda yanıma dönmediniz. Bu gece sizi dinliyorum.', 'notr'],
            ], degilse: [
              ['suha', 'Vapurda tülü çektiniz, avucumda iz kaldı. Bu gece çekmeyin.', 'notr'],
            ] },
            ] }] },
            'Saçıma bir çam iğnesi takılmış. Eli havada durdu, izin bekliyor.',
            { soru: 'Dokunmadan bekliyor. Cevap benim.', secim: [
              { m: 'İzin ver. İğneyi saçından alsın.', etki: { suha: 6 }, bayrak: { p8_dokun: 'igne' }, adimlar: [
                'İğneyi alıp kendi yakasına iliştirdi. “Bu gecenin tek hatırası.”',
              ] },
              { m: 'İğneyi kendin al. Elini onun avucuna bırak.', etki: { suha: 7 }, bayrak: { p8_dokun: 'el' }, adimlar: [
                'Elimi avucuna bıraktım. Parmakları kapandı, nabzımı saymadı.',
              ] },
              { m: 'Geri çekil: “Hekimliği gündüze bırakın.”', bayrak: { p8_dokun: 'geri' }, adimlar: [
                ['f', 'Hekimliği gündüze bırakın.', 'kararli'],
                ['suha', 'Gündüz hekimim. Gece ne olduğumu siz söyleyin.', 'soguk'],
              ] },
            ] },
            /* Tur 17 ek (madde 18): kartın açıldığı an — parmaklar kapanmış, Süha'nın yüzü yumuşamış.
               Geri çekilen yolda eli indiren Feride'dir; ret onun seçimi olarak kalır. */
            /* Tur 27 (B8 diyalog 5): hekim yumuşatılmaz; "yumuşamış / ilk kez" yerine görünen davranış */
            /* Tur 29 (t29_b05_08 B8 anlatı 1): iğneye verilen izin el izni değildir; temas yalnız iğne */
            { eger: (S) => b(S).p8_dokun === 'igne', ise: [
              'Eli saçımın yanında kaldı; dokunmadı. Gülmüyordu.',
            ], degilse: [{ eger: (S) => b(S).p8_dokun === 'el', ise: [
              'Elimi bırakmadı. Bu kez gülmeden yüzüme baktı.',
            /* Tur 18 (öneri 6): geri çekilen yolda temas yok; eli havada kalır, ısrarı sürer */
            ], degilse: [
              'İğneyi saçımdan kendim çekip attım. Eli havada kaldı, indirmedi; ben de yaklaşmadım.',
            ] }] },
            /* Kartın adı tarafsız (öneri 6): evet ya da hayır, bu an henüz sorulmamış bir soru.
               Tur 27 (B8 görsel 3): öpücüğün kendi resmi (an_opucuk_suha) geldi. El ele resmi (an_camlik) artık öpücükten
               önce gösterilmez; eli tutan kız "hayır" derse o dalda açılır. Eli havada bırakan kızın resmi (an_camlik_ret)
               burada kalır: o yolun anı geri çekilmenin kendisidir. */
            { eger: (S) => b(S).p8_dokun === 'geri', ise: [{ cizim: 'an_camlik_ret' }] },
            /* Anlatı T2b (GPT 24b B8 öneri 1): Feride'nin bir saat şartını Süha gerçekten gözetir; tehlikesi sürer */
            { eger: (S) => b(S).p8_cik === 'saat', ise: [
              'Aya bakıp eve dönmemiz gerektiğini söyledi. Vakti benim de saydığımı bilmiyordu.',
            ] },
            /* Anlatı T2b (GPT 24b B8): mutlak hüküm ("ömründe izin istemezdi") ekranda izin isteyen adamla çelişiyordu */
            ['an', 'Süha Bey bu kez cevabı Feride\'nin yüzünden okuyamadı.'],
            /* GPT T28 (8-D1): isteğin nesnesi açık */
            /* Tur 33 (B8 görsel 1): Süha'nın 80 satırında tek mahzun yoktu; isteğin anı */
            ['suha', 'Sizi öpmek istiyorum. Bir küçük evet, yalnız bu gece için.', 'mahzun'],
            ['suha', 'Hayır derseniz, hayatımda ilk kez bir hayırı sevmiş olurum.', 'alayci'],
            { soru: 'Onu öpmek istiyor muyum?', secim: [
              { m: '“Evet.” Onu sen öp.', etki: { suha: 8, itibar: -1 }, bayrak: { p8_opus: 'sen' }, adimlar: [
                /* GPT T26 Süha (B8 sürük. 1): masumiyet yorumu yerine görünen davranış */
                /* Tur 29 (B8 görsel 3): an_opucuk_suha'da bir eli Feride'nin elinde, öbürü cebinde; metin resme uyar */
                'Ben öptüm. Bir eli elimi buldu, öbürü cebinde kaldı; cevabı yoktu.',
                { cizim: 'an_opucuk_suha' },
              ] },
              { m: '“Evet.” Gözlerini kapama.', etki: { suha: 7, itibar: -1 }, bayrak: { p8_opus: 'evet' }, adimlar: [
                /* Tur 28 (B8 görsel 2): an_opucuk_suha'da Süha'nın gözleri kapalı; metin resme uyar */
                'Gözlerimi kapamadım. O kapadı; yüzüne bu kadar yakından ilk kez baktım.',
                { cizim: 'an_opucuk_suha' },
              ] },
              { m: '“Hayır.” Gözünü kaçırma.', etki: { suha: 3 }, bayrak: { p8_opus: 'hayir' },
                iz: 'Hayır dedin. Artan yalnız hekimin ilgisi; bu senin evetin değil.', adimlar: [
                ['f', 'Hayır.', 'kararli'],
                /* Tur 29 (B8 diyalog 7): hayırı sevmesi tehlikesini silmez */
                ['suha', 'Sevdim; tahmin ettiğimden çok. Bunu da hesaba yazarım.', 'soguk'],
                /* Eli tutan kızın "hayır"ı: el ele, ayın değmediği yerde (öpücüksüz yolun resmi).
                   Tur 29 (B8 anlatı 1, görsel 5): yalnız elini kendisi veren kız ('el'); iğneye izin veren kız el tutmadı,
                   onun hayırının resmi elin havada kaldığı kare (an_camlik_ret) */
                { eger: (S) => b(S).p8_dokun === 'el', ise: [
                  /* GPT T28 (8-D1): el tutmaya izin ile öpülmeye izin ayrı */
                  'Elimi çekmedim. Ama yaklaşmasına izin vermedim.',
                  { cizim: 'an_camlik' },
                ], degilse: [{ eger: (S) => b(S).p8_dokun === 'igne', ise: [
                  'Elimi tutmadı, ben de uzatmadım. Bu geceden ona yalnız bir çam iğnesi kaldı.',
                  { cizim: 'an_camlik_ret' },
                ] }] },
              ] },
            ] },
            /* Tur 27 (B8 ses 3): an resminden SONRA sessizlik; sır cümleleri müziksiz */
            { muzik: 'sessiz' },
            /* Kesintisiz karşılık */
            ['suha', 'Şimdi ikimizin de bir sırrı var.', 'gulumser'],
            ['f', 'Sizinki sabah konuşacak.', 'kararli'],
            ['suha', 'Sizinki susarsa ikisi de yaşar.', 'soguk'],
            /* Bedel: fişeğin ışığında misafir odasının penceresi (alt kat, çamlığa bakar) */
            /* Tur 29 (B8 ses 2, anlatı 6): ses anlatıcının patlamasıyla; Feride patlamayı yinelemez */
            { efekt: 'fisek' },
            FISEK,
            'Fişek çamlığı aydınlattı. Misafir odasının penceresinde bir gölge.',
            { muzik: 'gerilim' },
            ['ic', 'Kenan Bey. Uyumamış, görmüş.', 'endiseli'],
            { soru: 'Pencerede o; yanımda bu.', secim: [
              { m: 'Başını kaldır. Pencereye bak; kaçma.', etki: { mukaddem: 2 }, bayrak: { p8_pencere: 'bak' },
                iz: 'Kenan\'ın gözüne baktın. Ona bir yalan borçlu kalmadın.', adimlar: [
                'Pencereye baktım. Gölge geri çekilmedi, ben de çekilmedim.',
                ['ic', 'Kaçmamak kolay değil. Ama ona bir yalan borçlu kalmaktan iyi.', 'mahzun'],
              ] },
              { m: 'Ondan ayrıl. Eve ondan önce koş.', bayrak: { p8_pencere: 'kos' }, adimlar: [
                'Geri çekilip çamların arasından eve ondan önce koştum.',
                ['suha', 'Koşun. Ben yürüyerek gelirim, acelem yok.', 'alayci'],
              ] },
              /* Oynanış T1 B3 (rakip çubuk): pencerede gören sözlü kırılır (−4) */
              { m: 'Süha\'nın elini tut. Görsün.', etki: { suha: 6, itibar: -1, mukaddem: -4 }, bayrak: { p8_pencere: 'tut' },
                iz: 'Kenan elini Süha\'nın elinde gördü. Perdeyi kendisi kapadı.', adimlar: [
              'Elini tuttum. Pencerede gölge durdu, sonra perde kapandı.',
                ['suha', 'Bunu benim için mi yaptınız, ona karşı mı?', 'notr'],
              ] },
            ] },
            /* "Onun gözünden": anlatıcının ara sayfası (rehber §2); sayfa kişileri kaldırdığı için Süha yeniden çıkar */
            { ara: { yer: 'Onun gözünden', satirlar: [
              (S) => (b(S).p8_opus === 'hayir'
                ? 'Süha fişeğin ışığında onun “hayır”ını gördü. Perihan\'ın bütün evetlerinden güzeldi.'
                /* GPT T26 Süha (B8 sürük. 2): Süha'nın hesabı söylenmez; sabahki hareketinden anlaşılır */
                : 'Süha fişeğin ışığında misafir odasının penceresini gördü. Gülmedi; ışık sönene kadar gözünü ayırmadı.'),
              /* Tur 27 (B8 anlatı 10'a 3): sayfa bir karar cümlesiyle biter; kararın içeriği sabaha kalır */
              (S) => (b(S).p8_opus === 'hayir'
                ? 'O hayırı kimseye anlatmamaya karar verdi; Perihan\'a hiç.'
                /* Tur 33 (B8 anlatı 4): sabahki fincan hareketini önden ele vermez */
                : 'Sabaha kadar kimseye bir şey söylemedi; Perihan\'a hiç.'),
            ] } },
            /* İkinci geçiş: "Onun gözünden"den dönüş; eve koşan yolda Süha ona yürüyerek yetişir */
            { eger: (S) => b(S).p8_pencere === 'kos', ise: [
              'Bahçe kapısında yetişti, dediği gibi yürüyerek.',
            ], degilse: [
              'Fişeğin dumanı çamlara çöktü. Pencerede artık kimse yoktu.',
            ] },
            /* Tur 33 (B8 ses 4): Süha teması çamlıkta bir kez; pazarlık gecede */
            { muzik: 'gece' },
            { goster: ['suha', 'notr'] },
            ['suha', 'Sabah susarsanız, bu çamlık hiç olmadı. Pazarlığım bu.', 'notr'],
            { soru: 'Pazarlığı önüme koydu.', secim: [
              { m: '“Kabul. Susarım.”', etki: { suha: 4 }, bayrak: { p8_pazar: 'kabul' },
                iz: 'Susacağına söz verdin. Sabah çamlık hiç olmamış sayılacak.', adimlar: [
                /* Diyalog T1 (ses A9): "Akıllı kız" Perihan'ın; Süha hekim ağzıyla */
                ['suha', 'Sabah yüzünüz sizi ele vermesin.', 'alayci'],
              ] },
              { m: '“Şartım var: Hatice\'nin adını siz söylemeyeceksiniz.”', etki: { suha: 5 }, bayrak: { p8_pazar: 'sart' },
                iz: 'Pazarlığa şart koydun: sabah Hatice\'nin adı hekimin ağzından çıkmayacak.', adimlar: [
                ['suha', 'Söylemem. Perihan\'ın ağzına karışamam ama.', 'notr'],
              ] },
              /* Oynanış T1 B3: pazarlığı geri çeviren cevap hekimin ilgisini azaltır (−3); tehlikesi sürer */
              { m: '“Pazarlık etmem. Ne yaparsam kendim yaparım.”', etki: { suha: -3 }, bayrak: { p8_pazar: 'ret' },
                iz: 'Pazarlığı reddettin. Hekim artık kendi oyununu oynayacak.', adimlar: [
                /* İkinci geçiş (GPT T23 Süha): yakınlığı kabul, sessizliği ret ayrımı tek satırda */
                { eger: (S) => b(S).p8_opus === 'hayir', ise: [
                  ['f', 'Bir hayırı sevdiğinizi söylediniz. Bu da ikincisi.', 'tebessum'],
                ], degilse: [
                  ['f', 'Size evet dedim. Yalanınıza değil.', 'ofkeli'],
                ] },
                /* GPT T26 Süha (B8 diyalog 10'a 2): hazır cevaptan önce kısa bir duraksama */
                'Hemen cevap vermedi. Çam iğneleri ayağının altında çıtırdadı.',
                ['suha', 'Yapın. Ben de yaparım; ikimiz de kaybederiz.', 'soguk'],
              ] },
            ] },
            { gizle: 'suha' },
          ] },
          { gorev: 2 },
          /* Artçı ve dönüş (mercek_artci 14): öpücük ya da ret bedende iz bırakır; Süha / Kenan önceden söylenmez */
          { ara: { mekan: 'ada_sofa', yer: 'Ada evi · gece yarısını geçe', satirlar: [
            'Fişeklerin dumanı çamlardan çekilirken Feride eve döndü; gecenin ona verdiğini kimseye göstermeden içeri taşıdı.',
            /* Anlatı T2 (8 (b)2): Kenan yolunda Kenan'ın dönüşü de kapanır */
            /* GPT T26 Süha (B8 anlatı 2): kapının açık kalışı bu evin bu gecesine bağlı, Ada geneline değil */
            (S) => (muk(S)
              ? 'Kenan geldiği yoldan döndü, Feride arka kapıdan. Sürgüsünü akşam Hatice çekecekti; o gece Hatice\'nin aklı başka kapıdaydı.'
              : 'Arka kapının sürgüsünü akşam Hatice çekecekti. O gece Hatice\'nin aklı başka bir kapıdaydı.'),
          ] } },
        ],
      },

      /* ---------------- 3. Dönüş: merdivende biri; gece serbest vakti ---------------- */
      {
        id: 'p8_merdiven', mekan: 'ada_sofa', tetik: 'giris', kosul: (S) => S.gorev === 2, sahne: [],
        adimlar: [
          /* Anlatı T2 (mercek_yay B8 (b)): öpücüğün artçısı merdivende soğumadan taşınır (dudaktan öpüşme dallarında) */
          { eger: (S) => b(S).p8_opus === 'sen' || b(S).p8_opus === 'evet', ise: [
            'Dudaklarım hâlâ çamlıkta. Merdiven karanlık, basamaklar buz gibi.',
          ], degilse: [
            'Merdiven karanlık, ikinci basamağın gıcırdadığını biliyorum.',
          ] },
          { efekt: 'adim' },
          { eger: muk, ise: [
            /* Anlatı T2 (mercek_doz §2c): Süha'nın bu bölümdeki huy cümleleri eyleme çevrildi */
            ['an', 'Merdivenin başında bir lamba yanıyordu. Süha Bey uyumamıştı.'],
            { goster: ['suha', 'alayci'] },
            /* Tur 27 (B8 sürük. 10'a 1): öpücüğün bedeli ("biri gördü") Süha'nın ağzında somutlaşır */
            /* GPT T29 O8-1: evden çıkmayan kızın gecesi */
            { eger: evde, ise: [
              ['suha', 'Bu gece bahçeye inmediniz. Fişek bunu da gösterdi; akıllıca.', 'alayci'],
            ], degilse: [
              ['suha', 'Mehtap güzeldi. Fişek daha güzeldi, ikinizi de gösterdi.', 'soguk'],
            ] },
            /* Diyalog T1 (8.14, Ü1): "ilgili" dönem dışı */
            ['suha', 'Sabah bir hikâye anlatacağım. Sizin hikâyeniz değil, korkmayın.', 'soguk'],
            { soru: 'Merdivenin başını tutuyor.', secim: [
              /* Oynanış T1 B3 (rakip çubuk): Kenan yolunda da Süha'nın ilgisi oynar; ona dönmek +3, yanından geçmek −3 */
              { m: '“Ne anlatacaksanız önce bana anlatın.”', etki: { suha: 3 }, bayrak: { p8_suha: 'sor' },
                iz: 'Kapının ardındaki sözleri duydun.', adimlar: [
                ['suha', 'Misafiriniz bir şişe konyak bitirdi. Pek üzgünüm.', 'alayci'],
                /* Tur 30 (şüphe ≠ hüküm): sabahki hikâyeyi duydu; yalan olduğu kahvede sınanır */
                ['ic', 'Bunu sabah babamın önünde de söylesin.', 'endiseli'],
              ] },
              { m: '“Anlatın. Ben de Perihan Hanım\'la sizi anlatırım.”', kozGerek: GECMIS, kosul: kozVar(GECMIS), etki: { vakar: 1 }, bayrak: { p8_suha: 'tehdit' },
                iz: 'Kozunu hekime gösterdin. Açmadın, ama artık biliyor.', adimlar: [
                ['suha', 'Anlatın. Ben de bildiğimi söylerim.', 'soguk'],
                /* Diyalog T1 (8.23): tehdit bulanıklaşmaz */
                ['suha', 'Siz bilir misiniz? Bu deniz derin.', 'alayci'],
              ] },
              { m: 'Yanından geç. Bakma.', etki: { suha: -3 }, bayrak: { p8_suha: 'gec' }, adimlar: [
                'Yanından geçtim. Lambası arkamdan üç basamak çıktı, sonra durdu.',
              ] },
            ] },
            { gizle: 'suha' },
          ], degilse: [
            /* Tur 29 (B8 ses 4): kırgın Kenan'ın alçak sesli sahnesi gerilimde değil */
            { muzik: 'huzun' },
            ['an', 'Merdivenin başında, lambasız, biri oturuyordu. Kenan\'ın kızdığını kimse görmemişti; kızınca yalnız sesini alçaltırdı.'],
            { goster: ['mukaddem', 'ana'] },
            /* Tur 28 (B8 anlatı 1, oynanış 1): çamlığa girmeyen kıza "altındakini" imâsı haksızdı; ret yolu hafızalı.
               Kenan'ın penceresine çakıl atan kızın hamlesi önce karşılanır */
            { eger: (S) => red(S) && b(S).p8_rhamle === 'kenan', ise: [
              { eger: burada, ise: [
                /* Tur 33 (B8 görsel 1): merdivende 8 satır üst üste mahzun serisi kırıldı */
                ['mukaddem', 'Penceremdeki çakılı aldım. Fişek patladığında hekim aşağıdaydı. Sizi yukarıda gördüm.', 'kararli'],
              ], degilse: [
                ['mukaddem', 'Penceremdeki çakılı aldım. Fişek de ikinizi kıyıda gösterdi; bir adım atmadığınızı da.', 'kararli'],
              ] },
            ], degilse: [{ eger: red, ise: [
              { eger: burada, ise: [
                ['mukaddem', 'Fişek patladığında hekim aşağıdaydı. Siz merdivenin başındaydınız.', 'kararli'],
              ], degilse: [
                ['mukaddem', 'Fişek ikinizi kıyıda gösterdi. Bir adım bile atmadığınızı da gösterdi.', 'kararli'],
              ] },
            ], degilse: [{ eger: (S) => son7(S) === 'uyar', ise: [
              ['mukaddem', 'Kapımı kimseye açmayın demiştiniz, açmadım. Pencereyi demediniz.', 'mahzun'],
            ], degilse: [
              ['mukaddem', 'Fişekler güzeldi. Altındakini görmeseydim daha güzel olurdu.', 'mahzun'],
            ] }] }] },
            /* Çamlıkta pencereye verilen karşılık */
            { eger: (S) => b(S).p8_pencere === 'bak', ise: [
              ['mukaddem', 'Bana baktınız, kaçmadınız. Bunu da unutmayacağım.', 'mahzun'],
            ], degilse: [{ eger: (S) => b(S).p8_pencere === 'kos', ise: [
              ['mukaddem', 'Koştunuz. Benden mi, ondan mı?', 'mahzun'],
            /* Tur 28b: yukarıda kalıp geri çekilen kız (p8_pencere 'cekil') */
            ], degilse: [{ eger: (S) => b(S).p8_pencere === 'cekil', ise: [
              ['mukaddem', 'Geri çekildiniz. Ondan mı, benden mi, sormayacağım.', 'mahzun'],
            ], degilse: [
              ['mukaddem', 'Elini tuttuğunuzu gördüm. Perdeyi ben kapadım, siz değil.', 'mahzun'],
            ] }] }] },
            { soru: 'Sesi sakin. Sakinliği kötü.', secim: [
              /* Tur 27b (GPT B8-O2): kalma kararı seçeneğin kendisinde; Kenan'ın cevabı onu kabul eder */
              { m: '“İsterseniz anlatırım. Sabah da kalın.”', etki: { mukaddem: 2 }, bayrak: { p8_kenan: 'kal' }, adimlar: [
                ['f', 'Size borçlu olduğum bir açıklama var Kenan Bey. İsterseniz şimdi; sabah da kalın.', 'mahzun'],
                ['mukaddem', 'Kalırım. Açıklamanızı şimdi istemem.', 'kararli'],
              ] },
              { m: '“İlk vapurla gidin. Sabah burada olmayın.”', etki: { mukaddem: 2 }, bayrak: { p8_kenan: 'git' }, adimlar: [
                ['mukaddem', 'Giderim. Siz istediğiniz için; o istediği için değil.', 'mahzun'],
              ] },
              { m: 'Bir şey deme. Gözünü kaçırma.', bayrak: { p8_kenan: 'kal' }, adimlar: [
                ['mukaddem', 'Kaçırmıyorsunuz. Bu da bir cevap.', 'mahzun'],
              ] },
            ] },
            { gizle: 'mukaddem' },
          ] },
          /* Tur 28 (t28_b05_08 B8 sürük 2): öpücükten sonraki vadi kırılır. Perihan'ın kapısındaki ezber (doruğu doğrudan
             besleyen ifşa) uğrak değil, zorunlu sahne; koridor babanın kapısının önünden geçer (eski riskli geçişin bedeli
             "tıklat" cevabında). Ardından gece vakti tek hak. */
          /* Tur 29 (B8 ses 4): ezberin sahibi Perihan; kapısında onun teması */
          { muzik: 'perihan' },
          { ara: { mekan: 'ada_kapi_perihan', yer: 'Ada evi · koridor, gece yarısını geçe', satirlar: [
            'Koridor Sait Efendi\'nin kapısının önünden geçiyordu; Feride parmak uçlarında yürüdü. Perihan Hanım\'ın kapısının altından ışık sızıyordu.',
          ] } },
          'İçeride Hatice burnunu çekiyor.',
          ['calibe', 'Sabah ben “gördüm” derim, sen “şaşırmıştım” dersin. Gerisini hekim anlatır.', 'sinsi'],
          { soru: 'Sabahın ezberi kapının ardında.', secim: [
            { m: 'Dinle. Sonuna kadar.', bayrak: { p8_kapi: 'dinle', p8_ezber: true }, adimlar: [
              ['calibe', '“Şaşırmıştım” de; fazlasını söyleme. Ağlamak yeter.', 'sinsi'],
              ['ic', 'Ezberlerini duydum. Sabah bu oyunu dışarıdan seyretmeyeceğim.', 'kararli'],
            ] },
            { m: 'Kapıyı tıklat: “Hatice\'ye su lazım mı?”', etki: { vakar: 1, calibe_suphe: 1 }, bayrak: { p8_kapi: 'tiklat' }, adimlar: [
              /* Tur 29 (B8 ses): kapı açılmıyor, vuruluyor */
              { efekt: 'kapi_tik' },
              'İçerisi sustu. Kapı açılmadı.',
              ['calibe', 'Uyu kızım. Gece uyumayan kız sabah çok şey anlatır.', 'soguk'],
            ] },
          ] },
          /* Gece serbest vakti: sabahın hikâyesi şimdiden kuruluyor. Tur 28: tek hak; ret yolunda gece hamlesiyle
             önceden tüketilen yer (şişe / toka) kapanır */
          { vakit: {
            ad: 'Şafaktan önce', hak: 1,
            plan: GEZINME_SAFAK.plan, riskli: GEZINME_SAFAK.riskli,
            hedef: { mekan: 'ada_oda', metin: 'Perihan Hanım\'ın lambası söndü; kapısı her an açılabilir. Bir yere daha uğrayacak vaktin var.' },
            mekanlar: ['ada_selamlik', 'ada_misafir', 'ada_oda'],
            yerler: {
              ada_selamlik: { eylem: 'şişeye bak', ipucu: 'Selamlığın perdesi aralık; içeride bir şişe parlıyor (eşya).',
                kosul: (S) => !b(S).p8_dekor,
                adimlar: [
                  'Selamlıkta lamba sönük. Masada boş bir şişe, yanında tek bardak.',
                  /* Tur 28b (kök 4; GPT 8-O2): görgü ve kuşku; kurulduğu hüküm sayılmaz */
                  ['ic', 'Biri bunu sahne gibi dizmiş. Sabah kim anlatacak, ona bakacağım.', 'endiseli'],
                  { soru: 'Boş şişe masada.', secim: [
                    { m: 'Şişeyi al, sandığına sakla.', bayrak: { p8_dekor: 'al' }, adimlar: [
                      { efekt: 'sise' },
                      'Şişeyi şalıma sardım. Bardağı ters çevirdim, kupkuru.',
                      { koz: BOS, kaynak: 'Şişe sandığımda', alt: 'Selamlıktaki konyak şişesi boştu, bardak kuruydu. Şişe şimdi sandığımda.' },
                    ] },
                    { m: 'Dokunma. Yerini bil.', bayrak: { p8_dekor: 'birak' }, adimlar: [
                      ['ic', 'Dokunmadım; bardak kupkuru. Yerini bilmem yeter.', 'kararli'],
                    ] },
                  ] },
                ] },
              ada_misafir: { eylem: 'eşiğe bak', ipucu: 'Misafir odasının eşiğinde bir şey parlıyor (eşya).',
                kosul: (S) => !b(S).p8_toka,
                adimlar: [
                  'Misafir odasının eşiğinde bir kadın tokası. Hatice\'nin, saçında görmüştüm.',
                  /* GPT T28 (8-O2): tokanın yeri kasıt kanıtı değil */
                  ['ic', 'Sabahın delili gibi duruyor. Düştü mü, kondu mu?', 'endiseli'],
                  { soru: 'Toka eşikte.', secim: [
                    { m: 'Tokayı al.', bayrak: { p8_toka: 'al' }, adimlar: [
                      'Tokayı avucuma aldım. Eşik boş kaldı.',
                      { koz: TOKA, kaynak: 'Toka bende', alt: 'Misafir odasının eşiğinde buldum; düştü mü, kondu mu, bilinmez. Şimdi bende.' },
                    ] },
                    { m: 'Bırak. Sabah kimin “bulacağını” gör.', bayrak: { p8_toka: 'birak' }, adimlar: [
                      ['ic', 'Bıraktım. Bulanın yüzüne bakacağım.', 'kararli'],
                    ] },
                  ] },
                ] },
            },
            bitis: [['an', 'Ev kıpırdadı, bir kapı açıldı. Feride odasına, ardında iz bırakmadan döndü.']],
          } },
          { gorev: 3 },
          /* Zaman atlaması: gece → sabah (eski "tavana bakarak geçirdim" satırı anlatıcıya taşındı) */
          /* GPT T25 Kenan (B8 anlatı 6): etiket ilk cümleyle uyumlu; sabaha geçişi ikinci satır kurar.
             Tur 27 (B8 görsel 1): "şafaktan sabaha" motor zamanOku'da 'şafak' kalıbına düşüp akşam süzgeci ve gece
             ortamı getiriyordu; etiket "sabah" (gündüz) */
          { ara: { mekan: 'ada_oda', yer: 'Ada evi · sabah', satirlar: [
            'Sabaha iki saat vardı. Feride onları uyuyarak değil, söylenecek yalanları birer birer tartarak geçirdi.',
            /* Tur 29 (t29_b05_08 B8 sürük. 10'a 1): öpücükle doruk arasındaki düzlüğe karşı yanın gerilimi; mendil keşfini besler */
            'Üst katta bir lamba sabaha kadar yandı. Perihan Hanım o gece yatağına hiç girmedi.',
            /* Tur 30 (t30 B8 anlatı 3): vapur saati raporu kalktı; vapur sabah sahnede öter (gidenle kalan orada görünür) */
          ] } },
        ],
      },

      /* ---------------- 4. Sabah: bir kanıt, bir kişi; kıyafet; sabah vakti ---------------- */
      {
        id: 'p8_sabah', mekan: 'ada_oda', tetik: 'giris', kosul: (S) => S.gorev === 3, sahne: [],
        adimlar: [
          /* Sürükleyicilik T1 (b7_8_9 8.2): hava açılışı kesildi; ara sayfa sabahı zaten kurdu */
          /* Anlatı T2 (GPT 8 (b)2): şişeyi gömen dalda gecenin ortak işi bedende sürer */
          { eger: (S) => b(S).p8_cik === 'sise', ise: [
            /* Diyalog T1 (8.20): dördüncü "yıkamadım" kalktı */
            'Tırnaklarımın dibinde hâlâ çam toprağı var.',
          ] },
          { eger: (S) => muk(S) && b(S).p8_plan !== 'kal', ise: [
            { efekt: 'vapur' },
            'Sekiz buçuk vapurunun çanı çaldı. Güvertede Kenan Bey, gözü penceremde.',
            ['ic', 'Perdenin ardında durdum. Görse dönerdi, dönmesin diye durdum.', 'mahzun'],
          ], degilse: [{ eger: (S) => !muk(S) && b(S).p8_kenan === 'git', ise: [
            { efekt: 'vapur' },
            'Sekiz buçuk vapurunun çanı çaldı. Kenan Bey pencereme bakmadan gitti.',
          ] }] },
          /* Sabah serbest vakti: kahveden önce. Tur 28 (t28_b05_08 B8 anlatı 2, sürük 1): telgraf ve kitap uğrağı hükmün
             eşiğinden alındı; vakit Hatice'nin ibrikle gelişinden ve delil seçiminden ÖNCE oynanır, delil seçiminden sonra
             doğrudan bahçe gelir (doruğa giden yolda ara yok). Hedef oda: Hatice ibrikle oraya gelecek. */
          { vakit: {
            ad: 'Kahveden önce', hak: 1,
            plan: GEZINME_KAHVE.plan, riskli: GEZINME_KAHVE.riskli,
            hedef: { mekan: 'ada_oda', metin: 'Babam asmanın altında fincanları saydırıyor. Hatice ibrikle gelmeden bir yere uğrayabilirsin.' },
            mekanlar: ['ada_iskele', 'ada_misafir', 'ada_oda'],
            yerler: {
              ada_iskele: { eylem: 'telgraf çek', ipucu: 'İskelede telgrafhanenin camı açık; birine haber yollayabilirsin (telgraf).',
                adimlar: [
                  'İskele sabah serinliğinde. Telgrafhanenin camı açık.',
                  { eger: (S) => (muk(S) ? b(S).p8_plan !== 'kal' : b(S).p8_kenan === 'git'), ise: [
                    'Sekiz buçuk vapurunun dumanı Heybeli\'ye doğru incelmiş.',
                  ] },
                  ['ic', 'Münevver Hanım bu yalanı birinden duyacak. Önce benden mi duysun?', 'endiseli'],
                  { soru: 'Telgrafçı bekliyor.', secim: [
                    { m: 'Telgraf çek: “Oğlunuza inanın. —F.”', etki: { munevver: 1 }, bayrak: { p8_telgraf: 'cek' },
                      iz: 'Münevver Hanım yalanı duymadan önce senin telgrafını okuyacak.', adimlar: [
                      { efekt: 'tik' },
              'Telgrafçı kelimeleri saydı: üç. Parasını yaşmağımın düğümünden verdim.',
                      /* Anlatı T2 (8 (b)4): Süha yolunda telgraf Feride'nin Kenan'a karşı vicdanını söyler */
                      /* Tur 29 (t29_b05_08 B8 anlatı 5): çekim yalnız Süha'ya yakınlık seçen kızda; reddeden kıza dayatılmaz */
                      { eger: (S) => !muk(S) && !red(S) && b(S).p8_opus !== 'hayir', ise: [
                        ['ic', 'Kenan Bey’i istemesem de adına söylenen bu yalanı düzeltirim.', 'mahzun'],
                      ], degilse: [{ eger: (S) => !muk(S), ise: [
                        ['ic', 'Sözlüm o. Onu bir yalanın altında bırakmam.', 'mahzun'],
                      ] }] },
                    ] },
                    { m: 'Çekme. Bazı sözler tele sığmaz.', bayrak: { p8_telgraf: 'yok' }, adimlar: [
                      'Camın önünden geçtim. Münevver Hanım\'a ağzımla söyleyeceğim, yüzüne bakarak.',
                    ] },
                  ] },
                ] },
              ada_misafir: { eylem: 'kitaba bak', ipucu: 'Misafir odasının kapısı açık kalmış; masada bir kitap var (eşya).',
                adimlar: [
                  /* GPT T25 Kenan (B8 anlatı 5): Şefik bu odada yattıysa onun yatağı ayrı anılır */
                  { eger: muk, ise: [{ eger: (S) => b(S).p7_hizmet === 'sefik', ise: [
                    'Misafir odası boş. Kenan\'ın yatağı bozulmamış, Şefik\'in yorganı ayak ucuna yığılmış.',
                  ], degilse: [
                    'Misafir odası boş. Yatak bozulmamış, gece hiç yatmamış.',
                  ] }], degilse: [
                    'Misafir odası boş. Pencerenin pervazında üç tırnak izi, gece burada durmuş.',
                  ] },
                  'Masada onun kitabı. İlk sayfada çocuk elimle iki kelime: “Bu senindir.”',
                  { eger: (S) => b(S).p8_masal === 'kitap', ise: [
              /* Tur 31 (t31_b05_08 B8 anlatı 2): gece "yanımda" demişti */
              ['ic', 'Gece “yanımda” demişti. Doğru söylemiş.', 'utanmis'],
            ], degilse: [
              ['ic', 'Dokuz yaşımda ona verdiğim masal kitabı. Ada\'ya getirmiş.', 'utanmis'],
            ] },
                  { soru: 'Kitap elimde.', secim: [
                    { m: 'Altına yaz: “Hâlâ.”', kosul: muk, bayrak: { p8_kitap: 'yaz' },
                      iz: 'Kenan kitabını açınca “Bu senindir”in altında “Hâlâ”yı bulacak.', adimlar: [
                      { efekt: 'kalem' },
                      'Altına yazdım: “Hâlâ.” Mürekkep kuruyana kadar bekledim.',
                    ] },
                    /* Tur 30 (t30 B8 oynanış 10'a 2): karşılığı 9. ve 10. bölümde (p8_kitap 'al') */
                    { m: 'Kitabı al; ona kendin geri ver.', kosul: (S) => !muk(S), bayrak: { p8_kitap: 'al' },
                      iz: 'Kenan\'ın masal kitabı sende. Onu kendi elinle geri vereceksin.', adimlar: [
                      /* Diyalog T1 (8.17): satır kendi eylemiyle çelişmez */
                      'Kitabı aldım. Kendi elimle, yüzüne bakarak geri vereceğim.',
                    ] },
                    { m: 'Kapağını kapa; yerine koy.', bayrak: { p8_kitap: 'kapa' }, adimlar: [
                      'Kapağını kapadım. Bazı hatıralar sahibinde kalmalı.',
                    ] },
                  ] },
                ] },
            },
            /* Tur 33 (B8 diyalog 9): vakit bitişi anlatıcı sesinde */
            bitis: [['an', 'Feride odasına dönerken bahçede kahve masası kuruluyordu.']],
          } },
          /* Tur 27 (B8 sürük. 4): öpücükten sonraki düz eğri kırılır; sabahın tehlikesi kahveden önce kapıda başlar.
             Tur 28 (B8 ses 1): Hatice'nin titreyen eli ve delil sorusu Perihan'ın temasında ('ada' gündüz teması vakitte kalır) */
          { efekt: 'kapi_kapa' }, { efekt: 'kapi_kapa' },
          ['an', 'Perihan Hanım’ın kapısı o arada iki kez açılıp kapandı.'],
          /* Diyalog T1 (karakter_sesleri §0): "bu evde" bölümde en çok iki kez */

          { goster: ['reftar', 'korkmus'] },
          /* Tur 27 (B8 anlatı 10'a 1): sabahın ilk yarım saatinde dış olay anlatıcıda */
          { efekt: 'dokulme' },
          ['an', 'Su leğenin kenarından taştı. Hatice\'nin eli titriyordu.'],
          /* 7. bölüm: aralık kapıdaki itiraf */
          { eger: (S) => b(S).p7_itiraf === 'bekle', ise: [
            'Parmağında Perihan Hanım\'ın yüzüğü. Taşını içe çevirmiş.',
          ], degilse: [{ eger: (S) => b(S).p7_itiraf === 'gir', ise: [
            'Dün ayak ucunda ağlayan kız bugün dimdik; ezberini yapmış.',
          ], degilse: [
            ['ic', '“Harfi harfine yaparım” demişti. Harfleri bu sabah söyleyecek.', 'mahzun'],
          ] }] },
          { eger: (S) => b(S).p8_cik === 'hatice', ise: [
            ['reftar', 'Gece Perihan Hanım beni çağırmamış. Siz çağırmışsınız küçük hanım.', 'somurtkan'],
          ] },
          /* Tur 22 ek (GPT öneri 3): 7. bölümde anahtar karşılığı verilen söz sabah hatırlatılır */
          { eger: (S) => b(S).p7_v_hatice === 'soz', ise: [
            ['reftar', 'Anahtarı verdim küçük hanım. Sözünüz var: bu sabah beni de dinleyeceksiniz.', 'somurtkan'],
            ['ic', 'Söz verdim. Kahvede onun ağzından çıkanı ben de tartacağım.', 'kararli'],
          ] },
          /* Anlatı T2b (GPT 24b B8 öneri 3): neden tek delil açıldığı somut */
          { soru: 'Hangi delili, kime?', secim: [
            /* Oynanış T1 B1: her kanıt kendi kozunu ister (◆); elinde olmayan kilitli görünür. Sabah kanıt bir kişiye
               açılır ama harcanmaz (kozYak yalnız kahvedeki son kararda; 9. bölümün yüzleşmesi aynı kozları bekler). */
            /* GPT T26 Süha (B8 oynanış 1, öncelik 1): Hatice'nin "seni evime hanım yaparım" sözünü 7. bölümde aralık
               kapıda herkes duydu (p7_itiraf her yolda yazılır). Bu söz bilgidir, koz değil: kilitlenmez. 'Hatice'nin
               itirafı' kozu (Perihan'ın "suçu başkasına atarız" vaadi) yalnız kahvedeki güçlü devamı açar. */
            { m: 'Hatice\'ye: “Nabi Bey seni hanım yapmayacak.”', kosul: (S) => !!b(S).p7_itiraf, etki: { vakar: 1, calibe_suphe: 1 }, bayrak: { p8_kanit: 'itiraf' },
              iz: 'Hatice sırrını bildiğini öğrendi. Kahvede sesi titreyecek.', adimlar: [
              ['reftar', 'Siz… duydunuz mu?', 'korkmus'],
              { efekt: 'dusus' },
              'İbrik elinden kaydı. Koşarak Perihan Hanım\'ın kapısına gitti.',
            ] },
            /* Tur 30 (t30 B8 oynanış 1): hazırlık → karşılık bağı görünsün; mühürlü şişe Kenan yolunda kilitli de görünür
               ("Gerekli: Mühürlü şişe" = 7. bölümde tepsiyi kendi eline alan kızın kozu). Süha yolunda bu şişe yok. */
            { m: 'Şefik\'e: “Mühürlü şişeyi kahvede babamın önüne koy.”', kozGerek: SISE, kosul: kozVar(SISE), kilitGoster: muk, etki: { sefik: 1 }, bayrak: { p8_kanit: 'sise' },
              iz: 'Mühürlü şişe kahvede babanın önüne gelecek.', adimlar: [
              ['an', 'Şefik yarı uykulu, saçı dağınık, kapıdan başını uzattı.'],
              { goster: ['sefik', 'notr'] },
              ['sefik', 'Kenan abinin mi? Abla, sen gece neredeydin?', 'saskin'],
              /* Tur 17 ek (madde 13): şişe tek yerde durur; Şefik onu oradan alır */
              { eger: (S) => b(S).p8_cik === 'sise', ise: [
                ['f', 'Büyük çamın dibine gömdük. Kaz, getir; mührünü elleme.', 'kararli'],
            ], degilse: [{ eger: (S) => b(S).p8_cik === 'emanet', ise: [
              ['f', 'Kenan Bey\'in dolabında, anahtarı bu. Mührünü elleme.', 'kararli'],
            ], degilse: [
              ['f', 'Kenan Bey\'in odasında, tepside. Al getir, mührünü elleme.', 'kararli'],
              ] }] },
              { gizle: 'sefik' },
            ] },
            /* Tur 17 ek (madde 14): 6. bölümdeki şart uygulanır. "Ben vereceğim" → sunuşu ben hazırlarım; kartı çıkarmak
               açık bir seçimdir (çıkarırsam babam kaynağı karttan öğrenmez). "Siz götürün" → defteri Remzi kendisi getirir. */
            /* Tur 27 (B8 oynanış 3): menü kalabalık; defteri hiç almamış kızda kilitli hâli de gizli.
               Tur 30 (t30 B8 oynanış 1): üç defter şıkkından yalnız ilki kilitli görünür (6. bölümün defterine işaret) */
            { m: 'Eczacının defterini babama yolla; Remzi Bey\'in kartı içinde kalsın.', kozGerek: DEFTER, kosul: (S) => var_(S, DEFTER) && b(S).p6_defter !== 'remzi', bayrak: { p8_kanit: 'defter', p8_kart: 'kaldi' },
              iz: 'Defter babanda. Kaynağını Remzi\'nin kartı söyleyecek.', adimlar: [
              'Defteri babama yolladım. Arasında Remzi Bey\'in kartviziti duruyordu.',
              ['ic', 'Kaynağı kart söyleyecek. Babam soracak: Remzi Bey benim için neden eczane gezdi?', 'endiseli'],
              /* Tur 18 (öneri 4): eşyanın şimdiki yeri */
              { kozKaynak: [DEFTER, 'Defter babamda; ben sundum, Remzi Bey\'in kartı arasında'] },
            ] },
            { m: 'Kartı çıkar; defteri kendi notunla babama yolla.', kozGerek: DEFTER, kilitGoster: () => false, kosul: (S) => var_(S, DEFTER) && b(S).p6_defter === 'ben', bayrak: { p8_kanit: 'defter', p8_kart: 'cikti' },
              iz: 'Defter babanda. Kaynağını senden duyacak.', adimlar: [
              'Remzi Bey\'in kartını defterden çıkardım. Üstüne kendi elimle yazdım: “Hatice\'nin hesabı.”',
              ['ic', 'Babam kaynağı karttan değil, benden duyacak.', 'kararli'],
              { kozKaynak: [DEFTER, 'Defter babamda; ben sundum'] },
            ] },
            { m: 'Remzi Bey\'e haber yolla: “Defteri babama şimdi siz getirin.”', kozGerek: DEFTER, kilitGoster: () => false, kosul: (S) => var_(S, DEFTER) && b(S).p6_defter === 'remzi', bayrak: { p8_kanit: 'defter' },
              iz: 'Defteri Remzi kahveye kendi eliyle getirecek.', adimlar: [
              'Bahçıvanın oğlunu karşı köşke yolladım. Remzi Bey kahveye defterle gelecek.',
              ['ic', 'Kaynağı saklamam demiştim. Babam onu kapıda karşılayacak.', 'mahzun'],
            ] },
            /* Tur 29 (B8 oynanış 3): menü kalabalık; elde olmayan kanıt kilitli de görünmez */
            { m: 'Perihan Hanım\'ın gece bardağını kapısına bırak.', kozGerek: BARDAK, kilitGoster: () => false, kosul: kozVar(BARDAK), etki: { calibe_suphe: 2 }, bayrak: { p8_kanit: 'bardak' },
              iz: 'Perihan Hanım o gece odasına girdiğini artık biliyor.', adimlar: [
              'Bardağı kapısının önüne bıraktım. Dibindeki tortu kurumuş, ama okunuyor.',
              ['ic', 'Artık biliyor: o gece odasına ben girdim.', 'endiseli'],
              { kozKaynak: [BARDAK, 'Bardağı Perihan Hanım\'ın kapısına bıraktım; artık onda'] },
            ] },
            /* Tur 18 (madde 4): öğlen kilerde etiketi deftere geçiren kız kendi notunu tek kanıt olarak sunabilir */
            { m: 'Babama defterimdeki etiket notunu yolla: “İki şişe.”', kosul: (S) => b(S).p5_v_kiler === 'not', bayrak: { p8_kanit: 'not' }, adimlar: [
              'Defterimden sayfayı kopardım: {i}Sirop de pavot{/i}, köşesinde kalemle “2”. Babama yolladım.',
              ['ic', 'Benim yazım, tanığı yok. Ama sorduğu soru babamın masasında kalacak.', 'kararli'],
            ] },
            /* Tur 30 (t30 B8 oynanış 2): 'acima' 'yok'tan ayrışır; iz kahvedeki bakışı söyler, 9. bölüm p8_kanit 'acima'yı okur */
            { m: 'Hatice\'ye: “Ağlama. Seni ben de korurum.”', kosul: (S) => !b(S).p8_ezber, bayrak: { p8_kanit: 'acima' },
              iz: 'Hatice\'ye el uzattın. Ezberini yine söyleyecek, ama önce sana bakarak.', adimlar: [
              ['reftar', 'Siz kendinizi koruyun küçük hanım. Bu sabah zor.', 'duygulu'],
            ] },
            /* Tur 18 (madde 3): provayı dinleyen kız sabahın tek hakkını Hatice'yle yalnız konuşmaya harcar.
               Hatice karşılığında Nabi/yüzük sırrının bu sofrada açılmamasını ister; kabul ya da ret. */
            { m: 'Hatice\'ye: “Görmediğine şahitlik etme, seni ben de korurum.”', kosul: (S) => !!b(S).p8_ezber, bayrak: { p8_kanit: 'prova' }, adimlar: [
              ['f', 'Gece kapıda ezberini duydum. Görmediğine şahitlik etme, seni ben de korurum.', 'mahzun'],
              ['reftar', 'Söylemezsem Perihan Hanım beni Nabi Bey\'e vermez.', 'korkmus'],
              ['reftar', 'Bir şartla: Nabi Bey\'i de yüzüğü de bu sofrada açmayacaksınız.', 'kararli'],
              { soru: 'İbrik elinde titriyor; cevabımı bekliyor.', secim: [
                { m: '“Söz. Bu sofrada açmam.”', bayrak: { p8_hatice: 'soz' }, adimlar: [
                  ['reftar', 'O zaman yalnız yaptığımı söylerim. Fazlasını değil.', 'korkmus'],
                ] },
                { m: '“Söz veremem. Babamın önünde doğruyu saklamam.”', bayrak: { p8_hatice: 'ret' }, adimlar: [
                  ['reftar', 'Öyleyse ezberimi söylerim. Benim de korkum var.', 'korkmus'],
                ] },
              ] },
            ] },
            { m: 'Hiçbirini açma. Önce onları dinle.', bayrak: { p8_kanit: 'yok' }, iz: 'Kozlarını sakladın. Kahvede önce onlar konuşacak.', adimlar: [
              /* Anlatı T2b (GPT 24 Remzi): "kozlarımı sandıkta" bilgiyle belgeyi karıştırıyordu */
              'Bildiklerimi kendime sakladım. Sabah önce onlar konuşsun.',
            ] },
          ] },
          { gizle: 'reftar' },
          /* 6. bölüm: topuk gecesi. Sürükleyicilik T1 (b7_8_9 8.2, S5): Leyla paktının özet iç sesi kesildi;
             sofradan önce yalnız Feride'nin kararı kalır */
          /* Tur 18 (öneri 3): yardım / pervaz / alın / koz dört ayrı geçmiş; yardım yolunda topuk inmedi */
          { eger: (S) => b(S).p6_topuk === 'koz', ise: [
            /* GPT T26 Süha (B8 anlatı 1): 6. bölümde Nabi koz açılarak durduruldu ("yalnız sözle" değil) */
            ['ic', 'Bir gece bir sarhoşu kendi sırrıyla durdurdum. Bu sabah da elimdekini doğru yere koyarım.', 'kararli'],
          ], degilse: [{ eger: (S) => b(S).p6_topuk === 'yardim', ise: [
            ['ic', 'Bir gece lambamı örttüm, babam eşiğimdeki adamı kendi gördü. Bu sabah da şahidi kendim çağırırım.', 'kararli'],
          ], degilse: [{ eger: (S) => b(S).p6_topuk === 'pervaz', ise: [
            /* GPT T29 A8-2: bahçede (5. bölüm 'indi') çardak direği */
            { eger: (S) => b(S).p5_son === 'indi', ise: [
              /* Tur 32 (B8 diyalog 7): önceki bölümü özetleyen hatırlatma kısaldı */
              ['ic', 'Bu sabah konuşacağım. Babam beni dinlemeden sofradan kalkmasın.', 'kararli'],
              ], degilse: [
                ['ic', 'Babam beni dinlemeden sofradan kalkmasın.', 'kararli'],
            ] },
          ], degilse: [
            ['ic', 'Bu sabah konuşacağım. Babam beni dinlemeden sofradan kalkmasın.', 'kararli'],
          ] }] }] },
          { giyin: ['nisan_sade', 'nisan_gosterisli', 'nisan_yadigar'], soru: 'Yalanların sofrası… Babam beni hangi yüzle görecek?' },
          { gorev: 4 },
          'Babam asmanın altından adımı seslendi.',
          /* Asmanın altından kahve masasına: bahçe sahnesi */
          { ara: { mekan: 'ada_bahce', yer: 'Ada evinin bahçesi · sabah kahvesi', satirlar: [
            /* Anlatı T2 (mercek_doz Ç1): tek kural — sabah kahvesi hüküm, akşam sofrası söz (B12, B15 ile çelişmez) */
            'Feride kahve masasına yürürken adımlarını yavaşlatmadı.',
            'Feride kahve masasına yürürken adımlarını yavaşlatmadı.',
          ] } },
        ],
      },

      /* ---------------- 5. Bahçede kahve: Remzi ve iki yalan ---------------- */
      {
        id: 'p8_bahce', mekan: 'ada_bahce', tetik: 'giris', kosul: (S) => S.gorev === 4, sahne: [],
        adimlar: [
          /* Tur 27 (B8 ses 4): Remzi'nin fiyat şakaları gerilim üstünde değil, Ada'nın gündüz temasında */
          { muzik: 'ada' },
          /* Tur 29 (B8 ses 3): faytonun çıngırağı duyulur (gündüz bahçe ortamı ortak istekte) */
          { efekt: 'cingirak' },
          ['an', 'Bahçe kapısında bir fayton durdu. Remzi Bey davet edilmemişti; yine de bastonunu uşağa uzattı.'],
          { goster: ['remzi', 'ana'] },
          { eger: (S) => giy(S) === 'pembe', ise: [
            ['remzi', 'Pembe. Sabahın en pahalı rengi, bilirim.', 'gulumser'],
          ], degilse: [{ eger: (S) => giy(S) === 'mavi', ise: [
            /* Diyalog T1 (ses A5): "Annenizin mavisi" dört ağızdaydı; Remzi'nin sesi fiyat */
            ['remzi', 'Mavi Lyon ipeği. Pahasını benden sormayın.', 'gulumser'],
          ], degilse: [
            ['remzi', 'Masum görünmek için mi o fildişi? İyi seçim.', 'gulumser'],
          ] }] },
          /* Tur 27 (B8 diyalog 3): Remzi dört replik art arda konuşmaz; Feride onun diliyle karşılık verir */
          ['f', 'Fiyatını siz biçin Remzi Bey, giyen benim.', 'gulumseyen'],
          /* 7. bölüm: iskeledeki faytonlar */
          { eger: (S) => b(S).p7_remzi === 'fayton', ise: [
            /* Tur 30 (t30 B8 diyalog 2): "borç" Süha'nın; Remzi'nin sözlüğü faiz */
            ['remzi', 'Perihan Hanım\'a bugün de fayton yolladım. Faizi işlesin.', 'gulumser'],
          ], degilse: [{ eger: (S) => b(S).p7_remzi === 'cesme', ise: [
            ['remzi', 'Çeşmenin taşı geldi. Adımı yazdırdım, altında boş bir satır var.', 'mahcup'],
          ], degilse: [
            ['remzi', 'Bugün de yürüyecek misiniz? Faytonlarım hâlâ boş bekliyor.', 'gulumser'],
          ] }] },
          /* 4. bölüm: Nabi'nin senedi; 5–6. bölüm: valsin koşulu */
          { eger: (S) => b(S).p6_remzi === 'defter' && b(S).p6_defter === 'remzi' && b(S).p8_kanit === 'defter', ise: [
            /* Diyalog T1 (8.21): vals-faiz pazarlığı bölümde bir kez anılır (aşağıdaki 'fiyat' dalı yinelemez) */
            ['remzi', 'Defteri getirdim, babanıza kendi elimle vereceğim. Faizini unutmadım: bir vals; nişan bozulursa bir vals daha.', 'kararli'],
          ], degilse: [{ eger: (S) => b(S).p6_remzi === 'defter', ise: [
            /* Tur 27b (GPT B6-O1): yeni şartı geri çeviren kıza (p6_vals 'nisan') "ikinci" vals denmez */
            { eger: (S) => b(S).p6_vals === 'nisan', ise: [
              ['remzi', 'Bu sabah bir şeyler bozuluyor. Nişana bağlı valsimi şimdiden ayırdım.', 'kararli'],
            ], degilse: [
              ['remzi', 'Bu sabah bir şeyler bozuluyor. İkinci valsimi şimdiden ayırdım.', 'kararli'],
            ] },
          /* Tur 27 (B8 diyalog 3): senet bloğunda yalnız senedi elinde tutan kızın satırı kalır */
          ], degilse: [{ eger: (S) => var_(S, SENET), ise: [
            ['remzi', 'Nabi Bey\'in senedini size vermiştim. Bugün başka bir şey satmaya geldim.', 'gulumser'],
          ] }] }] },
          /* Oynanış T1 (b5_8 7 (b)4): 7. bölümde çamlıktan dürbüne el sallayan kız (p7_v_camlik 'salla') hatırlanır */
          { eger: (S) => b(S).p7_v_camlik === 'salla', ise: [
            ['remzi', 'Dün çamlıktan bana el salladınız. Dürbünüm o günden beri hep sizin tarafa bakıyor.', 'kararli'],
          ], degilse: [
            ['remzi', 'Dün gece yüz yirmi fişek attırdım. Dürbünüm Paris\'ten; hep gökyüzüne bakmadım.', 'kararli'],
          ] },
          { soru: 'Ne gördüğünü söylemiyor; fiyatını bekliyor.', secim: [
            { m: '“Gördüğünüzün fiyatını söyleyin.”', etki: { remzi: 5 }, bayrak: { p8_remzi: 'fiyat' },
              iz: 'Remzi susmasının fiyatını koydu: bir vals, herkesin önünde.', adimlar: [
              { eger: (S) => b(S).p6_remzi === 'defter', ise: [
                /* Diyalog T1 (8.13): "koşulsuz" dönem dışı; faiz pazarlığı yinelenmez */
                ['remzi', 'Bu ayrı hesap: bir vals, İstanbul\'da, herkesin önünde, şartsız.', 'gulumser'],
            ], degilse: [
              ['remzi', 'Bir vals, İstanbul\'da, herkesin önünde. Ucuz değil mi?', 'gulumser'],
              ] },
            ] },
            { m: '“Gördüyseniz, Kenan Bey\'in ayık olduğunu da gördünüz.”', kosul: (S) => muk(S) && !evde(S), etki: { remzi: 4 }, bayrak: { p8_remzi: 'sahit' },
              iz: 'Remzi\'nin şahitliği artık kozun, ama seni de yakabilir.', adimlar: [
              ['remzi', 'Ayıktı. Ayık adamı uzaktan tanırım, ben az ayık olurum.', 'mahcup'],
              { koz: DURBUN, kaynak: 'Remzi Bey söyledi; şahitliği onun', alt: 'Remzi Bey gece yarısı çamlıkta Kenan Bey\'i ayık gördüğünü söylüyor. Şahitliği beni de yakar.' },
            ] },
            { m: '“Gördüyseniz susmasını da bilirsiniz.”', kosul: (S) => !muk(S) || evde(S), etki: { remzi: 4 }, bayrak: { p8_remzi: 'sus' }, adimlar: [
              ['remzi', 'Bilirim. Susmak en pahalı malım; kimseye satmadım.', 'kararli'],
            ] },
            /* Oynanış T1 B3: Remzi'yi geri çeviren cevap ilgisini azaltır (−3) */
            { m: '“Dürbününüzü yıldızlara çevirin Remzi Bey.”', etki: { remzi: -3 }, bayrak: { p8_remzi: 'ret' },
              iz: 'Remzi\'nin dürbününü geri çevirdin. Gördüğünü kendine sakladı.', adimlar: [
              { goster: ['remzi', 'kararli'] },
              /* GPT T26 Süha (B8 diyalog 2): Remzi bir kez süssüz konuşur; ne gördüğünü ve elinde tuttuğunu söyler.
                 Tur 29 (B8 anlatı 3): yerinden inmeyen kız çamlıkta değildi; dürbün ancak gördüğünü söyler */
              { eger: (S) => burada(S) && asagida7(S), ise: [
                ['remzi', 'Gece fişeğin ışığında köşkünüzün sofasını gördüm, merdivende bir lamba. Kimseye söylemedim; henüz.', 'kararli'],
            ], degilse: [{ eger: evde, ise: [
              ['remzi', 'Gece fişeğin ışığında pencerenizde bir lamba gördüm, uyumamışsınız. Kimseye söylemedim; henüz.', 'kararli'],
            ], degilse: [{ eger: burada, ise: [
              ['remzi', 'Gece pencerenizin altında hekimi gördüm. Kimseye söylemedim; henüz.', 'kararli'],
            ], degilse: [
              ['remzi', 'Gece çamlıkta sizi gördüm. Kimseye söylemedim; henüz.', 'kararli'],
              ] }] }] },
            ] },
          ] },
          { gizle: 'remzi' },
          /* Aile sofrası (mercek_tanitim Y4): portreler ilk repliklerinin önünde tek tek katılır */
          { goster: ['sai', 'notr'] },
          /* Tur 17 ek (madde 14): "siz götürün" şartının karşılığı — Remzi kapıdan girer, babam onu selamlığa çağırır */
          { eger: (S) => b(S).p6_defter === 'remzi' && b(S).p8_kanit === 'defter', ise: [
            'Remzi Bey defteri babama kendi eliyle verdi. Babam onu akşam selamlığa çağırdı.',
            /* Tur 18 (öneri 4): teslimden sonra koz listesi eşyanın yeni yerini söyler */
            { kozKaynak: [DEFTER, 'Defter babamda; Remzi kendi eliyle getirdi'] },
          ], degilse: [
            ['an', 'Remzi gidince Perihan mendilini alnına bastırdı.'],
          ] },
          { muzik: 'perihan' },
          { goster: ['calibe', 'soguk'] },
          ['calibe', 'Başım çatlıyor efendi. Gece kimse uyumadı.', 'soguk'],
          /* Oynanış T1 B5: kahve doruğunda bir keşif (51 satırlık düz blok kırılır); p8_k_mendil kahvedeki 'sus'
             seçeneklerinde okunur, deftere delil düşer */
          { kesif: { x: 30, y: 46, w: 14, h: 16, ad: 'Perihan Hanım\'ın mendili', adimlar: [
            'Mendili kupkuru, kolonya kokmuyor.',
            /* GPT T28 (8-O2): gözlem kesin hükme dönmez */
            /* Tur 30 (t30 B8 anlatı 2): "aklıma yazdım" bölümde bir kez (gece kapısında) */
            ['ic', 'Kolonya kullanmamış. Başı gerçekten ağrıyor mu?', 'endiseli'],
            { delil: 'Perihan Hanım\'ın mendili kuru (şüphe, sınanmadı)' },
            { bayrak: { p8_k_mendil: true } },
          ] } },
          { eger: kenanVar, ise: [
            /* Anlatı T2 (mercek_doz B8-5, §5b): oturma düzeni önceden söylenmez */
            ['an', 'Kenan\'ın fincanı önünde soğuyordu. Süha Bey ise kahveye en son indi.'],
            { goster: ['mukaddem', 'kararli'] },
          ], degilse: [{ eger: (S) => muk(S) && b(S).p8_plan === 'anlat', ise: [
            ['ic', 'Kenan Bey\'in fincanı ters kapanmış. Sekiz buçukla annesine gitti.', 'endiseli'],
          ], degilse: [
            ['ic', 'Kenan Bey’in fincanı ters kapanmış.', 'endiseli'],
          ] }, ['an', 'Süha Bey kahveye en son indi.']] },
          /* Birinci yalan: konyak (gecenin hamlelerine göre biçim değiştirir). İki seçim arası 13 satır için
             Süha'nın ilk iki repliği bire indirildi (anlatı denetimi T1). */
          /* Tur 29 (B8 ses 1): Perihan'ın teması hükme kadar sürer; gerilime ayrı geçiş yok (tek sahnede altı tema) */
          { goster: ['suha', 'notr'] },
          /* Tur 29 (B8 oynanış 2): Kenan'ın adını hikâyeden çıkaran şart; Süha konyağı itiraf eder ama içeni söylemez */
          { eger: (S) => !muk(S) && b(S).p8_ad === 'adsiz', ise: [
            ['suha', 'Bir itirafım var efendim: gece selamlık dolabından konyak aldım. Kimin içtiğini görmedim.', 'notr'],
          ], degilse: [{ eger: (S) => !muk(S) && b(S).p8_pazar === 'sart', ise: [
            /* Tur 33 (B8 anlatı 3): şart koyan kızın yolunda Süha Kenan'ın "istedi" yalanını doğrulamaz; Hatice'nin adını
               da anmaz (şartı tutar), yalanın sürmesi aşağıdaki "iki saatte bitirdi" satırında */
            ['suha', 'Bir itirafım var efendim: gece selamlık dolabından konyak aldım. Kimin eliyle aşağı indiğini söylemem.', 'notr'],
          ], degilse: [
            ['suha', 'Bir itirafım var efendim: gece selamlık dolabından konyak aldım. Hatice, misafir uyuyamıyor dedi.', 'notr'],
          ] }] },
          /* Tur 18 (madde 11): çamlıkta konan şart burada uygulanır — Süha Perihan'ın cümlesini yutar ya da okurken bana bakar */
          { eger: (S) => !muk(S) && b(S).p8_ad === 'adsiz', ise: [
            /* Tur 29: adı Perihan Hanım kendi ağzıyla koyar; yalanın sahibi görünür olur */
            { goster: ['calibe', 'soguk'] },
            ['calibe', 'Misafir içti efendi; iki saatte bitirmiş. Böyle giderse kendini bitirir.', 'soguk'],
            'Süha Bey sustu, adı ağzına almadı. Yalanı Perihan Hanım tek başına taşıdı.',
          ], degilse: [{ eger: (S) => !muk(S) && b(S).p8_ad === 'is', ise: [
            { eger: (S) => b(S).p8_dekor === 'al', ise: [
              ['suha', 'İki saatte bitirdi, şişeyi de saklamış.', 'soguk'],
            ], degilse: [
              ['suha', 'İki saatte bitirdi, sendeleyerek çıktı.', 'soguk'],
            ] },
            /* GPT T26 Süha (B8 sürük. 10'a 3): yutulan cümlenin yerine duraksama sahnelenir; sözün bedeli duyulur */
            'Durdu, Perihan Hanım cümlenin sonunu bekledi. Gelmedi; bana verdiği söz buydu.',
          ], degilse: [
            { eger: (S) => b(S).p8_dekor === 'al', ise: [
              ['suha', 'İki saatte bitirdi, şişeyi de saklamış. Sarhoşun ilk işi budur.', 'soguk'],
            ], degilse: [
              ['suha', 'İki saatte bitirdi, sendeleyerek çıktı. Böyle giderse kendini bitirir.', 'soguk'],
            ] },
            { eger: (S) => !muk(S) && b(S).p8_ad === 'ortak', ise: [
              'Okurken gözünü benden ayırmadı. Şartım tuttu, yalanı da.',
            ] },
          ] }] },
          /* Küçük soru kapanır: "bir başkası". Diyalog T1 (8.12, D6): tırnaklı söz yalnız itirafı dinleyen kızda */
          /* Tur 29 (B8 oynanış 2): 'adsiz' şartında suçu atan Perihan Hanım'ın kendisi; hekim ad vermedi */
          { eger: (S) => !muk(S) && b(S).p8_ad === 'adsiz', ise: [
            ['ic', 'Hekim adını vermedi, suçu misafire Perihan Hanım kendi eliyle attı.', 'kararli'],
          ], degilse: [{ eger: (S) => var_(S, ITIRAF), ise: [
            ['ic', '“Bir başkası” buymuş: misafir. Suçu onun üstüne attılar.', 'ofkeli'],
          ], degilse: [
            ['ic', 'Suçu misafire, Kenan Bey\'e attılar.', 'ofkeli'],
          ] }] },
          { eger: kenanVar, ise: [
            /* Tur 18 (madde 7): Leyla'nın götürdüğü notla uyarılan Kenan "o gece ilk kez duydum" demez */
            { eger: notUlasti, ise: [
              ['mukaddem', 'Ben içmem efendim. Uyarılmıştım, gelen tepsinin mührüne dokunmadım.', 'kararli'],
            ], degilse: [
              ['mukaddem', 'Ben içmem efendim.', 'kararli'],
            ] },
            /* Doğrulama gece b5-8 (8. diyalog): hekim nüktesi Kenan yolunda dörtten ikiye */
            ['suha', 'İçenler hep öyle der. Ben çok dinledim.', 'soguk'],
          ] },
          { eger: (S) => !muk(S) && b(S).p8_pazar === 'ret', ise: [
            ['suha', 'Gece bahçede başka gölgeler de vardı. Onları sonra anlatırım.', 'alayci'],
          ] },
          /* Tur 22 ek (GPT öneri 3): 7. bölümde dolabın önünde gerçekten görüldüysem yalanına bu gerçek adımı ekler */
          /* Tur 29 (t29_b05_08 B8 anlatı 2): susma pazarlığı kurulduysa (kabul/şart) hekim onu ilk bozan olmaz; suçlama
             boşa düşmez, babam duyar */
          { eger: (S) => b(S).p7_v_goren === 'suha' && (muk(S) || b(S).p8_pazar === 'ret'), ise: [
            ['suha', 'Küçük hanım da gece o dolabın önündeydi efendim. Lambası camdaydı, gördüm.', 'soguk'],
            /* iki seçim arası 13 satır: şişe sofraya geliyorsa babamın gözü şişeye döner (aşağıda Şefik) */
            { eger: (S) => b(S).p8_kanit !== 'sise' && !b(S).p8_k_mendil, ise: [
              ['an', 'Sait Efendi fincanını bırakmadı ama kızına bir kez, uzun baktı.'],
            ] },
          ] },
          /* Sabah açılan kanıt: mühürlü şişe sofrada */
          { eger: (S) => b(S).p8_kanit === 'sise', ise: [
            /* Tur 33 (ifade envanteri 66): suçlama sofrasında keşif, sevinç değil */
            { goster: ['sefik', 'saskin'] },
            ['sefik', 'Baba! Kenan abinin şişesi bu, mührü duruyor!', 'saskin'],
            ['suha', 'O başka şişe efendim; selamlık dolabındaki.', 'soguk'],
            /* Tur 22 ek: 7. bölümde öndeki şişenin mührüne atılan çentik bu şişede */
            { eger: (S) => b(S).p7_v_dolap === 'centik', ise: [
              ['ic', 'Yalan. Mührün kenarında benim çentiğim var, bu şişe o dolaptan indi.', 'ofkeli'],
            ] },
            { kozKaynak: [SISE, 'Şefik kahvede babamın önüne koydu; mührü sağlam, şişe yine bende'] },
          ] },
          { eger: muk, ise: [
            { soru: 'Babam fincanını bıraktı.', secim: [
              /* Tur 29 (B8 diyalog 1): "Hekim Bey" Perihan'ın hitabı; Feride "Süha Bey" der */
              { m: '“Süha Bey gece selamlıkta ne arıyormuş?”', bayrak: { p8_ilk: 'soru' }, adimlar: [
                ['suha', 'Uykusuzluk küçük hanım. Hekimler de uyuyamaz.', 'alayci'],
                /* Tur 32 (B8 anlatı 3): hüküm sofrasında baba sorgusuz kalmaz */
                ['sai', 'Uykusuz hekim selamlıkta ne arar Süha? Akşam anlatırsın.', 'ciddi'],
              ] },
              { m: '“Hangi şişe? Hatice\'nin tepsisindeki mühürlüydü.”', kozGerek: SISE, kosul: (S) => var_(S, SISE) && b(S).p8_kanit !== 'sise', etki: { calibe_suphe: 1 }, bayrak: { p8_ilk: 'sise' },
                iz: 'Mühürlü şişeyi sofrada sordun. Baban şişelerin hesabını isteyecek.', adimlar: [
                ['suha', 'O başka şişe. Dolapta şişe çok, ikincisi hep bulunur.', 'soguk'],
                ['ic', 'İkinci şişe. Bu evde şişeler hep ikişer.', 'endiseli'],
              ] },
              /* Tur 29 (t29_b05_08 B8 oynanış 5): Kenan yolunda gece alınan boş şişe de kahvede bir hamle açar; bedeli gece
                 selamlıkta olduğunun duyulması. Koz harcanmaz (9. bölüm ister); kazanım yazılmaz */
              /* Tur 30 (t30 B8 oynanış 1): gece selamlık uğrağının karşılığı kilitli de görünür */
              { m: '“Boş şişe bende Süha Bey. Yanındaki bardak kuruydu.”', kozGerek: BOS, kosul: kozVar(BOS), etki: { calibe_suphe: 1, itibar: -1 }, bayrak: { p8_ilk: 'bos' },
                iz: 'Boş şişeyi sofrada andın. Gece selamlıkta olduğun duyuldu.', adimlar: [
                ['f', 'Selamlıktaki boş şişe bende Süha Bey. Yanındaki bardak kuruydu.', 'kararli'],
                ['suha', 'Gece yarısı şişe mi saydınız küçük hanım? Babanız da saysın.', 'alayci'],
              ] },
              { m: '“Bunu bana gece de söylediniz. Prova mıydı?”', kosul: (S) => b(S).p8_suha === 'sor', etki: { calibe_suphe: 1, itibar: -1 }, bayrak: { p8_ilk: 'prova' }, adimlar: [
                /* Tur 32 (B8 diyalog 10): "rüya" kaçışı bölümde üç kezdi; Süha'nınki değişti */
                ['suha', 'Gece mi? Gece ben uyurum küçük hanım; siz uyumadınız anlaşılan.', 'alayci'],
                /* Diyalog T1 (D4, ses A4): "X yapan kız Y" kalıbı bölümde bir kez (şafak kapısında) */
                ['calibe', 'Uykusuz kız sofrada çok konuşur. Ye kızım.', 'soguk'],
              ] },
              { m: 'Sus. Perihan Hanım\'ın yüzünü oku.', bayrak: { p8_ilk: 'sus' }, adimlar: [
                MENDIL_SUS,
              ] },
            ] },
          ], degilse: [
            { soru: 'Söylerken bana baktı.', secim: [
              { m: '“Siz gece selamlıkta ne arıyordunuz?”', bayrak: { p8_ilk: 'soru' }, adimlar: [
                ['suha', 'Uykusuzluk küçük hanım. Siz de uyumamışsınız; gözleriniz söylüyor.', 'alayci'],
              ] },
              { m: 'Gözüne bak. Geceyi hatırlat.', kosul: (S) => b(S).p8_pazar !== 'ret', bayrak: { p8_ilk: 'goz' }, adimlar: [
                'Gözüne baktım. Durdu, kahvesini karıştırdı.',
                ['suha', '…Ama misafir gençtir efendim. Bir kez olur.', 'notr'],
              ] },
              { m: 'Sus. Perihan Hanım\'ın yüzünü oku.', bayrak: { p8_ilk: 'sus' }, adimlar: [
                MENDIL_SUS,
              ] },
            ] },
          ] },
          /* İkinci yalan: Hatice (gecenin hamlelerine göre biçim değiştirir) */
          { goster: ['calibe', 'soguk'] },
          { eger: (S) => b(S).p8_kapi === 'tiklat', ise: [
            ['calibe', 'Gece kızımız da uyumamış efendi. Ben de bir şey gördüm.', 'soguk'],
          ], degilse: [
            ['calibe', 'Ben de bir şey gördüm efendi. Gece misafirin odasında lamba yanıyordu.', 'soguk'],
          ] },
          /* Tur 31 (t31_b05_08 B8 oynanış 5): Hatice'nin sabah koşusu kahvede görünür */
          { eger: (S) => b(S).p8_kanit === 'itiraf', ise: [
            ['calibe', 'Hatice bu sabah kapıma koşa koşa geldi efendi. Birileri onu korkutmuş.', 'sinsi'],
          ] },
          { eger: (S) => b(S).p8_toka === 'birak', ise: [
            ['calibe', 'Eşiğinde de Hatice\'nin tokasını buldum. İşte.', 'ofkeli'],
          ], degilse: [{ eger: (S) => b(S).p8_toka === 'al', ise: [
            ['calibe', 'Hatice kapıdaydı. Tokası da orada… düşmüş olmalı.', 'sinsi'],
          ], degilse: [{ eger: (S) => b(S).p7_hizmet === 'sefik', ise: [
            ['calibe', 'Çocuk uyuyordu. Hatice\'yi kapıdan çıkarken yakaladım.', 'ofkeli'],
          ], degilse: [
            ['calibe', 'Hatice yatağında yoktu. Misafir odasının aralık kapısından baktım, Hatice içerideydi.', 'soguk'],
          ] }] }] },
          /* Tur 27 (B8 oynanış 2): gece eşikten alınan toka kahvede bir seçimin kapısını açar. Koz harcanmaz (yalnız
             son karardaki koz harcanır; 9. bölüm tokayı yine ister). Bedel: Perihan Hanım gece dolaştığımı öğrenir. */
          /* Gece provayı da dinleyen kız sofrada prova hamlesini alır; iki hamle art arda gelip karar sayısı şişmesin */
          { eger: (S) => b(S).p8_toka === 'al' && var_(S, TOKA) && !b(S).p8_ezber, ise: [
            { soru: 'Tokası avucumda. Perihan Hanım "düşmüş olmalı" diyor.', secim: [
              { m: 'Tokayı masaya koy: “Eşikte buldum; gece yarısı.”', kozGerek: TOKA, kosul: (S) => var_(S, TOKA), etki: { calibe_suphe: 1 }, bayrak: { p8_toka: 'acti' },
                iz: 'Tokayı sofraya koydun. Perihan Hanım gece eşikleri dolaştığını öğrendi.', adimlar: [
                /* Tur 29 (t29_b05_08 B8 anlatı 8): tokanın yeri kasıt kanıtı değil; gece sorulan soru sabah da soru */
                ['f', 'Eşikte buldum babacığım, gece yarısı, tam ortasında. Düştü mü, kondu mu, siz sorun.', 'kararli'],
                { goster: ['calibe', 'sinsi'] },
                ['calibe', 'Gece eşik mi dolaşıyorsun kızım?', 'sinsi'],
                ['ic', 'Tokanın sahibini sormadı, bulanı sordu. Babam ikisini de duydu.', 'kararli'],
              ] },
              { m: 'Tokayı avucunda tut. Sözünün sonunu bekle.', bayrak: { p8_toka: 'sakla' }, adimlar: [
                ['ic', 'Eşiğin tam ortasındaydı. Düştü mü, kondu mu, sormanın sırası değil.', 'kararli'],
              ] },
            ] },
          ] },
          /* Tur 18 (madde 3): provanın iki ayrı taktiği.
             (a) Sabah Hatice korundu ve şartı kabul edildi: Hatice ezberini söylemez, yalnız yaptığını anlatır.
             (b) Tur 18 ek (öneri 1): provayı dinleyen kız, Hatice konuştuktan hemen sonra ve babam hükmünü
                 vermeden prova bilgisini açabilir (aşağıdaki soru). Sabah hakkını başka kanıta harcamış olsa da.
             İkisi de konyak yalanını çözmez; yalnız Perihan'ın tanıklığını sarsar. Provayı bilmeyen yol eskisi gibi. */
          { eger: haticeKorur, ise: [
            { goster: ['reftar', 'korkmus'] },
            { eger: (S) => son7(S) === 'tepsi', ise: [
              ['reftar', HATICE_DOGRU.tepsi, 'korkmus'],
            ], degilse: [{ eger: (S) => son7(S) === 'bekci', ise: [
              ['reftar', HATICE_DOGRU.bekci, 'korkmus'],
            ], degilse: [{ eger: (S) => son7(S) === 'izle', ise: [
              ['reftar', HATICE_DOGRU.izle, 'korkmus'],
            ], degilse: [
              ['reftar', 'Tepsiyi kapıya götürdüm efendim. Kapı açılmadı… girmedim.', 'korkmus'],
            ] }] }] },
            'Perihan Hanım\'ın mendili dizinde kaldı. Ezber söylenmedi, onun sözü tek başına kaldı.',
          ], degilse: [
            { goster: ['reftar', 'korkmus'] },
            /* Tur 33 (B8 diyalog 10): kesik söyleyiş ezberi ele verir */
            ['reftar', 'Ben de… şaşırmıştım.', 'korkmus'],
            { eger: (S) => b(S).p8_kanit === 'itiraf', ise: [
            ], degilse: [{ eger: (S) => b(S).p8_kanit === 'prova', ise: [
              'Söylerken bana baktı. Şartını kabul etmemiştim, ezberine sığındı.',
            ], degilse: [{ eger: (S) => b(S).p8_kanit === 'acima', ise: [
              'Söylemeden önce bana baktı. Özür diler gibi.',
            ], degilse: [{ eger: (S) => b(S).p8_kanit === 'bardak', ise: [
              'Perihan Hanım\'ın gözü bana kaydı. Bardağı bulmuştu, sesi incelmişti.',
            ], degilse: [
              'Elleri yine titriyor. Benimkiler değil.',
            ] }] }] }] },
          ] },
          /* Tur 18 ek (öneri 1): gece duyduğum prova, babam hükmünü vermeden. Yeni bir sabah hazırlığı değildir;
             hangi kanıtı açmış olursam olayım çıkar. Hatice'ye söz verdiysem ezberi istemem; prova bilgisini söylemek
             sözü bozmaz (Nabi/yüzük ayrı hamle). Bedel: Perihan dinlendiğini anlar (9. bölümde mutfak kapanır). */
          { eger: (S) => !!b(S).p8_ezber, ise: [
            { eger: haticeKorur, ise: [
              { soru: 'Hatice doğruyu söyledi. Babam henüz hükmünü vermedi.', secim: [
                /* Diyalog T1 (8.18): seçim butonu kutuya sığar */
                { m: '“Gece ezber öğrettiler babacığım. Onu yalnız dinleyin.”', etki: { calibe_suphe: 2 }, bayrak: { p8_prova: 'yalniz' }, adimlar: [
                  { goster: ['calibe', 'ofkeli'] },
                  ['calibe', 'Kim öğretmiş efendi? Bu kız gece kapıları mı dinliyor?', 'ofkeli'],
                  /* Tur 27 (B8 oynanış 10'a 2): mendil keşfi prova dallarında da okunur */
                  { eger: (S) => !!b(S).p8_k_mendil, ise: [
                    'Kuru mendilini alnına bastırdı. Baş ağrısı aklına şimdi gelmişti.',
                  ] },
                  ['sai', 'Yalnız dinlerim. Hanım, sen otur.', 'ciddi'],
                  'Babam Hatice\'yi asmanın öbür ucuna çekti. Hatice bu kez ona baktı, bana değil.',
                  ['ic', 'Nabi Bey\'in adını anmadım, sözüm duruyor. Ama Perihan Hanım dinlediğimi anladı.', 'endiseli'],
                ] },
                { m: 'Bir şey deme. Bu söz Hatice\'nin olsun.', bayrak: { p8_prova: 'sus' }, adimlar: [
                  ['ic', 'Ezberi bozan o oldu, ben değil. Kapısını dinlediğimi Perihan Hanım bilmiyor.', 'kararli'],
                ] },
              ] },
            ], degilse: [
              { soru: 'Gece duyduğum ezber, kelimesi kelimesine. Babam hükmünü vermek üzere.', secim: [
                { m: '“Bu ezberi gece kapıda duydum babacığım. Hatice\'yi ayrı dinleyin.”', etki: { calibe_suphe: 2, itibar: -1 }, bayrak: { p8_prova: 'acik' }, adimlar: [
                  { goster: ['calibe', 'ofkeli'] },
                  ['calibe', 'Ne diyor bu kız? Gece kapımı mı dinledin?', 'ofkeli'],
                  { eger: (S) => !!b(S).p8_k_mendil, ise: [
                    'Kuru mendilini alnına bastırdı. Baş ağrısı aklına şimdi gelmişti.',
                  ] },
                  ['sai', 'İkinizi ayrı dinleyeceğim. Hanım, sen burada kal.', 'ciddi'],
                  'Babam Hatice\'yi asmanın öbür ucuna çekti. Döndüğünde yüzü değişmişti.',
                  ['ic', 'Gece kapısında duyduğumu söyledim. Artık biliyor: dinliyorum.', 'endiseli'],
                ] },
                { m: 'Sus. Ezberin sonunu dinle.', bayrak: { p8_prova: 'sus' }, adimlar: [
                  ['ic', 'Bildiğimi sakladım. Kapısını dinlediğimi o da bilmiyor.', 'tebessum'],
                ] },
              ] },
            ] },
          ] },
          /* Tur 28 (B8 ses 3): babanın hükmü kendi temasıyla. Tur 30 (t30 B8 ses 1): sahnede beş müzik değişimi vardı
             (ada → perihan → hukum → sessiz → doruk); 'hukum' artık doruk seçiminin hemen önünde başlar ve doruk dalında
             sürer (iki tek seferlik parça art arda gelmez). Sait'in ara hükümleri Perihan'ın temasının altında kalır. */
          { goster: ['sai', 'ciddi'] },
          /* Prova açıldıysa ama sabah başka kanıt açıldıysa: ayrı dinleme o kanıtın hesabıyla birlikte durur */
          /* Tur 30 (t30 B8 diyalog 1): Sait mahkeme dilinden kaçınır; kısa, baba gibi */
          { eger: (S) => provaAcik(S) && kazanim(S) !== 'ayri' && kazanim(S) !== 'desteksiz', ise: [
            ['sai', 'Bundan sonra herkesi ayrı ayrı sorarım.', 'notr'],
          ] },
          /* Tur 17: sabah açılan kanıt, babamda geri alınmayan küçük bir kazanım bırakır (p8_kazanim).
             Gecenin hesabı yine Feride'ye döner; tam zafer değil. 9. bölüm bunu hatırlar. */
          { eger: (S) => b(S).p8_kanit === 'defter', ise: [
            /* Tur 30 (t30 B8 diyalog 1): "şahitlik" Sait'in dili değil; soru sorar */
            ['sai', 'Pera\'daki eczaneden haşhaşı Hatice mi almış?', 'ciddi'],
            /* Tur 17 ek (madde 14): kaynağı babam nereden öğrendi — Remzi'nin kendisinden, karttan ya da benden */
            { eger: (S) => b(S).p6_defter === 'remzi', ise: [
              /* Tur 32 (B5–8 §0.2, B8 diyalog 11): köşeye sıkışan Perihan sırıtmaz; Sait kâtip ağzıyla konuşmaz */
              ['calibe', 'O ilaç benim başım için efendi. Remzi Bey neden bizim eczanemizi geziyor?', 'soguk'],
              /* Tur 27 (B8 diyalog 1): "şahitlik sayılmaz" Sait'in kaçındığı dil; baba gibi, kısa */
              ['sai', 'Getireni gördüm, kapımdan kendisi girdi. Hatice\'nin sözünü bundan sonra iki kişiyle tartarım.', 'ciddi'],
            ], degilse: [{ eger: (S) => b(S).p8_kart === 'cikti', ise: [
              ['calibe', 'O ilaç benim başım için efendi. Defteri kim getirdi, ona bakın.', 'soguk'],
              ['sai', 'Kızım getirdi, kendi yazısıyla. Hatice\'nin sözünü bundan sonra iki kişiyle tartarım.', 'notr'],
            ], degilse: [
              ['calibe', 'O ilaç benim başım için efendi. Defteri kim getirdi, ona bakın.', 'soguk'],
              ['sai', 'Kartı içinde: Remzi Bey. Hatice\'nin sözünü bundan sonra iki kişiyle tartarım.', 'ciddi'],
            ] }] },
            { bayrak: { p8_kazanim: 'hatice' } },
          ], degilse: [{ eger: (S) => kazanim(S) === 'sise', ise: [
            { eger: (S) => b(S).p8_kanit === 'sise', ise: [
              /* Tur 29 (B8 diyalog 2): "hesap" Süha'nın sözcüğü; Sait kısa, baba gibi */
              ['sai', 'Mühürlü şişe sofrada. Öbürünü görmeden misafirime sarhoş demem.', 'ciddi'],
            ], degilse: [
              ['sai', 'Bir şişe mühürlüymüş. Öbürünü görmeden misafirime sarhoş demem.', 'ciddi'],
            ] },
            /* Diyalog T1 (K6, 8.15): romandaki "ya sen neydin?" anlatım bozukluğu; soru Hatice'nin orada ne aradığı */
            ['sai', 'O sarhoşmuş, diyorlar. Ya sen orada ne arıyordun Hatice?', 'ciddi'],
            { bayrak: { p8_kazanim: 'sise' } },
          /* Tur 18 (madde 4): kendi etiket notum — babam haşhaşın hesabını ister; konyak ayrı hesap kalır */
          ], degilse: [{ eger: (S) => kazanim(S) === 'surup', ise: [
            /* Diyalog T1 (ses C2): Sait kâtip gibi değil, baba gibi; satır kısaldı */
            ['sai', 'Bu senin yazın kızım. Yine de iki şişeyi sorarım: kim aldı, kime verdi?', 'notr'],
            ['sai', 'Konyağı sonra sorarım. Ya sen orada ne arıyordun Hatice?', 'ciddi'],
            { bayrak: { p8_kazanim: 'surup' } },
          /* Tur 18 (madde 3a): prova herkese açıldı — babam şahitleri ayrı dinler; kural konuşmanın sonunda da durur */
          ], degilse: [{ eger: (S) => kazanim(S) === 'ayri', ise: [
            /* Tur 27 (B8 diyalog 2): üç soruşturma satırı art arda gelmez */
            ['sai', 'Bundan sonra herkesi ayrı ayrı sorarım kızım.', 'ciddi'],
            ['sai', 'O sarhoşmuş, diyorlar. Ya sen orada ne arıyordun Hatice?', 'ciddi'],
            { bayrak: { p8_kazanim: 'ayri' } },
          /* Tur 18 (madde 3b): Hatice ezberini söylemedi — "odada gördüm" desteksiz; konyak yalanı yerinde */
          ], degilse: [{ eger: (S) => kazanim(S) === 'desteksiz', ise: [
            /* Diyalog T1 (8.16): olmayan deyim yerine açık hüküm */
            ['sai', 'Hatice odaya girmemiş. Hanım, onun girdiği sözünü bir daha dinlemem.', 'ciddi'],
            /* Doğrulama gece b5-8 (8. anlatı): hangi şişe olduğu açık; hekimin konyak sözü çözülmeden durur */
            ['sai', 'Konyağı sonra konuşuruz. Ya sen orada ne arıyordun Hatice?', 'ciddi'],
            { bayrak: { p8_kazanim: 'desteksiz' } },
          ], degilse: [{ eger: (S) => kazanim(S) === 'hatice', ise: [
            ['sai', 'Titreyen ağızdan çıkan sözü tek başına almam.', 'ciddi'],
            ['sai', 'O sarhoşmuş, diyorlar. Ya sen orada ne arıyordun Hatice?', 'ciddi'],
            { bayrak: { p8_kazanim: 'hatice' } },
          ], degilse: [
            ['sai', 'O sarhoşmuş. Ya sen orada ne arıyordun Hatice?', 'ciddi'],
          ] }] }] }] }] }] },
          /* 7. bölüm: misafire kim bakacaktı */
          { eger: (S) => b(S).p7_hizmet === 'sefik', ise: [
            { goster: ['sefik', 'aglamakli'] },
            /* Tur 17 ek (madde 13): uyuyan çocuk bütün gecenin tanığı değil; yalnız bildiğini söyler */
            ['sefik', 'Ben uyuyordum. Kapı sesi duymadım.', 'aglamakli'],
          ], degilse: [
            /* Tur 22 ek: Şefik'i yanıma aldım; misafirin kapısında tanık bırakmadım */
            ['ic', 'Dün gece Şefik\'i yanıma aldım; misafirin kapısında benim tanığım yok. Doğruyu bilmek yetmiyor.', 'endiseli'],
          ] },
          { eger: kenanVar, ise: [
            ['sai', 'Sen gece neredeydin oğlum?', 'ciddi'],
            /* Diyalog T1 (D8, b5_8 (b)): yalanın iç çatışması görünür; anlatıcı satırı sözden sonra, önceden söylemez */
            ['mukaddem', 'Odamdaydım efendim.', 'mahzun'],
            /* Süha yolunda Kenan çamlıkta değildi, pencereden gördü: susması da Feride'yi korur, ama "ilk yalan" denmez */
            { eger: muk, ise: [
              { eger: evde, ise: [
                ['an', 'Kenan bunu söylerken Feride\'ye baktı. Bu kez doğruydu; ama doğruya da şahit gerekirdi.'],
              ], degilse: [
                ['an', 'Kenan bunu söylemeden önce Feride\'ye bakmıştı. Ömründeki ilk yalan onun içindi.'],
              ] },
            ], degilse: [
              ['an', 'Kenan bunu söylerken Feride\'ye bakmadı. Pencereden gördüğünü fincanına gömdü.'],
            ] },
          ] },
          /* Tur 27 (B8 sürük. 1): ara sayfanın kuralı ("fincan soğumadan söylenen söz geri alınmaz") süre olur; iki seçim
             /* Sofra seçimden önce sessiz kalır. Hüküm teması Sait’in kararına girer. */
          { eger: muk, ise: [
            /* --- Kenan yolu: ithama ilk cevap --- */
            /* Sürükleyicilik T1 (b7_8_9 8.3, S5): doruk seçiminden önce bedel söylenir */
            /* Evde kalan Feride yalnız kendi duyduğunu ve kendi kapısını anlatabilir. */
            { soru: 'Babam kahve tepsisini geri yolladı. Kenan\'a dönmeden önce konuşmalıyım; ne söylersem kendi adım da ortaya çıkar.', secim: [
              { m: '“Kenan Bey odasındaydı babacığım. Döşemeye vurdu.”', kosul: evde, etki: { mukaddem: 4, vakar: 1, calibe_suphe: 1 }, bayrak: { p8_son: 'oda' },
                iz: 'Döşemeden gelen üç tıkı babana anlattın.', adimlar: [
              ['f', 'Odamdaydım babacığım. Aşağıdan döşemeye üç kere vurdu.', 'kararli'],
                ASMA,
                ['calibe', 'Bütün gece dinledin mi kızım?', 'sinsi'],
                { eger: (S) => b(S).p7_v_bekci === 'kapi', ise: [
                  { eger: nimetVar, ise: [
                    ['f', 'Sonrasını görmedim. Benim kapımda Nimet vardı babacığım. Onu da dinleyin.', 'kararli'],
                  ], degilse: [
                    ['f', 'Sonrasını görmedim. Benim kapımda Madam vardı babacığım. Onu da dinleyin.', 'kararli'],
                  ] },
                ], degilse: [
                  ['f', 'O vakti bilirim efendim. Sonrasını sormayın, görmedim.', 'kararli'],
                ] },
                { eger: kenanVar, ise: [
                  ['mukaddem', 'Kapım sabaha kadar açılmadı efendim. İçeriden de dışarıdan da.', 'kararli'],
                ] },
                { muzik: 'hukum' },
                ['sai', 'Peki kızım. Selamlıkta onu kimin gördüğünü de sorarım.', 'ciddi'],
                { kart: 'Babam bu kez selamlıkta kimin bulunduğunu soracak.' },
              ] },
              { m: 'Geceyi babana anlat.', kosul: (S) => !evde(S), etki: { mukaddem: 5, itibar: -2, vakar: 1 }, bayrak: { p8_son: 'dogru' },
                iz: 'Doğruyu söyledin. Kenan\'ı kurtarmak için kendi adını yaktın.', adimlar: [
              ['f', 'Kenan Bey o gece içmedi. Benimleydi, çamlıkta.', 'kararli'],
                /* Tur 27b (GPT B8-S1/G2): kahve doruğunun anı Feride'nin sesli hamlesinden sonra */
                ASMA,
                'Kimse kıpırdamadı. Sonra Perihan Hanım gülümsedi.',
                /* Tur 33 (ifade envanteri 5): zafer gülüşü, maske */
                ['calibe', 'Duydunuz mu efendi? Kızcağız onu korumak için kendini yakıyor.', 'sinsi'],
                { eger: kenanVar, ise: [
                  ['mukaddem', 'Feride Hanım beni korumak için söylüyor efendim. Doğru değil.', 'kararli'],
                  /* GPT T25 Kenan (B8 sürük. 3, S3): Kenan'ın koruyucu yalanına Feride sesli karşılık verir
                     (yalanı bozmak ya da saklamak 9. bölümün açılış seçimi; burada yalnız sözünü geri almaz) */
                  /* Tur 32 (B8 diyalog b): Kenan'ın "Doğru değil"i Feride'yi kırar; satır bunu gösterir */
                  /* Tur 33 (B8 sürük 1): doruğunda Feride acındırılmaz */
                  ['f', 'Sözümü düzeltmeyin Kenan Bey. Bir kez doğru söyledim; onu benden almayın.', 'kararli'],
                ] },
                /* Oynanış T1 B6: babamın güveni 60'a vardıysa ceza aynı, söz yumuşak (inanmak ister) */
                { eger: babaGuven, ise: [
                  { muzik: 'hukum' },
                  ['sai', 'Sana inanmak isterim kızım. Yine de akşama kadar odandan çıkma.', 'mahzun'],
                ], degilse: [
                  { muzik: 'hukum' },
                  ['sai', 'Akşama kadar odandan çıkmayacaksın kızım.', 'ciddi'],
                ] },
                /* Sürükleyicilik T1 (S2): kısa anlatıcı satırı karttan önce, kart en sonda.
                   Tur 30 (t30 B8 anlatı 10'a 1): Kenan'ın ikinci koruyucu yalanı "ilk yalan" cümlesine bağlanır */
                { eger: kenanVar, ise: [
                  ['an', 'Kenan onun sözünü yine geri almaya çalışmıştı. Feride başını eğmedi.'],
                ], degilse: [
                  ['an', 'Feride başını eğmedi.'],
                ] },
                { kart: 'Doğruyu söyledim. Bu bahçede inanılmayan tek söz oydu.' },
              ] },
              /* Tur 18 (madde 3b): sabah Hatice'ye "bu sofrada açmam" sözü verildiyse aynı hamle sözü bozmaktır */
              /* Oynanış T1 B1: büyük yüzleşmede koz görünür ve harcanır (kozYak); kozu olmayan genel seçeneği kilitli görür */
              /* GPT T26 Süha (öncelik 1): kozun istediği, herkesin duyduğu Nabi sözü değil; yalnız sonuna kadar dinleyenin
                 bildiği Perihan vaadi. Seçenek metni bunu söyler; kilitli görünen yazı da böylece kendini açıklar. */
              { m: 'Sözünü boz: “Hatice, Nabi Bey\'in sözünü de anlat, Perihan Hanım\'ınkini de.”', kozGerek: ITIRAF, kilitGoster: () => false, kosul: (S) => var_(S, ITIRAF) && b(S).p8_hatice === 'soz', etki: { calibe_suphe: 2 }, bayrak: { p8_son: 'koz', p8_hatice: 'bozdu' },
                iz: 'Sözünü bozup kozunu açtın. Hatice artık sana güvenmeyecek.', adimlar: [
                ['f', 'Hatice, Nabi Bey\'in sözünü de anlat babama, Perihan Hanım\'ın sözünü de.', 'kararli'],
                ASMA,
                { goster: ['reftar', 'korkmus'] },
                ['reftar', 'Bu sofrada açmayacaktınız… Bilmem. Hiçbir şey bilmem.', 'korkmus'],
                { goster: ['calibe', 'ofkeli'] },
                ['calibe', 'Kız aklını oynatmış efendi! Dün başını kapıya vurdu.', 'ofkeli'],
                ['sai', 'Nabi mi dedi?', 'endiseli'],
                /* Tur 27 (B8 anlatı 5): kartı önceden söyleyen iç ses yerine kapanış anlatıcı satırı */
                ['an', 'Hatice gözünü Feride’den çevirdi. Feride fincanını yerine koyup babasına baktı.'],
                { kozYak: ITIRAF },
                { kart: 'Babam ilk kez Perihan Hanım\'a baktı. Hatice bir daha bana bakmadı.' },
              ] },
              { m: '“Hatice, Nabi Bey\'in sözünü de anlat, Perihan Hanım\'ınkini de.”', kozGerek: ITIRAF, kosul: (S) => var_(S, ITIRAF) && b(S).p8_hatice !== 'soz', etki: { calibe_suphe: 2 }, bayrak: { p8_son: 'koz' },
                iz: 'Nabi Bey\'in adını ve Perihan Hanım\'ın vaadini sofraya koydun. Kozun artık sır değil.', adimlar: [
                ['f', 'Hatice, Nabi Bey\'in sözünü de anlat babama, Perihan Hanım\'ın sözünü de.', 'kararli'],
                ASMA,
                { eger: (S) => b(S).p8_kanit === 'itiraf', ise: [
                  ['reftar', 'Nabi Bey… Hanımım dedi ki…', 'korkmus'],
                ], degilse: [
                  ['reftar', 'Ben… bilmem…', 'korkmus'],
                ] },
                { goster: ['calibe', 'ofkeli'] },
                ['calibe', 'Kız aklını oynatmış efendi! Dün başını kapıya vurdu.', 'ofkeli'],
                ['sai', 'Nabi mi dedi?', 'endiseli'],
                ['an', 'Nabi\'nin adı sofraya düştü. Kimse onu yerden kaldırmaya eğilmedi.'],
                { kozYak: ITIRAF },
                { kart: 'Babam fincanını bırakıp Perihan Hanım\'a döndü. Uzun baktı.' },
              ] },
              /* Tur 28 (t28_b05_08 B8 sürük 3): aynı sahnede alınan dürbün kozu doruğa girer (üçüncü strateji: şahit). Bedel
                 görünür: şahit Feride'yi de gördü. p8_son 'dogru' kalır (doğru söylendi, adı yandı; 9. bölüm sözleşmesi
                 değişmez); şahidin kim olduğu p8_tanik'ta. */
              { m: '“Remzi Bey de gördü babacığım: Kenan Bey ayıktı.”', kozGerek: DURBUN, kosul: kozVar(DURBUN), etki: { mukaddem: 3, itibar: -2 }, bayrak: { p8_son: 'dogru', p8_tanik: 'durbun' },
                iz: 'Remzi\'nin şahitliğini açtın. Kenan\'ı kurtaran dürbün seni de gördü.', adimlar: [
                ['f', 'Remzi Bey de gördü babacığım: Kenan Bey gece ayıktı.', 'kararli'],
                ASMA,
                ['sai', 'Remzi mi? Gece yarısı çamlığı dürbünle mi seyrediyor?', 'ofkeli'],
                { goster: ['calibe', 'sinsi'] },
                ['calibe', 'Kızı da görmüş demek efendi.', 'sinsi'],
                { eger: kenanVar, ise: [
                  ['mukaddem', 'Feride Hanım\'ın adını bu sofraya ben getirmedim efendim. Remzi Bey de getirmesin.', 'kararli'],
                ] },
                { muzik: 'hukum' },
                ['sai', 'Remzi\'yi akşam selamlıkta dinlerim. Sen akşama kadar odandan çıkma.', 'ciddi'],
                ['an', 'Remzi Bey\'in dürbünü sofraya iki adı birden düşürdü.'],
                { kozYak: DURBUN },
                { kart: 'Kenan\'ı kurtaran şahit, benim adımı da yaktı.' },
              ] },
              { m: 'Sus. Fincanına dokunma; gözünü Perihan Hanım\'dan ayırma.', bayrak: { p8_son: 'sus' },
            iz: 'Geceyi sakladın. Doğruyu söyleyeceğin saat hâlâ senin elinde.', adimlar: [
                /* Tur 28 (B8 ses 2): susma kararı bölümün en büyük doruğuyla çalmaz; kart öncesi tek piyano tuşu */
                { muzik: 'sessiz' },
                /* Tur 30 (t30 B8 sürük. 1, görsel (b)): bölümün en büyük dalı resimsiz kapanıyordu. Bütün susma dalları
                   kahve karesini görür: Feride asmanın altında ayakta, sofraya dik bakıyor (konuşan değil, oturmayan kız) */
                ASMA,
                { eger: (S) => b(S).p8_hatira === 'saat', ise: [
                  'Cebimde onun saati işliyor. Ben sustum, saat susmadı.',
            ], degilse: [{ eger: (S) => b(S).p8_hatira === 'kurdele', ise: [
              'Örgümü sabah yeniden ördüm, eski bir bağla. Asıl kurdelem onun bileğinde; kimse sormadı.',
                ], degilse: [
                  /* GPT T29 O8-1: evden çıkmayan kızın çamlık anı yok */
                  { eger: evde, ise: [
                    'Fincanımı ne ittim ne içtim. Gözüm Perihan Hanım\'da.',
              ], degilse: [
                'Fincanımı ne ittim ne içtim. Çamlık benim, gözüm Perihan Hanım\'da.',
                  ] },
                ] }] },
                /* Tur 32 (B8 anlatı 4): 'sus' dalında da Sait'in kendi ağzından kısa bir hükmü var */
                { eger: kenanVar, ise: [
                  'Kenan Bey de sustu. Aynı geceyi aynı yere gömdük.',
                  ['sai', 'Kenan, ilk vapurla annene git oğlum. Bu iş akşam selamlıkta konuşulacak.', 'ciddi'],
                ], degilse: [
                  ['sai', 'Bu iş akşam selamlıkta konuşulacak. O vakte kadar sofradan laf taşınmasın.', 'ciddi'],
                ] },
                ['an', 'Herkes kendi yalanını içti; Feride\'nin fincanı dolu kaldı.'],
                { efekt: 'piyano_tus' },
                /* Sürükleyicilik T1 (b7_8_9 8.7): eski kart ("Babam kalktı. Vapur saatini sordu") 9. bölümde
                   "Gitmeyeceğim" ile sönüyordu (sahte kanca). Kart artık Feride'nin kararı; vapur sorusu artçı kalır.
                   Tur 30 (t30 B8 sürük. 10'a 1): kart özet değil eylem ve görünen etki */
                { kart: 'Fincanıma dokunmadım. Gözünü benden önce Perihan Hanım kaçırdı.' },
              ] },
            ] },
          ], degilse: [
            /* --- Süha yolu: ithama ilk cevap --- */
            /* Tur 27 (B8 sürük. 2): soruda bedel */
            /* Tur 27b (GPT B8-O1): çamlığa gitmeyen kız da fişekte görüldü; bedel "gece" (soru iki yolda doğru) */
            { soru: 'Babam fincanını bırakmadan konuşmalıyım; ne söylersem kendi adım da ortaya çıkar.', secim: [
              { m: '“Şişeyi siz denize döktünüz. Gördüm.”', kosul: (S) => son7(S) === 'in', etki: { itibar: -2, vakar: 1 }, bayrak: { p8_son: 'sise' },
                iz: 'Hekimin yalanını yüzüne söyledin. Gece selamlıkta olduğun da ortaya çıktı.', adimlar: [
              ['f', 'Şişeyi kimse içmedi. Siz denize döktünüz, ben gördüm.', 'kararli'],
                ASMA,
                /* GPT T26 Süha (B8 oynanış 10'a 4, öncelik 5): gece alınan boş şişe ya da mühre atılan çentik savunmada kullanılır */
                { eger: (S) => var_(S, BOS), ise: [
                  ['f', 'Boş şişe benim sandığımda. Yanındaki bardak kupkuruydu.', 'kararli'],
              ], degilse: [{ eger: (S) => b(S).p7_v_dolap === 'centik', ise: [
                ['f', 'Mührünü dün akşam ben çentiklemiştim. Dolaptan inen o şişeydi.', 'kararli'],
                ] }] },
                ['suha', 'Gördünüz mü? Gece yarısı, selamlıkta?', 'soguk'],
                /* Tur 33 (ifade envanteri 15): sorgu soğuk yüzle */
                { goster: ['calibe', 'soguk'] },
                ['calibe', 'Gece selamlıkta ne işin vardı kızım?', 'soguk'],
                { eger: (S) => b(S).p8_pazar === 'kabul', ise: [
                  ['suha', 'Pazarlığı siz bozdunuz. Ben hatırlatırım.', 'notr'],
                ] },
                /* Tur 27 (B8 anlatı 5): kapanış anlatıcı satırı */
                ['an', 'Feride gecesini sofraya kendi eliyle koymuştu. Geri almak için uzanmadı.'],
                /* GPT T28 (8-S1): tuzak bölüm bitmeden babanın somut kararını alır */
                { eger: (S) => var_(S, BOS), ise: [
                  { muzik: 'hukum' },
                  ['sai', 'Şişeyi şimdi getir kızım. Süha Bey de burada beklesin.', 'ciddi'],
                  { kart: 'Babam şişeyi istedi; hekim masada bekliyor. Soru artık bende.' },
                ], degilse: [
                  { muzik: 'hukum' },
                  ['sai', 'Süha, selamlıkta ne gördüğünü akşam bana yalnız anlatacaksın.', 'ciddi'],
                  { kart: 'Babam hekimi ayrı dinleyecek. Yalanlar ikiydi; soru artık bende.' },
                ] },
              ] },
              /* Tur 27 (B8 oynanış 4): selamlığın perdesinde olmayan ama gece boş şişeyi alan kızın aktif hamlesi.
                 p8_son 'sise' = "gece selamlıktaydım" (9. bölüm aynı soruyu sorar). Koz harcanmaz; 9. bölüm onu ister. */
              /* GPT T28 (8-A1, 8-O2): bulunan nesne söylenir; kuru bardak içilmediğini kanıtlamaz */
              { m: '“Boş şişeyi buldum; bardak kuruydu. İçildiğini kim gördü?”', kozGerek: BOS, kosul: (S) => var_(S, BOS) && son7(S) !== 'in', kilitGoster: (S) => son7(S) !== 'in',
                etki: { itibar: -2, vakar: 1 }, bayrak: { p8_son: 'sise' },
                iz: 'Boş şişeyi bulduğunu söyledin. Gece selamlıkta olduğun da ortaya çıktı.', adimlar: [
              ['f', 'Selamlıktaki boş şişe benim sandığımda babacığım. Yanındaki bardak kuruydu, içildiğini kim gördü?', 'kararli'],
              ASMA,
              ['suha', 'Gece yarısı selamlıkta mıydınız küçük hanım? Şişe saymaya?', 'soguk'],
                { goster: ['calibe', 'soguk'] },
                ['calibe', 'Gece selamlıkta ne işin vardı kızım?', 'soguk'],
                { eger: (S) => b(S).p8_pazar === 'kabul', ise: [
                  ['suha', 'Pazarlığı siz bozdunuz. Ben hatırlatırım.', 'notr'],
                ] },
                ['an', 'Feride gecesini sofraya kendi eliyle koymuştu. Geri almak için uzanmadı.'],
                /* GPT T28 (8-S1): tuzak bölüm bitmeden babanın somut kararını alır */
                { muzik: 'hukum' },
                ['sai', 'Şişeyi şimdi getir kızım. Süha Bey de burada beklesin.', 'ciddi'],
                { kart: 'Babam şişeyi istedi; hekim masada bekliyor. Soru artık bende.' },
              ] },
              /* Anlatı T2b (GPT 24b B8): ifşa seçenek metninde açık; oyuncu neyi açtığını bilerek seçer */
              { m: '“Süha Bey Perihan Hanım\'ın eski talibidir, babacığım. Sözünü ona sorun.”', kozGerek: GECMIS, kosul: kozVar(GECMIS), etki: { calibe_suphe: 2 }, bayrak: { p8_son: 'gecmis' },
                iz: 'Perihan ile Süha\'nın geçmişini babanın önüne koydun. Kozun artık sır değil.', adimlar: [
                ['f', 'Babacığım, Süha Bey\'in sözünü Perihan Hanım\'a sorun. Eski talibiydi; hâlâ kapısında.', 'kararli'],
                ASMA,
                { goster: ['calibe', 'saskin'] },
                { efekt: 'fincan' }, 'Perihan Hanım\'ın fincanı tabağına çarptı.',
                ['sai', 'Talip mi?', 'endiseli'],
              /* Tur 31 (t31_b05_08 B8 oynanış 4): pazarlığı kabul eden kıza Süha hatırlatır */
              { eger: (S) => b(S).p8_pazar === 'kabul', ise: [
                ['suha', 'Pazarlığımız susmaktı Feride Hanım. İlk konuşan siz oldunuz.', 'soguk'],
              ] },
              /* Tur 33 (ifade envanteri 37): babanın önünde hekim ciddiyeti */
              ['suha', 'Feride Hanım rüya görmüş efendim. Uykusuz gecelerde olur.', 'notr'],
                ['an', 'Süha Bey’in ağzındaki gülüş silinmedi. Perihan Hanım fincanını tabağa bıraktı.'],
                { kozYak: GECMIS },
                { kart: 'Babam Süha Bey\'e değil, Perihan Hanım\'a baktı. Ve bekledi.' },
              ] },
              /* Diyalog T1 (Ü3): m ile f aynı noktalama (hitap virgülsüz) */
              { m: '“Kenan Bey içmez babacığım. Bir yudum bile.”', etki: { mukaddem: 2 }, bayrak: { p8_son: 'savun' },
                iz: 'Kenan\'ı savundun. Baban bu sabah hekime inandı.', adimlar: [
                /* Tur 27 (B8 sürük. 10'a 2): Kenan'ın susması Feride'nin hamlesine gerekçe olur (seçimden sonra; iki seçim
                   arası 13 satırı aşmasın) */
                { eger: kenanVar, ise: [
                  ['ic', 'Benim için sustu. Şimdi sıra bende.', 'kararli'],
                ] },
                ['f', 'Kenan Bey içmez babacığım. Bir şişeyi değil, bir yudumu bile.', 'kararli'],
                ASMA,
                ['calibe', 'Kız nişanlısını savunuyor efendi. Ne güzel.', 'sinsi'],
                ['suha', 'Savunsun. Ben hekimim; ben gördüm.', 'soguk'],
                ['an', 'Feride sözlüsünü bütün sofranın önünde savundu, sesi bir kez bile incelmedi.'],
                /* Oynanış T1 B6: babamın güveni 60'a vardıysa hükmü aynı, bakışı benden ayrılmaz */
                { eger: babaGuven, ise: [
                  { kart: 'Savundum. Babam hekime inandı; ama gözünü benden ayırmadı.' },
                ], degilse: [
                  { kart: 'Savundum. Babam bana değil, hekime inandı.' },
                ] },
              ] },
              { m: 'Sus. Gözünü Süha Bey\'den çek, Perihan Hanım\'a dik.', bayrak: { p8_son: 'sus' },
                iz: 'Sustun ama gözünü Perihan Hanım\'dan ayırmadığını o da gördü.', adimlar: [
                /* Tur 28 (B8 ses 2): susma sessizlikte */
                { muzik: 'sessiz' },
                /* Sürükleyicilik T1 (b7_8_9 B8 (6)): Perihan'a dikilen gözün etkisi ilk satırda görünür */
                { efekt: 'fincan' },
                'Gözümü Perihan Hanım\'a diktim. Fincanını ilk o bıraktı.',
                /* Tur 30 (t30 B8 sürük. 1): susma dalı da doruğun kahve karesini görür (ayakta, gözü sofrada) */
                ASMA,
                { eger: (S) => b(S).p8_pazar === 'ret', ise: [
                  /* Diyalog T1 (8.19, D4): pahalı/faiz Remzi'nin; Süha hekim diliyle ve tehlikeli */
                  ['suha', 'Pazarlıksız sustunuz. Bu ilacın dozunu bilmiyorum.', 'soguk'],
                ], degilse: [
                  ['suha', 'Ödeştik. Akşam nabzınızı ben sayarım.', 'alayci'],
                ] },
                ['an', 'Hüküm söylenirken Feride sustu. Fincanı hâlâ elindeydi.'],
                { efekt: 'piyano_tus' },
                { kart: 'Süha Bey fincanını bana kaldırdı. Sustuğumu sanıyor.' },
              ] },
            ] },
          ] },
          /* Kapanış: anlatıcı tek satırla doruğu söyler (rehber §5.3). Anlatı T2 (8.7, GPT 8.4): ortak "iki yalanı
             ezberledi" satırı her yolda aynıydı ve defterle kancayı yineliyordu; artık her son karar (p8_son) kendi
             doruğunu söyler. Sürükleyicilik T1 (S2): kart en sonda; kartı açıklayan anlatıcı satırları kalktı. */
          { bolumSonu: true },
        ],
      },
    ],

    // Tur 18 ek (öneri 9): defter üç kısa cümle — sabah neyi değiştirdim / gece kimle ne kaldı / sıradaki soru.
    // Öpücük kabul/ret, defterin yeri (babada) ve provanın açılışı kısa özette de doğru kalır.
    sonNotu: function (S) {
      var f = S.bayrak, c = [], m = f.p_rota === 'mukaddem';
      // 1) Sabah: açtığım kanıt ya da kahvede açtığım prova
      var prova = {
        acik: 'Hatice’nin sözlerini dün gece de duyduğumu söyledim. Babam şahitleri ayrı dinleyecek, Perihan Hanım dinlendiğini biliyor.',
        yalniz: 'Kahvede Hatice\'ye ezber öğretildiğini söyledim. Babam onu yalnız dinledi, Perihan Hanım dinlendiğini biliyor.',
      }[f.p8_prova];
      var defter = f.p6_defter === 'remzi' ? 'Eczacının defterini Remzi Bey babama kendi eliyle verdi'
        : (f.p8_kart === 'cikti' ? 'Kartı çıkarıp eczacının defterini kendi notumla babama verdim' : 'Eczacının defterini Remzi Bey\'in kartıyla babama yolladım');
      var kanit = {
        itiraf: 'Hatice\'ye Nabi Bey\'in sırrını bildiğimi söyledim. Kahvede sesi titredi, babam sözünü tek başına almadı.',
        sise: 'Mühürlü şişeyi Şefik babamın önüne koydu. Babam öbür şişe sayılmadan kimseye sarhoş demeyecek.',
        defter: defter + '. Babam Hatice\'nin tek başına sözüne bakmayacak.',
        bardak: 'Gece bardağını Perihan Hanım\'ın kapısına bıraktım. Odasına girdiğimi artık biliyor.',
        acima: 'Hatice\'ye onu koruyabileceğimi söyledim. Kahvede yine de ezberini söyledi.',
        not: 'Etiket notumu babama yolladım. İki şişe şurubun hesabını istedi, konyak ayrı kaldı.',
        prova: ({
          soz: 'Hatice\'ye Nabi Bey\'i sofrada açmayacağıma söz verdim. Kahvede ezberini söylemedi.',
          bozdu: 'Hatice\'ye Nabi Bey\'i sofrada açmayacağıma söz verdim, sonra sözümü bozdum.',
          ret: 'Hatice\'nin şartını kabul etmedim. Kahvede ezberine sığındı.',
        })[f.p8_hatice],
      }[f.p8_kanit] || (f.p8_kazanim === 'sise'
        ? 'Sabah kozlarımı açmadım. Kahvede mühürlü şişeyi sorunca babam iki şişenin hesabını istedi.'
        : 'Sabah kozlarımı açmadım, önce onları dinledim.');
      var ilk = {
        bos: 'Boş şişeyi sofrada söyledim. Gece selamlıkta olduğum da duyuldu.',
        sise: 'Mühürlü şişeyi sofrada sordum. Babam şişelerin hesabını istedi.',
        prova: 'Hatice’ye öğretilen ezberi sofrada açtım.',
      }[f.p8_ilk];
      if (ilk && (!f.p8_kanit || f.p8_kanit === 'yok')) c.push(prova ? prova + ' ' + ilk : ilk);
      else { c.push(prova || kanit); if (ilk && !(f.p8_ilk === 'prova' && prova)) c.push(ilk); }
      // 2) Gece: çamlık (gönül kararı aynen)
      /* GPT T29 O8-1: evden çıkmayan kızın gecesi */
      if (m && f.p8_cik === 'evde') c.unshift('Geceyi odamda geçirdim. ' + (f.p8_evde_tik === 'cevap'
          ? 'Döşemenin altından üç tık geldi, ben de üç kez vurdum. ' : 'Döşemenin altından üç tık geldi, cevap vermedim. ') + ({
        git: 'Sabah ilk vapurla gitti, ben istedim.',
        anlat: 'Sabah annesine gitti, her şeyi o anlatacak.',
      }[f.p8_plan] || 'Sabah kahvede yanımda kaldı.'));
      else if (m) c.unshift(({
        sen: 'Mehtapta Kenan\'ı ben öptüm',
        evet: '“Öpebilir miyim?” dedi, “Evet” dedim',
        hayir: f.p8_dokun === 'kendi' ? 'Şalımı kendim düzelttim; “Öpebilir miyim?” dedi, “Hayır, bu gece yalnız ay” dedim'
          : f.p8_el === 'ayri' ? '“Öpebilir miyim?” dedi, “Hayır, bu gece yalnız ay” dedim'
          : '“Öpebilir miyim?” dedi, “Hayır, bu gece yalnız ellerim” dedim',
      }[f.p8_opus] || 'Kenan kaşımın ucunu öptü, gerisi düğüne') + '. ' + ({
        git: 'Sabah ilk vapurla gitti, ben istedim.',
        anlat: 'Sabah annesine gitti, her şeyi o anlatacak.',
      }[f.p8_plan] || 'Sabah kahvede yanımda kaldı.'));
      /* Tur 27b (GPT B8-O1): yapılmayan buluşma olmuş sayılmaz */
      else c.unshift((f.p8_cik === 'red' ? (f.p8_yer === 'burada'
          /* Tur 28b (8-O1): yerinden inmeyen kız */
          ? 'Süha Bey çamlığa çağırdı, bir basamak bile inmedim. Bildiğini aşağıdan söyledi, elini havada bıraktım. '
          : 'Süha Bey çamlığa çağırdı, gitmedim. Bildiğini çamlığın kıyısında söyledi, elini havada bıraktım. ')
        : 'Çamlıkta Süha Bey bir küçük evet istedi, ' + (f.p8_opus === 'hayir' ? '“Hayır” dedim. ' : 'öpüştük. ')) + ({
        kabul: f.p8_cik === 'red' ? 'Susmama karşılık o geceyi yok saydık.' : 'Susmama karşılık çamlığı yok saydık.',
        sart: 'Pazarlığına şart koydum, Hatice\'nin adını söylemedi.',
      }[f.p8_pazar] || 'Pazarlığını reddettim.'));
      // 3) Kişisel kanca: bu yolun son kararı. Sürükleyicilik T1 (mercek_sezon öneri 4): soru değil, eylem ve karar
      /* Tur 30 (t30 B8 anlatı 1): dokuz dalın ortak "Sabah iki yalan söylendi;" girişi kalktı (sonNotu özetlemez);
         her cümle kahvede yapılan eylemle açılır, kartı ve kancayı yinelemez. benzet8 artık üç cümleyi sayar. */
      if (m) c.push({
        /* Tur 28: dürbün şahitliği aynı doğrunun başka yolu; şahit Feride'yi de gördü */
        dogru: f.p8_tanik === 'durbun'
          ? 'Remzi Bey\'in dürbününü sofraya şahit çağırdım. Kenan\'ın ayıklığıyla birlikte benim gecem de duyuldu.'
          : 'Kenan\'ın gecesini babamın önünde kendi ağzımla söyledim. Doğrum yalana sayıldı.',
        koz: f.p8_hatice === 'bozdu'
          /* Tur 29 (t29_b05_08 B8 anlatı 7): defter kartı yinelemez; kartın görmediği yanı söyler */
          ? 'Hatice\'ye verdiğim sözü sofrada bozdum. Bedelini onun yüzünde gördüm.'
          /* şüphe ≠ hüküm: Hatice anlatamadı; Feride vaadi sordu */
          : 'Perihan Hanım\'ın Hatice\'ye verdiği vaadi sofrada sordum. Hatice cevap veremedi.',
        oda: 'Döşemeye vurduğunu babama söyledim.',
      }[f.p8_son] || 'Sofrada sustum. Doğruyu söyleyeceğim saati kendime ayırdım.');
      else c.push({
        /* GPT T26 Süha (öncelik 5): kullanılan belge özette kalır */
        sise: f.p7_son !== 'in'
          ? 'Boş şişenin sandığımda durduğunu, bardağı kuru bulduğumu sofrada söyledim. Gece selamlıkta olduğum da duyuldu.'
          : ((S.kozlar || []).indexOf(BOS) >= 0
            ? 'Şişeyi Süha Bey\'in denize döktüğünü yüzüne söyledim. Boş şişesi sandığımda, gecem de ortada.'
            : 'Şişeyi Süha Bey\'in denize döktüğünü yüzüne söyledim. Gece selamlıkta olduğum da duyuldu.'),
        gecmis: 'Süha Bey için babamın önünde “Eski talibidir” dedim. Perihan Hanım\'ın fincanı tabağına çarptı.',
        savun: 'Kenan\'ı savundum. Hekimin “ben gördüm”ünün karşısında sözümden dönmedim.',
      }[f.p8_son] || (f.p8_pazar === 'ret'
        ? 'Pazarlıksız sustum. Gözümü Perihan Hanım\'dan ayırmadım.'
        : 'Sözleştiğim gibi sustum. Ama gözümü Perihan Hanım\'a diktim; susmamın sahibi benim.'));
      return c.join(' ');
    },
    /* Tur 28b (ORTAK anRet, kök 1/8): çamlığı, eli ya da öpücüğü reddeden kıza o anlar "kaçırdığın an" diye gösterilmez;
       yerinden inmeyen kıza kıyı anı da (o, kendi anını yaşadı) */
    anRet: {
      /* Tur 29 (B8 anlatı 1): iğneye izin verip eli vermeyen kızın hayırı da el ele anını reddeder */
      an_camlik: function (S) { var f = S.bayrak || {}; return f.p8_cik === 'red' || f.p8_dokun === 'geri' || (f.p8_dokun === 'igne' && f.p8_opus === 'hayir'); },
      /* Tur 29 (B8 oynanış 1): ellerini kendine saklayıp hayır diyen kız el ele anını reddetti */
      an_mehtap: function (S) { var f = S.bayrak || {}; return f.p8_cik === 'evde' || f.p8_dokun === 'kendi' || f.p8_el === 'ayri' || (!!f.p8_opus && f.p8_opus !== 'hayir'); },
      /* GPT T29 O8-3: açık öpücük reddi ya da başka bir temas biçimi seçen kız öteki öpücüğü kaçırmış sayılmaz; evden çıkmayan kız çamlık anlarını */
      an_opucuk: function (S) { var f = S.bayrak || {}; return f.p8_cik === 'evde' || f.p8_opus === 'hayir' || f.p8_opus === 'kas' || (OPUCUK_SEN_HAZIR && f.p8_opus === 'sen'); },
      /* Tur 30: kendi resmi bağlanınca (OPUCUK_SEN_HAZIR) "Ben öptüm" anı; başka bir cevap veren kız onu kaçırmış sayılmaz */
      an_opucuk_sen: function (S) { var f = S.bayrak || {}; return f.p8_cik === 'evde' || (!!f.p8_opus && f.p8_opus !== 'sen'); },
      an_opucuk_kas: function (S) { var f = S.bayrak || {}; return f.p8_cik === 'evde' || f.p8_opus === 'hayir' || f.p8_opus === 'sen' || f.p8_opus === 'evet'; },
      an_mehtap_ayri: function (S) { var f = S.bayrak || {}; return f.p8_cik === 'evde' || (!!f.p8_opus && f.p8_el !== 'ayri' && f.p8_dokun !== 'kendi'); },
      /* Tur 29 (B8 görsel 1): Kenan'lı kahve karesini açan kız temel kahve anını yaşadı */
      an_asma: function (S) { return (S.cizimler || []).indexOf('an_asma_kenan') >= 0; },
      an_asma_kenan: function (S) { return (S.cizimler || []).indexOf('an_asma') >= 0; },
      an_opucuk_suha: function (S) { var f = S.bayrak || {}; return f.p8_cik === 'red' || f.p8_opus === 'hayir'; },
      an_camlik_ret: function (S) { return (S.bayrak || {}).p8_yer === 'burada'; },
    },
    /* Tur 29 (GPT O5-2/O7-2/O8-3): öbür yolun anı (alt yazısı " · Kenan" / " · Süha") kaçırılan an sayılmaz (motor.js erisilir) */
    anYol: true,
    anIpuclari: {
      /* Tur 30: susma dalları da bu kareyi görür; ipucu konuşmayı değil ayakta durmayı söyler */
      an_asma: 'Sabah kahvesinde yalanın karşısında ayakta duran kız.',
      an_asma_kenan: 'Kenan\'ın da oturduğu kahve sofrasında yalanın karşısında ayakta duran kız.',
      an_mehtap_ayri: 'Mehtapta şalını kendi düzeltip Kenan\'a “Bu gece yalnız ay” diyen kız.',
      /* Tur 27: el ele resimleri artık öpücüksüz yolların anı */
      an_mehtap: 'Mehtapta Kenan\'a “Bu gece yalnız ellerim” diyen kız.',
      an_camlik: 'Çamlıkta hekimin elini tutup “bir küçük evet”ine hayır diyen kız.',
      an_camlik_ret: 'Ada gecesinde hekimin elini havada bırakan kız.',
      an_pencere_ret: 'Ada gecesinde çamlığa inmeyip hekimi penceresinin altında bırakan kız.',
      an_merdiven_ret: 'Ada gecesinde bir basamak bile inmeyip hekimi merdivenin dibinde bırakan kız.',
      an_opucuk: 'Mehtapta Kenan\'a evet diyen ya da onu kendisi öpen kız.',
      an_opucuk_kas: 'Mehtapta “kaşımın ucuna, gerisi düğüne” diyen kız.',
      an_opucuk_suha: 'Çamlıkta hekimin “bir küçük evet”ine evet diyen kız.',
    },
    /* Sürükleyicilik T1 (S1, b7_8_9 8.6): kanca son karara (p8_son) göre, tür karar; 9. bölümün sorusunu
       ("Babam kime inanacak?") yinelemez, kartın verdiği cevabı yeniden sormaz */
    siradaki: { ad: 'İftira', kanca: kancaIslev(function (S) {
      var f = S.bayrak;
      if (f.p_rota === 'mukaddem') return {
        /* GPT T25 Kenan (B8 sürük. 4): "bu kez delille" tekrarı yerine elimdeki somut koz; 9. bölüm açılışında
           Kenan sofradaysa saat / kurdeleyle yalanını bozma ya da saklama seçimi bunu karşılar */
        /* GPT T29 S8-1: açıklanmış gerçek yeniden saklanacak bir sır gibi sunulmaz; kanca yeni bedeli (oda, Kenan'ın
           yalanlaması) taşır, karar türünde kalır */
        dogru: !kenanVar(S) ? 'Odama kapattılar. Sözümü geri almadım; kapı açılınca da almayacağım.'
          : ({
            /* Tur 33 (B8 anlatı 1): kanca sevgiliye düşmanca okunmaz; Kenan beni korumak için yalan söyledi */
            saat: 'Saati cebimde. Akşam babamın karşısına Kenan\'la birlikte, doğruyla oturacağız.',
            kurdele: 'Kurdelem onun bileğinde. Akşam babamın karşısına Kenan\'la birlikte, doğruyla oturacağız.',
          }[f.p8_hatira] || 'Kenan beni korumak için yalan söyledi. Akşam babamın karşısına ikimiz oturacağız; bu kez doğruyla.'),
        oda: 'Babam selamlıkta kimin bulunduğunu soracak. Hatice ne diyecek?',
        koz: 'Nabi Bey\'in adını sofraya ben koydum. Geri almayacağım.',
      /* Anlatı T2b: 'sus' kancası kartın "saati ben seçeceğim"ini yinelemez (S1) */
      }[f.p8_son] || (f.p8_cik === 'evde'
        ? 'Gece duyduklarımı sofrada söylemedim. Babamla yalnız konuşacağım.'
        : 'Çamlığı sakladım. Akşam babamın kulağına doğruyu ben fısıldayacağım; Perihan Hanım\'dan önce.');
      return {
        sise: 'Selamlıkta ne aradığımı soracaklar. Süha Bey ağzını açmadan cevabı ben vereceğim.',
        gecmis: 'Perihan Hanım\'ın eski talibini sofraya ben koydum. Babam sorunca susmayacağım.',
        savun: 'Hekimin yalanını çürüten bir gerçek bulacağım. Kenan\'ın adı onun altında kalmayacak.',
      }[f.p8_son] || (f.p8_pazar === 'ret'
        ? 'Susmamı kimseye satmadım. Ne zaman konuşacağımı Süha Bey bilmiyor.'
        : 'Pazarlığı kabul ettim. Ama bozacağım günü Süha Bey bilmeyecek.');
    }, KANCA_VARSAYILAN) },
  };
  /* Tur 30 (t30 B8 görsel 2): "Ben öptüm" resmi bağlanınca ipucular ikiye ayrılır */
  if (OPUCUK_SEN_HAZIR) {
    window.BOLUMLER[108].anIpuclari.an_opucuk = 'Mehtapta Kenan\'ın “Öpebilir miyim?” sorusuna evet diyen kız.';
    window.BOLUMLER[108].anIpuclari.an_opucuk_sen = 'Mehtapta Kenan\'ın sorusuna cevap vermeden onu kendisi öpen kız.';
  }
})();

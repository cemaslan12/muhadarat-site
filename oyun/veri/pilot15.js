/* =========================================================================
   PİLOT — YENİ BİÇİMDE 15. BÖLÜM: GÖRÜCÜ  (bölüm no 115)
   Bağlayıcı belge: notlar/sezon1_son_plani.md, "Bölüm 15 — Görücü (kanca: Üç kapı)". Sıradaki: 16. bölüm
     "Yüzleşme ve Son" (sezon finali).
   Tek soru: "Babam yarın sabah kapımı açmadan, ben hangi kapıyı kendi elimle açacağım?"
     Süre: görücü ikindide, babanın kararı yatsıda mabeyn kapısında. Bedel: her kapının bedeli
     serbest vakitteki ipucunda, yatsıdaki "Üç kapı" anlatısında ve seçenek metninde yazılı.
   Romandan (§1, 30; §5 "Remzi", "Görücü ve talipler"): Remzi tarafı görücü yollar (annesi, yengesi
     Sadberk: rastık, yapma benler, dev küpeler); görgüsüz zenginlik, her şeyi parayla ölçmek;
     yelpazenin fiyatı (s. 193). Münevver'in gizli nikâh önerisi (s. 138–141) Leyla aracılığıyla yenilenir.
   Akış (doğrusal): oda, sabah (görev 0; Perihan'ın haberi, kıyafet) → serbest vakit 1 "Görücüden önce"
     (plan 'konak', hak 2; hedef büyük salon) → büyük salon, ikindi: görücü (görev 1; kahve, yelpaze,
     Leyla'nın fısıltısı) → serbest vakit 2 "Akşam ezanından önce" (hak 2; hedef yemek salonu) →
     akşam sofrası (görev 2) → yatsı, mabeyn kapısı: üç kapı (görev 3) → oda, gece (görev 4).
     Kanca kartı yola özel: "Üç kapı vardı. …"
   Üç kapı ve hazırlıkları (her biri bir vakit işi; yürümek bedava, iş 1 hak; iki vakitte 4 hak):
     Kenan (Kenan yolu; p15_yon 'suha' ise kapanır): kanıt = sahte mektubun imzası/tarihi (14. bölümde 'kanit' ise
       hazır gelir; değilse sabah babamın odasında çekmece), tanık = Madam, araç = Münevver Hanım'ın
       arabası ve Kenan'ın mektubu (akşamüstü limonlukta Leyla). Yol: 'nikah' (babanın rızası, kanıt
       ister) ya da 'gizli' (araç ister).
     Süha (Süha yolu veya karma kayıtta p15_yon 'suha'): kanıt = Süha'nın kendi eliyle yazdığı şart (odası), tanık = Madam,
       araç = Perihan'ın elindeki yelek düğmesi (akşamüstü Perihan'ın boş odası; Nazlı görür).
     Remzi (iki yolda): tanık = evinin hesabını bilen (sabah mutfakta Nimet ya da aşçı kadın),
       kanıt = Beyoğlu'ndaki ev (akşamüstü çardakta Nabi), araç = Remzi'nin sözü (bahçe kapısında
       söz düellosu). Remzi kapısı hazırlıksız da açılır (en açık kapı); hazırlık yalnız şartını belirler.
     Kenan ya da Süha kapısı hazırlıksız seçilirse kapanır (Kenan'da babanın kulağı da kapatabilir);
     ardından tek bir geri dönüş seçimi gelir (Münevver'in arabası / Remzi / bekle).
   Sözleşme bayrakları (her yolda, yatsıda tek işlevle yazılır: kapiYaz):
     p15_kapi 'kenan'|'suha'|'remzi'|'yok' · p15_hazir 0–3 (seçilen kapının tamamlanan hazırlığı;
     'yok'ta 0) · p15_baba 'ikna'|'kararsiz'|'karsi' (babanın seçilen kapıya tutumu; 'yok'ta Feride'nin
     isteğine) · p15_kenan_yol 'nikah'|'gizli'|null (kapı 'kenan' değilse null).
   Okunan sözleşme bayrakları: p12_iftira, p12_kayit, p13_resim, p13_nimet, p13_madam, p13_ret,
     p14_mektup, p14_kagit, p14_yemin, p14_sefik, p14_dayak, p14_k_defter (keşif; grup içi), p14_kenan (Kenan kartı). Önceki bölümlerden: p_rota, p5_remzi,
     p6_remzi (vals pazarlığı), p6_v_yelpaze, p6_topuk, p10_leyla, p10_sahit, p10_teslim, p11_telgraf,
     p8_prova, p8_ilk, p8_hatice (mutfak), p11_not (sahte imza kopya mı; 14. bölümle aynı kural); gönül remzi; bağ munevver; kozlar 'Madam'ın tanıklığı',
     'Yelek düğmesi'.
   Ara bayraklar (yalnız bu bölüm okur): p15_perihan, p15_k_kanit/tanik/arac, p15_s_kanit/tanik/arac,
     p15_r_tanik/kanit/arac, p15_kahve, p15_yelpaze, p15_fisilti, p15_munevver, p15_sofra, p15_v_*.
   Yeni kişiler (oyun_verisi.js'te yok; motor V.karakterler'den okur, resimsiz kişi ad harfiyle görünür):
     remzi_anne (Remzi Bey'in annesi), sadberk (Sadberk Hanım). Yeni anlar: an_yelpaze, an_uc_kapi
     (+ kıyafet çeşitleri; resim yokken "henüz çizilmedi" kartı). Resim listesi: notlar/b15_gorsel.md.
   Not: görünen metinde yalnız yeni adlar; konuşan kimlikleri (calibe, mukaddem, sai, f…) eski.
   Anlatı katmanı (T1, 17 Kasım 2026; notlar/denetim/anlati_t1_birlesik.md): açılış anlatıcı sesinde; olay
     geçişlerinde 5 ara sayfa (salon, sofra, mabeyn, "Onun gözünden", oda); kişi giriş/çıkışlarında ['an'].
     "Üç kapı" anlatısı (bedel panosu) yapısal karar bekliyor; benzetim onu arıyor, yerinde bırakıldı.
     T2 (anlati_t2_b15_16 + mercekler): "Onun gözünden" oda ara sayfasının ilk satırına alındı (4 ara sayfa);
     pano 3. kişiye çevrildi; "kanıt" yerine "delil"; gece açılışı ve kapanışı kapıya göre. Kanca metinleri
     benzetim çapası yüzünden değişmedi ('Hiçbirini açamadım', 'Birini babam açtı').
   Sürükleyicilik T1 (notlar/denetim/suruk_t1_birlesik.md): açılış yemini yola göre karşılar (gün atlaması
     takvim gereği kalır); özet iç sesler seçimden sonraya, ilk seçim 8. satırda; pano doruk sorusundan önce
     (son satırlar yüz + süre); an_uc_kapi her dalda vurucu cümleden sonra; Süha'nın fısıltısı ve Feride'nin
     cevabı; vakit bedelleri (çekmece, Nabi borcu, Sadberk) ekranda; gece: Feride Perihan'ın açık bıraktığı
     kapıyı kapar, Kenan yolunda kafesteki lamba ve sokakta fener; kartlar karar cümlesi (çapalar korunarak),
     siradaki.kanca yola göre (tehlike ağırlıklı).
   Anlatı T2b (GPT T24b okur 15, sürüm 61 → 62 üstüne): Süha'nın şartı "kabul" edildi, "ödenmedi" (satır,
     Feride'nin cevabı, kanca); hazırlıksız Süha dalında eski kayıt tanınır, geri çekilme Feride'nin gerekçesiyle;
     gece sürgüsü yalnız sürgü taktıran kızda (surguVar); Madam yalnız gördüğünü söyler (zarflı oğlan, arka kapı);
     pano satırları sadeleşti (çapalar: üç satır, "Bedeli", "Remzi:"); Remzi şartı teyit edilir (gece artçısı);
     gece cevabı "kâğıtlar yanar"ı yalnız bir dalda duyan kıza bağlanmaz.
   Diyalog T1 (notlar/denetim/diyalog_t1_birlesik.md D1–D8): Feride ifadeleri dengelendi (plan/delil gulumseyen,
     kayıp mahzun, ofkeli yalnız gerçek öfke); Süha'da "faiz" yerine kendi borç/karşılık dili ve nabız; Kenan kartı
     "siz"; babanın önünde "Kenan Bey"; nikâh Leyla'ların konağında (16 ile aynı); Madam "mektup günü, ezandan önce";
     "Susan razıdır" tekrarı Sait'in "Annen de" satırına çevrildi. Çapa korundu: açılıştaki "Süha Bey yeminini etti"
     ve sofradaki "Susan kız razı sayılır" (benzet15 arar), "birini geri yollamıştım" iç sesi.
   Oynanış T1 Aşama B (notlar/denetim/oynanis_t1_birlesik.md B1–B8; motor arayüzü oynanis_motor_arayuzu.md):
     B1 koz görünür ve tükenir: sofra/yatsıda Beyoğlu sırrı (kozGerek + kozYak), Remzi'nin sözü (Şefik şartı ve
     ayrı ev), Kenan rızalı yolunda Madam'ın tanıklığı (yeni seçim "babamın önüne"), Süha yolunda 12. bölümün
     "diz çöktüğü sabah"ı. 16. bölümün var_ ile okuduğu kozlar (düğme, imza, yazılı şart) burada yakılmaz.
     B3 gönül eksileri: yatsıda Remzi'ye evet (Kenan −5 / Süha −5), "hiçbir kapı" (Remzi −3), sofrada yemin
     sınaması (Süha −3), gece fenere cevap vermemek (Kenan −3). B4 babanın gök mavisine tepkisi. B5 ikinci keşif
     (Sadberk'in küpesi → yeni seçenek), etiket 'al' dalında da okunur, 14. bölümün p14_k_defter'i yastıktaki
     sayfada. B6 baba eşiği 60; itibar ≥55 / <45 görücüde; vakar ≥22 sofrada cesaret seçeneği ('soz', yatsıda
     okunur). B7 Kenan kapısında gece fenere kandille cevap (seçim). B8 Remzi valsi bahçe kapısında ödenir.
     Fon (gorsel_t1_fon #9a): gündüz vakitlerinde Süha'nın kapısı mabeyn kapısının gündüz resminde.
     Yeni ara bayraklar: p15_k_kupe, p15_v_koz, p15_v_fener; p15_sofra 'soz', p15_fisilti 'cam', p15_v_sart 'diz'.
   GPT T26 (Süha yolu oyuncusu, ortak/gpt_t26_suha.md 15): düğme Süha'nın öyküsünü yalnız kısmen doğrular, "kayıp"
     kâğıdı 10. bölümün tuzağını somutlar (çekmece, bin lira); Süha'nın yemini sabah ve sofrada erteleme değil küçük bir
     parça verir (dikiş kutusu; "beni bir yelek düğmesiyle tutuyor"), Perihan'ın gece sözü buna göre değişir; borç/bedel
     dili seyreldi; yatsı fısıltısı somut talep (Kenan'ın adı), Feride onu babasının önünde sesli söyler, baba kızının
     dilini korur; Madam'ı Perihan görür; pano her Süha hazırlığının neyi sağladığını söyler; Münevver'in kırgınlığı
     haber ulaşınca (gecede Leyla'nın pusulası; bağ eksisi seçimden oraya taşındı); dayak yemiş kız yatsıda babasından
     söz alır; kilitli düğmeler duyulmamış bilgiyi sızdırmaz (Madam metni nötr, Beyoğlu kilidi gizli); defter şartı ve
     Madam'ın tanıklığını hatırlar. Yeni bayrak yok.
   Tur 27 (Cemil kararı): Kenan ekrana döner: kapı 'kenan' gecesinde fenere dördüncü cevap "avlu kapısına kendin in"
     (KENAN_DONUS: Münevver'in teliyle gelen Kenan'la avlu kapısının aralığında kısa, gizli buluşma; ara bayrak
     p15_v_fener 'in', p15_v_donus el/soz). benzet15'in "Kenan sahnede yok" kuralı buna göre güncellenmeli (ortak istek).
   ========================================================================= */
window.BOLUMLER = window.BOLUMLER || {};

(function () {
  var V = window.OYUN_VERISI;
  // Bu bölümün yeni kişileri ve anları: oyun_verisi.js'e eklenene kadar burada (varsa dokunulmaz)
  var YENI_KISI = {
    remzi_anne: { ad: 'Remzi Bey\'in annesi', renk: '#c9a46a' },
    sadberk: { ad: 'Sadberk Hanım', renk: '#d98c8c' },
  };
  Object.keys(YENI_KISI).forEach(function (id) { if (!V.karakterler[id]) V.karakterler[id] = YENI_KISI[id]; });
  var YENI_AN = {
    an_yelpaze: { ad: 'Kırk liralık yelpaze', alt: 'Görücü' },
    an_uc_kapi: { ad: 'Mabeyn kapısında üç kapı', alt: 'Görücü' },
  };
  Object.keys(YENI_AN).forEach(function (id) {
    ['', '_nisan_gosterisli', '_nisan_yadigar'].forEach(function (c) {
      if (!V.cizimler[id + c]) V.cizimler[id + c] = { ad: YENI_AN[id].ad, alt: YENI_AN[id].alt };
    });
  });
  /* T27b (GPT B15-G1): an_kenan_donus resmi gorseller.js'te var, kaydı yoktu. gorseller.js pilot dosyalarından önce
     yüklendiği için bağ burada kurulur (kayıt oyun_verisi.js'e taşınınca bu satır devreden çıkar). Çeşitleri resimsiz:
     motor temel resme düşer, yer tutucu kart çıkmaz (motor.js anResmi) */
  if (!V.cizimler.an_kenan_donus) V.cizimler.an_kenan_donus = { ad: 'Avlu kapısının aralığında', alt: 'Görücü', gorsel: 'gorsel/odul/g_odul_an_kenan_donus.webp?v=1795010559' };
  ['an_kenan_donus_nisan_gosterisli', 'an_kenan_donus_nisan_yadigar'].forEach(function (id) {
    if (!V.cizimler[id]) V.cizimler[id] = { ad: 'Avlu kapısının aralığında', alt: 'Görücü' };
  });

  /* T29 (b13_16 B15 GÖRSEL-2 / ANLATI-2): elinde kâğıt olmayan kızın üç kapı anı (an_uc_kapi_bos). Resmi üretimde
     (t29_uretim_b13_16 U6). Gelene dek kayıt, temel an_uc_kapi resmini ve kıyafet çeşitlerini yedek gösterir (doruk resimsiz
     kalmaz); gorseller.js'e kendi resmi girince motor.js (cizimResimleri) onu bağlar, yedek kendiliğinden devreden çıkar */
  (function () {
    var R = V.cizimResimleri || {};
    ['', '_nisan_sade', '_nisan_gosterisli', '_nisan_yadigar', '_aksam'].forEach(function (c) {
      var id = 'an_uc_kapi_bos' + c;
      if (V.cizimler[id]) return;
      if (c === '' || R['an_uc_kapi' + c]) V.cizimler[id] = { ad: 'Mabeyn kapısında, eli boş', alt: 'Görücü', gorsel: R['an_uc_kapi' + c] || (V.cizimler.an_uc_kapi || {}).gorsel };
    });
  })();
  /* T30 (G15-2): Süha kapısında kâğıdı lambanın altına koyan kızın türü (Süha aralık kapıda); resmi üretimde, gelene dek
     an_uc_kapi ve çeşitleri yedek. T30 (S15-1): fısıltı anı an_fisilti_lamba resimsiz kayıt (motor atlar) */
  (function () {
    var R = V.cizimResimleri || {};
    ['', '_nisan_sade', '_nisan_gosterisli', '_nisan_yadigar', '_aksam'].forEach(function (c) {
      var id = 'an_uc_kapi_suha' + c;
      if (V.cizimler[id]) return;
      if (c === '' || R['an_uc_kapi' + c]) V.cizimler[id] = { ad: 'Mabeyn kapısında, Süha Bey aralıkta', alt: 'Görücü', gorsel: R['an_uc_kapi' + c] || (V.cizimler.an_uc_kapi || {}).gorsel };
    });
    ['an_fisilti_lamba', 'an_fisilti_lamba_nisan_gosterisli', 'an_fisilti_lamba_nisan_yadigar'].forEach(function (id) {
      if (!V.cizimler[id]) V.cizimler[id] = { ad: 'Lambanın gölgesinde fısıltı', alt: 'Görücü' };
    });
    ['an_kenan_donus_soz', 'an_kenan_donus_soz_nisan_gosterisli', 'an_kenan_donus_soz_nisan_yadigar'].forEach(function (id) {
      if (!V.cizimler[id]) V.cizimler[id] = { ad: 'Aralığın iki yanında söz', alt: 'Görücü' };
    });
  })();
  // Üç kapı anı: kâğıdı babanın lambası altında olan kız (delil, yazılı şart) an_uc_kapi; öbürleri an_uc_kapi_bos
  var UC_KAPI = { cizim: 'an_uc_kapi' }, UC_KAPI_BOS = { cizim: 'an_uc_kapi_bos' };

  var MADAM = 'Madam\'ın tanıklığı', DUGME = 'Yelek düğmesi', IMZA = 'Sahte mektubun imzası';
  var ARABA = 'Münevver Hanım\'ın arabası', SART = 'Süha Bey\'in yazılı şartı';
  var EV = 'Remzi Bey\'in evi', BEYOGLU = 'Beyoğlu\'ndaki ev', SOZ = 'Remzi Bey\'in sözü';
  var DIZ = 'Süha Bey\'in diz çöktüğü sabah'; // 12. bölüm kozu (16. bölüm var_ ile okumaz; burada harcanabilir)
  var b = function (S) { return S.bayrak; };
  var muk = function (S) { return S.bayrak.p_rota === 'mukaddem' && S.bayrak.p15_yon !== 'suha'; };
  var var_ = function (S, k) { return (S.kozlar || []).indexOf(k) >= 0; };
  var sefikYanimda = function (S) { return b(S).p14_sefik === 'yanimda'; };
  var nimetVar = function (S) { return b(S).p13_nimet === 'kaldi'; };
  var madamDost = function (S) { return b(S).p13_madam === true; };
  var leylaAcik = function (S) { return b(S).p10_leyla === 'acik'; };
  var remziAcik = function (S) { return b(S).p10_sahit === 'remzi' && b(S).p10_teslim !== 'gizli'; };
  // 9–11. bölümle aynı kural: provası açılan Perihan mutfağı kilitli tutar; sözü bozulan Hatice kapısını kapar
  var dinlendi = function (S) { return b(S).p8_prova === 'acik' || b(S).p8_prova === 'yalniz' || b(S).p8_ilk === 'ezber'; };
  var mutfakKapali = function (S) { return dinlendi(S) || b(S).p8_hatice === 'bozdu'; };
  var meydan = function (S) { return b(S).p15_perihan === 'meydan'; };
  var kahve = function (S) { return b(S).p15_perihan === 'kahve'; };
  // 5. bölümde eczacının defteri karşılığı vals ("nişan bozulursa"); 6. bölümde faizi bir vals, ikincisi nişan bozulunca
  var valsBorcu = function (S) { return b(S).p5_remzi === 'defter'; };
  var remziIlgili = function (S) { return (S.gonul.remzi || 0) >= 50; };
  var anneKizdi = function (S) { return b(S).p15_kahve === 'sadberk' || b(S).p15_yelpaze === 'fiyat'; };
  // 11. bölüm: Perihan "—K" imzasını gördüyse sahte imza kusursuz kopya (14. bölümle aynı kural); fark imlada
  var imzaTaklit = function (S) { return !!b(S).p11_not; };
  // 6–7. bölüm: kendi kapısına taktırdığı iç sürgü (11–14. bölümle aynı kural)
  var surguVar = function (S) { return b(S).p6_karar === 'surgu' || b(S).p7_kapi === 'surgu'; };
  /* T30 (A15-2): Süha'ya söylenmiş açık retler (pilot14 suhaRet ile aynı bayraklar) */
  var suhaRet = function (S) { var f = b(S); return !!f.p1_suha_sinir || !!f.p2_suha_sinir || f.p2_hitap === 'sinir' || f.p2_kutu === 'iade' ||
    f.p3_v_bahce === 'ret' || f.p3_aksam === 'gitti' || f.p4_bedel === 'ret' || f.p4_suha === 'ret' || f.p4_suha_pakt === 'ret' ||
    f.p12_son === 'riza' || f.p13_ilk === 'hicbir' || f.p13_suha === 'ret' || f.p13_suha === 'igne' ||
    f.p13_v_suha === 'esik' || f.p13_dert === 'korkma' || f.p13_gece === 'cek' || f.p13_ret === 'acik'; };
  // T29c (GPT A15-1): 14'te gök mavisinin astarına saklanan kâğıt, aynı elbise giyildiyse Feride'nin üstünde
  var astarUstumde = function (S) { return b(S).p14_gece === 'sakla' && S.giyili === 'nisan_yadigar'; };

  // Hazırlıklar (kanıt, tanık, araç)
  var K_KANIT = function (S) { return b(S).p14_mektup === 'kanit' || !!b(S).p15_k_kanit; };
  var K_TANIK = function (S) { return !!b(S).p15_k_tanik; };
  var K_ARAC = function (S) { return !!b(S).p15_k_arac; };
  var S_KANIT = function (S) { return !!b(S).p15_s_kanit; };
  /* T30 (O15-3): aralık kapı yarım tanıklık; hazırlık sayılan yalnız mabeyn kapısında duran Madam */
  var S_TANIK = function (S) { return b(S).p15_s_tanik === 'madam'; };
  var S_ARAC = function (S) { return !!b(S).p15_s_arac; };
  var R_TANIK = function (S) { return !!b(S).p15_r_tanik; };
  // T28b (GPT O15-2): söylenti ('sor') delil hazırlığı değil
  var R_KANIT = function (S) { return !!b(S).p15_r_kanit && b(S).p15_r_kanit !== 'sor'; };
  var R_ARAC = function (S) { return ['sart', 'vals', 'yelpaze'].indexOf(b(S).p15_r_arac) >= 0; };
  var HAZIRLIK = {
    kenan: [[K_KANIT, 'delil'], [K_TANIK, 'Madam'], [K_ARAC, 'araba']],
    suha: [[S_KANIT, 'yazılı şart'], [S_TANIK, 'tanık'], [S_ARAC, 'düğme']],
    remzi: [[R_KANIT, 'Beyoğlu sırrı'], [R_TANIK, 'evinin hesabı'], [R_ARAC, 'sözü']],
  };
  /* T28: üç kapı anlatısı akıcı cümle (anlatı satırı ≤15 kelime); hazırlık sayısı sözle */
  var GETIRDI = ['hiçbirini getirmemişti', 'birini getirmişti', 'ikisini getirmişti', 'üçünü de getirmişti'];
  var HAZIRLADI = ['hiçbir hazırlık yapmamıştı', 'tek hazırlık yapmıştı', 'iki hazırlık yapmıştı', 'üç hazırlığı tamamlamıştı'];
  /* T32 (b13_16 B15 DİYALOG-1): pano sayı okumaz; elde olan ve olmayan nesneler adıyla (her satır ≤15 kelime) */
  var PANO_AD = { kenan: ['delil', 'Madam\'ın sözü', 'araba'], suha: ['yazılı şart', 'tanık', 'düğme'] };
  var veBagla = function (l) { return l.length === 1 ? l[0] : l.slice(0, -1).join(', ') + ' ve ' + l[l.length - 1]; };
  var panoElde = function (S, kapi) {
    var var1 = [], yok = [];
    HAZIRLIK[kapi].forEach(function (h, i) { (h[0](S) ? var1 : yok).push(PANO_AD[kapi][i]); });
    if (!var1.length) return 'yalnız sözü vardı';
    return veBagla(var1) + ' vardı' + (yok.length ? '; ' + veBagla(yok) + ' yoktu' : '');
  };
  var REMZI_TANI = ['hiç tanımıyordu', 'biraz tanıyordu', 'epey tanıyordu', 'içinden biliyordu'];
  var hazirSay = function (S, kapi) { return HAZIRLIK[kapi].filter(function (h) { return h[0](S); }).length; };
  var hazirMetin = function (S, kapi) {
    var l = HAZIRLIK[kapi].filter(function (h) { return h[0](S); }).map(function (h) { return h[1]; });
    if (!l.length) return 'elde henüz bir şey yok';
    return (l.length === 1 ? l[0] : l.slice(0, -1).join(', ') + ' ve ' + l[l.length - 1]) + ' hazır';
  };
  // Oynanış T1 B6 (ekonomi D6): baba eşiği 50'den 60'a; rastgele oyuncunun ~%90'ı değil, babayı besleyen geçer
  var bg = function (S) { return (S.v.baba_guven || 0) >= 60; };
  // B6: itibar görücüde okunur (≥55 övgü, <45 sitem); vakar ≥22 sofrada cesaret seçeneğini açar
  var itibar = function (S) { return S.v.itibar || 0; };
  var cesur = function (S) { return (S.v.vakar || 0) >= 22; };
  // Babanın kulağı (rızayla nikâh): kanıt 2, tanık 1, güven 1; tutan iftira, inanılan mektup ve görülen selamlık birer eksi
  var nikahPuan = function (S) {
    var f = S.bayrak;
    /* T27b (GPT B15-O1): hazırlanmış tanık değil, babanın önünde gerçekten kullanılan tanıklık (Madam konuştu ya da
       imzalı kâğıdı verildi) hükme girer; hüküm delil menüsünden sonra hesaplanır (NIKAH_SONUC) */
    return (K_KANIT(S) ? 2 : 0) + (f.p15_k_kanit === 'aldi' ? 1 : 0) + ((f.p15_v_koz === 'madam' || f.p15_v_koz === 'yazi') ? 1 : 0) + (bg(S) ? 1 : 0) +
      (f.p15_sofra === 'kagit' ? 1 : 0) + (f.p14_baba_delil === true ? 1 : 0) - (f.p12_iftira === 'tuttu' ? 1 : 0) - (f.p14_mektup === 'inandi' ? 1 : 0) -
      (f.p15_v_selamlik === 'goruldu' ? 1 : 0);
  };
  // Süha kapısı: babam 12. bölümde "Süha'ya varacaksın" demişti (+1); sofrada "vazgeçmeye" yemini duyduysa −2
  var suhaPuan = function (S) {
    var f = S.bayrak;
    return hazirSay(S, 'suha') + (f.p12_nikah_ertelendi ? 0 : 1) + (bg(S) ? 1 : 0) - (f.p15_sofra === 'yemin' && f.p14_yemin === 'vazgec' ? 2 : 0);
  };
  function nikahDene(S) {
    if (!K_KANIT(S)) { S.bayrak.p15_v_nikah = 'yok'; return; }
    var p = nikahPuan(S);
    S.bayrak.p15_v_nikah = p >= 3 ? 'ikna' : (p >= 1 ? 'kararsiz' : 'red');
  }
  // Sözleşme bayrakları tek yerden yazılır
  function kapiYaz(S, kapi, yol) {
    var f = S.bayrak, baba;
    if (kapi === 'kenan' && yol === 'nikah') baba = f.p15_v_nikah === 'ikna' ? 'ikna' : 'kararsiz';
    else if (kapi === 'kenan') baba = (f.p15_v_nikah === 'red' || f.p12_iftira === 'tuttu' || f.p14_mektup === 'inandi' || !K_KANIT(S)) ? 'karsi' : 'kararsiz';
    else if (kapi === 'suha') { var p = suhaPuan(S); baba = p >= 3 ? 'ikna' : (p >= 1 ? 'kararsiz' : 'karsi'); }
    else if (kapi === 'remzi') baba = (anneKizdi(S) || f.p15_sofra === 'beyoglu') ? 'kararsiz' : 'ikna';
    else baba = (f.p15_v_nikah === 'red' || !bg(S)) ? 'karsi' : 'kararsiz';
    f.p15_kapi = kapi;
    f.p15_hazir = kapi === 'yok' ? 0 : hazirSay(S, kapi);
    f.p15_baba = baba;
    f.p15_kenan_yol = kapi === 'kenan' ? yol : null;
  }
  var yaz = function (kapi, yol) { return { islev: function (S) { kapiYaz(S, kapi, yol); } }; };
  var kapi = function (S) { return S.bayrak.p15_kapi; };

  /* ---- Ortak vakit işleri ---- */
  // Remzi · tanık: evinin hesabını bilen (sabah mutfak). Nimet 13. bölümde kaldıysa kendisi anlatır.
  var MUTFAK = { kisi: 'asci', eylem: 'konuş', kosul: function (S) { return !mutfakKapali(S) || kahve(S); },
    ipucu: 'Görücülerin arabacısı erken gelmiş, Remzi Bey\'in evini bilen var. (Remzi · tanık) Bedeli yok, yalnız vakit.',
    adimlar: [
      'Mutfakta görücü kahvesi ocakta. Arabacı kapıda sigara sarıyor.',
      { eger: nimetVar, ise: [
        { goster: ['mehves', 'notr'] },
        ['mehves', 'Arabacıları teyzemin oğlu. O konağı içinden bilir.', 'notr'],
        ['mehves', 'Kaynana ekmeği tartıyla verir. Oğlu eve sabaha karşı gelir.', 'endiseli'],
      ], degilse: [
        ['an', 'Nimet kovulduğundan beri mutfağın dili aşçı kadındı. Ocakta duyulan, akşama dek konağı dolaşırdı.'],
        ['asci', 'Arabacı anlattı: kaynana ekmeği tartıyla verirmiş.'],
        ['asci', 'Oğlu da eve sabaha karşı gelirmiş.'],
        ['ic', 'Nimet olsaydı bunu ben sormadan söylerdi.', 'mahzun'],
      ] },
      'Hanımın kahvesi şekersizmiş. Tatlıyı israf sayarmış.',
      { soru: 'Bildiğini kime söyleyecek?', secim: [
        { m: '“Bunu yatsıda babama da söyler misin?”', bayrak: { p15_r_tanik: 'baba' }, iz: 'Remzi\'nin evini bilen biri babana da söyleyecek.', adimlar: [
          { eger: nimetVar, ise: [
            /* T32 (b13_16 O5): tanıkların ortak "Söylerim." açılışı kalktı */
            ['mehves', 'Beni bu konakta siz tuttunuz hanımcığım. Efendinin önünde de söylerim.', 'kararli'],
            { koz: EV, kaynak: 'Nimet söyledi; babama da söyleyecek', alt: 'Kaynana ekmeği tartıyla verir; Remzi Bey eve sabaha karşı gelir.' },
          ], degilse: [
            ['asci', 'Efendinin önüne çıkamam. Arabacıya söyletirim.'],
            { koz: EV, kaynak: 'Aşçı kadın söyledi; arabacı babama da söyleyecek', alt: 'Kaynana ekmeği tartıyla verir; Remzi Bey eve sabaha karşı gelir.' },
          ] },
        ] },
        { m: '“Kimseye söyleme. Ben bileyim yeter.”', bayrak: { p15_r_tanik: 'ben' }, adimlar: [
          { eger: nimetVar, ise: [
            { koz: EV, kaynak: 'Nimet söyledi', alt: 'Kaynana ekmeği tartıyla verir; Remzi Bey eve sabaha karşı gelir.' },
          ], degilse: [
            { koz: EV, kaynak: 'Aşçı kadın söyledi', alt: 'Kaynana ekmeği tartıyla verir; Remzi Bey eve sabaha karşı gelir.' },
          ] },
        ] },
      ] },
    ], bos: 'Mutfakta kazanlar kaynıyor, kimse başını kaldırmadı.' };

  // Remzi · kanıt: Beyoğlu'ndaki ev (akşamüstü çardak, Nabi)
  var CARDAK = { kisi: 'nabi', ifade: 'notr', eylem: 'konuş',
    ipucu: 'Nabi Bey çardakta, Remzi Bey\'in bir sırrını satıyor. (Remzi · delil) Bedeli: Nabi\'ye borçlu kalmak.',
    adimlar: [
      ['an', 'Nabi Bey çardağa çekilmişti.'],
      ['nabi', 'Remzi\'nin görücüsü mü geldi? Ben onun bir sırrını bilirim.', 'sinsi'],
      ['nabi', 'Beyoğlu\'nda bir evi var, perdeleri hep kapalı.', 'notr'],
      /* T27b (GPT B16-A1): Remzi sonundaki Beyrut alacaklısına önceden küçük iz; sahibi ve Behiye bağı finalde açılır */
      ['nabi', 'Beyrut’tan gelen senedi sorun. Bakın nasıl susar. Benden duymadınız ha!', 'notr'],
      /* T32 (b13_16 DİYALOG): karakter ağzında oyun sözcüğü ("bedel") yok */
      { soru: 'Nabi Bey sırrının karşılığını bekliyor.', secim: [
        { m: '“Kimin evi? Karşılığında ne istiyorsunuz Nabi Bey?”', bayrak: { p15_r_kanit: 'borc' }, iz: 'Remzi\'nin Beyoğlu sırrı sende. Nabi\'ye bir borcun var.', adimlar: [
          ['nabi', 'Bir kadının. Karşılığında beni bu çardakta hiç görmediniz.', 'endiseli'],
          { koz: BEYOGLU, kaynak: 'Nabi söyledi; karşılığında susacağım', alt: 'Remzi Bey Beyoğlu\'nda bir kadına ev tutmuş; perdeleri hep kapalı.' },
        ] },
        /* 6. bölüm: topuğu alnına inen Nabi */
        { m: '“Alnınızdaki iz geçti mi Nabi Bey?”', kosul: function (S) { return b(S).p6_topuk === 'alin'; }, etki: { vakar: 1 }, bayrak: { p15_r_kanit: 'topuk' }, adimlar: [
          { goster: ['nabi', 'korkmus'] },
          ['nabi', 'Geçmedi. Söylerim, yeter ki o ayakkabıyı giymeyin: bir kadının evi.', 'korkmus'],
          { koz: BEYOGLU, kaynak: 'Nabi söyledi; topuktan korktu', alt: 'Remzi Bey Beyoğlu\'nda bir kadına ev tutmuş; perdeleri hep kapalı.' },
        ] },
        /* T28b (GPT O15-2; kök bulgu 3/4): söylentiyi reddeden kız yalnız söylentiyi bilir (kimin evi bilinmez); bu
           hazırlık sayılmaz (R_KANIT), sofrada ve yatsıda delil diye açılmaz. Remzi'ye kendisi sorar (16. bölümün
           nikâh masası); Nabi'ye borçlanmak daha çok somut bilgi verir */
        { m: '“Söylemeyin. Remzi Bey\'e kendim sorarım.”', bayrak: { p15_r_kanit: 'sor' }, adimlar: [
          ['nabi', 'Sorun. “Beyoğlu” deyin, yüzüne bakın.', 'notr'],
          { koz: BEYOGLU, kaynak: 'Söylenti; Nabi kimin evi olduğunu söylemedi', alt: 'Remzi Bey\'in Beyoğlu\'nda perdeleri hep kapalı bir evi varmış. Kimin, bilinmiyor.' },
        ] },
      ] },
    ], bos: 'Çardak boş, asmanın altında bir küllük.' };

  // Remzi · araç: bahçe kapısında söz düellosu (Remzi'nin kendi oynanışı)
  var BAHCE = { kisi: 'remzi', ifade: 'notr', eylem: 'söz düellosu',
    ipucu: 'Remzi Bey bahçe kapısında annesini bekliyor. Şartımı ona sözle kabul ettirebilirim. (Remzi · araç) Bedeli: yengesi arabadan görür.',
    adimlar: [
      ['an', 'Remzi Bey annesini uğurlamak için selamlıktan bahçe kapısına inmişti. Feride\'yi görünce arabanın yanından ayrıldı.'],
      { eger: anneKizdi, ise: [
        /* T28b (GPT D15-1): anne denetim, Sadberk teşhir; Remzi'nin sesi gösteriş ve kibir (fiyat lafı seyreldi) */
        ['remzi', 'Annem sözünüzü kesememiş. Ben denemem bile, ne istediğinizi söyleyin.', 'notr'],
      ], degilse: [
        ['remzi', 'Annem sizi beğendi. Pazarlık bile etmedi.', 'gulumser'],
      ] },
      /* Gönül: Remzi'nin ilgisi */
      { eger: remziIlgili, ise: [
        ['remzi', 'İki haftadır bu kapının önünden geçiyorum. Atım yolu ezberledi.', 'mahcup'],
      ], degilse: [
        ['remzi', 'Fiyatınızı ben mi biçeyim, siz mi söylersiniz?', 'gulumser'],
      ] },
      { soru: 'Remzi Bey kırbacıyla çizmesine vuruyor.', secim: [
        { m: '“Fiyatımı siz kesemezsiniz. Şartımı dinlersiniz.”', etki: { remzi: 3 }, bayrak: { p15_r_arac: 'sart' }, iz: 'Remzi bir şartını dinlemeye söz verdi.', adimlar: [
          ['remzi', 'Dinlerim. Annemin yanında söylenmeyen şartı şimdi söyleyin.', 'notr'],
          { koz: SOZ, kaynak: 'Bahçe kapısında kendi ağzıyla', alt: 'Remzi Bey: “Şartınızı dinlerim.”' },
        ] },
        /* 5–6. bölüm: valsin "nişan bozulursa" koşulu; nişan bozuldu, vade geldi */
        /* Oynanış T1 B8: 5–6. bölümün vals borcu burada dansla ödenir (Madam'ın piyanosu salondan; an_vals görsel listesinde) */
        { m: '“Valsinizin vadesi geldi, nişanım bozuldu. Faizini ben söylerim.”', kosul: valsBorcu, etki: { remzi: 5 }, bayrak: { p15_r_arac: 'vals' }, iz: 'Vals borcu ödendi. Faizini, yani şartını sen söyleyeceksin.', adimlar: [
          { eger: function (S) { return b(S).p6_remzi === 'defter'; }, ise: [
            ['remzi', 'İkinci valsin vadesi, doğru. Önce borcu ödeyelim, faizini siz söylersiniz.', 'gulumser'],
          ], degilse: [
            ['remzi', 'Valsim vadesinde. Önce borcu ödeyelim, faizini siz söylersiniz.', 'gulumser'],
          ] },
          { muzik: 'vals' },
          ['an', 'Salondan Madam\'ın piyanosu duyuluyordu. Remzi Bey eldivenli elini uzattı, çakılda üç tur döndüler.'],
          { koz: SOZ, kaynak: 'Bahçe kapısında, valsin sonunda kendi ağzıyla', alt: 'Remzi Bey: “Faizini siz söyleyin; ben öderim.”' },
          /* T27 (SES): gündüz vaktinde ORTAM 'gece' çalmasın; ev teması */
          /* T30 (SE15-2): valsin bitişi duyulur */
          { muzik: null },
          ['an', 'Piyano sustu, Remzi Bey eldivenini çıkarmadı.'],
        ] },
        /* 6. bölüm: Remzi'nin yollattığı yelpazeyi alan kız */
        { m: '“Bir yelpazenizi zaten aldım. Bu kez şartımı alın.”', kosul: function (S) { return b(S).p6_v_yelpaze === 'al'; }, etki: { remzi: 4 }, bayrak: { p15_r_arac: 'yelpaze' }, adimlar: [
          ['remzi', 'Yelpaze satın alınır, şart alınmaz. Ben de alınmayanı istiyorum.', 'kararli'],
          { koz: SOZ, kaynak: 'Bahçe kapısında kendi ağzıyla', alt: 'Remzi Bey: “Şartınızı isterim.”' },
        ] },
        { m: '“Bir şey istemem. Ucuz kız arıyorsanız başka kapı çalın.”', etki: { remzi: 4, vakar: 1 }, bayrak: { p15_r_arac: 'yok' }, iz: 'Remzi\'den söz almadın. O da pahalı kızdan vazgeçmedi.', adimlar: [
          /* T32 (ifade envanteri 2e-64): fiyat biçme; gülüş satırın keskinliğini siliyordu */
          ['remzi', 'Kolay razı olacak birini aramıyordum. Yanlış kapıya gelmemişim.', 'kararli'],
        ] },
      ] },
      { etki: { itibar: -1 } },
      ['an', 'Arabanın perdesi aralandı. Sadberk Hanım gördüğünü saklayacak kadınlardan değildi.'],
    ], bos: 'Bahçe kapısı kapalı. Yolda tozu kalkmış bir araba izi.' };

  /* ---- Kenan yolunun işleri ---- */
  // Kenan · kanıt: babamın çekmecesindeki sahte mektup (14. bölümde kanıt elde edilmediyse)
  var BABA_ODA = { eylem: 'çekmeceye bak', kosul: function (S) { return b(S).p14_mektup !== 'kanit'; },
    ipucu: 'Babam çarşıda, Kenan\'ın eski mektupları çekmecesinde. (Kenan · delil) Bedeli: odasına girdiğim belli olabilir.',
    adimlar: [
      'Babamın odası boş, çekmece kilitsiz.',
      /* 14. bölüm: sahte kâğıt ya Feride'de ya yandı; çekmecede yalnız Kenan'ın gerçek mektupları */
      /* T29c (GPT A15-1): astardaki kâğıdın yeri giyilen elbiseye göre */
      { eger: function (S) { return b(S).p14_kagit === true && astarUstumde(S); }, ise: [
        'Sahte kâğıt üstümdeki mavi ipeklinin astarında. Burada yalnız Kenan\'ın eski mektupları var.',
      ], degilse: [{ eger: function (S) { return b(S).p14_kagit === true; }, ise: [
        'Sahte kâğıt sandığımda, annemin ipeklisinin katında. Burada yalnız Kenan\'ın eski mektupları var.',
      ], degilse: [
        'Sahte kâğıt yandı. Çekmecede yalnız Kenan\'ın eski mektupları duruyor.',
      ] }] },
      /* T28 (b13_16 ana bulgu 1): iz dönem içi; Kenan'ın gerçek mektuplarında saat hep ezandan (alaturka) */
      { eger: imzaTaklit, ise: [
        ['ic', 'Sahtedeki “—K.” tıpkı onunki, ama Kenan saati hep ezandan sayar: “yatsıdan iki saat sonra.”', 'kararli'],
      ], degilse: [
        ['ic', 'Kenan hep “—K.” diye imzalar, sahtede adı uzun uzun yazılıydı.', 'mahzun'],
      ] },
      /* T28 (b13_16 OYNANIŞ): tarih çıkarımı vapur süresiyle sağlamlaşır */
      ['ic', 'Selanik teli mektuptan bir gün önce çekilmiş. Vapur bir buçuk gün, Kenan o gece gelemezdi.', 'kararli'], // T30 (A15-1): Kenan'ın gelişiyle aynı takvim
      { soru: 'Delil önümde.', secim: [
        { m: 'Kenan\'ın mektuplarını al. Babama ben sunarım.', bayrak: { p15_k_kanit: 'aldi' }, iz: 'Delil elinde. Ama babam çekmecesinin boşaldığını görecek.', adimlar: [
          { efekt: 'kagit' },
          { koz: IMZA, kaynak: 'Babamın çekmecesinden aldım; elimde', alt: 'Kenan “—K.” diye imzalar, saati ezandan sayar; sahte kâğıt alafranga “gece saat on iki” diyor. O gün Kenan Selanik\'teydi.' },
        ] },
        { m: 'Dokunma. Onun elini ve imlasını ezberle.', bayrak: { p15_k_kanit: 'ezber' }, iz: 'Delil ezberinde. Mektuplar babamın çekmecesinde kaldı.', adimlar: [
          { koz: IMZA, kaynak: 'Babamın çekmecesinde kendim gördüm', alt: 'Kenan “—K.” diye imzalar, saati ezandan sayar; sahte kâğıt alafranga “gece saat on iki” diyor. O gün Kenan Selanik\'teydi.' },
        ] },
      ] },
    ], bos: 'Babamın odası boş.' };

  // Kenan · tanık: Madam
  var MADAM_K = { kisi: 'josephine', ifade: 'notr', eylem: 'konuş',
    ipucu: 'Madam sahte mektubun geldiği günü bilir. (Kenan · tanık) Bedeli: Perihan Madam\'ı evden atabilir.',
    adimlar: [
      ['an', 'Madam Josephine piyanonun kapağını kapadı. Konuşmadan önce hep kapıya bakardı.'],
      { eger: madamDost, ise: [
        ['josephine', 'Sizin tarafınızdayım. Bunu Perihan Hanım da biliyor.', 'kararli'],
      ], degilse: [
        /* 13. bölüm: "Siz karışmayın Madam" diyerek korunan Madam; bağ durur, korku ayrı */
        ['josephine', 'Beni korumak istediniz, je sais. Ama burada konuşanı kapı dışarı ederler.', 'mahzun'],
      ] },
      /* T27 (DİYALOG): Madam'ın kırık Türkçesi; bilgi aynı (zarflı oğlan, arka kapı, avluya uğramadı) */
      ['josephine', 'Mektup günü, ezandan önce, arabacının oğlu arka kapıdaydı. Elinde zarf vardı, avluya hiç uğramadı.', 'notr'],
      { soru: 'Madam ellerini ovuşturuyor.', secim: [
        { m: '“Yatsıda babamın önünde söyleyin Madam.”', etki: { josephine: 1 }, bayrak: { p15_k_tanik: 'agiz' }, iz: 'Madam babanın önünde konuşacak. Perihan Hanım duyarsa Madam\'ın konaktaki yeri tehlikeye girecek.', adimlar: [
          /* T32 (b13_16 O5): "Kovarlarsa…" kalıbı üç bölümde tekrar ediyordu */
          ['josephine', 'Yatsıda mı? Dizlerim titrer… dilim titremez.', 'kararli'],
          { eger: function (S) { return var_(S, MADAM); }, ise: [
            { kozKaynak: [MADAM, 'Madam babamın önünde de söyleyecek'] },
          ], degilse: [
            { koz: MADAM, kaynak: 'Madam babamın önünde söyleyecek', alt: 'Madam: mektup gelmeden Perihan Hanım\'ın arabacısının oğlu elinde bir zarfla arka kapıdaydı; avlu kapısına hiç uğramadı.' },
          ] },
        ] },
        { m: '“Yazıp imzalayın, ben babama veririm.”', /* T29c (GPT O15-1): hüküm hesabında sözlü ve yazılı tanıklık eşit (+1); bildirim "zayıf" demez, gerçek farkı söyler */
        bayrak: { p15_k_tanik: 'yazi' }, iz: 'Madam yazıp imzaladı. Kâğıdı babana sen götüreceksin, Madam bu gece onun karşısına çıkmayacak.', adimlar: [
          ['josephine', 'Yazarım. Türkçem kötü, imzam iyidir.', 'ana'],
          { eger: function (S) { return var_(S, MADAM); }, ise: [
            { kozKaynak: [MADAM, 'Madam yazıp imzaladı'] },
          ], degilse: [
            { koz: MADAM, kaynak: 'Madam yazıp imzaladı', alt: 'Madam: mektup gelmeden Perihan Hanım\'ın arabacısının oğlu elinde bir zarfla arka kapıdaydı; avlu kapısına hiç uğramadı.' },
          ] },
        ] },
      ] },
    ], bos: 'Madam piyanonun başında, başını kaldırmadı.' };

  // Kenan · araç: Münevver Hanım'ın arabası ve Kenan'ın mektubu (Leyla, limonluk)
  /* Doğrulama v65 (b13–16 #1): 14. bölümün şafak kararı (p14_kenan) önce okunur; "yaz" dalında 14'ün
     Selanik sayfasının "ilk kez yoldayım" vaadi karşılanır. "Sessizliğinizi de okudum" 12. bölümün kartıydı. */
  /* T29 (b13_16 B15 ANLATI-1, zaman çizelgesi): Selanik vapuru iki gün; dün sabah yazılan satıra ya da görücü haberine
     mektupla cevap yetişmez. Münevver Hanım'ın teline Kenan telle cevap verdi (kart başlığı benzet15 çapası "—K.") */
  var KENAN_KART = { eger: function (S) { return b(S).p14_kenan === 'yaz'; }, ise: [
    { kart: '—K.', alt: 'Selanik\'ten tel: “Duydum, inanmadığınızı biliyordum. Yoldayım.”' },
  ], degilse: [{ eger: function (S) { return b(S).p11_telgraf === 'bekle'; }, ise: [
    { kart: '—K.', alt: 'Selanik\'ten tel: “‘Bekliyorum’ demiştiniz, ben de bekledim. Yoldayım.”' },
  ], degilse: [{ eger: function (S) { return b(S).p11_telgraf === 'sefik'; }, ise: [
    { kart: '—K.', alt: 'Selanik\'ten tel: “Şefik\'in ezberine bir satır: geliyorum, siz isterseniz.”' },
  ], degilse: [{ eger: function (S) { return b(S).p10_son === 'ayri'; }, ise: [
    /* T29b (10'un sözsüz, mektupsuz vedası, p10_son 'ayri'): Kenan söz ve mektup varsaymaz; yalnız görücü haberiyle gelir */
    { kart: '—K.', alt: 'Selanik\'ten tel: “Söz istemediniz, söz vermeden geliyorum. Görücüyü annemden duydum.”' },
  ], degilse: [
    { kart: '—K.', alt: 'Selanik\'ten tel: “Cevap gelmedi, yine de yoldayım. Bir işaret verin.”' },
  ] }] }] }] };
  var LIMONLUK = { kisi: 'fevkiye', ifade: 'ana', eylem: 'konuş',
    ipucu: 'Leyla Münevver Hanım\'ın haberini ve Kenan\'ın telini getirdi. (Kenan · araç) Bedeli: babamın rızası olmadan çıkılan bir yol.',
    adimlar: [
      ['an', 'Leyla limonluğun saksıları arasına sinmişti. Görücü telaşında kimse limonluğa bakmıyordu.'],
      /* 10. bölüm: Leyla'yla haberleşmesi açığa çıkan kız */
      { eger: leylaAcik, ise: [
        ['fevkiye', 'Çabuk ol, Perihan Hanım beni gözünden kaçırmıyor.', 'endiseli'],
      ], degilse: [
        ['fevkiye', 'Kimse görmedi. Annem görücülerin arabasını seyrediyor.', 'notr'],
      ] },
      /* T27 (DİYALOG): Leyla haberci değil, kendi sesiyle */
      ['fevkiye', 'Bil bakalım sabah namazında avlu kapısında ne bekleyecek? Münevver Hanım\'ın arabası!', 'gulumser'],
      /* T28 (b13_16 ANLATI 10'a 2): gizli yolun meşruluğu (Hanefî fıkhında ergin kız velisiz nikâhlanabilir) */
      /* T29 (b13_16 B15 DİYALOG-1): "ergin" dönem dışı öztürkçe */
      ['fevkiye', 'İmam bile hazır! Kızın rızası yetermiş. Tıpkı romanlardaki gibi!', 'gulumser'], // T30 (D15-2), T33
      /* 10. bölüm: iskelede Münevver Hanım'a sarılan kız */
      { eger: function (S) { return b(S).p10_munevver === 'saril'; }, ise: [
        ['fevkiye', 'İskelede sarıldığın günü yazmış. “Kızım” demiş, altını çizmiş.', 'notr'],
      ] },
      KENAN_KART,
      /* 13. bölüm: nişan resmi */
      { eger: function (S) { return b(S).p13_resim === 'yak'; }, ise: [
        ['ic', 'Resmini yakmıştım. Sözü şimdi avucumda.', 'mahzun'],
      ], degilse: [{ eger: function (S) { return b(S).p13_resim === 'sakla'; }, ise: [
        /* T27b (GPT B15-A2): tahta altı / sandık / koyun ayrımı yeniden kurulmaz; yer söylenmez */
        ['ic', 'Resmini sakladım, sözü avucumda.', 'utanmis'],
      ], degilse: [
        ['ic', 'Resmini emanete vermiştim. Telini kimseye vermem.', 'tebessum'],
      ] }] },
      { soru: 'Leyla bir saksının arkasına çömeldi.', secim: [
        { m: '“Arabayı hazır tutsun. Gerekirse binerim.”', bayrak: { p15_k_arac: 'hazir' }, iz: 'Münevver Hanım\'ın arabası sabah avluda bekleyecek.', adimlar: [
          /* T29b (p10_son 'ayri'): iskelede söz istenmediyse Kenan bir cevap beklemiyordu */
          { eger: function (S) { return b(S).p10_son === 'ayri'; }, ise: [
            ['fevkiye', 'Haber bu akşam uçar! İskelede söz istememişsin, bu cevabı o da beklemiyordu.', 'gulumser'],
          ], degilse: [
            ['fevkiye', 'Bu akşam Münevver Hanım\'a ulaşır! Kenan bu cevabı Selanik\'ten beri bekliyor.', 'gulumser'],
          ] },
          { koz: ARABA, kaynak: 'Leyla getirdi', alt: 'Sabah namazında avlu kapısında Münevver Hanım\'ın arabası; nikâh Leyla\'ların konağında.' },
        ] },
        { m: '“Önce babamı deneyeceğim. Araba yedekte dursun.”', bayrak: { p15_k_arac: 'yedek' }, iz: 'Araba yedekte. Önce babanı deneyeceksin.', adimlar: [
          ['fevkiye', 'Dursun. Ama sabah namazından sonra beklemez.', 'endiseli'],
          { koz: ARABA, kaynak: 'Leyla getirdi; yedekte', alt: 'Sabah namazında avlu kapısında Münevver Hanım\'ın arabası; nikâh Leyla\'ların konağında.' },
        ] },
      ] },
    ], bos: 'Limonlukta kimse yok, saksılar sulanmış.' };

  /* ---- Süha yolunun işleri ---- */
  // Süha · kanıt: kendi eliyle yazılı şart (14. bölümün yemini sınanır)
  var SUHA_ODA = { kisi: 'suha', ifade: 'notr', eylem: 'şartı yazdır',
    ipucu: 'Süha Bey odasında. Şartımı kendi eliyle yazsın. (Süha · delil) Bedeli: kâğıt Perihan Hanım\'ın eline geçerse ikimizi de yakar.',
    adimlar: [
      'Süha Bey\'in kapısını tıklattım, eşikten adım atmadım.',
      { eger: function (S) { return b(S).p14_yemin === 'vazgec'; }, ise: [
        /* T32 (ifade envanteri 2c-46): Süha'nın nadir zayıf anı */
        ['suha', 'Sizden vazgeçmeye yemin ettim. Kapımı çalınca yemin titriyor.', 'mahzun'],
      ], degilse: [{ eger: function (S) { return b(S).p14_yemin === 'perihan'; }, ise: [
        /* GPT T26 (öncelik 3): erteleme yerine küçük, geri alınamaz bir parça; vakit 2'deki dikiş kutusuna bağlanır */
        ['suha', 'Yeminim Perihan\'ı babanıza açmaktı. İlk parçası sizin: düğmem onun dikiş kutusunda.', 'notr'],
      ], degilse: [
        ['suha', 'Şefik için yemin ettim, tuttum. Tek isteğim şu: evetinizi babanızın önünde yüzüme söyleyin.', 'soguk'],
      ] }] },
      /* 12. bölüm: Süha'nın bir cümlesi kayda geçti mi */
      { eger: function (S) { return b(S).p12_kayit === true; }, ise: [
        ['ic', 'Bir cümlesi zaten şahitli. Bu ikincisi olacak.', 'kararli'],
      ], degilse: [
        ['ic', 'Ağızdan çıkan söz inkâr edilir. Yazdıracağım.', 'kararli'],
      ] },
      /* T28 (b13_16 SES): kalem sesi tam yerinde */
      { efekt: 'kalem' },
      { soru: 'Süha Bey kalemini açtı.', secim: [
        { m: '“Yazın: Perihan Hanım\'ın evinden çıkacaksınız.”', etki: { suha: 3 }, bayrak: { p15_s_kanit: 'cik' }, iz: 'Süha kendi eliyle yazdı: Perihan\'ın evinden çıkacak.', adimlar: [
          /* T28 (b13_16 DİYALOG): "pranga" imzası 16. bölümün tek satırına saklandı */
          ['suha', 'Yazdım. Bu kâğıt benim kilidimi de yazıyor.', 'mahzun'],
          { koz: SART, kaynak: 'Kendi eliyle yazdı', alt: 'Süha Bey: “Perihan Hanım\'ın evinden çıkacağım.”' },
        ] },
        { m: '“Yazın: babama her şeyi siz anlatacaksınız.”', etki: { suha: 3 }, bayrak: { p15_s_kanit: 'anlat' }, iz: 'Süha kendi eliyle yazdı: babana her şeyi anlatacak.', adimlar: [
          ['suha', 'Yazdım. Her şey dediğiniz, benim günahım da.', 'mahzun'],
          { koz: SART, kaynak: 'Kendi eliyle yazdı', alt: 'Süha Bey: “Sait Efendi\'ye her şeyi ben anlatacağım.”' },
        ] },
      ] },
      /* 14. bölüm: sahte mektubun kâğıdı bende. T28 (b13_16 OYNANIŞ): iz el değil alışkanlık; Süha kendi eğik eliyle
         yazar ve bu kâğıda saat yazmaz. Feride baktığını açıkça kurar; benzemeyen el sırrı 16'ya saklar */
      /* T29c (GPT A15-1): kâğıdın yeri giyilen elbiseye göre */
      { eger: function (S) { return b(S).p14_kagit === true && astarUstumde(S); }, ise: [
        ['ic', 'Eğik, aceleci bir el. Üstümdeki ipeklinin astarında sakladığım cetvel gibi satırlara hiç benzemiyor.', 'kararli'],
      ], degilse: [{ eger: function (S) { return b(S).p14_kagit === true; }, ise: [
        ['ic', 'Eğik, aceleci bir el. Sandığımdaki cetvel gibi satırlara hiç benzemiyor.', 'kararli'],
      ] }] },
    ], bos: 'Süha Bey\'in kapısı kapalı.' };

  // Süha · tanık: Madam şartı duysun
  var MADAM_S = { kisi: 'josephine', ifade: 'notr', eylem: 'konuş',
    ipucu: 'Madam şartımı Süha Bey\'le birlikte duysun. (Süha · tanık) Bedeli: Madam da Perihan Hanım\'ın hedefine girer.',
    adimlar: [
      ['an', 'Madam Josephine piyanonun kapağını kapadı. Konuşmadan önce hep kapıya bakardı.'],
      { eger: madamDost, ise: [
        ['josephine', 'Sizin tarafınızdayım. Ama Süha Bey\'in tarafında değilim.', 'kararli'],
      ], degilse: [
        ['josephine', 'Beni korumak istediniz, je sais. Ama burada konuşanı kapı dışarı ederler.', 'mahzun'],
      ] },
      /* T28 (b13_16 DİYALOG): Madam akıcı vecize kurmaz */
      ['josephine', 'Süha Bey bir kez “ben değil” der… ikinci kez de der. {i}Toujours{/i}.', 'endiseli'],
      { soru: 'Madam kapısının tokmağını tutuyor.', secim: [
        { m: '“Yatsıda mabeyn kapısında durun, söylediğini duyun.”', etki: { josephine: 1 }, bayrak: { p15_s_tanik: 'madam' }, iz: 'Madam yatsıda Süha\'nın sözüne tanık olacak.', adimlar: [
          ['josephine', 'Dururum. Duyduğumu unutmam, Perihan Hanım da unutmaz.', 'kararli'],
          { eger: function (S) { return var_(S, MADAM); }, ise: [
            { kozKaynak: [MADAM, 'Madam yatsıda Süha Bey\'in sözüne de tanık olacak'] },
          ], degilse: [
            { koz: MADAM, kaynak: 'Madam yatsıda tanık olacak', alt: 'Madam Süha Bey\'in şartıma verdiği sözü kendi kulağıyla duyacak.' },
          ] },
        ] },
        { m: '“Kapınızı aralık bırakın, yeter.”', bayrak: { p15_s_tanik: 'kapi' }, iz: 'Madam\'ın kapısı yatsıda aralık. Tanıklığı yarım.', adimlar: [
          ['josephine', 'Aralık bırakırım. Kulağım… aralıkta.', 'notr'],
        ] },
      ] },
    ], bos: 'Madam piyanonun başında, başını kaldırmadı.' };

  // Süha · araç: Perihan'ın elindeki yelek düğmesi (akşamüstü boş odası)
  var CALIBE_ODA = { kisi: 'dugme', eylem: 'kutuyu aç',
    ipucu: 'Perihan Hanım görücüleri uğurluyor, odası boş. Süha Bey\'in düğmesi onun elindeki son bağ. (Süha · araç) Bedeli: kaybolduğunu ilk o anlar.',
    adimlar: [
      'Perihan Hanım\'ın sedef kakmalı dikiş kutusu aynanın önünde, kapağı aralık.',
      { eger: function (S) { return var_(S, DUGME); }, ise: [
        /* GPT T26 (15 anlatı): düğme Süha'nın anlattığı nesneyi doğrular, bütün öyküsünü değil */
        ['ic', 'Süha Bey\'in anlattığı düğme. Bu kadarı doğruymuş.', 'mahzun'],
      ], degilse: [
        ['ic', 'Makaraların altında çiçekli bir yelek düğmesi. Süha Bey\'in yeleğinden.', 'kararli'],
      ] },
      /* 10. bölümün tuzağı (çekmeceden bin lira eksilecek, yanında düğme çıkacak) kâğıtta somut */
      'Düğme katlanmış bir kâğıda sarılmış, üstünde bir satır: “Çekmece, bin lira, kayıp.”',
      ['ic', 'Tuzak gerçekmiş: çekmeceden bin lira eksilecek, hırsız hekim olacaktı.', 'endiseli'],
      { soru: 'Düğme avucumun içinde.', secim: [
        { m: 'Düğmeyi al, kâğıdı bırak.', bayrak: { p15_s_arac: 'dugme' }, iz: 'Perihan\'ın elindeki bağ sende. Kutusunu açınca ilk o anlar.', adimlar: [
          { efekt: 'anahtar' },
          { eger: function (S) { return var_(S, DUGME); }, ise: [
            { kozKaynak: [DUGME, 'Perihan Hanım\'ın kutusundan aldım; elimde'] },
          ], degilse: [
            { koz: DUGME, kaynak: 'Perihan Hanım\'ın kutusundan aldım; elimde', alt: 'Süha Bey\'in çiçekli yelek düğmesi; Perihan Hanım\'ın onu tuttuğu bağ.' },
          ] },
        ] },
        { m: 'İkisini de al: düğmeyi de, “kayıp” kâğıdını da.', etki: { calibe_suphe: 1 }, bayrak: { p15_s_arac: 'ikisi' }, iz: 'Düğme de “kayıp” kâğıdı da sende. Perihan ikisini birden arayacak.', adimlar: [
          { efekt: 'kagit' },
          { eger: function (S) { return var_(S, DUGME); }, ise: [
            { kozKaynak: [DUGME, 'Perihan Hanım\'ın kutusundan aldım, “kayıp” kâğıdıyla birlikte'] },
          ], degilse: [
            { koz: DUGME, kaynak: 'Perihan Hanım\'ın kutusundan aldım; “kayıp” kâğıdıyla birlikte', alt: 'Süha Bey\'in çiçekli yelek düğmesi; Perihan Hanım\'ın onu tuttuğu bağ.' },
          ] },
        ] },
      ] },
    ], bos: 'Perihan Hanım\'ın odası boş, aynada yalnız ben varım.' };

  /* ---- Vakit kuralları ---- */
  var refakat = function (S) { return sefikYanimda(S); };
  var MUTFAK_KAPALI = { kosul: function (S) { return mutfakKapali(S) && !kahve(S); },
    etiket: function (S) { return dinlendi(S) ? 'kilitli' : 'kapalı'; },
    neden: function (S) { return dinlendi(S) ? 'Perihan Hanım mutfağı hâlâ kilitli tutuyor, görücü günü bile.'
      : 'Hatice mutfağın kapısını bana kapadı. Bozduğum söz bu güne de geldi.'; } };
  var SUHA_KAPALI = { etiket: 'kapalı', neden: 'Süha Bey\'in kapısı. Bugün oraya işim yok.' };
  var RISK_SOFA = { kosul: meydan, gozcu: 'Nazlı', gozcuYer: 'mabeyn_kapisi', uyari: 'Nazlı görür',
    sonuc: 'Nazlı annesine koşar: sofanın ucunda dolaştım.',
    refakatMetin: 'Şefik yanımda. Nazlı onunla oyuna daldı, beni görmedi.',
    bedel: { etki: { calibe_suphe: 1 }, bayrak: { p15_v_sofa: 'gordu' }, ic: 'Nazlı gördü. Annesine koşacak.' } };
  var RISK_SELAMLIK = { gozcu: 'Uşak', gozcuYer: 'selamlik_sofa', uyari: 'Uşak görür',
    sonuc: 'Uşak babama söyler: sabah selamlığa indim.',
    refakatMetin: 'Şefik yanımda. Kardeşiyle selamlığa inen kıza kimse bir şey demez.',
    bedel: { etki: { baba_guven: -1 }, bayrak: { p15_v_selamlik: 'goruldu' }, ic: 'Uşak gördü. Akşam babama söyleyecek.' } };
  var RISK_CALIBE = { kosul: function (S) { return !kahve(S); }, gozcu: 'Nazlı', gozcuYer: 'konak_sofa', uyari: 'Nazlı görür',
    sonuc: 'Nazlı annesine koşar: odasına girdim.',
    refakatMetin: 'Şefik Nazlı\'yı bahçeye çekti, sofada kimse yok.',
    bedel: { etki: { calibe_suphe: 2 }, bayrak: { p15_v_nazli: 'gordu' }, ic: 'Nazlı gördü. Annesinin odasına girdiğimi söyleyecek.' } };
  var CALIBE_KAPALI_SABAH = { etiket: 'kapalı', neden: 'Perihan Hanım görücü için giyiniyor, kapısı kapalı.' };
  var MABEYN_KAPALI = { etiket: 'sürgülü', neden: 'Harem kapısı sürgülü. Görücü günü selamlık erkeklerindir.' };
  var HEDEF1 = { mekan: 'buyuk_salon', metin: 'İkindi ezanında büyük salona çık, görücüler orada.' };
  var HEDEF2 = { mekan: 'yemek_salonu', metin: 'Akşam ezanında yemek salonuna in. Babam kararını yatsıda söyleyecek.' };
  var BITIS1 = ['İkindi ezanı damlardan aştı, salona inmeliyim.'];
  var BITIS2 = ['Akşam ezanıyla vaktim de bitti.'];

  var VAKIT1_K = { ad: 'Görücüden önce', hak: 2, plan: 'konak', hedef: HEDEF1, refakat: refakat,
    mekanlar: ['baba_oda', 'josephine_oda', 'mutfak', 'calibe_oda', 'suha_oda', 'buyuk_salon'],
    kapali: { calibe_oda: CALIBE_KAPALI_SABAH, suha_oda: SUHA_KAPALI, mutfak: MUTFAK_KAPALI },
    riskli: { mabeyn_kapisi: RISK_SOFA, mabeyn_merdiven: RISK_SELAMLIK },
    yerler: { baba_oda: BABA_ODA, josephine_oda: MADAM_K, mutfak: MUTFAK }, bitis: BITIS1 };
  var VAKIT1_S = { ad: 'Görücüden önce', hak: 2, plan: 'konak', hedef: HEDEF1, refakat: refakat,
    mekanlar: ['suha_oda', 'josephine_oda', 'mutfak', 'calibe_oda', 'buyuk_salon'],
    kapali: { calibe_oda: CALIBE_KAPALI_SABAH, mutfak: MUTFAK_KAPALI },
    riskli: { mabeyn_kapisi: RISK_SOFA, mabeyn_merdiven: RISK_SELAMLIK },
    yerler: { suha_oda: SUHA_ODA, josephine_oda: MADAM_S, mutfak: MUTFAK }, bitis: BITIS1 };
  var VAKIT2_K = { ad: 'Akşam ezanından önce', hak: 2, plan: 'konak', hedef: HEDEF2, refakat: refakat,
    mekanlar: ['limonluk', 'josephine_oda', 'cardak', 'konak_bahce', 'calibe_oda', 'suha_oda', 'mabeyn_merdiven', 'yemek_salonu'],
    kapali: { suha_oda: SUHA_KAPALI, mabeyn_merdiven: MABEYN_KAPALI, mutfak: MUTFAK_KAPALI },
    riskli: { calibe_oda: RISK_CALIBE },
    yerler: { limonluk: LIMONLUK, josephine_oda: MADAM_K, cardak: CARDAK, konak_bahce: BAHCE }, bitis: BITIS2 };
  var VAKIT2_S = { ad: 'Akşam ezanından önce', hak: 2, plan: 'konak', hedef: HEDEF2, refakat: refakat,
    mekanlar: ['calibe_oda', 'suha_oda', 'josephine_oda', 'cardak', 'konak_bahce', 'mabeyn_merdiven', 'yemek_salonu'],
    kapali: { mabeyn_merdiven: MABEYN_KAPALI, mutfak: MUTFAK_KAPALI },
    riskli: { calibe_oda: RISK_CALIBE },
    yerler: { calibe_oda: CALIBE_ODA, suha_oda: SUHA_ODA, josephine_oda: MADAM_S, cardak: CARDAK, konak_bahce: BAHCE }, bitis: BITIS2 };

  /* ---- Yatsı: kapının sonuçları ---- */
  // Kenan kapısı kapanınca tek geri dönüş seçimi
  var DUSUS = { soru: 'Babam beni dinlemedi. Şimdi?', secim: [
    { m: 'Sabah namazında Münevver Hanım\'ın arabasına bin.', kosul: K_ARAC, iz: 'Baban dinlemeyince Münevver Hanım\'ın arabasını seçtin.', adimlar: [
      yaz('kenan', 'gizli'),
      ['f', 'Peki babacığım. Sabaha kadar düşüneyim.', 'mahzun'],
      ['ic', 'Babam bilmiyor: sabah namazında avluda bir araba olacak.', 'kararli'],
    ] },
    { m: '“Öyleyse Remzi Bey\'e evet.”', iz: 'Kenan\'a yol kapanınca Remzi Bey\'e evet dedin.', adimlar: [
      yaz('remzi'),
      ['f', 'Rızanız olmadan Kenan Bey’e gitmeyeceğim babacığım. Remzi Bey’e cevabımı ben veririm.', 'kararli'],
      ['sai', 'Bu kadar çabuk mu? Peki, Remzi Bey\'e söylerim.', 'mahzun'],
    ] },
    { m: '“Sabaha kadar beklerim babacığım. Sabah sorumu ben sorarım.”', iz: 'Bekledin. Sabah sorunu kendin soracaksın.', adimlar: [
      yaz('yok'),
      ['sai', 'Bekle. Ama sabah ben karar veririm.', 'ciddi'],
    ] },
  ] };
  var NIKAH_BASARI = { soru: 'Babam mektubu katladı.', secim: [
    { m: '“Kenan Bey\'e bu gece ben yazacağım: babam okudu.”', bayrak: { p15_v_muhur: 'yaz' }, iz: 'Kenan\'a babanın okuduğunu sen yazacaksın.', adimlar: [
      yaz('kenan', 'nikah'),
      ['sai', 'Yaz. “Okudu” de, yalan olmaz.', 'mahzun'],
    ] },
    { m: '“Sabah mektubu Perihan Hanım\'ın önünde açın.”', etki: { calibe_suphe: 2, vakar: 1 }, bayrak: { p15_v_muhur: 'perihan' }, iz: 'Babana sahte mektubu Perihan\'ın önünde açtıracaksın.', adimlar: [
      yaz('kenan', 'nikah'),
      /* T32 (b13_16 O4): Sait'in "notr"u gülen ana yüze düşüyordu */
      ['sai', 'Açarım. Artık herkes okusun.', 'ciddi'],
    ] },
  ] };
  var NIKAH_SONUC = [
    /* T27b (GPT B15-O1): sıra hazırlık → sunum → karşı yüz → hüküm. Delilsiz kızda hüküm hemen ('yok'); delili olanda
       nikahDene delil menüsünden SONRA çalışır (tanığı konuşturmanın etkisi o anda) */
    { eger: function (S) { return !K_KANIT(S); }, ise: [
      { islev: nikahDene },
      ['sai', 'Neyle göstereceksin? Elinde bir şey yok kızım.', 'ciddi'],
      ['ic', 'Delilim yoktu. Babam beni dinlemedi bile.', 'ofkeli'],
      UC_KAPI_BOS /* T29: elde kâğıt yoksa eli boş tür */,
      DUSUS,
    ], degilse: [
      /* Kanıt zinciri sahnede: baba bu kez okur, Feride farkı kendi gösterir */
      { eger: function (S) { return b(S).p15_k_kanit === 'ezber'; }, ise: [
        ['an', 'Sait Efendi kızının sözüyle kendi çekmecesini açtırdı. Mektupları bu kez acele etmeden okudu.'],
      ], degilse: [
        /* Çekmecenin bedeli (vakit ipucu): baba odasına girildiğini görür */
        { eger: function (S) { return b(S).p15_k_kanit === 'aldi'; }, ise: [
          ['sai', 'Çekmecem boştu. Demek sendin.', 'ciddi'],
        ] },
        ['an', 'Sait Efendi kâğıtları lambaya yaklaştırdı ve bu kez acele etmeden okudu.'],
      ] },
      { eger: imzaTaklit, ise: [
        /* T28 (b13_16 ana bulgu 1): iz alafranga saat */
        ['f', 'İmzayı taklit etmişler babacığım. Kenan Bey saati ezandan sayar, bu kâğıt alafranga.', 'kararli'],
      ], degilse: [
        ['f', 'Kenan Bey adını hiç uzun yazmaz babacığım. Bakın, hepsi “—K.”', 'kararli'],
      ] },
      /* Oynanış T1 B1: delilin yanına ne konacağı oyuncunun elinde; Madam'ın tanıklığı görünür (yoksa kilitli) ve
         babanın önünde harcanınca tükenir (16. bölüm Madam'ı bilir() ile okur, harcanmış koz da sayılır) */
      { soru: 'Babam kâğıtları lambaya tuttu. Hâlâ susuyor.', secim: [
        { m: '“Teline de bakın babacığım: Kenan Bey o gün Selanik\'teydi.”', bayrak: { p15_v_koz: 'tel' }, iz: 'Tarihi babanın önüne koydun. Delil kendi başına konuştu.', adimlar: [
          ['sai', 'Tel bir gün önce Selanik\'ten çekilmiş… Vapur bir buçuk gün sürer. Doğru söylüyorsun.', 'ciddi'],
        ] },
        /* GPT T26 (öncelik 1): kilitli düğme Madam'dan duyulmamış bilgiyi (arka kapı, zarf) sızdırmaz */
        { m: '“Madam\'ı çağırın babacığım, mektup günü gördüğünü kendisi söylesin.”', kozGerek: MADAM, kosul: function (S) { return b(S).p15_k_tanik === 'agiz' && var_(S, MADAM); }, bayrak: { p15_v_koz: 'madam' }, iz: 'Madam\'ın tanıklığını babanın önünde harcadın.', adimlar: [
          { kozYak: MADAM },
          ['an', 'Madam Josephine merdivenin dibinden çıktı. Elleri titriyordu ama efendinin önüne kendisi yürüdü.'],
          { goster: ['josephine', 'kararli'] },
          ['josephine', 'Mektup günü gördüm efendim. Perihan Hanım\'ın arabacısının oğlu arka kapıdaydı, elinde zarf.', 'kararli'],
          { gizle: 'josephine' },
        ] },
        { m: 'Madam\'ın imzalı kâğıdını babamın avucuna koy.', kozGerek: MADAM, kilitGoster: function () { return false; }, kosul: function (S) { return b(S).p15_k_tanik === 'yazi' && var_(S, MADAM); }, bayrak: { p15_v_koz: 'yazi' }, iz: 'Madam\'ın imzalı tanıklığını babana verdin.', adimlar: [
          { kozYak: MADAM },
          ['sai', 'Madam da mı görmüş? Konakta bir ben görmemişim.', 'mahzun'],
        ] },
        { m: '“Bu kâğıda bir tek ben inanmadım babacığım.”', etki: { vakar: 1 }, bayrak: { p15_v_koz: 'inanmadim' }, iz: 'Babana inanmadığını yüzüne söyledin.', adimlar: [
          /* T27b (GPT B15-D1): 14. bölümde her yolda "Babacığım, dinleyin! Bu kâğıt…" dedi; susmuş sayılmaz */
          ['sai', 'İnanmadıysan o gece neden…', 'mahzun'],
          ['f', 'O gece söyledim babacığım. Dinlemediniz.', 'ofkeli'],
        ] },
      ] },
      { islev: nikahDene },
      { eger: function (S) { return b(S).p15_v_nikah === 'red'; }, ise: [
        /* T29 (b13_16 B15 OYNANIŞ-1): gizli puan görünür; baba hükmü düşüren en ağır eksi kalemi kendi ağzıyla söyler */
        /* T32 (b13_16 B15 ANLATI-3): baba hükmü düşüren iki nedeni sayar; oyuncu neyi silmesi gerektiğini öğrenir */
        { eger: function (S) { return b(S).p15_v_selamlik === 'goruldu' && b(S).p12_iftira === 'tuttu'; }, ise: [
          ['sai', 'Selamlığa gizlice inen bir kız, bir de konakta dolaşan mektup lafı. Birini silersen dinlerim.', 'ciddi'],
        ], degilse: [{ eger: function (S) { return b(S).p15_v_selamlik === 'goruldu'; }, ise: [
          ['sai', 'Sabah selamlığa gizlice indin, o gece de bir kâğıda inandım. Birini silersen dinlerim.', 'ciddi'],
        ], degilse: [
          /* Selamlık görülmediyse puan ancak tutan iftira ve inanılan mektupla sıfıra düşer */
          ['sai', 'Mektuplaştığını bu ev duydu, o kâğıda da inandım. Birini silersen dinlerim.', 'ciddi'],
        ] }] },
        /* T33 (b13_16 B15 OYNANIŞ): görünmeyen terazinin eksik kefesi adlanır (tanık sunulmadıysa) */
        { eger: function (S) { return b(S).p15_v_koz !== 'madam' && b(S).p15_v_koz !== 'yazi'; }, ise: [
          ['ic', 'Tanığım yoktu. Babam elimdeki delili de dinlemedi.', 'ofkeli'],
        ], degilse: [
          ['ic', 'Delilim vardı, tanığım da; babamın kulağı yoktu.', 'ofkeli'],
        ] },
        { cizim: 'an_uc_kapi' },
        DUSUS,
      ], degilse: [
        /* T27 (SES): bölümün vurucu anı doruk müziğiyle */
        { muzik: 'doruk' },
        ['sai', 'O gece okudum, ama bakmadım. Bunu sana kim gösterdi kızım?', 'mahzun'],
        ['f', 'Kimse göstermedi babacığım. Ben baktım.', 'kararli'],
        { cizim: 'an_uc_kapi' },
        ['an', 'Sait Efendi lambayı indirdi. Bu kez kızının yüzüne uzun uzun baktı.'],
        { eger: function (S) { return b(S).p15_v_nikah === 'ikna'; }, ise: [
          ['sai', 'Münevver Hanım\'a yarın haber yollarım. Perihan Hanım\'a ben söylerim.', 'ciddi'],
        ], degilse: [
          ['sai', 'El başka, doğru. Ama bir kez söz verdim, sabaha kadar düşüneceğim.', 'mahzun'],
        ] },
        NIKAH_BASARI,
      ] },
    ] },
  ];
  var GIZLI_SONUC = [
    { eger: K_ARAC, ise: [
      ['f', 'Sabaha kadar düşünmek istiyorum babacığım.', 'mahzun'],
      ['sai', 'Düşün. Sabah ben söylerim.', 'ciddi'],
      { muzik: 'doruk' },
      ['ic', 'Babam bilmiyor: sabah namazında avluda bir araba olacak.', 'kararli'],
      UC_KAPI_BOS /* T29: elde kâğıt yoksa eli boş tür */,
      { soru: 'Arkamda ne bırakacağım?', secim: [
        { m: 'Babama bir mektup: “Kaçmadım, kendi isteğimle gittim.”', bayrak: { p15_v_iz: 'mektup' }, iz: 'Babana kendi elinle bir mektup bırakacaksın.', adimlar: [
          yaz('kenan', 'gizli'),
          ['ic', 'Babam sabah okuyacak. Okuduğunda ben yolda olacağım.', 'mahzun'],
        ] },
        { m: 'Şefik\'e bir satır: “Ablan seni bırakmadı.”', etki: { sefik: 1 }, bayrak: { p15_v_iz: 'sefik' }, iz: 'Şefik\'e bir satır bırakacaksın.', adimlar: [
          yaz('kenan', 'gizli'),
          ['ic', 'Şefik ilk ezberini bana okumuştu. Bu satırı da ezberler.', 'mahzun'],
        ] },
        { m: 'Hiçbir şey. İz bırakma.', etki: { vakar: 1 }, bayrak: { p15_v_iz: 'yok' }, iz: 'Arkanda iz bırakmayacaksın.', adimlar: [
          yaz('kenan', 'gizli'),
          ['ic', 'İz bırakmayan kızı Perihan Hanım bile arayamaz.', 'tebessum'],
        ] },
      ] },
    ], degilse: [
      ['ic', 'Münevver Hanım\'ın haberi limonlukta kaldı, almaya gitmedim. Elimde yol yok.', 'mahzun'],
      { eger: K_KANIT, ise: [UC_KAPI], degilse: [UC_KAPI_BOS] } /* T29: elde kâğıt yoksa eli boş tür */,
      { soru: 'Babam lambayı indirmedi.', secim: [
        { m: '“Şu mektubu okuyun babacığım.”', kosul: K_KANIT, iz: 'Arabasız kalınca delilini babana sundun.', adimlar: [
          { islev: nikahDene },
          { eger: function (S) { return ['ikna', 'kararsiz'].indexOf(b(S).p15_v_nikah) >= 0; }, ise: [
            yaz('kenan', 'nikah'),
            /* Babanın tutumu (p15_baba) cümlede görünür */
            { eger: function (S) { return b(S).p15_v_nikah === 'ikna'; }, ise: [
              ['sai', 'Bu el Kenan\'ın eli değil, doğru. Münevver Hanım\'a yarın haber yollarım.', 'ciddi'],
            ], degilse: [
              ['sai', 'Bu el Kenan\'ın eli değil, doğru. Sabaha düşüneceğim.', 'mahzun'],
            ] },
          ], degilse: [
            yaz('yok'),
            ['sai', 'Bir mektuba bakıp sana kıydım. Bunu da okumadan hüküm vermem.', 'ciddi'],
          ] },
        ] },
        { m: '“Öyleyse Remzi Bey\'e evet.”', iz: 'Arabasız kalınca Remzi Bey\'e evet dedin.', adimlar: [
          yaz('remzi'),
          ['sai', 'Bu kadar çabuk mu? Peki, Remzi Bey\'e söylerim.', 'mahzun'],
        ] },
        { m: '“Sabaha kadar beklerim babacığım. Sabah sorumu ben sorarım.”', iz: 'Bekledin. Sabah sorunu kendin soracaksın.', adimlar: [
          yaz('yok'),
          ['sai', 'Bekle. Ama sabah ben karar veririm.', 'ciddi'],
        ] },
      ] },
    ] },
  ];
  // Süha kapısı
  var SUHA_DUSUS = { soru: 'Süha Bey\'e bu gece evet demeyeceğim.', secim: [
    { m: '“Öyleyse Remzi Bey\'e evet.”', iz: 'Süha Bey\'i istemeyince Remzi Bey\'e evet dedin.', adimlar: [
      yaz('remzi'),
      ['sai', 'Bu kadar çabuk mu? Peki, Remzi Bey\'e söylerim.', 'mahzun'],
    ] },
    { m: '“Sabaha kadar beklerim babacığım. Sabah sorumu ben sorarım.”', iz: 'Bekledin. Sabah sorunu kendin soracaksın.', adimlar: [
      yaz('yok'),
      ['sai', 'Bekle. Ama sabah ben karar veririm.', 'ciddi'],
    ] },
  ] };
  var BABA_SUHA = { eger: function (S) { return b(S).p15_baba === 'ikna'; }, ise: [
    ['sai', 'Süha\'ya varacaksın demiştim. Şartını da duydum, olsun.', 'ciddi'],
  ], degilse: [{ eger: function (S) { return b(S).p15_baba === 'kararsiz'; }, ise: [
    ['sai', 'Şart koşan kız mı olur? …Sabaha düşüneceğim.', 'mahzun'],
  ], degilse: [
    ['sai', 'Vazgeçmeye yemin eden adama kız verilmez.', 'ciddi'],
    /* T30 (O15-2): baba kız vermedi; kapı açılmış sayılmaz (kart, defter ve 16 kapısız yolu okur) */
    yaz('yok'),
  ] }] };
  var SUHA_SONUC = [
    ['an', 'Süha Bey aralık kapısının ardından çıktı. Çağrılmayı bekliyordu.'],
    { eger: function (S) { return hazirSay(S, 'suha') === 0; }, ise: [
      { goster: ['suha', 'alayci'] },
      ['suha', 'Şartınız neyle yazılı? Tanığınız kim?', 'soguk'],
      /* GPT T24b (15-2): eski kazanımlar yok sayılmaz; eksik olan bu yeni şartın güvencesi, geri çekilmenin nedeni Feride'nin */
      { eger: function (S) { return b(S).p12_kayit === true; }, ise: [
        ['ic', 'Eski bir cümlesi şahitli, bu şartıma şahit yok. Yazdırmadığım söze bu adamla evet demem.', 'kararli'],
      ], degilse: [
        ['ic', 'Bu şartıma ne kâğıt var ne tanık. Yazdırmadığım söze bu adamla evet demem.', 'kararli'],
      ] },
      UC_KAPI_BOS /* T29: elde kâğıt yoksa eli boş tür */,
      SUHA_DUSUS,
    ], degilse: [
      { goster: ['suha', 'notr'] },
      /* Hazırlığın bedeli görünür: Madam yerini ortaya koyar; yazılı şart lambanın altında */
      { eger: function (S) { return b(S).p15_s_tanik === 'madam'; }, ise: [
        /* GPT T26 (15 sürükleyicilik): tanığın bedeli sahnede; Perihan Madam'ı görür */
        ['an', 'Madam Josephine mabeyn kapısının yanında durdu. Sofanın ucundan Perihan Hanım\'ın gölgesi onu gördü.'],
        { goster: ['josephine', 'kararli'] },
      ], degilse: [{ eger: (S) => b(S).p15_s_tanik === 'kapi', ise: ['Madam\'ın kapısı aralık, sözü yarım duyuyor.'] }] },
      /* T28 (b13_16 OYNANIŞ): 14. bölümün şafağında "tartarım" diyen kızın terazisi okunur */
      { eger: function (S) { return b(S).p14_esik === 'tart'; }, ise: [
        ['suha', 'Gözünüz üstümdeydi. Nasıl buldunuz?', 'alayci'],
        ['f', 'İzledim. Eksik çıkarsanız babama ben söylerim.', 'kararli'],
      ] },
      { eger: S_KANIT, ise: [
        ['an', 'Feride, Süha Bey\'in yazdığı kâğıdı babasının lambasının altına koydu.'],
        ['suha', 'Bir kez yazdım. Şimdi babanızın önünde ağzımla da söyleteceksiniz.', 'notr'],
      ], degilse: [
        ['suha', 'Kâğıt istemediniz, demek sözüme hâlâ inanıyorsunuz. Söyleyin.', 'alayci'],
      ] },
      ['an', 'Süha Bey sözlerini hep aralık kapılarda vermişti. Bu kez Sait Efendi\'nin lambası önündeydi.'],
      ['ic', 'Tehlikeli bir evet. Ama şartı ben koyuyorum, o değil.', 'kararli'],
      { soru: 'Şartımı babamın önünde söyleyeceğim.', secim: [
        { m: '“Perihan Hanım\'ın evinden bu hafta çıkacaksınız.”', etki: { suha: 4 }, bayrak: { p15_v_sart: 'cik' }, iz: 'Şartın: Süha Perihan\'ın evinden çıkacak.', adimlar: [
          yaz('suha'),
          { eger: S_ARAC, ise: [
            ['suha', 'Düğmem sizdeyse çıkarım. Perihan Hanım\'ın elinde başka ip kalmadı.', 'notr'],
          ], degilse: [
            ['suha', 'Çıkarım. Perihan Hanım elindekini bırakırsa.', 'alayci'],
          ] },
          BABA_SUHA,
        ] },
        { m: '“Babama Perihan Hanım\'ı siz anlatacaksınız.”', etki: { suha: 4, calibe_suphe: 1 }, bayrak: { p15_v_sart: 'anlat' }, iz: 'Şartın: Süha Perihan\'ı babana kendisi anlatacak.', adimlar: [
          yaz('suha'),
          ['suha', 'Anlatırım. Ama anlattığım beni de anlatır.', 'mahzun'],
          BABA_SUHA,
        ] },
        /* Oynanış T1 B1: 12. bölümün kozu görünür (yoksa kilitli); babanın önünde söylenince tükenir */
        /* T29b (12'de görüşmeyi reddeden kızda diz sarı odanın eşiğinde çöktü, an_diz_esik): yer söylenmez */
        { m: '“Önümde diz çöktünüz Süha Bey. Nedenini babama siz söyleyin.”', kozGerek: DIZ, kosul: function (S) { return var_(S, DIZ); }, etki: { suha: 3, calibe_suphe: 1 }, bayrak: { p15_v_sart: 'diz' }, iz: 'Süha\'nın diz çöktüğü sabahı harcadın. Artık babanın da bildiği bir şey.', adimlar: [
          { kozYak: DIZ },
          yaz('suha'),
          ['suha', 'Söylerim. Diz çöken adam ayağa kalkınca daha uzun görünür.', 'alayci'],
          BABA_SUHA,
        ] },
      ] },
      /* Süha tehlikeli kalır: yalnız Feride'nin duyduğu fısıltı; Feride'nin cevabı sesli (S3).
         GPT T24b (15-1): şart kabul edildi, henüz yerine gelmedi; Feride bunu hatırlatır.
         GPT T26 (15 diyalog): borç/karşılık sözlüğü yerine somut ve kişisel bir talep; Feride söz oyunuyla değil,
         fısıltıyı babasının önünde sesli söyleyerek cevap verir; baba kızının dilini korur */
      /* T27 (SES): Süha kapısının vurucu anı (Süha sahnesinde romantik çalmaz; doruk) */
      /* T30 (SE15-1, S15-1): Süha'nın tehlikeli yakınlığı kendi temasıyla; nabız; anın resmi (an_fisilti_lamba üretimde, gelene dek atlanır) */
      /* T33 (b13_16 B15 SES/GÖRSEL): dokunmadan fısıltıda nabız sesi yanlış ipucuydu; efekt kalktı (resim yeniden üretimde) */
      { muzik: 'suha' },
      ['an', 'Süha Bey lambanın gölgesinde Feride\'ye eğildi, dokunmadan fısıldadı. Sözü yalnız o duydu.'],
      ['suha', 'Şartınızı kabul ettim. Benimki kısa: nikâhtan sonra Kenan Bey\'in adını anmayacaksınız.', 'soguk'],
      { cizim: 'an_fisilti_lamba', ses: false },
      /* T29 (b13_16 B15 OYNANIŞ-2): bölümün en tehlikeli anı otomatik ifşa değil, Feride'nin seçimi (ara bayrak p15_v_fisilti;
         16. bölümde Süha'nın pusulası okur) */
      { soru: 'Fısıltısını yalnız ben duydum. Babam lambayı tutuyor.', secim: [
        /* T28 (b13_16 DİYALOG): vurucu an ≤12 kelime */
        { m: 'Babana aç: “Süha Bey de şart koştu.”', bayrak: { p15_v_fisilti: 'ac' }, iz: 'Süha\'nın fısıltısını babanın önünde söyledin. Bunu unutmaz.', adimlar: [
          ['f', 'Babacığım, Süha Bey de şart koştu: Kenan Bey\'in adını anmayacakmışım.', 'kararli'],
          /* T27 (DİYALOG): karşı dalda baba "kız verilmez" demişti; ikinci cümle onunla çelişmesin */
          { eger: function (S) { return b(S).p15_baba === 'karsi'; }, ise: [
            ['sai', 'Kızımın diline şart konmaz Süha. Zaten ona kız vermiyorum.', 'ofkeli'],
          ], degilse: [
            ['sai', 'Kızımın diline şart konmaz Süha. Önce onun şartını yerine getir.', 'ciddi'],
          ] },
        ] },
        { m: 'Fısılda: “Kabul. Ama adını siz de anmayacaksınız.”', etki: { suha: 3 }, bayrak: { p15_v_fisilti: 'kabul' }, iz: 'Süha\'nın şartına şartla karşılık verdin. Pazarlık ikinizin arasında, tehlike sürüyor.', adimlar: [
          ['suha', 'Anmam. Siz de unutmazsınız, ben de.', 'alayci'],
        ] },
        { m: 'Sus. Fısıltıyı kendine sakla.', etki: { vakar: 1 }, bayrak: { p15_v_fisilti: 'sakla' }, iz: 'Süha\'nın şartını babana söylemedin. Fısıltı ikinizin arasında kaldı.', adimlar: [
          ['ic', 'Babam duymadı. Bu şartı onun kâğıdına ben yazarım, günü gelince.', 'kararli'],
        ] },
        /* T32 (b13_16 B15 OYNANIŞ-2): açık ret seçeneği. Şartlı evet geri alınır; kapı açılmamış sayılır (yaz('yok')).
           Ara bayrak p15_v_fisilti 'ret' (16. bölüm yalnız 'kabul'/'sakla' okur; öbür değerler varsayılan dal) */
        { m: '“Bu şartla evetimi geri alıyorum babacığım.”', etki: { suha: -4, vakar: 2 }, bayrak: { p15_v_fisilti: 'ret' }, iz: 'Süha\'nın fısıltısını duyunca evetini babanın önünde geri aldın.', adimlar: [
          yaz('yok'),
          ['f', 'Kenan Bey\'in adını ağzımdan almak isteyen adama evet demem. Ne fısıldadıysa kendisi söylesin.', 'kararli'],
          ['sai', 'Evetini verdin, geri aldın. Bu gece kimseye kız vermem.', 'ciddi'],
        ] },
      ] },
      /* T30 (G15-2): Süha kapısında kâğıtlı tür Süha'nın aralık kapıda göründüğü an_uc_kapi_suha (yedekli) */
      { eger: S_KANIT, ise: [{ cizim: 'an_uc_kapi_suha' }], degilse: [UC_KAPI_BOS] },
      { gizle: 'suha' },
    ] },
  ];
  // Remzi kapısı: her zaman açık; şart hazırlığa bağlı
  var REMZI_SONUC = [
    ['sai', 'Remzi Bey mi? Perihan Hanım da onu istiyor.', 'ciddi'],
    /* Görücünün yelpazesini alan kız: cevabı yelpaze taşır */
    { eger: function (S) { return b(S).p15_yelpaze === 'al'; }, ise: [
      ['an', 'Feride görücünün yelpazesini babasının eline bıraktı. Cevabı selamlığa o götürecekti.'],
    ] },
    { eger: R_ARAC, ise: [
      ['ic', 'Bahçe kapısında şartımı dinleyeceğine söz verdi.', 'tebessum'],
    ], degilse: [
      ['ic', 'Babam sözümü olduğu gibi götürecek mi?', 'mahzun'],
    ] },
    { soru: 'Babam Remzi Bey\'e ne diyeceğini soruyor.', secim: [
      { m: '“Evet deyin babacığım. Şartsız.”', bayrak: { p15_v_rsart: 'sartsiz' }, iz: 'Remzi\'ye şartsız evet dedin.', adimlar: [
        yaz('remzi'),
        ['an', 'Sait Efendi lambasıyla selamlığa indi. Az sonra oradan bir kahkaha yükseldi.'],
      ] },
      { m: '“Evet, ama annesinin evinde oturmam.”', bayrak: { p15_v_rsart: 'ev' }, iz: 'Remzi\'ye evet dedin. Şartın ayrı ev.', adimlar: [
        yaz('remzi'),
        ['an', 'Sait Efendi şartı mabeynin öbür yanına iletti. Remzi Bey\'in cevabı kapıyı aşıp geldi.'],
        { eger: R_ARAC, ise: [
          /* Oynanış T1 B1: bahçe kapısındaki söz bu şartla ödendi */
          { kozYak: SOZ },
          ['remzi', 'Ayrı ev mi? Faiziyle kabul!', 'gulumser'],
        ], degilse: [
          /* GPT T24b (15, 10'a): şart müzakere edilir; Remzi neyi kabul ettiğini açık söyler, bedelini de ekler */
          ['remzi', 'Ayrı ev mi? Olsun, ayrı ev; ama anahtarı bende durur.', 'kararli'],
        ] },
      ] },
      { m: '“Evet, ama Şefik\'in mektep masrafı ondan.”', kozGerek: SOZ, kosul: R_ARAC, bayrak: { p15_v_rsart: 'sefik' }, iz: 'Remzi\'nin sözünü Şefik\'in mektebine harcadın.', adimlar: [
        { kozYak: SOZ },
        yaz('remzi'),
        ['an', 'Sait Efendi şartı mabeynin öbür yanına iletti. Remzi Bey\'in cevabı kapıyı aşıp geldi.'],
        ['remzi', 'Kardeşiniz mi? Bir değil, iki mektep öderim.', 'gulumser'],
      ] },
      { m: '“Evet, Beyoğlu\'ndaki evi kapatırsa.”', kozGerek: BEYOGLU, kilitGoster: function () { return false; }, kosul: R_KANIT, etki: { itibar: -1 }, bayrak: { p15_v_rsart: 'beyoglu' }, iz: 'Remzi\'ye evet dedin. Beyoğlu\'ndaki evi babana duyurdun.', adimlar: [
        /* Sofrada açılmadıysa sır burada tükenir */
        { eger: function (S) { return var_(S, BEYOGLU); }, ise: [{ kozYak: BEYOGLU }] },
        yaz('remzi'),
        ['sai', 'Beyoğlu mu? …Sorarım.', 'endiseli'],
        'Selamlıktan bir sessizlik geldi, sonra bir bardak kırıldı.',
      ] },
    ] },
    UC_KAPI_BOS /* T29: elde kâğıt yoksa eli boş tür */,
  ];
  var YOK_SONUC = [
    yaz('yok'),
    ['sai', 'Öyleyse ben seçerim. Perihan Hanım da Remzi Bey diyor.', 'ciddi'],
    ['f', 'Kimseye evet demedim babacığım. Sabah sözümü ondan önce söyleyeceğim.', 'kararli'],
    { soru: 'Babam lambasını kaldırdı.', secim: [
      { m: '“Perihan Hanım\'a sormayın babacığım, bana sorun.”', etki: { baba_guven: 1 }, bayrak: { p15_v_son: 'sor' }, iz: 'Kararı Perihan Hanım\'a değil, sana sorsun dedin.', adimlar: [
        ['sai', 'Sordum kızım, bir ad söylemedin. Sabah adı ben söylerim.', 'mahzun'],
      ] },
      { m: 'Sus ama başını eğme. Gözünü lambadan ayırma.', bayrak: { p15_v_son: 'egil' }, iz: 'Sustun ama başını eğmedin. Babam bunu gördü.', adimlar: [
        /* T27 (DİYALOG): gök mavisi giyildiyse aynı sahnede iki "Annen…" geçmesin */
        ['sai', 'Başını eğmedin, bunu gördüm. Sabah adı ben söylerim.', 'mahzun'],
      ] },
    ] },
    UC_KAPI_BOS /* T29: elde kâğıt yoksa eli boş tür */,
  ];

  /* ---- Cemil T27: Kenan'ın dönüşü (Kenan yolu, kapı 'kenan', gece fenere cevap) ----
     Gerekçe: Münevver Hanım görücüyü duyunca Selanik'e tel çekti (Leyla görücüde söyledi); Kenan ilk vapurla geldi.
     Kısa ve gizli: avlu kapısının bir karışlık aralığı; Kenan eşiği geçmez, kimse görmez. Feride iner ve sürgüyü kendi
     eliyle çeker (aktif hamle); bir seçim; vurucu son satır Feride'nin. Ara bayrak p15_v_donus (el/soz; yalnız bu bölüm).
     T27b: an_kenan_donus resmi bağlandı (yalnız el dalında); Feride görüşmeyi kendi sözüyle bitirir */
  /* T28 (b13_16 ana bulgu 2): dönüş varsayılan; fenere "buradayım" diyen kızda Kenan avlu kapısına gelir, lambayı
     söndüren kızda Feride kendisi iner (iki dalda da sürgüyü Feride çeker). Hitap "siz": karakter_sesleri "sen"i 16.
     bölümün kavuşmasına saklar (15'teki "—K." kartı da siz'li). Kenan nesneyle konuşur (alaturka saat kurulur) */
  function kenanDonus(gelen) {
    return [
    /* T28b (GPT SE15-2): kapıdaki yüz yüze anda vapur sesi mekânı bulandırıyordu; kapı açılışı sürgüyle (ara sayfadan sonra).
       T29 (b13_16 B15 ANLATI 10'a 2): anın dönem kuralı ara sayfada */
    { ara: { mekan: 'taslik', yer: 'Avlu kapısı · gece yarısı', satirlar: [
      gelen === 'kenan' ? 'Fener köşeyi dönmedi, avlu kapısına doğru indi. Feride lambasını söndürüp basamakların kenarına basarak indi.'
        : 'Harem merdiveni gece gıcırdardı, Feride basamakların kenarına basarak indi.',
      /* T32 (b13_16 B15 ANLATI-2): aynı iniş art arda iki kez söylenmez */
      'Biri görse adı yeniden konuşulacaktı. Karanlıkta tırabzanın soğuğunu tuttu.',
      /* T33 (b13_16 B15 ANLATI): telin bilgisi Kenan'ın ağzında; ara sayfa tekrar etmez */
      'Avlu kapısının sürgüsünü kendisi çekti, kapıyı araladı.',
    ] } },
    { efekt: 'surgu' },
    /* T29 (b13_16 B15 SES-1): romantik parça Kenan görününce */
    { muzik: 'romantik' },
    /* T27b (GPT B15-A1): Ada ve iskele yakınlaşmaları sıfırlanmaz; mesafe Selanik'e gidişten beri */
    ['an', 'Kenan kapının aralığında durdu. Selanik\'ten beri ilk kez yüz yüzeydiler, eşiği geçmedi.'],
    { goster: ['mukaddem', 'ana'] },
    /* T29 (b13_16 B15 DİYALOG 10'a 2): duygu anında Kenan'ın sesi kısalır; önce yalnız adı */
    ['mukaddem', 'Feride.', 'mahzun'],
    /* T32 (b13_16 B15 DİYALOG-3): "bir yılı üç güne indirdim" anlaşılmıyordu */
    ['mukaddem', 'Annem tel çekti: “Görücü var.” İlk vapura bindim. Saatimi kurmayı unuttum.', 'endiseli'],
    ['f', 'İçeri girmeyin Kenan. Girerseniz sabah adınız yine kirlenir.', 'endiseli'],
    ['mukaddem', 'Girmem. Yüzünüzü görmeye geldim, gördüm.', 'mahzun'],
    { soru: 'Kapı bir karış aralık, taşlığın lambası yanıyor.', secim: [
      { m: 'Elini aralıktan uzat.', etki: { mukaddem: 3 }, bayrak: { p15_v_donus: 'el' }, iz: 'Kenan\'ın eli yeniden elindeydi. Kimse görmedi.', adimlar: [
        'Parmaklarımız aralıkta buluştu. Demir soğuktu, onun eli değildi.',
        /* T27b (GPT B15-G1): hazır dönüş resmi yalnız elin uzandığı dalda */
        { cizim: 'an_kenan_donus' },
      ] },
      { m: '“Sahte mektubu yazan eli ben bulacağım. Siz yalnız bekleyin.”', etki: { mukaddem: 3, vakar: 1 }, bayrak: { p15_v_donus: 'soz' }, iz: 'Kenan bekleyecek. Adını kullanan eli sen bulacaksın.', adimlar: [
        ['mukaddem', 'Beklerim. Kapının hangi yanında olursam olayım.', 'gulumser'],
        /* T30 (S15-2): sözle karşılayan kızın dönüş anı (temassız tür an_kenan_donus_soz üretimde; gelene dek atlanır) */
        { cizim: 'an_kenan_donus_soz' },
      ] },
    ] },
    /* T27b (GPT B15-S1): buluşma sonuçsuz bir gıcırtıyla dağılmaz; Feride kendi planıyla bitirir */
    ['f', 'Saatinizi kurun Kenan. Bu kez sizi ben çağıracağım.', 'tebessum'], // T30 (D15-3): emir değil, nesne
    ['mukaddem', 'Çağırın. Bu kez kapının bu yanındayım.', 'gulumser'],
    ['an', 'Kenan karanlığa çekildi. Feride sürgüyü yavaşça yerine sürdü.'],
    { efekt: 'surgu' },
    { gizle: 'mukaddem' },
    { eger: function (S) { return b(S).p15_kenan_yol === 'gizli'; }, ise: [
      ['f', 'Bu kapıyı bu gece ben açtım. Sabah namazında bir daha açacağım.', 'tebessum'],
    ], degilse: [
      ['f', 'Bu kapıyı bu gece ben açtım. Bir dahakini babam açacak.', 'tebessum'],
    ] },
    { ara: { mekan: 'fazila_oda', yer: 'Feride\'nin odası · gece yarısı', satirlar: [
      /* T32 (b13_16 B15 DİYALOG-8): güvence cümlesi gerilimi öldürüyordu; duyu satırı */
      'Feride odasına döndüğünde kafesin önündeki lamba sönüktü. Avucu hâlâ avlu kapısının demirini taşıyordu.',
    ] } },
    ];
  }

  window.BOLUMLER[115] = {
    no: 115,
    baslik: 'Yeni 15. Bölüm',
    ad: 'Görücü',
    dogrusal: true,
    adaylar: ['mukaddem', 'suha', 'remzi'],
    ilkFaz: 'A',
    baslangic: 'fazila_oda',
    fazlar: { A: { mekanlar: ['fazila_oda', 'konak_sofa', 'buyuk_salon', 'calibe_oda', 'mabeyn_kapisi', 'sari_oda', 'josephine_oda',
      'suha_oda', 'mabeyn_merdiven', 'selamlik_sofa', 'baba_oda', 'selamlik_kapisi', 'taslik', 'mutfak', 'yemek_salonu',
      'konak_bahce', 'limonluk', 'cardak', 'konak_avlu'], baglanti: {} } },
    gorevler: [],
    // Sabahtan akşam ezanına kadar gündüz ışığı (resmi olan yerlerde); sofra ve yatsı gece
    fon: function (S, mekanId) {
      // gorsel_t1_fon #9a: gündüz vakitlerinde Süha'nın kapısına eşikten bakılır ("eşikten adım atmadım");
      // oda içinin (gece) resmi yerine kapının göründüğü mabeyn kapısının gündüz resmi
      var mk = V.mekanlar.mabeyn_kapisi_gunduz;
      if (mekanId === 'suha_oda' && S.gorev <= 1 && mk && mk.arkaplan) return 'mabeyn_kapisi_gunduz';
      var g = mekanId + '_gunduz';
      if (S.gorev <= 1 && V.mekanlar[g] && V.mekanlar[g].arkaplan) return g;
      return null;
    },

    acilis: [
      /* 14. bölümün sonu ("Süha'nın yemini") hemen karşılanır */
      { anlati: { gorsel: 'fazila_oda_gunduz', baslik: 'Görücü', satirlar: [
        /* 14. bölümün kancası yola göre karşılanır; takvim gereği bir gün geçer (Şefik "dün" gitti) */
        function (S) {
          /* T27 (ANLATI-1): bir gün geçti; Feride edilgen değil, yol kuruyor (çapa "Süha Bey yeminini etti" korunur) */
          /* T28 (b13_16 ANLATI, aktiflik): ekran dışı arama raporlanmaz; somut eylem (çapa "Süha Bey yeminini etti") */
          /* T32 (b13_16 B14 ANLATI-1): 14'ün Selanik ipi ilk satırda karşılanır */
          if (muk(S) && b(S).p14_kenan === 'yaz') return 'Leyla\'ya giden kâğıt dün sabah yola çıkmıştı. Feride konaktaki kurşun kalemlerin uçlarına baktı.';
          if (muk(S)) return 'Feride sabah konaktaki kurşun kalemleri yokladı. Sahte mektubu yazan kalem bu çatının altındaydı.';
          return {
            sefik: 'Süha Bey yeminini ettiğinden beri benden hiçbir şey istemedi.',
            perihan: 'Süha Bey yeminini ettikten sonraki gün Perihan Hanım\'a tek söz etmedi. Sustukça yemini ağırlaşıyordu.',
          }[b(S).p14_yemin] || 'Süha Bey yeminini ettikten sonraki gün Feride\'nin yüzüne hiç bakmadı. “Siz istemedikçe” demişti.';
        },
        'İkindi görücü gelecek, yatsıda babası cevabını verecekti.',
      ] } },
    ],

    olaylar: [
      /* ---------------- 1. Oda, sabah: 14. bölümün izleri, Perihan'ın haberi, kıyafet ---------------- */
      {
        id: 'p15_sabah', mekan: 'fazila_oda', tetik: 'giris', kosul: (S) => S.gorev === 0, sahne: [],
        adimlar: [
          /* 14. bölüm: Şefik mektepte mi, yanımda mı; dayak; yemin */
          { eger: sefikYanimda, ise: [
            ['an', 'Ateşi düşen Şefik ablasının yatağının ucunda uyuyakalmıştı. Feride\'nin kolu hâlâ askıdaydı.'],
            { goster: ['sefik', 'notr'] },
          ], degilse: [
            ['an', 'Askerî mektep Şefik\'i dün almıştı. Feride bu sabah postayı kendisi karşılamak için merdivende durdu.'],
          ] },
          /* Sürükleyicilik T1 (S4): özet iç sesler (yemin, sahte mektup) ilk seçimden sonraya alındı */
          { eger: function (S) { return b(S).p14_dayak === true; }, ise: [
            ['ic', 'Saç örgümün dibi hâlâ sızlıyor. Babam o elle bugün kızını verecek.', 'ofkeli'],
          ] },
          { gizle: 'sefik' },
          ['an', 'Perihan Hanım herkesten önce giyinmişti. Talibi de ilk o beğenmişti.'],
          { goster: ['calibe', 'gulumser'] },
          ['calibe', 'Görücüler ikindide. Remzi Bey\'in annesiyle yengesi, kesesi dolu bir ev.', 'sinsi'],
          { eger: muk, ise: [
            ['calibe', 'Babana Süha\'yı ben unutturacağım. Sen de Kenan\'ı unut.', 'soguk'],
          ], degilse: [
            ['calibe', 'Babana Süha\'yı ben unutturacağım. Sen de unut.', 'soguk'],
          ] },
          { soru: 'Perihan Hanım saçımın örgüsüne bakıyor.', secim: [
            { m: '“Süha Bey\'i kendinize saklıyorsunuz efendim.”', etki: { calibe_suphe: 2, vakar: 1 }, bayrak: { p15_perihan: 'meydan' }, iz: 'Perihan Nazlı\'yı sofanın ucuna oturttu. Oradan geçeni görecek.', adimlar: [
              { goster: ['calibe', 'ofkeli'] },
              ['calibe', 'Dilini görücüye sakla. Nazlı bugün sofanın ucunda oturacak.', 'ofkeli'],
            ] },
            { m: '“Görücülerinizin kahvesini ben pişiririm.”', etki: { calibe_suphe: -1 }, bayrak: { p15_perihan: 'kahve' }, iz: 'Perihan sana güvendi. Bugün kimseyi başına dikmedi, mutfak da açık.', adimlar: [
              ['calibe', 'Akıllandın. Fincanları say, kırık olmasın.', 'sinsi'],
              ['ic', 'Kahve bahane. Mutfak bugün bana açık.', 'tebessum'],
            ] },
            { m: 'Sus. Saçını onun gözünün önünde ör.', bayrak: { p15_perihan: 'sus' }, adimlar: [
              ['calibe', 'Susmak sana yakışıyor. Görücüye de yakışır.', 'soguk'],
            ] },
          ] },
          /* T32 (b13_16 B15 DİYALOG-9): açılıştaki "üç kapı" ile üst üste iki aforizma; somut ayrıntı */
          ['an', 'Perihan Hanım eteğini toplayıp çıktı. Merdivende görücü fincanlarını yüksek sesle saydığı duyuldu.'],
          { gizle: 'calibe' },
          { giyin: ['nisan_sade', 'nisan_gosterisli', 'nisan_yadigar'], soru: 'Görücüye ne giyeceğim?' },
          /* 14. bölüm: Şefik'in resim defterindeki asker (mektebe gittiyse) */
          { eger: function (S) { return !sefikYanimda(S); }, ise: [
            'Yastığımda defterinden koparılmış bir sayfa: kılıcı örgüm kadar uzun bir asker.',
            /* Oynanış T1 B5: 14. bölümde defterin son sayfasına bakan kız (p14_k_defter) arkadaki satırı da görür */
            { eger: function (S) { return b(S).p14_k_defter === 'bakti'; }, ise: [
              'Hasta başında baktığım son sayfa. Arkasına yazmış: “Bu asker ablasının kapısını bekler.”',
            ] },
            ['ic', 'Gitmeden kapıma bir bekçi bırakmış. Sayfayı koynuma koydum.', 'tebessum'],
          ] },
          /* 14. bölüm: yemin (her yolda bir kez) */
          { eger: function (S) { return b(S).p14_yemin === 'sefik'; }, ise: [
            ['ic', 'Süha Bey kardeşim için yemin etti, tuttu.', 'mahzun'],
          ], degilse: [{ eger: function (S) { return b(S).p14_yemin === 'perihan'; }, ise: [
            ['ic', 'Süha Bey Perihan Hanım\'ı babama açmaya yemin etti. Henüz açmadı.', 'mahzun'],
          ], degilse: [
            /* T28b (GPT A15-1): vazgeçme yemini istemekle tartılmaz; Feride'nin kazanımı olarak babanın önüne taşınır */
            ['ic', 'Süha Bey benden vazgeçmeye yemin etti. Bu söz babamın önünde de duyulacak.', 'kararli'],
          ] }] },
          /* Feride'nin planı: üç kapı, dört iş, iki vakit (Kenan yolunda 14. bölümün sahte mektubuyla tek satır) */
          { eger: (S) => muk(S) && b(S).p10_teklif === 'kabul' && b(S).p13_suha === 'once', ise: [
            { soru: 'Süha Bey’e önce doğruyu söylemesini şart koşmuştum. Bugün kimi dinleteceğim?', secim: [
              { m: 'Kenan için delil ara.', bayrak: { p15_yon: 'kenan' }, adimlar: [
                ['ic', 'Önce Kenan’ın üstündeki lekeyi kaldıracağım.', 'kararli'],
              ] },
              { m: 'Hekime şartını hatırlat. Bu kez tanık bul.', bayrak: { p15_yon: 'suha' }, iz: 'Süha’ya verdiğin sözü tanık önünde yeniden konuşmayı seçtin.', adimlar: [
                ['ic', 'Babamın önünde de söyleyebilir mi? Bugün bunu öğreneceğim.', 'kararli'],
              ] },
            ] },
          ] },
          { eger: muk, ise: [
            { eger: function (S) { return b(S).p14_mektup === 'kanit'; }, ise: [
              /* T27 (SÜRÜK-5): B14 kancası ("Ben baktıracağım") yerine getirilebilir; baba çarşıda */
              /* T28 (b13_16 ANLATI): iç ses görev listesi değil; kişiler ve nesneler */
              ['ic', 'Babam çarşıda. Akşama kadar ya bir delil bulurum ya Madam\'ı konuştururum.', 'kararli'],
            ], degilse: [{ eger: function (S) { return b(S).p14_mektup === 'supheli' && b(S).p14_kagit === true; }, ise: [
              /* T29c (GPT A15-1): kâğıdın yeri giyilen elbiseye göre */
              { eger: astarUstumde, ise: [
                ['ic', 'Sahte kâğıt üstümde, astarda. Ama tek başına babamı inandırmaz.', 'kararli'],
              ], degilse: [
                ['ic', 'Sahte kâğıt sandığımda. Ama tek başına babamı inandırmaz.', 'kararli'],
              ] },
            ], degilse: [{ eger: function (S) { return b(S).p14_mektup === 'supheli'; }, ise: [
              ['ic', 'Sahte kâğıt yandı. Babamı inandıracak yeni bir şey bulmalıyım.', 'endiseli'],
            ], degilse: [
              ['ic', 'Babam o mektuba inandı. Onu inandıracak bir şey bulmalıyım.', 'endiseli'],
            ] }] }] },
          ], degilse: [
            /* T28b (GPT A15-1; kök bulgu 2): ret geçmişinde (13'te açık ret / "sevmiyorum", 14'te vazgeç yemini ya da kapıyı
               kapatmak) hazırlık Süha'ya evlilik kapısı değil, karar hakkını koruma aracı olarak adlandırılır */
            /* T30 (A15-2): ret geçmişi 13–14'teki tam yardımcıyla (suhaRet) */
            { eger: function (S) { var f = b(S); return suhaRet(S) || f.p14_yemin === 'vazgec' || f.p14_esik === 'kapa'; }, ise: [
              ['ic', 'Madam\'ın tanıklığı ve kutudaki düğme Perihan Hanım\'ı susturabilir.', 'kararli'],
            ], degilse: [
              ['ic', 'Şartımı Süha Bey\'e yazdırmalıyım. Madam\'ın sözü ve kutudaki düğme de işe yarar.', 'kararli'],
            ] },
          ] },
          /* T32 (b13_16 B15 DİYALOG-5): oyun talimatı yerine zaman ve kapı */
          ['ic', 'Görücüye kadar ancak iki kapı çalabilirim.', 'endiseli'],
          { eger: muk, ise: [{ vakit: VAKIT1_K }], degilse: [{ vakit: VAKIT1_S }] },
          /* T30 (O15-1): vakit işini seçmeyen oyuncu da kararla ilerler; Perihan'ın 14'teki "askı şalın altında dursun" emrine cevap */
          { soru: 'Görücü arabası yolda. Kolum hâlâ askıda.', secim: [
            { m: 'Askıyı şalın altına sakla. Perihan Hanım öyle istedi.', etki: { calibe_suphe: -1 }, bayrak: { p15_aski: 'sakla' }, adimlar: [
              'Şalı omzuma attım; askı ve sargı altında kaldı.',
            ] },
            { m: 'Askıyı saklama. Kolumu kim incittiyse görsünler.', etki: { vakar: 1, calibe_suphe: 1 }, bayrak: { p15_aski: 'goster' }, iz: 'Askını saklamadın. Görücüler babanın elinin izini görecek.', adimlar: [
              'Şalı katlayıp sedire bıraktım. Askı göğsümün önünde, açıkta.',
            ] },
          ] },
          { gorev: 1 },
          /* T28b (SES): görücü arabasının gümüş çıngırağı ara sayfadan önce duyulur */
          { efekt: 'cingirak' },
          { ara: { mekan: 'buyuk_salon', yer: 'Büyük salon · ikindi', satirlar: [
            'İkindi ezanıyla avluda gümüş çıngıraklı bir araba durdu. Büyük salona sabahtan mangal konmuştu.',
            'Görücülerin sesi merdivene kadar geliyordu. Feride inerken aynaya bakmadı.',
          ] } },
        ],
      },

      /* ---------------- 2. Büyük salon, ikindi: görücü ---------------- */
      {
        id: 'p15_gorucu', mekan: 'buyuk_salon', tetik: 'giris', kosul: (S) => S.gorev === 1, sahne: [],
        adimlar: [
          /* B1'de arabanın perdesi ardındaki yabancı hanım: Remzi Bey'in annesi (yazar kararı) */
          ['an', 'Remzi Bey\'in annesini Feride düğünden tanıdı: bahçede süzen, perde ardında konuşan hanımdı.'],
          { goster: ['remzi_anne'] }, { goster: ['calibe', 'gulumser'] },
          ['remzi_anne', 'Maşallah, boyu iyi, beli ince. Yürü bakalım kızım.', 'ana'],
          ['an', 'Sadberk Hanım oturmadan önce sedirin kumaşını iki parmağı arasında yokladı.'],
          { goster: ['sadberk'] },
          /* Kıyafet görücünün terazisinde */
          { eger: (S) => S.giyili === 'nisan_gosterisli', ise: [
            /* T29 (b13_16 B15 OYNANIŞ-3): askılı kolla taftaya inmenin bedeli (Perihan 14'te "askı şalın altında" demişti) */
            { eger: (S) => b(S).p15_aski === 'goster', ise: [
              /* T32 (b13_16 B15 DİYALOG-10): Sadberk'in "Bizim evde…" kalıbı sahnede bire indi (küpe sahnesinde kaldı) */
            ['sadberk', 'Tafta güzelmiş. Kolunuz iyileşmeden bu telaşa ne gerek vardı?', 'alayci'],
            ], degilse: [
              ['sadberk', 'Tafta Beyoğlu malı, şalın altında da sargı. Kimi kandırıyorsunuz?', 'ofkeli'],
            ] },
            { etki: { itibar: -1 } },
          ], degilse: [{ eger: (S) => S.giyili === 'nisan_yadigar', ise: [
            ['sadberk', 'Bu kesimi annenizin zamanında görürdük. Onun elbisesi mi?', 'alayci'],
          ], degilse: [
            /* Doğrulama v65: "bu evde" bir yolda en çok iki kez (Sait ve kanca) */
            ['sadberk', 'Pek sade. Konakta para mı bitti?', 'alayci'],
          ] }] },
          /* Gönül: Remzi'nin ilgisi annesinin ağzından */
          { eger: remziIlgili, ise: [
            ['remzi_anne', 'Oğlum başka kız istemedi. Düğün evinden beri bu kapıyı sayıklıyor.', 'gulumser'],
          ], degilse: [
            ['remzi_anne', 'Oğlum bir gördü, beğendi. Biz de beğenirsek iş biter.', 'gulumser'],
          ] },
          ['calibe', 'Kızımız piyano da çalar, Fransızca da bilir.', 'gulumser'],
          ['sadberk', 'Bizim evde mutfağa Fransızca laf anlatamazsın kızım.', 'alayci'],
          { eger: kahve, ise: [
            ['calibe', 'Kahvesini kızımız kendi pişirdi.', 'gulumser'],
          ], degilse: [
            ['calibe', 'Kahveyi kızımız getirecek.', 'soguk'],
          ] },
          /* T28b (GPT G15-1): 14'te incinen kol askıda; tepsi sağlam elde (an_yelpaze askılı türü üretimde) */
          /* T32 (ifade envanteri 2a-19): yaralı elle görücü karşısında, tetikte */
          ['ic', 'Tepsiyi sağlam elimle sehpaya koydum. Onlar beni süzecek, ben de onların evini.', 'kararli'],
          /* T28 (b13_16 ANLATI 10'a 1): sunuşun kuralı seçimden önce (seçim bilgiyle yapılır) */
          ['remzi_anne', 'Bizde ilk fincan büyüğündür kızım.', 'ana'],
          /* T28 (b13_16 SES): fincan sesi tam yerinde */
          { efekt: 'fincan' },
          { soru: 'Kahveyi önce kime vereceğim?', secim: [
            { m: 'Usulünce: önce Remzi Bey\'in annesine, orta şekerli.', etki: { itibar: 1 }, bayrak: { p15_kahve: 'usul' }, adimlar: [
              ['remzi_anne', 'Oğlum kahvesini böyle ister. Fincanına bir damla taşırmadan.', 'gulumser'],
            ] },
            /* Sabah mutfakta öğrenilen: hanım şekersiz içer */
            { m: 'Şekersizini ona ver: tatlı sevmediğini biliyorum.', kosul: R_TANIK, etki: { itibar: 1 }, bayrak: { p15_kahve: 'sekersiz' }, iz: 'Mutfakta öğrendiğin görücüyü şaşırttı.', adimlar: [
              ['remzi_anne', 'Kim söyledi? …Akıllı kız, mutfakta kulağı var.', 'gulumser'],
              ['sadberk', 'Bizim evde de kulak çoktur kızım. Benimkiler en büyüğü.', 'ana'],
            ] },
            { m: 'Önce Sadberk Hanım\'a ver.', etki: { itibar: -1, vakar: 1 }, bayrak: { p15_kahve: 'sadberk' }, iz: 'Görücünün terazisini bozdun, annesi bunu unutmaz.', adimlar: [
              ['remzi_anne', 'Önce ben! Burada sıra bilen yok mu?', 'ofkeli'],
              { goster: ['calibe', 'ofkeli'] },
              ['an', 'Sadberk Hanım fincanı keyifle aldı, küpeleri şıngırdadı.'],
            ] },
          ] },
          /* Oynanış T1 B6: itibar görücünün ağzında (mahallede ne dendiği) */
          { eger: function (S) { return itibar(S) >= 55; }, ise: [
            ['remzi_anne', 'Mahallede adını soran övgüden başka söz duymamış. Biz de onu duyduk.', 'gulumser'],
          ], degilse: [{ eger: function (S) { return itibar(S) < 45; }, ise: [
            ['sadberk', 'Bizim evde kapıya gelenin sözü taşlıktan içeri girmez kızım.', 'alayci'],
          ] }] },
          /* Tartılan kız bir kez tartar: görücünün evinde gelinin payı */
          ['f', 'Sizin evde bir gelin neye kendi başına karar verir, hanımefendi?', 'tebessum'],
          ['remzi_anne', 'Kahvenin şekerine kızım. Gerisine ben bakarım.', 'ana'],
          /* T28b (GPT D15-2): seçimden önce evliliği kesinleştiren kip yok */
          ['ic', 'Şekeri bile annesi seçiyor. O evde benim hangi sözüm dinlenir?', 'dusunceli'],
          /* Yelpazenin fiyatı (romanda s. 193) */
          { goster: ['yelpaze'] },
          /* T27b (GPT B15-SE1): istenmeyen hediye parlak ödül sesiyle açılmasın; fiyat anında Perihan'ın koyu teması
             (an sesi piyano akoruna döner, ses.js KOYU), Leyla gelince ev temasına dönülür */
          { muzik: 'perihan' },
          { eger: (S) => b(S).p10_sahit === 'remzi' && b(S).p10_teslim !== 'gizli', ise: [
            ['remzi_anne', 'Kırk lira verdim kızım. İskeledeki sözünden beri oğlum babanızın kapısında kalır.', 'ana'],
          ], degilse: [
            ['remzi_anne', 'Paris işi. Kırk lira verdik, oğlum bunun on katını verir.', 'gulumser'],
          ] },
          { kesif: { x: 40, y: 34, w: 18, h: 24, ad: 'Yelpazenin kurdelesi', adimlar: [
            /* T28 (b13_16 GÖRSEL): Paris dükkânı Türkçe fiyat yazmaz; görücünün yalanı ve dönem dokusu */
            /* T28b (GPT A15-2): etiket üretim yerini kanıtlamaz; çıkarım gösterdiği kadar */
            'Kurdelenin altında bir etiket: Beyoğlu\'ndan bir mağaza, “40 L.” Paris\'ten geldiğini söylemiyor.',
            { bayrak: { p15_k_etiket: 'bakti' } },
          ] } },
          /* 6. bölüm: Remzi'nin salondaki sepetle yollattığı yelpaze */
          { eger: function (S) { return b(S).p6_v_yelpaze === 'al'; }, ise: [
            ['ic', 'İkinci yelpaze. İlki hâlâ bende.', 'tebessum'],
          ], degilse: [{ eger: function (S) { return b(S).p6_v_yelpaze === 'geri'; }, ise: [
            ['ic', 'Sepetiyle gelen birini geri yollamıştım. Bu kez annesi getirdi.', 'tebessum'],
          ] }] },
          { cizim: 'an_yelpaze' },
          { soru: 'Yelpaze bana uzanmış duruyor.', secim: [
            { m: '“Yelpazeyi açmadan fiyatını öğrendik.”', etki: { vakar: 1, itibar: -1 }, bayrak: { p15_yelpaze: 'fiyat' }, iz: 'Fiyatı yüzlerine okudun. Annesi seni dilli buldu.', adimlar: [
              /* Etiketi yalnız kurdeleye bakan kız anar */
              { eger: function (S) { return b(S).p15_k_etiket === 'bakti'; }, ise: [
                ['f', 'Etiketi de sökmeyi unutmuşsunuz.', 'tebessum'],
                ['sadberk', 'Unutmadık. Görsün diye bıraktık.', 'ana'],
              ], degilse: [
                ['sadberk', 'Bizde fiyat saklanmaz kızım. Herkes bilsin diye söyledik.', 'ana'],
              ] },
            ] },
            { m: 'Al, eğil: “Elinize sağlık.”', etki: { itibar: 1 }, bayrak: { p15_yelpaze: 'al' }, adimlar: [
              ['remzi_anne', 'Terbiyeli. Fiyatını bilen kız iyi gelin olur.', 'ana'],
              /* Oynanış T1 B5: etiketi gören kız 'al' dalında da anar */
              { eger: function (S) { return b(S).p15_k_etiket === 'bakti'; }, ise: [
                ['ic', 'Kurdeleyi kapattım. Yelpazeyi uzatmadan fiyatını söylediler.', 'mahzun'],
              ] },
              ['sadberk', 'Yelpazeyi aldı. Sözün yarısı verildi demek.', 'alayci'],
            ] },
            { m: '“Remzi Bey bana bir tane yollamıştı. İkincisi fazla.”', kosul: function (S) { return b(S).p6_v_yelpaze === 'al'; }, bayrak: { p15_yelpaze: 'iki' }, adimlar: [
              ['remzi_anne', 'Yollamış mı? Bize söylemedi, demek iki kere ödedi.', 'ana'],
            ] },
            { m: '“Oğlunuzun yolladığını geri göndermiştim. Bunu tutayım mı?”', kosul: function (S) { return b(S).p6_v_yelpaze === 'geri'; }, bayrak: { p15_yelpaze: 'geri' }, adimlar: [
              ['remzi_anne', 'Geri mi? Bizim yelpaze bir kez geri döner kızım.', 'ofkeli'],
            ] },
          ] },
          { gizle: 'yelpaze' },
          { muzik: 'ev' },
          /* Münevver Hanım'ın teklifi Leyla aracılığıyla yenilenir */
          ['an', 'Leyla annesiyle komşu ziyaretine gelmişti. Görücü kalabalığında Feride’nin yanına kadar sokulabildi.'],
          { goster: ['fevkiye', 'notr'] },
          /* 6. bölüm: Leyla'nın Nabi'yle sözü (yazar kararı: kendi gözüyle gördüyse bozdurdu) */
          { eger: function (S) { return b(S).p6_fev === 'anlat'; }, ise: [
            ['an', 'Bu konağa artık gelin adayı gibi girmiyordu. Nabi Bey\'i kendi gözüyle görmüş, sözünü bozdurmuştu.'],
          ], degilse: [
          ] },
          { eger: muk, ise: [
            ['fevkiye', 'Münevver Hanım\'dan haber var! Akşam ezanından önce limonlukta ol.', 'gulumser'],
            /* Kenan'ın dönüşü (yazar kararı): Münevver görücüyü telle bildirdi, Kenan ilk vapurla döndü */
            /* T28 (b13_16 SÜRÜK): gecenin feneri ve Kenan'ın dönüşü ikindide bilgi olarak harcanmaz; espri Kenan'ın ağzında */
            /* T29 (b13_16 B15 ANLATI-1): dün sabahki görücü haberi tel ile gitti, cevabı da tel ile geldi (vapur iki gün) */
            /* T30 (A15-1): ilk tel babanın hükmünü duyduğu akşam (13) gitti; Kenan 14'te bindi, bu gece burada (bir buçuk gün) */
            ['fevkiye', 'Münevver Hanım Selanik\'e iki tel çekti. İkisine de cevap geldi!', 'gulumser'],
            ['ic', 'Görücü sözü Selanik\'e bir günde yetişmiş.', 'utanmis'],
            /* T27b (GPT B14-O2): 14. bölümün şafak satırı Kenan'a burada ulaşır; ilgi haberin ulaştığı anda artar.
               T28: Kenan'ın sözü "siz"li (15'teki kartla aynı hitap). T29: satır Münevver Hanım'ın teline girdi */
            { eger: function (S) { return b(S).p14_kenan === 'yaz'; }, ise: [
              ['fevkiye', 'Senin satırını da Münevver Hanım tele koydu. Cevabını limonlukta kendin oku!', 'gulumser'], // T30 (D15-1): kartı önceden okumaz
              { etki: { mukaddem: 5 } },
            ] },
            ['fevkiye', 'Kenan\'ın teli bende, limonlukta veririm.', 'notr'],
          ], degilse: [
            /* Süha yolu: teklif ilk kez burada yapılır; nişanın bozulduğu hatırlanır */
            ['fevkiye', 'Nişanın son sözünü sen yazdın. Münevver Hanım yine de seni gelini sayıyor.', 'notr'],
            ['fevkiye', 'Dersen gizli nikâhı bile göze alır, Kenan\'ı Selanik\'ten çağırır.', 'endiseli'],
          ] },
          { eger: leylaAcik, ise: [
            ['ic', 'Perihan Hanım\'ın gözü Leyla\'nın eldiveninde. Postamızı biliyor.', 'endiseli'],
          ] },
          ['sadberk', 'Ne fısıldaşıyorsunuz kızlar? Bizden saklı söz olmaz.', 'supheli'],
          /* Oynanış T1 B5: ikinci keşif; bakan kıza küpe seçeneği açılır (motor seçim ekranında da açar) */
          { kesif: { x: 62, y: 22, w: 12, h: 16, ad: 'Sadberk Hanım\'ın küpesi', adimlar: [
            'Sol küpenin taşı sağdakinden soluk, kenarında küçük bir cam kabarcığı.',
            { bayrak: { p15_k_kupe: 'bakti' } },
          ] } },
          { soru: 'Sadberk Hanım fısıltımı duydu. Ne diyeceğim?', secim: [
            { m: '“Küpelerinizin taşını konuşuyorduk Sadberk Hanım.”', bayrak: { p15_fisilti: 'kupe' }, adimlar: [
              /* T28 (b13_16 DİYALOG): küpe çift olur */
              ['sadberk', 'Hindistan\'dan. Kocam üç çift aldı, en iyisi bende.', 'ana'],
            ] },
            { m: '“Sol küpenizin taşı sağdakinden soluk Sadberk Hanım.”', kosul: function (S) { return b(S).p15_k_kupe === 'bakti'; }, etki: { vakar: 1, itibar: -1 }, bayrak: { p15_fisilti: 'cam' }, iz: 'Sadberk\'in camdan taşını gördün, fısıltına bir daha karışmaz.', adimlar: [
              ['sadberk', 'Soluk mu? …Üç çiftten biri camcıdan çıkmış.', 'notr'],
              ['an', 'Sadberk Hanım küpesini saçının altına itti ve sustu.'],
            ] },
            { m: '“Gelin olacak kızın sırrı olur.”', etki: { itibar: -1, vakar: 1 }, bayrak: { p15_fisilti: 'sir' }, iz: 'Sadberk sırrı sokağa taşıyacak. Adın konuşulacak.', adimlar: [
              ['sadberk', 'Sır mı? Ben sır tutmam kızım, mahalle de bilir.', 'alayci'],
            ] },
            { m: 'Leyla\'ya fısılda: “Akşam ezanından önce oradayım.”', kosul: muk, bayrak: { p15_fisilti: 'leyla', p15_munevver: 'soz' }, iz: 'Leyla\'ya söz verdin. Limonlukta seni bekleyecek.', adimlar: [
              ['fevkiye', 'Beklerim. Gelmezsen arabayı da beklemez.', 'endiseli'],
              ['sadberk', 'Duymadım sanma kızım.', 'ofkeli'],
            ] },
            /* GPT T26 (15 oynanış): kırgınlık haber ulaşınca; bağ eksisi gecede Leyla'nın pusulasıyla gelir */
            { m: 'Leyla\'ya fısılda: “Münevver Hanım\'a söyle, Kenan\'a varmayacağım.”', kosul: (S) => !muk(S), bayrak: { p15_fisilti: 'leyla', p15_munevver: 'geri' }, iz: 'Leyla kararını bu akşam Münevver Hanım\'a iletecek.', adimlar: [
              ['fevkiye', 'Peki, iletirim. Ama o seni hâlâ bekliyor.', 'mahzun'],
            ] },
            /* T28b (GPT O15-1; kök bulgu 2): rota dışı teklif sunuluyorsa fikir değiştirme eylemi de açık. Süha yolundaki kız
               Kenan'la konuşmayı isteyebilir; gönül puanı verilmez (aşk sayılmaz), Kenan gece avlu kapısının altına gelir
               (p15_gece). Kapı menüsü bu gece değişmez: Kenan'ın kapısını babası tartmamıştır (pano bunu söyler) */
            { m: 'Leyla\'ya fısılda: “Münevver Hanım\'a söyle: önce Kenan\'la konuşmak isterim.”', kosul: (S) => !muk(S), bayrak: { p15_fisilti: 'leyla', p15_munevver: 'kenan' }, iz: 'Münevver Hanım\'a haber gidiyor: Kenan\'la konuşmak istiyorsun.', adimlar: [
              ['fevkiye', 'Bu akşam tel çeker, Kenan ilk vapurla gelir! Bak gör.', 'gulumser'],
              ['sadberk', 'Duymadım sanma kızım.', 'ofkeli'],
            ] },
          ] },
          ['an', 'Leyla annesinin yanına döndü, bir daha bu yana bakmadı.'],
          { gizle: 'fevkiye' },
          ['remzi_anne', 'Bize uyar. Gerisini erkekler konuşur.', 'ana'],
          /* S5: ortadaki dönüşe süre ve bedel (yüzüğün ölçüsü) */
          ['calibe', 'Remzi Bey selamlıkta babanla.', 'sinsi'],
          /* T28 (b13_16 SÜRÜK 10'a 2): orta dönüş iç sesle ağırlaşır */
          ['ic', 'Selamlıkta benim adım konuşuluyor. Bana soran yok.', 'ofkeli'],
          /* T27 (OYNANIŞ): vakit 2'de Remzi annesini bekliyor; görücüler henüz konaktan çıkmadı */
          ['an', 'Görücüler kalkmaya davrandı. Perihan Hanım onları sofaya kadar, kendi kazancını uğurlar gibi geçirdi.'],
          { gizle: 'remzi_anne' }, { gizle: 'sadberk' }, { gizle: 'calibe' },
          { eger: muk, ise: [{ vakit: VAKIT2_K }], degilse: [{ vakit: VAKIT2_S }] },
          /* T30 (O15-1): görücüler uğurlanırken yüzüğün ölçüsü; vakit işini seçmeyen oyuncu da karar verir */
          { goster: ['calibe', 'sinsi'] },
          { soru: 'Perihan Hanım kapıda: “Remzi Bey parmağının ölçüsünü istiyor.”', secim: [
            { m: '“Önce bir de benim cevabımı dinleyin.”', etki: { vakar: 1 }, bayrak: { p15_olcu: 'baba' }, adimlar: [
              ['calibe', 'Baban verir kızım. Sen de takarsın.', 'sinsi'],
            ] },
            { m: 'Parmağını uzatma, ellerini eteğinde kavuştur.', etki: { calibe_suphe: 1 }, bayrak: { p15_olcu: 'yok' }, adimlar: [
              ['calibe', 'Ölçü vermeyen parmağa da yüzük olur.', 'soguk'],
            ] },
          ] },
          { gizle: 'calibe' },
          { gorev: 2 },
          { ara: { mekan: 'yemek_salonu', yer: 'Yemek salonu · akşam', satirlar: [
            'Akşam ezanıyla bahçeden serinlik geldi. Konakta pencereler birer birer kapandı.',
            'Sait Efendi ekmeği bölmeden kimse konuşmadı.',
          ] } },
        ],
      },

      /* ---------------- 3. Akşam sofrası: vakit bedelleri, babanın sözü, Feride'nin hamlesi ---------------- */
      {
        id: 'p15_sofra', mekan: 'yemek_salonu', tetik: 'giris', kosul: (S) => S.gorev === 2, sahne: [],
        adimlar: [
          ['an', 'Sofrada kimse Remzi Bey’in adını ağzına almadı.'],
          /* Aile sofrası: portreler ilk replikleriyle tek tek */
          { goster: ['sai', 'ciddi'] },
          /* Vakitte ödenen bedeller aynı akşam anılır (en çok biri) */
          { eger: function (S) { return b(S).p15_v_nazli === 'gordu'; }, ise: [
            { goster: ['calibe', 'soguk'] },
            ['calibe', 'Nazlı seni odamın kapısında görmüş. Kutumu da açık buldum.', 'sinsi'],
          ], degilse: [{ eger: function (S) { return b(S).p15_v_selamlik === 'goruldu'; }, ise: [
            ['sai', 'Uşak söyledi: sabah selamlıktaymışsın.', 'ciddi'],
          ], degilse: [{ eger: function (S) { return b(S).p15_v_sofa === 'gordu'; }, ise: [
            { goster: ['calibe', 'soguk'] },
            ['calibe', 'Nazlı seni sabah sofanın ucunda görmüş. Kime gidiyordun?', 'sinsi'],
          ], degilse: [{ eger: function (S) { return !!b(S).p15_r_arac; }, ise: [
            /* Bahçe kapısının bedeli: Sadberk arabadan gördü */
            { goster: ['calibe', 'soguk'] },
            ['calibe', 'Sadberk Hanım seni bahçe kapısında Remzi Bey\'le görmüş. Mahalle yarın bunu konuşur.', 'sinsi'],
          ], degilse: [{ eger: function (S) { return b(S).p15_munevver === 'soz' || b(S).p15_munevver === 'kenan'; }, ise: [
            /* Görücüde Sadberk'in "Duymadım sanma kızım"ı: Leyla'ya verilen fısıltı sözünün bedeli */
            { goster: ['calibe', 'soguk'] },
            ['calibe', 'Sadberk Hanım bir fısıltı duymuş. Akşam ezanından önce neredeydin kızım?', 'sinsi'],
          ] }] }] }] }] },
          /* 10. bölüm: iskelede açık şahitlik eden Remzi */
          { eger: remziAcik, ise: [
            ['sai', 'İskeledeki şahidi selamlığıma almam demiştim. Annesi bugün kapımdaydı, bu kez içeri aldım.', 'ciddi'],
          ] },
          /* 13. bölüm: babasına verilen ret */
          /* T29 (b13_16 B15 SÜRÜK-2): sofradaki kurulum kısaldı; 13. bölüm hatırlatması yalnız açık ret ve sessizlikte (babanın
             gelişimi). Şartlı cevabın hafızası yatsıda kapının kendisinde (benzet15 çapası buna göre) */
          { eger: function (S) { return b(S).p13_ret === 'acik'; }, ise: [
            ['sai', 'Bana açık açık hayır demiştin. Bu kez kimseye hayır deme.', 'ciddi'],
          ], degilse: [{ eger: function (S) { return b(S).p13_ret === 'sessiz'; }, ise: [
            /* T28 (b13_16 DİYALOG): "susan kız razıdır" kalıbı 13. bölümde bir kez; babanın gelişimi (benzet15 çapası birlikte) */
            ['sai', 'Sustun. Bu kez susmanı evet saymadım.', 'mahzun'],
          ] }] },
          /* T29 (b13_16 B15 DİYALOG-3): Kenan yolunda sofra Kenan'ın adını bilir; baba 13'teki Selanik yasağını sürdürür */
          { eger: muk, ise: [
            ['sai', 'Yatsıda cevabımı vereceğim. Kenan\'ın adını bu sofrada duymam.', 'ciddi'],
          ], degilse: [
            ['sai', 'Yatsıda cevabımı vereceğim: Remzi Bey mi, Süha Bey mi.', 'ciddi'],
          ] },
          { goster: ['calibe', 'soguk'] },
          { eger: anneKizdi, ise: [
            ['calibe', 'Annesi biraz bozuldu. Ama kesesi dolu efendi.', 'sinsi'],
          ], degilse: [
            ['calibe', 'Annesi kızı beğendi. Kesesi de dolu efendi.', 'sinsi'],
          ] },
          ['an', 'Süha Bey o akşam tabağına dokunmadı. Bıçağı neşter gibi tutuyordu.'],
          { goster: ['suha', 'notr'] },
          { eger: muk, ise: [
            ['suha', 'Karar sizin efendim. Ben yalnız nabız sayarım.', 'alayci'],
          ], degilse: [
            ['suha', 'Ben sözümü vermiştim efendim. Yeminim de ortada.', 'notr'],
            /* 14. bölüm: yalnız "vazgeç" yemini bakışı bağlar */
            /* T28 (b13_16 OYNANIŞ): 14. bölümün hasta başı hafızası (zehir isteği, gözyaşı) okunur; "unutmayacak" vaadi
               burada tutulur. Satır sayısı değişmez (iç sesin yerine) */
            { eger: function (S) { return b(S).p14_yemin === 'vazgec'; }, ise: [
              ['ic', 'Süha Bey bana bakmadı. Yemini bakışını da bağlamış.', 'mahzun'],
            /* T28b (GPT D14-1): 14'teki kriz sözü artık korku ve yardım isteği (p14_hasta 'korku') */
            ], degilse: [{ eger: function (S) { return b(S).p14_hasta === 'korku'; }, ise: [
              ['suha', 'Bir gece benden ne yapacağınızı sordunuz, bu akşam şart soruyorsunuz.', 'alayci'],
            ], degilse: [{ eger: function (S) { return b(S).p14_gozyasi === 'goster'; }, ise: [
              ['ic', 'Süha Bey bana bakmadı. Şefik\'in başında ağladığım geceden beri bakışını sakınıyor.', 'mahzun'],
            ], degilse: [
              ['ic', 'Süha Bey tabağına baktı. Yemini anıldığında da başını kaldırmadı.', 'mahzun'],
            ] }] }] },
          ] },
          { soru: 'Babam ekmeğini böldü, herkes bana bakıyor.', secim: [
            { m: '“Perihan Hanım Remzi Bey\'i neden bu kadar istiyor, babacığım?”', etki: { calibe_suphe: 2 }, bayrak: { p15_sofra: 'perihan' }, iz: 'Perihan\'ın niyetini babanın önüne attın.', adimlar: [
              { goster: ['calibe', 'ofkeli'] },
              ['calibe', 'Kızımı zengin bir eve vermek suç mu efendi?', 'ofkeli'],
              ['sai', 'Değil. Ama kızım sordu, ben de sorarım.', 'ciddi'],
            ] },
            { m: '“Siz kimi seçerseniz babacığım.” Niyetini sofrada belli etme.', etki: { baba_guven: 1 }, bayrak: { p15_sofra: 'boyun' }, iz: 'Başını eğdin. Niyetini kimse görmedi.', adimlar: [
              ['sai', 'Böyle kızım. Yatsıda söylerim.', 'gulumser'],
              /* T32 (ifade envanteri 2a-20): metin yüzünü sakladığını söylüyor, portre gülmez */
              ['ic', 'Başımı eğdim. Perihan Hanım ne düşündüğümü yatsıya kadar bilmesin.', 'kararli'],
            ] },
            { m: '“Babacığım, yatsıda size bir kâğıt göstereceğim.”', kosul: (S) => muk(S) && K_KANIT(S), etki: { calibe_suphe: 1 }, bayrak: { p15_sofra: 'kagit' }, iz: 'Babana kâğıdı önceden haber verdin. Perihan da duydu.', adimlar: [
              { goster: ['calibe', 'saskin'] },
              ['calibe', 'Ne kâğıdı?', 'saskin'],
              ['sai', 'Yatsıda mabeyn kapısında göster. Yalnız.', 'ciddi'],
            ] },
            /* 14. bölümün yemini babanın önünde sınanır (Süha yolu) */
            { m: '“Süha Bey, yemininizi babamın önünde söyleyin.”', kosul: (S) => !muk(S), etki: { suha: -3 }, bayrak: { p15_sofra: 'yemin' }, iz: 'Süha\'nın yeminini babanın önünde sınadın. Sofrada sınanmayı sevmedi.', adimlar: [
              { eger: function (S) { return b(S).p14_yemin === 'sefik'; }, ise: [
                ['suha', 'Şefik\'i kurtarmaya yemin ettim efendim. Tuttum.', 'notr'],
                ['sai', 'Tuttun. Sana bir borcumuz var.', 'mahzun'],
              ], degilse: [{ eger: function (S) { return b(S).p14_yemin === 'perihan'; }, ise: [
                /* GPT T26 (15 sürükleyicilik): "vakti gelince" yerine sırrın küçük, geri alınamaz bir parçası; Perihan'ın
                   tepkisi gecede kapıdaki sözünü değiştirir (yeminSofra) */
                ['suha', 'Perihan Hanım\'ı açmaya yemin ettim efendim. İlki şu: beni bir yelek düğmesiyle tutuyor.', 'notr'],
                { goster: ['calibe', 'ofkeli'] },
                ['calibe', 'Düğme mi? Hekim Bey sofrada sayıklıyor efendi.', 'ofkeli'],
              ], degilse: [
                ['suha', 'Kızınızdan vazgeçmeye yemin ettim efendim.', 'notr'],
                ['sai', 'Vazgeçtiysen neden sofradasın?', 'ciddi'],
              ] }] },
            ] },
            /* Çardakta öğrenilen sır sofraya */
            /* Oynanış T1 B1: koz görünür (yoksa kilitli) ve sofrada söylenince sır olmaktan çıkar */
            /* GPT T26 (öncelik 1): çardağa gitmeyen kıza kilitli düğme Beyoğlu sırrını sızdırmasın (D6) */
            { m: '“Remzi Bey\'in Beyoğlu\'ndaki evini soran oldu mu babacığım?”', kozGerek: BEYOGLU, kilitGoster: function () { return false; }, kosul: R_KANIT, etki: { calibe_suphe: 1 }, bayrak: { p15_sofra: 'beyoglu' }, iz: 'Remzi\'nin Beyoğlu sırrını sofraya koydun. Artık sır değil.', adimlar: [
              { kozYak: BEYOGLU },
              ['sai', 'Beyoğlu\'nda ev mi? Kim söyledi?', 'endiseli'],
              ['f', 'Kulağıma çalındı babacığım. Soran siz olun.', 'tebessum'],
              /* Çardağın bedeli: Nabi'ye verilen söz */
              { eger: function (S) { return b(S).p15_r_kanit === 'borc'; }, ise: [
              ] },
              ['calibe', 'Erkek kısmının evi çok olur efendi.', 'soguk'],
            ] },
            /* Oynanış T1 B6: vakar eşiği (≥22) cesaret seçeneğini açar; yatsıda babanın sorusu bunu okur */
            { m: '“Babacığım, yatsıda adı siz değil, ben söyleyeyim.”', kosul: cesur, etki: { calibe_suphe: 1 }, bayrak: { p15_sofra: 'soz' }, iz: 'Babandan söz aldın: yatsıda adı sen söyleyeceksin.', adimlar: [
              { goster: ['calibe', 'ofkeli'] },
              ['calibe', 'Kız kısmı ad mı söyler efendi?', 'ofkeli'],
              ['sai', 'Bu gece söyler. Dinleriz.', 'ciddi'],
            ] },
          ] },
          ['an', 'Sait Efendi kalkınca sofra da dağıldı.'],
          { gizle: 'calibe' }, { gizle: 'suha' }, { gizle: 'sai' },
          { gorev: 3 },
          { ara: { mekan: 'mabeyn_kapisi', yer: 'Mabeyn kapısı · yatsı', satirlar: [
            /* T33 (b13_16 B15 ANLATI): bekleme bilgisi sahnede; aktif kahraman doruğa sözü hazır girer */
            'Mabeyn kapısında tek lamba yanıyordu.',
          ] } },
        ],
      },

      /* ---------------- 4. Yatsı, mabeyn kapısı: üç kapı (sözleşme bayrakları burada yazılır) ---------------- */
      {
        id: 'p15_uc_kapi', mekan: 'mabeyn_kapisi', tetik: 'giris', kosul: (S) => S.gorev === 3, sahne: [],
        adimlar: [
          { muzik: 'gerilim' },
          /* T33 (b13_16 B15 ANLATI): anlatıcı babanın birazdan soracağını önceden özetlemez */
          ['an', 'Sait Efendi lambayı mabeyn kapısına getirdi. “Bir söze dayanacaksan kim duydu, bir kâğıtsa getir de göreyim kızım.”'],
          { goster: ['sai', 'ciddi'] },
          /* Oynanış T1 B4: seçilen kıyafete babanın tepkisi (annesinin gök mavisi) */
          { eger: (S) => S.giyili === 'nisan_yadigar', ise: [
            ['sai', 'Annenin gök mavisini giymişsin. O da bu kapıda böyle dik dururdu.', 'mahzun'],
          ] },
          /* Sürükleyicilik T1 (S5): pano doruk sorusundan önce; seçimden önceki son satırlar el, bekleyen kapı ve süre.
             an_uc_kapi her dalda vurucu cümleden sonra (S6) */
          /* T28 (b13_16 SES 10'a 2): pano gerilim parçasının üstünden akmaz; tek piyano tuşu ve sessizlik, sonra gerilim */
          /* T33 (b13_16 B15 SES): "sessizlik + tek nota" kalıbı kalktı; gerilim pano boyunca sürer, kararda hüküm */
          /* T28 (b13_16 ANLATI §5b): tam ekran anlatıcı (Fatma Aliye sesi) arayüz listesi okumaz; her kapı akıcı iki cümle
             (benzet15: üç satır, her birinde "Bedeli", Remzi satırı "Remzi" ile başlar). Hazırlık listesi Defter'de */
          { eger: muk, ise: [
            { anlati: { gorsel: 'mabeyn_kapisi', baslik: 'Üç kapı', satirlar: [
              /* T33 (b13_16 B15 SÜRÜK/DİYALOG): pano puan listesi gibi okunmasın; her satır bir kapı, bir el, bir yük
                 (benzet15 çapası: üç satır, her birinde "Bedeli") */
              function (S) { return K_ARAC(S) ? 'Münevver Hanım’ın arabası hazırdı. Feride binerse babası onu evden uğurlamayacaktı.' : K_KANIT(S) ? 'Feride yazıyı tanıyordu. Kenan’ı savunursa babası mektupları nasıl gördüğünü soracaktı.' : K_TANIK(S) ? 'Madam’ın tanıklığını babasına götürebilirdi. Bu kez Perihan onun da adını duyacaktı.' : 'Kenan’la gitmek isterse arabayı kendisi bulacaktı. Babası avludaki sesi duyardı.'; },
              /* T27 (ANLATI-2): baba "Perihan Hanım da Remzi Bey diyor" der; pano onunla çelişmez. T28: bedel susmanın değil kapının */
              /* T30 (A15-3): Süha'ya bir gece elini uzatmış kızın panosu */
              function (S) { return (b(S).p13_gece === 'el')
                ? 'Süha Bey\'i babası seçmişti, Feride ona bir gece el vermişti. Bedeli Perihan Hanım\'ın sofrasında oturmaktı.'
                : 'Süha Bey\'i babası seçmişti. Bedeli Perihan Hanım\'ın sofrasında oturmaktı.'; },
              function (S) { return 'Remzi Bey\'in kapısı açıktı. Bedeli biçilmiş bir fiyattı.'; },
            ] } },
          ], degilse: [
            { anlati: { gorsel: 'mabeyn_kapisi', baslik: 'Üç kapı', satirlar: [
              /* GPT T26 (15 oynanış 10'a): her hazırlığın neyi sağladığı panoda (yazı inkârı, tanık gizlemeyi, düğme şantajı) */
              function (S) {
                if (S_ARAC(S)) return 'Feride parmaklarını düğmenin çevresinde kapadı. Perihan Hanım sandalyesini Sait Efendi’ye yaklaştırdı.';
                if (S_KANIT(S)) return 'Süha Bey’in elinden çıkan yazı Feride’deydi. Feride kâğıdı açarsa Perihan da yazıyı görecekti.';
                if (S_TANIK(S)) return 'Madam mabeyn kapısında duracaktı. Feride onu çağırırsa Perihan da tanığını öğrenecekti.';
                return 'Feride’nin elinde hekime gösterecek bir şey yoktu. Perihan Hanım sandalyesini Sait Efendi’ye yaklaştırdı.';
              },
              function (S) { return b(S).p15_munevver === 'geri' ? 'Feride, Leyla’yla Münevver Hanım’a haber göndermişti. Kenan’ı beklemeyecekti.'
                /* T28b (GPT O15-1): fikir değiştiren kızın kapısı bu gece tartılmaz; teklif geçmişte kalan umut gibi değil, yolda */
                : b(S).p15_munevver === 'kenan' ? 'Feride Kenan\'a giden yolu Leyla\'yla yeniden açmıştı. Bedeli Münevver Hanım\'ın bekleyişiydi.'
                : 'Feride Kenan\'dan çoktan dönmüştü. Bedeli Münevver Hanım\'ın cevapsız kalan teklifiydi.'; },
              function (S) { return R_KANIT(S) ? 'Remzi Bey’in Beyoğlu’ndaki evini sorarsa haberi kimden aldığını da söylemesi gerekecekti.' : R_ARAC(S) ? 'Remzi Bey’e sözünü hatırlatırsa babası aralarındaki pazarlığı duyacaktı.' : 'Remzi Bey’e bu gece razı olursa kendi şartını ne zaman söyleyecekti?'; },
            ] } },
          ] },
          /* GPT T26 (öncelik 8): 14. bölümün dayağı yalnız "sonraki hesap" kalmaz; Feride cevaptan önce bir sınır koyar,
             babası bu gece kabul eder (dayaksız dalda eski satır) */
          /* T28 (b13_16 OYNANIŞ): 14. bölüm sabahında sözü zaten alan kızın hafızası okunur */
          { eger: function (S) { return b(S).p14_dayak === true && b(S).p14_baba === 'soz'; }, ise: [
            ['f', 'Dün söz verdiniz babacığım: o el bana bir daha kalkmayacak. Cevabım o sözün üstünde.', 'kararli'],
            ['sai', 'Söz yerinde.', 'mahzun'],
          ], degilse: [{ eger: function (S) { return b(S).p14_dayak === true; }, ise: [
            ['f', 'Cevaptan önce bir şartım var babacığım: o el bir daha bana kalkmayacak.', 'kararli'],
            ['sai', 'Kalkmayacak. Söz.', 'pisman'],
          ], degilse: [
            'Babamın elindeki lamba titriyor.',
          ] }] },
          { eger: muk, ise: [
            'Süha Bey\'in kapısı kapalı, altından ışık sızıyor.',
          ], degilse: [
            'Süha Bey\'in kapısı aralık, ardında biri nefesini tutuyor.',
          ] },
          /* Oynanış T1 B6: sofrada vakarla alınan söz hakkı babanın sorusunda */
          { eger: (S) => b(S).p15_sofra === 'soz', ise: [
            ['sai', 'Sofrada adı ben söyleyeceğim dedin. Remzi Bey bekliyor, söyle kızım.', 'ciddi'],
          ], degilse: [
            ['sai', 'Remzi Bey selamlıkta cevap bekliyor. Söyle kızım, kime varacaksın?', 'endiseli'],
          ] },
          { muzik: 'gerilim' },
          { eger: muk, ise: [
            { soru: 'Babam lambayı yüzüme tuttu.', secim: [
              /* T27 (DİYALOG): soru kapıyı soruyor; cevap kapıyı adlandırır (16. bölüm "kendi ağzıyla söylemişti" der) */
              { m: '“Kenan Bey\'e varacağım babacığım. Mektubun yalanını size göstereceğim.”', bayrak: { p15_v_secim: 'nikah' }, iz: 'Kenan için babandan rıza istedin.', adimlar: NIKAH_SONUC },
              { m: 'Babana bir şey deme, sabah Münevver Hanım\'ın arabasına bin.', bayrak: { p15_v_secim: 'gizli' }, iz: 'Kenan\'a babana söylemeden gitmeyi seçtin.', adimlar: GIZLI_SONUC },
              /* Oynanış T1 B3: eksi gönül, seçimin bedeli çubukta görünür */
              { m: '“Remzi Bey\'e evet babacığım.”', bayrak: { p15_v_secim: 'remzi' }, iz: 'Remzi Bey\'e evet dedin. Münevver Hanım\'a kararını henüz söylemedin.', adimlar: REMZI_SONUC },
              { m: '“Bu gece kimseye evet demem babacığım.”', bayrak: { p15_v_secim: 'yok' }, iz: 'Bu gece kimseye evet demedin. Selamlıktaki Remzi cevapsız kaldı.', adimlar: YOK_SONUC },
            ] },
          ], degilse: [
            { soru: 'Babam lambayı yüzüme tuttu.', secim: [
              { m: '“Süha Bey\'e evet babacığım, ama şartımla.”', bayrak: { p15_v_secim: 'suha' }, iz: 'Süha Bey\'e kendi şartınla evet dedin.', adimlar: SUHA_SONUC },
              { m: '“Remzi Bey\'e evet babacığım.”', bayrak: { p15_v_secim: 'remzi' }, iz: 'Remzi Bey\'e evet dedin. Süha Bey\'in aralık kapısı sessiz kaldı.', adimlar: REMZI_SONUC },
              { m: '“Bu gece kimseye evet demem babacığım.”', bayrak: { p15_v_secim: 'yok' }, iz: 'Bu gece kimseye evet demedin. Selamlıktaki Remzi cevapsız kaldı.', adimlar: YOK_SONUC },
            ] },
          ] },
          { gizle: 'sai' }, { gizle: 'josephine' }, { muzik: null },
          { gorev: 4 },
          /* Öte yan (eski "Onun gözünden") geçiş sayfasının ilk satırı: iki tam ekran art arda gelmez; sırrı çözmez */
          { ara: { mekan: 'fazila_oda', yer: 'Feride\'nin odası · gece', satirlar: [
            (S) => (kapi(S) === 'remzi'
              ? 'Perihan Hanım selamlığı dinledi. Süha hâlâ konaktaydı.'
              : kapi(S) === 'yok'
                ? 'Perihan Hanım yatağına uzandı. Sabah kararı kocası değil, kendisi verecekti, bunu kocası da bilmeyecekti.'
                : b(S).p15_kenan_yol === 'gizli'
                  /* T29 (b13_16 B15 ANLATI-3): diyalogdaki bilgi tekrarlanmaz; Perihan'ın eylemi (16'daki asma kilide köprü) */
                  ? 'Perihan Hanım mabeyndeki lambanın söndüğünü gördü. O gece avlu kapısı için kâhyayı uyandırdı, ne istediğini kimseye söylemedi.'
                  : 'Perihan Hanım mabeyndeki lambanın söndüğünü gördü.'),
            'Konak o gece geç uyudu, harem sofasında yanık kalan son lamba Feride\'ninkiydi.',
          ] } },
        ],
      },

      /* ---------------- 5. Oda, gece: Kenan'ın sesi, Perihan'ın kapısı, kanca ---------------- */
      {
        id: 'p15_gece', mekan: 'fazila_oda', tetik: 'giris', kosul: (S) => S.gorev === 4, sahne: [],
        adimlar: [
          /* Kararın artçısı: kapıya göre tek satır */
          /* GPT T24b (15, 10'a): Remzi'ye konan şart Feride'nin ağzında teyit edilir (p15_v_rsart) */
          { eger: (S) => kapi(S) === 'remzi', ise: [
            { eger: (S) => b(S).p15_v_rsart === 'ev', ise: [
              ['ic', 'Evet dedim, ayrı evle. Şartımı onun ağzından da duydum.', 'kararli'],
            ], degilse: [{ eger: (S) => b(S).p15_v_rsart === 'sefik', ise: [
              ['ic', 'Evet dedim. Şefik\'in mektebi artık onun sözü.', 'tebessum'],
            ], degilse: [{ eger: (S) => b(S).p15_v_rsart === 'beyoglu', ise: [
              ['ic', 'Evet dedim, Beyoğlu\'ndaki ev kapanırsa. Kırılan bardak cevap değildi.', 'ofkeli'],
            ], degilse: [
              ['ic', 'Evet dedim. Ağzımda bakır tadı; yine de ben dedim.', 'mahzun'],
            ] }] }] },
          ], degilse: [{ eger: (S) => kapi(S) === 'suha', ise: [
            ['ic', 'Şartımı söyledim. Şimdi oturunca dizlerim boşaldı.', 'endiseli'],
          ], degilse: [{ eger: (S) => kapi(S) === 'kenan' && b(S).p15_kenan_yol === 'nikah', ise: [
            ['ic', 'Sesim sonunda babamın kulağına vardı.', 'tebessum'],
          ], degilse: [{ eger: (S) => kapi(S) === 'kenan', ise: [
            'Oturmadım. Sabah namazına kadar gözümü kapamayacağım.',
          ], degilse: [
            /* T30 (O15-2): Süha'ya şartla evet dedi, baba kız vermedi */
            { eger: (S) => b(S).p15_v_fisilti === 'ret', ise: [
              ['ic', 'Evetimi babamın önünde geri aldım. Fısıltısını bu kez o da duydu.', 'kararli'],
            ], degilse: [{ eger: (S) => b(S).p15_v_secim === 'suha', ise: [
              ['ic', 'Evet dedim, babam kız vermedi. Sabah bunun hesabını soracağım.', 'ofkeli'],
            ], degilse: [
            /* T28b (GPT S15-1; kök bulgu 7): ret dalının kapanışı bekleme değil, hazırlanmış karşı hamle (16'da sarı oda) */
            { eger: S_ARAC, ise: [
              ['ic', 'Kimseye evet demedim. Düğme bende, sabah babam önce onu dinleyecek.', 'kararli'],
            ], degilse: [{ eger: function (S) { return var_(S, MADAM); }, ise: [
              ['ic', 'Kimseye evet demedim. Madam\'ın sözü hâlâ bende, sabah babamın önüne çıkacak.', 'kararli'],
            ], degilse: [{ eger: function (S) { return var_(S, IMZA); }, ise: [
              ['ic', 'Kimseye evet demedim. Delil elimde, sabah babam önce onu okuyacak.', 'kararli'],
            ], degilse: [
              ['ic', 'Kimseye evet demedim. Sabaha kadar sözüm benim.', 'tebessum'],
            ] }] }] },
            ] }] },
          ] }] }] }] },
          /* GPT T26 (15 oynanış): Münevver Hanım görücüdeki fısıltıyı Leyla'dan bu akşam öğrendi; kırgınlık şimdi */
          { eger: (S) => b(S).p15_munevver === 'geri', ise: [
            'Kapımın altında Leyla\'nın pusulası: “Söyledim. Münevver Hanım hiçbir şey demedi.”',
            { etki: { munevver: -1 } },
          ] },
          /* Kenan'ın sesi önce mektupla gelir (T27: kapı 'kenan'da gece fenere cevap verilirse kısa, gizli buluşma) */
          { eger: muk, ise: [
            { eger: K_ARAC, ise: [
              'Kenan\'ın telini yeniden açtım.',
            ], degilse: [
              'Kapımın önünde bir zarf: “Leyla bekledi, bunu size bıraktı. —Madam”',
              KENAN_KART,
            ] },
            /* Kenan o gece İstanbul'a iner (Leyla görücüde söyledi) */
            /* T28 (b13_16 SÜRÜK): Kenan'ın gelişi ikindide söylenmedi; gece belirsiz, fener sürpriz */
            { eger: (S) => kapi(S) === 'kenan', ise: [
              ['ic', 'Teli “Yoldayım” diyordu. Bu gece mi, yarın mı?', 'endiseli'],
            ], degilse: [
              ['ic', 'Münevver Hanım\'ın teli Selanik\'e gitti. Bu gece Kenan\'dan ses yok.', 'mahzun'],
            ] },
            /* Yatsıda verilen söz: "Kenan'a bu gece ben yazacağım" */
            { eger: (S) => b(S).p15_v_muhur === 'yaz', ise: [
              'Kenan\'a üç satır yazdım: “Babam okudu.” Gerisini yüzüne söyleyeceğim.',
            ] },
          ] },
          /* T29 (b13_16 B15 SÜRÜK-1): Kenan kapısında doruk (üç kapı) ile fener arasında yeni seçim yok; Perihan'ın eşiği
             tek tehdit satırı ve çıkışla geçer, fener bölümün kapanış doruğu olur */
          { eger: (S) => kapi(S) === 'kenan', ise: [
            /* T33 (b13_16 B15 SÜRÜK): doruktan sonra Perihan'ın eşiği tek söz; fener çabuk gelir */
            { efekt: 'kapi' },
            ['an', 'Perihan Hanım kapıyı çalmadan açtı, tek söz söyleyip kapadı.'],
            { goster: ['calibe', 'soguk'] },
            { eger: (S) => b(S).p15_kenan_yol === 'nikah', ise: [
              ['calibe', 'Babana kâğıt göstermişsin. Kâğıtlar yanar kızım.', 'soguk'],
            ], degilse: [
              ['calibe', 'Erken yat kızım. Sabah namazında uyanık olursun.', 'sinsi'],
            ] },
            'Eteğinin hışırtısı uzaklaşınca lambamı kafesin önüne koydum.',
          ], degilse: [
            { efekt: 'kapi' },
            ['an', 'Perihan Hanım kapıyı çalmadan açtı.'],
            { goster: ['calibe', 'soguk'] },
            { eger: (S) => b(S).p15_sofra === 'yemin' && b(S).p14_yemin === 'perihan', ise: [
              /* Sofrada Süha düğmeyi andı: Perihan'ın gece sözü değişir (Süha yolunun üç kapısında) */
              ['calibe', 'Sofrada hekime düğme saydırdın. O dili de ben dikerim.', 'ofkeli'],
            ], degilse: [{ eger: (S) => kapi(S) === 'suha', ise: [
              ['calibe', 'Süha\'yı benden aldığını mı sanıyorsun?', 'ofkeli'],
            ], degilse: [{ eger: (S) => kapi(S) === 'remzi', ise: [
              ['calibe', 'Akıllı kız. Remzi Bey\'in kesesi ikimize de yeter.', 'sinsi'],
            ], degilse: [
              ['calibe', 'Baban sabah benim dediğimi söyleyecek.', 'soguk'],
            ] }] }] },
            { soru: 'Perihan Hanım eşikte.', secim: [
              /* GPT T24b (15, 10'a): "kâğıtlar yanar" yalnız rızalı nikâh dalında duyuluyordu; cevap her dalda sabaha bağlanır */
              { m: '“Sabah olsun efendim. Kimin dediği olur, görürsünüz.”', etki: { calibe_suphe: 1, vakar: 1 }, bayrak: { p15_v_gece: 'soz' }, adimlar: [
                ['calibe', 'Görürüz kızım. Sarı odamda kahven hazır olur.', 'soguk'],
              ] },
              /* GPT T24b (15-3): sürgü yalnız 6–7. bölümde taktıran kızın kapısında (pilot11 sürgüsüz dal: sandalye) */
              { m: 'Lambayı söndür, kapıyı yüzüne kapa.', bayrak: { p15_v_gece: 'sus' }, adimlar: [
                { eger: surguVar, ise: [
                  { efekt: 'surgu' },
                  'Lambayı söndürdüm, sürgümü çektim. Eteğinin hışırtısı kapının ardında uzun süre kaldı.',
                ], degilse: [
                  'Lambayı söndürdüm, sandalyeyi tokmağa dayadım. Eteğinin hışırtısı kapının ardında uzun süre kaldı.',
                ] },
              ] },
              { m: '“Düğmenizi arıyorsanız, bende.”', kosul: S_ARAC, etki: { calibe_suphe: 2 }, bayrak: { p15_v_gece: 'dugme' }, iz: 'Perihan düğmenin sende olduğunu artık biliyor.', adimlar: [
                { goster: ['calibe', 'saskin'] },
                ['calibe', 'Sen… Kutumu mu açtın?', 'saskin'],
              ] },
              { m: '“Remzi Bey\'in Beyoğlu\'ndaki evini siz de biliyor muydunuz?”', kosul: R_KANIT, etki: { calibe_suphe: 1 }, bayrak: { p15_v_gece: 'beyoglu' }, adimlar: [
                ['calibe', 'Bilirdim. Erkeğin ikinci evi, kadının ilk dersidir.', 'sinsi'],
              ] },
            ] },
            /* Sürükleyicilik T1 (S2): Perihan'ın açık bıraktığı uyarıyı Feride kapar; ardından tek kapanış satırı ve kart.
               Kapıyı yüzüne kapayan kızda (sus) çıkış o satırda */
            { eger: (S) => b(S).p15_v_gece !== 'sus', ise: [
              ['an', 'Perihan Hanım eşikten çekildi, kapıyı ardından kapatmadı.'],
              'Kapıyı arkasından ben kapadım.',
            ] },
          ] },
          /* T29 (b13_16 B15 SES-2): Perihan gidince onun teması sürmez */
          { muzik: 'gece' },
          { gizle: 'calibe' },
          /* T28b (GPT O15-1; Cemil T27 "Kenan 15'te döner"): Süha yolunda Leyla'ya "önce Kenan'la konuşmak isterim" diyen kız
             için Kenan gece gelir; mesafeli (eşik yok, el yok), seçim eklenmez, gönül puanı yok. Ara bayrak p15_v_fener 'uzak' */
          /* T30 (A15-1): Süha yolunda tel bu akşam gidiyor; Kenan aynı gece gelemez (vapur bir buçuk gün). Leyla'nın pusulası */
          { eger: (S) => !muk(S) && b(S).p15_munevver === 'kenan', ise: [
            'Kapımın altında Leyla\'nın pusulası: “Tel gitti. Kenan ilk vapura biniyor, öbür gün İstanbul\'da.”',
            { eger: (S) => kapi(S) === 'yok', ise: [
              ['ic', 'Kimseye evet demedim. Kenan\'la konuşana kadar sözüm bende.', 'kararli'],
            ], degilse: [
              ['ic', 'Bu gece seçimimi kendim yaptım. Kenan gelirse ona da yüzüne söylerim.', 'mahzun'],
            ] },
          ] },
          /* Kapanış: kapıya göre tek görüntü. Kenan kapısında romantik basamak (S7): kafesteki lamba, sokakta fener;
             Kenan ekrana çıkmaz, yüz görünmez */
          /* T28 (b13_16 ana bulgu 2, Cemil T27 kararı): Kenan'ın dönüşü çoğu Kenan oyuncusuna ulaşır. Perihan'a kapıyı
             kapatan kız da (sus) fenere cevap verebilir; "buradayım" cevabında Kenan avlu kapısına kendisi gelir, lambayı
             söndüren kız kendisi iner. Yalnız feneri geri çeviren ve sabahı bekleyen (gizli yol) kız bu gece onu görmez */
          { eger: (S) => kapi(S) === 'kenan', ise: [
            /* D8: kafesteki lamba ile fener arasında işaret; Feride cevap verir.
               Oynanış T1 B7: cevap bir seçim (kandil); sakınan kız Kenan çubuğunda bedel öder.
               T29 (b13_16 B15 SES-1, SÜRÜK-3): romantik parça fenerin sahibini önceden söylemez; Kenan görününce başlar (kenanDonus) */
            ['an', 'Sokağın başında bir fener bir kez kalktı, indi, tutanın yüzü karanlıkta kaldı.'],
            /* T28 (b13_16 SÜRÜK): Kenan'ın gelişi ikindide haber olarak harcanmaz; fener bir soruyla açılır */
            /* T32 (b13_16 B15 DİYALOG-6): utanç değil kaygı */
            ['ic', 'Bir fener. Bu saatte bu sokakta kim bekler?', 'endiseli'],
            { soru: 'Fener cevap bekliyor.', secim: [
                { m: 'Lambayı bir kez kaldır: “Buradayım.”', etki: { mukaddem: 4 }, bayrak: { p15_v_fener: 'bir' }, iz: 'Lambanı bir kez kaldırdın.', adimlar: [
                  { efekt: 'kandil' },
                ].concat(kenanDonus('kenan')) },
                { m: 'Lambayı iki kez kaldır: “Sabah, avluda.”', kosul: function (S) { return b(S).p15_kenan_yol === 'gizli'; }, etki: { mukaddem: 5 }, bayrak: { p15_v_fener: 'iki' }, iz: 'Avlu için iki kez işaret verdin.', adimlar: [
                  { efekt: 'kandil' },
                  ['an', 'Fener iki kez kalktı, sokak yeniden karardı.'],
                ] },
                { m: 'Lambayı kafesten çek. Sokakta başka gözler de var.', etki: { vakar: 1 }, bayrak: { p15_v_fener: 'cek' }, iz: 'Lambanı kafesten çektin.', adimlar: [
                  ['an', 'Fener bir süre bekledi, sonra söndü.'],
                ] },
                /* Cemil T27 kararı: Kenan ekrana döner. Münevver Hanım'ın teliyle gelen Kenan'la kısa, gizli buluşma
                   (Kenan yolunun romantik basamağı): Feride'nin hamlesi (aşağı iner, sürgüyü kendi çeker), gönül artışı,
                   vurucu son satır. Kenan eşiği geçmez; konakta kimse görmez (romana ters düşmeyecek kadar kısa) */
                { m: 'Lambayı söndür, avlu kapısına kendin in.', etki: { mukaddem: 4, vakar: 1 }, bayrak: { p15_v_fener: 'in' }, iz: 'Sokağa işaret vermeden avlu kapısına indin.', adimlar: kenanDonus('feride') },
            ] },
          ], degilse: [{ eger: (S) => kapi(S) === 'yok', ise: [
            /* T28 (b13_16 OYNANIŞ): kapısız Kenan yolunda da Kenan ekranda; buluşma mesafeli (eşik yok, el yok, tek cümle).
               Seçim eklenmez (karar sayısı); ara bayrak p15_v_fener 'uzak' (yalnız bu bölüm) */
            { eger: muk, ise: [
              { muzik: 'gece' }, // Tur 34 P3: söz vermeyen gecede romantik tema yok
              ['an', 'Gece yarısı kafesin altında bir fener durdu, tutan başını kaldırdı.'],
              { bayrak: { p15_v_fener: 'uzak' } },
              { goster: ['mukaddem', 'mahzun'] },
              ['mukaddem', 'Lamba yakmadınız. Ben yine buradayım.', 'mahzun'],
              ['f', 'Bu gece kimseye söz vermedim Kenan. Size de veremem.', 'kararli'],
              { gizle: 'mukaddem' },
            ] },
            { muzik: 'sessiz', kes: true },
            ['an', 'Herkes sabahın hükmünü bekledi. Feride sabah soracağı soruyu çoktan seçmişti.'],
          ], degilse: [{ eger: (S) => kapi(S) === 'suha', ise: [
            /* T27 (SÜRÜK, SES): kanca B14'ün aynası olmasın; hekimin gecesi tehlike olarak */
            { muzik: 'suha' },
            ['an', 'Süha Bey\'in lambası sabaha kadar yandı. Konakta hasta yoktu.'],
          ], degilse: [{ eger: (S) => b(S).p15_v_rsart === 'beyoglu', ise: [
            ['an', 'Selamlıkta kırılan bardaktan sonra konak sabaha dek ses vermedi.'],
          ], degilse: [
            /* T28 (b13_16 SES): Remzi kapısının gecesi vals borcunun motifiyle */
            { muzik: 'vals_uzak' },
            ['an', 'Selamlıktan gelen kahkaha gece yarısına dek sürdü.'],
          ] }] }] }] },
          /* Kanca kartı: Feride'nin karar cümlesi (yola özel; benzetim çapaları korunur) */
          { eger: (S) => kapi(S) === 'kenan' && b(S).p15_kenan_yol === 'nikah', ise: [
            { kart: 'Babam Kenan’a razı oldu. Önüne delili ben koydum.' },
          ], degilse: [{ eger: (S) => kapi(S) === 'kenan', ise: [
            { kart: 'Üç kapı vardı. Benimki sabah namazında, avlu kapısında açılacak.' },
          ], degilse: [{ eger: (S) => kapi(S) === 'suha', ise: [
            { kart: 'Üç kapı vardı. Süha Bey\'inkini açtım, ama kendi şartımla.' },
          ], degilse: [{ eger: (S) => kapi(S) === 'remzi', ise: [
            { eger: (S) => b(S).p15_v_rsart === 'sartsiz', ise: [{ kart: 'Remzi Bey’e evet dedim. Babam sözüme hiçbir şart katmayacak.' }],
              degilse: [{ kart: 'Remzi Bey’e evet dedim. Şartımı onun evinde de söylerim.' }] },
          ], degilse: [
            { kart: 'Kimseye evet demedim. Sabah babamdan önce kendi sözümü söyleyeceğim.' },
          ] }] }] }] },
          { bolumSonu: true },
        ],
      },
    ],

    // Defter üç kısa cümle (her biri en çok 20 kelime): ne yaptım / kimle ne kaldı / sıradaki soru
    sonNotu: function (S) {
      var f = S.bayrak, c = [];
      var kapandi = (f.p15_v_secim === 'nikah' && f.p15_kapi !== 'kenan') || (f.p15_v_secim === 'gizli' && f.p15_kapi !== 'kenan') ||
        (f.p15_v_secim === 'suha' && f.p15_kapi !== 'suha');
      // GPT T26 (öncelik 5): defter kullanılan belgeyi ve konan şartı hatırlar
      var madamla = f.p15_v_koz === 'madam' || f.p15_v_koz === 'yazi';
      /* T32 (b13_16 B15 OYNANIŞ-2): fısıltıyı duyunca geri alınan evet kapanan kapı değil, Feride'nin kararı */
      if (f.p15_v_fisilti === 'ret') c.push('Süha Bey\'e şartımla evet dedim, fısıltısını duyunca evetimi babamın önünde geri aldım.');
      else if (kapandi) c.push('Kendi kapımı açmaya kalktım, hazırlığım ya da babamın kulağı yetmedi.');
      else c.push({
        kenan: f.p15_kenan_yol === 'nikah'
          ? (madamla ? 'Babama sahte mektubu Madam\'ın tanıklığıyla çürüttüm, ' : 'Babama sahte mektubun başka elden çıktığını gösterdim, ') +
            (f.p15_baba === 'ikna' ? 'Kenan\'ın kapısını onun rızasıyla açtım.' : 'Kenan\'ın kapısı sabaha aralık kaldı.')
          : 'Münevver Hanım\'ın arabasını seçtim, babama bir şey söylemedim.',
        suha: {
          cik: 'Süha Bey\'e evet dedim, şartım babamın önünde: Perihan Hanım\'ın evinden çıkacak.',
          anlat: 'Süha Bey\'e evet dedim, şartım babamın önünde: Perihan Hanım\'ı ona kendisi anlatacak.',
          diz: 'Süha Bey\'e evet dedim, diz çöktüğü sabahı babamın önüne koydum.',
        }[f.p15_v_sart] || 'Süha Bey\'e evet dedim, şartımı babamın önünde koydum.',
        remzi: {
          ev: 'Remzi Bey\'e evet dedim, şartım ayrı ev.',
          sefik: 'Remzi Bey\'e evet dedim, Şefik\'in mektebini onun sözüne bağladım.',
          beyoglu: 'Remzi Bey\'e evet dedim, Beyoğlu\'ndaki evi kapatması şartıyla.',
          sartsiz: 'Babamın önünde Remzi Bey’e şartsız evet dedim.',
        }[f.p15_v_rsart] || 'Babamın önünde Remzi Bey’e evet dedim.',
        yok: 'Bu gece hiçbir kapıya evet demedim, sözümü sabaha sakladım.',
      }[f.p15_kapi] || 'Yatsıda babamın önünde durdum.');
      var baba = { ikna: 'babam ikna oldu', kararsiz: 'babam kararsız', karsi: 'babam karşımda' }[f.p15_baba] || 'babam sustu';
      // 'yok'ta sözleşme p15_hazir 0'dır; defter yine de gün boyu yapılan hazırlığı söyler (bayrak değişmez)
      var dayanaklar = [];
      var kapilar = [muk(S) ? 'kenan' : 'suha', 'remzi'];
      kapilar.forEach(function (k) { (HAZIRLIK[k] || []).forEach(function (h) { if (h[0](S) && !dayanaklar.includes(h[1])) dayanaklar.push(h[1]); }); });
      c.push(dayanaklar.length ? veBagla(dayanaklar).replace(/^./, function (x) { return x.toLocaleUpperCase('tr'); }) + ' elimdeydi; ' + baba + '.' : 'Babam önümdeki boş masaya baktı.');
      c.push({
        kenan: f.p15_v_donus ? 'Kenan bu gece İstanbul\'da, sabahı birlikte mi karşılayacağız?' : 'Sokaktaki fener Kenan mıydı, sabahı birlikte mi karşılayacağız?',
        suha: ({ kabul: 'Süha Bey\'in şartına şartla karşılık verdim, gerekirse ondan dönebilecek miyim?',
          sakla: 'Süha Bey\'in fısıltısını kendime sakladım, gerekirse ondan dönebilecek miyim?' })[f.p15_v_fisilti] ||
          'Süha Bey\'in fısıltısını babama duyurdum, gerekirse ondan dönebilecek miyim?',
        remzi: f.p10_sahit === 'remzi' && f.p10_teslim !== 'gizli' ? 'İskelede benim için söylediklerini evinde de söyler mi?' : 'O evde sözümü kendim söyleyebilecek miyim?',
        yok: f.p15_v_gece === 'sus' ? 'Lambamı söndürürken babama hâlâ bir ad vermemiştim.' : 'Sabahı bekliyorum, babama hâlâ bir ad vermedim.',
      }[f.p15_kapi] || 'Sabah kim karar verecek?');
      return c.join(' ');
    },
    /* T28b (ORTAK motor: anRet): eli uzatmayıp sözle karşılayan kız dönüş anını "kaçırmış" sayılmaz */
    /* T29c (GPT özet P8): dönüş anı yalnız fenere "buradayım" ya da "inerim" diyen Kenan kapısında sunulur; feneri geri
       çeviren ya da başka kapıyı seçen kızda "kaçırdığın an" listelenmez (motor anUygun) */
    anUygun: { an_kenan_donus: function (S) { return S.bayrak.p15_v_fener === 'bir' || S.bayrak.p15_v_fener === 'in'; },
      an_fisilti_lamba: function (S) { return S.bayrak.p15_v_secim === 'suha' && hazirSay(S, 'suha') > 0; },
      an_uc_kapi_suha: function (S) { return S.bayrak.p15_v_secim === 'suha'; } },
    anRet: { an_kenan_donus: function (S) { return S.bayrak.p15_v_donus === 'soz'; },
      an_kenan_donus_soz: function (S) { return S.bayrak.p15_v_donus === 'el'; },
      /* T29: üç kapının iki türü (kâğıtlı / eli boş) aynı an; biri açıldıysa öbürü "kaçırılan" sayılmaz */
      an_uc_kapi: function (S) { return ['an_uc_kapi_bos', 'an_uc_kapi_suha'].some(function (x) { return (S.cizimler || []).indexOf(x) >= 0; }); },
      an_uc_kapi_bos: function (S) { return ['an_uc_kapi', 'an_uc_kapi_suha'].some(function (x) { return (S.cizimler || []).indexOf(x) >= 0; }); },
      an_uc_kapi_suha: function (S) { return ['an_uc_kapi', 'an_uc_kapi_bos'].some(function (x) { return (S.cizimler || []).indexOf(x) >= 0; }); } },
    anIpuclari: {
      an_yelpaze: 'Her yolda: görücü salonunda Remzi Bey\'in annesi kırk liralık yelpazeyi uzatır.',
      an_uc_kapi: 'Yatsıda mabeyn kapısında, babanın lambası önünde kâğıdını gösteren kız.',
      an_uc_kapi_bos: 'Yatsıda mabeyn kapısında, eli boş ama dik duran kız.',
      an_uc_kapi_suha: 'Süha Bey\'in kapısını yazılı şartla açan kız, hekim aralık kapıda.',
      an_fisilti_lamba: 'Süha Bey\'in kapısında, lambanın gölgesinde fısıltı.',
      an_kenan_donus_soz: 'Avlu kapısının aralığında Kenan\'a elini değil sözünü verirsen.',
      an_kenan_donus: 'Kenan kapısında: gece avlu kapısına inip Kenan\'a elini uzatırsan.',
    },
    // Kanca yola özel (motor.js, kanca işlevse durumla çağırır)
    // Sürükleyicilik T1 (S1): kart Feride'nin kararı; "Sırada" onu tekrar etmez, yola göre tehdidi ya da bedeli söyler
    siradaki: { ad: 'Yüzleşme ve Son', kanca: function (S) {
      var f = S.bayrak;
      /* T28 (b13_16 SÜRÜK): Kenan yolunda dönüş bölümün vurucu anı; kanca ona kesilir */
      if (f.p15_kapi === 'kenan' && f.p15_v_donus) return 'Kapının öbür yanındaydı. Bu kez onu ben çağıracağım.';
      if (f.p15_kapi === 'kenan') return f.p15_kenan_yol === 'nikah' ? 'Delil babamın elinde. Bu konakta kâğıtlar kolay yanar.'
        : 'Sokaktaki feneri benden başka biri de gördü.';
      if (f.p15_kapi === 'remzi') return muk(S) ? 'Münevver Hanım Selanik\'e tel çekmişti. Evetimi Kenan\'dan önce selamlık duydu.'
        : 'Evetimi selamlık kutladı. Süha Bey tek kelime etmedi.';
      /* T28 (b13_16 SÜRÜK 10'a 1): kapısız dalın kancası keskinleşti */
      /* T29 (b13_16 B15 OYNANIŞ-2): kanca fısıltının akıbetine göre */
      if (f.p15_v_fisilti === 'ret') return 'Evetimi babamın önünde geri aldım. Süha Bey bunu yutmaz.';
      if (f.p15_kapi === 'suha' && f.p15_v_fisilti === 'kabul') return 'Onun şartına kendi şartımı fısıldadım. İkimiz de unutmayacağız.';
      if (f.p15_kapi === 'suha' && f.p15_v_fisilti === 'sakla') return 'Fısıltısını babama söylemedim. O sırrı şimdilik ikimiz taşıyoruz.';
      return f.p15_kapi === 'suha' ? 'Fısıltısını babamın önünde söyledim. Süha Bey bunu unutmaz.'
        : 'Babam sabah bir ad söyleyecek. Perihan Hanım onu çoktan seçti.';
    } },
  };
})();

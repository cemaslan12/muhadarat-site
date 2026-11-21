/* =========================================================================
   PİLOT — YENİ BİÇİMDE 4. BÖLÜM: PAKT  (bölüm no 104)
   İskelet: notlar/bolum1_pilot_iskelet.md (4. bölüm: Pakt — Leyla, Münevver Hanım, kızların planı;
     kanca: Şefik'in cebindeki not)
   Romandan (s. 101–112): sarhoş Kenan yalanı Sait'e ulaşır, Süha doğrular; Nabi Leyla için
     Feride'den aracılık ister ("o kadar zengin kız sevilmez mi?"); Leyla'yla Eugène Sue sohbeti,
     Leyla'nın tuzağa düştüğü anlaşılır. Öne çekilen: Münevver'in "inandı mı?" sorusu (s. 138–141)
     ve Leyla'nın evinde gizli buluşma. Oyun için ek: kahve tepsisi, Süha'yla gece pazarlığı,
     kızların paktı (Kleypas kalıbı), Remzi'nin getirdiği senet (alacaklı kendisi), kapıdaki arabada Kenan
     (merdiven: 7 bahaneli temas, 8 geri çekilme), dönüş arabasında Süha, Şefik'in cebindeki not.
   Doğrusal bölüm (dogrusal: true); pilot3 ile aynı kalıp. Zaman: gerdanlık gününün ertesi (sabah
     kahvesi, ikindi Leyla'lar, gece). Her yolda 13–15 karar (kıyafet ekranı dahil; gece "Bedeli ne?"
     alt kararı alan sofaya geç iner, tepsi kararı ona düşmez).
   Önceki bölümlerden okunanlar (değiştirilmez): p_rota, p_yalan, p_reftar, p3_son, p3_haberci,
     p3_nimet_risk, p3_josephine, p3_josephine_kulak, p3_giydiren, p3_sabah, p3_sari, p3_remzi,
     p3_remzi_goruldu, p3_mabeyn_tanik, p3_aksam_tanik, p3_aksam, p3_kapi, p3_soz, p3_kilit,
     p3_gerdanlik, p3_madalyon, kozlar (kapı/yüzük/kâğıt).
   Bayraklar: p4_sabah (gün döndü), p4_gece (dogru/pazarlik/sus: Süha'ya gece verilen cevap),
     p4_bedel (kabul/sart/ret: "Bedeli ne?" sorusundan sonra şarkı teklifine verilen karar; yoksa kabul sayılır),
     p4_sir (sakli/anlatti/mukaddem/kapi/korku: "sır yok" maddesinin ilk uygulaması; Tur 28b 'anlatti' = yüzüğü hemen
       söyledi, p4_fevkiye 'koz' de yazılır), p4_nabi_dustu (Tur 28b: senet babaya ulaştı; şahit düştü, hüküm ayrı),
     p4_donus (yalniz/dadi/gorunur: sabah yalnız gidenin dönüş kararı; Leyla'nın maddesi),
     p4_tepsi (aldi/kafes/sefik), p4_hamle (beyoglu/borc/koz/sustu), p4_yalan (curudu/askida/tuttu),
     p4_nabi (igne/rol/tehdit), p4_eskort (reftar/nimet/josephine/yalniz), p4_fevkiye (okudu/uyardi/koz),
     p4_pakt (sir/mektup/calibe), p4_munevver (inanmadim/kirici/gelsin), p4_plan (kahve/remzi/mukaddem/
     kendi/kahve_kendi; Tur 30: 'kendi' = "Babamı ben razı ederim", 'kahve_kendi' = "Kahvehanedeki ağızları ben kapatırım"), p4_muk (basamak/eldiven/uzak), p4_geri (gorun/kandil/bekle), p4_tanik, p4_remzi (aldi/baba/
     cep), p4_suha (bilek/perde/kagit/soru/ret), p4_suha_pakt (kabul/sart/ret), p4_not (oku/izle/sor).
   Yeni kozlar: 'Nabi Bey'in mektupları' (Hatice taşıyor; kahvede ya da serbest vakitte mutfakta),
     'Nabi Bey'in senedi' (Remzi verirse).
   Tur 27: akşam serbest vakti kalktı; yerine zorunlu, kısa "babam sofada" sahnesi (AKSAM_BABA; senet ve Remzi'nin
     babaya götürdüğü kâğıt p4_yalan'ı 'curudu' yapar). Gece notunun her dalı bir karşı hamle bırakır: p4_karsi
     (iz/bos/leyla/yazi; 5. bölüm okuyabilir). Yeni an kimlikleri başta (ANLAR27).
   Serbest vakit (1 adet, ikindiye kadar; kaçırılabilir; akşamki p4_v_baba artık zorunlu sahnede): p4_v_zarf (mutfakta Hatice'nin zarfı → mektup kozu, Leyla'da),
     p4_v_madam (Süha'nın "Madame"ı → Süha'nın notunda), p4_v_nazli (ordu/sus → kapıda ya da arabada),
     p4_v_baba (inan/el), p4_v_yemek (girdi/sakla). 3. bölümden p3_v_gul gül yağlı notta karşılık bulur.
     Plan modunda yürünür (plan: 'konak'); sessiz mabeyn geçişi: S.gizliGidilen['104:mabeyn_merdiven'].
   Küçük soru (bölüm içinde kapanır): yalan babamın kahvesinde tutacak mı? → p4_yalan.
   Anlatı denetimi T1 (17 Kasım 2026; notlar/denetim/anlati_t1_birlesik.md): açılış anlatıcı sesinde; her mekân/zaman
     değişiminde ara sayfa, "Onun gözünden" ara sayfada; kişi girişleri ['an'] ile; "Leyla'ların Konağı" tam ekran
     anlatısı ara sayfaya döndü (bölümde tek anlati: açılış).
   Sürükleyicilik T1 (17 Kasım 2026; notlar/denetim/suruk_t1_birlesik.md): siradaki.kanca yola özel (tehlike); sabah
     açılışı kısaldı (ilk seçim öne); kapıda önce Remzi'nin senedi, sonra Kenan; kartlar kapanış satırını yinelemez.
   Gönül kuralı: puan = adayın ilgisi + Feride'nin yakınlaşması. Yalnız uzaklaştıran cevap puan vermez;
     adayın tepkisi o anda bir satırla görünür.
   Oynanış T1 (18 Kasım 2026; notlar/denetim/oynanis_t1_birlesik.md Aşama B): kahvede kapı/yüzük kozu kozGerek ile
     kilitli görünür ve kullanılınca yanar (törende yakan burada kilitli görür); Leyla'ya yüzük, Süha'ya kâğıt ve
     babaya senet görünür kilitli seçenek (bu üçü yanmaz: bilgi dostta, kâğıt ve senet 5–9. bölümde okunur).
     iz satırları; eksi gönül (Münevver'e "kırıcı" Kenan −3, Remzi'nin senedini cebine iade −3, Süha'ya pazarlık
     reddi −3). baba_guven ≥ 60 kahve tartısına +1 ve hükmün satırı; calibe_suphe ≥ 4 refakat satırı.
     Keşifler: p4_k_zarf (Leyla'nın yastığı; Süha yolunda da mektup kozu), p4_k_sise (hekim çantası → anlaşma, gece notu);
     3. bölümün p3_k_pencere'si arabadaki kitapta okunur. Gece yolu açılışı mabeyn kapısı fonunda (oda içi değil).
     Yeni değer: p4_v_baba 'senet'.
   GPT T26 Süha (18 Kasım 2026; ortak/gpt_t26_suha.md B4): gece pazarlığının şarkısı akşam salonda oynanır (SARKI; kapı
     aralık, tanık Hatice, sınırı Feride koyar); Leyla'nın maddesi refakatçiye göre; Leyla'ya yüzük: koz eldeyse ◆,
     harcanmışsa rozetsiz "bildiğin" (boş "Kozun:" etiketi yok); kapı kozu kilidi pilot3 kuralıyla (kapiIkiz); kâğıt ve
     senet seçeneklerinde neden yanmadığını söyleyen iz. Münevver'e verilen cevabın Kenan gönlü kâhya cevabı arabaya
     taşıyınca (Kenan yolu); Süha yolunda bildirim yok. Okunmayan notun "Sırada"sı bilinene dayanır. 3. bölümden
     p3_sari_mangal ('yazi') gece notunda okunur. Madam ve araba satırlarında Süha/Madam sesi sadeleşti.
   ========================================================================= */
window.BOLUMLER = window.BOLUMLER || {};

(function () {
  var V = window.OYUN_VERISI;
  // Yeni mekânın kendi görseli gelene kadar en yakın eski fon
  var YEDEK = { fevkiye_kapi: 'konak_kapi' };
  Object.keys(YEDEK).forEach(function (id) {
    var m = V.mekanlar[id];
    if (m && !m.arkaplan && V.mekanlar[YEDEK[id]]) m.arkaplan = V.mekanlar[YEDEK[id]].arkaplan;
  });
  /* Tur 27 (B4 görsel; GPT B4-G1/G2): yeni an kimlikleri. Kayıt burada; resmi gelene kadar { cizim } adımı sessizce
     atlanır (motor anResmi null). Üretim: notlar/denetim/t27_uretim_b01_04.md */
  var ANLAR27 = {
    an_basamak: { ad: 'Arabanın basamağında bir karış', alt: 'Pakt · Kenan' },
    an_bedel: { ad: 'Lamba arkada, yüz gölgede', alt: 'Pakt · Süha' },
    an_sarki: { ad: 'Aralık kapı, bir şarkı', alt: 'Pakt · Süha' },
    an_araba_nimet: { ad: 'Uyuyan dadının karşısında', alt: 'Pakt · Süha' },
    an_araba_josephine: { ad: 'Madam pencereye bakarken', alt: 'Pakt · Süha' },
    an_araba_dadi: { ad: 'Durmayan tespih', alt: 'Pakt · Süha' },
    an_araba_gorunur: { ad: 'Açık perdede bir karış', alt: 'Pakt · Süha' },
    /* Tur 28 (B4 görsel 5): yüzük/uyarı dalında gülen iki kız resmi gösterilmez; kendi anı (üretimde) */
    an_pakt_yuzuk: { ad: 'Kapağı iki eliyle', alt: 'Pakt · Leyla' },
    /* Tur 28b (kök 8; GPT G4-2): herkesin önündeki şart, aralık kapılı mahrem şarkıyla aynı resmi paylaşmaz (üretimde) */
    an_sarki_salon: { ad: 'Herkesin önünde bir şarkı', alt: 'Pakt · Süha' },
  };
  if (V.cizimler) {
    Object.keys(ANLAR27).forEach(function (id) {
      (ANLAR27[id].tek ? [''] : ['', '_nisan_gosterisli', '_nisan_yadigar']).forEach(function (c) {
        if (!V.cizimler[id + c]) V.cizimler[id + c] = { ad: ANLAR27[id].ad, alt: ANLAR27[id].alt };
      });
    });
  }

  var KOZ = 'Hatice ile Nabi Bey', YUZUK = 'Hatice\'nin yüzüğü', KAPI = 'Gece açılan arka kapı', KAGIT = 'Yanan kâğıt';
  var MEKTUP = 'Nabi Bey\'in mektupları', SENET = 'Nabi Bey\'in senedi';
  var b = function (S) { return S.bayrak; };
  var muk = function (S) { return S.bayrak.p_rota === 'mukaddem'; };
  var var_ = function (S, k) { return (S.kozlar || []).indexOf(k) >= 0; };
  var kapiKoz = function (S) { return var_(S, KOZ) || var_(S, KAPI); };
  var yuzukKoz = function (S) { return var_(S, YUZUK) && !kapiKoz(S); };
  // Hatice–Nabi işini Feride kendi gözüyle ya da Nimet'ten biliyor mu (koz harcanmış olsa da bilgi durur)
  // Oynanış T1 (B1): törende ya da kahvede harcanan koz da bilgiyi silmez
  var reftarBilgi = function (S) { return b(S).p_reftar === 'izledi' || var_(S, YUZUK) || var_(S, KAPI) || !!b(S).p3_koz_toren || b(S).p4_hamle === 'koz'; };
  /* Oynanış T1 (B1): kahvede kapı kozunu harcayan elindekini yakar (önce Nimet'in tanıklığı, yoksa düğündeki gözlem) */
  var KAPI_YAK = { eger: function (S) { return var_(S, KAPI); }, ise: [{ kozYak: KAPI }], degilse: [{ kozYak: KOZ }] };
  var gizliKilit = function () { return false; };
  /* GPT T26 Süha (öncelik 1–2; pilot3 ile aynı kural): arka kapıyı hiç görmemiş olan kapı kilidini görmez; düğündeki
     gözlemini harcamış olan ikiz kilitte nedenini okur ("bu kozu harcadın"). */
  var harcandi = function (S, k) { return !!(S.kozAcik && S.kozAcik[k] !== undefined); };
  var kapiBilgi = function (S) { return b(S).p_reftar === 'izledi' || kapiKoz(S) || harcandi(S, KOZ) || harcandi(S, KAPI); };
  var kapiYalnizKoz = function (S) { return !kapiKoz(S) && harcandi(S, KOZ) && !harcandi(S, KAPI); };
  var kapiKilit = function (S) { return kapiBilgi(S) && !kapiYalnizKoz(S); };
  var kapiIkiz = function (m) { return { m: m, kosul: function () { return false; }, kozGerek: KOZ, kilitGoster: kapiYalnizKoz }; };
  // Yüzük sırrını taşıyan bir koz hâlâ elde mi (yoksa yalnız bilgi kalmıştır)
  var yuzukElde = function (S) { return var_(S, YUZUK) || var_(S, KAPI) || var_(S, KOZ); };
  /* Tur 27 (GPT B4-O1): 2. bölümde babanın önünde kendi düzelttiği yalan (p2_yalan 'itiraf') yeni yalanla aynı tartılmaz */
  var eskiYalan = function (S) { return !!b(S).p_yalan && b(S).p2_yalan !== 'itiraf'; };
  var itirafli = function (S) { return !!b(S).p_yalan && b(S).p2_yalan === 'itiraf'; };
  var yalanci = function (S) { return eskiYalan(S) || b(S).p3_sabah === 'yalan'; };
  var konustu = function (S) { return !!b(S).p4_hamle && b(S).p4_hamle !== 'sustu'; };
  // Gece kapısındaki pazarlık tuttu mu (eski kayıtta p4_bedel yoksa kabul sayılır)
  var anlasti = function (S) { return b(S).p4_gece === 'pazarlik' && b(S).p4_bedel !== 'ret'; };
  // Süha yolunda dönüş arabası: sabah "Peki" denmişse kapıda ayrıca seçilir
  var suhaDogruladi = function (S) { return !anlasti(S) && b(S).p4_gece !== 'dogru' && b(S).p4_gece !== 'sus'; };
  var donus = function (S) { return b(S).p4_eskort === 'yalniz' ? (b(S).p4_donus || 'yalniz') : null; };
  /* Tur 28b (kök 1–2): p_rota yalnız kimle karşılaşıldığıdır. Süha'ya açıkça konmuş sınır (1–4. bölümdeki ret
     seçenekleri) zorunlu iç seste gizli bir evete çevrilmez */
  var suhaSinir = function (S) {
    var f = S.bayrak;
    return !!(f.p1_suha_sinir || f.p2_suha_sinir || f.p2_hitap === 'sinir' || f.p2_kutu === 'iade' || f.p3_v_bahce === 'ret'
      || f.p3_aksam === 'gitti' || f.p4_bedel === 'ret' || f.p4_suha === 'ret' || f.p4_suha_pakt === 'ret');
  };
  /* Tur 30 (karşılaşma ≠ istek): Süha'yla oyuncunun kendi seçtiği bir yakınlık var mı (bilek, sayfa, ense kilidi, aynadaki
     sır, gece pazarlığına kabul, arabaya yalnız binmek). Zorunlu iç seslerdeki çekim yalnız buna bağlanır. */
  var suhaYakin = function (S) {
    var f = S.bayrak;
    return f.p_bilek === 'verdi' || f.p2_sayfa === 'suha' || f.p3_kilit === 'izin' || f.p3_sari_son === 'sir'
      || f.p4_bedel === 'kabul' || f.p4_eskort === 'yalniz';
  };
  /* Tur 28b (kök 4; GPT O4-1): senet görgü değil, çıkar delilidir. Nabi'nin şahitliğini düşürür; Kenan'ın o gece nerede
     olduğunu kanıtlamaz. Tek şahit Nabi ise iddia ayakta kalmaz (curudu); hekim sabah "içmez" dediyse iki ses yan yana
     iddiayı kapatır (curudu); hekim "gördüm" dediyse ikinci şahit ayrıca dinlenene dek askıda (tuttu → askida).
     p4_nabi_dustu: senet babaya ulaştı (özet ve kapanış satırı okur). */
  var SENET_HUKUM = [
    { bayrak: { p4_nabi_dustu: true, p4_yalan_aksam: true } },
    { eger: suhaDogruladi, ise: [
      { bayrak: { p4_yalan: 'askida' } },
      /* Tur 30 (B4 sürük 2; ritim): hüküm Sait'te kalır, iç ses çıktı (kapanış satırı "hekiminki bekledi" der) */
      /* Tur 32 (B4 anlatı 1): mahkeme dili yerine babanın ağzı */
      ['sai', 'Borçlu adam borcunu konuşur kızım. Süha Bey\'i ayrıca dinleyeceğim.', 'ciddi'], // Tur 29 (B4 diyalog 3)
    ], degilse: [
      { bayrak: { p4_yalan: 'curudu' } },
      { eger: (S) => b(S).p4_gece === 'dogru', ise: [
        /* Tur 33 (B4 diyalog 10'a): kâtip dili yerine babanın ağzı */
        ['sai', 'Nabi gördüm dedi, Süha Bey içmez dedi. Borçlu adamı bu sofrada bir daha dinlemem.', 'ciddi'],
      ], degilse: [
        ['sai', 'Borçlu bir adamın tek sözüyle kimsenin adını kirletmem. Nabi\'yi bu sofrada bir daha dinlemem.', 'ciddi'],
      ] },
    ] },
  ];

  // Kahvedeki yalanın tartısı: önceki gece, Süha'nın sözü, Feride'nin hamlesi
  var tarti = function (S) {
    var f = S.bayrak, p = 0;
    if (f.p3_son === 'baba') p += 1;
    /* Tur 28 (B4 oynanış 5): Kenan yolunda gece sahnesi yok; ceza yalnız Süha yolunun seçiminden */
    if (anlasti(S)) p += 2; else if (f.p4_gece === 'sus' || f.p4_bedel === 'ret' || (!f.p4_gece && !muk(S))) p -= 1;
    if (f.p4_tepsi === 'sefik') p += 1;
    /* Tur 27 (B4 oynanış 1): görünen bedel ödeyen hamle (koz yanar, borç itibar düşürür) görünen sonuç alır */
    if (f.p4_hamle === 'beyoglu') p += 1;
    if (f.p4_hamle === 'koz') p += 2;
    if (f.p4_hamle === 'borc') p += 2;
    if (konustu(S) && yalanci(S)) p -= 1;
    // Oynanış T1 (B6): babanın güveni eşiği (60) kahvede kızın sözüne ağırlık katar
    if ((S.v.baba_guven || 0) >= 60) p += 1;
    return p;
  };
  /* Tur 29 (B4 oynanış 1–2; şüphe ≠ hüküm): tartı ağırlık verir, hüküm delil ister. Kahvede "çürüdü" yalnız
     itiraf (koz: Nabi "benzetmişimdir" der), bağımsız tanık (hekim "Kenan içmez" der) ya da çıkar delili + tek şahit
     (borç sorusu; hekim doğrulamadı) varken. Beyoğlu sorusu, Şefik'in sözü ve önceki gece yalnız şüphe/ağırlıktır. */
  var delil = function (S) {
    var f = S.bayrak;
    if (f.p4_hamle === 'koz') return true;
    if (f.p4_gece === 'dogru') return true;
    return f.p4_hamle === 'borc' && !suhaDogruladi(S);
  };

  /* ---- Serbest vakitler (motor.js serbestVakit). Mini sahneler kaçırılabilir; bayraksız akış bozulmaz. ---- */
  // 1) Kahveden sonra, ikindiye kadar: mutfakta Hatice'nin zarfı, Madam'ın "Madame"ı, bahçede Nazlı
  var VAKIT_SABAH = {
    ad: 'İkindiye kadar', hak: 2,
    hedef: { mekan: 'fazila_oda', metin: 'İkindiye Leyla\'lara gidilecek. Giyinmek için odana çık.' },
    mekanlar: ['mutfak', 'josephine_oda', 'konak_bahce', 'fazila_oda'],
    yerler: {
      mutfak: { kisi: 'reftar', ifade: 'somurtkan', eylem: 'önlüğe bak', ipucu: 'Mutfaktan ütü kokusu geliyor, Hatice yalnız, önlüğünde bir şey var (eşya).',
        adimlar: [
          'Mutfakta Hatice ütü başında. Zarfı buhara tutmuş, yapışkanını yumuşatıyor.',
          'Beni görünce zarfı önlüğüne soktu. Köşesinde lacivert mürekkep vardı.',
          ['reftar', 'Bir emriniz mi vardı küçük hanım?', 'korkmus'],
          { eger: (S) => var_(S, MEKTUP), ise: [
            /* Tur 17: mektubu zaten biliyorsa aynı bilgiyi yeniden vermez; Hatice'ye küçük bir soru, yeni ayrıntı */
            /* Diyalog T1 (D5): delil anında kararlı yüz; öfke kavgaya kalır */
            ['ic', 'Nabi Bey\'in mektubu. Bilmediğim tek şey, kaçıncısı olduğu.', 'kararli'],
            ['f', 'Kaçıncısı bu Hatice?', 'kararli'],
            ['reftar', 'Üçüncüsü küçük hanım. Siz varmadan Leyla Hanım\'ın elinde olur.', 'somurtkan'],
            ['ic', 'Üç mektup. Leyla bana birini bile anlatmadı.', 'mahzun'],
            { bayrak: { p4_v_hatice: 'sayi' } },
          ], degilse: [
            ['ic', 'Lacivert mürekkep. Nabi Bey\'in hokkası lacivert.', 'saskin'],
            { koz: MEKTUP, kaynak: 'Zarfı kendim gördüm, alıcısı tahmin', alt: 'Hatice önlüğünde lacivert mürekkepli bir zarf taşıyor. Nabi Bey\'in hokkası lacivert. Leyla\'ya gidiyor olmalı.' },
          ] },
          { bayrak: { p4_v_zarf: true } },
        ], bos: 'Hatice ütüsünü bırakmadı, başını da kaldırmadı.' },
      josephine_oda: { kisi: 'josephine', ifade: 'ana', eylem: 'konuş', ipucu: 'Madam\'ın kapısı açık, kırmızı kalemle bir şey işaretliyor (konuşma).',
        adimlar: [
          'Madam penceresinin önünde, Şefik\'in defterine kırmızı kalemle notlar düşüyor.',
          /* Diyalog T1 (4.10, 4.11; ses C3): Madam'ın Türkçesi kırık; "Madame" ipucu yalnızlığa bağlanır (gece notu) */
          /* Tur 27 (B4 diyalog 5): Madam Türkçe deyim kullanmaz; yeni öğrendiği sözcüğü heceler */
          ['josephine', 'Sofada bir kelime çok söylendi. Fransızcası {i}calomnie{/i}, Türkçesi… if-ti-ra?', 'endiseli'],
          /* GPT T26 Süha (B4 D1): yeni gelen Madam evin kâğıtlarını okuyan araştırmacıya dönmez; küçük, doğru bir gözlem */
          ['josephine', 'Ben bütün sözü anlamadım. Ama merdivende Nabi Bey\'in eli tırabzanı sıktı.', 'endiseli'],
          ['josephine', 'Benim dilimde bir hanıma “Madame” denir. Hekim, Perihan Hanım’a bunu yalnızken söylüyor.', 'endiseli'],
          ['ic', 'Yalnızken ona “Madame” diyormuş.', 'saskin'],
          { etki: { josephine: 1 } }, { bayrak: { p4_v_madam: true } },
        ], bos: 'Madam defterlere gömülmüş, kırmızı kalemi kulağında.' },
      konak_bahce: { kisi: 'mefharet', ifade: 'ana', eylem: 'konuş', ipucu: 'Nazlı bahçede salıncakta, bir şey saklıyor gibi (konuşma).',
        adimlar: [
          'Nazlı incirin dalındaki salıncakta. Beni görünce ayaklarını yere sürüp durdu.',
          ['mefharet', 'Annem bir şey dedi. Sana söylemem.', 'ana'],
          { soru: 'Nazlı dudağını büküp bekliyor.', secim: [
            { m: 'Saçını ör: “Söylemezsen örgü yarım kalır.”', bayrak: { p4_v_nazli: 'ordu' }, adimlar: [
              'Saçını örmeye başladım. Yarısında durdum.',
              { eger: muk, ise: [
                ['mefharet', 'Annem dedi ki Kenan abi bugün Leyla ablaların sokağından geçecekmiş.', 'muzip'],
              ], degilse: [
                ['mefharet', 'Annem Süha dayıya dedi ki: “Dönüşte yolu uzat.”', 'muzip'],
              ] },
              ['ic', 'Nazlı casus. Ama örgüsü benim elimde.', 'tebessum'],
            ] },
            { m: '“Söyleme. Ben de sana söylemem.”', bayrak: { p4_v_nazli: 'sus' }, adimlar: [
              ['mefharet', 'Neyi? Neyi söylemezsin?', 'saskin'],
              ['ic', 'Merak, Nazlı\'nın tek zayıf yeri. Akşama kadar peşimde döner.', 'tebessum'],
            ] },
          ] },
        ], bos: 'Nazlı salıncakta, dilini çıkardı.' },
    },
    bitis: [['an', 'Öğle ezanı okundu. Nimet ikindi için feraceyi ütüleyip askıya astı.']],
  };
  /* 2) Akşam, eve dönünce. Tur 27 (B4 sürük 1, oynanış 2–3): serbest vakit yerine tek, zorunlu, kısa sahne: babam
     sofada. Bölümün sorusunu (yalan tutacak mı?) Feride'nin delili kapatır: senedi gösteren ya da Remzi'yle babaya
     yollayan kızda p4_yalan 'curudu' olur (5–6. bölüm okur). Yemek odasındaki kulak misafirliği tek satıra indi;
     gece notu bölümün tek doruğu kalır. p4_v_baba aynen (inan/el/senet); p4_v_yemek artık yazılmaz (sonra okunmuyor). */
  var AKSAM_BABA = [
    { muzik: null },
    /* Kişi ve yer ara sayfada (13 satır sınırı; şarkı oynanan yolda salondan sofaya geçiş) */
    /* Tur 29 (13 satır): kahvede delilsiz hüküm askıda kalınca senet basamağı daha çok yolda burada oynanır; ara tek satır */
    { ara: { mekan: 'konak_sofa', yer: 'Sofa · akşam', satirlar: [
      'Sait Efendi sofada yalnızdı, lambayı kısmış tespihini çekiyordu. Yemek odasından Perihan Hanım\'ın kardeşine fısıldayan sesi geliyordu.',
    ] } },
    { goster: ['sai', 'ciddi'] },
    /* Tur 28 (B4 oynanış 2; GPT S4-1): Münevver'e verilen planın aynı akşamki haberi */
    /* Tur 29 (13 satır): Remzi senedi babaya götürdüyse baba yalnız onu anar (iki haber satırı art arda gelmez) */
    { eger: (S) => S.bayrak.p4_plan === 'kahve' && S.bayrak.p4_remzi !== 'baba', ise: [
      ['sai', 'Münevver Hanım\'ın kâhyası Hacı Kâmil\'in kahvehanesine uğramış. Kâmil sustu.', 'ciddi'],
    ], degilse: [{ eger: (S) => S.bayrak.p4_plan === 'remzi' && S.bayrak.p4_remzi !== 'baba', ise: [
      ['sai', 'Münevver Hanım haber yolladı, Nabi Rıfkı\'nın oğluna borçluymuş. Kâğıdını görmeden bu iş kapanmaz kızım.', 'ciddi'],
    ] }] },
    { eger: (S) => S.bayrak.p4_remzi === 'baba', ise: [
      /* Tur 27 (B4 oynanış 3): "Babama götürün" seçiminin karşılığı */
      /* Tur 28b (13 satır): babanın sorusu ve Feride'nin cevabı tek satırda; hüküm basamağı SENET_HUKUM'da */
      ['sai', 'Rıfkı’nın oğlu senedi getirince önce imzaya baktım. Nabi’nin eli. İyi etmişsin kızım.', 'ciddi'],
      /* Tur 28 (GPT A4-2): çözümün zamanı ayrı tutulur (defter "sabah" demez). Tur 28b: şüphe–hüküm basamağı SENET_HUKUM'da */
      { eger: (S) => S.bayrak.p4_yalan !== 'curudu', ise: SENET_HUKUM },
    ], degilse: [
      /* Anlatı denetimi T2 (b4_5_6 4.9): kahvede susan kızın yalanı da çürüyebilir; baba duyduğunu değil gördüğünü anar */
      { eger: (S) => S.bayrak.p4_yalan === 'curudu', ise: [{ eger: (S) => S.bayrak.p4_hamle === 'sustu', ise: [
        ['sai', 'Sabah kahvede sustun ama gözünü indirmedin. Annen de öyle susardı.', 'gulumser'],
      ], degilse: [
        ['sai', 'Sabah kahvede seni dinledim. Annen de böyle dinletirdi.', 'gulumser'],
      ] }], degilse: [{ eger: (S) => S.bayrak.p4_yalan === 'askida', ise: [
        ['sai', 'Münevver Hanım\'a soracağım. Ama önce sen söyle, içine ne doğuyor?', 'ciddi'],
      ], degilse: [
        ['sai', 'Sabah sert konuştum kızım. Gönlün kırıldıysa söyle.', 'pisman'],
      ] }] },
    ] },
    { soru: 'Babam yanındaki minderi gösterdi.', secim: [
      { m: 'Yanına otur: “Bana inanın babacığım.”', etki: { baba_guven: 3 }, bayrak: { p4_v_baba: 'inan' }, iz: 'Babana inanmasını söyledin. O da korkusunu söyledi.', adimlar: [
        /* Tur 28 (B4 oynanış 2): Münevver'e "Babamı ben razı ederim" diyen kızın planı burada icra edilir */
        { eger: (S) => S.bayrak.p4_plan === 'kendi', ise: [
          ['f', 'Münevver Hanım\'a “babamı ben razı ederim” dedim. Bana inanın babacığım, yalanı ben taşımadım.', 'kararli'],
        ], degilse: [{ eger: (S) => S.bayrak.p4_plan === 'kahve_kendi', ise: [
          /* Tur 30: kahvehaneyi üstlenen kızın kendi sözü */
          ['f', 'Münevver Hanım\'a “kahvedeki ağızları ben kapatırım” dedim babacığım. Bana inanın, o işi de bana bırakın.', 'kararli'],
        ], degilse: [
          ['f', 'Bana inanın babacığım. Yalanı ben taşımadım.', 'kararli'],
        ] }] },
        ['sai', 'İnanırım. Korktuğum, inandığımın başına gelecek olan.', 'mahzun'],
      ] },
      { m: 'Elini öp. Bir şey deme.', etki: { baba_guven: 2, vakar: 1 }, bayrak: { p4_v_baba: 'el' }, adimlar: [
        'Elini öptüm. Tespih durdu.',
        ['sai', 'Git yat kızım. Yarın uzun.', 'mahzun'],
      ] },
      /* Oynanış T1 (B1, bulgu B4 b3): senet görünür koz. Babaya göstermek Nabi'ye karşı gizliliği bozmaz; kâğıt
         elde kalır (5., 6., 8. ve 9. bölüm onu okur), kaynağı "babam da gördü" olur.
         Tur 27 (B4 oynanış 2): delil bölümün sorusunu kapatır (aktif kahraman ödülü) */
      /* GPT T29 (O4-2): senedi Remzi babaya götürdüyse eksik eşya kilidi gösterilmez (kâğıt zaten babada) */
      { m: 'Nabi Bey\'in senedini göster.', kosul: (S) => var_(S, SENET), kozGerek: SENET, kilitGoster: (S) => S.bayrak.p4_remzi !== 'baba', etki: { baba_guven: 3, calibe_suphe: 1 }, bayrak: { p4_v_baba: 'senet' }, iz: 'Senedi babana gösterdin. Kâğıt yine sende. Borçlu şahidin sözü düştü.', adimlar: [
        ['f', 'Kırk lira, babacığım. Kumar borcu, altında Nabi Bey\'in imzası.', 'kararli'],
        { eger: (S) => S.bayrak.p4_yalan === 'curudu', ise: [
          /* Tur 27 (B4 diyalog 4): "Kumarcının şahitliği" bir yolda üç kez geçmez */
          ['sai', 'Kumar borcu… Sakla bunu. Vakti gelince yüzüne ben vururum.', 'ciddi'],
        ], degilse: SENET_HUKUM },
        { kozKaynak: [SENET, 'Senet elimde, babam da gördü'] },
      ] },
    ] },
    { gizle: 'sai' },
    /* Tur 27b (B4 anlatı 10'a): bölümün sorusu ("kime inanılacak?") kapanışta babanın hükmüne bir kez daha bağlanır */
    { eger: (S) => S.bayrak.p4_yalan === 'curudu', ise: [
      ['an', 'Konak sustu. Sabahki yalan o gece hiçbir odada yeniden fısıldanmadı.'],
    ], degilse: [{ eger: (S) => S.bayrak.p4_yalan === 'askida' && !!S.bayrak.p4_nabi_dustu, ise: [
      /* Tur 28b (kök 4): senet bir şahidi düşürdü; öbürü dinlenmeden hüküm yok */
      ['an', 'Konak sustu. Nabi Bey\'in sözü düşmüştü, hekiminki bir gece daha Sait Efendi\'nin yastığında bekledi.'],
    ], degilse: [{ eger: (S) => S.bayrak.p4_yalan === 'askida', ise: [
      ['an', 'Sait Efendi o gece de Münevver Hanım\'ın cevabını bekledi.'],
    ], degilse: [
      ['an', 'Konak sustu. Sait Efendi o gece de kararını söylemedi.'],
    ] }] }] },
    { gorev: 7 }, { mekan: 'fazila_oda' },
  ];

  /* ---- Gezinme katmanı (plan modu, veri/plan_konak.js; notlar/gezinme_tasarimi.md). Yürümek bedava, • iş 1 vakit.
     Kim nerede (metinden): ikindiye kadar Hatice mutfakta, Madam odasında, Nazlı bahçede salıncakta; akşam babam
     üst kat sofasında ("Babam sofada yalnız; lambayı kısmış"), Perihan Hanım ile Nabi Bey yemek odasında.
     Kapalı: Süha Bey'in odası, Perihan'ın odası (2. bölümdeki neden: izinsiz girilmez), babamın odası.
     İkindiye kadar mabeyn riskli ama yolda kimse yok: sessiz geçiş, iz satırı, anlık ceza yok (2. bölüm kalıbı).
     Akşam mabeyn kapalı: babam sofada oturuyor; sofanın ucuna onun önünden geçilir, gece selamlığa yürünmez
     (yeni bedel yerine nedeni söylenen kapı). */
  var KAPALI = {
    suha_oda: { neden: 'Süha Bey\'in odası. Misafirin kapısı çalınmadan açılmaz.' },
    baba_oda: { neden: 'Babamın odası. Selamlıkta onun kapısı çalınmadan açılmaz.' },
    calibe_oda: { neden: 'Perihan Hanım\'ın odası. İzinsiz girilmez.' },
  };
  var gezinme = function (v, g) { Object.keys(g).forEach(function (k) { v[k] = g[k]; }); return v; };
  gezinme(VAKIT_SABAH, {
    plan: 'konak', kapali: KAPALI,
    riskli: {
      mabeyn_merdiven: { gozcu: null, uyari: 'şimdi kimse yok',
        sonuc: 'Ardı selamlık, erkeklerin tarafı, orada işim yok.',
        iz: 'Mabeyn merdiveninde kimseye görünmedim. Kahvedeki yalanın kokusu orada da vardı.' },
    },
  });
  var GUNDUZ = ['fazila_oda', 'buyuk_salon', 'konak_sofa', 'mutfak', 'taslik', 'yemek_salonu', 'mabeyn_kapisi',
    'mabeyn_merdiven', 'selamlik_sofa', 'selamlik_kapisi', 'josephine_oda', 'calibe_oda'];
  // Eve dönüş: yemekten sonra salondayım (serbest vaktin "Buradasın"ı bunu göstersin)
  // Anlatı denetimi T1: yolculuk ve yemek ara sayfada; Feride yalnız salona geçişini söyler
  var AKSAM_DONUS = 'Sofradan kalkıp salona geçtim.';
  /* Anlatı denetimi T2 (b4_5_6 4.3, 4.4; mercek_dil B4-1): hüküm sabah verildiyse akşam onu uygular; herkesin önünde
     şarkı şartı salonda, yemekten sonra ödenir (gece odasında yalnız Feride'nin artçısı kalır) */
  var AKSAM_ARA = { ara: { mekan: 'buyuk_salon', yer: 'Sait Efendi\'nin konağı · akşam', satirlar: [
    (S) => (b(S).p4_yalan === 'curudu'
      ? 'Eve dönüldü. Sait Efendi yemekte Nabi Bey\'e bir kez bile bakmadı. Sabahki hükmün devamı buydu.'
      : 'Eve dönüldü, akşam yemeği sessiz geçti. Sait Efendi hükmünü henüz vermemişti.'),
    /* Tur 27 (B4 anlatı 3): 'sart' dalında pazarlığın karşılığı özette kalmaz; SARKI_SART'ta oynanır */
  ] } };
  /* GPT T26 Süha (B4 A2, S1): gece pazarlığının karşılığı özetle geçmez, salonda oynanır. Kapının aralığı ve tanık
     görünür; sınırı Feride koyar (kıta değil, bir şarkı). Seçim eklenmedi: bu yolun en uzun hâli zaten 17 karar. */
  var SARKI = { eger: function (S) { return anlasti(S) && b(S).p4_bedel !== 'sart'; }, ise: [
    { muzik: 'piyano' }, // Tur 27 (B4 ses 4): piyano çalınırken piyano
    /* Tur 29 (13 satır): kapıyı aralamak ve çalmak tek satırda */
    ['an', 'Süha Bey piyanodan üç adım öteye oturdu. Dinleyecek, dokunmayacaktı.'],
    { goster: ['suha', 'notr'] },
    'Salonun kapısını kendi elimle aralayıp bir şarkı çaldım. Aralıktan Hatice\'nin tepsisi geçti, yavaşladı.',
    ['suha', 'Son kıtayı yavaş çalın.', 'notr'],
    ['f', 'Bir şarkı dedik Süha Bey, kıtasını değil. Kapı da aralık.', 'kararli'],
    /* Tur 30 (B4 sürük 2; ritim, ara sayfa dahil 16 → 13): kapanış satırı çıktı; resim aralık kapıyı gösterir */
    { cizim: 'an_sarki' },
    { gizle: 'suha' },
    { muzik: null },
  ] };
  /* Tur 27 (B4 anlatı 3): şartlı pazarlığın ikizi; şarkı herkesin önünde, seçen Süha, temposunu Feride koyar */
  var SARKI_SART = { eger: function (S) { return anlasti(S) && b(S).p4_bedel === 'sart'; }, ise: [
    { muzik: 'piyano' },
    'Salonda, herkesin önünde piyanonun kapağını açtım.',
    ['an', 'Şarkıyı Süha Bey seçti: bir aşk şarkısı. Perihan Hanım yelpazesini ortasında kapadı.'],
    { goster: ['suha', 'alayci'] },
    ['suha', 'Son kıtayı yavaş çalın.', 'alayci'],
    ['f', 'Herkesin önünde mi? Öyleyse hızlı çalarım.', 'kararli'],
    { cizim: 'an_sarki_salon' },
    { gizle: 'suha' },
    { muzik: null },
  ] };
  // Bölüm kapanışı (kanca kartından hemen önce; her yol yalnız birini görür). T2 (b4_5_6 4b-3): Kenan yolunda ve
  // Süha'nın notunu okuyan yolda yola özel; öteki Süha dalları ortak satırı görür.
  /* Doğrulama gece (B4): "bu evde" yolda en çok iki */
  var KAPANIS = ['an', 'O gece Feride, bir kâğıdın kaç elden geçtiğini saymaya başladı.'];
  /* Sürükleyicilik T1 (b4_5_6 4.8; S2): kapanış satırı kartın sorusunu ya da sözünü önceden söylemez; Feride'nin kararı */
  /* GPT T25 Kenan (B4 S4): anlatıcı seçilmemiş bir planı karara bağlamaz; yalnız kurulmuş mektup paktı uygulanır */
  var KAPANIS_K = { eger: function (S) { return b(S).p4_pakt === 'mektup'; }, ise: [
    ['an', 'O gece Feride karar verdi: Kenan\'ın kâğıtları bundan sonra Leyla\'nın çekmecesinden geçecekti.'],
  ], degilse: [
    ['an', 'O gece Feride, Kenan\'dan gelen her kâğıdın kaç elden geçtiğini saymaya başladı.'],
  ] };
  /* Anlatı T2b (GPT T24b Süha B4): "kime yazdı?" sorusu üçüncü kez dönmez; Feride'nin sabah planı */
  var KAPANIS_S = ['an', 'Feride hekimin eğik yazısını ezberledi. Yarın eline geçecek her etiketi bu yazıyla tartacaktı.'];

  /* Bölüm açılışı anlatısı: gerdanlık töreni, Sarı oda, gecenin son kararı, Leyla, bugünkü dilek.
     Süha'nın kapısında kalan yol (p3_son 'suha') gece açılır; ötekiler sabah. Satırlar ortak, fon ayrı. */
  var gece = function (S) { return b(S).p3_son === 'suha'; };
  /* Tur 18 (madde 15): 3. bölüm defterinin cümlelerini yinelemez; gerdanlığın bugünkü yeri ve sabahın hedefi */
  /* Tur 18 ek (öneri 9): gerdanlık töreni ve gecenin son kararı 3. bölümde oynandı (ilk sahne o kararı karşılıyor);
     burada yinelenmez. Yer/zaman, yeni kişi (Leyla) ve bugünün hedefi kalır. */
  /* Anlatı denetimi T1 (rehber §1, §5b): açılış anlatıcı sesinde; kahvede söylenecek yalanın cümlesini önceden vermez */
  /* Anlatı denetimi T2 (b4_5_6 4.1; mercek_doz B4b): sabah açılışı 3. bölümün son anını yola göre karşılar; son satır
     irade damgası yerine bölümün sorusunu kurar. Süha'nın kapısındaki gece yolunda ilk satır boş döner (motor atlar). */
  var ACILIS_SATIR = [
    /* GPT T25 Kenan (B4): Leyla satırı çıkınca gece yolu da üç satır kalsın; önceki bölümün son anı (kapı) karşılanır */
    (S) => (gece(S) ? 'Feride hâlâ Süha Bey\'in kapısındaydı. Koridorun öbür ucunda Hatice\'nin odasının kapısı aralıktı.' // Tur 28 (B4 anlatı 1)
      : b(S).p3_son === 'baba' ? 'Feride gece babasının yanından, ilk soruyu Süha Bey\'in sorduğunu öğrenerek kalkmıştı.'
      /* GPT T29 (S4-1): kilitli kapı çözülmüş sayılmaz; ilk sahne geri dönüşle oynatır */
      : b(S).p3_haberci === 'kendi' ? 'Gece duvar kapısından dönen Feride, arka kapıyı içeriden kilitli bulmuştu. Kim kilitlemişti, sabah ne bilecekti?'
      : b(S).p3_haberci === 'sefik' ? 'İki satırlık pusula gece Şefik\'in kitabına girmişti, sabah kitapla birlikte yola çıkacaktı.'
      : 'İki satırlık pusula gece Nimet\'in şalının altında yola çıkmıştı.'),
    (S) => (gece(S)
      ? 'Gece yarısını geçmişti. Süha Bey sorusunu sormuş, cevabı Feride\'ye bırakmıştı.'
      : 'Sait Efendi sabah kahvesini sofada içiyordu. Fincanının yanında onu Nabi Bey’in yalanı bekliyordu.'),
    /* GPT T25 Kenan (B4 S1; S4 "açılış 3 satırı geçmez"): ikindi programı kahve çatışmasından önce anlatılmaz;
       Leyla'nın tanıtımı konağına giden ara sayfaya taşındı */
    (S) => (gece(S)
      /* Tur 29 (B4 anlatı 10'a): üç satırın biri Feride'nin kararı */
      ? 'Feride cevabı kendisi verecekti.'
      /* Sürükleyicilik T1 (b4_5_6 4.2): iki hedef yerine tek soru ("inandın mı?" motifi) ve Feride'nin kararı */
      : ''), // Tur 33 (B4 diyalog 7)
  ];

  // Leyla'ya yüzük sırrı (koz elde ya da yalnız bilgi; iki seçenek aynı sahneyi paylaşır)
  /* GPT T29 (A4-1): yüzüğün verilişini yalnız arka bahçede dinleyen kız gördü; öbürleri duyum/çıkarım söyler */
  var yuzukGordu = function (S) { return b(S).p_reftar === 'izledi'; };
  var LEYLA_YUZUK = [
    { muzik: 'huzun' }, // Tur 27b (B4 ses 10'a): dostun incinmesi ev müziğinde kalmaz
    { eger: yuzukGordu, ise: [
      ['f', 'Hatice\'nin parmağındaki yüzüğü Nabi Bey verdi. Düğünde kendi gözümle gördüm.', 'kararli'],
      ['fevkiye', 'Yalan söylüyorsun.', 'ofkeli'],
      ['f', 'Hatice\'nin eline bak. Sonra bana yalancı de.', 'kararli'],
    ], degilse: [
      ['f', 'Hatice\'nin yüzüğünün eşi Nabi Bey\'in parmağında. Verdiğini görmedim.', 'mahzun'],
      ['fevkiye', 'Eşi mi? Olamaz.', 'saskin'],
      ['f', 'Yüzüğe birlikte bakalım. Sonra Hatice\'ye kimden aldığını soralım.', 'mahzun'],
    ] },
    ['fevkiye', '…Bakarım.', 'endiseli'],
    /* İncinme anı: hüküm değil, yanında durmak */
    'Mektubu romanın arasına geri soktu. Kapağı iki eliyle bastırdı, kimse açmasın diye.',
    ['fevkiye', 'Yüzüğe kendim bakacağım. Sen bir şey deme, yalnız yanımda dur.', 'mahzun'],
    'Yanına oturdum, sustum. Omzum omzuna değdi.',
    { muzik: null },
  ];

  // Kafesin ardındaki Feride konuşmak için ortaya çıkar (bedeli itibar)
  var CIK = { eger: (S) => b(S).p4_tepsi === 'kafes', ise: [
    'Kafesin ardından çıktım. Babam başını kafese çevirdi.',
    { etki: { itibar: -1 } },
  ] };

  window.BOLUMLER[104] = {
    no: 104,
    baslik: 'Yeni 4. Bölüm',
    ad: 'Pakt',
    dogrusal: true,
    adaylar: ['mukaddem', 'suha', 'remzi'],
    ilkFaz: 'A',
    baslangic: 'fazila_oda',
    fazlar: { A: { mekanlar: ['fazila_oda', 'mabeyn_kapisi', 'suha_oda', 'konak_sofa', 'fevkiye_konak', 'fevkiye_oda', 'fevkiye_anne_oda', 'fevkiye_kapi', 'araba_ici'], baglanti: {} } },
    gorevler: [],
    fon: function (S, mekanId) {
      // Süha yolunun açılışı gecenin devamıdır; sabah p4_sabah ile gelir
      if (mekanId === 'fazila_oda' && S.gorev === 0 && (S.bayrak.p3_son !== 'suha' || S.bayrak.p4_sabah)) return 'fazila_oda_gunduz';
      if (mekanId === 'fazila_oda' && S.gorev === 2) return 'fazila_oda_gunduz';
      // sabah kahvesi (1) ve ardından ikindiye kadarki serbest vakit (2)
      if (mekanId === 'konak_sofa' && (S.gorev === 1 || S.gorev === 2)) return 'konak_sofa_gunduz';
      // ikindiye kadarki serbest vakitte (2) mutfak ve taşlık gün ışığında
      if ((mekanId === 'mutfak' || mekanId === 'taslik') && (S.gorev === 1 || S.gorev === 2)) return mekanId + '_gunduz';
      // Plan modunda ikindiye kadarki vakitte (2) gezilen öteki yerlerin gündüz çeşidi (kaydı/resmi yoksa asıl fon)
      if ((S.gorev === 1 || S.gorev === 2) && GUNDUZ.indexOf(mekanId) >= 0) return mekanId + '_gunduz';
      return null;
    },

    acilis: [
      /* Eski "Bugün konuşulan" kartının bilgisi (yalan bu sabah babanın kahvesinde) anlatının ikinci ve son satırında.
         Fon gece/gündüz uyumu: Süha'nın kapısındaki gece koridorda, sabah açılışı gündüz sofada. */
      /* Oynanış T1 (gorsel_t1_fon #9a): gece yolu "hâlâ kapısındaydı" der; kapının dışı mabeyn kapısı resminde (oda içi değil) */
      { eger: gece,
        ise: [{ anlati: { gorsel: 'mabeyn_kapisi', baslik: '4. Bölüm · Pakt', satirlar: ACILIS_SATIR } }],
        degilse: [{ anlati: { gorsel: 'konak_sofa_gunduz', baslik: '4. Bölüm · Pakt', satirlar: ACILIS_SATIR } }] },
    ],

    olaylar: [
      /* ---------------- 1. Gecenin devamı ya da sabah ---------------- */
      {
        id: 'p4_sabah', mekan: 'fazila_oda', tetik: 'giris', kosul: (S) => S.gorev === 0, sahne: [],
        adimlar: [
          { eger: (S) => b(S).p3_son === 'suha', ise: [
            /* --- Süha'nın kapısında kalan soru --- */
            { mekan: 'mabeyn_kapisi' },
            { muzik: 'suha' }, // Tur 27 (B4 ses 1): gece kapısı Süha temasında; şafakta ev
            /* GPT T26 Süha (öncelik 7): "alacaklı" benzetmesi çıktı; ticaret dili Remzi'nin */
            ['an', 'Süha Bey kapısının önünde bekledi. Lamba arkasındaydı, yüzü gölgede kalıyordu.'],
            { goster: ['suha', 'notr'] },
            'Elimde şamdan, onun ardında lamba. Sorusu cevapsız duruyor.', // Tur 28: an_bedel yeni resmiyle aynı an
            ['suha', 'Cevabınızı bekliyorum. Babanız kahvesini erken içer.', 'soguk'],
            { soru: 'Yüzü gölgede, bekliyor.', secim: [
              { m: '“Doğruyu söyleyin.”', bayrak: { p4_gece: 'dogru' }, iz: 'Doğruyu istedin. Zehrini o seçecek.', adimlar: [
                ['f', 'Doğruyu söyleyin.', 'kararli'],
                /* Diyalog T1 (4.9, D4): "pahalı" Remzi'nin malı; Süha zehrini seçer (kahvedeki "zehrini de yanına koydu") */
                ['suha', 'Gördüğümü söylerim. Babanızın ne anlayacağına karışmam.', 'soguk'],
              ] },
              /* Tur 32: "bedel" oyun sözcüğü Feride'nin ağzında olmasın; pazarlık Süha'nın dili, Feride ona cevap veriyor */
              { m: '“Karşılığı ne?”', bayrak: { p4_gece: 'pazarlik' }, adimlar: [
                ['f', 'Karşılığı ne?', 'kararli'],
                ['suha', 'Babanıza “Görmedim” derim. Siz de bu akşam piyanoda bir şarkı çalarsınız, yalnız bana.', 'notr'],
                /* Bedeli öğrenmek kabul etmek değil: Feride ayrıca karar verir */
                /* Diyalog T1 (4.13): şarkı yarın akşam salonda; pazarlık şimdi, kapısında */
                { soru: 'Yalnız ona bir şarkı. Bunu gece yarısı, kapısının önünde istiyor.', secim: [
                  { m: '“Kabul. Salonun kapısı aralık kalır.”', etki: { suha: 7 }, bayrak: { p4_bedel: 'kabul' }, adimlar: [
                    ['f', 'Kabul. Salonun kapısı aralık kalır.', 'kararli'],
                    ['suha', 'Aralık kalsın. Ben kapıya bakmam.', 'notr'],
                  ] },
                  /* GPT T29 (D4-1): şartın bütünü Feride'nin ağzından (yer, dinleyici, tempo); Süha seçme hakkını onun sözüyle alır */
                  /* Tur 30 (B4 anlatı 6): seçenek metni söylenecek şartın tamamını taşır (şarkıyı Süha seçer) */
                  { m: '“Şarkıyı siz seçin, ama salonda, herkesin önünde, temposu benim.”', etki: { suha: 5, vakar: 1 }, bayrak: { p4_bedel: 'sart' }, adimlar: [
                    ['f', 'Şarkı olur, ama salonda, herkesin önünde. Şarkıyı siz seçin, temposu benim.', 'kararli'],
                    ['suha', 'Herkesin önünde, temposu sizin. Peki, şarkıyı ben seçerim.', 'notr'],
                  ] },
                  { m: '“Çok şey istiyorsunuz. Şarkı yok.”', bayrak: { p4_bedel: 'ret' }, iz: 'Şarkıyı vermedin. Kahvede ne diyeceği onda kaldı.', adimlar: [
                    ['f', 'Çok şey istiyorsunuz Süha Bey. Şarkı yok.', 'kararli'],
                    ['suha', 'Öyleyse yarın ne gördüysem onu söylerim. Görmediğimi de.', 'soguk'],
                  ] },
                ] },
              ] },
              { m: '“Hiçbir şey demeyin.”', bayrak: { p4_gece: 'sus' }, iz: 'Susmasını istedin. Kahvede ne diyeceği yine onda.',adimlar: [
                ['f', 'Hiçbir şey demeyin. Susun.', 'kararli'],
                ['suha', 'Susarım. Babanız susanı da dinler, bunu siz benden iyi bilirsiniz.', 'soguk'],
              ] },
            ] },
            /* Tur 27 (B4 görsel 10'a): bölümün en tehlikeli Süha anının resmi (resmi gelince açılır) */
            { cizim: 'an_bedel' },
            { efekt: 'kapi_kapa' },
            { gizle: 'suha' },
            /* Geceyi kapatan köprü (anlatı denetimi T1): gece → sabah tek ara sayfada.
               Tur 27 (B4 anlatı 2): ara sayfa sahnenin göstereceği haberi önceden söylemez; Nimet'in girişi sahnede */
            { bayrak: { p4_sabah: true } },
            { muzik: null },
            /* Tur 30 (ritim, ara sayfa dahil 15 → 13): Nimet'in girişi şafak ara sayfasında */
            { ara: { mekan: 'fazila_oda', yer: 'Feride\'nin odası · şafak', satirlar: [
              'Feride o gece gözünü kırpmadı, sabahı pencerede karşıladı. Şafakla Nimet geldi, elinde tepsi olmadan.',
            ] } },
            { goster: ['mehves', 'endiseli'] },
            /* Tur 32 (B4 diyalog 3, anlatı 3): üç haber bir kutuda değil; açılıştaki aralık kapı Nimet'in gözlemine bağlanır */
            ['mehves', 'Babanız sofada, Nabi Bey\'i de çağırttı. Kahve soğumadan aşağıda olun hanımcığım.', 'endiseli'], // Tur 28 (B4 diyalog 4)
            ['mehves', 'Hatice gece kapısını aralık bırakmış, sabah ilk o kalktı. Leyla Hanım da ikindiye bekliyor.', 'endiseli'],
            ['mehves', 'Babanız kâğıda bakar hanımcığım, söze değil. Unutmayın.', 'kararli'],
          ], degilse: [
            { muzik: 'ev' }, // Tur 27 (B4 ses 1): gündüz odasında gece müziği çalmaz
            /* Anlatı denetimi T2 (mercek_doz B4a1, 2c): "sabah … saatti" kalıbı ve Nimet'in huy cümlesi yerine eylem */
            /* Sürükleyicilik T1 (b4_5_6 4.1; S4): giyinme açılışı ve soruyu yineleyen iç ses çıktı; ilk seçim öne geldi */
            { eger: (S) => b(S).p3_son === 'baba', ise: [
            /* --- Babaya gece inmişti --- */
            ['an', 'Nimet kapıyı tıklatıp girdi. Gecenin haberini kimseye bırakmamıştı.'],
            { goster: ['mehves', 'endiseli'] },
            /* Tur 30 (B4 sürük 1; ilk seçim ≤ 8): Leyla'nın daveti Nimet'in tek satırında; soruyu yineleyen iç ses çıktı */
            ['mehves', 'Babanız iki kez sizi sordu, Nabi Bey ile Süha Bey sofada. Leyla Hanım ikindiye bekliyor.', 'endiseli'],
            ['mehves', 'Babanız kâğıda bakar hanımcığım, söze değil. Unutmayın.', 'kararli'],
          ], degilse: [
            /* --- Münevver Hanım'a iki satır gitmişti --- */
            { eger: (S) => b(S).p3_haberci === 'sefik', ise: [
              ['an', 'Şefik ablasının odasına kapıyı çalmadan daldı.'],
              { goster: ['sefik', 'sevincli'] },
              /* Diyalog T1 (4.3, ses B6): haber Nimet'in ağzından bir kez; Şefik'in hitabı "Münevver nine" */
              ['sefik', 'Kitabı götürdüm abla! Münevver nine “İnanmadım” dedi, ikindiye seni Leyla ablalarda bekliyor!', 'sevincli'],
              ['ic', 'Nazlı dün gece kapıdaydı. Annesine ne taşıdı?', 'endiseli'],
              { gizle: 'sefik' }, // Tur 28 (B4 sürük 5): haber Şefik'in ağzından; Nimet satırı bu dalda yinelenmez
            ], degilse: [{ eger: (S) => b(S).p3_haberci === 'kendi', ise: [
              /* GPT T29 (S4-1): 3. bölümün kilitli kapı kancası oynanır; kimi uyandıracağını oyuncu seçer (geri dönüş) */
              { ara: { mekan: 'bahce_gece', yer: 'Dün gece · arka kapı', satirlar: [
                'Halka kıpırdamamıştı. İçeri girmek için Feride bir pencereyi seçmek zorundaydı.',
              ] } },
              { soru: 'Kapı kilitli, konak uyuyor. Kimi uyandıracağım?', secim: [
                { m: 'Madam\'ın penceresine üç küçük taş at.', etki: { josephine: 1 }, bayrak: { p4_kurtaran: 'josephine' }, iz: 'Gece seni Madam içeri aldı. Ona bir açıklama borçlusun.', adimlar: [
                  'Üçüncü taşta perde aralandı. Madam mumsuz indi, mutfak kapısını açtı.',
                  ['josephine', '{i}Yarın bana anlatırsınız. Bu gece değil.{/i}', 'kararli'],
                ] },
                { m: 'Nimet\'in mutfak kapısını tıkla.', etki: { mehves: 1 }, bayrak: { p4_kurtaran: 'nimet' }, iz: 'Gece seni Nimet içeri aldı. Çamuru o silecekti.', adimlar: [
                  'Nimet kiler penceresinden çekip aldı beni: “Çamuru sabah ben silerim.” Sabah işine geç kalacaktı.',
                ] },
              ] },
              { ara: { mekan: 'fazila_oda', yer: 'Feride\'nin odası · sabah', satirlar: [
                'Sabah Feride\'nin eteğinde gecenin çamuru hâlâ kurumamıştı.',
              ] } },
              ['an', 'Nimet içeri süzüldü, kapıyı ardından sırtıyla kapadı.'],
              { goster: ['mehves', 'endiseli'] },
              { eger: (S) => b(S).p4_kurtaran === 'nimet', ise: [
                ['mehves', 'Ben yetişemeden Hatice eteğinizin çamurunu fırçalamış. Hiç sormadan.', 'endiseli'],
              ], degilse: [
                ['mehves', 'Sabah Hatice eteğinizin çamurunu fırçaladı. Hiç sormadan.', 'endiseli'],
              ] },
              /* GPT T29 (A4 b3): somut gözlem ile şüphe ayrı */
              ['ic', 'Çamuru gördü. Nereye gittiğimi de biliyor mu?', 'endiseli'],
            ], degilse: [
              ['an', 'Nimet kapıda belirdi. Sabah duasını bile yarım bırakmıştı.'],
              { goster: ['mehves', 'kararli'] },
              { eger: (S) => !!b(S).p3_nimet_risk, ise: [
                ['mehves', 'Hatice bu sabah, gece nereye gittiğimi sordu. “Helaya” dedim.', 'endiseli'],
              ] },
            ] }] },
            { eger: (S) => b(S).p3_haberci !== 'sefik', ise: [
              { goster: ['mehves', 'kararli'] },
              ['mehves', 'Münevver Hanım\'dan cevap: “İnanmadım. İkindi Leyla\'larda.”', 'kararli'],
              /* Tur 33 (B4 oynanış 1): kahvedeki terazinin ipucu sahnede, Nimet'in ağzından */
              ['mehves', 'Babanız kâğıda bakar hanımcığım, söze değil. Unutmayın.', 'kararli'],
            ] },
          ] },
          ] },
          { gizle: 'mehves' },
          /* Anlatı denetimi T2 (mercek_doz B4a2): kahve-hüküm kuralı açılışta söylendi; burada tek satır */
          /* Oynanış T1 (gorsel_t1_fon #8): görev ara sayfadan önce; sabah sayfası gündüz sofasının üstünde */
          { gorev: 1 },
          { ara: { mekan: 'konak_sofa', yer: 'Sofa · sabah kahvesi', satirlar: [
          ] } },
        ],
      },

      /* ---------------- 2. Babamın kahvesi ---------------- */
      {
        /* Anlatı denetimi T1 (mercek_tanitim Y4): olay başında yalnız Sait Efendi; öteki portreler ilk repliklerinin önünde katılır */
        id: 'p4_kahve', mekan: 'konak_sofa', tetik: 'giris', kosul: (S) => S.gorev === 1, sahne: ['sai'],
        adimlar: [
          /* Gece pazarlığı uzayan sofaya geç iner; tepsi kararı ona kalmaz (bölüm 15 kararı aşmasın) */
          { eger: (S) => !!b(S).p4_bedel, ise: [
            'Sofaya geç indim. Babam minderde, Süha Bey benden önce inmiş, Nabi Bey fazla özenle tıraşlı.',
          ], degilse: [
          /* Tur 27 (B4 anlatı 1): Nabi'nin girişi anlatıcıda. Tur 30 (B4 sürük 1; ilk seçim ≤ 8): tepsi ve Nabi tek satırda */
          ['an', 'Nabi Bey sofadaydı, fazla özenle tıraşlı. Kahve tepsisi her sabahki gibi Hatice\'nin elindeydi.'],
          { goster: ['reftar', 'notr'] },
          { soru: 'Kahve tepsisi kapıda, Hatice\'nin elinde.', secim: [
            { m: 'Tepsiyi al. “Babamın kahvesini ben veririm.”', etki: { baba_guven: 1, calibe_suphe: 1 }, bayrak: { p4_tepsi: 'aldi' }, iz: 'Tepsiyi gözcünün elinden aldın, fincan başındasın.', adimlar: [
              { efekt: 'fincan' },
              'Tepsiyi Hatice\'nin elinden aldım. Fincanlar bir kez çınladı.',
              ['sai', 'Kızımın verdiği kahve de başka oluyor.', 'gulumser'],
            ] },
            { m: 'Kafesin ardına geç. Dinle.', bayrak: { p4_tepsi: 'kafes' }, iz: 'Kafesin ardındasın. Konuşmak istersen ortaya çıkman gerekecek.', adimlar: [
              'Kafesin ardına geçtim. Yüzümü görmüyorlar; bütün sözleri duyuyorum.',
            ] },
            { m: 'Şefik\'i babamın dizine yolla.', etki: { sefik: 1 }, bayrak: { p4_tepsi: 'sefik' }, iz: 'Şefik babanın dizinde. Bir çocuğun sözü de tartıya girer.', adimlar: [
              { goster: ['sefik', 'ana'] },
              'Şefik koşup babamın dizine oturdu. Kulağı bende, gözü şekerde.',
            ] },
          ] },
          { gizle: 'reftar' },
          ] },
          /* Tur 27 (B4 sürük 10'a): Süha yolunda Süha'ya özgü tehlike ilk satırlarda (gece pazarlığı olmayan sabah) */
          { eger: (S) => !muk(S) && !b(S).p4_gece, ise: [
            ['an', 'Süha Bey fincanını alırken Feride\'ye doğru eğildi.'],
            { goster: ['suha', 'soguk'] },
            ['suha', 'Babanıza ne diyeceğimi henüz seçmedim.', 'soguk'],
          ] },
          { goster: ['nabi', 'ana'] },
          ['nabi', 'Eniştem, söylemesi ağır: Kenan\'ı Beyoğlu\'nda gördüm. Ayakta zor duruyordu.', 'endiseli'], // Tur 33: sahte kaygıyla iftira
          { eger: (S) => b(S).p4_tepsi === 'sefik', ise: [
            ['sefik', 'Kenan abi şerbet bile içmez! Bana dedi.', 'sevincli'],
          ] },
          { eger: (S) => b(S).p3_son === 'baba', ise: [
            ['sai', 'Süha, dün akşam bana Kenan\'ın içip içmediğini sordun. Neden?', 'endiseli'],
          ], degilse: [
            ['sai', 'Süha, sen de gördün mü?', 'ciddi'],
          ] },
          /* Anlatı denetimi T2 (b4_5_6 4.2; GPT T24 4.3): kişi girişi; gece pazarlığından inen yolda Süha az önce görüldü
             (geç iniş satırı onu anar). Fincan satırı çıktı (tik; 13 satır sınırı), ses efekti kalır. */
          { eger: (S) => !b(S).p4_bedel && (muk(S) || !!b(S).p4_gece), ise: [
            ['an', 'Süha Bey o ana dek fincanına bakıyordu. Sorulunca başını acele etmeden kaldırdı.'],
          ] },
          { goster: ['suha', 'notr'] },
          { eger: anlasti, ise: [
            ['suha', 'Görmedim efendim. Görmediğim şeye şahitlik etmem.', 'notr'],
            { efekt: 'fincan' },
            /* GPT T26 Süha (öncelik 7): borç–bedel dili seyrelir; "ucuz" Remzi'nin sözü (karakter_sesleri) */
            { eger: (S) => b(S).p4_bedel === 'sart', ise: [
              ['ic', 'Karşılığı bu akşam salonda, herkesin önünde. Şarkıyı o seçecek.', 'kararli'],
            ], degilse: [
              ['ic', 'Karşılığı bu akşam piyanoda: bir şarkı, kapı aralık.', 'kararli'],
            ] },
          ], degilse: [{ eger: (S) => b(S).p4_gece === 'dogru', ise: [
            ['suha', 'Kenan içmez efendim. Ama içmeyen adamın başka sırrı olur.', 'soguk'],
            ['ic', 'Doğruyu söyledi. Zehrini de yanına koydu.', 'ofkeli'],
          ], degilse: [{ eger: (S) => b(S).p4_gece === 'sus', ise: [
            'Süha Bey sustu. Fincanını çevirip bana baktı.',
            ['sai', 'Susuyorsun. Anladım.', 'ciddi'],
          ], degilse: [
            ['suha', 'Bir kez gördüm efendim. Gece, Pera\'da.', 'soguk'],
            { eger: (S) => b(S).p4_bedel === 'ret', ise: [
            ], degilse: [{ eger: (S) => b(S).p3_son === 'baba', ise: [
              ['sai', 'Dün sen sordun, bugün sen gördün. Tuhaf.', 'endiseli'],
            ], degilse: [{ eger: (S) => b(S).p3_sari === 'dinledi', ise: [
              ['ic', 'Doğruluyor. Sarı odada konuşulduğu gibi.', 'kararli'],
            ], degilse: [
              ['ic', 'Doğruluyor. Neden?', 'endiseli'],
            ] }] }] },
          ] }] }] },
          { muzik: 'perihan' }, // Tur 28 (B4 ses 2): Perihan'ın teması onun ilk sözüyle
          /* Tur 30 (ritim): anlatıcı satırı Perihan'ın sözüne katıldı (tatlıya bağlayan söz kendini gösterir) */
          { goster: ['calibe', 'sinsi'] },
          ['calibe', 'Efendi, kızımızın sözlüsü bu. Duymamış olalım.', 'sinsi'],
          { eger: muk, ise: [
            /* Diyalog T1 (4.5): Şefik'in bağırdığı dalda da doğru; Remzi'nin cümlesi Feride'ye geçmez */
          ], degilse: [
            ['an', 'Süha Bey fincanının üstünden Feride\'ye baktı. Sırayı ona bırakıyordu.'],
          ] },
          { efekt: 'fincan' },
          { soru: 'Babam fincanı bıraktı. Bana bakmıyor.', secim: [
            { m: '“Nabi Bey, gece Beyoğlu\'nda siz ne arıyordunuz?”', etki: { baba_guven: 1, calibe_suphe: 1 }, bayrak: { p4_hamle: 'beyoglu' }, iz: 'Soruyu yalancıya çevirdin. Baban o dostun adını sordu.',adimlar: [
              CIK,
              ['f', 'Nabi Bey, gece Beyoğlu\'nda siz ne arıyordunuz?', 'kararli'],
              ['nabi', 'Ben… kulüpte bir dost…', 'mahcup'],
              ['sai', 'Hangi dost Nabi? Adını söyle.', 'ciddi'],
            ] },
            { m: '“Remzi Bey\'e kırk lira borcunuz kapandı mı?”', etki: { baba_guven: 1, itibar: -2 }, bayrak: { p4_hamle: 'borc' }, iz: 'Kumar borcunu sofraya koydun.', adimlar: [
              CIK,
              ['f', 'Remzi Bey\'e kırk lira borcunuz kapandı mı Nabi Bey?', 'kararli'],
              'Nabi Bey fincanını tabağına oturtamadı.',
              { eger: (S) => !!b(S).p3_remzi_goruldu, ise: [
                ['calibe', 'Remzi Bey\'le çitin ardında konuşuyordu efendi. Ben gördüm.', 'soguk'],
              ], degilse: [
                ['sai', 'Kumar mı Nabi? Benim evimde?', 'ofkeli'],
              ] },
            ] },
            /* Oynanış T1 (B1): kozun kilidi görünür; harcanan koz tükenir (törende harcayan burada kilitli görür) */
            { m: '“Arka kapı gece açık kalınca Beyoğlu yakın olur.”', kosul: kapiKoz, kozGerek: [KAPI, KOZ], kilitGoster: kapiKilit, etki: { calibe_suphe: 2 }, bayrak: { p4_hamle: 'koz' }, iz: 'Kozunu babanın önünde oynadın. Nabi Bey geri adım attı.', adimlar: [
              CIK,
              ['f', 'Arka kapı gece açık kalınca Beyoğlu yakın olur efendim.', 'kararli'],
              ['nabi', 'Belki… benzetmişimdir. Karanlıktı.', 'korkmus'],
              /* Tur 27 (B4 oynanış 10'a): kozun bedeli o anda görünür */
              { goster: ['calibe', 'saskin'] }, 'Kapıda Hatice\'nin tepsisi titredi. Perihan Hanım kardeşine döndü, gülümsemesi yüzünde dondu.',
              KAPI_YAK,
            ] },
            kapiIkiz('“Arka kapı gece açık kalınca Beyoğlu yakın olur.”'),
            { m: '“Hatice\'nin yüzüğü de Beyoğlu\'ndan mı Nabi Bey?”', kosul: yuzukKoz, kozGerek: YUZUK, kilitGoster: gizliKilit, etki: { calibe_suphe: 2 }, bayrak: { p4_hamle: 'koz' }, iz: 'Yüzüğü babanın önünde andın. Nabi Bey geri adım attı.', adimlar: [
              CIK,
              ['f', 'Hatice\'nin yüzüğü de Beyoğlu\'ndan mı Nabi Bey?', 'kararli'],
              ['nabi', 'Belki… benzetmişimdir. Karanlıktı.', 'korkmus'],
              { goster: ['calibe', 'ofkeli'] }, 'Perihan Hanım yelpazesini kardeşinin bileğine vurdu. Kimse görmedi sandı.',
              { kozYak: YUZUK },
            ] },
            { m: 'Sus. Babanın gözüne bak.', etki: { vakar: 1 }, bayrak: { p4_hamle: 'sustu' }, iz: 'Susup babanın gözüne baktın, sözü ona bıraktın.', adimlar: [
              'Sustum. Babam başını kaldırdığında gözüm onu bekliyordu.',
            ] },
          ] },
          { eger: (S) => konustu(S) && yalanci(S), ise: [
            { eger: eskiYalan, ise: [
              ['calibe', 'Kızımızın sözüne pek güvenmeyin. Bana da “Aradım, bulamadım” demişti.', 'sinsi'],
            ], degilse: [
              ['calibe', 'Kızımızın sözüne pek güvenmeyin. Bana da “Su içmeye çıktım” demişti.', 'sinsi'],
            ] },
          ], degilse: [{ eger: (S) => konustu(S) && itirafli(S), ise: [
            /* Tur 27 (GPT B4-O1): Perihan eski yalanı kötü niyetle anar; düzelten kızın bedelini baba kaldırır (tartı cezası yok) */
            ['calibe', 'Kızımızın sözüne pek güvenmeyin. Bana da “Aradım, bulamadım” demişti.', 'sinsi'],
            ['sai', 'Onu o akşam sofrada kendisi söyledi hanım.', 'notr'],
          ] }] },
          /* --- Küçük soru kapanır: yalan tuttu mu? --- */
          /* Tur 29 (B4 oynanış 1): "çürüdü" tartı + delil ister (delil(): itiraf, bağımsız tanık, çıkar delili + tek şahit) */
          ['an', 'Sait Efendi fincanı tabağına koydu. Önce Nabi Bey’e, sonra kızına baktı.'], { eger: (S) => tarti(S) >= 2 && delil(S), ise: [
            { bayrak: { p4_yalan: 'curudu' } },
            /* Tur 27 (B4 ses 10'a): hüküm sessizlikte; yelpaze Perihan temasıyla. Tur 29 (B4 ses 1): babanın hükmü hukum parçasıyla */
            { muzik: 'hukum' },
            /* Tur 29: hekim de "gördüm" dediyse (yalnız koz dalı) baba hekimin tanıklığını da adıyla tartar */
            { eger: suhaDogruladi, ise: [
              /* Tur 32 (B4 anlatı 2): Sait Süha'ya "hekim bey" demez */
              ['sai', 'Nabi karanlıkta benzetmiş. Sen de o gece gördün Süha, ama karanlık şahit olmaz.', 'ciddi'],
              ['ic', 'Nabi Bey kendi sözünü geri aldı. Hekiminki de onunla aynı karanlıkta kaldı.', 'kararli'],
            ], degilse: [
              /* Oynanış T1 (B6): baba_guven ≥ 60 hükmün gerekçesini değiştirir (tarti'ya da +1) */
              { eger: (S) => (S.v.baba_guven || 0) >= 60, ise: [
                ['sai', 'Nabi, kızımın sözü bana senin şahitliğinden ağırdır. Bir daha getirme.', 'ciddi'],
              ], degilse: [
                ['sai', 'Nabi, bu evde çarşı lafı konuşulmaz. Bir daha getirme.', 'ciddi'],
              ] },
              ['ic', 'Nabi Bey fincanını bıraktı. Babam artık ona soru sormuyordu.', 'tebessum'],
            ] },
            { muzik: null },
            'Perihan Hanım\'ın yelpazesi bir açıldı, bir kapandı.',
          ], degilse: [{ eger: (S) => tarti(S) >= 0, ise: [
            { bayrak: { p4_yalan: 'askida' } },
            { muzik: 'gece' }, // Tur 33 (B4 ses 2): askıda kalan hükmün kendi rengi
            /* Tur 29 (B4 oynanış 1): ağırlık var ama delil yok; baba iki tarafı da adıyla askıya alır */
            { eger: (S) => tarti(S) >= 2 && suhaDogruladi(S), ise: [
              ['sai', 'Kızımın sözü ağır, hekiminki de. Münevver Hanım\'a soracağım.', 'ciddi'],
            ], degilse: [{ eger: (S) => tarti(S) >= 2, ise: [
              ['sai', 'Nabi, bir kişinin karanlıkta gördüğüyle damat yargılanmaz. Münevver Hanım\'a ben sorarım.', 'ciddi'],
            ], degilse: [
              /* Tur 33 (B4 anlatı 1): hüküm gerekçesini söyler (görünmeyen terazi oyuncuya açılır) */
              ['sai', 'Bunu Münevver Hanım\'a sormak gerek. Kızımın sözü var, ama elinde bir kâğıt yok.', 'ciddi'],
            ] }] },
            ['ic', 'Babam karar vermedi. Münevver Hanım’ı dinlemeden içim rahat etmeyecek.', 'mahzun'],
            'Nabi Bey kahvesini bitirmeden kalktı, merdiven başına yürürken bana göz kırptı.',
          ], degilse: [
            { bayrak: { p4_yalan: 'tuttu' } },
            ['sai', 'Kızım, odana çık. Senin sözün var, Nabi\'nin gözü var; ikisini de tartmam gerek.', 'mahzun'],
            ['ic', 'Tartacak. Öyleyse onun terazisine bir kâğıt bulurum.', 'kararli'],
            ['calibe', 'Üzülme kızım. Erkek kısmı gençken bir kadeh tutar.', 'sinsi'],
          ] }] },
          /* Tur 29 (B4 anlatı 1): askıda dalında Nabi merdivene zaten yürüdü; ikinci kez yürümez */
          { eger: (S) => b(S).p4_yalan === 'askida', ise: [
            ['an', 'Sait Efendi kalktı, ardından sofa boşaldı.'],
          ], degilse: [
            ['an', 'Sait Efendi kalktı, ardından sofa boşaldı. Nabi Bey merdiven başında, herkesin gitmesini bekleyerek kaldı.'],
          ] },
          { gizle: 'sai' }, { gizle: 'suha' }, { gizle: 'sefik' }, { gizle: 'calibe' },

          /* --- Nabi yolumu keser (romanda aracılık isteği) --- */
          { eger: (S) => b(S).p4_yalan === 'curudu', ise: [
            /* Diyalog T1 (4.4): ayık Nabi Feride'ye "küçük hanım … siz" der (aynı konuşmada sen/siz kaymaz) */
            ['nabi', 'Beni babanızın önünde küçülttünüz küçük hanım. Yine de bir ricam var.', 'ofkeli'],
          ], degilse: [
            ['nabi', 'Küçük hanım, Leyla Hanım\'a gidiyormuşsunuz. Bir ricam var.', 'ana'],
          ] },
          /* Anlatı T2b (GPT T24b Süha B4): seçeneklerden önce kızın adı Nabi'nin ağzından */
          ['nabi', 'Leyla Hanım\'a benden iki tatlı söz söyleyin. Zengin diye onu kimse sevmesin mi?', 'gulumser'],
          /* Tur 31: ritim (13 satır) için 817 ile birleşti */
          { soru: 'Nabi Bey merdivenin başını tutmuş.', secim: [
            { m: '“Siz parayı seviyorsunuz Nabi Bey. Leyla\'yı değil.”', etki: { vakar: 1 }, bayrak: { p4_nabi: 'igne' }, iz: 'Nabi Bey\'in aşkını adıyla andın: para.', adimlar: [
              ['f', 'Siz parayı seviyorsunuz Nabi Bey. Leyla\'yı değil.', 'kararli'],
              ['nabi', 'Para da kızdır küçük hanım; nazlıdır.', 'gulumser'],
              ['ic', 'Leyla bunu ondan duymalı. Duysa inanır mı?', 'endiseli'],
            ] },
            { m: '“Söylerim. Ne diyeyim?”', bayrak: { p4_nabi: 'rol' }, iz: 'Rol yaptın, Nabi Bey postacısının adını verdi.', adimlar: [
              ['f', 'Söylerim. Ne diyeyim?', 'tebessum'],
              ['nabi', 'Mektuplarımı aldığını bileyim, yeter. Hatice götürüyor.', 'gulumser'],
              { koz: MEKTUP, kaynak: 'Nabi Bey kendi ağzıyla söyledi', alt: 'Nabi Bey Leyla\'ya gizli mektup yazıyor, mektupları Hatice taşıyor.' },
              ['ic', 'Postacısı Hatice. Perihan Hanım\'ın kendi hizmetçisi, kardeşinin mektubunu taşıyor.', 'saskin'],
            ] },
            { m: '“Önce Remzi Bey\'e borcunuzu ödeyin.”', etki: { vakar: 1, calibe_suphe: 1 }, bayrak: { p4_nabi: 'tehdit' }, iz: 'Nabi Bey\'i borcuyla durdurdun. Karşılığında bir tehdit aldın.', adimlar: [
              ['f', 'Önce Remzi Bey\'e borcunuzu ödeyin. Sonra söz isteyin.', 'kararli'],
              { goster: ['nabi', 'ofkeli'] },
              /* Diyalog T1 (4.12, ses A4): bozuk ikinci cümle düzeldi; Perihan'ın atasözü kalıbı Nabi'ye geçmez */
              ['nabi', 'Çok biliyorsunuz küçük hanım. Ablam bilen kızı çabuk everir, kime denk gelirse.', 'ofkeli'],
              ['ic', 'Kime denk gelirse. Düğündeki görücü hanımın oğlu geldi aklıma.', 'endiseli'],
            ] },
          ] },
          { gizle: 'nabi' },

          /* --- İkindiye kim götürecek? --- */
          ['an', 'Perihan Hanım merdivenin altında bekliyormuş gibi belirdi. Kardeşinin yarım bıraktığını o tamamlayacaktı.'],
          { goster: ['calibe', 'sinsi'] },
          { eger: muk, ise: [
            /* Oynanış T1 (B6): calibe_suphe eşik 4 — Perihan'ın kuşkusu sözüne çıkar */
            { eger: (S) => (S.v.calibe_suphe || 0) >= 4, ise: [
              ['calibe', 'Leyla\'lara git kızım. Bu ara gözüm hep üstünde, Hatice götürsün.', 'soguk'],
            ], degilse: [{ eger: (S) => !!b(S).p3_mabeyn_tanik, ise: [
              ['calibe', 'Leyla\'lara git kızım. Mabeyn kapısında oyalanan kızı Hatice götürsün.', 'sinsi'],
            ], degilse: [{ eger: (S) => !!b(S).p3_aksam_tanik, ise: [
              ['calibe', 'Leyla\'lara git kızım. Pencerede kandil yakan kızı Hatice götürsün.', 'sinsi'],
            ], degilse: [
              ['calibe', 'Leyla\'lara git kızım. Hatice götürsün.', 'sinsi'],
            ] }] }] },
            /* Sürükleyicilik T1 (b4_5_6 4.3; S5): seçim öncesi bedel görünür (gözcünün gördüğü Perihan'a gider) */
            { soru: 'Gözcüyü o seçti. Ne görürse ona taşınacak.', secim: [
              { m: '“Hatice\'yle giderim efendim.”', bayrak: { p4_eskort: 'reftar' }, iz: 'Gözcüyü yanına aldın. O da her şeyini görecek.', adimlar: [
                ['ic', 'Hatice yanımda olursa ne taşıdığını ben de görürüm. Ama o da beni görür.', 'kararli'],
              ] },
              { m: '“Nimet gelsin efendim.”', kosul: (S) => b(S).p3_giydiren !== 'reftar', etki: { mehves: 1 }, bayrak: { p4_eskort: 'nimet' }, iz: 'Refakatçin Nimet. Yaşlı göz az görür.', adimlar: [
                ['calibe', 'Nimet mi? Peki, yaşlı göz az görür.', 'soguk'],
              ] },
              { m: '“Madam\'la giderim. Fransızca konuşuruz.”', etki: { josephine: 1 }, bayrak: { p4_eskort: 'josephine' }, iz: 'Refakatçin Madam. Perihan Hanım\'ın gözü yolda yok.', adimlar: [
                ['calibe', 'Madam\'ın Türkçesi az. Gözü çoktur ama.', 'soguk'],
              ] },
            ] },
          ], degilse: [
            ['calibe', 'Leyla\'lara Süha götürsün. Rengin solgun, yolda bakar.', 'sinsi'],
            { eger: (S) => b(S).p3_sari === 'dinledi', ise: [
              ['ic', 'Sarı odada kurulan tuzak buymuş: her gün, yalnız, hekim diye.', 'ofkeli'],
            ] },
            /* Anlatı denetimi T2 (b4_5_6 4.11): kahvenin sonunda kalkan Süha seçeneklerden önce yeniden görünür */
            ['an', 'Süha Bey sofaya çoktan dönmüştü. Perihan Hanım\'ın sözünü bekler gibi kapıda duruyordu.'],
            { goster: ['suha', 'notr'] },
            /* Tur 27 (B3 oynanış 1): sarı odada aynadaki sır ertesi gün okunur */
            { eger: (S) => b(S).p3_sari_son === 'sir', ise: [
              ['suha', 'Aynadaki sırrımız hâlâ yerinde mi?', 'soguk'],
            ] },
            { soru: 'Süha Bey kapıda eldivenini giyiyor.', secim: [
              { m: '“Nimet de gelsin.”', kosul: (S) => b(S).p3_giydiren !== 'reftar', etki: { mehves: 1 }, bayrak: { p4_eskort: 'nimet' }, iz: 'Arabaya Nimet\'i de aldın. Hekimle yalnız kalmayacaksın.', adimlar: [
                ['suha', 'Nimet Hanım gelsin. Yol uzun, uyur.', 'soguk'],
              ] },
              /* Tur 30 (B4 oynanış 2): hazırlığa bağlı ek seçenek. Kahvede yalanı çürüten kız babasının güvenini kalkan
                 yapar; Perihan Nimet'i mutfağa vermiş olsa da (p3_giydiren 'reftar') babanın sözüyle Nimet gelir.
                 Akış Nimet dalıyla aynı (p4_eskort 'nimet'); yalnız o seçenek kapalıyken görünür, sahte ikiz olmaz. */
              { m: '“Babam bu sabah bana inandı. Nimet de gelsin, babamın sözü.”', kosul: (S) => b(S).p4_yalan === 'curudu' && b(S).p3_giydiren === 'reftar', etki: { mehves: 1, vakar: 1 }, bayrak: { p4_eskort: 'nimet', p4_eskort_baba: true }, iz: 'Babanın güvenini kalkan yaptın. Nimet mutfaktan arabaya geldi.', adimlar: [
                ['suha', 'Hükümden güç almışsınız. Yarın hüküm değişir, ben değişmem.', 'soguk'],
              ] },
              { m: '“Madam da gelsin.”', etki: { josephine: 1 }, bayrak: { p4_eskort: 'josephine' }, iz: 'Arabaya Madam\'ı aldın. Süha Bey onun Türkçesini küçümsedi.', adimlar: [
                /* Diyalog T1 (4.2): Madam Fransız; Süha onun Türkçesini küçümser (3. bölüm: "Türkçeyi de öğreniyorum") */
                ['suha', 'Madam gelsin. Türkçesi az, rahat konuşuruz.', 'alayci'],
                ['ic', 'Az değil. Bunu ona söylemedim.', 'tebessum'],
              ] },
              { m: '“Peki.”', etki: { suha: 5, itibar: -1 }, bayrak: { p4_eskort: 'yalniz' }, iz: 'Hekimle yalnız gidiyorsun.',adimlar: [
                ['f', 'Peki.', 'kararli'],
                ['suha', 'Kısa cevap. Uzun yol.', 'notr'],
              ] },
            ] },
          ] },
          { gizle: 'calibe' }, { gizle: 'suha' },
          /* Serbest vakit: ikindiye kadar evde dolaşılır; hedef giyinme odası */
          { gorev: 2 }, { vakit: VAKIT_SABAH },
        ],
      },

      /* ---------------- 3. Feracenin altı ---------------- */
      {
        id: 'p4_giyin', mekan: 'fazila_oda', tetik: 'giris', kosul: (S) => S.gorev === 2, sahne: [],
        adimlar: [
          'Leyla’ya kahvedeki sözü başkası götürmeden yetişmeliyim.',
          { giyin: ['nisan_sade', 'nisan_gosterisli', 'nisan_yadigar'], soru: 'Feracemin altına ne giyeceğim?' },
          /* Anlatı denetimi T1: eski "Leyla'ların Konağı" tam ekran anlatısı ara sayfaya döndü (anlatıcı sesi) */
          { ara: { mekan: 'fevkiye_konak', yer: 'Leyla\'ların konağı · ikindi', satirlar: [
            (S) => (muk(S) ? 'İkindi arabası Feride\'yi Leyla\'ların kapısına bıraktı' : 'İkindi Feride\'yi Leyla\'ların kapısına Süha Bey getirdi') + (({
              reftar: '. Yanında, Perihan Hanım\'ın gözü olarak Hatice vardı.',
              nimet: '. Yanında Nimet vardı.',
              josephine: '. Yanında Madam Josephine vardı.',
              yalniz: '. Arabada yalnız ikisi vardı.',
            })[b(S).p4_eskort] || '.'),
            /* Doğrulama gece (B4 #5, 13 satır): iki satır bire indi */
            /* Tur 27 (B4 anlatı 5): 1. bölümden tanınan Leyla yeniden tanıtılmaz; satır kısaldı */
            'Leyla\'ların evi bambaşkaydı. Annesi perdeli odasından pek çıkmıyor, kimse kimsenin kapısını dinlemiyordu.',
          ] } },
          { gorev: 3 },
        ],
      },

      /* ---------------- 4. Leyla: roman, mektup, pakt ---------------- */
      {
        id: 'p4_fevkiye', mekan: 'fevkiye_konak', tetik: 'giris', kosul: (S) => S.gorev === 3, sahne: [],
        adimlar: [
          ['an', 'Leyla merdivenden koşarak indi. Misafirinin feracesini hizmetçiye bırakmadan kendi eliyle çıkardı.'],
          { goster: ['fevkiye', 'gulumser'] },
          { eger: (S) => S.giyili === 'nisan_yadigar', ise: [
            ['fevkiye', 'Annenin mavisi! Münevver Hanım görünce ağlayacak.', 'sevincli'],
          ], degilse: [{ eger: (S) => S.giyili === 'nisan_gosterisli', ise: [
            ['fevkiye', 'Pembe tafta! Kime giyindin bakalım?', 'muzip'],
          ], degilse: [
            ['fevkiye', 'Yine fildişi. Bugün de sade giyinmişsin.', 'notr'],
          ] }] },
          { ara: { mekan: 'fevkiye_oda', yer: 'Leyla\'nın odası', satirlar: [
            'Leyla\'nın odası romanlarla doluydu, çoğu yastıkların altına saklanmıştı.',
          ] } },
          { goster: ['fevkiye', 'ana'] },
          /* Oynanış T1 (B5, bulgu B4 b2): yastığın altındaki zarf; Süha yolunda da mektup kozunun yolu (p4_k_zarf
             aşağıda "Okut bana" dalında okunur). Nokta "Okut bana" seçimine dek açık. */
          { kesif: { x: 30, y: 46, w: 12, h: 10, ad: 'Yastığın altı', adimlar: [
            'Yastığın altından bir zarfın köşesi görünüyor, mürekkebi lacivert.',
            { eger: (S) => var_(S, MEKTUP), ise: [
              { kozKaynak: [MEKTUP, 'Zarfı kendim gördüm, biri de Leyla\'nın yastığında'] },
            ], degilse: [
              { koz: MEKTUP, kaynak: 'Leyla\'nın yastığında kendim gördüm', alt: 'Leyla\'ya lacivert mürekkepli, imzasız mektuplar geliyor. Nabi Bey\'in hokkası lacivert.' },
            ] },
            { bayrak: { p4_k_zarf: true } },
          ] } },
          { efekt: 'anahtar' }, // Tur 28 (B4 ses 4)
          ['an', 'Leyla kapıyı kilitledi. Eugène Sue\'nün romanının arasından bir mektup çıkardı.'],
          ['fevkiye', 'Romandaki gibi: gizli, imzasız. Kimden, bil!', 'gulumser'],
          { soru: 'Yanakları al al.', secim: [
            { m: '“Okut bana.”', etki: { fevkiye: 1 }, bayrak: { p4_fevkiye: 'okudu' }, iz: 'Mektubu okudun. Leyla\'nın neye inanmak istediğini gördün.', adimlar: [
              '“Senin paran değil, gözlerin.” Altında imza yok, mürekkep lacivert.',
              /* GPT Tur 23 (Remzi, B4): Leyla'nın inanma isteği burada kurulur; 6. bölümdeki "evet" buna dayanır */
              /* Sürükleyicilik T1 (b4_5_6 4b-2): paktın bedeli görünür; 6. bölümdeki "evet"in tohumu (çözmez) */
              ['fevkiye', 'Herkes paramı sayar Feride, gözlerime ilk bakan o. Cevabımı yakında vereceğim.', 'gulumser'],
              ['ic', 'Kırk lira borçlu bir adam paradan söz etmeyi unutmamış.', 'kararli'],
              { eger: (S) => b(S).p4_v_hatice === 'sayi', ise: [
                ['ic', 'Yazı Nabi Bey\'in, bu üçüncüsü. Öbür ikisi de bu romanın arasında mı?', 'endiseli'],
              ], degilse: [{ eger: (S) => !!b(S).p4_k_zarf, ise: [
                /* Oynanış T1 (B5): yastığın altındaki zarf keşfi */
                ['ic', 'Yastığın altındaki zarf da bu mürekkepte. Demek bu ilki değil.', 'endiseli'],
              /* Tur 30 (B4 anlatı 3; şüphe ≠ hüküm): hüküm yalnız Nabi'nin kendi ağzıyla söylediği yolda; mutfaktan ya da
                 yastıktan gelen koz yalnız mürekkebi bilir */
              ], degilse: [{ eger: (S) => b(S).p4_nabi === 'rol', ise: [
                ['ic', 'Yazı Nabi Bey\'in, getiren de Hatice. Leyla bunu bilmiyor.', 'endiseli'],
              ], degilse: [{ eger: (S) => var_(S, MEKTUP), ise: [
                ['ic', 'Lacivert mürekkep, Nabi Bey\'in hokkası da lacivert. Leyla\'ya söylemeden emin olmalıyım.', 'endiseli'],
              ] }] }] }] },
            ] },
            { m: '“Nabi Bey\'den. Ondan uzak dur.”', etki: { fevkiye: -1, vakar: 1 }, bayrak: { p4_fevkiye: 'uyardi' }, iz: 'Leyla\'yı uyardın. Sözün ona Perihan Hanım\'ınki gibi geldi.', adimlar: [
              ['f', 'Nabi Bey\'den. Ondan uzak dur.', 'kararli'],
              ['fevkiye', 'Sen de mi Perihan Hanım gibi konuşacaksın?', 'mahzun'],
            ] },
            /* Oynanış T1 (B1): bilgi kozla görünür kilit; arkadaşa söylemek kozu yakmaz (kahvede ya da törende yanan da bilir) */
            /* GPT T26 Süha (B4 O2, öncelik 1–2): koz elde ise ◆ rozetli seçenek (dosta söylemek kozu yakmaz); koz
               harcanmış ama bilgi duruyorsa aynı söz rozetsiz, "bildiğin" olarak açık (boş "Kozun:" etiketi kalmaz).
               Sırrı hiç bilmeyene kilit gösterilmez (metin bilmediğini sızdırmasın). */
            /* GPT T29 (A4-1): etiket niyet; kesinlik derecesi LEYLA_YUZUK içinde bilgiye göre */
            { m: 'Hatice\'nin yüzüğünü söyle.', kosul: (S) => reftarBilgi(S) && yuzukElde(S), kozGerek: [YUZUK, KAPI, KOZ], kilitGoster: gizliKilit, bayrak: { p4_fevkiye: 'koz' }, iz: 'Yüzüğü Leyla\'ya söyledin. Dosta söylenen sır kozunu yakmaz.', adimlar: LEYLA_YUZUK },
            { m: 'Hatice\'nin yüzüğünü söyle.', kosul: (S) => reftarBilgi(S) && !yuzukElde(S), bayrak: { p4_fevkiye: 'koz' }, iz: 'Kozu harcamıştın. Bildiğini dostuna söylemek yine senin elinde.', adimlar: LEYLA_YUZUK },
          ] },
          { eger: (S) => b(S).p4_fevkiye === 'koz', ise: [
            ['fevkiye', 'Ne çıkarsa çıksın, böyle dur. Yemin edelim, bir maddeyi sen koy.', 'kararli'],
          ], degilse: [
            { eger: muk, ise: [
              ['fevkiye', 'Yüzün kızardı. Sen de mektup aldın!', 'muzip'],
              ['ic', 'Aldım. Leyla\'ya henüz anlatmadım.', 'utanmis'],
            ], degilse: [
              /* Tur 29 (B4 diyalog 10'a): karakter_sesleri örneği birebir kullanılmaz; Leyla'nın roman diliyle yeni cümle */
              ['fevkiye', 'Hekim Bey seni getirdi. Romandan çıkmış gibi, kötü adam bölümünden.', 'endiseli'],
              /* Tur 28b (kök 2): ona açıkça hayır demiş kızın iç sesi kararsızlık üretmez */
              { eger: suhaSinir, ise: [
                ['ic', 'O romanı ben de okudum. Kötü adam hep son bölümde yakalanır.', 'kararli'],
              ], degilse: [{ eger: (S) => b(S).p4_eskort !== 'yalniz', ise: [
                /* Tur 30 (B4 karşılaşma ≠ istek): refakatçi seçen kıza çekim yüklenmez; seçtiği tedbir konuşur */
                ['ic', 'O bölümü ben de okudum. Kız o arabaya yalnız binmez.', 'kararli'],
              ], degilse: [
                /* Hekimle yalnız binmeyi kendisi seçti ("Peki"): kararsızlık o seçimin içinde */
                ['ic', 'Hangi bölümden çıktığını ben de bilmiyorum.', 'endiseli'],
              ] }] },
            ] },
            /* Tur 27 (GPT B4-D 10'a-1): yemin çağrısı ilk tepkiye bağlı */
            { eger: (S) => b(S).p4_fevkiye === 'uyardi', ise: [
              ['fevkiye', 'Bana hüküm verme, yanımda dur. Buna yemin edelim, bir maddeyi de sen koy.', 'mahzun'],
            ], degilse: [
              ['fevkiye', 'Öyleyse yemin edelim, romanlardaki gibi. Bir maddeyi sen koy.', 'gulumser'],
            ] },
          ] },
          { soru: 'İki elimiz romanın kapağında.', secim: [
            /* Tur 28b (GPT O4-2): mektubu okumuş ve yüzüğü bilen kıza "sır yok" yemini iki ayrı karar olarak sunulur
               (aynı seçim, yeni karar yok): ilk sırrı şimdi söylemek ya da yarına bırakmak. Gördüğü zaten tanıklık;
               "delilsiz" gerekçesi kullanılmaz. Şimdi söyleyen yolda p4_fevkiye 'koz' olur (5. bölüm Leyla'nın baktığını okur). */
            { m: '“Birbirimizden sır yok. İlki benden, şimdi.”', kosul: (S) => b(S).p4_fevkiye === 'okudu' && reftarBilgi(S), etki: { fevkiye: 1 }, bayrak: { p4_pakt: 'sir', p4_sir: 'anlatti', p4_fevkiye: 'koz' }, iz: 'Maddeni koydun ve ilk sırrı hemen söyledin: yüzüğü.', adimlar: [
              { muzik: 'huzun' },
              /* GPT T29 (A4-1): verilişi görmeyen kız duyduğunu söyler */
              { eger: yuzukGordu, ise: [
                ['f', 'Hatice’nin yüzüğünü Nabi Bey verdi. Kendi gözümle gördüm.', 'kararli'],
              ], degilse: [
                ['f', 'Hatice\'nin yüzüğünün eşi Nabi Bey\'de. Verirken görmedim.', 'mahzun'],
              ] },
              ['fevkiye', 'Yalan söylüyorsun.', 'ofkeli'],
              { eger: (S) => b(S).p4_nabi === 'rol', ise: [
                ['f', 'Mektuplarını Hatice getiriyor, bunu Nabi Bey kendisi söyledi. Ne düşüneceğine sen karar ver.', 'mahzun'],
              ], degilse: [
                ['f', 'Hatice\'nin eline bak. Ne düşüneceğine sen karar ver.', 'mahzun'],
              ] },
              'Mektubu romanın arasına geri soktu. Kapağı iki eliyle bastırdı, kimse açmasın diye.',
              ['fevkiye', 'Yüzüğe kendim bakacağım.', 'mahzun'],
              { muzik: null },
            ] },
            { m: 'Birbirimizden sır yok. Hatice’nin eline birlikte baktığımızda söyleyeceğim.', kosul: (S) => b(S).p4_fevkiye === 'okudu' && reftarBilgi(S), etki: { fevkiye: 1 }, bayrak: { p4_pakt: 'sir', p4_sir: 'sakli' }, iz: 'Yemin ettin ama ilk sırrını yarına bıraktın. Leyla bunu borç saydı.', adimlar: [
              ['f', 'Mektubuna dair bir sırrım var. Hatice\'nin elini sana gösterebileceğim gün söyleyeceğim.', 'kararli'],
              ['fevkiye', 'Yarın mı? Yeminimizin ilk günü bir “yarın”la başladı.', 'mahzun'],
            ] },
            { m: '“Birbirimizden sır yok.”', kosul: (S) => !(b(S).p4_fevkiye === 'okudu' && reftarBilgi(S)), etki: { fevkiye: 1 }, bayrak: { p4_pakt: 'sir' }, iz: 'Maddeni koydun: birbirinizden sır yok.',adimlar: [
              ['fevkiye', 'Sır yok. En zoru bu, iyi seçtin.', 'tebessum'],
              /* Madde hemen uygulanır: bir sır söylenir */
              { eger: muk, ise: [
                { bayrak: { p4_sir: 'mukaddem' } },
                ['f', 'İlki benden: Kenan Bey bana yazıyor. Kendi ağzımla söylediğim ilk kişi sensin.', 'utanmis'],
                ['fevkiye', 'Biliyordum! Ama senden duymak başka.', 'sevincli'],
              ], degilse: [{ eger: (S) => b(S).p3_son === 'suha', ise: [
                { bayrak: { p4_sir: 'kapi' } },
                ['f', 'İlki benden: dün gece Süha Bey\'in kapısını çaldım.', 'endiseli'],
                ['fevkiye', 'Çaldın mı? …Yeminin ilk günü ağır başladı.', 'endiseli'],
              ], degilse: [{ eger: suhaSinir, ise: [
                /* GPT T29 (A4-2): ona açıkça hayır demiş kızın ilk sırrı seçilmemiş bir korkusuzluk itirafı olmaz */
                { bayrak: { p4_sir: 'korku' } },
                ['f', 'İlki benden: o hekime hayır dedim. Konakta kimse bu hayırı duymak istemiyor.', 'kararli'],
                ['fevkiye', 'Ben duydum. Yalnız kalmayacaksın.', 'kararli'],
              ], degilse: [{ eger: suhaYakin, ise: [
                /* Tur 30 (B4 karşılaşma ≠ istek): bu itiraf yalnız Süha'yla bir yakınlık seçmiş kıza */
                { bayrak: { p4_sir: 'korku' } },
                ['f', 'İlki benden: o hekimden korkmuyorum. Korkmam gerekirken.', 'utanmis'],
                ['fevkiye', 'En kötü sır bu. Kimseye söylemem.', 'endiseli'],
              ], degilse: [
                { bayrak: { p4_sir: 'korku' } },
                ['f', 'İlki benden: o hekimi bana Perihan Hanım yolluyor. Neden yolladığını bilmiyorum.', 'endiseli'],
                ['fevkiye', 'Hekim değil, gözcü yani. Kimseye söylemem.', 'endiseli'],
              ] }] }] }] },
            ] },
            { m: '“Mektuplarımızı birbirimize taşırız.”', etki: { fevkiye: 1 }, bayrak: { p4_pakt: 'mektup' }, iz: 'Leyla\'nın çekmecesi artık senin postanen.', adimlar: [
              ['fevkiye', 'Benim çekmecem senin postanen. Kimse aramaz.', 'tebessum'],
              /* İlk mektubu Feride kendisi bırakır */
              'Tek satır yazıp çekmecesine koydum: “Bana bir şey olursa Perihan Hanım\'a bakın.”',
              ['fevkiye', 'Bu postane değil, vasiyet!', 'muzip'],
              ['f', 'Postane. Vasiyet daha uzun olur.', 'tebessum'],
            ] },
            { m: '“O sorarsa ikimiz de aynı cevabı verelim.”', etki: { fevkiye: 1, calibe_suphe: 1 }, bayrak: { p4_pakt: 'calibe' }, iz: 'Leyla\'yla tek ses oldunuz. Sonraki ziyaretlerinde onun dadısı refakat edecek.', adimlar: [
              ['fevkiye', 'İkimize ayrı ayrı sorsa da mı? Öyle yapar, bilirim.', 'kararli'],
              /* Tek sesin ilk ortak cevabı: refakat */
              /* Diyalog T1 (dil Ü7, kısmi): "ilk cevap" sözü 996/1014 ile eş kalır; cümle sadeleşti */
              ['f', 'Yarından sonra beni senin dadın getirip götürsün.', 'kararli'],
              ['fevkiye', 'Dadım da öyle der. Perihan Hanım sorarsa ikimiz birden söyleriz.', 'tebessum'],
            ] },
          ] },
          { eger: muk, ise: [
            ['fevkiye', 'Benim maddem: bugün seni bir dakikalığına kapıya çıkaracağım. Sorma.', 'muzip'],
          ], degilse: [
            /* GPT T26 Süha (B4 A1, 10'a): madde refakatçi hafızasına uyar; Feride maddeye kendi sözüyle karşılık verir */
            { eger: (S) => b(S).p4_eskort === 'yalniz', ise: [
              ['fevkiye', 'Benim maddem: o hekimle bir daha yalnız arabaya binmeyeceksin.', 'endiseli'],
              ['f', 'Gelirken bindim bile. Dönüşte binmem, söz.', 'kararli'], // Tur 28 (B4 oynanış 4)
            ], degilse: [
              { eger: (S) => b(S).p4_eskort === 'josephine', ise: [
                /* Tur 33 (B4 diyalog 8): üç madde aynı cümle olmasın */
                ['fevkiye', 'Benim maddem: Madam\'ı bırakma. O hekimle arabaya yalnız binersen yeminimiz biter.', 'kararli'],
              ], degilse: [
                ['fevkiye', 'Benim maddem: dönüşte Nimet senin yanında otursun, hekimin karşısında değil.', 'kararli'],
              ] },
              ['f', 'Söz. Yeminimiz de benim maddem kadar ağır.', 'tebessum'],
            ] },
          ] },
          { eger: (S) => b(S).p4_fevkiye === 'koz' || b(S).p4_fevkiye === 'uyardi', ise: [{ cizim: 'an_pakt_yuzuk' }], degilse: [{ cizim: 'an_pakt' }] },
          { gizle: 'fevkiye' },
          /* Anlatı denetimi T1 (mercek_tanitim T10; GPT Tur 23 B4): Leyla'nın götürmesi ve Münevver'in orada oluşu kurulur */
          /* İkinci geçiş (GPT Tur 23 Kenan/Süha/Remzi B4): kilitli odanın açılışı ve Münevver'in orada oluşu tek köprüde */
          { ara: { mekan: 'fevkiye_anne_oda', yer: 'Leyla\'ların konağı · annesinin odası', satirlar: [
            'Yemin bitince Leyla kilidi açtı. Feride\'yi annesinin perdeli odasına götürüp kapıda bıraktı.',
            /* Anlatı denetimi T2 (mercek_doz B4a3, §5b): odada kimin beklediğini sayfa söylemez; sahnenin ilk satırı tanıtır */
            'Münevver Hanım, Sait Efendi\'nin kapısını sık çalamazdı. Leyla\'nın annesinin perdeli odasında ise kimse ziyaret saymazdı.',
          ] } },
          { gorev: 4 },
        ],
      },

      /* ---------------- 5. Münevver Hanım: "İnandın mı?" ---------------- */
      {
        id: 'p4_munevver', mekan: 'fevkiye_anne_oda', tetik: 'giris', kosul: (S) => S.gorev === 4, sahne: [],
        adimlar: [
          { muzik: 'ev' }, // Tur 28 (B4 ses 3)
          ['an', 'Münevver Hanım Feride\'nin elini tuttu; kapı kapandıktan sonra da bırakmadı.'],
          { goster: ['munevver', 'gulumser'] },
          /* GPT T25 Kenan (B4 A1): duvarda kâğıdı Kenan aldıysa pusula anneye oğlunun elinden gelmiştir */
          { eger: (S) => b(S).p3_son === 'mektup', ise: [{ eger: (S) => muk(S) && b(S).p3_haberci === 'kendi', ise: [
            ['munevver', 'Pusulanı oğlum getirdi kızım. Kimse görmesin diye yaktım; ne istediğini biliyorum.', 'gulumser'],
          ], degilse: [
            ['munevver', 'Pusulanı aldım kızım. Kimse görmesin diye yaktım; ne istediğini biliyorum.', 'gulumser'],
          ] }], degilse: [
            ['munevver', 'Leyla\'nın annesine geldim derler. Sana geldim.', 'gulumser'],
          ] },
          { eger: (S) => S.giyili === 'nisan_yadigar', ise: [
            { goster: ['munevver', 'dolu'] }, 'Gözü elbiseme düştü. Ağzını açmadı, elimi sıktı.',
          ] },
          /* Anlatı denetimi T2 (b4_5_6 4.5): pusulayı yollamış kızın cevabı bilinir; soru sıfırlanmaz */
          /* GPT T25 Kenan (B4 A1): Kenan'ın dün gece kabul ettiği güven geri alınmaz; soru annenin kendi isteği.
             (B4 S2): karar sorusu karşılaşmanın ilk satırlarına çekildi; yalan ve gerdanlık haberi cevaptan sonra */
          { eger: (S) => b(S).p3_son === 'mektup', ise: [
            ['munevver', 'Pusulan oğluma yetti kızım. Bana yetmez, senin ağzından duyayım: inandın mı?', 'endiseli'],
          ], degilse: [
            /* Tur 27 (B4 diyalog 1): "sözcü" dönem dışı */
            ['munevver', 'Oğlum bir şey soruyor, elçisi benim. İnandın mı?', 'endiseli'],
          ] },
          { soru: 'Münevver Hanım elimi bırakmadı.', secim: [
            /* GPT T26 Süha (B4 O3, öncelik 6): Kenan'ın gönlü cevap ona ulaşınca değişir — Kenan yolunda kapıdaki arabada
               (kâhya taşır); Süha yolunda Kenan bu bölümde cevabı duymaz, gönül bildirimi de çıkmaz. */
            { m: '“İnanmadım. Kendisi de bilsin.”', etki: { munevver: 1 }, bayrak: { p4_munevver: 'inanmadim' }, iz: 'Cevabın Kenan\'a gidiyor: inanmadın.', adimlar: [
              ['f', 'İnanmadım. Kendisi de bilsin.', 'kararli'],
              ['munevver', 'Bilecek. Bu cümleyle bir hafta yaşar.', 'gulumser'],
            ] },
            /* Oynanış T1 (B3): soruyu annesine sordurana kırılmak Kenan'ın gönlünü düşürür; tepkisi Münevver'in ağzından */
            { m: '“Bunu sormak kırıcı. İnansam burada olmazdım.”', etki: { vakar: 1 }, bayrak: { p4_munevver: 'kirici' }, iz: 'Kenan\'ın sorusuna kırıldın. Annesi bunu ona söyleyecek.', adimlar: [
              /* Diyalog T1 (D2): başbaşa Münevver'e "nineciğim" (karakter_sesleri hitap tablosu) */
              ['f', 'Bunu sormak kırıcı hanımefendi. İnansam burada olmazdım.', 'kararli'],
              ['munevver', 'Kırıldın, iyi, kırılan inanmamıştır. Ama oğlum bu sözle bir gece uyumaz.', 'notr'],
            ] },
            { m: '“Kendisi sorsun. Annesinin ağzından değil.”', bayrak: { p4_munevver: 'gelsin' }, iz: 'Kenan\'ı kendi sorusunu sormaya çağırdın.', adimlar: [
              ['f', 'Kendisi sorsun. Annesinin ağzından değil.', 'kararli'],
              ['munevver', 'Benim oğlum sana bakmaya utanır. Ama söylerim.', 'gulumser'],
            ] },
          ] },
          /* GPT T25 Kenan (B4 S2): kahvenin haberi ve gerdanlığın yeri cevaptan sonra; iki karar arası kısa kalır */
          { eger: (S) => b(S).p4_yalan === 'curudu', ise: [
            ['munevver', 'Sait Efendi Nabi\'yi azarlamış. Kâhyam kapıdan duydu.', 'gulumser'],
          ], degilse: [
            { muzik: 'huzun' }, // Tur 28 (B4 ses 3): hüzün yalnız ıslak yastık dalında
            ['munevver', 'Yalan bizim kapıya da geldi. Oğlum sabahtan beri yemek yemedi.', 'endiseli'],
            ['munevver', 'Sabah yastığını değiştirdiler, ıslaktı. Bunu söylediğimi bilmesin.', 'dolu'],
            /* Diyalog T1 (b 10'a, D8): duygusal doruğa Feride'nin cevabı; acındırma değil karar */
            ['ic', 'Babam o yalana inanmasın.', 'kararli'],
            /* Tur 33 (B4 ses 1): ıslak yastığın hüznü planla birlikte sürer; 'ev' yeniden açılmaz */
          ] },
          { eger: (S) => b(S).p3_gerdanlik === 'calibe', ise: [
            ['munevver', 'Gerdanlık boynunda değil. Sandığın anahtarı kimde?', 'endiseli'],
            ['f', 'Perihan Hanım\'da hanımefendi. Boynumdan kendi eliyle çıkardı, unutmadım.', 'ofkeli'], // Tur 28 (B4 diyalog 3)
          ] },
          /* Tur 27 (GPT B4-A1/D1; B4 diyalog 8): kazanılmış kahve sonucu sıfırlanmaz; yeni hedef konuşmadan doğar */
          { eger: (S) => b(S).p4_yalan === 'curudu', ise: [
            ['munevver', 'Peki Hacı Kâmil\'in kahvehanesindeki ağızları kim susturacak?', 'notr'], // Tur 28 (B4 diyalog 1–2)
          ], degilse: [
            ['munevver', 'Babanın aklından bu yalanı çıkarmak lazım. Ne yapalım?', 'notr'],
          ] },
          { soru: 'Leyla\'yla yemin ettik. Şimdi Münevver Hanım bir plan bekliyor.', secim: [
            { m: '“Hacı Kâmil\'e gidin. Yalan onun kahvesinden çıktı.”', kosul: (S) => b(S).p3_remzi === 'bilgi', etki: { munevver: 1 }, bayrak: { p4_plan: 'kahve' }, adimlar: [
              ['munevver', 'Kâmil, rahmetli beyimin çırağıydı. Ağzını ben açtırırım.', 'kararli'],
              ['ic', 'Kâmil onu geri çevirmez. Ben gidersem kapıdan bile alamazlar.', 'tebessum'],
            ] },
            { m: '“Nabi Bey\'in kumar borcu var. Alacaklısı Remzi Bey.”', etki: { munevver: 1 }, bayrak: { p4_plan: 'remzi' }, adimlar: [
              ['munevver', 'Kumarcının sözü kumar masasında kalır. Sait Efendi bunu bilir.', 'kararli'],
              /* Tur 27 (GPT B4-D2; B4 diyalog 6): para dili Remzi'nin; Feride senedin işini düşünür */
              ['ic', 'Senet elime geçerse Nabi Bey\'in sözü de değişir.', 'kararli'],
            ] },
            { m: '“Kenan Bey babama kendisi gitsin.”', bayrak: { p4_plan: 'mukaddem' }, adimlar: [
              ['munevver', 'Gider. Utancından ölür ama gider.', 'gulumser'],
              ['ic', 'Babamın karşısında kızaran bir adam. Sarhoş diye kimse inanmaz.', 'tebessum'],
            ] },
            /* Tur 30 (B4 anlatı 4, oynanış 1): iki ayrı söz iki ayrı değer; akşam babaya ve 5. bölüme giden cümle ayrışır
               ('kendi' = "Babamı ben razı ederim"; 5. bölüm yalnız onu okur) */
            { m: '“Kahvehanedeki ağızları ben kapatırım. Siz bekleyin.”', kosul: (S) => b(S).p4_yalan === 'curudu', etki: { vakar: 1 }, bayrak: { p4_plan: 'kahve_kendi' }, adimlar: [
              ['munevver', 'Behiye de böyleydi. Kimseye iş bırakmazdı.', 'dolu'],
              ['ic', 'Annemi anınca sesi titredi. Benimki titremedi, buna ben de şaştım.', 'mahzun'],
            ] },
            { m: '“Babamı ben razı ederim. Siz bekleyin.”', kosul: (S) => b(S).p4_yalan !== 'curudu', etki: { vakar: 1 }, bayrak: { p4_plan: 'kendi' }, adimlar: [
              ['munevver', 'Behiye de böyleydi. Kimseye iş bırakmazdı.', 'dolu'],
              ['ic', 'Annemi anınca sesi titredi. Benimki titremedi, buna ben de şaştım.', 'mahzun'],
            ] },
          ] },
          /* Anlatı denetimi T2 (b4_5_6 4.8): Münevver odada kalır; kapıdaki araba onun, içinde oğlu (Kenan yolu) */
          ['an', 'Münevver Hanım Feride\'nin elini bıraktı. Leyla\'nın annesiyle biraz daha oturacaktı.'],
          { gizle: 'munevver' },
          /* Tur 27 (B4 anlatı 10'a): Süha yolunda Feride'nin göremediği "öte yanda" */
          { eger: (S) => !muk(S), ise: [
            { ara: { yer: 'Aynı saatlerde · konak', satirlar: [
              'Perihan Hanım, Hatice\'nin getirdiği katlı bir kâğıdı okudu. Kâğıdı yakmadı, çekmecesine kilitledi.',
            ] } },
          ] },
          { ara: { mekan: 'fevkiye_kapi', yer: 'Leyla\'ların kapısı · ayrılış vakti', satirlar: [
            (S) => (muk(S)
              ? 'Leyla\'nın maddesi yeminin en kısasıydı: bir dakika. Feride kimin için olduğunu sormadı.'
              : 'İkindi bitiyordu. Bir kızın misafirlikten dönüşünü, gidişinden daha çok göz izlerdi.'),
            /* Tur 27 (B4 anlatı 4): kapıdaki arabayı ve içindekini ara sayfa önceden söylemez (Leyla'nın "Sorma"sı sönmesin);
               kâhyanın haberini Kenan kendi ağzıyla verir */
          ] } },
          { gorev: 5 },
        ],
      },

      /* ---------------- 6. Kapı: Kenan (yalnız onun yolunda) ve Remzi ---------------- */
      {
        id: 'p4_kapi', mekan: 'fevkiye_kapi', tetik: 'giris', kosul: (S) => S.gorev === 5, sahne: [],
        adimlar: [
          /* Sürükleyicilik T1 (b4_5_6 4.6; S5): sahne içi sıra — önce Remzi'nin senedi (güç), sonra Kenan (romantik doruk).
             Senet Kenan'ın "inandı mı?" sorusunun cevabı olur; Kenan yolunda sahne Kenan'da biter. */
          /* --- Remzi (iki yolda) --- */
          /* Tur 27 (B4 ses 3): Remzi'nin senedi Kenan'ın romantik temasında çalmaz. Tur 33 (B4 ses 1): 'ev' tekdüzeliği
             kırılır; Remzi'nin teması yok, girişi müziksiz bir nal sesiyle */
          { muzik: 'sessiz' }, { efekt: 'nal' },
          /* Tur 33 (B4 anlatı 2): Nabi borçlu ve adamsız (adam Remzi'nin, pilot3); Remzi kendi uşağından öğrenir */
          ['an', 'Leyla\'ların kapısında bir at durdu. Remzi Bey kapıdaki uşağa Feride\'nin çıkıp çıkmadığını soruyordu.'],
          { goster: ['remzi', 'notr'] },
          { eger: muk, ise: [
            /* Tur 27 (B4 sürük 3): Kenan yolunun sürprizini rakip ele vermez */
            ['remzi', 'Kapınızda bir araba bekliyor. Sahibi ayık; şahidim.', 'gulumser'],
          ], degilse: [
            ['remzi', 'Hekim Bey arabada bekliyor. Bu kadar beklediğine göre size söyleyecekleri bitmemiş.', 'kararli'],
          ] },
          { eger: (S) => b(S).p3_remzi === 'duello', ise: [
            /* Diyalog T1 (4.1): Remzi alacaklının kendisi; kendi senedini satın alamaz, getirir */
            ['remzi', 'Sekiz yüz demiştim. Bugün kırk liralık bir kâğıt getirdim, daha işe yarar.', 'kararli'],
          ], degilse: [{ eger: (S) => b(S).p3_remzi === 'bilgi', ise: [
            ['remzi', 'Nabi\'nin yalanını size ben söylemiştim. Bugün kâğıdını getirdim.', 'kararli'],
          ], degilse: [
            ['remzi', 'Benden laf alamazmışım. Ben de kâğıt getirdim, kâğıt konuşur.', 'gulumser'],
          ] }] },
          { efekt: 'kagit' }, // Tur 28 (B4 ses 4)
          'Yelek cebinden katlı bir kâğıt çıkardı.',
          ['remzi', 'Nabi\'nin senedi, kırk lira, altında kendi imzası. Dün gece vadesi doldu.', 'kararli'],
          ['f', 'Nabi Bey buna benim baktığımı bilse?', 'tebessum'],
          ['remzi', 'Borcunu inkâr eder. Elimde kalacak kırk lirayı varın siz hesap edin.', 'gulumser'],
          { soru: 'Senedi uzatıyor. Alırsam ertesi gün benden ne isteyecek?', secim: [
            { m: '“Bana verin.”', etki: { remzi: 6 }, bayrak: { p4_remzi: 'aldi' }, iz: 'Senedi bir teşekküre aldın. Remzi Bey ömründe bu kadar ucuza satmamıştı.', adimlar: [
              ['f', 'Bana verin.', 'kararli'],
              ['remzi', 'Fiyatı?', 'gulumser'],
              ['f', 'Teşekkürüm. Nadir veririm, pahalıdır.', 'tebessum'],
              { goster: ['remzi', 'saskin'] },
              'Kâğıdı uzattı.',
              { koz: SENET, kaynak: 'Senet elimde', alt: 'Nabi Bey\'in Remzi Bey\'e kırk liralık kumar senedi. Borçlu bir adamın şahitliği kolay dinlenmez.' },
            ] },
            /* Tur 33 (B4 oynanış 3): senedi kendi eline almadan çözen yolun bedeli; Remzi kapıdan girer, konak konuşur */
            { m: '“Babama götürün.”', etki: { remzi: 4, itibar: -1 }, bayrak: { p4_remzi: 'baba' }, iz: 'Remzi Bey\'e babanın kapısını gösterdin. Konak onun gelişini konuşacak.', adimlar: [
              ['f', 'Babama götürün.', 'kararli'],
              ['remzi', 'Götürürüm. Kapınızdan girmiş olurum.', 'gulumser'],
              ['ic', 'Kapımızdan girmek istiyor. Görücü hanımın oğlu bu.', 'endiseli'],
            ] },
            /* Oynanış T1 (B3): Remzi'yi geri çeviren seçenek gönülden düşer; tepkisi aynı satırda görünür */
            { m: '“Cebinizde dursun. Para sizin dilinizse susun.”', etki: { remzi: -3 }, bayrak: { p4_remzi: 'cep' }, iz: 'Senedi geri çevirdin. Remzi Bey kâğıdı da sözünü de cebine koydu.', adimlar: [
              ['f', 'Cebinizde dursun. Para sizin dilinizse susun.', 'kararli'],
              ['remzi', 'Susarım. Kırk lira da benimle susar.', 'kararli'], // Tur 29 (B4 diyalog 1): kâğıt imgesi ikinci kez dönmez
            ] },
          ] },
          { gizle: 'remzi' },
          /* Kenan yolu eve döner; akşam serbest vakti (Süha yolunda arabadan sonra) */
          /* Tur 18 (öneri 7): akşam vaktinden önce konum evde (salon; vakit listesindeki yerler düğme olarak kalsın) */
          /* GPT Tur 23 (Kenan B4): "tek ses" maddesi Kenan yolunda da aynı gün sınanır (Süha yolunda dönüş arabasında) */
          { eger: muk, ise: [
            /* Anlatı denetimi T2 (mercek_doz B4a4; b4_5_6 4.8): art arda iki 'an' tek satır; Münevver içeride.
               Tur 27 (B4 anlatı 4): sürpriz üçüncü kez söylenmez; Kenan goster ile ilk kez görünür */
            { muzik: 'romantik' },
            ['an', 'Remzi Bey\'in atı köşeyi döndü. Leyla\'nın dakikası şimdi başlıyordu.'],
            { eger: (S) => b(S).p4_v_nazli === 'ordu', ise: [
              ['ic', 'Nazlı söylemişti. Perihan Hanım bu dakikayı da biliyor.', 'endiseli'],
            ] },
            { eger: (S) => b(S).p4_eskort === 'reftar', ise: [
              'Hatice taşlıkta sırtını dönmüş bekliyor.',
            ], degilse: [{ eger: (S) => b(S).p4_eskort === 'nimet', ise: [
              'Nimet kapının pervazında, bekçi gibi.',
            ], degilse: [
              'Madam taşlıkta, Leyla\'nın lalasını kırık Türkçesiyle lafa tutmuş.',
            ] }] },
            { goster: ['mukaddem', 'utangac'] },
            /* Anlatı denetimi T2 (b4_5_6 4.6): pusulayı duvar kapısında kendi eliyle veren kızla dün gece yüz yüze gelmişti */
            { eger: (S) => b(S).p3_son === 'mektup' && b(S).p3_haberci === 'kendi', ise: [
              ['mukaddem', 'Dün gece duvarda elinize dokunmadan kâğıdı aldım. Bütün gece buna pişman oldum.', 'utangac'], // Tur 28 (B4 diyalog 6)
            ], degilse: [{ eger: (S) => b(S).p3_soz === 'ad', ise: [
              ['mukaddem', 'Dün adımı söylediniz. Bugün “Bey”i geri takmayın.', 'utangac'],
            ], degilse: [{ eger: (S) => b(S).p3_soz === 'kitap', ise: [
              ['mukaddem', 'Cevabı kitapta bekledim. Kitap gelmedi, siz geldiniz.', 'gulumser'],
            ], degilse: [{ eger: (S) => b(S).p3_soz === 'okundu', ise: [
              ['mukaddem', '“Okundu.” O tek kelimeyle bütün gece uyumadım.', 'gulumser'],
            ], degilse: [{ eger: (S) => b(S).p3_soz === 'kapadi', ise: [
              /* Diyalog T1 (ses A7): yedi açılışın hepsi "Dün… Bugün…" olmasın */
              ['mukaddem', 'Kapıyı siz kapamıştınız. Arabanınkini ben açık bıraktım.', 'utangac'],
            ], degilse: [{ eger: (S) => b(S).p3_soz === 'kilit', ise: [
              /* Doğrulama gece (B4): "soru sırası bende" deyip soruyu Feride'ye bırakıyordu; soru biriktirilir, basamaktan sonra sorulur */
              ['mukaddem', 'Kilidi siz sormuştunuz. Ben de bir soru biriktirdim.', 'gulumser'],
            ], degilse: [
              ['mukaddem', 'Cevap gelmedi. Ben de sormaya geldim.', 'utangac'],
            ] }] }] }] }] }] },
            /* Tur 27 (B3 oynanış 1): mabeyn kapısında kutuyu elden alan kızın dokunuşu ertesi gün hatırlanır */
            /* Anlatı denetimi T2 (b4_5_6 4.7): kitap sorulmadan önce görünür */
            /* Tur 33 (B4 sürük 2): senet ile basamak arası kısaldı; kitap anlatısı ve şaka iki satırda */
            { eger: (S) => b(S).p3_kutu === 'el' && !b(S).p3_kutu_cek, ise: [
              'Dizinde açık bir kitap, gözü kapıda. Dün parmaklarımız değmişti, bugün eldivenlerim elimde.',
            ], degilse: [
              'Kapı açılınca dizindeki kitabın sayfası kıvrıldı.',
            ] },
            /* Oynanış T1 (B5): 3. bölümde karşı pencereye bakan (p3_k_pencere) bu kitabı tanır */
            /* Tur 29 (B4 anlatı 2): an_basamak'ta kitap düz ve açık; şaka resimle çelişmez */
            { eger: (S) => !!b(S).p3_k_pencere, ise: [
              /* Doğrulama gece (B4 takvim): kandil akşamı gerdanlıktan önceki akşamdı, yani iki gün önce */
              ['f', 'Evvelki akşam pencerede de bu kitabı okuyordunuz. Hâlâ aynı sayfadasınız.', 'tebessum'],
            ], degilse: [
              ['f', 'Bu sayfayı ben kapıya çıkarken de okuyordunuz.', 'tebessum'],
            ] },
            /* Tur 27 (GPT B4-D 10'a-2): duraksama kalır, açıklamalardan yalnız biri */
            ['mukaddem', '…Sizi bekliyordum.', 'utangac'],
            /* Tur 27 (B4 sürük 4): doruk sorusunda süre ve bedel */
            { soru: 'Basamak önümde. Leyla’ya sözüm var, sokaktan da görünüyorum.', secim: [
              { m: 'Basamağa çık.', etki: { mukaddem: 8, itibar: -2 }, bayrak: { p4_muk: 'basamak' }, iz: 'Sokağın önünde basamağa çıktın. Sokak bunu gördü.', adimlar: [
                { efekt: 'adim' },
                'Basamağa bir ayak bastım. Yakasından kola ve mürekkep kokusu geliyordu.',
                /* Tur 27 (GPT B4-S 10'a-2): cesaretin sokaktaki tanığı */
                'Köşedeki sakacı testisini indirip bize baktı.',
                ['mukaddem', 'Feride Hanım… görürler.', 'endiseli'],
                ['f', 'Görsünler. Sarhoş değilsiniz.', 'kararli'],
                /* Tur 27 (B4 görsel 10'a; GPT B4-G2): Kenan yolunun vurucu anı (resmi gelince açılır) */
                { cizim: 'an_basamak' },
              ] },
              { m: 'Eldivenini düşür.', etki: { mukaddem: 6 }, bayrak: { p4_muk: 'eldiven' }, iz: 'Eldiveni sen düşürdün, o geri getirdi.', adimlar: [
                /* Diyalog T1 (4.15 reddedildi): "kaydı" → itiraf sırası nüktenin kendisi; yalnız netleşti */
                'Eldivenim parmaklarımdan kaydı, basamağa düştü. Doğrusu, ben kaydırdım.',
                'Eğilip aldı. Uzatırken parmağı çıplak bileğime değdi.',
                /* Anlatı denetimi T2 (b4_5_6 4.10; mercek_dil B4-10): "nefes" ve "bahane" kalıpları yerine eşya */
                'Eldiveni ikimiz birden tuttuk. Önce o bıraktı.',
                ['ic', 'Eldiven elime geçti. Bileğimdeki sıcak geçmedi.', 'utanmis'],
                { cizim: 'an_eldiven' },
              ] },
              { m: 'Eşikte kal. Sesini alçalt.', etki: { mukaddem: 4 }, bayrak: { p4_muk: 'uzak' }, iz: 'Eşikten ayrılmadın. Sesin yine de ona ulaştı.', adimlar: [
                'Eşikten ayrılmadım. Sesimi alçalttım, o da.',
                ['mukaddem', 'Uzaktan da duyuluyorsunuz. Hep öyleydi.', 'gulumser'],
                ['ic', 'Üç adım ve bir eşik. Sesi yine de kulağımın dibindeydi.', 'utanmis'],
              ] },
            ] },
            /* GPT T26 Süha (öncelik 6): kâhyanın getirdiği cevap Kenan'ın ağzında; gönül şimdi değişir (Münevver'in odasında
               değil). Süha yolunda Kenan bu bölümde cevabı duymaz. */
            { eger: (S) => b(S).p4_munevver === 'inanmadim', ise: [
              ['mukaddem', 'Bugünkü cevabınızı kâhya getirdi: inanmamışsınız. Annem bir hafta yeter dedi, az söyledi.', 'gulumser'],
              { etki: { mukaddem: 5 } },
            ], degilse: [{ eger: (S) => b(S).p4_munevver === 'gelsin', ise: [
              ['mukaddem', 'Kâhya söyledi: kendim sormalıymışım. Soruyorum öyleyse.', 'utangac'],
              { etki: { mukaddem: 6 } },
            ], degilse: [
              ['mukaddem', 'Kâhya söyledi: sorum sizi kırmış. Ben de kırıldım ama haklıydınız.', 'mahzun'],
              { etki: { mukaddem: -3 } },
            ] }] },
            ['mukaddem', 'Babanız… inandı mı?', 'endiseli'],
            /* Sürükleyicilik T1 (b4_5_6 4.6): az önce alınan senet cevaba döner; güç değişimi romantik doruğu besler */
            { eger: (S) => b(S).p4_remzi === 'aldi', ise: [
              /* GPT T25 Kenan (B4 A2): senet iftirayı çürütmez; Nabi'nin çıkarını ve şahitliğinin değerini gösterir */
              /* Tur 27 (B4 diyalog 4) */
              ['f', 'Elimde Nabi Bey\'in kumar senedi var. Babam imzasını tanır.', 'kararli'],
            ], degilse: [{ eger: (S) => b(S).p4_remzi === 'baba', ise: [
              ['f', 'Remzi Bey senedini babama götürecek. Borçlu bir adamın sözü artık kolay dinlenmez.', 'kararli'],
            ], degilse: [{ eger: (S) => b(S).p4_yalan === 'curudu', ise: [
              /* Tur 27 (B4 diyalog 2): cevap soruya uyar */
              ['f', 'İnanmadı. Yalanı kahvesi soğumadan kapı dışarı etti.', 'tebessum'],
            ], degilse: [
              ['f', 'Henüz karar vermedi.', 'endiseli'],
            ] }] }] },
            /* Sürükleyicilik T1 (mercek_romantik B4 b1): söz geç gelir; önce el */
            'Eli arabanın kapı koluna gitti, orada durdu.',
            ['mukaddem', 'Bir süre görünmeyeceğim. Adım sizin adınızı kirletmesin.', 'mahzun'],
            /* Tur 28b (kök 2): sorusuna kırılan kızın iç sesi zorunlu bir sevgiye çevrilmez */
            { eger: (S) => b(S).p4_munevver === 'kirici', ise: [
              ['ic', 'Kendini benden saklayarak beni koruyacağını sanıyor. Bunu da bana sormadı.', 'mahzun'],
            ], degilse: [
              ['ic', 'Beni korumak için saklanacağını söylüyor.', 'utanmis'],
            ] },
            { soru: 'Arabacı dizginleri topladı.', secim: [
              { m: '“Perşembe sizi kendileri görsünler.”', etki: { mukaddem: 6 }, bayrak: { p4_geri: 'gorun' }, iz: 'Kenan\'ı saklanmaktan vazgeçirdin: perşembe herkesin önünde.', adimlar: [
                /* GPT Tur 23 (Kenan B4): görünmek Kenan'ın kendi üstlendiği karar; "yarın" takvimi sabitler */
                /* Tur 29 (B4 diyalog 2): Kenan'ın sesi kısa */
                ['mukaddem', 'Görüneceğim. Yarın, perşembe, ayık.', 'kararli'],
                ['mukaddem', 'Gülen olursa yüzüne bakarım.', 'kararli'],
              ] },
              { m: '“Kandil yine yanacak mı?”', kosul: (S) => !!b(S).p3_aksam && !b(S).p3_kenan_sinir, etki: { mukaddem: 7 }, bayrak: { p4_geri: 'kandil' }, iz: 'Işığın dilini sürdürdün. Kandil her gece yanacak.', adimlar: [
                ['mukaddem', 'Her gece. Siz söndürseniz de.', 'gulumser'],
              ] },
              { m: '“Gidin. Ben beklerim, ama boş durarak değil.”', etki: { mukaddem: 4 }, bayrak: { p4_geri: 'bekle' }, iz: 'Kenan\'ı yolladın. Beklemek senin işin, boş durmak değil.', adimlar: [
                ['mukaddem', 'Beklemeyin. Bekletmeyeceğim.', 'kararli'],
                'Kapıyı kendisi, ses çıkmasın diye yavaşça kapadı.',
              ] },
            ] },
            /* GPT T25 Kenan (öncelik 8): öksürükle kesilme kalıbı yerine Leyla'nın maddesi — dakika dolar */
            /* Tur 30 (ritim): tanık satırı Leyla'nın seslenişine katıldı */
            { eger: (S) => b(S).p4_eskort === 'reftar', ise: [
              'Leyla içeriden seslendi, dakika dolmuştu. Taşlıkta Hatice döndü, ne kadarını gördü?',
              { bayrak: { p4_tanik: true } },
            ], degilse: [
              'Leyla içeriden adımı bir kez seslendi. Dakika dolmuştu.',
            ] },
            { gizle: 'mukaddem' },
            /* "Onun gözünden": anlatıcının ara sayfası (rehber §2; plan A8) */
            { ara: { yer: 'Onun gözünden', satirlar: [
              (S) => (b(S).p4_muk === 'eldiven' ? 'Eldiveni geri vermişti. Bileğin sıcağını vermemişti, o Kenan\'da kaldı.'
                : b(S).p4_muk === 'basamak' ? 'Basamakta yan yana durmuşlardı. Kenan o yakınlığı bütün yol düşündü.'
                : 'Feride eşikten ayrılmamıştı. Kenan buna minnet duydu, sonra minnet duyduğuna kızdı.'),
            ] } },
            { muzik: null }, // Tur 28 (B4 ses 1): akşam yemeğinin sessizliği romantik temada çalmaz
            { eger: (S) => b(S).p4_pakt === 'calibe', ise: [
              ['an', 'Leyla\'nın dadısı tespihini alıp arabaya bindi. Leyla yeminin ilk cevabını sorulmadan vermişti.'],
            ] },
            AKSAM_ARA, SARKI, SARKI_SART].concat(AKSAM_BABA), degilse: [
            { muzik: 'suha' }, // Tur 27 (B4 ses 3): Süha yolunun kapıdaki arabası
            /* Tur 28 (B4 oynanış 3): "tek ses"in ilk cevabı (dadı refakati) Süha yolunda da uygulanır: refakatçili dönüşte
               dadı arabada (p4_araba refakatçi satırı); yalnız gelen kız kapıda seçer */
            /* Leyla'nın maddesi kapıda sınanır: sabah yalnız gelen, nasıl döneceğini kendisi seçer */
            { eger: (S) => b(S).p4_eskort === 'yalniz', ise: [
              'Araba kapıda. Süha Bey basamağın yanında, kapıyı tutuyor.',
              ['ic', 'Yukarıda Leyla\'nın perdesi aralık. “Bir daha yalnız binmeyeceksin.”', 'endiseli'],
              { soru: 'Arabanın kapısı açık. Leyla pencerede.', secim: [
                { m: 'Tek başına bin. Sözü bile bile çiğne.', etki: { suha: 3, fevkiye: -1 }, bayrak: { p4_donus: 'yalniz' }, adimlar: [
                  'Basamağa çıktım. Yukarıda perde kapandı.',
                  ['suha', 'Arkadaşınız perdeyi kapadı. Siz kapıyı kapatmadınız.', 'soguk'],
                  /* Anlatı denetimi T2 (b4_5_6 4.12): refakat maddesini Feride kendisi koymuştu */
                  { eger: (S) => b(S).p4_pakt === 'calibe', ise: [
                    ['ic', 'Dadıyı ben istemiştim. Bunu Leyla da unutmayacak.', 'mahzun'],
                  ] },
                ] },
                { m: '“Leyla, dadın benimle gelsin.”', etki: { fevkiye: 1 }, bayrak: { p4_donus: 'dadi' }, adimlar: [
                  { eger: (S) => b(S).p4_pakt === 'calibe', ise: [
                    ['ic', 'Yeminimizin ilk cevabı: dadı getirir, dadı götürür.', 'tebessum'],
                  ] },
                  'Leyla\'nın dadısı tespihiyle indi, karşımıza oturdu.',
                  ['suha', 'Refakat. Bir tespihle yarışmak da varmış.', 'alayci'],
                ] },
                { m: '“Perdeler açık döneriz. Ben karşınıza otururum.”', etki: { suha: 4, vakar: 1 }, bayrak: { p4_donus: 'gorunur' }, adimlar: [
                  ['f', 'Perdeler açık döneriz. Ben de yanınıza değil, karşınıza otururum.', 'kararli'],
                  ['suha', 'Bütün yokuş bizi görsün öyleyse. Siz bilirsiniz.', 'alayci'],
                  { eger: (S) => b(S).p4_pakt === 'calibe', ise: [
                    ['ic', 'Yalnızım ama göz önündeyim. Dadıyı isteyen bendim, kendi maddemi yarım tuttum.', 'mahzun'],
                  ], degilse: [
                    ['ic', 'Yalnızım ama göz önündeyim. Leyla\'nın maddesini yarım tuttum.', 'mahzun'],
                  ] },
                ] },
              ] },
            ] },
            { ara: { mekan: 'araba_ici', yer: 'Dönüş yolu', satirlar: [
              (S) => (donus(S) === 'gorunur'
                ? 'Araba perdeleri sonuna kadar açık, yokuşu ağır ağır indi. Kahvelerin önünden geçen her araba, o akşam kahvede bir kez daha geçerdi.'
                : 'Arabanın perdeleri inikti. Sokaktan saklıyordu, birbirlerinden değil.'),
            ] } }, { gorev: 6 },
          ] },
        ],
      },

      /* ---------------- 7. Dönüş arabası: Süha (yalnız onun yolunda) ---------------- */
      {
        id: 'p4_araba', mekan: 'araba_ici', tetik: 'giris', kosul: (S) => S.gorev === 6, sahne: [],
        adimlar: [
          /* Tur 31 (ses S6): Süha motifi olay müziğinden sürer; satır içinde yeniden başlatılmaz */ // Tur 27 (B4 ses 2): ikindi güneşinde gece müziği değil; an resmi de koyu akorla açılır
          { eger: (S) => donus(S) === 'gorunur', ise: [
          ], degilse: [{ eger: (S) => b(S).p4_v_nazli === 'ordu', ise: [
            'İkindi güneşi perdenin aralığından sızıyor.',
          ], degilse: [
            /* Tur 28 (B4 sürük 3): Nazlı'yı görmeyen oyuncu için de Süha'nın hamlesi görünür */
            'Araba konağın yokuşunu geçti, arabacı dönmedi. Süha Bey perdeyi değil, beni seyrediyordu.',
          ] }] },
          { eger: (S) => b(S).p4_v_nazli === 'ordu', ise: [
            ['ic', 'Nazlı söylemişti: “Yolu uzat.” Araba aynı yokuşu ikinci kez dönüyor.', 'endiseli'],
          ] },
          /* Tur 28 (B4 oynanış 3): tek ses paktının dadısı da arabada (refakatçi satırıyla tek satır) */
          { eger: (S) => b(S).p4_eskort === 'nimet', ise: [
            { eger: (S) => b(S).p4_pakt === 'calibe', ise: [
              'Nimet yanımda. Leyla’nın dadısı yarın gelecek; bugün Nimet bizi bırakmadı.',
            ], degilse: [
              'Nimet yanıma oturdu. İlk dönemeçte uyur gibi yaptı.',
            ] },
          ], degilse: [{ eger: (S) => b(S).p4_eskort === 'josephine', ise: [
            { eger: (S) => b(S).p4_pakt === 'calibe', ise: [
              /* Tur 30 (ritim, 14 → 13): Süha'nın yarıda kalan Türkçesi bu satırda (aşağıdaki ayrı satır çıktı) */
              'Madam yanımızda, pencereye dönük. Leyla’nın dadısı yarın gelecek.',
            ], degilse: [
              'Madam yanımızda, pencereye bakıyor. Süha Bey Türkçe başlayıp yarıda kesti, Madam gülümsedi.',
            ] },
          ], degilse: [{ eger: (S) => donus(S) === 'dadi', ise: [
            'Dadı tespih çekerken bizi izliyor.',
          ], degilse: [{ eger: (S) => donus(S) === 'gorunur', ise: [
            'Karşısına oturdum, dizlerim onun dizlerine dönük.',
          ], degilse: [
            ['ic', 'Bir saat olmadan Leyla’ya sözümü bozdum.', 'mahzun'],
          ] }] }] }] },
          { goster: ['suha', 'notr'] },
          /* Oynanış T1 (B5): hekim çantası; p4_k_sise anlaşma dalında ve gece notunda okunur. Nokta bilek seçimine dek açık. */
          /* Tur 27 (B4 oynanış 4): nokta resimdeki kapı paneline değil, koltuğun sağ ucuna, minderin yanına */
          { kesif: { x: 58, y: 60, w: 10, h: 12, ad: 'Hekim çantası', adimlar: [
            { efekt: 'sise' }, // Tur 28 (B4 ses 4)
            'Süha Bey\'in çantası minderin dibinde, ağzı aralık. İçinde etiketsiz, koyu bir şişe.',
            { bayrak: { p4_k_sise: true } },
          ] } },
          /* GPT T26 Süha (B4 D2): Süha tehlikeyi adlandırmaz; dil değiştirmeyi dener, yarıda bırakır (Tur 30: Madam'lı
             refakat satırının içinde) */
          { eger: (S) => donus(S) === 'gorunur', ise: [
            ['suha', 'Ne diyecekler, düşündünüz mü?', 'alayci'],
          ], degilse: [
            ['suha', 'Bu arabada bizi görseler ne derler, düşündünüz mü?', 'soguk'],
          ] },
          ['f', '“Zavallı Süha Bey, yine kimseyi korkutamamış” derler.', 'tebessum'],
          /* Tur 30 (B4 diyalog 7): Süha doruk teklifinden önce yenik görünmez; tehlike sürer */
          ['ic', 'Ben sustum. Onun gülüşü biraz daha sürdü.', 'endiseli'], // Tur 28 (B4 diyalog 10'a)
          { eger: (S) => b(S).p3_kilit === 'izin', ise: [
            ['suha', 'Dün enseniz, bugün bileğiniz. Hekimlik sabır ister.', 'soguk'],
          ], degilse: [{ eger: (S) => b(S).p3_kilit === 'kendi', ise: [
            ['suha', 'Nabzı da kendiniz mi tutarsınız demiştim. Bugün ben tutayım.', 'soguk'],
          ], degilse: [
            ['suha', 'Beni yaşlı bir kadının ellerine bırakmıştınız. Bileğinizi verin.', 'soguk'],
          ] }] },
          /* Tur 27 (B4 sürük 5): doruk sorusunda süre */
          { soru: 'Eli dizinin üstünde, avucu yukarı. Konağa iki yokuş kaldı.', secim: [
            { m: 'Bileğini uzat.', etki: { suha: 8 }, bayrak: { p4_suha: 'bilek' }, iz: 'Süha Bey bileğini bıraktıktan sonra saatine baktı.', adimlar: [
              'Bileğimi uzattım. İki parmağı bileğimde, saatine bakmadı.',
              { efekt: 'sarsinti' }, // Tur 30 (B4 ses 1) → araba sarsıldı: gövde sarsıntısı (teker_cakil yuvarlanış)
              'Limon kolonyası. Araba sarsıldı, dizi dizime bir kez değdi.',
              /* Aynı yakınlaşma, farklı bedel: tanık ya da sokak */
              { eger: (S) => donus(S) === 'dadi', ise: [
                'Dadının tespihi durdu. Sonra yeniden döndü.',
              ], degilse: [{ eger: (S) => donus(S) === 'gorunur', ise: [
                'Perde açıktı. Yokuştaki kahvede iki baş birden döndü.',
                { etki: { itibar: -1 } },
              ] }] },
              ['suha', 'Hızlı. Sebebi yol olsun, umarım.', 'notr'], // Tur 33: bilekteki el tehlikeli an; gülüş yok
              /* Diyalog T1 (4.8): limonlukta bileğini veren için bilinçli geri dönüş; ötekine ilk kez */
              { eger: (S) => b(S).p_bilek === 'verdi', ise: [
                ['ic', 'Limonlukta da böyle demişti. Bu kez ikimiz de inanmıyoruz.', 'endiseli'],
              ], degilse: [
                ['ic', 'Bileğimi uzattım ama elini çekmedi. İstersem şimdi geri alırım.', 'endiseli'],
              ] },
              /* Tur 27 (GPT B4-G1; B4 oynanış 5): an_araba (yan yana, kapalı perde, refakatsiz) yalnız o dalda;
                 öteki refakat/oturma dallarının kendi anı (resmi gelince açılır) */
              { eger: (S) => b(S).p4_eskort === 'nimet', ise: [{ cizim: 'an_araba_nimet' }], degilse: [
                { eger: (S) => b(S).p4_eskort === 'josephine', ise: [{ cizim: 'an_araba_josephine' }], degilse: [
                  { eger: (S) => donus(S) === 'dadi', ise: [{ cizim: 'an_araba_dadi' }], degilse: [
                    { eger: (S) => donus(S) === 'gorunur', ise: [{ cizim: 'an_araba_gorunur' }], degilse: [{ cizim: 'an_araba' }] },
                  ] },
                ] },
              ] },
            ] },
            { m: 'Perdeyi sonuna kadar aç.', kosul: (S) => donus(S) !== 'gorunur', etki: { suha: 5, vakar: 1 }, bayrak: { p4_suha: 'perde' }, iz: 'Perdeyi açtın. Hekimi sokağa sen gösterdin.', adimlar: [
              'Perdeyi sonuna kadar açtım. Yanımızdan geçen kadın arabaya bakınca Süha Bey geri yaslandı.',
              ['suha', 'Cesursunuz. Ya da beni korkutmak istiyorsunuz.', 'alayci'],
              ['f', 'İkisi de.', 'kararli'],
            ] },
            /* Oynanış T1 (B1): sarı odanın kâğıdı görünür kilit (yalnız Süha'ya söylenir; koz yanmaz, 5. ve 6. bölüm okur) */
            { m: '“Kâğıdınız yandı. Artık kimin hekimisiniz?”', kosul: (S) => var_(S, KAGIT), kozGerek: KAGIT, etki: { suha: 7 }, bayrak: { p4_suha: 'kagit' }, iz: 'Kâğıdı bilen adamın yüzüne söyledin. Sır yine sende, koz yanmadı.', adimlar: [
              ['f', 'Perihan Hanım\'ın kâğıdı yandı. Artık kimin hekimisiniz?', 'kararli'],
              ['suha', 'Sizin. Siz henüz bilmiyorsunuz.', 'mahzun'],
              ['ic', 'Sesi alçaldı. Arabanın gıcırtısı bile ondan yüksekti.', 'endiseli'],
            ] },
            { m: '“Perihan Hanım sizi bana neden yolluyor?”', kosul: (S) => !var_(S, KAGIT), etki: { suha: 6 }, bayrak: { p4_suha: 'soru' }, iz: 'Tertibi sordun. Yarısını söyledi.', adimlar: [
              ['f', 'Perihan Hanım sizi bana neden yolluyor?', 'kararli'],
              /* Tur 27 (B4 diyalog 10'a): bilmece yerine bilinçli yarım itiraf; limonluktaki Fransızca söze bağlanır */
              ['suha', 'Sizi izleyeyim diye. Bakmamam gereken yere bakayım diye değil.', 'alayci'], // Tur 28 (B4 diyalog 5)
              ['ic', 'Bakmaması gereken yer. Limonluktaki cümlesi bu.', 'endiseli'],
            ] },
            /* Tur 28b (kök 1): bilek isteğine açık ret her dalda (refakatçi olsun olmasın); Süha tehlikeli kalır, kabul üretilmez */
            { m: '“Bileğim bende kalsın Süha Bey.”', etki: { vakar: 1 }, bayrak: { p4_suha: 'ret' }, iz: 'Bileğini vermedin. Hekimin avucu açık kaldı.', adimlar: [
              ['f', 'Bileğim bende kalsın Süha Bey. Nabzımı kimseye saydırmam.', 'kararli'],
              ['suha', 'Peki. Avucum açık durur.', 'soguk'], // Tur 33 (B4 diyalog 5): "hekim" sahnede bir kez
              'Elini yavaşça kapatıp dizine koydu. Konağa kadar bir daha uzatmadı.',
            ] },
          ] },
          { eger: (S) => b(S).p4_gece === 'pazarlik', ise: [
            { eger: (S) => b(S).p4_bedel === 'ret', ise: [
              ['suha', 'Şarkımı vermediniz, ben de kahvede sizi kayırmadım. Ödeştik.', 'soguk'],
            ], degilse: [{ eger: (S) => b(S).p4_bedel === 'sart', ise: [
              ['suha', 'Bu akşam salonda şarkıyı ben seçeceğim, temposunu siz. Anlaşmamız buydu.', 'alayci'],
            ], degilse: [
              ['suha', 'Bu sabah babanıza yalan söylemedim. Akşam şarkım unutulmasın.', 'alayci'],
            ] }] },
          ] },
          ['suha', 'Bir anlaşma yapalım. Perihan\'ın tertibini söylerim.', 'soguk'],
          ['suha', 'Siz de her akşam bir saat bana katlanırsınız.', 'soguk'],
          { soru: 'Araba yokuşa dönüyor. Kapıma varmadan cevabımı alacak.', secim: [
            { m: '“Tertibi söyleyin. Karşılığını sonra konuşuruz.”', etki: { suha: 5 }, bayrak: { p4_suha_pakt: 'kabul' }, iz: 'Tertibi aldın, karşılığını sonraya bıraktın.', adimlar: [
              ['f', 'Tertibi söyleyin. Karşılığını sonra konuşuruz.', 'kararli'],
              /* Takvim (plan A3): şurup ertesi gün (5. bölüm) gelir; "yarından sonra" değil. Tur 32 (B4 diyalog 8) */
              ['suha', 'Yarın akşamdan itibaren her akşam size bir şurup getireceğim. İçmeyin.', 'notr'],
              /* Oynanış T1 (B5): çantadaki etiketsiz şişeyi gören kız şurubu tanır */
              { eger: (S) => !!b(S).p4_k_sise, ise: [
                ['ic', 'Çantasındaki etiketsiz şişe. Kendi getireceği şurubu içmeyin diyor.', 'endiseli'],
              ], degilse: [
                ['ic', 'Kendi getireceği şurup için “içmeyin” diyor.', 'endiseli'],
              ] },
            ] },
            { m: '“Bir saat. Kapı açık, yanımda biri olacak.”', etki: { suha: 6 }, bayrak: { p4_suha_pakt: 'sart' }, iz: 'Saati verdin ama kapıyı açık, şahidi yanında tuttun.', adimlar: [
              ['f', 'Bir saat. Kapı açık, yanımda biri olacak.', 'kararli'],
              /* Anlatı T2b (GPT T24b Süha B4): şartın iki yarısına da cevap verir */
              /* Diyalog T1 (4.19, D8): gecenin "Ben kapıya bakmam" esprisi yinelenmez; flört keskinleşir */
              ['suha', 'Kapı açık olsun, yanınızda kimi isterseniz. Ben yalnız size bakarım.', 'soguk'],
              /* GPT Tur 23 (Süha B4): pazarlık hemen bir şey değiştirir; 5. bölüm sabahı doğrular */
              ['suha', 'Peşin bir parça vereyim: yarın sabah odanıza bir şişe gelecek. Etiketini okuyun.', 'notr'],
            ] },
            /* Oynanış T1 (B3): pazarlığı geri çeviren seçenek gönülden düşer; Süha'nın iğnesi tepkisidir */
            { m: '“Ben pazarlık etmem Süha Bey.”', etki: { suha: -3 }, bayrak: { p4_suha_pakt: 'ret' }, iz: 'Pazarlığı geri çevirdin. Süha Bey\'in eli boş kaldı.', adimlar: [
              { muzik: 'sessiz', kes: true, durak: 800 },
              ['f', 'Ben pazarlık etmem Süha Bey.', 'kararli'],
              /* Diyalog T1 (4.7): gece "Bedeli ne?" diye soran kızın sözünü Süha yakalar */
              { eger: (S) => b(S).p4_gece === 'pazarlik', ise: [
                /* Doğrulama gece (B4): "bu evde" yolda en çok iki */
                ['suha', 'Ettiniz bile, dün gece kapımda. Konakta herkes eder, ben de ettim.', 'soguk'],
              ], degilse: [
                ['suha', 'Edeceksiniz. Konakta herkes eder, ben de ettim.', 'alayci'],
              ] },
            ] },
          ] },
          ['an', 'Araba konağın önünde durdu. Süha Bey önce indi ve elini uzatmadan bekledi.'],
          { gizle: 'suha' },
          /* "Onun gözünden": anlatıcının ara sayfası (rehber §2; plan A8) */
          { ara: { yer: 'Onun gözünden', satirlar: [
            (S) => (b(S).p4_suha === 'bilek' ? 'Süha arabadan inince eldivenini giymeden kapıya baktı. Feride çoktan içeri girmişti.'
              : b(S).p4_suha === 'perde' ? 'Perdeyi açmıştı. Süha, bir kadının onu sokağa göstermesinden korkacağını bilmezdi.'
              : b(S).p4_suha === 'kagit' ? '“Sizin” demişti. Kızın bu cevabın hangi yarısına inanacağını Süha henüz bilmiyordu.'
              /* Tur 28b (kök 1): ret onun gözünden de ret; yorumu onun */
              : b(S).p4_suha === 'ret' ? 'Kız bileğini vermemişti. Süha arabadan inince avucuna baktı. Boş avucu ona bir şey söylüyordu.'
              /* Tur 29 (B4 anlatı 10'a): iç hesap yerine davranış */
              : 'Perihan\'ın bütün tertibini ona söylememişti. Konağın önünde inerken yarım bıraktığı cümleyi dişlerinin arasında tuttu.'),
          ] } },
          AKSAM_ARA, SARKI, SARKI_SART,
        ].concat(AKSAM_BABA),
      },

      /* ---------------- 8. Gece: Şefik'in cebindeki not ---------------- */
      {
        id: 'p4_gece', mekan: 'fazila_oda', tetik: 'giris', kosul: (S) => S.gorev === 7, sahne: [],
        adimlar: [
          ['an', 'Gece konakta herkes odasına çekildi.'],
          { eger: (S) => b(S).p4_gece === 'pazarlik', ise: [
            { eger: (S) => b(S).p4_bedel === 'ret', ise: [
              'Akşam piyanonun kapağı kapalı kaldı. Süha Bey bir kez açtı, bana bakıp kapadı.',
            ], degilse: [{ eger: (S) => b(S).p4_bedel === 'sart', ise: [
              /* Diyalog T1 (D4): "borç" Süha'nın sözü; Feride kendi sözünü tutar */
              ['ic', 'Şarkıyı herkesin önünde çaldım. Son notayı Perihan Hanım\'ın yüzüne bakarak bitirdim.', 'kararli'],
              { etki: { calibe_suphe: 1 } },
            ], degilse: [
              /* GPT T26 Süha (B4 A2): şarkı salonda oynandı (SARKI); burada yalnız artçı ve iki sözün farkı */
              { eger: (S) => b(S).p4_suha_pakt === 'kabul' || b(S).p4_suha_pakt === 'sart', ise: [
                /* Tur 30 (B4 anlatı 5, oynanış 5): "Bedelini sonra konuşuruz" bedeli kabul değildir; şart ise kendi
                   koşuluyla başlar */
                { eger: (S) => b(S).p4_suha_pakt === 'sart', ise: [
                  ['ic', 'Şarkımı çaldım. Yarın arabaya binerken kapı açık olacak, yanımda biri olacak.', 'kararli'],
                ], degilse: [
                  ['ic', 'Bir şarkıyı ödedim. Arabadakinin karşılığını söylemedi; söylemediğini de bir yere yazar.', 'endiseli'],
                ] },
              ], degilse: [
                ['ic', 'Bir şarkı demiştim, bir şarkı verdim. Fazlasını değil.', 'kararli'],
              ] },
            ] }] },
          ] },
          { eger: muk, ise: [
            { eger: (S) => b(S).p4_geri === 'kandil', ise: [
              'Gece oldu. Karşı pencerede kandil yanıyor, perdesi çekik.',
            ], degilse: [{ eger: (S) => b(S).p4_geri === 'gorun', ise: [
              'Bu gece karşı pencerede ışık yok. Ama yarın, perşembe, herkesin önüne çıkacağına söz verdi.',
            ], degilse: [
              'Karşı pencere karanlık. Görünmeyecekmiş, sözünü ilk gece tutuyor.',
            ] }] },
            /* Sürükleyicilik T1 (b4_5_6 4.7): kancadan önce günü özetleyen iç ses çıktı */
          ], degilse: [
            'Koridorun ucunda Süha Bey\'in lambası yanıyor, kapısı aralık.',
            /* Tur 29 (B4 oynanış 3): Leyla'ya verilen sözü bile bile çiğnemenin bedeli aynı gece */
            { eger: (S) => donus(S) === 'yalniz', ise: [
              'Kapımın altından Leyla\'nın pusulası girmiş: “Perdeden gördüm. Yeminin ikinci günü yok mu?”',
            ] },
            /* Tur 27b (GPT özet P1): pazarlığı geri çeviren kızın iç sesi eski çekime yenilmez */
            { eger: (S) => b(S).p4_suha_pakt === 'ret', ise: [
              ['ic', 'Bakmayacağım. Pazarlığını geri çevirdim, aralık bir kapı bunu değiştirmez.', 'kararli'],
            ], degilse: [{ eger: suhaSinir, ise: [
              /* Tur 28b (kök 2): ona bir kez açıkça hayır demiş kız, aralık kapıya gizli bir çekimle bakmaz */
              ['ic', 'Bakmayacağım. Ona bir kez hayır dedim, aralık bir kapı bunu değiştirmez.', 'kararli'],
            ], degilse: [{ eger: (S) => suhaYakin(S) || b(S).p4_suha === 'bilek', ise: [
              ['ic', 'Bakmayacağım. Bakmadığımı da bilsin istiyorum, bu daha kötü.', 'utanmis'],
            ], degilse: [
              /* Tur 30 (B4 karşılaşma ≠ istek): temkinli giden kıza gizli çekim yüklenmez */
              ['ic', 'Bakmayacağım. Kapısı aralık, benimki kapalı.', 'kararli'],
            ] }] }] },
          ] },
          ['an', 'Şefik o gece ablasının sedirinde, ceketi üstünde uyuyakalmıştı.'],
          { eger: (S) => b(S).p3_madalyon === 'sefik', ise: [
            ['ic', 'Dün annemin madalyonunu taşıyan cep bu.', 'mahzun'],
          ] },
          /* Tur 27 (B4 ses 6): kâğıdın bulunduğu an sessizlikte; seçimden sonra her dal gerilimle açılır */
          { muzik: 'sessiz' },
          'Ceketin cebinden katlı bir kâğıdın ucu görünüyor.',
          /* Tur 27 (GPT B4-S1): final, az önce verilen sözün ilk sınavı */
          { eger: (S) => b(S).p4_pakt === 'mektup', ise: [
            { eger: muk, ise: [
              ['ic', 'Leyla\'nın çekmecesine karar verdik, ama Kenan\'a henüz söylemedim.', 'mahzun'],
            ], degilse: [
              ['ic', 'Şefik’in cebine de bir kâğıt koymuşlar. Kardeşimi kim haberci yaptı?', 'mahzun'],
            ] },
          ], degilse: [{ eger: (S) => b(S).p4_pakt === 'sir', ise: [
            ['ic', 'Leyla\'yla birbirimizden sır yok dedik. Bu kâğıdı da ona söyleyeceğim.', 'mahzun'],
          ], degilse: [
            ['ic', 'Bu kâğıdı Leyla’ya da söylemeliyim.', 'kararli'],
          ] }] },
          { goster: ['pusula', 'ana'] },
          { soru: 'Kâğıt parmaklarımın ucunda.', secim: [
            { m: 'Aç, oku; yeniden açılmasını anlamak için işaret koy.', bayrak: { p4_not: 'oku' }, iz: 'Notu açtın. Kimin kime yazdığı artık sende.',adimlar: [
              /* Tur 33 (B4 ses 3): bölüm sonu bir kez daha gerilimle bitmez; not sessizlikte, kâğıt sesiyle okunur */
              { efekt: 'kagit' }, // Tur 28 (B4 ses 4)
              { eger: muk, ise: [
                { eger: (S) => b(S).p4_geri === 'gorun', ise: [
                  '“Perşembe Şefik\'in dersine ben geleceğim, herkes görsün. —K.”',
                ], degilse: [{ eger: (S) => b(S).p4_geri === 'kandil', ise: [
                  /* Diyalog T1 (4.17): not gündüz yazıldı. Tur 27 (B4 diyalog 3): Kenan başka evde, "bu evde" demez */
                  '“Kandil yanacak, perde çekik olacak, sizin evde göz çok. —K.”',
                ], degilse: [
                  '“Bekletmeyeceğim dedim. Sözümün ilk günü bugün. —K.”',
                ] }] },
                /* Tur 27 (GPT B4-A2): koku şüphedir, kanıt değil; kendi bileğine yağ süren kız ayrımı yapar,
                   kesin hüküm için ikinci delil (bozulmuş kat) gerekir */
                { eger: (S) => b(S).p3_v_gul === 'surdu', ise: [
                  ['ic', 'Kâğıtta gül yağı kokusu, dün bileğime sürdüğüm şişe. Ama ben bu kâğıda daha yeni dokundum.', 'endiseli'],
                ], degilse: [{ eger: (S) => b(S).p3_v_gul === 'kapadi', ise: [
                  ['ic', 'Kâğıtta gül yağı kokusu. Perihan Hanım\'ın aynalı masasındaki şişe.', 'endiseli'],
                ], degilse: [
                  ['ic', 'Kâğıtta gül yağı kokusu. Perihan Hanım gül yağı sürer.', 'endiseli'],
                ] }] },
                'Katı bozulmuş, biri açıp yeniden katlamış. Kenan böyle katlamaz.',
                /* Tur 27 (GPT B4-S2): bilgi karşı hamleye döner; 5. bölüm p4_karsi'yi okuyabilir (ortak istek) */
                'Kâğıdı kendi katlarından katladım, köşesine bir saç teli sıkıştırdım.',
                { bayrak: { p4_karsi: 'iz' } },
                KAPANIS_K,
                /* Tur 33 (B4 sürük 1): son kare bir yüze (bir ele) kesilir; kart yalnız görüleni söyler (şüphe ≠ hüküm) */
                { efekt: 'tahta' },
                'Kapının aralığında bir gölge kıpırdadı, sonra çekildi.',
                { kart: 'Kapı aralığında bir gümüş bilezik parladı.' },
              ], degilse: [
                '{i}“Madame: la petite me croit. Demain, le sirop.”{/i}',
                /* Oynanış T1 (B5): arabada çantadaki şişeyi gören (p4_k_sise) şurubu tanır */
                { eger: (S) => !!b(S).p4_k_sise, ise: [
                  ['ic', '“Küçük bana inanıyor, yarın şurup.” Şişe çantada hazır, kime yazmış?', 'endiseli'],
                ], degilse: [
                  ['ic', '“Küçük bana inanıyor, yarın şurup.” Kime yazmış?', 'endiseli'],
                ] },
                { eger: (S) => !!b(S).p4_v_madam, ise: [
                  ['ic', 'Madam söylemişti: Perihan Hanım\'a yalnızken “Madame” diyor.', 'kararli'],
                ] },
                { eger: (S) => b(S).p4_suha_pakt === 'kabul', ise: [
                  ['ic', 'Bana “İçmeyin” dedi. Hangimize yalan söylüyor?', 'endiseli'],
                ] },
                /* GPT T26 Süha (öncelik 9; pilot3 p3_sari_mangal): sarı odada görülen yazı burada tanınır */
                { eger: (S) => b(S).p3_sari_mangal === 'yazi', ise: [
                  ['ic', 'Bu eğik, sık yazıyı gördüm: sarı odada yanan kâğıtta.', 'ofkeli'],
                ] },
                { bayrak: { p4_karsi: 'yazi' } },
                KAPANIS_S,
                /* Sürükleyicilik T1 (b4_5_6 4.8): soru kartı yerine tehlike; kapanış satırının sorusunu yinelemez */
                /* Tur 29 (B4 anlatı 3): kart arabada verilen söze göre */
                { kart: (S) => ({
                  sart: 'Bu satırı yazan el, sabah odama bir şişe yollayacak.',
                  ret: 'Bu satırı yazan el, yarın bir şurupla gelecek. Ben istemedim.',
                }[b(S).p4_suha_pakt] || 'Bu satırı yazan el, yarın akşam bardağımı tutacak.') },
              ] },
            ] },
            { m: 'Yerine koy. Lambayı söndür, bekle.', bayrak: { p4_not: 'izle' }, iz: 'Karanlıkta bekledin. Postacının elini gördün.', adimlar: [
              { muzik: 'gece' }, // Tur 33 (B4 ses 3): karanlıkta bekleyiş gece temasında
              { gizle: 'pusula' },
              'Kâğıdı cebe geri koydum. Lambayı söndürdüm.',
              { efekt: 'tahta' }, // Tur 29 (B4 ses 10'a): gizli gelişte kısık tahta gıcırtısı
              'Gece yarısı kapı aralandı. Bir el Şefik\'in cebine girdi.',
              'Bilekte Hatice\'nin gümüş bileziği.',
              { eger: (S) => var_(S, MEKTUP), ise: [
                ['ic', 'Nabi Bey\'in mektuplarını taşıyan el.', 'kararli'],
              ] },
              { eger: muk, ise: [
                'Kâğıdı aldı. Bir süre sonra aynı el geri koydu.',
                /* GPT Tur 23 (Remzi 4B): okunmamış kâğıt; kanca kartının "mektuplarım"ı bir çıkarım olarak kurulur */
                /* Anlatı T2b (GPT T24 Remzi B5): okunmamış kâğıt; sahibi çıkarım (Şefik Kenan'ın öğrencisi) */
                ['ic', 'Okumadım. Kâğıt Kenan\'dansa benden önce başkası okudu.', 'ofkeli'],
                /* Tur 27 (GPT B4-S2): bekleyen kız karşı hamlesini kurar (p4_karsi 'bos') */
                ['ic', 'Yarın o cebe boş bir kâğıt koyacağım. Açan el, boşluğu kime taşıyacak?', 'kararli'],
                { bayrak: { p4_karsi: 'bos' } },
                KAPANIS_K,
                { kart: 'Mektuplarım geceleri başka bir elden geçiyor.' },
              ], degilse: [
                'Kâğıdı aldı. Geri getirmedi.',
                ['ic', 'Yarın o cebe boş bir kâğıt koyacağım. Açan el, boşluğu kime taşıyacak?', 'kararli'],
                { bayrak: { p4_karsi: 'bos' } },
                KAPANIS,
                { kart: 'Not sabaha kalmadı. Sahibine gitti.' },
              ] },
            ] },
            { m: 'Şefik\'i uyandır. Kim verdi?', etki: { sefik: 1 }, bayrak: { p4_not: 'sor' }, iz: 'Şefik\'e sordun. Kardeşinin cebinin kime çalıştığını öğrendin.', adimlar: [
              { muzik: 'huzun' }, // Tur 33 (B4 ses 3): uyandırılan çocuğun sahnesi gerilimde değil
              { goster: ['sefik', 'saskin'] },
              { eger: muk, ise: [
                ['sefik', 'Kenan abi verdi. Yolda Hatice abla cebimi düzeltti.', 'saskin'],
                /* Tur 27 (GPT B4-S2): haber yolu değişir (p4_karsi 'leyla') */
                { eger: (S) => b(S).p4_pakt === 'mektup', ise: [
                  ['f', 'Bundan sonra Kenan abinin kâğıtlarını Leyla ablana götür. Cebine kimse dokunmasın.', 'kararli'],
                ], degilse: [
                  ['f', 'Bundan sonra cebine kim ne koyarsa önce bana göster. Kimseye söyleme.', 'kararli'],
                ] },
                { bayrak: { p4_karsi: 'leyla' } },
                KAPANIS_K,
                /* Sürükleyicilik T1: kart Şefik'in az önceki sözünü yinelemez; Feride'nin çıkarımı (ifşa) */
                /* GPT T25 Kenan (B4 A3): Şefik Hatice'yi adlandırdı; Perihan'a uzanan kısım Feride'nin bildiği gözcülük düzeni */
                /* Tur 30 (B4 anlatı 2; şüphe ≠ hüküm): kanıt Şefik'in sözü; kart yalnız onu söyler */
                { kart: 'Kenan\'ın notu Şefik\'in cebindeyken Hatice\'nin eli o cebe değdi.' },
              ], degilse: [
                ['sefik', 'Süha dayı verdi, “Perihan Hanım\'a” dedi. Sana söyleme dedi.', 'korkmus'],
                ['f', 'Bundan sonra cebinde bir şey bulursan önce ablana getir, olur mu?', 'kararli'],
                { bayrak: { p4_karsi: 'leyla' } },
                KAPANIS,
                { kart: 'Süha Bey, Perihan Hanım’a kardeşimin cebiyle yazıyor.' },
              ] },
            ] },
          ] },
          { bolumSonu: true },
        ],
      },
    ],

    // Tur 18 ek (öneri 9): defter üç kısa cümle — ne yaptım / kimle ne kaldı / sıradaki soru.
    sonNotu: function (S) {
      var f = S.bayrak, c = [];
      // 1) Sabahın hamlesi ve yalanın akıbeti (Süha'nın kapısında kalan gecede o gecenin cevabı)
      var gece = f.p4_gece === 'pazarlik'
        ? ({ ret: 'Gece Süha Bey\'e susmasının karşılığını sordum ama vermedim', sart: 'Gece Süha Bey\'in istediğini şartımla kabul ettim: şarkı salonda, herkesin önünde' }[f.p4_bedel]
          || 'Gece Süha Bey\'in sessizliğine karşılık bir şarkı verdim, akşam salonda, kapı aralık çaldım')
        : { dogru: 'Gece Süha Bey\'den doğruyu istedim, zehriyle birlikte söyledi', sus: 'Gece Süha Bey\'e susmasını söyledim' }[f.p4_gece];
      var hamle = { beyoglu: 'Kahvede Nabi Bey\'e gece Beyoğlu\'nda ne aradığını sordum', borc: 'Kahvede Nabi Bey\'in Remzi Bey\'e borcunu sordum',
        koz: 'Kahvede bildiğimi ima ettim, Perihan Hanım kardeşine baktı', sustu: 'Kahvede sustum, babamın gözüne baktım' }[f.p4_hamle];
      /* Tur 28 (GPT A4-2): akşam senetle çürüyen yalan "kahve soğumadan" yazılmaz */
      /* Tur 28b (kök 4): senet şahidi düşürür; hükmün basamağı özette de ayrı (tek şahit düştü / ikinci şahit bekliyor) */
      var yalan = f.p4_yalan_aksam && f.p4_yalan === 'curudu'
        ? 'babam senedi okuyunca Nabi sustu.'
        : f.p4_yalan_aksam && f.p4_yalan === 'askida'
        ? 'babam Nabi’yi susturdu. Hekimi daha dinleyecek.'
        : ({ curudu: 'Nabi Bey\'in yalanı kahve soğumadan öldü.', askida: 'yalan askıda, babam Münevver Hanım\'a soracak.' }[f.p4_yalan]
        || 'yalan şimdilik ayakta. Babam iki sözü de tartacak.');
      /* GPT T26 Süha (öncelik 5): gecenin pazarlığı kahvedeki hamleyi özetten silmez */
      var ilk = gece ? (hamle ? gece + '. ' + hamle : gece) : (hamle || 'Kahvede babamın yanındaydım');
      c.push(ilk + '. ' + yalan.charAt(0).toUpperCase() + yalan.slice(1));
      // 2) Leyla'yla pakt
      if (f.p4_pakt === 'sir') c.push('Leyla’yla birbirimizden sır saklamamaya yemin ettik. ' + ({
        sakli: 'İlk sırrımı yarına bıraktım, ona bir sır borçluyum.',
        /* GPT T29 (A4-1): özet de bilginin kesinlik derecesini taşır */
        anlatti: f.p_reftar === 'izledi' ? 'İlk sırrımı hemen söyledim: Hatice\'nin yüzüğünü Nabi Bey vermiş, gözümle gördüm.' : 'İlk sırrımı hemen söyledim: Hatice\'nin yüzüğünün eşi Nabi Bey\'de, ama verdiğini görmedim.',
        mukaddem: 'Kenan Bey’in bana yazdığını söyledim.', kapi: 'İlk sırrım: Süha Bey\'in kapısını çaldım.',
      }[f.p4_sir] || (suhaSinir(S) ? 'İlk sırrım: o hekime hayır dedim, Leyla duydu.'
        : suhaYakin(S) ? 'İlk sırrım: o hekimden korkmuyorum.' : 'İlk sırrım: o hekimi bana Perihan Hanım yolluyor.')));
      else if (f.p4_pakt === 'mektup') c.push('Leyla\'yla yemin ettik: onun çekmecesi benim postanem.');
      /* Tur 27 (GPT B4-O2): özet anlaşmayı değil, ilk dönüşte yapılanı yazar ("kabul ettim", "yaptım", "bozdum" ayrı) */
      else if (f.p_rota === 'mukaddem') c.push('İlk dönüşte dadısı da arabadaydı. Leyla sözünü tuttu.');
      /* GPT T29 (O4-1): önek, açıklama hesaplandıktan sonra eklenir ("…tek ses; null" hatası) */
      else c.push('Leyla’yla sözleştik. O sorarsa cevabımız bir. Nitekim ' + (((f.p4_pakt === 'calibe' && f.p4_eskort !== 'yalniz') ? ({
        nimet: 'bugün Nimet refakat etti. Leyla, “İkimiz birden söyleriz,” dedi.',
        josephine: 'bugün Madam refakat etti. Leyla, “İkimiz birden söyleriz,” dedi.',
      }[f.p4_eskort] || 'ilk dönüşte dadısı arabadaydı.') : null) || ({
        nimet: 'dönüşte yanımda Nimet vardı.',
        josephine: 'dönüşte yanımda Madam vardı.',
      }[f.p4_eskort] || {
        dadi: 'ilk dönüşte sözümü tuttum, dadısı da arabadaydı.',
        gorunur: 'dadıyı almadım ama perdeleri açık döndüm. Sözümü yarım tuttum.',
      }[donus(S)] || 'ilk dönüşte kendi maddemi çiğnedim, hekimle yalnız bindim.')));
      /* Tur 28 (B4 anlatı 4): bölümün romantik basamağı deftere girer; son cümle soru değil, Feride'nin karşı hamlesi
         (p4_karsi). GPT A4-1: notu okumayan kızın defteri yazarı bilmez. */
      var karsi = {
        iz: 'Notun katına bir saç teli sıkıştırdım. Yeniden açılırsa anlayacağım.',
        yazi: 'Hekimin eğik yazısını ezberledim. Yarın elime geçecek her etiketi onunla tartacağım.',
        bos: 'Yarın o cebe boş bir kâğıt koyacağım. Açan el kendini ele verecek.',
        leyla: f.p4_pakt === 'mektup' && f.p_rota === 'mukaddem'
          ? 'Kenan\'ın kâğıtları bundan sonra Şefik\'in cebinden değil, Leyla\'nın çekmecesinden geçecek.'
          : 'Şefik\'e tembih ettim: cebine kim ne koyarsa önce bana gösterecek.',
      }[f.p4_karsi];
      // 3) Romantik basamak ve karşı hamle
      if (f.p_rota === 'mukaddem') {
        var gor = f.p4_geri === 'gorun' ? '. Perşembe herkese görünecek.' : '.';
        c.push(({
          basamak: 'Leyla’nın kapısında, sokağın gözü önünde Kenan Bey’in arabasının basamağına çıktım',
          eldiven: 'Eldivenimi basamağa ben düşürdüm. Kenan geri getirdi, eli bileğime değdi',
          uzak: 'Eşikten ayrılmadım. Sesim yine de Kenan\'a ulaştı',
        }[f.p4_muk] || 'Leyla\'nın kapısında Kenan\'la bir dakika durdum') + gor);
      } else {
        c.push({
          bilek: 'Dönüş arabasında bileğimi Süha Bey\'e verdim.',
          perde: 'Dönüş arabasının perdesini sonuna kadar ben açtım.',
          kagit: 'Yanan kâğıdı Süha Bey\'in yüzüne söyledim. “Sizin” dedi.',
          soru: 'Perihan Hanım\'ın onu neden yolladığını Süha Bey\'e sordum. Yarısını söyledi.',
          ret: 'Dönüş arabasında Süha Bey bileğimi istedi, vermedim.',
        }[f.p4_suha] || 'Dönüş arabasında Süha Bey\'le konağa iki yokuş kaldı.');
      }
      if (karsi) c.push(karsi);
      return c.join(' ');
    },
    /* Tur 29 (GPT B2-O2 kalıbı; ORTAK motor anRet): bileğini vermeyen ya da eşikte kalan kıza o an "kaçırdığın an" değildir */
    anRet: {
      /* GPT T29 (O4-3): öbür rotanın anı erişilemezdir */
      an_araba: function (S) { var f = S.bayrak; return f.p_rota === 'mukaddem' || (!!f.p4_suha && f.p4_suha !== 'bilek'); },
      an_eldiven: function (S) { var f = S.bayrak; return f.p_rota !== 'mukaddem' || f.p4_muk === 'uzak' || f.p4_muk === 'basamak'; },
    },
    anIpuclari: {
      an_eldiven: 'Kapıdaki arabaya bir eldiven düşüren, onu kimin geri getirdiğini görür.',
      an_araba: 'Dönüş arabasında bileğini uzatan, sarsıntıyı kimin saydığını öğrenir.',
    },
    /* Sürükleyicilik T1 (S1; b4_5_6 4.9, mercek_sezon B4): kanca yola ve son karta özel, tür tehlike; kartı yinelemez,
       5. bölüm açılışı (not) ve ilk sahnesi (Kenan: kâğıtlar; Süha: şişe ve bardak) onu karşılar. Motor işlevi durumla çağırır. */
    siradaki: { ad: 'Hekim', kanca: function (S) {
      var f = S.bayrak;
      /* Tur 28 (B4 sürük 2; kural "art arda iki bölüm aynı türle bitmez"): 3. bölüm tehlikeyle bittiyse (baba; Şefik ya da
         risksiz Nimet habercisi) bu bölümün her dalı karar kancasıyla biter. Bekleyen ve soran dallar her durumda karar. */
      /* Tur 29 (B4 sürük 1): 3. bölümün Süha kapısı kancası artık tehlike; bu bölüm o dalda karar kancasıyla biter */
      var b3Tehlike = f.p3_son === 'baba' || f.p3_son === 'suha' || (f.p3_son === 'mektup' && (f.p3_haberci === 'sefik' || (f.p3_haberci === 'nimet' && !f.p3_nimet_risk)));
      if (f.p_rota === 'mukaddem') return {
        /* Tur 33 (B4 sürük 10'a): Kenan dalının kancası güçlendi; tür kuralı aynı (b3Tehlike → karar) */
        oku: b3Tehlike
          ? 'Kenan\'ın notunu benden önce gül yağlı bir el açtı. Yarın o eli bileğinden yakalayacağım.'
          : 'Kenan\'ın notunu benden önce gül yağlı bir el açtı. Bir sonrakini de bekliyor.',
        izle: 'Yarın o cebe boş bir kâğıt koyacağım. Gümüş bilezikli el gelirse peşinden gideceğim.',
      }[f.p4_not] || (f.p4_pakt === 'mektup'
        ? 'Kenan\'ın bir sonraki notu Leyla\'nın çekmecesine gidecek. Şefik\'in cebine ise bir not yazacağım: cebi okuyana.'
        : 'Yarın Şefik\'in cebine bir not yazacağım. Kenan\'a değil, cebi okuyana.');
      /* GPT T26 Süha (B4 S2): notu okumayan Feride notun içeriğini bilemez; kanca bildiği şeye dayanır (kardeşi
         haberci yapıldı) ve arabadaki anlaşmaya göre yarının tehlikesini söyler (kartı yinelemez) */
      var yarin = {
        kabul: 'Yarın akşam şurubu getirecek el, bugün kardeşimin cebine Perihan Hanım\'a not koydu.',
        sart: 'Sabah odama bir şişe gelecek. Gönderen el, bugün kardeşimi Perihan Hanım\'a haberci yaptı.',
      }[f.p4_suha_pakt] || 'Pazarlığını geri çevirdiğim adam, bugün kardeşimi Perihan Hanım\'a haberci yaptı. Yarın kimi kullanacak?';
      if (b3Tehlike) yarin = 'Şefik artık cebini önce bana gösterecek. Süha Bey\'in bir sonraki notu Perihan Hanım\'a varmadan elime geçmeli.';
      return {
        /* Tur 27 (B4 diyalog 3): "bu evde" bir yolda en çok iki */
        oku: b3Tehlike
          ? 'Ağzıma ne gireceğini iki kişi seçiyor. Yarın bardağımı ben dolduracağım.'
          : 'Ağzıma ne gireceğini artık iki kişi seçiyor, biri hekim.',
        /* Tur 28 (B4 anlatı 5; GPT A4-3): bilinmeyen cevabı vaat etmez; Feride'nin hazırladığı eylem */
        izle: 'Hatice notu aldı. Sabah aynı el Şefik\'in cebine uzanırsa bu kez ardından gideceğim.',
      }[f.p4_not] || yarin;
    } },
  };
})();

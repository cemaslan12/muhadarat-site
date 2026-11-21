/* =========================================================================
   PİLOT — YENİ BİÇİMDE 3. BÖLÜM: GERDANLIK  (bölüm no 103)
   İskelet: notlar/bolum1_pilot_iskelet.md (3. bölüm: gerdanlık; kanca: Sarı odadan gelen iki ses)
   Romandan (s. 91–101): Josephine'in gelişi, gerdanlığın takılışı, Sarı oda pazarlığı (iftira Nabi
     üzerinden Sait'e; Süha "hekim" diye sık ve yalnız görüşecek), Süha'nın Perihan'ın kâğıdını yakması,
     "Hocamız sizsiniz efendim". Oyun için ek: Kenan'ın mabeyn kapısı, kandil işareti, Süha'nın kilit
     hamlesi, Behiye adı, Remzi'nin uyarısı, Münevver'in haberci sorusu.
   Doğrusal bölüm (dogrusal: true); pilot1/pilot2 ile aynı kalıp. Zaman: 2. bölümün ertesi sabahı
     (mürebbiye günü), ardından gerdanlık günü. Her yolda 13–15 karar (kıyafet ekranı dahil).
   Önceki bölümlerden okunanlar (değiştirilmez): p_rota, p_yalan, p_remzi, p2_koridor_goruldu,
     p2_koridor_hece, p2_dinledi, p2_pusula, p2_satir, p2_not_yer, p2_yasemin_yer, p2_nesne_calibede,
     p2_koz, p2_yalan, p2_hitap, p2_piyano, p2_gerdanlik, p2_sefik, p2_sefik_cizim, p2_remzi, kozlar.
   Bayraklar: p3_giydiren (reftar), p3_sabah (hece/yalan/ayna/nimet/sefik/calibe), p3_josephine
     (fransizca/sandik/uyari), p3_aksam (kandil/golge/karanlik · igne/piyano/gitti), p3_aksam_tanik,
     p3_onceki, p3_madalyon (ikisi/gizli/sefik), p3_kapi (gitti/koz/nimet), p3_kutu (el/esik/nimet),
     p3_soz (kilit/ad/kitap/kapadi/okundu/sustu), p3_mabeyn_tanik, p3_igne (munevver/koz/suha),
     p3_kilit (izin/kendi/munevver), p3_koz_toren, p3_nimet_risk, p3_haberci (nimet/sefik/kendi),
     p3_sari (dinledi/girdi/cekildi), p3_sari_son, p3_josephine_kulak, p3_gerdanlik (boyun/calibe),
     p3_remzi_yer (cit/kafes/josephine), p3_remzi (duello/bilgi/soguk), p3_remzi_goruldu,
     p3_son (baba/mektup/suha).
   Serbest vakit (2 adet; kaçırılabilir): p3_v_madam (aralik/sabir → Sarı oda merdiveninde Madam),
     p3_v_borc (Nimet: Nabi'nin kırk lira borcu → Remzi'de), p3_v_bahce (yanar/bakarsa → kandil;
     kokladi/yaprak → piyano), p3_v_salon (cevap/ugurla), p3_v_baba (annem Süha'yı severmiş → Süha'nın
     kapısında), p3_v_gul (surdu/kapadi → Remzi; 4. bölümde gül yağlı not).
     Plan modunda yürünür (plan: 'konak'); gezinme: p3_v_mabeyn ('goruldu': akşamüstü mabeyni Hatice'nin
     gözü önünde geçti). Sessiz geçiş: S.gizliGidilen['103:mabeyn_merdiven'].
   Yeni kozlar: 'Gece açılan arka kapı' (Nimet'in tanıklığı), 'Yanan kâğıt' (Sarı oda).
   Oynanış T1 (18 Kasım 2026; notlar/denetim/oynanis_t1_birlesik.md Aşama B): törende kapı/yüzük kozu kozGerek ile
     kilitli görünür, kullanılınca yanar (kozYak; 4. bölüm kahvesinde artık yok). iz satırları; eksi gönül (Kenan
     kutuyu Nimet'e aldırınca, Süha piyanodan çıkınca, Remzi çitte geri çevrilince −3). Giydirenin kıyafet tepkisi.
     Keşifler: p3_k_pencere (Kenan, kandil akşamı → 4. bölüm arabadaki kitap), p3_k_seker (Süha, nota sehpası →
     törende), p3_k_mangal (sarı oda → sarı oda dalları, gece Süha'nın kapısı). Süha'nın kapısı mabeyn kapısı fonunda.
   GPT T26 Süha (18 Kasım 2026; ortak/gpt_t26_suha.md B3): akşamüstü babayla küçük karar (p3_v_baba 'uyardi'/'sakladi';
     güven yalnız uyarının karşılığı; gece babaya inen yolda okunur). Sarı odada mangal keşfi yeni seçenek açar
     (p3_sari_mangal 'yazi': yanmadan önce eğik, imzasız yazı; aynı gece Süha'nın kapısında, 4. bölüm gece notunda okunur).
     Kapı kozunun kilidi bilmeyene gösterilmez, düğündeki gözlemi harcamış olana nedeniyle gösterilir (kapiIkiz).
     Kenan'ın bahçe gönlü Şefik cevabı götürünce. "Onun gözünden" Süha satırlarında niyet hükmü yerine davranış.
   Küçük soru (cevap bulur): koridorda söylenen ad kimin? → Behiye, Feride'nin annesi.
   Gönül kuralı: puan = adayın ilgisi + Feride'nin yakınlaşması. Yalnız uzaklaştıran cevap puan vermez;
     adayın tepkisi o anda bir satırla görünür.
   ========================================================================= */
window.BOLUMLER = window.BOLUMLER || {};

(function () {
  var V = window.OYUN_VERISI;
  // Yeni mekânların kendi görseli gelene kadar en yakın eski fon
  var YEDEK = { mabeyn_kapisi: 'mabeyn_merdiven', sari_oda: 'calibe_oda' };
  Object.keys(YEDEK).forEach(function (id) {
    var m = V.mekanlar[id];
    if (m && !m.arkaplan && V.mekanlar[YEDEK[id]]) m.arkaplan = V.mekanlar[YEDEK[id]].arkaplan;
  });
  /* Tur 27 (B3 görsel 2–3; GPT B3-O1/G1/G2): yeni an kimlikleri ve eksik kıyafet çeşitleri. Kayıt burada; resmi
     gelene kadar { cizim } adımı sessizce atlanır. Üretim: notlar/denetim/t27_uretim_b01_04.md */
  var ANLAR27 = {
    an_sari_oda: { ad: 'Mangalda kıvrılan kâğıt', alt: 'Gerdanlık · Süha' },
    an_mabeyn_esik: { ad: 'Eşikte kadife kutu', alt: 'Gerdanlık · Kenan' },
    an_mabeyn_nimet: { ad: 'Dadının elinde kadife kutu', alt: 'Gerdanlık · Kenan' },
    /* B3 gece dorukları (Claude B3 görsel 8; GPT B3-S 10'a-3): Süha'nın kapısı, duvar kapısında el değiştiren kâğıt, kandil */
    an_gece_kapi: { ad: 'Gece, aralık kapıda af', alt: 'Gerdanlık · Süha', cesit: true },
    /* an_duvar 9. bölümün anı (oyun_verisi); çakışmasın diye bu an an_duvar_kapi */
    an_duvar_kapi: { ad: 'Duvar kapısında el değiştiren kâğıt', alt: 'Gerdanlık · Kenan', cesit: true },
    an_kandil: { ad: 'İki pencere, iki ışık', alt: 'Gerdanlık · Kenan' },
    /* Tur 28 (B3 görsel 1): Süha yolunda kilidi kendi kapatan Feride; Münevver yanında gururla (üretimde) */
    an_gerdanlik_kendi: { ad: 'Kilidi kendi eliyle', alt: 'Gerdanlık · Süha', cesit: true },
    /* Tur 29 (B3 görsel 1, 3): içeri giren dalda Feride Perihan'ın yanında; Kenan yolunda gerdanlık anı hafif gülüşle (üretimde) */
    an_sari_oda_girdi: { ad: 'Ensede bir el, mangalda bir kâğıt', alt: 'Gerdanlık · Süha', cesit: true },
    an_gerdanlik_kenan: { ad: 'Gözü kapıda, taş boynunda', alt: 'Gerdanlık · Kenan', cesit: true },
    /* Tur 30 (B3 sürük 3): gece dorukları resimsiz kalıyordu (koşuların ~%63'ü). Tek resim: Feride şallı ya da
       arkadan; kıyafet ve madalyon türü gerekmez. Üretim: notlar/denetim/t30_uretim_1_4.md */
    an_sahit: { ad: 'Durmuş tespih', alt: 'Gerdanlık' },
    an_nimet_sal: { ad: 'Şalın altında iki satır', alt: 'Gerdanlık' },
    an_kitap_nazli: { ad: 'Yirmi dördüncü sayfa, aralık kapı', alt: 'Gerdanlık' },
  };
  if (V.cizimler) {
    Object.keys(ANLAR27).forEach(function (id) {
      (id === 'an_sari_oda' || ANLAR27[id].cesit ? ['', '_nisan_gosterisli', '_nisan_yadigar'] : ['']).forEach(function (c) {
        if (!V.cizimler[id + c]) V.cizimler[id + c] = { ad: ANLAR27[id].ad, alt: ANLAR27[id].alt };
      });
    });
    // Törende seçilen elbise ve madalyon birlikte eşleşmeli.
    for (const elbise of ['nisan_yadigar', 'nisan_gosterisli']) {
      const id = 'an_gerdanlik_kenan_' + elbise + '_sakli';
      V.cizimler[id] = Object.assign({}, V.cizimler.an_gerdanlik_kenan, { temelAn: 'an_gerdanlik_kenan', gorsel: (V.cizimResimleri || {})[id] || null });
    }
    V.cizimler.an_gerdanlik_kenan.cesitSec = function (S, giyili, hal) {
      const karar = (S.bayrak || {}).p3_madalyon;
      const sakli = karar ? karar !== 'ikisi' : hal === 'sakli' || hal === 'yok';
      if (sakli && (giyili === 'nisan_yadigar' || giyili === 'nisan_gosterisli')) {
        const id = 'an_gerdanlik_kenan_' + giyili + '_sakli';
        return V.cizimler[id].gorsel ? id : null;
      }
      if (sakli) return 'an_gerdanlik_kenan_sakli';
      if (giyili === 'nisan_yadigar' || giyili === 'nisan_gosterisli') return 'an_gerdanlik_kenan_' + giyili;
      return 'an_gerdanlik_kenan';
    };
    ['_nisan_gosterisli', '_nisan_yadigar'].forEach(function (c) {
      var t = V.cizimler.an_kilit;
      if (t && !V.cizimler['an_kilit' + c]) V.cizimler['an_kilit' + c] = { ad: t.ad, alt: t.alt };
    });
  }

  var KOZ = 'Hatice ile Nabi Bey', YUZUK = 'Hatice\'nin yüzüğü', KAPI = 'Gece açılan arka kapı', KAGIT = 'Yanan kâğıt';
  var b = function (S) { return S.bayrak; };
  var muk = function (S) { return S.bayrak.p_rota === 'mukaddem'; };
  var var_ = function (S, k) { return (S.kozlar || []).indexOf(k) >= 0; };
  var kapiKoz = function (S) { return var_(S, KOZ) || var_(S, KAPI); };
  var yuzukKoz = function (S) { return var_(S, YUZUK) && !kapiKoz(S); };
  /* Oynanış T1 (B1): kozun görünür kilidi ve tükenmesi. Kapı kozunu harcayan elindekini yakar (önce Nimet'in
     tanıklığı, yoksa düğündeki gözlem); yüzük kozunun kilitli hâli gösterilmez (bir seçimde tek kilit yeter). */
  var KAPI_YAK = { eger: function (S) { return var_(S, KAPI); }, ise: [{ kozYak: KAPI }], degilse: [{ kozYak: KOZ }] };
  var gizliKilit = function () { return false; };
  /* Tur 27 (B3 oynanış 2): Nimet'in yüzük dedikodusunu duyan, kozu olmasa da yüzük kilidini görür ("kilitli kapının
     arkası" merakı). Kapı kilidi zaten görünüyorsa ikinci kilit gösterilmez (bir seçimde tek kilit). */
  var yuzukKilit = function (S) { var k = S.bayrak.p2_koz; return !kapiKoz(S) && !kapiKilit(S) && !!k && k !== 'dinlemedi'; };
  /* GPT T26 Süha (öncelik 1–2): kapı kozunun kilidi oyuncunun bildiğiyle uyuşsun. Arka kapıyı hiç görmemiş olan kilidi
     görmez (kilitli seçeneğin metni bilmediği sırrı sızdırmasın). Düğündeki gözlemini önceden harcamış olan (1. ya da
     2. bölüm) kilidin nedenini okur: ikiz kilit yalnız o kozu ister, motor "bu kozu harcadın" yazar. */
  var harcandi = function (S, k) { return !!(S.kozAcik && S.kozAcik[k] !== undefined); };
  var kapiBilgi = function (S) { return S.bayrak.p_reftar === 'izledi' || kapiKoz(S) || harcandi(S, KOZ) || harcandi(S, KAPI); };
  var kapiYalnizKoz = function (S) { return !kapiKoz(S) && harcandi(S, KOZ) && !harcandi(S, KAPI); };
  var kapiKilit = function (S) { return kapiBilgi(S) && !kapiYalnizKoz(S); };
  var kapiIkiz = function (m) { return { m: m, kosul: function () { return false; }, kozGerek: KOZ, kilitGoster: kapiYalnizKoz }; };
  var gorulen = function (S) { return !!S.bayrak.p2_koridor_goruldu; };
  // 2. bölümde Perihan'ın cebine giren eşya
  var calibede = function (S) {
    if (!S.bayrak.p2_nesne_calibede) return null;
    if (!muk(S)) return 'kutu';
    return S.bayrak.p2_not_yer === 'yastik' ? 'pusula' : 'yasemin';
  };

  /* Kenan'ın kadife kutunun kapağı altına koyduğu sayfa (kapıda ya da Nimet'in elinde okunur) */
  var SAYFA = { eger: function (S) { return b(S).p2_pusula === 'yazdi'; }, ise: [
    { eger: function (S) { return b(S).p2_satir === 'soru'; }, ise: [
      '“Yirmi dördüncü sayfada kapısı açık bir kafes var, kuş henüz bilmiyor. —K.”',
      /* Anlatı T2 (b1_2_3 B3 b2): 2. bölümde lekeden kuş çizildiyse iki bölüm sonra yankılanır */
      { eger: function (S) { return b(S).p2_sefik_cizim === 'kus'; }, ise: [
        ['ic', 'Şefik\'le lekeden bir kuş yapmıştık. Kuş kafesi bilmezdi.', 'tebessum'],
      ], degilse: [
        ['ic', 'Kuşu okurken Şefik\'in çizdiği kanatları hatırladım. Kenan da o resmi görseydi.', 'mahzun'],
      ] },
    ], degilse: [{ eger: function (S) { return b(S).p2_satir === 'okudum'; }, ise: [
      '“Okuduğunuzu bilmek bir yıla yetti. —K.”',
    ], degilse: [{ eger: function (S) { return b(S).p2_satir === 'sitem'; }, ise: [
      /* Tur 29 (B2 oynanış 2): pusuladaki sitemin cevabı; Kenan özür diler, ödül beklemez */
      '“Haklısınız, bir yıl geç kaldım. Bu sayfayı erken yolluyorum. —K.”',
    ], degilse: [{ eger: function (S) { return b(S).p2_satir === 'haber'; }, ise: [
      /* Tur 30: 2. bölümde görücü haberini yazan kıza Kenan'ın cevabı (planın karşılığı) */
      '“Haberi anneme verdim, bu kutu bu yüzden vaktinde geldi. —K.”',
    ], degilse: [
      '“Yasemin yerindeyse ben de yerimdeyim. —K.”',
    ] }] }] }] },
  ], degilse: [{ eger: function (S) { return b(S).p2_pusula === 'yaprak' || b(S).p2_pusula === 'aldi'; }, ise: [
    { eger: function (S) { return b(S).p2_pusula === 'yaprak'; }, ise: [
      '“Yaprağı yirmi dördüncü sayfaya bastım, bir ömür okunur. —K.”',
    ], degilse: [
      '“Sayfa boş geldi. En uzun mektubunuz oydu. —K.”',
    ] },
    { eger: function (S) { return !!b(S).p2_nesne_calibede; }, ise: [
      ['ic', 'Yasemin şimdi Perihan Hanım\'ın cebinde. Bunu ona yazamam.', 'ofkeli'],
    ] },
  ], degilse: [{ eger: function (S) { return b(S).p2_not_yer === 'kitap'; }, ise: [
    '“Bir katı yanlış katlanmıştı, bu kâğıdın da öyle. —K.”',
  ], degilse: [
    '“Pusulam kitapta yoktu. Nerede olduğunu sormayacağım. —K.”',
    { eger: function (S) { return !!b(S).p2_nesne_calibede; }, ise: [
      ['ic', 'Ben biliyorum nerede: Perihan Hanım\'ın cebinde.', 'ofkeli'],
    ], degilse: [
      ['ic', 'Yastığımın altında. Sormasın, tahmin etsin.', 'tebessum'],
    ] },
  ] }] }] };

  /* Koz törende gösterilince: Nimet'in tanıklığından geldiyse Perihan kaynağı sezer */
  var NIMET_RISK = { eger: function (S) { return b(S).p2_koz === 'nimet'; }, ise: [
    'Perihan Hanım\'ın gözü bir an Nimet\'e kaydı. O bir an yetti.',
    { bayrak: { p3_nimet_risk: true } },
  ] };

  /* Sabah Nimet'in 2. bölüm kozu üzerine bildirimi (Tur 30: görülen dalında Perihan'ın sorgusundan sonra gelir) */
  var NIMET_KOZ = { eger: function (S) { return b(S).p2_koz === 'nimet'; }, ise: [
    ['mehves', 'Arka kapıyı gözledim. Gece yarısı Hatice fenerle indi, Nabi Bey girdi.', 'kararli'],
    /* GPT T24b Süha (B3-1): kart Nimet'in az önceki sözünü bütünüyle yinelemez; kaynak ayrımı kaynak satırında */
    { koz: KAPI, kaynak: 'Nimet gördü, ben görmedim', alt: 'Hatice\'nin feneri, Nabi Bey\'in gece yarısı girdiği kapı. Perihan Hanım bilmiyor.' },
  ], degilse: [{ eger: function (S) { return b(S).p2_koz === 'harcadi'; }, ise: [
    ['mehves', 'Perihan Hanım beni yarın mutfağa verdi. Gerdanlık günü sizi Hatice giydirecek.', 'endiseli'],
    ['ic', 'Yüzüğü ben duyurdum, cezasını Nimet çekiyor.', 'mahzun'],
    { bayrak: { p3_giydiren: 'reftar' } },
  ], degilse: [{ eger: function (S) { return b(S).p2_koz === 'reftar'; }, ise: [
    'Kahvemi Hatice getirdi. Parmağında yüzük yok, yalnız beyaz bir izi var.',
  ] }] }] };

  /* Sarı oda, kapıda kalıp dinleyen (iki seçenek paylaşır; yazıya bakan p3_sari_mangal 'yazi' alır) */
  var yaziGordu = function (S) { return b(S).p3_sari_mangal === 'yazi'; };
  var SARI_DINLE = [
    /* Tur 27 (GPT B3-A1): emri yarım bırakmak bilinçli bir karar */
    ['ic', 'Kutuyu bırakıp gideceğimi sanıyorlar. Önce içeride ne konuşulduğunu duymalıyım.', 'kararli'],
    /* Diyalog T1 (3.2): Perihan'ın söylemediği bahane yerine kâğıdın yaşı */
    ['suha', '{i}O kâğıdı yıllardır görmedim. Bir bakayım.{/i}', 'endiseli'],
    { eger: yaziGordu, ise: [
      /* GPT T26 Süha (öncelik 9): yazının izi — imzasız (10. bölümdeki mektup), eğik el yazısı (4. bölüm gece notu) */
      'Kâğıdı aldı, okur gibi yaptı. Lambaya döndüğü an gördüm: eğik, sık bir yazı, imza yok.',
      /* Tur 33 (B3 oynanış 2): yazıyı gören dalın farkı Feride'nin aklında da görünsün */
      ['ic', 'Eğik, sık bir el. Bu yazıyı unutmayacağım.', 'dusunceli'],
    ], degilse: [
      'Kâğıdı aldı, okur gibi yaptı.',
    ] },
    /* Tur 27 (B3 sürük 3): vurucu an Feride'nin eylemiyle tetiklenir; şahidi duyan Süha kâğıdı yakar */
    { efekt: 'kapi_tik' }, // Tur 30 (B3 ses 1): 'tik' arayüzün satır sesi; pervaza tek parmak vuruşu kapi_tik
    'Parmağımla pervaza bir kez vurdum. Bile bile.',
    /* Tur 29 (B3 anlatı 10'a): kararın teslimi anlatıcıda */
    ['an', 'Perihan Hanım kapıya döndü. Süha Bey o yarım saniyeyi bekliyordu.'],
    ['suha', '{i}Kapı aralık, efendim.{/i}', 'alayci'], // Tur 28 (B3 diyalog 2): hitap tablosu
    /* Tur 27 (B3 ses 4): bölümün tek bilinçli sessizliği; köze düşüş ışık ve ses nabzıyla */
    { muzik: 'sessiz' },
    { efekt: 'kagit_kivrilma' }, // Tur 29 (B3 ses 2) → mangalda kıvrılan kâğıt ('yanma' resim yanışına ayrıldı)
    /* Tur 29 (13 satır): mangal ve kıvrılan kâğıt tek satırda */
    { eger: (S) => !!b(S).p3_k_mangal, ise: [
      'Mangalın üstünde elini açtı, kâğıt kıvrıldı. Közü bunun için harlatmış.',
    ], degilse: [
      'Mangalın üstünde elini açtı, kâğıt kıvrıldı. Sonra yoktu.',
    ] },
    { cizim: 'an_sari_oda' },
    { muzik: 'gerilim' },
    ['calibe', '{i}Yetiştirdiğim çırak…{/i}', 'ofkeli'],
    ['suha', '{i}Hocamız sizsiniz efendim.{/i}', 'soguk'],
    'Aynada Süha Bey\'in gözü. Beni görüyor.',
    /* Tur 27 (B3 diyalog 6): melodram yerine kısa, ters köşe; "borç" Süha'nın kalıbı, tehlike açık */
    /* Tur 28 (GPT B3 D3-1): pazarlığın somut içeriği; tehdit bitmez, kâğıdın işlevi anlaşılır */
    ['suha', '{i}Efendim, o kâğıdın hükmü kalmadı. Beni çağırtmak için başka bir çare bulursunuz.{/i}', 'soguk'],
    /* Tur 28b (kök 3–4): koz kartı görgüyü, duyulanı ve çıkarımı ayrı söyler.
       Tur 29 (B3 anlatı 1): kart alıntıladığı söz söylendikten sonra açılır */
    { koz: KAGIT, kaynak: 'Kendim gördüm', alt: 'Süha Bey kâğıdı yaktı. “Artık beni çağıramazsınız” dediğine göre Perihan Hanım onu bununla elinde tutuyordu.' },
    { eger: yaziGordu, ise: [{ kozKaynak: [KAGIT, 'Kendim gördüm, yazı eğik ve sıktı, imzasız'] }] },
    /* GPT T23 (Süha 3b-2): yanan kâğıt Perihan'ı bitirmedi; Süha'nın özgürlüğü şüpheli kalır */
    /* GPT T24b Süha (B3 10'a-3): soru yerine Feride'nin kurduğu hedef */

    { soru: 'Aynada göz gözeyiz.', secim: [
      { m: 'Gözünü kaçırma. Sonra çekil.', etki: { suha: 5 }, bayrak: { p3_sari_son: 'bakti' }, adimlar: [
        'Bakışımı indirmeden bir adım geri çekildim. Önce o kaçırdı.',
      ] },
      { m: 'Parmağını dudağına götür.', etki: { suha: 7 }, bayrak: { p3_sari_son: 'sir' }, adimlar: [
        'Parmağımı dudağıma götürdüm. Aynadaki yüz birden gençleşti.',
        ['ic', 'Perihan Hanım\'ın odasında onunla bir sır paylaştım. Bu sır beni nereye bağlayacak?', 'endiseli'],
      ] },
      { m: 'Hemen çekil.', bayrak: { p3_sari_son: 'cekildi' }, adimlar: [
        'Kapıdan çekildim. Arkamdan kimse seslenmedi.',
        ['ic', 'Duyduğumu biliyor. Söylerse ben de gördüğümü söylerim.', 'kararli'],
      ] },
    ] },
  ];

  /* ---- Serbest vakitler (motor.js serbestVakit). Mini sahneler kaçırılabilir; bayraksız akış bozulmaz. ---- */
  // 1) Öğleden akşama: Madam'ın sandığı, mutfakta Nimet, bahçede rotaya göre Şefik (Kenan'ın sorusu) ya da Süha
  var OGLE_ORTAK = {
    josephine_oda: { kisi: 'josephine', ifade: 'ana', eylem: 'konuş', ipucu: 'Madam sandığını açıyor, kapısı aralık (konuşma).',
      adimlar: [
        'Madam\'ın odası. Sandık açık, içinden kitaplar, bir kutu boya, bir de küre çıkmış.',
        /* Diyalog T1 (G1, ses C3): "Bu evde" kalıbı azaldı; Madam'ın Türkçesi kırık */
        ['josephine', 'Kelime öğretin bana, Türkçe. İlk lazım olan.', 'gulumser'], // Tur 28 (B3 diyalog 3)
        { soru: 'Madam kalemini dudağına götürdü.', secim: [
          { m: '“Aralık.” Kapılar için.', etki: { josephine: 1 }, bayrak: { p3_v_madam: 'aralik' }, adimlar: [
            ['josephine', 'A-ra-lık. Kapı aralık, perde aralık, kulak da mı?', 'muzip'],
            ['f', 'Kulak hep.', 'tebessum'],
          ] },
          { m: '“Sabır.” Bu ev için.', etki: { josephine: 1, vakar: 1 }, bayrak: { p3_v_madam: 'sabir' }, adimlar: [
            ['josephine', 'Sa-bır, {i}patience.{/i} Herkes bilir, kimse yapmaz.', 'tebessum'],
            ['ic', 'Bizde de öyle. Perihan Hanım sabrı herkese öğütler, kendine hiç.', 'tebessum'],
          ] },
        ] },
      ], bos: 'Madam sandığına gömülmüş. Bir şarkı mırıldanıyor.' },
    mutfak: { kisi: 'mehves', ifade: 'kararli', eylem: 'konuş', ipucu: 'Mutfakta Nimet arka kapıyı sürgülüyor, öfkeli, anlatacak bir şeyi var (konuşma).',
      adimlar: [
        { efekt: 'surgu' },
        'Nimet arka kapıyı kapatıp sürgüledi. Yüzü kıpkırmızı.',
        /* Tur 27 (B3 sürük 6): orta bölümün merakı sarı odaya bağlanır */
        ['mehves', 'Sarı odanın anahtarı bu sabah Hatice\'de. Hanım onu kimseye vermezdi.', 'endiseli'],
        ['mehves', 'Bir uşak geldi, Nabi Bey\'i sordu. Kırk lira alacakları varmış, kumar borcu.', 'kararli'],
        ['mehves', 'Rıfkı\'nın oğlunun adamıymış. Atını kapıda bekletti, at bile kibirli.', 'kararli'],
        /* Diyalog T1 (3.5): "dayı" yalnız Süha'nın çocukluk hitabı; burada Nabi */
        /* Doğrulama gece (B3): "bu evde" yolda en çok iki */
        ['ic', 'Kırk lira kumar borcu… Nabi Bey bunu kimin kesesinden ödeyecek?', 'endiseli'],
        { bayrak: { p3_v_borc: true } },
      ], bos: 'Nimet ocağın başında, eliyle “sonra” dedi.' },
  };
  var OGLE_BAHCE_MUK = { kisi: 'sefik', ifade: 'sevincli', eylem: 'konuş', ipucu: 'Bahçede Şefik duvarın dibinde, birine el sallıyor (konuşma).',
    adimlar: [
      'Şefik bahçe duvarının dibinde, elinde bir kitap, nefes nefese.',
      ['sefik', 'Kenan abi duvarın öbür yanındaydı! Bunu verdi, “sor” dedi.', 'sevincli'],
      'Kitabın arasında tek satır: “Akşam pencerenizde kandil yanar mı?”',
      { soru: 'Şefik cevap bekliyor. Duvar yirmi adım ötede.', secim: [
        /* GPT T26 Süha (öncelik 6): gönül, cevap Kenan'a ulaştığında artar (Şefik dönünce), seçildiği anda değil */
        { m: '“Yanar” de.', bayrak: { p3_v_bahce: 'yanar' }, adimlar: [
          ['sefik', 'Yanar! Koşarak götürürüm.', 'sevincli'],
          ['ic', 'Tek kelime. Şefik\'in ayaklarıyla bütün bahçeyi geçti.', 'utanmis'],
        ] },
        { m: '“Bakarsa görür” de.', bayrak: { p3_v_bahce: 'bakarsa' }, adimlar: [
          ['sefik', 'Bakarsa görür… Ben anlamadım ama o anlar.', 'saskin'],
          ['ic', 'Anlar. Bir yıl beni bekletti, bu akşam da o beklesin.', 'tebessum'],
        ] },
      ] },
      /* Tur 17 ek (madde 8): Şefik aracı; iki işaret burada öğretilir, krizde ezber sınavı yapılmaz.
         Sabit ışık "iyiyim", iki kez örtüp açmak "yardım çağır". Karşıdan anlaşıldığının cevabı gelir.
         Diyalog T1 (3.11): kılavuz cümlesi yerine Feride'nin sesi; iki anlam aynen kalır (pilot5/6 bunlara bakar). */
      /* Tur 32 (B3 diyalog 2): kılavuz metni yerine Feride'nin ağzı; anlamlar aynı */
      ['f', 'Bir de söyle: lambam yanık durursa iyiyim. İki kez sönerse yardıma gelsin.', 'kararli'],
      /* GPT T29 (S3-1): teslim işareti krizden önce kurulur; gece kesin yorum yalnız bu anlaşmayla */
      ['f', 'Ona benden bir kâğıt ulaşırsa, o da lambasını üç kez indirip kaldırsın.', 'kararli'],
      ['sefik', 'Gizli dil! Kimseye söylemem abla.', 'sevincli'],
      'Şefik koştu, döndü. Kitabın kenarında kurşun kalemle iki çizgi.',
      ['sefik', 'Kenan abi “İkisini de ezberledim” dedi. Bir de güldü.', 'sevincli'],
      { eger: (S) => b(S).p3_v_bahce === 'bakarsa', ise: [{ etki: { mukaddem: 6 } }], degilse: [{ etki: { mukaddem: 5 } }] },
      { bayrak: { p3_v_isaret: true } },
    ], bos: 'Şefik duvarın dibinde taş diziyor, beni görmedi.' };
  var OGLE_BAHCE_SUHA = { kisi: 'suha', ifade: 'notr', eylem: 'konuş', ipucu: 'Bahçede Süha Bey limonun yapraklarını topluyor (konuşma).',
    adimlar: [
      'Süha Bey saksıdaki limonun başında. Yaprakları koparıp avucunda eziyor.',
      /* GPT T26 Süha (B3 D1): art arda iki özdeyiş yerine gündelik söz; şişe iması (5. bölüm şurubu) tek cümlede */
      ['suha', 'Kolonyamı kendim yaparım, kimsenin şişesine güvenmem.', 'alayci'],
      ['suha', 'Koklayın. Limon bu, başka bir şey değil.', 'notr'],
      { soru: 'Avucunu bana uzattı.', secim: [
        { m: 'Eğil, kokla.', etki: { suha: 7 }, bayrak: { p3_v_bahce: 'kokladi' }, adimlar: [
          'Eğildim. Limon, biraz tütün, bir de avucunun sıcağı.',
          ['ic', 'Bir koku hatırlanmak için verilir. Biliyor.', 'endiseli'],
        ] },
        { m: 'Tek yaprak al, geri çekil.', etki: { suha: 4, vakar: 1 }, bayrak: { p3_v_bahce: 'yaprak' }, adimlar: [
          'Avucundan tek yaprak aldım, parmaklarına değmeden.',
          ['suha', 'Yaprağı aldınız, eli bıraktınız. Akıllıca.', 'alayci'],
        ] },
        /* Tur 28b (kök 1): temas teklifine açık ret her dalda (gönül kuralı: Süha reddedilmekten hoşlanır, satırda görünür) */
        { m: '“Limonu uzaktan da tanırım Süha Bey.”', etki: { suha: 3, vakar: 1 }, bayrak: { p3_v_bahce: 'ret' }, iz: 'Avucunu geri çevirdin.', adimlar: [
          ['f', 'Limonu uzaktan da tanırım Süha Bey. Avucunuz sizde kalsın.', 'kararli'],
          ['suha', 'Kalsın. Avucum açık durur, acelem yok.', 'soguk'],
        ] },
      ] },
    ], bos: 'Süha Bey limonun başında, yalnızca başını eğdi.' };
  /* ---- Gezinme katmanı (plan modu, veri/plan_konak.js; notlar/gezinme_tasarimi.md). Yürümek bedava, • iş 1 vakit.
     Kim nerede (metinden): öğleden sonra Madam odasında, Nimet mutfakta, bahçede Şefik ya da Süha; akşamüstü
     Perihan Hanım ile Hatice sarı odada ("Perihan Hanım minderde, Hatice ayaklarını ovuyor"), babam sofada,
     Perihan'ın odası boş.
     Kapalı: Süha Bey'in odası ve Perihan'ın odası (2. bölümdeki neden: izinsiz girilmez; akşamüstü oda boş ve
     • yer olduğu için açık), babamın odası (selamlıkta; kapısı çalınmadan açılmaz).
     Riskli: mabeyn (selamlığa geçit). Öğleden sonra yolda kimse yok: sessiz geçiş, iz satırı, anlık ceza yok
     (dayanak: 2. bölüm yemekten önce; Perihan'ın tören sözü "gelin olacak kız mabeyn kapısına gitmez. Âdet
     değil."). Akşamüstü Hatice sarı odada, kapı aralık: görür ve hanımına söyler (dayanak: sarı odada "Kız bugün
     mabeyn kapısında oyalandı. Hatice gördü.") → calibe_suphe +1, p3_v_mabeyn 'goruldu'. */
  var KAPALI_ORTAK = {
    suha_oda: { neden: 'Süha Bey\'in odası. Misafirin kapısı çalınmadan açılmaz.' },
    baba_oda: { neden: 'Babamın odası. Selamlıkta onun kapısı çalınmadan açılmaz.' },
  };
  var KAPALI_OGLE = {
    suha_oda: KAPALI_ORTAK.suha_oda, baba_oda: KAPALI_ORTAK.baba_oda,
    calibe_oda: { neden: 'Perihan Hanım\'ın odası kilitli. Sabah sarı odayı açtırdı, kendi odasını kilitledi.' },
  };
  var MABEYN_SESSIZ = { gozcu: null, uyari: 'şimdi kimse yok',
    sonuc: 'Ardı selamlık. Gelin olacak kız mabeyn kapısına gitmez, âdet değil.',
    iz: 'Mabeyn merdiveninde kimseye görünmedim. Yalnız sürgünün pası avucumda kaldı.' };
  var GEZINME_OGLE = { plan: 'konak', kapali: KAPALI_OGLE, riskli: { mabeyn_merdiven: MABEYN_SESSIZ } };
  var GEZINME_AKSAMUSTU = {
    plan: 'konak', kapali: KAPALI_ORTAK,
    riskli: {
      mabeyn_merdiven: { gozcu: 'Hatice', gozcuYer: 'sari_oda', uyari: 'Hatice görür',
        sonuc: 'Hatice sarı odanın aralığından görür, hanımına söyler (Perihan Hanım\'ın şüphesi artar).',
        bedel: { etki: { calibe_suphe: 1 }, bayrak: { p3_v_mabeyn: 'goruldu' },
          ic: function (S) { return b(S).p3_mabeyn_tanik ? 'Hatice yine gördü. Bugün ikinci kez hanımına taşıyacak.' : 'Hatice gördü. Hanımına söyleyecek.'; } } },
    },
  };
  var gezinme = function (v, g) { Object.keys(g).forEach(function (k) { v[k] = g[k]; }); return v; };

  var ogle = function (hedef, metin, bahce) {
    return gezinme({
      ad: 'Öğleden sonra', hak: 2,
      hedef: { mekan: hedef, metin: metin },
      mekanlar: ['josephine_oda', 'mutfak', 'konak_bahce', hedef],
      yerler: { josephine_oda: OGLE_ORTAK.josephine_oda, mutfak: OGLE_ORTAK.mutfak, konak_bahce: bahce },
      bitis: [['an', 'Gölgeler uzadı, konakta ilk lambayı Hatice yaktı.']],
    }, GEZINME_OGLE);
  };
  var VAKIT_OGLE_MUK = ogle('fazila_oda', 'Akşam olmadan odana çık. Pencere karşı konağa bakar.', OGLE_BAHCE_MUK);
  var VAKIT_OGLE_SUHA = ogle('buyuk_salon', 'Akşam salona in. Piyano orada.', OGLE_BAHCE_SUHA);

  // 2) Törenden sonra, akşamüstü: salonda son yelpazeler, sofada babam, Perihan'ın boş odası
  // Salondaki davetlinin dedikodusu hangi dalda (soru ve cevap aynı dalı izler)
  var salonSoru = function (S) {
    if (muk(S) && b(S).p3_kapi !== 'nimet') return 'mabeyn';
    if (!muk(S) && b(S).p3_kilit === 'izin') return 'kilit';
    return 'agirlik';
  };
  var VAKIT_AKSAMUSTU = {
    ad: 'Akşamüstü', hak: 1,
    /* Tur 27 (GPT B3-S1): serbest vakitte bölümün acil hedefi görünür kalır */
    hedef: { mekan: 'konak_bahce', metin: 'Nabi Bey\'in yalanı sabah babamın kahvesinde. Önce bahçeye in, aklını topla.' },
    mekanlar: ['buyuk_salon', 'konak_sofa', 'calibe_oda', 'konak_bahce'],
    yerler: {
      buyuk_salon: { kisi: 'davetliler', ifade: 'ana', eylem: 'kulak ver', ipucu: 'Salonda son misafirler yelpazelerini topluyor, adın geçiyor (kulak misafiri).',
        adimlar: [
          'Salonda son hanımlar yelpazelerini topluyor. Adım iki kez geçti.',
          { eger: (S) => salonSoru(S) === 'mabeyn', ise: [
            ['davetliler', 'Mabeyn kapısında bir dakika! Bizim zamanımızda bir saniye bile olmazdı.'],
          ], degilse: [{ eger: (S) => salonSoru(S) === 'kilit', ise: [
            ['davetliler', 'Hekim bey kilidi pek yavaş kapadı. Elleri yorulmuştur.'],
          ], degilse: [
            ['davetliler', 'Yedi yüz liralık taş. Kızın boynu ağırını taşır mı?'],
          ] }] },
          /* Seçenek, davetlinin o dalda sorduğu söze cevap verir (Tur 17: kilit sözüne madalyon cevabı gelmesin) */
          { soru: 'Yelpazeler bana döndü.', secim: [
            { m: '“Bir dakikada ancak selam verilir efendim. Biz selamlaştık.”', kosul: (S) => salonSoru(S) === 'mabeyn', etki: { itibar: 4 }, bayrak: { p3_v_salon: 'cevap' }, adimlar: [
              ['f', 'Bir dakikada ancak selam verilir efendim. Biz selamlaştık.', 'tebessum'],
              'Biri yelpazesini kapadı, öbürleri de.',
            ] },
            { m: '“Acele etmesini istemedim efendim, düşürmesin diye.”', kosul: (S) => salonSoru(S) === 'kilit', etki: { itibar: 4 }, bayrak: { p3_v_salon: 'cevap' }, adimlar: [
              ['f', 'Acele etmesini istemedim efendim, düşürmesin diye.', 'tebessum'],
              'Yaşlı olanı güldü, gençler de onun güldüğüne güldü.',
            ] },
            { m: '“Taşır efendim. Annemin madalyonundan alışkın.”', kosul: (S) => salonSoru(S) === 'agirlik', etki: { itibar: 4 }, bayrak: { p3_v_salon: 'cevap' }, adimlar: [
              ['f', 'Taşır efendim. Annemin madalyonundan alışkın.', 'kararli'],
              'Kimse cevap vermedi. Çay soğudu.',
            ] },
            { m: 'Teşekkür et, kapıya kadar uğurla.', etki: { itibar: 2, vakar: 1 }, bayrak: { p3_v_salon: 'ugurla' }, adimlar: [
              'Hepsini kapıya kadar uğurladım. Laf, kapıda insanın ağzında soğur.',
            ] },
          ] },
        ], bos: 'Hanımlar yelpazelerini topluyor, sözleri bitmiş.' },
      konak_sofa: { kisi: 'sai', ifade: 'mahzun', eylem: 'konuş', ipucu: 'Babam sofada yalnız, tespihi elinde (konuşma).',
        adimlar: [
          /* GPT T25 Kenan (B3 S3): sarı odada duyulan yalan bu ziyarette de Feride'nin aklında; söylememek onun seçimi */
          'Babam sofada, tespihi elinde. Nabi Bey\'in yalanı dilimin ucunda.',
          ['sai', 'Gerdanlığı annen görseydi… Gördü belki.', 'mahzun'],
          /* Diyalog T1 (3.6): bilgi dökümü kısaldı; amcazade bilgisi (anlatı A1) kalır, iç ses 1. bölümü yinelemez */
          /* Tur 27 (B3 diyalog 1): Sait kızına anlatırken "Süha Bey", "Perihan Hanım" der; "Annen" imzası bir kez */
          /* Tur 28 (B3 diyalog 1): "Rahmetli Süha Bey" diye okunmasın; özne Behiye */
          ['sai', 'Rahmetli annen Süha Bey\'i severdi. Perihan Hanım\'ın yetim amcazadesiydi, annenin sofrasında hep yeri vardı.', 'mahzun'], // Tur 29 (B3 anlatı 4)
          ['ic', 'Annem sevmiş. “Dayı” dediğim adamdan ben neden korkuyorum?', 'endiseli'],
          /* GPT T26 Süha (B3 A2, O2): ne kadarını söyleyeceğine oyun değil Feride karar verir; güven kendiliğinden değil,
             uyarının karşılığı. Sarı odanın kendisi söylenmez (romanda Sait tertibi çok sonra öğrenir). Gece babaya
             inen yol bu uyarıyı hatırlar (p3_v_baba 'uyardi'); Süha'nın kapısındaki satır yalnız doğruluğa bakar. */
          { soru: 'Tespih durdu. Sarı odayı ele vermeden ne kadarını söyleyeceğim?', secim: [
            { m: '“Yarın Kenan Bey için bir söz gelirse önce bana sorun.”', etki: { baba_guven: 2 }, bayrak: { p3_v_baba: 'uyardi' }, iz: 'Babanı yalandan önce uyardın. Nereden bildiğini bir gün soracak.', adimlar: [
              ['f', 'Babacığım, yarın Kenan Bey için bir söz gelirse önce bana sorun.', 'kararli'],
              ['sai', 'Sorarım kızım. Ama bunu kimden duyduğunu da bir gün soracağım.', 'ciddi'],
            ] },
            { m: 'Sakla. Annemi sor.', etki: { vakar: 1 }, bayrak: { p3_v_baba: 'sakladi' }, iz: 'Kulağının duyduğunu babana söylemedin. Ondan annenin hatırasını dinledin.', adimlar: [
              ['f', 'Annem onu nasıl severdi babacığım?', 'mahzun'],
              ['sai', 'Evladı gibi. Kapıdan girince önce ona şeker sorardı.', 'gulumser'],
              /* Tur 32 (B3 diyalog 3): hukuk dili yerine Feride'nin hesabı */
              ['ic', 'Söylemedim. Elimde yalnız kulağımın duyduğu var, Perihan Hanım\'ın elinde babam.', 'kararli'],
            ] },
          ] },
        ], bos: 'Babam tespihini çekiyor, dalgın.' },
      calibe_oda: { eylem: 'masaya bak', ipucu: 'Perihan Hanım\'ın odası boş, aynalı masası açıkta (eşya).',
        adimlar: [
          /* Tur 28 (GPT B3 S3-1): sarı odadan sonra ziyaret sabahki iftiraya bağlı kalır */
          'Perihan Hanım\'ın odası boş. Sabah babam Kenan\'ı soracak, hazırlığın izi belki bu aynalı masada.',
          'Birinin tıpası açık: gül yağı. Bütün oda onunla dolu.',
          { soru: 'Şişe elimde.', secim: [
            { m: 'Bileğine bir damla sür.', etki: { isyan: 1 }, bayrak: { p3_v_gul: 'surdu' }, adimlar: [
              ['ic', 'Onun kokusu bileğimde. Bu akşam kim yaklaşırsa önce Perihan Hanım\'ı duyacak.', 'tebessum'],
            ] },
            { m: 'Tıpasını kapat, yerine koy.', etki: { vakar: 1 }, bayrak: { p3_v_gul: 'kapadi' }, adimlar: [
              ['ic', 'Kokusunu öğrendim. Bir yerde duyarsam tanırım.', 'kararli'],
            ] },
          ] },
        ], bos: 'Oda boş, yalnız gül yağı kokusu kalmış.' },
    },
    bitis: [['an', 'Son arabanın tekerleri de kapıdan çekildi. Konak birden sessizleşti.']],
  };
  gezinme(VAKIT_AKSAMUSTU, GEZINME_AKSAMUSTU);
  // Plan modunda gündüz vakitlerinde (1: öğleden sonra, 6: akşamüstü) gezilen öteki yerlerin gündüz çeşidi.
  // Çeşidin kaydı/resmi yoksa motor (fonCoz) asıl fona düşer; resim bağlanınca kendiliğinden devreye girer.
  var GUNDUZ = ['fazila_oda', 'buyuk_salon', 'konak_sofa', 'mutfak', 'taslik', 'yemek_salonu', 'mabeyn_kapisi',
    'mabeyn_merdiven', 'selamlik_sofa', 'selamlik_kapisi', 'josephine_oda', 'calibe_oda'];

  window.BOLUMLER[103] = {
    no: 103,
    baslik: 'Yeni 3. Bölüm',
    ad: 'Gerdanlık',
    dogrusal: true,
    adaylar: ['mukaddem', 'suha', 'remzi'],
    ilkFaz: 'A',
    baslangic: 'fazila_oda',
    fazlar: { A: { mekanlar: ['fazila_oda', 'konak_sofa', 'buyuk_salon', 'mabeyn_kapisi', 'sari_oda', 'konak_bahce', 'suha_oda'], baglanti: {} } },
    gorevler: [],
    fon: function (S, mekanId) {
      if (mekanId === 'fazila_oda' && (S.gorev === 0 || S.gorev === 3)) return 'fazila_oda_gunduz';
      // gorev 6: törenden sonraki serbest vakit (akşamüstü); salon ve sofa hâlâ gün ışığında
      if (mekanId === 'buyuk_salon' && (S.gorev === 4 || S.gorev === 6)) return 'buyuk_salon_gunduz';
      if (mekanId === 'konak_sofa' && (S.gorev === 1 || S.gorev === 6)) return 'konak_sofa_gunduz';
      // Oynanış T1 (gorsel_t1_fon #6): tören ikindide; Kenan'la eşik sahnesi mabeyn kapısının gündüz resminde
      if (mekanId === 'mabeyn_kapisi' && S.gorev === 4) return 'mabeyn_kapisi_gunduz';
      // gorev 1: öğleden sonraki serbest vakit (mutfak); zemin kat da gün ışığında
      if ((mekanId === 'mutfak' || mekanId === 'taslik') && (S.gorev === 1 || S.gorev === 6)) return mekanId + '_gunduz';
      if ((S.gorev === 1 || S.gorev === 6) && GUNDUZ.indexOf(mekanId) >= 0) return mekanId + '_gunduz';
      return null;
    },

    acilis: [
      /* Bölüm açılışı: dün akşamdan kalan (rotaya göre), koridordaki ad, bugün gelen Madam, yarınki gerdanlık.
         Eski "Bugün konuşulan" kartının bilgisi (mürebbiye, yarın kutu) buraya taşındı. */
      { anlati: { gorsel: 'fazila_oda_gunduz', baslik: '3. Bölüm · Gerdanlık', satirlar: [
        /* Tur 18 ek (öneri 9): pusula/piyano ve koridordaki hece 2. bölümde oynandı ve ilk sahnede karşılanıyor;
           burada yinelenmez. Yeni kişi (Madam), zaman (yarın gerdanlık) ve hedef kalır. */
        /* Anlatı denetimi T1 (rehber §1): açılış anlatıcı sesinde; önceki gecenin sonunu karşılar */
        /* Anlatı T2 (b1_2_3 #13, doz B3 #1): önce önceki gecenin sonu; irade damgası yerine bölümün sorusu */
        (S) => (gorulen(S)
          ? 'Dün gece koridorda Feride bir hece duymuş, duyarken de görülmüştü. Bu konakta görülen, er geç sorulurdu.'
          /* Tur 27: 2. bölümde Kenan yolunda kapıyı dinlemeden geçen kız Perihan'ı görmedi (p2_koridor_kenan) */
          : (b(S).p2_koridor_kenan
            ? 'Dün gece Feride o aralık kapının önünden durmadan geçmişti. Ardından gelen Perihan Hanım ise orada bir ad duymuştu.'
            : 'Dün gece Feride, Perihan Hanım\'ı o kapıyı dinlerken görmüştü.')),
        /* GPT T25 Kenan (B3 S1): tek soru — taş takılmadan Perihan'ın hamlesi; Behiye adı bu sorunun dönüşü olur */
        /* Tur 27 (B3 sürük 1): soru taş takıldıktan sonra cevap bulduğu için "taş takılmadan" kalktı */
        /* Tur 28 (B3 anlatı 1): 2. bölümün "o adı kimseye söylemedi" hükmüyle çelişmez */
        /* Tur 33 (B3 sürük 1): iki fikir iki satıra bölündü */
        'Perihan Hanım duyduğunu söylemez, kullanırdı.',
        'Gerdanlık ertesi ikindi takılacaktı. Feride bu kez onun hamlesini önceden görmek istiyordu.',
      ] } },
    ],

    olaylar: [
      /* ---------------- 1. Sabah: koridorun bedeli ---------------- */
      {
        id: 'p3_sabah', mekan: 'fazila_oda', tetik: 'giris', kosul: (S) => S.gorev === 0, sahne: ['mehves'],
        adimlar: [
          /* Sürükleyicilik T1 (S4, B3-1): yatak/defter açılışı kalktı; ilk seçim öne */
          /* Tur 30 (B3 anlatı 2, sürük 1; ritim): görülen dalında aynı fikir üç kez söylenmez ve ilk seçim 10–11. satıra
             kayıyordu. Anlatıcı satırı yalnız görülmeyen dalda; Nimet'in koz bildirimi görülen dalda Perihan'dan sonra. */
          { eger: (S) => !gorulen(S), ise: [
            ['an', 'Sabah konak her zamankinden sessizdi.'],
          ] },
          /* Tur 27 (B3 sürük 2): 2. bölümün Kenan kancası ilk satırlarda karşılanır */
          { eger: muk, ise: [{ eger: gorulen, ise: [
            ['ic', 'Perihan Hanım “Ne gelirse önce bana” dedi. Kenan\'ın cevabı ondan önce elime geçmeli.', 'kararli'],
          ], degilse: [
            ['ic', 'Kenan\'ın cevabı gerdanlıkla gelirse kutuyu Perihan Hanım\'dan önce açmalıyım.', 'kararli'],
          ] }] },
          { eger: (S) => !gorulen(S), ise: [NIMET_KOZ] },

          { eger: gorulen, ise: [
            /* --- Perihan dün gece kapıda gördü: sabah kendisi gelir --- */
            { efekt: 'kapi_tikla' }, // Tur 30 (B3 ses 2): kapi_vur 13. bölümün üç ağır vuruşu; Perihan'ın tatlı sabahı iki hafif vuruş
            { muzik: 'perihan' }, // Tur 28 (B3 ses 1): ıhlamurlu sorgu ev temasında çalmaz
            ['an', 'Kapı vuruldu. Perihan Hanım bu odaya hep birini yollardı, o sabah ıhlamuru kendisi getirdi.'],
            { goster: ['calibe', 'sinsi'] },
            /* Tur 29 (B2 oynanış 10'a): 2. bölümde kilitlenen kapı karşılığını bulur (Perihan gece mumla gelmişti) */
            { eger: (S) => b(S).p2_v_oda === 'kilit', ise: [
              /* Tur 33 (B3 anlatı 1; sezon kapı arkı): odanın sürgüsü yok, kilitlenen 2. bölümdeki çekmecedir */
              ['calibe', 'Dün akşam çekmecen kilitliymiş kızım. Çekmecesini kilitleyen kız, gönlünü de kilitler.', 'soguk'],
            ] },
            ['calibe', 'Gece uyuyamadın. Koridorda bir şey mi duydun kızım?', 'soguk'],
            { soru: 'Fincan elimde, sıcak.', secim: [
              { m: '“Bir hece duydum efendim: ‘Be…’”', etki: { calibe_suphe: 1 }, bayrak: { p3_sabah: 'hece' }, iz: 'Heceyi söyledin. Perihan Hanım onu başka bir ada çekti.', adimlar: [
                ['f', 'Bir hece duydum efendim. “Be…”', 'kararli'],
                /* GPT T23 (Süha 2): hece Behiye'nin başı; Perihan adı başka yöne çeker */
                ['calibe', 'Be… “Bey” de öyle başlar kızım. Hekimler uykularında sayıklar.', 'sinsi'],
                ['ic', 'Gülümsedi. Fincanın sıcağı elimden çekildi.', 'endiseli'],
              ] },
              { m: '“Hiçbir şey. Su içmeye çıkmıştım.”', bayrak: { p3_sabah: 'yalan' }, iz: 'Duyduğunu sakladın. Perihan Hanım bu yalanı da biriktirdi.',adimlar: [
                ['f', 'Hiçbir şey efendim. Su içmeye çıkmıştım.', 'endiseli'],
                { eger: (S) => !!b(S).p_yalan && b(S).p2_yalan !== 'itiraf', ise: [
                  ['calibe', 'Bu ara çok şey arıyorsun kızım. Hatice\'yi, suyu… Bulamıyorsun da.', 'soguk'],
                  ['ic', 'Düğündeki yalanımı unutmamış. Bir kenara koymuş, biriktiriyor.', 'endiseli'],
                ], degilse: [
                  ['calibe', 'Su. Sürahin dopdolu ama.', 'soguk'],
                  ['ic', 'Sürahiye baktı. Ben bakmadım.', 'endiseli'],
                ] },
              ] },
              { m: '“Siz ne duydunuz efendim?”', etki: { vakar: 1, calibe_suphe: 1 }, bayrak: { p3_sabah: 'ayna' }, iz: 'Soruyu ona geri verdin. Bu kez cevabı o aradı.', adimlar: [
                ['f', 'Siz ne duydunuz efendim? Siz de oradaydınız.', 'kararli'],
                ['calibe', 'Ben mi? Bir hekimin dua ettiğini.', 'soguk'],
                ['ic', 'Fincanı bana uzattı; soruma dönmedi.', 'dusunceli'],
              ] },
            ] },
            { gizle: 'calibe' },
            { muzik: null },
            NIMET_KOZ, // Tur 30 (ritim): görülen dalında Perihan'ın sorgusundan sonra
          ], degilse: [
            /* --- Görülmedi: bilgi Perihan'da; Feride kendi yolundan arar --- */
            /* Tur 27 (B3 anlatı 1): açılış anlatısını yinelemez */
            { eger: (S) => !!b(S).p2_koridor_kenan, ise: [
              /* Tur 28: 2. bölümde Feride mumu kendi kapısında madalyonla karşıladı; Perihan sonra o kapıya yürüdü */
              ['ic', 'Dün gece mumu kendi kapımda karşıladım. Sonra o kapıya yürüdü, ne duydu?', 'endiseli'],
            ], degilse: [
              ['ic', 'Ne duyduysa sabaha kadar içinde tuttu. Kahvaltıdan önce öğrenmeliyim.', 'endiseli'],
            ] },
            { soru: 'Kime sorayım?', secim: [
              { m: 'Nimet\'e: “Perihan Hanım gece ne yaptı?”', etki: { mehves: 1 }, bayrak: { p3_sabah: 'nimet' }, iz: 'Nimet\'ten öğrendin: sır sarı odada.', adimlar: [
                ['mehves', 'Sabaha kadar lambası yandı. Sabah ilk iş sarı odayı açtırdı.', 'endiseli'],
                ['ic', 'Sarı odayı misafire açmazdı. Bu sabah neden açtırdı?', 'endiseli'],
              ] },
              { m: 'Şefik\'e. Odası o koridorda.', etki: { sefik: 1 }, bayrak: { p3_sabah: 'sefik' }, iz: 'Şefik gece bir erkeğin ağladığını duymuş.', adimlar: [
                { goster: ['sefik', 'korkmus'] },
                ['sefik', 'Gece biri ağladı abla, erkek sesiydi. Erkekler ağlar mı?', 'korkmus'],
                ['ic', 'Ağlayan Süha Bey miydi? Kime?', 'saskin'],
                { gizle: 'sefik' },
              ] },
              { m: 'Kimseye. Kahvaltıda Perihan Hanım\'ın yüzüne bak.', etki: { vakar: 1 }, bayrak: { p3_sabah: 'calibe' }, iz: 'Kimseye sormadın. Perihan Hanım\'ın öfkesini yüzünden okudun.', adimlar: [
                'Kahvaltıda Perihan Hanım bana iki kez gülümsedi. Süha Bey\'e hiç.',
                ['ic', 'Bir şey duydu. Bana değil, ona kızgın.', 'kararli'],
              ] },
            ] },
          ] },
          /* Ara sayfa (rehber §2): gündüz fonu göreve bağlı olduğu için görev önce yazılır */
          { gorev: 1 },
          { ara: { mekan: 'konak_sofa', yer: 'Sait Efendi\'nin konağı · öğle', satirlar: [
            'Öğle ezanı okunurken konağın kapısı yabancı birine açıldı.',
            'Yabancı mürebbiyeler konaklara bir dil getirirdi, çoğu zaman da dışarının havasını.',
          ] } },
        ],
      },

      /* ---------------- 2. Sofa: Madam Josephine ---------------- */
      {
        /* Anlatı denetimi T1 (mercek_tanitim T7): Madam anlatıcı satırından sonra, Şefik ilk sözünden önce görünür */
        id: 'p3_josephine', mekan: 'konak_sofa', tetik: 'giris', kosul: (S) => S.gorev === 1, sahne: ['calibe'],
        adimlar: [
          ['an', 'Yeni mürebbiye Beyoğlu\'ndan gelmişti; Paris\'ten taşıdığı sandığı kapıya zor sığdı.'],
          { goster: ['josephine', 'ana'] },
          /* Tur 27 (B3 diyalog 10'a): Madam'ın Türkçesi kırık */
          ['josephine', 'Bonjour… ben Josephine. Türkçe, {i}un peu{/i}.', 'gulumser'],
          /* Sürükleyicilik T1 (S5, B3-2): Perihan Madam'ı gözcü yapar; Madam'ın sonraki sorusu kanca kazanır */
          ['calibe', 'Bizde mürebbiye çok değişir Madam. Dersleri kapı açık yapın, geçerken duyayım.', 'soguk'],
          /* Tur 27 (B3 anlatı 5): Şefik anlatıcı girişiyle */
          ['an', 'Şefik merdivenden üçer üçer indi. Yeni geleni değil, sandıktaki boya kutusunu görmüştü.'],
          { goster: ['sefik', 'sevincli'] },
          { eger: (S) => b(S).p2_sefik === 'cizdi', ise: [
            { eger: (S) => b(S).p2_sefik_cizim === 'kus', ise: [
              ['sefik', 'Madam, bak! Lekeden kuş yaptık, ablamla.', 'sevincli'],
              ['josephine', 'Un oiseau! Kanatları kimin?', 'gulumser'],
            ], degilse: [{ eger: (S) => b(S).p2_sefik_cizim === 'gemi', ise: [
              ['sefik', 'Madam, bak! Lekeden gemi yaptık, ablamla.', 'sevincli'],
              ['josephine', 'Un bateau! Nereye gidiyor?', 'gulumser'],
            ], degilse: [
              ['sefik', 'Madam, bak! Lekeden ağaç yaptık, ablamla.', 'sevincli'],
              ['josephine', 'Un arbre! Kuşu nerede?', 'gulumser'],
            ] }] },
          ], degilse: [{ eger: (S) => b(S).p2_sefik === 'yarin', ise: [
            ['sefik', 'Madam, ablamla bugün yeni resim yapacağız. Siz de gelin!', 'sevincli'],
            ['josephine', 'Boyalarım sandıkta. Söz.', 'gulumser'],
          ], degilse: [
            ['sefik', 'Madam, benim resmim çerçevede! Lekesiyle!', 'sevincli'],
            ['calibe', 'Nazlı\'nın odasının karşısına astırdı. Ne tatlı.', 'sinsi'],
          ] }] },
          { soru: 'Madam sandığının yanında, ne yapacağını bilmiyor.', secim: [
            { m: '“Bienvenue, Madame. Odanız benimkinin yanında.”', etki: { josephine: 2, calibe_suphe: 1 }, bayrak: { p3_josephine: 'fransizca' }, adimlar: [
              ['f', 'Bienvenue, Madame. Odanız benimkinin yanında.', 'tebessum'],
              ['josephine', 'Merci! Ah, burada Fransızca konuşan var.', 'sevincli'],
              ['calibe', 'Var Madam. Çok var.', 'soguk'],
            ] },
            { m: 'Sandığın bir ucundan tut. “Şefik, öbür ucundan!”', etki: { josephine: 2, sefik: 1, itibar: -1 }, bayrak: { p3_josephine: 'sandik' }, adimlar: [
              'Sandık ağırdı. Şefik kendi ucunu bırakıp güldü, Madam da güldü.',
              ['calibe', 'Hanım kızı sandık taşımaz Feride.', 'soguk'],
              ['f', 'Taşıdı ama efendim.', 'tebessum'],
            ] },
            { m: '“Madam\'a bu evin kurallarını Perihan Hanım öğretsin.”', etki: { josephine: 1, calibe_suphe: 1 }, bayrak: { p3_josephine: 'uyari' }, adimlar: [
              ['f', 'Madam\'a bu evin kurallarını Perihan Hanım öğretsin. Kendisi koydu.', 'kararli'],
              ['calibe', 'Ben koydum, doğru. Herkes uyar.', 'soguk'],
              ['ic', 'Madam yüzüme baktı, sözün bir uyarı olduğunu o da anladı.', 'kararli'],
            ] },
          ] },
          ['an', 'Perihan Hanım eteğini toplayıp sofadan çekildi. Madam ardından baktı, sonra Feride\'ye eğildi.'],
          { gizle: 'calibe' },
          /* Diyalog T1 (3.8): Madam'ın sorusu cevapsız kalmaz; ittifakın ilk adımı sesli */
          ['josephine', '{i}Başka kim Fransızca bilir burada?{/i}', 'notr'],
          ['f', '{i}Süha Bey, Perihan Hanım. Bir de ben.{/i}', 'tebessum'],
          { gizle: 'josephine' }, { gizle: 'sefik' },
          /* Serbest vakit: akşama kadar evde dolaşılır; hedef rotaya göre oda ya da salon */
          { eger: muk, ise: [{ vakit: VAKIT_OGLE_MUK }], degilse: [{ vakit: VAKIT_OGLE_SUHA }] },
          { gorev: 2 },
        ],
      },

      /* ---------------- 3A. Akşam, Kenan yolu: karşı pencerede kandil ---------------- */
      {
        id: 'p3_aksam_muk', mekan: 'fazila_oda', tetik: 'giris', kosul: (S) => S.gorev === 2 && muk(S), sahne: [],
        adimlar: [
          ['an', 'İki konağı yalnız bir bahçe duvarı ayırıyordu. Lambalar yanınca pencereler birbirini görüyordu.'],
          { goster: ['komsu_konak', 'ana'] },
          'Üst katta bir pencere yandı. Kandilin önünde bir gölge, elinde kitap.',
          /* Oynanış T1 (B5): keşif; p3_k_pencere 4. bölümde arabadaki kitapta okunur */
          { kesif: { x: 77, y: 17, w: 16, h: 30, ad: 'Karşı pencere', adimlar: [
            'Gölge sayfa çeviriyor, her sayfada başını kaldırıp buraya bakıyor.',
            ['ic', 'Okumuyor. Bekliyor.', 'utanmis'],
            { bayrak: { p3_k_pencere: true } },
          ] } },
          /* Serbest vakitte Şefik'le cevap yollandıysa kandil o cevabın devamıdır */
          { eger: (S) => b(S).p3_v_bahce === 'yanar', ise: [
            ['ic', 'Şefik\'e “yanar” demiştim. Sözümü tutma vakti.', 'utanmis'],
          ], degilse: [{ eger: (S) => b(S).p3_v_bahce === 'bakarsa', ise: [
            ['ic', '“Bakarsa görür” demiştim. Baktı işte.', 'utanmis'],
          ], degilse: [{ eger: (S) => b(S).p2_satir === 'soru', ise: [
            /* GPT T25 Kenan (B3 A1): oyuncunun ara sayfada gördüğü Feride'ye sızmaz; yalnız kendi sorusunu bilir */
            ['ic', 'Kalemi hâlâ elinde mi?', 'utanmis'],
          ], degilse: [
            ['ic', 'Bir yıl o pencereye bakmadım. Bakmamayı öğrenmiştim.', 'mahzun'],
          ] }] }] },
          { soru: 'Kandilim masamda.', secim: [
            { m: 'Kandili pencereye koy.', etki: { mukaddem: 6 }, bayrak: { p3_aksam: 'kandil', p3_aksam_tanik: true }, adimlar: [
              { efekt: 'kandil' },
              'Kandili pencerenin içine koydum. Karşıdaki ışık titredi, sonra kıpırdamadan yandı.',
              ['ic', 'Bu kez kâğıt beklememe gerek kalmadı.', 'tebessum'],
              /* Doğrulama gece (B3 #5, 13 satır): "Bir süre öyle kaldık" satırı bu satıra katıldı */
              /* Tur 31: ışık alışverişi tek kez anlatılır (satır kaldırıldı) */
              /* GPT T29 (S3-1): öğretilmemiş bir kelime kesin haber gibi okunmaz; sezgi */
              /* Tur 31: yinelenen iç ses kaldırıldı */
              { cizim: 'an_kandil' },
            ] },
            { m: 'Perdeyi yarıya çek. Gölgen görünsün.', etki: { mukaddem: 5 }, bayrak: { p3_aksam: 'golge' }, adimlar: [
              'Perdeyi yarıya çektim. Kandilin önünden bir kez, yavaşça geçtim.',
              'Karşıdaki gölge kitabı bıraktı, pencereye yaklaştı.',
              ['ic', 'Yüzümü görmedi. Gördüğünü sandı, o da yeter.', 'utanmis'],
            ] },
            { m: 'Kandili söndür. Karanlıktan bak.', etki: { mukaddem: 3 }, bayrak: { p3_aksam: 'karanlik' }, adimlar: [
              'Kandili söndürdüm. Karşıdaki ışık uzun süre bekledi.',
              ['ic', 'Beni göremiyor, ben onu görüyorum. Haksızlık bu; hoşuma gidiyor.', 'tebessum'],
            ] },
            /* GPT T29 (O3-1): yakınlaşmayan açık çıkış. p3_aksam 'karanlik' (kandil yok; 5. bölüm "ben söndürmüştüm" okur),
               ayrı sınır bayrağı p3_kenan_sinir (4. bölüm kandil sorusu açılmaz) */
            { m: 'Bu gece bakma. Perdeyi kapat.', bayrak: { p3_aksam: 'karanlik', p3_kenan_sinir: true }, iz: 'Perdeyi kapattın, o gece pencereye cevap vermedin.', adimlar: [
              'Perdeyi kapattım, masaya döndüm. Bu gece cevap yok.',
            ] },
          ] },
          { gizle: 'komsu_konak' },
          /* Tur 32 (B3 anlatı 4): taş imgesi azaldı */
          'Uyumadan önce boynuma dokundum. Yarın bu boyna Münevver Hanım\'ın eli değecek.',
          /* Gün geçişi: giyinme sahnesinin başındaki "Gerdanlık Günü" anlatısı ("Gerdanlık günü" kartının yerine) */
          { gorev: 3 }, { mekan: 'fazila_oda' },
        ],
      },

      /* ---------------- 3B. Akşam, Süha yolu: yanlış nota ---------------- */
      {
        id: 'p3_aksam_suha', mekan: 'buyuk_salon', tetik: 'giris', kosul: (S) => S.gorev === 2 && !muk(S), sahne: [],
        adimlar: [
          { efekt: 'piyano_tus' }, // Tur 28 (B3 ses 2): çalan Süha; piyano sesi tuşla
          'Akşam, salondan piyano sesi. Konakta benden başka çalan yok sanırdım.',
          ['an', 'Süha Bey bildiği şeyleri hep kimse yokken yapardı.'],
          { goster: ['suha', 'notr'] },
          /* Oynanış T1 (B5): keşif; p3_k_seker törende Süha'nın satırında okunur */
          { kesif: { x: 16, y: 47, w: 9, h: 8, ad: 'Nota sehpası', adimlar: [
            'Nota sehpasında açılmamış bir menekşe şekeri. Kâğıdında benim adımın harfi var.',
            ['ic', 'Benim için bırakmış. Dokunmadım.', 'kararli'],
            { bayrak: { p3_k_seker: true } },
          ] } },
          { eger: (S) => b(S).p2_piyano === 'anne', ise: [
            'Tek parmakla annemin şarkısını arıyor.',
          ], degilse: [{ eger: (S) => b(S).p2_piyano === 'romans', ise: [
            'Tek parmakla dün çaldığım romansı arıyor.',
          ], degilse: [
            'Tek parmakla dünkü valsi arıyor, bulamıyor.',
          ] }] },
          /* Tur 28b (kök 2): koku yalnız koklayan kızda kalır; yaprağı alıp çekilen ya da avucu geri çeviren için değil */
          { eger: (S) => b(S).p3_v_bahce === 'kokladi', ise: [
            ['ic', 'Öğleden kalma limon kokusu hâlâ üstünde. Bende de.', 'endiseli'],
          ], degilse: [{ eger: (S) => b(S).p3_v_bahce === 'yaprak' || b(S).p3_v_bahce === 'ret', ise: [
            ['ic', 'Öğleden kalma limon kokusu hâlâ üstünde. Ben avucuna eğilmedim.', 'kararli'],
          ] }] },
          { eger: (S) => !!b(S).p2_dinledi, ise: [
            ['suha', 'Dün gece tahta gıcırdadı. Konağın tahtaları bile dedikoducu.', 'alayci'],
          ], degilse: [
            ['suha', 'Dün gece kapımın önünden koşar adım geçtiniz. Neden kaçtınız?', 'alayci'],
          ] },
          { efekt: 'piyano_yanlis' }, // yanlış nota duyulsun
          { soru: 'Yanlış notaya bastı. Bilerek mi?', secim: [
            { m: '“Tahtalar dedikoducuysa siz fısıltıyla konuşun.”', kosul: (S) => !!b(S).p2_dinledi, etki: { suha: 6 }, bayrak: { p3_aksam: 'igne' }, adimlar: [
              ['f', 'Tahtalar dedikoducuysa siz fısıltıyla konuşun.', 'kararli'],
              ['suha', 'Fısıltıyla konuştum. Siz yine duydunuz.', 'soguk'],
              ['ic', 'Bu kez gülümsemedi.', 'endiseli'],
            ] },
            { m: '“Kaçmadım. Sizden kaçılacak ne var?”', kosul: (S) => !b(S).p2_dinledi, etki: { suha: 6 }, bayrak: { p3_aksam: 'igne' }, adimlar: [
              ['f', 'Kaçmadım. Sizden kaçılacak ne var?', 'kararli'],
              ['suha', 'Çok şey. Bilmemeniz iyi.', 'soguk'],
            ] },
            /* Tur 32 (B3 sürük 3): "doğru" ödülün görünür bedeli; merdivendeki etek (Perihan'ın kuşkusu) */
            { m: 'Yanına otur. Doğru notayı çal.', etki: { suha: 8, calibe_suphe: 1 }, bayrak: { p3_aksam: 'piyano', p3_aksam_tanik: true }, adimlar: [
              { muzik: 'piyano' }, // Tur 27 (B3 ses 5): piyano çalınırken piyano
              /* Doğrulama gece (B3 #5, 13 satır): iki anlatı satırı bire indi */
              'Taburenin ucuna oturup doğru notaya bastım. Ondan limon kolonyası kokuyor.',
              /* Tur 27b: bölümdeki tek alaysız gülümseme (suha_gulumser nadir) */
              ['suha', 'Demek buymuş. Yıllardır yanlış çalıyorum.', 'gulumser'],
              ['ic', 'Notayı mı diyor, başka bir şeyi mi?', 'endiseli'],
              { efekt: 'piyano_tus' },
              'Ezgiyi baştan aldık, o sol eliyle, ben sağımla. Bu kez ikimiz de yanılmadık.',
              /* Doğrulama gece (B3): "yarın akşam" sözü ertesi akşam karşılanmıyordu; söz tarihsiz kaldı */
              ['suha', 'İkinci kıtayı artık yalnız çalmayacağım.', 'soguk'],
              'Merdivenin başında bir etek hışırdadı, sonra uzaklaştı.',
            ] },
            { m: 'İyi geceler de, çık.', etki: { suha: -3 }, bayrak: { p3_aksam: 'gitti' }, iz: 'Oyununa oturmadın. Süha Bey ezgiyi yalnız bitirdi.', adimlar: [
              { eger: (S) => b(S).p2_hitap === 'bey', ise: [
                ['f', 'İyi geceler Süha Bey.', 'kararli'],
              ], degilse: [
                ['f', 'İyi geceler dayı bey. Şarkının sonu sizde kalsın.', 'kararli'],
              ] },
              { muzik: 'piyano' }, // GPT T29 (SES3-1): doğru icra seste ayrışır (ayrı yanlış/doğru ezgi kaydı üretimde)
              { efekt: 'piyano_tus' },
              'Arkamdan şarkıyı baştan çaldı. Bu kez doğru.',
              ['ic', 'Doğrusunu biliyormuş. Beni durdurmak için yanlış çalmış.', 'ofkeli'],
            ] },
          ] },
          { gizle: 'suha' },
/* Tur 28 (GPT B3 A3-2): çalmadan çıkan kızın bedensel hatırası çalan dalınkini ödünç almaz */
          { eger: (S) => b(S).p3_aksam === 'piyano', ise: [
            'Odama çıkarken ezgi hâlâ parmaklarımdaydı. Merdivende kimseyle karşılaşmadım, yine de ardıma baktım.',
          ], degilse: [
            'Odama çıkarken bastığı yanlış nota hâlâ kulağımdaydı.',
          ] },
          /* Gün geçişi: giyinme sahnesinin başındaki "Gerdanlık Günü" anlatısı ("Gerdanlık günü" kartının yerine) */
          { gorev: 3 }, { mekan: 'fazila_oda' },
        ],
      },

      /* ---------------- 4. Giyinme ve annenin madalyonu ---------------- */
      {
        id: 'p3_giyin', mekan: 'fazila_oda', tetik: 'giris', kosul: (S) => S.gorev === 3, sahne: [],
        adimlar: [
          /* Olay anlatısı: zaman atlaması (ertesi gün) ve Münevver Hanım'ın ilk görünüşünden önce tanıtımı */
          { anlati: { gorsel: 'buyuk_salon_gunduz', baslik: 'Gerdanlık Günü', satirlar: [
            /* Tur 18 ek (öneri 9): ikinci bir bölüm başı gibi uzamasın; yalnız zaman, yeni kişi ve anın ağırlığı */
            /* Anlatı denetimi T1: anlatıcı sesinde; töreni önceden anlatmaz (ara sayfa yerine tam ekran: gün değişimi) */
            'Ertesi sabah büyük salona minderler dizildi, konu komşuya ikindi daveti gitti.',
            /* Tur 27 (B3 anlatı 3): satır başına bir bilgi; konağın yerini akşam anlatısı zaten verir */
            'Gerdanlığı oğlan tarafının en büyük hanımı takardı. Bugün o sıra Münevver Hanım’ındı.',
            /* Doğrulama gece (B3 #5, 13 satır): giydiren satırı anlatının son satırına katıldı */
            /* Tur 29 (B3 anlatı 3): satır başına bir cümle */
            'Gelin olacak kızı kimin giydireceğine bile konakta Perihan Hanım karar verirdi.',
          ] } },
          { islev: (S) => { S.bayrak.p3_onceki = S.giyili; } },
          { eger: (S) => b(S).p3_giydiren === 'reftar', ise: [
            { goster: ['reftar', 'somurtkan'] },
            ['reftar', 'Perihan Hanım beni yolladı küçük hanım. Nimet mutfakta.', 'somurtkan'],
            ['ic', 'Hatice tarağı vurdukça aynadan ona baktım. Burada söyleyeceğim her şeyi Perihan Hanım duyacaktı.', 'kararli'],
          ], degilse: [
            { goster: ['mehves', 'ana'] },
            { eger: (S) => b(S).p2_gerdanlik === 'bilmiyorum', ise: [
              ['mehves', '“Bilmiyorum” demiştiniz. Bugün biliyor musunuz?', 'endiseli'],
              /* GPT T24b Süha (B3 10'a-1): duygusal soru kıyafet ekranında kaybolmaz; Feride kendi çizgisinde cevap verir */
              ['f', 'Hâlâ bilmiyorum Nimet. Salonda göreceğiz.', 'kararli'],
            ], degilse: [{ eger: (S) => b(S).p2_gerdanlik === 'soz', ise: [
              ['mehves', 'Gerdanlık bir taş demiştiniz. Taş bugün geliyor, söz de onunla.', 'kararli'],
            ], degilse: [
              ['mehves', 'Dün geceki gibi yüzüme bir bakın, küçük hanım.', 'ana'],
            ] }] },
          ] },
          { giyin: ['nisan_sade', 'nisan_gosterisli', 'nisan_yadigar'], soru: 'Gerdanlığın altına ne giyeceğim?' },
          /* Oynanış T1 (B4): seçilen kıyafete giydirenin tepkisi (Hatice ya da Nimet) */
          { eger: (S) => b(S).p3_giydiren === 'reftar', ise: [
            { eger: (S) => S.giyili === 'nisan_yadigar', ise: [
              ['reftar', 'Merhumenin elbisesi. Hanımım ne der bilmem küçük hanım, sonra der.', 'somurtkan'], // Tur 29 (B3 diyalog 10'a): Hatice'nin imzası
            ], degilse: [{ eger: (S) => S.giyili === 'nisan_sade', ise: [
              ['reftar', 'Fildişi. Taş daha çok parlasın diye, akıllıca.', 'somurtkan'],
            ], degilse: [
              ['reftar', 'Pembe tafta. Salonda herkes size bakacak, hanımım da.', 'somurtkan'],
            ] }] },
          ], degilse: [
            { eger: (S) => S.giyili === 'nisan_yadigar', ise: [
              ['mehves', 'Annenizin mavisi… Düğmelerini iliklerken ellerim titredi.', 'mahzun'],
            ], degilse: [{ eger: (S) => S.giyili === 'nisan_sade', ise: [
              ['mehves', 'Sade olsun hanımcığım. Bugün sizin yerinize gerdanlık konuşsun.', 'kararli'],
            ], degilse: [
              ['mehves', 'Pembe tafta! Bugün yüzünüz de gülsün, eteğiniz de.', 'ana'],
            ] }] },
          ] },
          { eger: (S) => S.giyili === 'nisan_yadigar', ise: [
            ['ic', 'Annemin mavisi. Münevver Hanım bu elbiseyi tanır, annemle aynı sofrada oturdular.', 'mahzun'],
          ], degilse: [{ eger: (S) => S.giyili === 'nisan_sade', ise: [
            ['ic', 'Fildişi. Bu yakada gerdanlıktan başka bir şey parlamasın.', 'kararli'],
          ], degilse: [
            ['ic', 'Pembe tafta. Bugün herkes baksın, bakmak isteyen de istemeyen de.', 'kararli'],
          ] }] },
          /* Anlatı T2 (b1_2_3 B3 b3): 2. bölümde yasemin madalyona konduysa burada görünür */
          { eger: (S) => b(S).p2_yasemin_yer === 'madalyon', ise: [
            'Annemin madalyonu masada, kapağın altında hâlâ yasemin. Gerdanlık takılınca boynumda yer kalmayacak.',
          ], degilse: [{ eger: (S) => b(S).p2_koridor_hece === 'be', ise: [
            /* GPT T24b Süha (B2 10'a-3): koridordaki hece annenin eşyasında karşılık bulur */
            'Madalyonun kapağındaki B, dün geceki heceyle aynı harf. Gerdanlık takılınca boynumda yer kalmayacak.',
          ], degilse: [
            'Annemin madalyonu masada. Gerdanlık takılınca boynumda yer kalmayacak.',
          ] }] },
          { soru: 'Madalyon ne olacak?', secim: [
            /* Tur 28: madalyon_hal an resmi çeşidini seçer (ortak istek; 'yok' da _sakli gibi madalyonsuz) */
            { m: 'Kalsın. İkisi birlikte dursun.', etki: { vakar: 1 }, bayrak: { p3_madalyon: 'ikisi', madalyon_hal: 'acik' }, adimlar: [
              ['ic', 'Annemin madalyonu da kalsın.', 'kararli'],
            ] },
            { m: 'Yakamın içine sakla.', bayrak: { p3_madalyon: 'gizli', madalyon_hal: 'sakli' }, adimlar: [
              ['ic', 'Zincir tenimde. Gerdanlık üstünde olacak, annem altında.', 'mahzun'],
            ] },
            /* GPT T29 (O3-2): kıyafet kararı madalyon kararını gizlemez; mavi elbisenin 'yok' resmi üretimde */
            { m: 'Şefik\'e ver. Bugün o taşısın.', etki: { sefik: 2 }, bayrak: { p3_madalyon: 'sefik', madalyon_hal: 'yok' }, adimlar: [
              { goster: ['sefik', 'sevincli'] },
              ['sefik', 'Annemin mi? Yumruğumda tutarım abla, kimse görmez.', 'tebessum'],
              { gizle: 'sefik' },
            ] },
          ] },
          { gizle: 'reftar' }, { gizle: 'mehves' },
          { efekt: 'adim' },
          'Merdivenden inerken salonun uğultusu yükseldi.',
          { gorev: 4 },
          { ara: { mekan: 'buyuk_salon', yer: 'Büyük salon · ikindi', satirlar: [
            'İkindiden sonra salon doldu. Hanımlar gerdanlığı görmek için beklerken Perihan Hanım onların yüzlerine bakıyordu.',
            /* Tur 27 (B3 sürük 10'a): Perihan'ın alıcısı ortada kurulur; bahçedeki Remzi ani bir yüz olmaz */
            'Pencerenin önünden bir atlı geçti. Perihan Hanım başını çevirip uzun uzun baktı.',
          ] } },
        ],
      },

      /* ---------------- 5. Tören: kutu, kilit, gerdanlık ---------------- */
      {
        /* Anlatı denetimi T1 (mercek_tanitim T8): Münevver Hanım anlatıcı satırından sonra görünür */
        id: 'p3_toren', mekan: 'buyuk_salon', tetik: 'giris', kosul: (S) => S.gorev === 4, sahne: ['davetliler', 'calibe'],
        adimlar: [
          /* Tur 27 (B1 oynanış 2): düğünde dedikoduyu yüzlerine gülümseyerek veren kızın karşılığı */
          { eger: (S) => b(S).p1_v_sofa === 'gulumse', ise: [
            ['an', 'Düğünde Feride\'nin gülümsediği iki hanım da salondaydı. Bu kez yelpazelerini ilk onlar indirdi.'],
          ] },
          ['an', 'Münevver Hanım başköşeden Feride\'ye elini uzattı; yanındaki yeri boş bırakmıştı.'],
          { goster: ['munevver', 'gulumser'] },
          ['munevver', 'Benim güzel kızım. Gel yanıma.', 'gulumser'],
          { eger: (S) => b(S).p3_madalyon === 'ikisi', ise: [
            'Münevver Hanım\'ın gözü göğsümdeki B harfine düştü.',
            ['munevver', 'Behiye\'nin madalyonu. Bugün o da burada olsun.', 'dolu'],
          ] },
          { eger: (S) => b(S).p3_madalyon === 'sefik', ise: [
            'Şefik kapının yanında, yumruğunu göğsüne bastırmış. Annemin madalyonu orada.',
          ] },

          { eger: muk, ise: [
            /* ===== Kenan yolu: mabeyn kapısında bir dakika ===== */
            ['munevver', 'Kutuyu oğlum taşıdı, mabeyn kapısında bekliyor. Git, kendi elinle al.', 'gulumser'],
            { eger: gorulen, ise: [
              ['calibe', 'Hanımefendi, gece koridorda gezen kız gündüz mabeyn kapısına gitmesin.', 'sinsi'],
            ], degilse: [
              ['calibe', 'Hanımefendi, gelin olacak kız mabeyn kapısına gitmez. Âdet değil.', 'soguk'],
            ] },
            ['munevver', 'Âdeti ben bilirim. Yüz yıllık âdet bir dakikaya darılmaz.', 'kararli'],
            { soru: 'Bütün yelpazeler durdu.', secim: [
              { m: '“Hanımefendi istedi. Giderim.”', etki: { mukaddem: 4, calibe_suphe: 1 }, bayrak: { p3_kapi: 'gitti' }, iz: 'Münevver Hanım\'ın iznine yaslandın, salon dakikayı saydı.', adimlar: [
                ['f', 'Hanımefendi istedi efendim. Giderim.', 'kararli'],
                ['ic', 'Bir dakika. Bütün salon saymaya başladı.', 'endiseli'],
              ] },
              /* Oynanış T1 (B1): kozun kilidi görünür; harcanan koz tükenir (4. bölüm kahvesinde artık yok) */
              { m: '“Gece açılan kapılar var. Gündüz bir dakika ne olur?”', kosul: kapiKoz, kozGerek: [KAPI, KOZ], kilitGoster: kapiKilit, etki: { mukaddem: 4, calibe_suphe: 2 }, bayrak: { p3_kapi: 'koz', p3_koz_toren: true }, iz: 'Kozunu bütün salonun önünde oynadın, Perihan Hanım sustu. Bildiğin sende, ama artık gizli silah değil.', adimlar: [
                ['f', 'Gece açılan kapılar var efendim. Gündüz bir dakika açılsa ne olur?', 'kararli'],
                'Kapıdaki Hatice\'nin tepsisi sallandı. Perihan Hanım\'ın parmakları yelpazenin sapını sıktı.',
                KAPI_YAK,
                NIMET_RISK,
              ] },
              kapiIkiz('“Gece açılan kapılar var. Gündüz bir dakika ne olur?”'),
              { m: '“Yüzükler bile el değiştiriyor. Bir kutu ne ki?”', kosul: yuzukKoz, kozGerek: YUZUK, kilitGoster: yuzukKilit, etki: { mukaddem: 4, calibe_suphe: 2 }, bayrak: { p3_kapi: 'koz', p3_koz_toren: true }, iz: 'Yüzüğü bütün salonun önünde andın, Hatice elini sakladı. Sır artık salonun.', adimlar: [
                ['f', 'Yüzükler bile el değiştiriyor efendim. Bir kutu ne ki?', 'kararli'],
                'Hatice elini önlüğünün altına sakladı. Perihan Hanım gülümsemeyi bıraktı.',
                { kozYak: YUZUK },
              ] },
              { m: '“Nimet getirsin efendim.”', etki: { itibar: 2 }, bayrak: { p3_kapi: 'nimet' }, iz: 'Âdeti korudun. Dakika Kenan\'da kaldı.', adimlar: [
                ['f', 'Nimet getirsin efendim. Âdet bugün benim yüzümden bozulmasın.', 'kararli'],
                /* Diyalog T1 (3.10): Feride utandığı için değil, âdet için çekildi; dakika Kenan'da bekler */
                ['munevver', 'Peki kızım. O bir dakika oğlumda kalsın, bekler.', 'gulumser'],
              ] },
            ] },

            { eger: (S) => b(S).p3_kapi !== 'nimet', ise: [
              /* Anlatı denetimi T1 (T9, Y2): ara sayfa kişileri temizler; Kenan anlatıcı satırından sonra görünür */
              { muzik: 'romantik' }, // Tur 27 (B3 ses 2): Kenan'la eşik vals'ta kalmaz
              { ara: { mekan: 'mabeyn_kapisi', yer: 'Mabeyn kapısı · o sırada', satirlar: [
                'Mabeyn kapısı haremle selamlığın arasındaydı. Feride oraya Münevver Hanım\'ın izniyle, dadısının gözü önünde gitti.',
              ] } },
              ['an', 'Kenan eşiğin öbür yanında bekliyordu. Düğünde aralarında dört basamak vardı, bugün tek bir eşik.'],
              { goster: ['mukaddem', 'kutu'] },
              { eger: (S) => b(S).p3_giydiren === 'reftar', ise: [
                'Nimet mutfaktan kaçıp gelmiş, üç adım arkamda.',
              ], degilse: [
                'Nimet üç adım arkamda.',
              ] },
              ['mukaddem', 'Feride Hanım. Annem bir dakika dedi, saatime bakıyorum.', 'kutu'],
              { eger: (S) => b(S).p2_selam_haberi, ise: [
                ['f', 'Babam merdivendeki selamımızı sordu. Ben de sizi bir yıl sonra gördüğümü söyledim.', 'utanmis'],
                { etki: { mukaddem: 6 } },
              ] },
              { eger: (S) => b(S).p2_soz_haberi, ise: [
                ['f', 'Dün sofrada evlilik sözü açıldı. Benim sözüm verildi, dedim.', 'kararli'],
                { etki: { mukaddem: 4 } },
              ] },
              /* Tur 27 (B1 oynanış 2): merdivendeki gülümseme iki bölüm sonra okunur */
              { eger: (S) => b(S).p_bakis === 'guldu', ise: [
                ['mukaddem', 'Merdivende gülümsemiştiniz. İki gündür o basamaktayım.', 'gulumser'],
              ] },
              { soru: 'Kutuyu bana uzatıyor.', secim: [
                /* GPT T29 (D3-1): etiket yakınlığın derecesini söyler; teması uzatmadan almak ayrı şık (aynı p3_kutu, yeni bayrak) */
                { m: 'Kutuyu elinden ağır ağır al.', etki: { mukaddem: 7 }, bayrak: { p3_kutu: 'el' }, adimlar: [
                  'Kutu ağırdı. Parmaklarımız kadifenin altında değdi, ikimiz de çekmedik.',
                ] },
                { m: 'Kutuyu al, elini geri çek.', etki: { mukaddem: 5 }, bayrak: { p3_kutu: 'el', p3_kutu_cek: true }, adimlar: [
                  'Kutuyu aldım. Parmaklarımız değince elimi geri çektim.',
                ] },
                { m: '“Eşiğe koyun. Ben alırım.”', etki: { mukaddem: 5 }, bayrak: { p3_kutu: 'esik' }, adimlar: [
                  ['f', 'Eşiğe koyun. Ben alırım.', 'kararli'],
                  'Diz çöküp kutuyu eşiğe koydu. Ben de karşısına çöktüm.',
                  ['mukaddem', 'Âdete uyduk. Eşiği geçmedik.', 'gulumser'],
                ] },
                /* Oynanış T1 (B3): mesafeli seçenek gönülden düşer; Kenan'ın tepkisi aynı anda görünür */
                { m: '“Nimet, al.”', etki: { mukaddem: -3 }, bayrak: { p3_kutu: 'nimet' }, iz: 'Kutuyu ona değil Nimet\'e aldırdın. Kenan elini boş indirdi.', adimlar: [
                  /* Tur 27 (GPT B3-D2): bakışı söylemek meşru; mesafe Feride'nin hareketinde korunur */
                  'Nimet kutuyu aldı. Kenan Bey eğildi.',
                  /* Tur 27b: Kenan'ın kırgın yüzü; ret dalında onun tepkisi görünür, Feride'nin mesafesi korunur */
                  { goster: ['mukaddem', 'mahzun'] },
                  ['ic', 'Gözü kutunun peşinden gitmedi. Bende kaldı.', 'mahzun'],
                  'Boş elini arkasına sakladı. Ben kapıya baktım.',
                  /* GPT T29 (A3-1): kapı ortak konuşmadan önce kapanmaz; tek kapatma konuşmadan sonra */
                  'Nimet kutuyu bana uzattı. Salona dönerken onun bir adım arkasında yürüdüm.',
                ] },
              ] },
              { eger: (S) => b(S).p3_kutu !== 'nimet', ise: [{ goster: ['mukaddem', 'ana'] }] },
              'Kapağı araladım. Kadifenin üstünde katlı bir sayfa.',
              { goster: ['mukaddem_not', 'ana'] },
              SAYFA,
              { gizle: 'mukaddem_not' },
              { soru: 'Bir dakika. Belki daha az.', secim: [
                { m: '“Gerdanlığın kilidini kim seçti?”', etki: { mukaddem: 6 }, bayrak: { p3_soz: 'kilit' }, adimlar: [
                  ['f', 'Gerdanlığın kilidini kim seçti?', 'tebessum'],
                  ['mukaddem', 'Ben. Kolay açılmasın diye.', 'gulumser'],
                  ['ic', 'Kilidi kendi seçmiş. Bir daha kapatıp açmayı denemiş midir?', 'utanmis'],
                ] },
                /* Tur 33 (B3 anlatı 4): parmakları değen kız da adını söyleyebilir; romantik basamak tersine işlemez */
                { m: '“Kenan.”', etki: { mukaddem: 8 }, bayrak: { p3_soz: 'ad' }, adimlar: [
                  ['f', 'Kenan.', 'utanmis'],
                  { eger: (S) => b(S).p3_kutu === 'el' && !b(S).p3_kutu_cek, ise: [
                    'Parmaklarımız hâlâ kadifenin altındaydı. “Bey” yere düştü.',
                  ], degilse: [
                    'Yalnız adını söyledim. “Bey” yere düştü; ikimiz de ona bakmadık.',
                  ] },
                  /* Diyalog T1 (D8, b 10'a): çekingen ama ilk kez sahiplenen */
                  ['mukaddem', 'Bir daha söylemeyin, duyarlar. Ben zaten ezberledim.', 'gulumser'],
                ] },
                { m: '“Sayfayı okudum. Cevabı yarın kitapta.”', etki: { mukaddem: 5 }, bayrak: { p3_soz: 'kitap' }, adimlar: [
                  ['f', 'Sayfayı okudum. Cevabı yarın kitapta.', 'tebessum'],
                  ['mukaddem', 'Yarın. Bir yıldan kısa, dayanırım.', 'gulumser'],
                ] },
                { m: 'Bir şey deme. Kapıyı yavaşça kapat.', bayrak: { p3_soz: 'kapadi' }, adimlar: [
                  'Kapıyı kapattım. Öbür yanında uzun bir nefes bırakıldı.',
                ] },
              ] },
              { eger: (S) => b(S).p3_kutu === 'nimet' && b(S).p3_soz !== 'kapadi', ise: [
                'Nimet\'le salona dönerken kapıyı arkamızdan kapattım.',
              ] },
              /* Tur 27 (GPT B3-O1/G1): kabul resmi ret ödülü olmaz; eşik ve dadı dallarının kendi anı (resmi gelince) */
              { eger: (S) => b(S).p3_kutu === 'el', ise: [{ eger: (S) => !b(S).p3_kutu_cek, ise: [{ cizim: 'an_mabeyn' }] }], degilse: [
                { eger: (S) => b(S).p3_kutu === 'esik', ise: [{ cizim: 'an_mabeyn_esik' }], degilse: [{ cizim: 'an_mabeyn_nimet' }] },
              ] },
              /* Anlatı T2 (b1_2_3 #9): flört hışırtıyla kesilmez; tanıklık sarı odada Perihan'ın ağzından sürpriz olarak gelir */
              { eger: (S) => b(S).p3_kutu !== 'nimet', ise: [
                { bayrak: { p3_mabeyn_tanik: true } },
              ] },
              { gizle: 'mukaddem' },
              /* Tur 27 (B3 anlatı 10'a): "öte yanda"; sırrı çözmez, sarı odadaki ifşanın altına bomba koyar */
              { ara: { yer: 'Aynı saatlerde · selamlık', satirlar: [
                'Selamlıkta Nabi Bey, Sait Efendi\'nin her sabah uğradığı Hacı Kâmil\'in kahvesinden yeni dönmüştü. Ağzında taze bir laf vardı.',
              ] } },
              { muzik: 'vals' },
              { ara: { mekan: 'buyuk_salon', yer: 'Büyük salon', satirlar: [
                'Feride salona döndüğünde yelpazeler yeniden açıldı. Kimse bir şey sormadı ama herkes baktı.',
              ] } },
              { goster: ['davetliler', 'ana'] }, { goster: ['munevver', 'gulumser'] },
            ], degilse: [
              'Nimet kutuyla döndü, kulağıma eğildi.',
              ['mehves', 'Kapağın altında bir kâğıt var hanımcığım. Kimse görmedi, ben gördüm.', 'kararli'],
              { goster: ['mukaddem_not', 'ana'] },
              SAYFA,
              { gizle: 'mukaddem_not' },
              { soru: 'Nimet cevap bekliyor.', secim: [
                { m: '“Kâhyaya söyle: ‘Okundu.’”', etki: { mukaddem: 4 }, bayrak: { p3_soz: 'okundu' }, adimlar: [
                  ['mehves', 'Tek kelime. Ben onu da ağır taşırım.', 'kararli'],
                ] },
                { m: '“Şefik\'le kitap yollarım. Cevap onda.”', etki: { mukaddem: 4, sefik: 1 }, bayrak: { p3_soz: 'kitap' }, adimlar: [
                  ['ic', 'Cevap yine kitapta. Taşıyan bu sefer Şefik.', 'tebessum'],
                ] },
                { m: '“Hiçbir şey söyleme.”', bayrak: { p3_soz: 'sustu' }, adimlar: [
                  /* GPT T24 Remzi (kısmi, B3): susmak teslimiyet değil, Feride'nin seçtiği zaman */
                  ['ic', 'Bu salonda bir kelime bile duyulur. Cevabı burada vermem.', 'kararli'],
                ] },
              ] },
            ] },
            /* Tur 27 (B3 anlatı 6): bölümün adı olan anın dış olayı anlatıcıda; Feride'de duygu */
            'Sayfayı kuşağıma soktum, kutuyu Münevver Hanım\'ın kucağına bıraktım.', // Tur 28 (B3 anlatı 3)
            ['an', 'Münevver Hanım kutuyu açtı. Salon nefesini tuttu, bütün hanımlar bir kızın ensesine baktı.'],
            { goster: ['gerdanlik', 'ana'] },
            ['an', 'Münevver Hanım gerdanlığı kendi eliyle taktı. Kilit kapanınca salonun nefesi geri geldi.'],
            { gizle: 'gerdanlik' },
            { efekt: 'kapak' }, // Tur 33 (B3 ses 1): gerdanlık kilidi ince bir metal çıt; kapı anahtarı değil
            /* Tur 32 (B3 anlatı 3): Kenan yolunda da törende Perihan'ın bir hamlesi */
            ['an', 'Perihan Hanım kalkıp kilidi bir kez yokladı.'],
          ], degilse: [
            /* ===== Süha yolu: Perihan'ın iğnesi ve kilit ===== */
            ['an', 'Kâhya kutuyu hanımının kucağına bıraktı.'],
            /* Tur 27 (B3 anlatı 4): Süha anlatıcı girişiyle; 2. bölümde Perihan ona "kızın yanında durmayacaksın" demişti */
            /* Tur 29: takvim — piyano akşamı (2. bölüm) törenden iki gün önceydi */
            ['an', 'Süha Bey en son girmiş, pencerenin önünde kalmıştı. Perihan Hanım ona yerini evvelki akşam göstermişti.'],
            { goster: ['suha', 'notr'] },
            { eger: (S) => b(S).p3_aksam === 'piyano', ise: [
              'Dün akşam yan yana çalmıştık. Bugün salonun öbür ucunda duruyor.',
            ], degilse: [{ eger: (S) => !!b(S).p3_k_seker, ise: [
              /* Oynanış T1 (B5): dün akşam nota sehpasında bırakılan şeker (keşif) */
              'Şekerini almadığımı biliyor, bugün o da bana bakmıyor.',
            ], degilse: [
            ] }] },
            { eger: gorulen, ise: [
              ['calibe', 'Feride geceleri koridorda geziniyor hanımefendi. Gelin olacak kız uykusuz olur.', 'sinsi'],
            ], degilse: [
              ['calibe', 'Feride düğünde limonlukta soluklanmış hanımefendi. Hekimimiz de oradaymış.', 'sinsi'],
            ] },
            { soru: 'Münevver Hanım kutuyu açmadı, bekliyor.', secim: [
              { m: 'Münevver Hanım\'a dön: “Bana inanır mısınız?”', etki: { munevver: 1, itibar: 2 }, bayrak: { p3_igne: 'munevver' }, iz: 'Münevver Hanım\'ı yanına aldın, iğne boşa düştü.', adimlar: [
                ['f', 'Siz bana inanır mısınız hanımefendi?', 'kararli'],
                ['munevver', 'Ben gelinime inanırım. Gerisi laf.', 'kararli'],
                { goster: ['calibe', 'sinsi'] }, 'Perihan Hanım gülümsedi. Yalnız ağzıyla.',
              ] },
              /* Oynanış T1 (B1): kozun kilidi görünür; harcanan koz tükenir */
              { m: '“Geceleri uyumayan çok efendim. Arka kapı bile.”', kosul: kapiKoz, kozGerek: [KAPI, KOZ], kilitGoster: kapiKilit, etki: { calibe_suphe: 2 }, bayrak: { p3_igne: 'koz', p3_koz_toren: true }, iz: 'Kozunu salonun önünde oynadın, iğne Perihan Hanım\'a döndü. Bildiğin sende, ama artık gizli silah değil.', adimlar: [
                ['f', 'Geceleri uyumayan çok efendim. Arka kapı bile.', 'kararli'],
                ['munevver', 'Arka kapı mı?', 'endiseli'],
                ['calibe', 'Rüzgâr hanımefendi. Eski ev.', 'soguk'],
                KAPI_YAK,
                NIMET_RISK,
              ] },
              kapiIkiz('“Geceleri uyumayan çok efendim. Arka kapı bile.”'),
              { m: '“Hatice\'ye sorun efendim, yüzüğünü kimden aldığını.”', kosul: yuzukKoz, kozGerek: YUZUK, kilitGoster: yuzukKilit, etki: { calibe_suphe: 2 }, bayrak: { p3_igne: 'koz', p3_koz_toren: true }, iz: 'Yüzüğü salonun önünde andın, iğne Perihan Hanım\'a döndü. Sır artık salonun.', adimlar: [
                ['f', 'Hatice\'ye sorun efendim, yüzüğünü kimden aldığını.', 'kararli'],
                ['munevver', 'Yüzük mü?', 'endiseli'],
                ['calibe', 'Hizmetçi lafı hanımefendi.', 'soguk'],
                'Kapıda Hatice elini önlüğünün altına sakladı.',
                { kozYak: YUZUK },
              ] },
              { m: '“Hekimimize sorun efendim. O her şeyi bilir.”', etki: { suha: 5, calibe_suphe: 1 }, bayrak: { p3_igne: 'suha' }, iz: 'Sözü hekime attın. Salon güldü, Perihan Hanım gülmedi.', adimlar: [
                ['f', 'Hekimimize sorun efendim. O her şeyi bilir.', 'tebessum'],
                /* Doğrulama gece (B3 ses): Süha'nın hekim nüktesi sahnede bir kez ("Hekim eli kilitten anlar") */
                ['suha', 'Bilirim. Söylemem.', 'soguk'],
                'Hanımlardan biri güldü. Perihan Hanım gülmedi.',
              ] },
            ] },
            ['an', 'Münevver Hanım kutuyu açtı. Elmaslar kadife yataklarında uyuyor gibiydi.'],
            { goster: ['gerdanlik', 'ana'] },
            'Gerdanlığı boynuma doladı. Kilit inatçıydı, parmakları kaydı.',
            { gizle: 'gerdanlik' },
            /* Sürükleyicilik T1 (B3-3): söz gerçekten tehlikede; kilit seçimi sözü kurtaran hamle olur */
            ['calibe', 'Kilit kapanmazsa uğursuzluk derler hanımefendi. Kuyumcu Agop\'a dönsün, haftaya takarız.', 'sinsi'],
            { eger: (S) => !!b(S).p3_koz_toren, ise: [
              'Perihan Hanım bu kez kimseyi yardıma çağırmadı.',
            ], degilse: [
              ['calibe', 'Ya da Süha yardım etsin, onun eli hafiftir.', 'sinsi'],
              /* Tur 29 (B3 anlatı 2): Perihan'ın dönüşü tertip olarak görünür */
              ['ic', 'Evvelki akşam ona “yanında durmayacaksın” dedi. Bugün herkesin önünde enseme onu çağırıyor.', 'endiseli'],
            ] },
            { muzik: 'suha' }, // Tur 27 (B3 ses 3): bölümün Süha'ya en yakın anı vals'ta kalmaz
            ['an', 'Bir hekimin eli genç bir kızın ensesine ancak hastalıkta değerdi.'],
            ['suha', 'İzin verirseniz ben kapatayım.', 'notr'],
            { soru: 'Arkamda duruyor. Bekliyor.', secim: [
              { m: 'Örgünü kendin kaldır, izni sen ver.', etki: { suha: 8 }, bayrak: { p3_kilit: 'izin' }, iz: 'İzni sen verdin. Hekim eli ensende oyalandı.', adimlar: [
                'Örgümü kaldırdım. Parmakları enseme bir kez değdi.',
                { efekt: 'kapak' },
                'Kilit çıt etti. Elini çekmeden önce zinciri bir kez düzeltti.',
                /* GPT T26 Süha (B3 D2): dil açıklaması yerine çift anlamlı kısa söz ve Perihan'ın tepkisi. (O1) An resmi
                   arkadan ense ve kilit; kıyafet/madalyon çeşidi görsel listesinde — satır kadrajı enseye çeker. */
                { eger: (S) => b(S).p3_madalyon === 'gizli', ise: [
                  ['suha', '{i}İki zincir. Biri bana fazla.{/i}', 'soguk'],
                ], degilse: [
                  ['suha', '{i}Nihayet.{/i}', 'notr'],
                  ['ic', 'Kilide mi söyledi, bana mı?', 'endiseli'],
                ] },
                'Perihan Hanım\'ın yelpazesi yarıda durdu. Ben yalnız ensemdeki iki parmağı duyuyordum.',
                { cizim: 'an_kilit' },
              ] },
              { m: '“Hekim eli nabız tutar, kilit değil.” Kendin kapat.', etki: { suha: 5, vakar: 1 }, bayrak: { p3_kilit: 'kendi' }, iz: 'Kilidi kendi elinle kapadın. Münevver Hanım seninle övündü.', adimlar: [
                ['f', 'Hekim eli nabız tutar Süha Bey, kilit değil.', 'kararli'],
                { efekt: 'kapak' }, // Tur 30 (B3 ses 4): kilit çıtı her kapanışta (Tur 33: ince metal çıt)
                'Ellerimi enseme götürdüm. Kilit ilk seferde kapandı.',
                ['munevver', 'Benim gelinim kimseye muhtaç değil.', 'kararli'],
                /* Tur 29 (B3 oynanış 10'a): üçüncü stratejinin de küçük bedeli */
                ['calibe', 'Hanım kızı ensesine kendi el atmaz kızım. Neyse, âdet de yoruldu bugün.', 'soguk'],
                ['suha', 'Nabzı da kendiniz mi tutarsınız?', 'alayci'],
                ['f', 'Gerekirse.', 'kararli'],
              ] },
              { m: 'Münevver Hanım\'a: “Siz takın. Acele etmeyin.”', etki: { munevver: 1 }, bayrak: { p3_kilit: 'munevver' }, iz: 'Kilidi Münevver Hanım\'a bıraktın. Perihan Hanım\'ın oyunu bozuldu.', adimlar: [
                ['f', 'Siz takın hanımefendi. Acele etmeyin, bekleriz.', 'tebessum'],
                /* Tur 27 (GPT B3-D 10'a-1): Münevver'in sade, koruyucu karşılığı */
                ['munevver', 'Beklesinler kızım. Şu kilit biraz küçük, gözüm seçmiyor.', 'gulumser'],
                { efekt: 'kapak' }, // Tur 30 (B3 ses 4)
                'Münevver Hanım üçüncü denemede kapadı. Süha Bey geri çekildi, eli cebinde yumruk olmuştu.',
              ] },
            ] },
            { muzik: 'sessiz' }, // Tur 33 (B3 ses 2): kilit kapanınca vals yeniden başlamaz; salon bir an susar
          ] },

          /* --- Gerdanlık boyunda (iki yol birleşir) --- */
          { taki: 'gerdanlik', ad: 'Nişan gerdanlığı', alt: 'Münevver Hanım\'ın getirdiği elmas gerdanlık. Boynunda ağır ve soğuk.' },
          /* Sürükleyicilik T1 (S6, B3-9): an_gerdanlik, an_kilit'in hemen ardına düşmesin diye iç sesten sonraya alındı */
          { eger: muk, ise: [
            { eger: (S) => b(S).p3_soz === 'kilit', ise: [
            ], degilse: [
              /* Tur 27b (GPT P1): kapıya gitmeyen ya da kutuyu dadıya aldıran kızın iç sesi o mesafeyi taşır */
              { eger: (S) => b(S).p3_kapi === 'nimet', ise: [
                ['ic', 'Kilit kapandı. Mabeyne gitseydim onu görecektim.', 'mahzun'],
              ], degilse: [{ eger: (S) => b(S).p3_kutu === 'nimet', ise: [
                ['ic', 'Kilit kapandı. Kutuyu ona değil Nimet\'e aldırmıştım, elleri boş kaldı.', 'mahzun'],
              ], degilse: [
                ['ic', 'Kilit kapandı. Kutuyu taşıyan eller şimdi selamlıkta, boş.', 'utanmis'],
              ] }] },
            ] },
          ], degilse: [
            { eger: (S) => b(S).p3_kilit === 'izin', ise: [
              ['ic', 'Elmaslar soğuk. Ensemde hâlâ onun parmaklarının izi.', 'endiseli'],
            ], degilse: [
              /* Tur 30 (B3 diyalog 9; karşılaşma ≠ istek): teması reddeden kızın iç sesi sıcaklık özlemi ima etmez */
              { eger: (S) => b(S).p3_kilit === 'kendi', ise: [
                ['ic', 'Kilidi kendim kapattım. Süha Bey elini sürmedi.', 'kararli'],
              ], degilse: [ ['ic', 'Münevver Hanım beklediğim gibi taktı. Süha Bey elini sürmedi.', 'kararli'] ] },
            ] },
          ] },
          /* GPT T23 (Kenan 3b-1, Remzi 3b-2): tehlikeden önce yaşanmış bir sahiplenme; miras ile söz yan yana */
          { eger: (S) => b(S).p3_madalyon === 'ikisi', ise: [
            ['ic', 'Kilit ensemde kapandı. Elmasları onlar getirdi, annemin madalyonunu ben çıkarmadım.', 'kararli'],
          ], degilse: [{ eger: (S) => b(S).p3_madalyon === 'gizli', ise: [
            ['ic', 'Gerdanlık yakamın üstünde, annem altında. Hangisini taşıdığımı yalnız ben bilirim.', 'mahzun'],
          ] }] },
          /* Tur 27 (B3 görsel 4): an_kilit'in hemen ardından ikinci an resmi gelmez */
          /* Tur 28 (B3 görsel 1): kilidi kendi kapatan dalda Münevver'in taktığı resim gösterilmez; kendi anı (üretimde) */
          /* Tur 29 (B3 görsel 3): Kenan yolunda kendi resmi (hafif gülüş, göz kapıda) gelince o; gelene dek temel resim
             (mahzun yüz, kapanıştaki "sözüm taş kadar ağır" satırıyla uyumlu) */
          { eger: (S) => b(S).p3_kilit === 'kendi', ise: [{ cizim: 'an_gerdanlik_kendi' }], degilse: [
            /* Tur 29: an_gerdanlik_kenan resmi ORTAK tarafından bağlandı; Kenan yolunda doğrudan kendi resmi */
            { eger: muk, ise: [{ cizim: 'an_gerdanlik_kenan' }], degilse: [
              { eger: (S) => b(S).p3_kilit !== 'izin', ise: [{ cizim: 'an_gerdanlik' }] },
            ] },
          ] },
          /* Doğrulama gece (B3): "bu evde" yolda en çok iki */
          ['munevver', 'Burada sana bir şey olursa bana kimi yollarsın kızım?', 'endiseli'],
          { soru: 'Münevver Hanım\'ın sesi yalnız bana. Bu gece birini yollamam gerekebilir.', secim: [
            /* Tur 32 (B3 diyalog 10'a): cevapta Feride'nin kendi sesi */
            { m: '“Nimet\'i. Perihan Hanım onu küçümser.”', etki: { munevver: 1 }, bayrak: { p3_haberci: 'nimet' }, iz: 'Habercin Nimet. Perihan Hanım\'ın gözü de onda.', adimlar: [
              ['munevver', 'Küçümsenen iyi haber taşır. Ama Perihan\'ın gözü yine de onda.', 'endiseli'],
            ] },
            { m: '“Şefik\'i. Kitap bahanesiyle.”', etki: { munevver: 1, sefik: 1 }, bayrak: { p3_haberci: 'sefik' }, iz: 'Habercin Şefik. Çocuğu kimse aramaz.', adimlar: [
              ['munevver', 'Çocuğu kimse aramaz. Aferin kuzum.', 'gulumser'],
            ] },
            { m: '“Kimseyi. Kendim gelirim.”', etki: { munevver: 1, vakar: 1 }, bayrak: { p3_haberci: 'kendi' }, iz: 'Habercin kendinsin. Duvar yirmi adım.', adimlar: [
              ['munevver', 'Duvar yirmi adım. Ama gece uzundur kızım.', 'endiseli'],
            ] },
          ] },
          { goster: ['calibe', 'sinsi'] },
          /* Tur 27 (GPT B3-A1): emir gerdanlığın sarı odada çıkarılacağını söyler; kapıda kalan dallar bunu bilerek yarım bırakır */
          ['calibe', 'Gerdanlığı sarı odadaki sandığa kilitleyelim kızım. Kutuyu getir, orada ben çıkarırım.', 'sinsi'],
          { gorev: 5 },
          /* GPT T25 Kenan (B3 S2): haberci ile sarı oda kararı arası 13 satırı aşmasın; iki satır tek köprüde */
          { ara: { mekan: 'sari_oda', yer: 'Sarı oda · akşamüstü', satirlar: [
            /* Tur 27 (B3 anlatı 2) */
            /* Tur 33 (B3 anlatı 2): "misafir girmez, sır girer" Feride'nin sabahki iç sesinde; burada yinelenmez */
            'Boynundaki taş henüz ısınmamıştı. Feride boş kutuyla sarı odanın merdivenini çıktı.',
          ] } },
        ],
      },

      /* ---------------- 6. Sarı oda: iki ses, bir kâğıt ---------------- */
      {
        /* Anlatı denetimi T1: Süha Bey anlatıcı satırından sonra, ilk sözünden önce görünür */
        id: 'p3_sari', mekan: 'sari_oda', tetik: 'giris', kosul: (S) => S.gorev === 5, sahne: ['calibe', 'reftar'],
        adimlar: [
          /* GPT T23 (Kenan 3a, Remzi 3B): Feride'nin dış betim satırı anlatıcıya çevrildi; kadro ilk sözden önce kurulur */
          ['an', 'Kapı aralıktı, içeriden köz kokusu geliyordu. Perihan Hanım\'la Süha Bey, Hatice anlamasın diye Fransızca konuşuyordu.'],
          /* Oynanış T1 (B5): aralıktan görülen mangal; p3_k_mangal sarı oda dallarında ve gece Süha'nın kapısında okunur */
          { kesif: { x: 64, y: 62, w: 9, h: 17, ad: 'Mangal', adimlar: [
            ['ic', 'Akşama vakit var ama mangal harlanmış. Biri burada bir şey yakacak.', 'endiseli'],
            { bayrak: { p3_k_mangal: true } },
          ] } },
          ['calibe', '{i}Evvelki gece ölüden af diliyordun. Behiye\'den.{/i}', 'soguk'],
          { goster: ['suha', 'notr'] },
          ['suha', '{i}Ölüler af eder. Siz etmezsiniz.{/i}', 'soguk'],
          { muzik: 'huzun' }, // Tur 33 (B3 ses 3): bölümün en ağır bilgisi sessiz geçmez
          { eger: (S) => b(S).p2_koridor_hece === 'be', ise: [
            ['ic', '“Be…”: Behiye. Annemin adı.', 'aglamakli'],
          ], degilse: [
            ['ic', 'Koridorda söylenen ad buymuş: annemin adı.', 'aglamakli'],
          ] },
          /* Anlatı T2 (b1_2_3 #17 + B3 b1): ad konakta yarım anılırdı; Feride bu anda da karar veren biri */
          /* Tur 32 (B3 anlatı 10'a): rapor cümlesi yerine yalnız eylem */
          ['an', 'Feride pervaza tutundu. Kapıdan çekilmedi.'],
          /* Doğrulama gece (B3 #10, 13 satır): Perihan'ın iki plan satırı tek replikte */
          /* Tur 27 (B3 diyalog 5): plan tek replikte dökülmez */
          ['calibe', '{i}Nabi yarın efendiye anlatacak: Kenan Beyoğlu\'nda sarhoş gezmiş.{/i}', 'sinsi'],
          ['calibe', '{i}Sen hekimsin. Kıza her gün bakarsın, yalnız.{/i}', 'sinsi'],
          /* Perihan'ın elindeki ilk tanık ya da eşya (önceki seçimlerin bedeli) */
          { eger: (S) => !!calibede(S), ise: [
            { eger: (S) => calibede(S) === 'pusula', ise: [
              ['calibe', '{i}Kızın pusulası da bende, altında K var.{/i}', 'sinsi'],
            ], degilse: [{ eger: (S) => calibede(S) === 'yasemin', ise: [
              ['calibe', '{i}Kızın defterinden düşen yasemin de bende.{/i}', 'sinsi'],
            ], degilse: [
              ['calibe', '{i}Senin şeker kutun da bende. Unutma.{/i}', 'sinsi'],
            ] }] },
          ], degilse: [{ eger: (S) => b(S).p3_sabah === 'hece', ise: [
            ['calibe', '{i}Kız da duymuş, yarım hece.{/i}', 'soguk'],
          ], degilse: [{ eger: (S) => b(S).p3_sabah === 'yalan', ise: [
            ['calibe', '{i}Kız bana yalan söyledi, demek duydu.{/i}', 'soguk'],
          ], degilse: [{ eger: (S) => b(S).p3_sabah === 'ayna', ise: [
            ['calibe', '{i}Kız bana soru sordu. Annesi de sorardı.{/i}', 'soguk'],
          ] }] }] }] },
          { eger: (S) => !!b(S).p3_mabeyn_tanik, ise: [
            ['calibe', '{i}Kız bugün mabeyn kapısında oyalandı. Hatice gördü.{/i}', 'sinsi'],
          ], degilse: [{ eger: (S) => !!b(S).p3_aksam_tanik && muk(S), ise: [
            ['calibe', '{i}Dün gece pencerede kandil yaktı. Karşıda da biri.{/i}', 'soguk'],
          ], degilse: [{ eger: (S) => !!b(S).p3_aksam_tanik, ise: [
            ['calibe', '{i}Dün akşam piyano başında yan yanaydınız. İyi, fazla iyi.{/i}', 'soguk'],
          ] }] }] },
          ['calibe', '{i}Kâğıt bende durdukça sen de kapımda durursun.{/i}', 'sinsi'],
          /* GPT T25 Kenan (B3 S2): kâğıdın görüntüsü seçim sorusuna taşındı (satır sınırı); bekleyen yüz soruda kalır */
          /* Tur 29 (B3 sürük 3): soruda süre (kutu bekleniyor); satır sınırı için soruda */
          { soru: 'Kutuyla eşikteyim. Beni fark etmeden ne yapacağım?', secim: [
            { m: 'Dinle. Sonra pervaza bir kez vur.', bayrak: { p3_sari: 'dinledi', p3_gerdanlik: 'boyun' }, iz: 'Kapıda kaldın. Her kelimeyi artık sen taşıyorsun.', adimlar: SARI_DINLE },
            /* GPT T26 Süha (B3 S1, 10'a): mangal keşfi yanmadan önce bir hamle açar — kâğıdın yazısını görmek. Kâğıt yine
               yanar (roman s. 99; 10. bölüm: imzasız mektubun tek nüshası); Feride'nin elinde yazının izi kalır. */
            { m: 'Yanmadan önce kâğıdın yazısını gör. Sonra pervaza vur.', kosul: (S) => !!b(S).p3_k_mangal, bayrak: { p3_sari: 'dinledi', p3_gerdanlik: 'boyun', p3_sari_mangal: 'yazi' }, iz: 'Harlı mangalı görmüştün, kâğıt yanmadan yazısını yakaladın.', adimlar: SARI_DINLE },
            { m: 'Kapıyı çal, gir. “Kutuyu getirdim efendim.”', bayrak: { p3_sari: 'girdi', p3_gerdanlik: 'calibe' }, iz: 'İçeri girdin. Pazarlık gözünün önünde bozuldu.', adimlar: [
              ['f', 'Kutuyu getirdim efendim.', 'kararli'],
              'Fransızca konuşmayı kestiler. Perihan Hanım bana dönüp gülümsedi.',
              ['calibe', 'Gel kızım. Gerdanlığı ben çıkarayım.', 'sinsi'],
              'Parmakları enseme değdi. Soğuktu.',
              { taki: null },
              { muzik: 'sessiz' },
              'O eğilince Süha Bey kâğıdı minderden aldı, mangala bıraktı.',
              { efekt: 'kagit_kivrilma' }, // Tur 29 (B3 ses 2) → mangala bırakılan kâğıt
              /* Tur 29 (B3 görsel 1): an_sari_oda Feride'yi kapı aralığında gösterir; içeri giren dalın kendi anı (üretimde) */
              { cizim: 'an_sari_oda_girdi' },
              { muzik: 'gerilim' },
              ['suha', 'Oda soğuk. Kâğıt da yanar.', 'soguk'],
              { goster: ['calibe', 'saskin'] }, // Tur 32 (B3 görsel 3): rengi giden yüz gülmesin
              'Perihan Hanım döndü. Yüzünün rengi gitmişti.',
              /* Tur 28b (kök 3–4): görgü ile çıkarım ayrı; bu dalda Fransızca pazarlık duyulmadı, yalnız yüz görüldü */
              { koz: KAGIT, kaynak: 'Kendim gördüm', alt: 'Gördüm: Süha Bey minderdeki kâğıdı gözümün önünde mangala bıraktı, Perihan Hanım bembeyaz oldu. Çıkarımım: o kâğıt Perihan Hanım\'ın elindeki bir şeydi.' },
              /* Oynanış T1 (B5): keşifte harlanmış közü görenin kaynağı güçlenir (Defter) */
              { eger: (S) => !!b(S).p3_k_mangal, ise: [{ kozKaynak: [KAGIT, 'Kendim gördüm, közü önceden harlatılmıştı'] }] },
              ['calibe', 'Süha, kızın rengi solgun. Yarın bir bakıver.', 'sinsi'], // Tur 33: toparlanıp yeniden saldırır
              { soru: 'İkisi de bana bakıyor.', secim: [
                { m: '“Bir şeyim yok efendim.”', etki: { suha: 4 }, bayrak: { p3_sari_son: 'inat' }, adimlar: [
                  ['f', 'Bir şeyim yok efendim. Muayeneye ihtiyacım yok.', 'kararli'],
                  /* Tur 27 (GPT B3-D1): nükte zinciri yerine somut karşı hamle */
                  ['suha', 'Babanız öyle düşünmez. Yarın sabah önce ona sorarım.', 'soguk'],
                ] },
                { m: '“Baksın. Ama kapı açık kalsın.”', etki: { suha: 6 }, bayrak: { p3_sari_son: 'kapi' }, adimlar: [
                  ['f', 'Baksın efendim. Ama kapı açık kalsın.', 'kararli'],
                  ['suha', 'Kapı açık kalır. Ben de kalırım.', 'notr'], // Tur 29 (B3 diyalog 1)
                ] },
                { m: '“Nimet de yanımda olsun.”', bayrak: { p3_sari_son: 'nimet' }, adimlar: [
                  ['f', 'Nimet de yanımda olsun.', 'kararli'],
                  ['suha', 'Nimet Hanım\'a da bakarım. O da solgun.', 'alayci'],
                ] },
              ] },
            ] },
            { m: 'Kutuyu kapının önüne bırak. Geri çekil.', bayrak: { p3_sari: 'cekildi', p3_gerdanlik: 'boyun' }, iz: 'Çekildin. Kâğıdın sonunu görmedin, gerdanlık boynunda kaldı.', adimlar: [
              /* Tur 27 (GPT B3-A1): emrin yarısı bilerek yerine getirilmez */
              'Kutuyu eşiğe bıraktım, gerdanlığı değil. Perihan Hanım\'ın elini enseme istemedim.',
              { temizle: true },
              ['an', 'Merdivenin başında Madam Josephine duruyordu. Konağın koridorları ona henüz yabancıydı.'],
              { goster: ['josephine', 'endiseli'] },
              /* Serbest vakitte ona öğretilen kelime burada döner */
              { eger: (S) => b(S).p3_v_madam === 'aralik', ise: [
                /* Diyalog T1 (3.9, dil Ü2): Madam'ın Türkçesi kırık, Fransızcası italik ve akıcı */
                ['josephine', 'A-ra-lık. Kapı yine aralık, bu evin adı bu.', 'endiseli'],
              ], degilse: [{ eger: (S) => b(S).p3_v_madam === 'sabir', ise: [
                ['josephine', '“Sabır” dediniz. Bu kapıda çok lazım.', 'endiseli'],
              ], degilse: [
                ['josephine', '{i}Burada kapılar hep aralık mı?{/i}', 'endiseli'],
              ] }] },
              { soru: 'Madam\'ın eli tırabzanda, bekliyor.', secim: [
                { m: '“Hep. Aralıktan bakmayı öğrenin.”', etki: { josephine: 1 }, bayrak: { p3_sari_son: 'uyari' }, adimlar: [
                  ['f', '{i}Hep. Aralıktan bakmayı öğrenin, Madam.{/i}', 'kararli'],
                  ['josephine', '{i}Öğrenirim. Ama siz de bana öğretin.{/i}', 'kararli'],
                ] },
                { m: 'Kulağına duyduklarını söyle.', etki: { josephine: 2 }, bayrak: { p3_sari_son: 'anlatti', p3_josephine_kulak: true }, adimlar: [
                  'Kulağına üç cümle söyledim. Madam\'ın yüzü kıpırdamadı, yalnız gözleri.',
                  /* Diyalog T1 (3.3): müttefikin kilit cümlesi anlam kazanır; 4. bölümde Süha "Türkçesi az" sanar */
                  ['josephine', '{i}Önümde Türkçe konuşurlar. Türkçeyi de öğreniyorum.{/i}', 'kararli'],
                  ['ic', 'Madam da duyacak artık. Her haberi Hatice taşımayacak.', 'tebessum'],
                ] },
                { m: '“Odanız şurada, Madam.”', bayrak: { p3_sari_son: 'yol' }, adimlar: [
                  ['f', 'Odanız şurada, Madam. İyi akşamlar.', 'mahzun'],
                  ['ic', 'Kutuyu kapıda bulunca anlar. Anlasın.', 'kararli'],
                ] },
              ] },
            ] },
          ] },
          { temizle: true },
          /* Artçı (mercek_artci 20): sırdan sonra misafir yüzüne dönüş */
          /* GPT T24b Süha (B3-2): gezinme sarı odadan başlar; anlatıcı yürüyüşü bitirmez */
          ['an', 'Feride sarı odanın önünden ayrılmadan yüzünü topladı. Aşağıda onu yeniden misafir yüzüyle bekliyorlardı.'],
          /* Serbest vakit: törenden sonra akşamüstü; hedef bahçe */
          { gorev: 6 }, { vakit: VAKIT_AKSAMUSTU },
        ],
      },

      /* ---------------- 7. Bahçe: Remzi çitin ardında ---------------- */
      {
        id: 'p3_remzi', mekan: 'konak_bahce', tetik: 'giris', kosul: (S) => S.gorev === 6, sahne: [],
        adimlar: [
          /* Sürükleyicilik T1 (S5): doruk sonrası sahne sıkılaştı; anlatıcı satırı sahneyi açar */
          /* Tur 28 (B3 anlatı 4): emri çiğneyip gerdanlığı boynunda tutan kızın bedeli görünür */
          { eger: (S) => b(S).p3_gerdanlik === 'boyun', ise: [
            ['an', 'Perihan Hanım sandığı boş bulmuştu. Merdivende gözü Feride’nin boynuna takıldı.'],
          ] },
          ['an', 'Feride bahçeye çıktığında Remzi Bey çitin ardında bekliyordu.'],
          { goster: ['remzi', 'notr'] },
          /* Tur 27 (GPT B3-S1): sarı odadan sonra aciliyet düşmesin; laf kulüpte dolaşıyor */
          ['remzi', 'Hanımefendi, sabahı beklemeyin. Kulüpte sizin evden bir laf dolaşıyor, yarın babanızın kahvesine iner.', 'kararli'],
          { eger: (S) => b(S).p3_v_gul === 'surdu', ise: [
            ['remzi', 'Gül yağı. Perihan Hanım geliyor sandım, az kalsın kaçıyordum.', 'gulumser'],
          ] },
          { eger: (S) => b(S).p_remzi === 'laf', ise: [
            ['remzi', 'Pahalısını görmemişim demiştiniz. Bugün kapıdan bir gerdanlık geçti, gördüm.', 'gulumser'],
          ], degilse: [{ eger: (S) => b(S).p_remzi === 'yurudu', ise: [
            ['remzi', 'Kupa yok, gördünüz mü? Çamuru bu kez ben geçtim.', 'gulumser'],
          ], degilse: [
            ['remzi', 'Bu kez bekleyen benim. Utanmadım, tuhaf.', 'mahcup'],
          ] }] },
          ['remzi', 'Nabi Bey’den alacağım var. Adamımı üç gündür kapıda bekletiyor.', 'kararli'],
          /* Önceki serbest vakitlerden: Nimet'in arka kapıdaki uşağı, sofada duyulan Perihan planı */
          { eger: (S) => !!b(S).p3_v_borc, ise: [
          ], degilse: [{ eger: (S) => b(S).p2_v_sofa === 'sakladi', ise: [
            ['ic', 'Rıfkı\'nın oğlu. Perihan Hanım\'ın beni satacağı alıcı bu.', 'ofkeli'],
          ] }] },
          { soru: 'Çit on adım ötede. Üst katın pencereleri bahçeye bakıyor.', secim: [
            { m: 'Çite yaklaş.', etki: { remzi: 4, itibar: -1 }, bayrak: { p3_remzi_yer: 'cit' }, adimlar: [
              'Beş adım attım. Kalan beşi yeter.',
            ] },
            { m: 'Köşkün kafesinin ardından konuş.', bayrak: { p3_remzi_yer: 'kafes' }, adimlar: [
              'Bahçe köşkünün kafesine geçtim. Beni görmüyor, sesimi duyuyor.',
            ] },
            { m: 'Madam Josephine\'i yanına çağır.', etki: { josephine: 1 }, bayrak: { p3_remzi_yer: 'josephine' }, adimlar: [
              { goster: ['josephine', 'ana'] },
              ['josephine', '{i}Bu bey kim? Atı pek güzel.{/i}', 'muzip'],
            ] },
          ] },
          { eger: (S) => b(S).p3_gerdanlik === 'boyun', ise: [
            ['remzi', 'Yedi yüz lira, Agop\'un işi. Ben olsam sekiz yüz verirdim.', 'gulumser'],
          ], degilse: [
            ['remzi', 'Gerdanlık takıldı dediler. Boynunuz boş ama.', 'gulumser'],
            /* Tur 27 (B3 diyalog 4): cevap Remzi'nin "bekleyen benim" sözünü yakalar */
            ['f', 'Sandıkta. Elmas da sizin gibi, beklemeyi öğrensin.', 'tebessum'],
            ['remzi', 'Yazık. Agop\'un yedi yüz liralık işi, ben olsam sekiz yüz verirdim.', 'gulumser'],
          ] },
          { eger: (S) => b(S).p2_remzi === 'duello', ise: [
            ['remzi', '“Annesi beğenmiş, oğlu yolu, ikisi de alamadı.” Nabi kelimesi kelimesine getirdi.', 'gulumser'],
          ], degilse: [{ eger: (S) => b(S).p2_remzi === 'ilgi', ise: [
            ['remzi', 'Kendine gülen adam az bulunurmuş. Duydum, yine güldüm.', 'gulumser'],
          ], degilse: [{ eger: (S) => b(S).p2_remzi === 'uzak', ise: [
            ['remzi', 'Sözlü olduğunuzu babanıza hatırlatmışsınız. Bana da hatırlatmış oldunuz.', 'mahcup'],
          ], degilse: [
            /* sofrada Nabi'ye arka kapı iması (p2_koz_sofra: 'nabi') */
            ['remzi', 'Nabi dün gece kulüpte sizi andı. Korkarak andı; onu hiç böyle görmemiştim.', 'kararli'],
          ] }] }] },
          { soru: 'Atının dizginini parmağına doluyor.', secim: [
            { m: 'Bedelini Remzi Bey’e sor.', etki: { remzi: 7 }, bayrak: { p3_remzi: 'duello' }, iz: 'Remzi Bey\'i kendi pazarında yendin, kulakları kızardı.', adimlar: [
              ['f', 'Sekiz yüze neyi alırdınız, Remzi Bey? Taşı mı, boynu mu?', 'tebessum'],
              { goster: ['remzi', 'ana'] }, // Tur 32 (B3 görsel 6): mahcup portresi üretilene dek
              ['remzi', 'Taşı. Boyun satılmaz; geçen gün öğrendim.', 'mahcup'],
              /* Diyalog T1 (G3): duyguyu adlandıran anlatı yerine jest */
            ] },
            { m: '“Nabi Bey kulüpte neler anlatıyor?”', etki: { remzi: 4 }, bayrak: { p3_remzi: 'bilgi' }, iz: 'Yalanın yolunu öğrendin: kulüp, Hacı Kâmil, baban.',adimlar: [
              /* Diyalog T1 (3.13): kahve Kâmil'in (4. bölüm "Yalan onun kahvesinden çıktı") */
              ['remzi', 'Kenan Bey\'i Beyoğlu\'nda sarhoş görmüş. Babanızın uğradığı Hacı Kâmil\'in kahvesinde de anlattı.', 'kararli'],
              ['remzi', 'O çocuk şerbetle sarhoş olur. Haksız kazanmayı sevmem, kumarda bile.', 'kararli'],
            ] },
            /* Oynanış T1 (B3): Remzi'yi geri çeviren seçenek gönülden düşer; tepkisi aynı anda görünür */
            { m: '“Alacağınızı Nabi Bey\'den alın. Benden laf alamazsınız.”', etki: { remzi: -3 }, bayrak: { p3_remzi: 'soguk' }, iz: 'Remzi Bey\'i çitin ardında bıraktın. Dizgini sertçe çekti.', adimlar: [
              ['remzi', 'Aldım bile.', 'gulumser'],
              { efekt: 'nal' }, // Tur 30 (t30_uretim_1_4 S2): tek atın geri adımı
              'Güldü ama dizgini sertçe çekti, at bir adım geri gitti.',
            ] },
          ] },
          { eger: (S) => b(S).p3_remzi !== 'bilgi', ise: [
            ['remzi', 'Bir şey daha: Nabi sabahtan beri Kenan Bey\'i kötülüyor. Yalanla kazanılan mal ucuza gider.', 'kararli'], // Tur 28 (B3 diyalog 10'a)
          ] },
          /* Tur 27 (B3 oynanış 3): Madam'ı çağırmanın görünür ödülü; kulağı müttefik olur (4–5. bölüm p3_josephine_kulak okur) */
          { eger: (S) => b(S).p3_remzi_yer === 'josephine', ise: [
            { eger: (S) => b(S).p3_remzi === 'bilgi', ise: [
              ['josephine', '{i}Kulüp, Kâmil, babanız. Üç kelime, ezberledim.{/i}', 'kararli'],
            ], degilse: [
              ['josephine', '{i}Nabi, Kenan Bey\'i kötüledi. Nerede, bilmiyorum.{/i}', 'endiseli'], // Tur 29 (B3 diyalog 2): Madam uzun bileşik cümle kurmaz
            ] },
            { bayrak: { p3_josephine_kulak: true } },
          ] },
          { eger: (S) => b(S).p3_remzi_yer === 'cit', ise: [
            ['an', 'Remzi Bey atını çevirdi. Üst katta bir perde kıpırdadı.'],
            { bayrak: { p3_remzi_goruldu: true } },
          ], degilse: [
            ['an', 'Remzi Bey atını çevirdi. Az sonra Nabi Bey kapıdan çıktı, elinde bir keseyle.'],
          ] },
          { gizle: 'remzi' }, { gizle: 'josephine' },
          { gorev: 7 },
          { ara: { mekan: 'fazila_oda', yer: 'Aynı gece · Feride\'nin odası', satirlar: [
            /* Doğrulama gece (B3 #15, 13 satır): iki satır bire indi */
            'Lambalar yakıldı. Feride sabah gerdanlığı takacak eli düşünmüştü. Şimdi annesinin adını pazarlığa koyan ağzı düşünüyordu.',
          ] } },
        ],
      },

      /* ---------------- 8. Gece: onun gözünden ve son karar ---------------- */
      {
        id: 'p3_gece', mekan: 'fazila_oda', tetik: 'giris', kosul: (S) => S.gorev === 7, sahne: ['mehves'],
        adimlar: [
          /* Doğrulama gece (B3 #15, 13 satır): örgü ve kilit satırı gerdanlık boyundayken tek satır */
          { eger: (S) => b(S).p3_gerdanlik === 'boyun', ise: [
            { eger: (S) => b(S).p3_giydiren === 'reftar', ise: [
              'Nimet mutfaktan kaçıp geldi, örgümü çözdü. Gerdanlığın kilidi zor açıldı.',
            ], degilse: [
              'Nimet örgümü çözdü, gerdanlığın kilidiyle uğraştı. Zor açıldı.',
            ] },
            { taki: null },
            { eger: (S) => muk(S) && b(S).p3_soz === 'kilit', ise: [
              ['ic', 'Kolay açılmasın diye. Açılmadı da.', 'utanmis'],
            ], degilse: [{ eger: (S) => b(S).p3_kilit === 'izin', ise: [
              /* GPT T24b Süha (B3 10'a-2): Feride yakınlığı kendisi mi seçti, Perihan'ın tertibi mi? */
              { eger: (S) => !!b(S).p3_koz_toren, ise: [
                ['ic', 'Kilide izni ben verdim. Bu kez onu kimse çağırmamıştı, kendi uzandı.', 'endiseli'],
              ], degilse: [
                ['ic', 'Kilide izni ben verdim ama onu çağıran Perihan Hanım\'dı. Kimin oyununa izin verdim?', 'endiseli'],
              ] },
            ] }] },
          ], degilse: [
            { eger: (S) => b(S).p3_giydiren === 'reftar', ise: [
              /* Tur 27b (GPT B3-A 10'a-2): gerdanlığın sandıkta kaldığı gecenin somut izi */
              'Nimet mutfaktan kaçıp geldi. Örgümü çözerken boş boynuma bakıp durdu, sormadı.',
            ], degilse: [
              'Nimet örgümü çözerken boş boynuma bakıp durdu. Sormadı.',
            ] },
            ['ic', 'Boynum hafif. Gerdanlık Perihan Hanım\'ın sandığında, kilit altında.', 'endiseli'],
          ] },
          /* Onun gözünden: anlatıcının ara sayfası (rehber §2; eski kart + 'pa' satırları taşındı).
             Ara sayfa sahnedekileri kaldırdığı için Nimet ardından geri gelir. */
          { ara: { yer: 'Onun gözünden', satirlar: [
            (S) => {
              var f = b(S);
              if (muk(S)) {
                if (f.p3_kapi === 'nimet') return 'Kenan kutuyu dadıya verip kapıdan çekildi. Merdivende annesini bekledi.';
                /* GPT T25 Kenan (B3 A4): an resminde el çıplak; eldiven yerine temasın kendisi */
                if (f.p3_kutu_cek) return 'Feride elini geri çekmişti. Kenan kutuyu bıraktı; bir daha eline uzanmadı.';
                if (f.p3_kutu === 'el') return 'Parmakları kadifenin altında ona değmişti. Kenan o akşam kutuyu tutan eline uzun uzun baktı.';
                if (f.p3_kutu === 'esik') return 'Eşiğin iki yanında diz çökmüşlerdi. Kenan bir eşiğe minnet duyacağını hiç düşünmemişti.';
                /* Tur 27 (GPT B3-A2): ret dalında anlatıcı Feride'nin gizli ilgisini yazmaz; Kenan'ın davranışı görünür */
                return 'Kutuyu dadı almıştı. Kenan boş elini cebine soktu, kapının kapanışını bekledi.';
              }
              /* GPT T24b Süha (B3-3): Feride'nin dokunuş satırı tekrarlanmaz; Süha'nın Perihan'a karşı eylemi */
              /* GPT T26 Süha (B3 A1): niyet hükmü yerine Perihan'ın gördüğü davranış */
              if (f.p3_kilit === 'izin') return f.p3_koz_toren
                ? 'Kilide bu kez kimse onu çağırmadan uzanmıştı. Perihan yelpazesinin ardından baktı, Süha zinciri ağır ağır düzeltti.'
                : 'Kilide onu Perihan çağırmıştı. Süha merdivende Perihan\'a döndü: “Bir dahaki sefere beni çağırmayın, kendim gelirim.”'; // Tur 28 (B3 anlatı 5)
              if (f.p3_kilit === 'kendi') return 'Feride kilidi kendi kapamıştı. Süha merdivende durdu; salona dönmedi.';
              return 'Kilidi yaşlı bir kadının ellerine bırakmıştı. Süha cebindeki yumruğu ancak merdivende açtı.';
            },
            /* Doğrulama gece (B3 #15, 13 satır): ikinci ve üçüncü satır tek satırda */
            (S) => [(function () {
              var f = b(S);
              if (muk(S)) {
                if (f.p3_kapi === 'nimet') {
                  if (f.p3_soz === 'okundu') return '“Okundu.” Tek kelime. Kenan onu bütün yol içinden tekrarladı.';
                  if (f.p3_soz === 'kitap') return 'Cevap Şefik\'le, kitapta gelecekmiş. Kenan o gece kitaplığını iki kez dizdi.';
                  return 'Cevap gelmedi. Kenan annesinin dönüşünde bir kelime daha bekledi, soramadı.';
                }
                /* mercek_sureklilik B2: "ilk sorusu" her yola uymadığı için değişti */
                if (f.p3_soz === 'kilit') return '“Kilidi kim seçti?” Kenan bu kez cevabı kâğıda değil, onun yüzüne söyleyebildiğine sevindi.';
                if (f.p3_soz === 'ad') return 'Adını söylemişti, yalnız adını. “Bey”in düştüğü yer sıcaktı.';
                if (f.p3_soz === 'kitap') return 'Cevap yarın kitapta. Kenan sabahı beklemek için saatini kurdu.';
                return 'Kapı kapanmıştı. Öbür yanında bir nefes duydu, kendininki sandı.';
              }
              if (f.p3_sari === 'dinledi') return f.p3_sari_son === 'sir'
                ? 'Aynada parmağını dudağına götürmüştü. Artık bir sırları vardı, Perihan\'ınkinden büyük.'
                /* GPT T26 Süha (B3 A1): "sevindi; korkması gerekirdi" hükmü çıktı; tartmayı oyuncuya bırakan davranış */
                : 'Aynada onu görmüştü. Süha o akşam sarı odanın kapısını ardından kendi eliyle kapadı.';
              if (f.p3_sari === 'girdi') return 'Kâğıdı onun gözü önünde yakmıştı. Mangaldan dönünce ilk baktığı yüz Perihan\'ınki değildi.';
              return 'Kapının önünde boş bir kutu buldu. Perihan görmeden yerine koydu.';
            })(),
            /* Anlatı T2 (b1_2_3 #4, GPT 3.1): gelecek olayı söylemez; yanan kâğıdın sonucunu da çözmez */
            (muk(S)
              ? 'Kulüpte adının sabahtan beri sarhoş diye anıldığını bilmiyordu.'
              : (b(S).p3_sari === 'cekildi'
                ? 'Sarı odada o akşam ne yandığını kız görmemişti. Süha da söylemeyecekti.'
                : 'Kâğıdın külü mangalda kalmıştı. Perihan\'ın susuşu Süha\'ya ne kazandığını söylemiyordu.'))].join(' '),
          ] } },
          { goster: ['mehves', 'ana'] },
          /* GPT T23 (Kenan 3a-2): annenin adı ile Kenan'a kurulan oyun aynı kararda buluşur */
          /* Sürükleyicilik T1 (S5, B3-7): seçimden önce süre, bedel ve bekleyen yüz; Süha yolunda pazarlığın öbür ucu */
          /* GPT T25 Kenan (B3 A3): söylentinin yolu sabit — kulüp → Hacı Kâmil → baba; engellenecek olan babanın sabah hükmü */
          { eger: muk, ise: [{ eger: (S) => b(S).p3_remzi === 'bilgi', ise: [
            /* Tur 32 (B3 diyalog 7): rapor yerine duygu */
            /* Tur 33 (B3 diyalog 9): "annemin adını pazarlığa koydular" ara sayfada söylendi; Kenan dallarında yinelenmez */
            ['ic', 'Kenan\'ın adı sabah Hacı Kâmil\'in kahvesinden babamın önüne gelecek.', 'endiseli'],
          ], degilse: [
            ['ic', 'Sabah babam kahvesini içerken Kenan’ın adı açılacak. Ondan önce davranmalıyım.', 'kararli'],
          ] }], degilse: [
            ['ic', 'Annemin adını pazarlığa koydular. Pazarlığın öbür ucu üst katta, uyumuyor.', 'ofkeli'],
          ] },
          /* Tur 27 (B3 sürük 10'a, diyalog 10'a): doruktan önce sürenin görünür işareti; Nimet'in imzası */
          ['mehves', 'Babanızın lambası hâlâ yanıyor hanımcığım. Ama merdivene inen kızı sabah bütün konak konuşur.', 'endiseli'],
          /* Tur 27 (GPT B3-S 10'a-1): seçimden önce habercinin somut riski; üç yol üç ayrı gerilim */
          { eger: (S) => b(S).p3_haberci === 'nimet', ise: [
            ['ic', 'Nimet giderse Hatice\'nin feneri de uyanık olabilir.', 'endiseli'],
          ], degilse: [{ eger: (S) => b(S).p3_haberci === 'sefik', ise: [
            ['ic', 'Şefik\'in kitabı sabah yola çıkar. Nazlı ise o kapıdan hiç ayrılmaz.', 'endiseli'],
          ], degilse: [
            ['ic', 'Duvar yirmi adım. Arka kapı ardımdan kapanırsa dönüşüm yok.', 'endiseli'],
          ] }] },
          { soru: 'Nimet tarağı bıraktı, bekliyor. Sabaha kadar ne yapacağım?', secim: [
            { m: 'Babama in. Nabi Bey\'den önce ben konuşayım.', etki: { baba_guven: 2, calibe_suphe: 1 }, bayrak: { p3_son: 'baba' }, iz: 'Yalandan önce babana sen indin.', adimlar: [
              { ara: { mekan: 'konak_sofa', yer: 'Gece · sofa', satirlar: [
                'Sait Efendi o gece de herkes yattıktan sonra sofada tespih çekiyordu. Merdivenden inen ayak sesini başını kaldırmadan tanıdı.',
              ] } },
              { efekt: 'adim' }, // Tur 28 (B3 ses 3): ayak sesi baba görünmeden
              { goster: ['sai', 'ciddi'] },
              /* Tur 30 (B3 sürük 4; doruk sonrası ≤ 6 satır): uyarı ile kaynağı tek satırda, babanın sorusu ile cevabı tek
                 satırda (7 → 5 satır). p3_remzi 'bilgi' ve p3_v_baba 'uyardi' okunmaya devam eder. */
              { eger: (S) => b(S).p3_remzi === 'bilgi', ise: [
                ['f', 'Babacığım, Nabi Bey size Kenan Bey için bir şey diyecek. Hacı Kâmil\'in kahvesinde konuşuluyormuş, inanmayın.', 'kararli'],
              ], degilse: [
                ['f', 'Babacığım, Nabi Bey size Kenan Bey için bir şey diyecek. Nereden duyduğumu sormayın, ama inanmayın.', 'kararli'],
              ] },
              /* GPT T26 Süha (B3 A2): akşamüstü uyaran kızın ikinci uyarısı; babanın cevabı ona bağlanır.
                 Tur 27 (B3 diyalog 2–3): Sait kızına "Süha Bey" der */
              { eger: (S) => b(S).p3_v_baba === 'uyardi', ise: [
                ['sai', 'Akşam da söyledin. Nabi henüz ağzını açmadı, ama Süha Bey sordu: “Kenan içer mi?”', 'endiseli'],
              ], degilse: [
                ['sai', 'Nabi henüz ağzını açmadı kızım. Ama Süha Bey bu akşam sordu: “Kenan içer mi?”', 'endiseli'],
              ] },
              /* Sürükleyicilik T1 (S3): başkasının hükmüyle kurulan doruğa Feride'nin sesli hamlesi */
              { muzik: 'huzun' }, // Tur 27 (B3 ses 6): baba dalı Süha kapısıyla aynı döngüde kalmaz
              ['f', 'Soranı da tartın babacığım. Kenan Bey ağzına içki koymaz.', 'kararli'],
              /* Tur 32 (B3 ses 4): tek seferlik 'hukum' 4. bölüm kahvesine kalır; burada hüzün sürer */
              ['an', 'Sait Efendi tespihini durdurdu. Kızına ilk kez bir şahide bakar gibi baktı.'],
              /* Tur 30 (B3 sürük 3): koşuların çoğunun doruğu resimsiz kalmasın (tek resim; Feride şallı, tür gerekmez) */
              { cizim: 'an_sahit' },
              /* Tur 30 (B3 anlatı 3; şüphe ≠ hüküm): elde Süha'nın bir sorusu var; soru taş atmak değildir */
              { kart: 'İlk soruyu Nabi değil, Süha Bey sormuş.' },
            ] },
            /* Tur 29 (B3 oynanış 2): seçenek, törende Münevver Hanım'a verilen haberci sözünü anar */
            /* Tur 33 (B3 oynanış 1): seçenekler bölümün kısa emir kipinde */
            { m: 'İki satır yaz. Nimet götürsün.', kosul: (S) => b(S).p3_haberci === 'nimet', etki: { munevver: 1, mehves: 1 }, bayrak: { p3_son: 'mektup' }, iz: 'Sözün yalandan önce yola çıktı, Nimet\'in şalının altında.', adimlar: [
              'İki satır yazdım: “Nabi Bey bir yalan taşıyor, inanmayın. —F.”',
              ['an', 'Nimet şalını başına çekip arka kapıdan çıktı. Gece yürüyen hizmetçi, hanımdan az göze batardı.'],
              { gizle: 'mehves' },
              ['ic', 'O kapıyı bu gece Nabi Bey değil, biz açtık.', 'kararli'],
              /* Tur 30 (B3 sürük 3): Nimet dalının doruk anı; üç alt dalda da doğru olan an (tek resim, Feride arkadan) */
              { cizim: 'an_nimet_sal' },
              { eger: (S) => !!b(S).p3_nimet_risk, ise: [
                'Bahçede bir fener yandı, Nimet\'in peşinden duvara kadar gitti.',
                /* Anlatı T2 (b1_2_3 #16): kanca kartından önce anlatıcının doruk satırı */
                ['an', 'Feride pencereden çekilmedi. Fenerin kimin elinde olduğunu görene kadar bekledi.'],
                { kart: 'Nimet\'in peşinde Hatice\'nin feneri vardı.' },
              ], degilse: [{ eger: (S) => muk(S) && b(S).p3_aksam === 'kandil', ise: [
                { muzik: 'romantik' }, // Tur 28 (B3 ses 5)
                'Yarım saat sonra karşı pencerede kandil üç kez indi, kalktı.',
                /* GPT T29 (S3-1): kesin okuma yalnız bahçede kurulan anlaşmayla; yoksa Nimet'in dönüşü doğrular */
                { eger: (S) => !!b(S).p3_v_isaret, ise: [
                  ['ic', 'Üç kez: kâğıdım ona varmış. Şefik\'le kurduğumuz dil bu.', 'tebessum'],
                ], degilse: [
                  ['ic', 'Üç kez işaret etti. Not ulaştı mı, Nimet dönmeden bilemem.', 'endiseli'],
                  'Nimet yarım saatte döndü, kapıda fısıldadı: “Aldı hanımcığım.”',
                ] },
                ['an', 'Feride lambasını söndürmedi. Yazdığı iki satırın arkasında, sabah da duracaktı.'],
                { kart: 'Pusulam yola çıktı. Sabah Perihan Hanım’dan önce kime ulaşacak?' },
              ], degilse: [
                'Nimet yarım saatte döndü. Eli boş, yüzü rahat.',
                ['an', 'Feride lambasını söndürmedi. Yazdığı iki satırın arkasında, sabah da duracaktı.'],
                { kart: 'Pusulam yola çıktı. Sabah Perihan Hanım’dan önce kime ulaşacak?' },
              ] }] },
            ] },
            { m: 'İki satır yaz. Şefik sabah kitapta götürsün.', kosul: (S) => b(S).p3_haberci === 'sefik', etki: { munevver: 1, sefik: 1 }, bayrak: { p3_son: 'mektup' }, iz: 'Sözün Şefik\'in kitabında, sabahı bekliyor.', adimlar: [
              'İki satır yazdım: “Nabi Bey bir yalan taşıyor, inanmayın. —F.”',
              'Kâğıdı Şefik\'in kitabına koydum, yirmi dördüncü sayfaya.',
              { muzik: 'gerilim' },
              'Kapı aralığında Nazlı\'nın gölgesi kıpırdadı.',
              /* Tur 30 (B3 sürük 3): Şefik dalının doruk anı (tek resim; eller ve kitap yakın, kapı aralığında gölge) */
              { cizim: 'an_kitap_nazli' },
              { kart: 'Not Şefik\'in kitabında. Nazlı kapıdaydı.' },
            ] },
            { m: 'İki satırı duvara kendin götür.', kosul: (S) => b(S).p3_haberci === 'kendi', etki: { munevver: 1, itibar: -2 }, bayrak: { p3_son: 'mektup' }, iz: 'Sözünü duvara kendin taşıdın. Gece seni gördü.', adimlar: [
              /* GPT T25 Kenan (B3 S4): teslim edilen uyarının cümlesi duyulur */
              'İki satır yazdım: “Nabi Bey bir yalan taşıyor, inanmayın. —F.” Şalımı başıma atıp bahçeye indim.',
              /* Tur 27 (B3 görsel 7): gece bahçe kapısının kendi resmi (bahce_gece, paslı kapı ve fener) */
              { ara: { mekan: 'bahce_gece', yer: 'Gece · bahçe duvarı', satirlar: [
                'İki konağın arasındaki duvarda paslı bir kapı vardı. Feride ona doğru yürürken her pencereye bir kez baktı.',
              ] } },
              /* Tur 30 (B3 sürük 4; doruk sonrası ≤ 6): fener satırı redingot / kâhya satırına katıldı */
              { eger: muk, ise: [
                'Öbür yanda bir fener, ardında koyu bir redingot. Kâğıdı elime dokunmadan aldı.', // Tur 33 (B3 görsel 8): an_duvar_kapi'deki koyu lacivert ile uyumlu
                { cizim: 'an_duvar_kapi' },
                ['mukaddem', 'İnandığınızı bilmek yeter. Gidin, görmesinler.', 'endiseli'],
                /* GPT T25 Kenan (B3 10'a-1): günün yakınlığı gecenin riskine bağlanır; Feride'nin sesli sözü */
                { eger: (S) => b(S).p3_kapi !== 'nimet', ise: [
                  ['f', 'Bugün kutuyu siz taşıdınız. Bu geceki kâğıdı ben.', 'tebessum'],
                ] },
              ], degilse: [
                'Öbür yanda bir fener, ardında Münevver Hanım\'ın kâhyası. Kâğıdı aldı, bir şey sormadı.',
              ] },
              /* GPT T25 Kenan (B3 S4, 10'a-4): kilidi kendi eliyle yoklar; bedel somut (kimi uyandıracak, o ne öğrenecek) */
              { muzik: 'sessiz' },
              { efekt: 'halka' }, // Tur 30 (t30_uretim_1_4 S3): kilitli kapının demir halkası (eskiden kapi_kapa)
              /* Tur 30 (B3 sürük 4): halka ve bedel tek satırda (doruk sonrası 6 satır) */
              'Döndüm, halkayı iki kez çektim. Kapı kıpırdamadı ve bağıramazdım.',
              { kart: 'Arka kapı içeriden kilitlenmişti.' },
            ] },
            /* Tur 29 (B3 oynanış 3): Kenan yolunda sarı odaya girip kâğıdı gözüyle gören de kapıyı çalabilir */
            /* Tur 32 (B3 oynanış 3): seçenek niyetini söyler; Kenan yolunda da gece ziyareti bir sorudur, rota değil */
            { m: 'Süha Bey\'in kapısını çal, sarı odada duyduğunu sor.', kosul: (S) => !muk(S) || b(S).p3_sari !== 'cekildi', etki: { suha: 6, itibar: -1 }, bayrak: { p3_son: 'suha' }, iz: 'Gece bir erkeğin kapısını çaldın. Sorusu sende kaldı.', adimlar: [
              /* Oynanış T1 (gorsel_t1_fon #9a): kapının önü mabeyn kapısı resminde (Süha'nın kapısı sağda); oda içi değil */
              { muzik: 'suha' }, // Tur 27 (B3 ses 6)
              { ara: { mekan: 'mabeyn_kapisi', yer: 'Gece · koridor', satirlar: [
                'Koridor karanlıktı. Feride biliyordu: bu kapıyı çaldığını gören olursa, sabah tek bir sebeple anlatılacaktı.',
              ] } },
              'Kapısını bir kez çaldım.',
              { goster: ['suha', 'notr'] },
              /* Tur 28 (B3 diyalog 4, oynanış 3): hekim nüktesi üçüncü kez dönmez; sarı odadaki son söz okunur */
              { eger: (S) => b(S).p3_sari_son === 'kapi', ise: [
                ['suha', 'Kapı açık kalsın demiştiniz. Gece yarısı kendi kapınızdan çıkıp benimkini çalmışsınız.', 'soguk'],
              ], degilse: [{ eger: (S) => b(S).p3_sari_son === 'nimet', ise: [
                ['suha', 'Nimet Hanım yanınızda değil. Bu gece solgun olan siz misiniz?', 'soguk'],
              ], degilse: [{ eger: (S) => b(S).p3_sari_son === 'inat', ise: [
                ['suha', 'Renginiz size yetiyordu. Gece yarısı kapımda ne arıyor?', 'soguk'],
              ], degilse: [
                ['suha', 'Gece yarısı. Kapımı çalan ya ölüyor ya bir şey biliyor.', 'soguk'],
              ] }] }] },
              { eger: (S) => b(S).p3_sari === 'dinledi', ise: [
                { eger: yaziGordu, ise: [
                  /* GPT T26 Süha (B3 S1): mangaldaki hamlenin aynı gece karşılığı */
                  ['f', 'Yaktığınız kâğıdın yazısını gördüm: eğik, imzasız. Sarı odada her şeyi duydum.', 'kararli'],
                ], degilse: [
                  ['f', 'Sarı odada ne dediğinizi duydum. Fransızca.', 'kararli'],
                ] },
              ], degilse: [{ eger: (S) => b(S).p3_sari === 'girdi', ise: [
                /* Diyalog T1 (3.1): soru Süha'nın Behiye cevabına bağlanır */
                ['f', 'Mangala attığınız kâğıt annemle mi ilgiliydi?', 'ofkeli'],
              ], degilse: [{ eger: (S) => !!b(S).p3_k_mangal, ise: [
                /* Oynanış T1 (B5): çekilen kız harlanmış közü görmüştü */
                /* Tur 30 (B3 anlatı 4; şüphe ≠ hüküm): çekilen kız közü kimin harlattığını görmedi; gördüğünü söyler */
                ['f', 'Sarı odada mangal harlıydı, bir şey yakılacaktı. Behiye adını da duydum.', 'kararli'],
              ], degilse: [
                ['f', 'Sarı odanın kapısı aralıktı. Orada Behiye adını duydum.', 'kararli'],
              ] }] }] },
              ['suha', 'Behiye Hanım bana ilk “evladım” diyendi.', 'mahzun'],
              { eger: (S) => !!b(S).p3_v_baba, ise: [
                ['ic', 'Babam da söylemişti: annem onu severmiş. Annemin evladıysa benim neyim?', 'mahzun'],
              ] },
              ['suha', 'Kızına yapacaklarımdan önceden af diledim.', 'soguk'],
              /* Tur 27 (B3 oynanış 5): yanan kâğıt kozu Süha'nın kapısında oynanır. Tur 32 (B3 ses 2): 'doruk' 2. bölümün
                 koridorunda çaldı; burada tehdidin ardından sessizlik */
              { muzik: 'sessiz' },
              /* Süha yolunda, kâğıdın yandığını gören (koz elde) kıza ikinci strateji; öbürlerinde sözlü cevap aynen */
              { eger: (S) => !muk(S) && var_(S, KAGIT), ise: [
                { soru: 'Kapıda duruyor, bekliyor.', secim: [
                  /* Sürükleyicilik T1 (S3): korkunç sözün karşısında Feride sesli durur; Süha tehlikeli kalır */
                  { m: '“Önceden mi? Affı ölüler değil, ben veririm.”', adimlar: [
                    ['f', 'Önceden mi? Affı ölüler değil, ben veririm Süha Bey, ya da vermem.', 'kararli'],
                  ] },
                  { m: '“Yaktığınız kâğıt bir daha yazılabilir mi?”', kozGerek: KAGIT, etki: { suha: 3 }, bayrak: { p3_kagit_suha: true }, iz: 'Yanan kâğıdı Süha Bey\'in yüzüne andın. Bildiğin sende, ama sırrı onunla paylaştın.', adimlar: [
                    ['f', 'Önceden mi? Yaktığınız kâğıt bir daha yazılabilir mi Süha Bey?', 'kararli'],
                    ['suha', 'Yazılır. Ama bu kez altında imza olur.', 'soguk'],
                  ] },
                ] },
              ], degilse: [
                ['f', 'Önceden mi? Affı ölüler değil, ben veririm Süha Bey, ya da vermem.', 'kararli'],
              ] },
              /* Anlatı T2 (b1_2_3 B3 b4): baba dalındaki "Süha bu akşam sordu" ile çelişmez; Süha tehlikeli kalır */
              ['suha', 'Babanıza bu akşam Kenan\'ı sordum. Yarın o bana soracak, ne diyeyim siz söyleyin.', 'notr'],
              /* GPT T26 Süha (B3 S 10'a): "Affı ben veririm"den sonra kısa kes; Süha'nın zihni anlatılmaz, davranışı görünür */
              ['an', 'Süha Bey kapısını kapatmadı.'],
              { cizim: 'an_gece_kapi' },
              { kart: '“Ne diyeyim? Siz söyleyin.”' },
            ] },
          ] },
          { bolumSonu: true },
        ],
      },
    ],

    // Tur 18 ek (öneri 9): defter üç kısa cümle — ne yaptım / kimle ne kaldı / sıradaki soru.
    sonNotu: function (S) {
      var f = S.bayrak, c = [];
      if (f.p_rota === 'mukaddem') {
        if (f.p3_kapi === 'nimet') c.push('Mabeyn kapısına gitmedim. Kutuyu Nimet aldı, kapağın altındaki sayfa yine bana geldi.');
        /* Tur 27b (GPT P1): kutuyu dadıya aldıran kızın özeti eski yakınlığa yenilmez */
        else if (f.p3_kutu === 'nimet') c.push(f.p3_soz === 'ad'
          ? 'Mabeyn kapısında kutuyu Kenan\'ın elinden değil, Nimet\'in elinden aldım. Sonra adını söyledim, yalnız adını.'
          : 'Mabeyn kapısında kutuyu Kenan\'ın elinden değil, Nimet\'in elinden aldım. Kenan elini boş indirdi.');
        else c.push({
          el: f.p3_kutu_cek ? 'Mabeyn kapısında kutuyu aldım; parmaklarımız değince elimi geri çektim.' : 'Mabeyn kapısında kutuyu Kenan\'ın elinden aldım, parmaklarımız değdi.',
          esik: 'Mabeyn kapısında kutu eşikteydi, Kenan\'la ikimiz de diz çöktük.',
        }[f.p3_kutu] || ({
          kilit: 'Mabeyn kapısında Kenan\'la bir dakika durdum. Gerdanlığın kilidini o seçmiş.',
          ad: 'Mabeyn kapısında Kenan\'la bir dakika durdum. Adını söyledim, yalnız adını.',
        }[f.p3_soz] || 'Mabeyn kapısında Kenan\'la bir dakika durdum.'));
      } else c.push({
        izin: 'Gerdanlığın kilidini Süha Bey kapadı. İzni ben verdim, zinciri o düzeltti.',
        kendi: 'Kilidi kendim kapadım. Süha Bey nabzımı da kendim mi tutacağımı sordu.',
      }[f.p3_kilit] || 'Münevver Hanım gerdanlığımı takarken Süha Bey geri çekildi.');
      /* GPT T26 Süha (öncelik 5): törende harcanan koz ve sarı odada görülen yazı özetten düşmesin */
      if (f.p3_koz_toren) c[0] = c[0].replace(/\.$/, '') + '. Törende ' + ((S.kozAcik || {})[YUZUK] === S.bolum ? 'yüzüğü' : 'gece açılan kapıyı') + ' salonun önünde andım.';
      c.push({
        dinledi: f.p3_sari_mangal === 'yazi'
          ? 'Sarı odada duydum: Nabi Bey babama yalan götürecek, Süha Bey hekim diye gelecek. Yanan kâğıdın imzasız yazısını da gördüm.'
          : 'Sarı odada duydum: Nabi Bey babama yalan götürecek, Süha Bey bana hekim diye gelecek.',
        girdi: 'Sarı odaya girdim. Süha Bey gözümün önünde bir kâğıt yaktı, Perihan Hanım bembeyaz oldu.',
      }[f.p3_sari] || 'Koridordaki ad annemin adıymış, Behiye. Sarı odanın kapısından erken çekildim.');
      /* Sürükleyicilik T1: defter soruyla değil, Feride'nin eylemiyle biter */
      /* GPT T25 Kenan (B3 A3): mektup cümlesi haberciye göre; yalnız gerçekten görülen sonuç yazılır */
      var mektup = {
        kendi: 'Gece iki satırı duvardaki kapıya kendim götürdüm, ' + (f.p_rota === 'mukaddem' ? 'Kenan elime dokunmadan aldı' : 'Münevver Hanım\'ın kâhyası aldı') + '. Yalanın önüne ben geçtim.',
        sefik: 'İki satırı Şefik\'in kitabına, yirmi dördüncü sayfaya koydum, sabah ilk iş o götürecek.',
      }[f.p3_haberci] || (f.p3_nimet_risk
        ? 'İki satırı gece Nimet\'le Münevver Hanım\'a yolladım. Arka kapıyı bu kez biz açtık.'
        : 'İki satırı gece Nimet\'le Münevver Hanım\'a yolladım. Babam yalanı duymadan benim sözüm yola çıktı.');
      c.push({
        baba: 'Gece babama indim. İlk soruyu Süha Bey sormuş, Kenan\'ı babamın önünde ben savundum.',
        mektup: mektup,
        suha: f.p3_kagit_suha
          ? 'Gece Süha Bey\'in kapısını çaldım. Yaktığı kâğıdın bir daha yazılıp yazılamayacağını yüzüne sordum.'
          : 'Gece Süha Bey\'in kapısını çaldım. Affı ölülerin değil, benim vereceğimi yüzüne söyledim.',
      }[f.p3_son] || 'Nabi Bey yarın kahvede yalanını söyleyecek. Bu kez hazırım.');
      return c.join(' ');
    },
    /* Tur 29 (GPT B2-O2 kalıbı; ORTAK motor anRet): kilidi hekime vermeyen, kutuyu elden almayan kıza o an
       "kaçırdığın an" diye gösterilmez */
    anRet: {
      /* GPT T29 (O3-3): öbür rotanın anı erişilemezdir; kaçırılmış sayılmaz */
      an_kilit: function (S) { var f = S.bayrak; return f.p_rota === 'mukaddem' || f.p3_kilit === 'kendi' || f.p3_kilit === 'munevver'; },
      an_mabeyn: function (S) { var f = S.bayrak; return f.p_rota !== 'mukaddem' || f.p3_kapi === 'nimet' || f.p3_kutu_cek || f.p3_kutu === 'esik' || f.p3_kutu === 'nimet'; },
    },
    anIpuclari: { an_mabeyn: 'Tören günü kutuyu almaya mabeyn kapısına kendisi giden, eşikte bir dakika bulur.', an_kilit: 'Tören günü kilidi hekim eline bırakan, bir elin ensede ne kadar oyalanacağını görür.' },
    /* Sürükleyicilik T1 (S1): ifşa (Behiye/Süha ipucu); son karta göre, kartı tekrar etmez. Eski sabit soru baba dalında kartla çelişiyordu. */
    siradaki: { ad: 'Pakt', kanca: function (S) {
      var f = S.bayrak;
      /* Tur 27 (B3 sürük 4): kart ifşayı söyledi; kanca tehlikeye geçer (4. bölüm sabah kahvesi) */
      if (f.p3_son === 'baba') return 'Babam bu gece beni dinledi. Sabah kahvesinde Nabi Bey konuşacak, Süha Bey de sofrada olacak.';
      /* GPT T26 Süha (B3 S2): kanca az önce duyulanı yinelemez, kapıdaki soruyu sabaha bağlar (gerekçeli sapma: bu dalda
         ifşa sahnenin içinde oldu; kanca kararın sabahki bedelini gösterir) */
      /* Tur 29 (B3 sürük 1): 2. bölüm Süha yolu karar kancasıyla bitti; bu dal tehlike (4. bölüm b3Tehlike bunu okur) */
      if (f.p3_son === 'suha') return 'Sabah babam ona Kenan\'ı soracak. Ne diyeceğini benim ağzımdan duymak istiyor.';
      /* GPT T25 Kenan (B3 A5): kanca oynanan gece hamlesinin kartından kopmaz; tür ifşa kalır (biri uyanıktı / fenerin sahibi) */
      if (f.p3_son === 'mektup' && f.p3_haberci === 'kendi') return 'Sürgüyü içeriden çeken, gece duvara indiğimi biliyordu. Bu evde benden başka uyanık biri var.';
      if (f.p3_son === 'mektup' && f.p3_haberci === 'nimet' && f.p3_nimet_risk) return 'Nimet\'in peşindeki fener, Nabi Bey\'e gece kapıyı açan fenerdi. O kapının sırrını artık iki taraf da biliyor.';
      /* Tur 27 (B3 sürük 5): Şefik ve risksiz Nimet habercisi rotaya yabancı Süha kancasına düşmez */
      if (f.p3_son === 'mektup' && f.p3_haberci === 'sefik') return 'Nazlı kapının aralığından ne gördüyse sabah annesine koşacak. Şefik ondan erken kalkmalı.';
      if (f.p3_son === 'mektup' && f.p3_haberci === 'nimet') return 'İki satırım duvarın öbür yanında. Sabah babam iki söz arasında kalacak: Nabi Bey\'inki ve benimki.';
      if (f.p3_sari === 'cekildi') return 'Perihan Hanım\'ın elinde Süha Bey\'i bağlayan bir kâğıt var. O pazarlıkta Behiye adı da geçti.';
      /* "kimseye bağlı değil" kâğıdın yanmasının kanıtladığından genişti: yalnız görüleni söyler */
      return 'Süha Bey, Perihan Hanım\'ın elindeki kâğıdı benim gözümün önünde yaktı. Annemden af dileyen adam kendine bir şahit seçti: beni.';
    } },
  };
})();

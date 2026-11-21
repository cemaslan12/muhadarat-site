/* =========================================================================
   PİLOT — YENİ BİÇİMDE 1. BÖLÜM: DÜĞÜN EVİ  (bölüm no 101)
   İskelet: notlar/bolum1_pilot_iskelet.md
   Doğrusal bölüm (dogrusal: true): oda gezme yok; olaylar gorev sayacıyla zincirlenir.
   Ölçüler: 10-15 dakika, 15 seçim (açılışta aynada tavır seçimi: p_tavir dik/umut/tetik), iki seçim arasında en çok 15 satır, kutu başına en çok iki cümle.
   Yeni adımlar: { giyin: [...] } sahne içi kıyafet ekranı, { koz: 'ad', alt: '...' } koz kartı,
                 { cizim: 'an_...' } an resmi (görseli yoksa yazılı kart).
   Bayraklar: p_madalyon (acik/sakli), p_cevap (oksuz/sert/sustu), p_fevkiye, p_boz, p_reftar
     (izledi/seslendi/dondu), p_rota (mukaddem/suha; yalnız karşılaşma hafızası, istek değil), p_bakis, p_yasemin, p_bilek, p_seker,
     p1_suha_sinir (Tur 28b: limonlukta açık ret; 2–4. bölüm "suhaSinir" okur),
     p_goruldu, p_gelin, p_yalan, p_koz_yandi, p_remzi, p_defter (arabada Perihan'a verilen cevap; deftere
     2. bölümün gece kapanışında yazılır — bölüm arabada biter, gece odası 2. bölümündür).
   Oynanış T1 Aşama B (yalnız 2. bölümde okunur): p1_k_kutu (çeşmede boş yüzük kutusu keşfi), p1_sitem (Kenan'a
     sitem, Kenan −3), p1_remzi_ad (perde/sozlu; Remzi −3/+3). Gönüle eksi değer: Kenan sitem, Süha p_seker 'calibe',
     Remzi perde. Koz seçeneği kozGerek ile görünür (gelin odası). iz satırları bahçe, Perihan, arka bahçe, kapıda.
   Gönül kuralı: puan = adayın ilgisi + Feride'nin yakınlaşması. Yalnız uzaklaştıran cevap puan vermez;
     aday reddedilmekten hoşlanıyorsa bunu o anda bir satır gösterir.
   Romandan ayrılan yerler: Kenan'la merdiven başı, limonlukta Süha, kapıda Remzi (oyun için ek).
   ========================================================================= */
window.BOLUMLER = window.BOLUMLER || {};

(function () {
  var V = window.OYUN_VERISI;
  // Yeni mekânların kendi görseli gelene kadar en yakın eski fon kullanılır
  var YEDEK = { mabeyn_merdiven: 'dugun_sofa', limonluk: 'dugun_kose', konak_kapi: 'selamlik_kapisi', araba_ici: 'selamlik_kapisi' };
  Object.keys(YEDEK).forEach(function (id) {
    var m = V.mekanlar[id];
    if (m && !m.arkaplan && V.mekanlar[YEDEK[id]]) m.arkaplan = V.mekanlar[YEDEK[id]].arkaplan;
  });
  /* Tur 27 (B1 sürük 3): arabadaki doruğun an resmi. Kayıt burada; resim gelene kadar motor adımı sessizce atlar
     (anResmi null → "henüz çizilmedi" kartı yok). Üretim: notlar/denetim/t27_uretim_b01_04.md */
  /* Tur 28 (B1 görsel 4): Süha dalında Perihan'ın indirdiği perdenin anı (an_perde_kapali; üretimde) */
  var ANLAR = { an_perde: { ad: 'Perdenin iki yanında iki gülümseme', alt: 'Düğün Evi' },
    an_perde_kapali: { ad: 'İnen perde, iki gülümseme', alt: 'Düğün Evi · Süha' } };
  Object.keys(ANLAR).forEach(function (id) {
    ['', '_nisan_gosterisli', '_nisan_yadigar'].forEach(function (c) {
      if (V.cizimler && !V.cizimler[id + c]) V.cizimler[id + c] = { ad: ANLAR[id].ad, alt: ANLAR[id].alt };
    });
  });
})();

window.BOLUMLER[101] = {
  no: 101,
  baslik: 'Yeni 1. Bölüm',
  ad: 'Düğün Evi',
  dogrusal: true,
  adaylar: ['mukaddem', 'suha', 'remzi'],
  ilkFaz: 'A',
  baslangic: 'fazila_oda',
  fazlar: { A: { mekanlar: ['fazila_oda', 'dugun_bahce', 'dugun_kose', 'mabeyn_merdiven', 'limonluk', 'gelin_odasi', 'konak_kapi', 'araba_ici'], baglanti: {} } },
  gorevler: [],
  /* Oynanış T1 (gorsel_t1_fon #16): gorseller.js mabeyn_merdiven'e konağın GECE merdivenini bağladığı için YEDEK
     artık devreye girmiyordu; düğün evi öğleden sonra olduğundan gündüz çeşidi seçilir (dugun_merdiven çizilene dek). */
  fon: function (S, mekanId) {
    if (mekanId === 'fazila_oda' && S.gorev === 0) return 'fazila_oda_gunduz';
    /* Tur 27 (B1 görsel 1): konağın mabeyn merdiveni düğün evinde kullanılmaz (ev tutarlılığı). Düğün evinin
       kendi merdiveni (dugun_merdiven) çizilip kaydedilince o; o güne dek aynı evin sofası. */
    if (mekanId === 'mabeyn_merdiven') {
      var dm = window.OYUN_VERISI.mekanlar.dugun_merdiven;
      return (dm && dm.arkaplan) ? 'dugun_merdiven' : 'dugun_sofa';
    }
    return null;
  },

  acilis: [
    /* Sezon açılışı: oyuncuyu dünyaya ve aileye yerleştiren anlatı */
    { anlati: { gorsel: 'anlati_sezon1', baslik: 'İstanbul · 1893', satirlar: [
      /* Sürükleyicilik T1 (S4, B1-7): açılış 3 satır; soru "söz ayakta kalır mı" */
      'Feride bir yıldır sözlü olduğu Kenan\'ı bugün aynı düğünde görecekti.',
      /* GPT T25 Kenan (B1 anlatı 1): madalyon ve elbise burada değil, hazırlıkta tanıtılır; Perihan'ın huyu ara sayfada */
      'Düğündeki hanımlar bu karşılaşmayı bekliyordu.',
    ] } },
    /* Anlatı rehberi (notlar/anlati_rehberi.md): sahneler arası anlatıcının ara sayfası */
    { ara: { mekan: 'fazila_oda', yer: 'Sait Efendi\'nin konağı · sabah', satirlar: [
      'O sabah da konak Perihan Hanım\'ın sesiyle uyandı. Kimseye emretmedi, yalnızca rica etti. Yine de herkes koştu.',
      'Feride koşmadı. Aynanın önüne oturdu, saçını acele etmeden kendi ördü.',
    ] } },
  ],

  olaylar: [
    /* ---------------- 1. Ayna ---------------- */
    {
      id: 'p1_ayna', mekan: 'fazila_oda', tetik: 'giris', kosul: (S) => S.gorev === 0, sahne: [],
      adimlar: [
        /* Yerleşme: Feride'nin bu sabahı (Tur 14: bilgi kartından hemen kıyafete atlamasın) */
        /* Sürükleyicilik T1 (S4): ilk seçim öne; ayna tavrı bir karar, hazırlık değil */
        /* GPT T24 Remzi (kısmi): anlatıcının söylediği "ilk düğün" Feride'nin ağzında yinelenmez */
        /* GPT T25 Kenan (B1 sürük 1): seçimden önce süre (araba bekliyor) */
        /* Tur 29 (B1 görsel 3): ilk seçimin aynası ekranda (eşya resmi); (B1 anlatı 10'a): bölümün tek sorusu Feride'nin ağzında */
        { goster: ['ayna', 'ana'] },
        'Araba kapıda bekliyor. Bugün her yelpaze aynı şeyi soracak: sözlün nerede?',
        /* Tur 32 (B1 diyalog 1): tema cümlesi yerine Feride'nin kendi sorusu */
        ['ic', 'Akşam döndüğümde sözüm hakkında başkaları mı karar vermiş olacak?', 'endiseli'],
        { soru: 'Düğüne hangi tavırla gideceğim?', secim: [
          { m: '“Bugün kimse beni acındırmasın.”', bayrak: { p_tavir: 'dik' }, adimlar: [
            ['ic', 'Çenemi kaldırdım; Nimet girerse yüzümü böyle bulsun.', 'kararli'],
          ] },
          { m: '“Bugün onu bir kez göreyim, yeter.”', bayrak: { p_tavir: 'umut' }, adimlar: [
            ['ic', 'Yanaklarım kendiliğinden ısındı. Allığa gerek kalmadı.', 'utanmis'],
          ] },
          { m: '“Bugün gözüm Perihan Hanım\'ın üstünde.”', bayrak: { p_tavir: 'tetik' }, adimlar: [
            /* GPT T26 Süha (B1 diyalog 1): özdeyiş yerine o güne bağlı somut plan */
            ['ic', 'Ne dediğine değil, kime bakıp sustuğuna dikkat edeceğim.', 'kararli'],
          ] },
        ] },
        { gizle: 'ayna' },
        { efekt: 'kapi' }, // Tur 27 (B1 ses 4): kapı çalınmadan açılır; gıcırtı
        ['an', 'Behiye Hanım\'ın çocuklarını büyüten Nimet, kapıyı çalmadan girdi.'],
        { goster: ['mehves', 'notr'] },
        ['mehves', 'Perihan Hanım iki kere sordurdu hanımcığım.', 'notr'],
        ['ic', 'İki kere sordurduysa, üçüncüsünde kendisi gelir.', 'tebessum'],
        ['mehves', 'Hangisini çıkarayım?', 'notr'],
        { giyin: ['dugun', 'nisan_gosterisli', 'nisan_yadigar'], soru: 'Düğüne ne giyeceğim?' },
        { eger: (S) => S.giyili === 'nisan_yadigar', ise: [
          ['mehves', 'Bu… rahmetli annenizin elbisesi.', 'endiseli'],
          ['f', 'Daralttırdım. Üstüme tam oldu.', 'tebessum'],
        ], degilse: [{ eger: (S) => S.giyili === 'nisan_gosterisli', ise: [
          ['mehves', 'Pembe tafta mı? Perihan Hanım\'ın gözü üstünüzde kalır.', 'endiseli'],
          ['f', 'Kalsın.', 'kararli'],
        ], degilse: [
          ['mehves', 'İncili olan. Hanımlar buna laf bulamaz.', 'kararli'],
          ['ic', 'Onlar laf bulur. Ama aramaları uzun sürer.', 'tebessum'],
        ] }] },
        ['an', 'Nimet, Behiye Hanım\'ın siyah taşlı madalyonunu çıkardı. Perihan Hanım o B harfini görmek istemezdi.'],
        /* Tur 27 (B1 diyalog 10'a): Nimet'in tespih imzası bölümde bir kez */
        /* Tur 32 (B1 diyalog 2): imza gösterisi yerine dadının inancı */
        ['mehves', 'Takın hanımcığım. Annenizin taşı boynunuzdayken kimse başınızı eğdiremez.', 'kararli'],
        /* Tur 27 (GPT B1 görsel 10'a-2): takarken eşyanın yakın planı */
        { goster: ['madalyon', 'ana'] },
        { soru: 'Madalyonu nasıl takacağım?', secim: [
          /* Tur 28 (B1 görsel 1; GPT G1): madalyon_hal an resmi çeşidini seçer (motor: 'sakli'/'yok' → _sakli soneki;
             ortak istek t28_ortak_istek_b01_04.md). p_madalyon B1 seçimi olarak kalır. */
          { m: 'Göğsümde, açıkta dursun.', bayrak: { p_madalyon: 'acik', madalyon_hal: 'acik' }, adimlar: [
            ['mehves', 'Soran olur hanımcığım.', 'endiseli'],
            /* Tur 27 (B1 diyalog 6): meydan okuma, öfke değil */
            ['f', 'Sorsunlar.', 'kararli'],
          ] },
          { m: 'Yakamın içine saklayayım.', bayrak: { p_madalyon: 'sakli', madalyon_hal: 'sakli' }, adimlar: [
            ['ic', 'Soğuktu. Sonra tenimde ısındı.', 'mahzun'],
          ] },
        ] },
        { gizle: 'madalyon' },
        { ara: { mekan: 'dugun_bahce', yer: 'Düğün evi · kuşluk', satirlar: [
          /* Tur 28 (B1 anlatı 2): "kızın kaderi" açılışta ikinci kez geçmez */
          'Düğün evinin bahçesi hanımlarla doluydu. Kızlar gelini görmeye gelmişti, hanımlar da kızları.',
          /* Tur 27 (B1 anlatı 2; GPT A 10'a-1): aynadaki tavır arabadan inişte görünür */
          (S) => ({
            umut: 'Feride bunu biliyordu. Arabadan inerken gözü yelpazelere değil, selamlığın kafeslerine gitti.',
            tetik: 'Feride bunu biliyordu. Arabadan inince Perihan Hanım\'ın bir adım gerisinde yürüdü. Oradan her şeyi görebilirdi.',
          }[S.bayrak.p_tavir] || 'Feride bunu biliyordu. Arabadan inerken çenesini kaldırdı.'),
        ] } },
        { gorev: 1 },
      ],
    },

    /* ---------------- 2. Düğün bahçesi ---------------- */
    {
      id: 'p1_bahce', mekan: 'dugun_bahce', tetik: 'giris', kosul: (S) => S.gorev === 1, sahne: ['hanimlar'],
      adimlar: [
        /* Tur 27 (B1 anlatı 1, ses 2): "hanımlar kızları tartar" ikinci kez söylenmez; çalan müzik vals */
        ['an', 'Gül ağacının dibindeki dört hanım hiçbir düğünü kaçırmazdı. Söyledikleri ertesi sabah bütün Boğaz\'ı dolaşırdı.'],
        'Selamlıktan bir vals taşıyor. Dört yelpaze birden bana döndü.',
        ['h1', 'Şu sarışın kız Sait Efendi\'nin kızı değil mi?'],
        { eger: (S) => S.giyili === 'nisan_yadigar', ise: [
          ['h3', 'Bu elbiseyi tanıyorum ben. Behiye Hanım\'ındı, rahmetlinin.'],
        ] },
        { eger: (S) => S.bayrak.p_madalyon === 'acik', ise: [
          /* Oynanış T1 (B1 öneri 3): madalyon seçimi görünür olsun; eşya resmi hazır */
          { goster: ['madalyon', 'ana'] },
          ['h2', 'Göğsündeki harfe bakın, B! Kızın adı Feride değil mi?'],
          ['h4', 'Kimin B\'si o, küçük hanım?'],
        ], degilse: [
          ['h2', 'Mendilinde F var. Boynundaki zincirin ucunu ise saklamış.'],
          ['h4', 'Ne saklıyorsun orada, küçük hanım?'],
        ] },
        { soru: 'Dört hanım cevap bekliyor.', secim: [
          { m: '“Annemin adı Behiye\'ydi. Öksüzüm efendim.”', etki: { itibar: 6 }, bayrak: { p_cevap: 'oksuz' }, iz: 'Annenin adını andın, dört hanım yumuşadı.', adimlar: [
            ['f', 'Annemin adı Behiye\'ydi. Öksüzüm efendim.', 'mahzun'],
            ['h3', 'Ah yavrum. Affet bizi.'],
            ['ic', 'Gözüm doldu. Silmedim, görsünler.', 'mahzun'],
          ] },
          /* Doğrulama gece (B1): sert cevap sorulan soruya uysun; harf yalnız madalyon açıkken okunur */
          { m: '“Harf okumayı yeni mi öğrendiniz efendim?”', kosul: (S) => S.bayrak.p_madalyon === 'acik', etki: { itibar: -4, isyan: 1 }, bayrak: { p_cevap: 'sert' }, iz: 'Dört hanımı kızdırdın. Leyla güldü.', adimlar: [
            ['f', 'Harf okumayı yeni mi öğrendiniz efendim?', 'ofkeli'],
            ['h4', 'Dili de varmış bunun!'],
            { efekt: 'oksuruk' }, // Tur 29 (B1 ses 1)
            ['ic', 'Arkamda biri gülmemek için öksürdü. Leyla.', 'tebessum'],
          ] },
          { m: '“Saklanan şey sizin değil efendim.”', kosul: (S) => S.bayrak.p_madalyon !== 'acik', etki: { itibar: -4, isyan: 1 }, bayrak: { p_cevap: 'sert' }, iz: 'Dört hanımı kızdırdın. Leyla güldü.', adimlar: [
            ['f', 'Saklanan şey sizin değil efendim.', 'ofkeli'],
            ['h4', 'Dili de varmış bunun!'],
            { efekt: 'oksuruk' },
            ['ic', 'Arkamda biri gülmemek için öksürdü. Leyla.', 'tebessum'],
          ] },
          { m: 'Sus. Gözlerinin içine bak.', etki: { itibar: 2, vakar: 1 }, bayrak: { p_cevap: 'sustu' }, iz: 'Sustun, yelpazeler indi.', adimlar: [
            'Sustum, sırayla dördünün de gözüne baktım. Yelpazeler birer birer indi.',
            ['h1', 'Bakışı da annesininki.'],
          ] },
        ] },
        { gizle: 'madalyon' },
        ['an', 'Leyla yelpazesiyle Feride\'nin koluna dokundu. Dudakları kıpır kıpırdı.'],
        { goster: ['fevkiye', 'gulumser'] },
        ['fevkiye', 'Bırak onları. Bil bakalım selamlıkta kim var?', 'gulumser'],
        /* Diyalog T1 (1.8): bilmeceyi Leyla sabırsızlıkla kendisi bozar; "bil bakalım" imzası kalır.
           Tur 27 (B1 diyalog 5; GPT D 10'a-1): Feride'nin cevap sırası; tahmini kendisi kaçırır */
        /* GPT T29 (B1-A1): karşılaşma istek değildir; seçimden önceki iç sesler nötr, duygu seçimden sonra */
        ['ic', 'Leyla\'nın ağzında sır bir dakika durmaz.', 'tebessum'],
        /* Tur 28 (GPT B1 D2): ortada tahmin yok; Leyla sabırsızlığını söyler */
        ['fevkiye', 'Dayanamıyorum, söyleyeceğim: Kenan Bey! Annesiyle gelmiş.', 'gulumser'],
        ['ic', 'Bir yıldır yüzünü görmedim. Bugün buradaysa Perihan Hanım da işitmiştir.', 'utanmis'],
        { soru: 'Leyla yüzüme bakıyor.', secim: [
          { m: '“Bana ne?”', bayrak: { p_fevkiye: 'bana_ne' }, adimlar: [
            ['f', 'Bana ne?', 'kararli'],
            ['fevkiye', 'Peki peki. Ben söyledim, sen duymadın.', 'notr'],
            ['ic', 'Sözlüyüz. Ama benim gönlüme soran olmadı ki.', 'mahzun'],
          ] },
          { m: '“Ne giymiş?”', etki: { fevkiye: 1 }, bayrak: { p_fevkiye: 'sordu' }, adimlar: [
            ['f', 'Ne giymiş?', 'tebessum'],
            /* Tur 28 (B1 diyalog 2): portre ve an resmiyle aynı renk */
            /* Tur 29 (B1 diyalog 1): azar, bilgi, kaynak sırayla */
            ['fevkiye', 'Koyu kahve! Hizmetçi kız söyledi, yemin ederim ben bakmadım bile.', 'gulumser'],
          ] },
          { m: 'Gülümse, bir şey deme.', bayrak: { p_fevkiye: 'sustu' }, adimlar: [
            ['fevkiye', 'Sus bakalım, sus. Yanakların her şeyi söylüyor!', 'gulumser'],
          ] },
        ] },
        /* Tur 28 (B1 anlatı 1): Süha rota seçiminden önce tanınır; oyuncu limonluğa kimi bulmaya gittiğini bilir */
        ['fevkiye', 'Süha dayın da burada, hekim olmuş ya. Kızlar ona bakıyor, o kimseye bakmıyor.', 'gulumser'],
        { gorev: 2 },
      ],
    },

    /* ---------------- 3. Perihan'ın bahanesi ---------------- */
    {
      id: 'p1_calibe', mekan: 'dugun_bahce', tetik: 'giris', kosul: (S) => S.gorev === 2, sahne: ['calibe', 'fevkiye'],
      adimlar: [
        /* Tur 27 (B1 ses 1): Perihan'ın baskı sahnesi vals'ta kalmaz; vakitten önce vals'a dönülür */
        { muzik: 'perihan' },
        /* Tur 27 (GPT A1, A2): yabancılığı Feride'nin bilgisiyle sınırlı; "görücü" adı finaldeki ifşaya kalır */
        ['an', 'Öğle gölgesinde Perihan Hanım, Feride\'nin tanımadığı iki hanımın arasına oturmuştu. Konuşurken sesini değil, gülümsemesini kullanırdı.'],
        'Yabancılardan biri beni baştan ayağa süzdü, öteki yalnız bileziğime baktı.',
        ['ic', 'Kumaş tartar gibi tartıyorlar beni. Sözlü olduğumu bilmiyorlar mı?', 'endiseli'],
        ['calibe', 'Feride kızım, tülüm söküldü, iğne de Hatice\'de. Git bul şu kızı.', 'gulumser'],
        { soru: 'Perihan Hanım gülümseyerek bekliyor.', secim: [
          { m: '“Peki efendim.”', bayrak: { p_boz: false }, iz: 'Perihan Hanım\'ın yolladığı yere gidiyorsun, gözün açık.', adimlar: [
            ['f', 'Peki efendim.', 'kararli'],
            ['calibe', 'Aferin benim kızıma.', 'gulumser'],
            ['ic', 'Giderim. Ama beni neden uzaklaştırdığını da öğrenirim.', 'kararli'],
          ] },
          /* Tur 29 (B1 diyalog 3): uzun seçenekte niyet; söz f satırında */
          /* Tur 30 (GPT B1 O1): seçenek sonucu değil denemeyi adlandırır (Perihan yine de gönderir) */
          { m: 'Misafirleri bahane et, yanında kal.', etki: { itibar: 4, calibe_suphe: 1 }, bayrak: { p_boz: true }, iz: 'Misafirlerin önünde karşılık verdin. Yine de seni gönderdi.', adimlar: [
            ['f', 'Bir hizmetçi gitsin efendim. Misafirleriniz varken yanınızdan ayrılmayayım.', 'tebessum'],
            'Bileziğime bakan hanım bu kez yüzüme baktı.',
            ['calibe', 'Ne düşünceli. Ama Hatice\'yi en iyi sen bulursun, git yavrum.', 'soguk'],
            ['ic', '“Yavrum” dedi ama gitmemi beklerken yüzü sertleşti.', 'endiseli'],
          ] },
          /* Tur 27 (B1 oynanış 3): üçüncü strateji (kurnaz): yanına şahit istemek. Perihan'ın reddi bir ipucu */
          { m: 'Leyla\'yı yanına iste.', etki: { fevkiye: 1, calibe_suphe: 1 }, bayrak: { p1_boz_leyla: true }, iz: 'Yanına bir şahit istedin. Perihan Hanım vermedi.', adimlar: [
            ['f', 'Leyla da benimle gelsin efendim, iki kişi daha çabuk buluruz.', 'tebessum'],
            ['calibe', 'Leyla misafir kızım. Sen yetersin.', 'soguk'],
            /* Tur 30 (B1 anlatı 4; şüphe ≠ hüküm): reddedilen şahit bir soru doğurur, hüküm değil */
            ['ic', 'Şahit istemiyor. Görmemi istemediği bir şey mi var?', 'endiseli'],
          ] },
        ] },
        /* Tur 28 (B1 diyalog 3; GPT O2): göz imgesi üçüncü kez dönmez; Leyla edilgen kalmaz (gelin odasında karşılığı) */
        ['fevkiye', 'Seni yanından yolluyor. Ben de gözümü ondan ayırmam.', 'endiseli'],
        { muzik: null },
        /* Serbest vakit: Hatice'yi aramaya çıkarken bir yere uğrayacak kadar vakit var */
        { vakit: {
          ad: 'Düğün evi', hak: 1,
          hedef: { mekan: 'dugun_kose', metin: 'Hatice\'yi bul. Arka bahçeye gitmeden bir yere uğrayacak vaktin var.' },
          mekanlar: ['dugun_bahce', 'dugun_sofa', 'gelin_odasi', 'dugun_kose'],
          yerler: {
            dugun_sofa: { kisi: 'hanimlar', ipucu: 'Hanımlar sofasında biri senin adını andı (kulak misafiri).',
              adimlar: [
                'İki hanım yelpazelerinin ardından konuşuyor. Beni görmediler.',
                ['hanimlar', 'Sait Efendi\'nin kızı bu. Sözlüsü bir yıldır görünmüyormuş.'],
                /* Tur 28 (GPT B1 D1): kesin hüküm finalde Perihan'ın; dedikodu somut soru sorar */
                ['hanimlar', 'Münevver Hanım da gelmiş. Gerdanlığı soran oldu mu?'],
                { soru: 'Yelpazeler sallanıyor.', secim: [
                  { m: 'Yanlarına git, gülümse: “Kenan Bey\'e merakınızı söylerim.”', etki: { itibar: 3 }, bayrak: { p1_v_sofa: 'gulumse' }, iz: 'Dedikoduyu yüzlerine gülümseyerek geri verdin.', adimlar: [
                    /* Tur 27 (B1 diyalog 3): iki hanıma tekil "hanımefendi" denmez */
                    ['f', 'Kenan Bey\'e onu bu kadar merak ettiğinizi söylerim efendim. Pek sevinir.', 'tebessum'],
                    'Yelpazeler havada kaldı. İkisi birden kızardı, yakalanmış gibi gülümsediler.',
                  ] },
                  { m: 'Duymamış gibi geç.', bayrak: { p1_v_sofa: 'gec' }, adimlar: [
                    ['ic', 'Duydum. Unutmayacağım da.', 'kararli'],
                  ] },
                ] },
              ] },
            gelin_odasi: { kisi: 'gelin', ipucu: 'Gelin odasının kapısı aralık, gelin biraz yalnız kalmış (konuşma).',
              adimlar: [
                /* Tur 17 ek (madde 9): ana sahnenin ön izlemesi değil; küçük bir iyilik ya da gelinin kendi sırrı.
                   Gelin sonra kalabalıkta hangisini yaptığımı hatırlar. */
                ['an', 'Gelin on altısındaydı. Kalabalık onu bir dakikalığına yalnız bırakmıştı; duvağı kaymıştı, düzeltmeye eli varmıyordu.'],
                ['gelin', 'Kıpırdarsam büsbütün kayacak. Annem görürse kızar.', 'endiseli'],
                { soru: 'Gelin aynadan bana bakıyor.', secim: [
                  { m: 'Duvağını düzelt.', bayrak: { p1_v_gelin: 'duvak' }, iz: 'Gelinin kayan duvağını düzelttin.', adimlar: [
                    'Duvağı düzelttim, iğnesini bir parmak geri taktım. Aynada yüzü açıldı.',
                    ['gelin', 'Oh. Sabahtan beri nefes alamıyordum.', 'ana'],
                  ] },
                  { m: 'Duvağa dokunma. Yanına otur, dinle.', bayrak: { p1_v_gelin: 'dinle' }, iz: 'Gelinin yanına oturup onu dinledin.', adimlar: [
                    ['gelin', 'Çeyizime kendi elimle bir mendil işledim. Köşesine adımı yazdım, kimse bilmiyor.', 'ana'],
                    ['ic', 'Adını bir mendilin köşesine saklayan bir kız daha varmış.', 'mahzun'],
                  ] },
                ] },
              ] },
          },
          bitis: ['İğne hâlâ Hatice\'de. Bahçeden Perihan Hanım\'ın sesi geliyor, adımı söylüyor.'],
        } },
        /* Tur 27 (B1 anlatı 10'a): doruktan önce tek "öte yanda" sayfası; arabadaki ifşayı sırrı çözmeden kurar */
        /* Tur 27b (B1 ses 10'a-3): vakit bitişi Perihan'ın sesiyle; "öte yanda" sayfası onun temasında */
        /* Tur 29 (B1 anlatı 1): doruktan önce iki "öte yanda" sayfası art arda gelmesin; gül ağacı sayfası kalktı, cümlesi
           arka bahçenin açılışında anlatıcı satırı ("Onun gözünden" doruktan önceki tek öte yanda) */
        { ara: { yer: 'Öte yanda · gül ağacının dibi', satirlar: ['Feride gidince Perihan Hanım yabancı hanımın kulağına bir şey fısıldadı. Bileziğe bakan hanım yelpazesiyle bahçe kapısındaki yaldızlı kupayı gösterdi, sonra gülümsedi.'] } },
        { gorev: 3 },
      ],
    },

    /* ---------------- 4. Arka bahçe: ilk koz ---------------- */
    {
      id: 'p1_reftar', mekan: 'dugun_kose', tetik: 'giris', kosul: (S) => S.gorev === 3, sahne: ['reftar', 'nabi'],
      adimlar: [
        /* Tur 31: gül ağacının dibindeki fısıltı 'Öte yanda' ara sayfasına taşındı (p1_calibe sonu) */
        /* Tur 33 (B1 ses 1): ses.js'teki olay parçası (gerilim) burada susar; çeşme sahnesi yalnız bahçe ortamı ve
           çakılda ayak sesi. Gerilim gelin odasındaki koz anına ve doruğa kalır. */
        { muzik: 'sessiz' }, { ortam: 'o_dugun' },
        { efekt: 'adim_cakil' },
        ['an', 'Yelpazelerin sesi arkada kaldı; Feride hizmetçilerin kullandığı arka bahçeye geçti.'],
        /* Tur 27 (B1 anlatı 3): konum raporu değil, sahnenin gösteremediği bilgi */
        /* Tur 28 (B1 anlatı 3; GPT A2): özne açık; ilişkinin sırrı sahnede, anlatıcıda değil */
        ['an', 'Çeşmenin başında Hatice ile Nabi Bey konuşuyordu.'],
        ['nabi', 'Akşam arka kapı açık kalsın.', 'notr'],
        ['reftar', 'Hanım duyarsa beni kapı dışarı eder.', 'korkmus'],
        /* Tur 28 (B1 sürük 1): ifşanın yarısı ortada duyulur; arabada öbür yarısı (kime, iki gün) */
        /* GPT T29 (B1-S1): ortada yalnız şüphe; aday arayışı finalde ilk kez kesinleşir */
        ['nabi', 'Ablam mı? Ablam bugün iki yabancı hanımdan başkasını görmüyor.', 'gulumser'],
        ['ic', 'Beni görmediler. Hatice neden arka kapıyı açık bırakacak?', 'saskin'],
        { soru: 'Ne yapacağım?', secim: [
          { m: 'Sessizce dinle.', bayrak: { p_reftar: 'izledi' }, iz: 'Arka bahçenin sırrını gördün, seni gören olmadı.', adimlar: [
            ['nabi', 'Bu da senin. Sakla.', 'ana'],
            'Hatice\'nin avucunda bir şey parladı. Bir yüzük.',
            { koz: 'Hatice ile Nabi Bey', kaynak: 'Kendim gördüm', alt:'Gece açık kalan arka kapı, avuçta bir yüzük. Perihan Hanım bilmiyor. Yüzüne açarsan sır olmaktan çıkar, ama bildiğin sende kalır.' },
          ] },
          { m: '“Hatice! Hanımın seni arıyor.”', bayrak: { p_reftar: 'seslendi' }, iz: 'Hatice\'yi adıyla çağırdın. Bunu unutmayacak.', adimlar: [
            ['f', 'Hatice! Hanımın seni arıyor.', 'kararli'],
            ['nabi', 'Küçük hanım! Biz de… çeşmeye bakıyorduk.', 'mahcup'],
            /* Tur 28 (B1 görsel 5): fondaki çeşme akıyor; metin resmi yalanlamaz */
            ['ic', 'Çeşmenin başındalar ama ellerinde ne testi var ne bardak.', 'kararli'],
            ['reftar', 'İğneyi götürüyorum küçük hanım.', 'somurtkan'],
            'Yanımdan geçerken yüzüme baktı, dudağını ısırdı.',
          ] },
          { m: 'Geri dön. Görmemiş ol.', bayrak: { p_reftar: 'dondu' }, iz: 'Görmemiş oldun. Kimse sana soramaz.', adimlar: [
            ['ic', 'Başımı çevirip geri döndüm. Bu işe karışmayacağım.', 'endiseli'],
          ] },
        ] },
        /* Oynanış T1 (B5, B1 öneri 1): süreli keşif. Dinlemeyen oyuncu da arka bahçeden bir iz alabilir;
           p1_k_kutu 2. bölümde Nimet'in yüzük dedikodusunda okunur (kutuyla açılan seçenek, daha sağlam koz kaynağı). */
        /* Tur 27 (GPT O2): keşif okuma hızıyla yarışmaz; rota kararına dek açık kalır (motor: sonraki seçimde kalkar) */
        { eger: (S) => S.bayrak.p_reftar !== 'izledi', ise: [
          'Yalağın dibinde kırmızı bir şey parladı. Perihan Hanım\'ın sesi bahçeden geliyor; eğilsem mi?',
          /* Tur 28 (B1 oynanış 3): nokta fondaki çeşmenin üstünde (sağda), çalılıkta değil */
          { kesif: { x: 80, y: 42, w: 12, h: 22, ad: 'Çeşmenin taşı', adimlar: [
            'Eğildim. Kırmızı kadifeden boş bir yüzük kutusu.',
            /* Tur 30 (GPT B1 A2; şüphe ≠ hüküm): boş kutu verilişi kanıtlamaz */
            ['ic', 'Kutu boş. Yüzük kimin parmağına gitti acaba?', 'saskin'],
            { bayrak: { p1_k_kutu: true } },
          ] } },
        ] },
        /* Tur 32 (B1 sürük 3): dolgu satırı ("aklımı toplamalıyım") kalktı */
        /* Tur 28 (B1 anlatı 1, oynanış 10'a; GPT O1): oyuncu kimi bulmaya gittiğini bilerek seçer */
        'Merdivenden Şefik\'in gülüşü ve bir erkek sesi geliyor. Limonluğun camında da bir fes gölgesi var.',
        /* Tur 27 (B1 sürük 5; GPT O1): sezonun en ağır seçiminde süre ve kapsam: yalnız birine */
        'Perihan Hanım beni çoktan bekliyordur.',
        /* Tur 29 (B1 oynanış 2): sezonun iki adaylı yol ayrımı bilinçli olarak iki seçenekli; bedeli soruda söylenir */
        { soru: 'Hangisine? İkisine vaktim yok.', secim: [
          { m: 'Merdivene. Şefik\'in sesi oradan geliyor, bir de tanıdık bir erkek sesi.', bayrak: { p_rota: 'mukaddem' } },
          { m: 'Limonluğa. Kalabalıktan biraz kaçayım.', bayrak: { p_rota: 'suha' } },
          /* Tur 32 (B1 oynanış 1): açık ret. Feride ikisine de gitmez; karşılaşma Süha'nın hamlesi olur, onun isteği
             değil (p_rota 'suha' 2–4. bölümde yalnız karşılaşma hafızası; p1_rota_ret yalnız bu bölümde okunur) */
          /* Tur 33 (B1 anlatı 1): seçenek kaçış vaat etmez; dönüş yolu limonluğun önünden geçer */
          { m: 'İkisine de gitme. Bahçeye dön, limonluğun önünden geçmen gerekecek.', bayrak: { p_rota: 'suha', p1_rota_ret: true } },
        ] },
        { gorev: 4 },
        { eger: (S) => S.bayrak.p_rota === 'mukaddem', ise: [
          { ara: { mekan: 'mabeyn_merdiven', yer: 'Düğün evi · ara kapı', satirlar: [
            /* GPT T25 Kenan (B1 anlatı 2): yönsüz; kimin hangi uçta olduğunu sahne söyler */
            'Harem ile selamlığı dar bir merdiven bağlıyordu. Basamaklarda kimse yoktu, yukarıdan bir çocuk gülüşü geliyordu.',
          ] } },
        ], degilse: [{ eger: (S) => !!S.bayrak.p1_rota_ret, ise: [
          { ara: { mekan: 'limonluk', yer: 'Düğün evi · limonluğun önü', satirlar: [
            'Feride gül ağacına dönen yolu tuttu. Limonluğun önünden geçerken cam kapı içeriden açıldı.',
            'Kapıyı açan el çekilmedi. Bahçeye dönmek için o eşiğin önünden geçmek gerekiyordu.',
          ] } },
        ], degilse: [
          { ara: { mekan: 'limonluk', yer: 'Düğün evi · limonluk', satirlar: [
            'Limonluk düğün evinin unutulmuş köşesiydi. Camların ardında bahçenin gürültüsü boğuklaşıyordu.',
            'Burada kimse Feride\'yi tartmıyordu.',
          ] } },
        ] }] },
      ],
    },

    /* ---------------- 5A. Merdiven başı: Kenan ---------------- */
    {
      id: 'p1_mukaddem', mekan: 'mabeyn_merdiven', tetik: 'giris', kosul: (S) => S.gorev === 4, sahne: [],
      adimlar: [
        { efekt: 'adim' },
        'Merdivenin ilk basamağında durdum. Yukarıdan bir ses geliyor.',
        ['ses', '“…Kadı sormuş: Bu eşek kimin? Hoca demiş: Anırsın, sahibi sesinden tanır.”'],
        ['an', 'Şefik\'in kahkahası merdivenden aşağı yuvarlandı. Feride\'nin on bir yaşındaki kardeşi, kitap getiren herkese gönlünü verirdi.'],
        ['ic', 'Öbür sesi tanıyorum. Çocukken bana masal okuyan ses bu, yalnız kalınlaşmış.', 'utanmis'],
        { goster: ['sefik', 'sevincli'] },
        ['sefik', 'Abla! Bak kim gelmiş!', 'sevincli'],
        /* Tur 27 (B1 anlatı 10'a): Kenan'ın girişine sahnenin gösteremediği bir geçmiş */
        /* Tur 28 (B1 anlatı 4): "o günden beri" tek anlamlı; Şefik'e giden kitap sitemi önceden hazırlar */
        ['an', 'Kenan söz kesildiğinden beri kitaplarını yalnız Şefik\'e yollardı.'],
        /* Tur 32 (B1 görsel 6): ana portre sırıtıyor; merdivendeki çekingen adam elinde kitapla */
        { goster: ['mukaddem', 'utangac'] },
        /* Tur 30 (GPT B1 A1): karşılaşma istek değildir; seçimden önceki iç ses nötr, utanma seçilen flörtten sonra */
        ['ic', 'Aramızda merdiven var.', 'dusunceli'],
        { soru: 'Göz göze geldik.', secim: [
          { m: 'Gözlerimi kaçır.', etki: { mukaddem: 4 }, bayrak: { p_bakis: 'kacirdi' }, adimlar: [
            'Yere baktım. O da aynı basamağa baktı.',
          ] },
          { m: 'Bak.', etki: { mukaddem: 7 }, bayrak: { p_bakis: 'bakti' }, adimlar: [
            'Baktım. İlk kaçıran o oldu.',
          ] },
          { m: 'Gülümse.', etki: { mukaddem: 9 }, bayrak: { p_bakis: 'guldu', p1_kenan_istek: true }, adimlar: [
            { goster: ['mukaddem', 'utangac'] },
            ['ic', 'Gülümsedim. Kulaklarına kadar kızardı.', 'tebessum'],
          ] }, { m: 'Başını çevir, Şefik\'e seslen.', etki: { vakar: 1 }, bayrak: { p_bakis: 'cevirdi' }, adimlar: [ 'Başımı çevirip Şefik\'e seslendim: “Aşağı in, hanımlar seni soruyor.”' ] },
        ] },
        { eger: (S) => S.giyili === 'nisan_yadigar', ise: [
          ['mukaddem', 'Bu mavi… Hatırlıyorum. Annenizindi.', 'utangac'],
        ], degilse: [{ eger: (S) => S.bayrak.p_madalyon === 'acik', ise: [
          'Gözü göğsümdeki madalyona gitti, hemen çekildi.',
          ['mukaddem', 'Behiye Hanım\'ın madalyonu. Yakışmış.', 'gulumser'],
        ], degilse: [
          ['mukaddem', 'Feride Hanım.', 'utangac'],
          ['ic', 'Yalnız adımı söyledi. Bir yıldır biriktirmiş gibi.', 'utanmis'],
        ] }] },
        ['mukaddem', 'Şefik\'e kitap getirdim, gülsün diye.', 'gulumser'],
        /* Tur 28 (B1 görsel 3): an_merdiven'de kitap Kenan'ın elinde */
        ['an', 'Kenan kitabı açıp ithafı Feride\'ye doğru çevirdi. Mürekkep tazeydi, parmağında da izi kalmıştı.'],
        { soru: 'Ne diyeceğim?', secim: [
          /* Tur 30 (GPT B1 A1): p1_kenan_istek = Feride'nin seçtiği açık flört (karşılaşma bayrağı p_rota'dan ayrı) */
          { m: '“Yazınız güzelleşmiş. İthafı gördüm.”', etki: { mukaddem: 8 }, bayrak: { p1_kenan_istek: true }, adimlar: [
            ['f', 'Yazınız güzelleşmiş. İthafı gördüm.', 'tebessum'],
            ['mukaddem', 'Güzel yazmaya çalıştım. Kimin okuyacağını bildiğim için.', 'utangac'],
            ['ic', 'Şefik\'in adını okurken bana baktı. İthafı bir daha okumak istedim.', 'utanmis'],
          ] },
          { m: '“Kardeşimi şımartıyorsunuz Kenan Bey.”', etki: { mukaddem: 7 }, bayrak: { p1_kenan_istek: true }, adimlar: [
            ['f', 'Kardeşimi şımartıyorsunuz Kenan Bey.', 'tebessum'],
            /* Tur 27 (GPT D2): çekingen Kenan aileye hüküm vermez; yarım kalan dilek */
            ['mukaddem', 'Şımarsın. Bir de sizi güldürse…', 'gulumser'],
            /* Diyalog T1 (1.1): cevap Kenan'ın sözüne bağlanır; Şefik'in "Evet!"i anlam kazanır */
            ['f', 'Gülmeyen ben miyim?', 'gulumseyen'],
            'Cevap veremedi. Şefik verdi: “Evet!”',
          ] },
          { m: '“Teşekkür ederim.”', etki: { mukaddem: 2 }, adimlar: [
            ['f', 'Teşekkür ederim.', 'utanmis'],
            'Başını eğdi. Dudakları kıpırdadı, ses çıkmadı.',
          ] },
          /* Oynanış T1 (B3): Kenan için eksi seçenek; sitem 2. bölümde pusulada karşılık bulur (p1_sitem) */
          { m: '“Bir yıl tek satır yok. Kitap da Şefik\'e mi?”', etki: { mukaddem: -3, vakar: 1 }, bayrak: { p1_sitem: true }, iz: 'Kenan\'a bir yılın sitemini ettin. Kızardı ama kaçmadı.', adimlar: [
            ['f', 'Bir yıl tek satır yazmadınız. Kitap da Şefik\'e mi?', 'mahzun'],
            /* Tur 28 (GPT B1 A1): somut engel; Feride'nin hesabı yazar tarafından kapatılmaz */
            ['mukaddem', 'Annem, söz kesilince beklememi istedi. Size yazmak bana düşmezdi.', 'mahzun'],
            /* GPT T29 (B1-D1): Feride gerekçeyi duyar; gerilim yasak ile Kenan'ın kendi iradesi arasında */
            ['ic', 'Annesi beklemesini istemiş. Kendisi ne istemiş, onu söylemedi.', 'mahzun'],
          ] },
        ] },
        /* Tur 29 (B1 görsel 2): an_merdiven'de Şefik yok; resimden önce sahneden çıkar */
        { gizle: 'sefik' },
        ['an', 'Selamlıktan biri Şefik\'i çağırdı. Çocuk basamakları ikişer ikişer çıkıp gözden kayboldu.'],
        { goster: ['kitap', 'ana'] },
        /* GPT T25 Kenan (B1 anlatı 3): dış hareket anlatıcıda; Feride'de öznel çıkarım kalır */
        /* Tur 27 (B1 oynanış 1): an_merdiven'de yasemin Feride'nin avucunda; resim her dalla uyuşsun diye avuca
           alma anlatıcıda, resim seçimden önce. Seçenekler avuçtaki yaseminle ne yapılacağını sorar. */
        { efekt: 'kagit' },
        ['an', 'Kenan sayfayı çevirirken arasından kurumuş bir yasemin düştü. Feride eğilip onu avucuna aldı.'],
        ['ic', 'Bizim bahçenin yasemini bu, geçen yazdan kalma.', 'utanmis'],
        { cizim: 'an_merdiven' },
        { soru: 'Yasemin avucumda.', secim: [
          { m: 'Avucunda sakla.', etki: { mukaddem: 7 }, bayrak: { p_yasemin: 'sakla', p1_kenan_istek: true }, adimlar: [
            ['mukaddem', 'Onu… orada unutmuşum.', 'utangac'],
            ['f', 'Öyleyse bende kalsın. Siz yine unutursunuz.', 'tebessum'],
          ] },
          { m: 'Kitabın arasına geri koy.', etki: { mukaddem: 4 }, bayrak: { p_yasemin: 'geri' }, adimlar: [
            /* GPT Tur 24 Remzi (kısmi): temkinli seçim yakınlık itirafına dönmesin */
            'Aynı sayfaya koyup kapağı kapattım. Bir yıl orada durmuş, yine dursun.',
          ] },
          { m: '“Bu sizin mi?”', etki: { mukaddem: 6 }, bayrak: { p_yasemin: 'sordu' }, adimlar: [
            ['f', 'Bu sizin mi?', 'tebessum'],
            ['mukaddem', 'Sizin bahçenizin. Benim sayılmaz.', 'utangac'],
            ['ic', 'Öyleyse neden bir yıl saklamış?', 'utanmis'],
            /* GPT T29 (B1-A2): yaseminin son yeri; 2. bölüm onu kitapta bulur */
            'Yasemini kitabın açık sayfasına bıraktım. Cevabını yüzünden okuyamadım.',
          ] },
        ] },
        /* Tur 28 (B1 anlatı 5): öğüt yerine Kenan'ın bir yıllık suskunluğunun gerekçesi */
        ['an', 'Bahçe kapısından Münevver Hanım\'ın sesi oğlunu çağırdı. Söz kesileli beri oğlunu düğün evlerinde yanından ayırmıyordu.'],
        ['mukaddem', 'Annem. Gitmeliyim. Feride Hanım…', 'mahzun'], // Tur 27b (B1 görsel 6): veda kendi yüzüyle
        /* Doğrulama gece (B1 #12, 13 satır): "Cümleyi bitirmedi." düştü; üç nokta ve Feride'nin cevabı söylüyor */
        /* Sürükleyicilik T1 (B1-6): anı çağrı değil, Feride'nin son sözü kapatır */
        /* Diyalog T1 (1.2, D8): kitabı zaten getirdi; Feride yarım cümleyi ister */
        /* Tur 28 (GPT B1 S2): veda sahnedeki tavra göre; sitem eden ya da mesafe koyan aynı flörtü söylemez */
        { eger: (S) => !!S.bayrak.p1_sitem, ise: [
          ['f', 'Gelecek sefer kitabı bana getirin. Bir yılın cevabını da.', 'kararli'],
        /* Tur 30 (GPT B1 A1): davetli veda yalnız Feride'nin seçtiği açık flörtte (p1_kenan_istek); nötr seçimler
           (bak, teşekkür, kitaba geri koy, soru) nötr vedaya gider */
        ], degilse: [{ eger: (S) => !!S.bayrak.p1_kenan_istek, ise: [
          ['f', 'Cümlenin gerisini saklayın Kenan Bey. Gelecek sefer kitapla getirirsiniz.', 'tebessum'],
        ], degilse: [
          ['f', 'Şefik kitabını unutmasın Kenan Bey.', 'mahzun'],
        ] }] },
        { gizle: 'mukaddem' }, { gizle: 'sefik' },
        /* "Onun gözünden": anlatıcının ara sayfası (merdiven bulanık, Kenan'ın yeri) */
        { ara: { yer: 'Onun gözünden', satirlar: [
          /* Doğrulama gece (B1 #12): iki satır bire indi */
          /* Tur 29 (B1 anlatı 3): satır başına bir cümle */
          /* Tur 30 (B1 sürük 10'a; ritim, ara sayfa dahil 15 → 13): Kenan dalında "Onun gözünden" tek satır */
          'Kenan inemediği dört basamağa bir kez daha baktı. Çocukken “Feride” derdi; bugün ağzından “Hanım”sız tek söz çıkmamıştı.',
        ] } },
        { gorev: 5 },
        /* GPT T25 Kenan (B1 anlatı 1b, 10'a-2): ilk satır duyguyu taşır; gelenek tek cümle */
        /* Tur 29 (B1 anlatı 2): 25 kelimeyi aşan satır ikiye bölündü. Tur 30 (ritim): dönüş satırı çıktı; yarım cümle
           yukarıdaki "Onun gözünden"de */
        { ara: { mekan: 'gelin_odasi', yer: 'Düğün evi · gelin odası', satirlar: [
          'Gelin odası tül, gül suyu ve korku kokuyordu. Kızlar sırayla gelinin kulağına dilek fısıldıyordu.',
        ] } },
      ],
    },

    /* ---------------- 5B. Limonluk: Süha ---------------- */
    {
      id: 'p1_suha', mekan: 'limonluk', tetik: 'giris', kosul: (S) => S.gorev === 4, sahne: [],
      adimlar: [
        { efekt: 'kapi_kapa' },
        /* Tur 32 (B1 oynanış 1): ret dalında kapıyı açan Süha'dır; Feride içeri kendi isteğiyle girmez, yolu kesilir */
        { eger: (S) => !!S.bayrak.p1_rota_ret, ise: [
          'Eşiği geçerken önüme dikildi. Cam kapıyı arkamdan o kapattı.',
          ['ic', 'Bahçeye dönüyordum. Şimdi limon kokusunun içindeyim.', 'endiseli'],
        ], degilse: [
          'Limonluk ılık. Cam kapıyı ardımdan kapadım.',
          ['ic', 'Camdaki gölge yok olmuş. Yanıldım mı?', 'saskin'],
        ] },
        ['an', 'Feride limon kolonyasının kokusunu tanıyordu.'],
        { goster: ['suha', 'notr'] },
        { eger: (S) => !!S.bayrak.p1_rota_ret, ise: [
          ['suha', 'Bahçeye dönüyordunuz. Bir dakika gecikseniz kimse fark etmez.', 'soguk'],
          /* Tur 33 (B1 anlatı 10'a): ret dalında Feride yolunu kendi açar; konuşma kapı açıkken sürer */
          'Döndüm, cam kapının mandalını kendim kaldırdım. Kapı ardına kadar açık kaldı.',
          ['f', 'Ben fark ederim Süha Bey. Sözlüyüm; yolumu kesmeyin.', 'kararli'],
        ], degilse: [
          ['suha', 'Yalnız değilsiniz. Kusura bakmayın, ben sizden önce kaçtım.', 'alayci'],
        ] },
        { eger: (S) => !S.bayrak.p1_rota_ret, ise: [
        { muzik: 'suha' },
        /* Tur 28b (kök 2): karşılaşma istek değildir; limonluğa gelen kızın zorunlu iç sesi çekim varsaymaz */
        ['ic', 'Çocukluğumdan beri “dayı” derim. Bunu şimdi de hatırlasın.', 'endiseli'],
        { eger: (S) => S.giyili === 'nisan_gosterisli', ise: [
          ['suha', 'Pembe size yakışmış. Söylememem gerekirdi, söyledim işte.', 'alayci'],
        ], degilse: [{ eger: (S) => S.giyili === 'nisan_yadigar', ise: [
          ['suha', 'Bu mavi eski bir kesim. Sizin üstünüzde yeni olmuş.', 'notr'],
        ], degilse: [
          ['suha', 'İnciler size yakışmış. Hekim gözüyle söylüyorum.', 'notr'],
          ['ic', 'Hekim gözü inciye bakar mı?', 'utanmis'],
        ] }] },
        ['suha', 'Renginiz uçmuş. Bileğinizi verin.', 'notr'],
        { soru: 'Elini uzatmış, bekliyor.', secim: [
          { m: 'Bileğini uzat.', etki: { suha: 8 }, bayrak: { p_bilek: 'verdi' }, adimlar: [
            { efekt: 'nabiz' },
            'İki parmağı bileğimde, gözü saatinde. Dakika çoktan doldu ama parmakları kalkmadı.',
            ['suha', 'Nabzınız hızlı. Sebebi kalabalıktır… umarım.', 'notr'], // Tur 28 (B1 diyalog 4): kutu iki cümle
            ['ic', 'Elini çekmesini bekledim. Nabzımı mı sayıyor, beni mi bekletiyor?', 'endiseli'],
          ] },
          { m: '“İyiyim dayı bey, bakmanıza gerek yok.”', etki: { suha: 4 }, bayrak: { p_bilek: 'dayi' }, adimlar: [
            ['f', 'İyiyim dayı bey, bakmanıza gerek yok.', 'kararli'],
            /* Tur 27b: Süha'nın bölümdeki tek alaysız gülüşü; Feride'nin gülmesi buna cevap (tehlike burada) */
            ['suha', '“Dayı.” Bu kelimeyi sizden her duyuşumda biraz yaşlanıyorum.', 'gulumser'],
            /* Tur 28b (kök 1–2): "dayı" bir sınırdır; ret dalının iç sesi onu gizli bir gülüşe çevirmez */
            ['ic', 'Gülmedim. Kelimeyi geri de almadım.', 'kararli'],
          ] },
          { m: '“Hekimlik bahane mi Süha Bey?”', etki: { suha: 9 }, bayrak: { p_bilek: 'bahane' }, adimlar: [
            ['f', 'Hekimlik bahane mi Süha Bey?', 'kararli'],
            ['suha', 'Bahane arasaydım daha iyisini bulurdum.', 'alayci'],
            'Elini indirdi. Sonra, alçak sesle: “…Belki.”',
          ] },
        ] },
        { goster: ['seker_kutusu', 'ana'] },
        /* Tur 27 (B1 anlatı 5, diyalog 4): dış olay anlatıcıda (bilinen bir huy); şerbet sözünün gerekçesi ve tehlike tohumu */
        ['an', 'Süha Bey cebinden bir şeker kutusu çıkardı; kapağını açıp Feride\'ye uzattı.'],
        ['suha', 'Düğün şerbetini içmeyin, kimin elinden geçtiği belli olmaz. Bunu alın.', 'notr'],
        /* Tur 27b (GPT P5): an_limonluk kutunun avuçta uzatıldığı anı gösterir; Feride'nin eli henüz karar vermemiş.
           Seçimden sonra gösterilince "Al"/"Perihan'a götürün" dallarında olmayan anı anlatıyordu; her dalda doğru
           olan an, seçimden hemen önce. */
        { cizim: 'an_limonluk' },
        /* Tur 29 (B1 görsel 1): resimde camın ardında pembe bir gölge var; metin onu yalanlamaz, ifşa sonra gelir */
        /* Tur 30 (B1 diyalog 2; karşılaşma ≠ istek): zorunlu iç ses kutuya çekim varsaymaz; dikkat Feride'nin */
        ['ic', 'Camın ardında pembe bir şey kıpırdadı. Kutuya değil, cama baktım.', 'endiseli'],
        { soru: 'Kutu avucunda, açık.', secim: [
          { m: 'Al.', etki: { suha: 5 }, bayrak: { p_seker: 'aldi' }, adimlar: [
            { gizle: 'seker_kutusu' },
            /* GPT T24b Süha (B1 10'a-1): Feride kutuyu sahiplenir; 2. bölümde Nazlı'nın aşırması kişisel ihlal olur */
            'Kutuyu aldım, kendi elimle kuşağıma soktum. Parmaklarımız değmedi, buna o dikkat etti.',
            /* Tur 30 (B1 diyalog 3): "Al" nezaket de olabilir; iç ses duygu yüklemez, farkındalık söyler */
            ['ic', 'Parmaklarını benimkilerden özenle uzak tuttu. Kimin gözünden sakınıyor?', 'saskin'],
          ] },
          /* Tur 30 (B1 oynanış 2): hazırlığa bağlı ek ret; camdaki gölgeyi gören kız bilgisini kullanır. Açık ret
             (Fransızca cümleden sonraki "Sözlü bir kıza bakılmaz") koşulsuz kalır. p_seker 'calibe' 2. bölümle uyumlu. */
          { m: '“Camın ardında Perihan Hanım var. Kutunuzu ona uzatın.”', etki: { suha: 2, calibe_suphe: 1 }, bayrak: { p_seker: 'calibe', p1_seker_cam: true }, iz: 'Kutuyu camdaki gölgeye havale ettin. İkisi de duydu.', adimlar: [
            ['f', 'Camın ardında Perihan Hanım var Süha Bey. Kutunuzu ona uzatın.', 'kararli'],
            ['suha', 'Gördünüz demek. Ben de gördüm, yine de size uzattım.', 'alayci'],
          ] },
          /* Tur 29 (B1 oynanış 1): ret kabulden çok gönül vermez; Süha'nın hoşlanması satırda görünür */
          { m: '“Teşekkür ederim, şeker sevmem.”', etki: { suha: 4 }, bayrak: { p_seker: 'reddetti' }, adimlar: [
            ['f', 'Teşekkür ederim, şeker sevmem.', 'kararli'],
            ['suha', 'Yalan. Ama güzel söylediniz.', 'alayci'],
            'Kutuyu limon saksısının kenarına bıraktı: “Burada dursun. Fikir değiştirirsiniz.”',
          ] },
          /* Oynanış T1 (B3): Süha için eksi seçenek; reddedilmeyi sever, Perihan'a havale edilmeyi sevmez */
          { m: '“Perihan Hanım\'a götürün. Şekeri o sever.”', etki: { suha: -3 }, bayrak: { p_seker: 'calibe' }, iz: 'Kutuyu Perihan Hanım\'a havale ettin. Gülümsemesi düştü.', adimlar: [
            ['f', 'Perihan Hanım\'a götürün. Şekeri o sever.', 'kararli'],
            'Yüzündeki gülüş bir an silindi.',
            ['suha', 'Perihan Hanım\'ın neyi sevdiğini benden iyi bilen yoktur.', 'mahzun'],
            ['ic', 'Perihan Hanım\'ın adını söylerken sesi değişti. Birbirlerini ne kadar tanıyorlar?', 'saskin'],
          ] },
        ] },
        /* Tur 28 (B1 sürük 10'a): limonlukta da süre işler */
        'Bahçede vals bitti. Birazdan herkes harem tarafına dönecek.',
        ['suha', 'Bu evlerde herkes birini seyreder Feride Hanım. Ben yalnız…', 'notr'],
        ['suha', '…je regarde où je ne devrais pas.', 'ana'],
        { soru: 'Cümleyi Fransızca bitirdi.', secim: [
          { m: '“Ne dediniz?”', etki: { suha: 3 }, adimlar: [
            ['f', 'Ne dediniz?', 'utanmis'],
            ['suha', 'Anladınız. Yüzünüz söyledi.', 'alayci'],
            ['ic', '“Bakmamam gereken yere bakıyorum.” Anladım.', 'utanmis'],
          ] },
          /* Tur 28 (B1 diyalog 1, oynanış 4): seçimin karşılığı Süha'nın tehlikeli sözünde görünür */
          { m: 'Anlamamış gibi yap.', adimlar: [
            ['ic', 'Anladım: “Bakmamam gereken yere bakıyorum.” Yüzümü hiç bozmadım.', 'kararli'],
            ['suha', 'Madam\'ın öğrencisi Fransızca bilmez mi? Peki, bilmeyin.', 'alayci'],
          ] },
          { m: 'Dön, kapıya yürü.', etki: { suha: 4, vakar: 1 }, adimlar: [
            ['ic', '“Bakmamam gereken yere bakıyorum.” Öyleyse bakmasın.', 'kararli'],
            { eger: (S) => S.bayrak.p_seker === 'aldi', ise: [
              ['suha', 'Kutuyu götürüyorsunuz ama. Demek benden bir şey alıyorsunuz.', 'alayci'],
              ['f', 'Şekeri. Gerisi sizde kalsın.', 'tebessum'],
            ], degilse: [
              ['suha', 'Kutuyu unuttunuz.', 'alayci'],
              ['f', 'Unutmadım.', 'kararli'],
            ] },
            'Arkamdan güldü. Kızacağına gülmüştü; bu daha kötüydü.',
          ] },
          /* Tur 28b (kök 1): açık ret Süha yolunda da ilk karşılaşmada söylenebilir; p1_suha_sinir 2–4. bölümde okunur.
             Süha'nın ilgisi artar (gönül kuralı: reddedilmekten hoşlanır), Feride'nin kabulü üretilmez. */
          { m: '“Sözlü bir kıza bakılmaz Süha Bey.”', etki: { suha: 3, vakar: 1 }, bayrak: { p1_suha_sinir: true }, iz: 'Süha Bey\'e sözlü olduğunu yüzüne söyledin, kapıyı da kendin açtın.', adimlar: [
            ['f', 'Sözlü bir kıza bakılmaz Süha Bey.', 'kararli'],
            ['suha', 'Bakılmaz. Ben de bakmam, yalnız görürüm.', 'alayci'],
            'Cam kapıyı kendim açtım. Arkamda limon kokusu kaldı, bir de alçak bir gülüş.',
          ] },
        ] },
        { muzik: 'perihan' }, // Tur 27 (B1 ses 4): camın ardındaki gölge; olay sonunda vals'a dönülür
        ['an', 'Camın ardındaki pembe beyaz dallı elbise dalgalandı, sonra ağır ağır uzaklaştı.'],
        ['ic', 'Perihan Hanım. Ne zamandır orada?', 'endiseli'],
        { bayrak: { p_goruldu: true } },
        { gizle: 'suha' }, { gizle: 'seker_kutusu' },
        /* "Onun gözünden": anlatıcının ara sayfası (limonluk bulanık, Süha'nın yeri) */
        { ara: { yer: 'Onun gözünden', satirlar: [
          /* GPT T24b Süha (B1-1): niyet kesinleşmez; "bana mı, Perihan'a mı?" sorusu açık kalır */
          /* Doğrulama gece (B1 #12): iki satır bire indi */
          (S) => 'Süha camdaki pembe beyaz gölgeyi Feride\'den önce görmüştü. Yine de Fransızca cümlesini ne yarıda bıraktı ne alçalttı. ' + (S.bayrak.p_seker === 'aldi'
            /* GPT T26 Süha (B1 anlatı 1): özlem hükmü kalktı; yalnız gözlenen davranış */
            ? 'Kutu artık kızın kuşağındaydı. Süha onun ardından cam kapı kapanana dek baktı.'
            : (S.bayrak.p_seker === 'reddetti'
              ? 'Kutu limon saksısının kenarında kaldı. Fikir değiştirmeyi kıza bırakmıştı.'
              : 'Kutuyu cebine koymadı. Avucunda tuttu.')),
        ] } },
        ], degilse: [
          { muzik: 'vals_uzak' },
          ['an', 'Feride bahçeye çıktı. Camın ardındaki pembe gölgeyi gördü, durmadı.'],
          { bayrak: { p_goruldu: true, p1_suha_sinir: true } },
          { gizle: 'suha' },
        ] },
        { gorev: 5 },
        { ara: { mekan: 'gelin_odasi', yer: 'Düğün evi · gelin odası', satirlar: [
          /* Tur 33 (B1 sürük 2): gelin odasının tül-gül suyu imgesi Kenan dalındaki ara sayfada; burada yinelenmez */
          'Feride, camın ardında kalan gölgeyi aklında taşıyarak harem tarafına döndü.',
        ] } },
      ],
    },

    /* ---------------- 6. Gelin odası ---------------- */
    {
      id: 'p1_gelin', mekan: 'gelin_odasi', tetik: 'giris', kosul: (S) => S.gorev === 5, sahne: ['gelin', 'fevkiye'],
      adimlar: [
        { muzik: 'vals_uzak' }, // Tur 32 (B1 ses 10'a): gelin odasında vals uzaktan, kapalı kapının ardından
        { eger: (S) => !!S.bayrak.p1_v_gelin, ise: [
          ['an', 'Az önce yalnız bulduğu kız şimdi kalabalığın ortasındaydı. Gelin Feride\'yi aynadaki yüzlerden önce tanıdı.'],
        ], degilse: [
          ['an', 'On altı yaşındaki gelin sabahtan beri tülün altında kıpırdamıyordu. Feride sırasını bekledi.'],
        ] },
        { eger: (S) => S.bayrak.p1_v_gelin === 'duvak', ise: [
          ['gelin', 'Duvağım senin taktığın gibi duruyor Feride, eğil bakayım.', 'ana'],
        ], degilse: [{ eger: (S) => S.bayrak.p1_v_gelin === 'dinle', ise: [
          ['gelin', 'Mendilim koynumda, adım da köşesinde. Eğil Feride.', 'ana'],
        ], degilse: [
          ['gelin', 'Feride, eğil. Kulağıma bir şey söyle.', 'ana'],
        ] }] },
        /* Tur 27 (B1 anlatı 6): sahnede portresi görünen Leyla'nın anlatıcı girişi */
        ['an', 'Leyla kızların sırasına çoktan girmiş, Feride\'ye yer tutuyordu.'],
        ['gelin', 'Onu hiç görmedim. Bu gece göreceğim.', 'endiseli'],
        { soru: 'Gelin elimi tutuyor.', secim: [
          /* Diyalog T1 (1.6): gelin "sen" diyor; Feride de akranına "sen" der */
          { m: '“Mesut ol.”', bayrak: { p_gelin: 'mesut' }, adimlar: [
            ['f', 'Mesut ol.', 'tebessum'],
            ['gelin', 'Herkes öyle diyor.', 'endiseli'],
            /* Tur 33 (B1 sürük 10'a): gelinin "bu gece"sine Feride'nin kendi "iki gün"ü */
          ] },
          { m: '“Korkuyor musun?”', etki: { itibar: 2 }, bayrak: { p_gelin: 'sordu' }, adimlar: [
            { muzik: 'sessiz' }, // Tur 28 (B1 ses 10'a): bölümün en içten satırı vals'tan ayrılır; Perihan girince onun teması
            ['f', 'Korkuyor musun?', 'mahzun'],
            ['gelin', 'Çok. Bunu soran ilk sensin.', 'endiseli'],
            'Elimi sıktı. Bırakmadı.',
          ] },
          { m: '“Ben de korkardım.”', bayrak: { p_gelin: 'korkar' }, adimlar: [
            ['f', 'Ben de korkardım.', 'mahzun'],
            ['gelin', 'Sen sözlünü tanıyorsun. Ne şanslısın.', 'ana'],
            { eger: (S) => S.bayrak.p_rota === 'mukaddem', ise: [
              ['ic', 'Çocukken tanırdım. Bugün dört basamak öteden yeniden tanıdım.', 'utanmis'],
            ], degilse: [
              ['ic', 'Çocukken tanırdım. Bir yıldır yüzünü görmedim.', 'mahzun'],
            ] },
          ] },
        ] },
        { efekt: 'kapi' },
        ['an', 'Kapıda Perihan Hanım belirdi. Yelpazesi durdu, arkasındaki iki kız sustu.'],
        { goster: ['calibe', 'soguk'] },
        ['calibe', 'Nerede kaldın kızım? İğne geldi, sen gelmedin.', 'soguk'],
        /* Tur 28 (B1 diyalog 10'a): pembe tafta Perihan'ın rengi; iğnesi */
        { eger: (S) => S.giyili === 'nisan_gosterisli', ise: [
          ['calibe', 'Pembe… Terzim sana da dikmiş demek. Ne tatlı.', 'sinsi'],
        ] },
        /* GPT T23 (Kenan 1b-2): arka bahçedeki seçimin aynı gün içinde küçük karşılığı */
        { eger: (S) => S.bayrak.p_reftar === 'seslendi', ise: [
          ['an', 'Perihan Hanım\'ın ardında Hatice duruyordu. Gözünü Feride\'den hiç ayırmadı.'],
        ], degilse: [{ eger: (S) => S.bayrak.p_reftar === 'izledi', ise: [
          ['an', 'Perihan Hanım\'ın ardında Hatice duruyordu. Bir eli hep önlüğünün cebindeydi.'],
        ] }] },
        { soru: 'Perihan Hanım cevap bekliyor.', secim: [
          { m: '“Merdivende Şefik\'in yanındaydım. Kenan Bey ona kitap getirmiş.”', kosul: (S) => S.bayrak.p_rota === 'mukaddem', etki: { calibe_suphe: 1 }, bayrak: { p_yalan: false }, adimlar: [
            ['f', 'Merdivende Şefik\'in yanındaydım efendim. Kenan Bey ona kitap getirmiş.', 'mahzun'],
            ['calibe', 'Kenan Bey mi? Ne tesadüf.', 'sinsi'],
            ['ic', '“Tesadüf” kelimesini çiğneyerek söyledi.', 'mahzun'],
          ] },
          { m: '“Limonlukta soluklandım. Süha Bey nabzıma baktı.”', kosul: (S) => S.bayrak.p_rota === 'suha' && S.bayrak.p_bilek === 'verdi', etki: { calibe_suphe: 1 }, bayrak: { p_yalan: false }, adimlar: [
            ['f', 'Limonlukta soluklandım efendim. Süha Bey nabzıma baktı.', 'mahzun'],
            ['calibe', 'Süha mı? Hekimdir, bakar.', 'soguk'],
            ['ic', 'Biliyordu. Söyleyip söylemeyeceğime bakıyordu.', 'endiseli'],
          ] },
          { m: '“Limonluğun önünden geçtim. İçeride kalmadım.”', kosul: (S) => !!S.bayrak.p1_rota_ret, etki: { calibe_suphe: 1 }, bayrak: { p_yalan: false }, adimlar: [
            ['f', 'Limonluğun önünden geçtim efendim. İçeride kalmadım.', 'kararli'],
          ] },
          { m: '“Limonlukta soluklandım. Süha Bey de oradaydı.”', kosul: (S) => S.bayrak.p_rota === 'suha' && !S.bayrak.p1_rota_ret && S.bayrak.p_bilek !== 'verdi', etki: { calibe_suphe: 1 }, bayrak: { p_yalan: false }, adimlar: [
            ['f', 'Limonlukta soluklandım efendim. Süha Bey de oradaydı.', 'mahzun'],
            ['calibe', 'Süha mı? Ne konuştunuz bakalım?', 'soguk'],
            ['f', 'Hekimlikten efendim.', 'mahzun'],
            ['ic', 'Biliyordu. Söyleyip söylemeyeceğime bakıyordu.', 'endiseli'],
          ] },
          { m: '“Hatice\'yi aradım, bulamadım.”', bayrak: { p_yalan: true }, iz: 'Perihan Hanım\'a yalan söyledin. Biri bunu hatırlatacak.', adimlar: [
            ['f', 'Hatice\'yi aradım, bulamadım efendim.', 'mahzun'],
            /* Diyalog T1 (1.5, D6): arka bahçede Hatice'yi adıyla çağırdıysa yalan o an yakalanır (koşul aynı, metin dallanır) */
            { eger: (S) => S.bayrak.p_reftar === 'seslendi', ise: [
              ['calibe', 'Bulamadın mı? Hatice iğneyle senden önce geldi.', 'sinsi'],
              ['ic', 'Yalanım Perihan Hanım\'ın ardında duruyordu. Hatice de duydu.', 'endiseli'],
            ], degilse: [
              ['calibe', 'Bulamadın. Peki.', 'soguk'],
              { eger: (S) => !!S.bayrak.p_goruldu, ise: [
                ['ic', 'Camın ardından beni görmüştü. Yalanımı biliyor.', 'endiseli'],
              ], degilse: [
                ['ic', 'İnandı mı? Yüzünden okunmuyor.', 'endiseli'],
              ] },
            ] },
          ] },
          /* Oynanış T1 (B1): koz seçeneği görünür; kozu olmayan kilitli görür ("Gerekli: Hatice ile Nabi Bey") */
          /* GPT T26 Süha (B1 oynanış 2, öncelik 1-2): Hatice'yi adıyla çağıran oyuncu sırrı zaten bozdu; ona kilit
             gösterilmez. Kullanınca bildiği kalır, gizliliğin gücü harcanır (gerekçe satırı); Hatice'nin yüzünde anlık bedel. */
          { m: '“Hatice meşguldü efendim. Nabi Bey\'le konuşuyordu.”', kozGerek: 'Hatice ile Nabi Bey', kilitGoster: (S) => S.bayrak.p_reftar !== 'seslendi', etki: { calibe_suphe: 2 }, bayrak: { p_yalan: false, p_koz_yandi: true }, iz: 'Kozunu Perihan Hanım\'ın yüzüne açtın. Bildiğin sende kaldı ama artık sır değil.', adimlar: [
            ['f', 'Hatice meşguldü efendim. Nabi Bey\'le konuşuyordu.', 'kararli'],
            { muzik: 'gerilim' }, // Tur 27 (B1 ses 1): kozun yandığı an
            'Perihan Hanım\'ın yelpazesi avucunda kapandı. Ardında Hatice\'nin eli önlüğünün cebinde kaskatı kaldı.',
            /* Tur 27 (B1 görsel 10'a): bedel yüzde görünür */
            { goster: ['reftar', 'somurtkan'] },
            ['calibe', 'Nabi mi?', 'saskin'],
            { kozYak: 'Hatice ile Nabi Bey' },
            ['ic', 'Söyledim işte. Hatice bundan sonra bana bir bardak su bile getirmez.', 'kararli'],
            { gizle: 'reftar' },
          ] },
          /* GPT T29 (B1-O1): Hatice'yi adıyla çağıran kız, gördüğü konuşmayı koz istemeden söyleyebilir. Yüzük iddiası yok,
             koz yanmaz (kozAcik yazılmaz); Perihan'ın yüzüne açılan bilgi olarak p_koz_yandi, kaynak ayrımı için p1_konusma */
          { m: 'Gördüğünü söyle: Hatice, Nabi Bey\'le konuşuyordu.', kosul: (S) => S.bayrak.p_reftar === 'seslendi', etki: { calibe_suphe: 2 }, bayrak: { p_yalan: false, p_koz_yandi: true, p1_konusma: true }, iz: 'Çeşmedeki konuşmayı Perihan Hanım\'ın yüzüne söyledin, fazlasını değil.', adimlar: [
            ['f', 'Hatice meşguldü efendim. Çeşmenin başında Nabi Bey\'le konuşuyordu.', 'kararli'],
            { muzik: 'gerilim' },
            'Perihan Hanım\'ın yelpazesi avucunda kapandı. Ardında Hatice gözünü yere indirdi.',
            ['calibe', 'Nabi mi? Çeşmede ne işi varmış?', 'saskin'],
            ['ic', 'Gördüğümü söyledim, fazlasını değil. Artık benden sakınacak.', 'kararli'],
          ] },
        ] },
        /* Anlatı T2 (b1_2_3 b3): Leyla'ya sorulan soru aynı gün karşılığını bulur.
           Tur 28 (B1 anlatı 6): Leyla, Kenan'ı gördüğünü Perihan'ın önünde ele vermez; fısıldar.
           Tur 28 (B1 oynanış 2; GPT O2): şahit istenip verilmeyen yolda Leyla Perihan'ın yanında kalmıştı; duyduğunu getirir */
        { eger: (S) => !!S.bayrak.p1_boz_leyla || (S.bayrak.p_fevkiye === 'sordu' && S.bayrak.p_rota === 'mukaddem'), ise: [
          ['an', 'Leyla, Perihan Hanım arkasını dönünce Feride\'nin kulağına eğildi.'],
          { eger: (S) => !!S.bayrak.p1_boz_leyla, ise: [
            ['fevkiye', 'Sen gidince bileziğe bakan hanım seni iki kez sordu. Oğlu da kapıda bekliyormuş.', 'endiseli'],
          ] },
          { eger: (S) => S.bayrak.p_fevkiye === 'sordu' && S.bayrak.p_rota === 'mukaddem', ise: [
            ['fevkiye', 'Koyu kahveymiş, ben söylemiştim. Hadi, arabalar gelmiş.', 'gulumser'],
          ], degilse: [
            ['fevkiye', 'Arabalar gelmiş. Hadi.', 'ana'],
          ] },
        ], degilse: [
          ['fevkiye', 'Arabalar gelmiş. Hadi.', 'ana'],
        ] },
        { gorev: 6 },
        { ara: { mekan: 'konak_kapi', yer: 'Düğün evi · akşamüstü', satirlar: [
          /* Tur 30 (B1 sürük 3, ritim): ara sayfa satırları sayılınca gelin odası → Remzi 15 satırdı; yeni zengin
             bilgisi 791'deki Remzi tanıtımında zaten var */
          'Akşamüstü arabalar kapının önüne dizildi. İnce perdeler bir kızın yüzünü gizliyor, sesini gizlemiyordu.',
        ] } },
      ],
    },

    /* ---------------- 7. Kapı: Remzi ---------------- */
    {
      id: 'p1_remzi', mekan: 'konak_kapi', tetik: 'giris', kosul: (S) => S.gorev === 6, sahne: [],
      adimlar: [
        /* Tur 27 (B1 anlatı 10'a): dış olay anlatıcıda; Feride'de görüş açısı */
        /* Tur 30 (B1 ses 1): 'cakil' cama atılan çakıldır, teker değil; kupanın tekerleri çakılda
           (t30_uretim_1_4.md S1 efekt_teker_cakil, ORTAK bağladı) */
        { efekt: 'teker_cakil' },
        ['an','Yaldızlı bir kupa, Sait Efendi\'nin arabasının önüne yan durmuştu.'],
        'Arabamıza bindim. Perdenin aralığından yalnız yaldız görünüyor.',
        ['arabaci', 'Yol verin beyim, hanımlar bekliyor.'],
        ['an', 'Kupadan genç bir adam indi.'],
        { goster: ['remzi', 'ana'] },
        /* Tur 29 (B1 diyalog 10'a): gösterişin fiyatı söylenir */
        ['remzi', 'Al şunu, sus. Bir mecidiye, beklemenin parası.', 'ana'],
        { soru: 'Arabamızın perdesi aralık.', secim: [
          { m: '“Yol parayla alınmaz beyefendi.”', etki: { remzi: 8 }, bayrak: { p_remzi: 'laf' }, adimlar: [
            ['f', 'Yol parayla alınmaz beyefendi.', 'kararli'],
            'Döndü. Perdenin aralığından yalnız gözlerimi görebildi.',
            ['remzi', 'Her şey parayla alınır hanımefendi. Yol, ucuzudur.', 'gulumser'],
            ['f', 'Öyleyse pahalısını henüz görmemişsiniz.', 'tebessum'],
            { goster: ['remzi', 'saskin'] },
            'Cevap veremedi; bastonunu daha sıkı kavradı.',
          ] },
          /* Tur 32 (B1 anlatı 5): inip nereye yürüdüğü belli; kupanın atının başına */
          { m: 'İn, kupanın atının başına yürü: “Çekin şunu.”', etki: { remzi: 7, itibar: -2 }, bayrak: { p_remzi: 'yurudu' }, adimlar: [
            'Eteğimi topladım, indim, atın başına kadar yürüdüm. Arabacısı dizgini kendiliğinden çekti.', // Tur 28 (B1 anlatı 7): bölümde ferace yok
            ['remzi', 'Hanımefendi, önünüzde çamur var.', 'gulumser'],
            ['f', 'Gördüm. Yolumda duruyor.', 'kararli'],
          ] },
          { m: 'Arabacıya: “Bekleriz. Acelesi olan utansın.”', etki: { remzi: 5, itibar: 2 }, bayrak: { p_remzi: 'bekledi' }, adimlar: [
            ['f', 'Bekleriz. Acelesi olan utansın.', 'kararli'],
            { goster: ['remzi', 'ana'] }, // Tur 32 (B1 görsel 4): mahcup portresi yok
            /* Tur 27b (GPT D 10'a-2): gösteriş vecizeyle değil davranışla; parayı yine de bırakır */
            'Sesimi duydu. Mecidiyeyi yine de arabacımızın avucuna bıraktı, özür yerine para.',
            ['an', 'Remzi Bey kendi arabacısına döndü.'], ['remzi', 'Çek kupayı.', 'kararli'],
          ] },
        ] },
        ['an', 'Sonra bizim arabacıya eğildi.'], ['remzi', 'Bu hanım kimin kızı?', 'gulumser'],
        /* Oynanış T1 (B3): Remzi için eksi seçenek; eski iç sesler seçime döndü. p1_remzi_ad 2. bölüm sofrasında okunur. */
        { soru: 'Kimin kızı olduğumu soruyor.', secim: [
          { m: 'Perdeyi indir. Cevap verme.', etki: { remzi: -3, vakar: 1 }, bayrak: { p1_remzi_ad: 'perde' }, iz: 'Remzi Bey\'in sorusu perdenin dışında kaldı.', adimlar: [
            { eger: (S) => S.bayrak.p_remzi === 'yurudu', ise: [
              ['ic', 'Arabamıza öbür kapıdan bindim, perdeyi indirdim. Çamur eteğimde kaldı, yüzümde değil.', 'tebessum'],
            ], degilse: [
              ['ic', 'Perdeyi indirdim. Sorusu da parası da dışarıda kaldı.', 'tebessum'],
            ] },
          ] },
          /* Tur 27 (GPT D1): "sözlü bir kızın" tamlaması anlamı bozuyordu; B2'deki "Sözlüyüm" geri çağrısı korunur */
          { m: '“Sözlü bir kızım, beyefendi.”', etki: { remzi: 3 }, bayrak: { p1_remzi_ad: 'sozlu' }, iz: 'Remzi Bey\'e sözlü olduğunu kendi ağzınla söyledin.', adimlar: [
            ['f', 'Sözlü bir kızım, beyefendi. Gerisi sizi ilgilendirmez.', 'kararli'],
            ['remzi', 'Sözlü demek. Yazık, beklemeye değerdi.', 'gulumser'],
          ] },
          /* Tur 28 (B1 diyalog 7): iki öfkeli cevaba üçüncü, alaycı strateji; 2. bölüm kulüp dedikodusunda okunur */
          { m: '“Yolunu kestiğiniz arabanın kızı.”', etki: { remzi: 6 }, bayrak: { p1_remzi_ad: 'yol' }, iz: 'Remzi Bey\'e kim olduğunu kendi yolundan söyledin.', adimlar: [
            ['f', 'Yolunu kestiğiniz arabanın kızı, beyefendi.', 'kararli'],
            ['remzi', 'O hâlde yol pahalıya geldi.', 'gulumser'],
          ] },
        ] },
        /* Tur 27 (B1 sürük 10'a): Remzi'nin son sözü arabadaki ifşayı hazırlar (kapıdaki adam, içerideki anne) */
        /* Tur 32 (B1 anlatı 1): Remzi bahçede değildi, bileziği bilemez; ifşa perde ardına kalır */
        ['remzi', 'Annem içeride, bir hanımla vedalaşıyor. O çıkmadan ben de bu kapıdan çıkmam.', 'ana'],
        { gizle: 'remzi' },
        { gorev: 7 },
        /* Tur 30 (t30 ORTAK B1–4 §1): araba duruyor; araba içi fonunun teker/nal döngüsü susar (ortam: null) */
        { ara: { mekan: 'araba_ici', ortam: null, yer: 'Düğün evinin kapısı · ayrılık vakti', satirlar: [
          /* GPT T25 Kenan (B1 sürük 4): Remzi'den finale geçiş tek satır */
          /* Tur 27 (B1 anlatı 7): araba_ici resminin penceresinde kupa duruyor; metin resme ve "Oğlum kapıdaydı"ya bağlanır */
          'Kupa kenara çekildi ama gitmedi. Hanımlar kapıda vedalaşmayı bir türlü bitiremiyordu.',
        ] } },
      ],
    },

    /* ---------------- 8. Kanca ve defter ---------------- */
    {
      id: 'p1_kanca', mekan: 'araba_ici', tetik: 'giris', kosul: (S) => S.gorev === 7, sahne: [],
      adimlar: [
        /* Sürükleyicilik T1 (S2, S3): kulak misafirliği Feride'nin kararı; doruk arabada Feride'nin sesli sözü,
           kart en sonda. Ayna tavrı ve defter cümlesi doruğun önüne alındı; "Dönüş yolu" ara sayfası kalktı. */
        /* Tur 27 (B1 ses 3; GPT SE2): iki ses sessizlikte duyulur; tehdit açılınca müzik dönmez, Perihan arabaya
           binince onun teması girer */
        /* Tur 30 (t30 ORTAK B1–4 §1): araba hâlâ kapıda duruyor; teker/nal döngüsü araba yola çıkınca döner */
        { ortam: null },
        { muzik: 'sessiz' },
        /* Tur 32 (B1 anlatı 6): tedbirli Perihan'ın perde dibinde konuşmasının gerekçesi */
        'Perdenin öbür yanında iki ses. Gözlerimi kapadım, uyur gibi yaptım.',
        ['an', 'Perihan Hanım perdenin ardındaki kızın uyuduğunu sandı. Sesini alçaltmadı.'],
        /* Anlatı T2 (b1_2_3 #4; karar A2): perde ardındaki hanım bahçedeki yabancıya bağlanır (Remzi'nin annesi; B15'te tanınır) */
        /* GPT T26 Süha (B1 anlatı 10'a-1): sabah "Perihan'ı izleyeceğim" diyen Feride sesleri kendisi tanır */
        { eger: (S) => S.bayrak.p_tavir === 'tetik', ise: [
          ['ic', 'Sabahtan beri izlediğim ses. Yanındakini de tanıdım: bileziğime bakan hanım.', 'kararli'],
        ], degilse: [
          ['an', 'Seslerden biri Perihan Hanım\'ındı, öteki bahçede Feride\'nin bileziğine bakan yabancı hanımın.'],
        ] },
        /* GPT T26 Süha (B1 oynanış 1): Perihan'a itirazın sahnede karşılığı; nezaketi görücüyü daha çok bağladı */
        { eger: (S) => S.bayrak.p_boz === true, ise: [
          /* Tur 30 (GPT B1 D1): görücü hanım bildiğini özetlemez; beğenisi ve şimdiki isteği (oğul kapıda bekliyor) */
          ['yabanci_hanim', 'Misafirler varken yanınızdan ayrılmak istemedi. Terbiyesini beğendim.'],
          ['yabanci_hanim', 'Oğlum kapıda bekliyor. Lakin kız sözlü dediler.'],
        ], degilse: [{ eger: (S) => !!S.bayrak.p1_boz_leyla, ise: [
          /* Tur 28 (B1 oynanış 2): şahit isteyen kızın hamlesi görücü hanımın hükmüne girer */
          ['yabanci_hanim', 'Yanına şahit istedi, siz vermediniz. Akıllı kızmış.'],
          ['yabanci_hanim', 'Oğlum kapıda bekliyor. Lakin kız sözlü dediler.'],
        ], degilse: [
          ['yabanci_hanim', 'Oğlum kapıda bekliyor, kızı beğendi, ben de beğendim. Lakin sözlü dediler.'],
        ] }] },
        /* Diyalog T1 (1.4, D6): ardındaki dört dalın "iki gün"ü burada duyulur; B2 açılışındaki alıntı aynı kalır */
        ['calibe', 'Gerdanlık henüz takılmadı hanımefendi. Efendinin fikrini değiştirmek için iki günümüz var.', 'sinsi'],
        ['calibe', 'Bu akşam efendiyle konuşurum.', 'sinsi'], // GPT T29 (B1-S1): ertelenen ihtimal değil, verilmiş karar
        /* Tur 30 (ritim, ara sayfa dahil 14 → 13): "Oğlu. Kapıdaki adam." çıktı; görücü hanım "Oğlum kapıda bekliyor" der */
        /* GPT T23 (Kenan 1b-1/3): sabah aynaya söylenen söz, akşamki bilgiyle karşılanır */
        { eger: (S) => S.bayrak.p_tavir === 'umut', ise: [
          { eger: (S) => S.bayrak.p_rota === 'mukaddem', ise: [
            ['ic', 'Sabah onu bir kez görmek yeter sanmıştım. Gördüm; bu sözü artık kimseye aldırtmam.', 'kararli'],
          ], degilse: [
            ['ic', 'Sabah onu bir kez göreyim demiştim. Göremedim, ama söz hâlâ benim.', 'mahzun'],
          ] },
        ], degilse: [{ eger: (S) => S.bayrak.p_tavir === 'dik', ise: [
          ['ic', 'Sabah kimse beni acındırmasın demiştim. Şimdi sözümü elimden almaya kalkıyorlar.', 'ofkeli'],
        ], degilse: [
          ['ic', 'Sabah gözüm onun üstünde olacak demiştim. Oldu, ne istediğini artık biliyorum.', 'kararli'],
        ] }] },
        /* GPT T25 Kenan (B1 sürük 3, 10'a-2/3): son karar deftere konu seçmek değil, Perihan'a yapılan hamle.
           Bayrak değerleri aynı (p_defter); 2. bölümün gece defteri bu cevabı yazar.
           Doruk: Feride duyduğunu söylemez; iki anlamlı bir sözle karşılık verir. */
        /* Tur 27 (B1 sürük 2): doruk sorusunda süre ve bedel; Perihan'ın yüzü bekliyor */
        { efekt: 'kapi_kapa' }, // Tur 28 (B1 ses 4): sessizlik → kapı → Perihan teması; doruğun girişi
        ['an', 'Perihan Hanım arabaya bindi, yelpazesini kucağına koydu.'],
        { goster: ['calibe', 'sinsi'] },
        /* Tur 32 (B1 ses 1): perihan teması bölümde üçüncü kez dönmez; doruk gerilimde, Perihan teması kanca kartında */
        { muzik: 'gerilim' },
        /* Tur 29 (B1 sürük 10'a, ses 10'a): süre bir nesnede ve seste. Tur 32 (B1 ses 2): kupa gelişindeki teker
           sesi burada yinelenmez; nalın çakılı eşelemesi */
        { efekt: 'nal' },
        'Atlar çakılı eşeledi. Söyleyeceksem şimdi söylemeliyim.',
        /* Tur 28 (B1 sürük 2): vurucu an sorusu kısa; süre ve bedel kalır. Tur 32 (B1 diyalog 11): sözdizimi */
        /* Tur 33 (B1 sürük 1): soruda susmanın da bir karşılığı var; seçenekler Perihan'ın elinden bir şey alır ya da verir */
        { soru: 'Susarsam akşam sofrada yalnız onun sözü konuşulur. Konuşursam benimki de.', secim: [
          /* Tur 29 (B1 diyalog 3): uzun seçeneklerde kısa niyet; söz f satırında */
          { m: 'Gerdanlık gününe Kenan\'ı sor.', kosul: (S) => S.bayrak.p_rota === 'mukaddem', etki: { calibe_suphe: 1 }, bayrak: { p_defter: 'mukaddem' }, iz: 'Kenan Bey\'in adını Perihan Hanım\'ın yüzüne söyledin.', adimlar: [
            { eger: (S) => S.bayrak.p_yasemin === 'sakla', ise: [
              /* Tur 30 (B1 görsel 2): an_perde'de eller boş; yasemin resimde görünmeyen yerde */
              'Yasemini kuşağıma sakladım.',
            ] },
            ['f', 'Münevver Hanım gerdanlığı takmaya gelince Kenan Bey de gelir mi efendim?', 'kararli'],
            /* Tur 28 (B1 sürük 2): bedel Perihan'ın yüzünde görünür */
            { goster: ['calibe', 'saskin'] }, // Tur 32 (B1 görsel 3): soguk portresi gülüyor; yenisi gelene dek
            'Yelpazesi durdu.',
            /* Tur 27 (B1 diyalog 2): gerdanlık kadınlar meclisidir; Kenan henüz sözlü, "damat" değil */
            ['calibe', 'O gün erkekler kapıdan girmez kızım. İki gün de kısa değildir.', 'soguk'], // Tur 33: toparlanmış, keskin cevap (calibe_soguk üretimde)
            /* Tur 29 (B1 sürük 1): Kenan dalında da Perihan'ın somut, geri dönülmez karşı hamlesi */
            { ortam: 'o_araba' }, // Tur 30 (t30 ORTAK B1–4 §1): araba yola çıkıyor
            'Yelpazesinin ucuyla arabacının camına iki kez vurdu. Araba Münevver Hanım\'ın sokağına sapmadan yokuşa yöneldi.',
            /* Tur 28 (B1 diyalog 5) */
            /* Tur 32 (B1 sürük 1): doruğun ardından Feride'nin somut planı */
            ['ic', 'Kenan\'ın adını onun yüzüne söyledim. Gerdanlıktan önce ona bir satır da yetiştireceğim.', 'kararli'],
          ] },
          /* Tur 28 (B1 sürük 3, oynanış 1): Kenan yolunda doruğa üçüncü strateji (gönülden); annenin adı.
             p_defter 'calibe' (2. bölüm geriye uyumlu), p1_defter_anne 2. bölüm gece defterinde ve sonNotu'nda okunur */
          { m: 'Annenin gelin yolunu sor.', kosul: (S) => S.bayrak.p_rota === 'mukaddem', etki: { calibe_suphe: 1 }, bayrak: { p_defter: 'calibe', p1_defter_anne: true }, iz: 'Arabada Perihan Hanım\'a annenin adını andırdın.', adimlar: [
            ['f', 'Annem de gelin giderken bu yokuştan mı geçmişti efendim?', 'mahzun'],
            /* Tur 29 (B1 diyalog 10'a): Perihan'ın atasözü kalıbı */
            ['calibe', 'Ölüyü yolda anan kız, düğünde ağlar kızım.', 'soguk'],
            { goster: ['calibe', 'saskin'] }, // Tur 32: "gülümsemesi düştü" gülen soguk portresiyle görünmesin
            ['ic', 'Gülümsemesi düştü. Annemi bu arabada ilk kez ben andım.', 'mahzun'],
          ] },
          { m: 'Münevver Hanım\'a selam yolla.', kosul: (S) => S.bayrak.p_rota !== 'mukaddem', bayrak: { p_defter: 'mukaddem' }, adimlar: [
            ['f', 'Kenan Bey\'i bugün göremedim efendim. Münevver Hanım\'a selamımı söyler misiniz?', 'tebessum'],
            ['calibe', 'Söylerim kızım. Münevver Hanım selamı benden duymaya alışkındır.', 'sinsi'],
            ['ic', 'Söylemeyecek. Söylese de benim selamım diye söylemez.', 'mahzun'],
          ] },
          { m: 'Limonluğun camlarını an.', kosul: (S) => S.bayrak.p_rota === 'suha', bayrak: { p_defter: 'suha' }, adimlar: [
            ['f', 'Limonluğun camları pek temizmiş efendim. İçerisi dışarıdan görünüyor.', 'kararli'],
            /* GPT T26 Süha (B1 sürük 1, diyalog 2): tek hedefli karşılık ve görünür bir hamle (Feride'nin yanını kapatır) */
            ['calibe', 'Görünür kızım. Bundan sonra nerede durduğuna ben bakarım.', 'sinsi'],
            'Yelpazesinin ucuyla benim yanımdaki perdeyi indirdi. Yol boyunca dışarısı bana kapalı kaldı.',
          ] },
          /* Tur 27 (B1 oynanış 10'a): rotaya bakmayan Remzi kapısı; kapıda Remzi'yi laflayarak yenen Feride sesleri
             birleştirir. p_defter 'remzi' 2. bölümde sofrada (Nabi) ve gece defterinde okunur. */
          /* GPT T29 (B1-O2): soru, gereken bilgiyi duyan her kıza açık (Remzi "Annem bu kapıdan çıkmadan gitmem" dedi,
             hanım "Oğlum kapıdaydı" dedi); önceki Remzi cevabı yalnız tonu değiştirir */
          { m: 'Kapıdaki beyin annesini sor.', etki: { calibe_suphe: 1 }, bayrak: { p_defter: 'remzi' }, iz: 'Perihan Hanım\'a perdenin ardındaki pazarlığı bildiğini sezdirdin.', adimlar: [
            ['f', 'Kapıdaki beyin annesi mi o hanım efendim? Pek nazik biri.', 'tebessum'],
            { goster: ['calibe', 'saskin'] },
            ['calibe', 'Hangi bey kızım? Ben kapıda bey görmedim.', 'sinsi'],
            ['ic', 'Gülümsemesi silindi; cevap vermeden önce yelpazesini açtı.', 'kararli'],
          ] },
          { m: 'Gerdanlığa kalan günleri say.', bayrak: { p_defter: 'calibe' }, adimlar: [
            ['f', 'Gerdanlığa iki gün kaldı efendim. Ben de sayıyorum.', 'kararli'],
            ['calibe', 'Sayarız kızım, iki gün kısa değildir. Münevver Hanım\'a haberleri de ben yollarım.', 'sinsi'],
            /* Tur 27 (GPT S1): düellonun karşı hamlesi; 2. bölümde Kenan'ın pusulasına yazılan satırla karşılanır */
            ['f', 'Yollayın efendim. Ben de bir satır eklerim.', 'tebessum'],
            /* GPT T29 (B1-S2): bu cevabın da görünen bedeli; 2. bölümde haberci gözetim altında */
            ['calibe', 'Öyleyse o satırı önce ben okuyacağım kızım.', 'sinsi'],
          ] },
        ] },
        /* Tur 27 (B1 sürük 4): gelin odasında koz yakılan yolda arabada karşılık; 2. bölüm açılışındaki hesaba bağlanır */
        { eger: (S) => !!S.bayrak.p_koz_yandi, ise: [
          ['calibe', 'Gelin odasında Nabi\'yi andın kızım. Akşam babana ben anlatırım, sen de dinlersin.', 'sinsi'],
          /* GPT T29 (B1-D2): "harp" hükmü ikinci kez kurulmaz; somut sonraki hamle */
          ['ic', 'Babamın önünde de söyleyeceğim. Bu kez o da dinleyecek.', 'kararli'],
        ] },
        /* Tur 28 (B1 görsel 4; GPT G2): an resmi araba hareket etmeden, Perihan karşıdayken. Perdeyi indirdiği dalda
           açık perdeli resim gösterilmez; an_perde_kapali (kayıt başta) çizilene dek o dalda resim atlanır */
        /* Tur 33 (B1 ses 2): doruğun resmi gerilimin içinde kaybolmaz; müzik kesilir, yelpaze kuru bir sesle kapanır */
        { muzik: 'sessiz' }, { efekt: 'tak' },
        { eger: (S) => S.bayrak.p_defter === 'suha', ise: [{ cizim: 'an_perde_kapali' }], degilse: [{ cizim: 'an_perde' }] },
        { gizle: 'calibe' },
        /* Tur 28 (B1 sürük 4): doruktan sonra Feride'nin kendi planı (kanca yola özel kalır) */
        { eger: (S) => S.bayrak.p_rota === 'mukaddem', ise: [
          ['ic', 'Kenan\'a bu akşamı nasıl anlatacağım?', 'mahzun'],
        ], degilse: [
          ['ic', 'Camın ardından beni gördü. Ama ben de onu gördüm.', 'kararli'],
        ] },
        { ortam: 'o_araba' }, // Tur 30 (t30 ORTAK B1–4 §1): öbür dallarda araba burada yola çıkar
        ['an', 'Araba yokuşu tırmandı. Perihan Hanım yol boyunca üvey kızına gülümsedi.'],
        /* Tur 27 (B1 sürük 10'a): Süha yolunda kart yolun kendi duygusuyla biter */
        { eger: (S) => S.bayrak.p_rota === 'suha' && S.bayrak.p_defter === 'suha', ise: [
          /* Tur 28 (B1 diyalog 6): kapalı cümle açıldı; "Onun gözünden"e ters düşmez */
          { kart: 'Perdeyi o indirdi. Ama camın ardında kimin durduğunu ikimiz de biliyoruz.' },
        ], degilse: [{ eger: (S) => S.bayrak.p_rota === 'mukaddem', ise: [
          /* Tur 29 (B1 sürük 10'a): Kenan dalında kart yolun kendi cümlesi */
          { kart: 'Merdivende karşılaşmıştık. Gerdanlığa iki gün var; o bunu bilmiyor.' },
        ], degilse: [
          { kart: 'Gülümsedim; perdenin ardındaki konuşmayı duyduğumu anlamasın.' },
        ] }] },
        { bolumSonu: true },
      ],
    },
  ],

  // Tur 18 ek (öneri 9): defter üç kısa cümle — ne yaptım / kimle ne kaldı / sıradaki soru.
  // Koz listesi ve karar geçmişi ayrı panelde; burada sayılmaz.
  sonNotu: function (S) {
    var b = S.bayrak, c = [];
    if (b.p_rota === 'mukaddem') c.push({
      sakla: 'Bir yıl sonra Kenan\'ı merdivende gördüm, yaseminini avucumda sakladım.',
      sordu: 'Bir yıl sonra Kenan\'ı merdivende gördüm, yaseminin kimin olduğunu sordum.',
    }[b.p_yasemin] || 'Bir yıl sonra Kenan\'ı merdivende gördüm, yasemini kitabına geri koydum.');
    /* Tur 28b (kök 1): açık ret özette korunur */
    else if (b.p1_rota_ret) c.push('Bahçeye dönerken Süha Bey limonluğun kapısında yolumu kesti. Mandalı kendim kaldırdım.');
    else if (b.p1_suha_sinir) c.push('Limonlukta Süha Bey\'e sözlü bir kıza bakılmayacağını söyledim. Camın ardında Perihan Hanım vardı.');
    else c.push({
      verdi: 'Limonlukta nabzımı Süha Bey\'e saydırdım. Camın ardında Perihan Hanım vardı.',
      dayi: 'Limonlukta Süha Bey\'e “dayı bey” dedim. Camın ardında Perihan Hanım vardı.',
      bahane: 'Limonlukta Süha Bey\'e hekimliğin bahane olup olmadığını sordum. Perihan Hanım camın ardındaydı.',
    }[b.p_bilek] || 'Limonlukta Süha Bey\'le yalnız kaldım. Yalnız sandım.');
    if (b.p_koz_yandi) c.push('Bildiğimi Perihan Hanım\'ın yüzüne söyledim. Artık benden sakınacak.');
    else if (b.p_yalan) c.push('Perihan Hanım\'a yalan söyledim. Bir gün biri hatırlatacak.');
    else if ((S.kozlar || []).length) c.push('Arka bahçede gördüğüm sır artık bende. Perihan Hanım bilmiyor.');
    else c.push({
      dik: 'Sabah aynaya “kimse beni acındırmasın” dedim.',
      umut: 'Sabah aynaya “onu bir kez göreyim, yeter” dedim.',
    }[b.p_tavir] || 'Sabah aynaya “gözüm Perihan Hanım\'ın üstünde” dedim. Gün boyu da ondan ayırmadım.');
    /* Sürükleyicilik T1: defter soruyla değil, Feride'nin eylemiyle biter.
       GPT T25 Kenan (B1 sürük kart): arabadaki hamle seçilene göre; doruk satırı yeniden yazılmaz */
    if (b.p_defter === 'mukaddem' && b.p_rota === 'mukaddem') c.push('Arabada Perihan Hanım\'a gerdanlık gününü, Kenan Bey\'i sorarak hatırlattım.');
    else if (b.p_defter === 'mukaddem') c.push('Arabada Perihan Hanım\'dan Münevver Hanım\'a selamımı istedim, götürmeyeceğini bilerek.');
    else if (b.p_defter === 'suha') c.push('Arabada Perihan Hanım\'a limonluğun camlarını hatırlattım. O da benim yanımdaki perdeyi indirdi.');
    else if (b.p_defter === 'remzi') c.push('Arabada Perihan Hanım\'a kapıdaki beyin annesini sordum. Kapıda bey görmediğini söyledi.');
    else if (b.p1_defter_anne) c.push('Arabada Perihan Hanım\'a annemin bu yokuştan gelin gidişini sordum. Gülümsemesi düştü.');
    else c.push('Arabada Perihan Hanım\'a, gerdanlığa kalan iki günü benim de saydığımı söyledim.');
    return c.join(' ');
  },
  /* GPT T29 (O3-3/O4-3; ORTAK motor anRet): öbür rotanın anı ve açık ret "kaçırdığın an" sayılmaz */
  anRet: {
    an_merdiven: function (S) { return S.bayrak.p_rota !== 'mukaddem'; },
    an_limonluk: function (S) { return S.bayrak.p_rota !== 'suha' || !!S.bayrak.p1_suha_sinir; },
  },
  anIpuclari: { an_merdiven: 'Kalabalıktan kaçarken merdivene çıkan, orada sessiz birini bulur.', an_limonluk: 'Limonluğa giden, menekşe şekeri uzatan bir el bulur.' },
  /* Sürükleyicilik T1 (S1): ifşa; yola özel. Oyuncu bilir, karşı taraf bilmez.
     GPT T26 Süha: Süha yolunda tehlike türüne kayar (yaklaşan sofra); 2. bölümün karar kancasıyla aynı türde değil. */
  siradaki: { ad: 'Konak Akşamı', kanca: function (S) {
    /* Tur 27 (B1 sürük 1; GPT S2): özet değil tehlike; 2. bölüm açılışı ("Gerdanlığa iki gün vardı…") karşılar */
    if (S.bayrak.p_rota === 'mukaddem') return 'Kenan\'ın hiçbir şeyden haberi yok. Gerdanlığa iki gün var; Perihan Hanım birincisini bu akşam babamın sofrasında kullanacak.';
    /* GPT T24b Süha (B1-2): Süha yolunun yakınlığı kancaya taşınır.
       GPT T26 Süha (B1 sürük 2): bilineni yinelemek yerine yaklaşan sofraya kesilir; gelin odasındaki hamleyi hatırlar */
    if (S.bayrak.p_koz_yandi) return 'Perihan Hanım\'ın yüzüne bir sır açtım, o da camın ardından beni gördü. Bu akşam babamın sofrasında ikimizin de elinde bir şey var.';
    if (S.bayrak.p_yalan) return 'Perihan Hanım\'a bir yalan söyledim, üstelik camın ardından beni gördü. Bu akşam babamın sofrasında hangisini önce açacak?';
    return 'Perihan Hanım limonlukta gördüğünü henüz kimseye söylemedi. Bu akşam babamla aynı sofraya oturacağız, o da.';
  } },
};

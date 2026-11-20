/* =========================================================================
   İKİNCİ BÖLÜM: GERDANLIK
   Biçim bolum1.js'teki gibidir (dosyanın başındaki açıklamaya bakınız).
   - Konuşma:   ["josephine", "Metin", "ifade"]
   - Feride:    ["f", "Metin", "gulumseyen"]      İç ses: ["ic", "Metin"]
   - Anlatım:   "Metin"                           Perde arkası: ["pa", "Metin"]
   Bayraklar (şartname §2.2): kiyafet_nisan, gerdanlik, ilac, suha_sohbet,
   fevkiye_uyari, talip_suha, delil_ilac, nabi_kin.
   (oyun için ek) yazan yerler romanda yoktur.
   ========================================================================= */
window.BOLUMLER = window.BOLUMLER || {};

/* (oyun için ek) Pusula entrikasının durumu:
   bilir  = Feride pusulada ne yazdığını biliyor (aldı, okudu ya da müsveddeyi gördü)
   duydu  = söz Münevver Hanım'a ulaştı. Ulaşmaması için iki yol da kapanmalı:
            pusula alınmış VE Naile Hanım salonda susturulmuş (naile_sustu) olmalı. */
window.B2_PUSULA = {
  bilir: (S) => S.bayrak.pusula === 'alindi' || S.bayrak.pusula === 'okundu' || !!S.bayrak.musvedde,
  duydu: (S) => !(S.bayrak.pusula === 'alindi' && !!S.bayrak.naile_sustu),
  kagit: (S) => S.bayrak.pusula === 'alindi' || S.bayrak.musvedde === 'aldi',
};

window.BOLUMLER[2] = {
  no: 2,
  ad: 'Gerdanlık',
  ilkFaz: 'A',
  baslangic: 'konak_sofa',

  fazlar: {
    A: { // Sait Efendi'nin konağı
      mekanlar: ['konak_sofa', 'fazila_oda', 'josephine_oda', 'yemek_salonu', 'buyuk_salon', 'mutfak', 'calibe_oda', 'konak_bahce', 'selamlik_kapisi'],
      baglanti: {
        konak_sofa: ['fazila_oda', 'calibe_oda', 'yemek_salonu', 'buyuk_salon', 'mutfak', 'konak_bahce', 'selamlik_kapisi'],
        fazila_oda: ['konak_sofa', 'josephine_oda'],
        josephine_oda: ['fazila_oda'],
        calibe_oda: ['konak_sofa'],
        yemek_salonu: ['konak_sofa', 'buyuk_salon'],
        buyuk_salon: ['konak_sofa', 'yemek_salonu'],
        mutfak: ['konak_sofa', 'konak_bahce'],
        konak_bahce: ['konak_sofa', 'mutfak', 'selamlik_kapisi'],
        selamlik_kapisi: ['konak_bahce', 'konak_sofa'],
      },
    },
  },

  /* (oyun için ek) Bölümün omurgası: Perihan Hanım, madalyondaki "B" harfini bir erkek adı diye
     Münevver Hanım'a ulaştırmak istiyor (imzasız pusula + ziyarete çağrılan Naile Hanım).
     Feride'nin araba gelene kadar üç hamlesi var; dört işten biri yarım kalır. */
  gorevler: [
    /* 0 */ { metin: 'Yeni Madam\'ı karşıla.', ipucu: "Nimet, yeni gelen Madam'ı odama çıkarıyormuş." },
    /* 1 */ { metin: 'Sofaya çık.', ipucu: 'Aşağıdan sesler geliyor. Münevver Hanım öğleden sonra gelecek.' },
    /* 2 */ {
      metin: (S) => 'Perihan Hanım ne hazırlıyor? Araba gelene kadar ' + ['vaktin kalmadı', 'tek hamlen', 'iki hamlen', 'üç hamlen'][Math.max(0, Math.min(3, S.bayrak.hamle || 0))] + ' var.',
      ipucu: 'Hatice mutfak kapısına indi. Perihan Hanım\'ın odası boş. Nimet odamda. Babam yemek salonunda. Hepsine yetişemem.',
    },
    /* 3 */ { metin: 'Nişan ziyareti için giyin.', ipucu: 'Nimet sandığın başında bekliyor. Araba yolda.' },
    /* 4 */ { metin: "Münevver Hanım'ı büyük salonda karşıla.", ipucu: 'Araba kapıda. Babam bugün evde; hepsi salonda.' },
    /* 5 */ { metin: "Perihan Hanım'ın hatırını sor.", ipucu: 'Başı ağrıyormuş. Odası yukarıda, sofadan çıkılıyor.' },
    /* 6 */ { metin: "Süha Bey'in muayenesi.", ipucu: 'Odamda bekliyormuş. Madam\'ın odasından ara kapıyla geçerim.' },
    /* 7 */ { metin: "Şefik'le bahçede resim çiz.", ipucu: 'Şefik kâğıtlarını bahçeye indirmiş, çardağın altında.' },
    /* 8 */ { metin: 'Sofaya in. Perihan Hanım\'ın elinde sana gelmiş bir şey var.', ipucu: 'Perihan Hanım sofada beni sormuş. Hayırdır inşallah.' },
    /* 9 */ { metin: "Nabi Bey'in sana ne taşıtmak istediğini öğren.", ipucu: 'Salonda, piyanonun yanında bekliyormuş.' },
    /* 10 */ { metin: "Odana çık. Leyla'ya haber gitmeli mi, Nimet'le konuş.", ipucu: 'Akşam oldu. Nimet odama kandili yakmaya gelmiş.' },
  ],

  /* Saate göre fon: sabah, hamleler, sandık ve öğleden sonraki nişan ziyareti gündüz ışığında */
  fon: function (S, mekanId) {
    if (mekanId === 'fazila_oda' && S.gorev <= 9) return 'fazila_oda_gunduz';
    if (mekanId === 'buyuk_salon' && S.gorev <= 4) return 'buyuk_salon_gunduz';
    return null;
  },

  /* Kim nerede? (görev sırasına göre) */
  kisiler: function (S) {
    const g = S.gorev;
    return {
      konak_sofa: [],
      fazila_oda: (g === 2 || g === 3 || g === 10) ? ['mehves', 'resim'] : ['resim'],
      josephine_oda: g >= 1 ? ['josephine'] : [],
      yemek_salonu: (g === 2 || (g >= 6 && g <= 9)) ? ['sai'] : [],
      buyuk_salon: [],
      mutfak: (g === 2 && !S.biten.includes('b2_h_reftar')) ? ['reftar', 'asci'] : ((g >= 4 && g <= 9) ? ['mehves', 'asci'] : ['asci']),
      calibe_oda: g >= 6 ? ['reftar'] : [],
      konak_bahce: (g >= 3 && g !== 7) ? ['komsu_konak'] : [],
      selamlik_kapisi: (g >= 6 && g !== 7) ? ['sefik'] : [],
    };
  },

  /* Olay olmayan zamanlarda kişiye dokununca söylenenler */
  sohbet: function (S, kim) {
    const g = S.gorev, b = S.bayrak;
    switch (kim) {
      case 'mehves':
        if (g <= 4) return [['mehves', 'Hanımcığım, saçını ben öreyim. Münevver Hanımefendi seni dağınık görmesin.']];
        if (b.gerdanlik === 'boyun') return [['mehves', 'Sofrada hanımefendinin gözü boynundan hiç ayrılmadı. Ben gördüm, sen görmedin.']];
        return [['mehves', 'Bir şey mi lazım hanımcığım? Şerbet getireyim mi?']];
      case 'asci':
        return [['asci', 'Küçük hanım mutfağa inmiş! Al şu kurabiyeden, sıcak sıcak.'], ['ic', 'Bu evde beni beslemeyi düşünen bir aşçı kadın var. Az şey değil.']];
      case 'josephine':
        if (g >= 7 && b.ilac === 'josephine') return [['josephine', 'O şişeyi sakladınız, değil mi Feride Hanım? İyi. Kimseye göstermeyin.']];
        if (g >= 6) return [['josephine', 'Bugün Şefik Bey üç fiil çekti, hiç yanılmadı. Mon Dieu, ne akıllı çocuk!']];
        return [['josephine', 'Feride Hanım, bu akşam bana o şarkıyı yeniden çalar mısınız? Hani Şefik Bey\'in sevdiği.']];
      case 'sefik':
        if (g >= 6 && b.suha_sohbet === 'sefik') return [['sefik', 'Abla, o Fransızca kitabı bitirdim! Doktor bey bir daha ne zaman kitap getirecek?'], ['ic', 'Umarım hiç.']];
        if (g >= 6) return [['sefik', 'Abla, hocam bugün "elif"i yine beğenmedi. Ama "be"yi beğendi!']];
        return [['sefik', 'Abla! Madam benim adımı Fransızca yazdı. Bak, şöyle.']];
      case 'reftar':
        return [['reftar', 'Hanımefendi dinleniyor küçük hanım. Kimseyi kabul etmiyor.'], ['ic', 'Kimseyi değil. Beni.']];
      case 'sai':
        return [['sai', 'Kızım, Madam\'dan memnun musun? Memnunsan ben de memnunum.']];
      case 'komsu_konak':
        return ['Bahçe duvarının üstünden komşu konağın kafesli pencereleri görünüyor. Hepsi kapalı.'];
      case 'resim':
        if (g >= 9) return ['Annemin resmi. Çekmecemde artık bir resim daha var. İkisine birden bakmaya utanıyorum.'];
        return ['Annemin resmi. Sarı saçları, baygın mavi gözleri. Gerdanlığı görse ne derdi?'];
    }
    return null;
  },

  /* Bölüm açılışı: kart ve söylenti */
  acilis: [
    { kart: 'İKİNCİ BÖLÜM\nGerdanlık', alt: 'Yaz. Ertesi gün.\nDüğüne bir yıl.' },
    { kiyafet: 'ev', kilit: 'Bu sahnede kıyafetiniz kitapta tarif edildiği gibidir: gündelik ev kıyafeti.' },
    { arkaplan: 'kabul_gunu' },
    { goster: ['hanimlar'] },
    'Ertesi gün. Bir kabul gününde dört hanım yine yan yana oturmuş. Kahveler dolmuş, yelpazeler açılmış.',
    ['h1', 'Dünkü düğünü gördünüz mü ayol? Gelinin tülü üç yerinden yırtılmış.'],
    ['h2', 'Dört. Ben saydım. Kız beğenmeye gelen anneler de vardı, gözleri hep gelinlik kızlardaydı.'],
    {
      eger: (S) => S.bayrak.cevap === 'sert',
      ise: [
        ['h1', 'Şu sarışın kızı unuttunuz mu? Bize ne demişti, ne demişti! "Size mi kaldı?" dedi, sonra da yüzümüze baktı.'],
        ['h4', 'Güzel, ama dili de güzelliği kadar keskin. O dille kaynana evinde ne yapar?'],
        ['h3', 'Annesinin adını sordunuz kardeş. Siz de olsanız darılırdınız.'],
        ['h4', 'Darılan susar. O susmadı.'],
      ],
      degilse: [{
        eger: (S) => S.bayrak.cevap === 'oksuz',
        ise: [
          ['h3', 'Ben o sarışın kızı unutamadım. "Öksüzüm efendim" dedi, gözünden iki damla düştü.'],
          ['h1', 'Öksüz kız. Edebiyle susturdu bizi.'],
          ['h4', 'Edep güzel şey. Konağında da öyle mi, onu göreceğiz.'],
        ],
        degilse: [
          ['h1', 'Hangi kız? Ha, şu sarışın, sessiz olan.'],
          ['h3', 'Sessizdi ama kendisinden söz ettirdi. İki harfi vardı, unuttunuz mu?'],
          ['h4', 'Harfi olan çok. Bakalım adı olacak mı.'],
        ],
      }],
    },
    {
      eger: (S) => S.v.dedikodu >= 2 || S.v.itibar < 45,
      ise: [['h4', 'Feride Hanım\'ın adı bu sabah üç kabul gününde geçti. Kahve soğumadan unutulur, ama yine anılır.']],
      degilse: [{
        eger: (S) => S.v.itibar >= 55,
        ise: [['h3', 'Sait Efendi\'nin küçük hanımını sorana iyi söylüyorlar. Ben de iyi söyledim.']],
        degilse: [],
      }],
    },
    ['h2', 'Siz asıl haberi duymadınız. O sarışın kız çoktan sözlüymüş. Komşu konağın oğluna.'],
    ['h2', 'Gerdanlığı da ısmarlanmış. Bugün yarın boynuna takacaklarmış.'],
    // (oyun için ek) Bölümün entrikasının tohumu: madalyondaki harf
    ['h4', 'Takacaklar da, o kızın boynundaki madalyonda bir harf vardı. Hatırlarsınız: {b}B{/b}.'],
    ['h1', 'Nişanlısının adı Kenan değil mi? Onun harfi B olmaz.'],
    ['h4', 'Olmaz. O harfin kimin harfi olduğunu öğrenen olmuş. Bugün yarın kaynanasının kulağına da gider.'],
    {
      eger: (S) => !!S.bayrak.bilgi_reftar_nabi,
      ise: [['ic', '{i}(Nimet\'in dün gece kandil ışığında fısıldadığını bu hanımlar bir bilseydi, harfle uğraşmazlardı.){/i}']],
      degilse: [],
    },
    // (oyun için ek) Remzi'nin ailesi: adı söylenmez
    ['h1', 'Merhum tacirin dul hanımı da küçük oğluna kız arıyormuş. Sözlü olduğunu duyunca dudak bükmüş.'],
    ['h4', 'Nişan takılır; düğüne bir yıl var. Bir yılda çok su akar.'],
    { temizle: true }, { arkaplan: null },
    'Sabah. Konağın sofası serin. Yukarıda kapılar açılıp kapanıyor.',
    ['ic', 'Babam dün akşam söyledi: bugün yeni hocamız geliyormuş. Bir Madam daha.'],
    ['ic', 'Madam Oiselle gideli üç yıl oldu. Elimin acısı hâlâ aklımda.'],
  ],

  olaylar: [
    /* ------------------------------------------------------------------
       S2: Yeni mürebbiye
       ------------------------------------------------------------------ */
    {
      id: 'b2_josephine', mekan: 'fazila_oda', tetik: 'giris', kosul: (S) => S.gorev === 0,
      sahne: ['mehves', 'sefik'],
      adimlar: [
        'Odamın kapısı açıktı. Nimet, arkasında bir sandıkla, birini içeri buyur ediyordu.',
        { goster: ['josephine'] },
        'Genç bir kadın. Yirmi üç, belki yirmi dört yaşında. Yüzü şirin, eldivenleri eskimiş ama temiz.',
        ['mehves', 'Hanımcığım, yeni madamınız geldi. Odası sizin odanızın yanındaki oda; ara kapıyla geçiliyor.'],
        ['josephine', 'Bonjour. Ben Josephine. Feride Hanım siz misiniz?'],
        ['f', 'Benim efendim. Hoş geldiniz.'],
        ['sefik', 'Ben de Şefik\'im! Siz Paris\'ten mi geldiniz?'],
        ['josephine', 'Paris\'ten Şefik Bey. Orada bir mektepte okudum, diplomamı aldım. Şimdi sizin mektebiniz bu oda.'],
        ['josephine', 'Türkçem kötü; siz bana düzeltirsiniz, ben size Fransızca düzeltirim. Anlaştık mı?'],
        ['ic', 'Madam Oiselle ilk gün bize "anlaştık mı" demedi. "Elinizi gösterin" dedi.'],
        ['josephine', 'Feride Hanım, siz piyano çalıyormuşsunuz. En çok ne çalmayı seversiniz?'],
        // 1. bölümdeki piyano seçimi burada geri döner
        { eger: (S) => S.bayrak.piyano === 'baba',
          ise: [['sefik', 'Ablam babamın şarkısını çalar Madam! Babam gözlerini kapar, dinler.']],
          degilse: [{ eger: (S) => S.bayrak.piyano === 'sefik',
            ise: [['sefik', 'Geçen akşam beraber çaldık! Ben iki kere şaşırdım, ablam ikisinde de güldü.']],
            degilse: [{ eger: (S) => S.bayrak.piyano === 'vals', ise: [['sefik', 'Ablam vals de çalar. Süha dayım koltuğunda doğrulup dinledi.'], ['ic', 'Şefik bunu da görmüş.', 'utanmis']], degilse: [] }] }] },
        {
          soru: 'Madam cevabımı bekliyor.',
          secim: [
            { m: '"Annemin sevdiği eski şarkıları."', etki: { vakar: 1 },
              adimlar: [['f', 'Annemin sevdiği eski şarkıları. Notası yok, kulaktan öğrendim.'], ['josephine', 'O zaman bana da kulaktan öğretirsiniz. Ben notalı olanları getiririm.']] },
            { m: '"Şefik\'le dört elle çalmayı."', etki: { sefik: 1 },
              adimlar: [['f', 'Şefik\'le dört elle çalmayı. O şaşırır, ben gülerim, yeniden başlarız.', 'gulumseyen'], ['sefik', 'Ben şaşırmam! Ablam hızlı çalıyor.'], ['josephine', 'Ah, o zaman üçümüz çalarız. Ben sayarım: un, deux, trois.']] },
          ],
        },
        ['josephine', 'Peki, siz? Siz ne istersiniz, Feride Hanım? Bu evde ne öğrenmek istersiniz?'],
        'Bir an sustum. Soruyu anlamadığımdan değil. Kimse bana bunu sormamıştı.',
        ['ic', 'Bu evde ilk kez biri ne öğrenmek istediğimi sordu ve cevabımı bekledi.'],
        ['f', 'Bilmiyorum Madam. Düşüneyim.', 'gulumseyen'],
        ['josephine', 'Düşünün. Acele yok. Ben buradayım.'],
        { bayrak: { josephine_geldi: true } },
        { kart: 'Ertesi sabah.' },
        ['mehves', 'Hanımcığım, uyan! Münevver Hanımefendi öğleden sonra geliyormuş. Gerdanlığı getiriyormuş!'],
        { gizle: 'josephine' }, { gizle: 'sefik' },
        ['ic', 'Gerdanlık. Nimet iki gün demişti. Demek bugünmüş.'],
        ['mehves', 'Ben sandığı açayım. Sen bir sofaya çık da yüzünü yıka; aşağıda bir telaş var bu sabah.'],
        { gorev: 1 },
      ],
    },

    /* ------------------------------------------------------------------
       (oyun için ek) Sabah: sofada duyulan fısıltı. Bölümün sorusu burada kurulur.
       ------------------------------------------------------------------ */
    {
      id: 'b2_fisilti', mekan: 'konak_sofa', tetik: 'giris', kosul: (S) => S.gorev === 1,
      sahne: [],
      adimlar: [
        'Sofaya çıktım. Perihan Hanım\'ın kapısı aralıktı; içeriden iki ses geliyordu. Durdum.',
        { goster: ['calibe', 'sinsi'] }, { goster: ['reftar'] },
        ['calibe', '{i}(Kapının ardından){/i} ...kimin eliyle gittiği belli olmasın. Sokak kapısından değil, mutfak kapısından ver.', 'sinsi'],
        ['reftar', '{i}(Kapının ardından){/i} Sucunun çırağı bekliyor efendim. İki sokak öteye, doğru konağa.'],
        ['calibe', '{i}(Kapının ardından){/i} Araba gelmeden hanımefendinin eline geçsin. Naile Hanım\'a da haber saldım; kahveye o da gelecek. Biri yazar, biri söyler.', 'sinsi'],
        ['calibe', '{i}(Kapının ardından){/i} Bir harf Hatice. Koca bir nişanı bir harf bozar.', 'gulumser'],
        'Tahta gıcırdadı. Sesler kesildi. Geri çekildim; merdivenin başında, elimde havluyla kaldım.',
        { temizle: true },
        ['ic', 'Bir harf. Hanımefendi. Araba gelmeden. Hangi harf, hangi hanımefendi, bilmiyorum. Ama araba benim için geliyor.'],
        ['ic', 'Hatice mutfak kapısına iniyor. Perihan Hanım salona geçti; odası boş. Nimet bu evde her şeyi duyar. Babam yemek salonunda, kâğıtlarının başında.'],
        ['ic', 'Dördüne birden yetişemem. Öğle ezanına kadar ancak üç yere uğrarım.'],
        { bayrak: { hamle: 3, pusula: 'ulasti' } },
        { bildir: 'Araba gelene kadar üç hamlen var. Dört kapı var; biri kapalı kalacak.' },
        { gorev: 2 },
      ],
    },

    /* ------------------------------------------------------------------
       (oyun için ek) Üç hamle: dört işten üçü. Her biri bir hamle harcar.
       ------------------------------------------------------------------ */
    // 1) Hatice'yi izlemek: pusula
    {
      id: 'b2_h_reftar', mekan: 'mutfak', kisi: 'reftar', kosul: (S) => S.gorev === 2 && (S.bayrak.hamle || 0) > 0,
      sahne: ['reftar', 'asci'],
      adimlar: [
        'Mutfak kapısı bahçeye açık. Hatice eşikte, önlüğünün cebinde dörde katlanmış bir kâğıt. Kapının dışında yalınayak bir çocuk bekliyor.',
        { goster: ['pusula'] },
        ['asci', 'Küçük hanım! Bu saatte mutfakta ne işin var?'],
        'Hatice beni görünce elini cebinin üstüne bastırdı.',
        {
          soru: 'Kâğıt Hatice\'nin cebinde. Çocuk kapıda bekliyor.',
          secim: [
            {
              m: '"O kâğıdı bana ver Hatice."', etki: { isyan: 1, calibe_suphe: 2 }, bayrak: { pusula: 'alindi' },
              iz: 'Pusula senin elinde. Hatice koşarak yukarı çıktı.',
              adimlar: [
                ['f', 'O kâğıdı bana ver Hatice.', 'ofkeli'],
                ['reftar', 'Hanımefendinin kâğıdıdır küçük hanım. Size verilmez.'],
                ['f', 'Üstünde benim konağımın adı var mı, onu göreceğim. Ver.', 'ofkeli'],
                'Aşçı kadın oklavayı bıraktı, Hatice\'yle kapının arasına girdi. Hatice kâğıdı elime fırlatıp merdivene koştu.',
                { gizle: 'reftar' },
                '{i}"Hanımefendi; gelin alacağınız kızın boynunda bir madalyon vardır. Üstündeki harf B\'dir. Oğlunuzun adı o harfle başlamaz. Kimin adı başlar, bir sorunuz. İyiliğinizi isteyen biri."{/i}',
                ['ic', 'B. Annemin harfi. Onu bir erkeğin adı yapmışlar.', 'ofkeli'],
                ['asci', 'Ben bir şey görmedim küçük hanım. Ama o kız şimdi yukarıda her şeyi anlatır, bilesin.'],
                { delil: 'Perihan Hanım\'ın Münevver Hanım\'a yolladığı imzasız pusula: "Madalyondaki B kimin adı, bir sorunuz." Elimde.' },
              ],
            },
            {
              m: 'Aşçı kadına göz etmek; Hatice oyalanırken kâğıdı okuyup yerine koymak.', etki: { vakar: 1 }, bayrak: { pusula: 'okundu' },
              iz: 'Pusulayı okudun. Yoluna gitti; ama ne yazdığını biliyorsun.',
              adimlar: [
                'Aşçı kadına baktım. Anladı.',
                ['asci', 'Hatice kızım, şu tencerenin kulpunu tut da ocaktan indireyim. Elim yanacak!'],
                'Hatice önlüğünü çıkarıp iskemleye attı, tencereye koştu. Kâğıt cebinden yarı çıkmıştı.',
                '{i}"Hanımefendi; gelin alacağınız kızın boynunda bir madalyon vardır. Üstündeki harf B\'dir. Oğlunuzun adı o harfle başlamaz. Kimin adı başlar, bir sorunuz. İyiliğinizi isteyen biri."{/i}',
                'Katladım, cebe geri soktum. Hatice döndüğünde ben su testisinin başındaydım.',
                ['ic', 'B. Annemin harfi. Kâğıt gidecek. Ama ben de ne soracaklarını biliyorum artık.'],
                { delil: 'Perihan Hanım, Münevver Hanım\'a imzasız bir pusula yolladı: "Madalyondaki B kimin adı, bir sorunuz." Okudum; yoluna gitti.' },
              ],
            },
            {
              m: 'Karışmamak; kâğıdın kime gittiğini görmek.', bayrak: { pusula: 'izlendi' },
              iz: 'Kâğıdın Münevver Hanım\'ın konağına gittiğini gördün. İçinde ne yazdığını bilmiyorsun.',
              adimlar: [
                'Su testisine uzandım. Hatice kâğıdı çocuğun avucuna koydu, bir de kuruş verdi.',
                ['reftar', '{i}(Fısıltıyla){/i} Yeşil panjurlu konak. Hanımefendinin kendi eline.'],
                ['ic', 'Yeşil panjurlu konak. Münevver Hanım\'ın konağı. İçinde ne yazıyor, bilmiyorum.'],
              ],
            },
          ],
        },
        { gizle: 'pusula' },
        { islev: (S) => { S.bayrak.hamle = (S.bayrak.hamle || 0) - 1; } },
        { eger: (S) => S.bayrak.hamle <= 0, ise: ['Minareden öğle ezanı yükseldi. Vaktim bitti.', { gorev: 3 }], degilse: [{ bildir: 'Bir hamle harcadın. Araba yolda.' }] },
      ],
    },

    // 2) Perihan'ın odası: müsvedde
    {
      id: 'b2_h_oda', mekan: 'calibe_oda', tetik: 'giris', kosul: (S) => S.gorev === 2 && (S.bayrak.hamle || 0) > 0,
      sahne: [],
      adimlar: [
        'Perihan Hanım\'ın odası boş. Sarı perdeler çekili. Yazı takımının kapağı açık kalmış; divitin ucu hâlâ ıslak.',
        'Kâğıt sepetinde buruşturulmuş bir müsvedde. Açtım.',
        '{i}"...boynunda bir madalyon vardır. Üstündeki harf B\'dir. Oğlunuzun adı o harfle başlamaz..."{/i} Yarısı karalanmış, baştan yazılmış.',
        ['ic', 'Onun yazısı. Eğik, sivri harfler. Babamın bütün bayram tezkirelerinde bu yazı var.', 'ofkeli'],
        'Koridorda bir terlik sesi.',
        {
          soru: 'Müsvedde elimde. Ayak sesi yaklaşıyor.',
          secim: [
            {
              m: 'Müsveddeyi koynuma sokup çıkmak.', etki: { isyan: 1, calibe_suphe: 1 }, bayrak: { musvedde: 'aldi' },
              iz: 'Perihan Hanım\'ın kendi yazısı koynunda.',
              adimlar: [
                'Kâğıdı koynuma soktum, ara kapıdan sofaya çıktım. Terlik sesi öbür yöne gitti.',
                ['ic', 'Sepete baktığında eksik olduğunu anlayacak. Anlasın.'],
                { delil: 'Perihan Hanım\'ın kendi el yazısıyla pusulanın müsveddesi. Koynumda.' },
              ],
            },
            {
              m: 'Okuyup aynı buruşuklukla sepete geri bırakmak.', etki: { vakar: 1 }, bayrak: { musvedde: 'okudu' },
              iz: 'Ne yazdığını biliyorsun; o bildiğini bilmiyor.',
              adimlar: [
                'Kâğıdı aynı yerinden buruşturdum, sepete, bulduğum yere bıraktım. Sofaya çıktığımda Hatice merdivenden iniyordu; beni görmedi.',
                ['ic', 'Elimde bir şey yok. Ama aklımda her kelimesi var.'],
                { delil: 'Perihan Hanım\'ın odasında pusulanın müsveddesini okudum: madalyondaki "B" bir erkek adı diye yazılmış. Yerine bıraktım.' },
              ],
            },
          ],
        },
        { mekan: 'konak_sofa' },
        { islev: (S) => { S.bayrak.hamle = (S.bayrak.hamle || 0) - 1; } },
        { eger: (S) => S.bayrak.hamle <= 0, ise: ['Minareden öğle ezanı yükseldi. Vaktim bitti.', { gorev: 3 }], degilse: [{ bildir: 'Bir hamle harcadın. Araba yolda.' }] },
      ],
    },

    // 3) Nimet: Naile Hanım kim?
    {
      id: 'b2_h_mehves', mekan: 'fazila_oda', kisi: 'mehves', kosul: (S) => S.gorev === 2 && (S.bayrak.hamle || 0) > 0,
      sahne: ['mehves', 'resim'],
      adimlar: [
        ['f', 'Nimet, Naile Hanım kimdir? Bugün kahveye geliyormuş.'],
        ['mehves', 'O mu geliyor? Vay başımıza gelen. Kabul günlerinin dördüncü iskemlesidir o; lafı en son o söyler, en çok onunki batar.'],
        ['mehves', 'Kendi kızının nişanı geçen kış bozuldu. Oğlan tarafı bir söz duymuş, yüzüğü geri yollamış. O gündür başkasının nişanında kusur arar.'],
        ['f', 'Münevver Hanım onu sever mi?'],
        ['mehves', 'Sevmez, ama dinler. Yalnız bir şeyden korkar Naile Hanım: kendi kızının adının yeniden anılmasından. Onu anan olursa kahvesini bitirmeden kalkar.'],
        ['ic', 'Bir söz yüzünden kızının nişanı bozulmuş bir kadın. Bugün benimkine söz taşıyacak.'],
        { bayrak: { hanim_bilgi: true } },
        { delil: 'Naile Hanım: kendi kızının nişanı bir söz yüzünden bozulmuş. Bunun anılmasından korkar.' },
        { islev: (S) => { S.bayrak.hamle = (S.bayrak.hamle || 0) - 1; } },
        { eger: (S) => S.bayrak.hamle <= 0, ise: ['Minareden öğle ezanı yükseldi. Vaktim bitti.', { gorev: 3 }], degilse: [{ bildir: 'Bir hamle harcadın. Araba yolda.' }] },
      ],
    },

    // 4) Baba: delille gidersen yanında durur, delilsiz gidersen azarlar
    {
      id: 'b2_h_baba', mekan: 'yemek_salonu', kisi: 'sai', kosul: (S) => S.gorev === 2 && (S.bayrak.hamle || 0) > 0,
      sahne: ['sai'],
      adimlar: [
        'Babam sofranın başında, önünde yazıhane kâğıtları. Beni görünce gözlüğünü indirdi.',
        ['sai', 'Hayırdır kızım? Giyinmedin mi daha?'],
        {
          eger: (S) => S.bayrak.pusula === 'alindi' || S.bayrak.musvedde === 'aldi',
          ise: [
            ['f', 'Efendim, size bir kâğıt göstereceğim. Okuyunuz, sonra ne derseniz o olur.'],
            'Kâğıdı önüne koydum. Okudu. Bir daha okudu. Yüzünün rengi çekildi.',
            ['sai', 'Bu yazı...', 'mahzun'],
            'Cümlesini bitirmedi. Kâğıdı ikiye katlayıp yeleğinin cebine koydu.',
            ['sai', 'Bugün salonda yanımdan ayrılma. Kim ne sorarsa, önce bana baksın.', 'ciddi'],
            ['ic', 'Yazıyı tanıdı. Tanıdığını söylemedi. Ama cebine koydu.'],
            { etki: { baba_guven: 5 } }, { bayrak: { baba_haber: 'inandi' } },
          ],
          degilse: [{
            eger: (S) => S.bayrak.pusula === 'okundu' || S.bayrak.musvedde === 'okudu',
            ise: [
              ['f', 'Efendim, bugün Münevver Hanım\'a benim hakkımda bir kâğıt gitti. Annemin madalyonundaki harfi bir erkek adı diye yazmışlar. Gözümle okudum.'],
              ['sai', 'Kim yazmış?', 'ciddi'],
              ['f', 'Elimde kâğıt yok efendim. Yalnız gördüğümü söylüyorum.'],
              'Babam uzun uzun yüzüme baktı.',
              ['sai', 'Sen yalan söylemezsin. Ama kâğıtsız söz, söz olarak kalır kızım. Salonda gözüm üstünde olacak; o kadarını yaparım.', 'ciddi'],
              { etki: { baba_guven: 2 } }, { bayrak: { baba_haber: 'yarim' } },
            ],
            degilse: [
              ['f', 'Efendim, bu sabah Perihan Hanım\'ın kapısında bir şey duydum. Nişanımı bozacak bir harften söz ediyordu.'],
              ['sai', 'Kapı mı dinliyorsun Feride?', 'ciddi'],
              ['f', 'Dinlemedim efendim. Duydum.'],
              ['sai', 'Annen bu nişan için bir haftadır ayakta. Onun hakkında böyle söz taşıma bana. Git, giyin.', 'ciddi'],
              ['ic', 'Elim boş geldim. Elim boş, bir de azarla dönüyorum.', 'mahzun'],
              { etki: { baba_guven: -3 } }, { bayrak: { baba_haber: 'inanmadi' } },
            ],
          }],
        },
        { islev: (S) => { S.bayrak.hamle = (S.bayrak.hamle || 0) - 1; } },
        { eger: (S) => S.bayrak.hamle <= 0, ise: ['Minareden öğle ezanı yükseldi. Vaktim bitti.', { gorev: 3 }], degilse: [{ bildir: 'Bir hamle harcadın. Araba yolda.' }] },
      ],
    },

    /* ------------------------------------------------------------------
       S3: Nişan kıyafeti (B2-Ç1, oyun için ek)
       ------------------------------------------------------------------ */
    // (oyun için ek) Kıyafet seçimi
    {
      id: 'b2_sandik', mekan: 'fazila_oda', kisi: 'mehves', kosul: (S) => S.gorev === 3,
      sahne: ['mehves', 'resim'],
      adimlar: [
        'Nimet sandığın başında diz çökmüş, kapağı açmış. Lavanta kokusu odaya yayıldı.',
        ['mehves', 'Öğleden sonra gelecekler. Baban da bugün yazıhaneye gitmedi, evde. Ne giyeceksin hanımcığım?'],
        ['ic', 'Bir kız nişanında ne giyer? Annem olsa bilirdi. Perihan Hanım\'a sormaya dilim varmaz.'],
        { islev: (S) => { ['nisan_sade', 'nisan_gosterisli', 'nisan_yadigar'].forEach((k) => { if (!S.kiyafetler.includes(k)) S.kiyafetler.push(k); }); } },
        { bildir: 'Gardrobuna üç yeni kıyafet eklendi.' },
        {
          soru: 'Münevver Hanım öğleden sonra gelecek. Nimet sandığın kapağını açtı.',
          secim: [
            {
              m: 'Düz fildişi ipekli. Süssüz, kapalı yakalı.', etki: { vakar: 1 }, bayrak: { kiyafet_nisan: 'sade' },
              adimlar: [
                { kiyafet: 'nisan_sade', sessiz: true, kilit: 'Nişan ziyareti için fildişi ipekliyi giydin. Münevver Hanım gidene kadar değiştiremezsin.' },
                'Fildişi ipekliyi giydim. Yakası çeneme kadar kapalı, kolları bileğime kadar dar.',
                ['mehves', 'Gerdanlık böyle daha çok parlar. Boğazın boş kalsın, onu beklesin.'],
                'Taktığım tek şey annemin madalyonu. Onu da yakanın içine sakladım.',
              ],
            },
            {
              m: 'Terziden yeni gelen pembe tafta. Tülü, boncuğu bol.', bayrak: { kiyafet_nisan: 'gosterisli' },
              adimlar: [
                { kiyafet: 'nisan_gosterisli', sessiz: true, kilit: 'Nişan ziyareti için pembe taftayı giydin. Münevver Hanım gidene kadar değiştiremezsin.' },
                'Pembe taftayı giydim. Göğsündeki tül büzgüler, beyaz boncuklar ışıkta kıpırdıyor.',
                { goster: ['josephine'] },
                ['josephine', '{i}(Ara kapıdan){/i} Oh, très jolie! Ne güzel olmuşsunuz Feride Hanım!'],
                ['mehves', 'Güzel olmasına güzel. Hanımefendi bunu kendi giymek isterdi, bilmiş ol.'],
                ['ic', 'Babam kumaşı Perihan Hanım\'a seçtirmişti. Bunu giyersem babam sevinir. Perihan Hanım da bir şey söyler.'],
              ],
            },
            {
              m: 'Annemin sandığından çıkan gök mavisi ipekli.', bayrak: { kiyafet_nisan: 'yadigar' },
              adimlar: [
                { kiyafet: 'nisan_yadigar', sessiz: true, kilit: 'Nişan ziyareti için annenin gök mavisi ipeklisini giydin. Münevver Hanım gidene kadar değiştiremezsin.' },
                'Sandığın dibinden annemin gök mavisi ipeklisini çıkardım. Yakasındaki dantel sararmamış.',
                ['mehves', 'Bunu... bunu ben geçen kış daraltmıştım. Bir gün lazım olur diye. Kimseye söylemedim.'],
                'Nimet\'in gözü doldu. Sesini çıkarmadan düğmelerimi ilikledi.',
                ['ic', 'Kesimi eski. Yirmi yıl önce bir gelin bunu giymiş. Bugün kızı giyiyor.'],
              ],
            },
          ],
        },
        ['mehves', 'Saçını tek örgü öreyim. Münevver Hanımefendi öyle sever.'],
        // Örgü hep tek; süsü seçilen elbiseye göre değişir (portreyle aynı)
        {
          eger: (S) => S.bayrak.kiyafet_nisan === 'gosterisli',
          ise: [['mehves', 'Tepesine elmaslı tarağını takayım, arasına da bahçeden iki pembe gül. Tafta bunu ister.']],
          degilse: [{
            eger: (S) => S.bayrak.kiyafet_nisan === 'yadigar',
            ise: [
              ['mehves', 'Örgünün ucuna bir dal yasemin iliştireyim. Rahmetli hanımım böyle takardı.'],
              'Annemin madalyonunu dantel yakanın üstüne çıkardım. Bugün saklanacak gün değil.',
            ],
            degilse: [['mehves', 'Ne tarak ne çiçek. Düz bir örgü, o kadar. Bu elbise süs kaldırmaz.']],
          }],
        },
        // (oyun için ek) Elbise artık sabahki entrikaya da cevap: madalyon görünür mü, saklı mı?
        {
          eger: (S) => S.bayrak.pusula === 'alindi' || S.bayrak.pusula === 'okundu' || !!S.bayrak.musvedde,
          ise: [{
            eger: (S) => S.bayrak.kiyafet_nisan === 'yadigar',
            ise: [['ic', 'Harfi soracaklar. Sorsunlar. Annemin elbisesi sırtımda, harfi göğsümde.']],
            degilse: [{
              eger: (S) => S.bayrak.kiyafet_nisan === 'sade',
              ise: [['ic', 'Madalyon yakamın içinde. Saklayan suçlu görünür, biliyorum. Ama onu kimsenin diline de vermem.']],
              degilse: [['ic', 'Bugün boynumda madalyon yok. Soracakları harfi görecek gözleri olmayacak.']],
            }],
          }],
          degilse: [],
        },
        { gizle: 'josephine' },
        'Nimet aynayı tuttu. Baktım.',
        { gorunum: true },
        'Aşağıdan bir araba sesi geldi. Tekerlekler taşlıkta durdu.',
        ['mehves', 'Geldiler! Kupa arabası. Hanımefendiyi oğlu getirmiş; Kenan Bey kapıda inip annesinin koluna girdi.'],
        ['ic', 'O. Aşağıda, avluda. Hareme giremez; birazdan arabaya dönecek.', 'utanmis'],
        // (oyun için ek) Kenan ilk kez görünür: yalnız kafesin ardından, söz yok
        {
          soru: 'Pencerenin kafesi bir adım ötemde. Avluda onun ayak sesi.',
          secim: [
            {
              m: 'Kafesin ardından bakmak.', etki: { mukaddem: 6 }, bayrak: { mukaddem_gordu: true },
              iz: 'Onu gördün. O da başını kaldırdı.',
              adimlar: [
                'Kafesin deliğine yaklaştım.',
                { goster: ['mukaddem_avlu'] },
                'Uzun boylu bir genç. Fesini eline almış, annesinin eteğini arabanın basamağından kurtarıyor. Sonra doğruldu.',
                'Başını kaldırdı. Doğrudan benim penceremin kafesine baktı. Beni göremezdi. Ama baktı.',
                ['ic', 'Yedi yıl önce bahçede kuş resmi için ağlayacak gibi olan çocuk bu. Omuzları genişlemiş. Bakışı aynı.', 'utanmis'],
                'Elini göğsüne götürdü; selam mı, yoksa yalnız düğmesini mi düzeltti, anlayamadım. Arabaya döndü.',
                { gizle: 'mukaddem_avlu' },
                ['mehves', 'Yanakların al al oldu hanımcığım. Salona böyle in; allık sürmeye hacet kalmadı.'],
                { not: { mukaddem: 'Onu kafesin ardından gördüm. Başını kaldırıp pencereme baktı.' } },
              ],
            },
            {
              m: 'Bakmamak. Nişanlı kız pencereden nişanlı gözlemez.', etki: { vakar: 2 },
              iz: 'Bakmadın. Ayak sesini dinledin.',
              adimlar: [
                'Pencereye sırtımı döndüm. Avluda ayak sesi durdu, bir an bekledi, sonra arabaya doğru uzaklaştı.',
                ['ic', 'Durdu. Neden durdu? Bakmadım; bilmeyeceğim.'],
                ['mehves', 'Yukarı baktı hanımcığım. Ben gördüm. Sen bakmadın, o baktı.'],
              ],
            },
          ],
        },
        ['mehves', 'Haydi hanımcığım, salona. Babanız bekliyor.'],
        { gorev: 4 },
      ],
    },

    /* ------------------------------------------------------------------
       S4-S5: Gerdanlık takılır (B2-Ç2)
       ------------------------------------------------------------------ */
    {
      id: 'b2_nisan', mekan: 'buyuk_salon', tetik: 'giris', kosul: (S) => S.gorev === 4,
      sahne: ['sai', { id: 'calibe', ifade: 'gulumser' }, 'munevver', 'sefik'],
      adimlar: [
        'Salonun bütün perdeleri açılmış. Babam başköşede. Perihan Hanım yanında, en güzel gülümsemesiyle.',
        'Münevver Hanım\'ın kucağında kadife bir kutu duruyor.',
        // (oyun için ek) Naile Hanım: Perihan'ın çağırdığı dedikoducu misafir
        { goster: ['naile'] },
        'Pencerenin yanındaki koltukta, elinde kahve fincanıyla Naile Hanım. Beni baştan ayağa süzdü; gözü boynumda durdu.',
        // İki yol da kapanabilir durumdaysa (pusula alındı + Naile'nin yarası öğrenildi) Naile'yi nasıl karşılayacağını oyuncu seçer
        {
          eger: (S) => S.bayrak.pusula === 'alindi' && !!S.bayrak.hanim_bilgi,
          ise: [{
            soru: 'Naile Hanım\'ın önünden geçiyorum. Yazdıkları kâğıt yerine varmadı; geriye onun ağzı kaldı.',
            secim: [
              {
                m: 'Eğilip yalnız ona söylemek: "Bir sözün bir kıza ne yaptığını siz bilirsiniz. Bana aynısını yapmayınız."', etki: { vakar: 2 }, bayrak: { naile_sustu: 'rica' },
                iz: 'Naile Hanım\'a yarasını değil, vicdanını hatırlattın.',
                adimlar: [
                  ['f', 'Bir sözün bir kıza ne yaptığını en iyi siz bilirsiniz efendim. Bana aynısını yapmayınız.'],
                  'Fincan tabağına değdi, bir tık sesi çıktı. Naile Hanım gözlerini kaçırdı. O gün bir şey söylemedi.',
                  ['ic', 'Kızının adını anmadım. Anmama gerek kalmadı.'],
                ],
              },
              {
                m: 'İğnelemek: "Kızınız nasıllar efendim? Geçen kış hepimiz çok üzülmüştük."', etki: { isyan: 1, dedikodu: 1 }, bayrak: { naile_sustu: 'igne', naile_kin: true },
                iz: 'Naile Hanım\'ı kızının yarasıyla susturdun. Bunu unutmayacak.',
                adimlar: [
                  ['f', 'Kızınız nasıllar efendim? Geçen kış hepimiz çok üzülmüştük.'],
                  'Yüzü önce kızardı, sonra sarardı. O gün bir şey söylemedi. Ama bana bakışını gördüm.',
                  ['ic', 'Sustu. Suçu olmayan bir kızın adını koz ettim. Perihan Hanım da böyle başlamıştır belki.', 'mahzun'],
                ],
              },
              {
                m: 'Bir şey dememek; selam verip geçmek.', bayrak: { naile_sustu: false },
                iz: 'Naile Hanım\'ın ağzı açık kaldı.',
                adimlar: ['Başımla selam verdim, geçtim. Öğrendiğimi kullanmadım.', ['ic', 'Söyleyecekse söylesin. Cevabım hazır.']],
              },
            ],
          }],
          degilse: [],
        },
        ['f', 'Elinizi öpeyim nineciğim.', 'utanmis'],
        ['munevver', 'Gel bakayım, gel gelinim. Otur şuraya, yanıma.'],
        'Gelinim dedi. Herkesin önünde. Yüzüm yandı.',
        {
          eger: (S) => window.B2_PUSULA.duydu(S),
          ise: ['Elimi bırakmadı. Ama gözü bir an Naile Hanım\'a kaydı; kaşları çatıldı. Bir şey duymuş. Bana değil, ona kızgın.'],
          degilse: [],
        },
        {
          eger: (S) => S.bayrak.kiyafet_nisan === 'sade',
          ise: [{
            eger: (S) => window.B2_PUSULA.duydu(S),
            ise: [['naile', 'Yakası pek kapalı maşallah. İnsan merak ediyor, içinde ne saklı diye.'], ['ic', 'Madalyonumu soruyor. Sormadan soruyor.']],
            degilse: [['munevver', 'Sadelik sana gerdanlıktan çok yakışmış kızım. Süs, süssüze lazım.']],
          }],
          degilse: [{
            eger: (S) => S.bayrak.kiyafet_nisan === 'gosterisli',
            ise: [
              ['calibe', 'Kumaşı ben seçtim efendim. Terzisini de ben buldum. Kızımızı eli boş göndermeyiz.', 'gulumser'],
              ['munevver', 'Eksik olmayın Perihan Hanım. Güzel olmuş.'],
              ['ic', 'Elbiseyi ben giydim, övgüyü o aldı.'],
              { etki: { baba_guven: 3, calibe_suphe: 1 } },
            ],
            degilse: [
              'Münevver Hanım beni görünce bir an durdu. Eli eteğime uzandı, dantele dokundu.',
              ['munevver', 'Bu maviyi tanırım. Annen bunu giyip bize gelirdi. Ah, Behiye...'],
              'Gözü doldu. Perihan Hanım yelpazesini kapattı.',
              { etki: { mukaddem: 5, calibe_suphe: 1 } },
            ],
          }],
        },
        // Seçilen elbise salonda fark edilir: babanın ve Şefik'in tepkisi elbiseye göre
        {
          eger: (S) => S.bayrak.kiyafet_nisan === 'yadigar',
          ise: [
            { goster: ['sai', 'mahzun'] },
            'Babam beni görünce bir an durdu. Ağzını açtı, kapadı. Gözleri sedirin üstündeki boşluğa kaydı.',
            ['sai', 'Kızım... O elbise...', 'mahzun'],
            ['sefik', 'Abla, bu annemizin resmindeki elbise değil mi? Aynısı!'],
            ['ic', 'Şefik fark etti. Babam da fark etti. Bu salonda yirmi yıl önce aynı mavi oturmuştu.', 'utanmis'],
            { goster: ['sai', 'gulumser'] },
          ],
          degilse: [{
            eger: (S) => S.bayrak.kiyafet_nisan === 'gosterisli',
            ise: [
              ['sai', 'Maşallah kızım, maşallah! Bir prenses gibi olmuşsun.', 'gulumser'],
              ['sefik', 'Abla, ışıl ışılsın! Boncukların hepsi parlıyor!'],
              'Herkes bana bakıyordu. Bu kadar bakılmaya alışık değildim. Hoşuma da gitti; bundan utandım.',
            ],
            degilse: [
              ['sai', 'Sade ve temiz. Annen de süsü sevmezdi kızım.', 'gulumser'],
              ['sefik', 'Abla, bugün çok güzelsin. Hep böyle giyin.'],
              {
                eger: (S) => window.B2_PUSULA.duydu(S),
                ise: ['Münevver Hanım beni baştan aşağı süzdü. Bir şey demedi.'],
                degilse: ['Münevver Hanım beni baştan aşağı süzdü ve bir şey demeden başını salladı. Bu, yüz söze bedeldi.'],
              },
            ],
          }],
        },
        /* (oyun için ek) NİŞAN SINAVI: sabahki hamlelerin karşılığı.
           munevver_tavir: sicak (söz ulaşmadı) / sinav_gecti / soguk */
        {
          eger: (S) => !window.B2_PUSULA.duydu(S),
          ise: [{ bayrak: { munevver_tavir: 'sicak' } }, { etki: { munevver: 2 } }],
          degilse: [
            'Münevver Hanım kutuyu açmadı. Elini kapağının üstünde tuttu. Naile Hanım fincanını dudağına götürdü, içmedi.',
            {
              eger: (S) => S.bayrak.kiyafet_nisan === 'yadigar',
              ise: [
                // Mavi elbise ve göğüsteki madalyon dedikoduya kendiliğinden cevap verir
                ['munevver', 'Bana bu sabah bir harf sordular. {b}B{/b}. Kimin harfiymiş, bir soruvereyim, demişler.'],
                'Salon sustu. Perihan Hanım\'ın yelpazesi açıldı.',
                'Münevver Hanım eğildi, göğsümdeki madalyonu iki parmağıyla tuttu. Çevirdi.',
                ['munevver', 'Behiye\'nin elbisesi sırtında, Behiye\'nin madalyonu göğsünde. Kopçasını annenin düğününde ben takmıştım. Bu kız annesinin harfini taşımayacak da kiminkini taşıyacak?'],
                ['munevver', 'Naile Hanım, kahveniz soğumuş. Tazelesinler.'],
                ['naile', 'Zahmet olmasın efendim. Ben... zaten kalkacaktım.'],
                { gizle: 'naile' },
                ['ic', 'Saklamadım. Saklamadığım şeyi kimse bana karşı kullanamadı.', 'gulumseyen'],
                { bayrak: { munevver_tavir: 'sinav_gecti' } }, { etki: { munevver: 3, itibar: 3 } },
              ],
              degilse: [{
                eger: (S) => window.B2_PUSULA.bilir(S),
                ise: [
                  // Münevver Feride'den şüphe etmez (romandaki koruyucu kişi); soruyu, söz herkesin önünde kapansın diye sorar
                  ['munevver', 'Feride, kızım. Bugün kulağıma bir söz getirdiler: boynundaki madalyonda bir harf varmış. Ben o harfi bilirim. Ama bu salonda herkes senin ağzından duysun da bu bahis burada kapansın. O harf kimin?'],
                  'Salon sustu. Perihan Hanım yelpazesini açtı. Şefik bir bana, bir babama baktı.',
                  {
                    eger: (S) => S.bayrak.baba_haber === 'inandi',
                    ise: [['sai', 'Hanımefendi sordu kızım. Cevabını ver. Ben buradayım.', 'ciddi']],
                    degilse: [{ eger: (S) => S.bayrak.baba_haber === 'yarim', ise: ['Babam bana baktı; başını hafifçe eğdi. Söyle, der gibi.'], degilse: [] }],
                  },
                  ['ic', 'Soracaklarını biliyordum. Bildiğim sorunun cevabı da bende.'],
                  {
                    soru: 'Bütün salon bana bakıyor. "O harf kimin?"',
                    secim: [
                      {
                        m: '"Annemin efendim. Behiye." Madalyonu gösterip başka bir şey dememek.', etki: { munevver: 3, itibar: 3, vakar: 1 }, bayrak: { munevver_tavir: 'sinav_gecti' },
                        iz: 'Doğruyu söyledin; gerisini Münevver Hanım halletti.',
                        adimlar: [
                          {
                            eger: (S) => S.bayrak.kiyafet_nisan === 'sade',
                            ise: ['Madalyonu yakamın içinden çıkardım. Zinciriyle avucuma yatırdım, ona uzattım.'],
                            degilse: [['f', 'Bugün boynumda değil efendim; odamda, annemin resminin yanında duruyor. Nimet getirsin, kendi gözünüzle görün.'], 'Nimet koşup getirdi. Avucuma koydu; ben de ona uzattım.'],
                          },
                          ['f', 'Annemin efendim. Behiye. Ondan bana kalan iki şeyden biri budur. Öbürü duvarda asılı.'],
                          ['munevver', 'Behiye\'nin B\'si. Bu madalyonun kopçasını annenin düğününde ben takmıştım kızım. Duyan duydu.'],
                          ['munevver', 'Naile Hanım, kahveniz soğumuş. Tazelesinler.'],
                          ['naile', 'Zahmet olmasın efendim. Ben... zaten kalkacaktım.'],
                          { gizle: 'naile' },
                          'Perihan Hanım\'ın yelpazesi durdu.',
                        ],
                      },
                      {
                        m: 'Cevabı verip Naile Hanım\'a dönmek: "Bir sözün bir kıza ne yaptığını siz bilirsiniz efendim."', kosul: (S) => !!S.bayrak.hanim_bilgi,
                        etki: { munevver: 3, itibar: 2, vakar: 2 }, bayrak: { munevver_tavir: 'sinav_gecti' },
                        iz: 'Naile Hanım\'a yarasını değil, vicdanını hatırlattın.',
                        adimlar: [
                          ['f', 'Annemin harfidir efendim; Behiye.'],
                          ['f', 'Naile Hanım, bir sözün bir kıza ne yaptığını en iyi siz bilirsiniz. Bana aynısını yapmayınız.'],
                          'Naile Hanım\'ın fincanı tabağında titredi. Gözlerini indirdi. İlk kez dedikoducu bir kadına değil, bir anneye benziyordu.',
                          ['naile', 'Ben... bana öyle söylediler. Sormak istedim yalnız.'],
                          ['munevver', 'Sordunuz, cevabını aldınız. Size söyleyene de selamımı götürün.'],
                          'Naile Hanım kalktı. Çıkarken başını Perihan Hanım\'a çevirmedi.',
                          { gizle: 'naile' },
                        ],
                      },
                      {
                        m: 'Cevabı verip Naile Hanım\'ı iğnelemek: "Kızınızın nişanı bozulalı harflere meraklı olmuşsunuz."', kosul: (S) => !!S.bayrak.hanim_bilgi,
                        etki: { itibar: 1, dedikodu: 1, isyan: 1 }, bayrak: { munevver_tavir: 'sinav_gecti', naile_kin: true },
                        iz: 'Naile Hanım\'ı kızının yarasıyla susturdun. Bir düşman kazandın.',
                        adimlar: [
                          ['f', 'Annemin harfidir efendim; Behiye. Ama asıl merak eden Naile Hanım olmalı. Kızlarının nişanı bozulalı harflere meraklı olmuşlar.', 'ofkeli'],
                          'Naile Hanım\'ın yüzü önce kızardı, sonra sarardı.',
                          ['naile', 'Bu ne terbiyesizlik! Sait Efendi, kızınız...'],
                          ['munevver', 'Feride. Yeter kızım. Cevabını verdin; gerisi sana yakışmadı.'],
                          'Naile Hanım kalktı. Kimse onu kapıya geçirmedi.',
                          { gizle: 'naile' },
                          ['ic', 'Susturdum. Münevver Hanım beni ilk kez azarladı. Suçu olmayan bir kızın adını koz ettim.', 'mahzun'],
                        ],
                      },
                      {
                        m: 'Başımı eğip susmak.', etki: { itibar: -3, dedikodu: 1 }, bayrak: { munevver_tavir: 'soz_yayildi' },
                        iz: 'Sustun. Seni Münevver Hanım savundu; ama Naile Hanım gördüğünü anlatacak.',
                        adimlar: [
                          'Cevabı biliyordum. Dilim dönmedi. Başımı eğdim.',
                          ['naile', 'Susmak da bir cevaptır hanımefendi.'],
                          ['sai', 'Kızım mahcuptur efendim. Annesinin yadigârıdır o.', 'mahzun'],
                          ['munevver', 'Sait Efendi\'nin sözü yeter. O harfi ben bilirim; Behiye\'nindir. Kopçasını kendi elimle takmıştım.'],
                          ['munevver', 'Naile Hanım, bir yıl uzun zamandır. Bu kıza taşıdığınız her sözün hesabını ben sorarım.'],
                          'Naile Hanım dudağını büktü, kalktı. Kapıdan çıkarken gülümsüyordu.',
                          { gizle: 'naile' },
                          ['ic', 'Beni Münevver Hanım savundu. Ben kendimi savunamadım. Naile Hanım yarın bunu anlatacak: "Kız sustu; kaynanası konuşturmadı."', 'mahzun'],
                        ],
                      },
                    ],
                  },
                ],
                degilse: [
                  // Hazırlıksız: Feride neyle suçlandığını o anda öğrenir; Münevver korur, ama söz dışarı çıkar
                  'Naile Hanım, Münevver Hanım\'ın kulağına eğildi. Bir şey fısıldadı. İkisi birden boynuma baktı.',
                  ['ic', 'Ne söyledi? Sabah o kapının ardında konuşulan şey bu. Ne olduğunu vaktinde öğrenemedim.', 'mahzun'],
                  ['munevver', 'Fısıltıya hacet yok Naile Hanım; yüksek sesle söyleyin de kız da duysun. Madalyonundaki harf bir erkeğin adıymış, öyle mi?'],
                  'Kan yüzüme hücum etti. Ağzımı açtım; ses çıkmadı. Demek buymuş.',
                  ['munevver', 'O harfi ben bilirim. Behiye\'nindir; kopçasını kendi elimle takmıştım. Bu bahis kapandı.'],
                  ['naile', 'Kapandı elbet efendim. Yalnız kızcağız pek kızardı; ben onu söylerim.'],
                  'Naile Hanım kalktı. Kapıdan çıkarken gülümsüyordu.',
                  { gizle: 'naile' },
                  ['ic', 'Münevver Hanım beni korudu. Ama Naile Hanım bu salondan bir şey götürdü: kıpkırmızı kesilmiş, tek kelime edememiş bir kız.', 'mahzun'],
                  { bayrak: { munevver_tavir: 'soz_yayildi' } }, { etki: { itibar: -2, dedikodu: 1 } },
                ],
              }],
            },
          ],
        },
        // Kâğıt elindeyse: Perihan'ı herkesin önünde ele vermek ya da kozu saklamak
        {
          // Kâğıt babaya verildiyse artık Feride'de değildir; o zaman söz babanındır
          eger: (S) => S.bayrak.munevver_tavir === 'sinav_gecti' && window.B2_PUSULA.kagit(S) && S.bayrak.baba_haber === 'inandi',
          ise: [
            'Babam elini yeleğinin cebine götürdü. Kâğıdın köşesi göründü. Perihan Hanım o köşeye baktı; rengi attı.',
            ['sai', 'Bu bahsi ben kapatıyorum hanımefendi. Evimde kimin ne yazdığını da ben soracağım. Bugün değil.', 'ciddi'],
            ['ic', 'Babam kâğıdı çıkarmadı. Ama cebinde olduğunu gösterdi. Bu evde ilk kez biri benim için bir şey sakladı.'],
            { etki: { baba_guven: 3, calibe_suphe: 2 } }, { bayrak: { baba_biliyor: true } },
          ],
          degilse: [],
        },
        {
          eger: (S) => S.bayrak.munevver_tavir === 'sinav_gecti' && window.B2_PUSULA.kagit(S) && S.bayrak.baba_haber !== 'inandi',
          ise: [{
            soru: 'Koynumda Perihan Hanım\'ın kâğıdı duruyor. Salon hâlâ sessiz.',
            secim: [
              {
                m: 'Kâğıdı çıkarıp Münevver Hanım\'a uzatmak: "Soruyu size yazan el budur."', etki: { isyan: 2, calibe_suphe: 3, munevver: 2 }, bayrak: { ifsa: true },
                iz: 'Perihan Hanım\'ı herkesin önünde ele verdin.',
                adimlar: [
                  ['f', 'Bu soruyu size kimin sordurduğunu da bilmenizi isterim efendim. Kâğıdı buradadır.', 'ofkeli'],
                  'Münevver Hanım kâğıdı aldı. Okudu. Sonra başını yavaşça Perihan Hanım\'a çevirdi.',
                  { goster: ['calibe', 'saskin'] },
                  ['calibe', 'Ben... Bu ne demek oluyor? Bu çocuk benim kâğıtlarımı mı karıştırıyor?', 'saskin'],
                  ['sai', 'Feride! Misafirin önünde... Ver o kâğıdı bana.', 'ciddi'],
                  'Babam kâğıdı aldı. Okurken eli titredi. Bana da, ona da bakmadı.',
                  { etki: { baba_guven: -2 } },
                  ['munevver', 'Ben bu evden bir gelin alıyorum Sait Efendi. Gelinin etrafındaki yazıları da artık ben okurum.'],
                  { goster: ['calibe', 'soguk'] },
                  ['ic', 'Yaptım. Geri alınmaz. Bu akşam o odaya nasıl gireceğim?'],
                ],
              },
              {
                m: 'Kâğıdı koynumda tutmak. Koz, kullanılmadıkça kozdur.', etki: { vakar: 1 }, bayrak: { ifsa: false },
                iz: 'Kâğıt hâlâ sende. Perihan Hanım bunu bilmiyor.',
                adimlar: [['ic', 'Elim koynuma gitti, geri geldi. Bugün değil. Bu kâğıdın günü başka bir gün.']],
              },
            ],
          }],
          degilse: [],
        },
        { goster: ['gerdanlik'] },
        'Münevver Hanım kutuyu açtı. Elmaslar kadife yataklarında uyuyor gibiydi.',
        'Gerdanlığı kendi eliyle boynuma taktı. Kilidi ensemde soğuk soğuk kapandı.',
        { gizle: 'gerdanlik' },
        { taki: 'gerdanlik', ad: 'Nişan gerdanlığı', alt: 'Münevver Hanım kendi eliyle taktı. Yedi yüz liralık elmas; boynunda ağır ve soğuk.' },
        // Portreyle aynı: elbiseye göre elin gittiği yer
        {
          eger: (S) => S.bayrak.kiyafet_nisan === 'yadigar',
          ise: [['ic', 'Elim gerdanlığa gitmedi. Altındaki madalyona gitti. Biri yeni, biri annemden.', 'mahzun']],
          degilse: [{
            eger: (S) => S.bayrak.kiyafet_nisan === 'gosterisli',
            ise: [['ic', 'Yelpazemi indirdim. Elim kendiliğinden elmaslara gitti. Taftanın boncukları yanında sönük kaldı.']],
            degilse: [['ic', 'Boş yakamın üstünde tek başına duruyor. Nimet haklıymış; elbise onu bekliyormuş.']],
          }],
        },
        // 1. bölüm sonundaki tehdidin izi: oyuncu Perihan'ın sözünü hatırlasın
        { goster: ['calibe', 'sinsi'] },
        'Herkes alkışladı. Perihan Hanım da alkışladı. Dudakları bir şey söyler gibi kıpırdadı; kimse duymadı.',
        ['pa', 'Perihan Hanım\'ın aklında tek bir cümle dönüyor: Bu kız o gerdanlıkla o konağa gelin giremeyecek. Harf tutmadıysa başkası tutar.'],
        { goster: ['calibe', 'gulumser'] },
        {
          eger: (S) => S.bayrak.munevver_tavir === 'soz_yayildi',
          ise: [
            // Kötü yolun bedeli: Münevver korur, ama söz Naile'yle kapıdan çıkmıştır
            ['munevver', 'İşte. Artık bu boyun bizim. Kim ne söylerse söylesin, benim gelinimdir.'],
            'Şefik elimi tuttu. Babam pencereye, Naile Hanım\'ın arabasının çıktığı kapıya baktı; bir şey söyleyecek oldu, söylemedi.',
            ['ic', 'Nişanlandım. Kaynanam arkamda. Ama o kapıdan çıkan kadın yarın üç kabul gününe uğrayacak; babam da onu durdurmadı.', 'mahzun'],
            { etki: { mukaddem: 3, munevver: 1 } },
          ],
          degilse: [
            ['munevver', 'İşte. Artık bu boyun bizim. Bir yıl sonra kızımı da, oğlumu da alıp gideceğim.'],
            ['sefik', 'Beni de mi nineciğim?'],
            ['munevver', 'Seni de kuzum. Ablan nereye, sen oraya. Sana ben annelik edeceğim.'],
            'Şefik bana baktı. Ben babama. Babamın gözleri parlıyordu.',
            ['munevver', 'Bu söz yıllar önce verildi Sait Efendi. Mutfak kapısında, ayaküstü. Ayaküstü verilen söz sağlam olur; ayak üstünde durur çünkü.'],
            'Herkes güldü. Perihan Hanım da güldü. Gözleri gülmedi.',
            { etki: { mukaddem: 5 } },
          ],
        },
        {
          eger: (S) => !!S.bayrak.mukaddem_gordu,
          ise: [{ not: { mukaddem: 'Nişanlım. Gerdanlığını annesi taktı; kendisi avludan pencereme baktı.' } }],
          degilse: [{ not: { mukaddem: 'Nişanlım. Gerdanlığını taktılar; yüzünü hâlâ görmedim.' } }],
        },
        { gizle: 'naile' },
        // Küçük zaferin sevinci: tehditten önce bir nefes (söz dışarı çıkmadıysa)
        {
          eger: (S) => S.bayrak.munevver_tavir !== 'soz_yayildi',
          ise: [
            ['sefik', 'Abla, boynun yıldız gibi! Eğil, bir daha bakayım.'],
            'Eğildim. Şefik parmağının ucuyla ortadaki damla taşa dokundu, sonra elini çekti; kırarım diye.',
            ['f', 'Kırılmaz kardeşçiğim. Bugün hiçbir şey kırılmaz.', 'gulumseyen'],
          ],
          degilse: [],
        },
        { kart: 'Akşama doğru Münevver Hanım gitti.' },
        { gizle: 'munevver' }, { gizle: 'sefik' },
        {
          soru: 'Münevver Hanım gitti. Gerdanlık hâlâ boynumda; ağır ve soğuk.',
          secim: [
            {
              m: 'Kutusuna koyup babama götürmek: "Bunu siz saklayınız efendim."', etki: { baba_guven: 5, vakar: 1 }, bayrak: { gerdanlik: 'baba' },
              adimlar: [
                { taki: null }, { goster: ['gerdanlik'] },
                'Gerdanlığı boynumdan çözdüm, kutusuna yatırdım. Babama uzattım.',
                ['f', 'Bunu siz saklayınız efendim.'],
                ['sai', 'Kızım, sen yıllardır nişanlısın. Ama elmas taşıyacak yaşta değildin, onun için vermedik.'],
                ['sai', 'Şimdi o yaşa geldin. Kendin sakla.'],
                'Kutuyu odama çıkardım, çekmeceme kilitledim. Anahtarı yakamın içine iliştirdim.',
              ],
            },
            {
              m: 'Kimseye sormadan çekmeceme kilitlemek.', etki: { mukaddem: 5, munevver: 1 }, bayrak: { gerdanlik: 'cekmece' },
              adimlar: [
                'Kimseye bir şey demedim. Odama çıktım, gerdanlığı çekmeceme koyup kilitledim.',
                { taki: null },
                ['ic', 'Bu evde benim olan bir şey daha. Öbürü duvarda asılı.'],
              ],
            },
            {
              m: 'Akşam sofrasına gerdanlık boynumda inmek.', etki: { mukaddem: 10, munevver: 2, calibe_suphe: 1, isyan: 1 }, bayrak: { gerdanlik: 'boyun' },
              adimlar: [
                'Gerdanlığı çıkarmadım. Akşam sofrasına onunla indim.',
                { arkaplan: 'yemek_salonu' },
                { goster: ['nabi'] }, { goster: ['suha'] },
                'Perihan Hanım\'ın gözü bütün yemek boyunca boynumdan ayrılmadı. Çorbasına bir kaşık bile dokunmadı.',
                ['nabi', 'Vay vay! Feride Hanım\'ın boynunda bir konak ışıldıyor!'],
                'Süha Bey tabağına baktı. Başını bir kez bile kaldırmadı.',
                ['ic', 'Sofradakilerin hepsi gerdanlığa bakıyor. Bir o bakmıyor. Bu da bir bakış.'],
                { gizle: 'nabi' }, { gizle: 'suha' }, { arkaplan: null },
                'Yemekten sonra odama çıktım, gerdanlığı çekmeceme kilitledim.',
                { taki: null },
              ],
            },
          ],
        },
        { gizle: 'gerdanlik' },
        { kiyafet: 'ev', kilit: 'Ziyaret bitti. Nişan kıyafetin sandığa kaldırıldı; bu bölümde gündelik ev kıyafetiyle dolaşırsın.' },
        'Gündelik kıyafetimi giyip aşağı indim. Babam sofada beni bekliyordu.',
        ['sai', 'Kızım, annen başı ağrıyor diye erkenden odasına çekildi. Git bir hatırını sor. Bugün onun da günüydü.'],
        ['ic', 'Onun da günüydü. Babam böyle düşünüyor.'],
        { gorev: 5 },
      ],
    },

    /* ------------------------------------------------------------------
       S6: Perihan'ın odası, perde arkası; S5 sonu: annenin resmi ve geri dönüşler
       ------------------------------------------------------------------ */
    {
      id: 'b2_calibe', mekan: 'calibe_oda', tetik: 'giris', kosul: (S) => S.gorev === 5,
      sahne: [{ id: 'calibe', ifade: 'soguk' }, 'reftar'],
      adimlar: [
        // (oyun için ek) Feride'nin kapıya gelişi
        'Perihan Hanım\'ın odası sarı. Sarı parke, sarı perdeler, sarı ipek koltuklar.',
        'Kendisi bir minderin üstünde, yastıkların arasına gömülmüş. Bir ayağı Hatice\'nin dizinde. Hatice ovuyor.',
        ['f', 'Başınız ağrıyormuş efendim. Hatırınızı sormaya geldim.'],
        ['calibe', 'Başım değil, ayaklarım. Sinirden.', 'soguk'],
        // (oyun için ek) Sabahki entrikanın hesabı: Perihan kazandıysa tatlı, kaybettiyse çıplak öfke
        {
          eger: (S) => !!S.bayrak.ifsa,
          ise: [
            ['calibe', 'Bugün beni misafirimin önünde hırsız gibi gösterdin. Kendi evimde. Kendi kâğıdımla.', 'ofkeli'],
            ['calibe', 'Baban bu akşam benimle konuşmadı. Yarın konuşacak. Ben ona ne anlatacağımı biliyorum; sen ne anlatacağını düşün.', 'sinsi'],
            ['ic', 'Maskesi düştü. Altındaki yüz, maskeden daha sakin.'],
          ],
          degilse: [{
            eger: (S) => S.bayrak.munevver_tavir === 'soz_yayildi',
            ise: [
              ['calibe', 'Naile Hanım pek erken kalktı, fark ettin mi yavrum? Onun dili durmaz; yarın bütün kabul günleri senin ne kadar kızardığını konuşur.', 'gulumser'],
              ['calibe', 'Üzülme. Münevver Hanım seni korur; ama o her kabul gününde yanında olamaz.', 'gulumser'],
              ['ic', 'Beni teselli ediyor. Yarayı açan elin merhemi.', 'mahzun'],
            ],
            degilse: [{
              eger: (S) => S.bayrak.pusula === 'alindi',
              ise: [
                ['calibe', 'Hatice\'nin elinden kâğıt almışsın. Mutfak kapısında, aşçının önünde. Bir hanımefendi hizmetçiyle boğuşmaz Feride.', 'ofkeli'],
                ['ic', 'Kâğıtta ne yazdığını sormuyor. İkimiz de biliyoruz.'],
              ],
              degilse: [
                ['calibe', 'Bugün iyi kurtardın. Münevver Hanım seni pek sevdi. Sevsin. Sevgi de yorulur.', 'sinsi'],
                ['ic', '"Kurtardın" dedi. Neyden kurtardığımı ikimiz de biliyoruz.'],
              ],
            }],
          }],
        },
        // Perihan de elbiseyi unutmamış: seçilen elbiseye göre iğneli söz
        {
          eger: (S) => S.bayrak.kiyafet_nisan === 'yadigar',
          ise: [['calibe', 'Bugün benim misafirimin karşısına ölmüş bir kadının elbisesiyle çıktın. Babanın yüzünü gördün mü? Ben gördüm.', 'sinsi']],
          degilse: [{
            eger: (S) => S.bayrak.kiyafet_nisan === 'gosterisli',
            ise: [['calibe', 'Benim seçtiğim kumaş sana yakıştı. Herkes de gördü kimin seçtiğini. Bunu unutma.', 'gulumser']],
            degilse: [['calibe', 'Fakir kız gibi giyinmişsin. Münevver Hanım sana acıdı mı bari?', 'sinsi']],
          }],
        },
        ['calibe', 'Gerdanlık yakıştı mı bari? Göster bakayım boynunu.'],
        {
          eger: (S) => S.bayrak.gerdanlik === 'boyun',
          ise: [['f', 'Çıkardım efendim. Çekmecemde.'], ['calibe', 'Sofrada bütün akşam taşıdın. Yeterince gördüm.', 'soguk']],
          degilse: [['f', 'Çekmecemde efendim.'], ['calibe', 'İyi. Kaybedersen Münevver Hanım bunu bana sorar.', 'soguk']],
        },
        // "Perihan Hanım bunu unutmayacak": 1. bölümde ona karşı yapılanın karşılığı burada gelir
        {
          eger: (S) => S.v.calibe_suphe >= 1,
          ise: [
            { goster: ['calibe', 'sinsi'] },
            {
              eger: (S) => S.bayrak.murekkep === 'itiraz',
              ise: [['calibe', 'Nazlı\'nın mürekkebi için bana "kabahat onda" demiştin. Odanda, kardeşinin önünde. Ben unutmam Feride.', 'sinsi']],
              degilse: [{
                eger: (S) => S.bayrak.reftar_bahce === 'sert',
                ise: [['calibe', 'Düğün evinde, hanımların ortasında benim hizmetçime çantasını açtırmaya kalkmışsın. Hatice ağlaya ağlaya anlattı.', 'sinsi']],
                degilse: [{
                  eger: (S) => S.bayrak.bakis === 'goz',
                  ise: [['calibe', 'Düğün evinde gözlerimin içine bakmıştın. Bir daha bakarsan ne gördüğünü de söylersin.', 'sinsi']],
                  degilse: [{
                    eger: (S) => S.bayrak.mendil === 'hizmetci',
                    ise: [['calibe', 'Mendilimi bir hizmetçiye arattın. Benim işimi başkasına havale etmeyi kimden öğrendin?', 'sinsi']],
                    degilse: [{
                      eger: (S) => S.bayrak.sofra_bakis === 'cevap',
                      ise: [['calibe', 'Sofrada ağabeyime hak verdin. Ona yaranmayı öğrendin demek. İyi. Ben de not ettim.', 'sinsi']],
                      degilse: [['calibe', 'İğneyi tülüme kendi elinle iliştirdin. Ellerin hiç titremedi. Onu da unutmadım.', 'sinsi']],
                    }],
                  }],
                }],
              }],
            },
            ['ic', 'Unutmamış. Hiçbirini unutmamış. Bir defter tutuyor; benimki gibi.'],
            { goster: ['calibe', 'soguk'] },
          ],
          degilse: [],
        },
        ['reftar', 'Küçük hanım ne kadar bahtlı. Herkesin nişanı böyle olmaz.'],
        ['calibe', 'Sus Hatice. Sen Feride, git odana. Yarın yine ders var.', 'soguk'],
        ['ic', 'Hatırımı sormadılar. Ben de sormamış sayıldım.'],
        { temizle: true },
        { kart: 'Feride kapıyı örttü. Oda bir süre sessiz kaldı.' },

        // Perde arkası
        { goster: ['calibe', 'soguk'] }, { goster: ['reftar'] },
        ['pa', 'Hatice fısıltıyla anlatıyor: yeni madam ilk günden küçük hanıma bağlanmış, bizim tarafa geçmezmiş.'],
        { gizle: 'reftar' },
        ['pa', 'Avluda bir araba sesi. Biraz sonra kapıda Süha Bey.'],
        { goster: ['suha'] },
        ['suha', 'İnsanı hem çağırırlar, hem ayakta bekletirler. Ne düşünüyorsun bu kadar?'],
        {
          eger: (S) => S.bayrak.munevver_tavir === 'soz_yayildi',
          ise: [['calibe', 'Bir harf işimi yarım gördü. Kadın kızı korudu; ama Naile o salondan dolu çıktı. Yarın üç konak duyar.', 'soguk']],
          degilse: [['calibe', 'Bir harfle bozulur sandım. Bozulmadı. Kız beni yendi bugün Süha.', 'ofkeli']],
        },
        ['calibe', 'Feride\'ye nişan takıldı. Münevver Hanım\'ın bir ayağı artık bu evde.', 'soguk'],
        ['calibe', 'O kadın her şeyden mana çıkarır. Efendi de onun sözünden çıkmaz. Bu evlilik olmamalı. Kız uzağa gelin gitmeli.'],
        ['suha', 'Ne yapacaksın?'],
        ['calibe', 'Bir söz çıkacak. Nereden çıktığını kimse bilmeyecek.', 'sinsi'],
        ['calibe', 'Ama kızın gönlü nişanlısındaysa söz de para etmez. Önce o gönlü soğutmak gerek. Bana inanmaz.'],
        ['pa', 'Süha Bey\'in gözleri bir an parlıyor. O ışığı çabuk söndürüyor.'],
        ['suha', 'Bu ancak benim işim. Bir şartla: onunla daha sık görüşeceğim. Yalnız konuşacağım. Sen karışmayacaksın.'],
        ['calibe', 'Süha...', 'soguk'],
        ['suha', 'Önümüzde koca bir yıl var. Sabırlı ol.'],
        ['pa', 'Perihan Hanım razı oluyor. Neye razı olduğunu bilmeden.'],
        { temizle: true },
        ['pa', 'O hafta Süha Bey, Perihan Hanım\'ın çekmecesinden kendi imzasını taşıyan bir kâğıdı bir oyunla alıyor. Mumun alevinde yakıyor.'],
        ['pa', 'Artık bu konaktan istediği gün gidebilir. Gitmiyor.'],

        // Gece: annenin resmi
        { kart: 'O gece.' },
        { mekan: 'fazila_oda' },
        { goster: ['resim'] }, { goster: ['mehves'] },
        'Nimet kandili yaktı, çekildi. Annemin resmi duvardan bana bakıyor.',
        ['ic', 'Gerdanlığı gördün mü anne? Bir yıl sonra bu odadan çıkacağım.'],
        { gizle: 'mehves' },
        { arkaplan: 'fazila_oda' }, { temizle: true },
        { kart: 'Üç yıl önce.' },
        'Babam annemin resmini bir sandıktan çıkarıp bana verdiği yıl. Beş yıldır görmediğim yüzü hemen tanımış, odama asmıştım.',
        { goster: ['oiselle'] },
        'Birkaç gün sonra Madam Oiselle, çocuklar derslerini bırakıp resme bakıyor diye onu kaldırmak istedi.',
        'Elini resme uzatmadan önünde beni buldu.',
        // (oyun için ek) Geri dönüşte oyuncuya bir söz: Feride'nin ilk dik duruşunu oyuncu biçimlendirir
        {
          soru: 'On dört yaşındayım. Madam Oiselle resme uzanıyor.',
          secim: [
            {
              m: '"Madam Oiselle, siz o resmi kaldıramayacaksınız."', etki: { isyan: 1 }, bayrak: { oiselle: 'dik' },
              iz: 'Başını ilk kez yere eğmedin.',
              adimlar: [
                ['f', 'Madam Oiselle, siz o resmi kaldıramayacaksınız.', 'ofkeli'],
                ['oiselle', 'Ne! Bana karşı mı geliyorsun?'],
                ['f', 'Size karşı gelmem. Derslerimde kusur etmem. Ama annemin yüzüne de kimse dokunmaz.'],
                'Söylenerek çıktı. On dört yaşındaydım. Başımı ilk kez yere eğmedim.',
              ],
            },
            {
              m: 'Resmi kendi elimle indirip yatağımın başına asmak.', etki: { vakar: 1 }, bayrak: { oiselle: 'tedbir' },
              iz: 'Resmi kimsenin uzanamayacağı yere astın.',
              adimlar: [
                'Bir şey demedim. Resmi duvardan kendim indirdim, yatağımın başına, kapıdan görünmeyen yere astım.',
                ['oiselle', 'Ders odasında olmasın da nerede olursa olsun.'],
                ['ic', 'Kavga etmedim. Ama annemin yüzünü de vermedim. On dört yaşında öğrendiğim ilk hile buydu.'],
              ],
            },
          ],
        },
        { temizle: true }, { arkaplan: null },
        { goster: ['resim'] },
        ['ic', 'O günden beri resim yerinde. Ben de yerimdeyim.'],

        // Yaz sonu
        { temizle: true },
        { kart: 'Yaz sonu.\nDüğüne on bir ay.' },
        { mekan: 'josephine_oda' },
        { goster: ['josephine'] }, { goster: ['sefik'] },
        'Madam\'ın odasında Fransızca dersindeyiz. Şefik fiil çekiyor, ben pencereden bahçeye bakıyorum.',
        ['josephine', 'Feride Hanım, yorgun görünüyorsunuz. Bu sabah yüzünüz soluk.'],
        { goster: ['mehves'] },
        ['mehves', '{i}(Kapıdan){/i} Hanımcığım, Süha Bey odanızda sizi bekliyor. Sağlığınızı soracakmış.'],
        ['ic', 'Sağlığımı mı? Ben hasta değilim. Perihan Hanım harfle beceremedi; şimdi sıra ağabeyinde mi?'],
        { gorev: 6 },
      ],
    },

    /* ------------------------------------------------------------------
       S7: Süha'nın ilacı (B2-Ç3)
       ------------------------------------------------------------------ */
    {
      id: 'b2_ilac', mekan: 'fazila_oda', tetik: 'giris', kosul: (S) => S.gorev === 6,
      sahne: ['suha', 'resim'],
      adimlar: [
        'Süha Bey pencerenin önünde ayakta duruyordu. Elinde küçük, koyu renkli bir şişe.',
        ['suha', 'Feride Hanım. Geçen hafta yüzünüze dikkat ettim. Renginiz uçuk.'],
        ['f', 'Bir şeyim yok dayı bey.'],
        ['suha', 'Hekim benim, küçük hanım. Önce bir üşütme diye başlar. İhmal edilirse ilerler.'],
        'Bileğimi tuttu, saatine baktı. Nabzımı uzun saydı.',
        ['suha', 'İlacınızı kendim getirdim. Eczacıya bırakmam; yanlış yapar. Her gün kendim içireceğim.'],
        'Şişenin üstüne baktım. Ne bir ad var, ne bir eczane kâğıdı.',
        ['ic', 'Bu evde bana gelen her şey kâğıtsız geliyor: suçlama imzasız, ilaç reçetesiz.'],
        {
          soru: 'Süha Bey kaşığı doldurdu. Şişenin üstünde ne bir ad var ne bir eczane kâğıdı.',
          secim: [
            {
              m: 'İçmek.', etki: { suha: 4 }, bayrak: { ilac: 'icti' },
              adimlar: [
                'İçtim. Tatlı, biraz da acı.',
                ['suha', 'Aferin. Yarın yine uğrarım. Ertesi gün de.'],
                'Gülümsedi. Kapıyı kapatırken bir an daha baktı.',
                ['ic', 'Babam bu ilgiyi duyarsa sevinir. Ben neden sevinmiyorum?'],
              ],
            },
            {
              m: '"Reçetesini lütfeder misiniz dayı bey?"', etki: { suha: -4, vakar: 1 }, bayrak: { ilac: 'recete' },
              adimlar: [
                ['f', 'Reçetesini lütfeder misiniz dayı bey? Madam okumayı biliyor, saatlerini o tutar.'],
                ['suha', 'Reçeteye ne hacet? Kendi elimle getiriyorum.'],
                ['f', 'Hiç değilse adını söyleyiniz. Ne içtiğimi bileyim.'],
                'Bir an durdu. Sonra güldü.',
                ['suha', 'Bir kuvvet şurubu. Bu yaşta kızlara iyi gelir. Merak etmeyiniz.'],
                // Temkinli oyuncunun kararı kendisine kalsın: ad yetmez, reçete beklenebilir
                {
                  soru: 'Süha Bey kaşığı uzatıyor. Reçete vermedi, yalnız bir ad söyledi.',
                  secim: [
                    {
                      m: '"Adını söylediniz. Reçetesini de görünce içerim dayı bey."', etki: { suha: -2, vakar: 1 }, bayrak: { recete_ertele: true },
                      iz: 'Kaşık şişeye geri döndü.',
                      adimlar: [
                        'Bir an yüzüme baktı. Sonra kaşığı şişeye boşalttı.',
                        ['suha', 'İnatçısınız. Anneniz de öyleymiş derler.'],
                        'Şişeyi masamın üstüne bıraktı, çıktı.',
                        ['ic', 'Şişe orada duruyor. Ben ona bakıyorum, o bana.'],
                      ],
                    },
                    {
                      m: 'Kaşığı içmek.', etki: { suha: 2 },
                      iz: 'Adını öğrendin, hastalığını öğrenmedin.',
                      adimlar: ['Kaşığı içtim. Adını öğrenmiştim. Hastalığımın adını hâlâ bilmiyordum.'],
                    },
                  ],
                },
              ],
            },
            // (oyun için ek)
            {
              m: 'İçmiş gibi yapıp şişeyi Madam\'a göstermek.', etki: { suha: -4, calibe_suphe: 1, josephine: 2 }, bayrak: { ilac: 'josephine', delil_ilac: true },
              adimlar: [
                'Kaşığı ağzıma götürdüm, mendilime boşalttım. Süha Bey pencereye dönmüştü.',
                ['suha', 'Yarın yine uğrarım.'],
                { gizle: 'suha' },
                'Kapı kapanır kapanmaz şişeyi alıp ara kapıdan geçtim.',
                { goster: ['josephine'] },
                ['josephine', 'Ne bu? Verin bakayım.'],
                'Madam şişeyi kokladı. Parmağının ucuyla tadına baktı.',
                ['josephine', 'Mon Dieu. Bu ilaç değil Feridecim. Kuvvet şurubu. İştah açar. Hastaya değil, zayıfa verilir.'],
                ['f', 'Ben hasta değilim, öyle mi?'],
                ['josephine', 'Sizde hastalık yok. Bu şişede de ilaç yok.'],
                'Kapı aralığında bir gölge kıpırdadı. Baktığımda kimse yoktu. Ama bir etek hışırtısı duydum.',
                ['ic', 'Hatice. Bu evde kapı aralıkları hep onundur.'],
                { delil: 'Süha Bey\'in reçetesiz "ilacı": bir kuvvet şurubu. Madam tattı.' },
              ],
            },
          ],
        },
        { temizle: true },
        { kart: 'Başka bir gün.' },
        ['ic', 'Şefik kâğıtlarını bahçeye indirmiş. Bugün martıları çizecektik.'],
        { gorev: 7 },
      ],
    },

    /* ------------------------------------------------------------------
       S8: Aşk sohbeti ve hediye kitap (B2-Ç4)
       ------------------------------------------------------------------ */
    {
      id: 'b2_kitap', mekan: 'konak_bahce', tetik: 'giris', kosul: (S) => S.gorev === 7,
      sahne: ['sefik'],
      adimlar: [
        'Çardağın altında Şefik\'le kâğıtları serdik. Kayığın yelkenini o çizdi, martıları ben.',
        // (oyun için ek) Halim Efendi'nin duyurusu nişan sahnesinden buraya alındı
        ['sefik', 'Abla, babam bana hoca tutmuş! Yazıhanedeki kâtibi, Halim Efendi. Haftada iki akşam selamlıkta yazı gösterecek. Yazısı inci gibiymiş.'],
        { goster: ['suha'] },
        'Çakılda ayak sesi. Süha Bey koltuğunun altında bir kitapla geldi.',
        ['suha', 'Ressamlarımızı rahatsız etmeyeyim. Şefik Bey, Madam seni çağırıyor; fiillerin yarım kalmış.'],
        ['sefik', 'Ben şimdi gelirim abla.'],
        { gizle: 'sefik' },
        ['ic', 'Madam onu çağırmamıştı; çağırsa ben de duyardım.'],
        'Süha Bey karşımdaki iskemleye oturdu. Kitabı masaya, elimin yanına bıraktı.',
        // 1. bölümdeki vals ya da sofradaki cevap
        { eger: (S) => S.bayrak.piyano === 'vals',
          ise: [['suha', 'O akşam çaldığınız valsi unutamadım Feride Hanım. Romanlardaki kızlar da öyle çalar.'], ['ic', 'Bir vals çaldım diye bir roman getirmiş.']],
          degilse: [{ eger: (S) => S.bayrak.sofra_bakis === 'cevap',
            ise: [['suha', 'Sofrada bana hak vermiştiniz. O akşamdan beri sizinle konuşmak kolay geliyor.'], ['ic', 'Bir "doğru söylüyorsunuz" bu kadar uzun mu sürer?']],
            degilse: [] }] },
        ['suha', 'Biliyor musunuz Feride Hanım, insan vücudunda iki yüzden fazla kemik vardır. Hiçbiri kalbi korumaya yetmez. Onu asıl koruyan başka bir kalptir.'],
        ['suha', 'Romanlar hep bunu anlatır. İmkânsızı başaran aşkları. Her engeli aşan âşıkları.'],
        'Sesi alçak, cümleleri düzgün. Kenan Bey\'in adını bir kez bile anmadı.',
        ['suha', 'Bu kitap size. Paris baskısı. Sevenlerin ne kadar yüce olduğunu anlatır. Kalbinde aşk olan merhametli olur.'],
        ['ic', 'Sözlerinden değil, bakışından sıkılıyorum. Sözleri bir derse benziyor. Bakışı dersten başka bir şey.'],
        { bayrak: { talip_suha: true } },
        { not: { suha: 'Dayı bildiğim adam. Bana roman getiriyor; bakışını bir yere koyamıyorum.' } },
        {
          soru: 'Süha Bey kitabı masaya bıraktı. Gitmiyor; anlatıyor.',
          secim: [
            {
              m: 'Dinlemek. Kitabı almak.', etki: { suha: 8 }, bayrak: { suha_sohbet: 'dinledi' },
              adimlar: [
                'Kitabı aldım. Teşekkür ettim. Süha Bey yarım saat daha anlattı.',
                'Güneş çardağın öbür yanına geçti. Ben hâlâ dinliyordum.',
                ['suha', 'Bir dahaki sefere okuduklarınızı bana anlatırsınız.'],
                'Kalkıp gitti. Mutfak kapısının oradan bir terlik sesi geldi, sonra kesildi.',
                ['ic', 'Perihan Hanım\'ın terliği. O sesi her yerde tanırım.'],
              ],
            },
            {
              m: '"Dersim var efendim." Kitabı geri vermek.', etki: { suha: -4, vakar: 1 }, bayrak: { suha_sohbet: 'kesti' },
              adimlar: [
                ['f', 'Teşekkür ederim dayı bey. Ama dersim var. Madam bekliyor.'],
                'Kitabı iki elimle ona uzattım.',
                'Süha Bey gülümsedi. Kitabı koltuğunun altına geri aldı. Gülümsemesi gözlerine varmadı.',
                ['suha', 'Nasıl isterseniz. Ders önemlidir.'],
              ],
            },
            {
              m: 'Şefik\'i ve Madam\'ı çağırmak; kitabı Şefik\'e okutmak.', etki: { sefik: 1, josephine: 1 }, bayrak: { suha_sohbet: 'sefik' },
              adimlar: [
                ['f', 'Şefik! Madam! Gelin, dayı bey Fransızca bir kitap getirmiş.', 'gulumseyen'],
                { goster: ['sefik'] }, { goster: ['josephine'] },
                'Şefik koşarak geldi, Madam arkasından. Kitabı Şefik\'e verdim.',
                ['sefik', '"Il était... une fois..." Abla, doğru mu okudum?'],
                ['josephine', 'Très bien, Şefik Bey!'],
                'Süha Bey çocukla şakalaşmak zorunda kaldı. Biraz sonra saatine baktı, kalktı.',
                ['suha', 'Hastalarım bekler. Allah\'a ısmarladık.'],
                ['ic', 'Pazar günü onu bekleyen hasta yoktu.'],
              ],
            },
          ],
        },
        { temizle: true },
        // (oyun için ek) Kenan'ın notu: nişan günü Şefik'in cebine konmuş tek satır
        { goster: ['sefik'] },
        'Süha Bey gidince Şefik çardağa döndü. Etrafına baktı, sonra cebinden dörde katlanmış küçük bir kâğıt çıkardı.',
        ['sefik', 'Abla, sana bir şey vereceğim. Nişan günü Kenan ağabey arabaya binerken cebime koydu. "Ablan yalnız kalınca ver" dedi. Sen hiç yalnız kalmadın ki!'],
        { goster: ['mukaddem_not'] },
        'Kâğıdı açtım. Tek satır. Yazısı dik, harfleri aralıklı.',
        {
          eger: (S) => S.bayrak.yasemin === 'sakla',
          ise: ['{i}"Şefik\'e verdiğim kitabın arasında bir çiçek vardı. Bulduysanız, bilin ki orada tesadüfen durmuyordu. M."{/i}', ['ic', 'Yasemin mendilimde. Yedi yıl saklamış. Bulduğumu da merak ediyor.', 'utanmis']],
          degilse: [{
            eger: (S) => S.bayrak.yasemin === 'geri',
            ise: ['{i}"Şefik\'e verdiğim kitabın arasında bir çiçek vardı. Bulduysanız, bilin ki orada tesadüfen durmuyordu. M."{/i}', ['ic', 'Buldum. Yerine de koydum. O sayfayı yine açacağım bu gece.', 'utanmis']],
            degilse: [{
              eger: (S) => !!S.bayrak.mukaddem_gordu,
              ise: ['{i}"Bugün bir kafese baktım. Kafesin ardında kimse var mıydı, bilmiyorum. Olmasını diledim. M."{/i}', ['ic', 'Vardı. Ben vardım.', 'utanmis']],
              degilse: ['{i}"Yedi yıl önce bahçenizde bana bir dal yasemin uzatmıştınız. Unutmadım. M."{/i}', ['ic', 'On yaşındaydım. Barışalım diye uzatmıştım. O hâlâ saklıyor demek.', 'utanmis']],
            }],
          }],
        },
        { etki: { mukaddem: 6 } },
        {
          soru: 'Elimde nişanlımın el yazısı. Nişanlı kıza mektup gelmez; gelirse de saklanmaz.',
          secim: [
            {
              m: 'Kâğıdın altına tek kelime yazıp Şefik\'e geri vermek.', etki: { mukaddem: 6, isyan: 1 }, bayrak: { not_mukaddem: 'cevap' },
              iz: 'Cevap yazdın. Kâğıt şimdi Şefik\'in cebinde.',
              adimlar: [
                'Şefik\'in kurşun kalemini aldım. Satırın altına tek kelime yazdım: {i}"Buldum."{/i}',
                ['f', 'Hocana yazı götürür gibi götüreceksin. Kimseye göstermeyeceksin. Söz mü?'],
                ['sefik', 'Söz abla! Cebimin en dibine koyuyorum.'],
                ['ic', 'Bir kelime. Bir kelimeyle kimse asılmaz. Öyle değil mi?'],
              ],
            },
            {
              m: 'Katlayıp çekmeceme, gerdanlığın yanına kilitlemek.', etki: { mukaddem: 3 }, bayrak: { not_mukaddem: 'sakla' },
              iz: 'Not çekmecende, kilit altında.',
              adimlar: [
                'Kâğıdı katladım, koynuma koydum. Akşam çekmeceme, gerdanlığın yanına kilitledim.',
                ['ic', 'Cevap yazmadım. Ama atmadım da. Saklamak da bir cevaptır.'],
              ],
            },
            {
              m: 'Bir kez daha okuyup mutfak ocağında yakmak.', etki: { vakar: 2 }, bayrak: { not_mukaddem: 'yak' },
              iz: 'Notu ezberledin ve yaktın.',
              adimlar: [
                'Satırı bir kez daha okudum. Sonra mutfağa indim, kâğıdı ocağın közüne bıraktım. Kıvrıldı, karardı.',
                ['ic', 'Ezberimde. Ezberi kimse çekmeceden çalamaz.'],
              ],
            },
          ],
        },
        { gizle: 'mukaddem_not' }, { gizle: 'sefik' },
        ['ic', 'Odama dönerken aşağıda Perihan Hanım\'ın sesini duydum. Beni soruyordu. Tatlı tatlı.'],
        { gorev: 8 },
      ],
    },

    /* ------------------------------------------------------------------
       S9: Perihan'ın tatlılığı ve Kenan'ın resmi
       ------------------------------------------------------------------ */
    {
      id: 'b2_resim', mekan: 'konak_sofa', tetik: 'giris', kosul: (S) => S.gorev === 8,
      sahne: [{ id: 'calibe', ifade: 'gulumser' }],
      adimlar: [
        ['calibe', 'Feridecim! Nerelerdesin kızım? Hep odana kapanıyorsun. Gel, otur aramızda.', 'gulumser'],
        ['calibe', 'Münevver Hanım geçen gün bir şey bıraktı. Sana vermemi istedi. Ben de unutmuşum, kusura bakma.'],
        'Kadife bir zarfı uzattı. Ağzı açılmış, yeniden kapatılmış. İçinden bir resim çıktı.',
        ['ic', 'Bana gelen bir şey yine onun elinden geçerek geldi. Kaç gün bekletti? Bakmadan mı bekletti?'],
        { goster: ['mukaddem_foto'] },
        ['calibe', 'Kenan Bey nişandan sonra resim çektirmiş. Annesi birini de sana ayırmış.', 'gulumser'],
        'Uzun boylu, genç bir adam. Saçları özenle taranmış. Gözleri resmin içinden bile ciddi.',
        {
          eger: (S) => !!S.bayrak.mukaddem_gordu,
          ise: [['ic', 'Kafesin ardından gördüğüm yüz. O gün başını kaldırmıştı; burada objektife bakıyor. İkisinde de aynı ciddiyet.']],
          degilse: [['ic', 'Aklımdaki yüz on dört yaşında bir çocuğun yüzüydü. Bu o değil. Bu bir adam.']],
        },
        ['calibe', 'Yakışıklı, değil mi? Herkes öyle söylüyor. Dışarıda da çok seviliyormuş.', 'gulumser'],
        ['ic', 'Dışarıda. Bu sözü neden söyledi?'],
        { etki: { mukaddem: 5 } },
        { not: { mukaddem: 'Resmi çekmecemde. Aklımdaki çocuk yüzü gitti; yerinde bir adam var.' } },
        ['f', 'Teşekkür ederim efendim.', 'utanmis'],
        ['calibe', 'Ne teşekkürü kızım. Biz bir aileyiz. Hem Nabi seni arıyordu, salonda. Bir şey soracakmış. Git bak.'],
        { gizle: 'calibe' }, { gizle: 'mukaddem_foto' },
        'Resmi koynuma sakladım. Odama uğrayıp çekmeceme, gerdanlığın yanına kilitledim.',
        // 1. bölümdeki yasemin seçimi
        { eger: (S) => S.bayrak.yasemin === 'sakla',
          ise: [['ic', 'Mendilimin içindeki yasemine dokundum. Yedi yıl onun kitabında durmuş. Şimdi yüzü de bende.', 'utanmis']],
          degilse: [{ eger: (S) => S.bayrak.yasemin === 'geri',
            ise: [['ic', 'Yasemin hâlâ Şefik\'in kitabında, o sayfada. Bu yüze bakınca hangi sayfa olduğunu yine hatırladım.', 'utanmis']],
            degilse: [] }] },
        ['ic', 'Bana gelen resim onun elinden geçti. Benden giden bir şey olsa o da geçer miydi?'],
        { gorev: 9 },
      ],
    },

    /* ------------------------------------------------------------------
       S10: Nabi'nin aracılık isteği
       ------------------------------------------------------------------ */
    {
      id: 'b2_nabi', mekan: 'buyuk_salon', tetik: 'giris', kosul: (S) => S.gorev === 9,
      sahne: ['nabi'],
      adimlar: [
        'Nabi Bey piyanonun kapağına dirseğini dayamış, bir eliyle fesini çeviriyordu.',
        ['nabi', 'Feride Hanım! Buyurun, buyurun. Sizinle iki çift lafım var.'],
        ['f', 'Buyurunuz dayı bey.'],
        ['nabi', 'Şu arkadaşınız, Leyla Hanım. Geçen hafta bahçede, çardakta oturuyordunuz. Başörtüsüzdü. Kafesin ardından gördüm.'],
        ['f', 'Sen benim misafirlerimi gözetlemeye cesaret mi ettin?', 'ofkeli'],
        ['nabi', 'Kızma canım. Göz bu, görür. Şimdi bana bir iyilik edeceksin: ona benden bir pusula götüreceksin. Sen verirsen okur.'],
        ['ic', 'Bu evde herkes birine kâğıt taşıtmak istiyor. Sıra bana gelmiş.'],
        ['nabi', 'Benim aylığım on lira. On lirayla kim evlenir? Bana bir gelir kapısı lazım.'],
        ['f', 'Siz Leyla\'yı mi seviyorsunuz, babasının konağını mı?'],
        ['nabi', 'Hiç o kadar zengin kız sevilmez mi?'],
        ['ic', 'Sevgisini malıyla tartıyor. Terazisi de kendisi.'],
        // (oyun için ek) Karşı çıkışın tonunu oyuncu seçer; iki yol aynı cevaba varır
        {
          soru: 'Nabi Bey cevabımı bekliyor, fesini parmağında çeviriyor.',
          secim: [
            {
              m: '"Ben bu işe aracı olmam dayı bey."', etki: { vakar: 1 },
              adimlar: [['f', 'Ben bu işe aracı olmam dayı bey.']],
            },
            {
              m: '"Leyla\'ya kendisi ne istiyor diye hiç sordunuz mu?"', etki: { isyan: 1 }, bayrak: { nabi_soru: true },
              adimlar: [
                ['f', 'Leyla\'ya kendisi ne istiyor diye hiç sordunuz mu dayı bey?', 'ofkeli'],
                ['nabi', 'Kızlara ne sorulur canım? Babasına sorulur. Babası da bana sorulmaz, orası ayrı.'],
                ['ic', 'Kimseye sormadan almak istiyor. Konağı da, kızı da.'],
                ['f', 'O hâlde ben de aracı olmam.'],
              ],
            },
          ],
        },
        ['nabi', 'Neden? Sen de kendi nişanlına bayılıyorsun. Biraz da bize lütfet.'],
        ['f', 'Ailesinin seçtiği koca kötü çıkarsa bir kız ailesine döner, şikâyet eder. Kendi seçtiği kötü çıkarsa susmaya mahkûm olur. Ben arkadaşımı susmaya mahkûm etmem; kimsenin pusulasını da taşımam.'],
        ['nabi', 'Ne büyük laflar. Bakalım bu lafları kimin kulağına söyleyeceksin.'],
        'Kalktım. Bir şey demeden salondan çıktım. Arkamdan güldüğünü duydum.',
        { temizle: true },
        ['ic', 'Vazgeçmeyecek. Leyla\'nın babasının konağı onun gözünde bir hazine.'],
        { gorev: 10 },
      ],
    },

    /* ------------------------------------------------------------------
       S11: Leyla'yı uyarmak (B2-Ç5); S12: kanca; bölüm sonu
       ------------------------------------------------------------------ */
    {
      id: 'b2_uyari', mekan: 'fazila_oda', kisi: 'mehves', kosul: (S) => S.gorev === 10,
      sahne: ['mehves', 'resim'],
      adimlar: [
        'Akşam. Nimet kandili yaktı, fitilini düzeltti.',
        ['mehves', 'Yüzün asık hanımcığım. Nabi Bey yine ne dedi?'],
        ['f', 'Leyla\'ya göz koymuş Nimet. Babasının malına.'],
        ['mehves', 'Vah zavallı kız. Bilmez ki.'],
        {
          soru: 'Nabi Bey vazgeçmeyecek. Leyla\'nın haberi olmalı mı?',
          secim: [
            {
              m: 'Beklemek. Geldiğinde yüz yüze, usulünce konuşmak.', etki: { vakar: 1 }, bayrak: { fevkiye_uyari: 'bekle' },
              adimlar: [
                ['f', 'Bekleyeceğim Nimet. Gelince yüz yüze söylerim.'],
                ['ic', 'Böyle şey kâğıda yazılmaz. Kâğıt dolaşır, söz kalır.'],
                ['mehves', 'Akıllı kızsın. Annen de öyleydi.'],
              ],
            },
            // (oyun için ek)
            {
              m: 'Leyla\'ya içten bir mektup: ad vermeden, "kendini kolla".', etki: { isyan: 1 }, bayrak: { fevkiye_uyari: 'mektup' },
              adimlar: [
                'Divitimi açtım. Kalemi iki kere mürekkebe batırdım, iki kere silktim.',
                '{i}Leyla kardeşim, bu aralar etrafında dolaşan gözler var. Kimin olduğunu sorma. Kendini kolla, bir şey olursa önce bana yaz. Seni seven Feride.{/i}',
                ['mehves', 'Ver, ben götürürüm. Kimse görmez.'],
                ['ic', 'Ad vermedim. Leyla de sormasın.'],
                // Leyla'nın tepkisi mektup ulaşınca gelir (sonuç önceden bildirilmesin)
                { kart: 'Bir saat sonra.' },
                ['mehves', 'Verdim hanımcığım. Okudu, gözleri doldu. "Feride\'ye söyle, kendimi kollarım. Kim olduğunu da sormuyorum" dedi.'],
                { etki: { fevkiye: 2 } },
              ],
            },
            // (oyun için ek)
            {
              m: 'Leyla\'ya açık bir mektup: Nabi Bey\'in ağzından çıkanı yazmak.', etki: { isyan: 1 }, bayrak: { fevkiye_uyari: 'mektup_acik', nabi_kin: true },
              adimlar: [
                'Divitimi açtım. Bu sefer kalemim durmadı.',
                '{i}Leyla, Nabi Bey seni bahçede kafesin ardından gözetlemiş. Beni sana aracı etmek istedi. Babanın malını sayıyor. Ondan uzak dur.{/i}',
                ['mehves', 'Hanımcığım, bu mektup yolda düşerse...'],
                ['f', 'Düşmez. Sen götür.'],
                ['ic', 'Doğruyu yazdım. Doğru her zaman sevilmez.'],
                { kart: 'Bir saat sonra.' },
                ['mehves', 'Verdim. Okudu, kıpkırmızı oldu. "Bunu bana Feride yazdı ya, yeter" dedi. Sonra mektubu küçük küçük yırttı.'],
                { etki: { fevkiye: 1 } },
              ],
            },
            // (oyun için ek)
            {
              m: 'Nimet\'le annesine haber yollamak.', etki: { mehves: 1 }, bayrak: { fevkiye_uyari: 'anne' },
              adimlar: [
                ['f', 'Nimet, yarın Leyla\'nın annesine git. Kızına göz kulak olsun, de. Başka bir şey söyleme.'],
                ['mehves', 'Baş üstüne. Yaşlı hanım anlar, fazlasını sormaz.'],
                { kart: 'Ertesi akşam.' },
                ['mehves', 'Hanımefendi sana teşekkür etti. "Kızıma göz kulak olurum" dedi.'],
                ['mehves', 'Ama Leyla Hanım biraz bozulmuş. "Bana neden kendisi söylemedi?" demiş.'],
                { etki: { itibar: 2, fevkiye: -1 } },
                ['ic', 'Annesi var. Ben ancak onun annesine haber gönderebiliyorum.'],
              ],
            },
          ],
        },
        { gizle: 'mehves' },
        'Nimet çıktı. Bir süre oturdum. Sonra su içmek için aşağı indim.',

        // Kanca: yemek salonunun aralık kapısı (Feride'nin duyması oyun için ek)
        { temizle: true },
        { mekan: 'konak_sofa' },
        'Sofa karanlık. Yemek salonunun kapısı aralık; içeriden lamba ışığı sızıyor.',
        'Babamın, Nabi Bey\'in sesleri. Adımı duyup durdum.',
        ['nabi', '{i}(Kapının ardından){/i} Enişte, ben gözümle gördüm. Beyoğlu\'nda, güpegündüz. Kenan Bey sarhoştu.'],
        ['sai', '{i}(Kapının ardından){/i} Ne diyorsun sen Nabi?'],
        ['nabi', '{i}(Kapının ardından){/i} Süha da yanımdaydı. Sor ona.'],
        ['suha', '{i}(Alçak sesle){/i} Ben görmek istemezdim efendim. Ama gördüm. Bir kere de olsa.'],
        'Bir süre kimse konuşmadı. Sonra babam derin bir nefes aldı.',
        ['sai', '{i}(Kapının ardından){/i} Gençtir. Bir yanlışlıktır belki. Düğüne kadar sabredelim. Bu söz bu odadan çıkmasın.'],
        ['ic', 'Yalan. Yalan olmalı. Ama ben neden kapının ardında, elimde boş bir bardakla duruyorum?'],
        { goster: ['calibe', 'gulumser'] },
        'Kapı açıldı. Perihan Hanım çıktı. Beni görünce gülümsedi. En tatlı gülümsemesiyle.',
        ['calibe', 'Feridecim, sen burada mıydın? Bak, Münevver Hanım\'a göndereceğim kurdeleyi seçtim. Beğendin mi?', 'gulumser'],
        'Elindeki açık mavi kurdeleyi gösterdi. Bir şey diyemedim. Başımı salladım.',
        ['f', 'Güzel efendim.', 'mahzun'],
        { gizle: 'calibe' },
        {
          eger: (S) => window.B2_PUSULA.bilir(S),
          ise: [['ic', 'Perihan Hanım\'ın eli yine bu işte. Sabah harfti; bu gece başka bir şey. Neyi hazırladığını bu kez bilmiyorum. Ama kurdelesi mavi.']],
          degilse: [['ic', 'Bu evde biri benim için bir şey hazırlıyor. Sabah harfti; bu gece başka bir şey. Kurdelesi mavi.']],
        },
        // Tehdit yerine getirilmeye başlıyor: 1. bölüm sonundaki cümleye bağ
        ['pa', 'Perihan Hanım merdivenin başında bir an durdu, Feride\'nin kapısına baktı. Düğün gecesi "takamayacak" demişti.'],
        ['pa', 'Bu gece sözünü tutmaya başladı. Babasının kulağına ilk damla düştü. Gerisi kendiliğinden akacak.'],
        { temizle: true },
        { mekan: 'fazila_oda' },
        'O gece annemin resmine uzun uzun baktım. Sonra çekmecemi açtım.',
        // (oyun için ek) Kapanış kancası: Kenan'ın notu kayıp
        { goster: ['gerdanlik'] },
        'Gerdanlık kutusunda. Kenan Bey\'in resmi yerinde.',
        { gizle: 'gerdanlik' },
        {
          eger: (S) => S.bayrak.not_mukaddem === 'sakla',
          ise: [
            'Not yok.',
            'Kutunun altına baktım. Resmin arkasına baktım. Çekmeceyi yerinden çıkarıp ters çevirdim. Yok.',
            'Kilidin ağzında, pirincin üstünde ince bir çizik. Bu sabah yoktu.',
            ['ic', 'Gerdanlığı almamışlar. Yedi yüz liralık elması bırakıp bir satır yazıyı almışlar. Kim alır bunu? Hangisi daha kıymetli, bilen biri.', 'mahzun'],
            ['pa', 'Perihan Hanım\'ın yastığının altında dörde katlanmış küçük bir kâğıt duruyor. Dik, aralıklı harfler. Altında bir harf: M.'],
          ],
          degilse: [{
            eger: (S) => S.bayrak.not_mukaddem === 'cevap',
            ise: [
              { goster: ['sefik', 'aglamakli'] },
              'Kapı aralandı. Şefik, gecelik entarisiyle, gözleri dolu.',
              ['sefik', 'Abla... Cebimde yok. En dibine koymuştum. Hocama götürecektim, selamlığa inerken Hatice ceketimi fırçalamak için aldı. Geri verdiğinde yoktu.', 'aglamakli'],
              ['f', 'Ağlama. Senin kabahatin değil.', 'mahzun'],
              { gizle: 'sefik' },
              ['ic', 'Onun yazısı. Altında benim yazım: "Buldum." İkisi bir kâğıtta. İkisi de artık başkasının elinde.', 'mahzun'],
              ['pa', 'Perihan Hanım\'ın yastığının altında dörde katlanmış küçük bir kâğıt duruyor. Bir erkek yazısı, altında tek kelimelik bir kız yazısı.'],
            ],
            degilse: [
              'Not zaten yoktu; onu közün üstünde kendi gözümle kararttım.',
              'Kandili söndürmeye uzanırken halının kenarında bir şey parladı. Eğildim. Kemik bir saç tokası. Benim değil. Nimet\'in de değil.',
              ['ic', 'Hatice\'nin tokası. Benim odamda, benim çekmecemin önünde. Kâğıdı bulamadı. Ama aradı.', 'ofkeli'],
              ['pa', 'Hatice o akşam hanımına boş elle dönüyor. "Kâğıt yok efendim. Ama çocuğun cebine bir şey konduğunu gözümle gördüm." Perihan Hanım gülümsüyor. Bazen gören göz, kâğıttan iyidir.'],
            ],
          }],
        },

        // Söylenti kartı (B3 söylentisinin habercisi)
        {
          eger: (S) => S.bayrak.kiyafet_nisan === 'sade',
          ise: [{ kart: 'Konak konak dolaşan söz:', alt: '"Sait Efendi\'nin küçük hanımı nişanda sade giyinmiş. Gerdanlık öyle daha çok parlamış."' }, { etki: { itibar: 5 } }],
          degilse: [{
            eger: (S) => S.bayrak.kiyafet_nisan === 'gosterisli',
            ise: [{ kart: 'Konak konak dolaşan söz:', alt: '"Nişan değil, düğün sanırsın. Kız gelin gibi süslenmiş."' }, { etki: { itibar: -2 } }],
            degilse: [{ kart: 'Konak konak dolaşan söz:', alt: '"Nişanına anasının elbisesiyle çıkmış. Münevver Hanım\'ın gözü dolmuş."' }, { etki: { itibar: 3 } }],
          }],
        },
        {
          eger: (S) => S.bayrak.suha_sohbet === 'dinledi',
          ise: [{ kart: 'Hizmetçiler arasında bir fısıltı:', alt: '"Doktor bey her gün küçük hanımın yanında. Hastalığı da ne, kimse bilmiyor."' }],
          degilse: [],
        },
        { cizim: 'gerdanlik' },
        { bolumSonu: true },
      ],
    },

    /* ==================================================================
       İsteğe bağlı karşılaşmalar
       ================================================================== */

    // (oyun için ek) Josephine ile ilk sohbet
    {
      id: 'b2_madam_sohbet', mekan: 'josephine_oda', kisi: 'josephine', yan: true, kosul: (S) => S.gorev >= 3 && S.gorev <= 5,
      sahne: ['josephine'],
      adimlar: [
        'Madam\'ın odası benimkinden küçük. Masasında bir küre, bir yığın Fransızca kitap.',
        ['josephine', 'Feride Hanım, buyurun. Düşündünüz mü? Ne öğrenmek istersiniz?'],
        ['f', 'Resim yapmayı Madam. Şefik için. Martıları hep yanlış çiziyorum.'],
        ['josephine', 'Martı kolay! İki tane yay, bir nokta. Bakın.'],
        'Bir kâğıda iki yay çizdi. Gerçekten de martıya benzedi. Güldüm.',
        ['josephine', 'İşte. Bir şey daha: bana bu evde kimi sevmem gerektiğini söylemeyin. Ben kendim görürüm.'],
        ['ic', 'Kendi gözüyle bakacak. Bu evde bunu ilk kez biri söylüyor.'],
        { etki: { vakar: 1 } },
      ],
    },

    // (oyun için ek) Mutfakta tacir hanımının haberi (Remzi dolaylı)
    {
      id: 'b2_mutfak_tacir', mekan: 'mutfak', kisi: 'asci', yan: true, kosul: (S) => S.gorev >= 4 && S.gorev <= 6,
      sahne: ['asci', 'mehves'],
      adimlar: [
        'Mutfakta bakır tencereler ocakta. Aşçı kadın hamur yoğuruyor, Nimet fasulye ayıklıyor.',
        ['asci', 'Küçük hanım, duydun mu? Merhum tacirin hanımının hizmetçisi bugün kapıya geldi. Bizden su istedi, lafı başka yere getirdi.'],
        ['mehves', 'Ne sordu?'],
        ['asci', 'Bu konakta gelinlik kız var mı, diye. Sözlü olduğunu duyunca "Yazık" dedi. Küçük beylerine kız arıyorlarmış.'],
        ['asci', 'Oğlan babasından kalanı atlara yediriyormuş. Bir at, bir konak fiyatına.'],
        ['mehves', 'At fiyatına kız almaya kalkarlar, sonra kızı da ahıra bağlarlar.'],
        ['ic', 'Yüzünü görmediğim bir adamın atlarının fiyatını biliyorum artık. Bu şehirde böyle tanışılıyor.'],
        { delil: 'Mutfaktan: merhum tacirin hanımı küçük oğluna kız arıyor. Oğlu atlara düşkün.' },
      ],
    },

    // (oyun için ek) Bahçe duvarından komşu konak
    {
      id: 'b2_komsu', mekan: 'konak_bahce', kisi: 'komsu_konak', yan: true, kosul: (S) => S.gorev >= 3 && S.gorev <= 6,
      sahne: ['komsu_konak'],
      adimlar: [
        'Bahçenin dibindeki incir ağacının yanından komşu konağın üst katı görünüyor.',
        'Kafesler kapalı. Yalnız köşedeki bir pencerenin kafesi biraz aralık.',
        ['ic', 'O pencere kimin odası? Sormadım. Sormam da.'],
        {
          soru: 'Kafes aralığı rüzgârla biraz daha açıldı.',
          secim: [
            { m: 'Bir süre daha bakmak.', etki: { mukaddem: 3, calibe_suphe: 1 },
              adimlar: ['Baktım. Kimse görünmedi. Ama içeride bir lamba yanıyordu.', ['ic', 'Bir yıldır görmediğim bir yüzün yanında yanan bir lamba. Bu bile bir şey.'], 'Dönerken mutfak penceresinden Hatice\'nin başını gördüm. Hemen çekildi.'] },
            { m: 'Gözümü çevirip içeri dönmek.', etki: { vakar: 1 },
              adimlar: ['Gözümü indirdim. Nişanlı kız pencere gözlemez.', ['ic', 'Bir yıl var. Bir yılda bakılacak çok pencere olur.']] },
          ],
        },
      ],
    },

    // (oyun için ek) Selamlık kapısında Şefik'in yazı defteri (Halim Efendi yalnız anılır)
    {
      id: 'b2_selamlik', mekan: 'selamlik_kapisi', kisi: 'sefik', yan: true, kosul: (S) => S.gorev >= 6 && S.gorev <= 10 && S.gorev !== 7,
      sahne: ['sefik'],
      adimlar: [
        'Selamlığın kapısı aralık. Şefik eşikte oturmuş, dizinde bir yazı defteri.',
        ['sefik', 'Abla! Bak, hocam bana satır çekti. Ben de altına yazdım.'],
        'Defterin her sayfasının başında birkaç satır inci gibi bir yazı. Altında Şefik\'in eğri büğrü harfleri.',
        ['sefik', 'Halim Efendi diyor ki, "Yazı acele etmeyenindir küçük beyim." Ben acele ediyorum.'],
        ['f', 'Hocan doğru söylüyor kardeşçiğim.', 'gulumseyen'],
        ['sefik', 'Sana selam da söyledi. Yok, söylemedi. "Küçük beyin hemşiresine hürmetler" dedi. Selam mı o?'],
        ['ic', 'Kapının öbür yanında, yüzünü hiç görmediğim bir hoca. Şefik\'e acele etmemeyi öğretiyor. Bu evde kimse bana bunu öğretmedi.'],
        { etki: { sefik: 1 } },
      ],
    },

    // (oyun için ek) Perihan'ın kapısında Hatice
    {
      id: 'b2_reftar_kapi', mekan: 'calibe_oda', kisi: 'reftar', yan: true, kosul: (S) => S.gorev >= 7 && S.gorev <= 10,
      sahne: ['reftar'],
      adimlar: [
        'Perihan Hanım\'ın kapısında Hatice, elinde bir gümüş tepsi, bekliyor.',
        ['reftar', 'Küçük hanım, hanımefendi dinleniyor. Bir emriniz mi vardı?'],
        ['f', 'Yok Hatice. Geçiyordum.'],
        ['reftar', 'Siz de çok yoruluyorsunuz bu aralar. Doktor bey her gün odanıza çıkıyor. Hastalığınız geçmedi mi?'],
        ['ic', 'Saymış. Her gününü saymış.'],
        ['f', 'Sen kendi işine bak Hatice.'],
        ['reftar', 'Baş üstüne küçük hanım. Ben hep kendi işime bakarım.'],
        { delil: 'Hatice, Süha Bey\'in odama gelişlerini sayıyor.' },
      ],
    },

    // (oyun için ek) Yemek salonunda babayla
    {
      id: 'b2_baba', mekan: 'yemek_salonu', kisi: 'sai', yan: true, kosul: (S) => S.gorev >= 6 && S.gorev <= 9,
      sahne: ['sai'],
      adimlar: [
        'Babam sofranın başında, önünde yazıhaneden gelmiş kâğıtlar. Gözlüğünü burnunun ucuna indirmiş.',
        ['sai', 'Gel kızım. Otur. Madam nasıl? Şefik\'in hocası nasıl?'],
        ['f', 'Madam iyi efendim. Halim Efendi\'yi görmedim; Şefik yazısını gösterdi. İnci gibi.'],
        ['sai', 'Öyledir. Kendi yazısıyla geçinir o çocuk. Yetimdir, annesine bakar.'],
        {
          eger: (S) => S.bayrak.gerdanlik === 'baba',
          ise: [['sai', 'Gerdanlığı bana getirdin ya. Çok hoşuma gitti kızım. Ama ben onu sana emanet ettim, unutma.']],
          degilse: [['sai', 'Gerdanlığına iyi bak kızım. O artık senin.']],
        },
        ['ic', 'Babam benimle bu kadar uzun konuşmayalı aylar olmuştu.'],
        { etki: { baba_guven: 2 } },
      ],
    },
  ],

  /* Bölüm sonu paneli: bir sonraki bölümün vaadi (3. bölüm söylentiyle açılır) */
  merak: 'Perihan Hanım bir harfle başladı; şimdi elinde bir satır yazı ya da onu gören bir göz var. Babamın kulağına da ilk damla düştü. Güz gelince konak konak dolaşacak olan Kenan Bey\'in adı mı olacak, yoksa benimki mi?',

  /* Bölüm sonu notu: gecenin olaylarını ve önemli kararları Feride'nin sesiyle toplar */
  sonNotu: function (S) {
    const b = S.bayrak, p = [];
    if (b.munevver_tavir === 'sicak') p.push('Perihan Hanım\'ın pusulası yerine varmadı, Naile Hanım da ağzını açamadı. Münevver Hanım bana "gelinim" dedi.');
    else if (b.munevver_tavir === 'sinav_gecti') p.push(b.ifsa ? 'Münevver Hanım harfi sordu; cevabını verdim, kâğıdı da önüne koydum. Perihan Hanım\'ın yüzünü herkes gördü.' : 'Münevver Hanım harfi sordu. "Annemin" dedim. Naile Hanım\'ın kahvesi soğudu.');
    else p.push(window.B2_PUSULA.bilir(S) ? 'Ne hazırladıklarını biliyordum. Yine de o salonda konuşamadım; beni Münevver Hanım savundu. Naile Hanım gördüğünü anlatmaya gitti.' : 'Sabah o kapının ardında ne konuşulduğunu vaktinde öğrenemedim. Salonda öğrendim; Münevver Hanım beni korudu, ama Naile Hanım kızardığımı gördü ve gitti.');
    if (b.mukaddem_gordu) p.push('Onu kafesin ardından gördüm; başını kaldırıp pencereme baktı.');
    if (b.not_mukaddem === 'sakla') p.push('Bana bir satır yazmış. Çekmeceme kilitledim; gece açtığımda yoktu.');
    else if (b.not_mukaddem === 'cevap') p.push('Bana bir satır yazmış; altına "Buldum" yazdım. Kâğıt Şefik\'in cebinden kayboldu.');
    else if (b.not_mukaddem === 'yak') p.push('Bana bir satır yazmış. Ezberleyip yaktım; odamda Hatice\'nin tokasını buldum.');
    if (b.gerdanlik === 'baba') p.push('Gerdanlığı babama götürdüm; "Kendin sakla" dedi.');
    else if (b.gerdanlik === 'boyun') p.push('Gerdanlığı bütün akşam boynumda taşıdım; Perihan Hanım gözünü ayırmadı.');
    else p.push('Gerdanlığı kimseye sormadan çekmeceme kilitledim.');
    if (b.ilac === 'josephine') p.push('Hasta değilmişim. Bunu artık Madam da biliyor.');
    else if (b.ilac === 'recete' && b.recete_ertele) p.push('Süha Bey\'den reçete istedim; vermedi. Ben de şurubunu içmedim. Şişe masamda duruyor.');
    else if (b.ilac === 'recete') p.push('Süha Bey reçete vermedi, "kuvvet şurubu" dedi. Yine de içtim.');
    else if (b.ilac === 'icti') p.push('Süha Bey\'in adsız şişesinden içtim. Hâlâ neden içtiğimi bilmiyorum.');
    if (b.fevkiye_uyari === 'mektup') p.push('Leyla\'ya ad vermeden "kendini kolla" diye yazdım.');
    else if (b.fevkiye_uyari === 'mektup_acik') p.push('Leyla\'ya Nabi Bey\'in ağzından çıkanı açık açık yazdım.');
    else if (b.fevkiye_uyari === 'anne') p.push('Leyla\'nın annesine haber yolladım.');
    else if (b.fevkiye_uyari === 'bekle') p.push('Leyla\'ya yüz yüze söylemek için bekliyorum.');
    p.push('Gece kapının ardında Kenan Bey\'e atılan iftirayı duydum.');
    p.push(S.gonul.suha > S.gonul.mukaddem
      ? 'Çekmecemde onun resmi var, ama aklıma çardağın altında bırakılan bir kitap geliyor. Bundan korkuyorum.'
      : 'İnanmıyorum. İnanmamak yetecek mi?');
    return p.join(' ');
  },
};

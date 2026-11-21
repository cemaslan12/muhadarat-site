/* =========================================================================
   PİLOT — YENİ BİÇİMDE 2. BÖLÜM: KONAK AKŞAMI  (bölüm no 102)
   İskelet: notlar/bolum1_pilot_iskelet.md (2. bölüm: sofra, piyano; kanca: Süha'nın gece odası)
   Doğrusal bölüm (dogrusal: true): olaylar gorev sayacıyla zincirlenir; pilot1.js ile aynı kalıp.
   Ölçüler: 10-15 dakika, her yolda 13 karar (kıyafet ekranı dahil), iki seçim arasında en çok 15 satır.
   1. bölümden okunanlar (değiştirilmez): p_rota, p_yasemin, p_seker, p_goruldu, p_yalan, p_koz_yandi,
     p_remzi, p_defter, kozlar ('Hatice ile Nabi Bey'), giyili kıyafet.
   Bayraklar: p2_ilk_giyili, p2_pusula (yazdi/yaprak/aldi/sustu), p2_satir, p2_yasemin_yer, p2_not_yer,
     p2_kutu (soyledi/yalan/sefik/iade/yedi/calibe/nimet), p2_hitap, p2_tanik, p2_yalan, p2_nimet,
     p2_koz_sofra, p2_sofra, p2_remzi, p2_mefharet, p2_nesne_calibede, p2_piyano, p2_sayfa, p2_koz,
     p2_gerdanlik, p2_sefik (cizdi/yarin/cerceve), p2_sefik_cizim (kus/gemi/agac), p2_dinledi,
     gezinme: p2_mabeyn ('goruldu'), keşif: p2_k_resim, p2_leke (mürekkep döküldü; keşif metni için).
   Serbest vakit (2 adet; kaçırılabilir): p2_v_mutfak (hazir/yuz: sofradaki iğne önceden duyuldu), p2_v_salon
     (nota/soyleme), p2_v_sofa (oksurdu/sakladi: Perihan'ın Remzi planı; 3. bölümde Remzi'de karşılık),
     p2_v_oda (kilit/acik/bos: kilit → Nazlı odaya giremez, nesne 'yok').
   3. bölümün okuması için koridor sonucu:
     p2_koridor_goruldu: true  → Feride durup dinledi; ilk heceyi duydu, Perihan onu kapıda gördü (bedel).
                         false → Feride hızlı geçti; görülmedi, adı yalnız Perihan duydu (bilgi Perihan'da).
     p2_koridor_hece: 'be'     → yalnız dinleyen yolda; adın ilk hecesi "Be…" (Behiye mi, başka biri mi? açık bırakıldı).
   Gece kapanışı (kandil, defter, yastık altı) bu bölümdedir; 1. bölüm arabada biter. p_defter burada yazılır.
   Oynanış T1 Aşama B: 1. bölümden ayrıca p1_sitem (pusulada satır), p1_remzi_ad (Nabi'nin dedikodusu), p1_k_kutu
     (Nimet'te kutuyla açılan seçenek) okunur. Yeni keşifler p2_k_ithaf (Kenan yolu; gece defterinde okunur) ve
     p2_k_kapak (Süha yolu; piyanoda seçenek açar → p2_kapak_soru, "Onun gözünden"de okunur). Bu bayraklar 3. bölüme
     taşınmaz. Koz seçenekleri kozGerek ile (sofra, Remzi, Nimet); calibe_suphe ≥ 4 koridorda okunur.
     Gönüle eksi: Kenan (gerdanlık "bilmiyorum", Kenan yolu), Süha (kutu Perihan'a), Remzi ("ben sözlüyüm").
   GPT T26 Süha (bilgi/koz ayrımı): Hatice'yi arka bahçede adıyla çağıran (p_reftar 'seslendi') ya da kozunu harcamış
     oyuncuya bildiği şey için kilit gösterilmez (kilitGoster); onun yerine açık, zayıf seçenekler var. Yeni bayrak
     değeri yok: p2_yalan 'itiraf', p2_koz_sofra 'nabi', p2_koz 'yeni' yeniden kullanıldı.
   Gönül kuralı: puan = adayın ilgisi + Feride'nin yakınlaşması. Yalnız uzaklaştıran cevap puan vermez;
     aday reddedilmekten hoşlanıyorsa (Süha) bunu o anda bir satır gösterir.
   Romandan alınanlar (s. 77–91): gerdanlık haberi, sofrada Nabi ile Süha'nın evlilik sözü, Nazlı'nın
     saç çekmesi ve mürekkep, piyano akşamı, Nimet'in Hatice–Nabi dedikodusu, gece Süha'nın odası.
   Oyun için ek: Kenan'ın pusulası, menekşe şekeri kutusunun dönüşü, Remzi dedikodusu, Şefik'in kuşu.
   ========================================================================= */
window.BOLUMLER = window.BOLUMLER || {};

(function () {
  /* Tur 27 (B2 görsel 4, 10'a; GPT G3–G5): yeni an kimlikleri ve eksik kıyafet çeşitleri. Kayıt burada; resmi
     gelene kadar { cizim } adımı sessizce atlanır (motor anResmi null). Üretim: notlar/denetim/t27_uretim_b01_04.md */
  var V27 = window.OYUN_VERISI;
  var ANLAR27 = {
    an_koridor: { ad: 'Aralık kapı, uçta bir mum', alt: 'Konak Akşamı' },
    an_pusula_kenan: { ad: 'Yirmi üçüncü sayfa', alt: 'Konak Akşamı · Kenan' },
    an_piyano_pencere: { ad: 'Camdaki yüz', alt: 'Konak Akşamı · Süha' },
    /* Tur 29 (B2 görsel 10'a): Kenan yolunun koridor doruğu; mumu madalyonla karşılayan Feride (üretimde) */
    an_koridor_kenan: { ad: 'Mumun önünde madalyon', alt: 'Konak Akşamı · Kenan' },
    /* GPT T29 (B2-G1): Kenan'ın kitabı alış anının nesne durumları (üretimde) */
    an_pusula_kenan_yaprak: { ad: 'Yazısız bir yaprak', alt: 'Konak Akşamı · Kenan' },
    an_pusula_kenan_bos: { ad: 'Boş kalan sayfa', alt: 'Konak Akşamı · Kenan' },
    /* Tur 30 (B2 sürük 2): "Durma, geç" dalının doruğu; Feride'nin gözünden, tek resim (üretimde) */
    an_koridor_gece: { ad: 'Kapıyı dinleyen mum', alt: 'Konak Akşamı · Süha', tek: true },
    /* Tur 30 (GPT B2 G2): ezbere çalan kız; Süha uzakta dinler, kimse sayfa çevirmez (üretimde) */
    an_piyano_ezber: { ad: 'Ezbere çalınan şarkı', alt: 'Konak Akşamı · Süha' },
    /* Tur 30 (GPT B2 G6; Claude B2 görsel 2): kitapta yanlış katlanmış pusula; Kenan tek (üretimde) */
    an_pusula_kenan_kat: { ad: 'Yanlış katlanmış pusula', alt: 'Konak Akşamı · Kenan' },
    /* Tur 32 (B2 görsel 5): sitem ve haber satırını yazan kız gülerek yazmaz (üretimde: t32_uretim_b01_04.md) */
    an_pusula_ciddi: { ad: 'Sıkılı dudaklar, ıslak mürekkep', alt: 'Konak Akşamı · Kenan' },
  };
  if (V27 && V27.cizimler) {
    Object.keys(ANLAR27).forEach(function (id) {
      (id.indexOf('an_pusula_kenan') === 0 || ANLAR27[id].tek ? [''] : ['', '_nisan_sade', '_nisan_yadigar']).forEach(function (c) {
        if (!V27.cizimler[id + c]) V27.cizimler[id + c] = { ad: ANLAR27[id].ad, alt: ANLAR27[id].alt };
      });
    });
    ['an_piyano', 'an_pusula'].forEach(function (id) {
      var t = V27.cizimler[id];
      ['_nisan_sade', '_nisan_yadigar'].forEach(function (c) {
        if (t && !V27.cizimler[id + c]) V27.cizimler[id + c] = { ad: t.ad, alt: t.alt };
      });
    });
  }
  /* Tur 27b: sahne içi müzik ve efekt düz { muzik } / { efekt } adımlarıyla (eski MZ/EF islev geçici çözümü
     kaldırıldı; benzet2 artık bu adımları tanıyor). { muzik: null } bölüm ortamına döner, 'sessiz' susturur. */
  var KOZ = 'Hatice ile Nabi Bey';
  var muk = function (S) { return S.bayrak.p_rota === 'mukaddem'; };
  /* Tur 28b (kök 1–2): p_rota yalnız kimle karşılaşıldığıdır. Süha'ya konan açık sınır (1. bölüm limonluk, bu bölüm
     sofra ya da Nimet'e) sonraki iç seslerde aynı ağırlıkta okunur */
  var sinir = function (S) { var f = S.bayrak; return !!(f.p1_suha_sinir || f.p2_suha_sinir || f.p2_hitap === 'sinir'); };
  var kozVar = function (S) { return (S.kozlar || []).indexOf(KOZ) >= 0; };
  var yandi = function (S) { return !!S.bayrak.p_koz_yandi; };
  // Nazlı'nın salonda eline geçen şey (Feride'nin odada verdiği kararlara bağlı)
  var nesne = function (S) {
    var b = S.bayrak;
    if (b.p2_v_oda === 'kilit') return 'yok'; // serbest vakitte oda kilitlendi: Nazlı giremedi
    if (muk(S)) {
      if (b.p2_not_yer === 'yastik') return 'pusula';
      if (b.p2_yasemin_yer === 'defter') return 'yasemin';
      return 'yok';
    }
    if (b.p2_kutu === 'soyledi' || b.p2_kutu === 'yalan' || (b.p_seker === 'reddetti' && b.p2_kutu === 'yedi')) return 'kutu';
    if (b.p2_kutu === 'sefik') return 'sefik_kutu';
    return 'yok';
  };
  var elde = function (S) { var n = nesne(S); return n === 'pusula' || n === 'yasemin' || n === 'kutu'; };

  /* ---- Gezinme katmanı (plan modu, veri/plan_konak.js): iki vakit konak planı üstünde yürünerek oynanır ----
     Kim nerede (metinden): yemekten önce Hatice mutfakta, Süha Bey büyük salonda piyanonun başında; yemekten
     sonra Nabi Bey ile Süha Bey üst kat sofasında sigara içiyor (Feride merdivenin gölgesinde), Şefik salonda.
     Mabeyn merdiveni (selamlığa geçit) riskli: yemekten önce yolda kimse yok (geçiş sessiz, anlık ceza yok;
     iz satırı görünür, sofrada bir kez anılır); yemekten sonra sofadaki Nabi Bey görür (bedel kesin, onayda
     yazılı; piyanodan önce Perihan Hanım babama söyler). Şefik refakatteyse güvenli; B2'de Şefik salonda
     olduğundan bu bölümde refakat yok (bayrak.refakat sonraki bölümler için).
     Süha Bey'in odası sofanın ucunda, mabeyn kapısının yanındaki misafir odasıdır; bu akşam kapalı.
     Bayrak: p2_mabeyn = 'goruldu' (yakalandı). Sessiz geçiş: S.gizliGidilen['102:mabeyn_merdiven']. */
  var KAPALI = {
    calibe_oda: { neden: 'Perihan Hanım\'ın odası. İzinsiz girilmez.' },
    suha_oda: { neden: 'Süha Bey\'in odası. Misafirin kapısı çalınmadan açılmaz.' },
  };
  var refakat = function (S) { return S.bayrak.refakat === 'sefik'; };
  var GEZINME_YEMEK = {
    plan: 'konak', kapali: KAPALI, refakat: refakat,
    riskli: {
      mabeyn_merdiven: { gozcu: null, uyari: 'şimdi kimse yok',
        sonuc: 'Ardı selamlık, erkeklerin tarafı, orada işim yok.',
        iz: 'Merdivende kimseye görünmedim. Yalnız eteğimin ucu mabeyn kapısının tozunu aldı.' },
    },
  };
  var GEZINME_KAHVE = {
    plan: 'konak', kapali: KAPALI, refakat: refakat,
    riskli: {
      mabeyn_merdiven: {
        gozcu: 'Nabi Bey ile Süha Bey', gozcuYer: 'konak_sofa', uyari: 'Nabi Bey görür',
        sonuc: 'Nabi Bey ablasına, ablası babama söyler (itibar ve babamın güveni düşer).',
        bedel: { etki: { itibar: -2, baba_guven: -2 }, bayrak: { p2_mabeyn: 'goruldu' },
          ic: 'Nabi Bey gördü. Ablasına söyler, ablası babama.' },
      },
    },
  };
  var gezinme = function (v, g) { Object.keys(g).forEach(function (k) { v[k] = g[k]; }); return v; };

  /* ---- Serbest vakitler (motor.js serbestVakit). Mini sahneler kaçırılabilir; bayraksız akış bozulmaz. ---- */
  // 1) Yemekten önce: mutfakta Perihan'ın iğnesi önceden duyulur, salonda Süha Bey notaları karıştırır
  var VAKIT_YEMEK = {
    ad: 'Yemekten önce', hak: 1,
    hedef: { mekan: 'yemek_salonu', metin: 'Sofra kuruluyor. Babam oturmadan yemek salonuna in.' },
    mekanlar: ['mutfak', 'buyuk_salon', 'yemek_salonu'],
    yerler: {
      mutfak: { kisi: 'reftar', ifade: 'notr', eylem: 'kapıda dinle', duyulur: true, ipucu: 'Mutfaktan Hatice\'nin fısıltısı geliyor, adın geçiyor (kulak misafiri).',
        adimlar: [
          /* Tur 33 (B2 ses 1): mutfak kulak misafirliği müziksiz; gerilim sofradaki kahve lafına saklanır */
          { muzik: 'sessiz' },
          ['an', 'Hatice mutfakta aşçı kadına fısıldıyordu. Hanımının sözü mutfağa, mutfağın sözü hanımına hep onunla giderdi.'],
          'Mutfak kapısı aralık. Eşikte durdum.',
          /* Diyalog T1 (2.4): belirsiz "düğününü açacak" yerine iğnenin ne olduğu ve şerbetin işareti */
          ['reftar', 'Hanım sofrada küçük hanıma düğünü soracak. Ben de şerbetle kapıda durup dinleyeceğim.', 'kararli'],
          { soru: 'Hatice beni görmedi.', secim: [
            { m: 'Sessizce çekil. Sofraya hazır in.', etki: { vakar: 1 }, bayrak: { p2_v_mutfak: 'hazir' }, adimlar: [
              ['ic', 'Sofrada düğünü soracakmış. Nerede olduğumu babama kendim anlatırım.', 'kararli'],
            ] },
            { m: '“Şerbeti erken götür Hatice. Babam susamasın.”', etki: { calibe_suphe: 1 }, bayrak: { p2_v_mutfak: 'yuz' }, adimlar: [
              ['reftar', 'Küçük hanım! …Peki.', 'korkmus'],
            ] },
          ] },
          { muzik: null },
        ], bos: 'Mutfakta tencereler kaynıyor. Kimse başını kaldırmadı.' },
      buyuk_salon: { kisi: 'suha', ifade: 'notr', eylem: 'konuş', ipucu: 'Salonda biri piyanonun kapağını açtı, notaların onda (konuşma).',
        adimlar: [
          /* GPT T25 Kenan (B2 anlatı 1): Kenan yolunda Süha ilk kez burada görünebilir; tanıtım ilk girişinde */
          { eger: muk, ise: [
            ['an', 'Perihan Hanım\'ın amcazadesi, evin hekimi Süha Bey piyanonun başında notaları karıştırıyordu.'],
          ], degilse: [
            ['an', 'Süha Bey piyanonun başında Feride\'nin notalarını karıştırıyordu. Onu görünce de bırakmadı.'],
          ] },
          ['suha', 'Bu akşam sofrada bir şey söyleyeceğim. Şimdiden özür dilerim.', 'alayci'],
          { soru: 'Notamı elinde tutuyor.', secim: [
            { m: '“Özrü sonra dileyin. Önce notamı bırakın.”', etki: { suha: 5 }, bayrak: { p2_v_salon: 'nota' }, adimlar: [
              ['f', 'Özrü sonra dileyin. Önce notamı bırakın.', 'kararli'],
              ['suha', 'Bıraktım. Bir sayfasını da işaretledim, romansı.', 'alayci'],
            ] },
            { m: '“Söylemeyin öyleyse.”', bayrak: { p2_v_salon: 'soyleme' }, adimlar: [
              ['f', 'Söylemeyin öyleyse.', 'kararli'],
              ['suha', 'Söyleyeceğim. Yasaklanınca daha güzel söylerim.', 'alayci'],
            ] },
          ] },
        ], bos: 'Süha Bey notalara gömülmüş. Başını kaldırmadı.' },
    },
    bitis: ['Yemek odasından çatal sesi geldi. Babam oturmuş olmalı.'],
  };
  // 2) Yemekten sonra: sofada kulak misafiri ya da odayı kilitlemek (Nazlı'nın salona getireceği şey)
  var VAKIT_KAHVE = {
    ad: 'Yemekten sonra', hak: 1,
    hedef: { mekan: 'buyuk_salon', metin: '• İşe uğramak bir vakit alır. ★ Salona girince kahve başlar.' },
    mekanlar: ['konak_sofa', 'fazila_oda', 'buyuk_salon'],
    yerler: {
      konak_sofa: { kisi: 'nabi', ifade: 'notr', eylem: 'gölgede dinle', ipucu: 'Sofada iki erkek sesi var, biri adını andı (kulak misafiri).',
        adimlar: [
          { muzik: 'sessiz' }, // Tur 33 (B2 ses 1): sofradaki gerilimin hemen ardından ikinci kez gerilim açılmaz; duman ve sessizlik
          ['an', 'Yemekten sonra erkekler üst kat sofasına sigara içmeye çıktı. Sesleri merdiven boşluğundan aşağıya kadar geliyordu.'],
          'Merdivenin gölgesinde durdum. Duman buraya kadar geliyor.',
          ['nabi', 'Süha, bu akşam kızın gözü sendeydi. Kadehim üstüne yemin ederim.', 'sinsi'],
          { goster: ['suha', 'alayci'] },
          ['suha', 'Bakmasın. Bana bakan yanar.', 'soguk'],
          /* Tur 28 (B2 diyalog 1): sofradaki kahve daveti açıktı; kulak misafirliği yeni bilgi (zaman) taşır */
          ['nabi', 'Ablam gerdanlık sabahı Rıfkı\'nın karısına haber yollayacak, kahve bahane. Para paraya gider.', 'notr'],
          /* Tur 30 (B2 ses 1): soru "gıcırdamak üzere" diyor; gıcırtı seçimden önce çalmaz, geçişin bedeli olur */
          { soru: 'Ayağımı oynatırsam döşeme gıcırdayacak.', secim: [
            { m: 'Öksür. Duyduğunu bilsinler.', etki: { suha: 6 }, bayrak: { p2_v_sofa: 'oksurdu' }, adimlar: [
              { efekt: 'oksuruk' }, // Tur 29 (B2 ses 1)
              'Öksürdüm. İkisi de sigarasını indirdi.',
              ['suha', 'Ne kadarını duydunuz Feride Hanım?', 'soguk'],
              /* Tur 28 (GPT B2 D1): yanma mecazını Feride tamamlamaz; duyduğunu somut söyler */
              ['f', 'Gerdanlık sabahı kısmını. Yanmayı size bırakıyorum.', 'kararli'],
            ] },
            { m: 'Sessizce geç. Duyduğun sende kalsın.', etki: { vakar: 1 }, bayrak: { p2_v_sofa: 'sakladi' }, adimlar: [
              { efekt: 'tahta' }, // Tur 30 (B2 ses 1): gıcırtı geçerken
              'Geçerken tahta bir kez gıcırdadı. Sesler durdu, kimse dönmedi.',
              ['ic', 'Gerdanlık sabahı demek. Perihan Hanım bir günü bile boş bırakmıyor.', 'kararli'],
            ] },
          ] },
          { muzik: null },
        ], bos: 'Nabi Bey sigarasını söndürdü. Bana bakmadı.' },
      fazila_oda: { eylem: 'eşyana bak', ipucu: 'Odana bir dakikalığına çıkabilirsin, eşyana biri dokunmuş olabilir (eşya).',
        adimlar: [
          'Odama bir dakikalığına çıktım. Kapıyı kapamıştım, şimdi aralık.',
          { eger: elde, ise: [
            ['ic', 'Yastığım, çekmecem yerinde. Ama biri bakmış gibi.', 'endiseli'],
            /* Tur 33 (B2 anlatı 2; sezon kapı arkı): odanın içten sürgüsü yok, kapı kilitlenmez (5–6. bölüm dış mandal / iç
               sürgü). Kilitlenen yalnız çekmecedir; yastığın altındaki de oraya girer. Bayrak değeri aynı ('kilit'). */
            { soru: 'Kapının sürgüsü yok. Yalnız çekmecenin küçük bir anahtarı var.', secim: [
              { m: 'Ne varsa çekmeceye koy, kilitle. Anahtar koynunda dursun.', etki: { vakar: 1 }, bayrak: { p2_v_oda: 'kilit' }, adimlar: [
                { efekt: 'anahtar' },
                'Yastığın altındakini de çekmeceye koydum. Anahtarı koynuma, madalyonun yanına soktum.',
                ['ic', 'Çekmeceyi iki kez yokladım. Açılmıyor.', 'kararli'],
              ] },
              { m: 'Bırak. Kendi evimde çekmece kilitlemem.', bayrak: { p2_v_oda: 'acik' }, adimlar: [
                ['ic', 'Kilitlesem korktuğumu anlarlar.', 'endiseli'],
              ] },
            ] },
          ], degilse: [
            'Sedirde Nazlı\'nın kurdelesi. Biri burada oyalanmış.',
            ['ic', 'Alacak bir şey bulamamış. Bu kez.', 'endiseli'],
            { bayrak: { p2_v_oda: 'bos' } },
          ] },
        ], bos: 'Odam sessiz. Kandil sönük.' },
    },
    bitis: ['Salondan fincan sesi geldi. Kahveler dağıtılıyor.'],
  };
  gezinme(VAKIT_YEMEK, GEZINME_YEMEK);
  gezinme(VAKIT_KAHVE, GEZINME_KAHVE);

  window.BOLUMLER[102] = {
    no: 102,
    baslik: 'Yeni 2. Bölüm',
    ad: 'Konak Akşamı',
    dogrusal: true,
    adaylar: ['mukaddem', 'suha', 'remzi'],
    ilkFaz: 'A',
    baslangic: 'fazila_oda',
    fazlar: { A: { mekanlar: ['fazila_oda', 'yemek_salonu', 'buyuk_salon', 'suha_oda'], baglanti: {} } },
    gorevler: [],
    /* Oynanış T1 (gorsel_t1_fon #9a): koridor sahnesi Süha Bey'in odasının İÇİNDEN görünüyordu; kapının dışındaki
       kız mabeyn kapısının (gece) önünde gösterilir. Olay kimliği ve mekân adı değişmez. */
    fon: function (S, mekanId) { return mekanId === 'suha_oda' ? 'mabeyn_kapisi' : null; },

    acilis: [
      /* Bölüm açılışı: düğünden kalan (rotaya ve 1. bölümün son kararlarına göre), konaktaki aile düzeni, bu akşamki dilek.
         Eski "Bugün konuşulan" kartının bilgisi (sofraya Nabi ile Süha oturuyor) son satıra taşındı. */
      { anlati: { gorsel: 'konak_sofa', baslik: '2. Bölüm · Konak Akşamı', satirlar: [
        /* Tur 18 ek (öneri 9): düğün, gizli yüzük ve görücü 1. bölümde oynandı; burada yinelenmez.
           Bir yer/zaman (konak akşamı) ve bir hedef (sofra) kalır. */
        /* Anlatı denetimi T1 (rehber §1): açılış anlatıcı sesinde; Nazlı kendi girişine, Nabi ile Süha sofraya dağıtıldı */
        /* Anlatı T2 (b1_2_3 #3, yay B2 a1, GPT 2.1): B1'in son anını karşılar; dal hatası ve irade damgası kalktı */
        'Konakta lambalar yanmıştı. Perihan Hanım’ın “henüz” deyişi Feride’nin kulağındaydı.',
        /* GPT T25 Kenan (B2 anlatı 1): Kenan yolunda Şefik 1. bölümde tanındı, Süha ilk girişinde tanıtılır;
           Süha yolunda Şefik ilk kez burada anılır (1. bölümde yalnız sesi duyuldu) */
        /* Tur 27 (B2 anlatı 1): açılışın tek sorusu bir tanıtım cümlesiyle bölünmez; Şefik salonda tanıtılır */
        /* Tur 29 (B2 anlatı 10'a): açılışta Feride'nin kararı */
        /* Tur 32 (B2 anlatı 1): sofranın haberi Hatice ve Nimet'te; anlatıcı birazdan görüleni önceden söylemez */
        /* GPT T26 Süha (B2 sürük 1): açılışın vaadi dalın gerçek sofra çatışmasına uyar (önce yalan, sonra açılan sır) */
        (S) => (S.bayrak.p_yalan
          ? 'Gelin odasında Perihan Hanım\'a bir yalan söylenmişti. Bu konakta yalanlar sofraya er geç gelirdi.'
          : (yandi(S)
            ? 'Gelin odasında Perihan Hanım\'ın yüzüne bir sır açılmıştı. O akşam sofrada hesabın kimden sorulacağı belli değildi.'
            : (muk(S)
              ? 'Merdivende olanı henüz Sait Efendi duymamıştı.'
              : 'Limonlukta olanı henüz Sait Efendi duymamıştı.'))),
      ] } },
    ],

    olaylar: [
      /* ---------------- 1. Oda: gerdanlık haberi ve düğünden kalan ---------------- */
      {
        id: 'p2_oda', mekan: 'fazila_oda', tetik: 'giris', kosul: (S) => S.gorev === 0, sahne: ['mehves'],
        adimlar: [
          /* Tur 28 (B2 anlatı 5): "bu konakta" yolda en çok iki */
          ['an', 'Nimet kapıyı arkasından kapadı, sonra sesini alçalttı.'],
          /* Sürükleyicilik T1 (S4, B2-1): sakin açılış satırı kalktı; ilk seçim öne. Gerdanlık haberi sofra kıyafetinin önünde. */
          /* GPT T25 Kenan (B2 sürük 1): kâhyanın beklediği ilk satırda */
          /* Tur 27 (B2 görsel 3; GPT G3/G4): kıyafet ekranı kâhyanın kitabından önce. Pusulaya yazılan an resmi
             (an_pusula) yazma anında ve sofra elbisesiyle açılır; ilk karar yine ilk satırlarda. */
          /* Tur 28 (B2 sürük 1, diyalog 3): 1. bölümün "sofra" kancası ilk satırlarda; Nimet'in haberi iki kutuya bölündü */
          ['mehves', 'Münevver Hanım\'ın kâhyası geldi hanımcığım. Gerdanlık kuyumcudan çıkmış, öbür gün takılacak.', 'ana'],
          ['mehves', 'Perihan Hanım da mutfağa iki kez indi. Sofrada size bir şey soracak.', 'endiseli'],
          /* Tur 28 (GPT B2 b3): gelecek sofra tehdidi geçmiş sayılmaz */
          ['mehves', 'Sofraya ne giyeceksiniz?', 'notr'],
          /* --- Sofraya kıyafet --- */
          { islev: (S) => { S.bayrak.p2_ilk_giyili = S.giyili; } },
          { giyin: ['aksam', 'nisan_sade', 'nisan_yadigar'], soru: 'Sofraya ne giyeceğim?' },
          { eger: (S) => S.giyili === 'nisan_yadigar', ise: [
            { eger: (S) => S.bayrak.p2_ilk_giyili === 'nisan_yadigar', ise: [
              ['mehves', 'Yine annenizin mavisi mi?', 'endiseli'],
              ['f', 'Düğünde hanımlar gördü. Bu akşam babam görsün.', 'kararli'],
            ], degilse: [
              ['mehves', 'Annenizin mavisi mi? Babanız sofrada olacak.', 'endiseli'],
              ['f', 'Biliyorum.', 'kararli'],
            ] },
          ], degilse: [{ eger: (S) => S.giyili === 'nisan_sade', ise: [
            ['mehves', 'Fildişi. Madalyonu yakanın içine mi saklayalım?', 'notr'],
            ['f', 'Saklayalım. Bu akşam kimse bakmasın.', 'mahzun'],
            { bayrak: { madalyon_hal: 'sakli' } }, // Tur 28: an resmi çeşidi (ortak istek)
          ], degilse: [
            ['mehves', 'Leylak olsun. Ayağınıza da ökçeli iskarpinler; merdivende sesiniz duyulsun.', 'ana'],
            ['ic', 'Duyulsun. Sofraya saklanarak inmeyeceğim.', 'kararli'],
          ] }] },
          /* Tur 28 (B2 anlatı 1): kitabın bu gece geri gidişi gerekçeli. Tur 29 (B2 anlatı 2): hediye geri istenmez;
             kitap bir geceliğine işaret için gider */
          /* Tur 32 (B2 anlatı 2): geri istenen kitap açık bir bahanedir ve Nimet bunu söyler; yalnız Kenan yolunda */
          ['mehves', 'Kâhya, Şefik Bey’in düğünde unuttuğu kitabı da getirmiş.', 'ana'],
          { goster: ['kitap', 'ana'] },
          { eger: muk, ise: [
            ['mehves', 'Kenan Bey kitabı bu gece geri istiyormuş. Kâhya cevabınızı bekliyor.', 'ana'],
            /* --- Kenan yolu: kitabın içindeki pusula --- */
            { goster: ['mukaddem_not', 'ana'] },
            { muzik: 'romantik' }, // Tur 27 (B2 ses 3): Kenan yolunun romantik basamağı "ev" müziğinde kalmaz
            { efekt: 'kagit' },
            /* Tur 27 (B2 diyalog 7): Kenan'ın sade, somut övgüsü */
            { eger: (S) => S.bayrak.p_yasemin === 'sakla', ise: [
              'Kitabı açtım. Yasemin düşen sayfadan katlı bir kâğıt kaydı.',
              '“Yirmi üçüncü sayfa boş kaldı. Yasemin iyi bir yerdeyse, kalsın. —K.”',
            ], degilse: [{ eger: (S) => S.bayrak.p_yasemin === 'geri', ise: [
              'Kitabı açtım. Yaseminin yanından katlı bir kâğıt kaydı.',
              '“Yasemini yerinde buldum. Demek yeri burasıymış. —K.”',
            ], degilse: [
              'Kitabı açtım. Yaseminin yanından katlı bir kâğıt kaydı.',
              '“‘Sizin bahçenizin’ demiştim. Sahibine yolluyorum. —K.”', // Tur 29 (B2 diyalog 3)
            ] }] },
            /* Oynanış T1 (B3): merdivendeki sitemin (Kenan −3) karşılığı; Kenan borcunu kabul eder */
            { eger: (S) => !!S.bayrak.p1_sitem, ise: [
              /* Tur 27 (B2 diyalog 1): "borç" Süha'nın kalıbı; Kenan sade söyler */
              'Altında bir satır daha: “Bir yıl yazmadım. Bu, ilki.”',
            ] },
            /* Oynanış T1 (B5, B2 öneri 1): kitapta keşif; p2_k_ithaf gece defterinde okunur */
            { kesif: { x: 40, y: 50, w: 16, h: 14, ad: 'Kitabın ithafı', adimlar: [
              'İthafın altında kazınmış bir satır: “…ve ablasına.”',
              ['ic', 'Yazmış, sonra kazımış. Bir yıl böyle geçmiş.', 'mahzun'],
              { bayrak: { p2_k_ithaf: true } },
            ] } },
            { soru: 'Bir yıl tek satır yoktu. Kitap bu gece geri gidecek.', secim: [
              { m: 'Pusulanın altına bir satır yaz.', bayrak: { p2_pusula: 'yazdi' }, iz: 'Kenan\'ın pusulasına kendi cevabını yazdın.', adimlar: [
                { efekt: 'kalem' },
                'Annemin gümüş kalemini buldum. Nimet görmüyormuş gibi pencereye döndü.',
                { soru: 'Ne yazacağım?', secim: [
                  { m: '“Okudum.”', bayrak: { p2_pusula_yolda: true, p2_satir: 'okudum' }, adimlar: [
                    ['ic', '“Okudum” yazdım. Başka ne yazsam Nimet\'in de okuyacağını düşündüm.', 'utanmis'],
                  ] },
                  { m: '“Sayfa yirmi dörtte ne var?”', bayrak: { p2_pusula_yolda: true, p2_satir: 'soru' }, adimlar: [
                    ['ic', 'Soru sordum ki cevap yazmak zorunda kalsın.', 'tebessum'],
                  ] },
                  { m: '“Yasemin iyi bir yerde.”', kosul: (S) => S.bayrak.p_yasemin === 'sakla', bayrak: { p2_pusula_yolda: true, p2_satir: 'yasemin' }, adimlar: [
                    ['ic', 'Yazarken elim titredi. Yazı yine de düzgün çıktı.', 'utanmis'],
                  ] },
                  { m: '“Yeri burası. Siz de biliyorsunuz.”', kosul: (S) => S.bayrak.p_yasemin !== 'sakla', bayrak: { p2_pusula_yolda: true, p2_satir: 'yasemin' }, adimlar: [
                    ['ic', 'Yazarken elim titredi. Yazı yine de düzgün çıktı.', 'utanmis'],
                  ] },
                  /* Tur 30 (B1 anlatı 3; B2 anlatı 2): 1. bölümün "Kenan'ın haberi olmalı" planı burada ödenir. Kenan yolunda
                     her kız arabada görücü hanımı duydu (p1_kanca). 3. bölüm SAYFA ve "Onun gözünden" okur */
                  { m: '“Gerdanlıktan önce bir hanım beni oğluna istedi.”', bayrak: { p2_pusula_yolda: true, p2_satir: 'haber' }, iz: 'Kenan\'a perde ardındaki pazarlığı yazdın. Haberi Perihan Hanım\'dan önce sen verdin.', adimlar: [
                    ['ic', 'Ona yazdığım ilk satır bir gönül sözü değil, kötü bir haber oldu.', 'mahzun'],
                  ] },
                  /* Tur 29 (B2 oynanış 2): Kenan yolunda açık soğukluk da yazılabilir; gönül düşer (net 0), 3. bölüm SAYFA okur */
                  { m: '“Bir yıl bekledim. Siz de biraz bekleyin.”', etki: { vakar: 1 }, bayrak: { p2_pusula_yolda: true, p2_satir: 'sitem' }, iz: 'Pusulanın altına sitemini yazdın.', adimlar: [
                    ['ic', 'Bu kadarını yazabildim. Kırıldığımı anlasın.', 'mahzun'],
                  ] },
                ] },
                /* Tur 27 (B2 oynanış 2; GPT O3/G4): an_pusula yalnız gerçekten yazılan dalda.
                   Tur 28 (B2 oynanış 3): resim Feride'yi yazarken gösterir; Nimet kâğıdı almadan önce */
                /* Tur 32 (B2 görsel 5): sitem ve haber dallarında gülen resim açılmaz */
                { eger: (S) => ['sitem', 'haber'].indexOf(S.bayrak.p2_satir) >= 0, ise: [{ cizim: 'an_pusula_ciddi' }], degilse: [{ cizim: 'an_pusula' }] },
                ['mehves', 'Ben götürürüm. Kâhyanın eline, başkasının değil.', 'kararli'],
                /* GPT T23 (Kenan 2b-1): ilk kez kendi sözü evden çıkıyor; geri alınamazlık */
                ['an', 'Nimet kâğıdı koynuna koydu. Feride geri isteyecek gibi oldu, sonra vazgeçti.'],
                /* Tur 28 (GPT B1 S1): arabada Perihan'a "Ben de bir satır eklerim" denmişti; satır gerçekten gider */
                { eger: (S) => S.bayrak.p_defter === 'calibe' && !S.bayrak.p1_defter_anne, ise: [
                  ['ic', 'Perihan Hanım\'ın habercisi daha yola çıkmadan benim satırım çıktı.', 'tebessum'],
                ] },
              ] },
              { m: 'Yaseminden bir yaprak kopar, pusulaya koy.', kosul: (S) => S.bayrak.p_yasemin === 'sakla', bayrak: { p2_pusula_yolda: true, p2_pusula: 'yaprak' }, iz: 'Kenan\'a yazısız, kokulu bir cevap yolladın.', adimlar: [
                'Tek bir yaprak kopardım. Kokusu hâlâ geçen yazın kokusu.',
                ['ic', 'Yazı yok. Anlayan anlar.', 'tebessum'],
              ] },
              { m: 'Yasemini al. Bu kez sakla.', kosul: (S) => S.bayrak.p_yasemin !== 'sakla', bayrak: { p2_pusula_yolda: true, p2_pusula: 'aldi' }, iz: 'Yasemini bu kez sen sakladın.', adimlar: [
                'Kitap gitsin, yasemin kalsın. Boş sayfa benim cevabım.',
              ] },
              /* Tur 33 (B2 sürük 1): "sustu" dalının ayrı "Pusula elimde" sorusu bu seçime indi (p2_not_yer aynı değerler) */
              { m: 'Okuduğunu belli etmek için pusulayı farklı katlayıp geri koy.', bayrak: { p2_pusula_yolda: true, p2_pusula: 'sustu', p2_not_yer: 'kitap' }, iz: 'Pusulayı geri koydun; okuduğunu anlayacak mı, bilmiyorsun.', adimlar: [
                'Yeniden katladım. Bir katını bile bile yanlış katladım.',
                ['ic', 'Bir yıl o sustu. Bu gece de ben susayım.', 'dusunceli'],
              ] },
              { m: 'Hiçbir şey yazma. Pusulayı yastığının altına sakla.', bayrak: { p2_pusula: 'sustu', p2_not_yer: 'yastik' }, iz: 'Pusula yastığının altında.', adimlar: [
                ['ic', 'Cevap vermedim. Ama atmadım da.', 'utanmis'],
              ] },
            ] },
            { eger: (S) => S.bayrak.p2_pusula === 'yaprak' || S.bayrak.p2_pusula === 'aldi', ise: [
              { soru: 'Kalan yasemini nereye koyayım? Çekmecelerim benden habersiz açılır.', secim: [
                /* Tur 30 (GPT B2 O2): Kenan'ın görmediği saklama gönül vermez (gönül adayın ilgisidir) */
                /* Tur 33 (B2 oynanış 1): iz satırı riski söyler (Nazlı'nın neyi bulacağı bu seçime bağlı) */
                { m: 'Annemin madalyonunun içine.', bayrak: { p2_yasemin_yer: 'madalyon' }, iz: 'Yasemini madalyona koydun. Madalyon boynunda, kimse açamaz.', adimlar: [
                  'Kapağı kapadım. Yasemin şimdi annemin hatırasıyla birlikte boynumdaydı.',
                ] },
                { m: 'Defterimin arasına.', bayrak: { p2_yasemin_yer: 'defter' }, iz: 'Yasemini defterine koydun. Defterin çekmecede.', adimlar: [
                  ['ic', 'Bu geceki sayfanın arasına. Sabah ilk onu görürüm.', 'utanmis'],
                ] },
              ] },
            ] },
            { gizle: 'mukaddem_not' }, { gizle: 'kitap' },
          ], degilse: [
            /* --- Süha yolu: kitap yalnız bir hatıra; asıl iz menekşe şekeri --- */
            /* Tur 27 (B2 anlatı 7): rapor cümlesi yerine duygu */
            /* Tur 28 (B2 anlatı 2; GPT A1): limonlukta yazı okunmadı; Fransızca söz duyuldu */
            ['ic', 'Kenan Bey’in elini tanıdım. Düğünde ona rastlamamıştım.', 'mahzun'],
            { gizle: 'kitap' },
            { goster: ['seker_kutusu', 'ana'] },
            { muzik: 'suha' }, // Tur 27 (B2 ses 3)
            /* Oynanış T1 (B5, B2 öneri 1): kutunun iç kapağı; p2_k_kapak piyanoda yeni bir seçeneği açar */
            { kesif: { x: 44, y: 50, w: 14, h: 12, ad: 'Kutunun kapağı', adimlar: [
              'Kapağın içinde ince bir yazı: “À celle qui ne regarde pas.”',
              ['ic', '“Bakmayan kıza.” Bakan oydu.', 'saskin'],
              { bayrak: { p2_k_kapak: true } },
            ] } },
            { eger: (S) => S.bayrak.p_seker === 'aldi', ise: [
              ['mehves', 'Bu kutu Beyoğlu işi. Kim verdi bunu size?', 'endiseli'],
              { soru: 'Nimet kutuya bakıyor.', secim: [
                /* Tur 30 (GPT B2 O2 ilkesi): Süha'nın bilmediği odadaki seçimler onun ilgisini artırmaz (bayraklar kalır) */
                { m: '“Süha Bey.”', bayrak: { p2_kutu: 'soyledi' }, iz: 'Nimet\'e kutunun sahibini söyledin.', adimlar: [
                  ['f', 'Süha Bey.', 'endiseli'],
                  { efekt: 'kapi_kapa' },
                  'Nimet kutuyu çekmeceye koydu. Tam kapanmayınca eliyle bir daha itti.',
                ] },
                { m: '“Leyla verdi.”', bayrak: { p2_kutu: 'yalan' }, iz: 'Nimet\'e yalan söyledin. Sana “peki” dedi.', adimlar: [
                  ['f', 'Leyla verdi.', 'utanmis'],
                  ['mehves', 'Leyla Hanım Beyoğlu\'na mı gitmiş? Peki.', 'endiseli'],
                  ['ic', 'Nimet bana hiç “peki” demezdi.', 'mahzun'],
                ] },
                { m: '“Şefik\'e götür. Şekeri o sever.”', bayrak: { p2_kutu: 'sefik' }, iz: 'Süha Bey\'in kutusunu kardeşine verdin.', adimlar: [
                  ['f', 'Şefik\'e götür. Şekeri o sever.', 'mahzun'],
                  /* Tur 28b (kök 2): kutuyu elden çıkaran kızın iç sesi gizli bir çekime dönmez */
                  ['ic', 'Kutu gitti. Hatır için aldığımı kardeşime verdim, bende bir şey kalmadı.', 'mahzun'],
                ] },
              ] },
            ], degilse: [{ eger: (S) => S.bayrak.p_seker === 'reddetti', ise: [
              /* Tur 27 (B2 anlatı 6): limonluk düğün evinde; kutunun konağa nasıl geldiği belli olsun */
              ['mehves', 'Düğün evinin hizmetçisi getirdi. Limonlukta küçük hanımın yanında duruyormuş.', 'endiseli'],
              { soru: 'Kutu masamda. Biri onu yanımda görmüş.', secim: [
                { m: '“Süha Bey\'e geri versinler.”', bayrak: { p2_kutu: 'iade' }, iz: 'Kutuyu Süha Bey\'e geri yolladın. Fikrin değişmedi.', adimlar: [
                  ['f', 'Süha Bey\'e geri versinler. Teşekkürümle.', 'kararli'],
                  ['ic', 'Fikir değiştirmedim. Bunu bilsin.', 'kararli'],
                ] },
                { m: 'Kutuyu aç. Bir tane ye.', bayrak: { p2_kutu: 'yedi' }, iz: 'Fikrini değiştirdin, kimse bilmiyor.', adimlar: [
                  'Menekşenin tadı dilimde yavaş yavaş eridi.',
                  ['ic', '“Fikir değiştirirsiniz” demişti. Değiştirdiğimi kimse bilmesin.', 'utanmis'],
                ] },
                /* Oynanış T1 (B3): Süha için eksi seçenek; kutusunun Perihan'a "unutulmuş" diye gitmesi */
                { m: '“Perihan Hanım\'a götürsünler.”', etki: { calibe_suphe: 1 }, bayrak: { p2_kutu: 'calibe' }, iz: 'Süha Bey\'in kutusunu Perihan Hanım\'ın önüne koydun. Duyacak.', adimlar: [
                  ['f', 'Perihan Hanım\'a götürsünler. “Süha Bey unutmuş” desinler.', 'tebessum'],
                  ['mehves', 'Hanımcığım… ateşle oynuyorsunuz.', 'endiseli'],
                ] },
              ] },
            ], degilse: [
              /* Diyalog T1 (2.1, D6): bu dalda Feride "Şekeri o sever" dedi; iğne o söze cevap verir */
              /* Tur 30 (GPT B2 D2): camdaki gölgeyi söyleyen kızın iğnesi gözetlemeye; "şekeri o sever" diyeninki o söze.
                 (Claude B2 anlatı 3) Süha kutuyu gerçekten götürmüş; tehlike tohumu */
              { eger: (S) => !!S.bayrak.p1_seker_cam, ise: [
                ['mehves', 'Perihan Hanım yolladı: “Camın ardındaydım, kutuyu da gördüm. Feride\'ye götür.”', 'endiseli'],
                ['ic', 'Camdaki gölgeyi ona söylemiştim. Şimdi gördüğünü bana hatırlatıyor.', 'ofkeli'],
              ], degilse: [
                ['mehves', 'Perihan Hanım yolladı: “Ben severmişim. Feride de bir tane yesin.”', 'endiseli'],
                ['ic', 'Kutuyu gerçekten ona götürmüş. Şimdi benim sözümü bana geri yolluyor.', 'ofkeli'],
              ] },
              { soru: 'Perihan Hanım\'ın kutusu masamda.', secim: [
                { m: 'Bir tane ye. Tadına bak.', bayrak: { p2_kutu: 'yedi' }, iz: 'Perihan Hanım\'ın yolladığı şekeri yedin.', adimlar: [
                  'Tatlıydı. Kimin elinden geldiğini bilmesem daha tatlı olurdu.',
                ] },
                { m: '“Sen ye Nimet.”', etki: { mehves: 1 }, bayrak: { p2_kutu: 'nimet' }, iz: 'Perihan Hanım\'ın şekeri Nimet\'e kaldı.', adimlar: [
                  ['f', 'Sen ye Nimet. Bütün gün ayaktaydın.', 'tebessum'],
                  ['mehves', 'Menekşe sevmem. Ama Perihan Hanım yolladı ya, inadına yerim.', 'ana'],
                ] },
                { m: 'Geri yolla: “Siz seversiniz, doğru.”', etki: { calibe_suphe: 1 }, bayrak: { p2_kutu: 'iade' }, iz: 'Perihan Hanım\'ın iğnesini kendi sözüyle geri yolladın.', adimlar: [
                  ['f', 'Geri götür. “Siz seversiniz, doğru” de.', 'kararli'],
                  ['ic', 'Limonlukta ne dediğimi unutmadığımı görsün.', 'kararli'],
                ] },
              ] },
            ] }] },
            { gizle: 'seker_kutusu' },
            /* Diyalog T1 (2.2): "dedirtir" Süha'nın bu hitabı istediğini söylüyordu; B1'de istemedi */
            /* GPT T26 Süha (B2 diyalog 1): bilgi Nimet'in kaygısına, ilişkinin değişimine bağlanır (A1: kan bağı yok) */
            /* Tur 27 (GPT D4): kan bağı dipnot gibi değil, Nimet'in kaygısıyla */
            /* Tur 29 (B2 diyalog 1): "dayı" hitabı 1. bölümde açıklandı; Nimet yalnız kaygısını söyler */
            ['mehves', 'O adam size artık yeğen gözüyle bakmıyor hanımcığım. “Dayı” deyip geçmeyin.', 'kararli'],
            { soru: 'Nimet yüzüme bakıyor.', secim: [
              /* Tur 30 (GPT B2 O2): Süha'nın duymadığı özel konuşma onun ilgisini artırmaz; bayraklar kalır */
              { m: '“Biliyorum Nimet.”', bayrak: { p2_hitap: 'biliyor' }, iz: 'Süha Bey\'in bakışını bildiğini Nimet\'e söyledin.', adimlar: [
                ['f', 'Biliyorum Nimet.', 'mahzun'],
                ['mehves', 'O da sizin bildiğinizi biliyor. Ben ondan korkuyorum.', 'korkmus'],
              ] },
              /* Tur 29 (B2 oynanış 1): seçenek niyetini söyler; iç ses yakınlaşma değil, gözünü açma */
              { m: '“Artık çocuk değilim, ‘Süha Bey’ derim.”', etki: { vakar: 1 }, bayrak: { p2_hitap: 'bey' }, iz: '“Dayı” kalkanını indirdin. Artık ona mesafeyle, bir yabancı gibi bakacaksın.', adimlar: [
                ['f', 'Artık çocuk değilim Nimet. Bundan sonra “Süha Bey” derim.', 'kararli'],
                ['ic', '“Süha Bey” diyeceğim. Aramızdaki mesafeyi yanlış anlamasın.', 'kararli'],
              ] },
              { m: '“Anlat bana Nimet. O kimdir?”', etki: { mehves: 1 }, bayrak: { p2_hitap: 'sordu' }, iz: 'Süha Bey\'in eski bir sırrını Nimet\'ten öğrendin.', adimlar: [
                /* GPT T26 Süha (B2 diyalog 10'a-2): Nimet önce direnir; Feride sorarak öğrenir */
                /* Tur 33 (B2 anlatı 1): reddedilen talip sırrı 6. bölümün ifşası; burada yalnız bir "eski hesap" */
                ['mehves', 'Sormayın, hanımcığım. Perihan Hanım’la aralarında eski bir hesap var derler.', 'endiseli'],
              ] },
              /* Tur 28b (kök 1): Nimet'in uyarısına açık ret (gönül değişmez; Süha burada değil). p2_hitap 'sinir' sonraki
                 bölümlerde "dayı" hitabının varsayılanına düşer (pilot3/6 yalnız 'bey'/'sordu' okur) */
              { m: '“Baksın. Benim sözüm verildi Nimet.”', etki: { vakar: 1 }, bayrak: { p2_hitap: 'sinir' }, iz: 'Nimet\'e, Süha Bey\'in bakışının sözünü değiştirmeyeceğini söyledin.', adimlar: [
                ['f', 'Baksın. Benim sözüm verildi Nimet.', 'kararli'],
                ['mehves', 'Siz bilirsiniz. Ama o adam bilmezden gelmeyi iyi bilir.', 'korkmus'],
              ] },
            ] },
          ] },
          /* Tur 28 (GPT B1 S1): arabadaki "Ben de bir satır eklerim" sözü icra edilir (pusulaya yazmayan yollarda);
             Perihan'ın habercisiyle yarışın sonucu görünür */
          /* GPT T29 (B2-O1/A1): Kenan yolunda pusulaya yazmamak (sustu / yalnız yaprak / boş sayfa) açık bir karardır; oyun
             ardından kendiliğinden yazı yazdırmaz. Yazı yalnız pusula kararı olmayan Süha yolunda (arabadaki vaat) */
          { eger: (S) => S.bayrak.p_defter === 'calibe' && !S.bayrak.p1_defter_anne && !muk(S), ise: [
            'Kâhya gitmeden kâğıda iki satır yazdım: “Gerdanlık günü kapıda ben karşılayacağım. —F.”',
            ['mehves', 'Perihan Hanım\'ın haberi kâhyaya benden önce varmış. Ama sizin satırınız da gitti.', 'kararli'],
          ], degilse: [{ eger: (S) => S.bayrak.p_defter === 'calibe' && !S.bayrak.p1_defter_anne && S.bayrak.p2_pusula !== 'yazdi', ise: [
            ['ic', 'O satırı eklemedim. Perihan Hanım kâhyanın elinde okuyacak bir şey bulamasın.', 'tebessum'],
          ] }] },
          { muzik: null },
          { vakit: VAKIT_YEMEK }, { gorev: 1 },
        ],
      },

      /* ---------------- 2. Sofra: evlilik lafı ve Perihan'ın iğnesi ---------------- */
      {
        /* Anlatı denetimi T1 (mercek_tanitim Y4): sofrada portreler tek tek katılır; Süha ve Nabi ilk sözlerinden önce */
        id: 'p2_sofra', mekan: 'yemek_salonu', tetik: 'giris', kosul: (S) => S.gorev === 1, sahne: ['sai', 'calibe'],
        adimlar: [
          /* Tur 27 (B2 anlatı 10'a): gezinmeden sahneye geçişte tek satırlık ara sayfa */
          { ara: { mekan: 'yemek_salonu', yer: 'Yemek odası · akşam', satirlar: [
            /* Tur 29 (B2 anlatı 10'a): kuralın somut örneği */
            'Sait Efendi sofranın başına geçince Perihan Hanım kardeşi Nabi’yi karşı uçta Süha Bey’in yanına oturttu.',
          ] } },
          { eger: muk, ise: [
            /* Kenan yolu: Süha ilk girişinde tanıtılır (salonda görüldüyse orada); salonda konuşulduysa o an hatırlanır.
               GPT T25 Kenan (B2 anlatı 2): "dayı" dipnot gibi değil, sofradaki gerilimle */
            { eger: (S) => !!S.bayrak.p2_v_salon, ise: [
              ['an', 'Süha Bey sofrada, salondaki özrünü unutmuş gibi oturuyordu.'],
            ], degilse: [
            ] },
            { goster: ['suha', 'notr'] },
            /* Tur 29 (B2 diyalog 1): "dayı" açıklaması üçüncü kez dönmez; gözlenen bakış */
            ['ic', 'Süha Bey bu akşam tabağına değil, bana bakıyor. Perihan Hanım da onu görüyor.', 'endiseli'],
          ], degilse: [
            ['an', 'Süha Bey sofraya oturduğundan beri Feride\'ye bakmamaya özen gösterdi. Bu özeni Perihan Hanım da gördü.'],
            { goster: ['suha', 'notr'] },
          ] },
          { eger: (S) => S.giyili === 'nisan_yadigar', ise: [
            'Babam elbiseme baktı. Çatalını bıraktı.',
            ['sai', 'Behiye\'nin… Neyse. Ye kızım.', 'mahzun'],
            ['calibe', 'Yirmi yıllık kesim. Terziye yenisini ısmarlarız kızım.', 'sinsi'],
          ], degilse: [{ eger: (S) => S.giyili === 'nisan_sade', ise: [
            ['calibe', 'Ne sade. Görücü gelse dönüp bakmaz.', 'sinsi'],
            ['ic', 'İyi ya. Bakmasın.', 'tebessum'],
          ], degilse: [
            ['sai', 'Leylak sana yakışmış kızım.', 'gulumser'],
            ['calibe', 'Benim seçtiğim kumaş.', 'sinsi'],
            ['ic', 'Değildi.', 'kararli'],
          ] }] },
          /* Tur 27 (B1 oynanış 2, B2 anlatı 10'a): 1. bölümün madalyon ve hanımlara cevap seçimleri sofrada okunur */
          /* Tur 29 (B2 sürük 1): yalan dalında sofra açılışı 13 satırı aşmasın; geri çağrılar yalansız yolda */
          { eger: (S) => S.bayrak.p_madalyon === 'acik' && S.giyili === 'aksam' && !S.bayrak.p_yalan, ise: [
            'Babam göğsümdeki madalyona baktı. Ağzını açmadı, ekmeği yavaş yavaş böldü.',
          ] },
          { eger: (S) => S.bayrak.p_cevap === 'sert' && !S.bayrak.p_yalan, ise: [
            ['calibe', 'Düğünde dört hanımı birden susturmuşsun kızım. Bütün Boğaz konuşuyor.', 'sinsi'],
            ['ic', 'Konuşsunlar. Hiçbiri bir cevap bulamamış.', 'kararli'],
          ] },
          /* Serbest vakitte mutfakta duyulduysa: iğne önceden bilinir */
          { eger: (S) => !!S.bayrak.p2_v_mutfak, ise: [
            { eger: (S) => S.bayrak.p2_v_mutfak === 'yuz', ise: [
              /* Tur 28 (B2 oynanış 4; GPT O1): erken şerbet gerçekten uygulanır; Perihan'ın işareti boşa düşer */
              /* tek satır (iki seçim arası 13 satır); yalan dalında kapı satırı Perihan'ın karşı hamlesini de gösterir */
              ['ic', 'Hatice şerbeti Perihan Hanım\'ın işaretinden önce masaya koydu. Mutfaktaki sözüm tuttu.', 'tebessum'],
            ], degilse: [
              ['ic', 'Mutfakta duyduğum soru şimdi gelecek. Cevabım dilimin ucunda.', 'kararli'],
            ] },
          ] },

          /* --- 1. bölümün sözü sofraya geliyor: yalan, harcanan koz ya da söylenen doğru --- */
          { eger: (S) => !!S.bayrak.p_yalan, ise: [
            /* Tur 28 (B2 anlatı 4; GPT O1): erken şerbet dalında Hatice tepsiyi bırakıp çekilecekti; Perihan onu kapıda tutar */
            { eger: (S) => S.bayrak.p2_v_mutfak === 'yuz', ise: [
              /* Tur 29 (B2 anlatı 1): erken şerbet iç seste söylendi; anlatıcı yalnız yeni olanı (Perihan'ın hamlesi) söyler */
              ['an', 'Hatice çekilirken Perihan Hanım arkasından seslendi.'],
              { goster: ['reftar', 'ana'] },
              ['reftar', 'Ben bütün gün gelin odasının kapısındaydım efendim, kimse beni aramadı.', 'somurtkan'],
            ], degilse: [
              ['an', 'Hatice şerbet tepsisiyle kapıda durdu. Hanımının işaretini bekler gibiydi.'],
              { goster: ['reftar', 'ana'] },
              ['reftar', 'Şerbet efendim. Ben bütün gün gelin odasının kapısındaydım, kimse beni aramadı.', 'somurtkan'],
            ] },
            /* Tur 28 (B2 anlatı 3): 1. bölümde yalanı gelin odasında yakalayan Perihan yeniden şaşırmaz */
            { eger: (S) => S.bayrak.p_reftar === 'seslendi', ise: [
              ['calibe', 'Efendi, Feride düğünde Hatice\'yi aramış ama Hatice ondan önce gelmiş. Ne tuhaf.', 'sinsi'],
            ], degilse: [
              ['calibe', 'Kimse mi? Feride seni aradığını söyledi.', 'soguk'],
            ] },
            'Babam bana baktı. Hatice\'nin tepsisi kıpırdamadı.',
            { soru: 'Yalanım sofraya kondu.', secim: [
              /* Tur 28 (GPT B2 O1): erken şerbetin kazancı bir sonraki cevapta görünür; yalan ertelenir, silinmez */
              { m: '“Hatice\'yi bekletmeyelim efendim, şerbeti çoktan bıraktı.”', kosul: (S) => S.bayrak.p2_v_mutfak === 'yuz', etki: { vakar: 1, calibe_suphe: 1 }, bayrak: { p2_yalan: 'serbet' }, iz: 'Mutfaktaki hamlen sofrada işe yaradı. Yalan bir lokma ertelendi.', adimlar: [
                ['f', 'Hatice\'yi bekletmeyelim efendim, şerbeti çoktan bıraktı.', 'tebessum'],
                ['sai', 'Bırakın kızı hanım, yemek soğuyor.', 'notr'],
                ['calibe', 'Soğumasın. Konuşacak çok vaktimiz var.', 'soguk'],
                ['ic', 'Yalanım sofradan kalktı ama evden çıkmadı.', 'endiseli'],
              ] },
              { m: '“Aradım, bulamadım. Kapı kalabalıktı.”', etki: { calibe_suphe: 1 }, bayrak: { p2_yalan: 'buyuttu' }, adimlar: [
                ['f', 'Aradım, bulamadım efendim. Kapı kalabalıktı.', 'endiseli'],
                ['calibe', 'Kalabalık. Peki.', 'soguk'],
                ['ic', 'Bir yalanı ötekiyle örttüm. Babam bir daha sorarsa ne diyeceğim?', 'endiseli'],
              ] },
              { m: '“Doğrusu aramadım. Soluklanmaya kaçtım.”', etki: { baba_guven: 3, itibar: -2 }, bayrak: { p2_yalan: 'itiraf' }, iz: 'Yalanını babanın önünde kendin düzelttin.', adimlar: [
                ['f', 'Doğrusu aramadım babacığım. Kalabalıktan kaçıp soluklandım.', 'utanmis'],
                ['sai', 'Kızım yorulmuş hanım, bırak.', 'notr'],
                ['calibe', 'Doğruyu söylemesi ne güzel.', 'soguk'],
                ['ic', 'Bunu bana söylemedi. Babama söyledi.', 'mahzun'],
              ] },
              /* Oynanış T1 (B1): kozlu seçenek görünür; kozsuz oyuncu kilitli görür. Koz harcanmaz: Perihan duymadı, yalnız Hatice anladı. */
              /* GPT T26 Süha (öncelik 1): Hatice'yi arka bahçede adıyla çağıran oyuncu onu orada gördüğünü bilir; ona kilit
                 gösterilmez, bildiğine dayanan açık seçenek verilir (koz yok, gizlilik üstünlüğü de yok). */
              { m: '“Aramadım, çağırdım Hatice. Çeşmenin başındaydın.”', kosul: (S) => S.bayrak.p_reftar === 'seslendi', etki: { vakar: 1, calibe_suphe: 1 }, bayrak: { p2_yalan: 'itiraf' }, iz: 'Yalanını düzelttin, Hatice\'ninkini de sofraya koydun.', adimlar: [
                ['f', 'Aramadım, çağırdım Hatice. Çeşmenin başındaydın, unuttun mu?', 'kararli'],
                ['reftar', 'Unutmadım küçük hanım.', 'somurtkan'],
                ['calibe', 'Çeşme mi? Şerbetler ısınmasın.', 'soguk'],
                ['ic', 'Hatice’nin de benim de yalanım ortaya çıktı.', 'kararli'],
              ] },
              { m: '“Kapıda mıydın? Arka bahçede gördüm sanmıştım.”', kozGerek: KOZ, kilitGoster: (S) => S.bayrak.p_reftar !== 'seslendi', bayrak: { p2_yalan: 'koz', p2_koz_sofra: 'reftar' }, iz: 'Hatice\'ye arka bahçeyi hatırlattın, kozun hâlâ sende.', adimlar: [
                ['f', 'Kapıda mıydın Hatice? Arka bahçede, çeşmenin oralarda gördüm sanmıştım.', 'kararli'],
                'Şerbet bardağı tepside tıngırdadı.',
                ['reftar', 'Yanılmışsınız küçük hanım.', 'korkmus'],
                'Gözü tepsisine indi. Şimdilik sustu.',
              ] },
              { m: 'Hatice\'nin gözünün içine bak.', kosul: (S) => !kozVar(S), etki: { vakar: 1 }, bayrak: { p2_yalan: 'bakti' }, adimlar: [
                'Hatice\'nin gözünün içine baktım. Gözü benimkine değdi, kaçtı.',
                ['calibe', 'Neyse. Şerbetler ısınmasın.', 'soguk'],
              ] },
            ] },
            { gizle: 'reftar' },
          ], degilse: [{ eger: yandi, ise: [
            ['calibe', 'Efendi, Nimet bugün mutfakta Hatice\'yle Nabi\'yi dile düşürmüş.', 'soguk'],
            { goster: ['nabi', 'mahcup'] },
            { efekt: 'oksuruk' }, // Tur 29 (B2 ses 1)
            ['sai', 'Hizmetçi sözü bu sofraya girmez. Nimet dilini tutsun.', 'ciddi'],
            ['ic', 'Sözü ben söyledim, azarı Nimet yiyor.', 'mahzun'],
            { soru: 'Perihan Hanım tabağına bakıp gülümsüyor.', secim: [
              /* GPT T26 Süha (B2 anlatı 1, öncelik 8): babanın sorusu cevapsız kesilmez; Feride ne gördüğünü kendisi söyler,
                 baba Nimet'i suçlamaktan vazgeçer (somut kazanç). Satır sayısı aynı. */
              { m: '“Nimet\'in suçu yok. Ben gördüm, ben söyledim.”', etki: { mehves: 2, calibe_suphe: 1 }, bayrak: { p2_nimet: 'korudu' }, iz: 'Nimet\'i babanın önünde korudun. Baban onu suçlamaktan vazgeçti.', adimlar: [
                ['f', 'Nimet\'in suçu yok babacığım. Hatice\'yi Nabi Bey\'le ben gördüm, ben söyledim.', 'kararli'], // Tur 27b: babaya karşı öfke değil, ciddi itiraf
                ['calibe', 'Çocuk yorgun efendim. Düğünde hayal görmüş.', 'sinsi'],
                /* Tur 27 (B2 diyalog 2): Sait'in kısa hükmü */
                ['sai', 'Hayal de olsa kabahat Nimet\'in değil. Ona laf yok hanım.', 'ciddi'],
                ['ic', 'Babam Nimet\'i bıraktı. Nabi Bey\'e ise uzun uzun baktı.', 'tebessum'],
              ] },
              { m: 'Şimdi sus. Nimet\'in gönlünü sofradan sonra al.', etki: { mehves: -1 }, bayrak: { p2_nimet: 'sustu' }, adimlar: [
                ['ic', 'Sustum. Kapıdaki Nimet\'in yüzüne bakamadım.', 'mahzun'],
              ] },
              { m: '“Nabi Bey, siz bir şey duydunuz mu?”', etki: { calibe_suphe: 1 }, bayrak: { p2_nimet: 'nabi' }, adimlar: [
                ['f', 'Nabi Bey, siz bir şey duydunuz mu?', 'kararli'],
                ['nabi', 'Ben mi küçük hanım? Ben hiçbir şey duymam.', 'mahcup'],
                'Perihan Hanım kardeşine baktı. Bu akşam bana değil, ona.',
              ] },
            ] },
          ], degilse: [{ eger: muk, ise: [
            /* Tur 27 (B2 diyalog 4): 1. bölümün "Ne tesadüf" imzası ve cevabı ardışık iki bölümde yinelenmez */
            ['calibe', 'Efendi, Feride bugün merdivende Kenan Bey\'e rastlamış. Düğün evlerinde merdivenler pek dar.', 'sinsi'],
            ['sai', 'Merdivende mi?', 'ciddi'],
            { soru: 'Babam çatalını bıraktı.', secim: [
              { m: '“Şefik de yanımızdaydı. Kitabı ona getirmiş.”', etki: { itibar: 3 }, bayrak: { p2_tanik: 'sefik' }, iz: 'Şefik\'i tanık gösterdin, baban rahatladı.', adimlar: [
                ['f', 'Şefik de yanımızdaydı babacığım. Kitabı ona getirmiş, ben yalnız selam aldım.', 'kararli'],
                ['sai', 'Kitap. İyi çocuktur Kenan.', 'gulumser'],
              ] },
              { m: '“Bir yıl sonra gördüm. Selam verdim.”', etki: { baba_guven: 2 }, bayrak: { p2_tanik: 'sahiplendi', p2_selam_haberi: true }, iz: 'Kenan\'la karşılaşmanı babanın önünde sahiplendin.', adimlar: [
                ['f', 'Bir yıl sonra gördüm babacığım. Selam verdim.', 'utanmis'],
                ['sai', 'Selam vermişsin. Annen de selamı esirgemezdi, iyi etmişsin.', 'gulumser'], // Tur 29 (B2 diyalog 10'a): Sait'in "Annen" imzası
                'Babam gülümsedi. Perihan Hanım ekmeğini ufaladı.',
              ] },
              { m: '“Perihan Hanım tesadüfleri pek sever.”', etki: { calibe_suphe: 1, itibar: -2 }, bayrak: { p2_tanik: 'atisti' }, adimlar: [
                ['f', 'Perihan Hanım tesadüfleri pek sever babacığım.', 'kararli'],
                ['calibe', 'Severim. Tesadüf, insanın yüzündeki maskeyi düşürür.', 'soguk'],
              ] },
            ] },
          ], degilse: [
            ['calibe', 'Efendi, Süha bugün limonlukta Feride\'yle uzun uzun sohbet etmiş.', 'sinsi'],
            ['sai', 'Hekimdir hanım. Hekimle iki laf etmek ayıp mı?', 'notr'],
            { soru: 'Süha Bey bardağını bıraktı.', secim: [
              { m: '“Kalabalıktan kaçmıştım. Süha Bey de kaçmış.”', etki: { suha: 4 }, bayrak: { p2_tanik: 'acik' }, iz: 'Limonluğu babana açıkça anlattın, baban güldü.', adimlar: [
                ['f', 'Kalabalıktan kaçmıştım babacığım. Süha Bey de kaçmış.', 'tebessum'],
                ['suha', 'Ben daha önce kaçmıştım efendim. Limonluk benimdi.', 'alayci'],
                { goster: ['sai', 'gulumser'] }, 'Babam güldü. Perihan Hanım gülmedi.',
              ] },
              { m: '“Perihan Hanım da oradaydı. Camın ardında.”', etki: { suha: 6, calibe_suphe: 1 }, bayrak: { p2_tanik: 'ifsa' }, iz: 'Camın ardındaki gölgeyi sofraya koydun.', adimlar: [
                ['f', 'Perihan Hanım da oradaydı babacığım. Camın ardında.', 'kararli'],
                'Süha Bey peçetesini dudağına götürdü. Gülüyordu.',
                ['calibe', 'Bahçeye bakıyordum kızım.', 'soguk'], // Tur 33: yakalanan Perihan'ın soğukkanlı yalanı (calibe_soguk üretimde)
              ] },
              { m: 'Sus. Bakalım Süha Bey ne diyecek.', etki: { suha: 2 }, bayrak: { p2_tanik: 'sustu' }, adimlar: [
                ['suha', 'Fransızcadan konuştuk efendim. Ben ders aldım.', 'notr'],
                ['calibe', 'Fransızca. Ne güzel.', 'soguk'],
              ] },
            ] },
          ] }] }] },

          /* Gezinme izi: yemekten önce mabeyne kimseye görünmeden gidildiyse (ceza yok, yalnız iz) */
          { eger: (S) => !!(S.gizliGidilen && S.gizliGidilen['102:mabeyn_merdiven']) && !S.bayrak.p2_mabeyn, ise: [
            ['ic', 'Eteğimde hâlâ mabeyn kapısının tozu. Kimse görmedi, masanın altında silkeledim.', 'endiseli'],
          ] },

          /* --- Evlilik lafı --- */
          /* Tur 27 (B2 anlatı 2): Nabi Bey sofraya anlatıcı girişiyle gelir (koz yandıysa az önce görünmüştü) */
          { eger: yandi, ise: [
            ['an', 'Sait Efendi ekmeği böldü ve her düğün dönüşü yaptığı gibi evlilik lafını açtı.'],
          ], degilse: [
            ['an', 'Sait Efendi ekmeği bölerken gözü kadehine dalmış kayınbiraderi Nabi Bey’e takıldı. Evlilik lafını açtı.'],
          ] },
          { goster: ['nabi', 'gulumser'] },
          ['sai', 'Nabi, Süha, siz ne zaman evleneceksiniz? Bu ev hep düğün görsün.', 'gulumser'],
          ['nabi', 'Ben beni besleyecek bir hanım isterim enişte. Gönlüm tok, cebim aç.', 'gulumser'],
          ['an', 'Perihan Hanım güldü. Sofrada ondan başka gülen olmadı.'],
          ['suha', 'Benim gönlüm kibar bir hanımda. Piyanoyu iyi çalan, Fransızcayı benden iyi bilen.', 'alayci'],
          { eger: muk, ise: [
            ['ic', 'Başımı kaldırırsam Perihan Hanım da görecek.', 'endiseli'],
          ], degilse: [{ eger: sinir, ise: [
            /* Tur 30 (B2 diyalog 1; karşılaşma ≠ istek): ona sınır koymuş kıza nazlı bir kabul yüklenmez */
            ['ic', 'Kime söylediğini herkes anladı.', 'kararli'],
          ], degilse: [
            ['ic', 'Kime söylediğini herkes anladı. Ben en son anlamış gibi yaptım.', 'tebessum'],
          ] }] },
          { eger: (S) => !!S.bayrak.p2_v_salon, ise: [
            ['ic', 'Salonda önceden özür dilemişti. Demek buymuş.', 'saskin'],
          ] },
          ['calibe', 'Süha’ya bir hanım buluruz efendi. Sofrada kendini ele vermesin.', 'sinsi'],
          { soru: 'Bütün sofra bana döndü.', secim: [
            { m: '“Fransızcayı sizden iyi bilen, sizi anlamamış olabilir.”', etki: { suha: 8 }, bayrak: { p2_sofra: 'atisma' }, iz: 'Süha Bey\'le sofrada, herkesin önünde atıştın.', adimlar: [
              ['f', 'Fransızcayı sizden iyi bilen hanım, sizi anlamamış olabilir Süha Bey.', 'tebessum'],
              /* GPT T26 Süha (B2 diyalog 2): kendi tehlikesini ilan etmek yerine durumu ona geri verir ("Bana bakan yanar" sofada kalır) */
              ['suha', 'Anlamış olabilir. Sofrada söylemez, terbiyelidir.', 'alayci'],
              ['ic', 'Anladım. Başımı kaldırmadan ekmeğimi böldüm.', 'dusunceli'],
            ] },
            /* GPT T29 (B2-D2): espri açıklanmaz; Süha karşı hamleyle cevap verir, iz olguyu söyler */
            { m: '“Dayı bey evlenirse ben de bir yenge kazanırım.”', kosul: (S) => S.bayrak.p2_hitap !== 'bey', etki: { suha: 3 }, bayrak: { p2_sofra: 'yenge' }, iz: 'Sofrada “dayı” hitabını bile bile korudun.', adimlar: [
              ['f', 'Dayı bey evlenirse ben de bir yenge kazanırım.', 'tebessum'],
              ['suha', 'Yenge mi? Kimi yanıma yakıştırdığınızı da söyleyin.', 'alayci'],
              'Bardağını yalnız bana doğru kaldırdı.',
            ] },
            { m: '“Süha Bey\'e kibar bir hanım dileriz.”', kosul: (S) => S.bayrak.p2_hitap === 'bey', etki: { suha: 5 }, bayrak: { p2_sofra: 'yenge' }, iz: 'Süha Bey\'e sofrada “Süha Bey” dedin, herkes duydu.', adimlar: [
              ['f', 'Süha Bey\'e kibar bir hanım dileriz.', 'kararli'],
              ['suha', '“Süha Bey.” Dayılıktan ne zaman azledildim?', 'alayci'],
              ['f', 'Bu akşam.', 'tebessum'],
            ] },
            /* Tur 27 (B2 oynanış 1): Süha'yı geri çeviren seçenek; Süha'ya puan yok, reddedilmekten hoşlanması satırda
               görünür (gönül kuralı). Tur 28 (GPT O2; kural 2): açık ret her dalda erişilebilir (kosul kalktı); açık sınır
               bayrağı p2_suha_sinir piyano, gerdanlık iç sesi, "Onun gözünden" ve defterde okunur. */
            /* Tur 29 (B2 diyalog 2): ret cümlesi teklif gibi okunmaz */
            { m: '“Benim sözüm verildi. Kibar hanımı başka sofrada arayın.”', etki: { baba_guven: 1 }, bayrak: { p2_sofra: 'soz', p2_soz_haberi: true, p2_suha_sinir: true }, iz: 'Sofrada sözlü olduğunu söyledin. Süha Bey gülümsedi ama bardağını indirdi.', adimlar: [
              ['f', 'Benim sözüm verildi Süha Bey. Kibar hanımı başka sofrada arayın.', 'kararli'],
              ['suha', 'Duydum Feride Hanım. Sofrada bir daha söylemenize gerek yok.', 'soguk'],
              'Bardağını indirdi. Babam ekmeğini yavaşça bitirdi.',
            ] },
            { m: 'Sus. Babanın bardağını doldur.', etki: { suha: 2 }, bayrak: { p2_sofra: 'sustu' }, iz: 'Cevap vermedin, babanın bardağını doldurdun.', adimlar: [
              'Babamın bardağını doldurdum. Süha Bey\'in bakışı ellerime düştü, kalktı.',
              ['calibe', 'Feride ne hamarat.', 'sinsi'],
              ['ic', 'Hamarat dedi. Süha Bey\'e tek kelime etmedim, bunu o da anladı.', 'tebessum'],
            ] },
          ] },

          /* --- Remzi dedikodusu: parası değil, kendine gülmesi --- */
          ['an', 'Nabi Bey kulüpten bir dedikodu getirmişti. Ablası ayıplar gibi dinledi ama tek kelimesini kaçırmadı.'],
          ['nabi', 'Kapıdaki yaldızlı kupayı soran olursa: Tüccar Rıfkı\'nın oğlu Remzi\'ninmiş. Babası Galata\'nın yarısını alır.', 'gulumser'],
          /* Oynanış T1: 1. bölümde kapıdaki son karar (p1_remzi_ad) kulüp dedikodusuna girer */
          { eger: (S) => S.bayrak.p1_remzi_ad === 'sozlu', ise: [
            ['nabi', 'Kızın biri kapıda “Sözlüyüm” demiş. Remzi buna da gülmüş.', 'gulumser'],
          ], degilse: [{ eger: (S) => S.bayrak.p1_remzi_ad === 'perde', ise: [
            ['nabi', 'Bir de perde yüzüne inmiş. “Ardını merak ettim” diyormuş.', 'mahcup'],
          ], degilse: [{ eger: (S) => S.bayrak.p1_remzi_ad === 'yol', ise: [
            /* Tur 28 (B1 diyalog 7): 1. bölümün üçüncü cevabı */
            ['nabi', 'Kızın biri kapıda “Yolunu kestiğiniz arabanın kızı” demiş. Remzi ezberlemiş.', 'gulumser'],
          ] }] }] },
          ['ic', 'Kendine gülebiliyor. Bizim sofrada kimse kendine gülmez.', 'tebessum'],
          /* GPT T25 Kenan (B2 sürük 2): Remzi haberi Perihan'ın somut hamlesi; onu Feride'nin cevabı durdurur */
          /* Tur 27 (B1 oynanış 10'a): arabada Remzi'nin annesini soran Feride'nin sorusu Perihan'ı bir an susturmuştu */
          { eger: (S) => S.bayrak.p_defter === 'remzi', ise: [
            ['nabi', 'Annesi de oğluna kız arıyormuş. Abla, sen bugün tanışmadın mı?', 'ana'],
            ['calibe', 'Tanıştım. Feride de tanıdı, arabada sordu.', 'soguk'],
          ] },
          { muzik: 'gerilim' }, // Tur 27 (B2 ses 5): Perihan'ın açık hamlesi
          ['calibe', 'Annesi de bugün Feride\'yi pek beğendi efendi. Bir kahveye çağırsak ayıp olmaz.', 'sinsi'],
          { soru: 'Perihan Hanım\'ın yelpazesi yavaşladı, babam bana bakıyor.', secim: [
            /* Oynanış T1 (B3): Remzi için eksi; 3. bölümde Remzi bunu "bana da hatırlatmış oldunuz" diye anar */
            { m: '“Babacığım, ben sözlüyüm.”', etki: { baba_guven: 2 }, bayrak: { p2_remzi_haber_bekliyor: true, p2_remzi: 'uzak' }, iz: 'Babana sözlü olduğunu hatırlattın. Kahve lafı kapandı.', adimlar: [
              ['f', 'Babacığım, ben sözlüyüm. Bunu herkes biliyor.', 'kararli'],
              ['sai', 'Elbette kızım, Münevver Hanım\'ın gelinisin. Kahve olmaz hanım.', 'ciddi'],
              ['an', 'Perihan Hanım\'ın yelpazesi durdu. Kahve lafı o akşam bir daha açılmadı.'],
            ] },
            /* Tur 27 (B2 oynanış 3): kendine gülen adamı laflayarak yenmek 1. bölümdeki gibi Remzi'de iz bırakır */
            { m: '“Annesi beni beğenmiş, oğlu yolu. İkisi de alamadı.”', etki: { itibar: -1 }, bayrak: { p2_remzi_haber_bekliyor: true, p2_remzi: 'duello' }, iz: 'Remzi Bey\'e sofradan bir laf yolladın. Nabi Bey bunu götürecek.', adimlar: [
              ['f', 'Annesi beni beğenmiş, oğlu yolu. İkisi de alamadı.', 'tebessum'],
              ['nabi', 'Bunu Remzi\'ye söylemeli! Çatlar.', 'gulumser'],
              ['calibe', 'Feride, sofrada laf yarıştırılmaz.', 'soguk'],
              ['sai', 'Kahveyi de bırak hanım. Kızın cevabını verdi.', 'gulumser'],
            ] },
            { m: '“Kendine gülebilen adam az bulunur.”', bayrak: { p2_remzi_haber_bekliyor: true, p2_remzi: 'ilgi' }, adimlar: [
              ['f', 'Kendine gülebilen adam az bulunur.', 'tebessum'],
              ['calibe', 'Duydunuz mu efendi? Kızımız beğendi.', 'sinsi'],
              ['ic', 'Babamın önünde fincanıma biraz daha kahve koydu.', 'endiseli'],
            ] },
            /* Oynanış T1 (B1): kozsuz oyuncu kilitli görür; sofrada koz zaten kullanıldıysa gizli kalır (motor.secenekDurumu) */
            /* GPT T26 Süha (B2 oynanış 3, öncelik 1): bilgi/koz ayrımı. Gizlilik üstünlüğüne dayanan ima yalnız koz sahibine;
               kozunu harcamış ya da Hatice'yi orada adıyla çağırmış oyuncu (bilgisi var, sırrı yok) kilit görmez,
               bildiğini açıkça söyleyen zayıf seçeneği alır: kahve lafı kapanır ama itibar düşer, kimse korkmaz. */
            { m: '“Nabi Bey Remzi Bey\'i bıraksın, arka kapıyı anlatsın.”', kosul: (S) => !kozVar(S) && (yandi(S) || S.bayrak.p_reftar === 'seslendi'), etki: { itibar: -2, calibe_suphe: 1 }, bayrak: { p2_koz_sofra: 'nabi' }, iz: 'Arka kapıyı sofrada açıkça andın. Bildiğin artık gizli değil.', adimlar: [
              ['f', 'Nabi Bey Remzi Bey\'i bıraksın da bizim bahçenin arka kapısını anlatsın.', 'kararli'],
              ['nabi', 'Ne kapısı? Abla, kızın dili uzamış.', 'ofkeli'],
              ['calibe', 'Sofrada hizmetçi kapısı konuşulmaz kızım. Kahveyi de sonra düşünürüz.', 'soguk'],
              ['ic', 'Kahve lafı kapandı. Ama bildiğimi artık herkes duydu.', 'endiseli'],
            ] },
            { m: '“Nabi Bey evlenince arka kapıyı kim kilitleyecek?”', kozGerek: KOZ, kilitGoster: (S) => !yandi(S) && S.bayrak.p_reftar !== 'seslendi', kosul: (S) => kozVar(S) && !S.bayrak.p2_koz_sofra, bayrak: { p2_koz_sofra: 'nabi' }, iz: 'Nabi Bey\'e arka kapıyı hatırlattın, kozun hâlâ sende.', adimlar: [
              ['f', 'Nabi Bey evlenince bahçenin arka kapısını kim kilitleyecek?', 'tebessum'],
              'Nabi Bey\'in kaşığı tabağa çarptı.',
              ['nabi', 'Ne kapısı? …Remzi\'yi bırakalım, sıkıcı adam.', 'ofkeli'], // Tur 32 (B2 görsel 4): korkmus uykulu yüze düşüyordu
              ['ic', 'Bildiğimi bir an gösterdim, sonra yine sakladım.', 'tebessum'],
            ] },
          ] },
          { muzik: null },
          { vakit: VAKIT_KAHVE }, { gorev: 2 },
        ],
      },

      /* ---------------- 3. Salon: Nazlı ve mürekkep ---------------- */
      {
        /* Anlatı denetimi T1 (mercek_tanitim T6, Y2): Nazlı olay başında değil, girdiği satırda görünür */
        id: 'p2_mefharet', mekan: 'buyuk_salon', tetik: 'giris', kosul: (S) => S.gorev === 2, sahne: ['calibe', 'sai', 'sefik'],
        adimlar: [
          /* Tur 27 (B2 anlatı 1, 4, 10'a): Şefik'in tanıtımı açılıştan buraya; Süha Bey salonda pencerenin önünde
             (piyanodaki "Gördüm" ve "pencereden ayrıldı" satırları tutarlı olsun) */
          { ara: { mekan: 'buyuk_salon', yer: 'Büyük salon · kahve', satirlar: [
            /* Tur 30 (ritim, ara sayfa dahil 15 → 14): iki satır bire indi */
            'Kahveler büyük salona getirildi. Süha Bey fincanını alıp pencerenin önüne geçti, oradan bütün yüzleri görebiliyordu.', // Tur 28 (B2 anlatı 6)
          ] } },
          ['an', 'Şefik halıda resim yapıyordu. Yukarıdan Nazlı’nın sesi geldi.'],
          { goster: ['suha', 'notr'] },
          /* Sahne içi keşif (isteğe bağlı): Şefik'in resmine bakmak. Seçenek düğmesi değil; hiçbir seçimin
             sonucunu değiştirmez, yalnız p2_k_resim bırakır. Nokta sahne sonuna kadar kalır (motor.kesifGoster);
             mürekkepten sonra bakılırsa resim lekelidir (p2_leke). */
          { kesif: { x: 54, y: 61, w: 14, h: 11, ad: 'Şefik\'in resmi', adimlar: [
            { eger: (S) => !S.bayrak.p2_leke, ise: [
              'Eğildim. Şefik konağı çizmiş, bütün pencereleri açık.',
              ['sefik', 'Bu senin pencerin abla. Kafesini çizmedim.', 'tebessum'],
            ], degilse: [
              'Eğildim. Lekenin kenarında Şefik\'in konağı var, bütün pencereleri açık.',
              ['sefik', 'Bu senin pencerin abla. Kafesini çizmedim.', 'aglamakli'],
            ] },
            ['ic', 'Bu evde kafessiz tek pencere onun kâğıdında.', 'tebessum'],
            { bayrak: { p2_k_resim: true } },
          ] } },
          /* GPT T24b Süha (B2-1): keşif dönüşünde motor aynı satırı geri koyar; giriş satırları
             "girdi" yerine durum anlatır, böylece Nazlı salona ikinci kez giriyor gibi okunmaz */
          { eger: (S) => S.bayrak.p2_v_oda === 'kilit', ise: [
            ['an', 'Nazlı merdivenden eli boş, yüzü asık inmişti. Kilitli çekmece ona göre değildi.'],
            { goster: ['mefharet'] },
          ] },
          { eger: (S) => nesne(S) === 'pusula', ise: [
            ['an', 'Nazlı salona koşarak girmişti. Elinde katlı bir kâğıt sallıyordu.'],
            { goster: ['mefharet'] },
            { goster: ['mukaddem_not', 'ana'] },
            ['mefharet', 'Ablamın yastığının altından buldum! Altında K yazıyor!', 'sevincli'], // Tur 32 (B2 görsel 3): zafer
          ], degilse: [{ eger: (S) => nesne(S) === 'yasemin', ise: [
            ['an', 'Nazlı salona koşarak girmişti. İki parmağının arasında kuru bir çiçek tutuyordu.'],
            { goster: ['mefharet'] },
            ['mefharet', 'Ablamın defterinden düştü! Kim verdi abla?', 'sevincli'],
          ], degilse: [{ eger: (S) => nesne(S) === 'kutu', ise: [
            ['an', 'Nazlı salona elini arkasında saklayarak girmişti. Parmaklarının arasından menekşeli bir kapak görünüyordu.'],
            { goster: ['mefharet'] },
            { goster: ['seker_kutusu', 'ana'] },
            /* Tur 28 (B2 diyalog 2): reddedilip eve gelen kutu masadaydı; yenen şekerin bedeli */
            { eger: (S) => S.bayrak.p2_kutu === 'yedi', ise: [
              ['mefharet', 'Ablamın masasından aldım! Süha dayının kutusu, biri yemiş bile!', 'sevincli'],
            ], degilse: [
              ['mefharet', 'Ablamın çekmecesinden aldım! Süha dayının kutusu!', 'sevincli'],
            ] },
          ], degilse: [{ eger: (S) => nesne(S) === 'sefik_kutu', ise: [
            ['sefik', 'Süha dayının şekerinden yedim! Ablama vermiş, ablam bana verdi.', 'sevincli'],
            { goster: ['mefharet'] },
            ['mefharet', 'Bana niye vermedin?', 'somurtkan'],
          ], degilse: [{ eger: muk, ise: [
            { goster: ['mefharet'] },
            /* Tur 27 (B2 diyalog 10'a): Nazlı'nın "Annem dedi ki…" imzası Kenan dalında da */
            /* Tur 28 (B2 sürük 2): pusulaya yazan kızın elinde bir iz kalır; dönüş Kenan yolunda da yaşanır */
            { eger: (S) => S.bayrak.p2_pusula === 'yazdi', ise: [
              ['mefharet', 'Ablamın parmağı mürekkep! Annem dedi ki kâhyaya bir kitap verdi, içinde kâğıt vardı!', 'sevincli'],
              ['calibe', 'Mürekkep mi? Kâhya bu akşam kime yazı götürdü, değil mi kızım?', 'sinsi'],
              ['ic', 'Parmağımı eteğimin kıvrımına sakladım. Geç kaldım, gördü.', 'endiseli'],
            ], degilse: [
              /* Tur 33 (B2 diyalog 10'a): bir ihbar Nazlı'nın kendi merakından */
              ['mefharet', 'Kâğıt hışırdadı, ben duydum! Ablam kâhyaya bir kitap verdi, içinde kâğıt vardı!', 'sevincli'],
              ['calibe', 'Kâhya kitapla geldi, kitapla gitti. Kitap okuyan kâhya görmedim.', 'sinsi'],
            ] },
          ], degilse: [
            { goster: ['mefharet'] },
            ['mefharet', 'Annem dedi ki Süha dayı ablamla limonlukta yalnız kalmış!', 'sevincli'],
            ['calibe', 'Nazlı! Büyüklerin sözünü ortaya taşıma kızım, ayıptır.', 'soguk'], // Tur 33: misafir önünde yapmacık azar, öfke değil
            ['ic', 'Ayıp dedi. Ama kızının ağzından çıkanı geri almadı.', 'kararli'],
          ] }] }] }] }] },
          { bayrak: { p2_leke: true } },
          'Nazlı yanımdan geçerken örgüme asıldı, başım yandı.',
          { goster: ['murekkep_resim', 'ana'] },
          { efekt: 'hokka' }, // Tur 28: hokka devrilir (cam tıkırtısı, yuvarlanma, mürekkep)
          ['an', 'Nazlı\'nın kolu hokkaya çarpmıştı. Mürekkep Şefik\'in resmine yayılırken Perihan Hanım kızına tek söz etmedi.'],
          { soru: 'Herkes bana bakıyor.', secim: [
            { m: 'Önce Şefik\'in resmi. Mürekkebi kurut.', etki: { sefik: 1 }, bayrak: { p2_mefharet: 'sefik' }, iz: 'Herkes sana bakarken sen kardeşini korudun.', adimlar: [
              'Mendilimi resme bastırdım. Leke durmadı ama Şefik ağlamayı bıraktı.',
              { eger: elde, ise: [
                ['calibe', 'Bunu ben saklarım kızım. Küçüklerin eline geçmesin.', 'sinsi'],
                ['ic', 'Perihan Hanım onu Nazlı\'nın elinden aldı, benim olanı kendi cebine koydu.', 'ofkeli'],
                { bayrak: { p2_nesne_calibede: true } },
              ] },
            ] },
            { m: '“O benim. Ver.”', kosul: (S) => elde(S) && muk(S), bayrak: { p2_mefharet: 'aldi' }, adimlar: [
              ['f', 'O benim. Ver.', 'kararli'],
              'Sesimi yükseltmedim. Nazlı verdi.',
              ['calibe', 'Kızım, küçüğe öyle bakılmaz.', 'soguk'],
              /* Tur 27 (B2 diyalog 10'a): Sait'in hükümleri tek tip kalmasın; ölmüş karısına dokunan yumuşama */
              ['sai', 'Bırak hanım. Behiye\'nin kızı malını tanır.', 'mahzun'],
            ] },
            { m: '“O benim. Ver.”', kosul: (S) => elde(S) && !muk(S), etki: { suha: 3 }, bayrak: { p2_mefharet: 'aldi' }, adimlar: [
              ['f', 'O benim. Ver.', 'kararli'],
              'Sesimi yükseltmedim. Nazlı verdi.',
              ['calibe', 'Süha\'nın kutusu senin mi oldu kızım?', 'soguk'],
              ['f', 'Verilen şey kimdeyse onundur efendim.', 'kararli'],
            ] },
            { m: '“Yeter Nazlı. Şefik\'in resmine bak.”', kosul: (S) => !elde(S), etki: { itibar: 2 }, bayrak: { p2_mefharet: 'aldi' }, adimlar: [
              ['f', 'Yeter Nazlı. Şefik\'in resmine bak.', 'ofkeli'],
              ['sai', 'Nazlı, ablandan özür dile.', 'ciddi'],
              'Özür dilemedi. Ama sustu.',
            ] },
            { m: 'Babana dön: “Saçımı çekti, resmi bozdu.”', etki: { baba_guven: 3, calibe_suphe: 1 }, bayrak: { p2_mefharet: 'babaya' }, iz: 'Nazlı\'yı babana söyledin. Odasına yollandı.', adimlar: [
              ['f', 'Babacığım, Nazlı saçımı çekti. Şefik\'in resmi de gitti.', 'mahzun'],
              ['sai', 'Nazlı, odana!', 'ofkeli'],
              ['calibe', 'Çocuktur efendim…', 'sinsi'], // Tur 32 (B2 görsel 2): kızını savunan yalvarma, öfke değil
              { eger: elde, ise: [
                'Telaşta kimse yere düşene bakmadı. Ben aldım.',
              ] },
            ] },
          ] },
          { gizle: 'mukaddem_not' }, { gizle: 'seker_kutusu' }, { gizle: 'murekkep_resim' }, { gizle: 'mefharet' }, { gizle: 'suha' },
          { gorev: 3 },
        ],
      },

      /* ---------------- 4. Piyano ---------------- */
      {
        id: 'p2_piyano', mekan: 'buyuk_salon', tetik: 'giris', kosul: (S) => S.gorev === 3, sahne: ['sai', 'calibe', 'sefik'],
        adimlar: [
          { muzik: 'ev' }, // Tur 28 (B2 ses 1): tuşa basılmadan piyano duyulmaz; ilk piyano sesi Feride'nin tuşu
          ['an', 'Kahveden sonra Sait Efendi piyanoya baktı. Behiye Hanım öldüğünden beri o piyanoyu hep Feride çalmıştı.'],
          /* Gezinme bedeli: kahveden önce mabeyn kapısında görüldüyse (Nabi → Perihan → babam) */
          { eger: (S) => S.bayrak.p2_mabeyn === 'goruldu', ise: [
            ['calibe', 'Efendi, Nabi bu akşam Feride\'yi mabeyn kapısında görmüş.', 'sinsi'],
            ['sai', 'Kızım, selamlık kapısı senin kapın değil. Bir daha duymayayım.', 'ciddi'],
          ] },
          ['sai', 'Feride, kızım. Bir şey çal da ev yatışsın.', 'notr'],
          { goster: ['piyano', 'ana'] },
          /* Tur 27 (B2 ses 2; GPT SE3): Feride tuşa basmadan müzik susar; seçilen parça seste ayrışır
             (piyano_anne/_vals/_romans üretilene dek huzun / vals / piyano) */
          { muzik: 'sessiz' },
          { efekt: 'piyano_tus' },
          { soru: 'İlk notayı kime duyurayım?', secim: [
            { m: 'Babama annemin şarkısını çal.', etki: { baba_guven: 3, calibe_suphe: 1 }, bayrak: { p2_piyano: 'anne' }, iz: 'Annenin şarkısını yıllar sonra o salonda sen çaldın.', adimlar: [
              { muzik: 'huzun' },
              'İlk notada babam başını eğdi.',
              /* GPT T23 (Kenan 2b-2): sofrada sahiplenilen söz ile annenin şarkısı bağlanır */
              { eger: (S) => S.bayrak.p2_remzi === 'uzak', ise: [
                ['sai', 'Annen de sözlendiği akşam bunu çalmıştı.', 'mahzun'],
              ] },
              ['calibe', 'Bu şarkı bu salonda yıllardır çalınmazdı.', 'soguk'],
            ] },
            { m: 'Şefik için valse başla.', etki: { sefik: 1 }, bayrak: { p2_piyano: 'vals' }, adimlar: [
              { muzik: 'vals' },
              { eger: (S) => S.bayrak.p2_mefharet === 'babaya', ise: [
                'Şefik kalktı, halıda tek başına döndü. Yukarıda Nazlı\'nın kapısı kapalı kaldı.',
              ], degilse: [
                'Şefik kalktı, Nazlı\'yı da çağırdı. İkisi halıda döndü, mürekkep unutuldu.',
              ] },
            ] },
            { m: 'Penceredeki hekime bir romans çal.', etki: { suha: 4 }, bayrak: { p2_piyano: 'romans' }, adimlar: [
              { muzik: 'piyano' },
              'İkinci cümlede Süha Bey pencereden ayrıldı.', // Tur 28 (GPT B2 SE1): sözsüz icra
              ['ic', 'Sözlerini biliyor. Dudakları kıpırdadı, sesi çıkmadı.', 'saskin'],
            ] },
          ] },
          ['an', 'Süha Bey piyanonun öbür ucuna geldi. Eli notanın üstünde durdu.'],
          { goster: ['suha', 'notr'] },
          /* GPT T23 (Süha 2b-3): Süha, Feride'nin önce kardeşini koruduğunu görmüştür */
          { eger: (S) => S.bayrak.p2_mefharet === 'sefik', ise: [
            ['suha', 'Mürekkep dökülünce herkes size baktı, siz de kardeşinize. Gördüm.', 'endiseli'],
          ] },
          ['suha', 'Sayfaları ben çevireyim mi? İzin verirseniz.', 'notr'],
          'Sayfanın köşesi kalktı.',
          /* Tur 28 (GPT B2 O2): sofrada konan açık sınır sonraki iç seste okunur */
          { eger: (S) => !!S.bayrak.p2_suha_sinir, ise: [
            /* Tur 30 (B2 diyalog 2): sınır iç sesi seçimi önceden bağlamaz ("Buyurun" da seçilebilir; karar oyuncunun) */
            ['ic', 'Sayfalarımın başında hâlâ o bekliyor.', 'endiseli'],
          ], degilse: [{ eger: sinir, ise: [
            /* Tur 28b (kök 1–2): limonlukta ya da Nimet'e konan sınır da piyanoda geçerli */
            ['ic', 'Sayfa çevirmek için bile izin istiyor.', 'kararli'],
          ], degilse: [{ eger: (S) => S.bayrak.p2_v_sofa === 'oksurdu', ise: [
            ['ic', '“Bana bakan yanar” demişti. Şimdi sayfamı çevirmek istiyor.', 'endiseli'],
          ], degilse: [{ eger: (S) => !!S.bayrak.p2_k_kapak, ise: [
            /* GPT T26 Süha (B2 oynanış 10'a-3): keşifle açılan cevabın işareti */
            ['ic', 'Kutunun kapağındaki satır aklımda: “Bakmayan kıza.”', 'endiseli'],
          ] }] }] }] },
          { soru: 'Notaya elini uzatmadı, bekliyor.', secim: [
            { m: '“Buyurun.”', etki: { suha: 6 }, bayrak: { p2_sayfa: 'suha' }, adimlar: [
              'Sayfayı tam gerektiği yerde çevirdi. Eli benimkine yaklaşmadı.',
              /* Diyalog T1 (D8): değmeyen el anlatıda kalmasın; Süha alt metni kendi ağzıyla, tehlikeli söyler */
              ['suha', 'Hep bir sayfa önünüzdeyim Feride Hanım. Alışın.', 'soguk'],
              /* Tur 27 (GPT B2 D 10'a-1): tehdit iç sesle açıklanmaz; Feride'nin cevabı hareket */
              'Bir sonraki sayfayı parmağımla tuttum. Bu kez o beklesin.',
              ['calibe', 'Süha, kızımın sayfalarını ne güzel çeviriyorsun.', 'soguk'],
            ] },
            { m: '“Ezbere çalarım, teşekkür ederim.”', etki: { suha: 4, vakar: 1 }, bayrak: { p2_sayfa: 'ezber' }, adimlar: [
              ['f', 'Ezbere çalarım, teşekkür ederim.', 'kararli'],
              /* Tur 27b: Süha'nın bölümdeki tek içten gülüşü; reddedilmekten gerçekten hoşlanır (gönül kuralı) */
              ['suha', 'Ezber. Öyleyse yalnız dinlerim, bu daha zor.', 'gulumser'],
              'Pencereye döndü. Camdaki yüzü gülüyordu.',
            ] },
            /* Tur 30 (B2 oynanış 3): hazırlığa bağlı ek ret; önceki sınırını (limonluk, sofra ya da Nimet) piyanoda da
               söyler. Açık ret ("Ezbere çalarım") koşulsuz kalır. p2_suha_sinir yazılmaz (o sofradaki cümledir). */
            { m: '“Sözüm verildi Süha Bey. Sayfalarım da benim.”', kosul: sinir, etki: { suha: 3, vakar: 1 }, bayrak: { p2_sayfa: 'ezber', p2_sayfa_sinir: true }, iz: 'Verdiğin sınırı piyanoda da söyledin. Sayfalarını kimseye bırakmadın.', adimlar: [
              ['f', 'Sözüm verildi Süha Bey. Sayfalarım da benim.', 'kararli'],
              ['suha', 'Sayfalar sizin. Dinlemek için izin gerekmez.', 'soguk'],
              'Ezbere çaldım. Bir notayı bile kaçırmadım, o da kaçırmadı.',
            ] },
            { m: '“Şefik çevirsin.”', etki: { sefik: 1 }, bayrak: { p2_sayfa: 'sefik' }, adimlar: [
              'Şefik her sayfayı erken çevirdi. Üçüncüde babam güldü, Süha Bey de güldü.',
              ['suha', 'Kardeşiniz acele ediyor. Ben etmem.', 'alayci'],
            ] },
            /* Oynanış T1 (B5): odadaki kutu keşfiyle açılır (p2_k_kapak); Feride okuduğunu onun yüzüne söyler */
            /* GPT T26 Süha (B2 oynanış 4): meydan okuma örtük izne dönmesin; izin ve sınır seçeneğin içinde */
            { m: '“Kapağa yazdığınız kız için mi? Çevirin, ama yalnız sayfaları.”', kosul: (S) => !!S.bayrak.p2_k_kapak, etki: { suha: 7 }, bayrak: { p2_sayfa: 'suha', p2_kapak_soru: true }, iz: 'Kapaktaki satırı Süha Bey\'in yüzüne okudun. İzni de sınırı da sen koydun.', adimlar: [
              ['f', 'Kapağa yazdığınız kız için mi çevireceksiniz Süha Bey? Çevirin, ama yalnız sayfaları.', 'kararli'],
              ['suha', 'Okudunuz demek. Peki, yalnız sayfaları.', 'alayci'],
              'Sayfayı tam gerektiği yerde çevirdi. Eli benimkine yaklaşmadı.',
            ] },
          ] },
          { eger: muk, ise: [
            /* GPT T29 (B2-S2): pusulanın Perihan'a geçmesinin bedeli piyanoda sürer */
            { eger: (S) => !!S.bayrak.p2_nesne_calibede, ise: [
              { efekt: 'piyano_yanlis' },
              ['ic', 'Perihan Hanım\'ın cebindekine bakmamak için notaya baktım. Bir yerde şaştım, Süha Bey duydu.', 'endiseli'],
            ], degilse: [{ eger: (S) => !!S.bayrak.p2_sayfa_sinir, ise: [
              /* Tur 30 (GPT B2 A3): sınır dalında kusursuz icra sonradan hataya çevrilmez */
              ['ic', 'Pusula aklımdaydı. Yine de son notayı kendi bildiğim gibi bitirdim.', 'kararli'],
            ], degilse: [
              { efekt: 'piyano_yanlis' },
              ['ic', 'Bir notada şaştım; Süha Bey fark etti.', 'endiseli'],
            ] }] },
          ], degilse: [
            /* Tur 27 (B2 oynanış 5; GPT O3): resimde Süha sayfa çeviriyor; yalnız izin verilen dalda açılır */
            /* Yardımı geri çeviren cezalandırılmaz: kendi anı (an_piyano_pencere; resmi gelince açılır) */
            /* Tur 30 (GPT B2 G2): an_piyano_pencere'de sayfayı Şefik çeviriyor; yalnız Şefik dalında. Ezber (ve sınır)
               dalının kendi anı an_piyano_ezber (üretimde; gelene dek adım sessizce atlanır, yanlış resim gösterilmez) */
            { eger: (S) => S.bayrak.p2_sayfa === 'suha', ise: [{ cizim: 'an_piyano' }], degilse: [
              { eger: (S) => S.bayrak.p2_sayfa === 'sefik', ise: [{ cizim: 'an_piyano_pencere' }], degilse: [{ cizim: 'an_piyano_ezber' }] },
            ] },
            /* Tur 27 (B2 sürük 4): Süha yolunda engel görünür; Perihan'ın somut hamlesi (3. bölümde Süha törende
               pencerenin önünde, kimseye yakın durmaz) */
            ['calibe', 'Süha, gerdanlık günü kızın yanında durmayacaksın. Misafirler yanlış anlar.', 'sinsi'],
            ['ic', 'Gerdanlık günü yanımda kimin duracağına da o karar vermek istiyor.', 'mahzun'],
          ] },
          { muzik: null },
          ['calibe', 'Geç oldu. Herkes odasına.', 'soguk'],
          { gizle: 'piyano' },
          { ara: { mekan: 'fazila_oda', yer: 'Aynı gece · Feride\'nin odası', satirlar: [
            /* Tur 30 (GPT B2 S2; ritim, ara sayfa dahil 15 → 13): "Lambalar … söndürülürdü" satırı çıktı */
            /* GPT T23 (Kenan 2a): akşamın dağınık olayları Feride'nin koruduğu şeyde toplanır.
               Anlatı T2 (b1_2_3 #11): Süha yolunda akşamın son anı piyano; "bakmama" motifi dördüncü kez dönmez */
            /* GPT T26 Süha (B2 sürük 2, 10'a-1): piyanoda yaşanan etki yeniden açıklanmaz; ödülün hemen ardından
               Perihan'ın karşı hamlesi görünür (gece kapıdaki mumuna bağlanır) */
            (S) => (!muk(S)
              ? (S.bayrak.p2_sayfa === 'suha'
                ? 'Feride merdivende ardına baktı: Perihan Hanım, Süha Bey\'in kulağına bir şey daha söylüyordu.'
                : 'Feride merdivende ardına baktı: Süha Bey piyanonun kapağını kapatıyor, Perihan Hanım onu seyrediyordu.')
              : (S.bayrak.p2_pusula === 'sustu'
                ? 'Feride\'nin aklı kâhyanın götürdüğü kitaptaydı. Cevap yazmamıştı. Susmasını Kenan nasıl okuyacaktı?'
                /* Tur 30 (GPT B2 A4): yasemini kendinde tutan kızın yolladığı boş sayfadır */
                : S.bayrak.p2_pusula === 'aldi'
                ? 'Feride yasemini kendinde tutmuş, boş sayfayı geri yollamıştı. Kenan\'ın onu nasıl okuyacağını bilmiyordu.'
                /* GPT T25 Kenan (B2 anlatı 3): sessizliği Kenan bozdu; Feride cevap verdi */
                : 'Bir yıllık sessizliği Kenan bozmuştu. Feride\'nin cevabı şimdi kâhyanın koynunda, Kenan\'a gidiyordu.'))
              /* Doğrulama gece (B2 #11, 13 satır): son satır öncekine katıldı */
              + ' Az sonra Nimet kapıyı çaldı.',
          ] } },
          { gorev: 4 },
        ],
      },

      /* ---------------- 5. Gece: Nimet'in dedikodusu, gerdanlık ve onun gözünden ---------------- */
      {
        id: 'p2_nimet', mekan: 'fazila_oda', tetik: 'giris', kosul: (S) => S.gorev === 4, sahne: ['mehves'],
        adimlar: [
          /* Tur 27b: faksam setinin ifade resimleri bağlandı; geçici şal önlemi (p2_sal) kaldırıldı. Yüz artık
             satırın ifadesiyle değişir. Bölüm sonundaki temizlik adımı eski kayıtlar için kalır. */
          /* Tur 28 (B2 görsel 4; GPT G3): koridor resminde örgü düzgün; Nimet çözmez, ucunu düzeltir */
          'Nimet örgümün ucunu düzeltiyor. Parmakları bu akşam aceleci.',
          /* Tur 28 (B1 oynanış 2): gelinin korkusunu soran kızın 1. bölümdeki seçimi (p_gelin) burada karşılanır */
          { eger: (S) => S.bayrak.p_gelin === 'sordu', ise: [
            ['mehves', 'Arabacı söyledi, düğün evinin gelini çıkarken sizi sormuş. “Korkumu bir o sordu” demiş.', 'ana'],
          ] },
          /* Tur 27 (B2 sürük 10'a): kilitli kapı dalında dönüş yaşanmasa da Perihan'ın eli sezilir (gece mumuna bağlanır) */
          { eger: (S) => S.bayrak.p2_v_oda === 'kilit', ise: [
            ['ic', 'Kilidin üstünde taze bir mum damlası. Nazlı mum taşımaz.', 'endiseli'],
          ] },
          ['mehves', 'Mutfakta bir laf var. Hatice\'nin parmağında yüzük, “annemden kaldı” diyor.', 'notr'],
          ['mehves', 'Annesinden mi? Yıllardır aynı mutfaktayız, o yüzüğü hiç görmedim.', 'endiseli'],
          { eger: (S) => kozVar(S), ise: [
            ['ic', 'Ben o yüzüğü Nimet\'ten önce gördüm. Çeşmenin ardında, Nabi Bey\'in avucundan çıkarken.', 'dusunceli'],
            { soru: 'Nimet bunu bilmiyor.', secim: [
              { m: 'Sakla. Zamanı gelsin.', etki: { vakar: 1 }, bayrak: { p2_koz: 'sakla' }, iz: 'Kozunu sakladın, değeri sende büyüyor.', adimlar: [
                ['ic', 'Şimdi söylersem Hatice inkâr eder. Önce arka kapıda kimi beklediğini öğrenmeliyim.', 'endiseli'],
              ] },
              /* Oynanış T1 (B1): kozu kullanan üç seçenek ◆ rozetiyle görünür (bu dalda koz hep elde) */
              { m: 'Nimet\'e anlat: arka kapıyı, yüzüğü.', kozGerek: KOZ, etki: { mehves: 2 }, bayrak: { p2_koz: 'nimet' }, iz: 'Sırrını Nimet\'le paylaştın. Bu gece arka kapıya o bakacak.', adimlar: [
                ['mehves', 'Bu gece arka kapıya ben bakarım. Kim açarsa görürüm.', 'kararli'],
                ['ic', 'Artık bunu iki kişi biliyoruz. Öbürü benim Nimet\'im.', 'tebessum'],
              ] },
              { m: 'Hatice\'yi çağırt. Yüzüğünü beğen.', kozGerek: KOZ, etki: { calibe_suphe: 1 }, bayrak: { p2_koz: 'reftar' }, iz: 'Hatice artık senin bildiğini biliyor.', adimlar: [
                ['an', 'Nimet\'in ardından gelen Hatice, yüzüğünü kapının eşiğinde avucuna çevirdi.'],
                { goster: ['reftar', 'korkmus'] },
                ['f', 'Yüzüğün güzelmiş Hatice. Arka kapı rüzgâr alıyor mu?', 'kararli'],
                ['reftar', 'Bilmem küçük hanım.', 'korkmus'],
                ['ic', 'Gözünü yerden kaldırmadı. Neden çağırttığımı anlamıştı.', 'dusunceli'],
                { gizle: 'reftar' },
              ] },
              /* Diyalog T1 (2.5, D6): bu dalda Nabi'nin yüzüğünden haberi yok; yalnız verilişini gördü */
              { m: 'Perihan Hanım\'a duyur: “Yüzüğü Nabi Bey vermiş.”', kozGerek: KOZ, etki: { calibe_suphe: 2 }, bayrak: { p2_koz: 'harcadi' }, iz: 'Kozunu Perihan Hanım\'a harcadın. Artık sır değil.', adimlar: [
                'Nimet gidip geldiğinde hâlâ soluk soluğaydı.',
          ['mehves', 'Yüzük deyince kapıyı kapadı hanımcığım. Adınızı da sordu.', 'korkmus'],
                { kozYak: KOZ },
                ['ic', 'Bu sessizlik, bağırmaktan kötü.', 'endiseli'],
              ] },
            ] },
          ], degilse: [{ eger: yandi, ise: [
            { eger: (S) => S.bayrak.p2_nimet === 'korudu', ise: [
              ['mehves', 'Sofrada beni korumuşsunuz hanımcığım. Mutfağa kadar duyuldu.', 'duygulu'],
            ], degilse: [
              ['mehves', 'Sofrada adım geçmiş. Ağzımı açmadığım bir laf için.', 'endiseli'],
            ] },
            { soru: 'Nimet kurdeleyi bağlarken eli yavaşladı.', secim: [
              { m: '“Benim yüzümden Nimet. Affet.”', etki: { mehves: 2 }, bayrak: { p2_koz: 'ozur' }, adimlar: [
                ['f', 'Benim yüzümden Nimet. Affet.', 'mahzun'],
                ['mehves', 'Sizin yüzünüzden olsun. Perihan Hanım\'ın yüzünden olmasın da.', 'mahzun'],
              ] },
              /* GPT T29 (B1-O1): 1. bölümde yalnız konuşmayı gören (Hatice'yi çağıran) kız verilişi gördüğünü söylemez */
              { m: '“Çeşmede Nabi Bey\'le konuşurken gördüm.”', kosul: (S) => !!S.bayrak.p1_konusma, bayrak: { p2_koz: 'yeni' }, adimlar: [
                ['f', 'Çeşmenin başında Nabi Bey\'le konuşurken gördüm Nimet. Yüzüğü görmedim.', 'kararli'],
                /* Tur 32 (B2 diyalog 7): tasarım kuralı dadının ağzında kâtip cümlesi olmasın */
                ['mehves', 'Eşi Nabi Bey\'in serçe parmağında, ben gördüm. Kimin verdiğini Allah bilir, biz de yakında biliriz.', 'kararli'],
                { koz: 'Hatice\'nin yüzüğü', kaynak: 'Çeşmede ikisini ben gördüm, eşini Nimet tanıdı', alt: 'Çeşmede birlikteydiler, Nimet yüzüğün eşini tanıdı. Verenin Nabi Bey olduğu henüz doğrulanmadı.' },
              ] },
              { m: '“Nabi Bey verdi. Çeşmede ben gördüm.”', kosul: (S) => !S.bayrak.p1_konusma, bayrak: { p2_koz: 'yeni' }, adimlar: [
                ['f', 'Nabi Bey verdi, Nimet. Çeşmenin ardında ben gördüm.', 'kararli'],
                ['mehves', 'Öyleyse eşi de bellidir. Nabi Bey\'in serçe parmağındaki.', 'kararli'],
                { koz: 'Hatice\'nin yüzüğü', kaynak: 'Verilişini gördüm, eşini Nimet tanıdı', alt:'Nabi Bey\'in serçe parmağındaki yüzüğün eşi Hatice\'de. Perihan Hanım bunu bilmiyor.' },
              ] },
            ] },
          ], degilse: [
            { soru: 'Nimet kurdeleyi bağlıyor, cevap bekliyor.', secim: [
              { m: '“Yüzüğü gördün mü Nimet?”', bayrak: { p2_koz: 'yeni' }, adimlar: [
                ['mehves', 'Sormaya gerek yok. Nabi Bey\'in serçe parmağındakinin eşi.', 'kararli'],
                { koz: 'Hatice\'nin yüzüğü', kaynak: 'Nimet söyledi, ben görmedim', alt: 'Nimet\'e göre Hatice\'nin yüzüğü, Nabi Bey\'in serçe parmağındakinin eşi. Perihan Hanım bunu bilmiyor.' },
              ] },
              { m: '“Dedikodu dinlemem Nimet.”', etki: { itibar: 2 }, bayrak: { p2_koz: 'dinlemedi' }, adimlar: [
                ['mehves', 'Dinlemeyin. Ama Hatice sizi dinliyor, unutmayın.', 'endiseli'],
              ] },
              /* Oynanış T1 (B5): 1. bölümde çeşmede bulunan boş kutu (p1_k_kutu) burada işe yarar; koz kaynağı sağlamlaşır */
              { m: '“Düğünde çeşmede boş bir yüzük kutusu buldum.”', kosul: (S) => !!S.bayrak.p1_k_kutu, etki: { mehves: 1 }, bayrak: { p2_koz: 'yeni' }, iz: 'Çeşmede bulduğun boş kutu, Nimet\'in bildiğiyle birleşti.', adimlar: [
                ['f', 'Düğünde çeşmede boş bir yüzük kutusu buldum Nimet.', 'kararli'],
                ['mehves', 'Kutusu çeşmede, eşi Nabi Bey\'in serçe parmağında.', 'kararli'],
                { koz: 'Hatice\'nin yüzüğü', kaynak: 'Boş kutusunu ben buldum, eşini Nimet tanıdı', alt: 'Kutusu çeşmede kaldı, eşi Nabi Bey\'in serçe parmağında. Perihan Hanım bilmiyor.' },
              ] },
              /* GPT T26 Süha (öncelik 1): Hatice'yi çeşmede adıyla çağıran oyuncu gördüğünü burada kullanabilir */
              { m: '“Düğünde onu çeşmenin başında Nabi Bey\'le gördüm.”', kosul: (S) => S.bayrak.p_reftar === 'seslendi', etki: { mehves: 1 }, bayrak: { p2_koz: 'yeni' }, iz: 'Çeşmede gördüğün, Nimet\'in bildiğiyle birleşti.', adimlar: [
                ['f', 'Düğünde onu çeşmenin başında Nabi Bey\'le gördüm Nimet. Adını ben seslendim.', 'kararli'],
                /* GPT T29 (B2-D1): birlikte görülmek verilişi kanıtlamaz; Nimet bildiğini, tahmininden ayırır */
                ['mehves', 'Yüzüğün eşi Nabi Bey\'in serçe parmağında, onu ben gördüm. Gerisini tespihime sorarım.', 'kararli'],
                { koz: 'Hatice\'nin yüzüğü', kaynak: 'Çeşmede ikisini ben gördüm, eşini Nimet tanıdı', alt: 'Çeşmede birlikteydiler, Nimet yüzüğün eşini tanıdı. Verenin Nabi Bey olduğu henüz doğrulanmadı.' },
              ] },
            ] },
          ] }] },
          ['mehves', 'Yarın gerdanlık şu yakaya düşecek, hanımcığım. Aynayı biraz çevireyim mi?', 'ana'],
          { soru: 'Nimet aynada yüzüme bakıyor.', secim: [
            { m: '“Sevinçliyim.”', kosul: muk, bayrak: { p2_gerdanlik: 'sevinc' }, adimlar: [
              ['mehves', 'Öyleyse yüzünüzü benden niye saklarsınız küçük hanım?', 'duygulu'],
              ['ic', 'Bunu söylerken pusula aklımdaydı.', 'utanmis'],
            ] },
            /* Tur 27 (B2 oynanış 4): Süha yolunda gerdanlık sorusu boşa düşmesin.
               Tur 28 (GPT A2/O3; kural 2): samimi sevinç p_rota'ya yenilmez; iç ses açık iradeden (bu seçim, p2_suha_sinir)
               çözülür. Kendini ikna etme ayrı bir seçenek (aynı bayrak değeri: 3. bölüm Nimet'i "Sevinçliyim demiştiniz" der). */
            /* GPT T29 (B2-O3): Süha bu sözü duymaz; aday ilgisi değişmez (yalnız Feride'nin kaydı) */
            { m: '“Sevinçliyim.”', kosul: (S) => !muk(S), bayrak: { p2_gerdanlik: 'sevinc' }, iz: 'Gerdanlığa sevinçli olduğunu söyledin, sözünün arkasındasın.', adimlar: [
              ['f', 'Sevinçliyim.', 'tebessum'],
              { eger: (S) => !!S.bayrak.p2_suha_sinir, ise: [
                ['ic', 'Sofrada da söyledim, şimdi de. Sesim titremedi.', 'kararli'],
              ], degilse: [
                ['ic', 'Bunu yüksek sesle söylemek iyi geldi.', 'tebessum'],
              ] },
            ] },
            { m: 'Gülümse, Nimet\'i inandır.', kosul: (S) => !muk(S), bayrak: { p2_gerdanlik: 'sevinc', p2_gerdanlik_rol: true }, iz: 'Gerdanlığa sevinçli göründün. Kimi inandırmak için, bilmiyorsun.', adimlar: [
              ['f', 'Sevinçliyim.', 'gulumseyen'],
              { eger: (S) => !!S.bayrak.p2_suha_sinir, ise: [
                ['ic', 'Sofrada “sözüm verildi” dedim. Şimdi kendi sesime inanmak istiyorum.', 'mahzun'],
              ], degilse: [
                ['ic', 'Söyledim. Kimi inandırmak için?', 'mahzun'],
              ] },
            ] },
            /* Oynanış T1 (B3): Kenan yolunda Kenan için eksi seçenek (Feride'nin yakınlaşması geri çekilir); Süha yolunda etkisiz */
            { m: '“Bilmiyorum Nimet. Bilmeden evet de demem.”', kosul: muk, bayrak: { p2_gerdanlik: 'bilmiyorum' }, iz: 'Gerdanlığa evet demeden önce bilmek istedin. Pusula bekleyebilir.', adimlar: [
              ['f', 'Bilmiyorum Nimet. Bilmeden evet de demem.', 'kararli'],
              /* Tur 32 (B2 diyalog 9): iki dalda aynı satır olmasın; Kenan dalında Behiye'nin hatırası */
              ['mehves', 'Anneniz de önce kendi bilmek isterdi. Siz de acele etmeyin; ben bir şey söylemem.', 'endiseli'],
            ] },
            { m: '“Bilmiyorum Nimet. Bilmeden evet de demem.”', kosul: (S) => !muk(S), bayrak: { p2_gerdanlik: 'bilmiyorum' }, iz: 'Gerdanlığa evet demeden önce bilmek istedin. Kararını sonraya bıraktın.', adimlar: [
              ['f', 'Bilmiyorum Nimet. Bilmeden evet de demem.', 'kararli'],
              ['mehves', 'Siz bilirsiniz hanımcığım. Yeter ki Perihan Hanım duymasın.', 'endiseli'],
            ] },
            { m: '“Gerdanlık bir taş. Söz başka şey.”', etki: { vakar: 1 }, bayrak: { p2_gerdanlik: 'soz' }, adimlar: [
              ['f', 'Gerdanlık bir taş Nimet. Söz başka şey.', 'kararli'],
              ['mehves', 'Bu annenizin sözü. Aynı sesle söylediniz.', 'mahzun'],
            ] },
          ] },
          { gizle: 'mehves' },

          /* --- Defter: 1. bölümde arabada seçilen cümle burada yazılır.
             Sürükleyicilik T1 (S2, B2-5): koridordan sonraya değil, lamba sönmeden önceye alındı; doruk bölümün son karesi. --- */
          /* GPT T25 Kenan (B1 sürük 3): 1. bölümün son seçimi artık Perihan'a verilen cevap; defter onu yazar */
          { eger: (S) => !!S.bayrak.p1_defter_anne, ise: [
            /* Tur 28 (B1 oynanış 1): arabadaki yeni Kenan yolu cevabı */
            ['ic', 'Defterime arabadaki sorumu yazdım: “Annem de bu yokuştan mı geçti?” Perihan Hanım\'ın gülümsemesi orada düştü.', 'mahzun'],
          ], degilse: [{ eger: (S) => S.bayrak.p_defter === 'calibe', ise: [
            ['ic', 'Defterime arabadaki cevabımı yazdım: “Ben de sayıyorum.” İki günün biri bu gece bitiyor.', 'kararli'],
          ], degilse: [{ eger: (S) => S.bayrak.p_defter === 'remzi', ise: [
            /* Tur 27 (B1 oynanış 10'a): arabadaki dördüncü cevap */
            ['ic', 'Kapıda bey görmedim, dedi. Annesini görmüş oysa.', 'dusunceli'],
          ], degilse: [{ eger: (S) => S.bayrak.p_defter === 'suha', ise: [
            ['ic', 'Defterime arabadaki cevabımı yazdım: “Camları pek temizmiş.” Kimin baktığını ikimiz biliyoruz.', 'kararli'],
          ], degilse: [{ eger: muk, ise: [
            ['ic', 'Defterime arabadaki sorumu yazdım: “Kenan Bey de gelir mi?” Altına ekledim: Gelmese de söz benim.', 'kararli'],
          ], degilse: [
            ['ic', 'Defterime arabadaki ricamı yazdım: “Selamımı söyler misiniz?” Söylemediyse, ben söylerim.', 'kararli'],
          ] }] }] }] }] },
          { eger: muk, ise: [
            /* Kenan yolu: pusulaya verilen cevaptan somut bir iz */
            { eger: (S) => !!S.bayrak.p2_nesne_calibede, ise: [
              { eger: (S) => nesne(S) === 'pusula', ise: [
                ['ic', 'Yastığımın altı boş. Onun yazısı şimdi Perihan Hanım\'ın cebinde.', 'ofkeli'],
              ], degilse: [
                ['ic', 'Defterimin arası boş. Onun yasemini şimdi Perihan Hanım\'ın cebinde.', 'ofkeli'],
              ] },
            ], degilse: [{ eger: (S) => S.bayrak.p2_pusula === 'yazdi', ise: [
              ['ic', 'Parmağımda annemin kaleminden bir mürekkep izi. Merdivendeki elde de vardı.', 'utanmis'],
            ], degilse: [{ eger: (S) => S.bayrak.p2_yasemin_yer === 'madalyon', ise: [
              { eger: (S) => S.bayrak.p2_pusula === 'yaprak', ise: [
                /* GPT T29 (B2-A2): madalyon boyunda kalır (koridorda yakadan çıkarılır); yastığa bırakılmaz */
                ['ic', 'Madalyonun kapağını kapadım. Bir yaprağı eksik, o yaprak şimdi onda.', 'utanmis'],
              ], degilse: [
                ['ic', 'Madalyonun kapağını kapadım. Kapağın altında yasemin.', 'utanmis'],
              ] },
            ], degilse: [{ eger: (S) => S.bayrak.p2_yasemin_yer === 'defter', ise: [
              ['ic', 'Yasemini bu geceki sayfaya bastırdım. Mürekkep kokusuna karıştı.', 'utanmis'],
            ], degilse: [{ eger: (S) => S.bayrak.p2_not_yer === 'yastik', ise: [
              ['ic', 'Pusulası yastığımın altında. Cevapsız, ama atılmamış.', 'utanmis'],
            ], degilse: [
              ['ic', 'Pusulayı yanlış katladığım kat aklımda. Görürse anlar.', 'utanmis'],
            ] }] }] }] }] },
            /* Oynanış T1 (B5): kitap keşfinin (p2_k_ithaf) karşılığı */
            { eger: (S) => !!S.bayrak.p2_k_ithaf, ise: [
              ['ic', '“…ve ablasına.” Kazınan satırı defterime geçirdim.', 'utanmis'],
            ] },
          ] },

          /* --- Onun gözünden: anlatıcının ara sayfası (rehber §2; eski kart + 'pa' satırları taşındı) --- */
          { ara: { yer: 'Onun gözünden', satirlar: [
            (S) => {
              var f = S.bayrak;
              /* GPT T26 Süha (B2 anlatı 2, öncelik 7): Süha'nın iç hesabı ve "borç/kalp" hükmü kalktı; yalnız gözlenen davranış */
              /* Tur 28 (B2 anlatı 7): doruğun iki vuruşu (aralık kapı, Perihan) sahneden önce anlatılmaz */
              if (!muk(S)) return 'Süha odasına çıktı. Çekmeceden ters çevrilmiş bir çerçeve çıkardı, lambayı ona çevirdi.';
              if (f.p2_pusula === 'yazdi') return 'Kâhya kitabı Kenan\'ın odasına bıraktı. Kenan yirmi üçüncü sayfayı açtı.';
              if (f.p2_pusula === 'yaprak') return 'Kenan\'ın pusulasında tek bir yasemin yaprağı vardı. Yazı yoktu.';
              if (f.p2_pusula === 'aldi') return 'Kenan kitabı açtığında sayfa boştu. Yasemin gitmişti.';
              if (f.p2_not_yer === 'kitap') return 'Kenan\'ın pusulası kitabın içindeydi. Okunmuş, bir katı yanlış katlanmıştı.';
              return 'Kâhya kitabı Kenan\'a getirdi. Pusula içinde yoktu.';
            },
            (S) => {
              var f = S.bayrak;
              if (!muk(S)) {
                /* Oynanış T1 (B5): kapak keşfiyle açılan seçeneğin karşılığı */
                if (f.p2_kapak_soru) return 'Kapağın içine yazdığı satırı kız yüzüne okumuştu. Süha pencereyi açtı, sigarasını yakmadan elinde tuttu.';
                /* Tur 28 (GPT B2 O2): sofradaki açık sınır Süha'nın gözünden de görünür; onun yorumu, kızın kabulü değil */
                /* Tur 29 (B2 anlatı 3–4): bozuk cümle düzeldi; Süha'nın içi söylenmez, davranışı görünür */
                if (f.p2_suha_sinir && f.p2_sayfa !== 'suha') return '“Benim sözüm verildi.” Süha bardağını indirmişti ama o cümleyi aklından atamadı.';
                /* Tur 28b (kök 1): limonluktaki açık ret de onun gözünden silinmez; onun yorumu, kızın kabulü değil */
                if (f.p1_suha_sinir && f.p2_sayfa !== 'suha') return '“Sözlü bir kıza bakılmaz.” Süha lambayı söndürmeden önce bu cümleyi bir kâğıda yazdı, sonra kâğıdı yaktı.';
                if (f.p2_sayfa === 'suha') return 'Lambanın önüne oturdu. On iki sayfa çeviren parmaklarına uzun uzun baktı.';
                /* Tur 30 (B2 oynanış 3): piyanodaki sınır cümlesi */
                if (f.p2_sayfa_sinir) return 'Süha lambayı söndürmedi. ‘Sayfalarım da benim,’ diye mırıldandı.';
                if (f.p2_sayfa === 'ezber') return '“Ezbere çalarım.” Süha bu cümleyi odasında bir kez, alçak sesle kendine tekrarladı.';
                return 'Kardeşini araya koymuştu. Süha bir çocuğun ardında beklemeyi de bilirdi.';
              }
              if (f.p2_pusula === 'yazdi') {
                if (f.p2_satir === 'okudum') return 'Altında tek kelime vardı: “Okudum.” Kenan sayfayı çevirmedi.';
                if (f.p2_satir === 'soru') return 'Altında bir soru vardı. Kenan yirmi dördüncü sayfaya kalemle bir şey eklemeye oturdu.';
                /* Tur 29: sitem romantik ödüle çevrilmez; Kenan'ın davranışı */
                /* Tur 30: haber satırının karşılığı; Kenan'ın davranışı */
                if (f.p2_satir === 'haber') return 'Altında bir haber vardı: bir hanım, bir oğul. Kenan kandili söndürmeden annesinin kapısına yürüdü.';
                if (f.p2_satir === 'sitem') return 'Altında bir sitem vardı. Kenan onu iki kez okudu, sonra kalemini bırakıp bir yılı saydı.';
                return 'Altında kendi yaseminine dair bir satır vardı. Kenan kandili o gece söndürmedi.';
              }
              if (f.p2_pusula === 'yaprak') return 'Kenan yaprağı avucuna aldı. Bir cevap hiç bu kadar az kelimeyle gelmemişti.';
              /* Tur 28 (GPT B2 D2): mesafe her dalda romantik ödüle çevrilmez; Kenan yanlış anlamaktan korkar */
              if (f.p2_pusula === 'aldi') return 'Kenan boş sayfaya uzun uzun baktı. Yaseminin gidişini cevap mı sayacaktı, ret mi, bilemedi.';
              if (f.p2_not_yer === 'kitap') return 'Kenan yanlış katlanmış kenarı düzeltti. Bir cevap mı, yalnız bir kat izi mi, anlayamadı.';
              /* Tur 27 (GPT A3): anlatıcı Kenan'ın umudunu kesin bilgi gibi taşımaz */
              return 'Kenan boş sayfayı yeniden çevirdi. Pusulanın atıldığını düşünmek istemedi.';
            },
            /* Tur 28 (B2 anlatı 7, sürük 4): Perihan'ın gelişi koridordaki doruğa kalır */
          ] } },
          /* Tur 27 (GPT G4; B2 görsel 10'a): Kenan'ın gözünden sayfanın karşılığı Kenan'lı bir an (resmi gelince açılır);
             Feride'yi yazarken gösteren an_pusula yazma anına taşındı */
          /* GPT T29 (B2-G1): Kenan'ın kitabı alış anı nesne durumuna göre üç resim (cevaplı / yapraklı / boş ya da pusulasız) */
          { eger: muk, ise: [{ eger: (S) => S.bayrak.p2_pusula === 'yazdi', ise: [{ cizim: 'an_pusula_kenan' }], degilse: [
            /* Tur 30 (GPT B2 G6): kitapta bırakılan yanlış katlı pusula boş sayfa resmine düşmez (an_pusula_kenan_kat üretimde) */
            { eger: (S) => S.bayrak.p2_pusula === 'yaprak', ise: [{ cizim: 'an_pusula_kenan_yaprak' }], degilse: [
              { eger: (S) => S.bayrak.p2_not_yer === 'kitap', ise: [{ cizim: 'an_pusula_kenan_kat' }], degilse: [{ cizim: 'an_pusula_kenan_bos' }] },
            ] },
          ] }] },
          { ara: { mekan: 'suha_oda', yer: 'Gece yarısı · koridor', satirlar: [
            /* Tur 28 (B2 sürük 4): doruk öncesi ara sayfa tek satır; Perihan'ın mumu sahnede sezilir */
            'Gece yarısı konak sustu. Koridorun sonunda yalnız bir lamba yanıyordu.',
          ] } },
          { gorev: 5 },
        ],
      },

      /* ---------------- 6. Koridor: Şefik ve kanca ---------------- */
      {
        id: 'p2_koridor', mekan: 'suha_oda', tetik: 'giris', kosul: (S) => S.gorev === 5, sahne: [],
        adimlar: [
          /* Tur 27 (B2 ses 1): ağlayan çocuğun teselli sahnesi Süha temasında değil */
          { muzik: 'huzun' },
          /* Tur 27 (GPT A4): fon ve etiket koridorda; ilk satır odadan duymayı değil, koridora çıkışı anlatır */
          'Hıçkırığı duyunca kapımı açtım. Şefik koridorda, resmi göğsündeydi.',
          { goster: ['sefik', 'aglamakli'] },
          { eger: (S) => S.bayrak.p2_mefharet === 'sefik', ise: [
            ['sefik', 'Leke gece büyümüş abla.', 'aglamakli'],
          ], degilse: [{ eger: (S) => S.bayrak.p2_mefharet === 'babaya', ise: [
            ['sefik', 'Babam Nazlı\'yı odasına yolladı. Resmim yine gitti abla.', 'aglamakli'],
          ], degilse: [{ eger: (S) => !!S.bayrak.p2_k_resim, ise: [
            ['sefik', 'Leke senin pencereni de yuttu abla.', 'aglamakli'],
          ], degilse: [
            ['sefik', 'Kimse resmime bakmadı abla.', 'aglamakli'],
          ] }] }] },
          { soru: 'Şefik resmi bana uzattı.', secim: [
            { m: 'Lekeyi birlikte bir şeye çevirelim.', etki: { sefik: 2 }, bayrak: { p2_sefik: 'cizdi' }, iz: 'Şefik\'in lekesini birlikte bir resme çevirdiniz.', adimlar: [
              'Kalemi aldım. Leke, bakınca her şeye benziyor.',
              { soru: 'İlk çizgiyi ben çekeceğim.', secim: [
                { m: 'İki yanına kanat.', bayrak: { p2_sefik_cizim: 'kus' }, adimlar: [
                  ['sefik', 'Kuş oldu abla! Gagasını ben çizeyim!', 'sevincli'],
                  ['ic', 'Gagayı çizerken koluma sokuldu. Ağlamayı unutmuştu.', 'tebessum'], // Tur 28 (B2 anlatı 5)
                ] },
                { m: 'Altına bir gövde, üstüne yelken.', bayrak: { p2_sefik_cizim: 'gemi' }, adimlar: [
                  ['sefik', 'Gemi! Bayrağını ben çizeyim!', 'sevincli'],
                  /* GPT T25 Kenan (B2 sürük 10'a-3): Kenan yolunda gemi, bu akşam evden çıkan cevaba bağlanır */
                  { eger: (S) => muk(S) && !!S.bayrak.p2_pusula && S.bayrak.p2_pusula !== 'sustu', ise: [
                    ['ic', 'Gemi olsun. Bu akşam benim de bir cevabım yola çıktı.', 'tebessum'],
                  ], degilse: [
                    ['ic', 'Gemi olsun. Bir şey gitsin buradan.', 'mahzun'],
                  ] },
                ] },
                { m: 'Altına bir dal.', bayrak: { p2_sefik_cizim: 'agac' }, adimlar: [
                  ['sefik', 'Ağaç oldu! Dalına kuş konduracağım!', 'sevincli'],
                  ['ic', 'Ağaç olsun. Kök salan bir şey olsun.', 'tebessum'],
                ] },
              ] },
            ] },
            { m: '“Yarın yenisini yaparız. Şimdi uyu.”', etki: { sefik: 1 }, bayrak: { p2_sefik: 'yarin' }, iz: 'Şefik uyuyana dek başında durdun.', adimlar: [
              ['sefik', 'Uyuyana kadar yanımda dur.', 'aglamakli'],
              'Yatağının kenarına oturdum. Elimi tuta tuta uyudu.',
            ] },
            { m: '“Lekesiyle çerçeveletirim. Nazlı her gün görsün.”', etki: { sefik: 1 }, bayrak: { p2_sefik: 'cerceve' }, iz: 'Lekeyi Nazlı\'ya karşı bir hatıraya çevirdin.', adimlar: [
              ['sefik', 'Abla! Perihan Hanım gibi konuştun.', 'saskin'],
              /* Tur 27 (GPT B2 D 10'a-2): benzerliği oyuncu kendisi duysun; açıklama yerine kısa durma */
              'Şefik\'in saçını okşadım. Doğru söylüyordu.',
            ] },
          ] },
          /* Keşfin karşılığı (GPT Tur 20, C7): sofadaki resmine bakan oyuncuya tek satır; uyuyan Şefik konuşmaz */
          { eger: (S) => S.bayrak.p2_k_resim && S.bayrak.p2_sefik === 'cizdi', ise: [
            ['sefik', 'Pencerene yine kafes çizmem abla.', 'sevincli'],
          ] },
          { gizle: 'sefik' },
          /* Sürükleyicilik T1 (S5, B2-6): seçimden önce süre, bedel ve bekleyen kapı.
             Tur 27 (B2 ses 1): aralık kapı sessizlikte */
          { muzik: 'sessiz' },
          'Odama dönerken Süha Bey\'in kapısı aralık. İçeride lamba yanıyor, alçak bir ses konuşuyor.',
          /* GPT T25 Kenan (B2 sürük 3): Kenan yolunda koridorun bedeli bölümün sorusuna (söz) bağlanır */
          { eger: muk, ise: [
            ['an', 'Gerdanlık kapıdaydı. Gece bir erkeğin kapısında görülen kızın sözü, sabah teraziye konurdu.'],
          ], degilse: [
            ['an', 'Feride biliyordu: gece yarısı bir erkeğin kapısında görülen kız, sabah bunun hesabını verirdi.'],
          ] },
          /* Tur 27 (B2 sürük 3): bedel sürpriz kalmasın; seçimden önce bekleyen yüz sezilir */
          'Koridorun ucunda bir mumun alevi kıpırdadı, kimin elinde olduğunu göremedim.',
          { soru: 'Kapının önünden geçmem gerek. İçerideki ses bir ad söylüyor.', secim: [
            { m: 'Dur. Dinle; koridorda görülebilirsin.', bayrak: { p2_dinledi: true, p2_koridor_hece: 'be', p2_koridor_goruldu: true }, iz: 'Bir adın ilk hecesini duydun. Perihan Hanım seni o kapıda gördü.', adimlar: [
              'Kapının yanında durdum. Mum köşeyi dönmeden ne dediğini duymalıydım.',
              /* GPT T23 (Süha 2): "be" Behiye'nin son değil ilk hecesi; ipucu yeni adlara göre kuruldu */
              ['suha', '…Pardonne-moi, Be…', 'mahzun'], // Tur 27b: yasın sesi, alay yok,
              /* Tur 27 (GPT D3): Fransızca bilmeyen oyuncu da af istendiğini duysun; kimlik açılmaz */
              ['ic', 'Fransızca af diliyor. Kimden?', 'mahzun'],
              { efekt: 'tahta' }, // Tur 28: tek kuru döşeme gıcırtısı; konuşmayı keser
              'İçerideki ses sustu. Ayağımı kaldıramadım.',
              /* Tur 27 (B2 sürük 1): vurucu anda Süha'nın görüntüsü */
              ['an', 'Kapının aralığında Süha Bey\'in gölgesi doğruldu. Elinde bir resim çerçevesi vardı, yüzü lambaya dönük değildi.'],
              /* Tur 27 (B2 ses 1; GPT S4): mum, tek seferlik doruk; Perihan'ın tek repliği, Feride'nin cevabı, kart */
              ['an', 'Mum yaklaştı.'],
              { goster: ['calibe', 'soguk'] },
              { muzik: 'doruk' },
              /* Oynanış T1 (B6): Perihan'ın kuşkusu (calibe_suphe ≥ 4, motor sınırı 0–5 ya da 0–12) gece sözüne yansır.
                 Tur 27 (GPT S3): Kenan yolunda Perihan'ın tehdidi ertesi günün teslimine bağlanır; kanca ona cevaptır */
              { eger: muk, ise: [
                ['calibe', 'Uyuyamadın mı kızım? Yarın bu eve ne gelirse önce bana getirirler.', 'sinsi'],
              ], degilse: [{ eger: (S) => ((S.v && S.v.calibe_suphe) || 0) >= 4, ise: [
                ['calibe', 'Uyuyamadın mı kızım? Ben de seni düşündüm.', 'sinsi'],
              ], degilse: [
                ['calibe', 'Uyuyamadın mı kızım? Ben de.', 'sinsi'],
              ] }] },
              /* S3: doruğa Feride'nin sesli, soğukkanlı karşılığı; kaçmaz, açık da vermez */
              ['f', 'Şefik ağlıyordu efendim, yanındaydım. İyi geceler.', 'kararli'],
              { efekt: 'adim' },
              { gizle: 'calibe' },
              { cizim: 'an_koridor' },
              { kart: '“Be…” Annemin adı da böyle başlardı.' },
            ] },
            /* Tur 27 (B2 sürük 2): Kenan yolunun kendi doruğu; kapıyı dinlemez, beklediği kâğıdı seçer.
               p2_dinledi false, p2_koridor_goruldu false (3. bölüm "görülmeden geçti" dalını okur); p2_koridor_kenan 3. bölüm
               açılışında ve sabah iç sesinde okunur (Feride Perihan'ı kapıda görmedi) */
            /* Tur 28 (B2 sürük 3, oynanış 1): Kenan doruğu "yapmama" değil eylem; mumla yüz yüze düello. Feride Süha'nın
               kapısında görülmez (p2_koridor_goruldu false; 3. bölüm "Ardından gelen Perihan orada bir ad duydu" okur) */
            { m: 'Geç. Mum yaklaşıyor, madalyonu avucuna al.', kosul: muk, etki: { vakar: 1 }, bayrak: { p2_dinledi: false, p2_koridor_goruldu: false, p2_koridor_kenan: true }, iz: 'O kapıyı dinlemedin. Mumun önüne annenin madalyonuyla çıktın.', adimlar: [
              /* Tur 30 (B2 anlatı 4): madalyonu göğsünde açık taşıyan kız onu yakadan çıkarmaz */
              { eger: (S) => S.bayrak.madalyon_hal === 'acik', ise: [
                'Bir adım bile yavaşlamadım. Kendi kapımın önünde madalyonu göğsümden avucuma aldım.',
              ], degilse: [
                'Bir adım bile yavaşlamadım. Kendi kapımın önünde madalyonu yakamdan çıkarıp avucuma aldım.',
              ] },
              { muzik: 'gece' }, // Süha'nın kapısı önünde romantik çalmaz
              ['an', 'Mum köşeyi döndü.'],
              { goster: ['calibe', 'sinsi'] },
              ['calibe', 'Uyuyamadın mı kızım? Elinde ne var?', 'sinsi'],
              ['f', 'Annemin madalyonu efendim. Her gece öperim.', 'kararli'],
              /* Tur 32 (B2 sürük 1): doruğa bedel; Perihan ister, Feride vermez */
              ['calibe', 'Göster bakayım.', 'sinsi'],
              ['f', 'Annemin yüzünü gece kimseye göstermem efendim.', 'kararli'],
              'Avucumu kapadım. Mum bir an elime yaklaştı, sonra çekildi.',
              { eger: (S) => S.bayrak.p2_yasemin_yer === 'madalyon', ise: [
                ['ic', 'B harfini gördü. Kapağın altındaki yaz onda değil, bende.', 'kararli'],
              ] },
              /* Tur 29 (B2 sürük 2): Kenan doruğunda Perihan'ın tehdidi bu akşamki pusulaya dokunur */
              { eger: (S) => S.bayrak.p2_pusula === 'yazdi', ise: [
                ['calibe', 'Öp öyleyse, mürekkebin de kurusun. Kâhyanın getireceği cevap önce bana gelir.', 'sinsi'],
              ], degilse: [{ eger: (S) => S.bayrak.p2_pusula === 'yaprak' || S.bayrak.p2_pusula === 'aldi', ise: [
                ['calibe', 'Öp öyleyse. Kâhyanın götürdüğü kitabın cevabı da gelirse önce bana getirirler.', 'sinsi'],
              ], degilse: [
                ['calibe', 'Öp öyleyse. Yarın bu eve ne gelirse önce bana getirirler.', 'sinsi'],
              ] }] },
              { gizle: 'calibe' },
              ['an', 'Perihan Hanım mumuyla Süha Bey\'in aralık kapısına yürüdü. Feride kapısını kapattı, ardını dinlemedi.'],
              /* Tur 29 (B2 sürük 10'a, görsel 10'a): Kenan doruğunun kendi anı (mum ve madalyon; resmi gelince açılır) */
              { cizim: 'an_koridor_kenan' },
              /* Tur 33 (B2 anlatı 4): Kenan dalının doruğu bölümün Kenan sorusuna (pusula) döner */
              { kart: (S) => (S.bayrak.p2_pusula === 'yazdi' || S.bayrak.p2_pusula === 'yaprak' || S.bayrak.p2_pusula === 'aldi')
                ? 'Mumun önüne annemin madalyonuyla çıktım. Kenan\'ın satırı onun eline geçmeyecek.'
                : 'Mumun önüne annemin madalyonuyla çıktım. Elimden hiçbir şey alamadı.' },
            ] },
            /* Seçenek metni etkin bir hamleye çevrildi (rehber §5: hiçbiri "bir şey yapma" değildir); bayrak ve etki aynı */
            { m: 'Durma. Geç ve koridoru gözle.', etki: { vakar: 1 }, bayrak: { p2_dinledi: false, p2_koridor_goruldu: false }, iz: 'Görülmeden geçtin. O kapıyı dinleyeni sen gördün.', adimlar: [
              'Adımlarımı sıklaştırdım. Arkamda alçak bir ses bir ad söyledi, ayak seslerim onu örttü.',
              { muzik: 'gerilim' }, // Tur 27 (B2 ses 1)
              /* Diyalog T1 (2.6): Feride az önce o kapının önünden geçti; Perihan ardından gelmiş olmalı */
              'Köşede ardıma baktım. Perihan Hanım mumuyla o kapıya gelmiş, dinliyordu.',
              ['ic', 'Beni görmedi. Bu kez dinlerken yakalanan o.', 'kararli'],
              ['an', 'Feride köşeden çekildi. Mum o kapının önünde bir süre daha kıpırdamadı.'],
              /* Tur 30 (B2 sürük 2, görsel 5): bu dalın doruğu resimsiz kalmasın; Feride'nin gözünden kapıyı dinleyen
                 Perihan (tek resim; Feride görünmez, kıyafet/madalyon türü gerekmez). Üretimde: t30_uretim_1_4.md */
              { cizim: 'an_koridor_gece' },
              /* Tur 27 (B2 sürük 5): özet kartı yerine his */
              { kart: 'O kapıyı ondan önce ben geçtim. Bu gece ilk kez arkamda o kaldı.' },
            ] },
          ] },
          { islev: (S) => { if (S.bayrak.p2_sal && S.taki === 'sal') S.taki = null; } }, // yalnız Tur 27 kayıtları
          { bolumSonu: true },
        ],
      },
    ],

    // Tur 18 ek (öneri 9): defter üç kısa cümle — ne yaptım / kimle ne kaldı / sıradaki soru.
    sonNotu: function (S) {
      var b = S.bayrak, c = [];
      if (b.p_rota !== 'mukaddem' && b.p2_hitap === 'sinir') c.push('Nimet’e sözlü olduğumu hatırlattım.');
      if (b.p_rota === 'mukaddem') c.push({
        yazdi: b.p2_satir === 'sitem'
          ? 'Kenan Bey\'in pusulasının altına sitemimi yazdım.'
          : b.p2_satir === 'haber'
          ? 'Kenan Bey\'in pusulasının altına görücü hanımı yazdım. Haberi Perihan Hanım\'dan önce ben verdim.'
          : 'Kenan Bey\'in pusulasının altına kendi cevabımı yazdım.',
        yaprak: 'Kenan Bey\'e yazı yerine tek bir yasemin yaprağı yolladım.',
        aldi: 'Yasemini bu kez ben aldım, boş sayfayı Kenan Bey okusun.',
      }[b.p2_pusula] || 'Kenan Bey\'in pusulasına cevap vermedim, ama atmadım da.');
            if (b.p2_koz === 'harcadi') c.push('Hatice\'nin yüzüğünü Perihan Hanım\'a duyurdum. Kapısını kapadı, sesi çıkmadı.');
      else if (b.p2_nimet === 'korudu') c.push('Sofrada Nimet\'i babamın önünde korudum. Babam onu bıraktı, Nabi Bey\'e baktı.');
      else if (b.p2_nesne_calibede) c.push('Nazlı\'nın aşırdığı şeyimi Perihan Hanım kendi cebine koydu.');
      else if (b.p2_v_oda === 'kilit') c.push('Yemekten sonra çekmecemi kilitledim, Nazlı eli boş döndü.');
      else if (b.p2_remzi === 'ilgi') c.push('Sofrada Remzi Bey\'in kendine gülebildiğini söyledim. Perihan Hanım bunu unutmayacak.');
      else if (b.p2_remzi === 'duello') c.push('Sofrada Remzi Bey\'e bir laf yolladım, Nabi Bey götürür.');
      else if (b.p2_remzi === 'uzak') c.push('Sofrada babama sözlü olduğumu hatırlattım.');
      if (b.p_rota !== 'mukaddem') {
      /* GPT T26 Süha (öncelik 5): keşifle açılan hamle ve sofrada korunan Nimet özette kaybolmaz */
      if (b.p2_kapak_soru) c.push('Piyanoda Süha Bey\'e kutunun kapağındaki satırı okudum. Sayfaları yalnız benim izin verdiğim kadar çevirdi.');
      /* Tur 28 (GPT B2 O2): açık sınır özette korunur */
      else if (b.p2_suha_sinir) c.push('Sofrada Süha Bey\'e “Benim sözüm verildi” dedim, herkesin önünde, babamın sofrasında.' + (b.p2_sayfa_sinir ? ' Piyanoda da sayfalarımı kendimde tuttum.' : (b.p2_sayfa === 'suha' ? ' Piyanoda yardımını yalnız sayfaları çevirmesi için kabul ettim.' : '')));
      /* Tur 28b (kök 1): Nimet'e söylenen ret de özette */
      /* Tur 30: piyanoda söylenen sınır */
      else if (b.p2_sayfa_sinir) c.push('Piyanoda Süha Bey\'e sözümün verildiğini, sayfalarımın da benim olduğunu söyledim.');
      else if (b.p2_hitap === 'sinir' && b.p2_sayfa !== 'suha') c.push('Piyanoda sayfalarımı ona bırakmadım.');
      else c.push({
        suha: 'Piyanoda sayfalarımı Süha Bey çevirdi, eli bir kez bile değmedi.',
        ezber: 'Piyanoda ezbere çaldım, Süha Bey\'in yardımını almadım.',
        sefik: 'Piyanoda sayfalarımı Şefik çevirdi, Süha Bey pencereden dinledi.',
      }[b.p2_sayfa] || 'Süha Bey sofrada bana bakmadı, piyanoda baktı.');
      }
      /* Sürükleyicilik T1: defter soruyla değil, Feride'nin eylemiyle biter */
      c.push(b.p2_koridor_kenan
        ? 'Süha Bey’in kapısından durmadan geçtim. Perihan Hanım’ın mumunu görünce madalyonumu avucuma aldım.'
        : (b.p2_koridor_goruldu
          ? 'Süha Bey\'in kapısında bir adın ilk hecesini duydum. Perihan Hanım beni orada gördü, ben de gözümü kırpmadan Şefik\'i söyledim.'
          : 'Gece Süha Bey\'in kapısını Perihan Hanım\'ın dinlediğini gördüm. Beni görmedi.'));
      return c.join(' ');
    },
    /* Tur 27: an_pusula yalnız pusulaya yazana, an_piyano yalnız sayfalarını hekime çevirtene açılır */
    anIpuclari: { an_piyano: 'Sayfalarını hekime çevirten, piyanonun başında yalnız kalmaz.', an_pusula: 'Pusulanın altına kendi satırını yazan, o anı saklar.' },
    /* GPT T29 (B2-O2; ORTAK motor anRet): sayfaları hekime vermeyen ya da pusulaya bilerek yazmayan kıza o an
       "kaçırdığın an" diye gösterilmez; ret ve mesafe bir eksik değildir */
    anRet: {
      /* GPT T29 (O3-3/O4-3): öbür rotanın anı erişilemezdir; kaçırılmış sayılmaz */
      an_piyano: function (S) { var f = S.bayrak; return f.p_rota === 'mukaddem' || f.p2_sayfa === 'ezber' || f.p2_sayfa === 'sefik' || !!f.p2_suha_sinir; },
      an_pusula: function (S) { var f = S.bayrak; return f.p_rota !== 'mukaddem' || (!!f.p2_pusula && f.p2_pusula !== 'yazdi') || f.p2_satir === 'sitem' || f.p2_satir === 'haber'; },
    },
    /* Sürükleyicilik T1 (S1): karar; koridorda görülüp görülmemeye göre. Kartı tekrar etmez, "Perihan ne yapacak?" kalıbı bırakıldı. */
    siradaki: { ad: 'Gerdanlık', kanca: function (S) {
      var b = S.bayrak;
      /* GPT T25 Kenan (B2 sürük 5, 10'a-1): Kenan yolunda kanca cevabın güvenle ulaşmasına bağlanır;
         koridor yan gerilim olarak kartta kalır. 3. bölümde sayfa gerdanlık kutusunun kapağı altında, Perihan'dan önce okunur. */
      if (muk(S)) {
        /* GPT T29 (B2-S1): Kenan yolunda koridorda heceyi duyan kızın kancası iki soruyu tek plana bağlar */
        /* Tur 33 (B2 sürük 2): soru kancası karar kancasına döndü; B3'ün sarı odasına bağlanır */
        if (b.p2_koridor_hece === 'be') return 'Kenan Bey’in bir sonraki satırı Perihan Hanım\'ın eline geçmeden almalıyım.';
        if (b.p2_nesne_calibede) return 'Kenan Bey’den bana kalanı Perihan Hanım cebine koydu. Bir sonraki onun eline geçmeden almalıyım.';
        if (b.p2_satir === 'soru') return 'Kenan Bey’e yirmi dördüncü sayfayı sordum. Cevabı yarın gelirse Perihan Hanım\'dan önce okuyabilecek miyim?';
        if (b.p2_pusula === 'sustu') return 'Bu gece Kenan Bey’e susarak cevap verdim. Yarın gerdanlıkla birlikte onun satırı da gelecek mi?';
        /* Tur 27 (B2 sürük 10'a; GPT S3): kart ile kanca aynı yöne; Perihan'ın "önce bana getirirler" tehdidine cevap */
        if (b.p2_koridor_goruldu) return 'Perihan Hanım yarın bu eve ne gelirse önce ona getirileceğini söyledi. Kenan Bey’in cevabı gerdanlıkla gelirse kutuyu ondan önce açmalıyım.';
        return 'Gerdanlık gelince kutuyu Perihan Hanım\'dan önce açmalıyım.';
      }
      return b.p2_koridor_goruldu
        /* GPT T24b Süha (B2-2): fısıldayan belli (Süha); açık olan, hecenin kime söylendiği */
        /* Tur 33 (B2 sürük 3): kart ("Be…") yinelenmez */
        ? 'Perihan Hanım beni o kapıda gördü. Sabah ilk o konuşacak; ben de “Be…”nin sonunu soracağım.'
        /* GPT T25 Kenan (B2 anlatı 4): "ondan önce bulmak" mantıksızdı; yarış, adın kullanılmasına karşı */
        /* Tur 28b (kök 7; GPT B2 S2): kanca gözlenen bir hareketle ve Feride'nin sabahki hamlesiyle biter;
           3. bölümün ilk sahnesi ("Kahvaltıdan önce ben öğreneyim" → "Kime sorayım?") bunu karşılar */
        /* Tur 32 (B2 anlatı 4): soru yerine karar; kartın bilgisini yinelemez */
        : 'Perihan Hanım o kapıyı dinlerken onu gördüm. Sabah kahvaltıda önce ben soracağım.';
    } },
  };
})();

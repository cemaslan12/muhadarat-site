/* =========================================================================
   PİLOT — YENİ BİÇİMDE 7. BÖLÜM: ADA VAPURU  (bölüm no 107)
   İskelet: notlar/bolum1_pilot_iskelet.md (7. bölüm: Ada vapuru; kanca: aynı evde). Ad, 6. bölümün
     siradaki.ad alanından ("Ada Vapuru").
   Romandan (s. 125–130): bahar, düğüne iki ay; Büyükada'da bir aylığına tutulan, Rumların yaptırdığı,
     haremlik-selamlık ayrımı olmayan döşeli ev; çamlık gezintisi; hizmetçinin efendisinin ayaklarına
     kapanıp itirafı ("Seni evime hanım yaparım"), "Ben efendiye ne cevap vereceğim?", "suçu bir başkasının
     üzerine atmak"; misafirin "annem merak eder" diye kalmak istememesi, "telgraf çekeriz", "Burası
     kendi evin"; "Bizim damat bey dadılarla bakılmaya alışmıştır… eli işe yakışır"; "Sen bilirsin!";
     üst katta en sakin oda, orta kat; selamlık dolabındaki konyak. Dönem (donem_ham_hizmetkar.md):
     yandan çarklı, tek bacalı vapur; Köprü iskelesi, çan; kadın ve erkek bölmeleri ayrı.
   Oyun için ek: deniz tutan üvey anne, kıçta perdenin bittiği bir karış (Episode tarzı "perde" anı),
     yaşmağın ucu, iskelede kiralanan bütün faytonlar (Remzi), tavana vurulan üç tık, eşikte tepsi,
     denize dökülen konyak.
   Doğrusal bölüm (dogrusal: true). Zaman: 6. bölüm gecesinin sabahı → vapur → öğle iskele → akşamüstü
     sofa → akşam → gece. Her yolda 13 karar (kıyafet ekranı dahil); iki serbest vaktin mini seçimleriyle
     en çok 17 (oda seçimi hariç; Tur 22 ek: gece vakti iki iş, eski hizmet sorusunun yerini görev düzeni aldı).
   Açılış anlatısı (6. bölümün yolu; Süha yolunda Kenan tanıtılır); olay anlatısı: Ada'ya varış (Remzi
     tanıtılır). Serbest vakitler: öğle→akşamüstü (çamlık, asma altında babam, odada Remzi'nin kartı) ve
     yemekten sonra (selamlık dolabı, misafir odasının anahtarı). Vakit bayrakları p7_v_* (camlik, baba,
     pencere, dolap, anahtar); gece sahnesinde karşılık bulur. 6. bölümden p6_v_sefik, p6_v_konyak okunur.
     Vakitler plan modunda yürünür (plan: 'ada', veri/plan_ada.js); kurallar aşağıdaki gezinme katmanında.
   Köşk iki katlı (16 Kasım 2026, Cemil): Feride'nin odası üst katta; misafir odası alt katta, selamlığın
     yanında (Kenan "tam altımda"; ses ince döşemeden geçer).
   Önceki bölümlerden okunanlar (değiştirilmez): p_rota, p6_son, p6_karar, p6_ada, p6_remzi, p6_yakin,
     p6_kandil, giyili kıyafet.
   Bayraklar: p7_kapi (surgu/nimet/madam/sefik/acik), p7_remzi (yuru/fayton/cesme), p7_sofra
     (misafir/vals/perde), p7_itiraf (dinle/gir/bekle), p7_hizmet (sefik = Şefik Kenan'ın yanında kaldı ve
     onun odasında yattı; sus = Şefik benimle geldi, misafirin kapısı Hatice'ye kaldı; eski 'hasta' artık yazılmaz);
     Tur 22 ek (GPT öneri 2–3) gece hazırlığı: p7_v_bekci (kapi/benle: Nimet ya da Madam kapımda mı, benimle mi),
       p7_v_ilk (dolap/anahtar: yatmadan önceki ilk iş; ilk iş bitince beyler döner, Hatice yatağı bitirir),
       p7_v_hatice (soz/ret: önce dolap yolunda anahtar için Hatice'nin "sabah beni de dinleyeceksiniz" şartı),
       p7_v_goren ('suha': önce anahtar yolunda dolabı açarken Süha Bey pencereden gördü),
       p7_v_arama (sise/bos: oda boşken Perihan Hanım aradı; sandıktaki haşhaş şişesini aldı ya da yalnız boş buldu);
     Kenan yolu: p7_kic (git/sefik/munevver), p7_soz (bahane/itiraf/yuz), p7_yasmak (birak/el/goz),
       p7_davet (kacir/uyar/kafes), p7_sofa (vapur/goz/sefik), p7_tavan (uc/pencere/say),
       p7_son (tepsi/bekci/izle);
     Süha yolu: p7_kic (bekle/cagir/kac), p7_soz (tekrar/baba/duy), p7_yasmak (birak/al/cek),
       p7_borc (borc/sart/kendim), p7_sofa (kiskan/uyar/soguk), p7_gece (karis/alin/sondur; GPT T26: bekci =
       akşam kapıya konan bekçi uyandırıldı, Süha fısıldayamadı; yalnız 8. bölüm çamlığında okunur),
       p7_son (in/uyar/kapat).
   Oynanış T1 Aşama B (18 Kasım 2026): keşif p7_k_igne (vapurda perdenin iğnesi; vapurda okunur), p7_k_sise ('koyun':
     sabah sandıktaki haşhaş şişesi koyna alındı; gece aramasında okunur); p7_koz ('yuzuk': akşamüstü Hatice'nin
     yüzüğü Perihan'ın önünde açıldı, koz tükenir; akşam sofrasında okunur); p7_sofa yeni değer 'bardak' (Kenan yolu,
     'İkinci şişe' kozu sezdirilir, harcanmaz). Okunan eski bayrak: p6_iskarpin (vapurda). Gizli değişkenler:
     baba_guven ≥ 60 (akşam sofrası), calibe_suphe ≥ 4 / ≥ 8 (gece ve ikindi riskli geçitlerinde gözcü ve bedel).
   Tur 27: gece vaktine üçüncü uğrak, Perihan Hanım'ın kapısı (p7_v_kulak: true; "tepsi gece yarısı"; gece merdiven
     sorusunun önünde okunur; evi ilerletmez, p7_v_ilk yazılmaz). p7_sofa yeni değer 'telgraf' (Kenan yolu, vapuru
     Feride kaçırttıysa). Okunan 6. bölüm bayrakları: p6_v_mabeyn ('goruldu'), p6_nabiz ('takas'/'calibe', Kenan yolu),
     p6_v_yelpaze ('al'/'geri'). Süha yolunda p7_borc 'kendim' haşhaş kozuyla da seçilebilir (kozGerek).
   Yeni koz: 'Hatice'nin itirafı' (kapıda sonuna kadar dinlenirse).
   Tur 27b (ortak/gpt_t27_ara_7_8.md): an_konyak kaydı bu dosyada ('in' dalında karşı sorudan sonra); vapurda Perihan'ın
     yanına dönen kızın yaşmağını hekim kendisi yakalar (Feride uzatmaz); Remzi 'perde' geri çağırması ayrı; Hatice'nin
     itirafı kendi kutusunda; söndürme dalında nükte yerine susuş; vapur iğnesinin dokunma alanı perdenin bağında.
   Küçük soru (6. bölümden; bu bölümde kapanır): hizmetçi kız şişeleri neden taşıyor? → Nabi Bey ona
     "seni evime hanım yaparım" demiş; şimdi üvey anneye borçlu.
   Yeni soru: suç kimin üstüne atılacak? → misafire hizmet eden el; merdivende tepsi, selamlıkta şişe.
   Gönül kuralı: puan = adayın ilgisi + kahramanın yakınlaşması. Yalnız uzaklaştıran cevap puan vermez;
     adayın tepkisi o anda bir satırla görünür.
   Not: görünen metinde yalnız yeni adlar; konuşan kimlikleri (calibe, reftar, mukaddem, sai, f…) eski.
   ========================================================================= */
window.BOLUMLER = window.BOLUMLER || {};

(function () {
  var V = window.OYUN_VERISI;
  // Yeni mekânların kendi görseli gelene kadar en yakın eski fon
  // (iskele: gündüz ada bahçesi; gece odası: gece odam; gece vaktinin selamlığı ve misafir odası: 8. bölümle aynı yedekler)
  /* Tur 27: vapur_guverte artık kendi resmiyle bağlı (gorseller.js); iskele yedeği kalktı, vapur ile iskele ayrı kare */
  var YEDEK = { ada_iskele: 'ada_bahce', ada_oda: 'fazila_oda',
    ada_selamlik: 'buyuk_salon', ada_misafir: 'suha_oda' };
  Object.keys(YEDEK).forEach(function (id) {
    var m = V.mekanlar[id];
    if (m && !m.arkaplan && V.mekanlar[YEDEK[id]]) m.arkaplan = V.mekanlar[YEDEK[id]].arkaplan;
  });
  /* Tur 27b: Süha yolunun konyak doruğu (an_konyak) resmi geldi; oyun_verisi.js'e taşınana kadar kaydı burada (varsa
     dokunulmaz). gorseller.js bu dosyadan önce yüklendiği için temel resmin yolu burada bağlanır. an_ada_varis üretimde. */
  var YENI_AN = { an_konyak: { ad: 'Gece yarısı denize dökülen konyak', alt: 'Ada Vapuru · Süha' } };
  Object.keys(YENI_AN).forEach(function (id) {
    ['', '_nisan_gosterisli', '_nisan_yadigar'].forEach(function (c) {
      if (V.cizimler && !V.cizimler[id + c]) V.cizimler[id + c] = { ad: YENI_AN[id].ad, alt: YENI_AN[id].alt };
    });
    if (V.cizimler && V.cizimler[id] && !V.cizimler[id].gorsel) V.cizimler[id].gorsel = 'gorsel/odul/g_odul_' + id + '.webp';
  });
  /* Tur 28 (t28_b05_08 B7 sürük 2): resmi üretimde olan an (Süha yolu, kapı bir karış). Kayıt resimsiz; motor resmi
     olmayan anı sessizce atlar (yer tutucu kart yok, an kaçırılmış sayılmaz). Resim gelince ORTAK `gorsel` alanını bağlar. */
  /* Tur 29 (t29_b05_08 B7 görsel 3, sürük 2): resimsiz dört doruk sonu için yeni an kimlikleri (üretim listesi:
     notlar/denetim/t29_uretim_b05_08.md). an_isik: Süha gecesinde kapıyı açmayan kız (alin/sondur/bekci; 'kapat' sonu);
     an_uyar: Süha yolunda Kenan'ı uyaran kız; an_esik_hatice: Kenan yolunda eşikteki Hatice'yi izleyen kız; an_bekci: Kenan
     yolunda ön merdivene bekçi oturtan kız. Resim gelene kadar motor adımı sessizce atlar (cizimAtlanan). */
  var BEKLEYEN_AN = { an_karis: { ad: 'Bir karış aralık kapı', alt: 'Ada Vapuru · Süha' },
    an_isik: { ad: 'Kapının altından çekilen ışık', alt: 'Ada Vapuru · Süha' },
    an_isik_surgusuz: { ad: 'Kapının altından çekilen ışık', alt: 'Ada Vapuru · Süha' },
    an_uyar: { ad: 'Gece yarısı misafirin kapısında', alt: 'Ada Vapuru · Süha' },
    an_esik_hatice: { ad: 'Eşikte tepsiyle bekleyen Hatice', alt: 'Ada Vapuru · Kenan' },
    an_bekci: { ad: 'Ön merdivende bekçi', alt: 'Ada Vapuru · Kenan' },
    /* GPT T29 G7-2: an_bekci resmindeki bekçi Nimet (başörtülü, tespihli); Madam'ın kendi anı (başı açık) üretimde */
    an_bekci_madam: { ad: 'Ön merdivende Madam', alt: 'Ada Vapuru · Kenan' },
    /* Tur 30 (t30_b05_08 B7 anlatı 1, karşılaşma ≠ istek): arkasını dönmüş kızın yaşmağını hekim yakalar; Feride ona
       bakmaz (üretim: scratchpad b7_t30_uretim.md → ORTAK). Resim gelene kadar adım sessizce atlanır. */
    an_yasmak_ret: { ad: 'Arkasını dönen kızın yaşmağı', alt: 'Ada Vapuru · Süha' } };
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
  /* Tur 29 (t29_b05_08 B7 görsel 1): yalnız fildişi resmi olan an (an_vapur, an_yasmak) pembe/mavi elbisede gösterilmez;
     gösterilmediği yolda an "yaşanmış" sayılır (motorun resimsiz an kaydı gibi): bölüm sonunda "Kaçırdığın an" çıkmaz */
  var anElbise = function (adim) {
    var id = adim.cizim; // adım kaynakta açık yazılır (kayitsiz_resimler.js { cizim: 'an_x' } kalıbını arar)
    return { eger: (S) => anUyar(S, id), ise: [adim], degilse: [{ islev: function (S) {
      S.cizimAtlanan = S.cizimAtlanan || []; if (S.cizimAtlanan.indexOf(id) < 0) S.cizimAtlanan.push(id); } }] };
  };

  var ITIRAF = 'Hatice\'nin itirafı';
  /* Oynanış T1 Aşama B (B1): görünür koz seçenekleri (kozGerek). Her kozGerek'in yanında kosul da var: eski
     benzetimler yalnız kosul'a bakar. YUZUK p7_itiraf'ta Perihan'ın önünde açılır (kozYak); BARDAK sofada yalnız
     sezdirilir, harcanmaz. */
  var YUZUK = 'Hatice\'nin yüzüğü', BARDAK = 'İkinci şişe';
  var b = function (S) { return S.bayrak; };
  /* B6: gizli değişkenler okunur. calibe_suphe eşikleri 4 (tetikte) ve 8 (peşinde): riskli geçitte gözcü ve bedel;
     baba_guven 60: babam akşam sofrasında Perihan'a "sen bilirsin" derken kızına da söz bırakır. */
  var suphe = function (S) { return (S.v && S.v.calibe_suphe) || 0; };
  var babaGuven = function (S) { return ((S.v && S.v.baba_guven) || 0) >= 60; };
  var muk = function (S) { return S.bayrak.p_rota === 'mukaddem'; };
  var nimetVar = function (S) { return S.bayrak.p6_ada === 'nimet'; };
  var munevverVar = function (S) { return S.bayrak.p6_ada === 'munevver'; };
  var giy = function (S) { return S.giyili === 'nisan_gosterisli' ? 'pembe' : (S.giyili === 'nisan_yadigar' ? 'mavi' : 'sade'); };
  // Tur 18 (madde 7): 5. bölümde Kenan'a yazılan not Leyla'nın eliyle ulaştı mı (sabah izlenmediyse)
  var notUlasti = function (S) { return S.bayrak.p5_fev === 'kenan' && S.bayrak.p5_sise !== 'kendi'; };
  /* Tur 22 ek (GPT öneri 2): refakat sınırlı bir görev. Akşam sofrasında tek kararla kim nerede durur:
     Şefik Kenan'ın yanında (p7_hizmet 'sefik') ya da benimle ('sus'); Nimet (yoksa Madam) kapımda ya da benimle
     (p7_v_bekci). Benimle gelen gece vaktinde refakattir ve işte yanımda görünür; kapıda kalan odayı korur.
     Aynı kişi iki yerde değil: sabah "Şefik yanımda yatsın" denmişse Şefik Kenan'ın yanına verilemez. */
  var HASHAS = 'Haşhaş şurubu';
  var var_ = function (S, k) { return (S.kozlar || []).indexOf(k) >= 0; };
  var bekciBenle = function (S) { return S.bayrak.p7_v_bekci === 'benle'; };
  var sefikBenle = function (S) { return S.bayrak.p7_hizmet !== 'sefik'; };
  /* Tur 22 ek (GPT öneri 3): ziyaret sırası. Dünya yalnız bir • iş bitince ilerler (p7_v_ilk): beyler sahilden
     döner, Süha Bey selamlığın penceresinin dışında durur, Hatice yatağı bitirip anahtarı önlüğüne alır. */
  var ilk = function (S) { return S.bayrak.p7_v_ilk; };
  // 5. bölümde sandığa gömülen haşhaş şişesi hâlâ sandıkta mı (Feride'nin üstündeyse ya da başka yerdeyse aranamaz)
  var sandiktaSise = function (S) { var k = (S.kozKaynak || {})[HASHAS]; return var_(S, HASHAS) && (!k || /sandı/i.test(k)); };
  // İşte yanımdaki: Nimet / Madam benimleyse o, değilse Şefik benimleyse o görünür ve bir satır söyler
  var yanimda = function (nimetSoz, madamSoz, sefikSoz) {
    return { eger: bekciBenle, ise: [{ eger: nimetVar, ise: [{ goster: ['mehves', 'kararli'] }, ['mehves', nimetSoz, 'kararli']],
      degilse: [{ goster: ['josephine', 'ana'] }, ['josephine', madamSoz]] }],
    degilse: [{ eger: sefikBenle, ise: [{ goster: ['sefik', 'notr'] }, ['sefik', sefikSoz, 'notr']] }] };
  };
  var YANDAKI_GIZLE = [{ gizle: 'mehves' }, { gizle: 'josephine' }, { gizle: 'sefik' }];
  // Akşam sofrasındaki görev seçeneği: Şefik Kenan'ın yanında mı (sefikKenan), Nimet / Madam kapımda mı (kapida)
  var gorevSecenegi = function (sefikKenan, kapida, kadin) {
    var ad = kadin === 'nimet' ? 'Nimet' : 'Madam';
    /* Tur 29 (t29_b05_08 B7 oynanış 4): dört düzen liste değil niyet olarak adlandırılır (koruyucu / cesur /
       kendi kapım önce / kurnaz tuzak); kim nerede iz satırında */
    var ek = kadin === 'nimet' ? ' de' : ' da';
    var m = sefikKenan
      /* Diyalog T1 (7.11, Ü1): Kenan Şefik'in ağabeyi değil; babasının önünde "Kenan Bey" */
      /* Tur 32 (B7 oynanış 1): seçenek önce stratejiyi söyler (hepsini tut / Kenan'ı koru / kendini koru / tuzak kur), sonra kimin nerede olduğunu */
      /* Tur 33 (B7 sürük 2, diyalog 5): tablo dili yerine yalın fiil cümleleri */
      ? (kapida ? ad + ' kapımda dursun, Şefik Kenan Bey\'in yanında yatsın.' : 'Şefik Kenan Bey\'in odasında yatsın; ' + ad + ' benimle gelsin.')
      : (kapida ? ad + ' kapımı beklesin; Şefik yanımda kalsın.' : 'Kapıları boş bırakıp geçeni ben yakalayayım; Şefik de ' + ad + ek + ' yanımda olsun.');
    var adimlar = sefikKenan ? [
      { goster: ['calibe', 'soguk'] },
      ['calibe', 'Çocuk rahatsız eder…', 'soguk'],
      ['sai', 'Etmez. Şefik bu gece Kenan Bey’in odasında yatacak.', 'notr'],
    ] : [
      { goster: ['sefik', 'sevincli'] },
      ['sefik', 'Ben de mi geliyorum abla? Sessiz olurum!', 'sevincli'],
      { gizle: 'sefik' },
      /* Tur 30 (t30_b05_08 B7 diyalog 1): "bile bile" sabahki kapı seçiminde (624) kaldı */
      ['ic', 'Kenan Bey\'in kapısını Hatice\'ye bıraktım. Gözüm onda.', 'endiseli'],
    ];
    adimlar = adimlar.concat(kadin === 'nimet' ? [
      { goster: ['mehves', 'kararli'] },
      kapida ? ['mehves', 'Kapınızın önünden kıpırdamam. Perihan Hanım geçse bile.', 'kararli']
        : ['mehves', 'Peşinizden ayrılmam hanımcığım. Ama odanız boş kalır.', 'endiseli'],
      { gizle: 'mehves' },
    ] : [
      { goster: ['josephine', 'ana'] },
      kapida ? ['josephine', 'Kapınızda otururum. {i}Personne n\'entre.{/i}', 'kararli']
        : ['josephine', 'Sizinle gelirim, {i}ma chère{/i}. Odanız boş kalır ama.', 'endiseli'],
      { gizle: 'josephine' },
    ]);
    var etki = { sefik: 1 }; etki[kadin === 'nimet' ? 'mehves' : 'josephine'] = 1;
    /* Oynanış T1 B2: görev düzeninin bedeli iz satırında açık (kim nerede, oda korunuyor mu) */
    var iz = (sefikKenan ? 'Şefik Kenan\'ın yanında' : 'Şefik seninle') + ', ' + ad + (kapida ? ' kapında.' : ' seninle.');
    return {
      m: m, etki: etki, iz: iz,
      bayrak: { p7_hizmet: sefikKenan ? 'sefik' : 'sus', p7_v_bekci: kapida ? 'kapi' : 'benle' },
      // Nimet Ada'da değilse Madam; sabah "Şefik yanımda yatsın" denmişse Şefik Kenan'ın yanına verilemez
      kosul: function (S) { return (kadin === 'nimet' ? nimetVar(S) : !nimetVar(S)) && (!sefikKenan || S.bayrak.p7_kapi !== 'sefik'); },
      adimlar: adimlar,
    };
  };
  // Ada planının ışık seçimi (veri/plan_ada.js); plan yüklenmemişse null (eski fonlar geçerli)
  var adaFon = function (id, isik) { var P = window.PLANLAR && window.PLANLAR.ada; return (P && P.fon) ? P.fon(id, isik) : null; };
  /* Sürükleyicilik T1 (S1): yola özel kanca işlevdir (motor typeof 'function' ile çağırır). Eski benzetim kancayı
     metin sanıp kelime sayar; işleve varsayılan metnin replace'i eklenir, motor bunu kullanmaz. */
  var KANCA_VARSAYILAN = 'Kenan aynı evde. Selamlık dolabında iki şişe vardı; biri eksildi.';
  var kancaIslev = function (f, metin) { f.replace = function () { return String.prototype.replace.apply(metin, arguments); }; return f; };

  /* ---- Serbest vakitler (motor.js serbestVakit). Mini sahneler kaçırılabilir; bayraksız akış bozulmaz. ---- */
  // 1) Öğleden akşamüstüne, Ada'da: çamlıkta Şefik (ve Kenan ya da Remzi'nin dürbünü), asma altında babam, odada Remzi'nin kartı
  var VAKIT_IKINDI = {
    ad: 'Ada\'da ikindi', hak: 2,
    hedef: { mekan: 'ada_sofa', metin: 'Akşamüstü eve dön. Ondan önce Ada senin.' },
    mekanlar: ['ada_camlik', 'ada_bahce', 'ada_oda', 'ada_sofa'],
    yerler: {
      ada_camlik: { kisi: 'sefik', ifade: 'sevincli', eylem: 'konuş', ipucu: 'Çamlıkta Şefik kozalak topluyor; seni yanına çağırıyor (konuşma).',
        adimlar: [
          'Çamlıkta Şefik kozalak topluyor; cepleri dolmuş.',
          { eger: muk, ise: [
            'Bir çamın dibinde Kenan Bey; kitabı dizinde, sayfası dönmemiş.',
            { goster: ['mukaddem', 'utangac'] },
            ['mukaddem', 'Şefik\'e kozalak saydırıyorum. Kırk üçte kaldık, siz gelince saymayı unuttu.', 'gulumser'],
            { soru: 'Şefik ikimize bakıyor.', secim: [
              { m: '“Kırk dördüncüyü ben bulayım.”', etki: { mukaddem: 4 }, bayrak: { p7_v_camlik: 'kozalak' }, adimlar: [
                'Bir kozalak bulup avucuna koydum. Parmaklarımı da saydı.',
                ['mukaddem', 'Kırk dört. Bu sayıyı unutmam.', 'gulumser'],
              ] },
              { m: 'Şefik\'in yanına otur. Kenan\'a bakma.', etki: { mukaddem: 3 }, bayrak: { p7_v_camlik: 'sefik' }, adimlar: [
                'Şefik\'in yanına oturdum. Ben bakmadım, o baktı; Şefik ikimizi de saydı.',
              ] },
            ] },
            { gizle: 'mukaddem' },
          ], degilse: [
            'Karşı tepede Remzi Bey\'in köşkü. Bir pencerede cam parladı: dürbün.',
            ['sefik', 'Abla, o adam bizi seyrediyor! El sallayayım mı?', 'sevincli'],
            { soru: 'Cam yine parladı.', secim: [
              { m: 'El salla. Şefik de sallasın.', etki: { remzi: 3 }, bayrak: { p7_v_camlik: 'salla' }, adimlar: [
                'İkimiz el salladık. Pencerede cam indi, sonra yine kalktı.',
              ] },
              { m: 'Şefik\'i çamların ardına çek.', bayrak: { p7_v_camlik: 'saklan' }, adimlar: [
                ['ic', 'Ada\'da gizli yer az. Bulduğumu dürbüne vermem.', 'tebessum'],
              ] },
            ] },
          ] },
        /* Tur 27 (diyalog 4): romanın mevsimi bahar; ağustosböceği yazın öter */
        ], bos: 'Çamlık boş; yalnız çam kozalakları çıtırdıyor.' },
      ada_bahce: { kisi: 'sai', ifade: 'gulumser', eylem: 'konuş', ipucu: 'Babam asmanın altında; fesini çıkarmış (konuşma).',
        adimlar: [
          'Asmanın altında babam. Fesini çıkarmış, gazetesi dizinde.',
          ['sai', 'Annen bu adayı severdi. Çamlığın yolunu bana o göstermişti.', 'mahzun'],
          /* Tur 31 (t31_b05_08 B7 sürük 4): ikindi uğrağı gece dolabına ipucu verir */
          ['sai', 'Selamlığa bir dolap koymuşlar. Ben içmem; Perihan misafir için dedi.', 'notr'],
          { soru: 'Babam denize bakıyor.', secim: [
            { m: '“Annemi anlatın babacığım.”', etki: { baba_guven: 2 }, bayrak: { p7_v_baba: 'anne' }, adimlar: [
              /* GPT T25 Kenan (B7 sürük.): mavi benzetmesi Kenan'da kaldı; babanın hatırası yeni bilgi verir */
              ['sai', 'Vapurda hep kıça otururdu, perdenin bittiği yere. Ben öbür yanda dururdum.', 'mahzun'],
              /* Tur 30 (B7 diyalog 2): utanacak bir şey yok; ifade mahzun */
              ['ic', 'Perihan Hanım\'dan uzakta annemin adı babamın ağzına daha kolay geliyor.', 'mahzun'],
            ] },
            { m: 'Yanına otur; gazetesini katla.', etki: { baba_guven: 1 }, bayrak: { p7_v_baba: 'gazete' }, adimlar: [
              { efekt: 'kagit' }, 'Gazetesini katladım. Babam bir şey demeden elimi tuttu.',
            ] },
          ] },
        ], bos: 'Asmanın altında boş bir hasır iskemle.' },
      ada_oda: { eylem: 'karta bak', ipucu: 'Odanın kapısının altında altın yaldızlı bir kart var (eşya).',
        adimlar: [
          'Odam üst katta; penceresi karşı köşke bakıyor, perdesi henüz yok.',
          { efekt: 'kagit' }, 'Kapının altında altın yaldızlı bir kart.',
          '“Perdenizi ben asarım, Lyon tülü; ölçüsünü pencerenizden aldım. —R.”',
          ['ic', 'Ölçüyü pencereden almış, hem de kendi köşkünden.', 'ofkeli'],
          { soru: 'Pencere çıplak, kart elimde.', secim: [
            { m: 'Pencereye annemin şalını ger.', bayrak: { p7_v_pencere: 'sal' }, adimlar: [
              'Şalı pencereye gerdim. Karşı köşkte bir cam parladı, sonra söndü.',
            ] },
            /* Tur 29 (B7 oynanış 3): gönül adayın ilgisidir; Remzi kartın saklandığını görmez, puan yok */
            { m: 'Kartı yırtma; sandığına koy.', bayrak: { p7_v_pencere: 'kart' }, adimlar: [
              /* Diyalog T1 (D4): "pahalı" Remzi'nin sözü; Feride kendi imgesiyle */
              ['ic', 'Kartı sandığa koydum. Remzi Bey’in bu sözüne yeniden ihtiyacım olabilir.', 'tebessum'],
            ] },
          ] },
        ], bos: 'Odam sandık kokuyor; pencere çıplak.' },
    },
    /* Anlatı T2 (mercek_doz §2): vakit bitişi dış olay; anlatıcı söyler, zaman atlamasını da o taşır */
    bitis: [['an', 'Çamların gölgesi eve kadar uzanınca Feride döndü. Ev, deniz tutan hanımın hatırına susmuştu.']],
  };
  // 2) Akşam yemeğinden sonra, beyler sahildeyken: selamlık dolabı, misafir odasının anahtarı.
  //    Tur 22 ek (GPT öneri 3): iki iş, iki hak; sıra evi değiştirir. İlk iş bitince (p7_v_ilk) beyler döner.
  //    Önce dolap: dolap sessiz; sonra Hatice yatağı bitirmiş, anahtar önlüğünde: ancak şartıyla verir.
  //    Önce anahtar: anahtar sessizce yastığa; sonra Süha Bey selamlığın penceresinde: dolabı açan görülür.
  //    Risk • işin ipucunda iş başlamadan yazılır; vazgeçmek (işe dokunmamak) hak yemez.
  var VAKIT_GECE = {
    ad: 'Yatmadan önce', hak: 2,
    /* Tur 33 (B7 oynanış 2): görünmeyen sıra kuralı oyuncuya söylenir */
    hedef: { mekan: 'ada_oda', metin: 'Beyler sahilden dönmeden evi dolaş. Döndüklerinde alt kat onların; ilk işini dikkatli seç. Sonra odana çık.' },
    mekanlar: ['ada_selamlik', 'ada_misafir', 'ada_kapi_perihan', 'ada_oda'],
    yerler: {
      ada_selamlik: { eylem: 'dolaba bak',
        ipucu: (S) => (ilk(S)
          ? 'Süha Bey selamlığın penceresinin dışında sigara içiyor; dolabın lambalı camı tam önünde. Açarsam görür.'
          : 'Selamlık boş; dolabın camında lamba ışığı (eşya). Beyler dönünce ilk buraya gelir.'),
        adimlar: [
          { eger: ilk, ise: [
            'Selamlıkta lamba yalnız dolabın camında. Pencerenin dışında bir sigara ucu: Süha Bey.',
          ], degilse: [
            'Selamlık boş, erkekler sahilde. Dolabın camında lamba ışığı.',
          ] },
          yanimda('Lambayı ben tutarım hanımcığım. Gördüğümü unutmam.', 'Ben arkanızdayım, {i}ma chère{/i}. Gözüm kapıda.',
            'Abla, şişeler mi? Ben saymayı bilirim!'),
          /* Tur 28: 6. bölümde sandık sahnesi zorunlu (p6_v_konyak her yolda); şişeler her yolda tanınır */
          'Dolapta mühürleri sağlam iki şişe konyak. Konaktan, Perihan Hanım\'ın sandığında geldiler.',
          ['ic', 'Babam içmez. Bu şişeler kime geldi?', 'endiseli'],
          { soru: 'Dolabın kapağı elimde.', secim: [
            /* Tur 30 (t30_b05_08 B7 oynanış 2): uğrağın gece neyi açtığı iz satırında */
            { m: 'Öndekinin mührüne tırnağınla çentik at.', bayrak: { p7_v_dolap: 'centik' },
              iz: 'Mühre çentik attın. Sabah hangi şişenin dolaptan indiğini sen bileceksin.', adimlar: [
              'Mumu tırnağımla çentikledim. Küçük bir iz, bilen görür.',
            ] },
            { m: 'Dokunma. Dolabı kapat, yerini bil.', bayrak: { p7_v_dolap: 'bak' },
              iz: 'Dokunmadın. Şişeyi gece tanırsın, ama elinde iz olmaz.', adimlar: [
              ['ic', 'Dokunmadım. Sabah hangisinin eksildiğine bakarım.', 'kararli'],
            ] },
          ] },
          ...YANDAKI_GIZLE,
          { eger: ilk, ise: [
            /* Önce anahtar yolu: gerçek hareket görüldü; refakat görülmeyi silmez */
            { bayrak: { p7_v_goren: 'suha' } },
            { eger: (S) => bekciBenle(S) || sefikBenle(S), ise: [
              ['ic', 'Yanımda biri vardı, Süha Bey camdan yine de gördü. Sabah kendi diliyle anlatacak.', 'endiseli'],
            ], degilse: [
              ['ic', 'Camın ardında sigara durdu, Süha Bey beni gördü. Sabah kendi diliyle anlatacak.', 'endiseli'],
            ] },
          ], degilse: [
            { bayrak: { p7_v_ilk: 'dolap' } },
            'Bahçe kapısında sesler: beyler sahilden döndü. Alt katta Hatice\'nin sesi: “Yatak hazır.”',
          ] },
        ], bos: 'Selamlıkta yalnız tütün kokusu.' },
      ada_misafir: { kisi: 'reftar', ifade: 'somurtkan', eylem: 'anahtar',
        ipucu: (S) => (ilk(S)
          ? 'Hatice yatağı bitirdi; anahtar artık önlüğünde. Bırakmasını yüzüne karşı istemem gerek.'
          : 'Misafir odasında Hatice yatağı açıyor; anahtar kilidin üstünde. İlk işim bitince yatağı bitirip anahtarı toplar.'),
        adimlar: [
          { eger: ilk, ise: [
            /* Önce dolap yolu: sessizce yastığa koyma fırsatı kapandı */
            'Hatice yatağı bitirmiş. Anahtar kilitte değil, önlüğünün cebinde.',
            ['reftar', 'Anahtarı Perihan Hanım\'a götürüyorum. Misafir kilit bilmez.', 'somurtkan'],
            yanimda('Ben buradayım Hatice. Ne dersen ikimiz duyarız.', 'Ben de buradayım. Söz iki kulakla daha sağlam.',
              'Hatice abla, o anahtar kimin?'),
            ['f', 'Anahtarı bana ver Hatice.', 'kararli'],
            ['reftar', 'Veririm. Sabah Perihan Hanım\'dan önce beni de dinleyeceksiniz.', 'kararli'],
            { soru: 'Anahtar onun avucunda, şartı ortada.', secim: [
              { m: '“Söz. Sabah seni de dinlerim.”', bayrak: { p7_v_anahtar: 'yastik', p7_v_hatice: 'soz' }, adimlar: [
                { efekt: 'anahtar' }, 'Anahtarı yastığın altına kendi eliyle sürdü.',
                /* Diyalog T1 (7.13): örtü cümlesi doğru yönde; anahtarı Hatice koydu */
                ['reftar', 'Ben koymadım, siz görmediniz. Sabah konuşuruz.', 'korkmus'],
                ['ic', 'Yalnız anahtar için değil. Akşamüstü kapının ardında ağlayan oydu.', 'mahzun'],
              ] },
              { m: '“Pazarlık etmem. Götür anahtarını.”', bayrak: { p7_v_anahtar: 'yok', p7_v_hatice: 'ret' }, adimlar: [
                'Hatice anahtarı önlüğüne geri koydu. Kapıyı aralık bırakıp çıktı.',
                ['ic', 'Dolabı gördüm ama kilit yine Perihan Hanım\'ın.', 'mahzun'],
              ] },
            ] },
          ], degilse: [
            'Misafir odasında Hatice yatağı açıyor. Kapıda Perihan Hanım\'ın sesi.',
            ['calibe', 'Lambayı kısık bırak. Kapıyı kilitleme, misafir kilit bilmez.', 'soguk'],
            'Perihan Hanım uzaklaştı. Anahtar kilidin üstünde duruyor.',
            yanimda('Anahtar orada hanımcığım. Ben eşiği tutarım.', 'Anahtar orada. Ben eşikte dururum.',
              'Abla, anahtar! Ben alayım mı?'),
            { soru: 'Hatice yastıkları kabartıyor.', secim: [
              { m: 'Anahtarı al; yastığın altına koy.', bayrak: { p7_v_anahtar: 'yastik' }, adimlar: [
                { efekt: 'anahtar' }, 'Anahtarı yastığın altına sürdüm. Hatice gördü ama bir şey demedi.',
                /* GPT T26 Süha (B7 diyalog 2): vecize yerine yarım, kaygılı düşünce */
                ['ic', 'Yastığını düzeltirken eli değsin yeter. Hatice söylemezse…', 'mahzun'],
              ] },
              { m: 'Anahtara dokunma. Hatice\'ye bak.', bayrak: { p7_v_anahtar: 'yok' }, adimlar: [
                ['reftar', 'Bana öyle bakmayın küçük hanım. Emir emirdir.', 'somurtkan'],
              ] },
            ] },
            { bayrak: { p7_v_ilk: 'anahtar' } },
            'Ön kapıda sesler: beyler sahilden döndü. Selamlığın penceresinde bir sigara ucu yandı.',
          ] },
          ...YANDAKI_GIZLE,
        ], bos: 'Misafir odası hazır; lamba kısık.' },
      /* Tur 27 (oynanış 2): üçüncü uğrak; iki hak, üç iş: kıtlık gerçek. Kulak vermek evi değiştirmez (p7_v_ilk
         yazılmaz; beyler hâlâ sahilde); öğrenilen saat gece merdiven sorusunun önünde okunur (p7_v_kulak). */
      ada_kapi_perihan: { eylem: 'kulak ver',
        ipucu: 'Perihan Hanım\'ın kapısının altından ışık sızıyor; içeride iki ses (kulak misafiri).',
        adimlar: [
          'Perihan Hanım\'ın kapısının altından ışık sızıyor. İçeride iki ses: onunki ve Hatice\'nin.',
          /* Tur 33 (ifade envanteri 14): baş başa buyruk ve tuzak soğuk yüzle */
          ['calibe', 'Tepsiyi gece yarısı indirirsin. Ondan önce değil, ev uyusun.', 'soguk'],
          ['reftar', 'Misafir içmezse hanımım?', 'korkmus'],
          ['calibe', 'İçmesi gerekmez. Sabah şişe boş olur, kapı onun.', 'soguk'],
          { bayrak: { p7_v_kulak: true } },
          { soru: 'İçeride sustular. Kapının ardındayım.', secim: [
            /* Tur 28 (B7 oynanış 1): iki cevap ayrı bayrak; vuran kızın sorusu ("Saatini değiştirir mi?") gece cevap bulur */
            { m: 'Geri çekil. Duyduğunu sakla.', bayrak: { p7_v_kulak: 'sus' }, adimlar: [
              /* Tur 29 (B7 diyalog 5): akıl yürütme satırı öfkeli portreyle gösterilmez */
              ['ic', 'Gece yarısı. Saatini artık ben de biliyorum.', 'kararli'],
            ] },
            { m: 'Kapıya bir kez vur: “İyi geceler Perihan Hanım.”', etki: { vakar: 1, calibe_suphe: 1 }, bayrak: { p7_v_kulak: 'vur' }, adimlar: [
              /* Tur 29 (B7 ses 1): kapı açılmıyor, vuruluyor */
              { efekt: 'kapi_tik' },
              ['calibe', 'İyi geceler kızım. Geç oldu, yat artık.', 'soguk'],
              ['ic', 'Duyduğumu bildi. Saatini değiştirir mi, yoksa bana mı güvenir?', 'endiseli'],
            ] },
          ] },
        ], bos: 'Perihan Hanım\'ın kapısı karanlık.' },
    },
    /* Tur 27 (anlatı 2): dış olay anlatıcıda */
    bitis: [['an', 'Merdivende bir lamba belirdi. Feride odasına, lambayı tutana yüzünü göstermeden çıktı.']],
  };

  /* ---- Gezinme katmanı (plan modu, veri/plan_ada.js; notlar/gezinme_tasarimi.md). Yürümek bedava, • iş 1 vakit.
     İkindi (iskeleden başlar): babam bahçede asmanın altında, Şefik çamlıkta (Kenan yolunda Kenan da),
     Perihan Hanım'ı vapurda deniz tutmuş ("Perihan Hanım'ın yüzü yeşil"; akşamüstü kapısı aralık, içeride
     Hatice). Kapalı: Perihan Hanım'ın kapısı (akşamüstüne kadar). Riskli, gözcüsüz: selamlığın perdesi
     ("Alt katın bir yanı erkeklere ayrılmış; arada yalnız bir perde"), iskele ve bahçe duvarı (Ada'da yalnız
     gidilmez); çamlık refakatle (Şefik orada, "seni yanına çağırıyor"). ★ sofa merdivenin başı olduğu için
     odadaki kart ancak asmadan tırmanılarak alınır (plan 'ada_asma'; gözcüsüz, babam gazetesine gömülü).
     Gece ("Erkekler sahilde; ev bir saatliğine senin"): selamlık ve misafir odası açık. Kapalı: iskele
     (Feride'nin kendi sınırı: erkekler sahilde). Riskli, gözcüsüz: çamlık, bahçe duvarı; ilk iş bitince
     selamlık da (beyler döndü). Benimle gelen Nimet / Madam / Şefik refakattir. Bedel uydurulmadı: gözcüsüz
     geçişte yalnız iz satırı; Süha Bey'in görmesi geçitte değil, dolap işinin içinde ve ipucunda önceden yazılı. */
  var yalniz = function (sonuc, iz) { return { gozcu: null, uyari: 'yalnız gidilmez', sonuc: sonuc, iz: iz }; };
  /* Oynanış T1 B6: Perihan Hanım "tetikte"yse (calibe_suphe ≥ 4) gece koridor penceresinden bakar; yalnız geçişin
     gözcüsü ve bedeli olur (refakat varsa motor gözcüye hiç bakmaz) */
  var tetikte = function (r) {
    r.gozcu = (S) => (suphe(S) >= 4 ? 'Perihan Hanım' : null);
    r.uyari = (S) => (suphe(S) >= 4 ? 'Perihan Hanım koridor penceresinde' : 'yalnız gidilmez');
    r.bedel = { etki: { calibe_suphe: 1 }, ic: 'Koridorun penceresinde bir lamba durdu. Perihan Hanım beni yalnız gördü.' };
    return r;
  };
  var gezinme = function (v, g) { Object.keys(g).forEach(function (k) { v[k] = g[k]; }); return v; };
  gezinme(VAKIT_IKINDI, {
    plan: 'ada_asma',
    kapali: {
      ada_kapi_perihan: { etiket: 'kapalı', neden: 'Perihan Hanım\'ı vapurda deniz tuttu. Akşamüstüne kadar odasında; kapısını kimseye açmıyor.' },
    },
    riskli: {
      ada_selamlik: { gozcu: null, uyari: 'erkekler tarafı, perde',
        sonuc: 'Alt katın bu yanı erkeklere ayrılmış; arada yalnız bir perde.',
        iz: 'Selamlığın perdesini araladım. Erkekler tarafı boştu; perde ardımdan kendiliğinden kapandı.' },
      ada_iskele: yalniz('Ada\'da genç kız iskeleye yalnız inmez.',
        'İskele yokuşunu yalnız indim. Boş faytonlar hâlâ dizili; kimse başını çevirmedi.'),
      ada_duvar: yalniz('Bahçe duvarının ardı yol; duvarın dibine yalnız gidilmez.',
        'Duvarın dibine kadar yürüdüm. Yolda kimse yoktu.'),
      ada_camlik: { gozcu: null, uyari: 'yalnız gidilmez', sonuc: 'Ada\'da çamlığa yalnız çıkılmaz.',
        refakat: function () { return true; },
        refakatMetin: 'Şefik çamlıkta, beni yanına çağırıyor. Yalnız sayılmam.',
        iz: 'Çamlığa yalnız çıktım.' },
      /* Oynanış T1 B6: Perihan Hanım "peşinde"yse (calibe_suphe ≥ 8) penceresinden Hatice bakar; geçiş bedellidir */
      ada_oda: { gozcu: (S) => (suphe(S) >= 8 ? 'Hatice' : null),
        uyari: (S) => (suphe(S) >= 8 ? 'asmadan; Hatice Perihan Hanım\'ın penceresinde' : 'asmadan'),
        sonuc: 'Odama asmadan, penceremden tırmanırım. Ada\'da genç kız asmaya tırmanmaz.',
        bedel: { etki: { calibe_suphe: 1, itibar: -1 }, ic: 'Perihan Hanım\'ın penceresinde Hatice\'nin yüzü. Akşama haber gider.' },
        iz: 'Asmadan penceremize tırmandım. Babam gazetesine gömülüydü; başını kaldırmadı.' },
    },
  });
  gezinme(VAKIT_GECE, {
    plan: 'ada',
    // Tur 22 ek: akşam sofrasında benimle gelmesini istediğim kişi (Nimet / Madam ya da Şefik) refakattir
    refakat: function (S) { return bekciBenle(S) || sefikBenle(S); },
    kapali: {
      ada_iskele: { etiket: (S) => (ilk(S) ? 'beyler döndü' : 'erkekler sahilde'),
        neden: (S) => (ilk(S)
          ? 'Beyler sahilden döndü; babam bahçede. İskeleye inersem önüne çıkarım; inmem.'
          : 'Erkekler sahilde geziyor. Gece iskeleye inersem babamın önüne çıkarım; inmem.') },
    },
    riskli: {
      // İlk iş bitince alt kat yeniden erkeklerin: yalnız inmek uygunsuz (gözcüsüz; refakatle güvenli)
      ada_selamlik: { kosul: (S) => !!ilk(S), gozcu: null, uyari: 'beyler döndü',
        sonuc: 'Beyler sahilden döndü; alt kat yine erkeklerin. Gece oraya yalnız inilmez.',
        refakatMetin: 'Yanımda biri var; alt kata yalnız inmiş sayılmam.',
        iz: 'Alt kattan yalnız geçtim. Beylerin sesi bahçeden geliyordu; başını çeviren olmadı.' },
      ada_camlik: tetikte(yalniz('Gece çamlığa yalnız çıkılmaz.',
        'Karanlıkta çamların arasına kadar yürüdüm. Sahilden erkeklerin sesi geliyordu; beni duyan olmadı.')),
      ada_duvar: tetikte(yalniz('Bahçe duvarının ardı yol; gece duvarın dibine yalnız gidilmez.',
        'Gece duvarın dibine kadar yürüdüm. Yol karanlıktı; kimse geçmedi.')),
    },
  });

  window.BOLUMLER[107] = {
    no: 107,
    baslik: 'Yeni 7. Bölüm',
    ad: 'Ada Vapuru',
    dogrusal: true,
    adaylar: ['mukaddem', 'suha', 'remzi'],
    ilkFaz: 'A',
    baslangic: 'fazila_oda',
    fazlar: { A: { mekanlar: ['fazila_oda', 'vapur_guverte', 'ada_iskele', 'ada_sofa', 'ada_oda', 'ada_camlik', 'ada_bahce', 'ada_selamlik', 'ada_misafir', 'ada_kapi_perihan'], baglanti: {} } },
    gorevler: [],
    fon: function (S, mekanId) {
      // Konaktaki son sabah gündüz; vapur ve iskele gündüz; ada sofası akşamüstü, ada odası gece
      if (mekanId === 'fazila_oda' && S.gorev === 0) return 'fazila_oda_gunduz';
      // Plan modu (veri/plan_ada.js): ikindi vakti (3) gün ışığında, gece vakti (5) gece ışığında;
      // çeşidin kendi resmi yoksa null döner ve aşağıdaki eski fon geçerli kalır
      var f = S.gorev === 3 ? adaFon(mekanId, 'gunduz') : (S.gorev === 5 ? adaFon(mekanId, 'gece') : null);
      if (f) return f;
      // İkindi serbest vaktinde ada odası gündüz ışığında
      /* Tur 34 (B7 görsel): Ada odası İstanbul odasına dönmez */
      return null;
    },

    acilis: [
      /* Bölüm açılışı: 6. bölümün yolu ve kapıdaki gece; Süha yolunda uzun süredir görünmeyen Kenan
         tanıtılır. ("Bugün konuşulan" kartı Ada'ya varış anlatısına katıldı.) */
      { anlati: { gorsel: 'konak_sofa_gunduz', baslik: '7. Bölüm · Ada Vapuru', satirlar: [
        /* Tur 18 (madde 15): 6. bölüm defterini yinelemez. Tek kısa geri dönüş satırı kalır; gece kapıdaki
           cevabı sabah odasındaki iç ses zaten karşılıyor (eski ikinci satır çıkarıldı). */
        /* Anlatı denetimi T1 (17 Kasım 2026): açılış anlatıcı sesine çevrildi (3. kişi, geçmiş zaman) */
        /* Anlatı T2 (7.8): açılış 6. bölümün son anını, gece kapıyı iki kez çalan Süha'yı da karşılar (p6_son) */
        (S) => (muk(S)
          ? ({
            /* GPT T25 Kenan (B7 sürük.): geçmiş tek bağ; cümle bugünün fırsatına, denize döner */
            adim: 'Mabeyn kapısında yarım kalan adımı Sait Efendi\'nin öksürüğü bölmüştü. Feride o adımı bugün, denizin ortasında tamamlayacaktı.',
            ada: 'Feride Kenan\'a bir vade vermişti: “Ada\'da.” Vade o sabah başlıyordu.',
            sohbet: 'Dün mabeynde Ada’yı konuşmuşlardı. Kenan şimdi ona iskeleyi gösterebilirdi.',
            /* Tur 27b (GPT B6-O3): mabeyn kapısında yakınlığı kesen kıza alın yakınlığı yazılmaz */
            cik: 'Kenan mabeynde yolunu kesmemişti.',
          }[b(S).p6_yakin] || 'Mabeyn kapısında Kenan alnını Feride\'nin alnına dayamış, öpmemişti. Feride bunu bir eksiklik değil, bir söz gibi saklamıştı.')
          : ({
            yaklas: 'Çardakta Feride\'nin tuttuğu el, o sabah aynı vapura binecekti.',
            cagir: 'Çardakta “Siz gelin” dediği adam, o sabah aynı vapura binecekti.',
          }[b(S).p6_cardak] || 'Çardaktan arkasına bakmadan kalkıp gittiği adam, o sabah aynı vapura binecekti.')
            + ' ' + ({
              ac: 'Feride gece kapısını ona açmış, adını beysiz söylemişti.',
              sor: 'Feride gece kapısında “Neyimsiniz?” diye sormuş, cevabı Ada\'ya kalmıştı.',
            }[b(S).p6_son] || 'Gece kapısının ardında “Dayınız değilim” demiş, “şimdilik” diye gitmişti.')),
        /* Tur 29 (t29_b05_08 B7 anlatı 9): Kenan yolunda iki sözlük tek satırda üç cümleye çıkıyordu; Süha cümlesi ayrı satır
           (Süha yolunda boş döner, motor atlar). Satır sayısı sınırı için Nimet cümlesi Kenan yolunda Sait satırına katıldı. */
        /* GPT T26 Süha (B7 anlatı 1): Süha yolunda gerdanlık günü Kenan'la görüşme yok; dala bağımlı olmayan satır */
        (S) => (!muk(S) ? 'Bir yıllık sözlüsü {b}Kenan{/b}\'ın adı ise son günlerde konakta yalnız başkalarının ağzından geçiyordu.' : ({
          sor: 'Gece kapısını iki kez çalan Süha Bey ise Ada\'da bir gece istemişti.',
          calibe: 'Gece kapısını iki kez çalan Süha Bey\'e ise Perihan Hanım\'ın kapısında diz çöktüğünü hatırlatmıştı.',
        }[b(S).p6_son] || 'Kapısını iki kez çalan Süha Bey’e açmamıştı.')),
        /* Tur 30 (t30_b05_08 B7 anlatı 3): açılış bir yolda beş satıra çıkıyordu; en çok dört. Ev ile sürgüsüz kapı tek
           satırda (soru ilk seçimin sorusunda zaten soruluyor); Süha yolunda Kenan cümlesi Süha'nın yukarıdaki satırının
           yerini alır; Madam ve mabeyn tanığı (kapıyı kimin tutup kimin gözetleyeceği) tek satırda.
           Sürükleyicilik T1 (S4) / Anlatı T2 (7.4) / Tur 27 (anlatı 4) / GPT T25-T26 (B7 anlatı 1) gerekçeleri geçerli. */
        /* Tur 33 (B7 anlatı 1): kimin düğünü olduğu açık */
        (S) => 'Sait Efendi Büyükada’da bir ev tutmuştu. O evin kapılarında sürgü yoktu.',
        (S) => (b(S).p6_v_mabeyn === 'goruldu' ? 'Hatice mabeynde gördüğünü hanımına çoktan taşımıştı.' : ''),
      ] } },
    ],

    olaylar: [
      /* ---------------- 1. Konakta son sabah ---------------- */
      {
        id: 'p7_sabah', mekan: 'fazila_oda', tetik: 'giris', kosul: (S) => S.gorev === 0, sahne: [],
        adimlar: [
          ['an', 'Sandıklar taşlığa inmiş, yalnız Feride\'ninki kalmıştı.'],
          /* Tur 32 (B6 anlatı 1): Leyla'nın "Kendi gözümle bakacağım" sözü karşılık bulur */
          { eger: (S) => b(S).p6_fev === 'anlat', ise: [
            'Leyla\'nın lalası kapıda bir pusula uzattı: “Söz verdim, kendi gözümle bakıyorum. Döndüğünde anlatırım. —L.”',
          ] },
          /* Oynanış T1 B5 (b5_8 7 (b)3): kayıp ajanslı olsun. Haşhaş şişesi hâlâ sandıktaysa oyuncu onu koynuna alabilir;
             gece oda boşken yapılan arama o zaman boş sandık bulur (p7_k_sise, p7_gece'de okunur). */
          { eger: sandiktaSise, ise: [
            { kesif: { x: 10, y: 50, w: 18, h: 24, ad: 'Sandığın dibi', adimlar: [
              'Şalların arasında haşhaş şişesi. Feracemin iç cebine aldım.',
              ['ic', 'Ada\'da sandıkları başkaları da açar.', 'endiseli'],
              /* kaynakta "sandı" geçmez: sandiktaSise bu kelimeye bakar */
              { kozKaynak: [HASHAS, 'Feracemin iç cebinde; koynumda'] },
              { bayrak: { p7_k_sise: 'koyun' } },
            ] } },
          ] },
          { eger: muk, ise: [
            /* 6. bölüm sonu: kapıdaki hekime verilen cevap.
               Tur 29 (t29_b05_08 B7 sürük 1): 'calibe' dalında ilk seçim 8. satırı aşıyordu; "tek şey" iç sesi bu dalda
               yok (Perihan'ın eşikteki gözü aynı soruyu kuruyor), anlatıcı satırı kısaldı */
            { eger: (S) => b(S).p6_son === 'calibe', ise: [
              ['an', 'Perihan Hanım eşikte durup haberi yine kapı aralığından verdi.'],
              { goster: ['calibe', 'sinsi'] },
              ['calibe', 'Hekim Bey bana mabeyn kapısında diz çöken bir damat anlattı. Ada\'da gözüm üstünde kızım.', 'sinsi'],
              { gizle: 'calibe' },
              ['ic', 'Masalı Süha Bey taşıdı. Ada\'da kimin gözü kimde, göreceğiz.', 'kararli'],
            ], degilse: [
              /* Tur 30 (t30_b05_08 B7 sürük 2): "Bugün tek bir şey istiyorum" kalıbı üç bölümdür açılışta; 7'de kalktı */
              { eger: (S) => b(S).p6_kandil !== 'yuz', ise: [
              /* Tur 31 (t31_b05_08 B7 anlatı 2): 6. bölümün lamba kancası karşılanır (ipucu, hüküm değil) */
              ['ic', 'Dün gece koridorun ucundaki lamba benimkinden geç söndü. Sabah Hatice\'nin gözleri kızarıktı.', 'mahzun'],
            ] },
            /* Tur 32 (B7 diyalog 1): anlamı bulanık "kapısı olmayan saat" sadeleşti */
            { eger: (S) => b(S).p6_son === 'sor', ise: [
              ['ic', 'Süha Bey “Ada\'da bir gece” istedi. Ada\'nın gecesini ona bırakmam.', 'kararli'],
            /* Tur 32 (B6 oynanış 1): dün gece kapıyı neyin tuttuğu (p6_kilit) sabah ayrı iz bırakır */
            ], degilse: [{ eger: (S) => b(S).p6_kilit === 'takoz', ise: [
              ['ic', 'Süha Bey “Takozu Ada\'ya da götürün” dedi. Alay etti; ama götüreceğim.', 'kararli'],
            ], degilse: [{ eger: (S) => b(S).p6_kilit === 'sandik', ise: [
              ['ic', 'Dün gece kapıyı annemin sandığı tuttu. “Ada\'ya taşınmaz” dedi; taşınır.', 'kararli'],
            ], degilse: [{ eger: (S) => b(S).p6_kilit === 'surgu', ise: [
              ['ic', 'Süha Bey “Ada\'daki kapılar eski” dedi. Sürgümü söktürüp yanımda götürürüm.', 'kararli'],
            ], degilse: [
              ['ic', 'Ada’da kapılar sürgüsüzmüş. Sürgümü yanımda götürürüm.', 'kararli'],
            ] }] }] }] }] },
          ], degilse: [
            { eger: (S) => b(S).p6_son === 'ac', ise: [
              ['ic', 'Dün gece onun adını beysiz söyledim. Gün ışığında da söyleyebilecek miyim?', 'utanmis'],
              ['an', 'Perihan Hanım koridordan geçerken eşikte durdu. Gece duyduğunu sabaha saklamak onun eski âdetiydi.'],
              { goster: ['calibe', 'soguk'] },
              ['calibe', 'Gece koridorda bir ad duydum. Beysiz, efendisiz; pek yalın.', 'soguk'],
              { gizle: 'calibe' },
              /* Diyalog T1 (7.17): kim kimi tartıyor, açık */
              ['ic', 'Duymuş. O adı tartıyor, ben de onu.', 'kararli'],
            ], degilse: [{ eger: (S) => b(S).p6_son === 'sor', ise: [
              ['ic', 'Neyim olduğunu sordum, “Ada\'da” dedi. Ada bugün, cevabı da bugün.', 'utanmis'],
            ], degilse: [
              ['ic', 'Ada\'da da kapım benim.', 'kararli'],
              /* Tur 28b (kök 2): kapıyı açmayan / konuşmayan kızın iç sesi "şimdilik"i umut gibi tartmaz */
              ['ic', '“Şimdilik” demişti. Benim için o kapı kapandı; onun için kapanmadığını biliyorum.', 'kararli'],
            ] }] },
          ] },
          { soru: 'Ada\'da gece kapımı kim tutacak?', secim: [
            { m: 'Sürgümü söktür, sandığa koy.', kosul: (S) => b(S).p6_karar === 'surgu', etki: { vakar: 1 }, bayrak: { p7_kapi: 'surgu' },
              iz: 'Sürgün Ada\'ya geliyor. Kapını kendi elinle kilitleyeceksin.', adimlar: [
              { efekt: 'surgu' }, 'Marangoz sürgüyü söktü. Sandığın en üstüne, annemin şalının üstüne koydum.',
            ] },
            { m: 'Marangozdan bir sürgü al, sandığa koy.', kosul: (S) => b(S).p6_karar !== 'surgu', etki: { vakar: 1 }, bayrak: { p7_kapi: 'surgu' },
              iz: 'Sürgün Ada\'ya geliyor. Kapını kendi elinle kilitleyeceksin.', adimlar: [
              { efekt: 'surgu' }, 'Marangozun çırağı bir sürgü getirdi. Sandığa, annemin şalının üstüne koydum.',
            ] },
            /* Tur 30 (ORTAK, t30 B6 oynanış b1): 6. bölümde sustuğu gece için Nabi Bey'i borçlu bırakan kız ('borc') borcu
               bir kez kullanır: kendi kapısının sürgüsünü ona getirtir. Nabi'nin Ada'dan uzak tutulduğu yolda ('nabi') açılmaz.
               p7_kapi aynı ('surgu'); sonraki bölümler değişmeden okur. */
            { m: 'Sürgüyü Nabi Bey getirsin. Gecenin hesabından düşsün.', kosul: (S) => b(S).p6_karar === 'borc' && b(S).p6_ada !== 'nabi', etki: { vakar: 1 }, bayrak: { p7_kapi: 'surgu' },
            iz: 'Kapının sürgüsünü Nabi Bey kendi eliyle getirdi. Gecenin hesabı bir kez işledi, kapanmadı.', adimlar: [
              { goster: ['nabi', 'mahcup'] },
              'Nabi Bey taşlıkta sürgüyü bir beze sarıp uzattı, gözünü kaldırmadı.',
              ['nabi', 'Borcum var küçük hanım, bunu sayın.', 'mahcup'],
              { gizle: 'nabi' },
              { efekt: 'surgu' }, 'Sandığa, annemin şalının üstüne koydum. Hesabın gerisi duruyor.',
            ] },
            { m: 'Nimet yatağını kapımın önüne sersin.', kosul: nimetVar, etki: { mehves: 1 }, bayrak: { p7_kapi: 'nimet' }, adimlar: [
              { goster: ['mehves', 'kararli'] },
              /* Tur 27 (6. bölüm oynanış 5): taşlıkta verilen Ada sözü (p6_v_nimet) tutulur */
              { eger: (S) => !!b(S).p6_v_nimet, ise: [
                ['mehves', 'Dün söz vermiştim hanımcığım. Yatağım kapınızda, tespihim avucumda.', 'kararli'],
              ], degilse: [
                ['mehves', 'Serilir hanımcığım. Benim uykum hafif, tespihim ağır.', 'kararli'],
              ] },
              { gizle: 'mehves' },
            ] },
            { m: 'Madam bitişik odada yatsın.', kosul: (S) => !nimetVar(S), etki: { josephine: 1 }, bayrak: { p7_kapi: 'madam' }, adimlar: [
              { goster: ['josephine', 'ana'] },
              ['josephine', '{i}D\'accord.{/i} Duvar ince olsun, ben iyi duyarım.', 'notr'],
              { gizle: 'josephine' },
            ] },
            { m: 'Şefik yanımda yatsın.', etki: { sefik: 1 }, bayrak: { p7_kapi: 'sefik' },
              iz: 'Şefik gece senin yanında. Akşam onu misafire veremezsin.', adimlar: [
              { goster: ['sefik', 'sevincli'] },
              ['sefik', 'Ada\'da da mı? Yastığımı ben taşırım!', 'sevincli'],
              { gizle: 'sefik' },
            ] },
            { m: 'Hiçbiri. Kapım kendi kapım.', bayrak: { p7_kapi: 'acik' }, iz: 'Kapın Ada\'da açık kalacak, bekçisi yok.', adimlar: [
              ['ic', 'Bu gece kapımı kendim gözleyeceğim. Bir şey olursa kimi çağıracağımı biliyorum.', 'kararli'],
            ] },
          ] },
          { giyin: ['nisan_sade', 'nisan_gosterisli', 'nisan_yadigar'], soru: 'Feracemin altına ne giyeceğim?' },
          { gorev: 1 },
          { ara: { mekan: 'vapur_guverte', yer: 'Köprü iskelesi · Ada vapuru', satirlar: [
            'Konağın kapısı ardından kapandığında Feride arkasına bakmadı.',
            'Ada vapurları Köprü\'den çanla kalkar, kadınları erkeklerden kalın bir perdeyle ayırırdı.',
            'Perde ise, bütün İstanbul\'un bildiği gibi, kıçta küpeşteye bir karış kala biterdi.',
          ] } },
        ],
      },

      /* ---------------- 2. Vapur: perdenin bittiği yer ---------------- */
      {
        id: 'p7_vapur', mekan: 'vapur_guverte', tetik: 'giris', kosul: (S) => S.gorev === 1, sahne: [],
        adimlar: [
          /* Tur 27 (ses 4): ara sayfanın çanla kalkışı duyulsun; fon artık vapur_guverte'nin kendi resmi */
          { efekt: 'vapur' },
          ['an', 'Perihan Hanım\'ı ilk dalgada deniz tuttu, Hatice limona koştu. Hanımın gözü bu kez kendi derdindeydi.'],
          /* Oynanış T1 B5 (b5_8 7 (b)5): vapurda tempo bozan bir eylem; perdenin iğnesini Feride çeker.
             p7_k_igne ilk seçimden sonraki satırda okunur (Kenan: anlatıcı satırı, Süha: rüzgâr satırı) */
          /* GPT T26 Süha (B7 oynanış 2): "bak" eylemi çevreyi değiştiriyor; kapsamı tıklamadan önce adında yazılı.
             Tur 27b (GPT B7-G1/O2): dokunma alanı yeni güverte resminde perdenin bağına (sol üst, perdenin bittiği direk)
             taşındı; eski konum sağdaki denizin üstündeydi */
          { kesif: { x: 31, y: 18, w: 10, h: 30, ad: 'Gevşek iğne (çekersen perde açılır)', adimlar: [
            /* Tur 33 (§0.6): "bir karış" motifi bölümde iki kez (ara sayfa ve Süha'nın kapısı) */
            'Perdenin iğnesini çekince perde rüzgârda biraz daha açıldı.',
            { bayrak: { p7_k_igne: true } },
          ] } },
          { eger: muk, ise: [
            /* --- Kenan yolu --- */
            /* Anlatı T2 (7.5): Kenan yolunda da Süha vapurda (6. bölüm kancası "Güvertede dayı olmayan bir adam") */
            /* Tur 27 (6. bölüm oynanış (b)1): 6. bölüm gecesinin hekimle kalan cevabı (p6_nabiz, Kenan yolu) */
            { eger: (S) => b(S).p6_nabiz === 'takas', ise: [
              ['an', 'Süha Bey Perihan Hanım\'ın nabzını tuttu, Feride\'yle göz göze gelince başını çevirdi. Dünkü pazarlığa sadıktı.'],
            ], degilse: [{ eger: (S) => b(S).p6_nabiz === 'calibe', ise: [
              ['an', 'Süha Bey Perihan Hanım\'ın nabzını tutarken limonu Hatice\'den istedi. Feride\'ye dönmedi.'],
            ], degilse: [
              ['an', 'Hekim Süha Bey Perihan Hanım\'ın nabzını tuttu, gözü ise perdenin bittiği yerdeydi.'],
            ] }] },
            { eger: munevverVar, ise: [
              ['an', 'Münevver Hanım fırsatı kaçırmadı, Feride\'nin yanına geçti. Gelinini yolculukta tanımak istiyordu.'],
              { goster: ['munevver', 'gulumser'] },
              ['munevver', 'Oğlum perdenin öbür yanında. Kitap okuyor ama sayfası hiç dönmüyor.', 'gulumser'],
            ], degilse: [
              'Perdenin öbür yanında babamın sesi: “Kenan, oğlum, akşam yemeğe kal.”',
              ['ic', 'Kenan bu vapurda! Babam onu yemeğe çağırmış, bana kimse söylememiş.', 'utanmis'],
            ] },
            { soru: 'Rüzgâr kıçta. Perdenin ucu orada.', secim: [
              { m: 'Kıça git. Küpeşteye yaslan.', etki: { mukaddem: 4 }, bayrak: { p7_kic: 'git' }, adimlar: [
                'Küpeşteye yaslandım. Perdenin öbür ucunda bir el aynı demiri tuttu.',
              ] },
              { m: 'Şefik\'i yolla: “Ablam martı sayıyor.”', etki: { mukaddem: 3, sefik: 1 }, bayrak: { p7_kic: 'sefik' }, adimlar: [
                'Şefik koştu, döndü: “Kenan abi de sayıyormuş. Kıçta!”',
                'Kıça gittim. Saymaya o başlamıştı.',
              ] },
              { m: 'Münevver Hanım\'a: “Hava alacağım.”', kosul: munevverVar, etki: { mukaddem: 4, munevver: 1 }, bayrak: { p7_kic: 'munevver' }, adimlar: [
                ['munevver', 'Al kızım. Ben uyuklarım, gözüm kapalı, kulağım da.', 'gulumser'],
                'Kıça gittim. Arkamdan Münevver Hanım\'ın kıkırdadığını duydum.',
              ] },
              /* GPT T29 O7-1: karşılaşma yolu yakınlaşma onayı değil; Kenan'a gitmemek de seçilebilir (puan vermez) */
              { m: 'Şefik\'in yanında kal. Kenan Bey\'e gitme.', bayrak: { p7_kic: 'kal' }, iz: 'Kıça gitmedin. Kenan perdenin ucuna kadar geldi, öteye geçmedi.', adimlar: [
                'Şefik\'in yanında kaldım; martıları birlikte saydık.',
              ] },
            ] },
            { gizle: 'munevver' },
            { eger: (S) => b(S).p7_kic === 'kal', ise: [
              ['an', 'Kenan perdenin öbür yanından ucuna kadar geldi, öteye geçmedi. Şefik ikisinin arasında martı sayıyordu.'],
            ], degilse: [{ eger: (S) => !!b(S).p7_k_igne, ise: [
              ['an', 'Kenan iğnesiz kalan perdenin öbür ucundaydı. Kitabını çoktan kapamıştı.'],
            ], degilse: [
              ['an', 'Kitabını çoktan kapamıştı.'],
            ] }] },
            /* Tur 33 (B7 görsel 1; §0.2): kitaplı utangaç portre kapanmış kitapla çelişir */
            { eger: (S) => b(S).p7_kic !== 'kal', ise: [
            { goster: ['mukaddem', 'notr'] },
            { eger: (S) => b(S).p6_yakin === 'ada', ise: [
              ['mukaddem', '“Ada\'da” demiştiniz. Vapur Ada\'ya gidiyor, sayılır mı?', 'gulumser'],
            ], degilse: [{ eger: (S) => b(S).p6_topuk === 'yardim', ise: [
              /* Diyalog T1 (D4, ses C7): borç dili Kenan'ın değil */
              ['mukaddem', 'Penceredeki kafesi gördüm. Benim yüzümden çakıldı, unutmam.', 'mahzun'],
            ], degilse: [{ eger: (S) => b(S).p6_kandil === 'yuz', ise: [
              ['mukaddem', 'Dün gece yüzünüzü gösterdiniz. Bütün gece o lambaya baktım.', 'utangac'],
            /* Oynanış T1 B5 (b5_8 6 (b)3): 6. bölümün imza nesnesi iskarpin unutulmaz (p6_iskarpin ilk kez okunur) */
            ], degilse: [{ eger: (S) => b(S).p6_iskarpin === 'ayak', ise: [
              ['mukaddem', 'İskarpininizi ayağınıza ben giydirdim. Demir tozu sabaha dek avucumdaydı.', 'gulumser'],
            ], degilse: [{ eger: (S) => b(S).p6_iskarpin === 'kendin', ise: [
              ['mukaddem', 'Demiri siz çaktınız, ben tuttum. Çekiç sesi hâlâ kulağımda.', 'utangac'],
            ], degilse: [
              ['mukaddem', 'İskarpininizin demir tozu avucumda kaldı. Sabaha dek açmadım.', 'utangac'],
            ] }] }] }] }] },
            'Rüzgâr feracemi araladı.',
            { eger: (S) => giy(S) === 'pembe', ise: [
              ['mukaddem', 'Pembe… Feracenin altından bile.', 'utangac'],
            ], degilse: [{ eger: (S) => giy(S) === 'mavi', ise: [
              /* Tur 27 (diyalog 1): şairane süs yerine somut */
              ['mukaddem', 'Annenizin mavisi. Feracenin altından da belli, saklamayın.', 'gulumser'],
            ], degilse: [
              /* Diyalog T1 (ses C6): Kenan süslemez, somut söyler */
              /* Doğrulama gece b5-8: her talibin "Fildişi." açılışı tekrarı kırıldı */
              ['mukaddem', 'Sade giymişsiniz. Bakmaya utanıyorum; bakıyorum.', 'utangac'],
            ] }] },
            { soru: 'Perdenin ucu rüzgârda gerildi.', secim: [
              { m: '“Bahaneniz ne bu kez?”', etki: { mukaddem: 4 }, bayrak: { p7_soz: 'bahane' }, adimlar: [
                ['f', 'Bahaneniz ne bu kez Kenan Bey?', 'gulumseyen'],
                /* Tur 18 (madde 7): Leyla'nın götürdüğü not geliş nedenini değiştirir */
                { eger: notUlasti, ise: [
                  ['mukaddem', 'Bahanem yok. Bana yazdınız, geldim.', 'kararli'],
              ], degilse: [
                ['mukaddem', 'Babanız çağırdı. Ben yalnız vapur saatini sordum, sizinkini.', 'utangac'],
                ] },
              ] },
              { m: '“Ben de sizi görmek için bindim.”', etki: { mukaddem: 6 }, bayrak: { p7_soz: 'itiraf' }, adimlar: [
                { muzik: 'romantik' },
                ['f', 'Ben de sizi görmek için bindim. Ada bahane.', 'utanmis'],
                ['mukaddem', 'Bunu bir daha söyleyin. Martılar duymadı.', 'gulumser'],
              ] },
              { m: 'Yaşmağını bir parmak indir.', etki: { mukaddem: 5 }, bayrak: { p7_soz: 'yuz' }, adimlar: [
                'Yaşmağımı bir parmak indirdim. Yalnız gülüşüm göründü.',
                ['mukaddem', 'Gülüyorsunuz. Vapur dursun istiyorum.', 'gulumser'],
              ] },
            ] },
            /* Kesintisiz karşılık: kimse bölmez */
            ['mukaddem', 'Siz dokuz yaşındaydınız. Ada vapurunda martılardan korkardınız.', 'mahzun'],
            ['f', 'Siz de simidinizi onlara atardınız. Korkum geçsin diye.', 'gulumseyen'],
            ['mukaddem', 'Geçti mi?', 'utangac'],
            ['f', 'Martı korkusu geçti. Bu kez simidi ben atıyorum.', 'tebessum'],
            /* GPT T26 (öncelik 10): an resminde elbise çeşidi yok; renkli elbisede ferace kapanır, kadraj elbiseyi öne almaz */
            { eger: (S) => giy(S) !== 'sade', ise: [
              'Feracemi göğsümde kavuşturdum, rengini bir kez görmesi yeter.',
            ] },
            /* GPT T29 O7-1: yaşmağı uzatma kararı eylemden önce; an_vapur yalnız uzatan kıza. Vurucu anı Feride tetikler */
            { soru: 'Perdenin aralığı daracık. Yaşmağımın ucu rüzgârda.', secim: [
              /* Diyalog T1 (7.1): seçim metni satırla çelişmez */
              { m: 'Ucunu perdenin aralığından uzat. Bırakma; o da tutsun.', etki: { mukaddem: 7, itibar: -1 }, bayrak: { p7_yasmak: 'birak' }, adimlar: [
                'Yaşmağımın ucunu perdenin aralığından ben uzattım. Parmakları yakaladı.',
                /* Tur 29 (t29_b05_08 B7 görsel 1): yalnız fildişi resmi var; pembe/mavide gösterilmez (çeşitleri üretim listesinde) */
                { cizim: 'an_vapur' }, // Tur 29: pembe/mavi türleri geldi; anElbise koruması gerekmiyor
                'Bırakmadım, o da bırakmadı. İnce tül ikimizin arasında gerildi.',
                /* Tur 27 (diyalog 6) */
                ['mukaddem', 'Geri vermem gerek. Vapur yavaş yanaşsın.', 'gulumser'],
              ] },
              { m: 'Ucunu uzat; sonra elini küpeştede onunkinin yanına koy.', kosul: (S) => b(S).p7_kic !== 'kal', etki: { mukaddem: 6 }, bayrak: { p7_yasmak: 'el' }, adimlar: [
                'Yaşmağımın ucunu perdenin aralığından ben uzattım. Parmakları yakaladı.',
                { cizim: 'an_vapur' }, // Tur 29: pembe/mavi türleri geldi; anElbise koruması gerekmiyor
                'Ucunu geri alıp elimi küpeştede onunkinin yanına koydum. Serçe parmaklarımız değdi.',
                /* Tur 27 (oynanış 3): iğnesi çekilen perde (p7_k_igne) serçe parmakları açıkta bırakır */
                { eger: (S) => !!b(S).p7_k_igne, ise: [
                  'Perde iğnesiz kalmıştı; serçe parmaklarımız saklanamadı.', { etki: { mukaddem: 2 } },
                ] },
                ['mukaddem', 'Demir soğuk. Parmağınız değil.', 'gulumser'],
              ] },
              { m: 'Yaşmağını uzatma. Gözünü ondan çekme.', etki: { mukaddem: 3 }, bayrak: { p7_yasmak: 'goz' }, adimlar: [
                'Yaşmağımı uzatmadım ama gözümü çekmedim. O da çekmedi.',
              ] },
              { m: 'Yaşmağını kendinde tut. Mesafeni koru.', bayrak: { p7_yasmak: 'tut' }, iz: 'Yaşmağını uzatmadın. Kenan perdenin kendi yanında kaldı.', adimlar: [
              'Yaşmağımı çenemin altında toplayıp perdenin aralığından bir adım uzaklaştım.',
                ['mukaddem', 'Anladım. Perde yerinde kalsın.', 'mahzun'],
              ] },
            ] },
            ['an', 'Vapur Kınalı\'yı, sonra Burgaz\'ı geçti.'],
            /* Diyalog T1 (D8): bilgi satırı Kenan'ın saat imgesiyle; "Annem…" ve "Saatimi kurarım" cevapları korunur */
            /* Tur 27 (diyalog 6): bilgi satırı açık */
            ['mukaddem', 'Akşam babanızın sofrasındayım. Son vapurla dönerim, saatimi ona göre kurdum.', 'ana'],
            /* GPT T25 Kenan (B7 sürük. 1): romantik isteğin bedeli seçimin içinde: kalırsa aynı çatı, Perihan da orada */
            { soru: 'Ada iskelesi göründü. Kalırsa bu gece aynı çatının altındayız; Perihan Hanım da.', secim: [
              { m: '“Son vapuru kaçırın.”', etki: { mukaddem: 5 }, bayrak: { p7_davet: 'kacir' },
                iz: 'Kenan son vapuru kaçıracak. Bu gece aynı çatı altındasınız.', adimlar: [
                ['mukaddem', 'Annem…', 'endiseli'],
                ['f', 'Anneniz bir gece bekler. Ben bir yıl bekledim.', 'utanmis'],
              ] },
              /* Oynanış T1 B3: Kenan'ı uzak tutan cevap ilgisini azaltır (−3); koruma niyeti iz satırında */
              { m: '“Kaçırmayın. Perihan Hanım misafir sever.”', etki: { mukaddem: -3, calibe_suphe: 1 }, bayrak: { p7_davet: 'uyar' },
                iz: 'Kenan\'ı korumak için uzak tuttun. Gönlü bir adım geri çekildi.', adimlar: [
              ['f', 'Kaçırmayın. Perihan Hanım misafir sever, bırakmaz.', 'endiseli'],
                ['mukaddem', 'Anladım. Saatimi şaşırmam.', 'mahzun'],
              ] },
              { m: '“Gelin. Kafesin ardında olacağım.”', etki: { mukaddem: 4 }, bayrak: { p7_davet: 'kafes' },
                iz: 'Kenan akşam sofrasına gelecek. Gözü kafesi arayacak.', adimlar: [
                ['f', 'Gelin. Kafesin ardında olacağım.', 'gulumseyen'],
                ['mukaddem', 'Ada evinde kafes yokmuş.', 'gulumser'],
                ['f', 'O hâlde dikkatli bakın.', 'utanmis'],
              ] },
            ] },
            ], degilse: [
              { bayrak: { p7_soz: 'mesafe', p7_yasmak: 'tut' } },
              ['an', 'Kenan uzaktan selam verdi. Feride Şefik’in yanında kaldı; vapur iskeleye yaklaşıncaya kadar yanlarına gelmedi.'],
            ] },
            { gizle: 'mukaddem' },
            /* "Onun gözünden" satırı Anlatı T2'de (7.11) Büyükada ara sayfasının ilk satırına taşındı */
          ], degilse: [
            /* --- Süha yolu --- */
            /* Tur 27 (ses 1): Süha sahnesi romantik değil, kendi temasında (OLAY p7_vapur iki yolda 'romantik') */
            { muzik: 'suha' },
            /* Anlatı T2 (7.14): dış olay anlatıcıda; Feride yalnız yerini söyler */
            { eger: (S) => ['ac', 'sor', 'ret'].indexOf(b(S).p6_son) < 0, ise: [
              /* Tur 31 (t31_b05_08 B7 anlatı 1): 6. bölümün "sabah vapurda o ses" kancası karşılanır; şüphe, hüküm değil */
              ['ic', 'Hatice iskelede bana selam verdi; hiç vermezdi. Gece koridorda fısıldayan o muydu?', 'endiseli'],
            ] },
            ['an', 'Hekime perde yoktu. Süha Bey Perihan Hanım\'ın nabzını saydı, sonra kıça yürüdü.'],
            { goster: ['suha', 'notr'] },
            'Kıçtayım, perdenin bittiği yerde.',
            { soru: 'Geliyor. Herkes Perihan Hanım\'ın limonuyla meşgul.', secim: [
              { m: 'Yerinde kal. O gelsin.', etki: { suha: 5 }, bayrak: { p7_kic: 'bekle' }, adimlar: [
                'Kaldım. Geldi, küpeşteye benim tuttuğum yerden tutundu.',
              ] },
              { m: '“Hekim Bey, beni de tuttu.”', etki: { suha: 6, itibar: -1 }, bayrak: { p7_kic: 'cagir' }, adimlar: [
                ['f', 'Hekim Bey, beni de tuttu.', 'gulumseyen'],
                ['suha', 'Sizi deniz tutmaz. Başka bir şey tutar.', 'alayci'],
              ] },
              /* Oynanış T1 B3 / D3: hekimden kaçan kız onun ilgisini azaltır (−3); üvey annenin yanında oturmak kuşkusunu dağıtır */
              { m: 'Perihan Hanım\'ın yanına dön.', etki: { suha: -3, calibe_suphe: -2 }, bayrak: { p7_kic: 'kac' },
                iz: 'Perihan Hanım\'ın yanına oturdun. Kuşkusu dağıldı, hekim ise bozuldu.', adimlar: [
                'Perihan Hanım\'ın yanına oturdum. Limonu bana onun önünden uzattı.',
                ['suha', 'Onun yanında güvende misiniz? Perihan Hanım’a sorun.', 'alayci'],
                /* Tur 27 (oynanış 1): kaçan kız kıça çıkmaz; konuşma uyuyan Perihan'ın yanında, fısıltıyla geçer */
                ['an', 'Perihan Hanım uyuklayınca hekim Feride’nin yanına oturdu. Sesini yalnız onun duyacağı kadar alçalttı.'],
              ] },
            ] },
            { eger: (S) => b(S).p6_son === 'sor', ise: [
              ['suha', 'Neyiniz olduğumu sordunuz. Denizdeyiz, duvarı yok.', 'notr'],
            ], degilse: [{ eger: (S) => b(S).p6_son === 'ac', ise: [
              ['suha', 'Dün gece adımı söylediniz. Bir de ben söyleyeyim, neyinizim.', 'mahzun'],
            ], degilse: [
              ['suha', 'Dün gece kapınızı tuttunuz. Denizde kapı yok, dinleyeceksiniz.', 'soguk'],
            ] }] },
            ['suha', 'Ben sizi isteyen adamım. Perihan\'ın evinde, Perihan\'ın ekmeğiyle, ona rağmen.', 'notr'],
            /* Diyalog T1 (7.3): iki rotada aynı cümle kalmasın. Oynanış T1 B5: iğnesi çekilen perde (p7_k_igne) */
            { eger: (S) => !!b(S).p7_k_igne, ise: [
              'İğnesiz perde rüzgârla açıldı, feracemin eteği de. ',
          ], degilse: [
            'Rüzgâr feracemin eteğini açtı. ',
            ] },
            { eger: (S) => giy(S) === 'pembe', ise: [
              ['suha', 'Pembe. Perihan görse yine sararır, denizden değil.', 'alayci'],
            ], degilse: [{ eger: (S) => giy(S) === 'mavi', ise: [
              /* Diyalog T1 (ses A5): Süha Behiye'yi tanırdı; adını anar */
              ['suha', 'Behiye Hanım\'ın mavisi. Ondan izin istiyorum.', 'mahzun'],
              /* GPT T26 Süha (B7 diyalog 1): Feride kendi iznini öne koyar; Süha'nın cevabı tehlikeli kalır */
              ['f', 'Benim için izin isteyecekseniz bana sorun Süha Bey.', 'kararli'],
              ['suha', 'Sizden de isterim. Ölüden izin almak daha kolay sanmıştım.', 'alayci'],
            ], degilse: [
              ['suha', 'Süssüz. Sade giyinen kız neyi saklar?', 'alayci'],
            ] }] },
            { soru: 'Söylediği rüzgârda kalmadı.', secim: [
              { m: '“Bir daha söyleyin.”', etki: { suha: 7 }, bayrak: { p7_soz: 'tekrar' }, adimlar: [
                ['f', 'Bir daha söyleyin.', 'utanmis'],
                /* Tur 27 (diyalog 2): gidilen yer Büyükada */
                ['suha', 'Sizi istiyorum. Ada\'ya kadar her iskelede bir daha.', 'gulumser'],
              ] },
              { m: '“İstemek yetmez. Babam ister, babam verir.”', etki: { suha: 5 }, bayrak: { p7_soz: 'baba' }, adimlar: [
                ['f', 'İstemek yetmez Süha Bey. Babam ister, babam verir.', 'kararli'],
                ['suha', 'Babanız Perihan\'a sorar. Hesap uzun, ben sabırlıyım.', 'alayci'],
              ] },
              { m: '“Perihan Hanım duyarsa bedelini kim öder?”', etki: { suha: 4 }, bayrak: { p7_soz: 'duy' }, adimlar: [
                ['f', 'Perihan Hanım duyarsa bedelini kim öder, siz mi ben mi?', 'kararli'],
                ['suha', 'Duysun. Bakalım aynı sözü bu akşam babanızın yanında da söyleyecek misiniz?', 'alayci'],
                /* Anlatı T2b (GPT 24b B7): şart koyan kız kaçamağı yakalar; Süha'nın cevabı tehlikeli kalır */
                ['f', 'Bu, sorumun cevabı değil.', 'ofkeli'],
                ['suha', 'Cevabı şu: önce sizden alır, sonra benden. Ben ödemeye alışkınım, siz değilsiniz.', 'soguk'],
              ] },
              /* GPT T28 (7-O1): itirafı müzakere etmeden kesin bitirme hakkı (koşulsuz) */
              { m: '“Beni istemeniz size bir hak vermez. Konuşma burada bitti.”', etki: { suha: -3, vakar: 1 }, bayrak: { p7_soz: 'bitti' },
                iz: 'Konuşmayı sen bitirdin. Hekim cevap veremeden yüzünü Perihan Hanım\'a çevirdin.', adimlar: [
                ['f', 'Beni istemeniz size bir hak vermez Süha Bey. Konuşma burada bitti.', 'kararli'],
                'Yüzümü Perihan Hanım\'a çevirdim, cevabını beklemedim.',
              ] },
            ] },
            { eger: (S) => b(S).p7_soz !== 'bitti', ise: [
            /* Kesintisiz karşılık: kimse bölmez (konuşmayı bitiren kızın ardından söylenmez) */
            
              ['suha', 'On yedi yaşımda ona bekledim. Siz beni bekleyen biri sanmayın.', 'mahzun'],
              ['suha', 'Size ikisi de olmayacağım.', 'soguk'],
              /* Tur 28 (B7 diyalog 2): en yakın anında Fransızcaya kaçar */
              ['suha', '{i}Ni l\'un ni l\'autre.{/i}', 'soguk'],
            
            /* Tur 28b (kök 2): konuşmayı bitiren kızın iç sesi eski yakınlığı özlemle anmaz; sınırı söyler */
            /* Tur 33 (B7 anlatı 4, diyalog 8): geçmiş bilgisi anlatıcıda; iç ses yalnız bugünü söyler */
            ['an', 'Feride çocukken Ada\'da dizini kanattığında onu saran el, şimdi Perihan Hanım\'ın nabzını tutan eldi.'],
            { eger: (S) => b(S).p7_kic === 'kac', ise: [
              ['ic', 'Şimdi o el yanı başımda, çekilmemi bekliyor.', 'mahzun'],
            /* Tur 29 (B7 karşılaşma ≠ istek): "babam verir" / "bedelini kim öder" diye sınır koyan kıza utangaç yakınlık yok */
            ], degilse: [{ eger: (S) => b(S).p7_soz === 'baba' || b(S).p7_soz === 'duy', ise: [
              ['ic', 'Şimdi eli benimkinin yanında; ne çektim ne uzattım.', 'mahzun'],
            ], degilse: [
              ['ic', 'Şimdi eli küpeştede, benimkinin yanında.', 'utanmis'],
            ] }] },
            /* GPT T26 Süha (B7 sürük. 1, öncelik 10): an resminde elbise çeşidi yok; renkli elbisede ferace kapanır */
            { eger: (S) => giy(S) !== 'sade', ise: [
              'Feracemi göğsümde kavuşturdum. Rengini gördü, o kadarı yeter.',
            ] },
            /* Tur 27 (sürük. 1, ölçüt 3): yaşmağı rüzgâra Feride bırakır.
               Tur 27b (GPT B7-O1/S2, sözleşme 1): Perihan'ın yanına dönen kız yaşmağı kendisi uzatmaz; ucunu hekim
               kendi uzanıp yakalar (tehlikeli olan onun hamlesi), Feride'nin cevabı aşağıdaki seçimdir: bırakmamak,
               geri istemek ya da çekmek. Cesur yol kısılmaz: kıçta kalan / çağıran kız ucunu kendisi bırakır.
               Tur 29 (t29_b05_08 B7 sürük 3, görsel 4): sınır koyan kız ('baba' / 'duy') da yaşmağı bırakmaz; ucu rüzgârla
               gider. an_yasmak'ta Feride ayakta, küpeştede, Perihan arkada: kaçan kızın satırı resme uyduruldu (kalkarken). */
            /* Tur 30 (t30_b05_08 B7 anlatı 1 / oynanış 1 / görsel 4, karşılaşma ≠ istek): Perihan'ın yanına dönen ('kac') ya da
               konuşmayı bitiren ('bitti') kız arkasını dönmüştür; romantik an_yasmak (Feride ona dönük) ona açılmaz.
               Ret anı an_yasmak_ret (BEKLEYEN_AN; resmi üretimde, gelene kadar adım atlanır) ve anRet.an_yasmak:
               ret oyuncusuna an_yasmak "kaçırdığın an" diye gösterilmez. */
            { eger: (S) => b(S).p7_kic === 'kac' || b(S).p7_soz === 'bitti', ise: [
              
                'Perihan Hanım\'ın yanında yaşmağım omzumdan kaydı, ucunu o uzanıp yakaladı. Dönüp bakmadım.',
              
              { cizim: 'an_yasmak_ret' },
            ], degilse: [
              { eger: (S) => b(S).p7_soz === 'baba' || b(S).p7_soz === 'duy', ise: [
                'Rüzgâr yaşmağımın ucunu omzumdan aldı. Uzatmadım, o havada yakaladı.',
              ], degilse: [
                'Yaşmağımın ucunu rüzgâra ben bıraktım, nereye gideceğini bilerek. Parmakları havada yakaladı.',
              ] },
              { cizim: 'an_yasmak' }, // Tur 29: pembe/mavi türleri geldi
            ] },
            { soru: 'Yaşmağımın ucu onun parmaklarında.', secim: [
              /* Diyalog T1 (7.2, 7.3, 7.18): seçim satırla çelişmez; Kenan rotasının cümlesi yinelenmez; para dili Remzi'nin */
              { m: 'Bırakma. Çeksin bakalım.', etki: { suha: 8, itibar: -1 }, bayrak: { p7_yasmak: 'birak' }, adimlar: [
                'Bırakmadım. O da çekmedi, tül ikimizin arasında nabız gibi atıyordu.',
              ['suha', 'Perihan\'ın bütün incilerinden hafif. Bırakan ilk siz olun.', 'gulumser'],
              ] },
              /* Tur 28 (B7 sürük 3): iki rotada aynı jest olmasın; Süha tülü geri vermez, Ada'ya saklar (8. bölüm çamlığı
                 okur). Kenan rotasında yaşmak hep Feride'de kalır. */
              { m: '“Verin.” Avucunu aç.', etki: { suha: 6 }, bayrak: { p7_yasmak: 'al' }, iz: 'Yaşmağının ucu Süha Bey\'in cebinde. Ada\'da isteyeceksin.', adimlar: [
              'Avucumu açtım. Tülü sargı katlar gibi dört kat katlayıp avucuma değil, göğüs cebine koydu.',
              ['suha', 'Ada\'da isteyin, veririm.', 'alayci'],
                /* Tur 29 (t29_b05_08 B7 diyalog 4): isteği çiğnenen kahraman susmaz */
                ['f', 'Ada\'da istemem. Cebinizde unutun, ben unutmam.', 'kararli'],
              ] },
              /* Tur 29 (B7 oynanış 3, gönül kuralı): uzaklaştıran cevap puan vermez; Süha'nın tepkisi satırda */
              { m: 'Çek. Bakma.', bayrak: { p7_yasmak: 'cek' }, adimlar: [
                'Çektim. Tül parmaklarından kaydı.',
                ['suha', 'Kaçan şey iz bırakır. Avucumda bıraktı.', 'alayci'],
              ] },
            ] },
            { eger: (S) => b(S).p7_kic === 'kac' || b(S).p7_soz === 'bitti', ise: [
              ['an', 'Vapur Burgaz\'ı geçti. Perihan Hanım uykusunda bir kez inledi, uyanmadı.'],
            ], degilse: [
              ['an', 'Vapur Burgaz\'ı geçti. Perihan Hanım hâlâ limonuyla meşguldü.'],
            ] },
            /* Tur 29 (t29_b05_08 B7 anlatı 4): konuşmayı bitiren kızın sınırını Süha çiğner; anlatıcı bunu gösterir */
            
            ['suha', 'Akşam vapuruyla nişanlınız geliyor, babanız çağırmış. Perihan ona oda hazırlatıyor.', 'notr'],
            /* GPT T26 Süha (öncelik 3, 7): borç dili seyrek; söz verip ertelemek yerine bir parçayı hemen verir */
            /* Tur 30 (t30_b05_08 B7 diyalog 3): pazarlık imzası sahnede bir kez (840'taki itiraf); karşılığı Feride'nin seçimi açar */
            ['suha', 'Perihan bunu söylediğimi duysa beni kovar. Kurduğunu da biliyorum; sorun, söylerim.', 'soguk'],
            { soru: 'Ada iskelesi göründü. Cevap bekliyor.', secim: [
              { m: '“Söyleyin. Karşılığını sonra konuşuruz.”', etki: { suha: 5 }, bayrak: { p7_borc: 'borc' },
                iz: 'Hekim Hatice\'nin adını verdi. Karşılığını gece kapında isteyecek.', adimlar: [
                ['f', 'Söyleyin. Karşılığını sonra konuşuruz.', 'kararli'],
                ['suha', 'Hatice\'yi misafirin hizmetine verecek. Gerisini gece söylerim, kapınızın ardında.', 'soguk'],
              ] },
              { m: '“Kenan Bey’e el sürmeyeceğinize söz verin.”', etki: { suha: 4 }, bayrak: { p7_borc: 'sart' },
                iz: 'Kenan’a el sürmeyeceğine söz verdi. Adına karışmayacağına söz vermedi.', adimlar: [
                /* Tur 29 (B7 diyalog 1): seçimde olmayan çekim ("Size yaklaşsam da") kalktı */
                ['f', 'Kenan Bey’e el sürmeyeceksiniz. Benimle konuşmanız da size başka bir hak vermez.', 'kararli'],
                /* Diyalog T1 (7.5): söz anlaşılır; tehlikeli ima kalır, gece "adına dokunacaklar"ı hazırlar */
                ['suha', 'Ona elimi sürmem. Adına karışmam diyemem.', 'soguk'],
              ] },
              { m: '“Kendim bulurum.”', bayrak: { p7_borc: 'kendim' }, iz: 'Borç almadın. Perihan Hanım\'ın kurduğunu gece kendin arayacaksın.', adimlar: [
                ['f', 'Kendim bulurum.', 'kararli'],
                ['suha', 'Bulun. Bulduğunuzda ben orada olurum.', 'soguk'],
              ] },
              /* Tur 27 (oynanış (b)3): haşhaş kozuyla karşı tehdit; koz harcanmaz, yalnız gösterilir. 8. bölüm için
                 p7_borc 'kendim' kalır (borç alınmadı) */
              { m: '“Kendim bulurum. Haşhaş şişesi bende; gerekirse babama gösteririm.”', kozGerek: HASHAS, kosul: (S) => var_(S, HASHAS),
                etki: { suha: 2, vakar: 1 }, bayrak: { p7_borc: 'kendim' },
                iz: 'Borç almadın, şişeyi hekime hatırlattın. O da “uysal” kâğıdını kendi elinin yazdığını hatırlattı.', adimlar: [
              ['f', 'Kendim bulurum. Haşhaş şişesi bende Süha Bey, gerekirse babama gösteririm.', 'kararli'],
              ['suha', 'Gösterin. Şişe Perihan\'ın hesabından, “uysal” yazısı benim elimden; babanız önce hangimize kızar?', 'soguk'],
              ] },
            ] },
            ], degilse: [
              { bayrak: { p7_yasmak: 'cek', p7_borc: 'kendim' } },
              { muzik: 'ada' },
              { eger: (S) => b(S).p7_kic === 'kac', ise: [
                ['an', 'Feride yaşmağını topladı. Süha Bey’e dönmedi.'],
              ], degilse: [ ['an', 'Feride yaşmağını toplayıp Perihan Hanım’ın yanına oturdu.'] ] },
            ] },
            { gizle: 'suha' },
            /* "Onun gözünden" satırı Anlatı T2'de (7.11) Büyükada ara sayfasının ilk satırına taşındı */
          ] },
          { gorev: 2 },
          /* Ada'ya varış: eski olay anlatısı ara sayfaya taşındı (anlatıcı sesi). Anlatı T2 (7.11): iki tam ekran art arda
             gelmesin diye vapurdaki "Onun gözünden" satırı (öte yan) bu sayfanın ilk satırıdır; Remzi satırı iskeledeki
             ipucunu önceden harcamaz (mercek_doz B7-1) */
          { ara: { mekan: 'ada_iskele', yer: 'Büyükada · öğle', satirlar: [
            (S) => b(S).p7_soz === 'bitti' ? 'Feride konuşmayı bitirmişti. Süha Bey vapurun öbür yanında kaldı; yaşmağına dokunmamıştı.'
              : b(S).p7_kic === 'kal' ? 'Feride Şefik’le martı saydı. Kenan’ın selamı uzaktan kaldı.'
              : (muk(S)
              ? (b(S).p7_yasmak === 'birak'
                /* Doğrulama gece b5-8 (7. anlatı): 6. bölümün "yıkamadı" motifi yinelenmez */
                ? 'Kenan\'ın parmaklarında tülün kokusu kaldı.'
                : b(S).p7_yasmak === 'el' ? 'Kenan serçe parmağını iskeleye kadar küpeşteden kaldırmadı. Demir ısınmıştı.'
            : 'Kenan perdenin ucuna baktı. Ömründe hiçbir perde bu kadar uzun olmamıştı.')
              /* Anlatı T2b (GPT 24b B7): öte yan satırı seçilen yaşmak eylemine bağlı; ikinci cümle Feride'nin
                 iskeleye taşıdığı cevabı (p7_borc) söyler, yakınlık yalnız Süha'nın hissine kalmaz */
              : ({
                birak: 'Süha tülün kokusunu limon kokusuna karıştırmadı; parmaklarında ayrı sakladı.',
                al: 'Süha\'nın göğüs cebinde yaşmağın dört katı duruyordu; iskeleye kadar elini oradan çekmedi.',
              }[b(S).p7_yasmak] || 'Süha avucuna baktı; kaçan tül orada görünmez bir iz bırakmıştı.')
                + ' ' + ({
                  borc: 'Feride ise Hatice\'nin adını ve hekimin gece isteyeceği karşılığı tartıyordu.',
                  sart: 'Feride ise koyduğu şartı aklından çıkarmıyordu.',
                }[b(S).p7_borc] || 'Feride ise kendi bulacağı şeyi düşünüyordu.')),
            /* Anlatı T2b (GPT 24b B7 öneri 1): sabah sandığa konan sürgü Ada'ya varışta da anılır */
            /* GPT T25 Kenan (B7 anlatı 2): ayrı kanat yok, ama alt katın bir yanı erkeklere ayrılmış; sonraki "selamlık" adı buna dayanır */
            /* Tur 30 (B7 anlatı (b)1): vapur perdesi sayfası gibi toplumun kuralı; haremliksiz evin tehlikesi merdivende */
            (S) => 'Merdiven ortaktı. Alt katın bir yanı erkeklere ayrılmıştı.'
              + (b(S).p7_kapi === 'surgu' ? ' Feride\'nin sandığında ise bir sürgü vardı.' : ''),
            /* Sürükleyicilik T1 (S5): karşı köşk ipucu iskeledeki anlatıcı satırında ("bir tek kişi") kaldı */
          ] } },
        ],
      },

      /* ---------------- 3. Öğle: iskelede bütün faytonlar ---------------- */
      {
        id: 'p7_iskele', mekan: 'ada_iskele', tetik: 'giris', kosul: (S) => S.gorev === 2, sahne: [],
        adimlar: [
          /* Ada'ya varışın anlatısı önceki olayın sonundaki ara sayfada (anlatı denetimi T1) */
          /* Sürükleyicilik T1 (S5): sahne açılışı tek anlatıcı satırına indi */
          /* Tur 32 (B7 ses 1): Remzi'nin gösterişine bir ses (boşta bekleyen faytonların atları) */
          { efekt: 'nal' },
          ['an', 'İskele yokuşunda faytonlar dizili bekliyor, hiçbiri kıpırdamıyordu.'],
          { goster: ['remzi', 'ana'] },
          { muzik: 'sessiz', kes: true, durak: 800 },
          ['remzi', 'Ada\'nın bütün faytonları bu öğle benim. Kiraladım, boş dursunlar.', 'gulumser'],
          /* Tur 28 (B7 sürük 1): vapurdan sonra ikinci düşüş olmasın; Remzi'nin gözü bahsi yükseltir (8. bölümün dürbün kozu) */
          ['remzi', 'Vapurda perdenin ucunu dürbünle gördüm. İskelede de arabanızı bekledim.', 'kararli'],
          /* Tur 29 (t29_b05_08 B7 diyalog 2): dört replik art arda bilgi dökümüydü; Feride araya kendi sözüyle girer,
             yelpaze satırı seçimden sonraya taşındı */
          ['f', 'Dürbününüz pahalıymış Remzi Bey. Yalnız perdeden ötesini görememişsiniz.', 'gulumseyen'],
          { eger: (S) => b(S).p6_remzi === 'kosk', ise: [
            ['remzi', 'Köşkümden pencerenize baktım. Henüz perdesi yok.', 'gulumser'],
          ], degilse: [{ eger: (S) => b(S).p6_remzi === 'defter', ise: [
            { eger: (S) => b(S).p6_defter === 'remzi', ise: [
              ['remzi', 'Defter bende, babanıza hangi sabah götüreyim, siz söyleyin. Faizim Ada\'da da işler.', 'kararli'],
            /* Tur 27b (GPT B6-O1, sözleşme 2): 6. bölümde yeni vals şartını geri çeviren kıza (p6_vals 'nisan') faiz borcu yazılmaz */
            ], degilse: [{ eger: (S) => b(S).p6_vals === 'nisan', ise: [
              ['remzi', 'Defter sizde. Yeni şartımı geri çevirdiniz, faizi kendi defterime yazdım.', 'kararli'],
            ], degilse: [
              ['remzi', 'Defterin faizi bir vals demiştim. Defter sizde, faiz Ada\'da da işler.', 'gulumser'],
            ] }] },
          /* Tur 27b (GPT B7-A1): perdeyle mesafe koyan kıza söylemediği pazarlık sözü mal edilmez; Remzi bir an fiyat biçemez */
          ], degilse: [{ eger: (S) => b(S).p6_remzi === 'perde', ise: [
            ['remzi', 'Perdeniz kalınmış. Faytonum yine de sizden önce iskeleye yetişti.', 'gulumser'],
            { goster: ['remzi', 'ana'] },
          ], degilse: [
            /* Diyalog T1 (K4, 7.6): 6. bölümde "Pazarlık bilmiyorsunuz" diyen Feride'ydi */
            ['remzi', 'Pazarlık bilmiyorsunuz demiştiniz. Faytoncular da öyle diyor.', 'gulumser'],
          ] }] }] },
          { soru: 'Perihan Hanım\'ın yüzü yeşil. Yokuş uzun.', secim: [
            { m: '“Yol parayla alınmaz. Yürürüz.”', etki: { remzi: 4 }, bayrak: { p7_remzi: 'yuru' }, adimlar: [
              ['f', 'Yol parayla alınmaz Remzi Bey. Yürürüz.', 'kararli'],
              ['remzi', 'Yürüyün. Faytonlar da arkanızdan yürür, boş.', 'gulumser'],
              'Yokuşu yürüdük; boş faytonlar alay eder gibi peşimizden geldi.',
            ] },
            { m: '“Bir fayton yeter. Perihan Hanım binsin.”', etki: { remzi: 5 }, bayrak: { p7_remzi: 'fayton' }, adimlar: [
              ['f', 'Bir fayton yeter. Perihan Hanım binsin, hasta.', 'kararli'],
              ['remzi', 'Üvey annenize fayton, size yokuş. Cömertsiniz, öğrenirim.', 'gulumser'],
              { goster: ['calibe', 'gulumser'] },
              ['calibe', 'Remzi Bey ne kibar…', 'gulumser'],
              { gizle: 'calibe' },
              /* GPT T28 (7-D1): genel hüküm yerine görülen hareket ve olasılık */
              /* Tur 29 (B7 diyalog 3): özne açık */
              ['ic', 'Perihan Hanım faytonu babamın önünde övdü. Remzi Bey beni isterse, araya girmeyecek.', 'endiseli'],
            ] },
            { m: '“Faytonların parasıyla iskeleye çeşme yaptırın.”', etki: { remzi: 6 }, bayrak: { p7_remzi: 'cesme' }, adimlar: [
              { goster: ['remzi', 'saskin'] },
              ['remzi', 'Çeşme mi? … Taşına adımı yazdırırım ama.'],
              ['f', 'Yazdırın. Taşı sizin, suyu herkesin.', 'gulumseyen'],
            ] },
          ] },
          { goster: ['remzi', 'ana'] },
          /* Tur 33 (B7 sürük 1): Remzi'nin iskelesi bölümün sorusuna (misafir ve Perihan'ın planı) bağlanır */
          { eger: (S) => !muk(S), ise: [
            ['remzi', 'Parasını peşin saydım, faytonu alamadım. Perihan Hanım misafirine ayırtmış.', 'mahcup'],
          ] },
          /* Tur 27 (6. bölüm oynanış (b)3): 6. bölümün yelpazesi (p6_v_yelpaze) Ada'da anılır (Tur 29: fayton seçiminden sonra) */
          { eger: (S) => b(S).p6_v_yelpaze === 'al', ise: [
            ['remzi', 'Yelpazem elinizde mi? Ada sıcak demiştim, yanılmadım.', 'gulumser'],
          ], degilse: [{ eger: (S) => b(S).p6_v_yelpaze === 'geri', ise: [
            ['remzi', 'Yelpazemi geri yolladınız: “Ada\'da rüzgâr bol.” Rüzgârı geri yollayamazsınız.', 'kararli'],
          ] }] },
          ['remzi', 'Bu akşam köşkümde sofra var. Babanız gelir; siz de gelirsiniz.', 'kararli'],
          { soru: 'Babam “bakarız” dedi. Remzi Bey bana bakıyor.', secim: [
            { m: '“Bu akşam bizim misafirimiz var.”', etki: { remzi: 3 }, bayrak: { p7_sofra: 'misafir' }, adimlar: [
              ['f', 'Bu akşam bizim misafirimiz var.', 'kararli'],
              ['remzi', 'Misafiriniz kim olursa olsun, faytonu benden.', 'gulumser'],
            ] },
            { m: '“Babam gelirse, valsi sayarım.”', etki: { remzi: 6 }, bayrak: { p7_sofra: 'vals' },
              /* Tur 29 (B7 anlatı 8): şartın içeriği korunur; vals babanın gelmesine bağlı */
              iz: 'Valsi babanın gelmesine bağladın. Remzi şartı not etti.', adimlar: [
              ['f', 'Babam gelirse, valsinizi sayarım.', 'gulumseyen'],
              ['remzi', 'Sayın. On iki kişilik orkestra getirttim; bir kişi dinlesin diye.', 'mahcup'],
            ] },
            /* Oynanış T1 B3: hediye perdeyi geri çeviren cevap Remzi'nin ilgisini azaltır (−3) */
            { m: '“Perdemizi bu akşam asarız.”', etki: { remzi: -3 }, bayrak: { p7_sofra: 'perde' },
              iz: 'Remzi\'nin perdesini geri çevirdin. Gönlü soğudu, ama vazgeçmedi.', adimlar: [
              ['f', 'Perdemizi bu akşam asarız Remzi Bey.', 'kararli'],
              ['remzi', 'Asın. Lyon tülü sandıkta bekler; ben de beklerim.', 'kararli'],
            ] },
          ] },
          { gizle: 'remzi' },
          /* Serbest vakit: öğleden akşamüstüne Ada'da dolaşılır; hedef sofa */
          { gorev: 3 }, { vakit: VAKIT_IKINDI },
        ],
      },

      /* ---------------- 4. Akşamüstü: aralık kapıda itiraf ---------------- */
      {
        id: 'p7_itiraf', mekan: 'ada_sofa', tetik: 'giris', kosul: (S) => S.gorev === 3, sahne: [],
        adimlar: [
          ['an', 'Akşamüstü sofa boştu, yalnız perdeler rüzgârla dalgalanıyordu.'],
          { efekt: 'hickirik' }, // Tur 30 (t30 B7 ses (b)): kapının ardından Hatice'nin hıçkırığı
          'Perihan Hanım\'ın kapısı aralık. İçeride biri hıçkırıyor: Hatice.',
          /* Tur 27 (görsel 3): Hatice kapının ardında; portresi gösterilmez, sesi gelir.
             Tur 27b (GPT B7-A2/D2): itiraf anlatıcının kutusunda değil, Hatice'nin kendi kutusunda; "doğrusu bu" ilanı
             kalktı (doğruluk, çelişen ezberin açılmasıyla anlaşılır) */
          /* Tur 30 (B7 anlatı (b)2): vaadin bedeli (Hatice'nin geleceği) anlatıcıda tek cümle */
          ['an', 'Hatice ağladıkça sözlerini yutuyor, Perihan Hanım tekrar söylemesini istiyordu.'],
          ['reftar', 'Nabi Bey “seni evime hanım yaparım” dedi hanımım.', 'korkmus'],
          /* Diyalog T1 (7.9): bozuk deyim düzeltildi; romandaki ikinci cümle kalır */
          ['calibe', 'Başına geleceği düşünmedin mi? Ben efendiye ne cevap vereceğim?', 'ofkeli'],
          /* Küçük soru kapanır: şişeleri taşıyan elin nedeni */
          /* Tur 30 (t30_b05_08 B7 anlatı 2, şüphe ≠ hüküm): kapı aralığından duyulan iki cümle hüküm değil, olasılık */
          ['ic', '“Hanım yaparım” demiş. Hatice şişeleri taşırken buna mı inanıyordu?', 'mahzun'],
          { soru: 'Kapı aralık. Sesler alçaldı.', secim: [
            { m: 'Kapı aralığında kal.', bayrak: { p7_itiraf: 'dinle' }, iz: 'Sonuna kadar dinledin. Perihan Hanım\'ın vaadi artık senin kozun.', adimlar: [
              ['calibe', 'Ağla bakalım. Suçu bir başkasının üstüne atarız; sen de kurtulursun.', 'sinsi'],
              ['reftar', 'Ne derseniz harfi harfine yaparım.', 'korkmus'],
              { koz: ITIRAF, kaynak: 'Kapı aralığından duydum', alt: 'Hatice Nabi Bey\'e kanmış. Perihan Hanım suçu bir başkasının üstüne atmayı vaat etti.' },
              ['ic', 'Bir başkası. Ya misafir, ya ben.', 'endiseli'],
            ] },
            { m: 'Kapıyı it: “Kim ağlıyor?”', etki: { vakar: 1, calibe_suphe: 1 }, bayrak: { p7_itiraf: 'gir' },
              iz: 'İçeri girdin. Perihan Hanım kapısını ittiğini unutmayacak.', adimlar: [
              { goster: ['calibe', 'saskin'] }, { goster: ['reftar', 'korkmus'] },
              'Hatice yerde, Perihan Hanım\'ın ayak ucunda. Yüzü sırılsıklam.',
              ['calibe', 'Kız başını kapıya vurdu. Sen git kızım.', 'soguk'],
              /* GPT T26 Süha (B7 anlatı 2): hüküm önce bir gözleme dayanır */
              ['ic', 'Alnında iz yok, eteğinin dizi toz içinde. Başını vurmamış, ayaklarına kapanmış.', 'mahzun'],
              { gizle: 'calibe' }, { gizle: 'reftar' },
            ] },
            /* Oynanış T1 B1: görünür koz seçeneği. Yüzüğün eşi Nabi Bey'in parmağında (2. bölüm); Perihan'ın önünde
               söylenince koz tükenir. Sonraki bölümler için p7_itiraf 'gir' kalır; p7_koz 'yuzuk' akşam sofrasında okunur. */
            { m: 'Kapıyı it: “Nabi Bey\'in yüzüğü de sende mi Hatice?”', kozGerek: [YUZUK, 'Hatice ile Nabi Bey'], kosul: (S) => var_(S, YUZUK) || b(S).p_reftar === 'izledi',
              etki: { vakar: 1, calibe_suphe: 2 }, bayrak: { p7_itiraf: 'gir', p7_koz: 'yuzuk' },
              iz: 'Yüzüğün sırrını Perihan Hanım\'ın önünde açtın. Artık sır değil.', adimlar: [
              { goster: ['calibe', 'saskin'] }, { goster: ['reftar', 'korkmus'] },
              'Hatice yerde, Perihan Hanım\'ın ayak ucunda. Elini önlüğüne sakladı.',
              ['calibe', 'Nabi\'nin yüzüğü mü? Kardeşimin işini ben bilirim kızım.', 'soguk'],
              /* Tur 29 (B7 şüphe ≠ hüküm): yüzdeki kıpırtı gözlem; bilip bilmediği tahmin */
              ['ic', 'Yüzü dondu. Bilmiyor muydu, yoksa bildiğini mi saklıyor?', 'endiseli'],
              { eger: (S) => var_(S, YUZUK), ise: [{ kozYak: YUZUK }], degilse: [{ eger: (S) => var_(S, 'Hatice ile Nabi Bey'), ise: [{ kozYak: 'Hatice ile Nabi Bey' }] }] },
              { gizle: 'calibe' }, { gizle: 'reftar' },
            ] },
            { m: 'Geri çekil. Merdivende bekle.', bayrak: { p7_itiraf: 'bekle' }, iz: 'Görünmeden bekledin. Hatice\'nin yeni yüzüğünü gördün.', adimlar: [
              'Merdivenin başına oturdum. Hatice çıktı; gözleri kan çanağı.',
              'Parmağında bir yüzük: Perihan Hanım\'ın firuzesi. Bu sabah konakta kendi parmağındaydı.',
              ['ic', 'Önce ağlatmış, sonra süslemiş. Bu yüzük susmanın bedeli mi, başka bir işin mi?', 'endiseli'],
            ] },
          ] },
          { gorev: 4 },
          { ara: { mekan: 'ada_sofa', yer: 'Ada evi · akşam', satirlar: [
            /* Sürükleyicilik T1 (S5): hava satırı kesildi; köprü satırı akşamı zaten taşıyor */
            'Feride o hıçkırığı kapının ardında bırakmadı. Akşam sofrasına otururken onu da yanında götürdü.',
            /* Anlatı T2 (7 (b)2): kötüyü bir kez "öte yanda" gösterir; sırrı çözmez */
          ] } },
        ],
      },

      /* ---------------- 5. Akşam: misafir kalıyor ---------------- */
      {
        id: 'p7_aksam', mekan: 'ada_sofa', tetik: 'giris', kosul: (S) => S.gorev === 4, sahne: [],
        adimlar: [
          /* Tur 27 (ses 5): sofrayı Perihan yönetir (OLAY p7_aksam 'gerilim'; ses.js değişikliği ortak istekte) */
          { muzik: 'perihan' },
          { eger: muk, ise: [
            { eger: munevverVar, ise: [
              ['an', 'Münevver Hanım ikindi vapuruyla İstanbul\'a dönmüş, oğlunu Sait Efendi\'ye emanet etmişti.'],
            ] },
            { eger: (S) => b(S).p7_davet === 'kacir', ise: [
              { efekt: 'vapur' }, 'Son vapurun çanı çaldı. Kenan Bey kıpırdamadı.',
            ], degilse: [{ eger: (S) => b(S).p7_davet === 'uyar', ise: [
              'Kenan Bey saatine baktı. Son vapura yarım saat var.',
            ], degilse: [
              /* Anlatı T2 (rehber §3): dış olay anlatıcıya çevrildi */
              ['an', 'Kenan sofaya girince gözleri kafesi aradı, sonra Feride’ye döndü.'],
            ] }] },
          ], degilse: [
            /* Tur 18 (madde 7): not ulaştıysa Kenan babasına değil, Feride'ye gelir */
            { eger: notUlasti, ise: [
                            ['an', 'Akşam vapuruyla Kenan geldi. Selamını verirken fısıldadı: “Yazdığınız için geldim.”'],
            ], degilse: [
              ['an', 'Akşam vapuruyla Kenan Bey geldi. Sait Efendi\'nin elini öptü; Feride\'ye bakmaya ancak sonra cesaret etti.'],
            ] },
            /* Anlatı T2 (7 (b)4): Süha yolunda Kenan'ın gelişi bir artçı ister */
            /* GPT T28 (7-A1): uzak duran / konuşmayı kesen kıza seçmediği suçluluk yüklenmez */
            /* Tur 29 (t29_b05_08 B7 karşılaşma ≠ istek): sınır koyan ('baba' / 'duy') ve tülü çeken ('cek') kız da suçluluk taşımaz */
            { eger: (S) => b(S).p7_kic === 'kac' || ['bitti', 'baba', 'duy'].indexOf(b(S).p7_soz) >= 0 || b(S).p7_yasmak === 'cek', ise: [
              ['ic', 'Hekimden uzak durdum, oyun yine kuruldu. Bu akşam sözlümün yüzüne bakacağım.', 'kararli'],
              ], degilse: [
                ['ic', 'Bir yıldır sözlüm, vapurda bunu kendime hatırlatmadım. Bu akşam ikisinin de yüzüne bakacağım.', 'utanmis'],
            ] },
          ] },
          /* Aile sofrası (mercek_tanitim Y4): portreler ilk repliklerinin önünde tek tek katılır */
          /* Tur 27 (anlatı (b)2): Perihan'ın "hasta hanım" maskesi tek huy satırında */
          /* Tur 29 (B7 diyalog 6): "bu evde" sıklığı azaldı */
          ['an', 'Perihan Hanım sofraya da birinin koluna girerek geldi.'],
          { goster: ['sai', 'notr'] }, { goster: ['mukaddem', 'ana'] },
          { eger: (S) => b(S).p7_davet === 'kacir', ise: [
            ['mukaddem', 'Son vapuru kaçırdım efendim. Annem merak edecek.', 'endiseli'],
          ], degilse: [{ eger: (S) => b(S).p7_davet === 'uyar', ise: [
            /* Tur 28 (B7 anlatı 2): uyarılan Kenan kalmayı kendisi seçer; seçimi babanın sözü değil onun iradesi değiştirir */
            ['mukaddem', 'Saatim son vapuru gösteriyor efendim. İzin verirseniz yine de kalırım.', 'kararli'],
          ], degilse: [
            ['mukaddem', 'Annem merak eder efendim. Son vapurla dönmeliyim.', 'mahzun'],
          ] }] },
          /* Tur 33 (ifade envanteri 4): tuzak kuran maske gülüşü */
          { goster: ['calibe', 'sinsi'] },
          ['calibe', 'Çocuk bu kadar uzak yere gelmiş. Bu gece misafirimiz.', 'sinsi'],
          ['sai', 'Telgraf çekeriz oğlum. Burası kendi evin.', 'gulumser'],
          /* İkinci geçiş (GPT T23 Remzi): uyarılan misafirin kaybı aynı anda görünür */
          { eger: (S) => b(S).p7_davet === 'uyar', ise: [
            ['ic', 'Gitsin diye uyarmıştım. Kalmayı o seçti, benim için.', 'mahzun'],
          ] },
          { eger: muk, ise: [
            /* Sürükleyicilik T1 (b7_8_9 7.3): 'kacir' yolunda vapur çoktan gitti; soru ve seçenek her yolda geçerli */
            { soru: 'Kenan Bey bana baktı; Perihan Hanım da.', secim: [
              /* Diyalog T1 (karakter_sesleri §0): m ile Feride satırı aynı hitapta ("babacığım") */
              /* Tur 27 (diyalog 3): vapuru Feride kaçırttıysa saati sormaz; telgrafı ister */
              { m: '“Telgrafı Kenan Bey kendisi yazsın babacığım.”', kosul: (S) => b(S).p7_davet === 'kacir', etki: { mukaddem: 3, baba_guven: 1 }, bayrak: { p7_sofa: 'telgraf' }, adimlar: [
                ['f', 'Telgrafın sözünü Kenan Bey kendisi seçsin babacığım. Annesi onun sözünü tanır.', 'tebessum'],
                ['sai', 'Doğru söylersin. Yaz oğlum.', 'notr'],
                ['mukaddem', 'Kısa yazarım efendim. Annem kısa telgraftan çok şey okur.', 'utangac'],
              ['ic', 'Perihan Hanım peçeteyi dizine bıraktı. Misafiri o tutmadı; ben tuttum.', 'gulumseyen'],
              ] },
              { m: '“Vapurun saatini kim sordu babacığım?”', kosul: (S) => b(S).p7_davet !== 'kacir', etki: { calibe_suphe: 1 }, bayrak: { p7_sofa: 'vapur' }, adimlar: [
                ['f', 'Son vapurun saatini kim sordu babacığım?', 'mahzun'],
                ['calibe', 'Ben sordum kızım. Kalktı bile.', 'sinsi'],
                { eger: (S) => b(S).p7_davet === 'uyar', ise: [
                  /* Tur 30 (B7 şüphe ≠ hüküm): saati görmeden yalan hükmü yok */
                  ['ic', 'Kenan Bey\'in saatinde yarım saat vardı. Babam kendi saatine bakmıyor, Perihan Hanım\'ın sözü ona yetiyor.', 'mahzun'],
                ], degilse: [
                  ['ic', 'Saati o tutuyor. Misafirin ne zaman çıkacağını bile o seçiyor.', 'kararli'],
                ] },
              ] },
              { m: 'Bir şey deme. Gözünle “kalın” de.', etki: { mukaddem: 4 }, bayrak: { p7_sofa: 'goz' }, adimlar: [
                'Gözlerimle kalmasını istedim. Ceketini çözdü.',
                ['mukaddem', 'Telgrafı ben yazarım. Kısa olsun: “Kaldım.”', 'gulumser'],
              ] },
              { m: '“Şefik ona odasını göstersin.”', etki: { mukaddem: 3, sefik: 1 }, bayrak: { p7_sofa: 'sefik' }, adimlar: [
                { goster: ['sefik', 'sevincli'] },
                ['sefik', 'Kenan abi, gel odanı gör! Bir eksiği varsa söyle!', 'sevincli'],
                ['mukaddem', 'Eksiği yok Şefik. Fazlası var.', 'gulumser'],
                { gizle: 'sefik' },
              ] },
              /* Oynanış T1 B1 (b5_8 7 (b)2): koz kullanım anı; 6. bölümdeki haşhaş tortulu bardak yalnız sezdirilir,
                 açılmaz (kozYak yok). Perihan'ın hemen ardından gelen "Hatice'nin eli işe yakışır" teklifi bunun üstüne düşer. */
              { m: '“Misafirin şerbetini ben koyarım. Bardaklar karışmasın.”', kozGerek: BARDAK, kosul: (S) => var_(S, BARDAK),
                etki: { mukaddem: 3, calibe_suphe: 2 }, bayrak: { p7_sofa: 'bardak' },
                iz: 'Bardağı bildiğini Perihan Hanım\'a sezdirdin; kozun hâlâ sende.', adimlar: [
                ['f', 'Misafirin şerbetini ben koyarım babacığım. Bardaklar bazen karışıyor.', 'kararli'],
              ['ic', 'Perihan Hanım\'ın elindeki çatal bir an havada kaldı. Bardağı hatırladı.', 'kararli'],
              ] },
            ] },
          ], degilse: [
            ['an', 'Süha Bey sofaya girmişti.'],
            { goster: ['suha', 'notr'] },
            /* Tur 27 (diyalog 5): babanın sofrasında çekingen Kenan eğilmez */
            'Kenan Bey selamını bana verdi. Pencerenin camında, arkamda, Süha Bey\'in yüzü.',
            { soru: 'İkisi de bana bakıyor.', secim: [
              /* Oynanış T1 B3 (rakip çubuk): Süha yolunda Kenan'ın çubuğu da oynar; gülümseme +3, soğuk selam −3 */
              { m: 'Kenan Bey\'e gülümse. Süha görsün.', etki: { suha: 4, mukaddem: 3 }, bayrak: { p7_sofa: 'kiskan' },
                iz: 'Kenan\'a gülümsedin; ikisi de gördü.', adimlar: [
                /* Diyalog T1 (7.10): kurulmayan imge düzeltildi */
                'Kenan Bey\'e gülümsedim. Camda Süha Bey de dişlerini sıkarak gülümsedi.',
              ] },
              { m: '“Annenize dönün Kenan Bey.”', etki: { calibe_suphe: 1 }, bayrak: { p7_sofa: 'uyar' }, adimlar: [
                ['f', 'Annenize dönün Kenan Bey. Ada\'da geceler uzun.', 'mahzun'],
                ['mukaddem', 'Dönmek isterdim. Babanız bırakmıyor.', 'mahzun'],
                ['calibe', 'Ne ayıp kızım! Misafir kovulur mu?', 'ofkeli'],
              ] },
              { m: 'Selamını al. Başka söz yok.', etki: { mukaddem: -3 }, bayrak: { p7_sofa: 'soguk' },
                iz: 'Kenan\'ın selamını soğuk aldın. Sözlün bunu tarttı.', adimlar: [
                ['f', 'Hoş geldiniz.', 'mahzun'],
                /* GPT T26 Süha (B7 anlatı 1): gerdanlık günü bu yolda görüşülmedi */
                ['mukaddem', 'Ada\'da bana ilk sözünüz bu. Az değil.', 'mahzun'],
              ] },
            ] },
            { gizle: 'suha' },
          ] },
          /* Oynanış T1 B1: akşamüstü yüzük açıldıysa (p7_koz) Perihan teklifine onu da katar */
          { eger: (S) => b(S).p7_koz === 'yuzuk', ise: [
            ['calibe', 'Damat bey dadılarla büyümüş. Hatice hizmet etsin; elleri artık boş.', 'sinsi'],
          ], degilse: [
            ['calibe', 'Damat bey dadılarla büyümüş. Bir kız hizmet etsin, Hatice\'nin eli işe yakışır.', 'sinsi'],
          ] },
          /* Tur 27 (6. bölüm oynanış 5): konakta kalan Nimet'in uyarısı (p6_v_nimet) */
          { eger: (S) => !nimetVar(S) && !!b(S).p6_v_nimet, ise: [
            ['ic', 'Nimet “Ada\'da Hatice\'nin elinden bir şey içmeyin” demişti. Şimdi misafire o bakacak.', 'endiseli'],
          ] },
          /* Oynanış T1 B6: babamın güveni 60'a vardıysa "sen bilirsin"in yanına kızının sözünü de koyar */
          { eger: babaGuven, ise: [
            ['sai', 'Sen bilirsin. Kızım da misafire göz kulak olsun.', 'notr'],
          ], degilse: [
            ['sai', 'Sen bilirsin.', 'notr'],
          ] },
          /* Tur 18 (madde 7): uyarılan misafir ikramı dikkatle karşılar */
          { eger: notUlasti, ise: [
            ['mukaddem', 'Hizmet istemem hanımefendi. Bu gece suyumu bile kendim alırım.', 'kararli'],
          ] },
          { eger: (S) => b(S).p7_itiraf === 'dinle', ise: [
            /* Tur 30 (B7 şüphe ≠ hüküm): duyulan vaat ile kimin seçileceği tahmini ayrı */
            ['ic', 'Suçu bir başkasının üstüne atacaklardı. O başkası alt katta mı yatacak?', 'mahzun'],
          ], degilse: [{ eger: (S) => b(S).p7_itiraf === 'gir', ise: [
            ['ic', 'Hatice akşamüstü ayak ucunda ağlıyordu. Şimdi misafire mi bakacak?', 'mahzun'],
          ], degilse: [
            ['ic', 'Hatice\'nin parmağında yeni yüzük. Ödemesi bu gece mi?', 'endiseli'],
          ] }] },
          /* İkinci geçiş (GPT T23 Kenan): gece kararından önce evin kısa haritası */
          /* Anlatı T2 (7.3): ön merdivenin yanında mutfağa inen hizmet merdiveni de var (B8 asma yolu, B9 öğle) */
          /* Diyalog T1 (7.12): kutuya sığar; iki merdiven (ön ve hizmet) anılmaya devam eder */
          /* Tur 33 (B7 diyalog 3): rapor dili yerine anlatıcının ev kuralı */
          ['an', 'Misafir odası selamlığın yanındaydı. Mutfaktan bir ayak sesi gelince Feride arka merdiveni fark etti.'],
          { eger: (S) => b(S).p7_remzi === 'fayton', ise: [['ic', 'Yokuşta arabayı ona bıraktım. Burada kimin kapıda duracağını ben söyleyebilirim.', 'kararli']], degilse: [['ic', 'Ön merdivende dursam mutfaktan ineni göremem.', 'endiseli']] },
          /* Tur 22 ek (GPT öneri 2): eski hizmet sorusunun yerine tek kararlık küçük güvenlik düzeni. Şefik'in yeri
             herkesin önünde söylenir; Nimet'e (Nimet Ada'da değilse Madam'a) kulağına. Kalan her yerin bedeli
             karar anında görünür: benimle gelen kapıyı tutamaz, kapıda kalan alt katta yanımda olamaz. */
          /* Tur 27 (sürük. 3): soruya süre ve bekleyen yüz */
          { soru: 'Perihan Hanım Hatice\'ye göz kırptı. Kim nerede duracak, şimdi söylemezsem o söyleyecek.', secim: [
            gorevSecenegi(true, true, 'nimet'), gorevSecenegi(true, false, 'nimet'),
            gorevSecenegi(false, true, 'nimet'), gorevSecenegi(false, false, 'nimet'),
            gorevSecenegi(true, true, 'madam'), gorevSecenegi(true, false, 'madam'),
            gorevSecenegi(false, true, 'madam'), gorevSecenegi(false, false, 'madam'),
          ] },
          { gizle: 'sai' }, { gizle: 'calibe' }, { gizle: 'mukaddem' },
          /* Serbest vakit: yemekten sonra, beyler sahildeyken; hedef oda. Önceden kısa ipucu (GPT öneri 3). */
          ['an', 'Yemekten sonra beyler sahile indi, Hatice de misafir yatağına koyuldu.'],
          { gorev: 5 }, { vakit: VAKIT_GECE },
        ],
      },

      /* ---------------- 6. Gece: aynı evde ---------------- */
      {
        id: 'p7_gece', mekan: 'ada_oda', tetik: 'giris', kosul: (S) => S.gorev === 5, sahne: [],
        adimlar: [
          /* Tur 22 ek: dünya yalnız iş yapılınca ilerledi; ★ ile doğrudan çıkan için beyler gece yarısına kadar sahilde */
          /* Tur 27 (anlatı (b)1): gece açılışı ara sayfa; ince kapılı evin kuralı */
          /* Tur 29 (t29_b05_08 B7 anlatı 1): ara sayfa saati önceden geçirmez; Perihan'ın kapısına vuran kızda tepsi
             gece yarısından önce iner (iç ses bunu söyler), ötekilerde gece yarısında */
          { ara: { mekan: 'ada_oda', yer: 'Ada evi · gece', satirlar: [
            (S) => (ilk(S)
              ? 'Beyler sahilden erkenden döndü, Ada evi sustu. Deniz susmadı, ince kapılar da.'
            : 'Erkekler geç saate kadar sahilde gezdi. Sonra Ada evi sustu. Deniz susmadı, ince kapılar da.'),
          ] } },
          /* Tur 27 (anlatı 3): romantik sahneden önceki durum satırları azaldı; misafir sofrası yolunda köşk satırı yok */
          { eger: (S) => b(S).p7_sofra === 'vals', ise: [
            /* Tur 29 (B7 anlatı 8): şart bozulmadı; vals borcu kesinleşmiş sayılmaz */
            'Karşı köşkte orkestra çalıyor. Babam gitmedi, vals borcum doğmadı; Remzi Bey yine de çaldırıyor.',
          ], degilse: [{ eger: (S) => b(S).p7_sofra === 'perde', ise: [
            /* İkindi vaktinde pencereye gerilen şal */
            { eger: (S) => b(S).p7_v_pencere === 'sal', ise: [
              'Karşı köşkün ışığı şalımda kaldı. Lyon tülü daha gelmedi.',
            ], degilse: [
              'Karşı köşkün ışığı odama vuruyor. Lyon tülü daha gelmedi.',
            ] },
          ] }] },
          /* Sabah seçilen kapı bekçisi gece gerçekten yerinde */
          { eger: (S) => b(S).p7_kapi === 'surgu', ise: [
            /* Tur 29 (t29_b05_08 B7 oynanış 1): sürgü sonda gerçekten çekilir (Kenan: tepsi / bekçi sonları; Süha: kapı sorusu) */
            'Sürgüyü öğlen marangoz takmıştı. Demiri elimin altında.',
          ], degilse: [{ eger: (S) => b(S).p7_kapi === 'nimet', ise: [
            /* Doğrulama gece (oyuncu Remzi B7): akşam "benimle gelsin" denen Nimet'in sabahki yatağı sırayla söylenir */
            { eger: bekciBenle, ise: [
              'Nimet benimle yukarı çıkıp yatağını yine kapımın önüne serdi. Tespihi tıkırdıyor.',
            ], degilse: [
              'Nimet yatağını kapımın önüne serdi. Uyumadığını nefesinden anlıyorum.',
            ] },
          ], degilse: [{ eger: (S) => b(S).p7_kapi === 'madam', ise: [
            'Madam bitişik odada; duvarın ardından Fransızca bir dua geliyor.',
          ], degilse: [{ eger: (S) => b(S).p7_kapi === 'sefik', ise: [
            /* 6. bölüm sabah vakti: mutfakta "Ona dayı deme" */
            { eger: (S) => b(S).p6_v_sefik === 'bey', ise: [
              'Şefik yanımda uyudu. Uyumadan sordu: “Nabi Bey buraya gelmez, değil mi?”',
            ], degilse: [
              'Şefik bir eli eteğimde, yanımda uyudu.',
            ] },
          ], degilse: [
            'Kapımı açık bıraktım. İçeri deniz kokusu doluyor.',
          ] }] }] }] },
          /* Tur 22 ek (GPT öneri 2): akşam verilen görevin karşılığı. Kapıda kalan döndüğümde konuşur;
             oda boş kaldıysa (en az bir iş için aşağı indiysem) Perihan Hanım aramıştır. Sandıkta gerçekten
             haşhaş şişesi varsa alır (koz elimden çıkar); yoksa şişe uydurulmaz, yalnız odayı boş bulur. */
          { eger: (S) => b(S).p7_v_bekci === 'kapi', ise: [
            { eger: nimetVar, ise: [
              { goster: ['mehves', 'kararli'] },
              { eger: ilk, ise: [
                /* Tur 30 (B7 diyalog (b)): Nimet'in tespih imzası */
                ['mehves', 'Perihan Hanım iki kez geçti, kapıyı yokladı. Tespihim durmadı, kapı da açılmadı.', 'kararli'],
              ], degilse: [
                ['mehves', 'Kimse yaklaşmadı hanımcığım. Ben kapının önündeydim.', 'notr'],
              ] },
              { gizle: 'mehves' },
            ], degilse: [
              { goster: ['josephine', 'ana'] },
              { eger: ilk, ise: [
                ['josephine', 'Perihan Hanım iki kez geçti. Kapıyı yokladı, ben kıpırdamadım.', 'kararli'],
              ], degilse: [
                /* Tur 29 (B7 diyalog (b)): Madam'ın hece hece kırık Türkçesi */
                ['josephine', '{i}Personne.{/i} Kapı a-ra-lık bile olmadı, ma chère.', 'notr'],
              ] },
              { gizle: 'josephine' },
            ] },
          ], degilse: [{ eger: (S) => bekciBenle(S) && !!ilk(S), ise: [
            { eger: sandiktaSise, ise: [
              /* Tur 29 (t29_b05_08 B7 anlatı 6, şüphe ≠ hüküm): kimse görmedi; fail tahmin, hüküm değil */
              ['ic', 'Sandığım karışık, odam boşken haşhaş şişesi gitmiş. Kimin aldığını görmedim.', 'endiseli'],
              { kozYak: HASHAS }, { kozKaynak: [HASHAS, 'Oda boşken sandığımdan alındı'] },
              { bayrak: { p7_v_arama: 'sise' } }, { etki: { calibe_suphe: 1 } },
            ], degilse: [
              /* Oynanış T1 B5: sabah sandığın dibinden şişeyi koynuna alan kız (p7_k_sise) aramayı boşa çıkarır */
              { eger: (S) => b(S).p7_k_sise === 'koyun', ise: [
                ['ic', 'Sandığım karıştırılmış. Şişe feracemin cebindeydi, Perihan Hanım eli boş döndü.', 'kararli'],
              ], degilse: [
                ['ic', 'Yastığım düzeltilmiş, sandık kilitli. Biri odamı boş bulmuş, yalnız bunu öğrendi.', 'endiseli'],
              ] },
              { bayrak: { p7_v_arama: 'bos' } }, { etki: { calibe_suphe: 1 } },
            ] },
          ] }] },
          { eger: muk, ise: [
            /* --- Kenan yolu: bir kat arayla --- */
            /* Tur 29 (t29_b05_08 B7 ses 5): gıcırtı tek tahta sesi; ayak sesi kendi satırında */
            { efekt: 'tahta' },
            { eger: (S) => b(S).p7_v_camlik === 'kozalak', ise: [
              'Döşeme gıcırdadı; aşağıda bir kozalak yuvarlandı. Misafir odası tam altımda.',
            ], degilse: [
              'Döşeme gıcırdadı. Misafir odası tam altımda.',
            ] },
            { efekt: 'adim' },
            'Ayak sesi: pencereye, kapıya, pencereye. O da uyumuyor.',
            { soru: 'Bu kez perde yok, yalnız bir kat tahta.', secim: [
              { m: 'Saç fırçanla döşemeye üç kez vur.', etki: { mukaddem: 5 }, bayrak: { p7_tavan: 'uc' }, adimlar: [
                /* Tur 29 (B7 ses 3): Kenan yolunun imza anı duyulur */
                /* GPT T29 SE7-1: çağrı, cevap ve son vuruş ayrı adımlarda (üçlü vuruş dosyası üretimde) */
                { efekt: 'uc_tik' },
                'Üç kez vurdum; ayak sesi durdu.',
                { efekt: 'uc_tik_alt' },
                'Ayağımın altında üç tık.',
                ['ic', 'İyi geceler. Bir evin içinde, bir kat arayla.', 'utanmis'],
                { efekt: 'kapi_tik' },
              'Bir kez daha vurdu, yavaşça. Bu vuruşu konuşmamıştık; ben de bir kez vurdum.',
              ] },
              { m: 'Pencereyi aç. Aşağıya fısılda.', etki: { mukaddem: 6, itibar: -1 }, bayrak: { p7_tavan: 'pencere' }, adimlar: [
                'Pencereyi açtım. Aşağıda bir pencere daha açıldı.',
                ['f', 'İyi geceler Kenan Bey.', 'utanmis'],
                ['mukaddem', 'Deniz sesinden duyamadım. Bir daha.', 'utangac'],
                ['f', 'Duydunuz.', 'gulumseyen'],
                ['mukaddem', 'Duydum. Bir daha.', 'utangac'],
              ] },
              { m: 'Lambanı söndür. Adımlarını say.', etki: { mukaddem: 3 }, bayrak: { p7_tavan: 'say' }, adimlar: [
                { efekt: 'kandil' }, 'Söndürdüm. Aşağıda adımlar durdu, merdiven boşluğundan ışığımın kesildiğini görmüş.',
                'Sonra yatağın gıcırtısı. İkimiz de aynı karanlıkta yatıyoruz.',
              ] },
            ] },
            { eger: (S) => b(S).p6_son === 'sor', ise: [
              /* Tur 29 (B7 şüphe ≠ hüküm): gözlem + tahmin */
              'Koridorda bir lamba durdu, geçti, kapıma gelmedi. Süha Bey\'in lambası mıydı?',
            ] },
            /* Tur 22 ek: dolabın önünde gerçekten görüldüysem gören de gece evde */
            { eger: (S) => b(S).p7_v_goren === 'suha', ise: [
              'Merdivenin dibinde bir sigara ucu parladı, söndü. Dolabın önünde beni gören adam uyumamış.',
            ] },
            /* Tur 28 (B7 ses 1): Hatice merdivende belirince gerilim (doruk dallarının hepsinde müzik değişir) */
            { muzik: 'gerilim' },
            /* Tur 22 ek (GPT öneri 2): Şefik Kenan'ın yanında kaldıysa misafir yalnız değil; tepsi yine gelir */
            { eger: (S) => b(S).p7_hizmet === 'sefik', ise: [
              /* Diyalog T1 (7.11, 7.15): "ağabey" değil; Kenan yolunun iç sesinde ad tek biçimde ("Kenan") */
              ['ic', 'Şefik aşağıda, Kenan\'ın odasında. Odam onsuz fazla sessiz.', 'mahzun'],
              'Merdivende yalınayak Hatice; elindeki tepside konyak.',
            ], degilse: [
              'Merdivende yalınayak Hatice; elindeki tepside bir şişe konyak.',
              ['ic', 'Şefik\'i yanıma almıştım. Kenan\'ın kapısında bu gece kimse yok.', 'mahzun'],
            ] },
            /* Gece vaktinde selamlık dolabı; 6. bölümde Perihan'ın sandığındaki konyak. İşaret gerçekten
               konduysa aynı şişe tepside tanınır; konmadıysa tanıma satırı açılmaz. */
            { eger: (S) => b(S).p7_v_dolap === 'centik', ise: [
              'Lamba mührün kenarını yaladı: bir çentik. Benim tırnağım.',
              ['ic', 'Selamlık dolabının şişesi. Kenan içmez ama kapısı çalınırsa açar.', 'endiseli'],
            ], degilse: [{ eger: (S) => !!b(S).p7_v_dolap, ise: [
              /* Tur 29 (B7 diyalog 5): akıl yürütme satırlarında öfkeli portre yok */
              ['ic', 'Selamlık dolabındaki şişe. Kenan içmez ama kapısı çalınırsa açar.', 'endiseli'],
            ], degilse: [
              /* Tur 28: 6. bölümde sandık sahnesi zorunlu; konyağı her yolda tanır */
              ['ic', 'Perihan Hanım\'ın sandığından çıkan konyak. Kenan içmez ama kapısı çalınırsa açar.', 'endiseli'],
            ] }] },
            /* Tur 27 (oynanış 2): Perihan'ın kapısında duyulan saat (p7_v_kulak) */
            { eger: (S) => b(S).p7_v_kulak === 'vur', ise: [
              ['ic', 'Kapısına vurmuştum, saatini değiştirmiş. Tepsi gece yarısını beklemeden indi.', 'endiseli'],
            ], degilse: [{ eger: (S) => !!b(S).p7_v_kulak, ise: [
              ['ic', 'Perihan Hanım “gece yarısı” demişti. Saatini şaşırmadı.', 'endiseli'],
            ] }] },
            /* Sürükleyicilik T1 (b7_8_9 7.4, S5): süreye bedel eklendi */
            { soru: 'Hatice üçüncü basamakta. İnersem sabah beni onun eşiğinde görmüş olurlar.', secim: [
              { m: 'Merdivene in. Tepsiyi elinden al.', etki: { mukaddem: 5, itibar: -1 }, bayrak: { p7_son: 'tepsi' },
                iz: 'Konyağı Hatice\'nin elinden aldın. Sabahın delili sende, eşikte görülen de sen.', adimlar: [
              { mekan: 'ada_sofa' },
              { goster: ['reftar', 'korkmus'] },
                /* Tur 29 (t29_b05_08 B7 görsel 5): metin an_tepsi resmine uydu (tepside şişe ve kadeh) */
                'Tepsiyi aldım. Şişenin mührü sağlamdı.',
                /* Tur 28 (B7 görsel 1): an_tepsi'de kristal bir şişe; delilin mührü tıpada (yeniden çizim üretim listesinde) */
                /* ORTAK: an_tepsi mühürlü şişeyle yeniden çiziliyor; satır iki resme de uyar */
                /* Diyalog T1 (7.14): Hatice Feride'ye "küçük hanım" der */
                { gizle: 'reftar' },
                /* Misafir odası alt katta, selamlığın yanında: tepsiyle merdiveni inerim */
                /* Anlatı T2 (mercek_doz §2b): genel "gece yarısı kız" kuralı yerine bu gecenin kendi tehlikesi */
                { ara: { mekan: 'ada_selamlik', yer: 'Ada evi · alt kat, gece', satirlar: [
                  'Feride tepsiyi arka verandaya indirdi. Şişenin tıkırtısıyla kapı açıldı.',
                  /* Tur 29 (B7 görsel 5): an_tepsi'de kapı arka verandaya açılıyor; metin resme uyduruldu */
                ] } },
                /* 7.10: Şefik Kenan'ın yanında yatıyorsa kapı açılırken o da anılır */
                /* GPT T25 Kenan (B7 anlatı 3): vurmadan nasıl duyduğu küçük bir sesle bağlanır */
                /* Tur 27 (ses 3): şişenin tıkırtısı ve doruk; tek seferlik doruk bölüm sonu başlığını bekler */
                { efekt: 'sise' },
                /* Tur 32 (B7 ses 2): kapı aralığındaki fısıltılı an için 'doruk' fazla gürültülü; romantik parça kapı kapanınca */
                { muzik: 'sessiz' },
                { goster: ['mukaddem', 'endiseli'] },
                /* Sürükleyicilik T1: kesik romantik satır (b7_8_9 (b)3); an resmi vurucu cümleden sonra (S6);
                   kapanış: tek kısa anlatıcı satırı, kart en sonda (S2); kart ifşa (S1).
                   Tur 27 (sürük. (b)3): kapı aralığında yarım cümleyle biter */
                /* Tur 29 (t29_b05_08 B7 anlatı 7): konyak misafire teslim edilmez; kartın "delil elimde"si ekranda görünür */
                { cizim: 'an_tepsi' },
                /* Tur 28 (B7 diyalog 1): çıplak "Feride" sonraki bölümlere saklı; yarıda kesilen hitap */
                ['mukaddem', 'Feride Ha—', 'utangac'],
                /* Tur 29 (B7 diyalog (b)): "Yarın." somut bir şey bırakır */
                ['f', 'Yarın söyleyin. Bu gece kapınızı kimseye açmayın.', 'kararli'],
                { gizle: 'mukaddem' },
                /* Tur 33 (B7 ses 2): tehlike kancası romantik temayla yumuşamaz */
                { efekt: 'kapi_kapa' }, { muzik: 'gece' },
                /* Tur 29 (B7 oynanış 1): Ada'ya taşınan sürgü bu gece çekilir */
                { eger: (S) => b(S).p7_kapi === 'surgu', ise: [
                  { efekt: 'surgu' },
                  ['an', 'Feride odasına çıkıp sürgüsünü çekti. Koridorun ucunda bir lamba yandı.'],
                ], degilse: [
                  ['an', 'Yukarıda bir lamba yandı.'],
                ] },
                /* Tur 32 (B7 sürük 3): kart envanter değil his taşır */
                { kart: 'Kenan’ın kapısı kapandı. Şişeyi vermedim.' },
              ] },
              { m: 'Nimet\'i uyandır: merdivende otursun.', kosul: nimetVar, etki: { mehves: 1 }, bayrak: { p7_son: 'bekci' },
                iz: 'Ön merdiveni tuttun. Konyak başka yoldan inecek.', adimlar: [
                { goster: ['mehves', 'kararli'] },
                ['mehves', 'Sabaha kadar burada otururum. Kimse geçemez.', 'kararli'],
                'Hatice tepsiyle geri döndü. Selamlıkta bir kapı açıldı.',
                /* Tur 27 (oynanış 4): bekçinin işi kartta değil, getirdiği delilde de görünür */
                /* Tur 32 (B7 anlatı 1): bekçi sözünü bozmaz; lekeyi Feride kendisi bulur */
                ['mehves', 'Hanımcığım, Hatice\'nin tepsisi boş döndü. Hizmet merdiveninden konyak kokusu çıkıyor; ben buradan kıpırdamadım.', 'endiseli'],
                { gizle: 'mehves' },
                'Lambamı alıp hizmet merdiveninin başına yürüdüm. İkinci basamakta konyak kokan bir damla.',
                { delil: 'Hizmet merdiveninde konyak lekesi' },
                /* Tur 29 (t29_b05_08 B7 görsel 3): doruk resmi (üretimde; resim gelene kadar adım atlanır) */
                { cizim: 'an_bekci' },
                /* Tur 27 (anlatı 1): kapanış anlatıcı satırı; kartın sözünü önceden söylemez. Tur 29 (oynanış 1): sürgü.
                   Tur 30 (t30_b05_08 B7 sürük 1): "konyak hizmet merdiveninden indi" bilgisi yalnız bekçinin delil satırında
                   (bir kez); anlatıcı lekeyi, kart lambayı, kanca lambanın sahibini söyler (8. bölüm açılışı ortak notunda) */
                { eger: (S) => b(S).p7_kapi === 'surgu', ise: [
                  { efekt: 'surgu' },
                  ['an', 'Feride sürgüsünü çekti. Ön merdiven tutulmuştu; lekenin gösterdiği yolu ise kimse tutmamıştı.'],
                ], degilse: [
                  ['an', 'Ön merdiven tutulmuştu; lekenin gösterdiği yolu ise kimse tutmamıştı.'],
                ] },
                { muzik: 'sessiz' },
                { kart: 'Ön merdiven benim. Selamlıkta bir lamba yandı.' },
              ] },
              { m: 'Madam\'ı uyandır: merdivende otursun.', kosul: (S) => !nimetVar(S), etki: { josephine: 1 }, bayrak: { p7_son: 'bekci' },
                iz: 'Ön merdiveni tuttun. Konyak başka yoldan inecek.', adimlar: [
                { goster: ['josephine', 'ana'] },
                ['josephine', '{i}Je reste ici.{/i} Kimse geçmez, ma chère.', 'kararli'],
                'Hatice tepsiyle geri döndü. Selamlıkta bir kapı açıldı.',
                ['josephine', 'Tepsi boş döndü, ma chère; öbür merdiven {i}cognac{/i} kokuyor. Ben kalkmadım.', 'endiseli'],
                { gizle: 'josephine' },
                'Lambamı alıp hizmet merdiveninin başına yürüdüm. İkinci basamakta konyak kokan bir damla.',
                { delil: 'Hizmet merdiveninde konyak lekesi' },
                { cizim: 'an_bekci_madam' },
                { eger: (S) => b(S).p7_kapi === 'surgu', ise: [
                  { efekt: 'surgu' },
                  ['an', 'Feride sürgüsünü çekti. Ön merdiven tutulmuştu; lekenin gösterdiği yolu ise kimse tutmamıştı.'],
                ], degilse: [
                  ['an', 'Ön merdiven tutulmuştu; lekenin gösterdiği yolu ise kimse tutmamıştı.'],
                ] },
                { muzik: 'sessiz' },
                { kart: 'Ön merdiven boş. Selamlıkta bir lamba yandı.' },
              ] },
              /* Tur 27 (sürük. 2): izleyen kız da sesli bir hamle yapar; Hatice eşikte kalır (8. ve 10. bölüm 'izle'yi böyle okur) */
              { m: 'Merdivenin başından izle; Hatice seni görsün.', bayrak: { p7_son: 'izle' }, iz: 'Eşiği gözünden kaçırmadın, Hatice de seni gördü. Sabah tanık sensin.', adimlar: [
                'Hatice kapıya vurdu. İçeriden onun sesi: “Bir şey istemem, iyi geceler.”',
                /* Gece vaktinde yastığın altına konan anahtar */
                { eger: (S) => b(S).p7_v_anahtar === 'yastik', ise: [
                  'Kapı açılmadı, anahtarı bulup kilitlemiş. Hatice eşiğe oturdu, tepsi kucağında.',
            ], degilse: [
              'Kapı açılmadı. Hatice gitmedi, tepsi kucağında eşiğe oturdu.',
                ] },
                /* Sürükleyicilik T1 (S3): kulak misafiri kalan kız tanıklığı kendi kararıyla üstlenir; kart ifşa */
                'Hatice başını kaldırdı; merdivenin başında beni gördü.',
                ['f', 'Otur orada Hatice. Sabaha kadar ben de buradayım.', 'kararli'],
                /* Tur 29 (t29_b05_08 B7 oynanış 5): anahtar için verilen söz (p7_v_hatice) eşikte anılır */
                { eger: (S) => b(S).p7_v_hatice === 'soz', ise: [
                  ['reftar', 'Sözünüz var küçük hanım. Sabah önce beni.', 'korkmus'],
                ] },
                /* Tur 29 (B7 görsel 3): doruk resmi (üretimde; resim gelene kadar adım atlanır) */
                { cizim: 'an_esik_hatice' },
                ['ic', 'O eşik gözümün önünde. Sabah orada olanı görmüş tek kişi ben olacağım.', 'kararli'],
            ['an', 'Feride sabaha kadar o eşiğe baktı. Tanıklık etmeye kendisi karar vermişti.'],
                { muzik: 'sessiz' },
                { kart: 'Hatice eşiğe oturdu. Sabah kapıdan çıkan onu görürse geceyi içeride geçirdiğini sanacak.' },
              ] },
            ] },
          ], degilse: [
            /* --- Süha yolu: iki kapı ötede --- */
            /* Tur 30 (ORTAK, t30 B6 oynanış b2): 6. bölümde hekimin Ada'daki katı (p6_ada) kapıya geliş süresini değiştirir.
               'hekim' (harem katı, Feride'nin Perihan'a karşı çevirdiği oyun): iki kapı öteden erken gelir, bedel.
               'selamlik' (Feride'nin tedbiri): ön merdiveni çıkarken görünür, geri iner, geç gelir. Satır sayısı değişmez
               (13 satır sınırı); yalnız metin ayrılır. */
            { eger: (S) => b(S).p6_ada === 'hekim', ise: [
              'Hekim Bey\'in odası istediğim gibi benim katımda. İki kapı ötede, merdiven bile gerekmez.',
            ], degilse: [{ eger: (S) => b(S).p6_ada === 'selamlik', ise: [
              'Hekim Bey istediğim gibi selamlıkta. Harem katına çıkacaksa ön merdivende görünür.',
            ], degilse: [
              'Süha Bey alt katta, merdivenin dibinde. Yukarı çıkarsa önce benim kapıma varır.',
            ] }] },
            /* Anlatı T2 (7.9): akşam kapıya bekçi konduysa vuruşla birlikte o da anılır (13 satır sınırı: tek satır) */
            { eger: (S) => b(S).p7_v_bekci === 'kapi', ise: [
              /* Sürükleyicilik T1 (b7_8_9 7.7): az önce konuşan bekçi gece ilerleyince uyuklar */
              /* Tur 29 (t29_b05_08 B7 ses 2): Süha gecesini açan vuruş duyulur (13 satır sınırı: tek satır kalır) */
              { efekt: 'kapi_tikla' },
              { eger: (S) => b(S).p6_ada === 'hekim', ise: [
                ['an', 'Bekçinin başı yeni düşmüştü ki kapıya iki kez, yavaşça vuruldu. İki kapı öteden geliyordu.'],
              ], degilse: [{ eger: (S) => b(S).p6_ada === 'selamlik', ise: [
                ['an', 'Merdivende bir lamba belirdi, bekçiyi görüp geri indi. Kapıya iki kez vurulduğunda gece epey ilerlemişti.'],
              ], degilse: [
                ['an', 'Gece ilerledikçe bekçinin başı göğsüne düştü. Kapıya iki kez, yavaşça vuruldu.'],
              ] }] },
            ], degilse: [
              { efekt: 'kapi_tikla' },
              { eger: (S) => b(S).p6_ada === 'hekim', ise: [
                'Lambalar yeni sönmüştü ki kapıma iki kez vuruldu. Yavaşça.',
              ], degilse: [{ eger: (S) => b(S).p6_ada === 'selamlik', ise: [
                'Kapıma iki kez vuruldu, yavaşça. Merdiveni ancak ev sessizleşince çıkabilmişti.',
              ], degilse: [
                'Kapıma iki kez vuruldu. Yavaşça.',
              ] }] },
            ] },
            /* Tur 33 (B7 ses b): Süha teması bu bölümde vapurda girdi; gece kapısında yalnız ortam ve vuruş */
            { goster: ['suha', 'notr'] },
            { eger: (S) => b(S).p7_kapi === 'acik', ise: [
              ['suha', 'Kapınız açık. Girmeyeceğim, bilin diye söylüyorum.', 'notr'],
            ], degilse: [{ eger: (S) => b(S).p7_kapi === 'surgu', ise: [
              /* Diyalog T1 (ses A9): "Akıllı kız" Perihan'ın sözü */
              ['suha', 'Sürgünüzü getirmişsiniz. İyi tedbir, çekmeyin yine de.', 'alayci'],
            ], degilse: [
              ['suha', 'Bekçiniz uyuyor.', 'alayci'],
            ] }] },
            /* Tur 22 ek: önce anahtar, sonra dolap yolunda pencereden gördüğü gerçek hareket */
            { eger: (S) => b(S).p7_v_goren === 'suha', ise: [
              ['suha', 'Dolabın önünde sizi gördüm. Lambanız camdaydı, şişeleri saydınız.', 'soguk'],
            ], degilse: [{ eger: (S) => !!b(S).p7_k_igne, ise: [
              /* Tur 27 (oynanış 3): vapurda iğneyi çeken kız (p7_k_igne) Süha'nın gözünden kaçmamış */
              ['suha', 'Vapurda perdenin iğnesini siz çektiniz. Ben görmedim sanmayın.', 'alayci'],
            ] }] },
            /* Vapurda verilen cevap gece uygulanır */
            { eger: (S) => b(S).p7_borc === 'borc', ise: [
              /* GPT T26 Süha (öncelik 7): "borç" sözü yerine vapurda söylediğinin gerçekleşmesi */
              ['suha', 'Vapurda söylediğim oluyor: Hatice aşağı inecek. Sabah onu misafirin eşiğinde gören olacak.', 'soguk'],
            ], degilse: [{ eger: (S) => b(S).p7_borc === 'sart', ise: [
              ['suha', 'Ona el sürmeyeceğime söz verdim. Bu gece adına dokunacaklar.', 'soguk'],
            ], degilse: [
              ['suha', 'Buldunuz mu? Merdivende bir tepsi dolaşıyor; siz hâlâ arıyorsunuz.', 'alayci'],
            ] }] },
            { soru: 'Kapının ardında nefesi.', secim: [
              /* GPT T29 A7-2: sabah kapıyı açık tutan kız (p7_kapi 'acik') için başlangıç durumu açık kapı */
              /* Tur 33 (§0.6): "bir karış" bu yolda yalnız Süha'nın ağzında */
              { m: 'Kapıyı azıcık arala.', kosul: (S) => b(S).p7_kapi !== 'acik', etki: { suha: 7, itibar: -1 }, bayrak: { p7_gece: 'karis' }, adimlar: [
                'Kapıyı araladım. Lambası yüzünün yarısını aydınlattı.',
                ['suha', 'Bir karış. Vapurdaki perde kadar.', 'notr'],
                ['f', 'Perdeden fazla.', 'utanmis'],
                ['suha', 'Biliyorum. O yüzden girmiyorum.', 'notr'],
                /* Tur 28 (B7 sürük 2): yolun en güçlü anı; an_karis üretimde (kaydı resimsiz, resmi gelene kadar adım atlanır) */
                { cizim: 'an_karis' },
                /* Tur 27 (sürük. 4): gecede basamak yükselir; hekim nabzı kapıdan sayar.
                   Tur 29 (B7 diyalog (b)): "vapurdakinden" yalnız tülü nabız gibi atan kızda ('birak') dayanak bulur */
                { eger: (S) => b(S).p7_yasmak === 'birak', ise: [
                  ['suha', 'Nabzınız vapurdakinden hızlı. Buradan sayıyorum.', 'alayci'],
                ], degilse: [
                  ['suha', 'Kapıdan da sayarım, nabzınız benden hızlı.', 'soguk'],
                ] },
              ] },
              { m: 'Kapıyı aralık kalacak kadar ört.', kosul: (S) => b(S).p7_kapi === 'acik', etki: { suha: 7, itibar: -1 }, bayrak: { p7_gece: 'karis' }, adimlar: [
                'Kapıyı aralık kalacak kadar örttüm. Lambası yüzünün yarısını aydınlattı.',
                ['suha', 'Bir karış. Vapurdaki perde kadar.', 'notr'],
                ['f', 'Perdeden fazla.', 'utanmis'],
                ['suha', 'Biliyorum. O yüzden girmiyorum.', 'notr'],
                /* Tur 28 (B7 sürük 2): yolun en güçlü anı; an_karis üretimde (kaydı resimsiz, resmi gelene kadar adım atlanır) */
                { cizim: 'an_karis' },
                /* Tur 27 (sürük. 4): gecede basamak yükselir; hekim nabzı kapıdan sayar.
                   Tur 29 (B7 diyalog (b)): "vapurdakinden" yalnız tülü nabız gibi atan kızda ('birak') dayanak bulur */
                { eger: (S) => b(S).p7_yasmak === 'birak', ise: [
                  ['suha', 'Nabzınız vapurdakinden hızlı. Buradan sayıyorum.', 'alayci'],
                ], degilse: [
                  ['suha', 'Kapıdan da sayarım, nabzınız benden hızlı.', 'soguk'],
                ] },
              ] },
              /* Tur 18 (madde 11): vapurda "Ben sizi isteyen adamım" cevabı alındı; gece aynı soru sorulmaz,
                 Feride onun bu gece ne yapacağını sorar */
              { m: 'Alnını kapıya daya: “Bu gece ne yapacaksınız?”', etki: { suha: 6 }, bayrak: { p7_gece: 'alin' }, adimlar: [
                'Alnımı kapıya dayadım. Öbür yandan bir ağırlık, o da dayamış.',
                ['suha', 'Suç ortağınız olacağım. Bu gece başlıyor.', 'soguk'],
              ] },
              { m: 'Kapıyı kapat. Lambayı söndür; cevap verme.', kosul: (S) => b(S).p7_kapi === 'acik', bayrak: { p7_gece: 'sondur' }, adimlar: [
                { efekt: 'kapi_kapa' }, 'Kapıyı kapadım. Lambamı söndürdüm.',
                ['an', 'Süha Bey sustu. Lambasının ışığı kapının altından çekildi.'],
              ] },
              { m: 'Lambayı söndür. Cevap verme.', kosul: (S) => b(S).p7_kapi !== 'acik', bayrak: { p7_gece: 'sondur' }, adimlar: [
                { efekt: 'kandil' }, 'Lambayı söndürdüm.',
                /* Tur 27b (GPT B7-D1): söndürmek hekimin nüktesini beslemez; sınır görünür, tehlike sabahki yalanda */
                ['an', 'Süha Bey sustu. Lambasının ışığı kapının altından çekildi.'],
              ] },
              /* Tur 29 (t29_b05_08 B7 oynanış 1): bölümün sorusunun hazırlığı (Ada'ya taşınan / alınan sürgü) ret anında
                 kullanılır. Söz yok, lamba söner: 8. bölüm 'sondur' dalını okur ("cevap vermemiştim"); p7_cek ek bilgidir. */
              { m: 'Sürgüyü çek, lambayı söndür. Sesini duysun.', kosul: (S) => b(S).p7_kapi === 'surgu', etki: { vakar: 1 },
                bayrak: { p7_gece: 'sondur', p7_cek: 'surgu' }, iz: 'Sürgünü çektin. Hekim kapında demirin sesini duydu.', adimlar: [
              { efekt: 'surgu' }, 'Sürgüyü çektim, demirin sesi kapının öbür yanına kadar gitti. Lambamı söndürdüm.',
                ['suha', 'Duydum. İlk kez bir kapı bana kendi sesiyle cevap verdi.', 'mahzun'],
                ['an', 'Lambasının ışığı kapının altından çekildi.'],
              ] },
              /* GPT T26 Süha (B7 sürük. 2): akşam kapıya konan bekçi gece ilerleyince uyuklar; uyandırmak oyuncunun
                 seçimi. Bekçinin önünde Süha fısıldayacağını söyleyemez (p7_gece 'bekci'; 8. bölüm çamlığında okunur).
                 Tur 29 (t29_b05_08 B7 oynanış 2): sabahki kapı seçimi de bekçidir (Nimet'in yatağı kapıda, Madam bitişik
                 odada, Şefik yanımda); Süha "Bekçiniz uyuyor" dediği her kızda bu seçenek açılır. */
              { m: 'Bekçini uyandır: “Kapıda biri var.”', kosul: (S) => b(S).p7_v_bekci === 'kapi' || ['nimet', 'madam', 'sefik'].indexOf(b(S).p7_kapi) >= 0,
                etki: { vakar: 1 }, bayrak: { p7_gece: 'bekci' },
                iz: 'Bekçin uyandı. Hekim kapında söyleyeceğini yuttu.', adimlar: [
                { eger: (S) => b(S).p7_v_bekci === 'kapi' || b(S).p7_kapi === 'nimet', ise: [
                  { eger: nimetVar, ise: [
                    { goster: ['mehves', 'kararli'] },
                    ['mehves', 'Uyumuyordum hanımcığım. Hekim Bey, hasta bu kapının ardında değil.', 'kararli'],
                    { gizle: 'mehves' },
                  ], degilse: [
                    { goster: ['josephine', 'ana'] },
                    ['josephine', '{i}Bonsoir, docteur.{/i} Hasta bu kapının ardında değil.', 'kararli'],
                    { gizle: 'josephine' },
                  ] },
                ], degilse: [{ eger: (S) => b(S).p7_kapi === 'madam', ise: [
                  /* Madam bitişik odada: duvara vurulur */
                  { efekt: 'kapi_tikla' }, 'Duvara iki kez vurdum.',
                  { goster: ['josephine', 'ana'] },
                  ['josephine', '{i}Bonsoir, docteur.{/i} Hasta burada yok; ben uyanığım.', 'kararli'],
                  { gizle: 'josephine' },
                ], degilse: [
                  { goster: ['sefik', 'notr'] },
                  ['sefik', 'Süha dayı? Ablam uyuyor!', 'notr'],
                  { gizle: 'sefik' },
                ] }] },
                ['suha', 'Hekim, hastasının kapısını yoklar. Sabahki hikâyemi siz de dinleyin.', 'soguk'],
              ] },
            ] },
            /* Tur 29 (t29_b05_08 B7 görsel 3 / sürük (b)1): kapıyı açmayan kızın doruk resmi (üretimde) */
            /* GPT T29 G7 (b)3: kapıda sürgü yalnız sürgü edinmiş kızın resminde.
               Tur 30 (t30_b05_08 B7 görsel 1–2): pembe/mavi türleri ve Ada penceresiyle yeniden çizim üretimde (kayıtları
               BEKLEYEN_AN'da hazır; ORTAK gorseller.js'e bağlayınca motor kıyafete göre seçer). anElbise bilerek
               kullanılmadı: bu an ret yolunun tek doruğu olabilir ('kapat'); kurala uyan kız doruğu resimsiz görmesin,
               tür gelene kadar temel resme düşmek kabul (t28 kural 5). */
            { eger: (S) => b(S).p7_gece !== 'karis' && b(S).p7_kapi === 'surgu', ise: [{ cizim: 'an_isik' }] },
            { eger: (S) => b(S).p7_gece !== 'karis' && b(S).p7_kapi !== 'surgu', ise: [{ cizim: 'an_isik_surgusuz' }] },
            { eger: (S) => b(S).p7_gece === 'bekci', ise: [
              ['ic', 'Bekçimin önünde fısıldayamadı. Söyleyemediği ne varsa sabaha kaldı.', 'tebessum'],
            /* Tur 29 (t29_b05_08 B7 anlatı 2): susan ve ışığı çekilen adam iki satır daha konuşmaz; ret görünür kalır */
            ], degilse: [{ eger: (S) => b(S).p7_gece === 'sondur', ise: [
              ['ic', 'Kapım benim kaldı. Ne kuracaksa artık bensiz kuruyor.', 'endiseli'],
            ], degilse: [
              /* GPT T26 Süha (B7 diyalog 3): "önce sizden alır, sonra benden" sözü bir davranışla sınanır */
              { eger: (S) => b(S).p7_soz === 'duy', ise: [
                ['suha', 'Selamlığa iniyorum, dolapta bir şişe konyak var. Görülen olursa ben olurum.', 'soguk'],
              ], degilse: [
                ['suha', 'Şimdi selamlığa ineceğim. Dolapta bir şişe konyak var.', 'soguk'],
              ] },
              /* Tur 33 (B7 anlatı 3): Süha'nın gece planı tek anlamlı: hikâyeyi o okuyacak, adı henüz seçilmedi */
              ['suha', 'Sabah Perihan\'ın hikâyesini ben okuyacağım; kimin adıyla, henüz seçmedim. Siz susarsınız, ya da susmazsınız.', 'soguk'],
            ] }] },
            /* Anlatı T2b (GPT 24b B7 öneri 2): "adına dokunacaklar"dan sonra Feride şartını yeniden tanımlar;
               8. bölüm çamlığı bunu hatırlar (13 satır sınırı için seçimden sonraya kondu).
               Tur 29 (B7 anlatı 3): cevap vermemeyi seçen kız ('sondur') kapıya konuşmaz; şart iç seste */
            { eger: (S) => b(S).p7_borc === 'sart', ise: [
              /* Diyalog T1 (7.16): "kapsamak" dönem dışı; 8. bölüm çamlığı "adını da şarta kattınız" diye karşılar */
              { eger: (S) => b(S).p7_gece === 'sondur', ise: [
                ['ic', 'Adı da şartımın içindeydi. Sabah bunu yüzüne söyleyeceğim.', 'kararli'],
              ], degilse: [
                ['f', 'O hikâyede Kenan Bey\'in adı var. Adı da şartımın içindeydi.', 'kararli'],
              ] },
            ] },
            { gizle: 'suha' },
            /* Tur 27 (oynanış 2): Perihan'ın kapısında duyulan saat (p7_v_kulak) */
            { eger: (S) => b(S).p7_v_kulak === 'vur', ise: [
              /* Tur 29 (B7 diyalog 5): akıl yürütme satırı öfkeli portreyle gösterilmez */
              ['ic', 'Kapısına vurmuştum, Perihan Hanım saatini öne almış. Süha Bey ondan da önce davranıyor.', 'endiseli'],
            ], degilse: [{ eger: (S) => !!b(S).p7_v_kulak, ise: [
              ['ic', 'Perihan Hanım tepsiyi gece yarısına bırakmıştı. Süha Bey ondan önce davranıyor.', 'endiseli'],
            ] }] },
            { efekt: 'adim' },
            /* Sürükleyicilik T1 (S5): süreye bedel eklendi */
            /* Tur 30 (t30_b05_08 B7 sürük 3): soruya süre de girdi */
            { soru: 'Ayak sesi merdivende. İki basamak sonra selamlıkta olur; peşinden inen kız sabah orada görülmüş olur.', secim: [
              { m: 'Peşinden in.', etki: { suha: 5, itibar: -1 }, bayrak: { p7_son: 'in' },
                iz: 'Konyağın döküldüğünü gördün. Sen de gece selamlıkta görüldün.', adimlar: [
                { ara: { mekan: 'ada_selamlik', yer: 'Ada evi · alt kat, gece', satirlar: [
                  'Gece yarısı merdivenin dibi erkeklerin tarafıydı. Feride yalınayak indi; hangi basamağın gıcırdadığını artık biliyordu.',
                ] } },
                /* Tur 27 (ses 2): konyağın dökülüşü duyulur, ardından sessizlik (an resmi üretimde: an_konyak) */
                { efekt: 'sise' },
                { efekt: 'dokulme' }, // Tur 30 (t30 B7 ses (b)): pencereden denize boşalan konyak
                { eger: (S) => b(S).p7_v_dolap === 'centik', ise: [
                  'Selamlığın perdesi aralık. Süha Bey mührü çentikli şişeyi açıp denize boşalttı.',
            ], degilse: [
              'Selamlığın perdesi aralık. Süha Bey şişeyi açıp pencereden denize boşalttı.',
                ] },
                { muzik: 'sessiz' },
                { goster: ['suha', 'notr'] },
                ['suha', 'Sabah şişeyi bulurlar. Benim aşağıya indiğimi kimse söylemez.', 'alayci'],
                /* Tur 32 (B7 anlatı 2): Süha'nın konyağı neden döktüğü (Perihan'ın planına boş şişe verir, sonunu kendisi tutar) */
                /* Tur 33 (B7 anlatı 3): misafir içmedi; doğruyu kimin bileceğini Süha tutar */
                ['suha', 'Perihan\'ın hikâyesine boş şişe lazımdı, verdim. Misafir bir damla içmedi; bunu kimin bileceğini ben seçerim.', 'soguk'],
                /* Sürükleyicilik T1 (S3, b7_8_9 7.8): tanık kalan kız sesli bir hamle yapar; Süha tehlikeli kalır */
                ['f', 'Döktüğünüzü gördüm. Sabah ben de konuşabilirim.', 'kararli'],
                ['suha', 'Konuşun. Gece yarısı selamlıkta ne aradığınızı da anlatırsınız.', 'soguk'],
                /* Tur 27b (GPT B7-S1/G3): dökülüş → "Gördüm" → karşı soru → sessizlik → an resmi (koyu akorla açılır;
                   yalnız fildişi çizili, pembe/mavi elbisede çeşidi gelene kadar gösterilmez) */
                { eger: (S) => anUyar(S, 'an_konyak'), ise: [{ cizim: 'an_konyak' }] },
                { gizle: 'suha' },
                /* Tur 27 (anlatı 1): kapanış anlatıcı satırı */
                ['an', 'Deniz konyağı yuttu. Feride merdiveni, gördüğünü saklamadan çıktı.'],
                { kart: 'Konyağı kimse içmedi. Bunu bir ben biliyorum, bir de Süha Bey.' },
              ] },
              { m: 'Aşağı in. Kenan Bey\'i uyar.', etki: { mukaddem: 3, vakar: 1 }, bayrak: { p7_son: 'uyar' },
                iz: 'Kenan\'ı uyardın, kapısı kapalı kalacak. Süha seni merdivende gördü.', adimlar: [
                { ara: { mekan: 'ada_selamlik', yer: 'Ada evi · alt kat, gece', satirlar: [
                  'Gece yarısı merdivenin dibi erkeklerin tarafıydı. Feride oraya Süha Bey\'den önce davranmak için indi.',
                ] } },
                /* Tur 29 (t29_b05_08 B7 ses 4) */
                { efekt: 'kapi_tikla' },
                'Aşağı indim; misafir odasının kapısına iki kez vurdum.',
                { goster: ['mukaddem', 'endiseli'] },
            ['mukaddem', 'Feride Hanım? Gece yarısı…', 'endiseli'],
                ['f', 'Kapınızı sabaha kadar kimseye açmayın.', 'kararli'],
                ['mukaddem', 'Size açtım ama.', 'utangac'],
                /* Gece vaktinde yastığın altına konan anahtar */
                { eger: (S) => b(S).p7_v_anahtar === 'yastik', ise: [
                  ['mukaddem', 'Yastığımın altında bir anahtar vardı. Sizin işiniz mi?', 'gulumser'],
                  ['f', 'Kilitleyin. Sabaha kadar.', 'kararli'],
                ], degilse: [
                  ['mukaddem', 'Kilidin anahtarı yok. Kapıya iskemle dayarım.', 'endiseli'],
                ] },
                /* Tur 29 (t29_b05_08 B7 görsel 3): doruk resmi (üretimde; resim gelene kadar adım atlanır) */
                { cizim: 'an_uyar' },
                { gizle: 'mukaddem' },
                /* Tur 27 (anlatı 1): kapanış anlatıcı satırı; kartın lambasını önceden söylemez */
                { efekt: 'kapi_kapa' },
                ['an', 'Misafirin kapısı ardından kapandı. Feride merdiveni arkasına bakmadan çıktı.'],
                /* Anlatı T2b (GPT 24b B7 öneri 3): Süha'nın ilk tepkisi küçük bir davranışla; kanca kartı yinelemez */
                { muzik: 'sessiz' },
                { kart: 'Merdivenin dibinde bir lamba kısıldı. Süha Bey gördü; yukarı çıkmadı.' },
              ] },
              /* Tur 29: kapıyı yalnız 'karis' dalı açmıştı; öteki dallarda kapı zaten kapalı (metin ona göre) */
              { m: 'Kapını kapalı tut. Sabaha kendi hikâyeni hazırla.', bayrak: { p7_son: 'kapat' },
                iz: 'Kapını kapalı tuttun. Şişeyi Süha taşıyacak, sonunu sen söyleyeceksin.', adimlar: [
                /* Sürükleyicilik T1 (S3): kapıyı kapatan kız ardından sesini de duyurur */
                ['f', 'Sabah ne anlatırsanız anlatın Süha Bey. Sonunu ben söylerim.', 'kararli'],
                { eger: (S) => b(S).p7_gece === 'karis', ise: [
                  { efekt: 'kapi_kapa' },
                  'Kapıyı kapadım. Ayak sesi durdu, sonra selamlıkta bir dolap kapağı kapandı.',
            ], degilse: [
              'Sesim kapıdan geçti. Ayak sesi durdu, sonra selamlıkta bir dolap kapağı kapandı.',
                ] },
                /* Tur 27 (anlatı 1): kapanış anlatıcı satırı */
                /* Tur 30 (B7 sürük 1, kart/kanca tekrarı): anlatıcı Feride'nin sözünü ("Sonunu ben söyleyeceğim") yinelemez */
                ['an', 'Feride lambasını yakmadı; karanlıkta merdivenden gelen her sesi saydı.'],
                { muzik: 'sessiz' },
                { kart: 'Kenan odasında kaldı. Hatice konyağı selamlıkta bıraktı; sabah ona ne diyecek?' },
              ] },
            ] },
          ] },
          /* Kapanış: anlatıcı tek satırla doruğu söyler (rehber §5.3). Anlatı T2 (7.1): ortak satır "gece daha
             yarılanmamıştı" diyerek "Gece yarısı Ada evi sustu" ile çelişiyordu; artık her son kararın (p7_son)
             kendi satırı var. Sürükleyicilik T1 (S2): kart en sonda; kartı açıklayan anlatıcı satırları kalktı.
             Tur 27 (anlatı 1): altı sonun her biri kartın hemen önünde kendi kapanış anlatıcı satırını taşır; satır
             kartın ve kancanın sözünü önceden söylemez. Gece 8. bölümde sürer. */
          { bolumSonu: true },
        ],
      },
    ],

    // Tur 18 ek (öneri 9): defter üç kısa cümle — ne yaptım / kimle ne kaldı / sıradaki soru.
    sonNotu: function (S) {
      var f = S.bayrak, c = [], m = f.p_rota === 'mukaddem';
      if (m) c.push({
        itiraf: 'Vapurda Kenan\'a onu görmek için bindiğimi söyledim.',
        yuz: 'Vapurda yaşmağımı indirip Kenan\'a gülüşümü gösterdim.',
      mesafe: 'Vapurda Şefik’in yanında kaldım. Kenan’la konuşmadım.',
      }[f.p7_soz] || (notUlasti(S) ? 'Vapurda Kenan\'a bahanesini sordum. “Bana yazdınız, geldim” dedi.' : 'Vapurda Kenan\'a bahanesini sordum. O da benim vapur saatimi sormuş.'));
      else c.push('Vapurda Süha Bey “Ben sizi isteyen adamım” dedi. ' + ({
        tekrar: 'Her iskelede bir daha söylettim.',
        baba: 'İstemenin yetmediğini, babamın vereceğini söyledim.',
        /* Tur 29 (t29_b05_08 B7 anlatı 5): defter oynanan eylemi söyler */
        bitti: 'İstemekle olmaz, dedim. Konuşmayı orada bitirdim.',
      }[f.p7_soz] ||'Perihan Hanım duyarsa bedelini kim ödeyecek diye sordum, kaçamak cevabını kabul etmedim.'));
      var kapi = { surgu: 'Sürgümü Ada\'ya taşıdım', nimet: 'Nimet yatağını kapımın önüne serdi', madam: 'Madam bitişik odada yattı',
        sefik: 'Şefik yanımda uyudu' }[f.p7_kapi] || 'Kapımı bilerek açık bıraktım';
      // Tur 22 ek: gece görevinin görünen sonucu, sabahki tedbirin önüne geçer
      /* Tur 29 (B7 anlatı 6, şüphe ≠ hüküm): kimin aldığını görmedi */
      if (f.p7_v_arama === 'sise') kapi = 'Odamı boş bıraktım; sandığımdan haşhaş şişesi alındı';
      /* Tur 29 (B7 oynanış 1): Süha yolunda sürgü gece kapıda çekildi */
      else if (f.p7_cek === 'surgu') kapi = 'Sürgümü Ada\'ya taşıdım, gece hekimin önünde çektim';
      else if (f.p7_v_bekci === 'kapi' && f.p7_v_ilk) kapi = (f.p6_ada === 'nimet' ? 'Nimet' : 'Madam') + ' kapımı tuttu, Perihan Hanım giremedi';
      c.push(kapi + '. ' + ({
        dinle: 'Aralık kapıdan Hatice\'nin Nabi Bey\'e kandığını duydum.',
        gir: 'Hatice\'yi Perihan Hanım\'ın ayak ucunda ağlarken buldum.',
      }[f.p7_itiraf] || 'Hatice Perihan Hanım\'ın odasından onun yüzüğüyle çıktı.'));
      /* Sürükleyicilik T1 (mercek_sezon öneri 4): üçüncü cümle soru değil, eylem ve son duygu */
      if (m) c.push({
        tepsi: 'Konyağı Kenan\'ın kapısına ben götürdüm. Kenan aynı evde; mühürlü şişe benim elimde.',
        /* Tur 30 (B7 sürük 1): kanca "Konyak ona indi" der; defter aynı cümleyi yinelemez */
        bekci: 'Ön merdivene bekçi koydum, tepsi öbür merdivenden indi. Kenan aynı evde; lekeyi bekçim buldu.',
      }[f.p7_son] || 'Hatice sabaha kadar Kenan\'ın eşiğinde oturdu. Kenan aynı evde; o eşiğin tanığı benim.');
      else c.push({
        in: 'Süha Bey konyağı denize döktü, gördüğümü yüzüne söyledim. Kenan aynı evde; içilmemiş şişenin sırrı bende.',
        uyar: 'Kenan\'ı uyardım, Süha Bey merdivenden gördü. Kenan aynı evde, kapısı kapalı; benimki artık güvende değil.',
      }[f.p7_son] || 'Süha Bey kapıma geldiğinde cevap vermedim. Aşağı indi. Kenan’a ne söyleyecek?');
      return c.join(' ');
    },
    /* Tur 29 (GPT O5-2/O7-2/O8-3): öbür yolun anı (alt yazısı " · Kenan" / " · Süha") kaçırılan an sayılmaz (motor.js erisilir) */
    anYol: true,
    /* GPT T29 O7-1: yaşmağını uzatmayan kız (goz / tut) an_vapur'u kaçırmış sayılmaz */
    anRet: { an_vapur: function (S) { var y = (S.bayrak || {}).p7_yasmak; return (S.bayrak || {}).p7_kic === 'kal' || y === 'goz' || y === 'tut'; },
      /* Tur 30 (B7 anlatı 1 / oynanış 1): Perihan'ın yanına dönen ya da konuşmayı bitiren kız an_yasmak'ı kaçırmış sayılmaz */
      an_yasmak: function (S) { var f = S.bayrak || {}; return f.p7_kic === 'kac' || f.p7_soz === 'bitti'; },
      /* an_isik / an_isik_surgusuz aynı anın iki türü: kapı geçmişine göre yalnız biri erişilir */
      an_isik: function (S) { return (S.bayrak || {}).p7_kapi !== 'surgu'; },
      an_isik_surgusuz: function (S) { return (S.bayrak || {}).p7_kapi === 'surgu'; } },
    anIpuclari: {
      an_vapur:'Ada vapurunda perdenin ucuna Kenan\'la giden, yaşmağın ucunu kime uzattığını görür.',
      an_yasmak: 'Ada vapurunda hekimle aynı güvertede, yaşmağının ucunu kimin yakaladığını gören.',
      an_tepsi: 'Gece merdivende tepsiyi kendi eline alan, kapının kimin için açıldığını görür.',
      an_konyak: 'Gece hekimin ardından selamlığa inen, şişenin nereye boşaldığını görür.',
    },
    /* Sürükleyicilik T1 (S1): kanca son karara (p7_son) göre, tür ifşa; kartı yinelemez, 8. bölümün ilk sahnesine bağlanır.
       Tur 29 (kanca türü, art arda iki bölüm aynı tür olmaz): Kenan yolunun üç kancası ifşa (6. bölüm Kenan kancaları
       karar / duygusal / tehlike); Süha yolunun üç kancası tehlike (6. bölüm Süha kancaları duygusal / ifşa / karar).
       8. bölüm kancası karar. */
    siradaki: { ad: 'Ada Gecesi', kanca: kancaIslev(function (S) {
      return {
        /* Anlatı T2b: tepsi / in / uyar kancaları kartın sözünü yinelemez (S1) */
        /* GPT T25 Kenan (B7 anlatı 4): dolabı görmeyen kız ikinci şişenin yerini bilemez; lambanın sahibi açılır */
        tepsi: S.bayrak.p7_v_dolap
          ? 'Selamlık dolabında ikinci bir şişe var. Yukarıda lambayı yakan onu arıyor.'
          : 'Yukarıda yanan lamba Perihan Hanım\'ın kapısı tarafındaydı. Şişe bende; sabaha bir başkasını bulması gerek.',
        /* Tur 30 (B8 ortak notu; şüphe ≠ hüküm): lambayı kimin yaktığını Feride görmedi */
        bekci: 'Leke hizmet merdiveninde. Sabah Perihan Hanım ağzını açmadan o basamağı babama göstereceğim.',
        izle: S.bayrak.p7_v_dolap
          ? 'Eşikteki şişe mühürlü kaldı. Selamlıktan bir mantar sesi geldi; dolapta ikinci şişe vardı.'
          : 'Eşikteki şişe mühürlü kaldı. Selamlıktan bir mantar sesi geldi; bu evde ikinci bir şişe mi var?',
        in: 'Şişeyi boşaltan eli gördüm. Süha Bey şişeyi selamlıkta bıraktı. Sabah babamdan önce kim alacak?',
        uyar: 'Kenan\'ın kapısı kapalı. Ama sabahki hikâyeye kapı gerekmiyor.',
        /* Tur 30 (B7 sürük 1): kart "Kenan Bey misafir odasında, konyak bir kapı ötede" der; kanca onu yinelemez (tür tehlike) */
        /* Tur 33 (B7 anlatı 3): Süha adı henüz seçmedi */
        kapat: 'Selamlıkta bir dolap kapağı kapandı. Sabahki hikâyeyi Süha Bey kuruyor; kimin adıyla, bilmiyorum.',
      }[S.bayrak.p7_son] || KANCA_VARSAYILAN;
    }, KANCA_VARSAYILAN) },
  };
})();

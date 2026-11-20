/* =========================================================================
   ÜÇÜNCÜ BÖLÜM: TOPUK İZİ
   Biçim bolum1.js'teki gibidir (dosyanın başındaki açıklamaya bakınız).
   - Konuşma:   ["fevkiye", "Metin", "ifade"]
   - Feride:    ["f", "Metin", "ofkeli"]           İç ses: ["ic", "Metin"]
   - Anlatım:   "Metin"                           Perde arkası: ["pa", "Metin"]
   Okunan bayraklar (B1-B2): kiyafet_nisan, gerdanlik, ilac, suha_sohbet,
   fevkiye_uyari, nabi_kin, bilgi_reftar_nabi.
   Konan bayraklar (şartname §5.3): fevkiye_sohbet, piyano_b3, mekan_b3,
   delil_soylenti, talip_icguveyi, topuk, nabi_kin, nabiz, fevkiye_sir;
   (oyun için ek) topuk_izi, terlik_izi, reftar_terlik, odaci_kizi, nabi_fes.
   Roman: s. 106-125 (muhadarat_2.txt satır 216-909).
   (oyun için ek) yazan yerler romanda yoktur.
   ========================================================================= */
window.BOLUMLER = window.BOLUMLER || {};

(function () {
  // Söylenti tonu (şartname §2.4)
  const aleyhte = (S) => S.v.dedikodu >= 3 || S.v.itibar < 40;
  const lehte = (S) => !aleyhte(S) && S.v.itibar >= 55 && S.v.dedikodu <= 1;
  // 2. bölümdeki not kararı (eski kayıtlarda yoksa yakılmış sayılır)
  const NOT = (S) => S.bayrak.not_mukaddem || 'yak';
  const KILIT_EV ='Bu sahnede kıyafetiniz kitapta tarif edildiği gibidir: gündelik ev kıyafeti.';
  const kiyafetEkle = (...idler) => ({ islev: (S) => { idler.forEach((k) => { if (!S.kiyafetler.includes(k)) S.kiyafetler.push(k); }); } });

  window.BOLUMLER[3] = {
    no: 3,
    ad: 'Topuk İzi',
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
          buyuk_salon: ['konak_sofa', 'yemek_salonu', 'konak_bahce'],
          mutfak: ['konak_sofa', 'konak_bahce'],
          konak_bahce: ['konak_sofa', 'mutfak', 'buyuk_salon', 'selamlik_kapisi'],
          selamlik_kapisi: ['konak_bahce', 'konak_sofa'],
        },
      },
      B: { // Leyla'ların konağı (kış başı)
        mekanlar: ['fevkiye_konak', 'fevkiye_anne_oda', 'fevkiye_oda'],
        baglanti: {
          fevkiye_konak: ['fevkiye_anne_oda'],
          fevkiye_anne_oda: ['fevkiye_konak', 'fevkiye_oda'],
          fevkiye_oda: ['fevkiye_anne_oda'],
        },
      },
    },

    /* Saate göre fon: Leyla'nın gündüz ziyareti ve ertesi sabah gündüz ışığında */
    fon: function (S, mekanId) {
      const sabah = S.gorev === 0 || (S.gorev >= 6 && S.gorev <= 8);
      if (mekanId === 'fazila_oda' && sabah) return 'fazila_oda_gunduz';
      if (mekanId === 'buyuk_salon' && S.gorev >= 6 && S.gorev <= 8) return 'buyuk_salon_gunduz';
      return null;
    },

    gorevler: [
      /* 0 */ { metin: "Leyla'yı odanda karşıla.", ipucu: 'Bir aydır gelmiyordu. Nimet, Leyla Hanım\'ın doğru odama çıktığını söyledi.' },
      /* 1 */ { metin: 'Akşam büyük salona in.', ipucu: 'Babam bu akşam bir dostunda misafir. Perihan Hanım herkesi salona çağırtmış.' },
      /* 2 */ { metin: 'Odana çık. Sabah sofrasından önce Münevver Hanım bilmeli.', ipucu: 'Perihan Hanım elindekini yarın sabah babamın önüne koyacak. Divitim odamda.' },
      /* 3 */ { metin: 'Bahçe yolundan geç.', ipucu: 'Şalımı aldım. Bahçenin taşlı yolu hem duvardaki kapıya hem salonun camlı kapısına çıkar.' },
      /* 4 */ { metin: 'Salonda otur.', ipucu: '' },
      /* 5 */ { metin: 'Odana çekil.', ipucu: 'Şefik yatağımı hazırlatmış. Odam yukarıda.' },
      /* 6 */ { metin: 'Dün geceki yolda izleri ara.', ipucu: 'Gece çalıların dibinde bir hışırtı vardı. Bahçeye inip bakmalıyım.' },
      /* 7 */ { metin: 'Sabah sofrasına in.', ipucu: 'Sofra yemek salonunda kuruldu. Babam evde. Perihan Hanım bekliyor.' },
      /* 8 */ { metin: "Nimet'le Leyla'nın konağına git.", ipucu: 'Nimet feracemi hazırlamış; sofada bekliyor.' },
      /* 9 */ { metin: "Leyla'ların konağına gir.", ipucu: '' },
      /* 10 */ { metin: "Leyla'nın annesini dinle.", ipucu: 'Hizmetçiler beni annesinin odasına götürüyor. Kapısı perdeli oda.' },
      /* 11 */ { metin: "Yukarı çık, Leyla'yı gör.", ipucu: 'Leyla\'nın odası üst katta.' },
      /* 12 */ { metin: 'Konağa dön.', ipucu: 'Perihan Hanım sofada beni bekliyor.' },
    ],

    /* Kim nerede? (faz ve görev sırasına göre) */
    kisiler: function (S) {
      const g = S.gorev;
      if (S.faz === 'B') {
        return {
          fevkiye_konak: ['hizmetci', 'mehves'],
          fevkiye_anne_oda: g >= 10 ? ['fevkiye_annesi', 'hizmetci'] : [],
          fevkiye_oda: ['fevkiye'],
        };
      }
      return {
        konak_sofa: g === 8 ? ['mehves'] : (g === 2 ? ['reftar'] : []),
        fazila_oda: ['resim'],
        josephine_oda: (g >= 2 && g <= 5) ? [] : ['josephine'],
        yemek_salonu: g === 0 ? ['sai'] : [],
        buyuk_salon: (g === 2 || g === 3) ? ['calibe', 'suha', 'sefik', 'josephine'] : [],
        mutfak: g <= 1 ? ['asci', 'mehves'] : ['asci'],
        calibe_oda: (g === 6 || g === 7) ? ['reftar'] : [],
        konak_bahce: g === 6 ? ['bahce_izler'] : ['komsu_konak'],
        selamlik_kapisi: g === 0 ? ['sefik'] : [],
      };
    },

    /* Olay olmayan zamanlarda kişiye dokununca söylenenler */
    sohbet: function (S, kim) {
      const g = S.gorev, b = S.bayrak;
      switch (kim) {
        case 'mehves':
          if (S.faz === 'B') return [['mehves', 'Ben burada, taşlıkta beklerim hanımcığım. Sen yukarı çık.']];
          if (g <= 1) return [['mehves', 'Leyla Hanım bugün pek suskun hanımcığım. Kapıda bana selam bile vermedi. Hiç adeti değildir.']];
          return [['mehves', 'Feracen hazır hanımcığım. Yaşmağını da kolaladım.']];
        case 'asci':
          if (g >= 6 && b.topuk === 'vurdu') return [['asci', 'Sirkeyi Nabi Bey\'e verdim, buzu da. Fesini çıkarmadı ki bakayım.'], ['ic', 'Bakmasın.']];
          return [['asci', 'Güz geldi küçük hanım. Kestane kaynattım, al bir avuç. Sıcak sıcak, cebine koy.']];
        case 'josephine':
          if (g >= 6) return [['josephine', 'Dün gece uyumadınız Feride Hanım. Gözleriniz söylüyor. Ben bir şey sormuyorum; ama buradayım.']];
          if (g >= 2) return [['josephine', 'Şefik Bey uykulu. Siz de yorgunsunuz. Erken çekilelim mi?']];
          return [['josephine', 'Bugün Şefik Bey\'le coğrafya çalıştık. Paris\'i haritada iki defa yanlış yere koydu. Sonra düzeltti.']];
        case 'sefik':
          if (S.bayrak.mekan_b3 === 'kuytu') return [['sefik', 'Abla, Halim Efendi bugün bana "Hemşirenize hürmetler" dedi yine. Bir de defterime yıldız çizdi.']];
          return [['sefik', 'Abla, Halim Efendi bu akşam geliyor. Hesap defterimi bitirmedim! Sen yardım eder misin? Yok, etme. Kendim bitireyim.']];
        case 'reftar':
          return [['reftar', 'Hanımefendi daha kalkmadı küçük hanım. Bir emriniz mi vardı?'], ['ic', 'Gözü ayağımda. Ayakkabımda.']];
        case 'sai':
          return [['sai', 'Kızım, bu akşam bir dostumda misafirim. Annen evde, dayıların evde. Şefik\'e göz kulak ol.'], ['ic', 'Dayılarım. Babam öyle diyor.']];
        case 'calibe':
          return [['calibe', 'Şalını aldın mı kızım? Otur, üşütme. Süha\'ya iş çıkarma.', 'gulumser']];
        case 'suha':
          return [['suha', 'Üşüdünüz mü Feride Hanım? Elleriniz söylüyor.'], ['ic', 'Elime bakmasın.']];
        case 'komsu_konak':
          return ['Komşu konağın kafesleri kapalı. Bacasından ince bir duman çıkıyor. Güz geldi; orada da mangal yakılmış.'];
        case 'bahce_izler':
          return ['İzler kurumaya başlamış. Akşama kalmaz, silinir. Defterimde silinmez.'];
        case 'resim':
          if (g >= 5) return ['Annemin resmi. Dün gece ona bağırdım. Bana kızmadı; resimler kızmaz.'];
          return ['Annemin resmi. Güz ışığında yüzü daha soluk görünüyor. Belki de benim gözüm.'];
        case 'hizmetci':
          if (S.faz === 'B') return [['hizmetci', 'Bir şey sormayınız küçük hanım, ne olur. Bize söylemek düşmez.']];
          return null;
        case 'fevkiye_annesi':
          return [['fevkiye_annesi', 'Yukarı çık kızım. Belki seni dinler.']];
        case 'fevkiye':
          return [['fevkiye', 'Gitme Feride. Biraz daha otur. Sen gidince bu oda yine dört duvar.']];
      }
      return null;
    },

    /* Bölüm açılışı: kart ve söylenti */
    acilis: [
      { kart: 'ÜÇÜNCÜ BÖLÜM\nTopuk İzi', alt: 'Güz.\nDüğüne sekiz ay.' },
      { kiyafet: 'ev', kilit: KILIT_EV },
      { arkaplan: 'kabul_gunu' },
      { goster: ['hanimlar'] },
      'Güz. Bir konağın sofasında dört hanım yine yan yana. Mangal yakılmış, közde kestaneler çatırdıyor.',
      {
        eger: (S) => S.v.dedikodu >= 3,
        ise: [['h1', 'Bizim kalfa söyledi. Feride Hanım\'ın boynuna takılan gerdanlık tam yedi yüz liraymış!']],
        degilse: [['h1', 'Bizim kalfa söyledi. Sait Efendi\'nin küçük hanımına takılan gerdanlık tam yedi yüz liraymış!']],
      },
      {
        eger: aleyhte,
        ise: [
          ['h2', 'Yedi yüz lira, bir boyunda. O kadar elmasa o kadar dil yakışır.'],
          ['h1', 'Asıl şunu dinleyin. Doktor bey her gün küçük hanımın odasına çıkıyormuş. İlacını kendi eliyle içiriyormuş.'],
          ['h2', 'Nişanlı kızın odasına her gün hekim girer mi ayol?'],
          ['h3', 'Hastadır belki kardeş. Hastanın kapısını hekimden başkası çalmaz.'],
          ['h4', 'Ateş olmayan yerden duman çıkmaz.'],
        ],
        degilse: [{
          eger: lehte,
          ise: [
            ['h2', 'Yedi yüz lira. Hak edene takılmış. O kızın edebini herkes söylüyor.'],
            ['h1', 'Doktor bey de küçük hanıma ilacını kendi eliyle taşıyormuş. Eczacıya güvenmezmiş.'],
            ['h4', 'Hekimin hastası çok. Hepsine böyle mi bakar, bilmem.'],
            ['h3', 'Ne vefalı dayı! Ablasının üvey kızını kendi kızı gibi gözetiyor. Böylesi kalmadı.'],
          ],
          degilse: [
            ['h2', 'Yedi yüz liralık şey boyunda taşınır mı? Ben olsam gece uyuyamazdım.'],
            ['h1', 'Sandıkta durur o. Kız da sandıkta durur, düğüne kadar.'],
            ['h1', 'Doktor bey de o konaktan hiç çıkmıyormuş. Hasta mı görüyor, gönül mü eğliyor, kimse bilmiyor.'],
            ['h3', 'Dayısıdır kardeş. Dayı yeğenine bakar.'],
          ],
        }],
      },
      {
        eger: (S) => S.bayrak.kiyafet_nisan === 'sade',
        ise: [['h3', 'Nişan günü süssüz bir ipekli giymiş. Münevver Hanım\'ın konağındakiler anlata anlata bitiremiyor.']],
        degilse: [{
          eger: (S) => S.bayrak.kiyafet_nisan === 'gosterisli',
          ise: [['h4', 'Sözlü kız nişanında gelin gibi süslenmiş derler. Düğününde ne giyecek, merak ederim.']],
          degilse: [{
            eger: (S) => S.bayrak.kiyafet_nisan === 'yadigar',
            ise: [['h2', 'Rahmetli anasının elbisesini bozdurup giymiş. Üvey anası ne dedi acaba?']],
            degilse: [],
          }],
        }],
      },
      {
        eger: (S) => S.bayrak.suha_sohbet === 'dinledi',
        ise: [['h1', 'Doktor bey küçük hanıma Fransızca romanlar da taşıyormuş. Kalfa gördü; kapakları kırmızı.']],
        degilse: [],
      },
      // 2. bölümdeki nişan sınavının yankısı
      {
        eger: (S) => S.bayrak.munevver_tavir === 'soz_yayildi',
        ise: [
          ['h4', 'Naile Hanım anlattı: nişanda o harf sorulmuş, kız kıpkırmızı kesilmiş, tek kelime edememiş.'],
          ['h3', 'Kaynanası "annesinin harfidir" demiş ama. Kendi kulağımla duydum.'],
          ['h4', 'Kaynana gelinini korur elbet. Ben kızın yüzüne bakarım; yüz yalan söylemez.'],
        ],
        degilse: [{
          eger: (S) => !!S.bayrak.ifsa,
          ise: [
            ['h2', 'Nişanda kız, üvey anasının yazdığı kâğıdı kaynanasının önüne koymuş diyorlar. Olur şey mi?'],
            ['h4', 'Olmuş. O gündür Perihan Hanım kabul gününe çıkmıyor. Çıkmayan kadın, içeride iş görür.'],
          ],
          degilse: [{
            eger: (S) => !!S.bayrak.naile_kin,
            ise: [['h4', 'Naile Hanım o kızın adını ağzından düşürmüyor. Nişanda yüzüne karşı kızının bahsini açmış. Dili var o kızın, dili.']],
            degilse: [{
              eger: (S) => S.bayrak.munevver_tavir === 'sinav_gecti',
              ise: [['h3', 'O harf rahmetli anasının adıymış meğer. Münevver Hanım herkesin önünde söylemiş. Biz de günahına girmişiz.']],
              degilse: [],
            }],
          }],
        }],
      },
      ['h1', 'Hanımefendinin bir kardeşi daha var ya, şu keyifli, yakışıklı olan. Zengin bir konağın çevresinde dolaşıp duruyormuş.'],
      ['h2', 'Dolaşır tabii. O konağın bir tek kızı var. Babası paşa değil, ama paşadan zengin.'],
      ['h4', 'Bal olan yere sinek üşüşür.'],
      { temizle: true }, { arkaplan: null },
      'Konağın sofası. Güz güneşi kafeslerden içeri ince ince düşüyor.',
      ['ic', 'Leyla bir aydır gelmedi. Bir ay. Leyla için bir yıl gibi bir şey bu.'],
      { goster: ['mehves'] },
      ['mehves', 'Hanımcığım, Leyla Hanım geldi! Kimseye uğramadan doğru odana çıktı.'],
      { gizle: 'mehves' },
    ],

    olaylar: [
      /* ------------------------------------------------------------------
         S2: Roman sohbeti (B3-Ç1)
         ------------------------------------------------------------------ */
      {
        id: 'b3_fevkiye', mekan: 'fazila_oda', tetik: 'giris', kosul: (S) => S.gorev === 0,
        sahne: ['fevkiye', 'resim'],
        adimlar: [
          'Leyla pencerenin önünde oturuyordu. Kucağında bir kitap. Her zamanki gibi gülmüyordu.',
          {
            eger: (S) => S.bayrak.fevkiye_uyari === 'mektup_acik',
            ise: [
              ['fevkiye', 'Geldim. Ama dargınım, bilmiş ol.'],
              ['fevkiye', 'O gece mektubunu okuyunca sana minnet duydum. Sonra Nabi Bey\'i dinledim. Bana o kadar güzel anlattı ki... Şimdi kime inanacağımı bilmiyorum.', 'endiseli'],
              ['f', 'Ben gördüğümü yazdım kardeşim.'],
              ['fevkiye', 'Gördüğünü kendine sakla. Herkesin bir gördüğü var.'],
              ['ic', 'Bir ay önce teşekkür eden kız bu değildi. Arada biri ona benim mektubumu tersinden okutmuş.'],
            ],
            degilse: [{
              eger: (S) => S.bayrak.fevkiye_uyari === 'mektup',
              ise: [
                ['fevkiye', 'Mektubunu aldım. Sakladım. Ama sorma; onu konuşmayacağız.'],
                ['ic', 'Konuşmayacak. Ama saklamış.'],
              ],
              degilse: [{
                eger: (S) => S.bayrak.fevkiye_uyari === 'anne',
                ise: [
                  ['fevkiye', 'Annem bu aralar beni bir tuhaf gözlüyor. Kapımın önünden geçerken duruyor. Sen ona bir şey mi dedin?'],
                  ['f', 'Annen seni seviyor Leyla. Seven göz kulak olur.'],
                  ['fevkiye', 'Göz kulak! Ben kafes kuşu muyum?'],
                ],
                degilse: [
                  ['fevkiye', 'Bir aydır gelemedim. Bilmem neden, evden çıkasım gelmedi.'],
                  ['ic', 'Leyla evden çıkmak istemiyor. Güneşin doğmak istemediğini söylemesi gibi.'],
                ],
              }],
            }],
          },
          ['fevkiye', 'Eugène Sue\'nün romanını bitirdim. Yedi büyük günahı anlatan. Sen de okumuştun, değil mi?'],
          ['f', 'Okudum. En çok Ernestine\'in hikâyesini düşündüm.'],
          ['fevkiye', 'Ben âşıkları düşündüm. Âşıkların arasına girenlere öyle öfkelendim ki!'],
          'Yumruğunu sıktı, ayağını yere vurdu. Kitap dizinden kaydı, halıya düştü.',
          ['fevkiye', 'Sen de o akıllı Madeleine\'e benziyorsun. Hep doğru konuşur, hep haklı çıkar. Ne sıkıcı!'],
          ['f', 'Sıkıcı olmak da bir iştir kuzum.', 'gulumseyen'],
          ['fevkiye', 'Söyle bana. Sokakta, kim olduğunu bilmeden gördüğü bir kıza tutulan adam, o kızı parası için sevmiş olabilir mi?'],
          ['ic', 'Anladım. Kafesin ardından bakan gözü, bahçede başörtüsüz oturan kızı anladım. Nabi Bey kendini ona böyle anlatmış.'],
          {
            soru: 'Leyla roman kahramanlarından söz ediyor. Ben başka birinden söz edildiğini biliyorum.',
            secim: [
              // (oyun için ek)
              {
                m: '"Kalbin iyi Leyla. Yalnız kendini de koru."', etki: { fevkiye: 2 }, bayrak: { fevkiye_sohbet: 'yumusak' },
                adimlar: [
                  ['f', 'Senin kalbin iyi Leyla. Romanlardaki bütün âşıklara yer var içinde. Yalnız kendine de bir yer bırak.'],
                  'Leyla bir an durdu. Sonra boynuma sarıldı.',
                  ['fevkiye', 'Sen beni hep korursun. Ama bu sefer korunmak istemiyorum Feridecim.'],
                ],
              },
              {
                m: 'Ernestine\'i anlatmak: parası için istenen kızı.', etki: { vakar: 1 }, bayrak: { fevkiye_sohbet: 'dolayli' },
                adimlar: [
                  ['f', 'Ernestine zengin bir kızdı. Bir adam onu parası için istedi. Bilge bir dostu, adamın neyi sevdiğini ona gösterdi.'],
                  ['f', 'Sevgi gözünü kör etmeden önce baktı Ernestine. Bakmak da bir terbiyedir.'],
                  ['fevkiye', 'Ben de Ernestine gibi yaparım öyleyse: beni seveni seçerim. Parayı seveni değil.'],
                  ['ic', 'Dersi aldı, kendi lehine çevirdi. Ben ona bir ayna tuttum; o aynada yine kendi bildiğini gördü.'],
                ],
              },
              {
                m: '"O adam senin kim olduğunu bilmeden mi sevmiş? Bundan emin misin?"', etki: { fevkiye: -2, isyan: 1 }, bayrak: { fevkiye_sohbet: 'dogrudan' },
                adimlar: [
                  ['f', 'O adam seni kim olduğunu bilmeden mi sevmiş Leyla? Bundan emin misin?'],
                  'Leyla kıpkırmızı kesildi. Ayağını yere vurdu.',
                  ['fevkiye', 'Sen de âşıklara merhametsizsin! Herkes gibi!'],
                  ['ic', 'Fazla açık söyledim. Açık söz, kapalı kapıya çarpar.'],
                ],
              },
            ],
          },
          // (romandan öne çekildi) Leyla'nın annesi mektup aramaya başlamış: iki kızın kâğıtları
          ['fevkiye', 'Neyse, bırak romanları. Sana başka bir şey söyleyeceğim.', 'endiseli'],
          'Sesini alçalttı. Kapıya baktı.',
          ['fevkiye', 'Annem odamı karıştırıyor Feride. Dün yastığımın altından bir kâğıt almış. Bana göstermedi; yalnız yüzüme baktı. Dolabımı kilitliyorum artık.', 'endiseli'],
          // 2. bölümdeki not kararına göre: cevap yazılan kâğıt Şefik'in cebinden kaybolmuştu
          {
            eger: (S) => NOT(S) === 'cevap',
            ise: [['ic', 'Kâğıt. Onun yastığının altından alınmış, benimki Şefik\'in cebinden. İki ayrı konak, aynı dert.']],
            degilse: [['ic', 'Kâğıt. Onun yastığından alınmış, benim çekmecemden. İki ayrı konak, aynı dert.']],
          },
          {
            soru: 'Leyla korkuyor. Benim de bir kâğıdım kayıp.',
            secim: [
              {
                m: 'Kendi kaybolan kâğıdımı ona anlatmak.', etki: { fevkiye: 2 }, bayrak: { fevkiye_bildi: true },
                iz: 'Leyla senin sırrını biliyor.',
                adimlar: [
                  ['f', 'Benim de bir kâğıdım vardı Leyla. Tek satır. Artık benim elimde değil.'],
                  'Leyla gözlerini açtı. Elimi tuttu.',
                  ['fevkiye', 'Senin mi? Sen ki hiç yanlış yapmazsın! Demek hepimizin bir kâğıdı varmış.', 'saskin'],
                  ['ic', 'Söyledim. Bir sırrı paylaşmak yükü ikiye böler; bildiği ağzı da ikiye çıkarır.'],
                ],
              },
              {
                m: 'Anlatmamak; yalnız "Kâğıtlarını evde tutma" demek.', etki: { vakar: 1 },
                iz: 'Sırrın sende kaldı.',
                adimlar: [
                  ['f', 'Kâğıtlarını evde tutma Leyla. Tutacaksan da yastığının altında tutma.'],
                  ['fevkiye', 'Sen de annem gibi konuşuyorsun.'],
                  ['ic', 'Kendi derdimi söylemedim. Onunkini taşıyacak hâlim yokken benimkini ona yükleyemem.'],
                ],
              },
            ],
          },
          ['fevkiye', 'Gideyim artık. Annem merak eder. Merak etmekten başka işi kalmadı zaten.'],
          { gizle: 'fevkiye' },
          { kart: 'Akşam.' },
          ['ic', 'Babam bu akşam bir dostuna misafirliğe gitti. Perihan Hanım yemekten sonra herkesi büyük salona çağırtmış.'],
          { gorev: 1 },
        ],
      },

      /* ------------------------------------------------------------------
         S3-S4: Akşam toplantısı, piyano (B3-Ç2), nerede durmalı (B3-Ç3)
         ------------------------------------------------------------------ */
      {
        id: 'b3_salon', mekan: 'buyuk_salon', tetik: 'giris', kosul: (S) => S.gorev === 1,
        sahne: [{ id: 'calibe', ifade: 'gulumser' }, 'suha', 'sefik', 'josephine'],
        adimlar: [
          kiyafetEkle('aksam'),
          { kiyafet: 'aksam', kilit: 'Akşam ev elbisesi. Ayağında topuğunun altı sarı demirli, yeni moda ayakkabılar (kitapta böyle).' },
          { bildir: 'Gardrobuna bir kıyafet eklendi: akşam ev elbisesi.' },
          'Yemekten sonra büyük salon. Hava serin; perdeler çekilmiş, lambalar yanıyor.',
          'Perihan Hanım sedirde, Süha Bey karşısında. Şefik, Madam\'ın yanında resimli bir kitaba eğilmiş.',
          ['calibe', 'Feridecim, gel otur. Efendi yokken biz de biraz kendimiz olalım.', 'gulumser'],
          ['ic', 'Kendimiz. Perihan Hanım\'ın kendisi hangisi, bilmiyorum.'],
          {
            eger: (S) => S.bayrak.ilac === 'josephine',
            ise: [
              ['suha', 'Madam, siz de ilaçtan anlarmışsınız. Bu evde iki hekim olduğunu bilmezdim.'],
              'Madam kızardı. Süha Bey güldü. Gülüşü Madam\'a değil, bana döndü.',
              ['ic', 'Biliyor. Kapı aralığındaki gölge ona da söylemiş.'],
            ],
            degilse: [{
              eger: (S) => S.bayrak.ilac === 'recete',
              ise: [{
                eger: (S) => !!S.bayrak.recete_ertele,
                ise: [['suha', 'Şurubunuz hâlâ masanızda duruyormuş Feride Hanım. Reçeteyi bekliyorsunuz demek.'], ['ic', 'Bekliyorum. O da getirmiyor. Nedenini ikimiz de biliyoruz.']],
                degilse: [['suha', 'Kuvvet şurubunuz bitti mi Feride Hanım? Adını sormuştunuz; artık unuttunuz mu?'], ['ic', 'Unutmadım. Hastalığımın adını hâlâ bilmiyorum.']],
              }],
              degilse: [['suha', 'Bugün de ilacınızı içtiniz mi Feride Hanım? Renginiz yerine geliyor.'], ['ic', 'Rengim yerine geliyorsa, ilaçtan değil. Madam\'ın derslerinden.']],
            }],
          },
          {
            eger: (S) => S.bayrak.gerdanlik === 'boyun',
            ise: [['calibe', 'Gerdanlığını bu akşam takmadın mı kızım? Yoksa onu yalnız misafire mi gösteriyorsun?', 'gulumser'], ['ic', 'Sofradaki o akşamı unutmamış.']],
            degilse: [],
          },
          ['calibe', 'Bize bir şey çal kızım. Efendi yok diye salonumuz sessiz mi kalsın?', 'gulumser'],
          // (oyun için ek) Piyano seçimi
          {
            soru: 'Perihan Hanım piyanoyu gösterdi: "Bize bir şey çal kızım."',
            secim: [
              {
                m: 'Hareketli, alafranga bir parça.', etki: { calibe_suphe: -1, suha: 4 }, bayrak: { piyano_b3: 'alafranga' },
                adimlar: [
                  'Hareketli bir parça çaldım. Perihan Hanım terliğinin ucuyla halıya tempo tuttu.',
                  'Süha Bey kalkıp yanıma geldi; nota sayfalarını o çevirdi.',
                  ['ic', 'Çevirdiği sayfadan çok elime bakıyor. Bir sayfayı erken çevirdi; ben yanlışa düşmedim.'],
                ],
              },
              {
                m: 'Ağır, hüzünlü bir parça.', etki: { josephine: 2, sefik: 1 }, bayrak: { piyano_b3: 'huzunlu' },
                adimlar: [
                  'Ağır bir parça çaldım. Annemin sevdiğine benzeyen bir şey.',
                  'Madam\'ın gözü doldu; mendilini çıkarmaya utandı. Şefik kalkıp yanıma, piyano iskemlesine sokuldu.',
                  'Perihan Hanım yelpazesinin ardından esnedi.',
                ],
              },
              {
                m: 'Babamın sevdiği şarkı. O yok; ama Şefik anlatır.', etki: { vakar: 1 }, bayrak: { piyano_b3: 'baba' },
                adimlar: [
                  'Babamın sevdiği eski şarkıyı çaldım. Bu evde, onun sedirinin önünde.',
                  ['sefik', 'Babam duysaydı! Abla, yarın bir daha çal, babam da duysun.'],
                  ['calibe', 'Yarın söyleriz kuzum. Efendi pek sevinir.', 'gulumser'],
                  ['ic', 'Söylemeyecek. Ama gülümsedi.'],
                ],
              },
            ],
          },
          { goster: ['nabi'] },
          'Kapı birden açıldı. Nabi Bey eşikte durdu, babamın sedirine baktı. Boş olduğunu görünce içeri girdi.',
          ['nabi', 'Enişte yok mu? Ne âlâ! Abla, bu akşam sizi güldürmezsem bana Nabi demeyin!'],
          'Yüzü kızarmış, gözleri parlak. Yemekten sonra bir yerlerden geliyordu; nereden geldiğini kimse sormadı.',
          'Köprüde şemsiyesini rüzgâra kaptıran bir kâtibi anlattı, sonra mahallenin uykucu bekçisini taklit etti. Perihan Hanım gülmekten yelpazesini düşürdü. Şefik bile güldü.',
          {
            eger: (S) => !!S.bayrak.nabi_kin,
            ise: [['ic', 'Herkese baktı, bir bana bakmadı. Mektubumu unutmamış.']],
            degilse: [['ic', 'Bu kadar neşe nereden? Bu evde kimse sebepsiz gülmez.']],
          },
          {
            soru: 'Nabi Bey kahkahalarıyla salonu doldurdu. Nerede durmalı?',
            secim: [
              {
                m: 'Salonda, piyanonun yanında kalmak.', etki: { vakar: 1, calibe_suphe: -1 }, bayrak: { mekan_b3: 'salon' },
                adimlar: [
                  'Piyanonun yanından kalkmadım. Perihan Hanım beni elimden çekip sedire, yanına oturttu.',
                  { goster: ['suha'] },
                  'Elini örgümün üstünde gezdirip okşar gibi yaptı. Eli saçıma değmedi; yalnız havasına.',
                  ['calibe', 'Ne güzel saç. Annenden mi kaldı kızım, bu renk?', 'gulumser'],
                  ['f', 'Öyle derler efendim.'],
                  ['suha', 'Feride Hanım, "ruisseau" nasıl söylenir Türkçe? Madam\'a sordum, o sizi gösterdi.'],
                  ['f', 'Dere efendim. Küçük su.'],
                  ['suha', 'Küçük su. Güzel. Küçük sular da bir gün denize varır.'],
                  'Nabi Bey bir hikâye daha anlattı. Herkes güldü; ben de güldüm.',
                  ['ic', 'Hiçbir şey olmadı. Kimse bir şey demedi. Bu akşam iyi görünen bir akşamdı. İyi görünen akşamlar bu evde en çok yorar.'],
                  { not: { suha: 'Dayı bildiğim adam. Küçük suların denize vardığını söyledi. Neyi kastettiğini sormadım.' } },
                ],
              },
              {
                m: 'Kapının yanındaki pencere içine çekilmek.', bayrak: { mekan_b3: 'kenar', delil_soylenti: true },
                adimlar: [
                  'Kapının yanındaki pencerenin içine çekildim. Perdenin kenarından bahçe karanlık görünüyordu.',
                  'Lambanın ışığı oraya pek varmıyordu. Beni unuttular.',
                  'Nabi Bey bir hikâyenin ortasında Süha Bey\'in yanına çöktü, kulağına eğildi. Fısıldıyordu; ama içkili adamın fısıltısı bağırmaktan beterdir.',
                  ['nabi', '{i}(Fısıltıyla){/i} Enişteye Beyoğlu bahsini yine açtım. Sen de "ben de gördüm" deyince adamın rengi attı! Gördün mü?'],
                  ['suha', '{i}(Alçak sesle){/i} Sus.'],
                  ['nabi', '{i}(Fısıltıyla){/i} Ne susması? Senin sözün olmasa bana kim inanırdı?'],
                  ['suha', 'Sus dedim Nabi.'],
                  'Süha Bey başını kaldırıp salona baktı. Beni görmedi; pencere içi karanlıktı.',
                  ['ic', 'Senin sözün olmasa. Babamın kulağına giden söz Nabi Bey\'in ağzından çıktı. Ama Süha Bey\'in sözüyle ağırlaştı.'],
                  ['ic', 'Kaynak o. Dayı bildiğim adam.'],
                  { delil: 'Pencere içinden duydum: Nabi Bey, Beyoğlu sözünü babama yine açmış. Süha Bey "ben de gördüm" demiş. "Senin sözün olmasa bana kim inanırdı?"' },
                  { not: { suha: 'Kenan Bey hakkındaki sözü babama o ağırlaştırmış. Dayı bildiğim adam.' } },
                ],
              },
              // (oyun için ek) Kuytu: Halim Efendi, kapı ardından
              {
                m: 'Şefik\'in defterini götürmek için taşlığa inmek.', etki: { halim: 5, calibe_suphe: 1 }, bayrak: { mekan_b3: 'kuytu', talip_icguveyi: true },
                adimlar: [
                  { goster: ['usak'] },
                  ['usak', 'Küçük hanım, Halim Efendi selamlık kapısında bekliyor. Akşam dersinden çıkarken Şefik Bey\'in defteriyle kendi defterini karıştırmış.'],
                  ['sefik', 'Benim defterim onda! Abla, gel, beraber inelim.'],
                  { gizle: 'usak' },
                  { arkaplan: 'selamlik_kapisi' },
                  { temizle: true }, { goster: ['sefik'] },
                  'Şefik\'le taşlığa indik. Selamlığın kapısı yarı aralık. Ben kapının bu yanında durdum; o öbür yanında.',
                  { goster: ['halim'] },
                  'Kapı aralığından yalnız bir kol göründü. Eski ama temiz bir ceket kolu. Elinde bir defter.',
                  ['halim', 'Küçük beyim, defterinizi getirdim. Benimki sizde kalmış olmalı.'],
                  ['sefik', 'Al Halim Efendi. Ablam da burada!'],
                  'Kapının ardındaki ses bir an durdu.',
                  ['halim', 'Küçük beyin hemşiresine hürmetlerimi arz ediniz.'],
                  ['f', '{i}(Kapının ardından){/i} Şefik o hafta hastaydı Halim Efendi. Vazifesinin kusuruna bakılmasın.'],
                  ['halim', 'Estağfurullah. Küçük beyin yazısı benimkinden düzgündür.'],
                  'Şefik güldü. Kapının öbür yanından da kısa bir gülüş geldi, hemen sustu.',
                  ['ic', 'Yüzünü görmedim. Bana tek söz söylemedi; hep Şefik\'e söyledi. Bu kadar dikkatli bir adam bu konakta yok.'],
                  'Dönerken merdivenin başında bir gölge gördüm. Bir etek ucu. Hatice\'nin.',
                  { not: { halim: 'Şefik\'in hocası. Yüzünü kapı aralığından bile görmedim. Bana hep Şefik üzerinden hitap ediyor.' } },
                  { temizle: true }, { arkaplan: null },
                  { goster: ['calibe', 'gulumser'] }, { goster: ['suha'] }, { goster: ['nabi'] }, { goster: ['josephine'] },
                  'Salona döndüğümde Nabi Bey hâlâ anlatıyordu.',
                ],
              },
            ],
          },
          /* (oyun için ek) BÖLÜMÜN SAATİ: Perihan elindekini yarın sabah sofrada babanın önüne koyacak.
             Elindeki şey 2. bölümdeki not kararına bağlıdır. */
          { goster: ['calibe', 'sinsi'] },
          'Kahkahalar dinince Perihan Hanım yelpazesini kapadı. Bana döndü.',
          {
            eger: (S) => NOT(S) === 'sakla',
            ise: [
              ['calibe', 'Feridecim, geçenlerde elime bir kâğıt geçti. Dik, aralıklı bir erkek yazısı; altında tek bir harf. Kimin çekmecesinden çıktığını sen bilirsin.', 'sinsi'],
              ['ic', 'Elinde. Bunca zaman elinde tutmuş. Bu akşamı beklemiş.', 'mahzun'],
            ],
            degilse: [{
              eger: (S) => NOT(S) === 'cevap',
              ise: [
                ['calibe', 'Feridecim, geçenlerde elime bir kâğıt geçti. Üstünde bir erkek yazısı, altında bir kız yazısı. İki yazı bir kâğıtta, ne hoş. Çocuğu postacı etmişsiniz.', 'sinsi'],
                ['ic', '"Buldum." Tek kelime yazmıştım. O tek kelime şimdi onun elinde.', 'mahzun'],
              ],
              degilse: [
                ['calibe', 'Feridecim, Hatice yazın bir şey görmüş: Şefik\'in cebine arabadan bir kâğıt konmuş. Kâğıt ortada yok. Yok olan kâğıt, var olandan çok konuşur.', 'sinsi'],
                ['ic', 'Yaktım. Yaktığım şeyi bile bana karşı kullanacak. Yalnız artık tanığı Şefik.', 'mahzun'],
              ],
            }],
          },
          ['calibe', 'Efendi bu akşam yok. Yarın sabah sofrada, hepimizin önünde kendisine arz edeceğim. Bir babanın bilmesi gerekir, değil mi kızım?', 'gulumser'],
          'Süha Bey başını kaldırdı, ablasına baktı. Bir şey demedi. Nabi Bey ıslık çaldı.',
          ['ic', 'Yarın sabah. Babam o sofraya oturduğunda tek bir anlatı duyacak: onunkini. Münevver Hanım bu gece bilmeli. Duvarın öbür yanında; yakın. Ama aramızda bir gece var.'],
          ['f', 'Müsaadenizle efendim. Üşüdüm; şalımı alayım.'],
          ['calibe', 'Al kızım, al. Gece uzun.', 'gulumser'],
          { gorev: 2 },
        ],
      },

      /* ------------------------------------------------------------------
         Şal (geçiş)
         ------------------------------------------------------------------ */
      {
        id: 'b3_mektup', mekan: 'fazila_oda', tetik: 'giris', kosul: (S) => S.gorev === 2,
        sahne: ['resim'],
        adimlar: [
          'Odam karanlık. Kandili yaktım, divitimi açtım. Şalım sandalyenin arkasında; ona sonra uzanacağım.',
          ['ic', 'Münevver Hanım\'a iki satır. Fazlası yolda düşerse fazlasıyla yakar.'],
          // (oyun için ek) Ne yazılacağı: sabah sofrasında Münevver'in elindeki bilgiyi belirler
          {
            soru: 'Kalem elimde. Münevver Hanım\'a ne yazacağım?',
            secim: [
              {
                m: 'Yalnız olanı: "Bana gelen bir satır yazı yarın sabah babamın önüne başka türlü konacak."', etki: { vakar: 1 }, bayrak: { mektup_munevver: 'olan' },
                iz: 'Münevver Hanım\'a yalnız olanı yazdın.',
                adimlar: [
                  {
                    eger: (S) => NOT(S) === 'yak',
                    ise: ['{i}"Hanımefendi; oğlunuzun nişan günü Şefik\'le bana yolladığı tek satırı okuyup yaktım. Yarın sabah babamın önüne, olmuş bir şey gibi değil, saklanmış bir şey gibi konacak. Bilginiz olsun diye yazıyorum. Feride."{/i}'],
                    degilse: ['{i}"Hanımefendi; oğlunuzun nişan günü Şefik\'le bana yolladığı tek satır artık benim elimde değil. Yarın sabah babamın önüne başka türlü konacak. Bilginiz olsun diye yazıyorum. Feride."{/i}'],
                  },
                  ['ic', 'Kimsenin adını yazmadım. Yalnız olanı yazdım.'],
                ],
              },
              {
                m: 'Olanı ve kimin yaptığını: Perihan Hanım\'ın adını da yazmak.', etki: { isyan: 1 }, bayrak: { mektup_munevver: 'calibe' },
                iz: 'Münevver Hanım\'a Perihan Hanım\'ın adını yazdın.',
                adimlar: [
                  '{i}"Hanımefendi; oğlunuzun bana yolladığı tek satırı yarın sabah babamın önüne Perihan Hanım koyacak. Harfi size yazdıran el de odur. Bilginiz olsun. Feride."{/i}',
                  ['ic', 'Adını yazdım. Bu kâğıt yolda düşerse, bu evde bana yaşayacak yer kalmaz.'],
                ],
              },
              {
                m: 'Olanı ve bir ricayı: "Kenan Bey bana bir daha yazmasın."', etki: { vakar: 2, mukaddem: 2 }, bayrak: { mektup_munevver: 'mukaddem' },
                iz: 'Münevver Hanım\'dan, oğlunun sana yazmamasını rica ettin.',
                adimlar: [
                  '{i}"Hanımefendi; oğlunuzun bana yolladığı tek satır yarın sabah babamın önüne konacak. Kabahati yoktur; benim de yoktur. Yalnız rica ederim, düğüne kadar bana bir daha yazmasın. Bu evde kâğıt güvende değil. Feride."{/i}',
                  ['ic', 'Yazmasın dedim. Yazsın isterdim. İkisini birden yazamazdım.', 'mahzun'],
                ],
              },
            ],
          },
          'Kâğıdı dörde katladım. Avucumda bir kuş kadar hafif. Duvarın öbür yanına geçecek.',
          ['ic', 'Kim götürecek? Kimi gönderirsem, yarın sabah Perihan Hanım onun adını da sofraya koyabilir.'],
          /* (oyun için ek) HABERCİ: bölümün bedeli. Haber varsa bile, sabah bedeli haberci öder. */
          {
            soru: 'Kâğıt avucumda. Sabah sofrasına bir gece var. Kime emanet edeceğim?',
            secim: [
              {
                m: 'Nimet\'e. Bu evin her kapısını o bilir.', etki: { mehves: 1 }, bayrak: { haberci: 'nimet', haber: 'vardi' },
                iz: 'Kâğıt Nimet\'te.',
                adimlar: [
                  { goster: ['mehves'] },
                  ['mehves', 'Ver hanımcığım. Mutfak kapısından çıkar, duvar dibinden giderim. Kapıcı uyur bu saatte.'],
                  ['f', 'Seni görürlerse Nimet...'],
                  ['mehves', 'Görürlerse "süt almaya çıktım" derim. Gece yarısı süt mü olur deme; ben derim, onlar düşünsün.'],
                  { gizle: 'mehves' },
                  ['ic', 'Yirmi yıldır bu evde. Yirmi yıllık ekmeğini benim iki satırım için kapıya götürüyor.'],
                ],
              },
              {
                m: 'Şefik\'e. Selamlığa, Halim Efendi\'ye diye iner; kimse çocuktan şüphelenmez.', etki: { sefik: 1 }, bayrak: { haberci: 'sefik', haber: 'vardi' },
                iz: 'Kâğıt Şefik\'te.',
                adimlar: [
                  { goster: ['sefik'] },
                  ['sefik', 'Hocama defter götürür gibi mi abla? O yan konağın kâtibini tanır; verir.'],
                  ['f', 'Bu sefer kimseye fırçalatmayacaksın ceketini. Yakanın içine koy.'],
                  ['sefik', 'Koydum. Bu sefer düşürmem abla. Söz.'],
                  { gizle: 'sefik' },
                  ['ic', 'On yaşında. Onu yine postacı ettim. Yakalanırsa bunun adını çocukluk koymazlar.', 'mahzun'],
                ],
              },
              {
                m: 'Madam\'a. Yabancıdır; "postaya mektup atacağım" der, sokağa çıkar.', etki: { josephine: 1 }, bayrak: { haberci: 'madam', haber: 'vardi' },
                iz: 'Kâğıt Madam\'da.',
                adimlar: [
                  { goster: ['josephine'] },
                  ['josephine', 'Verin Feride Hanım. Ben Paris\'e mektup yazıyordum zaten; ikisini beraber götürürüm. Biri yan kapıya, biri postaya.'],
                  ['f', 'Madam, bu evde sizi istemeyenler var. Bahane arıyorlar.'],
                  ['josephine', 'Bahane arayan bulur. Ben bulmasını beklemem.'],
                  { gizle: 'josephine' },
                  ['ic', 'Bana ne öğrenmek istediğimi soran ilk insan. Onu da kapının önüne ben koyuyorum belki.'],
                ],
              },
              {
                m: 'Kimseye. Kendim götürürüm; bahçe duvarındaki kapıdan.', etki: { isyan: 1, vakar: 1 }, bayrak: { haberci: 'kendi' },
                iz: 'Kâğıt koynunda. Kimseyi tehlikeye atmadın; kendini attın.',
                adimlar: [
                  'Kâğıdı koynuma koydum. Bahçenin dibinde, incir ağacının yanında iki konağın arasında küçük bir kapı vardır; bahçıvanlar kullanır.',
                  ['ic', 'Kimsenin ekmeğiyle, kimsenin çocukluğuyla oynamam. Giden ben olurum. Yakalanan da.'],
                ],
              },
            ],
          },
          'Şalımı omzuma aldım. Sofadan geçersem Hatice görür. Bahçenin taşlı yolundan gideceğim.',
          { mekan: 'konak_bahce' },
          { taki: 'sal', ad: 'Omzumda şal, bahçe yolunda', alt: 'Şalıma sarındım. Ay ışığı ıslak taşlarda parlıyor; salonun ışığı arkamda kaldı.' },
          { gorev: 3 },
        ],
      },

      /* ------------------------------------------------------------------
         S5: Topuk (B3-Ç4); S5b perde arkası (yalnız "vurdu")
         ------------------------------------------------------------------ */
      {
        id: 'b3_topuk', mekan: 'konak_bahce', tetik: 'giris', kosul: (S) => S.gorev === 3,
        sahne: [],
        adimlar: [
          'Gece serin. Ay çınarın arkasında. Ayakkabılarımın demir topukları taşlarda tıkırdıyor.',
          {
            eger: (S) => S.bayrak.haberci === 'kendi',
            ise: ['Koynumdaki kâğıt her adımda hışırdıyor. İncir ağacına, duvardaki kapıya otuz adım var.'],
            degilse: [['ic', 'Kâğıt yola çıktı. Bana düşen, salona dönüp hiçbir şey olmamış gibi oturmak.']],
          },
          { goster: ['nabi'] },
          'Yolun ortasında bir gölge önüme geçti. Nabi Bey. Beni bahçede beklemiş.',
          {
            eger: (S) => S.bayrak.mekan_b3 === 'kuytu',
            ise: [
              ['nabi', 'Hoş geldiniz Feride Hanım. Taşlıkta kâtip efendiyle ne konuştunuz bakalım? Defter mi, başka bir şey mi?'],
              ['f', 'Şefik\'in defteriydi. Size hesap verecek değilim.', 'ofkeli'],
            ],
            degilse: [],
          },
          {
            eger: (S) => !!S.bayrak.nabi_kin,
            ise: [['nabi', 'Bak hele, bizim mektupçu hanım! Kâğıda yazdıklarını yüzüme de söyleyebilir misin?']],
            degilse: [],
          },
          ['nabi', 'Feride Hanım! Senin el uzatmadığın işi ben tek başıma bitirdim. Ne dersin buna?'],
          // 2. bölümde Nabi'ye sorulan soru kendi ağzından döner
          { eger: (S) => !!S.bayrak.nabi_soru,
            ise: [['nabi', 'Hani "Leyla\'ya ne istediğini sordunuz mu" demiştin? Sordum işte. Beni istiyormuş.'], ['ic', 'Kendi sorum, onun ağzında bana döndü.']],
            degilse: [] },
          ['f', 'Ne diyeyim? Hayırlı olsun.'],
          ['nabi', 'Hayırlı olsun ha? "Kıskandım" demeye dilin varmıyor da ondan.'],
          ['f', 'Kıskanmak mı? Leyla\'yı senden kıskanacak değilim herhalde.'],
          ['nabi', 'Belki tersinden. Belki beni ondan kıskanıyorsun.'],
          'Nefesinde içki kokusu. Ağzının kenarında yapışık bir gülüş. Çalıların dibinde bir hışırtı oldu; kedi olmalı.',
          {
            eger: (S) => !!S.bayrak.bilgi_reftar_nabi,
            ise: [['ic', 'Hatice\'ye hanımlık vaat eden adam. Şimdi Leyla\'nın kapısında. Şimdi de benim yolumda.']],
            degilse: [],
          },
          ['f', 'Baksana dayı bey! Çok azıtan sarhoşların da haddini bildirirler.', 'ofkeli'],
          ['nabi', 'Ne yapabilirsin ki?'],
          ['f', 'Bir daha deneme. Gururumu korumak için ne gerekirse onu yaparım.'],
          ['nabi', 'Adam sen de! Beni beğenmiyorsan, sana iltifat etmediğim içindir. Yoksa ben sıska Kenan\'a mi benzerim?'],
          ['ic', 'Kenan. Onun adını bu ağızdan duymak, yüzüme çamur sıçraması gibi.'],
          {
            soru: 'Nabi Bey yolumu kesmiş, gülüyor. Bu gece bu bahçede işim var. Ayağımda demir topuklu ayakkabım.',
            secim: [
              {
                m: 'Tek söz etmeden yanından geçmek.', etki: { vakar: 1 }, bayrak: { topuk: 'sustu' },
                adimlar: [
                  'Başımı kaldırdım. Tek söz etmeden yanından geçtim.',
                  ['nabi', 'Dilin de mi tutuldu? Haydi, haydi! Salonda görüşürüz.'],
                  'Arkamdan güldü. Gülüşü bahçe duvarına çarpıp geri geldi.',
                  ['ic', 'Yuttuğum söz boğazımda. Ağır, demir gibi.'],
                ],
              },
              {
                m: '"Bunu babam duyacak." Sabah babama anlatmak.', bayrak: { topuk: 'sikayet', nabi_kin: true },
                iz: 'Babana söylemeye karar verdin.',
                adimlar: [
                  ['f', 'Bu sözleri babam duyacak. Yarın sabah, kendi ağzımdan.'],
                  'Sözümü söyleyip yürüdüm. Ayakkabılarımın sesi taşlarda sert sert çınladı.',
                  'Arkamdan gülmedi. Gülüşü yüzünde donup kaldı.',
                  ['ic', 'Babam. Babam beni dinler mi? Dinlesin. Bu sefer dinlesin.'],
                  { eger: (S) => !!S.bayrak.babaya_soyleme_niyeti,
                    ise: [['ic', 'Nimet\'e "Babam bilmeli" demiştim. "Elinde lakırdıdan fazlası olsun" dedi. Bu sefer kendi kulağımla duydum.']],
                    degilse: [] },
                ],
              },
              {
                m: 'Ayakkabıyı çıkarıp topuğunu alnına indirmek.', etki: { isyan: 2, dedikodu: 1, mukaddem: 5 }, bayrak: { topuk: 'vurdu', nabi_kin: true },
                adimlar: [
                  'Eğildim. Ayakkabımı çıkardım. Topuğunu bütün gücümle alnına indirdim.',
                  'Kuru bir ses. Nabi Bey alnını iki eliyle tuttu. Parmaklarının arasında kan.',
                  'Tek söz etmedi. Bana el kaldırmadı. Döndü, mutfak tarafındaki musluğa koştu.',
                  ['ic', 'Elim titremiyor. Titremesi gerekirdi.'],
                  'Ayakkabımı giydim. Bağlarını bağlarken parmaklarım ancak o zaman titredi.',
                  { eger: (S) => S.bayrak.haberci === 'kendi',
                    ise: ['Yol boşaldı. Koştum. İncir ağacının dibindeki kapıyı üç kere tıklattım. Açan yaşlı bahçıvan kâğıdı aldı; tek söz sormadı.', ['ic', 'Gitti. Topuğum yolu açtı. Toprakta izini de bıraktı.'], { bayrak: { haber: 'vardi' } }],
                    degilse: [] },
                  { not: { mukaddem: 'Ona "sıska" dediler. Ben topuğumla cevap verdim. Kendisi bilmeyecek.' } },
                  // Perde arkası (S5b)
                  { temizle: true },
                  { kart: 'Aynı dakikalarda.' },
                  { goster: ['nabi'] },
                  ['pa', 'Nabi Bey musluğun başında alnını soğuk suyla yıkıyor. Sesini çıkarmıyor; çıkarırsa abla duyar, enişte duyar.'],
                  ['pa', 'Kan dinince odasına çıkıp aynaya bakıyor. Alnında, dövme gibi, bir ökçenin şekli. Sarı demirin her çivisi belli.'],
                  ['pa', 'Dudakları titriyor. Az kalsın ağlayacak.'],
                  ['pa', 'Sonra fesini alıyor, kaşlarının üstüne kadar indiriyor. Aynaya bir daha bakıyor. İz görünmüyor.'],
                  ['pa', 'Seviniyor. Bir fes, bir yüzü kurtardı.'],
                ],
              },
            ],
          },
          // Kendim götürürken topuk yolu açmadıysa kapıya varılamaz: haber gecikir
          {
            eger: (S) => S.bayrak.haberci === 'kendi' && S.bayrak.haber !== 'vardi',
            ise: [
              'İncir ağacına doğru on adım attım. Durdum. Nabi Bey yolun ortasından çekilmemişti; olduğu yerden beni seyrediyordu.',
              'Üst katta bir perde kıpırdadı. Camın ardında bir gölge durdu, kımıldamadı.',
              ['ic', 'O kapıyı iki gözün önünde tıklatırsam kâğıt duvarı geçmeden yakalanır. Bu gece o kapıya varamam.', 'mahzun'],
              'Geri döndüm. Kâğıt koynumda, her adımda hışırdıyordu.',
              { bayrak: { haber: 'gecikti' } },
            ],
            degilse: [],
          },
          { temizle: true },
          'Salonun camlı kapısını açtım. Göğsüm inip kalkıyordu.',
          { mekan: 'buyuk_salon' },
          { gorev: 4 },
        ],
      },

      /* ------------------------------------------------------------------
         S6: Nabız (B3-Ç5)
         ------------------------------------------------------------------ */
      {
        id: 'b3_nabiz', mekan: 'buyuk_salon', tetik: 'giris', kosul: (S) => S.gorev === 4,
        sahne: [{ id: 'calibe', ifade: 'gulumser' }, 'suha', 'sefik', 'josephine'],
        adimlar: [
          'Salona girdiğimde yüzüm yanıyordu. Kimse bir şey sormadı; yalnız Süha Bey başını kaldırdı.',
          ['suha', 'Feride Hanım? Bir rahatsızlığınız mı var?'],
          ['f', 'Hiçbir şeyim yok efendim.', 'utanmis'],
          'Beş on dakika oturdum. Sonra Şefik\'le çekilmek için izin istedim.',
          ['calibe', 'Hemen kaçıyor musun kızım? Daha vakit erken. Nabi de şimdi gelir, biraz daha güleriz.', 'gulumser'],
          ['f', 'Affedersiniz efendim, biraz rahatsızım.'],
          {
            eger: (S) => S.bayrak.suha_sohbet === 'sefik',
            ise: [['suha', 'Şefik Bey, sen biraz otur bakalım. Artık ablanla yalnız konuşamıyoruz; bari hasta hekimine kalsın.']],
            degilse: [{
              eger: (S) => S.bayrak.suha_sohbet === 'kesti',
              ise: ['Süha Bey kalkmadan önce bir an durdu. Kitabını geri verdiğim günden beri hep böyle: önce ölçüyor, sonra adım atıyor.'],
              degilse: [],
            }],
          },
          ['suha', 'Öyle. Yüzünüzden belli. Demin sordum, bir şeyim yok dediniz. Böyle şeyler doktorlardan gizlenmez.'],
          'Kalktı, bileğimi tuttu, saatine baktı.',
          ['suha', 'Nabzınız pek hızlı. Kalbinizi dinlemeliyim.'],
          'Başını göğsüme doğru eğip dinledi. Kısa sürdü. Bana bir yıl gibi geldi.',
          ['ic', 'Hekim. Dayı. Ben on yedi yaşındayım ve kımıldayamıyorum.'],
          ['suha', 'Haydi beyim, ablanın yatağını hazırlatın. Yorulmadan yatsın.'],
          'Madam başıyla Şefik\'e işaret etti. İkisi birlikte çıktı.',
          { gizle: 'sefik' }, { gizle: 'josephine' },
          'Perihan Hanım "Kolonya getireyim" diye kalktı. Kapıyı arkasından örttü. Dönmedi.',
          { gizle: 'calibe' },
          'Süha Bey iskemlesini yaklaştırdı. Bileğimi bırakmadı.',
          ['suha', 'Bahçeden geliyorsunuz. Etekleriniz ıslak, nefesiniz kesik. Ben bir şey görmedim Feride Hanım. Hekimler görmez; yalnız hatırlar.'],
          ['ic', 'Görmedim diyor. Gördüğünü söylemenin en kibar yolu. Bunu bir alacak gibi cebine koydu.'],
          ['suha', 'Siz bu evin en ince insanısınız Feride Hanım. Sizi gerçekten anlayan biri olsaydı...'],
          'Cümlesini bitirmedi. Bitirmemesi, bitirmesinden çok şey söyledi.',
          ['ic', 'Bir şey itiraf etmiyor ki reddedeyim. Terbiyesizlik etmiyor ki haddini bildireyim.'],
          {
            soru: 'Süha Bey\'in parmakları bileğimde. Perihan Hanım dönmüyor.',
            secim: [
              {
                m: 'Susmak. Bir şey itiraf etmiyor ki reddedeyim.', etki: { suha: 4, vakar: 1 }, bayrak: { nabiz: 'sustu' },
                adimlar: [
                  'Sustum. Gözümü halıdaki bir çiçeğe diktim.',
                  'Süha Bey sessizliğimi bir cevap saydı. Sesi alçaldı; daha uzun konuştu.',
                  ['ic', 'Susmak burada kapıyı açık bırakmak. Ama bu odada başka kapı yok.'],
                ],
              },
              {
                m: '"Zahmet etmeyin dayı bey. Yeğeninizin bir şeyi yok."', etki: { suha: -4, vakar: 1 }, bayrak: { nabiz: 'dayi' },
                adimlar: [
                  ['f', 'Zahmet etmeyin dayı bey. Yeğeninizin bir şeyi yok.'],
                  '"Dayı" sözünde Süha Bey\'in yüzü bir an değişti. Sonra gülümsedi; bileğimi bıraktı.',
                  ['suha', 'Yeğenim. Elbette.'],
                  ['ic', 'Bir kelimeyle bir kapı kapanır. Kilidi tutar mı, bilmem.'],
                ],
              },
              {
                m: 'Bileğimi çekip ayağa kalkmak.', etki: { suha: -4, isyan: 1 }, bayrak: { nabiz: 'cekildi' },
                adimlar: [
                  'Bileğimi çektim. Ayağa kalktım.',
                  ['suha', 'Hasta nazı. Hekimlere hep böyle yapılır.'],
                  'Güldü. Gözleri gülmedi.',
                ],
              },
            ],
          },
          { goster: ['sefik'] },
          ['sefik', 'Abla! Yatağın hazır!'],
          'Hemen Şefik\'in elini tuttum, salondan çıktık.',
          ['ic', 'Şefik beni bir odadan kurtardı. Bunu bilmiyor.'],
          {
            eger: (S) => S.bayrak.nabiz === 'sustu',
            ise: [{ not: { suha: 'Bileğimi bırakmadı. Ben sustum; o bunu cevap saydı.' } }],
            degilse: [{ not: { suha: 'Hekim. Dayı. Bileğimi bırakmayan adam.' } }],
          },
          { gorev: 5 },
        ],
      },

      /* ------------------------------------------------------------------
         S7: Gece, annenin resmi (seçim yok)
         ------------------------------------------------------------------ */
      {
        id: 'b3_gece', mekan: 'fazila_oda', tetik: 'giris', kosul: (S) => S.gorev === 5,
        sahne: ['resim', 'sefik'],
        adimlar: [
          kiyafetEkle('gecelik'),
          { kiyafet: 'gecelik', sessiz: true, kilit: 'Gece. Beyaz gecelik, belde pembe kurdele, kendi işlediğin pembe atlas terlikler (kitapta böyle).' },
          'Yarım saat sonra. Şefik karşı yatakta uyuyor. Ara kapıyı usulca araladım; Madam da uyuyordu.',
          'Kalktım. Kandilin yanındaki şamdanı yaktım. Odanın içinde dolaşmaya başladım.',
          ['ic', 'Uyanık olsalar sorarlardı. Ne söyleyecektim? Kime?'],
          { goster: ['resim'] },
          'Annemin resminin önünde durdum. Şamdanın ışığı yüzünde titredi.',
          { gorunum: true },
          // 2. bölümdeki Madam Oiselle hatırası
          { eger: (S) => S.bayrak.oiselle === 'dik',
            ise: [['ic', 'On dört yaşında bu resmin önünde durup "kaldıramayacaksınız" demiştim. O kız nereye gitti?']],
            degilse: [{ eger: (S) => !!S.bayrak.oiselle, ise: [['ic', 'Bu resmi kimse uzanamasın diye yatağımın başına asmıştım. Bu evde ben de onun gibi saklanıyorum.']], degilse: [] }] },
          ['f', 'Anneciğim. Bu ev bizim evimiz miydi?', 'mahzun'],
          ['f', 'Babam onların. Şefik\'le benim nemiz var bu evde? Bir resim. Bir piyano.'],
          ['f', 'Burada yabancı olan biziz!', 'ofkeli'],
          'Sesim kendi kulağımda büyüdü. Şefik döndü; uyanmadı.',
          // haber: 'vardi' değilse kâğıt hâlâ Feride'dedir (eski kayıtlarda bayrak boş olabilir)
          {
            eger: (S) => S.bayrak.haber === 'vardi',
            ise: [{
              eger: (S) => S.bayrak.haberci === 'kendi',
              ise: [['ic', 'Kâğıdı bahçıvan aldı. Hanımefendinin eline vardı mı? Sabaha kadar bilemem.']],
              degilse: [['ic', 'Kâğıt yola çıktı. Vardı mı? Sabaha kadar bilemem. Sabah, bir de onu götürenin adı sorulacak.']],
            }],
            degilse: [['ic', 'Kâğıt hâlâ koynumda. Bu gece o kapıya varamadım. Sabah olacak ve duvarın öbür yanında kimse bir şey bilmeyecek.', 'mahzun']],
          },
          ['f', 'Sen olsaydın ne derdin anne? Sus mu derdin? Vur mu derdin?'],
          'Resim cevap vermedi. Ama bakışını da çekmedi.',
          ['ic', 'Sekiz ay sonra bu kapıdan gelin çıkacağım. Sekiz ay bir ömür gibi.'],
          'Şamdanı söndürdüm. Yastığa kapandım. Sesimi çıkarmadan ağladım.',
          { temizle: true },
          { kart: 'Sabah.' },
          { kiyafet: 'ev', kilit: KILIT_EV },
          ['ic', 'Sofraya inmeden önce bahçeye bakacağım. Dün gece çalıların dibinde bir hışırtı vardı. Kedi miydi?'],
          { gorev: 6 },
        ],
      },

      /* ------------------------------------------------------------------
         (oyun için ek) Sabah: topuk izi (delil görevi)
         ------------------------------------------------------------------ */
      {
        id: 'b3_iz', mekan: 'konak_bahce', kisi: 'bahce_izler', kosul: (S) => S.gorev === 6,
        sahne: ['bahce_izler'],
        adimlar: [
          'Gece çiseleyen yağmur toprağı yumuşatmış. Salonun camlı kapısına giden yolun kenarına eğildim.',
          {
            eger: (S) => S.bayrak.topuk === 'vurdu',
            ise: [
              'Islak toprakta kendi ayakkabımın izi. Ökçenin sarı demiri her çivisiyle basılmış. Bir yanında tek bir ayak izi: ayakkabımı çıkardığım yer.',
              'Mutfak tarafındaki musluğun taşında kurumuş, kararmış bir leke.',
              ['ic', 'Bu topuk dün gece bir alına indi. Toprakta izi var. Alında da var.'],
            ],
            degilse: [
              'Islak toprakta kendi ayakkabımın izi. Ökçenin sarı demiri her çivisiyle basılmış. Karşısında, iki adım ötede, kımıldamamış iki çizme izi.',
              ['ic', 'Burada durdum. O da orada durdu. Geri çekilmedi.'],
            ],
          },
          'Bir de çalıların dibinde, yumuşak toprakta, küçük, sivri burunlu bir terlik izi.',
          ['ic', 'Kedinin terliği olmaz. Biri dün gece bizi seyretmiş.'],
          {
            eger: (S) => !!S.bayrak.reftar_terlik,
            ise: [['ic', 'Sivri burunlu. Hatice\'nin terliğinin burnu bu sabah çamurluydu. Şimdi anladım.']],
            degilse: [['ic', 'Bu sivri burunlu terlikleri bu evde kim giyer? Perihan Hanım eskilerini kime verir?']],
          },
          {
            eger: (S) => S.bayrak.topuk === 'vurdu',
            ise: [{ delil: 'Topuk izi: bahçe yolunda sarı demirli ökçemin izi; musluk taşında kurumuş kan. Çalıların dibinde sivri burunlu bir terlik izi: biri bizi seyretti.' }],
            degilse: [{ delil: 'Topuk izi: bahçe yolunda sarı demirli ökçemin izi, karşısında Nabi Bey\'in çizmeleri. Çalıların dibinde sivri burunlu bir terlik izi: biri bizi seyretti.' }],
          },
          { bayrak: { topuk_izi: true, terlik_izi: true } },
          'Kalktım. Ayakkabımın ucuyla izlerin üstüne toprak ittim. Terlik izine dokunmadım.',
          ['ic', 'O kalsın. Kimin olduğunu bilen biri görürse, yüzünden anlarım.'],
          { gorev: 7 },
        ],
      },

      /* ------------------------------------------------------------------
         Sabah sofrası (Ç4 sonucu; "sikayet" ise şartnamedeki sahne)
         ------------------------------------------------------------------ */
      {
        id: 'b3_sabah', mekan: 'yemek_salonu', tetik: 'giris', kosul: (S) => S.gorev === 7,
        sahne: ['sai', { id: 'calibe', ifade: 'gulumser' }],
        adimlar: [
          'Kahvaltı sofrası. Babam gazetesini katlamış. Perihan Hanım çayını karıştırıyor; kaşık bardağa hiç değmiyor.',
          // Dün akşam babanın şarkısı çalındıysa Şefik anlatır; babanın güveni ancak şimdi artar
          {
            eger: (S) => S.bayrak.piyano_b3 === 'baba',
            ise: [
              { goster: ['sefik', 'sevincli'] },
              ['sefik', 'Babacığım! Ablam dün akşam sizin şarkınızı çaldı. Perihan annem "yarın söyleriz" dedi ama unuttu, ben söylüyorum!', 'sevincli'],
              ['sai', 'Benim şarkımı mı? Kızım... Bu akşam bir daha çalarsın, ben de dinlerim.', 'gulumser'],
              { etki: { baba_guven: 3 } },
              { gizle: 'sefik' },
            ],
            degilse: [],
          },
          {
            eger: (S) => S.bayrak.topuk === 'vurdu',
            ise: [
              { goster: ['nabi'] },
              'Nabi Bey geç geldi. Fesini kaşlarının üstüne kadar indirmişti. Hiç böyle giymezdi.',
              ['sai', 'Nabi, o fes ne öyle? Mahalle kabadayısına dönmüşsün.'],
              ['nabi', 'Moda enişte. Beyoğlu\'nda böyle giyiyorlar.'],
              'Bana bakmadı. Ben ona baktım. Fesin kenarından mor bir çizgi taşıyordu.',
              ['calibe', 'Gece karanlıkta kapıya çarpmış. Çocuk işte.', 'gulumser'],
              'Bunu söylerken gözü bir an bana değdi.',
              ['ic', 'Biliyor. Terlik izinin sahibi ona da söylemiş.'],
              { delil: 'Nabi Bey\'in alnında, fesinin kenarından taşan mor bir iz: topuğumun izi. Fesini kaşına indirip saklıyor; Perihan Hanım "kapıya çarpmış" diyor.' },
              { bayrak: { nabi_fes: true } },
              { gizle: 'nabi' },
            ],
            degilse: [{
              eger: (S) => S.bayrak.topuk === 'sikayet',
              ise: [
                ['f', 'Babacığım, size bir şey söylemem gerek.'],
                'Dün gece bahçede olanı anlattım. Sözlerini tekrar etmedim; yalnız yolumu kestiğini, Kenan Bey\'e laf ettiğini söyledim.',
                { goster: ['nabi'] },
                ['sai', 'Nabi! Benim kızımın yolunu kesmek ne demek? Bu evde sana yer verdimse, terbiyesizliğe vermedim!', 'ofkeli'],
                ['nabi', 'Enişte, şakaydı. Bir laf ettik...'],
                ['calibe', 'Çocuktur efendi, şaka etmiş. Feride da gece vakti sinirli, büyütmesin.', 'gulumser'],
                ['sai', 'Şakanın da yeri olur. Bir daha olmasın. Duydun mu?'],
                // Babanın ve Perihan'ın tepkisi, baba gerçekten duyduğu anda
                { etki: { baba_guven: 2, calibe_suphe: 1 } },
                'Nabi Bey önüne baktı. Masadan kalkarken bana bir baktı ki, babamın sesi o bakışı silmeye yetmedi.',
                ['ic', 'Babam beni savundu. Perihan Hanım onu savundu. Terazinin iki kefesi yine eşit kaldı.'],
                { gizle: 'nabi' },
              ],
              degilse: [
                { goster: ['nabi'] },
                'Nabi Bey sofraya keyifle oturdu. Sanki bu evin damadı olacakmış gibi kurulmuştu.',
                ['nabi', 'Sabahınız hayrolsun enişte! Sabahınız hayrolsun Feride Hanım. Dilin çözüldü mü bu sabah?'],
                ['sai', 'Ne dili?'],
                ['nabi', 'Hiç. Dün akşam erken çekildi de.'],
                ['ic', 'Yuttuğum söz hâlâ boğazımda.'],
                { gizle: 'nabi' },
              ],
            }],
          },
          // Dün geceki nabız seçimi sofrada Perihan'ın ağzından döner
          { eger: (S) => S.bayrak.nabiz === 'cekildi',
            ise: [['calibe', 'Dün akşam dayının elinden bileğini çekmişsin kızım. Hekime naz edilmez.', 'gulumser'], ['ic', 'Kapıyı örtüp gitmişti. Gene de biliyor.']],
            degilse: [{ eger: (S) => S.bayrak.nabiz === 'dayi',
              ise: [['calibe', 'Süha bu sabah erken çıktı. "Yeğenim iyileşmiş" dedi, güldü.', 'gulumser'], ['ic', 'Ne demek istediğini ikimiz de biliyoruz.']],
              degilse: [] }] },
          /* (oyun için ek) SOFRA: bölümün doruğu. Perihan elindekini babanın önüne koyar.
             haber 'vardi' ise Münevver araya girer ve Perihan haberciye döner; 'gecikti' ise Feride tek başına savunur. */
          { goster: ['calibe', 'sinsi'] },
          'Perihan Hanım kaşığını bıraktı. Elini önlüğünün cebinin üstüne koydu.',
          ['calibe', 'Efendi, size arz etmem gereken bir şey var. Kızımızın iyiliği için.', 'sinsi'],
          {
            eger: (S) => NOT(S) === 'sakla',
            ise: [
              'Kâğıdı çıkardı, babamın tabağının yanına bıraktı. Dik, aralıklı harfler. Altında bir harf: M.',
              ['calibe', 'Nişanlı bir kızın çekmecesinde, kilit altında duruyordu. Bir erkek yazısı. Kim getirdi, nasıl geldi, ben sormadım; siz sorarsınız.', 'sinsi'],
            ],
            degilse: [{
              eger: (S) => NOT(S) === 'cevap',
              ise: [
                'Kâğıdı çıkardı, babamın tabağının yanına bıraktı. Üstte bir erkek yazısı. Altında, kurşun kalemle, benim yazım: "Buldum."',
                ['calibe', 'Şefik\'in cebinden çıktı. Bir erkek yazmış, kızımız altına cevap vermiş. Çocuğu da araya koymuşlar.', 'sinsi'],
              ],
              degilse: [
                ['calibe', 'Nişan günü arabadan Şefik\'in cebine bir kâğıt konmuş; Hatice gözüyle gördü. Kâğıt ortada yok. Kızımız yakmış olmalı. İnsan masum kâğıdı yakar mı efendi?', 'sinsi'],
              ],
            }],
          },
          { goster: ['sai', 'ciddi'] },
          'Babam gözlüğünü taktı. Yüzü değişti.',
          ['sai', 'Feride. Bu nedir?', 'ciddi'],
          {
            // 'vardi' yalnız üç haberci yolunda ve "kendim + topuk vurdu" yolunda kurulur; öbür hâllerde 'gecikti'
            eger: (S) => S.bayrak.haber === 'vardi',
            ise: [
              // Haber vardı: Münevver araya girer
              'Ağzımı açamadan sofanın kapısı vuruldu.',
              { goster: ['hizmetci'] },
              ['hizmetci', 'Efendim, yan konaktan Münevver Hanımefendi\'nin kalfası geldi. Hanımefendi selam eder; şunu aynen söylememi buyurdu.'],
              {
                eger: (S) => S.bayrak.mektup_munevver === 'calibe',
                ise: [['hizmetci', '"Oğlumun nişanlısına yazdığı tek satırdan haberim vardır; ayıbı varsa benimdir. Bu sabah kahveye Sait Efendi\'yi, kızımı ve Perihan Hanım\'ı beklerim. Bana yazılan öbür kâğıdı da konuşuruz."']],
                degilse: [{
                  eger: (S) => S.bayrak.mektup_munevver === 'mukaddem',
                  ise: [['hizmetci', '"Oğlumun nişanlısına yazdığı tek satırdan haberim vardır; ayıbı varsa benimdir. Oğluma da söyledim: düğüne kadar kalemini yerinde tutacak. Bu sabah kahveye Sait Efendi\'yi ve kızımı beklerim."']],
                  degilse: [['hizmetci', '"Oğlumun nişanlısına yazdığı tek satırdan haberim vardır; ayıbı varsa benimdir, kızın değil. Bu sabah kahveye Sait Efendi\'yi ve kızımı beklerim."']],
                }],
              },
              { gizle: 'hizmetci' },
              { goster: ['calibe', 'saskin'] },
              'Perihan Hanım\'ın eli cebinin üstünde kaldı. İlk kez bir cümleyi yarıda bıraktığını gördüm.',
              { goster: ['sai', 'mahzun'] },
              ['sai', 'Hanımefendi biliyorsa... Bu bahsi onun sofrasında konuşuruz. Burada değil.', 'mahzun'],
              ['ic', 'Vardı. İki satırım duvarın öbür yanına vardı. Babam kararını bu sofrada vermedi.', 'gulumseyen'],
              {
                eger: (S) => S.bayrak.mektup_munevver === 'calibe',
                ise: [{ etki: { calibe_suphe: 2, munevver: 2 } }],
                degilse: [{ etki: { munevver: 2 } }],
              },
              // Perihan'ın karşı hamlesi: kâğıt tutmadıysa haberciye döner
              { goster: ['calibe', 'sinsi'] },
              ['calibe', 'Peki efendi; kâğıdı bırakalım. Ama bir şey soracağım: hanımefendi bu sabahın köründe bunu nereden biliyor? Bu evden o konağa haberi gece yarısı kim götürdü?', 'sinsi'],
              {
                eger: (S) => S.bayrak.haberci === 'nimet',
                ise: [['calibe', 'Kapıcı söyledi: Nimet gece yarısı sokak kapısındaymış. "Süt almaya" çıkmış. Gece yarısı.', 'sinsi'], { goster: ['mehves'] }, 'Nimet kapının yanında, elinde tepsi, taş kesildi.'],
                degilse: [{
                  eger: (S) => S.bayrak.haberci === 'sefik',
                  ise: [['calibe', 'Hatice gördü: Şefik gece gömleğiyle selamlığa inmiş. On yaşında çocuk, gece yarısı, kâtibin kapısında.', 'sinsi'], { goster: ['sefik', 'aglamakli'] }, 'Şefik kaşığını bıraktı. Bana baktı.'],
                  degilse: [{
                    eger: (S) => S.bayrak.haberci === 'madam',
                    ise: [['calibe', 'Kapıcı söyledi: Madam gece yarısı sokağa çıkmış. Çocuklarımızı emanet ettiğimiz kadın, gece yarısı, sokakta.', 'sinsi'], { goster: ['josephine'] }, 'Madam fincanını bıraktı. Sırtı dimdikti.'],
                    degilse: [['calibe', 'Hatice gördü: bahçe duvarındaki kapıda, gece yarısı, şalına sarınmış biri. Bu evde o şalı kim taşır efendi?', 'sinsi']],
                  }],
                }],
              },
              {
                eger: (S) => S.bayrak.haberci === 'kendi',
                ise: [
                  ['f', 'Ben götürdüm efendim. Kimseyi göndermedim.'],
                  ['sai', 'Gece yarısı. Bahçede. Tek başına.', 'ciddi'],
                  ['sai', 'Niyetini anlıyorum kızım. Ama bundan böyle akşam ezanından sonra bahçe kapısının anahtarı annende duracak.', 'ciddi'],
                  ['ic', 'Kimsenin ekmeğiyle oynamadım. Bedelini ben ödüyorum: bu evde bana açık tek kapı da kilitlendi.', 'mahzun'],
                  { bayrak: { bedel: 'kendi' } }, { etki: { baba_guven: -1, vakar: 1 } },
                ],
                degilse: [{
                  // Bedeli üstlenmek ya da susmak
                  soru: 'Babam ona döndü. Onu ben gönderdim.',
                  secim: [
                    {
                      m: '"Onu ben gönderdim efendim. Cezası varsa benimdir."', etki: { vakar: 2, baba_guven: -2 }, bayrak: { ustlendi: true },
                      iz: 'Suçu üstlendin. Habercin yarı kurtuldu.',
                      adimlar: [
                        ['f', 'Onu ben gönderdim efendim. Kendi kendine gitmedi. Cezası varsa benimdir.'],
                        'Babam uzun uzun yüzüme baktı.',
                        {
                          eger: (S) => S.bayrak.haberci === 'nimet',
                          ise: [['sai', 'Nimet yirmi yıldır bu evin ekmeğini yer. Bir ay mutfakta çalışsın; sonra yerine döner. Sen de bir ay yemeğini odanda yersin.', 'ciddi'], ['mehves', 'Baş üstüne efendim.'], ['ic', 'Bir ay. Onu kovmadı. Ben konuşmasam belki daha ağırını verecekti.']],
                          degilse: [{
                            eger: (S) => S.bayrak.haberci === 'sefik',
                            ise: [['sai', 'Çocuğun kabahati yok; gönderenin var. Şefik bir ay Madam\'ın odasında yatsın. Sen de bir ay kalem kâğıt görmeyeceksin.', 'ciddi'], ['sefik', 'Bir ay sonra dönerim, değil mi babacığım?', 'aglamakli'], ['ic', 'Bir ay. Ara kapının öbür yanında olacak. Sesini duyarım.']],
                            degilse: [['sai', 'Madam yabancıdır; âdetimizi bilmez. Bir ay akşamları evine dönsün, yatıya kalmasın. Sen de bir ay kalem kâğıt görmeyeceksin.', 'ciddi'], ['josephine', 'Anlıyorum efendim. Sabahları yine buradayım.'], ['ic', 'Bir ay. Kovmadı. Perihan Hanım\'ın yüzü, istediğini alamamış bir yüz.']],
                          }],
                        },
                        { bayrak: { bedel: 'hafif' } }, { etki: { calibe_suphe: 1 } },
                      ],
                    },
                    {
                      m: 'Susmak. Konuşursam babamın gözünde ikimiz birden yanarız.', etki: { baba_guven: 1 }, bayrak: { ustlendi: false },
                      iz: 'Sustun. Bedeli habercin ödedi.',
                      adimlar: [
                        'Sustum. Önüme baktım.',
                        {
                          eger: (S) => S.bayrak.haberci === 'nimet',
                          ise: [['sai', 'Nimet bundan böyle mutfakta çalışsın. Yukarı kata çıkmasın.', 'ciddi'], ['mehves', 'Baş üstüne efendim.'], 'Nimet bana bakmadı. Tepsiyi alıp çıktı.', { etki: { mehves: -2 } }, ['ic', 'Saçımı on yedi yıldır o örer. Yarın sabah kim örecek?', 'mahzun']],
                          degilse: [{
                            eger: (S) => S.bayrak.haberci === 'sefik',
                            ise: [['sai', 'Şefik\'in yatağı bundan böyle annesinin odasının yanındaki odaya alınsın. Gece kimin gözü önünde olduğunu bileyim.', 'ciddi'], ['sefik', 'Ablamın odasında yatamayacak mıyım?', 'aglamakli'], { etki: { sefik: -2 } }, ['ic', 'Onu benden ayırdılar. Bir kat, bir sofa. Perihan Hanım\'ın kapısının dibine.', 'mahzun']],
                            degilse: [['sai', 'Madam bundan böyle akşamları evine dönsün. Yatılı kalmasın; ara kapı da kilitlensin.', 'ciddi'], ['josephine', 'Nasıl isterseniz efendim.'], { etki: { josephine: -2 } }, ['ic', 'Ara kapı. Bu evde gece yarısı çalabileceğim tek kapıydı.', 'mahzun']],
                          }],
                        },
                        { bayrak: { bedel: 'agir' } },
                      ],
                    },
                  ],
                }],
              },
              { bayrak: { sofra_sonuc: 'ertelendi' } },
            ],
            degilse: [
              // Haber gecikti: Feride tek anlatıya karşı tek başına
              'Kapıya baktım. Kimse vurmadı. Duvarın öbür yanında kimse bir şey bilmiyor.',
              {
                soru: 'Babam bekliyor. Perihan Hanım gülümsüyor. Kimse gelmeyecek.',
                secim: [
                  {
                    m: '"Doğrudur efendim. Tek satırdı. Saklamam suçsa suçum budur."', etki: { vakar: 2 }, bayrak: { sofra_cevap: 'durust' },
                    iz: 'Doğruyu söyledin; karar babana kaldı.',
                    adimlar: [
                      ['f', 'Doğrudur efendim. Nişanlım bana tek satır yazdı. Ben istemedim; ama geri de çevirmedim. Suçum varsa budur.'],
                      ['sai', 'Tek satır da olsa, benden gizli.', 'ciddi'],
                      ['f', 'Sizden gizlemek istemedim efendim. Ama bu evde kâğıtlar sizin elinize varmadan başka ellere varıyor.'],
                      'Babam Perihan Hanım\'a baktı. Kısa bir bakış. Ama baktı.',
                      { etki: { baba_guven: 1, calibe_suphe: 1 } },
                    ],
                  },
                  {
                    m: '"Bu evde kâğıtları kimin dolaştırdığını siz bilirsiniz efendim."', kosul: (S) => !!S.bayrak.baba_biliyor || !!S.bayrak.ifsa || S.bayrak.baba_haber === 'inandi',
                    etki: { isyan: 1, calibe_suphe: 2 }, bayrak: { sofra_cevap: 'delil' },
                    iz: 'Babana nişan günündeki kâğıdı hatırlattın.',
                    adimlar: [
                      ['f', 'Nişan günü de bir kâğıt vardı efendim. Onu siz okudunuz; yazısını siz tanıdınız. Bu evde kâğıtları kimin dolaştırdığını siz bilirsiniz.', 'ofkeli'],
                      'Babam bir an sustu. Sonra Perihan Hanım\'a döndü.',
                      ['sai', 'Hanım. İki kâğıt oldu. İkisi de senin elinden geçti.', 'ciddi'],
                      ['calibe', 'Ben bu evin şerefini korurum efendi. Başka derdim yok.', 'soguk'],
                      { etki: { baba_guven: 3 } },
                    ],
                  },
                  {
                    m: 'Susmak.', etki: { baba_guven: -3 }, bayrak: { sofra_cevap: 'sustu' },
                    iz: 'Sustun. Sofrada tek anlatı kaldı.',
                    adimlar: [
                      'Dilim dönmedi. Tabağıma baktım.',
                      ['calibe', 'Görüyorsunuz efendi. Diyecek sözü olan susmaz.', 'gulumser'],
                    ],
                  },
                ],
              },
              ['sai', 'Düğüne kadar bu evde senin elinden kâğıt kalem geçmeyecek Feride. Divitini Nimet alsın. Akşam ezanından sonra bahçe kapısının anahtarı da annende duracak.', 'ciddi'],
              ['ic', 'Koynumdaki kâğıt hâlâ koynumda. Yazdım; götüremedim. Babam yalnız onun anlattığını duydu.', 'mahzun'],
              { bayrak: { bedel: 'kendi', sofra_sonuc: 'yarim' } },
            ],
          },
          { gizle: 'mehves' }, { gizle: 'sefik' }, { gizle: 'josephine' },
          { goster: ['calibe', 'gulumser'] },
          'Perihan Hanım çayını bitirdi. Kalkarken eteğini düzeltti; yüzünde yarım kalmış bir işin sabrı vardı.',
          ['ic', 'Bu sabah bitmedi. Yalnız ertelendi. O da biliyor, ben de.'],
          { temizle: true },
          { kart: 'Kış başı.\nDüğüne yedi ay.' },
          {
            eger: (S) => S.bayrak.sofra_sonuc === 'ertelendi',
            ise: ['Münevver Hanım\'ın kahvesinde babam az konuştu, çok dinledi. Dönüşte bana yalnız "Düğüne kadar sabır" dedi; kâğıdı bir daha anmadı.'],
            degilse: ['Münevver Hanım olanı üç gün sonra, başkasından duydu. Geldi; babamla kapalı kapı ardında konuştu. Divitim geri verilmedi, ama babam o günden sonra sofrada bana daha uzun baktı.'],
          },
          {
            eger: (S) => S.bayrak.bedel === 'agir' && S.bayrak.haberci === 'nimet',
            ise: [['ic', 'Saçımı artık kendim örüyorum. Nimet\'i yalnız mutfak kapısından görüyorum; başını kaldırmıyor.', 'mahzun']],
            degilse: [{
              eger: (S) => S.bayrak.bedel === 'agir' && S.bayrak.haberci === 'sefik',
              ise: [['ic', 'Şefik\'in yatağı boş. Geceleri karşı duvara bakıyorum; orada bir nefes eksik.', 'mahzun']],
              degilse: [{
                eger: (S) => S.bayrak.bedel === 'agir' && S.bayrak.haberci === 'madam',
                ise: [['ic', 'Ara kapı kilitli. Madam sabah gelip akşam gidiyor; giderken her seferinde dönüp pencereme bakıyor.', 'mahzun']],
                degilse: [],
              }],
            }],
          },
          'Leyla bir aydır yine gelmedi. Gönderdiğim iki habere cevap yok.',
          ['ic', 'Leyla susmaz. Susuyorsa bir şey var.'],
          ['ic', 'Babamdan izin aldım. Nimet sofada feracemi hazırlamış.'],
          { gorev: 8 },
        ],
      },

      /* ------------------------------------------------------------------
         S8: Leyla'ların konağına gidiş
         ------------------------------------------------------------------ */
      {
        id: 'b3_yola', mekan: 'konak_sofa', kisi: 'mehves', kosul: (S) => S.gorev === 8,
        sahne: ['mehves'],
        adimlar: [
          ['mehves', 'Araba kapıda hanımcığım. Feraceni giy, yaşmağını ben iğneleyeyim.'],
          { kiyafet: 'ferace', kilit: 'Sokağa çıkıyorsun: su yeşili ferace, ince beyaz yaşmak.' },
          'Nimet yaşmağımın iğnelerini birer birer taktı. Elleri her zamankinden yavaştı.',
          ['mehves', 'Dün Leyla Hanım\'ların arabacısını çarşıda gördüm. Selam verdi, başka söz etmedi. Yüzü ekşiydi.'],
          ['ic', 'Bir konağın arabacısı bile o konağın hâlini taşır.'],
          { temizle: true },
          { kart: 'Leyla\'ların konağı.' },
          { faz: 'B', mekanaGit: 'fevkiye_konak' },
          { gorev: 9 },
        ],
      },
      {
        id: 'b3_kapi', mekan: 'fevkiye_konak', tetik: 'giris', kosul: (S) => S.gorev === 9,
        sahne: ['hizmetci', 'mehves'],
        adimlar: [
          'Kapıyı açan hizmetçinin gözleri kıpkırmızıydı. Arkasındakinin de.',
          'Feracemi, yaşmağımı aldılar. Kimse gülmedi. Kimse "hoş geldiniz" demedi.',
          kiyafetEkle('ziyaret'),
          { kiyafet: 'ziyaret', kilit: 'Feraceni hizmetçiler aldı. Altında misafirlik için buz mavisi ipeklin var.' },
          ['f', 'Leyla nerede? Odasına çıkayım.'],
          ['hizmetci', 'Küçük hanım yukarıda efendim. Ama hanımefendi sizi önce kendi odasına istiyor.'],
          ['ic', 'Leyla\'nın odasına değil. Annesinin odasına. Bu evde ilk kez.'],
          { gorev: 10 },
        ],
      },
      {
        id: 'b3_anne', mekan: 'fevkiye_anne_oda', tetik: 'giris', kosul: (S) => S.gorev === 10,
        sahne: ['fevkiye_annesi', 'hizmetci'],
        adimlar: [
          'Kapısı perdeli bir oda. Hanımefendi minderde, başını bir örtüyle sıkı sıkı bağlamış. Gözleri şiş.',
          'Bir hizmetçi arkasına geçmiş, omuzlarını ovuyor. Öbürünün elinde bir bardak su, bir şişe limon kolonyası.',
          ['fevkiye_annesi', 'Gel kızım, gel. Otur yanıma. Senin gibi bir arkadaşı vardı da yine bu başıma geldi.'],
          {
            eger: (S) => S.bayrak.fevkiye_uyari === 'anne',
            ise: [['fevkiye_annesi', 'Sen bana haber yollamıştın. Gözümü kapısından ayırmadım. Yine de göremedim. Ben kapıyı beklerken o pencereyi açmış.']],
            degilse: [],
          },
          ['f', 'Ne oldu efendim? Leyla hasta mı?'],
          ['fevkiye_annesi', 'Hasta olsa dua ederdim. Dinle.'],
          'Anlattı. Kızına uygun bir talip bulunmuş; temiz bir aile, efendinin eski dostu. Hanımları dün görücü gelmiş.',
          ['fevkiye_annesi', 'Leyla "Kadınların yanına çıkmam" dedi. Çıkmadı. Kapısını kilitledi. Sonra yüzüme karşı başkasını sevdiğini söyledi.'],
          ['fevkiye_annesi', 'Kimi, biliyor musun? Sizin evdeki o deli oğlanı. Nabi\'yi.'],
          'Sesim çıkmadı.',
          ['fevkiye_annesi', 'Odacının kızı aracılık etmiş. Mektuplar onun elinden gelmiş, onun elinden gitmiş.'],
          {
            eger: (S) => !!S.bayrak.odaci_kizi,
            ise: [['ic', 'Odacının kızı. Hatice\'nin ahbabı. Aşçı kadın söylemişti.']],
            degilse: [],
          },
          ['fevkiye_annesi', 'Dolabının kilidini kırdırdım. Bir deste mektup. "Beni sevmezsen yaşamam" diye yazmış. Kızımı ölümle korkutup kandırmış.'],
          ['fevkiye_annesi', 'Bir de resimleri. Yakası bağrı açık, sırıtarak çekilmiş resimler. Utanmadan.'],
          ['fevkiye_annesi', 'Hepsini onun gözü önünde mangala attım, yaktım. Babası mosmor kesildi; ağzını açamadı.'],
          'Leyla o gün bayılmış. Ayılınca yine o adı söylemiş.',
          ['fevkiye_annesi', 'Sakın üvey annene bir şey söyleme evladım. Bu söz o konağa varırsa kızımın adı sokaklara düşer.'],
          ['f', 'Söylemem efendim. Size söz.'],
          ['fevkiye_annesi', 'Yukarı çık. Belki seni dinler. Bizi dinlemiyor.'],
          { gorev: 11 },
        ],
      },
      {
        id: 'b3_fevkiye_oda', mekan: 'fevkiye_oda', tetik: 'giris', kosul: (S) => S.gorev === 11,
        sahne: ['fevkiye'],
        adimlar: [
          'Leyla yatağının kenarında oturuyordu. Saçları taranmamış, yüzü gözü şiş.',
          'Beni görünce kalktı, boynuma sarıldı. Ağladı. Ben de ağladım.',
          {
            eger: (S) => S.bayrak.fevkiye_sohbet === 'dogrudan',
            ise: [['fevkiye', 'Sen o gün söylemiştin. Dinlemedim. Yine dinlemeyeceğim.']],
            degilse: [{
              eger: (S) => S.bayrak.fevkiye_sohbet === 'dolayli',
              ise: [['fevkiye', 'Bana Ernestine\'i anlatmıştın. Affet beni Feridecim, o gün seninle alay ettim. Ama ben Ernestine değilim.']],
              degilse: [['fevkiye', 'Kendini koru demiştin. Korumadım. Korunmak istemedim.']],
            }],
          },
          {
            eger: (S) => !!S.bayrak.fevkiye_bildi,
            ise: [
              ['fevkiye', 'Senin de bir kâğıdın vardı. Seninkini de önüne koydular mı? Yaktılar mı?'],
              ['f', 'Koydular. Ben hâlâ ayaktayım Leyla. Sen de kalkacaksın.'],
              ['ic', 'Benimki tek satırdı. Onunki bir deste. Ama ikimizin kâğıdını da başkası okudu.'],
            ],
            degilse: [],
          },
          ['f', 'Leyla, dinle beni. Evlilikte güzellik ikinci, üçüncü aranacak şeydir. Önce ahlakına, insanlığına bakılır.'],
          ['fevkiye', 'Ama o beni seviyor! Yaşamam diyor!'],
          ['f', 'Seven, sevdiğini ölümle korkutmaz kardeşim. Öyle yazan, karşısındakini bağlamak için yazar.'],
          ['fevkiye', 'Hepiniz aynı şeyi söylüyorsunuz. Annem, babam, sen.'],
          ['fevkiye', 'Benim ağlamamak elimde değil. Ama beni ağlatmamak sizin elinizde.'],
          ['ic', 'Sizin. Annesi, babası, ben. Hepimiz bir kefede; karşımızda yakılmış bir deste mektup. Yanmış kâğıt daha ağır basıyor.'],
          'Ne söylediysem fayda etmedi. Vazgeçmedi.',
          { temizle: true },
          { kart: 'Dönüşte, arabada.' },
          { kiyafet: 'ferace', kilit: 'Sokaktasın: ferace ve yaşmak.' },
          { goster: ['mehves'] },
          'Arabanın penceresinden konağa baktım. Bütün kafesler kapalıydı.',
          ['mehves', 'Ne oldu hanımcığım? Yüzün kâğıt gibi.'],
          ['ic', 'Perihan Hanım abla, Nabi Bey ondan üç yaş küçük kardeşi. Abla bizim evi altüst etti; kardeş şimdi de bu evi.'],
          { temizle: true },
          { faz: 'A', mekanaGit: 'konak_sofa' },
          { kiyafet: 'ev', kilit: KILIT_EV },
          { gorev: 12 },
        ],
      },

      /* ------------------------------------------------------------------
         S9: Sır (B3-Ç6); S10: kanca; bölüm sonu
         ------------------------------------------------------------------ */
      {
        id: 'b3_sir', mekan: 'konak_sofa', tetik: 'giris', kosul: (S) => S.gorev === 12,
        sahne: [{ id: 'calibe', ifade: 'gulumser' }],
        adimlar: [
          'Sofada Perihan Hanım beni bekliyordu. Elinde bir nakış; iğnesi havada.',
          ['calibe', 'Geldin mi kızım? Üşümüşsün. Gel, otur yanıma.', 'gulumser'],
          'Yanına oturttu. Eli yine sıcaktı.',
          {
            soru: 'Perihan Hanım gülümsüyor: "Leyla Hanım\'ın konağında ne var ne yok kızım?"',
            secim: [
              {
                m: '"Leyla biraz rahatsızdı efendim." Başka bir şey söylememek.', etki: { fevkiye: 2, itibar: 2, calibe_suphe: 1, vakar: 1, mehves: 1 }, bayrak: { fevkiye_sir: 'sakladi' },
                adimlar: [
                  ['f', 'Leyla biraz rahatsızdı efendim. Geçmiş olsun dedim, döndüm.'],
                  'Perihan Hanım\'ın gülümsemesi incecik bir çizgi oldu.',
                  ['calibe', 'Rahatsız. Vah vah. Geçer inşallah.', 'gulumser'],
                  'Akşama doğru Hatice\'yi mutfakta, Nimet\'in yanında gördüm. Bir şeyler soruyordu. Nimet çamaşır katlıyor, başını kaldırmıyordu.',
                  ['ic', 'Nimet benim gibi susar. Belki benden iyi.'],
                ],
              },
              // (oyun için ek)
              {
                m: '"Misafirlikte konuşulan misafirlikte kalır efendim."', etki: { fevkiye: 2, calibe_suphe: 2, isyan: 1 }, bayrak: { fevkiye_sir: 'sert' },
                adimlar: [
                  ['f', 'Misafirlikte konuşulan misafirlikte kalır efendim. Annem öyle öğretmiş.'],
                  'Annemin adı iğnesini havada durdurdu.',
                  ['calibe', 'Annen. Elbette. Rahmetli pek terbiyeliydi.', 'soguk'],
                  ['ic', 'Kapıyı kapattım. Ama kapıyı kapattığımı da gördü.'],
                ],
              },
              {
                m: '"Görücüye çıkmamış..." Söz ağzımdan kaçtı.', etki: { fevkiye: -2, itibar: -3, dedikodu: 1, calibe_suphe: -1 }, bayrak: { fevkiye_sir: 'kacirdi' },
                adimlar: [
                  ['f', 'Görücüye çıkmamış... yani, rahatsızmış efendim.'],
                  'Geç kaldım. Perihan Hanım sözü havada yakaladı.',
                  ['calibe', 'Görücü mü gelmiş? Çıkmamış mı? Vay vay. Demek gönlü başka yerde.', 'gulumser'],
                  'Gerisini benim yerime kendisi tamamladı. Başımı sallamadım; sallamama gerek kalmadı.',
                  ['ic', 'Söz kuş gibidir. Ağızdan uçtu mu bir daha kafese girmez.'],
                  'Akşam Nabi Bey\'i odasına çağırttı. Kapı uzun süre kapalı kaldı.',
                ],
              },
            ],
          },
          { temizle: true },

          // Kanca (S10)
          { kart: 'Kış geçti. Bahar geldi.\nDüğüne iki ay.' },
          { mekan: 'fazila_oda' },
          { goster: ['resim'] }, { goster: ['mehves'] }, { goster: ['sefik'] },
          'Odamın köşesinde sandıklar dizili. Çeyizim hazır; Münevver Hanım\'ın konağına gitmeyi bekliyor.',
          {
            eger: (S) => S.bayrak.bedel === 'agir' && S.bayrak.haberci === 'nimet',
            ise: ['Nimet aylar sonra ilk kez yukarı çıktı. Babam "Sandıkları ondan iyi bilen yok" demiş. Eşikte bir an durdu; sonra hiçbir şey olmamış gibi içeri girdi.'],
            degilse: [],
          },
          ['mehves', 'Münevver Hanımefendi gelin odasını hazırlatıyormuş. Perdeleri kendi eliyle seçmiş.'],
          ['sefik', 'Abla! Bana da selamlıkta bir oda döşetmiş! Penceresi bahçeye bakıyormuş!'],
          { etki: { munevver: 1 } },
          ['mehves', 'Bu yaz düğün var diye sayfiyeye uzun çıkılmayacak. Efendi yalnız bir aylığına Büyükada\'da döşeli bir ev tutmuş.'],
          ['sefik', 'Ada! Vapura bineceğiz abla!'],
          {
            eger: (S) => S.bayrak.topuk === 'vurdu',
            ise: [['ic', 'Nabi Bey bütün kış fesini kaşına indirip gezdi. İz soldu. Ama fes inik kaldı.']],
            degilse: [['ic', 'Nabi Bey bütün kış bana selam vermedi. Ben de vermedim.']],
          },
          ['ic', 'Çekmecemde bir gerdanlık, bir resim. Defterimde bir topuk izi.'],
          ['ic', 'İki ay sonra bu evden çıkıyorum. İki ay. Bir ömür değil artık; bir mevsim.'],

          // Söylenti kartı (B4 söylentisinin habercisi)
          {
            eger: (S) => S.bayrak.fevkiye_sir === 'kacirdi',
            ise: [{ kart: 'Konak konak dolaşan söz:', alt: '"Zengin konağın küçük hanımı görücüye çıkmamış. Dolabını kırdırmışlar, içinden neler çıkmış neler."' }],
            degilse: [{ kart: 'Konak konak dolaşan söz:', alt: '"O zengin konaktan bu kış hiç ses çıkmadı. Kapıları kapalı, kafesleri kapalı."' }],
          },
          {
            eger: (S) => S.bayrak.topuk === 'vurdu',
            ise: [{ kart: 'Hizmetçiler arasında bir fısıltı:', alt: '"Hanımefendinin kardeşi bütün kış fesini kaşına indirip gezdi. Kapıya çarpmış diyorlar."' }],
            degilse: [],
          },
          // (romandan öne çekildi) Büyükada gecesinin somut hazırlığı: kanca
          { temizle: true },
          { goster: ['calibe', 'sinsi'] }, { goster: ['suha'] },
          ['pa', 'Aynı akşam Perihan Hanım\'ın sarı odasında iki kişi var. Kapı kapalı; Hatice eşikte.'],
          ['calibe', 'Harf tutmadı. Kâğıt yarım tuttu. Konakta olmuyor Süha; o kadının gözü duvarın öbür yanından bile görüyor.', 'sinsi'],
          ['suha', 'Ada\'da duvar yok. Komşu konak yok. Bir ay.'],
          ['pa', 'Süha Bey ceketinin iç cebine küçük, koyu renkli bir şişe yerleştiriyor. Bu sefer üstünde bir eczane kâğıdı var.'],
          ['calibe', 'Hatice\'ye söz verdim: bu iş olursa Nabi onundur. O da gözünü kırpmaz.', 'gulumser'],
          ['pa', 'Perihan Hanım\'ın aklında tek bir cümle dönüyor: Ada tutacak.'],
          { temizle: true },
          { cizim: 'topuk' },
          { bolumSonu: true },
        ],
      },

      /* ==================================================================
         İsteğe bağlı karşılaşmalar (oyun için ek)
         ================================================================== */

      // Madam'la roman üzerine
      {
        id: 'b3_madam', yan: true, mekan: 'josephine_oda', kisi: 'josephine', kosul: (S) => S.gorev === 1,
        sahne: ['josephine'],
        adimlar: [
          'Madam masasında bir mektup yazıyordu. Beni görünce kalemini bıraktı.',
          ['josephine', 'Leyla Hanım\'ı merdivende gördüm. Gözleri... nasıl dersiniz... uzakta.'],
          ['f', 'Bir roman okumuş Madam. Eugène Sue.'],
          ['josephine', 'Ah, Sue! Paris\'te bütün genç kızlar onu okur, sonra ağlar. Roman kötü değildir Feride Hanım. Ama roman bir penceredir; kapı değil.'],
          ['ic', 'Pencere, kapı değil. Leyla pencereden çıkmaya hazırlanıyor gibi.'],
          {
            soru: 'Madam cevabımı bekliyor.',
            secim: [
              { m: '"Leyla için korkuyorum Madam."', etki: { josephine: 2 },
                adimlar: [['f', 'Leyla için korkuyorum Madam.'], ['josephine', 'Korkunuzu söylediniz. Bu iyi. Söylenen korku küçülür; saklanan büyür.']] },
              { m: '"Bir şey yok Madam. Romanlar işte."', etki: { vakar: 1 },
                adimlar: [['f', 'Bir şey yok Madam. Romanlar işte.'], 'Madam başını salladı. İnanmadı; ama sormadı.', ['ic', 'Sormamayı bilen biri. Bu evde az bulunur.']] },
            ],
          },
        ],
      },

      // Mutfakta sabah haberi: odacının kızı
      {
        id: 'b3_mutfak', yan: true, mekan: 'mutfak', kisi: 'asci', kosul: (S) => S.gorev === 6,
        sahne: ['asci'],
        adimlar: [
          'Mutfakta sabah çorbası kaynıyor. Aşçı kadın kepçeyi bırakıp bana döndü.',
          {
            eger: (S) => S.bayrak.topuk === 'vurdu',
            ise: [
              ['asci', 'Küçük hanım, Nabi Bey sabahın köründe mutfağa indi. Buz istedi, sirke istedi. Fesi kaşına kadar inik. "Kapıya çarptım" diyor.'],
              ['asci', 'Kapı hiç böyle iz bırakır mı, bilmem.'],
              ['ic', 'Bilmesin. Kimse bilmesin.'],
            ],
            degilse: [['asci', 'Nabi Bey sabahın köründe inmiş, acı kahve istemiş. Gözleri kan çanağı. Dün gece nerede eğlendiyse.']],
          },
          ['asci', 'Bir de... Leyla Hanım\'ların konağının odacısının kızı var ya, bizim Hatice\'yle ahbaplık ediyormuş. Pazar günleri çarşıda buluşuyorlarmış.'],
          ['ic', 'Odacının kızı. Hatice. Bu evin kapı aralıkları başka konaklara da açılıyor.'],
          { bayrak: { odaci_kizi: true } },
          { delil: 'Mutfaktan: Leyla\'ların odacısının kızı Hatice\'yle ahbap. Pazar günleri çarşıda buluşuyorlar.' },
        ],
      },

      // Perihan'ın kapısında Hatice: çamurlu terlik
      {
        id: 'b3_reftar', yan: true, mekan: 'calibe_oda', kisi: 'reftar', kosul: (S) => S.gorev === 6 || S.gorev === 7,
        sahne: ['reftar'],
        adimlar: [
          'Perihan Hanım\'ın kapısında Hatice, hanımının pabuçlarını fırçalıyor.',
          'Kendi ayağında sivri burunlu, eski bir terlik. Burnu çamurlu.',
          ['reftar', 'Sabahınız hayrolsun küçük hanım. Dün gece pek erken çekildiniz. Ay da pek güzeldi.'],
          ['f', 'Ayı sen mi seyrettin Hatice?'],
          ['reftar', 'Ben mi? Ben hanımefendinin ayaklarını ovuyordum küçük hanım. Her gece olduğu gibi.'],
          {
            eger: (S) => !!S.bayrak.terlik_izi,
            ise: [
              ['ic', 'Sivri burunlu. Çamurlu. Çalıların dibindeki iz.'],
              { delil: 'Hatice\'nin sivri burunlu terliğinin burnu çamurlu. Bahçedeki terlik izi onun.' },
            ],
            degilse: [['ic', 'Sabahın bu saatinde terliğine çamur nereden bulaştı?']],
          },
          { bayrak: { reftar_terlik: true } },
        ],
      },

      // Sofada Hatice: şal için çıkarken
      {
        id: 'b3_reftar_sofa', yan: true, mekan: 'konak_sofa', kisi: 'reftar', kosul: (S) => S.gorev === 2,
        sahne: ['reftar'],
        adimlar: [
          'Sofa loş. Merdivenin dibinde Hatice, elinde boş bir tepsi, durmuş salonun kapısını dinliyor.',
          'Beni görünce tepsiyi göğsüne bastırdı.',
          ['reftar', 'Küçük hanım, salondan mı çıktınız? Bir emriniz mi vardı? Ben getireyim.'],
          ['f', 'Şalımı alacağım Hatice. Kendim alırım.'],
          ['reftar', 'Nasıl isterseniz. Bahçe yolundan dönün küçük hanım; sofa soğuk.'],
          ['ic', 'Bana yol gösteriyor. Hatice bu evde kimseye boşuna yol göstermez.'],
          {
            soru: 'Hatice hâlâ gülümsüyor.',
            secim: [
              { m: '"Sen kendi işine bak Hatice."', etki: { isyan: 1 },
                adimlar: [['f', 'Sen kendi işine bak Hatice.'], ['reftar', 'Baş üstüne küçük hanım. Ben hep kendi işime bakarım.'], ['ic', 'İşinin ne olduğunu söylemedi.']] },
              { m: 'Bir şey demeden merdivenden çıkmak.', etki: { vakar: 1 },
                adimlar: ['Bir şey demedim. Merdivenleri çıkarken arkamda tepsinin sesini bekledim. Ses gelmedi.', ['ic', 'Orada kaldı. Beni bekliyor.']] },
            ],
          },
        ],
      },

      // Sabah: Madam'ın sorusu
      {
        id: 'b3_madam_sabah', yan: true, mekan: 'josephine_oda', kisi: 'josephine', kosul: (S) => S.gorev === 7,
        sahne: ['josephine'],
        adimlar: [
          'Madam pencerenin önünde saçını topluyordu. Aynadan bana baktı.',
          ['josephine', 'Gece şamdan yandı. Ara kapının altından ışığı gördüm. Uyuyamadınız.'],
          ['f', 'Uyudum Madam. Sabaha karşı.'],
          ['josephine', 'Sabaha karşı uyumak, uyumak değildir. Bizim orada derler ki gece düşünülen şeyler sabah yarı boyuna iner.'],
          {
            soru: 'Madam\'a dün geceyi anlatmalı mı?',
            secim: [
              { m: 'Bahçede olanı kısaca anlatmak.', etki: { josephine: 2 },
                adimlar: [
                  'Kısaca anlattım. Sözleri tekrar etmedim; yalnız yolumu kestiğini söyledim.',
                  ['josephine', 'Mon Dieu. Bir daha akşam bahçeye tek çıkmayın. Ben sizinle gelirim; şalınızı ben taşırım.'],
                  ['ic', 'Şalımı taşıyacak biri. Bu evde ilk kez biri benimle yol yürümeyi öneriyor.'],
                ] },
              { m: '"Bir şey yok Madam. Kötü bir rüya."', etki: { vakar: 1 },
                adimlar: [
                  ['f', 'Bir şey yok Madam. Kötü bir rüya.'],
                  ['josephine', 'Rüyalar da anlatılır Feride Hanım. Ne zaman isterseniz.'],
                ] },
            ],
          },
        ],
      },

      // Leyla'ların taşlığında Nimet
      {
        id: 'b3_taslik_mehves', yan: true, mekan: 'fevkiye_konak', kisi: 'mehves', kosul: (S) => S.gorev === 10,
        sahne: ['mehves', 'hizmetci'],
        adimlar: [
          'Nimet taşlıkta, sandalyenin kenarına ilişmiş. Yanında konağın yaşlı hizmetçilerinden biri fısıl fısıl bir şey anlatıyor.',
          'Beni görünce ikisi de sustu. Nimet kalkıp yanıma geldi.',
          ['mehves', 'Hanımcığım, odacının kızını dün akşam kapı dışarı etmişler. Bohçasını koltuğuna verip.'],
          ['mehves', 'Kız ağlaya ağlaya gitmiş. Nereye gittiğini bilen yok. Bir mektup taşıdı diye bir ekmek kapısı kapandı.'],
          ['ic', 'Mektubu taşıyan el kesildi. Yazan el hâlâ bizim konakta, fesini düzeltiyor.'],
          ['f', 'Bir şey sorma Nimet. Kimseye bir şey söyleme.'],
          ['mehves', 'Ben görmem, duymam hanımcığım. Hep öyle yaptım.'],
          { etki: { mehves: 1 } },
        ],
      },
    ],

    /* Bölüm sonu paneli: 4. bölümün (Ada Gecesi) vaadi */
    merak: 'Düğüne iki ay var. Bir ay Büyükada\'da geçecek; orada duvarın öbür yanında Münevver Hanım yok. Süha Bey\'in cebinde bir şişe, Hatice\'ye verilmiş bir söz var. Ada\'da bana kim haber götürecek?',

    /* Bölüm sonu notu: Feride'nin günlüğü; o kışın kararlarını onun sesiyle toplar */
    sonNotu: function (S) {
      const b = S.bayrak, p = [];
      const kim = { nimet: 'Nimet', sefik: 'Şefik', madam: 'Madam' }[b.haberci];
      if (b.haber === 'vardi' && b.haberci === 'kendi') p.push('Münevver Hanım\'a iki satırı kendi elimle götürdüm. Sabah sofrasında kalfası kapıyı vurdu; babam kararını vermedi. Bahçe kapısı artık bana kilitli.');
      else if (b.haber === 'vardi' && b.bedel === 'hafif') p.push('İki satırımı ' + kim + ' götürdü; Münevver Hanım sabah araya girdi. Perihan Hanım haberciyi sorunca "Ben gönderdim" dedim. Cezayı paylaştık: bir ay.');
      else if (b.haber === 'vardi') p.push('İki satırımı ' + kim + ' götürdü; Münevver Hanım sabah araya girdi. Perihan Hanım haberciyi sordu. Sustum. Bedeli o ödedi.');
      else p.push('İki satır yazdım, götüremedim. Sabah sofrasında babam yalnız Perihan Hanım\'ın anlattığını duydu. Divitimi aldılar.');
      if (b.topuk === 'vurdu') p.push('Bir topuk, bir alın, bir fes. O gece bahçede Nabi Bey\'in yolunu ayakkabımla kestim; bütün kış fesini kaşına indirip gezdi.');
      else if (b.topuk === 'sikayet') p.push('Nabi Bey\'in sözlerini sabah babama anlattım. Babam beni savundu; Perihan Hanım onu. Terazi yine eşit kaldı.');
      else p.push('Nabi Bey\'in sözlerini yuttum. Hâlâ boğazımda duruyorlar.');
      if (b.nabiz === 'cekildi') p.push('Süha Bey bileğimi tuttuğunda elimi çektim. Ayağa kalktım. O anı unutmuyorum; o da unutmuyor.');
      else if (b.nabiz === 'dayi') p.push('Süha Bey\'e "dayı bey" dedim; yüzüne değil, araya bir duvar ördüm.');
      else p.push('Süha Bey nabzımı saydı, ben sustum. Susmak her zaman korumuyor.');
      if (b.fevkiye_sir === 'kacirdi') p.push('Leyla\'nın sırrını bir kelimeyle kaçırdım. Perihan Hanım onu bütün kış besledi. Kendimi affetmiyorum.');
      else if (b.fevkiye_sir === 'sert') p.push('Leyla\'nın sırrını Perihan Hanım\'a vermedim; sesimi de yükselttim. Leyla bunu bilmeyecek, ama ben biliyorum.');
      else if (b.fevkiye_sir === 'sakladi') p.push('Leyla\'nın sırrı bende kaldı. "Biraz rahatsızdı" dedim, o kadar.');
      p.push(S.gonul.suha > S.gonul.mukaddem
        ? 'Sandıklarım hazır. Ama aklıma salondaki o kapanan kapı geliyor; bileğimde hâlâ bir el varmış gibi.'
        : 'İki ay sonra bu evden çıkıyorum. Çekmecemde bir gerdanlık, bir resim; defterimde bir topuk izi. Hepsi benim.');
      return p.join(' ');
    },
  };
})();

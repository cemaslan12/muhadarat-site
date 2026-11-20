/* =========================================================================
   BEŞİNCİ BÖLÜM: İKİNCİ ÖKSÜZLÜK
   Biçim bolum1.js'teki gibidir.
   Roman: s. 134-147 (Münevver'in kapıdan çevrilmesi, gizli nikâh teklifi, Leyla'nın düğünü,
   Süha'nın teklifi). Tacir ailesinin yelpazesi oyun için ektir.
   BÖLÜMÜN TEK SORUSU: "Nişanım bozuldu. Perihan Hanım bana koca arıyor; kim önce gelirse ona verecek.
   Önümde üç kapı açılıyor: Münevver Hanım'ın gizli nikâhı, tacirzadenin yelpazesi, Süha Bey'in teklifi.
   Hangisinden geçersem bir şey kaybedeceğim; hiçbirinden geçmezsem bu evde kalacağım."
   Her kapının bedeli görünür; hiçbiri "doğru cevap" değildir. Münevver her dalda Feride'nin yanındadır.
   Konan bayraklar: munevver_veda, inanmadim, gizli_nikah (ret/ertelendi/delil), nimet_tanik,
   fevkiye_dugun (gitti/gitmedi), bilgi_remzi (düğüne gidilirse), remzi_hediye, suha_teklif, catlak,
   fevkiye_sustu.
   Yan olayların bayrakları: sefik_sozu_b5 (Şefik'e "evlenirsem de bırakmam" sözü; yelpaze sahnesinde
   okunur), nimet_kapida (Nimet teklif sırasında koridorda; Süha sahnesinde okunur), nimet_duydu
   (Nimet teklifi kendi kulağıyla duydu; sonraki bölümler için), baba_gordu (babam zayıfladığımı gördü,
   Süha'ya havale etti; Süha sahnesinde okunur), madalyon_b5 (acik/sakli; kanca sahnesinde okunur),
   reftar_kuskun (aşçıdan: Hatice hanımına küsmüş; sonraki bölümler için),
   munevver_dert (acti/sakladi/sefik: Leyla'nın odasında Münevver Hanım'a evdeki hâlimi nasıl
   anlattığım; aynı sahnede ve dönüş akşamında okunur), madam_adres (Madam dışarıdaki adresini
   defterime yazdı; bu sezonda kullanılmaz, ikinci sezon için açık kapı).
   Yan olaylar: b5_sefik_seker (g1 fazila_oda), b5_madam (g1 josephine_oda), b5_fevkiye_anne
   (g2 fevkiye_konak), b5_asci (g3-4 mutfak), b5_baba_bahce (g3-4 konak_bahce), b5_nimet_uyari
   (g4 konak_sofa), b5_resim (g5 fazila_oda).
   ========================================================================= */
window.BOLUMLER = window.BOLUMLER || {};

(function () {
  const aleyhte = (S) => S.v.dedikodu >= 3 || S.v.itibar < 40;
  const lehte = (S) => !aleyhte(S) && S.v.itibar >= 55 && S.v.dedikodu <= 1;
  // 3. bölümde haberci ağır bedel ödediyse (Nimet mutfakta, Şefik'in yatağı başka odada, Madam yatılı değil)
  const cezali = (S, kim) => S.bayrak.bedel === 'agir' && S.bayrak.haberci === kim;

  window.BOLUMLER[5] = {
    no: 5,
    ad: 'İkinci Öksüzlük',
    ilkFaz: 'A',
    baslangic: 'ada_sofa',

    fazlar: {
      A: { mekanlar: ['ada_sofa'], baglanti: { ada_sofa: [] } },
      B: {
        mekanlar: ['konak_sofa', 'mutfak', 'konak_bahce', 'josephine_oda', 'fazila_oda', 'buyuk_salon'],
        baglanti: {
          konak_sofa: ['fazila_oda', 'josephine_oda', 'buyuk_salon', 'mutfak', 'konak_bahce'],
          fazila_oda: ['konak_sofa'], josephine_oda: ['konak_sofa'], buyuk_salon: ['konak_sofa'],
          mutfak: ['konak_sofa', 'konak_bahce'], konak_bahce: ['konak_sofa', 'mutfak'],
        },
      },
      C: { mekanlar: ['fevkiye_konak', 'fevkiye_oda'], baglanti: { fevkiye_konak: ['fevkiye_oda'], fevkiye_oda: ['fevkiye_konak'] } },
    },

    gorevler: [
      /* 0 */ { metin: 'Kapıyı çalan Münevver Hanım. Yanına çık.', ipucu: '' },
      /* 1 */ { metin: 'Leyla\'nın konağına git. Orada seni bekleyen biri var.', ipucu: 'Nimet sofada, feracem elinde. Gitmeden evde dolaşabilirim.' },
      /* 2 */ { metin: 'Yukarı çık. Münevver Hanım Leyla\'nın odasında.', ipucu: 'Leyla odasını bize bırakmış. Annesi sofada.' },
      /* 3 */ { metin: 'Perihan Hanım koca arıyor. Sofada seni bekleyen bir kutu var.', ipucu: 'Perihan Hanım sofada.' },
      /* 4 */ { metin: 'Odana çık.', ipucu: 'Kapım aralık. İçeride biri var. Nimet sofada bana bakıyor.' },
      /* 5 */ { metin: 'Öğle yemeği. Salona in.', ipucu: 'Babam erken dönmüş.' },
    ],

    kisiler: function (S) {
      const g = S.gorev;
      if (S.faz === 'C') return { fevkiye_konak: ['fevkiye_annesi'], fevkiye_oda: g >= 2 ? ['munevver'] : [] };
      if (S.faz === 'B') return {
        konak_sofa: (g === 1 || g === 4) ? ['mehves'] : (g === 3 ? ['calibe'] : []),
        fazila_oda: g === 1 ? ['resim', 'sefik'] : ['resim'],
        josephine_oda: g === 1 ? ['josephine'] : [],
        mutfak: (g === 3 || g === 4) ? ['asci'] : [],
        konak_bahce: (g === 3 || g === 4) ? ['sai'] : [],
        buyuk_salon: [],
      };
      return { ada_sofa: [] };
    },

    sohbet: function (S, kim) {
      switch (kim) {
        case 'mehves':
          if (S.gorev === 4) return [['mehves', 'Kapın aralık hanımcığım. Ben buradayım.', 'endiseli']];
          return [['mehves', 'Feracen hazır hanımcığım. Kimseye nereye gittiğimizi söylemedim.']];
        case 'calibe': return [['calibe', 'Gel kızım, gel.', 'gulumser']];
        case 'resim': return ['Annemin resmi. İki kere öksüz kalınır mıymış anne? Kalınırmış.'];
        case 'sefik': return [['sefik', 'Abla, dönünce bana Leyla ablanın sandıklarını anlat.']];
        case 'josephine': return [['josephine', 'Gidiniz Feride Hanım. Defterler bekler; insanlar beklemez.']];
        case 'asci': return [['asci', 'Ocak yanıyor küçük hanım. Canın ne zaman isterse in.']];
        case 'sai': return ['Babam gazetesine eğilmiş. Sayfayı çevirmiyor.'];
        case 'fevkiye_annesi': return [['fevkiye_annesi', 'Yukarı çık kızım. Seni bekleyen var; ben bir şey görmedim.']];
        case 'munevver': return [['munevver', 'Gel kızım.']];
      }
      return null;
    },

    acilis: [
      { kart: 'BEŞİNCİ BÖLÜM\nİkinci Öksüzlük', alt: 'Bahar sonu.\nNişan bozulalı bir gün.' },
      { kiyafet: 'ev', kartsiz: true, kilit: 'Evdesin: gündelik kıyafetin.' },
      { arkaplan: 'kabul_gunu' },
      { goster: ['hanimlar'] },
      'Bir düğün evinin bahçesi. Dört hanım; çevreleri bu kez kalabalık.',
      ['h1', 'Nişan bozulmuş! Damat içkiye düşkünmüş.'],
      ['h2', 'Yok canım. Misafir kaldığı evde yakışıksız bir iş olmuş. Ben kesin biliyorum.'],
      {
        eger: lehte,
        ise: [['h3', 'İkisi de yalan. Komşu konaktan duydum: hepsi üvey ananın oyunuymuş. Öksüzün nişanını da üvey ana bozar.']],
        degilse: [{ eger: aleyhte, ise: [['h4', 'Ateş olmayan yerden duman çıkmaz. Kızda da bir şey vardır.']], degilse: [['h3', 'Üvey ananın oyunu diyen de var. Hangisi doğru, kim bilir?']] }],
      },
      {
        eger: (S) => S.bayrak.kiyafet_ada === 'gosterisli',
        ise: [['h1', 'Ada\'da filiz yeşili feraceyle gezmiş; yaşmağı billur gibi. Bakmayan kalmamış.']],
        degilse: [{
          eger: (S) => S.bayrak.kiyafet_ada === 'yadigar',
          ise: [['h2', 'Ada\'da anasının eski feracesiyle gezmiş. Gören rahmetliyi hatırlamış.']],
          degilse: [{ eger: (S) => S.bayrak.kiyafet_ada === 'sade', ise: [['h3', 'Ben Ada\'da gördüm: sade, usulünce giyinmişti. Öyle kızın adı çıkmaz; çıkarılır.']], degilse: [] }],
        }],
      },
      { eger: (S) => !!S.bayrak.inanmadim, ise: [['h2', 'Kız babasına "inanmıyorum" demiş. Yüzüne karşı.']], degilse: [] },
      { eger: (S) => S.bayrak.mekan_b4 === 'salon', ise: [['h1', 'Tacirzade Ada\'da o sarışın kızı görmüş, kimin kızı diye sordurmuş.']], degilse: [] },
      ['h4', 'Bozulan nişanın kırığı kızda kalır.'],
      { temizle: true }, { arkaplan: null },
      'Ada evi. Sokak kapısının çıngırağı bir daha çaldı.',
    ],

    olaylar: [
      /* ---------- Münevver kapıda (roman s. 134-137) ---------- */
      {
        id: 'b5_veda', mekan: 'ada_sofa', tetik: 'giris', kosul: (S) => S.gorev === 0,
        sahne: [{ id: 'calibe', ifade: 'gulumser' }, 'munevver'],
        adimlar: [
          'Çıngırak üçüncü kez çaldı. Kapıya kimse koşmadı; koşmamaları söylenmişti.',
          'Babam merdivenin başında durdu. Bana baktı, bir şey diyecek oldu. Demedi. Yukarıda bir odaya çekildi; kapısını kapadı.',
          ['ic', 'Babam kapı kapayan adam değildir. Bugün kapadı.'],
          'Perihan Hanım "Sen şurada bekle kızım" dedi; beni yan odaya soktu. Kapıyı aralık bıraktı. Dinlemek istemedim; duymamak elimde değildi.',
          'Münevver Hanım. Feracesini çıkarmamış; oturmaya gelmemiş. Gösterilen sedire bakmadı bile.',
          ['calibe', 'Buyurun hanımefendi, ayakta kalmayın. Bir kahvemizi içersiniz.', 'gulumser'],
          ['munevver', 'Kahve içmeye gelmedim. Sait Efendi\'yi göreceğim.'],
          ['calibe', 'Efendi evde değil hanımefendi.', 'gulumser'],
          'Babamın bastonu askıda, fesi aynanın önünde duruyor. Münevver Hanım ikisine de baktı. Bir şey demedi.',
          ['munevver', 'Öyleyse size soracağım. Oğlumun gerdanlığı dün geri geldi. Sebebini duymak isterim.'],
          'Perihan Hanım gülümseyerek Hatice\'yi gösterdi. Hatice ezberini okudu. Kelimesi kelimesine. Gözünü halının bir gülünden ayırmadı; bitince hanımına baktı, doğru okudum mu diye.',
          ['munevver', 'Benim oğlum ağzına içki koymamıştır. Misafir olduğu evde böyle bir şeye de tenezzül etmez. Bunlar hep senin oyunun Perihan Hanım. Yanına kalmaz.'],
          ['calibe', 'Kızımız oğlunuza kısmet değilmiş hanımefendi. Bundan sonra görüşmemiz de yakışık almaz.', 'soguk'],
          ['munevver', 'Ya Feride nerede?'],
          'Yan odadan çıktım. Dizlerim benim değildi. Elini öptüm. Başım önümde.',
          'Eli soğuktu. Nişan günü bu el başımı okşamıştı.',
          { eger: (S) => S.bayrak.ada_selam === 'selam' || S.bayrak.ada_selam === 'isaret', ise: [['munevver', '{i}(Kulağıma){/i} Selamın yerine vardı kızım.']], degilse: [] },
          { eger: (S) => S.bayrak.gerdanlik_cevap === 'inanmadim', ise: [['calibe', 'Dün babasına da dil uzattı hanımefendi. "İnanmıyorum" dedi.', 'sinsi']], degilse: [] },
          ['munevver', 'Feride şimdi ikinci defa öksüz kalıyor. Yalnız Feride değil, Şefik de.'],
          'Sofada kimse kıpırdamadı. Hatice eteğinin ucunu buruşturuyor. Yukarıda bir döşeme tahtası gıcırdadı: babam.',
          ['ic', 'Bir şey söylersem Perihan Hanım akşam babama taşır. Söylemezsem Münevver Hanım oğluna ne götürecek? Sustuğumu.'],
          'Münevver Hanım eğildi. Lavanta kokuyordu; annemin sandığı gibi.',
          {
            soru: 'Münevver Hanım alnımdan öptü. Perihan Hanım iki adım ötede, kuru gözle bakıyor.',
            secim: [
              {
                m: 'Elini öpmek; başka bir şey söylememek.', etki: { vakar: 2, calibe_suphe: -1 }, bayrak: { munevver_veda: 'el' },
                iz: 'Sustun; yalnız elini öptün.',
                adimlar: [
                  'Elini bir daha öptüm. Söz çıkmadı. Boğazımda bir düğüm; yutkunsam duyulacak.',
                  ['munevver', 'Kendini üzme kızım. Her şey meydana çıkacak.'],
                  'Elimi sıktı; bırakmadan önce bir kere daha sıktı.',
                  ['calibe', 'Görüyorsunuz hanımefendi; kızımız terbiyelidir. Büyüklerinin işine karışmaz.', 'gulumser'],
                  ['ic', 'Susmamı kendi hanesine yazdı.', 'mahzun'],
                ],
              },
              {
                m: 'Elini bırakmadan söylemek: "Ben inanmadım nineciğim."', etki: { munevver: 2, mukaddem: 3, calibe_suphe: 1, isyan: 1 }, bayrak: { munevver_veda: 'inanmadim', inanmadim: true },
                iz: 'Perihan Hanım\'ın önünde "inanmadım" dedin.',
                adimlar: [
                  ['f', 'Ben inanmadım nineciğim.'],
                  'Münevver Hanım\'ın gözleri doldu. Perihan Hanım\'ın gülümsemesi yüzünde dondu.',
                  ['munevver', 'Bunu oğluma götüreceğim. Başka bir şey götüremesem de.'],
                  'Hatice başını kaldırdı. Yukarıdaki tahta bir daha gıcırdadı.',
                  ['calibe', 'Çocuk işte hanımefendi. Ne dediğini bilmez.', 'soguk'],
                  ['ic', 'Biliyorum. İlk defa bu kadar iyi biliyorum.'],
                ],
              },
            ],
          },
          ['munevver', 'Şefik nerede? Onu da göreyim.'],
          { goster: ['sefik', 'aglamakli'] },
          'Şefik merdivenin altından çıktı. Orada saklanıyormuş; dizleri toz içinde.',
          ['sefik', 'Nine, gidiyor musun? Yine gelecek misin?', 'aglamakli'],
          'Münevver Hanım cevap vermedi. Diz çöktü; feracesi yere yayıldı. İkimizi birden kucakladı.',
          'Şefik\'in başı omzuma, benim başım onun omzuna geldi. Annemden sonra bizi ikimizi birden böyle tutan olmamıştı.',
          ['munevver', 'Ablanın sözünden çıkma. Dersini bırakma. Kapım ikinize de açık; bunu unutma.'],
          ['sefik', 'Unutmam.', 'aglamakli'],
          ['sefik', 'Kenan ağabeyim bana kuş kafesi yapacaktı. O da mı gelmeyecek?', 'aglamakli'],
          'Münevver Hanım\'ın kolları bir an daha sıkıldı. Cevabı bu oldu.',
          'Cebinden bir şey çıkarıp Şefik\'in avucuna kapadı. Akide şekeri. Her gelişinde getirirdi.',
          'Perihan Hanım iki adım ötede. Gözü kuru; kapıya bakıyor.',
          'Münevver Hanım kalktı. Feracesini topladı. Eşikte bir kere döndü; bana değil yukarıya, kapalı kapıya baktı. Çıktı.',
          'Kapı kapandı. Çıngırak bir süre kendi kendine sallandı.',
          ['calibe', 'Haydi çocuklar, odanıza. Misafir gitti.', 'gulumser'],
          'Şefik şekeri yemedi. Avucunda tuttu; eriyene kadar.',
          'Yukarıdaki kapı akşam yemeğine kadar açılmadı. Açıldığında babam kimsenin yüzüne bakmadı; çorbasını bitirmeden kalktı.',
          ['ic', 'Annem ölünce öksüz kaldım. Bugün bir kapı kapandı; bir daha kaldım. İkincisinde kimse ölmedi. Daha zor.', 'mahzun'],
          { temizle: true },
          { kart: 'Yaz başı.\nNişan bozulalı bir ay.' },
          ['pa', 'Yan konakta bir ay boş geçmedi. Münevver Hanım çevrildiği kapının yerine başka bir kapı arıyor.'],
          { faz: 'B', mekanaGit: 'konak_sofa' },
          'İstanbul\'a döndük. Konak aynı konak; ben yalnız yemek vakti odamdan çıkıyorum.',
          'Bahçe duvarının öbür yanındaki konağın perdeleri bir aydır inik.',
          { goster: ['mehves'] },
          ['mehves', 'Hanımcığım, Leyla Hanım\'ın annesi seni çağırtmış. "Kızım yalnız gelsin" demiş. Orada seni bekleyen biri varmış; adını söylemediler.'],
          ['ic', 'Adını söylemelerine gerek yok.'],
          ['mehves', 'Perihan Hanım izin verdi; "Biraz hava alsın" dedi. Sen hazırlan; ben sofadayım.'],
          { gizle: 'mehves' },
          ['ic', 'Çıkmadan önce Şefik\'e bir bakmalı. Odamda beni bekliyor. Madam da bir aydır defterlerimin başında.'],
          { gorev: 1 },
        ],
      },

      /* ---------- Yan: Şefik ve şeker (g1, fazila_oda). Sözü yelpaze sahnesinde geri döner. ---------- */
      {
        id: 'b5_sefik_seker', yan: true, mekan: 'fazila_oda', kisi: 'sefik', kosul: (S) => S.gorev === 1,
        sahne: [{ id: 'sefik', ifade: 'aglamakli' }, 'resim'],
        adimlar: [
          'Şefik yatağımın ucunda oturmuş. Önünde bir mendil; mendilin içinde yapış yapış bir şey.',
          { eger: (S) => cezali(S, 'sefik'), ise: ['Yatağı artık öbür odada. Gündüzleri yine bana kaçıyor.'], degilse: [] },
          ['sefik', 'Ninenin şekeri abla. Yarısını yedim, yarısını sakladım. Biterse o da bitmiş olur diye.', 'aglamakli'],
          ['sefik', 'Biz ne yaptık ki nine artık gelmiyor?'],
          {
            soru: 'Şefik cevap bekliyor. On yaşında; yalanı da doğruyu da anlar.',
            secim: [
              {
                m: '"Biz bir şey yapmadık. Büyükler küstü; küslük geçer."', etki: { sefik: 1 },
                adimlar: [
                  ['f', 'Biz bir şey yapmadık Şefik. Büyükler küstü. Küslük geçer.'],
                  ['sefik', 'Geçer mi? Sen hiç küsmezsin ki, nereden bileceksin?'],
                  'Güldüm. Bir aydır ilk kez.',
                ],
              },
              {
                m: '"Bilmiyorum. Ama ben seni bırakmam; onu biliyorum."', etki: { sefik: 2 }, bayrak: { sefik_sozu_b5: true },
                iz: 'Şefik\'e söz verdin: evlensen de onu bırakmayacaksın.',
                adimlar: [
                  ['f', 'Bilmiyorum Şefik. Ama ben seni bırakmam. Onu biliyorum.'],
                  ['sefik', 'Evlenirsen de mi?'],
                  ['f', 'Evlenirsem de.'],
                  'Şekerin kalan yarısını ikiye böldü. Büyüğünü bana verdi.',
                  ['ic', 'Söz verdim. Bu evde verdiğim sözlerin hesabını hep başkaları tutuyor.'],
                ],
              },
            ],
          },
        ],
      },

      /* ---------- Yan: Madam ve toplu iğneler (g1, josephine_oda) ---------- */
      {
        id: 'b5_madam', yan: true, mekan: 'josephine_oda', kisi: 'josephine', kosul: (S) => S.gorev === 1,
        sahne: ['josephine'],
        adimlar: [
          'Madam masasında defterlerimi düzeltiyor. Bir aydır ders yapmadık; defterler yine de açık.',
          { eger: (S) => cezali(S, 'madam'), ise: ['Çantası kapının yanında. Akşam olmadan gidecek; artık bu evde gecelemiyor.'], degilse: [] },
          ['josephine', 'Feride Hanım. Bir aydır tek satır yazmadınız. Kalem küser.'],
          ['f', 'Kalemin gönlünü sonra alırım Madam.'],
          ['josephine', 'Bizde kederli kız ya çok yer ya hiç yemez. Siz hiç yemiyorsunuz. Elbiseniz omzunuzdan kayıyor; böyle sokağa çıkılmaz.'],
          'Çekmecesinden bir toplu iğne kâğıdı çıkardı. Buz mavisi ipeklimin belini iki yerinden iğneledi. Elleri çabuk, sıcak.',
          {
            soru: 'Madam iğneyi dudaklarının arasında tutuyor. Gözü bende.',
            secim: [
              {
                m: '"Bir şiir okuyalım Madam. On dakika başka bir yerde olayım."', etki: { josephine: 2 },
                adimlar: [
                  'Lamartine\'i açtı. On dakika bir göl kıyısındaydım.',
                  ['ic', 'Sonra konak geri geldi. Ama on dakika benimdi.'],
                ],
              },
              {
                m: '"Sizi de gönderirlerse ben ne yaparım Madam?"', etki: { josephine: 1 },
                adimlar: [
                  ['f', 'Sizi de gönderirlerse ben ne yaparım Madam?'],
                  ['josephine', 'O zaman bana yazarsınız. Fransızca. Hatasız. Dersimiz mektupla sürer.'],
                  ['ic', 'Güldürmek için söyledi. Adresini de defterimin arkasına yazdı.'],
                  ['ic', 'Bu konağın dışında adını bildiğim bir kapı daha. Bugün işime yaramaz; bir gün yarayacak.'],
                  { bayrak: { madam_adres: true } },
                ],
              },
            ],
          },
        ],
      },

      {
        id: 'b5_yola', mekan: 'konak_sofa', kisi: 'mehves', kosul: (S) => S.gorev === 1,
        sahne: ['mehves'],
        adimlar: [
          { kiyafet: 'ferace', kartsiz: true, kilit: 'Sokaktasın: ferace ve yaşmak.' },
          ['mehves', 'Perihan Hanım\'a "Leyla Hanım\'ın çeyizine bakmaya" dedim. Yalan da değil; çeyiz de var.'],
          'Araba yokuştan aşağı indi. Yüzüm bir aydır ilk kez sokak görüyor; yaşmağın ardından da olsa.',
          'Nimet karşımda; elleri kucağında. Bir aydır benimle az konuşuyor, çok bakıyor.',
          ['mehves', 'Hanımcığım, orada ne derlerse desinler, acele etme. Büyük sözün dönüşü olmaz.'],
          ['f', 'Ne diyeceklerini biliyor musun Nimet?'],
          ['mehves', 'Bilmem. Ama o hanımefendi boş yere araba yormaz.'],
          'Köşede bir yemişçi, önünde ilk kirazlar. Geçen yıl bu vakit nişan elbisemin provasına gidiyordum; aynı yoldan.',
          ['ic', 'Sokak aynı sokak. Yalnız bu kez nereye gittiğimi söyleyemiyorum.'],
          { faz: 'C', mekanaGit: 'fevkiye_konak' },
          { kiyafet: 'ziyaret', kartsiz: true, kilit: 'Misafirliktesin: buz mavisi ipeklin.' },
          'Leyla\'ların konağı. Leyla kapıda boynuma sarıldı. Parmağında yeni bir yüzük.',
          ['fevkiye', 'Zayıflamışsın! Ben de zayıfladım; ama ben sevinçten.'],
          ['ic', 'Sevincini saklamayı hiç bilmedi. Bugün saklamaya çalışıyor; benim için.'],
          'Odasını bize bıraktığını söyledi.',
          {
            eger: (S) => ((S.bag && S.bag.fevkiye) || 0) >= 2 || !!S.bayrak.fevkiye_bildi,
            ise: [['fevkiye', 'Kimseye söylemem Feridecim. Nabi Bey\'e hiç söylemem. Senin kâğıdını bilen bir tek ben varım; bunu da bilirim.'], { bayrak: { fevkiye_sustu: true } }],
            degilse: [['fevkiye', 'Ne esrarlı işler! Merak etme, ağzım sıkıdır.'], ['ic', 'Güldü, geçti. Leyla\'nın ağzı sıkı değildir; nişanlısı da Nabi Bey.']],
          },
          'Annesi sofada, pencerenin önünde. Tespihini bırakmadan bana baktı; sonra yukarıyı gösterdi.',
          { gorev: 2 },
        ],
      },

      /* ---------- Yan: Leyla'nın annesi (g2, fevkiye_konak) ---------- */
      {
        id: 'b5_fevkiye_anne', yan: true, mekan: 'fevkiye_konak', kisi: 'fevkiye_annesi', kosul: (S) => S.gorev === 2,
        sahne: ['fevkiye_annesi'],
        adimlar: [
          'Leyla\'nın annesi yanındaki mindere vurdu.',
          ['fevkiye_annesi', 'Çıkmadan bir dakika otur kızım. Yukarıdaki hanım bekler; o beklemeyi bilir.'],
          {
            eger: (S) => S.bayrak.fevkiye_uyari === 'anne',
            ise: [['fevkiye_annesi', 'Sen beni vaktinde uyarmıştın. Gözümü açtım; kızımınkini açamadım. "İsterim" dedi, ağladı, yemedi. Bir ana buna kaç gün dayanır?']],
            degilse: [['fevkiye_annesi', 'Kızım "isterim" dedi, ağladı, yemedi. Bir ana buna kaç gün dayanır? Razı olduk.']],
          },
          ['fevkiye_annesi', 'Behiye sağ olsaydı bugün yukarıda o otururdu. Kapımı Münevver Hanım\'a onun hatırına açtım.'],
          {
            soru: 'Tespih yine elinde. Bana bakıyor.',
            secim: [
              {
                m: '"Leyla mutlu olsun efendim. Ben ona dua ederim."', etki: { vakar: 1 },
                adimlar: [
                  ['f', 'Leyla mutlu olsun efendim. Ben ona dua ederim.'],
                  ['fevkiye_annesi', 'Sen dua et. Ben de sandığın anahtarını belimden çıkarmayayım.'],
                ],
              },
              {
                m: '"Nabi Bey\'in gözü çeyizde efendim. Bunu bilin."', etki: { isyan: 1 },
                adimlar: [
                  ['f', 'Nabi Bey\'in gözü çeyizde efendim. Bunu bilin.'],
                  ['fevkiye_annesi', 'Biliyorum kızım. Bilmek yetmiyor. Yalnız şunu yaparım: konağı kızımın üstünde tutarım, damadın değil.'],
                  ['ic', 'Kapıyı kapayamadı. Bir kilidi elinde tutuyor.'],
                ],
              },
            ],
          },
        ],
      },

      /* ---------- Gizli nikâh teklifi (roman s. 138-141): birinci kapı ---------- */
      {
        id: 'b5_nikah', mekan: 'fevkiye_oda', tetik: 'giris', kosul: (S) => S.gorev === 2,
        sahne: ['munevver'],
        adimlar: [
          'Leyla\'nın odası. Yarı açık çeyiz sandıkları, sedirde katlı bürümcükler. Başkasının sevinciyle dolu bir oda.',
          'Münevver Hanım pencerenin önünde. Bir ayda yüzü küçülmüş. Beni görünce kollarını açtı.',
          {
            eger: (S) => S.bayrak.munevver_veda === 'inanmadim',
            ise: [['munevver', 'Kapıda söylediğini oğluma ilettim. O geceden beri ilk kez bir lokma yedi.']],
            degilse: [['munevver', 'Kızım, sana bir şey soracağım: yoksa sen de inandın mı?', 'endiseli'], ['f', 'Ondan emin olsun ki inanmadım nineciğim.']],
          },
          ['munevver', 'Otur yanıma. Sana oğlumu anlatacağım; ağır gelse de dinle.'],
          ['munevver', 'Gerdanlık geri geldiği gün kutuyu açmadı; masasında kapalı duruyor. "Açarsam bitmiş olur anne" diyor. Yastığı her sabah ıslak.'],
          {
            // Rica ancak kâğıt 3. bölümde yerine vardıysa bilinir (haber === 'vardi')
            eger: (S) => S.bayrak.mektup_munevver === 'mukaddem' && S.bayrak.haber === 'vardi',
            ise: [['munevver', '"Bana yazmasın" demiştin. Yazmadı. Kalemi alıyor, bırakıyor. Sözünü tutuyor; sözünü tutmak onu eritiyor.']],
            degilse: [{
              eger: (S) => S.bayrak.mektup_munevver === 'mukaddem',
              ise: [
                ['munevver', 'Sana yazmak istedi; ben bırakmadım. "O eve giren kâğıt kızın başına iş açar" dedim. Kalemi alıyor, bırakıyor.'],
                ['ic', 'Benim ricam ona hiç varmadı; o kâğıt yerine ulaşmadı. Aynı şeyi annesi kendiliğinden istemiş.'],
              ],
              degilse: [],
            }],
          },
          ['munevver', 'Babanın yazıhanesine gitti; utana sıkıla. Baban ağlamış. "Bana bundan bahsetme oğlum; ben de seni evladım gibi severim" demiş, kalkıp kaçmış. Seven adam kaçar mı? İnandırılmış adam kaçar.'],
          ['ic', 'Babam ağlamış. Benim yanımda ağlamadı.', 'mahzun'],
          ['f', 'Kenan Bey bana kırgın mı nineciğim? Gerdanlığı geri yollayan el bizim evden çıktı.'],
          ['munevver', 'Sana mı? "O evde bir tek ona inanırım" dedi. Kırgınlığı kendine: "Onu o evde bıraktım" diyor.'],
          'Yutkundum. Pencereden Leyla\'ların bahçesi görünüyor; bir kız ipe çarşaf seriyor. Herkesin günü sürüyor.',
          ['munevver', 'Şimdi sen söyle. O evde günün nasıl geçiyor? Oğlum soracak; ona ne götüreyim?'],
          ['ic', 'Doğrusunu söylersem bu akşam yan konakta iki kişi uyumayacak. Söylemezsem omzumdan kayan elbisem söyleyecek.'],
          {
            soru: 'Münevver Hanım yüzüme bakıyor. Ona neyi söyleyeceğim, neyi saklayacağım?',
            secim: [
              {
                m: 'Olduğu gibi söylemek: "Yemek vaktinden başka odamdan çıkmıyorum."', etki: { munevver: 1, isyan: 1 }, bayrak: { munevver_dert: 'acti' },
                iz: 'Münevver Hanım\'a evdeki hâlini olduğu gibi anlattın.',
                adimlar: [
                  ['f', 'Yemek vaktinden başka odamdan çıkmıyorum nineciğim. Sofrada üç lokma yiyorum. Babam yüzüme bakmıyor.'],
                  'Eli elimin üstünde kasıldı. Gözünü kaçırmadı.',
                  ['munevver', 'Oğluma hepsini söylemem. Ama ben bileceğim; bilmem lazımdı.', 'endiseli'],
                ],
              },
              {
                m: 'Saklamak: "İyiyim nineciğim. Ona da iyi olduğumu söyleyin."', etki: { vakar: 1 }, bayrak: { munevver_dert: 'sakladi' },
                iz: 'Münevver Hanım\'a "iyiyim" dedin. İnanmadı; üstüne de gitmedi.',
                adimlar: [
                  ['f', 'İyiyim nineciğim. Ona da iyi olduğumu söyleyin.'],
                  'Omzumdan kayan yakayı düzeltti. Parmakları köprücük kemiğimde bir an durdu.',
                  ['munevver', 'Söylerim. İnanmaz; ama söylerim.'],
                ],
              },
              {
                m: 'Kendimi geçip Şefik\'i anlatmak: "Şefik her akşam ninesini soruyor."', etki: { munevver: 1 }, bayrak: { munevver_dert: 'sefik' },
                iz: 'Münevver Hanım\'a kendini değil, Şefik\'i anlattın.',
                adimlar: [
                  ['f', 'Beni bırakın nineciğim. Şefik her akşam sizi soruyor: "Biz ne yaptık ki nine gelmiyor?" diyor.'],
                  'Münevver Hanım başını pencereye çevirdi. Bir süre bahçedeki çarşaflara baktı.',
                  ['munevver', 'Ona de ki ninesi küsmedi. Kapıyı ninesi kapamadı.', 'endiseli'],
                ],
              },
            ],
          },
          ['munevver', 'Annen son hastalığında elimi tuttu. "Kızıma göz kulak ol" dedi. Ben o gün söz verdim; sen daha çocuktun.'],
          ['munevver', 'O sözü tutamıyorum Feride. Kapınızdan çevrildim. Bana bari acı kızım.'],
          'Elimi iki elinin arasına aldı. Onun eli de titriyordu.',
          ['munevver', 'Dinle. Bir gün Şefik\'i alıp konağıma geleceksin. İmam hazır, şahitler hazır. Nikâhınız kıyılır; babanın önüne olmuş bir iş olarak çıkarız. Ben arkandayım.'],
          ['munevver', 'Şefik\'in odası hazır; penceresi bahçeye bakıyor. Sana da annenin sağlığında beğendiği odayı ayırdım.'],
          ['ic', 'Bir kapı. Arkasında o var, Şefik\'in odası var, bir anne var.'],
          ['ic', 'Önünde babam var. Bir sabah kızının yatağını boş bulacak. Perihan Hanım ona ne diyecek, biliyorum: "Ben demedim mi efendi?"'],
          ['ic', 'Kaçan kızın babası. Kaçan kızın kardeşi. Hatice\'nin ezberi o gün doğru çıkmış sayılacak.'],
          ['f', 'Babam razı olmaz mı nineciğim? Bir kere daha sorsanız?'],
          ['munevver', 'Üç kâğıt yazdım, iki adam yolladım. Kapıdan çevrildiler. Baban beni değil, karısını dinliyor.'],
          ['f', 'Babam kötü adam değildir nineciğim.'],
          ['munevver', 'Değildir. Bilirim. İyi adamı kandırmak kolaydır; işin acısı da bu.', 'endiseli'],
          {
            eger: (S) => S.bayrak.munevver_dert === 'acti',
            ise: [['munevver', 'Odasından yalnız yemeğe çıkan kız... Bunu kendi ağzınla söyledin. Üvey ananın sana bulacağı kocayı düşündükçe uykum kaçıyor. Ben seni kaçırmak istemiyorum; kurtarmak istiyorum.']],
            degilse: [{
              eger: (S) => S.bayrak.munevver_dert === 'sakladi',
              ise: [['munevver', '"İyiyim" dedin; beni üzmemek için dedin. Sen bu evde eriyorsun kızım. Üvey ananın sana bulacağı kocayı düşündükçe uykum kaçıyor. Ben seni kaçırmak istemiyorum; kurtarmak istiyorum.']],
              degilse: [['munevver', 'Sen bu evde eriyorsun kızım; kardeşin de kapıya bakarak büyüyor. Üvey ananın sana bulacağı kocayı düşündükçe uykum kaçıyor. Ben seni kaçırmak istemiyorum; kurtarmak istiyorum.']],
            }],
          },
          ['ic', 'Babam da "kurtardım" diyor. Herkes beni bir şeyden kurtarıyor. Kimse bana sormuyor. O sordu.'],
          'Dizlerim titriyor. Eteğimin altında; görünmüyor.',
          {
            soru: 'İmam hazır, şahitler hazır. Münevver Hanım cevabımı bekliyor.',
            secim: [
              {
                m: '"Ben firar edemem nineciğim."', etki: { vakar: 3, munevver: 1 }, bayrak: { gizli_nikah: 'ret' },
                iz: 'Kaçmayı reddettin. Kapı kapandı; baban bilmiyor bile.',
                adimlar: [
                  ['f', 'Ben firar edemem nineciğim. Babama "beni şuna verin" diyemem; yalnız "şunu istemem" diyebilirim. Seçmek onun hakkı. Razı olana kadar beklerim.'],
                  ['f', 'O beni kimseye zorla vermedi. Ben de ona zorla damat götürmem.'],
                  'Münevver Hanım uzun süre sustu. Sonra kollarını açtı. Küçük bir çocuk gibi atıldım.',
                  'Feracesinin yakası ıslandı. Kimin gözyaşıydı, ayırmadım.',
                  ['munevver', 'Behiye de böyle derdi. Kızmadım kızım; sana kızamam. Bekle öyleyse. Ben de beklerim.'],
                  ['munevver', 'Oğluma "Hayır demedi; kaçmam dedi" diyeceğim. İkisi bir değildir.'],
                  ['ic', 'Doğru olanı yaptım. Doğru olan şey bu evde beni bir gün daha tutuyor.', 'mahzun'],
                ],
              },
              {
                m: '"Evet. Şefik\'i alıp geleceğim."', etki: { mukaddem: 5, munevver: 1, isyan: 2 }, bayrak: { gizli_nikah: 'ertelendi' },
                iz: '"Evet" dedin. Münevver Hanım seni bugün götürmedi.',
                adimlar: [
                  ['f', 'Evet nineciğim. Şefik\'i alıp geleceğim.'],
                  'Münevver Hanım yüzüme uzun uzun baktı. Sonra başını iki yana salladı.',
                  ['munevver', 'Bugün değil kızım. O kadının gözü senin üstünde; çekmecene, kardeşinin cebine giren el, yolda arabanı da çevirir. Çevirirse sen de yanarsın, Şefik de.'],
                  ['munevver', 'Sözünü aldım; bana bu yeter. Kapım açık. Günü ben bildireceğim.'],
                  'Beni göğsüne çekti. Küçük bir çocuk gibi sokuldum.',
                  ['munevver', 'Babanın hakkını da unutmadım. Nikâhtan sonra elini öpmeye seni ilk ben götüreceğim.'],
                  ['ic', '"Evet" dedim. İlk kez babamın hakkından önce kendi hakkımı söyledim. Karşılığında bir gün değil, bir söz aldım.'],
                ],
              },
              {
                m: '"Kaçmayacağım. Ama babamın gözünü açacak delili birlikte toplayalım."', etki: { munevver: 2, mehves: 1, vakar: 1 }, bayrak: { gizli_nikah: 'delil', nimet_tanik: true },
                iz: 'Kaçmak yerine delil toplamayı seçtin. Nimet tanıklığa söz verdi.',
                adimlar: [
                  ['f', 'Kaçmayacağım nineciğim. Seçmek babamın hakkı; ama o hakkı yalanla kullanıyor. Gözünü açacak şeyi birlikte bulalım. Tek başıma bulamıyorum.'],
                  { goster: ['mehves', 'kararli'] },
                  'Münevver Hanım Nimet\'i içeri çağırdı.',
                  ['mehves', 'O gece Hatice yanımda yatıyordu hanımefendi. Gece yarısından sonra geldi; sabaha kadar oradaydı.', 'kararli'],
                  { eger: (S) => !!S.bayrak.nimet_aciga, ise: [['mehves', 'Adım efendinin önünde bir kere anıldı; dinlemedi. İkincisinde dinletirim.', 'kararli']], degilse: [] },
                  ['munevver', 'Vakti gelince bunu efendinin yüzüne söyler misin?'],
                  ['mehves', 'Kovulmayı göze aldım hanımefendi.', 'kararli'],
                  ['munevver', 'Kovulursan kapım sana açık. Şimdi değil; delil olgunlaşmadan çıkarsak inkâr ederler. Feride toplayacak, ben saklayacağım, vaktini bekleyeceğiz.'],
                  { gizle: 'mehves' },
                  'Münevver Hanım kollarını açtı. Küçük bir çocuk gibi atıldım.',
                  ['munevver', 'Baban hakkını kullansın kızım; ama doğruyu bilerek kullansın. Bunu ona biz borçluyuz.'],
                  ['ic', 'Kaçmadım, susmadım da. Üçüncü bir yol: yavaş, uzun. Bedelini Nimet göze aldı.'],
                ],
              },
            ],
          },
          'Kalkarken yaşmağımı o bağladı. Düğümü annemin attığı yere attı: sol kulağımın altına.',
          {
            eger: (S) => S.bayrak.munevver_dert === 'sefik',
            ise: ['Avucuma bir kâğıt akide şekeri sıkıştırdı.', ['munevver', 'Şefik\'e. Kimden geldiğini o bilir; sen yüksek sesle söyleme.']],
            degilse: [],
          },
          ['munevver', 'Hangi kapıdan geçersen geç, öbür ucunda ben varım. Bunu bil.', 'gulumser'],
          'Merdivenden inerken dönüp baktım. Pencerenin önünde, sandıkların arasında tek başına duruyordu.',
          { temizle: true },
          { faz: 'B', mekanaGit: 'konak_sofa' },
          { kiyafet: 'ev', kartsiz: true, kilit: 'Evdesin: gündelik kıyafetin.' },
          {
            eger: (S) => S.bayrak.munevver_dert === 'sefik',
            ise: [
              { goster: ['sefik'] },
              'O akşam akideyi Şefik\'in avucuna koydum. Kâğıdını tanıdı; sormadı.',
              ['sefik', 'Küsmemiş. Küsen insan şeker yollamaz.', 'sevincli'],
              { etki: { sefik: 1 } },
              { gizle: 'sefik' },
            ],
            degilse: [],
          },
          { kart: 'Yaz.\nNişan bozulalı üç ay.' },
          'Yaz bir odada geçti. Elbiselerim iki kere daraltıldı.',
          'Günlerim birbirine benziyor: sabah Şefik\'in dersi, öğleden sonra dikiş, akşam sofrada üç lokma. Şefik hesap defterinin kenarına vapur çiziyor; her vapurun güvertesinde iki kişi.',
          ['ic', 'Kim olduklarını sormuyorum. Biliyorum.'],
          'Leyla binlerce "isterim"le ailesini razı etti. Nabi Bey çeyizi az bulmuş; düğün günü yine de kesildi.',
          'Davet bütün konağa geldi. Perihan Hanım tuvaletini üç gündür prova ediyor.',
          ['ic', 'Bir yıl önce o gelin kanepesi için "Sıra Feride\'de" diyorlardı.'],
          {
            soru: 'Leyla\'nın düğünü yarın. Davet bütün konağa.',
            secim: [
              {
                m: 'Bir keyifsizlik bahane edip evde kalmak.', etki: { vakar: 1, fevkiye: -1, dedikodu: -1 }, bayrak: { fevkiye_dugun: 'gitmedi' },
                iz: 'Düğüne gitmedin. Konak bir gece senin oldu.',
                adimlar: [
                  'Konak boşaldı. Arabaların sesi sokağın ucunda kesildi.',
                  { goster: ['sefik', 'sevincli'] },
                  'Şefik\'le mutfaktan reçel getirdik; odamda, halının üstünde yedik. Perihan Hanım evdeyken yapılmayan şeyler.',
                  ['sefik', 'Abla, hep düğün olsa da hep gitseler!', 'sevincli'],
                  'Güldük. Sesimiz boş sofada çınladı; korkup sustuk, sonra yine güldük.',
                  { gizle: 'sefik' }, { goster: ['mehves'] },
                  'Gece yarısı Nimet döndü; feracesini çıkarmadan anlattı.',
                  ['mehves', 'Gelin gülüyordu hanımcığım. Damat sandıkları saymış; yüzü asıkmış. Tacir hanımı da oradaydı. "Sait Efendi\'nin kızı neden gelmedi?" dedi. İki kere.'],
                  ['ic', 'Gitmedim; yine de soruldum.'],
                  { gizle: 'mehves' },
                ],
              },
              {
                m: 'Gitmek. Leyla\'yı o kanepede yalnız bırakmamak.', etki: { fevkiye: 1 }, bayrak: { fevkiye_dugun: 'gitti', bilgi_remzi: true },
                iz: 'Düğüne gittin. Bütün gözler sendeydi.',
                adimlar: [
                  { kiyafet: 'ziyaret', kartsiz: true, kilit: 'Düğündesin: buz mavisi ipeklin.' },
                  { arkaplan: 'gelin_odasi' },
                  'Buz mavisi ipeklimi giydim. Nişanı bozulmuş kız ne giyse söz olur; bari yakası kapalı olsun.',
                  'Gelin odasına girdim. Konuşmalar bir an kesildi; sonra daha alçak sesle sürdü.',
                  { goster: ['fevkiye'] },
                  ['fevkiye', 'Geldin! Gelmezsin sandım. {i}(Kulağıma){/i} Çok mutluyum Feridecim.'],
                  { eger: (S) => S.bayrak.fevkiye_sohbet === 'dogrudan', ise: [['fevkiye', 'Haksız çıktın, görüyor musun?']], degilse: [] },
                  {
                    eger: (S) => S.bayrak.topuk === 'vurdu',
                    ise: ['Damat kapıda bir göründü. Fesinin altında, alnında soluk bir iz. Beni görünce fesini indirdi.'],
                    degilse: [{ eger: (S) => !!S.bayrak.nabi_kin, ise: ['Damat kapıda bir göründü. Bana uzaktan, gülmeden baktı.'], degilse: [] }],
                  },
                  { gizle: 'fevkiye' }, { goster: ['tacir_hanimi'] },
                  'Köşedeki sedirde iri taşlı küpeleriyle bir hanım. Beni yanına çağırdı; oturmamı beklemeden baştan aşağı süzdü.',
                  ['tacir_hanimi', 'A kızım, sen Sait Efendi\'nin kızı değil misin? Bu ipeğin arşını kaça? Danteli Beyoğlu işi mi?'],
                  ['f', 'Bilmem efendim. Babam aldırdı.'],
                  ['tacir_hanimi', 'Bilmezsin tabii. Bilmeyen kız iyidir; harcamayı da bilmez. Kardeşinle birlikte gelin gidecekmişsin diyorlar, doğru mu?'],
                  'Eli bileğimde; bileziğimi tartıyor gibi.',
                  ['ic', 'Çarşıda kumaş böyle yoklanır. Kumaş fiyatını kendi söylemez.'],
                  ['f', 'Kardeşim benim canımdır efendim.'],
                  ['tacir_hanimi', 'Can iyi şeydir. Her eve sığmaz ama.'],
                  { temizle: true }, { arkaplan: null },
                  { kiyafet: 'ev', kartsiz: true, kilit: 'Evdesin: gündelik kıyafetin.' },
                  'Dönüşte Perihan Hanım arabada pek keyifliydi. Nedenini sormadım.',
                ],
              },
            ],
          },
          'Düğünden sonra konak eski sessizliğine döndü.',
          'Babam beni "zamanında kurtardığını" söylüyor; zayıfladığımı görmüyor.',
          {
            eger: (S) => !!S.bayrak.bilgi_reftar_nabi,
            ise: ['Hatice\'nin gözleri Nabi Bey\'in düğününden beri kızarık; hizmete küskün çıkıyor. Neden ağladığını tahmin ediyorum; yüzüne söyleyemiyorum.'],
            degilse: ['Hatice\'nin gözleri Nabi Bey\'in düğününden beri kızarık; hizmete küskün çıkıyor. Sebebini soran yok; ben de sormuyorum.'],
          },
          'Perihan Hanım bana koca arıyor. Görücüler geliyor; Şefik\'i duyunca gidiyor. Şefik\'le birlikte kabul eden çıkmıyor.',
          ['ic', 'Kim önce gelirse ona verecek. Ben seçmezsem o seçecek.'],
          'Bugün sofadaki masada bir kutu var. Perihan Hanım başında.',
          { gorev: 3 },
        ],
      },

      /* ---------- Yelpaze (ek): ikinci kapı. Roman tek adama kilitlenmez. ---------- */
      {
        id: 'b5_yelpaze', mekan: 'konak_sofa', kisi: 'calibe', kosul: (S) => S.gorev === 3,
        sahne: [{ id: 'calibe', ifade: 'gulumser' }],
        adimlar: [
          { goster: ['yelpaze'] },
          'Atlas astarlı bir kutu. Perihan Hanım kapağını benim için açık tutuyor.',
          ['calibe', 'Bak sana ne geldi. Merhum tacirin hanımı, küçük oğlu Remzi Bey için seni soruyor. "Hatıramız olsun" diye Paris işi bir yelpaze yollamış.', 'gulumser'],
          'Sedef saplı, ipek. Açınca bir Paris bahçesi: fıskiyeler, şemsiyeli hanımlar. Elime hiç bu kadar güzel bir şey almadım.',
          'Getiren kadın on altı lira ettiğini üç kere söylemiş.',
          {
            eger: (S) => S.bayrak.fevkiye_dugun === 'gitti',
            ise: [['ic', 'Düğünde bileğimi tartan el. Demek tartı tutmuş.']],
            degilse: [{
              eger: (S) => !!S.bayrak.bilgi_remzi,
              ise: [['ic', 'Hediyenin fiyatını söyleyen insanlar. Ada\'daki kır kahvesinde duymuştum: "kaça olursa olsun".']],
              degilse: [{ eger: (S) => S.bayrak.mekan_b4 === 'salon', ise: [['ic', 'Ada\'daki araba. Bakılmak isteyen adam.']], degilse: [['ic', 'Düğüne gitmedim; beni yine de bulmuşlar.']] }],
            }],
          },
          ['calibe', 'Konakları Boğaz\'da. Gelinlerine ayda bir terzi gelirmiş. Kimse kimsenin odasına sormadan girmezmiş.', 'gulumser'],
          ['ic', 'Kilitli çekmece yok. Şurup yok. Hatice yok.'],
          ['calibe', 'Oğlan genç, eli açık. Annesinin bir dediğini iki etmezmiş.'],
          ['ic', 'Genç. Eli açık. Annesinin sözünden çıkmaz. Üçü de iyi mi, bilmiyorum.'],
          ['f', 'Remzi Bey beni nereden bilir efendim?'],
          ['calibe', 'Görmüş, beğenmiş. Erkek kısmı için bu kadarı yeter kızım. Sen de onu nikâhtan sonra tanırsın; hepimiz öyle tanıdık.', 'gulumser'],
          ['ic', 'Tanımadığım bir adam. Hakkımda hiçbir yalan duymamış; duysa da yelpazesini yollamış. Bu da bir şeydir.'],
          ['calibe', 'Yalnız, oğlan evine kayın istemezlermiş. Şefik burada kalır; ne olacak.', 'sinsi'],
          { eger: (S) => !!S.bayrak.sefik_sozu_b5, ise: [['ic', '"Evlenirsem de bırakmam" demiştim. Yatağımın ucunda, şeker avucundayken.', 'mahzun']], degilse: [] },
          'Yelpazeyi kapadım. Sedef avucumda ılıdı.',
          ['ic', 'Parıltılı bir kapı. Arkasında bu evden çıkış var. Eşiğinde Şefik\'i bırakmam gerekiyor.'],
          ['ic', 'Almazsam Perihan Hanım babama "Kızınız kısmetini tepiyor" diyecek. Alırsam bunu yan konak da duyacak.'],
          {
            soru: 'Yelpaze kutusunda duruyor. Perihan Hanım cevabımı bekliyor.',
            secim: [
              {
                m: 'Almak ve teşekkür yollamak.', etki: { remzi: 6, baba_guven: 2, calibe_suphe: -1, mukaddem: -2 }, bayrak: { remzi_hediye: 'kabul' },
                iz: 'Yelpazeyi aldın. Bir kapı aralandı.',
                adimlar: [
                  ['calibe', 'Aferin kızım. Küsmekle ömür geçmez.', 'gulumser'],
                  'Nimet bakışını kaçırdı.',
                  'Akşam sofrada babam yelpazeyi gördü. "Yakışmış kızım" dedi. Üç aydır bana ilk kez gülümsedi. Şefik yelpazeye bakmadı.',
                  ['ic', 'Bir yelpaze aldım. Yalnız bir yelpaze. Öyle mi?'],
                ],
              },
              {
                m: 'Geri çevirmek: "Tanımadığım kimseden hediye alamam efendim."', etki: { vakar: 1, calibe_suphe: 1 }, bayrak: { remzi_hediye: 'ret' },
                iz: 'Yelpazeyi geri çevirdin.',
                adimlar: [
                  ['f', 'Tanımadığım kimseden hediye alamam efendim.'],
                  'Perihan Hanım kutuyu sertçe kapadı.',
                  ['calibe', 'Evde kalırsan bana gelme.', 'soguk'],
                  'Akşam sofrada babama anlattı: "Kızınız kısmetini tepiyor efendi." Babam çorbasına baktı.',
                  ['ic', 'On altı liralık bir şeyi geri verdim. Hafifledim. Hafiflik bu evde uzun sürmez.'],
                ],
              },
              {
                m: '"Önce sorsunlar: Şefik\'i de alıyorlar mı?"', etki: { sefik: 1, baba_guven: 1 }, bayrak: { remzi_hediye: 'sart' },
                iz: 'Şefik\'i şart koştun. Cevap gelmedi.',
                adimlar: [
                  ['f', 'Önce sorsunlar efendim: kardeşimi de alıyorlar mı?'],
                  ['calibe', 'Hep o çocuk!', 'ofkeli'],
                  'Haber gitti. Cevap gelmedi.',
                  'Şefik kapının arkasındaymış. Akşam hiçbir şey demeden avucuma bir ceviz bıraktı; en irisini.',
                  ['ic', 'Cevap gelmedi. Ama soruyu sordum; bu evde sorumu duyan bir de babam vardı.'],
                ],
              },
            ],
          },
          { gizle: 'yelpaze' },
          'Nimet merdivenin dibinde; bana bir şey söyleyecek gibi duruyor.',
          ['ic', 'Odama çıkacağım. Kapım aralık. Ben aralık bırakmamıştım.'],
          { gorev: 4 },
        ],
      },

      /* ---------- Yan: aşçı kadın (g3-4, mutfak) ---------- */
      {
        id: 'b5_asci', yan: true, mekan: 'mutfak', kisi: 'asci', kosul: (S) => S.gorev === 3 || S.gorev === 4,
        sahne: ['asci'],
        adimlar: [
          'Mutfak sıcak. Aşçı kadın hamur açıyor; unlu eliyle bana bir iskemle gösterdi.',
          ['asci', 'Otur küçük hanım. Seni böyle süzülmüş görmeye dayanamıyorum. Şuracıkta bir börek ye; kimse görmez.'],
          { eger: (S) => cezali(S, 'nimet'), ise: [['asci', 'Nimet de artık benim yanımda. Soğan doğruyor, ağlıyor. "Soğandan" diyor.']], degilse: [] },
          ['asci', 'Hatice\'yi gördün mü? Gözleri kaç gündür kan çanağı. Hanımefendinin odasından ağlayarak çıktı; tepsiyi yere çaldı. Neye küstüğünü soran olmadı.'],
          {
            eger: (S) => !!S.bayrak.bilgi_reftar_nabi,
            ise: [['ic', 'Soran olmadı; çünkü bilen çok. Nabi Bey başkasıyla evlendi; ona verilen söz de o gün bitti.']],
            degilse: [['ic', 'Bu evde herkesin birinden alacağı var. Onunki kimdeydi?']],
          },
          { bayrak: { reftar_kuskun: true } },
          {
            soru: 'Börek sıcak. Aşçı kadın gözünü benden ayırmıyor.',
            secim: [
              {
                m: 'Böreği yemek.', etki: { vakar: 1 },
                adimlar: [
                  'İlk lokma boğazımda durdu. İkincisi geçti. Aşçı kadın arkasını döndü; görmemiş gibi yaptı.',
                  ['asci', 'Annen de mutfağa inerdi. "Hanım, ocağını bilmeli" derdi.'],
                ],
              },
              {
                m: 'Böreği Şefik\'e götürmek.', etki: { sefik: 1 },
                adimlar: [
                  'Peçeteye sardım.',
                  ['asci', 'İki tane sar. Biri senin; bana söz ver.'],
                  ['ic', 'Söz verdim. Bu seferki tutması kolay bir söz.'],
                ],
              },
            ],
          },
        ],
      },

      /* ---------- Yan: babam, çınarın altında (g3-4, konak_bahce). Sonu Süha sahnesinde okunur. ---------- */
      {
        id: 'b5_baba_bahce', yan: true, mekan: 'konak_bahce', kisi: 'sai', kosul: (S) => S.gorev === 3 || S.gorev === 4,
        sahne: ['sai'],
        adimlar: [
          'Babam çınarın altında, gazetesi dizinde. Okumuyor; aynı sayfaya bakıyor.',
          'Taşlığın başında durdum. Aramızda on adım, bir de üç ay var.',
          ['sai', 'Gel kızım. Hava güzel. Bak, rengin de yerine gelmiş.', 'gulumser'],
          ['ic', 'Rengim yerine gelmedi. Babam bana değil, görmek istediğine bakıyor.'],
          ['sai', 'Seni zamanında kurtardım Feride. Bir gün sen de anlayacaksın.'],
          {
            soru: 'Babam cevap bekliyor. Gazete dizinde ters duruyor.',
            secim: [
              {
                m: 'Elini öpüp çekilmek.', etki: { baba_guven: 2, vakar: 1 },
                adimlar: [
                  'Elini öptüm. Eli titriyordu.',
                  ['ic', 'İnandığı şeyden emin olan adamın eli titremez.'],
                ],
              },
              {
                m: '"Gazeteniz ters efendim."', etki: { baba_guven: 1 },
                adimlar: [
                  ['f', 'Gazeteniz ters efendim.'],
                  'Çevirdi. Güldü; gülüşü yarıda kaldı.',
                  ['sai', 'Gözlerim... Yoruluyorum bu aralar.', 'mahzun'],
                  ['ic', 'Yorgun. Onu bu hâle ben getirmedim; geri de ben getiremem. Ama gördüm.'],
                ],
              },
              {
                m: '"Elbiselerim iki kere daraltıldı efendim. Kurtulan kız böyle mi olur?"', etki: { baba_guven: -2, isyan: 1 }, bayrak: { baba_gordu: true },
                iz: 'Baban zayıfladığını gördü. Seni Süha Bey\'e havale etti.',
                adimlar: [
                  ['f', 'Elbiselerim iki kere daraltıldı efendim. Kurtulan kız böyle mi olur?'],
                  ['sai', 'Feride!', 'ciddi'],
                  'Sonra baktı. Gerçekten baktı: bileğime, yakama.',
                  ['sai', 'Süha Bey\'e söyleyeyim, sana bir baksın.', 'mahzun'],
                  ['ic', 'Gördü. Gördüğünü de yine onlara teslim etti.', 'mahzun'],
                ],
              },
            ],
          },
        ],
      },

      /* ---------- Yan: Nimet'in uyarısı (g4, konak_sofa). Süha sahnesinde okunur. ---------- */
      {
        id: 'b5_nimet_uyari', yan: true, mekan: 'konak_sofa', kisi: 'mehves', kosul: (S) => S.gorev === 4,
        sahne: [{ id: 'mehves', ifade: 'endiseli' }],
        adimlar: [
          ['mehves', 'Hanımcığım, yukarı çıkmadan dur. Süha Bey yarım saat önce çıktı; inmedi. Efendiden izin almış: "Kızı ben iyi ederim" demiş.', 'endiseli'],
          ['ic', 'Kapımı aralık bırakan o.'],
          {
            eger: (S) => cezali(S, 'nimet'),
            ise: [['mehves', 'Bana yukarısı yasak, bilirsin. Ama merdivenin başına kadar çıkarım; çamaşır sepetini bahane ederim. Oradan da duyulur.', 'kararli']],
            degilse: [['mehves', 'Ben de çıkayım. Odaya girmem; kapının önünde çamaşır katlarım. Katlanacak çamaşır bitmez.', 'kararli']],
          },
          {
            soru: 'Nimet sepetini kucaklamış, bekliyor.',
            secim: [
              {
                m: '"Gel Nimet. Kapıyı da açık bırakacağım."', etki: { mehves: 1 }, bayrak: { nimet_kapida: true },
                iz: 'Nimet kapının önünde bekleyecek.',
                adimlar: [
                  ['f', 'Gel Nimet. Kapıyı da açık bırakacağım.'],
                  ['mehves', 'Açık kapıdan çok şey duyulur hanımcığım. Duyulsun.', 'kararli'],
                ],
              },
              {
                m: '"Hayır. Seni onun gözüne batırmam."', etki: { vakar: 1 },
                adimlar: [
                  ['f', 'Sen aşağıda kal. O seni görürse akşam ablası da görmüş olur.'],
                  ['mehves', 'Öyleyse şunu al.'],
                  'Şalımı omzuma attı; iğnesini kendi iliştirdi.',
                  ['ic', 'Bir şal. Zırh değil. Ama iliştiren el benden yana.'],
                ],
              },
            ],
          },
        ],
      },

      /* ---------- Süha'nın teklifi (roman s. 143-147): üçüncü kapı ---------- */
      {
        id: 'b5_suha', mekan: 'fazila_oda', tetik: 'giris', kosul: (S) => S.gorev === 4,
        sahne: ['suha', 'resim'],
        adimlar: [
          'Kapıyı ittim. Süha Bey odamda, pencerenin önünde. Çantası masamda, kitaplarımın üstünde.',
          'Babamdan izin, hatta emir almış: artık çağrılmadan geliyor.',
          {
            eger: (S) => !!S.bayrak.nimet_kapida,
            ise: ['Kapıyı ardına kadar açık bıraktım. Koridorda Nimet\'in sepeti yere kondu.'],
            degilse: ['Kapıyı ardına kadar açık bıraktım. Koridor boş.'],
          },
          ['suha', 'Babanız sizdeki değişikliği benden sordu Feride Hanım. Muayene edeceğim.'],
          { eger: (S) => !!S.bayrak.baba_gordu, ise: [['ic', 'Bahçede babama söylediğim söz. Dönüp dolaşıp bu adamın çantasına girmiş.']], degilse: [] },
          ['f', 'Benim bir şeyim yok. Muayene de ettirmem, ilaç da almam.'],
          {
            eger: (S) => S.bayrak.ilac === 'josephine',
            ise: [['f', 'Şişenizdekinin ne olduğunu da biliyorum.']],
            degilse: [{ eger: (S) => S.bayrak.ilac === 'recete', ise: [['f', 'Hastalığımın adını hiç söylemediniz.']], degilse: [['suha', 'Eskiden ilaçlarımı içerdiniz.']] }],
          },
          'Bir adım attı. Ben bir adım geri çekildim; sırtım annemin resminin asılı olduğu duvara geldi.',
          ['suha', 'Ağrıyan yeriniz yüreğinizdir. Onun ilacı bende.'],
          ['f', 'Kimsenin karışamayacağı bir şey varsa o da gönüldür efendim.'],
          'Sonra söyledi. Düzgün cümlelerle, alçak sesle: beni seviyormuş; nikâhımı istiyormuş; ömür boyu sadakat.',
          ['suha', 'Bu evden çıkmanıza gerek kalmaz. Şefik yanınızda kalır; onu ben okuturum. Ablam size bir daha tek söz söyleyemez. Bunların hepsi benim elimde.'],
          ['ic', 'Hepsi onun elinde. Şefik, ablasının dili, babamın kulağı. Bana sunduğu her şey zaten avucunda tuttuğu şey.'],
          ['ic', 'Otuzunu geçmiş. Evimizin hekimi. Babamın emriyle odama giren adam. "Dayı" dediğim adam.'],
          ['ic', 'Ben on sekizimdeyim. Bu eve geldiği günden beri nabzımı o tutuyor.'],
          ['f', 'Babam sizi buraya hekim diye yolladı efendim. Talip diye değil.'],
          ['suha', 'Babanız sizi mutlu görmek istiyor. Ben de. Aynı şeyi istiyoruz; yalnız o bilmiyor.'],
          'Sesi yumuşak. Hasta başında konuşur gibi konuşuyor; karşısındaki itiraz edemesin diye.',
          ['suha', 'Gençsiniz; bir hayal kırıklığı yaşadınız. Geçer. Ben sizi o hayalden de, bu evden de korurum.'],
          {
            eger: (S) => !!S.bayrak.delil_soylenti,
            ise: [['ic', 'O hayali kıran sözü babama kim ağırlaştırdı, sormadım. Sorarsam bildiğimi öğrenir.']],
            degilse: [['ic', 'Korumak. Bu evde bu kelimeyi kim söylese ardından bir kapı kilitleniyor.']],
          },
          { eger: (S) => S.bayrak.nabiz === 'dayi', ise: [['suha', 'Bana yine "dayı" diyeceksiniz, biliyorum. Demeyin.']], degilse: [] },
          'Acı acı gülümsedim. Yüzüme başka türlüsü gelmedi.',
          ['ic', 'Üçüncü kapı. Bu evin içinde; çıkmama bile gerek yok. Onun için en korkuncu.'],
          ['ic', 'Kovarsam babama "Kızınız hasta; kimseyi istemiyor" diyecek. Oyalarsam her gün gelecek.'],
          {
            soru: 'Süha Bey cevabımı bekliyor. Odada ikimizden başka kimse yok.',
            secim: [
              {
                m: 'Ayağa kalkıp kapıyı göstermek.', etki: { suha: -4, vakar: 1, isyan: 1 }, bayrak: { suha_teklif: 'kapi' },
                iz: 'Süha Bey\'e kapıyı gösterdin.',
                adimlar: [
                  ['f', 'Sizi dayım bildiğim için odama girebildiniz. Dayım olmadığınızı siz öğrettiniz. Buyurunuz.', 'ofkeli'],
                  'Yüzü morardı.',
                  ['suha', 'Bu muamele bir kızın namusuyla oynayana yapılır; nikâhını isteyene değil.'],
                  ['f', 'Babamla aramızda bir söz var: o beni istemediğime vermez, ben onun istemediğine varmam. Dayım bildiğim adamı koca diye kabul edemem.'],
                  'Yan odaya geçtim. Ara kapıyı kapadım. Dizlerim ancak o zaman titredi.',
                  'Akşam sofraya inmedi. Perihan Hanım tabağını kaldırttı; bana bakmadı.',
                ],
              },
              {
                m: '"Bana düşünmek için zaman veriniz."', etki: { suha: 5 }, bayrak: { suha_teklif: 'oyaladi' },
                iz: 'Zaman istedin. Süha Bey bunu umut saydı.',
                adimlar: [
                  ['f', 'Bana düşünmek için zaman veriniz.'],
                  'Gözleri parladı.',
                  ['suha', 'İstediğiniz kadar. Ben beklemeyi bilirim.'],
                  ['ic', 'Zaman kazandım mı, ona mı kazandırdım? Çıkarken kapıyı örtmedi; artık örtmesi gerekmiyor sanıyor.', 'mahzun'],
                  'Akşam sofrada Perihan Hanım bana uzun uzun baktı. Kardeşinin yüzündeki rahatlığı o da görmüş.',
                ],
              },
              {
                m: 'Kapıyı göstermek ve akşam babama anlatmak.', etki: { suha: -2, calibe_suphe: 1, baba_guven: -2 }, bayrak: { suha_teklif: 'baba' },
                iz: 'Babana anlattın. Kızmadı; şaşırdı.',
                adimlar: [
                  ['f', 'Buyurunuz. Bunu babam da duyacak.', 'ofkeli'],
                  { temizle: true }, { kart: 'Akşam.' },
                  { goster: ['sai'] }, { goster: ['calibe', 'saskin'] },
                  ['sai', 'Süha Bey gibi bir adam seni istemişse bunda ayıp ne var kızım?'],
                  'Babam şaşırdı; kızmadı. Asıl Perihan Hanım\'ın yüzü değişti: Süha Bey ona danışmadan açılmış.',
                  ['ic', 'Babam beni korumadı. Ama o ikisinin arasına ilk kez bir şey girdi; onu ben koydum.'],
                  { bayrak: { catlak: true } },
                ],
              },
            ],
          },
          { temizle: true },
          {
            eger: (S) => !!S.bayrak.nimet_kapida,
            ise: [
              { goster: ['mehves', 'kararli'] },
              'O gün Süha Bey odamdan çıkarken Nimet koridordaydı; sepeti kucağında. Göz göze geldiler.',
              ['mehves', 'Duydum hanımcığım. Kelimesi kelimesine. Gün gelir, lazım olur.', 'kararli'],
              { bayrak: { nimet_duydu: true } },
              { delil: 'Nimet koridordaydı: Süha Bey\'in babamın izniyle odama girip nikâhımı istediğini kendi kulağıyla duydu.' },
              { gizle: 'mehves' },
            ],
            degilse: [['ic', 'O gün koridor boştu. Odamda ne söylendiğini bir o biliyor, bir ben. İkimizden hangisine inanırlar?']],
          },
          { kart: 'Güz.\nNişan bozulalı beş buçuk ay.' },
          ['ic', 'Annemin resmi duvarda. Bu odada benden yana bir o kaldı.'],
          { gorev: 5 },
        ],
      },

      /* ---------- Yan: annemin resmi ve madalyon (g5, fazila_oda). Kanca sahnesinde okunur. ---------- */
      {
        id: 'b5_resim', yan: true, mekan: 'fazila_oda', kisi: 'resim', kosul: (S) => S.gorev === 5,
        sahne: ['resim'],
        adimlar: [
          'Annemin resmi. Güz ışığı çerçevenin yaldızına vuruyor.',
          {
            eger: (S) => S.bayrak.madalyon === 'acik',
            ise: ['Madalyonu avucuma aldım. Siyah taşın üstünde altın bir "B"; resimdekinin eşi.'],
            degilse: ['Madalyonu yakamın içinden çıkardım. Siyah taş, altın bir "B". Tenimde ısınmış.'],
          },
          ['ic', 'Beş buçuk ay oldu anne. Üç kapı açıldı; hâlâ buradayım.'],
          {
            soru: 'Resim cevap vermez. Madalyon avucumda.',
            secim: [
              {
                m: 'Madalyonu elbisemin üstünde, açıkta taşımak.', etki: { isyan: 1 }, bayrak: { madalyon_b5: 'acik' },
                iz: 'Annenin madalyonunu herkesin göreceği yere taktın.',
                adimlar: [
                  'Zinciri yakamın üstüne çıkardım. Sofrada herkes görecek; babam da.',
                ],
              },
              {
                m: 'Madalyonu yakamın içinde, kalbimin üstünde tutmak.', etki: { vakar: 1 }, bayrak: { madalyon_b5: 'sakli' },
                adimlar: [
                  'Taşı tenime geri koydum. Soğumuştu; çabuk ısındı.',
                ],
              },
            ],
          },
        ],
      },

      /* ---------- Kanca (roman s. 147-148) ---------- */
      {
        id: 'b5_kanca', mekan: 'buyuk_salon', tetik: 'giris', kosul: (S) => S.gorev === 5,
        sahne: ['sai', 'sefik', 'mehves'],
        adimlar: [
          'Güz. Çınarın yaprakları taşlığa dökülüyor; süpüren kız her sabah baştan başlıyor.',
          {
            eger: (S) => S.bayrak.gizli_nikah === 'ertelendi',
            ise: ['Münevver Hanım\'dan gün gelmedi. Her sabah sokak kapısının çıngırağını dinliyorum.'],
            degilse: [{
              eger: (S) => S.bayrak.gizli_nikah === 'delil',
              ise: ['Nimet\'le bildiklerimiz Münevver Hanım\'da saklı. Az; ama var.'],
              degilse: ['Münevver Hanım bekliyor. Ben de bekliyorum. Beklemek de bir iştir; en yorucusu.'],
            }],
          },
          { eger: (S) => S.bayrak.remzi_hediye === 'kabul', ise: ['Yelpaze çekmecemde. Tacir hanımından iki kere daha haber geldi.'], degilse: [] },
          { eger: (S) => S.bayrak.suha_teklif === 'oyaladi', ise: ['Süha Bey her hafta soruyor: "Düşündünüz mü?" Diliyle değil; gözüyle.'], degilse: [] },
          'Babam bugün erken döndü. Başı ağrımış; çarşıda dolaşmış, arabasını öteberiyle doldurmuş. Ahır kapısı açık olduğundan araba sesini kimse duymadı.',
          'Şefik rafadan yumurtasını yiyor. Nimet sofra takımlarını siliyor; kızların yarısı gezmede, yarısı çamaşırda.',
          'Konak sessiz. Öğle güneşi halıya vurmuş; Şefik ayağını güneşin içine uzatmış, sallıyor.',
          ['sefik', 'Abla, yumurtanın sarısını sona saklıyorum. İyi şeyi sona saklamalı; değil mi?'],
          ['f', 'Saklarken soğutma da.'],
          ['sai', 'Bak Şefik, sana ne aldım.', 'gulumser'],
          'Paketten tenekeden bir vapur çıktı; bacası kırmızı. Şefik yumurtayı unuttu.',
          ['sefik', 'Abla bak! Bunun bacasından duman da çıkar mı?', 'sevincli'],
          'Babam güldü. Bana da bir paket uzattı: bir top beyaz bürümcük.',
          ['sai', 'Sana da. Kendine bir şey diktirirsin.'],
          {
            eger: (S) => S.bayrak.madalyon_b5 === 'acik',
            ise: ['Paketi verirken gözü yakamdaki madalyona takıldı. Eli havada kaldı.', ['sai', 'Annenin...', 'mahzun'], 'Gerisini getirmedi. Ama baktı.'],
            degilse: [],
          },
          ['ic', 'Babam gülüyor, Şefik gülüyor. İyi görünen günlerden korkmayı öğrendim. Bugün korkmak istemiyorum.'],
          ['sai', 'Sen sofracı mı oldun Nimet? Annen nerede Feride?'],
          ['f', 'Yukarıda olmalı efendim.'],
          ['sai', 'Git, anneni çağır. Aldıklarımı görsün.'],
          'Merdivene yöneldim. Hizmetçiler ortada yoktu. Perihan Hanım\'ın odasına çağrılmadan girilmez; bugün beni babam yolluyor.',
          ['ic', 'Süha Bey\'in evde olduğunu bilmiyordum.'],
          { bolumSonu: true },
        ],
      },
    ],

    merak: 'Babam "Git, anneni çağır" dedi. O kapıyı çağrılmadan açan olmaz. Arkasında Perihan Hanım var. Yalnız mı?',

    sonNotu: function (S) {
      const b = S.bayrak, p = [];
      p.push(b.munevver_veda === 'inanmadim' ? 'Münevver Hanım kapıdan çevrilirken elini bırakmadım: "Ben inanmadım" dedim.' : 'Münevver Hanım kapıdan çevrildi. Elini öptüm; söz çıkmadı.');
      if (b.gizli_nikah === 'ret') p.push('Gizli nikâhı reddettim. "Firar edemem" dedim.');
      else if (b.gizli_nikah === 'ertelendi') p.push('Gizli nikâha "evet" dedim. Münevver Hanım "bugün değil" dedi; günü bekliyorum.');
      else p.push('Kaçmayı değil, delil toplamayı seçtim. Nimet tanıklığa söz verdi; kovulmayı göze aldı.');
      if (b.fevkiye_dugun === 'gitti') p.push('Leyla\'nın düğününe gittim. Tacir hanımı beni kumaş gibi yokladı.');
      else if (b.fevkiye_dugun === 'gitmedi') p.push('Leyla\'nın düğününe gitmedim; yine de soruldum.');
      if (b.remzi_hediye === 'kabul') p.push('Tacirzadenin yelpazesini aldım.');
      else if (b.remzi_hediye === 'ret') p.push('Tacirzadenin yelpazesini geri çevirdim.');
      else p.push('Yelpazeye karşılık bir soru yolladım: Şefik\'i de alıyorlar mı? Cevap gelmedi.');
      if (b.suha_teklif === 'kapi') p.push('Süha Bey beni istedi. Kapıyı gösterdim.');
      else if (b.suha_teklif === 'oyaladi') p.push('Süha Bey beni istedi. "Zaman verin" dedim; bunu umut saydı.');
      else p.push('Süha Bey beni istedi. Babama anlattım; "Ayıp ne var?" dedi.');
      if (b.nimet_duydu) p.push('Nimet koridordaydı; her kelimesini duydu.');
      p.push('Üç kapı. Hâlâ bu evdeyim. Babam beni yukarı, o odaya yolladı.');
      return p.join(' ');
    },
  };
})();

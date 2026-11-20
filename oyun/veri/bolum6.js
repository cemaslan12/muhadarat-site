/* =========================================================================
   ALTINCI BÖLÜM: İKİ ENGEREK
   Biçim bolum1.js'teki gibidir.
   Roman: s. 147-175 (Perihan ile Süha'nın yakalanması, Süha'nın yalvarışı, "Süha'ya varacaksın",
   Nimet'in kovulması, iç güveyi teklifi, resmin yakılması).
   BÖLÜMÜN TEK SORUSU: "Bir kapıyı açtım ve görmemem gereken bir şey gördüm. Gördüğümü biliyorlar.
   Beni susturmanın yolunu arıyorlar: Süha Bey'e vermek. Babam kararını vermeden bu sırrı ne yapacağım,
   ve kimi tanık olarak yanımda tutabileceğim?"
   Feride o kapıyı dinlemek için değil, babası yolladığı için açar. Sırrı ne yaparsa yapsın bir bedeli var.
   Konan bayraklar: bilgi_sir, yakalama_sonrasi (sustu/baba/munevver/calibe), baba_sarsildi, sir_munevver,
   suha_itiraf (ret/sartli/merhamet), dayi_cevap, nimet_gitti, delil_dugme, mekan_b6 (salon/kenar/kuytu),
   reftar_tanik, icguveyi_cevap, resim (yakti/sakladi).
   Derinleştirmede eklenen bayraklar (14 Kasım 2026):
     mendil_harf (F/S/M): Süha gelmeden işlenen mendilin harfi. S: 7. bölümde Şefik'e verilebilir.
       M: Nimet giderken Münevver Hanım'a götürür.
     munevver_lamba: sır Münevver Hanım'a ulaştıysa her gece penceresinde lamba yanar.
     nimet_orgu (anne/sessiz): son gece saç örülürken.
     nimet_veda (bilezik/sarildi): kapıdaki veda.
     baba_nimet (soyledi/sustu): salonda babaya Nimet'i anmak.
     halim_not: defterdeki notun altına bir satır teşekkür.
   Yan olaylardan:
     asci_tanik / asci_bilgi: aşçı kadın, efendi yokken doktorun arabasını arka sokakta gördüğünü söyler.
     sefik_resim: Şefik'in yaptığı resim Feride'de.
     nimet_haber: Nazlı ağzından kaçırır; Feride Nimet'i önceden uyarır (düğme kesinleşir).
     piyano_b6 (ninni/kapali), madalyon_b6 (acik/sakli; seçim değil, 5. bölümdeki karardan türer), madam_soz, madam_orgu.
   Tur 10 düzeltmeleri: açılış 5. bölümün sonuna uyduruldu (teneke vapur, bürümcük); aşçı görev 1-7,
   Nazlı görev 2-3 arasında açık; yeni bayrak yok.
   Erken sonlar (Doktorun Hanımı, İç Güveyi) bu sürümde yazılmadı; iki teklif de reddedilir.
   ========================================================================= */
window.BOLUMLER = window.BOLUMLER || {};

(function () {
  const aleyhte = (S) => S.v.dedikodu >= 3 || S.v.itibar < 40;
  // 3. bölümde ağır bedel: haberci cezalı
  const nimetCezali = (S) => S.bayrak.bedel === 'agir' && S.bayrak.haberci === 'nimet';
  const madamCezali = (S) => S.bayrak.bedel === 'agir' && S.bayrak.haberci === 'madam';

  window.BOLUMLER[6] = {
    no: 6,
    ad: 'İki Engerek',
    ilkFaz: 'A',
    baslangic: 'konak_sofa',

    fazlar: {
      A: {
        mekanlar: ['konak_sofa', 'fazila_oda', 'calibe_oda', 'buyuk_salon', 'mutfak', 'selamlik_kapisi', 'josephine_oda'],
        baglanti: {
          konak_sofa: ['fazila_oda', 'calibe_oda', 'buyuk_salon', 'mutfak', 'selamlik_kapisi'],
          fazila_oda: ['konak_sofa', 'josephine_oda'], josephine_oda: ['fazila_oda'],
          calibe_oda: ['konak_sofa'], buyuk_salon: ['konak_sofa'],
          mutfak: ['konak_sofa'], selamlik_kapisi: ['konak_sofa'],
        },
      },
    },

    gorevler: [
      /* 0 */ { metin: 'Babam "Git, anneni çağır" dedi. Perihan Hanım\'ın odasına çık.', ipucu: 'Odası sofadan çıkılıyor.' },
      /* 1 */ { metin: 'Gördüğün şeyle ne yapacağına karar ver. Odana çık.', ipucu: 'Gece oldu.' },
      /* 2 */ { metin: 'İki gün sonra. Odandasın; kapı vuruluyor.', ipucu: 'Odama çıkmalıyım.' },
      /* 3 */ { metin: 'Babam seni salonda bekliyor.', ipucu: 'Perihan Hanım haberi getirdi: babam kararını vermiş.' },
      /* 4 */ { metin: 'Nimet sandığıyla kapıda. Sofaya in.', ipucu: 'Sofada sesler var.' },
      /* 5 */ { metin: 'Konak daraldı. Bu hafta kime sığınacağını seç.', ipucu: 'Babam akşamları salonda. Şefik\'in dersi selamlık kapısında. Hatice mutfağın önünde ağlıyor.' },
      /* 6 */ { metin: 'Babam yeni bir karar vermiş. Salona in.', ipucu: 'Babam ve Perihan Hanım salonda.' },
      /* 7 */ { metin: 'Odana çık. Çekmecende bir resim var.', ipucu: 'Soba yanıyor. Madam odamda.' },
    ],

    kisiler: function (S) {
      const g = S.gorev;
      return {
        konak_sofa: g === 4 ? ['mehves', 'sefik'] : ((g === 2 || g === 3) ? ['mefharet'] : []),
        fazila_oda: g === 7 ? ['josephine', 'resim'] : ['resim'],
        josephine_oda: (g === 5 || g === 6) ? ['josephine'] : [],
        calibe_oda: [],
        buyuk_salon: g === 5 ? ['sai'] : ((g === 3 || g === 6) ? ['sai', 'calibe'] : (g === 4 ? ['piyano'] : [])),
        mutfak: g === 5 ? ['reftar', 'asci'] : ['asci'],
        selamlik_kapisi: (g === 3 || g === 5) ? ['sefik'] : [],
      };
    },

    sohbet: function (S, kim) {
      const g = S.gorev;
      switch (kim) {
        case 'resim':
          if (g >= 5) return ['Annemin resmi. Nimet her cuma camını silerdi. Bu cuma ben sileceğim.'];
          return ['Annemin resmi. Sen bu evde neler gördün anne? Ben bugün bir şey gördüm.'];
        case 'asci':
          if (g >= 6) return [['asci', 'Nimet\'in yeri boş küçük hanım. Yirmi yıl şu ocağın başında beraber çay içtik. Çorban sıcak; onu iç.']];
          return [['asci', 'Küçük hanım, bu evde herkesin kapısı kapalı bu günlerde. Çorban sıcak; onu iç.']];
        case 'josephine':
          if (g === 7) return [['josephine', 'Buradayım Feride Hanım.']];
          return [['josephine', 'Şefik Bey\'in yakası yine sökülmüş. O çocuk gömlekle değil, ağaçla giyiniyor.']];
        case 'sai': return [['sai', 'Gel kızım.', 'ciddi']];
        case 'calibe': return [['calibe', 'Otur kızım. Ayakta durma; baban seninle konuşacak.', 'gulumser']];
        case 'mefharet': return [['mefharet', 'Bebeğimi uyutuyorum. Gürültü yapma.']];
        case 'piyano': return ['Piyano. Kapağında parmak izlerim duruyor; silen olmamış.'];
        case 'sefik':
          if (g === 5) return [['sefik', 'Abla, ders başlıyor. Sen kapının yanında bekler misin?']];
          return [['sefik', 'Abla, boyalarım kuruyunca sana bir resim daha yapacağım. Bu sefer denizli.', 'sevincli']];
        case 'reftar': return [['reftar', 'Bir şey istemem küçük hanım.', 'somurtkan']];
        case 'mehves': return [['mehves', 'Ağlama hanımcığım. Ben ağlamıyorum, bak.']];
      }
      return null;
    },

    acilis: [
      { kart: 'ALTINCI BÖLÜM\nİki Engerek', alt: 'Güz.\nNişan bozulalı beş buçuk ay.' },
      { kiyafet: 'ev', kartsiz: true, kilit: 'Evdesin: gündelik kıyafetin.' },
      { arkaplan: 'kabul_gunu' },
      { goster: ['hanimlar'] },
      ['h1', 'Sait Efendi\'nin konağından haber alan var mı?'],
      ['h2', 'Kapısı kapandı. Kalfaları bile konuşmuyor.'],
      { eger: aleyhte, ise: [['h4', 'Kapısını kapayan evin içi temiz olmaz.']], degilse: [['h3', 'Kızcağız edebinden odasından çıkmıyormuş.']] },
      {
        eger: (S) => S.bayrak.remzi_hediye === 'kabul',
        ise: [['h2', 'Tacir hanımının yelpazesini almış ama.']],
        degilse: [{ eger: (S) => S.bayrak.remzi_hediye === 'sart', ise: [['h2', 'Tacir hanımına "kardeşimle alan gelsin" demiş.']], degilse: [['h2', 'Tacir hanımının yelpazesini geri çevirmiş.']] }],
      },
      ['h4', 'Bazı konakların kapısı kapandıkça sesi artar.'],
      { temizle: true }, { arkaplan: 'mutfak' },
      ['hizmetci', 'Doktor beyin kapısı kapalı, küçük hanımınki kapalı, hanımefendininki kapalı. Bu evde açık kapı kalmadı.'],
      ['usak', 'Sus. Hatice duyar.'],
      { temizle: true }, { arkaplan: null },
      'Babamın erken döndüğü o öğlen. Şefik\'in teneke vapuru halıda, benim bürümcüğüm sofrada kaldı; babam beni yukarı yolladı: "Git, anneni çağır."',
    ],

    olaylar: [
      /* ---------- Kapı (roman s. 148-149) ---------- */
      {
        id: 'b6_kapi', mekan: 'calibe_oda', tetik: 'giris', kosul: (S) => S.gorev === 0,
        sahne: [],
        adimlar: [
          'Merdiveni çıktım. On dört basamak; çocukken sayardım. Bugün de saydım, neden bilmem.',
          'Üst kat sessizdi. Hatice\'nin kapı önündeki iskemlesi boştu. Bu saatte orada hep biri olur.',
          ['ic', 'Kimse yok. Biri herkesi başka bir işe yollamış gibi.'],
          'Sarı odanın kapısı kapalıydı. İçeride bir ses vardı; sonra kesildi. Usulca vurdum. Cevap gelmedi.',
          'Aşağıdan babamın sesi geldi: "Nerede kaldınız?" Elim tokmakta durdu. Çağrılmadan girilmeyen kapı. Ama beni yollayan bu evin efendisi.',
          'Açtım.',
          { goster: ['calibe', 'saskin'] }, { goster: ['suha'] },
          'Perihan Hanım ile Süha Bey. Bir süt kardeşin durmayacağı kadar yakın duruyorlardı; kapı açılınca birbirlerinden kopar gibi ayrıldılar.',
          'Bir an. Üçümüz de kıpırdamadık. Perihan Hanım\'ın eli yakasındaydı. Süha Bey pencereye döndü; yalnız ensesini gördüm.',
          ['ic', 'Bağırma. Kaçma. Yüzünü oynatma. Gördüğünü gösterirsen bu odadan aynı kız olarak çıkamazsın.'],
          ['f', 'Babam aşağıda sizi istiyor efendim.'],
          'Hiçbir şey görmemiş gibi söyledim. Sesim kendi sesimdi; buna ben de şaştım. Kapıyı çektim. Tokmak avucumda buz gibiydi.',
          'Merdivenden nasıl indiğimi bilmiyorum. Basamakları saymadım.',
          { temizle: true },
          ['ic', 'İki engerek. Biri babamın karısı. Öbürü bana nikâh teklif eden adam.', 'ofkeli'],
          { arkaplan: 'yemek_salonu' },
          { goster: ['sai', 'gulumser'] },
          'Aşağıda Şefik kırmızı bacalı vapurunu halının üstünde yüzdürüyordu. Babam öbür paketlerin sicimini kendi eliyle çözüyordu; çocuk gibi.',
          ['sai', 'Bürümcüğünü de al kızım; ortada kalmasın. Kışa bir şey diktirirsin.', 'gulumser'],
          'Topu tuttum. Parmaklarım katını açamadı.',
          { goster: ['calibe', 'gulumser'] },
          'Perihan Hanım geldi. Saçı düzgündü, yakası düzgündü, gülümsemesi yerindeydi.',
          ['calibe', 'Efendi, yine çarşıyı taşımışsınız. Bana da var mı?', 'gulumser'],
          ['sai', 'Sana Şam ipeklisi. Süha da yukarıdaymış; bana hiç haber vermiyorsunuz.'],
          ['calibe', 'Başım ağrıyordu efendi; bir bakıversin dedim. Şimdi iniyor.', 'gulumser'],
          ['ic', 'Yalanı bir bardak su uzatır gibi uzattı. Babam da içti.'],
          'İpekliyi omzuna tuttu, babama döndü, güldü. Sonra bana baktı. Bir kere. O bakış her şeyi söyledi: gördüğümü biliyor.',
          ['calibe', 'Feridecim, rengin uçmuş. Merdiveni koşarak mı indin kızım?', 'gulumser'],
          ['f', 'Hayır efendim. Yavaş indim.'],
          'Akşam yemeğinde Süha Bey karşımda oturdu. Babam ona kendi eliyle et koydu. Ben kaşığı ağzıma götürdüm, indirdim; çorba boğazımdan geçmedi.',
          { eger: (S) => S.bayrak.ilac === 'icti', ise: [['ic', 'Bu adamın yazdığı şurubu aylarca içtim. Bu adam nabzımı tuttu.']], degilse: [] },
          ['sai', 'Yemiyorsun Feride.'],
          ['calibe', 'Genç kız iştahı efendi; bir gün var, bir gün yok.', 'gulumser'],
          ['suha', 'İsterseniz yarın bir bakayım enişte. Renginde bir solgunluk var.'],
          ['f', 'İstemez efendim. İyiyim.'],
          'Fazla çabuk söyledim. Babam şaştı; Perihan Hanım bardağına su doldurdu. Eli titremiyordu. Benimkiler dizimin üstündeydi; sofra örtüsünün altında.',
          ['ic', 'Babam gülüyor. Karısına ipekli almış, kayınbiraderine et koyuyor. Bu sofrada her şeyi bilen üç kişi var; bilmeyen tek kişi, sofranın sahibi.'],
          'Şefik masanın altından elimi tuttu. Eli sıcaktı. Benimki değildi.',
          { temizle: true }, { arkaplan: null },
          { bayrak: { bilgi_sir: true } }, { etki: { calibe_suphe: 1 } },
          { delil: 'Perihan Hanım ile Süha Bey\'i odada, bir süt kardeşin durmayacağı kadar yakın gördüm. Gördüğümü biliyorlar.' },
          { gorev: 1 },
        ],
      },

      /* ---------- Sırla ne yapacağım: bölümün ilk kararı ---------- */
      {
        id: 'b6_gece', mekan: 'fazila_oda', tetik: 'giris', kosul: (S) => S.gorev === 1,
        sahne: ['resim'],
        adimlar: [
          'Gece. Lambayı söndürmedim. Gördüğüm şey gözümün önünden gitmiyor.',
          'Yan odadan babamın öksürüğü geldi. Sonra Perihan Hanım\'ın sesi; tatlı, alçak. Babam güldü.',
          ['ic', 'Susarsam babam aldatılmaya devam edecek. Söylersem, karısını on sekiz yaşındaki kızının sözüyle mi bırakacak? Söylediğim gün bu evde bana kim inanacak?'],
          ['ic', 'Onlar da uyumuyor. Bu gece bu evde üç kişi aynı şeyi düşünüyor: Feride ne yapacak?'],
          'Bürümcük topu masamda duruyor. Katını hâlâ açmadım. Babam onu seçerken beni düşündü; ben ona bakarken sarı odayı düşünüyorum.',
          'Annemin resmine baktım. Bir şey demedi. Bu evde bana akıl verecek kim varsa ya ölü, ya hizmetçi, ya yabancı.',
          { eger: (S) => !!S.bayrak.babaya_soyleme_niyeti, ise: [['ic', 'Nimet\'e "bir gün söyleyeceğim" demiştim. O gün bugün mü?']], degilse: [] },
          {
            soru: 'Gördüm. Biliyorlar. Bu sırrı ne yapacağım?',
            secim: [
              {
                m: 'Susmak. Babamı bu sözle yıkamam.', etki: { vakar: 2 }, bayrak: { yakalama_sonrasi: 'sustu' },
                iz: 'Sustun. Sır sende; onlar bunu bilmiyor, yalnız korkuyor.',
                adimlar: [
                  ['ic', 'Susacağım. Bu sır benim elimde bir bıçak değil; babamın sırtında bir bıçak. Çekersem kanar.'],
                  { kart: 'Sabah.' },
                  { goster: ['calibe', 'gulumser'] },
                  'Sabah kapım vuruldu. Perihan Hanım. Odama yılda bir girer. Kolunda kendi şallarından biri vardı: Lahor şalı, saçakları ipek.',
                  ['calibe', 'Güz geldi kızım; üşüyorsundur dedim. Bu sende kalsın. Aklı başında kızlar her şeyin kıymetini bilir.', 'gulumser'],
                  ['ic', 'Şal değil bu; bir fiyat. Susmamın karşılığını peşin ödüyor.'],
                  ['f', 'Teşekkür ederim efendim. Benim şalım var.'],
                  'Şalı iskemlenin arkalığına bıraktı, gitti. Akşama kadar orada durdu; dokunmadım. Akşam Hatice gelip aldı.',
                  { gizle: 'calibe' },
                  ['ic', 'Almadım. Şimdi neden sustuğumu bilmiyor: korkudan mı, hesaptan mı? Bilmemek onu uyutmayacak.'],
                ],
              },
              {
                m: 'Sabah babama söylemek.', etki: { baba_guven: -8, isyan: 2, calibe_suphe: 3 }, bayrak: { yakalama_sonrasi: 'baba' },
                iz: 'Babana söyledin. İnanmadı; ama o gece lambası sabaha kadar yandı.',
                adimlar: [
                  { kart: 'Sabah.' },
                  'Babam sabah kahvesini yalnız içer. Fincanı elindeydi. Kapıyı arkamdan kapadım; ellerimi önümde kavuşturdum ki titrediği görülmesin.',
                  { goster: ['sai', 'ciddi'] },
                  ['f', 'Efendim, dün beni yukarı yolladınız. O odada annemle Süha Bey\'i gördüm. Bir kardeşle durulmayacak kadar yakın.'],
                  'Babamın yüzü kül gibi oldu. Fincan tabağına çarptı. Perihan Hanım\'ı çağırdı.',
                  { goster: ['calibe', 'saskin'] },
                  ['calibe', 'Süt kardeşimle beni mi? Efendi, bu kız bana bunu da mı söyleyecekti?', 'saskin'],
                  'Ağladı. Bayılacak gibi oldu. Babam koluna girdi; onu mindere kendi oturttu.',
                  ['sai', 'Bu sözü bir daha ağzına alma Feride.', 'ciddi'],
                  ['sai', 'Sen yalan söylemezsin; bunu bilirim. Ama yanlış görmüş olabilirsin. Yanlış görmüş ol kızım.', 'mahzun'],
                  ['ic', 'Emretmiyor. Yalvarıyor.'],
                  {
                    eger: (S) => S.deliller.length >= 4 || !!S.bayrak.baba_biliyor || !!S.bayrak.baba_ada_supheli,
                    ise: ['Ama bildiklerimi saydım: imzasız pusulayı, Ada\'daki lambayı, reçetesiz şişeyi. Babam susturdu. O gece odasının ışığı sabaha kadar yandı.', { bayrak: { baba_sarsildi: true } }],
                    degilse: ['Elimde başka bir şey yoktu. Babam kapıyı örttü.'],
                  },
                  'Perihan Hanım babamın omzunun üstünden bana baktı. Gözü kupkuruydu.',
                  { gizle: 'sai' }, { gizle: 'calibe' },
                ],
              },
              {
                m: 'Nimet\'le Münevver Hanım\'a iki satır yollamak.', etki: { mehves: 1, munevver: 1 }, bayrak: { yakalama_sonrasi: 'munevver', sir_munevver: true, munevver_lamba: true },
                iz: 'Sır artık Münevver Hanım\'da da var.',
                adimlar: [
                  'Kâğıdı üç kere yazdım, ikisini yırttım. Gördüğümü yazamam: yazarsam o kâğıt bir gün birinin elinde babamın yüzüne tutulur.',
                  '{i}"Hanımefendi; bu evde bir şey gördüm. Yazamam. Yalnız bilin: bana o adamı vermek isteyeceklerse sebebi budur. Feride."{/i}',
                  'Nimet kâğıdı aldı, koynuna koydu, bir şey sormadı. Dönene kadar merdiven başında bekledim; her kapı sesinde yüreğim ağzıma geldi.',
                  { goster: ['mehves'] },
                  ['mehves', 'Eline verdim hanımcığım. Okudu; rengi attı. "Anladım" dedi. Başka bir şey demedi. Kâğıdı gözümün önünde mangala attı.'],
                  ['mehves', 'Bir de şunu dedi: "Bu geceden sonra üst kat penceremde lamba yanacak. Kızım baktıkça yalnız olmadığını bilsin."', 'kararli'],
                  { gizle: 'mehves' },
                  'O gece perdeyi araladım. Yan konağın üst katında bir lamba yanıyordu.',
                  ['ic', 'Yazmadım; ama anladı. Bu evin dışında bir kişi daha biliyor. Nimet yine benim için kapıya çıktı; bir gün bunun hesabını ondan sorarlar.'],
                ],
              },
              {
                m: 'Merdivende Perihan Hanım\'ın yolunu kesmek: "Biliyorum."', etki: { isyan: 2, calibe_suphe: 3 }, bayrak: { yakalama_sonrasi: 'calibe' },
                iz: 'Perihan Hanım\'ın yüzüne söyledin. Bir süre Şefik\'e ilişmedi.',
                adimlar: [
                  { kart: 'Sabah.' },
                  'Sabah merdiven sahanlığında bekledim. Yalnız iniyordu; eteğini tutmuş, bir şey mırıldanıyordu. Beni görünce gülümsedi.',
                  { goster: ['calibe', 'gulumser'] },
                  ['calibe', 'Erkencisin kızım. Yoluma mı çıktın?', 'gulumser'],
                  ['f', 'Babam sizi beklerken siz kimi bekliyordunuz efendim?', 'ofkeli'],
                  'Rengi attı. Tırabzanı tuttu.',
                  ['calibe', 'Rüya görmüşsün kızım.', 'saskin'],
                  ['f', 'Rüyaysa uyanınca unuturum. Şefik\'e ilişmediğiniz sürece.'],
                  'Bir basamak aşağıdaydım; yine de o bana aşağıdan bakıyor gibiydi. Sonra gülümsemesi geri geldi. İnce, yavaş.',
                  ['calibe', 'Şefik benim de oğlumdur. Sen kendi işine bak.', 'soguk'],
                  { gizle: 'calibe' },
                  'O akşam sofrada Şefik\'in tabağına eti kendi eliyle koydu. Şefik bana baktı; ne olduğunu anlamadı.',
                  ['ic', 'Onu korkuttum. Korkan yılan sokar. Beni sokamazsa yanımdakini sokar.'],
                ],
              },
            ],
          },
          { kart: 'İki gün sonra.' },
          'Perihan Hanım sokakta. Madam Şefik\'le Beyoğlu\'na resim takımı almaya gitti. Yalnızım; mendil işliyorum.',
          { gorev: 2 },
        ],
      },

      /* ---------- Süha diz çöküyor (roman s. 151-158) ---------- */
      {
        id: 'b6_suha', mekan: 'fazila_oda', tetik: 'giris', kosul: (S) => S.gorev === 2,
        sahne: ['resim'],
        adimlar: [
          'Pencerenin önündeyim. Kucağımda kasnak, kasnakta beyaz bir mendil. İğne batıyor, çıkıyor; gözüm işte değil.',
          'Ev o kadar sessiz ki sobanın çıtırtısını duyuyorum. Mendile bir damla düştü. Sildim; işlemeye devam ettim.',
          {
            soru: 'Mendilin köşesi boş. İğne elimde.',
            secim: [
              {
                m: '"F." Kendi adım.', etki: { vakar: 1 }, bayrak: { mendil_harf: 'F' },
                adimlar: [['ic', 'Kendi adım. Bu evde bana kalan bir o var; onu da ben işleyeyim.']],
              },
              {
                m: '"Ş." Şefik için.', bayrak: { mendil_harf: 'S' },
                adimlar: [['ic', 'Şefik için. Cebinde taşısın; bir gün yanında olamazsam bu olsun.']],
              },
              {
                m: '"M."', etki: { mukaddem: 2, isyan: 1 }, bayrak: { mendil_harf: 'M' },
                adimlar: [['ic', 'Elim kendi kendine yazdı. Sökmedim.']],
              },
            ],
          },
          'Merdivende ayak sesi. Nimet\'in adımı değil: ağır, acele eden bir adım. Bu saatte bu katta erkek olmaz.',
          'İğneyi kumaşa sapladım. Kalkmaya vakit bulamadım. Kapı vurulmadan açıldı.',
          { goster: ['suha'] },
          'Süha Bey. Kapıyı arkasından kapadı.',
          ['f', 'Kapıyı açınız beyefendi.'],
          'Açmadı. Kapıyla aramda duruyordu.',
          {
            eger: (S) => S.bayrak.suha_teklif === 'oyaladi',
            ise: [['suha', 'Düşüneceğim demiştiniz. Ben o sözle yaşadım.']],
            degilse: [{ eger: (S) => S.bayrak.suha_teklif === 'baba', ise: [['suha', 'Beni eniştenize şikâyet ettiniz. Hakkınızdı.']], degilse: [['suha', 'Beni bir kere kovdunuz. Bir kere dinleyin.']] }],
          },
          {
            eger: (S) => S.bayrak.mendil_harf === 'M',
            ise: ['Gözü kasnaktaki harfe takıldı.', ['suha', 'Demek hâlâ o.'], 'Kasnağı ters çevirdim.'],
            degilse: [{ eger: (S) => S.bayrak.mendil_harf === 'S', ise: [['suha', 'Kardeşiniz için her şeyi yaparsınız, biliyorum.'], ['ic', 'Biliyor. Bildiği şeyi bir gün kullanır.']], degilse: [] }],
          },
          'Yere, önüme diz çöktü. Ağlıyordu. Sahiden ağlıyordu; omuzları sarsılıyordu.',
          ['suha', 'Gördüğünüz şeye kendi isteğimle girmedim. O kadından tiksinirim. Ellerim kirli olsa bile kalbim temizdir. Ben sizi severim; merhamet ediniz.'],
          ['suha', 'Bu eve geldiğimde gençtim, muhtaçtım. O kadın bana ekmeği de günahı da aynı tabakta verdi. Geri çevirecek gücüm yoktu. Sonra alıştım; en kötüsü bu.'],
          ['ic', 'Belki doğru söylüyor. Ama başına geleni başkasına yapmak, başına geleni silmez.'],
          ['f', 'Ayağa kalkınız beyefendi. Bu odada bu hâlde durmanız ikimize de yakışmaz.'],
          ['suha', 'Kalkmam. Beni alırsanız o kadından kurtulurum. Siz de bu evden kurtulursunuz. İkimiz de kazanırız.'],
          ['ic', 'Demek sevgi dediği şey bir alışveriş. Kendi kurtuluşunun parasını benden istiyor.'],
          { eger: (S) => S.bayrak.yakalama_sonrasi === 'baba', ise: [['suha', 'Babanıza söylediniz. İnanmadı. İnanmayacak.']], degilse: [] },
          'Dizlerinin üstünde bir karış yaklaştı. İskemlemi geri çektim; arkam duvardı.',
          ['ic', 'Kapıyla aramda duran o. Ağlayan o; güçlü olan da o.'],
          {
            soru: 'Süha Bey önümde diz çökmüş, ağlıyor.',
            secim: [
              {
                m: '"Git, Allah\'tan af dile; benden değil."', etki: { suha: -4, vakar: 1, isyan: 1 }, bayrak: { suha_itiraf: 'ret' },
                iz: 'Süha Bey\'i reddettin. Lanet okuyarak çıktı.',
                adimlar: [
                  ['f', 'Kurbanınızın evladından yardım istemek deliliktir! Ben sizin ne karınız ne bacınızım. On sekiz yaşında bir kızdan medet ummakla yanılmışsınız.', 'ofkeli'],
                  ['suha', 'Sebep o çocuk, değil mi? Kenan.'],
                  ['f', 'Gönlüm kimsede olmasa da sizi istemem.'],
                  'Yüzü değişti. Gözyaşı kurumadan öfke geldi; ikisi aynı yüzde durdu.',
                  ['suha', 'Beni böyle kovan kız bir gün başka türlü konuşur.'],
                  ['ic', 'Demin ağlayan adamla bu adam aynı adam. İkisini de gördüm.'],
                ],
              },
              {
                m: '"Merhamet istiyorsan önce Ada\'yı düzelt. O geceyi babama sen anlat."', etki: { isyan: 1 }, bayrak: { suha_itiraf: 'sartli' },
                iz: 'Süha Bey\'e bir şart koştun. "Karşılıksız değil" dedi.',
                adimlar: [
                  ['f', 'Merhamet istiyorsanız önce Ada\'yı düzeltin. O gece o şişeyi kimin açtığını babama siz söyleyin.'],
                  'Ağlaması kesildi. Bana başka bir gözle baktı: pazarlık eden bir adamın gözüyle.',
                  ['suha', 'Bunu yaparsam o kadın beni mahveder.'],
                  ['f', 'Öyleyse benden bir şey istemeyin.'],
                  'Kalktı. Kapıda durdu. Döndü.',
                  ['suha', 'O gecenin dili bende. Hatice\'ninki de. Ama karşılıksız değil.'],
                  ['ic', 'Bir tanık. Dünyanın en kirli tanığı. Ve fiyatı ben.'],
                ],
              },
              {
                m: '"Size acıyorum. Allah affetsin."', etki: { suha: 6 }, bayrak: { suha_itiraf: 'merhamet' },
                iz: 'Acıdın. O bunu bir kapı aralığı saydı.',
                adimlar: [
                  ['f', 'Size acıyorum. Allah affetsin.'],
                  'Ellerime kapanacak oldu. Elimi çektim; kasnağı ikimizin arasına tuttum.',
                  ['suha', 'Bu bana yeter. Şimdilik.'],
                  ['ic', '"Şimdilik." Acımak ona bir kapı araladı. Kapıyı kapatamıyorum.', 'mahzun'],
                ],
              },
            ],
          },
          ['suha', 'Babanla konuşacağım. Gerekirse yalan söyleyeceğim, oyun kuracağım. Sizi alacağım.'],
          'Dizindeki tozu silkti. Kapıdan çıkarken ağlayan adamdan eser kalmamıştı.',
          { gizle: 'suha' },
          'Kasnağı aldım. Ellerim öyle titriyordu ki ipliği iğneye geçiremedim. Kalktım, kapıyı sürgüledim. Bu evde ilk defa.',
          // Perde arkası (roman s. 149-151, 159-162)
          { temizle: true },
          { kart: 'O akşam, sarı odada.' },
          { goster: ['calibe', 'ofkeli'] }, { goster: ['suha'] },
          ['calibe', 'Mahvolduk! İki gündür aynı şeyi söylüyorum.', 'ofkeli'],
          {
            eger: (S) => S.bayrak.yakalama_sonrasi === 'baba',
            ise: [['calibe', 'Kız babasına söyledi. Efendi inanmadı; ama o günden beri gözümün içine bakıyor.', 'soguk']],
            degilse: [{
              eger: (S) => S.bayrak.yakalama_sonrasi === 'calibe',
              ise: [['calibe', 'Yüzüme karşı "biliyorum" dedi. Yüzüme!', 'ofkeli']],
              degilse: [{
                eger: (S) => S.bayrak.yakalama_sonrasi === 'sustu',
                ise: [['calibe', 'Şalı almadı. Susuyor ve bakıyor. Konuşsa bundan iyiydi.', 'soguk']],
                degilse: [['calibe', 'Kız bana bakıyor. Susuyor ve bakıyor. Konuşsa bundan iyiydi.', 'soguk']],
              }],
            }],
          },
          ['suha', 'Yiğidin silahı inkârdır demiştin. Daha iyisi var: kızı en nefret ettiği adamla evlendirmeye kalk. Ondan kaçmak için ne dersen razı olur. Ya da o adama varır ve susar.'],
          ['calibe', 'O adam sen misin?', 'sinsi'],
          ['calibe', 'Benim olan benim kalır Süha. Kalmazsa ezerim.', 'soguk'],
          ['suha', 'Efendiye şunu söyle: "Sizin namusunuz için kendi kardeşimin başını yakmaya razıyım."'],
          ['calibe', 'Çok ustalaşmışsın.', 'soguk'],
          ['suha', 'Hocamız sizsiniz.'],
          { eger: (S) => !S.bayrak.fevkiye_sustu && !!S.bayrak.gizli_nikah, ise: [['calibe', 'Nabi\'den öğrendim: kız Leyla\'nın konağında Münevver\'le bir odaya kapanmış. Bunu da efendiye taşırım.', 'sinsi']], degilse: [] },
          ['pa', 'Süha Bey\'in asıl niyeti kızı gerçekten almak ve bu kadından kurtulmak. Bunu Perihan Hanım\'a kendi eliyle yaptıracak.'],
          { temizle: true },
          { kart: 'Ertesi gün.' },
          'Kapım sürgülüydü. Açtım.',
          { goster: ['calibe', 'gulumser'] },
          ['calibe', 'Kapını sürgülemeye başlamışsın kızım. Bu evde kimden korkuyorsun?', 'gulumser'],
          ['calibe', 'Müjde kızım. Baban seni Süha Bey\'e münasip gördü. Salonda bekliyor.', 'gulumser'],
          ['f', 'Hayır.'],
          'Yalnız bunu dedim. Gülümsemesi kıpırdamadı; çıktı.',
          { gizle: 'calibe' },
          ['ic', 'Zehir gibi güldüm. Beni kendi süt kardeşine isteyen kadınla o adam arasında ne olduğuna kim inanır?'],
          { gorev: 3 },
        ],
      },

      /* ---------- "Süha'ya varacaksın" (roman s. 162-168) ---------- */
      {
        id: 'b6_dayi', mekan: 'buyuk_salon', tetik: 'giris', kosul: (S) => S.gorev === 3,
        sahne: [{ id: 'sai', ifade: 'ciddi' }, { id: 'calibe', ifade: 'gulumser' }],
        adimlar: [
          ['sai', 'Feride! Feride!', 'ciddi'],
          'Bağırarak başladı. Yüzümü görünce sesi yumuşadı.',
          'Perihan Hanım pencere önünde, elinde nakış. İğnesi durmuyor. Babam ayakta; elleri arkasında, parmakları birbirini sıkıyor.',
          ['sai', 'Kızım, Süha Bey seni istiyor. Annen de razı. Bir kıza eş seçmek babanın hakkıdır, bilirsin.'],
          ['f', 'Şüphe yok efendim.'],
          { eger: (S) => S.bayrak.yakalama_sonrasi === 'baba', ise: [['ic', 'Ona söyledim. Yine de beni o adama veriyor. Ya inanmadı, ya inanmamayı seçti.', 'mahzun']], degilse: [['ic', 'Söyleyemem. Söylesem, "kocadan kaçmak için iftira ediyor" derler. Tuzak buymuş.']] },
          ['calibe', 'Süha\'yı küçüklüğünden bilirim efendi. Feride\'yi el üstünde tutar. Hem yabancı değil; kızımız gözümüzün önünde kalır.', 'gulumser'],
          ['ic', 'Gözünün önünde. Susup susmadığımı her gün görebileceği yerde.'],
          ['sai', 'Hekim adam. Evi var, itibarı var. Yaşı biraz büyük; ama olgun koca kıza siper olur derler.'],
          ['ic', 'Biraz. Ben doğduğumda o, benim şimdi olduğum yaştaydı.'],
          ['sai', 'Hem söz çıktı kızım. Nişanı bozulmuş kıza kapı kolay açılmaz. Süha Bey bunu bile bile istiyor; bu da bir kadirşinaslıktır.', 'mahzun'],
          ['ic', 'Babam bana iyilik ettiğini sanıyor. Ona bunu kim söylettiyse cümleyi de eline vermiş.'],
          'Kapı aralığında Şefik\'in başı göründü. Dizlerim titriyordu; eteğimin içinde titrediler, kimse görmedi.',
          {
            soru: 'Babam karşımda: "Süha Bey\'e varacaksın."',
            secim: [
              {
                m: 'Mantıkla reddetmek: "Ben onu dayım bildim."', etki: { baba_guven: 3, vakar: 2 }, bayrak: { dayi_cevap: 'mantik' },
                iz: 'Babanı kendi sözüyle ikna ettin.',
                adimlar: [
                  ['f', 'Perihan Hanım annemse kardeşi dayımdır; dayıya varılmaz. Dayım değilse, hiçbir şeyim olmayan bir kadının bana seçtiği kocayı kabule mecbur değilim. Ben de kesinlikle istemem.'],
                  'Perihan Hanım\'ın gülümsemesi düştü. İğnesi parmağına battı; belli etmedi. Babam uzun süre sustu.',
                  ['sai', 'Aklın başında oturursan seni istemediğin adama vermem. Yalnız bu yaşa kadar kızarmamış yüzümü kızartma.'],
                  ['f', 'Öyle bir şeyi benim yüzümden görmeyeceksiniz babacığım.'],
                  ['sai', 'Berhudar ol evladım.', 'mahzun'],
                ],
              },
              {
                m: 'Ağlayarak reddetmek.', etki: { baba_guven: 1, sefik: 1 }, bayrak: { dayi_cevap: 'aglayarak' },
                iz: 'Söz bulamadın; ağladın. Baban yumuşadı.',
                adimlar: [
                  ['f', 'İstemem babacığım. İstemem.', 'mahzun'],
                  'Söz bulamadım. Şefik koşup boynuma sarıldı; Madam tutamadı.',
                  ['sefik', 'Ablamı ağlatmayın!', 'aglamakli'],
                  ['sai', 'Zorla güzellik olmaz. Peki.', 'mahzun'],
                  ['calibe', 'Gözyaşıyla iş görmeyi de öğrenmiş.', 'sinsi'],
                ],
              },
            ],
          },
          ['ic', 'Bu kapıyı kapadım. Ama onlar için mesele koca değil; benim susmam. Başka bir yol bulacaklar.'],
          { eger: (S) => !!S.bayrak.baba_sarsildi, ise: ['Babam çıkarken kapıda durdu. Bana değil, Perihan Hanım\'a baktı. Uzun baktı.'], degilse: [] },
          'Babam çıkınca mindere yığıldım. Vücudum buz gibiydi. Madam kapıyı kilitledi.',
          { temizle: true }, { goster: ['josephine'] },
          ['josephine', 'Elleriniz buz. Süha Bey\'i çağıralım mı, bir baksın?'],
          ['f', 'Sakın ha!', 'ofkeli'],
          'Madam yüzüme baktı. Bir şey anladı; ne anladığını sormadım. Kendi şalını omzuma örttü.',
          ['josephine', 'Çağırmıyorum. Ihlamur kaynatacağım. Ben de hekim sayılırım; ıhlamur kadar.'],
          { gizle: 'josephine' },
          {
            eger: (S) => S.bayrak.dayi_cevap === 'aglayarak',
            ise: ['Akşam sofraya indim. İnmesem "hasta" derlerdi; hekim çağırırlardı. Gözlerim şişti; saklamadım.'],
            degilse: ['Akşam sofraya indim. İnmesem "hasta" derlerdi; hekim çağırırlardı. Başım dikti. Perihan Hanım tuzu uzattı; teşekkür ettim. Süha Bey tabağına baktı.'],
          },
          // Nimet'le son gece: saç örgüsü (ek)
          { kart: 'O gece.' },
          { arkaplan: 'fazila_oda' },
          { goster: ['mehves'] },
          {
            eger: nimetCezali,
            ise: ['Nimet\'in yukarı çıkması yasaktı. O gece çıktı. Elinde tarak.'],
            degilse: ['Nimet her gece olduğu gibi tarakla geldi.'],
          },
          ['mehves', 'Otur hanımcığım. Bugün saçın da yorulmuş.'],
          'Örgümü çözdü. Taradı; ağır ağır, hiç acıtmadan. On yedi yıldır böyle tarar.',
          ['mehves', 'Annen Behiye Hanım da tek örgü ördürürdü. "Sıkı ör Nimet" derdi. "Gevşek örgü gün ortasında çözülür; insan da öyle."'],
          ['f', 'Ben bugün çözülmedim Nimet.'],
          ['mehves', 'Çözülmedin. Bütün ev duydu.', 'kararli'],
          {
            eger: (S) => !!S.bayrak.nimet_haber,
            ise: [
              ['f', 'Nimet, Nazlı bir şey söyledi. Sandığını hazırlatacaklarmış.'],
              'Tarak durdu. Bir an. Sonra yine yürüdü.',
              ['mehves', 'Çocuk duyduğunu söyler. Demek sıra bana geldi. İyi ki söyledin hanımcığım; bir işim var, bu evden eli boş çıkmam.', 'kararli'],
            ],
            degilse: [],
          },
          {
            soru: 'Nimet saçımı örüyor. Ayna karşımda; ikimiz de içindeyiz.',
            secim: [
              {
                m: '"Bana annemi anlat."', etki: { mehves: 1 }, bayrak: { nimet_orgu: 'anne' },
                adimlar: [
                  ['mehves', 'Seni doğurduğu gece kucağına verdim. Yumruğunu sıkmış, bırakmıyordun. Güldü. "Bu kız benden inatçı olacak Nimet" dedi. "İyi. İnatçı kız kolay ezilmez."'],
                  'Güldüm. Günlerdir ilk defa.',
                ],
              },
              {
                m: 'Bir şey sormamak; başımı eline yaslamak.', etki: { vakar: 1 }, bayrak: { nimet_orgu: 'sessiz' },
                adimlar: [
                  'Başımı avucuna bıraktım. Avucu nasırlıydı; sabun ve lavanta kokuyordu.',
                  ['mehves', 'Uyu hanımcığım. Ben buradayım.'],
                ],
              },
            ],
          },
          'Örgünün ucunu kurdeleyle bağladı. Düğümü iki kere attı.',
          ['ic', 'Ertesi gece saçımı kim örecek diye düşünmedim. Düşünmek aklıma gelmedi.'],
          { temizle: true }, { arkaplan: null },
          { kart: 'Ertesi gün.' },
          { gorev: 4 },
        ],
      },

      /* ---------- Nimet kovuluyor (roman s. 169): tanığın bedeli ---------- */
      {
        id: 'b6_nimet', mekan: 'konak_sofa', tetik: 'giris', kosul: (S) => S.gorev === 4,
        sahne: ['mehves', 'sefik'],
        adimlar: [
          'Nimet. Sandığı ayağının dibinde, bohçası kolunda. Kapıcı bekliyor.',
          'Feracesini giymiş. Bu evde onu feraceyle yalnız benim yanımda, sokağa çıkarken görürdüm.',
          {
            eger: (S) => !!S.bayrak.nimet_aciga,
            ise: [['mehves', 'Ada\'da adımı verdin ya hanımcığım; o günden beri gün sayıyorlardı. Bugün bitti.']],
            degilse: [{
              eger: (S) => S.bayrak.yakalama_sonrasi === 'munevver',
              ise: [['mehves', 'Yan konağa kâğıt taşıdığımı öğrenmişler. Varsın kovsunlar demiştim; kovdular.']],
              degilse: [['mehves', '"Küçük hanımı sokakta kimlerle görüştürdüğün belli değil" dediler. Yirmi yıl. Bir sandık.']],
            }],
          },
          { eger: (S) => S.bayrak.yakalama_sonrasi === 'calibe', ise: [['ic', 'Şefik\'e dokunamadı. Nimet\'e dokundu.', 'ofkeli']], degilse: [] },
          ['f', 'Nimet...', 'mahzun'],
          ['sefik', 'Nimet dadı gitmesin! Abla, söyle gitmesin!', 'aglamakli'],
          'Babamın odasına koştum. Kapı kapalıydı. Vurdum.',
          ['sai', 'Ev işine annen bakar Feride. Ben karışmam.', 'ciddi'],
          'Kapıyı açmadı. Sesinde öfke yoktu; yorgunluk vardı. Bu daha kötüydü.',
          'Döndüm. Perihan Hanım merdivenin başındaydı. İnmedi; yalnız baktı.',
          ['calibe', 'Yirmi yılın hakkını verdim kızım; eli boş gitmiyor. Ağlama. Sana yeni bir kız buluruz.', 'gulumser'],
          {
            soru: 'Kapıcı sandığın kulpunu tuttu. Bir dakikam var.',
            secim: [
              {
                m: 'Bileziğimi çıkarıp Nimet\'e uzatmak.', etki: { mehves: 1 }, bayrak: { nimet_veda: 'bilezik' },
                adimlar: [
                  'Kolumdaki burma bileziği çıkardım. Annemden kalan üç bilezikten biri.',
                  ['mehves', 'Almam hanımcığım. Kapıdan çıkmadan "çaldı" derler; sandığımı sokakta açtırırlar.'],
                  'Haklıydı. Bileziği geri taktım. Örgümün ucundaki kurdeleyi çözdüm. Onu aldı; koynuna koydu.',
                ],
              },
              {
                m: 'Herkesin önünde boynuna sarılmak.', etki: { mehves: 1, isyan: 1 }, bayrak: { nimet_veda: 'sarildi' },
                adimlar: [
                  'Sarıldım. Sabun ve lavanta kokuyordu. Ferace kumaşı yanağıma sert geldi.',
                  ['calibe', 'Hizmetçiyle kapı önünde sarmaş dolaş. Efendi görmesin kızım.', 'gulumser'],
                  ['f', 'Görsün efendim.'],
                ],
              },
            ],
          },
          {
            eger: (S) => ((S.bag && S.bag.mehves) || 0) >= 2 || !!S.bayrak.nimet_tanik || !!S.bayrak.nimet_haber,
            ise: [
              'Elimi tuttu. Avucuma düğümlü bir bez sıkıştırdı.',
              { goster: ['dugme'] },
              ['mehves', '{i}(Fısıltıyla){/i} Hanımefendinin mücevher çekmecesinin dibinde buldum. Çiçekli bir yelek düğmesi. O yelek yıllarca benim elimden geçti: Süha Bey\'in yeleği. Sakla.'],
              { gizle: 'dugme' },
              { bayrak: { delil_dugme: true } },
              { delil: 'Perihan Hanım\'ın mücevher çekmecesinin dibinden çıkan çiçekli yelek düğmesi: Süha Bey\'in yeleğinden. Nimet verdi.' },
            ],
            degilse: ['Elimi tuttu. Bir şey söyleyecek oldu; kapıcıya baktı, sustu.'],
          },
          {
            eger: (S) => S.bayrak.mendil_harf === 'M',
            ise: ['İşlediğim mendili bohçasının arasına koydum.', ['f', 'Münevver Hanım\'a ver. Bir şey söyleme.']],
            degilse: [],
          },
          {
            eger: (S) => S.bayrak.gizli_nikah === 'delil' || !!S.bayrak.sir_munevver,
            ise: [['mehves', 'Münevver Hanımefendi\'nin kapısı bana açık. Orada beklerim. Beni çağırdığın gün gelir, ne gördüysem söylerim.']],
            degilse: [['mehves', 'Nereye gideceğimi bilmiyorum. Ama seni bulurum hanımcığım.']],
          },
          'Şefik\'in önüne çömeldi. Yakasını düzeltti; her sabah yaptığı gibi.',
          ['mehves', 'Küçük bey, ablanın sözünden çıkma. Geceleri üstünü açma. Ben yine gelirim; sen büyümüş olursun.'],
          ['sefik', 'Büyümeyeceğim. Sen gelene kadar büyümeyeceğim.', 'aglamakli'],
          'Sonra bana döndü. Ağlamıyordu. Yirmi yılda onu bir kere ağlarken gördüm: annemin öldüğü gün.',
          ['mehves', 'Saçını sıkı ör hanımcığım. Annenin sözünü unutma.', 'kararli'],
          'Kapıcı sandığı omuzladı. Nimet arkasına bakmadan yürüdü; bakarsa gidemezdi, bildim.',
          'Kapı kapandı. Şefik eteğime yapıştı; ikimiz de kıpırdamadık. Sandığın yerinde, halıda dört köşe bir iz kaldı.',
          'Saçımı on yedi yıldır o örerdi. Dün gece de o örmüştü.',
          { bayrak: { nimet_gitti: true } },
          ['ic', 'Son dayanağım gitti. Bu hafta bu evde kime yaslanacağım?', 'mahzun'],
          { gorev: 5 },
        ],
      },

      /* ---------- Nereye sığınacağım: üç seçenekten biri (ek). Her biri ayrı bir kapı açar. ---------- */
      {
        id: 'b6_salon', mekan: 'buyuk_salon', kisi: 'sai', kosul: (S) => S.gorev === 5,
        sahne: ['sai', { id: 'calibe', ifade: 'gulumser' }],
        adimlar: [
          'Akşamları salona inmeye başladım. Kimse çağırmadı; kimse de kovmadı. Babamın koltuğunun yanındaki alçak iskemleye oturuyorum; çocukken oturduğum yere. Bir şey söylemiyorum.',
          'Babam gazetesini okuyor. Perihan Hanım nakış işliyor. Lamba üçümüzü aynı ışığa koyuyor; dışarıdan bakan bir aile görür.',
          ['calibe', 'Feride artık saçını kendi örüyor efendi. Bakın, ne güzel eğri olmuş.', 'gulumser'],
          'Elim örgüme gitti. İndirdim.',
          ['sai', 'Bir şey çal kızım.'],
          {
            eger: (S) => S.bayrak.piyano_b3 === 'baba',
            ise: [['sai', 'Şefik\'in anlattığı şarkıyı çal. O akşam ben yoktum.']],
            degilse: [{
              eger: (S) => S.bayrak.piyano_b3 === 'alafranga',
              ise: [['calibe', 'O akşamki oynak parçayı çal kızım; içimiz açılsın.', 'gulumser']],
              degilse: [{ eger: (S) => S.bayrak.piyano_b3 === 'huzunlu', ise: [['calibe', 'Yine o ağır şeylerden olmasın kızım; ev zaten yas evi gibi.', 'gulumser']], degilse: [] }],
            }],
          },
          'Babamın sevdiği eski şarkıyı çaldım. Annemin de sevdiği. Perihan Hanım tatlı tatlı iğneledi: tempom ağırmış, bileğim sertmiş. Katlandım.',
          'Şarkının sonunda iğnesi bir an durdu. Babam gazeteyi dizine indirmişti.',
          ['sai', 'Annen de bunu böyle çalardı. Sonunu hep yavaşlatırdı.', 'mahzun'],
          '"Annen" dedi. Perihan Hanım\'ı kastetmedi. Bu salonda o kadın yıllardır anılmamıştı.',
          ['calibe', 'Efendi, kahveniz soğuyor.', 'gulumser'],
          'Babam bir an başını kaldırdı, yüzüme baktı. Gazeteye değil, bana.',
          ['sai', 'Sen zayıflamışsın Feride.', 'mahzun'],
          ['ic', 'Beş aydır ilk kez gördü. Görmesi için yanında oturmam gerekiyormuş.'],
          {
            soru: 'Babam yüzüme bakıyor. Perihan Hanım iğnesine.',
            secim: [
              {
                m: '"Nimet\'siz ev soğuk efendim."', etki: { baba_guven: 1, calibe_suphe: 1 }, bayrak: { baba_nimet: 'soyledi' },
                adimlar: [
                  ['f', 'Nimet\'siz ev soğuk efendim.', 'mahzun'],
                  ['sai', 'Annen öyle uygun gördü kızım. Ev işi onun işi.'],
                  'Ama sesi emin değildi. Bir süre sobaya baktı.',
                  ['sai', 'Yirmi yıl az zaman değil. Gittiği yeri öğreneyim; aylığını yollatırım.', 'mahzun'],
                  ['ic', 'Geri getirmedi. Ama unutmadı da. Babamdan bugün alabildiğim bu.'],
                ],
              },
              {
                m: '"İyiyim efendim. Güz yorgunluğu."', etki: { vakar: 1 }, bayrak: { baba_nimet: 'sustu' },
                adimlar: [
                  ['f', 'İyiyim efendim. Güz yorgunluğu.'],
                  ['sai', 'Güz herkesi yorar.'],
                  'Elini elimin üstüne koydu. Bir an. Sonra çekti; gazetesini aldı.',
                  ['ic', 'Sormadı. Sorsa ne derdim? Elinin sıcaklığı bu akşam bana yetti.'],
                ],
              },
            ],
          },
          ['sai', 'Aşçıya söyleyin; bu kıza her gece bir bardak süt çıkarsın.'],
          ['calibe', 'Ben söylerim efendi. Ben düşünemedim, kusura bakmayın.', 'gulumser'],
          'Süt her gece geldi. Aşçı kadın kendi eliyle getirdi. Babamın yolladığını bile bile içtim.',
          { etki: { baba_guven: 5, vakar: 1 } }, { bayrak: { mekan_b6: 'salon' } },
          { gorev: 6 },
        ],
      },
      {
        id: 'b6_kenar', mekan: 'selamlik_kapisi', kisi: 'sefik', kosul: (S) => S.gorev === 5,
        sahne: ['sefik'],
        adimlar: [
          'Şefik\'in dersi sırasında ara kapının bu yanında bekliyorum. Öbür yanda Halim Efendi. Kapı bir karış aralık; âdet böyle.',
          'İçeriden Şefik\'in sesi geliyor: çarpım cetvelini okuyor. Yedi kere sekizde takıldı. Öbür ses acele etmedi; bekledi.',
          { goster: ['halim'] },
          ['halim', 'Acelesi yok küçük bey. Sayılar kaçmaz.'],
          { gizle: 'halim' },
          ['ic', 'Bu evde kimse kimseyi beklemiyor. O, küçük bir çocuğun yedi kere sekizini bekliyor.'],
          'Şefik defteriyle kapıya geldi. "Abla, hocam buna bak dedi."',
          'Şefik\'in defterinin kenarında düzgün bir yazı: "Küçük beyin hemşiresi merak buyurmasın; ders ağır gelirse hafifletilir."',
          { eger: (S) => !!S.bayrak.sefik_resim, ise: [['ic', 'Yıldızı çizen el. Yazısı da yıldızı gibi: süssüz, düzgün.']], degilse: [] },
          {
            soru: 'Kalem elimde. Notun altı boş.',
            secim: [
              {
                m: 'Yalnız Şefik\'in hesabıyla ilgili iki satır yazmak.', etki: { vakar: 1 },
                adimlar: ['Altına Şefik\'in hesabıyla ilgili iki satır yazdım: "Kesirlerde zorlanıyor. Akşamları ben çalıştırırım." Başka bir şey yazmadım.'],
              },
              {
                m: 'Hesabı yazmak; bir satır da teşekkür eklemek.', etki: { halim: 2 }, bayrak: { halim_not: true },
                adimlar: [
                  'Altına Şefik\'in hesabıyla ilgili iki satır yazdım. Sonra bir satır daha: "Küçük beyin hemşiresi teşekkür eder." Başka bir şey yazmadım.',
                  ['ic', 'Bir satır. Kimseye yazmadığım kadar az. Yine de yazdım.'],
                ],
              },
            ],
          },
          'Şefik defteri götürdü. İçeride bir sessizlik oldu. Sonra bir sayfa çevrildi.',
          { goster: ['halim'] },
          ['halim', '{i}(Kapının ardından, yere bakarak){/i} Küçük bey bugün üç kere "ablam" dedi; bir kere de gözü doldu. Sebebini sormadım.'],
          ['halim', 'Evde bir keder olduğunu küçük beyin gözünden anlıyorum. Haddim değil. Ama ona elimden gelen her şeyi öğreteceğim.'],
          ['halim', 'Bir gün mektebe gidecek olursa geri kalmasın. Çocuk, bildiği şeyin arkasına sığınır.'],
          ['f', 'Allah razı olsun Halim Efendi.'],
          'Ayak sesi uzaklaştı. Kapının aralığından yalnız bir gölge geçti: uzunca, biraz öne eğik.',
          { gizle: 'halim' },
          ['sefik', 'Abla, hocam "Hemşireniz hesabı iyi biliyor" dedi. Sen hocamdan iyi mi biliyorsun?', 'sevincli'],
          ['f', 'Hayır. Hocan nazik.', 'gulumseyen'],
          ['ic', 'Bu konakta benden hiçbir şey istemeyen tek adam. Yüzünü hâlâ görmedim.'],
          { etki: { halim: 6, sefik: 1 } }, { bayrak: { mekan_b6: 'kenar' } },
          { gorev: 6 },
        ],
      },
      {
        id: 'b6_kuytu', mekan: 'mutfak', kisi: 'reftar', kosul: (S) => S.gorev === 5,
        sahne: ['reftar'],
        adimlar: [
          'Hatice çamaşırlığın önünde ağlıyor. Nabi Bey evlendi; ona verilen söz tutulmadı. Artık bütün ev biliyor; kimse yüzüne söylemiyor.',
          { eger: (S) => !!S.bayrak.bilgi_reftar_nabi, ise: [['ic', 'Ben o sözü evden çok önce duymuştum. Nasıl biteceğini de o gün sezmiştim.']], degilse: [] },
          'Kazanın yanına çökmüş; yüzü önlüğünde. Beni görünce doğruldu, gözünü sildi.',
          ['reftar', 'Gülmeye mi geldiniz küçük hanım? Gülün. Hakkınızdır.', 'somurtkan'],
          'Gülmedim. Yanına oturdum; ıslak taşa. Eteğim ıslandı.',
          'Parmağında, çocukken ona verdiğim firuze yüzük duruyor. Yedi yaşındaydım; "kardeşim olsun" diye vermiştim.',
          ['ic', 'Bu kız aylardır aleyhime göz oldu, kulak oldu. Ve şu an bu evde yanına oturan benden başka kimse yok.'],
          ['f', 'Hatice. Sen annemden bana kaldın; benim hizmetimdesin. Seni kimseye satmam. Bu evden çıktığım gün azat kâğıdını veririm. Yalnız, sorulduğunda doğruyu söyle.'],
          ['reftar', 'Azat mı? Hanımefendi de söz vermişti.', 'somurtkan'],
          ['f', 'Ben hanımefendi değilim.'],
          {
            eger: (S) => !!S.bayrak.delil_ada || !!S.bayrak.nimet_tanik || !!S.bayrak.bilgi_reftar_nabi,
            ise: [
              {
                eger: (S) => !!S.bayrak.delil_ada || !!S.bayrak.nimet_tanik,
                ise: [['f', 'O gece kaçta yattığını bilen var. Sana o sözü kimin, ne karşılığında verdiğini de biliyorum.']],
                degilse: [['f', 'Sana o sözü kimin, ne karşılığında verdiğini biliyorum Hatice. Bütün evden önce biliyordum; kimseye söylemedim.']],
              },
              'Koz gibi söylemedim; bildiğimi bilsin diye söyledim. Hatice çözüldü. Eteğime kapandı.',
              ['reftar', 'Efendi sorarsa söylerim küçük hanım. Vallahi söylerim. Ama hanımefendi beni öldürür.'],
              ['f', 'Sana bir şey olursa ben de susmam Hatice. Bunu da o bilsin.'],
              { bayrak: { reftar_tanik: true } },
              { delil: 'Hatice: "Efendi sorarsa söylerim." Ada gecesi için ezberletildiğini kabul etti.' },
            ],
            degilse: [['reftar', 'Ben bir şey bilmem küçük hanım. Ben bir şey bilmem.'], 'Kapandı. Tutulmayan sözü bütün ev biliyordu; ama o geceye dair elimde onu konuşturacak bir şey yoktu. Zorlamadım; yanında biraz daha oturdum.'],
          },
          'Kalkarken yüzüğü parmağında çevirdi.',
          ['reftar', 'Bunu hiç çıkarmadım küçük hanım. Onu bilin.'],
          'Başımı kaldırdım. Üst kat penceresinde bir perde kıpırdadı.',
          ['ic', 'Gördü. Hatice\'nin yanında oturduğumu gördü. Bunun da bir bedeli olur.'],
          { etki: { calibe_suphe: 1 } }, { bayrak: { mekan_b6: 'kuytu' } },
          { gorev: 6 },
        ],
      },

      /* ---------- İç güveyi teklifi (roman s. 169-172) ---------- */
      {
        id: 'b6_icguveyi', mekan: 'buyuk_salon', tetik: 'giris', kosul: (S) => S.gorev === 6,
        sahne: [{ id: 'sai', ifade: 'ciddi' }, { id: 'calibe', ifade: 'soguk' }],
        adimlar: [
          { kart: 'Bir hafta sonra.' },
          'Babam beni kendi çağırdı. Sesi yumuşaktı: elinde hediye tutan bir adamın sesi.',
          { eger: (S) => S.bayrak.mekan_b6 === 'salon', ise: ['Bir haftadır akşamları yanında oturuyorum. Bana bir iyilik yapmak istiyor; yüzünden belli.'], degilse: [] },
          ['sai', 'Kızım, sana başka birini düşündüm. Yazıhanemdeki Halim Efendi; Şefik\'in hocası. Namuslu, okumuş. Parası yok; ama benim var. İç güveyi gelir; kardeşinden ayrılmazsın.'],
          'Yüzüme bakıyor; sevinmemi bekliyor. Bulduğu çareyle övünüyor: kızı yanında kalacak, karısı da kırılmayacak.',
          'Perihan Hanım\'ın yüzü asıldı. O benim bu evden gitmemi istiyor; kalmamı değil.',
          ['calibe', 'Yazıhane kâtibi mi efendi? Hem iki hanım bir evde...', 'soguk'],
          ['sai', 'Namuslu adam hanım. Namus keseden önce gelir.'],
          { eger: (S) => S.bayrak.mekan_b6 === 'kenar', ise: [['ic', 'Kapının ardındaki ses. "Haddim değil" diyen adam.']], degilse: [] },
          ['ic', 'İyi bir adam. Şefik\'le kalırım. Ama bu evde kalırım: o odanın, o iki kişinin altında, bir ömür.'],
          'Bir an babamı sevdim. Sonra üst katı düşündüm; sarı odanın kapısını.',
          ['ic', '"Evet" desem her sabah o sofraya otururum. Kocam babama "efendim" der, Süha Bey\'e "beyefendi" der; ben tuzu uzatırım. Bildiğimi kocamdan da saklarım. Bir yalan iki kişiyle bitmez; eve kim girerse onu da içine alır.'],
          {
            soru: 'Babam cevabımı bekliyor. Perihan Hanım da.',
            secim: [
              {
                m: '"İç güveyi geleceği için istemiyorum efendim. Bu evde kalamam."', etki: { baba_guven: -4, isyan: 1 }, bayrak: { icguveyi_cevap: 'ev' },
                iz: 'Halim Efendi\'yi değil, bu evi reddettin.',
                adimlar: [
                  ['f', 'Süha Bey\'i istemediğim için reddettim. Bunu iç güveyi geleceği için istemiyorum efendim.'],
                  ['sai', 'Benimle oturmak istemiyor musun?', 'mahzun'],
                  ['f', 'Sizden ayrılmak istemem. Fakat bundan sonra üvey annemle geçinemeyeceğim.'],
                  ['sai', 'Haddini aşma Feride!', 'ciddi'],
                  ['calibe', 'Ben o sözlere yıllardır alışığım efendi. Üvey ana olmak budur. Siz üzülmeyin.', 'gulumser'],
                  'Mendilini gözüne götürdü. Gözü kuruydu; yalnız ben gördüm.',
                  {
                    eger: (S) => S.bayrak.yakalama_sonrasi === 'baba',
                    ise: ['Babam bu sefer onu teselli etmedi. Bir an ikimize de baktı; sonra yere.'],
                    degilse: [['ic', 'Neden geçinemeyeceğimi söyleyemedim. Söylesem o kuru mendil ıslanır, yalancı ben olurdum.']],
                  },
                ],
              },
              {
                m: '"Halim Efendi iyi bir adamdır. Ona haksızlık etmek istemem; gönlüm onda değil."', etki: { vakar: 1, baba_guven: -2 }, bayrak: { icguveyi_cevap: 'gonul' },
                iz: 'Halim\'i incitmeden kendi kararını söyledin.',
                adimlar: [
                  ['f', 'Halim Efendi iyi bir adamdır efendim. Ona haksızlık etmek istemem; gönlüm onda değil. Gönülsüz varılan kocaya da haksızlıktır.'],
                  ['sai', 'Gönül! Gönlün kimde, onu biliyoruz.', 'ciddi'],
                  ['ic', 'Bilmiyor. Ben de bilmiyorum. Bildiğim bir şey var: o iyi adamı bu evin içine, bu yalanın altına sokamam.'],
                ],
              },
            ],
          },
          ['calibe', '{i}(Babamın kulağına){/i} Başka bir şey için olmalı efendi.', 'sinsi'],
          { eger: (S) => !S.bayrak.fevkiye_sustu && !!S.bayrak.gizli_nikah, ise: [['sai', 'Leyla Hanım\'ın konağında kiminle bir odaya kapandığını bilmiyor muyum sanırsın?', 'ciddi'], ['ic', 'Nabi. Oradan buraya taşımış.']], degilse: [] },
          ['sai', 'Kenan Feride\'nin eşi olabilir; ama Sait\'in damadı olamaz. Ya Kenan\'dan geçmeli, ya benden!', 'ciddi'],
          'Babamın sesi titriyordu. Benimki de titredi; ama cümleyi bitirdim.',
          ['f', 'Ben sizden geçebilir miyim? Beni kardeşimle beraber evine alacak bir adam bulunuz.', 'mahzun'],
          ['sai', 'Öyle olsun. Ama başka laf dinlemem.', 'ciddi'],
          'Perihan Hanım\'ın nakışı dizinden kaydı. "Kardeşimle beraber." Bunu hesaba katmamıştı.',
          ['ic', 'Şefik\'le beraber alan adam. Bu şartım elimde kaldığı sürece beni kimseye veremezler. Şartımı elimden nasıl alırlar?'],
          'Babam çıktı. Perihan Hanım nakışını topladı; yanımdan geçerken durdu.',
          ['calibe', 'Kardeşinle beraber. Ne güzel söz. Ama Şefik büyüyor kızım; erkek çocuk mektebe gider. O zaman kiminle beraber olacaksın?', 'gulumser'],
          ['ic', 'Sorumu duymuş gibi cevap verdi. Daha ben odadan çıkmadan.'],
          { gorev: 7 },
        ],
      },

      /* ---------- Resim (roman s. 172-175) ve kanca ---------- */
      {
        id: 'b6_resim', mekan: 'fazila_oda', tetik: 'giris', kosul: (S) => S.gorev === 7,
        sahne: ['josephine', 'resim'],
        adimlar: [
          'Nişan bozulalı altı ay. Ellerim titriyor; sürahiden su dolduramadım. Madam doldurdu.',
          'Hava kararıyordu. Soba yanıyor; odada ondan başka ses yok.',
          { eger: madamCezali, ise: ['Madam\'ın gitme vakti gelmişti. Gitmedi. Şapkası kapının yanındaki iskemlede kaldı.'], degilse: [] },
          { goster: ['mukaddem_foto'] },
          'Cebimdeki anahtarla çekmeceyi açtım. Onun resmi. "Geçtim" dedim babama. Resme diyemedim.',
          'Altı aydır bakmamıştım. Yüzü hatırladığımdan gençti. Belki de ben altı ayda yaşlandım.',
          ['ic', 'Babam "ya o, ya ben" dedi. Ben "siz" dedim. Sözümün arkasında durmak şu çekmecenin içinde başlıyor.'],
          {
            soru: 'Resim elimde. Soba yanıyor.',
            secim: [
              {
                m: 'Yırtıp sobaya atmak.', etki: { vakar: 1, mukaddem: -2 }, bayrak: { resim: 'yakti' },
                iz: 'Resmi yaktın.',
                adimlar: [
                  'Yırttım. Parçalar yanarken ağzımdan bir ses çıktı; Madam irkildi.',
                  'Karton kıvrıldı, karardı. En son gözleri yandı.',
                  ['ic', 'Babama verdiğim sözü tuttum. Elimde ondan hiçbir şey kalmadı.', 'mahzun'],
                  { gizle: 'mukaddem_foto' },
                  ['josephine', 'Ben de bir resim yaktım Feride Hanım. Yirmi iki yaşındaydım. Kâğıt bir dakikada yandı; ben otuz yıldır düşünüyorum.'],
                  ['f', 'Bunu şimdi mi söylüyorsunuz?'],
                  ['josephine', 'Önce söylesem dinlemezdiniz. Ben de dinlememiştim.'],
                ],
              },
              {
                m: 'Annemin portresinin arkasına saklamak.', etki: { mukaddem: 3, isyan: 1 }, bayrak: { resim: 'sakladi' },
                iz: 'Resmi annenin portresinin arkasına sakladın.',
                adimlar: [
                  'Annemin resmini duvardan indirdim, arkasına yerleştirdim, yerine astım. Çerçeve bir parmak eğri durdu; düzelttim.',
                  ['ic', 'Bu evde bir şey saklanacaksa annem saklar. Çekmecem saklayamadı.'],
                  { gizle: 'mukaddem_foto' },
                  ['josephine', 'Ben benimkini yakmıştım. Yirmi iki yaşındaydım. Siz benden akıllısınız; ya da daha inatçı.'],
                  ['f', 'İnatçıyım Madam. Bana kalan bir o var.'],
                ],
              },
            ],
          },
          'Madam iskemlesini benimkinin yanına çekti; karşıma değil, yanıma.',
          ['f', 'Babam benden daha ne fedakârlık istiyor Madam?', 'mahzun'],
          ['josephine', 'Seviyor muydunuz?'],
          ['f', 'Bilmem. Yüreğim yanıyor; aşktan mı, merhametten mi, onu bilmiyorum.', 'mahzun'],
          ['josephine', 'O kadar fedakârlığa katlanacağınıza evlenmeseniz?'],
          ['f', 'Kavga onun üstüne değil mi Josephine? Ben oturmaya razıyım; bırakmıyorlar.'],
          'Ona ilk kez adıyla seslendim. Fark etti; bir şey demedi. Ellerimi tuttu. Elleri kuru ve sıcaktı; tebeşir kokuyordu.',
          ['f', 'Bildiğim bir şey var Josephine. Söylesem babam yıkılır, söylemesem ben.', 'mahzun'],
          ['josephine', 'Ne bildiğinizi sormuyorum. Taşıdığınız şey sizin ayıbınız değil; onu yapanın. Siz yalnız kapıyı açtınız.'],
          { eger: (S) => S.bayrak.mendil_harf === 'F', ise: ['Gözümü mendilimle sildim. Köşesinde kendi harfim.'], degilse: [] },
          { eger: (S) => !!S.bayrak.sefik_resim, ise: ['Şefik\'in yaptığı resim aynamın kenarında duruyor: tek örgülü, kocaman gözlü bir abla. Gülüyor. O beni öyle görüyor.'], degilse: [] },
          {
            eger: (S) => !!S.bayrak.munevver_lamba,
            ise: ['Pencereden baktım. Yan konağın üst katında lamba yanıyordu. Her gece yanıyor.', ['ic', 'Bu evin dışında biri uyanık. Yalnız değilim.']],
            degilse: ['Pencereden baktım. Sokak fenerinden başka ışık yoktu.'],
          },
          {
            eger: (S) => !!S.bayrak.madam_orgu,
            ise: [['josephine', 'Şimdi suyunuzu için. Sonra saçınızı yine ben öreyim. Geçen seferden iyi olacak; söz.']],
            degilse: [['josephine', 'Şimdi suyunuzu için. Sonra saçınızı ben öreceğim. Kötü örerim; ama öreceğim.']],
          },
          'Ördü. Düğümü bir kere attı. İkincisini ben attım.',
          'Kapı aralandı. Şefik, geceliğiyle, yalınayak.',
          { goster: ['sefik'] },
          ['sefik', 'Abla, uyuyamadım. Nimet dadının masalını sen biliyor musun? Yedi kardeşi olan kızın masalını.'],
          ['f', 'Biliyorum. Gel.', 'gulumseyen'],
          'Yanıma kıvrıldı. Masalı anlattım; Nimet\'in sesiyle değil, kendi sesimle. Yarısında uyudu. Madam lambayı kıstı.',
          { gizle: 'sefik' },
          { etki: { josephine: 1 } },
          { temizle: true },
          { kart: 'Bir hafta sonra.' },
          'Bir hafta kimse bir şey demedi. Bu evde sessizlik boş durmaz; içinde bir şey hazırlanır.',
          'Şefik\'le salona iniyorduk. Merdivenin ortasında babamın sesini duydum. Şefik\'in eli elimde kasıldı.',
          ['ic', 'Babam adımı hiç böyle bağırmamıştı.'],
          { bolumSonu: true },
        ],
      },

      /* =====================================================================
         YAN KARŞILAŞMALAR (isteğe bağlı). Ev kapalı; hepsi konağın içinde.
         ===================================================================== */

      /* Görev 1-7, mutfak: aşçı kadın. Sır görüldükten sonra bölümün sonuna kadar açık (bir kere oynanır).
         Bir tanık daha; ama onu açığa vermek de bir bedel. */
      {
        id: 'b6_asci', yan: true, mekan: 'mutfak', kisi: 'asci', kosul: (S) => S.gorev >= 1,
        sahne: ['asci'],
        adimlar: [
          'Mutfak sıcak. Aşçı kadın tencerenin başında; beni görünce kepçeyi bıraktı.',
          {
            eger: (S) => S.gorev === 1,
            ise: [['asci', 'Sofrada bir şey yemedin küçük hanım. Tabağın dolu döndü. Otur şuraya.']],
            degilse: [['asci', 'Günlerdir tabağın dolu dönüyor küçük hanım. Otur şuraya.']],
          },
          'Önüme bir kâse çorba koydu. Tahta masada içtim. Boğazımdan burada geçti.',
          {
            eger: (S) => S.gorev === 1,
            ise: [['asci', 'Ben tencereme bakarım; kimsenin işine karışmam. Ama ekmek teknesi arka kapıya bakar. Efendinin olmadığı günler doktor beyin arabası arka sokakta durur. Bugün de durdu.']],
            degilse: [['asci', 'Ben tencereme bakarım; kimsenin işine karışmam. Ama ekmek teknesi arka kapıya bakar. Efendinin olmadığı günler doktor beyin arabası arka sokakta durur. Efendinin erken döndüğü gün de durmuştu.']],
          },
          'Kaşığım kâsede kaldı. Ben sormadım; kendisi söyledi.',
          {
            soru: 'Aşçı kadın gördüğünü söyledi. Yüzüme bakıyor.',
            secim: [
              {
                m: '"Efendi bir gün sorarsa bunu söyler misin?"', bayrak: { asci_tanik: true },
                iz: 'Aşçı kadın: "Sorarlarsa yalan söylemem."',
                adimlar: [
                  ['asci', 'Benim sözüm tencereden öteye gitmez küçük hanım. Ama sorarlarsa yalan da söylemem. Ben annenin ekmeğini yedim.'],
                  { delil: 'Aşçı kadın: efendinin olmadığı günler doktorun arabası arka sokakta bekliyor. "Sorarlarsa yalan söylemem."' },
                ],
              },
              {
                m: '"Bunu kimseye söyleme. Başın yanar."', etki: { vakar: 1 }, bayrak: { asci_bilgi: true },
                iz: 'Aşçı kadını korudun; gördüğünü kendine sakladı.',
                adimlar: [
                  ['asci', 'Sen beni mi düşünüyorsun? Bu evde aşçıyı düşünen bir sen kaldın.'],
                  ['ic', 'Nimet\'ten başka bir kişinin daha ekmeğiyle oynayamam.'],
                ],
              },
            ],
          },
          'Çıkarken cebime bir avuç kuru üzüm koydu. Çocukken yaptığı gibi.',
        ],
      },

      /* Görev 3, selamlık kapısı: Şefik, defteri ve Beyoğlu'ndan alınan boyalar. */
      {
        id: 'b6_sefik_defter', yan: true, mekan: 'selamlik_kapisi', kisi: 'sefik', kosul: (S) => S.gorev === 3,
        sahne: ['sefik'],
        adimlar: [
          'Şefik ara kapının eşiğine oturmuş. Dizinde defteri, yanında Beyoğlu\'ndan alınan resim takımı. Parmakları mavi.',
          ['sefik', 'Abla! Bak, Halim Efendi hesabıma yıldız çizdi. Bir de bunu yaptım; ama daha kurumadı.', 'sevincli'],
          'Bir kâğıt uzattı. Tek örgülü, kocaman gözlü bir kız; yanında küçük bir oğlan. İkisinin eli tek bir el gibi boyanmış.',
          ['sefik', 'Bu sefer Nazlı\'ya göstermedim. Mürekkep dökemez; sakladım.'],
          ['sefik', 'Abla, Süha dayım enişte mi olacak? Hatice öyle dedi. Enişte olursa sen onun evine mi gideceksin?', 'aglamakli'],
          {
            soru: 'Şefik yüzüme bakıyor. Parmakları mavi, gözleri dolu.',
            secim: [
              {
                m: '"Hiçbir yere gitmiyorum. Bu resmi bana verir misin?"', etki: { sefik: 2 }, bayrak: { sefik_resim: true },
                iz: 'Şefik\'in yaptığı resim sende.',
                adimlar: [
                  ['f', 'Hiçbir yere gitmiyorum Şefik. Gidersem de seninle giderim. Bu resmi bana verir misin?', 'gulumseyen'],
                  ['sefik', 'Senin için yaptım zaten. Ama kuruyunca al; elin mavi olur.', 'sevincli'],
                  'Kurumasını beklemedim. Parmağım mavi oldu.',
                ],
              },
              {
                m: '"Büyüklerin işini büyükler düşünür. Sen yıldızına bak."', etki: { vakar: 1 },
                adimlar: [
                  ['f', 'Büyüklerin işini büyükler düşünür. Sen yıldızına bak.'],
                  ['sefik', 'Büyüklerin işi hep kötü çıkıyor ama.'],
                  ['ic', 'Çocuk. Haklı.'],
                ],
              },
            ],
          },
        ],
      },

      /* Görev 2-3, sofa: Nazlı duyduğunu söyler. Feride Nimet'i önceden uyarabilir.
         Görev 4'te Nimet gittiği için daha ileri açılamaz. */
      {
        id: 'b6_mefharet', yan: true, mekan: 'konak_sofa', kisi: 'mefharet', kosul: (S) => S.gorev === 2 || S.gorev === 3,
        sahne: ['mefharet'],
        adimlar: [
          'Nazlı sofanın ortasında, halının üstünde. Bez bebeğinin saçını örüyor; tek örgü.',
          ['mefharet', 'Bak, senin gibi yaptım. Ama benim bebeğim ağlamıyor.'],
          ['mefharet', 'Annem dedi ki Nimet dadı gidecekmiş. Sandığını hazırlasın demiş. Sen gelin olunca sana dadı lazım değilmiş.'],
          'Küçücük bir çocuk. Duyduğunu söylüyor; ne söylediğini bilmiyor.',
          {
            soru: 'Nazlı bebeğini bana uzattı. Örgüsü çözülmüş.',
            secim: [
              {
                m: 'Yanına çömelmek; bebeğin örgüsünü düzeltmek.', etki: { vakar: 1 }, bayrak: { nimet_haber: true },
                iz: 'Nazlı ağzından kaçırdı: Nimet\'i gönderecekler.',
                adimlar: [
                  ['f', 'Ucunu iki kere düğümle. Nimet öyle yapar.'],
                  ['mefharet', 'Sen bana hiç kızmıyorsun. Annem senin bana kızdığını söylüyor.'],
                  ['ic', 'Ona da bir şeyler ezberletiyorlar. Onun suçu yok.'],
                ],
              },
              {
                m: '"Büyüklerin sözünü sofada söyleme Nazlı."', etki: { calibe_suphe: 1 }, bayrak: { nimet_haber: true },
                iz: 'Nazlı ağzından kaçırdı: Nimet\'i gönderecekler.',
                adimlar: [
                  ['mefharet', 'Anneme söylerim, bana kızdın diye!'],
                  'Bebeğini kaptı, koşarak gitti. Söyleyecek. Ama ben de öğreneceğimi öğrendim.',
                ],
              },
            ],
          },
          ['ic', 'Nimet\'le ilk yalnız kaldığımızda söylemeliyim. Hazırlıksız yakalanmasın.'],
        ],
      },

      /* Görev 4, salon: piyano. Fırtınadan önce bir nefes. */
      {
        id: 'b6_piyano', yan: true, mekan: 'buyuk_salon', kisi: 'piyano', kosul: (S) => S.gorev === 4,
        sahne: ['piyano'],
        adimlar: [
          'Sabah. Salon boş; perdeler yarı açık. Piyanonun kapağını dün gece kimse kapamamış.',
          {
            eger: (S) => S.bayrak.piyano === 'vals',
            ise: ['Nişandan önce bu tuşlarda bir vals çalmıştım. Süha Bey alkışlamıştı. O alkışı şimdi başka türlü duyuyorum.'],
            degilse: [{
              eger: (S) => S.bayrak.piyano === 'sefik',
              ise: ['Nişandan önce Şefik\'i yanıma oturtup çalmıştım. Ayakları pedala yetişmiyordu.'],
              degilse: ['Nişandan önce bu tuşlarda babamın şarkısını çalmıştım. Yüzü gülmüştü.'],
            }],
          },
          {
            soru: 'Tuşlar açık. Ev henüz uyanmadı.',
            secim: [
              {
                m: 'Sol elle, usulca, annemin ninnisini çalmak.', etki: { mehves: 1 }, bayrak: { piyano_b6: 'ninni' },
                adimlar: [
                  'Yalnız sol elle çaldım; pedala basmadan. Ses salondan çıkmasın diye.',
                  'Kapıda biri durdu. Dönmedim. Lavanta kokusundan tanıdım: Nimet. Bir şey demedi. Ninni bitene kadar bekledi; sonra gitti.',
                ],
              },
              {
                m: 'Kapağı kapatmak. Bu ev bugün şarkı istemiyor.', etki: { vakar: 1 }, bayrak: { piyano_b6: 'kapali' },
                adimlar: [
                  'Kapağı indirdim. Tok bir ses çıktı; boş salonda büyüdü.',
                  ['ic', 'Çalarsam ağlarım. Bugün ağlamayacağım.'],
                ],
              },
            ],
          },
          'Sofadan bir gürültü geldi. Ağır bir şey sürükleniyordu.',
        ],
      },

      /* Görev 5-6, Feride'nin odası: annenin resmi ve madalyon. */
      {
        id: 'b6_anne_resmi', yan: true, mekan: 'fazila_oda', kisi: 'resim', kosul: (S) => S.gorev === 5 || S.gorev === 6,
        sahne: ['resim'],
        adimlar: [
          'Annemin resminin önünde durdum. Camında kendi yüzüm de vardı; onun yüzünün üstünde.',
          { goster: ['madalyon'] },
          // Açık/gizli taşıma kararı 5. bölümde verildi; burada yalnız tek satır geri dönüş. madalyon_b6 o karardan türer.
          {
            eger: (S) => (S.bayrak.madalyon_b5 ? S.bayrak.madalyon_b5 === 'acik' : S.bayrak.madalyon === 'acik'),
            ise: ['Madalyon göğsümde, nasıl karar verdiysem öyle: siyah taş, altın B. Bu evde herkes görüyor; kimse sormuyor.', { bayrak: { madalyon_b6: 'acik' } }],
            degilse: ['Madalyon yakamın içinde, nasıl karar verdiysem öyle: siyah taş, altın B. Tenimin sıcağını almış.', { bayrak: { madalyon_b6: 'sakli' } }],
          },
          ['ic', 'Sen de bu evde sustun mu anne? Yoksa senin zamanında susulacak bir şey yok muydu?'],
          { gizle: 'madalyon' },
          'Çerçevenin camını yenimle sildim. Nimet her cuma silerdi.',
        ],
      },

      /* Görev 5-6, Madam'ın odası: sandık. */
      {
        id: 'b6_madam', yan: true, mekan: 'josephine_oda', kisi: 'josephine', kosul: (S) => S.gorev === 5 || S.gorev === 6,
        sahne: ['josephine'],
        adimlar: [
          'Madam pencerenin önünde Şefik\'in yakasını dikiyor. Gözlüğü burnunun ucunda.',
          ['josephine', 'Girin Feride Hanım. Oturacak yer şu sandık; kusura bakmayın.'],
          ['josephine', 'On dokuz yaşında evimden çıktım. Bir sandık, bir sözlük. O gün bugündür başkalarının çocuklarını seviyorum. İnsan alışıyor; ama sandığı hep toplu duruyor.'],
          ['ic', 'Nimet\'in sandığı. Madam\'ın sandığı. Bu evde kadınlar bir sandık boyu yer tutuyor.'],
          {
            soru: 'Madam iğnesini bıraktı; bana bakıyor.',
            secim: [
              {
                m: '"Beni bu evden gönderirlerse Şefik\'e siz bakar mısınız?"', etki: { josephine: 1 }, bayrak: { madam_soz: true },
                iz: 'Madam söz verdi: Şefik\'in yanında kalacak.',
                adimlar: [
                  ['josephine', 'Beni kovmadıkları sürece o çocuğun yanındayım. Kovarlarsa adresimi ona ezberletirim. Bu benim sözüm. Fransızca da söyleyeyim mi; daha sağlam olur?'],
                  'Güldüm. O da güldü; gözlüğü kaydı.',
                ],
              },
              {
                m: '"Saçımı örer misiniz Madam? Kendim eğri örüyorum."', etki: { josephine: 1 }, bayrak: { madam_orgu: true },
                adimlar: [
                  'Ördü. Nimet\'inkine benzemedi: sıkıydı, biraz çarpıktı, tepesinden çekiyordu.',
                  ['josephine', 'Fena olmadı. Bir Fransız örgüsü; yani yanlış.'],
                  ['ic', 'Nimet\'in yerini tutmuyor. Tutmaya da çalışmıyor. Belki bu yüzden iyi geldi.'],
                ],
              },
            ],
          },
        ],
      },
    ],

    merak: 'Babam adımı bağırıyor. Elinde bir kâğıt varmış. Bu evde bana ait her kâğıt çalındı; şimdi bana ait olmayan bir kâğıt mı yazdılar?',

    sonNotu: function (S) {
      const b = S.bayrak, p = [];
      p.push('Bir kapıyı açtım ve gördüm: Perihan Hanım ile Süha Bey.');
      if (b.yakalama_sonrasi === 'baba') p.push(b.baba_sarsildi ? 'Babama söyledim. Susturdu; ama o gece lambası sabaha kadar yandı.' : 'Babama söyledim. İnanmadı.');
      else if (b.yakalama_sonrasi === 'munevver') p.push('Sırrı Münevver Hanım\'a ulaştırdım.');
      else if (b.yakalama_sonrasi === 'calibe') p.push('Perihan Hanım\'ın yüzüne "biliyorum" dedim.');
      else p.push('Sustum. Babamı bu sözle yıkamadım.');
      if (b.suha_itiraf === 'sartli') p.push('Süha Bey önümde diz çöktü. "Önce Ada\'yı düzelt" dedim; "karşılıksız değil" dedi.');
      else if (b.suha_itiraf === 'merhamet') p.push('Süha Bey önümde diz çöktü. Acıdım; bunu bir kapı aralığı saydı.');
      else p.push('Süha Bey önümde diz çöktü. "Allah\'tan af dile" dedim.');
      p.push('Beni ona vermek istediler; reddettim. Nimet\'i kovdular.' + (b.delil_dugme ? ' Giderken avucuma bir yelek düğmesi bıraktı.' : ''));
      if (b.mekan_b6 === 'kuytu') p.push(b.reftar_tanik ? 'Hatice "Efendi sorarsa söylerim" dedi.' : 'Hatice\'yi konuşturamadım.');
      else if (b.mekan_b6 === 'kenar') p.push('Halim Efendi kapının ardından "Haddim değil" dedi.');
      else p.push('Babam ilk kez zayıfladığımı gördü.');
      p.push(b.resim === 'sakladi' ? 'Onun resmini annemin portresinin arkasına sakladım.' : 'Onun resmini yaktım.');
      return p.join(' ');
    },
  };
})();

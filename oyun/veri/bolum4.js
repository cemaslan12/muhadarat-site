/* =========================================================================
   DÖRDÜNCÜ BÖLÜM: ADA GECESİ
   Biçim bolum1.js'teki gibidir.
   Roman: s. 125-134 (Büyükada, misafir gecesi, konyak iftirası, gerdanlığın geri istenmesi).
   BÖLÜMÜN TEK SORUSU: "Kenan Bey bu gece bu çatının altında misafir. Perihan Hanım onun
   hizmetine Hatice'yi verdi. Sabah olmadan ne yapacağım?"
   Felaket (nişanın bozulması) romandaki gibi gerçekleşir; oyuncu onu önleyemez.
   Kazanabileceği: bir tanık ya da kendi gözüyle gördüğü bir şey. Bedeli: görülmek ya da Nimet'i öne sürmek.
   Konan bayraklar: kiyafet_ada, mekan_b4, ada_selam, ada_gece (uyudu/sofa/nimet), delil_ada,
   nimet_tanik, gerdanlik_cevap, inanmadim, bilgi_remzi.
   Derinleştirmede eklenen bayraklar (14 Kasım 2026):
     b4_resim (ikimiz/sildi)        yan: Şefik'in vapur resmi; sonda bir satır geri döner
     b4_reftar_agladi (true)        yan: Nazlı'nın sözü; balkon sahnesinde delile döner
     b4_nabi_kapi (gecti/soz)       yan: bahçe kapısında Nabi; balkon sahnesinde iç ses
     b4_nimet_sac (true)            yan: Nimet gece saç örer
     b4_madam_hikaye (true)         yan: Madam'ın kendi nişanı; sonda bir satır geri döner
     b4_kutu (takti/kapadi)         yan: gerdanlık kutusuna veda
     b4_sefik_cevap (inanma/sus)    ana: iftira gecesi Şefik'e verilen cevap
   Yan olaylar: b4_yan_resim (g0 sofa, Şefik), b4_yan_mefharet (g1 bahçe), b4_yan_cesme (g2 bahçe),
     b4_yan_nimet (g3 sofa), b4_yan_madam (g3 bahçe), b4_yan_kutu (g5 oda).
   (oyun için ek) yazan yerler romanda yoktur.
   ========================================================================= */
window.BOLUMLER = window.BOLUMLER || {};

(function () {
  const aleyhte = (S) => S.v.dedikodu >= 3 || S.v.itibar < 40;
  const lehte = (S) => !aleyhte(S) && S.v.itibar >= 55 && S.v.dedikodu <= 1;
  // 3. bölümde ağır bedel ödeyen haberci (bkz. derinlestirme_kurallari.md)
  const cezali = (S, kim) => S.bayrak.bedel === 'agir' && S.bayrak.haberci === kim;

  window.BOLUMLER[4] = {
    no: 4,
    ad: 'Ada Gecesi',
    ilkFaz: 'A',
    baslangic: 'ada_sofa',

    fazlar: {
      A: {
        mekanlar: ['ada_sofa', 'ada_oda', 'ada_camlik', 'ada_bahce'],
        baglanti: {
          ada_sofa: ['ada_oda', 'ada_bahce'],
          ada_oda: ['ada_sofa'],
          ada_bahce: ['ada_sofa', 'ada_camlik'],
          ada_camlik: ['ada_bahce'],
        },
      },
    },

    gorevler: [
      /* 0 */ { metin: 'Çamlığa çıkmak için giyin.', ipucu: 'Nimet orta kattaki odamda feracemi hazırlamış.' },
      /* 1 */ { metin: 'Çamlığa çık.', ipucu: 'Bahçe kapısından çamlık yoluna çıkılıyor.' },
      /* 2 */ { metin: 'Eve dön. Kapıda bir araba var.', ipucu: 'Sofada sesler var. Babam erken dönmüş.' },
      /* 3 */ { metin: 'Bu gece bu çatının altında bir misafir var. Sabaha kadar ne yapacağına karar ver.', ipucu: 'Odama çıkmalıyım. Şefik orada.' },
      /* 4 */ { metin: 'Sabah oldu. Sofaya in.', ipucu: 'Balkondan sesler geliyor.' },
      /* 5 */ { metin: 'Babam seni soruyor.', ipucu: 'Sofada, ayakta bekliyor.' },
    ],

    kisiler: function (S) {
      const g = S.gorev;
      return {
        ada_sofa: g === 0 ? ['sefik'] : (g === 3 ? ['mehves'] : (g === 5 ? ['sai'] : [])),
        ada_oda: g === 0 ? ['mehves'] : (g === 3 ? ['sefik'] : (g === 5 ? ['gerdanlik'] : [])),
        ada_bahce: g === 1 ? ['mefharet'] : (g === 2 ? ['cesme'] : ((g === 3 && !cezali(S, 'madam')) ? ['josephine'] : [])),
        ada_camlik: [],
      };
    },

    sohbet: function (S, kim) {
      const g = S.gorev;
      switch (kim) {
        case 'mehves':
          if (g === 3) return [['mehves', 'Lambaların fitilini kıstım hanımcığım. Geç kalma; bu gece ev kalabalık.']];
          return [['mehves', 'Ada havası yanaklarına renk getirdi hanımcığım. İki ay sonra gelin; bu renk kalsın.']];
        case 'sefik': return [['sefik', 'Abla, vapurun bacasını çizdim. Dumanı sayfadan taştı!']];
        case 'sai': return [['sai', 'Gel kızım.', 'ciddi']];
        case 'mefharet': return [['mefharet', 'Haydi abla! Madam "geç kalan çemberi taşır" dedi.']];
        case 'josephine': return [['josephine', 'Üşümeyiniz Feride Hanım. Ada\'nın akşamı aldatır; önce okşar, sonra ısırır.']];
        case 'cesme': return ['Çeşmenin suyu buz gibi. Yalağın dibinde üç çam iğnesi dönüp duruyor.'];
        case 'gerdanlik': return ['Kutu çekmecede. Kapağı kapalı. Babam aşağıda bekliyor.'];
      }
      return null;
    },

    acilis: [
      { kart: 'DÖRDÜNCÜ BÖLÜM\nAda Gecesi', alt: 'Bahar sonu.\nDüğüne iki ay.' },
      { kiyafet: 'ev', kartsiz: true, kilit: 'Ada evinde gündelik kıyafetin.' },
      { arkaplan: 'kabul_gunu' },
      { goster: ['hanimlar'] },
      'Ada vapurunun kadınlar tarafı. Dört hanım yan yana; sayfiyeye gidiyorlar.',
      ['h1', 'Sait Efendi de Ada\'da ev tutmuş. Küçük hanım iki aya gelin.'],
      {
        eger: (S) => S.bayrak.topuk === 'vurdu',
        ise: [['h2', 'Hanımefendinin kardeşi fesini kaşından kaldırmıyormuş. Alnında nal izi gibi bir şey varmış.']],
        degilse: [['h2', 'Hanımefendinin kardeşi o evde şimdiden damat gibi kuruluyormuş.']],
      },
      {
        eger: aleyhte,
        ise: [['h4', 'Kız dilli, damat içkili diyorlar. Allah birbirine denk getirmiş.']],
        degilse: [{
          eger: lehte,
          ise: [['h3', 'Damat bey için söylenene inanmayın. İftiradır. O konağa o kız yakışır.']],
          degilse: [['h2', 'Damat bey Beyoğlu\'nda pek neşeli görülmüş diyorlar. Doktor bey kendi gözüyle görmüş.']],
        }],
      },
      ['h4', 'Deniz havası her derde iyi gelir derler. Her derde değil.'],
      { temizle: true }, { arkaplan: null },
      'Büyükada. Geleli on gün oldu. Vapur iskeleye yanaşırken Şefik martıları saymaya kalkmış, kırkta şaşırmıştı.',
      'İskeleden eve arabayla çıktık. Yol boyu çam, yol boyu deniz. Konağın kafeslerinden sonra bu kadar gök insanın gözünü kamaştırıyor.',
      'Ev büyük, ama konak gibi değil: haremi selamlığı ayrı değil. Alt katın bir yanı erkeklere bırakılmış; üst katta bir misafir odası var.',
      ['ic', 'Bu evde herkes herkesin kapısının önünden geçiyor. İki ay sonra bu kapıların hiçbiri benim olmayacak.'],
      'Sabahları pencereyi açınca odaya reçine kokusu doluyor. On gündür kimse bana iğneli bir söz söylemedi. Perihan Hanım bile denize bakarken susuyor.',
      {
        eger: (S) => cezali(S, 'nimet'),
        ise: ['Nimet\'in mutfak cezası konakta kaldı. Ada\'da el az; merdiveni yine o çıkıyor. Perihan Hanım unutmuş değil; ertelemiş.'],
        degilse: [{
          eger: (S) => cezali(S, 'sefik'),
          ise: ['Ada evinde oda az. Şefik\'in yatağı yine benim odama serildi. Perihan Hanım "Burada idare edelim" dedi; konağa dönünce ne olacağını söylemedi.'],
          degilse: [{
            eger: (S) => cezali(S, 'madam'),
            ise: ['Madam Ada\'da da yatıya kalmıyor; komşu bir Rum ailenin evinde bir oda tutmuş. Sabah gelir, akşam yemeğinden önce gider.'],
            degilse: [],
          }],
        }],
      },
      ['ic', 'Düğüne iki ay. Çeyizim İstanbul\'da, sandıklarda bekliyor. Buraya birkaç kat elbiseyle geldim. Hafifim; ilk defa.', 'gulumseyen'],
      ['ic', 'Erkekler sabah vapuruyla İstanbul\'a indi. Öğleden sonra çamlığa çıkacağız.'],
      'Şefik sofanın ortasında, yere uzanmış bir şey çiziyor.',
    ],

    olaylar: [
      /* ---------- YAN (g0, sofa): Şefik'in vapur resmi (ek) ---------- */
      {
        id: 'b4_yan_resim', yan: true, mekan: 'ada_sofa', kisi: 'sefik', kosul: (S) => S.gorev === 0,
        sahne: ['sefik'],
        adimlar: [
          'Şefik yere uzanmış. Önünde defteri; dili dudağının kenarında.',
          { goster: ['murekkep_resim'] },
          ['sefik', 'Abla, bak! Bizi getiren vapur. Bacası, çarkı, kaptanı. Dumanı sayfaya sığmadı.', 'sevincli'],
          'Duman sayfanın kenarından taşmış, döşeme tahtasına geçmiş. Kurşun kalemle.',
          {
            soru: 'Şefik resmini uzatıyor.',
            secim: [
              {
                m: '"Güverteye bizi de çiz."', etki: { sefik: 1 }, bayrak: { b4_resim: 'ikimiz' },
                adimlar: [
                  'Şefik güverteye iki çöp adam çizdi; biri uzun, biri kısa. Uzununun arkasına bir örgü ekledi.',
                  ['sefik', 'Bu sen. Bu ben. El ele; düşmeyelim diye.'],
                  ['f', 'Düşmeyiz.', 'gulumseyen'],
                ],
              },
              {
                m: '"Döşemeyi silelim; Perihan Hanım görmesin."', etki: { vakar: 1 }, bayrak: { b4_resim: 'sildi' },
                adimlar: [
                  'Mendilimi ıslatıp tahtadaki dumanı sildim. Şefik omzumun üstünden baktı.',
                  ['sefik', 'Ben çizerim, sen silersin abla. Hep öyle.'],
                  ['ic', 'Doğru söylüyor. Bu evde işim bu.'],
                ],
              },
            ],
          },
          { gizle: 'murekkep_resim' },
        ],
      },

      /* ---------- Kıyafet (ek) ---------- */
      {
        id: 'b4_giyin', mekan: 'ada_oda', kisi: 'mehves', kosul: (S) => S.gorev === 0,
        sahne: ['mehves'],
        adimlar: [
          'Nimet üç feraceyi yatağın üstüne yan yana sermiş. Pencere açık; perde denizden gelen yelle şişip iniyor.',
          ['mehves', 'Bak şu havaya hanımcığım. Konakta olsak şimdi kafesin ardında oturuyorduk.'],
          ['mehves', 'İki ay sonra gelinsin. Çeyizin sandıkta, gerdanlığın kutusunda. Bana da arkandan bakmak kaldı.'],
          ['f', 'Ağlamak yok Nimet. Daha iki ay var.', 'gulumseyen'],
          ['mehves', 'Ağlayan kim? Gözüme çam tozu kaçtı.'],
          'Yatağın kenarına oturdum. Nimet dizimin dibine çöktü, ayakkabılarımın bağını kendi bağladı; on yaşımdaki gibi.',
          ['mehves', 'Münevver Hanım iyi kadın. Oğlu da ona çekmiş derler. O konakta kimse sana "şunu neden yaptın" demeyecek. Ben ona seviniyorum.'],
          ['f', 'Ben de Nimet. En çok ona.', 'gulumseyen'],
          ['ic', 'Yüksek sesle söyledim. Bu evde bir sevinci yüksek sesle söylemek, kuşu kafesten çıkarmak gibi. İnsan pencereyi kapalı mı diye bakıyor.'],
          {
            eger: (S) => S.bayrak.kiyafet_nisan === 'yadigar',
            ise: [['mehves', 'Nişanda annenin ipeklisini giymiştin. Bugün de gözün leylak feracede; bilirim ben seni.']],
            degilse: [],
          },
          ['mehves', 'Çamlıkta bütün Ada birbirini görür hanımcığım. Hangisini giyeceksin?'],
          {
            soru: 'Ada\'da herkes herkesi görür. Çamlığa ne giyeceğim?',
            secim: [
              { m: 'Düz, açık gri ferace; usulünce bağlanmış yaşmak.', etki: { itibar: 2, vakar: 1 }, bayrak: { kiyafet_ada: 'sade' },
                adimlar: [['mehves', 'Kimse dönüp bakmaz. Bakmasın da.'], 'Gri kumaş omuzlarıma oturdu. Aynada bir gölge gibiyim; rahat bir gölge.'] },
              { m: 'Filiz yeşili ipek ferace, en ince yaşmak, dantelli şemsiye.', etki: { dedikodu: 1 }, bayrak: { kiyafet_ada: 'gosterisli' },
                adimlar: [['mehves', 'Bu yaşmağın altından yüzün seçiliyor hanımcığım. Bilmiş ol.'], ['f', 'Bir kere de seçilsin Nimet. İki ay sonra evli kadın olacağım.', 'gulumseyen'], 'İpek ışığı tuttu. Aynada baharın kendisi duruyordu; ben de bir an inandım.'] },
              { m: 'Annemin leylak feracesi; kesimi eski, kumaşı ağır.', etki: { vakar: 1, mehves: 1 }, bayrak: { kiyafet_ada: 'yadigar' },
                adimlar: ['Nimet feraceyi omzuma koyarken sustu. Elleri yakada bir an fazla kaldı.', ['mehves', 'Boyun onun boyu olmuş. Eteğini kısaltmaya gerek kalmadı.']] },
            ],
          },
          { kiyafet: 'ferace', kartsiz: true, kilit: 'Çamlığa çıkıyorsun: ferace ve yaşmak.' },
          'Nimet yaşmağımı bağladı; örgümü feracenin içine aldı.',
          {
            eger: (S) => S.bayrak.madalyon === 'acik',
            ise: ['Madalyonu yakamın içine kendi eliyle soktu. "Sokakta olmaz hanımcığım. Eve dönünce yine çıkarırsın."'],
            degilse: ['Madalyon yakamın içinde. Nimet parmağıyla yokladı; yerinde mi diye.'],
          },
          ['mehves', 'Haydi. Çocuklar bahçe kapısında bekliyor.'],
          { gorev: 1 },
        ],
      },

      /* ---------- YAN (g1, bahçe): Nazlı'nın kurdelesi (ek). Balkon sahnesinde delile döner. ---------- */
      {
        id: 'b4_yan_mefharet', yan: true, mekan: 'ada_bahce', kisi: 'mefharet', kosul: (S) => S.gorev === 1,
        sahne: ['mefharet'],
        adimlar: [
          'Nazlı bahçe kapısında, yüzü asık. Saçının kurdelesi çözülmüş; bir ucu omzunda.',
          ['mefharet', 'Hatice abla bağlamadı. Sabahtan beri ağlıyor. Annem ona "odana git" dedi.'],
          {
            soru: 'Nazlı kurdelesini bana uzatıyor.',
            secim: [
              {
                m: 'Kurdeleyi bağlamak; bir şey sormamak.', etki: { vakar: 1 }, bayrak: { b4_reftar_agladi: true },
                adimlar: [
                  'Kurdeleyi bağladım; fiyongu iki kere düğümledim.',
                  ['mefharet', 'Seninki Hatice ablanınkinden sıkı oldu.'],
                  ['ic', 'Hatice sabahtan beri ağlıyor. Sormadım. Çocuğun ağzından ev sırrı alınmaz.'],
                ],
              },
              {
                m: '"Neden ağlıyormuş?"', etki: { calibe_suphe: 1 }, bayrak: { b4_reftar_agladi: true },
                adimlar: [
                  ['mefharet', 'Bilmem. Annem "kimseye söyleme" dedi. Sana söyledim işte.'],
                  'Kurdeleyi bağladım. Nazlı çemberini kapıp koştu.',
                  ['ic', 'Akşam annesine "ablam sordu" diyecek. Sormasaydım.'],
                ],
              },
            ],
          },
        ],
      },

      /* ---------- Çamlık: nereye (ek). Öbür talipler için kapı. ---------- */
      {
        id: 'b4_camlik', mekan: 'ada_camlik', tetik: 'giris', kosul: (S) => S.gorev === 1,
        sahne: ['sefik', 'josephine'],
        adimlar: [
          'Bahçe kapısından çıkınca yol hemen yokuşa vuruyor. Nazlı önde, çemberini çeviriyor. Madam şemsiyesini açmış, arkadan geliyor.',
          'Çamlık. Reçine kokusu, şemsiyeler, ağır ağır geçen arabalar. Şefik elimi bırakmıyor.',
          ['sefik', 'Abla, şu kozalağı tepedeki dala kim değdirir? Sen mi, ben mi?', 'sevincli'],
          ['f', 'Ben feraceyle kozalak atamam Şefik.'],
          ['sefik', 'Kimse bakmıyor! Bir kere!'],
          'Baktım; yolun bu yanında kimse yoktu. Kozalağı aldım, attım. Dala değmedi. Madam\'ın şemsiyesine değdi.',
          ['josephine', 'Mademoiselle! Paris\'te buna suikast derler.'],
          'Şefik gülmekten yere oturdu. Ben de güldüm; yaşmağın içinde, sesli, karnım ağrıyana kadar.',
          ['ic', 'En son ne zaman böyle güldüm? Hatırlamıyorum. Hatırlamadığıma göre çok olmuş.', 'gulumseyen'],
          ['josephine', 'Gülünce annenize benziyormuşsunuz. Nimet öyle söylüyor. Ben yalnız resmini gördüm; ama inanırım.'],
          'Bir çamın dibine oturduk. Madam çocuklara ağaçların Fransızcasını öğretti. Şefik "pin" dedi, Nazlı "pen" dedi; kavga çıktı. Madam ikisine de birer kozalak verip barıştırdı.',
          ['sefik', 'Abla, Ada\'da hep kalsak olmaz mı? Burada kimse kimseye kızmıyor.'],
          ['f', 'Yaz bitince herkes evine döner Şefik. Ama bu yaz daha başlamadı.', 'gulumseyen'],
          'Başını dizime koydu. Saçındaki çam iğnelerini tek tek ayıkladım. Hiçbir yere yetişmem gerekmiyordu; bunu ne kadar az tattığımı o an anladım.',
          'Aşağıda deniz, parlak bir tepsi gibi. Karşıda İstanbul\'un sisi. O sisin içinde bir yerde bir konak var; iki ay sonra evim olacak.',
          {
            soru: 'Çamlık yolu ikiye ayrılıyor; kır kahvesinin önü de kalabalık. Nereye?',
            secim: [
              {
                m: 'Gezinti yoluna; arabaların, şemsiyelerin arasına.', etki: { itibar: 2 }, bayrak: { mekan_b4: 'salon' },
                adimlar: [
                  'Şemsiyeler dönüyor, eldivenli eller selamlaşıyor. Burada herkes hem bakıyor hem bakılıyor.',
                  'Çok gösterişli bir araba ağır ağır geçti. Atları İstanbul\'dan vapurla getirtilmiş diyorlar.',
                  'İçindeki genç bey çevresine, kendisine bakılsın diye bakıyordu. Gözü bir an bende durdu.',
                  { eger: (S) => S.bayrak.kiyafet_ada === 'gosterisli', ise: ['Arabayı yavaşlattırdı. Yaşmağımın altından yüzümün seçildiğini o an hatırladım.'], degilse: [] },
                  ['josephine', 'Merhum tacirin küçük oğluymuş. Remzi Bey.'],
                  ['ic', 'Bakılmak isteyen bir adam. Bakan bir adamdan başka bir şey bu.'],
                  'Şefik atlara baktı, ben yola. Araba köşeyi dönene kadar ensemde bir çift göz taşıdım.',
                ],
              },
              {
                m: 'Kır kahvesinin kadınlara ayrılmış sıralarına.', etki: { vakar: 1 }, bayrak: { mekan_b4: 'kenar', bilgi_remzi: true },
                adimlar: [
                  'Madam çocuklara şerbet aldı. Ben sıranın ucuna oturdum. Yaşmaklı bir kız, öbür yaşmaklı kızlardan ayırt edilmez.',
                  'Yan sırada yaşmaklı iki hanım tacir ailesini konuşuyordu. Beni tanımadılar.',
                  '"Babası kuruşu sayardı; oğulları mirası saçıyor. Küçüğü Remzi Bey\'e asil bir kız arıyorlarmış. Kaça olursa olsun."',
                  '"Kızın babası da borçluysa iş kolay" dedi öteki. İkisi de güldü.',
                  ['ic', 'Kaça olursa olsun. Kız alınır gibi konuşuyorlar; at alınır gibi.'],
                  ['ic', 'Benim nişanım böyle olmadı. Beni soran, beni görmeden önce annemin adını sormuş. Şükür.'],
                ],
              },
              {
                m: 'Şefik\'in elinden tutup çamların arasına.', etki: { sefik: 1, mukaddem: 2, calibe_suphe: 1 }, bayrak: { mekan_b4: 'kuytu' },
                adimlar: [
                  'Öbür çocukları Madam\'a bıraktım. Çamların arası serin; ayağımızın altında kuru iğneler çıtırdıyor.',
                  ['sefik', 'Abla, Münevver nine bana selamlıkta oda döşetmiş ya; kitaplığını Kenan ağabey kendi eliyle dizmiş!'],
                  ['f', 'Sen nereden biliyorsun?', 'gulumseyen'],
                  ['sefik', 'Halim Efendi söyledi. O da görmüş. İki ay sonra benim olacak.'],
                  ['sefik', 'Sen de gelirsin odama. Kapıyı vurursun, ben "buyurun" derim.'],
                  ['f', 'Vurmadan girmem.', 'gulumseyen'],
                  ['ic', 'İki ay. Şefik sayıyor; ben saymaya korkuyorum.'],
                  'Dönüşte Nazlı yüzünü asmıştı. "Abla bizi bıraktı" dedi Madam\'a; duyayım diye yüksek sesle.',
                ],
              },
            ],
          },
          'Güneş alçaldı. Şefik\'in cepleri kozalak dolu. Nazlı yürürken uyukluyor; eli Madam\'ın elinde.',
          ['ic', 'Bu günü bir kutuya koyup saklayabilsem. Kışın açıp bakmak için.', 'gulumseyen'],
          'Dönüş yolunda bahçe kapısının önünde yabancı bir araba gördük. Atı terli. İstanbul vapurundan yeni inmiş biri var.',
          { gorev: 2 },
        ],
      },

      /* ---------- YAN (g2, bahçe): çeşme başı; kapıda Nabi (ek) ---------- */
      {
        id: 'b4_yan_cesme', yan: true, mekan: 'ada_bahce', kisi: 'cesme', kosul: (S) => S.gorev === 2,
        sahne: [],
        adimlar: [
          'Bahçedeki eski çeşme. İskeleden tutulmuş bir kira arabası kapıda; arabacı gölgede uyukluyor.',
          'Ellerimi yıkadım. Su buz gibi; parmaklarımdaki reçine çıkmadı.',
          { goster: ['nabi'] },
          'Bahçe kapısında Nabi Bey belirdi. Erkeklerle beraber erken dönmüş.',
          {
            eger: (S) => S.bayrak.topuk === 'vurdu',
            ise: ['Fesi kaşına kadar inik. Beni görünce eli alnına gitti; sonra indi.'],
            degilse: [{
              eger: (S) => S.bayrak.topuk === 'sikayet',
              ise: ['Beni gördü; selam vermedi. Güzden beri vermiyor.'],
              degilse: [['nabi', 'Çamlıktan mı Feride Hanım? Yanakların kızarmış. Damat bey görse!']],
            }],
          },
          {
            soru: 'Nabi Bey kapıyla aramda duruyor.',
            secim: [
              {
                m: 'Başımı eğmeden yanından geçmek.', etki: { vakar: 1 }, bayrak: { b4_nabi_kapi: 'gecti' },
                adimlar: ['Yanından geçtim. Arkamdan ıslık çaldı; bir şarkının yarısını.'],
              },
              {
                m: '"Misafirimiz var dayı bey. Bu gece sesinizi alçak tutunuz."', etki: { isyan: 1 }, bayrak: { b4_nabi_kapi: 'soz' },
                adimlar: [
                  ['nabi', 'Misafir mi? Bilirim. Ablam misafiri pek iyi ağırlayacak; sen merak etme.'],
                  'Güldü. Neye güldüğünü o an anlamadım.',
                  ['ic', '"Pek iyi ağırlayacak." Bu sözü cebime koymuşum; haberim yok.'],
                ],
              },
            ],
          },
          { gizle: 'nabi' },
        ],
      },

      /* ---------- Kenan geliyor; Perihan misafiri tutuyor ---------- */
      {
        id: 'b4_misafir', mekan: 'ada_sofa', tetik: 'giris', kosul: (S) => S.gorev === 2,
        sahne: [],
        adimlar: [
          { kiyafet: 'ev', kartsiz: true, kilit: 'Evdesin: gündelik kıyafetin.' },
          'Sofaya çıktım. Yaşmağımı çözerken aşağıdan erkek sesleri geldi. Biri babamın sesi; bu saatte evde olmazdı.',
          { goster: ['usak'] },
          ['usak', 'Kenan Bey geldiler efendim. Efendiyi görmeye. Aşağıda, erkekler tarafında.'],
          { gizle: 'usak' },
          ['ic', 'O. Bu evde. Bir kat aşağıda.', 'utanmis'],
          'Elim yaşmağın düğümünde kaldı. Parmaklarım çözmeyi unuttu.',
          {
            eger: (S) => S.bayrak.mektup_munevver === 'mukaddem',
            ise: [{
              // Rica ancak kâğıt yerine vardıysa (haber === 'vardi') karşı tarafça bilinir
              eger: (S) => S.bayrak.haber === 'vardi',
              ise: [['ic', 'Güzün annesinden rica etmiştim: bana yazmasın. Yazmadı. Kendi geldi.']],
              degilse: [['ic', 'Güzün annesine bir rica yazmıştım: bana yazmasın. O kâğıt yerine varmadı; ricamdan haberi yok. Yine de bir satır yazmadı. Kendi geldi.']],
            }],
            degilse: [['ic', 'Nişan gününden beri bu kadar yakınıma gelmedi. Koca bir kış geçti.']],
          },
          'Pencereye gittim. Perdeyi açmadım; kenarından baktım.',
          { goster: ['mukaddem'] },
          'Bahçede, babamın yanında yürüyor. Fesini eline almış, bir şey anlatıyor. Şefik öbür yanında; onun adımına uymak için koşar gibi gidiyor.',
          'Babam güldü. Elini onun omzuna koydu. Babamın güldüğünü bu yıl kaç kere gördüm?',
          ['ic', 'Babam onu seviyor. Bunu şimdi, pencereden görüyorum. İçimde bir düğüm gevşedi.', 'gulumseyen'],
          'Başını kaldırdı; evin pencerelerine baktı. Hangisinde olduğumu bilemezdi. Yine de perdenin kenarını bıraktım.',
          { gizle: 'mukaddem' },
          { goster: ['calibe', 'gulumser'] },
          'Merdiven boşluğundan sesler geliyor. Perihan Hanım tırabzana yaslanmış, aşağıya sesleniyor.',
          ['calibe', 'Bu saatte vapur mu kalır efendi? Misafiri bu gece göndermek ayıp olur. Üst kattaki odayı kendi elimle hazırlarım.', 'gulumser'],
          '"Anneme söz verdim" dedi aşağıdan bir ses. Onun sesi. Babam "Bir pusula yaz; uşak iskeleye indirsin. Akşam karşıya geçen pazar kayığı götürür, annen merakta kalmaz" dedi. Kaldı.',
          ['calibe', 'Misafirin hizmetine Hatice girsin. Eli işe yakışır.', 'sinsi'],
          ['ic', 'Hatice. Bu evde kahveyi başka kız da götürür. Neden Hatice?'],
          'Perihan Hanım dönerken beni gördü. Gülümsedi; yanağıma dokundu.',
          ['calibe', 'Yüzün al al olmuş kızım. Çam havası mı, başka hava mı?', 'gulumser'],
          {
            eger: (S) => S.bayrak.mekan_b4 === 'kuytu',
            ise: [['calibe', 'Nazlı söyledi: çamlıkta çocukları Madam\'a bırakıp ağaçların arasına girmişsin. Ada\'da ağaçların da gözü vardır kızım.', 'gulumser']],
            degilse: [],
          },
          { gizle: 'calibe' },
          { goster: ['sefik', 'sevincli'] },
          ['sefik', 'Abla! Kenan ağabey bana resimli bir kitap verdi. İlk sayfasına kendi eliyle iki satır yazmış! Aşağı iniyorum; ona bir şey söyleyeyim mi?', 'sevincli'],
          'Şefik kitabı göğsüne bastırmış. Perihan Hanım\'ın kapısı aralık. Hatice elinde tepsiyle merdivenin başında.',
          ['ic', 'Ne söylesem bu merdivenden iner. Ama yalnız inmez; yanında bir çift kulak da iner.'],
          {
            soru: 'Şefik kapıda bekliyor. Kenan Bey bir kat aşağıda.',
            secim: [
              { m: '"Hiçbir şey söyleme. Yalnız terbiyeli ol."', etki: { vakar: 1 }, bayrak: { ada_selam: 'yok' },
                adimlar: ['Şefik yüzünü ekşitti, indi.', ['ic', 'Söyleyecek sözüm vardı. Bu evde söylenen söz sahibine varmıyor.'], 'Hatice tepsiyle arkasından indi. Taşıyacak bir şey bulamadı bende.'] },
              { m: '"Ablam selam ediyor, de."', etki: { mukaddem: 3 }, bayrak: { ada_selam: 'selam' },
                adimlar: ['Şefik koşarak indi, koşarak çıktı.', ['sefik', 'Söyledim! Kıpkırmızı oldu abla. "Ben de" dedi, başka bir şey diyemedi.', 'sevincli'], ['ic', 'İki kelime. İkisi de yerine vardı.', 'gulumseyen'], 'Merdivenin başında Hatice durmuş, bize bakıyordu. Göz göze gelince tepsisine eğildi.'] },
              { m: 'Kitabın arasına çamlıktan topladığım bir dal koymak.', etki: { mukaddem: 5, calibe_suphe: 1, isyan: 1 }, bayrak: { ada_selam: 'isaret' },
                adimlar: ['Feracemin cebindeki çam dalını kitabın arasına koydum. Yazı yok; yalnız dal.', ['sefik', 'Bunu kim koydu diyeyim?'], ['f', 'Bir şey deme. Kitabı açınca görür.'], 'Kitap aşağı indi. Biraz sonra kahve tepsisiyle Hatice da indi.', ['ic', 'Hatice o kitabı görecek. Görsün. Bir dal çam kimseyi asmaz. Asmaz, değil mi?']] },
            ],
          },
          { gizle: 'sefik' },
          // Perde arkası (roman s. 126-128): oyuncu tuzağı görür, Feride görmez
          { temizle: true },
          { kart: 'Aynı akşam, üst katta.' },
          { goster: ['calibe', 'soguk'] }, { goster: ['reftar'] },
          ['pa', 'Hatice hanımının ayaklarına kapanmış. Nabi Bey ona "seni evime hanım yaparım" demiş; sonra Leyla Hanım\'la sözlenmiş.'],
          ['pa', 'Perihan Hanım bu tohumu çoktan ekmişti: Hatice\'yi kardeşinin hizmetine bile bile vermişti.'],
          ['calibe', 'Efendi duyarsa seni ya satar ya kovar. Tek çare var: suçu başkasının üstüne atmak.', 'soguk'],
          ['reftar', 'Sizin elinizdeyim efendim. Ne derseniz harfi harfine yaparım.'],
          ['calibe', 'Bu gece misafirin odasına kahveyi sen götüreceksin. Sabah sana ne soracaklarını, ne diyeceğini ben söylerim.', 'sinsi'],
          { goster: ['suha'] },
          ['pa', 'Süha Bey ceketinin iç cebinden küçük, koyu renkli bir şişe çıkarıp masaya bırakıyor. Üstünde bir eczane kâğıdı var: konyak.'],
          ['suha', 'Efendinin dolabından. Sabah "ben verdim" diyeceğim.'],
          { temizle: true },
          'Akşam yemeğini kadınlar yukarıda, erkekler aşağıda yedi. Döşemenin altından çatal sesleri, babamın sesi geldi. Bir kere de onun gülüşü; kısa, çekingen.',
          ['ic', 'Aynı çatının altında, ayrı sofralarda. İki ay sonra aynı sofrada olacağız. Lokmam boğazımdan zor geçti; sevinçten.', 'utanmis'],
          {
            eger: (S) => !cezali(S, 'madam'),
            ise: [
              { goster: ['josephine'] },
              'Madam tabağımın dolu kalktığını gördü. Bir şey demedi; yalnız ekmeği önüme itti, gözünün ucuyla güldü.',
              ['josephine', 'Bu akşam Fransızca dersi yok Feride Hanım. Aklınız kelimelerde durmaz; görüyorum.'],
              { gizle: 'josephine' },
            ],
            degilse: ['Nimet tabağımın dolu kalktığını gördü. Bir şey demedi; yalnız ekmeği önüme itti, gözünün ucuyla güldü.'],
          },
          'Perihan Hanım sofrada pek neşeliydi. Nazlı\'ya iki kere tatlı verdi. Hatice\'ye "Kahveyi koyu yap; misafir yol yorgunu" dedi. Üç kere söyledi.',
          { goster: ['calibe', 'gulumser'] },
          'Akşam yemeğinden sonra erkekler gezmeye çıktı. Perihan Hanım misafir odasını kendi eliyle hazırladı; ben yukarı çıkmadım.',
          'Çarşafı sandıktan kendi çıkardı. Lambanın gazını kendi doldurdu. Nimet elinde yastık kılıfıyla merdivenin dibinde kaldı.',
          { gizle: 'calibe' },
          ['ic', 'Perihan Hanım bir misafire yatak sermez. Bu gece serdi. Hatice da kahve tepsisini elinden bırakmıyor.'],
          { gorev: 3 },
        ],
      },

      /* ---------- YAN (g3, sofa): Nimet saç örer (ek) ---------- */
      {
        id: 'b4_yan_nimet', yan: true, mekan: 'ada_sofa', kisi: 'mehves', kosul: (S) => S.gorev === 3,
        sahne: ['mehves'],
        adimlar: [
          'Nimet sofada lambaların fitilini kısıyor. Kolunda katlanmış bir yastık kılıfı.',
          ['mehves', 'Yirmi yıldır bu ailenin misafir yatağını ben sererim hanımcığım. Bu gece hanımefendi kılıfı elimden aldı. "Sen yorulma Nimet" dedi.'],
          ['mehves', 'Hanımefendi beni yorulmaktan ne zaman sakındı ki?', 'endiseli'],
          {
            eger: (S) => cezali(S, 'nimet'),
            ise: [['mehves', 'Kışın mutfaktan yukarı adım attırmadılar. Burada el az diye merdiveni yine bana çıkartıyorlar. Unuttuklarını sanma.']],
            degilse: [],
          },
          'Yanıma geldi. Örgüme baktı; çamlıkta dağılmış, arasına iğne yaprak girmiş.',
          {
            soru: 'Nimet örgüme bakıyor.',
            secim: [
              {
                m: '"Bu gece saçımı sen ör Nimet. Çocukken ördüğün gibi."', etki: { mehves: 2 }, bayrak: { b4_nimet_sac: true },
                adimlar: [
                  'Sedire oturdum. Arkama geçti, örgüyü çözdü. Tarak yavaş yavaş indi.',
                  ['mehves', 'Annenin saçı da böyleydi. Tarağı tutmaz, kayardı. Gelin olduğu sabah ben ördüm.'],
                  ['f', 'Benimkini de sen öreceksin.', 'gulumseyen'],
                  ['mehves', 'İki ay sonra. İnşallah.'],
                  ['ic', '"İnşallah"ı bir an geç söyledi.'],
                ],
              },
              {
                m: '"Git yat Nimet. Bugün çok yoruldun."', etki: { vakar: 1 },
                adimlar: [
                  ['mehves', 'Yatarım. Sen de geç kalma. Bu gece ev kalabalık.'],
                  'Kılıfı koluna aldı, merdivene yürüdü. Basamakta bir kere dönüp üst kata baktı.',
                ],
              },
            ],
          },
        ],
      },

      /* ---------- YAN (g3, bahçe): Madam'ın kendi nişanı (ek). Sonda bir satır geri döner. ---------- */
      {
        id: 'b4_yan_madam', yan: true, mekan: 'ada_bahce', kisi: 'josephine', kosul: (S) => S.gorev === 3 && !cezali(S, 'madam'),
        sahne: ['josephine'],
        adimlar: [
          'Akşam serinliği. Madam bahçedeki sırada, şalına sarınmış, denize bakıyor. Elinde açılmamış bir kitap.',
          ['josephine', 'Oturunuz Feride Hanım. Bu saatte deniz, benim memleketimin denizine benziyor. Yalnız bu saatte.'],
          ['josephine', 'Size bir şey anlatayım mı? Bir Fransızca dersi sayınız.'],
          ['josephine', 'Ben de nişanlıydım. Yirmi yaşında. O bir mektupla vazgeçti. Mektubu üç gün açmadım; içinde ne olduğunu biliyordum.'],
          {
            soru: 'Madam ilk defa kendinden söz ediyor.',
            secim: [
              {
                m: '"Sonra ne yaptınız Madam?"', etki: { josephine: 2 }, bayrak: { b4_madam_hikaye: true },
                adimlar: [
                  ['josephine', 'Çalıştım. Elinde bir iş olanın, kalbi kırılınca elleri ne yapacağını bilir. Sizin de elinizde iş olsun diye uğraşıyorum: Fransızca, piyano, hesap.'],
                  ['josephine', 'Size lazım olmayacak. Siz mesut olacaksınız. Ama olsun.'],
                  ['ic', '"Ama olsun." Bu iki kelimeyi yanıma aldım.'],
                ],
              },
              {
                m: '"Bunları düşünmeyiniz Madam. Bu akşam güzel."', etki: { josephine: 1 },
                adimlar: [
                  ['josephine', 'Haklısınız. Bu akşam güzel. Güzel akşamları saymak lazım; ben saymayı geç öğrendim.'],
                  'Kitabını açtı; okumadı.',
                ],
              },
            ],
          },
        ],
      },

      /* ---------- GECE: bölümün kararı ---------- */
      {
        id: 'b4_gece', mekan: 'ada_oda', tetik: 'giris', kosul: (S) => S.gorev === 3,
        sahne: ['sefik'],
        adimlar: [
          { kiyafet: 'gecelik', kartsiz: true, kilit: 'Gece. Beyaz gecelik.' },
          'Orta kattaki oda. Şefik yatağına girdi; kitabı yastığının yanında. Üst katta bir kapı açıldı, kapandı. Erkekler daha dönmedi.',
          ['sefik', 'Abla, bak. İlk sayfaya ne yazmış; okuyayım mı?', 'sevincli'],
          { goster: ['kitap'] },
          ['sefik', '"Şefik Bey kardeşime: Bu kitaptaki bütün gemilere bir gün beraber bineriz. Ağabeyin Kenan."'],
          'Şefik "ağabeyin" kelimesini iki kere okudu. İkincisinde sesi inceldi.',
          ['sefik', 'Benim hiç ağabeyim olmadı abla. Şimdi oluyor.'],
          ['f', 'Oluyor Şefik.', 'gulumseyen'],
          { gizle: 'kitap' },
          ['sefik', 'Abla, beni Münevver ninenin konağına ne zaman gönderirsin?'],
          ['f', 'Haydi gel, yat.', 'gulumseyen'],
          'Yorganını çenesine kadar çektim. Saçı çam kokuyor; avucunda hâlâ bir kozalak. Almadım.',
          'Nefesi ağırlaştı. Uyudu.',
          'Ev de susuyor. Önce mutfağın sesi kesildi. Sonra Perihan Hanım\'ın kapısı kapandı. Aşağıda uşak sürgüyü çekmedi; erkekleri bekliyor.',
          'Örgümü çözdüm, yeniden ördüm. Merdivende bir etek hışırtısı geçti; yukarı çıktı, bir süre sonra indi. Ayak sesinden tanıdım: Hatice.',
          ['ic', 'Misafir daha dönmedi. Boş odaya kahve götürülmez. O hâlde ne götürdü?'],
          'Kalkıp kapıya kadar gittim. Elimi tokmağa koydum; açmadım. Geri döndüm, yatağın kenarına oturdum.',
          ['ic', 'Kapı dinlemem. Kimsenin odasına bakmam. Ama bu gece uyursam, sabah bana ne anlatırlarsa onu dinlerim.'],
          ['ic', 'Onu bu odadan koruyamam. Yapabileceğim tek şey, sabah biri bir söz söylerse karşısına koyacak bir şeyim olması. Kendi gözüm mü, başkasının gözü mü, yoksa yalnız inancım mı?'],
          {
            soru: 'Ev sustu. Şefik uyudu. Sabah bir söz çıkarsa elimde ne olsun?',
            secim: [
              {
                m: 'Uyumak. Nişanlı kız misafirin gecesini beklemez. Sabah elimde yalnız inancım olur.', etki: { vakar: 2 }, bayrak: { ada_gece: 'uyudu' },
                iz: 'Uyudun. O gece ne olduysa, sana anlatılacak.',
                adimlar: [
                  'Şamdanı söndürdüm. Karanlıkta tavan önce kayboldu, sonra yavaş yavaş geri geldi.',
                  'Bahçe kapısı gıcırdadı. Erkekler döndü. Merdivende ayak sesleri: babamınki ağır; bu katta kesildi. Bir tanesi daha yukarı çıktı. Hafif, ölçülü.',
                  ['ic', 'Onun adımı. Başımın üstünden geçti. Tavanda bir tahta gıcırdadı, sustu.', 'utanmis'],
                  ['ic', 'Merak, ayıbın kapı komşusudur. Annem böyle derdi; Nimet öyle söylüyor. Kalkmayacağım.'],
                  'Yorganı çeneme çektim. Yukarıda bir sandalye çekildi. Bir pencere açıldı; o da denizi dinliyor demek.',
                  'Dinlememeye çalıştım. Dinlememek için Şefik\'in nefesini saydım. Uyku geç geldi; ama geldi.',
                  'Gecenin bir yerinde bir kapı sesiyle gözümü açtım. Fısıltı mıydı, rüzgâr mıydı? Yastığı çevirdim, yine uyudum.',
                  ['ic', 'Sabah her şey yerli yerinde olacak. Öyle olmalı.'],
                ],
              },
              {
                m: 'Lambayı alıp sofaya çıkmak; merdivenin başındaki sedirde, herkesin göreceği yerde dikiş dikmek. Görürüm; görülürüm de.', etki: { isyan: 1, calibe_suphe: 2 }, bayrak: { ada_gece: 'sofa', delil_ada: true },
                iz: 'Geceyi sofada, ışığın altında geçirdin. Gördün; görüldün.',
                adimlar: [
                  'Lambamı, dikiş sepetimi aldım. Şefik\'in üstünü örttüm, kapıyı aralık bıraktım. Sofada, merdivenin başındaki sedire oturdum. Saklanmadım; ışığım açıktı.',
                  'Elimde Şefik\'in gömleği; yakasının düğmesi kopmuş. İpliği iğneye üçüncü denemede geçirdim.',
                  ['ic', 'Nişanlı bir kız gece yarısı sofada ne arar? Düğme diker. Soran olursa cevabım elimde.'],
                  'Bahçe kapısı gıcırdadı. Erkekler döndü; sesler aşağıda dağıldı. Bir ayak sesi merdivenden çıktı. Sahanlıkta, lambamın ışığının değdiği yerde bir an durdu.',
                  'Başımı kaldırmadım. İğne parmağıma battı. "Hayırlı geceler" dedi biri aşağıdan; o değildi. Ayak sesi yukarı devam etti.',
                  ['ic', 'Durdu. Işığımı gördü. Benim olduğumu bildi mi? Bilmesin. Bilsin.', 'utanmis'],
                  { goster: ['calibe', 'gulumser'] },
                  'Perihan Hanım odasına geçerken sofada durdu. Elinde şamdan.',
                  ['calibe', 'Hâlâ mı buradasın kızım? Gözlerini yorma. Gelin olacak kızın gözü çukura kaçmamalı.', 'gulumser'],
                  ['f', 'Şu düğmeyi bitireyim efendim.'],
                  ['calibe', 'Bitir kızım, bitir.', 'gulumser'],
                  'Gülümsedi. Kapısını kapadı; ama sürgünün sesini duymadım.',
                  { gizle: 'calibe' },
                  'Üst kattaki lamba, herkes çekildikten az sonra söndü. Merdiven boşluğuna vuran ışık kesildi. Erken.',
                  ['ic', 'Yol yorgunu. Yattı, uyudu. Lambası sönen adamın gözünde uyku vardır.'],
                  'Düğme bitti. Bir düğme daha buldum; sağlamdı, söküp yeniden diktim. Fitili iki kere kıstım. Bir pervane lambanın camı çevresinde döndü, döndü, düştü.',
                  'Ev uyudu. Yalnız deniz; bir de duvardaki saat.',
                  'Çok sonra merdivende hafif bir ayak sesi. Hatice. Beni sedirde görünce tepsiyi az kalsın düşürüyordu.',
                  ['reftar', 'Küçük hanım... Uyumadınız mı? Misafir bey su istemişti de.'],
                  ['f', 'Misafirin lambası söneli bir saat oldu Hatice.'],
                  'Tepsinin üstünde bardak yoktu. Sürahi yoktu. Elleri titriyordu.',
                  ['ic', 'Yüzüme bakmadı. Bana kızgın değil; korkuyor. Benden mi, başkasından mı, bilemedim.'],
                  'Bir şey demedi. Aşağı, kızların odasına indi. Sabaha karşı Perihan Hanım\'ın kapısı açıldı; iki kadının fısıltısı. Sonra sessizlik.',
                  ['ic', 'Gördüm: lamba erken söndü, Hatice aşağı indi. Onlar da beni gördü: gece yarısı, sofada, misafir katının merdiveninde oturan nişanlı kız.'],
                  { delil: 'Ada gecesi sofadaydım: misafir odasının lambası herkes çekildikten az sonra söndü. Hatice çok sonra elinde boş tepsiyle aşağı, kızların odasına indi.' },
                ],
              },
              {
                m: 'Nimet\'ten rica etmek: bu gece kızların odasında Hatice\'nin yatağına göz kulak olsun. Ben görülmem; bedelini o göze alır.', etki: { mehves: 1 }, bayrak: { ada_gece: 'nimet', nimet_tanik: true },
                iz: 'Nimet o gece Hatice\'nin yatağını bekledi.',
                adimlar: [
                  'Kapıyı araladım. Nimet sofada son lambayı söndürüyordu. Elimle çağırdım; parmak ucunda geldi.',
                  { goster: ['mehves'] },
                  ['f', 'Nimet, bu gece Hatice\'yle aynı odada yatıyorsun. Ne zaman gelip yattığına bak. Bir şey sorma; yalnız bil.'],
                  'Nimet hemen cevap vermedi. Uyuyan Şefik\'e baktı, sonra tavana; misafir odasının olduğu yere.',
                  ['mehves', 'Bilirim hanımcığım. Bilirim de, bildiğimi bir gün söylememi istersen, o gün bu evde ekmeğim biter. Onu da bil.'],
                  ['f', 'Biliyorum Nimet.', 'mahzun'],
                  {
                    eger: (S) => S.bayrak.haberci === 'nimet',
                    ise: [['mehves', 'Güzün kâğıdını götürdüm; baharda yatak bekliyorum. Yirmi yılda öğrenmediğim işleri bir yılda öğrettin bana.']],
                    degilse: [],
                  },
                  ['mehves', 'Öyleyse uyu sen. Bu gece ben uyumam.', 'kararli'],
                  'Çıkmadan önce eğildi, Şefik\'in yorganını düzeltti. Sonra alnımdan öptü; çocukken yaptığı gibi.',
                  { gizle: 'mehves' },
                  ['ic', 'Ben uyuyacağım, o bekleyecek. Bedelini o ödeyecek bir şeyi ondan istedim.'],
                  'Şamdanı söndürdüm. Bahçe kapısı gıcırdadı; erkekler döndü. Bir ayak sesi yukarı çıktı, başımın üstünden geçti. Tavanda bir tahta gıcırdadı, sustu.',
                  'Yukarıda bir pencere açıldı. O da denizi dinliyor demek. Aynı sesi, bir kat arayla.',
                  ['ic', 'Aşağıda, kızların odasında bir kadın benim için gözünü kırpmadan yatıyor. Uyku bana haram olmalıydı. Yine de geldi.'],
                ],
              },
            ],
          },
          { temizle: true },
          { kart: 'Sabah.' },
          { kiyafet: 'ev', kartsiz: true, kilit: 'Evdesin: gündelik kıyafetin.' },
          {
            eger: (S) => S.bayrak.ada_gece === 'sofa',
            ise: ['Gün ağarırken odama girdim. Bir saat ya uyudum ya uyumadım. Sonra martılar başladı.'],
            degilse: ['Martı sesiyle uyandım. Bir an nerede olduğumu, dün kimin geldiğini unuttum. Sonra hatırladım; içim ısındı.'],
          },
          'Kenan Bey sabah vapuruyla gitti. Onu görmedim; yalnız bahçe kapısının kapandığını duydum.',
          'Perihan Hanım başını mendille sıkmış, perişan dolaşıyor. Kahvaltıda kimse konuşmadı. Hatice ortada yok. Babam İstanbul\'a inmedi.',
          ['ic', 'Babam vapuru kaçırmaz. Bugün kaçırdı.'],
          'Şefik kahvaltıda iki kere "Kenan ağabey neden bana veda etmeden gitti?" diye sordu. İkisinde de Perihan Hanım cevap verdi: "Ye kuzum." Süha Bey çayını karıştırdı; kaşığı fincana hiç değmedi.',
          ['ic', 'Bir şey olmuş. Herkes biliyor; bir ben bilmiyorum, bir de Şefik. Ya da herkes bilir gibi yapıyor.'],
          { gorev: 4 },
        ],
      },

      /* ---------- Sabah: balkondaki "itiraf" (roman s. 130-134) ---------- */
      {
        id: 'b4_balkon', mekan: 'ada_sofa', tetik: 'giris', kosul: (S) => S.gorev === 4,
        sahne: ['sefik'],
        adimlar: [
          'Sofada Şefik\'e ders gösteriyorum. Harita önümüzde; Şefik Ada\'yı arıyor, parmağı Marmara\'da geziyor.',
          'Balkon kapısı açık; babam, Perihan Hanım ve Süha Bey balkonda. Sesleri alçak. Rüzgâr perdeyi içeri itiyor, Şefik\'in defterinin sayfalarını çeviriyor.',
          'Kapıyı örtmek için kalktım. Elim tokmağa değdiği an bir ad duydum: Kenan. Elim orada kaldı.',
          ['suha', '{i}(Balkondan){/i} Kabahat benim efendim. Dolabınızdan bir şişe konyak aldım. Hatice "misafirin uykusu yok" dedi; Kenan Bey geldi, içki istedi. İki saatte şişeyi bitirdi. Sendeleyerek gitti.'],
          ['sai', '{i}(Balkondan){/i} Rüya mı görüyorum?', 'mahzun'],
          'Tül perdenin arkasından babamın yüzünü gördüm. Fesi dizinde. Bir elini alnına koymuş, öyle kalmış.',
          ['calibe', '{i}(Balkondan){/i} Ben de söylemeyecektim efendi. Gece misafir odasında ışık gördüm. Hatice\'yi yatağında bulamadım. Kapı aralığından baktım...', 'gulumser'],
          'Hatice\'yi çağırdılar. Ağlayarak doğruladı.',
          ['reftar', '{i}(Balkondan){/i} Ben de şaşırmıştım efendim. O sarhoştu.'],
          ['sai', '{i}(Balkondan){/i} O sarhoşmuş. Ya sen neydin?', 'ciddi'],
          'Babamın sesi çatladı. Onu ömrümde kimseye bağırırken duymadım. Şimdi de bağırmıyor; sesi kırılıyor.',
          ['sai', '{i}(Balkondan){/i} Ben o çocuğu oğlum bildim. Dün omzuna elimi koydum. Bu elimi.', 'mahzun'],
          ['suha', '{i}(Balkondan){/i} Gençtir efendim. Belki bir daha olmaz. Ama bir baba kızını "belki"ye veremez.'],
          'Tokmak avucumda buz gibi. Dizlerim benim değil. Kapıyı kapamaya bir kol hareketi yeter; kolum kalkmıyor.',
          ['sefik', 'Abla? Neden öyle duruyorsun? Kenan ağabeyi mi söylüyorlar?'],
          'Kapıyı kapadım. Geç kapadım.',
          ['f', 'Dersine bak Şefik.'],
          'Sesim çıktı. Kimin sesi olduğunu tanıyamadım. Haritada Ada, Şefik\'in parmağının altında küçücük bir lekeydi.',
          ['ic', 'Yalan. Baştan sona. O içki içmez. Ama üçü de aynı şeyi söylüyor ve babam üçünü de dinliyor.', 'ofkeli'],
          ['ic', 'Dün bu saatte çamlıkta kozalak atıyordum. Bir gün. Bir gün sürdü.', 'mahzun'],
          {
            eger: (S) => S.bayrak.ada_gece === 'sofa',
            ise: [
              ['ic', 'Lamba erken söndü. Hatice aşağı indi. Ben oradaydım. Onlar da biliyor orada olduğumu.'],
              ['calibe', '{i}(Balkondan, alçak sesle){/i} Bir şey daha efendi: kızımız o gece sofada, merdiven başında oturuyordu. Misafir katının merdiveninde. Neyi bekliyordu, ben sormadım.', 'sinsi'],
              ['ic', 'Gördüğümü bana karşı çevirdi. Tanıklığım, suçum oldu.', 'mahzun'],
              ['ic', '"Bitir kızım, bitir" demişti gece. Gülümsemişti. O gülüşün içinde bu sabah varmış.'],
              { etki: { baba_guven: -2 } },
            ],
            degilse: [{
              eger: (S) => S.bayrak.ada_gece === 'nimet',
              ise: [
                { goster: ['mehves', 'endiseli'] },
                'Nimet merdivenin başında belirdi. Yüzü kül gibi. Gece uyumadığı gözünün altından belli.',
                ['mehves', '{i}(Fısıltıyla){/i} Hanımcığım. Hatice gece yarısından sonra geldi, yattı. Sabaha kadar yanımdaydı; nefesini saydım. Misafir odasında sabahlamış olamaz.', 'endiseli'],
                ['mehves', 'Gece yarısından önce nerede olduğunu bilmem; görmediğimi söylemem. Gördüğüm bu kadar.'],
                ['mehves', 'Bunu efendiye söylersem bugün kovulurum; inanmazlar da. Söyle dersen söylerim.'],
                ['ic', 'Bir tanığım var. Konuşursa işinden olacak, belki boşuna. Onu şimdi mi harcayacağım, saklayacak mıyım?'],
                { gizle: 'mehves' },
                { delil: 'Nimet o gece Hatice\'nin yanında yattı: "Gece yarısından sonra geldi; sabaha kadar yanımdaydı." Gece yarısından öncesini görmedi.' },
              ],
              degilse: [
                ['ic', 'Uyudum. O gece ne oldu, bilmiyorum. Elimde yalnız bir inanç var: o yapmaz.', 'mahzun'],
                ['ic', 'Gece bir kapı sesi duymuştum. Yastığı çevirip uyumuştum. O kapı hangi kapıydı? Artık hiç bilemeyeceğim.'],
              ],
            }],
          },
          {
            eger: (S) => !!S.bayrak.b4_reftar_agladi,
            ise: [
              ['ic', 'Nazlı dün çamlığa çıkarken söylemişti: Hatice sabahtan beri ağlıyormuş. O saatte misafir daha gelmemişti. İnsan, olmamış bir şeye önceden ağlar mı?'],
              { delil: 'Nazlı söyledi: Hatice, Kenan Bey daha gelmeden, sabahtan beri ağlıyordu.' },
            ],
            degilse: [],
          },
          { eger: (S) => S.bayrak.b4_nabi_kapi === 'soz', ise: [['ic', 'Nabi Bey dün bahçe kapısında "Ablam misafiri pek iyi ağırlayacak" demişti. Gülmüştü. Biliyordu.']], degilse: [] },
          { eger: (S) => !!S.bayrak.bilgi_reftar_nabi, ise: [['ic', 'Nimet bir yıl önce Hatice\'yle Nabi Bey için bir şey söylemişti. Bugün balkonda Nabi Bey\'in adı hiç geçmedi.']], degilse: [] },
          { eger: (S) => !!S.bayrak.delil_soylenti, ise: [['ic', 'Beyoğlu sözünü çıkaran da Süha Bey\'di. Aynı ağız, ikinci şişe.']], degilse: [] },
          { eger: (S) => !!S.bayrak.nabi_kin, ise: [{ goster: ['nabi'] }, ['nabi', 'Sıska damadın marifetini duydun mu Feride Hanım?'], { gizle: 'nabi' }], degilse: [] },
          'Balkon boşaldı. Perihan Hanım içeri girerken yanımdan geçti. Mendili alnında; gözleri kupkuru.',
          ['calibe', 'Duydun mu kızım? Duymadıysan da duyarsın. Ben senin için ağladım bu sabah. Ana yüreği; üvey de olsa yanıyor.', 'gulumser'],
          'Elini omzuma koydu. Hafif, sıcak bir el. Omzumu çekmedim; çekecek gücüm yoktu.',
          ['ic', 'Benim için ağlamış. Yüzünde bir damla izi yok.'],
          { goster: ['josephine'] },
          'Öğleye doğru Madam yanıma geldi. Haritayı topladı, Şefik\'i bahçeye, Nazlı\'nın yanına yolladı. Sonra kapıyı kapadı, karşıma oturdu.',
          ['josephine', 'Bu evde bana kimse bir şey söylemez Feride Hanım. Ben de sormam. Ama yüzünüzü okurum; o kadar Türkçem var.'],
          ['josephine', 'Bir şey söylemeyiniz. Yalnız şu suyu içiniz. Sonra şu pencereyi beraber açalım.'],
          'Suyu içtim. Bardak dişlerime çarptı. Pencereyi o açtı; ben yalnız yanında durdum.',
          { gizle: 'josephine' },
          'Babam o günü ve geceyi ağzını açmadan geçirdi.',
          'Öğle yemeğine inmedi. Akşam sofrasında tabağına baktı; çatalına dokunmadı. Bir kere başını kaldırdı, bana baktı. Bir şey soracak sandım. Sormadı.',
          ['ic', 'Sorsaydı. "Sen ne dersin kızım" deseydi. Bütün gün o soruyu bekledim.', 'mahzun'],
          { goster: ['sefik', 'aglamakli'] },
          'Gece Şefik yatağında dönüp durdu. Kitabı yastığının altına saklamış.',
          ['sefik', 'Abla, Kenan ağabey kötü bir şey mi yapmış? Nazlı "artık gelmeyecek" dedi.', 'aglamakli'],
          {
            soru: 'Şefik bana bakıyor. On yaşında; ne söylersem ona inanacak.',
            secim: [
              {
                m: '"Yapmadı. Ben inanmıyorum; sen de inanma."', etki: { sefik: 1, mukaddem: 1 }, bayrak: { b4_sefik_cevap: 'inanma' },
                adimlar: [
                  ['sefik', 'O zaman babama söyleyelim!'],
                  ['f', 'Söyleyeceğiz. Sırası gelince.'],
                  ['ic', 'Sırası. Ne zaman, kimin önünde, bilmiyorum. Ama ona yalan söylemedim.'],
                ],
              },
              {
                m: '"Büyüklerin işi Şefik. Sen uyu."', etki: { vakar: 1 }, bayrak: { b4_sefik_cevap: 'sus' },
                adimlar: [
                  'Yüzünü duvara döndü. Omuzları bir süre kıpırdadı.',
                  ['ic', 'Onu korudum sandım. Belki yalnız bıraktım.', 'mahzun'],
                ],
              },
            ],
          },
          ['sefik', 'Kitabı geri mi vereceğiz?', 'aglamakli'],
          ['f', 'Kitap senin. Hediye geri alınmaz.'],
          'Bunu söylerken, ertesi gün benden neyin geri isteneceğini bilmiyordum.',
          { gizle: 'sefik' },
          { kart: 'Ertesi gün.' },
          { gorev: 5 },
        ],
      },

      /* ---------- YAN (g5, oda): gerdanlık kutusuna veda (ek) ---------- */
      {
        id: 'b4_yan_kutu', yan: true, mekan: 'ada_oda', kisi: 'gerdanlik', kosul: (S) => S.gorev === 5,
        sahne: ['gerdanlik'],
        adimlar: [
          'Gerdanlığın kutusu çekmecede, mendillerin altında. Babam aşağıda beni soruyor. Ne isteyeceğini biliyorum; ev dünden beri bunu fısıldıyor.',
          'Kapağı açtım. Taşlar sabah ışığında soğuk soğuk parladı.',
          {
            eger: (S) => S.bayrak.gerdanlik === 'boyun',
            ise: ['Bir akşam bunu bütün sofranın önünde taşımıştım. Perihan Hanım\'ın gözü tabağından çok boynumdaydı.'],
            degilse: ['Nişandan beri kaç kere açıp baktım? Üç. Her seferinde kapağı çabuk kapadım; nazar değer diye.'],
          },
          {
            soru: 'Kutu açık. Aşağıda babam bekliyor.',
            secim: [
              {
                m: 'Son bir kere boynuma tutup aynaya bakmak.', etki: { mukaddem: 2, isyan: 1 }, bayrak: { b4_kutu: 'takti' },
                adimlar: [
                  'Boynuma tuttum; kopçasını kapamadım. Aynada bir an bir gelin durdu. Sonra ellerim indi.',
                  ['ic', 'Bana yakışıyordu. Bunu ben bileyim; kimse bilmese de.', 'mahzun'],
                ],
              },
              {
                m: 'Kapağı kapamak.', etki: { vakar: 1 }, bayrak: { b4_kutu: 'kapadi' },
                adimlar: [
                  'Kapağı kapadım. Çıt dedi.',
                  ['ic', 'Bu taşlar benim değildi. Benim olan, taşları gönderen niyetti. O bir kutuya sığmaz; geri de verilmez.'],
                ],
              },
            ],
          },
        ],
      },

      /* ---------- Gerdanlık geri isteniyor (roman s. 134) ---------- */
      {
        id: 'b4_gerdanlik', mekan: 'ada_sofa', kisi: 'sai', kosul: (S) => S.gorev === 5,
        sahne: [{ id: 'sai', ifade: 'mahzun' }],
        adimlar: [
          'Babam sofada ayakta. Sırtı pencereye dönük; yüzü gölgede. Gözleri kıpkırmızı. İki gündür tıraş olmamış.',
          'Beni görünce doğruldu. Elini uzattı. Eli havada bir an titredi; sonra durdu.',
          ['sai', 'O uğursuz gerdanlığı ver kızım!', 'mahzun'],
          ['ic', 'Uğursuz. Bunu elmasa söylemiyor. Bir insana söylüyor.'],
          {
            eger: (S) => S.bayrak.gerdanlik === 'baba',
            ise: ['Nişan günü "siz saklayınız" diye ona vermiştim. Ada\'ya gelirken kutuyu bana geri vermişti: "Gelin olacak kız mücevherini kendi taşır." Şimdi geri istiyor.'],
            degilse: [],
          },
          'Odama gittim. Kutu çekmecenin dibinde, mendillerin altında. Kadifesi avucumda ılık; canlı bir şey taşır gibi taşıdım.',
          { eger: (S) => S.bayrak.b4_kutu === 'takti', ise: ['Az önce son bir kere boynuma tutmuştum. Kimse görmedi. Kopçası hâlâ açık.'], degilse: [] },
          { goster: ['gerdanlik'] },
          'Sofaya döndüm. Babam aynı yerde, aynı duruşla. Şefik kapının eşiğinde; ne içeri giriyor ne gidiyor.',
          ['ic', 'Gerdanlık geri gidecek. Bunu durduramam. Yalnız nasıl vereceğimi seçebilirim.'],
          ['ic', 'Babamın yüzüne bakıyorum. Öfke yok. Öfke olsa kolay olurdu. Utanç var; benim adıma, kendi adına.', 'mahzun'],
          'Kutu ile babamın avucu arasında bir karış var. O bir karışın içinde bir kış duruyor: nişan günü, Münevver Hanım\'ın eli, Şefik\'in odası, evvelki gece okunan iki satır.',
          {
            eger: (S) => !!S.bayrak.babaya_soyleme_niyeti,
            ise: [['ic', 'Bir gün babama her şeyi söyleyeceğim demiştim. İşte karşımda. Elimde lakırdıdan başka ne var?']],
            degilse: [['ic', 'Ona söyleyecek çok şeyim var. Hiçbirinin şahidi yok.']],
          },
          'Perihan Hanım\'ın kapısı aralık. İçeriden ses gelmiyor. Sessizliğin de bir kulağı var.',
          {
            soru: 'Babam elini uzatmış bekliyor.',
            secim: [
              {
                m: 'Tek soru sormadan getirip vermek.', etki: { vakar: 2, baba_guven: 4 }, bayrak: { gerdanlik_cevap: 'verdi' },
                iz: 'Sustun, verdin.',
                adimlar: [
                  'Kutuyu avucuna koydum.',
                  'Babam bir an yüzüme baktı. Bir şey diyecek oldu; demedi.',
                  ['ic', '"Kızım" diyecekti belki. Sustum; o da sustu. Susmayı ondan öğrenmişim.'],
                ],
              },
              {
                m: 'Verirken söylemek: "Ben inanmıyorum efendim."', etki: { baba_guven: -4, mukaddem: 5, isyan: 2 }, bayrak: { gerdanlik_cevap: 'inanmadim', inanmadim: true },
                iz: 'Babana "inanmıyorum" dedin.',
                adimlar: [
                  ['f', 'Emrinizdir; veriyorum. Ama ben inanmıyorum efendim.'],
                  ['sai', 'Sana soran olmadı.', 'ciddi'],
                  'Sesi titredi. Kutuyu alırken eli elime değdi; buz gibiydi.',
                  ['ic', 'Söyledim. Bu evde ilk defa birinin yüzüne "inanmıyorum" dendi. Bedelini bilmiyorum; pişman değilim.'],
                ],
              },
              {
                m: '"Hatice\'yi bir de benim önümde dinleyiniz efendim."', etki: { calibe_suphe: 2, isyan: 1, mukaddem: 2 }, bayrak: { gerdanlik_cevap: 'reftar' },
                iz: 'Hatice\'nin senin önünde konuşmasını istedin.',
                adimlar: [
                  'Babam bir süre sustu. Sonra uşağa başıyla işaret etti. Hatice geldi; arkasından, çağrılmadan, Perihan Hanım.',
                  { goster: ['reftar'] }, { goster: ['calibe', 'soguk'] },
                  'Hatice\'nin gözleri şiş. İki gündür ağlıyor. Yalan söyleyen insan bu kadar ağlar mı? Korkan insan ağlar.',
                  {
                    eger: (S) => S.bayrak.ada_gece === 'sofa',
                    ise: [
                      ['f', 'Hatice, o gece sofada bana ne demiştin? "Misafir bey su istedi." Lambası söneli bir saat olmuştu. Elindeki tepsi boştu.'],
                      'Hatice\'nin gözleri hanımına kaydı. Dudakları kıpırdadı; söz çıkmadı.',
                      ['calibe', 'Görüyor musunuz efendi? Kız gece yarısı misafirin kapısını bekliyormuş. Bunu kendi ağzıyla söylüyor.', 'sinsi'],
                      ['sai', 'Yeter! İkiniz de.', 'ciddi'],
                      'Ama babam Hatice\'ye baktı. Uzun baktı.',
                      { etki: { baba_guven: 1 } }, { bayrak: { baba_ada_supheli: true } },
                    ],
                    degilse: [{
                      eger: (S) => S.bayrak.ada_gece === 'nimet',
                      ise: [
                        ['f', 'Hatice, o gece kaçta yattın? Yanında yatan biri var; o da söylesin.'],
                        'Hatice sarardı. Perihan Hanım bir adım öne çıktı.',
                        ['calibe', 'Yanında yatan kim? Nimet mi? Efendi, artık hizmetçileri de mi şahit tutacağız?', 'soguk'],
                        ['sai', 'Yeter! Hizmetçi lafıyla nişan dönmez.', 'ciddi'],
                        ['ic', 'Nimet\'in adını verdim. Babam dinlemedi; Perihan Hanım dinledi.', 'mahzun'],
                        // Nimet sahnede yok: bağ etkisi akşam, kendisi öğrendiğinde işlenir
                        { etki: { calibe_suphe: 1 } }, { bayrak: { nimet_aciga: true } },
                      ],
                      degilse: [
                        'Hatice ağlayarak ezberini bir daha okudu. Kelimesi kelimesine; dünkünün aynı.',
                        ['sai', 'Yeter!', 'ciddi'],
                        ['ic', 'Aynı kelimeler, aynı sırayla. İnsan gördüğünü iki kere aynı kelimeyle anlatmaz. Ama bunu ispat edemem.'],
                      ],
                    }],
                  },
                  { gizle: 'reftar' }, { gizle: 'calibe' },
                  'Kutu elimde kalmıştı. Uzattım. Babam aldı; yüzüme bakmadan.',
                ],
              },
            ],
          },
          {
            eger: (S) => S.bayrak.gerdanlik === 'boyun',
            ise: ['Bir akşam bütün sofrada boynumda taşımıştım. Şimdi kutusunda, babamın koltuğunun altında.'],
            degilse: ['Çekmecemde aylarca kilitli durdu. Şimdi babamın koltuğunun altında.'],
          },
          { gizle: 'gerdanlik' },
          'Babam kutuyu koltuğunun altına sıkıştırdı. Kapıya yürüdü. Eşikte elini Şefik\'in başına koydu; yüzüne bakmadan.',
          { goster: ['sefik', 'aglamakli'] },
          ['sefik', 'Baba, o ablamın! Nereye götürüyorsun?', 'aglamakli'],
          'Babam durmadı. Vapura yetişmek için sokağa çıktı. Bahçe kapısı arkasından açık kaldı.',
          ['sefik', 'Abla... Ben Münevver ninenin konağına gitmeyecek miyim artık? Odam hazırdı. Kitaplığım dizilmişti.', 'aglamakli'],
          'Diz çöktüm. Onu göğsüme bastırdım. Söyleyecek bir söz aradım; bulamadım.',
          {
            eger: (S) => S.bayrak.b4_resim === 'ikimiz',
            ise: [['sefik', 'Vapurun güvertesine ikimizi çizmiştim. Kenan ağabeyi de çizecektim. Yer bırakmıştım.', 'aglamakli']],
            degilse: [],
          },
          { gizle: 'sefik' },
          { etki: { mukaddem: 0, dedikodu: 1 } },
          { temizle: true },
          { kart: 'O akşam vapurda bir hanım ötekinin kulağına eğildi:', alt: '"Gerdanlık geri gitmiş."' },
          'Ev bütün gün alçak sesle konuştu. Mutfakta, merdiven altında, kapı aralarında. Kimseye bir şey sormadım. Sormama gerek yoktu; her fısıltının içinde aynı kelime vardı: geri.',
          'Perihan Hanım öğleden sonra terziye haber yolladı: gelinlik provası ertelenmiş. "Şimdilik" demiş.',
          { goster: ['mehves', 'endiseli'] },
          'Akşam Nimet odama bir tepsi getirdi. Dokunmadım. Bir şey demeden çıktı; bir saat sonra geldi, soğuyanı aldı, sıcağını bıraktı.',
          {
            eger: (S) => !!S.bayrak.nimet_aciga,
            ise: [
              ['mehves', 'Adımı efendinin önünde vermişsin hanımcığım. Hanımefendi mutfakta söyledi; gülerek söyledi. Darılmadım. Ama keşke önce bana deseydin.', 'endiseli'],
              { etki: { mehves: -1 } },
            ],
            degilse: [],
          },
          ['mehves', 'Ağla hanımcığım. Annen de derdini içine atardı. Sen anlat.', 'endiseli'],
          ['f', 'Ağlarsam duyarlar Nimet.', 'mahzun'],
          ['mehves', 'Duysunlar. Ben kapıda dururum.'],
          'Kapıya gitti, sırtını verdi. Ben yüzümü yastığa gömdüm. Ne kadar sürdü bilmiyorum. Nimet bir kere bile dönüp bakmadı.',
          { gizle: 'mehves' },
          {
            eger: (S) => !!S.bayrak.b4_madam_hikaye,
            ise: [['ic', 'Madam bahçede "Elinde bir iş olanın, kalbi kırılınca elleri ne yapacağını bilir" demişti. Ellerime baktım. Boş duruyorlar.']],
            degilse: [],
          },
          'Boynuma dokundum. Madalyon yerinde. Annemin harfi. Bana kalan tek mücevher, zaten benim olandı.',
          'Gece Şefik kendi yatağından kalktı, benimkine girdi. Bir şey sormadı. Kozalağını avucuma bıraktı, öyle uyudu.',
          'Ertesi sabah pencerenin önünde İstanbul tarafına baktım. Gözlerim yanıyordu. Deniz dünkü deniz, çamlar dünkü çamlar. Vapur dumanını savura savura karşıya gidiyor; içinde bir kadife kutu.',
          ['ic', 'Nişanım bozuldu. Bir gecede, üç kişinin sözüyle. Ben o gece ne yaptıysam yaptım; yetmedi.', 'mahzun'],
          {
            eger: (S) => !!S.bayrak.nimet_tanik && !S.bayrak.nimet_aciga,
            ise: [['ic', 'Ama Nimet gece yarısından sonrasını biliyor. Sakladım onu. Bir gün, dinleyecek biri olduğunda konuşacak.']],
            degilse: [{ eger: (S) => !!S.bayrak.delil_ada, ise: [['ic', 'Ama gördüm. Lambanın söndüğü saati biliyorum. Bir gün biri bana soracak.']], degilse: [] }],
          },
          'Sokak kapısının çıngırağı çaldı.',
          { bolumSonu: true },
        ],
      },
    ],

    merak: 'Nişanım bozuldu. Kapının çıngırağı çalıyor; bu evin kapısını bu saatte çalacak, babamın yüzüne bakmaya cesaret edecek bir tek kişi var. Geldiyse, beni almaya mı geldi, veda etmeye mi?',

    sonNotu: function (S) {
      const b = S.bayrak, p = [];
      if (b.ada_gece === 'sofa') p.push('O geceyi sofada, lambanın altında geçirdim. Lambasının erken söndüğünü, Hatice\'nin aşağı indiğini gördüm. Sabah bunu bana karşı kullandılar.');
      else if (b.ada_gece === 'nimet') p.push(b.nimet_aciga ? 'O gece Nimet bekledi. Sabah adını babamın önünde verdim; dinlemedi. Perihan Hanım dinledi.' : 'O gece Nimet bekledi: Hatice gece yarısından sonra geldi, sabaha kadar yanındaydı. Öncesini görmedi. Onu sakladım.');
      else p.push('O gece uyudum. Sabah bana anlatılanı dinledim. İnanmadım; ama elimde inançtan başka bir şey yok.');
      if (b.gerdanlik_cevap === 'inanmadim') p.push('Gerdanlığı verirken "inanmıyorum" dedim. Babam "Sana soran olmadı" dedi.');
      else if (b.gerdanlik_cevap === 'reftar') p.push('Hatice\'yi benim önümde dinlesinler istedim. Ezberini okudu.');
      else p.push('Gerdanlığı tek söz etmeden verdim.');
      if (b.ada_selam === 'isaret') p.push('Kitabının arasına bir dal çam koymuştum. Hatice o kitabı gördü.');
      else if (b.ada_selam === 'selam') p.push('Şefik\'le selam yollamıştım. Yerine vardı; son varan sözüm bu oldu.');
      if (b.mekan_b4 === 'salon') p.push('Çamlıkta bana bakan bir araba vardı. Adını öğrendim: Remzi Bey.');
      if (b.b4_reftar_agladi) p.push('Nazlı\'nın ağzından bir şey öğrendim: Hatice, misafir gelmeden önce ağlıyordu.');
      p.push('Nişanım bozuldu. Çıngırak çalıyor.');
      return p.join(' ');
    },
  };
})();

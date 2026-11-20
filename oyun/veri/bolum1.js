/* =========================================================================
   BİRİNCİ BÖLÜM: DÜĞÜN EVİ
   Nasıl yazılır:
   - Konuşma:   ["fevkiye", "Metin", "ifade"]   (ifade isteğe bağlı)
   - Feride:    ["f", "Metin", "gulumseyen"]
   - İç ses:    ["ic", "Metin"]
   - Anlatım:   "Metin"   ya da   [null, "Metin"]
   - Perde arkası anlatımı: ["pa", "Metin"]
   - Seçim:     { secim: [ { m: "Seçenek", etki: {itibar: 5}, iz: "Kısa sonuç.", adimlar: [...] }, ... ], soru: "..." }
                iz: seçimden hemen sonra kısa bildirim olarak görünür, bölüm sonunda
                "Bu bölümde verdiğin kararlar" altında listelenir.
   - Görev:     { gorev: 3 }      Kart: { kart: "Başlık", alt: "alt yazı" }
   - Sahneye kişi: { goster: ["calibe", "ofkeli"] }  çıkar: { gizle: "calibe" }
   - Koşullu:   { eger: (S) => ..., ise: [...], degilse: [...] }
   - Etkiler: itibar, dedikodu, baba_guven, calibe_suphe, sefik, vakar, isyan;
     bağ: munevver, fevkiye, mehves; gönül: mukaddem, remzi, halim, suha
   - sohbet(S, kim): S.sohbetSayaci[kim] o kişiye kaçıncı kez tıklandığını verir (0'dan).
   Bayraklar: yuz, madalyon, cevap (2. bölüm okur), reftar_tavir, mendil,
     bakis, reftar_bahce, reftarBulundu, donus, murekkep, sofra_bakis, piyano,
     bilgi_reftar_nabi (2. ve 3. bölüm okur), babaya_soyleme_niyeti,
     kitap (acti/sefik), yasemin (sakla/geri), kese.
   Kenan 1. bölümde sahneye çıkmaz (dönemin usulü): adı dedikoduda geçer,
     asıl gönül kazancı Münevver Hanım'ın getirdiği resimli kitaptadır.
   (oyun için ek) yazan yerler romanda yoktur.
   ========================================================================= */
window.BOLUMLER = window.BOLUMLER || {};

window.BOLUMLER[1] = {
  no: 1,
  ad: 'Düğün Evi',
  ilkFaz: 'A',
  baslangic: 'dugun_sofa',

  fazlar: {
    A: { // Düğün evi
      mekanlar: ['dugun_sofa', 'dugun_bahce', 'dugun_kose', 'gelin_odasi'],
      baglanti: {
        dugun_sofa: ['dugun_bahce', 'gelin_odasi'],
        dugun_bahce: ['dugun_sofa', 'dugun_kose'],
        dugun_kose: ['dugun_bahce'],
        gelin_odasi: ['dugun_sofa'],
      },
    },
    B: { // Sait Efendi'nin konağı, akşam
      mekanlar: ['konak_sofa', 'fazila_oda', 'yemek_salonu', 'buyuk_salon', 'mutfak'],
      baglanti: {
        konak_sofa: ['fazila_oda', 'yemek_salonu', 'buyuk_salon', 'mutfak'],
        fazila_oda: ['konak_sofa'],
        yemek_salonu: ['konak_sofa', 'buyuk_salon'],
        buyuk_salon: ['konak_sofa', 'yemek_salonu'],
        mutfak: ['konak_sofa'],
      },
    },
  },

  gorevler: [
    /* 0 */ { metin: "Düğün evinin bahçesinde Leyla'yı bul.", ipucu: 'Leyla gülenlerin arasında olur. Bahçeye sofadan çıkılıyor.' },
    /* 1 */ { metin: "Leyla'yla bahçenin kuytu köşesine çekil.", ipucu: 'Kuytu köşeye bahçeden geçilir. Leyla yanımda.' },
    /* 2 */ { metin: "Hatice'yi ara: önce düğün evinin sofasına bak.", ipucu: 'Perihan Hanım onu en son sofada, kahve tepsilerinin oradan görmüş.' },
    /* 3 */ { metin: "Hatice'yi bahçede, gül ağacının dibinde bul.", ipucu: 'Kahve dağıtan kız onu dedikoducu hanımların yanında görmüş. Bahçeye sofadan inilir.' },
    /* 4 */ { metin: "Leyla'yla gelin odasına gir, gelini gör.", ipucu: 'Leyla yanımda. Gelin odası sofadan açılıyor.' },
    /* 5 */ { metin: "Odana çık: Şefik resmini gösterecek.", ipucu: 'Odamız konağın sofasından açılıyor.' },
    /* 6 */ { metin: 'Yemek salonuna in: akşam yemeği.', ipucu: 'Nimet yemeğe çağırdı. Yemek salonu sofadan açılıyor.' },
    /* 7 */ { metin: 'Büyük salonda babana piyano çal.', ipucu: 'Kahve büyük salonda içiliyor.' },
    /* 8 */ { metin: 'Gece odana çekil.', ipucu: 'Nimet odamda kandili yakmıştır.' },
  ],

  /* Kim nerede? (görev sırasına göre) */
  kisiler: function (S) {
    const g = S.gorev;
    if (S.faz === 'A') {
      const m = {
        dugun_sofa: ['davetliler', 'hizmetci'],
        dugun_bahce: g === 0 ? ['fevkiye', 'hanimlar', 'davetliler']
          : (g === 3 ? ['hanimlar', 'reftar', 'davetliler'] : ['hanimlar', 'davetliler']),
        dugun_kose: g >= 4 ? ['calibe', 'reftar', 'cesme']
          : (g >= 2 ? ['fevkiye', 'calibe', 'cesme'] : ['cesme']),
        gelin_odasi: ['gelin', 'davetliler'],
      };
      // Leyla, Feride'yle birlikte yürüdüğü görevlerde onun yanındadır
      if ((g === 1 || g === 4) && m[S.mekan] && !m[S.mekan].includes('fevkiye')) m[S.mekan].push('fevkiye');
      return m;
    }
    return {
      konak_sofa: g === 5 ? ['sefik', 'ayna'] : ['ayna'],
      fazila_oda: (g === 6 || g === 7) ? ['sefik', 'resim', 'kitap'] : (g === 8 ? ['resim', 'kitap'] : ['resim']),
      yemek_salonu: g === 7 ? ['nabi', 'sofra', 'salon_resmi'] : ['sofra', 'salon_resmi'],
      buyuk_salon: g === 8 ? ['sai', 'calibe', 'piyano'] : ['piyano'],
      mutfak: (g === 6 || g === 7) ? ['mehves', 'asci'] : ['asci'],
    };
  },

  /* Olay olmayan zamanlarda kişiye dokununca söylenenler */
  sohbet: function (S, kim) {
    const g = S.gorev, b = S.bayrak;
    const n = (S.sohbetSayaci && S.sohbetSayaci[kim]) || 0;
    const sira = (liste) => liste[n % liste.length];
    switch (kim) {
      case 'hanimlar': {
        if (g === 0) return ['Gül ağacının dibinde dört hanım oturuyor. Yelpazelerinin ardından bana bakıyorlar.'];
        if (g === 3) return [['h1', 'Sus kardeş, dinleyelim! Hizmetçi kız anlatıyor.'], ['ic', 'Önce Hatice\'yi yakalamalıyım.', 'mahzun']];
        let liste;
        if (b.cevap === 'oksuz') liste = [
          [['h3', 'Gel yavrum, gel otur yanımıza. Biz seni yanlış anlamışız.'], ['ic', 'Gülümsedim, ama oturmadım.', 'gulumseyen']],
          [['h2', 'Öksüz kız ama terbiyeli. Kimin elinde büyüdüyse aferin ona.'], ['ic', 'Kimin elinde büyüdüm? Kendi elimde.', 'mahzun']],
          [['h3', 'Allah analı babalı büyütsün hepsini.']],
        ];
        else if (b.cevap === 'sert') liste = [
          [['h4', 'Bakın bakın, dilli kız yine geliyor.'], ['h1', 'Sus kardeş, duyacak!']],
          [['h2', 'Biz bir şey demedik küçük hanım. Harf okuduk, o kadar.'], ['ic', 'Harf okudular. Sonra da hüküm verdiler.', 'ofkeli']],
          [['h4', 'Tatlı dil yılanı deliğinden çıkarır derler. Acı dil ne çıkarır, bilinmez.']],
        ];
        else liste = [
          [['h1', 'Şu sarışın kız hâlâ burada. Annesi kimdi, onu bilen var mı?']],
          [['h2', 'Sessiz kız. Durgun suyun derini olur derler.'], ['ic', 'Hiçbir şey demedim. Yine de bir şey dedirttim.', 'mahzun']],
          [['h3', 'Bırakın kızcağızı kardeş. Düğün evinde ağlatmayın.']],
        ];
        if (g >= 4 && b.mendil === 'git') liste = [[['h4', 'Hizmetçiniz ne tatlı dilli kız küçük hanım. Evinizi bize oturduğumuz yerden gösterdi.'], ['ic', 'Ne anlattığını bilmiyorum. Bilmek de istemiyorum.', 'mahzun']]].concat(liste);
        return sira(liste);
      }
      case 'davetliler':
        if (S.mekan === 'dugun_sofa') return sira([
          ['Sofada fincanlar elden ele geçiyor. "Gelinin kaynanası üç gecedir uyumamış," diyor biri. Ötekiler gülüşüyor.'],
          ['İki hanım şerbet bardaklarını tartışıyor: "Gül şerbeti mi, vişne mi? Ben ikisinden de içtim kardeş."'],
          ['Gelin odasının kapısını gözleyen bir hanım tülünü topluyor: "Bu izdihamda tülümü kaptırırsam ne yaparım?"'],
        ]);
        if (S.mekan === 'gelin_odasi') return sira([
          ['Kapıda omuz omuza hanımlar. Herkes gelinin tülünü görmek istiyor.'],
          ['"Damadın annesi bilezikleri kendi eliyle takmış. Altı tane!"'],
          ['"Gelin çok güzel. Ama yorgun, zavallı. Sabahtan beri oturduğu yerden kalkamadı."'],
        ]);
        return sira([
          ['Paravanın ardından saz sesi geliyor. Hanımlar başlarıyla usulca tempo tutuyor.'],
          ['"Bizim kızın da sırası gelecek inşallah. Görücüler şimdiden kapıyı aşındırıyor."'],
          ['Bir kalfa gümüş bir sepetten şeker dağıtıyor. Çocuklar eteğine yapışmış.'],
        ]);
      case 'hizmetci':
        if (g === 3) return [['hizmetci', 'Buldunuz mu o çantalı kızı küçük hanım? Bahçede, gül ağacının orada.']];
        if (g >= 4) return sira([
          [['hizmetci', 'Gelin odasına girecekseniz eteğinizi toplayın. Kapıda tülleri çiğniyorlar.']],
          b.yuz === 'gul'
            ? [['hizmetci', 'Bir şerbet daha ister misiniz küçük hanım? Demin pek tatlı gülmüştünüz.']]
            : [['hizmetci', 'Şerbet istemezsiniz, biliyorum. Bir kahve getireyim bari.']],
        ]);
        return sira([
          [['hizmetci', 'Kahve alır mısınız küçük hanım? Sade de var, şekerli de.']],
          [['hizmetci', 'Tepsi ağır küçük hanım. Gelinin anası "bitmesin" dedi, bitmiyor.']],
        ]);
      case 'gelin':
        if (S.faz === 'A' && g < 4) return sira([
          ['Gelin odasının kapısında izdiham var. Leyla olmadan bu kalabalığa dalmaya cesaret edemedim.'],
          ['Kapının aralığından gelinin sırma işlemeli eteği görünüyor. Gerisi kalabalık.'],
        ]);
        return [['gelin', 'Yine bekleriz!']];
      case 'reftar':
        return sira([
          [['reftar', 'Bir şey mi istediniz küçük hanım?', 'ana'], ['ic', 'Sesinde bir alay var. Hep vardı.', 'mahzun']],
          [['reftar', 'Hanımefendi mendilinden memnun kaldı. Bana teşekkür etti.', 'ana']],
          ['Hatice çantasını kolunda sallıyor. Ben bakınca durdu.'],
        ]);
      case 'calibe':
        if (S.faz === 'B') return sira([
          b.murekkep === 'itiraz'
            ? [['calibe', 'Odanızda olanları babana anlatmadım. Daha.', 'sinsi'], ['ic', '"Daha." Bu tek kelime bütün geceyi doldurdu.', 'mahzun']]
            : [['calibe', 'Yorulmuşsundur Feride. Odana çık.', 'soguk']],
          [['calibe', 'Bu akşam çok alkış topladın. Yarın da erken kalkarsın, değil mi?', 'sinsi']],
        ]);
        if (g >= 4) return sira([
          [['calibe', 'Gelini gördünüz mü? Tülü yırtılmış diyorlar. Yazık.', 'sinsi']],
          [['calibe', 'Akşam ezanına doğru kalkarız. Kaybolma Feride.', 'soguk']],
        ]);
        return sira([
          [['calibe', 'Hâlâ burada mısın? Mendil, Feride, mendil.', 'soguk']],
          [['calibe', 'Kalabalıkta ezilme, dedim ama. Sen bilirsin.', 'sinsi'], ['ic', 'Gitmezsem kızacak. Gidersem "ben sana gitme dedim" diyecek.', 'mahzun']],
        ]);
      case 'fevkiye':
        if (g === 1) return [['fevkiye', 'Haydi, kuytu köşeye! Burada herkes kulak kesilmiş.', 'ana']];
        if (g === 4) return sira([
          [['fevkiye', 'Ne bekliyoruz? Gelini görmeden gitmem, bilmiş ol!', 'ana']],
          [['fevkiye', 'Elini ver. Bu kalabalıkta kaybolursak birbirimizi akşama bulamayız.', 'notr']],
        ]);
        return sira([
          [['fevkiye', 'Ben Perihan Hanım\'ı oyalarım. Sen git, o kızı bul.', 'ana']],
          [['fevkiye', 'Sofada değilse bahçededir. O kız dedikodu neredeyse oradadır.', 'notr']],
        ]);
      case 'cesme':
        return sira([
          ['Yosun tutmuş eski bir çeşme. Suyu ince ince akıyor; saz sesi buraya zor geliyor.'],
          ['Avucuma biraz su aldım. Yüzüm serinledi, içim serinlemedi.'],
          ['Çeşmenin taşına bir dua kazınmış. Yarısı silinmiş.'],
        ]);
      case 'sefik':
        if (g === 5) return sira([
          [['sefik', 'Haydi abla! Resmim yukarıda, odamızda.', 'sevincli']],
          [['sefik', 'Kayığı bitirdim sayılır. Yalıyı da çizdim, ama penceresi eğri oldu.', 'ana']],
        ]);
        if (g === 7) return sira([
          [['sefik', 'Babam sana çaldıracakmış. Ben de yanına oturabilir miyim?', 'sevincli']],
          [['sefik', 'Mürekkep tırnaklarımdan çıkmıyor abla. Babam görürse ne der?', 'aglamakli']],
        ]);
        return sira([
          b.murekkep === 'sus'
            ? [['sefik', 'Abla, yarın martıları çizecek misin?', 'ana'], ['f', 'Çizeceğim. Söz.', 'gulumseyen']]
            : [['sefik', 'Abla, Nazlı\'ya kızdın mı? Ben kızmadım. Biraz kızdım.', 'notr']],
          [['sefik', 'Sen in abla, ben ellerimi yıkayıp geliyorum. Mürekkep çıkmıyor.', 'notr']],
        ]);
      case 'mehves':
        return sira([
          [['mehves', 'Gece odanıza gelirim hanımcığım. Şimdi değil.', 'endiseli']],
          [['mehves', 'Bir şey mi lazım hanımcığım? Şerbet getireyim mi?', 'ana']],
        ]);
      case 'asci':
        return sira([
          [['asci', 'Düğün evinin baklavası bizimkinden iyi miydi küçük hanım? Doğru söyleyin.']],
          [['asci', 'Küçük beye ıhlamur kaynattım. Ateşi düştü, maşallah.']],
          [['asci', 'Hanımefendi bu akşam da patlıcan istemiş. Yaz bitmeden kaç kere daha isteyecek, bilmem.']],
        ]);
      case 'nabi':
        return sira([
          [['nabi', 'Siz çalın Feride Hanım, ben buradan dinlerim. Kahve bana dokunur.', 'ana']],
          [['nabi', 'Ablam bu akşam yine kesesinden konuştu. Benim kesem boş, ben de konuşmuyorum.', 'ana']],
        ]);
      case 'sai':
        return sira([
          b.piyano === 'baba'
            ? [['sai', 'Annen de o şarkıyı çalardı. Geceniz hayır olsun kızım.', 'mahzun']]
            : [['sai', 'Geceniz hayır olsun kızım. Bu akşam beni sevindirdin.', 'ana']],
          [['sai', 'Yorgunsun kızım. Çık, dinlen.', 'notr']],
        ]);
      case 'suha':
        return ['Süha Bey odasına çekilmiş.'];
      case 'kitap':
        if (b.yasemin === 'sakla') return sira([
          ['Kenan Bey\'in resimli kitabı Şefik\'in yastığının yanında. Yırtık kuşun kanadı özenle yapıştırılmış.'],
          ['Yaseminin durduğu sayfa boş kaldı. Yasemin şimdi mendilimin içinde.'],
        ]);
        if (b.yasemin === 'geri') return sira([
          ['Kenan Bey\'in resimli kitabı Şefik\'in yastığının yanında. Yasemin yine kendi sayfasında.'],
          ['Kuşlar, gemiler, uzak şehirler. Şefik gemileri saydı; on bir tane.'],
        ]);
        return sira([
          ['Münevver Hanım\'ın getirdiği resimli kitap. Şefik gemileri saydı; on bir tane.'],
          ['Yırtık kuşun kanadı özenle yapıştırılmış. Kim yapıştırdıysa sabırla yapıştırmış.'],
        ]);
      case 'resim':
        return sira([
          ['Annemin resmi. Sarı saçları, baygın mavi gözleri. Şefik tıpkı o.'],
          ['Annemin resmi. Kandilin ışığında gülümser gibi.'],
        ]);
      case 'ayna':
        if (g === 8) return ['Sofa karanlık. Aynada yalnız kandilin ışığı var.'];
        if (g >= 6) return sira([
          ['Gündelik kıyafetimle aynaya baktım. Düğün evindeki kız gitmiş, bu evin kızı kalmış.'],
          [b.madalyon === 'sakla' ? 'Madalyonu yakamın içinden çıkardım. B harfi ışıkta parlıyor.' : 'Madalyon boynumda. B harfi ışıkta parlıyor. Hanımların okuduğu harf.'],
        ]);
        return sira([
          ['Aynada düğün evinden dönen bir kız var. Örgüsü hâlâ elmaslı tarakla tutturulmuş.'],
          ['Yüzümde yolun tozu. Gözlerim hâlâ gülmüyor.'],
        ]);
      case 'sofra':
        if (g >= 7) return sira([
          ['Sofra kalktı. Şefik\'in yerinde küçük bir ekmek kırıntısı tepeciği var. Martılara diye biriktirmiş.'],
          ['Kalfalar örtüyü katlıyor. Sofrada konuşulanlar örtüyle birlikte kalkmaz.'],
        ]);
        return sira([
          ['Sofra henüz kurulmadı. Kalfalar gümüş takımları siliyor.'],
          ['Her iskemlenin yeri bellidir. Babamın solunda benimki, yanında Şefik\'inki.'],
        ]);
      case 'salon_resmi':
        return sira([
          ['Duvarda Perihan Hanım\'ın yağlıboya resmi var. Babam evlendikleri yıl yaptırmış.'],
          ['Ressam onu biraz daha ince çizmiş. Gözlerini ise olduğu gibi bırakmış.'],
          ['Annemin resmi yukarıda, benim odamda. Bu sofraya bakan resim onunki değil.'],
        ]);
      case 'piyano':
        if (g === 8) return sira([
          ['Piyanonun kapağı kapandı. Notalar hâlâ sehpada.'],
          ['Tuşlarda parmaklarımın sıcaklığı kalmış gibi.'],
        ]);
        return sira([
          ['Piyanonun kapağı kapalı. On yıldır her gün açarım.'],
          ['Sehpada notalar duruyor. Çoğunu çocukken Süha Bey getirmişti.'],
        ]);
    }
    return null;
  },

  /* Bölüm açılışı */
  acilis: [
    { kart: 'BİRİNCİ BÖLÜM\nDüğün Evi', alt: 'Yaz. Düğüne bir yıl.' },
    'Düğün evinin kapısı bugün herkese açık. Dosta da, yabancıya da.',
    'Sofada fincanlar elden ele geçiyor. Bahçede, paravanın ardında saz çalınıyor.',
    'Hanımlar en ağır ipeklilerini giymiş, en parlak taşlarını takmışlar. Herkes gülüyor. Bir ben gülmüyorum.',
    ['ic', 'Aklım evde. Şefik\'i ateşler içinde bıraktım.', 'mahzun'],
    { goster: ['hizmetci'] },
    ['hizmetci', 'Buyurun küçük hanım, gül şerbeti. Düğün evinde yüz asılmaz derler.'],
    {
      soru: 'Hizmetçi kız tepsiyi bana uzatıyor.',
      secim: [
        {
          m: 'Şerbeti alıp gülümsemek.', etki: { itibar: 1 }, bayrak: { yuz: 'gul' },
          iz: 'Yüzün güldü, gözlerin gülmedi.',
          adimlar: ['Şerbeti aldım, gülümsedim. Gülümsemek zor değil; yüz alışkındır.'],
        },
        {
          m: '"Teşekkür ederim, istemem."', bayrak: { yuz: 'asik' },
          iz: 'Şerbet tepside kaldı.',
          adimlar: [['hizmetci', 'Siz bilirsiniz küçük hanım.'], 'Kız omuz silkip geçti. Ben yine gülmedim.'],
        },
      ],
    },
    { gizle: 'hizmetci' },
    { goster: ['davetliler'] },
    'Az ötede iki hanım başlarını birbirine yaklaştırmış. Sesleri saz sesinin altından geliyor.',
    '"Sait Efendi\'nin kızı bu mu? Münevver Hanım\'ın oğluna yazılı olan?"',
    '"Kenan Bey\'e mi? Ta kendisi. Bir senedir birbirlerini görmemişler. Usul böyle."',
    '"Oğlan da buradaymış, selamlıkta, damadın yanında. Kızın haberi var mı acaba?"',
    ['ic', 'Bir yıldır görmediğim adamın adı benden önce düğüne gelmiş.', 'utanmis'],
    'Selamlık bahçenin öbür ucunda, kafeslerin ardında. Oraya bakmadım. Bakmamak için epey uğraştım.',
    { gizle: 'davetliler' },
    ['ic', 'Leyla\'yı bulmalıyım. Bu kalabalıkta bir onun yanında rahat ederim.'],
    { bildir: 'Mekânlar arasında aşağıdaki düğmelerle ya da Harita\'dan dolaşabilirsin.' },
  ],

  olaylar: [
    /* ------------------------------------------------------------------
       Bahçe: Leyla ve dedikoducu hanımlar
       ------------------------------------------------------------------ */
    {
      id: 'b1_bahce_giris', mekan: 'dugun_bahce', tetik: 'giris', kosul: (S) => S.gorev === 0,
      sahne: [{ id: 'fevkiye', ifade: 'ana' }, 'hanimlar', 'davetliler'],
      adimlar: [
        'Bahçede boş iskemle kalmamış. Elmas taraklar, yelpazeler; aralarında tepsi taşıyan kalfalar.',
        'Leyla gül ağacının oradaki kızların arasında. Kahkahası buraya kadar geliyor.',
      ],
    },
    {
      id: 'b1_fevkiye', mekan: 'dugun_bahce', kisi: 'fevkiye', kosul: (S) => S.gorev === 0,
      sahne: [{ id: 'fevkiye', ifade: 'ana' }, 'hanimlar'],
      adimlar: [
        ['fevkiye', 'Feride! Yine nereye daldın? Bak, gelin çıkacakmış diyorlar.'],
        'Az ötede, gül ağacının dibinde dört hanım oturuyor. Bize bakıyorlar. Baktıklarını gizlemeye de gerek görmüyorlar.',
        {
          eger: (S) => S.bayrak.yuz === 'gul',
          ise: [['h1', 'Şu sarışın kız kimin nesi ayol? Gülüyor, ama gözü gülmüyor.']],
          degilse: [['h1', 'Şu sarışın kız kimin nesi ayol? Sabahtan beri yüzü bir kere gülmedi.']],
        },
        // Madalyon yakın planı: oyuncu hanımların okuduğu "B" harfini kendi gözüyle görsün
        { goster: ['madalyon'] },
        ['h2', 'Mendilinin köşesine bir {b}F{/b} işlenmiş. Boynundaki madalyonda ise {b}B{/b} yazıyor. Ben harfleri iyi okurum.'],
        ['h4', 'İki ayrı harf, tek bir kız. Biri kendisininse öbürü kimin?'],
        ['h3', 'Günaha girmeyin kardeş. Belki bir yadigârdır.'],
        ['h4', 'Yadigârı olan kız saçını böyle tek örgü bırakıp gelinlik kızların arasında dolaşmaz. Gönlü birindeyse belli etsin, değilse o harfi çıkarsın.'],
        {
          soru: 'Elim, kendiliğinden, madalyona gitti.',
          secim: [
            {
              m: 'Madalyonu yakamın içine saklamak.', bayrak: { madalyon: 'sakla' },
              iz: 'Sakladığın harf gözlerde büyüdü.',
              adimlar: ['Madalyonu yakamın içine soktum.', ['h4', 'Gördünüz mü? Sakladı.']],
            },
            {
              m: 'Madalyonu olduğu yerde bırakmak.', etki: { vakar: 1 }, bayrak: { madalyon: 'acik' },
              iz: 'Annenin harfi boynunda kaldı.',
              adimlar: ['Elimi indirdim. Annemin harfi yerinde dursun.'],
            },
          ],
        },
        { gizle: 'madalyon' },
        ['h1', 'Küçük hanım, affedersiniz. Hanımefendiyle arkadaş mısınız?'],
        ['fevkiye', 'Kardeş gibiyiz efendim.', 'notr'],
        ['h1', 'Maşallah. Peki o madalyondaki harf... Merakımı mazur görün.'],
        ['fevkiye', 'Annesinin adıdır efendim. Kendi adı Feride Hanım\'dır.'],
        ['h1', 'Ya, öyle mi? Evli midir?'],
        ['fevkiye', 'Hayır efendim.'],
        ['h1', 'Allah sahibine bağışlasın! Güzel kız.'],
        ['ic', 'Allah sahibine bağışlasın. Sahibim kim benim?', 'mahzun'],
        {
          soru: 'Hanımlar bana bakıyor. Bir cevap bekliyorlar.',
          secim: [
            {
              m: '"Öksüzüm efendim."', etki: { itibar: 5, vakar: 1 }, bayrak: { cevap: 'oksuz' },
              iz: 'Hüküm veren hanımın dili tutuldu.',
              adimlar: [
                ['f', 'Öksüzüm efendim.', 'mahzun'],
                'Sesim titremedi. Ama gözümden iki damla süzüldü, elbisemin incileri arasında kayboldu.',
                ['h3', 'Ah yavrum... Biz bilmeden yüreğine dokunduk.'],
                'Hüküm veren hanım ilk kez söyleyecek söz bulamadı.',
              ],
            },
            {
              m: '"Başkasının boynundaki harfi okumak size mi kaldı?"', etki: { dedikodu: 1, isyan: 1 }, bayrak: { cevap: 'sert' },
              iz: 'Hanımlar sustu; sözün yola çıktı.',
              adimlar: [
                ['f', 'O harf annemin adıdır hanımefendi. Annem toprağın altında. Başkasının boynundaki yadigârı okumak size mi kaldı?', 'ofkeli'],
                ['h1', 'A!..'],
                ['h4', 'Görüyor musunuz? Dili de varmış. Ben demiştim.'],
                ['fevkiye', 'Feride!..', 'saskin'],
                'Hanımlar sustu. Ama bu sözün benden önce üç konağa varacağını biliyorum.',
              ],
            },
            {
              m: 'Susmak.', bayrak: { cevap: 'sus' },
              iz: 'Hanımlar başka bir kıza döndü.',
              adimlar: [
                'Başımı eğdim. Duymamış gibi yaptım.',
                ['fevkiye', 'Feride Hanım öksüzdür efendim. Madalyon annesinden kalmadır.', 'endiseli'],
                ['h3', 'Vah vah...'],
                ['h4', 'Öksüz kız iki kere terbiyeli olur derler. Bakalım.'],
                'Hanımlar başka bir kızı süzmeye koyuldular. Bugünlük kurtuldum.',
              ],
            },
          ],
        },
        ['fevkiye', 'Gel, şuradan uzaklaşalım. Bahçenin arkasında kimsenin gelmediği bir köşe var.', 'endiseli'],
        { gorev: 1 },
      ],
    },

    /* ------------------------------------------------------------------
       Kuytu köşe: dertleşme, Münevver Hanım, Perihan ve mendil
       ------------------------------------------------------------------ */
    {
      id: 'b1_kose', mekan: 'dugun_kose', tetik: 'giris', kosul: (S) => S.gorev === 1,
      sahne: [{ id: 'fevkiye', ifade: 'notr' }],
      adimlar: [
        // Leyla, hanımlara verilen cevabı anar
        {
          eger: (S) => S.bayrak.cevap === 'sert',
          ise: [
            ['fevkiye', 'Hanımlara verdiğin cevabı annem duysa bayılır! Ama yalan yok, yüreğim serinledi.', 'ana'],
            ['f', 'Annemin adını ağızlarına aldılar Leyla.', 'ofkeli'],
            ['fevkiye', 'Aldılar. Yarın da seninkini alacaklar. Dikkat et kuzum.', 'endiseli'],
          ],
          degilse: [{
            eger: (S) => S.bayrak.cevap === 'oksuz',
            ise: [
              ['fevkiye', 'Gözünden iki damla düştü, hanımların dili tutuldu. Az kalsın ben de ağlayacaktım.', 'endiseli'],
              ['ic', 'Ağlamak istememiştim. Kendiliğinden oldu.', 'mahzun'],
            ],
            degilse: [
              ['fevkiye', 'Sen sustun, ben konuştum. Ne zamana kadar böyle susacaksın kuzum?', 'endiseli'],
              ['ic', 'Susmak bana en kolay gelen şey. Belki de en zoru.', 'mahzun'],
            ],
          }],
        },
        ['fevkiye', 'Ama yüzün sabahtan beri asık. Ne var?'],
        ['f', 'Şefik bütün gece ateşler içinde yattı. Dün ben misafirin yanındayken çocukları sokağa çıkarmışlar. Hatice\'ye "Paltosunu giydir, giymezse bana haber ver" diye tembih etmiştim.', 'mahzun'],
        ['f', 'İkisini de yapmadı. Çocuk üşüdü.'],
        ['fevkiye', 'Bu Hatice\'nin nazını ne çekiyorsun? Senin hizmetçin değil mi?', 'saskin'],
        {
          soru: 'Leyla cevabımı bekliyor.',
          secim: [
            {
              m: '"Benim neye sözüm geçiyor ki hizmetçiye geçsin?"', bayrak: { reftar_tavir: 'boyun' },
              iz: 'Hatice\'nin düzeni yine değişmedi.',
              adimlar: [
                ['f', 'Benim neye sözüm geçiyor ki hizmetçiye geçsin?', 'mahzun'],
                ['ic', 'Annem sağken onun bakışını beğenmemiş, göndermek istemişti. Birlikte oynuyoruz diye ben bırakmamıştım.'],
              ],
            },
            {
              m: '"Bir daha Şefik\'i üşütmesine göz yummam."', etki: { isyan: 1, fevkiye: 1 }, bayrak: { reftar_tavir: 'sert' },
              iz: 'Şefik için kendine söz verdin.',
              adimlar: [
                ['f', 'Hizmetçi de olsa, kardeşim de olsa fark etmez. Bir daha Şefik\'i üşütmesine göz yummam.', 'ofkeli'],
                ['fevkiye', 'Aferin! Ben de bunu bekliyordum.', 'ana'],
                ['ic', 'Onunla bir sofrada büyüdük. Annem göndermek istemişti; ben bırakmamıştım.'],
              ],
            },
          ],
        },
        ['fevkiye', 'Şefik sana abla diyor ama çocuk gözünü açtığından beri anası sensin.', 'endiseli'],
        ['f', 'Her şeye susuyorum. Her emre boyun eğiyorum. Ama iş Şefik\'e gelince susamıyorum.', 'mahzun'],
        ['f', 'Şefik\'i istemeyen beni de istemesin. Kırk yıl kız otururum da öylesini istemem.'],

        { goster: ['munevver', 'ana'] },
        'Kibar, ağırbaşlı bir hanım yanımıza yaklaştı. Hemen ayağa kalktım.',
        ['munevver', 'Benim güzel kızım! Ne yapıyorsun bakayım burada, kuytuda?'],
        ['f', 'Elinizi öpeyim nineciğim.', 'gulumseyen'],
        ['munevver', 'Şefik nasıl? Dün gece rahatsızmış diye duydum. Yarın ben uğrarım, sen üzülme.', 'endiseli'],
        'Münevver Hanım arkasındaki kalfadan bohçaya sarılı bir şey aldı, kucağıma koydu.',
        ['munevver', 'Bu Şefik\'in. Resimli bir kitap. Oğlum sandığından çıkarmış, "Şefik\'e ayırdım" dedi.', 'ana'],
        ['munevver', 'Bir de "Feride isterse o da baksın" dedi. Ben söyleyeceğimi söyledim, gerisi size kalmış.', 'ana'],
        ['ic', '"Oğlum" dedi. Adını söylemedi. Söylemesine gerek yoktu.', 'utanmis'],
        { gizle: 'munevver' },
        ['fevkiye', 'Gördün mü? Seni nasıl seviyor. Elbet sever; gelini olacaksın. Bir sene sonra düğünümüz var kuzum!', 'ana'],
        ['f', 'Leyla!', 'utanmis'],
        ['fevkiye', 'Annem söyledi. Kenan Bey\'le Feride Hanım küçükten beri birbirine yazılıymış.'],
        {
          soru: 'Leyla gözlerimin içine bakıyor.',
          secim: [
            {
              m: '"Münevver Hanım Şefik\'i de kabul ediyor. Bu yüzden bu işten memnunum."', etki: { mukaddem: 1, vakar: 1, munevver: 1 },
              iz: 'Gönlünü değil, aklını söyledin.',
              adimlar: [['fevkiye', 'Yalnız bu yüzden mi?'], ['ic', 'Cevap vermedim. Yüzüm yandı.', 'utanmis']],
            },
            {
              m: '"Onu bir yıldır görmedim. Şimdi nasıl biri oldu, merak ediyorum."', etki: { mukaddem: 3 },
              iz: 'Leyla gözlerindeki ışığı gördü.',
              adimlar: [
                ['ic', 'Hatırladığım, Şefik\'e resimli kitaplarını yırttıran on dört yaşında bir çocuk. Bana masal anlatırdı.', 'gulumseyen'],
                ['fevkiye', 'Gözlerin parladı ama!'],
              ],
            },
            {
              m: '"Bu konuyu kapatalım Leyla."', etki: { fevkiye: -1 },
              iz: 'Leyla sustu; gülmesi geçmedi.',
              adimlar: [['fevkiye', 'Peki, kapattım. Ama yüzün kızardı, onu kapatamazsın.'], ['ic', 'Nişanlı kız nişanlısını konuşmaz. Öyle öğrendim.', 'utanmis']],
            },
          ],
        },
        // Kitap jesti: Kenan'ın asıl gönül kazancı burada
        'Bohça kucağımda duruyor. Düğümü gevşek.',
        ['fevkiye', 'Ne duruyorsun? "Feride da baksın" demiş, duydum. Aç bakalım!', 'ana'],
        {
          soru: 'Kitap Şefik\'in. Ama bana da bakmamı söylemiş.',
          secim: [
            {
              m: 'Bohçayı açıp kitaba bakmak.', etki: { mukaddem: 6 }, bayrak: { kitap: 'acti' },
              iz: 'Bohçanın düğümü çözüldü.',
              adimlar: [
                'Düğümü çözdüm. Cildi eskimiş, köşeleri yumuşamış bir resimli kitap. Kuşlar, gemiler, uzak şehirler.',
                'Bir kuşun kanadı yırtılmış, sonra özenle yapıştırılmış.',
                // Kitabın kartı ancak açılınca ve yasemin düşerken görünür (keşfi önceden göstermesin)
                { goster: ['kitap'] },
                'Yaprakları çevirirken arasından bir şey eteğime düştü. Kurumuş, sararmış bir yasemin.',
                ['ic', 'Bizim bahçenin yasemini. Şefik bu kuşu yırttığı gün o ağlayacak gibi olmuştu. Barışalım diye ona bir dal uzatmıştım. On yaşındaydım.', 'utanmis'],
                ['ic', 'Yedi yıl saklamış.', 'utanmis'],
                ['fevkiye', 'Bu ne? Çiçek mi? Feride, yüzün gül gibi oldu!', 'saskin'],
                {
                  soru: 'Kurumuş yasemin avucumda.',
                  secim: [
                    {
                      m: 'Yasemini mendilime sarıp saklamak.', etki: { mukaddem: 4 }, bayrak: { yasemin: 'sakla' },
                      iz: 'Yasemin mendilinin içinde.',
                      adimlar: [
                        'Yasemini mendilimin arasına koydum. Köşesindeki {b}F{/b} harfinin yanına.',
                        ['fevkiye', 'Ben sana demedim mi? Küçükten beri birbirinize yazılısınız!', 'ana'],
                        ['f', 'Sus Leyla. Biri duyacak.', 'utanmis'],
                      ],
                    },
                    {
                      m: 'Yasemini bulduğum sayfaya geri koymak.', etki: { mukaddem: 2, vakar: 1 }, bayrak: { yasemin: 'geri' },
                      iz: 'Yasemin yine onun bıraktığı sayfada.',
                      adimlar: [
                        'Yasemini bulduğum sayfaya geri koydum, kitabı kapadım. Kitap Şefik\'in. Sayfa onun.',
                        ['fevkiye', 'Sen ne ağır kızsın! Ama ellerin titredi, gördüm.', 'ana'],
                      ],
                    },
                  ],
                },
              ],
            },
            {
              m: 'Bohçayı açmamak: önce Şefik açsın.', etki: { vakar: 1 }, bayrak: { kitap: 'sefik' },
              iz: 'Bohça Şefik\'e kapalı gidecek.',
              adimlar: [
                'Düğümü sıkılaştırdım.',
                ['f', 'Şefik\'in hediyesi. Önce o açsın.', 'gulumseyen'],
                ['fevkiye', 'Sen ne sabırlı kızsın! Ben olsam çoktan açardım.', 'ana'],
              ],
            },
          ],
        },
        { gizle: 'kitap' },
        { not: { mukaddem: 'Nişanlım. Bir yıldır görmedim; nişanlılar görüşmezmiş. Şefik\'e resimli bir kitap ayırmış.' } },

        { goster: ['calibe', 'gulumser'] },
        'Açık pembe elbisesiyle bir hanım yanımızda durdu. Bahçedeki bütün gözler onu izliyor. Yirmi sekiz yaşında; güzel olduğunu da biliyor.',
        ['calibe', 'Feride, kızım, sende toplu iğne bulunur. Tülüm sökülmüş.', 'gulumser'],
        'Eteğimin ucuna iliştirdiğim iğnelerden birini çıkarıp verdim.',
        ['calibe', 'Daha kaç tane var orada? O kadar iğneyi ne yapacaksın?', 'soguk'],
        ['f', 'Beş taneydi efendim. Başörtümün iğneleri. Giderken aramayayım diye buraya iliştirdim.', 'mahzun'],
        ['calibe', 'Tedbirli kız. Ama böyle köşelere çekilmek yakışık almaz. Sizi görenler bir şey saklıyor sanır.', 'sinsi'],
        {
          soru: 'Perihan Hanım tülünü iğnelerken beni süzüyor.',
          secim: [
            {
              m: 'Gözlerimi yere indirmek.', etki: { vakar: 1 }, bayrak: { bakis: 'yer' },
              iz: 'Perihan Hanım\'ın yüzü yumuşadı.',
              adimlar: ['Gözlerimi yere indirdim. Her zamanki gibi.'],
            },
            {
              m: 'İğneyi tülüne kendim iliştirmek.', etki: { vakar: 1, calibe_suphe: 1 }, bayrak: { bakis: 'igne' },
              iz: 'Perihan Hanım ne diyeceğini bilemedi.',
              adimlar: ['Elinden iğneyi alıp tülünü kendim iliştirdim. Yüzüne bu kadar yakından hiç bakmamıştım. İkimiz de gülümsedik.'],
            },
            {
              m: 'Gözlerine bakmak.', etki: { calibe_suphe: 1, isyan: 1 }, bayrak: { bakis: 'goz' },
              iz: 'Perihan Hanım bakışını senden çekmedi.',
              adimlar: ['Başımı kaldırıp gözlerine baktım. Bir kere daha böyle bakmıştım.'],
            },
          ],
        },

        // Geri dönüş
        { arkaplan: 'konak_sofa' }, { temizle: true },
        { kart: 'Sekiz yıl önce.', alt: 'Sait Efendi\'nin konağı.' },
        'Babam elimden tutmuş, beni bir odaya sokmuştu. Odada siyah saçlı, çok güzel bir gelin oturuyordu.',
        ['sai', 'Hanım, bir sene bunlarla ben uğraştım. Artık annelerine teslim ediyorum. Feride, annenin elini öp.', 'ana'],
        'Öptüm. O da eğilip yüzümü öptü. Sonra başımı kaldırıp gözlerine baktım.',
        'Dokuz yaşındaydım. Çocuklar, kucağına gidecekleri insanın önce gözüne bakar.',
        'O günden beri onunla yere bakarak konuşurum.',
        ['sai', 'Haydi Şefik. Annenin kucağına koş.'],
        'Şefik koştu. Yarı yolda yavaşladı. Durdu. Dönüp bana baktı ve geri kaçıp göğsüme saklandı.',
        { kart: 'Bugün.', alt: 'Düğün evinin kuytu köşesi.' },
        { arkaplan: null }, { goster: ['fevkiye', 'endiseli'] }, { goster: ['calibe', 'gulumser'] },
        {
          eger: (S) => S.bayrak.bakis === 'goz',
          ise: ['Sekiz yıl sonra gözlerine ilk kez yeniden baktım. İkimiz de aynı şeyi gördük.'],
          degilse: [{
            eger: (S) => S.bayrak.bakis === 'igne',
            ise: ['Tülü iğnelediğim yerden düzeltti. Gülümsemesi yerindeydi; ne düşündüğünü bilemedim.'],
            degilse: ['Perihan Hanım tülünü iğnelemiş, gülümsüyordu. Ben yine yere bakıyordum.'],
          }],
        },
        ['calibe', 'Ay, mendilimi düşürmüşüm. Yedeği çantada, çanta da Hatice\'de. Kim bilir nerede o kız. En son sofadaydı.'],
        ['calibe', 'Yok yok, sen zahmet etme Feridecim. Kalabalıkta ezilirsin.'],
        ['fevkiye', '{i}(Herkesin önünde sana kıyamıyor. Gitmezsen de evde kıyameti koparır.){/i}'],
        {
          soru: 'Perihan Hanım gülümseyerek bekliyor.',
          secim: [
            {
              m: 'Hatice\'yi aramaya gitmek.', etki: { calibe_suphe: -1, vakar: 1 }, bayrak: { mendil: 'git' },
              iz: 'Mendil işi yine sana kaldı.',
              adimlar: [
                ['f', 'Zahmet olur mu efendim. Ben bulup getiririm.'],
                ['calibe', 'Canım kızım.', 'gulumser'],
                ['ic', 'İstediğini yine kimse anlamadan yaptırdı.'],
                ['fevkiye', 'Ben burada beklerim. Sofaya bak, kahve tepsilerinin orada dolaşıyordu.', 'notr'],
                { gorev: 2 },
              ],
            },
            {
              m: '"Hizmetçilerden birine haber verelim efendim."', etki: { calibe_suphe: 1, isyan: 1 }, bayrak: { mendil: 'hizmetci' },
              iz: 'Mendil başka bir elle gelecek.',
              adimlar: [
                ['f', 'Hizmetçilerden birine söyleyelim efendim, Hatice\'yi çağırsınlar. Ben ararken siz mendilsiz kalmayın.'],
                'Perihan Hanım\'ın gülümsemesi yerinde kaldı. Gözleri kalmadı.',
                ['calibe', 'Ne düşünceli. Öyle olsun.', 'soguk'],
                ['ic', 'Bunu unutmayacak. O hiçbir şeyi unutmaz.'],
                { goster: ['reftar', 'ana'] },
                'Hatice koluna zarif bir çanta takmış, salına salına geldi. Yüzünde, sahte olduğu uzaktan belli bir gülümseme.',
                ['reftar', 'Beni mi emrettiniz hanımefendiciğim?'],
                ['calibe', 'Mendil, Hatice.'],
                ['reftar', 'Mendil mi efendim? Hangi mendil?', 'notr'],
                'Ne istendiğini pekâlâ biliyor. Bir süre daha anlamamış gibi yaptı, sonra çantayı açtı.',
                { gizle: 'reftar' }, { gizle: 'calibe' },
                { bayrak: { reftarBulundu: true } },
                ['fevkiye', 'Ne kadar içten pazarlıklı... Neyse, gel! Gelini görmeden gitmem, bilmiş ol.', 'ana'],
                { gorev: 4 },
              ],
            },
          ],
        },
      ],
    },

    /* ------------------------------------------------------------------
       Arama (oyun için ek): Hatice'nin izi. Sofa -> bahçe (iki durak)
       ------------------------------------------------------------------ */
    {
      id: 'b1_ara_sofa', mekan: 'dugun_sofa', tetik: 'giris', kosul: (S) => S.gorev === 2,
      sahne: ['davetliler', 'hizmetci'],
      adimlar: [
        'Sofada kahve tepsileri bir elden öbür ele geçiyor. Hatice burada yok.',
        ['f', 'Perihan Hanım\'ın hizmetçisini gördün mü? Kolunda bir çanta vardı.', 'mahzun'],
        ['hizmetci', 'Mor çantalı kız mı? Az önce sizin adınızı söyleyip duruyordu küçük hanım.'],
        ['hizmetci', 'Bahçeye indi. Gül ağacının dibindeki hanımlara bir şeyler anlatıyor.'],
        {
          eger: (S) => S.bayrak.cevap === 'sert',
          ise: [['ic', 'Gül ağacının dibindeki hanımlar. Demin çıkıştığım hanımlar.', 'mahzun']],
          degilse: [{
            eger: (S) => S.bayrak.cevap === 'oksuz',
            ise: [['ic', 'Gül ağacının dibindeki hanımlar. Demin bana acıyan hanımlar.', 'mahzun']],
            degilse: [['ic', 'Gül ağacının dibindeki hanımlar. Demin beni süzen hanımlar.', 'mahzun']],
          }],
        },
        ['ic', 'Benim adımı. Onlara. Ne anlatıyor?'],
        { gorev: 3 },
      ],
    },
    {
      id: 'b1_reftar', mekan: 'dugun_bahce', kisi: 'reftar', kosul: (S) => S.gorev === 3,
      sahne: ['hanimlar', { id: 'reftar', ifade: 'ana' }],
      adimlar: [
        'Hatice gül ağacının dibinde, hanımların iskemlelerinin arkasına eğilmiş. Çanta kolunda.',
        ['reftar', 'Rahmetli hanım beni kızı gibi severdi efendim. Küçük hanım da iyidir, iyidir. Yalnız biraz kendi bildiğini okur.'],
        ['h4', 'Annesiz büyüyen kız öyle olur.'],
        ['ic', 'Onunla bir sofrada büyüdük. Şimdi adımı yabancılara anlatıyor.', 'mahzun'],
        {
          soru: 'Hatice beni henüz görmedi.',
          secim: [
            {
              m: '"Hatice. Hanımefendi mendil bekliyor."', etki: { vakar: 1, itibar: 1 }, bayrak: { reftar_bahce: 'sakin' },
              iz: 'Hanımların önünde sesin yükselmedi.',
              adimlar: [
                ['f', 'Hatice. Hanımefendi mendil bekliyor.', 'mahzun'],
                { goster: ['reftar', 'somurtkan'] },
                'Hatice doğruldu. Yüzündeki gülümseme bir an düştü...',
                { goster: ['reftar', 'ana'] },
                '...sonra yerine geldi.',
              ],
            },
            {
              m: '"Benim adımı anlatacağına çantayı aç."', etki: { isyan: 1, dedikodu: 1, calibe_suphe: 1 }, bayrak: { reftar_bahce: 'sert' },
              iz: 'Hanımlar bunu da anlatacak.',
              adimlar: [
                ['f', 'Benim adımı anlatacağına çantayı aç Hatice. Hanımefendi mendil bekliyor.', 'ofkeli'],
                ['h1', 'A! Hizmetçisini da azarlıyor.'],
                ['h3', 'Hakkı var kardeş. Kız lafı fazla uzattı.'],
              ],
            },
          ],
        },
        {
          eger: (S) => S.bayrak.reftar_tavir === 'sert',
          ise: [['ic', 'Leyla\'ya söz vermiştim. Bu sefer nazını çekmeyecektim.']],
          degilse: [],
        },
        ['reftar', 'Mendil mi efendim? Hangi mendil?', 'notr'],
        ['ic', 'Ne istendiğini pekâlâ biliyor.'],
        'Bir süre daha anlamamış gibi yaptı. Sonra çantayı açtı, mendili çıkardı.',
        // Sözü dinleyip arayana küçük bir ipucu
        'Mendilin altında sırma işli bir erkek tütün kesesi gördüm. Üstünde bir {b}N{/b} harfi.',
        'Hatice çantayı çabucak kapadı.',
        ['ic', 'Hanımlar benim harflerimi okudu. Ben de bunu okudum.', 'mahzun'],
        ['reftar', 'Siz yorulmayın küçük hanım. Ben götürürüm. Hanımefendi beni sorar zaten.', 'ana'],
        { gizle: 'reftar' },
        ['ic', 'Mendili ben buldum, teşekkürü o alacak. Hep böyle olur.', 'mahzun'],
        { bayrak: { reftarBulundu: true, kese: true } },
        { delil: 'Hatice, düğün evinde hanımlara bizim evi anlatıyordu.' },
        { delil: 'Hatice\'nin çantasında N harfli, sırma işli bir erkek tütün kesesi vardı.' },
        { goster: ['fevkiye', 'ana'] },
        'Leyla arkamdan yetişti.',
        ['fevkiye', 'Buldun mu? Aferin! Gel şimdi, gelini görmeden gitmem, bilmiş ol.'],
        { gorev: 4 },
      ],
    },

    /* ------------------------------------------------------------------
       Gelin odası, sonra konağa dönüş ve Şefik
       ------------------------------------------------------------------ */
    {
      id: 'b1_gelin', mekan: 'gelin_odasi', tetik: 'giris', kosul: (S) => S.gorev === 4,
      sahne: [{ id: 'fevkiye', ifade: 'ana' }, 'gelin'],
      adimlar: [
        'Gelin odasının kapısında insan seli vardı. Kapıyı tutan yaşlı bir hanım beni süzdü.',
        // İlk seçimin (şerbet) geri çağrısı
        {
          eger: (S) => S.bayrak.yuz === 'gul',
          ise: ['"Sen o şerbeti gülerek alan kızsın. Geç kızım, gülen yüze kapı açılır."'],
          degilse: ['"Şerbeti geri çeviren kız bu mu? Gel bakalım. Gelini görünce belki gülersin."'],
        },
        { goster: ['fevkiye', 'saskin'] },
        'Leyla omzuna bir dirsek yedi. "Vay!" diye bağırdı.',
        ['f', 'Hiç vay deme. Bunu sen istedin.', 'gulumseyen'],
        ['fevkiye', 'Annem de dadım da iyi kadınlardı. Ömrümde dirsek yememiştim. Onun da tadını öğrendim.', 'ana'],
        'Akıntı bizi içeri attı. Gelin, sırmalarının ağırlığı altında, kanepesinde oturuyordu. Bize el etti.',
        ['gelin', 'Gelin, eteğimin dibine oturun. Başka yer kalmadı.'],
        ['fevkiye', 'Tülünüz yırtılmış gelin hanım.'],
        ['gelin', 'Sabahtan beri üç yerinden yırtıldı. Dördüncüyü saymıyorum artık.'],
        'Gelin de damat da güzeldi. Herkes memnundu.',
        ['ic', 'Bir yıl sonra o kanepede ben oturacağım. Öyle diyorlar.', 'mahzun'],
        ['gelin', 'Kimse inanmaz, ama ben düğünü düşünmüyorum artık. Yarın sabahı düşünüyorum.'],
        ['gelin', 'Uyanınca başka bir evin tavanına bakacağım. İlk kahveyi kime pişireceğim, kimin elini öpeceğim...'],
        ['f', 'Ben neye bakacağım?', 'mahzun'],
        ['ic', 'Gelin duymadı. İyi ki duymadı. O sabah uyandığımda Şefik yanımda olacak mı? Ben bunu düşünüyorum.', 'mahzun'],
        {
          soru: 'Gelin eğilip kulağıma bir şey fısıldamak istiyor.',
          secim: [
            {
              m: 'Kulağımı uzatmak.', etki: { mukaddem: 2 },
              iz: 'Kenan Bey\'in adı kulağında kaldı.',
              adimlar: [['gelin', 'Senin de sıran yakın, duydum. Damadın adı Kenan\'mış, öyle mi?'], ['ic', 'Herkes biliyor. Bir ben bilmiyormuş gibi yapıyorum.', 'utanmis']],
            },
            {
              m: 'Gülümseyip başımı sallamak.', etki: { itibar: 2 },
              iz: 'Gelin hanım terbiyeni övdü.',
              adimlar: [['gelin', 'Ne terbiyeli kız. Annen olsa seninle övünürdü.'], ['ic', 'Annem olsaydı.', 'mahzun']],
            },
          ],
        },

        { temizle: true },
        { kart: 'Akşamüstü.', alt: 'Sait Efendi\'nin konağı.' },
        { faz: 'B', mekanaGit: 'konak_sofa' },
        { kiyafet: 'dugun' },
        { goster: ['calibe', 'soguk'] }, { goster: ['sefik', 'sevincli'] },
        'Perihan Hanım feracesini çıkarırken ben merdivene koştum. Şefik iniyordu.',
        'Önce durdu, Perihan Hanım\'ın elini öptü. Sonra boynuma atıldı.',
        ['sefik', 'Abla!'],
        ['f', 'Ateşin var mı? Ver bakayım avuçlarını.', 'gulumseyen'],
        ['sefik', 'Yok. Nimet dadım bütün gün başımdan ayrılmadı. Şimdi yukarıda, sizin elbiselerinizi hazırlıyor.', 'ana'],
        {
          soru: 'Perihan Hanım feracesini çıkarmış, bize bakıyor.',
          secim: [
            {
              m: 'Şefik\'i kucaklayıp alnını öpmek.', etki: { sefik: 1 }, bayrak: { donus: 'sefik' },
              iz: 'Şefik bunu bütün akşam anlatacak.',
              adimlar: [
                'Şefik\'i kucakladım, alnını öptüm. Serindi, şükür.',
                ['calibe', 'Çocuğu şımartıyorsun Feride. Hasta diye her şey hoş görülmez.', 'soguk'],
              ],
            },
            {
              m: 'Önce Perihan Hanım\'ın feracesini almak.', etki: { calibe_suphe: -1, vakar: 1 }, bayrak: { donus: 'calibe' },
              iz: 'Perihan Hanım bir an şaşırdı. Şefik bekledi.',
              adimlar: [
                'Feracesini kolundan alıp askıya astım. Perihan Hanım bir an şaşırdı.',
                ['calibe', 'Terbiyeli kız. Görenler ne der, onu bilir.', 'sinsi'],
                ['ic', 'Şefik merdivende bekledi. Onu bekletmek bana dokundu.', 'mahzun'],
              ],
            },
          ],
        },
        { gizle: 'calibe' },
        ['sefik', 'Gel, odamıza çıkalım. Sana yarım kalan resmimi göstereceğim.', 'sevincli'],
        { gorev: 5 },
      ],
    },

    /* Oda: mürekkep */
    {
      id: 'b1_oda', mekan: 'fazila_oda', tetik: 'giris', kosul: (S) => S.gorev === 5,
      sahne: [{ id: 'sefik', ifade: 'notr' }, { id: 'mehves', ifade: 'ana' }],
      adimlar: [
        { kiyafet: 'ev', kilit: 'Bu sahnede kıyafetiniz kitapta tarif edildiği gibidir: düğünden dönünce gündelik kıyafet.' },
        'Odamızda annemin resmi duvardan bize bakıyor. Sarı saçları, baygın mavi gözleri. Şefik tıpkı o.',
        ['mehves', 'Hanımcığım, anahtarlarını ver de düğün elbiselerini kaldırayım.'],
        ['f', 'Sen yorulma Nimet. Hanımefendi görürse...', 'mahzun'],
        ['mehves', 'Görsün. Olsa olsa beni de öbür arkadaşlarım gibi kovar. Varsın kovsun.', 'kararli'],
        { gizle: 'mehves' },
        'Nimet elbiselerimi kucaklayıp çıktı. Şefik\'in yarım kalmış resmi masada duruyordu: bir kayık, bir de yalı.',
        // Dönüşte kime koştuğun (donus) burada geri döner
        { eger: (S) => S.bayrak.donus === 'calibe',
          ise: [['sefik', 'Merdivende seni bekledim abla. Önce Perihan annemin feracesini aldın.'], ['ic', 'Şikâyet etmedi. Yalnız söyledi. Bu daha çok dokundu.', 'mahzun']],
          degilse: [{ eger: (S) => !!S.bayrak.donus, ise: [['sefik', 'Perihan annem "şımartıyorsun" dedi. Ama sen yine öptün abla!']], degilse: [] }] },
        // Münevver Hanım'ın getirdiği kitap Şefik'e veriliyor
        { goster: ['kitap'] },
        {
          eger: (S) => S.bayrak.kitap === 'sefik',
          ise: [
            'Münevver Hanım\'ın bohçasını Şefik\'e verdim. Düğümü dişleriyle çözdü.',
            ['sefik', 'Kuşlu kitap! Bu kuşu ben yırtmıştım abla. Bak, yapıştırmışlar!', 'sevincli'],
            'Şefik yaprakları hızlı hızlı çevirirken arasından bir şey halıya süzüldü. Kurumuş, sararmış bir yasemin.',
            ['sefik', 'Abla, bu ne? Çiçek mi?', 'notr'],
            ['ic', 'Bizim bahçenin yasemini. Şefik bu kuşu yırttığı gün barışalım diye ona bir dal uzatmıştım. On yaşındaydım.', 'utanmis'],
            ['ic', 'Yedi yıl saklamış.', 'utanmis'],
            {
              soru: 'Kurumuş yasemin avucumda.',
              secim: [
                {
                  m: 'Yasemini mendilime sarıp saklamak.', etki: { mukaddem: 5 }, bayrak: { yasemin: 'sakla' },
                  iz: 'Yasemin mendilinin içinde.',
                  adimlar: [
                    'Yasemini mendilimin arasına koydum. Köşesindeki {b}F{/b} harfinin yanına.',
                    ['sefik', 'Abla, yüzün kızardı!', 'sevincli'],
                    ['f', 'Kandilin ışığındandır.', 'utanmis'],
                  ],
                },
                {
                  m: 'Yasemini kitabın arasına geri koymak.', etki: { mukaddem: 2, vakar: 1 }, bayrak: { yasemin: 'geri' },
                  iz: 'Yasemin yine onun bıraktığı sayfada.',
                  adimlar: ['Yasemini bulduğum sayfaya geri koydum. Kitap Şefik\'in. Sayfa onun.'],
                },
              ],
            },
          ],
          degilse: [
            'Münevver Hanım\'ın getirdiği kitabı Şefik\'e verdim.',
            ['sefik', 'Kuşlu kitap! Bu kuşu ben yırtmıştım abla. Bak, yapıştırmışlar!', 'sevincli'],
            ['f', 'Bu sefer yırtma. Sana ayrılmış.', 'gulumseyen'],
            {
              eger: (S) => S.bayrak.yasemin === 'sakla',
              ise: [['ic', 'Mendilimin içindeki yasemin elime değdi. Şefik görmedi.', 'utanmis']],
              degilse: [['ic', 'Yasemin hâlâ o sayfada. Şefik oraya gelince ne diyeceğimi bilmiyorum.', 'utanmis']],
            },
          ],
        },
        'Şefik kitabı yastığının yanına koydu. Resmini sonra göstermek istedi; önce kuşları saydı.',
        { gizle: 'kitap' },
        { goster: ['mefharet'] },
        'Kapı açıldı. Nazlı içeri süzüldü, masadaki mor mürekkep hokkasının kapağını açtı; Şefik yetişemeden resmin üstüne boşalttı ve kaçtı.',
        { gizle: 'mefharet' },
        { goster: ['murekkep_resim'] },
        ['sefik', 'Resmim!..', 'aglamakli'],
        'Şefik ağlamaya başladı. Bir dakika geçmeden kapıda Perihan Hanım belirdi.',
        { goster: ['calibe', 'ofkeli'] },
        ['calibe', 'Nazlı\'yı odadan niye kovdunuz? Kız ağlaya ağlaya yanıma geldi.', 'ofkeli'],
        {
          soru: 'Şefik\'in resmi mor bir göl olmuş. Perihan Hanım cevap bekliyor.',
          secim: [
            {
              m: '"Anne, kabahat Nazlı\'da."', etki: { calibe_suphe: 1, isyan: 1, sefik: 2 }, bayrak: { murekkep: 'itiraz' },
              iz: 'Perihan Hanım kapıyı usulca örttü.',
              adimlar: [
                ['f', 'Anne, biz sizin onu azarlayacağınızı düşünürken siz gelip bize bağırıyorsunuz. Mürekkebi resme döken Nazlı\'dır.', 'ofkeli'],
                ['calibe', 'Ben çocuklarıma söz söyletmem.', 'soguk'],
                ['f', 'Şefik de bu evin çocuğudur efendim.'],
                'Perihan Hanım bana uzun uzun baktı. Sesi yükselmedi; inceldi.',
                ['calibe', 'Elbette. Ben de onun annesiyim. Onun terbiyesini senden öğrenmeyeceğim.', 'soguk'],
                'Kapıyı çarpmadı. Usulca örttü. Çarpsaydı daha az korkardım.',
                { gizle: 'calibe' },
                ['sefik', 'Abla... Sen benim için konuştun.', 'aglamakli'],
                ['f', 'Konuşurum.', 'ofkeli'],
                ['ic', 'Bu akşam babam bir şey duyacak. Ne duyacağını bilmiyorum, ama duyacak.', 'mahzun'],
              ],
            },
            {
              m: 'Susmak ve Şefik\'i teselli etmek.', etki: { sefik: 1, vakar: 1, mehves: 1 }, bayrak: { murekkep: 'sus' },
              iz: 'Mor göl, yelkenlinin denizi oldu.',
              adimlar: [
                'Bir şey demedim. Perihan Hanım cevap alamayınca homurdanarak çıktı.',
                { gizle: 'calibe' },
                ['f', 'Ağlama. Bak, mürekkep tam denizin olduğu yere dökülmüş.', 'gulumseyen'],
                ['sefik', 'Mor deniz olur mu?', 'notr'],
                ['f', 'Akşamüstü olur. Güneş batarken Boğaz mor olur. Kayığı yeniden çizeriz, bu sefer yelkenli olsun.'],
                ['sefik', 'Yelkeni ben çizerim. Sen martıları çiz.', 'sevincli'],
              ],
            },
          ],
        },
        ['mehves', '{i}(Kapıdan){/i} Yemeğe buyurunuz efendim.'],
        { gorev: 6 },
      ],
    },

    /* Yemek salonu: sofra */
    {
      id: 'b1_sofra', mekan: 'yemek_salonu', tetik: 'giris', kosul: (S) => S.gorev === 6,
      sahne: [{ id: 'sai', ifade: 'notr' }, { id: 'calibe', ifade: 'sinsi' }, { id: 'nabi', ifade: 'notr' }, { id: 'suha', ifade: 'notr' }],
      adimlar: [
        'Sofrada herkesin yeri bellidir. Başta babam. Sağında Perihan Hanım. Solunda ben, yanımda Şefik. Karşıda Süha Bey, Nabi Bey ve Perihan Hanım\'ın çocukları.',
        ['calibe', 'Gelin odasını görmeliydiniz efendi. Eşya güzel, ama zevk yok. Hanımların yarısı da terzisinin Fransızcasına kurban gitmiş.', 'sinsi'],
        ['sai', 'Düğün düğündür hanım. Bizim de yetişmiş iki delikanlımız var, asıl onları düşünmeli.', 'ana'],
        ['nabi', 'O saadet ağabeyime kalırsa vay halimize.', 'ana'],
        ['calibe', 'Senin gibi züğürde kim kız verir? Babanın verdiği on lirayla ev mi geçindireceksin?', 'soguk'],
        ['nabi', 'Ben ev geçindirecek kız aramıyorum abla. Beni geçindirecek olanı arıyorum. İç güveyi olurum, hiç gocunmam.'],
        'Babam güldü. Perihan Hanım gülmedi.',
        ['nabi', 'Sen ne susuyorsun Süha? Süt dökmüş kedi gibi.'],
        ['suha', 'Bir erkek, evini idare edecek kazancı bulmadan evlenmemeli. Benim düşüncem bu.'],
        ['suha', 'İnsan fakir bir kızı alıp onu zengin gibi yaşatmakla övünebilir. Ama kibar bir kızı alıp fakir gibi geçindirmekle mutlu olamaz.'],
        'Bunu söylerken bir an bana baktı. Sonra tabağına.',
        {
          soru: 'Süha Bey\'in bakışı üstümde kaldı.',
          secim: [
            {
              m: 'Gözlerimi tabağıma indirmek.', etki: { vakar: 1 }, bayrak: { sofra_bakis: 'yer' },
              iz: 'Gözlerin tabağında kaldı.',
              adimlar: [
                ['ic', 'Süha Bey bize hep saygılı davranmıştır. Çocukken oyuncak getirirdi, sonra nota. Onu hep dayı bildim.', 'mahzun'],
                ['ic', 'Bu akşamki bakışına bir mana veremedim.'],
              ],
            },
            {
              m: '"Doğru söylüyorsunuz dayı bey."', etki: { suha: 2, calibe_suphe: 1 }, bayrak: { sofra_bakis: 'cevap' },
              iz: 'Perihan Hanım\'ın çatalı tabağa değdi.',
              adimlar: [
                ['f', 'Doğru söylüyorsunuz dayı bey.', 'mahzun'],
                ['suha', 'Teşekkür ederim Feride Hanım. Tabağınızdan başınızı kaldırmanız bile yeter.', 'ana'],
                'Perihan Hanım çatalını tabağına bıraktı. Ses çıkardı.',
                ['ic', 'Onu hep dayı bildim. Bu akşam sesi kulağıma başka türlü geldi. Hoşuma gitmedi.'],
              ],
            },
            {
              m: 'Şefik\'in tabağıyla ilgilenmek.', etki: { sefik: 1 }, bayrak: { sofra_bakis: 'sefik' },
              iz: 'Şefik\'in tabağı doldu; başını kaldırmadın.',
              adimlar: [
                'Şefik\'in etini küçük küçük kestim. Başımı kaldırmadım.',
                ['sefik', 'Abla, ben kendim keserim artık. On yaşındayım.', 'sevincli'],
                ['ic', 'Süha Bey\'i hep dayı bildim. Bu akşamki bakışına bir mana veremedim.', 'mahzun'],
              ],
            },
          ],
        },
        { not: { suha: 'Dayı bildiğim adam. Bu akşam bana başka türlü baktı.' } },
        ['sai', 'Seninle evlenecek kız bahtiyar olacak Süha Bey.'],
        // Madalyonu saklama seçimini Perihan kullanır
        {
          eger: (S) => S.bayrak.madalyon === 'sakla',
          ise: [
            ['calibe', 'Feride, madalyonunu yakanın içine saklamışsın. Düğün evinde de öyle yapmışsın, duydum.', 'sinsi'],
            ['calibe', 'Annenin yadigârı saklanacak bir şey mi kızım? Görenler başka bir şey sanır.', 'sinsi'],
            ['sai', 'Hanım, çocuğun annesinden kalmadır...', 'notr'],
            ['ic', 'Babam sözünü bitirmedi. Ben de madalyonu yakamdan çıkarmadım.', 'mahzun'],
            { etki: { calibe_suphe: 1 } },
          ],
          degilse: [],
        },
        // Düğün evindeki seçimlerin sofraya yansıması
        {
          eger: (S) => S.bayrak.cevap === 'sert' || S.bayrak.reftar_bahce === 'sert',
          ise: [
            ['calibe', 'Bugün düğün evinde bizim Feride\'nin dili konuşuldu efendi. Bir söz söylemiş, üç konak duymuş.', 'sinsi'],
            ['sai', 'Feride, kızım... Doğru mu?', 'mahzun'],
            ['ic', 'Babam kızmadı. Üzüldü. Bu daha ağır.', 'mahzun'],
            { etki: { baba_guven: -2 } },
          ],
          degilse: [{
            eger: (S) => S.bayrak.mendil === 'hizmetci',
            ise: [
              ['calibe', 'Feride bugün bana hizmetçi kullanmayı öğretti efendi. Ne düşünceli kız.', 'sinsi'],
              'Babam güldü. Ben gülmedim.',
            ],
            degilse: [],
          }],
        },
        ['sai', 'Kahveyi salonda içelim. Feride bize bir şey çalsın.', 'ana'],
        { gorev: 7 },
      ],
    },

    /* Büyük salon: piyano (oyun için ek: parça seçimi) */
    {
      id: 'b1_piyano', mekan: 'buyuk_salon', tetik: 'giris', kosul: (S) => S.gorev === 7,
      sahne: [{ id: 'sai', ifade: 'ana' }, { id: 'calibe', ifade: 'soguk' }, { id: 'suha', ifade: 'notr' }, { id: 'sefik', ifade: 'ana' }],
      adimlar: [
        'On yıldır piyano çalarım. Babamın bu evde bana ait bildiği tek şey belki de budur.',
        {
          soru: 'Ne çalacağım?',
          secim: [
            {
              m: 'Babamın sevdiği eski bir şarkı.', etki: { baba_guven: 5, vakar: 1 }, bayrak: { piyano: 'baba' },
              iz: 'Babana annenin şarkısını hatırlattın.',
              adimlar: [{ goster: ['sai', 'mahzun'] }, 'Babam gözlerini kapadı. Parmaklarıyla dizine tempo tuttu.', ['sai', 'Annen de bunu çalardı...', 'mahzun'], { goster: ['calibe', 'ofkeli'] }, 'Perihan Hanım yelpazesini daha hızlı salladı.'],
            },
            {
              m: 'Şefik\'i yanıma alıp hareketli bir parça.', etki: { sefik: 1, itibar: 1 }, bayrak: { piyano: 'sefik' },
              iz: 'Şefik iki kez şaşırdı; ikisinde de güldünüz.',
              adimlar: ['Şefik\'i sol yanıma aldım. Zor, hareketli bir parça çaldık. Şefik iki kez şaşırdı, ikisinde de güldük.'],
            },
            {
              m: 'Parlak bir alafranga vals.', etki: { suha: 5, itibar: 2 }, bayrak: { piyano: 'vals' },
              iz: 'Süha Bey gözünü ellerinden ayırmadı.',
              adimlar: [
                'Valsin ilk notalarında Süha Bey koltuğundan doğruldu. Parça bitene kadar gözünü ellerimden ayırmadı.',
                ['ic', 'Bir an çalmayı bırakmak istedim. Bırakmadım.', 'mahzun'],
              ],
            },
          ],
        },
        ['suha', 'On yılda bu kadar ilerlemek herkesin kârı değil Feride Hanım.', 'ana'],
        ['sai', 'Bir sene daha çalışır. Ondan sonrası Kenan Bey\'le kendi keyfine kalmış.', 'ana'],
        { etki: { baba_guven: 2 } },
        {
          soru: 'Babam Kenan Bey\'in adını herkesin önünde andı.',
          secim: [
            {
              m: 'Başımı eğip gülümsemek.', etki: { mukaddem: 3 },
              iz: 'Gülümsediğini salondaki herkes gördü.',
              adimlar: [
                ['ic', 'Kenan Bey. Babam onun adını ilk kez herkesin önünde andı.', 'gulumseyen'],
                { goster: ['calibe', 'sinsi'] }, 'Süha Bey fincanını bıraktı; gözleri bir an bende durdu. Perihan Hanım yelpazesini kapattı.',
              ],
            },
            {
              m: 'Notaları toplamakla meşgul olmak.', etki: { vakar: 1 },
              iz: 'Utancını notaların arasına sakladın.',
              adimlar: [
                'Notaları sehpaya dizdim. Kimsenin yüzüne bakmadım.',
                { goster: ['calibe', 'sinsi'] }, 'Perihan Hanım yelpazesini kapattı.',
              ],
            },
          ],
        },
        { gorev: 8 },
      ],
    },

    /* İsteğe bağlı: mutfak (oyun için ek; bilgi romandan) */
    {
      id: 'b1_mutfak', mekan: 'mutfak', kisi: 'mehves', kosul: (S) => S.gorev >= 6 && S.gorev <= 7,
      sahne: [{ id: 'mehves', ifade: 'ana' }, 'asci'],
      adimlar: [
        'Mutfakta bakır kaplar parlıyor. Aşçı kadın ocağın başında, Nimet tezgâhta.',
        ['mehves', 'Hanımcığım, siz mutfağa inmezdiniz. Bir şey mi lazım?'],
        {
          eger: (S) => S.bayrak.reftar_tavir === 'sert',
          ise: [['f', 'Hatice\'yle konuşacağım Nimet. Şefik\'i bir daha üşütmeyecek. Nerede o?', 'ofkeli']],
          degilse: [['f', 'Seni aradım. Hatice nerede, eve döndük döneli görmedim.', 'mahzun']],
        },
        ['mehves', 'Bulamazsınız ya. Hanımefendi onu son günlerde selamlık tarafına, beylerin hizmetine verdi.', 'notr'],
        ['mehves', 'Bir şey daha var hanımcığım. Ama burada olmaz. Gece odanıza gelirim.', 'endiseli'],
        { delil: 'Perihan Hanım, Hatice\'yi beylerin hizmetine vermiş.' },
      ],
    },

    /* İsteğe bağlı: annesinin resmi (romandaki portre sahnesinden) */
    {
      id: 'b1_resim', mekan: 'fazila_oda', kisi: 'resim', kosul: (S) => S.gorev >= 6 && S.gorev <= 7,
      sahne: ['resim', { id: 'sefik', ifade: 'notr' }],
      adimlar: [
        'Annemin resmine yaklaştım. Babam onu annemin ölümünden beş yıl sonra bir sandıktan çıkarıp bana vermişti.',
        'O gün Perihan Hanım resmi görünce ağlamış, babama "Seni ne geçmişe verebilirim ne geleceğe" demişti.',
        ['sefik', 'Abla, ben bu kadar güzel miyim?', 'ana'],
        ['f', 'Sen ona benziyorsun Şefik. Ben yüzüne benzemedim; bari yoluna benzeyeyim.', 'gulumseyen'],
        ['sefik', 'Keşke Perihan annemin de böyle bir bakışı olsaydı. Ondan bu kadar korkmazdık.', 'aglamakli'],
        ['f', 'Öyle deme kardeşçiğim. O da senin annen.', 'mahzun'],
        { etki: { vakar: 1, sefik: 1 } },
      ],
    },

    /* ------------------------------------------------------------------
       Gece: Nimet'in sırrı, gerdanlık haberi, perde arkası, bölüm sonu
       ------------------------------------------------------------------ */
    {
      id: 'b1_gece', mekan: 'fazila_oda', tetik: 'giris', kosul: (S) => S.gorev === 8,
      sahne: [{ id: 'mehves', ifade: 'endiseli' }],
      adimlar: [
        'Şefik uyudu. Nimet kandili kıstı, kapıyı örttü ve yanıma diz çöktü.',
        ['mehves', 'Hanımcığım, sana bir şey diyeceğim. Ama ağzından çıkmayacak.'],
        ['f', 'Söyle.', 'mahzun'],
        ['mehves', 'Hatice. Önce efendinin gözüne girmeye çalıştı. Oradan umudu kesince gözünü beylerden birine dikti.', 'notr'],
        ['f', 'Ne diyorsun Nimet?'],
        ['mehves', 'Beylerin odaları aynı koridorda. Süha Bey kendi giyinir, kendi soyunur. Hanımefendi Hatice\'yi son günlerde beylerden birinin hizmetine verdi. Kız da geceleri o koridordan eksik olmuyor.'],
        {
          eger: (S) => !!S.bayrak.kese,
          ise: [['ic', 'Hatice\'nin çantasındaki sırma işli kese geldi aklıma. Üstündeki {b}N{/b} harfi.', 'mahzun']],
          degilse: [],
        },
        ['mehves', 'Bu iş kötüye varacak.', 'endiseli'],
        {
          soru: 'Nimet yüzüme bakıyor.',
          secim: [
            {
              m: '"Bunu unutmayacağım. Ama şimdilik kimseye söylemeyeceğim."', etki: { vakar: 1, mehves: 2 }, bayrak: { bilgi_reftar_nabi: true },
              iz: 'Sır artık ikinizin.',
              adimlar: [
                ['f', 'Bunu aklımda tutacağım Nimet. Ama şimdi konuşursam Hatice inkâr eder, hanımefendi de onu korur.'],
                ['mehves', 'Aferin hanımcığım. Vakti gelir.', 'kararli'],
                { delil: 'Nimet: Hatice geceleri beylerin koridorundan eksik olmuyor. Hangi bey?' },
              ],
            },
            {
              m: '"Babam bilmeli."', etki: { isyan: 1, mehves: -1 }, bayrak: { bilgi_reftar_nabi: true, babaya_soyleme_niyeti: true },
              iz: 'Nimet\'in yüzü sarardı.',
              adimlar: [
                ['f', 'Bu evin namusu babamın namusudur. Bilmeli.', 'ofkeli'],
                ['mehves', 'Sakın! Efendi sana mı inanır, hanımefendiye mi? Beni kovdururlar, seni de yalancı çıkarırlar.'],
                ['f', 'Bu akşam değil. Ama bir gün söyleyeceğim.', 'mahzun'],
                ['mehves', 'O gün gelince elinde lakırdıdan fazlası olsun hanımcığım.', 'kararli'],
                { delil: 'Nimet: Hatice geceleri beylerin koridorundan eksik olmuyor. Babama söylemek için delil gerek.' },
              ],
            },
            {
              m: '"Ben duymamış olayım."', etki: { vakar: 1 }, bayrak: { bilgi_reftar_nabi: false },
              iz: 'Duymamış olmak, duymamak değil.',
              adimlar: [
                ['f', 'Ben bunu duymadım Nimet. Başkasının günahını taşımak istemem.'],
                ['mehves', 'Sen bilirsin hanımcığım. Ama günah, taşımasan da bu evin içinde.', 'notr'],
              ],
            },
          ],
        },
        ['mehves', 'Bir de iyi haberim var. Münevver Hanımefendi\'nin konağından duydum. Senin için yaptırdıkları gerdanlık bitmiş. İki güne kadar gelip boynuna takacaklar.', 'ana'],
        {
          eger: (S) => S.bayrak.madalyon === 'sakla',
          ise: ['Bir şey diyemedim. Elim, kendiliğinden, yakamın içindeki madalyona gitti.'],
          degilse: ['Bir şey diyemedim. Elim, kendiliğinden, boynumdaki madalyona gitti.'],
        },
        ['mehves', 'Düğününden sonra artık benim de evlenme zamanım gelmiş demektir. Seni teslim edeyim, gözüm arkada kalmaz.'],
        ['calibe', '{i}(Uzaktan){/i} Nimet! Neredesin? Gel odamı topla!', 'ofkeli'],
        { gizle: 'mehves' },
        'Nimet kalktı. Kapıdan çıkarken döndü, parmağını dudağına götürdü.',
        ['ic', 'Gerdanlık. İki gün sonra.'],
        ['ic', 'Bir yıl sonra bu evden çıkacağım. Şefik yanımda olmazsa hiçbir gerdanlığın manası yok.'],
        'Annemin resmine baktım. Kandilin ışığında gülümser gibiydi.',

        // Söylenti kartı
        {
          eger: (S) => S.bayrak.cevap === 'oksuz',
          ise: [{ kart: 'Düğün evindeki hanımlar o günü şöyle anlatacak:', alt: '"Sait Efendi\'nin öksüz kızı. Edebiyle susturdu bizi."' }],
          degilse: [{
            eger: (S) => S.bayrak.cevap === 'sert',
            ise: [{ kart: 'Düğün evindeki hanımlar o günü şöyle anlatacak:', alt: '"Sait Efendi\'nin kızı. Güzel, ama dili de güzelliği kadar keskin."' }],
            degilse: [{ kart: 'Düğün evindeki hanımlar o günü pek hatırlamayacak:', alt: '"Hangi kız? Ha, şu sarışın, sessiz olan."' }],
          }],
        },
        // Bölüm ödülü: Feride'nin annesinin resmi önündeki anı (gerçek çizim)
        { cizim: 'annesinin_resmi' },
        // Perde arkası
        { temizle: true }, { arkaplan: 'suha_oda' },
        { kart: 'Aynı gece, konağın öbür ucunda.', alt: 'Feride bunları bilmiyor.' },
        ['pa', 'Doktor Süha Bey\'in odasında bir mum yanıyor. Masada bir kitap açık. Sayfası üç gecedir çevrilmedi.'],
        ['pa', 'Süha Bey oturmuyor. Odayı bir uçtan bir uca arşınlıyor.'],
        ['pa', 'Bu eve temiz bir niyetle gelmişti. O niyetten geriye bir şey kalmadı.'],
        ['pa', 'Yeleğinden kopmuş çiçekli bir düğmenin yeri boş duruyor. O düğmenin kimde olduğunu biliyor.'],
        ['pa', 'Bir yıl, diye düşünüyor. Önümde koca bir yıl var.'],
        ['pa', 'Koridorun ucunda bir kapı sessizce aralanıyor. Süha Bey mumu üflüyor.'],
        ['pa', 'Aralanan kapı, Perihan Hanım\'ın kapısı.'],
        ['pa', 'Aralıktan alçak, acelesiz bir ses geliyor. Kime söylendiği belli değil.'],
        ['calibe', '{i}(Kapının ardından){/i} Kenan Bey o gerdanlığı Feride\'nin boynuna takamayacak.', 'sinsi'],

        { bolumSonu: true },
      ],
    },
  ],

  /* Bölüm sonu panelinde bir sonraki bölümü merak ettiren satır */
  merak: 'Gerdanlık iki gün sonra gelecek. Perihan Hanım ise Kenan Bey\'in onu Feride\'nin boynuna takamayacağını söylüyor. Neden? Ve bunu kime söylüyor?',

  /* Bölüm sonu notu: önemli kararları Feride'nin sesiyle toplar */
  sonNotu: function (S) {
    const b = S.bayrak, p = [];
    if (b.cevap === 'sert') p.push('Düğün evinde hanımlara cevap verdim; sözüm benden önce eve vardı.');
    else if (b.cevap === 'oksuz') p.push('Düğün evinde "öksüzüm" dedim. Hanımlar beni edebimle anacak; ben o iki damlayı unutmayacağım.');
    else p.push('Düğün evinde sustum. Hanımlar beni çabuk unutur.');
    if (b.mendil === 'hizmetci') p.push('Perihan Hanım\'a bugün ilk kez "hayır"a benzer bir şey dedim.');
    else if (b.reftar_bahce === 'sert') p.push('Hatice\'yi hanımların önünde azarladım. Bunu da anlatacaklar.');
    else p.push('Hatice\'yi ben buldum, teşekkürü o aldı.');
    if (b.murekkep === 'itiraz') p.push('Şefik\'in resmi için sesimi yükselttim. Perihan Hanım "daha" diyor.');
    else p.push('Şefik\'in mor denizine birlikte bir yelkenli çizeceğiz.');
    if (b.babaya_soyleme_niyeti) p.push('Nimet\'in sırrını bir gün babama söyleyeceğim; ama elimde lakırdıdan fazlası olmalı.');
    else if (b.bilgi_reftar_nabi) p.push('Nimet\'in sırrı artık benim de sırrım.');
    else p.push('Nimet\'in fısıltısını duymamış oldum. Ama duydum.');
    if (b.yasemin === 'sakla') p.push('Mendilimin içinde kurumuş bir yasemin var. Yedi yıl onun kitabında durmuş.');
    else if (b.yasemin === 'geri') p.push('Yasemini onun bıraktığı sayfaya geri koydum. Hangi sayfa olduğunu unutmadım.');
    if (S.gonul.suha > S.gonul.mukaddem) p.push('Kenan Bey\'i düşünmek istiyorum. Ama aklıma sofradaki o bakış geliyor; bundan hoşlanmıyorum.');
    else if (S.gonul.mukaddem >= 10) p.push('Bir yıl sonra o kanepede ben oturacağım. Bu gece, ilk kez, buna inanmak istedim.');
    else p.push('Bir yıl sonra o kanepede ben oturacağım. Öyle diyorlar.');
    return p.join(' ');
  },
};

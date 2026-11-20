/* =========================================================================
   YEDİNCİ BÖLÜM: KURŞUN KALEM (1. sezonun sonu)
   Biçim bolum1.js'teki gibidir.
   Roman: s. 175-186 (sahte mektup, babanın el kaldırması, Şefik'in hastalığı ve mektebe verilmesi,
   Remzi'nin görücüleri, çarşıda Münevver Hanım, düğün).
   BÖLÜMÜN TEK SORUSU: "Kurşun kalemle yazılmış bir yalan babamı bana düşman etti. Şefik'i benden alacaklar.
   Bu evden onların açtığı kapıdan mı çıkacağım, yoksa bunca ayda topladığım her şeyi masaya koyup
   kendi kapımı mı açacağım?"
   Son karar üç yola ayrılır: Remzi Bey'i kabul (romandaki gidişat), babaya her şeyi yazmak (deliller ve
   tanık yeterliyse perde yırtılır; değilse geri çevrilir), kimseyi kabul etmemek.
   HASSAS İÇERİK: Babanın el kaldırdığı sahne ayrıntıyla gösterilmez; oyuncu atlayabilir. Sahne hiçbir
   seçimin sonucu değildir; suç iftiranın ve öfkenindir. Kendine zarar verme düşüncesi hiçbir yerde yazılmaz;
   Kenan'ın çaresizliği yalnız uykusuzluk, gözyaşı ve annesinin sözüyle anlatılır.
   Konan bayraklar: dayak_atla, sahte_mektup_cevap, delil_yazi, sefik_hastalik, suha_tanik, sefik_veda,
   son_karar (remzi/ifsa/kimse), ifsa_denendi, mekan_b7.
   Derinleştirmede eklenen bayraklar (hiçbiri ifsaTutar koşulunu değiştirmez):
     b7_uyari (hizmetçi kız: o sabah kapı çalınmadı), baba_sorusu (sofa/gelmedi), yazi_incelendi,
     elbise_b7 (giy/sakla), sefik_resim_b7 (sakla/sandik), cikin_b7 (kurdele), nimet_isaret_b7 (iyi/hazir),
     piyano_b7 (baba/sefik/sustu).
   Tur 10 düzeltmelerinde eklenen bayraklar (hiçbiri sonu değiştirmez; yalnız sahnenin gidişini):
     gorucu_ic (umut/kapi/kirgin: görücüden sonra Feride'nin iç kararı; Remzi'ye gönül yalnız 'umut'ta artar),
     yuzlesme_ilk (yazi/ada: yüzleşmede önce hangi iddia), yuzlesme_guclu (ilk hamle elindekilerle tuttu),
     yuzlesme_destek (dugme/asci/kiz/koridor/suha/soz: Perihan tanığı çürütürken seçilen destek),
     yuzlesme_destek_tuttu, reftar_guvence (verdi/bekledi/yara: Hatice susunca yapılan).
   Atlama yolu (dayak_atla): kavga, öfke konuşması ve kolun sarılması okunmaz; kısa özet ve şiddetsiz
   savunma kararı gelir (sahte_mektup_cevap ve delil_yazi aynı değerlerle konur).
   Yan olaylar: b7_hizmetci (görev 0, sofa), b7_resim (görev 2, Feride'nin odası), b7_madam (görev 3,
   Madam'ın odası), b7_mutfak (görev 3-4, mutfak), b7_pencere (görev 3-4, bahçe), b7_piyano (görev 4, salon).
   Yazılmayan sonlar: Gizli Nikâh, Doktorun Hanımı, İç Güveyi, Kaçış.
   ========================================================================= */
window.BOLUMLER = window.BOLUMLER || {};

(function () {
  const aleyhte = (S) => S.v.dedikodu >= 3 || S.v.itibar < 40;
  // Sezon boyunca toplanan deliller ve konuşmaya hazır tanıklar
  const delilSayisi = (S) => {
    const b = S.bayrak;
    return [b.delil_ada, b.delil_dugme, b.delil_yazi, b.delil_ilac, b.musvedde === 'aldi' || b.pusula === 'alindi' || b.baba_biliyor,
      b.delil_soylenti, b.baba_sarsildi || b.baba_ada_supheli, b.nimet_duydu].filter(Boolean).length;
  };
  // Aşçı kadın (6. bölüm yan olayı): "Sorarlarsa yalan söylemem" dediyse o da tanıktır
  const tanikVar = (S) => !!S.bayrak.nimet_tanik || !!S.bayrak.reftar_tanik || !!S.bayrak.suha_tanik || !!S.bayrak.asci_tanik;
  const ifsaTutar = (S) => delilSayisi(S) >= 3 && tanikVar(S);
  // "Kırk Yıl" sonunun iki hâli (şartname 6.5)
  const kirkIyi = (S) => (S.v.sefik || 0) >= 5 && S.v.itibar >= 40;
  // 2. bölüm: pusula (ya da müsveddesi) nişan sabahı babaya verildiyse artık Feride'de değildir
  const kagitVardi = (S) => S.bayrak.pusula === 'alindi' || S.bayrak.musvedde === 'aldi';
  const pusulaBabada = (S) => !!S.bayrak.baba_biliyor || (S.bayrak.baba_haber === 'inandi' && kagitVardi(S));
  // Yüzleşme: hangi iddia elindekilerle tutar
  const yaziGuclu = (S) => !!S.bayrak.delil_yazi || !!S.bayrak.b7_uyari || pusulaBabada(S);
  const adaGuclu = (S) => !!S.bayrak.nimet_tanik || !!S.bayrak.reftar_tanik || !!S.bayrak.suha_tanik;
  // Babayı dinleme eşiğine getiren somut şey (mektubun yanında)
  const esik = (S) => S.bayrak.delil_yazi ? 'kitap' : (pusulaBabada(S) ? 'pusula' : (S.bayrak.delil_dugme ? 'dugme' : 'usak'));

  /* ----- Yüzleşmede yeniden kullanılan tanık parçaları (aynı adımlar; sıra oyuncunun seçimine göre) ----- */
  const asciBlok = [
    { goster: ['asci'] },
    'Aşçı kadın önlüğüyle geldi; ellerini silmeye vakit bulamamış.',
    ['asci', 'Bana sorarsanız yalan söylemem efendim. Siz yazıhanedeyken doktorun arabası kaç kere arka sokakta bekledi; kaçını saydım, kaçını saymadım. Rahmetli hanımın ekmeğini yedim; kızının yüzüne bakamaz olmak istemem.'],
    ['calibe', 'Mutfaktan salona laf mı taşınır oldu?', 'soguk'],
    ['asci', 'Taşınmazdı hanımefendi. Bugün efendi sordu.'],
  ];
  const suhaBlok = [
    { goster: ['suha'] },
    'Süha Bey kapıda durdu; içeri girmedi. Çantası elindeydi.',
    ['suha', 'Şişeyi ben açtım efendim. Kenan Bey bir damla içmedi. Çocuğun başına yemin etmiştim.'],
    ['suha', 'Gerisini bana sormayınız. Bugün bu evden çıkıyorum.'],
    'Bana bakmadı. Ablasına da.',
  ];
  const kizBlok = [
    { goster: ['hizmetci'] },
    'Kapı aralığından ince bir ses geldi. Onu kimse çağırmamıştı.',
    ['hizmetci', 'O sabah taşlığı ben siliyordum efendim. Kapı çalınmadı. Kâğıdı getiren olmadı.'],
    ['ic', 'Adını ben vermedim. Kendi geldi.'],
  ];

  // Sahte yazı iddiası
  const yaziBlok = [
    ['f', 'Şu kurşun kalemli kâğıda bir daha bakınız efendim. Size "Kapıdan verdiler" dendi; altındaki imza da Kenan Bey\'in dendi.'],
    {
      eger: (S) => !!S.bayrak.delil_yazi,
      ise: [
        'Babam kitabı açtı; kurşun kalemli kâğıdı yanına koydu. Bu kez baktı. Uzun baktı.',
        { eger: (S) => !!S.bayrak.yazi_incelendi, ise: [{ goster: ['josephine'] }, ['josephine', 'Harflere bakınız efendim. Biri açık, sağa yatık; öbürü yuvarlak, kapalı. İki ayrı el.']], degilse: [] },
        ['sai', 'Bu el o el değil.', 'mahzun'],
      ],
      degilse: [],
    },
    {
      eger: (S) => pusulaBabada(S),
      ise: [
        'Babam yeleğinin cebinden ikiye katlanmış bir kâğıt çıkardı: nişan sabahı ona verdiğim. Kurşun kalemli olanın yanına koydu.',
        ['sai', 'Bunu aylardır cebimde taşıyorum hanım. Bunu da mı kapıdan verdiler?', 'ciddi'],
        'Perihan Hanım kâğıda bakmadı. Bakmaması, bakmasından çok şey söyledi.',
      ],
      degilse: [],
    },
    { eger: (S) => !!S.bayrak.b7_uyari && S.bayrak.yuzlesme_destek !== 'kiz', ise: kizBlok, degilse: [] },
    {
      eger: (S) => !yaziGuclu(S),
      ise: [
        'Elimde o kâğıdın yanına koyacak ikinci bir yazı yoktu; "kapı çalınmadı" diyecek biri de.',
        ['calibe', 'Kâğıt ortada efendi; imzası altında. Kızın "sahte" demesiyle sahte mi olur?', 'gulumser'],
        ['sai', 'Kızım, bana söz değil, bakacak bir şey göster.', 'ciddi'],
        { eger: (S) => S.bayrak.yuzlesme_ilk === 'yazi', ise: [['ic', 'Buradan başlamamalıydım. Bu iddiayı tutacak şeyi vaktinde yanıma almadım.']], degilse: [['ic', 'Bu iddiayı tutacak şeyi vaktinde yanıma almadım. Yükü Ada gecesi için söylenenler taşıyacak.']] },
      ],
      degilse: [],
    },
  ];

  // Perihan tanığı çürütürken seçilen destek (karar b)
  const destekKarari = {
    soru: 'Perihan Hanım tanığımı çürütüyor. Babam bana bakıyor. Bu sözü neyle destekliyorum?',
    secim: [
      {
        m: 'Düğmeyi sehpaya koymak: "Bu, kimin yeleğinden düşmüş, bakınız."', kosul: (S) => !!S.bayrak.delil_dugme,
        bayrak: { yuzlesme_destek: 'dugme' }, iz: 'Yüzleşmede düğmeyi gösterdin.',
        adimlar: [
          { goster: ['dugme'] },
          { eger: (S) => esik(S) === 'dugme', ise: ['Babam düğmeyi geceden beri avucunda tutuyordu. Avucunu açtı.'], degilse: ['Düğümlü bezi açtım; çiçekli düğmeyi sehpaya, iki kâğıdın yanına koydum.'] },
          {
            eger: (S) => !!S.bayrak.nimet_tanik,
            ise: [
              ['mehves', 'Onu ben buldum efendim: hanımefendinin mücevher çekmecesinin dibinde. O yelek yıllarca benim elimden geçti; düğmesini tanırım.', 'kararli'],
              'Babam düğmeye baktı; sonra kapıya, Süha Bey\'in her sabah girdiği kapıya.',
              ['sai', 'Kumaşını ben seçmiştim.', 'mahzun'],
              ['ic', '"Kin" sözü havada kaldı. Kin, çekmecenin dibine düğme koymaz.'],
              { bayrak: { yuzlesme_destek_tuttu: true } }, { etki: { baba_guven: 2 } },
            ],
            degilse: [
              ['calibe', 'Bir düğme. Çamaşırdan düşer, yerden bulunur; kızın eline nereden geçtiği de belli değil.', 'gulumser'],
              'Babam düğmeyi çevirdi. Yeleği tanıdı; gözünden belli. Ama sormadı; soracağı kişi bu odada değildi.',
              ['ic', 'Düğme var; nerede bulunduğunu söyleyecek kişiyi yanıma almadım. Eşya tek başına konuşmuyor.'],
            ],
          },
          { gizle: 'dugme' },
        ],
      },
      {
        m: '"Mutfaktakine sorunuz. O kovulmadı; hâlâ sizin ekmeğinizi pişiriyor."', kosul: (S) => !!S.bayrak.asci_tanik,
        bayrak: { yuzlesme_destek: 'asci', yuzlesme_destek_tuttu: true }, iz: 'Yüzleşmede aşçı kadını çağırdın.',
        adimlar: [
          ['f', 'Kin tutmayan birine sorunuz öyleyse efendim. Mutfakta biri var; kovulmadı, hâlâ sizin ekmeğinizi pişiriyor.'],
          ...asciBlok,
          ['ic', '"Kin" diyemedi. Bu kadının kaybedecek ekmeği var; yine de geldi.'],
          { etki: { baba_guven: 2 } },
        ],
      },
      {
        m: '"Bu evde çalışan biri daha o sabahı gördü. Adını ben vermem; isterse kendi söyler."', kosul: (S) => !!S.bayrak.b7_uyari && S.bayrak.yuzlesme_ilk === 'ada',
        bayrak: { yuzlesme_destek: 'kiz', yuzlesme_destek_tuttu: true }, iz: 'Hizmetçi kızın adını vermedin; kendi geldi.',
        adimlar: [
          ['f', 'Sahte mektubun çıktığı sabahı bu evde çalışan biri daha gördü efendim. Adını ben vermem; ekmeği burada. İsterse kendi söyler.'],
          'Salon sustu. Babam kapıya baktı.',
          ...kizBlok,
          ['sai', 'Kapı çalınmadıysa o kâğıt bana nereden geldi hanım?', 'ciddi'],
          { etki: { baba_guven: 2 } },
        ],
      },
      {
        m: '"Nimet\'e bir şey daha sorunuz: koridorda ne duyduğunu."', kosul: (S) => !!S.bayrak.nimet_duydu && !!S.bayrak.nimet_tanik,
        bayrak: { yuzlesme_destek: 'koridor', yuzlesme_destek_tuttu: true }, iz: 'Nimet koridorda duyduğunu babana söyledi.',
        adimlar: [
          ['f', 'Nimet\'e bir şey daha sorunuz efendim: bu evde, benim odamın önünde, koridorda ne duyduğunu.'],
          ['mehves', 'Kin dediğiniz şey kulağımdır hanımefendi. Süha Bey küçük hanımın odasında ona ne teklif etti; kapı açıktı, koridordaydım, her kelimesini duydum. Gördüm demiyorum; duydum.', 'kararli'],
          'Babamın yüzü değişti. İlk kez Perihan Hanım\'a değil, kapıya baktı.',
          ['sai', 'Benim evimde. Benim kızıma.', 'ciddi'],
          ['ic', 'Bunu ona ben söyleseydim "iftira" derdi. Duyan başka biriydi.'],
          { etki: { baba_guven: 2 } },
        ],
      },
      {
        m: '"Şişeyi kimin açtığını Süha Bey\'e sorunuz. Söz verdi."', kosul: (S) => !!S.bayrak.suha_tanik,
        bayrak: { yuzlesme_destek: 'suha', yuzlesme_destek_tuttu: true }, iz: 'Yüzleşmede Süha Bey\'i sözüne çağırdın.',
        adimlar: [
          ['f', 'Hizmetçi sözü yetmiyorsa bu evin hekimine sorunuz efendim. Ada\'da o şişeyi kimin açtığını söyleyeceğine Şefik\'in başucunda söz verdi.'],
          ...suhaBlok,
          ['ic', 'Perihan Hanım kardeşine baktı. İlk kez gülümsemiyordu.'],
          { etki: { baba_guven: 2 } },
        ],
      },
      {
        m: '"Ben kefilim efendim. Yalan söylemezler."',
        bayrak: { yuzlesme_destek: 'soz' }, iz: 'Tanığına yalnız kendi sözünle kefil oldun.',
        adimlar: [
          ['f', 'Ben kefilim efendim. Yalan söylemezler.'],
          ['calibe', 'Davacı kendi tanığına kefil oluyor efendi. Ne güzel.', 'gulumser'],
          ['sai', 'Kefil olan da davanın sahibi kızım. Bana senden başka biri, başka bir şey lazım.', 'ciddi'],
          'Sesi sert değildi; yorgundu. Ama bir an, o eski kapalı yüzü gördüm.',
          ['ic', 'Benim sözüm bu odada aylardır para etmiyor. Onu başka bir şeyle tutmalıydım.'],
        ],
      },
    ],
  };

  // Hatice susunca (karar c)
  const reftarKarari = {
    soru: 'Hatice susuyor. Parmağındaki firuze yüzüğü çeviriyor.',
    secim: [
      {
        m: 'Ona verdiğim sözü herkesin önünde tekrarlamak.', etki: { vakar: 1 },
        bayrak: { reftar_guvence: 'verdi' }, iz: 'Hatice\'ye verdiğin sözü babanın önünde tekrarladın.',
        adimlar: [
          ['f', 'Hatice. Çamaşırlıkta sana ne dediysem burada da onu diyorum: sen annemden bana kaldın. Seni kimseye satmam; azat kâğıdın benim elimden çıkacak. Sana bir şey olursa ben de susmam.'],
          ['sai', 'Kızım söz verdiyse o sözü ben tutarım. Söyle.', 'ciddi'],
          'Hatice başını kaldırdı. Perihan Hanım\'a değil, bana baktı.',
          ['reftar', 'Bana ezberlettiler efendim. O gece misafir beyin odasına kahveyi bıraktım, çıktım; kapıyı ben örtmedim bile. Hanımefendi beni gece yarısına kadar yanında tuttu; sonra "yat" dedi. Sabah ne diyeceğimi o söyledi.'],
          { eger: (S) => !!S.bayrak.nimet_tanik, ise: [['ic', 'Nimet\'in görmediği saatleri kendi ağzıyla doldurdu. Korkusu geçmedi; ama yalnız olmadığını bildi.']], degilse: [['ic', 'Gecenin ilk yarısını kendi ağzıyla anlattı. Korkusu geçmedi; ama yalnız olmadığını bildi.']] },
        ],
      },
      {
        m: 'Susmak. Ne söyleyeceğine kendi karar versin.',
        bayrak: { reftar_guvence: 'bekledi' }, iz: 'Hatice\'yi zorlamadın; kendi konuştu.',
        adimlar: [
          'Bir şey demedim. Sessizlik uzadı; saat sesi duyuldu.',
          ['calibe', 'Görüyorsunuz efendi. Kızcağız bir şey bilmiyor.', 'gulumser'],
          ['sai', 'Hatice. Bana bak. İkinci kere soruyorum.', 'ciddi'],
          ['reftar', 'Bana ezberlettiler efendim. Kahveyi bıraktım, çıktım. Gece yarısına kadar hanımefendinin yanındaydım. Gerisini o söyletti.'],
          'Yere bakarak söyledi; sesi zor duyuldu. Babam cümleyi iki kere söyletti.',
          ['ic', 'Söyledi. Ama o sessizlikte tek başınaydı; elimi uzatabilirdim.'],
        ],
      },
      {
        m: '"Sana verilen söz tutulmadı Hatice. Nabi Bey evlendi."', etki: { isyan: 1 },
        bayrak: { reftar_guvence: 'yara' }, iz: 'Hatice\'yi yarasına dokunarak konuşturdun.',
        adimlar: [
          ['f', 'Sana verilen söz tutulmadı Hatice. Nabi Bey evlendi. Kimi koruyorsun?'],
          'Hatice\'nin yüzü buruştu. Ağlayarak söyledi.',
          ['reftar', 'Bana ezberlettiler efendim. Kahveyi bıraktım, çıktım. Gece yarısına kadar hanımefendinin yanındaydım. "Böyle dersen seni Nabi Bey\'e veririm" dedi.'],
          'Söyledi. Bana bir kere bile bakmadı. Babam da bir an bana baktı; gözünde tanımadığım bir şey vardı.',
          ['ic', 'Doğruyu yarasına basarak aldım. Perihan Hanım da böyle alırdı. Bunu unutmayacağım.'],
        ],
      },
    ],
  };

  // Ada gecesi iddiası
  const adaBlok = [
    ['f', 'Ada gecesi için size "odasında gördüm" dendi efendim. O gece kimin nerede olduğunu bir kere de siz sorunuz.'],
    {
      eger: (S) => !!S.bayrak.nimet_tanik,
      ise: [
        { goster: ['mehves', 'kararli'] },
        'Nimet girdi; sokak çarşafıyla, yan konaktan. Aylardır ilk kez bu eşikte.',
        ['mehves', 'Gördüğüm kadarını söylerim efendim. Hatice o gece, gece yarısından sonra geldi; sabaha kadar yanımdaydı. Öncesini görmedim; görmediğime "gördüm" demem. Yirmi yıllık ekmeğinizin hakkı için.', 'kararli'],
        ['calibe', 'İşittiniz mi efendi? Öncesini görmemiş. Üstelik kovulmuş bir kalfa; bu eve kini var. Bunun sözü mü dinlenecek?', 'soguk'],
        ['mehves', 'Kovuldum hanımefendi; doğru. Kovulanın kaybedecek ekmeği kalmaz; yalan söylemesine de sebep kalmaz.', 'kararli'],
      ],
      degilse: [
        ['calibe', 'Efendi, kız kâğıt üstüne adlar dizmiş. Hizmetçi sözüyle, mutfak sözüyle hanım mı yargılanır? Bu evde bana kin tutmayan mı kaldı?', 'soguk'],
      ],
    },
    'Babam bir şey demedi. Bana döndü; bekledi.',
    destekKarari,
    {
      eger: (S) => !!S.bayrak.reftar_tanik,
      ise: [
        { goster: ['reftar'] },
        'Babam Hatice\'ye döndü. Hatice önüne bakıyordu; önlüğünün ucunu buruşturdu.',
        ['calibe', 'Hatice. Kızım. Ne söylediğine dikkat et.', 'gulumser'],
        'Gülümsüyordu. Hatice o gülümsemeye baktı; ağzını açtı, kapadı.',
        ['ic', 'Korkuyor. Çamaşırlıkta "Hanımefendi beni öldürür" demişti. Ben de ona bir söz vermiştim.'],
        reftarKarari,
      ],
      degilse: [{
        eger: (S) => !!S.bayrak.nimet_tanik,
        ise: [
          ['sai', 'Hatice. Gece yarısından önce neredeydin?', 'ciddi'],
          { goster: ['reftar'] },
          'Hatice Perihan Hanım\'a baktı. "Bilmiyorum efendim" dedi.',
          ['ic', '"Bilmiyorum." O gece için ezberlettikleri cevap bu değildi. Babam da duydu.'],
        ],
        degilse: [],
      }],
    },
    {
      eger: (S) => !!S.bayrak.delil_ada,
      ise: [['f', 'Ben de o gece sofadaydım efendim; merdiven başında, lambanın altında. Gördüğüm şu: misafir odasının lambası erken söndü. Gördüğümden fazlasını yazmadım.']],
      degilse: [],
    },
    { eger: (S) => !!S.bayrak.suha_tanik && S.bayrak.yuzlesme_destek !== 'suha', ise: suhaBlok, degilse: [] },
    {
      eger: (S) => !adaGuclu(S),
      ise: [
        'O gece için babamın yüzüne bakıp konuşacak kimseyi yanıma almamıştım.',
        ['calibe', 'Ada\'da ne olduysa oldu, bitti efendi. Kız aylar sonra eski defteri açıyor; açacak başka şeyi yok.', 'gulumser'],
        ['sai', 'O gece için elimde hâlâ bir tek söz var: karımınki.', 'mahzun'],
        ['ic', 'Ada için gördüğünü söyleyecek biri yoktu. Yükü öbür söylenenler taşımak zorunda.'],
      ],
      degilse: [],
    },
  ];

  // İlk hamlenin karşılığı: iyi hamle kısa bir ödül satırı, zayıf hamle babanın kapanan yüzü
  const ilkSonuc = [{
    eger: (S) => (S.bayrak.yuzlesme_ilk === 'yazi' ? yaziGuclu(S) : adaGuclu(S)),
    ise: [
      { bayrak: { yuzlesme_guclu: true } }, { etki: { baba_guven: 2 } },
      {
        eger: (S) => S.bayrak.yuzlesme_ilk === 'yazi',
        ise: [['ic', 'Doğru yerden başladım. Kendi gözüyle gördüğü bir yalandan sonra gerisini dinlemek ona daha kolay gelecek.']],
        degilse: [['ic', 'Doğru yerden başladım. Kâğıt susar; insan sustu mu, konuştu mu, babam yüzünden okur.']],
      },
      ['sai', 'Devam et kızım.', 'mahzun'],
    ],
    degilse: [
      'Babam mektubumu sehpaya bıraktı. Bir an, aylardır sofrada çorbasına bakan adamın yüzünü gördüm.',
      ['sai', 'Başka neyin var?', 'ciddi'],
      ['ic', 'Zayıf yerimden başladım. Öbürü tutmazsa bu oda kapanır.'],
    ],
  }];

  window.BOLUMLER[7] = {
    no: 7,
    ad: 'Kurşun Kalem',
    sezonSonu: true,
    ilkFaz: 'A',
    baslangic: 'konak_sofa',

    fazlar: {
      A: {
        mekanlar: ['konak_sofa', 'josephine_oda', 'mutfak', 'konak_bahce', 'buyuk_salon', 'fazila_oda'],
        baglanti: {
          konak_sofa: ['buyuk_salon', 'fazila_oda', 'josephine_oda', 'mutfak', 'konak_bahce'],
          buyuk_salon: ['konak_sofa'], fazila_oda: ['konak_sofa'], josephine_oda: ['konak_sofa'],
          mutfak: ['konak_sofa', 'konak_bahce'], konak_bahce: ['konak_sofa', 'mutfak'],
        },
      },
      B: { mekanlar: ['carsi'], baglanti: { carsi: [] } },
    },

    gorevler: [
      /* 0 */ { metin: 'Babam adını bağırıyor. Salona in.', ipucu: 'Şefik elimi bırakmıyor.' },
      /* 1 */ { metin: 'Şefik ateşler içinde. Odana çık.', ipucu: 'Bu evde bir tek hekim var.' },
      /* 2 */ { metin: 'Şefik\'i mektebe götürüyorlar. Sofaya in.', ipucu: 'Araba kapıda.' },
      /* 3 */ { metin: 'Salonda misafir var. Seni görmeye gelmişler.', ipucu: 'Perihan Hanım çağırttı.' },
      /* 4 */ { metin: 'Karar gecesi. Odana çık.', ipucu: 'Annemin resmi duvarda.' },
    ],

    kisiler: function (S) {
      const g = S.gorev;
      if (S.faz === 'B') return { carsi: [] };
      return {
        konak_sofa: g === 0 ? ['hizmetci'] : [],
        buyuk_salon: g === 4 ? ['piyano'] : [],
        fazila_oda: g === 2 ? ['murekkep_resim'] : (g === 4 ? ['resim'] : []),
        josephine_oda: g === 3 ? ['josephine'] : [],
        mutfak: g === 3 || g === 4 ? ['asci'] : [],
        konak_bahce: g === 3 || g === 4 ? ['komsu_konak'] : [],
      };
    },

    sohbet: function (S, kim) {
      if (kim === 'resim') return ['Annemin resmi. Bu gece bana o bakacak; ben karar vereceğim.'];
      if (kim === 'hizmetci') return [['hizmetci', 'Ben bir şey demedim küçük hanım. Ne olur.']];
      if (kim === 'murekkep_resim') return ['İki kişi, el ele. Arkalarında açık bir kapı.'];
      if (kim === 'josephine') return [['josephine', 'Şefik Bey\'in defterlerini sakladım Feride Hanım. Cuma günü ister.']];
      if (kim === 'asci') return [['asci', 'Sofraya bir tabak eksik koyuyorum artık. Elim her seferinde şaşırıyor.']];
      if (kim === 'komsu_konak') return ['Komşu konağın pencereleri. Kış; ağaçlar çıplak, arası açık. Perdeler kapalı.'];
      if (kim === 'piyano') return ['Piyanonun kapağı kapalı. Üstünde Şefik\'in talim defteri duruyor.'];
      return null;
    },

    acilis: [
      { kart: 'YEDİNCİ BÖLÜM\nKurşun Kalem', alt: 'Güz sonu.\nNişan bozulalı altı ay.' },
      { kart: 'Bu bölümde aile içi şiddet anlatılır.', alt: 'Sahne ayrıntıyla gösterilmez; istersen atlayabilirsin.' },
      { kiyafet: 'ev', kartsiz: true, kilit: 'Evdesin: gündelik kıyafetin.' },
      { arkaplan: 'kabul_gunu' },
      { goster: ['hanimlar'] },
      'Çarşıda, bir kumaşçının önü. Dört hanım.',
      ['h1', 'Sait Efendi\'nin konağından eski kalfa sandığıyla sokağa konmuş.'],
      { eger: (S) => S.bayrak.gizli_nikah === 'delil', ise: [['h1', 'Kalfayı komşu konak almış diyorlar. Ne demekse.']], degilse: [] },
      ['h2', 'Küçük hanım da iki talibi geri çevirmiş: biri evin hekimi, öbürü babasının kâtibi. Ben kesin biliyorum.'],
      { eger: aleyhte, ise: [['h4', 'İki talip geri çevrilir mi? Gözü hâlâ eskisinde.']], degilse: [['h3', 'Kız haklı. Hekim dediğin kızın iki katı yaşında; üstelik dayı bildiği adam.']] },
      ['h4', 'Kurşun kalemle yazılan silinir. Ağızdan çıkan söz silinmez.'],
      { temizle: true }, { arkaplan: null },
      // 2. bölümde babaya verilen kâğıt defterde "Elimde" diye kalmasın
      {
        islev: (S) => {
          if (!pusulaBabada(S) || !Array.isArray(S.deliller)) return;
          const yeni = ' Nişan sabahı babama verdim; cebine koydu.';
          const son = S.bayrak.pusula === 'alindi' ? ' Elimde.' : ' Koynumda.';
          S.deliller = S.deliller.map((d) => (typeof d === 'string' && /pusula/i.test(d) && d.endsWith(son) ? d.slice(0, -son.length) + yeni : d));
        },
      },
      { goster: ['sefik', 'sevincli'] },
      'Sabah saçımı kendim ördüm; Nimet gideli bir yanı hep eğri oluyor. Şefik hesabından başını kaldırdı.',
      ['sefik', 'Yedi kere sekiz elli altı. Örgün de eğri abla; ama güzel.', 'sevincli'],
      ['ic', 'Altı aydır bu evde beni güldüren tek ses.'],
      { temizle: true },
      'Sonra babam aşağıdan adımı bağırdı; üç kere. Merdivenin ortasındayım. Şefik elimi bırakmıyor.',
    ],

    olaylar: [
      /* ---------- YAN: merdivenin dibindeki hizmetçi kız (görev 0, sofa) ---------- */
      {
        id: 'b7_hizmetci', yan: true, mekan: 'konak_sofa', kisi: 'hizmetci', kosul: (S) => S.gorev === 0,
        sahne: ['hizmetci', 'sefik'],
        adimlar: [
          'Merdivenin dibinde hizmetçi kız, perdenin ardına sinmiş. Beni görünce yenimden tuttu.',
          ['hizmetci', 'Küçük hanım, inmeyin. Efendiyi hiç böyle görmedim.'],
          ['hizmetci', 'Hanımefendi sabah elinde bir kâğıtla salona girdi. O girdi, bağırtı başladı.'],
          {
            soru: 'Babam bir daha bağırdı. Kız yenimi bırakmıyor.',
            secim: [
              {
                m: '"O kâğıdı kim getirdi, gördün mü?"', bayrak: { b7_uyari: true },
                iz: 'Hizmetçi kız söyledi: o sabah kapı hiç çalınmadı.',
                adimlar: [
                  ['f', 'O kâğıdı kim getirdi, gördün mü?'],
                  ['hizmetci', 'Getiren olmadı küçük hanım. Sabahtan beri taşlığı ben siliyorum; kapı hiç çalınmadı.'],
                  'Sonra söylediğinden korktu; elini ağzına götürdü.',
                  ['hizmetci', 'Ben bir şey demedim. Ne olur, ben bir şey demedim.'],
                  ['ic', 'Kapı çalınmadıysa o kâğıt evin içinden çıktı.'],
                  { delil: 'Hizmetçi kız: sahte mektubun çıktığı sabah taşlığı o siliyordu; kapı hiç çalınmadı.' },
                ],
              },
              {
                m: '"Sen saklan. Sana bir şey olmasın."', etki: { vakar: 1 },
                adimlar: [
                  ['f', 'Sen saklan. Seni burada görmesinler.'],
                  'Kız perdenin ardına çekildi. Yenimde parmaklarının yeri kaldı.',
                  ['ic', 'Benim için korkan biri var bu evde. Adını bile bilmiyorum.'],
                ],
              },
            ],
          },
        ],
      },

      /* ---------- Sahte mektup (roman s. 175-178) ---------- */
      {
        id: 'b7_mektup', mekan: 'buyuk_salon', tetik: 'giris', kosul: (S) => S.gorev === 0,
        sahne: [{ id: 'sai', ifade: 'ciddi' }, { id: 'calibe', ifade: 'gulumser' }, 'sefik'],
        adimlar: [
          {
            soru: 'Bundan sonraki sahnede babam bana el kaldırıyor. Ayrıntı gösterilmez. Atlarsan kavga da, öfke sözleri de, kolun sarılması da okunmaz; kısa bir özet ve tek bir karar gelir.',
            secim: [
              { m: 'Sahneyi oku.', bayrak: { dayak_atla: false }, adimlar: [] },
              { m: 'Sahneyi atla; yalnız sonucunu öğren.', bayrak: { dayak_atla: true }, adimlar: [] },
            ],
          },
          {
            eger: (S) => !!S.bayrak.dayak_atla,
            ise: [
              /* ----- Atlama yolu: şiddet, öfke konuşması ve tedavi okunmaz ----- */
              { temizle: true },
              { kart: 'Sahne atlandı.' },
              { mekan: 'fazila_oda' },
              { goster: ['josephine'] },
              'Sahte mektup yüzünden babam bana şiddet uyguladı. Kolum yaralandı; Şefik araya girdi. Şimdi odamdayız; Josephine yanımızda.',
              { etki: { baba_guven: -15 } },
              'Mektup kurşun kalemle yazılmıştı; altında Kenan imzası. Onunla kaçmak için sözleşmişim gibi. Perihan Hanım "Kapıdan verdiler" dedi.',
              { eger: (S) => !!S.bayrak.b7_uyari, ise: [['ic', 'Kapı hiç çalınmadı. Taşlığı silen kız söyledi. Ama onun adını verirsem akşama sokakta olur.']], degilse: [] },
              { eger: (S) => S.bayrak.resim === 'sakladi' && S.v.calibe_suphe >= 4, ise: ['Perihan Hanım, annemin portresinin arkasına sakladığım resmi de bulup babama vermiş.', { bayrak: { resim: 'bulundu' } }, { etki: { baba_guven: -3 } }], degilse: [] },
              ['ic', 'Sebebi benim bir sözüm değil; bir başkasının kurşun kalemi ve babamın buna inanmak isteyen öfkesi. Ne deseydim aynı yere varacaktı.', 'mahzun'],
              {
                soru: 'O kâğıda karşı salonda bir tek şey söyleyebildim. Neydi?',
                secim: [
                  {
                    m: '"Şefik\'in kitabındaki yazıyla karşılaştırın. Bu el onun eli değil."', etki: { isyan: 1 }, bayrak: { sahte_mektup_cevap: 'karsilastir', delil_yazi: true },
                    iz: 'Yazıyı karşılaştırmalarını istedin. Baban bakmadı; Madam kitabı sakladı.',
                    adimlar: [
                      'Kenan Bey Ada\'da, babamın sofrasında Şefik\'e bir kitap vermiş, ilk sayfasına kendi eliyle yazmıştı. İki yazıyı karşılaştırmalarını istedim. Babam bakmadı. Madam kitabı aldı, sakladı.',
                      { delil: 'Sahte mektuptaki yazı, Kenan Bey\'in Şefik\'in kitabına kendi eliyle yazdığı satırlara benzemiyor. Kitap Madam\'da.' },
                    ],
                  },
                  {
                    m: '"Alçak kadın!"', etki: { isyan: 2, calibe_suphe: 2, itibar: -3 }, bayrak: { sahte_mektup_cevap: 'alcak' },
                    iz: 'Perihan Hanım\'a herkesin önünde "alçak" dedin.',
                    adimlar: [
                      'Perihan Hanım\'a hizmetçilerin önünde "alçak kadın" dedim. Gülümsemesi bir an düştü. Bu söz akşama mutfakta, yarına çarşıda.',
                    ],
                  },
                  {
                    m: 'Sustum. Ne desem yalan sayılacaktı.', etki: { vakar: 2 }, bayrak: { sahte_mektup_cevap: 'sustu' },
                    iz: 'Sustun.',
                    adimlar: [
                      'Yalnız "Bilmiyorum efendim" dedim. Perihan Hanım susmamı kabul saydı. Şefik "Ablam yalan söylemez" dedi.',
                      ['ic', 'Susmak boyun eğmek değil; ama onun dilinde öyle okunuyor.'],
                    ],
                  },
                ],
              },
              'Kolum sargıda; birkaç hafta öyle kalacak. Şefik yer yatağında, yüzü duvara dönük; uyumuyor.',
              ['josephine', 'Ağlayınız Feride Hanım. Burada kimse görmez.'],
              ['f', 'Şefik görür.'],
            ],
            degilse: [
          'Merdivenin son basamağı. Babamın sesi selamlıktan değil, büyük salondan geliyor; kapı ardına kadar açık.',
          'Uşak taşlığa bakıyor. Aşçı kadın mutfak kapısını örtmüş. Hatice ortada yok. Hizmetçiler köşe bucak saklanmış.',
          ['sefik', 'Abla, ben de geliyorum.', 'aglamakli'],
          ['f', 'Arkamda dur. Ne olursa olsun arkamda dur.'],
          ['ic', 'Babam bana bugüne kadar sesini yükseltmedi. Kızdığı zaman susardı. Bağıran bir babayı tanımıyorum.'],
          { eger: (S) => !!S.bayrak.baba_sarsildi, ise: [['ic', 'Ona söylediğim şey içinde bir yeri sarsmıştı; biliyorum. Sarsılan adam tutunacak bir şey arar. Karısı eline bir kâğıt vermiş.']], degilse: [] },
          'Babamın gözü dönmüş, yüzü mosmor. Perihan Hanım arkasında; elleri önünde kavuşmuş, yas evine gelmiş bir komşu gibi.',
          ['calibe', 'Efendi, kendinizi üzmeyin. Çocuktur; belki bir diyeceği vardır.', 'gulumser'],
          ['ic', 'Beni savunur gibi konuşuyor. Her sözü babamı bir basamak daha yukarı çıkarıyor.'],
          { goster: ['sahte_mektup'] },
          'Kolumdan tutup sarstı. Elime bir kâğıt tutuşturdu: kurşun kalemle yazılmış, altında Kenan imzası.',
          '{i}"Kararınız üzere her şey hazırdır. Yeri ve saati bildiriniz; bekleyeceğiz."{/i}',
          'İki kere okudum. Harfler düzgün, satırlar cetvelle çekilmiş gibi. Altındaki imzayı tanımak istedim; tanıyamadım.',
          ['sai', 'Demek kaçacaktın! İşte kapı açık. Haydi çık!', 'ciddi'],
          'Eliyle sokak kapısını gösterdi. Eli titriyordu.',
          ['f', 'Mektup da sahte efendim, içinde yazan da. O ev saygıdeğer bir evdir; baba evinden kaçmış bir kızı kendine layık görmez. Bunu size kim verdi?'],
          ['calibe', 'Kapıdan verdiler kızım. Tesadüfen aşağıdaydım. Şüphelendim; doğruca babana getirdim.', 'gulumser'],
          { eger: (S) => !!S.bayrak.b7_uyari, ise: [['ic', 'Kapı hiç çalınmadı. Taşlığı silen kız söyledi. Ama onun adını burada verirsem akşama sokakta olur.']], degilse: [] },
          { eger: (S) => S.bayrak.resim === 'sakladi' && S.v.calibe_suphe >= 4, ise: [['calibe', 'Bunu da annesinin portresinin arkasında buldum efendi.', 'sinsi'], 'Onun resmi. Annem de saklayamadı.', { bayrak: { resim: 'bulundu' } }, { etki: { baba_guven: -3 } }], degilse: [] },
          { eger: (S) => S.bayrak.gizli_nikah === 'ertelendi', ise: [['ic', '"Evet" demiştim Münevver Hanım\'a. Ama bu kâğıdı ben yazdırmadım; o da yazmadı. Doğruya benzeyen bir yalan.', 'mahzun']], degilse: [['ic', 'Bu yazıyı Perihan Hanım yazamaz; o bu kadar düzgün yazamaz. Başka bir el.']] },
          ['calibe', 'Ben olsam darılmazdım efendi. Genç kız kalbi bu; nişan bozuldu diye gönül bozulmaz ki. Yalnız, baba evinden gece vakti çıkmak...', 'gulumser'],
          'Cümleyi bitirmedi. Bitirmesine gerek yoktu; babam bitirdi.',
          ['sai', 'Benim evimden! Benim adımla!', 'ciddi'],
          {
            soru: 'Perihan Hanım tatlı tatlı gülümsüyor. Babamın elinde kurşun kalemle yazılmış bir yalan.',
            secim: [
              {
                m: '"Şefik\'in kitabındaki yazıyla karşılaştırın. Bu el onun eli değil."', etki: { isyan: 1 }, bayrak: { sahte_mektup_cevap: 'karsilastir', delil_yazi: true },
                iz: 'Yazıyı karşılaştırmalarını istedin. Baban bakmadı; Madam kitabı sakladı.',
                adimlar: [
                  ['f', 'Kenan Bey Ada\'da Şefik\'e bir kitap verdi; ilk sayfasına kendi eliyle yazdı. Getirsinler; harfleri, imzayı karşılaştırınız. Bu el onun eli değil.'],
                  ['calibe', 'Kitap mı? A kızım, o evden bu eve neler girip çıkmış; efendi hiç sormasın daha iyi.', 'gulumser'],
                  ['f', 'Gizli girmedi efendim. Ada\'da, sizin sofranızda, sizin gözünüzün önünde Şefik\'e verildi.'],
                  ['sefik', 'Bende baba! Getireyim, bakın!', 'aglamakli'],
                  ['sai', 'Bana oyun öğretme!', 'ciddi'],
                  'Bakmadı. Bakarsa elindeki kâğıdın ne olduğunu görecekti; görmek istemedi.',
                  'Ama kapının yanında duran Madam yavaşça dışarı süzüldü. Döndüğünde kitap koltuğunun altındaydı.',
                  { delil: 'Sahte mektuptaki yazı, Kenan Bey\'in Şefik\'in kitabına kendi eliyle yazdığı satırlara benzemiyor. Kitap Madam\'da.' },
                ],
              },
              {
                m: '"Alçak kadın!"', etki: { isyan: 2, calibe_suphe: 2, itibar: -3 }, bayrak: { sahte_mektup_cevap: 'alcak' },
                iz: 'Perihan Hanım\'a herkesin önünde "alçak" dedin.',
                adimlar: [
                  ['f', 'Alçak kadın! Herkesin namusu şakaya gelir mi sanıyorsunuz?', 'ofkeli'],
                  'Perihan Hanım\'ın gülümsemesi hizmetçilerin önünde bir an düştü.',
                  ['calibe', 'Görüyor musunuz efendi? Ben onu kızım bildim. Bana böyle söylüyor.', 'saskin'],
                  'Sesi titredi. Gözü titremedi.',
                  ['sai', 'Annene dil uzatıyorsun!', 'ciddi'],
                  ['f', 'Annem toprağın altında efendim. Ona kimse dil uzatamaz.', 'ofkeli'],
                  ['ic', 'Söyledim. Kapı aralıklarından kaç göz gördü, kaç kulak duydu, bilmiyorum. Bu söz akşama mutfakta, yarına çarşıda.'],
                ],
              },
              {
                m: 'Susmak. Ne desem yalan sayılacak.', etki: { vakar: 2 }, bayrak: { sahte_mektup_cevap: 'sustu' },
                iz: 'Sustun.',
                adimlar: [
                  ['f', 'Bilmiyorum efendim.'],
                  'Başka bir şey demedim. Gözümü kâğıttan kaldırıp babamın yüzüne baktım; o gözünü kaçırdı.',
                  ['calibe', 'Bakın efendi, inkâr bile etmiyor. Sükût ikrardan gelir derler.', 'gulumser'],
                  ['sefik', 'Ablam yalan söylemez! Hiç söylemez!', 'aglamakli'],
                  ['ic', 'Sustum, çünkü bu odada benim sözüm para etmiyor. Susmak boyun eğmek değil; ama onun dilinde öyle okunuyor.'],
                ],
              },
            ],
          },
          { gizle: 'sahte_mektup' },
          { temizle: true },
          'Bir adım. Örgüm bir kola dolandı.',
          ['sefik', 'Ablamı bırakın!', 'aglamakli'],
          'Şefik araya atıldı. Onu arkama aldım; iki elimle tuttum. Kendimi tutacak elim kalmadı.',
          'Koluma bir şey indi. Hayatımda ilk kez bağırdım.',
          'Kapı çarptı. Perihan Hanım baştan sona seyretti.',
          { etki: { baba_guven: -15 } },
          ['ic', 'Babam bana el kaldırdı. Sebebi benim bir sözüm değil; bir başkasının kurşun kalemi ve onun buna inanmak isteyen öfkesi.', 'mahzun'],
          ['ic', 'Ne deseydim aynı yere varacaktı. O el, kâğıdı tuttuğu anda kalkmıştı.'],
          { mekan: 'fazila_oda' },
          { goster: ['josephine'] },
          'O kolumu kaldıramıyorum. Elbisemi sırtımdan Josephine çıkardı; ben yalnız dişimi sıktım.',
          ['josephine', 'Ağlayınız Feride Hanım. Burada kimse görmez.'],
          ['f', 'Şefik görür.'],
          'Şefik yer yatağında, yüzü duvara dönük. Uyumuyor; omuzlarından belli.',
          'Sabah Josephine babama gitti; cevap: "Bana onun adını anmayınız." Süha Bey kendisi gelmedi; "çıkıkçı işi" demiş, bir kadın yolladı.',
          { goster: ['cikikci'] },
          ['cikikci', 'Dişini sık kızım. Bir nefes sürer.'],
          'Sürdü. Bir nefesten uzun.',
          ['cikikci', 'Fena incinmiş. Birkaç kere daha sarmak ister.'],
          ['cikikci', 'Kim etti bunu sana?'],
          ['f', 'Sormayın teyze.'],
          ['cikikci', 'Sormam. Benim işim kemikle; gerisi kulla Allah arasında.'],
          { gizle: 'cikikci' },
            ],
          },
          'Gece Josephine pencereyi araladı. Yan konağın ışıkları yanıyordu.',
          ['josephine', 'Nimet burada olsaydı size bir ninni söylerdi. Ben ninni bilmem; ama oturmayı bilirim.'],
          'Oturdu. Sabaha kadar kalkmadı.',
          ['ic', 'Annem toprakta, dadım duvarın öbür yanında. Başucumda bir Fransız kadın. Yalnız değilim; bunu bu gece öğrendim.'],
          {
            eger: (S) => S.bayrak.sahte_mektup_cevap === 'karsilastir',
            ise: [['josephine', 'Kitap yastığınızın altında Feride Hanım. Bir gün biri bakmak isteyecek.']],
            degilse: [{
              eger: (S) => S.bayrak.sahte_mektup_cevap === 'alcak',
              ise: ['Akşam mutfaktan fısıltı geldi: "Alçak kadın demiş." Aşçı kadın tabağıma fazladan bir kaşık pilav koymuş.'],
              degilse: ['Perihan Hanım akşam sofrasında "Edebini takındı" demiş. Josephine bunu bana söylerken gözüme bakamadı.'],
            }],
          },
          { temizle: true },
          { kart: 'O gece.' },
          'Şefik korkudan ve öfkeden ateşlendi. Sayıklıyor. Babam odaya uğramadı; hizmetçiler yemekten artanı kapıya bırakıyor.',
          { gorev: 1 },
        ],
      },

      /* ---------- Şefik hasta (roman s. 178-183): düşmandan yardım mı? ---------- */
      {
        id: 'b7_hasta', mekan: 'fazila_oda', tetik: 'giris', kosul: (S) => S.gorev === 1,
        sahne: ['sefik', 'josephine'],
        adimlar: [
          { eger: (S) => !!S.bayrak.dayak_atla, ise: ['Şefik\'in alnı elimi yakıyor. Dudakları kurumuş. Sayıklıyor.'], degilse: ['Şefik\'in alnı elimi yakıyor. Dudakları kurumuş. Sayıklıyor: "Bırakın... ablamı bırakın..."'] },
          'Sağlam elimle bezi ıslatıyorum; sıkamıyorum. Josephine sıkıyor, ben alnına koyuyorum. O gece evine gitmedi.',
          ['sefik', 'Abla... vapur kalktı mı? Adaya gidecektik...', 'aglamakli'],
          ['f', 'Buradayım. Bir yere gitmiyoruz.'],
          'Gözünü açtı. Sargılı koluma baktı; ağlamaya başladı.',
          ['sefik', 'Benim yüzümden... ben araya girdim diye...', 'aglamakli'],
          ['f', 'Senin yüzünden değil. Hiçbir şey senin yüzünden değil. Uyu.'],
          'Başka bir hekim istedim. Babamın cevabı kapıdan geldi: "Evde doktorumuz var."',
          ['josephine', 'Efendinin ayak sesini duydum. Sofaya kadar geldi, durdu, döndü.'],
          ['ic', 'Geldi, durdu, döndü. Arkasından karısı mı bakıyordu, kendi utancı mı çevirdi, bilmiyorum.'],
          ['ic', 'Şefik yanıyor. Bu evde bir tek hekim var ve o benim düşmanım. Ona borçlanırsam, borcumu neyle isteyeceğini biliyorum.'],
          { eger: (S) => !!S.bayrak.suha_itiraf, ise: [['ic', 'Bana gönlünü açtığı günden beri ona bir kere bile ben gitmedim. Giden hep o oldu.']], degilse: [] },
          ['ic', 'Dışarıdan hekim de çağırabilirim. Ama babam "Evde doktorumuz var" dedi; sokak kapısından gelen hekimi içeri almayabilir. Arka kapıdan giren de ondan gizli girer.'],
          {
            soru: 'Şefik ateşler içinde sayıklıyor. Sabaha kadar bekleyemem.',
            secim: [
              {
                m: 'Süha Bey\'in kapısına gitmek: "Doktor! Şefik hasta, geliniz."', etki: { sefik: 2, suha: 2 }, bayrak: { sefik_hastalik: 'suha' },
                iz: 'Düşmanından yardım istedin. Şefik iyileşti; borcun kaldı.',
                adimlar: [
                  'Josephine iki kere gitti, iki kere yalnız döndü.',
                  ['josephine', '"Hemşiresi kendi istesin" diyor. Kapısını açık bırakmış.'],
                  ['ic', 'Beni ayağına getirmek istiyor. Şefik\'in ateşi onun kozu olmuş.'],
                  'Şalımı sağlam omzuma attım. Koridorun öbür ucuna kadar yürüdüm; kapısının önünde durdum. Eşiği geçmedim.',
                  { goster: ['suha'] },
                  ['f', 'Doktor! Şefik hasta, geliniz.'],
                  'Masasında oturuyordu. Giyinikti; çantası hazırdı. Bekliyordu.',
                  ['suha', 'Ben çağrıldığıma göre hastalık ağır olmalı.'],
                  'Geldi. Şefik\'in bileğini tuttu, göğsünü dinledi. Uzun sürdü; gereğinden uzun.',
                  ['suha', 'Ateşi beni korkutuyor. Bu gece çok şey belli olacak.'],
                  ['ic', 'Korkmadığını gördüm; eli rahattı. Korkuyu bana veriyor. Bu da bir hesap: ne kadar korkarsam o kadar borçlanırım.'],
                  ['f', 'Kardeşimi kurtarın. Bana ettiğinizi affederim. Ötekilerin hakkına ben karar veremem.'],
                  'Başını kaldırdı. Otuzunu geçmiş, yıllardır bu evin ekmeğini yiyen adam; karşısında kolu sargılı, on sekiz yaşında bir kız. Gözleri doldu. Ben gözlerine bakmadım; ellerine baktım.',
                  ['suha', 'Başınıza yemin ederim; elimden geleni yapacağım.'],
                  'Kâğıt kalem istedi. Reçeteleri yazdı; ilaçları uşağa aldırdı. Sabaha kadar başucunda oturdu. Ben de oturdum; aramızda Şefik\'in yatağı.',
                  {
                    eger: (S) => S.bayrak.suha_itiraf === 'sartli',
                    ise: [['suha', 'O gün benden bir şey istemiştiniz: Ada\'yı. Unutmadım. Çocuk ayağa kalkınca efendiye o şişeyi kimin açtığını söyleyeceğim.'], { bayrak: { suha_tanik: true } }, ['ic', 'Söyleyecek mi? Bilmiyorum. Ama söz verdi; ilk kez benim istediğim bir şey için.']],
                    degilse: [['ic', 'Reçeteleri yazdı. Bu kez üstlerinde ilaç adları vardı.']],
                  },
                  'Ateş sabaha karşı düştü.',
                  ['ic', 'Borcum var artık. Alacaklı, her kapı açılışında bunu yüzünde taşıyacak.'],
                  { gizle: 'suha' },
                ],
              },
              {
                m: 'Küpemi bozdurup Josephine\'le gizlice başka hekim getirtmek.', etki: { sefik: 2, josephine: 1, baba_guven: -4 }, bayrak: { sefik_hastalik: 'elmas' },
                iz: 'Küpeni sattın, gizlice hekim getirttin. Baban sonradan duydu.',
                adimlar: [
                  'Çekmecemden küçük kadife kutuyu çıkardım. İçinde annemden kalan tek taş küpeler; bir çift.',
                  { eger: (S) => S.bayrak.kiyafet_nisan === 'gosterisli', ise: ['Nişan ziyaretinde kulağımdaydılar. O gün ne çok şeyim varmış.'], degilse: [] },
                  ['josephine', 'İkisini de değil Feride Hanım. Biri yeter. Öbürü size kalsın.'],
                  'Tek taş küpemi Josephine\'in avucuna koydum. Avucunu kapadı; bir şey demedi.',
                  '"Resim takımı" diye Beyoğlu\'na çıktı. Ben pencerede bekledim; Şefik\'in nefesini saydım.',
                  'Öğleden sonra küpeyi bozdurmuş, tanıdığı bir Frenk hekimini arka kapıdan getirmişti: kısa boylu, çantası eski, elleri sıcak bir adam. Kapıyı aşçı kadın açtı; başını öte yana çevirdi.',
                  'Hekim Şefik\'i dinledi, Josephine\'e üç söz söyledi, reçete yazdı. Giderken koluma baktı; bir şey sordu. Josephine cevap vermedi.',
                  'Hekim gitti. Ateş sabaha karşı düştü.',
                  ['sai', '{i}(Kapının ardından){/i} Evime gizli hekim sokmuşlar!', 'ciddi'],
                  ['calibe', '{i}(Kapının ardından){/i} Ben demiştim efendi. Bu evde sizden habersiz kapılar açılıyor.', 'gulumser'],
                  ['ic', 'Kimseye borçlanmadım. Annemden kalan bir çift küpenin teki gitti; babamın bir damla güveni de.'],
                ],
              },
              {
                m: 'Josephine\'le Münevver Hanım\'a haber yollamak. (Hekimini babam kapıdan çevirebilir.)', etki: { sefik: 1, munevver: 1, josephine: 1 }, bayrak: { sefik_hastalik: 'munevver' },
                iz: 'Münevver Hanım hekimini yolladı; baban kapıdan çevirtti. İlacı ulaştı.',
                adimlar: [
                  'Sağ elimle yazamıyorum. Ben söyledim, Josephine yazdı: iki satır.',
                  '{i}"Şefik çok hasta. Evdeki hekime bırakamıyorum; yardım ediniz."{/i}',
                  'Josephine şalını aldı, iki satırımı götürdü. Duvarın öbür yanı yirmi adım; dönmesi bir saat sürdü.',
                  'Münevver Hanım kendi hekimini yolladı. Pencereden gördüm: adam sokak kapısında durdu, bekledi. Uşak iki kere içeri girdi çıktı.',
                  ['usak', '{i}(Aşağıdan){/i} Efendi "Evde doktorumuz var" buyurdu.'],
                  'Babam çevirtti. Hekim köşeyi dönerken bir kere dönüp pencereme baktı.',
                  'Münevver Hanım o zaman ilaç yolladı; yanında bir kese ve kendi eliyle tek satır: {i}"Kapıdan giremeyen pencereden girer kızım."{/i}',
                  'İlacı Josephine\'le verdik; ateşi tuttu, büyütmedi. Babam Süha Bey\'i ancak ertesi gün çağırttı. Ateş üç gün sürdü.',
                  { eger: (S) => !!S.bayrak.sir_munevver, ise: [['ic', 'Mektubuma bir satır eklemiştim: "Bildiğiniz şey yüzünden kardeşimi o adamın eline bırakamıyorum." Anladı.']], degilse: [['ic', 'Duvarın öbür yanında hâlâ biri var. Kapıdan giremese de.']] },
                  ['ic', 'Yardım kapıya kadar geldi; onu kapıda durduran babamdı. Şefik\'in fazladan yandığı iki günün hesabı "Evde doktorumuz var" diyen adamın. Benim değil; duvarın öbür yanındaki kadının hiç değil.'],
                ],
              },
            ],
          },
          'Bir gece Şefik yer yatağından keçeye yuvarlandı. Sakat kolumla onu kaldırdım; sonra ben yığıldım. Bir hafta sonra minderde oturabildi.',
          'İlk istediği şey kalemiydi. İkincisi bir soru.',
          ['sefik', 'Abla, ben hastayken babam geldi mi?'],
          {
            soru: 'Şefik gözümün içine bakıyor.',
            secim: [
              {
                m: '"Sofaya kadar geldi. Kapıdan içeri giremedi."', etki: { vakar: 1 }, bayrak: { baba_sorusu: 'sofa' },
                adimlar: [
                  ['f', 'Sofaya kadar geldi. Kapıdan içeri giremedi.'],
                  ['sefik', 'Neden giremedi?'],
                  ['f', 'Bilmiyorum Şefik. Bazen büyükler de korkar.'],
                  'Bunu düşündü. Kalemini çevirdi, çevirdi.',
                ],
              },
              {
                m: '"Gelmedi."', etki: { isyan: 1, sefik: 1 }, bayrak: { baba_sorusu: 'gelmedi' },
                adimlar: [
                  ['f', 'Gelmedi.'],
                  'Şefik başını salladı. Ağlamadı. Bir çocuğun ağlamaması ağlamasından ağırmış.',
                ],
              },
            ],
          },
          { temizle: true },
          { kart: 'Kış.\nNişan bozulalı yedi buçuk ay.' },
          { goster: ['sefik', 'aglamakli'] },
          'Babam bir sabah Şefik\'i alıp götürdü. Bana bir şey denmedi. Akşam Şefik haberi getirdi: askerî mektebe yazılmış. Bu hafta gidecek.',
          ['sefik', 'Yatılıymış abla. Cumadan cumaya izin varmış. O da her cuma değilmiş.', 'aglamakli'],
          ['ic', '"Beni kardeşimle beraber alacak adam" demiştim. Şartımı elimden aldılar: kardeşimi aldılar.', 'mahzun'],
          { kart: 'Son hafta.' },
          { goster: ['josephine'] },
          'Sandığını ben hazırladım. Tek elle katladım, Josephine bastırdı: altı mendil, üç kat çamaşır, resimli kitabı. Kalem kutusunu en üste kendi koydu.',
          'Çarşamba akşamı son dersimizi yaptık. Hesap defterini açtı; ben soracaktım, o sordu.',
          ['sefik', 'Abla, ben gidince saçının eğri olduğunu sana kim söyleyecek?'],
          ['f', 'Aynaya sorarım.', 'gulumseyen'],
          ['sefik', 'Ayna yalan söyler. Ben mektupta yazarım: "Bugün de eğridir." Tutar.', 'sevincli'],
          'Güldük. Bu odadaki son gülüşümüzdü; ikimiz de bildik, ikimiz de söylemedik.',
          'Perşembe günü üniforma geldi. Kolları parmak uçlarını örtüyor, yakası kulaklarına değiyor.',
          ['sefik', 'Büyük geldi abla.', 'aglamakli'],
          ['f', 'Büyük dikmişler ki içinde büyüyesin. Gel, kollarını içten tutturayım.', 'gulumseyen'],
          'İğneyi sağlam elimle tuttum, kumaşı dizimde gerdim. Dikişim düzgün olmadı; ama tuttu. Şefik kollarını sallayıp baktı; güldü.',
          ['josephine', 'Mektepte Fransızca hocası sorarsa "Madam Josephine\'in talebesiyim" deyiniz küçük bey. Utanmazsınız.'],
          'Son gece masamda bir şey çizdi. Kolunu kâğıdın üstüne siper etti; bakmama izin vermedi.',
          ['sefik', 'Bitince göstereceğim. Yarın.'],
          'O gece kimseye sormadan yer yatağını benimkinin dibine serdi. Elimi tutarak uyudu. Ben uyumadım; nefesini saydım.',
          { gorev: 2 },
        ],
      },

      /* ---------- YAN: Şefik'in son resmi (görev 2, Feride'nin odası) ---------- */
      {
        id: 'b7_resim', yan: true, mekan: 'fazila_oda', kisi: 'murekkep_resim', kosul: (S) => S.gorev === 2,
        sahne: ['murekkep_resim'],
        adimlar: [
          'Masamın üstünde, açık duruyor: Şefik\'in dün gece çizdiği resim. Köşesine küçük harflerle "Ablama" yazmış.',
          'Mürekkeple iki kişi: biri uzun, tek örgülü; biri kısa, kocaman bir ceketin içinde. El ele. Arkalarında bir kapı; kapı açık.',
          'Uzun olanın boynunda küçük siyah bir oval. İçine bir harf sığdırmaya çalışmış; mürekkep dağılmış.',
          ['ic', 'B. Annemin harfi. O da görüyormuş demek; her sabah.'],
          {
            soru: 'Resim elimde. Aşağıda sandığı taşıyorlar.',
            secim: [
              {
                m: 'Resmi kendime saklamak.', etki: { sefik: 1 }, bayrak: { sefik_resim_b7: 'sakla' },
                iz: 'Şefik\'in son resmini sakladın.',
                adimlar: [
                  'İkiye katladım; yakamın içine, madalyonun yanına koydum.',
                  ['ic', 'Bana çizdi. Bende kalacak.'],
                ],
              },
              {
                m: 'Arkasına bir satır yazıp sandığına koymak.', etki: { sefik: 2 }, bayrak: { sefik_resim_b7: 'sandik' },
                iz: 'Resmin arkasına bir satır yazdın; Şefik\'in sandığına koydun.',
                adimlar: [
                  'Kalemi iyileşen elime aldım. Harfler titrek çıktı: {i}"Kapı açık. Ablan."{/i}',
                  'Sandığı indirmeden yetiştim; kalem kutusunun altına koydum.',
                  ['ic', 'Mektepte ilk gece sandığını açınca bulacak. Kırk çocuğun içinde bir kâğıdı olacak.'],
                ],
              },
            ],
          },
        ],
      },

      /* ---------- Şefik'e veda (roman s. 183-184) ---------- */
      {
        id: 'b7_veda', mekan: 'konak_sofa', tetik: 'giris', kosul: (S) => S.gorev === 2,
        sahne: [{ id: 'sefik', ifade: 'aglamakli' }, { id: 'calibe', ifade: 'soguk' }, 'josephine'],
        adimlar: [
          'Sofa. Sandık kapının yanında. Uşak arabanın basamağını indirdi.',
          'Şefik üniformasının içinde küçücük. Araba kapıda. O güne kadar bir gece ayrı kalmadık.',
          'Kollarını ben tutturmuştum; biri şimdiden sökülmüş. Babam taşlıkta, sırtı bize dönük, eldivenini giyiyor.',
          ['calibe', 'Ne güzel oldu maşallah; küçük bir zabit. Abla eteğinde büyüyen çocuk adam olmaz ki; değil mi efendi?', 'gulumser'],
          'Babam cevap vermedi. Eldiveninin düğmesiyle uğraşıyordu.',
          { eger: (S) => S.bayrak.mekan_b6 === 'kenar', ise: [['sefik', 'Halim Efendi hocam bana mektup yazacakmış abla. Sana da selam yazarmış.', 'aglamakli']], degilse: [] },
          {
            eger: (S) => !S.bayrak.sefik_resim_b7,
            ise: [['sefik', 'Resmi masana bıraktım abla. Ben gidince bak.', 'aglamakli']],
            degilse: [{ eger: (S) => S.bayrak.sefik_resim_b7 === 'sakla', ise: ['Resmi yakamın içinde. Kâğıdın köşesi nefes aldıkça batıyor.'], degilse: [] }],
          },
          ['sefik', 'Abla, yatakhanede kırk çocuk yatıyormuş. Ben gece uyanınca seni nasıl bulacağım?', 'aglamakli'],
          ['ic', 'Sesim çıkmazsa ağlarım. Ağlarsam o da ağlar; onu arabaya ağlayarak bindirirler. Ona ne bırakacağım: bir sayı mı, bir öfke mi, bir söz mü?'],
          {
            soru: 'Şefik bana bakıyor. Araba bekliyor.',
            secim: [
              { m: '"Ağlama. Cumaları sayacağız; ben de ağlamayacağım."', etki: { sefik: 2, vakar: 1 }, bayrak: { sefik_veda: 'dik' }, iz: 'Şefik\'e cumaları saymayı öğrettin.',
                adimlar: [
                  ['f', 'Ağlama. Cumaları sayacağız. Ben de ağlamayacağım.'],
                  ['sefik', 'Kaç cuma abla?', 'aglamakli'],
                  ['f', 'Saymaya başlayınca azalır.', 'gulumseyen'],
                  'Parmaklarını açtı; saymaya başladı. Üçte dudağı titredi; dörde geçti.',
                ] },
              { m: '"Bizi kimin ayırdığını unutma."', etki: { sefik: 1, isyan: 1 }, bayrak: { sefik_veda: 'aci' }, iz: 'Şefik\'e kimin ayırdığını söyledin.',
                adimlar: [
                  ['f', 'Bizi kimin ayırdığını unutma Şefik.', 'ofkeli'],
                  'Şefik Perihan Hanım\'a baktı. Küçük yumruğu sıkıldı.',
                  ['calibe', 'Çocuğun kulağına ne fısıldıyorsun kızım? Yolcuya hayır dua edilir.', 'soguk'],
                  ['ic', 'Ona bir öfke verdim. Öfke insanı ayakta tutar; ama küçük omuza ağır gelir. Bunu bilerek verdim.'],
                ] },
              { m: '"Nerede olursam olayım, seni almaya geleceğim."', etki: { sefik: 2 }, bayrak: { sefik_veda: 'soz', sefik_soz: true }, iz: 'Şefik\'e söz verdin.',
                adimlar: [
                  ['f', 'Nerede olursam olayım, seni almaya geleceğim. Söz.'],
                  ['sefik', 'Söz mü abla? Söz dedin.', 'aglamakli'],
                  ['f', 'Söz dedim.'],
                  ['ic', 'Nasıl tutacağımı bilmiyorum. Ama o bu sözle uyuyacak; ben bu sözle uyanacağım.'],
                ] },
            ],
          },
          { eger: (S) => S.bayrak.mendil_harf === 'S', ise: ['İşlediğim mendili cebine koydum: köşesinde onun harfi. Eliyle yokladı; cebinin üstünden tuttu.', { etki: { sefik: 1 } }], degilse: [] },
          'Boynuma sarıldı. Üniformanın sert yakası yanağıma değdi.',
          'Boynuma doladığı kolları Perihan Hanım\'ın elleri ayırdı. Kolundan çekilerek arabaya götürüldü.',
          'Babam arabaya bindi. Bir an başını çevirdi; bana değil, sandığa baktı.',
          'Araba köşeyi dönene kadar camda küçük bir el gördüm. Sonra köşe.',
          'Sofada, sandığın durduğu yerde, halının üstünde dört köşe bir iz kalmıştı.',
          ['josephine', 'Yukarı gelin Feride Hanım. Burada durmayın.'],
          { temizle: true },
          { kart: 'Şefik\'siz ilk hafta.' },
          'Sabah masamda hesap yapan yok. Saçımı örüyorum; eğri olduğunu söyleyen yok.',
          { goster: ['calibe', 'gulumser'] },
          'Sofrada babam çorbasına bakıyor. "Afiyet olsun efendim" diyorum; kaşığı duruyor, sonra yine yürüyor. Başını kaldırmıyor.',
          'Sofraya bir tabak eksik konuyor. Karşımdaki iskemleyi kaldırmışlar.',
          ['f', 'Şefik\'ten bir haber var mı efendim?'],
          'Babam ekmeğini böldü. Cevabı Perihan Hanım verdi.',
          ['calibe', 'Mektepte çocuklar ilk hafta ağlarmış, sonra unuturmuş kızım. Sen de unutursun.', 'gulumser'],
          ['calibe', 'Feridecim bu aralar pek solgun. Evde kalan kızın rengi böyle uçar; koca evinde yerine gelir.', 'gulumser'],
          ['calibe', 'Nazlı\'yı de düşünmek lazım efendi. Ablası evde otururken küçüğe kısmet çıkmaz.', 'gulumser'],
          { gizle: 'calibe' },
          { goster: ['suha'] },
          'Merdiven başında Süha Bey. Her çıkışımda orada: bir kitap soruyor, Şefik\'ten haber soruyor, kolumu soruyor.',
          ['suha', 'Kolunuzu bir de ben göreyim Feride Hanım. Bu evin hekimi benim.'],
          ['f', 'Çıkıkçı kadın gördü efendim. Yeter.'],
          { eger: (S) => S.bayrak.sefik_hastalik === 'suha', ise: [['suha', 'Kardeşinizin başında sabahladığım geceyi unutmadınız ya.'], ['ic', 'Alacaklı. Demiştim.']], degilse: [] },
          'Yol vermek için çekilmedi. Ben duvar dibinden geçtim.',
          { gizle: 'suha' },
          'İlk cuma Şefik gelmedi. "İlk ay izin yok" demişler.',
          ['ic', 'O evde duramaz oldum. Babam yüzüme bakmıyor; Perihan Hanım hakaret ediyor; Süha Bey peşimi bırakmıyor. Ev aynı ev; ama odaları her gün biraz daha daralıyor.', 'mahzun'],
          'Bir sabah Hatice kapıma geldi: Perihan Hanım beni salona çağırtıyormuş. Bugün görücü bekleniyormuş.',
          { gorev: 3 },
        ],
      },

      /* ---------- YAN: Madam ve dikilen elbise (görev 3, Madam'ın odası) ---------- */
      {
        id: 'b7_madam', yan: true, mekan: 'josephine_oda', kisi: 'josephine', kosul: (S) => S.gorev === 3,
        sahne: ['josephine'],
        adimlar: [
          'Madam masasında bir şey dikiyor: o gün yeni yırtılan ev elbisem. Aylardır dolabında duruyormuş.',
          ['josephine', 'Atmaya kıyamadım. Güzel kumaş. Dikiş yeri belli olacak; ama giyilir.'],
          {
            eger: (S) => !!S.bayrak.delil_yazi,
            ise: [
              ['josephine', 'Size bir şey söyleyeceğim. Kitaptaki yazıya çok baktım; o kâğıdı da aklımdan çıkarmadım.'],
              ['josephine', 'Ben sizin yazınızı okuyamam; ama el tanırım. Kitaptaki harfler açık, sağa yatık; acele eden bir genç adamın eli. Kâğıttakiler yuvarlak, kapalı, tek tek çizilmiş. Yavaş yazan, düşünerek yazan bir el.'],
              ['ic', 'Bu evde yavaş yazan, düşünerek yazan kaç el var? Perihan Hanım\'ınki değil.'],
              { bayrak: { yazi_incelendi: true } },
              { delil: 'Madam iki yazıyı karşılaştırdı: kitaptaki harfler açık ve sağa yatık; sahte mektuptakiler yuvarlak, kapalı, tek tek çizilmiş.' },
            ],
            degilse: [
              ['josephine', 'O kâğıdı hâlâ düşünüyorum. Ben sizin yazınızı okuyamam; ama o kadar düzgün bir yalanı acemi el yazamaz.'],
            ],
          },
          {
            soru: 'Madam iğneyi bıraktı: "Elbiseyi ne yapalım Feride Hanım?"',
            secim: [
              {
                m: '"Giyerim. Dikiş yeri görünsün."', etki: { isyan: 1, josephine: 1 }, bayrak: { elbise_b7: 'giy' },
                adimlar: [
                  ['f', 'Giyerim. Dikiş yeri görünsün; saklayacak bir şey yapmadım.'],
                  ['josephine', 'Voilà. Bunu sizden duymak istiyordum.'],
                ],
              },
              {
                m: '"Sizde dursun. Bir gün biri sorarsa gösterirsiniz."', etki: { vakar: 1, josephine: 1 }, bayrak: { elbise_b7: 'sakla' },
                adimlar: [
                  ['f', 'Sizde dursun Josephine. Bir gün biri "ne oldu" diye sorarsa gösterirsiniz.'],
                  ['josephine', 'Sorarlarsa gösteririm. Sormazlarsa da saklarım.'],
                ],
              },
            ],
          },
        ],
      },

      /* ---------- YAN: aşçı kadının çıkını (görev 3-4, mutfak) ---------- */
      {
        id: 'b7_mutfak', yan: true, mekan: 'mutfak', kisi: 'asci', kosul: (S) => S.gorev === 3 || S.gorev === 4,
        sahne: ['asci'],
        adimlar: [
          'Mutfak sıcak. Aşçı kadın tezgâhta küçük bir çıkın bağlıyor.',
          ['asci', 'Küçük beye kurabiye. Mektebin kapıcısı hemşerimdir; cumaya kalmaz eline geçer. Hanımefendi duymasın.'],
          {
            eger: (S) => S.bayrak.sefik_hastalik === 'elmas',
            ise: [['asci', 'Frenk hekimine arka kapıyı açtım diye bir ay azar işittim. Canı sağ olsun küçük beyin.']],
            degilse: [{
              eger: (S) => S.bayrak.sahte_mektup_cevap === 'alcak',
              ise: [['asci', 'O gün salonda söylediğinizi buraya kadar duyduk küçük hanım. Kimse bir şey demedi; ama o akşam herkes yemeğini bitirdi.']],
              degilse: [['asci', 'Sizin tabağınızı da ben hazırlıyorum küçük hanım. Kapıya bırakılan artık değil; bilin istedim.']],
            }],
          },
          {
            soru: 'Çıkının ağzı açık. İçine bir şey koyabilirim.',
            secim: [
              {
                m: 'Örgümün kurdelesini koymak.', etki: { sefik: 1 }, bayrak: { cikin_b7: 'kurdele' },
                adimlar: [
                  'Örgümün ucundaki kurdeleyi çözdüm, kurabiyelerin üstüne koydum.',
                  ['asci', 'Tanır mı?'],
                  ['f', 'Her sabah o kurdeleyi bağlarken beni seyrederdi. Tanır.', 'gulumseyen'],
                ],
              },
              {
                m: 'Yalnız teşekkür etmek; çıkın onun hediyesi.', etki: { vakar: 1 },
                adimlar: [
                  ['f', 'Bu senin hediyen. Benimkini cumaya saklıyorum.'],
                  ['asci', 'Cuma gelir küçük hanım. Hepsi gelir.'],
                ],
              },
            ],
          },
        ],
      },

      /* ---------- YAN: komşu konağın penceresinde Nimet (görev 3-4, bahçe) ---------- */
      {
        id: 'b7_pencere', yan: true, mekan: 'konak_bahce', kisi: 'komsu_konak', kosul: (S) => S.gorev === 3 || S.gorev === 4,
        sahne: ['komsu_konak'],
        adimlar: [
          'Bahçe duvarının üstünden komşu konağın pencereleri görünüyor. Kış; ağaçlar çıplak, arası açık.',
          'İkinci kattaki pencerede bir perde kıpırdadı. Beyaz bir yemeni; tanıdığım omuzlar.',
          ['ic', 'Nimet. Sandığıyla sokağa konan Nimet; Münevver Hanım\'ın penceresinde.'],
          'Beni gördü. Elini cama koydu. Sonra kendi kolunu tuttu; başını yana eğdi.',
          ['ic', 'Kolumu soruyor. Duymuş.'],
          {
            soru: 'Duvarın bu yanından seslenemem. Ama bir işaret verebilirim.',
            secim: [
              {
                m: 'Kolumu kaldırıp göstermek: iyileşiyor.', etki: { mehves: 1, vakar: 1 }, bayrak: { nimet_isaret_b7: 'iyi' },
                iz: 'Nimet\'e pencereden kolunu gösterdin.',
                adimlar: [
                  'Kolumu kaldırdım, parmaklarımı oynattım. Nimet iki elini yüzüne kapadı; sonra göğe açtı.',
                  ['ic', 'Duasını buradan duydum. Yirmi adım; arada bir duvar.'],
                ],
              },
              {
                m: 'Parmağımı dudağıma, sonra kulağıma götürmek: "Konuşacağın gün yakın."', etki: { mehves: 1, isyan: 1 }, bayrak: { nimet_isaret_b7: 'hazir' },
                iz: 'Nimet\'e pencereden işaret verdin: hazır olsun.',
                adimlar: [
                  'Parmağımı dudağıma, sonra kulağıma götürdüm: sen söyleyeceksin, onlar dinleyecek.',
                  'Nimet bir an durdu. Sonra başını bir kere, ağır ağır eğdi.',
                  { eger: (S) => !!S.bayrak.nimet_tanik, ise: [['ic', 'Anladı. "Çağırdığın gün gelirim" demişti. Sözü duruyor.']], degilse: [['ic', 'Anladı mı, bilmiyorum. Ama başını eğdi.']] },
                ],
              },
            ],
          },
          'Perde kapandı. Bahçede bir ben kaldım, bir çıplak ağaçlar.',
        ],
      },

      /* ---------- Görücüler (roman s. 184-185) ---------- */
      {
        id: 'b7_gorucu', mekan: 'buyuk_salon', tetik: 'giris', kosul: (S) => S.gorev === 3,
        sahne: [{ id: 'calibe', ifade: 'gulumser' }],
        adimlar: [
          'Hatice arkamdan yürüdü; kaçmayayım diye mi, düşmeyeyim diye mi, bilmiyorum.',
          'Kapının önünde durdum. Aynada yüzüme baktım: görücüye çıkan kız böyle mi olur?',
          { eger: (S) => S.bayrak.madalyon === 'acik', ise: ['Madalyonu yakamın üstünde bıraktım. Görecekler; görsünler.'], degilse: ['Madalyon yakamın içinde. Onu kimseye göstermeye mecbur değilim.'] },
          { eger: (S) => S.bayrak.elbise_b7 === 'giy', ise: ['Üstümde Madam\'ın diktiği elbise. Dikiş yeri kolumda; belli.'], degilse: [] },
          ['calibe', 'Gel kızım, gel. Bugün yüzün gülsün; kısmet güler yüze gelir.', 'gulumser'],
          {
            eger: (S) => S.v.itibar >= 40,
            ise: [
              { goster: ['tacir_hanimi'] },
              { bayrak: { remzi_istedi: true } },
              'Sedirde iri yüzüklü, ipek feraceli bir hanım. Girerken beni baştan ayağa süzdü; terzinin kumaşa bakışıyla.',
              ['tacir_hanimi', 'A kızım, kardeşin mektebe gitmiş; izinli günü gelir kalır, ne olacak. Bizim Remzi "olur" dedi.'],
              ['tacir_hanimi', 'Yürü bakayım şöyle pencereye kadar. Hah. Boyu yerinde. Gül bakalım, dişlerini de göreyim.'],
              'Gülmedim. Dudağımı araladım; o kadarı yetti.',
              {
                eger: (S) => S.bayrak.remzi_hediye === 'kabul',
                ise: [['tacir_hanimi', 'Yelpazemizi kullanıyor musun?']],
                degilse: [{ eger: (S) => S.bayrak.remzi_hediye === 'sart', ise: [['tacir_hanimi', 'Kardeşini sormuştun. İşte oldu.']], degilse: [['tacir_hanimi', 'Yelpazeyi geri yolladın; oğlan "ille de o kız" dedi.']] }],
              },
              ['tacir_hanimi', 'Kolunu niye öyle tutuyorsun kızım?'],
              ['calibe', 'Geçen ay merdivende ayağı kaydı hanımefendi. Geçti gitti; biz kusurlu kız vermeyiz.', 'gulumser'],
              ['ic', 'Merdiven. Babamın yaptığını bir pazarlık sözüyle örttü. Ben de düzeltmedim; düzeltsem kimin yüzü kızaracaktı?'],
              'Evin oda sayısını, atların kaça alındığını, hizmetçilerin sayısını saydı. Sonra kendi evini saydı: on dört oda, çifte araba, Beyoğlu\'ndan gelen boy aynası.',
              ['tacir_hanimi', 'Piyano da çalarmış. Bizim evde piyano yok; ama alırız. Kaç liradır o?'],
              ['calibe', 'Efendi Viyana\'dan getirtti hanımefendi. Paha biçilmez.', 'gulumser'],
              ['f', 'Şefik\'in izin günleri için söz veriyor musunuz hanımefendi? Tatillerde de?'],
              ['tacir_hanimi', 'A, pazarlığı da bilirmiş! Verdik kızım, verdik. Bir çocuk boğazı; ne tutar ki?'],
              ['tacir_hanimi', 'Remzi de duyunca "Küçük beye ahırdan bir tay ayırın; binmeyi ben öğretirim" dedi. Bana sormadan dedi; oğlum sevdiğinden bir şey esirgemez.'],
              { eger: (S) => !!S.bayrak.bilgi_remzi, ise: [['ic', 'Her şeyi fiyatıyla sayıyorlar. Beni de sayacaklar.']], degilse: [['ic', 'Zengin, yakışıklı, yirmi sekiz yaşında diyorlar. Şefik\'in izin günlerini kabul etmiş. Bu evden çıkış bu.']] },
              { gizle: 'tacir_hanimi' },
              // Remzi'ye gönül yalnız oyuncu umudu seçerse artar (yoklanmış olmak kendiliğinden kıpırtı değildir)
              {
                soru: 'Hanım gitti. Sedirde ipeğinin hışırtısı kaldı; bende de bakışı. Görmediğim oğlu için içimden ne geçiyor?',
                secim: [
                  {
                    m: 'Oğlu annesi gibi olmayabilir. Şefik\'e tay ayıran adamı merak ediyorum.', etki: { remzi: 2 }, bayrak: { gorucu_ic: 'umut' },
                    adimlar: [
                      ['ic', 'Beni kumaş gibi yoklayan annesiydi; o değil. Görmediğim adam için hüküm vermeyeceğim. Bir çocuğa kimse sormadan tay ayırmayı düşünen biri, belki insanı da düşünür.'],
                    ],
                  },
                  {
                    m: 'Bu bir çıkış kapısı. Gönlüme sormuyorum.', etki: { vakar: 1 }, bayrak: { gorucu_ic: 'kapi' },
                    adimlar: [
                      ['ic', 'Şefik\'in izin günleri söz oldu. Gerisini gönlüme sormayacağım; şimdilik.'],
                    ],
                  },
                  {
                    m: 'Dişime bakıldı. Bunu unutmayacağım.', etki: { isyan: 1 }, bayrak: { gorucu_ic: 'kirgin' },
                    adimlar: [
                      ['ic', 'At pazarında da böyle bakarlar. Oğlunun suçu mu, bilmiyorum. Ama o kapıdan girersem bu bakışı da yanımda götüreceğim.'],
                    ],
                  },
                ],
              },
            ],
            degilse: [
              'Sedir örtüleri değişmiş, şerbet takımı çıkmış. Öğle oldu. İkindi oldu. Şerbetin buzu eridi.',
              'Kimse gelmedi. Perihan Hanım pencereden sokağa baktı, bana döndü.',
              ['calibe', 'Adı çıkmış kıza kapı çalan olmaz.', 'sinsi'],
              ['calibe', 'Ben elimden geleni yaptım kızım. Gerisi senin adınla senin aranda.', 'gulumser'],
              ['ic', 'Konak konak dolaşan söz benim adımı da götürdü. Kapımı çalan yok.', 'mahzun'],
            ],
          },
          { temizle: true },
          {
            eger: (S) => !!S.bayrak.remzi_istedi,
            ise: [
              'Akşam babamın ayak sesi kapımın önünde durdu. Kapıyı açmadı.',
              ['sai', '{i}(Kapının ardından){/i} Soruşturdum. Zengin, kibar yaşıyor, yakışıklı. Kardeşini de kabul etmiş. Cevabını yarın isterim.', 'ciddi'],
              ['f', '{i}(Kapının ardından){/i} Yüzüme bakarak söylemez misiniz efendim?'],
              'Ayak sesi uzaklaştı.',
            ],
            degilse: [
              'Akşam babamın ayak sesi kapımın önünde durdu. Kapıyı açmadı.',
              ['sai', '{i}(Kapının ardından){/i} Bu ev böyle gitmez. Yarın bana bir karar söyleyeceksin.', 'ciddi'],
              'Ayak sesi uzaklaştı.',
            ],
          },
          ['ic', 'Kapımın ardından, yüzüme bakmadan. Başka laf dinlemeyecek; bunu sesinden anladım.', 'mahzun'],
          { gorev: 4 },
        ],
      },

      /* ---------- YAN: gece, piyano (görev 4, büyük salon) ---------- */
      {
        id: 'b7_piyano', yan: true, mekan: 'buyuk_salon', kisi: 'piyano', kosul: (S) => S.gorev === 4,
        sahne: ['piyano'],
        adimlar: [
          'Salon boşaldı. Lambanın biri yanıyor. Piyanonun kapağı kapalı; Şefik gideli kimse açmadı.',
          {
            eger: (S) => S.bayrak.piyano === 'baba',
            ise: [['ic', 'Bir yıl önce bu tuşlarda babamın sevdiği şarkıyı çalmıştım. O zaman dinlerdi.']],
            degilse: [{ eger: (S) => S.bayrak.piyano === 'sefik', ise: [['ic', 'Bir yıl önce bu tuşlarda Şefik için çalmıştım. İskemlede yanıma sığışırdı.']], degilse: [] }],
          },
          {
            soru: 'Kapağı kaldırdım. İyileşen kolum tuşlara yetişiyor.',
            secim: [
              {
                m: 'Babamın sevdiği şarkıyı çalmak; alçak sesle.', etki: { baba_guven: 2 }, bayrak: { piyano_b7: 'baba' },
                iz: 'Karar gecesi babanın şarkısını çaldın. Bir kapı açıldı; kapanmadı.',
                adimlar: [
                  'İlk ölçüde kolum sızladı; ikincide alıştı. Yavaş çaldım.',
                  'Selamlık tarafında bir kapı açıldı. Kapanmadı.',
                  ['ic', 'Dinliyor. Gelmiyor; ama dinliyor.'],
                  'Şarkı bitince kapı yavaşça örtüldü.',
                ],
              },
              {
                m: 'Şefik\'in talim parçasını çalmak; hep takıldığı yere kadar.', etki: { sefik: 1 }, bayrak: { piyano_b7: 'sefik' },
                adimlar: [
                  'Onun hep takıldığı ölçüye geldim; durdum.',
                  ['ic', 'Devamını o gelince çalacağız. Dört elle.'],
                ],
              },
              {
                m: 'Kapağı kapatmak. Bu gece ses çıkarmayacağım.', etki: { vakar: 1 }, bayrak: { piyano_b7: 'sustu' },
                adimlar: [
                  'Kapağı indirdim. Parmağımın izi cilanın üstünde kaldı; sonra o da silindi.',
                ],
              },
            ],
          },
        ],
      },

      /* ---------- SON KARAR: sezonun düğümü ---------- */
      {
        id: 'b7_karar', mekan: 'fazila_oda', tetik: 'giris', kosul: (S) => S.gorev === 4,
        sahne: ['resim'],
        adimlar: [
          'Karar gecesi. Lambayı kıstım. Annemin resmi bana bakıyor.',
          'Ev sessiz. Şefik\'in yer yatağı dürülmüş, duvarın dibinde. Masamda unuttuğu bir kalem.',
          { goster: ['josephine'] },
          'Josephine gitmeden uğradı. Elinde iki fincan ıhlamur.',
          ['josephine', 'Bu gece ne karar verirseniz verin Feride Hanım, yarın sabah yine gelirim. Bunu bilerek karar veriniz.'],
          ['f', 'Ya size yol verirlerse?'],
          ['josephine', 'O zaman kapının önünde beklerim. Ben bir kere bir talebeyi yarıda bıraktım; ikincisini bırakmam.'],
          'Fincanı elime tutuşturdu. Sıcaktı. Gitti.',
          { gizle: 'josephine' },
          ['ic', 'Bunca ay. Bir nişan, bir gerdanlık, bir kardeş, bir dadı. Hepsini aldılar. Elimde ne kaldı?'],
          'Elimdekileri tek tek saydım. Bir tacir hanımı gibi; ama benimkiler satılık değil. Üçe ayırdım: babam sorunca yüzüne söyleyeceğine söz veren kim var; kendi gözümle ne gördüm, elimde ne tutuyorum; başkasından ne duydum.',
          // Elindekilerin dökümü: söz veren tanık / gördüğüm ve elimde tuttuğum / duyduğum ayrı okunur
          { eger: (S) => tanikVar(S), ise: ['{b}Sorulunca söyleyeceğine söz verenler:{/b}'], degilse: ['{b}Sorulunca söyleyeceğine söz veren:{/b} kimse yok.'] },
          { eger: (S) => !!S.bayrak.nimet_tanik, ise: ['Nimet: yan konakta bekliyor. "Çağırdığın gün gelir, söylerim" dedi. Gördüğü şu kadar: Hatice o gece, gece yarısından sonra yanına geldi; sabaha kadar oradaydı. Öncesini görmedi.'], degilse: [] },
          { eger: (S) => !!S.bayrak.nimet_tanik && S.bayrak.nimet_isaret_b7 === 'hazir', ise: ['Pencereden işaret verdim; başını eğdi.'], degilse: [] },
          { eger: (S) => !!S.bayrak.nimet_duydu && !!S.bayrak.nimet_tanik, ise: ['Nimet bir şey de duydu: Süha Bey\'in odamda bana ne teklif ettiğini, koridordan. Gördü değil; duydu. Onu da söyler.'], degilse: [] },
          { eger: (S) => !!S.bayrak.reftar_tanik, ise: ['Hatice: "Efendi sorarsa söylerim" dedi. Korkuyor; ona azat sözü verdim.'], degilse: [] },
          { eger: (S) => !!S.bayrak.suha_tanik, ise: ['Süha Bey: Şefik kalkınca şişeyi kimin açtığını söyleyeceğine yemin etti.'], degilse: [] },
          { eger: (S) => !!S.bayrak.asci_tanik, ise: ['Aşçı kadın: efendi yokken doktorun arabasını arka sokakta gördü. "Sorarlarsa yalan söylemem" dedi.'], degilse: [] },
          { eger: (S) => !!S.bayrak.delil_ada || !!S.bayrak.delil_dugme || !!S.bayrak.delil_yazi || !!S.bayrak.delil_ilac || kagitVardi(S), ise: ['{b}Gördüğüm, elimde tuttuğum:{/b}'], degilse: [] },
          { eger: (S) => !!S.bayrak.delil_ada, ise: ['Gördüm: Ada gecesi sofadaydım; misafir odasının lambası erken söndü.'], degilse: [] },
          { eger: (S) => !!S.bayrak.delil_dugme, ise: [{ eger: (S) => !!S.bayrak.nimet_tanik, ise: ['Elimde: çiçekli bir yelek düğmesi. Nerede bulduğunu Nimet babama kendi söyleyebilir.'], degilse: ['Elimde: çiçekli bir yelek düğmesi. Ama nerede bulunduğunu babama söyleyecek kimseyi yanıma almadım.'] }], degilse: [] },
          { eger: (S) => !!S.bayrak.delil_yazi, ise: ['Elimde: Madam\'ın yastığımın altına sakladığı kitap. İlk sayfasında gerçek yazı.'], degilse: [] },
          { eger: (S) => !!S.bayrak.yazi_incelendi, ise: ['Madam iki yazıya baktı: iki ayrı el. Sorulursa o da söyler.'], degilse: [] },
          { eger: (S) => !!S.bayrak.delil_ilac, ise: ['Gördüm: adı söylenmeyen kuvvet şurubu. Madam tattı.'], degilse: [] },
          {
            eger: (S) => pusulaBabada(S),
            ise: ['İmzasız pusula elimde değil: nişan sabahı babama verdim; cebine koydu. O kâğıdı o da okudu.'],
            degilse: [{
              eger: (S) => kagitVardi(S),
              ise: [{ eger: (S) => S.bayrak.pusula === 'alindi', ise: ['Elimde: Perihan Hanım\'ın Münevver Hanım\'a yolladığı imzasız pusula.'], degilse: ['Elimde: pusulanın müsveddesi; Perihan Hanım\'ın kendi yazısıyla.'] }],
              degilse: [],
            }],
          },
          { eger: (S) => !!S.bayrak.delil_soylenti || !!S.bayrak.b7_uyari || (!!S.bayrak.nimet_duydu && !S.bayrak.nimet_tanik) || !!S.bayrak.baba_sarsildi || !!S.bayrak.baba_ada_supheli, ise: ['{b}Duyduğum, sezdiğim:{/b}'], degilse: [] },
          { eger: (S) => !!S.bayrak.delil_soylenti, ise: ['Duydum: pencere içinde, Beyoğlu sözünün kimin ağzından ağırlaştığını.'], degilse: [] },
          { eger: (S) => !!S.bayrak.b7_uyari, ise: ['Duydum: taşlığı silen kız "O sabah kapı çalınmadı" dedi. Söz vermedi; adını ben veremem.'], degilse: [] },
          { eger: (S) => !!S.bayrak.nimet_duydu && !S.bayrak.nimet_tanik, ise: ['Nimet, Süha Bey\'in odamda bana ne teklif ettiğini koridordan duymuştu. Ama ondan babamın önünde konuşacağına dair söz almadım.'], degilse: [] },
          { eger: (S) => !!S.bayrak.baba_sarsildi || !!S.bayrak.baba_ada_supheli, ise: ['Bir de babamın kendi içindeki soru: bir kere duraksadığını gördüm.'], degilse: [] },
          { eger: (S) => S.bayrak.sefik_resim_b7 === 'sakla', ise: ['Bir de Şefik\'in resmi: iki kişi, el ele; arkalarında açık bir kapı. Bu delil değil. Ama elimde.'], degilse: [] },
          {
            eger: (S) => !tanikVar(S) && delilSayisi(S) === 0,
            ise: [['ic', 'Hiçbir şey. Yalnız bildiklerim. Bildiğim şey, söylediğim an iftira olur.', 'mahzun']],
            degilse: [{
              eger: (S) => !tanikVar(S),
              ise: [['ic', 'Elimde tuttuklarım var; ama babamın yüzüne bakıp "ben gördüm" diyecek bir tek kişi yok. Eşya da kâğıt da tek başına konuşmaz. Yazarsam, yalnız benim sözüm gider.', 'mahzun']],
              degilse: [{
                eger: (S) => delilSayisi(S) < 3,
                ise: [['ic', 'Konuşacak biri var; ama o sözü ayakta tutacak şey az. Tek bir söz, karşısında babamın yıllardır dinlediği karısının sözü. Yetmeyebilir.']],
                degilse: [['ic', 'Söz verecek biri var; o sözü tutacak şeyler de var. Yeter mi? Babam bana el kaldırdı; yüzüme bakmıyor. Yetmezse, elimdekini de yakmış olurum.']],
              }],
            }],
          },
          {
            eger: (S) => !!S.bayrak.remzi_istedi,
            ise: [['ic', 'Üç kapı var. Birinin ardında telli duvak, yabancı bir ev, Şefik\'in izin günleri. Birinin ardında babamın yüzü: ya açılacak ya büsbütün kapanacak. Üçüncüsü bu oda.']],
            degilse: [['ic', 'İki kapı var. Birinin ardında babamın yüzü: ya açılacak ya büsbütün kapanacak. Öbürü bu oda. Üçüncüyü çalan olmadı.']],
          },
          'Lambanın fitili titredi. Annemin resminde dudağın kenarı kıpırdar gibi oldu; ışıktı.',
          {
            soru: 'Karar gecesi. Hangi kapıdan çıkacağım?',
            secim: [
              {
                m: '"Peki efendim." Remzi Bey\'i kabul etmek.', kosul: (S) => !!S.bayrak.remzi_istedi,
                bayrak: { son_karar: 'remzi' }, iz: 'Remzi Bey\'i kabul ettin.',
                adimlar: [['ic', 'Bir kapıdan çıkmak için öbür kapıdan gireceğim. Şefik\'in izin günleri için.']],
              },
              {
                m: 'Babama yazmak: bildiğim her şeyi, delilleriyle, tanıklarıyla.',
                bayrak: { son_karar: 'ifsa' }, iz: 'Babana her şeyi yazdın.',
                adimlar: [
                  'Divitim yoktu; Josephine kendi kalemini verdi. İlk satırı üç kere yazdım. "Efendim" dedim, çizdim. "Babacığım" dedim; kaldı.',
                  'Sabaha kadar yazdım: pusulayı, Ada gecesini, şişeyi, sarı odayı, kurşun kalemi. Her satırın yanına kimin tanık olduğunu yazdım.',
                  'Hiçbir satıra "sanırım" koymadım. Gördüğümü gördüğüm kadar, duyduğumu duyduğum kadar yazdım. En sona tek cümle: {i}"Bana inanmanızı istemiyorum; sormanızı istiyorum."{/i}',
                  {
                    eger: (S) => esik(S) === 'kitap',
                    ise: ['Zarfı Josephine götürdü. Kitabı da yanına aldı: "Kâğıdın yanında bakacak bir şey olsun" dedi.'],
                    degilse: [{ eger: (S) => esik(S) === 'dugme', ise: ['Düğmeyi zarfın içine koydum. Zarfı Josephine götürdü.'], degilse: ['Zarfı Josephine götürdü.'] }],
                  },
                  'Kapı kapandı. Ben bekledim.',
                ],
              },
              {
                m: '"Kırk yıl kız otururum." Kimseyi kabul etmemek.',
                bayrak: { son_karar: 'kimse' }, iz: 'Kimseyi kabul etmedin.',
                adimlar: [['ic', 'Kapıların hepsi başkasının. Ben hiçbirinden geçmeyeceğim.']],
              },
            ],
          },

          /* ----- İfşa: tutarsa perde yırtılır; tutmazsa geri çevrilir ve yeniden seçilir ----- */
          {
            eger: (S) => S.bayrak.son_karar === 'ifsa' && !ifsaTutar(S),
            ise: [
              { kart: 'Akşam.' },
              'Gün boyu selamlıktan ses gelmedi. İkindide merdivenden Perihan Hanım\'ın gülüşünü duydum.',
              'Zarf kapımın altından geri itildi. Üstünde babamın yazısıyla tek satır:',
              '{i}"Delilsiz söz iftiradır."{/i}',
              'Zarfın ağzı açılmıştı. Okumuş; ya da biri ona okumuş.',
              { etki: { baba_guven: -6, itibar: -3 } }, { bayrak: { ifsa_denendi: true } },
              { eger: (S) => esik(S) === 'kitap', ise: ['Kitap da zarfla geri geldi. Kapağı açılmamıştı.'], degilse: [{ eger: (S) => esik(S) === 'dugme', ise: ['Düğme zarfın içindeydi; yerinden oynamamış.'], degilse: [] }] },
              // Eksik olan somut söylenir: elde ne var, ne yok
              {
                eger: (S) => !tanikVar(S) && delilSayisi(S) === 0,
                ise: [['ic', 'Delilsiz dedi; haklıydı. Elimde ne tutacak bir şey vardı ne konuşacak bir kimse. Yalnız bildiklerimi yazdım.', 'mahzun']],
                degilse: [{
                  eger: (S) => !tanikVar(S),
                  ise: [
                    {
                      eger: (S) => !!S.bayrak.delil_dugme,
                      ise: [['ic', 'Delilsiz değildim. Düğme var; ama nerede bulunduğunu babama söyleyecek kimseyi yanıma almadım.', 'mahzun']],
                      degilse: [{
                        eger: (S) => !!S.bayrak.delil_yazi,
                        ise: [['ic', 'Delilsiz değildim. Kitap var, gerçek yazı var; ama babam kâğıda bakmıyor. Yüzüne bakıp "ben gördüm" diyecek kimseyi yanıma almadım.', 'mahzun']],
                        degilse: [['ic', 'Delilsiz değildim. Gördüklerim, duyduklarım var; ama hepsi benim ağzımdan. Babamın yüzüne bakıp "ben gördüm" diyecek kimseyi yanıma almadım.', 'mahzun']],
                      }],
                    },
                    ['ic', 'Eksik olan şey değil, insandı: sorulunca söyleyeceğine söz veren bir tanık.'],
                  ],
                  degilse: [
                    {
                      eger: (S) => !!S.bayrak.nimet_tanik,
                      ise: [['ic', 'Nimet söylerdi. Ama babam için o "kovulmuş kalfa"; sözünü ayakta tutacak şeyleri yeterince toplamadım.', 'mahzun']],
                      degilse: [['ic', 'Konuşacak biri vardı. Ama tek bir söz, karşısında babamın yıllardır dinlediği karısının sözü.', 'mahzun']],
                    },
                    ['ic', 'Eksik olan insan değil, o insanın sözünü tutacak şeydi: elde tutulan, gözle görülen iki üç şey daha.'],
                  ],
                }],
              },
              ['ic', 'Yetmedi. Şimdi geriye kalan kapılara bakacağım.', 'mahzun'],
              {
                soru: 'Mektubum geri döndü. Hangi kapı kaldı?',
                secim: [
                  { m: '"Peki efendim." Remzi Bey\'i kabul etmek.', kosul: (S) => !!S.bayrak.remzi_istedi, bayrak: { son_karar: 'remzi' }, iz: 'Remzi Bey\'i kabul ettin.', adimlar: [['ic', 'Bu evde kalamam. Açık olan tek kapıdan çıkacağım.']] },
                  { m: '"Kırk yıl kız otururum."', bayrak: { son_karar: 'kimse' }, iz: 'Kimseyi kabul etmedin.', adimlar: [['ic', 'Bu evde kalacağım. Ama kimsenin değil; kendimin.']] },
                ],
              },
            ],
            degilse: [],
          },

          /* ===== SON 1: Perde Yırtılıyor (ifşa tuttu) ===== */
          {
            eger: (S) => S.bayrak.son_karar === 'ifsa',
            ise: [
              { temizle: true },
              // Ara adım: babayı dinleme eşiğine getiren, mektubun yanındaki somut şey
              { kart: 'O gece.' },
              'Zarf geri gelmedi. Gece yarısını geçti; selamlıkta lamba hâlâ yanıyordu.',
              { goster: ['josephine'] },
              {
                eger: (S) => esik(S) === 'kitap',
                ise: [['josephine', 'Efendi zarfı aldı, kitabı itti. Ben çıkarken döndüm, baktım: kitabın kapağını açıyordu.']],
                degilse: [{
                  eger: (S) => esik(S) === 'pusula',
                  ise: [['josephine', 'Efendi mektubu okurken elini yeleğinin cebine götürdü. İkiye katlı bir kâğıt çıkardı; mektubunuzun yanına koydu. İkisine birden baktı.'], ['ic', 'Nişan sabahı verdiğim kâğıt. Aylardır cebindeymiş.']],
                  degilse: [{
                    eger: (S) => esik(S) === 'dugme',
                    ise: [['josephine', 'Efendi zarfı açınca avucuna bir düğme düştü. Mektubu sonra okudu; düğmeyi elinden bırakmadı.']],
                    degilse: [['josephine', 'Efendi mektubu okudu, uşağı çağırttı. Bir tek şey sordu: "O sabah kapıya kim geldi?" Uşak önüne baktı; cevap veremedi.'], ['ic', 'Sormamı istediğim soruyu sordu. İlk kez.']],
                  }],
                }],
              },
              { gizle: 'josephine' },
              'Sabaha karşı merdivende ayak sesi. Kapımın önünde durdu; bu kez uzun durdu. Sonra indi.',
              { kart: 'Ertesi sabah.' },
              'Hatice kapıma geldi; yüzü kireç gibi. "Efendi sizi salona istiyor" dedi. "Hepimizi istiyor."',
              'Merdiveni aylar önce indiğim gibi indim. Bu kez elimi tutan yoktu; bağıran da.',
              { mekan: 'buyuk_salon' },
              { goster: ['sai', 'mahzun'] }, { goster: ['calibe', 'soguk'] },
              'Babam mektubumu elinde tutuyordu. Gözleri sabaha kadar uyumamış bir adamın gözleri.',
              'Önündeki sehpada öteki kâğıt duruyordu: kurşun kalemle yazılmış olan.',
              ['calibe', 'Efendi, sabah sabah bu ne telaş? Kızın bir kâğıdı için bütün evi ayağa kaldırdınız.', 'gulumser'],
              ['sai', 'Otur hanım.', 'ciddi'],
              'Perihan Hanım oturmadı. İlk kez babamın bir sözünü ikiletti.',
              ['sai', 'Bu mektubu ilk okuyuşta yırtacaktım.', 'mahzun'],
              {
                eger: (S) => esik(S) === 'kitap',
                ise: [['sai', 'Madam yanına bir kitap bırakmış. O gün bakmamıştım; bakarsam ne göreceğimden korktum. Dün gece baktım.', 'mahzun']],
                degilse: [{
                  eger: (S) => esik(S) === 'pusula',
                  ise: [['sai', 'Aylardır cebimde bir kâğıt taşıyorum. Yazısını tanıdım; tanıdığımı kimseye söylemedim, kendime bile. Mektubun o kâğıdı anlatıyordu.', 'mahzun']],
                  degilse: [{
                    eger: (S) => esik(S) === 'dugme',
                    ise: [['sai', 'İçinden bir düğme çıktı. O yeleğin kumaşını ben seçmiştim.', 'mahzun']],
                    degilse: [['sai', 'Her satırın yanına bir ad yazmışsın. Yalan söyleyen ad vermez. Uşağa bir tek şey sordum; gözüme bakamadı.', 'mahzun']],
                  }],
                }],
              },
              { eger: (S) => !!S.bayrak.baba_sarsildi, ise: [['sai', 'O gece bana söylediklerin de aklımdan çıkmamıştı. Çıkarmak istedim; çıkmadı.', 'mahzun']], degilse: [] },
              ['sai', 'Bir satırı doğru çıkan kâğıdın gerisini sormadan yakamam. Adını yazdıklarının hepsini çağırttım.', 'ciddi'],
              ['sai', 'Sen yazdın; sen göster. Kim ne biliyorsa bana bakarak söylesin. Nereden başlıyoruz?', 'ciddi'],
              ['ic', 'Dizlerim titriyor. Biri susarsa, biri dönerse, bu oda bir daha açılmamak üzere kapanır. Sırayı ben kuracağım.'],
              // Karar (a): önce hangi iddia
              {
                soru: 'Babam bana bakıyor; Perihan Hanım da. Önce hangisini kanıtlıyorum?',
                secim: [
                  {
                    m: 'Sahte yazıyı: "Önce şu kurşun kalemli kâğıda bakınız."',
                    bayrak: { yuzlesme_ilk: 'yazi' }, iz: 'Yüzleşmeye sahte yazıdan başladın.',
                    adimlar: [...yaziBlok, ...ilkSonuc, ...adaBlok],
                  },
                  {
                    m: 'Ada gecesini: "Önce o gece kimin nerede olduğunu sorunuz."',
                    bayrak: { yuzlesme_ilk: 'ada' }, iz: 'Yüzleşmeye Ada gecesinden başladın.',
                    adimlar: [...adaBlok, ...ilkSonuc, ...yaziBlok],
                  },
                ],
              },
              // İki iddiadan sonra: evin içindeki sır için kalanlar
              { eger: (S) => !!S.bayrak.asci_tanik && S.bayrak.yuzlesme_destek !== 'asci', ise: asciBlok, degilse: [] },
              {
                eger: (S) => !!S.bayrak.delil_dugme && S.bayrak.yuzlesme_destek !== 'dugme',
                ise: [{
                  eger: (S) => esik(S) === 'dugme',
                  ise: ['Babam avucundaki düğmeye baktı; sonra kapıya, Süha Bey\'in her sabah girdiği kapıya.'],
                  degilse: [{
                    eger: (S) => !!S.bayrak.nimet_tanik,
                    ise: ['Düğümlü bezi açıp düğmeyi sehpaya koydum.', ['mehves', 'Hanımefendinin mücevher çekmecesinin dibinde ben buldum efendim. Süha Bey\'in yeleğinden.', 'kararli'], 'Babam düğmeyi avucuna aldı. Bırakmadı.'],
                    degilse: ['Düğümlü bezi açıp düğmeyi sehpaya koydum. Nerede bulunduğunu söyleyecek kişi bu odada yoktu; babam yine de yeleği tanıdı.'],
                  }],
                }],
                degilse: [],
              },
              ['calibe', 'Efendi, bunların hepsi...', 'saskin'],
              ['calibe', 'Siz beni bilirsiniz. Yıllardır bu evin kahrını çeken benim.', 'gulumser'],
              // Zayıf başlangıç ya da tutmayan destek sonu değiştirmez; babanın karara varışı uzar
              {
                eger: (S) => !!S.bayrak.yuzlesme_guclu && (!!S.bayrak.yuzlesme_destek_tuttu || S.bayrak.reftar_guvence === 'verdi'),
                ise: [],
                degilse: [
                  'Babam uzun süre konuşmadı. Perihan Hanım o sessizliği kendi lehine saydı; koluna dokunmak için bir adım attı.',
                  'Babam kolunu çekti. İki kâğıda, sonra odadaki yüzlere tek tek baktı; en son bana.',
                  ['ic', 'Bir an döneceğini sandım. Sıramı daha sağlam kurabilirdim. Ama söylenenler söylenmişti; geri alınmıyordu.'],
                ],
              },
              ['sai', 'Sus. Yıllarca seni dinledim; bugün sen susacaksın.', 'ciddi'],
              'Perihan Hanım\'ın gülümsemesi yerinde kaldı; ama arkasında onu tutacak bir şey kalmamıştı.',
              'Babam ayağa kalkmak istedi; sedirin koluna tutundu. Bir sabahta on yaş almış gibiydi.',
              ['sai', 'Ben bu kâğıda inandım. Okudum ve inandım. Kimseye sormadım.', 'mahzun'],
              ['f', 'Sormadınız efendim.'],
              { eger: (S) => S.bayrak.piyano_b7 === 'baba', ise: [['sai', 'Dün gece çaldın. Duydum. Kapıya kadar geldim; yine giremedim.', 'mahzun']], degilse: [] },
              'Babam bana döndü. Elini uzattı; sonra çekti. O elin bana ne yaptığını ikimiz de biliyorduk.',
              ['sai', 'Kızım. Ben sana... Kolun nasıl?', 'mahzun'],
              ['f', 'İyileşiyor efendim.'],
              'Bir şey daha diyecekti. Cümleyi bulamadı. Ben de onun yerine bulmadım.',
              ['ic', 'Onu affetmedim. Bugün değil. Ama yüzüme baktı; aylardır ilk kez.'],
              ['ic', 'Bir sabah bir yılı geri getirmez. Kolum iyileşiyor; öbürü daha uzun sürecek.'],
              { temizle: true },
              'Perihan Hanım o hafta babasının evine yollandı. Süha Bey konaktan çıktı; bir daha girmedi. Şefik\'i mektepten ilk cumada ben aldım.',
              'Nazlı annesinin arkasından merdivende ağladı. Ona sarılacak kimse yoktu; ben sarıldım. Onun bir suçu yok.',
              'Babam o günden sonra selamlıktan az çıkar oldu. Sofrada artık çorbasına değil bana bakıyor; ama söyleyecek söz bulamıyor.',
              { goster: ['sefik', 'sevincli'] },
              'Mektebin kapısında bekledim. Kırk çocuğun içinden biri koşarak çıktı; ceketinin kolu yine sökülmüş.',
              ['sefik', 'Abla! Saydım. Tam saydım!', 'sevincli'],
              { eger: (S) => !!S.bayrak.sefik_soz, ise: [['sefik', 'Söz dedin, geldin.', 'sevincli']], degilse: [] },
              { eger: (S) => S.bayrak.sefik_resim_b7 === 'sandik', ise: [['sefik', 'Resmi sandıkta buldum. Arkasını her gece okudum.']], degilse: [] },
              { gizle: 'sefik' },
              { goster: ['munevver', 'gulumser'] },
              'Münevver Hanım kapıyı çaldı. Bu kez çeviren olmadı.',
              ['munevver', 'Kızım. Ben sana her şey meydana çıkacak dememiş miydim?'],
              ['munevver', 'Gerdanlık sandığımda duruyor. Ama acele yok. Önce bir nefes al; sonra gelen kendi gelir, kendi sorar.', 'gulumser'],
              ['f', 'Sorulursa düşünürüm nineciğim. Bu kez düşünmeye vaktim var.'],
              ['ic', 'Perde yırtıldı. Arkasında ne varsa hepsi göründü: babamın zaafı da, benim yalnızlığım da. Nişan yeniden konuşulur mu, bilmiyorum; konuşulursa bu kez bana da soracaklar.'],
              ['ic', 'Yırtılan perde neyi onaracak, neyi onaramayacak? Kolum iyileşiyor. Babamla aramdaki, o evle aramdaki, annesiz kalan Nazlı: hangisi dikiş tutar, daha bilmiyorum.'],
              { bayrak: { son: 'perde' } },
            ],
            degilse: [],
          },

          /* ===== SON 2: Kırk Yıl Kız Otururum ===== */
          {
            eger: (S) => S.bayrak.son_karar === 'kimse',
            ise: [
              { temizle: true },
              { kart: 'Sabah.' },
              'Sabah babamın ayak sesi kapımın önünde durdu. Bu kez kapıyı ben açtım.',
              { goster: ['sai', 'ciddi'] },
              'Eşikte kaldı. Gözü omzumun üstünden duvara, annemin resmine gitti; orada da duramadı.',
              { eger: (S) => !!S.bayrak.ifsa_denendi, ise: ['Geri ittiği zarf masamda duruyordu. Gördü. Bir şey demedi.'], degilse: [] },
              ['sai', 'Kararını söyle.', 'ciddi'],
              ['f', 'Kimseyi istemiyorum efendim. Kırk yıl kız otururum; bu odada, annemin resminin altında.'],
              ['sai', 'Kırk yıl uzun sürer.', 'ciddi'],
              ['f', 'Bu kış bana kırk yıl geldi efendim. Gerisine alışırım.'],
              ['sai', 'Öyleyse oturursun.', 'ciddi'],
              'Bir şey daha diyecekti. Demedi. Kapıyı kendi çekti.',
              { gizle: 'sai' },
              {
                eger: (S) => !!S.bayrak.remzi_istedi,
                ise: [
                  'Tacir hanımına haber gitti. Çifte arabalı kapı kapandı. Perihan Hanım üç gün benimle konuşmadı; dördüncü gün konuştu.',
                  ['calibe', 'Kısmetini tepen kızın kırk yılı uzun olur Feridecim. Ben yine de sana dua ederim.', 'gulumser'],
                ],
                degilse: [
                  ['calibe', 'Kapıyı çalan olmayınca "istemem" demek kolaydır kızım.', 'sinsi'],
                ],
              },
              'Kapım kapandı. Yemeğim kapıya bırakılıyor. Josephine her sabah geliyor; cumaları Şefik.',
              'İlk hafta sessizlik kulağımı çınlattı. İkinci hafta saatin sesine alıştım. Üçüncü hafta odayı ölçtüm: pencereden kapıya on bir adım, masadan resme dört.',
              { goster: ['josephine'] },
              ['josephine', 'Bugün coğrafya. Madem bu odadan çıkmıyorsunuz, dünyayı buraya getiririm.'],
              'Küreyi masama koydu. Parmağımı Marsilya\'nın üstüne bastım; sonra İstanbul\'un. Arası bir karış.',
              { gizle: 'josephine' },
              'Aynadaki kız her sabah aynı elbiseyi giyiyor. Yenisini diktirmenin sebebi yok; görecek kimse yok. Saçımı yine de her sabah örüyorum.',
              'Babamla merdivende karşılaşınca o duvara dönüyor. Ben "Hayırlı sabahlar efendim" diyorum. Her sabah; cevap vermese de.',
              ['ic', 'Selamı ben kesmeyeceğim. Kesen o olsun.'],
              {
                eger: kirkIyi,
                ise: [
                  'Günlerimi kendim böldüm: sabah Fransızca, öğleden sonra kitap, akşam Şefik\'e mektup. Hesap derslerini mektupla sürdürüyoruz; yanlışlarını çiziyorum, kenarına bir çiçek.',
                  { goster: ['sefik', 'sevincli'] },
                  'Cumaları merdiveni ikişer ikişer çıkıyor. Üniforma artık o kadar büyük gelmiyor.',
                  ['sefik', 'Abla, hesapta sınıfın birincisiyim. "Kim öğretti" dediler; "ablam" dedim. Güldüler. Sonra gülmediler.', 'sevincli'],
                  { gizle: 'sefik' },
                ],
                degilse: [
                  'Josephine\'in günlerini azalttılar: "Evde oturan kıza Fransızca ne lazım" demiş Perihan Hanım. Şefik\'in mektupları önce aşağıya çıkıyor; bana açılmış geliyor.',
                  'Cumaları geldiğinde kapımın önünde biri bekliyor. Bir saat. Sonra "küçük bey yorulmasın" diyorlar.',
                  'O bir saatte bana bütün haftayı anlatıyor. Ben dinliyorum; ezberliyorum.',
                ],
              },
              { eger: (S) => !!S.bayrak.sefik_soz, ise: [['ic', 'Şefik\'e "seni almaya geleceğim" demiştim. Gidemedim. O geliyor.', 'mahzun']], degilse: [] },
              { eger: (S) => S.bayrak.sefik_resim_b7 === 'sakla', ise: ['Resmini annemin portresinin yanına astım. İki kişi, el ele; arkalarında açık bir kapı.'], degilse: [] },
              { eger: (S) => S.bayrak.sefik_resim_b7 === 'sandik', ise: ['İlk mektubunun altına yazmış: {i}"Resmin arkasını okudum. Kapı açık."{/i}'], degilse: [] },
              'Bazı akşamlar aşağıdan gülüşmeler geliyor: misafir var, şerbet var, Nazlı\'nın kısmeti konuşuluyor. Ben çağrılmıyorum.',
              'On sekiz yaşındayım. Pencerenin önünden düğün alayları geçiyor; bakıyorum. Bakmak yasak değil.',
              { eger: (S) => S.bayrak.piyano_b7 === 'baba', ise: ['Piyanoya haftada bir iniyorum; ev boşken. Babamın şarkısını çaldığım günler selamlıkta bir kapı açık kalıyor.'], degilse: [] },
              { goster: ['munevver', 'gulumser'] },
              'Bayramda yan konaktan bir sepet ayva geldi. İçinde Münevver Hanım\'ın eliyle tek satır:',
              ['munevver', '{i}"Kapın kapalıymış; duydum. Benimki açık kızım. Ben de bekliyorum."{/i}', 'gulumser'],
              { gizle: 'munevver' },
              ['ic', 'Kimsenin kapısından geçmedim. Bedeli bu oda. Ama bu odada benim olmayan tek bir söz yok.'],
              {
                eger: (S) => (S.v.vakar || 0) >= (S.v.isyan || 0),
                ise: [['ic', 'Kırk yıl otururum dedim. Bu, kırkın birincisi. Sabırla sayacağım; cumaları saydığım gibi.']],
                degilse: [['ic', 'Kırk yıl otururum dedim. Bu, kırkın birincisi. Kapıyı içeriden ben kapadım; açacak olan da benim.']],
              },
              ['ic', 'Bu oda bana sığınak mı olacak, yoksa kendi elimle ördüğüm bir duvar mı? Kapıyı bir gün açarsam kimin için, ne için açacağım?'],
              { temizle: true }, { arkaplan: 'kabul_gunu' },
              { goster: ['hanimlar'] },
              {
                eger: kirkIyi,
                ise: [
                  ['h4', 'Sait Efendi\'nin kızı tacirzadeyi de istememiş. Kız kısmı evde kalır mı?'],
                  ['h3', 'Evde kalmadı; evinde durdu. Kardeşi her cuma kapısında.'],
                ],
                degilse: [
                  ['h4', 'Demedim mi? Dili de adı da başına iş açtı.'],
                  ['h1', 'Artık adını anan yok. Penceresinde bir ışık yanıyormuş geceleri; o kadar.'],
                ],
              },
              { temizle: true }, { arkaplan: null },
              { bayrak: { son: 'kirk_yil' } },
            ],
            degilse: [],
          },

          /* ===== SON 3: Telli Duvaklı Sürgün (romandaki gidişat) ===== */
          {
            eger: (S) => S.bayrak.son_karar === 'remzi',
            ise: [
              { temizle: true },
              { kart: 'Sabah.' },
              'Cevabı Hatice\'yle yolladım: "Peki efendim." İki kelime. Babam yine de kapıma gelmedi.',
              { goster: ['calibe', 'gulumser'] },
              'Nikâh kıyıldı. Süha Bey\'in yüzünü gördüm: şaşkın. Hesabında bu yoktu.',
              ['calibe', 'Gördün mü kızım, ben hep senin iyiliğini istedim. Çifte arabalı evin hanımı oluyorsun.', 'gulumser'],
              ['ic', 'Sevindi. Bu evden çıkmam ona yetiyor; hangi kapıdan çıktığımın önemi yok.'],
              { temizle: true },
              ['pa', 'Haber Münevver Hanım\'ın konağına aynı akşam varıyor. Kenan Bey o gece uyumuyor; ertesi gece de. Annesi başucundan ayrılmıyor.'],
              ['pa', 'Oğul sabaha karşı ağlıyor. Annesi elini tutuyor: "Senin için yaşayan annen için yaşa."'],
              { kart: 'Düğüne iki hafta kala.' },
              { faz: 'B', mekanaGit: 'carsi' },
              { kiyafet: 'ferace', kartsiz: true, kilit: 'Sokaktasın: ferace ve yaşmak.' },
              { goster: ['josephine'] },
              'Çeyiz eksiği için çarşıdayım. Yanımda Josephine. Araba kumaşçının önünde durdu.',
              'Aylar sonra ilk kez sokak. Yaşmağın ardından her şey biraz sisli: simitçi, hamal, camekânda bir top al kumaş.',
              ['josephine', 'Tacir hanımı liste vermiş: altı top atlas, dört top kadife. "Fiyatını yüksek sesle sorsun; duyulsun" demiş.'],
              ['ic', 'Duyulsun. Ben artık duyulmak için alınan şeylerden biriyim.'],
              {
                soru: 'Çarşı kalabalık; herkes herkesi görür.',
                secim: [
                  {
                    m: 'Dükkâna girmek; tezgâhın başında seçmek.', etki: { munevver: 1 }, bayrak: { mekan_b7: 'salon' }, iz: 'Dükkânda Münevver Hanım\'la karşılaştın.',
                    adimlar: [
                      'Tezgâhtar topları açtı. Parmağımı atlasın üstünde gezdirdim; soğuktu.',
                      { goster: ['munevver'] },
                      'İçeri Münevver Hanım girdi. İkimiz de donup kaldık. Dükkândaki hanımlar sustu.',
                      'Elini öptüm; yüzümden öptü. Yaşmağımın üstünden, herkesin gözü önünde.',
                      ['munevver', 'Kızım, sen yine benim evladımsın.'],
                      ['f', 'Ne kadar vefasız olduğumu şu yaptığımdan anlasın nineciğim. Benden nefret etsin; böylesinden kurtulduğuna şükretsin.', 'mahzun'],
                      ['munevver', 'Sana yaptırdılar. Sen yapmadın.'],
                      ['munevver', 'Kolun?', 'endiseli'],
                      ['f', 'İyileşti nineciğim.'],
                      ['munevver', 'Nimet her sabah sana dua ediyor. Ben de. Şu maviyi al kızım; sana mavi yaraşır.', 'gulumser'],
                      'Maviyi aldım. Listede yoktu.',
                    ],
                  },
                  {
                    m: 'Arabada beklemek; perdeyi aralamak.', etki: { itibar: 2 }, bayrak: { mekan_b7: 'kenar' }, iz: 'Arabada bekledin. Münevver Hanım elini cama koydu.',
                    adimlar: [
                      'Josephine içeri girdi. Ben arabada kaldım; perdeyi bir parmak araladım.',
                      'Arabanın yanından geçen iki hanım "tacirzadeye varan talihli gelin"i konuşuyordu.',
                      ['h1', 'Altı top atlas alınıyormuş. Talihli kız.'],
                      ['h3', 'Talihliyse perdesi niye kapalı?'],
                      { goster: ['munevver'] },
                      'Münevver Hanım uzaktan gördü. Pencereye geldi. Söz yok; yalnız elini cama koydu. Ben de koydum.',
                      'Cam soğuktu. Ama elin biçimini tanıdım: nişan günü yanağıma değen el.',
                      'Dudakları kıpırdadı. Okudum: "Kızım."',
                      'Sonra Josephine paketlerle döndü. Münevver Hanım kalabalığa karıştı.',
                    ],
                  },
                  {
                    m: 'Dükkânın arka bölmesinde kumaş baktırmak.', etki: { mukaddem: 2, munevver: 1 }, bayrak: { mekan_b7: 'kuytu' }, iz: 'Arka bölmede Münevver Hanım\'la baş başa kaldın.',
                    adimlar: [
                      'Tezgâhtar bizi arka bölmeye aldı: "Hanımefendiler rahat seçsin." Perde indi.',
                      'Perdenin öbür yanında bir ayak sesi durdu. Tezgâhtara bir şey söylendi; tezgâhtar çekildi.',
                      { goster: ['munevver'] },
                      'Arka bölmede Münevver Hanım\'la birkaç dakika. Baş başa.',
                      ['munevver', 'Arabanı gördüm. Girmeden edemedim.'],
                      { eger: (S) => S.bayrak.resim === 'sakladi', ise: [['f', 'Bu resim bende durmasın nineciğim. Onda da durmasın. Sizde dursun.']], degilse: [['f', 'Ona bir söz götürün: nefret etmesin diye değil, yaşasın diye. İnanmadım. Hiç inanmadım.']] },
                      ['munevver', 'Götürürüm. Başka bir şey götüremesem de.'],
                      ['munevver', 'Sen de benden bir söz götür: o kapı sana her zaman açık. Gelin de gitsen, geri de dönsen.', 'gulumser'],
                    ],
                  },
                ],
              },
              {
                eger: (S) => !!S.bayrak.sir_munevver,
                ise: [{
                  eger: (S) => S.bayrak.mekan_b7 === 'kenar',
                  ise: ['Giderken dönüp bir daha baktı. Dudakları bir söz daha söyledi: "Bir gün."', ['ic', 'Bildiğini biliyorum. Bir gün o perde yırtılacak; bugün değil.']],
                  degilse: [['munevver', 'Bildiğimi biliyorsun kızım. Bir gün o perde yırtılacak.']],
                }],
                degilse: [],
              },
              { temizle: true },
              { faz: 'A', mekanaGit: 'buyuk_salon' },
              { kiyafet: 'dugun', kartsiz: true, kilit: 'Gelin odası.' },
              { arkaplan: 'gelin_odasi' },
              { kart: 'İki hafta sonra.' },
              'Sabah babam kuşağımı bağlamaya geldi. Elleri titredi; üç kere doladı, düğümleyemedi. Yüzüme bakmadan çıktı.',
              'Gelin odası. Kapıda izdiham, yırtılan tüller, eteğimin dibine oturan genç kızlar. Bir yıl önce bu kanepede başkası oturuyordu; ben köşede, madalyonum boynumda, seyrediyordum.',
              'Sırmanın ağırlığı omuzlarımda. Gelinliği damat evi gönderdi; ölçümü almadılar, parasını saydılar. Madalyon yakanın içinde; elmasların altında.',
              { eger: (S) => S.bayrak.sefik_hastalik === 'elmas', ise: ['Kulağımda damat evinin küpeleri. Annemin tek kalan küpesi sandığımda, mendile sarılı.'], degilse: [] },
              'Biri eteğime bastı; tül yırtıldı. Üçüncü kez.',
              ['ic', '"Dördüncüyü saymıyorum artık" demişti o gelin. Şimdi anlıyorum.'],
              'Eteğimin dibindeki kızlardan biri fısıldadı: "Gelin hanım, siz hiç gülmüyorsunuz." Ona eğildim.',
              ['f', 'Ben düğünü düşünmüyorum artık. Yarın sabahı düşünüyorum.'],
              ['ic', 'O gelinin sözü. Bir yıl içimde taşımışım; bugün benim oldu. Yarın başka bir evin tavanına bakacağım.'],
              { goster: ['sefik', 'aglamakli'] },
              'Şefik izinli gelmiş. Üniformasıyla kapıda duruyor; içeri girmiyor.',
              ['sefik', 'Abla. Sen misin o?', 'aglamakli'],
              ['f', 'Benim. Gel, eteğimin dibine otur; başka yer kalmadı.'],
              'Gelmedi. Kasketini elinde çevirdi.',
              { eger: (S) => !!S.bayrak.sefik_soz, ise: [['sefik', 'Söz vermiştin. Tatilde beni yeni eve alacaksın.', 'aglamakli'], ['f', 'Şartım o. Onun için buradayım.']], degilse: [] },
              { eger: (S) => (S.gonul.remzi || 0) >= 8, ise: [['ic', 'Bu parıltıya inanmak istedim. Belki severim, dedim. Belki.']], degilse: [['ic', 'Bir kapıdan çıkmak için öbür kapıdan girdim.']] },
              { eger: (S) => !!S.bayrak.bilgi_remzi, ise: [['ic', 'Her şeyi fiyatıyla saydıklarını bilerek geldim. Bilmek hafifletmiyor.']], degilse: [] },
              { gizle: 'sefik' },
              'Akşam. Oda boşaldı. Kapı açıldı: yeni kesilmiş bir ceket, lavanta kokusu, parlak pabuçlar. Yüzü güzel; aynaya çok bakmış bir güzellik.',
              { goster: ['remzi'] },
              'Duvağımı açtı. İlk sözü bana değildi.',
              ['remzi', 'Bu gelinlik Beyoğlu\'nda dikildi; tam altmış liraya. Yüz görümlüğünü de beğenirsin: taşı tek, ama iri.'],
              ['remzi', 'Çarşıda fiyatını duymuşlardır. Yarın herkes konuşur. Sen de memnun kal, olur mu?'],
              ['ic', 'Fiyatını söyledi. Adımı söylemedi.', 'mahzun'],
              ['f', 'Adım Feride efendim.'],
              ['remzi', 'Biliyorum canım. Davetiyeye altın yaldızla yazdırdım.'],
              'Güldü; kendi sözüne, iyi niyetle. Sonra bir şey hatırlamış gibi durdu.',
              ['remzi', 'Küçük bey yarın izinliymiş. Tayı sabah ahırdan çıkartırım. İlk binişte dizginini ben tutarım; korkma, düşürmem.'],
              { eger: (S) => S.bayrak.gorucu_ic === 'umut', ise: [['ic', 'Tay. Annesinin ağzından duymuştum; unutmamış. Merak ettiğim adam belki de bu cümlenin içinde.']], degilse: [['ic', 'Fiyatı söyleyen ağız, bir çocuğun dizginini tutmayı da düşünmüş. Hangisi o, daha bilmiyorum.']] },
              {
                eger: (S) => (S.v.vakar || 0) >= (S.v.isyan || 0),
                ise: [['ic', 'Kaba değil. Kötü de değil. Bu gece baktığı yerde ben yoktum; yarın olur muyum, bilmiyorum. Bu evin kapılarını da öğreneceğim; sabırla, tek tek.']],
                degilse: [['ic', 'Kaba değil. Kötü de değil. Bu gece baktığı yerde ben yoktum. Altmış lira dedi; insanın fiyatla ölçülmediğini ona ben söyleyeceğim. Dinlerse, o zaman bakarız.']],
              },
              ['ic', 'Bu yeni hayatta neyi gerçekten sevebileceğim, neyin bedelini ödeyeceğim? İkisini de bu evde öğreneceğim.'],
              { temizle: true }, { arkaplan: 'kabul_gunu' },
              { goster: ['hanimlar'] },
              ['h1', 'Şu sarışın gelin kimin nesi? Sabahtan beri yüzü bir kere gülmedi.'],
              ['h2', 'Sait Efendi\'nin kızı. Tacirzadeye varmış; çifte arabası, yedi sekiz hizmetçisi varmış.'],
              ['h3', 'Telli duvaklı; ama gözleri uzakta.'],
              ['h4', 'Gelin dediğin gülmez. Talihli kız.'],
              { temizle: true }, { arkaplan: null },
              { bayrak: { son: 'telli_duvakli' } },
            ],
            degilse: [],
          },

          { kart: '1. Sezonun sonu' },
          { bolumSonu: true },
        ],
      },
    ],

    merak: '2. sezonda devam edecek.',

    // Sezon sonu başlığı: motor bunu "7. Bölüm tamamlandı" yerine gösterir
    sonAdi: (S) => (S.bayrak.son === 'perde' ? 'Perde Yırtıldı' : (S.bayrak.son === 'telli_duvakli' ? 'Yeni Ev' : 'Kırk Yıl')),

    sonNotu: function (S) {
      const b = S.bayrak, p = [];
      let soru;
      if (b.son === 'perde') {
        p.push('Babama her şeyi yazdım. Bu kez yanımda konuşacak insanlar vardı; bunca ayda tek tek kazandıklarım.');
        p.push('Perde yırtıldı. Perihan Hanım gitti, Süha Bey gitti. Babam yüzüme baktı. Onu henüz affetmedim.');
        p.push('Şefik\'i mektepten ben aldım. Münevver Hanım\'ın kapıyı çalışını bu kez çeviren olmadı.');
        soru = 'Yırtılan perde neyi onaracak, neyi onaramayacak?';
      } else if (b.son === 'kirk_yil') {
        p.push(b.ifsa_denendi ? 'Babama yazdım; "Delilsiz söz iftiradır" diye geri yolladı. Elimdekiler yetmedi.' : 'Kimseye bir şey yazmadım. Kimseyi de kabul etmedim.');
        p.push('"Kırk yıl kız otururum" dedim. Odamdayım. Cumaları Şefik geliyor.');
        p.push('Kimsenin açtığı kapıdan çıkmadım. Bedeli bu oda.');
        soru = 'Bu oda sığınak mı olacak, duvar mı; kapıyı bir gün kimin için açacağım?';
      } else {
        p.push(b.ifsa_denendi ? 'Babama yazdım; "Delilsiz söz iftiradır" diye geri yolladı. Sonra açık kalan tek kapıdan çıktım.' : 'Remzi Bey\'i kabul ettim. Şefik\'in izin günleri için.');
        p.push('Çarşıda Münevver Hanım\'ı gördüm. "Sana yaptırdılar; sen yapmadın" dedi.');
        p.push('Telli duvaklı çıktım o evden. Kocam duvağımı açınca önce gelinliğin fiyatını söyledi; sonra Şefik\'e ayırdığı tayı.');
        soru = 'Bu yeni hayatta neyi gerçekten sevebileceğim, neyin bedelini ödeyeceğim?';
      }
      if (b.son === 'perde') p.push(b.sefik_veda === 'soz' ? 'Şefik\'e verdiğim sözü tuttum.' : 'Artık cuma saymıyoruz.');
      else p.push(b.sefik_veda === 'soz' ? 'Şefik\'e bir söz verdim: nerede olursam olayım, onu almaya geleceğim.' : 'Şefik\'le cumaları sayıyoruz.');
      p.push(soru);
      return p.join(' ');
    },
  };
})();

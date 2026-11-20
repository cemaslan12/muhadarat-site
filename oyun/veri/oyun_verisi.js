/* =========================================================================
   MUHADARAT: ortak oyun verisi
   Karakterler, mekânlar ve kıyafetler burada tanımlanır.
   Görseli olmayan karakterler oyunda ad harfiyle bir çerçeve olarak görünür.
   ========================================================================= */
window.OYUN_VERISI = {
  ayar: {
    takatSinirsiz: true,   // prototipte takat bitmez
    takatAzami: 10,
    baslangicParasi: 20,   // kuruş değil, lira
    // Gönül çubuğu (yalnız doğrusal bölüm, oynanış T1 A2): ham puan saklanır, çubuk bu puanda dolu çizilir.
    // Etki değerleri ve okunan eşikler (ör. remzi >= 50) ham puandan okunur; ölçek yalnız gösterimdir.
    // Ölçek dengesi (doğrulama b1–4 madde 3, ekonomi.js ham dağılımı): rotasını seçen oyuncu (rastgele ile
    // romantik arası) 8. bölümde ~%64, 16'da ~%85; rastgele 50→63, romantik 77→100 (15–16'da dolar).
    // Remzi 200: Kenan/Süha yolunda Remzi çubuğu adayın önüne geçmez (15. bölüm eşiği remzi >= 50 = %25).
    gonulOlcegi: { mukaddem: 300, suha: 350, remzi: 200 },
    // Görünme eşiği (ham puan): Remzi çubuğu üstte ve bölüm sonunda ancak bu puandan sonra belirir
    // (1. bölümün zorunlu +5'i ve tek seçimi 11'i geçmez; Remzi'ye bir kez daha yönelen oyuncuda görünür)
    gonulGorunmeEsigi: { remzi: 12 },
    gonulTavan: 400,       // saklanan ham gönül puanının üst sınırı (doğrusal bölüm)
    gonulBasamak: 20,      // çubuğun her %20'si bir basamak (lale); geçilince kısa bildirim
  },

  /* ---------------------------------------------------------------------
     KARAKTERLER
     ad: ekranda görünen ad; renk: konuşan adının rengi
     gorsel: ifade -> dosya yolu; varsayilan: sahnede gösterilen ifade
     ------------------------------------------------------------------- */
  karakterler: {
    f:        { ad: "Feride", renk: "#e8c66a",
                gorsel: { mahzun: "gorsel/karakter/fazila_mahzun.webp", gulumseyen: "gorsel/karakter/fazila_gulumseyen.webp",
                          utanmis: "gorsel/karakter/fazila_utanmis.webp", ofkeli: "gorsel/karakter/fazila_ofkeli.webp" },
                varsayilan: "mahzun" },
    calibe:   { ad: "Perihan Hanım", renk: "#d4626a",
                gorsel: { soguk: "gorsel/karakter/calibe_soguk.webp", gulumser: "gorsel/karakter/calibe_gulumser.webp",
                          ofkeli: "gorsel/karakter/calibe_ofkeli.webp", saskin: "gorsel/karakter/calibe_saskin.webp" },
                varsayilan: "gulumser" },
    fevkiye:  { ad: "Leyla", renk: "#e59ab0", gorsel: { ana: "gorsel/karakter/fevkiye_ana.webp" }, varsayilan: "ana" },
    munevver: { ad: "Münevver Hanım", renk: "#8fb9a8", gorsel: { ana: "gorsel/karakter/munevver_ana.webp" }, varsayilan: "ana" },
    sai:      { ad: "Sait Efendi", renk: "#b0a080", gorsel: { ana: "gorsel/karakter/sai_ana.webp" }, varsayilan: "ana" },
    sefik:    { ad: "Şefik", renk: "#9ec9e8", gorsel: { ana: "gorsel/karakter/sefik_ana.webp" }, varsayilan: "ana" },
    suha:     { ad: "Süha Bey", renk: "#8f9fb6", gorsel: { ana: "gorsel/karakter/suha_ana.webp" }, varsayilan: "ana" },
    nabi:     { ad: "Nabi Bey", renk: "#d08a4a", gorsel: { ana: "gorsel/karakter/nabi_ana.webp" }, varsayilan: "ana" },
    mehves:   { ad: "Nimet", renk: "#b9c4a0", gorsel: { ana: "gorsel/karakter/mehves_ana.webp" }, varsayilan: "ana" },
    reftar:   { ad: "Hatice", renk: "#a58fb0", gorsel: { ana: "gorsel/karakter/reftar_ana.webp" }, varsayilan: "ana" },
    mefharet: { ad: "Nazlı", renk: "#e0a0a0", gorsel: { ana: "gorsel/karakter/mefharet_ana.webp" }, varsayilan: "ana" },
    gelin:    { ad: "Gelin Hanım", renk: "#f0e0e0", gorsel: { ana: "gorsel/karakter/gelin_ana.webp" }, varsayilan: "ana" },
    hanimlar: { ad: "Dedikoducu hanımlar", renk: "#c9a0dc", grup: true, gorsel: { ana: "gorsel/karakter/hanimlar_ana.webp" }, varsayilan: "ana" },
    h1:       { ad: "Meraklı Hanım", renk: "#c9a0dc" },
    h2:       { ad: "Bilgiç Hanım", renk: "#a0c4dc" },
    h3:       { ad: "Yufka Yürekli Hanım", renk: "#dcc9a0" },
    h4:       { ad: "Hüküm Veren Hanım", renk: "#dca0a0" },
    resim:    { ad: "Annemin resmi", renk: "#e8c66a", esya: true, harf: "❦" },
    // 1. bölüm: kalabalık ve bakılacak eşyalar
    davetliler:  { ad: "Davetli hanımlar", renk: "#d8b4c8", grup: true, gorsel: { ana: "gorsel/karakter/davetliler_ana.webp" }, varsayilan: "ana" },
    cesme:       { ad: "Eski çeşme", renk: "#9fb8c0", esya: true, harf: "≈" },
    ayna:        { ad: "Sofanın aynası", renk: "#c8c0a8", esya: true, harf: "◊" },
    sofra:       { ad: "Yemek sofrası", renk: "#c8a878", esya: true, harf: "⌓" },
    salon_resmi: { ad: "Duvardaki resim", renk: "#d4626a", esya: true, harf: "▣" },
    piyano:      { ad: "Piyano", renk: "#e8c66a", esya: true, harf: "♪" },
    kitap:       { ad: "Resimli kitap", renk: "#a8c0e0", esya: true, harf: "❧" },
    murekkep_resim: { ad: "Şefik'in resmi", renk: "#9a7ab8", esya: true, harf: "~" },
    gerdanlik:   { ad: "Nişan gerdanlığı", renk: "#e8e0f0", esya: true, harf: "◇" },
    madalyon:    { ad: "Annemin madalyonu", renk: "#c9a24a", esya: true, harf: "B" },
    // Feride'nin kıyafete göre portre setleri (kiyafetler[...].portre ile seçilir; tek başına sahneye çıkmaz)
    fpembe:      { ad: "Feride", renk: "#f0c8d8" },
    fmavi:       { ad: "Feride", renk: "#a8c8e8" },
    fsade:       { ad: "Feride", renk: "#ece4d0" },
    faksam:      { ad: "Feride", renk: "#c8b8dc" },
    fgecelik:    { ad: "Feride", renk: "#f4f0ea" },
    fferace:     { ad: "Feride", renk: "#b8d8c8" },
    mukaddem_foto: { ad: "Kenan Bey'in resmi", renk: "#c8b890", esya: true, harf: "▭" },
    // 2. bölüm
    naile:    { ad: "Naile Hanım", renk: "#b89ab0" },
    pusula:        { ad: "İmzasız pusula", renk: "#d8cfa8", esya: true, harf: "✉" },
    mukaddem_avlu: { ad: "Avluda Kenan Bey", renk: "#8fa8c8", esya: true, harf: "M" },
    mukaddem_not:  { ad: "Kenan Bey'in notu", renk: "#d8cfa8", esya: true, harf: "M" },
    josephine: { ad: "Madam Josephine", renk: "#c4b2e0" },
    oiselle:  { ad: "Madam Oiselle", renk: "#a0a0b8" },
    hizmetci: { ad: "Hizmetçi kız", renk: "#c0b090", gorsel: { ana: "gorsel/karakter/hizmetci_ana.webp" }, varsayilan: "ana" },
    asci:     { ad: "Aşçı kadın", renk: "#c8a878" },
    komsu_konak: { ad: "Komşu konağın pencereleri", renk: "#8fb9a8", esya: true, harf: "⌂" },
    // 3. bölüm
    fevkiye_annesi: { ad: "Leyla'nın annesi", renk: "#9fb88f", gorsel: { ana: "gorsel/karakter/fevkiye_annesi_ana.webp" }, varsayilan: "ana" },
    usak:     { ad: "Uşak", renk: "#b8a888" },
    // 4-7. bölüm
    tacir_hanimi: { ad: "Tacir Hanımı", renk: "#d0a070" },
    cikikci:  { ad: "Çıkıkçı kadın", renk: "#b0a090" },
    sahte_mektup: { ad: "Kurşun kalemle yazılmış mektup", renk: "#c8c0b0", esya: true, harf: "✎" },
    yelpaze:  { ad: "Paris işi yelpaze", renk: "#e8d0c0", esya: true, harf: "❋" },
    dugme:    { ad: "Çiçekli yelek düğmesi", renk: "#c9a24a", esya: true, harf: "◉" },
    bahce_izler: { ad: "Yoldaki izler", renk: "#c8b890", esya: true, harf: "⁂" },
    // Yeni biçim denemesi (pilot1.js)
    ses:           { ad: "Yukarıdan bir ses", renk: "#a8c0e0" },
    arabaci:       { ad: "Arabacı", renk: "#b8a888" },
    yabanci_hanim: { ad: "Yabancı hanım", renk: "#d0a070" },
    seker_kutusu:  { ad: "Menekşe şekeri kutusu", renk: "#b9a0d8", esya: true, harf: "❀" },
    // Talipler (Defter'de görünür)
    mukaddem: { ad: "Kenan Bey", renk: "#a8c0e0", gorsel: { ana: "gorsel/karakter/mukaddem_ana.webp" }, varsayilan: "ana" },
    remzi:    { ad: "Remzi Bey", renk: "#e0b080" },
    remzi_anne: { ad: "Remzi Bey'in annesi", renk: "#c9a46a" },
    sadberk:  { ad: "Sadberk Hanım", renk: "#d98c8c" },
    halim:    { ad: "Halim Efendi", renk: "#b0c8a0" },
  },

  /* Talipler: Defter'deki gönül sayfası bu sırayla gösterir */
  talipler: ["mukaddem", "remzi", "halim", "suha"],

  /* ---------------------------------------------------------------------
     MEKÂNLAR
     ------------------------------------------------------------------- */
  mekanlar: {
    dugun_sofa:   { ad: "Düğün evinin sofası", arkaplan: "gorsel/arkaplan/dugun_sofa.webp" },
    dugun_bahce:  { ad: "Düğün evinin bahçesi", arkaplan: "gorsel/arkaplan/dugun_bahce.webp" },
    dugun_kose:   { ad: "Bahçenin kuytu köşesi", arkaplan: "gorsel/arkaplan/dugun_kose.webp" },
    gelin_odasi:  { ad: "Gelin odası", arkaplan: "gorsel/arkaplan/gelin_odasi.webp" },
    konak_sofa:   { ad: "Konağın sofası", arkaplan: "gorsel/arkaplan/konak_sofa.webp" },
    fazila_oda:   { ad: "Feride'nin odası", arkaplan: "gorsel/arkaplan/fazila_oda.webp" },
    yemek_salonu: { ad: "Yemek salonu", arkaplan: "gorsel/arkaplan/yemek_salonu.webp" },
    buyuk_salon:  { ad: "Büyük salon", arkaplan: "gorsel/arkaplan/buyuk_salon.webp" },
    mutfak:       { ad: "Mutfak", arkaplan: "gorsel/arkaplan/mutfak.webp" },
    suha_oda:     { ad: "Koridorun öbür ucu", arkaplan: "gorsel/arkaplan/suha_oda.webp" },
    // 2. bölüm
    josephine_oda:   { ad: "Madam'ın odası", arkaplan: "gorsel/arkaplan/josephine_oda.webp" },
    calibe_oda:      { ad: "Perihan Hanım'ın odası", arkaplan: "gorsel/arkaplan/calibe_oda.webp" },
    konak_bahce:     { ad: "Konağın bahçesi", arkaplan: "gorsel/arkaplan/konak_bahce.webp" },
    selamlik_kapisi: { ad: "Selamlık kapısı", arkaplan: "gorsel/arkaplan/selamlik_kapisi.webp" },
    kabul_gunu:      { ad: "Bir kabul günü", arkaplan: "gorsel/arkaplan/kabul_gunu.webp" },
    // 3. bölüm
    // Aynı odaların gündüz ışıklı fonları (bölümlerin fon() kancasıyla seçilir; görsel yoksa gece fonu kalır)
    fazila_oda_gunduz:  { ad: "Odam", arkaplan: null },
    buyuk_salon_gunduz: { ad: "Büyük salon", arkaplan: null },
    konak_sofa_gunduz: { ad: "Konağın sofası", arkaplan: null },
    anlati_sezon1: { ad: "İstanbul, 1893", arkaplan: null },
    fevkiye_konak:    { ad: "Leyla'ların konağı, taşlık", arkaplan: "gorsel/arkaplan/fevkiye_konak.webp" },
    fevkiye_anne_oda: { ad: "Hanımefendinin odası", arkaplan: "gorsel/arkaplan/fevkiye_anne_oda.webp" },
    fevkiye_oda:      { ad: "Leyla'nın odası", arkaplan: "gorsel/arkaplan/fevkiye_oda.webp" },
    // 4. bölüm: Büyükada (görseller sonra; görsel yokken ad yazılı düz fon çıkar)
    ada_sofa:    { ad: "Ada evi, sofa", arkaplan: null },
    ada_oda:     { ad: "Ada evi, üst kattaki oda", arkaplan: null },
    ada_camlik:  { ad: "Çamlık", arkaplan: null },
    ada_bahce:   { ad: "Ada evinin bahçesi", arkaplan: null },
    // 7. bölüm
    carsi:       { ad: "Çarşı, kumaşçının önü", arkaplan: null },
    // Yeni biçim denemesi (görseli gelene kadar pilot1.js en yakın eski fonu bağlar)
    mabeyn_merdiven: { ad: "Ara kapı merdiveni", arkaplan: null },
    limonluk:        { ad: "Limonluk", arkaplan: null },
    konak_kapi:      { ad: "Düğün evinin kapısı", arkaplan: null },
    araba_ici:       { ad: "Arabanın içi", arkaplan: null },
    // Yeni 3. bölüm (görseli gelene kadar pilot3.js en yakın eski fonu bağlar)
    mabeyn_kapisi:   { ad: "Mabeyn kapısı", arkaplan: null },
    sari_oda:        { ad: "Sarı oda", arkaplan: null },
    // Yeni 4. bölüm (görseli gelene kadar pilot4.js en yakın eski fonu bağlar)
    fevkiye_kapi:    { ad: "Leyla'ların kapısı", arkaplan: null },
    // Yeni 5. bölüm (görseli gelene kadar pilot5.js gündüz bahçe fonunu bağlar)
    cardak:          { ad: "Bahçedeki çardak", arkaplan: null },
    // Yeni 6. bölüm (görseli gelene kadar pilot6.js gece sofası fonunu bağlar)
    bahce_gece:      { ad: "Gece, bahçe kapısının önü", arkaplan: null },
    // Tur 27: konak bahçesinin gece resmi (konak_bahce ile aynı kompozisyon; motor gece sahnesinde gündüz resmi
    // yerine bunu gösterir, plan_konak.js esdeger'i aynı düğüme bağlar)
    konak_bahce_gece: { ad: "Konağın bahçesi", arkaplan: null },
    // Resmi bekleyen gece çiftleri (gorsel_eksik_listesi G30): gelince motor gece sahnesinde kendiliğinden gösterir
    cardak_gece:      { ad: "Bahçedeki çardak", arkaplan: null },
    limonluk_gece:    { ad: "Limonluk", arkaplan: null },
    // Yeni 7. bölüm (görseli gelene kadar pilot7.js en yakın eski fonu bağlar)
    vapur_guverte:   { ad: "Ada vapuru, kadınlar bölmesinin kıçı", arkaplan: null },
    ada_iskele:      { ad: "Ada iskelesi", arkaplan: null },
    // Yeni 8. bölüm (görseli gelene kadar pilot8.js gece fonu bağlar)
    ada_camlik_gece: { ad: "Çamlık, mehtapta", arkaplan: null },
    ada_bahce_gece:  { ad: "Ada evinin bahçesi, gece", arkaplan: null },
    ada_mutfak_gece: { ad: "Ada evi, mutfak (gece)", arkaplan: null },
    ada_selamlik:    { ad: "Ada evi, selamlık", arkaplan: null },
    ada_misafir:     { ad: "Ada evi, misafir odası", arkaplan: null },
    ada_kapi_perihan: { ad: "Perihan Hanım'ın kapısı", arkaplan: null },
    // Yeni 9. bölüm (görseli gelene kadar pilot9.js en yakın eski fonu bağlar)
    ada_sofa_gunduz: { ad: "Ada evi, sofa", arkaplan: null },
    ada_duvar:       { ad: "Bahçe duvarı, asmanın altı", arkaplan: null },
    ada_mutfak:      { ad: "Ada evi, mutfak", arkaplan: null },
    // Yeni 10. bölüm (görseli gelene kadar pilot10.js en yakın eski fonu bağlar)
    ada_iskele_aksam: { ad: "Ada iskelesi, akşam fenerleri", arkaplan: null },
    // Yeni 11. bölüm (görseli gelene kadar pilot11.js gündüz büyük salon fonunu bağlar)
    ada_selamlik_gunduz: { ad: "Ada evi, selamlık", arkaplan: null },
    // Gezinmenin 7–10. bölümlere yaygınlaşması (16 Kasım 2026): ışık çeşitleri
    ada_oda_gece:       { ad: "Ada evi, odam", arkaplan: null },
    ada_misafir_gunduz: { ad: "Ada evi, misafir odası", arkaplan: null },
    ada_selamlik_gece:  { ad: "Ada evi, selamlık", arkaplan: null },
    // Konak planının geçit mekânları (veri/plan_konak.js; görseli gelene kadar oradaki YEDEK en yakın fonu bağlar)
    taslik:          { ad: "Taşlık", arkaplan: null },
    // Geçit mekânlarının gündüz ışıklı fonları (plan_konak.js esdeger: aynı düğüm; bölümün fon() kancası seçer)
    taslik_gunduz:   { ad: "Taşlık", arkaplan: null },
    mutfak_gunduz:   { ad: "Mutfak", arkaplan: null },
    // Gezinmenin 3–6. bölümlere yaygınlaşması (16 Kasım 2026): gündüz çeşitleri
    mabeyn_kapisi_gunduz:   { ad: "Mabeyn kapısı", arkaplan: null },
    mabeyn_merdiven_gunduz: { ad: "Ara kapı merdiveni", arkaplan: null },
    selamlik_sofa_gunduz:   { ad: "Selamlık sofası", arkaplan: null },
    selamlik_kapisi_gunduz: { ad: "Selamlık kapısı", arkaplan: null },
    yemek_salonu_gunduz:    { ad: "Yemek salonu", arkaplan: null },
    josephine_oda_gunduz:   { ad: "Madam'ın odası", arkaplan: null },
    calibe_oda_gunduz:      { ad: "Perihan Hanım'ın odası", arkaplan: null },
    konak_avlu:      { ad: "Avlu kapısı", arkaplan: null },
    selamlik_sofa:   { ad: "Selamlık sofası", arkaplan: null },
    baba_oda:        { ad: "Babamın odası", arkaplan: null },
    baba_oda_gunduz: { ad: "Babamın odası", arkaplan: null },
  },

  /* ---------------------------------------------------------------------
     KIYAFETLER (Feride). Her kıyafet bütün bir takımdır.
     gorsel: o kıyafetle portre (yoksa yer tutucu)
     ------------------------------------------------------------------- */
  kiyafetler: {
    dugun:  { ad: "Düğün evi kıyafeti", aciklama: "Krem rengi, yerlere kadar elbise; beyaz boncuk ve inci işlemeli. Tek örgü, elmaslı tarak, annesinin madalyonu.",
              gorsel: "gorsel/karakter/g_fazila_ana.webp", kitaptan: true },
    ev:     { ad: "Gündelik ev kıyafeti", aciklama: "Düğünden dönünce giyilen sade ev kıyafeti.", gorsel: null },
    ferace: { ad: "Ferace ve yaşmak", aciklama: "Sokağa çıkarken giyilir: su yeşili düz ipek ferace, ince beyaz iki parça yaşmak, açık renk eldiven. Sahnede giydirilir.", gorsel: "gorsel/karakter/g_fferace_ana.webp", portre: "fferace", kilitli: true },
    // 2. bölüm: nişan ziyareti (ev içi; baş açık, tek örgü)
    nisan_sade:       { ad: "Fildişi ipekli", aciklama: "Düz fildişi ipekli; kapalı dik yaka, uzun dar kol, süssüz. Tek örgü. Tek takı annesinin madalyonu; o da yakanın içinde saklı.", gorsel: "gorsel/karakter/g_fsade_ana.webp", portre: "fsade" },
    // portre: bu kıyafet giyiliyken Feride'nin sahnedeki portre seti (karakterler.fpembe / fmavi)
    nisan_gosterisli: { ad: "Pembe tafta", aciklama: "Terziden yeni gelen açık pembe tafta; göğsü büzgülü tül ve beyaz boncuk işli. Tek taş küpe, pırlanta bilezik; tek örgüsünde elmaslı tarak ve pembe güller, elinde fildişi yelpaze.", gorsel: "gorsel/karakter/g_fpembe_ana.webp", portre: "fpembe" },
    nisan_yadigar:    { ad: "Annemin gök mavisi ipeklisi", aciklama: "Annesi Behiye'nin gök mavisi ipeklisi; Feride'ye göre daraltılmış, kesimi yirmi yıl öncesinin, yakasında ince dantel. Göğsünde annesinin madalyonu, örgüsünde yasemin.", gorsel: "gorsel/karakter/g_fmavi_ana.webp", portre: "fmavi" },
    // 3. bölüm (kostum_plani.md: FAZILA-04, FAZILA-06, FAZILA-05)
    aksam:   { ad: "Akşam ev elbisesi", aciklama: "Soluk leylak, ince yünlü ipekli, iki parça; çeneye kadar kapalı dik yaka, boğazda küçük beyaz dantel, uzun kol. Ayağında topuğunun altı sarı demirli siyah iskarpin.", gorsel: "gorsel/karakter/g_faksam_ana.webp", portre: "faksam" },
    gecelik: { ad: "Beyaz gecelik", aciklama: "Bileğe inen bol beyaz pamuklu gecelik; uzun kol, kapalı küçük yaka; belde pembe kurdele. Kendi işlediği pembe atlas terlikler. Örgü yarı çözük.", gorsel: "gorsel/karakter/g_fgecelik_ana.webp", portre: "fgecelik", kitaptan: true },
    ziyaret: { ad: "Buz mavisi ziyaret elbisesi", aciklama: "Buz mavisi ipek, iki parça; çeneye kadar kapalı dantel yaka, önde sedef düğmeler, kuyruksuz etek. Misafirlikte feracenin altında giyilir.", gorsel: null },
  },

  /* Bölüm sonu ödül çizimleri (görseli gorseller.js bağlar; görseli olmayan çizim açılmaz) */
  cizimler: {
    annesinin_resmi: { ad: "Feride, annesinin resmi önünde", alt: "Birinci Bölüm · Düğün Evi" },
    gerdanlik:       { ad: "Feride, boynunda nişan gerdanlığı", alt: "İkinci Bölüm · Gerdanlık" },
    topuk:           { ad: "Ay ışığında sarı demirli iskarpin", alt: "Üçüncü Bölüm · Topuk İzi" },
    // Yeni biçim: an resimleri (rotaya göre biri açılır)
    an_merdiven:     { ad: "Merdiven başında, dört basamak", alt: "Düğün Evi · Kenan" },
    an_limonluk:     { ad: "Limonlukta menekşe şekeri", alt: "Düğün Evi · Süha" },
    // Kıyafete göre çeşitler (motor, a.cizim + '_' + giyili varsa onu gösterir)
    an_merdiven_nisan_gosterisli: { ad: "Merdiven başında, dört basamak", alt: "Düğün Evi · Kenan" },
    an_merdiven_nisan_yadigar:    { ad: "Merdiven başında, dört basamak", alt: "Düğün Evi · Kenan" },
    an_limonluk_nisan_gosterisli: { ad: "Limonlukta menekşe şekeri", alt: "Düğün Evi · Süha" },
    an_limonluk_nisan_yadigar:    { ad: "Limonlukta menekşe şekeri", alt: "Düğün Evi · Süha" },
    an_pusula:       { ad: "Kandil ışığında, yirmi üçüncü sayfa", alt: "Konak Akşamı · Kenan" },
    an_piyano:       { ad: "Piyanonun öbür ucunda Süha Bey", alt: "Konak Akşamı · Süha" },
    an_mabeyn:       { ad: "Mabeyn kapısında kadife kutu", alt: "Gerdanlık · Kenan" },
    an_kilit:        { ad: "Ensede gerdanlığın kilidi", alt: "Gerdanlık · Süha" },
    an_gerdanlik:    { ad: "Boynunda nişan gerdanlığı", alt: "Gerdanlık" },
    an_gerdanlik_nisan_gosterisli: { ad: "Boynunda nişan gerdanlığı", alt: "Gerdanlık" },
    an_gerdanlik_nisan_yadigar:    { ad: "Boynunda nişan gerdanlığı", alt: "Gerdanlık" },
    // Yeni 4. bölüm (görseller sonra; görsel yokken yazılı kart çıkar)
    an_pakt:         { ad: "Romanın kapağında iki el", alt: "Pakt" },
    an_pakt_nisan_gosterisli: { ad: "Romanın kapağında iki el", alt: "Pakt" },
    an_pakt_nisan_yadigar:    { ad: "Romanın kapağında iki el", alt: "Pakt" },
    an_eldiven:      { ad: "Arabanın basamağında düşen eldiven", alt: "Pakt · Kenan" },
    an_eldiven_nisan_gosterisli: { ad: "Arabanın basamağında düşen eldiven", alt: "Pakt · Kenan" },
    an_eldiven_nisan_yadigar:    { ad: "Arabanın basamağında düşen eldiven", alt: "Pakt · Kenan" },
    an_araba:        { ad: "Kapalı perdenin ardında iki parmak", alt: "Pakt · Süha" },
    an_araba_nisan_gosterisli: { ad: "Kapalı perdenin ardında iki parmak", alt: "Pakt · Süha" },
    an_araba_nisan_yadigar:    { ad: "Kapalı perdenin ardında iki parmak", alt: "Pakt · Süha" },
    // Yeni 5. bölüm (görseller sonra; görsel yokken yazılı kart çıkar)
    an_cardak:       { ad: "Çardakta aynı sayfada iki el", alt: "Hekim · Kenan" },
    an_cardak_nisan_gosterisli: { ad: "Çardakta aynı sayfada iki el", alt: "Hekim · Kenan" },
    an_cardak_nisan_yadigar:    { ad: "Çardakta aynı sayfada iki el", alt: "Hekim · Kenan" },
    an_roman:        { ad: "Çardakta Paris romanı", alt: "Hekim · Süha" },
    an_roman_nisan_gosterisli: { ad: "Çardakta Paris romanı", alt: "Hekim · Süha" },
    an_roman_nisan_yadigar:    { ad: "Çardakta Paris romanı", alt: "Hekim · Süha" },
    an_surup:        { ad: "Lamba ışığında bir bardak şurup", alt: "Hekim" },
    an_surup_nisan_gosterisli: { ad: "Lamba ışığında bir bardak şurup", alt: "Hekim" },
    an_surup_nisan_yadigar:    { ad: "Lamba ışığında bir bardak şurup", alt: "Hekim" },
    // Yeni 6. bölüm (görseller sonra; görsel yokken yazılı kart çıkar)
    an_topuk:        { ad: "Fener ışığında sarı demirli topuk", alt: "Topuk ve Nabız" },
    an_topuk_nisan_gosterisli: { ad: "Fener ışığında sarı demirli topuk", alt: "Topuk ve Nabız" },
    an_topuk_nisan_yadigar:    { ad: "Fener ışığında sarı demirli topuk", alt: "Topuk ve Nabız" },
    an_nabiz:        { ad: "Lamba ışığında nabız", alt: "Topuk ve Nabız · Süha" },
    an_nabiz_nisan_gosterisli: { ad: "Lamba ışığında nabız", alt: "Topuk ve Nabız · Süha" },
    an_nabiz_nisan_yadigar:    { ad: "Lamba ışığında nabız", alt: "Topuk ve Nabız · Süha" },
    an_iskarpin:     { ad: "Mabeyn kapısında diz çöken adam", alt: "Topuk ve Nabız · Kenan" },
    an_iskarpin_nisan_gosterisli: { ad: "Mabeyn kapısında diz çöken adam", alt: "Topuk ve Nabız · Kenan" },
    an_iskarpin_nisan_yadigar:    { ad: "Mabeyn kapısında diz çöken adam", alt: "Topuk ve Nabız · Kenan" },
    // Yeni 7. bölüm (görseller sonra; görsel yokken yazılı kart çıkar)
    an_vapur:        { ad: "Vapurun kıçında, perdenin iki yanı", alt: "Ada Vapuru · Kenan" },
    an_vapur_nisan_gosterisli: { ad: "Vapurun kıçında, perdenin iki yanı", alt: "Ada Vapuru · Kenan" },
    an_vapur_nisan_yadigar:    { ad: "Vapurun kıçında, perdenin iki yanı", alt: "Ada Vapuru · Kenan" },
    an_yasmak:       { ad: "Hekimin parmaklarında yaşmağın ucu", alt: "Ada Vapuru · Süha" },
    an_yasmak_nisan_gosterisli: { ad: "Hekimin parmaklarında yaşmağın ucu", alt: "Ada Vapuru · Süha" },
    an_yasmak_nisan_yadigar:    { ad: "Hekimin parmaklarında yaşmağın ucu", alt: "Ada Vapuru · Süha" },
    an_tepsi:        { ad: "Gece yarısı, eşikte bir tepsi", alt: "Ada Vapuru · Kenan" },
    an_tepsi_nisan_gosterisli: { ad: "Gece yarısı, eşikte bir tepsi", alt: "Ada Vapuru · Kenan" },
    an_tepsi_nisan_yadigar:    { ad: "Gece yarısı, eşikte bir tepsi", alt: "Ada Vapuru · Kenan" },
    // Yeni 8. bölüm (görseller sonra; görsel yokken yazılı kart çıkar)
    an_mehtap:       { ad: "Mehtapta çamlık, bir soru", alt: "Ada Gecesi · Kenan" },
    an_mehtap_nisan_gosterisli: { ad: "Mehtapta çamlık, bir soru", alt: "Ada Gecesi · Kenan" },
    an_mehtap_nisan_yadigar:    { ad: "Mehtapta çamlık, bir soru", alt: "Ada Gecesi · Kenan" },
    an_camlik:       { ad: "Ayın değmediği yerde bir soru", alt: "Ada Gecesi · Süha" },
    an_camlik_nisan_gosterisli: { ad: "Ayın değmediği yerde bir soru", alt: "Ada Gecesi · Süha" },
    an_camlik_nisan_yadigar:    { ad: "Ayın değmediği yerde bir soru", alt: "Ada Gecesi · Süha" },
    // Geri çekilen yol: temas yok, eli havada kalır
    an_camlik_ret:   { ad: "Ayın değmediği yerde, havada kalan el", alt: "Ada Gecesi · Süha" },
    // Elbise çeşidi henüz çizilmedi: görselsiz çeşit motorda krem resme düşer
    an_camlik_ret_nisan_gosterisli: { ad: "Ayın değmediği yerde, havada kalan el", alt: "Ada Gecesi · Süha" },
    an_camlik_ret_nisan_yadigar:    { ad: "Ayın değmediği yerde, havada kalan el", alt: "Ada Gecesi · Süha" },
    // Yeni 9. bölüm (görseller sonra; görsel yokken yazılı kart çıkar)
    an_duvar:        { ad: "Bahçe duvarında iki el", alt: "İftira · Kenan" },
    an_duvar_nisan_gosterisli: { ad: "Bahçe duvarında iki el", alt: "İftira · Kenan" },
    an_duvar_nisan_yadigar:    { ad: "Bahçe duvarında iki el", alt: "İftira · Kenan" },
    an_pazarlik:     { ad: "Asmanın gölgesinde bir pazarlık", alt: "İftira · Süha" },
    an_pazarlik_nisan_gosterisli: { ad: "Asmanın gölgesinde bir pazarlık", alt: "İftira · Süha" },
    an_pazarlik_nisan_yadigar:    { ad: "Asmanın gölgesinde bir pazarlık", alt: "İftira · Süha" },
    an_avuc:         { ad: "Babamın uzanan avucu", alt: "İftira" },
    an_avuc_nisan_gosterisli: { ad: "Babamın uzanan avucu", alt: "İftira" },
    an_avuc_nisan_yadigar:    { ad: "Babamın uzanan avucu", alt: "İftira" },
    // Yeni 10. bölüm (görseller sonra; görsel yokken yazılı kart çıkar). Dört anda da el teması yok.
    an_veda:         { ad: "Küpeşte ile iskele arasında", alt: "Veda ve Gizli Teklif · Kenan" },
    an_veda_nisan_gosterisli: { ad: "Küpeşte ile iskele arasında", alt: "Veda ve Gizli Teklif · Kenan" },
    an_veda_nisan_yadigar:    { ad: "Küpeşte ile iskele arasında", alt: "Veda ve Gizli Teklif · Kenan" },
    an_veda_uzak:    { ad: "Babamın elinde, vapura bir bakış", alt: "Veda ve Gizli Teklif · Kenan" },
    an_veda_uzak_nisan_gosterisli: { ad: "Babamın elinde, vapura bir bakış", alt: "Veda ve Gizli Teklif · Kenan" },
    an_veda_uzak_nisan_yadigar:    { ad: "Babamın elinde, vapura bir bakış", alt: "Veda ve Gizli Teklif · Kenan" },
    // Aynı anların sabah iskelesi çeşidi (9. bölümde gerdanlığı vermeyen yol; teslim sabah)
    an_veda_sabah:   { ad: "Sabah vapurunda, küpeşte ile iskele arasında", alt: "Veda ve Gizli Teklif · Kenan" },
    an_veda_sabah_nisan_gosterisli: { ad: "Sabah vapurunda, küpeşte ile iskele arasında", alt: "Veda ve Gizli Teklif · Kenan" },
    an_veda_sabah_nisan_yadigar:    { ad: "Sabah vapurunda, küpeşte ile iskele arasında", alt: "Veda ve Gizli Teklif · Kenan" },
    an_veda_uzak_sabah: { ad: "Babamın elinde, sabah vapuruna bir bakış", alt: "Veda ve Gizli Teklif · Kenan" },
    an_veda_uzak_sabah_nisan_gosterisli: { ad: "Babamın elinde, sabah vapuruna bir bakış", alt: "Veda ve Gizli Teklif · Kenan" },
    an_veda_uzak_sabah_nisan_yadigar:    { ad: "Babamın elinde, sabah vapuruna bir bakış", alt: "Veda ve Gizli Teklif · Kenan" },
    an_esik:         { ad: "Eşikte, bir adım bile atmadan", alt: "Veda ve Gizli Teklif · Süha" },
    an_esik_nisan_gosterisli: { ad: "Eşikte, bir adım bile atmadan", alt: "Veda ve Gizli Teklif · Süha" },
    an_esik_nisan_yadigar:    { ad: "Eşikte, bir adım bile atmadan", alt: "Veda ve Gizli Teklif · Süha" },
    an_kapi_ardi:    { ad: "Kapalı kapının iki yanı", alt: "Veda ve Gizli Teklif · Süha" },
    an_kapi_ardi_nisan_gosterisli: { ad: "Kapalı kapının iki yanı", alt: "Veda ve Gizli Teklif · Süha" },
    an_kapi_ardi_nisan_yadigar:    { ad: "Kapalı kapının iki yanı", alt: "Veda ve Gizli Teklif · Süha" },
    // Yeni 11. bölüm: Eşikte
    an_sari_esik:         { ad: "Sarı odanın eşiğinde iki kişi", alt: "Eşikte" },
    an_sari_esik_nisan_gosterisli: { ad: "Sarı odanın eşiğinde iki kişi", alt: "Eşikte" },
    an_sari_esik_nisan_yadigar:    { ad: "Sarı odanın eşiğinde iki kişi", alt: "Eşikte" },
    an_telgraf:           { ad: "Çanakkale'den ilk telgraf", alt: "Eşikte · Kenan" },
    an_telgraf_nisan_gosterisli: { ad: "Çanakkale'den ilk telgraf", alt: "Eşikte · Kenan" },
    an_telgraf_nisan_yadigar:    { ad: "Çanakkale'den ilk telgraf", alt: "Eşikte · Kenan" },
    an_opucuk: { ad: "Mehtapta ilk öpücük", alt: "Ada Gecesi · Kenan" },
    an_opucuk_nisan_gosterisli: { ad: "Mehtapta ilk öpücük", alt: "Ada Gecesi · Kenan" },
    an_opucuk_nisan_yadigar: { ad: "Mehtapta ilk öpücük", alt: "Ada Gecesi · Kenan" },
    an_opucuk_kas: { ad: "Kaşın ucunda bir öpücük", alt: "Ada Gecesi · Kenan" },
    an_opucuk_kas_nisan_gosterisli: { ad: "Kaşın ucunda bir öpücük", alt: "Ada Gecesi · Kenan" },
    an_opucuk_kas_nisan_yadigar: { ad: "Kaşın ucunda bir öpücük", alt: "Ada Gecesi · Kenan" },
    an_opucuk_suha: { ad: "Çamlıkta bir küçük evet", alt: "Ada Gecesi · Süha" },
    an_opucuk_suha_nisan_gosterisli: { ad: "Çamlıkta bir küçük evet", alt: "Ada Gecesi · Süha" },
    an_opucuk_suha_nisan_yadigar: { ad: "Çamlıkta bir küçük evet", alt: "Ada Gecesi · Süha" },
    an_yanan_resim: { ad: "Sobanın önünde nişan resmi", alt: "Yanan Resim" },
    an_yanan_resim_nisan_gosterisli: { ad: "Sobanın önünde nişan resmi", alt: "Yanan Resim" },
    an_yanan_resim_nisan_yadigar: { ad: "Sobanın önünde nişan resmi", alt: "Yanan Resim" },
    an_kavusma: { ad: "Duvak kalkınca, masal kitabı", alt: "Yüzleşme ve Son · Kenan" },
    an_kavusma_nisan_gosterisli: { ad: "Duvak kalkınca, masal kitabı", alt: "Yüzleşme ve Son · Kenan" },
    an_kavusma_nisan_yadigar: { ad: "Duvak kalkınca, masal kitabı", alt: "Yüzleşme ve Son · Kenan" },
    an_ayrilik: { ad: "Kafesin aralığından, sokağın başı", alt: "Yüzleşme ve Son · Kenan" },
    an_ayrilik_nisan_gosterisli: { ad: "Kafesin aralığından, sokağın başı", alt: "Yüzleşme ve Son · Kenan" },
    an_ayrilik_nisan_yadigar: { ad: "Kafesin aralığından, sokağın başı", alt: "Yüzleşme ve Son · Kenan" },
    an_iki_kagit: { ad: "Lamba altında iki kâğıt, tek el", alt: "Yüzleşme ve Son · Süha" },
    an_iki_kagit_nisan_gosterisli: { ad: "Lamba altında iki kâğıt, tek el", alt: "Yüzleşme ve Son · Süha" },
    an_iki_kagit_nisan_yadigar: { ad: "Lamba altında iki kâğıt, tek el", alt: "Yüzleşme ve Son · Süha" },
    an_carsi: { ad: "Çarşıda Münevver Hanım'ın eli", alt: "Yüzleşme ve Son · Üçüncü kapı" },
    an_carsi_nisan_gosterisli: { ad: "Çarşıda Münevver Hanım'ın eli", alt: "Yüzleşme ve Son · Üçüncü kapı" },
    an_carsi_nisan_yadigar: { ad: "Çarşıda Münevver Hanım'ın eli", alt: "Yüzleşme ve Son · Üçüncü kapı" },
    an_diz: { ad: "Sarı odada diz çöken hekim", alt: "Diz Çöken Adam" },
    an_diz_nisan_gosterisli: { ad: "Sarı odada diz çöken hekim", alt: "Diz Çöken Adam" },
    an_diz_nisan_yadigar: { ad: "Sarı odada diz çöken hekim", alt: "Diz Çöken Adam" },
    an_orgu: { ad: "Babamın yumruğunda örgüm", alt: "Şefik" },
    an_orgu_nisan_gosterisli: { ad: "Babamın yumruğunda örgüm", alt: "Şefik" },
    an_orgu_nisan_yadigar: { ad: "Babamın yumruğunda örgüm", alt: "Şefik" },
    an_yemin: { ad: "Hasta başında yemin", alt: "Şefik" },
    an_yemin_nisan_gosterisli: { ad: "Hasta başında yemin", alt: "Şefik" },
    an_yemin_nisan_yadigar: { ad: "Hasta başında yemin", alt: "Şefik" },
    an_yelpaze: { ad: "Kırk liralık yelpaze", alt: "Görücü" },
    an_yelpaze_nisan_gosterisli: { ad: "Kırk liralık yelpaze", alt: "Görücü" },
    an_yelpaze_nisan_yadigar: { ad: "Kırk liralık yelpaze", alt: "Görücü" },
    an_uc_kapi: { ad: "Mabeyn kapısında üç kapı", alt: "Görücü" },
    an_uc_kapi_nisan_gosterisli: { ad: "Mabeyn kapısında üç kapı", alt: "Görücü" },
    an_uc_kapi_nisan_yadigar: { ad: "Mabeyn kapısında üç kapı", alt: "Görücü" },
  },
};

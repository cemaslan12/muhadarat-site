/* Aşkın Bedeli tanıtım sitesi: içerik.
   Haber eklemek için HABERLER dizisinin başına yeni bir kayıt ekleyin (en yeni üstte). */

window.HABERLER = [
  {
    tarih: '2026-11-20',
    baslik: 'Sitemiz açıldı',
    resim: 'gorsel/sahne/piyano.webp',
    metin: 'Aşkın Bedeli artık kendi evinde. Karakterleri tanıyın, bölümleri gezin, kaldığınız yerden oynamaya devam edin. İlerlemeniz bu tarayıcıda saklanır.',
  },
  {
    tarih: '2026-11-19',
    baslik: 'Yeni portreler ve sahne resimleri',
    resim: 'gorsel/sahne/gerdanlik.webp',
    metin: 'Kırk yeni portre ve on sekiz yeni sahne resmi oyuna eklendi. Seçimlerinize göre açılan anlar artık albümünüzde yağlı boya tablolar olarak birikiyor.',
  },
  {
    tarih: '2026-11-15',
    baslik: 'Birinci sezonun on altı bölümü tamam',
    resim: 'gorsel/sahne/vapur.webp',
    metin: 'Düğün evinden Ada vapuruna, hekimin sırrından görücü gününe: birinci sezonun bütün bölümleri oynanabilir. Finalde seçimlerinize göre dört ayrı son sizi bekliyor.',
  },
];

window.KARAKTERLER = [
  {
    id: 'feride', ad: 'Feride', unvan: 'Kahramanımız', renk: '#b8863b',
    kunye: [['Yaş', '18'], ['Bilir', 'Fransızca, piyano, resim'], ['Boynunda', 'Annesinin "B" harfli madalyonu'], ['Zaafı', 'Kardeşi Şefik']],
    metin: 'Sait Efendi\'nin ilk evliliğinden kızı; annesi Behiye Hanım\'ı küçük yaşta kaybetti. Ağırbaşlı ve sabırlıdır, ama iş kardeşine ya da onuruna gelince susmaz. Üvey annesinin gözü her an üstündeyken cevap vermekle yetinmez, kendi küçük planını kurar.',
  },
  {
    id: 'kenan', ad: 'Kenan', unvan: 'Sözlüsü', renk: '#5a6b4e',
    kunye: [['Annesi', 'Münevver Hanım'], ['Feride\'yle', 'Bir yıldır sözlü'], ['İmzası', '—K.'], ['Saklar', '"Bu senindir" yazan masal kitabı']],
    metin: 'Münevver Hanım\'ın tek oğlu, Feride\'nin çocukluk arkadaşı. Dokuz yaşındaki Feride ona bir masal kitabı vermişti; Ada vapurundaki martıları ikisi de unutmadı. Terbiyeli ve utangaçtır. Bir yıldır sözlüler, ama o günden beri yüz yüze getirilmediler.',
  },
  {
    id: 'suha', ad: 'Süha', unvan: 'Konağın hekimi', renk: '#3b3f5c',
    kunye: [['Mesleği', 'Hekim (bir aydır)'], ['Akrabası', 'Perihan Hanım\'ın amcazadesi'], ['Feride ona', '"Dayı" der'], ['Huyu', 'Ölçülü, alaycı, hesapçı']],
    metin: 'Perihan Hanım\'ın amcasının oğlu; Feride ona çocukluktan kalma bir alışkanlıkla "dayı" der, ama aralarında kan bağı yoktur. Hekimliği yenidir, sözü keskindir. Yardım eder, ama karşılığını da bir gün ister.',
  },
  {
    id: 'remzi', ad: 'Remzi', unvan: 'Talip', renk: '#6b3a2e',
    kunye: [['Serveti', 'Babasından miras'], ['Sever', 'Atlar, vals, gösteriş'], ['Huyu', 'Her şeye fiyat biçer'], ['Yengesi', 'Sadberk Hanım']],
    metin: 'Zengin bir tacirin oğlu; mirasla girdiği kibar dünyasında herkesin gözünü kamaştırmak ister. Yakışıklıdır, son moda giyinir, vapurla at getirtir. Neyin kaç liraya alındığını unutmaz; bir gün Feride\'ye de fiyat biçip biçmeyeceği merak konusudur.',
  },
  {
    id: 'perihan', ad: 'Perihan Hanım', unvan: 'Üvey anne', renk: '#8c2f3f',
    kunye: [['Konumu', 'Konağın hanımı'], ['Kızı', 'Nazlı'], ['Kardeşi', 'Nabi'], ['Sırdaşı', 'Hatice']],
    metin: 'Sait Efendi\'nin ikinci eşi. Misafirlere tatlı, kapı kapanınca soğuktur; istediği an ağlar, istediği an bayılır. Konakta olan biten her şeyden haberi vardır ve Feride\'nin nişanı onun hesaplarına hiç uymaz.',
  },
  {
    id: 'leyla', ad: 'Leyla', unvan: 'Can dostu', renk: '#4f6f8a',
    kunye: [['Ailesi', 'Varlıklı; tek kız'], ['Huyu', 'Neşeli, takılgan, açık sözlü'], ['Okur', 'Eugène Sue romanları'], ['Zaafı', 'Ne isterse gözyaşıyla alır']],
    metin: 'Feride\'nin en yakın arkadaşı, kardeşi gibidir. Biraz şımarıktır; romanlardaki âşıklara acıyan bir hayalperesttir. Düğün bahçesinde Kenan\'ın geldiği haberini Feride\'nin kulağına ilk fısıldayan odur.',
  },
  {
    id: 'munevver', ad: 'Münevver Hanım', unvan: 'Kenan\'ın annesi', renk: '#5a2e44',
    kunye: [['Oğlu', 'Kenan'], ['Dostu', 'Merhum Behiye Hanım'], ['Huyu', 'Akıllı, mert, adil'], ['Feride ona', '"Nineciğim" der']],
    metin: 'Varlıklı bir dul; Feride\'nin annesi Behiye Hanım\'ın en yakın dostuydu. Feride\'ye annesinin yokluğunda sahip çıkar. Sözünü atasözleriyle, dolaylı ama nazik söyler; Perihan Hanım ondan çekinir.',
  },
  {
    id: 'sefik', ad: 'Şefik', unvan: 'Küçük kardeş', renk: '#2f4a5a',
    kunye: [['Yaşı', '11'], ['Benzer', 'Annesine'], ['Sever', 'Resim, piyano, kitaplar'], ['Ablası', 'Feride']],
    metin: 'Feride\'nin on bir yaşındaki kardeşi; sarı saçıyla, mavi gözüyle annesine benzer. Zeki ve hassastır, ablasına çok bağlıdır. Feride\'nin konaktaki en büyük zaafı odur; onun için verilen her söz, Feride\'yi daha tehlikeli bir pazarlığa sokar.',
  },
  {
    id: 'hatice', ad: 'Hatice', unvan: 'Evlatlık', renk: '#7a4a5e',
    kunye: [['Konumu', 'Konağın evlatlığı'], ['Huyu', 'Süslü, dalkavuk'], ['Hizmet eder', 'Perihan Hanım\'a'], ['Dikkat', 'Kapı dinler']],
    metin: 'Feride\'nin annesinin, kızına oyun arkadaşı olsun diye eve aldığı kız. Şimdi Perihan Hanım\'ın gözü kulağı; "Efendiciğim" diye başlayan her cümlesinin arkasında bir haber taşır.',
  },
  {
    id: 'nimet', ad: 'Nimet Kalfa', unvan: 'Dadı', renk: '#3f5a46',
    kunye: [['Konumu', 'Dadı, kalfa'], ['Sadakati', 'Feride ve Şefik\'e'], ['Huyu', 'Açık sözlü, cesur'], ['Güvenen', 'Münevver Hanım']],
    metin: 'Feride\'nin annesinin zamanından kalma, sadık bir kalfa. Feride dışarı çıkarken yanındadır. Perihan Hanım\'ın gözüne batar, ama Nimet Kalfa kovulmaktan da korkmaz.',
  },
  {
    id: 'josephine', ad: 'Madam Josephine', unvan: 'Mürebbiye', renk: '#26324a',
    kunye: [['Memleketi', 'Fransa'], ['Ders verir', 'Fransızca, resim'], ['Huyu', 'Sadık, yufka yürekli'], ['Odası', 'Feride\'ninkine bitişik']],
    metin: 'Feride\'ye ders veren Fransız mürebbiye. Odası Feride\'ninkine bir kapıyla bağlıdır. Sadıktır, ama herkese, özellikle de genç hekime fazla güvenir.',
  },
];

/* no: oyundaki bölüm numarası (101–116) */
window.BOLUMLER = [
  { no: 101, ad: 'Düğün Evi', ozet: 'Bir düğün bahçesi, bir fısıltı ve bir yıldır görmediğin sözlün.' },
  { no: 102, ad: 'Konak Akşamı', ozet: 'Piyanonun başında herkes seni izliyor. Hangi şarkıyı çalacaksın?' },
  { no: 103, ad: 'Gerdanlık', ozet: 'Kadife kutuda bir hediye ve onu kimin takacağı sorusu.' },
  { no: 104, ad: 'Pakt', ozet: 'Kızların gizli paktı ve Şefik\'in cebinde unutulan bir not.' },
  { no: 105, ad: 'Hekim', ozet: 'Kapın dışarıdan mandallı. İçeri giren tek kişi genç hekim.' },
  { no: 106, ad: 'Topuk ve Nabız', ozet: 'Çardakta bir topuk izi, bilekte hızlanan bir nabız.' },
  { no: 107, ad: 'Ada Vapuru', ozet: 'Güvertede bir perde, rüzgârda bir şal ve tanıdık bir bakış.' },
  { no: 108, ad: 'Ada Gecesi', ozet: 'Sezonun ortası: mehtap, çamlık ve geri dönülmez bir adım.' },
  { no: 109, ad: 'İftira', ozet: 'Kapının altından gelen kâğıt her şeyi değiştirebilir.' },
  { no: 110, ad: 'Veda ve Gizli Teklif', ozet: 'İskelenin ucunda bir veda; kalabalıkta fısıldanan bir teklif.' },
  { no: 111, ad: 'Eşikte', ozet: 'Ezandan önce, bir kapının iki yanında iki kişi.' },
  { no: 112, ad: 'Diz Çöken Adam', ozet: 'Sarı odada biri diz çöküyor. Akşam sofrasında baban hükmünü veriyor.' },
  { no: 113, ad: 'Yanan Resim', ozet: 'Sobanın önünde bir nişan resmi: sakla, yak ya da emanet et.' },
  { no: 114, ad: 'Şefik', ozet: 'Hasta başında edilen yemin ve bedeli.' },
  { no: 115, ad: 'Görücü', ozet: 'Görücüler salonda. Kırk liralık bir yelpaze ve bir cevap.' },
  { no: 116, ad: 'Yüzleşme ve Son', ozet: 'Sezon finali. Seçimlerine göre dört ayrı son.' },
];

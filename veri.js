/* Muhadarat tanıtım sitesi: içerik.
   Haber eklemek için HABERLER dizisinin başına yeni bir kayıt ekleyin (en yeni üstte). */

window.HABERLER = [
  {
    tarih: '2026-11-20',
    baslik: 'Sitemiz açıldı',
    resim: 'gorsel/sahne/piyano.webp',
    metin: 'Muhadarat artık kendi evinde. Karakterleri tanıyın, bölümleri gezin, kaldığınız yerden oynamaya devam edin. İlerlemeniz bu tarayıcıda saklanır.',
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
    kunye: [['Yaş', '18'], ['Evi', 'Sait Efendi Konağı'], ['Sever', 'Kitaplar, piyano, Ada'], ['Saklar', 'Annesinin madalyonu']],
    metin: 'Sait Efendi\'nin kızı. Annesi Behiye Hanım\'dan geriye kalan, üstünde "B" harfi olan siyah taşlı madalyonu boynundan çıkarmaz. Üvey annesinin gözü her an üstünde; Feride ise cevap vermekle yetinmez, kendi küçük planlarını kurar.',
  },
  {
    id: 'kenan', ad: 'Kenan', unvan: 'Sözlüsü', renk: '#5a6b4e',
    kunye: [['Annesi', 'Münevver Hanım'], ['İmzası', '—K.'], ['Sever', 'Martılar, eski masallar'], ['Sevmez', 'Söylenti']],
    metin: 'Feride\'yle çocukluklarını birlikte geçirdiler; dokuz yaşındaki Feride ona "Bu senindir" yazan bir masal kitabı vermişti. Bir yıldır sözlüler ama o günden beri bir kez bile yüz yüze getirilmediler.',
  },
  {
    id: 'suha', ad: 'Süha', unvan: 'Genç hekim', renk: '#3b3f5c',
    kunye: [['Mesleği', 'Hekim (bir aydır)'], ['Akrabası', 'Perihan Hanım'], ['Sever', 'Kazanmayı'], ['Tehlike', 'Yüksek']],
    metin: 'Perihan Hanım\'ın amcasının oğlu; Feride ona çocukluktan kalma bir alışkanlıkla "dayı" der ama aralarında kan bağı yoktur. Hekimliği yenidir, dili keskindir. Yardım eder, ama karşılığını da bir gün ister.',
  },
  {
    id: 'remzi', ad: 'Remzi', unvan: 'Talip', renk: '#6b3a2e',
    kunye: [['Serveti', 'Göz kamaştırıcı'], ['Sever', 'Atlar, vals, gösteriş'], ['Bilir', 'Her şeyin fiyatını'], ['Annesi', 'Sadberk Hanım']],
    metin: 'Yakışıklı, cömert görünmeyi seven, vapurla at getirten bir talip. Kırk liralık yelpazeleri, odalarının sayısını unutmaz; Feride\'nin nişanı bozulursa ondan bir vals istemekten de geri durmaz.',
  },
  {
    id: 'perihan', ad: 'Perihan Hanım', unvan: 'Üvey anne', renk: '#8c2f3f',
    kunye: [['Konumu', 'Konağın hanımı'], ['Bilir', 'Fransızca, her sırrı'], ['Kızı', 'Nazlı'], ['Sırdaşı', 'Hatice']],
    metin: 'Sait Efendi\'nin ikinci eşi. Misafirlere tatlı, kapı kapanınca soğuktur. Konakta olan biten her şeyden haberi vardır ve Feride\'nin nişanı onun hesaplarına hiç uymaz.',
  },
  {
    id: 'leyla', ad: 'Leyla', unvan: 'Can dostu', renk: '#4f6f8a',
    kunye: [['Huyu', 'Neşeli, açık sözlü'], ['Sever', 'Roman okumayı'], ['Zaafı', 'Biraz şımarık'], ['Silahı', 'Gözyaşı']],
    metin: 'Feride\'nin en yakın arkadaşı, varlıklı bir ailenin tek kızı. Âşıklara acıyan bir hayalperest; düğün bahçesinde ilk fısıltıyı getiren de, en tehlikeli fikri ortaya atan da odur.',
  },
  {
    id: 'munevver', ad: 'Münevver Hanım', unvan: 'Kenan\'ın annesi', renk: '#5a2e44',
    kunye: [['Oğlu', 'Kenan'], ['Huyu', 'Ağırbaşlı, adil'], ['Güvendiği', 'Nimet Kalfa'], ['Elinde', 'Kadife bir kutu']],
    metin: 'Feride\'yi çocukluğundan beri tanır ve ona annesinin yokluğunda sahip çıkan birkaç kişiden biridir. Söylentilere kulak asmaz, ama bir kez karar verdiğinde geri dönmez.',
  },
  {
    id: 'sefik', ad: 'Şefik', unvan: 'Küçük kardeş', renk: '#2f4a5a',
    kunye: [['Ablası', 'Feride'], ['Sever', 'Ablasını'], ['Sağlığı', 'Narin'], ['Hekimi', 'Süha']],
    metin: 'Feride\'nin küçük kardeşi ve konaktaki en büyük zaafı. Onun için verilen her söz, Feride\'yi bir adım daha tehlikeli bir pazarlığa sokar.',
  },
  {
    id: 'hatice', ad: 'Hatice', unvan: 'Evlatlık', renk: '#7a4a5e',
    kunye: [['Konumu', 'Konağın evlatlığı'], ['Huyu', 'Süslü, dalkavuk'], ['Hizmet eder', 'Perihan Hanım\'a'], ['Dikkat', 'Kapı dinler']],
    metin: 'Feride\'nin annesinin, kızına oyun arkadaşı olsun diye eve aldığı kız. Şimdi Perihan Hanım\'ın gözü kulağı; "Efendiciğim" diye başlayan her cümlesinin arkasında bir haber taşır.',
  },
  {
    id: 'nimet', ad: 'Nimet Kalfa', unvan: 'Dadı', renk: '#3f5a46',
    kunye: [['Konumu', 'Dadı, kalfa'], ['Sadakati', 'Feride ve Şefik\'e'], ['Huyu', 'Açık sözlü, cesur'], ['Sözü', '"Varsın kovsun!"']],
    metin: 'Feride\'nin annesinin zamanından kalma, eski ve sadık bir kalfa. Feride dışarı çıkarken yanındadır; Perihan Hanım ona "hain kadın" der, ama Nimet Kalfa hiçbir şeyden korkmaz.',
  },
  {
    id: 'josephine', ad: 'Madam Josephine', unvan: 'Mürebbiye', renk: '#26324a',
    kunye: [['Memleketi', 'Fransa'], ['Ders verir', 'Fransızca, resim'], ['Huyu', 'Yufka yürekli'], ['Odası', 'Feride\'nin yanında']],
    metin: 'Feride\'ye ders veren Fransız mürebbiye. Odası Feride\'ninkine bir kapıyla bağlıdır; sadıktır ama herkese, özellikle de genç hekime fazla güvenir.',
  },
];

/* no: oyundaki bölüm numarası (101–116) */
window.BOLUMLER = [
  { no: 101, ad: 'Düğün Evi', ozet: 'Bir düğün bahçesi, bir fısıltı ve bir yıldır görmediğin sözlün.' },
  { no: 102, ad: 'Konak Akşamı', ozet: 'Piyanonun başında herkes seni izliyor. Hangi şarkıyı çalacaksın?' },
  { no: 103, ad: 'Gerdanlık', ozet: 'Kadife kutuda bir hediye ve onu kimin takacağı sorusu.' },
  { no: 104, ad: 'Pakt', ozet: 'Leyla\'yla yapılan gizli anlaşma: tehlikeli ama tatlı.' },
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

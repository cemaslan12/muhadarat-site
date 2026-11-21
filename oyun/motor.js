/* =========================================================================
   MUHADARAT: oyun motoru
   Hikâye bu dosyada değil, veri/ klasöründeki dosyalardadır.
   ========================================================================= */
(function () {
  'use strict';

  const V = window.OYUN_VERISI;
  /* Tur 27b: bölüm dosyalarında (pilotN.js) kaydedilen an'lar gorseller.js'ten sonra yüklendiği için resim almıyordu.
     gorseller.js resim listesini V.cizimResimleri'nde saklar; motor en son yüklendiğinden eksik resimleri burada tamamlar. */
  if (V && V.cizimler && V.cizimResimleri) {
    Object.keys(V.cizimResimleri).forEach(function (id) {
      // Tur 28b: bölüm dosyasında elle yazılmış eski yol (eski ?v= damgası) resim yenilenince eskiyi gösteriyordu;
      // gorseller.js'in güncel yolu her zaman önceliklidir
      if (V.cizimler[id]) V.cizimler[id].gorsel = V.cizimResimleri[id];
    });
    /* Tur 28: kıyafet çeşidi resmi geldiyse (an_x_aksam, an_x_gecelik, an_x_nisan_*) ve temel an kayıtlıysa çeşit
       kendiliğinden kaydolur; bölüm dosyasında ayrıca kayıt gerekmez (anResmi bu kayıtları giyilen kıyafete göre seçer). */
    // Tur 35: askıyı saklayan şallı görücü tablosu aynı anın fiziksel çeşididir.
    if (V.cizimResimleri.an_yelpaze_sal && V.cizimler.an_yelpaze) {
      V.cizimler.an_yelpaze_sal = Object.assign({}, V.cizimler.an_yelpaze, { gorsel: V.cizimResimleri.an_yelpaze_sal });
    }
    const CESIT_SONEK = /^(.+)_(nisan_sade|nisan_gosterisli|nisan_yadigar|aksam|gecelik|ziyaret|dugun|ferace)$/;
    Object.keys(V.cizimResimleri).forEach(function (id) {
      if (V.cizimler[id]) return;
      // takı türü soneki (_acik / _sakli) önce, kıyafet soneki sonra soyulur: an_x_nisan_yadigar_sakli → an_x
      const yalin = id.replace(/_(acik|sakli)$/, ''), m = CESIT_SONEK.exec(yalin);
      const t = V.cizimler[m ? m[1] : yalin];
      if (t && (m || yalin !== id)) V.cizimler[id] = { ad: t.ad, alt: t.alt, gorsel: V.cizimResimleri[id] };
    });
  }
  /* Tur 28 (GPT özet 5): denetlenebilir sürüm kimliği — başlık ekranında yükleme sürümü (index.html ?v=) görünür */
  try {
    const vs = (document.querySelector('script[src*="motor.js"]') || {}).src || '';
    const vno = (vs.match(/[?&]v=(\d+)/) || [])[1];
    const alt = document.querySelector('.baslik-alt');
    if (vno && alt && !/Sürüm/.test(alt.textContent)) alt.textContent += ' · Sürüm ' + vno;
  } catch (e) { /* başlık yoksa geç */ }
  const BOLUMLER = window.BOLUMLER || {};
  const ANA_KAYIT = 'muhadarat_kayit_v1', PILOT_KAYIT = 'muhadarat_pilot_v1', PILOT_NO = 101;
  let KAYIT_ANAHTARI = ANA_KAYIT; // deneme bölümü kendi kaydını tutar; asıl oyunun kaydına dokunmaz
  const $ = (s) => document.querySelector(s);

  let S = null;              // oyun durumu (kaydedilir)
  let mesgul = false;        // bir olay sürüyor mu
  let sahnedekiler = null;   // olay sırasında sahnedeki kişiler [{id, ifade}]
  let geciciArkaplan = null; // olay sırasında geçici arka plan
  const ANINDA = 1000;       // bu hız ve üstü: satır bir anda görünür
  const HIZLAR = [[25, 'yavaş'], [60, 'orta'], [120, 'hızlı'], [ANINDA, 'anında']];
  let metinHizi = 60;        // harf/saniye (orta)
  try { const h = +localStorage.getItem('muhadarat_hiz'); if (HIZLAR.some((x) => x[0] === h)) metinHizi = h; } catch (e) { /* yok */ }
  let tikKilidi = 0;         // satırı tamamlayan tıktan hemen sonraki ikinci tık yutulur
  let grupKonusan = null;    // dört hanımdan o an konuşan (h1-h4)
  // Grup portresinde her hanımın yüzünün yatay konumu (soldan: Meraklı, Bilgiç, Yufka Yürekli, Hüküm Veren)
  const GRUP_YERI = { h1: '26%', h2: '42%', h3: '61%', h4: '84%' };
  let konusanId = null;      // olay sırasında o an konuşan kişi (vurgulamak için)
  let olayKadrosu = null;    // olayın açılış kadrosu (olay.sahne); olay ara sayfayla açılırsa sayfadan sonra geri konur
  let olayKadroTaze = false; // olayda henüz satır gösterilmedi, goster/gizle/temizle çalışmadı
  const gecmis = [];         // bu oturumda okunan son satırlar (Geçmiş penceresi)
  let ipucuZamani = null;    // oyuncu bir süre bir şey yapmazsa görev ipucu

  /* ------------------------------------------------------------------ */
  /* Durum                                                               */
  /* ------------------------------------------------------------------ */
  function yeniDurum() {
    return {
      surum: 1, bolum: 1, faz: null, mekan: null, gorev: 0, biten: [],
      v: { itibar: 50, dedikodu: 0, baba_guven: 50, calibe_suphe: 0, sefik: 0, vakar: 0, isyan: 0, catlak: 0 },
      gonul: { mukaddem: 0, remzi: 0, halim: 0, suha: 0 },
      bag: { munevver: 3, fevkiye: 4, mehves: 3, josephine: 0 }, // yakınlarla bağ, 0-10
      talipler: ['mukaddem'], notlar: {}, deliller: [], bayrak: {},
      para: V.ayar.baslangicParasi, takat: V.ayar.takatAzami,
      kiyafetler: ['dugun', 'ev', 'ferace'], giyili: 'dugun', kiyafetKilit: 'Bu sahnede kıyafetiniz kitapta tarif edildiği gibidir.',
      fIfade: 'mahzun', cizimler: [], bolumBitti: false,
      kararlar: {}, sohbetSayaci: {}, gunluk: [], kozlar: [],
    };
  }
  function kaydet() { try { localStorage.setItem(KAYIT_ANAHTARI, JSON.stringify(S)); } catch (e) { /* kayıt yapılamadı */ } }
  // Sürüm 106 kayıtlarında kozun eski adı hem listede hem de kaynak anahtarı olarak bulunur.
  function kayitCoz(metin) {
    return JSON.parse(metin, (anahtar, deger) => {
      if (deger === 'Sabah takılan yüzük') return 'Ada’da takılan yüzük';
      if ((anahtar === 'kozKaynak' || anahtar === 'kozAcik') && deger && Object.hasOwn(deger, 'Sabah takılan yüzük')) {
        deger['Ada’da takılan yüzük'] = deger['Sabah takılan yüzük'];
        delete deger['Sabah takılan yüzük'];
      }
      return deger;
    });
  }
  function yukle() {
    try {
      const t = localStorage.getItem(KAYIT_ANAHTARI);
      if (!t) return null;
      const d = kayitCoz(t);
      // Eski kayıtlarda olmayan alanları tamamla
      const y = yeniDurum();
      d.bag = Object.assign({}, y.bag, d.bag || {});
      d.v = Object.assign({}, y.v, d.v || {});
      d.kararlar = d.kararlar || {};
      d.sohbetSayaci = d.sohbetSayaci || {};
      d.gunluk = d.gunluk || [];
      d.kozlar = d.kozlar || [];
      // Karakter adları değişti (15 Kasım 2026): eski kayıtlardaki koz adlarını yenisine taşı
      const KOZ_ESKI = { 'Reftar ile Nabi Bey': 'Hatice ile Nabi Bey', 'Calibe ile Süha': 'Perihan ile Süha', 'Reftar\'ın yüzüğü': 'Hatice\'nin yüzüğü' };
      d.kozlar = d.kozlar.map((k) => KOZ_ESKI[k] || k);
      return d;
    } catch (e) { return null; }
  }

  const bolum = () => BOLUMLER[S.bolum];
  const faz = () => bolum().fazlar[S.faz];
  const sinirla = (x, a, b) => Math.max(a, Math.min(b, x));
  // calibe_suphe 0–12 (oynanış T1 B6: eşikler 4 ve 8; doğrusal bölümler arasında 1 söner, bolumBaslat)
  const SINIRLAR = { itibar: [0, 100], baba_guven: [0, 100], dedikodu: [0, 5], calibe_suphe: [0, 12], catlak: [0, 10] };
  const SUPHE_SONUM = 1;

  // Oyuncunun görmesi gereken değer değişimleri için kısa bildirimler
  const DEGER_SOZLERI = {
    dedikodu: ['Hakkında konuşulmaya başlandı.', 'Dedikodu biraz yatıştı.'],
    itibar: ['Hanımların gözünde değerin arttı.', 'Hanımların gözünde biraz düştün.'],
    calibe_suphe: ['Perihan Hanım bunu unutmayacak.', 'Perihan Hanım\'ın şüphesi biraz dağıldı.'],
    baba_guven: ['Babanın sana güveni arttı.', 'Babanın güveni sarsıldı.'],
  };
  const BAG_ADLARI = { munevver: 'Münevver Hanım', fevkiye: 'Leyla', mehves: 'Nimet', josephine: 'Madam' };

  const dogrusalMi = () => !!(S && BOLUMLER[S.bolum] && BOLUMLER[S.bolum].dogrusal);

  /* Gönül ölçeği (yalnız doğrusal bölüm, oynanış T1 A2): ham puan GONUL_TAVAN'a dek saklanır, çubuk
     adayın ölçeğine göre dolar (oyun_verisi ayar.gonulOlcegi). Eski biçimde puan zaten 0-100'dür. */
  const AYAR = V.ayar || {};
  const GONUL_TAVAN = AYAR.gonulTavan || 400;
  const GONUL_BASAMAK = AYAR.gonulBasamak || 20;
  const gonulOlcek = (id) => (AYAR.gonulOlcegi || {})[id] || 100;
  // Çubuğun gösterdiği yüzde (0-100); ham verilmezse S'teki değer
  function gonulYuzde(id, ham) {
    const h = ham === undefined ? ((S && S.gonul[id]) || 0) : ham;
    if (!dogrusalMi()) return sinirla(h, 0, 100);
    return sinirla(Math.round(100 * h / gonulOlcek(id)), 0, 100);
  }
  const gonulBasamagi = (id, ham) => Math.floor(gonulYuzde(id, ham) / GONUL_BASAMAK);
  // Görünme eşiği (ayar.gonulGorunmeEsigi, ham puan; doğrulama b1–4 madde 3): eşiği olan aday (Remzi) çubuğu
  // ancak bu puandan sonra görünür; eşiği olmayan aday üstte ilk karşılıkla (puan > 0) belirir. Yalnız gösterim.
  const gonulEsigi = (id) => (AYAR.gonulGorunmeEsigi || {})[id] || 0;
  const gonulGorunur = (id) => { const h = (S && S.gonul && S.gonul[id]) || 0; const e = gonulEsigi(id); return e ? h >= e : h > 0; };
  // Basamak (lale) bildirimi: Süha'nınki romantize edilmez (onun ilgisi Feride'nin gönlü değil)
  const BASAMAK_SOZU = { mukaddem: 'Kenan\'ın gönlünde bir basamak daha', remzi: 'Remzi Bey\'in gönlünde bir basamak daha', suha: 'Süha Bey\'in ilgisi bir basamak arttı' };
  const LALE_SAYISI = ['', 'biri', 'ikisi', 'üçü', 'dördü', 'beşi'];

  /* Gizli değişkenlerin küçük simge bildirimi (doğrusal bölüm, oynanış T1 A5). Yalnız değer gerçekten
     değiştiyse (sınıra dayanmış değer sessiz kalır). [artınca, azalınca] */
  const SIMGE_SOZLERI = {
    vakar: ['Vakar', 'Vakar'],
    calibe_suphe: ['Perihan Hanım kuşkulandı', 'Perihan Hanım\'ın kuşkusu dağıldı'],
    baba_guven: ['Babanın güveni', 'Babanın güveni sarsıldı'],
    sefik: ['Şefik sana sokuldu', 'Şefik sana küstü'],
    dedikodu: ['Hakkında konuşuluyor', 'Dedikodu yatıştı'],
    isyan: ['Dik durdun', 'Boyun eğdin'],
  };
  // Seçimin sonuçları (basamak bildirimi, simgeler) seçimin sahnesi oynandıktan sonra gösterilir;
  // etkiUygula biriktirir, çağıran sonucAl() ile alıp sonucGoster() ile gösterir
  let sonucBirikimi = { basamak: [], simge: [] };
  const sonucAl = () => { const s = sonucBirikimi; sonucBirikimi = { basamak: [], simge: [] }; return s; };

  function etkiUygula(e) {
    if (!e) return;
    // Doğrusal (yeni biçim) bölümde soyut cümle yok: çubuk oynar, gizli değişkenler küçük simgeyle görünür,
    // karşıdaki kişi tepkisini sahnede verir
    if (dogrusalMi()) {
      const degisen = [];
      for (const k of Object.keys(e)) {
        if (S.bag && k in S.bag) {
          const once = S.bag[k];
          S.bag[k] = sinirla(once + e[k], 0, 10);
          if (S.bag[k] !== once) sonucBirikimi.simge.push([k, S.bag[k] - once, BAG_ADLARI[k] + (S.bag[k] > once ? ' sana ısındı' : ' sana kırıldı')]);
        } else if (k in S.gonul) {
          const once = S.gonul[k] || 0;
          S.gonul[k] = sinirla(once + e[k], 0, GONUL_TAVAN);
          if (!S.talipler.includes(k) && e[k] > 0) S.talipler.push(k);
          // Dolu çubukta sahte "+N" ve ödül sesi yok; "+N" ham farkı gösterir (çubuk ölçekle yavaş dolar)
          const fark = S.gonul[k] - once;
          if (fark && !(fark > 0 && gonulYuzde(k, once) >= 100)) degisen.push([k, fark]);
          // Basamak (lale): her basamak bir kez kutlanır; puan düşüp yeniden çıkınca tekrar edilmez
          S.gonulBasamak = S.gonulBasamak || {};
          const enYuksek = S.gonulBasamak[k] !== undefined ? S.gonulBasamak[k] : gonulBasamagi(k, once);
          const simdi = gonulBasamagi(k, S.gonul[k]);
          S.gonulBasamak[k] = Math.max(enYuksek, simdi);
          if (simdi > enYuksek && BASAMAK_SOZU[k]) sonucBirikimi.basamak.push([k, simdi]);
        } else {
          const r = SINIRLAR[k];
          const once = S.v[k] || 0;
          S.v[k] = once + e[k];
          if (r) S.v[k] = sinirla(S.v[k], r[0], r[1]);
          if (S.v[k] === once) continue;
          if (k === 'itibar') degisen.push([k, S.v[k] - once]);
          else if (SIMGE_SOZLERI[k]) sonucBirikimi.simge.push([k, S.v[k] - once, SIMGE_SOZLERI[k][S.v[k] > once ? 0 : 1]]);
        }
      }
      gostergeleriCiz(degisen);
      return;
    }
    for (const k of Object.keys(e)) {
      if (S.bag && k in S.bag) {
        const once = S.bag[k];
        S.bag[k] = sinirla(once + e[k], 0, 10);
        const fark = S.bag[k] - once;
        if (fark >= 2) bildir(BAG_ADLARI[k] + ' sana iyice ısındı.');
        else if (fark > 0) bildir(BAG_ADLARI[k] + ' sana biraz daha ısındı.');
        else if (fark <= -2) bildir(BAG_ADLARI[k] + ' sana gücendi.');
        else if (fark < 0) bildir(BAG_ADLARI[k] + ' sana biraz kırıldı.');
      } else if (k in S.gonul) {
        const once = S.gonul[k];
        S.gonul[k] = sinirla(once + e[k], 0, 100);
        if (!S.talipler.includes(k) && e[k] > 0) S.talipler.push(k);
        if (S.gonul[k] > once) bildir(gonulBildirimi(k, S.gonul[k] - once));
      } else {
        const r = SINIRLAR[k];
        const once = S.v[k] || 0;
        S.v[k] = once + e[k];
        if (r) S.v[k] = sinirla(S.v[k], r[0], r[1]);
        const soz = DEGER_SOZLERI[k];
        // Perihan sahnede değilse "unutmayacak" demek ilgisiz kalıyor: sessizce işlenir, karşılığı
        // ileride Perihan'ın bunu yüze vurduğu sahnelerde gelir
        const calibeYok = k === 'calibe_suphe' && !(sahnedekiler || []).some((x) => x.id === 'calibe');
        if (soz && S.v[k] !== once && !calibeYok) bildir(S.v[k] > once ? soz[0] : soz[1]);
      }
    }
  }
  // Süha'nın "yakınlığı" Feride'nin gönlü değil, Süha'nın yorumudur (romantize edilmez)
  function gonulBildirimi(id, fark) {
    if (id === 'suha') return 'Süha Bey sözünü yakınlık saydı.';
    const ad = V.karakterler[id].ad;
    if (fark >= 5) return ad + ' aklından çıkmıyor.';
    if (fark >= 3) return ad + ' için yüreğin kıpırdadı.';
    return ad + ' için gönlünde bir kıpırtı.';
  }

  /* ------------------------------------------------------------------ */
  /* Çizim                                                               */
  /* ------------------------------------------------------------------ */
  // Görev metni sabit yazı ya da duruma bakan işlev olabilir (ör. kalan hamle sayısı)
  const gMetin = (g) => (typeof g.metin === 'function' ? g.metin(S) : g.metin);
  // Arka planı ayrılmış (saydam) portre varsa onu kullan: g_x.webp -> s_x.webp (veri/saydam.js listeler)
  const SAYDAM = new Set(window.SAYDAM || []);
  const saydamla = (src) => {
    if (!src) return src;
    const s = src.replace('/g_', '/s_');
    // gorseller.js yolları önbellek sürümü taşır (…webp?v=<sayı>); liste dosya adıyla karşılaştırılır
    // Tur 32: saydam eşi açılamadıysa (BOZUK, aşağıda portre zinciri) arka planlı g_ resmi kalır
    return SAYDAM.has(s.split('?')[0].split('/').pop()) && !BOZUK.has(s.split('?')[0]) ? s : src;
  };
  /* Tur 31 (t31_ifade_envanteri §0, §5): portre düşüş zinciri. Satırın ifadesinin portresi yoksa yüz artık
     sessizce (çoğu kez gülen) 'ana'ya değil, duygu olarak en yakın mevcut portreye düşer. Her ifadenin yakın
     listesi geçişlidir (korkmus → endiseli → notr, mahzun) ve sırayla, tekrarsız açılır. Bu tablonun anahtarları,
     değerleri ve IFADE_GULME "motorun bildiği ifade adları"dır: benzetim betikleri (araclar/denetim/ifade_adlari.js)
     bu adları portresi henüz olmasa da geçerli sayar. Yeni ad eklerken buraya da yazın.
     (Eski IFADE_YAKIN yalnız Feride içindi ve kıyafet setinde mahzun'u setin ana resmine düşürüyordu.) */
  /* Tur 32 (t32_ifade_envanteri §0.1, M1): 'kararli' zincirinden 'ofkeli' çıktı. Kıyafet setlerinde (fsade, fpembe,
     fmavi, faksam, fgecelik) kararli/ciddi/notr resmi yokken zincir öfkeli yüze iniyordu: Feride'nin en sık satırı
     çatık kaşla görünüyordu. Şimdi set kendi kararlı yüzünü taşımıyorsa temel setin fazila_kararli'sı gelir
     (IFADE_KESIN, kisiGorseli). */
  const IFADE_DUSUS = {
    kararli: ['ciddi', 'notr'],
    ciddi: ['kararli', 'notr'],
    ofkeli: ['ciddi', 'kararli', 'soguk'],
    soguk: ['notr', 'ciddi'],
    notr: [],
    endiseli: ['notr', 'mahzun'],
    korkmus: ['endiseli', 'notr'],
    saskin: ['notr'],
    mahzun: ['notr'],
    incinmis: ['mahzun', 'notr'],
    aglamakli: ['mahzun', 'notr'],
    duygulu: ['aglamakli', 'mahzun', 'notr'],
    dolu: ['duygulu', 'aglamakli', 'mahzun'],
    pisman: ['mahzun', 'notr'],
    mahcup: ['utanmis', 'utangac', 'notr'],
    utanmis: ['utangac', 'mahcup', 'gulumseyen'],
    utangac: ['utanmis', 'mahcup'],
    kuskun: ['somurtkan', 'mahzun', 'notr'],
    somurtkan: ['kuskun', 'soguk', 'notr'],
    dusunceli: ['notr', 'mahzun'],
    supheli: ['soguk', 'notr', 'mahzun'],
    sinsi: ['alayci', 'soguk'],
    alayci: ['sinsi', 'tebessum'],
    tebessum: ['gulumser', 'gulumseyen', 'notr'],
    gulumser: ['gulumseyen', 'tebessum'],
    gulumseyen: ['gulumser', 'tebessum'],
    sevincli: ['gulumser', 'gulumseyen'],
    muzip: ['tebessum', 'gulumseyen', 'gulumser'],
    asik: ['utanmis', 'tebessum', 'gulumseyen'],
  };
  // Gülme ifadeleri: yalnız bunlar gülen bir 'ana' resmine düşebilir (bkz. ANA_GULER)
  const IFADE_GULME = new Set(['gulumser', 'gulumseyen', 'tebessum', 'sevincli', 'muzip', 'asik', 'alayci']);
  // 'ana' resmi gülen kişiler ve kıyafet setleri (envanter §0/§3: sai.ana ve munevver.ana = gulumser dosyası).
  // Bunlarda 'ana' etiketi ve etiketsiz satır "varsayılan yüz" sayılır: nötr portre varsa o görünür; gülüş için
  // 'gulumser' yazılır (gulumser resmi yoksa gülme ifadesi olduğu için gülen ana'ya düşer).
  // Tur 32 (envanter M3): Kenan (mukaddem_ana gülüyor) eklendi; kararlı/endişeli satırı gülen yüze düşmesin.
  // Tur 33 (t33_ifade_envanteri M4): Sadberk çıktı. Onun 'ana'sı kibirli sırıtış, asıl yüzü; 'ana' etiketi notr'a
  // değil kendi ana resmine gider. Gülme ifadesinde yine önce ana'ya bakılır (ANA_SIRITAN).
  const ANA_GULER = new Set(['fpembe', 'sai', 'munevver', 'fevkiye', 'josephine', 'nabi', 'sefik', 'remzi_anne', 'mukaddem']);
  const ANA_SIRITAN = new Set(['sadberk']);
  // Tur 32: gülen ana'lı kişide gülmeyen bir ifadenin zinciri boş kalırsa, gülen ana'dan önce bu gülmeyen yüzler
  // sırayla denenir (ör. Kenan kararli → mukaddem_endiseli; Madam'ın josephine_notr'u gelince hepsi ona).
  const GULMEYEN_YEDEK = ['notr', 'kararli', 'ciddi', 'dusunceli', 'endiseli'];
  // Tur 32 (envanter §0.1, M1/M4): kıyafet setinde bulunmazsa set ana'sına değil temel setin (fazila) aynı yüzüne
  // giden ifadeler. Kıyafet tutarlılığından önce ifade doğruluğu: kararlı satır öfkeli ya da gülen yüzle çıkmasın.
  const IFADE_KESIN = new Set(['kararli', 'ciddi', 'soguk']);
  // Tur 32 (envanter M4): ana'sı gülen kıyafet setinde (fpembe) gülmeyen ifade, temel sete (krem ceket) geçmeden önce
  // setin kendi yakın yüzünü dener; elbise sahne ortasında değişmesin.
  // Tur 33 (envanter M1): bütün kıyafet setlerinde uygulanır. fsade/fmavi/faksam/fgecelik'te şaşkın satır setin
  // mahzun (fgecelik'te ağlayan) ana resmine değil setin endişeli yüzüne (kalkık kaş) gider.
  const SET_YAKIN = {
    saskin: ['endiseli'], korkmus: ['mahzun'], mahzun: ['endiseli'], aglamakli: ['endiseli'], incinmis: ['endiseli'],
    duygulu: ['endiseli'], dolu: ['endiseli'], pisman: ['endiseli'], kuskun: ['endiseli'], supheli: ['endiseli'],
    dusunceli: ['endiseli'],
  };
  // Setin tek takı resminin (ör. fsade_gerdanlik) taşıdığı yüz. Takılıyken bu tek resim yalnız bu yüzün zincirinde
  // kullanılır; başka ifadede ifade portresi öne geçer (gerdanlık o satırda görünmez). Listede olmayan set için
  // tek takı resmi yalnız gülme ifadelerinde. fpembe/fmavi gerdanlık resimleri nötr yüzle yeniden üretilince
  // bu değerleri 'notr' yapın.
  // Tur 31: fpembe/fmavi gerdanlık portreleri nötr yeniden üretildi (ifade envanteri §4.1)
  // Tur 32 (t32_b01_04 §0.2, envanter M4): değer artık dizi. Takı resmi, yüzüne yakın birkaç ifadede de kullanılır;
  // gerdanlık satır satır yanıp sönmesin. fpembe/fmavi gerdanlık resimleri nötr yüzlü: kararlı/ciddi satırda da
  // gerdanlıklı resim görünür (setin kararlı resmi bağlansa bile). fsade_gerdanlik mahzun yüzlü.
  const TAKI_YUZU = { fpembe_gerdanlik: ['notr', 'kararli', 'ciddi'], fmavi_gerdanlik: ['notr', 'kararli', 'ciddi'], fsade_gerdanlik: ['mahzun', 'notr'] };
  /* Tur 33 (t33_ifade_envanteri §3, M1/M2/M8): kıyafet setlerinin düşüş ayrıntıları.
     SET_ANA_YUZ: setin 'ana' resminin taşıdığı yüz. Zincirde bu ifadeye gelince set ana'sı o ifadenin resmi sayılır
       (fsade/fmavi/faksam ana'sı mahzun yüz, fgecelik ana'sı gözü yaşlı). Listede olmayan ifade set ana'sına ancak
       zincirin en sonunda iner.
     SET_ZINCIR: sette kendi resmi yoksa kıyafet setinde açılacak sıra. Tebessüm açık gülüşe (gulumseyen) değil önce
       setin kapalı ağızlı yarım gülüşüne (utanmis) düşer. <set>_tebessum gelince o öne geçer.
     SET_DISI_ONCE: sette yoksa elbise pahasına temel setin (fazila) aynı resmi; ağlayan satır gözyaşsız yüzle
       çıkmasın (B16 vedası). fsade/fmavi/faksam_aglamakli gelince set kendi resmini gösterir.
     TEK_YUZLU_SET: peçeli ferace; ifade okunmaz, her satırda setin kendi resmi (kararlı satırda elbise değişmez). */
  const SET_ANA_YUZ = { fsade: ['mahzun', 'incinmis'], fmavi: ['mahzun', 'incinmis'], faksam: ['mahzun', 'incinmis'], fgecelik: ['aglamakli', 'mahzun', 'dolu', 'duygulu'] };
  const SET_ZINCIR = { tebessum: ['tebessum', 'utanmis', 'gulumser', 'gulumseyen', 'notr'] };
  const SET_DISI_ONCE = { aglamakli: ['aglamakli'] };
  const TEK_YUZLU_SET = new Set(['fferace']);
  /* Tur 33 (envanter M3, §3.1): kişiye özgü yakın yüz. Zincir kişinin resimlerinde boş kalınca, 'ana'ya inmeden önce
     bunlar denenir. '*' gülme dışındaki her ifade için.
       f        : fazila_ana'da madalyon açıkta; mahzun (fazila_mahzun üretiliyor) ve öbür gülmeyen yüzler endişeliye.
       calibe   : calibe_soguk üretiliyor; gelene dek soğuk Perihan gülmeyen endişeli yüze (ana'da kıvrım, sinsi sırıtış).
       mefharet : sevinçli Nazlı, kolları kavuşmuş somurtkan ana'ya değil, gözleri açık şaşkın yüze. */
  const KISI_YAKIN = {
    f: { '*': ['endiseli'] },
    calibe: { '*': ['endiseli'] },
    mefharet: { sevincli: ['saskin'], muzip: ['saskin'], gulumser: ['saskin'], gulumseyen: ['saskin'], tebessum: ['saskin'] },
  };
  const kisiYakin = (id, ifade, gulme) => { const y = KISI_YAKIN[id]; return y ? (y[ifade] || (gulme ? null : y['*']) || []) : []; };
  /* Tur 33 (envanter M5): boydan kıyafet setlerinde (faksam, fmavi, fgecelik) yüz çerçevede küçük kalıyor. Konuşma
     portresi (saydam) bu setlerde yüzün çevresinden büyütülür: olcek = büyütme, x/y = yüzün ortası (portre öğesinin
     yüzdesi, 16:9 sahnede). portreKoy() uygular; alt kenarın yumuşak kayboluşu da aynı ölçekle düzeltilir. */
  const PORTRE_KIRP = { fmavi: { olcek: 1.32, x: 46, y: 9 }, faksam: { olcek: 1.36, x: 46, y: 8 }, fgecelik: { olcek: 1.45, x: 52, y: 9 } };
  function portreKirp(src) {
    const m = /\/s_([a-z]+)_[a-z_]+\.webp/.exec(String(src || ''));
    return m ? PORTRE_KIRP[m[1]] || null : null;
  }
  // Tur 33 (envanter M7): poz/takı anahtarları da bilinen ad (konsola "bilinmeyen ifade" düşmesin)
  const IFADE_BILINEN = new Set([...Object.keys(IFADE_DUSUS), ...Object.values(IFADE_DUSUS).flat(), ...IFADE_GULME, 'ana', 'kutu', 'sal', 'gerdanlik']);
  /* Tur 32: gorseller.js'e bağlanmış ama diskte olmayan ya da açılamayan portre (ör. webp'si henüz üretilmemiş yeni
     ifade) seçilmez. Yükleme hatası gorselBozuk() ile işaretlenir (motor: hemenYukle, portreKoy, resmiKoy); düşüş
     zinciri o adayı atlayıp bir sonrakine geçer. Anahtar, sürüm (?v=) atılmış yoldur. */
  const BOZUK = new Set();
  const yolAnahtari = (src) => String(src || '').split('?')[0];
  function gorselBozuk(src) {
    const a = yolAnahtari(src);
    if (!a || BOZUK.has(a)) return false;
    BOZUK.add(a);
    try { console.warn('Muhadarat: görsel açılamadı, yakın yüze düşülüyor: ' + a); } catch (e) { /* yok */ }
    return true;
  }
  // Haritadan resmi al; açılamadığı bilinen resim yok sayılır
  const gor = (g, x) => { const s = g && x && g[x]; return s && !BOZUK.has(yolAnahtari(s)) ? s : null; };
  function ifadeAdaylari(ifade) {
    if (!ifade) return [];
    const sira = [ifade];
    for (let i = 0; i < sira.length; i++) (IFADE_DUSUS[sira[i]] || []).forEach((x) => { if (!sira.includes(x)) sira.push(x); });
    return sira;
  }
  const uyarilanIfade = new Set();
  function ifadeUyar(id, ifade) { // bilinmeyen ad (yazım hatası) bir kez konsola yazılır; oyun sürer
    if (!ifade || IFADE_BILINEN.has(ifade) || uyarilanIfade.has(id + ':' + ifade)) return;
    uyarilanIfade.add(id + ':' + ifade);
    try { console.warn('Muhadarat: bilinmeyen ifade "' + ifade + '" (' + id + '); yakın yüz bulunamazsa varsayılan görünür'); } catch (e) { /* yok */ }
  }
  /* Bir resim haritasında zinciri ara. anaSerbest: gülmeyen 'ana' ya da gülme ifadesi → 'ana' zincirin sonuna eklenir.
     Tur 32 (envanter §0.2, M2): anaOnce (gülen ana'lı kişide gülme ifadesi) → önce zincirdeki gülme yüzleri, sonra
     gülen 'ana', en son öbürleri. Eskiden tebessum zinciri geçişli açılınca 'notr' gülen ana'dan önce geliyordu:
     Leyla ve Nabi hiç gülmüyordu. */
  function zincirdeAra(g, aday, anaSerbest, anaOnce) {
    if (anaOnce) {
      for (const x of aday) if (IFADE_GULME.has(x) && gor(g, x)) return gor(g, x);
      if (gor(g, 'ana')) return gor(g, 'ana');
    }
    for (const x of aday) if (x !== 'ana' && gor(g, x)) return gor(g, x);
    return anaSerbest ? gor(g, 'ana') : null;
  }
  // Etiketsiz satırın (ya da gülen ana'lı kişide 'ana' etiketinin) yüzü
  function varsayilanYuz(id, k) {
    if (ANA_GULER.has(id) && gor(k.gorsel, 'notr')) return gor(k.gorsel, 'notr');
    return gor(k.gorsel, k.varsayilan) || gor(k.gorsel, 'ana') || k.gorsel.ana || null;
  }
  function kisiGorseli(id, ifade) {
    ifadeUyar(id, ifade);
    // Feride'nin portresi giydiği kıyafete göre değişir (ör. pembe tafta): kiyafet.portre -> karakter seti
    if (id === 'f' && S && S.giyili && !S.gorunumBekliyor) { // görünüm kartı açılana dek eski portre kalır
      const kf = V.kiyafetler[S.giyili];
      const portreSet = kf && (kf.portre || (S.giyili === 'dugun' ? 'f' : null));
      const alt = portreSet && V.karakterler[portreSet];
      if (alt && alt.gorsel) {
        /* Tur 31: kıyafet setinde sıra (1) setin kendi resimleri, ifadenin düşüş zinciri boyunca; setin 'ana'sı
           gülmüyorsa (fsade, fmavi, faksam, fgecelik, fferace) o da sette son aday; (2) bulunmazsa temel Feride
           (fazila) seti aynı zincirle; (3) en son setin ana resmi. Böylece pembe taftada mahzun/kararli/endiseli
           satırı gülen fpembe_ana'yı değil, fpembe'de varsa yakın duyguyu, yoksa temel setin yüzünü gösterir.
           Takı (gerdanlık) takılıyken her aday için önce '<ifade>_gerdanlik' / 'gerdanlik_<ifade>' resmi aranır;
           setin tek takı resmi (fsade_gerdanlik) yalnız taşıdığı yüzün (TAKI_YUZU) sırasında kullanılır, yani
           gülme dışındaki ifadede ifade portresi öne geçer. */
        /* Tur 32 sırası: (1) setin kendi resimleri, zincir boyunca (takı takılıysa önce takılı çeşit; setin tek takı
           resmi TAKI_YUZU'daki yüzlerde); (2) kararli/ciddi/soguk (IFADE_KESIN) sette yoksa temel setin aynı yüzü;
           (3) ana'sı gülen sette (fpembe) gülmeyen ifade için setin yakın yüzü (SET_YAKIN: şaşkın/ağlamaklı →
           endişeli, mahzun → endişeli), elbise değişmesin; (4) gülme ifadesi ya da ana'sı gülmeyen sette setin ana'sı;
           (5) temel set aynı zincirle; (6) setin ana'sı. */
        const setId = portreSet, g = alt.gorsel;
        // Tur 35: takı ve madalyon hâli ifade değişiminden bağımsızdır. Yalnız kayıtlı çeşitler kullanılır.
        const t35 = S.taki && S.taki !== 'madalyon' ? S.taki : null, bf35 = S.bayrak || {};
        const hal35 = bf35.madalyon_kural === 'elbise'
          ? (S.giyili === 'nisan_yadigar' ? 'acik' : 'sakli')
          : (bf35.madalyon_hal || 'acik');
        const durum35 = hal35 === 'yok' ? 'sakli' : hal35;
        // Askı, şal ve madalyon hâli birlikte çözülür.
        if (bf35.p14_aski) {
          const askiAd = bf35.p15_aski === 'sakla' ? 'sargili_sal' : 'sargili';
          const aski = gor(g, askiAd + '_' + durum35) || gor(g, askiAd);
          if (aski) return saydamla(aski);
        }
        const yuzler35 = [ifade || 'ana'].concat(ifadeAdaylari(ifade || 'ana')).filter((x, i, a) => a.indexOf(x) === i);
        const anahtar35 = [];
        for (const yuz of yuzler35) {
          if (t35) anahtar35.push(yuz + '_' + t35 + '_' + durum35, t35 + '_' + yuz + '_' + durum35);
          else anahtar35.push(yuz + '_' + durum35, durum35 + '_' + yuz);
        }
        if (t35) {
          anahtar35.push(t35 + '_' + durum35);
          for (const yuz of yuzler35) anahtar35.push(yuz + '_' + t35, t35 + '_' + yuz);
          anahtar35.push(t35);
        } else anahtar35.push('ana_' + durum35, durum35);
        for (const anahtar of anahtar35) {
          const resim35 = gor(g, anahtar);
          if (resim35) return saydamla(resim35);
        }
        // Eksik saklı/açık resim üretilmiş sayılmaz. Gerdanlığın mevcut tek resmi, takısız yüze düşmez.
        // 'ana' etiketi kıyafet setinde setin kendi ana resmidir (temel sete geçip elbiseyi değiştirmesin)
        if (!ifade || ifade === 'ana' || TEK_YUZLU_SET.has(setId)) return saydamla(gor(g, 'ana') || g.ana || null);
        /* Tur 33 sırası: (0) SET_DISI_ONCE (ağlamaklı): setin kendi resmi, yoksa temel setin aynı resmi; (1) setin
           resimleri zincir boyunca (tebessümde SET_ZINCIR; setin ana'sı SET_ANA_YUZ'daki yüzlerde o ifade sayılır);
           (2) IFADE_KESIN → temel set; (3) gülmeyen ifadede setin yakın yüzü (SET_YAKIN, bütün setler); (4) gülme
           ifadesi ya da ana'sı gülmeyen sette setin ana'sı; (5) temel set aynı zincirle; (6) setin ana'sı. */
        const aday = SET_ZINCIR[ifade] || ifadeAdaylari(ifade), gulme = IFADE_GULME.has(ifade);
        const t = S.taki || null;
        const tekYuz = t && gor(g, t) ? (TAKI_YUZU[setId + '_' + t] || null) : null;
        const anaYuz = SET_ANA_YUZ[setId] || [];
        const setAnasi = () => (t && (gor(g, 'ana_' + t) || gor(g, t + '_ana'))) || gor(g, 'ana');
        const setAra = (liste) => {
          for (const x of liste) {
            if (x === 'ana') continue;
            let src = t ? (gor(g, x + '_' + t) || gor(g, t + '_' + x)) : null;
            // Takı resminin yüzü kesin ifadeyi (kararli...) taşımıyorsa o satırda kullanılmaz (fsade_gerdanlik mahzun yüzlü)
            const takiUyar = tekYuz ? tekYuz.includes(x) && (!IFADE_KESIN.has(ifade) || tekYuz.includes(ifade)) : (gulme && x === ifade);
            if (!src && t && gor(g, t) && takiUyar) src = gor(g, t);
            if (!src) src = gor(g, x);
            if (!src && anaYuz.includes(x)) src = setAnasi();
            if (src) return src;
          }
          return null;
        };
        const temel = V.karakterler.f && V.karakterler.f.gorsel;
        let src = null;
        const once = SET_DISI_ONCE[ifade];
        if (once) src = setAra(once) || (temel ? zincirdeAra(temel, once, false) : null);
        if (!src) src = setAra(aday);
        if (!src && temel && IFADE_KESIN.has(ifade)) src = zincirdeAra(temel, aday, false);
        if (!src && !gulme) src = setAra((SET_YAKIN[ifade] || []).filter((x) => !aday.includes(x)));
        if (!src && (gulme || !ANA_GULER.has(setId))) src = setAnasi();
        if (!src && temel) src = zincirdeAra(temel, aday, false) || zincirdeAra(temel, kisiYakin('f', ifade, gulme), false) || zincirdeAra(temel, aday, true);
        return saydamla(src || gor(g, 'ana') || g.ana || null);
      }
    }
    const k = V.karakterler[id];
    if (!k || !k.gorsel) return null;
    // Tur 35: Remzi gecesindeki hayırda Perihan beyaz ipek ve mavi kurdele taşır.
    if (id === 'calibe' && S && S.bolum === 116 && S.bayrak && S.bayrak.p16_hayir === 'gece') {
      const geceYuz = gor(k.gorsel, (ifade || k.varsayilan || 'ana') + '_aksam') || gor(k.gorsel, 'ana_aksam');
      if (geceYuz) return saydamla(geceYuz);
    }
    // Etiketsiz satır; gülen ana'lı kişide 'ana' etiketi de varsayılan yüz sayılır (nötr portre varsa o)
    if (!ifade || (ifade === 'ana' && ANA_GULER.has(id))) return saydamla(varsayilanYuz(id, k));
    if (gor(k.gorsel, ifade)) return saydamla(gor(k.gorsel, ifade));
    // Tur 33: ANA_SIRITAN (Sadberk) gülmeyen satırda ana'dan kaçınır, gülme satırında ana'ya önce bakar
    const gulme = IFADE_GULME.has(ifade), anaGuler = ANA_GULER.has(id) || ANA_SIRITAN.has(id);
    const anaSerbest = gulme || !anaGuler;
    const aday = ifadeAdaylari(ifade), yakin = kisiYakin(id, ifade, gulme);
    // Kişiye özgü yakın yüz (KISI_YAKIN) zincirin kendi resimlerinden sonra, ana'dan önce
    return saydamla(zincirdeAra(k.gorsel, aday, false, gulme && anaGuler) ||
      (yakin.length ? zincirdeAra(k.gorsel, yakin, false) : null) ||
      (anaSerbest ? gor(k.gorsel, 'ana') : null) ||
      (!gulme && anaGuler ? zincirdeAra(k.gorsel, GULMEYEN_YEDEK, false) : null) || varsayilanYuz(id, k));
  }

  // Bölüm, saate göre aynı odanın başka fonunu seçebilir (ör. gündüz ışıklı salon): bolum.fon(S, mekanId)
  // Plan vaktinde çeşit adıyla (ör. 'taslik_gunduz') girilen yer asıl düğüme çevrilir; ışığı planCesit'te kalır.
  let planCesit = {}; // asıl mekân -> fon çeşidi (yalnız süren plan vaktinde)
  function fonCoz(mekanId) {
    const b = S && bolum();
    const f = (b && b.fon && b.fon(S, mekanId)) || planCesit[mekanId];
    return (f && V.mekanlar[f] && V.mekanlar[f].arkaplan) ? f : mekanId;
  }
  /* ---- Gece ışığı (görsel T1 fon madde 22, 18 Kasım 2026 gecesi) ----
     Gece vaktinde gündüz resmi gösterilen fon koyulaştırılır: CSS süzgeci (karartma, solgunluk) + mavi-mor
     perde (#isik-perde, multiply) + hafif lamba sıcaklığı ve kenar gölgesi (#isik-lamba). Gerçek gece resmine
     dokunulmaz. Vaktin bilgisi motorun bildiği yerlerden gelir, öncelik sırasıyla:
       1) Bu olaydaki ara sayfanın başlığı ("Gece · bahçe duvarı", "Selamlık sofası · yatsı") ya da serbest
          vaktin adı ("Yatmadan önce"); ad saat söylemiyorsa vaktin hedef odasının bölümce seçilen ışığı.
       2) Bölüm fon() ile açıkça gündüz çeşidi (…_gunduz) seçtiyse gündüz.
       3) Önceki olaydan kalan vakit.
     Kendi resmi olmayan gece kimliği (ada_camlik_gece, bahce_gece: bölüm YEDEK'i başka bir odanın resmini
     bağlamış) asıl yerin resmiyle ve gece süzgeciyle gösterilir: doğru yer, yaklaşık ışık.
     Kişi portreleri de gece ve akşam fonlarında çok hafif aynı tona girer (yapıştırılmış görünmesin). */
  const FON_ISIK = { // elle sınıflandı (kontakt sayfası, notlar/denetim/gorsel_t1_fon.md): G gece, A akşam, D gündüz
    ada_bahce: 'D', ada_camlik: 'D', ada_duvar: 'D', ada_iskele: 'D', ada_iskele_aksam: 'A', ada_kapi_perihan: 'G', ada_misafir: 'G',
    ada_misafir_gunduz: 'D', ada_mutfak: 'D', ada_oda: 'D', ada_oda_gece: 'G', ada_selamlik_gece: 'G', ada_selamlik_gunduz: 'D',
    ada_sofa: 'G', ada_sofa_gunduz: 'D', anlati_sezon1: 'A', araba_ici: 'D', buyuk_salon: 'G', buyuk_salon_gunduz: 'D', calibe_oda: 'G',
    calibe_oda_gunduz: 'D', cardak: 'D', dugun_bahce: 'D', dugun_kose: 'D', dugun_sofa: 'D', fazila_oda: 'G', fazila_oda_gunduz: 'D',
    fevkiye_anne_oda: 'D', fevkiye_kapi: 'D', fevkiye_konak: 'D', fevkiye_oda: 'D', gelin_odasi: 'D', josephine_oda: 'G',
    josephine_oda_gunduz: 'D', kabul_gunu: 'D', konak_bahce: 'D', konak_kapi: 'D', konak_sofa: 'G', konak_sofa_gunduz: 'D', limonluk: 'D',
    mabeyn_kapisi: 'G', mabeyn_kapisi_gunduz: 'D', mabeyn_merdiven: 'G', mabeyn_merdiven_gunduz: 'D', mutfak: 'G', mutfak_gunduz: 'D',
    sari_oda: 'D', selamlik_kapisi: 'G', selamlik_kapisi_gunduz: 'D', selamlik_sofa_gunduz: 'D', suha_oda: 'G', taslik: 'G',
    taslik_gunduz: 'D', yemek_salonu: 'G', yemek_salonu_gunduz: 'D',
    // Tur 27 yeni resimler (bakılarak): çarşı, avlu, vapur güvertesi gündüz; mehtaplı çamlık ve bahçe geceleri gece
    carsi: 'D', konak_avlu: 'D', vapur_guverte: 'D', ada_camlik_gece: 'G', bahce_gece: 'G', konak_bahce_gece: 'G',
  };
  // Kendi resmi olmayan gece kimliğinin asıl yeri (ada_camlik_gece gibi adlar '_gece' atılarak bulunur).
  // Tur 27: bahce_gece ve ada_camlik_gece kendi resimleriyle; bu tablo onlar için artık devreye girmez (cardak_gece bekliyor).
  const GECE_ASIL = { bahce_gece: 'konak_bahce', cardak_gece: 'cardak' };
  // Ödünç resmi yanlış yeri gösteren kimlik: resmi gelene kadar en yakın doğru yer (fon T1 P0-2: vapur sahnesi çamlıkta).
  // Tur 27: vapur_guverte kendi resmine kavuştu (iskele kopyası kalktı); kendi resmi olan kimlikte bu tablo zaten devreye girmez.
  const FON_YAKIN = {};
  /* Tur 27: gece sahnesinde gündüz resmi gösterilecek yerin aynı kompozisyonda gerçek gece resmi varsa (konak_bahce →
     konak_bahce_gece, ada_camlik → ada_camlik_gece, ada_oda → ada_oda_gece) süzgeç yerine o resim gösterilir. Ses ve
     ad için kimlik asıl yer kalır; plan noktaları da aynı (gece/gündüz çifti aynı kompozisyonla çizildi). */
  const geceResmi = (id) => { const g = id && !/_gece$/.test(id) ? id + '_gece' : null; return g && kendiResmi(g) ? V.mekanlar[g] : null; };
  let sahneZamani = null;   // { isik: 'gece' | 'aksam' | 'gunduz', olay } ara sayfa başlığından ya da vakit adından
  let suankiOlay = null;    // süren olayın kimliği (sahneZamani'nın tazeliği için)
  const dosyaAdi = (src) => String(src || '').split('?')[0].split('/').pop().replace(/^g_/, '').replace(/\.webp$/, '');
  const kendiResmi = (id) => { const m = V.mekanlar[id]; return !!(m && m.arkaplan && dosyaAdi(m.arkaplan) === id); };
  function resimIsigi(src) {
    const ad = dosyaAdi(src);
    if (FON_ISIK[ad]) return FON_ISIK[ad];
    if (/_gece$/.test(ad)) return 'G';
    if (/_aksam$/.test(ad)) return 'A';
    if (/_gunduz$/.test(ad)) return 'D';
    // Yeni resim: konak düzeninde gündüz çifti olan asıl resim gecedir; çifti yoksa gündüz sayılır
    return kendiResmi(ad + '_gunduz') ? 'G' : 'D';
  }
  // Ara sayfa başlığı ya da vakit adından vakit: 'gece' | 'aksam' | 'gunduz' | null (saat söylemiyorsa)
  function zamanOku(metin) {
    const t = String(metin || '').toLocaleLowerCase('tr');
    if (/gece|yatsı|yatmadan|sabaha karşı|şafaktan önce|mehtap/.test(t)) return 'gece';
    if (/akşamüstü|ikindi sonu/.test(t)) return 'gunduz';
    // Tur 27: şafak sökünce gün ışığıdır ("şafaktan sabaha", "şafak sökerken", "sabah ezanı"); akşam ezanı
    // kalıbına düşmesin. Başlıkta "akşam" geçiyorsa ("Akşam ezanından önce") akşam kalır; yalın "şafak" alacakaranlık.
    if (/şafak sök|şafaktan sabaha|şafaktan sonra|şafakla|sabah/.test(t) && !/akşam/.test(t)) return 'gunduz';
    if (/ezan|şafak|akşam/.test(t)) return 'aksam';
    if (/sabah|öğle|kuşluk|ikindi|kahve|görücü|gündüz|ertesi gün/.test(t)) return 'gunduz';
    return null;
  }
  function zamanKoy(isik) { if (isik) sahneZamani = { isik, olay: suankiOlay }; }
  function sahneIsigi(fonId) {
    if (sahneZamani && sahneZamani.olay === suankiOlay) return sahneZamani.isik;
    if (/_gunduz$/.test(fonId || '')) return 'gunduz';
    return sahneZamani ? sahneZamani.isik : null;
  }
  // Bir mekân için ekranda görünecek fon: { id (ses ve ad için), m, src, suzgec: 'gece'|'aksam'|null, kisi, isik }
  function fonGorunumu(mekanId, cozme) {
    const id = cozme ? mekanId : fonCoz(mekanId);
    let m = V.mekanlar[id], zorGece = false;
    if (m && m.arkaplan && !kendiResmi(id)) {
      const asil = GECE_ASIL[id] || (/_gece$/.test(id) ? id.replace(/_gece$/, '') : null);
      if (asil && kendiResmi(asil)) { m = V.mekanlar[asil]; zorGece = true; }
      else if (FON_YAKIN[id] && kendiResmi(FON_YAKIN[id])) m = Object.assign({}, m, { arkaplan: V.mekanlar[FON_YAKIN[id]].arkaplan });
    }
    const z = zorGece ? 'gece' : sahneIsigi(id);
    if (z === 'gece' && !zorGece && m && m.arkaplan && resimIsigi(m.arkaplan) === 'D') { const gm = geceResmi(id); if (gm) m = gm; }
    const src = (m && m.arkaplan) || null;
    if (!src) return { id, m, src: null, suzgec: null, kisi: null, isik: null };
    const isik = resimIsigi(src);
    let suzgec = null;
    if (z === 'gece') suzgec = isik === 'D' ? 'gece' : (isik === 'A' ? 'aksam' : null);
    else if (z === 'aksam' && isik === 'D') suzgec = 'aksam';
    const kisi = suzgec || (isik === 'G' ? 'gece' : (isik === 'A' ? 'aksam' : null));
    // Ortam sesi için görünen ışık: süzgeçsiz gündüz resmi gündüzdür
    return { id, m, src, suzgec, kisi, isik: suzgec ? (suzgec === 'gece' ? 'gece' : 'aksam') : (isik === 'G' ? 'gece' : isik === 'A' ? 'aksam' : 'gunduz') };
  }
  function isikKatmanlari() {
    const s = $('#sahne');
    let p = $('#isik-perde');
    if (!p && s) {
      p = document.createElement('div'); p.id = 'isik-perde';
      const l = document.createElement('div'); l.id = 'isik-lamba';
      const y = $('#arkaplan-yedek');
      if (y && y.nextSibling) { s.insertBefore(p, y.nextSibling); s.insertBefore(l, p.nextSibling); } else { s.appendChild(p); s.appendChild(l); }
    }
    return p;
  }
  // Süzgeci ve portre tonunu uygula (fon resmi gerçekten değiştiği anda çağrılır; eski resim yanlış ışıkta kalmasın)
  function isikUygula(g) {
    isikKatmanlari();
    const img = $('#arkaplan'), s = $('#sahne');
    const sz = (g && g.src) ? g.suzgec : null, ks = (g && g.src) ? g.kisi : null;
    img.classList.toggle('suzgec-gece', sz === 'gece');
    img.classList.toggle('suzgec-aksam', sz === 'aksam');
    s.classList.toggle('fon-gece', sz === 'gece');
    s.classList.toggle('fon-aksam', sz === 'aksam');
    s.classList.toggle('isik-gece', ks === 'gece');
    s.classList.toggle('isik-aksam', ks === 'aksam');
  }
  function arkaplanGoster(mekanId) {
    const g = fonGorunumu(mekanId);
    const m = g.m;
    // Ortam sesi gösterilen fona ve ışığına göre (gündüz çeşidinde konak gecesi saati çalmaz)
    try { if (window.SES && SES.mekan) SES.mekan(g.id, g.isik); } catch (e) { /* ses yoksa oyun sürer */ }
    const img = $('#arkaplan'), yedek = $('#arkaplan-yedek');
    yedek.dataset.ad = m ? m.ad : '';
    if (!g.src) { img.dataset.hedef = ''; img.removeAttribute('src'); yedek.classList.add('goster'); isikUygula(null); return; }
    yedek.classList.remove('goster');
    // Yeni fon tamamen yüklenene kadar eskisi ekranda kalır (boş/yarım kare görünmesin)
    if (img.getAttribute('src') === g.src) { img.dataset.hedef = g.src; isikUygula(g); return; }
    if (img.dataset.hedef === g.src) return;
    const hedef = g.src;
    img.dataset.hedef = hedef;
    if (hazirMi(hedef)) { img.src = hedef; isikUygula(g); return; } // önbellekte: aynı karede değiş
    const on = new Image();
    on.onload = () => { if (img.dataset.hedef === hedef) { img.src = hedef; isikUygula(g); } };
    on.onerror = () => { if (img.dataset.hedef === hedef) { img.removeAttribute('src'); yedek.classList.add('goster'); isikUygula(null); } };
    on.src = hedef;
  }

  // Bölümdeki bütün fon ve portreleri arka planda önceden yükle
  const onYuklenen = new Map(); // src -> Image (çözülmüş görseller bellekte kalsın)
  function hemenYukle(src) {
    if (!src || onYuklenen.has(src)) return;
    const im = new Image(); im.decoding = 'async';
    im.addEventListener('error', () => gorselBozuk(src), { once: true }); // Tur 32: eksik webp zincirde atlansın
    im.src = src; onYuklenen.set(src, im);
  }
  // Görsel yüklenip çözülene kadar bekle (en çok ms); metin görselden önce başlamasın
  function gorselHazir(src, ms) {
    if (!src) return Promise.resolve();
    hemenYukle(src);
    const im = onYuklenen.get(src);
    const sure = (t) => new Promise((r) => setTimeout(r, t));
    // decode() arka plandaki sekmede hiç sonuçlanmayabilir: her zaman süreyle yarıştır
    const coz = () => Promise.race([im.decode ? im.decode().catch(() => {}) : Promise.resolve(), sure(200)]);
    if (im.complete && im.naturalWidth) return coz();
    const bekle = new Promise((r) => {
      im.addEventListener('load', () => coz().then(r), { once: true });
      im.addEventListener('error', () => r(), { once: true });
    });
    return Promise.race([bekle, sure(ms || 1200)]);
  }
  function fonHazir(mekanId) {
    const src = fonGorunumu(mekanId).src;
    return (src && !hazirMi(src)) ? gorselHazir(src, 1500) : Promise.resolve();
  }
  const hazirMi = (src) => { const im = onYuklenen.get(src); return !!(im && im.complete && im.naturalWidth); };
  function kisiGorselleriniYukle(id) {
    const g = V.karakterler[id] && V.karakterler[id].gorsel;
    if (g) for (const k of Object.keys(g)) hemenYukle(saydamla(g[k]));
    // Feride: giydiği kıyafetin portre seti de (giyin sonrası ilk replik beklemesin; görsel T1 ifade G7)
    if (id === 'f' && S && S.giyili) {
      const kf = V.kiyafetler[S.giyili], alt = kf && kf.portre && V.karakterler[kf.portre];
      if (alt && alt.gorsel) for (const k of Object.keys(alt.gorsel)) hemenYukle(saydamla(alt.gorsel[k]));
    }
  }
  function gorselleriOnYukle() {
    // Önce Feride'nin bütün ifadeleri (her sahnede var), sonra fonlar, sonra öteki kişiler
    kisiGorselleriniYukle('f');
    const liste = [];
    for (const id of Object.keys(V.mekanlar)) if (V.mekanlar[id].arkaplan) liste.push(V.mekanlar[id].arkaplan);
    for (const id of Object.keys(V.karakterler)) {
      const g = V.karakterler[id].gorsel;
      if (g) for (const k of Object.keys(g)) liste.push(g[k]);
    }
    const sira = liste.filter((s) => s && !onYuklenen.has(s));
    let i = 0;
    (function sonraki() {
      for (let n = 0; n < 8 && i < sira.length; n++, i++) hemenYukle(sira[i]);
      if (i < sira.length) setTimeout(sonraki, 60);
    })();
  }

  /* Tur 33 (envanter M5): boydan setin konuşma portresi yüzün çevresinden büyütülür (PORTRE_KIRP). Ölçek yüzün
     ortasından uygulanır; oyun.css'teki alt kenar maskesi (#000 %38 → saydam %50) ölçekle birlikte aşağı kaymasın
     diye maske durakları ters ölçekle yeniden hesaplanır. Saydam olmayan (çerçeveli) portrede uygulanmaz. */
  function portreKirpUygula(p, src) {
    const k = src && src.includes('/s_') ? portreKirp(src) : null;
    if (!k) {
      if (p.dataset.kirp) { p.style.transform = ''; p.style.transformOrigin = ''; p.style.webkitMaskImage = ''; p.style.maskImage = ''; delete p.dataset.kirp; }
      return;
    }
    const durak = (y) => (k.y + (y - k.y) / k.olcek).toFixed(1) + '%';
    const maske = 'linear-gradient(to bottom, #000 ' + durak(38) + ', transparent ' + durak(50) + ')';
    p.style.transformOrigin = k.x + '% ' + k.y + '%';
    p.style.transform = 'scale(' + k.olcek + ')';
    p.style.webkitMaskImage = maske; p.style.maskImage = maske;
    p.dataset.kirp = '1';
  }
  // Feride'nin küçük konuşma portresi: yeni ifade yüklenmeden eskisi değişmez; ilk açılışta
  // görsel gelene kadar portre gizli kalır (boş çerçeve görünmesin)
  function portreKoy(src) {
    const p = $('#fazila-portre');
    if (!src) return;
    p.classList.toggle('saydam', src.includes('/s_'));
    if (p.getAttribute('src') === src) { p.dataset.hedef = src; portreKirpUygula(p, src); return; }
    if (p.dataset.hedef === src) return;
    p.dataset.hedef = src;
    if (hazirMi(src)) { p.src = src; portreKirpUygula(p, src); p.style.visibility = ''; return; } // önbellekte: aynı karede değiş
    if (!p.getAttribute('src')) p.style.visibility = 'hidden';
    const on = new Image();
    on.onload = () => { if (p.dataset.hedef === src) { p.src = src; portreKirpUygula(p, src); p.style.visibility = ''; } };
    // Tur 32: açılamayan resim kırık çerçeve olarak konmaz; eski yüz kalır, sonraki satır zincirden yenisini seçer
    on.onerror = () => { gorselBozuk(src); if (p.dataset.hedef === src) { p.dataset.hedef = ''; if (p.getAttribute('src')) p.style.visibility = ''; } };
    on.src = src;
  }

  // Yeni biçim: üst çubukta adayların gönül çubukları, itibar ve koz sayısı
  const GOSTERGE_ADI = { mukaddem: 'Kenan', suha: 'Süha', remzi: 'Remzi', itibar: 'İtibar' };
  function gostergeleriCiz(degisen) {
    const kutu = $('#gostergeler');
    if (!kutu) return;
    if (!dogrusalMi()) { kutu.hidden = true; return; }
    kutu.hidden = false;
    const fark = {};
    (degisen || []).forEach((d) => { fark[d[0]] = d[1]; });
    // Fareyle üstüne gelince: aday çubuğu onun ilgisi, Feride'nin tercihi değil (madde 12)
    const ipucu = (id) => (id === 'itibar' ? 'Konakta ve mahallede adın' : GOSTERGE_ADI[id] + ' sana ne kadar ilgili (senin tercihin değil)');
    const satir = (id, deger) => '<span class="gosterge' + (fark[id] > 0 ? ' artti' : (fark[id] < 0 ? ' azaldi' : '')) + '" data-g="' + id + '" title="' + ipucu(id) + '">' +
      '<i>' + GOSTERGE_ADI[id] + '</i><span class="cubuk"><span style="width:' + sinirla(deger, 0, 100) + '%"></span></span>' +
      (fark[id] ? '<em>' + (fark[id] > 0 ? '+' : '') + fark[id] + '</em>' : '') + '</span>';
    // Henüz karşılaşılmamış aday üstte görünmez (puan tablosu gibi durmasın); ilk karşılıkla belirir.
    // Aday çubuğu ölçekli yüzdedir (gonulYuzde); itibar 0-100. Eşikli aday (Remzi) eşiği geçince belirir.
    const gorunen = (bolum().adaylar || []).filter(gonulGorunur);
    kutu.innerHTML = gorunen.map((id) => satir(id, gonulYuzde(id))).join('') + satir('itibar', S.v.itibar) +
      '<span class="gosterge koz' + (fark.koz ? ' artti' : '') + '"><i>Koz</i><b>' + (S.kozlar || []).length + '</b></span>';
    // Ses yalnız ekranda görünen bir değişim için (gizli çubuğun "+N"i sessiz)
    const duyulan = (degisen || []).filter((d) => !(d[0] in S.gonul) || gorunen.includes(d[0]));
    if (duyulan.length) SES.efekt(duyulan.some((d) => d[1] < 0) ? 'bildirim' : 'odul');
  }

  function mekandakiler() {
    if (!bolum().kisiler) return [];
    const liste = (bolum().kisiler(S)[S.mekan]) || [];
    return liste.map((id) => ({ id, ifade: null }));
  }

  function bekleyenOlay(mekan, kisi) {
    return (bolum().olaylar || []).find((o) => o.mekan === mekan && (kisi ? o.kisi === kisi : o.tetik === 'giris') &&
      !S.biten.includes(o.id) && (!o.kosul || o.kosul(S)));
  }

  function kisileriCiz() {
    // Kartlar her seferinde baştan kurulmaz: var olan kart yerinde güncellenir, yeni ifade
    // görseli yüklenene kadar eskisi kalır. Böylece konuşan değişince boş çerçeve görünmez.
    const kutu = $('#kisiler');
    // Plan vaktinde oyuncu yürürken kartlar adıyla görünür. Kişiye dokunmak bedelli işi başlatmaz
    // (yanlış dokunuş vakit harcamasın); yalnız "Burada: … · 1 vakit" düğmesini parlatır.
    const planBekliyor = !!(planDurum && planDurum.bekliyor);
    kutu.classList.toggle('diyalogda', mesgul && !planBekliyor);
    const liste = mesgul ? (sahnedekiler || []) : mekandakiler();
    const eskiler = new Map([...kutu.children].map((c) => [c.dataset.id, c]));
    const kalan = new Set();
    for (const k of liste) {
      const veri = V.karakterler[k.id] || { ad: k.id };
      let kart = eskiler.get(k.id);
      if (!kart) {
        kart = document.createElement('div');
        kart.dataset.id = k.id;
        const r = document.createElement('div');
        const ad = document.createElement('div');
        ad.className = 'ad';
        ad.textContent = veri.ad;
        kart.append(r, ad);
        const id = k.id;
        kart.addEventListener('click', () => {
          if (planDurum && planDurum.bekliyor) {
            const b = planDurum.olayKisi === id && document.querySelector('#cikislar .dugme.burada');
            if (b) { b.classList.remove('dikkat'); void b.offsetWidth; b.classList.add('dikkat'); b.focus(); }
            return;
          }
          if (!mesgul) kisiyeTikla(id);
        });
      }
      kart.className = 'kisi' + (veri.grup ? ' grup' : '') +
        // Eşya kartı (kitap, mor göl...) konuşmayan insanlar gibi karartılmaz; nesne odağı parlak kalır
        (mesgul && konusanId && !veri.esya ? (k.id === konusanId ? ' konusuyor' : ' sessiz') : '') +
        (planBekliyor && planDurum.olayKisi === k.id ? ' olay' : '') +
        (!mesgul && bekleyenOlay(S.mekan, k.id) ? (bekleyenOlay(S.mekan, k.id).yan ? ' olay yan' : ' olay') : '');
      resmiKoy(kart, kart.firstChild, veri, kisiGorseli(k.id, k.ifade));
      // Grup portresinde (dört hanım) konuşan yüzün üstüne ışık düşür
      const vx = veri.grup && mesgul && grupKonusan && GRUP_YERI[grupKonusan];
      kart.classList.toggle('vurgu', !!vx);
      if (vx) kart.firstChild.style.setProperty('--vx', vx);
      kutu.appendChild(kart); // sırayı da korur
      kalan.add(k.id);
    }
    for (const [id, c] of eskiler) if (!kalan.has(id)) c.remove();
    // Kalabalık sahnede (ör. altı kart) kartlar orantılı küçülür; kenardaki konuşan yüz kesilmesin
    let toplam = 0;
    for (const k of liste) { const v = V.karakterler[k.id] || {}; const sd = (kisiGorseli(k.id, k.ifade) || '').includes('/s_'); toplam += v.grup ? 29 : v.esya ? 19 : sd ? 30 : 17; }
    toplam += 2.5 * Math.max(0, liste.length - 1);
    kutu.style.setProperty('--o', toplam > 94 ? (94 / toplam).toFixed(3) : '1');
  }

  function resmiKoy(kart, resim, veri, src) {
    resim.className = 'resim' + (veri.esya ? ' esya' : '') + (src && src.includes('/s_') ? ' saydam' : '');
    kart.classList.toggle('saydam-kisi', !!(src && src.includes('/s_')));
    if (!src) {
      resim.classList.add('yer-tutucu');
      if (!resim.querySelector('span')) {
        resim.innerHTML = '';
        const harf = document.createElement('span');
        harf.textContent = veri.harf || (veri.ad || '?').charAt(0);
        resim.appendChild(harf);
      }
      kart.classList.remove('yukleniyor');
      return;
    }
    let img = resim.querySelector('img');
    if (!img) {
      resim.innerHTML = '';
      img = document.createElement('img');
      img.alt = veri.ad;
      kart.classList.add('yukleniyor'); // ilk görsel gelene kadar kart görünmez
      img.onload = () => kart.classList.remove('yukleniyor');
      // Tur 32: resim açılamazsa işaretlenir ve kartlar yeniden çizilir (zincir bir sonraki yüzü seçer)
      img.onerror = () => { kart.classList.remove('yukleniyor'); if (gorselBozuk(img.getAttribute('src'))) setTimeout(kisileriCiz, 0); };
      img.src = src;
      resim.appendChild(img);
      if (img.complete) kart.classList.remove('yukleniyor');
      return;
    }
    if (img.getAttribute('src') === src) { resim.dataset.hedef = src; return; }
    if (resim.dataset.hedef === src) return;
    resim.dataset.hedef = src;
    if (hazirMi(src)) { img.src = src; return; } // önbellekte: aynı karede değiş
    const on = new Image();
    on.onload = () => { if (resim.dataset.hedef === src) img.src = src; };
    on.onerror = () => { if (resim.dataset.hedef === src) resim.dataset.hedef = ''; if (gorselBozuk(src)) setTimeout(kisileriCiz, 0); };
    on.src = src;
  }

  function cikislariCiz() {
    const kutu = $('#cikislar');
    kutu.innerHTML = '';
    // Bölüm bittiyse sonuç paneline (ve sonraki bölüme) dönüş yolu hep görünür kalır
    if (S.bolumBitti && !mesgul) {
      const b = document.createElement('button');
      b.className = 'dugme hedef';
      b.textContent = 'Bölüm sonucu ›';
      b.addEventListener('click', () => bolumSonu());
      kutu.appendChild(b);
      return;
    }
    if (mesgul || S.bolumBitti || bolum().dogrusal) return;
    const komsular = (faz().baglanti[S.mekan]) || [];
    const yon = hedefYonu();
    // İsteğe bağlı (yan) konuşmaların beklediği odalar: ana hedeften ayrı, küçük bir işaretle
    const yanVar = new Set((bolum().olaylar || []).filter((o) => o.yan && !S.biten.includes(o.id) && (!o.kosul || o.kosul(S)) &&
      (!o.kisi || ((bolum().kisiler(S)[o.mekan]) || []).includes(o.kisi))).map((o) => o.mekan));
    for (const id of komsular) {
      const b = document.createElement('button');
      b.className = 'dugme';
      b.textContent = V.mekanlar[id].ad;
      // Bekleyen olaya giden en kısa yolun ilk adımı işaretlenir (olay iki oda ötede olsa bile)
      if (yon.has(id)) b.classList.add('hedef');
      else if (yanVar.has(id)) { b.classList.add('yanvar'); b.title = 'Orada seninle konuşmak isteyen biri var (isteğe bağlı)'; }
      b.addEventListener('click', () => git(id));
      kutu.appendChild(b);
    }
  }

  // Bekleyen olayların mekânlarına giden en kısa yollarda bulunulan yerden sonraki adımlar
  function hedefYonu() {
    const b = faz().baglanti || {};
    const tumBekleyen = (bolum().olaylar || [])
      .filter((o) => !S.biten.includes(o.id) && (!o.kosul || o.kosul(S)));
    // Ana hedef olayları: yalnız şu anki görevde geçerli olanlar (bir önceki ve bir sonraki görevde
    // koşulu tutmayanlar). Aralıkla açık kalan yan içerikler bunlardan sayılmaz. Ana hedef varsa
    // yalnız ona yol gösterilir; yan içerik ana rotayı saptırmaz.
    const anaMi = (o) => {
      if (!o.kosul || o.yan) return false; // veride "yan: true" diye işaretli olaylar ana rota sayılmaz
      try {
        return !o.kosul(Object.assign({}, S, { gorev: S.gorev + 1 })) && !o.kosul(Object.assign({}, S, { gorev: S.gorev - 1 }));
      } catch (e) { return false; }
    };
    const ana = tumBekleyen.filter(anaMi);
    const secilen = ana.length ? ana : tumBekleyen;
    const sonuc = new Set();
    // Hedef zaten bu odadaysa (ör. ünlemli Nimet) dışarı çıkış önerilmez
    if (secilen.some((o) => o.mekan === S.mekan)) return sonuc;
    const hedefler = new Set(secilen.map((o) => o.mekan));
    if (!hedefler.size) return sonuc;
    // Her komşudan genişlik öncelikli arama; en kısa mesafeli komşular işaretlenir
    let enKisa = Infinity; const mesafe = {};
    for (const k of b[S.mekan] || []) {
      const gorulen = new Set([S.mekan, k]); let kat = [k], d = 0, bulundu = Infinity;
      while (kat.length && d < 8) {
        if (kat.some((x) => hedefler.has(x))) { bulundu = d; break; }
        const yeni = [];
        for (const x of kat) for (const y of b[x] || []) if (!gorulen.has(y)) { gorulen.add(y); yeni.push(y); }
        kat = yeni; d++;
      }
      mesafe[k] = bulundu; enKisa = Math.min(enKisa, bulundu);
    }
    if (enKisa < Infinity) for (const k of Object.keys(mesafe)) if (mesafe[k] === enKisa) sonuc.add(k);
    return sonuc;
  }

  function ustCiz() {
    const b = bolum();
    $('#bolum-adi').textContent = (b.baslik || (b.no + '. Bölüm')) + ' · ' + b.ad;
    document.body.classList.toggle('dogrusal', !!b.dogrusal);
    gostergeleriCiz();
    const g = b.gorevler[S.gorev];
    // Sahne sürerken eski "git/bul" hedefi görünmesin; hedef sahne bitince geri gelir
    $('#gorev-satiri').textContent = S.bolumBitti ? 'Bölüm tamamlandı.' : (mesgul ? '' : (g ? gMetin(g) : ''));
    $('#gorev-satiri').hidden = !S.bolumBitti && mesgul;
    $('#takat').textContent = V.ayar.takatSinirsiz ? '∞' : S.takat + '/' + V.ayar.takatAzami;
    $('#para').textContent = S.para + ' lira';
    $('#mekan-adi').textContent = mesgul ? '' : (V.mekanlar[S.mekan] ? V.mekanlar[S.mekan].ad : '');
  }

  function sahneyiCiz() {
    arkaplanGoster(geciciArkaplan || S.mekan);
    kisileriCiz();
    cikislariCiz();
    ustCiz();
    document.querySelectorAll('#ust-cubuk .dugme').forEach((d) => { d.disabled = mesgul && !panelSerbest(d.dataset.panel) && d.id !== 'atla-dugme'; });
    ipucuKur();
  }
  // Sahne sürerken de açılabilen paneller: Geçmiş her zaman; doğrusal bölümde Defter ve Gardrop da
  // (bölüm baştan sona tek akış; oyuncu bir satırda ya da seçimde durup bakabilir, oynanış T1 A3)
  const panelSerbest = (p) => p === 'gecmis' || (dogrusalMi() && (p === 'defter' || p === 'gardrop'));

  // Oyuncu 25 saniye boyunca bir yere gitmez ya da kimseyle konuşmazsa görevin ipucunu fısılda
  function ipucuKur() {
    clearTimeout(ipucuZamani);
    if (mesgul || !S || S.bolumBitti) return;
    const g = bolum().gorevler[S.gorev];
    if (!g || !g.ipucu) return;
    ipucuZamani = setTimeout(() => { if (!mesgul && !acikPanel) bildir('İpucu: ' + g.ipucu); }, 25000);
  }

  function gecmiseYolEkle(no) {
    gecmis.push({ ayirac: true, metin: BOLUMLER[no].ad + ' · yeni oynayış' });
    if (gecmis.length > 80) gecmis.shift();
  }
  function gecmisHtml() {
    if (!gecmis.length) return '<h2>Geçmiş</h2><p class="not">Henüz bir şey okunmadı.</p>';
    return '<h2>Geçmiş</h2><div class="gecmis">' + gecmis.map((s) =>
      s.ayirac ? '<h3>' + bicimle(s.metin) + '</h3>' :
      '<p>' + (s.ad ? '<b>' + s.ad + ':</b> ' : '') + bicimle(s.metin) + '</p>').join('') + '</div>';
  }

  /* ------------------------------------------------------------------ */
  /* Bildirim                                                            */
  /* ------------------------------------------------------------------ */
  // Bildirim kuyruğundaki her öğe bir satır dizisidir: ilk satır ana sonuç, ötekiler küçük ek.
  // Bir seçimin bütün sonuçları tek bildirimde toplanır (dikkat ikiye bölünmesin) ve
  // Defter'deki "Gelişmeler" sekmesine yazılır.
  const bildirimKuyrugu = [];
  let bildirimGosteriliyor = false;
  let toplayici = null; // seçim sırasında sonuçları biriktirir
  const GUNLUGE_YAZILMAZ = /^(Yeni görev:|İpucu:|Kayıt|Kod |Takatin|[+-]?\d+ lira)/;
  // Günlük kaydı: bir seçimin sonuçları tek kayıt (ana cümle + alt satırlar) olarak saklanır
  function gunlugeYaz(metin, ek) {
    if (!S || GUNLUGE_YAZILMAZ.test(metin)) return null;
    S.gunluk = S.gunluk || [];
    const kayit = { b: S.bolum, m: metin, ek: ek && ek.length ? ek : undefined };
    S.gunluk.push(kayit);
    while (S.gunluk.length > 60) S.gunluk.shift();
    return kayit;
  }
  const SOYLENTI = /dolaşan söz|fısıltı|anlatacak|hatırlamayacak/i;
  let sonKartKaydi = null; // son gösterilen söylenti kartının günlük kaydı
  function bildir(metin) {
    if (toplayici) { toplayici.push(metin); return; }
    gunlugeYaz(metin);
    kuyrugaKoy([metin]);
  }
  function kuyrugaKoy(satirlar) {
    // Eski görev bildirimleri yenisi gelince düşer; kuyruk en fazla üç bildirim tutar
    if (satirlar[0].startsWith('Yeni görev:')) {
      for (let i = bildirimKuyrugu.length - 1; i >= 0; i--) if (bildirimKuyrugu[i][0].startsWith('Yeni görev:')) bildirimKuyrugu.splice(i, 1);
    }
    bildirimKuyrugu.push(satirlar);
    while (bildirimKuyrugu.length > 3) bildirimKuyrugu.shift();
    if (!bildirimGosteriliyor) siradakiBildirim();
  }
  function siradakiBildirim() {
    const m = bildirimKuyrugu.shift();
    const kutu = $('#bildirim');
    if (!m) { bildirimGosteriliyor = false; kutu.hidden = true; return; }
    if (m[0].startsWith('Yeni görev:')) {
      const g = bolum().gorevler[S.gorev];
      if (S.bolumBitti || !g || m[0] !== 'Yeni görev: ' + gMetin(g)) { siradakiBildirim(); return; }
    }
    bildirimGosteriliyor = true;
    SES.efekt(m[0].startsWith('Yeni görev:') ? 'gorev' : (m[0].startsWith('❀') ? 'odul' : 'bildirim'));
    kutu.hidden = false;
    kutu.innerHTML = '<span class="ana">' + bicimle(m[0]) + '</span>' +
      m.slice(1, 3).map((s) => '<span class="ek">' + bicimle(s) + '</span>').join('');
    // Okumaya vakit kalsın: tek satır 4,2 sn, her ek satır +1,5 sn
    const sure = (metinHizi >= ANINDA ? 2600 : 4200) + Math.min(2, m.length - 1) * (metinHizi >= ANINDA ? 900 : 1500);
    kutu.style.animation = 'none'; void kutu.offsetWidth; kutu.style.animation = ''; kutu.style.animationDuration = (sure / 1000 + 0.3) + 's';
    setTimeout(siradakiBildirim, sure);
  }

  /* Seçim sonucunun görünür kısmı (doğrusal bölüm, oynanış T1 A2 ve A5): gönül basamağı bildirimi ve
     gizli değişken simgeleri. izVar: seçimin iz satırı da gösteriliyorsa simgeler ondan sonra belirir. */
  const simgeMetni = (x) => (x[1] > 0 ? '▲ ' : '▼ ') + x[2];
  function sonucGoster(s, izVar) {
    if (!s) return;
    for (const [id, basamak] of s.basamak) {
      const ust = (id === 'suha' ? '◇ ' : '❀ ') + BASAMAK_SOZU[id];
      const alt = id === 'suha' ? gonulSozu(id, gonulYuzde(id)) : 'Beş laleden ' + LALE_SAYISI[Math.min(5, basamak)] + ' açtı.';
      gunlugeYaz(ust, [alt]);
      kuyrugaKoy([ust, alt]);
    }
    if (s.simge.length) {
      const liste = s.simge.slice();
      setTimeout(() => simgeEkle(liste), izVar ? 900 : 0);
    }
  }
  // Küçük simge şeridi (gösterge çubuğunun altında): en çok ~1 sn görünür; art arda gelenler aynı şeritte
  // birleşir (aynı değişken bir kez, son yönüyle)
  const simgeler = new Map();
  let simgeZamani = null;
  function simgeEkle(liste) {
    let k = $('#simge-bildirim');
    if (!k) { k = document.createElement('div'); k.id = 'simge-bildirim'; k.setAttribute('aria-live', 'polite'); $('#sahne').appendChild(k); }
    for (const x of liste) { simgeler.delete(x[0]); simgeler.set(x[0], x); }
    k.innerHTML = [...simgeler.values()].map((x) => '<span class="simge ' + (x[1] > 0 ? 'artti' : 'azaldi') + '">' + bicimle(simgeMetni(x)) + '</span>').join('');
    k.hidden = false;
    k.style.animation = 'none'; void k.offsetWidth; k.style.animation = '';
    clearTimeout(simgeZamani);
    simgeZamani = setTimeout(() => { k.hidden = true; simgeler.clear(); }, 1100);
  }

  /* ------------------------------------------------------------------ */
  /* Metin                                                               */
  /* ------------------------------------------------------------------ */
  const kisalt = (s, n) => (s.length > n ? s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…' : s);
  function bicimle(metin) {
    const kacir = metin.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return kacir.replace(/\{i\}/g, '<i>').replace(/\{\/i\}/g, '</i>').replace(/\{b\}/g, '<b>').replace(/\{\/b\}/g, '</b>');
  }

  // Ses (ses.js yüklenmediyse oyun sessiz sürer)
  const SES = window.SES || { muzik() {}, efekt() {}, olayMuzigi() { return null; }, ortam() { return null; }, ayar: {}, degistir() {} };
  let ilerle = null; // diyalog tıklaması bekleyen işlev
  let satirTamZamani = 0; // ekrandaki satırın tamamen göründüğü an (keşif dönüşünde "okundu mu" ölçüsü)
  function tiklamayiBekle() { return new Promise((coz) => { ilerle = coz; }); }

  // Okunmuşu atla: daha önce okunan satırlar atlama açıkken kendiliğinden geçer; yeni satırda ve seçimde durur
  let atlaModu = false;
  const OKUNAN_ANAHTARI = 'muhadarat_okunan';
  let okunan = new Set();
  try { okunan = new Set(JSON.parse(localStorage.getItem(OKUNAN_ANAHTARI) || '[]')); } catch (e) { okunan = new Set(); }
  let okunanZaman = null;
  function okunduIsaretle(k) {
    if (okunan.has(k)) return;
    okunan.add(k);
    clearTimeout(okunanZaman);
    okunanZaman = setTimeout(() => { try { localStorage.setItem(OKUNAN_ANAHTARI, JSON.stringify([...okunan].slice(-6000))); } catch (e) { /* yok */ } }, 800);
  }
  function atlaAyarla(acik) {
    atlaModu = acik;
    const d = $('#atla-dugme');
    if (d) { d.classList.toggle('acik', acik); d.title = acik ? 'Atlama açık: okunmuş satırlar geçiliyor' : 'Okunmuş satırları atla'; }
    // Açılırken bekleyen satır okunmuşsa hemen geç
    if (acik && ilerle && !$('#diyalog').hidden) { const f = ilerle; ilerle = null; f(); }
  }

  // Tur 32: etiketsiz satırda taşınmayan, o ana ait ifadeler (konus)
  const ANLIK_IFADE = new Set(['saskin', 'ofkeli', 'aglamakli', 'korkmus', 'sevincli']);
  async function konus(kim, metin, ifade) {
    const kutu = $('#diyalog'), ad = $('#konusan'), yazi = $('#metin');
    let ifadeSifir = false;
    sonKartKaydi = null; // araya replik girdiyse sonraki etki artık kartın değil
    // Görsel kapısı: bu replikte görünecek yüz hazır olmadan metin başlamaz (en çok 0,9 sn)
    const gerekli = [];
    if (kim === 'ic' || kim === 'f') gerekli.push(kisiGorseli('f', ifade || S.fIfade));
    else if (kim && ifade && V.karakterler[kim]) gerekli.push(kisiGorseli(kim, ifade));
    if (gerekli.some((s) => s && !hazirMi(s))) await Promise.all(gerekli.map((s) => gorselHazir(s, 900)));
    kutu.hidden = false;
    yazi.className = '';
    kutu.classList.remove('fazila', 'anlatici-kutu');
    ad.textContent = '';
    ad.style.color = '';
    if (!kim) {
      yazi.classList.add('anlatim');
    } else if (kim === 'an') {
      // Anlatıcı (notlar/anlati_rehberi.md): sahnelerin arasını, zamanı ve "öte yanda" olanı romancı diliyle
      // bağlayan ayrı katman; Feride'nin "ben"inden ayrılsın diye kâğıt rengi kutuda, portresiz
      yazi.classList.add('anlatici');
      kutu.classList.add('anlatici-kutu');
    } else if (kim === 'ic') {
      yazi.classList.add('ic');
      kutu.classList.add('fazila');
      portreKoy(kisiGorseli('f', ifade || S.fIfade));
    } else if (kim === 'pa') {
      yazi.classList.add('perde');
    } else if (kim === 'f') {
      if (ifade) S.fIfade = ifade;
      kutu.classList.add('fazila');
      portreKoy(kisiGorseli('f', S.fIfade));
      ad.textContent = V.karakterler.f.ad;
      ad.style.color = V.karakterler.f.renk;
    } else {
      const k = V.karakterler[kim] || { ad: kim, renk: '#fff' };
      ad.textContent = k.ad;
      ad.style.color = k.renk;
      if (sahnedekiler) {
        const s = sahnedekiler.find((x) => x.id === kim);
        if (s && ifade && s.ifade !== ifade) s.ifade = ifade;
        // Tur 32 (envanter M7): etiketsiz satır önceki "anlık" ifadeyi (şaşkın, öfkeli, ağlamaklı...) taşımaz,
        // kişinin varsayılan yüzüne döner (Perihan 126, Süha 82 etiketsiz satır)
        else if (s && !ifade && ANLIK_IFADE.has(s.ifade)) { s.ifade = null; ifadeSifir = true; }
      }
    }
    // Konuşanı öne çıkar, ötekileri hafifçe karart (Feride ve anlatım sırasında herkes normal)
    // Dört hanımdan biri konuşuyorsa sahnedeki "hanimlar" grubu vurgulanır
    const grup = /^h[1-4]$/.test(kim || '') ? 'hanimlar' : kim;
    const yeniGrupKonusan = /^h[1-4]$/.test(kim || '') ? kim : null;
    const grupDegisti = yeniGrupKonusan !== grupKonusan;
    grupKonusan = yeniGrupKonusan;
    const yeniKonusan = (kim && !['ic', 'pa', 'f', 'an'].includes(kim) && sahnedekiler)
      ? (sahnedekiler.some((x) => x.id === kim) ? kim : (sahnedekiler.some((x) => x.id === grup) ? grup : null))
      : null;
    if (yeniKonusan !== konusanId || ifade || grupDegisti || ifadeSifir) { konusanId = yeniKonusan; kisileriCiz(); }
    // Geçmiş (okunan satırlar)
    gecmis.push({ ad: ad.textContent || (kim === 'ic' ? 'Feride (içinden)' : ''), metin: metin });
    if (gecmis.length > 80) gecmis.shift();
    // Daktilo
    const tam = bicimle(metin);
    const duz = metin.replace(/\{\/?[ib]\}/g, '');
    let bitti = false;
    yazi.innerHTML = '';
    const toplam = duz.length;
    let i = 0;
    const adim = 1000 / metinHizi;
    const okKey = (kim || '-') + '|' + duz;
    if (atlaModu && okunan.has(okKey)) { yazi.innerHTML = tam; await new Promise((r) => setTimeout(r, 90)); return; }
    if (atlaModu) atlaAyarla(false); // yeni satır: atlama durur
    okunduIsaretle(okKey);
    if (metinHizi >= ANINDA) { yazi.innerHTML = tam; satirTamZamani = Date.now(); await tiklamayiBekle(); return; }
    await new Promise((coz) => {
      let zaman = null;
      function bitir() { if (bitti) return; bitti = true; clearInterval(zaman); yazi.innerHTML = tam; satirTamZamani = Date.now(); coz(); }
      bitir.tamamla = true; // bu tıklama satırı tamamlar; hemen ardından gelen tık yutulur
      ilerle = bitir;
      zaman = setInterval(() => {
        i += 1;
        if (i >= toplam) { bitir(); return; }
        yazi.textContent = duz.slice(0, i);
      }, adim);
    });
    await tiklamayiBekle();
  }

  async function kartGoster(metin, alt) {
    const kart = $('#kart'), ic = $('#kart-ic');
    // Kartlar da geçmişe yazılır (söylenti kartının etkisi günlükte kendi başlığıyla görünsün)
    gecmis.push({ ad: '', metin: (metin + (alt ? ' ' + alt : '')).replace(/\n/g, ' ') });
    if (gecmis.length > 80) gecmis.shift();
    ic.innerHTML = bicimle(metin).replace(/\n/g, '<br>') + (alt ? '<div class="kucuk"><br>' + bicimle(alt).replace(/\n/g, '<br>') + '</div>' : '');
    const devam = document.createElement('button');
    devam.type = 'button';
    devam.className = 'dugme';
    devam.textContent = 'Devam ›';
    ic.appendChild(devam);
    kart.hidden = false;
    SES.efekt('kart');
    $('#diyalog').hidden = true;
    await new Promise((coz) => {
      const bitir = () => { kart.onclick = null; devam.onclick = null; coz(); };
      kart.onclick = bitir;
      devam.onclick = (ev) => { ev.stopPropagation(); bitir(); };
      devam.focus({ preventScroll: true });
    });
    kart.hidden = true;
  }

  /* An resimleri (görsel T1 zirve, 18 Kasım 2026 gecesi):
     1) Kıyafet çeşidi: an_<ad>_<giyili>. Yoksa kıyafete en yakın mevcut çeşit (CESIT_YAKIN; ör. buz mavisi ziyaret
        elbisesi → gök mavisi yadigâr), o da yoksa temel resim.
     2) Temel resmi henüz çizilmemiş an (8. bölüm öpücükleri): AN_YEDEK'teki en yakın mevcut an, "yakın plan"
        kırpımıyla (aynı sahnede az önce görülen resim ikinci kez tekrar gibi durmasın; yüzlere yaklaşır).
        Kendi resmi gelince (gorseller.js bağlar) yedek kendiliğinden devreden çıkar.
     3) Hiçbiri yoksa an atlanır; oyuncuya "henüz çizilmedi" kartı ve bölüm sonunda resimsiz satır gösterilmez. */
  const CESIT_YAKIN = {
    nisan_sade: ['nisan_sade'], nisan_gosterisli: ['nisan_gosterisli'], nisan_yadigar: ['nisan_yadigar'],
    // Tur 27: leylak ev elbisesi pembe balo taftasına yakın değil (sabah sobasında elmas taraklı tafta görünüyordu);
    // kendi çeşidi yoksa temel resme düşer
    aksam: ['aksam'],
    ziyaret: ['ziyaret', 'nisan_yadigar'],  // buz mavisi → gök mavisi
    gecelik: ['gecelik'], dugun: ['dugun'], ev: ['ev'], ferace: ['ferace'],
  };
  // Tur 27: üç öpücük resmi (an_opucuk, an_opucuk_kas, an_opucuk_suha) bağlandı; an_mehtap / an_camlik yakın
  // planı artık kullanılmaz. Çeşidi olmayan öpücük (…_nisan_*) yukarıdaki sırayla kendi temel resmine düşer.
  // Biçim (ileride resmi gecikecek an için): an_x: { id: 'an_y', yakin: '44% 22%' }
  const AN_YEDEK = {};
  // { gorsel, anahtar (V.cizimler kimliği), yakin } ya da null
  function anResmi(id, giyili, hal) {
    const C = V.cizimler || {};
    const var_ = (a) => C[a] && C[a].gorsel ? { gorsel: C[a].gorsel, anahtar: a } : null;
    if (S && C[id] && C[id].cesitSec) {
      const idSecim = C[id].cesitSec(S, giyili, hal);
      if (idSecim === null) return null;
      const secilen = var_(idSecim);
      if (secilen) return secilen;
    }
    const bul = (aid) => {
      for (const k of (giyili ? (CESIT_YAKIN[giyili] || [giyili]) : [])) {
        // Tur 28: takı durumu (madalyon açık/saklı) resmi ayırıyorsa önce o tür: an_x_<kıyafet>_<hal>
        const h = hal && var_(aid + '_' + k + '_' + hal);
        if (h) return h;
        const c = C[aid + '_' + k];
        if (c && c.gorsel) return { gorsel: c.gorsel, anahtar: aid + '_' + k };
      }
      const th = hal && var_(aid + '_' + hal); // temel kıyafetin takı türü (an_x_sakli)
      if (th) return th;
      const t = C[aid];
      return (t && t.gorsel) ? { gorsel: t.gorsel, anahtar: aid } : null;
    };
    if (id === 'an_yelpaze' && S && S.bayrak && S.bayrak.p15_aski === 'sakla') {
      const sal = bul('an_yelpaze_sal');
      if (sal) return sal;
    }
    const r = bul(id);
    if (r) return r;
    const y = AN_YEDEK[id];
    const ry = y && bul(y.id);
    return ry ? Object.assign(ry, { yakin: y.yakin }) : null;
  }
  const yakinImg = (c, sinif) => (c.yakin
    ? '<div class="cizim-yakin' + (sinif ? ' ' + sinif : '') + '"><img src="' + c.gorsel + '" alt="" style="transform-origin:' + c.yakin + '"></div>'
    : '<img src="' + c.gorsel + '" alt="">');

  // Ödül çizimi: tam ekran tablo, altında adı; tıklayınca kapanır
  async function cizimGoster(c, yeni, ustYazi, sessiz) {
    const kart = $('#kart'), ic = $('#kart-ic');
    const ust = ustYazi || (yeni ? 'Özel çizim açıldı' : '');
    ic.innerHTML = '<div class="cizim-kart' + (ustYazi ? ' gorunum' : '') + '">' + (ust ? '<div class="cizim-ust">' + ust + '</div>' : '') +
      yakinImg(c) + '<div class="cizim-ad">' + bicimle(c.ad) + '</div>' +
      (c.alt ? '<div class="kucuk">' + bicimle(c.alt) + '</div>' : '') + '</div>';
    kart.classList.add('cizim');
    kart.hidden = false;
    // An resmi müziğe uyar (ses_t1 5-4): karanlık parçada ödül arpı yerine yumuşak piyano; "Yeni görünüm" ödül sesi
    // Tur 27: Süha anı (kaydın alt yazısı "… · Süha") çalan parça ne olursa olsun ödül arpıyla açılmaz; tehlikeli ton
    // Tur 28b (GPT SE14-1): ağır/şiddetli an ({ cizim, ses: false }) açılış akoru almaz; sahnenin müziği sürer
    if (!sessiz) SES.efekt(ustYazi ? 'odul' : (/·\s*Süha\b/.test(c.alt || '') ? 'an_koyu' : 'an'));
    $('#diyalog').hidden = true;
    if (yeni) gunlugeYaz('Özel çizim açıldı: ' + c.ad);
    const devam = document.createElement('button');
    devam.type = 'button'; devam.className = 'dugme'; devam.textContent = 'Devam ›';
    ic.appendChild(devam);
    await new Promise((coz) => {
      const bitir = () => { kart.onclick = null; devam.onclick = null; coz(); };
      kart.onclick = bitir;
      devam.onclick = (ev) => { ev.stopPropagation(); bitir(); };
      devam.focus({ preventScroll: true });
    });
    kart.hidden = true;
    kart.classList.remove('cizim');
  }

  // Kıyafet ekranı: portreleriyle yan yana seçenekler; biri seçilmeden sahne ilerlemez
  function giyinSec(soru, liste) {
    return new Promise((coz) => {
      const kart = $('#kart'), ic = $('#kart-ic');
      ic.innerHTML = '<div class="giyin"><div class="giyin-soru">' + bicimle(soru || 'Ne giyeceğim?') + '</div><div class="giyin-sira">' +
        liste.map((id) => {
          const k = V.kiyafetler[id];
          return '<button class="giyin-sec" data-k="' + id + '">' + (k.gorsel ? '<img src="' + k.gorsel + '" alt="">' : '') +
            '<b>' + k.ad + '</b><span>' + bicimle(k.kisa || k.aciklama.split(/[.;]/)[0]) + '</span></button>';
        }).join('') + '</div></div>';
      kart.onclick = null;
      kart.classList.add('giyin-kart');
      kart.hidden = false;
      ic.querySelectorAll('.giyin-sec').forEach((b) => {
        b.onclick = (ev) => { ev.stopPropagation(); SES.efekt('secim'); kart.hidden = true; kart.classList.remove('giyin-kart'); coz(b.dataset.k); };
      });
    });
  }

  /* Koz kilidi (oynanış T1 A1). Seçeneğin isteğe bağlı alanları:
       kozGerek: 'Koz adı' ya da ['Koz A', 'Koz B'] (biri yeter)
       kilitGoster(S): false dönerse kilitli hâli de gizlenir (ör. öbür rotaya özgü seçenek)
     kozGerek yoksa davranış eskisi gibidir: kosul tutmayan seçenek görünmez.
     kozGerek varsa: kosul verilmişse açıklığı kosul belirler, verilmemişse gereken kozlardan biri elde
     (S.kozlar) olmalı. Açık değilse ve gereken koz elde değilse seçenek gri ve kilitli görünür, altında
     "Gerekli: …" yazar; koz elde olduğu hâlde kosul tutmuyorsa (başka bir şart) seçenek gizli kalır. */
  const kozListesi = (g) => (Array.isArray(g) ? g : [g]).filter(Boolean);
  function secenekDurumu(sec) {
    let tutar = true;
    if (sec.kosul) { try { tutar = !!sec.kosul(S); } catch (e) { tutar = false; } }
    const gerek = sec.kozGerek ? kozListesi(sec.kozGerek) : [];
    if (!gerek.length) return tutar ? 'acik' : 'gizli';
    const elde = gerek.some((k) => (S.kozlar || []).includes(k));
    if (sec.kosul ? tutar : elde) return 'acik';
    if (elde) return 'gizli';
    try { if (sec.kilitGoster && !sec.kilitGoster(S)) return 'gizli'; } catch (e) { return 'gizli'; }
    return 'kilitli';
  }
  function kilitIpucu(sec) {
    const gerek = kozListesi(sec.kozGerek);
    const harcanan = gerek.filter((k) => S.kozAcik && S.kozAcik[k] !== undefined);
    return 'Gerekli: ' + gerek.join(' ya da ') + (harcanan.length === gerek.length ? ' · bu kozu harcadın' : '');
  }
  let secimYenile = null; // açık seçim ekranını yeniden çizer (keşiften dönünce koşullar değişmiş olabilir)
  function secimYap(soru, secenekler) {
    if (atlaModu) atlaAyarla(false); // seçimde atlama durur
    return new Promise((coz) => {
      const kutu = $('#secimler');
      const ciz = () => {
        kutu.innerHTML = '';
        if (soru) {
          const s = document.createElement('div');
          s.className = 'soru';
          s.textContent = soru;
          kutu.appendChild(s);
        }
        secenekler.forEach((sec) => {
          const durum = secenekDurumu(sec);
          if (durum === 'gizli') return;
          const b = document.createElement('button');
          b.className = 'dugme' + (sec.kozGerek ? ' kozlu' : '') + (durum === 'kilitli' ? ' kilitli' : '');
          if (sec.kozGerek) {
            const r = document.createElement('span');
            r.className = 'koz-rozet'; r.setAttribute('aria-hidden', 'true'); r.textContent = '◆';
            b.appendChild(r);
          }
          b.appendChild(document.createTextNode(sec.m));
          if (durum === 'kilitli') {
            const g = document.createElement('small');
            g.className = 'koz-gerek'; g.textContent = '🔒 ' + kilitIpucu(sec);
            b.appendChild(g);
            b.setAttribute('aria-disabled', 'true');
            b.title = 'Bu söz için elinde gereken koz yok.';
            // Kilitli düğme seçim yapmaz; yalnız kapı sesi ve kısa bir sarsıntıyla cevap verir
            b.addEventListener('click', (ev) => {
              ev.stopPropagation(); SES.efekt('kapi');
              b.classList.remove('sars'); void b.offsetWidth; b.classList.add('sars');
            });
          } else {
            if (sec.kozGerek) b.title = 'Kozun: ' + kozListesi(sec.kozGerek).filter((k) => (S.kozlar || []).includes(k)).join(', ');
            b.addEventListener('click', (ev) => { ev.stopPropagation(); SES.efekt('secim'); kutu.hidden = true; secimYenile = null; document.body.classList.remove('secim-acik'); coz(sec); });
          }
          kutu.appendChild(b);
        });
      };
      ciz();
      secimYenile = ciz;
      document.body.classList.add('secim-acik');
      kutu.hidden = false;
    });
  }

  /* ------------------------------------------------------------------ */
  /* Olay çalıştırıcı                                                    */
  /* ------------------------------------------------------------------ */
  async function calistir(adimlar) {
    for (const a of adimlar || []) {
      const sonuc = await adimCalistir(a);
      if (sonuc === 'dur') return 'dur';
    }
  }

  async function adimCalistir(a) {
    if (Array.isArray(a) || typeof a === 'string' || a.goster || a.gizle || a.temizle) olayKadroTaze = false;
    if (Array.isArray(a)) return konus(a[0], a[1], a[2]);
    if (typeof a === 'string') return konus(null, a);
    if (a.goster) {
      const [id, ifade] = a.goster;
      const src = kisiGorseli(id, ifade);
      if (src && !hazirMi(src)) await gorselHazir(src, 1000);
      const var_ = sahnedekiler.find((x) => x.id === id);
      if (var_) var_.ifade = ifade || var_.ifade; else sahnedekiler.push({ id, ifade: ifade || null });
      kisileriCiz(); return;
    }
    if (a.gizle) { sahnedekiler = sahnedekiler.filter((x) => x.id !== a.gizle); kisileriCiz(); return; }
    if (a.temizle) { sahnedekiler = []; kisileriCiz(); return; }
    // Fon değişimlerinde yeni fon hazır olmadan sonraki satıra geçilmez (en çok 1,5 sn)
    if (a.arkaplan !== undefined) { geciciArkaplan = a.arkaplan; await fonHazir(a.arkaplan || S.mekan); arkaplanGoster(a.arkaplan || S.mekan); return; }
    if (a.mekan) { S.mekan = a.mekan; geciciArkaplan = null; await fonHazir(S.mekan); arkaplanGoster(S.mekan); return; }
    if (a.faz) { S.faz = a.faz; if (a.mekanaGit) S.mekan = a.mekanaGit; geciciArkaplan = null; await fonHazir(S.mekan); arkaplanGoster(S.mekan); return; }
    if (a.kart) {
      // Söylenti kartları ("Konak konak dolaşan söz", "o günü şöyle anlatacak"...) günlüğe ve bölüm sonuna geçer
      // Tur 27: kart ve alt yazı (S) => metin de olabilir (yola göre kart); boş dönen kart atlanır
      sonKartKaydi = null;
      const kMetin = typeof a.kart === 'function' ? a.kart(S) : a.kart, kAlt = typeof a.alt === 'function' ? a.alt(S) : a.alt;
      if (!kMetin) return;
      if (kAlt && SOYLENTI.test(kMetin)) {
        S.soylentiler = S.soylentiler || {};
        if (!S.soylentiler[S.bolum]) S.soylentiler[S.bolum] = kAlt;
        sonKartKaydi = gunlugeYaz('Söylenti: ' + kAlt);
      }
      await kartGoster(kMetin, kAlt);
      return;
    }
    if (a.gorev !== undefined) {
      S.gorev = a.gorev;
      const g = bolum().gorevler[S.gorev];
      if (g) bildir('Yeni görev: ' + gMetin(g));
      ustCiz(); return;
    }
    if (a.etki) {
      // Seçimsiz etkiler: günlükte hangi andan geldiği belli olsun diye son okunan satır başlık olur
      toplayici = [];
      etkiUygula(a.etki);
      const satirlar = toplayici; toplayici = null;
      // Doğrusal bölümde simgeler hemen belirir; günlükte ek satır olarak kalır
      const sonuc = sonucAl();
      const simgeSatiri = sonuc.simge.map(simgeMetni);
      sonucGoster(sonuc, false);
      // Söylenti kartının hemen ardından gelen etki, o kartın günlük kaydının altına yazılır
      if ((satirlar.length || simgeSatiri.length) && sonKartKaydi) {
        sonKartKaydi.ek = (sonKartKaydi.ek || []).concat(satirlar, simgeSatiri);
        if (satirlar.length) kuyrugaKoy(satirlar);
        return;
      }
      if (satirlar.length || simgeSatiri.length) {
        const tum = satirlar.concat(simgeSatiri);
        const son = gecmis.length ? gecmis[gecmis.length - 1] : null;
        const baslik = son && !son.ayirac ? '«' + kisalt(son.metin.replace(/\{\/?[ib]\}/g, ''), 70) + '»' : tum[0];
        gunlugeYaz(baslik, son && !son.ayirac ? tum : tum.slice(1));
        if (satirlar.length) kuyrugaKoy(satirlar);
      }
      return;
    }
    if (a.bayrak) { Object.assign(S.bayrak, a.bayrak); return; }
    if (a.not) { Object.assign(S.notlar, a.not); return; }
    if (a.delil) {
      if (!S.deliller.includes(a.delil)) {
        S.deliller.push(a.delil);
        gunlugeYaz('Deftere not: ' + a.delil); // günlükte notun kendisi görünsün
        kuyrugaKoy(['Defterine bir not düştün.']);
      }
      return;
    }
    // Takı anı (ör. nişan gerdanlığı boyna takılınca): giyili kıyafetin portre setinde o takılı hâl varsa
    // portre ona döner ve "Yeni görünüm" kartı açılır. { taki: null } ya da kıyafet değişimi takıyı çıkarır.
    if (a.taki !== undefined) {
      S.taki = a.taki || null;
      S.takiAd = a.taki ? (a.ad || S.takiAd || null) : null; // Gardrop'ta "Boynunda: …"
      const kf = S.giyili && V.kiyafetler[S.giyili];
      const set = kf && kf.portre && V.karakterler[kf.portre];
      const src = a.taki && set && set.gorsel && set.gorsel[a.taki];
      if (src) {
        await gorselHazir(src, 2000);
        await cizimGoster({ gorsel: src, ad: a.ad || 'Yeni takı', alt: a.alt || '' }, false, 'Yeni görünüm');
      }
      kisileriCiz();
      return;
    }
    if (a.gorunum) { // ertelenmiş "Yeni görünüm" kartı: giyili kıyafetin portresi
      const kf = S.giyili && V.kiyafetler[S.giyili];
      const set = kf && kf.portre && V.karakterler[kf.portre];
      const src = set && set.gorsel && (set.gorsel.ana || Object.values(set.gorsel)[0]);
      if (src && S.gorunumBekliyor) {
        S.gorunumBekliyor = false;
        await gorselHazir(src, 2000);
        await cizimGoster({ gorsel: src, ad: kf.ad, alt: kf.aciklama }, false, 'Yeni görünüm');
      }
      return;
    }
    if (a.kiyafet) {
      const once = S.giyili;
      S.giyili = a.kiyafet;
      S.taki = null;
      S.gorunumBekliyor = false;
      if (a.kilit !== undefined) S.kiyafetKilit = a.kilit;
      // "Yeni görünüm" anı: kendine ait portresi olan bir kıyafete geçilince tam ekran gösterilir
      const kf = V.kiyafetler[a.kiyafet];
      const set = kf && kf.portre && V.karakterler[kf.portre];
      const src = set && set.gorsel && (set.gorsel.ana || Object.values(set.gorsel)[0]);
      if (a.kartsiz) return; // daha önce görülmüş kıyafet: "Yeni görünüm" kartı yeniden açılmaz
      if (a.sessiz) { S.gorunumBekliyor = true; return; } // kart sonra { gorunum: true } ile açılır (ör. saç da yapılınca)
      if (src && once !== a.kiyafet) {
        await gorselHazir(src, 2000);
        await cizimGoster({ gorsel: src, ad: kf.ad, alt: kf.aciklama }, false, 'Yeni görünüm');
      }
      return;
    }
    if (a.para) { S.para += a.para; bildir((a.para > 0 ? '+' : '') + a.para + ' lira'); ustCiz(); return; }
    if (a.bildir) { bildir(a.bildir); return; }
    // Tur 30 (t30 ORTAK B1–4 §1): sahne içi ortam sesi. { ortam: null } fonun döngüsünü susturur (duran araba),
    // { ortam: 'o_araba' } o döngüyü çalar, { ortam: 'mekan' } fonun kendi ortamına döner; fon değişince kendiliğinden kalkar
    if (Object.prototype.hasOwnProperty.call(a, 'ortam')) { try { if (SES.ortamZorla) SES.ortamZorla(a.ortam); } catch (e) { /* ses yoksa oyun sürer */ } return; }
    // Sahne içinde müzik değişimi: { muzik: 'gerilim' }; { muzik: null } bölümün ortam müziğine döner
    if (a.muzik !== undefined) {
      SES.muzik(a.muzik || SES.ortam(S.bolum, S.faz), true, !!a.kes);
      if (a.durak) await new Promise(r => setTimeout(r, Math.min(2000, Math.max(0, a.durak))));
      return;
    }
    // Işık/sarsıntı efektleri görüntüde, öbürleri ses tablosunda
    if (a.efekt) { if (['fisek', 'kandil', 'titre'].includes(a.efekt)) await isikEfekti(a.efekt); else SES.efekt(a.efekt); return; }
    // Eşyanın yeri değişince kozun kaynağını güncelle: { kozKaynak: ['koz adı', 'Çamın dibine gömdüm'] }
    if (a.kozKaynak) { S.kozKaynak = S.kozKaynak || {}; S.kozKaynak[a.kozKaynak[0]] = a.kozKaynak[1]; return; }
    // Sahne içi kıyafet ekranı (yeni biçim): { giyin: ['dugun', ...], soru: '...' }
    if (a.giyin) {
      $('#diyalog').hidden = true;
      const sec = await giyinSec(typeof a.soru === 'function' ? a.soru(S) : a.soru, a.giyin);
      S.giyili = sec; S.taki = null; S.gorunumBekliyor = false;
      if (!S.kiyafetler.includes(sec)) S.kiyafetler.push(sec);
      (S.kararlar[S.bolum] = S.kararlar[S.bolum] || []).push({ m: 'Giydiğin: ' + V.kiyafetler[sec].ad, iz: '' });
      kisiGorselleriniYukle('f');
      return;
    }
    // Koz: Perihan'a ve adamlarına karşı toplanan bilgi; kart olarak ekrana düşer
    if (a.koz) {
      S.kozlar = S.kozlar || [];
      const zatenVar = S.kozlar.includes(a.koz);
      if (!zatenVar) S.kozlar.push(a.koz);
      // Kozun kaynağı: "Kendim gördüm", "Nabi söyledi", "Defter elimde"... (şüphe, söz, nesne, tanık ayrı okunsun)
      if (a.kaynak) { S.kozKaynak = S.kozKaynak || {}; S.kozKaynak[a.koz] = a.kaynak; }
      if (S.kozAcik) delete S.kozAcik[a.koz];
      if (zatenVar) return; // aynı koz ikinci kez ödül sayılmaz; yalnız kaynağı güncellenir
      gunlugeYaz('Koz: ' + a.koz + (a.kaynak ? ' (' + a.kaynak + ')' : ''));
      gostergeleriCiz([['koz', 1]]);
      await kartGoster('Koz kazandın\n' + a.koz, (a.kaynak ? a.kaynak + '. ' : '') + (a.alt || ''));
      return;
    }
    // Kozu açıklamak bilgiyi unutturmaz: tükenen gizliliği ya da pazarlık değeridir. Koz listeden düşer
    // ama bölüm sonunda "açıldı" diye görünür kalır.
    if (a.kozYak) {
      const eldeydi = (S.kozlar || []).includes(a.kozYak);
      if (eldeydi) { S.kozAcik = S.kozAcik || {}; S.kozAcik[a.kozYak] = S.bolum; }
      S.kozlar = (S.kozlar || []).filter((k) => k !== a.kozYak); gostergeleriCiz(eldeydi ? [['koz', -1]] : []);
      // Harcanan koz görünür olsun (doğrusal bölüm): küçük simge ve günlük kaydı
      if (eldeydi && dogrusalMi()) { gunlugeYaz('Kozunu kullandın: ' + a.kozYak); simgeEkle([['koz:' + a.kozYak, -1, 'Kozunu kullandın: ' + a.kozYak]]); }
      return;
    }
    if (a.cizim) {
      // Bölüm ödülü: kıyafete göre çeşit (yoksa en yakın çeşit, o da yoksa temel), resmi yoksa AN_YEDEK
      // (anResmi). Hiçbir resim yoksa adım sessizce atlanır: oyuncuya "henüz çizilmedi" kartı gösterilmez.
      const c0 = (V.cizimler || {})[a.cizim];
      if (!c0) return;
      // Tur 28: madalyon_hal ('acik' | 'sakli', B1 ayna seçimi; sonraki bölümler değiştirebilir) an resminin takı türünü seçer
      // Tur 29: 5. bölümde madalyon geri alınınca kural elbiseye bağlanır (madalyon_kural 'elbise'): annesinin
      // gök mavisi elbisesiyle göğüste açık, başka elbiselerde yakanın içinde. Resimler bu kuralla zaten uyumlu.
      const mk = S.bayrak && S.bayrak.madalyon_kural === 'elbise';
      const mh = mk ? (S.giyili === 'nisan_yadigar' ? 'acik' : 'sakli') : (S.bayrak && S.bayrak.madalyon_hal);
      const r = anResmi(a.cizim, S.giyili, mh === 'yok' ? 'sakli' : mh); // 'yok' (Şefik taşıyor) resimde saklı gibi
      if (!r) {
        // An kaçırılmış sayılmasın (bölüm sonu "Kaçırdığın an"), ama resimsiz satır olarak da görünmesin
        S.cizimAtlanan = S.cizimAtlanan || [];
        if (!S.cizimAtlanan.includes(a.cizim)) S.cizimAtlanan.push(a.cizim);
        return;
      }
      const yeni = !S.cizimler.includes(a.cizim);
      if (yeni) S.cizimler.push(a.cizim);
      // Galeri ve bölüm sonu, anın açıldığı andaki çeşidi (ya da yedeği) göstersin
      S.cizimCesit = S.cizimCesit || {};
      if (r.anahtar !== a.cizim) S.cizimCesit[a.cizim] = r.anahtar; else delete S.cizimCesit[a.cizim];
      const c = Object.assign({}, c0, { gorsel: r.gorsel, yakin: r.yakin || null });
      await gorselHazir(c.gorsel, 2000);
      if (a.secimZemini) {
        $('#secimler').style.setProperty('--secim-resmi', 'url(' + JSON.stringify(c.gorsel) + ')');
      } else {
        await cizimGoster(c, yeni, undefined, a.ses === false);
      }
      return;
    }
    if (a.islev) { a.islev(S); return; }
    if (a.eger) {
      const dal = a.eger(S) ? a.ise : a.degilse;
      return calistir(dal);
    }
    if (a.secim) {
      $('#diyalog').hidden = true;
      // Seçimden önce açılmış keşif noktaları seçim ekranında da dokunulabilir; seçim yapılınca kalkar
      // (keşfin penceresi: kesif adımından bir sonraki seçime ya da olayın sonuna dek). kalici: true olan kalır.
      const oncekiKesifler = kesifler.filter((x) => !x.k.kalici);
      // Koşul ve koz kilidi secimYap'ta süzülür (secenekDurumu); keşiften dönünce yeniden süzülür
      const sec = await secimYap(typeof a.soru === 'function' ? a.soru(S) : a.soru, a.secim);
      $('#secimler').style.removeProperty('--secim-resmi');
      oncekiKesifler.forEach((x) => { if (kesifler.includes(x)) kesifKaldir(x); });
      konusanId = null; kisileriCiz();
      // Kararı bölüm sonu özetine yaz
      const liste = (S.kararlar[S.bolum] = S.kararlar[S.bolum] || []);
      liste.push({ m: sec.m, iz: sec.iz || '' });
      // Seçimin bütün sonuçları tek bildirimde: önce iz cümlesi, sonra en fazla iki değişim
      toplayici = [];
      etkiUygula(sec.etki);
      const satirlar = [sec.iz, ...toplayici].filter(Boolean);
      toplayici = null;
      const sonucSimge = sonucAl(); // gönül basamağı ve gizli değişken simgeleri (doğrusal bölüm)
      if (sec.bayrak) Object.assign(S.bayrak, sec.bayrak);
      // Günlüğe karar anında yazılır (sıra kararların sırası olsun); ekrandaki sonuç kutusu ise
      // seçimin kendi sahnesi oynandıktan sonra gelir (olay anlatılmadan önce sonucu söylemesin)
      // İz cümlesi olmayan seçimlerde günlüğün başlığı seçimin kendisidir (neden kaybolmasın)
      const gunlukEk = satirlar.slice(sec.iz ? 1 : 0).concat(sonucSimge.simge.map(simgeMetni));
      if (sec.iz) gunlugeYaz(satirlar[0], gunlukEk);
      else gunlugeYaz('Kararın: ' + kisalt(sec.m.replace(/\{\/?[ib]\}/g, ''), 80), gunlukEk);
      const sonuc = await calistir(sec.adimlar);
      if (satirlar.length) kuyrugaKoy(satirlar);
      sonucGoster(sonucSimge, !!sec.iz);
      return sonuc;
    }
    if (a.bolumSonu) { await bolumSonu(); return 'dur'; }
    if (a.vakit) return serbestVakit(a.vakit);
    if (a.anlati) return anlatiGoster(a.anlati);
    // Ara sayfa (notlar/anlati_rehberi.md): anlatıcı iki sahne arasını gidilecek yerin bulanık resmi üstünde
    // yazar; { ara: { mekan, yer: 'Aynı saatlerde · selamlık', satirlar: [...] } }. mekan verilirse sahne
    // altta oraya geçer, sayfa kalkınca yeni yer açılır (ani mekân/kişi değişimi olmaz).
    if (a.ara) {
      // Olay ara sayfayla açılıyorsa (henüz satır ya da goster/gizle yok) sayfa olayın kendi kadrosunu silmesin:
      // sayfa kalkınca olay.sahne kişileri yerine konur (B2 sofrası: Sait Efendi ve Perihan konuşuyor, portre yoktu)
      const kadro = olayKadroTaze && olayKadrosu ? olayKadrosu.map((x) => Object.assign({}, x)) : null;
      await anlatiGoster(Object.assign({ ara: true, baslik: a.ara.yer }, a.ara));
      if (kadro && !sahnedekiler.length) { sahnedekiler = kadro; kisileriCiz(); }
      return;
    }
    if (a.kesif) return kesifGoster(a.kesif);
    console.warn('Bilinmeyen adım', a);
  }

  /* Işık efekti: önemli anlara küçük, tek seferlik vurgu (sürekli hareket yok).
     { efekt: 'fisek' } kısa beyaz-altın parlama; { efekt: 'kandil' } sıcak, yavaş ışık nabzı;
     { efekt: 'titre' } sarsıntı (topuk, kapı). Hareket istemeyen tarayıcıda yalnız kısa bekleme. */
  async function isikEfekti(tur) {
    try { SES.efekt(tur); } catch (e) { /* ses yoksa görüntü yine çalışır */ }
    const az = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (az) { await new Promise((r) => setTimeout(r, 150)); return; }
    const s = $('#sahne');
    if (tur === 'titre') { s.classList.remove('efekt-titre'); void s.offsetWidth; s.classList.add('efekt-titre'); await new Promise((r) => setTimeout(r, 420)); s.classList.remove('efekt-titre'); return; }
    const d = document.createElement('div'); d.className = 'isik-efekt ' + (tur === 'kandil' ? 'kandil' : 'fisek');
    s.appendChild(d);
    // Tur 27 (B8 fişek): gece süzgeci bir an kalkar, fon aydınlanır, sonra yavaşça geri gelir (oyun.css .fisek-aydin)
    let aydin = null;
    if (tur === 'fisek') { s.classList.add('fisek-aydin'); aydin = setTimeout(() => s.classList.remove('fisek-aydin'), 380); }
    await new Promise((r) => setTimeout(r, tur === 'kandil' ? 1400 : 700));
    if (aydin) { clearTimeout(aydin); s.classList.remove('fisek-aydin'); }
    d.remove();
  }

  /* Anlatı: tam ekran resim üzerinde birkaç cümlelik anlatım (sezon ve bölüm açılışı, zaman atlaması,
     büyük olay). { anlati: { gorsel: 'mekan_id' ya da 'gorsel/...webp', baslik, satirlar: [...] } }
     satirlar içinde (S) => metin fonksiyonları olabilir; boş dönen satır atlanır. */
  async function anlatiGoster(n) {
    let gor = null; // ara sayfanın fonu ve gece süzgeci
    if (n.ara) {
      // Ara sayfanın başlığı vakti söylüyorsa sahnenin ışığı ona göre (gece süzgeci)
      zamanKoy(zamanOku(n.baslik));
      // Önceki sahnenin kişileri kalkar; altta yeni yer hazırlanır
      sahnedekiler = []; konusanId = null; kisileriCiz();
      if (n.mekan) { S.mekan = n.mekan; geciciArkaplan = null; await fonHazir(S.mekan); arkaplanGoster(S.mekan); }
      else arkaplanGoster(geciciArkaplan || S.mekan); // yer aynı, vakit değişmiş olabilir (süzgeç yenilenir)
      // Tur 30 (t30 ORTAK B1–4 §1): { ara: { mekan, ortam: null } } ara sayfanın fonu açılırken ortam döngüsünü ezer
      // (duran arabada teker sesi çalmasın); { ortam } sahne adımıyla aynı kural, fon değişince kalkar
      if (Object.prototype.hasOwnProperty.call(n, 'ortam')) { try { if (window.SES && SES.ortamZorla) SES.ortamZorla(n.ortam); } catch (e) { /* ses yoksa oyun sürer */ } }
      if (!n.gorsel) { gor = fonGorunumu(n.mekan || S.mekan); n = Object.assign({}, n, { gorsel: gor.id }); }
    }
    if (!gor && V.mekanlar[n.gorsel]) gor = fonGorunumu(n.gorsel, true);
    const src = (gor && gor.src) || (V.mekanlar[n.gorsel] && V.mekanlar[n.gorsel].arkaplan) || n.gorsel;
    let k = $('#anlati');
    if (!k) {
      k = document.createElement('div'); k.id = 'anlati';
      k.innerHTML = '<img alt=""><div class="anlati-golge"></div><div class="anlati-baslik"></div><div class="anlati-metin"></div><div class="anlati-isaret">▾</div><button class="dugme anlati-gec">Geç ›</button>';
      $('#sahne').appendChild(k);
    }
    const img = k.querySelector('img');
    k.classList.toggle('suzgec-gece', !!(gor && gor.suzgec === 'gece'));
    k.classList.toggle('suzgec-aksam', !!(gor && gor.suzgec === 'aksam'));
    if (src) await gorselHazir(src, 2000);
    img.src = src || ''; img.style.visibility = src ? '' : 'hidden';
    k.querySelector('.anlati-baslik').textContent = n.baslik || '';
    k.classList.toggle('ara', !!n.ara);
    const metin = k.querySelector('.anlati-metin'); metin.innerHTML = '';
    $('#diyalog').hidden = true;
    k.hidden = false; k.classList.remove('kapan'); void k.offsetWidth; k.classList.add('acik');
    const satirlar = (n.satirlar || []).map((s) => (typeof s === 'function' ? s(S) : s)).filter(Boolean);
    // "Geç ›": anlatının kalanını tek tıkla atla (art arda oynarken aynı bilgiyi yeniden okumak istemeyen için)
    let gec = false, devam = null, hazir = 0;
    k.onclick = () => { if (devam && Date.now() >= hazir) { const c = devam; devam = null; c(); } };
    k.querySelector('.anlati-gec').onclick = (e) => { e.stopPropagation(); gec = true; if (devam) { const c = devam; devam = null; c(); } };
    for (const s of satirlar) {
      if (gec) break;
      const p = document.createElement('p'); p.innerHTML = bicimle(s); metin.appendChild(p);
      // Ekranda en çok üç satır kalsın; eskiler solarak çıkar
      while (metin.children.length > 3) metin.removeChild(metin.firstChild);
      void p.offsetWidth; p.classList.add('gor');
      hazir = Date.now() + 350; // yanlışlıkla çift tıklama iki satır atlamasın
      await new Promise((coz) => { devam = coz; });
    }
    k.onclick = null;
    k.classList.add('kapan');
    await new Promise((r) => setTimeout(r, 450));
    k.hidden = true; k.classList.remove('acik', 'kapan');
  }

  /* Vakit hafızası (doğrulama b9–12 madde 1): görülen iş S.vakitGorulen['bolum:vakit:mekan'] anahtarıyla
     tutulur (vakit = vakit.id ya da vakit.ad). Aynı odanın başka vakitteki AYRI sahnesi böylece açılır
     (B9 akşamüstü bahçe, B12 kuşlukta mutfak). Bir vakitte görülen sahne öbür vakitte aynı dizi olarak
     ya da onun içinde yeniden geçiyorsa (B12 MADAM_DUVAR) bölümde yine bir kez oynanır.
     Eski kayıtların 'bolum:mekan' anahtarı hangi vakitte görüldüğünü söylemez; okunmaz (yanlış "görüldü" saymaz). */
  const vakitKimligi = (v) => String((v && (v.id || v.ad)) || 'vakit').replace(/:/g, '·');
  const vakitAnahtari = (v, mekan) => S.bolum + ':' + vakitKimligi(v) + ':' + mekan;
  const bolumVakitOnbellek = new WeakMap();
  // Bölüm verisindeki bütün vakit tanımları (ham; plan çeşidi eşlenmemiş), bölüm başına bir kez taranır
  function bolumVakitleri() {
    const b = bolum();
    if (!b) return [];
    if (bolumVakitOnbellek.has(b)) return bolumVakitOnbellek.get(b);
    const bulunan = [], gezilen = new Set();
    (function tara(o) {
      if (!o || typeof o !== 'object' || gezilen.has(o)) return;
      gezilen.add(o);
      if (o.vakit && typeof o.vakit === 'object' && !Array.isArray(o.vakit) && bulunan.indexOf(o.vakit) < 0) bulunan.push(o.vakit);
      for (const k of Object.keys(o)) tara(o[k]);
    })(b);
    bolumVakitOnbellek.set(b, bulunan);
    return bulunan;
  }
  // aranan, kok'un kendisi ya da içindeki bir dizi/nesne mi (başvuru eşitliği)
  function vakitIcinde(kok, aranan) {
    const gezilen = new Set();
    return (function ara(o) {
      if (o === aranan) return true;
      if (!o || typeof o !== 'object' || gezilen.has(o)) return false;
      gezilen.add(o);
      return Object.keys(o).some((k) => ara(o[k]));
    })(kok);
  }
  function vakitGoruldu(v, mekan) {
    const g = S.vakitGorulen || {};
    if (g[vakitAnahtari(v, mekan)]) return true;
    const y = (v.yerler || {})[mekan];
    if (!y || !y.adimlar) return false;
    const ben = vakitKimligi(v);
    return bolumVakitleri().some((o) => {
      if (vakitKimligi(o) === ben || !g[vakitAnahtari(o, mekan)]) return false;
      const oe = planEsle(o);
      const oy = ((oe && oe.yerler) || {})[mekan] || (o.yerler || {})[mekan];
      return !!(oy && oy.adimlar && vakitIcinde(oy.adimlar, y.adimlar));
    });
  }

  /* Serbest vakit: doğrusal bölümün içinde sınırlı gezinme (My Candy Love gibi, ama vakit sınırlı).
     { vakit: { ad: 'İkindi', hak: 3, hedef: { mekan, metin }, mekanlar: [...],
                yerler: { mekanId: { kisi, ifade, ipucu, kosul(S), adimlar: [...], bos } },
                bitis: [...] } }
     Hedefe giden vakti bitirir ve bölüm kaldığı yerden sürer. Başka odaya gitmek bir hak yer;
     odadaki mini sahne (kulak misafiri, eşya, sohbet) bir kez oynanır. Haklar biterse 'bitis'
     adımları oynanır ve hedefe geçilir. Görülemeyen yerler tekrar oynama sebebi olur. */
  async function serbestVakit(v) {
    const vHam = v;
    planCesit = {};
    v = planEsle(v); // plan vaktinde fon çeşitleri (…_gunduz) asıl düğüm sayılır
    // Gece ışığı: vaktin adı saati söylüyorsa o; söylemiyorsa bölümün vaktin hedef odasına seçtiği ışık
    // (hedef gece resmindeyse plan üstünde yürünen gündüz resimli bahçe, sarı oda… de gece süzgecine girer)
    {
      let z = vHam.isik || zamanOku(vHam.ad);
      if (!z && vHam.hedef && vHam.hedef.mekan) {
        const hId = fonCoz(vHam.hedef.mekan), hm = V.mekanlar[hId];
        const hi = hm && hm.arkaplan ? resimIsigi(hm.arkaplan) : null;
        z = hi === 'G' ? 'gece' : (hi === 'A' ? 'aksam' : (hi === 'D' && /_gunduz$/.test(hId) ? 'gunduz' : null));
      }
      zamanKoy(z);
      if (z) arkaplanGoster(geciciArkaplan || S.mekan); // bulunulan yerin ışığı da hemen
    }
    S.vakitGorulen = S.vakitGorulen || {};
    let kalan = v.hak || 3;
    const gorulen = (k) => vakitGoruldu(v, k); // vaktin kendi hafızası (yukarıdaki not)
    // Kapalı yer (vakit.kapali; plan modundaki alanın aynısı): { kosul(S), neden, etiket } — oda düğmesinde
    // kilitli görünür; dokunmak nedeni söyler, hak düşmez, konum değişmez (kapı önü sayılmaz, ışınlanma yok)
    const kapaliKural = (id) => {
      const k = v.kapali && v.kapali[id];
      if (!k || id === (v.hedef && v.hedef.mekan)) return null;
      try { return (!k.kosul || k.kosul(S)) ? k : null; } catch (e) { return null; }
    };
    const bekliyor = (id) => { const y = (v.yerler || {})[id]; return y && y.adimlar && !gorulen(id) && (!y.kosul || y.kosul(S)) && !kapaliKural(id); };
    const tasin = async (id, yer) => {
      S.mekan = id; geciciArkaplan = null; SES.efekt('gecis');
      const k = yer && yer.kisi && (!yer.kosul || yer.kosul(S)) ? [{ id: yer.kisi, ifade: yer.ifade || null }] : [];
      k.forEach((x) => kisiGorselleriniYukle(x.id));
      await fonHazir(id); arkaplanGoster(id);
      sahnedekiler = k; konusanId = null; kisileriCiz();
    };
    // İpucu düz metin ya da (S) => metin olabilir
    const ipucu = (id) => { const y = (v.yerler || {})[id] || {}; return typeof y.ipucu === 'function' ? y.ipucu(S) : y.ipucu; };
    // Bulunulan yer: { baslangic: 'mekanId' | (S) => 'mekanId' } vakit başında konumu düzeltir
    if (v.baslangic) {
      const bas = typeof v.baslangic === 'function' ? v.baslangic(S) : v.baslangic;
      if (bas && bas !== S.mekan) { S.mekan = bas; geciciArkaplan = null; await fonHazir(bas); arkaplanGoster(bas); }
    }
    let bant = $('#vakit-bant');
    if (!bant) { bant = document.createElement('div'); bant.id = 'vakit-bant'; $('#sahne').appendChild(bant); }
    // Konuşması biten kişiler gezinmede ekranda kalmasın: oyuncu nerede ve kimle olduğunu net görsün
    sahnedekiler = []; konusanId = null; kisileriCiz();
    kesifleriKaldir(); // sahnenin keşif noktası gezinmeye taşınmaz
    // Plan modu (veri/plan_*.js): resimdeki noktalarla yürüme. Plan yoksa ya da eski gezinme seçiliyse oda düğmeleri.
    const plan = planBul(v);
    if (plan) {
      try {
        const s = await planVakit(v, plan, bant, { bekliyor, ipucu });
        // Hedef bir fon çeşidiyse (ör. 'ada_sofa_gunduz') plan onu asıl düğüm ('ada_sofa') olarak bırakır;
        // bölümün sonraki olayları vaktin yazdığı adı bekler, o yüzden konum o ada geri çevrilir.
        if (s !== 'dur' && vHam.hedef && S.mekan === v.hedef.mekan && vHam.hedef.mekan !== v.hedef.mekan) S.mekan = vHam.hedef.mekan;
        return s;
      }
      finally { planCesit = {}; bant.hidden = true; bant.classList.remove('plan'); $('#cikislar').classList.remove('vakit', 'plan'); }
    }
    planCesit = {}; v = vHam; // plan yoksa çeşit adları oda düğmelerinde kendi adıyla kalır
    try {
      while (true) {
        $('#diyalog').hidden = true;
        bant.hidden = false;
        bant.innerHTML = '<b>' + (v.ad || 'Serbest vakit') + ' · serbest vakit</b> <span class="vakit-hak">' + '●'.repeat(kalan) + '○'.repeat(Math.max(0, (v.hak || 3) - kalan)) + '</span>' +
          ' <span class="vakit-sayi">' + kalan + ' ziyaret kaldı</span>' +
          '<div class="vakit-yer">Buradasın: ' + ((V.mekanlar[S.mekan] || {}).ad || '') + '</div>' +
          '<div class="vakit-hedef">★ ' + bicimle(v.hedef.metin) + '</div>' +
          // ★'ın vakti bitirdiği, oyuncunun ilk serbest vaktinde açıkça söylenir
          (!S.vakitOgrendi ? '<div class="vakit-kural">★ yere gidersen vakit biter ve hikâye sürer; • yerler birer ziyaret harcar.</div>' : '');
        S.vakitOgrendi = true;
        const kutu = $('#cikislar'); kutu.innerHTML = ''; kutu.classList.add('vakit');
        const secilen = await new Promise((coz) => {
          for (const id of v.mekanlar) {
            // Bulunulan yer yalnız orada bekleyen bir sahne varsa "Burada:" diye düğme olur
            const burada = id === S.mekan;
            if (burada && (id === v.hedef.mekan || !bekliyor(id))) continue;
            const b = document.createElement('button');
            b.className = 'dugme';
            b.textContent = (burada ? 'Burada: ' : '') + ((V.mekanlar[id] || {}).ad || id);
            const kap = kapaliKural(id);
            if (kap) {
              b.classList.add('kapali');
              b.textContent = '🔒 ' + ((V.mekanlar[id] || {}).ad || id) + ' · ' + (metinAl(kap.etiket) || 'kilitli');
              b.title = metinAl(kap.neden) || 'Kapalı';
            } else if (id === v.hedef.mekan) { b.classList.add('hedef'); b.title = 'Vakti bitirir, hikâye sürer'; }
            else if (bekliyor(id)) { b.classList.add('yanvar'); if (yerVurgulu(v, id)) b.classList.add('vurgu'); b.title = ipucu(id) || 'Orada bir şey var'; }
            b.addEventListener('click', () => coz(id));
            kutu.appendChild(b);
          }
          // İpuçları: bekleyen yerlerin kısa notları
          const ip = (v.mekanlar || []).filter((id) => id !== v.hedef.mekan && bekliyor(id) && ipucu(id));
          if (ip.length) {
            const n = document.createElement('div'); n.className = 'vakit-ipucu';
            n.innerHTML = ip.map((id) => '• ' + bicimle(ipucu(id))).join('<br>');
            bant.appendChild(n);
          }
        });
        kutu.innerHTML = ''; kutu.classList.remove('vakit');
        bant.hidden = true;
        if (secilen === v.hedef.mekan) { await tasin(secilen, null); return; }
        // Kapalı kapıya bakmak bedava: neden söylenir, hak ve konum aynı kalır
        const kapSecilen = kapaliKural(secilen);
        if (kapSecilen) { SES.efekt('kapi'); await konus('ic', metinAl(kapSecilen.neden) || 'Bu kapı şimdi kapalı.', 'mahzun'); continue; }
        kalan -= 1;
        const yer = (v.yerler || {})[secilen];
        if (secilen !== S.mekan) await tasin(secilen, yer);
        else if (yer && yer.kisi && (!yer.kosul || yer.kosul(S))) { kisiGorselleriniYukle(yer.kisi); sahnedekiler = [{ id: yer.kisi, ifade: yer.ifade || null }]; kisileriCiz(); }
        if (bekliyor(secilen)) {
          S.vakitGorulen[vakitAnahtari(v, secilen)] = true;
          const s = await calistir(yer.adimlar);
          if (s === 'dur') return 'dur';
        } else {
          await konus(null, (yer && yer.bos) || 'Burada şimdi kimse yok.');
        }
        // Burada kaydetme: kayıt sahne bitince alınır. Ara kayıt, yenilemede sahne baştan oynarken
        // önceki seçimlerin etkisini ikinci kez ekletirdi (madde 20: yenileme aynı durumla dönsün).
        if (kalan <= 0) {
          if (v.bitis) { const s = await calistir(v.bitis); if (s === 'dur') return 'dur'; }
          else await konus(null, 'Vakit doldu.');
          await tasin(v.hedef.mekan, null);
          return;
        }
      }
    } finally { bant.hidden = true; $('#cikislar').classList.remove('vakit'); }
  }

  /* ------------------------------------------------------------------ */
  /* Plan üstünde gezinme (veri/plan_*.js, notlar/gezinme_tasarimi.md)   */
  /* ------------------------------------------------------------------ */
  /* Vakit tanımı aynen kalır; ek alanlar (hepsi isteğe bağlı):
       plan: 'konak'                       (ya da bölüm düzeyinde bolum.plan)
       kapali: { mekanId: { kosul(S), neden, gizliNeden } }  → ⊘ nokta; dokununca nedeni (bedava).
               gizliNeden: true ise harita nedeni, kapıya bir kez gidilene kadar söylemez.
       riskli: { mekanId: { kosul(S), gozcu: 'kişi' | (S) => kişi|null, gozcuYer, sonuc, uyari,
                            bedel: { etki, bayrak, ic }, refakat(S), refakatMetin, bayrak, iz } }
               gozcu varsa onayda: "Bu kapıdan geçersen <gozcu> seni görür: <sonuc>"; bedel kesin, bölümde bir kez.
               gozcu yoksa: geçiş sessiz, anlık ceza yok; iz satırı Feride'nin sesiyle oynar ve günlüğe
               yazılır (S.gizliGidilen['bolum:mekan']); sonradan anılacaksa oyuncu bunu görmüş olur.
       refakat: (S) => bool                (vakit düzeyinde; riskli geçişi güvenli kılar)
     yerler[id] ek alanları: eylem ('dinle', 'konuş'…: noktada ve "Burada" düğmesinde),
       duyulur: true (ipucu kişiyi ele veriyorsa harita onu "az önce" orada gösterir).
     Kurallar planda da tanımlanabilir (plan.kapali / plan.riskli / plan.refakat); vakittekiler önce gelir.
     Yürümek bedava. • yerdeki iş "Burada: …" düğmesiyle başlar ve 1 vakit harcar (kişiye dokunmak
     başlatmaz); ★ yere varmak vakti bitirir. Haritadan "Git" aynı kapı/risk/refakat kurallarından geçer.
     Fon, harita işaretçisi, geri yönü ve "Buradasın" yalnız S.mekan'dan okunur. */
  const PLANLAR = window.PLANLAR || {};
  let planDurum = null; // süren plan vakti: { p, v, bekliyor, coz, olayKisi, gecilen, yon, bekliyorMu, ipucu, denenen, bilinen, geriHedef }
  let isaretAcik = false;
  try { isaretAcik = localStorage.getItem('muhadarat_isaret') === '1'; } catch (e) { /* yok */ }
  const azHareket = () => !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const bekle = (ms) => new Promise((r) => setTimeout(r, ms));
  const metinAl = (x) => (typeof x === 'function' ? x(S) : x);
  const gecilenKapilar = new Set(); // 'a>b': bu oturumda geçilmiş kapı; ikinci geçişte geçiş kısa

  // Fon çeşidi (plan.esdeger: { 'taslik_gunduz': 'taslik' }) aynı yerin ışığıdır: aynı düğüm, aynı noktalar,
  // aynı harita yeri. Çeşit adı asıl düğüme çevrilir; görünen ışık planCesit'te tutulur (fonCoz).
  const planAsil = (p, id) => (p && p.esdeger && p.esdeger[id]) || id;
  function planCesitKaydet(p, id) {
    const a = planAsil(p, id);
    if (a !== id) planCesit[a] = id;
    return a;
  }
  // Vakit tanımındaki çeşit adlarını asıl düğüme çevirir (hedef, mekânlar, yerler, kurallar); çeşit yoksa v aynen döner
  function planEsle(v) {
    if (!v || !S || (S.ayar && S.ayar.eskiGezinme)) return v;
    const ad = v.plan || (bolum() && bolum().plan);
    const p = ad && PLANLAR[ad];
    if (!p || p.etkin === false || !p.esdeger) return v;
    const es = p.esdeger;
    const anahtarlar = (o) => Object.keys(o || {});
    const cesitVar = [v.hedef && v.hedef.mekan, ...(v.mekanlar || []), ...anahtarlar(v.yerler), ...anahtarlar(v.kapali), ...anahtarlar(v.riskli),
      typeof v.baslangic === 'string' ? v.baslangic : null].some((id) => id && es[id]);
    if (!cesitVar) return v;
    const yeniden = (o) => { if (!o) return o; const y = {}; for (const k of Object.keys(o)) y[planCesitKaydet(p, k)] = o[k]; return y; };
    const e = Object.assign({}, v);
    if (v.hedef) e.hedef = Object.assign({}, v.hedef, { mekan: planCesitKaydet(p, v.hedef.mekan) });
    if (v.mekanlar) e.mekanlar = [...new Set(v.mekanlar.map((id) => planCesitKaydet(p, id)))];
    e.yerler = yeniden(v.yerler); e.kapali = yeniden(v.kapali); e.riskli = yeniden(v.riskli);
    if (typeof v.baslangic === 'string') e.baslangic = planCesitKaydet(p, v.baslangic);
    return e;
  }
  function planBul(v) {
    if (!S || (S.ayar && S.ayar.eskiGezinme)) return null;
    const ad = v.plan || (bolum() && bolum().plan);
    const p = ad && PLANLAR[ad];
    if (!p || p.etkin === false || !p.mekanlar) return null;
    const var_ = (id) => !!p.mekanlar[planAsil(p, id)];
    return (var_(S.mekan) && v.hedef && var_(v.hedef.mekan) && (v.mekanlar || []).every(var_)) ? p : null;
  }
  // Graf: noktaların hedefleri + plan.baglanti (iki yönlü)
  function planKomsu(p) {
    if (p._komsu) return p._komsu;
    const k = {};
    const ekle = (a, b) => {
      if (!p.mekanlar[a] || !p.mekanlar[b]) return;
      (k[a] = k[a] || new Set()).add(b); (k[b] = k[b] || new Set()).add(a);
    };
    for (const id of Object.keys(p.mekanlar)) for (const n of p.mekanlar[id].noktalar || []) ekle(id, n.hedef);
    for (const [a, b] of p.baglanti || []) ekle(a, b);
    p._komsu = k;
    return k;
  }
  // Vakit bir yerin adını o vakitlik değiştirebilir (v.adlar; ör. kapalı kapının önünde dinlerken "kapısının önü")
  const planAd = (p, id) => (planDurum && planDurum.v.adlar && planDurum.v.adlar[id]) ||
    (p.mekanlar[id] && p.mekanlar[id].ad) || (V.mekanlar[id] || {}).ad || id;
  const noktaBul = (p, den, ya) => ((p.mekanlar[den] || {}).noktalar || []).find((n) => n.hedef === ya) || null;
  function planKurali(p, v, tur, id) {
    const k = (v[tur] && v[tur][id]) || (p[tur] && p[tur][id]);
    if (!k) return null;
    try { return (!k.kosul || k.kosul(S)) ? k : null; } catch (e) { return null; }
  }
  // Hedeflerden geriye mesafe; gecilmez(id) olan ara mekânlardan yol geçmez (bulunulan yer hariç)
  function planMesafe(p, hedefler, gecilmez) {
    const kom = planKomsu(p), d = {};
    let kat = hedefler.filter((h) => p.mekanlar[h]);
    kat.forEach((h) => { d[h] = 0; });
    while (kat.length) {
      const yeni = [];
      for (const x of kat) for (const y of kom[x] || []) {
        if (d[y] !== undefined || (y !== S.mekan && gecilmez(y))) continue;
        d[y] = d[x] + 1; yeni.push(y);
      }
      kat = yeni;
    }
    return d;
  }
  function planYolBul(p, bas, son, gecilmez) {
    const kom = planKomsu(p), onceki = { [bas]: null };
    let kat = [bas];
    while (kat.length && !(son in onceki)) {
      const yeni = [];
      for (const x of kat) for (const y of kom[x] || []) {
        if (y in onceki || (y !== son && gecilmez(y))) continue;
        onceki[y] = x; yeni.push(y);
      }
      kat = yeni;
    }
    if (!(son in onceki)) return null;
    const yol = [];
    for (let x = son; x !== null; x = onceki[x]) yol.unshift(x);
    return yol;
  }
  // Riskli geçidin okunur sonucu: kim görür, ne olur (zar yok; gözcü varsa bedel kesin)
  function riskBilgi(ris) {
    const gozcu = metinAl(ris.gozcu) || null;
    return { gozcu, sonuc: metinAl(ris.sonuc) || '', uyari: metinAl(ris.uyari) || (gozcu ? gozcu + ' görür' : 'gizli geçit, şimdi kimse yok') };
  }
  function riskCumlesi(ris) {
    const { gozcu, sonuc } = riskBilgi(ris);
    if (gozcu) return 'Bu kapıdan geçersen ' + gozcu + ' seni görür' + (sonuc ? ': ' + sonuc : '.');
    return 'Şimdi yolda kimse yok; geçersen görülmezsin.' + (sonuc ? ' ' + sonuc : '');
  }
  // Geçişin yön oku: resimdeki yerinden (sol/orta/sağ) ya da merdivende kattan; aynı kapıda hep aynı
  function noktaYonu(p, den, n) {
    const A = p.mekanlar[den], B = p.mekanlar[n.hedef];
    if (A && B && A.kat !== B.kat) return B.kat > A.kat ? '↑' : '↓';
    const cx = n.x + n.w / 2;
    return cx < 30 ? '←' : cx > 70 ? '→' : '↑';
  }
  // Bir geçişin etiketi: simge + hedef adı + (kapalı / kim görür / ★ vakti bitirir / • iş 1 vakit)
  function noktaEtiketi(d, den, n) {
    const { p, v } = d;
    const ad = (n && n.ad) || planAd(p, n.hedef);
    if (!p.mekanlar[n.hedef]) return { sinif: 'kapali', simge: '⊘', metin: ad + ' · kapalı' };
    const kap = planKurali(p, v, 'kapali', n.hedef);
    // Tur 30 (t30 ORTAK B9–12): kapalı yer sönük; nedeni (biliniyorsa) üstüne gelince görünür
    if (kap) return { sinif: 'kapali', simge: '⊘', metin: ad + ' · kapalı', ipucu: (!kap.gizliNeden || d.denenen.has(n.hedef)) ? metinAl(kap.neden) : 'Nedenini kapıda öğrenirim.' };
    let ek = '', vurgu = false;
    if (n.hedef === v.hedef.mekan) ek = v.hedef.elleBitir ? ' · ★ (geçilir; vakti orada düğmeyle bitirirsin)' : ' · ★ vakti bitirir';
    else if (d.bekliyorMu(n.hedef)) { ek = ' · • ' + (((v.yerler || {})[n.hedef] || {}).eylem || 'iş var') + ' (1 vakit)'; vurgu = yerVurgulu(v, n.hedef); }
    const ris = !d.gecilen.has(n.hedef) && planKurali(p, v, 'riskli', n.hedef);
    if (ris) {
      const ref = ris.refakat || v.refakat || p.refakat;
      if (ref && ref(S)) return { sinif: 'refakat', simge: noktaYonu(p, den, n), metin: ad + ' · refakatle' + ek };
      return { sinif: 'riskli', simge: '⚠', metin: ad + ' · ' + riskBilgi(ris).uyari + ek };
    }
    return { sinif: vurgu ? 'vurgu' : '', simge: noktaYonu(p, den, n), metin: ad + ek };
  }
  // Tur 30 (t30 ORTAK B9–12, B10 oynanış 1): yerler[id].vurgu (true ya da (S) => bool) — verilmiş bir sözün ya da
  // bölümün önemli işinin tutulduğu uğrak haritada, resimdeki noktada ve oda düğmesinde altınla vurgulanır
  function yerVurgulu(v, id) {
    const y = (v && v.yerler || {})[id];
    if (!y || !y.vurgu) return false;
    try { return typeof y.vurgu === 'function' ? !!y.vurgu(S) : !!y.vurgu; } catch (e) { return false; }
  }

  // Noktaya doğru kısa yakınlaşma + çapraz geçiş (en çok 450 ms; geçilmiş kapıda 200 ms; hareket istemeyen
  // tarayıcıda doğrudan değişir). S.mekan fonla aynı anda değişir: ikisi hiç ayrışmaz.
  async function planGecisi(id, nokta, hizli) {
    const img = $('#arkaplan');
    const g = fonGorunumu(id); // gece süzgeci geçişte de (gündüz resmi bir an parlayıp sonra kararmasın)
    const src = g.src;
    await fonHazir(id);
    const yerles = () => { S.mekan = id; geciciArkaplan = null; arkaplanGoster(S.mekan); };
    if (azHareket() || !src || !img.getAttribute('src') || img.getAttribute('src') === src) { yerles(); return; }
    const sure = hizli ? 200 : 450;
    const ox = nokta ? nokta.x + nokta.w / 2 : 50, oy = nokta ? nokta.y + nokta.h / 2 : 50;
    const ust = document.createElement('img');
    ust.className = 'gecis-fon' + (g.suzgec ? ' suzgec-' + g.suzgec : ''); ust.alt = ''; ust.src = src;
    ust.style.animationDuration = sure + 'ms';
    img.after(ust);
    img.style.transformOrigin = ox + '% ' + oy + '%';
    img.style.transition = 'transform ' + sure + 'ms ease-in';
    void img.offsetWidth;
    img.style.transform = 'scale(1.22)';
    await bekle(sure);
    yerles();
    img.style.transition = 'none'; img.style.transform = ''; void img.offsetWidth; img.style.transition = '';
    // Arka plandaki sekmede kare çizilmez; geçiş takılmasın diye kısa bir zaman aşımı da var
    await Promise.race([new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))), new Promise((r) => setTimeout(r, 120))]);
    ust.remove();
  }

  function noktalariGizle() { const k = $('#noktalar'); if (k) { k.hidden = true; k.innerHTML = ''; } }
  function haritaDugmesi(acik) { const d = document.querySelector('#ust-cubuk [data-panel="harita"]'); if (d) d.disabled = !acik; }
  function noktaKonumu(el, n) {
    el.style.setProperty('--x', (n.x + n.w / 2) + '%');
    el.style.setProperty('--y', (n.y + n.h / 2) + '%');
    el.style.setProperty('--w', n.w);
    el.style.setProperty('--h', n.h);
  }
  // Resimdeki geçişler. Geri yönü alttaki "‹ Geri" düğmesindedir; aynı kapı resimde ikinci kez çizilmez
  // (ekranda en çok 5 etkin yön: geçişler + geri).
  function planNoktaCiz(d) {
    const { p } = d;
    let k = $('#noktalar');
    if (!k) { k = document.createElement('div'); k.id = 'noktalar'; $('#sahne').appendChild(k); }
    k.innerHTML = ''; k.hidden = false;
    k.classList.toggle('isaretli', isaretAcik);
    for (const n of p.mekanlar[S.mekan].noktalar || []) {
      if (n.hedef === d.geriHedef) continue;
      const e = noktaEtiketi(d, S.mekan, n);
      const yon = d.yon[n.hedef] || '';
      const b = document.createElement('button');
      b.className = 'nokta tur-' + (n.tur || 'kapi') + (e.sinif ? ' ' + e.sinif : '') + (yon ? ' yol' : '') + (n.y + n.h / 2 < 24 ? ' alt-ad' : '');
      noktaKonumu(b, n);
      b.innerHTML = '<span class="pin"></span>' + (yon ? '<span class="isaret">' + yon + '</span>' : '') +
        '<span class="ad"><span class="simge">' + e.simge + '</span> ' + bicimle(e.metin) + '</span>';
      b.setAttribute('aria-label', e.metin);
      if (e.ipucu) b.title = e.ipucu;
      b.addEventListener('click', (ev) => { ev.stopPropagation(); if (d.coz) d.coz({ tur: 'git', id: n.hedef, nokta: n }); });
      k.appendChild(b);
    }
    noktaAlanlariniKirp([...k.querySelectorAll('.nokta')]);
    etiketleriYerlestir([...k.querySelectorAll('.nokta .ad')]);
  }
  // Resimdeki dokunma alanı üst çubuğun ya da alttaki düğmelerin altına girmesin (en az 44 px kalarak kırpılır)
  function noktaAlanlariniKirp(noktalar) {
    const engeller = [...document.querySelectorAll('#ust-cubuk .dugme, #cikislar button')].filter((e) => e.offsetParent !== null).map((e) => e.getBoundingClientRect());
    for (const b of noktalar) {
      b.style.height = ''; b.style.marginTop = '';
      let r = b.getBoundingClientRect(), ust = r.top, alt = r.bottom;
      for (const e of engeller) {
        if (e.right <= r.left || e.left >= r.right || e.bottom <= ust || e.top >= alt) continue;
        if (e.top <= ust + 1) ust = e.bottom + 1; else alt = e.top - 1;
      }
      if ((ust !== r.top || alt !== r.bottom) && alt - ust >= 44) {
        b.style.height = Math.round(alt - ust) + 'px';
        b.style.marginTop = Math.round((ust + alt) / 2 - (r.top + r.bottom) / 2) + 'px';
      }
    }
  }
  window.addEventListener('resize', () => {
    const k = $('#noktalar');
    etiketleriYerlestir([...(k && !k.hidden ? k.querySelectorAll('.nokta .ad') : []), ...document.querySelectorAll('.nokta.kesif .ad')]);
  });
  // Her zaman görünen adlar dar ekranda çakışmasın: sahnenin içine kaydır, üst üste binen adı aşağı al
  function etiketleriYerlestir(adlar) {
    const s = $('#sahne').getBoundingClientRect();
    const bant = $('#vakit-bant'), bR = bant && !bant.hidden ? bant.getBoundingClientRect() : null;
    const kes = (a, b) => a.left < b.right + 2 && b.left < a.right + 2 && a.top < b.bottom + 1 && b.top < a.bottom + 1;
    const yerlesen = [];
    adlar.forEach((el) => { el.style.setProperty('--dx', '0px'); el.style.setProperty('--dy', '0px'); });
    adlar.map((el) => ({ el, r: el.getBoundingClientRect() })).sort((a, b) => a.r.left - b.r.left).forEach(({ el }) => {
      let r = el.getBoundingClientRect(), dx = 0, dy = 0;
      if (r.left < s.left + 4) dx = s.left + 4 - r.left; else if (r.right > s.right - 4) dx = s.right - 4 - r.right;
      const kutu = () => ({ left: r.left + dx, right: r.right + dx, top: r.top + dy, bottom: r.bottom + dy });
      for (let i = 0; i < 8; i++) {
        const k = kutu();
        const engel = yerlesen.find((y) => kes(k, y)) || (bR && kes(k, bR) ? bR : null);
        if (!engel) break;
        dy += engel.bottom - k.top + 2;
      }
      el.style.setProperty('--dx', Math.round(dx) + 'px'); el.style.setProperty('--dy', Math.round(dy) + 'px');
      yerlesen.push(kutu());
    });
  }

  async function planVakit(v, p, bant, yard) {
    const { bekliyor, ipucu } = yard;
    const hedef = v.hedef.mekan, hak = v.hak || 3;
    /* Tur 29 (GPT O9-1): hedef.elleBitir — ★ hedef geçit olarak kullanılabilir (yol araması onu geçilmez saymaz, içine
       yürümek vakti bitirmez); vakit yalnız "★ … vakti bitir" düğmesiyle, ★ hedefe "Git" ile ya da haklar tükenince biter.
       Hedefi başka uğrakların tek geçidi olan vakitler için (B9 akşamüstü: sofa → Perihan Hanım'ın kapısı). */
    const elle = !!v.hedef.elleBitir;
    let kalan = hak, onceki = null, gizliTaraf = null;
    const d = { p, v, bekliyor: false, coz: null, olayKisi: null, gecilen: new Set(), yon: {}, bekliyorMu: bekliyor, ipucu,
      denenen: new Set(), bilinen: {}, geriHedef: null };
    planDurum = d;
    // Çeşit adıyla durulan yer (ör. sahne 'mutfak_gunduz'a taşıdı) asıl düğümdür; ışığı aynı kalır
    S.mekan = planCesitKaydet(p, S.mekan);
    document.body.classList.add('plan-modu');
    kesifleriKaldir();
    const kural = (tur, id) => planKurali(p, v, tur, id);
    const kapaliMi = (id) => !p.mekanlar[id] || !!kural('kapali', id);
    const yer = (id) => (v.yerler || {})[id];
    // Kişilerin son bilinen yeri: yalnız gördüğü, duyduğu ya da kendisine söylenen ("az önce")
    const bilinenEkle = (id, ad) => {
      if (!id || !ad || !p.mekanlar[id]) return;
      if ((d.bilinen[id] || []).some((x) => x.includes(ad))) return; // "Nabi Bey ile Süha Bey" Nabi'yi zaten içerir
      for (const m of Object.keys(d.bilinen)) d.bilinen[m] = d.bilinen[m].filter((x) => x !== ad);
      (d.bilinen[id] = d.bilinen[id] || []).push(ad);
    };
    for (const id of Object.keys(v.yerler || {})) {
      const y = yer(id);
      let ok = false; try { ok = !!(y.duyulur && y.kisi && V.karakterler[y.kisi] && (!y.kosul || y.kosul(S))); } catch (e) { ok = false; }
      if (ok) bilinenEkle(id, V.karakterler[y.kisi].ad);
    }
    for (const id of new Set([...Object.keys(v.riskli || {}), ...Object.keys(p.riskli || {})])) {
      const r = kural('riskli', id);
      if (r && r.gozcuYer) bilinenEkle(r.gozcuYer, riskBilgi(r).gozcu);
    }
    // Bekleyen işin kişisi o mekânda görünür (iş "Burada" düğmesiyle başlar); öteki yerlerde kimse durmaz
    const kisiKoy = (id) => {
      const y = yer(id);
      const k = (id !== hedef && bekliyor(id) && y && y.kisi) ? y.kisi : null;
      d.olayKisi = k;
      if (k) { kisiGorselleriniYukle(k); if (V.karakterler[k]) bilinenEkle(id, V.karakterler[k].ad); }
      sahnedekiler = k ? [{ id: k, ifade: y.ifade || null }] : []; konusanId = null; kisileriCiz();
    };
    const gec = async (id, nokta, hizli) => {
      SES.efekt(nokta && nokta.tur === 'merdiven' ? 'adim' : 'kapi');
      const den = S.mekan;
      sahnedekiler = []; kisileriCiz();
      await planGecisi(id, nokta, hizli || gecilenKapilar.has(den + '>' + id));
      gecilenKapilar.add(den + '>' + id); gecilenKapilar.add(id + '>' + den);
      onceki = den;
      // Gizli yol: geçidin öbür yanında dolaşılan her yer kaydedilir; çıkılan tarafa dönünce biter
      if (gizliTaraf) {
        if (p.mekanlar[id].bolge === gizliTaraf) gizliTaraf = null;
        else { S.gizliGidilen = S.gizliGidilen || {}; S.gizliGidilen[S.bolum + ':' + id] = true; }
      }
      kisiKoy(id);
    };
    // Kapalı / riskli / refakat: geçilebilirse true. Kapının nedenine bakmak bedava.
    const kuralGec = async (id, nokta) => {
      if (!p.mekanlar[id]) { SES.efekt('kapi'); await konus('ic', metinAl(nokta && nokta.neden) || p.disNeden || 'Buradan dışarı çıkılmaz.', 'mahzun'); return false; }
      const kap = kural('kapali', id);
      if (kap) { d.denenen.add(id); SES.efekt('kapi'); await konus('ic', metinAl(kap.neden) || 'Bu kapı şimdi kapalı.', 'mahzun'); return false; }
      if (d.gecilen.has(id)) return true;
      const ris = kural('riskli', id);
      if (!ris) return true;
      const refakat = ris.refakat || v.refakat || p.refakat;
      if (refakat && refakat(S)) { bildir(metinAl(ris.refakatMetin) || 'Yanımda biri var; kimse bir şey diyemez.'); d.gecilen.add(id); return true; }
      const { gozcu } = riskBilgi(ris);
      const sec = await secimYap(riskCumlesi(ris), [{ m: gozcu ? 'Göze al, geç' : 'Gizlice geç', gec: true }, { m: 'Vazgeç' }]);
      if (!sec.gec) return false;
      const anahtar = S.bolum + ':' + id;
      if (gozcu) {
        // Aynı geçit aynı bölümde bir kez ödenir (yeniden geçmek bedeli biriktirmez)
        S.yakalanan = S.yakalanan || {};
        if (!S.yakalanan[anahtar]) {
          S.yakalanan[anahtar] = true;
          const b = ris.bedel || {};
          toplayici = []; etkiUygula(b.etki); const satirlar = toplayici; toplayici = null;
          const bedelSimge = sonucAl();
          if (b.bayrak) Object.assign(S.bayrak, b.bayrak);
          gunlugeYaz('Gizlice geçerken görüldün: ' + planAd(p, id), satirlar.concat(bedelSimge.simge.map(simgeMetni)));
          await konus('ic', metinAl(b.ic) || 'Gördüler. Bunun bir bedeli olacak.', 'utanmis');
          $('#diyalog').hidden = true;
          if (satirlar.length) kuyrugaKoy(satirlar);
          sonucGoster(bedelSimge, false);
        }
      } else {
        // Görülmeyen geçiş: anlık ceza yok; oyuncu izini görür ve günlükte okur (gizli bayrakla sonradan ceza yok)
        S.gizliGidilen = S.gizliGidilen || {}; S.gizliGidilen[anahtar] = true;
        if (ris.bayrak) Object.assign(S.bayrak, ris.bayrak);
        const iz = metinAl(ris.iz) || metinAl(ris.sessiz) || 'Kimse görmedi.';
        gunlugeYaz('Gizli geçiş, ' + planAd(p, id) + ': ' + iz);
        await konus('ic', iz, 'utanmis');
        $('#diyalog').hidden = true;
      }
      gizliTaraf = p.mekanlar[S.mekan].bolge;
      d.gecilen.add(id);
      return true;
    };
    // Haritadan "Git": en kısa yoldan, ara mekânları hızlı geçerek. Her adım elle dokunuşla aynı
    // kurallardan geçer (kapalı yol kullanılmaz; riskli eşikte onay, refakat varsa güvenli).
    const yolGit = async (hedefId) => {
      if (hedefId === S.mekan) return;
      const kap = kural('kapali', hedefId);
      if (kap) { d.denenen.add(hedefId); await konus('ic', metinAl(kap.neden) || 'Oraya şimdi gidilmez.', 'mahzun'); return; }
      const yol = planYolBul(p, S.mekan, hedefId, (x) => kapaliMi(x) || (!elle && x === hedef));
      if (!yol) { await konus('ic', 'Oraya giden kapılar şimdi kapalı.', 'mahzun'); return; }
      for (let i = 1; i < yol.length; i++) {
        const id = yol[i], n = noktaBul(p, yol[i - 1], id);
        if (!(await kuralGec(id, n))) return;
        await gec(id, n, i < yol.length - 1);
        if (id === hedef && !elle) return;
      }
    };
    // Tur 22 (GPT 4, 6): bant sol üstte kısa durur (kişinin yüzünü örtmez); fırsatların uzun cümleleri açılır
    // "Fırsatlar" alanında; ★ hedefe tek dokunuşla gidilir (haritadaki "Git" ile aynı yol ve kurallar).
    let firsatAcik = false;
    const bantCiz = () => {
      bant.hidden = false; bant.classList.add('plan');
      const ip = (v.mekanlar || []).filter((id) => id !== hedef && bekliyor(id) && ipucu(id));
      const bekleyenVar = (v.mekanlar || []).some((id) => id !== hedef && bekliyor(id));
      const hedefDugme = S.mekan === hedef
        ? (elle ? '★ ' + bicimle(v.hedef.dugme || 'Vakti bitir') + ' · vakti bitirir' : '★ Burada kal · vakti bitir')
        : '★ Git: ' + bicimle(planAd(p, hedef)) + ' · vakti bitirir';
      bant.innerHTML = '<b>' + (v.ad || 'Serbest vakit') + ' · serbest vakit</b> <span class="vakit-hak">' + '●'.repeat(kalan) + '○'.repeat(Math.max(0, hak - kalan)) + '</span>' +
        ' <span class="vakit-sayi">' + kalan + ' ziyaret kaldı</span>' +
        '<div class="vakit-yer">Buradasın: ' + bicimle(planAd(p, S.mekan)) + '</div>' +
        '<div class="vakit-hedef">★ ' + bicimle(v.hedef.metin) + ' <span class="vakit-bitirir">Bu serbest vakti bitirir' +
          (kalan > 0 && bekleyenVar ? '; kalan ' + kalan + ' ziyaretten vazgeçersin' : '') + '.</span></div>' +
        '<button class="dugme hedef-git" type="button">' + hedefDugme + '</button>' +
        (!S.planOgrendi ? '<div class="vakit-kural">Resimdeki yazılı kapılara dokunarak yürü; yürümek bedava. • işler 1 vakit harcar, ★ vakti bitirir.</div>' : '') +
        (ip.length ? '<details class="vakit-firsat"' + (firsatAcik ? ' open' : '') + '><summary>Fırsatlar (' + ip.length + ')</summary><div class="vakit-ipucu">' +
          ip.map((id) => '• ' + bicimle(planAd(p, id)) + ': ' + bicimle(ipucu(id))).join('<br>') + '</div></details>' : '');
      const fd = bant.querySelector('.vakit-firsat');
      if (fd) fd.addEventListener('toggle', () => { firsatAcik = fd.open; });
      bant.querySelector('.hedef-git').addEventListener('click', (e) => {
        e.stopPropagation();
        if (d.coz) d.coz(S.mekan === hedef ? { tur: 'bitir' } : { tur: 'yol', id: hedef });
      });
    };
    try {
      kisiKoy(S.mekan);
      while (true) {
        // Yön: ★ hedefe ve bekleyen • yerlere giden en kısa yolun ilk noktası işaretlenir
        d.yon = {};
        const isaretle = (hedefler, isaret, gecilmez) => {
          const mes = planMesafe(p, hedefler, gecilmez), ben = mes[S.mekan];
          if (!ben) return;
          for (const id of planKomsu(p)[S.mekan] || []) {
            if (mes[id] === ben - 1 && !kapaliMi(id) && !(d.yon[id] || '').includes(isaret)) d.yon[id] = (d.yon[id] || '') + isaret;
          }
        };
        isaretle([hedef], '★', kapaliMi);
        (v.mekanlar || []).filter((id) => id !== hedef && id !== S.mekan && bekliyor(id))
          .forEach((id) => isaretle([id], '•', (x) => kapaliMi(x) || (!elle && x === hedef)));
        d.geriHedef = (onceki && onceki !== S.mekan && planKomsu(p)[S.mekan] && planKomsu(p)[S.mekan].has(onceki)) ? onceki : null;
        $('#diyalog').hidden = true;
        bantCiz();
        const kutu = $('#cikislar');
        kutu.innerHTML = ''; kutu.classList.add('vakit', 'plan');
        const istek = await new Promise((coz) => {
          d.coz = (x) => { d.coz = null; coz(x); };
          if (d.geriHedef) {
            const hedefGeri = d.geriHedef, n = noktaBul(p, S.mekan, hedefGeri) || { hedef: hedefGeri, x: 50, y: 50, w: 0, h: 0 };
            const e = noktaEtiketi(d, S.mekan, n), yon = d.yon[hedefGeri] || '';
            const g = document.createElement('button');
            g.className = 'dugme geri' + (e.sinif ? ' ' + e.sinif : '');
            g.innerHTML = '‹ Geri: ' + bicimle(e.metin) + (yon ? ' <span class="isaret">' + yon + '</span>' : '');
            g.addEventListener('click', () => { if (d.coz) d.coz({ tur: 'git', id: hedefGeri, nokta: noktaBul(p, S.mekan, hedefGeri) }); });
            kutu.appendChild(g);
          }
          if (S.mekan !== hedef && bekliyor(S.mekan)) {
            const b = document.createElement('button');
            b.className = 'dugme yanvar burada';
            const y = yer(S.mekan);
            const kim = (y && y.kisi && V.karakterler[y.kisi]) ? V.karakterler[y.kisi].ad : planAd(p, S.mekan);
            b.innerHTML = '◆ Burada: ' + bicimle(kim) + (y && y.eylem ? ' — ' + bicimle(y.eylem) : '') + ' · <b>1 vakit</b>';
            b.title = ipucu(S.mekan) || 'Burada bir iş var (1 vakit harcar)';
            b.addEventListener('click', () => { if (d.coz) d.coz({ tur: 'burada' }); });
            kutu.appendChild(b);
          }
          // Resminde kapı noktası olmayan yer (resimsiz ya da yedek fonlu): komşular alt şeritte düğme olur;
          // böylece hiçbir yerde çıkmaz kalmaz (haritaya muhtaç olmadan yürünür)
          const noktasiz = !((p.mekanlar[S.mekan] || {}).noktalar || []).length;
          if (noktasiz) {
            for (const kid of planKomsu(p)[S.mekan] || []) {
              if (kid === d.geriHedef) continue;
              const nb = document.createElement('button');
              const isr = kid === hedef ? ' ★' : (bekliyor(kid) ? ' •' : '');
              nb.className = 'dugme' + (kid === hedef ? ' hedef' : '');
              nb.innerHTML = bicimle(planAd(p, kid)) + (isr ? ' <span class="isaret">' + isr.trim() + '</span>' : '');
              nb.addEventListener('click', () => { if (d.coz) d.coz({ tur: 'git', id: kid, nokta: noktaBul(p, S.mekan, kid) }); });
              kutu.appendChild(nb);
            }
          }
          const is = document.createElement('button');
          is.className = 'dugme isaret-dugme';
          is.textContent = isaretAcik ? 'İşaretleri gizle' : 'İşaretleri göster';
          is.addEventListener('click', (e) => {
            e.stopPropagation(); isaretAcik = !isaretAcik;
            try { localStorage.setItem('muhadarat_isaret', isaretAcik ? '1' : '0'); } catch (er) { /* yok */ }
            is.textContent = isaretAcik ? 'İşaretleri gizle' : 'İşaretleri göster';
            const k = $('#noktalar'); if (k) k.classList.toggle('isaretli', isaretAcik);
          });
          kutu.appendChild(is);
          planNoktaCiz(d);
          d.bekliyor = true; kisileriCiz(); haritaDugmesi(true);
        });
        d.bekliyor = false; haritaDugmesi(false);
        if (acikPanel === 'harita') panelKapat();
        kutu.innerHTML = ''; noktalariGizle(); bant.hidden = true; kisileriCiz();
        S.planOgrendi = true; S.vakitOgrendi = true;
        if (istek.tur === 'burada') {
          kalan -= 1;
          S.vakitGorulen = S.vakitGorulen || {};
          S.vakitGorulen[vakitAnahtari(v, S.mekan)] = true;
          const s = await calistir(yer(S.mekan).adimlar);
          kesifleriKaldir();
          if (s === 'dur') return 'dur';
          S.mekan = planCesitKaydet(p, S.mekan); // sahne çeşit adına taşıdıysa
          kisiKoy(S.mekan);
          // Burada kaydetme: kayıt sahne bitince alınır (serbestVakit'teki not)
          if (kalan <= 0) {
            if (v.bitis) { const s2 = await calistir(v.bitis); if (s2 === 'dur') return 'dur'; }
            else await konus(null, 'Vakit doldu.');
            $('#diyalog').hidden = true;
            if (S.mekan !== hedef) await gec(hedef, null);
            sahnedekiler = []; kisileriCiz();
            return;
          }
          continue;
        }
        if (istek.tur === 'bitir') { sahnedekiler = []; kisileriCiz(); return; }
        if (istek.tur === 'git') { if (await kuralGec(istek.id, istek.nokta)) await gec(istek.id, istek.nokta); }
        else if (istek.tur === 'yol') await yolGit(istek.id);
        $('#diyalog').hidden = true;
        // elleBitir: hedefe kapıdan yürümek vakti bitirmez; yalnız ★ "Git" (yol isteği hedefin kendisiyse) bitirir
        if (S.mekan === hedef && (!elle || (istek.tur === 'yol' && istek.id === hedef))) { sahnedekiler = []; kisileriCiz(); return; }
      }
    } finally {
      planDurum = null;
      document.body.classList.remove('plan-modu');
      noktalariGizle(); haritaDugmesi(false);
    }
  }

  /* Konak planı haritası (Harita düğmesi, yalnız plan vaktinde). Bulunulan kat açılır, öbür kat sekmede.
     Kişiler yalnız "az önce" görüldüğü/duyulduğu yerde; nedeni bilinmeyen kilit nedenini söylemez.
     Görev, kalp, para, yüzde yok: yer, ★ hedef, • iş, ⊘ kapalı, ⚠ gözlenen geçit, refakat. */
  let haritaKat = null;
  function planHaritaHtml() {
    const d = planDurum, p = d.p, v = d.v, hedef = v.hedef.mekan;
    const h = p.harita || { genislik: 120, yukseklik: 70, bolgeler: [] };
    const kom = planKomsu(p);
    const n1 = (x) => Math.round(x * 10) / 10;
    const katOf = (id) => (p.mekanlar[id] && p.mekanlar[id].kat) || 0;
    const katlar = [...new Set(Object.keys(p.mekanlar).map(katOf))].sort((a, b) => a - b);
    const burKat = katOf(S.mekan);
    if (haritaKat === null || !katlar.includes(haritaKat)) haritaKat = burKat;
    const kat = haritaKat;
    const katAdi = (k) => (h.katlar && h.katlar[k]) || (k ? k + '. kat' : 'Zemin kat');
    const bilinenAd = {}; for (const m of Object.keys(d.bilinen)) if (d.bilinen[m].length) bilinenAd[m] = d.bilinen[m].join(', ');
    const sekmeler = katlar.length > 1 ? '<div class="kat-sekmeler" role="tablist">' + katlar.map((k) =>
      '<button class="dugme kat-sekme' + (k === kat ? ' secili' : '') + '" role="tab" aria-selected="' + (k === kat) + '" data-plankat="' + k + '">' +
      bicimle(katAdi(k)) + (k === burKat ? ' · ● buradasın' : '') + (k === katOf(hedef) && k !== burKat ? ' · ★' : '') + '</button>').join('') + '</div>' : '';
    let svg = '<svg viewBox="0 0 ' + h.genislik + ' ' + h.yukseklik + '" class="plan-svg" role="img" aria-label="' + bicimle((p.ad || 'Plan') + ', ' + katAdi(kat)) + '">';
    for (const b of h.bolgeler || []) {
      if (b.kat !== undefined && b.kat !== kat) continue;
      svg += '<g class="pb bolge-' + b.bolge + '"><rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '" rx="1.5"/>' +
        '<text x="' + n1(b.x + 1.5) + '" y="' + n1(b.y + 3.6) + '">' + bicimle(b.ad) + '</text></g>';
    }
    for (const hc of h.hacimler || []) {
      if (hc.kat !== undefined && hc.kat !== kat) continue;
      svg += '<g class="hacim"><rect x="' + hc.x + '" y="' + hc.y + '" width="' + hc.w + '" height="' + hc.h + '" rx="1"/>' +
        '<text x="' + n1(hc.x + hc.w / 2) + '" y="' + n1(hc.y + hc.h / 2 + 0.8) + '">' + bicimle(hc.ad) + '</text></g>';
      const B = hc.bagli && p.mekanlar[hc.bagli];
      if (B) svg += '<line class="pk hacim-yol" x1="' + n1(B.x + 8) + '" y1="' + B.y + '" x2="' + hc.x + '" y2="' + n1(hc.y + hc.h / 2) + '"/>';
    }
    const cizildi = new Set();
    for (const a of Object.keys(kom)) for (const b of kom[a]) {
      const anahtar = [a, b].sort().join('|');
      if (cizildi.has(anahtar) || katOf(a) !== kat || katOf(b) !== kat) continue;
      cizildi.add(anahtar);
      const A = p.mekanlar[a], B = p.mekanlar[b];
      svg += '<line class="pk" x1="' + A.x + '" y1="' + A.y + '" x2="' + B.x + '" y2="' + B.y + '"/>';
    }
    for (const id of Object.keys(p.mekanlar)) {
      const m = p.mekanlar[id];
      if (katOf(id) !== kat) continue;
      const kapK = planKurali(p, v, 'kapali', id), kap = !!kapK;
      const ris = !kap && !d.gecilen.has(id) && !!planKurali(p, v, 'riskli', id);
      const ugrak = id !== hedef && d.bekliyorMu(id);
      const vur = ugrak && yerVurgulu(v, id); // Tur 30: sözün tutulduğu uğrak altınla
      const sinif = ['pm', 'bolge-' + m.bolge, id === S.mekan && 'burada', id === hedef && 'hedef', ugrak && 'ugrak', vur && 'vurgu', kap && 'kapali', ris && 'riskli'].filter(Boolean).join(' ');
      // Tur 30 (t30 ORTAK B9–12): kapalı yer sönük çizilir (oyun.css); üstüne gelince nedeni (biliniyorsa)
      const baslik = kap ? '<title>' + bicimle((planAd(p, id) + ' · kapalı' + ((!kapK.gizliNeden || d.denenen.has(id)) && metinAl(kapK.neden) ? ': ' + metinAl(kapK.neden) : '')).replace(/\{\/?[ib]\}/g, '')) + '</title>' : '';
      const isaret = id === S.mekan ? '●' : id === hedef ? '★' : ugrak ? '•' : kap ? '⊘' : ris ? '⚠' : '';
      const ad = m.kisa || planAd(p, id);
      const kisi = bilinenAd[id] ? 'az önce: ' + bilinenAd[id] : '';
      // Öbür kata merdiven: kutunun altında küçük yazı; dokununca o kat açılır
      const ust = [...(kom[id] || [])].filter((x) => katOf(x) !== kat);
      svg += '<g class="' + sinif + '" data-plansec="' + id + '">' + baslik +
        '<rect class="pm-alan" x="' + n1(m.x - 10) + '" y="' + n1(m.y - 6.5) + '" width="20" height="13"/>' +
        '<rect class="pm-kutu" x="' + n1(m.x - 8) + '" y="' + n1(m.y - 3.5) + '" width="16" height="7" rx="1.2"/>' +
        '<text class="pm-ad" x="' + m.x + '" y="' + n1(m.y + 0.9) + '"' + (ad.length > 12 ? ' textLength="15" lengthAdjust="spacingAndGlyphs"' : '') + '>' + bicimle(ad) + '</text>' +
        (isaret ? '<text class="pm-isaret" x="' + n1(m.x + 7.6) + '" y="' + n1(m.y - 2.4) + '">' + isaret + '</text>' : '') +
        (kisi ? '<text class="pm-kisi" x="' + m.x + '" y="' + n1(m.y + 6.2) + '"' + (kisi.length > 18 ? ' textLength="22" lengthAdjust="spacingAndGlyphs"' : '') + '>' + bicimle(kisi) + '</text>' : '') + '</g>';
      if (ust.length) {
        const k2 = katOf(ust[0]);
        svg += '<text class="pm-merdiven" data-plankat="' + k2 + '" x="' + n1(m.x - 8) + '" y="' + n1(m.y + (kisi ? 9 : 6.2)) + '">' + (k2 > kat ? '↑ ' : '↓ ') +
          bicimle(ust.map((x) => p.mekanlar[x].kisa || planAd(p, x)).join(', ')) + '</text>';
      }
    }
    svg += '</svg>';
    const kurallar = [];
    for (const id of Object.keys(p.mekanlar)) {
      const kap = planKurali(p, v, 'kapali', id);
      if (kap) {
        const bilinir = !kap.gizliNeden || d.denenen.has(id);
        kurallar.push('⊘ <b>' + bicimle(planAd(p, id)) + '</b>: ' + (bilinir ? bicimle(metinAl(kap.neden) || 'kapalı') : 'kapalı; nedenini bilmiyorum.'));
        continue;
      }
      const ris = !d.gecilen.has(id) && planKurali(p, v, 'riskli', id);
      if (ris) {
        const ref = ris.refakat || v.refakat || p.refakat;
        kurallar.push((ref && ref(S)) ? '✓ <b>' + bicimle(planAd(p, id)) + '</b>: refakatle geçebilirim.' : '⚠ <b>' + bicimle(planAd(p, id)) + '</b>: ' + bicimle(riskCumlesi(ris)));
      }
    }
    const kisiler = Object.keys(bilinenAd).map((m) => bicimle(bilinenAd[m]) + ' ' + bicimle(p.mekanlar[m].de || planAd(p, m)));
    // Telefonda (kısa ekran) kullanım paragrafı gizlenir, simge ve kural ayrıntısı katlanır (GPT Tur 20 ek, 2)
    const kisa = window.matchMedia && window.matchMedia('(max-height: 500px)').matches;
    return '<div class="harita-gorunum"><h2>Harita · ' + bicimle(p.ad || '') + '</h2><p class="not harita-not">' + bicimle(v.ad || '') + '. Bir yere dokun; “Git” seni en kısa yoldan, aynı kapılardan götürür. Yürümek bedava.</p>' +
      sekmeler + '<div class="plan-harita">' + svg + '</div>' +
      '<div id="harita-secim" class="harita-secim">Bir yere dokun.</div>' +
      (kisiler.length ? '<div class="harita-kisiler">Az önce: ' + kisiler.join(' · ') + '</div>' : '') +
      '<details class="harita-ayrinti"' + (kisa ? '' : ' open') + '><summary>Simgeler ve ayrıntılar</summary>' +
      '<div class="harita-lejant">● buradasın · ★ hedef, vakti bitirir · • iş var, 1 vakit · ⊘ kapalı · ⚠ gözlenen ya da gizli geçit · ↑↓ öbür kata merdiven</div>' +
      (kurallar.length ? '<ul class="harita-kurallar">' + kurallar.map((s) => '<li>' + s + '</li>').join('') + '</ul>' : '') +
      '</details></div>';
  }
  function haritaKatSec(k) {
    if (!planDurum) return;
    haritaKat = +k;
    const ic = $('#panel-icerik'); if (ic && acikPanel === 'harita') ic.innerHTML = planHaritaHtml();
  }
  function haritaSec(id) {
    const d = planDurum, kutu = $('#harita-secim');
    if (!d || !kutu) return;
    const p = d.p, v = d.v;
    document.querySelectorAll('.plan-svg .pm.secili').forEach((g) => g.classList.remove('secili'));
    const g = document.querySelector('.plan-svg [data-plansec="' + id + '"]');
    if (g) g.classList.add('secili');
    const ad = '<b>' + bicimle(planAd(p, id)) + '</b>';
    // Telefonda (kısa ekran) seçilen oda planın yerini alan ayrı görünümde okunur; "Plana dön" aynı kata,
    // aynı kaydırma konumuna ve aynı seçime döner (GPT Tur 21 ek, 2)
    const kisa = window.matchMedia && window.matchMedia('(max-height: 500px)').matches;
    const gor = kutu.closest('.harita-gorunum');
    if (kisa && gor) {
      const ph = gor.querySelector('.plan-harita'), ic = $('#panel-ic');
      d.haritaKaydir = { x: ph ? ph.scrollLeft : 0, y: ic ? ic.scrollTop : 0, id };
      gor.classList.add('ayrinti-acik');
      if (ic) ic.scrollTop = 0;
    }
    const geri = (kisa && gor) ? ' <button class="dugme dugme-ince" data-planalan="geri">‹ Plana dön</button>' : '';
    if (id === S.mekan) { kutu.innerHTML = ad + ' · buradasın.' + geri; return; }
    const kap = planKurali(p, v, 'kapali', id);
    if (kap) {
      const bilinir = !kap.gizliNeden || d.denenen.has(id);
      kutu.innerHTML = ad + ' · kapalı' + (bilinir ? ': ' + bicimle(metinAl(kap.neden) || '') : '. Nedenini kapıda öğrenirim.') + geri;
      return;
    }
    const ris = !d.gecilen.has(id) && planKurali(p, v, 'riskli', id);
    const ref = ris && (ris.refakat || v.refakat || p.refakat);
    const y = (v.yerler || {})[id] || {};
    const ek = id === v.hedef.mekan ? ' · ★ bu serbest vakti bitirir' : (d.bekliyorMu(id) ? ' · • ' + bicimle(y.eylem || 'iş var') + ' (1 vakit): ' + bicimle(d.ipucu(id) || '') : '');
    const rs = ris ? ' · <span class="riskli-yazi">' + ((ref && ref(S)) ? 'refakatle güvenli' : '⚠ ' + bicimle(riskCumlesi(ris))) + '</span>' : '';
    kutu.innerHTML = ad + ek + rs + ' <button class="dugme" data-plangit="' + id + '">Git ›</button>' + geri;
  }
  // Telefonda oda ayrıntısından plana dönüş: kat, kaydırma ve seçili oda korunur
  function haritaAyrintiKapat() {
    const gor = document.querySelector('.harita-gorunum');
    if (!gor) return;
    gor.classList.remove('ayrinti-acik');
    const k = planDurum && planDurum.haritaKaydir, ph = gor.querySelector('.plan-harita'), ic = $('#panel-ic');
    if (k) { if (ph) ph.scrollLeft = k.x; if (ic) ic.scrollTop = k.y; }
    const kutu = $('#harita-secim');
    if (kutu && k) { const ad = planAd(planDurum.p, k.id); kutu.innerHTML = '<b>' + bicimle(ad) + '</b> seçili. Ayrıntı için yine dokun.'; }
  }

  /* Sahne içi keşif: { kesif: { x, y, w, h, ad, adimlar: [...], sure?, kalici? } }
     Adım beklemez: nokta resmin üstünde belirir, sahne sürer. Pencere (oynanış T1 A4): nokta kesif adımından
     bir sonraki seçim yapılana ya da olay bitene dek dokunulabilir (kalici: true ise olay sonuna dek; sure
     verilirse o kadar). Satır ekrandayken de, seçim ekranı açıkken de açılır; kart, anlatı ve panel
     açıkken dokunuş yok sayılır.
     Dönüş: satır okunmuşsa yeniden yazılmaz, sahne kaldığı yerden sürer (giriş ya da anlatıcı satırı
     "yeniden oldu" gibi görünmesin). Satır daha yazılıyorken ya da az önce belirmişken (okunmamış)
     dokunulduysa aynı satıra dönülür. Seçim ekranından açıldıysa seçim yeniden çizilir; keşfin bıraktığı
     bayrak bir seçeneği açabilir. Bir kez bakılır; bakılınca nokta kalkar. */
  let kesifler = [];
  let kesifSuruyor = false;
  const SATIR_OKUMA = 1200; // ms: tamamen görünen satır bu süreden önce okunmuş sayılmaz
  function kesifKaldir(x) { x.n.remove(); kesifler = kesifler.filter((y) => y !== x); }
  function kesifleriKaldir() { kesifler.forEach((x) => x.n.remove()); kesifler = []; }
  function kesifGoster(k) {
    const n = document.createElement('button');
    n.className = 'nokta kesif' + ((k.y || 0) + (k.h || 0) / 2 < 24 ? ' alt-ad' : '');
    noktaKonumu(n, { x: k.x || 0, y: k.y || 0, w: k.w || 8, h: k.h || 8 });
    n.innerHTML = '<span class="pin"></span><span class="ad"><span class="simge">◉</span> ' + bicimle(k.ad || 'Bak') + ' · bak</span>';
    n.setAttribute('aria-label', 'Bak: ' + (k.ad || ''));
    const x = { n, k };
    n.addEventListener('click', (e) => { e.stopPropagation(); kesifAc(x); });
    $('#sahne').appendChild(n);
    etiketleriYerlestir([n.querySelector('.ad')]);
    kesifler.push(x);
    if (k.sure) setTimeout(() => { if (kesifler.includes(x)) kesifKaldir(x); }, k.sure);
  }
  async function kesifAc(x) {
    const diy = $('#diyalog'), an = $('#anlati'), sk = $('#secimler');
    if (kesifSuruyor || !kesifler.includes(x)) return;
    if (!$('#kart').hidden || (an && !an.hidden) || !$('#panel').hidden) return;
    const secimde = !sk.hidden && !!secimYenile;
    // Ne satır ne seçim (ör. görsel bekleniyor): kısa ara, dokunuş yok sayılır; nokta yerinde kalır
    if (!secimde && (diy.hidden || !ilerle)) return;
    kesifSuruyor = true;
    if (atlaModu) atlaAyarla(false);
    let bekleyen = null, okunmadi = false;
    const disYenile = secimde ? secimYenile : null; // keşfin içinde ayrı bir seçim olsa da dıştaki geri gelir
    if (secimde) sk.hidden = true;
    else {
      // Yazılmakta olan satır önce tamamlanır; satırın tıklama bekleyişi kenara alınır
      if (ilerle.tamamla) { okunmadi = true; const f = ilerle; ilerle = null; f(); await bekle(0); }
      bekleyen = ilerle; ilerle = null;
      if (!bekleyen) { kesifSuruyor = false; return; }
      if (Date.now() - satirTamZamani < SATIR_OKUMA) okunmadi = true;
    }
    const kon = $('#konusan'), met = $('#metin'), por = $('#fazila-portre');
    const eski = { kon: kon.textContent, renk: kon.style.color, met: met.innerHTML, metSinif: met.className, diySinif: diy.className,
      por: por.dataset.hedef || por.getAttribute('src'), sahne: sahnedekiler ? sahnedekiler.map((s) => Object.assign({}, s)) : null,
      konusan: konusanId, grup: grupKonusan, fIfade: S.fIfade };
    kesifKaldir(x);
    SES.efekt('secim');
    try { await calistir(x.k.adimlar); } finally {
      sahnedekiler = eski.sahne; konusanId = eski.konusan; grupKonusan = eski.grup; S.fIfade = eski.fIfade;
      kesifSuruyor = false;
      if (secimde) {
        // Seçim ekranına dönülür; keşfin bıraktığı bayrakla seçenekler yeniden süzülür
        diy.hidden = true; kisileriCiz();
        secimYenile = disYenile; document.body.classList.add('secim-acik');
        disYenile(); sk.hidden = false;
      } else if (okunmadi) {
        // Okunmamış satır: aynı satıra dönülür (yeniden yazılmaz, olduğu gibi konur)
        kon.textContent = eski.kon; kon.style.color = eski.renk; met.innerHTML = eski.met; met.className = eski.metSinif; diy.className = eski.diySinif;
        if (eski.por) portreKoy(eski.por);
        diy.hidden = false; kisileriCiz();
        ilerle = bekleyen;
      } else {
        // Okunmuş satır yeniden gösterilmez: sahne bir sonraki adımdan sürer
        diy.hidden = true; kisileriCiz();
        bekleyen();
      }
    }
  }

  async function olayCalistir(olay) {
    mesgul = true;
    if (olay.id !== '_sohbet') suankiOlay = olay.id; // gece ışığı: ara/vakit bilgisinin tazeliği
    if (olay.id !== '_sohbet') SES.muzik(SES.olayMuzigi(olay.id, S.bolum, S.faz), true);
    sahnedekiler = (olay.sahne || mekandakiler().map((x) => x.id)).map((id) => (typeof id === 'string' ? { id, ifade: null } : id));
    olayKadrosu = sahnedekiler.map((x) => Object.assign({}, x)); olayKadroTaze = true;
    // Sahnedeki herkesin bütün ifadelerini hemen yükle; ifade değişimi bir replik geç kalmasın
    sahnedekiler.forEach((x) => kisiGorselleriniYukle(x.id));
    kisiGorselleriniYukle('f');
    // Olayın içinde sonradan sahneye girecek kişiler ve fonlar da
    JSON.stringify(olay.adimlar || [], (k, v) => {
      if (k === 'goster' && Array.isArray(v)) kisiGorselleriniYukle(v[0]);
      if ((k === 'arkaplan' || k === 'mekan' || k === 'mekanaGit') && typeof v === 'string' && V.mekanlar[v]) hemenYukle(fonGorunumu(v, true).src);
      return v;
    });
    // Sahnenin ilk görüntüsü (fon ve ilk kişiler) hazır olmadan sahne açılmaz
    const ilk = sahnedekiler.map((x) => kisiGorseli(x.id, x.ifade)).filter((s) => s && !hazirMi(s));
    if (ilk.length) await Promise.all(ilk.map((s) => gorselHazir(s, 1200)));
    await fonHazir(geciciArkaplan || S.mekan);
    kesifleriKaldir();
    sahneyiCiz();
    const sonuc = await calistir(olay.adimlar);
    kesifleriKaldir(); // keşif noktası sahne bitene kadar kalır
    if (!S.biten.includes(olay.id)) S.biten.push(olay.id);
    mesgul = false;
    konusanId = null;
    grupKonusan = null;
    sahnedekiler = null;
    geciciArkaplan = null;
    $('#diyalog').hidden = true;
    kaydet();
    sahneyiCiz();
    if (sonuc !== 'dur' && !S.bolumBitti) SES.muzik(SES.ortam(S.bolum, S.faz));
    if (sonuc !== 'dur') await girisOlaylari();
  }

  async function girisOlaylari() {
    if (mesgul || S.bolumBitti) return;
    const olay = bekleyenOlay(S.mekan, null);
    if (olay) await olayCalistir(olay);
  }

  /* ------------------------------------------------------------------ */
  /* Hareket ve etkileşim                                                */
  /* ------------------------------------------------------------------ */
  async function git(mekanId) {
    if (mesgul || mekanId === S.mekan) return;
    if (!V.ayar.takatSinirsiz) {
      if (S.takat <= 0) { bildir('Takatin kalmadı. Biraz dinlenmelisin.'); return; }
      S.takat -= 1;
    }
    S.mekan = mekanId;
    SES.efekt('gecis');
    kaydet();
    // Yeni oda (fon ve oradakiler) hazır olunca çiz; eski oda yarım yamalak karışmasın
    mesgul = true;
    try {
      const kisiler = mekandakiler().map((x) => kisiGorseli(x.id)).filter((s) => s && !hazirMi(s));
      await Promise.race([Promise.all([fonHazir(mekanId), ...kisiler.map((s) => gorselHazir(s, 1000))]), new Promise((r) => setTimeout(r, 1600))]);
    } finally { mesgul = false; }
    sahneyiCiz();
    await girisOlaylari();
  }

  async function kisiyeTikla(id) {
    if (mesgul) return;
    const olay = bekleyenOlay(S.mekan, id);
    if (olay) { await olayCalistir(olay); return; }
    S.sohbetSayaci = S.sohbetSayaci || {};
    const sayac = S.sohbetSayaci[id] || 0;
    const sohbet = bolum().sohbet && bolum().sohbet(S, id);
    S.sohbetSayaci[id] = sayac + 1;
    if (sohbet) await olayCalistir({ id: '_sohbet', sahne: mekandakiler().map((x) => x.id), adimlar: sohbet, tekrar: true });
    // _sohbet tekrar oynanabilsin
    S.biten = S.biten.filter((x) => x !== '_sohbet');
  }

  /* ------------------------------------------------------------------ */
  /* Bölüm                                                               */
  /* ------------------------------------------------------------------ */
  async function bolumBaslat(no) {
    const b = BOLUMLER[no];
    // Bölüm başı kaydı: "Bölümü baştan başlat" önceki bölümlerin kararlarını silmesin diye
    // Bölüm başı durumu kaydın İÇİNDE de tutulur (basDurum): kayıt koduyla dönen oyuncu "öbür yol"da
    // tarayıcıdaki başka bir oyunun bölüm başına düşmesin (Tur 18, öneri 5)
    if (!S.biten.includes('acilis' + no)) {
      const kopya = Object.assign({}, S); delete kopya.basDurum;
      S.basDurum = JSON.stringify(kopya);
      try { localStorage.setItem(KAYIT_ANAHTARI + '_b' + no, S.basDurum); } catch (e) { /* yok */ }
    }
    // Perihan'ın kuşkusu bölüm arasında biraz söner (yalnız doğrusal bölüm; bölüm başı kopyası sönümden önce
    // alındığı için "öbür yoldan oyna" ikinci kez söndürmez; S.supheSonum aynı bölümde tekrarı da önler)
    if (b.dogrusal && S.v && S.supheSonum !== no && !S.biten.includes('acilis' + no)) {
      if (no !== PILOT_NO) S.v.calibe_suphe = sinirla((S.v.calibe_suphe || 0) - SUPHE_SONUM, 0, SINIRLAR.calibe_suphe[1]);
      S.supheSonum = no;
    }
    S.bolum = no; S.faz = b.ilkFaz; S.mekan = b.baslangic; S.gorev = 0; S.bolumBitti = false;
    sahneZamani = null; suankiOlay = null;
    kaydet();
    gorselleriOnYukle();
    SES.muzik(SES.ortam(S.bolum, S.faz));
    sahneyiCiz();
    if (b.acilis && !S.biten.includes('acilis' + no)) {
      await olayCalistir({ id: 'acilis' + no, sahne: [], adimlar: b.acilis });
    } else {
      await girisOlaylari();
    }
  }

  // Yeni biçimin bölüm sonu: defter cümlesi, adaylar, kozlar, açılan an ve sıradaki bölümün kancası
  // Bölüm sonu defteri: uzun tek paragraf yerine en çok üç kısa paragraf (cümle sınırlarından)
  function defterParcala(metin) {
    const cumleler = String(metin || '').split(/(?<=[.!?…”])\s+(?=[A-ZÇĞİÖŞÜ“"])/).filter(Boolean);
    // Üç kısa cümle: yaptığım / kimle ne kaldı / sıradaki soru — her biri kendi satırında
    if (cumleler.length <= 3) return cumleler.map((c) => '<p class="not">' + c + '</p>').join('');
    const parca = Math.ceil(cumleler.length / 3), out = [];
    for (let i = 0; i < cumleler.length; i += parca) out.push('<p class="not">' + cumleler.slice(i, i + parca).join(' ') + '</p>');
    return out.join('');
  }
  // Açılmış anın kayıtlı kıyafet çeşidi (yoksa ana resim)
  // Açılmış anın kayıtlı kıyafet çeşidi ya da yedeği (yoksa ana resim); ad her zaman anın kendi adı
  function cizimAl(id) {
    const c0 = V.cizimler[id] || {};
    const k = S && S.cizimCesit && S.cizimCesit[id];
    // Eski kayıtlarda yalnız kıyafet yazılıdır. O günkü seçimi ve kayıtlı kıyafeti birlikte çöz.
    if (S && c0.cesitSec) {
      let giyili = k && k.startsWith(id + '_') ? k.slice(id.length + 1).replace(/_sakli$/, '') : null;
      if (id === 'an_gerdanlik_kenan' && (!giyili || giyili === 'sakli')) {
        const kararlar = (S.kararlar || {})[103] || [];
        giyili = ['nisan_yadigar', 'nisan_gosterisli', 'nisan_sade'].find(elbise =>
          kararlar.some(karar => karar.m === 'Giydiğin: ' + V.kiyafetler[elbise].ad));
      }
      const r = anResmi(id, giyili, k && k.endsWith('_sakli') ? 'sakli' : null);
      if (r) return Object.assign({}, c0, { gorsel: r.gorsel });
      if (id === 'an_gerdanlik_kenan') return Object.assign({}, c0, { gorsel: null });
    }
    const c = k && V.cizimler[k];
    const kendi = k && (k === id || k.indexOf(id + '_') === 0);
    // Yedekle açılmış an kendi resmine kavuştuysa artık yedeği değil kendi resmini göster
    if (c && c.gorsel && (kendi || !c0.gorsel)) return Object.assign({}, c0, { gorsel: c.gorsel, yakin: kendi ? null : ((AN_YEDEK[id] || {}).yakin || null) });
    if (c0.gorsel) return c0;
    const r = anResmi(id, null);
    return r ? Object.assign({}, c0, { gorsel: r.gorsel, yakin: r.yakin || null }) : c0;
  }
  function pilotSonu(b) {
    const cubuk = (id) => '<div class="ozet-satir"><span>' + V.karakterler[id].ad + '</span><span class="cubuk buyuk"><span style="width:' + gonulYuzde(id) + '%"></span></span></div>';
    // Koz: adı + kaynağı (kendim gördüm / biri söyledi / elimde); bu bölümde açılanlar ayrıca "açıldı" diye
    const kk = S.kozKaynak || {};
    const acilan = Object.keys(S.kozAcik || {}).filter((k) => S.kozAcik[k] === S.bolum);
    const kozlar = ((S.kozlar || []).length || acilan.length)
      ? '<ul class="karar-listesi koz-listesi">' + (S.kozlar || []).map((k) => '<li>' + bicimle(k) + (kk[k] ? ' <small>· ' + bicimle(kk[k]) + '</small>' : '') + '</li>').join('') +
        acilan.map((k) => '<li class="acildi">' + bicimle(k) + ' <small>· bu bölümde açıldı; artık sır değil</small></li>').join('') + '</ul>'
      : '<p class="not">Bu bölümde elinde koz kalmadı.</p>';
    // Resmi olmayan an ızgarada boş satır olarak görünmez (tumAnlar zaten süzer)
    const anHtml = (id) => {
      const c = cizimAl(id);
      return c.gorsel ? '<figure data-cizim="' + id + '">' + yakinImg(c) + '<figcaption>' + bicimle(c.ad) + '</figcaption></figure>' : '';
    };
    // Bölüm başı durumu: bu bölümde neyin değiştiğini bulmak için (GPT Tur 21, düzeltme 4 + ek 3)
    let bas = null;
    try { bas = S.basDurum ? kayitCoz(S.basDurum) : null; } catch (e) { bas = null; }
    const basKoz = (bas && bas.kozlar) || [], basKK = (bas && bas.kozKaynak) || {}, basCiz = (bas && bas.cizimler) || [];
    const tumAnlar = (S.cizimler || []).filter((id) => V.cizimler[id] && /^an_/.test(id) && cizimAl(id).gorsel);
    const buAnlar = bas ? tumAnlar.filter((id) => basCiz.indexOf(id) < 0) : tumAnlar;
    const eskiAnlar = tumAnlar.filter((id) => buAnlar.indexOf(id) < 0);
    const anlar = buAnlar.map(anHtml).join('');
    // Bu bölümde değişen en çok üç koz; öncelik: harcanan/açığa çıkan → kaynağı değişen → yeni kazanılan
    const simdi = S.kozlar || [];
    const degisen = [];
    const ekle = (k, durum) => { if (degisen.length < 3 && !degisen.some((x) => x.k === k)) degisen.push({ k, durum }); };
    acilan.forEach((k) => ekle(k, 'açığa çıktı; artık sır değil' + (kk[k] ? ' · ' + kk[k] : '')));
    if (bas) basKoz.filter((k) => simdi.indexOf(k) < 0).forEach((k) => ekle(k, 'harcandı; artık elimde değil'));
    if (bas) simdi.filter((k) => basKoz.indexOf(k) >= 0 && kk[k] && kk[k] !== basKK[k]).forEach((k) => ekle(k, kk[k]));
    simdi.filter((k) => !bas || basKoz.indexOf(k) < 0).slice().reverse().forEach((k) => ekle(k, 'yeni · ' + (kk[k] || 'elimde')));
    const degisenHtml = degisen.length
      ? '<ul class="karar-listesi koz-listesi degisen">' + degisen.map((x) => '<li><b>' + bicimle(x.k) + '</b> <small>· ' + bicimle(x.durum) + '</small></li>').join('') + '</ul>'
      : '';
    const kararlar = (S.kararlar && S.kararlar[S.bolum]) || [];
    const s = b.siradaki || {};
    const sonraki = BOLUMLER[S.bolum + 1];
    const devam = b.sezonSonu
      ? '<div class="sirada-satir"><p><b>Birinci sezonun sonu.</b>' + (b.sonAdi ? ' Senin sonun: <i>' + bicimle(String(b.sonAdi(S) || '')) + '</i>.' : '') +
        ' İkinci sezon Beyrut\'tan gelen bir adla açılacak.</p></div>'
      : (sonraki && sonraki.dogrusal)
      ? '<div class="sirada-satir"><p>Sıradaki bölüm: <i>' + sonraki.ad + '</i>. Deneme sürümünde bilet istenmiyor; yayında ilk bölümler ücretsiz olacak.</p><button class="dugme hedef" id="pilot-sonraki">Sıradaki bölüm ›</button></div>'
      : '<div class="sirada-satir"><p>Sıradaki bölüm: <i>' + (s.ad || '') + '</i>. Bir bilet ister; deneme sürümünde henüz yazılmadı.</p></div>';
    panelAc('ozet', '<div class="ozet-panel pilot-son"><h2>' + b.ad + ' · bölüm sonu</h2>' +
      '<div class="defter-sayfa"><div class="defter-baslik">Feride\'nin defterinden</div>' + defterParcala(b.sonNotu ? b.sonNotu(S) : '') + '</div>' +
      // Önce bu bölümün sonucu: değişen kozlar ve bu bölümde açılan an
      ((degisenHtml || anlar || (S.bolum === 116 && S.bayrak.p16_hayir === 'nikah')) ?
        '<div class="ozet-ikili">' +
        (degisenHtml ? '<div><h3>Bu bölümde değişenler</h3>' + degisenHtml + '</div>' : '') +
        (anlar ? '<div><h3>Açılan an</h3><div class="cizim-galeri">' + anlar + '</div></div>' : '') +
        (S.bolum === 116 && S.bayrak.p16_hayir === 'nikah' && !buAnlar.includes('an_hayir_nikah') ?
          '<div><h3>Defterimde kalan an</h3><p>' + bicimle(V.cizimler.an_hayir_nikah.ad) + '</p></div>' : '') +
        '</div>' : '') +
      // Kanca yola özel olabilir: { kanca: (S) => '...' }
      '<h3>Sırada</h3><p class="merak">' + (s.kanca ? bicimle(typeof s.kanca === 'function' ? s.kanca(S) : s.kanca) : '') + '</p>' +
      devam +
      '<h3>Onların gönlü</h3><p class="not kucuk">Adayların sana ilgisi; senin seçimin değil. Kime yaklaşacağına sen karar verirsin.</p>' + (b.adaylar || []).filter((id) => !gonulEsigi(id) || gonulGorunur(id)).map(cubuk).join('') +
      '<details class="kararlar arsiv" id="son-galeri"><summary>Çizim galerisi</summary><div class="galeri-icerik"></div></details>' +
      '<div class="sirada-satir"><button class="dugme" id="pilot-tekrar">Bu bölümü öbür yoldan oyna ›</button><button class="dugme" id="pilot-cik">Başlık ekranı</button></div>' +
      // Sezon arşivi katlanır: eski ödüller silinmez
      '<details class="kararlar arsiv"><summary>Tüm kozlarım (' + (S.kozlar || []).length + ')</summary>' + kozlar + '</details>' +
      (eskiAnlar.length ? '<details class="kararlar arsiv"><summary>Anılarım: önceki bölümlerin anları (' + eskiAnlar.length + ')</summary><div class="cizim-galeri">' + eskiAnlar.map(anHtml).join('') + '</div></details>' : '') +
      (kararlar.length ? '<details class="kararlar"><summary>Bu bölümde verdiğin ' + kararlar.length + ' karar</summary><ul class="karar-listesi">' +
        kararlar.map((k) => '<li>' + bicimle(k.m) + '</li>').join('') + '</ul></details>' : '') + '</div>');
    // Öbür yol: bu bölümün başındaki kayıttan (önceki bölümlerin kararları korunur)
    $('#pilot-tekrar').onclick = () => {
      panelKapat();
      const no = S.bolum; const bas = bolumBasi(no);
      gecmiseYolEkle(no);
      if (!bas) { pilotBaslat(true); return; }
      S = bas; S.biten = (S.biten || []).filter((x) => x !== 'acilis' + no); S.bolumBitti = false;
      bolumBaslat(no);
    };
    const sd = $('#pilot-sonraki');
    if (sd) sd.onclick = () => { panelKapat(); S.bolumBitti = false; bolumBaslat(S.bolum + 1); };
    $('#pilot-cik').onclick = () => { panelKapat(); baslikEkrani(); };
    const galeri = $('#son-galeri');
    galeri.ontoggle = () => {
      const icerik = galeri.querySelector('.galeri-icerik');
      if (galeri.open && !icerik.childElementCount) icerik.innerHTML = cizimlerHtml(b);
    };
  }
  // Bu oyunun bölüm başı: önce kaydın içindeki kopya, yoksa (eski kayıt) tarayıcıdaki
  function bolumBasi(no) {
    try {
      // basDurum her bolumBaslat'ta o bölüm için yeniden yazılır; şimdiki bölüme aittir
      if (S.basDurum) return kayitCoz(S.basDurum);
      return kayitCoz(localStorage.getItem(KAYIT_ANAHTARI + '_b' + no) || 'null');
    } catch (e) { return null; }
  }
  function pilotBaslat(bastan) {
    KAYIT_ANAHTARI = PILOT_KAYIT;
    const k = bastan ? null : yukle();
    $('#baslik-ekrani').hidden = true;
    if (k && BOLUMLER[k.bolum] && BOLUMLER[k.bolum].dogrusal && k.bolumBitti) { S = k; gorselleriOnYukle(); sahneyiCiz(); bolumSonu(); return; }
    if (k && BOLUMLER[k.bolum] && BOLUMLER[k.bolum].dogrusal && !k.bolumBitti && k.biten.includes('acilis' + k.bolum)) {
      S = k; gorselleriOnYukle(); SES.muzik(SES.ortam(S.bolum, S.faz)); sahneyiCiz(); girisOlaylari();
      return;
    }
    // Kayıt bir deneme bölümünün başında duruyorsa (önceki bölüm bitmiş, bu bölüm açılmamış) o bölümden başla
    if (k && BOLUMLER[k.bolum] && BOLUMLER[k.bolum].dogrusal && k.bolum !== PILOT_NO) { S = k; gorselleriOnYukle(); bolumBaslat(k.bolum); return; }
    S = yeniDurum();
    bolumBaslat(PILOT_NO);
  }

  async function bolumSonu() {
    S.bolumBitti = true;
    // Bölümün son sahnesi ve sezonun kendi kapanış parçası sürer. Başlık yalnız başlık ekranında çalar.
    kaydet();
    $('#diyalog').hidden = true;
    const b = bolum();
    if (b.dogrusal) { pilotSonu(b); return; }
    // Süha "Gönlün" altında gösterilmez: onun yakınlığı Feride'nin gönlü değil, kendi yorumudur
    const talipler = S.talipler.filter((t) => t !== 'suha').map((t) => '<div class="ozet-satir"><span>' + V.karakterler[t].ad + '</span><span>' + laleler(S.gonul[t]) + '</span></div>').join('');
    // Süha ayrı başlıkta, gönül sütununun dışında
    const yaklasan = S.gonul.suha > 0
      ? '<div class="yaklasanlar"><h3>Bana yaklaşanlar</h3><p class="not tekinsiz">Süha Bey bana olduğundan yakın davranıyor. Bundan hoşlanmıyorum.</p></div>' : '';
    const sonraki = BOLUMLER[S.bolum + 1];
    const BOLUM_ADLARI = { 2: 'Gerdanlık', 3: 'Topuk İzi', 4: 'Ada Gecesi', 5: 'İkinci Öksüzlük', 6: 'İki Engerek', 7: 'Kurşun Kalem' };
    const merak = b.merak ? '<p class="merak">' + bicimle(b.merak) + '</p>' : '';
    const siradaki = merak + (sonraki
      ? '<div class="sirada-satir"><p>' + sonraki.no + '. Bölüm: <i>' + sonraki.ad + '</i></p><button class="dugme" id="sonraki-bolum">Sonraki bölüm ›</button></div>'
      : (BOLUM_ADLARI[S.bolum + 1] ? '<p>' + (S.bolum + 1) + '. Bölüm: <i>' + BOLUM_ADLARI[S.bolum + 1] + '</i>. Bu prototipte henüz yok.</p>' : (b.sezonSonu ? '<p>1. sezon burada bitiyor. Kararların 2. sezona taşınacak.</p>' : '<p>Bu prototipte henüz yok.</p>')));
    const kararlar = (S.kararlar && S.kararlar[S.bolum]) || [];
    // Önce kapanış, ilişki ve devam vaadi; uzun karar günlüğü isteğe bağlı açılır ayrıntıda
    const kararHtml = kararlar.length
      ? '<details class="kararlar"><summary>Bu bölümde verdiğin ' + kararlar.length + ' karar</summary><ul class="karar-listesi">' +
        kararlar.map((k) => '<li>' + bicimle(k.m) + (k.iz ? '<span class="iz">' + bicimle(k.iz) + '</span>' : '') + '</li>').join('') + '</ul></details>'
      : '';
    // Rapor değil, Feride'nin defterinden bir sayfa: önce onun sesi, sayılar geri planda
    const sezon = !!b.sezonSonu && !sonraki;
    const sonAdi = sezon && b.sonAdi ? b.sonAdi(S) : '';
    const sayilar = '<div class="ozet-ikili"><div><h3>Gönlün</h3>' + talipler + '</div>' +
      '<div><h3>Hakkında söylenen</h3>' + hakkimdaHtml() + '</div></div>' + yaklasan;
    if (sezon) {
      panelAc('ozet', '<div class="ozet-panel sezon-sonu"><div class="sezon-ust">Birinci sezonun sonu</div><h2>' + (sonAdi || 'Sezon tamamlandı') + '</h2>' +
        '<div class="defter-sayfa"><div class="defter-baslik">Feride\'nin defterinden</div>' +
        '<p class="not">' + (b.sonNotu ? b.sonNotu(S) : '') + '</p></div>' +
        '<p class="sezon-devam">İkinci sezon bu sondan başlayacak; her sonun kendi yolu var. Kararların seninle gelecek.</p>' +
        '<details class="kararlar"><summary>Gönlün ve hakkında söylenenler</summary>' + sayilar + '</details>' + kararHtml + '</div>');
      return;
    }
    panelAc('ozet', '<div class="ozet-panel"><h2>' + b.no + '. Bölüm tamamlandı</h2>' +
      '<div class="defter-sayfa"><div class="defter-baslik">Feride\'nin defterinden</div>' +
      '<p class="not">' + (b.sonNotu ? b.sonNotu(S) : '') + '</p></div>' +
      '<div class="ozet-ikili"><div><h3>Gönlün</h3>' + talipler + '</div>' +
      '<div><h3>Hakkında söylenen</h3>' + hakkimdaHtml() + '</div></div>' + yaklasan +
      '<h3>Sırada</h3>' + siradaki +
      kararHtml + '</div>');
    const dugme = $('#sonraki-bolum');
    if (dugme) {
      dugme.onclick = () => {
        // Gönül, itibar, bayraklar, deliller, kıyafetler ve para korunur; görev, faz ve mekânı bolumBaslat sıfırlar
        S.bolumBitti = false;
        panelKapat();
        bolumBaslat(S.bolum + 1);
      };
    }
  }

  /* ------------------------------------------------------------------ */
  /* Defter, Gardrop, Harita, Menü                                       */
  /* ------------------------------------------------------------------ */
  const LALE = '<svg viewBox="0 0 20 24"><path d="M10 23 V13 M10 13 C4 13 3 7 4 2 C6 5 8 5 10 2 C12 5 14 5 16 2 C17 7 16 13 10 13 Z"/></svg>';
  function laleler(deger) {
    const dolu = Math.round(deger / 20);
    let h = '<span class="laleler">';
    for (let i = 0; i < 5; i++) h += '<span class="lale' + (i < dolu ? ' dolu' : '') + '">' + LALE + '</span>';
    return h + '</span>';
  }
  function gonulSozu(id, d) {
    // Madde 12: ölçülen adayın Feride'ye ilgisi; Feride'nin tercihi değil (o, verdiği kararlarda görünür)
    if (id === 'suha') {
      if (d < 10) return 'Bana ilgisi: dayı bakışı, ölçülü.';
      if (d < 40) return 'Bana ilgisi: sözleri kibar, niyeti belirsiz; fazla yakın duruyor.';
      return 'Bana ilgisi: peşimi bırakmıyor.';
    }
    if (d < 1) return 'Bana ilgisi: henüz yok.';
    if (d < 20) return 'Bana ilgisi: merak ediyor.';
    if (d < 40) return 'Bana ilgisi: gözü üstümde.';
    if (d < 60) return 'Bana ilgisi: yanımda olmak için bahane arıyor.';
    if (d < 80) return 'Bana ilgisi: gizlemiyor.';
    return 'Bana ilgisi: bütün gönlüyle.';
  }
  function itibarSozu() {
    const i = S.v.itibar;
    if (i >= 65) return 'Hanımlar edebimi, terbiyemi övüyor.';
    if (i >= 45) return S.v.dedikodu > 0 ? 'Adım henüz kötüye çıkmadı.' : 'Hakkımda pek bir şey denmiyor.';
    return 'Adım hoş olmayan sözlerle anılıyor.';
  }
  // Bölüm sonu "Hakkında söylenen": bu bölümde gösterilen söylenti varsa önce o; genel cümle onu inkâr etmez
  function hakkimdaHtml() {
    const soy = S.soylentiler && S.soylentiler[S.bolum];
    if (!soy) return '<p>' + itibarSozu() + ' ' + dedikoduSozu() + '</p>';
    const i = S.v.itibar;
    const ek = i >= 65 ? 'Hanımlar edebimi, terbiyemi övüyor.' : i >= 45 ? 'Şimdilik kötü bir söz değil.' : 'Söz kötüye dönmeye başladı.';
    return '<p class="soylenti"><i>' + bicimle(soy) + '</i> ' + ek + '</p>';
  }
  function dedikoduSozu() {
    const d = S.v.dedikodu;
    if (d <= 0) return 'Kimse benden söz etmiyor.';
    if (d <= 2) return 'Arada bir adım fısıldanıyor.';
    return 'Dillerdeyim.';
  }
  function suphe() {
    const c = S.v.calibe_suphe;
    // Ölçek 0–12; eşikler 4 ve 8 (oynanış T1 B6)
    if (c <= 0) return 'Perihan Hanım şimdilik benimle uğraşmıyor.';
    if (c < 4) return 'Perihan Hanım gözünü üstümden ayırmıyor.';
    if (c < 8) return 'Perihan Hanım bir şeylerden şüpheleniyor.';
    return 'Perihan Hanım bana karşı bir şey hazırlıyor.';
  }
  function babaSozu() {
    const b = S.v.baba_guven;
    if (b >= 60) return 'Babam bana güveniyor.';
    if (b >= 40) return 'Babam beni pek görmüyor.';
    return 'Babamın gözünde kırgınım.';
  }

  let defterSekmesi = 'gorevler';
  function defterHtml() {
    const b = bolum();
    // Doğrusal bölümde görev listesi yok: Görevler sekmesi düşer, defter Gelişmeler'le açılır
    const gorevVar = (b.gorevler || []).length > 0;
    if (!gorevVar && defterSekmesi === 'gorevler') defterSekmesi = 'gelismeler';
    const sekmeler = [['gorevler', 'Görevler'], ['gelismeler', 'Gelişmeler'], ['gonul', 'Gönül'], ['yakinlar', 'Yakınlarım'], ['hakkimda', 'Hakkımda'], ['notlar', 'Notlarım']]
      .filter((s) => gorevVar || s[0] !== 'gorevler');
    let h = '<h2>Feride\'nin Defteri</h2><div class="sekme-cubugu">' +
      sekmeler.map(([k, a]) => '<button class="sekme' + (k === defterSekmesi ? ' secili' : '') + '" data-sekme="' + k + '">' + a + '</button>').join('') + '</div>';
    if (defterSekmesi === 'gorevler') {
      h += '<ul class="gorev-listesi">';
      b.gorevler.forEach((g, i) => {
        if (i > S.gorev && !S.bolumBitti) return;
        const durum = (i < S.gorev || S.bolumBitti) ? 'bitti' : 'simdi';
        h += '<li class="' + durum + '">' + gMetin(g) + (durum === 'simdi' && g.ipucu ? '<span class="ipucu">' + g.ipucu + '</span>' : '') + '</li>';
      });
      h += '</ul>';
    } else if (defterSekmesi === 'gelismeler') {
      // Bildirimlerin hepsi burada yeniden okunabilir, en yenisi üstte
      const g = (S.gunluk || []).filter((x) => x.b === S.bolum).slice().reverse();
      h += g.length ? '<ul class="gelisme-listesi">' + g.map((x) => '<li>' + bicimle(x.m) +
        (x.ek ? x.ek.map((e) => '<span class="alt">' + bicimle(e) + '</span>').join('') : '') + '</li>').join('') + '</ul>'
        : '<p class="not">Bu bölümde henüz bir şey olmadı.</p>';
    } else if (defterSekmesi === 'gonul') {
      const gonulListe = S.talipler.filter((t) => t !== 'suha');
      for (const t of gonulListe) {
        const src = kisiGorseli(t);
        h += '<div class="talip"><div class="yuz">' + (src ? '<img src="' + src + '">' : V.karakterler[t].ad.charAt(0)) + '</div><div>' +
          '<div class="isim">' + V.karakterler[t].ad + '</div>' + laleler(gonulYuzde(t)) +
          '<div class="not">' + (S.notlar[t] || gonulSozu(t, gonulYuzde(t))) + '</div></div></div>';
      }
      if (gonulListe.length < 2) h += '<p class="not">Henüz tanımadığın kimseler de var.</p>';
      // Süha ayrı: çiçek ölçeği yok, onun tutumu olarak yazılır
      if (S.talipler.includes('suha')) {
        const src = kisiGorseli('suha');
        h += '<h3>Bana yaklaşanlar</h3><div class="talip tekinsiz"><div class="yuz">' + (src ? '<img src="' + src + '">' : 'S') + '</div><div>' +
          '<div class="isim">Süha Bey</div><div class="not">' + (S.notlar.suha || gonulSozu('suha', gonulYuzde('suha'))) + '</div></div></div>';
      }
    } else if (defterSekmesi === 'yakinlar') {
      const yakinlar = [
        ['munevver', ['Uzaklaştı.', 'Kapısı bana hâlâ açık.', 'Annemin yerini tutuyor.', 'Ona her şeyimi söyleyebilirim.']],
        ['fevkiye', ['Bana küs.', 'Arkadaşım.', 'Kardeşim gibi.', 'Sırrımı ona emanet ederim.']],
        ['mehves', ['Bana kırgın.', 'Bize sadık.', 'Arkamda duruyor.', 'Benim için her şeyi göze alır.']],
        ['josephine', ['Yabancı.', 'Kibar bir hanım.', 'Dostum oluyor.', 'Ona güvenebilirim.']],
      ];
      for (const [id, sozler] of yakinlar) {
        // Madam: eski biçimde gelişi bayrakla, yeni biçimde onunla kurulan bağla belli olur
        if (id === 'josephine' && !S.bayrak.josephine_geldi && !((S.bag || {}).josephine > 0)) continue;
        const d = (S.bag || {})[id] || 0;
        const soz = sozler[d <= 1 ? 0 : d <= 4 ? 1 : d <= 7 ? 2 : 3];
        const src = kisiGorseli(id);
        const k = V.karakterler[id] || { ad: id };
        h += '<div class="talip"><div class="yuz">' + (src ? '<img src="' + src + '">' : k.ad.charAt(0)) + '</div><div>' +
          '<div class="isim">' + k.ad + '</div><div class="not">' + soz + '</div></div></div>';
      }
      const s = S.v.sefik || 0;
      h += '<div class="talip"><div class="yuz">' + (kisiGorseli('sefik') ? '<img src="' + kisiGorseli('sefik') + '">' : 'Ş') + '</div><div><div class="isim">Şefik</div><div class="not">' +
        (s >= 3 ? 'Bana her zamankinden çok sokuluyor.' : s >= 1 ? 'Bana güveniyor.' : 'Onu bu evde ben korumazsam kim koruyacak?') + '</div></div></div>';
    } else if (defterSekmesi === 'hakkimda') {
      h += '<h3>Söylenti</h3><p>' + itibarSozu() + ' ' + dedikoduSozu() + '</p>' +
        '<h3>Konakta</h3><p>' + babaSozu() + ' ' + suphe() + '</p>' +
        '<h3>Şefik</h3><p>' + (S.v.sefik > 0 ? 'Şefik bana her zamankinden çok sokuluyor.' : 'Şefik\'i bu evde ben korumazsam kim koruyacak?') + '</p>';
    } else {
      h += S.deliller.length ? '<ul>' + S.deliller.map((d) => '<li>' + d + '</li>').join('') + '</ul>' : '<p class="not">Henüz yazacak bir şey yok.</p>';
    }
    return h;
  }

  function gardropHtml() {
    let h = '<h2>Gardrop</h2>';
    // Doğrusal bölümde Gardrop salt okunur (oynanış T1 A3): kıyafet sahnesinde seçilir; burada üzerindeki
    // (takısıyla) ve dolaptaki parçalar görünür
    const salt = dogrusalMi();
    if (salt) h += '<div class="kilit-notu">Kıyafetimi vakti gelince, sahnesinde seçerim. Burada üzerimdeki ve dolabımdakiler durur.</div>';
    else if (S.kiyafetKilit) h += '<div class="kilit-notu">' + S.kiyafetKilit + '</div>';
    h += '<div class="gardrop-izgara">';
    const liste = salt ? [S.giyili, ...S.kiyafetler.filter((id) => id !== S.giyili)] : S.kiyafetler;
    for (const id of liste) {
      const k = V.kiyafetler[id];
      if (!k) continue;
      const giyili = S.giyili === id;
      // Üzerindeki kıyafette takı varsa portre setinin takılı hâli
      const set = k.portre && V.karakterler[k.portre];
      const src = (salt && giyili && S.taki && set && set.gorsel && set.gorsel[S.taki]) || k.gorsel;
      h += '<div class="kiyafet' + (giyili ? ' giyili' : '') + '"><div class="resim">' + (src ? '<img src="' + src + '">' : 'Görsel yakında') + '</div>' +
        '<div class="ad">' + k.ad + '</div><div class="aciklama">' + k.aciklama + '</div>' +
        (salt
          ? (giyili ? '<div class="not">Üzerimde' + (S.taki && S.takiAd ? ' · boynumda ' + bicimle(S.takiAd.charAt(0).toLocaleLowerCase('tr') + S.takiAd.slice(1)) : '') + '</div>' : '<div class="not">Dolapta</div>')
          : (giyili ? '<div class="not">Üzerinde</div>' : '<button class="dugme" data-giy="' + id + '"' + ((S.kiyafetKilit || k.kilitli) ? ' disabled' : '') + '>Giy</button>')) + '</div>';
    }
    return h + '</div>';
  }

  function haritaHtml() {
    let h = '<h2>Harita</h2><p class="not">Bir yere gitmek bir takat harcar.</p><div class="harita-izgara">';
    for (const id of faz().mekanlar) {
      const m = V.mekanlar[id];
      const burada = id === S.mekan;
      const olay = (bolum().olaylar || []).some((o) => o.mekan === id && !S.biten.includes(o.id) && (!o.kosul || o.kosul(S)));
      h += '<div class="harita-yer' + (burada ? ' burada' : '') + '" data-git="' + id + '"><img src="' + m.arkaplan + '" onerror="this.remove()">' +
        (olay && !burada ? '<span class="rozet">!</span>' : '') + '<span>' + m.ad + '</span></div>';
    }
    return h + '</div>';
  }

  function menuHtml() {
    return '<h2>Menü</h2><div class="menu-dugmeleri">' +
      '<button class="dugme" data-menu="hiz">Metin hızı: ' + (HIZLAR.find((x) => x[0] === metinHizi) || HIZLAR[1])[1] + '</button>' +
      '<button class="dugme" data-menu="muzik">Müzik: ' + (SES.ayar.muzik === false ? 'kapalı' : 'açık') + '</button>' +
      '<button class="dugme" data-menu="sesefekt">Ses efektleri: ' + (SES.ayar.efekt === false ? 'kapalı' : 'açık') + '</button>' +
      '<button class="dugme" data-menu="gezinme">Serbest vakitte gezinme: ' + (S && S.ayar && S.ayar.eskiGezinme ? 'oda düğmeleri' : 'resimde yürüme') + '</button>' +
      '<button class="dugme" data-menu="kod">Kayıt kodunu göster (başka cihaza taşımak için)</button>' +
      '<button class="dugme" data-menu="kodyukle">Kayıt kodu yükle</button>' +
      '<button class="dugme" data-menu="bastan">Bölümü baştan başlat</button>' +
      '<button class="dugme" data-menu="baslik">Başlık ekranına dön</button>' +
      '</div>' + cizimlerHtml(S && S.bolumBitti ? bolum() : null) + '<div id="kod-alani"></div>';
  }
  function kilitliAnlarHtml(b) {
    // Kaçırılan anlar: bölüm verisindeki ipucuyla kilitli gösterilir (öbür yoldan oynamaya kanca)
    // Aynı anın sabah çeşidi (id + '_sabah') açıldıysa an kaçırılmış sayılmaz
    // Resmi olmadığı için atlanan an da (S.cizimAtlanan) oyuncu o anı yaşadığı için kaçırılmış sayılmaz
    // Tur 28b (kök 8): teması açıkça reddeden kıza o an "kaçırdığın an" diye gösterilmez; ret bir ceza değildir.
    // Bölüm verisi `anRet: { an_x: (S) => bool }` verirse oradan, yoksa bilinen ret bayraklarından okunur.
    const bf = S.bayrak || {};
    const AN_RET = Object.assign({
      an_limonluk: () => !!bf.p1_suha_sinir,
      an_araba: () => bf.p4_suha === 'ret',
      an_bedel: () => bf.p4_bedel === 'ret',
    }, b.anRet || {});
    const reddetti = (id) => { try { return !!(AN_RET[id] && AN_RET[id](S)); } catch (e) { return false; } };
    /* Tur 29 (GPT O5-2 / O7-2 / O8-3; ORTAK onayı): erişilebilirlik. Oynanan yolda hiç sunulmayan an "kaçırdığın" sayılmaz.
       Bölüm `anUygun: { an_x: (S) => bool }` verirse o geçerli; `anYol: true` ise an adının alt yazısındaki rota
       (" · Kenan" / " · Süha") oyuncunun p_rota'sıyla uyuşmayan an listelenmez. */
    const erisilir = (id) => {
      try {
        if (b.anUygun && b.anUygun[id]) return !!b.anUygun[id](S);
        if (b.anYol) {
          const alt = ((V.cizimler || {})[id] || {}).alt || '';
          if (/· Kenan$/.test(alt) && bf.p_rota !== 'mukaddem') return false;
          if (/· Süha$/.test(alt) && bf.p_rota !== 'suha') return false;
        }
      } catch (e) { /* koşul bozuksa an listelenir */ }
      return true;
    };
    return Object.keys(b.anIpuclari || {}).filter((id) => erisilir(id) && !reddetti(id) &&!(S.cizimler || []).some((c) => c === id || c === id + '_sabah' || (id === 'an_topuk' && /^an_topuk_bahce(?:_|$)/.test(c))) &&
      // Tur 28 (ortak istek B1–4 §2): resmi henüz olmayan dal türü (an_araba_josephine) atlandıysa temel an da yaşanmıştır
      !(S.cizimAtlanan || []).some((c) => c === id || c.indexOf(id + '_') === 0)).map((id) =>
      '<p class="kacan-an">🔒 <b>' + bicimle((V.cizimler[id] || {}).ad || 'Kilitli an') + '</b> — ' + bicimle(b.anIpuclari[id]) + '</p>').join('');
  }
  // Açılan ödül çizimleri galerisi
  function cizimlerHtml(tamamlananBolum) {
    const acik = (S && S.cizimler || []).filter((id) => V.cizimler && V.cizimler[id] && cizimAl(id).gorsel);
    const ipuclari = tamamlananBolum ? kilitliAnlarHtml(tamamlananBolum) : '';
    if (!acik.length && !ipuclari) return tamamlananBolum ? '<p class="not">Henüz çizim açılmadı.</p>' : '';
    return '<h3>Özel çizimlerin</h3><div class="cizim-galeri">' + acik.map((id) =>
      '<figure data-cizim="' + id + '">' + yakinImg(cizimAl(id)) + '<figcaption>' + bicimle(V.cizimler[id].ad) + '</figcaption></figure>').join('') + '</div>' + (ipuclari ? '<h3>Kilitli çizimler</h3>' + ipuclari : '');
  }

  // Tarayıcının confirm() penceresi her yerde çalışmadığı için oyunun kendi onay kutusu
  function onay(soru) {
    return new Promise((coz) => {
      panelAc('onay', '<h2>Emin misiniz?</h2><p>' + soru + '</p><div class="menu-dugmeleri" style="flex-direction:row;gap:2cqw">' +
        '<button class="dugme" id="onay-evet">Evet</button><button class="dugme" id="onay-hayir">Vazgeç</button></div>');
      $('#onay-evet').onclick = () => { panelKapat(); coz(true); };
      $('#onay-hayir').onclick = () => { panelKapat(); coz(false); };
    });
  }

  let acikPanel = null;
  function panelAc(tur, html) {
    acikPanel = tur;
    if (tur === 'harita') haritaKat = null; // harita her açılışta bulunulan katla açılır
    SES.efekt('panel');
    const icerik = $('#panel-icerik');
    icerik.innerHTML = html || (tur === 'defter' ? defterHtml() : tur === 'gardrop' ? gardropHtml() : tur === 'harita' ? (planDurum ? planHaritaHtml() : haritaHtml()) : tur === 'gecmis' ? gecmisHtml() : menuHtml());
    if (tur === 'gecmis') { const g = icerik.querySelector('.gecmis'); if (g) g.scrollTop = g.scrollHeight; }
    $('#panel').hidden = false;
    // Panel her açılışta en üstten başlasın (önceki kaydırma taşınmasın)
    if (tur !== 'gecmis') { icerik.scrollTop = 0; const ic = $('#panel-ic'); if (ic) ic.scrollTop = 0; }
  }
  function panelKapat() { $('#panel').hidden = true; acikPanel = null; }

  function panelTiklama(ev) {
    const t = ev.target.closest('[data-sekme],[data-giy],[data-git],[data-menu],[data-plansec],[data-plangit],[data-plankat],[data-planalan]');
    if (!t) return;
    if (t.dataset.planalan === 'geri') { haritaAyrintiKapat(); return; }
    if (t.dataset.plankat !== undefined) { haritaKatSec(t.dataset.plankat); return; }
    // Konak planı haritası: bir yere dokun → "Git" → en kısa yoldan yürü
    if (t.dataset.plansec) { haritaSec(t.dataset.plansec); return; }
    if (t.dataset.plangit) { const id = t.dataset.plangit; panelKapat(); if (planDurum && planDurum.coz) planDurum.coz({ tur: 'yol', id }); return; }
    if (t.dataset.sekme) { defterSekmesi = t.dataset.sekme; panelAc('defter'); return; }
    if (t.dataset.giy) { S.giyili = t.dataset.giy; kaydet(); panelAc('gardrop'); return; }
    if (t.dataset.git) { if (t.dataset.git !== S.mekan) { panelKapat(); git(t.dataset.git); } return; }
    const m = t.dataset.menu;
    if (m === 'hiz') {
      const i = HIZLAR.findIndex((x) => x[0] === metinHizi);
      metinHizi = HIZLAR[(i + 1) % HIZLAR.length][0];
      try { localStorage.setItem('muhadarat_hiz', String(metinHizi)); } catch (e) { /* yok */ }
      panelAc('menu');
    }
    if (m === 'muzik' || m === 'sesefekt') { SES.degistir(m === 'muzik' ? 'muzik' : 'efekt'); panelAc('menu'); }
    if (m === 'gezinme') { S.ayar = S.ayar || {}; S.ayar.eskiGezinme = !S.ayar.eskiGezinme; kaydet(); panelAc('menu'); }
    if (m === 'kod') { $('#kod-alani').innerHTML = '<p>Bu kodu kopyalayın:</p><textarea class="kayit-kodu" readonly>' + btoa(unescape(encodeURIComponent(JSON.stringify(S)))) + '</textarea>'; }
    if (m === 'kodyukle') {
      $('#kod-alani').innerHTML = '<p>Kodu yapıştırın:</p><textarea class="kayit-kodu" id="kod-gir"></textarea><button class="dugme" data-menu="kodonayla">Yükle</button>';
    }
    if (m === 'kodonayla') {
      let d = null;
      try { d = kayitCoz(decodeURIComponent(escape(atob($('#kod-gir').value.trim())))); } catch (e) { d = null; }
      if (!d || !BOLUMLER[d.bolum]) { bildir('Kod okunamadı.'); return; }
      // Kod hangi oyuna aitse onun kaydına yazılır ve doğrudan oradan sürer (Tur 20 C3):
      // deneme bölümü kodu başlık ekranındaki "Denemeye devam et" ile aynı kaydı kullanır.
      const pilot = !!BOLUMLER[d.bolum].dogrusal;
      KAYIT_ANAHTARI = pilot ? PILOT_KAYIT : ANA_KAYIT;
      S = d; kaydet(); panelKapat();
      const no = d.bolum;
      bildir('Kayıt yüklendi: ' + (BOLUMLER[no].baslik || (no + '. bölüm')).replace('Yeni ', '') + '.');
      if (pilot) pilotBaslat(false);
      else { $('#baslik-ekrani').hidden = false; $('#devam-et').hidden = false; $('#devam-et').click(); }
    }
    if (m === 'bastan') {
      onay('Bu bölüm baştan başlasın mı? Yalnız bu bölümdeki ilerlemeniz silinir; önceki bölümlerdeki kararlarınız kalır.').then((evet) => {
        if (evet) {
          const no = S.bolum; const bas = bolumBasi(no);
          gecmiseYolEkle(no);
          S = bas || yeniDurum(); S.biten = (S.biten || []).filter((x) => x !== 'acilis' + no); S.bolumBitti = false; S.taki = null; S.gorunumBekliyor = false;
          bolumBaslat(no);
        }
      });
    }
    if (m === 'baslik') { panelKapat(); baslikEkrani(); }
  }
  // Galeride bir çizime tıklayınca büyük göster
  document.addEventListener('click', (e) => {
    const f = e.target.closest && e.target.closest('[data-cizim]');
    if (!f || mesgul) return;
    const c = cizimAl(f.dataset.cizim);
    // Bölüm sonucundan açıldıysa kapanınca yine bölüm sonucuna dön (menüye değil)
    const sonuctan = !!f.closest('.pilot-son');
    panelKapat();
    cizimGoster(c, false).then(() => (sonuctan ? pilotSonu(bolum()) : panelAc('menu')));
  });

  /* ------------------------------------------------------------------ */
  /* Başlık ekranı ve başlatma                                           */
  /* ------------------------------------------------------------------ */
  function baslikEkrani() {
    KAYIT_ANAHTARI = ANA_KAYIT;
    document.body.classList.remove('dogrusal');
    $('#baslik-ekrani').hidden = false;
    // Deneme düğmeleri: kayıt varsa "devam et" + "baştan başlat", yoksa yalnız başlat
    const pd = $('#pilot-oyna'), pb = $('#pilot-bastan');
    if (pd && BOLUMLER[PILOT_NO]) {
      let k = null;
      try { k = kayitCoz(localStorage.getItem(PILOT_KAYIT) || 'null'); } catch (e) { k = null; }
      const b = k && BOLUMLER[k.bolum];
      pd.hidden = false;
      // Cemil (17 Kasım 2026): başlıkta yalnız yeni sezon; eski 7 bölümlük oyun (bolum1–7.js, arşiv) açılmaz
      pd.textContent = b && b.dogrusal ? 'Devam et (' + (b.baslik || '').replace('Yeni ', '') + ')' : 'Yeni oyun';
      if (pb) { pb.hidden = !(b && b.dogrusal); pb.textContent = 'Baştan başla'; }
    }
    SES.muzik('baslik');
    $('#yeni-oyun').hidden = true;
    $('#devam-et').hidden = true;
  }

  function baslat() {
    // Diyalog ilerletme
    // İlk tık yazılmakta olan satırı tamamlar, sonraki tık ilerletir. Tamamlayan tıktan sonraki
    // 350 ms içindeki tık (çift tık, titrek parmak) yutulur ki satır okunmadan geçilmesin.
    function diyalogIlerle() {
      if (!ilerle || Date.now() < tikKilidi) return;
      const f = ilerle; ilerle = null;
      if (f.tamamla) tikKilidi = Date.now() + 350; else SES.efekt('tik');
      f();
    }
    $('#diyalog').addEventListener('click', diyalogIlerle);
    document.addEventListener('keydown', (e) => {
      // Panel açıkken satır klavyeyle ilerlemez (Defter/Gardrop/Geçmiş sahne sürerken açılabilir)
      if ((e.key === ' ' || e.key === 'Enter') && !$('#diyalog').hidden && ilerle && !acikPanel) { e.preventDefault(); diyalogIlerle(); }
      if (e.key === 'Escape' && acikPanel) panelKapat();
    });
    document.querySelectorAll('#ust-cubuk .dugme[data-panel]').forEach((d) => d.addEventListener('click', () => {
      // Plan vaktinde (yürürken) Harita açılabilir; Geçmiş her zaman, doğrusal bölümde Defter ve Gardrop da;
      // öteki paneller sahne bitince
      const planHarita = d.dataset.panel === 'harita' && planDurum && planDurum.bekliyor;
      if (!mesgul || panelSerbest(d.dataset.panel) || planHarita) panelAc(d.dataset.panel);
    }));
    const atlaD = $('#atla-dugme');
    if (atlaD) atlaD.addEventListener('click', (e) => { e.stopPropagation(); atlaAyarla(!atlaModu); });
    $('#panel-kapat').addEventListener('click', panelKapat);
    $('#panel').addEventListener('click', (e) => { if (e.target.id === 'panel' && acikPanel !== 'ozet') panelKapat(); });
    $('#panel-icerik').addEventListener('click', panelTiklama);

    $('#yeni-oyun').addEventListener('click', async () => {
      if (yukle()) {
        $('#baslik-ekrani').hidden = true;
        const evet = await onay('Yeni oyun başlasın mı? Kayıtlı oyununuz silinir.');
        if (!evet) { baslikEkrani(); return; }
      }
      S = yeniDurum();
      $('#baslik-ekrani').hidden = true;
      bolumBaslat(1);
    });
    const pilotDugme = $('#pilot-oyna');
    if (pilotDugme) pilotDugme.addEventListener('click', () => pilotBaslat(false));
    const pilotBastan = $('#pilot-bastan');
    if (pilotBastan) pilotBastan.addEventListener('click', async () => {
      $('#baslik-ekrani').hidden = true;
      const evet = await onay('Oyun 1. bölümden yeniden başlasın mı? Kararların silinir; açılan resimler ve okunan satırlar kalır.');
      if (!evet) { baslikEkrani(); return; }
      try { Object.keys(localStorage).filter((k) => k.startsWith(PILOT_KAYIT)).forEach((k) => localStorage.removeItem(k)); } catch (e) { /* yok */ }
      pilotBaslat(true);
    });
    $('#devam-et').addEventListener('click', () => {
      S = yukle();
      if (!S) return;
      $('#baslik-ekrani').hidden = true;
      gorselleriOnYukle();
      SES.muzik(SES.ortam(S.bolum, S.faz));
      sahneyiCiz();
      if (S.bolumBitti) bolumSonu(); else if (!S.biten.includes('acilis' + S.bolum)) bolumBaslat(S.bolum); else girisOlaylari();
    });
    baslikEkrani();
  }

  document.addEventListener('DOMContentLoaded', baslat);
})();

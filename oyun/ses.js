/* Muhadarat — ses: müzik (ses/*.mp3) ve üretilen küçük efektler.
   Müzik sahneye göre seçilir: önce olayın kendi parçası, yoksa bölümün ortam parçası.
   Parçayı değiştirmek için: ses/ klasöründeki dosyayı aynı adla değiştirmek yeter. */
(function () {
  'use strict';
  // Parçalar ElevenLabs'te üretildi (notlar/ses_tasarimi.md). suha/perihan/ada/piyano yeni temalar.
  // Tur 27: 'hukum' (babanın hükmü; ses_t1 §8 istemi, üretim bekliyor) şimdiden kullanılabilir: dosyası gelene
  // kadar yedeği 'doruk' çalar; ikisi de tek seferlik.
  const PARCALAR = ['baslik', 'ev', 'gece', 'romantik', 'huzun', 'veda', 'vals', 'gerilim', 'doruk', 'suha', 'perihan', 'ada', 'piyano', 'hukum', 'final', 'vals_hazin',
    'vals_uzak', // Tur 30 (t30 B8 ses (b)): valsin uzaktan, bahçenin öbür ucundan duyulanı (araclar/ses_turet.py)
    'final_hayir']; // Tur 30 (SE16-2): bağımsız hayır sonlarının sezon kartı; tek piyano, majörle minör arasında askıda
  // Dosya henüz yoksa ya da açılamazsa yakın duygudaki parça çalar
  // Tur 28b: 'final' = sezon kartı (ElevenLabs "Unfinished Letter"; piyano + yaylı, açık uçlu, tek seferlik)
  const YEDEK_PARCA = { suha: 'gece', perihan: 'gerilim', ada: 'ev', piyano: 'romantik', hukum: 'doruk', final: 'veda', vals_hazin: 'vals', vals_uzak: 'vals', final_hayir: 'piyano' };
  // Parça başına ses ayarı (dosyalar farklı yükseklikte üretildi; hedef ortalama ≈ -18 dBFS)
  // (araclar/ses_isle.py düzeyleri -18 dBFS'e çekti; tepe sınırlaması yüzünden biraz kısık kalanlar)
  // vals_uzak dosyada -22 dBFS (vals -20,5) ve kazancı 1,0: özgün valsten ~3 dB kısık, bilerek
  const KAZANC = { gece: 1.2, suha: 1.25, gerilim: 1.3, vals: 1.2, veda: 1.1, doruk: 1.1, vals_uzak: 1.0, final_hayir: 1.4 }; // final_hayir dosyada -23 dBFS (tek piyano, tepe sınırlı)
  // Bölümün ortam müziği (serbest dolaşırken). Doğrusal bölümde ORTAM, { muzik: null }'dan sonraki ara sayfa
  // ve kanca demektir (ses_t1 5-1, 18 Kasım 2026 gecesi: 112–116 artık varsayılan 'ev'e düşmüyor).
  const ORTAM = { 1: 'ev', 2: 'ev', 3: 'ev', 4: 'ev', 5: 'huzun', 6: 'gerilim', 7: 'gerilim', 101: 'vals', 102: 'ev', 103: 'ev', 104: 'ev', 105: 'ev', 106: 'gerilim', 107: 'ada', 108: 'gece', 109: 'ada', 110: 'gerilim', 111: 'ev',
    112: 'perihan', // p12_diz ve p12_aksam null → "Aynı akşam · üst kat" (Perihan'ın gözünden) ve kanca
    113: 'gece',    // açılış: "cevabını sabaha kadar kurdu"
    114: 'gece',    // açılış: zarf "o gece" salonda; p14_mektup ve p14_hasta null → "Aynı gece", "sabaha karşı"
    115: 'gece',    // p15_uc_kapi null → "Feride'nin odası · gece" (açılış OLAY.acilis115 ile gündüz)
    116: 'perihan', // p16_sari_oda null → "Onun gözünden · Perihan Hanım"
  };
  // Olaya özel parça
  const OLAY = {
    b1_bahce_giris: 'vals', b1_fevkiye: 'vals', b1_kose: 'vals', b1_ara_sofa: 'vals', b1_reftar: 'vals', b1_gelin: 'vals',
    b1_sofra: 'gerilim', b1_piyano: 'romantik', b1_resim: 'huzun', b1_gece: 'gece',
    b2_fisilti: 'gerilim', b2_h_oda: 'gerilim', b2_sandik: 'romantik', b2_nisan: 'vals', b2_calibe: 'gerilim', b2_ilac: 'gerilim',
    b2_nabi: 'gerilim', b2_uyari: 'gece', b2_komsu: 'romantik',
    b3_salon: 'gerilim', b3_mektup: 'gece', b3_topuk: 'gerilim', b3_nabiz: 'gerilim', b3_gece: 'gece', b3_iz: 'gerilim', b3_sabah: 'doruk',
    b3_kapi: 'huzun', b3_anne: 'huzun', b3_fevkiye_oda: 'huzun', b3_sir: 'gerilim', b3_taslik_mehves: 'huzun',
    b4_camlik: 'romantik', b4_gece: 'gece', b4_balkon: 'gerilim', b4_gerdanlik: 'doruk', b4_yan_madam: 'gece', b4_yan_kutu: 'gerilim',
    b5_veda: 'veda', b5_nikah: 'gerilim', b5_yelpaze: 'gerilim', b5_suha: 'gerilim', b5_resim: 'veda', b5_kanca: 'gerilim', b5_nimet_uyari: 'gerilim',
    b6_kapi: 'doruk', b6_gece: 'gece', b6_dayi: 'huzun', b6_nimet: 'veda', b6_resim: 'huzun', b6_piyano: 'romantik', b6_anne_resmi: 'huzun',
    b6_asci: 'ev', b6_sefik_defter: 'ev', b6_mefharet: 'ev', b6_madam: 'ev',
    b7_mektup: 'doruk', b7_hasta: 'huzun', b7_veda: 'veda', b7_gorucu: 'romantik', b7_piyano: 'romantik', b7_karar: 'gece',
    b7_madam: 'ev', b7_mutfak: 'ev', b7_pencere: 'romantik', b7_resim: 'huzun',
    // Yeni temalar: suha (Süha'nın tehlikeli çekimi), perihan (soğuk entrika), ada (Büyükada gündüzü), piyano (salonda çalınan)
    // Tur 27: p1_calibe Perihan'ın hanımlar önündeki baskısı (vals değil); p4_sabah gündüz haberi (gece yolunun
    // suha teması pilot4 adımında), p4_kapi Remzi'nin senedi (Kenan/Süha temaları pilot4 dallarında), p4_araba Süha'yla
    // arabada bilek (tehlikeli ton; an_araba da piyano akoruyla açılır); p6_kahvalti sofrada Nabi'nin kovulması,
    // p6_cardak yalnız Süha yolunda (romantik değil); p7_aksam sofrayı Perihan yönetiyor.
    // Tur 28 (Claude B1): açılış anlatısı ve evdeki sabah düğün valsiyle değil ev temasıyla; vals düğün evinde başlar
    /* Tur 33 (t33 bölüm raporları, ses): olay açılışlarında gerilim/perihan/ev/suha yığını seyreldi.
       'sessiz' = olay müziksiz açılır (ses.muzik 'sessiz'i susturma sayar); sahne içi { muzik } adımı sonra girer.
       p1_reftar: çeşme başı müziksiz, gerilim gelin odasındaki koz anına kalır (t33_b01_04 B1 ses 1)
       p2_mefharet: Nazlı'nın muzip ispiyonu ev temasıyla; gerilim sofradaki kahve lafına kalır (B2 ses 1)
       p4_fevkiye: Leyla'nın evi aynı ev parçasıyla çalmaz, müziksiz (B4 ses 1)
       p9_munevver: misafir gelişi, gün ışığı: ada (t33_b09_12 B9 ses 1)
       p10_kapi: Kenan yolunda yaslı gece; suha teması yalnız tıklatmayla (pilot) girer (B10 ses 2)
       p12_kahve: sabah selamlığı müziksiz; suha Süha içeri girince (pilot) (B12 ses 1)
       acilis116: finalin açılışı başlık müziği değil, hüküm gününün gerilimi (t33_b13_16 B16 ses) */
    acilis101: 'ev', p1_ayna: 'ev', p1_calibe: 'perihan', p1_reftar: 'sessiz', p1_mukaddem: 'romantik', p1_suha: 'vals_uzak', p1_kanca: 'sessiz',
    p2_oda: 'ev', p2_sofra: 'perihan', p2_mefharet: 'ev', p2_piyano: 'ev' /* Tur 28: piyano çalınınca başlar (pilot2 adımı) */, p2_nimet: 'gece', p2_koridor: 'huzun' /* Tur 29 */,
    p3_sabah: 'ev', p3_josephine: 'ev', p3_aksam_muk: 'romantik', p3_aksam_suha: 'suha', p3_giyin: 'ev',
    p3_toren: 'vals', p3_sari: 'perihan', p3_remzi: 'ev', p3_gece: 'gece',
    p4_sabah: 'ev', p4_kahve: 'gerilim', p4_giyin: 'ev', p4_fevkiye: 'sessiz', p4_munevver: 'ev', // Tur 28 (B1–4 ortak istek)
    p4_kapi: 'ev', p4_araba: 'suha', p4_gece: 'gerilim',
    p5_sabah: 'ev', p5_giyin: 'ev', p5_cardak: 'ev', p5_remzi: 'ev', p5_aksam: 'perihan', p5_gece: 'gece',
    p6_gece: 'gerilim', p6_nabiz: 'sessiz', p6_uykusuz: 'gece', p6_kahvalti: 'perihan', p6_fevkiye: 'ev', p6_remzi: 'ev',
    p6_mabeyn: 'ev', p6_cardak: 'suha', p6_son: 'gece',
    // 7: açılış daha İstanbul'da (ada değil ev); Hatice'nin hıçkırıklı itirafı hüzün (ses_t1 5-2)
    acilis107: 'ev', p7_sabah: 'ev', p7_vapur: 'ada', p7_iskele: 'ada', p7_itiraf: 'huzun', p7_aksam: 'perihan', p7_gece: 'gece',
    p8_gece: 'gece', p8_camlik: 'romantik', p8_merdiven: 'gerilim', p8_sabah: 'ada', p8_bahce: 'gerilim',
    p9_hukum: 'gerilim', p9_plan: 'ada', p9_munevver: 'ada', p9_aksam: 'gerilim' /* Tur 29 */,
    p10_iskele: 'gerilim', p10_gece: 'gece', p10_kapi: 'gece',
    p11_gece_kapi: 'perihan', p11_sabah: 'gerilim' /* Tur 29 */, p11_iskele: 'ada', p11_konak: 'ev', p11_esik: 'gerilim', p11_sofra: 'perihan', p11_oda: 'gece',
    // 12–16 (ses_t1 5-2): her olay açık kayıtlı; sahne içi { muzik } adımları bunların üstüne biner.
    // Açılışlar da olaydır (id 'acilis' + no); 113 ve 114 açılışı ORTAM'dan 'gece'.
    acilis112: 'ev', p12_sofa: 'perihan', p12_kahve: 'sessiz', p12_diz: 'suha', p12_ikindi: 'ev', p12_aksam: 'perihan',
    p13_sabah: 'gerilim', p13_tasli: 'huzun', p13_madam: 'ev' /* Tur 29: kuşluk */, p13_ikindi: 'ev', p13_cevap: 'perihan', p13_kapi: 'gece',
    p14_mektup: 'perihan', p14_cikikci: 'gece', p14_hasta: 'huzun', p14_sabah: 'huzun',
    acilis115: 'ev', p15_sabah: 'ev', p15_gorucu: 'ev', p15_sofra: 'perihan', p15_uc_kapi: 'gerilim', p15_gece: 'perihan',
    acilis116: 'gerilim', p16_sabah: 'ev', p16_sari_oda: 'gerilim', p16_kenan: 'romantik', p16_bekle: 'veda', p16_ayrilik: 'veda',
    p16_suha: 'suha', p16_suha_oda: 'gerilim', p16_remzi_gece: 'huzun', p16_remzi_nikah: 'vals_hazin', /* Tur 28b: rızasız düğünün hüzünlü valsi */ p16_carsi: 'huzun',
  };
  // 1. bölümün ilk yarısı düğün evinde geçer
  const ortam = (bolumNo, faz) => (bolumNo === 1 && faz === 'A' ? 'vals' : (ORTAM[bolumNo] || 'ev'));
  const MUZIK_SES = 0.35, EFEKT_SES = 1.0, GECIS = 1.6;

  let ctx = null, muzikCikis = null, efektCikis = null;
  const calar = {}; // ad -> { el, kazanc }
  let simdiki = null, istenen = null;
  const ayar = { muzik: true, efekt: true };
  try { const a = JSON.parse(localStorage.getItem('muhadarat_ses') || 'null'); if (a) { ayar.muzik = a.muzik !== false; ayar.efekt = a.efekt !== false; } } catch (e) { /* yok */ }
  function ayarKaydet() { try { localStorage.setItem('muhadarat_ses', JSON.stringify(ayar)); } catch (e) { /* yok */ } }

  // iPhone: Safari Web Audio'yu sessiz düğmesiyle susturur; 'playback' oturumu sesi sessiz modda da çaldırır
  try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch (e) { /* desteklenmiyor */ }

  // Tarayıcılar sesi ancak ilk dokunuştan sonra açar
  function uyandir() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      try {
        ctx = new AC();
        muzikCikis = ctx.createGain(); muzikCikis.gain.value = MUZIK_SES; muzikCikis.connect(ctx.destination);
        efektCikis = ctx.createGain(); efektCikis.gain.value = EFEKT_SES; efektCikis.connect(ctx.destination);
      } catch (e) { ctx = null; return; }
    }
    if (ctx.state === 'suspended') ctx.resume().then(() => { muzik(istenen); mekanYenile(); onYukle(); }).catch(() => {});
    else { if (istenen !== simdiki) muzik(istenen); if (ortamIstenen !== ortamSimdiki) mekanYenile(); onYukle(); }
  }
  ['pointerdown', 'keydown', 'touchend'].forEach((o) => document.addEventListener(o, uyandir, { capture: true, passive: true }));
  document.addEventListener('visibilitychange', () => {
    const c = simdiki && calar[simdiki];
    if (!c) return;
    if (document.hidden) c.el.pause(); else if (ayar.muzik) c.el.play().catch(() => {});
  });

  // Tek seferlik parça (ses_t1 5-3): baştan çalar, dönmez; bitince sessizlik. Döngü dikişi ve yarıda kalıp
  // sonraki bölümde ortasından başlama olmaz. Bölüm sonunun 'baslik' isteği doruk bitene dek bekler.
  const TEK_SEFER = ['doruk', 'hukum', 'final', 'final_hayir'];
  let tekBitti = null; // biten tek seferlik parça: aynı istek (ör. uyandir) onu yeniden başlatmasın
  function calarAl(ad) {
    if (calar[ad]) return calar[ad];
    const el = new Audio('ses/' + ad + '.mp3');
    el.loop = !TEK_SEFER.includes(ad); el.preload = 'auto';
    el.addEventListener('ended', () => {
      if (simdiki !== ad) return;
      simdiki = null; tekBitti = ad;
      if (istenen && istenen !== ad) muzik(istenen); // bekleyen 'baslik'
    });
    // Dosya yoksa yedek parçanın dosyasına geç (aynı kanal, aynı geçiş)
    el.addEventListener('error', () => { const y = YEDEK_PARCA[ad]; if (y && !el.dataset.yedek) { el.dataset.yedek = y; el.src = 'ses/' + y + '.mp3'; if (simdiki === ad) el.play().catch(() => {}); } });
    let kazanc = null;
    try { const k = ctx.createMediaElementSource(el); kazanc = ctx.createGain(); kazanc.gain.value = 0; k.connect(kazanc); kazanc.connect(muzikCikis); }
    catch (e) { kazanc = null; el.volume = MUZIK_SES; }
    return (calar[ad] = { el, kazanc });
  }
  function kis(ad) {
    const c = calar[ad]; if (!c) return;
    if (c.kazanc) {
      const t = ctx.currentTime;
      c.kazanc.gain.cancelScheduledValues(t); c.kazanc.gain.setValueAtTime(c.kazanc.gain.value, t); c.kazanc.gain.linearRampToValueAtTime(0, t + GECIS);
      clearTimeout(c.durdur); c.durdur = setTimeout(() => { if (simdiki !== ad) c.el.pause(); }, GECIS * 1000 + 100);
    } else c.el.pause();
  }
  // { muzik: 'sessiz' } müziği bilinçli olarak susturur; { muzik: null } bölüm ortamına döner (motor). PARCALAR'da
  // olmayan başka ad da susturur (eski davranış), ama dramatik sessizlik için adı 'sessiz'dir (ses_t1 5-7).
  // yeniden (motor: sahne içi { muzik } adımı ya da yeni olayın başı): bitmiş tek seferlik parça açıkça yeniden
  // istenince baştan çalar (Tur 27: aynı olayda ikinci doruk adımı sessiz kalıyordu). uyandir()/ayar isteği bunu vermez.
  function muzik(ad, yeniden, hemen) {
    if (ad === 'sessiz' && hemen) {
      clearTimeout(gecisZamani); gecisZamani = null; istenen = null; simdiki = null; tekBitti = null;
      Object.values(calar).forEach(c => {
        clearTimeout(c.durdur);
        if (c.kazanc && ctx) { c.kazanc.gain.cancelScheduledValues(ctx.currentTime); c.kazanc.gain.setValueAtTime(0, ctx.currentTime); }
        c.el.pause();
      });
      return;
    }
    if (ad === 'sessiz') ad = null;
    if (ad && !PARCALAR.includes(ad)) ad = null;
    if (yeniden && ad && tekBitti === ad) tekBitti = null;
    // Doruk (ya da hüküm) çalarken bölüm sonu 'baslik' isterse parça sonuna dek çalar; bitince (ended) baslik gelir
    const tek = simdiki && TEK_SEFER.includes(simdiki) ? calar[simdiki] : null;
    if (ad === 'baslik' && tek && ctx && ctx.state === 'running' && !tek.el.paused && !tek.el.ended) { istenen = 'baslik'; clearTimeout(gecisZamani); gecisZamani = null; return; }
    if ((ad || null) !== istenen) tekBitti = null;
    istenen = ad || null;
    if (tekBitti && tekBitti === istenen) return; // bitmiş tek seferlik parça kendiliğinden yeniden başlamaz
    if (!ctx || ctx.state !== 'running') return; // ilk dokunuşta uyandir() yeniden dener
    /* Tur 31 (t31 B1–4 S6, ORTAK ses): aynı parça sürüyorsa hiçbir istek onu kesmez ya da baştan başlatmaz.
       Olay biterken motor bölüm ortamını ister, hemen ardından gelen olay yine aynı parçayı (perihan, gerilim, ev)
       isteyebilir; geçiş GECIS_BEKLE kadar bekletilir ve bu sürede çalan parçaya dönülürse hiç kısılmaz.
       Başka parçadan dönülen döngülü parça kaldığı yerden sürer (öğe duraklatılır, sarılmaz); yalnız tek seferlik
       parçalar (TEK_SEFER) baştan çalar. */
    clearTimeout(gecisZamani); gecisZamani = null;
    if ((ayar.muzik ? istenen : null) === simdiki) return;
    gecisZamani = setTimeout(gecisUygula, GECIS_BEKLE);
  }
  const GECIS_BEKLE = 250; // ms
  let gecisZamani = null;
  function gecisUygula() {
    gecisZamani = null;
    if (!ctx || ctx.state !== 'running') return;
    const hedef = ayar.muzik ? istenen : null;
    if (hedef === simdiki) return;
    // bölüm sonu 'baslik' isteği çalan tek seferlik parçayı kesmez (ended gelince baslik başlar)
    const tekC = simdiki && TEK_SEFER.includes(simdiki) ? calar[simdiki] : null;
    if (hedef === 'baslik' && tekC && !tekC.el.paused && !tekC.el.ended) return;
    if (simdiki) kis(simdiki);
    simdiki = hedef;
    if (!hedef) return;
    const c = calarAl(hedef);
    clearTimeout(c.durdur);
    if (TEK_SEFER.includes(hedef)) { try { c.el.currentTime = 0; } catch (e) { /* yok */ } }
    if (c.kazanc) {
      const t = ctx.currentTime;
      c.kazanc.gain.cancelScheduledValues(t); c.kazanc.gain.setValueAtTime(c.kazanc.gain.value, t); c.kazanc.gain.linearRampToValueAtTime(KAZANC[hedef] || 1, t + GECIS);
    }
    c.el.play().catch(() => {});
  }

  /* ---- Ortam sesi: mekâna göre çok kısık döngü (saat, cırcır, dalga, kalabalık) ---- */
  const ORTAM_SES = 0.16;
  let ortamCikis = null, ortamSimdiki = null;
  const ortamCalar = {};
  // isik (motor, isteğe bağlı): görünen fonun ışığı 'gece' | 'aksam' | 'gunduz' (gece süzgeci dahil). Gündüz
  // görünen yerde konak gecesi saati çalmaz; gece süzgeciyle gösterilen bahçe ve çamlık gece döngüsünü alır.
  function mekanOrtami(id, isik) {
    if (!id) return null;
    const gece = isik === 'gece' || isik === 'aksam';
    // Tur 28 (Claude B1 ses 2): arka bahçe köşesinde düğün kalabalığı sürmez; köşe sessiz, kendi nefesin duyulur
    if (id === 'dugun_kose') return null;
    if (/^dugun_|gelin_odasi/.test(id)) return 'o_dugun';
    if (/^carsi/.test(id)) return 'o_carsi'; // Tur 28: kapalı çarşı uğultusu, taşta adım, ipek hışırtısı
    if (id === 'araba_ici') return 'o_araba'; // Tur 28: kapalı arabada taşa teker ve nal (yalnız araba içi fonunda)
    if (id === 'vapur_guverte') return 'o_vapur'; // Tur 30 (t30 B7 ses 1): çark + dalga + uzak martı, alçak
    if (/iskele|vapur/.test(id)) return 'o_iskele';
    if (/camlik/.test(id)) return (/gece/.test(id) || isik === 'gece') ? 'o_camlik_gece' : null;
    if (/bahce_gece|cardak_gece/.test(id)) return 'o_bahce_gece';
    if (isik === 'gece' && /^(konak_bahce|cardak|limonluk|ada_bahce|ada_duvar)$/.test(id)) return 'o_bahce_gece';
    // Tur 30 (t30 B8 ses 2): Ada'da gündüz bahçe ve duvar dibi: martı, uzak vapur düdüğü, asmada rüzgâr
    if (!gece && /^(ada_bahce|ada_duvar)$/.test(id)) return 'o_ada_gunduz';
    if (/_gunduz/.test(id) || isik === 'gunduz') return null;
    // Tur 30 (t30 B7 ses 2): Büyükada köşkü gecesi konağın saatini değil denizi duyurur (7, 8, 9. bölüm)
    // (gece fonu kimlikleri de: ada_oda_gece, ada_mutfak_gece, ada_selamlik_gece)
    if (/^(ada_oda|ada_sofa|ada_misafir|ada_kapi_perihan|ada_selamlik|ada_mutfak)(_gece)?$/.test(id)) {
      if (isik !== undefined && !gece) return null;
      return 'o_ada_gece';
    }
    if (/^(fazila_oda|konak_sofa|buyuk_salon|calibe_oda|sari_oda|josephine_oda|suha_oda|mabeyn|taslik|yemek_salonu|ada_oda|ada_sofa$|ada_misafir|ada_kapi|selamlik_sofa$|selamlik_kapisi$|baba_oda|mutfak$|ada_selamlik$|ada_selamlik_gece)/.test(id)) {
      // Gündüz resimli oda (sarı oda, selamlık sofası, babamın odası) yalnız gece görünürken gece sesini alır
      if (isik !== undefined && !gece) return null;
      return 'o_konak_gece';
    }
    return null;
  }
  function ortamAl(ad) {
    if (ortamCalar[ad]) return ortamCalar[ad];
    const el = new Audio('ses/' + ad + '.mp3'); el.loop = true; el.preload = 'auto';
    let kazanc = null;
    try {
      if (!ortamCikis) { ortamCikis = ctx.createGain(); ortamCikis.gain.value = ORTAM_SES; ortamCikis.connect(ctx.destination); }
      const k = ctx.createMediaElementSource(el); kazanc = ctx.createGain(); kazanc.gain.value = 0; k.connect(kazanc); kazanc.connect(ortamCikis);
    } catch (e) { kazanc = null; el.volume = ORTAM_SES; }
    el.addEventListener('error', () => { el.dataset.yok = '1'; });
    return (ortamCalar[ad] = { el, kazanc });
  }
  let ortamIstenen = null, sonMekan = null, sonIsik;
  // Uyanınca ya da ayar değişince son mekân yeniden çözülür (eskiden döngü adı yeniden çözülüp konak gecesi düşüyordu)
  const mekanYenile = () => mekan(sonMekan, sonIsik);
  // Tur 30 (t30 ORTAK B1–4 §1): sahne içi ortam adımı (motor { ortam: null | 'o_araba' | 'mekan' }). Fonun kendi
  // ortamını ezer: null susturur (duran araba), ad o döngüyü çalar. Fon (ya da ışığı) değişince ya da
  // { ortam: 'mekan' } gelince kalkar; aynı fonun yeniden çizilmesi (uyandir, ayar) kaldırmaz.
  const ORTAM_ADLARI = ['o_konak_gece', 'o_bahce_gece', 'o_iskele', 'o_camlik_gece', 'o_dugun', 'o_carsi', 'o_araba', 'o_vapur', 'o_ada_gece', 'o_ada_gunduz'];
  let zorla, zorlaMekan, zorlaIsik; // zorla: undefined = yok
  function ortamZorla(ad) {
    if (ad === undefined || ad === 'mekan') zorla = undefined;
    else { zorla = ORTAM_ADLARI.includes(ad) ? ad : null; zorlaMekan = sonMekan; zorlaIsik = sonIsik; }
    mekan(sonMekan, sonIsik);
  }
  function mekan(id, isik) {
    if (zorla !== undefined && (id !== zorlaMekan || isik !== zorlaIsik)) zorla = undefined;
    sonMekan = id; sonIsik = isik;
    ortamIstenen = zorla !== undefined ? zorla : mekanOrtami(id, isik);
    if (!ctx || ctx.state !== 'running') return;
    const hedef = ayar.efekt ? ortamIstenen : null;
    if (hedef === ortamSimdiki) return;
    // Tur 28 (GPT B1 SE2): gecikmeli durdurma parça ADIYLA karşılaştırılır; 1,3 sn içinde aynı ortama dönülürse durmaz
    const eskiAd = ortamSimdiki, eski = eskiAd && ortamCalar[eskiAd];
    if (eski) { if (eski.kazanc) { const t = ctx.currentTime; eski.kazanc.gain.cancelScheduledValues(t); eski.kazanc.gain.setValueAtTime(eski.kazanc.gain.value, t); eski.kazanc.gain.linearRampToValueAtTime(0, t + 1.2); setTimeout(() => { if (ortamSimdiki !== eskiAd) eski.el.pause(); }, 1300); } else eski.el.pause(); }
    ortamSimdiki = hedef;
    if (!hedef) return;
    const c = ortamAl(hedef);
    if (c.el.dataset.yok) return;
    if (c.kazanc) { const t = ctx.currentTime; c.kazanc.gain.cancelScheduledValues(t); c.kazanc.gain.setValueAtTime(c.kazanc.gain.value, t); c.kazanc.gain.linearRampToValueAtTime(1, t + 1.2); }
    c.el.play().catch(() => {});
  }

  /* ---- Üretilen efektler ---- */
  function nota(frek, sure, tur, siddet, gecikme) {
    const t = ctx.currentTime + (gecikme || 0);
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = tur || 'sine'; o.frequency.setValueAtTime(frek, t);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(siddet, t + 0.008); g.gain.exponentialRampToValueAtTime(0.0001, t + sure);
    o.connect(g); g.connect(efektCikis); o.start(t); o.stop(t + sure + 0.05);
  }
  function hisirti(sure, frek, siddet, kayma, gecikme) {
    const t = ctx.currentTime + (gecikme || 0), n = Math.floor(ctx.sampleRate * sure);
    const tampon = ctx.createBuffer(1, n, ctx.sampleRate), d = tampon.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
    const k = ctx.createBufferSource(); k.buffer = tampon;
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 0.8; f.frequency.setValueAtTime(frek, t);
    if (kayma) f.frequency.exponentialRampToValueAtTime(kayma, t + sure);
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(siddet, t + sure * 0.25); g.gain.exponentialRampToValueAtTime(0.0001, t + sure);
    k.connect(f); f.connect(g); g.connect(efektCikis); k.start(t);
  }
  const EFEKT = {
    tik: () => nota(1250, 0.07, 'triangle', 0.3),                                   // satır ilerletme
    secim: () => { nota(660, 0.16, 'triangle', 0.22); nota(990, 0.22, 'triangle', 0.18, 0.07); }, // karar
    bildirim: () => { nota(1318, 0.7, 'sine', 0.16); nota(1976, 0.5, 'sine', 0.07, 0.02); },      // çıngırak
    kart: () => hisirti(0.3, 2400, 0.6, 5200),                                 // kâğıt
    gecis: () => hisirti(0.45, 500, 0.8, 180),                                    // oda değişimi (kumaş, adım)
    kapi: () => { nota(96, 0.22, 'sine', 0.32); hisirti(0.32, 900, 0.35, 260); },  // plan gezinmesi: kapı kanadı
    adim: () => { nota(88, 0.09, 'sine', 0.3); nota(80, 0.09, 'sine', 0.26, 0.17); nota(84, 0.09, 'sine', 0.22, 0.34); }, // merdiven
    // Tur 29 (GPT SE10-1): hafif parmak vuruşları — dosya (efekt_kapi_tikla / efekt_kapi_tik) gelene kadar üretilen yedek
    kapi_tik: () => { nota(210, 0.05, 'triangle', 0.22); nota(140, 0.07, 'sine', 0.18); },
    kapi_tikla: () => { [0, 0.3].forEach((g) => { nota(210, 0.05, 'triangle', 0.22, g); nota(140, 0.07, 'sine', 0.18, g); }); },
    // Tur 30 (t30 B6 ses 1): kişiye inen tek darbe (topuğun alna inişi). Kalın gövde vuruşu + kısa, boğuk çarpma;
    // dosya (efekt_darbe.mp3) gelene kadar üretilen yedek
    darbe: () => { nota(72, 0.16, 'sine', 0.55); nota(118, 0.06, 'triangle', 0.3); hisirti(0.09, 900, 0.5, 300); },
    /* Tur 31 (t31 B5–8 §0.6, ORTAK ses): tek dosyanın birçok fiziksel olaya çalması düzelsin diye ayrı adlar.
       Dosyaları (ses/efekt_<ad>.mp3) gelene kadar üretilen ses çalar; dosya gelince adı EFEKT_DOSYA'ya da ekleyin.
       Eşleme (pilot tarafı bölüm ajanlarında):
         tahta       → yalnız tahta/merdiven GICIRTISI
         tak         → sert yüzeye tek kuru vuruş: baston taşa, topuk pervaza/direğe (kişiye inen vuruş: darbe)
         surtunme    → takozun döşemede sürtünmesi, sandığın sürüklenmesi
         kapi_tik    → kapıya bir kez hafif vuruş;  kapi_tikla → iki kez, yavaşça;  kapi_vur → yalnız üç ağır darbe
         adim_cakil  → bahçe çakılında yürüyen adım (cakil = cama atılan çakıl)
         dokulme     → sıvı dökülmesi (sise = şişe/cam şıngırtısı, tıpa)
         kapak       → pirinç kapağın/menteşenin çevrilmesi, gıcırtısı (anahtar = kilitte anahtar) */
    tak: () => { nota(190, 0.05, 'triangle', 0.4); nota(95, 0.08, 'sine', 0.3); hisirti(0.05, 2600, 0.35, 1400); },
    surtunme: () => { hisirti(0.55, 420, 0.55, 950); hisirti(0.35, 1500, 0.18, 700, 0.12); },
    adim_cakil: () => [0, 0.42, 0.86].forEach((g, i) => { hisirti(0.16, 2900 - i * 200, 0.32, 1500, g); nota(70, 0.06, 'sine', 0.12, g); }),
    kapak: () => { hisirti(0.28, 1900, 0.22, 2800); nota(880, 0.18, 'triangle', 0.06, 0.03); nota(1320, 0.12, 'sine', 0.04, 0.1); },
    /* Tur 32 (t32 bölüm raporları, SES): aynı dosyanın zıt ya da farklı anlara çalması düzelsin diye yeni adlar.
       Dosyadan türeyenler (EFEKT_CESIT, aşağıda) var olan kaydın bir parçasını ya da başka çalınışını kullanır;
       dosya açılamazsa buradaki sentez çalar.
         kapi_vurus     → kapıya TEK, sert vuruş (kapi_vur dosyasının ilk darbesi; kapi_vur = üç ağır darbe)
         vapur_uzak     → aynı düdüğün uzaktan, boğuk ikinci duyuluşu (vapur dosyası, kısık ve süzgeçli)
         piyano_yanlis  → yanlış basılmış nota: piyano_tus yarım ses kayık ikizle (doğru icra: piyano_tus)
         kagit_kivrilma → elde yakılan kâğıdın çıtırtısı (yanma = bölüm sonu resminin yanışı)
         etek           → ipekli eteğin hışırtısı (gecis = arayüz oda geçişi, sahne sesi değil)
         sarsinti       → araba tekerinin çukura düşüşü, gövde sarsıntısı (teker_cakil = çakılda yuvarlanış)
         yay_alcak      → akorsuz tek alçak yaylı notası (tehlikeli doruk satırının altı boş kalmasın) */
    kapi_vurus: () => { nota(70, 0.2, 'sine', 0.6); nota(150, 0.06, 'triangle', 0.35); hisirti(0.1, 700, 0.55, 240); },
    vapur_uzak: () => { nota(146.8, 1.6, 'sawtooth', 0.04); nota(147.6, 1.6, 'sine', 0.08); },
    piyano_yanlis: () => { nota(523.3, 0.55, 'triangle', 0.16); nota(554.4, 0.4, 'triangle', 0.13, 0.02); nota(493.9, 0.3, 'triangle', 0.08, 0.32); },
    kagit_kivrilma: () => { hisirti(0.9, 2600, 0.12, 1800); for (let i = 0; i < 9; i++) hisirti(0.025, 3200 + Math.random() * 2600, 0.35 + Math.random() * 0.3, 0, 0.05 + Math.random() * 0.8); },
    etek: () => { hisirti(0.5, 3400, 0.22, 2200); hisirti(0.4, 5200, 0.1, 3600, 0.15); },
    sarsinti: () => { nota(55, 0.22, 'sine', 0.55); hisirti(0.18, 380, 0.45, 160); nota(92, 0.08, 'triangle', 0.22, 0.12); hisirti(0.12, 1300, 0.18, 900, 0.16); },
    yay_alcak: () => { [65.4, 65.9].forEach((f) => { const t = ctx.currentTime, o = ctx.createOscillator(), lp = ctx.createBiquadFilter(), g = ctx.createGain();
      o.type = 'sawtooth'; o.frequency.setValueAtTime(f, t); lp.type = 'lowpass'; lp.frequency.setValueAtTime(420, t);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.09, t + 0.6); g.gain.exponentialRampToValueAtTime(0.0001, t + 3.2);
      o.connect(lp); lp.connect(g); g.connect(efektCikis); o.start(t); o.stop(t + 3.3); }); },
    /* Tur 33 (t33 bölüm raporları, SES): yeni adlar. Dosyaları yok; üretilen ses (ya da EFEKT_CESIT'te var olan
       kayıttan türeyen çeşit) çalar. Dosya gelirse (ses/efekt_<ad>.mp3) adı EFEKT_DOSYA'ya ekleyin.
         kilit_tik     → gerdanlığın/madalyonun küçük mücevher kilidi: ince, kısa iki metal çıt
                         (anahtar = kapı kilidinde dönen demir anahtar; gerdanlıkta kullanılmaz)
         kalp          → Feride'nin kendi yüreği, içten ve boğuk (nabiz = birinin bileğinde sayılan nabız, dokunma ima eder)
         tespih        → tespih tanelerinin tıkırtısı (Nimet, Sait Efendi, dadı)
         teneke        → küçük teneke kutunun kapağı (menekşe şekeri kutusu)
         yelpaze_kapan → yelpazenin hışırtıyla kapanıp çıt diye kilitlenmesi (Perihan'ın sözü kesişi)
         mecidiye      → avuçta birkaç gümüş paranın şıngırtısı (Remzi'nin girişi)
         surgu_bos     → pimsiz kapıda sürgünün boşta kayması (surgu = yerine oturan sürgü) */
    kilit_tik: () => { nota(3400, 0.03, 'triangle', 0.12); nota(5100, 0.04, 'sine', 0.05, 0.004); hisirti(0.02, 6500, 0.22, 4200);
      nota(2900, 0.025, 'triangle', 0.08, 0.085); hisirti(0.015, 5800, 0.14, 3800, 0.085); },
    kalp: () => [0, 0.2, 0.9, 1.1].forEach((g, i) => nota(i % 2 ? 48 : 56, 0.14, 'sine', i % 2 ? 0.28 : 0.38, g)),
    tespih: () => { for (let i = 0; i < 6; i++) { const g = i * 0.12 + Math.random() * 0.04; nota(2300 + Math.random() * 700, 0.025, 'triangle', 0.07, g); hisirti(0.012, 4200, 0.1, 0, g); } },
    teneke: () => { nota(1760, 0.28, 'triangle', 0.07); nota(2640, 0.2, 'sine', 0.04, 0.006); hisirti(0.07, 3600, 0.28, 2100); },
    yelpaze_kapan: () => { hisirti(0.2, 2400, 0.32, 5600); nota(820, 0.03, 'triangle', 0.22, 0.19); hisirti(0.02, 3000, 0.3, 0, 0.19); },
    mecidiye: () => [0, 0.07, 0.15, 0.2].forEach((g, i) => { nota(3000 + i * 260, 0.32, 'sine', 0.06, g); nota(4300 + i * 190, 0.22, 'triangle', 0.035, g); }),
    surgu_bos: () => { hisirti(0.42, 1500, 0.3, 2600); nota(420, 0.05, 'triangle', 0.05, 0.38); },

    panel: () => hisirti(0.18, 3200, 0.4, 1800),                                // defter sayfası
    odul: () => [523, 659, 784, 1046, 1318].forEach((f, i) => nota(f, 0.9, 'sine', 0.16, i * 0.09)), // çizim, yeni görünüm
    gorev: () => { nota(784, 0.35, 'sine', 0.14); nota(1046, 0.5, 'sine', 0.14, 0.12); },
  };
  // Dosyadan efekt (ses/efekt_<ad>.mp3; ElevenLabs). Yoksa ya da yüklenmediyse üretilen ses çalar.
  const EFEKT_DOSYA = ['kapi', 'kapi_kapa', 'adim', 'surgu', 'anahtar', 'kagit', 'kalem', 'sise', 'fincan', 'vapur', 'fisek', 'kandil', 'titre', 'nabiz', 'piyano_tus', 'gecis', 'tik', 'secim', 'bildirim', 'odul', 'panel',
    'kapi_vur', // Tur 28: B13 taşlıkta üç ağır vuruş (tek temiz vuruştan 0,78 sn arayla kuruldu)
    'oksuruk', 'cakil', 'tahta', 'hokka', // Tur 28: kapı ardı öksürük, cama çakıl, tek tahta gıcırtısı, devrilen hokka
    'yanma', 'dusus', 'cingirak', // Tur 28b: B13 resmin yanışı, B14 Şefik sedire düşer, B15 görücü arabasının çıngırağı
    'kapi_tikla', 'kapi_tik', 'darbe', // Tur 29 (GPT SE10-1) / Tur 30 (t30 B6): darbe = kişiye inen tek vuruş
    // (efekt_darbe.mp3 Tur 30'da geldi; dosya açılamazsa EFEKT.darbe sentezi çalar)
    'hickirik', 'dokulme', 'yudum', // Tur 30 (t30 B7 ses (b), B5): Hatice'nin hıçkırığı, şişeden dökülen konyak, tek yudum
    'teker_cakil', 'nal', 'halka', // Tur 30 (t30 B1–4 S1–S3): çakılda teker ve nal, tek atın geri adımı, kilitli kapının demir halkası
    'fisek_uzak', // Tur 30 (t30 B8 ses (b)): uzak patlama + vadide yankı (araclar/ses_turet.py, efekt_fisek'ten)
  'uc_tik', 'uc_tik_alt']; // Tur 29 (GPT SE7-1/SE8-1): Feride'nin üç vuruşu / döşemenin altından boğuk üçlü cevap (araclar/ses_ritim.py)
  const EFEKT_TAKMA = { kart: 'kagit' };
  /* Tur 32: var olan kayıttan türeyen efektler (yeni dosya gerekmez). kaynak: EFEKT_DOSYA'daki kayıt; ilkDarbe: kaydın
     ilk sesli anından başlayıp 'sure' saniye çalınır (kapi_vur üç darbenin ilki); hiz: çalma hızı; suzgec: alçak
     geçiren süzgeç (Hz, uzaklık); ikiz: aynı kayıt bu hız oranıyla üst üste (yarım ses kayık = yanlış nota). */
  const EFEKT_CESIT = {
    kapi_vurus: { kaynak: 'kapi_vur', ilkDarbe: true, sure: 0.7, seviye: 1.0 },
    vapur_uzak: { kaynak: 'vapur', hiz: 0.96, suzgec: 650, seviye: 0.32 },
    piyano_yanlis: { kaynak: 'piyano_tus', ikiz: 1.0595, seviye: 0.4 },
    // Tur 33: içten duyulan yürek (nabız kaydının yavaş, boğuk ve kısık çalınışı); boşta kayan sürgü (daha hızlı, kısık)
    kalp: { kaynak: 'nabiz', hiz: 0.9, suzgec: 320, seviye: 0.55 },
    surgu_bos: { kaynak: 'surgu', hiz: 1.18, suzgec: 2400, sure: 0.6, seviye: 0.5 },
  };
  const EFEKT_SEVIYE = { tik: 0.5, secim: 0.55, bildirim: 0.6, gecis: 0.5, panel: 0.6, nabiz: 0.9, vapur: 0.7, fisek: 0.75, fisek_uzak: 0.5, piyano_tus: 0.45,
    hickirik: 0.6, teker_cakil: 0.7, nal: 0.7 }; // Tur 30: hıçkırık dosyası yüksek (-21 dBFS); teker/nal ortam üstünde yumuşak
  // An resmi (motor 'an'): karanlık müzik çalarken ödül arpı yerine yumuşak piyano akoru (ses_t1 5-4: yanan resim,
  // Şefik'e kalkan el, ayrılık, çarşı "ödül" sesiyle açılmasın)
  const KOYU = ['huzun', 'veda', 'gerilim', 'perihan', 'doruk', 'suha', 'hukum'];
  // Aynı efekt 0,8 sn içinde ikinci kez çalmaz (ses_t1 5-5: { efekt: 'kagit' } + kart = çift kâğıt); arayüz sesleri hariç
  const TEKRAR_SERBEST = ['tik', 'secim', 'bildirim', 'panel', 'gecis'];
  const sonCalan = {};
  const tampon = {}; // ad -> AudioBuffer | 'yok' | Promise
  function tamponAl(ad) {
    if (tampon[ad]) return tampon[ad];
    tampon[ad] = fetch('ses/efekt_' + ad + '.mp3').then((r) => (r.ok ? r.arrayBuffer() : Promise.reject(r.status)))
      .then((b) => new Promise((ok, red) => ctx.decodeAudioData(b, ok, red)))
      .then((buf) => (tampon[ad] = buf)).catch(() => (tampon[ad] = 'yok'));
    return tampon[ad];
  }
  function dosyaCal(ad, buf) {
    const k = ctx.createBufferSource(); k.buffer = buf;
    const g = ctx.createGain(); g.gain.value = EFEKT_SEVIYE[ad] || 0.8;
    k.connect(g); g.connect(efektCikis); k.start();
  }
  // Tur 32: türetilmiş efekt (EFEKT_CESIT) kaynak kaydın tamponundan çalınır
  function cesitCal(c, buf) {
    const t = ctx.currentTime;
    let bas = 0;
    if (c.ilkDarbe) { // ilk sesli örnek (baştaki sessizlik atlanır)
      const d = buf.getChannelData(0); let tepe = 0;
      for (let i = 0; i < d.length; i++) if (Math.abs(d[i]) > tepe) tepe = Math.abs(d[i]);
      const esik = tepe * 0.2;
      for (let i = 0; i < d.length; i++) if (Math.abs(d[i]) > esik) { bas = Math.max(0, i / buf.sampleRate - 0.01); break; }
    }
    const hizlar = c.ikiz ? [1, c.ikiz] : [c.hiz || 1];
    hizlar.forEach((hiz, n) => {
      const k = ctx.createBufferSource(); k.buffer = buf; k.playbackRate.value = hiz;
      const g = ctx.createGain(); const sv = (c.seviye || 0.8) * (n ? 0.8 : 1);
      g.gain.setValueAtTime(sv, t);
      if (c.suzgec) { const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = c.suzgec; k.connect(f); f.connect(g); } else k.connect(g);
      g.connect(efektCikis);
      if (c.sure) { g.gain.setValueAtTime(sv, t + c.sure - 0.08); g.gain.linearRampToValueAtTime(0.0001, t + c.sure); k.start(t, bas, c.sure + 0.02); }
      else k.start(t, bas);
    });
  }
  function efekt(ad) {
    if (!ayar.efekt || !ctx || ctx.state !== 'running') return;
    // Tur 27: bakılan istenen parçadır (müzik kapalıyken ya da tek seferlik doruk bitmişken de doğru ton); bilinçli
    // sessizlikte ({ muzik: 'sessiz' } → istenen null) parlak arp yerine piyano akoru. 'an_koyu': motor Süha anını
    // bildirir (çalan parça romantik/gece olsa bile ödül arpı çalmaz).
    // Tur 34 (GPT B1/B3/B13/B16 ses): bilinçli sessizlikte an resmi akor almaz; sessizlik gerçekten sessiz kalır
    if (istenen === null && ['tik', 'secim', 'bildirim', 'odul', 'gorev', 'kart'].includes(ad)) return;
    if ((ad === 'an' || ad === 'an_koyu') && istenen === null && !simdiki) return;
    if (ad === 'an_koyu') ad = 'piyano_tus';
    if (ad === 'an') ad = (istenen === null || KOYU.includes(istenen) || KOYU.includes(simdiki)) ? 'piyano_tus' : 'odul';
    const d = EFEKT_TAKMA[ad] || ad;
    if (!TEKRAR_SERBEST.includes(d)) {
      const simdi = ctx.currentTime;
      if (sonCalan[d] !== undefined && simdi - sonCalan[d] < 0.8) return;
      sonCalan[d] = simdi;
    }
    const c = EFEKT_CESIT[d];
    if (c) {
      const tc = tamponAl(c.kaynak);
      if (tc && tc !== 'yok' && !(tc instanceof Promise)) { try { cesitCal(c, tc); return; } catch (e) { /* üretilene düş */ } }
    }
    const t = !c && EFEKT_DOSYA.includes(d) ? tamponAl(d) : 'yok';
    if (t && t !== 'yok' && !(t instanceof Promise)) { try { dosyaCal(d, t); return; } catch (e) { /* üretilene düş */ } }
    if (!EFEKT[ad]) return;
    try { EFEKT[ad](); } catch (e) { /* ses çıkmadıysa oyun sürer */ }
  }
  // Ses açılınca efekt dosyalarını önceden çöz (ilk çalışta gecikme olmasın)
  function onYukle() { if (ctx) EFEKT_DOSYA.forEach(tamponAl); }

  window.SES = {
    muzik, efekt, uyandir, mekan, ortamZorla,
    olayMuzigi: (olayId, bolumNo, faz) => OLAY[olayId] || ortam(bolumNo, faz),
    ortam,
    ayar,
    durum: () => ({ ctx: ctx && ctx.state, simdiki, istenen, calan: Object.keys(calar).filter((k) => !calar[k].el.paused), sure: simdiki && calar[simdiki] ? calar[simdiki].el.currentTime : 0, hata: simdiki && calar[simdiki] && calar[simdiki].el.error ? calar[simdiki].el.error.code : null }),
    degistir(tur) { ayar[tur] = !ayar[tur]; ayarKaydet(); if (tur === 'muzik') muzik(istenen); else mekanYenile(); },
  };
})();

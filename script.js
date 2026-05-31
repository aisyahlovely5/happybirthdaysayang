const CONFIG = {

  nama: {
    aku:    "Namaku",       
    sayang: "Gantengku",      
  },

 
  tanggalJadian: new Date(2026, 2, 8),

  lokasi: {
    aku:  { name: "sumatra",   lat: -6.2088,  lng: 106.8456 },
    kamu: { name: "jawa",  lat: -7.2575,  lng: 112.7521 },
    
  },

  
  galeri: [
    { src: 'https://cdn.phototourl.com/free/2026-05-28-172b498f-fd63-44dc-9722-e715b21a5e48.jpg', caption: 'Foto ini mengingatkanku saat aku merasa menjadi orang paling beruntung.' },
    { src: 'https://cdn.phototourl.com/free/2026-05-28-d01a2fde-363b-4fdd-a6c3-5628a761d31b.jpg', caption: 'ini foto kamu kecilll comell.' },
    { src: 'https://cdn.phototourl.com/free/2026-05-28-69d12d86-da3e-470b-a139-7046962cd49a.jpg', caption: 'Momen ini terlalu indah untuk dilupakan.' },
    { src: 'https://cdn.phototourl.com/free/2026-05-28-977d1d6a-c238-44a7-bbb8-1a91d3d6b5c1.jpg', caption: 'Terima kasih sudah mau ada dalam hidupku.' },
    { src: 'https://cdn.phototourl.com/free/2026-05-29-51b1a851-6d8f-4538-ad0a-13a4ff7f4408.jpg', caption: 'Aku merindukanmu setiap hari,when ya seperti ini.' },
    { src: 'https://cdn.phototourl.com/free/2026-05-28-a0ec32db-33c4-402f-85e6-56a775959fde.jpg', caption: 'Jarak tidak pernah mampu memisahkan hati kita.' },
    { src: 'https://cdn.phototourl.com/member/2026-05-28-d92b4d15-6393-41f1-a9ff-b89f5fd8d1d2.jpg', caption: 'Ini adalah salah satu hari terbaik dalam hidupmu.' },
    { src: 'https://cdn.phototourl.com/member/2026-05-28-33609d71-212e-4f81-b84c-cb3a1a62d17d.jpg', caption: 'lvyou.' },
  ],

 
  timeline: [
    { date: 'Awal ',       emoji: '', title: 'Pertama Kali Kenal',      desc: 'Hari itu aku tidak menyangka akan bertemu seseorang yang mengubah hidupku dari mulai percakapan yang tiba tiba sefrekuensi.' },
    { date: 'Februari 2026',    emoji: '', title: 'Pertama Kali Chat',        desc: 'Pesan pertama yang kamu kirim membuatku tersenyum lebih lama dari biasanya.' },
    { date: 'Februari 2026',   emoji: '', title: 'Pertama Kali Telepon',     desc: 'Suaramu terdengar seperti melodi yang ingin aku dengar terus menerus.' },
    { date: '8 Februari 2026',    emoji: '', title: 'Hari Jadian',               desc: 'Hari paling indah  hari di mana kamu resmi menjadi milikku dan aku milikmu.' },
    { date: 'Hari Ini ',     emoji: '', title: 'Ulang Tahun Spesial',      desc: 'Merayakan hari lahirmu dengan penuh cinta, meski dari jauh.' },
  ],

  
  quiz: [
    { q: 'Apa warna favoritku?',             opts: ['Pink', 'Merah', 'Hitam', 'Biru'],          answer: 0 },
    { q: 'Makanan apa yang paling aku suka?', opts: ['Dinsum mentai', 'kebab', 'batagor', 'Bakso'],    answer: 0 },
    { q: 'Kapan hari jadian kita?',          opts: ['8 Februari ', '20 Maret', '10 Mei', '5 januari'],   answer: 0 },
    { q: 'Apa panggilan kesayanganku?',       opts: ['aisyah', 'Honey', 'sayang', 'Dear'],         answer: 0 },
    { q: 'Film genre apa yang aku suka?',     opts: ['Thriller', 'Komedi', 'Romansa', 'Action'],  answer: 0 },
    { q: 'Apa hewan peliharaan impianku?',    opts: ['Kucing', 'Anjing', 'Kelinci', 'Ikan'],      answer: 0 },
    { q: 'Jam berapa biasanya aku tidur?',   opts: ['00:00', '23:00', '22:00', '01:00'],          answer: 2 },
    { q: 'Apa minuman favoritku?',            opts: ['matcha', 'Teh', 'Jus', 'Coklat dingin'],       answer: 0 },
    { q: 'Apa hobby utamaku?',                opts: ['game', 'membaca', 'Memasak', 'Olahraga'], answer: 1 },
    { q: 'Bintang apa zodiac-ku?',            opts: ['virgo', 'leo', 'Scorpio', 'Cancer'],        answer: 0 },
  ],

}

const REASONS = [
  "Kamu selalu berusaha menjadi versi terbaik dari dirimu.",
  "Kamu membuat hari-hariku terasa lebih berwarna.",
  "Caramu tertawa membuatku ikut bahagia.",
  "Kamu tidak pernah membuatku merasa sendirian.",
  "Kamu menerima kekuranganku tanpa syarat.",
  "Perhatianmu terasa tulus dan hangat.",
  "Kamu adalah orang yang aku ceritakan tentang hari-hariku.",
  "Semangatmu menginspirasi aku setiap hari.",
  "Kamu selalu ada saat aku membutuhkan seseorang.",
  "Kata-katamu selalu menenangkan hatiku.",
  "Kamu berani dan kuat meski tidak selalu terlihat.",
  "Kamu jujur bahkan saat kebenaran itu sulit.",
  "Kamu peduli pada orang-orang di sekitarmu.",
  "Mata saat kamu bahagia adalah pemandangan terindah.",
  "Kamu tidak pernah berhenti berjuang untuk kita.",
  "Cara kamu menjelaskan hal rumit terasa sederhana.",
  "Kamu membuat jarak terasa tidak berarti.",
  "Pelukan virtualmu terasa hangat di hatiku.",
  "Kamu selalu ingat hal-hal kecil yang aku ceritakan.",
  "Kamu mau belajar dan berkembang bersama.",
  "Kesabaranmu luar biasa dalam menghadapi aku.",
  "Kamu tidak pernah meremehkan perasaanku.",
  "Mimpi-mimpimu membuatku ikut bermimpi bersamamu.",
  "Kamu membuat aku percaya pada cinta jarak jauh.",
  "Kamu setia dalam segala situasi.",
  "Caramu menyebutkan namaku terasa spesial.",
  "Kamu tahu kapan aku butuh didengar dan kapan butuh saran.",
  "Kepintaranmu membuatku kagum.",
  "Kamu punya selera humor yang membuatku tertawa.",
  "Kamu mau berkorban untuk kebahagiaan kita.",
  "Pesanmu di pagi hari selalu jadi penguat hariku.",
  "Kamu mau belajar hal baru bersamaku.",
  "Antusiasme kamu sangat menular.",
  "Kamu tidak pernah menyerah pada kita.",
  "Cara kamu bercerita membuatku betah mendengarkan.",
  "Kamu tahu cara membuatku merasa dicintai.",
  "Kamu membuatku menjadi versi yang lebih baik.",
  "Kepedulianmu pada hal-hal kecil membuatku terharu.",
  "Kamu percaya padaku saat aku tidak percaya pada diriku.",
  "Kamu adalah rumah yang aku rindukan setiap hari.",
  "Suaramu adalah suara yang paling aku nantikan.",
  "Kamu membuat aku merasa cukup dan dihargai.",
  "Cara kamu menghadapi masalah membuatku kagum.",
  "Kamu tidak pernah membandingkan aku dengan siapapun.",
  "Kamu selalu mau mendengarkan tanpa menghakimi.",
  "Senyummu adalah hal yang aku impikan setiap malam.",
  "Kamu membuatku percaya bahwa penantian ini sepadan.",
  "Cara kamu mencintai itu sangat tulus.",
  "Kamu mengajarkanku arti kesabaran sejati.",
  "Kamu hadir di waktu yang tepat dalam hidupku.",
  "Cara kamu memandang hidup membuatku optimis.",
  "Kamu tidak takut untuk vulnerable di hadapanku.",
  "Energimu selalu positif meski keadaan tidak mendukung.",
  "Kamu selalu mau minta maaf saat salah.",
  "Kamu menghargai usaha kecilku.",
  "Cara kamu merawat dirimu membuatku kagum.",
  "Kamu punya hati yang sangat baik.",
  "Kamu tidak pernah mempermalukan aku.",
  "Curiosity-mu tentang dunia sangat menginspirasi.",
  "Kamu membuat momen biasa terasa luar biasa.",
  "Kamu selalu bangga dengan aku secara tulus.",
  "Kamu mau menerima masukan tanpa defensif.",
  "Cara kamu bersyukur mengajarkanku banyak hal.",
  "Kamu percaya pada potensi yang aku miliki.",
  "Kamu tidak takut untuk mempertahankan kita.",
  "Kamu adalah teman terbaikku sebelum segalanya.",
  "Caramu menghadapi rindu membuatku terharu.",
  "Kamu selalu mencari cara untuk membuat aku tersenyum.",
  "Kamu tidak pernah membuat aku merasa tidak cukup.",
  "Kamu ada untuk aku di momen-momen paling gelap.",
  "Cara kamu tertawa dari dalam hati itu indah.",
  "Kamu membuat komunikasi jarak jauh terasa mudah.",
  "Kamu penuh kehangatan yang aku rindukan setiap saat.",
  "Kepribadianmu sangat unik dan menawan.",
  "Kamu selalu punya cara untuk membuatku tenang.",
  "Cara kamu menyayangi orang-orang di sekitarmu sangat indah.",
  "Kamu membuat aku ingin menjadi yang terbaik untukmu.",
  "Kamu adalah alasan aku melihat hari esok dengan harapan.",
  "Kamu tidak pernah menyepelekan perasaanku kadang gaapapa.",
  "Cara kamu menunjukkan cinta sangat tulus.",
  "Kamu membuat jarak ini terasa seperti petualangan.",
  "Kamu adalah orang yang pertama ingin aku kabarkan berita baik.",
  "Kamu selalu support apapun yang aku kejar.",
  "Kamu membuat aku yakin dengan pilihan hidupku.",
  "Cara kamu berterima kasih membuatku merasa dihargai.",
  "Kamu tidak pernah membuatku merasa terbebani.",
  "Caramu mengingat detail kecil tentang aku sangat spesial.",
  "Kamu membuatku percaya bahwa cinta sejati itu nyata.",
  "Kamu adalah orang yang membuat aku ingin pulang.",
  "Cara kamu menjaga hatimu sangat mengagumkan.",
  "Kamu selalu konsisten dengan kata-katamu.",
  "Kamu membuat aku merasa aman.",
  "Cara kamu mengatasi jarak mengajarkanku banyak tentang cinta.",
  "Kamu membuatku merasa paling beruntung di dunia.",
  "Kamu selalu menjaga kepercayaanku.",
  "Cara kamu mencintai membuatku percaya akan masa depan kita.",
  "Kamu adalah alasan terbaik mengapa aku percaya pada cinta.",
  "Aku mencintaimu karena... kamu adalah kamu dan itu sudah lebih dari cukup.",
];

const MEMORIES = [
  { icon: '', title: 'Pertama Kali Mengobrol', preview: 'Ingat pertama kali kita mengobrol?', full: 'Waktu itu aku tidak menyangka bahwa percakapan biasa itu akan menjadi awal dari sesuatu yang sangat indah. Kamu langsung membuat aku merasa nyaman dengan caramu berbicara  tulus, hangat, dan penuh perhatian.' },
  { icon: '', title: 'Tertawa Tanpa Alasan', preview: 'Ingat saat kita tertawa tanpa alasan?', full: 'Ada kalanya kita tertawa begitu kerasnya tanpa tau persis alasannya. Itu adalah tanda bahwa bersama kamu, aku bisa menjadi diriku sendiri sepenuhnya. Tanpa filter, tanpa kepura-puraan.' },
  { icon: '', title: 'Ngobrol Sampai Tengah Malam', preview: 'Ingat malam-malam panjang kita?', full: 'Kita pernah ngobrol begitu lama sampai tidak terasa jam sudah menunjukkan tengah malam. Dan tidak satupun dari kita yang mau mengakhiri percakapan duluan. Karena berbicara denganmu selalu terasa terlalu pendek.' },
  { icon: '', title: 'Saling Menguatkan', preview: 'Ingat saat kita saling menguatkan?', full: 'Saat aku hampir menyerah, kamu ada. Kata-katamu sederhana tapi entah bagaimana selalu tepat sasaran. Kamu tidak selalu punya solusi, tapi kehadiranmu sudah cukup untuk membuatku kembali bangkit.' },
  { icon: '', title: 'Rencana Masa Depan', preview: 'Ingat saat kita mulai bicara tentang masa depan?', full: 'Waktu kita pertama kali bicara tentang masa depan bersama  tentang bertemu, tentang mimpi yang ingin kita wujudkan berdua  aku merasakan sesuatu yang hangat di dada. Itu pertama kalinya aku yakin bahwa ini serius.' },
  { icon: '', title: 'Momen Sunyi', preview: 'Ingat saat kita hanya diam bersama?', full: 'Ada momen di mana kita tidak berbicara apa-apa tapi tetap terasa nyaman. Diam bersamamu tidak pernah canggung justru itu adalah tanda bahwa kita benar-benar nyaman satu sama lain.' },
  { icon: '', title: 'Pesan yang Aku Simpan', preview: 'Ada pesan-pesanmu yang selalu aku baca ulang', full: 'Ada beberapa pesanmu yang aku screenshot dan simpan. Bukan karena special occasion, tapi karena kata-katanya begitu tulus sampai aku ingin selalu mengingatnya di hari-hari yang berat.' },
];

const STAR_MESSAGES = [
  "Bintang ini bersinar untukmu. Selalu.",
  "Kamu adalah cahaya di langit malamku yang gelap.",
  "Aku melihat bintang ini dan langsung teringat padamu.",
  "Di bawah langit yang sama, kita saling merindukan.",
  "Bintang ini adalah saksi betapa aku mencintaimu.",
  "Setiap bintang yang kamu lihat, aku juga melihatnya.",
  "Jarak kita sejauh bintang, tapi hati kita berdekatan.",
  "Semoga bintang ini membawa pesanku kepadamu.",
  "Kamu lebih bersinar dari semua bintang di sini.",
  "Bintang ini untuk aku dan kamu  selamanya.",
  "Aku sering menatap langit dan memikirkanmu.",
  "Kalau bintang ini bisa berbicara, ia akan bilang: aku merindukanmu.",
  "Di antara jutaan bintang, hatiku hanya mencari kamu.",
  "Bintang ini adalah saksiku bahwa cintaku tidak pernah padam.",
  "Langit malam tidak pernah seindah ini sebelum aku mengenalmu.",
  "Kamu adalah konstilasiku  tanpamu, semua terasa berantakan.",
  "Aku ingin menghadiahkan seluruh langit ini untukmu.",
  "Setiap bintang yang jatuh, aku selalu meminta hal yang sama: dirimu.",
  "Bintang ini berkedip untukmu, seolah mengatakan: hei, seseorang di sana merindukanmu.",
  "Meski terpisah jarak, kita selalu di bawah langit yang sama.",
  "Bintang ini mewakili satu dari berjuta rasa cintaku.",
  "Saat aku tidak bisa memelukmu, aku memeluk langit malam ini.",
  "Kamu membuat langit terasa lebih dekat.",
  "Cintaku untukmu sebanyak bintang di langit ini.",
  "Bintang-bintang ini adalah saksi perjalanan cinta kita.",
  "Aku suka membayangkan kamu juga sedang menatap langit yang sama.",
  "Setiap bintang punya cerita, dan cerita favoritku adalah tentang kita.",
  "Kamu adalah bintang paling terang di seluruh galaksi hatiku.",
  "Langit ini terlalu indah untuk dinikmati sendiri tanpamu.",
  "Semoga malam ini membawamu kepadaku  setidaknya dalam mimpi.",
  "Bintang ini tidak sebanding keindahannya denganmu.",
  "Aku mengirimu satu bintang setiap malam. Sudah terlalu banyak yang aku kirim.",
  "Setiap kerlip bintang adalah pesan cinta yang tidak terucapkan.",
  "Kamu adalah alasan langit malam terasa begitu indah bagiku.",
  "Bintang ini untuk hari kamu yang melelahkan  semoga memberimu kekuatan.",
  "Di antara kegelapan, kamu selalu menjadi cahayaku.",
  "Bintang ini adalah doa kecilku agar kita segera bertemu.",
  "Langit malam tahu betapa aku merindukanmu.",
  "Kamu dan bintang-bintang ini  itulah yang membuatku tenang di malam hari.",
  "Setiap malam aku berdoa di bawah bintang-bintang ini untuk kebaikan dan kebahagiaanmu.",
  "Bintang ini berkedip dua kali  itu kode morse untuk 'aku merindukanmu'.",
  "Kamu adalah bintangku yang tidak pernah padam.",
  "Langit ini menjadi saksi bahwa cintaku untukmu tidak mengenal batas.",
  "Malam ini, bintang-bintang bermain untukmu.",
  "Setelah kamu, langit terasa lebih bermakna.",
  "Bintang ini ingin mengatakanmu: kamu dicintai, sangat.",
  "Cintaku sepanjang jalur Bima Sakti,peak,booyah tak berujung.",
  "Bintang ini menjaga kamu dari kejauhan.",
  "Aku tidak butuh peta bintang untuk menemukanmu  hatiku yang memandu.",
  "Bintang ini adalah pelukku dari jauh. Terimalah.",
];

const WISHES = [
  { icon: '', text: 'Semoga setiap langkahmu selalu diterangi cahaya dan keberuntungan.' },
  { icon: '', text: 'Semoga kamu selalu sehat, kuat, dan bersemangat menjalani hari.' },
  { icon: '', text: 'Semoga semua impian dan cita-citamu tercapai tahun ini.' },
  { icon: '', text: 'Semoga selalu ada alasan untuk tersenyum setiap hari.' },
  { icon: '', text: 'Semoga hatimu selalu dipenuhi kedamaian dan kebahagiaan.' },
  { icon: '', text: 'Semoga kita segera bisa bersama tanpa dipisahkan jarak.' },
  { icon: '', text: 'Semoga hubungan kita semakin kuat dan semakin indah.' },
  { icon: '', text: 'Semoga tahun ini menjadi tahun terbaikmu dalam karir dan kehidupan.' },
  { icon: '', text: 'Semoga setelah setiap badai, selalu ada pelangi yang indah untukmu.' },
  { icon: '', text: 'Semoga kamu selalu merasa dicintai dan tidak pernah kesepian.' },
  { icon: '', text: 'Semoga tidurmu selalu nyenyak dan mimpimu selalu indah.' },
  { icon: '', text: 'Semoga setiap usahamu membuahkan hasil yang memuaskan.' },
  { icon: '', text: 'Semoga rezekimu selalu lancar dan berkah.' },
  { icon: '', text: 'Semoga ketampanan dalam dirimu terus bersinar ke luar.' },
  { icon: '', text: 'Semoga cinta kita abadi  melewati waktu dan jarak.' },
];

const SURPRISE_CONTENTS = [
  { emoji: '', title: 'Surat Rahasia', text: 'Kamu adalah orang pertama yang terlintas di pikiranku setiap pagi dan yang terakhir sebelum aku tertidur. Kehadiranmu, meski dari jauh, membuatku merasa lengkap.' },
  { emoji: '', title: 'Bintang Untukmu', text: 'Aku telah menamakan sebuah bintang dengan namamu. Jadi setiap kali kamu melihat langit malam, tahu bahwa ada bintang yang selalu bersinar hanya untukmu.' },
];

const BOOK_PAGES = [
  {
    left:  { title: 'Kepada Kekasihku',    text: ['Hari ini adalah hari yang sangat spesial. Hari saat dunia mendapat hadiah terindahnya  lahirnya dirimu.', 'Aku ingin kamu tahu bahwa setiap hari bersamamu, meski dari jauh, adalah anugerah yang tak tergantikan.'], sig: ' ♡ ' },
    right: { title: 'Pertemuan Chat',      text: ['Hari itu mungkin biasa bagi dunia, tetapi luar biasa bagiku karena aku mengenalmu. Sepertinya semesta tahu bahwa kamu dan aku memang ditakdirkan untuk saling menemukan.', 'Dari percakapan pertama kita, aku merasakan sesuatu yang berbeda. Sesuatu yang hangat dan nyaman.'], sig: '' },
  },
  {
    left:  { title: 'Tentang Rindu',       text: ['Jarak ini mengajarkanku banyak hal. Ia mengajarkanku untuk menghargai setiap momen — setiap pesan, setiap panggilan, setiap foto yang kamu kirimkan.', 'Rindu itu nyata. Ia terasa berat di dada, namun setiap kali kamu hadir, beratnya hilang seketika.'], sig: ' ' },
    right: { title: 'Kekuatanku',          text: ['Kamu tidak pernah tahu seberapa besar pengaruhmu. Dalam hari-hari yang berat, wajahmu yang terlintas di pikiranku menjadi kekuatan untuk bangkit.', 'Senyummu yang selalu hadir meski hanya di layar ponselku  itu cukup untuk membuatku terus berjalan.'], sig: '' },
  },
  {
    left:  { title: 'Impian Kita',         text: ['Aku sering membayangkan hari di mana jarak ini tidak lagi ada. Saat aku bisa menyentuh tanganmu, bukan hanya layar. Saat aku bisa memelukmu langsung.', 'Hari itu pasti akan datang. Dan ketika itu terjadi, aku ingin kamu tahu  setiap penantian ini sepadan.'], sig: '  ' },
    right: { title: 'Janjiku',             text: ['Di hari ulang tahunmu ini, aku berjanji untuk terus hadir. Untuk terus mengirim pesan di pagi hari, untuk selalu ada ketika kamu butuh seseorang untuk diajak bicara.', 'Aku berjanji bahwa cintaku tidak akan berkurang karena jarak. Justru semakin dalam, semakin kuat.'], sig: '' },
  },
  {
    left:  { title: 'Terima Kasih',        text: ['Terima kasih karena selalu sabar. Karena mau memilihku setiap hari meskipun ada banyak hal yang tidak mudah dalam hubungan ini.', 'Terima kasih karena kamu tidak pernah menyerah. Itu adalah hadiah terbesar yang pernah aku terima.'], sig: ' forever yours ' },
    right: { title: 'Selamat Ulang Tahun', text: ['Di hari yang sangat spesial ini, aku ingin kamu merasakan betapa berartinya dirimu. Bukan hanya bagiku, tetapi bagi semua orang yang mengenalmu.', 'Selamat ulang tahun, Sayang. Semoga tahun ini membawa lebih banyak kebahagiaan, kesehatan, dan momen indah untuk kita.'], sig: '' },
  },
];


function qs(sel, ctx = document) { return ctx.querySelector(sel); }
function qsa(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }
function el(tag, cls, txt) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (txt !== undefined) e.textContent = txt;
  return e;
}



document.addEventListener('DOMContentLoaded', () => {
  const heroName = qs('#hero-name');
  if (heroName) heroName.textContent = CONFIG.nama.sayang;

  startLoadingScreen();
  buildGallery();
  buildBook();
  buildReasons();
  buildTimeline();
  buildMemoryWall();
  buildQuiz();
  buildSurpriseBox();
  buildWishes();
  initCountdown();
  initNav();
  initScrollReveal();
  initClosingObserver();
});



function startLoadingScreen() {
  const starsEl = qs('#loading-stars');
  for (let i = 0; i < 120; i++) {
    const s = el('div');
    s.style.cssText = `
      position:absolute;
      width:${Math.random()*2+1}px; height:${Math.random()*2+1}px;
      left:${Math.random()*100}%; top:${Math.random()*100}%;
      background:#fff; border-radius:50%; opacity:${Math.random()*0.5+0.1};
      animation: blink ${Math.random()*3+2}s ease-in-out infinite ${Math.random()*3}s;
    `;
    starsEl.appendChild(s);
  }

  const fullText = 'Untuk seseorang yang selalu ada di hatiku';
  const txtEl = qs('#typewriter-text');
  const cursorEl = qs('#cursor');
  const btnEl = qs('#btn-open-gift');

  let i = 0;
  const type = () => {
    if (i <= fullText.length) {
      txtEl.textContent = fullText.slice(0, i);
      i++;
      setTimeout(type, 60);
    } else {
      setTimeout(() => {
        cursorEl.style.animation = 'none';
        cursorEl.style.opacity = '0';
        btnEl.style.display = 'inline-flex';
      }, 600);
    }
  };
  setTimeout(type, 800);

  btnEl.addEventListener('click', () => {
    qs('#loading-screen').classList.add('fade-out');
    setTimeout(() => {
      qs('#loading-screen').style.display = 'none';
      showEnvelope();
    }, 800);
  });
}



function showEnvelope() {
  const screen = qs('#envelope-screen');
  screen.classList.add('active');
  const env = qs('#envelope');
  const hint = qs('#env-hint');

  env.addEventListener('click', () => {
    env.classList.add('open');
    hint.textContent = 'Membuka...';
    hint.style.opacity = '0.3';
    setTimeout(() => {
      screen.classList.add('fade-out');
      setTimeout(() => {
        screen.style.display = 'none';
        showMain();
      }, 800);
    }, 900);
  });
}

function showMain() {
  const main = qs('#main-content');
  main.style.display = 'block';
  main.style.opacity = '0';
  main.style.transition = 'opacity 1s ease';
  requestAnimationFrame(() => {
    main.style.opacity = '1';
  });
  initParticles();
  initStarrySky();
  initClosingStars();
  initMap();
  initSecretBtn();
  initGiftBox();
}



function initParticles() {
  const canvas = qs('#particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, pts = [];

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  new ResizeObserver(resize).observe(canvas);

  for (let i = 0; i < 80; i++) {
    pts.push({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5, a: Math.random(),
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,164,74,${p.a * 0.4})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  draw();
}



function initCountdown() {
  const start = CONFIG.tanggalJadian;
  function update() {
    const now = new Date();
    const diff = now - start;
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    qs('#cd-days').textContent = String(days).padStart(3, '0');
    qs('#cd-hours').textContent = String(hours).padStart(2, '0');
    qs('#cd-mins').textContent = String(mins).padStart(2, '0');
    qs('#cd-secs').textContent = String(secs).padStart(2, '0');
  }
  update();
  setInterval(update, 1000);
}



let lbIndex = 0;
let lbItems = [];

function buildGallery() {
  const grid = qs('#gallery-grid');
  if (!grid) return;

  lbItems = CONFIG.galeri.map((item, i) => ({
    src: item.src || null,
    caption: item.caption || '',
    index: i,
  }));

  lbItems.forEach((item, i) => {
    const div = el('div', 'gallery-item');
    if (item.src) {
      const img = document.createElement('img');
      img.src = item.src; img.alt = `Foto ${i + 1}`;
      img.loading = 'lazy';
      div.appendChild(img);
    } else {
      const ph = el('div', 'g-num');
      ph.innerHTML = `♡<br><small>Foto ${i + 1}</small>`;
      div.appendChild(ph);
    }
    const cap = el('div', 'gallery-caption-overlay', item.caption);
    div.appendChild(cap);
    div.addEventListener('click', () => openLightbox(i));
    grid.appendChild(div);
  });

  // Lightbox controls
  qs('#lb-close').addEventListener('click', closeLightbox);
  qs('#lb-prev').addEventListener('click', () => shiftLightbox(-1));
  qs('#lb-next').addEventListener('click', () => shiftLightbox(1));
  qs('#lightbox').addEventListener('click', e => { if (e.target === qs('#lightbox')) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (!qs('#lightbox').classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') shiftLightbox(-1);
    if (e.key === 'ArrowRight') shiftLightbox(1);
  });
}

function openLightbox(i) {
  lbIndex = i;
  const item = lbItems[i];
  const lb = qs('#lightbox');
  const img = qs('#lb-img');
  img.src = item.src || '';
  img.style.display = item.src ? 'block' : 'none';
  qs('#lb-caption').textContent = item.caption;
  lb.classList.add('open');
  lb.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  qs('#lightbox').classList.remove('open');
  qs('#lightbox').setAttribute('aria-hidden', 'true');
}

function shiftLightbox(dir) {
  lbIndex = (lbIndex + dir + lbItems.length) % lbItems.length;
  openLightbox(lbIndex);
}



let bookPage = 0;

function buildBook() {
  const book = qs('#book');
  if (!book) return;

  BOOK_PAGES.forEach((spread, i) => {
    const page = el('div', 'book-page' + (i === 0 ? ' active' : ''));
    page.dataset.page = i;
    page.innerHTML = `
      <div class="page-inner">
        <div class="page-content left-page">
          <div class="page-ornament"></div>
          <h3 class="page-title">${spread.left.title}</h3>
          ${spread.left.text.map(t => `<p class="page-text">${t}</p>`).join('')}
          <div class="page-ornament-bottom">${spread.left.sig}</div>
        </div>
        <div class="page-content right-page">
          <div class="page-ornament"></div>
          <h3 class="page-title">${spread.right.title}</h3>
          ${spread.right.text.map(t => `<p class="page-text">${t}</p>`).join('')}
          <div class="page-ornament-bottom">${spread.right.sig}</div>
        </div>
      </div>`;
    book.appendChild(page);
  });

  qs('#book-prev').addEventListener('click', () => flipBook(-1));
  qs('#book-next').addEventListener('click', () => flipBook(1));
  updateBookIndicator();
}

function flipBook(dir) {
  const pages = qsa('.book-page');
  const oldPage = pages[bookPage];
  bookPage = Math.max(0, Math.min(BOOK_PAGES.length - 1, bookPage + dir));
  const newPage = pages[bookPage];

  oldPage.classList.remove('active');
  oldPage.classList.add(dir > 0 ? 'exit-left' : 'exit-right');
  setTimeout(() => oldPage.classList.remove('exit-left', 'exit-right'), 500);

  newPage.classList.add('active');
  updateBookIndicator();
}

function updateBookIndicator() {
  qs('#book-indicator').textContent = `${bookPage + 1} / ${BOOK_PAGES.length}`;
}



function buildReasons() {
  const grid = qs('#reasons-grid');
  if (!grid) return;
  REASONS.forEach((reason, i) => {
    const card = el('div', 'reason-card');
    card.innerHTML = `
      <div class="reason-inner">
        <div class="reason-front">
          <span class="r-num">Alasan #${i + 1}</span>
          <span>♡</span>
        </div>
        <div class="reason-back">${reason}</div>
      </div>`;
    card.addEventListener('click', () => card.classList.toggle('flipped'));
    grid.appendChild(card);
  });
}



function buildTimeline() {
  const container = qs('#timeline-items');
  if (!container) return;

  CONFIG.timeline.forEach((item, i) => {
    const div = el('div', 'tl-item');
    div.innerHTML = `
      <div class="tl-dot-wrap"><div class="tl-dot"></div></div>
      <div class="tl-content">
        <div class="tl-emoji">${item.emoji}</div>
        <div class="tl-date">${item.date}</div>
        <div class="tl-title">${item.title}</div>
        <div class="tl-desc">${item.desc}</div>
      </div>`;
    container.appendChild(div);
  });

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.2 });
  qsa('.tl-item').forEach(el => obs.observe(el));
}



function initMap() {
  const canvas = qs('#map-canvas');
  if (!canvas) return;

  const { aku, kamu } = CONFIG.lokasi;
  qs('#loc-name-me').textContent = aku.name;
  qs('#loc-name-you').textContent = kamu.name;

  const R = 6371;
  const dLat = (kamu.lat - aku.lat) * Math.PI / 180;
  const dLng = (kamu.lng - aku.lng) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(aku.lat*Math.PI/180)*Math.cos(kamu.lat*Math.PI/180)*Math.sin(dLng/2)**2;
  const dist = Math.round(R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)));
  qs('#dist-value').textContent = dist.toLocaleString('id-ID');

  const W = 800, H = 360;
  canvas.width = W; canvas.height = H;
  canvas.style.width = '100%'; canvas.style.height = 'auto';
  const ctx = canvas.getContext('2d');

  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, '#0f0f0f'); bg.addColorStop(1, '#171717');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = 'rgba(255,111,174,0.07)'; ctx.lineWidth = 1;
  for (let x = 0; x <= W; x += 60) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
  for (let y = 0; y <= H; y += 60) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

  const lats = [aku.lat, kamu.lat], lngs = [aku.lng, kamu.lng];
  const pad = 80;
  const minLat = Math.min(...lats) - 2, maxLat = Math.max(...lats) + 2;
  const minLng = Math.min(...lngs) - 2, maxLng = Math.max(...lngs) + 2;
  const latRange = maxLat - minLat || 1, lngRange = maxLng - minLng || 1;

  function proj(lat, lng) {
    return {
      x: pad + ((lng - minLng) / lngRange) * (W - pad * 2),
      y: H - pad - ((lat - minLat) / latRange) * (H - pad * 2),
    };
  }

  const pA = proj(aku.lat, aku.lng);
  const pK = proj(kamu.lat, kamu.lng);

  const mid = { x: (pA.x + pK.x) / 2, y: Math.min(pA.y, pK.y) - 60 };
  ctx.setLineDash([8, 6]);
  ctx.strokeStyle = 'rgba(255,111,174,0.5)'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(pA.x, pA.y);
  ctx.quadraticCurveTo(mid.x, mid.y, pK.x, pK.y);
  ctx.stroke(); ctx.setLineDash([]);

  [[pA, aku.name, '#ff6fae'], [pK, kamu.name, '#ff8fc2']].forEach(([p, name, color]) => {
    const grd = ctx.createRadialGradient(p.x, p.y, 2, p.x, p.y, 25);
    grd.addColorStop(0, color + 'aa'); grd.addColorStop(1, 'transparent');
    ctx.beginPath(); ctx.arc(p.x, p.y, 25, 0, Math.PI*2); ctx.fillStyle = grd; ctx.fill();
    ctx.beginPath(); ctx.arc(p.x, p.y, 7, 0, Math.PI*2);
    ctx.fillStyle = color; ctx.fill();
    ctx.beginPath(); ctx.arc(p.x, p.y, 10, 0, Math.PI*2);
    ctx.strokeStyle = color + '66'; ctx.lineWidth = 2; ctx.stroke();
    ctx.font = '600 13px Montserrat, sans-serif'; ctx.fillStyle = '#ffeef5';
    ctx.fillText(name, p.x + 14, p.y + 4);
  });
}



function buildMemoryWall() {
  const grid = qs('#memory-grid');
  if (!grid) return;

  MEMORIES.forEach((mem, i) => {
    const note = el('div', 'memory-note');
    note.innerHTML = `
      <div class="note-icon">${mem.icon}</div>
      <div class="note-title">${mem.title}</div>
      <div class="note-preview">${mem.preview}</div>
      <div class="note-read">Baca selengkapnya →</div>`;
    note.addEventListener('click', () => openMemoryPopup(mem));
    grid.appendChild(note);
  });

  qs('#memory-close').addEventListener('click', closeMemoryPopup);
  qs('#memory-popup').addEventListener('click', e => { if (e.target === qs('#memory-popup')) closeMemoryPopup(); });
}

function openMemoryPopup(mem) {
  qs('#mp-icon').textContent = mem.icon;
  qs('#mp-title').textContent = mem.title;
  qs('#mp-text').textContent = mem.full;
  const popup = qs('#memory-popup');
  popup.classList.add('open');
  popup.setAttribute('aria-hidden', 'false');
}

function closeMemoryPopup() {
  const popup = qs('#memory-popup');
  popup.classList.remove('open');
  popup.setAttribute('aria-hidden', 'true');
}



let qIndex = 0, score = 0;

function buildQuiz() {
  showQuestion(0);
  qs('#quiz-retry').addEventListener('click', () => {
    qIndex = 0; score = 0;
    qs('#quiz-result').classList.remove('show');
    qs('#quiz-card').style.display = 'block';
    showQuestion(0);
  });
}

function showQuestion(i) {
  const q = CONFIG.quiz[i];
  qs('#quiz-counter').textContent = `Pertanyaan ${i + 1} dari ${CONFIG.quiz.length}`;
  qs('#quiz-question').textContent = q.q;
  qs('#quiz-bar').style.width = `${(i / CONFIG.quiz.length) * 100}%`;

  const opts = qs('#quiz-options');
  opts.innerHTML = '';
  q.opts.forEach((opt, j) => {
    const btn = el('button', 'quiz-opt', opt);
    btn.addEventListener('click', () => answerQuiz(j, q.answer));
    opts.appendChild(btn);
  });
}

function answerQuiz(chosen, correct) {
  const btns = qsa('.quiz-opt');
  btns[correct].classList.add('correct');
  if (chosen !== correct) btns[chosen].classList.add('wrong');
  else score++;
  btns.forEach(b => b.disabled = true);

  setTimeout(() => {
    qIndex++;
    if (qIndex < CONFIG.quiz.length) showQuestion(qIndex);
    else showQuizResult();
  }, 1000);
}

function showQuizResult() {
  qs('#quiz-card').style.display = 'none';
  const res = qs('#quiz-result');
  res.classList.add('show');
  qs('#result-score').textContent = score;
  const pct = score / CONFIG.quiz.length;
  const msg = pct >= 0.8
    ? '"Kamu benar-benar mengenalku lebih dari siapa pun. Aku merasa sangat dicintai."'
    : pct >= 0.5
    ? '"Kamu cukup mengenalku dengan baik! Tapi kita harus lebih banyak bercerita lagi."'
    : '"Kita harus membuat lebih banyak kenangan bersama — agar kamu makin mengenalku. 😊"';
  qs('#result-msg').textContent = msg;

  const circumference = 314;
  const offset = circumference - (pct * circumference);
  setTimeout(() => {
    qs('#result-fill').style.strokeDashoffset = offset;
  }, 100);
}



function buildSurpriseBox() {
  const cardsEl = qs('#surprise-cards');
  SURPRISE_CONTENTS.forEach((item, i) => {
    const card = el('div', 'surprise-card');
    card.style.animationDelay = `${i * 0.15}s`;
    card.innerHTML = `<p class="surprise-emoji">${item.emoji}</p><h3>${item.title}</h3><p>${item.text}</p>`;
    cardsEl.appendChild(card);
  });
}

function initGiftBox() {
  const wrap = qs('#gift-wrap');
  const lid = qs('#gift-lid');
  const hint = qs('#surprise-hint');
  const cards = qs('#surprise-cards');
  const sparkles = qs('#gift-sparkles');
  let opened = false;

  wrap.addEventListener('click', () => {
    if (opened) return;
    opened = true;
    lid.classList.add('open');

    const sparks = ['✦','★'];
    for (let i = 0; i < 10; i++) {
      const s = el('div', 'sparkle-star');
      s.textContent = sparks[Math.floor(Math.random() * sparks.length)];
      const tx = (Math.random() - 0.5) * 100;
      const ty = (Math.random() - 0.5) * 100;
      s.style.cssText = `left:50%;top:50%;--tx:${tx}px;--ty:${ty}px;animation-delay:${Math.random()*0.3}s`;
      sparkles.appendChild(s);
      setTimeout(() => s.remove(), 1200);
    }

    setTimeout(() => {
      hint.textContent = '';
      cards.style.display = 'flex';
    }, 700);
  });
}



function initSecretBtn() {
  qs('#btn-secret').addEventListener('click', () => {
    const popup = qs('#secret-popup');
    popup.classList.add('open');
    popup.setAttribute('aria-hidden', 'false');
  });
  qs('#secret-close').addEventListener('click', () => {
    const popup = qs('#secret-popup');
    popup.classList.remove('open');
    popup.setAttribute('aria-hidden', 'true');
  });
  qs('#secret-popup').addEventListener('click', e => {
    if (e.target === qs('#secret-popup')) {
      qs('#secret-popup').classList.remove('open');
    }
  });
}



function initStarrySky() {
  const canvas = qs('#stars-canvas');
  const section = qs('#starry-sky');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, stars = [];

  function resize() {
    W = canvas.width = section.offsetWidth;
    H = canvas.height = section.offsetHeight;
    stars = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 2 + 0.5,
        a: Math.random() * 0.7 + 0.3,
        vx: (Math.random() - 0.5) * 0.1, vy: (Math.random() - 0.5) * 0.1,
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
      });
    }
  }
  resize();
  new ResizeObserver(resize).observe(section);

  const msgEl = qs('#star-msg');
  let msgTimer;

  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    let closest = null, minD = 30;
    for (const s of stars) {
      const d = Math.hypot(s.x - mx * (W / rect.width), s.y - my * (H / rect.height));
      if (d < minD) { minD = d; closest = s; }
    }

    const msg = STAR_MESSAGES[Math.floor(Math.random() * STAR_MESSAGES.length)];
    msgEl.textContent = msg;
    msgEl.style.left = `${e.clientX - 140}px`;
    msgEl.style.top = `${e.clientY - 90}px`;
    msgEl.classList.add('show');
    clearTimeout(msgTimer);
    msgTimer = setTimeout(() => msgEl.classList.remove('show'), 3500);
  });

  function draw() {
    ctx.clearRect(0, 0, W, H);
    // Dark background
    ctx.fillStyle = '#060910';
    ctx.fillRect(0, 0, W, H);
    // Nebula glow
    const grd = ctx.createRadialGradient(W/2, H/2, 0, W/2, H/2, W/2);
    grd.addColorStop(0, 'rgba(25,30,60,0.4)');
    grd.addColorStop(1, 'transparent');
    ctx.fillStyle = grd; ctx.fillRect(0, 0, W, H);

    for (const s of stars) {
      s.x += s.vx; s.y += s.vy;
      s.twinkle += s.twinkleSpeed;
      if (s.x < 0) s.x = W; if (s.x > W) s.x = 0;
      if (s.y < 0) s.y = H; if (s.y > H) s.y = 0;
      const a = s.a * (0.5 + 0.5 * Math.sin(s.twinkle));
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,240,${a})`; ctx.fill();
      // Gold stars occasionally
      if (s.r > 2) {
        const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 8);
        glow.addColorStop(0, `rgba(200,164,74,${a*0.3})`);
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.beginPath(); ctx.arc(s.x, s.y, 8, 0, Math.PI*2); ctx.fill();
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}



function initClosingStars() {
  const canvas = qs('#closing-stars');
  const section = qs('#closing');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, stars = [];

  function resize() {
    W = canvas.width = section.offsetWidth;
    H = canvas.height = section.offsetHeight;
    stars = Array.from({length: 150}, () => ({
      x: Math.random()*W, y: Math.random()*H,
      r: Math.random()*1.5+0.3,
      a: Math.random()*0.5+0.2,
      t: Math.random()*Math.PI*2, ts: Math.random()*0.015+0.005,
    }));
  }
  resize();
  new ResizeObserver(resize).observe(section);

  function draw() {
    ctx.clearRect(0,0,W,H);
    for (const s of stars) {
      s.t += s.ts;
      const a = s.a*(0.5+0.5*Math.sin(s.t));
      ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(255,255,240,${a})`; ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  draw();
}



function buildWishes() {
  const grid = qs('#wishes-grid');
  if (!grid) return;
  WISHES.forEach((wish, i) => {
    const card = el('div', 'wish-card');
    card.innerHTML = `<div class="wish-icon">${wish.icon}</div><p class="wish-text">${wish.text}</p>`;
    card.style.transitionDelay = `${i * 0.05}s`;
    grid.appendChild(card);
  });

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  qsa('.wish-card').forEach(c => obs.observe(c));
}



function initClosingObserver() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => qs('#cl-1')?.classList.add('show'), 0);
        setTimeout(() => qs('#cl-2')?.classList.add('show'), 500);
        setTimeout(() => qs('#cl-3')?.classList.add('show'), 1000);
        setTimeout(() => qs('#btn-hug')?.classList.add('show'), 1500);
        setTimeout(() => qs('#closing-final')?.classList.add('show'), 2200);
        obs.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const closing = qs('#closing');
  if (closing) obs.observe(closing);

  qs('#btn-hug')?.addEventListener('click', triggerHug);
}

function triggerHug() {
  const btn = qs('#btn-hug');
  btn.classList.add('clicked');
  setTimeout(() => btn.classList.remove('clicked'), 500);

  launchConfetti();

  for (let i = 0; i < 20; i++) {
    setTimeout(() => spawnHeart(), i * 100);
  }
}

function spawnHeart() {
  const h = el('div', 'float-heart');
  h.textContent = ['♡','❤','💛','✨'][Math.floor(Math.random()*4)];
  h.style.left = Math.random() * 100 + 'vw';
  h.style.bottom = '10vh';
  h.style.fontSize = (Math.random()*1.5+0.8) + 'rem';
  h.style.animationDuration = (Math.random()*2+2) + 's';
  h.style.animationDelay = Math.random()*0.5 + 's';
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 4000);
}

function launchConfetti() {
  const canvas = qs('#confetti-canvas');
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  const pieces = [];
  const colors = ['#c8a44a','#e2bc68','#f0d494','#ffffff','#ffd700','#ff9999'];

  for (let i = 0; i < 150; i++) {
    pieces.push({
      x: Math.random() * canvas.width, y: -20,
      w: Math.random() * 10 + 5, h: Math.random() * 5 + 3,
      color: colors[Math.floor(Math.random()*colors.length)],
      vx: (Math.random()-0.5)*5, vy: Math.random()*4+2,
      rot: Math.random()*360, rotV: (Math.random()-0.5)*8,
      life: 1,
    });
  }

  let frame;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.rot += p.rotV;
      if (p.y > canvas.height) { p.y = -20; p.life -= 0.05; }
      if (p.life <= 0) return;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI/180);
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
      ctx.restore();
    });
    if (pieces.some(p => p.life > 0)) frame = requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); }
  }
  draw();
  setTimeout(() => { cancelAnimationFrame(frame); ctx.clearRect(0,0,canvas.width,canvas.height); }, 6000);
}



function initNav() {
  // Mobile toggle
  qs('#nav-toggle').addEventListener('click', () => {
    qs('#nav-links').classList.toggle('open');
  });

  // Close on link click
  qsa('.nav-links a').forEach(a => {
    a.addEventListener('click', () => qs('#nav-links').classList.remove('open'));
  });

  // Scroll nav
  window.addEventListener('scroll', () => {
    const nav = qs('#main-nav');
    nav.classList.toggle('scrolled', window.scrollY > 50);

    // Highlight active
    const sections = qsa('section[id]');
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 200) current = s.id;
    });
    qsa('.nav-links a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  });
}



function initScrollReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  qsa('.reveal-section').forEach(s => obs.observe(s));
}

console.log('%c  Happy Birthday Website by asyah  ', 'background:#070a14;color:#c8a44a;font-size:14px;padding:8px;border:1px solid #c8a44a;border-radius:4px;');
import { birthdayConfig } from '../config/birthdayConfig.js';

const { displayName, personalName } = birthdayConfig;

// Teks pembuka (opening screen)
export const opening = {
  title: `Welcome home, ${displayName}! 🌷`,
  subtitle:
    'Ada perayaan kecil yang sudah disiapkan khusus untukmu. Siap membuka kejutan ulang tahun hari ini?',
  date: 'Special celebration · 10.10.2026',
  cta: 'Masuk ke Birthday Town',
  ticker: [
    'Pengumuman kota: hari ini Wopyu wajib bahagia.',
    'Quest hari ini: buka hadiah, baca doa, dan jangan buru-buru logout.',
    'Putri terdeteksi! Semua hadiah harap bersiap.',
    'Hari ini bukan jadwal grinding. Hari ini jadwal dirayakan.',
    'Selamat datang, Wopyu. Dekorasi sudah siap, tinggal senyummu saja.',
    'Birthday buff aktif: +100 kebahagiaan, +50 keberuntungan, dan +1 alasan buat makan enak.',
  ],
};

// Hero section
export const hero = {
  heading: `Happy Birthday, ${displayName}! 🎂`,
  message: `Hari ini seluruh sudut kota kecil ini ikut merayakanmu, ${personalName}. Semoga hari spesialmu penuh senyum, kejutan baik, dan hal-hal sederhana yang bikin hati terasa hangat.`,
  dateInfo: '10 Oktober 2026 — satu hari spesial untuk seseorang yang layak dirayakan.',
  badges: [
    `Birthday Resident: ${displayName}`,
    'Celebration Date: 10.10.2026',
    "Today's Mission: Be Happy",
  ],
};

// Intro singkat
export const intro = {
  main: `${displayName}, hari ini kamu nggak perlu menyelesaikan semua tugas atau mengejar semua target sekaligus. Berhenti sebentar, tarik napas, dan nikmati perayaan kecil ini. Semoga tanggal 10 Oktober 2026 membawa banyak alasan baru untuk tersenyum.`,
  friendNote:
    'Sebagai teman, tugas kami sederhana: kasih ucapan, kirim doa, dan sedikit mengganggu dengan jokes. Soal traktiran? Itu side quest opsional… tapi kalau diterima, kami tidak menolak.',
};

// Quest board — id dipakai untuk melacak progres
export const quests = [
  { id: 'town', title: 'Visit the Town', desc: 'Buka halaman dan masuk ke area perayaan.' },
  { id: 'memories', title: 'Collect the Memories', desc: 'Lihat album kenangan.' },
  { id: 'letter', title: 'Read the Letter', desc: 'Buka pesan untuk Putri.' },
  { id: 'wish', title: 'Make a Wish', desc: 'Pilih satu harapan atau baca semua doa.' },
  { id: 'celebrate', title: 'Celebrate!', desc: 'Tekan tombol perayaan untuk membuka hadiah terakhir.' },
];

export const questReward = 'Achievement unlocked: Wopyu’s Special Day!';

// Funny notes / catatan warga
export const jokeNotes = {
  title: `Catatan dari Warga Birthday Town 💌`,
  notes: [
    'Wopyu hari ini naik level kehidupan. Hadiahnya semoga bukan cuma notifikasi.',
    'Dekorasi kota boleh pastel, tapi semoga saldo tetap tebal.',
    'Quest ulang tahun: bahagia. Side quest: cari makanan enak.',
    'Putri nggak bertambah tua, cuma dapat pembaruan versi yang lebih berpengalaman.',
    'Semoga rezekinya lancar, bukan cuma koneksi pas lagi main.',
    'Hari ini dilarang terlalu keras sama diri sendiri. Itu aturan khusus ulang tahun.',
    'Kalau masalah datang, istirahat dulu. Tidak semua quest harus selesai hari ini.',
    'Hadiah langka hari ini: teman yang nggak nanya “kapan traktir?” … eh, gagal.',
  ],
  closing: 'Kalau jokes-nya kurang lucu, anggap saja dekorasi tambahan. Doanya tetap serius, kok.',
};

// Photo gallery — memakai foto nyata yang ada di public/assets/photos/.
// Tambah / kurangi / ganti foto cukup dengan mengedit daftar `items` di bawah.
// Tiap item menunjuk ke sebuah kategori (label + caption) lewat `category`.
export const gallery = {
  title: `${displayName}’s Memory Album 📸`,
  // Folder tempat foto disimpan (relatif terhadap public/).
  folder: 'assets/photos/',
  categories: {
    putri: {
      label: 'Meet the Birthday Star',
      caption: 'Ini dia orang yang jadi alasan seluruh halaman ini dibuat.',
      accent: '#F6B8C8',
    },
    heartopia: {
      label: 'Heartopia Moments',
      caption: 'Sudut kecil dari dunia permainan yang ikut menemani hari-harimu.',
      accent: '#C8E6F5',
    },
    memori: {
      label: 'Favorite Memories',
      caption: 'Bukan soal seberapa besar momennya, tapi seberapa hangat rasanya saat diingat.',
      accent: '#D8C7EB',
    },
  },
  // Nama file mengikuti isi folder public/assets/photos/ (p1-p4.jpg, r1-r2.jpg).
  items: [
    { src: 'p1.jpg', category: 'putri', alt: 'Foto Putri 1' },
    { src: 'p2.jpg', category: 'putri', alt: 'Foto Putri 2' },
    { src: 'p3.jpg', category: 'putri', alt: 'Foto Putri 3' },
    { src: 'p4.jpg', category: 'putri', alt: 'Foto Putri 4' },
    { src: 'r1.jpg', category: 'memori', alt: 'Kenangan favorit 1' },
    { src: 'r2.jpg', category: 'memori', alt: 'Kenangan favorit 2' },
  ],
};

// Surat untuk Putri
export const letter = {
  title: `A Little Letter for ${personalName} 💌`,
  cta: `Buka Surat untuk ${personalName}`,
  paragraphs: [
    `Dear ${personalName},`,
    'Selamat ulang tahun! Di tanggal 10 Oktober 2026 ini, semoga kamu punya banyak alasan untuk tersenyum dan merasa bahagia. Semoga selalu sehat, dimudahkan dalam setiap urusan, dan dikelilingi orang-orang yang tulus.',
    'Semoga semua rencana dan impianmu bisa tumbuh pelan-pelan, seperti taman kecil yang dirawat dengan sabar. Nggak harus semuanya selesai hari ini. Setiap langkah kecil tetap berarti, dan kamu boleh menikmati prosesnya.',
    'Kalau nanti ada hari yang terasa melelahkan, semoga kamu selalu menemukan tempat untuk beristirahat, teman untuk bercerita, dan hal-hal sederhana yang bisa menghangatkan hati lagi.',
    'Terima kasih sudah menjadi teman yang punya warna dan cerita sendiri. Website kecil ini dibuat untuk mengingatkan bahwa hari spesialmu layak dirayakan, walaupun dengan cara yang sederhana.',
    `Happy Birthday, ${displayName}! Semoga chapter baru ini penuh kesehatan, keberuntungan, tawa, dan kenangan baik. Jangan lupa bahagia, jangan lupa istirahat, dan kalau ada traktiran… temanmu siap membantu menghabiskan.`,
    '— Temanmu yang membawa doa, jokes, dan sedikit rasa lapar',
  ],
};

// Birthday wishes garden
export const wishes = {
  title: 'Wishes in the Birthday Garden 🌷',
  list: [
    'Semoga Putri selalu sehat dan bahagia.',
    'Semoga setiap urusan dipermudah.',
    'Semoga impian dan target tercapai satu per satu.',
    'Semoga mendapatkan kesempatan baik yang sesuai dengan harapanmu.',
    'Semoga selalu dikelilingi teman-teman yang suportif dan tulus.',
    'Semoga rezekinya lancar dan hatinya tetap tenang.',
    'Semoga punya waktu untuk menikmati hal-hal yang kamu sukai.',
    'Semoga semakin berani mencoba, tanpa merasa harus selalu sempurna.',
    'Semoga hari-hari berikutnya punya lebih banyak tawa daripada kekhawatiran.',
  ],
  readAll: 'Baca Semua Doa',
};

// Final surprise
export const finalSurprise = {
  title: `A New Chapter for ${displayName} 🎁`,
  message: `Selamat ulang tahun, ${personalName}!\n\nSemoga perjalanan barumu dipenuhi hal-hal baik, orang-orang yang tulus, dan momen kecil yang membuatmu merasa: hidup ternyata punya banyak sisi yang indah.\n\nKota kecil ini mungkin hanya ada di layar, tapi doa baiknya sungguhan. Hari ini, semoga kamu merasa dirayakan.`,
  blowCandle: 'Tiup Lilin & Buat Harapan',
  openGift: 'Buka Hadiah Terakhir',
  celebrateAgain: 'Rayakan Lagi',
  backToTop: 'Kembali ke Awal',
  secretMessage: 'Hadiah utamanya: doa baik. Bonusnya: traktiran masih boleh, Wopyu 😆',
};

// Footer
export const footer = {
  main: 'Made with friendship, little jokes, and warm wishes 🌷',
  to: `Especially for ${birthdayConfig.fullDisplayName} — 10.10.2026.`,
  ps: 'P.S. Kamu boleh keluar dari halaman ini, tapi doa baiknya tetap ikut pulang.',
  fanMade: 'A fan-made birthday surprise inspired by Heartopia. Not an official game website.',
};

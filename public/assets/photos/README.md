# 📸 Foto — Memory Album

Website menampilkan **semua foto nyata** yang ditaruh di folder ini
(`public/assets/photos/`). Saat ini yang dipakai: `p1.jpg`–`p4.jpg` dan `r1.jpg`–`r2.jpg`.

## Cara menambah / mengganti / menghapus foto

Edit daftar `gallery.items` di **`src/data/content.js`**:

```js
items: [
  { src: 'p1.jpg', category: 'putri',   alt: 'Foto Putri 1' },
  { src: 'r1.jpg', category: 'memori',  alt: 'Kenangan favorit 1' },
  // tambah / kurangi baris sesuai file di folder ini
],
```

- `src` → nama file persis seperti di folder ini.
- `category` → salah satu dari `putri`, `heartopia`, `memori` (menentukan label + caption + warna aksen, lihat `gallery.categories`).
- `alt` → deskripsi singkat untuk aksesibilitas.

## Catatan

- Format disarankan `.jpg` / `.jpeg` / `.png` / `.webp`, rasio ± 4:5 (portrait) agar pas di bingkai polaroid.
- Jika sebuah file belum ada, kartu menampilkan ilustrasi placeholder orisinal (tidak error).
- Gunakan hanya foto yang memang ingin/sudah disetujui untuk ditampilkan.

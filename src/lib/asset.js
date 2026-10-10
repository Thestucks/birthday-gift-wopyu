// Helper untuk menyusun URL aset yang aman untuk GitHub Pages (sub-path).
// Dengan vite base './', BASE_URL bernilai './' sehingga aset di folder
// public/ tetap resolves benar saat di-host di https://<user>.github.io/<repo>/.
export function asset(path) {
  const base = import.meta.env.BASE_URL || './';
  const clean = path.replace(/^\/+/, '');
  return base + clean;
}

// Kue ulang tahun orisinal. Menampilkan label tanggal dekoratif, tanpa jumlah
// lilin yang menyiratkan usia. Lilin bisa dipadamkan lewat animasi sederhana.
export default function BirthdayCake({ candlesOut = false, reducedMotion = false }) {
  const candleX = [82, 112, 142, 172, 202];
  return (
    <svg className={`cake ${candlesOut ? 'cake--out' : ''} ${reducedMotion ? 'is-static' : ''}`}
      viewBox="0 0 284 240" role="img" aria-label="Kue ulang tahun dengan tulisan 10.10.2026">
      {/* piring */}
      <ellipse cx="142" cy="222" rx="120" ry="14" fill="#EADBC4" />

      {/* badan kue */}
      <rect x="52" y="150" width="180" height="66" rx="12" fill="#F6B8C8" />
      <rect x="52" y="132" width="180" height="30" rx="12" fill="#FFF8EE" />
      <path d="M52 150 q18 20 36 0 q18 20 36 0 q18 20 36 0 q18 20 36 0 q18 20 36 0" fill="#F6B8C8" opacity="0.5" />

      {/* label tanggal pada kue */}
      <text x="142" y="192" textAnchor="middle" fontSize="20" fontWeight="700" fill="#58483F" fontFamily="system-ui, sans-serif">
        10.10.2026
      </text>

      {candleX.map((cx, i) => (
        <g key={i} className="candle">
          <rect x={cx - 3} y="98" width="6" height="36" rx="3" fill={i % 2 ? '#C8E6F5' : '#D8C7EB'} />
          {!candlesOut && (
            <g className={`flame flame-${i}`}>
              <ellipse cx={cx} cy="88" rx="6" ry="10" fill="#F7E3A1" />
              <ellipse cx={cx} cy="90" rx="3" ry="6" fill="#FDBA74" />
            </g>
          )}
          {candlesOut && (
            <path className="smoke" d={`M${cx} 92 q6 -10 0 -18 q-6 -8 2 -16`} stroke="#C7C7C7" strokeWidth="2.5" fill="none" opacity="0.5" />
          )}
        </g>
      ))}
    </svg>
  );
}

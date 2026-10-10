import { useQuest } from '../context/QuestContext.jsx';

// Latar ilustrasi "kota kecil" orisinal berbasis SVG (bukan aset game).
// Dipakai sebagai dekorasi tetap di belakang konten. Animasi ringan bisa dimatikan.
export default function BirthdayTownBackground() {
  const { reducedMotion } = useQuest();
  return (
    <div className={`town-bg ${reducedMotion ? 'is-static' : ''}`} aria-hidden="true">
      <svg
        className="town-bg__svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C8E6F5" />
            <stop offset="55%" stopColor="#FFF1E6" />
            <stop offset="100%" stopColor="#FFF8EE" />
          </linearGradient>
          <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#CDE3C4" />
            <stop offset="100%" stopColor="#B9D5B0" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="1440" height="900" fill="url(#sky)" />

        {/* matahari lembut */}
        <circle className="sun" cx="1180" cy="180" r="70" fill="#FBEFC0" opacity="0.7" />
        <circle cx="1180" cy="180" r="46" fill="#F7E3A1" opacity="0.85" />

        {/* awan */}
        <g className="cloud c1" fill="#FFFFFF" opacity="0.9">
          <ellipse cx="240" cy="150" rx="70" ry="34" />
          <ellipse cx="300" cy="150" rx="55" ry="28" />
          <ellipse cx="200" cy="165" rx="55" ry="26" />
        </g>
        <g className="cloud c2" fill="#FFFFFF" opacity="0.8">
          <ellipse cx="760" cy="110" rx="60" ry="28" />
          <ellipse cx="820" cy="120" rx="46" ry="22" />
        </g>

        {/* bukit */}
        <path d="M0 620 Q 360 500 760 600 T 1440 560 V900 H0 Z" fill="url(#ground)" />

        {/* jalan setapak */}
        <path d="M700 900 Q 690 720 720 620 Q 740 560 720 520 L760 520 Q 782 560 800 620 Q 820 760 840 900 Z"
          fill="#F3E7D0" opacity="0.9" />

        {/* rumah pastel kiri */}
        <g className="house">
          <rect x="150" y="500" width="170" height="130" rx="10" fill="#F6B8C8" />
          <polygon points="140,505 330,505 235,430" fill="#58483F" />
          <rect x="210" y="560" width="50" height="70" rx="6" fill="#FFF8EE" />
          <rect x="175" y="525" width="40" height="40" rx="6" fill="#C8E6F5" />
          <rect x="255" y="525" width="40" height="40" rx="6" fill="#C8E6F5" />
        </g>

        {/* rumah pastel kanan */}
        <g className="house">
          <rect x="1080" y="520" width="180" height="130" rx="10" fill="#D8C7EB" />
          <polygon points="1070,525 1270,525 1170,450" fill="#58483F" />
          <rect x="1140" y="580" width="52" height="70" rx="6" fill="#FFF8EE" />
          <rect x="1100" y="545" width="38" height="38" rx="6" fill="#F7E3A1" />
          <rect x="1204" y="545" width="38" height="38" rx="6" fill="#F7E3A1" />
        </g>

        {/* pohon */}
        <g className="tree">
          <rect x="470" y="560" width="18" height="70" rx="6" fill="#8B6B4E" />
          <circle cx="479" cy="540" r="52" fill="#9FC896" />
          <circle cx="452" cy="560" r="34" fill="#B9D5B0" />
          <circle cx="506" cy="560" r="34" fill="#B9D5B0" />
        </g>
        <g className="tree">
          <rect x="940" y="580" width="16" height="60" rx="6" fill="#8B6B4E" />
          <circle cx="948" cy="560" r="44" fill="#9FC896" />
        </g>

        {/* bunga taman */}
        <g className="flowers">
          {[
            [320, 700], [360, 720], [420, 705], [520, 730], [600, 715],
            [900, 730], [980, 712], [1050, 728], [620, 760], [700, 770],
          ].map(([fx, fy], i) => (
            <g key={i} className="flower">
              <line x1={fx} y1={fy} x2={fx} y2={fy + 26} stroke="#6E9A63" strokeWidth="3" />
              <circle cx={fx} cy={fy} r="8" fill={i % 3 === 0 ? '#F6B8C8' : i % 3 === 1 ? '#F7E3A1' : '#D8C7EB'} />
              <circle cx={fx} cy={fy} r="3" fill="#FFF8EE" />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

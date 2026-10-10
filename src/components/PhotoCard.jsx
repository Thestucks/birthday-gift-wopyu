import { useState } from 'react';

// Ilustrasi placeholder orisinal (bukan foto) saat aset belum tersedia.
function Placeholder({ accent }) {
  return (
    <svg className="polaroid__placeholder" viewBox="0 0 200 240" role="img" aria-label="Ilustrasi placeholder">
      <rect x="0" y="0" width="200" height="240" fill="#FBF3E6" />
      <circle cx="100" cy="96" r="46" fill={accent} opacity="0.55" />
      <circle cx="100" cy="96" r="30" fill="#FFFFFF" opacity="0.85" />
      <path d="M74 168 Q100 138 126 168" stroke={accent} strokeWidth="6" fill="none" strokeLinecap="round" />
      <circle cx="86" cy="86" r="4" fill="#58483F" />
      <circle cx="114" cy="86" r="4" fill="#58483F" />
      <path d="M150 40 l6 12 12 6 -12 6 -6 12 -6 -12 -12 -6 12 -6z" fill="#F7E3A1" />
    </svg>
  );
}

// Satu kartu polaroid. Mencoba memuat foto nyata; jika gagal/tidak ada,
// menampilkan ilustrasi placeholder. Klik untuk memperbesar (modal).
export default function PhotoCard({ item, src, accent, onOpen, onRequest }) {
  const [failed, setFailed] = useState(false);
  const showPhoto = src && !failed;

  return (
    <figure className="polaroid" onClick={() => showPhoto && onOpen({ src, item })}
      onKeyDown={(e) => e.key === 'Enter' && showPhoto && onOpen({ src, item })}
      role={showPhoto ? 'button' : undefined}
      tabIndex={showPhoto ? 0 : undefined}
      style={{ cursor: showPhoto ? 'zoom-in' : 'default' }}>
      <div className="polaroid__frame">
        {showPhoto ? (
          <img
            className="polaroid__img"
            src={src}
            alt={item.alt}
            loading="lazy"
            onError={() => setFailed(true)}
            onLoad={onRequest}
          />
        ) : (
          <>
            <Placeholder accent={accent} />
            <figcaption className="polaroid__placeholder-note">{item.placeholder}</figcaption>
          </>
        )}
      </div>
      <div className="polaroid__caption">
        <span className="polaroid__label">{item.label}</span>
        <span className="polaroid__text">{item.caption}</span>
      </div>
    </figure>
  );
}

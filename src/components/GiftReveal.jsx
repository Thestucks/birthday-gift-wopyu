import { finalSurprise } from '../data/content.js';

// Kotak hadiah berpita. Saat dibuka menampilkan pesan rahasia birthday surprise.
export default function GiftReveal({ open, onOpen, reducedMotion = false }) {
  return (
    <div className="gift">
      <button
        type="button"
        className={`gift__box ${open ? 'is-open' : ''} ${reducedMotion ? 'is-static' : ''}`}
        onClick={onOpen}
        aria-expanded={open}
        aria-label={finalSurprise.openGift}
      >
        <span className="gift__lid" aria-hidden="true">
          <span className="gift__bow" />
        </span>
        <span className="gift__body" aria-hidden="true">
          <span className="gift__ribbon gift__ribbon--v" />
        </span>
        <span className="gift__question" aria-hidden="true">{open ? '' : '🎁'}</span>
      </button>

      {open ? (
        <p className={`gift__message ${reducedMotion ? 'is-static' : 'gift__message--in'}`} role="status">
          {finalSurprise.secretMessage}
        </p>
      ) : (
        <p className="gift__hint">Isi hadiahnya masih tersembunyi…</p>
      )}
    </div>
  );
}

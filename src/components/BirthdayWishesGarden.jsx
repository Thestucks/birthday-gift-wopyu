import { useState } from 'react';
import { wishes } from '../data/content.js';
import { useQuest } from '../context/QuestContext.jsx';

const PETALS = ['#F6B8C8', '#F7E3A1', '#D8C7EB', '#C8E6F5'];

// Satu bunga = satu doa. Ditekan menampilkan pesannya di kartu kecil.
// Tombol "Baca Semua Doa" disediakan agar isi tidak tersembunyi di balik interaksi.
export default function BirthdayWishesGarden() {
  const { markQuest } = useQuest();
  const [active, setActive] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const pick = (idx) => {
    setActive(idx);
    markQuest('wish');
  };

  const readAll = () => {
    setShowAll(true);
    markQuest('wish');
  };

  return (
    <section className="wishes section" id="wishes">
      <div className="section__head">
        <h2 className="section__title">{wishes.title}</h2>
        <p className="section__hint">Setiap bunga mewakili satu doa — ketuk untuk membacanya 🌸</p>
      </div>

      <div className="wishes__garden">
        {wishes.list.map((w, i) => (
          <button
            key={i}
            type="button"
            className={`wish-flower ${active === i ? 'is-active' : ''}`}
            onClick={() => pick(i)}
            aria-pressed={active === i}
            aria-label={`Doa ${i + 1}`}
          >
            <span className="wish-flower__stem" aria-hidden="true" />
            <span className="wish-flower__head" aria-hidden="true" style={{ '--petal': PETALS[i % PETALS.length] }}>
              <span className="wish-flower__core" />
            </span>
          </button>
        ))}
      </div>

      {active !== null && !showAll && (
        <p className="wish-card" role="status">🌷 {wishes.list[active]}</p>
      )}

      <div className="wishes__actions">
        {!showAll ? (
          <button type="button" className="btn btn--secondary" onClick={readAll}>
            {wishes.readAll}
          </button>
        ) : (
          <ul className="wishes__all">
            {wishes.list.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

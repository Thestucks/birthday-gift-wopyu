import { useEffect, useState } from 'react';
import { opening } from '../data/content.js';
import { useQuest } from '../context/QuestContext.jsx';

// Gerbang kota. Menampilkan teks lucu berganti pelan (kecuali reduced motion).
export default function OpeningScreen({ onEnter }) {
  const { reducedMotion } = useQuest();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const t = setInterval(() => setI((v) => (v + 1) % opening.ticker.length), 4500);
    return () => clearInterval(t);
  }, [reducedMotion]);

  return (
    <section className="opening" id="top">
      <div className="opening__card">
        <span className="opening__date">{opening.date}</span>
        <h1 className="opening__title">{opening.title}</h1>
        <p className="opening__subtitle">{opening.subtitle}</p>

        <div className="opening__ticker" aria-live="polite">
          <span key={i} className="opening__ticker-text">
            {opening.ticker[i]}
          </span>
        </div>

        <button type="button" className="btn btn--primary btn--lg" onClick={onEnter}>
          {opening.cta} →
        </button>
      </div>
    </section>
  );
}

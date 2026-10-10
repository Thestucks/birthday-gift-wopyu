import { useState } from 'react';
import { letter } from '../data/content.js';
import { useQuest } from '../context/QuestContext.jsx';

export default function LetterForPutri() {
  const [open, setOpen] = useState(false);
  const { markQuest, reducedMotion } = useQuest();

  const handleOpen = () => {
    setOpen(true);
    markQuest('letter');
  };

  return (
    <section className="letter section" id="letter">
      <div className="section__head">
        <h2 className="section__title">{letter.title}</h2>
        <p className="section__hint">Diselipkan di kotak surat kecil bertabur bunga 🌼</p>
      </div>

      {!open ? (
        <div className="letter__mailbox">
          <button type="button" className="envelope" onClick={handleOpen} aria-label={letter.cta}>
            <span className="envelope__flap" />
            <span className="envelope__body" />
            <span className="envelope__heart">💌</span>
          </button>
          <p className="letter__cta-note">{letter.cta}</p>
        </div>
      ) : (
        <article className={`letter__paper ${reducedMotion ? 'is-static' : 'paper-in'}`}>
          {letter.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? 'letter__greeting' : i === letter.paragraphs.length - 1 ? 'letter__sign' : 'letter__para'}>
              {p}
            </p>
          ))}
          <button type="button" className="btn btn--ghost" onClick={() => setOpen(false)}>
            Tutup surat
          </button>
        </article>
      )}
    </section>
  );
}

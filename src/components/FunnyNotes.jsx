import { jokeNotes } from '../data/content.js';

// Kartu catatan tampil seperti memo di papan pengumuman kota.
export default function FunnyNotes() {
  return (
    <section className="notes section" id="notes">
      <div className="section__head">
        <h2 className="section__title">{jokeNotes.title}</h2>
        <p className="section__hint">Ditempel di papan pengumuman Birthday Town 📌</p>
      </div>

      <div className="notes__board">
        {jokeNotes.notes.map((note, i) => (
          <article
            key={i}
            className={`note-card note-card--memo tilt-${i % 4}`}
          >
            <span className="note-card__tape" aria-hidden="true" />
            <p className="note-card__body">{note}</p>
          </article>
        ))}
      </div>

      <p className="notes__closing">{jokeNotes.closing}</p>
    </section>
  );
}

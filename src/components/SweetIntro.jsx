import { intro } from '../data/content.js';

export default function SweetIntro() {
  return (
    <section className="intro section" id="intro">
      <div className="intro__text">
        <p className="lead">{intro.main}</p>
      </div>
      <aside className="note-card note-card--sticky">
        <span className="note-card__pin" aria-hidden="true" />
        <p className="note-card__label">Catatan sebagai teman</p>
        <p className="note-card__body">{intro.friendNote}</p>
      </aside>
    </section>
  );
}

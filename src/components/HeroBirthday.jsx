import { hero } from '../data/content.js';

export default function HeroBirthday() {
  return (
    <section className="hero section" id="hero">
      <div className="hero__inner">
        <p className="eyebrow">Birthday Town · Celebration</p>
        <h2 className="hero__heading">{hero.heading}</h2>
        <p className="hero__message">{hero.message}</p>
        <p className="hero__date">{hero.dateInfo}</p>
        <ul className="hero__badges">
          {hero.badges.map((b) => (
            <li key={b} className="badge">{b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

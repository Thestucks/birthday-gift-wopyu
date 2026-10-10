import { useState } from 'react';
import { finalSurprise } from '../data/content.js';
import { useQuest } from '../context/QuestContext.jsx';
import ConfettiEffect from './ConfettiEffect.jsx';
import BirthdayCake from './BirthdayCake.jsx';
import GiftReveal from './GiftReveal.jsx';

// Area pesta terakhir: menyalakan/memadamkan lilin, membuka hadiah, dan confetti.
// Semua efek bersifat opsional dan menghormati mode tanpa animasi.
export default function FinalSurprise() {
  const { markQuest, reducedMotion } = useQuest();
  const [candlesOut, setCandlesOut] = useState(false);
  const [giftOpen, setGiftOpen] = useState(false);
  const [burst, setBurst] = useState(0);

  const celebrate = () => setBurst((n) => n + 1);

  const onBlow = () => {
    setCandlesOut(true);
    markQuest('celebrate');
    celebrate();
  };

  const onGift = () => {
    setGiftOpen(true);
    markQuest('celebrate');
    celebrate();
  };

  const onAgain = () => {
    setCandlesOut(false);
    setGiftOpen(false);
    celebrate();
  };

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  const paras = finalSurprise.message.split('\n\n');

  return (
    <section className="final section" id="final">
      <ConfettiEffect trigger={burst} />
      <div className="section__head">
        <h2 className="section__title">{finalSurprise.title}</h2>
      </div>

      <div className="final__stage">
        <BirthdayCake candlesOut={candlesOut} reducedMotion={reducedMotion} />
        <GiftReveal open={giftOpen} onOpen={onGift} reducedMotion={reducedMotion} />
      </div>

      <div className="final__message">
        {paras.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="final__actions">
        <button type="button" className="btn btn--primary" onClick={onBlow} disabled={candlesOut}>
          🕯️ {finalSurprise.blowCandle}
        </button>
        <button type="button" className="btn btn--secondary" onClick={onGift}>
          🎁 {finalSurprise.openGift}
        </button>
        <button type="button" className="btn btn--ghost" onClick={onAgain}>
          🎉 {finalSurprise.celebrateAgain}
        </button>
        <button type="button" className="btn btn--ghost" onClick={backToTop}>
          ↑ {finalSurprise.backToTop}
        </button>
      </div>
    </section>
  );
}

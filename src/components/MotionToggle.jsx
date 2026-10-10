import { useQuest } from '../context/QuestContext.jsx';

// Mengubah preferensi animasi. Mode "tanpa animasi" membuat pengalaman lebih
// nyaman (confetti, gerakan awan, dan transisi dilemahkan).
export default function MotionToggle() {
  const { reducedMotion, toggleMotion } = useQuest();
  return (
    <button
      type="button"
      className={`motion-btn ${reducedMotion ? 'is-off' : ''}`}
      onClick={toggleMotion}
      aria-pressed={!reducedMotion}
      title={reducedMotion ? 'Nyalakan animasi' : 'Matikan animasi'}
    >
      <span aria-hidden="true">{reducedMotion ? '🐢' : '✨'}</span>
      <span className="motion-btn__label">
        {reducedMotion ? 'Animasi: Off' : 'Animasi: On'}
      </span>
    </button>
  );
}

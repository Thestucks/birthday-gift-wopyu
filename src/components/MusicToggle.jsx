import { useQuest } from '../context/QuestContext.jsx';

// Tombol musik mengambang. Status & kontrol diambil dari context sehingga
// sinkron dengan pemutaran otomatis saat pengguna masuk ke Birthday Town.
export default function MusicToggle() {
  const { toggleMusic, musicPlaying, musicAvailable } = useQuest();

  return (
    <div className="music-toggle">
      <button
        type="button"
        className={`music-btn ${musicPlaying ? 'is-playing' : ''} ${!musicAvailable ? 'is-muted' : ''}`}
        onClick={toggleMusic}
        aria-pressed={musicPlaying}
        title={
          !musicAvailable
            ? 'Belum ada file bgm.mp3 di folder aset'
            : musicPlaying
              ? 'Matikan musik'
              : 'Nyalakan musik'
        }
      >
        <span className="music-btn__icon" aria-hidden="true">
          {musicPlaying ? '🎵' : '🎧'}
        </span>
        <span className="music-btn__label">{musicPlaying ? 'Musik: On' : 'Musik'}</span>
      </button>
    </div>
  );
}

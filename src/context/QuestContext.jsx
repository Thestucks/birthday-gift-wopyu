import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { asset } from '../lib/asset.js';
import { assetNames } from '../config/birthdayConfig.js';

const QuestContext = createContext(null);

export function QuestProvider({ children }) {
  // Progres quest disimpan di memory saja (tidak menyentuh localStorage)
  // sesuai catatan: tidak perlu menyimpan data pribadi.
  const [completed, setCompleted] = useState(() => new Set());

  const markQuest = useCallback((id) => {
    setCompleted((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }, []);

  const resetQuests = useCallback(() => setCompleted(new Set()), []);

  // Preferensi animasi. Default mengikuti preferensi OS pengguna.
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const toggleMotion = useCallback(() => setReducedMotion((v) => !v), []);

  // ---- Musik latar (BGM) ----
  // Elemen audio dibuat sekali di provider agar bisa dikontrol dari mana saja:
  // App (main otomatis saat tombol "Masuk" ditekan) & MusicToggle (on/off).
  // Tidak autoplay saat halaman dibuka — baru menyala lewat gesture pengguna.
  const audioRef = useRef(null);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [musicAvailable, setMusicAvailable] = useState(true);

  useEffect(() => {
    const audio = new Audio(asset(assetNames.bgm));
    audio.loop = true;
    audio.volume = 0.5;
    const onError = () => {
      setMusicAvailable(false);
      setMusicPlaying(false);
    };
    audio.addEventListener('error', onError);
    audioRef.current = audio;
    return () => {
      audio.removeEventListener('error', onError);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const playMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const p = audio.play();
    if (p && typeof p.then === 'function') {
      p.then(() => setMusicPlaying(true)).catch(() => setMusicPlaying(false));
    }
  }, []);

  const pauseMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setMusicPlaying(false);
  }, []);

  const toggleMusic = useCallback(() => {
    if (!musicAvailable) return;
    if (musicPlaying) pauseMusic();
    else playMusic();
  }, [musicAvailable, musicPlaying, playMusic, pauseMusic]);

  const value = useMemo(
    () => ({
      completed,
      markQuest,
      resetQuests,
      reducedMotion,
      toggleMotion,
      playMusic,
      pauseMusic,
      toggleMusic,
      musicPlaying,
      musicAvailable,
    }),
    [
      completed,
      markQuest,
      resetQuests,
      reducedMotion,
      toggleMotion,
      playMusic,
      pauseMusic,
      toggleMusic,
      musicPlaying,
      musicAvailable,
    ]
  );

  return <QuestContext.Provider value={value}>{children}</QuestContext.Provider>;
}

export function useQuest() {
  const ctx = useContext(QuestContext);
  if (!ctx) throw new Error('useQuest harus dipakai di dalam QuestProvider');
  return ctx;
}

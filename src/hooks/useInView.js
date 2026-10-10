import { useEffect, useRef } from 'react';

// Menandai satu event sekali saat elemen terlihat di layar (untuk progres quest).
export default function useInView(onVisible, { threshold = 0.35 } = {}) {
  const ref = useRef(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !fired.current) {
            fired.current = true;
            onVisible?.();
            obs.disconnect();
          }
        });
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [onVisible, threshold]);

  return ref;
}

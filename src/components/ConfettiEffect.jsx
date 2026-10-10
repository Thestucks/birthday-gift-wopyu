import { useEffect, useRef } from 'react';
import { useQuest } from '../context/QuestContext.jsx';

// Palet pastel sesuai tema.
const COLORS = ['#F6B8C8', '#B9D5B0', '#C8E6F5', '#F7E3A1', '#D8C7EB', '#FFFFFF'];

// Overlay confetti layar penuh yang memicu ledakan partikel setiap kali `trigger` berubah.
export default function ConfettiEffect({ trigger = 0, spread = 120 }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const particlesRef = useRef([]);
  const { reducedMotion } = useQuest();

  useEffect(() => {
    if (!trigger || reducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const w = canvas.width;
    const h = canvas.height;
    const burst = [];
    for (let i = 0; i < spread; i++) {
      burst.push({
        x: w / 2 + (Math.random() - 0.5) * w * 0.4,
        y: h * 0.35 + (Math.random() - 0.5) * 120,
        vx: (Math.random() - 0.5) * 8,
        vy: Math.random() * -9 - 4,
        size: Math.random() * 8 + 5,
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.3,
        color: COLORS[(Math.random() * COLORS.length) | 0],
        life: 1,
      });
    }
    particlesRef.current = particlesRef.current.concat(burst);

    const gravity = 0.28;
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const ps = particlesRef.current;
      for (let i = ps.length - 1; i >= 0; i--) {
        const p = ps[i];
        p.vy += gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        p.life -= 0.008;
        if (p.life <= 0 || p.y > canvas.height + 40) {
          ps.splice(i, 1);
          continue;
        }
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = Math.max(p.life, 0);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      }
      if (ps.length > 0) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = 0;
      }
    };
    if (!rafRef.current) rafRef.current = requestAnimationFrame(tick);

    return () => window.removeEventListener('resize', resize);
  }, [trigger, reducedMotion, spread]);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  return (
    <canvas
      ref={canvasRef}
      className="confetti-canvas"
      aria-hidden="true"
    />
  );
}

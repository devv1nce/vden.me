import { useEffect, useRef } from "react";

const isMobile = () => window.innerWidth <= 768;

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const DPR = window.devicePixelRatio || 1;
    const COLORS = { primary: "#3f7cac", accent: "#e2f89c" };
    const CONNECTION_DISTANCE = 130;

    let animFrameId;
    let particles = [];

    // ── Sizing ────────────────────────────────────────────────────────────────
    const resize = () => {
      canvas.width  = window.innerWidth  * DPR;
      canvas.height = window.innerHeight * DPR;
      canvas.style.width  = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(DPR, DPR);
      initParticles();
    };

    // ── Particle factory ──────────────────────────────────────────────────────
    const createParticle = () => {
      const color = Math.random() > 0.6 ? COLORS.accent : COLORS.primary;
      return {
        x:       Math.random() * window.innerWidth,
        y:       Math.random() * window.innerHeight,
        vx:      (Math.random() - 0.5) * 0.4,
        vy:      (Math.random() - 0.5) * 0.4,
        radius:  Math.random() * 1.6 + 0.6,
        alpha:   Math.random() * 0.5 + 0.2,
        color,
      };
    };

    const initParticles = () => {
      const count = isMobile() ? 50 : 110;
      particles = Array.from({ length: count }, createParticle);
    };

    // ── Draw helpers ──────────────────────────────────────────────────────────
    const drawParticle = (p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      ctx.globalAlpha = 1;
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.18;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = COLORS.primary;
            ctx.globalAlpha = opacity;
            ctx.lineWidth = 0.7;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    };

    // ── Animation loop ────────────────────────────────────────────────────────
    const tick = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      drawConnections();

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // wrap edges
        if (p.x < -10)  p.x = window.innerWidth  + 10;
        if (p.x > window.innerWidth  + 10) p.x = -10;
        if (p.y < -10)  p.y = window.innerHeight + 10;
        if (p.y > window.innerHeight + 10) p.y = -10;

        drawParticle(p);
      });

      animFrameId = requestAnimationFrame(tick);
    };

    // ── Bootstrap ─────────────────────────────────────────────────────────────
    resize();
    tick();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:      "fixed",
        top:           0,
        left:          0,
        width:         "100vw",
        height:        "100vh",
        zIndex:        0,
        pointerEvents: "none",
        display:       "block",
      }}
      aria-hidden="true"
    />
  );
}

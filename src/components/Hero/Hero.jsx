import React, { useEffect, useRef } from "react";
import "./Hero.css";

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.3,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.6 + 0.1,
        color: Math.random() > 0.5 ? "#3f7cac" : "#e2f89c",
      });
    }

    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section id="hero" className="hero-container">
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-content">
        <div className="hero-tag">
          <span className="tag-dot" />
          <span>AVAILABLE FOR PROJECTS</span>
        </div>
        <h1 className="hero-title">
          <span className="title-line">GAME</span>
          <span className="title-line accent">DEVELOPER</span>
          <span className="title-line">&amp; DESIGNER</span>
        </h1>
        <p className="hero-desc">
          Crafting immersive worlds, mechanics that feel alive, and experiences
          players won't forget. From concept to launch — I build games.
        </p>
        <div className="hero-cta">
          <a href="#portfolio" className="btn-primary">
            <span>VIEW MY GAMES</span>
            <span className="btn-arrow">▶</span>
          </a>
          <a href="#contact" className="btn-secondary">CONTACT ME</a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">12+</span>
            <span className="stat-label">Games Released</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">3</span>
            <span className="stat-label">Game Engines</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">5yr</span>
            <span className="stat-label">Experience</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="screen-frame">
          <div className="screen-header">
            <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
            <span className="screen-title">game_engine.exe</span>
          </div>
          <div className="screen-body">
            <div className="code-line"><span className="code-kw">class</span> <span className="code-name">GameDev</span> {"{"}</div>
            <div className="code-line indent"><span className="code-kw">constructor</span>() {"{"}</div>
            <div className="code-line indent2"><span className="code-prop">this</span>.engines = [</div>
            <div className="code-line indent3"><span className="code-str">'Unity'</span>, <span className="code-str">'Unreal'</span>, <span className="code-str">'Godot'</span></div>
            <div className="code-line indent2">];</div>
            <div className="code-line indent2"><span className="code-prop">this</span>.passion = <span className="code-num">&infin;</span>;</div>
            <div className="code-line indent">{"}"}</div>
            <div className="code-line indent"><span className="code-fn">buildWorlds</span>() {"{"}</div>
            <div className="code-line indent2"><span className="code-kw">return</span> <span className="code-str">'pure magic'</span>;</div>
            <div className="code-line indent">{"}"}</div>
            <div className="code-line">{"}"}</div>
            <div className="code-line blink">█</div>
          </div>
        </div>

        <div className="engine-badges">
          <div className="engine-badge">UNITY</div>
          <div className="engine-badge">UNREAL</div>
          <div className="engine-badge">GODOT</div>
          <div className="engine-badge">C#</div>
          <div className="engine-badge">C++</div>
          <div className="engine-badge">GDScript</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

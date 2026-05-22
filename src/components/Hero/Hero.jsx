import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        {/* <div className="hero-tag">
          <span className="tag-dot" />
          <span>AVAILABLE FOR PROJECTS</span>
        </div> */}
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
            <span className="stat-num">3+</span>
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
            <div className="code-line indent3"><span className="code-str">'Unity'</span>, <span className="code-str">'Unreal'</span>, <span className="code-str">'Roblox Studio'</span></div>
            <div className="code-line indent2">];</div>
            <div className="code-line indent2"><span className="code-prop">this</span>.name = <span className="code-str">jason</span>;</div>
            <div className="code-line indent2"><span className="code-prop">this</span>.age = <span className="code-str">18</span>;</div>
            <div className="code-line indent2"><span className="code-prop">this</span>.passion = <span className="code-num">9 gazillion</span>;</div>
            <div className="code-line indent">{"}"}</div>
            <div className="code-line indent"><span className="code-fn">buildWorlds</span>() {"{"}</div>
            <div className="code-line indent2"><span className="code-kw">return</span> <span className="code-str">'magical spaghetti'</span>;</div>
            <div className="code-line indent">{"}"}</div>
            <div className="code-line">{"}"}</div>
            <div className="code-line blink">█</div>
          </div>
        </div>

        <div className="engine-badges">
          <div className="engine-badge">UNITY</div>
          <div className="engine-badge">UNREAL</div>
          <div className="engine-badge">ROBLOX</div>
          <div className="engine-badge">C#</div>
          <div className="engine-badge">C++</div>
          <div className="engine-badge">LUAU</div>
          <div className="engine-badge">PYTHON</div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

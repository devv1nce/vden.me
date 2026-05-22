import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import { PORTFOLIO_PROJECTS, SCHOOL_PROJECTS } from "../../utils/data";

const LearnMoreModal = ({ project, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const skills = project.skills || project.tags || [];
  const growth = project.growth || project.developerGrowth || null;

  return (
    <div className="lm-overlay" onClick={onClose}>
      <div
        className="lm-modal"
        style={{ "--accent": project.color }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Corner decorations */}
        <span className="lm-corner lm-corner--tl" />
        <span className="lm-corner lm-corner--br" />

        {/* Header */}
        <div className="lm-header">
          <div className="lm-header-left">
            <span className="lm-label">PROJECT BRIEF</span>
            <h2 className="lm-title">{project.title}</h2>
          </div>
          <button className="lm-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        <div className="lm-divider" />

        {/* Body */}
        <div className="lm-body">
          {/* Skills Used */}
          <div className="lm-section">
            <div className="lm-section-heading">
              <span className="lm-section-icon">◈</span>
              SKILLS USED
            </div>
            <div className="lm-skills">
              {skills.map((skill, i) => (
                <span key={i} className="lm-skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="lm-divider lm-divider--subtle" />

          {/* Developer Growth */}
          <div className="lm-section">
            <div className="lm-section-heading">
              <span className="lm-section-icon">◈</span>
              DEVELOPER GROWTH
            </div>
            <p className="lm-growth-text">
              {growth || "Details on developer growth coming soon."}
            </p>
          </div>
        </div>

        {/* Footer scan line */}
        <div className="lm-footer-bar" />
      </div>
    </div>
  );
};

const GameCard = ({ game, onPlay }) => {
  const [learnOpen, setLearnOpen] = useState(false);
  return (
    <>
      {learnOpen && <LearnMoreModal project={game} onClose={() => setLearnOpen(false)} />}
      <div className="game-card" style={{ "--accent": game.color }}>
        <div className="game-card-header">
          <div className="game-genre-badge">{game.genre || game.subject}</div>
          <div className="game-engine-badge">{game.engine || game.type?.toUpperCase()}</div>
        </div>

        <div className="game-screen">
          <div className="game-screen-inner">
            {game.image ? (
              <img src={game.image} alt={game.title} className="game-thumbnail" />
            ) : (
              <>
                <div className="pixel-art">
                  <div className="px-grid">
                    {Array.from({ length: 64 }).map((_, j) => (
                      <div key={j} className={`px ${Math.random() > 0.7 ? "lit" : ""}`} />
                    ))}
                  </div>
                </div>
                <div className="game-title-overlay">{game.title}</div>
              </>
            )}
            {game.inDevelopment && (
              <div className="dev-overlay">
                <div className="dev-overlay-content">
                  <span className="game-title-overlay">{game.title}</span>
                  <span className="dev-overlay-text">⚙ IN DEVELOPMENT</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <p className="game-desc">{game.description}</p>

        <div className="game-tags">
          {game.tags.map((tag, t) => (
            <span key={t} className="game-tag">{tag}</span>
          ))}
        </div>

        <div className="card-btn-row">
          <button
            className={`play-btn ${game.inDevelopment ? "play-btn-disabled" : ""}`}
            onClick={() => onPlay(game)}
            disabled={game.inDevelopment}
          >
            {game.inDevelopment ? (
              <><span className="play-icon">⚙</span> COMING SOON</>
            ) : game.playType === "embed" ? (
              <><span className="play-icon">▶</span> PLAY IN BROWSER</>
            ) : (
              <><span className="play-icon">↗</span> VIEW / PLAY</>
            )}
          </button>
          <button className="learn-more-btn" onClick={() => setLearnOpen(true)}>
            <span className="play-icon">◈</span> LEARN MORE
          </button>
        </div>
      </div>
    </>
  );
};

const SchoolCard = ({ project, onOpen }) => {
  const [learnOpen, setLearnOpen] = useState(false);
  return (
    <>
      {learnOpen && <LearnMoreModal project={project} onClose={() => setLearnOpen(false)} />}
      <div className="game-card school-card" style={{ "--accent": project.color }}>
        <div className="school-card-header">
          <div className="game-genre-badge">{project.subject}</div>
          <div className="game-engine-badge">
            {project.type === "pdf" ? "📄 PDF" : project.type === "googledoc" ? "📝 DOC" : project.type === "video" ? "🎬 VIDEO" : "🎮 GAME"}
          </div>
        </div>

        <div className="game-screen school-preview">
          <div className="game-screen-inner">
            {project.image ? (
              <img src={project.image} alt={project.title} className="game-thumbnail" />
            ) : (
              <div className="doc-placeholder">
                <span className="doc-icon">
                  {project.type === "pdf" ? "📄" : project.type === "googledoc" ? "📝" : "🎮"}
                </span>
                <span className="doc-placeholder-title">{project.title}</span>
              </div>
            )}
          </div>
        </div>

        <p className="game-desc">{project.description}</p>

        <div className="game-tags">
          {project.tags.map((tag, t) => (
            <span key={t} className="game-tag">{tag}</span>
          ))}
        </div>

        <div className="card-btn-row">
          <button
            className={`play-btn ${project.playable === false ? "play-btn-disabled not-available" : (!project.fileUrl && project.type !== "game" && project.type !== "video" && project.type !== "external") ? "play-btn-disabled" : ""}`}
            onClick={() => onOpen(project)}
            disabled={project.playable === false || (!project.fileUrl && project.type !== "game" && project.type !== "video" && project.playType !== "external")}
          >
            {project.playable === false ? (
              <><span className="play-icon">✕</span> NOT AVAILABLE</>
            ) : project.type === "pdf" ? (
              <><span className="play-icon">📄</span> VIEW PDF</>
            ) : project.type === "googledoc" ? (
              <><span className="play-icon">📝</span> VIEW DOC</>
            ) : project.type === "video" ? (
              <><span className="play-icon">▶</span> PLAY VIDEO</>
            ) : project.inDevelopment ? (
              <><span className="play-icon">⚙</span> COMING SOON</>
            ) : (
              <><span className="play-icon">▶</span> PLAY GAME</>
            )}
          </button>
          <button className="learn-more-btn" onClick={() => setLearnOpen(true)}>
            <span className="play-icon">◈</span> LEARN MORE
          </button>
        </div>
      </div>
    </>
  );
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [activeModal, setActiveModal] = useState(null);

  const handlePlay = (game) => {
    if (game.inDevelopment) return;
    if (game.playType === "embed") {
      setActiveModal({ type: "game", data: game });
    } else {
      window.open(game.playUrl, "_blank");
    }
  };

  const handleOpen = (project) => {
    if (project.type === "game" || project.type === "video") {
      handlePlay(project);
      return;
    }
    if (!project.fileUrl) return;
    setActiveModal({ type: "doc", data: project });
  };

  return (
    <section id="portfolio" className="portfolio-container">
      <h5>Projects</h5>

      {/* Tabs */}
      <div className="portfolio-tabs">
        <button
          className={`tab-btn ${activeTab === "personal" ? "active" : ""}`}
          onClick={() => setActiveTab("personal")}
        >
          <span className="tab-icon">🎮</span> Personal Projects
        </button>
        <button
          className={`tab-btn ${activeTab === "school" ? "active" : ""}`}
          onClick={() => setActiveTab("school")}
        >
          <span className="tab-icon">🎓</span> School Projects
        </button>
      </div>

      {/* Modal */}
      {activeModal && (
        <div className="game-modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="game-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-title">{activeModal.data.title}</span>
              <button className="modal-close" onClick={() => setActiveModal(null)}>✕</button>
            </div>
            <iframe
              src={activeModal.type === "game" ? activeModal.data.playUrl : activeModal.data.fileUrl}
              title={activeModal.data.title}
              className="game-iframe"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Personal tab */}
      {activeTab === "personal" && (
        <div className="portfolio-grid">
          {PORTFOLIO_PROJECTS.map((game, i) => (
            <GameCard key={i} game={game} onPlay={handlePlay} />
          ))}
        </div>
      )}

      {/* School tab */}
      {activeTab === "school" && (
        <div className="portfolio-grid">
          {SCHOOL_PROJECTS.map((project, i) => (
            <SchoolCard key={i} project={project} onOpen={handleOpen} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Portfolio;
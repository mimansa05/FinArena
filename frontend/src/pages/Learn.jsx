import { useState } from "react";
import { BookOpen, Clock3, PlayCircle, ChevronRight, TrendingUp, Shield, Star } from "lucide-react";

/* ─────────────────────────────────────────
   FULL COURSE STRUCTURE
───────────────────────────────────────── */
const courseStructure = [
  {
    level: "Beginner",
    badge: "Foundations",
    color: "#7c3aed",
    accent: "#ede9fe",
    icon: Shield,
    sections: [
      {
        id: "personal-finance",
        title: "Personal Finance",
        icon: "💰",
        duration: "12 min",
        lessons: ["Income vs Expenses", "Budgeting (50-30-20 rule)", "Saving habits", "Emergency fund"],
      },
      {
        id: "banking",
        title: "Banking Basics",
        icon: "🏦",
        duration: "15 min",
        lessons: ["Types of bank accounts", "Interest (simple vs compound)", "Fixed & Recurring Deposits", "Digital payments (UPI, cards)"],
      },
      {
        id: "core-concepts",
        title: "Core Concepts",
        icon: "📐",
        duration: "10 min",
        lessons: ["Inflation", "Time value of money", "Power of compounding"],
      },
      {
        id: "risk-awareness",
        title: "Risk Awareness",
        icon: "🛡️",
        duration: "8 min",
        lessons: ["Insurance basics (health, term)", "Financial fraud awareness"],
      },
    ],
  },
  {
    level: "Intermediate",
    badge: "Investing",
    color: "#9333ea",
    accent: "#f3e8ff",
    icon: TrendingUp,
    sections: [
      {
        id: "stock-market",
        title: "Stock Market Basics",
        icon: "📈",
        duration: "18 min",
        lessons: ["What are stocks", "How markets work", "IPO basics", "Market trends"],
      },
      {
        id: "investment-options",
        title: "Investment Options",
        icon: "🗂️",
        duration: "20 min",
        lessons: ["Mutual Funds (SIP, lump sum)", "Bonds", "Gold (ETF, digital gold)", "Real estate basics"],
      },
      {
        id: "analysis",
        title: "Analysis Basics",
        icon: "🔬",
        duration: "16 min",
        lessons: ["Fundamental analysis", "Technical analysis intro", "Risk vs return"],
      },
      {
        id: "portfolio",
        title: "Portfolio Building",
        icon: "🎯",
        duration: "14 min",
        lessons: ["Diversification", "Asset allocation", "Long-term vs short-term investing"],
      },
    ],
  },
  {
    level: "Advanced",
    badge: "Wealth & Strategy",
    color: "#6d28d9",
    accent: "#ddd6fe",
    icon: Star,
    sections: [
      {
        id: "advanced-markets",
        title: "Advanced Markets",
        icon: "⚡",
        duration: "22 min",
        lessons: ["Derivatives (Futures & Options)", "Intraday & swing trading", "Algorithmic trading basics"],
      },
      {
        id: "advanced-analysis",
        title: "Advanced Analysis",
        icon: "📊",
        duration: "20 min",
        lessons: ["Technical indicators (RSI, MACD)", "Candlestick patterns", "Financial statement deep dive"],
      },
      {
        id: "wealth-strategies",
        title: "Wealth Strategies",
        icon: "🏛️",
        duration: "18 min",
        lessons: ["Tax planning", "Retirement planning", "Passive income strategies"],
      },
      {
        id: "alternative",
        title: "Alternative Investments",
        icon: "🌐",
        duration: "15 min",
        lessons: ["Cryptocurrency", "Startups / angel investing", "REITs"],
      },
    ],
  },
];

const tracks = [
  { id: "trading", label: "Trading Track", icon: "📉", color: "#7c3aed", lessons: ["Chart basics", "Strategies", "Options trading"] },
  { id: "stock-investing", label: "Stock Investing Track", icon: "🏢", color: "#9333ea", lessons: ["What is a stock", "Picking stocks", "Valuation models"] },
  { id: "personal", label: "Personal Finance Track", icon: "👛", color: "#6d28d9", lessons: ["Budgeting", "Investing basics", "Wealth management"] },
  { id: "fintech", label: "Fintech / AI Track", icon: "🤖", color: "#a855f7", lessons: ["Robo-advisors", "AI trading tools", "Digital finance platforms"] },
];

/* ─────────────────────────────────────────
   LESSON CARD
───────────────────────────────────────── */
function LessonCard({ section, levelColor, levelAccent, navigate }) {
  return (
    <article
      style={{
        background: "#fff",
        borderRadius: "24px",
        padding: "24px",
        boxShadow: "0 2px 16px rgba(124,58,237,0.07)",
        border: "1.5px solid rgba(167,139,250,0.18)",
        transition: "box-shadow 0.2s, transform 0.2s",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = "0 10px 36px rgba(124,58,237,0.16)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = "0 2px 16px rgba(124,58,237,0.07)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
        <div style={{
          width: "50px", height: "50px", borderRadius: "16px",
          background: levelAccent,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "22px", flexShrink: 0,
        }}>
          {section.icon}
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{
            fontSize: "16px", fontWeight: 800, color: "#3b0764",
            fontFamily: "'Nunito', sans-serif", lineHeight: 1.3, margin: 0,
          }}>
            {section.title}
          </h3>
          <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "5px" }}>
            <Clock3 size={12} color="#a78bfa" />
            <span style={{ fontSize: "12px", color: "#a78bfa", fontFamily: "'Nunito Sans', sans-serif", fontWeight: 600 }}>
              {section.duration}
            </span>
          </div>
        </div>
      </div>

      <ul style={{ margin: "16px 0 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
        {section.lessons.map((lesson, i) => (
          <li key={i} style={{
            display: "flex", alignItems: "center", gap: "10px",
            fontSize: "13px", color: "#6b21a8",
            fontFamily: "'Nunito Sans', sans-serif", fontWeight: 500,
            opacity: 0.8,
          }}>
            <span style={{
              width: "20px", height: "20px", borderRadius: "50%",
              background: levelAccent, color: levelColor,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "10px", fontWeight: 800, flexShrink: 0,
              fontFamily: "'Nunito', sans-serif",
            }}>{i + 1}</span>
            {lesson}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => navigate(`/course/${section.id}`)}
          style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
            width: "100%",
            background: `linear-gradient(135deg, ${levelColor}, #c084fc)`,
            color: "#fff",
            border: "none", borderRadius: "50px",
            padding: "11px 20px", fontSize: "13px", fontWeight: 700,
            cursor: "pointer", fontFamily: "'Nunito', sans-serif",
            transition: "opacity 0.15s, transform 0.15s",
            boxShadow: `0 4px 16px ${levelColor}40`,
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "scale(1.02)"; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1)"; }}
        >
          <PlayCircle size={15} />
          Start Module
        </button>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
import { useNavigate } from "react-router-dom";

export default function Learn() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Nunito+Sans:wght@400;500;600&display=swap');

        .learn-page * { box-sizing: border-box; }

        .learn-page {
          font-family: 'Nunito Sans', sans-serif;
          background: linear-gradient(160deg, #f5f0ff 0%, #faf7ff 50%, #ede9fe 100%);
          min-height: 100vh;
          padding: 0 0 80px;
        }

        .learn-hero {
          background: linear-gradient(135deg, #ede9fe 0%, #f5f0ff 55%, #fdf4ff 100%);
          padding: 64px 48px 72px;
          position: relative;
          overflow: hidden;
          border-bottom: 1.5px solid rgba(167,139,250,0.18);
        }
        .learn-hero::before {
          content: '';
          position: absolute;
          top: -100px; right: -80px;
          width: 460px; height: 460px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(192,132,252,0.22) 0%, transparent 70%);
          pointer-events: none;
        }
        .learn-hero::after {
          content: '';
          position: absolute;
          bottom: -80px; left: 15%;
          width: 340px; height: 340px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(167,139,250,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .learn-hero-inner { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; }

        .learn-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(124,58,237,0.08);
          border: 1.5px solid rgba(124,58,237,0.2);
          color: #7c3aed; font-size: 11px; font-weight: 800;
          letter-spacing: 2px; text-transform: uppercase;
          padding: 6px 16px; border-radius: 100px;
          font-family: 'Nunito', sans-serif; margin-bottom: 22px;
        }

        .learn-title {
          font-family: 'Nunito', sans-serif;
          font-size: clamp(30px, 5vw, 50px);
          font-weight: 900; color: #3b0764;
          line-height: 1.18; margin: 0 0 18px; max-width: 600px;
        }
        .learn-title span {
          background: linear-gradient(135deg, #7c3aed 0%, #c084fc 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .learn-subtitle {
          color: #6b21a8; opacity: 0.65;
          font-size: 16px; line-height: 1.75;
          max-width: 520px; margin: 0; font-weight: 500;
        }

        .learn-stats { display: flex; gap: 40px; margin-top: 36px; flex-wrap: wrap; }
        .learn-stat strong {
          display: block; font-size: 30px; font-weight: 900;
          font-family: 'Nunito', sans-serif;
          background: linear-gradient(135deg, #7c3aed, #c084fc);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .learn-stat span {
          font-size: 11px; color: #7c3aed; opacity: 0.6; font-weight: 700;
          font-family: 'Nunito', sans-serif;
          text-transform: uppercase; letter-spacing: 0.5px;
        }

        .learn-body { max-width: 1200px; margin: 0 auto; padding: 0 48px; }
        .level-section { margin-top: 56px; }

        .level-header { display: flex; align-items: center; gap: 16px; margin-bottom: 28px; }
        .level-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 18px; border-radius: 100px;
          font-size: 12px; font-weight: 800; font-family: 'Nunito', sans-serif;
        }
        .level-title {
          font-family: 'Nunito', sans-serif;
          font-size: 24px; font-weight: 900; color: #3b0764; margin: 0;
        }
        .level-divider {
          flex: 1; height: 1.5px;
          background: linear-gradient(90deg, rgba(167,139,250,0.3), transparent);
          border-radius: 2px;
        }

        .section-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
        }

        .tracks-section { margin-top: 64px; }
        .tracks-divider {
          height: 1.5px;
          background: linear-gradient(90deg, transparent, rgba(167,139,250,0.3), transparent);
          margin-bottom: 48px;
        }
        .tracks-title {
          font-family: 'Nunito', sans-serif; font-size: 22px;
          font-weight: 900; color: #3b0764; margin: 0 0 6px;
        }
        .tracks-sub {
          font-size: 14px; color: #7c3aed; opacity: 0.65;
          font-weight: 600; margin: 0 0 28px;
        }
        .tracks-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 16px;
        }
        .track-card {
          background: #fff; border-radius: 22px; padding: 24px;
          border: 1.5px solid rgba(167,139,250,0.2);
          box-shadow: 0 2px 12px rgba(124,58,237,0.06);
          transition: box-shadow 0.2s, transform 0.2s; cursor: pointer;
        }
        .track-card:hover {
          box-shadow: 0 8px 28px rgba(124,58,237,0.14);
          transform: translateY(-3px);
        }
        .track-icon { font-size: 28px; margin-bottom: 12px; }
        .track-label {
          font-family: 'Nunito', sans-serif; font-size: 14px;
          font-weight: 800; color: #3b0764; margin: 0 0 10px;
        }
        .track-lessons { display: flex; flex-direction: column; gap: 7px; }
        .track-lesson {
          display: flex; align-items: center; gap: 8px;
          font-size: 12px; color: #6b21a8;
          font-family: 'Nunito Sans', sans-serif; font-weight: 500; opacity: 0.75;
        }
        .track-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
        .track-cta {
          margin-top: 18px; display: inline-flex; align-items: center;
          gap: 5px; font-size: 12px; font-weight: 800;
          font-family: 'Nunito', sans-serif;
          border: none; background: none; cursor: pointer; padding: 0;
          transition: gap 0.15s;
        }
        .track-cta:hover { gap: 9px; }

        @media (max-width: 768px) {
          .learn-hero { padding: 40px 24px 52px; }
          .learn-body { padding: 0 20px; }
          .level-header { flex-wrap: wrap; }
          .level-divider { display: none; }
        }
      `}</style>

      <div className="learn-page">

        {/* ── HERO ── */}
        <div className="learn-hero">
          <div className="learn-hero-inner">
            <div className="learn-eyebrow">
              <BookOpen size={11} />
              Learning Center
            </div>
            <h1 className="learn-title">
              Master finance,<br /><span>one module</span> at a time.
            </h1>
            <p className="learn-subtitle">
              From budgeting basics to algorithmic trading — structured lessons that build real financial intelligence, step by step.
            </p>
            <div className="learn-stats">
              <div className="learn-stat"><strong>3</strong><span>Skill levels</span></div>
              <div className="learn-stat"><strong>12</strong><span>Modules</span></div>
              <div className="learn-stat"><strong>40+</strong><span>Lessons</span></div>
              <div className="learn-stat"><strong>4</strong><span>Tracks</span></div>
            </div>
          </div>
        </div>

        {/* ── COURSE LEVELS ── */}
        <div className="learn-body">
          {courseStructure.map((lvl) => {
            const LvlIcon = lvl.icon;
            return (
              <section key={lvl.level} className="level-section">
                <div className="level-header">
                  <div className="level-badge" style={{ background: lvl.accent, color: lvl.color }}>
                    <LvlIcon size={13} />
                    {lvl.badge}
                  </div>
                  <h2 className="level-title">{lvl.level} Level</h2>
                  <div className="level-divider" />
                </div>
                <div className="section-grid">
                  {lvl.sections.map((section) => (
                    <LessonCard
                      key={section.id}
                      section={section}
                      levelColor={lvl.color}
                      levelAccent={lvl.accent}
                      navigate={navigate}
                    />
                  ))}
                </div>
              </section>
            );
          })}

          {/* ── TRACKS ── */}
          <section className="tracks-section">
            <div className="tracks-divider" />
            <h2 className="tracks-title">📍 Cross-Category Tracks</h2>
            <p className="tracks-sub">Goal-based paths that cut across levels — pick a track and go deep.</p>
            <div className="tracks-grid">
              {tracks.map((track) => (
                <div key={track.id} className="track-card">
                  <div className="track-icon">{track.icon}</div>
                  <p className="track-label">{track.label}</p>
                  <div className="track-lessons">
                    {track.lessons.map((l, i) => (
                      <div key={i} className="track-lesson">
                        <div className="track-dot" style={{ background: track.color }} />
                        {l}
                      </div>
                    ))}
                  </div>
                  <button
                    className="track-cta"
                    style={{ color: track.color }}
                    onClick={() => navigate(`/track/${track.id}`)}
                  >
                    Start Track <ChevronRight size={13} />
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
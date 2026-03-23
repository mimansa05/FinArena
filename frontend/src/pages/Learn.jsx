import { useState } from "react";
import {
  BookOpen,
  Clock3,
  PlayCircle,
  ChevronRight,
  TrendingUp,
  Shield,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero.png";

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
        lessons: [
          "Income vs Expenses",
          "Budgeting (50-30-20 rule)",
          "Saving habits",
          "Emergency fund",
        ],
      },
      {
        id: "banking",
        title: "Banking Basics",
        icon: "🏦",
        duration: "15 min",
        lessons: [
          "Types of bank accounts",
          "Interest (simple vs compound)",
          "Fixed & Recurring Deposits",
          "Digital payments (UPI, cards)",
        ],
      },
      {
        id: "core-concepts",
        title: "Core Concepts",
        icon: "📐",
        duration: "10 min",
        lessons: [
          "Inflation",
          "Time value of money",
          "Power of compounding",
        ],
      },
      {
        id: "risk-awareness",
        title: "Risk Awareness",
        icon: "🛡️",
        duration: "8 min",
        lessons: [
          "Insurance basics (health, term)",
          "Financial fraud awareness",
        ],
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
        lessons: [
          "What are stocks",
          "How markets work",
          "IPO basics",
          "Market trends",
        ],
      },
      {
        id: "investment-options",
        title: "Investment Options",
        icon: "🗂️",
        duration: "20 min",
        lessons: [
          "Mutual Funds (SIP, lump sum)",
          "Bonds",
          "Gold (ETF, digital gold)",
          "Real estate basics",
        ],
      },
      {
        id: "analysis",
        title: "Analysis Basics",
        icon: "🔬",
        duration: "16 min",
        lessons: [
          "Fundamental analysis",
          "Technical analysis intro",
          "Risk vs return",
        ],
      },
      {
        id: "portfolio",
        title: "Portfolio Building",
        icon: "🎯",
        duration: "14 min",
        lessons: [
          "Diversification",
          "Asset allocation",
          "Long-term vs short-term investing",
        ],
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
        lessons: [
          "Derivatives (Futures & Options)",
          "Intraday & swing trading",
          "Algorithmic trading basics",
        ],
      },
      {
        id: "advanced-analysis",
        title: "Advanced Analysis",
        icon: "📊",
        duration: "20 min",
        lessons: [
          "Technical indicators (RSI, MACD)",
          "Candlestick patterns",
          "Financial statement deep dive",
        ],
      },
      {
        id: "wealth-strategies",
        title: "Wealth Strategies",
        icon: "🏛️",
        duration: "18 min",
        lessons: [
          "Tax planning",
          "Retirement planning",
          "Passive income strategies",
        ],
      },
      {
        id: "alternative",
        title: "Alternative Investments",
        icon: "🌐",
        duration: "15 min",
        lessons: [
          "Cryptocurrency",
          "Startups / angel investing",
          "REITs",
        ],
      },
    ],
  },
];

const tracks = [
  {
    id: "trading",
    label: "Trading Track",
    icon: "📉",
    color: "#7c3aed",
    lessons: ["Chart basics", "Strategies", "Options trading"],
  },
  {
    id: "stock-investing",
    label: "Stock Investing Track",
    icon: "🏢",
    color: "#9333ea",
    lessons: ["What is a stock", "Picking stocks", "Valuation models"],
  },
  {
    id: "personal",
    label: "Personal Finance Track",
    icon: "👛",
    color: "#6d28d9",
    lessons: ["Budgeting", "Investing basics", "Wealth management"],
  },
  {
    id: "fintech",
    label: "Fintech / AI Track",
    icon: "🤖",
    color: "#a855f7",
    lessons: [
      "Robo-advisors",
      "AI trading tools",
      "Digital finance platforms",
    ],
  },
];

/* ─────────────────────────────────────────
   LESSON CARD — glassmorphism style
───────────────────────────────────────── */
function LessonCard({ section, levelColor, levelAccent, navigate }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "30px",
        border: "1px solid rgba(255,255,255,0.45)",
        background: hovered
          ? "rgba(255,255,255,0.68)"
          : "rgba(255,255,255,0.52)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        padding: "24px",
        boxShadow: hovered
          ? "0 24px 60px rgba(168,85,247,0.18)"
          : "0 12px 40px rgba(168,85,247,0.09)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.25s ease",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "16px",
            background: `linear-gradient(145deg, rgba(255,255,255,0.9), ${levelAccent})`,
            border: "1px solid rgba(255,255,255,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "22px",
            flexShrink: 0,
            boxShadow: "0 4px 12px rgba(168,85,247,0.15)",
          }}
        >
          {section.icon}
        </div>
        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontSize: "16px",
              fontWeight: 800,
              color: "#3b0764",
              fontFamily: "'Nunito', sans-serif",
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            {section.title}
          </h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              marginTop: "5px",
            }}
          >
            <Clock3 size={12} color="#a78bfa" />
            <span
              style={{
                fontSize: "12px",
                color: "#a78bfa",
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 600,
              }}
            >
              {section.duration}
            </span>
          </div>
        </div>
      </div>

      {/* Lessons */}
      <ul
        style={{
          margin: "16px 0 0 0",
          padding: 0,
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {section.lessons.map((lesson, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "13px",
              color: "#6b21a8",
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 500,
            }}
          >
            <span
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.9), " +
                  levelAccent +
                  ")",
                border: "1px solid rgba(255,255,255,0.7)",
                color: levelColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
                fontWeight: 800,
                flexShrink: 0,
                fontFamily: "'Nunito', sans-serif",
                boxShadow: "0 2px 6px rgba(168,85,247,0.12)",
              }}
            >
              {i + 1}
            </span>
            {lesson}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div style={{ marginTop: "auto", paddingTop: "20px" }}>
        <button
          onClick={() => navigate(`/course/${section.id}`)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            width: "100%",
            background: `linear-gradient(135deg, ${levelColor}, #c084fc)`,
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            padding: "11px 20px",
            fontSize: "13px",
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "'Nunito', sans-serif",
            transition: "opacity 0.15s, transform 0.15s",
            boxShadow: `0 6px 20px ${levelColor}55`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.88";
            e.currentTarget.style.transform = "scale(1.02)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "scale(1)";
          }}
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
          padding: 28px 24px 100px;
          position: relative;
          overflow-x: hidden;
        }

        /* Rounded box wrapper */
        .learn-box {
          max-width: 1320px;
          margin: 0 auto;
          border-radius: 36px;
          border: 1px solid rgba(255,255,255,0.55);
          background: rgba(255,255,255,0.22);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          box-shadow: 0 8px 48px rgba(168,85,247,0.08), 0 0 0 1px rgba(255,255,255,0.3) inset;
          overflow: hidden;
          position: relative;
        }

        /* Ambient orbs matching hero-orb in landing */
        .learn-page::before {
          content: '';
          position: fixed;
          top: -120px; left: -100px;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(192,132,252,0.14) 0%, transparent 68%);
          pointer-events: none; z-index: 0;
        }
        .learn-page::after {
          content: '';
          position: fixed;
          top: 60px; right: -120px;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(139,92,246,0.11) 0%, transparent 68%);
          pointer-events: none; z-index: 0;
        }

        /* ── HERO ── */
        .learn-hero {
          position: relative; z-index: 1;
          padding: 72px 48px 80px;
          overflow: hidden;
          border-bottom: 1px solid rgba(255,255,255,0.5);
          /* Frosted glass panel — same as landing hero-board */
          background: linear-gradient(135deg,
            rgba(255,255,255,0.52) 0%,
            rgba(242,232,255,0.48) 55%,
            rgba(253,244,255,0.44) 100%);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .learn-hero::before {
          content: '';
          position: absolute;
          top: -100px; right: -80px;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(192,132,252,0.2) 0%, transparent 70%);
          pointer-events: none;
        }
        .learn-hero::after {
          content: '';
          position: absolute;
          bottom: -80px; left: 12%;
          width: 360px; height: 360px; border-radius: 50%;
          background: radial-gradient(circle, rgba(167,139,250,0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .learn-hero-inner {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
        }

        /* Eyebrow pill — matches hero-badge in landing */
        .learn-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.6);
          border: 1px solid rgba(168,85,247,0.25);
          backdrop-filter: blur(8px);
          color: #7c3aed; font-size: 11px; font-weight: 800;
          letter-spacing: 2px; text-transform: uppercase;
          padding: 7px 18px; border-radius: 100px;
          font-family: 'Nunito', sans-serif; margin-bottom: 22px;
          box-shadow: 0 4px 16px rgba(168,85,247,0.1);
        }

        .learn-title {
          font-family: 'Nunito', sans-serif;
          font-size: clamp(30px, 5vw, 50px);
          font-weight: 900; color: #3b0764;
          line-height: 1.18; margin: 0 0 18px; max-width: 600px;
          /* Matches hero-title tracking */
          letter-spacing: -0.03em;
        }
        .learn-title span {
          background: linear-gradient(135deg, #7c3aed 0%, #c084fc 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .learn-subtitle {
          color: #7a63a2;
          font-size: 1.05rem; line-height: 1.8;
          max-width: 520px; margin: 0; font-weight: 500;
        }

        /* Stats row — glass chips matching landing cards */
        .learn-stats {
          display: flex; gap: 12px; margin-top: 36px; flex-wrap: wrap;
        }
        .learn-stat {
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,0.45);
          background: rgba(255,255,255,0.52);
          backdrop-filter: blur(12px);
          padding: 14px 22px;
          box-shadow: 0 8px 24px rgba(168,85,247,0.1);
          text-align: center; min-width: 90px;
        }
        .learn-stat strong {
          display: block; font-size: 28px; font-weight: 900;
          font-family: 'Nunito', sans-serif;
          background: linear-gradient(135deg, #7c3aed, #c084fc);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .learn-stat span {
          font-size: 10px; color: #7c3aed; opacity: 0.65; font-weight: 700;
          font-family: 'Nunito', sans-serif;
          text-transform: uppercase; letter-spacing: 0.5px;
        }

        /* ── BODY ── */
        .learn-body {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto; padding: 0 48px 80px;

        }

        .level-section { margin-top: 60px; }

        /* Level header — glass pill badge */
        .level-header {
          display: flex; align-items: center; gap: 16px; margin-bottom: 28px;
        }
        .level-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 20px; border-radius: 100px;
          font-size: 12px; font-weight: 800; font-family: 'Nunito', sans-serif;
          border: 1px solid rgba(255,255,255,0.55);
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 14px rgba(168,85,247,0.12);
        }
        .level-title {
          font-family: 'Nunito', sans-serif;
          font-size: 24px; font-weight: 900; color: #3b0764; margin: 0;
          letter-spacing: -0.03em;
        }
        .level-divider {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, rgba(168,85,247,0.3), transparent);
        }

        .section-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
        }

        /* ── TRACKS ── */
        .tracks-section { margin-top: 60px; }
        .tracks-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent);
          margin-bottom: 60px;
        }
        .tracks-header-row {
          /* Glass card header matching landing "Why Choose" panel */
          border-radius: 30px;
          border: 1px solid rgba(255,255,255,0.45);
          background: rgba(255,255,255,0.52);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          padding: 28px 32px;
          margin-bottom: 24px;
          box-shadow: 0 16px 48px rgba(168,85,247,0.1);
        }
        .tracks-title {
          font-family: 'Nunito', sans-serif; font-size: 22px;
          font-weight: 900; color: #3b0764; margin: 0 0 6px;
          letter-spacing: -0.03em;
        }
        .tracks-sub {
          font-size: 14px; color: #7d63a1; font-weight: 500; margin: 0;
        }
        .tracks-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 16px;
        }

        /* Track card — glass card matching landing highlight articles */
        .track-card {
          border-radius: 30px;
          border: 1px solid rgba(255,255,255,0.45);
          background: rgba(255,255,255,0.52);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          padding: 26px;
          
          box-shadow: 0 12px 36px rgba(168,85,247,0.09);
          transition: box-shadow 0.25s, transform 0.25s; cursor: pointer;
        }
        .track-card:hover {
          box-shadow: 0 20px 56px rgba(168,85,247,0.18);
          transform: translateY(-5px);
          background: rgba(255,255,255,0.65);
        }
        .track-icon { font-size: 26px; margin-bottom: 12px; }
        .track-label {
          font-family: 'Nunito', sans-serif; font-size: 14px;
          font-weight: 800; color: #3b0764; margin: 0 0 12px;
        }
        .track-lessons { display: flex; flex-direction: column; gap: 8px; }
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
          .learn-hero { padding: 44px 24px 56px; }
          .learn-body { padding: 0 20px; }
          .level-header { flex-wrap: wrap; }
          .level-divider { display: none; }
          .learn-stats { gap: 10px; }
        }
      `}</style>
<main className="page-shell">
      <div className="learn-page">
        <div className="learn-box">

        {/* ── HERO ── */}
        <div className="learn-hero">
          <div className="learn-hero-inner">
            <div className="learn-eyebrow">
              <BookOpen size={11} />
              Learning Center
            </div>
            <h1 className="learn-title">
              Master finance,<br />
              <span>one module</span> at a time.
            </h1>
            <p className="learn-subtitle">
              From budgeting basics to algorithmic trading — structured lessons
              that build real financial intelligence, step by step.
            </p>

            <div className="learn-stats">
              {[
                { value: "3", label: "Skill levels" },
                { value: "12", label: "Modules" },
                { value: "40+", label: "Lessons" },
                { value: "4", label: "Tracks" },
              ].map((s) => (
                <div className="learn-stat" key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
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
                  <div
                    className="level-badge"
                    style={{
                      background: `linear-gradient(145deg, rgba(255,255,255,0.7), ${lvl.accent})`,
                      color: lvl.color,
                    }}
                  >
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
            <div className="tracks-header-row">
              <h2 className="tracks-title">📍 Cross-Category Tracks</h2>
              <p className="tracks-sub">
                Goal-based paths that cut across levels — pick a track and go deep.
              </p>
            </div>
            <div className="tracks-grid">
              {tracks.map((track) => (
                <div
                  key={track.id}
                  className="track-card"
                  onClick={() => navigate(`/track/${track.id}`)}
                >
                  <div className="track-icon">{track.icon}</div>
                  <p className="track-label">{track.label}</p>
                  <div className="track-lessons">
                    {track.lessons.map((l, i) => (
                      <div key={i} className="track-lesson">
                        <div
                          className="track-dot"
                          style={{ background: track.color }}
                        />
                        {l}
                      </div>
                    ))}
                  </div>
                  <button
                    className="track-cta"
                    style={{ color: track.color }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/track/${track.id}`);
                    }}
                  >
                    Start Track <ChevronRight size={13} />
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
        </div>{/* end learn-box */}
      </div></main>
    </>
  );
}
import { useParams, useNavigate } from "react-router-dom";
import { PlayCircle, ArrowLeft, Clock3, ChevronRight, BookOpen, Zap, BarChart2, Wallet } from "lucide-react";

/* ─────────────────────────────────────────
   TRACK DATA
───────────────────────────────────────── */
const trackData = {
  trading: {
    id: "trading",
    label: "Trading Track",
    icon: "📉",
    tagline: "From reading a chart to placing your first trade — methodically.",
    description:
      "A hands-on path through the mechanics of markets, technical signals, and execution strategies. You'll finish knowing how professional traders think, read price action, and manage risk.",
    color: "#7c3aed",
    accentLight: "#ede9fe",
    LucideIcon: Zap,
    roadmap: [
      { step: 1, label: "Understand the Market", detail: "How exchanges work, what moves prices, key terminology.", moduleId: "stock-market", level: "Beginner" },
      { step: 2, label: "Read Charts", detail: "Candlestick patterns, support & resistance, trend lines.", moduleId: "advanced-analysis", level: "Advanced" },
      { step: 3, label: "Apply Indicators", detail: "RSI, MACD, moving averages — when to trust them.", moduleId: "advanced-analysis", level: "Advanced" },
      { step: 4, label: "Master Options Trading", detail: "Calls, puts, premiums, and defined-risk strategies.", moduleId: "advanced-markets", level: "Advanced" },
      { step: 5, label: "Build a Trading Plan", detail: "Entry/exit rules, position sizing, stop-losses.", moduleId: "portfolio", level: "Intermediate" },
    ],
    lessons: [
      { moduleId: "stock-market", title: "Stock Market Basics", icon: "📈", duration: "18 min", level: "Beginner", desc: "How exchanges work, IPOs, market terminology, and your first Demat account." },
      { moduleId: "analysis", title: "Analysis Basics", icon: "🔬", duration: "16 min", level: "Intermediate", desc: "Fundamental vs technical analysis, P/E ratio, risk vs return framework." },
      { moduleId: "advanced-analysis", title: "Technical Indicators", icon: "📊", duration: "20 min", level: "Advanced", desc: "RSI, MACD, candlestick patterns, Golden Cross — the trader's toolkit." },
      { moduleId: "advanced-markets", title: "Futures & Options", icon: "⚡", duration: "22 min", level: "Advanced", desc: "Derivatives, intraday trading, swing trading, and algorithmic strategies." },
    ],
  },
  "stock-investing": {
    id: "stock-investing",
    label: "Stock Investing Track",
    icon: "🏢",
    tagline: "Pick great businesses, hold through noise, build lasting wealth.",
    description:
      "A value-investor's journey — learning to read a balance sheet, spot durable businesses, and build a concentrated portfolio with conviction.",
    color: "#9333ea",
    accentLight: "#f3e8ff",
    LucideIcon: BarChart2,
    roadmap: [
      { step: 1, label: "What Is a Stock?", detail: "Ownership, dividends, market cap — the basics.", moduleId: "stock-market", level: "Beginner" },
      { step: 2, label: "Value a Company", detail: "P/E, P/B, ROE — reading a stock like a business.", moduleId: "analysis", level: "Intermediate" },
      { step: 3, label: "Read Financial Statements", detail: "Income statement, balance sheet, cash flows.", moduleId: "advanced-analysis", level: "Advanced" },
      { step: 4, label: "Build a Portfolio", detail: "Diversification, asset allocation, rebalancing.", moduleId: "portfolio", level: "Intermediate" },
      { step: 5, label: "Long-Term Wealth Strategies", detail: "Tax planning, passive income, retirement corpus.", moduleId: "wealth-strategies", level: "Advanced" },
    ],
    lessons: [
      { moduleId: "stock-market", title: "Stock Market Basics", icon: "📈", duration: "18 min", level: "Beginner", desc: "What stocks are, how markets work, IPO basics, Sensex & Nifty." },
      { moduleId: "investment-options", title: "Investment Options", icon: "🗂️", duration: "20 min", level: "Intermediate", desc: "Mutual funds, bonds, gold, real estate — and when to use each." },
      { moduleId: "analysis", title: "Analysis Basics", icon: "🔬", duration: "16 min", level: "Intermediate", desc: "Fundamental analysis, key metrics, and understanding risk vs return." },
      { moduleId: "advanced-analysis", title: "Advanced Analysis", icon: "📊", duration: "20 min", level: "Advanced", desc: "Deep-dive into financial statements, technical indicators, and valuations." },
      { moduleId: "portfolio", title: "Portfolio Building", icon: "🎯", duration: "14 min", level: "Intermediate", desc: "Asset allocation models, diversification strategy, long vs short-term." },
    ],
  },
  personal: {
    id: "personal",
    label: "Personal Finance Track",
    icon: "👛",
    tagline: "Control your money before it controls you.",
    description:
      "Start from zero — budgeting, banking, insurance — and graduate to smart investing. The essential life skills no school ever taught.",
    color: "#6d28d9",
    accentLight: "#ddd6fe",
    LucideIcon: Wallet,
    roadmap: [
      { step: 1, label: "Budget Your Life", detail: "50-30-20 rule, tracking expenses, emergency fund.", moduleId: "personal-finance", level: "Beginner" },
      { step: 2, label: "Understand Banking", detail: "Accounts, interest, FDs, UPI, credit scores.", moduleId: "banking", level: "Beginner" },
      { step: 3, label: "Protect Yourself", detail: "Health & term insurance, fraud awareness.", moduleId: "risk-awareness", level: "Beginner" },
      { step: 4, label: "Start Investing", detail: "SIPs, mutual funds, compounding — your first rupee.", moduleId: "investment-options", level: "Intermediate" },
      { step: 5, label: "Manage Wealth", detail: "Tax planning, retirement, passive income streams.", moduleId: "wealth-strategies", level: "Advanced" },
    ],
    lessons: [
      { moduleId: "personal-finance", title: "Personal Finance", icon: "💰", duration: "12 min", level: "Beginner", desc: "Budgeting rules, saving habits, emergency funds, and avoiding lifestyle inflation." },
      { moduleId: "banking", title: "Banking Basics", icon: "🏦", duration: "15 min", level: "Beginner", desc: "Account types, compound interest, FDs, and mastering digital payments." },
      { moduleId: "core-concepts", title: "Core Concepts", icon: "📐", duration: "10 min", level: "Beginner", desc: "Inflation, time value of money, and the magic of compounding." },
      { moduleId: "risk-awareness", title: "Risk Awareness", icon: "🛡️", duration: "8 min", level: "Beginner", desc: "Insurance basics, fraud detection, and protecting your hard-earned money." },
      { moduleId: "wealth-strategies", title: "Wealth Strategies", icon: "🏛️", duration: "18 min", level: "Advanced", desc: "Tax-saving under 80C, retirement corpus planning, passive income." },
    ],
  },
  fintech: {
    id: "fintech",
    label: "Fintech / AI Track",
    icon: "🤖",
    tagline: "Where money meets machine intelligence.",
    description:
      "Explore how algorithms, robo-advisors, and AI are reshaping investing and finance — and how you can use these tools to your advantage today.",
    color: "#a855f7",
    accentLight: "#faf5ff",
    LucideIcon: BookOpen,
    roadmap: [
      { step: 1, label: "Finance Foundations", detail: "Understand traditional investing before the tech layer.", moduleId: "core-concepts", level: "Beginner" },
      { step: 2, label: "Digital Banking & Payments", detail: "UPI, neobanks, payment stacks — the fintech rails.", moduleId: "banking", level: "Beginner" },
      { step: 3, label: "Robo-Advisors & Algo Trading", detail: "How automated investing and execution systems work.", moduleId: "advanced-markets", level: "Advanced" },
      { step: 4, label: "Alternative Digital Assets", detail: "Crypto, DeFi, tokenized assets, REITs.", moduleId: "alternative", level: "Advanced" },
      { step: 5, label: "Portfolio in the AI Era", detail: "Using data-driven tools to allocate and rebalance.", moduleId: "portfolio", level: "Intermediate" },
    ],
    lessons: [
      { moduleId: "banking", title: "Banking Basics", icon: "🏦", duration: "15 min", level: "Beginner", desc: "Digital payments, UPI, and how fintech is disrupting traditional banking." },
      { moduleId: "advanced-markets", title: "Advanced Markets", icon: "⚡", duration: "22 min", level: "Advanced", desc: "Algorithmic trading, automation, and how machines execute strategies." },
      { moduleId: "analysis", title: "Analysis Basics", icon: "🔬", duration: "16 min", level: "Intermediate", desc: "The data behind decisions — fundamentals, technicals, and AI signals." },
      { moduleId: "alternative", title: "Alternative Investments", icon: "🌐", duration: "15 min", level: "Advanced", desc: "Crypto, blockchain, REITs, and angel investing in the digital age." },
    ],
  },
};

const levelColors = {
  Beginner:     { bg: "#ede9fe", text: "#7c3aed" },
  Intermediate: { bg: "#f3e8ff", text: "#9333ea" },
  Advanced:     { bg: "#ddd6fe", text: "#6d28d9" },
};

export default function Track() {
  const { id } = useParams();
  const navigate = useNavigate();
  const track = trackData[id];

  if (!track) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", background: "linear-gradient(160deg,#f0ebff,#faf7ff)" }}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "24px", color: "#3b0764", fontFamily: "'Nunito',sans-serif" }}>Track not found</h2>
          <button onClick={() => navigate("/learn")} style={{ marginTop: "16px", color: "#7c3aed", background: "none", border: "none", cursor: "pointer", fontFamily: "'Nunito',sans-serif", fontSize: "15px" }}>
            ← Back to Learn
          </button>
        </div>
      </div>
    );
  }

  const totalMins = track.lessons.reduce((acc, l) => acc + parseInt(l.duration), 0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Nunito+Sans:wght@400;500;600&display=swap');

        .tp * { box-sizing: border-box; }

        .tp {
          font-family: 'Nunito Sans', sans-serif;
          min-height: 100vh;
          background: linear-gradient(160deg, #f0ebff 0%, #f8f5ff 40%, #faf7ff 70%, #ede9fe 100%);
        }

        /* ── HERO ── */
        .tp-hero {
          position: relative; overflow: hidden;
          padding: 56px 48px 68px;
          background: linear-gradient(135deg, #ede9fe 0%, #f3eeff 45%, #faf7ff 100%);
          border-bottom: 1.5px solid rgba(167,139,250,0.18);
        }
        .tp-hero::before {
          content: ''; position: absolute;
          top: -120px; right: -80px;
          width: 480px; height: 480px; border-radius: 50%;
          background: radial-gradient(circle, rgba(192,132,252,0.2) 0%, transparent 65%);
          pointer-events: none;
        }
        .tp-hero::after {
          content: ''; position: absolute;
          bottom: -80px; left: 8%;
          width: 320px; height: 320px; border-radius: 50%;
          background: radial-gradient(circle, rgba(167,139,250,0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .tp-hero-inner { position: relative; z-index: 1; max-width: 900px; margin: 0 auto; }

        .tp-back {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(124,58,237,0.06);
          border: 1.5px solid rgba(124,58,237,0.18);
          color: #7c3aed; font-size: 12px; font-weight: 700;
          font-family: 'Nunito', sans-serif; letter-spacing: 0.4px;
          padding: 6px 14px; border-radius: 100px; cursor: pointer;
          margin-bottom: 30px;
          transition: background 0.15s, border-color 0.15s;
        }
        .tp-back:hover { background: rgba(124,58,237,0.1); border-color: rgba(124,58,237,0.35); }

        .tp-eyebrow {
          display: inline-flex; align-items: center; gap: 9px;
          background: rgba(124,58,237,0.08);
          border: 1.5px solid rgba(124,58,237,0.2);
          padding: 6px 16px; border-radius: 100px;
          font-size: 11px; font-weight: 800; letter-spacing: 2px;
          text-transform: uppercase; color: #7c3aed;
          font-family: 'Nunito', sans-serif; margin-bottom: 18px;
        }

        .tp-title {
          font-family: 'Nunito', sans-serif;
          font-size: clamp(28px, 5vw, 44px);
          font-weight: 900; color: #3b0764;
          line-height: 1.15; margin: 0 0 12px;
        }
        .tp-tagline {
          font-size: 16px; color: #6b21a8; font-weight: 600;
          opacity: 0.75; line-height: 1.6; max-width: 520px; margin: 0 0 8px;
        }
        .tp-desc {
          font-size: 14px; color: #6b21a8; opacity: 0.5;
          line-height: 1.75; max-width: 560px; margin: 0;
        }

        .tp-meta { display: flex; gap: 36px; margin-top: 32px; flex-wrap: wrap; }
        .tp-meta-item { display: flex; flex-direction: column; gap: 2px; }
        .tp-meta-item strong {
          font-family: 'Nunito', sans-serif; font-size: 28px; font-weight: 900;
          background: linear-gradient(135deg, #7c3aed, #c084fc);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .tp-meta-item span {
          font-size: 11px; color: #7c3aed; opacity: 0.55; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.5px;
          font-family: 'Nunito', sans-serif;
        }

        /* ── BODY ── */
        .tp-body { max-width: 900px; margin: 0 auto; padding: 56px 48px 80px; }

        .tp-section-label {
          font-family: 'Nunito', sans-serif;
          font-size: 11px; font-weight: 800; letter-spacing: 3px;
          text-transform: uppercase; color: rgba(124,58,237,0.4); margin-bottom: 6px;
        }
        .tp-section-title {
          font-family: 'Nunito', sans-serif; font-size: 22px;
          font-weight: 900; color: #3b0764; margin: 0 0 36px;
        }

        /* ── ROADMAP ── */
        .tp-roadmap { position: relative; }
        .tp-roadmap-line {
          position: absolute; left: 22px; top: 23px; bottom: 23px; width: 2px;
          background: linear-gradient(180deg, rgba(124,58,237,0.3) 0%, rgba(124,58,237,0.04) 100%);
          border-radius: 2px; pointer-events: none;
        }
        .tp-step { display: flex; gap: 20px; align-items: flex-start; position: relative; z-index: 1; }
        .tp-step-node {
          width: 46px; height: 46px; border-radius: 50%; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Nunito', sans-serif; font-size: 13px; font-weight: 900;
          color: #7c3aed; background: #fff;
          border: 2px solid rgba(124,58,237,0.22);
          box-shadow: 0 2px 10px rgba(124,58,237,0.08);
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .tp-step:hover .tp-step-node {
          border-color: #7c3aed; background: #ede9fe;
          box-shadow: 0 4px 18px rgba(124,58,237,0.18);
        }
        .tp-step-body { padding: 8px 0 32px; flex: 1; }
        .tp-step-level {
          font-size: 10px; font-weight: 800; letter-spacing: 1.5px;
          text-transform: uppercase; font-family: 'Nunito', sans-serif; margin-bottom: 4px;
        }
        .tp-step-name {
          font-family: 'Nunito', sans-serif; font-size: 16px;
          font-weight: 800; color: #3b0764; margin: 0 0 4px; line-height: 1.3;
        }
        .tp-step-detail { font-size: 13px; color: #6b21a8; opacity: 0.5; font-weight: 500; line-height: 1.55; }
        .tp-step-btn {
          margin-top: 10px;
          display: inline-flex; align-items: center; gap: 5px;
          background: rgba(124,58,237,0.07);
          border: 1.5px solid rgba(124,58,237,0.2);
          color: #7c3aed; font-size: 11px; font-weight: 700;
          font-family: 'Nunito', sans-serif;
          padding: 5px 13px; border-radius: 100px; cursor: pointer;
          transition: background 0.15s, border-color 0.15s;
        }
        .tp-step-btn:hover { background: rgba(124,58,237,0.13); border-color: #7c3aed; }

        /* ── DIVIDER ── */
        .tp-divider {
          height: 1.5px; margin: 52px 0 48px;
          background: linear-gradient(90deg, transparent, rgba(167,139,250,0.3), transparent);
        }

        /* ── LESSON CARDS ── */
        .tp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
          gap: 18px;
        }
        .tp-card {
          background: #fff; border-radius: 24px; padding: 22px;
          border: 1.5px solid rgba(167,139,250,0.18);
          box-shadow: 0 2px 14px rgba(124,58,237,0.06);
          display: flex; flex-direction: column;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .tp-card:hover { box-shadow: 0 10px 32px rgba(124,58,237,0.14); transform: translateY(-4px); }
        .tp-card-top { display: flex; align-items: flex-start; gap: 13px; margin-bottom: 11px; }
        .tp-card-icon {
          width: 46px; height: 46px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-size: 20px; flex-shrink: 0;
        }
        .tp-card-title {
          font-family: 'Nunito', sans-serif; font-size: 15px;
          font-weight: 800; color: #3b0764; margin: 0 0 5px; line-height: 1.3;
        }
        .tp-card-meta { display: flex; align-items: center; gap: 7px; flex-wrap: wrap; }
        .tp-card-duration {
          display: flex; align-items: center; gap: 4px;
          font-size: 11px; color: #a78bfa; font-weight: 600;
          font-family: 'Nunito', sans-serif;
        }
        .tp-card-level {
          font-size: 10px; font-weight: 800; letter-spacing: 1px;
          text-transform: uppercase; font-family: 'Nunito', sans-serif;
          padding: 2px 9px; border-radius: 100px;
        }
        .tp-card-desc { font-size: 12px; color: #6b21a8; opacity: 0.6; line-height: 1.65; flex: 1; margin-bottom: 16px; }
        .tp-card-btn {
          display: inline-flex; align-items: center; justify-content: center;
          gap: 7px; width: 100%;
          background: linear-gradient(135deg, #7c3aed, #c084fc);
          color: #fff; border: none; border-radius: 50px;
          padding: 10px 18px; font-size: 12px; font-weight: 700;
          font-family: 'Nunito', sans-serif; cursor: pointer;
          box-shadow: 0 4px 14px rgba(124,58,237,0.28);
          transition: opacity 0.15s, transform 0.15s;
        }
        .tp-card-btn:hover { opacity: 0.88; transform: scale(1.02); }

        /* ── CTA BAR ── */
        .tp-cta {
          margin-top: 52px; padding: 30px 34px; border-radius: 24px;
          background: linear-gradient(135deg, #ede9fe 0%, #f3e8ff 100%);
          border: 1.5px solid rgba(124,58,237,0.18);
          box-shadow: 0 4px 24px rgba(124,58,237,0.08);
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; flex-wrap: wrap;
        }
        .tp-cta-text h3 {
          font-family: 'Nunito', sans-serif; font-size: 18px;
          font-weight: 900; color: #3b0764; margin: 0 0 5px;
        }
        .tp-cta-text p { font-size: 13px; color: #6b21a8; opacity: 0.6; margin: 0; font-weight: 500; }
        .tp-cta-btn {
          display: inline-flex; align-items: center; gap: 9px;
          background: linear-gradient(135deg, #7c3aed, #c084fc);
          color: #fff; border: none; border-radius: 50px;
          padding: 13px 28px; font-size: 14px; font-weight: 800;
          font-family: 'Nunito', sans-serif; cursor: pointer;
          box-shadow: 0 6px 22px rgba(124,58,237,0.32);
          transition: opacity 0.15s, transform 0.15s; white-space: nowrap;
        }
        .tp-cta-btn:hover { opacity: 0.88; transform: scale(1.03); }

        @media (max-width: 640px) {
          .tp-hero { padding: 36px 20px 48px; }
          .tp-body { padding: 36px 20px 60px; }
        }
      `}</style>
<main className="page-shell">
      <div className="tp">

        {/* ── HERO ── */}
        <div className="tp-hero">
          <div className="tp-hero-inner">
            <button className="tp-back" onClick={() => navigate("/learn")}>
              <ArrowLeft size={12} /> Back to Learn
            </button>
            <div className="tp-eyebrow">
              <span style={{ fontSize: "15px" }}>{track.icon}</span>
              Learning Track
            </div>
            <h1 className="tp-title">{track.label}</h1>
            <p className="tp-tagline">{track.tagline}</p>
            <p className="tp-desc">{track.description}</p>
            <div className="tp-meta">
              <div className="tp-meta-item"><strong>{track.roadmap.length}</strong><span>Steps</span></div>
              <div className="tp-meta-item"><strong>{track.lessons.length}</strong><span>Modules</span></div>
              <div className="tp-meta-item"><strong>{totalMins} min</strong><span>Total Time</span></div>
            </div>
          </div>
        </div>

        {/* ── BODY ── */}
        <div className="tp-body">

          {/* ROADMAP */}
          <div className="tp-section-label">Your Path</div>
          <h2 className="tp-section-title">Step-by-Step Roadmap</h2>
          <div className="tp-roadmap">
            <div className="tp-roadmap-line" />
            {track.roadmap.map((step) => {
              const lvl = levelColors[step.level] || levelColors.Beginner;
              return (
                <div className="tp-step" key={step.step}>
                  <div className="tp-step-node">{String(step.step).padStart(2, "0")}</div>
                  <div className="tp-step-body">
                    <div className="tp-step-level" style={{ color: lvl.text }}>{step.level}</div>
                    <p className="tp-step-name">{step.label}</p>
                    <p className="tp-step-detail">{step.detail}</p>
                    <button className="tp-step-btn" onClick={() => navigate(`/course/${step.moduleId}`)}>
                      Open Module <ChevronRight size={11} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* LESSON CARDS */}
          <div className="tp-divider" />
          <div className="tp-section-label">Curated Modules</div>
          <h2 className="tp-section-title">Lessons in This Track</h2>
          <div className="tp-grid">
            {track.lessons.map((lesson) => {
              const lvl = levelColors[lesson.level] || levelColors.Beginner;
              return (
                <div className="tp-card" key={lesson.moduleId + lesson.title}>
                  <div className="tp-card-top">
                    <div className="tp-card-icon" style={{ background: lvl.bg }}>{lesson.icon}</div>
                    <div>
                      <p className="tp-card-title">{lesson.title}</p>
                      <div className="tp-card-meta">
                        <span className="tp-card-duration"><Clock3 size={11} />{lesson.duration}</span>
                        <span className="tp-card-level" style={{ background: lvl.bg, color: lvl.text }}>{lesson.level}</span>
                      </div>
                    </div>
                  </div>
                  <p className="tp-card-desc">{lesson.desc}</p>
                  <button className="tp-card-btn" onClick={() => navigate(`/course/${lesson.moduleId}`)}>
                    <PlayCircle size={14} /> Start Lesson
                  </button>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="tp-cta">
            <div className="tp-cta-text">
              <h3>Ready to begin?</h3>
              <p>Start with Step 1 and work through at your own pace.</p>
            </div>
            <button className="tp-cta-btn" onClick={() => navigate(`/course/${track.roadmap[0].moduleId}`)}>
              <PlayCircle size={16} /> Start Track
            </button>
          </div>

        </div>
      </div></main>
    </>
  );
}
import {
  ArrowRight,
  BadgeDollarSign,
  BookOpen,
  CheckCircle2,
  Trophy,
} from "lucide-react";
import { Link } from "react-router-dom";
import gameImage from "../assets/game.png";
import rocketImage from "../assets/rocket.png";

const highlights = [
  {
    icon: BookOpen,
    title: "Learn Courses",
    text: "Short, visual finance lessons that feel easy to start and satisfying to finish.",
  },
  {
    icon: Trophy,
    title: "Play and Compete",
    text: "Gamified challenges and leaderboards keep every session active and rewarding.",
  },
  {
    icon: BadgeDollarSign,
    title: "Build Confidence",
    text: "Practice saving, budgeting, and investing through friendly guided experiences.",
  },
];

const reasons = [
  "A magical finance experience instead of a plain learning dashboard",
  "Interactive modules, quizzes, and games designed for retention",
  "Clear pathways for both learners and admins",
  "A consistent purple fantasy visual system across the whole site",
];

export default function Landing() {
  return (
    <main className="page-shell">
      <section className="hero-board hero-dreamscape overflow-hidden">
        <div className="hero-orb hero-orb-left" />
        <div className="hero-orb hero-orb-right" />
        <div className="hero-light-beam" />
        <div className="hero-particles hero-particles-left" />
        <div className="hero-particles hero-particles-right" />

        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 py-14 lg:grid-cols-[0.88fr_1.12fr] lg:px-12 lg:py-16">
          <div className="relative z-10">
            <h1 className="hero-title">
              Learn finance in a fun and interactive way with{" "}
              <span className="hero-title-brand">FinArena</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#7a63a2] md:text-[1.32rem]">
              Explore finance through playful courses, game-style challenges,
              and quizzes that make learning feel rewarding from day one.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link to="/signup" className="primary-pill justify-center">
                Get Started
                <ArrowRight size={18} />
              </Link>
              <Link to="/learn" className="secondary-pill justify-center">
                Explore Courses
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="hero-badge">Courses</span>
              <span className="hero-badge">Quizzes</span>
              <span className="hero-badge">Games</span>
              <span className="hero-badge">Leaderboards</span>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:max-w-[47rem]">
              {highlights.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-[30px] border border-white/40 bg-white/52 p-6 shadow-[0_24px_70px_rgba(168,85,247,0.1)] backdrop-blur-xl"
                >
                  <div className="icon-chip">
                    <Icon size={20} />
                  </div>
                  <h2 className="mt-4 text-[1.75rem] font-semibold tracking-[-0.03em] text-[#5f2e99]">
                    {title}
                  </h2>
                  <p className="mt-2 text-[0.98rem] leading-7 text-[#7d63a1]">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-scene">
            <div className="hero-ring hero-ring-lg" />
            <div className="hero-ring hero-ring-sm" />
            <div className="hero-scene-glow" />

            <div className="hero-course-panel">
              <div className="hero-panel-icon">
                <BookOpen size={24} />
              </div>
              <h3 className="hero-course-title mt-8 text-[2.45rem] font-semibold leading-[0.96] tracking-[-0.05em] text-[#57238f] md:text-[3rem]">
                Learn Courses
              </h3>
              <p className="mt-5 max-w-[17rem] text-[1.05rem] font-medium leading-8 text-[#7f679f]">
                Dive into engaging lessons designed to train your finance
                mindset in a playful way.
              </p>
              <Link to="/learn" className="primary-pill mt-8 w-fit">
                Start Learning
              </Link>
            </div>

            <div className="hero-image-card hero-image-card-rocket hero-mask-soft">
              <img
                src={rocketImage}
                alt="FinArena rocket illustration"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-6xl gap-8 px-4 pb-24 sm:px-6 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="rounded-[34px] border border-white/40 bg-white/58 p-8 shadow-[0_24px_70px_rgba(168,85,247,0.12)] backdrop-blur-xl">
          <span className="eyebrow">Why Choose FinArena</span>
          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#5f2e99]">
            A seamless finance world that feels dreamy, playful, and modern.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#7d63a1]">
            FinArena blends illustration, lighting, motion-inspired layering,
            and guided learning into one unified purple environment.
          </p>

          <div className="mt-8 grid gap-4">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="flex items-start gap-3 rounded-[22px] bg-[linear-gradient(145deg,_rgba(255,255,255,0.7),_rgba(242,232,255,0.7))] px-4 py-4"
              >
                <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(145deg,_#f0abfc,_#8b5cf6)] text-white shadow-[0_10px_20px_rgba(168,85,247,0.22)]">
                  <CheckCircle2 size={16} />
                </span>
                <p className="text-base leading-7 text-[#70518f]">{reason}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[34px] border border-white/40 bg-[linear-gradient(160deg,_rgba(255,255,255,0.58),_rgba(237,219,255,0.74))] p-6 shadow-[0_24px_70px_rgba(168,85,247,0.12)] backdrop-blur-xl">
          <div className="overflow-hidden rounded-[28px] border border-white/35">
            <img
              src={gameImage}
              alt="FinArena game rewards scene"
              className="hero-mask-soft h-auto w-full object-cover"
            />
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[24px] bg-white/70 p-5 text-center backdrop-blur">
              <p className="text-sm uppercase tracking-[0.18em] text-[#ab8bcc]">
                Modules
              </p>
              <p className="mt-2 text-3xl font-semibold text-[#5f2e99]">40+</p>
            </div>
            <div className="rounded-[24px] bg-white/70 p-5 text-center backdrop-blur">
              <p className="text-sm uppercase tracking-[0.18em] text-[#ab8bcc]">
                Challenges
              </p>
              <p className="mt-2 text-3xl font-semibold text-[#5f2e99]">25+</p>
            </div>
            <div className="rounded-[24px] bg-white/70 p-5 text-center backdrop-blur">
              <p className="text-sm uppercase tracking-[0.18em] text-[#ab8bcc]">
                Rewards
              </p>
              <p className="mt-2 text-3xl font-semibold text-[#5f2e99]">XP</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import { Activity, BadgeDollarSign, Target, TrendingUp } from "lucide-react";

const stats = [
  { label: "Learning Streak", value: "14 days", icon: Activity },
  { label: "Modules Completed", value: "28", icon: Target },
  { label: "Quiz Accuracy", value: "87%", icon: TrendingUp },
  { label: "Rewards Earned", value: "2,450 XP", icon: BadgeDollarSign },
];

const timeline = [
  {
    phase: "Week 1",
    title: "Budgeting Basics",
    text: "Completed your first module set and unlocked the starter budgeting badge.",
  },
  {
    phase: "Week 2",
    title: "Saving Habits",
    text: "Built consistency with mini challenges focused on emergency funds and goals.",
  },
  {
    phase: "Week 3",
    title: "Investing Intro",
    text: "Explored portfolio concepts and improved quiz accuracy through practice rounds.",
  },
  {
    phase: "Next Up",
    title: "Risk and Reward",
    text: "Your next checkpoint focuses on comparing outcomes across different financial choices.",
  },
];

export default function Dashboard() {
  return (
    <main className="page-shell">
      <section className="content-board">
        <div className="mb-10 max-w-3xl">
          <span className="eyebrow">Dashboard</span>
          <h1 className="page-title">Track your progress and keep the momentum going.</h1>
          <p className="page-copy">
            Your dashboard brings together learning streaks, quiz performance,
            and rewards so progress feels visible every day.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map(({ label, value, icon: Icon }) => (
            <article key={label} className="soft-card">
              <div className="icon-chip">
                <Icon size={22} />
              </div>
              <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-[#9c7fc0]">
                {label}
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#5f2e99]">
                {value}
              </h2>
            </article>
          ))}
        </div>

        <section className="mt-10 rounded-[32px] border border-white/45 bg-white/60 p-6 shadow-[0_24px_70px_rgba(168,85,247,0.12)] backdrop-blur-xl md:p-8">
          <div className="max-w-2xl">
            <span className="eyebrow">Timeline</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#5f2e99] md:text-[2.4rem]">
              Your learning journey at a glance.
            </h2>
            <p className="mt-4 text-base leading-8 text-[#7d63a1]">
              Review where you started, what you have completed, and what comes
              next in your dashboard path.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {timeline.map(({ phase, title, text }, index) => (
              <article
                key={phase}
                className="grid gap-4 rounded-[28px] bg-[linear-gradient(145deg,_rgba(255,255,255,0.82),_rgba(242,232,255,0.72))] p-5 md:grid-cols-[auto_1fr] md:items-start md:gap-6"
              >
                <div className="flex items-start gap-4 md:flex-col md:items-center">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(145deg,_#c084fc,_#8b5cf6)] text-lg font-semibold text-white shadow-[0_14px_30px_rgba(168,85,247,0.24)]">
                    {index + 1}
                  </span>
                  {index < timeline.length - 1 ? (
                    <span className="hidden h-16 w-px bg-[linear-gradient(180deg,_rgba(192,132,252,0.9),_rgba(192,132,252,0.08))] md:block" />
                  ) : null}
                </div>

                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#a07bc7]">
                    {phase}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#5f2e99]">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-[1rem] leading-8 text-[#7b639d]">
                    {text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

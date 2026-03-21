import { BarChart3, PiggyBank, TrendingUp } from "lucide-react";

const actions = [
  {
    title: "Invest Rs 1000",
    text: "Simulate putting money into a long-term diversified portfolio.",
    icon: TrendingUp,
  },
  {
    title: "Save Rs 500",
    text: "Build a buffer and see how consistent small savings compound.",
    icon: PiggyBank,
  },
  {
    title: "Compare Outcomes",
    text: "Review what changes when timelines and risk levels shift.",
    icon: BarChart3,
  },
];

export default function Simulator() {
  return (
    <main className="page-shell">
      <section className="content-board">
        <div className="mb-10 max-w-3xl">
          <span className="eyebrow">Simulator</span>
          <h1 className="page-title">Practice financial choices before making real ones.</h1>
          <p className="page-copy">
            Explore saving, investing, and tradeoff scenarios in a playful
            environment designed to build intuition.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {actions.map(({ title, text, icon: Icon }) => (
            <article key={title} className="soft-card">
              <div className="icon-chip">
                <Icon size={22} />
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-[#5f2e99]">{title}</h2>
              <p className="mt-3 text-[#7d63a1]">{text}</p>
              <button className="secondary-pill mt-7">Try Scenario</button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

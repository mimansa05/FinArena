import { HeartHandshake, Lightbulb, ShieldCheck } from "lucide-react";

const pillars = [
  {
    title: "Friendly Learning",
    text: "We make finance less intimidating by turning core ideas into visual, interactive experiences.",
    icon: HeartHandshake,
  },
  {
    title: "Practical Confidence",
    text: "Lessons focus on decisions people actually face, from saving to budgeting to first investments.",
    icon: Lightbulb,
  },
  {
    title: "Safe Exploration",
    text: "Practice tools and quizzes let learners experiment before real-world money is involved.",
    icon: ShieldCheck,
  },
];

export default function About() {
  return (
    <main className="page-shell">
      <section className="content-board">
        <div className="mb-10 max-w-3xl">
          <span className="eyebrow">About Us</span>
          <h1 className="page-title">FinArena exists to make financial literacy feel exciting.</h1>
          <p className="page-copy">
            We blend storytelling, interactive challenges, and rewarding progress
            systems so learners stay curious while building real money skills.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map(({ title, text, icon: Icon }) => (
            <article key={title} className="soft-card">
              <div className="icon-chip">
                <Icon size={22} />
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-[#5f2e99]">{title}</h2>
              <p className="mt-3 text-[#7d63a1]">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

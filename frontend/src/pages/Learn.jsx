import { BookOpen, Clock3, PlayCircle } from "lucide-react";

const modules = [
  {
    title: "Money Basics",
    description: "Learn budgeting, saving, and healthy spending habits.",
    length: "12 min",
  },
  {
    title: "Investing 101",
    description: "Understand risk, returns, and beginner-friendly strategies.",
    length: "18 min",
  },
  {
    title: "Credit & Loans",
    description: "Explore scores, interest, and smart borrowing decisions.",
    length: "15 min",
  },
];

export default function Learn() {
  return (
    <main className="page-shell">
      <section className="content-board">
        <div className="mb-10 max-w-3xl">
          <span className="eyebrow">Learn</span>
          <h1 className="page-title">Interactive finance lessons built for momentum.</h1>
          <p className="page-copy">
            Each module mixes practical concepts with short exercises so finance
            feels approachable from the very first click.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {modules.map((module) => (
            <article key={module.title} className="soft-card">
              <div className="icon-chip">
                <BookOpen size={22} />
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-[#5f2e99]">
                {module.title}
              </h2>
              <p className="mt-3 text-[#7d63a1]">{module.description}</p>
              <div className="mt-6 flex items-center justify-between text-sm text-[#8b6cad]">
                <span className="inline-flex items-center gap-2">
                  <Clock3 size={16} />
                  {module.length}
                </span>
                <button className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,_#9b5cf6,_#c084fc)] px-4 py-2.5 font-semibold text-white">
                  <PlayCircle size={16} />
                  Start
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

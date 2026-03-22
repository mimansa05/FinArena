import { useParams } from "react-router-dom";
import { useState } from "react";
import Quiz from "./Quiz";

const modules = [
  {
    id: "money",
    title: "Money Basics",
    video: "https://www.youtube.com/embed/A9Xq3FGjpZA?si=UenC9wN2-ihacLtU",
    content: `

Money management is not just about how much you earn , it’s about how you use what you earn. Many people assume that earning more money will automatically solve their financial problems, but without proper management, even high income can disappear quickly. This is why understanding the basics of money is essential.
At its core, managing money involves three simple things: earning, spending, and saving. While earning provides you with money, spending and saving determine your financial stability. If you spend everything you earn, you remain financially vulnerable no matter how high your income is.
Saving is the foundation of financial security. It means setting aside a portion of your income for future use instead of spending it immediately. This habit protects you from unexpected situations such as medical emergencies, job loss, or sudden expenses. Without savings, even a small problem can become a major crisis.
One of the most important concepts in money management is the idea of paying yourself first. Instead of saving whatever is left after spending, you save first and then spend what remains. This simple shift ensures that saving becomes consistent.
Another key concept is delayed gratification. This means resisting the temptation to spend money immediately in favor of long-term benefits. For example, choosing to save money instead of buying unnecessary items helps build financial discipline.
Emergency funds are crucial. Ideally, you should save enough money to cover three to six months of your expenses. This gives you a safety net and reduces stress during uncertain times.
Consistency matters more than amount. Even small savings, when done regularly, can grow into significant amounts over time.
    `,
  },
  {
    id: "budgeting",
    title: "Budgeting & Saving",
    content: `
Budgeting means planning how to use your money.

A simple method:
50% needs
30% wants
20% savings

It helps you stay in control and avoid overspending.
    `,
  },
  {
    id: "investing",
    title: "Investing Fundamentals",
    content: `
Investing helps your money grow over time.

It involves risk, but long-term investing reduces uncertainty.

Compounding allows your money to grow faster over time.
    `,
  }
];

export default function Course() {
  const { id } = useParams();
  const [tab, setTab] = useState("learn");

  const module = modules.find((m) => m.id === id);

  if (!module) return <h2>Course not found</h2>;

  return (
    <div className="flex gap-6 p-6">

      {/*  SIDEBAR */}
      <div className="w-64 soft-card p-5">
        <h3 className="text-lg font-semibold mb-4 text-[#5f2e99]">
          {module.title}
        </h3>

        <button
          onClick={() => setTab("learn")}
          className={`block w-full text-left mb-3 px-3 py-2 rounded-lg ${
            tab === "learn"
              ? "bg-purple-100 text-purple-700 font-semibold"
              : "text-gray-600"
          }`}
        >
          Study Material
        </button>

        <button
          onClick={() => setTab("quiz")}
          className={`block w-full text-left px-3 py-2 rounded-lg ${
            tab === "quiz"
              ? "bg-purple-100 text-purple-700 font-semibold"
              : "text-gray-600"
          }`}
        >
          Quiz
        </button>
      </div>
 

      {/*  MAIN CONTENT */}
      <div className="flex-1 soft-card p-6">
        {tab === "learn" ? (
          <>

  {/* GROUP */}
  <div style={{ marginBottom: "5px" }}>
    
    <h2  className="text-2xl font-semibold text-[#5f2e99]" style={{ marginBottom: "35px" }}>
      {module.title}
    </h2>

   <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-5 rounded-3xl shadow-lg border border-purple-200">
  <iframe
    width="100%"
    height="315"
    src={module.video}
    className="rounded-2xl"
    allowFullScreen
  />
</div>

  </div>

            <p className="mt-4 whitespace-pre-line text-[#6f4798]">
              {module.content}
            </p>

            <button
              onClick={() => setTab("quiz")}
              className="primary-pill mt-6 "
            >
              Start Quiz 
            </button>
          </>
        ) : (
          <Quiz />
        )}
      </div>
    </div>
  );
}
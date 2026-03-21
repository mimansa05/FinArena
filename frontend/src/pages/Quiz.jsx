import { useState } from "react";
import { CheckCircle2, RotateCcw } from "lucide-react";

const questions = [
  {
    question: "What is a healthy emergency fund goal for beginners?",
    options: ["1 week of expenses", "3 to 6 months of expenses", "1 luxury purchase", "No savings needed"],
    answer: "3 to 6 months of expenses",
  },
  {
    question: "Which habit supports good budgeting?",
    options: ["Tracking income and expenses", "Ignoring small purchases", "Spending first, planning later", "Using debt for everything"],
    answer: "Tracking income and expenses",
  },
  {
    question: "Which choice is generally more beginner-friendly?",
    options: ["Random meme coins", "Diversified mutual funds", "Unplanned leverage", "Borrowing to invest"],
    answer: "Diversified mutual funds",
  },
];

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQ].answer) {
      setScore((current) => current + 1);
    }

    const nextQ = currentQ + 1;
    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
      return;
    }

    setShowResult(true);
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <main className="page-shell">
      <section className="content-board">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">Quiz Arena</span>
          <h1 className="page-title">Challenge what you know and level up fast.</h1>
          <p className="page-copy">
            Short quizzes reinforce the concepts you just learned and keep the
            experience active instead of passive.
          </p>

          <div className="soft-card mt-10">
            {showResult ? (
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[linear-gradient(145deg,_#f0abfc,_#8b5cf6)] text-white shadow-[0_20px_40px_rgba(168,85,247,0.3)]">
                  <CheckCircle2 size={36} />
                </div>
                <h2 className="mt-6 text-3xl font-semibold text-[#5f2e99]">
                  Your score: {score} / {questions.length}
                </h2>
                <p className="mt-3 text-[#7d63a1]">
                  Keep going. Repetition is how confidence becomes instinct.
                </p>
                <button className="primary-pill mt-8" onClick={restartQuiz}>
                  <RotateCcw size={18} />
                  Restart Quiz
                </button>
              </div>
            ) : (
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#9c7fc0]">
                  Question {currentQ + 1} of {questions.length}
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#5f2e99]">
                  {questions[currentQ].question}
                </h2>
                <div className="mt-8 grid gap-4">
                  {questions[currentQ].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      className="rounded-[22px] border border-white/50 bg-white/75 px-5 py-4 text-left text-base font-medium text-[#6f4798] shadow-[0_14px_30px_rgba(168,85,247,0.08)] transition hover:-translate-y-0.5 hover:border-[#d8b4fe] hover:text-[#6d28d9]"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

import { useState } from "react";
import { CheckCircle2, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const quizData = {
  money: [
    {
      question: "What is the core of money management?",
      options: ["Spending only", "Earning only", "Earning, spending, saving","Borrowing"],
      answer: "Earning, spending, saving",
    },
    {
      question: "What is saving?",
      options: ["Spending money", "Setting aside money for future use", " Borrowing money","Losing money"],
      answer: "Setting aside money for future use",
    },
    {
      question: "Emergency funds are used for?",
      options: ["Shopping", "Unexpected expenses", "Luxury"],
      answer: "Unexpected expenses",
    },
  ],

  investing: [
    {
      question: "What is investing?",
      options: ["Gambling", "Growing money", "Spending"],
      answer: "Growing money",
    },
    {
      question: "What reduces risk?",
      options: ["All in one stock", "Diversification", "Random picks"],
      answer: "Diversification",
    },
    {
      question: "Long-term investing is?",
      options: ["Risky always", "Stable over time", "Pointless"],
      answer: "Stable over time",
    },
  ],

  credit: [
    {
      question: "What affects credit score?",
      options: ["Payment history", "Favorite color", "Height"],
      answer: "Payment history",
    },
    {
      question: "Late payments do what?",
      options: ["Increase score", "Decrease score", "No effect"],
      answer: "Decrease score",
    },
    {
      question: "Good credit helps in?",
      options: ["Getting loans", "Gaming", "Cooking"],
      answer: "Getting loans",
    },
  ],
};

export default function Quiz(props) {
  const params = useParams();
const id = props.id || params.id;
  const navigate = useNavigate();

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const [questions] = useState(() =>
    shuffleArray(quizData[id] || [])
  );

  if (!questions.length) {
    return <h2 className="text-center mt-10">No quiz found </h2>;
  }

  
  // ✅ states
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showNext, setShowNext] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // ✅ handle answer (NO scoring here)
  const handleAnswer = (option) => {
    setSelected(option);
    setShowNext(true);
  };

  // ✅ scoring happens ONLY here
  const nextQuestion = () => {
    if (selected === questions[currentQ].answer) {
      setScore((prev) => prev + 1);
    }

    const nextQ = currentQ + 1;

    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
      setSelected(null);
      setShowNext(false);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setShowNext(false);
    setShowResult(false);
  };

  return (
    <main className="page-shell">
      <section className="content-board">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">Quiz Arena</span>
          <h1 className="page-title">
            Challenge what you know and level up fast.
          </h1>
          <p className="page-copy">
            Short quizzes reinforce the concepts you just learned.
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
                  Keep going. Repetition builds confidence.
                </p>

                <button
                  className="primary-pill mt-8"
                  onClick={restartQuiz}
                >
                  <RotateCcw size={18} />
                  Restart Quiz
                </button>
              </div>
            ) : (
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#9c7fc0]">
                  Question {currentQ + 1} of {questions.length}
                </p>

                <h2 className="mt-4 text-3xl font-semibold text-[#5f2e99]">
                  {questions[currentQ].question}
                </h2>

                {/* ✅ OPTIONS */}
                <div className="mt-8 grid gap-4">
                  {questions[currentQ].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      className={`rounded-[22px] px-5 py-4 text-left font-medium transition
                        ${
                          selected === option
                            ? "bg-[#e9d5ff] border-[#c084fc] text-[#6d28d9]"
                            : "bg-white/75 border border-white/50 text-[#6f4798] hover:-translate-y-0.5 hover:border-[#d8b4fe]"
                        }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {/* ✅ NEXT BUTTON */}
                {showNext && (
                  <button
                    onClick={nextQuestion}
                    className="primary-pill mt-6"
                  >
                    Next
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

import { useState } from "react";

const questions = [
  {
    question: "What is a good credit score?",
    options: ["300", "500", "700+", "200"],
    answer: "700+"
  },
  {
    question: "What is budgeting?",
    options: [
      "Tracking expenses",
      "Spending randomly",
      "Ignoring money",
      "Borrowing money"
    ],
    answer: "Tracking expenses"
  },
  {
    question: "Best investment for beginners?",
    options: ["Stocks", "Crypto", "FD/Mutual Funds", "Gambling"],
    answer: "FD/Mutual Funds"
  }
];

function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQ].answer) {
      setScore(score + 1);
    }

    const nextQ = currentQ + 1;

    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Quiz 🎯</h1>

      {showResult ? (
        <div>
          <h2>Your Score: {score} / {questions.length}</h2>
          <button onClick={restartQuiz}>Restart</button>
        </div>
      ) : (
        <div>
          <h3>{questions[currentQ].question}</h3>

          {questions[currentQ].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              style={{
                display: "block",
                margin: "10px 0",
                padding: "10px",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              {option}
            </button>
          ))}

          <p>
            Question {currentQ + 1} / {questions.length}
          </p>
        </div>
      )}
    </div>
  );
}

export default Quiz;
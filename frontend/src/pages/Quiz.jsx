import { useState, useMemo } from "react";
import { CheckCircle2, XCircle, RotateCcw, ArrowRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const quizData = {
  "personal-finance": [
    {
      question: "What is the 50-30-20 rule?",
      options: [
        "50% savings, 30% needs, 20% wants",
        "50% needs, 30% wants, 20% savings",
        "50% wants, 30% savings, 20% needs",
        "50% investments, 30% needs, 20% wants"
      ],
      answer: "50% needs, 30% wants, 20% savings",
    },
    {
      question: "How many months of expenses should an emergency fund cover?",
      options: ["1-2 months", "3-6 months", "12-18 months", "24 months"],
      answer: "3-6 months",
    },
    {
      question: "What does 'pay yourself first' mean?",
      options: [
        "Buy things you want before paying bills",
        "Automate savings before spending",
        "Pay off debts first",
        "Invest in yourself through education only"
      ],
      answer: "Automate savings before spending",
    },
    {
      question: "Which is NOT a good budgeting habit?",
      options: [
        "Tracking expenses monthly",
        "Increasing spending when income rises",
        "Automating savings",
        "Reviewing budget regularly"
      ],
      answer: "Increasing spending when income rises",
    },
  ],
  "banking": [
    {
      question: "Which account type typically earns no interest?",
      options: ["Savings Account", "Fixed Deposit", "Current Account", "Recurring Deposit"],
      answer: "Current Account",
    },
    {
      question: "What is compound interest?",
      options: [
        "Interest calculated only on principal",
        "Interest calculated on principal plus accumulated interest",
        "A fixed interest rate",
        "Interest paid monthly"
      ],
      answer: "Interest calculated on principal plus accumulated interest",
    },
    {
      question: "What does UPI stand for?",
      options: [
        "Universal Payment Interface",
        "Unified Payments Interface",
        "United Payment Integration",
        "Unified Payment Integration"
      ],
      answer: "Unified Payments Interface",
    },
    {
      question: "Which typically offers higher interest rates?",
      options: [
        "Savings Account",
        "Current Account",
        "Fixed Deposit",
        "All offer the same rate"
      ],
      answer: "Fixed Deposit",
    },
  ],
  "core-concepts": [
    {
      question: "If inflation is 6% and your savings earn 4%, what happens to your purchasing power?",
      options: [
        "It increases by 2%",
        "It decreases by 2%",
        "It stays the same",
        "It increases by 10%"
      ],
      answer: "It decreases by 2%",
    },
    {
      question: "Why is ₹1,000 today worth more than ₹1,000 next year?",
      options: [
        "Currency notes depreciate physically",
        "You can invest today's money and earn returns",
        "Banks charge storage fees",
        "Money loses color over time"
      ],
      answer: "You can invest today's money and earn returns",
    },
    {
      question: "What did Einstein allegedly call the 'eighth wonder of the world'?",
      options: [
        "Simple interest",
        "Compound interest",
        "Stock market",
        "Inflation"
      ],
      answer: "Compound interest",
    },
    {
      question: "₹10,000 at 12% annual return for 30 years becomes approximately:",
      options: ["₹50,000", "₹1,00,000", "₹3,00,000", "₹10,00,000"],
      answer: "₹3,00,000",
    },
  ],
  "risk-awareness": [
    {
      question: "What is term insurance?",
      options: [
        "Insurance that covers medical expenses",
        "Pure life cover that pays family if you pass away",
        "Insurance for your car",
        "Investment cum insurance plan"
      ],
      answer: "Pure life cover that pays family if you pass away",
    },
    {
      question: "What is phishing?",
      options: [
        "A type of investment",
        "Fake messages asking for sensitive information",
        "A banking service",
        "A type of loan"
      ],
      answer: "Fake messages asking for sensitive information",
    },
    {
      question: "How much health insurance coverage is recommended for a family?",
      options: ["₹50,000", "₹1-2 lakhs", "₹5-10 lakhs", "₹50 lakhs minimum"],
      answer: "₹5-10 lakhs",
    },
    {
      question: "Which is a red flag for a potential scam?",
      options: [
        "Guaranteed high returns with no risk",
        "Detailed risk disclosures",
        "SEBI registration",
        "Transparent fee structure"
      ],
      answer: "Guaranteed high returns with no risk",
    },
  ],
  "stock-market": [
    {
      question: "What does owning a stock represent?",
      options: [
        "A loan to the company",
        "Partial ownership in the company",
        "A guaranteed return",
        "A fixed deposit"
      ],
      answer: "Partial ownership in the company",
    },
    {
      question: "What is an IPO?",
      options: [
        "Internal Profit Optimization",
        "Initial Public Offering",
        "Investment Portfolio Option",
        "Index Performance Order"
      ],
      answer: "Initial Public Offering",
    },
    {
      question: "A bull market indicates:",
      options: [
        "Prices are falling",
        "Prices are rising",
        "Market is closed",
        "High volatility only"
      ],
      answer: "Prices are rising",
    },
    {
      question: "What is market capitalization?",
      options: [
        "Total debt of a company",
        "Share price × Total shares outstanding",
        "Annual revenue",
        "Number of employees"
      ],
      answer: "Share price × Total shares outstanding",
    },
  ],
  "investment-options": [
    {
      question: "What is SIP?",
      options: [
        "Single Investment Plan",
        "Systematic Investment Plan",
        "Secure Investment Portfolio",
        "Standard Interest Payment"
      ],
      answer: "Systematic Investment Plan",
    },
    {
      question: "Which investment is considered safest?",
      options: [
        "Small-cap stocks",
        "Cryptocurrency",
        "Government bonds",
        "Options trading"
      ],
      answer: "Government bonds",
    },
    {
      question: "What extra benefit do Sovereign Gold Bonds offer over physical gold?",
      options: [
        "No benefit",
        "2.5% annual interest",
        "Free storage",
        "Insurance coverage"
      ],
      answer: "2.5% annual interest",
    },
    {
      question: "What is the rule of thumb for equity allocation by age?",
      options: [
        "100 minus your age",
        "Your age in percentage",
        "Always 50%",
        "100 plus your age"
      ],
      answer: "100 minus your age",
    },
  ],
  "analysis": [
    {
      question: "What does a low P/E ratio potentially indicate?",
      options: [
        "Overvalued stock",
        "Undervalued stock",
        "High debt",
        "Poor management"
      ],
      answer: "Undervalued stock",
    },
    {
      question: "Fundamental analysis evaluates:",
      options: [
        "Chart patterns",
        "Price movements",
        "Company's financial health and intrinsic value",
        "Trading volume only"
      ],
      answer: "Company's financial health and intrinsic value",
    },
    {
      question: "Technical analysis is best suited for:",
      options: [
        "Long-term investing decisions",
        "Short-term trading decisions",
        "Retirement planning",
        "Tax optimization"
      ],
      answer: "Short-term trading decisions",
    },
    {
      question: "What does ROE measure?",
      options: [
        "Return on Expenses",
        "Rate of Exchange",
        "Return on Equity",
        "Risk of Enterprise"
      ],
      answer: "Return on Equity",
    },
  ],
  "portfolio": [
    {
      question: "What is the main purpose of diversification?",
      options: [
        "Maximize returns",
        "Reduce overall risk",
        "Avoid taxes",
        "Increase complexity"
      ],
      answer: "Reduce overall risk",
    },
    {
      question: "For a 25-year-old aggressive investor, a typical equity allocation might be:",
      options: ["30%", "50%", "80%", "100%"],
      answer: "80%",
    },
    {
      question: "What is portfolio rebalancing?",
      options: [
        "Selling all investments",
        "Buying only new investments",
        "Adjusting holdings to maintain target allocation",
        "Changing brokers"
      ],
      answer: "Adjusting holdings to maintain target allocation",
    },
    {
      question: "For short-term goals (< 3 years), portfolios should be:",
      options: [
        "Equity-heavy",
        "Debt-heavy",
        "Crypto-heavy",
        "Real estate only"
      ],
      answer: "Debt-heavy",
    },
  ],
  "advanced-markets": [
    {
      question: "What is a futures contract?",
      options: [
        "Option to buy in the future",
        "Agreement to buy/sell at predetermined price on future date",
        "A type of mutual fund",
        "Insurance product"
      ],
      answer: "Agreement to buy/sell at predetermined price on future date",
    },
    {
      question: "In options trading, a 'Call' option gives you the right to:",
      options: [
        "Sell an asset",
        "Buy an asset",
        "Hold an asset indefinitely",
        "Exchange currencies"
      ],
      answer: "Buy an asset",
    },
    {
      question: "Intraday trading means:",
      options: [
        "Holding stocks for weeks",
        "Buying and selling within the same day",
        "Long-term investing",
        "Monthly trading"
      ],
      answer: "Buying and selling within the same day",
    },
    {
      question: "What is a major advantage of algorithmic trading?",
      options: [
        "Guaranteed profits",
        "Removes emotional decision-making",
        "No risk involved",
        "Free to set up"
      ],
      answer: "Removes emotional decision-making",
    },
  ],
  "advanced-analysis": [
    {
      question: "An RSI above 70 typically indicates:",
      options: [
        "Oversold conditions",
        "Overbought conditions",
        "Neutral market",
        "Market closed"
      ],
      answer: "Overbought conditions",
    },
    {
      question: "What is a 'Golden Cross' in technical analysis?",
      options: [
        "50-day MA crosses below 200-day MA",
        "50-day MA crosses above 200-day MA",
        "Stock reaches all-time high",
        "Two stocks merge"
      ],
      answer: "50-day MA crosses above 200-day MA",
    },
    {
      question: "A Doji candlestick pattern indicates:",
      options: [
        "Strong uptrend",
        "Strong downtrend",
        "Market indecision",
        "High volume"
      ],
      answer: "Market indecision",
    },
    {
      question: "Which financial statement shows a company's assets and liabilities?",
      options: [
        "Income Statement",
        "Balance Sheet",
        "Cash Flow Statement",
        "Annual Report cover"
      ],
      answer: "Balance Sheet",
    },
  ],
  "wealth-strategies": [
    {
      question: "What is the maximum deduction under Section 80C?",
      options: ["₹50,000", "₹1,00,000", "₹1,50,000", "₹2,00,000"],
      answer: "₹1,50,000",
    },
    {
      question: "The 4% withdrawal rule suggests your retirement corpus should be:",
      options: [
        "4× annual expenses",
        "10× annual expenses",
        "25× annual expenses",
        "100× annual expenses"
      ],
      answer: "25× annual expenses",
    },
    {
      question: "Which is NOT typically considered passive income?",
      options: [
        "Dividend income",
        "Rental income",
        "Salary from employment",
        "Bond interest"
      ],
      answer: "Salary from employment",
    },
    {
      question: "ELSS funds have a lock-in period of:",
      options: ["1 year", "3 years", "5 years", "No lock-in"],
      answer: "3 years",
    },
  ],
  "alternative": [
    {
      question: "What technology underlies most cryptocurrencies?",
      options: [
        "Artificial Intelligence",
        "Blockchain",
        "Cloud Computing",
        "5G Networks"
      ],
      answer: "Blockchain",
    },
    {
      question: "REITs must distribute what percentage of taxable income as dividends?",
      options: ["50%", "70%", "90%", "100%"],
      answer: "90%",
    },
    {
      question: "What is a typical success rate for startup investments?",
      options: [
        "Most startups succeed",
        "About 50% succeed",
        "Most startups fail",
        "All startups succeed eventually"
      ],
      answer: "Most startups fail",
    },
    {
      question: "What percentage of portfolio should typically be in alternative investments?",
      options: ["0%", "5-15%", "50%", "100%"],
      answer: "5-15%",
    },
  ],
};

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Quiz({ moduleId }) {
  const params = useParams();
  const navigate = useNavigate();
  const id = moduleId || params.id;

  const questions = useMemo(() => {
    const moduleQuestions = quizData[id];
    if (!moduleQuestions) return [];
    return shuffleArray(moduleQuestions).map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));
  }, [id]);

  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  if (!questions.length) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-[#5f2e99] mb-4">No quiz available</h2>
        <p className="text-[#7d63a1]">Quiz for "{id}" is not yet ready.</p>
      </div>
    );
  }

  const handleAnswer = (option) => {
    if (hasAnswered) return;
    
    setSelected(option);
    setHasAnswered(true);
    
    if (option === questions[currentQ].answer) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    const nextQ = currentQ + 1;
    
    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
      setSelected(null);
      setHasAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setSelected(null);
    setHasAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  const getOptionStyle = (option) => {
    if (!hasAnswered) {
      return selected === option
        ? "bg-purple-100 border-purple-400"
        : "bg-white/75 border-white/50 hover:border-purple-300 hover:-translate-y-0.5";
    }
    
    if (option === questions[currentQ].answer) {
      return "bg-green-100 border-green-500 text-green-800";
    }
    
    if (option === selected && option !== questions[currentQ].answer) {
      return "bg-red-100 border-red-500 text-red-800";
    }
    
    return "bg-gray-50 border-gray-200 opacity-60";
  };

  const percentage = Math.round((score / questions.length) * 100);
  const getMessage = () => {
    if (percentage >= 90) return "Outstanding! You've mastered this topic! ";
    if (percentage >= 70) return "Great job! Solid understanding! ";
    if (percentage >= 50) return "Good effort! Review the material and try again. ";
    return "Keep learning! Practice makes perfect. ";
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <span className="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-3">
          Quiz Arena
        </span>
        <h1 className="text-2xl font-bold text-[#5f2e99]">
          Test Your Knowledge
        </h1>
      </div>

      <div className="soft-card p-8">
        {showResult ? (
          <div className="text-center">
            <div className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full ${
              percentage >= 70 
                ? "bg-gradient-to-br from-green-400 to-emerald-500" 
                : percentage >= 50 
                  ? "bg-gradient-to-br from-yellow-400 to-orange-500"
                  : "bg-gradient-to-br from-purple-400 to-purple-600"
            } text-white shadow-lg`}>
              <span className="text-3xl font-bold">{percentage}%</span>
            </div>

            <h2 className="mt-6 text-2xl font-bold text-[#5f2e99]">
              {score} out of {questions.length} correct
            </h2>

            <p className="mt-3 text-[#7d63a1] text-lg">
              {getMessage()}
            </p>

            <div className="flex gap-4 justify-center mt-8">
              <button
                className="primary-pill"
                onClick={restartQuiz}
              >
                <RotateCcw size={18} />
                Try Again
              </button>
              <button
                className="px-6 py-3 rounded-full border-2 border-purple-300 text-purple-700 font-semibold hover:bg-purple-50 transition-colors"
                onClick={() => navigate('/learn')}
              >
                Back to Courses
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-semibold uppercase tracking-wider text-purple-400">
                Question {currentQ + 1} of {questions.length}
              </span>
              <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                Score: {score}
              </span>
            </div>

            <div className="w-full bg-purple-100 rounded-full h-2 mb-6">
              <div 
                className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
              />
            </div>

            <h2 className="text-xl font-bold text-[#5f2e99] mb-6">
              {questions[currentQ].question}
            </h2>

            <div className="grid gap-3">
              {questions[currentQ].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  disabled={hasAnswered}
                  className={`relative rounded-2xl px-5 py-4 text-left font-medium transition-all duration-200 border-2 ${getOptionStyle(option)} ${
                    !hasAnswered ? "cursor-pointer" : "cursor-default"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {hasAnswered && option === questions[currentQ].answer && (
                      <CheckCircle2 className="text-green-600" size={20} />
                    )}
                    {hasAnswered && option === selected && option !== questions[currentQ].answer && (
                      <XCircle className="text-red-600" size={20} />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {hasAnswered && (
              <div className="mt-6">
                <div className={`p-4 rounded-xl mb-4 ${
                  selected === questions[currentQ].answer 
                    ? "bg-green-50 border border-green-200" 
                    : "bg-red-50 border border-red-200"
                }`}>
                  {selected === questions[currentQ].answer ? (
                    <p className="text-green-700 font-medium">✓ Correct! Well done!</p>
                  ) : (
                    <p className="text-red-700 font-medium">
                      ✗ Incorrect. The correct answer is: <strong>{questions[currentQ].answer}</strong>
                    </p>
                  )}
                </div>
                
                <button
                  onClick={nextQuestion}
                  className="primary-pill w-full justify-center"
                >
                  {currentQ === questions.length - 1 ? "See Results" : "Next Question"}
                  <ArrowRight size={18} />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

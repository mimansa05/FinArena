import { useParams } from "react-router-dom";
import { useState } from "react";
import Quiz from "./Quiz";

const modules = {
  "personal-finance": {
    title: "Personal Finance",
    video: "https://www.youtube.com/embed/HQzoZfc3GwQ",
    content: `Personal finance is the foundation of financial independence. It starts with understanding the difference between income (money coming in) and expenses (money going out).

**The 50-30-20 Rule:**
• 50% of income → Needs (rent, groceries, utilities, insurance)
• 30% of income → Wants (entertainment, dining out, hobbies)
• 20% of income → Savings & debt repayment

**Building an Emergency Fund:**
An emergency fund is 3-6 months of living expenses saved in a liquid, accessible account. This protects you from unexpected job loss, medical bills, or car repairs without going into debt.

**Key Habits:**
• Track every expense for one month to understand spending patterns
• Automate savings — pay yourself first
• Review and adjust your budget monthly
• Avoid lifestyle inflation when income increases`,
  },
  "banking": {
    title: "Banking Basics",
    video: "https://www.youtube.com/embed/E-HOz8T6tAo",
    content: `Understanding banking is essential for managing your money effectively.

**Types of Bank Accounts:**
• Savings Account: Earns interest, limited withdrawals, ideal for emergency funds
• Current Account: No interest, unlimited transactions, used by businesses
• Fixed Deposit (FD): Lock money for a fixed period, higher interest rates
• Recurring Deposit (RD): Save a fixed amount monthly, earns compound interest

**Interest Explained:**
• Simple Interest: Calculated only on principal (Interest = P × R × T)
• Compound Interest: Interest on interest — grows exponentially over time

**Digital Payments:**
• UPI (Unified Payments Interface): Instant bank-to-bank transfers via apps like GPay, PhonePe
• Debit Cards: Spend directly from your bank balance
• Credit Cards: Borrow money to pay later — use responsibly to build credit score

**Pro Tip:** Always compare interest rates across banks before opening FDs or taking loans.`,
  },
  "core-concepts": {
    title: "Core Concepts",
    video: "https://www.youtube.com/embed/3Ga-M2CpRgY",
    content: `These three concepts are the bedrock of all financial decision-making.

**1. Inflation:**
Inflation is the rate at which prices increase over time. If inflation is 6% and your savings earn 4%, you're actually losing purchasing power. Your investments must beat inflation to grow wealth.

**2. Time Value of Money:**
₹1,000 today is worth more than ₹1,000 a year from now because you can invest today's money and earn returns. This principle drives all investment decisions.

Formula: Future Value = Present Value × (1 + r)^n

**3. Power of Compounding:**
Albert Einstein called compound interest the "eighth wonder of the world." 

Example: ₹10,000 invested at 12% annual return:
• After 10 years: ₹31,058
• After 20 years: ₹96,463
• After 30 years: ₹2,99,599

The earlier you start, the more time your money has to compound. Even small amounts invested early outperform large amounts invested late.`,
  },
  "risk-awareness": {
    title: "Risk Awareness",
    video: "https://www.youtube.com/embed/h3fUgOKFMNU",
    content: `Protecting your finances is as important as growing them.

**Insurance Basics:**

*Health Insurance:*
• Covers hospitalization, surgeries, and medical emergencies
• Choose coverage of at least ₹5-10 lakhs for a family
• Look for cashless hospital networks and no-claim bonuses

*Term Insurance:*
• Pure life cover — pays your family if you pass away
• Cheapest form of life insurance
• Rule of thumb: Coverage = 10-15× annual income

**Financial Fraud Awareness:**

Common scams to avoid:
• Phishing: Fake emails/SMS asking for OTP or bank details
• Ponzi schemes: "Guaranteed" high returns with no risk
• Loan frauds: Asking for upfront fees for loan approval
• UPI scams: Requests disguised as "receiving" money

**Protection Tips:**
• Never share OTP, CVV, or PIN with anyone
• Verify URLs before entering banking details
• If an investment sounds too good to be true, it probably is
• Enable transaction alerts on your bank account`,
  },
  "stock-market": {
    title: "Stock Market Basics",
    video: "https://www.youtube.com/embed/p7HKvqRI_Bo",
    content: `The stock market is where companies raise capital and investors build wealth.

**What is a Stock?**
A stock represents partial ownership in a company. When you buy shares of Reliance, you own a tiny piece of the company and share in its profits (and losses).

**How Markets Work:**
• Primary Market: Companies issue new shares through IPOs (Initial Public Offerings)
• Secondary Market: Investors trade existing shares (BSE, NSE)
• Stock Exchanges act as intermediaries ensuring fair, transparent trading

**Key Terms:**
• Bull Market: Prices rising, investor optimism
• Bear Market: Prices falling, investor pessimism
• Market Cap: Total value of a company's shares (Share Price × Total Shares)
• Index: A basket of stocks representing market performance (Sensex, Nifty 50)

**IPO Basics:**
When a private company goes public, it offers shares to the public for the first time. IPOs can be profitable but are also risky — research the company's fundamentals before investing.

**Getting Started:**
Open a Demat account (holds shares digitally) and a trading account (to buy/sell) with a broker like Zerodha, Groww, or Upstox.`,
  },
  "investment-options": {
    title: "Investment Options",
    video: "https://www.youtube.com/embed/WEDIj9JBTC8",
    content: `Diversifying across investment options helps balance risk and reward.

**Mutual Funds:**
• Pool money from many investors, managed by professionals
• SIP (Systematic Investment Plan): Invest fixed amount monthly — averages out market volatility
• Lump Sum: One-time investment — timing matters more
• Types: Equity funds (higher risk/return), Debt funds (lower risk), Hybrid funds

**Bonds:**
• Loans you give to governments or companies in exchange for fixed interest
• Lower risk than stocks, predictable returns
• Government bonds (safest), Corporate bonds (higher yield, more risk)

**Gold:**
• Traditional store of value, hedge against inflation
• Options: Physical gold, Gold ETFs (traded like stocks), Sovereign Gold Bonds (government-backed, 2.5% annual interest)

**Real Estate:**
• Tangible asset that can appreciate and generate rental income
• High entry cost, illiquid, requires maintenance
• REITs (Real Estate Investment Trusts) offer exposure without buying property

**Rule of Thumb:** Equity allocation = 100 minus your age (e.g., at 25, hold 75% in equity)`,
  },
  "analysis": {
    title: "Analysis Basics",
    video: "https://www.youtube.com/embed/7PM4rNDr4oI",
    content: `Smart investing requires analyzing investments before putting in money.

**Fundamental Analysis:**
Evaluates a company's intrinsic value based on financial health and business potential.

Key metrics:
• P/E Ratio (Price-to-Earnings): Stock price ÷ Earnings per share — lower may indicate undervaluation
• P/B Ratio (Price-to-Book): Compares market value to book value
• Debt-to-Equity: How much debt the company uses — lower is generally safer
• ROE (Return on Equity): How efficiently the company generates profit from shareholder money

**Technical Analysis:**
Studies price patterns and trading volume to predict future price movements.
• Uses charts, trends, and indicators
• Best for short-term trading decisions
• Common tools: Moving averages, support/resistance levels

**Risk vs Return:**
Higher potential returns come with higher risk. Understanding your risk tolerance helps choose appropriate investments.

• Low risk: FDs, Government bonds, Debt funds
• Medium risk: Large-cap stocks, Index funds, Gold
• High risk: Small-cap stocks, Options, Crypto

**Pro Tip:** Use fundamental analysis to decide WHAT to buy, technical analysis to decide WHEN to buy.`,
  },
  "portfolio": {
    title: "Portfolio Building",
    video: "https://www.youtube.com/embed/HX8f8p3lXkE",
    content: `A well-constructed portfolio balances growth potential with risk management.

**Diversification:**
"Don't put all your eggs in one basket." Spread investments across:
• Asset classes (stocks, bonds, gold, real estate)
• Sectors (technology, healthcare, finance, consumer goods)
• Geographies (domestic and international markets)

Diversification reduces the impact of any single investment performing poorly.

**Asset Allocation:**
The percentage of your portfolio in each asset class based on:
• Age: Younger investors can take more equity risk
• Goals: Retirement, house purchase, child's education
• Risk tolerance: How much volatility can you handle emotionally?

Sample allocations:
• Aggressive (Age 25): 80% equity, 10% debt, 10% gold
• Balanced (Age 40): 60% equity, 30% debt, 10% gold
• Conservative (Age 55): 30% equity, 60% debt, 10% gold

**Long-term vs Short-term:**
• Long-term (5+ years): Equity-heavy, ride out market volatility, benefit from compounding
• Short-term (< 3 years): Debt-heavy, preserve capital, liquidity matters

**Rebalancing:**
Review your portfolio annually. If one asset class outperforms, it may become overweighted — sell some and reinvest in underweighted assets to maintain your target allocation.`,
  },
  "advanced-markets": {
    title: "Advanced Markets",
    video: "https://www.youtube.com/embed/VJgHkAqohbU",
    content: `Advanced market instruments offer higher returns but require deeper understanding and risk management.

**Derivatives:**
Financial contracts whose value is derived from an underlying asset (stock, index, commodity).

*Futures:*
• Agreement to buy/sell an asset at a predetermined price on a future date
• Used for hedging or speculation
• Requires margin (fraction of total value)

*Options:*
• Right (not obligation) to buy (Call) or sell (Put) an asset at a set price
• Premium paid upfront for this right
• Can limit losses while maintaining upside potential

**Intraday Trading:**
• Buy and sell within the same trading day
• No overnight holding — all positions squared off
• Requires quick decisions, technical analysis, and strict stop-losses
• High risk: Most intraday traders lose money

**Swing Trading:**
• Hold positions for days to weeks
• Captures "swings" in price movements
• Less stressful than intraday, still requires active management

**Algorithmic Trading:**
• Computer programs execute trades based on predefined rules
• Advantages: Speed, removes emotion, backtesting capability
• Requires programming knowledge and robust risk management

**Warning:** These instruments can amplify losses. Never trade with money you can't afford to lose.`,
  },
  "advanced-analysis": {
    title: "Advanced Analysis",
    video: "https://www.youtube.com/embed/eynxyoKgpng",
    content: `Advanced analysis techniques help identify optimal entry/exit points and evaluate companies deeply.

**Technical Indicators:**

*RSI (Relative Strength Index):*
• Measures momentum on a 0-100 scale
• Above 70: Overbought (potential sell signal)
• Below 30: Oversold (potential buy signal)

*MACD (Moving Average Convergence Divergence):*
• Shows relationship between two moving averages
• Signal line crossovers indicate buy/sell opportunities
• Histogram shows momentum strength

*Moving Averages:*
• SMA (Simple Moving Average): Average price over a period
• EMA (Exponential Moving Average): More weight to recent prices
• Golden Cross (50-day crosses above 200-day): Bullish signal
• Death Cross (50-day crosses below 200-day): Bearish signal

**Candlestick Patterns:**
• Doji: Indecision, potential reversal
• Hammer/Hanging Man: Reversal signals
• Engulfing patterns: Strong reversal indicators
• Morning/Evening Star: Three-candle reversal patterns

**Financial Statement Deep Dive:**
• Income Statement: Revenue, expenses, profit margins, growth trends
• Balance Sheet: Assets, liabilities, equity, debt levels
• Cash Flow Statement: Operating, investing, financing activities
• Look for consistent revenue growth, healthy margins, manageable debt, and positive free cash flow`,
  },
  "wealth-strategies": {
    title: "Wealth Strategies",
    video: "https://www.youtube.com/embed/fhLVF9aBkAs",
    content: `Building long-term wealth requires strategic planning beyond just investing.

**Tax Planning:**
Legally minimize taxes to maximize wealth accumulation.

*Tax-saving investments (Section 80C - up to ₹1.5 lakh):*
• ELSS mutual funds (3-year lock-in, equity exposure)
• PPF (15-year lock-in, guaranteed returns, tax-free interest)
• NSC, Tax-saving FDs, Life insurance premiums

*Other deductions:*
• Section 80D: Health insurance premiums
• Section 24: Home loan interest (up to ₹2 lakh)
• NPS: Additional ₹50,000 deduction under 80CCD(1B)

**Retirement Planning:**
• Start early — compounding works best over decades
• Calculate your retirement corpus: Monthly expenses × 12 × 25 (for 4% withdrawal rate)
• NPS + EPF + PPF + Equity investments = Diversified retirement portfolio
• Account for inflation and healthcare costs

**Passive Income Strategies:**
Build income streams that don't require active work:
• Dividend stocks: Regular payouts from profitable companies
• Rental income: Property or REITs
• Bond interest: Fixed income from debt instruments
• Royalties: From creative work, patents
• Systematic Withdrawal Plans (SWP): Regular income from mutual fund investments

**The Goal:** Replace active income with passive income for financial freedom.`,
  },
  "alternative": {
    title: "Alternative Investments",
    video: "https://www.youtube.com/embed/41JCpzvnn_0",
    content: `Alternative investments can enhance returns and diversification but come with unique risks.

**Cryptocurrency:**
• Digital assets using blockchain technology
• Bitcoin, Ethereum are most established
• Extremely volatile — can gain or lose 50%+ in months
• Only invest what you can afford to lose entirely
• Store securely in hardware wallets for large holdings
• Tax implications: Treated as capital gains in most jurisdictions

**Startup / Angel Investing:**
• Invest in early-stage companies before they go public
• Potential for massive returns (10-100x) but most startups fail
• Requires significant capital and long time horizons (5-10 years)
• Platforms: AngelList, LetsVenture, Indian Angel Network
• Diversify across 10-20 startups to increase odds of hitting a winner

**REITs (Real Estate Investment Trusts):**
• Companies that own income-producing real estate
• Traded on stock exchanges like regular stocks
• Must distribute 90% of taxable income as dividends
• Provides real estate exposure without buying property
• More liquid than physical real estate
• Examples in India: Embassy Office Parks, Mindspace Business Parks

**Portfolio Allocation:**
Alternative investments should typically be 5-15% of your total portfolio. They're high-risk additions, not core holdings.

**Due Diligence:** Research thoroughly before investing. Understand what you're buying and the specific risks involved.`,
  },
};

export default function Course() {
  const { id } = useParams();
  const [tab, setTab] = useState("learn");

  const module = modules[id];

  if (!module) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#5f2e99] mb-4">Course not found</h2>
          <p className="text-[#7d63a1]">The module "{id}" doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-6 p-6 min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* SIDEBAR */}
      <div className="w-64 soft-card p-5 h-fit sticky top-6">
        <h3 className="text-lg font-semibold mb-4 text-[#5f2e99]">
          {module.title}
        </h3>

        <button
          onClick={() => setTab("learn")}
          className={`block w-full text-left mb-3 px-3 py-2 rounded-lg transition-colors ${
            tab === "learn"
              ? "bg-purple-100 text-purple-700 font-semibold"
              : "text-gray-600 hover:bg-purple-50"
          }`}
        >
           Study Material
        </button>

        <button
          onClick={() => setTab("quiz")}
          className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
            tab === "quiz"
              ? "bg-purple-100 text-purple-700 font-semibold"
              : "text-gray-600 hover:bg-purple-50"
          }`}
        >
           Quiz
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 soft-card p-6">
        {tab === "learn" ? (
          <>
            <h2 className="text-2xl font-semibold text-[#5f2e99] mb-6">
              {module.title}
            </h2>

            <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-5 rounded-3xl shadow-lg border border-purple-200">
              <iframe
                width="100%"
                height="400"
                src={module.video}
                className="rounded-2xl"
                title={module.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-6 prose prose-purple max-w-none">
              {module.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-[#6f4798] whitespace-pre-line mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <button
              onClick={() => setTab("quiz")}
              className="primary-pill mt-8"
            >
              Start Quiz
            </button>
          </>
        ) : (
          <Quiz moduleId={id} />
        )}
      </div>
    </div>
  );
}
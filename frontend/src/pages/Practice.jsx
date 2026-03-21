import { useState } from "react";
import { CandlestickChart, Wallet } from "lucide-react";

export default function Practice() {
  const [balance, setBalance] = useState(10000);
  const [message, setMessage] = useState("Choose an action to simulate a market move.");

  const invest = () => {
    const profit = Math.floor(Math.random() * 2200) - 400;
    setBalance((current) => current + profit);
    setMessage(
      profit >= 0
        ? `Nice move. Your virtual portfolio gained Rs ${profit}.`
        : `The market dipped. Your virtual portfolio lost Rs ${Math.abs(profit)}.`
    );
  };

  return (
    <main className="page-shell">
      <section className="content-board">
        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="eyebrow">Practice Lab</span>
            <h1 className="page-title">Learn by trying decisions in a safe space.</h1>
            <p className="page-copy">
              Make practice moves, see how your balance changes, and get used to
              the rhythm of gains, losses, and tradeoffs.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="primary-pill" onClick={invest}>
                Invest Rs 1000
              </button>
              <button className="secondary-pill" onClick={invest}>
                Try Bigger Position
              </button>
            </div>
          </div>

          <aside className="soft-card">
            <div className="icon-chip">
              <Wallet size={22} />
            </div>
            <p className="mt-5 text-sm font-medium uppercase tracking-[0.22em] text-[#9c7fc0]">
              Virtual Balance
            </p>
            <h2 className="mt-2 text-5xl font-semibold tracking-tight text-[#5f2e99]">
              Rs {balance.toLocaleString()}
            </h2>
            <div className="mt-6 rounded-[24px] bg-[linear-gradient(180deg,_rgba(244,232,255,0.95),_rgba(233,213,255,0.8))] p-5">
              <div className="inline-flex items-center gap-2 text-[#7b3aed]">
                <CandlestickChart size={18} />
                <span className="font-semibold">Latest result</span>
              </div>
              <p className="mt-3 text-base leading-7 text-[#7d63a1]">{message}</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

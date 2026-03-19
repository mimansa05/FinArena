import { useState } from "react";

function Practice() {
  const [balance, setBalance] = useState(10000);
  const [message, setMessage] = useState("");

  const invest = () => {
    const profit = Math.floor(Math.random() * 2000) - 500; // random gain/loss
    setBalance(balance + profit);
    setMessage(
      profit > 0
        ? `You earned ₹${profit} 📈`
        : `You lost ₹${Math.abs(profit)} 📉`
    );
  };

  return (
    <div>
      <h1>Practice Lab 💸</h1>

      <h2>Virtual Balance: ₹{balance}</h2>

      <button onClick={invest}>Invest ₹1000</button>

      <p>{message}</p>
    </div>
  );
}

export default Practice;
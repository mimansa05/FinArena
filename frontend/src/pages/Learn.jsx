import { useEffect, useState } from "react";

function Learn() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/learn")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>Learning Modules 📚</h1>

      {data.map((item, index) => (
        <p key={index}>{item.title}</p>
      ))}
    </div>
  );
}

export default Learn;
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{
      width: "220px",
      height: "100vh",
      background: "linear-gradient(180deg, #6a5af9, #a855f7)",
      color: "white",
      padding: "20px"
    }}>
      <h2>FinArena</h2>

      <p><Link to="/" style={{color:"white"}}>Dashboard</Link></p>
      <p><Link to="/learn" style={{color:"white"}}>Learn</Link></p>
      <p><Link to="/quiz" style={{color:"white"}}>Quiz</Link></p>
      <p><Link to="/simulator" style={{color:"white"}}>Simulator</Link></p>
      <p><Link to="/practice">Practice</Link></p>
    </div>
  );
}

export default Sidebar;
import { motion } from "framer-motion";

function Dashboard() {
  return (
    <div>
      <h1>Welcome to FinArena 💸</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          style={cardStyle}
        >
          <h3>Progress</h3>
          <p>75%</p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          style={cardStyle}
        >
          <h3>Badges</h3>
          <p>5 earned</p>
        </motion.div>
      </div>
    </div>
  );
}

const cardStyle = {
  padding: "20px",
  background: "#f3f4f6",
  borderRadius: "12px",
  width: "200px"
};

export default Dashboard;
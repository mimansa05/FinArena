const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});
app.get("/api/learn", (req, res) => {
  res.json([
    { title: "Budgeting Basics" },
    { title: "Credit Score" },
    { title: "Investing Basics" }
  ]);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
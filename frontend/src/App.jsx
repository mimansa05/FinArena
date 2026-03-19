import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Learn from "./pages/Learn";
import Quiz from "./pages/Quiz";
import Simulator from "./pages/Simulator";
import Practice from "./pages/Practice";

<Route path="/practice" element={<Practice />} />
function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/simulator" element={<Simulator />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
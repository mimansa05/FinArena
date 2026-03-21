import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Learn from "./pages/Learn";
import Login from "./pages/Login";
import Practice from "./pages/Practice";
import Quiz from "./pages/Quiz";
import Simulator from "./pages/Simulator";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/simulator" element={<Simulator />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;

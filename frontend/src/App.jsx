import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./contexts/authContext";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Course from "./pages/Course";
import Landing from "./pages/Landing";
import Learn from "./pages/Learn";
import Login from "./pages/Login";
import Practice from "./pages/Practice";
import Quiz from "./pages/Quiz";
import Track from "./pages/Track";
import Simulator from "./pages/Simulator";
import Signup from "./pages/Signup";

function ProtectedRoute({ children }) {
  const { userLoggedIn, loading } = useAuth();
  if (loading) return null;
  return userLoggedIn ? children : <Navigate to="/login" replace />;
}

function GuestRoute({ children }) {
  const { userLoggedIn, loading } = useAuth();
  if (loading) return null;
  return !userLoggedIn ? children : <Navigate to="/dashboard" replace />;
}

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        {/* Public */}
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Guest only (redirect to dashboard if already logged in) */}
        <Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />
        <Route path="/signup" element={<GuestRoute><Signup /></GuestRoute>} />

        {/* Protected (redirect to login if not logged in) */}
        <Route path="/learn" element={<ProtectedRoute><Learn /></ProtectedRoute>} />
        <Route path="/course/:id" element={<ProtectedRoute><Course /></ProtectedRoute>} />
        <Route path="/practice" element={<ProtectedRoute><Practice /></ProtectedRoute>} />
        <Route path="/quiz/:id" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
        <Route path="/simulator" element={<ProtectedRoute><Simulator /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/track/:id" element={<ProtectedRoute><Track /></ProtectedRoute>} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
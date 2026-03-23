import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Eye,
  EyeOff,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// 🔥 Firebase functions
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
  doCreateUserWithEmailAndPassword,
} from "../firebase/auth";

// 🔐 Auth context
import { useAuth } from "../contexts/authContext";

const roles = [
  {
    id: "learner",
    label: "Learner",
    description:
      "Access lessons, quizzes, simulators, and personal progress tracking.",
    icon: UserRound,
  },
  {
    id: "admin",
    label: "Admin",
    description:
      "Manage content, review activity, and support learners across the platform.",
    icon: ShieldCheck,
  },
];

export default function AuthPanel({ mode }) {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  // ---------------- STATE ----------------
  const [selectedRole, setSelectedRole] = useState("learner");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isLogin = mode === "login";
  const isAdminSignup = selectedRole === "admin" && !isLogin;

  // ---------------- REDIRECT IF LOGGED IN ----------------
  useEffect(() => {
    if (userLoggedIn) {
      navigate("/dashboard");
    }
  }, [userLoggedIn]);

  // ---------------- ADMIN EMAIL AUTO FILL ----------------
  useEffect(() => {
    if (selectedRole === "admin") {
      setEmail("mimansasharma308@gmail.com");
      return;
    }
    if (email === "mimansasharma308@gmail.com") {
      setEmail("");
    }
  }, [selectedRole]);

  // ---------------- SUBMIT HANDLER ----------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        // 🔐 LOGIN
        await doSignInWithEmailAndPassword(email, password);
      } else {
        // 🆕 SIGNUP

        if (password !== confirmPassword) {
          alert("Passwords do not match");
          return;
        }

        await doCreateUserWithEmailAndPassword(email, password);
      }

      // 🚀 success → go to dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Auth Error:", error.message);
      alert(error.message);
    }
  };

  // ---------------- GOOGLE LOGIN ----------------
  const handleGoogleSignIn = async () => {
    try {
      await doSignInWithGoogle();
      navigate("/dashboard");
    } catch (error) {
      console.error("Google Error:", error.message);
    }
  };

  return (
    <main className="page-shell auth-shell">
      <section className="content-board auth-board overflow-hidden">

        <div className="relative z-10 grid gap-8">
          <div className="auth-form-card">

            {/* HEADER */}
            <div className="flex justify-between">
              <span>{isLogin ? "Login" : "Sign Up"}</span>

              <div>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
              </div>
            </div>

            {/* TITLE */}
            <h1>
              {isLogin ? "Welcome back" : "Create account"}
            </h1>

            {/* ROLE SELECT */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              {roles.map(({ id, label, icon: Icon }) => (
                <button key={id} onClick={() => setSelectedRole(id)}>
                  <Icon size={18} />
                  {label}
                </button>
              ))}
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="mt-4 space-y-3">

              {/* FULL NAME (signup only UI, not stored yet) */}
              {!isLogin && !isAdminSignup && (
                <input placeholder="Full Name" />
              )}

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* PASSWORD */}
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* CONFIRM PASSWORD */}
              {!isLogin && !isAdminSignup && (
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              )}

              {/* SUBMIT */}
              <button type="submit">
                {isLogin ? "Login" : "Create Account"}
                <ArrowRight size={16} />
              </button>
            </form>

            {/* GOOGLE */}
            <div className="mt-4">
              <p>or continue with</p>

              <button onClick={handleGoogleSignIn}>
                G Continue with Google
              </button>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
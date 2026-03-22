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
import rocketImage from "../assets/rocket.png";

const roles = [
  {
    id: "learner",
    label: "Learner",
    description: "Access lessons, quizzes, simulators, and personal progress tracking.",
    icon: UserRound,
  },
  {
    id: "admin",
    label: "Admin",
    description: "Manage content, review activity, and support learners across the platform.",
    icon: ShieldCheck,
  },
];

const trustPoints = [
  "Track your growth across lessons, challenges, and practice sessions.",
  "Save your goals and return to them from any device.",
  "Practice financial decisions before making them in real life.",
];

export default function AuthPanel({ mode }) {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("learner");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");

  const isLogin = mode === "login";
  const isAdminSignup = selectedRole === "admin" && !isLogin;

  useEffect(() => {
    if (selectedRole === "admin") {
      setEmail("mimansasharma308@gmail.com");
      return;
    }

    if (email === "mimansasharma308@gmail.com") {
      setEmail("");
    }
  }, [selectedRole]);

  const heading = isAdminSignup
    ? "Admin access is login only."
    : isLogin
      ? "Welcome back to FinArena."
      : "Create your FinArena account.";
  const copy = isAdminSignup
    ? "Admin accounts are managed separately. Use the approved email below to log in to the admin workspace."
    : isLogin
    ? "Choose your access type and continue your finance learning journey."
    : "Set up your profile and start learning, practicing, and tracking your progress.";
  const roleLabel = selectedRole === "admin" ? "Admin Access" : "Learner Access";
  const roleCopy =
    selectedRole === "admin"
      ? "Use this workspace to manage content, review learner activity, and guide the platform experience."
      : "Use this workspace to build confidence with lessons, games, quizzes, and simulators.";

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/dashboard");
  };

  return (
    <main className="page-shell auth-shell">
      <section className="content-board auth-board overflow-hidden">
        <div className="auth-orb auth-orb-left" />
        <div className="auth-orb auth-orb-right" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="auth-form-card">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="eyebrow">{isLogin ? "Login" : "Sign Up"}</span>
              <div className="inline-flex rounded-full border border-white/50 bg-white/70 p-1 text-sm font-medium text-[#8b46d8]">
                <Link
                  to="/login"
                  className={[
                    "rounded-full px-4 py-2 transition",
                    isLogin ? "bg-[#8b5cf6] text-white shadow-[0_10px_25px_rgba(139,92,246,0.25)]" : "",
                  ].join(" ")}
                >
                  Login
                </Link>
                {selectedRole !== "admin" ? (
                  <Link
                    to="/signup"
                    className={[
                      "rounded-full px-4 py-2 transition",
                      !isLogin
                        ? "bg-[#8b5cf6] text-white shadow-[0_10px_25px_rgba(139,92,246,0.25)]"
                        : "",
                    ].join(" ")}
                  >
                    Sign Up
                  </Link>
                ) : null}
              </div>
            </div>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#5f2e99]">
              {heading}
            </h1>
            <p className="mt-4 text-base leading-8 text-[#7d63a1]">{copy}</p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {roles.map(({ id, label, description, icon: Icon }) => {
                const active = selectedRole === id;

                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setSelectedRole(id)}
                    className={[
                      "rounded-[26px] border p-5 text-left transition duration-200",
                      active
                        ? "border-[#c084fc] bg-[linear-gradient(145deg,_rgba(255,255,255,0.94),_rgba(241,228,255,0.96))] shadow-[0_18px_40px_rgba(168,85,247,0.16)]"
                        : "border-white/40 bg-white/65 hover:border-[#d8b4fe] hover:bg-white/80",
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="icon-chip">
                        <Icon size={20} />
                      </span>
                      {active ? (
                        <span className="rounded-full bg-[#f2e7ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#8b46d8]">
                          Selected
                        </span>
                      ) : null}
                    </div>
                    <h2 className="mt-4 text-xl font-semibold text-[#5f2e99]">{label}</h2>
                    <p className="mt-2 text-sm leading-7 text-[#7d63a1]">{description}</p>
                  </button>
                );
              })}
            </div>

            <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
              {!isLogin && !isAdminSignup ? (
                <label className="grid gap-2">
                  <span className="auth-label">Full name</span>
                  <input className="form-input" type="text" placeholder="Aarav Sharma" />
                </label>
              ) : null}

              <label className="grid gap-2">
                <span className="auth-label">Email address</span>
                <input
                  className="form-input"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>

              <label className="grid gap-2">
                <div className="flex items-center justify-between gap-3">
                  <span className="auth-label">Password</span>
                  {isLogin ? (
                    <button type="button" className="auth-link text-xs">
                      Forgot password?
                    </button>
                  ) : null}
                </div>
                <div className="auth-password-wrap">
                  <input
                    className="form-input auth-password-input"
                    type={showPassword ? "text" : "password"}
                    placeholder={isLogin ? "Enter your password" : "Create a secure password"}
                  />
                  <button
                    type="button"
                    className="auth-password-toggle"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((current) => !current)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </label>

              {!isLogin && !isAdminSignup ? (
                <label className="grid gap-2">
                  <span className="auth-label">Confirm password</span>
                  <div className="auth-password-wrap">
                    <input
                      className="form-input auth-password-input"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Re-enter your password"
                    />
                    <button
                      type="button"
                      className="auth-password-toggle"
                      aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                      onClick={() => setShowConfirmPassword((current) => !current)}
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </label>
              ) : null}

              {isAdminSignup ? (
                <div className="rounded-[24px] border border-[#e3d2ff] bg-[linear-gradient(145deg,_rgba(255,255,255,0.88),_rgba(244,236,255,0.92))] p-5 text-[#6f4798]">
                  <p className="font-semibold text-[#5f2e99]">
                    Admin accounts can&apos;t be created from this screen.
                  </p>
                  <p className="mt-2 leading-7">
                    Use the approved admin email and continue through the login page instead.
                  </p>
                  <Link to="/login" className="primary-pill mt-4 w-fit">
                    <span>Go to admin login</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              ) : (
                <>
                  <label className="auth-check">
                    <input type="checkbox" defaultChecked />
                    <span>
                      {isLogin
                        ? "Keep me signed in on this device"
                        : "I agree to the Terms of Service and Privacy Policy"}
                    </span>
                  </label>

                  <button type="submit" className="primary-pill justify-center">
                    <span>{isLogin ? "Login to dashboard" : "Create account"}</span>
                    <ArrowRight size={18} />
                  </button>
                </>
              )}
            </form>

            <div className="auth-divider">
              <span>or continue with</span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <button type="button" className="auth-provider">
                <span className="auth-provider-mark">G</span>
                Google
              </button>
              <button type="button" className="auth-provider">
                <span className="auth-provider-mark">A</span>
                Apple
              </button>
            </div>

            {selectedRole !== "admin" ? (
              <p className="mt-6 text-sm text-[#7d63a1]">
                {isLogin ? "New to FinArena?" : "Already have an account?"}{" "}
                <Link to={isLogin ? "/signup" : "/login"} className="font-semibold text-[#7b3aed]">
                  {isLogin ? "Sign up here" : "Login here"}
                </Link>
              </p>
            ) : (
              <p className="mt-6 text-sm text-[#7d63a1]">
                Admin access uses approved credentials only.
              </p>
            )}
          </div>

          <div className="flex items-center justify-center">
            <div className="auth-showcase">
              <div className="absolute inset-x-10 top-10 h-52 rounded-full bg-[radial-gradient(circle,_rgba(216,180,254,0.5),_transparent_70%)] blur-2xl" />

              <div className="relative z-10 flex items-center justify-between gap-4 rounded-[28px] border border-white/45 bg-white/75 px-5 py-4 shadow-[0_18px_40px_rgba(168,85,247,0.08)]">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#ab8bcc]">
                    FinArena access
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-[#5f2e99]">{roleLabel}</h2>
                </div>
                <span className="icon-chip">
                  {selectedRole === "admin" ? <ShieldCheck size={20} /> : <Sparkles size={20} />}
                </span>
              </div>

              <img
                src={rocketImage}
                alt="FinArena welcome illustration"
                className="relative z-10 h-auto w-full rounded-[26px] object-cover"
              />

              <div className="relative z-10 grid gap-4">
                <div className="rounded-[28px] bg-white/80 p-6">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#ab8bcc]">
                    Selected role
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold text-[#5f2e99]">{roleLabel}</h3>
                  <p className="mt-3 text-base leading-8 text-[#7d63a1]">{roleCopy}</p>
                </div>

                <div className="grid gap-3 rounded-[28px] border border-white/45 bg-[linear-gradient(180deg,_rgba(255,255,255,0.78),_rgba(247,238,255,0.78))] p-6">
                  <div className="flex items-center gap-3">
                    <span className="icon-chip">
                      <BarChart3 size={20} />
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-[#ab8bcc]">
                        Why join
                      </p>
                      <h4 className="text-xl font-semibold text-[#5f2e99]">
                        Your finance practice hub
                      </h4>
                    </div>
                  </div>

                  {trustPoints.map((point) => (
                    <div key={point} className="auth-trust-row">
                      <CheckCircle2 size={18} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

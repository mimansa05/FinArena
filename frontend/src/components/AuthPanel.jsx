import { ShieldCheck, UserRound } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import rocketImage from "../assets/rocket.png";

const roles = [
  {
    id: "learner",
    label: "Learner",
    description: "Access courses, quizzes, games, and progress tracking.",
    icon: UserRound,
  },
  {
    id: "admin",
    label: "Admin",
    description: "Manage content, track users, and monitor platform activity.",
    icon: ShieldCheck,
  },
];

export default function AuthPanel({ mode }) {
  const [selectedRole, setSelectedRole] = useState("learner");
  const isLogin = mode === "login";

  return (
    <main className="page-shell">
      <section className="content-board overflow-hidden">
        <div className="auth-orb auth-orb-left" />
        <div className="auth-orb auth-orb-right" />

        <div className="relative z-10 grid gap-10 px-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[34px] border border-white/45 bg-[linear-gradient(160deg,_rgba(255,255,255,0.82),_rgba(243,233,255,0.75))] p-8 shadow-[0_24px_70px_rgba(168,85,247,0.1)]">
            <span className="eyebrow">{isLogin ? "Login" : "Sign Up"}</span>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#5f2e99]">
              {isLogin
                ? "Welcome back to FinArena."
                : "Create your FinArena account."}
            </h1>
            <p className="mt-4 text-base leading-8 text-[#7d63a1]">
              {isLogin
                ? "Choose your role and continue your finance learning journey."
                : "Choose whether you are joining as a learner or an admin."}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {roles.map(({ id, label, description, icon: Icon }) => {
                const active = selectedRole === id;

                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setSelectedRole(id)}
                    className={[
                      "rounded-[26px] border p-5 text-left transition",
                      active
                        ? "border-[#c084fc] bg-[linear-gradient(145deg,_rgba(255,255,255,0.92),_rgba(241,228,255,0.95))] shadow-[0_18px_40px_rgba(168,85,247,0.16)]"
                        : "border-white/40 bg-white/65 hover:border-[#d8b4fe]",
                    ].join(" ")}
                  >
                    <span className="icon-chip">
                      <Icon size={20} />
                    </span>
                    <h2 className="mt-4 text-xl font-semibold text-[#5f2e99]">
                      {label}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-[#7d63a1]">
                      {description}
                    </p>
                  </button>
                );
              })}
            </div>

            <form className="mt-8 grid gap-4" onSubmit={(event) => event.preventDefault()}>
              {!isLogin ? (
                <input className="form-input" type="text" placeholder="Full name" />
              ) : null}
              <input className="form-input" type="email" placeholder="Email address" />
              <input className="form-input" type="password" placeholder="Password" />
              {!isLogin ? (
                <input
                  className="form-input"
                  type="password"
                  placeholder="Confirm password"
                />
              ) : null}
              <button type="submit" className="primary-pill justify-center">
                {isLogin ? `Login as ${selectedRole}` : `Create ${selectedRole} account`}
              </button>
            </form>

            <p className="mt-6 text-sm text-[#7d63a1]">
              {isLogin ? "New to FinArena?" : "Already have an account?"}{" "}
              <Link
                to={isLogin ? "/signup" : "/login"}
                className="font-semibold text-[#7b3aed]"
              >
                {isLogin ? "Sign up here" : "Login here"}
              </Link>
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[560px] rounded-[36px] border border-white/45 bg-[linear-gradient(160deg,_rgba(255,255,255,0.58),_rgba(235,214,255,0.7))] p-6 shadow-[0_28px_80px_rgba(168,85,247,0.14)]">
              <div className="absolute inset-x-10 top-10 h-52 rounded-full bg-[radial-gradient(circle,_rgba(216,180,254,0.5),_transparent_70%)] blur-2xl" />
              <img
                src={rocketImage}
                alt="FinArena welcome illustration"
                className="relative z-10 h-auto w-full rounded-[26px] object-cover"
              />
              <div className="relative z-10 mt-6 rounded-[28px] bg-white/78 p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-[#ab8bcc]">
                  Selected role
                </p>
                <h3 className="mt-2 text-3xl font-semibold text-[#5f2e99]">
                  {selectedRole === "admin" ? "Admin Access" : "Learner Access"}
                </h3>
                <p className="mt-3 text-base leading-8 text-[#7d63a1]">
                  {selectedRole === "admin"
                    ? "Use this flow to manage courses, content, and learner progress."
                    : "Use this flow to learn, play challenges, and track your growth."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

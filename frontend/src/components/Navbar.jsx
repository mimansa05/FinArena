import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/learn" },
  { label: "Games", to: "/practice" },
  { label: "Quizzes", to: "/quiz" },
  { label: "FAQ", to: "/about" },
];

function navClassName({ isActive }) {
  return [
    "rounded-full px-3 py-2 text-sm font-semibold transition-colors duration-200",
    isActive
      ? "bg-[#efe4ff] text-[#6d28d9] shadow-[0_10px_24px_rgba(139,92,246,0.14)]"
      : "text-[#7b4bb7] hover:bg-white/70 hover:text-[#5b21b6]",
  ].join(" ");
}

export default function Navbar() {
  return (
    <header className="relative z-50 px-3 pt-3 sm:px-4">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 rounded-[28px] border border-white/70 bg-[linear-gradient(180deg,_rgba(255,255,255,0.96),_rgba(247,241,255,0.92))] px-5 py-4 text-[#7b4bb7] shadow-[0_20px_50px_rgba(164,120,245,0.16)] backdrop-blur-xl sm:px-6">
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-[-0.04em] text-[#7b4bb7] sm:text-3xl"
        >
          FinArena
        </NavLink>

        <nav className="flex min-w-0 items-center gap-2 sm:gap-3">
          <div className="flex min-w-0 items-center gap-1 overflow-x-auto whitespace-nowrap pr-1 scrollbar-none">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClassName}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <NavLink
            to="/signup"
            className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,_#8b5cf6,_#b26cf7)] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(139,92,246,0.25)]"
          >
            Sign Up
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

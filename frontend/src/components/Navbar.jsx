import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Learn", to: "/learn" },
  { label: "Practice", to: "/practice" },
  { label: "Quiz", to: "/quiz" },
  { label: "Simulator", to: "/simulator" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

function navClassName({ isActive }) {
  return [
    "rounded-full px-4 py-2 text-sm font-medium transition",
    isActive
      ? "bg-white text-[#7b3aed] shadow-[0_12px_30px_rgba(147,51,234,0.18)]"
      : "text-[#7a44b8] hover:bg-white/60 hover:text-[#6d28d9]",
  ].join(" ");
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto max-w-7xl rounded-[28px] border border-white/40 bg-white/65 px-4 py-3 shadow-[0_20px_60px_rgba(168,85,247,0.18)] backdrop-blur-xl sm:px-6">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            className="flex items-center gap-3 text-lg font-semibold tracking-tight text-[#6f2bc5]"
            onClick={() => setIsOpen(false)}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,_#9b5cf6,_#d8b4fe)] text-white shadow-[0_14px_28px_rgba(155,92,246,0.3)]">
              <Sparkles size={20} />
            </span>
            <span>FinArena</span>
          </NavLink>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClassName}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <NavLink
              to="/login"
              className="hidden rounded-full border border-white/55 bg-white/80 px-5 py-2.5 text-sm font-semibold text-[#7b3aed] transition hover:-translate-y-0.5 md:inline-flex"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="hidden rounded-full bg-[linear-gradient(135deg,_#8b5cf6,_#a855f7)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(139,92,246,0.35)] transition hover:-translate-y-0.5 md:inline-flex"
            >
              Sign Up
            </NavLink>
            <NavLink
              to="/dashboard"
              className="hidden rounded-full border border-white/55 bg-white/80 px-5 py-2.5 text-sm font-semibold text-[#7b3aed] transition hover:-translate-y-0.5 xl:inline-flex"
            >
              Open Dashboard
            </NavLink>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/50 bg-white/70 text-[#7b3aed] lg:hidden"
              aria-label="Navigation menu"
              onClick={() => setIsOpen((current) => !current)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isOpen ? (
          <nav className="mt-4 grid gap-2 lg:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={navClassName}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/login"
              className="inline-flex justify-center rounded-full border border-white/55 bg-white/80 px-5 py-3 text-sm font-semibold text-[#7b3aed]"
              onClick={() => setIsOpen(false)}
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="inline-flex justify-center rounded-full bg-[linear-gradient(135deg,_#8b5cf6,_#a855f7)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(139,92,246,0.35)]"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </NavLink>
            <NavLink
              to="/dashboard"
              className="inline-flex justify-center rounded-full border border-white/55 bg-white/80 px-5 py-3 text-sm font-semibold text-[#7b3aed]"
              onClick={() => setIsOpen(false)}
            >
              Open Dashboard
            </NavLink>
          </nav>
        ) : null}
      </div>
    </header>
  );
}

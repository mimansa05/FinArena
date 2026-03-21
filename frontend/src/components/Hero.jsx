import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <div className="relative px-16 py-20 bg-gradient-to-b from-purple-100 via-purple-200 to-purple-300">

      {/* CONTENT */}
      <div className="relative z-10 max-w-xl">
        <h1 className="text-5xl font-bold text-purple-700 leading-tight mb-6">
          Learn finance in a fun and interactive way with FinArena
        </h1>

        <p className="text-gray-600 mb-6">
          Master finance through engaging courses, games, and quizzes.
        </p>

        <div className="flex gap-4">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition">
            Get Started
          </button>

          <button className="bg-white text-purple-600 px-6 py-3 rounded-full shadow hover:scale-105 transition">
            Explore Courses
          </button>
        </div>
      </div>

      {/* IMAGE */}
      <img
        src={hero}
        className="absolute right-10 top-10 w-[600px] opacity-95 pointer-events-none"
      />
    </div>
  );
}
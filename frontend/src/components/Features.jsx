import coins from "../assets/coins.png";
import game from "../assets/game.png";
import rocket from "../assets/rocket.png";

export default function Features() {
  return (
    <div className="grid grid-cols-3 gap-8 px-16 py-16 bg-purple-100">

      {/* CARD 1 */}
      <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition">
        <img src={coins} className="w-24 mx-auto mb-4" />
        <h2 className="text-lg font-bold text-purple-700 mb-2">
          Interactive Courses
        </h2>
        <p className="text-gray-600 mb-4">
          Learn finance with fun modules
        </p>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-full">
          Explore Courses
        </button>
      </div>

      {/* CARD 2 */}
      <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition">
        <img src={game} className="w-24 mx-auto mb-4" />
        <h2 className="text-lg font-bold text-purple-700 mb-2">
          Finance Games
        </h2>
        <p className="text-gray-600 mb-4">
          Learn while playing games
        </p>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-full">
          Play Games
        </button>
      </div>

      {/* CARD 3 */}
      <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition">
        <img src={rocket} className="w-24 mx-auto mb-4" />
        <h2 className="text-lg font-bold text-purple-700 mb-2">
          Take Quizzes
        </h2>
        <p className="text-gray-600 mb-4">
          Test your financial knowledge
        </p>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-full">
          Start Quiz
        </button>
      </div>

    </div>
  );
}
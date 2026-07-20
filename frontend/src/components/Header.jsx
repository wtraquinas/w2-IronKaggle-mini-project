import { Moon, Sun, Store } from "lucide-react";

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="bg-blue-700 text-white shadow-lg">
      <div className="max-w-4xl mx-auto py-8 px-6 flex items-center gap-4">

        <div className="bg-white text-blue-700 p-3 rounded-full">
          <Store size={32} />
        </div>

        <div>
          <h1 className="text-3xl font-bold">
            Shop Sales Predictor
          </h1>

          <p className="text-blue-100 mt-1">
            Predict daily retail sales using Machine Learning
          </p>

            <button
                onClick={() => setDarkMode((prev) => !prev)}
                className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition"
            >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

        </div>

      </div>
    </header>
  );
}

export default Header;
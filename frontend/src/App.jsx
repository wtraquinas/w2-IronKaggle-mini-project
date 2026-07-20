import Header from "./components/Header";
import Footer from "./components/Footer";
import PredictionForm from "./components/PredictionForm";
import PredictionResult from "./components/PredictionResult";
import { useState, useEffect } from "react";

function App() {

    const [prediction, setPrediction] = useState(null);

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);

    return (

        <div className="min-h-screen bg-slate-100 dark:bg-slate-900 transition-colors">

            <Header
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

            <main className="max-w-3xl mx-auto p-6">

                <PredictionForm
                    onPrediction={setPrediction}
                />

                <PredictionResult
                    prediction={prediction}
                />

            </main>

            <Footer />

        </div>

    );

}

export default App;
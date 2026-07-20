import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PredictionForm from "./components/PredictionForm";
import PredictionResult from "./components/PredictionResult";

function App() {

    const [prediction, setPrediction] = useState(null);

    return (

        <div className="min-h-screen bg-slate-100">

            <Header />

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
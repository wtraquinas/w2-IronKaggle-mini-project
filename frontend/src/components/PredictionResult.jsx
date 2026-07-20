function PredictionResult({ prediction }) {
  if (prediction === null) return null;

  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  }).format(prediction);

  return (
    <div className="mt-8 rounded-xl bg-emerald-900/40 border border-emerald-700 shadow-lg p-8 text-center">

      <h2 className="text-xl font-semibold text-emerald-200">
        Predicted Sales
      </h2>

      <p className="text-5xl font-bold text-emerald-400 mt-4">
        {formatted}
      </p>

    </div>
  );
}

export default PredictionResult;
function PredictionResult({ prediction }) {
  if (prediction === null) return null;

  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  }).format(prediction);

  return (
    <div className="mt-8 bg-green-50 border border-green-200 rounded-xl shadow p-8 text-center">

      <h2 className="text-xl font-semibold text-gray-700">
        Predicted Sales
      </h2>

      <p className="text-5xl font-bold text-green-700 mt-4">
        {formatted}
      </p>

    </div>
  );
}

export default PredictionResult;
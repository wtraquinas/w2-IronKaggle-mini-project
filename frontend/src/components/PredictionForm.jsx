import { useState } from "react";
import { useForm } from "react-hook-form";
import api from "../services/api";
import LoadingSpinner from "./LoadingSpinner";

function PredictionForm({ onPrediction }) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      promotion: 0,
      state_holiday: "0",
      school_holiday: 0,
    },
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const payload = {
        store_ID: Number(data.store_ID),
        day_of_week: Number(data.day_of_week),
        date: data.date,
        nb_customers_on_day: Number(data.nb_customers_on_day),
        promotion: Number(data.promotion),
        state_holiday: data.state_holiday,
        school_holiday: Number(data.school_holiday),
      };

      const response = await api.post("/predict", payload);

      onPrediction(response.data.predicted_sales);

    } catch (error) {
      console.error(error);

      alert("Prediction failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Store ID */}

        <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">
          Store ID
        </label>

        <input
          type="number"
          className="w-full border rounded-lg p-3 bg-white dark:bg-slate-700 dark:text-white dark:border-slate-600"
          {...register("store_ID", { required: true })}
        />

        {errors.store_ID && (
          <p className="text-red-600 mb-4">
            Store ID is required
          </p>
        )}

        {/* Day */}

        <label className="block font-semibold mb-2">
          Day of Week
        </label>

        <select
          className="w-full border rounded-lg p-3 mb-4"
          {...register("day_of_week")}
        >
          <option value={1}>Monday</option>
          <option value={2}>Tuesday</option>
          <option value={3}>Wednesday</option>
          <option value={4}>Thursday</option>
          <option value={5}>Friday</option>
          <option value={6}>Saturday</option>
          <option value={7}>Sunday</option>
        </select>

        {/* Date */}

        <label className="block font-semibold mb-2">
          Date
        </label>

        <input
          type="date"
          className="w-full border rounded-lg p-3 mb-4"
          {...register("date", { required: true })}
        />

        {errors.date && (
          <p className="text-red-600 mb-4">
            Date is required
          </p>
        )}

        {/* Customers */}

        <label className="block font-semibold mb-2">
          Number of Customers
        </label>

        <input
          type="number"
          className="w-full border rounded-lg p-3 mb-4"
          {...register("nb_customers_on_day", { required: true })}
        />

        {errors.nb_customers_on_day && (
          <p className="text-red-600 mb-4">
            Number of customers is required
          </p>
        )}

        {/* Promotion */}

        <label className="block font-semibold mb-2">
          Promotion
        </label>

        <select
          className="w-full border rounded-lg p-3 mb-4"
          {...register("promotion")}
        >
          <option value={0}>No</option>
          <option value={1}>Yes</option>
        </select>

        {/* State Holiday */}

        <label className="block font-semibold mb-2">
          State Holiday
        </label>

        <select
          className="w-full border rounded-lg p-3 mb-4"
          {...register("state_holiday")}
        >
          <option value="0">None</option>
          <option value="a">Public Holiday</option>
          <option value="b">Easter Holiday</option>
          <option value="c">Christmas</option>
        </select>

        {/* School Holiday */}

        <label className="block font-semibold mb-2">
          School Holiday
        </label>

        <select
          className="w-full border rounded-lg p-6 mb-6"
          {...register("school_holiday")}
        >
          <option value={0}>No</option>
          <option value={1}>Yes</option>
        </select>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="flex gap-4">

            <button
              type="submit"
              className="flex-1 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition"
            >
              Predict Sales
            </button>

            <button
              type="button"
              onClick={() => {
                reset();
                onPrediction(null);
              }}
              className="bg-gray-200 hover:bg-gray-300 px-6 rounded-lg"
            >
              Reset
            </button>

          </div>
        )}

      </form>

    </div>
  );
}

export default PredictionForm;
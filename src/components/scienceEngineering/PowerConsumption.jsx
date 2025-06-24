import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaPlug } from "react-icons/fa";
import { calculatePowerConsumption } from "../../utils/scienceAndEngineering";

const PowerConsumption = () => {
  const [powerRating, setPowerRating] = useState("");
  const [hoursPerDay, setHoursPerDay] = useState("");
  const [days, setDays] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    const power = parseFloat(powerRating);
    const hours = parseFloat(hoursPerDay);
    const numDays = parseFloat(days);

    if (isNaN(power) || isNaN(hours) || isNaN(numDays)) {
      setError("Please enter valid numbers in all fields.");
      setResult(null);
      return;
    }

    const output = calculatePowerConsumption(power, hours, numDays);
    setResult(output);
    setError("");
  };

  return (
    <>
      <Helmet>
        <title>Power Consumption Calculator | CalPro</title>
        <meta name="description" content="Estimate energy usage in kilowatt-hours (kWh) for appliances." />
        <link rel="canonical" href="https://yourdomain.com/physics/power-consumption" />
      </Helmet>

      <div className="flex flex-col items-center pb-4 w-full">
        <div className="self-start mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Power Consumption Calculator</h2>
          <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">Calculate electricity usage of any appliance over time.</p>
        </div>

        <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
          <div className="flex items-center justify-center gap-2 mb-6">
            <FaPlug className="text-indigo-600 text-xl md:text-3xl" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Power Usage (kWh)</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">🔌 Power Rating (Watts)</label>
              <input
                type="number"
                value={powerRating}
                onChange={(e) => setPowerRating(e.target.value)}
                placeholder="e.g. 1000"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">⏱️ Hours Per Day</label>
              <input
                type="number"
                value={hoursPerDay}
                onChange={(e) => setHoursPerDay(e.target.value)}
                placeholder="e.g. 5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">📅 Number of Days</label>
              <input
                type="number"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                placeholder="e.g. 30"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300"
          >
            🔍 Calculate Consumption
          </button>

          {error && <p className="mt-4 text-red-600 text-center text-sm">{error}</p>}

          {result !== null && (
            <div className="mt-8 text-center text-gray-700">
              <p>⚡ Estimated Energy Consumption: <strong>{result} kWh</strong></p>
            </div>
          )}
        </div>

        <div className="pt-10">
          <p className="text-sm text-gray-600">This tool helps you estimate the total energy usage of electrical appliances over a period.</p>
        </div>
      </div>
    </>
  );
};

export default PowerConsumption;

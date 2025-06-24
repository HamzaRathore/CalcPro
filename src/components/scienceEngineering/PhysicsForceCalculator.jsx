import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaWeightHanging } from "react-icons/fa";
import { calculateForce } from "../../utils/scienceAndEngineering";

const PhysicsForceCalculator = () => {
  const [mass, setMass] = useState("");
  const [acceleration, setAcceleration] = useState("");
  const [force, setForce] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    const m = parseFloat(mass);
    const a = parseFloat(acceleration);

    if (isNaN(m) || isNaN(a)) {
      setError("Please enter valid numeric values for both mass and acceleration.");
      setForce(null);
      return;
    }

    const result = calculateForce(m, a);
    setForce(result);
    setError("");
  };

  return (
    <>
      <Helmet>
        <title>Force Calculator | CalPro</title>
        <meta name="description" content="Calculate force using Newton's Second Law: F = m * a" />
        <link rel="canonical" href="https://yourdomain.com/science/force" />
      </Helmet>

      <div className="flex flex-col items-center pb-4 w-full">
        <div className="self-start mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Force Calculator</h2>
          <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">
            Enter mass and acceleration to calculate the force using Newton's Second Law (F = m * a).
          </p>
        </div>

        <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
          <div className="flex items-center justify-center gap-2 mb-6">
            <FaWeightHanging className="text-red-500 text-xl md:text-3xl" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Force Calculator</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">⚖️ Mass (kg)</label>
              <input
                type="number"
                value={mass}
                onChange={(e) => setMass(e.target.value)}
                placeholder="e.g. 10"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">🏃 Acceleration (m/s²)</label>
              <input
                type="number"
                value={acceleration}
                onChange={(e) => setAcceleration(e.target.value)}
                placeholder="e.g. 9.8"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full mt-6 bg-gradient-to-r from-red-400 to-pink-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300"
          >
            🧮 Calculate Force
          </button>

          {error && <p className="mt-4 text-red-600 text-center text-sm">{error}</p>}

          {force !== null && !error && (
            <div className="mt-8 text-center text-gray-700">
              <p className="text-xl font-bold">💥 Force: {force} N</p>
            </div>
          )}
        </div>

        <div className="pt-10">
          <p className="text-sm text-gray-600">This calculator uses the formula: Force = Mass x Acceleration. Ensure values are in kilograms and meters per second squared.</p>
        </div>
      </div>
    </>
  );
};

export default PhysicsForceCalculator;

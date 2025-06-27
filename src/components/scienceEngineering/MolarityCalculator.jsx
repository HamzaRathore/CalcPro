import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaFlask } from "react-icons/fa";
import { calculateMolarity } from "../../utils/scienceAndEngineering";
const DOMAIN = import.meta.env.VITE_SITE_DOMAIN;

const MolarityCalculator = () => {
  const [moles, setMoles] = useState("");
  const [volume, setVolume] = useState("");
  const [molarity, setMolarity] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    const mol = parseFloat(moles);
    const vol = parseFloat(volume);

    if (isNaN(mol) || isNaN(vol) || vol === 0) {
      setError("Please enter valid moles and a non-zero volume in liters.");
      setMolarity(null);
      return;
    }

    const result = calculateMolarity(mol, vol);
    setMolarity(result);
    setError("");
  };

  return (
    <>
      <Helmet>
        <title>Molarity Calculator | CalPro</title>
        <meta
          name="description"
          content="Calculate molarity using moles of solute and volume of solution."
        />
        <link rel="canonical" href={`${DOMAIN}/science/molarity`} />
        <meta
          property="og:title"
          content="Molarity Calculator - CalPro"
        />
        <meta
          property="og:description"
          content="Easily calculate Molarity."
        />
      </Helmet>

      <div className="flex flex-col items-center pb-4 w-full">
        <div className="self-start mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Molarity Calculator
          </h2>
          <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">
            Enter the number of moles and volume in liters to calculate molarity
            (mol/L).
          </p>
        </div>

        <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
          <div className="flex items-center justify-center gap-2 mb-6">
            <FaFlask className="text-indigo-500 text-xl md:text-3xl" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Molarity
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                ⚗️ Moles of Solute (mol)
              </label>
              <input
                type="number"
                value={moles}
                min={0}
                onChange={(e) => setMoles(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "-" || e.key === "e") e.preventDefault();
                }}
                placeholder="e.g. 0.5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                💧 Volume of Solution (L)
              </label>
              <input
                type="number"
                value={volume}
                min={0}
                onChange={(e) => setVolume(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "-" || e.key === "e") e.preventDefault();
                }}
                placeholder="e.g. 1.0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full mt-6 bg-gradient-to-r from-indigo-400 to-purple-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300 hover:cursor-pointer"
          >
            🧪 Calculate Molarity
          </button>

          {error && (
            <p className="mt-4 text-red-600 text-center text-sm">{error}</p>
          )}

          {molarity !== null && !error && (
            <div className="mt-8 text-center text-gray-700">
              <p className="text-xl font-bold">🧬 Molarity: {molarity} mol/L</p>
            </div>
          )}
        </div>

        <div className="pt-10">
          <p className="text-sm text-gray-600">
            Molarity (M) is calculated using the formula: M = moles of solute /
            volume of solution (L).
          </p>
        </div>
      </div>
    </>
  );
};

export default MolarityCalculator;

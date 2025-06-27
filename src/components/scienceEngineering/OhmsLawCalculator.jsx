import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaBolt } from "react-icons/fa";
import { calculateOhmsLaw } from "../../utils/scienceAndEngineering";
const DOMAIN = import.meta.env.VITE_SITE_DOMAIN;

const OhmsLawCalculator = () => {
  const [voltage, setVoltage] = useState("");
  const [current, setCurrent] = useState("");
  const [resistance, setResistance] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    const v = voltage.trim() !== "" ? parseFloat(voltage) : null;
    const i = current.trim() !== "" ? parseFloat(current) : null;
    const r = resistance.trim() !== "" ? parseFloat(resistance) : null;

    const filledValues = [v, i, r].filter((val) => val !== null);
    if (filledValues.length !== 2) {
      setError("Please enter exactly two values to calculate the third.");
      setResult(null);
      return;
    }

    const output = calculateOhmsLaw(v, i, r);
    setResult(output);
    setError("");
  };

  return (
    <>
      <Helmet>
        <title>Ohm's Law Calculator | CalPro</title>
        <meta
          name="description"
          content="Calculate voltage, current, or resistance using Ohm's Law instantly."
        />
        <link rel="canonical" href={`${DOMAIN}/science/ohms-law`} />
        <meta
          property="og:title"
          content="OHM's Law Calculator - CalPro"
        />
        <meta
          property="og:description"
          content="Easily calculate ohm's law."
        />
      </Helmet>

      <div className="flex flex-col items-center pb-4 w-full">
        <div className="self-start mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Ohm's Law Calculator
          </h2>
          <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">
            Provide any two values to calculate the third using Ohm's Law (V = I
            × R).
          </p>
        </div>

        <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
          <div className="flex items-center justify-center gap-2 mb-6">
            <FaBolt className="text-yellow-500 text-xl md:text-3xl" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Ohm's Law
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                🔌 Voltage (V)
              </label>
              <input
                type="number"
                value={voltage}
                
                onChange={(e) => setVoltage(e.target.value)}
               
                placeholder="e.g. 12"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                ⚡ Current (I)
              </label>
              <input
                type="number"
                value={current}
                
                onChange={(e) => setCurrent(e.target.value)}
                
                placeholder="e.g. 2"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                🌀 Resistance (Ω)
              </label>
              <input
                type="number"
                value={resistance}
                min={0}
                onChange={(e) => setResistance(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "-" || e.key === "e") e.preventDefault();
                }}
                placeholder="e.g. 6"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full mt-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300 hover:cursor-pointer"
          >
            🔍 Calculate
          </button>

          {error && (
            <div className="mt-4 text-red-500 text-sm text-center">{error}</div>
          )}

          {result && (
            <div className="mt-8 text-center text-gray-700">
              {result.voltage !== null && (
                <p>
                  🔌 Voltage: <strong>{result.voltage} V</strong>
                </p>
              )}
              {result.current !== null && (
                <p>
                  ⚡ Current: <strong>{result.current} A</strong>
                </p>
              )}
              {result.resistance !== null && (
                <p>
                  🌀 Resistance: <strong>{result.resistance} Ω</strong>
                </p>
              )}
            </div>
          )}
        </div>

        <div className="pt-10">
          <p className="text-sm text-gray-600">
            Use this calculator to solve for voltage, current, or resistance.
            Enter any two values and leave one blank.
          </p>
        </div>
      </div>
    </>
  );
};

export default OhmsLawCalculator;

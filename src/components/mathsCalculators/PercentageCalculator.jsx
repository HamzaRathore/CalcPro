import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaPercentage } from "react-icons/fa";
import { calculatePercentage, calculateWhatPercentage } from "../../utils/mathsCalculator";

const PercentageCalculator = () => {
  const [value, setValue] = useState("");
  const [percent, setPercent] = useState("");
  const [base, setBase] = useState("");
  const [part, setPart] = useState("");
  const [mode, setMode] = useState("of");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    setError("");
    let res;

    if (mode === "of") {
      const v = parseFloat(value);
      const p = parseFloat(percent);
      if (isNaN(v) || isNaN(p)) {
        setError("Enter valid numbers for value and percentage.");
        return;
      }
      res = calculatePercentage(v, p);
    } else {
      const t = parseFloat(base);
      const pt = parseFloat(part);
      if (isNaN(t) || isNaN(pt)) {
        setError("Enter valid numbers for part and total.");
        return;
      }
      res = calculateWhatPercentage(pt, t);
    }

    setResult(res);
  };

  return (
    <>
      <Helmet>
        <title>Percentage Calculator | CalPro</title>
        <meta name="description" content="Calculate percentages or find what percent one number is of another." />
        <link rel="canonical" href="https://yourdomain.com/math/percentage-calculator" />
      </Helmet>

      <div className="flex flex-col items-center pb-4 w-full">
        <div className="self-start mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Percentage Calculator</h2>
          <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">
            Use this calculator to find a percentage of a value or what percent one number is of another.
          </p>
        </div>

        <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
          <div className="flex justify-center gap-2 mb-6">
            <FaPercentage className="text-yellow-500 text-xl md:text-3xl" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Percentage Calculator</h2>
          </div>

          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => {
                setMode("of");
                setResult(null);
                setError("");
              }}
              className={`px-4 py-2 rounded-lg font-medium border ${mode === "of" ? "bg-yellow-400 text-white" : "bg-white text-gray-700"}`}
            >
              What is % of value?
            </button>
            <button
              onClick={() => {
                setMode("percent");
                setResult(null);
                setError("");
              }}
              className={`px-4 py-2 rounded-lg font-medium border ${mode === "percent" ? "bg-yellow-400 text-white" : "bg-white text-gray-700"}`}
            >
              What % of total?
            </button>
          </div>

          {mode === "of" ? (
            <>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">🔢 Value</label>
                  <input
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="e.g. 500"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">📊 Percentage (%)</label>
                  <input
                    type="number"
                    value={percent}
                    onChange={(e) => setPercent(e.target.value)}
                    placeholder="e.g. 20"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">🔢 Part</label>
                  <input
                    type="number"
                    value={part}
                    onChange={(e) => setPart(e.target.value)}
                    placeholder="e.g. 150"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">📦 Total</label>
                  <input
                    type="number"
                    value={base}
                    onChange={(e) => setBase(e.target.value)}
                    placeholder="e.g. 600"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
              </div>
            </>
          )}

          <button
            onClick={handleCalculate}
            className="w-full mt-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300"
          >
            🔍 Calculate
          </button>

          {error && <p className="mt-4 text-red-600 text-center text-sm">{error}</p>}

          {result !== null && (
            <div className="mt-8 text-center text-gray-700">
              <p className="text-xl font-semibold">✅ Result: <span className="text-yellow-600">{result}</span></p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PercentageCalculator;

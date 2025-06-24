import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaDice } from "react-icons/fa";
import { calculateProbability } from "../../utils/mathsCalculator";

const ProbabilityCalculator = () => {
  const [favorable, setFavorable] = useState(0);
  const [total, setTotal] = useState(0);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const res = calculateProbability(Number(favorable), Number(total));
    setResult(res);
  };

  return (
    <>
      <Helmet>
        <title>Probability Calculator | CalPro</title>
        <meta
          name="description"
          content="Calculate the probability of an event based on favorable and total outcomes."
        />
        <link rel="canonical" href="https://yourdomain.com/math/probability" />
      </Helmet>

      <div className="flex flex-col items-center pb-4 w-full">
        <div className="self-start mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Probability Calculator</h2>
          <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">
            Find the likelihood of an event happening using favorable and total outcomes.
          </p>
        </div>

        <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
          <div className="flex justify-center gap-2 mb-6">
            <FaDice className="text-purple-600 text-xl md:text-3xl" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Probability Calculator</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">🎯 Favorable Outcomes</label>
              <input
                type="number"
                value={favorable}
                onChange={(e) => setFavorable(e.target.value)}
                placeholder="e.g. 3"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">🎲 Total Possible Outcomes</label>
              <input
                type="number"
                value={total}
                onChange={(e) => setTotal(e.target.value)}
                placeholder="e.g. 6"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full mt-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300"
          >
            🧮 Calculate Probability
          </button>

          {result && (
            <div className="mt-8 text-center text-gray-700">
              {result.error ? (
                <p className="text-red-500 text-sm">{result.error}</p>
              ) : (
                <>
                  <p className="text-lg">🎉 Probability: <span className="font-bold">{result.probability}</span></p>
                  <p className="text-sm text-gray-500">(or {(result.probability * 100).toFixed(2)}%)</p>
                </>
              )}
            </div>
          )}

          
        </div>
        <div className="pt-10">
            <p className="text-sm text-gray-600">
              This calculator computes the probability of an event occurring using the formula:
              <strong> P(E) = Favorable Outcomes / Total Outcomes</strong>. It's ideal for basic
              probability problems in statistics and mathematics.
            </p>
          </div>
      </div>
    </>
  );
};

export default ProbabilityCalculator;

import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaHeart } from "react-icons/fa";
import { calculateLoveCompatibility } from "../../utils/dailyLife";

const LoveCompatibilityCalculator = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const res = calculateLoveCompatibility(name1, name2);
    setResult(res);
  };

  return (
    <>
      <Helmet>
        <title>Love Compatibility Calculator | CalPro</title>
        <meta
          name="description"
          content="Calculate the love compatibility percentage between two names using this fun calculator."
        />
        <link
          rel="canonical"
          href="https://yourdomain.com/fun/love-compatibility"
        />
      </Helmet>

      <div className="flex flex-col items-center pb-4 w-full">
        <div className="self-start mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Love Compatibility Calculator
          </h2>
          <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">
            Enter two names and see how compatible you are based on fun matching
            logic.
          </p>
        </div>

        <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
          <div className="flex justify-center gap-2 mb-6">
            <FaHeart className="text-red-500 text-xl md:text-3xl animate-pulse" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Love Compatibility
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                💑 Name 1
              </label>
              <input
                type="text"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
                placeholder="e.g. Alice"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                💑 Name 2
              </label>
              <input
                type="text"
                value={name2}
                onChange={(e) => setName2(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
                placeholder="e.g. Bob"
              />
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full mt-6 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300"
          >
            ❤️ Check Compatibility
          </button>

          {result && (
            <div className="mt-8 text-center text-gray-700">
              {result.error ? (
                <p className="text-red-500 text-sm">{result.error}</p>
              ) : (
                <>
                  <p className="text-lg font-bold">Compatibility Score:</p>
                  <p className="text-4xl font-extrabold text-pink-600 mt-2">
                    {result.compatibility}%
                  </p>
                </>
              )}
            </div>
          )}
        </div>
        <div className="pt-10">
          <p className="text-sm text-gray-600">
            This fun tool calculates your love compatibility using name-based
            matching logic. Just enter two names and get your match!
          </p>
        </div>
      </div>
    </>
  );
};

export default LoveCompatibilityCalculator;

import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaMoneyCheckAlt } from "react-icons/fa";
import {
  calculateSimpleInterest,
  calculateCompoundInterest,
} from "../../utils/mathsCalculator";
const DOMAIN = import.meta.env.VITE_SITE_DOMAIN;

const SimpleAndCompoundInterest = () => {
  const [mode, setMode] = useState("simple");
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [compoundFreq, setCompoundFreq] = useState(1);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(time);
    const n = parseInt(compoundFreq);

    if (isNaN(p) || isNaN(r) || isNaN(t) || (mode === "compound" && isNaN(n))) {
      setError("Please enter valid values for all inputs.");
      setResult(null);
      return;
    }

    let res;
    if (mode === "simple") {
      res = calculateSimpleInterest(p, r, t);
    } else {
      res = calculateCompoundInterest(p, r, t, n);
    }

    setResult(res);
    setError("");
  };

  return (
    <>
      <Helmet>
        <title>Interest Calculator | CalPro</title>
        <meta
          name="description"
          content="Calculate simple or compound interest quickly and easily."
        />
        <link
          rel="canonical"
          href={`${DOMAIN}/math/interest-calculator`}
        />
        <meta
          property="og:title"
          content="Compound Interest Calculator - CalPro"
        />
        <meta
          property="og:description"
          content="Easily calculate compound interest on your investment."
        />
      </Helmet>

      <div className="flex flex-col items-center pb-4 w-full">
        <div className="self-start mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Interest Calculator
          </h2>
          <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">
            Quickly calculate your interest amount using either simple or
            compound method.
          </p>
        </div>

        <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
          <div className="flex justify-center gap-2 mb-6">
            <FaMoneyCheckAlt className="text-green-500 text-xl md:text-3xl" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Simple & Compound Interest
            </h2>
          </div>

          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => {
                setMode("simple");
                setResult(null);
              }}
              className={`px-4 py-2 rounded-lg font-medium border ${
                mode === "simple"
                  ? "bg-green-400 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              Simple Interest
            </button>
            <button
              onClick={() => {
                setMode("compound");
                setResult(null);
              }}
              className={`px-4 py-2 rounded-lg font-medium border ${
                mode === "compound"
                  ? "bg-green-400 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              Compound Interest
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                💰 Principal Amount
              </label>
              <input
                type="number"
                value={principal}
                min={0}
                onChange={(e) => setPrincipal(e.target.value)}
                onKeyDown={(e)=>{
                  if(e.key==='-'||e.key==='e')
                     e.preventDefault()
                    }}
                placeholder="e.g. 1000"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                📈 Interest Rate (%)
              </label>
              <input
                type="number"
                value={rate}
                min={0}
                onChange={(e) => setRate(e.target.value)}
                onKeyDown={(e)=>{
                  if(e.key==='-'||e.key==='e')
                     e.preventDefault()
                    }}
                placeholder="e.g. 5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                📆 Time (Years)
              </label>
              <input
                type="number"
                value={time}
                min={0}
                onChange={(e) => setTime(e.target.value)}
                onKeyDown={(e)=>{
                  if(e.key==='-'||e.key==='e')
                     e.preventDefault()
                    }}
                placeholder="e.g. 3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>
            {mode === "compound" && (
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  🔁 Compounding Frequency (times/year)
                </label>
                <input
                  type="number"
                  value={compoundFreq}
                  min={0}
                  onChange={(e) => setCompoundFreq(e.target.value)}
                  onKeyDown={(e)=>{
                  if(e.key==='-'||e.key==='e')
                     e.preventDefault()
                    }}
                  placeholder="e.g. 4 for quarterly"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>
            )}
          </div>

          <button
            onClick={handleCalculate}
            className="w-full mt-6 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300 hover:cursor-pointer"
          >
            🔍 Calculate Interest
          </button>

          {error && (
            <p className="mt-4 text-red-600 text-center text-sm">{error}</p>
          )}

          {result !== null && (
            <div className="mt-8 text-center text-gray-700">
              <p className="text-xl font-semibold">
                ✅ Interest: <span className="text-green-600">{result}</span>
              </p>
            </div>
          )}
        </div>
        <div className="pt-10">
          <p className="text-sm text-gray-600">
            This calculator helps you determine the interest earned or paid on a
            principal amount over time. Choose between simple interest (a fixed
            percentage over time) or compound interest (interest added
            periodically to the principal). Just input your values and instantly
            view the result to make smart financial decisions.
          </p>
        </div>
      </div>
    </>
  );
};

export default SimpleAndCompoundInterest;

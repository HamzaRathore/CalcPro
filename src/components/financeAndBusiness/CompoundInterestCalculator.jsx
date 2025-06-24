import React, { useState } from "react";
import { calculateCompoundInterest } from "../../utils/financeAndBusiness";
import { Helmet } from "react-helmet-async";
import { FaPercentage } from "react-icons/fa";

const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState(null);
  const [rate, setRate] = useState(null);
  const [time, setTime] = useState(null);
  const [frequency, setFrequency] = useState(null);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const output = calculateCompoundInterest(principal, rate, time, frequency);
    setResult(output);
  };

  return (
    <>
      <Helmet>
        <title>Compound Interest Calculator | CalPro</title>
        <meta
          name="description"
          content="Calculate compound interest over time with CalPro's financial calculator."
        />
        <link
          rel="canonical"
          href="https://yourdomain.com/finance/compound-interest"
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
            Compound Interest Calculator
          </h2>
          <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">
            Calculate how your investment grows with compound interest.
          </p>
        </div>
        <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
          <div className="flex items-center justify-center gap-2 mb-6">
            <FaPercentage className="text-green-500 text-xl md:text-3xl" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Compound Interest Calculator
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                💵 Principal Amount
              </label>
              <input
                type="number"
                value={principal}
                onChange={(e) => {
                  const value = e.target.value;
                  setPrincipal(value === "" ? null : Number(value));
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="e.g. 10000"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                📈 Annual Interest Rate (%)
              </label>
              <input
                type="number"
                value={rate}
                onChange={(e) => {
                  const value = e.target.value;
                  setRate(value === "" ? null : Number(value));
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="e.g. 7"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                ⏳ Time Period (Years)
              </label>
              <input
                type="number"
                value={time}
                onChange={(e) => {
                  const value = e.target.value;
                  setTime(value === "" ? null : Number(value));
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="e.g. 5"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                🔄 Compounding Frequency
              </label>
              <select
                value={frequency}
                onChange={(e) => {
                  const value = e.target.value;
                  setFrequency(value === "" ? null : Number(value));
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              >
                <option value={1}>Annually</option>
                <option value={2}>Semi-Annually</option>
                <option value={4}>Quarterly</option>
                <option value={12}>Monthly</option>
                <option value={365}>Daily</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300"
          >
            📊 Calculate Interest
          </button>

          {result && (
            <div className="mt-8 text-center space-y-2">
              <p className="text-sm text-gray-600">Compound Interest:</p>
              <p className="text-2xl md:text-3xl font-extrabold text-green-600">
                ${result.compoundInterest}
              </p>
              <p className="text-sm text-gray-600">
                Total Amount: ${result.totalAmount}
              </p>
            </div>
          )}
        </div>
        <div className="pt-10">
          <p className="text-sm text-gray-600">
            Use this calculator to project how your savings or investments grow
            over time with compound interest. Ideal for planning long-term
            goals.
          </p>
        </div>
      </div>
    </>
  );
};

export default CompoundInterestCalculator;

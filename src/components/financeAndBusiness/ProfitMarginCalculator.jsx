import React, { useState } from "react";
import { calculateProfitMargin } from '../../utils/financeAndBusiness';
import { Helmet } from 'react-helmet-async';
import { FaChartLine } from "react-icons/fa";

const ProfitMarginCalculator = () => {
  const [cost, setCost] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const output = calculateProfitMargin(cost, revenue);
    setResult(output);
  };

  return (
    <>
      <Helmet>
        <title>Profit Margin Calculator | CalPro</title>
        <meta name="description" content="Calculate your profit margin based on cost and revenue using CalPro." />
        <link rel="canonical" href="https://yourdomain.com/finance/profit-margin" />
        <meta property="og:title" content="Profit Margin Calculator - CalPro" />
        <meta property="og:description" content="Quickly calculate profit and margin from your product sales." />
      </Helmet>

      <div className="flex flex-col items-center pb-4 w-full">
        <div className="self-start mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Profit Margin Calculator</h2>
          <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">Quickly determine your business profitability with this calculator.</p>
        </div>
        <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
          <div className="flex items-center justify-center gap-2 mb-6">
            <FaChartLine className="text-green-500 text-xl md:text-3xl" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Profit Margin Calculator</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">💵 Cost</label>
              <input type="number" value={cost} onChange={(e) => {
                    const value = e.target.value;
                    setCost(
                      value === "" ? null : Number(value)
                    );
                  }}className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition" placeholder="e.g. 100" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">💰 Revenue</label>
              <input type="number" value={revenue} onChange={(e) => {
                    const value = e.target.value;
                    setRevenue(
                      value === "" ? null : Number(value)
                    );
                  }} className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition" placeholder="e.g. 150" />
            </div>
          </div>

          <button onClick={handleCalculate} className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300">
            💹 Calculate Margin
          </button>

          {result && (
            <div className="mt-8 text-center space-y-2">
              <p className="text-sm text-gray-600">Profit: ${result.profit}</p>
              <p className="text-2xl md:text-3xl font-extrabold text-green-600">Margin: {result.margin}%</p>
            </div>
          )}
        </div>
        <div className="pt-10">
          <p className="text-sm text-gray-600">This calculator helps you accurately determine the profit margin of your product or service by analyzing the relationship between your cost and selling price. By calculating both the margin percentage and actual profit amount, it gives you valuable insights into your pricing strategy and overall profitability. Whether you're running a small business or managing large-scale operations, this tool makes it easy to assess your financial health and make informed pricing decisions to maximize returns.</p>
        </div>
      </div>
    </>
  );
};

export default ProfitMarginCalculator;
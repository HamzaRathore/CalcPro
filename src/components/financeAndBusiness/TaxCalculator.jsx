import React, { useState } from "react";
import { calculateTax } from "../../utils/financeAndBusiness";
import { Helmet } from "react-helmet-async";
import { FaFileInvoiceDollar } from "react-icons/fa";

const TaxCalculator = () => {
  const [income, setIncome] = useState(null);
  const [taxRate, setTaxRate] = useState(null);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const output = calculateTax(income, taxRate);
    setResult(output);
  };

  return (
    <>
      <Helmet>
        <title>Tax Calculator | CalPro</title>
        <meta
          name="description"
          content="Estimate your tax based on income and tax rate using CalPro."
        />
        <link
          rel="canonical"
          href="https://yourdomain.com/finance/tax-calculator"
        />
        <meta property="og:title" content="Tax Calculator - CalPro" />
        <meta
          property="og:description"
          content="Easily calculate tax amount and net income from your gross income."
        />
      </Helmet>

      <div className="flex flex-col items-center pb-4 w-full">
        <div className="self-start mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Tax Calculator
          </h2>
          <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">
            Estimate your taxes and net income quickly and accurately.
          </p>
        </div>
        <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
          <div className="flex items-center justify-center gap-2 mb-6">
            <FaFileInvoiceDollar className="text-green-500 text-xl md:text-3xl" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Tax Calculator
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                💼 Annual Income
              </label>
              <input
                type="number"
                value={income}
                onChange={(e) => {
                  const value = e.target.value;
                  setIncome(value === "" ? null : Number(value));
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="e.g. 50000"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                📊 Tax Rate (%)
              </label>
              <input
                type="number"
                value={taxRate}
                onChange={(e) => {
                  const value = e.target.value;
                  setTaxRate(value === "" ? null : Number(value));
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="e.g. 15"
              />
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300"
          >
            🧾 Calculate Tax
          </button>

          {result && (
            <div className="mt-8 text-center space-y-2">
              <p className="text-sm text-gray-600">
                Estimated Tax: ${result.taxAmount}
              </p>
              <p className="text-2xl md:text-3xl font-extrabold text-green-600">
                Net Income: ${result.netIncome}
              </p>
            </div>
          )}
        </div>
        <div className="pt-10">
          <p className="text-sm text-gray-600">
            This calculator helps you estimate the amount of tax you owe based
            on your gross annual income and applicable tax rate, giving you a
            clear picture of your net or take-home income. It simplifies complex
            tax calculations, allowing you to plan your finances more
            effectively and avoid surprises during tax season. Whether you're a
            salaried individual, freelancer, or business owner, this tool
            provides a quick and accurate breakdown of your tax liability,
            helping you make smarter financial and budgeting decisions.
          </p>
        </div>
      </div>
    </>
  );
};

export default TaxCalculator;

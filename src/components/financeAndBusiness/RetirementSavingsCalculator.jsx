import React, { useState } from "react";
import { calculateRetirementSavings } from '../../utils/financeAndBusiness';
import { Helmet } from 'react-helmet-async';
import { FaUserClock } from "react-icons/fa";

const RetirementSavingsCalculator = () => {
  const [currentAge, setCurrentAge] = useState(null);
  const [retirementAge, setRetirementAge] = useState(null);
  const [currentSavings, setCurrentSavings] = useState();
  const [monthlyContribution, setMonthlyContribution] = useState(null);
  const [annualReturnRate, setAnnualReturnRate] = useState(null);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const output = calculateRetirementSavings(currentAge, retirementAge, currentSavings, monthlyContribution, annualReturnRate);
    setResult(output);
  };

  return (
    <>
      <Helmet>
        <title>Retirement Savings Calculator | CalPro</title>
        <meta name="description" content="Plan your financial future with CalPro's Retirement Calculator." />
        <link rel="canonical" href="https://yourdomain.com/finance/retirement" />
        <meta property="og:title" content="Retirement Calculator - CalPro" />
        <meta property="og:description" content="Estimate your retirement savings based on age, contributions, and interest." />
      </Helmet>

      <div className="flex flex-col items-center pb-4 w-full">
        <div className="self-start mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Retirement Savings Calculator</h2>
          <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">Estimate how much you will have saved by retirement.</p>
        </div>
        <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
          <div className="flex items-center justify-center gap-2 mb-6">
            <FaUserClock className="text-green-500 text-xl md:text-3xl" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Retirement Calculator</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">🎂 Current Age</label>
              <input type="number" value={currentAge}  onChange={(e) => {
                    const value = e.target.value;
                    setCurrentAge(
                      value === "" ? null : Number(value)
                    );
                  }} className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition" placeholder="e.g. 30" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">👴 Retirement Age</label>
              <input type="number" value={retirementAge}  onChange={(e) => {
                    const value = e.target.value;
                    setRetirementAge(
                      value === "" ? null : Number(value)
                    );
                  }} className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition" placeholder="e.g. 65" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">💰 Current Savings</label>
              <input type="number" value={currentSavings}  onChange={(e) => {
                    const value = e.target.value;
                    setCurrentSavings(
                      value === "" ? null : Number(value)
                    );
                  }} className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition" placeholder="e.g. 10000" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">💸 Monthly Contribution</label>
              <input type="number" value={monthlyContribution}  onChange={(e) => {
                    const value = e.target.value;
                    setMonthlyContribution(
                      value === "" ? null : Number(value)
                    );
                  }} className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition" placeholder="e.g. 500" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">📈 Expected Annual Return Rate (%)</label>
              <input type="number" value={annualReturnRate}  onChange={(e) => {
                    const value = e.target.value;
                    setAnnualReturnRate(
                      value === "" ? null : Number(value)
                    );
                  }} className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition" placeholder="e.g. 6" />
            </div>
          </div>

          <button onClick={handleCalculate} className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300">
            🧮 Calculate Savings
          </button>

          {result && (
            <div className="mt-8 text-center space-y-2">
              <p className="text-sm text-gray-600">Estimated Total Retirement Savings:</p>
              <p className="text-2xl md:text-3xl font-extrabold text-green-600">${result.totalRetirementSavings}</p>
            </div>
          )}
        </div>
        <div className="pt-10">
          <p className="text-sm text-gray-600">This calculator helps you estimate how much you'll have saved by the time you retire, based on your current savings, monthly contributions, and expected interest rate. It's a valuable tool for planning a secure financial future and understanding how small changes in your savings habits can impact your retirement fund. Whether you're just starting out or refining your retirement goals, this calculator gives you a clear picture of your long-term progress.</p>
        </div>
      </div>
    </>
  );
};

export default RetirementSavingsCalculator;
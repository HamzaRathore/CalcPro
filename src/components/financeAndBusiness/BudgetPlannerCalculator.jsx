import React, { useState } from "react";
import { calculateBudget } from "../../utils/financeAndBusiness";
import { FaMoneyBillWave } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const BudgetPlannerCalculator = () => {
  const [income, setIncome] = useState();
  const [expenses, setExpenses] = useState({
    rent: null,
    groceries: null,
    transport: null,
    entertainment: null,
    healthcare: null,
    other: null,
  });
  const [result, setResult] = useState(null);

  const handleChange = (key, value) => {
    setExpenses({ ...expenses, [key]: Number(value) });
  };

  const handleCalculate = () => {
    const result = calculateBudget(Number(income), expenses);
    setResult(result);
  };

  return (
    <>
      <Helmet>
        <title>Budget Planner Calculator | CalPro</title>
        <meta
          name="description"
          content="Calculate your monthly budget easily using CalPro's fast and free loan calculator."
        />
        <link
          rel="canonical"
          href="https://yourdomain.com/finance/budget-planner"
        />
        <meta
          property="og:title"
          content="Budget Planner Calculator - CalPro"
        />
        <meta
          property="og:description"
          content="Plan your budget with accurate BMI calculations."
        />
      </Helmet>

      <div className="flex flex-col items-center pb-4 w-full">
        <div className="self-start mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Budget Planner
          </h2>
          <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">
            Track your income and expenses to stay on top of your budget.
          </p>
        </div>
        <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
          <div className="flex items-center justify-center gap-2 mb-6">
            <FaMoneyBillWave className="text-green-500 text-xl md:text-3xl" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Budget Planner
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                💼 Monthly Income
              </label>
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="e.g. 100000"
              />
            </div>

            {Object.entries(expenses).map(([key, value]) => (
              <div key={key}>
                <label className="block text-sm text-gray-600 mb-1">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => handleChange(key, e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  placeholder={`e.g. ${key === "rent" ? "30000" : "5000"}`}
                />
              </div>
            ))}
          </div>

          <button
            onClick={handleCalculate}
            className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300 hover:cursor-pointer"
          >
            📊 Calculate Budget
          </button>

          {result && (
            <div className="mt-8 text-center space-y-2">
              <p className="text-lg text-gray-700">
                Total Expenses:{" "}
                <span className="font-bold text-red-600">
                  Rs. {result.totalExpenses}
                </span>
              </p>
              <p className="text-lg text-gray-700">
                Remaining Balance:{" "}
                <span className="font-bold text-green-600">
                  Rs. {result.balance}
                </span>
              </p>
              <p className="text-lg text-gray-700">
                Budget Used:{" "}
                <span className="font-bold text-blue-600">
                  {result.percentageUsed}%
                </span>
              </p>
            </div>
          )}
        </div>
        <div className="pt-10">
          <p className="text-sm text-gray-600">
            Use this budget planner to gain clarity on your financial habits,
            save smarter, and manage your monthly finances with ease.
          </p>
        </div>
      </div>
    </>
  );
};

export default BudgetPlannerCalculator;

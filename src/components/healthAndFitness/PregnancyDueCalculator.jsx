import React, { useState } from "react";
import { calculatePregnancyDueDate } from '../../utils/healthAndFitness';
import { FaBaby } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const PregnancyDueCalculator = () => {
  const [lastPeriod, setLastPeriod] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleCalculate = () => {
    const result = calculatePregnancyDueDate(lastPeriod);
    setDueDate(result);
  };

  return (
    <>
      <Helmet>
        <title>Pregnancy Due Date Calculator | CalPro</title>
        <meta
          name="description"
          content="Estimate your baby's due date based on your last menstrual period."
        />
        <link rel="canonical" href="https://yourdomain.com/health/pregnancy-due-date" />
      </Helmet>

      <div className="flex flex-col items-center pb-4 w-full">
        <div className="self-start mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Pregnancy Due Date Calculator
          </h2>
          <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">
            Calculate your estimated due date based on your last period.
          </p>
        </div>

        <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
          <div className="flex items-center justify-center gap-2 mb-6">
            <FaBaby className="text-pink-500 text-xl md:text-3xl" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Due Date Estimator</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">📅 First Day of Last Period</label>
              <input
                type="date"
                value={lastPeriod}
                onChange={(e) => setLastPeriod(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full mt-6 bg-gradient-to-r from-pink-400 to-red-400 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300"
          >
            🍼 Estimate Due Date
          </button>

          {dueDate && (
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">Estimated Due Date:</p>
              <p className="text-2xl md:text-3xl font-extrabold text-pink-600 mt-1">{dueDate}</p>
            </div>
          )}
        </div>

        <div className="pt-10">
          <p className="text-sm text-gray-600">
            This calculator adds 280 days (or 40 weeks) to the first day of your last menstrual period to estimate your due date. Always consult your healthcare provider for a more accurate prediction.
          </p>
        </div>
      </div>
    </>
  );
};

export default PregnancyDueCalculator;
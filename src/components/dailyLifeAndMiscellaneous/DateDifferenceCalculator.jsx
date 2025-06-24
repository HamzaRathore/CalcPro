import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { calculateDateDifference } from "../../utils/dailyLife";
import { FaCalendarCheck } from "react-icons/fa";

const DateDifferenceCalculator = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const res = calculateDateDifference(startDate, endDate);
    setResult(res);
  };

  return (
    <>
      <Helmet>
        <title>Date Difference Calculator | CalPro</title>
        <meta name="description" content="Calculate the number of days between two dates using CalPro's fast and simple tool." />
        <link rel="canonical" href="https://yourdomain.com/date/date-difference" />
      </Helmet>

      <div className="flex flex-col items-center pb-4 w-full">
        <div className="self-start mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Date Difference Calculator</h2>
          <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">
            Find out how many days are between two dates. Useful for event planning, deadlines, and schedules.
          </p>
        </div>

        <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
          <div className="flex justify-center gap-2 mb-6">
            <FaCalendarCheck className="text-green-500 text-xl md:text-3xl" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Date Difference Calculator</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">📅 Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">📅 End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
              />
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full mt-6 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300"
          >
            🔍 Calculate Difference
          </button>

          {result && (
            <div className="mt-8 text-center text-gray-700">
              {result.error ? (
                <p className="text-red-500 text-sm">{result.error}</p>
              ) : (
                <>
                  <p className="text-lg font-bold">Difference in Days:</p>
                  <p className="text-3xl font-extrabold text-green-600 mt-2">
                    {result.days} {result.days === 1 ? "day" : "days"}
                  </p>
                </>
              )}
            </div>
          )}

          <div className="pt-10">
            <p className="text-sm text-gray-600">
              Calculate the number of days between any two calendar dates. This tool helps you track timelines, count down to events, or determine durations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DateDifferenceCalculator;

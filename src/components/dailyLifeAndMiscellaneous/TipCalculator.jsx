import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { calculateTip } from "../../utils/dailyLife";
import { FaUtensils } from "react-icons/fa";

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercent, setTipPercent] = useState("");
  const [people, setPeople] = useState(1);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const res = calculateTip(Number(billAmount), Number(tipPercent), Number(people));
    setResult(res);
  };

  return (
    <>
      <Helmet>
        <title>Tip Calculator | CalPro</title>
        <meta name="description" content="Quickly calculate tip, total bill, and per person cost with CalPro's Tip Calculator." />
        <link rel="canonical" href="https://yourdomain.com/finance/tip-calculator" />
      </Helmet>

      <div className="flex flex-col items-center pb-4 w-full">
        <div className="self-start mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Tip Calculator</h2>
          <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">
            Calculate your tip and split the bill with ease. Ideal for group dinners or dining out.
          </p>
        </div>

        <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
          <div className="flex justify-center gap-2 mb-6">
            <FaUtensils className="text-green-500 text-xl md:text-3xl" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Tip Calculator</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">💵 Bill Amount</label>
              <input
                type="number"
                value={billAmount}
                onChange={(e) => setBillAmount(e.target.value)}
                placeholder="e.g. 2500"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">💯 Tip Percentage</label>
              <input
                type="number"
                value={tipPercent}
                onChange={(e) => setTipPercent(e.target.value)}
                placeholder="e.g. 10"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">👥 Number of People</label>
              <input
                type="number"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                placeholder="e.g. 3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
              />
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300"
          >
            💰 Calculate Tip
          </button>

          {result && (
            <div className="mt-8 text-center text-gray-700">
              {result.error ? (
                <p className="text-red-500 text-sm">{result.error}</p>
              ) : (
                <>
                  <p className="text-md">Tip Amount: <span className="font-bold text-green-600">Rs {result.tip}</span></p>
                  <p className="text-md">Total Amount: <span className="font-bold text-blue-600">Rs {result.total}</span></p>
                  <p className="text-md">Per Person: <span className="font-bold text-purple-600">Rs {result.perPerson}</span></p>
                </>
              )}
            </div>
          )}
        </div>
        <div className="pt-10">
            <p className="text-sm text-gray-600">
             Use this handy tool to quickly calculate how much tip to leave based on your bill amount and desired tip percentage. It also helps you determine the total amount you'll pay, including the tip, so there are no surprises. If you're dining with others, the calculator can evenly split the bill and show what each person owes — making it perfect for group outings, restaurants, and travel. Save time, avoid confusion, and tip fairly with this simple yet effective tool.
            </p>
          </div>
      </div>
    </>
  );
};

export default TipCalculator;

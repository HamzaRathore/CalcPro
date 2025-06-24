import React, { useState } from "react";
import { calculateBMI } from '../../utils/healthAndFitness';
import { Helmet } from 'react-helmet-async';
import { FaWeight } from "react-icons/fa";

const BmiCalculator = () => {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const output = calculateBMI(weight, height);
    setResult(output);
  };

  return (
    <>
      <Helmet>
        <title>BMI Calculator | CalPro</title>
        <meta name="description" content="Calculate your Body Mass Index using CalPro's BMI calculator." />
        <link rel="canonical" href="https://yourdomain.com/health/bmi-calculator" />
        <meta property="og:title" content="BMI Calculator - CalPro" />
        <meta property="og:description" content="Check your body weight category using BMI formula." />
      </Helmet>

      <div className="flex flex-col items-center pb-4 w-full">
        <div className="self-start mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">BMI Calculator</h2>
          <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">Find out if you're underweight, healthy, overweight, or obese.</p>
        </div>
        <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
          <div className="flex items-center justify-center gap-2 mb-6">
            <FaWeight className="text-green-500 text-xl md:text-3xl" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">BMI Calculator</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">⚖️ Weight (kg)</label>
              <input type="number" value={weight} onChange={(e) => {
                      const value = e.target.value;
                      setWeight(
                        value === "" ? null : Number(value)
                      );
                    }} className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition" placeholder="e.g. 70" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">📏 Height (cm)</label>
              <input type="number" value={height}  onChange={(e) => {
                      const value = e.target.value;
                      setHeight(
                        value === "" ? null : Number(value)
                      );
                    }} className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition" placeholder="e.g. 170" />
            </div>
          </div>

          <button onClick={handleCalculate} className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300">
            🧮 Calculate BMI
          </button>

          {result && (
            <div className="mt-8 text-center space-y-2">
              <p className="text-sm text-gray-600">Your BMI is</p>
              <p className="text-3xl md:text-4xl font-extrabold text-green-600">{result.bmi}</p>
              <p className="text-lg font-semibold text-gray-700">Category: {result.category}</p>
            </div>
          )}
        </div>
        <div className="pt-10">
          <p className="text-sm text-gray-600">Body Mass Index (BMI) is a simple calculation using a person's height and weight. The result can help indicate whether you are underweight, normal, overweight, or obese.</p>
        </div>
      </div>
    </>
  );
};

export default BmiCalculator;
import React, { useState } from "react";
import { Helmet } from 'react-helmet-async';
import { calculateBodyFatPercentage } from "../../utils/healthAndFitness";
import { FaHeartbeat } from "react-icons/fa";

const BodyFatCalculator = () => {
  const [gender, setGender] = useState("male");
  const [waist, setWaist] = useState(null);
  const [neck, setNeck] = useState(null);
  const [height, setHeight] = useState(null);
  const [hip, setHip] = useState(null);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const bodyFat = calculateBodyFatPercentage(gender, waist, neck, height, gender === "female" ? hip : 0);
    setResult(bodyFat);
  };

  return (
    <>
      <Helmet>
        <title>Body Fat Calculator | CalPro</title>
        <meta name="description" content="Calculate your body fat percentage accurately with CalPro." />
        <link rel="canonical" href="https://yourdomain.com/health/body-fat" />
      </Helmet>

      <div className="flex flex-col items-center pb-4 w-full">
        <div className="self-start mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Body Fat Percentage Calculator</h2>
          <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">Estimate your body fat using the U.S. Navy method.</p>
        </div>

        <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
          <div className="flex items-center justify-center gap-2 mb-6">
            <FaHeartbeat className="text-red-500 text-xl md:text-3xl" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Body Fat Calculator</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">🚻 Gender</label>
              <select value={gender} onChange={(e) => setGender(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">📏 Waist (cm)</label>
              <input type="number" value={waist} onChange={(e) => {
                  const value = e.target.value;
                  setWaist(value === "" ? null : Number(value));
                }} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="e.g. 85" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">📏 Neck (cm)</label>
              <input type="number" value={neck} onChange={(e) => {
                  const value = e.target.value;
                  setNeck(value === "" ? null : Number(value));
                }} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="e.g. 40" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">📏 Height (cm)</label>
              <input type="number" value={height} onChange={(e) => {
                  const value = e.target.value;
                  setHeight(value === "" ? null : Number(value));
                }} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="e.g. 175" />
            </div>
            {gender === "female" && (
              <div>
                <label className="block text-sm text-gray-600 mb-1">📏 Hip (cm)</label>
                <input type="number" value={hip} onChange={(e) => {
                  const value = e.target.value;
                  setHip(value === "" ? null : Number(value));
                }} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="e.g. 95" />
              </div>
            )}
          </div>

          <button onClick={handleCalculate} className="w-full mt-6 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300">
            🧮 Calculate Body Fat %
          </button>

          {result && (
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">Your Body Fat Percentage:</p>
              <p className="text-3xl md:text-4xl font-extrabold text-red-500 mt-1">{result}%</p>
            </div>
          )}
        </div>

        <div className="pt-10">
          <p className="text-sm text-gray-600">This calculator estimates your body fat percentage using the U.S. Navy Method, a widely accepted and reliable technique based on simple body measurements. It requires your waist, neck, and height for both males and females, while females also need to provide a hip measurement for greater accuracy. By analyzing the relationship between these measurements, it delivers a close approximation of your body fat percentage. This information is valuable for tracking fitness progress, setting realistic health goals, and understanding how much of your body weight is composed of fat versus lean mass. It's a practical tool for athletes, fitness enthusiasts, and anyone focused on improving their overall health and body composition.</p>
        </div>
      </div>
    </>
  );
};

export default BodyFatCalculator;

import React, { useState } from "react";
import { calculateBMR } from "../../utils/healthAndFitness";
import { Helmet } from "react-helmet-async";
import { FaHeartbeat } from "react-icons/fa";
const DOMAIN = import.meta.env.VITE_SITE_DOMAIN;

const BmrCalculator = () => {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState("male");
  const [bmr, setBmr] = useState(null);

  const handleCalculate = () => {
    const result = calculateBMR(weight, height, age, gender);
    setBmr(result);
  };

  return (
    <>
      <Helmet>
        <title>BMR Calculator | CalPro</title>
        <meta
          name="description"
          content="Calculate your Basal Metabolic Rate with CalPro's BMR calculator."
        />
        <link
          rel="canonical"
          href={`${DOMAIN}/health/bmr-calculator`}
        />
        <meta property="og:title" content="BMR Calculator - CalPro" />
        <meta
          property="og:description"
          content="Estimate how many calories your body needs to function at rest."
        />
      </Helmet>

      <div className="flex flex-col items-center pb-4 w-full">
        <div className="self-start mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            BMR Calculator
          </h2>
          <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">
            Estimate your Basal Metabolic Rate and daily calorie needs.
          </p>
        </div>
        <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
          <div className="flex items-center justify-center gap-2 mb-6">
            <FaHeartbeat className="text-red-500 text-xl md:text-3xl" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              BMR Calculator
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                ⚖️ Weight (kg)
              </label>
              <input
                type="number"
                min={0}
                value={weight}
                onChange={(e) => {
                  const value = e.target.value;
                  setWeight(value === "" ? null : Number(value));
                }}
                onKeyDown={(e) => {
                  if (e.key === "-" || e.key === "e") e.preventDefault();
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="e.g. 70"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                📏 Height (cm)
              </label>
              <input
                type="number"
                min={0}
                value={height}
                onChange={(e) => {
                  const value = e.target.value;
                  setHeight(value === "" ? null : Number(value));
                }}
                onKeyDown={(e) => {
                  if (e.key === "-" || e.key === "e") e.preventDefault();
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="e.g. 170"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                🎂 Age (years)
              </label>
              <input
                type="number"
                min={0}
                value={age}
                onChange={(e) => {
                  const value = e.target.value;
                  setAge(value === "" ? null : Number(value));
                }}
                onKeyDown={(e) => {
                  if (e.key === "-" || e.key === "e") e.preventDefault();
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="e.g. 30"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                🚻 Gender
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300 hover:cursor-pointer"
          >
            🔥 Calculate BMR
          </button>

          {bmr && (
            <div className="mt-8 text-center space-y-2">
              <p className="text-sm text-gray-600">Your BMR is</p>
              <p className="text-3xl md:text-4xl font-extrabold text-red-600">
                {bmr} Calories/day
              </p>
            </div>
          )}
        </div>
        <div className="pt-10">
          <p className="text-sm text-gray-600">
            Basal Metabolic Rate (BMR) represents the number of calories your
            body needs to perform essential life-sustaining functions such as
            breathing, blood circulation, cell production, and digestion while
            at complete rest. This calculator helps you estimate your BMR based
            on factors like age, gender, weight, and height, giving you a
            clearer understanding of how much energy your body requires daily.
            Knowing your BMR is especially useful for setting accurate calorie
            intake goals for weight loss, maintenance, or muscle gain, and is a
            foundational tool for building effective nutrition and fitness
            plans.
          </p>
        </div>
      </div>
    </>
  );
};

export default BmrCalculator;

import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaTint } from "react-icons/fa";
import { calculateWaterIntake } from "../../utils/healthAndFitness";
const DOMAIN = import.meta.env.VITE_SITE_DOMAIN;

const WaterIntakeCalculator = () => {
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("moderate");
  const [intake, setIntake] = useState(null);

  const handleCalculate = () => {
    const weightKg = parseFloat(weight);
    if (!weightKg || weightKg <= 0) return;
    const result = calculateWaterIntake(weightKg, activityLevel);
    setIntake(result);
  };

  return (
    <>
      <Helmet>
        <title>Water Intake Calculator | CalPro</title>
        <meta name="description" content="Find out how much water you should drink daily based on your body weight and activity level." />
        <link rel="canonical" href={`${DOMAIN}/health/water-intake`} />
        <meta
          property="og:title"
          content="Water Intake Calculator - CalPro"
        />
        <meta
          property="og:description"
          content="Easily calculate your daily water intake."
        />
      </Helmet>

      <div className="flex flex-col items-center pb-4 w-full">
        <div className="self-start mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Water Intake Calculator</h2>
          <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">Stay hydrated by knowing exactly how much water your body needs each day.</p>
        </div>

        <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
          <div className="flex items-center justify-center gap-2 mb-6">
            <FaTint className="text-blue-500 text-xl md:text-3xl" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Daily Hydration Guide</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">⚖️ Weight (kg)</label>
              <input
                type="number"
                min={'1'}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                onKeyDown={(e)=>{
                  if(e.key==='-'||e.key==='e')
                     e.preventDefault()
                    }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. 70"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">🏃 Activity Level</label>
              <select
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="low">Low (sedentary)</option>
                <option value="moderate">Moderate (light exercise)</option>
                <option value="high">High (intense activity)</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300 hover:cursor-pointer"
          >
            💧 Calculate Intake
          </button>

          {intake && (
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">Recommended Daily Intake:</p>
              <p className="text-2xl md:text-3xl font-extrabold text-blue-600 mt-1">{intake} Liters</p>
            </div>
          )}
        </div>

        <div className="pt-10">
          <p className="text-sm text-gray-600">This calculator recommends water intake based on 33ml per kg of body weight, adjusted by your activity level.</p>
        </div>
      </div>
    </>
  );
};

export default WaterIntakeCalculator;
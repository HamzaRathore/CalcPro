import React, { useState } from "react";
import {
  calculateBMR,
  calculateCalorieIntake,
} from "../../utils/healthAndFitness";
import { Helmet } from "react-helmet-async";
import { GiMeal } from "react-icons/gi";

const CalorieIntakeCalculator = () => {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState("male");
  const [activityLevel, setActivityLevel] = useState("moderate");
  const [calories, setCalories] = useState(null);

  const handleCalculate = () => {
    const bmr = calculateBMR(weight, height, age, gender);
    const result = calculateCalorieIntake(bmr, activityLevel);
    setCalories(result);
  };

  return (
    <>
      <Helmet>
        <title>Calorie Intake Calculator | CalPro</title>
        <meta
          name="description"
          content="Find out how many calories you need per day with CalPro's calorie intake calculator."
        />
        <link
          rel="canonical"
          href="https://yourdomain.com/health/calorie-intake"
        />
        <meta
          property="og:title"
          content="Calorie Intake Calculator - CalPro"
        />
        <meta
          property="og:description"
          content="Calculate your daily calorie requirements based on activity level."
        />
      </Helmet>

      <div className="flex flex-col items-center pb-4 w-full">
        <div className="self-start mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Calorie Intake Calculator
          </h2>
          <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">
            Know how much you should eat daily to stay healthy and fit.
          </p>
        </div>
        <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
          <div className="flex items-center justify-center gap-2 mb-6">
            <GiMeal className="text-yellow-600 text-xl md:text-3xl" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Calorie Intake Calculator
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                ⚖️ Weight (kg)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => {
                  const value = e.target.value;
                  setWeight(value === "" ? null : Number(value));
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
                value={height}
                onChange={(e) => {
                  const value = e.target.value;
                  setHeight(value === "" ? null : Number(value));
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
                value={age}
                onChange={(e) => {
                  const value = e.target.value;
                  setAge(value === "" ? null : Number(value));
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
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                🏃 Activity Level
              </label>
              <select
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              >
                <option value="sedentary">
                  Sedentary (little or no exercise)
                </option>
                <option value="light">
                  Lightly active (light exercise 1-3 days/week)
                </option>
                <option value="moderate">
                  Moderately active (moderate exercise 3-5 days/week)
                </option>
                <option value="active">
                  Active (hard exercise 6-7 days/week)
                </option>
                <option value="veryActive">
                  Very active (very intense exercise or physical job)
                </option>
              </select>
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300"
          >
            🍽️ Calculate Calories
          </button>

          {calories && (
            <div className="mt-8 text-center space-y-2">
              <p className="text-sm text-gray-600">Your Daily Calorie Needs:</p>
              <p className="text-3xl md:text-4xl font-extrabold text-yellow-600">
                {calories} Calories/day
              </p>
            </div>
          )}
        </div>
        <div className="pt-10">
          <p className="text-sm text-gray-600">
            Understanding your daily calorie needs is essential for reaching
            your health and fitness goals — whether you're aiming to lose
            weight, maintain your current weight, or build muscle. This
            calculator combines your Basal Metabolic Rate (BMR) with your daily
            activity level to provide a personalized estimate of how many
            calories your body requires each day. By taking into account your
            age, gender, weight, height, and lifestyle, it offers a more
            accurate insight into your energy expenditure. With this
            information, you can make smarter dietary choices and create more
            effective meal and workout plans aligned with your goals.
          </p>
        </div>
      </div>
    </>
  );
};

export default CalorieIntakeCalculator;

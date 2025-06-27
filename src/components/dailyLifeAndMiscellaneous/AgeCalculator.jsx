import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaBirthdayCake } from "react-icons/fa";
import { calculateAge } from "../../utils/dailyLife";
const DOMAIN = import.meta.env.VITE_SITE_DOMAIN;

const AgeCalculator = () => {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);

  const handleCalculate = () => {
    const result = calculateAge(dob);
    setAge(result);
  };

  return (
    <>
      <Helmet>
        <title>Age Calculator | CalPro</title>
        <meta name="description" content="Calculate your age in years, months, and days using your date of birth." />
        <link rel="canonical" href={`${DOMAIN}/daily/age`} />
        <meta
          property="og:title"
          content="Age Calculator - CalPro"
        />
        <meta
          property="og:description"
          content="Easily calculate your Age."
        />
      </Helmet>

      <div className="flex flex-col items-center pb-4 w-full">
        <div className="self-start mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Age Calculator</h2>
          <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">
            Find out your exact age in years, months, and days.
          </p>
        </div>

        <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
          <div className="flex justify-center gap-2 mb-6">
            <FaBirthdayCake className="text-pink-500 text-xl md:text-3xl" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Age Calculator</h2>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">🎂 Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <button
            onClick={handleCalculate}
            className="w-full mt-6 bg-gradient-to-r from-pink-500 to-red-400 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300 hover:cursor-pointer"
          >
            🧮 Calculate Age
          </button>

          {age && (
            <div className="mt-8 text-center text-gray-700">
              {age.error ? (
                <p className="text-red-500 text-sm">{age.error}</p>
              ) : (
                <>
                  <p className="text-lg font-bold">You are:</p>
                  <p className="text-xl mt-1">{age.years} years, {age.months} months, {age.days} days old</p>
                </>
              )}
            </div>
          )}
        </div>
        <div className="pt-10">
            <p className="text-sm text-gray-600">
              This calculator helps determine your age based on your birth date. It shows the exact time you've lived in years, months, and days.
            </p>
          </div>
      </div>
    </>
  );
};

export default AgeCalculator;

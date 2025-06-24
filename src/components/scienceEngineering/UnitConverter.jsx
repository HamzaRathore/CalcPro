import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaExchangeAlt } from "react-icons/fa";
import { convertUnits } from "../../utils/scienceAndEngineering";

const UnitConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("meters");
  const [toUnit, setToUnit] = useState("kilometers");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const units = ["meters", "kilometers", "miles", "feet", "inches", "centimeters"];

  const handleConvert = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setError("Please enter a valid number.");
      setResult(null);
      return;
    }

    try {
      
      const converted = convertUnits(value, fromUnit, toUnit);
      setResult(converted);
      setError("");
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  useEffect(()=>{
    setResult(null)
  },[fromUnit,toUnit])

  return (
    <>
      <Helmet>
        <title>Unit Converter | CalPro</title>
        <meta name="description" content="Convert between metric and imperial units easily." />
        <link rel="canonical" href="https://yourdomain.com/tools/unit-converter" />
      </Helmet>

      <div className="flex flex-col items-center pb-4 w-full">
        <div className="self-start mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Unit Converter</h2>
          <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">Convert between different length units easily and quickly.</p>
        </div>

        <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
          <div className="flex items-center justify-center gap-2 mb-6">
            <FaExchangeAlt className="text-blue-500 text-xl md:text-3xl" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Length Unit Converter</h2>
          </div>

          <div className="space-y-4">
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter value"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm text-gray-600 mb-1">From Unit</label>
                <select
                  value={fromUnit}
                  onChange={(e) => setFromUnit(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  {units.map((unit) => (
                    <option key={unit} value={unit}>{unit}</option>
                  ))}
                </select>
              </div>

              <div className="w-1/2">
                <label className="block text-sm text-gray-600 mb-1">To Unit</label>
                <select
                  value={toUnit}
                  onChange={(e) => setToUnit(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  {units.map((unit) => (
                    <option key={unit} value={unit}>{unit}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <button
            onClick={handleConvert}
            className="w-full mt-6 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300"
          >
            🔁 Convert
          </button>

          {error && <p className="mt-4 text-red-600 text-center text-sm">{error}</p>}

          {result !== null && !error && (
            <div className="mt-8 text-center text-gray-700">
              <p className="text-xl font-bold">📏 Result: {result} {toUnit}</p>
            </div>
          )}
        </div>

        <div className="pt-10">
          <p className="text-sm text-gray-600">Easily convert between meters, kilometers, miles, feet, inches, and centimeters.</p>
        </div>
      </div>
    </>
  );
};

export default UnitConverter;

import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaStopwatch } from "react-icons/fa";
import { calculateSDT } from "../../utils/scienceAndEngineering";

const SpeedDistanceTimeCalculator = () => {
  const [speed, setSpeed] = useState("");
  const [distance, setDistance] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    const s = speed.trim() !== "" ? parseFloat(speed) : null;
    const d = distance.trim() !== "" ? parseFloat(distance) : null;
    const t = time.trim() !== "" ? parseFloat(time) : null;

    const filled = [s, d, t].filter((v) => v !== null);
    if (filled.length !== 2) {
      setError("Please enter exactly two values to calculate the third.");
      setResult(null);
      return;
    }

    try {
      const output = calculateSDT(s, d, t);
      setResult(output);
      setError("");
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <>
      <Helmet>
        <title>Speed Distance Time Calculator | CalPro</title>
        <meta name="description" content="Calculate speed, distance or time by entering any two values." />
        <link rel="canonical" href="https://yourdomain.com/physics/speed-distance-time" />
      </Helmet>

      <div className="flex flex-col items-center pb-4 w-full">
        <div className="self-start mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Speed, Distance & Time Calculator</h2>
          <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">Enter any two values to calculate the third. Formula used: Speed = Distance / Time</p>
        </div>

        <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
          <div className="flex items-center justify-center gap-2 mb-6">
            <FaStopwatch className="text-rose-500 text-xl md:text-3xl" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Speed / Distance / Time</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">🚗 Speed (km/h)</label>
              <input
                type="number"
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
                placeholder="e.g. 60"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">📏 Distance (km)</label>
              <input
                type="number"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                placeholder="e.g. 120"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">⏱️ Time (hours)</label>
              <input
                type="number"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="e.g. 2"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400"
              />
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full mt-6 bg-gradient-to-r from-rose-400 to-red-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300"
          >
            🔍 Calculate
          </button>

          {error && <p className="mt-4 text-red-600 text-center text-sm">{error}</p>}

          {result && (
            <div className="mt-8 text-center text-gray-700">
              {result.speed !== null && <p>🚗 Speed: <strong>{result.speed} km/h</strong></p>}
              {result.distance !== null && <p>📏 Distance: <strong>{result.distance} km</strong></p>}
              {result.time !== null && <p>⏱️ Time: <strong>{result.time} hours</strong></p>}
            </div>
          )}
        </div>

        <div className="pt-10">
          <p className="text-sm text-gray-600">Provide any two values and this calculator will compute the third using Speed = Distance / Time.</p>
        </div>
      </div>
    </>
  );
};

export default SpeedDistanceTimeCalculator;

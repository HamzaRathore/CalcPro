import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaRulerCombined } from "react-icons/fa";
import {
  calculateRectangle,
  calculateSquare,
  calculateCircle,
} from "../../utils/mathsCalculator";
const DOMAIN = import.meta.env.VITE_SITE_DOMAIN;

const AreaAndPerimeter = () => {
  const [shape, setShape] = useState("rectangle");
  const [inputs, setInputs] = useState({
    length: "",
    width: "",
    side: "",
    radius: "",
  });
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    let res;
    if (shape === "rectangle") {
      const { length, width } = inputs;
      res = calculateRectangle(parseFloat(length), parseFloat(width));
    } else if (shape === "square") {
      res = calculateSquare(parseFloat(inputs.side));
    } else if (shape === "circle") {
      res = calculateCircle(parseFloat(inputs.radius));
    }
    setResult(res);
  };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet>
        <title>Area and Perimeter Calculator | CalPro</title>
        <meta
          name="description"
          content="Calculate area and perimeter for rectangles, squares, and circles."
        />
        <link
          rel="canonical"
          href={`${DOMAIN}/math/area-perimeter`}
        />
        <meta
          property="og:title"
          content="Area and Perimeter Calculator - CalPro"
        />
        <meta
          property="og:description"
          content="Easily calculate Area and Perimeter."
        />
      </Helmet>

      <div className="flex flex-col items-center pb-4 w-full">
        <div className="self-start mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Area & Perimeter Calculator
          </h2>
          <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">
            Calculate the area and perimeter for different shapes.
          </p>
        </div>

        <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
          <div className="flex justify-center gap-2 mb-6">
            <FaRulerCombined className="text-blue-600 text-xl md:text-3xl" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Select Shape
            </h2>
          </div>

          <div className="flex gap-3 mb-4">
            {[
              { label: "Rectangle", value: "rectangle" },
              { label: "Square", value: "square" },
              { label: "Circle", value: "circle" },
            ].map(({ label, value }) => (
              <button
                key={value}
                onClick={() => {
                  setShape(value);
                  setResult(null);
                }}
                className={`px-4 py-2 rounded-lg border text-sm font-medium ${
                  shape === value
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {shape === "rectangle" && (
              <>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Length
                  </label>
                  <input
                    name="length"
                    type="number"
                    value={inputs.length}
                    min={0}
                    onChange={handleChange}
                    placeholder="e.g. 5"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Width
                  </label>
                  <input
                    name="width"
                    type="number"
                    min={0}
                    value={inputs.width}
                    onChange={handleChange}
                    onKeyDown={(e) => {
                      if (e.key === "-" || e.key === "e") e.preventDefault();
                    }}
                    placeholder="e.g. 3"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              </>
            )}

            {shape === "square" && (
              <div>
                <label className="block text-sm text-gray-600 mb-1">Side</label>
                <input
                  name="side"
                  type="number"
                  value={inputs.side}
                  onChange={handleChange}
                  placeholder="e.g. 4"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
            )}

            {shape === "circle" && (
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Radius
                </label>
                <input
                  name="radius"
                  type="number"
                  min={0}
                  value={inputs.radius}
                  onChange={handleChange}
                  placeholder="e.g. 6"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
            )}
          </div>

          <button
            onClick={handleCalculate}
            className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300"
          >
            📏 Calculate
          </button>

          {result && (
            <div className="mt-8 text-center text-gray-700">
              <p className="text-lg">
                ✅ Area: <span className="font-semibold">{result.area}</span>
              </p>
              <p className="text-lg">
                📐 Perimeter:{" "}
                <span className="font-semibold">{result.perimeter}</span>
              </p>
            </div>
          )}
        </div>
        <div className="pt-10">
          <p className="text-sm text-gray-600">
            Use this tool to calculate the area and perimeter of common shapes:
            rectangles, squares, and circles. Just input the required dimensions
            and get instant results for both measurements.
          </p>
        </div>
      </div>
    </>
  );
};

export default AreaAndPerimeter;

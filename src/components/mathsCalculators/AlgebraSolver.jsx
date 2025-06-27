import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaSquareRootAlt } from "react-icons/fa";
import { solveQuadraticEquation } from "../../utils/mathsCalculator";
const DOMAIN = import.meta.env.VITE_SITE_DOMAIN;

const AlgebraSolver = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum)) {
      setError("Please enter valid numbers for all coefficients.");
      setResult(null);
      return;
    }

    const solution = solveQuadraticEquation(aNum, bNum, cNum);
    setResult(solution);
    setError("");
  };

  return (
    <>
      <Helmet>
        <title>Quadratic Equation Solver | CalPro</title>
        <meta
          name="description"
          content="Solve quadratic equations using the standard formula with CalPro."
        />
        <link
          rel="canonical"
          href={`${DOMAIN}/math/quadratic-equation`}
        />
        <meta
          property="og:title"
          content="Quadratic Equation Calculator - CalPro"
        />
        <meta
          property="og:description"
          content="Easily calculate Quadratic equation."
        />
      </Helmet>

      <div className="flex flex-col items-center pb-4 w-full">
        <div className="self-start mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Quadratic Equation Calculator
          </h2>
          <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">
            Solve any quadratic equation of the form ax² + bx + c = 0 quickly
            and accurately.
          </p>
        </div>

        <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
          <div className="flex justify-center gap-2 mb-6">
            <FaSquareRootAlt className="text-purple-600 text-xl md:text-3xl" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Quadratic Solver
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Coefficient a (x²)
              </label>
              <input
                type="number"
                value={a}
                onChange={(e) => setA(e.target.value)}
                placeholder="e.g. 1"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Coefficient b (x)
              </label>
              <input
                type="number"
                value={b}
                onChange={(e) => setB(e.target.value)}
                placeholder="e.g. -3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Constant c
              </label>
              <input
                type="number"
                value={c}
                onChange={(e) => setC(e.target.value)}
                placeholder="e.g. 2"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full mt-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300 hover:cursor-pointer"
          >
            🔍 Solve Equation
          </button>

          {error && (
            <p className="mt-4 text-red-600 text-center text-sm">{error}</p>
          )}

          
          {result && ( 
            <> 
              {result.error ? (
                <p className="text-red-600">{result.error}</p>
              ) : (
                <>
                  <p className="text-lg">✅ Roots:</p>
                  <p className="text-xl font-semibold text-purple-600">
                    x₁ = {result.root1}
                  </p>
                  <p className="text-xl font-semibold text-purple-600">
                    x₂ = {result.root2}
                  </p>
                </>
              )}
            </>
          )}

         
        </div>
         <div className="pt-10">
            <p className="text-sm text-gray-600">
              This calculator helps you solve quadratic equations of the form
              ax² + bx + c = 0. Enter the coefficients a, b, and c to find the
              roots using the quadratic formula. It handles real and complex
              solutions.
            </p>
          </div>
      </div>
    </>
  );
};

export default AlgebraSolver;

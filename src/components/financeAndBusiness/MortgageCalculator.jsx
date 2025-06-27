import React, { useState, useEffect } from "react";
import { calculateMortgage } from "../../utils/financeAndBusiness";
import { FaMoneyBillWave, FaPercentage, FaDollarSign } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
const DOMAIN = import.meta.env.VITE_SITE_DOMAIN;

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(null);
  const [downPaymentAmount, setDownPaymentAmount] = useState(0);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [isDownPaymentPercent, setIsDownPaymentPercent] = useState(true); 
  const [interestRate, setInterestRate] = useState(null);
  const [loanTerm, setLoanTerm] = useState(null);
  const [propertyTax, setPropertyTax] = useState(0);
  const [homeInsurance, setHomeInsurance] = useState(0);
  const [hoaFees, setHoaFees] = useState(0);
  const [result, setResult] = useState(null);

  useEffect(() => { 
    if (
      isDownPaymentPercent &&
      typeof homePrice === "number" &&
      homePrice > 0
    ) {
      const calculatedAmount = (homePrice * downPaymentPercent) / 100;
      // console.log("Updating down payment based on percent:", calculatedAmount);
      setDownPaymentAmount(calculatedAmount);
    }
  }, [homePrice, downPaymentPercent, isDownPaymentPercent]);

  const handleCalculate = () => {
    const output = calculateMortgage(
      homePrice,
      interestRate,
      loanTerm,
      downPaymentAmount,
      propertyTax,
      homeInsurance,
      hoaFees
    );
    setResult(output);
  };

  return (
    <>
      <Helmet>
        <title>Mortgage Calculator | CalPro</title>
        <meta
          name="description"
          content="Easily calculate your monthly mortgage payments with CalPro's Mortgage Calculator."
        />
        <link rel="canonical" href={`${DOMAIN}/finance/mortgage`} />
        <meta property="og:title" content="Mortgage Calculator - CalPro" />
        <meta
          property="og:description"
          content="Plan your mortgage with accurate monthly calculations."
        />
      </Helmet>

      <div className="flex flex-col items-center pb-4 w-full">
        <div className="self-start mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Mortgage Calculator
          </h2>
          <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">
            Estimate your monthly mortgage payments with all key components.
          </p>
        </div>
        <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
          <div className="flex items-center justify-center gap-2 mb-6">
            <FaMoneyBillWave className="text-green-500 text-xl md:text-3xl" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Mortgage Calculator
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                🏠 Home Price
              </label>
              <input
                type="number"
                min={0}
                value={homePrice || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  setHomePrice(value === "" ? null : Number(value));
                }}
                onKeyDown={(e)=>{
                  if(e.key==='-'||e.key==='e')
                     e.preventDefault()
                    }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="e.g. 300000"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm text-gray-600">
                  💸 Down Payment
                </label>
                <button
                  onClick={() => setIsDownPaymentPercent((prev) => !prev)}
                  className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded-md hover:bg-gray-200 transition"
                >
                  {isDownPaymentPercent ? (
                    <FaPercentage size={10} />
                  ) : (
                    <FaDollarSign size={10} />
                  )}
                  {isDownPaymentPercent ? "Switch to Amount" : "Switch to %"}
                </button>
              </div>

              {isDownPaymentPercent ? (
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={downPaymentPercent}
                    onChange={(e) => {
                      const value = e.target.value;
                      setDownPaymentPercent(
                        value === "" ? null : Number(value)
                      );
                    }}
                    className="w-full"
                  />
                  <span className="w-16 text-center px-2 py-1 bg-gray-100 rounded-md">
                    {downPaymentPercent}%
                  </span>
                </div>
              ) : (
                <input
                  type="number"
                  value={downPaymentAmount || ""}
                  onChange={(e) => {
                    const value = e.target.value;
                    setDownPaymentAmount(value === "" ? null : Number(value));
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  placeholder="e.g. 60000"
                />
              )}
              {downPaymentAmount != null && (
                <p className="text-xs text-gray-500 mt-1">
                  Down Payment: ${downPaymentAmount.toLocaleString()}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                📈 Interest Rate (%)
              </label>
              <input
                type="number"
                min={0}
                value={interestRate || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  setInterestRate(value === "" ? null : Number(value));
                }}
                onKeyDown={(e)=>{
                  if(e.key==='-'||e.key==='e')
                     e.preventDefault()
                    }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="e.g. 6.5"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                📆 Loan Term (Years)
              </label>
              <input
                type="number"
                min={0}
                value={loanTerm || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  setLoanTerm(value === "" ? null : Number(value));
                }}
                onKeyDown={(e)=>{
                  if(e.key==='-'||e.key==='e')
                     e.preventDefault()
                    }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="e.g. 30"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                🏢 Property Tax (Annual)
              </label>
              <input
                type="number"
                min={0}
                value={propertyTax || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  setPropertyTax(value === "" ? null : Number(value));
                }}
                onKeyDown={(e)=>{
                  if(e.key==='-'||e.key==='e')
                     e.preventDefault()
                    }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="e.g. 3000"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                🛡️ Home Insurance (Annual)
              </label>
              <input
                type="number"
                min={0}
                value={homeInsurance || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  setHomeInsurance(value === "" ? null : Number(value));
                }}
                onKeyDown={(e)=>{
                  if(e.key==='-'||e.key==='e')
                     e.preventDefault()
                    }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="e.g. 1200"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                🏘️ HOA Fees (Monthly)
              </label>
              <input
                type="number"
                min={0}
                value={hoaFees || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  setHoaFees(value === "" ? null : Number(value));
                }}
                onKeyDown={(e)=>{
                  if(e.key==='-'||e.key==='e')
                     e.preventDefault()
                    }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="e.g. 100"
              />
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300 hover:cursor-pointer"
          >
            � Calculate Mortgage
          </button>

          {result && (
            <div className="mt-8 text-center space-y-2">
              <p className="text-sm text-gray-600">
                Your Estimated Monthly Payment:
              </p>
              <p className="text-3xl md:text-4xl font-extrabold text-green-600">
                ${result.monthlyPayment}
              </p>
              <div className="text-sm text-gray-600 pt-2 space-y-1">
                <p>Principal & Interest: ${result.principalAndInterest}</p>
                <p>Property Tax: ${result.propertyTax}</p>
                <p>Home Insurance: ${result.homeInsurance}</p>
                <p>HOA Fees: ${result.hoaFees}</p>
              </div>
            </div>
          )}
        </div>
        <div className="pt-10">
          <p className="text-sm text-gray-600">
            This comprehensive mortgage calculator includes principal, interest,
            property taxes, insurance, and HOA fees to give you the most
            accurate monthly payment estimate.
          </p>
        </div>
      </div>
    </>
  );
};

export default MortgageCalculator;

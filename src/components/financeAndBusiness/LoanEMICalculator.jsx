import React, { useState } from "react";
import { calculateEMI } from '../../utils/financeAndBusiness';
import { FaMoneyBillWave } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
const DOMAIN = import.meta.env.VITE_SITE_DOMAIN;

const LoanEMICalculator = () => {
  const [principal, setPrincipal] = useState(null);
  const [rate, setRate] = useState(null);
  const [tenure, setTenure] = useState(null);
  const [emi, setEmi] = useState(null);

  const handleCalculate = () => {
    const result = calculateEMI(principal, rate, tenure);
    setEmi(result);
  };

  return (
    <>
     <Helmet>
        <title>Loan EMI Calculator | CalPro</title>
        <meta
          name="description"
          content="Calculate your monthly EMI payments easily using CalPro's fast and free loan calculator."
        />
        <link rel="canonical" href={`${DOMAIN}/finance/loan-emi`} />
        <meta property="og:title" content="Loan EMI Calculator - CalPro" />
        <meta property="og:description" content="Plan your loan with accurate EMI calculations." />
      </Helmet>
    
    <div className="flex flex-col items-center pb-4 w-full">
      <div className="self-start mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">EMI Calculator</h2>
        <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">Plan Smart. Borrow Right. Calculate Your EMI in Seconds.</p>
      </div>
      <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
        <div className="flex items-center justify-center gap-2 mb-6">
          <FaMoneyBillWave className="text-green-500 text-xl md:text-3xl" />
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">Loan EMI Calculator</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">💰 Loan Amount</label>
            <input
              type="number"
              min={0}
              value={principal}
              onChange={(e) => {
                  const value = e.target.value;
                  setPrincipal(value === "" ? null : Number(value));
                }}
                onKeyDown={(e)=>{
                  if(e.key==='-'||e.key==='e')
                     e.preventDefault()
                    }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              placeholder="e.g. 500000"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">📈 Interest Rate (%)</label>
            <input
              type="number"
              min={0}
              value={rate}
              onChange={(e) => {
                  const value = e.target.value;
                  setRate(value === "" ? null : Number(value));
                }}
                onKeyDown={(e)=>{
                  if(e.key==='-'||e.key==='e')
                     e.preventDefault()
                    }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              placeholder="e.g. 7.5"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">📆 Loan Tenure (Months)</label>
            <input
              type="number"
              min={0}
              value={tenure}
              onChange={(e) => {
                  const value = e.target.value;
                  setTenure(value === "" ? null : Number(value));
                }}
                onKeyDown={(e)=>{
                  if(e.key==='-'||e.key==='e')
                     e.preventDefault()
                    }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              placeholder="e.g. 60"
            />
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300 hover:cursor-pointer "
        >
          🔍 Calculate EMI
        </button>

        {emi !== null && (
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">Your Monthly EMI is</p>
            <p className="text-3xl md:text-4xl font-extrabold text-green-600 mt-1">
              USD: {emi}
            </p>
          </div>
        )}
      </div>
      <div className="pt-10">
        <p className="text-sm text-gray-600 ">Our EMI Calculator helps you quickly and accurately calculate your monthly loan installments. Whether you're planning to take a home loan, car loan, or personal loan, this tool gives you a clear breakdown of your EMI, total interest, and repayment schedule. Just enter the loan amount, interest rate, and tenure — and get instant results to make informed financial decisions.</p>
      </div>
    </div>
    </>
  );
};

export default LoanEMICalculator;

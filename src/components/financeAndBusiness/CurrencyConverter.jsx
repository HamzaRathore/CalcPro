import React, { useState, useEffect } from "react";
import { convertCurrency } from "../../utils/financeAndBusiness";
import { FaMoneyBillWave } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const API_KEY = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("PKR");
  const [converted, setConverted] = useState(null);
  const [exchangeRates, setExchangeRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.result === "success") {
          setExchangeRates(data.conversion_rates);

          const result = convertCurrency(
            amount,
            1,
            data.conversion_rates[toCurrency]
          );
          setConverted(result);
        } else {
          throw new Error(
            data["error-type"] || "Failed to fetch exchange rates"
          );
        }
      } catch (err) {
        console.error("Error fetching exchange rates:", err);
        setError("Failed to load exchange rates. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRates();
  }, [fromCurrency, toCurrency]);

  // handleConvert function ko update karein
  const handleConvert = () => {
    if (exchangeRates) {
      const fromRate = 1;
      const toRate = exchangeRates[toCurrency];
      if (toRate) {
        const result = convertCurrency(amount, fromRate, toRate);
        setConverted(result);
      } else {
        setError("Selected 'To' currency rate not available.");
      }
    } else {
      setError("Exchange rates not loaded yet.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Currency Converter Calculator | CalPro</title>
        <meta
          name="description"
          content="Calculate your currency easily using CalPro's fast and free loan calculator."
        />
        <link rel="canonical" href="https://yourdomain.com/finance/currency" />
        <meta
          property="og:title"
          content="Currency Converter Calculator - CalPro"
        />
        <meta property="og:description" content="Convert your currency." />
      </Helmet>

      <div className="flex flex-col items-center pb-4 w-full">
        <div className="self-start mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 ">
            Currency Converter
          </h2>
          <p className="text-md text-gray-600 pt-2 pb-2 md:pb-7">
            Convert between currencies instantly with real-time exchange rates.
          </p>
        </div>
        <div className="w-full max-w-xl p-8 bg-white/80 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200">
          <div className="flex items-center justify-center gap-2 mb-6">
            <FaMoneyBillWave className="text-green-500 text-xl md:text-3xl" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Currency Converter
            </h2>
          </div>

          {loading && (
            <p className="text-center text-blue-600">
              Loading exchange rates...
            </p>
          )}
          {error && <p className="text-center text-red-600">{error}</p>}

          {!loading && !error && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  💵 Amount
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => {
                    const value = e.target.value;
                    setAmount(value === "" ? null : Number(value));
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  placeholder="e.g. 100"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    From Currency
                  </label>
                  <select
                    value={fromCurrency}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFromCurrency(value === "" ? null : Number(value));
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  >
                    {exchangeRates &&
                      Object.keys(exchangeRates).map((currency) => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    To Currency
                  </label>
                  <select
                    value={toCurrency}
                    onChange={(e) => {
                      const value = e.target.value;
                      setToCurrency(value === "" ? null : Number(value));
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  >
                    {exchangeRates &&
                      Object.keys(exchangeRates).map((currency) => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={handleConvert}
            className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300"
            disabled={loading || error}
          >
            🔄 Convert Currency
          </button>

          {converted !== null && (
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">Converted Amount</p>
              <p className="text-3xl md:text-4xl font-extrabold text-green-600 mt-1">
                {amount} {fromCurrency} = {converted} {toCurrency}
              </p>
            </div>
          )}
        </div>
        <div className="pt-10">
          <p className="text-sm text-gray-600 ">
            Our Currency Converter helps you easily convert between different
            currencies. Select the currencies and enter the amount to get
            accurate conversions instantly based on exchange rates.
          </p>
        </div>
      </div>
    </>
  );
};

export default CurrencyConverter;

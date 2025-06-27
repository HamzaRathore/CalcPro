const API_KEY = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;

export const fetchExchangeRates = async (baseCurrency) => {
  const response = await fetch(
    `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${baseCurrency}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();

  if (data.result !== "success") {
    throw new Error(data["error-type"] || "Failed to fetch exchange rates");
  }

  return data.conversion_rates;
};

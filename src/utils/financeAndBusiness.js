export function calculateEMI(principal, annualRate, tenureMonths) {
  const monthlyRate = annualRate / 12 / 100;
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
              (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  return emi.toFixed(2);
}

// Currency Converter
export function convertCurrency(amount, fromRate, toRate) {
  const converted = (amount / fromRate) * toRate; 
  return converted.toFixed(2);
}


// Budget Planner Calculator
export function calculateBudget(income, expenses) {
  const totalExpenses = Object.values(expenses).reduce((sum, value) => sum + value, 0);
  const balance = income - totalExpenses;
  const percentageUsed = ((totalExpenses / income) * 100).toFixed(2);
  return {
    totalExpenses,
    balance,
    percentageUsed,
  };
}

// Mortgage Calculator
export function calculateMortgage(principal, annualRate, years, downPayment = 0, propertyTax = 0, homeInsurance = 0, hoaFees = 0) {
  const loanAmount = principal - downPayment;
  const months = years * 12;
  const monthlyRate = annualRate / 100 / 12;
  const monthlyPrincipalInterest = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  const monthlyPropertyTax = propertyTax / 12;
  const monthlyHomeInsurance = homeInsurance / 12;
  const totalMonthly = monthlyPrincipalInterest + monthlyPropertyTax + monthlyHomeInsurance + hoaFees;
  return {
    monthlyPayment: totalMonthly.toFixed(2),
    principalAndInterest: monthlyPrincipalInterest.toFixed(2),
    propertyTax: monthlyPropertyTax.toFixed(2),
    homeInsurance: monthlyHomeInsurance.toFixed(2),
    hoaFees: hoaFees.toFixed(2),
  };
}

// Calculate Compound Interest
export function calculateCompoundInterest(principal, rate, time, frequency) {
  const compoundFactor = Math.pow(1 + (rate / 100) / frequency, frequency * time);
  const amount = principal * compoundFactor;
  const interest = amount - principal;
  return {
    totalAmount: amount.toFixed(2),
    compoundInterest: interest.toFixed(2),
  };
}

// Retirement Saving Calculator
export function calculateRetirementSavings(
  currentAge,
  retirementAge,
  currentSavings,
  monthlyContribution,
  annualReturnRate
) {
  const yearsToRetirement = retirementAge - currentAge;
  const months = yearsToRetirement * 12;
  const monthlyRate = annualReturnRate / 100 / 12;
  let futureValue = currentSavings * Math.pow(1 + monthlyRate, months);
  for (let i = 1; i <= months; i++) {
    futureValue += monthlyContribution * Math.pow(1 + monthlyRate, months - i + 1);
  }
  return {
    totalRetirementSavings: futureValue.toFixed(2),
  };
}

// Profit Margin Calculator
export function calculateProfitMargin(cost, revenue) {
  const profit = revenue - cost;
  const margin = (profit / revenue) * 100;
  return {
    profit: profit.toFixed(2),
    margin: margin.toFixed(2),
  };
}


// Tax Calculator
export function calculateTax(income, taxRate) {
  const taxAmount = (income * taxRate) / 100;
  const netIncome = income - taxAmount;
  return {
    taxAmount: taxAmount.toFixed(2),
    netIncome: netIncome.toFixed(2),
  };
}

// Dept Payoff Calculator
export function calculateDebtPayoff(loanAmount, annualInterestRate, monthlyPayment) {
  const monthlyInterestRate = annualInterestRate / 100 / 12;
  let balance = loanAmount;
  let totalInterest = 0;
  let months = 0;

  if (monthlyPayment <= balance * monthlyInterestRate) {
    return { error: "Monthly payment too low to reduce debt." };
  }

  while (balance > 0) {
    const interest = balance * monthlyInterestRate;
    const principal = monthlyPayment - interest;
    balance -= principal;
    totalInterest += interest;
    months++;
    if (months > 1000) break; 
  }

  return {
    months,
    years: Math.floor(months / 12),
    remainingMonths: months % 12,
    totalInterest: Math.round(totalInterest),
    totalPaid: Math.round(totalInterest + loanAmount),
  };
}


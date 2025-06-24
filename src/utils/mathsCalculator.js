// Percentage Calculator
export function calculatePercentage(value, percentage) {
  return parseFloat(((value * percentage) / 100).toFixed(2));
}

export function calculateWhatPercentage(part, total) {
  if (total === 0) return 0;
  return parseFloat(((part / total) * 100).toFixed(2));
}

//   Calculates Simple Interest
//   Formula: SI = (P × R × T) / 100
export function calculateSimpleInterest(principal, rate, time) {
  const interest = (principal * rate * time) / 100;
  return parseFloat(interest.toFixed(2));
}


//   Calculates Compound Interest 
//   Formula: CI = P × (1 + R/(100×n))^(n×T) - P
export function calculateCompoundInterest(principal, rate, time, frequency) {
  const amount = principal * Math.pow((1 + (rate / (100 * frequency))), frequency * time);
  const interest = amount - principal;
  return parseFloat(interest.toFixed(2));
}

// Quadratic Equation
export function solveQuadraticEquation(a, b, c) {
  const discriminant = b * b - 4 * a * c;

  if (a === 0) {
    return { error: "Coefficient 'a' cannot be zero in a quadratic equation." };
  }

  if (discriminant < 0) {
    return { error: "No real roots exist (Discriminant is negative)." };
  }

  const sqrtD = Math.sqrt(discriminant);
  const root1 = (-b + sqrtD) / (2 * a);
  const root2 = (-b - sqrtD) / (2 * a);

  return {
    root1: parseFloat(root1.toFixed(3)),
    root2: parseFloat(root2.toFixed(3)),
  };
}


/** Rectangle Area & Perimeter */
export function calculateRectangle(length, width) {
  const area = length * width;
  const perimeter = 2 * (length + width);
  return { area, perimeter };
}

/** Square Area & Perimeter */
export function calculateSquare(side) {
  const area = side * side;
  const perimeter = 4 * side;
  return { area, perimeter };
}

/** Circle Area & Circumference */
export function calculateCircle(radius) {
  const area = Math.PI * radius * radius;
  const perimeter = 2 * Math.PI * radius;
  return {
    area: parseFloat(area.toFixed(3)),
    perimeter: parseFloat(perimeter.toFixed(3)),
  };
}


/** Probability Calculator: P(E) = favorable / total */
export function calculateProbability(favorable, total) {
  if (total <= 0 || favorable < 0 || favorable > total) {
    return { error: "Please enter valid values. Favorable should be between 0 and total outcomes." };
  }

  const probability = favorable / total;
  return {
    probability: parseFloat(probability.toFixed(4))
  };
}

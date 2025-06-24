
// BMI Calculator
export function calculateBMI(weightKg, heightCm) {
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  let category = "";

  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Normal weight";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obese";

  return {
    bmi: bmi.toFixed(1),
    category,
  };
}

// BMR Calculator

export function calculateBMR(weightKg, heightCm, age, gender) {
  if (gender === "male") {
    return (10 * weightKg + 6.25 * heightCm - 5 * age + 5).toFixed(2);
  } else {
    return (10 * weightKg + 6.25 * heightCm - 5 * age - 161).toFixed(2);
  }
}


// Calorie Intake Calculator

export function calculateCalorieIntake(bmr, activityLevel) {
  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryActive: 1.9,
  };

  const multiplier = activityMultipliers[activityLevel] || 1.2;
  const calories = bmr * multiplier;

  return calories.toFixed(2);
}

// Body Fat Calculator
export function calculateBodyFatPercentage(gender, waistCm, neckCm, heightCm, hipCm = 0) {
  const log10 = (x) => Math.log(x) / Math.LN10;
  let bodyFat = 0;

  if (gender === "male") {
    bodyFat = 495 / (1.0324 - 0.19077 * log10(waistCm - neckCm) + 0.15456 * log10(heightCm)) - 450;
  } else {
    bodyFat = 495 / (1.29579 - 0.35004 * log10(waistCm + hipCm - neckCm) + 0.22100 * log10(heightCm)) - 450;
  }

  return bodyFat.toFixed(2);
}

// Pregnancy Due Date
export function calculatePregnancyDueDate(lastPeriodDateString) {
  const lmpDate = new Date(lastPeriodDateString);
  const dueDate = new Date(lmpDate);
  dueDate.setDate(dueDate.getDate() + 280); // 40 weeks = 280 days
  return dueDate.toDateString();
}

// Calculate Water Intake
export function calculateWaterIntake(weightKg, activityLevel) {
  const baseIntake = weightKg * 0.033; // 33ml per kg
  let multiplier = 1;

  switch (activityLevel) {
    case "low":
      multiplier = 1;
      break;
    case "moderate":
      multiplier = 1.2;
      break;
    case "high":
      multiplier = 1.4;
      break;
  }

  const totalLiters = baseIntake * multiplier;
  return totalLiters.toFixed(2);
}

import { DateTime } from "luxon";
import { timeZonesNames } from "@vvo/tzdb";

/** Age Calculator */
export function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);

  if (isNaN(birth.getTime())) {
    return { error: "Invalid birth date." };
  }

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  // Adjust for negative days
  if (days < 0) {
    months -= 1;
    const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += previousMonth;
  }

  // Adjust for negative months
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return {
    years,
    months,
    days
  };
}

/** 
 * Love Compatibility Calculator
 * Calculates a compatibility percentage based on the ASCII value of characters 
 */
export function calculateLoveCompatibility(name1, name2) {
  if (!name1 || !name2) {
    return { error: "Please enter both names." };
  }
  const combined = (name1 + name2).toLowerCase();
  let score = 0;

  // Add up ASCII values of each character
  for (let i = 0; i < combined.length; i++) {
    score += combined.charCodeAt(i);
  }

  // Keep result within 0–100%
  const compatibility = score % 101;

  return {
    compatibility
  };
}


// Date Difference Calculator
 
export function calculateDateDifference(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    return { error: "Please enter valid dates." };
  }

  const diffTime = Math.abs(endDate - startDate); // time in milliseconds
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // convert to days

  return { days: diffDays };
}


// Tip Calculator
export function calculateTip(billAmount, tipPercentage, numberOfPeople = 1) {
  if (billAmount <= 0 || tipPercentage < 0 || numberOfPeople <= 0) {
    return { error: "Please enter valid values for bill, tip, and people." };
  }

  const tip = (billAmount * tipPercentage) / 100;
  const total = billAmount + tip;
  const perPerson = total / numberOfPeople;

  return {
    tip: parseFloat(tip.toFixed(2)),
    total: parseFloat(total.toFixed(2)),
    perPerson: parseFloat(perPerson.toFixed(2))
  };
}


// Dynamically retrieved list of IANA time zones
export const timeZones = timeZonesNames;
  // Converts time from one time zone to another
 
export function convertTimeZone(inputTime, fromZone, toZone) {
  try {
    const fromTime = DateTime.fromISO(inputTime, { zone: fromZone });
    const toTime = fromTime.setZone(toZone);
    return toTime.toFormat("yyyy-MM-dd HH:mm:ss ZZZZ");
  } catch (err) {
    return "Invalid Time";
  }
}


//  Returns time difference between zones
 
export function getTimeDifference(fromZone, toZone) {
  const from = DateTime.now().setZone(fromZone);
  const to = DateTime.now().setZone(toZone);
  const diff = to.offset - from.offset; // in minutes
  const hours = Math.floor(Math.abs(diff) / 60);
  const minutes = Math.abs(diff) % 60;
  const direction = diff >= 0 ? "ahead" : "behind";
  return `${hours}h ${minutes}m ${direction}`;
}


//  Returns current time in specified zone

export function getCurrentTimeInZone(zone) {
  return DateTime.now().setZone(zone).toFormat("HH:mm:ss");
}


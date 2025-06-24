// OHM's law calculator

export function calculateOhmsLaw(voltage, current, resistance) {
  let result = { voltage: null, current: null, resistance: null };

  if (voltage === null && current !== null && resistance !== null) {
    result.voltage = (current * resistance).toFixed(2);
    result.current = current;
    result.resistance = resistance;
  } else if (current === null && voltage !== null && resistance !== null) {
    result.current = (voltage / resistance).toFixed(2);
    result.voltage = voltage;
    result.resistance = resistance;
  } else if (resistance === null && voltage !== null && current !== null) {
    result.resistance = (voltage / current).toFixed(2);
    result.voltage = voltage;
    result.current = current;
  }

  return result;
};

// Physics Force Calculator
export function calculateForce(mass, acceleration) {
  if (typeof mass !== "number" || typeof acceleration !== "number") {
    throw new Error("Mass and acceleration must be numbers");
  }
  return parseFloat((mass * acceleration).toFixed(2));
}


// Molarity Calculator
export function calculateMolarity(moles,volume){
    if(typeof moles !=='number' || typeof volume !='number' || volume ===0)
    {
        throw new Error("Invalid input: moles must be a number and volume must be a non-zero number")
    }

    return parseFloat((moles/volume).toFixed(4));
}

// Unit Converter
export function convertUnits(value, fromUnit, toUnit) {
  const conversionRatesToMeters = {
    meters: 1,
    kilometers: 1000,
    miles: 1609.34,
    feet: 0.3048,
    inches: 0.0254,
    centimeters: 0.01,
  };

  if (!conversionRatesToMeters[fromUnit] || !conversionRatesToMeters[toUnit]) {
    throw new Error("Unsupported unit type.");
  }

  const valueInMeters = value * conversionRatesToMeters[fromUnit];
  const convertedValue = valueInMeters / conversionRatesToMeters[toUnit];

  return parseFloat(convertedValue.toFixed(4));
}

// Calculate Speed Distance Time
export function calculateSDT(speed, distance, time) {
  if ([speed, distance, time].filter((v) => v !== null).length !== 2) {
    throw new Error("Exactly two values must be provided.");
  }

  if (speed === null) {
    return { speed: parseFloat((distance / time).toFixed(2)), distance, time };
  }
  if (distance === null) {
    return { speed, distance: parseFloat((speed * time).toFixed(2)), time };
  }
  if (time === null) {
    return { speed, distance, time: parseFloat((distance / speed).toFixed(2)) };
  }

  return { speed, distance, time }; 
}

// Power Consumption Calculator
export function calculatePowerConsumption(watts, hoursPerDay, days) {
  const kWh = (watts * hoursPerDay * days) / 1000;
  return parseFloat(kWh.toFixed(2));
}
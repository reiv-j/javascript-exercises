const convertToCelsius = function(temp) {
  const result = 5/9 * (temp - 32);
  return Number(result.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  const result = (temp * (9/5)) + 32;
  return Number(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

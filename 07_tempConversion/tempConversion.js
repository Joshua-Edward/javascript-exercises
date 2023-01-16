const convertToCelsius = function(celsiusIn) {
  const fahrenheitOut = (celsiusIn - 32) * (5 / 9);
  return(Number(fahrenheitOut.toFixed(1)));
};

const convertToFahrenheit = function(fahrenheitIn) {
  const celsiusOut = (fahrenheitIn * 9 / 5) + 32;
  return(Number(celsiusOut.toFixed(1)));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

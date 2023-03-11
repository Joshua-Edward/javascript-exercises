const add = function(a, b) {
	let addTotal = a + b;
  return addTotal;
};

const subtract = function(a, b) {
	let subtractTotal = a - b;
  return subtractTotal;
};

const sum = function(sumArray) {
	sumArrayTotal = 0;
  for (let i = 0; i < sumArray.length; i++) {
    sumArrayTotal += sumArray[i];
  }
  return sumArrayTotal;
};

const multiply = function(multiplyArray) {
	multiplyArrayTotal = 1;
  for (let i = 0; i < multiplyArray.length; i++) {
    multiplyArrayTotal *= multiplyArray[i];
  }
  return multiplyArrayTotal;
};

const power = function(baseNumber, powerNumber) {
  powerTotal = baseNumber;
  for (let i = 1; i < powerNumber; i++) {
    powerTotal *= baseNumber;
  }
  return powerTotal;
};

const factorial = function(a) {
  factorialTotal = 1;
  if (a === 0) {
    return 1;
  } else {
    for (let i = 1; i <= a; i++) {
      factorialTotal *= i;
    }
    return factorialTotal;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

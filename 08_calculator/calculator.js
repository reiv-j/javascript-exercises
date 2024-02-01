const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr.reduce((a,b) => a + b);
  }
};

const multiply = function(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr.reduce((a,b) => a * b);
  }
};

const power = function(num1, power) {
  let result = 1;
	for (let i = 0; i < power; i++) {
    result *= num1;
  }
  return result;
};

const factorial = function(num) {
  if (num === 0) return 1;
  let result = num;
  for (let i = num - 1; i > 0; i--) {
    result *= i;
  }
  return result;
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

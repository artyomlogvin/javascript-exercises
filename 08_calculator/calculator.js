const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((mul, current) => mul * current, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if (a === 0) {
    return 1;
  }
  
  let factorialResult = a;
  let n = a - 1;
	while (n > 1) {
    factorialResult *= n;
    n--;
  }
  return factorialResult;
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

const add = function(...args) {
	let added = 0;
  args.forEach( (number) => added += number);
  return added;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
  array.forEach( (number) => sum += number);
  return sum;
};

const multiply = function(array) {
  let total = array[0];
  for (let i = 1; i < array.length; i++) {
    total *= array[i];
  }
  return total;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {

  // base case
	if (num == 0) {
    return 1;
  }

  return (num * factorial(num-1));
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

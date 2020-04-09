/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const len = digits.length - 1;
  let carriedValue = 1;

  for (let i = len; i >= 0; i--) {
    digits[i] += carriedValue;

    if (digits[i] >= 10) {
      digits[i] = digits[i] - 10;
    } else {
      carriedValue = 0;
    }
  }

  return carriedValue ? [carriedValue, ...digits] : digits;
};

var num = [1, 2, 3];

console.log(plusOne(num));

var num2 = [9, 9, 9, 9];

console.log(plusOne(num2));

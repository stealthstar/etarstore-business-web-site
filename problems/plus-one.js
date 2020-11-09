/**
 * 66. Plus One
 *
 * Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
 *
 * The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 *
 * Example 1:
 *
 * Input: [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 *
 * Example 2:
 *
 * Input: [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 *
 * #Array
 *
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

/**
 * 167. Two Sum II - Input array is sorted
 * Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.


Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let i = 0
    let j = numbers.length - 1

    for (i, j; i < j; ) {
        if (numbers[i] + numbers[j] < target) i++
        if (numbers[i] + numbers[j] > target) j--
        if (numbers[i] + numbers[j] === target) break
    }

    return [i + 1, j + 1]
}

console.log(twoSum([2, 3, 4], 7)) // 2, 3
console.log(twoSum([2, 3, 4], 6)) // 1, 3
console.log(twoSum([2, 7, 11, 15], 9)) // 1, 2
console.log(twoSum([-1, 0], -1)) // 1, 2

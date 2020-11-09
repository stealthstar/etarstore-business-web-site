/**
 * 1. Two Sum
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * Example:
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 *
 * return [0, 1].
 *
 * #Array #Hash-Table
 *
 * @param {*} nums
 * @param {*} target
 */
var twoSum = function (nums, target) {
    const map = {}

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i
    }

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]

        if (map[complement] && map[complement] !== i) {
            return [i, map[complement]]
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([2, 7, 11, 15], 26))
console.log(twoSum([2, 7, 11, 15], 22))
console.log(twoSum([2, 7, 11, 15], 13))
console.log(twoSum([2, 7, 11, 15], 18))
console.log(twoSum([1, 3, 4, 2], 6))

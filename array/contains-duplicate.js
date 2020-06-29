/**
 * 217. Contains Duplicate
 *
 * Given an array of integers, find if the array contains any duplicates.
 * Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
 *
 * Example 1:
 *
 *   Input: [1,2,3,1]
 *   Output: true
 *
 * Example 2:
 *
 *   Input: [1,2,3,4]
 *   Output: false
 *
 * Example 3:
 *
 *   Input: [1,1,1,3,3,4,3,2,4,2]
 *   Output: true
 *
 *
 * 兩種解法：
 * 1. Hash Map
 * 2. 如果有重複的數字，它們一定會相鄰在一起，
 *    所以可以先將陣列排序，再用陣列走訪判斷 nums[i] 和 nums[i+1] 兩個數字是否相等
 *    相等表示找到重複
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    nums = nums.sort()

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            return true
        }
    }

    return false
}

var containsDuplicate_HashMap = function (nums) {
    let map = {}

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            return true
        }
        else {
            map[nums[i]] = 1
        }
    }
    return false
}

console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))

/**
 * 169. Majority Element
 *
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 *
 * Example 1:
 *
 *   Input: [3,2,3]
 *   Output: 3
 *
 * Example 2:
 *
 *   Input: [2,2,1,1,1,2,2]
 *   Output: 2
 *
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    /**
     * 數量多的元素會在中間的比例最高，以上面註解的範例來看
     *
     * [2,3,3]
     * [1,1,1,2,2,2,2]
     *
     * 因此可以先將陣列排序後，再除以2取得中位數即為答案
     */
    return nums.sort()[Math.floor(nums.length / 2)]
}

var majorityElement_HashMap = function (nums) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1
        }
        else {
            map[nums[i]] += 1
        }
    }

    return Object.keys(map).reduce((a, b) => map[a] > map[b] ? a : b)
}

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))

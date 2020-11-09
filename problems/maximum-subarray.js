/**
 * #DP #Dyanmic-Programming
 * 53. Maximum Subarray
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 *
 * Example:
 *
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 *
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 * Follow up:
 * If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 *
 * Solution:
 * DP (Dynamic Programing)
 * 從頭開始加，當總和比加的該項還小的時候就換成該項的值，一直到最後將加過的值裡面最大的記住即是答案。
 *
 * Reference:
 * https://hannahpun.gitbook.io/leetcode-note/math/53-maximum-subarray
 * https://knightzone.studio/2019/04/16/4282/leetcode%EF%BC%9A53-maximum-subarray/
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length < 2) {
        return nums
    }

    let sum = nums[0]
    let current = nums[0]

    for (i = 1; i < nums.length; i++) {
        current = Math.max(current + nums[i], nums[i])

        sum = Math.max(sum, current)
    }

    return sum
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])

maxSubArray([-1])

maxSubArray([-2, -1])
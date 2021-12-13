/**
 * #Two-pointers
 * 350. Intersection of Two Arrays II
 *
 * Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

1,1,2,2
2,2

4,5,9
4,4,8,9,9

4,7,9
4,4,8,9,9
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

解題策略：

先把 nums1 和 nums2 進行排序

指定兩個指針 i, j，從零開始走，並作以下判斷

1. nums1[i] 等於 nums2[j] 時，紀錄相同的數字，並且 i++, j++ 繼續往下走
2. nums1[i] 小於 nums2[j] 時，i++
3. nums2[j] 小於 nums1[i] 時，j++

當 nums1 或 nums2 走完時(超過陣列長度)，跳出迴圈並印出結果

 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const sorter = function (a, b) {
        return a - b
    }

    nums1 = nums1.sort(sorter)
    nums2 = nums2.sort(sorter)

    let i = 0
    let j = 0

    let result = []

    for (i, j; i < nums1.length && j < nums2.length; ) {
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i])
            i++
            j++
        } else if (nums1[i] < nums2[j]) {
            i++
        } else if (nums2[j] < nums1[i]) {
            j++
        }
    }

    return result
}

console.log(intersect([1, 2, 2, 1], [2, 2]))
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))

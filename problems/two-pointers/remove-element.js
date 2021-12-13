/**
 * #Two-pointers
 * 27. Remove Element
 *
 * Given an array nums and a value val, remove all instances of that value in-place and return the new length.
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 *
 * Example 1:
 *
 *   Given nums = [3,2,2,3], val = 3,
 *   Your function should return length = 2, with the first two elements of nums being 2.
 *   It doesn't matter what you leave beyond the returned length.
 *
 * Example 2:
 *
 *   Given nums = [0,1,2,2,3,0,4,2], val = 2,
 *
 *   Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.
 *   Note that the order of those five elements can be arbitrary.
 *   It doesn't matter what values are set beyond the returned length.
 *
 * Clarification:
 *   Confused why the returned value is an integer but your answer is an array?
 *   Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.
 *
 * Internally you can think of this:
 *   // nums is passed in by reference. (i.e., without making a copy)
 *   int len = removeElement(nums, val);
 *
 *   // any modification to nums in your function would be known by the caller
 *   // using the length returned by your function, it prints the first len elements.
 *   for (int i = 0; i < len; i++) {
 *     print(nums[i]);
 *   }
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    if (nums.length === 0) {
        return 0
    }

    let j = 0

    for (let i = 0; i < nums.length; i++) {
        // solution 1.
        // if (nums[i] !== val) {
        //   nums[j] = nums[i];
        //   j++;
        // }
        // solution 2.
        // if (nums[i] !== val) {
        //   if (nums[j] === val) {
        //     nums[j] = nums[i];
        //     nums[i] = val;
        //   }
        //   j++;
        // }
    }

    return j
}

let nums1 = [0, 1, 2, 2, 3, 0, 4, 2]
let nums2 = [3, 2, 2, 3]
let nums3 = [4, 4, 4, 4, 4, 0, 1, 2, 3, 5, 6]
let nums4 = [2, 0, 2, 0, 2, 6, 6, 8, 9]

const len1 = removeElement(nums1, 2)
const len2 = removeElement(nums2, 3)
const len3 = removeElement(nums3, 4)
const len4 = removeElement(nums4, 5)

console.log(nums1)
console.log(nums2)
console.log(nums3)
console.log(nums4)

console.log(len1)
console.log(len2)
console.log(len3)
console.log(len4)

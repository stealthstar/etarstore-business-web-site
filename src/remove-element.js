/**
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

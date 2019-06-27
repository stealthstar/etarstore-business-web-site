/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length;

  let middle = Math.floor((left + right) / 2);

  while (right - left !== 1) {
    if (nums[middle] === target) {
      return middle;
    }

    if (target > nums[middle]) {
      left = middle;
    }

    if (target < nums[middle]) {
      right = middle;
    }

    middle = Math.floor((left + right) / 2);
  }

  if (nums[middle] > target) {
    return left;
  }

  if (nums[middle] < target) {
    return right;
  }

  return middle;
};

const nums1 = [1, 3, 5, 6];
const nums2 = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  60,
  99,
  10001,
  20004,
  40234,
];

console.log(searchInsert(nums1, 2));
// console.log(searchInsert(nums2, 60));

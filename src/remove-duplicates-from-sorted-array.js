/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[j] !== nums[i]) {
      nums[++j] = nums[i];
      console.log(nums);
    }
  }

  return j;
};


const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const len = removeDuplicates(nums);

// console.log(len);
// console.log(nums);

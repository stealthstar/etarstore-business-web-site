/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.



Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []


Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105

 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (!nums || nums.length <= 2) {
        return []
    }

    nums = nums.sort((a, b) => a - b)

    let results = []
    const n = nums.length

    for (let i = 0; i < n - 1; i++) {
        // 列表已排序過，前一個元素已經把所有可能都找出來了，所以如果和前一個相同可略過
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue
        }

        let l = i + 1
        let r = n - 1
        let target = nums[i] * -1

        while (l < r) {
            if (nums[l] + nums[r] === target) {
                results.push([-target, nums[l], nums[r]])

                l++
                r--

                // 避免找到與前一個 left 相同數
                while (l < r && nums[l] === nums[l - 1]) l++
                // 避免找到與後一個 right 相同數
                while (l < r && nums[r] === nums[r + 1]) r--
            }
            // left + right > target 時，表示加總太大，因此 right-- 往前移，找出更小的總和
            else if (nums[l] + nums[r] > target) r--
            // left + right < target 時，表示加總太小，因此 left++ 往後移，找出更大的總和
            else if (nums[l] + nums[r] < target) l++
        }
    }

    return results
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([0]))
console.log(threeSum([]))
console.log(threeSum([1, -1, -1, 0]))
console.log(threeSum([0, 0, 0, 0]))
console.log(threeSum([-2, 0, 0, 2, 2]))

// ans [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]))

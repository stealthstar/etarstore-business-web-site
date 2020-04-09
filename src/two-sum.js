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

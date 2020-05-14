/**
 * 349. Intersection of Two Arrays
 *
 * Given two arrays, write a function to compute their intersection.
 *
 * Example 1:
 *
 *   Input: nums1 = [1,2,2,1], nums2 = [2,2]
 *   Output: [2]
 *
 *
 * Example 2:
 *
 *   Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 *   Output: [9,4]
 *
 * Note:
 *   Each element in the result must be unique.
 *   The result can be in any order.
 *
 * 解法有兩種：
 * 1. 使用 two-pointers
 * 2. Binary Search
 *  - nums2 由小到大排序
 *  - 遍歷 nums1
 *  - 針對 nums1 的每個數字，使用 binary search 查找是否有出現在 nums2
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let result = []

    let n1 = nums1.sort((a, b) => a - b)
    let n2 = nums2.sort((a, b) => a - b)

    let i = 0
    let j = 0

    while (i < n1.length && j < n2.length) {
        if (n1[i] > n2[j]) {
            j++
        } else if (n1[i] < n2[j]) {
            i++
        } else if (n1[i] === n2[j]) {
            if (result[result.length - 1] !== n2[j]) {
                result.push(n2[j])
            }

            j++
            i++
        }
    }

    return result
}

console.log(intersection([1, 2, 2, 1], [2, 2]))
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))
console.log(intersection([4, 8, 4], [9, 4, 9, 8, 4]))
console.log(intersection([9, 4, 8, 4], [9, 4, 9, 8, 4]))
console.log(intersection([9, 4, 8, 4], [9, 4, 7, 8, 4]))
console.log(intersection([1, 3, 8, 9, 3], [1, 0]))
console.log(intersection([1, 2], [1, 1]))
// console.log(
//     intersection(
//         [
//             61,
//             24,
//             20,
//             58,
//             95,
//             53,
//             17,
//             32,
//             45,
//             85,
//             70,
//             20,
//             83,
//             62,
//             35,
//             89,
//             5,
//             95,
//             12,
//             86,
//             58,
//             77,
//             30,
//             64,
//             46,
//             13,
//             5,
//             92,
//             67,
//             40,
//             20,
//             38,
//             31,
//             18,
//             89,
//             85,
//             7,
//             30,
//             67,
//             34,
//             62,
//             35,
//             47,
//             98,
//             3,
//             41,
//             53,
//             26,
//             66,
//             40,
//             54,
//             44,
//             57,
//             46,
//             70,
//             60,
//             4,
//             63,
//             82,
//             42,
//             65,
//             59,
//             17,
//             98,
//             29,
//             72,
//             1,
//             96,
//             82,
//             66,
//             98,
//             6,
//             92,
//             31,
//             43,
//             81,
//             88,
//             60,
//             10,
//             55,
//             66,
//             82,
//             0,
//             79,
//             11,
//             81,
//         ],
//         [
//             5,
//             25,
//             4,
//             39,
//             57,
//             49,
//             93,
//             79,
//             7,
//             8,
//             49,
//             89,
//             2,
//             7,
//             73,
//             88,
//             45,
//             15,
//             34,
//             92,
//             84,
//             38,
//             85,
//             34,
//             16,
//             6,
//             99,
//             0,
//             2,
//             36,
//             68,
//             52,
//             73,
//             50,
//             77,
//             44,
//             61,
//             48,
//         ]
//     )
// )
// 459 44899

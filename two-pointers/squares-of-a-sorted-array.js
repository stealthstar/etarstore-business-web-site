/**
 * 977. Squares of a Sorted Array
 *
 * Given an array of integers A sorted in non-decreasing order, return an array
 * of the squares of each number, also in sorted non-decreasing order.
 *
 * Example 1:
 *
 *   Input: [-4,-1,0,3,10]
 *   Output: [0,1,9,16,100]
 *
 * Example 2:
 *
 *   Input: [-7,-3,2,3,11]
 *   Output: [4,9,9,49,121]
 *
 * Note:
 *   1. 1 <= A.length <= 10000
 *   2. -10000 <= A[i] <= 10000
 *   3. A is sorted in non-decreasing order.

 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
    const abs = Math.abs

    const n = A.length
    let i = 0
    let tmp = abs(A[0])

    // find the number closest to zero
    for (let k = 1; k < n; k++) {
        const current = abs(A[k])

        if (current < tmp) {
            tmp = current
            i = k
        }
    }

    let j = i + 1
    const result = []

    while (i >= 0 || j < n) {
        // 如果j指標超過了或是 A[i] <= A[j]
        if (j >= n || (i >= 0 && abs(A[i]) <= abs(A[j]))) {
            result.push(A[i] * A[i])
            i--
        }
        // 如果i指標超過了或是 A[j] < A[i]
        else if (i < 0 || (j < n && abs(A[i]) >= abs(A[j]))) {
            result.push(A[j] * A[j])
            j++
        }
    }

    return result
}

console.log(sortedSquares([-4, -1, 0, 3, 10]))
console.log(sortedSquares([-7, -3, 2, 3, 11]))
console.log(sortedSquares([-7, -3, 2, 3, 11, 15]))
console.log(sortedSquares([-1, 2, 2]))
console.log(sortedSquares([2, 0]))
console.log(sortedSquares([-2, 0]))
console.log(sortedSquares([0, 2]))
console.log(sortedSquares([-2, -1, 0]))
console.log(sortedSquares([1]))

/**
 * #Sort #Array
 * 922. Sort Array By Parity II
 *
 * Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

You may return any answer array that satisfies this condition.



Example 1:

Input: [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.


Note:

2 <= A.length <= 20000
A.length % 2 == 0
0 <= A[i] <= 1000

 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
    // 使用一個額外陣列儲存結果，和兩個變數 odd even 紀錄奇數和偶數分別要存在陣列的哪個位置
    // 當 A[i] 是偶數 result[even] = A[i]
    // 當 A[i] 是奇數 result[odd] = A[i]
    //
    // ex: [4, 2, 5, 7]
    // A[0] = 4 為偶數 result[0] = 4, even + 2 = 2
    // A[1] = 2 為偶數 result[2] = 2, even + 2 = 4
    // A[2] = 5 為奇數 result[1] = 5, odd + 2 = 3
    // A[3] = 7 為奇數 result[3] = 7, odd + 2 = 5
    //
    // let result = []
    // let odd = 1
    // let even = 0
    // for (let i = 0; i < A.length; i++) {
    //     if (A[i] % 2 === 0) {
    //         result[even] = A[i]
    //         even += 2
    //     } else if (A[i] % 2 !== 0) {
    //         result[odd] = A[i]
    //         odd += 2
    //     }
    // }
    // return result

    // 雙指針
    // 用兩指針指向 even(0, 2, 4...) 和 odd(1, 3, 5...) 的 index
    // 當 A[i] 是偶數時，不用換位置，i 加 2 往後繼續比對
    // 當 A[j] 是奇數時，不用換位置，j 加 2 往後繼續比對
    // 當 A[i] 不是偶數或 A[j] 不是奇數時，交換兩者位置，並且 i 和 j 都加 2 往後繼續找
    let i = 0
    let j = 1
    let len = A.length

    while (i < len && j < len) {
        if (A[i] % 2 === 0) {
            i += 2
        } else if (A[j] % 2 !== 0) {
            j += 2
        } else {
            let tmp = A[i]
            A[i] = A[j]
            A[j] = tmp
            i += 2
            j += 2
        }
    }

    return A
}

console.log(sortArrayByParityII([4, 2, 5, 7]))

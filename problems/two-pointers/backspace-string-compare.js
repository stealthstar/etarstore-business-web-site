/**
 * #Two-pointers, #Stack
 * 844. Backspace String Compare
 *
 * Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
Follow up:

Can you solve it in O(N) time and O(1) space?

比對兩個字串是否相等，`#` 表示刪除，例如 `a#cd` 會是 `cd`

解題策略

1. 使用 stack，遇到 # 就 pop，否則 push 新的數字進去，再比對最終結果是否相等

2. 使用 Two pointers，比較 i, j

* 使用 i, j 兩個指針，指向 S, T 尾端

比對方式：
* 由後往前
* 裡面會在跑一個 while 迴圈，判斷是否有遇到 #，遇到時 skip 加1，同時 i--
* 如果有 # 或 skip > 0，則會再跑一次 while 迴圈，如果 skip > 0 時則 i--，表示要略過比對這個字元 (因為有 #，所以被刪掉了)，並且 skip-- 重置
* 如果沒有 # 或 skip > 0 就跳出 while
* 要跑 while 迴圈是因為有可能是這樣的字串 '#ab#'，i-- 有可能是負數
* 如果 S[i] !== T[j] 表示當前字元不一樣，所以S, T字串不會相等
* 如果 i >=0 !== j >= 0 表示其中一個字串已經走完，但另一個還沒完，則S, T字串不相等
* 如果 i 和 j 都小於 0 表示S, T兩者相等
* i-- 比對下個字元

 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
    // 雙指針解
    // 可節省儲存空間
    // let i = S.length - 1
    // let j = T.length - 1

    // let skipS = 0
    // let skipT = 0

    // while (i >= 0 || j >= 0) {
    //     while (i >= 0) {
    //         if (S[i] === '#') {
    //             skipS++
    //             i--
    //         } else if (skipS > 0) {
    //             skipS--
    //             i--
    //         } else break
    //     }
    //     while (j >= 0) {
    //         if (T[j] === '#') {
    //             skipT++
    //             j--
    //         } else if (skipT > 0) {
    //             skipT--
    //             j--
    //         } else break
    //     }

    //     if (i >= 0 && j >= 0 && S[i] !== T[j]) {
    //         return false
    //     }

    //     if (i >= 0 !== j >= 0) {
    //         return false
    //     }

    //     i--
    //     j--
    // }

    // return true

    /**
     * Stack
     * 簡單可是會消耗較多儲存空間
     */
    let s = []
    let t = []

    for (let i = 0; i < S.length; i++) {
        if (S[i] === '#') s.pop()
        else if (S[i]) s.push(S[i])
    }
    for (let i = 0; i < T.length; i++) {
        if (T[i] === '#') t.pop()
        else if (T[i]) t.push(T[i])
    }

    return s.join('') === t.join('')
}

console.log(backspaceCompare('ab#c', 'ad#c'))
console.log(backspaceCompare('ab##', 'c#d#'))
console.log(backspaceCompare('a##c', '#a#c'))
console.log(backspaceCompare('a#c', 'b'))

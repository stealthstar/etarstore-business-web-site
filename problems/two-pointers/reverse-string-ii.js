/**
 * 541. Reverse String II
 *
Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.



Example 1:

Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Example 2:

Input: s = "abcd", k = 2
Output: "bacd"


Constraints:

1 <= s.length <= 104
s consists of only lowercase English letters.
1 <= k <= 104

 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    const range = k * 2

    s = s.split('')

    const swap = function (j, _k = k) {
        for (let start = j, end = j + _k - 1; start < end; start++, end--) {
            if (start < end) {
                let tmp = s[start]
                s[start] = s[end]
                s[end] = tmp
            }
        }
    }

    const len = s.length

    for (let i = 0, j = 0; i < len; i++) {
        const index = i + 1
        if (index % range === 0) {
            swap(j, k)
            j = index
        } else if (index === len && len - j >= k && len - j < range) {
            swap(j, k)
        } else if (index === len && len - j < k) {
            swap(j, k)
        }
    }

    return s.join('')
}

console.log(reverseStr('abcdefg', 2))
console.log(reverseStr('abcd', 2))
console.log(reverseStr('abcdef', 3))
console.log(reverseStr('abcdefg', 8))

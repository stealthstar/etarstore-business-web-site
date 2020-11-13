/**
 * #String #Sort
 * 1370. Increasing Decreasing String
 *
 * Given a string s. You should re-order the string using the following algorithm:

Pick the smallest character from s and append it to the result.
Pick the smallest character from s which is greater than the last appended character to the result and append it.
Repeat step 2 until you cannot pick more characters.
Pick the largest character from s and append it to the result.
Pick the largest character from s which is smaller than the last appended character to the result and append it.
Repeat step 5 until you cannot pick more characters.
Repeat the steps from 1 to 6 until you pick all characters from s.
In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.

Return the result string after sorting s with this algorithm.



Example 1:

Input: s = "aaaabbbbcccc"
Output: "abccbaabccba"
Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
After steps 4, 5 and 6 of the first iteration, result = "abccba"
First iteration is done. Now s = "aabbcc" and we go back to step 1
After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"
Example 2:

Input: s = "rat"
Output: "art"
Explanation: The word "rat" becomes "art" after re-ordering it with the mentioned algorithm.
Example 3:

Input: s = "leetcode"
Output: "cdelotee"
Example 4:

Input: s = "ggggggg"
Output: "ggggggg"
Example 5:

Input: s = "spo"
Output: "ops"


Constraints:

1 <= s.length <= 500
s contains only lower-case English letters.

使用兩個迴圈 各別找出 `a` 到 `z` 中最小和最大的字母，並依序塞入新字串
直到 total 歸零 (s 的每個字母都找過)

 * @param {string} s
 * @return {string}
 */

// a:97 z:122
var sortString = function (s) {
    let counter = {}
    let total = s.length

    for (let i = 0; i < s.length; i++) {
        if (!counter[s[i]]) {
            counter[s[i]] = 0
        }
        counter[s[i]] += 1
    }

    let result = ''

    const checkLetter = function (i) {
        let letter = String.fromCharCode(i)
        if (counter[letter]) {
            result += letter
            total--
            counter[letter]--
        }
    }

    while (total > 0) {
        for (let i = 97; i <= 122; i++) {
            checkLetter(i)
        }
        for (let i = 122; i >= 97; i--) {
            checkLetter(i)
        }
    }

    return result
}

console.log(sortString('aaaabbbbcccc'))
console.log(sortString('rat'))
console.log(sortString('leetcode'))
console.log(sortString('ggggggg'))
console.log(sortString('spo'))

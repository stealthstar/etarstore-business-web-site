/**
 * 14. Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".



Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 1) {
        return strs[0]
    }

    let result = ''

    let index = 0
    let length = strs.length

    while (true) {
        let first = strs[0][index]
        if (!first) {
            break
        }

        let areEqual = strs.every((s) => first === s[index])

        if (areEqual) {
            result += first
        }
        if (!areEqual) {
            break
        }

        index += 1
    }

    return result
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
console.log(longestCommonPrefix(['dog', 'rdoecar', 'car']))
console.log(longestCommonPrefix(['']))
console.log(longestCommonPrefix(['', '']))

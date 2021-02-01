/**
 * 409. Longest Palindrome
 *
 * Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.



Example 1:

Input: s = "abccccdd"
Output: 7
Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Example 3:

Input: s = "bb"
Output: 2


Constraints:

1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let map = {}

    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 0
        }
        map[s[i]] += 1
    }

    let result = 0

    for (const key in map) {
        let count = map[key]

        if (count % 2 === 1) {
            count--
        }

        result += count

        if (result % 2 === 0 && map[key] % 2 === 1) {
            result++
        }
    }

    return result
}

console.log(longestPalindrome('abccccdd'))
console.log(longestPalindrome('a'))
console.log(longestPalindrome('bb'))
console.log(longestPalindrome('abcba'))
console.log(longestPalindrome('accc'))
console.log(longestPalindrome('ccc'))

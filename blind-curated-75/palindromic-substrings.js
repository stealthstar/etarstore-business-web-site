/**\
 * 647. Palindromic Substrings
Medium

5155

144

Add to List

Share
Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.



Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    // return bructforce(s)
    let n = s.length
    let result = 0
    let dp = []

    for (let i = 0; i < n; i++) {
        dp[i] = []
        for (let j = 0; j < n; j++) {
            dp[i][j] = i === j
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            if (
                i === j ||
                (s[i] === s[j] && i - j < 2) ||
                (s[i] === s[j] && dp[j + 1][i - 1])
            ) {
                dp[j][i] = true
                result += 1
            }
        }
    }

    console.log(dp)

    return result
}

function bructforce(s) {
    let result = 0

    function isPalindrom(str) {
        let l = 0
        let r = str.length - 1

        while (l < r) {
            if (str[l] !== str[r]) return false
            l++
            r--
        }
        return true
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            const str = s.substring(i, j + 1)
            if (str && isPalindrom(str)) {
                console.log(str)
                result++
            }
        }
    }

    return result
}

console.log(countSubstrings('abc'))
console.log(countSubstrings('aaa'))
console.log(countSubstrings('aabc'))

/**
 *  a
    aa
    aabaa
    a
    aba
    b
    a
    aa
    a
 */
console.log(countSubstrings('aabaa'))

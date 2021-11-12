/**
 * 242. Valid Anagram
Easy

3308

183

Add to List

Share
Given two strings s and t, return true if t is an anagram of s, and false otherwise.



Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false


Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.


Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false
    }

    let map = {}

    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) map[s[i]] = 0
        if (!map[t[i]]) map[t[i]] = 0

        map[s[i]]++
        map[t[i]]--
    }

    return !Object.keys(map).some((c) => map[c] !== 0)
}

console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('rat', 'car'))

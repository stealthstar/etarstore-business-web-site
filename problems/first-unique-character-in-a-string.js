/**
 * 387. First Unique Character in a String
 *
 * Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.


Note: You may assume the string contains only lowercase English letters.

 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    if (!s || s === '') {
        return -1
    }

    let map = {}

    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) map[s[i]] = { count: 0, idx: i }
        map[s[i]].count += 1
    }

    let result = -1

    for (const key in map) {
        if (map[key].count === 1) {
            result = map[key].idx
            break
        }
    }

    return result
}

console.log(firstUniqChar('leetcode'))
console.log(firstUniqChar('loveleetcode'))

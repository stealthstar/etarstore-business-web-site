/**
 * 242. Valid Anagram
 *
 * Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?

判斷兩個字串是否相同

解法1：
將兩字串排序後比對是否相等，缺點是排序會花較多時間

解法2：
兩者如果相等，則所有字串的出現次數應該會一樣，因此可以用一個 map 來紀錄

當 counter[ s[i] ]，原始字串有出現 counter 加 1;
當 counter[ t[i] ]，比對字串有出現 counter 減 1 做抵銷;

最終如果 map 中所有字元次數都是 0 次表示兩個字串相等

 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false
    }

    let counter = {}

    for (let i = 0; i < s.length; i++) {
        if (!counter[s[i]]) {
            counter[s[i]] = 0
        }
        if (!counter[t[i]]) {
            counter[t[i]] = 0
        }
        counter[s[i]]++
        counter[t[i]]--
    }

    return Object.keys(counter).every((key) => counter[key] === 0)
}

console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('rat', 'car'))

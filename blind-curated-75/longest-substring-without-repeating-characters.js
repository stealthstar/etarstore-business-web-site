/**
 *
 * Slinding Window
 *
 * 透過兩個指標 start, end
 * 只要符合條件就不斷擴張 end (end++)
 * 不符合條件則 start 往後移 (start++)
 * 當 end 大於陣列長度時，結束迴圈
 *
 * 如何判斷使用滑動窗口演算法
   如果題目中求的結果有以下情況時可使用滑動窗口演算法：

    最小值 Minimum value
    最大值 Maximum value
    最長值 Longest value
    最短值 Shortest value
    K值 K-sized value

    https://codingnote.cc/zh-tw/p/188376/
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let left = 0
    let right = 0
    let max = 0

    let map = {}

    while (right < s.length) {
        if (!map[s[right]]) {
            map[s[right]] = true
            max = Math.max(max, right - left + 1)
            right++
        } else {
            map[s[left]] = false
            left++
        }
    }

    return max
}

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('wpwkew'))
console.log(lengthOfLongestSubstring(''))
console.log(lengthOfLongestSubstring('dvdf'))

/*
   solution: expand around from center
   找出所有 odd, even 的迴文組合，並與先前的結果比對，如果比較長則取代
   迴文範例 aba, bdb, abba, abcba
   @param {String} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (!s || s.length < 1) return ''
    let start = 0
    let maxLen = 1

    for (let i = 0; i < s.length; i++) {
        const odd = findPalindromeFromCenter(s, i, i)
        const even = findPalindromeFromCenter(s, i, i + 1)

        const { len, left } = odd.len > even.len ? odd : even
        if (len > maxLen) {
            start = left
            maxLen = len
        }
    }

    return s.substr(start, maxLen)
}

function findPalindromeFromCenter(s, i, j) {
    let left = i
    let right = j

    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--
        right++
    }

    return {
        // 因為是當判斷到 babad 不符合才跳出 while，因此 left=0, right=4，所以要回溯 1
        len: right - left - 1,
        left: left + 1,
    }
}

console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))
console.log(longestPalindrome('a'))
console.log(longestPalindrome('ac'))

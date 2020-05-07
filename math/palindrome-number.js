/**
 * 9. Palindrome Number
 *
 * Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
 *
 * Example 1:
 *
 * Input: 121
 * Output: true
 *
 * Example 2:
 *
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 *
 * Example 3:
 *
 * Input: 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 *
 * Follow up:
 * Coud you solve it without converting the integer to a string?
 *
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const _x = String(x)

    let start = 0
    let end = _x.length - 1

    while (start < end) {
        if (_x[start] !== _x[end]) {
            return false
        }

        start += 1
        end -= 1
    }

    return true
}

console.log(isPalindrome(-121))
console.log(isPalindrome(1221))

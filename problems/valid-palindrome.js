/**
 * #Two-pointers
 * 125. Valid Palindrome
 *
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 *
 * Note: For the purpose of this problem, we define empty string as valid palindrome.
 *
 * Example 1:
 *
 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 *
 * Example 2:
 *
 * Input: "race a car"
 * Output: false
 *
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (!s || s === '') {
        return true
    }

    // remove symbol, space and to lower case
    const _s = s.replace(/[^a-z0-9]/gi, '').toLowerCase()

    let start = 0
    let end = _s.length - 1

    while (start < end) {
        if (_s[start] !== _s[end]) {
            return false
        }

        start += 1
        end -= 1
    }

    return true
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))

console.log(isPalindrome('race a car'))

console.log(isPalindrome('.,'))

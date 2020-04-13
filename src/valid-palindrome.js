/**
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

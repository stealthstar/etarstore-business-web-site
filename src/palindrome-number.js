/**
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

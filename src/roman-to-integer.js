const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let sum = 0

    let last

    for (let i = 0; i < s.length; i++) {
        const current = s[i]

        sum += romanMap[current]

        if (last === 'I' && (current === 'V' || current === 'X')) {
            sum -= 2
        } else if (last === 'X' && (current === 'L' || current === 'C')) {
            sum -= 20
        } else if (last === 'C' && (current === 'D' || current === 'M')) {
            sum -= 200
        }

        last = current
    }

    return sum
}

console.log(romanToInt('III'))
console.log(romanToInt('IV'))
console.log(romanToInt('IX'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))

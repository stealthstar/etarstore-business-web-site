/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const results = []

    const backtracking = (result, left, right) => {
        if (result.length === n * 2) {
            results.push(result)
            return
        }

        if (left > 0) {
            backtracking(result + '(', left - 1, right)
        }

        if (right > 0 && left !== right) {
            backtracking(result + ')', left, right - 1)
        }
    }

    if (n === 0) {
        return results
    }

    backtracking('', n, n)

    return results
};

console.log(generateParenthesis(5))
console.log(generateParenthesis(3))
console.log(generateParenthesis(1))
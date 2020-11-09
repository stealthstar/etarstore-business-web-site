/**
 * #String #Stack
 * 20. Valid Parentheses
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Note that an empty string is also considered valid.
 *
 * Example 1:
 *
 * Input: "()"
 * Output: true
 *
 * Example 2:
 *
 * Input: "()[]{}"
 * Output: true
 *
 * Example 3:
 *
 * Input: "(]"
 * Output: false
 *
 * Example 4:
 *
 * Input: "([)]"
 * Output: false
 *
 * Example 5:
 *
 * Input: "{[]}"
 * Output: true
 */

function Stack() {
    this.list = []
    this.length = 0

    this.push = function (value) {
        this.length++
        this.list.push(value)
    }

    this.pop = function () {
        if (this.length === 0) return

        this.length--
        return this.list.pop()
    }

    this.peek = function () {
        return this.list[this.length - 1]
    }
}

function isLeftSide(parenthese) {
    return parenthese === '(' || parenthese === '[' || parenthese === '{'
}

const bracketMap = {
    ')': '(',
    '}': '{',
    ']': '[',
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s === '') {
        return true
    }

    if (s.length === 1) {
        return false
    }

    const stack = new Stack()

    for (let i = 0; i < s.length; i++) {
        const isLeft = isLeftSide(s[i])

        if (isLeft) {
            stack.push(s[i])
        } else {
            const left = stack.pop()
            const right = s[i]

            if (left !== bracketMap[right]) {
                return false
            }
        }
    }

    return stack.length === 0
}

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))
console.log(isValid('([)]'))
console.log(isValid('{[]}'))
console.log(isValid('['))
console.log(isValid('(('))

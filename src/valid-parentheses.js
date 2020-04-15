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

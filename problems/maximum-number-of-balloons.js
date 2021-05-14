/**
 * 1189. Maximum Number of Balloons
 * Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.



Example 1:



Input: text = "nlaebolko"
Output: 1
Example 2:



Input: text = "loonbalxballpoon"
Output: 2
Example 3:

Input: text = "leetcode"
Output: 0


Constraints:

1 <= text.length <= 104
text consists of lower case English letters only.
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    let map = { a: 0, b: 0, l: 0, o: 0, n: 0 }

    for (let i = 0; i < text.length; i++) {
        if (map[text[i]] >= 0) {
            map[text[i]] += 1
        }
    }

    const max = Math.max(...Object.keys(map).map((key) => map[key]))

    let count = 0
    for (let i = max; i >= 0; i--) {
        const { a, b, l, n, o } = map

        if (a === 0 || b === 0 || l < 2 || n === 0 || o < 2) {
            break
        }

        count += 1
        map = {
            a: map.a - 1,
            b: map.b - 1,
            l: map.l - 2,
            n: map.n - 1,
            o: map.o - 2,
        }
    }

    return count
}

console.log(maxNumberOfBalloons('nlaebolko'))
console.log(maxNumberOfBalloons('loonbalxballpoon'))
console.log(maxNumberOfBalloons('ballon'))
console.log(maxNumberOfBalloons('balloon'))
console.log(maxNumberOfBalloons('balllllllllllloooooooooon'))
console.log(maxNumberOfBalloons('balon'))

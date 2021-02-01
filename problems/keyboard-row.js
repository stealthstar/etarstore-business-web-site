/**
 * 500. Keyboard Row
 *
 * Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".

Example 1:

Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]
Example 2:

Input: words = ["omk"]
Output: []
Example 3:

Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]


Constraints:

1 <= words.length <= 20
1 <= words[i].length <= 100
words[i] consists of English letters (both lowercase and uppercase).
 * @param {string[]} words
 * @return {string[]}
 */

let map = {}
let keyboardRows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']

for (let i = 0; i < keyboardRows.length; i++) {
    for (let j = 0; j < keyboardRows[i].length; j++) {
        map[keyboardRows[i][j].toUpperCase()] = i
        map[keyboardRows[i][j].toLowerCase()] = i
    }
}

var findWords = function (words) {
    let result = []

    for (let i = 0; i < words.length; i++) {
        let prevRow = -1
        let isAnswer = true

        for (let j = 0; j < words[i].length; j++) {
            let row = map[words[i][j]]

            if (prevRow === -1) {
                prevRow = row
            }

            if (prevRow !== -1 && prevRow !== row) {
                isAnswer = false
                break
            }

            prevRow = row
        }

        if (isAnswer) {
            result.push(words[i])
        }
    }

    return result
}

console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace']))
console.log(findWords(['omk']))
console.log(findWords(['adsdf', 'sfd']))
console.log(findWords(['abdfs', 'cccd', 'a', 'qwwewm']))
console.log(findWords(['qwwewm']))

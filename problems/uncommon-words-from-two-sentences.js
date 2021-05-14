/**
 *
 * 884. Uncommon Words from Two Sentences
 *
We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words.

You may return the list in any order.



Example 1:

Input: A = "this apple is sweet", B = "this apple is sour"
Output: ["sweet","sour"]
Example 2:

Input: A = "apple apple", B = "banana"
Output: ["banana"]


Note:

0 <= A.length <= 200
0 <= B.length <= 200
A and B both contain only spaces and lowercase letters.

 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
    let map = {}

    function getWords(str) {
        str.split(' ').forEach((word) => {
            if (!map[word]) {
                map[word] = 0
            }
            map[word] += 1
        })
    }

    getWords(A)
    getWords(B)

    return Object.keys(map).reduce((result, key) => {
        if (map[key] === 1) {
            result.push(key)
        }

        return result
    }, [])
}

console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour'))
console.log(uncommonFromSentences('apple apple', 'banana'))

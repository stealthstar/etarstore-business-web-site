/**
 * 1160. Find Words That Can Be Formed by Characters
 * You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.



Example 1:

Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation:
The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
Example 2:

Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation:
The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.


Note:

1 <= words.length <= 1000
1 <= words[i].length, chars.length <= 100
All strings contain lowercase English letters only.

 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    let map = {}
    for (let i = 0; i < chars.length; i++) {
        if (!map[chars[i]]) {
            map[chars[i]] = 0
        }
        map[chars[i]] += 1
    }

    let sum = 0

    for (let i = 0; i < words.length; i++) {
        let word = {}
        let isMatch = true

        for (let j = 0; j < words[i].length; j++) {
            if (!map[words[i][j]]) {
                isMatch = false
                break
            }

            if (!word[words[i][j]]) {
                word[words[i][j]] = 0
            }
            word[words[i][j]] += 1

            if (word[words[i][j]] > map[words[i][j]]) {
                isMatch = false
                break
            }
        }

        if (isMatch) {
            sum += words[i].length
        }
    }

    return sum
}

console.log(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach'))
console.log(countCharacters(['hello', 'world', 'leetcode'], 'welldonehoneyr'))
console.log(
    countCharacters(
        [
            'dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin',
            'ndqeyhhcquplmznwslewjzuyfgklssvkqxmqjpwhrshycmvrb',
            'ulrrbpspyudncdlbkxkrqpivfftrggemkpyjl',
            'boygirdlggnh',
            'xmqohbyqwagkjzpyawsydmdaattthmuvjbzwpyopyafphx',
            'nulvimegcsiwvhwuiyednoxpugfeimnnyeoczuzxgxbqjvegcxeqnjbwnbvowastqhojepisusvsidhqmszbrnynkyop',
            'hiefuovybkpgzygprmndrkyspoiyapdwkxebgsmodhzpx',
            'juldqdzeskpffaoqcyyxiqqowsalqumddcufhouhrskozhlmobiwzxnhdkidr',
            'lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo',
            'oxgaskztzroxuntiwlfyufddl',
            'tfspedteabxatkaypitjfkhkkigdwdkctqbczcugripkgcyfezpuklfqfcsccboarbfbjfrkxp',
            'qnagrpfzlyrouolqquytwnwnsqnmuzphne',
            'eeilfdaookieawrrbvtnqfzcricvhpiv',
            'sisvsjzyrbdsjcwwygdnxcjhzhsxhpceqz',
            'yhouqhjevqxtecomahbwoptzlkyvjexhzcbccusbjjdgcfzlkoqwiwue',
            'hwxxighzvceaplsycajkhynkhzkwkouszwaiuzqcleyflqrxgjsvlegvupzqijbornbfwpefhxekgpuvgiyeudhncv',
            'cpwcjwgbcquirnsazumgjjcltitmeyfaudbnbqhflvecjsupjmgwfbjo',
            'teyygdmmyadppuopvqdodaczob',
            'qaeowuwqsqffvibrtxnjnzvzuuonrkwpysyxvkijemmpdmtnqxwekbpfzs',
            'qqxpxpmemkldghbmbyxpkwgkaykaerhmwwjonrhcsubchs',
        ],
        'usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp'
    )
)

/**
 * 720. Longest Word in Dictionary
 *
 * Given an array of strings words representing an English Dictionary, return the longest word in words that can be built one character at a time by other words in words.

If there is more than one possible answer, return the longest word with the smallest lexicographical order. If there is no answer, return the empty string.



Example 1:

Input: words = ["w","wo","wor","worl","world"]
Output: "world"
Explanation: The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
Example 2:

Input: words = ["a","banana","app","appl","ap","apply","apple"]
Output: "apple"
Explanation: Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".


Constraints:

// 1 <= words.length <= 1000
1 <= words[i].length <= 30
words[i] consists of lowercase English letters.

Reference:
https://segmentfault.com/a/1190000020386414?utm_source=sf-similar-article
https://zxi.mytechroad.com/blog/string/leetcode-720-longest-word-in-dictionary/

 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
    const map = new Trie()

    for (let i = 0; i < words.length; i++) {
        map.insert(words[i])
    }

    let result = ''
    for (let i = 0; i < words.length; i++) {
        if (
            words[i].length < result.length ||
            (words[i].length === result.length && words[i] > result)
        ) {
            continue
        }
        if (map.startsWith(words[i])) {
            result = words[i]
        }
    }

    return result
}

class TreeNode {
    constructor(val) {
        this.val = val
        this.isWord = false
        this.children = {}
    }
}

class Trie {
    _root

    constructor() {
        this._root = new TreeNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let current = this._root
        for (let i = 0; i < word.length; i++) {
            if (!current.children[word[i]]) {
                current.children[word[i]] = new TreeNode(word[i])
            }
            current = current.children[word[i]]
        }
        current.isWord = true
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let current = this._root
        for (let i = 0; i < prefix.length; i++) {
            if (!current.children[prefix[i]]) return false
            current = current.children[prefix[i]]
            if (!current.isWord) return false
        }

        return true
    }
}

console.log(longestWord(['w', 'wo', 'wor', 'worl', 'world']))
console.log(longestWord(['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple']))


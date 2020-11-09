/**
 * #Two-pointers
 * 344. Reverse String
 *
 * Write a function that reverses a string. The input string is given as an array of characters char[].
 *
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 *
 * You may assume all the characters consist of printable ascii characters.
 *
 * Example 1:
 *
 *   Input: ["h","e","l","l","o"]
 *   Output: ["o","l","l","e","h"]
 *
 * Example 2:
 *
 *   Input: ["H","a","n","n","a","h"]
 *   Output: ["h","a","n","n","a","H"]
 *
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        tmp = s[i]
        s[i] = s[j]
        s[j] = tmp
    }
}

reverseString(['h', 'e', 'l', 'l', 'o'])
reverseString(['H', 'a', 'n', 'n', 'a', 'h'])

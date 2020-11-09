/**
 * #Two-pointers
 * 443. String Compression
 *
 * Given an array of characters, compress it in-place.
 *
 * The length after compression must always be smaller than or equal to the original array.
 *
 * Every element of the array should be a character (not int) of length 1.
 *
 * After you are done modifying the input array in-place, return the new length of the array.
 *
 * Follow up:
 *   Could you solve it using only O(1) extra space?
 *
 * Example 1:
 *
 *   Input:
 *   ["a","a","b","b","c","c","c"]
 *
 *   Output:
 *   Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
 *
 *   Explanation:
 *   "aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".
 *
 *  Example 2:
 *
 *   Input:
 *   ["a"]
 *
 *   Output:
 *   Return 1, and the first 1 characters of the input array should be: ["a"]
 *
 *   Explanation:
 *   Nothing is replaced.
 *
 *   Example 3:
 *
 *   Input:
 *   ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
 *
 *   Output:
 *   Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
 *
 *   Explanation:
 *   Since the character "a" does not repeat, it is not compressed. "bbbbbbbbbbbb" is replaced by "b12".
 *   Notice each digit has it's own entry in the array.
 *
 * Note:
 *   All characters have an ASCII value in [35, 126].
 *   1 <= len(chars) <= 1000.
 *
 * Two pointer.
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    if (chars.length === 1) {
        return 1
    }

    let count = 0
    // slow pointer
    let j = 0

    // i is fast pointer
    for (let i = 0; i <= chars.length; i++) {
        if (chars[i] === chars[j]) {
            count += 1
        }

        if (chars[i] !== chars[j]) {
            const _count = `${count}`
            const next = chars[i]

            if (count > 1) {
                for (let k = 0; k < _count.length; k++) {
                    chars[++j] = _count[k]
                }
            }

            if (i < chars.length) {
                chars[++j] = next
            }

            count = 1
        }
    }

    return j + 1
}

// 6 a,2,b,2,c,3
compress(['a', 'a', 'b', 'b', 'c', 'c', 'c'])

// 1
compress(['a'])
// 4, a,b,1,2

compress(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'])

compress(['a', 'a', 'a', 'b', 'b', 'a', 'a'])
compress(['a', 'b', 'c'])
compress(['a', 'b', 'b', 'c'])
compress([
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'c',
    'c',
    'c',
    'c',
    'c',
    'c',
    'c',
    'c',
    'c',
    'c',
    'c',
    'c',
    'c',
    'c',
])

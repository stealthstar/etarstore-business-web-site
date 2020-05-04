/**
 * Given an array of characters, compress it in-place.
 * The length after compression must always be smaller than or equal to the original array.
 * Every element of the array should be a character (not int) of length 1.
 * After you are done modifying the input array in-place, return the new length of the array.
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    if (chars.length === 1) {
        return 1
    }

    let count = 0
    let j = 0

    for (let i = 0; i <= chars.length; i++) {
        if (chars[i] === chars[j]) {
            count += 1
        }

        if (chars[i] !== chars[j]) {
            const _count = `${count}`
            const current = chars[i]

            if (count > 1) {
                for (let k = 0; k < _count.length; k++) {
                    chars[++j] = _count[k]
                }
            }

            if (i < chars.length) {
                chars[++j] = current
            }

            count = 1
        }
    }

    console.log(chars)

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

/**
 * #Two-pointers
 * 345. Reverse Vowels of a String
 *
 * Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:

Input: "hello"
Output: "holle"
Example 2:

Input: "leetcode"
Output: "leotcede"
Note:
The vowels does not include the letter "y".

雙指針

用兩個指針分別指向開頭和尾巴

當 s[i] 和 s[j] 皆為母音時，兩者交換並且 i++, j-- 繼續內縮查找
當 s[i] 不為母音時， i++ 往後找
當 s[j] 不為母音時， j-- 往前找

 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let i = 0
    let j = s.length - 1
    let arr = s.split('')

    let isVowel = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true,
        A: true,
        E: true,
        I: true,
        O: true,
        U: true,
    }

    for (i, j; i < j; ) {
        if (!isVowel[arr[i]]) i++
        if (!isVowel[arr[j]]) j--

        if (isVowel[arr[i]] && isVowel[arr[j]]) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp

            i++
            j--
        }
    }

    return arr.join('')
}

console.log(reverseVowels('hello'))
console.log(reverseVowels('leetcode'))

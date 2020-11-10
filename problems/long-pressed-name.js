/**
 * #Two-pointers #String
 * 925. Long Pressed Name
 *
 * Your friend is typing his name into a keyboard.  Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

You examine the typed characters of the keyboard.  Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.



Example 1:

Input: name = "alex", typed = "aaleex"
Output: true
Explanation: 'a' and 'e' in 'alex' were long pressed.
Example 2:

Input: name = "saeed", typed = "ssaaedd"
Output: false
Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.
Example 3:

Input: name = "leelee", typed = "lleeelee"
Output: true
Example 4:

Input: name = "laiden", typed = "laiden"
Output: true
Explanation: It's not necessary to long press any character.


Constraints:

1 <= name.length <= 1000
1 <= typed.length <= 1000
The characters of name and typed are lowercase letters.

題意：
typed 的有些字可能會因為按鍵問題導致輸入多次，例如 aalllllex，我們要確認 typed 的字串是否和 name 字串一樣

解題方式：

使用雙指針

使用 i, j 兩指針，從零開始

可以先判斷 name[i] !== typed[j]，如果true表示兩字串不相等

接著就以 name[i] 和 typed[j] 當前的字元，找出直到出現不同字元時，總共出現多少相同字元的數目

如果 typedCount < namedCount，表示兩字串不符
如果 typedCount === namedCount，表示相符
如果 typedCount > namedCount，表示有 long pressed

最後判斷 i === name.length 如果有順利走完 name 字串，表示兩字串相等

 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    let i = 0
    let j = 0

    while (j < typed.length) {
        if (name[i] !== typed[j]) {
            return false
        }

        let nameTarget = name[i]
        let nameCount = 0

        while (name[i] === nameTarget) {
            nameCount++
            i++
        }

        let typedTarget = typed[j]
        let typedCount = 0

        while (typed[j] === typedTarget) {
            typedCount++
            j++
        }

        if (typedCount < nameCount) {
            return false
        }
    }

    return i === name.length
}
console.log(isLongPressedName('alex', 'aaleex'))
console.log(isLongPressedName('saeed', 'ssaaedd'))
console.log(isLongPressedName('leelee', 'lleeelee'))
console.log(isLongPressedName('laiden', 'laiden'))
console.log(isLongPressedName('xnhtq', 'xhhttqq'))
console.log(isLongPressedName('pyplrz', 'ppyypllr'))

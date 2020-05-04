// /**
//  * @param {number} n
//  * @return {string}
//  */
// var countAndSay = function (n) {
//     if (n === 1) {
//         return '1'
//     }

//     let result = '1'

//     const getAnswer = function (s, current) {
//         if (current + 1 === n) {
//             return
//         }

//         let count = 1
//         let last = s[0]
//         let next = ''

//         for (let i = 1; i <= s.length; i++) {
//             if (s[i] === last) {
//                 count += 1
//             } else {
//                 next += `${count}${last}`

//                 last = s[i]
//                 count = 1
//             }
//         }

//         result = next

//         getAnswer(result, current + 1)
//     }

//     getAnswer(result, 0)

//     return result
// }

/**
 * 上面和這個解法都可以，概念一樣不過下面比較簡潔
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) {
        return '1'
    }

    // 利用題目的函式做遞迴，要求 n，就是先找出 countAndSay(n - 1) 的解
    const prev = countAndSay(n - 1)

    let count = 1
    let last = prev[0]
    let next = ''

    for (let i = 1; i <= prev.length; i++) {
        if (prev[i] === last) {
            count += 1
        } else {
            next += `${count}${last}`

            last = prev[i]
            count = 1
        }
    }

    return next
}

console.log(countAndSay(8))
console.log(countAndSay(9))
console.log(countAndSay(10))

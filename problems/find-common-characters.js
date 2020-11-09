/**
 * 1002. Find Common Characters
 *
 * Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.



Example 1:

Input: ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: ["cool","lock","cook"]
Output: ["c","o"]

Note:

1 <= A.length <= 100
1 <= A[i].length <= 100
A[i][j] is a lowercase letter

找出兩個陣列中，重複出現的字元並輸出

* 使用 map 紀錄 A陣列 第一個字串A[0] 所有字元出現的次數
* 逐一判斷後面每個字串陣列是否有出現在第一個字元，並儲存在 tmp
* 每跑完一個字串，要逐一找出每個字出現的最小次數，如果沒有出現則要把 map 字元次數歸零

#Hash-Table #Array

* @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
    let map = {}

    for (let i = 0; i < A[0].length; i++) {
        if (!map[A[0][i]]) {
            map[A[0][i]] = 0
        }
        map[A[0][i]] += 1
    }

    let keys = Object.keys(map)

    for (let i = 1; i < A.length; i++) {
        let tmp = {}
        for (let j = 0; j < A[i].length; j++) {
            if (!map[A[i][j]]) {
                continue
            }

            if (!tmp[A[i][j]]) {
                tmp[A[i][j]] = 0
            }
            tmp[A[i][j]] += 1
        }

        keys.forEach((key) => {
            map[key] = Math.min(tmp[key] || 0, map[key])
        })
    }

    let result = []

    keys.forEach((key) => {
        for (let i = 0; i < map[key]; i++) {
            result.push(key)
        }
    })

    return result
}

console.log(
    commonChars([
        'bbddabab',
        'cbcddbdd',
        'bbcadcab',
        'dabcacad',
        'cddcacbc',
        'ccbdbcba',
        'cbddaccc',
        'accdcdbb',
    ])
)
console.log(commonChars(['bella', 'label', 'roller']))
console.log(commonChars(['cool', 'lock', 'cook']))
console.log(
    commonChars([
        'acabcddd',
        'bcbdbcbd',
        'baddbadb',
        'cbdddcac',
        'aacbcccd',
        'ccccddda',
        'cababaab',
        'addcaccd',
    ])
)

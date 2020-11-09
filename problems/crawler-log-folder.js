/**
 * 1598. Crawler Log Folder
 *
 * The Leetcode file system keeps a log each time some user performs a change folder operation.

The operations are described below:

"../" : Move to the parent folder of the current folder. (If you are already in the main folder, remain in the same folder).
"./" : Remain in the same folder.
"x/" : Move to the child folder named x (This folder is guaranteed to always exist).
You are given a list of strings logs where logs[i] is the operation performed by the user at the ith step.

The file system starts in the main folder, then the operations in logs are performed.

Return the minimum number of operations needed to go back to the main folder after the change folder operations.



Example 1:



Input: logs = ["d1/","d2/","../","d21/","./"]
Output: 2
Explanation: Use this change folder operation "../" 2 times and go back to the main folder.
Example 2:



Input: logs = ["d1/","d2/","./","d3/","../","d31/"]
Output: 3
Example 3:

Input: logs = ["d1/","../","../","../"]
Output: 0


Constraints:

1 <= logs.length <= 103
2 <= logs[i].length <= 10
logs[i] contains lowercase English letters, digits, '.', and '/'.
logs[i] follows the format described in the statement.
Folder names consist of lowercase English letters and digits.

非常簡單

計算最終的資料夾結構會是第幾層

遇到 ../ 表示回到上一層，層數減1
遇到 ./ 表示在同一層
遇到 xx/ 表示要進到下一層，層數加1

 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
    let result = 0

    for (let i = 0; i < logs.length; i++) {
        if (logs[i] === '../') {
            if (result > 0) {
                result -= 1
            }
        } else if (logs[i] !== './') {
            result += 1
        }
    }

    return result
}

class Stack {
    constructor() {
        this.list = []
        this.length = 0
    }

    push(value) {
        this.length++
        this.list.push(value)
    }

    pop() {
        if (this.length === 0) {
            return
        }

        this.length--
        this.list.pop()
    }
}

console.log(minOperations(['d1/', 'd2/', '../', 'd21/', './']))
console.log(minOperations(['d1/', 'd2/', './', 'd3/', '../', 'd31/']))
console.log(minOperations(['d1/', '../', '../', '../']))
console.log(minOperations(['./', '../', './']))

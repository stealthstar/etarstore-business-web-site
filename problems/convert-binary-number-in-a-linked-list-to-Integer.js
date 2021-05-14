/**
 * 1290. Convert Binary Number in a Linked List to Integer
 *
 * Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.



Example 1:


Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10
Example 2:

Input: head = [0]
Output: 0
Example 3:

Input: head = [1]
Output: 1
Example 4:

Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
Output: 18880
Example 5:

Input: head = [0,0]
Output: 0


Constraints:

The Linked List is not empty.
Number of nodes will not exceed 30.
Each node's value is either 0 or 1.
*/

const { print } = require('../utils')

/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    let str = ''

    while (head) {
        str += String(head.val)
        head = head.next
    }

    let result = 0
    for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
        result += Math.pow(2, j) * str[i]
    }

    return result
}

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

console.log(
    getDecimalValue(
        new ListNode(
            1,
            new ListNode(
                0,
                new ListNode(
                    0,
                    new ListNode(
                        1,
                        new ListNode(
                            0,
                            new ListNode(
                                0,
                                new ListNode(
                                    1,
                                    new ListNode(
                                        1,
                                        new ListNode(
                                            1,
                                            new ListNode(
                                                0,
                                                new ListNode(
                                                    0,
                                                    new ListNode(
                                                        0,
                                                        new ListNode(
                                                            0,
                                                            new ListNode(
                                                                0,
                                                                new ListNode(0)
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    )
)

console.log(
    getDecimalValue(
        new ListNode(
            1,
            new ListNode(
                1,
                new ListNode(
                    1,
                    new ListNode(
                        1,
                        new ListNode(
                            1,
                            new ListNode(
                                0,
                                new ListNode(
                                    1,
                                    new ListNode(
                                        0,
                                        new ListNode(
                                            0,
                                            new ListNode(
                                                1,
                                                new ListNode(
                                                    1,
                                                    new ListNode(
                                                        1,
                                                        new ListNode(
                                                            0,
                                                            new ListNode(
                                                                1,
                                                                new ListNode(
                                                                    1,
                                                                    new ListNode(
                                                                        1,
                                                                        new ListNode(
                                                                            0,
                                                                            new ListNode(
                                                                                1,
                                                                                new ListNode(
                                                                                    0
                                                                                )
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    )
)

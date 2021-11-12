const { print } = require('../../utils')
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if (!head || !head.next) {
        return null
    }

    let fast = head

    for (let i = 0; i < n; i++) {
        fast = fast.next
    }

    if (!fast) {
        return head.next
    }

    let node = head
    let slow = node

    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }

    slow.next = slow.next.next
    // print(node)

    return node
}

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

removeNthFromEnd(
    new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    ),
    2
)

removeNthFromEnd(new ListNode(1), 1)

removeNthFromEnd(new ListNode(1, new ListNode(2)), 1)

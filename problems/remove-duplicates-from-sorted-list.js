const { print } = require('../utils')
/**
 * #Linked-list
 * 83. Remove Duplicates from Sorted List
 *
 * Given a sorted linked list, delete all duplicates such that each element appear only once.
 *
 * Example 1:
 *
 *   Input: 1->1->2
 *   Output: 1->2
 *
 * Example 2:
 *
 *   Input: 1->1->2->3->3
 *   Output: 1->2->3
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head) {
        return head
    }

    let current = head
    while (head && head.next) {
        if (head.next.val === head.val) {
            head.next = head.next.next
        } else {
            head = head.next
        }
    }

    return current
}

const n1 = new ListNode(1)
const n2 = new ListNode(2)
const n3 = new ListNode(3)
const n4 = new ListNode(4)

n1.next = n2
n2.next = n3
n3.next = n4

// print(n1)

// return

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2))))

deleteDuplicates(
    new ListNode(
        1,
        new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))
    )
)

deleteDuplicates(
    new ListNode(
        1,
        new ListNode(
            1,
            new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(6))))
        )
    )
)

deleteDuplicates(
    new ListNode(
        1,
        new ListNode(
            1,
            new ListNode(
                2,
                new ListNode(
                    3,
                    new ListNode(
                        3,
                        new ListNode(6, new ListNode(6, new ListNode(8)))
                    )
                )
            )
        )
    )
)

/**
 * 876. Middle of the Linked List
 *
 * Given a non-empty, singly linked list with head node head, return a middle node of linked list.
 *
 * If there are two middle nodes, return the second middle node.
 *
 * Example 1:
 *
 *   Input: [1,2,3,4,5]
 *   Output: Node 3 from this list (Serialization: [3,4,5])
 *   The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
 *   Note that we returned a ListNode object ans, such that:
 *   ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
 *
 * Example 2:
 *
 *   Input: [1,2,3,4,5,6]
 *   Output: Node 4 from this list (Serialization: [4,5,6])
 *   Since the list has two middle nodes with values 3 and 4, we return the second one.
 *
 * Note:
 *   * The number of nodes in the given list will be between 1 and 100.
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    if (!head.next) {
        return head
    }

    let slow = head
    let fast = head
    let length = 1

    while (fast) {
        fast = fast.next
        length += 1

        if (length % 2) {
            slow = slow.next
        }
    }

    return slow
}

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

const a = new ListNode(1)
const b = new ListNode(2)
const c = new ListNode(3)
const d = new ListNode(4)
const e = new ListNode(5)
const f = new ListNode(6)

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f

console.log(middleNode(a))
/**
 * #Two-pointers #Linked-list
 * 141. Linked List Cycle
 *
 * Given a linked list, determine if it has a cycle in it.
 *
 * To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.
 *
 * Example 1:
 *
 *   Input: head = [3,2,0,-4], pos = 1
 *   Output: true
 *   Explanation: There is a cycle in the linked list, where tail connects to the second node.
 *
 * Example 2:
 *
 *   Input: head = [1,2], pos = 0
 *   Output: true
 *   Explanation: There is a cycle in the linked list, where tail connects to the first node.
 *
 * Example 3:
 *
 *   Input: head = [1], pos = -1
 *   Output: false
 *   Explanation: There is no cycle in the linked list.
 *
 * Follow up:
 *   Can you solve it using O(1) (i.e. constant) memory?
 *
 * 設定快慢指針，快指針一次走兩步、慢指針一次走一步，
 * 如果有迴圈，慢指針會慢慢追上快指針，兩者會相遇 fast === slow return true，
 * 如果沒有迴圈，快指針會先走完然後 `return false` 跳出迴圈。
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head || !head.next) {
        return false
    }

    let hasCycle = true

    let slow = head
    let fast = head.next

    while (true) {
        if (!slow || !fast) {
            return false
        }

        if (slow === fast) {
            return true
        }

        if (slow) {
            slow = slow.next
        }

        if (fast) {
            fast = fast.next

            if (fast) {
                fast = fast.next
            }
        }
    }

    return false
}

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val
    this.next = null
}

const a = new ListNode(3)
const b = new ListNode(2)
const c = new ListNode(0)
const d = new ListNode(-4)

a.next = b
b.next = c
c.next = d
d.next = b

console.log(hasCycle(a))

const g = new ListNode(1)
g.next = new ListNode(2)

console.log(hasCycle(g))

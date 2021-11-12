/*
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
 #Linked-list
Example 1:


Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
Example 2:

Input: head = [], val = 1
Output: []
Example 3:

Input: head = [7,7,7,7], val = 7
Output: []


Constraints:

The number of nodes in the list is in the range [0, 104].
1 <= Node.val <= 50
0 <= k <= 50

 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const { print } = require('../../utils')

var removeElements = function (head, val) {
    if (!head) {
        return head
    }

    let result = new ListNode(0)
    let current = result

    while (head) {
        if (head.val !== val) {
            // 設定當前節點
            // 隨著 current 不斷插入新節點，result 會跟著變化
            current.next = new ListNode(head.val)
            // 指向下一個節點.
            current = current.next
        }
        head = head.next
    }

    print(result.next)
    return result.next
}

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

const head1 = new ListNode(
    1,
    new ListNode(
        2,
        new ListNode(
            6,
            new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
        )
    )
)
removeElements(head1, 6)

const head2 = new ListNode()
// removeElements(head2, 1)

const head3 = new ListNode(7, new ListNode(7, new ListNode(7, new ListNode(7))))
// removeElements(head3, 7)

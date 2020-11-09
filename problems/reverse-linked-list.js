/**
 * #Linked-list
 * 206. Reverse Linked List
 *
 * Reverse a singly linked list.
 *
 * Example:
 *
 *   Input: 1->2->3->4->5->NULL
 *   Output: 5->4->3->2->1->NULL
 *
 * Follow up:
 *   A linked list can be reversed either iteratively or recursively. Could you implement both?
 */

const { print } = require('../utils')

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val
    this.next = null
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head || !head.next) {
        return head
    }

    let result = new ListNode(head.val)
    let current = head

    while (current && current.next) {
        const temp = new ListNode(current.next.val)
        temp.next = result

        print(temp)

        result = temp
        current = current.next
    }

    return result
}

const node = new ListNode(1)
const node1 = new ListNode(2)
const node2 = new ListNode(3)
const node3 = new ListNode(4)
const node4 = new ListNode(5)

node.next = node1
node1.next = node2
node2.next = node3
node3.next = node4

let result = reverseList(node)

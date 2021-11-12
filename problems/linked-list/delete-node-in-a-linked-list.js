/**
 * 237. Delete Node in a Linked List
 * #Linked-list
 * Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

It is guaranteed that the node to be deleted is not a tail node in the list.



Example 1:


Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
Example 2:


Input: head = [4,5,1,9], node = 1
Output: [4,5,9]
Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.
Example 3:

Input: head = [1,2,3,4], node = 3
Output: [1,2,4]
Example 4:

Input: head = [0,1], node = 0
Output: [1]
Example 5:

Input: head = [-3,5,-99], node = -3
Output: [5,-99]


Constraints:

The number of the nodes in the given list is in the range [2, 1000].
-1000 <= Node.val <= 1000
The value of each node in the list is unique.
The node to be deleted is in the list and is not a tail node

 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

const { print } = require('../../utils')

var deleteNode = function (node) {
    node.val = node.next.val
    node.next = node.next.next
}

function ListNode(val) {
    this.val = val
    this.next = null
}

// 這題用不到這些測資，單純刪除當前節點而已
const list1 = new ListNode(4, new ListNode(5, new ListNode(1, new ListNode(9))))
deleteNode(list1)

const list2 = new ListNode(4, new ListNode(5, new ListNode(1, new ListNode(9))))
deleteNode(list2)

const list3 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
deleteNode(list3)

const list4 = new ListNode(0, new ListNode(1))
deleteNode(list4)

const list5 = new ListNode(-3, new ListNode(5, new ListNode(-99)))
deleteNode(list5)

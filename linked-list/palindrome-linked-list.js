/**
 * 234. Palindrome Linked List
 * Given a singly linked list, determine if it is a palindrome.
 *
 * Example 1:
 *
 * Input: 1->2
 * Output: false
 * Example 2:

 * Input: 1->2->2->1
 * Output: true
 * Follow up:
 * Could you do it in O(n) time and O(1) space?
 */

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
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (!head) {
        return true
    }

    let numbers = []

    while (head) {
        numbers.push(head.val)
        head = head.next
    }

    let start = 0
    let end = numbers.length - 1

    while (start < end) {
        if (numbers[start] !== numbers[end]) {
            return false
        }

        start += 1
        end -= 1
    }

    return true
}

const node = new ListNode(1)
node.next = new ListNode(2)

console.log(isPalindrome(node))

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(2)
const node4 = new ListNode(1)
node1.next = node2
node2.next = node3
node3.next = node4

console.log(isPalindrome(node1))

const node5 = new ListNode(-129)
node5.next = new ListNode(-129)

console.log(isPalindrome(node5))

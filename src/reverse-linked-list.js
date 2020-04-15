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

const print = (result) => {
    let r = []

    while (result) {
        r.push(result.val)

        result = result.next
    }

    console.log(r.join(','))
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

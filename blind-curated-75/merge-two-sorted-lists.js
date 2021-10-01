/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 && !l2) {
        return l1
    }
    if (!l1 && l2) {
        return l2
    }

    let result = new ListNode(0)
    let current = result

    const addNode = function (val) {
        current.next = new ListNode(val)
        current = current.next
    }

    while (l1 || l2) {
        if (l1 && !l2) {
            addNode(l1.val)
            l1 = l1.next
        } else if (!l1 && l2) {
            addNode(l2.val)
            l2 = l2.next
        } else if (l1.val <= l2.val) {
            addNode(l1.val)
            l1 = l1.next
        } else if (l1.val > l2.val) {
            addNode(l2.val)
            l2 = l2.next
        }
    }

    return result.next
}

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

const print = function (node) {
    let str = ''
    while (node) {
        str += node.val + ' -> '
        node = node.next
    }

    console.log(str)
}

const node = new ListNode(1)
const node1 = new ListNode(2)
const node2 = new ListNode(4)

node.next = node1
node1.next = node2

const node10 = new ListNode(1)
const node11 = new ListNode(3)
const node12 = new ListNode(4)
const node13 = new ListNode(5)

node10.next = node11
node11.next = node12
node12.next = node13

print(mergeTwoLists(node, node10))
print(mergeTwoLists(new ListNode(2), new ListNode(1)))

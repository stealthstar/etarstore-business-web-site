/**
 * #Linked-list
 * 21. Merge Two Sorted Lists
 * Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
 *
 * Example:

 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 && !l2) {
        return l1
    }

    if (l2 && !l1) {
        return l2
    }

    let head = new ListNode(0)
    let last = head

    // last 會保留最新節點，last.next 會將先前結果的 next 指向 nextNode
    function pushBack(val) {
        const nextNode = new ListNode(val)
        last.next = nextNode
        last = nextNode
    }

    while (l1 || l2) {
        if (l1 && !l2) {
            pushBack(l1.val)
            l1 = l1.next
        } else if (!l1 && l2) {
            pushBack(l2.val)
            l2 = l2.next
        } else if (l1.val <= l2.val) {
            pushBack(l1.val)
            l1 = l1.next
        } else if (l1.val > l2.val) {
            pushBack(l2.val)
            l2 = l2.next
        }
    }

    return head.next
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

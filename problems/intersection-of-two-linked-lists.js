/**
 * 160. Intersection of Two Linked Lists
 *
 * Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

For example, the following two linked lists begin to intersect at node c1:


It is guaranteed that there are no cycles anywhere in the entire linked structure.

Note that the linked lists must retain their original structure after the function returns.



Example 1:


Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'
Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
Example 2:


Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Intersected at '2'
Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.
Example 3:


Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: No intersection
Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
Explanation: The two lists do not intersect, so return null.

Constraints:

The number of nodes of listA is in the m.
The number of nodes of listB is in the n.
0 <= m, n <= 3 * 104
1 <= Node.val <= 105
0 <= skipA <= m
0 <= skipB <= n
intersectVal is 0 if listA and listB do not intersect.
intersectVal == listA[skipA + 1] == listB[skipB + 1] if listA and listB intersect.

Follow up: Could you write a solution that runs in O(n) time and use only O(1) memory?
*/

const { print } = require('../utils')

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    // 凡人版
    // 遍歷 headA 並用 set 儲存所有 node，在遍歷 headB 看看有沒有相同的 node
    // const map = new Set()

    // let a = headA
    // while (a) {
    //     map.add(a)
    //     a = a.next
    // }

    // let b = headB
    // while (b) {
    //     if (map.has(b)) {
    //         return b
    //     }

    //     b = b.next
    // }

    // return null

    /**
     * 2. 雙指針解法
     */
    let a = headA
    let b = headB

    while (a !== b) {
        a = a ? a.next : headB
        b = b ? b.next : headA
    }

    return a
}

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val
    this.next = null
}

const a = new ListNode(4)
const b = new ListNode(1)
const c = new ListNode(8)
const d = new ListNode(4)
const e = new ListNode(5)

a.next = b
b.next = c
c.next = d
d.next = e

const f = new ListNode(5)
const g = new ListNode(6)
const h = new ListNode(1)

f.next = g
g.next = h
h.next = c

console.log(getIntersectionNode(a, f))

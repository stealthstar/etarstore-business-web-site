/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val
    this.next = null
}

module.exports = {
    print: (result) => {
        let r = []

        while (result) {
            r.push(result.val)

            result = result.next
        }

        console.log(r.join(','))
    },
    ListNode: ListNode,
}

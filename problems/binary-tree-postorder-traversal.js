/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    if (!root) return []

    // solution 1. recursive
    // let result = []
    // postorder(root, result)
    // return result

    // solution 2. stack

    let result = []
    let stack = []

    // postorder visit: left, right, root
    /**
     * 1. Push root to first stack.
     * 2. Loop while first stack is not empty
     *   2.1 Pop a node from first stack and push it to second stack(res[])
     *   2.2 Push left and right children of the popped node to first stack
     * 3. Pop all elements from second stack(res.reverse())
     */
    stack.push(root)

    while (stack.length !== 0) {
        let cur = stack.pop()
        // treat it as stack, store them in reverse order:
        // i.e , right, left, root
        result.unshift(cur.val)
        if (cur.left) stack.push(cur.left)
        if (cur.right) stack.push(cur.right)
    }

    return result
}

var postorder = function (root, result) {
    if (root.left) postorder(root.left, result)
    if (root.right) postorder(root.right, result)
    result.push(root.val)
}

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

/**
 *         4
 *       /   \
 *      2     6
 *     / \   / \
 *    1   3 5   7
 */
console.log(
    postorderTraversal(
        new TreeNode(
            4,
            new TreeNode(2, new TreeNode(1), new TreeNode(3)),
            new TreeNode(6, new TreeNode(5), new TreeNode(7))
        )
    )
)

/**
 *    1
 *     \
 *      2
 *     /
 *    4
 *     \
 *      3
 */
console.log(
    postorderTraversal(
        new TreeNode(
            1,
            undefined,
            new TreeNode(2, new TreeNode(4, undefined, new TreeNode(3)))
        )
    )
)

console.log(
    postorderTraversal(
        new TreeNode(1, undefined, new TreeNode(2, new TreeNode(3)))
    )
)

console.log(
    postorderTraversal(new TreeNode(1, new TreeNode(3), new TreeNode(2)))
)

/**
 * 144. Binary Tree Preorder Traversal
 *
Given the root of a binary tree, return the preorder traversal of its nodes' values.

Example 1:


Input: root = [1,null,2,3]
Output: [1,2,3]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
Example 4:


Input: root = [1,2]
Output: [1,2]
Example 5:


Input: root = [1,null,2]
Output: [1,2]


Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100


Follow up: Recursive solution is trivial, could you do it iteratively?

 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    if (!root) return []

    // solution 1. recursive
    // let result = []
    // preorder(root, result)
    // return result

    // solution 2. stack
    let stack = []
    let result = []
    let curr = root

    while (curr || stack.length > 0) {
        if (curr) {
            stack.push(curr)
            result.push(curr.val)
            curr = curr.left
        } else {
            curr = stack.pop()
            curr = curr.right
        }
    }

    return result
}

var preorder = function (root, result) {
    result.push(root.val)
    if (root.left) preorder(root.left, result)
    if (root.right) preorder(root.right, result)
}

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

console.log(
    preorderTraversal(
        new TreeNode(
            1,
            undefined,
            new TreeNode(2, new TreeNode(4, undefined, new TreeNode(3)))
        )
    )
)

console.log(
    preorderTraversal(
        new TreeNode(1, undefined, new TreeNode(2, new TreeNode(3)))
    )
)

console.log(
    preorderTraversal(new TreeNode(1, new TreeNode(3), new TreeNode(2)))
)

console.log(
    preorderTraversal(
        new TreeNode(
            4,
            new TreeNode(2, new TreeNode(1), new TreeNode(3)),
            new TreeNode(6, new TreeNode(5), new TreeNode(7))
        )
    )
)

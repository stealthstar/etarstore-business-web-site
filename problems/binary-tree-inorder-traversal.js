/**
 * 94. Binary Tree Inorder Traversal
 *
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.



Example 1:


Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
Example 4:


Input: root = [1,2]
Output: [2,1]
Example 5:


Input: root = [1,null,2]
Output: [1,2]


Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100


Follow up: Recursive solution is trivial, could you do it iteratively?

 * pre-, in-, post-是指parent node相對於child node的順序。假設binary search tree如下：

    4
   / \
  2   6
 / \ / \
1  3 5  7
preorder: 中->左->右，4213657
inorder: 左->中->右，1234567 (對binary search tree做inorder traversal就是依序拿取)
postorder: 左->右->中，1325764

 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    if (!root) return []

    // solution 1. recursive
    // let result = []
    // inorder(root, result)
    // return result

    // solution 2. stack
    let stack = []
    let curr = root
    let result = []

    while (curr || stack.length > 0) {
        if (curr) {
            stack.push(curr)
            curr = curr.left
        }
        else {
            curr = stack.pop()
            result.push(curr.val)
            curr = curr.right
        }
    }

    return result
}

var inorder = function (nodes, result) {
    if (nodes.left) inorder(nodes.left, result)
    result.push(nodes.val)
    if (nodes.right) inorder(nodes.right, result)
}

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

console.log(
    inorderTraversal(
        new TreeNode(1, undefined, new TreeNode(2, new TreeNode(4, undefined, new TreeNode(3))))
    )
)

/**
 * 4
 */

console.log(
    inorderTraversal(
        new TreeNode(
            4,
            new TreeNode(2, new TreeNode(1), new TreeNode(3)),
            new TreeNode(6, new TreeNode(5), new TreeNode(7))
        )
    )
)

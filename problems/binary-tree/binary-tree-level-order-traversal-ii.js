/**
 * 107. Binary Tree Level Order Traversal II

Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).



Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[15,7],[9,20],[3]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []


Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    const map = {}

    const _levelOrderBottom = function (node, level){
        if (!node) return
        if (!map[level]) map[level] = []

        map[level].push(node.val)

        if (node.left) _levelOrderBottom(node.left, level +1)
        if (node.right) _levelOrderBottom(node.right, level + 1)

        // console.log(node)
    }

    _levelOrderBottom(root, 0)

    return Object.values(map).reverse()
}

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

console.log(
    levelOrderBottom(
        new TreeNode(
            3,
            new TreeNode(9),
            new TreeNode(20, new TreeNode(15), new TreeNode(7))
        )
    )
)
console.log(
    levelOrderBottom(
        new TreeNode(
            3,
            new TreeNode(9, new TreeNode(6), new TreeNode(12)),
            new TreeNode(20, new TreeNode(15), new TreeNode(7))
        )
    )
)

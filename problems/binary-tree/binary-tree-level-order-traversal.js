/**
 * 102. Binary Tree Level Order Traversal
Medium

5973

125

Add to List

Share
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []

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
var levelOrder = function (root) {
    const map = {}
    const _levelOrder = (node, level) => {
        if (!node) return

        if (!map[level]) {
            map[level] = []
        }

        map[level].push(node.val)

        if (node.left) {
            _levelOrder(node.left, level + 1)
        }
        if (node.right) {
            _levelOrder(node.right, level + 1)
        }
    }

    _levelOrder(root, 0)

    return Object.values(map)
}

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

console.log(
    levelOrder(
        new TreeNode(
            3,
            new TreeNode(9),
            new TreeNode(20, new TreeNode(15), new TreeNode(7))
        )
    )
)
console.log(
    levelOrder(
        new TreeNode(
            3,
            new TreeNode(9, new TreeNode(6), new TreeNode(12)),
            new TreeNode(20, new TreeNode(15), new TreeNode(7))
        )
    )
)
console.log(levelOrder(new TreeNode(1)))

console.log(levelOrder())

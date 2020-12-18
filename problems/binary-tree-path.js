/**
 * 257. Binary Tree Paths
 * #Tree #DFS #Depth-first-search
 * Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    if (!root) return []
    let results = []

    const bfs = function (r, path) {
        if (!r.left && !r.right) {
            results.push(path + r.val)
            return
        }
        if (r.left) {
            bfs(r.left, path + r.val + '->')
        }
        if (r.right) {
            bfs(r.right, path + r.val + '->')
        }
    }

    bfs(root, '')

    return results
}

console.log(
    binaryTreePaths(
        new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3))
    )
)

/**
 *
 * @param {Number} val
 * @param {TreeNode} left
 * @param {TreeNode} right
 */
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

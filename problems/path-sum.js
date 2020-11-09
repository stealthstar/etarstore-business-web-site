/**
 * #Tree #DFS #Depth-first-Search
 * 112. Path Sum
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

    Note: A leaf is a node with no children.

    Example:

    Given the below binary tree and sum = 22,

         5
        / \
       4   8
      /   / \
     11  13  4
    /  \      \
   7    2      1
   return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
// var hasPathSum = function (root, sum) {
//     if (!root) {
//         return false
//     }

//     if (!root.left && !root.right) {
//         return root.val === sum
//     }

//     let hasPath = false

//     /**
//      * @param {TreeNode} node
//      * @param {number} current
//      */
//     const dfs = function (treeNode, current) {
//         if (!treeNode) {
//             return false
//         }

//         current += treeNode.val

//         if (current === sum && !treeNode.left && !treeNode.right) {
//             hasPath = true
//         }

//         dfs(treeNode.left, current)
//         dfs(treeNode.right, current)
//     }

//     dfs(root, 0)

//     return hasPath
// }

var hasPathSum = function (root, sum) {
    if (!root) return false

    sum -= root.val

    if (!root.left && !root.right && sum === 0) return true

    return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
}

/**
 * Definition for a binary tree node.
 * @param {Number} val
 * @param {TreeNode} left
 * @param {TreeNode} right
 */
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const root = new TreeNode(
    5,
    new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
    new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
)

console.log(best(root, 22))

console.log(best(new TreeNode(1, new TreeNode(2)), 1))

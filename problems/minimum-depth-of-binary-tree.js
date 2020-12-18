/**
 * 111. Minimum Depth of Binary Tree
 * Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example 1:
Input: root = [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15  17

Output: 2

Example 2:

Input: root = [2,null,3,null,4,null,5,null,6]

    2
     \
      3
       \
        4
         \
          5
           \
            6

Output: 5
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) return 0

    if (!root.left) {
        console.log('left ' + root.val)
        return 1 + minDepth(root.right)
    }
    if (!root.right) {
        console.log('right ' + root.val)
        return 1 + minDepth(root.left)
    }

    return 1 + Math.min(minDepth(root.left), minDepth(root.right))
}

console.log(
    minDepth(
        new TreeNode(
            3,
            new TreeNode(9),
            new TreeNode(20, new TreeNode(15), new TreeNode(7))
        )
    )
)

// console.log(
//     minDepth(
//         new TreeNode(
//             2,
//             null,
//             new TreeNode(
//                 3,
//                 null,
//                 new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6)))
//             )
//         )
//     )
// )

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

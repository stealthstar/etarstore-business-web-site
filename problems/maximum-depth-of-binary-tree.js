/**
 * #Tree #Depth-first-Search #DFS
 * 104. Maximum Depth of Binary Tree
 *
 * Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.

Given binary tree [3,4,5,-7,-6,null,null,-7,null,-5,null,null,null,-4]

      3
     / \
    4   5
   / \
 -7  -6
 /   /
-7  -5
    /
  -4
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0

    // 每往下一層就加1
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

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

// const test1 = new TreeNode(
//     3,
//     new TreeNode(9, null, null),
//     new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null))
// )

const test2 = new TreeNode(
    3,
    new TreeNode(
        4,
        new TreeNode(-7, new TreeNode(-7, null, null), null),
        new TreeNode(
            -6,
            new TreeNode(-5, new TreeNode(-4, null, null), null),
            null
        )
    ),
    new TreeNode(5, null, null)
)

// console.log(maxDepth(test1))
console.log(maxDepth(test2))

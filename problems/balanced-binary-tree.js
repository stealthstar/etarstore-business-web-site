/**
 * 110. Balanced Binary Tree

 * Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

Input: root = [3,9,20,null,null,15,7]
Output: true

   3
  / \
 9  20
    / \
   15  7
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

         1
        / \
       2   2
      / \
     3   3
    / \
   4   4
Input: root = []
Output: true

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (!root || (!root.left && !root.right)) return true

    return dfs(root) !== -1
}

const dfs = function (root) {
    if (!root) return 0

    let left = dfs(root.left)
    if (left === -1) return -1
    let right = dfs(root.right)
    if (right === -1) return -1

    // diff
    // 如果深度超過1 就回傳-1，上面判斷是-1 就會中斷遞迴
    if (Math.abs(left - right) > 1) {
        return -1
    }

    // 每往下一層就會多加1
    return 1 + Math.max(left, right)
}

// console.log(isBalanced(new TreeNode(1, new TreeNode(2))))
// console.log(isBalanced(new TreeNode(1)))
// console.log(
//     isBalanced(
//         new TreeNode(
//             3,
//             new TreeNode(9),
//             new TreeNode(20, new TreeNode(15), new TreeNode(7))
//         )
//     )
// )
console.log(
    isBalanced(
        new TreeNode(
            1,
            new TreeNode(
                2,
                new TreeNode(3, new TreeNode(4), new TreeNode(4)),
                new TreeNode(3)
            ),
            new TreeNode(2)
        )
    )
)
// console.log(isBalanced())

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

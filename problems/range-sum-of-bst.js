/**
 * 938. Range Sum of BST
 *
 * Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].



Example 1:


Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32
Example 2:


Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
Output: 23


Constraints:

The number of nodes in the tree is in the range [1, 2 * 104].
1 <= Node.val <= 105
1 <= low <= high <= 105
All Node.val are unique.

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
    //
    // let result = 0

    // const dfs = function (r) {
    //     if (!r) {
    //         return 0
    //     }

    //     if (r.val >= low && r.val <= high) {
    //         result += r.val
    //     }

    //     dfs(r.left)
    //     dfs(r.right)
    // }

    // dfs(root)

    // 精簡自我調用版
    if (!root) {
        return 0
    }

    return (
        (root.val >= low && root.val <= high ? root.val : 0) +
        rangeSumBST(root.left, low, high) +
        rangeSumBST(root.right, low, high)
    )
}

console.log(
    rangeSumBST(
        new TreeNode(
            10,
            new TreeNode(5, new TreeNode(3), new TreeNode(7)),
            new TreeNode(15, null, new TreeNode(18))
        ),
        7,
        15
    )
)
console.log(
    rangeSumBST(
        new TreeNode(
            10,
            new TreeNode(
                5,
                new TreeNode(3, new TreeNode(1)),
                new TreeNode(7, new TreeNode(6))
            ),
            new TreeNode(15, new TreeNode(13), new TreeNode(18))
        ),
        6,
        10
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

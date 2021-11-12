/**
 * 563. Binary Tree Tilt
 *
 * Given the root of a binary tree, return the sum of every tree node's tilt.

The tilt of a tree node is the absolute difference between the sum of all left subtree node values and all right subtree node values. If a node does not have a left child, then the sum of the left subtree node values is treated as 0. The rule is similar if there the node does not have a right child.



Example 1:


Input: root = [1,2,3]
Output: 1
Explanation:
Tilt of node 2 : |0-0| = 0 (no children)
Tilt of node 3 : |0-0| = 0 (no children)
Tile of node 1 : |2-3| = 1 (left subtree is just left child, so sum is 2; right subtree is just right child, so sum is 3)
Sum of every tilt : 0 + 0 + 1 = 1
Example 2:


Input: root = [4,2,9,3,5,null,7]
Output: 15
Explanation:
Tilt of node 3 : |0-0| = 0 (no children)
Tilt of node 5 : |0-0| = 0 (no children)
Tilt of node 7 : |0-0| = 0 (no children)
Tilt of node 2 : |3-5| = 2 (left subtree is just left child, so sum is 3; right subtree is just right child, so sum is 5)
Tilt of node 9 : |0-7| = 7 (no left child, so sum is 0; right subtree is just right child, so sum is 7)
Tilt of node 4 : |(3+5+2)-(9+7)| = |10-16| = 6 (left subtree values are 3, 5, and 2, which sums to 10; right subtree values are 9 and 7, which sums to 16)
Sum of every tilt : 0 + 0 + 0 + 2 + 7 + 6 = 15
Example 3:


Input: root = [21,7,14,1,1,2,2,3,3]
Output: 9


Constraints:

The number of nodes in the tree is in the range [0, 104].
-1000 <= Node.val <= 1000
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * https://www.cnblogs.com/grandyang/p/6786643.html
 * https://windsuzu.github.io/leetcode-563/
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function (root) {
    let result = 0

    const dfs = function (r) {
        if (!r) {
            return 0
        }

        const left = dfs(r.left)
        const right = dfs(r.right)

        // console.log(r.val)
        // console.log(left)
        // console.log(right)
        // console.log('----------')

        result += Math.abs(left - right)

        // 這行等於 63,64行的 value
        console.log(left + right + r.val)
        // 依序從leaf節點加總上去
        return left + right + r.val
    }

    dfs(root, result)

    return result
}

// console.log(findTilt(new TreeNode(1, new TreeNode(2), new TreeNode(3))))
console.log(
    findTilt(
        new TreeNode(
            4,
            new TreeNode(2, new TreeNode(3), new TreeNode(5)),
            new TreeNode(9, null, new TreeNode(7))
        )
    )
)
// console.log(
//     findTilt(
//         new TreeNode(
//             21,
//             new TreeNode(
//                 7,
//                 new TreeNode(1, new TreeNode(3), new TreeNode(3)),
//                 new TreeNode(1)
//             ),
//             new TreeNode(14, new TreeNode(2), new TreeNode(2))
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

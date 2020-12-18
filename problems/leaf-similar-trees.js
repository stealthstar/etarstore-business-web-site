/**
 * 872. Leaf-Similar Trees
 * #DFS #Depth-first search
 *
 * Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.



Example 1:


Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
Output: true
Example 2:

Input: root1 = [1], root2 = [1]
Output: true
Example 3:

Input: root1 = [1], root2 = [2]
Output: false
Example 4:

Input: root1 = [1,2], root2 = [2,2]
Output: true
Example 5:


Input: root1 = [1,2,3], root2 = [1,3,2]
Output: false


Constraints:

The number of nodes in each tree will be in the range [1, 200].
Both of the given trees will have values in the range [0, 200].
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    let leaf1 = []
    let leaf2 = []

    const bfs = function (r, arr) {
        if (!r.left && !r.right) {
            arr.push(r.val)
            return
        }
        if (r.left) bfs(r.left, arr)
        if (r.right) bfs(r.right, arr)
    }

    bfs(root1, leaf1)
    bfs(root2, leaf2)

    if (leaf1.length !== leaf2.length) {
        return false
    }

    for (let i = 0; i < leaf1.length; i++) {
        if (leaf1[i] !== leaf2[i]) {
            return false
        }
    }

    return true
}

console.log(
    leafSimilar(
        new TreeNode(
            3,
            new TreeNode(
                5,
                new TreeNode(6),
                new TreeNode(2, new TreeNode(7), new TreeNode(4))
            ),
            new TreeNode(1, new TreeNode(9), new TreeNode(8))
        ),
        new TreeNode(
            3,
            new TreeNode(5, new TreeNode(6), new TreeNode(7)),
            new TreeNode(
                1,
                new TreeNode(4),
                new TreeNode(2, new TreeNode(9), new TreeNode(8))
            )
        )
    )
)
// console.log(leafSimilar(new TreeNode(1), new TreeNode(1)))
// console.log(leafSimilar(new TreeNode(1), new TreeNode(2)))
// console.log(
//     leafSimilar(
//         new TreeNode(1, new TreeNode(2)),
//         new TreeNode(2, new TreeNode(2))
//     )
// )
// console.log(
//     leafSimilar(
//         new TreeNode(1, new TreeNode(2), new TreeNode(3)),
//         new TreeNode(1, new TreeNode(3), new TreeNode(2))
//     )
// )
console.log(
    leafSimilar(
        new TreeNode(
            3,
            new TreeNode(
                5,
                new TreeNode(6),
                new TreeNode(2, new TreeNode(7), new TreeNode(4))
            ),
            new TreeNode(1, new TreeNode(9), new TreeNode(8))
        ),
        new TreeNode(
            3,
            new TreeNode(5, new TreeNode(6), new TreeNode(7)),
            new TreeNode(
                1,
                new TreeNode(4),
                new TreeNode(
                    2,
                    new TreeNode(9),
                    new TreeNode(11, new TreeNode(8), new TreeNode(10))
                )
            )
        )
    )
)

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

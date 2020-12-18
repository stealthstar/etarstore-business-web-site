/**
 * 897. Increasing Order Search Tree
 * #Tree #DFS #Depth-first search
 * Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.



Example 1:


Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
Example 2:


Input: root = [5,1,7]
Output: [1,null,5,null,7]


Constraints:

The number of nodes in the given tree will be in the range [1, 100].
0 <= Node.val <= 1000

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
    let newTree = new TreeNode(0)
    // 先記憶住第一個點
    let current = newTree

    const bfs = function (r) {
        if (!r) {
            return
        }

        if (r.left) {
            bfs(r.left)
        }

        // 下一個節點串接指向新節點
        current.right = new TreeNode(r.val)
        // current 指向下一個節點
        current = current.right

        if (r.right) {
            bfs(r.right)
        }
    }

    bfs(root)

    return newTree.right
}

console.log(increasingBST(new TreeNode(5, new TreeNode(1), new TreeNode(7))))

console.log(
    increasingBST(
        new TreeNode(
            5,
            new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)),
            new TreeNode(6, new TreeNode(8, new TreeNode(7), new TreeNode(9)))
        )
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

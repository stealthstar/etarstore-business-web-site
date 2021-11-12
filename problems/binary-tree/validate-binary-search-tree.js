/**
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

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
var isValidBST = function (root) {
    // solution 1
    // let last = null

    // const _isValidBST = (node) => {
    //     if (!node) return true
    //     if (!_isValidBST(node.left)) return false
    //     if (last && node.val <= last.val) return false
    //     last = node
    //     return _isValidBST(node.right)
    // }

    // return _isValidBST(root)

    // solution 2
    const _isValidBST = (node, max, min) => {
        if (node) {
            console.log(node.val)
            console.log('max ' + max)
            console.log('min ' + min)
            console.log()
        }
        if (!node) return true
        if (min !== null && node.val <= min) return false
        if (max !== null && node.val >= max) return false
        return (
            _isValidBST(node.left, node.val, min) &&
            _isValidBST(node.right, max, node.val)
        )
    }

    return _isValidBST(root, null, null)
}

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

// console.log(isValidBST(new TreeNode(2, new TreeNode(1), new TreeNode(3)))) //true
// console.log(isValidBST(new TreeNode(2, new TreeNode(2), new TreeNode(2)))) // false
// console.log(isValidBST(new TreeNode(1, null, new TreeNode(1)))) // false
// console.log(isValidBST(new TreeNode(0, null, new TreeNode(-1)))) // false
// console.log(isValidBST(new TreeNode(0))) // true
// // // false
// console.log(
//     isValidBST(
//         new TreeNode(
//             5,
//             new TreeNode(1),
//             new TreeNode(4, new TreeNode(3), new TreeNode(6))
//         )
//     )
// )
// false
console.log(
    isValidBST(
        new TreeNode(
            5,
            new TreeNode(4, new TreeNode(3)),
            new TreeNode(6, new TreeNode(3), new TreeNode(7))
        )
    )
)

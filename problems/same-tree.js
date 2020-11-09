/**
 * #Tree #Depth-first-Search #DFS
 * 100. Same Tree
 *
 * Given two binary trees, write a function to check if they are the same or not.
 * Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
 *
 * Example 1:
 *
 * Input:     1         1
 *           / \       / \
 *          2   3     2   3
 *
 *         [1,2,3],   [1,2,3]
 *
 * Output: true
 *
 * Example 2:
 *
 * Input:     1         1
 *           /           \
 *          2             2
 *
 *        [1,2],     [1,null,2]
 *
 * Output: false
 *
 * Example 3:
 *
 * Input:     1         1
 *           / \       / \
 *          2   1     1   2
 *
 *         [1,2,1],   [1,1,2]
 *
 * Output: false
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}
/**
 * This is my solution
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    /**
     * @param {Array} nodes
     * @param {TreeNode} tree
     */
    const traversal = function (nodes, tree) {
        if (!tree) {
            return
        }

        nodes.push(tree.val)

        if (!tree.left) {
            nodes.push(null)
        } else {
            traversal(nodes, tree.left)
        }

        if (!tree.right) {
            nodes.push(null)
        } else {
            traversal(nodes, tree.right)
        }
    }

    const leftNodes = []
    const rightNodes = []

    traversal(leftNodes, p)
    traversal(rightNodes, q)

    return !(
        leftNodes.length !== rightNodes.length ||
        leftNodes.some((n, i) => n !== rightNodes[i])
    )
}

/**
 * Very simple and clean solution, ooow
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (!p && !q) return true
    if (!p || !q) return false
    if (p.val !== q.val) return false

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

/***
 * ========================================================================
 * Test cases
 * ========================================================================
 */
const p = new TreeNode(1)
p.left = new TreeNode(2)
p.right = new TreeNode(3)

const q = new TreeNode(1)
q.left = new TreeNode(2)
q.right = new TreeNode(3)

console.log(isSameTree(p, q))

const p1 = new TreeNode(1)
p1.left = new TreeNode(2)

const q1 = new TreeNode(1)
q1.right = new TreeNode(2)

console.log(isSameTree(p1, q1))

const p2 = new TreeNode(1)
p2.left = new TreeNode(2)
p2.right = new TreeNode(1)

const q2 = new TreeNode(1)
q2.left = new TreeNode(1)
q2.right = new TreeNode(2)

console.log(isSameTree(p2, q2))

const p3 = new TreeNode(1)
p3.left = new TreeNode(2)
p3.right = new TreeNode(1)

p3.left.right = new TreeNode(5)

const q3 = new TreeNode(1)
q3.left = new TreeNode(1)
q3.right = new TreeNode(2)

console.log(isSameTree(p2, q2))

const p4 = new TreeNode(1)
p4.left = new TreeNode(2)

const q4 = new TreeNode(1)
q4.left = new TreeNode(null)
q4.right = new TreeNode(2)

console.log(isSameTree(p4, q4))

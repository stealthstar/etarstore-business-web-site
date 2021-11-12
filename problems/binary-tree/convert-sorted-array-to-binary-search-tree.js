/**
 * #Tree #Depth-first-search #dfs
 * 108. Convert Sorted Array to Binary Search Tree
 *
 * Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5

二分查找，一開始先使用中間作為根
然後從中間切成左右兩邊，左右各別遞迴找出子節點

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    return getBST(nums, 0, nums.length - 1)
}

const getBST = function(nums, left, right) {
    if (left > right) return null
    // 每次取中間值插入樹中
    let mid = Math.floor((right + left) / 2)
    let node = new TreeNode(nums[mid])
    // 左子樹找左邊->中間
    node.left = getBST(nums, left, mid - 1)
    // 右子樹找中間->右邊
    node.right = getBST(nums, mid + 1, right)

    return node
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))

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

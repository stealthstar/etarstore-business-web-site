# LeetCode

算法的复杂度分析。
排序算法，以及他们的区别和优化。
数组中的双指针、滑动窗口思想。
利用 Map 和 Set 处理查找表问题。
链表的各种问题。
利用递归和迭代法解决二叉树问题。
栈、队列、DFS、BFS。
回溯法、贪心算法、动态规划。

## Backtracking (回溯法)

遞迴求解，通常用於需暴力找出所有排列組合，但又需排除掉某些不正確的組合時使用，通常會有三個主要部分：

### 遞迴函式的符合條件

當結果符合時，儲存或輸出答案，並跳離遞迴。

### 遞迴函式的參數

一定會有一個 `result` 用於儲存當前的組合，後面會夾帶 1 ~ N 個參數，用於暫存當前遞迴的狀況，例如 `backtracking(current, level)`, `backtracking(current, left, right)`

### 遞迴邏輯

在未滿足符合條件時，要繼續調整參數並且回溯下去，直到找到答案為止。

### Example

因為是遞迴求解，所以很抽象不好懂，這裡以 leetcode 的 `generate-parentheses` 一道題目為例，給定 n，要找出 n 個括號的各種組合，例如 `n=2`，答案會是 `[(()), ()()]`

函式寫起來大概會長這樣：

```
const backtracking = (result, left, right) => {
    if (result.length === n * 2) {
        results.push(result)
        return
    }

    if (left > 0) {
        backtracking(result + '(', left - 1, right)
    }

    if (right > 0 && left !== right) {
        backtracking(result + ')', left, right - 1)
    }
}
```

### References

-   [算法——回溯（backtracking)](https://zhuanlan.zhihu.com/p/73799959)
-   [LeetCode--回溯法心得](https://zhuanlan.zhihu.com/p/51882471)

---

## Binary Search

一種在有序陣列中尋找某一特定元素的搜尋演算法，原理為將欲搜尋的值，與所有資料的中間值(中位數)做比對。

### 使用方式

1. 找出 Middle = ⌊(Left + Right)/2⌋
2. 將鍵值key與搜尋範圍的中間資料data[Middle]作比對
  > * key = data[Middle]：找到
  > * key < data[Middle]：縮小搜尋範圍 ⇒ Right = Middle-1
  > * key > data[Middle]：縮小搜尋範圍 ⇒ Left = Middle+1
3. 重複上步驟，直到找到資料或搜尋範圍交叉(找不到)

### 適用場景

1. 找出序列中的某筆資料
2. 資料已經依照大小排序過

---

## Two Pointer

### 使用方式

1. 宣告兩個變數(快指針、慢指針)，指針可以從頭開始、從尾開始或是一頭一尾開始內縮
2. 迴圈每跑一回快指針就加 1，符合特定條件時慢指針加 1

### 適用場景

1. 對序列做一些操作，例如過濾、刪除符合特定條件的數值
2. 不可以使用額外的陣列、只能對給定的陣列進行修改
3. 資料已經依照大小排序過

---

## Binary Tree Traversal

pre-, in-, post-是指parent node相對於child node的順序。假設binary search tree如下：

    4
   / \
  2   6
 / \ / \
1  3 5  7
preorder: 中->左->右，4213657
inorder: 左->中->右，1234567 (對binary search tree做inorder traversal就是依序拿取)
postorder: 左->右->中，1325764
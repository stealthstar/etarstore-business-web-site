# Backtracking (回溯法)

遞迴求解，通常用於需暴力找出所有排列組合，但又需排除掉某些不正確的組合時使用，通常會有三個主要部分：

## 遞迴函式的符合條件

當結果符合時，儲存或輸出答案，並跳離遞迴。

## 遞迴函式的參數

一定會有一個 `result` 用於儲存當前的組合，後面會夾帶 1 ~ N 個參數，用於暫存當前遞迴的狀況，例如 `backtracking(current, level)`, `backtracking(current, left, right)`

## 遞迴邏輯

在未滿足符合條件時，要繼續調整參數並且回溯下去，直到找到答案為止。

## Example

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

## References

-   [算法——回溯（backtracking)](https://zhuanlan.zhihu.com/p/73799959)
-   [LeetCode--回溯法心得](https://zhuanlan.zhihu.com/p/51882471)

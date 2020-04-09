# Binary Search

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
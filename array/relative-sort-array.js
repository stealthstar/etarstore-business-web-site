/**
 * 1122. Relative Sort Array
 *
 * Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.



Example 1:

Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]

Constraints:

arr1.length, arr2.length <= 1000
0 <= arr1[i], arr2[i] <= 1000
Each arr2[i] is distinct.
Each arr2[i] is in arr1.

Hints
1. Using a hashmap, we can map the values of arr2 to their position in arr2.
2. After, we can use a custom sorting function.

解題策略

1. 用一個 map 設定會在 arr1 出現的數字

```
{
    2: 1,
    4: 1,
    3: 1
    ...
}

2. 用兩個 map 儲存 arr1 每個數字出現的次數、以及未出現在 arr1 中的數字

```
{
    3: 3,
    1: 2,
    4: 1,
    ...
}
```

3. 使用雙層迴圈將有出現的數字依照順序和次數依序插入到答案中
4. 再跑一次迴圈將未出現的數字插入到結尾
```

 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let map = {}

    for (let i = 0; i < arr2.length; i++) {
        map[arr2[i]] = 1
    }

    let count = {}
    let non = []

    for (let i = 0; i < arr1.length; i++) {
        if (!count[arr1[i]]) {
            count[arr1[i]] = 0
        }
        if (!map[arr1[i]]) {
            non.push(arr1[i])
        }

        count[arr1[i]] += 1
    }

    let result = []

    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < count[arr2[i]]; j++) {
            result.push(arr2[i])
        }
    }

    non = non.sort((a, b) => a - b)

    for (let i = 0; i < non.length; i++) {
        result.push(non[i])
    }

    return result
};

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))
console.log(relativeSortArray([28,6,22,8,44,17], [22,28,8,6]))

// console.log([2,3,1,3,2,4,6,7,9,2,19].sort((a, b) => a - b))
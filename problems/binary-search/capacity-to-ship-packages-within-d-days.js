/**
 * 1011. Capacity To Ship Packages Within D Days

A conveyor belt has packages that must be shipped from one port to another within days days.

The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.

Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.



Example 1:

Input: weights = [1,2,3,4,5,6,7,8,9,10], days = 5
Output: 15
Explanation: A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
1st day: 1, 2, 3, 4, 5
2nd day: 6, 7
3rd day: 8
4th day: 9
5th day: 10

Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed.
Example 2:

Input: weights = [3,2,2,4,1,4], days = 3
Output: 6
Explanation: A ship capacity of 6 is the minimum to ship all the packages in 3 days like this:
1st day: 3, 2
2nd day: 2, 4
3rd day: 1, 4
Example 3:

Input: weights = [1,2,3,1,1], days = 4
Output: 3
Explanation:
1st day: 1
2nd day: 2
3rd day: 3
4th day: 1, 1


Constraints:

1 <= days <= weights.length <= 5 * 104
1 <= weights[i] <= 500


Reference:
http://www.noteanddata.com/leetcode-1014-Capacity-To-Ship-Packages-Within-D-Days-google-interview-problem-java-binary-search-solution-note.html
https://haogroot.com/2021/02/13/binary-search-4_leetcode/

 *
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
    let right = 0
    let left = 0

    for (const weight of weights) {
        // 最大載重量應為所有貨物的重量總和
        right += weight
        // 最小載重量應為陣列中最大值(最重的貨物)
        left = Math.max(left, weight)
    }

    const isLessOrEqualDays = function (capacity) {
        let total = 0
        let _days = 1

        for (const weight of weights) {
            if (total + weight > capacity) {
                _days += 1
                total = weight
            } else {
                total += weight
            }
        }

        return _days <= days
    }

    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2)
        // 如果載重量要花費的天數比總天數小，代表載重量太大，未滿最大天數就搬完了
        // 要減少 capacity 找看看有沒有更佳解
        if (isLessOrEqualDays(mid)) {
            right = mid
        } else {
            // 如果載重量要花費天數比總天數大，代表載重量太小，花費的天數超出最大天數
            // 因此要增加 capacity
            left = mid + 1
        }
    }

    return left
}

// console.log(Math.floor(10 + (55 - 10) / 2))
// console.log(Math.floor((55 + 10) / 2))
// 最大載重 = 55, 最小載重 = 10
// 使用二分查找法，不斷從這區間限縮範圍，找出可以在 5 天內載完所有貨物的載重量
console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))

console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3))
console.log(shipWithinDays([1, 2, 3, 1, 1], 4))

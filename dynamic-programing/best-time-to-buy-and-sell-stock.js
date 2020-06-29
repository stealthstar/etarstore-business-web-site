/**
 * 121. Best Time to Buy and Sell Stock
 *
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
 * Note that you cannot sell a stock before you buy one.
 *
 * Example 1:
 *
 *   Input: [7,1,5,3,6,4]
 *   Output: 5
 *   Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 *                Not 7-1 = 6, as selling price needs to be larger than buying price.
 *
 * Example 2:
 *
 *   Input: [7,6,4,3,1]
 *   Output: 0
 *   Explanation: In this case, no transaction is done, i.e. max profit = 0.
 *
 * Solution:
 *   1. 找出數字最小的那天買股票
 *   2. 逐一比對 prices[dayOfSell] - bidPrice 找出最高的價差
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length === 0 || prices.length === 1) {
        return 0
    }

    let max = 0
    let dayOfSell = 0
    let bidPrice = prices[0]

    for (dayOfSell; dayOfSell < prices.length; dayOfSell++) {
        if (prices[dayOfSell] < bidPrice) {
            bidPrice = prices[dayOfSell]
        }
        else if (prices[dayOfSell] - bidPrice > max) {
            max = prices[dayOfSell] - bidPrice
        }
    }

    return max
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7,6,4,3,1]))

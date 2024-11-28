
// Code
// Testcase
// Testcase
// Test Result
// 121. Best Time to Buy and Sell Stock
// Solved
// Easy
// Topics
// Companies
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104
// Recommended Time & Space Complexity
// You should aim for a solution with O(n) time and O(1) space, where n is the size of the input array.


// Hint 1
// A brute force solution would be to iterate through the array with index i, considering it as the day to buy, and trying all possible options for selling it on the days to the right of index i. This would be an O(n^2) solution. Can you think of a better way?


// Hint 2
// You should buy at a price and always sell at a higher price. Can you iterate through the array with index i, considering it as either the buying price or the selling price?


// Hint 3
// We can iterate through the array with index i, considering it as the selling value. But what value will it be optimal to consider as buying point on the left of index i?


// Hint 4
// We are trying to maximize profit = sell - buy. If the current i is the sell value, we want to choose the minimum buy value to the left of i to maximize the profit. The result will be the maximum profit among all. However, if all profits are negative, we can return 0 since we are allowed to skip doing transaction.
//  -->
class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0
        let rigth = 1
        //left is buy
        //rigth is sell
        let maxP = 0
        while(rigth < prices.length){
            if(prices[left] < prices[rigth]){
                let profit =  prices[rigth] - prices[left]
                maxP = Math.max(maxP, profit)
            }else{
                left = rigth
            }
            rigth++
        }
        return maxP
    }
}
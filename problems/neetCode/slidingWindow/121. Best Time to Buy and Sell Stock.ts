/**
 * 121. Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Easy
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 */

function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let profit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else {
      profit = Math.max(profit, price - minPrice);
    }
  }
  return profit;
}
// Time complexity: O(n)
// Space complexity: O(1)

// Another solution: Use Sliding Window
function maxProfit2(prices: number[]): number {
  let left = 0;
  let right = 1;
  let profit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      profit = Math.max(profit, prices[right] - prices[left]);
    } else {
      left = right;
    }
    right++;
  }
  return profit;
}

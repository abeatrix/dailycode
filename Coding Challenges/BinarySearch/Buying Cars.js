/*
Buying Cars
Given a list of integers prices representing prices of cars for sale, and a budget k, return the maximum number of cars you can buy.

Constraints

n ≤ 200,000 where n is the length of prices
Example 1
Input
prices = [90, 30, 20, 40, 90]
k = 95
Output
3
Explanation
We can buy the cars with prices 30, 20, and 40.
 */

class Solution {
    solve(prices, k) {
        prices = prices.sort((a,b)=>a-b)
        let i=0;
        if(k-prices[i]>=0){
            while(k>0){
                k=k-prices[i]
                if(k>=0) i++
                else return i
            }
        }
        return i
    }
}

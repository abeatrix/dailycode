/*
Greatest Common Divisor
Given a list of positive integers nums, return the largest positive integer that divides each of the integers.

Constraints

1 ≤ n ≤ 100,000 where n is the length of nums
Example 1
Input
nums = [6, 12, 9]
Output
3
Explanation
3 is the largest integer that divides into 6, 12, and 9.



*/

class Solution {
    solve(nums) {
        nums = [...new Set(nums)].sort((a,b)=>a-b)
        if(nums.length<2) return nums[0]
        let x = nums[0], y=nums[1];
        if(x==0 || x===y) return y
        while(y!=0){
            if(x>y) x=x-y;
            else y=y-x;
        }
        for(let n of nums){
            if(n%x!=0) return 1
        }
        return x
    }
}

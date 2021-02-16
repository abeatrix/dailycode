class Solution {
    solve(nums) {
        nums = nums.sort((a,b)=>a-b)
        for(let i=1, diff=nums[1]-nums[0]; i<nums.length-1; i++){
            if(nums[i]+diff!=nums[i+1]) return false
        }
        return true;
    }
}


/*
Given a list of integers nums, return whether you can rearrange the order of nums such that the difference between every consecutive two numbers is the same.

Constraints

n ≤ 100,000 where n is the length of nums
Example 1
Input
nums = [7, 1, 5, 3]
Output
true
Explanation
If we rearrange nums to [1, 3, 5, 7], then the difference between every two consecutive numbers is 2.
 */

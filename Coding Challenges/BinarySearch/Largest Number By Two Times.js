/*
Largest Number By Two Times
Given a list of integers nums, return whether the largest number is bigger than the second-largest number by more than two times.

Constraints

2 ≤ n ≤ 100,000 where n is the length of nums
Example 1
Input
nums = [3, 6, 9]
Output
false
Explanation
9 is not bigger than 2 * 6.
 */

class Solution {
    solve(nums) {
        let max = nums[0], sec=null;
        for(let i=1; i<nums.length; i++){
            if(nums[i]>=max) sec=max, max=nums[i]
            else if(sec===null || nums[i]>sec) sec = nums[i]
        }
        return (sec*2<max)
    }
}


class Solution {
    solve(nums) {
        let max=-Infinity, sec=-Infinity;
        for(let n of nums){
            if(n>=max)sec=max, max=n;
            else if(n>sec) sec=n;
        }
        return (sec*2<max)
    }
}

/*

Large to Small Sort
Given a list of integers nums, sort the list in the following way:

First number is the maximum
Second number is the minimum
Third number is the 2nd maximum
Fourth number is the 2nd minimum
And so on.
Constraints

n ≤ 100,000 where n is the length of nums.
Example 1
Input
nums = [5, 2, 9, 3]
Output
[9, 2, 5, 3]


*/
class Solution {
    solve(nums) {
        nums = nums.sort((a,b)=>a-b)
        let time = Math.floor(nums.length/2)
        for(let i=0; i<nums.length; i+=2){
            nums.splice(i, 0, nums.pop())
        }
        return nums
    }
}

// Given a list of integers sorted in ascending order nums, square the elements and give the output in sorted order.

class Solution {
    solve(nums) {
        nums.forEach((n, i) =>{
            nums[i] = n*n
        })
        return nums.sort((a, b) => a-b)
    }
}

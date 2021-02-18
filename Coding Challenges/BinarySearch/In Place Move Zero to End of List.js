// In-Place Move Zeros to End of List
// Given a list of integers nums, put all the zeros to the back of the list by modifying the list in-place. The relative ordering of other elements should stay the same.

//Can you do it in \mathcal{O}(1)O(1) additional space?

class Solution {
    solve(nums) {
        let l=0, r=0;
        while(r<nums.length){
            if(nums[r]!=0) {
                if(l!=r){
                    [nums[l], nums[r]] = [nums[r], nums[l]]
                }
                l++
            }
            r++
        }
        return nums
    }
}

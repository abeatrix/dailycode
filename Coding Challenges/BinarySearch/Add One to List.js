class Solution {
    solve(nums) {
        let i=nums.length-1;
        while(i>=0){
            nums[i] = nums[i]+1>9 ? 0 : nums[i]+1
            if(nums[i]!=0) return nums
            i--
        }
        if(nums[0]===0) nums.unshift(1)
        return nums
    }
}

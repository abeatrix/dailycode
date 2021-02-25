class Solution {
    solve(nums, k) {
        let l = 0, r=nums.length-1;
        while(l<r){
            if(k-nums[r]===nums[l]) return true;
            else if(nums[r]+nums[l]>k) r--;
            else l++;
        }
        return false;
    }
}

// two pointers

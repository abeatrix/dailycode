/*
You are given an integer array nums sorted in ascending order (with distinct values), and an integer target.

Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

If target is found in the array return its index, otherwise, return -1.
 */
var search = function(nums, target) {
    let l = 0,
        r = nums.length-1;
    while(r>=l){
        let m = l+(r+l)//2
        if(target === nums[m]) return m;
        else if (nums[m] >= nums[l]){
            if (target >= nums[l] && target < nums[m]) r=m-1
            else l=m+1
        } else {
            if (target<=nums[r] && target > nums[m]) l=m+1
            else r=m-1
        }
    }
    return -1

};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let min = 0
    let max = nums.length-1
    while (max>=min){
        let mid=Math.floor((min+max)/2)
        if (target==nums[mid]) return mid
        else if (nums[mid] >= nums[min]){
            if(target>=nums[min] && target <nums[mid]) max=mid-1
            else min=mid+1
        }
        else{
            if(target<=nums[max] && target>nums[mid]) min=mid+1
            else max=mid-1
        }
    }
    return -1
};
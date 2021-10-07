/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let max = nums[0], cur = 0;
    for(let n of nums){
        if(cur<0) cur=0;
        cur += n;
        max = Math.max(max, cur)
    }
    return max
};
// maxSubArray([-2,1,-3,4,-1,2,1,-5,4])